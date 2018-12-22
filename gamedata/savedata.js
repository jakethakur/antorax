// go to class select if the user's class has not been selected yet for this session
if (sessionStorage.getItem("class") == undefined) { // must be ==
	window.location.replace("./selection/index.html");
}

let playerName = sessionStorage.getItem("name"); // avoids it having to be called multiple times from inside Player's declaration
let playerClass = sessionStorage.getItem("class"); // avoids it having to be called multiple times from inside Player's declaration
let playerSkin = sessionStorage.getItem("skin"); // avoids it having to be called multiple times from inside Player's declaration

var Player = {
	name: playerName,
	class: playerClass,
	skin: playerSkin,
	
	// updated by saved progress
	x: 2297, // start coords
	y: 387,
	areaName: "tutorial",
	
	lootArea: "Eaglecrest Logging Camp", // general area that unidentified items are from
	lootTier: 1, // tier that unidentified items are from
	
	unlockedAdventures: [], // boxes in adventure page that should show
	unlockedInstructions: ["Chapter I: Getting Started"],
	unlockedTabs: [],
	tab: "adventurePage",
	
	days: [], // days logged on (ddmmyyyy)
	metNPCs: ["Cart Driver"],
	
	mail: {
		mail: [],
		received: [],
		opened: [],
	},
	
	reputation: {
		eaglecrestLoggingCamp: {
			score: 60,
			level: 3,
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
		
		questProgress: {}, // stores properties for quest objectives that cannot otherwise be tracked between saves
		questLastFinished: { // stores the last date (format ddmmyyyy) that the quest was finished (for seeing if daily quests can be started again)
			eaglecrestLoggingCamp: [],
			tavern: [],
			fishing: [],
		},
	},
	
	inventory: {
		helm: {},
		chest: {},
		greaves: {},
		boots: {},
		weapon: {},
		items: [{},{},{},{},{},{}],
	},
	
	// updated by DOM
	stats: {
		damage: 0, // (8)n
		defence: 0, // (4)n
		maxHealth: 50,
		range: 0, // set in Game.inventoryUpdate based off of WeaponRanges in itemdata.js
		rangeModifier: 0, // added to the player's base range (based off of WeaponRanges)
		reloadTime: 500, // (0.5s)s time that must be taken between attack channel finish and channel start (in ms)
		criticalChance: 1, // (1%)n
		dodgeChance: 1, // (1%)n
		flaming: 0, // (I)s
		healthRegen: 0.5, // (0.5/s)n
		looting: 100, // (110%)n
		poisonX: 0, // (1.5/3s)s the total damage dealt after the main attack
		poisonY: 0, // the number of seconds that damage is dealt over after the main attack
		reflection: 0, // (50%)n
		stun: 0, // (0.5s)n
		swimSpeed: 60, // (300/s)n
		walkSpeed: 180, // (300/s)n
		iceSpeed: 270, // (300/s)n
		variance: 0, // default variance projectiles when 600px away - set to 100 by default for any archer weapons; can be overriden in itemdata
		focusSpeed: 1, // (1/s)n archers only (speed that the variant for archer projectiles gets smaller)
		maxDamage: 0, // (3-9)s mages only (damage done when channelled)
		blockDefence: 0, // (16)n knights only
		lifesteal: 0, // (10%)n
		xpBonus: 0, // (20%)n
		frostaura: false, // s
	
		// fishing
		fishingSkill: 0, // (1.1)n increased when you fish stuff up (increased by main.js)
	},
	
	//
	// The following would be updated to the player's saved data
	// (and inventory above)
	//
	
	xp: 0,
	level: 1,
	
	fatiguedXP: 0, // this amount of xp is worth 50% less due to a death
    
	health: 50, // should be set to whatever stats.maxHealth is set to (but didn't work)
	
	statusEffects: [], // updated by saved data / main [function Game.hero.updateStatusEffects()]
};

const LevelXP = [0, 50, 100, 150, 200, 250]; // amount of xp required for next level (current level = array index)