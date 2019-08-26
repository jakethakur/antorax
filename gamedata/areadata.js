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
		else if (this.event === "Samhain") {
			// halloween night time
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
		if (this.event === "Samhain" && timeDarkness > 0) {
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
		else if ((d.day >= 22 && d.month === 10) || (d.day <= 5 && d.month === 11)) {
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
	}
};

// init event variables needed for Area definition
Event.init();

//
// Loot area defintion
//

const FishingLevels = {
	loggingCamp: 10,
};

const ChatText = {
    gender: {
        m: {
            formal: "sir"
        },
        f: {
            formal: "madam"
        }
    },
};

//
// Area defintion
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
							map.setTile(0, map.getCol(x), map.getRow(y), 59);
							map.setTile(0, map.getCol(x + 60), map.getRow(y), 60);
							map.setTile(0, map.getCol(x), map.getRow(y + 60), 69);
							// add snow back after 5 minutes
							setTimeout(function(x, y) {
								SetTile("tutorial", 0, map.getCol(x), map.getRow(y), 29);
								SetTile("tutorial", 0, map.getCol(x + 60), map.getRow(y), 30);
								SetTile("tutorial", 0, map.getCol(x), map.getRow(y + 60), 39);
							}, 60000, x, y);
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
							setTimeout(function(x, y) {
								SetTile("tutorial", 0, map.getCol(x), map.getRow(y), 29);
								SetTile("tutorial", 0, map.getCol(x + 60), map.getRow(y), 30);
								SetTile("tutorial", 0, map.getCol(x), map.getRow(y + 60), 39);
							}, 60000, x, y);
						}
					}, [], 1000, "Making a Snowball");
				}
			},
		},

		isIcy: function() {
			return Event.event === "Christmas";
		},

		images: {
			tiles: {normal: "assets/tilemap/loggingCamp.png", christmas: "assets/tilemap/tutorial-christmas.png"},
			driver: {normal: "assets/npcs/driver.png"},
			weaponsmith: {normal: "assets/npcs/weaponsmith.png"},
			cart: {normal: "assets/objects/cartEaglecrest.png"},
			fisherman: {normal: "assets/npcs/tobenam.png"},
			weaponsmithSign: {normal: "assets/objects/weaponsmithSign.png"},
			eaglecrestBanner: {normal: "assets/objects/eaglecrestBanner.png"},
			torianTintop: {normal: "assets/npcs/torianTintop.png"},
			nessyTintop: {normal: "assets/npcs/nessyTintop.png"},
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
				// instructions pop up when bridge is moved to
				x: 1490,
				y: 300,
				width: 1,
				height: 600,
				onPlayerTouch: function () {
					// check that the "to the logging camp" quest has been started, weapon has been bought, and the instructions haven't been shown before
					let questStarted = Player.quests.activeQuestArray.includes("To the Logging Camp");
					let weaponBought = Dom.inventory.check(2, "sword", 1) || Dom.inventory.check(2, "staff", 1) || Dom.inventory.check(2, "bow", 1);

					if (questStarted && weaponBought && Player.unlockedInstructions.length < 3) {
						Dom.instructions.page(2); // open instructions chapter 3
					}
					// otherwise if the player hasn't started the quest, teleport them back to make them!
					else if (!questStarted && !Player.quests.completedQuestArray.includes("To the Logging Camp")) {
						Game.hero.teleport(3838, 318);
						Dom.alert.page("You need to start your first quest. Speak to the Cart Driver who is right next to you.", 0, undefined, "game")
					}
					// otherwise if the player hasn't bought the weapon, teleport them back to make them!
					else if (!weaponBought && !Player.quests.completedQuestArray.includes("To the Logging Camp")) {
						Game.hero.teleport(2369, 243);
						Dom.alert.page("You need to buy a weapon to progress in your quest. Buy one from the nearby Weaponsmith.", 0, undefined, "game")
					}
				}
			}
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
						quest: [Quests.fishing[3], Quests.fishing[4], Quests.fishing[5]],
						role: "questStartFinish",
						newQuestFrequency: "daily",
						questVariable: "fishingDaily",
					},
					{
						sold: [
							{item: Items.rod[3], cost: 3}, // basic fishing rod
							{item: Items.consumable[8], cost: 4}, // can of worms
							{item: Items.consumable[12], cost: 4, condition: function () { // magnetised lure
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
				x: 3600,
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
							setTimeout(function(x, y) {
								SetTile("eaglecrestLoggingCamp", 0, map.getCol(x), map.getRow(y), 29);
								SetTile("eaglecrestLoggingCamp", 0, map.getCol(x + 60), map.getRow(y), 30);
								SetTile("eaglecrestLoggingCamp", 0, map.getCol(x), map.getRow(y + 60), 39);
							}, 60000, x, y);
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
							setTimeout(function(x, y) {
								SetTile("eaglecrestLoggingCamp", 0, map.getCol(x), map.getRow(y), 29);
								SetTile("eaglecrestLoggingCamp", 0, map.getCol(x + 60), map.getRow(y), 30);
								SetTile("eaglecrestLoggingCamp", 0, map.getCol(x), map.getRow(y + 60), 39);
							}, 60000, x, y);
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
			present: {normal: "assets/objects/present.png"},
		},

		onAreaJoin: function () {
			// start instructions chapter 4 if the player hasn't already
			if (Player.unlockedInstructions.length < 4) {
				Dom.instructions.page(3);
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
								Dom.chat.say("Soul Healer Nalaa", "/me gently unfolds the wrapping paper to reveal a brand new Scepter of Souls."),
								Dom.chat.say("Soul Healer Nalaa", "It's a new Scepter of Souls! Thank you, adventurer. May the Demigods' blessings be bestowed upon you.")],
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
							return Player.quests.activeQuestArray.includes("Strengthening Defences") || Player.quests.activeQuestArray.includes("Reinforcing Defences");
						},
						shopGreeting: "If you're out of traps, I'll give you some more.",
					},
					{
						sold: [
							{item: Items.consumable[19], cost: 0}, // Antorax Day Firework
							{item: Items.consumable[20], cost: 3}, // Large Antorax Day Firework
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
					Player.quests.timesCompleted.eaglecrestLoggingCamp[25] === null;
				}
			},
			{
				template: NPCTemplates.torianTintop,
				x: 870,
				y: 1200,
				z: -1,
				canBeShown: function () {
					return Player.quests.activeQuestArray.includes("A Tale of Two Twintops") &&
					Player.quests.timesCompleted.eaglecrestLoggingCamp[25] === 4;
				}
			},
			{
				template: NPCTemplates.nessyTintop,
				x: 2080,
				y: 305,
				canBeShown: function () {
					return Player.quests.activeQuestArray.includes("A Tale of Two Twintops") &&
					Player.quests.timesCompleted.eaglecrestLoggingCamp[25] === 5;
				}
			},
			{
				template: NPCTemplates.torianTintop,
				x: 725,
				y: 350,
				canBeShown: function () {
					return Player.quests.activeQuestArray.includes("A Tale of Two Twintops") &&
					Player.quests.timesCompleted.eaglecrestLoggingCamp[25] === 8;
				}
			},

			{
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
					questProgress: "tbd",
					questComplete: "tbd",
				},
				canBeShown: function () {
					return Player.quests.timesCompleted.eaglecrestLoggingCamp[25] === 10;
				},
			},

			{
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
					questProgress: "tbd",
					questComplete: "tbd",
				},
				canBeShown: function () {
					return Player.quests.timesCompleted.eaglecrestLoggingCamp[25] === 10;
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
					questProgress: "tbd",
					questComplete: "tbd",
				},
				canBeShown: function () {
					return Player.quests.timesCompleted.eaglecrestLoggingCamp[25] % 2 === 1 &&
						Player.quests.timesCompleted.eaglecrestLoggingCamp[25] < Quests.eaglecrestLoggingCamp[25].numberOfRepeats-1;
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
					questProgress: "tbd",
					questComplete: "tbd",
				},
				canBeShown: function () {
					return Player.quests.timesCompleted.eaglecrestLoggingCamp[25] === null || // haven't started quest yet
						Player.quests.timesCompleted.eaglecrestLoggingCamp[25] === undefined ||
						(Player.quests.timesCompleted.eaglecrestLoggingCamp[25] % 2 === 0 && // or have started it and have completed it an even number of times
						Player.quests.timesCompleted.eaglecrestLoggingCamp[25] < Quests.eaglecrestLoggingCamp[25].numberOfRepeats-1); // and haven't completed the quest too many times
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
				image: "dummy",
				name: "Training Dummy",
				hostility: "dummy",
				subSpecies: "dummy",
				stats: {
					maxHealth: 1000,
				},
				chat: {
					fiftyPercentHealth: "/me creaks",
					tenPercentHealth: "/me creaks loudly",
					death: "/me crumbles into a heap of rubble",
				},
				onDeath: function () {
                    User.progress.dummies = Increment(User.progress.dummies);
                },
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

		chests: [
			{
                x: 1530,
                y: 1040,
                image: "present",
                name: "Tightly Packed Present", // from tintops
                loot: [{item: Items.helm[20]}, {item: Items.currency[2], quantity: 2}, {item: Items.food[0]}, {item: new UnId("loggingCamp", 1)}],
                inventorySpace: 8,
                disappearAfterOpened: true,
                canBeShown: function () {
                    return Player.quests.activeQuestArray.includes("A Tale of Two Twintops") &&
					Player.quests.timesCompleted.eaglecrestLoggingCamp[25] === 10;
                },
				onClose: function () {
					Quests.eaglecrestLoggingCamp[25].autofinish = true;
					Quests.eaglecrestLoggingCamp[25].finishName = "From Torian and Nessy Tintop";
					Dom.checkProgress();
				}
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
				template: NPCTemplates.nessyTintop,
				x: 36,
				y: 1300,
				canBeShown: function () {
					return Player.quests.activeQuestArray.includes("A Tale of Two Twintops") &&
					Player.quests.timesCompleted.eaglecrestLoggingCamp[25] === 1;
				}
			},
			{
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
			interactWithTile: function(tileNum, x, y) { // pick up logs
				if (tileNum === 93) { // left side of log stack
					// channel for 1 second
					Game.hero.channel(function () {
						// give log item to player
						if (Dom.inventory.give(Items.item[2], 1) !== false) { // check if player has enough inventory space
							// replace tiles with grass
							map.setTile(0, map.getCol(x), map.getRow(y), 105);
							map.setTile(0, map.getCol(x + 60), map.getRow(y), 105);
						}
					}, [], 1000, "Retrieving Logs");
				}
				else if (tileNum === 94) { // right side of log stack
					// channel for 1 second
					Game.hero.channel(function () {
						// give log item to player
						if (Dom.inventory.give(Items.item[2], 1) !== false) { // check if player has enough inventory space
							// replace tiles with grass
							map.setTile(0, map.getCol(x), map.getRow(y), 105);
							map.setTile(0, map.getCol(x - 60), map.getRow(y), 105);
						}
					}, [], 1000, "Retrieving Logs");
				}
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
							setTimeout(function(x, y) {
								SetTile("nilbog", 0, map.getCol(x), map.getRow(y), 29);
								SetTile("nilbog", 0, map.getCol(x + 60), map.getRow(y), 30);
								SetTile("nilbog", 0, map.getCol(x), map.getRow(y + 60), 39);
							}, 60000, x, y);
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
							setTimeout(function(x, y) {
								SetTile("nilbog", 0, map.getCol(x), map.getRow(y), 29);
								SetTile("nilbog", 0, map.getCol(x + 60), map.getRow(y), 30);
								SetTile("nilbog", 0, map.getCol(x), map.getRow(y + 60), 39);
							}, 60000, x, y);
						}
					}, [], 1000, "Making a Snowball");
				}
			},
		},

		isIcy: function() {
			return Event.event === "Christmas";
		},

		images: {
			tiles: {normal: "assets/tilemap/loggingCamp.png", christmas: "assets/tilemap/nilbog-christmas.png"},
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
			torch: {normal: "assets/objects/goblinTorchNight.png"},
			ghost: {samhain: "assets/npcs/ghost.png"},
			lootChest: {normal: "assets/objects/chest.png"},
			eaglecrestBanner: {normal: "assets/objects/eaglecrestBanner.png"},
			nilbogBanner: {normal: "assets/objects/nilbogBanner.png"},
			goblinTorchDay: {normal: "assets/objects/goblinTorchDay.png"},
			goblinTorchNight: {normal: "assets/objects/goblinTorchNight.png"},
			campfire1: {normal: "assets/objects/campfire1.png"},
			campfire2: {normal: "assets/objects/campfire2.png"},
			campfire3: {normal: "assets/objects/campfire3.png"},
			torianTintop: {normal: "assets/npcs/torianTintop.png"},
			nessyTintop: {normal: "assets/npcs/nessyTintop.png"},
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
				image: "torch",
				name: "Goblin Torch",
				hostility: "friendly",
				level: 5,
				stats: {
					maxHealth: 75,
					defence: 5,
					healthRegen: 0.1,
				},
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
						},
						roleRequirement: function () {
							return Player.quests.activeQuestArray.includes("A Burning Need to be Cleaned") && Dom.inventory.check(3, "item", 1);
						}
					},
					{
						role: "function",
						onClick: function () {
							Dom.chat.insertSequence([
								Dom.chat.say("Goblin Torch", "Have not been. Cleaned before."),
								Dom.chat.say("Goblin Torch", "Keep going. Feels good."),
							], [2000, 2000], undefined, undefined);
							Game.hero.channel(function () {
								Player.quests.npcProgress.eaglecrestLoggingCamp[24] = 5;
								Dom.currentlyDisplayed = "";
								Dom.currentNPC = {};
								Dom.checkProgress();
							}, [], 6000, "Cleaning Goblin Torch");
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
				x: 552,
				y: 577,
				image: "ghost",
				name: "Samhain Ghost",
				hostility: "friendly",
				level: 20,
				stats: {
					maxHealth: 150,
					defence: 1,
					dodgeChance: 40,
					healthRegen: 30,
				},
				roles: [
					{
						sold: [
							{item: Items.consumable[9], cost: 1, costCurrency: 4}, // samhain pot o' gloop
							//{item: Items.consumable[10], cost: 2, costCurrency: 4}, // bunch of blood bats
							{item: Items.chest[7], cost: 5, costCurrency: 4}, // ghost sheet
							{item: Items.bow[7], cost: 15, costCurrency: 4}, // samhain spiderbow
							{item: Items.sword[7], cost: 15, costCurrency: 4}, // samhain scythe
							{item: Items.staff[8], cost: 15, costCurrency: 4}, // samhain broomstick
						],
						role: "merchant",
						chooseText: "I'd like to browse your Samhain event items.",
						shopGreeting: "I can exchange items from my realm with Samhain Marks for a limited time.",
					},
				],
				chat: {
					shopLeave: "You'll be back.",
					inventoryFull: "You cannot hold that.",
					tooPoor: "You cannot afford that. Kill more enemies.",
				},
				canBeShown: function () {
					return Game.time === "bloodMoon";
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
				x: 570,
				y: 1650,
				imageDay: "goblinTorchDay",
				imageNight: "goblinTorchNight",
				name: "Eaglecrest Banner",
			},
			{
				x: 1050,
				y: 1530,
				imageDay: "goblinTorchDay",
				imageNight: "goblinTorchNight",
				name: "Eaglecrest Banner",
			},
			{
				x: 810,
				y: 1350,
				imageDay: "goblinTorchDay",
				imageNight: "goblinTorchNight",
				name: "Eaglecrest Banner",
			},
			{
				x: 1530,
				y: 330,
				imageDay: "goblinTorchDay",
				imageNight: "goblinTorchNight",
				name: "Eaglecrest Banner",
			},
			{
				x: 1650,
				y: 95,
				imageDay: "goblinTorchDay",
				imageNight: "goblinTorchNight",
				name: "Eaglecrest Banner",
			},
			{
				x: 1890,
				y: 150,
				imageDay: "goblinTorchDay",
				imageNight: "goblinTorchNight",
				name: "Eaglecrest Banner",
			},
			{
				x: 1950,
				y: 450,
				imageDay: "goblinTorchDay",
				imageNight: "goblinTorchNight",
				name: "Eaglecrest Banner",
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
			name: "Nilbog Tower",
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
				onTouchChat: "A painting of Wizard Andrews, one of the most accomplished wizards that has ever been known. This tower used to be his, but was overrun by goblins after he left to persue his life of wizardry."
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
			name: "Nilbog Tower",
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
			name: "Nilbog Tower",
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
			name: "Nilbog Tower",
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
			layers: [
				[43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 11, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 11, 43, 43, 43, 43, 43, 43, 43, 43, 11, 43, 43, 43, 43, 43, 43, 43, 43, 43, 11, 43, 43, 43, 43, 27, 43, 42, 34, 17, 27, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 27, 1, 42, 34, 43, 27, 43, 43, 43, 43, 43, 43, 43, 43, 26, 10, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 26, 10, 43, 43, 43, 43, 43, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 51, 51, 51, 51, 51, 51, 51, 41, 41, 41, 41, 41, 41, 51, 51, 51, 51, 51, 51, 51, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 59, 49, 49, 49, 49, 49, 49, 49, 57, 41, 41, 41, 41, 59, 49, 49, 49, 49, 49, 49, 49, 57, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 59, 49, 49, 49, 49, 49, 49, 49, 57, 41, 41, 41, 41, 59, 49, 49, 49, 49, 49, 49, 49, 57, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 59, 49, 49, 49, 49, 49, 49, 49, 57, 41, 41, 41, 41, 59, 49, 49, 49, 49, 49, 49, 49, 57, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 59, 49, 49, 49, 49, 49, 49, 49, 57, 41, 41, 41, 41, 59, 49, 49, 49, 49, 49, 49, 49, 57, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 59, 49, 49, 49, 49, 49, 49, 49, 57, 41, 41, 41, 41, 59, 49, 49, 49, 49, 49, 49, 49, 57, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 58, 58, 58, 58, 58, 58, 58, 41, 41, 41, 41, 41, 41, 58, 58, 58, 58, 58, 58, 58, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 51, 51, 51, 51, 51, 51, 51, 41, 41, 41, 41, 41, 41, 51, 51, 51, 51, 51, 51, 51, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 59, 49, 49, 49, 49, 49, 49, 49, 57, 41, 41, 41, 41, 59, 49, 49, 49, 49, 49, 49, 49, 57, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 59, 49, 49, 49, 49, 49, 49, 49, 57, 41, 41, 41, 41, 59, 49, 49, 49, 49, 49, 49, 49, 57, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 59, 49, 49, 49, 49, 49, 49, 49, 57, 41, 41, 41, 41, 59, 49, 49, 49, 49, 49, 49, 49, 57, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 59, 49, 49, 49, 49, 49, 49, 49, 57, 41, 41, 41, 41, 59, 49, 49, 49, 49, 49, 49, 49, 57, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 59, 49, 49, 49, 49, 49, 49, 49, 57, 41, 41, 41, 41, 59, 49, 49, 49, 49, 49, 49, 49, 57, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 58, 58, 58, 58, 58, 58, 58, 41, 41, 41, 41, 41, 41, 58, 58, 58, 58, 58, 58, 58, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41],
				[],
			],
		},

		isIcy: function() {
			return Event.event === "Christmas";
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
					identifyMythic: "Ooh! It's been a while since I last saw one of them!",
					tooPoor: "I can't itentify that for free, you know.",
				},
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
		],
	},

	eaglecrestWest: {
		id: 11,

		data: {
			name: "Eaglecrest City",
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
			layers: [
				[43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 43, 43, 43, 11, 43, 43, 43, 43, 20, 43, 43, 43, 43, 11, 43, 9, 43, 11, 43, 43, 43, 43, 25, 43, 43, 43, 43, 11, 43, 43, 43, 43, 43, 43, 43, 43, 43, 27, 43, 42, 43, 27, 43, 43, 43, 43, 43, 43, 43, 43, 43, 27, 43, 34, 43, 27, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 26, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 10, 43, 43, 43, 43, 43, 43, 43, 43, 41, 59, 49, 49, 49, 49, 49, 57, 41, 59, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 57, 41, 59, 49, 49, 49, 49, 49, 57, 41, 41, 60, 68, 49, 49, 49, 4, 12, 41, 60, 68, 49, 49, 49, 49, 49, 49, 49, 49, 49, 4, 12, 41, 60, 68, 49, 49, 49, 4, 12, 41, 41, 41, 76, 58, 58, 58, 5, 41, 41, 41, 76, 58, 58, 58, 58, 58, 58, 58, 58, 58, 5, 41, 41, 41, 76, 58, 58, 58, 5, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41],
				[],
			],
		},

		images: {
			tiles: {normal: "assets/tilemap/eaglecrest.png"},
			maskSalesman: {normal: "assets/npcs/maskSalesman.png"},
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
					{
						sold: [
							{item: Items.helm[12], cost: 5}, // night owl mask
							{item: Items.helm[13], cost: 5}, // light idol mask
							{item: Items.helm[14], cost: 5}, // dragon flame mask
							{item: Items.helm[15], cost: 5}, // bear mask
							{item: Items.helm[16], cost: 5}, // vampiric mask
							{item: Items.helm[17], cost: 5}, // solar baron mask
							{item: Items.helm[18], cost: 5}, // feathered hawk mask
						],
						numberSold: 3, // only 3 sold at once
						rotation: "week", // masks being sold change every week
						role: "merchant",
						shopGreeting: "Made from only the finest of <strong><em>living</em></strong> creatures.",
					},
				],
				chat: {
					shopLeave: "Come back soon. There'll be more masks for you to choose from.",
					inventoryFull: "You don't have enough space to hold that mask.",
					tooPoor: "That mask seems out of your price range. Kill something and return.",
				},
			},
		],
	},

	eaglecrestEast: {
		id: 12,

		data: {
			name: "Eaglecrest City",
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
			layers: [
				[43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 43, 43, 43, 11, 43, 43, 43, 43, 33, 43, 43, 43, 43, 11, 43, 9, 43, 11, 43, 43, 43, 43, 9, 43, 43, 43, 43, 11, 43, 43, 43, 43, 43, 43, 43, 43, 43, 27, 43, 42, 43, 27, 43, 43, 43, 43, 43, 43, 43, 43, 43, 27, 43, 34, 43, 27, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 26, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 10, 43, 43, 43, 43, 43, 43, 43, 43, 41, 59, 49, 49, 49, 49, 49, 57, 41, 59, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 57, 41, 59, 49, 49, 49, 49, 49, 57, 41, 41, 60, 68, 49, 49, 49, 4, 12, 41, 60, 68, 49, 49, 49, 49, 49, 49, 49, 49, 49, 4, 12, 41, 60, 68, 49, 49, 49, 4, 12, 41, 41, 41, 76, 58, 58, 58, 5, 41, 41, 41, 76, 58, 58, 58, 58, 58, 58, 58, 58, 58, 5, 41, 41, 41, 76, 58, 58, 58, 5, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41],
				[],
			],
		},

		images: {
			tiles: {normal: "assets/tilemap/eaglecrest.png"},
			itemBuyer: {normal: "assets/npcs/nhkghghh.png"},
			cart: {normal: "assets/objects/cartEaglecrest3.png"},
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
			maxPeople: 3,
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
			},
			{
				// id: 1,
				x: 660,
				y: 139,
				image: "banker1",
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
			},
			{
				// id: 2,
				x: 360,
				y: 137,
				image: "banker3",
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
			},
			{
				// id: 3,
				x: 120,
				y: 151,
				image: "banker2",
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

		checkpoint: false, // probably in the future taverns should be the ONLY checkpoints

		lootArea: "eaglecrest", // for level up music

		mapData: {
			cols: 21,
			rows: 24,
			tsize: 60,
			tilesPerRow: 8,
			solidTiles: [1, 2, 3, 6, 7, 9, 10, 11, 13, 15, 17, 18, 19, 20, 21, 23, 25, 26, 27, 28, 29, 31, 33, 34, 35, 36, 37, 38, 39, 42, 43, 44, 45, 46, 47, 53, 55, 61, 65, 69, 73, 77, 82, 83],
			dayTiles: [11, 27, 34, 42, 7], // windows and lights
			nightTiles: [3, 19, 2, 18, 15],
			layers: [
				[6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 6, 6, 6, 7, 6, 6, 6, 7, 6, 6, 6, 7, 6, 6, 6, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 30, 30, 30, 30, 30, 30, 30, 54, 54, 54, 6, 6, 7, 6, 6, 6, 6, 6, 7, 6, 6, 54, 54, 54, 30, 30, 54, 54, 54, 54, 54, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 54, 54, 54, 54, 54, 54, 54, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 54, 54, 30, 30, 30, 30, 30, 30, 30, 46, 46, 46, 46, 46, 46, 46, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
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
			alysLoreworth: {normal: "assets/npcs/alysLoreworth.png"},
			dirt: {normal: "assets/enemies/dirt.png"},
			mug: {normal: "assets/items/item/25.png"},
			plate: {normal: "assets/items/item/26.png"},
			table: {normal: "assets/objects/table.png"},
			largeTable: {normal: "assets/objects/largeTable.png"},
			barrel: {normal: "assets/objects/barrel.png"},
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
							{item: Items.consumable[21], cost: 3,}, // Beetroot Beer
							{item: Items.consumable[16], cost: 2, costCurrency: 5, eventRequirement: "Christmas"}, // Mulled Wine
							{item: Items.food[0], cost: 2,}, // Bread
							{item: Items.food[4], cost: 4,}, // Sandwich
							{item: Items.food[1], cost: 2, costCurrency: 5, eventRequirement: "Christmas"}, // Mince Pie
							{item: Items.food[2], cost: 2, costCurrency: 5, eventRequirement: "Christmas"}, // Christmas Pudding
							{item: Items.food[3], cost: 5, eventRequirement: "Antorax"}, // Birthday Cake (changed every year)
							{item: Items.teleport[1], cost: 100,}, // Teleport Coin
						],
						role: "merchant",
						shopGreeting: `<strong>Jak</strong>: Our food and drink was all freshly made today.<br>
									<strong>Rhus</strong>: You want some?<br>`,
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
			{
				x: 752,
				y: 230,
				image: "alysLoreworth",
				name: "Alys Loreworth, Lead Archaeologist",
				hostility: "friendly",
				level: 100,
				stats: {
					maxHealth: 550,
					defence: 5,
				},
				roles: [
					{
						sold: [
							{item: Items.helm[8], cost: 15,}, // Beetroot Beer
						],
						role: "merchant",
						roleRequirement: function () {
							return Player.level >=5;
						},
						shopGreeting: "A good archaeologist always has a hat. Oh. Do you not?",
					},
					{
						role: "identifier",
					},
				],
				chat: {
					notUnlockedRoles: "Can you not see I'm trying to have a rest here? Come back later.",
					chooseChat: "We're moving to the Ley Confluence soon. I'm just on a break.",
					// identifier
					identifierGreeting: "Let's see if you've found anything new.",
					noUnidentified: "There's realms of items for you to explore. Find some unidentified items!",
					identifyCommon: "And you think <em>this</em> will help our archaeology effort?",
					identifyUnique: "Oh, this one is of rather good quality.",
					identifyMythic: "It's not often I see one of these!",
					// merchant
					shopLeave: "Good luck on your travels.",
					inventoryFull: "Oh, you've got so many artefacts in your inventory that there's no space for this.",
					tooPoor: "Looks like you're not being paid enough for your efforts. Earn some gold and come back.",
					// event
					christmasGreeting: "Merry Christmas! I hope you've found lots of rare items this festive season. I heard there's some free ones in the city today.",
					antoraxDayGreeting: `We've been operating the Antorax Archaeology effort for ${Event.antoraxAge} years. Doesn't that call for celebration?`,
				},
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
			layers: [
				[6, 6, 6, 23, 47, 31, 55, 31, 55, 39, 6, 6, 6, 6, 7, 6, 31, 55, 39, 7, 39, 23, 47, 6, 7, 6, 6, 6, 6, 39, 23, 47, 23, 47, 31, 55, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 46, 46, 46, 46, 46, 46, 46, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
				[],
			],
		},

		images: {
			tiles: {normal: "assets/tilemap/eaglecrest.png"},
			tamtam: {normal: "assets/npcs/tamtam.png"},
			potionStand: {normal: "assets/objects/potionStand.png"},
			cauldronEaglecrest: {normal: "assets/objects/cauldronEaglecrest.png"},
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
							{item: Items.consumable[25], cost: 3}, // potion of fire resistance
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
					areaJoin: "Hellooooo! Welcome to Eaglecrest Elixirs! You look like you could do with one of Tamtam's toxins!"
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
				x: 720,
				y: 600,
				image: "cauldronEaglecrest",
				name: "Cauldron",
			},
			{
				x: 730,
				y: 285,
				image: "cauldronEaglecrest",
				name: "Cauldron",
			},
			{
				x: 650,
				y: 280,
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
			layers: [
				[6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 6, 6, 6, 6, 7, 6, 6, 6, 6, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 46, 46, 46, 46, 46, 46, 46, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
				[],
			],
		},

		images: {
			tiles: {normal: "assets/tilemap/eaglecrest.png"},
			barda: {normal: "assets/npcs/barda.png"},
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
						sold: [
							{item: Items.item[28], cost: 1}, // fireroot

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
					shopLeave: "Good luck with your quest, guest.",
					inventoryFull: "Unless the cards have bluffed... your inventory is stuffed.",
					tooPoor: "No gold? Get out of my shop.",
					areaJoin: "The best shop in west Eaglecrest, no jest.",
				},
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
		],

		onRainStart: function () {
			// add water from gargoyles in 10 seconds
			setTimeout(function () {
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
			setTimeout(function () {
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
};

var Villagers = [
	{
		image: "silvioStarstrike",
		imageSource: {normal: "assets/npcs/silvioStarstrike.png"},
		name: "Silvio Starstrike",
		level: 20,
		stats: {
			maxHealth: 150,
			walkSpeed: 160,
			defence: 5,
		},
		hostility: "friendly",
		exceptAreas: [
			"eaglecrestLoggingCamp",
		],
		roles: [],
		chat: {
			notUnlockedRoles: "I bet you've never met a lunarlancer before! Be warned - I have a short temper.",
			chooseChat: "Don't say a false word. I could decimate you with my celestial power.",
			receiveTavernGood: "I see you've brought me some blessings from the stars. What do you mean I ordered them? Don't underestimate the power of the sky.",
		}
	},
	{
		image: "darioHorfern",
		imageSource: {normal: "assets/npcs/darioHorfern.png"},
		name: "Dario Horfern",
		level: 10,
		stats: {
			maxHealth: 100,
			walkSpeed: 125,
			defence: 3,
		},
		hostility: "friendly",
		areas: [
			"loggingCampTavern",
			"eaglecrestTavern",
		],
		roles: [],
		chat: {
			notUnlockedRoles: {
				loggingCamp: "This place is small. I prefer it in Eaglecrest.",
				eaglecrest: "This would be my favourite place in the whole city... if it wasn't so dusty!",
			},
			chooseChat: "You can go away if you haven't brought me a drink.",
			receiveTavernGood: "I've been waiting for ages for this!",
		}
	},
	{
		image: "gremaRoskin",
		imageSource: {normal: "assets/npcs/gremaRoskin.png"},
		name: "Grema Roskin",
		level: 15,
		stats: {
			maxHealth: 125,
			walkSpeed: 135,
			defence: 2,
		},
		hostility: "friendly",
		areas: [
			"loggingCampTavern",
			"eaglecrestTavern",
		],
		roles: [],
		chat: {
			notUnlockedRoles: {
				loggingCamp: "Hm. Doesn't smell of fried beetroot here.",
				eaglecrest: "Smells of fried beetroot in here."
			},
			chooseChat: "Hello again, did you bring beetroot this time?",
			receiveTavernGood: "It's no fried beetroot, but it'll do. Thank you.",
		}
	},
	{
		image: "feller",
		imageSource: {normal: "assets/npcs/feller.png"},
		name: "Logging Camp Feller",
		level: 4,
		stats: {
			maxHealth: 70,
			walkSpeed: 115,
			defence: 3,
		},
		hostility: "friendly",
		areas: [
			"loggingCampTavern",
			"eaglecrestLoggingCamp",
		],
		roles: [],
		chat: {
			notUnlockedRoles: "<em>You</em> should try carrying these logs around all day!",
			chooseChat: "Can't talk for long, my back's playing up again.",
			receiveTavernGood: "Ah, thanks! Just hold these logs for a minute.",
		}
	},
	{
		image: "treecutter",
		imageSource: {normal: "assets/npcs/treecutter.png"},
		name: "Logging Camp Treecutter",
		level: 7,
		stats: {
			maxHealth: 85,
			walkSpeed: 120,
			defence: 5,
		},
		hostility: "friendly",
		areas: [
			"loggingCampTavern",
			"eaglecrestLoggingCamp",
		],
		roles: [],
		chat: {
			notUnlockedRoles: "Teper should try doing some work and not just ordering us around all the time.",
			chooseChat: "Y'know I cut the trees down to build this place: it's great to see my hard work put to good use!",
			receiveTavernGood: "Just the break I needed.",
		}
	},
	{
		image: "robertHendman",
		imageSource: {normal: "assets/npcs/robertHendman.png"},
		name: "Robert Hendman",
		level: 12,
		stats: {
			maxHealth: 85,
			walkSpeed: 140,
			defence: 5,
		},
		hostility: "friendly",
		exceptAreas: [
			"eaglecrestLoggingCamp",
		],
		roles: [],
		chat: {
			notUnlockedRoles: "Have you seen anyone playing Wizard's Lore before? Me neither. I bet those game boards are just for show.",
			chooseChat: "I'm going to head down to the Eaglecrest monastery soon. Would you like to come along too?",
			receiveTavernGood: `Thank you ${ChatText.gender[Player.gender].formal}! A good day to you.`,
		}
	},
	{
		image: "wilmaRedding",
		imageSource: {normal: "assets/npcs/wilmaRedding.png"},
		name: "Wilma Redding",
		level: 12,
		stats: {
			maxHealth: 85,
			walkSpeed: 140,
			defence: 5,
		},
		hostility: "friendly",
		exceptAreas: [
			"eaglecrestLoggingCamp",
		],
		roles: [],
		chat: {
			notUnlockedRoles: "So many magic artifacts around, yet I can't seem to find a single one!",
			chooseChat: "Why would a fancy adventurer like you be talking to someone like me?",
			receiveTavernGood: "My order? And not a moment too soon!",
		}
	},
	{
		image: "greenbeard",
		imageSource: {normal: "assets/npcs/greenbeard.png"},
		name: "Captain Greenbeard",
		level: 40,
		stats: {
			maxHealth: 250,
			walkSpeed: 130,
			defence: 8,
		},
		hostility: "friendly",
		exceptAreas: [
			"eaglecrestLoggingCamp",
		],
		roles: [],
		chat: {
			notUnlockedRoles: "Yarr harr! Have ye spied me ship nearby?",
			chooseChat: "Ahoy there!",
			receiveTavernGood: "Nothin' better than a hearty supper at the tavern.",
		}
	},
	{
		image: "gildoCleftbeard",
		imageSource: {normal: "assets/npcs/gildoCleftbeard.png"},
		name: "Gildo Cleftbeard",
		level: 14,
		stats: {
			maxHealth: 120,
			walkSpeed: 123,
			defence: 6,
		},
		hostility: "friendly",
		exceptAreas: [
			"eaglecrestLoggingCamp",
		],
		roles: [],
		chat: {
			notUnlockedRoles: "I would never go to that Nilbog! Wouldn't want to get my boots muddy. Oh, and the goblins, too.",
			chooseChat: "I tip my hat to you.",
			receiveTavernGood: "Thank you, now I just have to be careful not to get any in my beard!",
		}
	},
	{
		image: "eaglecrestGuard",
		imageSource: {normal: "assets/npcs/eaglecrestGuard.png"},
		name: "Eaglecrest Guard",
		level: 50,
		stats: {
			maxHealth: 300,
			walkSpeed: 170,
			defence: 20,
		},
		hostility: "friendly",
		exceptAreas: [
			"loggingCampTavern",
			"eaglecrestLoggingCamp",
		],
		roles: [],
		chat: {
			notUnlockedRoles: "Becoming a guard has been my dream ever since I was a child. I admired their might!",
			chooseChat: "Sorry if I seem distracted, but I'm always on the lookout for criminals.",
			receiveTavernGood: "Thanks. I need this to keep my strength up.",
		}
	},
	{
		image: "eaglecrestGuard2",
		imageSource: {normal: "assets/npcs/eaglecrestGuard2.png"},
		name: "Eaglecrest Guard",
		level: 50,
		stats: {
			maxHealth: 300,
			walkSpeed: 170,
			defence: 20,
		},
		hostility: "friendly",
		exeptAreas: [
			"loggingCampTavern",
			"eaglecrestLoggingCamp",
		],
		roles: [],
		chat: {
			notUnlockedRoles: "Becoming a guard has been my dream ever since I was a child. I admired their might!",
			chooseChat: "Sorry if I seem distracted, but I'm always on the lookout for criminals.",
			receiveTavernGood: "Thanks. I need this to keep my strength up.",
		}
	},
	{
		image: "alfonsoMurbry",
		imageSource: {normal: "assets/npcs/alfonsoMurbry.png"},
		name: "Alfonso Murbry",
		level: 18,
		stats: {
			maxHealth: 140,
			walkSpeed: 138,
			defence: 3,
		},
		hostility: "friendly",
		exceptAreas: [
			"eaglecrestLoggingCamp",
		],
		roles: [],
		chat: {
			notUnlockedRoles: "Do you know how to get a golden slingshot? I've heard it fires three pellets at once!",
			chooseChat: "You know there's said to sometimes be floating presents in the sky held up by balloons. That's why you should always carry around a slingshot!",
			receiveTavernGood: "Excellent! Just in time.",
		}
	},
];

// sets a tile on the Map (specifyable area for if it is used in a setTimeout)
function SetTile (area, layer, col, row, newTileNum) {
	let map = Areas[area].mapData;
	map.layers[layer][row * map.cols + col] = newTileNum;
}
