// go to class select if the user's class has not been selected yet for this session
if (sessionStorage.getItem("class") == undefined) { // must be ==
	window.location.replace("./selection.html");
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
	
	unlockedInstructions: ["Chapter I: Getting Started"],
	unlockedTabs: [],
	tab: "adventurePage",
	
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
		damage: 0,
		defence: 0,
		maxHealth: 50,
		range: 0, // set in Game.inventoryUpdate based off of WeaponRanges in itemdata.js
		rangeModifier: 0, // added to the player's base range (based off of WeaponRanges)
		reloadTime: 500, // time that must be taken between attack channel finish and channel start (in ms)
		criticalChance: 1,
		dodgeChance: 1,
		flaming: 0,
		healthRegen: 0.5,
		looting: 100,
		poisonX: 0, // the total damage dealt after the main attack
		poisonY: 0, // the number of seconds that damage is dealt over after the main attack
		reflection: 0,
		stun: 0,
		swimSpeed: 60,
		walkSpeed: 180,
		variance: 0, // default variance projectiles when 600px away - set to 100 by default for any archer weapons; can be overriden in itemdata
		focusSpeed: 1, // archers only (speed that the variant for archer projectiles gets smaller)
		maxDamage: 0, // mages only (damage done when channelled)
		blockDefence: 0, // knights only
		lifesteal: 0,
		
		// fishing
		fishingSkill: 0, // increased when you fish stuff up (increased by main.js)
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