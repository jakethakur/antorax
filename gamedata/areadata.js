//
// Events and Time
//

let Event = {
	// return variable with dates for use in event setting functions
	getDate: function () {
		let d = {};
		d.today = new Date();
		d.minute = d.today.getMinutes();
		d.hour = d.today.getHours();
		d.day = d.today.getDate();
		d.month = d.today.getMonth() + 1; // January is 0, so add 1
		d.year = d.today.getFullYear();
		return d;
	},

	// init variables required for Areas definition (called straight away)
	init: function () {
		// get date
		let d = this.getDate();

		// antorax age
		this.antoraxAge = d.year - 2016; // used for some NPC texts (especially on Antorax Day)
		if (d.day < 20 && d.month === 1) {
			// before Antorax day; subtract one from age
			this.antoraxAge--;
		}
	},

	// update time (called on loadArea)
	// areaName passed in as parameter because Game.areaName has not been set yet by laodArea
	updateTime: function (areaName) {
		// get date
		let d = this.getDate();

		if (Areas[areaName].time !== undefined) {
			// area always has a specific time
			this.time = Areas[areaName].time;
		}

		else if (d.day == 21 && d.month == 6) {
			// Summer Solstice - sun up all day
			this.time = "day";
		}
		else if (d.day == 21 && d.month == 12) {
			// Winter Solstice - sun down all day
			this.time = "night";
		}

		else if (d.hour >= 7 && d.hour < 19) {
			// day time
			this.time = "day";
		}
		else if (this.event === "Samhain" && Player.quests.questProgress.bloodMoonUnlocked) {
			// halloween night time & bloodmoon unlocked
			this.time = "bloodMoon";
		}
		else {
			// night time
			this.time = "night";
		}

		this.updateDarkness(d); // update how dark the canvas is
	},

	// update how dark the canvas is (called automatically by updateTime)
	updateDarkness: function (d) {
		// 0.40 darkness is max
		// lights turn on at 0.20 darkness

		if (d === undefined) {
			// no date parameter
			// get date
			let d = this.getDate();
		}

		let timeDarkness = 0; // darkness due to time

		if (d.hour === 18 && d.minute > 30) {
			timeDarkness = 0.2 - ((60 - d.minute) * 0.2 / 30);
			// linear darkness progression from 18:30 to 19:00 of 0.00 to 0.20
		}
		else if (d.hour === 19 && d.minute < 30) {
			timeDarkness = 0.4 - ((30 - d.minute) * 0.2 / 30);
			// linear darkness progression from 19:00 to 19:30 of 0.20 to 0.40
		}
		else if (d.hour === 6 && d.minute > 30) {
			timeDarkness = 0.4 - ((60 - d.minute) * 0.2 / 30);
			// linear darkness progression from 06:30 to 07:00 of 0.40 to 0.20
		}
		else if (d.hour === 7 && d.minute < 30) {
			timeDarkness = 0.2 - ((30 - d.minute) * 0.2 / 30);
			// linear darkness progression from 07:00 to 07:30 of 0.20 to 0.00
		}
		else if (this.time === "night" || this.time === "bloodMoon") {
			// completely dark
			timeDarkness = 0.4;
		}
		else { // time must be day
			// completely light
			timeDarkness = 0;
		}

		// if it is halloween and it is dark due to time, notify Game to make the sky blood dark for blood moon
		// Game can't check Event.time because it isn't blood moon 30 mins before and after when it is getting dark
		if (this.time === "bloodMoon" && timeDarkness > 0) {
			this.redSky = true;
		}
		else {
			this.redSky = false;
		}

		let weatherDarkness = 0; // darkness due to weather

		if (Weather.weatherType === "rain") {
			weatherDarkness = 0.3 * (Weather.intensity / 150) / (Game.canvasArea / 36000);
			// 0.30 darkness if the weather is at its hightest intensity
		}
		else {
			// completely light
			weatherDarkness = 0;
		}

		this.darkness = Math.max(timeDarkness, weatherDarkness); // take the darkest of the two
	},

	// update event (called on loadArea)
	updateEvent: function () {
		// get date
		let d = this.getDate();

		// James Day
		// Summer Solstice
		if (d.day === 21 && d.month === 6) {
			this.event = "James";
		}
		// Samhain (Halloween)
		// Blood Moon
		else if ((d.day >= 28 && d.month === 10) || (d.day <= 18 && d.month === 11)) {
			this.event = "Samhain";
		}
		// Christmas
		else if (d.month === 12) {
			this.event = "Christmas";
			// Christmas Day
			if (d.day === 25) {
				this.christmasDay = true;
			}
			else {
				this.christmasDay = false;
			}
		}
		// Antorax Day
		else if (d.month === 1 && d.day === 20) {
			this.event = "Antorax";
		}
		// Fish Day
		else if (d.month === 4 && d.day === 1) {
			this.event = "Fish";
		}
		// Heroes of Antorax
		else if (d.year === 2019 && (d.month === 4 && d.day >= 24)
		|| (d.month === 5 && d.day <= 5)) {
			this.event = "Heroes";
		}
		// Valentine's
		else if (d.day === 14 && d.month === 2) {
			this.event = "Valentine";
		}
	}
};

// init event variables needed for Area definition
Event.init();

//
// Functions that are required in Areas definition (i.e. to stop them being repeated throughout Areas)
//

let BuyFunctions = {}; // functions that are called on specific items being bought

// called upon samhain marks being given to snake man to buy an item
BuyFunctions.samhainItemBuy = function () {
}

//
// Loot area defintion
//

const FishingLevels = {
	loggingCamp: 10,
	eaglecrest: 20,
};

// for dynamic lookup in messages ie class
const ChatText = {
};

//
// Areas defintion
//

var Areas = {

	tutorial: {
		id: 0,

		// data displayedo on moving to area
		data: {
			name: "Fishers' Valley",
			level: "Level 1 - 5",
			territory: "Neutral",
			displayOnEnter: true,
		},

		indoors: false,

		tagGameAllowed: true, // tag game allowed?

		song_day: "assets/music/Pippin-the-Hunchback.mp3",
		song_night: "assets/music/Pippin-the-Hunchback-night.mp3",

		checkpoint: false,
		player: {
			// spawn location at start of game
			x: 3838,
			y: 318,
		},

		lootArea: "loggingCamp",
		lootTier: 1,

		mapData: {
			cols: 65,
			rows: 18,
			tsize: 60,
			tilesPerRow: 8,
			solidTiles: [67, 75, 83, 91, 99, 107, 6, 14, 22, 8, 16, 24, 32, 7, 15, 23, 31, 39, 47, 55, 63, 71, 79, 87, 95, 103, 111],
			waterTiles: [27, 35, 43],
			iceTiles: [27, 35],
			mudTiles: [2, 10, 18, 26, 34, 42, 50, 58, 66, 74, 82, 90, 98, 106],
			pathTiles: [1, 9, 17, 25, 33, 41, 49, 57, 65, 3, 11, 19],
			dayTiles: [24],
			nightTiles: [32],
			scrollY: false, // only scrolls x
			layers: [
				[105, 105, 105, 105, 1, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 44, 27, 27, 27, 27, 4, 105, 105, 105, 105, 105, 105, 89, 105, 105, 100, 101, 102, 105, 105, 105, 105, 89, 105, 105, 105, 89, 105, 105, 105, 105, 105, 105, 105, 105, 89, 105, 105, 105, 105, 89, 105, 105, 105, 105, 105, 105, 89, 105, 105, 105, 105, 1, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 93, 94, 44, 27, 27, 27, 43, 4, 105, 105, 105, 105, 105, 105, 105, 105, 105, 108, 109, 110, 105, 97, 105, 105, 105, 105, 89, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 89, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 97, 105, 105, 1, 105, 105, 93, 94, 93, 94, 105, 105, 105, 105, 93, 94, 44, 27, 27, 27, 27, 4, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 89, 105, 105, 105, 105, 105, 105, 105, 97, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 93, 94, 105, 105, 41, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 3, 3, 3, 3, 19, 1, 1, 1, 9, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 68, 105, 93, 94, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 44, 27, 27, 27, 27, 4, 93, 94, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 97, 105, 4, 105, 105, 105, 105, 105, 105, 105, 93, 94, 105, 105, 105, 105, 105, 97, 105, 44, 35, 27, 27, 27, 92, 36, 68, 105, 105, 105, 105, 105, 97, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 92, 68, 105, 105, 105, 105, 105, 93, 94, 105, 105, 105, 105, 93, 94, 60, 36, 28, 27, 27, 27, 43, 27, 27, 92, 68, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 27, 92, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 28, 27, 27, 27, 27, 27, 27, 27, 27, 27, 92, 36, 68, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 100, 101, 102, 105, 105, 105, 105, 89, 105, 105, 105, 105, 105, 105, 97, 105, 105, 105, 105, 105, 105, 105, 105, 89, 60, 27, 27, 27, 27, 27, 27, 27, 43, 35, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 43, 27, 59, 51, 43, 27, 27, 27, 92, 36, 36, 68, 105, 105, 105, 105, 105, 105, 105, 105, 105, 108, 109, 110, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 60, 36, 36, 36, 36, 36, 36, 36, 36, 36, 28, 35, 43, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 43, 27, 27, 59, 51, 59, 51, 51, 27, 35, 27, 27, 27, 27, 92, 36, 36, 36, 36, 36, 68, 105, 105, 105, 105, 105, 105, 105, 89, 105, 105, 105, 105, 89, 60, 36, 36, 36, 28, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 43, 35, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 43, 27, 27, 27, 92, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 28, 27, 27, 27, 27, 27, 27, 27, 59, 27, 27, 27, 27, 43, 27, 27, 27, 27, 27, 43, 27, 27, 27, 27, 27, 27, 51, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 43, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 51, 59, 27, 27, 27, 27, 27, 27, 27, 27, 27, 43, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 43, 27, 27, 27, 27, 35, 27, 27, 27, 27, 27, 27, 27, 43, 27, 35, 35, 35, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 35, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 59, 27, 27, 27, 27, 27, 27, 35, 27, 27, 27, 27, 27, 27, 27, 27, 27, 43, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 35, 27, 27, 27, 27, 27, 27, 27, 51, 27, 27, 27, 43, 27, 27, 27, 27, 27, 27, 43, 35, 27, 27, 27, 27, 43, 27, 27, 27, 27, 27, 27, 35, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 59, 51, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 43, 59, 27, 27, 27, 27, 27, 27, 27, 27, 27, 43, 27, 27, 27, 59, 59, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 35, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 35, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 35, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 43, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 43, 35, 27, 27, 27, 27, 27, 27, 35, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 51, 43, 27, 27, 27, 27, 27, 27],
				[],
			],
			interactWithTile: function(tileNum, x, y) {
				// pick up snowball from rock
				if (tileNum === 29 && Event.event === "Christmas") { // rock top centre
					// channel for 1 second
					Game.hero.channel(function () {
						// give snowball to player
						if (Dom.inventory.give(Items.bow[8], 1) !== false) { // check if player has enough inventory space
							Player.quests.questProgress.snowCollected = Increment(Player.quests.questProgress.snowCollected);
							Dom.checkProgress();
							// replace tiles with no snow rocks
							map.setTile(0, map.getCol(x), map.getRow(y), 59); // new tiles: 108, 109, 110, 116, 117, 118
							map.setTile(0, map.getCol(x + 60), map.getRow(y), 60);
							map.setTile(0, map.getCol(x), map.getRow(y + 60), 69);
							// add snow back after 5 minutes
							Game.setTimeout(function(x, y) {
								SetTile("tutorial", 0, map.getCol(x), map.getRow(y), 29);
								SetTile("tutorial", 0, map.getCol(x + 60), map.getRow(y), 30);
								SetTile("tutorial", 0, map.getCol(x), map.getRow(y + 60), 39);
							}, 60000, [x, y]);
						}
					}, [], 1000, "Making a Snowball");
				}
				else if (tileNum === 39 && Event.event === "Christmas") { // rock bottom centre
					// channel for 1 second
					Game.hero.channel(function () {
					// give snowball to player
						if (Dom.inventory.give(Items.bow[8], 1) !== false) { // check if player has enough inventory space
							Player.quests.questProgress.snowCollected = Increment(Player.quests.questProgress.snowCollected);
							Dom.checkProgress();
							// replace tiles with no snow rocks
							map.setTile(0, map.getCol(x), map.getRow(y - 60), 59);
							map.setTile(0, map.getCol(x + 60), map.getRow(y - 60), 60);
							map.setTile(0, map.getCol(x), map.getRow(y), 69);
							// add snow back after 5 minutes
							Game.setTimeout(function(x, y) {
								SetTile("tutorial", 0, map.getCol(x), map.getRow(y), 29);
								SetTile("tutorial", 0, map.getCol(x + 60), map.getRow(y), 30);
								SetTile("tutorial", 0, map.getCol(x), map.getRow(y + 60), 39);
							}, 60000, [x, y]);
						}
					}, [], 1000, "Making a Snowball");
				}
			},
		},

		isIcy: function() {
			return Event.event === "Christmas";
		},

		images: {
			tiles: {normal: "assets/tilemap/loggingCamp.png", christmas: "assets/tilemap/loggingCamp-christmas.png"},
			driver: {normal: "assets/npcs/driver.png"},
			weaponsmith: {normal: "assets/npcs/weaponsmith.png"},
			cart: {normal: "assets/objects/cartEaglecrest.png"},
			fisherman: {normal: "assets/npcs/tobenam.png"},
			weaponsmithSign: {normal: "assets/objects/weaponsmithSign.png"},
			eaglecrestBanner: {normal: "assets/objects/eaglecrestBanner.png"},
			torianTintop: {normal: "assets/npcs/torianTintop.png"},
			nessyTintop: {normal: "assets/npcs/nessyTintop.png"},
			present: {normal: "assets/objects/present.png"},
		},

		areaTeleports: [
			{
				// teleport to logging camp (path - north)
				x: 270,
				y: -49,
				width: 210,
				height: 2,
				teleportTo: "eaglecrestLoggingCamp",
				destinationX: 1350,
				destinationY: 1300,
			},
		],

		tripwires: [
			{
				// make sure player starts the first quest!
				x: 3000,
				y: 300,
				width: 1,
				height: 600,
				onPlayerTouch: function () {
					// check that the "to the logging camp" quest has been started, and the instructions haven't been shown before
					let questStarted = Player.quests.activeQuestArray.includes("To the Logging Camp");

					if (questStarted && Player.tutorialProgress === 2) { // tutorialProgress defaults to undefined anyway
						Dom.instructions.page(3); // open instructions
					}
					// otherwise if the player hasn't started the quest, displace them back to make them!
					else if (!questStarted && !Player.quests.completedQuestArray.includes("To the Logging Camp")) {
						Game.hero.displace(0, 150, 1, 0);
						Dom.alert.closeAll(); // close all other open tutorial messages
						Dom.alert.page("You need to start your first quest! Speak to the <b>Cart Driver</b> by pressing <b>Space</b>.", 0, undefined, "game");
					}
				}
			},
			{
				// instructions pop up when bridge is moved to
				x: 1490,
				y: 300,
				width: 1,
				height: 600,
				onPlayerTouch: function () {
					// check that the weapon has been bought, and the instructions haven't been shown before
					let weaponBought = Dom.inventory.check(2, "sword", 1) || Dom.inventory.check(2, "staff", 1) || Dom.inventory.check(2, "bow", 1);

					// if the player hasn't bought the weapon, displcae them back to make them!
					if (!weaponBought && !Player.quests.completedQuestArray.includes("To the Logging Camp")) {
						Game.hero.displace(0, 150, 1, 0);
						Dom.alert.closeAll(); // close all other open tutorial messages
						Dom.alert.page("You need to buy a weapon to progress in your quest. Buy one from the nearby <b>Weaponsmith</b> by pressing <b>Space</b>.", 0, undefined, "game");
					}
				}
			},
		],

		npcs: [
			{
				x: 3470,
				y: 320,
				image: "driver",
				name: "Cart Driver",
				hostility: "friendly",
				level: 10,
				stats: {
					maxHealth: 100,
					defence: 1,
					healthRegen: 0.3,
				},
				roles: [
					{
						quest: Quests.eaglecrestLoggingCamp[0],
						role: "questStart",
					},
				],
				chat: {
					questProgress: "Good luck with your adventures!",
					questComplete: "I hope your quests are going well!",
					inventoryFull: "Empty your bag a bit! You can't hold that.",
				},
			},
			{
				x: 2087,
				y: 150,
				image: "weaponsmith",
				name: "Weaponsmith",
				hostility: "friendly",
				level: 10,
				stats: {
					maxHealth: 100,
					defence: 2,
				},
				roles: [
					{
						sold: Player.class === "k" ? [{item: Items.sword[2], cost: 3},]
						: Player.class === "m" ? [{item: Items.staff[2], cost: 3},]
						: Player.class === "a" ? [{item: Items.bow[2], cost: 3,},]
						: [],
						role: "merchant",
						shopGreeting: "Would you like to buy anything?",
					},
				],
				chat: {
					shopLeave: "Come back some time.",
					inventoryFull: "Looks like your bag's too full! Empty it a bit and come back.",
					tooPoor: "You can't afford that item. Kill some enemies and come back.",
				},
			},
			{
				x: 343,
				y: 380,
				image: "fisherman",
				name: "Fisherman Tobenam",
				hostility: "friendly",
				level: 15,
				stats: {
					maxHealth: 125,
					defence: 3,
				},
				roles: [
					{
						quest: Quests.eaglecrestLoggingCamp[7],
						role: "questStartFinish",
					},
					{
						quest: Quests.fishing[0],
						role: "questStartFinish",
					},
					{
						quest: Quests.fishing[1],
						role: "questStartFinish",
					},
					{
						quest: Quests.fishing[2],
						role: "questStartFinish",
					},
					{
						quest: Quests.eaglecrestLoggingCamp[19],
						role: "questStart",
					},
					{
						quest: [Quests.fishing[3], Quests.fishing[4], Quests.fishing[5], Quests.fishing[6], Quests.fishing[7], Quests.fishing[8], Quests.fishing[9], Quests.fishing[10], Quests.fishing[11], Quests.fishing[12]],
						role: "questStartFinish",
						newQuestFrequency: "daily",
						questVariable: "fishingDaily",
					},
					{
						sold: [
							{item: Items.rod[3], cost: 3}, // basic fishing rod
							{item: Items.consumable[8], cost: 3}, // can of worms
							{item: Items.consumable[12], cost: 3, condition: function () { // magnetised lure
						        return Player.stats.fishingSkill >= 10;
						    }},
						],
						role: "merchant",
						chooseText: "I'd like to browse your fishing items.",
						roleRequirement: function () {
							return Player.quests.completedQuestArray.includes("Learning to Fish II") || Player.quests.activeQuestArray.includes("Learning to Fish II");
						},
						shopGreeting: "You can always buy a lure to fish up more. Heheh, that rhymed!",
					},
					{
						sold: [
							{item: Items.currency[2], cost: 1, costCurrency: 3}, // 1 gold
							{item: Items.bag[4], cost: 10, costCurrency: 3}, // fishing pouch
						],
						role: "merchant",
						chooseText: "I'd like to see what I can buy with fishing seals.",
						roleRequirement: function () {
							return Player.quests.completedQuestArray.includes("Learning to Fish III");
						},
						shopGreeting: "If ya do enough fishing, you can get some rare items. Heheh.",
					},
				],
				chat: {
					notUnlockedRoles: "It's a great day to fish, heheh.",
					chooseChat: "Caught a big one?",
					shopLeave: "Heheh, see you soon!",
					inventoryFull: "You've lots of fish in your bags, but you've not any space for your rewards!",
					tooPoor: "You can't afford that, but don't let that stop ya from fishing!",
					questProgress: "It's a great day to fish, heheh.",
					// "&#9835; I'm fiiiiiiiishing in the rain! &#9835;"
					christmasGreeting: "Heheh, what better to do on Christmas Day than to fish!",
				},
				canBeShown: function () {
					return Player.quests.completedQuestArray.includes("To the Logging Camp");
				},
			},

			{
				template: NPCTemplates.torianTintop,
				x: 3210,
				y: 395,
				z: -1,
				canBeShown: function () {
					return Player.quests.activeQuestArray.includes("A Tale of Two Twintops") &&
					Player.quests.timesCompleted.eaglecrestLoggingCamp[25] === 2;
				}
			},
			{
				template: NPCTemplates.nessyTintop,
				x: 3630,
				y: 266,
				orderOffsetY: -10,
				canBeShown: function () {
					return Player.quests.activeQuestArray.includes("A Tale of Two Twintops") &&
					Player.quests.timesCompleted.eaglecrestLoggingCamp[25] === 9;
				}
			},
		],

		things: [
			{
				x: 3660,
				y: 250,
				orderOffsetY: -20,
				image: "cart",
				name: "Cart",
			},
			{
				x: 3208,
				y: 388,
				image: "weaponsmithSign",
				name: "Weaponsmith Sign",
			},
			{
				x: 150,
				y: 90,
				image: "eaglecrestBanner",
				name: "Eaglecrest Banner",
			},
			{
				x: 390,
				y: 90,
				image: "eaglecrestBanner",
				name: "Eaglecrest Banner",
			},
			{
				x: 1470,
				y: 90,
				image: "eaglecrestBanner",
				name: "Eaglecrest Banner",
			},
		],

		chests: [
			{
                x: 1476,
                y: 140,
                image: "present",
                name: "Tightly Packed Present", // from tintops
                loot: [{item: Items.helm[20]}, {item: Items.currency[2], quantity: 2}, {item: Items.food[0]}, {item: new UnId("loggingCamp", 1)}, {item: Items.consumable[22]}],
                inventorySpace: 8,
                disappearAfterOpened: true,
                canBeShown: function () {
                    return Player.quests.activeQuestArray.includes("A Tale of Two Twintops") &&
					Player.quests.timesCompleted.eaglecrestLoggingCamp[25] === 10;
                },
				onClose: function () {
					Quests.eaglecrestLoggingCamp[25].autofinish = true;
					//Quests.eaglecrestLoggingCamp[25].finishName = "From Torian and Nessy Tintop";
					Dom.checkProgress();
				}
            },
		],

	},

	eaglecrestLoggingCamp: {
		id: 1,

		data: {
			name: "Eaglecrest Logging Camp",
			level: "Level 1 - 5",
			territory: "Allied",
			displayOnEnter: true,
		},

		indoors: false,

		tagGameAllowed: true,

		song_day: "assets/music/Pippin-the-Hunchback.mp3",
		song_night: "assets/music/Pippin-the-Hunchback-night.mp3",

		checkpoint: true,
		player: {
			x: 1350,
			y: 788,
		},

		lootArea: "loggingCamp",
		lootTier: 1,

		mapData: {
			cols: 42,
			rows: 23,
			tsize: 60,
			tilesPerRow: 8,
			solidTiles: [67, 75, 83, 91, 99, 107, 6, 14, 22, 8, 16, 24, 32, 7, 15, 23, 31, 39, 47, 55, 63, 71, 79, 87, 95, 103, 111],
			waterTiles: [27, 35, 43],
			iceTiles: [27, 35],
			mudTiles: [2, 10, 18, 26, 34, 42, 50, 58, 66, 74, 82, 90, 98, 106],
			pathTiles: [1, 9, 17, 25, 33, 41, 49, 57, 65, 3, 11, 19],
			dayTiles: [24],
			nightTiles: [32],
			layers: [
				[105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 75, 75, 75, 75, 75, 75, 75, 105, 105, 105, 105, 105, 105, 105, 105, 105, 44, 35, 51, 43, 27, 4, 105, 105, 105, 105, 105, 105, 105, 97, 105, 105, 105, 105, 105, 105, 105, 105, 93, 94, 105, 105, 75, 107, 75, 91, 83, 107, 75, 105, 105, 105, 105, 105, 105, 105, 105, 105, 44, 59, 27, 27, 51, 4, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 93, 94, 105, 69, 77, 75, 75, 75, 99, 75, 75, 75, 69, 77, 105, 97, 105, 105, 105, 105, 105, 44, 27, 27, 27, 43, 4, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 61, 5, 5, 5, 5, 13, 5, 5, 5, 5, 5, 5, 29, 105, 105, 105, 105, 105, 105, 44, 27, 27, 27, 27, 4, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 53, 5, 5, 5, 5, 5, 5, 5, 5, 13, 5, 5, 29, 105, 105, 105, 105, 105, 105, 44, 27, 35, 27, 27, 4, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 97, 61, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 21, 105, 105, 105, 105, 105, 105, 44, 43, 27, 27, 27, 4, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 93, 94, 61, 5, 5, 5, 13, 5, 5, 5, 5, 5, 5, 5, 29, 105, 105, 105, 105, 105, 105, 44, 27, 27, 27, 27, 4, 105, 105, 105, 105, 105, 105, 105, 105, 93, 94, 105, 105, 105, 105, 105, 105, 105, 61, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 29, 105, 105, 105, 105, 105, 105, 11, 3, 3, 3, 3, 19, 105, 105, 89, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 61, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 29, 105, 105, 105, 105, 105, 105, 44, 35, 27, 27, 27, 4, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 53, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 29, 105, 105, 105, 105, 105, 105, 44, 27, 27, 27, 27, 4, 105, 105, 105, 105, 81, 105, 105, 105, 73, 105, 105, 105, 105, 105, 105, 105, 105, 53, 5, 5, 5, 5, 5, 5, 5, 5, 13, 5, 5, 21, 89, 105, 105, 105, 105, 105, 44, 27, 27, 27, 27, 4, 105, 105, 105, 105, 105, 105, 73, 105, 105, 105, 73, 105, 105, 105, 105, 105, 105, 61, 5, 13, 5, 5, 5, 5, 5, 5, 5, 5, 5, 29, 105, 105, 105, 105, 105, 105, 44, 27, 35, 27, 43, 4, 105, 105, 73, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 61, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 29, 105, 105, 105, 105, 105, 105, 44, 27, 43, 35, 27, 4, 105, 105, 105, 105, 105, 105, 105, 105, 81, 105, 105, 105, 105, 105, 105, 105, 105, 105, 45, 45, 45, 45, 37, 37, 37, 45, 45, 37, 45, 105, 105, 105, 105, 105, 105, 105, 44, 27, 27, 27, 27, 4, 105, 105, 105, 105, 73, 105, 73, 105, 105, 105, 105, 105, 100, 101, 102, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 44, 27, 27, 27, 27, 4, 105, 105, 105, 105, 105, 81, 105, 105, 105, 105, 105, 105, 108, 109, 110, 97, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 44, 27, 27, 27, 27, 4, 105, 105, 105, 105, 105, 105, 105, 105, 105, 73, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 44, 27, 51, 27, 27, 4, 105, 105, 81, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 44, 35, 27, 27, 27, 4, 105, 105, 105, 105, 105, 105, 73, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 44, 27, 27, 27, 27, 4, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 17, 105, 105, 105, 93, 94, 105, 105, 105, 105, 105, 105, 105, 44, 27, 43, 27, 27, 4, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 1, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 44, 27, 27, 27, 35, 4, 105, 105, 105, 105, 105, 105, 105, 105, 89, 105, 105, 105, 105, 105, 105, 105, 105, 93, 94, 105, 105, 105, 105, 1, 105, 105, 105, 100, 101, 102, 105, 105, 105, 105, 89, 105, 44, 27, 27, 27, 27, 4, 105, 97, 105, 105, 105, 89, 105, 105, 105, 105, 89, 105, 105, 105, 105, 105, 93, 94, 105, 93, 94, 105, 105, 1, 105, 105, 97, 108, 109, 110, 105, 105, 105, 105, 105, 105, 44, 27, 27, 27, 43, 4, 105],
				[],
			],
			interactWithTile: function(tileNum, x, y) {
				// pick up snowball from rock
				if (tileNum === 29 && Event.event === "Christmas") { // rock top centre
					// channel for 1 second
					Game.hero.channel(function () {
						// give snowball to player
						if (Dom.inventory.give(Items.bow[8], 1) !== false) { // check if player has enough inventory space
							Player.quests.questProgress.snowCollected = Increment(Player.quests.questProgress.snowCollected);
							Dom.checkProgress();
							// replace tiles with no snow rocks
							map.setTile(0, map.getCol(x), map.getRow(y), 59);
							map.setTile(0, map.getCol(x + 60), map.getRow(y), 60);
							map.setTile(0, map.getCol(x), map.getRow(y + 60), 69);
							// add snow back after 5 minutes
							Game.setTimeout(function(x, y) {
								SetTile("eaglecrestLoggingCamp", 0, map.getCol(x), map.getRow(y), 29);
								SetTile("eaglecrestLoggingCamp", 0, map.getCol(x + 60), map.getRow(y), 30);
								SetTile("eaglecrestLoggingCamp", 0, map.getCol(x), map.getRow(y + 60), 39);
							}, 60000, [x, y]);
						}
					}, [], 1000, "Making a Snowball");
				}
				else if (tileNum === 39 && Event.event === "Christmas") { // rock bottom centre
					// channel for 1 second
					Game.hero.channel(function () {
						// give snowball to player
						if (Dom.inventory.give(Items.bow[8], 1) !== false) { // check if player has enough inventory space
							Player.quests.questProgress.snowCollected = Increment(Player.quests.questProgress.snowCollected);
							Dom.checkProgress();
							// replace tiles with no snow rocks
							map.setTile(0, map.getCol(x), map.getRow(y - 60), 59);
							map.setTile(0, map.getCol(x + 60), map.getRow(y - 60), 60);
							map.setTile(0, map.getCol(x), map.getRow(y), 69);
							// add snow back after 5 minutes
							Game.setTimeout(function(x, y) {
								SetTile("eaglecrestLoggingCamp", 0, map.getCol(x), map.getRow(y), 29);
								SetTile("eaglecrestLoggingCamp", 0, map.getCol(x + 60), map.getRow(y), 30);
								SetTile("eaglecrestLoggingCamp", 0, map.getCol(x), map.getRow(y + 60), 39);
							}, 60000, [x, y]);
						}
					}, [], 1000, "Making a Snowball");
				}
			},
		},

		isIcy: function() {
			return Event.event === "Christmas";
		},

		images: {
			tiles: {normal: "assets/tilemap/loggingCamp.png", christmas: "assets/tilemap/loggingCamp-christmas.png"},
			teper: {normal: "assets/npcs/teper.png"},
			teperAngry: {christmas: "assets/npcs/teper-angry.png"},
			identifier: {normal: "assets/npcs/gilas.png"},
			dummy: {normal: "assets/enemies/dummy.png", christmas: "assets/enemies/dummy-christmas.png"},
			dummyCorpse: {normal: "assets/corpses/dummy.png", christmas: "assets/corpses/dummy-christmas.png"},
			saral: {normal: "assets/npcs/saral.png"},
			mailman: {normal: "assets/npcs/mailman.png"},
			soulHealer: {normal: "assets/npcs/nalaa.png"},
			galuthel: {normal: "assets/npcs/galuthel.png"},
			itemBuyer: {normal: "assets/npcs/noledar.png"},
			darkbrew: {normal: "assets/npcs/darkbrew.png"},
			mailbox: {normal: "assets/objects/mailbox.png"},
			mailboxUnread: {normal: "assets/objects/mailboxUnread.png"},
			christmasTree: {christmas: "assets/objects/christmasTree.png"},
			christmasTreeUnread: {christmas: "assets/objects/christmasTreeUnread.png"},
			lightsRB: {christmas: "assets/objects/lightsRB.png"},
			lightsGY: {christmas: "assets/objects/lightsGY.png"},
			christmasSapling: {christmas: "assets/objects/christmasSapling.png"},
			cart: {normal: "assets/objects/cartEaglecrest2.png"},
			driver: {normal: "assets/npcs/alaran.png"},
			eaglecrestBanner: {normal: "assets/objects/eaglecrestBanner.png"},
			nilbogBanner: {normal: "assets/objects/nilbogBanner.png"},
			torianTintop: {normal: "assets/npcs/torianTintop.png"},
			nessyTintop: {normal: "assets/npcs/nessyTintop.png"},
		},

		onAreaJoin: function () {
			// start instructions if the player hasn't already seen them
			if (Player.tutorialProgress < 5) {
				Dom.instructions.page(5);
				// show chat tab
				Dom.instructions.unlockTab("chat");
			}
		},

		areaTeleports: [
			{
				// teleport to fishers' valley (path - south)
				x: 1470,
				y: 1430,
				width: 300,
				height: 2,
				teleportTo: "tutorial",
				destinationX: 270,
				destinationY: 100,
			},
			{
				// teleport to tavern (tavern door - north)
				x: 1350,
				y: 87,
				width: 60,
				height: 2,
				teleportTo: "loggingCampTavern",
				destinationX: 480,
				destinationY: 1380,
			},
			{
				// teleport to nilbog (bridge - east)
				x: 2360,
				y: 690,
				width: 120,
				height: 1400,
				teleportTo: "nilbog",
				destinationX: 292,
				playerAdjustY: 360,
				teleportCondition: function () {
					return Player.quests.activeQuestArray.includes("Retrieval of Logs") || Player.quests.completedQuestArray.includes("Retrieval of Logs");
				},
				teleportFailText: "You shouldn't go to <strong>The Nilbog</strong> until you're a bit stronger.",
				teleportFailFunction: function () {
					// displace player away from the teleport
					Game.hero.displace(0, 150, 1, ToRadians(180));
				}
			},
		],

		villagerData: {
			minPeople: 0,
			maxPeople: 2,
			locations: [
				{
					x: 39,
					y: 140,
					width: 2061,
					height: 1232,
				},
			],
		},

		npcs: [
			{
				// id: 0,
				x: 1350,
				y: 410,
				image: "teper",
				name: "Marshall Teper",
				hostility: "friendly",
				level: 50,
				stats: {
					maxHealth: 300,
					defence: 10,
				},
				roles: [
					{
						quest: Quests.eaglecrestLoggingCamp[0],
						role: "questFinish"
					},
					{
						quest: Quests.eaglecrestLoggingCamp[1],
						role: "questStart"
					},
					{
						quest: Quests.eaglecrestLoggingCamp[3],
						role: "questStartFinish"
					},
					{
						quest: Quests.eaglecrestLoggingCamp[4],
						role: "questStartFinish"
					},
					{
						quest: Quests.eaglecrestLoggingCamp[5],
						role: "questStartFinish"
					},
					{
						quest: Quests.eaglecrestLoggingCamp[17],
						role: "questStartFinish"
					},
					{
						quest: Quests.eaglecrestLoggingCamp[20],
						role: "questStartFinish"
					},
					{
						quest: Quests.eaglecrestLoggingCamp[23],
						role: "questStart"
					},
					{
						sold: [
							{item: Items.consumable[18], cost: 0}, // christmas saplings
						],
						role: "merchant",
						chooseText: "I need some more Christmas Saplings.",
						roleRequirement: function () {
							return Player.quests.activeQuestArray.includes("Deck the Halls!");
						},
						shopGreeting: "Take some Christmas Saplings to decorate the Logging Camp with.",
					},
					{
						role: "text",
						chooseText: "I found a pair of boots that I think might be yours.",
						chat: "Are you sure? Give them here.<br><br>You're right, they were mine. They were stolen by a goblin during the recent goblin siege. Are you sure I can have them back? I will make sure that you are aptly rewarded.",
						buttons: ["Return them", "Keep them"],
						showCloseButton: false,
						forceChoose: true, // forces choose dom
						functions: [function () {
							// remove the boots
							Dom.inventory.removeById(6, "boots", 1);
							// give rewards
							Game.getXP(50);
							Dom.reputation.give("eaglecrestLoggingCamp", 300);
							Dom.inventory.give(Items.currency[2], 5);
							Dom.chat.insert("Marshall Teper has given you <strong>5 Gold</strong> for the boots.");
							// close page
							Dom.closePage("textPage");
							// chat message
							Game.npcs[0].say("Thank you. I hope you find these rewards useful to your progression. Now, back to work.", 0, false); // Teper is Game.npcs[0]
						},
						function () {
							// close page
							Dom.closePage("textPage");
							// chat message
							Game.npcs[0].say("What, are you even allowed to keep them? I'd like my boots back!", 0, false); // Teper is Game.npcs[0]
						}],
						roleRequirement: function () {
							return Dom.inventory.check(6, "boots", 1, false); // check that the player has Marshall Teper's lost boots
						},
					},
				],
				chat: {
					notUnlockedRoles: "I'm busy. Come back later.",
					chooseChat: "What do you want?",
					questProgress: "Get on with your work!",
					questComplete: "There's lots of work still to be done.",
					inventoryFull: "You have no space to hold this. Empty your bags a bit and come back.",
					shopLeave: "I expect a fine job done.",
					christmasGreeting: "Yes, I <strong>do</strong> celebrate Christmas.",
					antoraxDayGreeting: `This Logging Camp has been operating at full capacity for ${Event.antoraxAge} years today. Don't think today will be any different.`,
				},
			},
			{
				// id: 1,
				x: 400,
				y: 990,
				image: "saral",
				name: "Combat Trainer Saral",
				hostility: "friendly",
				level: 40,
				stats: {
					maxHealth: 250,
					defence: 10,
					healthRegen: 1,
				},
				roles: [
					{
						quest: Quests.eaglecrestLoggingCamp[1],
						role: "questFinish"
					},
					{
						quest: Quests.eaglecrestLoggingCamp[2],
						role: "questStartFinish"
					},
					{
						quest: Quests.eaglecrestLoggingCamp[16],
						role: "questStartFinish"
					},
					{
						quest: Quests.eaglecrestLoggingCamp[18],
						role: "questStartFinish"
					},
					{
						role: "merchant",
						chooseText: "What have you got to sell this Christmas?",
						sold: [
							{item: Items.bow[10], cost: 3, costCurrency: 5,}, // Crystal Bow
							{item: Items.staff[10], cost: 3, costCurrency: 5,}, // Ice Staff
							{item: Items.sword[9], cost: 3, costCurrency: 5,}, // Icicle
						],
						roleRequirement: function () {
							return Event.event === "Christmas" && Player.quests.completedQuestArray.includes("Combat Training");
						},
						shopGreeting: "I have some special weapons you can purchase this Christmas.",
					},
				],
				chat: {
					notUnlockedRoles: "Hmm, you look new around here. Don't worry, you'll be a combatant in no time.",
					questProgress: "The dummy isn't going anywhere.",
					questComplete: "You can always check your adventure log if you need to brush up on your combat skills.",
					inventoryFull: "Empty your bags some. You have no space for your rewards.",
					chooseChat: `I trust your combat is going fine, ${Player.name}.`,
					shopLeave: "I wish you the best in your battles.",
					tooPoor: "You can't afford that. You know what to do - Kill!",
					christmasGreeting: `Merry Christmas, ${Player.name}! What better a day to be practising your combat.`,
					antoraxDayGreeting: `Have a jolly Antorax day, ${Player.name}. I've been killing enemies for ${Event.antoraxAge} years - this calls for some celebration!`,
				},
			},
			{
				// id: 2,
				x: 2059,
				y: 564,
				image: "mailman",
				name: "Eaglecrest Mailman",
				hostility: "friendly",
				level: 10,
				stats: {
					maxHealth: 100,
					defence: 5,
				},
				roles: [
					{
						quest: Quests.eaglecrestLoggingCamp[6],
						role: "questStartFinish"
					},
				],
				chat: {
					questProgress: "I hope you can find it. I'm getting worried.",
					questComplete: "Thank you so much! I must hurry now to Eaglecrest.",
					inventoryFull: "I'm not sure you have any space to hold this.",
				},
				canBeShown: function () {
					return Player.quests.possibleQuestArray.includes("First Class Recovery") || Player.quests.activeQuestArray.includes("First Class Recovery");
				},
			},
			{
				// id: 3,
				x: 1100,
				y: 460,
				image: "identifier",
				name: "Identifier Gilas",
				hostility: "friendly",
				level: 30,
				stats: {
					maxHealth: 200,
					defence: 3,
				},
				roles: [
					{
						quest: Quests.eaglecrestLoggingCamp[13],
						role: "questStartFinish"
					},
					{
						role: "identifier",
					},
					{
						role: "merchant",
						chooseText: "What have you got to sell this Christmas?",
						sold: [
							{item: Items.bow[9], cost: 25, costCurrency: 5,}, // Snowball Cannon
							{item: Items.staff[9], cost: 25, costCurrency: 5,}, // Vulpric's Ice Staff
							{item: Items.sword[8], cost: 25, costCurrency: 5,}, // Permafrost
						],
						roleRequirement: function () {
							return Event.event === "Christmas" && Player.quests.completedQuestArray.includes("Retrieval of Logs");
						},
						shopGreeting: "I have some rare weapons that you can buy this Christmas with your Christmas Tokens.",
					},
				],
				chat: {
					chooseChat: "Isn't studying the environment here just fascinating? I have envy of those dendrologists.",
					identifierGreeting: "What would you like to identify?",
					noUnidentified: "You have no unidentified items. Kill and loot enemies to get some.",
					identifyCommon: "Here is your item, adventurer.",
					identifyUnique: "Hmm, this item is of rather fine quality, adventurer.",
					identifyMythic: "Wow! Some people would pay good money for that item!",
					tooPoor: "You don't have enough gold to identify that. Kill and loot enemies to get some.",
					shopLeave: "See you soon with some unidentified items!",
					christmasGreeting: "Merry Christmas! I hope your Christmas archaeology progress is coming across nicely.",
					antoraxDayGreeting: `Jocund Antorax Day! Have you got your party hat from the mail? Those will be worth a lot in the coming years!`,
				}
			},
			{
				// id: 4,
				x: 1888,
				y: 125,
				image: "soulHealer",
				name: "Soul Healer Nalaa",
				hostility: "friendly",
				level: 25,
				stats: {
					maxHealth: 175,
					defence: 5,
				},
				roles: [
					{
						role: "function",
						chooseText: "I found a present addressed to you!",
						forceChoose: true, // forces choose dom
						onClick: function () {
							// remove the item
							Dom.inventory.removeById(21, "fish", 1);
							// quest progress
							Player.quests.questProgress.christmasPresentsDelivered = 1; // always the first NPC to be delivered to
							// chat
							Dom.chat.insertSequence([
								Dom.chat.say("Soul Healer Nalaa", "Thank you for taking the time to bring this to me."),
								Dom.chat.say("Soul Healer Nalaa", "/me gently unfolds the wrapping paper to reveal a brand new sceptre of Souls."),
								Dom.chat.say("Soul Healer Nalaa", "It's a new sceptre of Souls! Thank you, adventurer. May the Demigods' blessings be bestowed upon you.")],
							[500], undefined, undefined, true); // cutscene with no end function
						},
						roleRequirement: function () {
							let presentPositions = Dom.inventory.find(21, "fish", true); // array of present inventory positions
							for (let i = 0; i < presentPositions.length; i++) {
								if (Player.inventory.items[presentPositions[i]].targetNPC === "Soul Healer Nalaa") {
									// found one for item buyer noledar
									return true;
								}
							}
							return false;
						},
					},
					{
						quest: Quests.eaglecrestLoggingCamp[10],
						role: "questStartFinish"
					},
					{
						role: "soulHealer",
					},
				],
				chat: {
					canBeHealedText: "My blessings to you. It appears that you have a soul debt, meaning you will earn XP slower due to a recent death. If you wish, I can cleanse your soul and remove this effect for a small price.",
					cannotBeHealedText: "When you die, you will earn some future XP slower than normal. If this happens to you and you wish to be cleansed of this, come to me and I can remove it for you for a small price. May the purity of the demigods be with you.",
					healedText: "May the purity of the demigods be with you.",
					tooPoor: "I don't think you can afford that.",
					questProgress: "If you use the sceptre near dead enemies, soul essence will rush inside it.",
					questComplete: "May the demigods watch over you.",
					chooseChat: "Blessings to you.",
					inventoryFull: "I don't think you have space for that.",
					christmasGreeting: "You have my blessings on this sacred day.",
					antoraxDayGreeting: `I think many of us can say that Antorax has made us much stronger over these ${Event.antoraxAge} years.`,
				},
			},
			{
				// id: 5,
				x: 710,
				y: 352,
				image: "galuthel",
				name: "Galuthel the Trap Mechanic",
				hostility: "friendly",
				level: 25,
				stats: {
					maxHealth: 175,
					defence: 10,
				},
				roles: [
					{
						quest: Quests.eaglecrestLoggingCamp[8],
						role: "questStartFinish"
					},
					{
						quest: Quests.eaglecrestLoggingCamp[9],
						role: "questStartFinish"
					},
					{
						sold: [
							{item: Items.consumable[7], cost: 0}, // goblin trap
						],
						role: "merchant",
						chooseText: "I need some more goblin traps.",
						roleRequirement: function () {
							return Player.quests.activeQuestArray.includes("Strengthening Defences") || Player.quests.activeQuestArray.includes("Reinforcing Defences") || Player.quests.activeQuestArray.includes("The Goblin King");
						},
						shopGreeting: "If you're out of traps, I'll give you some more.",
					},
					{
						sold: [
							{item: Items.consumable[19], cost: 0}, // Antorax Day Firework
							{item: Items.consumable[20], cost: 1}, // Large Antorax Day Firework
						],
						role: "merchant",
						chooseText: "I'd like to buy some fireworks.",
						roleRequirement: function () {
							return Event.event === "Antorax";
						},
						shopGreeting: "More fireworks! Let's set the sky on fire this Antorax Day.",
					},
				],
				chat: {
					notUnlockedRoles: "I think we have enough traps out at the moment. Come back in a bit.",
					chooseChat: "How's it going?",
					shopLeave: "Let's crush those goblins.",
					tooPoor: "You can't afford that one.",
					inventoryFull: "Empty your inventory a bit and come back.",
					questComplete: "I'll have more traps for you to place in a bit. Come back tomorrow.",
					christmasGreeting: "Have a good Christmas. It's my day off for trap making today.",
					antoraxDayGreeting: `Trap making for ${Event.antoraxAge} years? You're making me feel old.`,
				},
			},
			{
				// id: 6,
				x: 842,
				y: 1189,
				image: "itemBuyer",
				name: "Item Buyer Noledar",
				hostility: "friendly",
				level: 15,
				stats: {
					maxHealth: 125,
					defence: 3,
				},
				roles: [
					{
						role: "function",
						chooseText: "I found a present addressed to you!",
						forceChoose: true, // forces choose dom
						onClick: function () {
							// remove the item
							Dom.inventory.removeById(21, "fish");
							// quest progress
							Player.quests.questProgress.christmasPresentsDelivered = 2; // always the second NPC to be delivered to
							// chat
							Dom.chat.insertSequence([
								Dom.chat.say("Item Buyer Noledar", "Wow, really? That's so nice, I don't think anyone has delivered me a present before!"),
								Dom.chat.say("Item Buyer Noledar", "/me peels away at the wrapping paper to reveal a large heap of gold."),
								Dom.chat.say("Item Buyer Noledar", "Wow! Gilas was right - good things <strong>can</strong> happen to ordinary people! Thank you very much, and a merry Christmas to you!")],
							[500], undefined, undefined, true); // cutscene with no end function
						},
						roleRequirement: function () {
							let presentPositions = Dom.inventory.find(21, "fish", true); // array of present inventory positions
							for (let i = 0; i < presentPositions.length; i++) {
								if (Player.inventory.items[presentPositions[i]].targetNPC === "Item Buyer Noledar") {
									// found one for item buyer noledar
									return true;
								}
							}
							return false;
						},
					},
					{
						quest: Quests.eaglecrestLoggingCamp[12],
						role: "questStartFinish"
					},
					{
						role: "itemBuyer",
						roleRequirement: function () {
							return Player.quests.completedQuestArray.includes("Another Man's Treasure");
						}
					},
					{
						sold: [
							{item: Items.helm[7], cost: 10, costCurrency: 5, eventRequirement: "Christmas"}, // Santa Hat
							{item: Items.boots[9], cost: 10, costCurrency: 5, eventRequirement: "Christmas"}, // Ice Skates
							{item: Items.helm[11], cost: 7, condition: function () { // Umbrella Hat
								return Weather.weatherType === "rain";
							}},
							{item: Items.boots[10], cost: 7, condition: function () { // Wellington Boots
								return Weather.weatherType === "rain";
							}},
							{item: Items.item[11], cost: 2}, // vial of goblin blood
							{item: Items.bag[5], cost: 10}, // brown backsack
							{item: Items.helm[2], cost: 2}, // worn leather helm
							{item: Items.chest[2], cost: 3}, // worn leather tunic
							{item: Items.greaves[2], cost: 3}, // worn leather trousers
							{item: Items.boots[3], cost: 2}, // worn leather boots
						],
						role: "merchant",
						roleRequirement: function () {
							return Player.quests.completedQuestArray.includes("Retrieval of Logs");
						},
						shopGreeting: "I can sell you some second-hand equipment for a reduced price.",
					},
				],
				chat: {
					chooseChat: "Hello, how are you?",
					notUnlockedRoles: "I'm not sure you have anything I can buy from you. Come back a bit later.",
					buyerGreeting: "I'll happily buy any items that you're willing to part with.",
					shopLeave: "Have a good day now.",
					inventoryFull: "I'm not sure you have any space to carry that.",
					tooPoor: "I don't think you have enough gold to buy that. Sorry.",
					noLongerAvailable: "", //tbd
					christmasGreeting: "Happy Christmas! I really hope you have a great day.",
					antoraxDayGreeting: `It's Antorax Day! It's so great to be a part of this, even if I'm just an item buyer.`,
				},
			},
			{
				// id: 7,
				x: 1571,
				y: 633,
				image: "darkbrew",
				name: "Ciarra Darkbrew",
				hostility: "friendly",
				level: 20,
				stats: {
					maxHealth: 150,
					defence: 6,
				},
				roles: [
					{
						quest: Quests.eaglecrestLoggingCamp[14],
						role: "questStartFinish"
					},
					{
						quest: Quests.eaglecrestLoggingCamp[15],
						role: "questStartFinish"
					},
					{
						sold: [
							{item: Items.consumable[17], cost: 2, costCurrency: 5, eventRequirement: "Christmas"}, // Christmas Potion
							{item: Items.consumable[4], cost: 2}, // potion of health I
							{item: Items.consumable[3], cost: 3}, // potion of swiftness I
							{item: Items.consumable[2], cost: 4}, // potion of strength I
							{item: Items.consumable[11], cost: 4, condition: function () { // potion of goblin resistance
								return Player.quests.completedQuestArray.includes("Potion Making II");
							}},
						],
						role: "merchant",
						roleRequirement: function () {
							return Player.level > 2;
						},
						shopGreeting: "Want to buy a potion? Of course you do.",
					},
					{
						role: "text",
						chooseText: "Do you have a potion of fire resistance?",
						chat: "Fire resistance potion? Me? And why do you think I'd be stocking such useless potions? You'd be wasting your time here. Have a look in Eaglecrest City. Have you heard of a wolf named <strong>Tamtam</strong>?",
						showCloseButton: true,
						forceChoose: true, // forces choose dom
						roleRequirement: function () {
							return Player.quests.npcProgress.eaglecrestLoggingCamp[24] === 2;
						}
					},
				],
				chat: {
					chooseChat: "Making potions isn't child's play.",
					notUnlockedRoles: "I've been told you're not a high enough level to handle my potions.",
					shopLeave: "Side effects? No. Trust me.",
					inventoryFull: "You don't want to be carrying a potion with an inventory as full as yours. Come back with some free space.",
					tooPoor: "You're not going to be able to buy that potion without enough gold.",
					christmasGreeting: "My potions make a great Christmas drink.",
					antoraxDayGreeting: "What ingredients would be in an Antorax Day potion? Dynamite, sulphur, a little bit of fire - want to try some?",
				},
			},
			{
				// id: 8,
				x: 340,
				y: 138,
				image: "driver",
				name: "Cart Driver Alaran",
				hostility: "friendly",
				level: 20,
				stats: {
					maxHealth: 150,
					defence: 4,
				},
				roles: [
					{
						role: "driver",
						roleRequirement: function () {
							return Player.quests.activeQuestArray.includes("To Eaglecrest, and Beyond!") || Player.quests.completedQuestArray.includes("To Eaglecrest, and Beyond!");
						},
						destinations: [
							{
								destinationName: "eaglecrest",
								destinationPosition: {
									x: 86,
									y: 1641,
								},
								title: "Eaglecrest",
								description: "The capital city of Antorax! One can visit the resplendent Eaglecrest Monastery, buy from the impressive range of merchants, and taste the finest beetroot pies of Antorax.",
								image: "achievements/eaglecrest.png",
								cost: 5,
							},
						],
					},
				],
				chat: {
					notUnlockedRoles: "Hey, I just need to service the cart then we can head to Eaglecrest. You'll love it there!",
					driverText: "Where are you heading?",
					tooPoor: "Oh, you don't have enough gold for that.",
					chooseChat: "Hey, how are you doing?",
					christmasGreeting: "Heading anywhere this Christmas?",
					antoraxDayGreeting: "Hey, happy Antorax Day! The fireworks are really spectacular in Eaglecrest - planning on heading there today?",
				},
			},

			{
				// id: 9 (if changed then update hide and seek onQuestStart)
				template: NPCTemplates.torianTintop,
				x: 285,
				y: 750,
				z: -1,
				canBeShown: function () {
					return Player.quests.activeQuestArray.includes("A Tale of Two Twintops") &&
					(Player.quests.timesCompleted.eaglecrestLoggingCamp[25] === null || Player.quests.timesCompleted.eaglecrestLoggingCamp[25] === undefined);
				}
			},
			{
				// id: 10
				template: NPCTemplates.nessyTintop,
				x: 2080,
				y: 305,
				canBeShown: function () {
					return Player.quests.activeQuestArray.includes("A Tale of Two Twintops") &&
					Player.quests.timesCompleted.eaglecrestLoggingCamp[25] === 5;
				}
			},
			{
				// id: 11
				template: NPCTemplates.torianTintop,
				x: 712,
				y: 380,
				canBeShown: function () {
					return Player.quests.activeQuestArray.includes("A Tale of Two Twintops") &&
					Player.quests.timesCompleted.eaglecrestLoggingCamp[25] === 8;
				}
			},

			{
				// id: 12
				image: "torianTintop",
				name: "Torian Tintop",
				x: 700,
				y: 700,
				level: 7,
				stats: {
					maxHealth: 85,
					defence: 4,
					walkSpeed: 130,
				},
				hostility: "friendly",
				roles: [
					{
						quest: Quests.eaglecrestLoggingCamp[25],
						role: "questStart",
					},
				],
				chat: {
					chooseChat: "How you doin'?",
					questProgress: "It's definitely somewhere!",
				},
				canBeShown: function () {
					return Player.quests.timesCompleted.eaglecrestLoggingCamp[25] === 10 &&
						Player.quests.possibleQuestArray.includes("A Tale of Two Twintops");
				},
			},

			{
				// id: 13
				image: "nessyTintop",
				name: "Nessy Tintop",
				x: 780,
				y: 705,
				level: 4,
				stats: {
					maxHealth: 70,
					defence: 3,
					walkSpeed: 135,
				},
				hostility: "friendly",
				roles: [
					{
						quest: Quests.eaglecrestLoggingCamp[25],
						role: "questStart",
					},
				],
				chat: {
					chooseChat: "Hello?",
					questProgress: "Keep lookin'! You'll never find it otherwise.",
				},
				canBeShown: function () {
					return Player.quests.timesCompleted.eaglecrestLoggingCamp[25] === 10 &&
						Player.quests.possibleQuestArray.includes("A Tale of Two Twintops");
				},
			},
		],

		villagers: [

			{
				image: "torianTintop",
				name: "Torian Tintop",
				level: 7,
				stats: {
					maxHealth: 85,
					defence: 4,
					walkSpeed: 130,
				},
				hostility: "friendly",
				roles: [
					{
						quest: Quests.eaglecrestLoggingCamp[25],
						role: "questStart",
					},
				],
				chat: {
					chooseChat: "How you doin'?",
					questProgress: "She's gotta be here somewhere!",
					questComplete: "Thanks for helpin' - it's my turn to hide tomorrow!",
				},
				canBeShown: function () {
					return Player.quests.timesCompleted.eaglecrestLoggingCamp[25] % 2 === 1 &&
						Player.quests.possibleQuestArray.includes("A Tale of Two Twintops");
				},
				boundary: {
					x: 39,
					y: 140,
					width: 2061,
					height: 1232,
				}
			},

			{
				image: "nessyTintop",
				name: "Nessy Tintop",
				level: 4,
				stats: {
					maxHealth: 70,
					defence: 3,
					walkSpeed: 135,
				},
				hostility: "friendly",
				roles: [
					{
						quest: Quests.eaglecrestLoggingCamp[25],
						role: "questStart",
					},
				],
				chat: {
					chooseChat: "Hello?",
					questProgress: "Keep lookin'! I'll never find him otherwise.",
					questComplete: "Woohoo! My turn to hide next! You'll never find me.",
				},
				canBeShown: function () {
					return (Player.quests.timesCompleted.eaglecrestLoggingCamp[25] === null || // haven't started quest yet
						Player.quests.timesCompleted.eaglecrestLoggingCamp[25] === undefined ||
						(Player.quests.timesCompleted.eaglecrestLoggingCamp[25] !== 10 && // or have started it and have completed it an even number of times
						Player.quests.timesCompleted.eaglecrestLoggingCamp[25] % 2 === 0)) && // or have started it and have completed it an even number of times
						Player.quests.possibleQuestArray.includes("A Tale of Two Twintops"); // Quest can be started
				},
				boundary: {
					x: 39,
					y: 140,
					width: 2061,
					height: 1232,
				}
			},

		],

		dummies: [
			{
				x: 280,
				y: 750,
				template: EnemyTemplates.dummy
			},
		],

		mailboxes: [
			{
				x: 1047,
				y: 132,
				readImage: "mailbox",
				unreadImage: "mailboxUnread",
				name: "Mailbox",
			},
			{
				x: 1918,
				y: 860,
				readImage: "christmasTree",
				unreadImage: "christmasTreeUnread",
				name: "Christmas Tree",
				canBeShown: function () {
					return Event.event === "Christmas";
				},
			},
		],

		things: [
			{
				x: 220,
				y: 100,
				orderOffsetY: -20,
				image: "cart",
				name: "Cart",
			},
			{
				x: 2070,
				y: 270,
				image: "eaglecrestBanner",
				name: "Eaglecrest Banner",
			},
			{
				x: 1530,
				y: 1110,
				image: "eaglecrestBanner",
				name: "Eaglecrest Banner",
			},
			{
				x: 1170,
				y: 1110,
				image: "eaglecrestBanner",
				name: "Eaglecrest Banner",
			},
			{
				x: 30,
				y: 90,
				image: "eaglecrestBanner",
				name: "Eaglecrest Banner",
			},
			{
				x: 2310,
				y: 220,
				image: "nilbogBanner",
				name: "Nilbog Banner",
			},
			{
				x: 2310,
				y: 640,
				image: "nilbogBanner",
				name: "Nilbog Banner",
			},
			{
				x: 2310,
				y: 1180,
				image: "nilbogBanner",
				name: "Nilbog Banner",
			},
			{
				x: 1350,
				y: 87,
				image: "lightsRB",
				name: "Christmas Lights",
				bright: true,
				canBeShown: function () {
					return Event.event === "Christmas";
				},
				// change colour!
				animateFunction: function () {
					// increase number of ticks
					if (this.timeoutTicks === undefined || this.timeoutTicks >= 20) {
						this.timeoutTicks = 1;
					}
					else {
						this.timeoutTicks++;
					}
					// alternate image
					// the first time this is called, imageName is undefined so the image is not changed
					if (this.imageName === "lightsRB") {
						this.image = Loader.getImage("lightsGY");
						this.imageName = "lightsGY";
					}
					else if (this.imageName === "lightsGY") {
						this.image = Loader.getImage("lightsRB");
						this.imageName = "lightsRB";
					}
					// time for next animation frame
					if (this.timeoutTicks > 10) {
						this.animationFrameTime = 300; // formerly 250
					}
					else {
						this.animationFrameTime = 1100;
					}
				},
				animationFrameTime: 1100,
			},
		],

	},

	loggingCampTavern: {
		id: 2,

		data: {
			name: "Treefellers' Tavern",
			displayOnEnter: true,
		},

		indoors: true,

		tagGameAllowed: true,

		song_day: "assets/music/Tavern.mp3",
		song_night: "assets/music/Tavern.mp3",

		checkpoint: false, // probably in the future taverns should be the ONLY checkpoints

		lootArea: "loggingCamp", // for level up music etc.

		mapData: {
			cols: 16,
			rows: 24,
			tsize: 60,
			tilesPerRow: 8,
			solidTiles: [67, 75, 83, 91, 99, 107, 6, 14, 22, 8, 16, 24, 32, 7, 15, 23, 31, 39, 47, 55, 63, 71, 79, 87, 95, 103, 111],
			waterTiles: [27, 35, 43],
			iceTiles: [27, 35],
			mudTiles: [2, 10, 18, 26, 34, 42, 50, 58, 66, 74, 82, 90, 98, 106],
			pathTiles: [1, 9, 17, 25, 33, 41, 49, 57, 65, 3, 11, 19],
			dayTiles: [24],
			nightTiles: [32],
			layers: [
				[67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 24, 67, 67, 67, 67, 24, 67, 67, 67, 24, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 85, 85, 67, 67, 24, 67, 67, 67, 67, 67, 24, 67, 67, 67, 67, 67, 16, 16, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 16, 16, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 16, 16, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 8, 8, 8, 8, 8, 8, 8, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85],
			],
		},

		images: {
			tiles: {normal: "assets/tilemap/loggingCamp.png"},
			innkeeper: {normal: "assets/npcs/gregor.png"},
			stairs: {normal: "assets/objects/stairsRight.png"},
			gameBoard: {normal: "assets/objects/gameBoard2.png"},
			hearth1: {normal: "assets/objects/hearth1.png"},
			hearth2: {normal: "assets/objects/hearth2.png"},
			hearth3: {normal: "assets/objects/hearth3.png"},
			dirt: {normal: "assets/enemies/dirt.png"},
			mug: {normal: "assets/items/item/25.png"},
			plate: {normal: "assets/items/item/26.png"},
			table: {normal: "assets/objects/table.png"},
			largeTable: {normal: "assets/objects/largeTable.png"},
			barrel: {normal: "assets/objects/barrel.png"},
			torianTintop: {normal: "assets/npcs/torianTintop.png"},
			nessyTintop: {normal: "assets/npcs/nessyTintop.png"},
		},

		areaTeleports: [
			{
				x: 480,
				y: 1480,
				width: 240,
				height: 2,
				teleportTo: "eaglecrestLoggingCamp",
				destinationX: 1348,
				destinationY: 200,
			},
		],

		villagerData: {
			minPeople: 3,
			maxPeople: 5,
			locations: [
				{
					x: 39,
					y: 140,
					width: 882,
					height: 392,
				},
				{
					x: 39,
					y: 980,
					width: 882,
					height: 332,
				},
			],
		},

		npcs: [
			{
				// id: 0
				x: 154,
				y: 934,
				image: "innkeeper",
				name: "Gregor Goldenbrew",
				hostility: "friendly",
				level: 15,
				stats: {
					maxHealth: 100,
					defence: 2,
				},
				roles: [
					{
						// must be the first role for Hungry Taverners
						sold: [
						    {item: Items.consumable[5], cost: 0, quest: true, unconsumable: true, removeOnAbandon: "Hungry Taverners", removeOnAbandon: "Hungry Taverners"}, // Wood-Brewed Beer
							{item: Items.consumable[16], cost: 0, eventRequirement: "Christmas", quest: true, unconsumable: true, removeOnAbandon: "Hungry Taverners", removeOnAbandon: "Hungry Taverners"}, // Mulled Wine
						    {item: Items.food[0], cost: 0, quest: true, unconsumable: true, removeOnAbandon: "Hungry Taverners", removeOnAbandon: "Hungry Taverners"}, // Bread
						    {item: Items.food[1], cost: 0, eventRequirement: "Christmas", quest: true, unconsumable: true, removeOnAbandon: "Hungry Taverners", removeOnAbandon: "Hungry Taverners"}, // Mince Pie
						    {item: Items.food[2], cost: 0, eventRequirement: "Christmas", quest: true, unconsumable: true, removeOnAbandon: "Hungry Taverners", removeOnAbandon: "Hungry Taverners"}, // Christmas Pudding
						    {item: Items.food[3], cost: 0, eventRequirement: "Antorax", quest: true, unconsumable: true, removeOnAbandon: "Hungry Taverners", removeOnAbandon: "Hungry Taverners"}, // Birthday Cake (changed every year)
						],
						role: "merchant",
						roleRequirement: function () {
							return Player.quests.activeQuestArray.includes("Hungry Taverners");
						},
						shopGreeting: "Give these out to people around the tavern.",
						chooseText: "Obtain tavern goods to hand out.",
					},
					{
						quest: Quests.tavern[0],
						role: "questStartFinish",
					},
					{
						quest: [Quests.tavern[1], Quests.tavern[2], Quests.tavern[3]],
						role: "questStartFinish",
						newQuestFrequency: "repeatable",
						questVariable: "tavernJobs",
					},
					{
						sold: [
						    {item: Items.consumable[5], cost: 2,}, // Wood-Brewed Beer
							{item: Items.consumable[16], cost: 2, costCurrency: 5, eventRequirement: "Christmas"}, // Mulled Wine
						    {item: Items.food[0], cost: 2,}, // Bread
						    {item: Items.food[1], cost: 2, costCurrency: 5, eventRequirement: "Christmas"}, // Mince Pie
						    {item: Items.food[2], cost: 2, costCurrency: 5, eventRequirement: "Christmas"}, // Christmas Pudding
						    {item: Items.food[3], cost: 5, eventRequirement: "Antorax"}, // Birthday Cake (changed every year)
							{item: Items.teleport[0], cost: 30,}, // Logging Teleport Coin
						],
						role: "merchant",
						roleRequirement: function () {
							return Player.quests.completedQuestArray.includes("A Drink on Us!");
						},
						shopGreeting: "Only the finest food 'n' drink here.",
					},
					{
						sold: [
							// no need for eventRequirements since role requires the event anyway
						    {item: Items.consumable[30], cost: 2}, // Samhain Brew
						    {item: Items.food[7], cost: 2}, // Toffee Apple
						    {item: Items.food[6], cost: 3}, // Pumpkin Pie
						],
						role: "merchant",
						roleRequirement: function () {
							return Player.quests.completedQuestArray.includes("A Drink on Us!") && Event.event === "Samhain";
						},
						shopGreeting: "How else to celebrate Samhain?",
						chooseText: "I'd like to browse your Samhain goods.",
					},
				],
				chat: {
					questProgress: "Girls! Make some room by the hearth, won't ya!",
					chooseChat: "Oh ho ho! It's good to see ya again!",
					notUnlockedRoles: "I've never seen ya 'round 'ere before!",
					shopLeave: "See ya soon!",
					inventoryFull: "How're ya gonna hold that?!",
					tooPoor: "Ya can't afford that.",
					christmasGreeting: "Ha, it's Christmas! Have a good 'un!",
					antoraxDayGreeting: "Happy Antorax Day! I've lots o' birthday cakes if you want a break from all the fireworks out there.",
				},
			},

			{
				// id: 1
				template: NPCTemplates.nessyTintop,
				x: 36,
				y: 1300,
				canBeShown: function () {
					return Player.quests.activeQuestArray.includes("A Tale of Two Twintops") &&
					Player.quests.timesCompleted.eaglecrestLoggingCamp[25] === 1;
				}
			},
			{
				// id: 2
                template: NPCTemplates.torianTintop,
                x: 300,
                y: 951,
                z: -1,
                crop: { // behind counter
                    height: 18,
                },
                canBeShown: function () {
                    return Player.quests.activeQuestArray.includes("A Tale of Two Twintops") &&
                    Player.quests.timesCompleted.eaglecrestLoggingCamp[25] === 4;
                }
            },
			{
				// id: 3
				template: NPCTemplates.torianTintop,
				x: 842,
				y: 320,
				z: -1,
				canBeShown: function () {
					return Player.quests.activeQuestArray.includes("A Tale of Two Twintops") &&
					Player.quests.timesCompleted.eaglecrestLoggingCamp[25] === 6;
				}
			},
		],

		things: [
			{
				x: 570,
				y: 166,
				image: "barrel",
				name: "Barrel",
			},
			{
				x: 30,
				y: 826,
				image: "barrel",
				name: "Barrel",
			},
			{
				x: 90,
				y: 826,
				image: "barrel",
				name: "Barrel",
			},
			{
				x: 210,
				y: 826,
				image: "barrel",
				name: "Barrel",
			},
			{
				x: 30,
				y:1306,
				image: "barrel",
				name: "Barrel",
			},
			{
				x: 90,
				y:1366,
				image: "barrel",
				name: "Barrel",
			},
			{
				x: 150,
				y:1366,
				image: "barrel",
				name: "Barrel",
			},
			{
				x: 134,
				y: 125,
				z: -1,
				image: "hearth1",
				name: "Tavern Hearth",
				// animation!
				animateFunction: function () {
					if (this.imageName === "hearth1") {
						this.image = Loader.getImage("hearth2");
						this.imageName = "hearth2";
					}
					else if (this.imageName === "hearth2") {
						this.image = Loader.getImage("hearth3");
						this.imageName = "hearth3";
					}
					else if (this.imageName === "hearth3") {
						this.image = Loader.getImage("hearth1");
						this.imageName = "hearth1";
					}
				},
				animationFrameTime: 200,
			},
			{
				x: 741,
				y: 785,
				z: -1,
				image: "stairs",
				name: "Stairs",
				crop: {
					y: 60,
					height: 230,
					width: 202,
				},
			},
			{
				x: 300,
				y: 328,
				orderOffsetY: -10,
				image: "table",
				name: "Table",
			},
			{
				x: 180,
				y: 508,
				orderOffsetY: -10,
				image: "table",
				name: "Table",
			},
			{
				x: 600,
				y: 508,
				orderOffsetY: -10,
				image: "table",
				name: "Table",
			},
			{
				x: 780,
				y: 1108,
				orderOffsetY: -10,
				image: "table",
				name: "Table",
			},
			{
				x: 780,
				y: 1288,
				orderOffsetY: -10,
				image: "table",
				name: "Table",
			},
			{
				x: 842,
				y: 324,
				orderOffsetY: -40,
				use: "wizardsLore",
				image: "largeTable",
				name: "Large Table",
			},
		],

		collisions: [
			{
				x: 748, // bottom of stairs
				y: 875,
				width: 180,
				height: 50,
			},
		],

		tripwires: [
			{
				// bottom of stairs (to top)
				x: 635,
				y: 870,
				width: 2,
				height: 25,
				collisionType: "feet",
				onPlayerTouch: function () {
					if (Game.hero.moveTowards === undefined) {
						// walk up stairs
						Game.hero.direction = 4;
						Game.hero.moveTowards = {
							x: 875,
							y: Game.hero.y - 200,
							speedScalar: 0.6,
						};
						Game.hero.updateRotation();
					}
				}
			},
			{
				// top of stairs (to bottom)
				x: 843,
				y: 690,
				width: 2,
				height: 25,
				collisionType: "feet",
				onPlayerTouch: function () {
					if (Game.hero.moveTowards === undefined) {
						// walk up stairs
						Game.hero.direction = 2;
						Game.hero.moveTowards = {
							x: 600,
							y: Game.hero.y + 200,
							speedScalar: 0.6,
						};
						Game.hero.updateRotation();
					}
				}
			},
		],

		infoPoints: [
			{
				x: 844,
				y: 294,
				orderOffsetY: 25.5,
				image: "gameBoard",
				name: "Wizard's Lore",
				onTouchChat: "A game of Wizard's Lore, a board game traditionally played by wizard students and scholars.",
			},
		],

		callAreaJoinOnInit: true,

		onAreaJoin: function () {

			// generate an array of tables
			let array = Game.things.filter(thing => thing.name === "Table");

			// generate an array of possible positions
			let positions = [];
			for (let i = 0; i < array.length; i++) {
				positions.push(
					{x: array[i].x-40, y: array[i].y-20, orderOffsetY: 13},
					{x: array[i].x-1.5, y: array[i].y-20, orderOffsetY: 13},
					{x: array[i].x+37, y: array[i].y-20, orderOffsetY: 13},
				);
			}

			// generate an array of large tables
			array = Game.things.filter(thing => thing.name === "Large Table" && thing.use !== "wizardsLore");

			// add to the array of possible positions
			for (let i = 0; i < array.length; i++) {
				positions.push(
					{x: array[i].x-40, y: array[i].y-20, orderOffsetY: 16},
					{x: array[i].x-1.5, y: array[i].y-20, orderOffsetY: 16},
					{x: array[i].x+37, y: array[i].y-20, orderOffsetY: 16},
					{x: array[i].x-20, y: array[i].y-40, orderOffsetY: 36},
					{x: array[i].x+17, y: array[i].y-40, orderOffsetY: 36},
				);
			}

			// select a random number of mugs and plates to generate between 5 and 15
			let random = Random(5, 15);
			Player.quests.questProgress.mugsPlatesTotal = random;
			Player.quests.questProgress.mugsPlatesDone = 0;

			// spawn the mugs and plates
			for (let i = 0; i < random; i++) {

				// choose a random available position and make it unavailable
				let position = positions.splice(Random(0, positions.length-1), 1)[0];

				// 50% chance of being a mug
				if (Random(0, 1) === 0) {

					// choose a random position on the x axis of the table for the mug to be placed
					let offsetX = Random(-45, 38);

					Game.things.push(new Thing({
						map: map,
						type: "things",
						x: position.x,
						y: position.y - 10,
						orderOffsetY: position.orderOffsetY + 10,
						image: "mug",
						name: "Mug",
					}));
				}

				// 50% chance of being a plate
				else {
					Game.things.push(new Thing({
						map: map,
						type: "things",
						x: position.x,
						y: position.y,
						orderOffsetY: position.orderOffsetY,
						image: "plate",
						name: "Plate",
					}));
				}
			}
		},

		callAreaLeaveOnLogout: true,

		onAreaLeave: function (logout) {
			let chat = "";
			if (Player.quests.activeQuestArray.includes("Cleaning the Floor")) {
				Dom.quest.abandon(Quests.tavern[1]);
				chat = "<strong>Cleaning the Floor</strong> has been abandoned. You can start it again by speaking to an innkeeper.";
			}
			if (Player.quests.activeQuestArray.includes("Tavern Tidy-Up")) {
				Dom.quest.abandon(Quests.tavern[2]);
				chat = "<strong>Tavern Tidy-Up</strong> has been abandoned. You can start it again by speaking to an innkeeper.";
			}
			if (Player.quests.activeQuestArray.includes("Hungry Taverners")) {
				Dom.quest.abandon(Quests.tavern[3]);
				chat = "<strong>Hungry Taverners</strong> has been abandoned. You can start it again by speaking to an innkeeper.";
			}

			if (chat !== "") {
				if (logout) {
					Player.chatOnJoin.push(chat);
				}
				else {
					Dom.chat.insert(chat);
				}
			}
		},

	},

	nilbog: {
		id: 3,

		data: {
			name: "The Nilbog",
			level: "Level 2 - 5",
			territory: "Hostile",
			displayOnEnter: true,
		},

		indoors: false,

		tagGameAllowed: true,

		song_day: "assets/music/Pippin-the-Hunchback.mp3",
		song_night: "assets/music/Pippin-the-Hunchback-night.mp3",

		checkpoint: false,

		lootArea: "loggingCamp",
		lootTier: 1,

		mapData: {
			cols: 40,
			rows: 29,
			tsize: 60,
			tilesPerRow: 8,
			solidTiles: [67, 75, 83, 91, 99, 107, 6, 14, 22, 8, 16, 24, 32, 7, 15, 23, 31, 39, 47, 55, 63, 71, 79, 87, 95, 103, 111],
			waterTiles: [27, 35, 43],
			iceTiles: [27, 35],
			mudTiles: [2, 10, 18, 26, 34, 42, 50, 58, 66, 74, 82, 90, 98, 106],
			pathTiles: [1, 9, 17, 25, 33, 41, 49, 57, 65, 3, 11, 19],
			dayTiles: [24],
			nightTiles: [32],
			layers: [
				[105, 44, 27, 59, 27, 27, 4, 89, 105, 42, 98, 2, 2, 90, 58, 34, 105, 105, 105, 105, 106, 18, 18, 26, 89, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 47, 55, 63, 39, 105, 44, 35, 27, 43, 59, 4, 100, 101, 102, 42, 58, 58, 34, 105, 105, 81, 105, 105, 106, 74, 2, 2, 82, 26, 105, 105, 105, 81, 105, 105, 105, 105, 105, 89, 97, 55, 63, 55, 63, 97, 44, 51, 59, 27, 27, 4, 108, 109, 110, 105, 105, 105, 105, 89, 105, 105, 105, 97, 66, 2, 2, 10, 90, 34, 105, 73, 105, 105, 105, 73, 105, 105, 105, 105, 105, 47, 55, 63, 39, 105, 44, 27, 27, 35, 27, 4, 105, 105, 105, 89, 105, 105, 105, 105, 105, 105, 105, 105, 66, 10, 2, 2, 50, 105, 105, 105, 105, 105, 105, 105, 105, 93, 94, 105, 105, 55, 63, 55, 63, 105, 44, 27, 27, 27, 51, 4, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 42, 98, 2, 10, 50, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 47, 55, 63, 39, 105, 44, 27, 27, 27, 27, 4, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 73, 42, 58, 58, 34, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 55, 63, 55, 63, 105, 44, 35, 51, 43, 27, 4, 105, 105, 105, 106, 18, 26, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 97, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 47, 39, 47, 39, 105, 44, 59, 27, 27, 51, 4, 105, 105, 106, 74, 2, 50, 93, 94, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 39, 22, 39, 47, 105, 44, 27, 27, 27, 43, 4, 105, 106, 74, 2, 2, 82, 18, 26, 105, 105, 105, 105, 97, 89, 105, 105, 105, 105, 105, 105, 93, 94, 105, 105, 73, 105, 100, 101, 102, 47, 22, 47, 39, 105, 44, 27, 27, 27, 27, 4, 105, 42, 58, 98, 2, 2, 90, 34, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 93, 94, 105, 105, 105, 105, 105, 108, 109, 110, 105, 1, 93, 94, 105, 44, 27, 35, 27, 27, 4, 105, 105, 105, 42, 58, 58, 34, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 65, 1, 1, 1, 49, 105, 73, 105, 44, 43, 27, 27, 27, 4, 105, 105, 97, 105, 105, 105, 105, 81, 105, 105, 105, 105, 105, 105, 105, 100, 101, 102, 105, 105, 105, 105, 105, 25, 1, 1, 49, 105, 105, 105, 105, 105, 105, 105, 44, 27, 27, 27, 27, 4, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 73, 108, 109, 110, 105, 105, 105, 105, 105, 105, 105, 105, 105, 73, 105, 105, 106, 26, 105, 105, 11, 3, 3, 3, 3, 19, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 106, 74, 50, 105, 105, 44, 35, 27, 27, 27, 4, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 106, 18, 74, 10, 50, 105, 105, 44, 27, 27, 27, 27, 4, 105, 105, 105, 93, 94, 106, 18, 26, 105, 105, 105, 105, 89, 105, 105, 105, 60, 36, 36, 68, 97, 105, 105, 105, 105, 105, 106, 74, 2, 2, 2, 50, 105, 105, 44, 27, 27, 27, 27, 4, 105, 105, 106, 18, 18, 74, 90, 34, 105, 105, 105, 89, 105, 105, 105, 60, 28, 27, 35, 92, 36, 68, 105, 105, 105, 106, 74, 2, 10, 2, 90, 34, 105, 105, 44, 27, 35, 27, 43, 4, 105, 105, 42, 98, 2, 90, 34, 105, 105, 105, 105, 105, 105, 105, 105, 44, 27, 43, 27, 27, 51, 4, 105, 105, 105, 66, 10, 2, 2, 2, 50, 89, 105, 105, 44, 27, 43, 35, 27, 4, 105, 105, 105, 42, 58, 34, 105, 105, 105, 105, 105, 105, 105, 97, 105, 44, 35, 59, 27, 27, 27, 4, 105, 105, 105, 42, 98, 2, 2, 90, 34, 105, 105, 105, 44, 27, 27, 27, 27, 4, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 84, 20, 27, 43, 35, 12, 76, 105, 105, 97, 105, 42, 58, 58, 34, 105, 105, 106, 105, 44, 27, 27, 27, 27, 4, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 93, 94, 84, 52, 52, 52, 76, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 106, 74, 105, 44, 27, 27, 27, 27, 4, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 73, 105, 66, 10, 105, 44, 27, 51, 27, 27, 4, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 106, 18, 18, 18, 18, 18, 26, 93, 94, 105, 106, 74, 2, 105, 44, 35, 27, 27, 27, 4, 105, 105, 97, 105, 93, 94, 105, 105, 73, 105, 105, 105, 105, 105, 89, 105, 105, 81, 106, 18, 74, 2, 2, 10, 2, 2, 82, 18, 18, 18, 74, 2, 2, 105, 44, 27, 27, 27, 27, 4, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 97, 105, 105, 105, 106, 74, 10, 10, 2, 2, 2, 2, 2, 2, 2, 10, 2, 2, 10, 2, 105, 44, 27, 43, 27, 43, 4, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 89, 106, 74, 2, 2, 2, 2, 2, 2, 2, 2, 10, 2, 2, 2, 2, 2, 2, 105, 44, 27, 27, 27, 35, 4, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 106, 18, 74, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 105, 44, 27, 27, 27, 27, 4, 105, 81, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 106, 18, 74, 2, 2, 2, 2, 2, 2, 10, 2, 2, 2, 2, 2, 2, 2, 2, 10, 10, 2, 105, 44, 27, 27, 27, 27, 4, 105, 105, 105, 105, 105, 105, 105, 105, 106, 18, 18, 18, 74, 2, 2, 10, 2, 2, 2, 2, 2, 2, 2, 2, 2, 10, 2, 2, 2, 2, 10, 10, 10],
				[],
			],
			// replaces a tile or group of tiles - these tiles should all be distinct (e.g. 6 different tiles make up a rock)

			// tileData is an array of objects, with each object containing the following:
			// tileNum: integer specifying the tile that should be replaced
			// replaceTo: integer specifying the tile that it should be replaced to (same is tileNum if not replaced)
			// relativePosition: object containing x and y, where the top left tile being replaced is x:0, y:0, and one unit of x/y is one row/col

			// location is an object containing x and y properties of the location that it should be checked to see if tiles can be replaced

			// either returns false if no tiles were replaced, or a function that can be called to replace the tiles

			interactWithTile: function(tileNum, x, y) { // pick up logs
				// try to pick up a log
				let replaceTiles = map.setTilesAtLocation([
					{tileNum: 93, replaceTo: 105, relativePosition: {x: 0, y: 0}},
					{tileNum: 94, replaceTo: 105, relativePosition: {x: 1, y: 0}},
				], {x:x, y:y});
				if (replaceTiles !== false) {
					// touching a log
					Game.hero.channel(function () {
						// give log item to player
						if (Dom.inventory.give(Items.item[2], 1) !== false) { // check if player has enough inventory space
							// remove log from tilemap
							replaceTiles();
						}
					}, [], 1000, "Retrieving Logs");
				}

				// TBD - change parameters to an object with x and y (please remind Jake)
				// TBD - update snowball to use new system (same as above)

				// pick up snowball from rock
				else if (tileNum === 29 && Event.event === "Christmas") { // rock top centre
					// channel for 1 second
					Game.hero.channel(function () {
						// give snowball to player
						if (Dom.inventory.give(Items.bow[8], 1) !== false) { // check if player has enough inventory space
							Player.quests.questProgress.snowCollected = Increment(Player.quests.questProgress.snowCollected);
							Dom.checkProgress();
							// replace tiles with no snow rocks
							map.setTile(0, map.getCol(x), map.getRow(y), 59);
							map.setTile(0, map.getCol(x + 60), map.getRow(y), 60);
							map.setTile(0, map.getCol(x), map.getRow(y + 60), 69);
							// add snow back after 5 minutes
							Game.setTimeout(function(x, y) {
								SetTile("nilbog", 0, map.getCol(x), map.getRow(y), 29);
								SetTile("nilbog", 0, map.getCol(x + 60), map.getRow(y), 30);
								SetTile("nilbog", 0, map.getCol(x), map.getRow(y + 60), 39);
							}, 60000, [x, y]);
						}
					}, [], 1000, "Making a Snowball");
				}
				else if (tileNum === 39 && Event.event === "Christmas") { // rock bottom centre
					// channel for 1 second
					Game.hero.channel(function () {
					// give snowball to player
						if (Dom.inventory.give(Items.bow[8], 1) !== false) { // check if player has enough inventory space
							Player.quests.questProgress.snowCollected = Increment(Player.quests.questProgress.snowCollected);
							Dom.checkProgress();
							// replace tiles with no snow rocks
							map.setTile(0, map.getCol(x), map.getRow(y - 60), 59);
							map.setTile(0, map.getCol(x + 60), map.getRow(y - 60), 60);
							map.setTile(0, map.getCol(x), map.getRow(y), 69);
							// add snow back after 5 minutes
							Game.setTimeout(function(x, y) {
								SetTile("nilbog", 0, map.getCol(x), map.getRow(y), 29);
								SetTile("nilbog", 0, map.getCol(x + 60), map.getRow(y), 30);
								SetTile("nilbog", 0, map.getCol(x), map.getRow(y + 60), 39);
							}, 60000, [x, y]);
						}
					}, [], 1000, "Making a Snowball");
				}
			},
		},

		isIcy: function() {
			return Event.event === "Christmas";
		},

		images: {
			tiles: {normal: "assets/tilemap/loggingCamp.png", christmas: "assets/tilemap/loggingCamp-christmas.png"},
			goblinRockthrower: {normal: "assets/enemies/goblinRockthrower.png"},
			rock: {normal: "assets/projectiles/rock.png"},
			goblinSkirmisher: {normal: "assets/enemies/goblinSkirmisher.png"},
			goblinBruiser: {normal: "assets/enemies/goblinBruiser.png"},
			melee: {normal: "assets/projectiles/melee.png"},
			fireGoblin: {normal: "assets/enemies/goblinPyromancer.png"},
			fireball: {normal: "assets/projectiles/fireball.png"}, // (ignored by loader if it is already loaded because of a mage player)
			goblinCorpse: {normal: "assets/corpses/deadGoblin.png"},
			mailcart: {normal: "assets/objects/cartDestroyed.png"},
			trap: {normal: "assets/objects/trap.png"},
			torchDay1: {normal: "assets/objects/torchDay1.png"},
			torchDay2: {normal: "assets/objects/torchDay2.png"},
			torchDay3: {normal: "assets/objects/torchDay3.png"},
			torchNight1: {normal: "assets/objects/torchNight1.png"},
			torchNight2: {normal: "assets/objects/torchNight2.png"},
			torchNight3: {normal: "assets/objects/torchNight3.png"},
			lootChest: {normal: "assets/objects/chest.png"},
			eaglecrestBanner: {normal: "assets/objects/eaglecrestBanner.png"},
			nilbogBanner: {normal: "assets/objects/nilbogBanner.png"},
			campfire1: {normal: "assets/objects/campfire1.png"},
			campfire2: {normal: "assets/objects/campfire2.png"},
			campfire3: {normal: "assets/objects/campfire3.png"},
			torianTintop: {normal: "assets/npcs/torianTintop.png"},
			nessyTintop: {normal: "assets/npcs/nessyTintop.png"},
			marshallSheridanStatue: {normal: "assets/objects/woodcutterStatue.png"},
			// samhain
			marshallSheridan: {samhain: "assets/enemies/marshallSheridan.png"},
			marshallSheridanCorpse: {samhain: "assets/corpses/marshallSheridan.png"},
			sawblade: {samhain: "assets/projectiles/sawblade.png"},
			slashBlood: {samhain: "assets/projectiles/slashBlood.png"},
			/*barebonesNkkja: {samhain: "assets/enemies/barebonesNkkja.png"},
			barebonesNkkjaCorpse: {samhain: "assets/corpses/barebonesNkkja.png"},
			fireballGreen: {samhain: "assets/projectiles/fireballGreen.png"},
			mudAnimation: {samhain: "assets/enemies/mudAnimation.png"},
			cauldron: {samhain: "assets/objects/cauldronSamhain.png"},*/ // these will be moved to forest
		},

		chestData: {
			spawnLocations: [
				{x: 1160, y: 32,},
				{x: 993, y: 1592,},
				{x: 2099, y: 671,},
				{x: 1710, y: 146,},
				{x: 2246, y: 1291,},
			],
			spawnAmount: 1,
			respawnTime: 1, // days
			tier: 1,
			lootTableTemplate: [ChestLootTables.nilbog],
			inventorySpace: 16,
		},

		callAreaJoinOnInit: true,

		onAreaJoin: function () {
			// tutorial
			if (Player.tutorialProgress === 11) {
				Game.setTimeout(Dom.instructions.page, 1000, 12);
			}

			if (Event.time === "bloodMoon") {
				let date = GetFullDate(); // yyyymmdd format

				if ((new Date()).getHours() < 12) {
					// previous day's blood moon
					date -= 1;
				}

				if (Player.bossesKilled.marshallSheridan !== date) {
					// samhain boss (blood moon, and  has not been killed today)

					let bossNotSeen = Player.quests.questProgress.samhainBossIntroducedNilbog !== date; // whether boss has been introduced today or not

					if (bossNotSeen) {
						// boss has not been introduced today

						// reset all boss variables
						Player.quests.questProgress.samhainBossNilbogHealth = undefined;
						Player.quests.questProgress.sheridanMaxHealth = undefined;
						/* MOVE TO FOREST
						Player.quests.questProgress.nkkjaWindCauldronDestroyed = false;
						Player.quests.questProgress.nkkjaLightningCauldronDestroyed = false;
						Player.quests.questProgress.nkkjaEarthCauldronDestroyed = false;
						*/

						// make sure this isn't called again
						Player.quests.questProgress.samhainBossIntroducedNilbog = date;
					}

					let boss; // pointer to variable boss is set to (used as shorthand)

					// add the boss' stuff and pan to them
					// statue of marshall sheridan
					Game.enemies.push(new Enemy(Game.prepareNPC({
						x: 1817,
						y: 1310,
						template: EnemyTemplates.nilbog.marshallSheridan,
					}, "enemies")));
					boss = Game.enemies[Game.enemies.length-1];

					// save boss progress
					if (Player.quests.questProgress.sheridanMaxHealth !== undefined) {
						boss.stats.maxHealth = Player.quests.questProgress.sheridanMaxHealth;
					}

					// pan to boss
					if (bossNotSeen) {
						Game.camera.pan(boss, 400, "accelerate", function () {
							// function to be called 2s after pan is finished
							// pan back to player
							Game.camera.pan(Game.hero, 400, "accelerate", function () {
								// reset camera
								Game.camera.follow(Game.hero);
							}, 0);
						}, 2000);
					}

						// TO BE MOVED TO FOREST
						/*case 1:
							// barebones nkkja
							Game.enemies.push(new Enemy(Game.prepareNPC({
								x: 1717,
								y: 703,
								template: EnemyTemplates.nilbog.barebonesNkkja,
							}, "enemies")));
							boss = Game.enemies[Game.enemies.length-1];

							// cauldrons
							if (!Player.quests.questProgress.nkkjaWindCauldronDestroyed) {
								Game.characters.push(new Character(Game.prepareNPC({
									template: EnemyTemplates.nilbog.nkkjaCauldron,
									x: 1554,
									y: 226,
									name: "Nkkja's Cauldron of Wind",
									onDeath: function () {
										// stop any existing wind effect
										Game.wind = undefined;
										// progress saving - save that cauldron has been destroyed
										Player.quests.questProgress.nkkjaWindCauldronDestroyed = true;
										Dom.chat.insert(Dom.chat.say("'Barebones' Nkkja", "Have you any idea how long this took to make? Get here and face me!"));
									}
								}, "characters")));
							}
							if (!Player.quests.questProgress.nkkjaLightningCauldronDestroyed) {
								Game.characters.push(new Character(Game.prepareNPC({
									template: EnemyTemplates.nilbog.nkkjaCauldron,
									x: 540,
									y: 1300,
									name: "Nkkja's Cauldron of Lightning",
									onDeath: function () {
										// progress saving - save that cauldron has been destroyed
										Player.quests.questProgress.nkkjaLightningCauldronDestroyed = true;
										Dom.chat.insert(Dom.chat.say("'Barebones' Nkkja", "No! You will pay for this, with your blood!"));
									}
								}, "characters")));
							}
							if (!Player.quests.questProgress.nkkjaEarthCauldronDestroyed) {
								Game.characters.push(new Character(Game.prepareNPC({
									template: EnemyTemplates.nilbog.nkkjaCauldron,
									x: 2122,
									y: 1280,
									name: "Nkkja's Cauldron of Earth",
									onDeath: function () {
										// remove all of the existing bog elementals
										for (let i = 0; i < Game.enemies.length; i++) {
											if (Game.enemies[i].name === "Bog Animation") {
												Game.removeObject(Game.enemies[i].id, "enemies", i)
												i--;
											}
										}
										// progress saving - save that cauldron has been destroyed
										Player.quests.questProgress.nkkjaEarthCauldronDestroyed = true;
										Dom.chat.insert(Dom.chat.say("'Barebones' Nkkja", "My bog creatures now hate you as much as I do!"));
									}
								}, "characters")));
							}

							if (bossNotSeen) {
								// stop boss from moving until introduction is complete
								Game.statusEffects.stun({target: boss, time: 5, hidden: true})

								// pan to boss and cauldrons
								Game.camera.pan(boss, 600, "accelerate", function () {
									// function to be called 2s after pan is finished
									// pan to wind cauldron
									Game.camera.pan({x: 1554, y: 226}, 800, "accelerate", function () {
										// pan to earth cauldron
										Game.camera.pan({x: 2122, y: 1280}, 800, "accelerate", function () {
											// pan to lightning cauldron
											Game.camera.pan({x: 540, y: 1300}, 800, "accelerate", function () {
												// pan back to player
												Game.camera.pan(Game.hero, 800, "accelerate", function () {
													// reset camera
													Game.camera.follow(Game.hero);
												}, 0);
											}, 1000);
										}, 1000);
									}, 1000);
								}, 2000);
							}

							break;*/

					// boss health progress saving (since bosses cannot regen in a blood moon)
					if (Player.quests.questProgress.samhainBossNilbogHealth !== undefined) {
						boss.health = Player.quests.questProgress.samhainBossNilbogHealth;
					}
				}
			}
		},

		callAreaLeaveOnLogout: true,

		onAreaLeave: function (logout) {
			if (Event.time === "bloodMoon") {
				// save samhain boss health
				let boss = Game.enemies.find(enemy => enemy.hostility === "boss");
				Player.quests.questProgress.samhainBossNilbogHealth = boss.health;
			}
		},

		areaTeleports: [
			{
				// teleport to logging camp (bridge - west)
				x: 0,
				y: 1050,
				width: 520,
				height: 1380,
				teleportTo: "eaglecrestLoggingCamp",
				destinationX: 2270,
				playerAdjustY: -360,
			},
			{
				// teleport to nilbog tower (tower - north east)
				x: 2250,
				y: 445,
				width: 60,
				height: 2,
				teleportTo: "nilbogTower1",
				destinationX: 65,
				destinationY: 534,
				teleportCondition: function () {
					return Player.quests.activeQuestArray.includes("The Goblin King") || Player.quests.completedQuestArray.includes("The Goblin King");
				},
				teleportFailText: "<strong>The Nilbog Tower</strong> is a dangerous area. Wait until you're a bit stronger.",
			},
		],

		npcs: [
			{
				x: 1047,
				y: 120,
				image: "torchNight1",
				name: "Goblin Torch",
				hostility: "friendly",
				level: 5,
				stats: {
					maxHealth: 75,
					defence: 5,
					healthRegen: 0.1,
				},
				// animation!
				animateFunction: function () {
					if (this.imageName === "torchNight1") {
						this.image = Loader.getImage("torchNight2");
						this.imageName = "torchNight2";
					}
					else if (this.imageName === "torchNight2") {
						this.image = Loader.getImage("torchNight3");
						this.imageName = "torchNight3";
					}
					else if (this.imageName === "torchNight3") {
						this.image = Loader.getImage("torchNight1");
						this.imageName = "torchNight1";
					}
				},
				animationFrameTime: 200,
				roles: [
					{
						quest: Quests.eaglecrestLoggingCamp[11],
						role: "questStart",
					},
					{
						quest: Quests.eaglecrestLoggingCamp[21],
						role: "questStartFinish",
					},
					{
						quest: Quests.eaglecrestLoggingCamp[24],
						role: "questStart",
					},
					{
						role: "function",
						onClick: function () {
							Dom.chat.insert(Dom.chat.say("Goblin Torch", "Oh. Cloth is flammable. Must be improved. Make it fire resistant. Potion gives fire resistant. Potion might help?"));
							Player.quests.npcProgress.eaglecrestLoggingCamp[24] = 2;
							Dom.inventory.removeById(3, "item");
							Dom.inventory.give(Items.item[29]); // burnt cloth
							Game.statusEffects.fire({
								target: Game.hero,
								tier: 1,
							});
							Dom.currentlyDisplayed = "";
							Dom.currentNPC = {};
						},
						roleRequirement: function () {
							return Player.quests.activeQuestArray.includes("A Burning Need to be Cleaned") && Dom.inventory.check(3, "item", 1) && Player.quests.npcProgress.eaglecrestLoggingCamp[24] === 1;
						}
					},
					{
						role: "function", // must manually set back currentlyDisplayed and currentNPC
						onClick: function () {
							Dom.chat.insertSequence([
								Dom.chat.say("Goblin Torch", "Have not been. Cleaned before."),
								Dom.chat.say("Goblin Torch", "Keep going. Feels good."),
							], [2000, 2000], undefined, undefined);
							Game.hero.channel(function () {
								Player.quests.npcProgress.eaglecrestLoggingCamp[24] = 5;
								Dom.currentlyDisplayed = "";
								Dom.currentNPC = {}; // these must be done here as well as the timeout, since checkProgress requires it.
								Dom.checkProgress();
							}, [], 6000, "Cleaning Goblin Torch");
							// even if channelling is cancelled, this should be set back
							Game.hero.channelCancelFunction = function () {
								Dom.currentlyDisplayed = "";
								Dom.currentNPC = {};
							};
						},
						roleRequirement: function () {
							return Player.quests.npcProgress.eaglecrestLoggingCamp[24] === 4 && Dom.inventory.check(27, "item", 1);
						}
					},
				],
				chat: {
					notUnlockedRoles: "Very. Bored.",
					questProgress: "Keep going. Please.",
					questComplete: "I hope we shall meet again. Soon.",
					inventoryFull: "You cannot hold that.",
				},
				canBeShown: function () {
					return !Player.quests.activeQuestArray.includes("Partners in Goblin Destruction");
				},
			},

			{
				template: NPCTemplates.nessyTintop,
				x: 1900,
				y: 150,
				canBeShown: function () {
					return Player.quests.activeQuestArray.includes("A Tale of Two Twintops") &&
					Player.quests.timesCompleted.eaglecrestLoggingCamp[25] === 3;
				}
			},
		],

		chests: [
			{
				x: 1980,
				y: 905,
				image: "mailcart",
				name: "Mail Cart",
				loot: [{item: Items.item[6]}],
				lootQuantities: [1],
				inventorySpace: 8,
				disappearAfterOpened: false,
				canBeShown: function () {
					return (Player.quests.activeQuestArray.includes("First Class Recovery") || Player.quests.completedQuestArray.includes("First Class Recovery"));
				},
				canBeLooted: function () {
					return (Player.quests.activeQuestArray.includes("First Class Recovery") && !Dom.inventory.check(6, "item", 1));
				},
			},
		],

		enemies: [
			{
				x: 534, // south west (near logging camp)
				y: 1067,
				template: EnemyTemplates.nilbog.goblinRockthrower,
			},
			{
				x: 1211, // centre
				y: 960,
				template: EnemyTemplates.nilbog.goblinRockthrower,
			},
			{
				x: 1522, // centre
				y: 733,
				template: EnemyTemplates.nilbog.goblinSkirmisher,
			},
			{
				x: 716, // goblin camp south-west
				y: 1623,
				template: EnemyTemplates.nilbog.fireGoblin,
			},
			{
				x: 984, // south west (near logging camp)
				y: 1401,
				template: EnemyTemplates.nilbog.goblinSkirmisher,
			},
			{
				x: 1910, // goblin camp north-east
				y: 400,
				template: EnemyTemplates.nilbog.goblinRockthrower,
			},
			{
				x: 1610, // goblin camp north-east
				y: 300,
				template: EnemyTemplates.nilbog.goblinSkirmisher,
			},
			{
				x: 1840, // goblin camp north-east
				y: 250,
				template: EnemyTemplates.nilbog.goblinBruiser,
			},
			{
				x: 1950, // goblin camp north-east
				y: 100,
				template: EnemyTemplates.nilbog.fireGoblin,
			},
			{
				x: 2350, // outside tower
				y: 640,
				template: EnemyTemplates.nilbog.goblinBruiser,
			},
			{
				x: 1770, // next to mail cart (only present when that quest is active)
				y: 915,
				template: EnemyTemplates.nilbog.goblinBruiser,
				canBeShown: function () { // only show after mail cart quest has been started
					return (Player.quests.activeQuestArray.includes("First Class Recovery") || Player.quests.completedQuestArray.includes("First Class Recovery"));
				},
			},
			{
				x: 2010, // south east
				y: 1239,
				template: EnemyTemplates.nilbog.goblinSkirmisher,
			},
			{
				x: 2115, // south east
				y: 1260,
				template: EnemyTemplates.nilbog.goblinRockthrower,
			},
			{
				x: 536, // north west
				y: 143,
				template: EnemyTemplates.nilbog.goblinSkirmisher,
			},
			{
				x: 1037, // north west
				y: 340,
				template: EnemyTemplates.nilbog.goblinBruiser,
			},
		],

		things: [
			{
				x: 1740,
				y: 310,
				image: "campfire1",
				name: "Campfire",
				// animation!
				animateFunction: function () {
					if (this.imageName === "campfire1") {
						this.image = Loader.getImage("campfire2");
						this.imageName = "campfire2";
					}
					else if (this.imageName === "campfire2") {
						this.image = Loader.getImage("campfire3");
						this.imageName = "campfire3";
					}
					else if (this.imageName === "campfire3") {
						this.image = Loader.getImage("campfire1");
						this.imageName = "campfire1";
					}
				},
				animationFrameTime: 200,
			},
			{
				x: 840,
				y: 1570,
				image: "campfire1",
				name: "Campfire",
				// animation!
				animateFunction: function () {
					if (this.imageName === "campfire1") {
						this.image = Loader.getImage("campfire2");
						this.imageName = "campfire2";
					}
					else if (this.imageName === "campfire2") {
						this.image = Loader.getImage("campfire3");
						this.imageName = "campfire3";
					}
					else if (this.imageName === "campfire3") {
						this.image = Loader.getImage("campfire1");
						this.imageName = "campfire1";
					}
				},
				animationFrameTime: 200,
			},
			{
				x: 270,
				y: 580,
				image: "nilbogBanner",
				name: "Nilbog Banner",
			},
			{
				x: 270,
				y: 980,
				image: "nilbogBanner",
				name: "Nilbog Banner",
			},
			{
				x: 270,
				y: 1540,
				image: "nilbogBanner",
				name: "Nilbog Banner",
			},
			{
				x: 30,
				y: 630,
				image: "eaglecrestBanner",
				name: "Eaglecrest Banner",
			},
			{
				x: [570, 1050, 810, 1530, 1650, 1890, 1950],
				y: [1650, 1530, 1350, 330, 95, 150, 450],
				imageDay: "torchDay1",
				imageNight: "torchNight1",
				name: "Goblin Torch",
				animateFunction: function () {
					if (this.imageName === "torchDay1") {
						this.image = Loader.getImage("torchDay2");
						this.imageName = "torchDay2";
					}
					else if (this.imageName === "torchDay2") {
						this.image = Loader.getImage("torchDay3");
						this.imageName = "torchDay3";
					}
					else if (this.imageName === "torchDay3") {
						this.image = Loader.getImage("torchDay1");
						this.imageName = "torchDay1";
					}
					else if (this.imageName === "torchNight1") {
						this.image = Loader.getImage("torchNight2");
						this.imageName = "torchNight2";
					}
					else if (this.imageName === "torchNight2") {
						this.image = Loader.getImage("torchNight3");
						this.imageName = "torchNight3";
					}
					else if (this.imageName === "torchNight3") {
						this.image = Loader.getImage("torchNight1");
						this.imageName = "torchNight1";
					}
				},
				animationFrameTime: 200,
			},
		],

		infoPoints: [
			{
				x: 1817,
				y: 1310,
				image: "marshallSheridanStatue",
				name: "Statue of Marshall Sheridan",
				onTouchChat: "A statue of Marshall Sheridan, the quest master of the Logging Camp before Antorax was formed.",
				canBeShown: function () {
					return Event.event !== "Samhain";
				}
			},
		],

	},

	nilbogPast: {
		id: 4,

		data: {
			name: "The Nilbog",
			subtitle: (250+Event.antoraxAge) + " years ago...",
			territory: "Hostile",
			displayOnEnter: true,
		},

		// timey wimey stuff
		timeTravel: true, // cloudy border
		weather: "clear",
		time: "day",

		tagGameAllowed: false,

		song_day: "assets/music/Pippin-the-Hunchback-boss.mp3",

		checkpoint: false,

		lootArea: "loggingCamp",
		lootTier: 1,

		mapData: {
			cols: 15,
			rows: 15,
			tsize: 60,
			tilesPerRow: 8,
			solidTiles: [67, 75, 83, 91, 99, 107, 6, 14, 22, 8, 16, 24, 32, 7, 15, 23, 31, 39, 47, 55, 63, 71, 79, 87, 95, 103, 111],
			waterTiles: [27, 35, 43],
			iceTiles: [27, 35],
			mudTiles: [2, 10, 18, 26, 34, 42, 50, 58, 66, 74, 82, 90, 98, 106],
			pathTiles: [1, 9, 17, 25, 33, 41, 49, 57, 65, 3, 11, 19],
			dayTiles: [24],
			nightTiles: [32],
			layers: [
				[43, 27, 27, 92, 68, 105, 105, 105, 105, 105, 105, 79, 87, 95, 71, 27, 51, 35, 27, 4, 105, 105, 105, 105, 105, 105, 87, 95, 87, 95, 27, 27, 27, 27, 4, 105, 105, 105, 105, 105, 105, 79, 87, 95, 71, 59, 27, 43, 12, 76, 105, 105, 105, 105, 105, 105, 87, 95, 87, 95, 27, 27, 12, 76, 105, 105, 105, 105, 105, 105, 105, 79, 87, 95, 71, 52, 52, 76, 105, 97, 105, 105, 105, 105, 105, 105, 87, 95, 87, 95, 100, 101, 102, 105, 105, 105, 105, 105, 105, 105, 105, 79, 71, 79, 71, 108, 109, 110, 105, 105, 105, 105, 105, 105, 105, 81, 71, 103, 71, 79, 105, 105, 105, 105, 105, 105, 105, 105, 100, 101, 102, 79, 111, 79, 71, 105, 105, 105, 105, 105, 105, 105, 105, 108, 109, 110, 105, 1, 105, 73, 105, 105, 105, 105, 105, 105, 81, 105, 65, 1, 1, 1, 49, 105, 105, 105, 105, 105, 105, 105, 105, 25, 1, 49, 73, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 106, 26, 73, 105, 105, 100, 101, 102, 105, 97, 105, 105, 105, 105, 106, 74, 50, 105, 105, 105, 108, 109, 110, 105, 105, 105, 105, 106, 18, 74, 10, 50, 105],
				[],
			],
		},

		images: {
			tiles: {normal: "assets/tilemap/loggingCamp.png"},
			tatteredKnight: {normal: "assets/enemies/tatteredKnight.png"},
			tatteredKnightCorpse: {normal: "assets/corpses/tatteredKnight.png"},
			slash: {normal: "assets/projectiles/slash.png"}, // (ignored by loader if it is already loaded because of a knight player)
			mailbox: {normal: "assets/objects/mailbox.png"},
			mailboxUnread: {normal: "assets/objects/mailboxUnread.png"},
		},

		mailboxes: [
			{
				x: 460,
				y: 600,
				readImage: "mailbox",
				unreadImage: "mailboxUnread",
				name: "Mailbox",
			},
		],

		enemies: [
			{
				x: 300,
				y: 300,
				template: EnemyTemplates.nilbog.tatteredKnight,
			},
		],

		onDeath: function () {
			// abandon "The Legend of the Tattered Knight" quest (it can be started again from the mail)
			Dom.quest.abandon(Quests.eaglecrestLoggingCamp[22]);

			// chat message to let them know
			Dom.chat.insert("Your quest was abandoned. Re-open the mail message to have another attempt."); // important param = true
		},
	},

	nilbogTower1: {
		id: 5,

		data: {
			name: "Nilbog Tower Entranceway",
			level: "Level 3 - 5",
			territory: "Hostile",
			displayOnEnter: true,
		},

		indoors: true,

		tagGameAllowed: ["nilbogTower1", "nilbogTower2", "nilbogTower3", "nilbogTower4", "nilbogTower5"],

		song_day: "assets/music/Pippin-the-Hunchback.mp3",

		checkpoint: false,

		lootArea: "loggingCamp",
		lootTier: 1,

		mapData: {
			cols: 10,
			rows: 10,
			tsize: 60,
			tilesPerRow: 8,
			solidTiles: [67, 75, 83, 91, 99, 107, 6, 14, 22, 8, 16, 24, 32, 7, 15, 23, 31, 39, 47, 55, 63, 71, 79, 87, 95, 103, 111],
			waterTiles: [27, 35, 43],
			iceTiles: [27, 35],
			mudTiles: [2, 10, 18, 26, 34, 42, 50, 58, 66, 74, 82, 90, 98, 106],
			pathTiles: [1, 9, 17, 25, 33, 41, 49, 57, 65, 3, 11, 19],
			dayTiles: [24],
			nightTiles: [32],
			layers: [
				[47, 55, 63, 39, 47, 55, 63, 39, 47, 39, 55, 63, 55, 63, 55, 63, 55, 63, 39, 47, 47, 39, 47, 39, 47, 39, 47, 39, 47, 39, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 86, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 86, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 86, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 86],
				[],
			],
		},

		images: {
			tiles: {normal: "assets/tilemap/loggingCamp.png"},
			stairs: {normal: "assets/objects/stairsRight.png"},
			painting: {normal: "assets/objects/paintingAndrews.png"},
			goblinTowerkeeper: {normal: "assets/enemies/goblinTowerkeeper.png"},
			goblinCorpse: {normal: "assets/corpses/deadGoblin.png"},
			melee: {normal: "assets/projectiles/melee.png"},
			trap: {normal: "assets/objects/trap.png"},
		},

		areaTeleports: [
			{
				// teleport to nilbog (bottom of tower)
				x: 120,
				y: 649,
				width: 240,
				height: 2,
				teleportTo: "nilbog",
				destinationX: 2250,
				destinationY: 515,
			},
			{
				// teleport to floor 2
				x: 540,
				y: 30,
				width: 2,
				height: 60,
				teleportTo: "nilbogTower2",
				destinationX: 90,
				destinationY: 560,
			},
		],

		onAreaJoin: function () {
			// stair animations
			if (Game.hero.y < 100) {
				// move down stairs
				Game.hero.direction = 2;
				Game.hero.moveTowards = {
					x: 290,
					y: 175,
					speedScalar: 0.6,
				};
				Game.hero.updateRotation();
			}
		},

		things: [
			{
				x: 468,
				y: 97,
				z: -1,
				image: "stairs",
				name: "Stairs",
			},
		],

		infoPoints: [
			{
				x: 546,
				y: 157,
				image: "painting",
				name: "Painting",
				onTouchChat: "A painting of Wizard Andrews, one of the most accomplished wizards that has ever been known. This tower used to be his, but was overrun by goblins after he left to pursue his life of wizardry."
			},
		],

		collisions: [
			{
				x: 476, // bottom of stairs
				y: 215,
				width: 248,
				height: 50,
			},
		],

		tripwires: [
			{
				// going to top of stairs
				x: 337,
				y: 200,
				width: 2,
				height: 40,
				collisionType: "feet",
				onPlayerTouch: function () {
					if (Game.hero.moveTowards === undefined) {
						// walk up stairs
						Game.hero.direction = 4;
						Game.hero.moveTowards = {
							x: 600,
							y: Game.hero.y - 240,
							speedScalar: 0.6,
						};
						Game.hero.updateRotation();
					}
				}
			}
		],

		enemies: [
			{
				x: 150,
				y: 260,
				template: EnemyTemplates.nilbog.goblinTowerkeeper,
			},
			{
				x: 450,
				y: 260,
				template: EnemyTemplates.nilbog.goblinTowerkeeper,
			},
		],
	},

	nilbogTower2: {
		id: 6,

		data: {
			name: "Nilbog Tower Chamber",
			level: "Level 3 - 5",
			territory: "Hostile",
			displayOnEnter: false,
		},

		indoors: true,

		tagGameAllowed: ["nilbogTower1", "nilbogTower2", "nilbogTower3", "nilbogTower4", "nilbogTower5"],

		song_day: "assets/music/Pippin-the-Hunchback.mp3",

		checkpoint: false,

		lootArea: "loggingCamp",
		lootTier: 1,

		mapData: {
			cols: 10,
			rows: 10,
			tsize: 60,
			tilesPerRow: 8,
			solidTiles: [67, 75, 83, 91, 99, 107, 6, 14, 22, 8, 16, 24, 32, 7, 15, 23, 31, 39, 47, 55, 63, 71, 79, 87, 95, 103, 111],
			waterTiles: [27, 35, 43],
			iceTiles: [27, 35],
			mudTiles: [2, 10, 18, 26, 34, 42, 50, 58, 66, 74, 82, 90, 98, 106],
			pathTiles: [1, 9, 17, 25, 33, 41, 49, 57, 65, 3, 11, 19],
			dayTiles: [24],
			nightTiles: [32],
			layers: [
				[47, 55, 63, 39, 47, 55, 63, 39, 47, 39, 55, 63, 55, 63, 55, 63, 55, 63, 39, 47, 47, 39, 47, 39, 47, 39, 47, 39, 47, 39, 86, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 86, 78, 78, 78, 78, 86, 78, 86, 78, 78, 78, 78, 86, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 86, 78, 78, 78, 78, 78, 86, 78, 78, 78, 78, 78, 86, 78, 78, 78, 78, 78, 6, 14, 78, 78, 78, 78, 78, 86, 78],
				[],
			],
		},

		images: {
			tiles: {normal: "assets/tilemap/loggingCamp.png"},
			stairs: {normal: "assets/objects/stairsRight.png"},
			painting: {normal: "assets/objects/paintingScorchedAzuras.png"},
			goblinTowerkeeper: {normal: "assets/enemies/goblinTowerkeeper.png"},
			goblinCrusader: {normal: "assets/enemies/goblinCrusader.png"},
			goblinCorpse: {normal: "assets/corpses/deadGoblin.png"},
			melee: {normal: "assets/projectiles/melee.png"},
			lootChest: {normal: "assets/objects/chestTower.png"},
			trap: {normal: "assets/objects/trap.png"},
		},

		chestData: {
			spawnLocations: [
				{x: 450, y: 475,},
			],
			spawnAmount: 1,
			respawnTime: 2, // days
			tier: 1,
			lootTableTemplate: [ChestLootTables.nilbog, ChestLootTables.nilbogTower],
			inventorySpace: 16,
			chestKey: Items.item[18],
		},

		areaTeleports: [
			{
				// teleport to floor 1
				x: 172,
				y: 595,
				width: 10,
				height: 10,
				teleportTo: "nilbogTower1",
				destinationX: 500,
				destinationY: 10,
			},
			{
				// teleport to floor 3
				x: 540,
				y: 30,
				width: 2,
				height: 60,
				teleportTo: "nilbogTower3",
				destinationX: 90,
				destinationY: 560,
			},
		],

		onAreaJoin: function () {
			// stair animations
			if (Game.hero.y > 540) {
				// move up stairs
				Game.hero.direction = 2;
				Game.hero.moveTowards = {
					x: 15,
					y: 520,
					speedScalar: 0.6,
				};
				Game.hero.updateRotation();
			}
			else if (Game.hero.y < 100) {
				// move down stairs
				Game.hero.direction = 2;
				Game.hero.moveTowards = {
					x: 290,
					y: 175,
					speedScalar: 0.6,
				};
				Game.hero.updateRotation();
			}
		},

		things: [
			{
				x: 468,
				y: 97,
				z: -1,
				image: "stairs",
				name: "Stairs",
			},
		],

		infoPoints: [
			{
				x: 546,
				y: 157,
				image: "painting",
				name: "Painting",
				onTouchChat: "A painting of Scorched Azuras, the scarred lands that were once an incredible forest. The trees were burnt down and the ground scored by a group of fire orcs, whom Andrews could not stop as a young wizard. To this day he still regrets he was unable to do something to stop them."
			},
		],

		collisions: [
			{
				x: 476, // bottom of stairs
				y: 215,
				width: 248,
				height: 50,
			},
		],

		tripwires: [
			{
				// going to bottom
				x: 59,
				y: 580,
				width: 2,
				height: 40,
				collisionType: "feet",
				onPlayerTouch: function () {
					if (Game.hero.moveTowards === undefined) {
						// walk down stairs
						Game.hero.direction = 4;
						Game.hero.moveTowards = {
							x: 150,
							y: 550,
							speedScalar: 0.6,
						};
						Game.hero.updateRotation();
					}
				}
			},
			{
				// going to top of stairs
				x: 337,
				y: 200,
				width: 2,
				height: 40,
				collisionType: "feet",
				onPlayerTouch: function () {
					if (Game.hero.moveTowards === undefined) {
						// walk up stairs
						Game.hero.direction = 4;
						Game.hero.moveTowards = {
							x: 600,
							y: Game.hero.y - 240,
							speedScalar: 0.6,
						};
						Game.hero.updateRotation();
					}
				}
			},
		],

		enemies: [
			{
				x: 200,
				y: 320,
				template: EnemyTemplates.nilbog.goblinCrusader,
			},
			{
				x: 500,
				y: 500,
				template: EnemyTemplates.nilbog.goblinTowerkeeper,
			},
		],
	},

	nilbogTower3: {
		id: 7,

		data: {
			name: "Nilbog Tower Library",
			level: "Level 3 - 5",
			territory: "Hostile",
			displayOnEnter: false,
		},

		indoors: true,

		tagGameAllowed: ["nilbogTower1", "nilbogTower2", "nilbogTower3", "nilbogTower4", "nilbogTower5"],

		song_day: "assets/music/Pippin-the-Hunchback.mp3",

		checkpoint: false,

		lootArea: "loggingCamp",
		lootTier: 1,

		mapData: {
			cols: 10,
			rows: 10,
			tsize: 60,
			tilesPerRow: 8,
			solidTiles: [67, 75, 83, 91, 99, 107, 6, 14, 22, 8, 16, 24, 32, 7, 15, 23, 31, 39, 47, 55, 63, 71, 79, 87, 95, 103, 111],
			waterTiles: [27, 35, 43],
			iceTiles: [27, 35],
			mudTiles: [2, 10, 18, 26, 34, 42, 50, 58, 66, 74, 82, 90, 98, 106],
			pathTiles: [1, 9, 17, 25, 33, 41, 49, 57, 65, 3, 11, 19],
			dayTiles: [24],
			nightTiles: [32],
			layers: [
				[47, 55, 63, 39, 47, 55, 63, 39, 47, 39, 7, 23, 55, 63, 7, 23, 55, 63, 39, 47, 31, 15, 47, 39, 31, 15, 47, 39, 47, 39, 78, 86, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 86, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 86, 78, 78, 78, 78, 86, 78, 78, 78, 78, 78, 78, 86, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 86, 78, 86, 78, 6, 14, 78, 78, 86, 78, 78, 78, 78],
				[],
			],
		},

		images: {
			tiles: {normal: "assets/tilemap/loggingCamp.png"},
			stairs: {normal: "assets/objects/stairsRight.png"},
			painting: {normal: "assets/objects/paintingElvenWoodlands.png"},
			goblinTowerkeeper: {normal: "assets/enemies/goblinTowerkeeper.png"},
			goblinCrusader: {normal: "assets/enemies/goblinCrusader.png"},
			goblinCorpse: {normal: "assets/corpses/deadGoblin.png"},
			melee: {normal: "assets/projectiles/melee.png"},
			trap: {normal: "assets/objects/trap.png"},
		},

		areaTeleports: [
			{
				// teleport to floor 2
				x: 172,
				y: 595,
				width: 10,
				height: 10,
				teleportTo: "nilbogTower2",
				destinationX: 500,
				destinationY: 10,
			},
			{
				// teleport to floor 4
				x: 540,
				y: 30,
				width: 2,
				height: 60,
				teleportTo: "nilbogTower4",
				destinationX: 90,
				destinationY: 560,
			},
		],

		onAreaJoin: function () {
			// stair animations
			if (Game.hero.y > 540) {
				// move up stairs
				Game.hero.direction = 2;
				Game.hero.moveTowards = {
					x: 15,
					y: 520,
					speedScalar: 0.6,
				};
				Game.hero.updateRotation();
			}
			else if (Game.hero.y < 100) {
				// move down stairs
				Game.hero.direction = 2;
				Game.hero.moveTowards = {
					x: 290,
					y: 175,
					speedScalar: 0.6,
				};
				Game.hero.updateRotation();
			}
		},

		things: [
			{
				x: 468,
				y: 97,
				z: -1,
				image: "stairs",
				name: "Stairs",
			},
		],

		infoPoints: [
			{
				x: 537,
				y: 158,
				image: "painting",
				name: "Painting",
				onTouchChat: "A painting of Wizard Andrews with the Lady of Autumn, in the Forest of the Hundred Trees, Elven Woodlands. Andrews was blessed by the elves on this day for his help in the defense of Woodreach against the vampire-elf Mroll."
			},
		],

		collisions: [
			{
				x: 476, // bottom of stairs
				y: 215,
				width: 248,
				height: 50,
			},
		],

		tripwires: [
			{
				// going to bottom
				x: 59,
				y: 580,
				width: 2,
				height: 40,
				collisionType: "feet",
				onPlayerTouch: function () {
					if (Game.hero.moveTowards === undefined) {
						// walk down stairs
						Game.hero.direction = 4;
						Game.hero.moveTowards = {
							x: 150,
							y: 550,
							speedScalar: 0.6,
						};
						Game.hero.updateRotation();
					}
				}
			},
			{
				// going to top of stairs
				x: 337,
				y: 200,
				width: 2,
				height: 40,
				collisionType: "feet",
				onPlayerTouch: function () {
					if (Game.hero.moveTowards === undefined) {
						// walk up stairs
						Game.hero.direction = 4;
						Game.hero.moveTowards = {
							x: 600,
							y: Game.hero.y - 240,
							speedScalar: 0.6,
						};
						Game.hero.updateRotation();
					}
				}
			},
		],

		enemies: [
			{
				x: 270,
				y: 210,
				template: EnemyTemplates.nilbog.goblinCrusader,
			},
			{
				x: 430,
				y: 450,
				template: EnemyTemplates.nilbog.goblinTowerkeeper,
			},
			{
				x: 100,
				y: 300,
				template: EnemyTemplates.nilbog.goblinTowerkeeper,
			},
		],
	},

	nilbogTower4: {
		id: 8,

		data: {
			name: "Nilbog Tower Antechamber",
			level: "Level 3 - 5",
			territory: "Hostile",
			displayOnEnter: false,
		},

		indoors: true,

		tagGameAllowed: ["nilbogTower1", "nilbogTower2", "nilbogTower3", "nilbogTower4", "nilbogTower5"],

		song_day: "assets/music/Pippin-the-Hunchback.mp3",

		checkpoint: false,

		lootArea: "loggingCamp",
		lootTier: 1,

		mapData: {
			cols: 10,
			rows: 10,
			tsize: 60,
			tilesPerRow: 8,
			solidTiles: [67, 75, 83, 91, 99, 107, 6, 14, 22, 8, 16, 24, 32, 7, 15, 23, 31, 39, 47, 55, 63, 71, 79, 87, 95, 103, 111],
			waterTiles: [27, 35, 43],
			iceTiles: [27, 35],
			mudTiles: [2, 10, 18, 26, 34, 42, 50, 58, 66, 74, 82, 90, 98, 106],
			pathTiles: [1, 9, 17, 25, 33, 41, 49, 57, 65, 3, 11, 19],
			dayTiles: [24],
			nightTiles: [32],
			layers: [
				[47, 55, 63, 39, 47, 55, 63, 39, 47, 39, 55, 63, 55, 63, 55, 63, 55, 63, 39, 47, 47, 39, 47, 39, 47, 39, 47, 39, 47, 39, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 86, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 86, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 86, 78, 78, 78, 78, 78, 6, 14, 78, 78, 78, 78, 78, 78, 78],
				[],
			],
		},

		images: {
			tiles: {normal: "assets/tilemap/loggingCamp.png"},
			stairs: {normal: "assets/objects/stairsRight.png"},
			painting: {normal: "assets/objects/paintingDesert.png"}, // image to be renamed
			goblinCrusader: {normal: "assets/enemies/goblinCrusader.png"},
			goblinCorpse: {normal: "assets/corpses/deadGoblin.png"},
			melee: {normal: "assets/projectiles/melee.png"},
			lootChest: {normal: "assets/objects/chestTower.png"},
			trap: {normal: "assets/objects/trap.png"},
		},

		chestData: {
			spawnLocations: [
				{x: 300, y: 350,},
			],
			spawnAmount: 1,
			respawnTime: 2, // days
			tier: 1,
			lootTableTemplate: [ChestLootTables.nilbog, ChestLootTables.nilbogTower],
			inventorySpace: 16,
			chestKey: Items.item[18],
		},

		areaTeleports: [
			{
				// teleport to floor 3
				x: 172,
				y: 595,
				width: 10,
				height: 10,
				teleportTo: "nilbogTower3",
				destinationX: 500,
				destinationY: 10,
			},
			{
				// teleport to floor 5
				x: 540,
				y: 30,
				width: 2,
				height: 60,
				teleportTo: "nilbogTower5",
				destinationX: 90,
				destinationY: 560,
			},
		],

		onAreaJoin: function () {
			// stair animations
			if (Game.hero.y > 540) {
				// move up stairs
				Game.hero.direction = 2;
				Game.hero.moveTowards = {
					x: 15,
					y: 520,
					speedScalar: 0.6,
				};
				Game.hero.updateRotation();
			}
			else if (Game.hero.y < 100) {
				// move down stairs
				Game.hero.direction = 2;
				Game.hero.moveTowards = {
					x: 290,
					y: 175,
					speedScalar: 0.6,
				};
				Game.hero.updateRotation();
			}
		},

		things: [
			{
				x: 468,
				y: 97,
				z: -1,
				image: "stairs",
				name: "Stairs",
			},
		],

		infoPoints: [
			{
				x: 540,
				y: 164,
				image: "painting",
				name: "Painting",
				onTouchChat: "A painting of The Wastelands. They were barren lands, where Wizard Andrews fought through the barbarian tribes to destroy the Chaos Parasite and its corruption."
			},
		],

		collisions: [
			{
				x: 476, // bottom of stairs
				y: 215,
				width: 248,
				height: 50,
			},
		],

		tripwires: [
			{
				// going to bottom
				x: 59,
				y: 580,
				width: 2,
				height: 40,
				collisionType: "feet",
				onPlayerTouch: function () {
					if (Game.hero.moveTowards === undefined) {
						// walk down stairs
						Game.hero.direction = 4;
						Game.hero.moveTowards = {
							x: 150,
							y: 550,
							speedScalar: 0.6,
						};
						Game.hero.updateRotation();
					}
				}
			},
			{
				// going to top of stairs
				x: 337,
				y: 200,
				width: 2,
				height: 40,
				collisionType: "feet",
				onPlayerTouch: function () {
					if (Game.hero.moveTowards === undefined) {
						// walk up stairs
						Game.hero.direction = 4;
						Game.hero.moveTowards = {
							x: 600,
							y: Game.hero.y - 240,
							speedScalar: 0.6,
						};
						Game.hero.updateRotation();
					}
				}
			},
		],

		enemies: [
			{
				x: 200,
				y: 250,
				template: EnemyTemplates.nilbog.goblinCrusader,
			},
			{
				x: 400,
				y: 250,
				template: EnemyTemplates.nilbog.goblinCrusader,
			},
			{
				x: 200,
				y: 450,
				template: EnemyTemplates.nilbog.goblinCrusader,
			},
			{
				x: 400,
				y: 450,
				template: EnemyTemplates.nilbog.goblinCrusader,
			},
		],
	},

	nilbogTower5: {
		id: 9,

		data: {
			name: "Nilbog Tower Throne Room",
			level: "Level 3 - 5",
			territory: "Hostile",
			displayOnEnter: false,
		},

		indoors: true,

		tagGameAllowed: ["nilbogTower1", "nilbogTower2", "nilbogTower3", "nilbogTower4", "nilbogTower5"],

		song_day: "assets/music/Pippin-the-Hunchback.mp3",

		checkpoint: false,

		lootArea: "loggingCamp",
		lootTier: 1,

		mapData: {
			cols: 10,
			rows: 10,
			tsize: 60,
			tilesPerRow: 8,
			solidTiles: [67, 75, 83, 91, 99, 107, 6, 14, 22, 8, 16, 24, 32, 7, 15, 23, 31, 39, 47, 55, 63, 71, 79, 87, 95, 103, 111],
			waterTiles: [27, 35, 43],
			iceTiles: [27, 35],
			mudTiles: [2, 10, 18, 26, 34, 42, 50, 58, 66, 74, 82, 90, 98, 106],
			pathTiles: [1, 9, 17, 25, 33, 41, 49, 57, 65, 3, 11, 19],
			dayTiles: [24],
			nightTiles: [32],
			layers: [
				[47, 55, 63, 55, 63, 55, 63, 55, 63, 39, 55, 63, 7, 23, 55, 63, 55, 63, 55, 63, 47, 39, 31, 15, 47, 39, 47, 39, 47, 39, 78, 46, 46, 46, 46, 46, 46, 46, 46, 78, 70, 30, 38, 30, 38, 30, 38, 30, 38, 54, 70, 38, 30, 38, 30, 38, 30, 38, 30, 54, 70, 30, 38, 30, 38, 30, 38, 30, 38, 54, 70, 38, 30, 38, 30, 38, 30, 38, 30, 54, 78, 62, 62, 62, 62, 62, 62, 62, 62, 78, 78, 6, 14, 78, 78, 78, 78, 78, 78, 78],
				[],
			],
		},

		images: {
			tiles: {normal: "assets/tilemap/loggingCamp.png"},
			stairs: {normal: "assets/objects/stairsRight.png"},
			painting: {normal: "assets/objects/paintingDesert.png"}, // image to be renamed
			goblinKing: {normal: "assets/enemies/goblinKing.png"},
			goblinKingCorpse: {normal: "assets/corpses/goblinKing.png"},
			slash: {normal: "assets/projectiles/slash.png"}, // (ignored by loader if it is already loaded because of a knight player)
			fireball: {normal: "assets/projectiles/fireball.png"}, // (ignored by loader if it is already loaded because of a mage player)
			arrow: {normal: "assets/projectiles/arrow.png"}, // (ignored by loader if it is already loaded because of an archer player)
			weaponRack: {normal: "assets/objects/weaponRack.png"},
			torianTintop: {normal: "assets/npcs/torianTintop.png"},
			nessyTintop: {normal: "assets/npcs/nessyTintop.png"},
			trap: {normal: "assets/objects/trap.png"},
		},

		areaTeleports: [
			{
				// teleport to floor 4
				x: 172,
				y: 595,
				width: 10,
				height: 10,
				teleportTo: "nilbogTower4",
				destinationX: 500,
				destinationY: 10,
			},
		],

		onAreaJoin: function () {
			// stair animations
			if (Game.hero.y > 540) {
				// move up stairs
				Game.hero.direction = 2;
				Game.hero.moveTowards = {
					x: 15,
					y: 520,
					speedScalar: 0.6,
				};
				Game.hero.updateRotation();
			}
		},

		tripwires: [
			{
				// going to bottom
				x: 59,
				y: 580,
				width: 2,
				height: 40,
				collisionType: "feet",
				onPlayerTouch: function () {
					if (Game.hero.moveTowards === undefined) {
						// walk down stairs
						Game.hero.direction = 4;
						Game.hero.moveTowards = {
							x: 150,
							y: 550,
							speedScalar: 0.6,
						};
						Game.hero.updateRotation();
					}
				}
			},
		],

		npcs: [
			{
				template: NPCTemplates.nessyTintop,
				x: 490,
				y: 145,
				z: -2,
				canBeShown: function () {
					return Player.quests.activeQuestArray.includes("A Tale of Two Twintops") &&
					Player.quests.timesCompleted.eaglecrestLoggingCamp[25] === 7;
				}
			},
		],

		enemies: [
			{
				x: 300,
				y: 150,
				template: EnemyTemplates.nilbog.goblinKing,
			},
		],

		things: [
			{
				x: 500,
				y: 150,
				z: -1,
				image: "weaponRack",
			},
		],
	},

	eaglecrest: {
		id: 10,

		data: {
			name: "Eaglecrest City",
			level: "Level 1 - 10",
			territory: "Allied",
			displayOnEnter: true,
		},

		indoors: false,

		tagGameAllowed: ["eaglecrest", "eaglecrestEast", "eaglecrestWest"],

		song_day: "assets/music/Eaglecrest.mp3",
		song_night: "assets/music/Eaglecrest.mp3",

		checkpoint: true,
		player: {
			x: 1570,
			y: 666,
		},

		lootArea: "eaglecrest",
		lootTier: 1,

		mapData: {
			cols: 32,
			rows: 29,
			tsize: 60,
			tilesPerRow: 8,
			solidTiles: [1, 2, 3, 6, 7, 9, 10, 11, 13, 15, 17, 18, 19, 20, 21, 23, 25, 26, 27, 28, 29, 31, 33, 34, 35, 36, 37, 38, 39, 42, 43, 44, 45, 46, 47, 53, 55, 61, 65, 69, 73, 77, 82, 83],
			dayTiles: [11, 27, 34, 42, 7], // windows and lights
			nightTiles: [3, 19, 2, 18, 15],
			pathTiles: [5, 12, 41, 50, 51, 57, 58, 59, 60, 76],
			layers: [
				[43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 11, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 11, 43, 43, 43, 43, 43, 43, 43, 43, 11, 43, 43, 43, 43, 43, 43, 43, 43, 43, 11, 43, 43, 43, 43, 27, 43, 42, 34, 17, 27, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 27, 1, 42, 34, 43, 27, 43, 43, 43, 43, 43, 43, 43, 43, 26, 10, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 26, 10, 43, 43, 43, 43, 43, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 51, 51, 51, 51, 51, 51, 51, 41, 41, 41, 41, 41, 41, 51, 51, 51, 51, 51, 51, 51, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 59, 49, 49, 49, 49, 49, 49, 49, 57, 41, 41, 41, 41, 59, 49, 49, 49, 49, 49, 49, 49, 57, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 59, 49, 49, 49, 49, 49, 49, 49, 57, 41, 41, 41, 41, 59, 49, 49, 49, 49, 49, 49, 49, 57, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 59, 49, 49, 49, 49, 49, 49, 49, 57, 41, 41, 41, 41, 59, 49, 49, 49, 49, 49, 49, 49, 57, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 59, 49, 49, 49, 49, 49, 49, 49, 57, 41, 41, 41, 41, 59, 49, 49, 49, 49, 49, 49, 49, 57, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 59, 49, 49, 49, 49, 49, 49, 49, 57, 41, 41, 41, 41, 59, 49, 49, 49, 49, 49, 49, 49, 57, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 58, 58, 58, 58, 58, 58, 58, 41, 41, 41, 41, 41, 41, 58, 58, 58, 58, 58, 58, 58, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 51, 51, 51, 51, 51, 51, 51, 41, 41, 41, 41, 41, 41, 51, 51, 51, 51, 51, 51, 51, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 59, 49, 49, 49, 49, 49, 49, 49, 57, 41, 41, 41, 41, 59, 49, 49, 49, 49, 49, 49, 49, 57, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 59, 49, 49, 49, 49, 49, 49, 49, 57, 41, 41, 41, 41, 59, 49, 49, 49, 49, 49, 49, 49, 57, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 59, 49, 49, 49, 49, 49, 49, 49, 57, 41, 41, 41, 41, 59, 49, 49, 49, 49, 49, 49, 49, 57, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 59, 49, 49, 49, 49, 49, 49, 49, 57, 41, 41, 41, 41, 59, 49, 49, 49, 49, 49, 49, 49, 57, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 59, 49, 49, 49, 49, 49, 49, 49, 57, 41, 41, 41, 41, 59, 49, 49, 49, 49, 49, 49, 49, 57, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 58, 58, 58, 58, 58, 58, 58, 41, 41, 41, 41, 41, 41, 58, 58, 58, 58, 58, 58, 58, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41],
				[],
			],
		},

		images: {
			tiles: {normal: "assets/tilemap/eaglecrest.png"},
			cart1: {normal: "assets/objects/cartEaglecrest.png"},
			cart2: {normal: "assets/objects/cartEaglecrest2.png"},
			cart3: {normal: "assets/objects/cartEaglecrest3.png"},
			driver: {normal: "assets/npcs/alaran.png"},
			guard1: {normal: "assets/npcs/eaglecrestGuard.png"},
			guard2: {normal: "assets/npcs/eaglecrestGuard2.png"},
			mailbox: {normal: "assets/objects/mailbox.png"},
			mailboxUnread: {normal: "assets/objects/mailboxUnread.png"},
			fountain1: {normal: "assets/objects/fountainFlowing1.png"},
			fountain2: {normal: "assets/objects/fountainFlowing2.png"},
			fountain3: {normal: "assets/objects/fountainFlowing3.png"},
			fountain4: {normal: "assets/objects/fountainFlowing4.png"},
			identifier: {normal: "assets/npcs/hranatha.png"},
			eaglecrestLampDay: {normal: "assets/objects/eaglecrestLampDay.png"},
			eaglecrestLampNight: {normal: "assets/objects/eaglecrestLampNight.png"},
			eaglecrestLampSamhain: {samhain: "assets/objects/eaglecrestLampSamhain.png"},
			helpNotice: {normal: "assets/objects/helpNotice.png"},
			sylvie: {normal: "assets/npcs/sylvie.png"},
			yellowSnakeRight: {samhain: "assets/enemies/yellowSnake.png"},
			yellowSnakeLeft: {samhain: "assets/enemies/yellowSnake.png", flip: "vertical"},
			closedSign: {normal: "assets/objects/closedEaglecrest.png"},
		},

		callAreaJoinOnInit: true,
		onAreaJoin: function () {
			// samhain snakes and lights
			if (Event.event === "Samhain" && Player.quests.completedQuestArray.includes("Overdraft")) {
				let no = Random(10,30); // num of snakes
				for (let i = 0; i < no; i++) {
					Game.villagers.push(new Villager(Game.prepareNPC({
						template: EnemyTemplates.eaglecrest.snake,
					}, "villagers")));
				}

				if (Player.quests.questProgress.eaglecrestSamhainLights) {
					map.eaglecrestSamhainLights();
				}
			}
		},

		areaTeleports: [
			{
				// teleport to bank
				x: 1560,
				y: 210,
				width: 120,
				height: 2,
				teleportTo: "eaglecrestBank",
				destinationX: 510,
				destinationY: 830,
				teleportCondition: function () {
					return Player.quests.activeQuestArray.includes("Overdraft") || Player.quests.completedQuestArray.includes("Overdraft");
				},
				teleportFailText: "The bank is closed.",
			},
			{
				// teleport to tavern
				x: 360,
				y: 210,
				width: 120,
				height: 2,
				teleportTo: "eaglecrestTavern",
				destinationX: 630,
				destinationY: 1380,
			},
			{
				// teleport to eaglecrest west street
				x: -20,
				y: 1020,
				width: 2,
				height: 360,
				teleportTo: "eaglecrestWest",
				destinationX: 1840,
				playerAdjustY: -520,
			},
			{
				// teleport to eaglecrest east street
				x: 1940,
				y: 1020,
				width: 2,
				height: 360,
				teleportTo: "eaglecrestEast",
				destinationX: 20,
				playerAdjustY: -520,
			},
			{
				// teleport to eaglecrest plains
				x: 960,
				y: 1740,
				width: 520,
				height: 2,
				teleportTo: "eaglecrestPlains",
				destinationX: 3000,
				destinationY: 300,
			},
		],

		collisions: [
			{
				x: 960, // fountain
				y: 1040,
				width: 170,
				height: 60,
			},
		],

		villagerData: {
			minPeople: 2,
			maxPeople: 4,
			locations: [
				{
					x: 39,
					y: 260,
					width: 1842,
					height: 1420,
				},
			],
		},

		villagers: [
			{
				// id: 10,
				x: 1172,
				y: 770,
				image: "sylvie",
				name: "Recruiter Sylvie",
				hostility: "friendly",
				level: 70,
				stats: {
					maxHealth: 400,
					defence: 6,
		            walkSpeed: 131,
				},
				roles: [
					{
						quest: Quests.eaglecrest[1],
						role: "questStartFinish"
					},
					{
						quest: Quests.eaglecrest[2],
						role: "questStartFinish"
					},
				],
				chat: {
					notUnlockedRoles: "Eaglecrest needs you! But... not yet.",
					chooseChat: "<b>Eaglecrest needs you!</b>",
					questProgress: "I've got plenty more for you to do after you've finished this!",
					questComplete: `Eaglecrest appreciates your efforts, ${Player.name}.`,
					inventoryFull: "Your bags are full!",
					christmasGreeting: `${Player.name}! Now it's Christmas, there's even more you can do for <b>Eaglecrest</b>!`,
					antoraxDayGreeting: `Isn't it great? To take a step back and look at how much we have achieved for the city in these ${Event.antoraxAge} years?`,
				},
			},
		],

		npcs: [
			{
				// id: 0,
				x: 200,
				y: 1580,
				image: "driver",
				name: "Cart Driver Alaran",
				hostility: "friendly",
				level: 20,
				stats: {
					maxHealth: 150,
					defence: 4,
				},
				roles: [
					{
						quest: Quests.eaglecrestLoggingCamp[23],
						role: "questFinish",
					},
					{
						role: "driver",
						destinations: [
							{
								destinationName: "eaglecrestLoggingCamp",
								destinationPosition: {
									x: 107,
									y: 197,
								},
								title: "Eaglecrest Logging Camp",
								description: "The Logging Camp outside of Antorax. Help out with the logging, and observe the tower that once belonged to Wizard Andrews!",
								image: "achievements/loggingCamp.png",
								cost: 5,
							},
						],
					},
				],
				chat: {
					driverText: "Where are you heading?",
					tooPoor: "Oh, you don't have enough gold for that.",
					chooseChat: "Hey, how are you doing?",
					christmasGreeting: "Heading anywhere this Christmas?",
					antoraxDayGreeting: "Hey, happy Antorax Day! The fireworks are really spectacular in Eaglecrest - planning on heading there today?",
				},
			},
			{
				// id: 1,
				x: 1150,
				y: 1620,
				image: "guard1",
				template: NPCTemplates.guard,
			},
			{
				// id: 2,
				x: 770,
				y: 1620,
				image: "guard2",
				template: NPCTemplates.guard,
			},
			{
				// id: 3,
				x: 130,
				y: 800,
				image: "guard1",
				template: NPCTemplates.guard,
			},
			{
				// id: 4,
				x: 1795,
				y: 800,
				image: "guard2",
				template: NPCTemplates.guard,
			},
			{
				// id: 5,
				x: 1795,
				y: 1160,
				image: "guard2",
				template: NPCTemplates.guard,
			},
			{
				// id: 6,
				x: 1155,
				y: 275,
				image: "guard1",
				template: NPCTemplates.guard,
			},
			{
				// id: 7,
				x: 770,
				y: 275,
				image: "guard2",
				template: NPCTemplates.guard,
			},
			{
				// id: 8,
				x: 1095,
				y: 1030,
				image: "identifier",
				name: "Identifier Hranatha",
				hostility: "friendly",
				level: 35,
				stats: {
					maxHealth: 225,
					defence: 5,
				},
				roles: [
					{
						role: "identifier",
					},
				],
				chat: {
					identifierGreeting: "Something for me to identify for you, hm?",
					noUnidentified: "There's nothing for me to identify. Find some items and come back to me.",
					identifyCommon: "Nothing special this time.",
					identifyUnique: "Hm, a unique item. Nice.",
					identifyMythic: "Ooh! It's been a while since I last saw one of those!",
					tooPoor: "I can't itentify that for free, you know.",
				},
			},
			{
				// id: 9,
				x: 691,
				y: 1187,
				orderOffsetY: 37.5,
				image: "helpNotice",
				name: "Help Notice",
				hideNameTag: true,
				hostility: "object",
				stats: {
					// tbd make it so this can be removed
				},
				roles: [
					{
						role: "questStart",
						quest: Quests.eaglecrest[0],
					},
				],
				chat: {
					notUnlockedRoles: "A poster for a lost cast. You'll be the one getting lost if you don't finish your quest!",
					questProgress: "The cat is black with white paws and nose. His name is Amelio and he was last seen outside the Eaglecrest tavern.",
				},
				canBeShown: function () {
					return !Player.quests.completedQuestArray.includes("Help! Lost Cat");
				},
				showNameInChat: false,
			},
		],

		mailboxes: [
			{
				x: 130,
				y: 1180,
				readImage: "mailbox",
				unreadImage: "mailboxUnread",
				name: "Mailbox",
			},
		],

		things: [
			{
				x: 300,
				y: 1540,
				orderOffsetY: -20,
				image: "cart2",
			},
			{
				x: 1680,
				y: 1340,
				orderOffsetY: -20,
				image: "cart3",
			},
			{
				x: 1740,
				y: 1595,
				orderOffsetY: -20,
				image: "cart1",
			},
			{
				x: 960,
				y: 960,
				orderOffsetY: -30,
				image: "fountain1",
				name: "Water Fountain",
				// animation!
				animateFunction: function () {
					if (this.imageName === "fountain1") {
						this.image = Loader.getImage("fountain2");
						this.imageName = "fountain2";
					}
					else if (this.imageName === "fountain2") {
						this.image = Loader.getImage("fountain3");
						this.imageName = "fountain3";
					}
					else if (this.imageName === "fountain3") {
						this.image = Loader.getImage("fountain4");
						this.imageName = "fountain4";
					}
					else if (this.imageName === "fountain4") {
						this.image = Loader.getImage("fountain1");
						this.imageName = "fountain1";
					}
				},
				animationFrameTime: 300, // formerly 250
			},
			// border lampposts
			{
				x: 90,
				y: 750,
				imageDay: "eaglecrestLampDay",
				imageNight: "eaglecrestLampNight",
				name: "Eaglecrest Lamp",
			},
			{
				x: 90,
				y: 1120,
				imageDay: "eaglecrestLampDay",
				imageNight: "eaglecrestLampNight",
				name: "Eaglecrest Lamp",
			},
			{
				x: 1830,
				y: 750,
				imageDay: "eaglecrestLampDay",
				imageNight: "eaglecrestLampNight",
				name: "Eaglecrest Lamp",
			},
			{
				x: 1830,
				y: 1120,
				imageDay: "eaglecrestLampDay",
				imageNight: "eaglecrestLampNight",
				name: "Eaglecrest Lamp",
			},
			{
				x: 720,
				y: 1620,
				imageDay: "eaglecrestLampDay",
				imageNight: "eaglecrestLampNight",
				name: "Eaglecrest Lamp",
			},
			{
				x: 1200,
				y: 1620,
				imageDay: "eaglecrestLampDay",
				imageNight: "eaglecrestLampNight",
				name: "Eaglecrest Lamp",
			},
			// grass lampposts
			{
				x: 690,
				y: 750,
				imageDay: "eaglecrestLampDay",
				imageNight: "eaglecrestLampNight",
				name: "Eaglecrest Lamp",
			},
			{
				x: 1230,
				y: 750,
				imageDay: "eaglecrestLampDay",
				imageNight: "eaglecrestLampNight",
				name: "Eaglecrest Lamp",
			},
			{
				x: 690,
				y: 1170,
				imageDay: "eaglecrestLampDay",
				imageNight: "eaglecrestLampNight",
				name: "Eaglecrest Lamp",
			},
			{
				x: 1230,
				y: 1170,
				imageDay: "eaglecrestLampDay",
				imageNight: "eaglecrestLampNight",
				name: "Eaglecrest Lamp",
			},
			{
				x: 1713,
				y: 210,
				image: "closedSign",
				name: "Closed Notice",
				canBeShown: function () {
					return !Player.quests.completedQuestArray.includes("Overdraft");
				},
			},
		],
	},

	eaglecrestWest: {
		id: 11,

		data: {
			name: "Eaglecrest City West",
			level: "Level 1 - 10",
			territory: "Allied",
			displayOnEnter: false,
		},

		indoors: false,

		tagGameAllowed: ["eaglecrest", "eaglecrestEast", "eaglecrestWest"],

		song_day: "assets/music/Eaglecrest.mp3",
		song_night: "assets/music/Eaglecrest.mp3",

		checkpoint: false,

		lootArea: "eaglecrest",

		mapData: {
			cols: 31,
			rows: 12,
			tsize: 60,
			tilesPerRow: 8,
			solidTiles: [1, 2, 3, 6, 7, 9, 10, 11, 13, 15, 17, 18, 19, 20, 21, 23, 25, 26, 27, 28, 29, 31, 33, 34, 35, 36, 37, 38, 39, 42, 43, 44, 45, 46, 47, 53, 55, 61, 65, 69, 73, 77, 82, 83],
			dayTiles: [11, 27, 34, 42, 7], // windows and lights
			nightTiles: [3, 19, 2, 18, 15],
			pathTiles: [5, 12, 41, 50, 51, 57, 58, 59, 60, 76],
			layers: [
				[43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 43, 43, 43, 11, 43, 43, 43, 43, 20, 43, 43, 43, 43, 11, 43, 9, 43, 11, 43, 43, 43, 43, 25, 43, 43, 43, 43, 11, 43, 43, 43, 43, 43, 43, 43, 43, 43, 27, 43, 42, 43, 27, 43, 43, 43, 43, 43, 43, 43, 43, 43, 27, 43, 34, 43, 27, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 26, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 10, 43, 43, 43, 43, 43, 43, 43, 43, 41, 59, 49, 49, 49, 49, 49, 57, 41, 59, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 57, 41, 59, 49, 49, 49, 49, 49, 57, 41, 41, 60, 68, 49, 49, 49, 4, 12, 41, 60, 68, 49, 49, 49, 49, 49, 49, 49, 49, 49, 4, 12, 41, 60, 68, 49, 49, 49, 4, 12, 41, 41, 41, 76, 58, 58, 58, 5, 41, 41, 41, 76, 58, 58, 58, 58, 58, 58, 58, 58, 58, 5, 41, 41, 41, 76, 58, 58, 58, 5, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41],
				[],
			],
		},

		images: {
			tiles: {normal: "assets/tilemap/eaglecrest.png"},
			maskSalesman: {normal: "assets/npcs/maskSalesman.png"},
			yellowSnakeRight: {samhain: "assets/enemies/yellowSnake.png"},
			yellowSnakeLeft: {samhain: "assets/enemies/yellowSnake.png", flip: "vertical"},
		},

		callAreaJoinOnInit: true,
		onAreaJoin: function () {
			// samhain snakes
			if (Event.event === "Samhain" && Player.quests.completedQuestArray.includes("Overdraft")) {
				let no = Random(5,15); // num of snakes
				for (let i = 0; i < no; i++) {
					Game.villagers.push(new Villager(Game.prepareNPC({
						template: EnemyTemplates.eaglecrest.snake,
					}, "villagers")));
				}

				if (Player.quests.questProgress.eaglecrestWestSamhainLights) {
					map.eaglecrestSamhainLights();
				}
			}
		},

		areaTeleports: [
			{
				// teleport to shop
				x: 510,
				y: 210,
				width: 60,
				height: 2,
				teleportTo: "eaglecrestBazaar",
				destinationX: 395,
				destinationY: 770,
			},
			{
				// teleport to the forge
				x: 1350,
				y: 210,
				width: 60,
				height: 2,
				teleportTo: "theForge",
				destinationX: 395,
				destinationY: 770,
			},
			{
				// teleport to eaglecrest plaza
				x: 1880,
				y: 510,
				width: 2,
				height: 420,
				teleportTo: "eaglecrest",
				destinationX: 20,
				playerAdjustY: 520,
			},
		],

		villagerData: {
			minPeople: 0,
			maxPeople: 3,
			locations: [
				{
					x: 39,
					y: 260,
					width: 1778,
					height: 421,
				},
			],
		},

		npcs: [
			{
				// id: 0,
				x: 894,
				y: 272,
				image: "maskSalesman",
				name: "Mask Salesman",
				hostility: "friendly",
				level: 15,
				stats: {
					maxHealth: 125,
					defence: 4,
				},
				roles: [
					// samhain quest
					{
						role: "text",
						chooseText: "Have you seen a mysterious crate nearby?",
						chat: `Yes I have. And it had a rather nice <b>Blood-Red Crystal</b> in it.<br><br>
						Oh, you want the crystal? That's a shame isn't it.<br><br>
						I suppose there is something you could do.... I need fresh resources for my masks. Bring me <b>5 Wispy Feathers</b> from the <b>Chickens</b> in the <b>Plains</b>. And then I will <i>consider</i> parting with the crystal.`,
						showCloseButton: true,
						forceChoose: true, // forces choose dom
						roleRequirement: function () {
							return !Player.quests.questProgress.westCrate && Player.quests.activeQuestArray.includes("Moving Like a Snake");
						}
					},
					{
						role: "function",
						chooseText: "Here are 5 Wispy Feathers",
						onClick: function () {
							if (Dom.inventory.check(28, "item", 5)) {
                                Dom.inventory.removeById(28, "item", 5);
                                Player.quests.questProgress.westCrate = ture;
                                Dom.text.page("Mask Salesman", "", true, [], [], [{item: Items.helm[23]}]);
                            }
						},
						forceChoose: true, // forces choose dom
						roleRequirement: function () {
							return !Player.quests.questProgress.westCrate && Dom.inventory.check(28, "item", 5);
						}
					},
					{
						sold: [
							{item: Items.helm[12], cost: 5}, // night owl mask
							{item: Items.helm[13], cost: 5}, // light idol mask
							{item: Items.helm[14], cost: 5}, // dragon flame mask
							{item: Items.helm[15], cost: 5}, // bear mask
							{item: Items.helm[17], cost: 5}, // solar baron mask
							{item: Items.helm[18], cost: 5}, // feathered hawk mask
						],
						numberSold: 3, // only 3 sold at once
						rotation: "week", // masks being sold change every week
						role: "merchant",
						shopGreeting: "Made from only the finest of <em>living</em> creatures.",
					},
					{
						sold: [
							{item: Items.helm[16], cost: 5, costCurrency: 4}, // vampiric mask
							{item: Items.helm[25], cost: 5, costCurrency: 4}, // menace mask
							{item: Items.helm[24], cost: 5, costCurrency: 4}, // skeleton mask
						],
						role: "merchant",
						chooseText: "What have you got to sell this Samhain?",
						shopGreeting: "Samhain costumes are better with some authenticity. How about you bring me some <b>Samhain Marks</b> and you can try one?",
						roleRequirement: function () {
							return Event.event === "Samhain";
						},
					},
					{
						sold: [
							{item: Items.helm[27], cost: 5}, // lovely mask
						],
						role: "merchant",
						chooseText: "What have you got to sell on this day of love?",
						shopGreeting: "You'd <em>love</em> to hear how I made this mask.",
						roleRequirement: function () {
							return Game.event === "Valentine";
						},
					},
				],
				chat: {
					shopLeave: "Come back soon. There'll be more masks for you to choose from.",
					inventoryFull: "You don't have enough space to hold that mask.",
					tooPoor: "That mask seems out of your price range. Kill something and return.",
					chooseChat: "",
				},
			},
		],
	},

	eaglecrestEast: {
		id: 12,

		data: {
			name: "Eaglecrest City East",
			level: "Level 1 - 10",
			territory: "Allied",
			displayOnEnter: false,
		},

		indoors: false,

		tagGameAllowed: ["eaglecrest", "eaglecrestEast", "eaglecrestWest"],

		song_day: "assets/music/Eaglecrest.mp3",
		song_night: "assets/music/Eaglecrest.mp3",

		checkpoint: false,

		lootArea: "eaglecrest",

		mapData: {
			cols: 31,
			rows: 12,
			tsize: 60,
			tilesPerRow: 8,
			solidTiles: [1, 2, 3, 6, 7, 9, 10, 11, 13, 15, 17, 18, 19, 20, 21, 23, 25, 26, 27, 28, 29, 31, 33, 34, 35, 36, 37, 38, 39, 42, 43, 44, 45, 46, 47, 53, 55, 61, 65, 69, 73, 77, 82, 83],
			dayTiles: [11, 27, 34, 42, 7], // windows and lights
			nightTiles: [3, 19, 2, 18, 15],
			pathTiles: [5, 12, 41, 50, 51, 57, 58, 59, 60, 76],
			layers: [
				[43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 43, 43, 43, 11, 43, 43, 43, 43, 33, 43, 43, 43, 43, 11, 43, 9, 43, 11, 43, 43, 43, 43, 9, 43, 43, 43, 43, 11, 43, 43, 43, 43, 43, 43, 43, 43, 43, 27, 43, 42, 43, 27, 43, 43, 43, 43, 43, 43, 43, 43, 43, 27, 43, 34, 43, 27, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 26, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 10, 43, 43, 43, 43, 43, 43, 43, 43, 41, 59, 49, 49, 49, 49, 49, 57, 41, 59, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 57, 41, 59, 49, 49, 49, 49, 49, 57, 41, 41, 60, 68, 49, 49, 49, 4, 12, 41, 60, 68, 49, 49, 49, 49, 49, 49, 49, 49, 49, 4, 12, 41, 60, 68, 49, 49, 49, 4, 12, 41, 41, 41, 76, 58, 58, 58, 5, 41, 41, 41, 76, 58, 58, 58, 58, 58, 58, 58, 58, 58, 5, 41, 41, 41, 76, 58, 58, 58, 5, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41],
				[],
			],
		},

		images: {
			tiles: {normal: "assets/tilemap/eaglecrest.png"},
			itemBuyer: {normal: "assets/npcs/nhkghghh.png"},
			cart: {normal: "assets/objects/cartEaglecrest3.png"},
			yellowSnakeRight: {samhain: "assets/enemies/yellowSnake.png"},
			yellowSnakeLeft: {samhain: "assets/enemies/yellowSnake.png", flip: "vertical"},
		},

		callAreaJoinOnInit: true,
		onAreaJoin: function () {
			// samhain snakes
			if (Event.event === "Samhain" && Player.quests.completedQuestArray.includes("Overdraft")) {
				let no = Random(5,15); // num of snakes
				for (let i = 0; i < no; i++) {
					Game.villagers.push(new Villager(Game.prepareNPC({
						template: EnemyTemplates.eaglecrest.snake,
					}, "villagers")));
				}

				if (Player.quests.questProgress.eaglecrestEastSamhainLights) {
					map.eaglecrestSamhainLights();
				}
			}
		},

		areaTeleports: [
			{
				// teleport to eaglecrest elixirs
				x: 510,
				y: 210,
				width: 60,
				height: 2,
				teleportTo: "eaglecrestElixirs",
				destinationX: 395,
				destinationY: 770,
			},
			{
				// teleport to eaglecrest plaza
				x: -20,
				y: 510,
				width: 2,
				height: 420,
				teleportTo: "eaglecrest",
				destinationX: 1840,
				playerAdjustY: 520,
			},
			{
				// teleport to eaglecrest monastery graveyard
				x: 1880,
				y: 510,
				width: 2,
				height: 420,
				teleportTo: "eaglecrestGraveyard",
				destinationX: 20,
				playerAdjustY: 310,
			},
			{
				// teleport to a shop that hasn't been made yet...
				x: 1350,
				y: 210,
				width: 60,
				height: 2,
				teleportTo: "tbd",
				destinationX: 395,
				destinationY: 770,
				teleportCondition: function () {
					return false;
				},
				teleportFailText: "This is the shopfront of the old Eaglecrest Auctionhouse. It closed down due to links with a black-market.",
			},
		],

		villagerData: {
			minPeople: 0,
			maxPeople: 3,
			locations: [
				{
					x: 39,
					y: 260,
					width: 1778,
					height: 421,
				},
			],
		},

		things: [
			{
				x: 1067,
				y: 297,
				orderOffsetY: -20,
				image: "cart",
				name: "Cart",
			},
		],

		npcs: [
			{
				// id: 6,
				x: 224,
				y: 317,
				image: "itemBuyer",
				name: "Item Buyer Nhkghghh",
				hostility: "friendly",
				level: 15,
				stats: {
					maxHealth: 125,
					defence: 5,
				},
				roles: [
					{
						role: "itemBuyer",
						roleRequirement: function () {
							//return Player.quests.completedQuestArray.includes("TBD");
							return true;
						}
					},
				],
				chat: {
					notUnlockedRoles: "I promise I'm not like other goblins. I just buy stuff. Lots of good stuff to collect. I'm trying to make my own armour. Can you help?",
					buyerGreeting: "Loot loot loot. Some for me, perhaps?",
				},
			},
		],

	},

	eaglecrestBank: {
		id: 13,

		data: {
			name: "Eaglecrest Bank",
			displayOnEnter: true,
		},

		indoors: true,

		tagGameAllowed: true,

		song_day: "assets/music/Eaglecrest.mp3",
		song_night: "assets/music/Eaglecrest.mp3",

		checkpoint: false,

		lootArea: "eaglecrest",

		mapData: {
			cols: 17,
			rows: 15,
			tsize: 60,
			tilesPerRow: 8,
			solidTiles: [1, 2, 3, 6, 7, 9, 10, 11, 13, 15, 17, 18, 19, 20, 21, 23, 25, 26, 27, 28, 29, 31, 33, 34, 35, 36, 37, 38, 39, 42, 43, 44, 45, 46, 47, 53, 55, 61, 65, 69, 73, 77, 82, 83],
			pathTiles: [5, 12, 41, 50, 51, 57, 58, 59, 60, 76],
			layers: [
				[6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 38, 38, 6, 6, 38, 38, 6, 6, 6, 38, 38, 6, 6, 38, 38, 6, 6, 38, 38, 6, 6, 38, 38, 6, 6, 6, 38, 38, 6, 6, 38, 38, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 14, 22, 14, 22, 14, 22, 14, 22, 14, 22, 14, 22, 14, 22, 14, 22, 14, 22, 14, 22, 14, 22, 14, 22, 14, 22, 14, 22, 14, 22, 14, 22, 14, 22, 30, 30, 30, 30, 30, 30, 14, 22, 14, 22, 14, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 14, 22, 14, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 22, 14, 22, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 14, 22, 14, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 22, 14, 22, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 14, 22, 14, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 22, 14, 22, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 14, 22, 14, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 14, 22, 14, 22, 14, 30, 30, 30, 30, 30, 30],
				[],
			],
		},

		images: {
			tiles: {normal: "assets/tilemap/eaglecrest.png"},
			banker1: {normal: "assets/npcs/eaglecrestBanker.png"},
			banker2: {normal: "assets/npcs/eaglecrestBanker2.png"},
			banker3: {normal: "assets/npcs/eaglecrestBanker3.png"},
			banker4: {normal: "assets/npcs/eaglecrestBanker4.png"},
			yellowSnakeRight: {samhain: "assets/enemies/yellowSnake.png"},
			yellowSnakeLeft: {samhain: "assets/enemies/yellowSnake.png", flip: "vertical"},
		},

		callAreaJoinOnInit: true,
		onAreaJoin: function () {
			// samhain snakes
			if (Event.event === "Samhain" && Player.quests.completedQuestArray.includes("Overdraft")) {
				let no = Random(10,20); // num of snakes
				for (let i = 0; i < no; i++) {
					Game.villagers.push(new Villager(Game.prepareNPC({
						template: EnemyTemplates.eaglecrest.snake,
					}, "villagers")));
				}
			}

			// overdraft quest
			if (Player.quests.activeQuestArray.includes("Overdraft") && Player.quests.npcProgress.eaglecrest[2] === 0) {
				Dom.chat.insert(Dom.chat.say("Head Banker Jonos", "Uhhh can't you see we're closed ?"));
			}
		},

		areaTeleports: [
			{
				// teleport to eaglecrest plaza
				x: 510,
				y: 949,
				width: 240,
				height: 2,
				teleportTo: "eaglecrest",
				destinationX: 1560,
				destinationY: 280,
			},
		],

		villagerData: {
			minPeople: 0,
			maxPeople: Player.quests.completedQuestArray.includes("Overdraft") ? 3 : 0,
			locations: [
				{
					x: 39,
					y: 200,
					width: 942,
					height: 632,
				},
			],
		},

		npcs: [
			{
				// id: 0,
				x: 900,
				y: 142,
				image: "banker4",
				crop: {height: 76},
				name: "Eaglecrest Banker",
				hostility: "friendly",
				level: 25,
				stats: {
					maxHealth: 175,
					defence: 5,
				},
				roles: [
					{
						role: "banker",
					},
				],
				canBeShown: function () {
					return Player.quests.completedQuestArray.includes("Overdraft");
				},
			},
			{
				// id: 1,
				x: 660,
				y: 139,
				image: "banker1",
				crop: {height: 81},
				name: "Head Banker Jonos",
				hostility: "friendly",
				level: 25,
				stats: {
					maxHealth: 175,
					defence: 5,
				},
				roles: [
					{
						role: "banker",
					},
				],
				canBeShown: function () {
					return Player.quests.completedQuestArray.includes("Overdraft");
				},
			},
			{
				// id: 2,
				x: 360,
				y: 137,
				image: "banker3",
				crop: {height: 86},
				name: "Eaglecrest Banker",
				hostility: "friendly",
				level: 25,
				stats: {
					maxHealth: 175,
					defence: 5,
				},
				roles: [
					{
						role: "banker",
					},
				],
				canBeShown: function () {
					return Player.quests.completedQuestArray.includes("Overdraft") || Player.quests.npcProgress.eaglecrest[2] >= 4;
				},
			},
			{
				// id: 3,
				x: 120,
				y: 151,
				image: "banker2",
				crop: {height: 58},
				name: "Eaglecrest Banker",
				hostility: "friendly",
				level: 25,
				stats: {
					maxHealth: 175,
					defence: 5,
				},
				roles: [
					{
						role: "banker",
					},
				],
				canBeShown: function () {
					return Player.quests.completedQuestArray.includes("Overdraft");
				},
			},
		],

		villagers: [
			{
				image: "banker1",
				name: "Head Banker Jonos",
				hostility: "friendly",
				level: 25,
				stats: {
					maxHealth: 175,
					defence: 5,
					walkSpeed: 200,
				},
				canBeShown: function () {
					return !Player.quests.completedQuestArray.includes("Overdraft");
				},
				roles: [
					{
						role: "text",
						chat: `Look what are you doing in here ? Don't make me call the guards on you.<br><br>
						Oh Sylvie sent you to help ? Well why didn't you say ! Well sorry for the rude introduction , let's try that again.<br><br>
						I'm <b>Head Banker Jonos</b> , and I'm responsible for this mess of a situation ! The bank has had to close today due to . . . well . . . we lent someone all of our Gold by accident. Don't go around telling people ! My job is on the line here ! If people found out . . .<br><br>
						Do I know who we lent the money to ? Well if I did then you wouldn't be here would you ? I need to you help look around the City for whoever has all our Gold , and send them back here.<br><br>
						What do you mean you're new to the City ? Why did Sylvie send you here then ? Ugh well a good place to start would be asking <b>Shopkeeper Barda</b> in <b>The Eaglecrest Bazaar</b> to the <b>west</b> of here. Her local knowledge is admittedly better than mine. And much better than yours from the sounds of it ! !`,
						buttons: ["On it!"],
						showCloseButton: false,
						forceChoose: false,
						functions: [function () {
							// close page
							Dom.closePage("textPage");
							// quest progress
							Player.quests.npcProgress.eaglecrest[2] = 1;
							Dom.quests.active();
						}],
						roleRequirement: function () {
							return Player.quests.npcProgress.eaglecrest[2] === 0 || typeof Player.quests.npcProgress.eaglecrest[2] === "undefined";
						},
					},
					{
						role: "text",
						chooseText: "Explain the situation to Jonos.",
						chat: `Oh thank the Pantheon ! I cannot thank you enough. So your local knowledge can't be too bad then !<br><br>
						Look , whilst you're here , how about we show you how the bank works ?`,
						buttons: ["Sure!"],
						showCloseButton: false,
						forceChoose: true, // forces choose dom
						functions: [function () {
							// close page
							Dom.closePage("textPage");
							// quest progress
							Player.quests.npcProgress.eaglecrest[2] = 5;
							Dom.quests.active();
							// bank tutorial
							Dom.inventory.give(Items.bag[6]);
							Dom.chat.insert(Dom.chat.say("Head Banker Jonos", "Here's an <b>Eaglecrest Bag</b>. Head over to the banker at the counter and speak to them about storing your items !")); // no repeat
						}],
						roleRequirement: function () {
							if (!Dom.inventory.requiredSpace([{item: Items.bag[6]}])) {
								Dom.chat.insert(Dom.chat.say("Head Banker Jonos", "Free up some space in your inventory then we can discuss !"), undefined, undefined, true); // no repeat
								return false;
							}
							return Player.quests.npcProgress.eaglecrest[2] === 4;
						},
					},
				],
				chat: {
					chooseChat: "Well ? ?",
					notUnlockedRoles: "Well don't just stand there ! Sorry, I'm just stressed . . .",
					questComplete: "This Greenbeard should be getting here soon . . !", // not currently used, tbd
				},
			},
			{
				image: "banker2",
				name: "Eaglecrest Banker",
				hostility: "friendly",
				level: 25,
				stats: {
					maxHealth: 175,
					defence: 5,
					walkSpeed: 200,
				},
				canBeShown: function () {
					return !Player.quests.completedQuestArray.includes("Overdraft");
				},
				chat: {
					notUnlockedRoles: "tbd",
				},
			},
			{
				image: "banker3",
				name: "Eaglecrest Banker",
				hostility: "friendly",
				level: 25,
				stats: {
					maxHealth: 175,
					defence: 5,
					walkSpeed: 210,
				},
				canBeShown: function () {
					return !Player.quests.completedQuestArray.includes("Overdraft") && Player.quests.npcProgress.eaglecrest[2] < 4;
				},
				chat: {
					notUnlockedRoles: "tbd",
				},
			},
			{
				image: "banker4",
				name: "Eaglecrest Banker",
				hostility: "friendly",
				level: 25,
				stats: {
					maxHealth: 175,
					defence: 5,
					walkSpeed: 150,
				},
				canBeShown: function () {
					return !Player.quests.completedQuestArray.includes("Overdraft");
				},
				chat: {
					notUnlockedRoles: "tbd",
				},
			},
		],
	},

	eaglecrestTavern: {
		id: 14,

		data: {
			name: "Eagle's Span Tavern",
			displayOnEnter: true,
		},

		indoors: true,

		tagGameAllowed: true,

		song_day: "assets/music/Tavern.mp3",
		song_night: "assets/music/Tavern.mp3",

		checkpoint: false, // maybs in the future taverns should be the ONLY checkpoints

		lootArea: "eaglecrest", // for level up music

		mapData: {
			cols: 21,
			rows: 24,
			tsize: 60,
			tilesPerRow: 8,
			solidTiles: [1, 2, 3, 6, 7, 9, 10, 11, 13, 15, 17, 18, 19, 20, 21, 23, 25, 26, 27, 28, 29, 31, 33, 34, 35, 36, 37, 38, 39, 42, 43, 44, 45, 46, 47, 53, 54, 55, 61, 65, 69, 73, 77, 82, 83],
			dayTiles: [11, 27, 34, 42, 7], // windows and lights
			nightTiles: [3, 19, 2, 18, 15],
			pathTiles: [5, 12, 41, 50, 51, 57, 58, 59, 60, 76],
			layers: [
				[6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 6, 6, 6, 7, 6, 6, 6, 7, 6, 6, 6, 7, 6, 6, 6, 7, 6, 101, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 10, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 30, 30, 30, 30, 30, 30, 30, 54, 54, 54, 6, 6, 7, 6, 6, 6, 6, 6, 7, 6, 6, 54, 54, 54, 30, 30, 54, 54, 54, 54, 54, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 54, 54, 54, 54, 54, 54, 54, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 54, 54, 30, 30, 30, 30, 30, 30, 30, 46, 46, 46, 46, 46, 46, 46, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
			],
		},

		images: {
			tiles: {normal: "assets/tilemap/eaglecrest.png"},
			innkeeper: {normal: "assets/npcs/rhus-jak.png"},
			stairsRight: {normal: "assets/objects/stairsRight.png"},
			stairsLeft: {normal: "assets/objects/stairsLeft.png"},
			gameBoard1: {normal: "assets/objects/gameBoard1.png"},
			gameBoard2: {normal: "assets/objects/gameBoard2.png"},
			hearth1: {normal: "assets/objects/hearth1.png"},
			hearth2: {normal: "assets/objects/hearth2.png"},
			hearth3: {normal: "assets/objects/hearth3.png"},
			dirt: {normal: "assets/enemies/dirt.png"},
			mug: {normal: "assets/items/item/25.png"},
			plate: {normal: "assets/items/item/26.png"},
			table: {normal: "assets/objects/table.png"},
			largeTable: {normal: "assets/objects/largeTable.png"},
			barrel: {normal: "assets/objects/barrel.png"},
			cat1Left: {normal: "assets/npcs/cat1.png"}, // for amelio
            cat1Right: {normal: "assets/npcs/cat1.png", flip: "vertical"},
			yellowSnakeRight: {samhain: "assets/enemies/yellowSnake.png"},
			yellowSnakeLeft: {samhain: "assets/enemies/yellowSnake.png", flip: "vertical"},
			greenbeard: {normal: "assets/npcs/greenbeard.png"}, // for overdraft
		},

		areaTeleports: [
			{
				x: 630,
				y: 1480,
				width: 240,
				height: 2,
				teleportTo: "eaglecrest",
				destinationX: 360,
				destinationY: 280,
			},
			{
				x: 1235,
				y: 85,
				width: 60,
				height: 2,
				teleportTo: "samhainLair",
				destinationX: 300,
				destinationY: 1740,
				teleportCondition: function () {
					return Dom.inventory.check(36, "item"); // if they're holding skeleton key
				},
				teleportFailText: "The door appears to be locked.",
			},
		],

		villagerData: {
			minPeople: 3,
			maxPeople: 5,
			locations: [
				{
					x: 39,
					y: 140,
					width: 1182,
					height: 452,
				},
				{
					x: 39,
					y: 1040,
					width: 1182,
					height: 272,
				},
			],
		},

		npcs: [
			{
				x: 646,
				y: 970,
				image: "innkeeper",
				name: "Innkeepers Rhus-Jak",
				hostility: "friendly",
				level: 25,
				stats: {
					maxHealth: 300, // two people!
					defence: 6,
				},
				roles: [
					{
						// must be first role for Hungry Taverners
						sold: [
							{item: Items.consumable[21], cost: 0, quest: true, unconsumable: true, removeOnAbandon: "Hungry Taverners"}, // Beetroot Beer
							{item: Items.consumable[16], cost: 0, eventRequirement: "Christmas", quest: true, unconsumable: true, removeOnAbandon: "Hungry Taverners"}, // Mulled Wine
							{item: Items.food[0], cost: 0, quest: true, unconsumable: true, removeOnAbandon: "Hungry Taverners"}, // Bread
							{item: Items.food[4], cost: 0, quest: true, unconsumable: true, removeOnAbandon: "Hungry Taverners"}, // Sandwich
							{item: Items.food[1], cost: 0, eventRequirement: "Christmas", quest: true, unconsumable: true, removeOnAbandon: "Hungry Taverners"}, // Mince Pie
							{item: Items.food[2], cost: 0, eventRequirement: "Christmas", quest: true, unconsumable: true, removeOnAbandon: "Hungry Taverners"}, // Christmas Pudding
							{item: Items.food[3], cost: 0, eventRequirement: "Antorax", quest: true, unconsumable: true, removeOnAbandon: "Hungry Taverners"}, // Birthday Cake (changed every year)
						],
						role: "merchant",
						roleRequirement: function () {
							return Player.quests.activeQuestArray.includes("Hungry Taverners");
						},
						shopGreeting: "<strong>Rhus</strong>: Hand these out to our visitors.<br>",
						chooseText: "Obtain tavern goods to hand out.",
					},
					{
						quest: [Quests.tavern[1], Quests.tavern[2], Quests.tavern[3]],
						role: "questStartFinish",
						newQuestFrequency: "repeatable",
						questVariable: "tavernJobs",
					},
					{
						sold: [
							{item: Items.consumable[16], cost: 2, costCurrency: 5, eventRequirement: "Christmas"}, // Mulled Wine
							{item: Items.food[1], cost: 2, costCurrency: 5, eventRequirement: "Christmas"}, // Mince Pie
							{item: Items.food[2], cost: 2, costCurrency: 5, eventRequirement: "Christmas"}, // Christmas Pudding
							{item: Items.food[3], cost: 5, eventRequirement: "Antorax"}, // Birthday Cake (changed every year)
							{item: Items.consumable[21], cost: 3,}, // Beetroot Beer
							{item: Items.food[0], cost: 2,}, // Bread
							{item: Items.food[4], cost: 4,}, // Sandwich
							{item: Items.teleport[1], cost: 100,}, // Eaglecrest Teleport Coin
						],
						role: "merchant",
						shopGreeting: `<strong>Jak</strong>: Our food and drink was all freshly made today.<br>
									<strong>Rhus</strong>: You want some?<br>`,
					},
					{
						sold: [
							// no need for eventRequirements since role requires the event anyway
						    {item: Items.consumable[30], cost: 2}, // Samhain Brew
						    {item: Items.food[7], cost: 2}, // Toffee Apple
						    {item: Items.food[6], cost: 3}, // Pumpkin Pie
						],
						role: "merchant",
						roleRequirement: function () {
							return Event.event === "Samhain";
						},
						shopGreeting: `<strong>Rhus</strong>: HA, trick or treat?<br>
									<strong>Jak</strong>: Don't worry, no tricks here! What about a Samhain treat?<br>`,
						chooseText: "I'd like to browse your Samhain goods.",
					},
				],
				chat: {
					questProgress: "<strong>Jak</strong>: You're not done yet! Keep going.",
					chooseChat: `<strong>Rhus</strong>: What you want?
<br><strong>Jak</strong>: Hello! Can we help you?`,
					shopLeave: ["<strong>Rhus</strong>: Heh, see you soon.",
								"<strong>Jak</strong>: Enjoy your stay."],
					inventoryFull: "<strong>Rhus</strong>: You can't be holding that! Empty your bags a bit.",
					tooPoor: "<strong>Jak</strong>: We're sorry, but you can't afford that.",
					//christmasGreeting: "",
					//antoraxDayGreeting: ",
				},
				showNameInChat: false, // done in chat message instead
				chatArrayType: "all", // chat arrays should all be sent with a delay between them
			},
		],

		villagers: [
			{
				image: "greenbeard",
				template: Villagers[7],
				canBeShown: function () {
					return Player.quests.activeQuestArray.includes("Overdraft");
				},
				roles: [
					{
						role: "text",
						chooseText: "Ask Greenbeard if he borrowed the money from the bank.",
						chat: `Blimey! Sink me! Sounds like a situation the bank's got themselves in.<br><br>
						Yarrr, I borrowed some bounty from the bank earlier today. It was only <b>10,000 Gold</b>...<br><br>
						Truth be told, I needed it to give to 'em <b>Loan Sharks</b>. I got myself in a bit o' trouble with 'em...<br><br>
						Oh an' Gildo? He just wanted money for some fresh bounty! What else's a pirate meant to do in the face of a citizen in need?<br><br>
						Yarrr, one more clap of thunder and I'll be over to the bank to clear this up. Do ye want to join?`,
						buttons: ["Why not!"],
						showCloseButton: false,
						forceChoose: true, // forces choose dom
						functions: [function () {
							// close page
							Dom.closePage("textPage");
							// quest progress
							Player.quests.npcProgress.eaglecrest[2] = 4;
							Dom.quests.active();
							// why not!...
							Dom.chat.insert(Dom.chat.say("Captain Greenbeard", "'ave a <b>Beetroot Beer</b>! Drinks are on me landlubber, what else am I usin' this Gold for?"));
							if (!Dom.inventory.give(Items.consumable[21])) {
								Dom.chat.insert("<i>Your inventory was full!</i>");
							}
						}],
						roleRequirement: function () {
							return Player.quests.npcProgress.eaglecrest[2] === 3;
						},
					},
				],
			},
			{
				image: "cat1Left",
        		rotationImages: {
            		left: "cat1Left",
            		right: "cat1Right"
        		},
                name: "Amelio",
                speciesTemplate: SpeciesTemplates.cat,
                canBeShown: function () {
                    return Player.quests.activeQuestArray.includes("Help! Lost Cat");
                }
			},
		],

		things: [
			{
				x: 570,
				y: 166,
				image: "barrel",
				name: "Barrel",
			},
			{
				x: 1230,
				y: 166,
				image: "barrel",
				name: "Barrel",
			},
			{
				x: 30,
				y: 406,
				image: "barrel",
				name: "Barrel",
			},
			{
				x: 330,
				y: 886,
				image: "barrel",
				name: "Barrel",
			},
			{
				x: 390,
				y: 886,
				image: "barrel",
				name: "Barrel",
			},
			{
				x: 810,
				y: 886,
				image: "barrel",
				name: "Barrel",
			},
			{
				x: 930,
				y: 886,
				image: "barrel",
				name: "Barrel",
			},
			{
				x: 1090,
				y: 125,
				z: -1,
				image: "hearth1",
				name: "Tavern Hearth",
				// animation!
				animateFunction: function () {
					if (this.imageName === "hearth1") {
						this.image = Loader.getImage("hearth2");
						this.imageName = "hearth2";
					}
					else if (this.imageName === "hearth2") {
						this.image = Loader.getImage("hearth3");
						this.imageName = "hearth3";
					}
					else if (this.imageName === "hearth3") {
						this.image = Loader.getImage("hearth1");
						this.imageName = "hearth1";
					}
				},
				animationFrameTime: 200,
			},
			{
				x: 134,
				y: 125,
				z: -1,
				image: "hearth1",
				name: "Tavern Hearth",
				// animation!
				animateFunction: function () {
					if (this.imageName === "hearth1") {
						this.image = Loader.getImage("hearth2");
						this.imageName = "hearth2";
					}
					else if (this.imageName === "hearth2") {
						this.image = Loader.getImage("hearth3");
						this.imageName = "hearth3";
					}
					else if (this.imageName === "hearth3") {
						this.image = Loader.getImage("hearth1");
						this.imageName = "hearth1";
					}
				},
				animationFrameTime: 200,
			},
			{
				x: 630,
				y: 844,
				z: -1,
				image: "hearth1",
				name: "Tavern Hearth",
				// animation!
				animateFunction: function () {
					if (this.imageName === "hearth1") {
						this.image = Loader.getImage("hearth2");
						this.imageName = "hearth2";
					}
					else if (this.imageName === "hearth2") {
						this.image = Loader.getImage("hearth3");
						this.imageName = "hearth3";
					}
					else if (this.imageName === "hearth3") {
						this.image = Loader.getImage("hearth1");
						this.imageName = "hearth1";
					}
				},
				animationFrameTime: 200,
			},
			{
				x: 1040,
				y: 905,
				z: -1,
				image: "stairsRight",
				name: "Stairs",
				crop: {
					y: 60,
					height: 230,
					width: 202,
				},
			},
			{
				x: 221,
				y: 905,
				z: -1,
				image: "stairsLeft",
				name: "Stairs",
				crop: {
					y: 60,
					height: 230,
					x: 65,
					width: 202,
				},
			},
			{
				x: 420,
				y: 448,
				orderOffsetY: -10,
				image: "table",
				name: "Table",
			},
			{
				x: 360,
				y: 628,
				orderOffsetY: -10,
				image: "table",
				name: "Table",
			},
			{
				x: 840,
				y: 268,
				orderOffsetY: -10,
				image: "table",
				name: "Table",
			},
			{
				x: 900,
				y: 628,
				orderOffsetY: -10,
				image: "table",
				name: "Table",
			},
			{
				x: 362,
				y: 264,
				orderOffsetY: -40,
				use: "wizardsLore",
				image: "largeTable",
				name: "Large Table",
			},
			{
				x: 842,
				y: 444,
				orderOffsetY: -40,
				image: "largeTable",
				name: "Large Table",
			},
			{
				x: 182,
				y: 1344,
				orderOffsetY: -40,
				image: "largeTable",
				name: "Large Table",
			},
			{
				x: 1082,
				y: 1344,
				orderOffsetY: -40,
				use: "wizardsLore",
				image: "largeTable",
				name: "Large Table",
			},
		],

		collisions: [
			{
				x: 1049, // bottom of right stairs
				y: 995,
				width: 180,
				height: 50,
			},
			{
				x: 211, // bottom of left stairs
				y: 995,
				width: 180,
				height: 50,
			},
		],

		tripwires: [
			// right stairs
			{
				// bottom of right stairs (to top)
				x: 936,
				y: 990,
				width: 2,
				height: 25,
				collisionType: "feet",
				onPlayerTouch: function () {
					if (Game.hero.moveTowards === undefined) {
						// walk up stairs
						Game.hero.direction = 4;
						Game.hero.moveTowards = {
							x: 1175,
							y: Game.hero.y - 200,
							speedScalar: 0.6,
						};
						Game.hero.updateRotation();
					}
				}
			},
			{
				// top of right stairs (to bottom)
				x: 1144,
				y: 810,
				width: 2,
				height: 25,
				collisionType: "feet",
				onPlayerTouch: function () {
					if (Game.hero.moveTowards === undefined) {
						// walk up stairs
						Game.hero.direction = 2;
						Game.hero.moveTowards = {
							x: 900,
							y: Game.hero.y + 200,
							speedScalar: 0.6,
						};
						Game.hero.updateRotation();
					}
				}
			},
			// left stairs
			{
				// bottom of left stairs (to top)
				x: 325,
				y: 990,
				width: 2,
				height: 25,
				collisionType: "feet",
				onPlayerTouch: function () {
					if (Game.hero.moveTowards === undefined) {
						// walk up stairs
						Game.hero.direction = 2;
						Game.hero.moveTowards = {
							x: 85,
							y: Game.hero.y - 200,
							speedScalar: 0.6,
						};
						Game.hero.updateRotation();
					}
				}
			},
			{
				// top of left stairs (to bottom)
				x: 117,
				y: 810,
				width: 2,
				height: 25,
				collisionType: "feet",
				onPlayerTouch: function () {
					if (Game.hero.moveTowards === undefined) {
						// walk up stairs
						Game.hero.direction = 4;
						Game.hero.moveTowards = {
							x: 360,
							y: Game.hero.y + 200,
							speedScalar: 0.6,
						};
						Game.hero.updateRotation();
					}
				}
			},
			{
				// jump!
				x: 630,
				y: 719,
				width: 500,
				height: 2,
				collisionType: "feet",
				onPlayerTouch: function () {
					if (Game.hero.channelling === false) {
						Game.hero.channel(function () {
							if (Game.hero.isBeingDisplaced === undefined) {
								Game.hero.displace(0, 180, 1.5, ToRadians(90), true);
								Game.setTimeout(function() {
									Game.hero.takeDamage(15);
									Player.quests.questProgress.timesJumpedFromTavern = Increment(Player.quests.questProgress.timesJumpedFromTavern);
									if (Player.quests.questProgress.timesJumpedFromTavern === 1) {
										Dom.chat.insert(Dom.chat.say("Jak", "Please refrain from jumping! You'll hurt yourself..."));
									}
									else if (Player.quests.questProgress.timesJumpedFromTavern === 4) {
										Dom.chat.insert(Dom.chat.say("Jak", "Please leave."));
									}
									else if (Player.quests.questProgress.timesJumpedFromTavern === 7) {
										Dom.chat.insert(Dom.chat.say("Jak", "We're calling the guards!!"));
									}
									else if (Player.quests.questProgress.timesJumpedFromTavern >= 2) {
										Dom.chat.insert(Dom.chat.say("Rhus", "STOP THAT!!!"));
									}
								}, 1500);
							}
						}, [], 1000, "Preparing to jump!");
					}
				}
			},
		],

		infoPoints: [
			{
				x: 364,
				y: 234,
				orderOffsetY: 23,
				image: "gameBoard1",
				name: "Wizard's Lore",
				onTouchChat: "A game of Wizard's Lore, a board game traditionally played by wizard students and scholars.",
			},
			{
				x: 1084,
				y: 1314,
				orderOffsetY: 25.5,
				image: "gameBoard2",
				name: "Wizard's Lore",
				onTouchChat: "A game of Wizard's Lore, a board game traditionally played by wizard students and scholars.",
			},
		],

		callAreaJoinOnInit: true,
		onAreaJoin: function () {

			// generate an array of tables
			let array = Game.things.filter(thing => thing.name === "Table");

			// generate an array of possible positions for small tables
			let positions = [];
			for (let i = 0; i < array.length; i++) {
				positions.push(
					{x: array[i].x-40, y: array[i].y-20, orderOffsetY: 13},
					{x: array[i].x-1.5, y: array[i].y-20, orderOffsetY: 13},
					{x: array[i].x+37, y: array[i].y-20, orderOffsetY: 13},
				);
			}

			// generate an array of large tables
			array = Game.things.filter(thing => thing.name === "Large Table" && thing.use !== "wizardsLore");

			// add to the array of possible positions for large tables
			for (let i = 0; i < array.length; i++) {
				positions.push(
					{x: array[i].x-40, y: array[i].y-20, orderOffsetY: 16},
					{x: array[i].x-1.5, y: array[i].y-20, orderOffsetY: 16},
					{x: array[i].x+37, y: array[i].y-20, orderOffsetY: 16},
					{x: array[i].x-20, y: array[i].y-40, orderOffsetY: 36},
					{x: array[i].x+17, y: array[i].y-40, orderOffsetY: 36},
				);
			}

			// select a random number of mugs and plates to generate between 5 and 15
			let random = Random(5, 15);
			Player.quests.questProgress.mugsPlatesTotal = random;

			// spawn the mugs and plates
			for (let i = 0; i < random; i++) {

				// choose a random available position and make it unavailable
				let position = positions.splice(Random(0, positions.length-1), 1)[0];

				// 50% chance of being a mug
				if (Random(0, 1) === 0) {

					// choose a random position on the x axis of the table for the mug to be placed
					let offsetX = Random(-45, 38);

					Game.things.push(new Thing({
						map: map,
						type: "things",
						x: position.x,
						y: position.y - 10,
						orderOffsetY: position.orderOffsetY + 10,
						image: "mug",
						name: "Mug",
					}));
				}

				// 50% chance of being a plate
				else {
					Game.things.push(new Thing({
						map: map,
						type: "things",
						x: position.x,
						y: position.y,
						orderOffsetY: position.orderOffsetY,
						image: "plate",
						name: "Plate",
					}));
				}
			}


			// samhain snakes
			if (Event.event === "Samhain" && Player.quests.completedQuestArray.includes("Overdraft")) {
				let no = Random(20,40); // num of snakes
				for (let i = 0; i < no; i++) {
					Game.villagers.push(new Villager(Game.prepareNPC({
						template: EnemyTemplates.eaglecrest.snake,
					}, "villagers")));
				}
			}
		},

		callAreaLeaveOnLogout: true,

		onAreaLeave: function (logout) {
			let chat = "";
			if (Player.quests.activeQuestArray.includes("Cleaning the Floor")) {
				Dom.quest.abandon(Quests.tavern[1]);
				chat = "<strong>Cleaning the Floor</strong> has been abandoned. You can start it again by speaking to an innkeeper.";
			}
			if (Player.quests.activeQuestArray.includes("Tavern Tidy-Up")) {
				Dom.quest.abandon(Quests.tavern[2]);
				chat = "<strong>Tavern Tidy-Up</strong> has been abandoned. You can start it again by speaking to an innkeeper.";
			}
			if (Player.quests.activeQuestArray.includes("Hungry Taverners")) {
				Dom.quest.abandon(Quests.tavern[3]);
				chat = "<strong>Hungry Taverners</strong> has been abandoned. You can start it again by speaking to an innkeeper.";
			}

			if (chat !== "") {
				if (logout) {
					Player.chatOnJoin.push(chat);
				}
				else {
					Dom.chat.insert(chat);
				}
			}
		},

	},

	theForge: {
		id: 15,

		data: {
			name: "The Forge",
			subtitle: "The finest forged steel equipment in Eaglecrest!",
			displayOnEnter: true,
		},

		indoors: true,

		tagGameAllowed: true,

		song_day: "assets/music/Eaglecrest.mp3",
		song_night: "assets/music/Eaglecrest.mp3",

		checkpoint: false,

		lootArea: "eaglecrest",

		mapData: {
			cols: 13,
			rows: 14,
			tsize: 60,
			tilesPerRow: 8,
			solidTiles: [1, 2, 3, 6, 7, 9, 10, 11, 13, 15, 17, 18, 19, 20, 21, 23, 25, 26, 27, 28, 29, 31, 33, 34, 35, 36, 37, 38, 39, 42, 43, 44, 45, 46, 47, 53, 55, 61, 65, 69, 73, 77, 82, 83],
			dayTiles: [11, 27, 34, 42, 7], // windows and lights
			nightTiles: [3, 19, 2, 18, 15],
			pathTiles: [5, 12, 41, 50, 51, 57, 58, 59, 60, 76],
			layers: [
				[6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 6, 6, 6, 6, 7, 6, 6, 6, 6, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 46, 46, 46, 46, 46, 46, 46, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
				[],
			],
		},

		images: {
			tiles: {normal: "assets/tilemap/eaglecrest.png"},
			blacksmith: {normal: "assets/npcs/blacksmith.png"},
			eaglecrestianForgedSet: {normal: "assets/items/set/5.png"},
			eaglecrestianForgedBow: {normal: "assets/items/bow/11.png"},
			eaglecrestianForgedStaff: {normal: "assets/items/staff/11archaeology.png"},
			eaglecrestianForgedSword: {normal: "assets/items/sword/12.png"},
			anvil: {normal: "assets/objects/anvil.png"},
			yellowSnakeRight: {samhain: "assets/enemies/yellowSnake.png"},
			yellowSnakeLeft: {samhain: "assets/enemies/yellowSnake.png", flip: "vertical"},
		},

		callAreaJoinOnInit: true,
		onAreaJoin: function () {
			// samhain snakes
			if (Event.event === "Samhain" && Player.quests.completedQuestArray.includes("Overdraft")) {
				let no = Random(5,15); // num of snakes
				for (let i = 0; i < no; i++) {
					Game.villagers.push(new Villager(Game.prepareNPC({
						template: EnemyTemplates.eaglecrest.snake,
					}, "villagers")));
				}
			}
		},

		areaTeleports: [
			{
				// teleport to eaglecrest west
				x: 390,
				y: 889,
				width: 240,
				height: 2,
				teleportTo: "eaglecrestWest",
				destinationX: 1320,
				destinationY: 280,
			},
		],

		villagerData: {
			minPeople: 0,
			maxPeople: 2,
			locations: [
				{
					x: 39,
					y: 380,
					width: 702,
					height: 392,
				},
			],
		},

		npcs: [
			{
				x: 390,
				y: 335,
				image: "blacksmith",
				crop: {height: 50},
				name: "Valdan the Blacksmith",
				hostility: "friendly",
				level: 40,
				stats: {
					maxHealth: 250,
					defence: 5,
				},
				roles: [
					{
						sold: [
							Player.class === "k" ? {item: Items.sword[12], cost: 7}
							: Player.class === "m" ? {item: Items.staff[11], cost: 7}
							: {item: Items.bow[11], cost: 7},
							{item: Items.helm[19], cost: 6},
							{item: Items.chest[8], cost: 7},
							{item: Items.greaves[7], cost: 7},
							{item: Items.boots[11], cost: 6},
						],
						role: "merchant",
						shopGreeting: "Behold the finest steel o' Eaglecrest! It's worth every coin.",
					},
				],
				chat: {
					shopLeave: "The equipment'll last forever, we guarantee it.",
					inventoryFull: "You can't buy that 'un without space in your bags!",
					tooPoor: "You don't have enough gold for that! I'm not gonna work for free, you know. This is fine quality stuff.",
					areaJoin: "Welcome to The Forge! How can I be helpin' you today?"
				},
			},
		],

		things: [
			{
				x: 60,
				y: 200,
				image: "eaglecrestianForgedSet",
				name: "Eaglecrestian Forged Set",
			},
			{
				x: 280,
				y: 200,
				image: "eaglecrestianForgedSet",
				name: "Eaglecrestian Forged Set",
			},
			{
				x: 500,
				y: 200,
				image: "eaglecrestianForgedSet",
				name: "Eaglecrestian Forged Set",
			},
			{
				x: 720,
				y: 200,
				image: "eaglecrestianForgedSet",
				name: "Eaglecrestian Forged Set",
			},
			{
				x: 570,
				y: 90,
				image: "eaglecrestianForgedBow",
				name: "Eaglecrestian Forged Bow",
			},
			{
				x: 390,
				y: 210,
				image: "eaglecrestianForgedStaff",
				name: "Eaglecrestian Forged Staff",
			},
			{
				x: 210,
				y: 90,
				image: "eaglecrestianForgedSword",
				name: "Eaglecrestian Forged Sword",
			},
			{
				x: 636,
				y: 397,
				image: "anvil",
				name: "Anvil",
			},
			{
				x: 55,
				y: 690,
				image: "anvil",
				name: "Anvil",
			},
		],

	},

	eaglecrestElixirs: {
		id: 16,

		data: {
			name: "Eaglecrest Elixirs",
			subtitle: "Tamtam's tonics and other alchemania!",
			displayOnEnter: true,
		},

		indoors: true,

		tagGameAllowed: true,

		song_day: "assets/music/Eaglecrest.mp3",
		song_night: "assets/music/Eaglecrest.mp3",

		checkpoint: false,

		lootArea: "eaglecrest",

		mapData: {
			cols: 13,
			rows: 14,
			tsize: 60,
			tilesPerRow: 8,
			solidTiles: [1, 2, 3, 6, 7, 9, 10, 11, 13, 15, 17, 18, 19, 20, 21, 23, 25, 26, 27, 28, 29, 31, 33, 34, 35, 36, 37, 38, 39, 42, 43, 44, 45, 46, 47, 53, 55, 61, 65, 69, 73, 77, 82, 83],
			dayTiles: [11, 27, 34, 42, 7], // windows and lights
			nightTiles: [3, 19, 2, 18, 15],
			pathTiles: [5, 12, 41, 50, 51, 57, 58, 59, 60, 76],
			layers: [
				[6, 6, 6, 23, 47, 31, 55, 31, 55, 39, 6, 6, 6, 6, 7, 6, 31, 55, 39, 7, 39, 23, 47, 6, 7, 6, 6, 101, 6, 39, 23, 47, 23, 47, 31, 55, 6, 6, 6, 6, 10, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 46, 46, 46, 46, 46, 46, 46, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
				[],
			],
		},

		images: {
			tiles: {normal: "assets/tilemap/eaglecrest.png"},
			tamtam: {normal: "assets/npcs/tamtam.png"},
			potionStand: {normal: "assets/objects/potionStand.png"},
			cauldronEaglecrest: {normal: "assets/objects/cauldronEaglecrest.png"},
			yellowSnakeRight: {samhain: "assets/enemies/yellowSnake.png"},
			yellowSnakeLeft: {samhain: "assets/enemies/yellowSnake.png", flip: "vertical"},
		},

		callAreaJoinOnInit: true,
		onAreaJoin: function () {
			// samhain snakes
			if (Event.event === "Samhain" && Player.quests.completedQuestArray.includes("Overdraft")) {
				let no = Random(5,15); // num of snakes
				for (let i = 0; i < no; i++) {
					Game.villagers.push(new Villager(Game.prepareNPC({
						template: EnemyTemplates.eaglecrest.snake,
					}, "villagers")));
				}
			}
		},

		areaTeleports: [
			{
				// teleport to eaglecrest east
				x: 390,
				y: 889,
				width: 240,
				height: 2,
				teleportTo: "eaglecrestEast",
				destinationX: 510,
				destinationY: 280,
			},
			{
				// teleport to storerooms
				x: 90,
				y: 145,
				width: 60,
				height: 2,
				teleportTo: "eaglecrestElixirsStorerooms",
				destinationX: 292,
				destinationY: 360,
				teleportCondition: function () {
					return Player.quests.activeQuestArray.includes("Cat Life");
				},
				teleportFailText: "<b>Alchemist Tamtam</b>: <sup>Nooo!</sup> You can't go into the storerooms!!!!",
			},
		],

		villagerData: {
			minPeople: 0,
			maxPeople: 2,
			locations: [
				{
					x: 39,
					y: 380,
					width: 702,
					height: 392,
				},
			],
		},

		npcs: [
			{
				x: 340,
				y: 322,
				image: "tamtam",
				crop: {height: 76},
				name: "Alchemist Tamtam",
				hostility: "friendly",
				level: 40,
				stats: {
					maxHealth: 250,
					defence: 4,
				},
				roles: [
					{
						sold: [
							{item: Items.consumable[17], cost: 2, costCurrency: 5, eventRequirement: "Christmas"}, // Christmas Potion
							{item: Items.consumable[4], cost: 2}, // potion of health I
							{item: Items.consumable[3], cost: 3}, // potion of swiftness I
							{item: Items.consumable[2], cost: 4}, // potion of strength I
							{item: Items.consumable[23], cost: 4}, // potion of evasion I
							{item: Items.consumable[24], cost: 4}, // potion of regeneration I
							{item: Items.consumable[25], cost: 3, condition: function () { // potion of fire resistance
								return Player.quests.questProgress.eaglecrestFirePotionUnlocked === true;
							}},
						],
						role: "merchant",
						shopGreeting: "There's a potion for you, and you, and youuuuu!",
					},
					{
						role: "text",
						chooseText: "Do you have a potion of fire resistance?",
						chat: "Fireeeeeeeeeee! <sub>Oh noooooo.</sub> Wotcha gonna do with that?<br><br><em>Tamtam's tail droops down.</em><br><br><sub>Uhhhhhhhh...</sub> We need more <strong>Fireroot</strong> for that. Haven't had it here for years. If you really need the potion you could bring some Fireroot over from <strong>Eaglecrest Bazaar</strong> on the west street. But <sub>uhhh</sub> it's dangerous. And on fire.<br>Be quick!",
						showCloseButton: false,
						buttons: ["Close"],
						forceChoose: true, // forces choose dom
						functions: [function () {
							Player.quests.npcProgress.eaglecrestLoggingCamp[24] = 3;
							Dom.closePage("textPage");
							Dom.quests.active();
						}],
						roleRequirement: function () {
							return Player.quests.npcProgress.eaglecrestLoggingCamp[24] === 2;
						}
					},
					{
						role: "function",
						chooseText: "Here is a fireroot",
						onClick: function () {
							if (Dom.inventory.check(28, "item")) {
                                Dom.inventory.removeById(28, "item");
                                Dom.inventory.give(Items.consumable[25]);
                                Dom.reputation.give("eaglecrestCity", 20);
                                Player.quests.npcProgress.eaglecrestLoggingCamp[24] = 4;
								Player.quests.questProgress.eaglecrestFirePotionUnlocked = true;
                                Dom.text.page("Alchemist Tamtam", "<em>Tamtam's tail wags vivaciously.</em><br><br>You're baaaaack!!! And not on fire!!! Well doneeeee!!! Fire resistance potion for youuuuuuuu!!! <sup>Fireeeeeeeeeee!<sup>", true);
                            }
                            else {
                                Dom.text.page("Alchemist Tamtam", "A fireroot???<br><br><em>Tamtam sniffs around you profusely however does not find any fireroot, rather some ashes of an exploded one. You were too slow!</em><br><br>Are you tricking me??? There's no fireroot here!", true);
                            }
						},
						forceChoose: true, // forces choose dom
						roleRequirement: function () {
							return Player.quests.npcProgress.eaglecrestLoggingCamp[24] === 3 && Dom.inventory.check(28, "item");
						}
					},
				],
				chat: {
					chooseChat: "Loooooking good my friend! Wanna buy a potion?",
					shopLeave: "Baiiiiii!",
					inventoryFull: "You have no space for that one!",
					tooPoor: "You need more gold! <sup>Gold! <sup>Goooooold!</sup></sup>",
					areaJoin: "Hellooooo! Welcome to Eaglecrest Elixirs! You look like you could do with one of Tamtam's tonics!"
				},
			},
		],

		things: [
			{
				x: 240,
				y: 333,
				image: "potionStand",
				name: "Potion Stand",
			},
			{
				x: 490,
				y: 333,
				image: "potionStand",
				name: "Potion Stand",
			},
			{
				x: [720, 730, 600],
				y: [600, 285, 280],
				image: "cauldronEaglecrest",
				name: "Cauldron",
			},
		],

	},

	eaglecrestBazaar: {
		id: 17,

		data: {
			name: "Eaglecrest Bazaar",
			subtitle: "Various goods from all corners of Antorax!",
			displayOnEnter: true,
		},

		indoors: true,

		tagGameAllowed: true,

		song_day: "assets/music/Eaglecrest.mp3",
		song_night: "assets/music/Eaglecrest.mp3",

		checkpoint: false,

		lootArea: "eaglecrest",

		mapData: {
			cols: 13,
			rows: 14,
			tsize: 60,
			tilesPerRow: 8,
			solidTiles: [1, 2, 3, 6, 7, 9, 10, 11, 13, 15, 17, 18, 19, 20, 21, 23, 25, 26, 27, 28, 29, 31, 33, 34, 35, 36, 37, 38, 39, 42, 43, 44, 45, 46, 47, 53, 55, 61, 65, 69, 73, 77, 82, 83],
			dayTiles: [11, 27, 34, 42, 7], // windows and lights
			nightTiles: [3, 19, 2, 18, 15],
			pathTiles: [5, 12, 41, 50, 51, 57, 58, 59, 60, 76],
			layers: [
				[6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 6, 6, 6, 6, 7, 6, 6, 6, 6, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 46, 46, 46, 46, 46, 46, 46, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
				[],
			],
		},

		images: {
			tiles: {normal: "assets/tilemap/eaglecrest.png"},
			barda: {normal: "assets/npcs/barda.png"},
			wardrobeClosed: {normal: "assets/objects/wardrobeClosed.png"},
			wardrobeOpen1: {normal: "assets/objects/wardrobeOpen1.png"},
			wardrobeOpen2: {normal: "assets/objects/wardrobeOpen2.png"},
			crate: {normal: "assets/objects/crate.png"},
			eaglecrestBanner: {normal: "assets/objects/eaglecrestBanner.png"},
			table: {normal: "assets/objects/table.png"},
			largeTable: {normal: "assets/objects/largeTable.png"},
			gargoyle: {normal: "assets/objects/gargoyle.png"},
			sheepRight: {normal: "./assets/enemies/sheep.png"},
			sheepLeft: {normal: "./assets/enemies/sheep.png", flip: "vertical"},
			dummy: {normal: "./assets/enemies/dummy.png"},
			dummyCorpse: {normal: "assets/corpses/dummy.png", christmas: "assets/corpses/dummy-christmas.png"},
			yellowSnakeRight: {samhain: "assets/enemies/yellowSnake.png"},
			yellowSnakeLeft: {samhain: "assets/enemies/yellowSnake.png", flip: "vertical"},
			eaglecrestGhost: {samhain: "assets/enemies/eaglecrestGhost.png"},
			eaglecrestGhost2: {samhain: "assets/enemies/eaglecrestGhost2.png"},
			crateSamhain: {samhain: "assets/objects/crateSamhain.png"},
			melee: {samhain: "assets/projectiles/melee.png"},
		},

		callAreaJoinOnInit: true,
		onAreaJoin: function () {
			// samhain snakes
			if (Event.event === "Samhain" && Player.quests.completedQuestArray.includes("Overdraft")) {
				let no = Random(10,20); // num of snakes
				for (let i = 0; i < no; i++) {
					Game.villagers.push(new Villager(Game.prepareNPC({
						template: EnemyTemplates.eaglecrest.snake,
					}, "villagers")));
				}
			}
		},

		callAreaLeaveOnLogout: true,
		onAreaLeave: function (logout) {
			Player.quests.questProgress.bazaarCrateGhosts = false;
		},

		areaTeleports: [
			{
				// teleport to eaglecrest west
				x: 390,
				y: 889,
				width: 240,
				height: 2,
				teleportTo: "eaglecrestWest",
				destinationX: 510,
				destinationY: 280,
			},
		],

		villagerData: {
			minPeople: 0,
			maxPeople: 2,
			locations: [
				{
					x: 39,
					y: 380,
					width: 702,
					height: 392,
				},
			],
		},

		npcs: [
			{
				x: 450,
				y: 328,
				image: "barda",
				crop: {height: 64},
				name: "Shopkeeper Barda",
				hostility: "friendly",
				level: 20,
				stats: {
					maxHealth: 150,
					defence: 2,
				},
				roles: [
					{
						role: "text",
						chooseText: "Explain the bank situation to Barda.",
						chat: `A request, guest?<br><br>
Hmm, the Eaglecrest Bank? Can’t say I’ve been there lately. They’re a bunch of crooks in my books and believe me, it takes one to know one… no no, forget I said that.<br><br>
Wait… I remember! Nothing harder than outsmarting Barda! <b>Gildo Cleftbeard</b>’s got one of my monocles: gold and bold and recently sold. He never removes it, or so I’ve been told. It’s my priciest ware: he couldn’t have got it without breaking the bank… literally.<br><br>
Last I saw him, he was visiting the <b>Eaglecrest Plains</b> to the <b>south</b>. Could a reunion be on the cards?`,
						buttons: ["Thanks"],
						showCloseButton: false,
						forceChoose: true, // forces choose dom
						functions: [function () {
							// close page
							Dom.closePage("textPage");
							// quest progress
							Player.quests.npcProgress.eaglecrest[2] = 2;
							Dom.quests.active();
						}],
						roleRequirement: function () {
							return Player.quests.npcProgress.eaglecrest[2] === 1;
						},
					},
					{
						sold: [
							Player.class === "k" ? {item: Items.sword[14], cost: 10}
							: Player.class === "m" ? {item: Items.staff[12], cost: 10}
							: {item: Items.bow[12], cost: 10}, // class weapons

							{item: Items.helm[21], cost: 99}, // monocle

							{item: Items.item[28], cost: 1, condition: function () { // fireroot
								return !Dom.inventory.check(28, "item");
							}},

							{item: Items.tool[0], cost: 4}, // animal lead

							{item: Items.helm[11], cost: 7, condition: function () { // Umbrella Hat
								return Weather.weatherType === "rain";
							}},

							{item: Items.boots[10], cost: 7, condition: function () { // Wellington Boots
								return Weather.weatherType === "rain";
							}},

							{item: Items.bag[5], cost: 10}, // brown backsack

							{item: Items.consumable[22], cost: 5}, // tag
						],
						role: "merchant",
						shopGreeting: [
							{
								text: "If you're buying another fireroot, I would recommend using a potion of swiftness this time.",
								condition: function () {
									return Player.quests.npcProgress.eaglecrestLoggingCamp[24] === 3 && Player.quests.questProgress.firerootFailed;
								},
							},
							{
								text: "Ready to barter with Barda?",
							},
						],
					},
				],
				chat: {
					chooseChat: "My shop's a given, now make a decision.",
					shopLeave: "Good luck with your quest, guest.",
					inventoryFull: "Unless the cards have bluffed... your inventory is stuffed.",
					tooPoor: "No gold? Get out of my shop.",
					noLongerAvailable: "", //tbd
					areaJoin: "The best shop in west Eaglecrest, no jest.",
				},
			},
		],

		things: [
			{
				x: 180,
				y: 170,
				image: "wardrobeOpen1",
				name: "Wardrobe"
			},
			{
				x: 390,
				y: 170,
				image: "wardrobeClosed",
				name: "Wardrobe"
			},
			{
				x: 600,
				y: 170,
				image: "wardrobeOpen2",
				name: "Wardrobe"
			},
			{
				x: 60,
				y: 225,
				orderOffsetY: -50,
				image: "crate",
				name: "Crate"
			},
			{
				x: 320,
				y: 220,
				orderOffsetY: -50,
				image: "crate",
				name: "Crate"
			},
			{
				x: 670,
				y: 220,
				orderOffsetY: -50,
				image: "crate",
				name: "Crate"
			},
			{
				x: 740,
				y: 224,
				orderOffsetY: -50,
				image: "crate",
				name: "Crate"
			},
			{
				x: 450,
				y: 165,
				orderOffsetY: -50,
				image: "eaglecrestBanner",
				name: "Eaglecrest Banner"
			},
			{
				x: 650,
				y: 800,
				orderOffsetY: -40,
				image: "largeTable",
				name: "Table"
			},
			{
				x: 50,
				y: 610,
				image: "wardrobeClosed",
				name: "Wardrobe"
			},
			{
				x: 150,
				y: 690,
				orderOffsetY: -10,
				image: "table",
				name: "Table"
			},
			{
				x: 600,
				y: 350,
				image: "eaglecrestBanner",
				name: "Eaglecrest Banner"
			},
			{
				x: 220,
				y: 350,
				image: "gargoyle",
				name: "Monastery Gargoyle Head",
				crop: {
					width: 60, // crop out extended bit for attaching to wall
				}
			},
			{
				x: 10,
				y: 370,
				orderOffsetY: -10,
				image: "crate",
				name: "Crate"
			},
			{
				x: 490,
				y: 224,
				orderOffsetY: -50,
				image: "crateSamhain",
				onInteract: function () {
					if (!Player.quests.questProgress.bazaarCrateGhosts) { // reset when area is left
						Game.enemies.push(new Enemy(Game.prepareNPC({
							x: 707,
							y: 263,
							template: EnemyTemplates.eaglecrest.phantom2,
						}, "enemies")));
						Game.enemies.push(new Enemy(Game.prepareNPC({
							x: 230,
							y: 481,
							template: EnemyTemplates.eaglecrest.phantom1,
						}, "enemies")));
						Game.enemies.push(new Enemy(Game.prepareNPC({
							x: 112,
							y: 112,
							template: EnemyTemplates.eaglecrest.phantom2,
						}, "enemies")));
						Game.enemies.push(new Enemy(Game.prepareNPC({
							x: 482,
							y: 571,
							template: EnemyTemplates.eaglecrest.phantom1,
						}, "enemies")));
						Game.enemies[Game.enemies.length-1].say("What do you need that for?");
						Game.enemies[Game.enemies.length-2].say("There's so much else here.. why do you need this?", 1333);
						Player.quests.questProgress.bazaarCrateGhosts = true;
					}
					Game.hero.channel(function () {
						if (!Player.quests.questProgress.bazaarCrate) {
							if (Dom.inventory.give(Items.item[38]) === false) {
								Dom.chat.insert("Your inventory is full! Try again when you have space.");
							}
							else {
								Player.quests.questProgress.bazaarCrate = true;
								Dom.chat.insert("You found a <b>Blood-Red Crystal</b> in the crate.");
							}
						}
						else {
							Dom.chat.insert("You have already looted that crate!");
						}
					}, [], 1666, "Rummaging through crate");
				},
                canBeShown: function () {
                    return Player.quests.completedQuestArray.includes("Snakes and the City");
                }
			},
		],

		dummies: [
			{
				x: 540,
				y: 570,
				template: EnemyTemplates.dummy
			},
		],

		villagers: [
			{
				image: "sheepRight",
				name: "Bella",
				level: 1,
				stats: {
					maxHealth: 20,
					walkSpeed: 100,
				},
				hostility: "friendly",
				chat: {
					notUnlockedRoles: "Baaaaaa"
				},
				rotationImages: {
					left: "sheepLeft",
					right: "sheepRight"
				},
				canBeOnLead: true,
			},
		],
	},

	eaglecrestGraveyard: {
		id: 18,

		data: {
			name: "Eaglecrest Monastery",
			displayOnEnter: true,
		},

		indoors: false,

		tagGameAllowed: true,

		song_day: "assets/music/Eaglecrest.mp3",
		song_night: "assets/music/Eaglecrest.mp3",

		checkpoint: false,

		lootArea: "eaglecrest",

		mapData: {
			cols: 50,
			rows: 20,
			tsize: 60,
			tilesPerRow: 8,
			solidTiles: [1, 2, 3, 6, 7, 9, 10, 11, 13, 15, 17, 18, 19, 20, 21, 23, 25, 26, 27, 28, 29, 31, 33, 34, 35, 36, 37, 38, 39, 42, 43, 44, 45, 46, 47, 53, 55, 61, 65, 69, 73, 77, 82, 83],
			dayTiles: [11, 27, 34, 42, 7], // windows and lights
			nightTiles: [3, 19, 2, 18, 15],
			pathTiles: [5, 12, 41, 50, 51, 57, 58, 59, 60, 76],
			layers: [
				[43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 65, 82, 65, 65, 65, 65, 65, 65, 65, 82, 65, 65, 65, 65, 65, 82, 65, 65, 65, 65, 65, 65, 65, 82, 65, 43, 43, 43, 43, 43, 11, 43, 43, 43, 11, 43, 43, 43, 11, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 65, 82, 65, 65, 65, 65, 65, 65, 65, 82, 65, 65, 65, 65, 65, 82, 65, 65, 65, 65, 65, 65, 65, 82, 65, 43, 43, 11, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 36, 36, 36, 36, 36, 36, 36, 36, 36, 65, 82, 65, 28, 28, 65, 28, 28, 65, 82, 65, 65, 65, 65, 65, 82, 65, 28, 28, 65, 28, 28, 65, 82, 65, 43, 43, 43, 43, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 36, 36, 36, 36, 36, 36, 36, 36, 36, 65, 82, 65, 28, 28, 65, 28, 28, 65, 82, 65, 53, 69, 61, 65, 82, 65, 28, 28, 65, 28, 28, 65, 82, 65, 74, 74, 74, 74, 49, 49, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 44, 52, 44, 44, 44, 44, 44, 52, 44, 65, 82, 65, 28, 28, 65, 28, 28, 65, 82, 65, 37, 21, 45, 65, 82, 65, 28, 28, 65, 28, 28, 65, 82, 65, 49, 49, 49, 49, 49, 81, 67, 66, 66, 49, 49, 49, 49, 49, 49, 49, 65, 82, 65, 28, 28, 28, 65, 82, 65, 65, 82, 65, 28, 28, 65, 28, 28, 65, 82, 65, 13, 21, 29, 65, 82, 65, 28, 28, 65, 28, 28, 65, 82, 65, 49, 49, 66, 49, 49, 66, 66, 66, 49, 49, 49, 49, 49, 81, 66, 49, 65, 82, 65, 28, 28, 28, 65, 82, 65, 65, 82, 65, 73, 73, 65, 73, 73, 65, 82, 65, 13, 77, 29, 65, 82, 65, 73, 73, 65, 73, 73, 65, 82, 65, 49, 66, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 67, 75, 67, 49, 65, 82, 65, 73, 73, 73, 65, 82, 65, 65, 82, 65, 65, 65, 65, 65, 65, 65, 82, 65, 13, 21, 29, 65, 82, 65, 65, 65, 65, 65, 65, 65, 82, 65, 49, 66, 49, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 66, 49, 49, 83, 49, 49, 49, 49, 49, 83, 81, 49, 83, 66, 66, 67, 49, 49, 49, 49, 83, 49, 57, 41, 59, 49, 83, 49, 49, 49, 49, 49, 49, 49, 83, 67, 49, 49, 49, 49, 49, 49, 49, 49, 49, 67, 75, 49, 49, 49, 66, 49, 49, 49, 49, 49, 49, 49, 49, 66, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 57, 41, 59, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 49, 49, 49, 49, 49, 57, 41, 59, 49, 66, 49, 49, 49, 49, 49, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 75, 81, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 67, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 4, 12, 41, 59, 49, 75, 49, 49, 49, 49, 66, 67, 49, 49, 49, 49, 66, 49, 49, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 5, 41, 41, 59, 67, 49, 49, 49, 49, 66, 81, 49, 49, 49, 49, 49, 49, 49, 49, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 59, 66, 49, 49, 49, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 50, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 66, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 67, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 49, 49, 49, 49, 49, 75, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 49, 49, 49, 49, 75, 81, 49, 49, 49, 66, 67, 81, 49, 49, 49, 49, 49, 75, 49, 49, 49, 66, 49, 49, 49, 49, 66, 66, 75, 67, 66, 81, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 67, 49, 49, 66, 49, 49, 49, 49, 66, 67, 49, 49, 49, 49, 49, 49, 66, 66, 49, 49, 49, 49, 67, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 75, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 49, 49, 49, 49, 49, 49, 49, 49],
				[],
			],
			interactWithTile: function (tileNum, x, y) {
				// pick up flowers
				if (tileNum === 81) { // lavender
					// channel for 1 second
					Game.hero.channel(function () {
						// give flower to player
						Dom.inventory.give(Items.item[30]);
						// remove flower from tilemap
						map.setTile(0, map.getCol(x), map.getRow(y), 66);
					}, [], 1000, "Flower Picking");
				}
				else if (tileNum === 75) { // marigold
					// channel for 1 second
					Game.hero.channel(function () {
						// give flower to player
						Dom.inventory.give(Items.item[31]);
						// remove flower from tilemap
						map.setTile(0, map.getCol(x), map.getRow(y), 66);
					}, [], 1000, "Flower Picking");
				}
				else if (tileNum === 67) { // daisy
					// channel for 1 second
					Game.hero.channel(function () {
						// give flower to player
						Dom.inventory.give(Items.item[32]);
						// remove flower from tilemap
						map.setTile(0, map.getCol(x), map.getRow(y), 66);
					}, [], 1000, "Flower Picking");
				}
			},
		},

		images: {
			tiles: {normal: "assets/tilemap/eaglecrest.png"},
			gravestone1: {normal: "assets/objects/gravestone1.png"},
			gravestone2: {normal: "assets/objects/gravestone2.png"},
			gravestone3: {normal: "assets/objects/gravestone3.png"},
			gargoyleLeft: {normal: "assets/objects/gargoyle.png"},
			gargoyleRight: {normal: "assets/objects/gargoyle.png", flip: "vertical"},
			gargoyleWaterLeft1: {normal: "assets/objects/waterShoot1.png"},
			gargoyleWaterLeft2: {normal: "assets/objects/waterShoot2.png"},
			gargoyleWaterLeft3: {normal: "assets/objects/waterShoot3.png"},
			gargoyleWaterRight1: {normal: "assets/objects/waterShoot1.png", flip: "vertical"},
			gargoyleWaterRight2: {normal: "assets/objects/waterShoot2.png", flip: "vertical"},
			gargoyleWaterRight3: {normal: "assets/objects/waterShoot3.png", flip: "vertical"},
			yellowSnakeRight: {samhain: "assets/enemies/yellowSnake.png"},
			yellowSnakeLeft: {samhain: "assets/enemies/yellowSnake.png", flip: "vertical"},
			eaglecrestGhost: {samhain: "assets/enemies/eaglecrestGhost.png"},
			eaglecrestGhost2: {samhain: "assets/enemies/eaglecrestGhost2.png"},
			crateSamhain: {samhain: "assets/objects/crateSamhain.png"},
			melee: {samhain: "assets/projectiles/melee.png"},
		},

		callAreaJoinOnInit: true,
		onAreaJoin: function () {
			// samhain snakes and lights
			if (Event.event === "Samhain" && Player.quests.completedQuestArray.includes("Overdraft")) {
				let no = Random(10,30); // num of snakes
				for (let i = 0; i < no; i++) {
					Game.villagers.push(new Villager(Game.prepareNPC({
						template: EnemyTemplates.eaglecrest.snake,
					}, "villagers")));
				}

				if (Player.quests.questProgress.eaglecrestGraveyardSamhainLights) {
					map.eaglecrestSamhainLights();
				}
			}
		},

		callAreaLeaveOnLogout: true,
		onAreaLeave: function (logout) {
			// samhain
			Player.quests.questProgress.graveyardCrateGhosts = false;
		},

		areaTeleports: [
			{
				// teleport to eaglecrest east
				x: -20,
				y: 810,
				width: 2,
				height: 360,
				teleportTo: "eaglecrestEast",
				destinationX: 1840,
				playerAdjustY: -310,
			},
			{
				// teleport to eaglecrest monastery
				x: 2010,
				y: 384,
				width: 60,
				height: 2,
				teleportTo: "eaglecrestMonastery",
				destinationX: 1100,
				destinationY: 1730,
			},
		],

		villagerData: {
			minPeople: 0,
			maxPeople: 3,
			locations: [
				{
					x: 39,
					y: 200,
					width: 642,
					height: 872,
				},
				{
					x: 39,
					y: 500,
					width: 2922,
					height: 572,
				},
			],
		},

		things: [
			{
				// id: 0,
				x: 684,
				y: 259,
				orderOffsetY: 100,
				image: "gargoyleLeft",
				name: "Monastery Gargoyle",
			},
			{
				// id: 1,
				x: 2796,
				y: 100,
				orderOffsetY: 100,
				image: "gargoyleRight",
				name: "Monastery Gargoyle",
			},
			{
				// id: 2,
				// if this id is changed, change the onRainStart function as well
				x: 585,
				y: 361,
				image: "gargoyleWaterLeft1",
				name: "Gargoyle Water",
				animateFunction: function () {
					if (this.imageName === "gargoyleWaterLeft1") {
						this.setImage("gargoyleWaterLeft2");
					}
					else if (this.imageName === "gargoyleWaterLeft2") {
						this.setImage("gargoyleWaterLeft3");
					}
					else if (this.imageName === "gargoyleWaterLeft3") {
						this.setImage("gargoyleWaterLeft1");
					}
				},
				animationFrameTime: 200,
				canBeShown: function () {
					return Weather.weatherType === "rain";
				},
			},
			{
				// id: 3,
				// if this id is changed, change the onRainStart function as well
				x: 2896,
				y: 202,
				image: "gargoyleWaterRight1",
				name: "Gargoyle Water",
				animateFunction: function () {
					if (this.imageName === "gargoyleWaterRight1") {
						this.setImage("gargoyleWaterRight2");
					}
					else if (this.imageName === "gargoyleWaterRight2") {
						this.setImage("gargoyleWaterRight3");
					}
					else if (this.imageName === "gargoyleWaterRight3") {
						this.setImage("gargoyleWaterRight1");
					}
				},
				animationFrameTime: 200,
				canBeShown: function () {
					return Weather.weatherType === "rain";
				},
			},
			{
				x: 208,
				y: 620,
				image: "gravestone1",
				name: "Gravestone",
			},
			{
				x: 280,
				y: 360,
				image: "gravestone3",
				name: "Gravestone",
			},
			{
				x: 440,
				y: 1000,
				image: "gravestone2",
				name: "Gravestone",
			},
			{
				x: 688,
				y: 550,
				image: "gravestone2",
				name: "Gravestone",
			},
			{
				x: 804,
				y: 1037,
				image: "gravestone3",
				name: "Gravestone",
			},
			{
				x: 1354,
				y: 980,
				image: "gravestone1",
				name: "Gravestone",
			},
			{
				x: 1430,
				y: 990,
				image: "gravestone3",
				name: "Gravestone",
			},
			{
				x: 1524,
				y: 601,
				image: "gravestone1",
				name: "Gravestone",
			},
			{
				x: 1719,
				y: 1144,
				image: "gravestone2",
				name: "Gravestone",
			},
			{
				x: 2332,
				y: 1001,
				image: "gravestone1",
				name: "Gravestone",
			},
			{
				x: 2435,
				y: 681,
				image: "gravestone3",
				name: "Gravestone",
			},
			{
				x: 2702,
				y: 802,
				image: "gravestone2",
				name: "Gravestone",
			},
			{
				x: 2964,
				y: 642,
				image: "gravestone3",
				name: "Gravestone",
			},
			{
				// wrong crates
				x: [186, 800, 1110, 1740, 2435, 2815],
				y: [620, 1000, 490, 1160, 650, 362],
				orderOffsetY: -50,
				image: "crateSamhain",
				onInteract: function () {
					Game.hero.channel(function () {
						let ghostShown = Random(0,1)
						console.log(ghostShown);
						if (ghostShown === 1) {
							let imageNumber = Random(1,2);
							Game.enemies.push(new Enemy(Game.prepareNPC({
								x: Game.hero.x + Random(-150, 150),
								y: Game.hero.y + Random(-150, 150),
								template: EnemyTemplates.eaglecrest["phantom"+imageNumber],
							}, "enemies")));
							let lineNumber = Random(0,3);
							let textLines = ["Why do you awaken me?", "What do you want..", "Leave me alone!", "Ugh."];
							Game.enemies[Game.enemies.length-1].say(textLines[lineNumber]);
						}
						Dom.chat.insert("That crate is empty!");
					}, [], 1666, "Rummaging through crate");
				},
                canBeShown: function () {
                    return Player.quests.completedQuestArray.includes("Snakes and the City");
                }
			},
			{
				// correct crate
				x: 2717,
				y: 802,
				orderOffsetY: -50,
				image: "crateSamhain",
				onInteract: function () {
					if (!Player.quests.questProgress.graveyardCrateGhosts) { // reset each time the area is left
						Game.enemies.push(new Enemy(Game.prepareNPC({
							x: 2617,
							y: 802,
							template: EnemyTemplates.eaglecrest.phantom2,
						}, "enemies")));
						Game.enemies.push(new Enemy(Game.prepareNPC({
							x: 2917,
							y: 802,
							template: EnemyTemplates.eaglecrest.phantom1,
						}, "enemies")));
						Game.enemies[Game.enemies.length-1].say("Please.. don't do this...");
						Player.quests.questProgress.graveyardCrateGhosts = true;
					}
					Game.hero.channel(function () {
						if (!Player.quests.questProgress.graveyardCrate) {
							if (Dom.inventory.give(Items.item[38]) === false) {
								Dom.chat.insert("Your inventory is full! Try again when you have space.");
							}
							else {
								Player.quests.questProgress.graveyardCrate = true;
								Dom.chat.insert("You found a <b>Blood-Red Crystal</b> in the crate.");
							}
						}
						else {
							Dom.chat.insert("You have already looted that crate!");
						}
					}, [], 1666, "Rummaging through crate");
				},
                canBeShown: function () {
                    return Player.quests.completedQuestArray.includes("Snakes and the City");
                }
			},
		],

		onRainStart: function () {
			// add water from gargoyles in 10 seconds
			Game.setTimeout(function () {
				// check area is still the same
				if (Game.areaName === "eaglecrestGraveyard") {
					// add them
					if (Game.prepareNPC(Areas.eaglecrestGraveyard.things[2], "things")) {
						Game.things.push(new Thing(Areas.eaglecrestGraveyard.things[2]));
					}
					if (Game.prepareNPC(Areas.eaglecrestGraveyard.things[3], "things")) {
						Game.things.push(new Thing(Areas.eaglecrestGraveyard.things[3]));
					}
				}
			}, 10000);
		},

		onRainStop: function () {
			// remove water from gargoyles in 10 seconds
			Game.setTimeout(function () {
				// check area is still the same
				if (Game.areaName === "eaglecrestGraveyard") {
					// find all water to be removed
					let waterToRemove = Game.things.filter(thing => thing.name === "Gargoyle Water");
					for (let i = 0; i < waterToRemove.length; i++) {
						// remove them
						Game.removeObject(waterToRemove[i].id, "things");
					}
				}
			}, 10000);
		},
	},

	eaglecrestMonastery: {
		id: 19,

		data: {
			name: "Eaglecrest Monastery",
			displayOnEnter: false,
		},

		indoors: true,

		tagGameAllowed: true,

		song_day: "assets/music/Eaglecrest.mp3",
		song_night: "assets/music/Eaglecrest.mp3",

		checkpoint: false,

		lootArea: "eaglecrest",

		mapData: {
			cols: 37,
			rows: 30,
			tsize: 60,
			tilesPerRow: 8,
			solidTiles: [1, 2, 3, 6, 7, 9, 10, 11, 13, 15, 17, 18, 19, 20, 21, 23, 25, 26, 27, 28, 29, 31, 33, 34, 35, 36, 37, 38, 39, 42, 43, 44, 45, 46, 47, 53, 55, 61, 65, 69, 70, 73, 77, 82, 83],
			dayTiles: [11, 27, 34, 42, 7], // windows and lights
			nightTiles: [3, 19, 2, 18, 15],
			pathTiles: [5, 12, 41, 50, 51, 57, 58, 59, 60, 76],
			layers: [
				[82, 65, 65, 65, 65, 65, 65, 65, 82, 65, 65, 65, 65, 65, 65, 65, 65, 65, 82, 65, 65, 65, 65, 65, 65, 65, 65, 65, 82, 65, 65, 65, 65, 65, 65, 65, 82, 82, 65, 28, 28, 65, 28, 28, 65, 82, 65, 65, 28, 28, 65, 28, 28, 65, 65, 82, 65, 65, 28, 28, 65, 28, 28, 65, 65, 82, 65, 28, 28, 65, 28, 28, 65, 82, 82, 65, 28, 28, 65, 28, 28, 65, 82, 65, 65, 28, 28, 65, 28, 28, 65, 65, 82, 65, 65, 28, 28, 65, 28, 28, 65, 65, 82, 65, 28, 28, 65, 28, 28, 65, 82, 82, 65, 28, 28, 65, 28, 28, 65, 82, 65, 65, 28, 28, 65, 28, 28, 65, 65, 82, 65, 65, 28, 28, 65, 28, 28, 65, 65, 82, 65, 28, 28, 65, 28, 28, 65, 82, 82, 65, 28, 28, 65, 28, 28, 65, 82, 84, 65, 28, 28, 65, 28, 28, 65, 84, 82, 84, 65, 28, 28, 65, 28, 28, 65, 84, 82, 65, 28, 28, 65, 28, 28, 65, 82, 82, 65, 73, 73, 65, 73, 73, 65, 82, 65, 65, 73, 73, 65, 73, 73, 65, 65, 82, 65, 65, 73, 73, 65, 73, 73, 65, 65, 82, 65, 73, 73, 65, 73, 73, 65, 82, 70, 62, 62, 62, 62, 62, 62, 62, 70, 62, 62, 62, 62, 62, 62, 62, 62, 62, 70, 62, 62, 62, 62, 62, 62, 62, 62, 62, 70, 62, 62, 62, 62, 62, 62, 62, 70, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 62, 62, 62, 62, 62, 62, 62, 62, 62, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 84, 65, 65, 84, 65, 65, 84, 65, 65, 84, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 84, 65, 65, 84, 65, 65, 84, 65, 65, 84, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 84, 65, 65, 65, 84, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 65, 65, 65, 65, 65, 65, 65, 65, 65, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62],
				[],
			],
		},

		images: {
			tiles: {normal: "assets/tilemap/eaglecrest.png"},
			kempEau: {normal: "assets/npcs/kemp-Eau.png"},
			ronson: {normal: "assets/npcs/ronson.png"},
			sollwyn: {normal: "assets/npcs/sollwyn.png"},
			marAsh: {normal: "assets/npcs/mar'Ash.png"},
			archbishop: {normal: "assets/npcs/archbishop.png"},
			stairsLeft: {normal: "assets/objects/stairsLeft.png"},
			stairsRight: {normal: "assets/objects/stairsRight.png"},
			cat1Left: {normal: "./assets/npcs/cat1.png"},
			cat1Right: {normal: "./assets/npcs/cat1.png", flip: "vertical"},
			yellowSnakeRight: {samhain: "assets/enemies/yellowSnake.png"},
			yellowSnakeLeft: {samhain: "assets/enemies/yellowSnake.png", flip: "vertical"},
		},

		callAreaJoinOnInit: true,
		onAreaJoin: function () {
			// samhain snakes
			if (Event.event === "Samhain" && Player.quests.completedQuestArray.includes("Overdraft")) {
				let no = Random(10,30); // num of snakes
				for (let i = 0; i < no; i++) {
					Game.villagers.push(new Villager(Game.prepareNPC({
						template: EnemyTemplates.eaglecrest.snake,
					}, "villagers")));
				}
			}
		},

		areaTeleports: [
			{
				// teleport to eaglecrest graveyard
				x: 1110,
				y: 1850,
				width: 2220,
				height: 2,
				teleportTo: "eaglecrestGraveyard",
				destinationX: 2010,
				destinationY: 450,
			},
		],

		villagerData: {
			minPeople: 0,
			maxPeople: 3,
			locations: [
				{
					x: 39,
					y: 320,
					width: 2142,
					height: 212,
				},
				{
					x: 39,
					y: 800,
					width: 2142,
					height: 872,
				},
			],
		},

		npcs: [

			{
				x: 525,
				y: 1082,
				image: "kempEau",
				name: "Priest Kemp-Eau",
				hostility: "friendly",
				level: 30,
				stats: {
					maxHealth: 200,
					defence: 3,
				},
				roles: [
					{
						quest: Quests.eaglecrest[0],
						role: "questFinish",
					},
				],
				chat: {
					questProgress: "",
					questComplete: "",
					inventoryFull: "",
					notUnlockedRoles: "",
				},
			},
			{
				x: 1925,
				y: 1600,
				image: "ronson",
				name: "Priestess Ronson",
				hostility: "friendly",
				level: 30,
				stats: {
					maxHealth: 200,
					defence: 3,
				},
				chat: {
					notUnlockedRoles: "<i>'thee, and no man shall set on thee to hurt thee: for I'</i>. Oh, sorry, I didn't see you there.",
				},
			},

			{
				x: 925,
				y: 1582,
				image: "sollwyn",
				name: "Priest Sollwyn",
				hostility: "friendly",
				level: 30,
				stats: {
					maxHealth: 200,
					defence: 3,
				},
				chat: {
					notUnlockedRoles: "",
				},
			},

			{
				x: 1525,
				y: 1282,
				image: "marAsh",
				name: "Priestess Mar'Ash",
				hostility: "friendly",
				level: 30,
				stats: {
					maxHealth: 200,
					defence: 3,
				},
				chat: {
					notUnlockedRoles: "",
				},
			},

			{
				x: 1225,
				y: 500,
				image: "archbishop",
				name: "Archbishop Lynch",
				hostility: "friendly",
				level: 50,
				stats: {
					maxHealth: 300,
					defence: 3,
				},
				roles: [
					{
						role: "spellChoice",
						roleRequirement: function () {
							return Player.level >= 7;
						},
						spells: Player.class === "k" ? [{spellId: 0, spellTier: 1},{spellId: 1, spellTier: 1},{spellId: 2, spellTier: 1}]
								: Player.class === "m" ? [{spellId: 3, spellTier: 1},{spellId: 4, spellTier: 1},{spellId: 5, spellTier: 1}]
								: Player.class === "a" ? [{spellId: 6, spellTier: 1},{spellId: 7, spellTier: 1},{spellId: 8, spellTier: 1}]
								: [],
					},
				],
				chat: {
					notUnlockedRoles: "May the Gods' light shine upon you, mortal.",
					spellChoiceText: "It appears you have been endowed with the ability to cast a spell. Unfortunately the relevant facilities in Eaglecrest are... preoccupied. But I will induct you in the time being. Please choose a spell you wish to be able to cast. You can return to me at any time if you wish to change your decision.<br><br><i>You can cast a spell by using your right-click mouse button.</i>",
				},
			},

		],

		things: [

			{
				x: 739,
				y: 785,
				z: -1,
				image: "stairsRight",
				name: "Stairs Right",
				crop: {
					y: 60,
					height: 230,
					width: 202,
				},
			},

			{
				x: 1481,
				y: 785,
				z: -1,
				image: "stairsLeft",
				name: "Stairs Left",
				crop: {
					height: 230,
					width: 202,
				},
			},

		],

		collisions: [
            {
                x: 746, // bottom of stairs
                y: 875,
                width: 180,
                height: 50,
            },
            {
                x: 1476, // bottom of stairs
                y: 875,
                width: 180,
                height: 50,
            },
        ],

        tripwires: [
			{
				// bottom of right stairs (to top)
				x: 636,
				y: 870,
				width: 2,
				height: 25,
				collisionType: "feet",
				onPlayerTouch: function () {
					if (Game.hero.moveTowards === undefined) {
						// walk up stairs
						Game.hero.direction = 4;
						Game.hero.moveTowards = {
							x: 880,
							y: Game.hero.y - 200,
							speedScalar: 0.6,
						};
						Game.hero.updateRotation();
					}
				}
			},
			{
				// top of right stairs (to bottom)
				x: 844,
				y: 690,
				width: 2,
				height: 25,
				collisionType: "feet",
				onPlayerTouch: function () {
					if (Game.hero.moveTowards === undefined) {
						// walk up stairs
						Game.hero.direction = 2;
						Game.hero.moveTowards = {
							x: 600,
							y: Game.hero.y + 200,
							speedScalar: 0.6,
						};
						Game.hero.updateRotation();
					}
				}
			},
			// left stairs
			{
				// bottom of left stairs (to top)
				x: 1584,
				y: 870,
				width: 2,
				height: 25,
				collisionType: "feet",
				onPlayerTouch: function () {
					if (Game.hero.moveTowards === undefined) {
						// walk up stairs
						Game.hero.direction = 2;
						Game.hero.moveTowards = {
							x: 1340,
							y: Game.hero.y - 200,
							speedScalar: 0.6,
						};
						Game.hero.updateRotation();
					}
				}
			},
			{
				// top of left stairs (to bottom)
				x: 1376,
				y: 690,
				width: 2,
				height: 25,
				collisionType: "feet",
				onPlayerTouch: function () {
					if (Game.hero.moveTowards === undefined) {
						// walk up stairs
						Game.hero.direction = 4;
						Game.hero.moveTowards = {
							x: 1620,
							y: Game.hero.y + 200,
							speedScalar: 0.6,
						};
						Game.hero.updateRotation();
					}
				}
			},
        ],


		villagers: [
			{
				image: "cat1Left",
        		rotationImages: {
            		left: "cat1Left",
            		right: "cat1Right"
        		},
                name: "Amelio",
                speciesTemplate: SpeciesTemplates.cat,
                canBeShown: function () {
                    return Player.quests.completedQuestArray.includes("Help! Lost Cat");
                }
			},
		],

	},

	//
	// plains
	//
	eaglecrestPlains: {
		id: 20,

		data: {
			name: "Eaglecrest Plains",
			level: "Level 5 - 10",
			territory: "Neutral",
			displayOnEnter: true,
		},

		tagGameAllowed: true,

		song_day: "assets/music/Eaglecrest.mp3",
		song_night: "assets/music/Eaglecrest.mp3",

		checkpoint: false,

		lootArea: "eaglecrest",

		mapData: {
			cols: 100,
			rows: 100,
			tsize: 60,
			tilesPerRow: 8,
			solidTiles: [1, 2, 3, 6, 7, 9, 10, 11, 13, 15, 17, 18, 19, 20, 21, 23, 25, 26, 27, 28, 29, 31, 33, 34, 35, 36, 37, 38, 39, 42, 43, 44, 45, 46, 47, 53, 55, 61, 65, 69, 70, 73, 77, 82, 83, 89, 90, 97, 98, 123, 131],
			dayTiles: [11, 27, 34, 42, 7], // windows and lights
			nightTiles: [3, 19, 2, 18, 15],
			pathTiles: [5, 12, 41, 50, 51, 57, 58, 59, 60, 76, 86, 87, 88, 91, 92, 93, 99, 107, 108, 109, 110, 111, 113, 115, 117, 118, 119, 121, 125, 126, 127, 129, 133, 134, 135, 137, 138, 139, 140, 141, 147, 148, 149],
			waterTiles: [32, 40, 48, 112, 120, 128],
			transparentTiles: [94, 95, 96, 102, 103, 104, 114, 116, 122, 124, 130, 132], // these tiles should be ignored when considering water etc, even when they're at the front of the canvas
			animateTiles: [{
				// river tiles
				tiles: [32, 40, 48],
				animateTime: 400,
			},{
				// rippling river tiles
				tiles: [112, 120, 128],
				animateTime: 200,
			}],
			numberOfLayers: 3,
			interactWithTile: function (tileNum, x, y) {
				// pick up flowers
				if (tileNum === 81) { // lavender
					// channel for 1 second
					Game.hero.channel(function () {
						// give flower to player
						Dom.inventory.give(Items.item[30]);
						// remove flower from tilemap
						map.setTile(0, map.getCol(x), map.getRow(y), 66);
					}, [], 1000, "Flower Picking");
				}
				else if (tileNum === 75) { // marigold
					// channel for 1 second
					Game.hero.channel(function () {
						// give flower to player
						Dom.inventory.give(Items.item[31]);
						// remove flower from tilemap
						map.setTile(0, map.getCol(x), map.getRow(y), 66);
					}, [], 1000, "Flower Picking");
				}
				else if (tileNum === 67) { // daisy
					// channel for 1 second
					Game.hero.channel(function () {
						// give flower to player
						Dom.inventory.give(Items.item[32]);
						// remove flower from tilemap
						map.setTile(0, map.getCol(x), map.getRow(y), 66);
					}, [], 1000, "Flower Picking");
				}
			},
			layers: [
				[49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 32, 32, 32, 32, 40, 49, 49, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 49, 49, 40, 40, 40, 40, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49,
            49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 32, 40, 40, 32, 40, 49, 49, 11, 43, 43, 43, 11, 43, 43, 43, 11, 43, 43, 43, 11, 43, 89, 90, 43, 11, 43, 43, 43, 11, 43, 43, 43, 11, 43, 43, 43, 11, 49, 49, 40, 40, 40, 40, 49, 49, 49, 49, 49, 49, 49, 49, 49, 75, 66, 66, 66, 66, 49, 49, 49, 49, 49, 67, 66, 49, 49, 75, 49, 49, 49, 49, 49,
            49, 49, 49, 49, 66, 81, 66, 66, 66, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 66, 49, 49, 49, 49, 49, 49, 49, 40, 32, 40, 40, 32, 40, 49, 49, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 97, 98, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 49, 49, 40, 40, 112, 40, 49, 67, 66, 49, 49, 49, 49, 49, 49, 49, 66, 81, 75, 66, 49, 49, 49, 49, 49, 49, 66, 66, 66, 66, 49, 49, 49, 49, 49,
            49, 49, 49, 66, 66, 66, 66, 67, 66, 66, 66, 66, 49, 49, 49, 49, 49, 66, 75, 66, 49, 49, 49, 49, 49, 49, 49, 40, 32, 40, 40, 32, 40, 49, 49, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 105, 106, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 49, 40, 40, 40, 40, 40, 49, 66, 49, 49, 49, 49, 49, 49, 49, 66, 67, 66, 66, 49, 49, 49, 49, 49, 49, 49, 66, 81, 66, 49, 49, 49, 49, 49, 49,
            49, 49, 49, 49, 49, 49, 66, 66, 66, 66, 66, 66, 66, 49, 49, 49, 49, 66, 66, 66, 75, 49, 49, 49, 49, 49, 49, 40, 32, 40, 40, 32, 40, 49, 49, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 118, 117, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 49, 40, 40, 40, 40, 40, 49, 66, 49, 49, 49, 49, 49, 49, 49, 49, 66, 66, 81, 66, 49, 49, 49, 49, 49, 49, 66, 66, 66, 66, 49, 49, 49, 49, 49,
            49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 75, 66, 81, 49, 49, 49, 49, 49, 49, 66, 49, 49, 49, 49, 49, 49, 40, 32, 40, 40, 32, 40, 49, 49, 49, 49, 49, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 118, 117, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 75, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 75, 66, 66, 49, 49, 49, 49, 49, 49, 66, 66, 66, 66, 66, 49, 49, 66, 49,
            49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 32, 32, 32, 32, 40, 49, 49, 49, 49, 49, 66, 66, 66, 66, 81, 66, 49, 49, 49, 49, 49, 118, 117, 49, 49, 49, 49, 49, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 49, 49, 49, 49, 49, 49, 49, 66, 66, 81, 66, 66, 66, 49, 66, 66,
            40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 99, 99, 99, 108, 49, 49, 67, 66, 66, 66, 66, 66, 66, 49, 49, 49, 118, 117, 49, 49, 49, 49, 66, 66, 66, 81, 66, 66, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 66, 66, 67, 66, 49, 49, 66,
            40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 118, 117, 49, 49, 66, 66, 67, 66, 66, 66, 66, 49, 49, 49, 49, 49, 49, 40, 112, 40, 40, 40, 49, 49, 66, 49, 49, 49, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49,
            40, 40, 40, 40, 112, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 49, 40, 40, 40, 40, 40, 40, 49, 49, 127, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 119, 117, 49, 49, 49, 49, 66, 66, 75, 66, 66, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 66, 49, 49, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 40, 40, 40, 40, 40, 40, 40, 40,
            40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 40, 40, 40, 40, 40, 40, 40, 40, 40, 49, 118, 119, 119, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 133, 49, 49, 49, 49, 49, 66, 66, 66, 66, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 49, 49, 32, 40, 40, 40, 32, 32, 32, 40, 40, 40, 40, 40, 40, 40, 40, 32, 32, 32, 32, 32, 32, 112, 32, 32, 32,
            40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 66, 32, 32, 32, 32, 32, 32, 32, 32, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 112, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 112, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 40, 40, 40, 40, 40, 40, 40, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            49, 66, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 112, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 112, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 112, 32, 32, 32, 32, 32, 32, 32, 32, 40, 40, 40, 40, 40, 40, 40, 40, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            49, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 49, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 112, 40, 40, 40, 40, 40, 40, 112, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            49, 49, 67, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 112, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 40, 32, 32, 40, 40, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49,
            49, 49, 66, 66, 66, 66, 49, 49, 49, 49, 49, 49, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 40, 40, 40, 40, 40, 49, 118, 119, 117, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 112, 91, 49, 49, 49, 49, 49, 49, 49, 66, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49,
            49, 49, 66, 75, 81, 66, 49, 49, 49, 49, 49, 49, 66, 66, 49, 49, 49, 49, 49, 49, 49, 66, 66, 81, 66, 49, 49, 40, 40, 40, 40, 40, 40, 40, 49, 118, 119, 117, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 49, 66, 66, 67, 49, 49, 49, 49, 40, 40, 32, 32, 32, 32, 49, 49, 66, 49, 49, 66, 66, 75, 66, 66, 67, 49, 91, 49, 49, 49, 49, 49, 66, 49, 75, 66, 32, 32, 32, 32, 32, 49, 49, 49, 49, 66, 49,
            49, 49, 81, 66, 67, 66, 66, 49, 49, 49, 49, 49, 66, 67, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 66, 49, 32, 32, 32, 32, 32, 40, 40, 49, 118, 119, 117, 49, 49, 66, 66, 66, 49, 49, 49, 49, 49, 32, 32, 112, 32, 32, 49, 49, 49, 66, 66, 49, 49, 49, 32, 32, 32, 32, 32, 32, 49, 67, 66, 66, 49, 66, 67, 66, 49, 49, 49, 49, 91, 49, 49, 49, 49, 66, 66, 66, 66, 49, 32, 32, 32, 32, 32, 49, 49, 49, 66, 81, 49,
            49, 49, 49, 66, 66, 75, 66, 49, 49, 49, 49, 49, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 49, 49, 119, 119, 117, 49, 49, 49, 66, 66, 66, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 49, 67, 66, 75, 66, 66, 66, 66, 49, 49, 49, 49, 112, 91, 49, 49, 49, 49, 67, 66, 66, 49, 32, 32, 112, 32, 32, 32, 49, 49, 66, 66, 49, 49,
            49, 49, 49, 49, 66, 66, 66, 49, 49, 49, 49, 49, 66, 49, 49, 49, 49, 110, 99, 99, 99, 99, 99, 99, 99, 99, 99, 32, 32, 112, 32, 32, 32, 99, 99, 119, 119, 117, 49, 49, 49, 66, 81, 66, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 40, 40, 32, 32, 32, 32, 49, 49, 66, 49, 66, 81, 66, 66, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 66, 66, 49, 32, 32, 32, 32, 32, 32, 66, 66, 75, 66, 66, 49,
            49, 49, 49, 49, 49, 66, 66, 49, 49, 49, 49, 49, 49, 67, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 49, 49, 119, 119, 117, 49, 49, 49, 49, 66, 66, 66, 49, 49, 49, 49, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 49, 67, 49, 66, 66, 66, 49,
            49, 49, 49, 49, 49, 66, 67, 49, 49, 49, 49, 49, 49, 66, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 112, 40, 40, 40, 40, 49, 49, 118, 119, 117, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 112, 32, 32, 49, 49, 49, 66, 75, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 66, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 110, 99, 99, 99, 99, 99, 32, 32, 32, 32, 32, 99, 99, 99, 108, 66, 66, 49,
            49, 49, 49, 49, 49, 66, 75, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 66, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 40, 49, 49, 118, 119, 117, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 49, 81, 66, 66, 49, 32, 112, 32, 32, 32, 49, 49, 49, 49, 66, 66, 81, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 91, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 49, 49, 49, 91, 66, 75, 49,
            40, 40, 40, 40, 49, 49, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 66, 66, 66, 49, 49, 40, 40, 40, 40, 40, 40, 40, 49, 49, 118, 119, 119, 125, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 66, 66, 66, 49, 49, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 91, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 49, 49, 49, 91, 49, 66, 49,
            40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 66, 49, 40, 40, 40, 40, 40, 40, 49, 49, 49, 126, 119, 119, 119, 99, 99, 99, 99, 99, 99, 108, 49, 49, 49, 49, 32, 32, 32, 32, 32, 66, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 91, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 49, 49, 110, 109, 49, 66, 49,
            40, 40, 40, 40, 40, 40, 40, 40, 40, 112, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 49, 49, 49, 40, 40, 40, 40, 40, 40, 49, 49, 49, 49, 118, 119, 117, 49, 49, 49, 49, 49, 49, 111, 99, 99, 108, 49, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 110, 99, 99, 99, 99, 99, 140, 99, 99, 99, 109, 49, 49, 49, 49, 49, 32, 32, 32, 112, 32, 49, 49, 91, 49, 49, 49, 49,
            40, 40, 40, 40, 112, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 112, 32, 49, 49, 49, 49, 118, 119, 117, 49, 49, 49, 49, 49, 49, 49, 49, 49, 111, 99, 99, 32, 32, 32, 32, 99, 99, 99, 99, 99, 99, 32, 32, 32, 32, 32, 99, 99, 99, 99, 99, 99, 109, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 49, 49, 91, 49, 49, 49, 49,
            40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 112, 40, 40, 40, 40, 40, 40, 40, 40, 66, 66, 49, 49, 126, 119, 119, 125, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 49, 49, 91, 49, 49, 49, 49,
            49, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 112, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 49, 66, 75, 49, 49, 118, 119, 119, 125, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 49, 49, 91, 49, 49, 49, 49,
            49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 49, 66, 66, 66, 49, 126, 119, 119, 117, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 66, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 112, 32, 32, 32, 49, 49, 49, 91, 49, 49, 49, 49,
            49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 49, 66, 66, 66, 49, 49, 118, 119, 119, 125, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 66, 67, 49, 49, 49, 32, 32, 32, 32, 32, 49, 49, 66, 75, 66, 49, 49, 49, 49, 49, 49, 49, 49, 66, 66, 49, 49, 66, 75, 49, 49, 49, 32, 32, 32, 32, 32, 49, 49, 49, 91, 49, 49, 49, 49,
            49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 49, 66, 67, 66, 49, 49, 126, 119, 119, 117, 49, 49, 49, 49, 49, 66, 49, 32, 32, 32, 32, 32, 49, 49, 66, 66, 49, 49, 32, 32, 112, 32, 32, 49, 49, 49, 49, 66, 66, 66, 66, 66, 66, 67, 66, 66, 66, 66, 66, 66, 66, 66, 49, 49, 49, 32, 32, 32, 32, 32, 66, 67, 49, 91, 49, 49, 49, 49,
            49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 112, 40, 40, 40, 49, 49, 66, 66, 49, 49, 49, 126, 119, 119, 125, 49, 49, 49, 66, 66, 66, 32, 32, 112, 32, 32, 49, 49, 49, 66, 67, 66, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 81, 66, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 49, 66, 66, 111, 108, 49, 49, 49,
            49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 49, 49, 49, 66, 49, 49, 49, 49, 118, 119, 117, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 49, 49, 49, 49, 32, 40, 32, 32, 32, 32, 32, 40, 40, 40, 40, 40, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 49, 66, 66, 49, 91, 49, 49, 49,
            49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 32, 32, 32, 32, 40, 40, 40, 40, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 32, 32, 32, 32, 32, 49, 66, 49, 91, 49, 49, 49,
            49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 112, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 32, 32, 32, 40, 40, 40,
            49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 112, 40, 40, 40, 40, 40, 112, 40, 40, 40, 40, 40, 40, 40, 40, 112, 40, 40, 112, 40, 32, 32, 32, 32, 32, 32, 32, 32, 32, 112, 32, 32, 32, 32, 32, 32, 32, 32, 32, 112, 32, 32, 32, 32, 32, 32, 32, 32, 32, 112, 32, 32, 32, 32, 32, 32, 32, 32, 32, 112, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            49, 49, 49, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 112, 40, 40, 40, 40, 40, 40, 40, 40, 112, 40, 40, 40, 40, 40, 32, 32, 32, 112, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            49, 49, 49, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 110, 109, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 112, 40, 40, 40, 112, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            49, 49, 49, 66, 81, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 32, 32, 32, 32, 32, 32, 40, 49, 118, 119, 117, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 112, 32, 32, 32, 32,
            49, 49, 49, 66, 75, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 49, 49, 49, 49, 49, 49, 118, 119, 117, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 49, 32, 32, 32, 32, 32, 32, 32, 32,
            49, 49, 49, 66, 67, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 66, 66, 66, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 66, 49, 49, 49, 49, 49, 118, 119, 117, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 49, 66, 49, 49, 49, 91, 49, 49, 49,
            49, 49, 49, 66, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 67, 66, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 75, 66, 49, 49, 49, 49, 49, 118, 119, 117, 49, 49, 49, 49, 49, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 112, 32, 32, 66, 66, 49, 49, 49, 91, 49, 49, 49,
            49, 49, 49, 66, 66, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 66, 66, 66, 49, 49, 49, 40, 40, 40, 40, 40, 49, 66, 66, 49, 49, 49, 49, 49, 118, 119, 117, 49, 49, 49, 49, 66, 75, 66, 49, 49, 49, 49, 49, 49, 49, 49, 66, 66, 67, 66, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 66, 49, 49, 49, 49, 91, 49, 49, 49,
            49, 49, 49, 66, 81, 66, 66, 66, 49, 49, 49, 49, 49, 49, 49, 110, 109, 49, 49, 49, 49, 66, 66, 66, 49, 49, 49, 40, 40, 40, 40, 40, 49, 67, 66, 81, 49, 49, 49, 127, 119, 119, 133, 49, 49, 49, 49, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 66, 66, 66, 75, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 67, 66, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 66, 49, 49, 49, 49, 91, 49, 49, 49,
            49, 49, 49, 66, 75, 66, 66, 81, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 66, 66, 66, 49, 49, 49, 40, 40, 40, 40, 40, 40, 66, 66, 66, 49, 49, 49, 118, 119, 117, 49, 49, 49, 49, 66, 75, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 66, 67, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 75, 66, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 91, 49, 49, 49,
            49, 49, 49, 66, 66, 66, 66, 66, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 66, 75, 66, 49, 49, 49, 40, 40, 40, 112, 40, 40, 66, 66, 66, 49, 49, 49, 118, 119, 117, 49, 49, 49, 49, 66, 66, 67, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 67, 66, 66, 66, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 49, 49, 110, 99, 99, 99, 141, 49, 66, 49,
            49, 49, 49, 66, 67, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 81, 66, 66, 49, 49, 49, 49, 40, 40, 40, 40, 40, 66, 75, 66, 49, 49, 49, 118, 119, 117, 49, 49, 49, 49, 49, 66, 66, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 81, 66, 66, 66, 66, 66, 49, 49, 49, 110, 99, 32, 32, 32, 32, 32, 99, 99, 109, 49, 49, 49, 91, 49, 66, 49,
            49, 49, 49, 66, 66, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 66, 66, 66, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 81, 66, 66, 49, 49, 118, 119, 117, 49, 49, 49, 49, 49, 49, 66, 66, 67, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 66, 81, 66, 49, 49, 49, 91, 49, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 91, 49, 66, 66,
            49, 49, 75, 66, 66, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 66, 67, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 66, 67, 66, 49, 49, 118, 119, 117, 49, 49, 49, 49, 49, 49, 49, 49, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 66, 75, 66, 49, 49, 49, 49, 91, 49, 32, 32, 32, 32, 32, 49, 49, 66, 66, 66, 49, 91, 49, 49, 49,
            49, 49, 49, 66, 81, 66, 66, 49, 49, 49, 49, 49, 49, 49, 110, 109, 49, 49, 49, 49, 49, 49, 66, 75, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 66, 66, 49, 49, 118, 119, 117, 49, 49, 49, 49, 49, 49, 49, 49, 49, 81, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 66, 66, 66, 49, 49, 49, 110, 109, 49, 32, 112, 32, 32, 32, 49, 66, 81, 66, 66, 49, 91, 49, 49, 49,
            49, 49, 49, 66, 66, 75, 66, 66, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 81, 66, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 66, 75, 49, 49, 118, 119, 119, 125, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 32, 32, 32, 32, 32, 66, 66, 66, 66, 49, 49, 91, 49, 49, 49,
            49, 49, 49, 66, 66, 66, 67, 81, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 66, 66, 66, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 66, 67, 49, 49, 126, 119, 119, 117, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 110, 99, 99, 99, 99, 99, 99, 99, 99, 108, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 32, 32, 32, 32, 32, 67, 66, 75, 49, 110, 99, 109, 49, 49, 49,
            49, 49, 66, 75, 66, 66, 66, 66, 49, 49, 49, 49, 49, 110, 109, 49, 49, 49, 49, 49, 49, 66, 75, 66, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 49, 66, 49, 49, 49, 118, 119, 117, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 110, 99, 99, 99, 109, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 32, 32, 112, 32, 32, 66, 66, 66, 49, 91, 49, 49, 49, 49, 49,
            49, 67, 81, 66, 66, 66, 66, 75, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 66, 66, 66, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 49, 49, 49, 49, 49, 118, 119, 119, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 109, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 111, 99, 99, 99, 99, 108, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 32, 32, 32, 112, 32, 66, 81, 66, 49, 91, 49, 49, 49, 49, 49,
            49, 66, 66, 67, 66, 66, 66, 66, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 66, 67, 66, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 49, 49, 49, 49, 49, 49, 118, 119, 119, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 49, 49, 49, 49, 49, 111, 99, 99, 99, 99, 99, 99, 99, 99, 119, 119, 125, 49, 32, 32, 32, 32, 32, 49, 66, 66, 49, 91, 49, 49, 49, 49, 49,
            49, 49, 66, 66, 66, 75, 66, 66, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 66, 75, 66, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 49, 49, 49, 49, 49, 49, 118, 119, 119, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 49, 49, 49, 66, 49, 49, 49, 49, 49, 49, 49, 49, 118, 119, 119, 49, 32, 32, 32, 32, 32, 49, 75, 66, 49, 91, 49, 49, 49, 49, 49,
            49, 49, 66, 66, 66, 66, 66, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 66, 66, 66, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 127, 134, 134, 134, 134, 134, 119, 119, 119, 49, 49, 49, 49, 49, 66, 66, 66, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 66, 66, 67, 49, 49, 49, 49, 49, 49, 118, 119, 117, 49, 32, 32, 32, 32, 32, 66, 66, 49, 49, 91, 49, 49, 66, 66, 49,
            49, 49, 49, 66, 81, 67, 66, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 67, 66, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 118, 119, 119, 119, 119, 119, 119, 119, 119, 49, 49, 49, 49, 66, 66, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 49, 66, 49, 49, 49, 49, 49, 118, 119, 117, 49, 32, 32, 32, 32, 32, 49, 49, 49, 49, 91, 49, 49, 49, 66, 49,
            49, 49, 49, 49, 66, 66, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 66, 66, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 118, 119, 119, 135, 135, 135, 135, 135, 133, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 32, 32, 32, 32, 49, 49, 49, 49, 91, 49, 49, 49, 66, 49,
            49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 118, 119, 117, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 32, 32, 32, 32, 49, 49, 49, 49, 91, 49, 49, 49, 67, 66,
            49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 110, 109, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 118, 119, 117, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 112, 40, 40, 40, 40, 40, 40, 40, 112, 40, 40, 40, 40, 40, 112, 112, 40, 40, 40, 40, 40, 112, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 32, 32, 32, 49, 49, 49, 49, 49, 91, 49, 49, 49, 66, 49,
            49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 118, 119, 117, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 112, 32, 112, 32, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49,
            49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 118, 119, 117, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 32, 32, 32, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49,
            49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 40, 40, 40, 40, 40, 32, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 112, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 32, 32, 32, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49,
            40, 40, 40, 40, 40, 40, 40, 40, 49, 49, 49, 49, 91, 49, 49, 32, 40, 40, 40, 40, 40, 40, 40, 32, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 112, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 112, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 32, 32, 32, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49,
            40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 40, 112, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 112, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 112, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 112, 40, 40, 40, 40, 40, 40, 40, 118, 119, 117, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49,
            40, 40, 112, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 112, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 112, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 112, 40, 40, 40, 40, 40, 40, 49, 118, 119, 117, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49,
            40, 40, 40, 40, 40, 40, 40, 40, 40, 112, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 40, 40, 40, 40, 32, 40, 40, 40, 40, 40, 40, 40, 40, 40, 49, 49, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 112, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 112, 40, 40, 40, 40, 40, 40, 49, 118, 119, 117, 32, 112, 32, 32, 32, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49,
            40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 32, 40, 40, 40, 40, 40, 40, 40, 32, 49, 49, 49, 49, 40, 40, 40, 40, 40, 118, 119, 117, 49, 49, 66, 66, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 66, 49, 118, 119, 117, 32, 32, 32, 32, 32, 49, 49, 110, 99, 99, 140, 99, 108, 49, 49, 49,
            49, 49, 66, 49, 49, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 118, 119, 117, 49, 49, 67, 66, 75, 66, 66, 66, 66, 66, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 49, 49, 66, 66, 49, 49, 118, 119, 119, 32, 32, 32, 32, 32, 99, 99, 109, 49, 49, 49, 49, 91, 49, 49, 49,
            49, 49, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 118, 119, 117, 49, 49, 49, 66, 66, 81, 66, 66, 66, 66, 67, 66, 81, 49, 49, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 49, 49, 127, 134, 134, 134, 134, 134, 134, 119, 119, 117, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 91, 49, 66, 49,
            49, 66, 66, 75, 66, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 118, 119, 119, 125, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 66, 66, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 49, 110, 99, 99, 99, 119, 119, 119, 119, 135, 135, 135, 135, 135, 133, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 91, 49, 66, 66,
            49, 66, 67, 66, 66, 66, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 66, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 40, 40, 40, 40, 126, 135, 119, 119, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 108, 49, 49, 49, 40, 40, 112, 40, 40, 66, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 49, 49, 91, 49, 49, 49, 126, 119, 135, 133, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 49, 66, 49, 49, 49, 49, 91, 49, 49, 66,
            49, 66, 66, 67, 81, 67, 66, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 66, 81, 66, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 49, 49, 49, 49, 49, 49, 49, 110, 99, 99, 99, 109, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 66, 66, 49, 49, 32, 32, 112, 32, 32, 49, 66, 66, 49, 49, 49, 91, 49, 49, 66,
            49, 66, 67, 66, 75, 75, 66, 66, 49, 49, 49, 49, 91, 49, 49, 49, 49, 66, 75, 66, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 111, 99, 99, 99, 40, 40, 40, 40, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 109, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 66, 66, 66, 67, 66, 66, 32, 32, 32, 32, 32, 49, 66, 81, 49, 49, 49, 91, 49, 49, 66,
            49, 49, 66, 66, 75, 67, 66, 66, 49, 49, 49, 49, 91, 49, 49, 49, 49, 66, 66, 66, 67, 66, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 49, 91, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 49, 49, 40, 40, 40, 40, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 75, 66, 66, 66, 49, 49, 49, 49, 91, 49, 49, 66, 75, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 49, 49, 66, 66, 49, 49, 91, 49, 49, 49,
            49, 49, 66, 66, 66, 66, 75, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 75, 66, 66, 66, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 49, 49, 67, 66, 75, 66, 81, 66, 49, 49, 91, 49, 49, 49, 40, 40, 40, 40, 40, 40, 32, 32, 32, 32, 32, 40, 40, 32, 49, 49, 49, 91, 49, 49, 49,
            49, 49, 49, 49, 67, 81, 66, 66, 49, 49, 49, 49, 91, 49, 49, 49, 49, 66, 67, 81, 66, 66, 49, 49, 49, 49, 49, 49, 40, 112, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 112, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 112, 32, 32, 32, 32, 32, 32, 32, 32, 40, 32, 32, 32, 40, 40, 40,
            49, 49, 49, 49, 66, 66, 66, 66, 49, 49, 49, 49, 91, 49, 49, 49, 49, 66, 66, 66, 75, 66, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 112, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 112, 40, 40, 40, 112, 40, 40, 40, 40, 40, 40, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 112, 32,
            49, 49, 49, 81, 66, 75, 81, 81, 49, 49, 49, 49, 91, 49, 49, 49, 49, 66, 66, 75, 66, 81, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 112, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 32, 32, 32, 32, 32, 32, 32, 32, 112, 32, 32, 32, 32, 32, 32,
            49, 49, 66, 66, 67, 66, 67, 66, 49, 49, 49, 49, 91, 49, 49, 49, 49, 66, 81, 66, 66, 66, 66, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 32, 32, 32, 32, 40, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            81, 66, 67, 75, 66, 66, 75, 66, 49, 49, 49, 49, 91, 49, 49, 49, 49, 67, 66, 66, 67, 66, 66, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 110, 99, 99, 99, 108, 49, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 32, 40, 40, 32, 32, 32, 32, 40, 40,
            49, 49, 49, 66, 66, 81, 75, 66, 49, 49, 49, 49, 91, 49, 49, 49, 49, 66, 66, 66, 66, 66, 66, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 49, 49, 49, 91, 49, 49, 49, 110, 99, 99, 99, 99, 99, 99, 99, 99, 99, 108, 40, 40, 40, 40, 40, 91, 49, 49, 49, 111, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 109, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49,
            49, 49, 49, 66, 66, 66, 81, 66, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 66, 67, 75, 67, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 49, 49, 49, 91, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 40, 40, 40, 40, 40, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 112, 40, 40, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49,
            49, 49, 66, 81, 66, 75, 66, 67, 66, 49, 49, 49, 91, 49, 49, 49, 49, 66, 66, 66, 66, 66, 66, 81, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 49, 49, 111, 99, 99, 99, 109, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 40, 40, 40, 40, 40, 111, 108, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49,
            49, 49, 66, 75, 66, 66, 66, 66, 66, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 75, 66, 81, 66, 66, 49, 49, 49, 40, 40, 112, 40, 40, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 40, 40, 40, 40, 40, 40, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 66, 81, 49, 49, 49, 49, 66, 49, 49,
            49, 49, 49, 66, 66, 67, 81, 75, 66, 49, 49, 49, 91, 49, 49, 49, 49, 49, 66, 66, 66, 66, 66, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 40, 40, 40, 40, 40, 40, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 49, 66, 66, 49, 66, 66, 66, 49, 49,
            49, 49, 49, 66, 66, 66, 66, 66, 66, 49, 49, 49, 91, 49, 49, 49, 49, 49, 66, 66, 81, 66, 75, 49, 49, 49, 40, 40, 40, 40, 40, 40, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 40, 40, 40, 40, 40, 91, 49, 49, 49, 49, 49, 49, 49, 66, 49, 49, 66, 66, 66, 81, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 66, 75, 66, 67, 49, 49, 49,
            49, 49, 49, 66, 67, 66, 66, 66, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 66, 66, 66, 66, 66, 49, 49, 49, 40, 40, 40, 40, 40, 40, 49, 49, 49, 49, 49, 66, 81, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 40, 40, 112, 40, 40, 91, 49, 49, 49, 49, 49, 49, 49, 67, 66, 66, 66, 66, 66, 75, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 66, 66, 66, 66, 66, 49, 49, 49,
            49, 49, 49, 66, 66, 75, 75, 66, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 66, 67, 66, 67, 66, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 49, 49, 49, 49, 66, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 111, 108, 40, 40, 40, 40, 40, 91, 49, 49, 49, 49, 49, 49, 66, 81, 75, 66, 66, 66, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 66, 66, 66, 66, 66, 49, 49,
            49, 49, 49, 66, 75, 66, 66, 66, 49, 49, 49, 49, 91, 49, 49, 49, 66, 75, 66, 81, 66, 75, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 49, 66, 66, 66, 66, 75, 66, 66, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 91, 40, 40, 40, 40, 40, 111, 108, 49, 49, 49, 49, 49, 66, 66, 66, 66, 67, 66, 66, 66, 66, 66, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 112, 40, 40, 49, 49, 49, 67, 66, 66, 66, 49, 49,
            49, 49, 49, 66, 66, 66, 67, 75, 49, 49, 49, 49, 91, 49, 49, 49, 49, 66, 66, 66, 66, 66, 66, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 49, 66, 81, 67, 66, 66, 66, 67, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 91, 40, 40, 40, 40, 40, 40, 91, 49, 49, 49, 49, 49, 49, 49, 75, 66, 81, 66, 75, 66, 67, 81, 66, 67, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 49, 66, 66, 75, 66, 49, 49,
            49, 49, 49, 49, 49, 49, 49, 66, 49, 49, 49, 49, 91, 49, 49, 49, 49, 66, 66, 81, 75, 67, 66, 49, 49, 49, 40, 112, 40, 40, 40, 49, 49, 66, 75, 66, 66, 66, 66, 66, 66, 66, 66, 66, 49, 49, 49, 49, 49, 49, 49, 91, 40, 32, 32, 32, 32, 32, 91, 49, 49, 49, 49, 49, 49, 49, 66, 66, 66, 66, 66, 66, 66, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 49, 66, 66, 66, 66, 49, 49,
            49, 49, 49, 49, 49, 49, 49, 66, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 66, 66, 66, 81, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 49, 49, 49, 66, 75, 66, 67, 66, 75, 81, 66, 49, 49, 49, 49, 49, 49, 49, 91, 49, 32, 32, 32, 32, 32, 91, 49, 49, 49, 49, 49, 49, 49, 66, 66, 67, 66, 66, 66, 66, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 49, 49, 66, 66, 81, 66, 49, 49,
            49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 149, 49, 49, 49, 49, 49, 49, 49, 49, 66, 66, 66, 49, 49, 40, 40, 40, 40, 40, 49, 49, 49, 49, 49, 49, 66, 66, 66, 66, 66, 66, 67, 66, 49, 49, 49, 49, 49, 49, 91, 49, 32, 32, 32, 32, 32, 91, 49, 49, 49, 49, 49, 49, 49, 66, 81, 66, 75, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 49, 49, 49, 49, 49, 49, 49, 49,
            49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 66, 66, 66, 66, 66, 66, 49, 49, 49, 49, 49, 66, 66, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 66, 66, 49, 49, 49, 49, 49, 49, 111, 99, 32, 32, 112, 32, 32, 109, 49, 49, 49, 49, 49, 49, 49, 66, 66, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 49, 49, 49, 49, 49, 49,
            49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 75, 66, 66, 66, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 40, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 112, 40, 40, 40, 49, 49, 49, 49, 49, 49, 49, 49,
            49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 67, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 49, 49, 49, 49, 49, 49],
			// layer two
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 24, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 64, 64, 64, 64, 64, 64, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 64, 64, 64, 64, 64, 64, 64, 85, 0, 63, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 64, 64, 64, 64, 64, 64, 64, 64, 64,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 64, 24, 0, 0, 0, 0, 71, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 80, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 85, 0, 0, 0, 0, 0, 0, 80, 64, 64, 64, 64, 64, 64, 64, 24, 0, 0, 0, 71, 64, 64, 64, 64, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            56, 56, 56, 56, 56, 56, 56, 56, 56, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 86, 87, 88, 94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 64, 64, 64, 64, 64, 64, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 56, 56, 56, 56, 56, 56, 78, 0, 0, 0, 0, 72, 56, 56, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 86, 87, 88, 94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 56, 56, 56, 56, 8, 0, 0, 79, 56, 56, 56, 78, 0, 0, 0, 0, 0, 104, 86, 87, 88, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 78, 0, 0, 0, 72, 56, 56, 56, 56, 56, 56,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 72, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 78, 0, 0, 0, 72, 56, 56, 56, 56, 56, 56, 56, 56, 56, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 72, 56, 56, 56, 56, 56, 56, 56, 56, 8, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 24, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 80, 24, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 72, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 72, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 71, 85, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 24, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 78, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 80, 24, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 72, 8, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 72, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 71, 85, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 24, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 78, 0, 0, 0, 16, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0,
            64, 64, 64, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 72, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 63, 0, 0, 0, 71, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 71, 64, 64, 64, 64, 64, 64, 64, 64, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 79, 78, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 64, 64, 64, 64, 64, 64, 64, 64, 64, 85, 0, 0, 0, 63, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 78, 0, 0, 16, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 64, 64, 64, 24, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 16, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0,
            56, 56, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 16, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 24, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 79, 56, 56, 56, 56, 56, 56, 56, 56, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 16, 0, 0, 0, 0, 0, 80, 24, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 72, 8, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 56, 56, 56, 56, 56, 56, 56, 56, 56, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 24, 0, 0, 16, 0, 0, 0, 0, 0, 63, 0, 0, 0, 72, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 56, 56, 56, 56, 78, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 72, 8, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 24, 0, 0, 16, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 80, 64, 24, 0, 0, 0, 71, 64, 64, 64, 64, 64, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 80, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 24, 0, 0, 0, 71, 64, 64, 64, 64, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 24, 0, 0, 0, 71, 85, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 78, 0, 0, 0, 71, 64, 64, 64, 64, 64, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 64, 64, 64, 64, 64, 64, 64,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 56, 56, 56, 56, 56, 56, 56, 56, 56, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 8, 0, 0, 0, 56, 56, 0, 0, 0, 0, 79, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 72, 56, 56, 56, 56, 56, 56, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 56, 56, 56, 56, 56, 78, 0, 0, 0, 72, 56, 78, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 79, 56, 56, 56, 56, 56, 56, 56,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 24, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 71, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 72, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 78, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 71, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 64, 64, 64, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 78, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 64, 64, 64, 64, 64, 24, 0, 0, 0, 71, 64, 64, 64, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 64, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 64, 64, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 64, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 64, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 64, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 64, 64, 64, 64, 64, 64, 64, 64, 64, 49, 80, 24, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 64, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 24, 0, 0, 0, 72, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 64, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 80, 64, 64, 64, 64, 64, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 80, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 64, 64, 64, 64, 64, 24, 0, 0, 0, 71, 64, 64, 64, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            64, 64, 64, 64, 64, 64, 64, 85, 0, 0, 0, 0, 0, 0, 0, 80, 64, 64, 64, 64, 64, 64, 64, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 56, 56, 56, 78, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 71, 64, 64, 64, 64, 64, 64, 64, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 8, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 56, 56, 56, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 56, 56, 56, 56, 78, 0, 0, 0, 72, 56, 56, 56, 56, 8, 0, 0, 0, 79, 56, 56, 56, 56, 56, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 8, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            56, 56, 56, 56, 56, 56, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 56, 56, 56, 56, 56, 56, 56, 8, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 56, 56, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 56, 56, 56, 8, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 79, 56, 56, 56, 56, 56, 56, 56, 56, 56, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 56, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 56, 56, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 72, 56, 56, 78, 0, 0, 0, 0, 0, 0, 0, 0, 72, 56, 56, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 24, 0, 0, 16, 0, 0, 79, 56, 78, 0, 0, 0, 72, 56, 56, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 71, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 24, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 79, 56, 56, 56, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 78, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 72, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 72, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 80, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 85, 0, 0, 63, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 71, 64, 64, 64, 64, 64, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 64, 64, 24, 0, 0, 71, 64, 64, 64, 64, 64, 64, 64, 64, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 64, 64, 64, 64, 64, 24, 0, 0, 0, 71, 64, 64, 85, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 64, 64, 64, 64, 64, 64, 64,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 56, 56, 56, 56, 56, 56, 56, 56, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 72, 56, 56, 56, 56, 56, 56, 8, 0, 0, 0, 0, 0, 0, 0, 0, 79, 56, 56, 78, 0, 0, 0, 72, 56, 56, 56, 56, 56, 56, 56, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 56, 56, 56, 56, 78, 0, 0, 0, 72, 56, 78, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 79, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 8, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 79, 56, 56, 56, 56, 56, 56, 56, 56,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 24, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 72, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 71, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 71, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 78, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 78, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 24, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 72, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 71, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 78, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 71, 85, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 78, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0],
			// layer three
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 122, 114, 114, 114, 114, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 137, 137, 137, 137, 137, 137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 124, 116, 116, 116, 116, 132, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 102, 138, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 102, 86, 87, 88, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 138, 94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 86, 87, 88, 94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 138, 94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 86, 87, 88, 94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 138, 94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 86, 87, 88, 94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 103, 138, 95, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 103, 86, 87, 88, 95, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 110, 109, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 122, 114, 114, 114, 114, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 110, 109, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 137, 137, 137, 137, 137, 137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 124, 116, 116, 116, 116, 132, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 122, 114, 114, 114, 130, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 137, 137, 137, 137, 137, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 124, 116, 116, 116, 132, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 102, 138, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 122, 114, 114, 130, 0, 0, 0, 0, 0, 0, 122, 114, 114, 114, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 138, 94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 137, 137, 137, 137, 0, 0, 0, 0, 0, 0, 137, 137, 137, 137, 137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 138, 94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 124, 116, 116, 132, 0, 0, 0, 0, 0, 0, 124, 116, 116, 116, 132, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 138, 94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 103, 138, 95, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 102, 86, 87, 88, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 86, 87, 88, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 102, 138, 96, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 86, 87, 88, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 138, 94, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 86, 87, 88, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 138, 94, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 103, 86, 87, 88, 95, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 138, 94, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 138, 94, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 103, 138, 94, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 122, 114, 114, 114, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 137, 137, 137, 137, 137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 124, 116, 116, 116, 132, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 102, 86, 87, 88, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 86, 87, 88, 94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 86, 87, 88, 94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 86, 87, 88, 94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 86, 87, 88, 94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 103, 86, 87, 88, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 86, 87, 88, 94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 86, 87, 88, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 103, 86, 87, 88, 95, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 102, 138, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 86, 87, 88, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 138, 94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 86, 87, 88, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 138, 94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 103, 86, 87, 88, 95, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 138, 94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 122, 114, 114, 114, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 103, 138, 95, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 137, 137, 137, 137, 137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 124, 116, 116, 116, 132, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 122, 114, 114, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 137, 137, 137, 137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 124, 116, 116, 132, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 102, 138, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 138, 94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 102, 138, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 102, 138, 96, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 138, 94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 138, 94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 138, 94, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 138, 94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 138, 94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 138, 94, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 103, 138, 95, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 138, 94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 138, 94, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 103, 138, 95, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 103, 138, 95, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 122, 114, 114, 114, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 137, 137, 137, 137, 137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 124, 116, 116, 116, 132, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			],
		},

		callAreaJoinOnInit: true,
		onAreaJoin: function () {
			// samhain snakes and lights
			if (Event.event === "Samhain" && Player.quests.completedQuestArray.includes("Overdraft")) {
				let no = Random(20,25); // num of snakes
				for (let i = 0; i < no; i++) {
					Game.villagers.push(new Villager(Game.prepareNPC({
						template: EnemyTemplates.eaglecrest.snake,
					}, "villagers")));
				}

				if (Player.quests.questProgress.eaglecrestSamhainLights) {
					map.eaglecrestSamhainLights();
				}
			}

			// overdraft quest
			if (Player.quests.npcProgress.eaglecrest[2] === 2) {
				Game.camera.pan({x: 3436, y: 1171}, 400, "constant", function () {
					// function to be called 2s after pan is finished
					Dom.chat.insert(Dom.chat.say("Gildo Cleftbeard", "Help! These frogs are after my monocle!!"));
					// pan back to player
					Game.camera.pan(Game.hero, 400, "constant", function () {
						// reset camera
						Game.camera.follow(Game.hero);
					}, 0);
				}, 2000);
			}
		},

		callAreaLeaveOnLogout: true,
		onAreaLeave: function (logout) {
			// samhain
			Player.quests.questProgress.plainsCrateGhosts = false;
		},

		images: {
			tiles: {normal: "assets/tilemap/eaglecrest.png"},
			eaglecrestGhost: {samhain: "assets/enemies/eaglecrestGhost.png"},
			eaglecrestGhost2: {samhain: "assets/enemies/eaglecrestGhost2.png"},
			crateSamhain: {samhain: "assets/objects/crateSamhain.png"},
			melee: {samhain: "assets/projectiles/melee.png"},
			yellowSnakeRight: {samhain: "assets/enemies/yellowSnake.png"},
			yellowSnakeLeft: {samhain: "assets/enemies/yellowSnake.png", flip: "vertical"},
			toadRight: {normal: "assets/enemies/toad.png"},
			toadLeft: {normal: "assets/enemies/toad.png", flip: "vertical"},
			toadCorpse: {normal: "assets/corpses/toad.png"},
			waterball: {normal: "assets/projectiles/waterball.png"},
			gildoCleftbeard: {normal: "assets/npcs/gildoCleftbeard.png"},
		},

		areaTeleports: [
			{
				// teleport to eaglecrest city
				x: 3000,
				y: 130,
				width: 120,
				height: 2,
				teleportTo: "eaglecrest",
				destinationX: 960,
				destinationY: 1670,
			},
		],

		villagerData: {
			minPeople: 0,
			maxPeople: 3,
			locations: [
				{
					x: 39,
					y: 320,
					width: 2142,
					height: 212,
				},
				{
					x: 39,
					y: 800,
					width: 2142,
					height: 872,//aaaaaaaaaaaaaaaaaa
				},
			],
		},

		npcs: [
			{
				x: 3436,
				y: 1171,
				image: "gildoCleftbeard",
				template: Villagers[8],
				stats: {
					defence: 77,
				},
				health: 83, // damaged
				canBeShown: function () {
					return Player.quests.npcProgress.eaglecrest[2] === 2;
				},
				chat: {
					chooseChat: "My utmost gratitude for helping me with those toads.",
		            notUnlockedRoles: {
		                eaglecrest: "Help me! These frogs are coming after my fashion sense!", // tbd should change after his role
		            },
				},
				roles: [
					{
						role: "text",
						chooseText: "Ask Gildo if he borrowed the money from the bank.",
						chat: `Hey! Stop with the accusations! I only wanted a monocle!<br><br>
						Yes... you're right... I may have got the money from somewhere. But you think someone of my stature should be out here killing these frogs to earn money? Can you imagine what they'd do to my boots?<br><br>
						I didn't borrow the money from the bank! Good heavens! You think I'd need <i>their</i> help? <br><br>
						In truth, I borrowed the money from <b>Captain Greenbeard</b> in the <b>Eaglecrest Tavern</b>! They had far more money than sense in them. It's them you should be after! Not me! Now leave me and my monocle alone in peace!`,
						buttons: ["Ok"],
						showCloseButton: false,
						forceChoose: true, // forces choose dom
						functions: [function () {
							// close page
							Dom.closePage("textPage");
							// quest progress
							Player.quests.npcProgress.eaglecrest[2] = 3;
							Dom.quests.active();
						}],
						roleRequirement: function () {
							return Player.quests.npcProgress.eaglecrest[2] === 2 && Player.quests.questProgress.overdraftFrogDeadOne && Player.quests.questProgress.overdraftFrogDeadTwo;
						},
					},
				],
			},
		],

		enemies: [
			{
				x: 3236, // with gildo!
				y: 1091,
				template: EnemyTemplates.eaglecrest.toad,
				health: 30,
				respawnOnDeath: false,
				canBeShown: function () {
					return Player.quests.npcProgress.eaglecrest[2] === 2;
				},
				onDeathAdditional: function() {
					Player.quests.questProgress.overdraftFrogDeadOne = true;
				},
			},
			{
				x: 3536, // with gildo!
				y: 1181,
				template: EnemyTemplates.eaglecrest.toad,
				health: 22,
				respawnOnDeath: false,
				canBeShown: function () {
					return Player.quests.npcProgress.eaglecrest[2] === 2;
				},
				onDeathAdditional: function() {
					Player.quests.questProgress.overdraftFrogDeadTwo = true;
				},
			},
		],

		things: [
			{
				x: 257,
				y: 1217,
				orderOffsetY: -50,
				image: "crateSamhain",
				onInteract: function () {
					if (!Player.quests.questProgress.plainsCrateGhosts) { // reset when area is left
						Game.enemies.push(new Enemy(Game.prepareNPC({
							x: 20,
							y: 1000,
							template: EnemyTemplates.eaglecrest.phantom2,
						}, "enemies")));
						Game.enemies.push(new Enemy(Game.prepareNPC({
							x: 50,
							y: 1200,
							template: EnemyTemplates.eaglecrest.phantom1,
						}, "enemies")));
						Game.enemies.push(new Enemy(Game.prepareNPC({
							x: 40,
							y: 1370,
							template: EnemyTemplates.eaglecrest.phantom2,
						}, "enemies")));
						Game.enemies[Game.enemies.length-1].say("No..");
						Game.enemies[Game.enemies.length-2].say("The City is at risk!", 1444);
						Player.quests.questProgress.plainsCrateGhosts = true;
					}
					Game.hero.channel(function () {
						if (!Player.quests.questProgress.plainsCrate) {
							if (Dom.inventory.give(Items.item[38]) === false) {
								Dom.chat.insert("Your inventory is full! Try again when you have space.");
							}
							else {
								Player.quests.questProgress.plainsCrate = true;
								Dom.chat.insert("You found a <b>Blood-Red Crystal</b> in the crate.");
							}
						}
						else {
							Dom.chat.insert("You have already looted that crate!");
						}
					}, [], 1666, "Rummaging through crate");
				},
				canBeShown: function () {
					return Player.quests.completedQuestArray.includes("Snakes and the City");
				}
			},
		],
	},

	//
	// the city again ! ! !
	//

	samhainLair: {
		id: 21,

		data: {
			name: "Lair",
			displayOnEnter: false,
		},

		indoors: true,

		tagGameAllowed: true,

		song_day: "assets/music/Eaglecrest.mp3",
		song_night: "assets/music/Eaglecrest.mp3",

		checkpoint: false,

		lootArea: "eaglecrest",

		mapData: {
			cols: 10,
			rows: 30,
			tsize: 60,
			tilesPerRow: 8,
			solidTiles: [1, 2, 3, 6, 7, 9, 10, 11, 13, 15, 17, 18, 19, 20, 21, 23, 25, 26, 27, 28, 29, 31, 33, 34, 35, 36, 37, 38, 39, 42, 43, 44, 45, 46, 47, 53, 55, 61, 65, 69, 70, 73, 77, 82, 83, 89, 90, 97, 98, 123, 131, 155],
			dayTiles: [11, 27, 34, 42, 7], // windows and lights
			nightTiles: [3, 19, 2, 18, 15],
			pathTiles: [5, 12, 41, 50, 51, 57, 58, 59, 60, 76, 86, 87, 88, 91, 92, 93, 99, 107, 108, 109, 110, 111, 113, 115, 117, 118, 119, 121, 125, 126, 127, 129, 133, 134, 135, 137, 138, 139, 140, 141, 147, 148, 149],
			waterTiles: [32, 40, 48, 112, 120, 128],
			layers: [[131, 123, 6, 6, 6, 123, 6, 6, 123, 6,
            6, 6, 6, 131, 6, 6, 131, 123, 6, 6,
            123, 131, 6, 131, 123, 131, 6, 6, 6, 123,
            131, 6, 123, 6, 6, 6, 6, 123, 131, 123,
            100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
            100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
            100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
            100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
            100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
            100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
            100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
            100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
            100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
            100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
            155, 155, 155, 100, 100, 100, 100, 155, 155, 155,
            155, 155, 155, 100, 100, 100, 100, 155, 155, 155,
            155, 155, 155, 100, 100, 100, 100, 155, 155, 155,
            155, 155, 155, 100, 100, 100, 100, 155, 155, 155,
            155, 155, 155, 100, 100, 100, 100, 155, 155, 155,
            155, 155, 155, 100, 100, 100, 100, 155, 155, 155,
            155, 155, 155, 100, 100, 100, 100, 155, 155, 155,
            155, 155, 155, 100, 100, 100, 100, 155, 155, 155,
            155, 155, 155, 100, 100, 100, 100, 155, 155, 155,
            155, 155, 155, 100, 100, 100, 100, 155, 155, 155,
            155, 155, 155, 100, 100, 100, 100, 155, 155, 155,
            155, 155, 155, 100, 100, 100, 100, 155, 155, 155,
            155, 155, 155, 100, 100, 100, 100, 155, 155, 155,
            155, 155, 155, 100, 100, 100, 100, 155, 155, 155,
            155, 155, 155, 100, 100, 100, 100, 155, 155, 155,
            155, 155, 155, 100, 100, 100, 100, 155, 155, 155],]
		},

		images: {
			tiles: {normal: "assets/tilemap/eaglecrest.png"},
			yellowSnakeRight: {samhain: "assets/enemies/yellowSnake.png"},
			yellowSnakeLeft: {samhain: "assets/enemies/yellowSnake.png", flip: "vertical"},
			snakeMan: {samhain: "assets/npcs/soothsssayer.png"},
			eaglecrestGhost: {samhain: "assets/enemies/eaglecrestGhost.png"},
			eaglecrestGhost2: {samhain: "assets/enemies/eaglecrestGhost2.png"},
			melee: {samhain: "assets/projectiles/melee.png"},
			crateSamhain: {samhain: "assets/objects/crateSamhain.png"},
			cauldron: {samhain: "assets/objects/cauldronSamhain.png"},
		},

		callAreaJoinOnInit: true,
		onAreaJoin: function () {
			// samhain snakes
			let no = Random(10,30); // num of snakes
			for (let i = 0; i < no; i++) {
				Game.villagers.push(new Villager(Game.prepareNPC({
					template: EnemyTemplates.eaglecrest.snake,
				}, "villagers")));
			}
		},

		areaTeleports: [
			{
				// teleport to eaglecrest tavern
				x: 300,
				y: 1800,
				width: 240,
				height: 2,
				teleportTo: "eaglecrestTavern",
				destinationX: 1230,
				destinationY: 160,
			},
		],

		villagerData: {
			minPeople: 0,
			maxPeople: 0,
			locations: [
				{
					x: 25,
					y: 260,
					width: 550,
					height: 570,
				},
				{
					x: 205,
					y: 830,
					width: 190,
					height: 900,
				},
			],
		},

		npcs: [
			{
				x: 300,
				y: 280,
				image: "snakeMan",
				name: Player.quests.completedQuestArray.includes("Snaking Bad") ? "The Soothsssayer" : "???",
				hostility: "neutral",
				level: 100,
				stats: {
					maxHealth: 550,
					defence: 50,
					dodgeChance: 100,
					healthRegen: 666,
				},
				roles: [
					{
						sold: [
							{item: Items.consumable[9], cost: 1, costCurrency: 4, buyFunction: BuyFunctions.samhainItemBuy}, // samhain pot o' gloop
							{item: Items.consumable[10], cost: 2, costCurrency: 4, buyFunction: BuyFunctions.samhainItemBuy}, // bunch of blood bats
							{item: Items.chest[7], cost: 10, costCurrency: 4, buyFunction: BuyFunctions.samhainItemBuy}, // ghost sheet
							Player.class === "a" ? {item: Items.bow[7], cost: 15, costCurrency: 4, buyFunction: BuyFunctions.samhainItemBuy} // samhain spiderbow
							: Player.class === "k" ? {item: Items.sword[7], cost: 15, costCurrency: 4, buyFunction: BuyFunctions.samhainItemBuy} // samhain scythe
							: {item: Items.staff[8], cost: 15, costCurrency: 4, buyFunction: BuyFunctions.samhainItemBuy}, // samhain broomstick
						],
						role: "merchant",
						chooseText: "I'd like to turn in some Samhain Marks for items.",
						shopGreeting: "Now there'ssss the Blood Moon, I need <b>Sssssamhain Marksssss</b> for the next ssstage of my plan. There'ssss itemss in it for you of coursssse...",
						roleRequirement: function () {
							return Event.time === "bloodMoon";
						},
					},
				],
				chat: {
					shopLeave: "I still need more markssssss. You'll be back.",
					inventoryFull: "You cannot hold that.",
					tooPoor: "You cannot afford that. Kill more enemiesssss.",
					questProgress: "I have rewardssssss waiting.",
				},
			},
		],

		characters: [
			{
				x: 300,
				y: 526,
				name: "The Soothsssayer's Cauldron",
				hideNameTag: true,
				image: "cauldron",
				hostility: "neutral",
				level: 1,
				xpGiven: 0,
				corpseOnDeath: false,
				respawnOnDeath: true,
				respawnTime: 10,
				stats: {
					walkSpeed: 0,
					maxHealth: 350,
					healthRegen: 0,
				},
				onDeath: function () {
				}
			}
		],

		collisions: [
			{
				x: 300, // cauldron
				y: 566,
				width: 110,
				height: 60,
			},
		],
	},

	//
	// Forest
	//

	forest: {
		id: 22,

		data: {
			name: "Forest",
			displayOnEnter: true,
		},

		indoors: false,

		tagGameAllowed: false,

		song_day: "assets/music/Forest.mp3",
		song_night: "assets/music/Forest.mp3",

		checkpoint: false,

		lootArea: "forest",

		weather: "rain",

		mapData: {
			cols: 100,
			rows: 100,
			tsize: 60,
			tilesPerRow: 13,
			animateTiles: [{
				// grass changing colour
				tiles: [1, 2, 3, 4, 5, 6, 7, 8, 9, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
				animateTime: 5000,
			}],
			layers: [
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[],
			],
		},

		images: {
			tiles: {normal: "assets/tilemap/forest.png"},
			tree1A: {normal: "assets/objects/tree1A.png"},
			tree1Aflipped: {normal: "assets/objects/tree1A.png"},
			tree1B: {normal: "assets/objects/tree1B.png"},
			tree1Bflipped: {normal: "assets/objects/tree1B.png"},
			tree2A: {normal: "assets/objects/tree2A.png"},
			tree2Aflipped: {normal: "assets/objects/tree2A.png"},
			tree2B: {normal: "assets/objects/tree2B.png"},
			tree2Bflipped: {normal: "assets/objects/tree2B.png"},
			tree3A: {normal: "assets/objects/tree3A.png"},
			tree3Aflipped: {normal: "assets/objects/tree3A.png"},
			tree3B: {normal: "assets/objects/tree3B.png"},
			tree3Bflipped: {normal: "assets/objects/tree3B.png"},
		},

		things: [ // randomly generated by code in wiki
			{x:30,y:249,image:"tree2B",name:"Tree"},
			{x:115,y:67,image:"tree1A",name:"Tree"},
			{x:169,y:460,image:"tree3A",name:"Tree"},
			{x:214,y:191,image:"tree2A",name:"Tree"},
			{x:388,y:178,image:"tree3B",name:"Tree"},
			{x:585,y:357,image:"tree1Bflipped",name:"Tree"},
			{x:860,y:428,image:"tree2Aflipped",name:"Tree"},
			{x:1172,y:51,image:"tree2B",name:"Tree"},
			{x:1346,y:450,image:"tree2Bflipped",name:"Tree"},
			{x:1473,y:480,image:"tree3Aflipped",name:"Tree"},
			{x:1592,y:444,image:"tree1A",name:"Tree"},
			{x:1801,y:260,image:"tree3Bflipped",name:"Tree"},
			{x:1889,y:447,image:"tree1Aflipped",name:"Tree"},
			{x:2270,y:467,image:"tree2A",name:"Tree"},
			{x:2538,y:352,image:"tree3Bflipped",name:"Tree"},
			{x:2838,y:359,image:"tree1Aflipped",name:"Tree"},
			{x:3022,y:200,image:"tree1Aflipped",name:"Tree"},
			{x:3337,y:510,image:"tree1Aflipped",name:"Tree"},
			{x:3577,y:449,image:"tree2A",name:"Tree"},
			{x:3945,y:503,image:"tree3Aflipped",name:"Tree"},
			{x:4052,y:337,image:"tree3Aflipped",name:"Tree"},
			{x:4207,y:264,image:"tree1B",name:"Tree"},
			{x:4285,y:485,image:"tree3A",name:"Tree"},
			{x:4502,y:240,image:"tree2A",name:"Tree"},
			{x:4825,y:515,image:"tree2Aflipped",name:"Tree"},
			{x:5007,y:355,image:"tree3A",name:"Tree"},
			{x:5063,y:485,image:"tree2A",name:"Tree"},
			{x:5232,y:39,image:"tree3Bflipped",name:"Tree"},
			{x:5324,y:415,image:"tree2Bflipped",name:"Tree"},
			{x:5545,y:379,image:"tree3Bflipped",name:"Tree"},
			{x:5711,y:470,image:"tree1B",name:"Tree"},
			{x:30,y:250,image:"tree1A",name:"Tree"},
			{x:282,y:314,image:"tree1Aflipped",name:"Tree"},
			{x:420,y:278,image:"tree2Aflipped",name:"Tree"},
			{x:817,y:413,image:"tree3A",name:"Tree"},
			{x:1198,y:431,image:"tree1Aflipped",name:"Tree"},
			{x:1431,y:325,image:"tree2Bflipped",name:"Tree"},
			{x:1583,y:258,image:"tree1Aflipped",name:"Tree"},
			{x:1685,y:276,image:"tree1A",name:"Tree"},
			{x:1757,y:289,image:"tree1Aflipped",name:"Tree"},
			{x:1913,y:392,image:"tree1A",name:"Tree"},
			{x:2153,y:244,image:"tree1Aflipped",name:"Tree"},
			{x:2319,y:347,image:"tree1Bflipped",name:"Tree"},
			{x:2384,y:329,image:"tree3A",name:"Tree"},
			{x:2725,y:267,image:"tree2B",name:"Tree"},
			{x:2825,y:373,image:"tree1B",name:"Tree"},
			{x:3007,y:372,image:"tree1A",name:"Tree"},
			{x:3070,y:266,image:"tree2A",name:"Tree"},
			{x:3376,y:436,image:"tree3Aflipped",name:"Tree"},
			{x:3611,y:265,image:"tree2A",name:"Tree"},
			{x:3957,y:270,image:"tree3A",name:"Tree"},
			{x:4280,y:377,image:"tree2Aflipped",name:"Tree"},
			{x:4349,y:349,image:"tree1A",name:"Tree"},
			{x:4620,y:262,image:"tree3Aflipped",name:"Tree"},
			{x:4993,y:236,image:"tree1Bflipped",name:"Tree"},
			{x:5102,y:434,image:"tree1A",name:"Tree"},
			{x:5323,y:276,image:"tree1Aflipped",name:"Tree"},
			{x:5521,y:255,image:"tree3A",name:"Tree"},
			{x:5688,y:362,image:"tree3Aflipped",name:"Tree"},
			{x:5880,y:353,image:"tree1Aflipped",name:"Tree"},
			{x:5960,y:352,image:"tree2A",name:"Tree"},
			{x:30,y:911,image:"tree1Aflipped",name:"Tree"},
			{x:267,y:1205,image:"tree2A",name:"Tree"},
			{x:334,y:1012,image:"tree1Bflipped",name:"Tree"},
			{x:717,y:1081,image:"tree1A",name:"Tree"},
			{x:884,y:1013,image:"tree1Bflipped",name:"Tree"},
			{x:1192,y:956,image:"tree1Aflipped",name:"Tree"},
			{x:1532,y:993,image:"tree3Aflipped",name:"Tree"},
			{x:1599,y:1368,image:"tree1Aflipped",name:"Tree"},
			{x:1782,y:882,image:"tree2A",name:"Tree"},
			{x:2120,y:1085,image:"tree1Aflipped",name:"Tree"},
			{x:2382,y:985,image:"tree2Aflipped",name:"Tree"},
			{x:2666,y:1183,image:"tree3A",name:"Tree"},
			{x:2943,y:1219,image:"tree2Aflipped",name:"Tree"},
			{x:3314,y:908,image:"tree2Aflipped",name:"Tree"},
			{x:3601,y:1172,image:"tree3B",name:"Tree"},
			{x:3823,y:1274,image:"tree3A",name:"Tree"},
			{x:4134,y:1322,image:"tree3Aflipped",name:"Tree"},
			{x:4276,y:1372,image:"tree1A",name:"Tree"},
			{x:4341,y:1292,image:"tree2Aflipped",name:"Tree"},
			{x:4661,y:912,image:"tree1A",name:"Tree"},
			{x:4903,y:1265,image:"tree3Aflipped",name:"Tree"},
			{x:5291,y:1142,image:"tree1A",name:"Tree"},
			{x:5399,y:1120,image:"tree2Aflipped",name:"Tree"},
			{x:5544,y:827,image:"tree1Aflipped",name:"Tree"},
			{x:5691,y:1181,image:"tree1A",name:"Tree"},
			{x:5971,y:1154,image:"tree2A",name:"Tree"},
			{x:30,y:916,image:"tree1Aflipped",name:"Tree"},
			{x:155,y:873,image:"tree1Aflipped",name:"Tree"},
			{x:452,y:892,image:"tree3A",name:"Tree"},
			{x:802,y:899,image:"tree3Aflipped",name:"Tree"},
			{x:934,y:893,image:"tree1Aflipped",name:"Tree"},
			{x:1263,y:879,image:"tree1Aflipped",name:"Tree"},
			{x:1324,y:904,image:"tree1A",name:"Tree"},
			{x:1607,y:892,image:"tree2Aflipped",name:"Tree"},
			{x:1997,y:872,image:"tree3Aflipped",name:"Tree"},
			{x:2198,y:873,image:"tree1Aflipped",name:"Tree"},
			{x:2334,y:894,image:"tree2Aflipped",name:"Tree"},
			{x:2493,y:910,image:"tree1Aflipped",name:"Tree"},
			{x:2629,y:914,image:"tree1Aflipped",name:"Tree"},
			{x:2756,y:865,image:"tree2Aflipped",name:"Tree"},
			{x:3047,y:893,image:"tree1A",name:"Tree"},
			{x:3148,y:905,image:"tree1Aflipped",name:"Tree"},
			{x:3492,y:915,image:"tree1Aflipped",name:"Tree"},
			{x:3753,y:898,image:"tree1A",name:"Tree"},
			{x:3823,y:903,image:"tree1Aflipped",name:"Tree"},
			{x:4065,y:873,image:"tree2Bflipped",name:"Tree"},
			{x:4128,y:895,image:"tree3Aflipped",name:"Tree"},
			{x:4474,y:874,image:"tree3A",name:"Tree"},
			{x:4569,y:900,image:"tree2Aflipped",name:"Tree"},
			{x:4843,y:894,image:"tree3Aflipped",name:"Tree"},
			{x:5232,y:893,image:"tree3B",name:"Tree"},
			{x:5419,y:893,image:"tree2Aflipped",name:"Tree"},
			{x:5759,y:880,image:"tree3Aflipped",name:"Tree"},
			{x:5846,y:874,image:"tree1A",name:"Tree"},
			{x:5892,y:864,image:"tree2Aflipped",name:"Tree"},
			{x:30,y:979,image:"tree1A",name:"Tree"},
			{x:280,y:985,image:"tree2A",name:"Tree"},
			{x:606,y:980,image:"tree3Aflipped",name:"Tree"},
			{x:677,y:961,image:"tree1Aflipped",name:"Tree"},
			{x:780,y:941,image:"tree1Aflipped",name:"Tree"},
			{x:975,y:967,image:"tree3Bflipped",name:"Tree"},
			{x:1166,y:995,image:"tree3Aflipped",name:"Tree"},
			{x:1518,y:951,image:"tree2A",name:"Tree"},
			{x:1806,y:985,image:"tree1Aflipped",name:"Tree"},
			{x:2116,y:932,image:"tree3A",name:"Tree"},
			{x:2496,y:985,image:"tree1Aflipped",name:"Tree"},
			{x:2808,y:973,image:"tree1A",name:"Tree"},
			{x:3070,y:945,image:"tree2Aflipped",name:"Tree"},
			{x:3117,y:936,image:"tree3B",name:"Tree"},
			{x:3402,y:983,image:"tree3Aflipped",name:"Tree"},
			{x:3788,y:944,image:"tree1Aflipped",name:"Tree"},
			{x:3828,y:980,image:"tree1Aflipped",name:"Tree"},
			{x:4093,y:932,image:"tree3A",name:"Tree"},
			{x:4287,y:984,image:"tree1Aflipped",name:"Tree"},
			{x:4355,y:962,image:"tree2Aflipped",name:"Tree"},
			{x:4648,y:945,image:"tree3B",name:"Tree"},
			{x:4782,y:987,image:"tree3Aflipped",name:"Tree"},
			{x:4961,y:948,image:"tree2A",name:"Tree"},
			{x:5229,y:946,image:"tree3A",name:"Tree"},
			{x:5381,y:960,image:"tree3Bflipped",name:"Tree"},
			{x:5703,y:933,image:"tree2A",name:"Tree"},
			{x:5883,y:939,image:"tree2A",name:"Tree"},
			{x:30,y:1457,image:"tree2Aflipped",name:"Tree"},
			{x:289,y:1405,image:"tree1Aflipped",name:"Tree"},
			{x:547,y:1378,image:"tree3A",name:"Tree"},
			{x:591,y:1721,image:"tree2A",name:"Tree"},
			{x:722,y:1396,image:"tree1A",name:"Tree"},
			{x:1115,y:1664,image:"tree2A",name:"Tree"},
			{x:1451,y:1372,image:"tree1Aflipped",name:"Tree"},
			{x:1773,y:1580,image:"tree1A",name:"Tree"},
			{x:1999,y:1610,image:"tree2B",name:"Tree"},
			{x:2191,y:1433,image:"tree3A",name:"Tree"},
			{x:2521,y:1577,image:"tree3Aflipped",name:"Tree"},
			{x:2905,y:1704,image:"tree3Aflipped",name:"Tree"},
			{x:3118,y:1404,image:"tree3Aflipped",name:"Tree"},
			{x:3253,y:1656,image:"tree3B",name:"Tree"},
			{x:3600,y:1588,image:"tree1Aflipped",name:"Tree"},
			{x:3641,y:1467,image:"tree2A",name:"Tree"},
			{x:3844,y:1580,image:"tree3B",name:"Tree"},
			{x:4153,y:1781,image:"tree2A",name:"Tree"},
			{x:4286,y:1626,image:"tree1Aflipped",name:"Tree"},
			{x:4651,y:1566,image:"tree1Aflipped",name:"Tree"},
			{x:4833,y:1452,image:"tree2A",name:"Tree"},
			{x:5090,y:1482,image:"tree3Bflipped",name:"Tree"},
			{x:5322,y:1559,image:"tree1Aflipped",name:"Tree"},
			{x:5684,y:1748,image:"tree1Aflipped",name:"Tree"},
			{x:5937,y:1481,image:"tree3A",name:"Tree"},
			{x:30,y:1673,image:"tree2A",name:"Tree"},
			{x:414,y:1634,image:"tree2A",name:"Tree"},
			{x:706,y:1659,image:"tree1A",name:"Tree"},
			{x:916,y:1636,image:"tree1A",name:"Tree"},
			{x:1181,y:1800,image:"tree2Aflipped",name:"Tree"},
			{x:1318,y:1710,image:"tree3B",name:"Tree"},
			{x:1413,y:1840,image:"tree1A",name:"Tree"},
			{x:1605,y:1862,image:"tree1Bflipped",name:"Tree"},
			{x:1998,y:1734,image:"tree3Aflipped",name:"Tree"},
			{x:2213,y:1723,image:"tree3Aflipped",name:"Tree"},
			{x:2559,y:1638,image:"tree3A",name:"Tree"},
			{x:2844,y:1723,image:"tree3Bflipped",name:"Tree"},
			{x:3212,y:1813,image:"tree1A",name:"Tree"},
			{x:3559,y:1614,image:"tree1Aflipped",name:"Tree"},
			{x:3658,y:1797,image:"tree3Aflipped",name:"Tree"},
			{x:4003,y:1865,image:"tree1A",name:"Tree"},
			{x:4317,y:1624,image:"tree1Aflipped",name:"Tree"},
			{x:4386,y:1730,image:"tree3A",name:"Tree"},
			{x:4607,y:1690,image:"tree3B",name:"Tree"},
			{x:4899,y:1629,image:"tree2A",name:"Tree"},
			{x:5013,y:1800,image:"tree1Aflipped",name:"Tree"},
			{x:5293,y:1751,image:"tree1A",name:"Tree"},
			{x:5686,y:1632,image:"tree3Aflipped",name:"Tree"},
			{x:5889,y:1720,image:"tree2B",name:"Tree"},
			{x:30,y:1830,image:"tree2A",name:"Tree"},
			{x:384,y:1818,image:"tree2B",name:"Tree"},
			{x:545,y:1727,image:"tree3A",name:"Tree"},
			{x:640,y:1791,image:"tree2A",name:"Tree"},
			{x:875,y:1821,image:"tree2Aflipped",name:"Tree"},
			{x:980,y:1796,image:"tree1Aflipped",name:"Tree"},
			{x:1221,y:1761,image:"tree3Aflipped",name:"Tree"},
			{x:1616,y:1789,image:"tree2A",name:"Tree"},
			{x:1938,y:1752,image:"tree3A",name:"Tree"},
			{x:2139,y:1737,image:"tree3A",name:"Tree"},
			{x:2519,y:1744,image:"tree2B",name:"Tree"},
			{x:2721,y:1779,image:"tree3A",name:"Tree"},
			{x:3114,y:1764,image:"tree1A",name:"Tree"},
			{x:3241,y:1802,image:"tree1Aflipped",name:"Tree"},
			{x:3452,y:1815,image:"tree3Aflipped",name:"Tree"},
			{x:3620,y:1811,image:"tree2A",name:"Tree"},
			{x:3737,y:1799,image:"tree3Bflipped",name:"Tree"},
			{x:3870,y:1769,image:"tree2Aflipped",name:"Tree"},
			{x:4112,y:1756,image:"tree1Bflipped",name:"Tree"},
			{x:4158,y:1776,image:"tree1Aflipped",name:"Tree"},
			{x:4556,y:1754,image:"tree1Aflipped",name:"Tree"},
			{x:4626,y:1755,image:"tree1Aflipped",name:"Tree"},
			{x:4959,y:1822,image:"tree2Aflipped",name:"Tree"},
			{x:5010,y:1785,image:"tree1A",name:"Tree"},
			{x:5352,y:1753,image:"tree1A",name:"Tree"},
			{x:5726,y:1769,image:"tree1Aflipped",name:"Tree"},
			{x:5983,y:1744,image:"tree1Aflipped",name:"Tree"},
			{x:30,y:2270,image:"tree2B",name:"Tree"},
			{x:283,y:2244,image:"tree3A",name:"Tree"},
			{x:542,y:2181,image:"tree2Aflipped",name:"Tree"},
			{x:735,y:2213,image:"tree2Aflipped",name:"Tree"},
			{x:962,y:2114,image:"tree1A",name:"Tree"},
			{x:1237,y:2024,image:"tree1A",name:"Tree"},
			{x:1440,y:2135,image:"tree2B",name:"Tree"},
			{x:1782,y:2102,image:"tree2Aflipped",name:"Tree"},
			{x:1869,y:2231,image:"tree2A",name:"Tree"},
			{x:2060,y:2032,image:"tree3A",name:"Tree"},
			{x:2411,y:2218,image:"tree3A",name:"Tree"},
			{x:2776,y:2232,image:"tree3Aflipped",name:"Tree"},
			{x:2925,y:2089,image:"tree2A",name:"Tree"},
			{x:3060,y:2119,image:"tree3A",name:"Tree"},
			{x:3281,y:2022,image:"tree3Bflipped",name:"Tree"},
			{x:3633,y:2015,image:"tree1B",name:"Tree"},
			{x:3687,y:2276,image:"tree1Bflipped",name:"Tree"},
			{x:3989,y:2049,image:"tree3A",name:"Tree"},
			{x:4278,y:2096,image:"tree1B",name:"Tree"},
			{x:4560,y:2233,image:"tree2A",name:"Tree"},
			{x:4779,y:2092,image:"tree1Aflipped",name:"Tree"},
			{x:4978,y:2057,image:"tree2A",name:"Tree"},
			{x:5184,y:2089,image:"tree3A",name:"Tree"},
			{x:5442,y:2106,image:"tree3Aflipped",name:"Tree"},
			{x:5701,y:2134,image:"tree1A",name:"Tree"},
			{x:30,y:2598,image:"tree2Bflipped",name:"Tree"},
			{x:382,y:2393,image:"tree1A",name:"Tree"},
			{x:540,y:2741,image:"tree1B",name:"Tree"},
			{x:627,y:2404,image:"tree1A",name:"Tree"},
			{x:765,y:2588,image:"tree3B",name:"Tree"},
			{x:954,y:2732,image:"tree3B",name:"Tree"},
			{x:1109,y:2650,image:"tree3A",name:"Tree"},
			{x:1349,y:2474,image:"tree2Aflipped",name:"Tree"},
			{x:1648,y:2557,image:"tree1A",name:"Tree"},
			{x:1790,y:2749,image:"tree2B",name:"Tree"},
			{x:1833,y:2472,image:"tree1Aflipped",name:"Tree"},
			{x:2107,y:2542,image:"tree1Aflipped",name:"Tree"},
			{x:2482,y:2534,image:"tree3A",name:"Tree"},
			{x:2688,y:2757,image:"tree1A",name:"Tree"},
			{x:2948,y:2588,image:"tree3Aflipped",name:"Tree"},
			{x:3038,y:2551,image:"tree3Aflipped",name:"Tree"},
			{x:3120,y:2533,image:"tree1Aflipped",name:"Tree"},
			{x:3283,y:2450,image:"tree1A",name:"Tree"},
			{x:3551,y:2603,image:"tree1Aflipped",name:"Tree"},
			{x:3856,y:2577,image:"tree2A",name:"Tree"},
			{x:4133,y:2654,image:"tree2Aflipped",name:"Tree"},
			{x:4192,y:2433,image:"tree2Aflipped",name:"Tree"},
			{x:4454,y:2698,image:"tree3Aflipped",name:"Tree"},
			{x:4752,y:2466,image:"tree2A",name:"Tree"},
			{x:5022,y:2756,image:"tree1A",name:"Tree"},
			{x:5392,y:2484,image:"tree2B",name:"Tree"},
			{x:5454,y:2655,image:"tree3Aflipped",name:"Tree"},
			{x:5620,y:2606,image:"tree3A",name:"Tree"},
			{x:5851,y:2478,image:"tree3B",name:"Tree"},
			{x:30,y:3040,image:"tree1Aflipped",name:"Tree"},
			{x:361,y:2869,image:"tree1A",name:"Tree"},
			{x:616,y:2963,image:"tree3B",name:"Tree"},
			{x:960,y:2798,image:"tree1A",name:"Tree"},
			{x:1155,y:3155,image:"tree2Aflipped",name:"Tree"},
			{x:1428,y:3168,image:"tree1A",name:"Tree"},
			{x:1746,y:2793,image:"tree2A",name:"Tree"},
			{x:2022,y:3054,image:"tree2Aflipped",name:"Tree"},
			{x:2275,y:3028,image:"tree3Aflipped",name:"Tree"},
			{x:2614,y:3159,image:"tree3A",name:"Tree"},
			{x:2811,y:3008,image:"tree2Bflipped",name:"Tree"},
			{x:3043,y:2986,image:"tree1A",name:"Tree"},
			{x:3133,y:3175,image:"tree1A",name:"Tree"},
			{x:3532,y:3190,image:"tree1Aflipped",name:"Tree"},
			{x:3756,y:2819,image:"tree2Aflipped",name:"Tree"},
			{x:4027,y:3141,image:"tree1A",name:"Tree"},
			{x:4197,y:3137,image:"tree3Aflipped",name:"Tree"},
			{x:4312,y:3077,image:"tree3Aflipped",name:"Tree"},
			{x:4378,y:3156,image:"tree1Aflipped",name:"Tree"},
			{x:4684,y:3000,image:"tree3A",name:"Tree"},
			{x:4888,y:3072,image:"tree3Aflipped",name:"Tree"},
			{x:4977,y:2924,image:"tree2B",name:"Tree"},
			{x:5318,y:3008,image:"tree1Aflipped",name:"Tree"},
			{x:5632,y:3047,image:"tree1A",name:"Tree"},
			{x:5915,y:3152,image:"tree1A",name:"Tree"},
			{x:30,y:3287,image:"tree2Aflipped",name:"Tree"},
			{x:139,y:3205,image:"tree3A",name:"Tree"},
			{x:483,y:3333,image:"tree3Aflipped",name:"Tree"},
			{x:662,y:3413,image:"tree1A",name:"Tree"},
			{x:709,y:3243,image:"tree1Aflipped",name:"Tree"},
			{x:899,y:3140,image:"tree3A",name:"Tree"},
			{x:1211,y:3351,image:"tree2A",name:"Tree"},
			{x:1534,y:3391,image:"tree1A",name:"Tree"},
			{x:1850,y:3296,image:"tree1B",name:"Tree"},
			{x:2102,y:3124,image:"tree2Aflipped",name:"Tree"},
			{x:2400,y:3156,image:"tree1A",name:"Tree"},
			{x:2463,y:3167,image:"tree2Aflipped",name:"Tree"},
			{x:2733,y:3235,image:"tree2A",name:"Tree"},
			{x:2883,y:3352,image:"tree2A",name:"Tree"},
			{x:3156,y:3424,image:"tree3Bflipped",name:"Tree"},
			{x:3503,y:3305,image:"tree2Aflipped",name:"Tree"},
			{x:3899,y:3204,image:"tree1A",name:"Tree"},
			{x:4162,y:3214,image:"tree1B",name:"Tree"},
			{x:4211,y:3280,image:"tree1A",name:"Tree"},
			{x:4311,y:3204,image:"tree1Aflipped",name:"Tree"},
			{x:4482,y:3184,image:"tree2A",name:"Tree"},
			{x:4605,y:3295,image:"tree1B",name:"Tree"},
			{x:4834,y:3121,image:"tree1Aflipped",name:"Tree"},
			{x:5088,y:3279,image:"tree2Aflipped",name:"Tree"},
			{x:5321,y:3310,image:"tree1Aflipped",name:"Tree"},
			{x:5680,y:3379,image:"tree3Bflipped",name:"Tree"},
			{x:5954,y:3131,image:"tree3Bflipped",name:"Tree"},
			{x:30,y:3822,image:"tree2Aflipped",name:"Tree"},
			{x:278,y:3980,image:"tree2A",name:"Tree"},
			{x:553,y:3724,image:"tree1A",name:"Tree"},
			{x:906,y:3921,image:"tree2A",name:"Tree"},
			{x:1256,y:3677,image:"tree3B",name:"Tree"},
			{x:1515,y:3658,image:"tree2Aflipped",name:"Tree"},
			{x:1555,y:3916,image:"tree2Aflipped",name:"Tree"},
			{x:1913,y:3727,image:"tree3Aflipped",name:"Tree"},
			{x:1999,y:3725,image:"tree1Aflipped",name:"Tree"},
			{x:2075,y:3965,image:"tree2A",name:"Tree"},
			{x:2285,y:4028,image:"tree3A",name:"Tree"},
			{x:2434,y:3800,image:"tree2A",name:"Tree"},
			{x:2582,y:3992,image:"tree1A",name:"Tree"},
			{x:2843,y:3739,image:"tree2Bflipped",name:"Tree"},
			{x:2890,y:3739,image:"tree3B",name:"Tree"},
			{x:2970,y:3914,image:"tree1B",name:"Tree"},
			{x:3178,y:3844,image:"tree2Aflipped",name:"Tree"},
			{x:3565,y:3967,image:"tree3A",name:"Tree"},
			{x:3863,y:3822,image:"tree2Aflipped",name:"Tree"},
			{x:4034,y:3803,image:"tree3Aflipped",name:"Tree"},
			{x:4392,y:3644,image:"tree2Bflipped",name:"Tree"},
			{x:4664,y:3609,image:"tree3Aflipped",name:"Tree"},
			{x:4954,y:3796,image:"tree2Aflipped",name:"Tree"},
			{x:5052,y:3886,image:"tree2Bflipped",name:"Tree"},
			{x:5359,y:3741,image:"tree3Aflipped",name:"Tree"},
			{x:5485,y:4030,image:"tree1A",name:"Tree"},
			{x:5770,y:3729,image:"tree1Aflipped",name:"Tree"},
			{x:5959,y:3945,image:"tree2A",name:"Tree"},
			{x:30,y:3945,image:"tree2Aflipped",name:"Tree"},
			{x:131,y:3959,image:"tree2A",name:"Tree"},
			{x:395,y:4118,image:"tree2B",name:"Tree"},
			{x:683,y:3981,image:"tree1A",name:"Tree"},
			{x:946,y:3948,image:"tree2A",name:"Tree"},
			{x:1250,y:4124,image:"tree2A",name:"Tree"},
			{x:1372,y:4061,image:"tree1Bflipped",name:"Tree"},
			{x:1752,y:4094,image:"tree2Aflipped",name:"Tree"},
			{x:1793,y:4146,image:"tree1B",name:"Tree"},
			{x:1880,y:4102,image:"tree1A",name:"Tree"},
			{x:2241,y:4089,image:"tree3Aflipped",name:"Tree"},
			{x:2331,y:4179,image:"tree2Aflipped",name:"Tree"},
			{x:2633,y:4108,image:"tree3Bflipped",name:"Tree"},
			{x:2927,y:4098,image:"tree1Aflipped",name:"Tree"},
			{x:3051,y:3990,image:"tree1A",name:"Tree"},
			{x:3413,y:3920,image:"tree2Aflipped",name:"Tree"},
			{x:3659,y:3894,image:"tree1Aflipped",name:"Tree"},
			{x:3873,y:4108,image:"tree3Aflipped",name:"Tree"},
			{x:3980,y:3906,image:"tree3Aflipped",name:"Tree"},
			{x:4325,y:4135,image:"tree1Aflipped",name:"Tree"},
			{x:4481,y:4155,image:"tree1A",name:"Tree"},
			{x:4816,y:4135,image:"tree1B",name:"Tree"},
			{x:5212,y:4051,image:"tree3Aflipped",name:"Tree"},
			{x:5296,y:3967,image:"tree1Aflipped",name:"Tree"},
			{x:5567,y:3911,image:"tree3A",name:"Tree"},
			{x:5665,y:4177,image:"tree1A",name:"Tree"},
			{x:5851,y:3896,image:"tree2Aflipped",name:"Tree"},
			{x:30,y:5179,image:"tree1Aflipped",name:"Tree"},
			{x:411,y:5078,image:"tree1A",name:"Tree"},
			{x:473,y:4952,image:"tree3Bflipped",name:"Tree"},
			{x:696,y:4957,image:"tree3Aflipped",name:"Tree"},
			{x:897,y:4792,image:"tree3Bflipped",name:"Tree"},
			{x:1036,y:5228,image:"tree2A",name:"Tree"},
			{x:1166,y:5097,image:"tree1A",name:"Tree"},
			{x:1405,y:5027,image:"tree1A",name:"Tree"},
			{x:1749,y:4820,image:"tree3Aflipped",name:"Tree"},
			{x:2100,y:5016,image:"tree1Aflipped",name:"Tree"},
			{x:2343,y:4628,image:"tree2A",name:"Tree"},
			{x:2699,y:4984,image:"tree3A",name:"Tree"},
			{x:3050,y:4865,image:"tree1Aflipped",name:"Tree"},
			{x:3178,y:5228,image:"tree1Bflipped",name:"Tree"},
			{x:3329,y:5161,image:"tree2A",name:"Tree"},
			{x:3612,y:5029,image:"tree1Aflipped",name:"Tree"},
			{x:3713,y:5082,image:"tree3Bflipped",name:"Tree"},
			{x:4023,y:5209,image:"tree3A",name:"Tree"},
			{x:4371,y:4791,image:"tree3A",name:"Tree"},
			{x:4412,y:4850,image:"tree1A",name:"Tree"},
			{x:4639,y:5159,image:"tree2A",name:"Tree"},
			{x:4892,y:4726,image:"tree2Aflipped",name:"Tree"},
			{x:5052,y:4699,image:"tree3Bflipped",name:"Tree"},
			{x:5334,y:4572,image:"tree1Aflipped",name:"Tree"},
			{x:5446,y:4625,image:"tree3A",name:"Tree"},
			{x:5811,y:4688,image:"tree1Aflipped",name:"Tree"},
			{x:5930,y:5253,image:"tree1Aflipped",name:"Tree"},
			{x:30,y:4630,image:"tree2A",name:"Tree"},
			{x:227,y:4651,image:"tree2Bflipped",name:"Tree"},
			{x:538,y:4647,image:"tree1A",name:"Tree"},
			{x:821,y:4653,image:"tree1Bflipped",name:"Tree"},
			{x:870,y:4660,image:"tree1A",name:"Tree"},
			{x:1123,y:4659,image:"tree1A",name:"Tree"},
			{x:1251,y:4627,image:"tree3B",name:"Tree"},
			{x:1392,y:4675,image:"tree2B",name:"Tree"},
			{x:1639,y:4662,image:"tree2Aflipped",name:"Tree"},
			{x:1848,y:4677,image:"tree2Aflipped",name:"Tree"},
			{x:2053,y:4658,image:"tree2Aflipped",name:"Tree"},
			{x:2262,y:4657,image:"tree3B",name:"Tree"},
			{x:2545,y:4674,image:"tree3A",name:"Tree"},
			{x:2661,y:4648,image:"tree1A",name:"Tree"},
			{x:2786,y:4678,image:"tree2Aflipped",name:"Tree"},
			{x:2931,y:4645,image:"tree1Bflipped",name:"Tree"},
			{x:2995,y:4677,image:"tree3A",name:"Tree"},
			{x:3038,y:4668,image:"tree1Aflipped",name:"Tree"},
			{x:3392,y:4656,image:"tree2Aflipped",name:"Tree"},
			{x:3715,y:4672,image:"tree3A",name:"Tree"},
			{x:3791,y:4629,image:"tree1A",name:"Tree"},
			{x:3906,y:4676,image:"tree2A",name:"Tree"},
			{x:4096,y:4675,image:"tree3Aflipped",name:"Tree"},
			{x:4179,y:4663,image:"tree3Aflipped",name:"Tree"},
			{x:4496,y:4650,image:"tree2A",name:"Tree"},
			{x:4656,y:4628,image:"tree1Aflipped",name:"Tree"},
			{x:4962,y:4631,image:"tree3Aflipped",name:"Tree"},
			{x:5334,y:4662,image:"tree1Aflipped",name:"Tree"},
			{x:5658,y:4651,image:"tree3A",name:"Tree"},
			{x:5973,y:4658,image:"tree3Aflipped",name:"Tree"},
			{x:30,y:5308,image:"tree2A",name:"Tree"},
			{x:142,y:5368,image:"tree3A",name:"Tree"},
			{x:324,y:5042,image:"tree3Aflipped",name:"Tree"},
			{x:625,y:5316,image:"tree3Aflipped",name:"Tree"},
			{x:709,y:5015,image:"tree1Aflipped",name:"Tree"},
			{x:966,y:5236,image:"tree2A",name:"Tree"},
			{x:1213,y:5107,image:"tree1Aflipped",name:"Tree"},
			{x:1321,y:5347,image:"tree3Aflipped",name:"Tree"},
			{x:1579,y:5047,image:"tree1Aflipped",name:"Tree"},
			{x:1890,y:5014,image:"tree3Aflipped",name:"Tree"},
			{x:2171,y:5255,image:"tree3Aflipped",name:"Tree"},
			{x:2451,y:5210,image:"tree1A",name:"Tree"},
			{x:2533,y:5052,image:"tree3Aflipped",name:"Tree"},
			{x:2606,y:5067,image:"tree2Bflipped",name:"Tree"},
			{x:2878,y:5357,image:"tree1Bflipped",name:"Tree"},
			{x:2953,y:5309,image:"tree3A",name:"Tree"},
			{x:3196,y:5142,image:"tree3Bflipped",name:"Tree"},
			{x:3257,y:5102,image:"tree2A",name:"Tree"},
			{x:3578,y:5208,image:"tree1Aflipped",name:"Tree"},
			{x:3819,y:5255,image:"tree2Bflipped",name:"Tree"},
			{x:4093,y:5303,image:"tree1A",name:"Tree"},
			{x:4453,y:5099,image:"tree2Aflipped",name:"Tree"},
			{x:4646,y:5021,image:"tree3Bflipped",name:"Tree"},
			{x:5024,y:5118,image:"tree3A",name:"Tree"},
			{x:5176,y:5347,image:"tree2Aflipped",name:"Tree"},
			{x:5398,y:5371,image:"tree1B",name:"Tree"},
			{x:5518,y:5097,image:"tree1B",name:"Tree"},
			{x:5744,y:5113,image:"tree2Aflipped",name:"Tree"},
			{x:5910,y:5362,image:"tree3A",name:"Tree"},
			{x:30,y:5159,image:"tree1Aflipped",name:"Tree"},
			{x:242,y:5125,image:"tree1Bflipped",name:"Tree"},
			{x:521,y:5108,image:"tree1Bflipped",name:"Tree"},
			{x:732,y:5103,image:"tree1Aflipped",name:"Tree"},
			{x:1093,y:5158,image:"tree2Bflipped",name:"Tree"},
			{x:1432,y:5098,image:"tree2A",name:"Tree"},
			{x:1803,y:5121,image:"tree2Aflipped",name:"Tree"},
			{x:1970,y:5183,image:"tree2A",name:"Tree"},
			{x:2062,y:5108,image:"tree2A",name:"Tree"},
			{x:2254,y:5171,image:"tree3Aflipped",name:"Tree"},
			{x:2318,y:5110,image:"tree3Aflipped",name:"Tree"},
			{x:2391,y:5109,image:"tree2A",name:"Tree"},
			{x:2483,y:5157,image:"tree1A",name:"Tree"},
			{x:2780,y:5145,image:"tree1A",name:"Tree"},
			{x:3022,y:5118,image:"tree1A",name:"Tree"},
			{x:3199,y:5153,image:"tree3Bflipped",name:"Tree"},
			{x:3543,y:5150,image:"tree2A",name:"Tree"},
			{x:3883,y:5094,image:"tree1Aflipped",name:"Tree"},
			{x:4203,y:5110,image:"tree1Aflipped",name:"Tree"},
			{x:4345,y:5169,image:"tree3Bflipped",name:"Tree"},
			{x:4497,y:5169,image:"tree2Bflipped",name:"Tree"},
			{x:4820,y:5144,image:"tree2Aflipped",name:"Tree"},
			{x:5013,y:5095,image:"tree3Aflipped",name:"Tree"},
			{x:5182,y:5094,image:"tree2A",name:"Tree"},
			{x:5545,y:5144,image:"tree3Aflipped",name:"Tree"},
			{x:5669,y:5135,image:"tree3Bflipped",name:"Tree"},
			{x:5988,y:5167,image:"tree1B",name:"Tree"},
			{x:30,y:5720,image:"tree3A",name:"Tree"},
			{x:360,y:5661,image:"tree1Aflipped",name:"Tree"},
			{x:572,y:5688,image:"tree1Bflipped",name:"Tree"},
			{x:717,y:5604,image:"tree2Bflipped",name:"Tree"},
			{x:1032,y:5559,image:"tree2A",name:"Tree"},
			{x:1224,y:5815,image:"tree1A",name:"Tree"},
			{x:1317,y:5654,image:"tree1A",name:"Tree"},
			{x:1658,y:5863,image:"tree2Aflipped",name:"Tree"},
			{x:1902,y:5583,image:"tree3B",name:"Tree"},
			{x:2299,y:5617,image:"tree2A",name:"Tree"},
			{x:2415,y:5769,image:"tree2Aflipped",name:"Tree"},
			{x:2747,y:5574,image:"tree2B",name:"Tree"},
			{x:2880,y:5802,image:"tree3Bflipped",name:"Tree"},
			{x:3103,y:5813,image:"tree3A",name:"Tree"},
			{x:3183,y:5791,image:"tree2B",name:"Tree"},
			{x:3415,y:5507,image:"tree3A",name:"Tree"},
			{x:3785,y:5620,image:"tree1Aflipped",name:"Tree"},
			{x:4096,y:5876,image:"tree2A",name:"Tree"},
			{x:4388,y:5832,image:"tree3A",name:"Tree"},
			{x:4614,y:5568,image:"tree3Aflipped",name:"Tree"},
			{x:4805,y:5594,image:"tree2A",name:"Tree"},
			{x:5135,y:5920,image:"tree2A",name:"Tree"},
			{x:5262,y:5569,image:"tree2Aflipped",name:"Tree"},
			{x:5559,y:5603,image:"tree1Aflipped",name:"Tree"},
			{x:5823,y:5724,image:"tree2Aflipped",name:"Tree"},
			{x:30,y:5877,image:"tree3A",name:"Tree"},
			{x:85,y:5748,image:"tree1Aflipped",name:"Tree"},
			{x:429,y:5775,image:"tree1B",name:"Tree"},
			{x:492,y:5824,image:"tree3Aflipped",name:"Tree"},
			{x:641,y:5845,image:"tree2Aflipped",name:"Tree"},
			{x:1006,y:5774,image:"tree2Aflipped",name:"Tree"},
			{x:1257,y:5784,image:"tree2A",name:"Tree"},
			{x:1373,y:5888,image:"tree2Aflipped",name:"Tree"},
			{x:1706,y:5862,image:"tree2Aflipped",name:"Tree"},
			{x:1749,y:5732,image:"tree1A",name:"Tree"},
			{x:2127,y:5930,image:"tree1A",name:"Tree"},
			{x:2414,y:5954,image:"tree3A",name:"Tree"},
			{x:2525,y:5778,image:"tree2Bflipped",name:"Tree"},
			{x:2763,y:5917,image:"tree2A",name:"Tree"},
			{x:3049,y:5842,image:"tree3A",name:"Tree"},
			{x:3435,y:5864,image:"tree2B",name:"Tree"},
			{x:3642,y:5877,image:"tree1Aflipped",name:"Tree"},
			{x:4038,y:5943,image:"tree3A",name:"Tree"},
			{x:4305,y:5787,image:"tree2A",name:"Tree"},
			{x:4563,y:5825,image:"tree1Aflipped",name:"Tree"},
			{x:4638,y:5953,image:"tree3Bflipped",name:"Tree"},
			{x:4989,y:5796,image:"tree2Aflipped",name:"Tree"},
			{x:5101,y:5747,image:"tree3Aflipped",name:"Tree"},
			{x:5470,y:5780,image:"tree3B",name:"Tree"},
			{x:5752,y:5890,image:"tree1A",name:"Tree"},
			{x:5854,y:5906,image:"tree2Bflipped",name:"Tree"},
		],
	},

};

// TBD - remove since this is redundant (map.setTile should be used instead)
// sets a tile on the Map (area and main) (specifyable area for if it is used in a setTimeout)
function SetTile (area, layer, col, row, newTileNum) {
	let map = Areas[area].mapData;
	map.layers[layer][row * map.cols + col] = newTileNum;
}
