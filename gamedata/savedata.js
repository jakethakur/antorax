let playerName = sessionStorage.getItem("name");
let playerClass = sessionStorage.getItem("class");
// customisation
// the keys of this (skin, hat, etc.) should be all the ids in skindata, other than the colour keys (hairColour etc.) which should be the word
let customisation = JSON.parse(sessionStorage.getItem("customisation"));

// note session storage doesn't work in firefox local versions, in which case we have to rely on query strings in domain name
// (these are not used otherwise)
const QueryStringParams = (new URL(document.location)).searchParams;
if (customisation === null || typeof customisation.clothing === "undefined") {
	// session storage doesn't work in firefox local versions
	playerName = QueryStringParams.get("name");
	playerClass = QueryStringParams.get("class");
	customisation = {};
	customisation.skinTone = QueryStringParams.get("skinTone");
	//customisation.face = QueryStringParams.get("face"); // not yet customisable
	customisation.clothing = QueryStringParams.get("clothing");
	customisation.hair = QueryStringParams.get("hair");
	customisation.hairColour = QueryStringParams.get("hairColour");
	customisation.hat = QueryStringParams.get("hat");
}

// customisation validation (probs unnecessary)
if (customisation.skinTone === "undefined") {
	customisation.skinTone = 0;
}
if (customisation.clothing === "undefined") {
	customisation.clothing = 0;
}
if (customisation.hair === "undefined") {
	customisation.hair = 0;
}
if (customisation.hairColour === "undefined") {
	customisation.hairColour = "white";
}
if (customisation.hat === "undefined") {
	customisation.hat = 0;
}

let playerClassName;
switch (playerClass) {
	case "a":
		playerClassName = "archer";
		break;
	case "m":
		playerClassName = "mage";
		break;
	case "k":
		playerClassName = "knight";
		break;
	default:
		console.error("Unknown player class: " + playerClass);
}

let baseProjectile; // projectile used when not overwritten by a weapon
let baseProjectileAdjust
if (playerClass === "a") {
	baseProjectile = "arrow";
	baseProjectileAdjust = {x: 20, y: 20};
}
else if (playerClass === "m") {
	baseProjectile = "fireball";
	baseProjectileAdjust = {x: 20, y: 20};
}
else if (playerClass === "k") {
	baseProjectile = "slash";
	baseProjectileAdjust = {x: 0, y: 0};
}

// base values used in player attacks, for balancing purposes
const AttackConstants = {
	bow: {
		projectileSpeed: 850,
		projectileRange: 1000,
		focusSpeedMultiplier: 80, // affects how quickly attacks focus
		variance: 45, // base variance IN DEGREES
		minimumVariance: 3, // also in degrees
		reloadTime: 500,

		damageMultiplier: 1,

		baseChannellingMoveSpeed: 30,
	},
	staff: {
		projectileSpeed: 150,
		projectileRange: 1000,
		reloadTime: 500,

		damageMultiplier: 1,

		baseChannellingMoveSpeed: 30,
	},
	sword: {
		maxSummons: 3,
		summonMeleeRange: 100,
		summonReloadTime: 1000,
		summonDistance: 100, // distance from mouse that it is summoned

		projectileSpeed: 0, // for charge attack
		projectileRange: 0, // not a thing for swords

		//iterationSpacing: 130, // (old snake projectile system)
		//maxIterations: 10,

		meleeRange: 200, // range at which melee damage is dealt
		reloadTime: 500,

		damageMultiplier: 1,

		channelDistancePerSecond: 270,
		channelMaxDistance: 480,
		channelMinDistance: 120,

		baseChannellingMoveSpeed: 30,
	},
	meleeTool: {
		projectileSpeed: 0, // N/A
		projectileRange: 0, // N/A

		meleeRange: 100, // range at which melee damage is dealt

		reloadTime: 1000,

		damageMultiplier: 1,
	},
	rod: {
		projectileSpeed: 0, // N/A
		projectileRange: 0, // N/A

		baseRange: 240, // range at which rod can be fired

		reloadTime: 500,
	},
};

// note that this is just for default values for when the player FIRST joins antorax ! any changing values (e.g. customisation) should be set separately, otherwise they will just be overwritten
var Player = {
	name: playerName,
	class: playerClass,
	classFull: playerClassName,

	// customisation properties are set in Game.loadPlayer

	baseProjectile: baseProjectile,
	baseProjectileAdjust: baseProjectileAdjust,
	projectileOverride: {
		projectile: undefined, // keyName of image in loader
		adjust: undefined,
	}, // overrides base projectile and player weapon projectile

	// updated by saved progress
	x: 3752, // start coords
	y: 4526,
	areaName: "eaglecrest",
	displayAreaName: "Eaglecrest", // changed to the proper name of the area by Game.changeArea
	// tutorial is shown by the websocket before this happens

	lootArea: "Eaglecrest Logging Camp", // general area that unidentified items are from
	lootTier: 1, // tier that unidentified items are from

	unlockedInstructions: [],
	skippedInstructions: [],
	unlockedTabs: [],
	skippedTabs: [],

	playtime: 0, // seconds on the game
	days: [], // days logged on (yyyymmdd)
	consecutiveDays: 0,
	metNPCs: ["Cart Driver"],

	chatOnJoin: [],

	chests: {
		opened: {},
		locations: {},
	},

	bossesKilled: {
    },

	mail: {
		mail: [],
		received: [],
		opened: [],
	},

	reputation: {
		eaglecrestLoggingCamp: {
			score: 0,
			level: 4,
		},
		eaglecrestCity: {
			score: 0,
			level: 4,
		},
		eaglecrestFarm: {
			score: 0,
			level: 3,
		},
		// people
		theSoothsayer: {
			score: 0,
			level: 3,
		},
		theJester: {
			score: 0,
			level: 3,
		},
	},
	reputationReady: false, // if player has dismissed reputation tutorial text

	// tutorial
	tutorialProgress: -1,
	tipsSeen: [],

	quests: {
		activeQuestArray: [],
		possibleQuestArray: [],
		completedQuestArray: [],
		canBeFinishedArray: [], // array of quests that can be finished (for use in main)

		questProgress: {}, // OLD QUESTS ONLY - don't use for new quests ! stores properties for quest objectives (and achievements) that cannot otherwise be tracked between saves
		progress: {}, // same as questProgress, but now divided into areas and their quest ids à la npcProgress. for anything that npcProgress can't track
		npcProgress: {}, // stores the number of NPCs spoken to for that quest (the key name is the quest area followed by the quest id, i.e. eaglecrest[10])
		// npcProgress is incremented automatically by quest progress steps, so there should be no need to increment manually

		questLastFinished: {}, // stores the last date (format ddmmyyyy) that the quest was finished (for seeing if daily quests can be started again)
		timesCompleted: {}, // number of times a player has completed a repeatable quest (e.g. hide and seek)

		randomDailyQuests: {}, // the random daily quest of the day (for NPCs with a random daily quest)

		startedFromNpc: {}, // for each quest started with differsOnNpc property, this contains the npc that it was most recently started from.  startedfromnpc[area][id]
	},

	// overall progress, checked by DOM etc
	overallProgress: {
		mountSlotUnlocked: false,
	},

	inventory: {
		helm: {},
		chest: {},
		greaves: {},
		boots: {},
		weapon: {},
		bag: {},
		mount: {},
		trinkets: [{},{},{}],
		items: [{},{},{},{},{},{}],
	},

	bank: {
		unlockedSlots: 1,
		items: [{},{},{},{},{},{}],
	},

	// updated by DOM
	stats: {
		// note to Jake: remember to add new stats to constructor in main
		damage: 0, // (8)
		defence: 0, // (4)
		maxHealth: 50,
		reloadTime: 500, // (0.5s) time that must be taken between attack channel finish and channel start (in ms)
		projectileRange: 0, // set in AttackConstants; how far the projectile can travel
		criticalChance: 1, // (1%)
		dodgeChance: 1, // (1%)
		flaming: 0, // (I)
		healthRegen: 0.5, // (0.5/s)
		looting: 100, // (110%)
		poisonX: 0, // (1.5/3s) the total damage dealt after the main attack
		poisonY: 0, // the number of seconds that damage is dealt over after the main attack
		reflection: 0, // (50%)
		stun: 0, // (0.5s)
		swimSpeed: 60, // (300/s)
		walkSpeed: 180, // (300/s)
		iceSpeed: 270, // (300/s)
		focusSpeed: 1, // additional multiplier!!!! archers only (speed at which the variance for archer projectiles gets smaller) - multiplied by a quotient which can be seen in AttackConstants
		maxDamage: 0, // (3-9) mages only (damage done when channelled)
		lifesteal: 0, // (10%)
		xpBonus: 0, // (20%)
		frostaura: false, // boolean
		hex: 0, // (30%)
		damagePercentage: 0, // (40%) extra percentage of damage dealt
		windShield: false, // (boolean)
		slowAmount: 0, // (50% for 3s) amount of slow to enemies on attack
		slowTime: 0, // time of slow to enemies on attack
		arcaneAura: false, // (boolean) from spell
		stealing: 0, // (0%) looting for gold and some rare items
		healingPower: 100, // (110%) only applies to non-health regen healing
		rooting: 0, // (0.5s)
		knockback: 0, // (50px) tiles knocked back
		poisonStrength: 100, // (100%)
		exploding: 0, // (I)
		numberOfProjectiles: 0, // currently an archer only stat - if this isn't 0 or 1, multiple projectiles are fired!
		enemyAggro: 100, // (110%) multiplier on aggro of enemies this attacks
		channellingMoveSpeed: 100, // percentage of value in attackConstants

		// projectiles
		variance: 0, // default angle variance of projectiles - set by default in AttackConstants; can be overriden in itemdata
		minimumVariance: 0, // minimum angle variance of a fired projectile. default is set in AttackConstants
		projectileSpeed: 200, // set in Game.equipmentUpdate off of AttackConstants[weaponType].projectileSpeed (or based off of custom weapon projectileSpeed)
		damageAllHit: true,
		//projectileRange: 300,
		//projectileAcceleration: 0,aaaaaaaaaaaaaaaaaaaaaaaa
		//projectileStopMovingOnDamage: false,

		// class specific
		meleeRange: AttackConstants.sword.meleeRange,

		// spells
		maxMana: 0,
		manaRegen: 0.5, // (0.5/s)

		// fishing
		fishingSkill: 0, // (1.1) increased when you fish stuff up (increased by main.js)

		// misc
		baseDomRange: 240, // distance from an entity that a DOM menu may be opened
		interactRange: 100, // multiplier for domRange (use as a treat on an item at some point?)

		// DEPRECATED
		blockDefence: 0, // (16) knights only DEPRECATED
		range: 0, // set in Game.equipmentUpdate based off of AttackConstants.weaponType.range or whatever might have been updated . . .
		rangeMultiplier: 100, // (110%)
		splashDamage: false, // use damageAllHit or pierce instead
	},
	conditionalStats: [],

	xp: 0,
	level: 1,

	fatiguedXP: 0, // this amount of xp is worth 50% less due to a death

	health: 50, // should be set to whatever stats.maxHealth is set to (but didn't work)
	mana: 0,

	statusEffects: [], // updated by saved data / main [function Game.hero.updateStatusEffects()]

	// spells
	// these are arrays of objects. objects are in form {id: 0, tier: 1, onCooldown: 100}
	spells: [{}, {}, {}, {}, {}, {}], 
	spellArsenal: [],
};

// template object for all stats and their default values
// assign is used so the properties cannot be changed
const DefaultStats = Object.assign({}, Player.stats);

// object of objects of characters that the player can transform into (see prototype.Hero.transform)
const PlayerTransformations = {
	cat: {
		// tbd load in images here as well ? or maybe better to be always loaded by the item (cat potion in this case)
        rotationImages: {
            left: "catGingerLeft",
            right: "catGingerRight"
        },
		animation: {
			type: "spritesheet",
			frameTime: 30,
			imagesPerRow: 3,
			totalImages: 3,
			animateBasis: "walk"
		},
		crop: {
			x: 0,
			y: 0,
			width: 90,
			height: 82,
		},

		stats: {
			damage: 2,
			defence: 5,
			maxHealth: 50,
			range: 0,
			reloadTime: 500, // (0.5s) time that must be taken between attack channel finish and channel start (in ms)
			criticalChance: 5, // (1%)
			dodgeChance: 10, // (1%)
			flaming: 0, // (I)
			healthRegen: 0.5, // (0.5/s)
			swimSpeed: 60, // (300/s)
			walkSpeed: 180, // (300/s)
			iceSpeed: 270, // (300/s)
			variance: 0, // default variance projectiles when 600px away - set to 100 by default for any archer weapons; can be overriden in itemdata
			minimumVariance: 0, // (50) minimum variance of a fired projectile //updateeeeeeeeeeeeeeeeeee
			focusSpeed: 6, // (1/s) archers only (speed at which the variance for archer projectiles gets smaller)
			looting: 150,
			// spells
			maxMana: 10,
			manaRegen: 0.75, //tbd balance
		},
		//conditionalStats: [],//?????change??????

		// spells
		spells: [{id: 17, tier: 1}],

		projectile: {
			image: "furballGinger",
		},
		// tbd attackstyle
	},
};

var User = {
	archaeology: [],
	fish: [],
	achievements: {},
	achievementPoints: {
		total: 0,
		unclaimed: 0,
	},
	/*skins: {
		a: [0, 1],
		m: [0, 1],
		k: [0, 1],
	},*/ // old
	progress: {},
	lostLetterMessages: [],
	settings: {
		music: false,
		particles: true,
		weather: true,
		transparency: false,
		dark: false,
		minigames: true,
		nametag: false,
		coords: false,
		fps: false,
		hitboxes: false,
		aggro: false,
		grid: false,
		keyboard: {
			// handled by main
			// movement
			LEFT: "A", // 37
			RIGHT: "D", // 39
			UP: "W", // 38
			DOWN: "S", // 40
			// space (action button)
			SPACE: " ", // 32
			// enter (progress dialogue)
			ENTER: "ENTER",
			// mount
			MOUNT: "E",
			// shift (hide secondary canvas)
			SHIFT: "SHIFT", // 16
			// handled by dom
			// chat
			TALK: "T",
			// hotkeys
			CHAT: "C",
			INVENTORY: "I",
			QUESTS: "Q",
			ADVENTURE: "L",
			SPELLBOOK: "R",
			SETTINGS: "Z",
			ONE: "1",
			TWO: "2",
			THREE: "3",
			FOUR: "4",
			FIVE: "5",
			SIX: "6",
			// key changes are all handeled by dom
		},
	},
}

//xp for lvl...  1  2   3    4    5    6    7    8     9     10    MAX
const LevelXP = [0, 50, 100, 200, 300, 600, 900, 1250, 1600, 2000, 2000]; // amount of xp required for next level (current level = array index)
const MaxLevel = LevelXP.length-1;

const ReputationPoints = [1,2500,500,100,500,2500,1]; // points to level up/down reputation

const BagSlotCosts = [0, 50, 250, 1250, 5000, 10000]; // cost to unlock a bag slot in the bank
// blame peter for the costs lol
