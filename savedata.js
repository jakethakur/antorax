var Player = {
	name: sessionStorage.getItem("username"),
	class: sessionStorage.getItem("class"),
	skin: sessionStorage.getItem("skin"),
	gender: sessionStorage.getItem("gender"),
	gold: 0,
	xp: 0,
	level: 1,
	reputation: {
		eaglecrestLoggingCamp: {},
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
	stats: {
		Damage: 0, // the user's total damage default is 0 but can be changed by weapons
		Defence: 0, // the user's total defence default is 0 but can be changed by armour
		Critical_Chance: 1, // the user's total critical chance default is 1 but can be changed by armour or weapons
		Dodge_Chance: 1, // the user's total dodge chance default is 1 but can be changed by armout or weapons
		Flaming: 0, // the user does not usually deal fire damage to enemies but some weapons do
		Focus_Speed: 1, // the user's total focus speed default is 1 but can be changed by bows
		Health_Regen: 2, // the user's total health regen default is 2 but can be changed by armour or weapons
		Looting: 50, // the user's total looting default is 50 but can be changed by armour or weapons
		PoisonX: 0, // the user's total posion default is 0 damage...
		PoisonY: 0, // ...over 0 seconds but can be changed by armour or weapons
		Reflection: 0, // the user's total looting default is 0 but can be changed by armour or weapons
		Stun: 0, // the user's total stun time default is 0 but can be changed by armour or weapons
		Swim_Speed: 60, // the user's total swim speed default is 60 but can be changed by armour or weapons
		Walk_Speed: 180, // the user's total walk speed default is 180 but can be changed by armour or weapons
	},
};

LevelXP = [0,50,100,150,200,250];