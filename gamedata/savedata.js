// avoids it having to be called multiple times from inside Player's declaration
let playerName = sessionStorage.getItem("name");
let playerClass = sessionStorage.getItem("class");
let playerSkin = sessionStorage.getItem("skin");

var Player = {
	name: playerName,
	class: playerClass,
	skin: playerSkin,

	// updated by saved progress
	x: 3838, // start coords
	y: 318,
	areaName: "tutorial",
	displayAreaName: "Tutorial", // changed to the proper name of the area by Game.changeArea
	// tutorial is shown by the websocket before this happens

	lootArea: "Eaglecrest Logging Camp", // general area that unidentified items are from
	lootTier: 1, // tier that unidentified items are from

	unlockedInstructions: [],
	skippedInstructions: [],
	unlockedTabs: [],
	skippedTabs: [],

	timeSpent: 0,
	days: [], // days logged on (yyyymmdd)
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
	},
	reputationReady: false, // if player has dismissed reputation tutorial text

	quests: {
		activeQuestArray: [],
		possibleQuestArray: [],
		completedQuestArray: [],
		canBeFinishedArray: [], // array of quests that can be finished (for use in main)

		npcProgress: {}, // stores the number of NPCs spoken to for that quest (the key name is the quest area followed by the quest id)
		questProgress: {}, // stores properties for quest objectives (and achievements) that cannot otherwise be tracked between saves
		// npcProgress and questProgress can mostly be used for the same thing, but have different data structures

		questLastFinished: {}, // stores the last date (format ddmmyyyy) that the quest was finished (for seeing if daily quests can be started again)
		timesCompleted: {}, // number of times a player has completed a repeatable quest (e.g. hide and seek)

		randomDailyQuests: {}, // the random daily quest of the day (for NPCs with a random daily quest)
	},

	inventory: {
		helm: {},
		chest: {},
		greaves: {},
		boots: {},
		weapon: {},
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
		range: 0, // set in Game.equipmentUpdate based off of WeaponRanges in itemdata.js
		rangeModifier: 0, // added to the player's base range (based off of WeaponRanges)
		reloadTime: 500, // (0.5s) time that must be taken between attack channel finish and channel start (in ms)
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
		variance: 0, // default variance projectiles when 600px away - set to 100 by default for any archer weapons; can be overriden in itemdata
		minimumVariance: 0, // (50) minimum variance of a fired projectile
		focusSpeed: 6, // (1/s) archers only (speed at which the variance for archer projectiles gets smaller)
		maxDamage: 0, // (3-9) mages only (damage done when channelled)
		blockDefence: 0, // (16) knights only DEPRECATED
		lifesteal: 0, // (10%)
		xpBonus: 0, // (20%)
		frostaura: false, // boolean
		splashDamage: false, // boolean (if projectile damages more than one enemy)
		hex: 0, // (30%)
		damagePercentage: 0, // (40%) extra percentage of damage dealt
		windShield: false, // (boolean)
		slowAmount: 0, // (50% for 3s) amount of slow to enemies on attack
		slowTime: 0, // time of slow to enemies on attack
		moveDuringFocus: false, // whether you can move whilst charging basic attack

		// spells
		maxMana: 0,
		manaRegen: 0.5, // (0.5/s)

		// fishing
		fishingSkill: 0, // (1.1) increased when you fish stuff up (increased by main.js)

		// misc
		domRange: 240, // distance from an entity that a DOM menu may be opened
	},
	conditionalStats: [],

	xp: 0,
	level: 1,

	fatiguedXP: 0, // this amount of xp is worth 50% less due to a death

	health: 50, // should be set to whatever stats.maxHealth is set to (but didn't work)
	mana: 0,

	statusEffects: [], // updated by saved data / main [function Game.hero.updateStatusEffects()]

	// spells
	spells: [], // array of objects. objects are in form {id: 0, tier: 1, onCooldown: 100}
	// currently only one spell is supported, and cannot be upgraded. in the future, make a spell upgrade tree and a way to cast multiple spells!
};

// template object for all stats and their default values
// assign is used so the properties cannot be changed
const DefaultStats = Object.assign({}, Player.stats);

var User = {
	archaeology: [],
	fish: [],
	achievements: {},
	achievementPoints: {
		total: 0,
		unclaimed: 0,
	},
	skins: {
		a: [0, 1],
		m: [0, 1],
		k: [0, 1],
	},
	progress: {},
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
			REPUTATION: "R",
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
const LevelXP = [0, 50, 100, 200, 300, 600, 900, 1250, 1600, 2000, 1]; // amount of xp required for next level (current level = array index)
const MaxLevel = LevelXP.length-1;

const ReputationPoints = [1,2500,500,100,500,2500,1]; // points to level up reputation

const BagSlotCosts = [0, 50, 250, 1250, 5000, 10000]; // cost to unlock a bag slot in the bank
// blame peter for the costs lol
