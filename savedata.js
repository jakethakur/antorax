let playerClass = sessionStorage.getItem("class"); // avoids it having to be called multiple times from inside Player's declaration

var Player = {
	name: sessionStorage.getItem("username"),
	class: playerClass,
	skin: sessionStorage.getItem("skin"),
	gender: sessionStorage.getItem("gender"),
	
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
	
	inventory: {
		helm: [],
		chest: [],
		greaves: [],
		boots: [],
		weapon: [],
		items: [{},{},{},{},{},{}],
	},
	
	// updated by DOM
	stats: {
		damage: 0,
		defence: 0,
		maxHealth: 50,
		range: playerClass === "a" ? 1000 : (playerClass === "m" ? 200 : (playerClass === "k" ? 100 : 0)),
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
		variance: playerClass === "a" ? 100 : 0, // default variant of archer projectiles when 600px away
		focusSpeed: 1, // archers only (speed that the variant for archer projectiles gets smaller)
		maxDamage: 0, // mages only (damage done when channelled)
		blockDefence: 0, // knights only
		
		// fishing
		fishingSkill: 0, // increased when you fish stuff up (increased by main.js)
		fishingRange: 200, // fishing rod range (currently just a constant)
	},
	
	//
	// The following would be updated to the player's saved data
	// (and inventory above)
	//
	
	xp: 0,
	level: 1,
	
	fatiguedXP: 0, // this amount of xp is worth 50% less due to a death
    
	health: 50, // should be set to whatever stats.Max_Health is set to (but didn't work)
	
	statusEffects: [], // updated by saved data / main [function Game.hero.updateStatusEffects()]
};

LevelXP = [0, 50, 100, 125, 150, 175];