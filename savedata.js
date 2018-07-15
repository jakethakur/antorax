var Player = {
	name: sessionStorage.getItem("username"),
	gold: 0,
	xp: 0,
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
};