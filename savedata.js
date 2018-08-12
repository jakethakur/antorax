let playerClass = sessionStorage.getItem("class"); // avoids it having to be called multiple times from inside Player's declaration

var Player = {
	name: sessionStorage.getItem("username"),
	class: playerClass,
	skin: sessionStorage.getItem("skin"),
	gender: sessionStorage.getItem("gender"),
	
	reputation: {
	},
	
	inventory: {
		helm: [
			{
				name: "",
				image: "",
				stats: {},
			},
		],
		chest: [
			{
				name: "",
				image: "",
				stats: {},
			},
		],
		greaves: [
			{
				name: "",
				image: "",
				stats: {},
			},
		],
		boots: [
			{
				name: "",
				image: "",
				stats: {},
			},
		],
		weapon: [
			{
				name: "",
				image: "",
				stats: {},
			},
		],
		unId: [],
		items: [{},{},{},{},{},{}],
	},
	
	// updated by DOM
	stats: {
		damage: 0, // the user's total damage default is 0 but can be changed by weapons
		defence: 0, // the user's total defence default is 0 but can be changed by armour
		maxHealth: 50,
		range: playerClass === "a" ? 1000 : (playerClass === "m" ? 200 : (playerClass === "k" ? 100 : 0)),
		reloadTime: 500, // time that must be taken between attack channel finish and channel start (in ms)
		criticalChance: 1, // the user's total critical chance default is 1 but can be changed by armour or weapons
		dodgeChance: 1, // the user's total dodge chance default is 1 but can be changed by armour or weapons
		flaming: 0, // the user does not usually deal fire damage to enemies but some weapons do
		healthRegen: 0.5, // the user's total health regen default is 0.5 but can be changed by armour or weapons
		looting: 50, // the user's total looting default is 50 but can be changed by armour or weapons
		poisonX: 0, // the user's total posion default is 0 damage...
		poisonY: 0, // ...over 0 seconds but can be changed by armour or weapons
		reflection: 0, // the user's total looting default is 0 but can be changed by armour or weapons
		stun: 0, // the user's total stun time default is 0 but can be changed by armour or weapons
		swimSpeed: 60, // the user's total swim speed default is 60 but can be changed by armour or weapons
		walkSpeed: 180, // the user's total walk speed default is 180 but can be changed by armour or weapons
		// archers only
		variance: playerClass === "k" ? 0 : (playerClass === "m" ? 0 : (playerClass === "a" ? 100 : 0)), // the user's total focus speed default is 1 but can be changed by bows
		focusSpeed: 1, // the user's total focus speed default is 1 but can be changed by bows
	},
	
	//
	// The following would be updated to the player's saved data
	// (and inventory above)
	//
	
	xp: 0,
	level: 1,
	//gold: 0,
	
	health: 50, // should be set to whatever stats.Max_Health is set to (but didn't work)
	
	statusEffects: [], // updated by saved data / main [function Game.hero.updateStatusEffects()]
};

LevelXP = [0, 50, 100, 125, 150, 175];