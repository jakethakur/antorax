let playerName = sessionStorage.getItem("name"); // avoids it having to be called multiple times from inside Player's declaration
let playerClass = sessionStorage.getItem("class"); // avoids it having to be called multiple times from inside Player's declaration
let playerSkin = sessionStorage.getItem("skin"); // avoids it having to be called multiple times from inside Player's declaration

var Player = {
	name: playerName,
	class: playerClass,
	skin: playerSkin,

	// updated by saved progress
	x: 3838, // start coords
	y: 318,
	areaName: "tutorial",

	lootArea: "Eaglecrest Logging Camp", // general area that unidentified items are from
	lootTier: 1, // tier that unidentified items are from

	unlockedInstructions: [],
	skippedInstructions: [],
	unlockedTabs: [],
	skippedTabs: [],

	days: [], // days logged on (ddmmyyyy)
	metNPCs: ["Cart Driver"],

	chests: {
		opened: {},
		locations: {},
	},

	bossesKilled: {
        goblinKing: 0,
		tatteredKnight: 0,
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

		questProgress: {}, // stores properties for quest objectives (and achievements) that cannot otherwise be tracked between saves
		questLastFinished: { // stores the last date (format ddmmyyyy) that the quest was finished (for seeing if daily quests can be started again)
			eaglecrestLoggingCamp: [],
			tavern: [],
			fishing: [],
		},

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
		damage: 0, // (8)
		defence: 0, // (4)
		maxHealth: 50,
		range: 0, // set in Game.inventoryUpdate based off of WeaponRanges in itemdata.js
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
		focusSpeed: 1, // (1/s) archers only (speed that the variant for archer projectiles gets smaller)
		maxDamage: 0, // (3-9) mages only (damage done when channelled)
		blockDefence: 0, // (16) knights only
		lifesteal: 0, // (10%)
		xpBonus: 0, // (20%)
		frostaura: false, // boolean
		penetration: false, // boolean (if projectile damages more than one enemy)

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

	statusEffects: [], // updated by saved data / main [function Game.hero.updateStatusEffects()]
};

var User = {
	archaeology: [],
	fish: [],
	achievements: {},
	progress: {},
	settings: {
		music: false,
		particles: true,
		weather: true,
		coords: false,
		fps: false,
		hitboxes: false,
		grid: false,
		transparency: false,
		keyboard: {
			LEFT: "A", // 37
			RIGHT: "D", // 39
			UP: "W", // 38
			DOWN: "S", // 40
			// wsad movement
			/*A: "A", // 65
			D: "D", // 68
			W: "W", // 87
			S: "S",  // 83*/
			// space (action button)
			SPACE: "SPACE", // 32
			// shift (hide secondary canvas)
			SHIFT: "SHIFT", // 16
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
		},
		instructionsLink: false,
	},
}

const LevelXP = [0, 50, 100, 200, 300, 1]; // amount of xp required for next level (current level = array index)
const ReputationPoints = [1,2500,500,100,500,2500,1]; // points to level up reputation
const BagSlotCosts = [0, 50, 250, 1250, 5000, 10000]; // cost to unlock a bag slot in the bank
