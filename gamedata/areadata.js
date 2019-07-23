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
			tilesPerRow: 7,
			waterTiles: [24, 31, 38],
			iceTiles: [24, 31],
			pathTiles: [2, 3, 9, 10, 16, 17, 23, 30, 37, 44, 51, 58],
			scrollY: false, // only scrolls x
			layers: [
				[50, 50, 1, 50, 2, 50, 1, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 39, 24, 24, 24, 24, 4, 50, 1, 50, 50, 50, 50, 36, 50, 50, 5, 6, 7, 50, 50, 50, 50, 36, 50, 50, 50, 36, 50, 50, 50, 50, 50, 50, 50, 50, 36, 50, 50, 50, 50, 36, 50, 50, 50, 50, 50, 50, 36, 50, 50, 8, 50, 2, 50, 8, 50, 50, 50, 50, 50, 50, 50, 50, 26, 27, 39, 24, 24, 24, 38, 4, 50, 8, 50, 50, 50, 50, 50, 50, 50, 12, 13, 14, 50, 43, 50, 50, 50, 50, 36, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 36, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 43, 15, 50, 2, 50, 15, 26, 27, 26, 27, 50, 50, 50, 50, 26, 27, 39, 24, 24, 24, 24, 4, 50, 15, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 36, 50, 50, 50, 50, 50, 50, 50, 43, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 26, 27, 50, 50, 37, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 10, 3, 3, 3, 3, 17, 2, 2, 2, 9, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 60, 50, 26, 27, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 39, 24, 24, 24, 24, 4, 26, 27, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 43, 50, 4, 50, 50, 50, 50, 50, 50, 50, 26, 27, 50, 50, 50, 50, 50, 43, 50, 39, 31, 24, 24, 24, 81, 32, 60, 50, 50, 50, 50, 50, 43, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 19, 20, 21, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 81, 60, 50, 50, 50, 50, 50, 26, 27, 50, 50, 50, 50, 26, 27, 53, 32, 25, 24, 24, 24, 38, 24, 24, 81, 60, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 22, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 24, 81, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 25, 24, 24, 24, 24, 24, 24, 24, 24, 24, 81, 32, 60, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 5, 6, 7, 50, 50, 50, 50, 36, 50, 50, 50, 50, 50, 29, 43, 50, 50, 50, 50, 50, 50, 50, 50, 36, 53, 24, 24, 24, 24, 24, 24, 24, 38, 31, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 38, 24, 52, 45, 38, 24, 24, 24, 81, 32, 32, 60, 50, 50, 50, 50, 50, 50, 50, 50, 50, 12, 13, 14, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 53, 32, 32, 32, 32, 32, 32, 32, 32, 32, 25, 31, 38, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 38, 24, 24, 52, 45, 52, 45, 45, 24, 31, 24, 24, 24, 24, 81, 32, 32, 32, 32, 32, 60, 50, 50, 50, 50, 50, 50, 50, 36, 50, 50, 50, 50, 36, 53, 32, 32, 32, 25, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 38, 31, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 38, 24, 24, 24, 81, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 25, 24, 24, 24, 24, 24, 24, 24, 52, 24, 24, 24, 24, 38, 24, 24, 24, 24, 24, 38, 24, 24, 24, 24, 24, 24, 45, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 38, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 45, 52, 24, 24, 24, 24, 24, 24, 24, 24, 24, 38, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 38, 24, 24, 24, 24, 31, 24, 24, 24, 24, 24, 24, 24, 38, 24, 31, 31, 31, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 31, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 52, 24, 24, 24, 24, 24, 24, 31, 24, 24, 24, 24, 24, 24, 24, 24, 24, 38, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 31, 24, 24, 24, 24, 24, 24, 24, 45, 24, 24, 24, 38, 24, 24, 24, 24, 24, 24, 38, 31, 24, 24, 24, 24, 38, 24, 24, 24, 24, 24, 24, 31, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 52, 45, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 38, 52, 24, 24, 24, 24, 24, 24, 24, 24, 24, 38, 24, 24, 24, 52, 52, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 31, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 31, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 31, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 38, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 38, 31, 24, 24, 24, 24, 24, 24, 31, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 45, 38, 24, 24, 24, 24, 24, 24],
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
			tiles: {normal: "assets/tilemap/tutorial.png", christmas: "assets/tilemap/tutorial-christmas.png"},
			driver: {normal: "assets/npcs/driver.png"},
			weaponsmith: {normal: "assets/npcs/weaponsmith.png"},
			cart: {normal: "assets/objects/cartEaglecrest.png"},
			fisherman: {normal: "assets/npcs/tobenam.png"},
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
		],

		things: [
			{
				x: 3660,
				y: 250,
				image: "cart",
				name: "Cart",
			},
		],

		villagers: [
			/*{

				x: 400,
				y: 400,
				image: "weaponsmith",
				name: "Weaponsmith Clone",
				stats: {
					maxHealth: 100,
					walkSpeed: 100,
					swimSpeed: 10,
				},
				hostility: "friendly",
				boundary: {
					x: 0,
					y: 0,
					width: 1000,
					height: 400,
				},

			},*/
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
			tilesPerRow: 9,
			solidTiles: [1, 10, 19, 28, 37, 46], // tavern building
			waterTiles: [30, 32, 39, 41, 48, 50],
			iceTiles: [30, 32, 39, 41, 48],
			pathTiles: [4, 5, 13, 14, 22, 23, 31, 40, 49, 58, 67, 76],
			layers: [
				[3, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 10, 10, 10, 10, 10, 10, 10, 93, 93, 93, 93, 93, 93, 93, 93, 93, 51, 41, 59, 50, 32, 6, 93, 12, 93, 93, 93, 93, 93, 84, 93, 93, 93, 93, 93, 93, 93, 93, 25, 26, 93, 93, 10, 46, 10, 28, 19, 46, 10, 93, 93, 93, 93, 93, 93, 93, 93, 93, 51, 68, 32, 32, 59, 6, 93, 21, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 25, 26, 93, 74, 83, 10, 10, 10, 37, 10, 10, 10, 74, 83, 93, 84, 93, 93, 93, 93, 93, 51, 32, 32, 30, 50, 6, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 65, 2, 2, 2, 2, 11, 2, 2, 2, 2, 2, 2, 29, 93, 93, 93, 93, 93, 3, 51, 32, 32, 39, 32, 6, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 56, 2, 2, 2, 2, 2, 2, 2, 2, 11, 2, 2, 29, 93, 93, 93, 93, 93, 12, 51, 32, 41, 48, 32, 6, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 84, 65, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 93, 93, 93, 93, 93, 21, 51, 50, 32, 32, 32, 6, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 25, 26, 65, 2, 2, 2, 11, 2, 2, 2, 2, 2, 2, 2, 29, 93, 93, 93, 93, 93, 93, 51, 32, 32, 32, 32, 6, 93, 93, 93, 93, 93, 93, 93, 93, 25, 26, 93, 93, 93, 93, 93, 93, 93, 65, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 29, 93, 93, 93, 93, 93, 93, 14, 5, 5, 5, 5, 23, 93, 93, 75, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 65, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 29, 93, 93, 93, 93, 93, 93, 51, 41, 32, 32, 32, 6, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 56, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 29, 93, 93, 93, 93, 93, 93, 51, 32, 32, 30, 32, 6, 93, 93, 93, 93, 66, 93, 93, 93, 57, 93, 93, 93, 93, 93, 93, 93, 93, 56, 2, 2, 2, 2, 2, 2, 2, 2, 11, 2, 2, 20, 75, 93, 93, 93, 93, 93, 51, 32, 32, 39, 32, 6, 93, 93, 93, 93, 93, 93, 57, 93, 93, 93, 57, 93, 93, 93, 93, 93, 93, 65, 2, 11, 2, 2, 2, 2, 2, 2, 2, 2, 2, 29, 93, 93, 93, 93, 93, 93, 51, 32, 41, 48, 50, 6, 93, 93, 57, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 65, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 29, 93, 93, 93, 93, 93, 93, 51, 32, 50, 41, 32, 6, 93, 93, 93, 93, 93, 93, 93, 93, 66, 93, 93, 93, 93, 93, 93, 93, 93, 93, 47, 47, 47, 47, 38, 38, 38, 47, 47, 38, 47, 93, 93, 93, 93, 93, 93, 93, 51, 32, 32, 32, 32, 6, 93, 93, 93, 93, 57, 93, 57, 93, 93, 93, 93, 93, 7, 8, 9, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 51, 32, 32, 32, 32, 6, 93, 93, 93, 93, 93, 66, 93, 93, 93, 93, 93, 93, 16, 17, 18, 84, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 51, 32, 32, 32, 32, 6, 93, 93, 93, 93, 93, 93, 93, 93, 93, 57, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 51, 32, 59, 32, 32, 6, 93, 93, 66, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 3, 93, 93, 93, 93, 93, 3, 93, 93, 93, 93, 93, 93, 93, 93, 93, 51, 41, 32, 32, 32, 6, 93, 93, 93, 93, 93, 93, 57, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 12, 93, 93, 93, 93, 93, 12, 93, 93, 93, 93, 93, 93, 93, 93, 93, 51, 32, 32, 30, 32, 6, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 21, 93, 93, 22, 93, 93, 21, 25, 26, 93, 93, 93, 93, 93, 93, 93, 51, 32, 50, 39, 32, 6, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 4, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 51, 32, 32, 48, 41, 6, 93, 93, 93, 93, 93, 93, 93, 93, 75, 93, 93, 93, 93, 93, 93, 93, 93, 25, 26, 93, 93, 93, 93, 4, 93, 93, 93, 7, 8, 9, 93, 93, 93, 93, 75, 93, 51, 32, 32, 32, 32, 6, 93, 84, 93, 93, 93, 75, 93, 93, 93, 93, 75, 93, 93, 93, 93, 93, 25, 26, 93, 25, 26, 93, 93, 4, 93, 93, 84, 16, 17, 18, 93, 93, 93, 93, 93, 93, 51, 32, 32, 32, 50, 6, 93],
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
						chat: "Are you sure? Give them here.<br>You're right, they were mine. They were stolen by a goblin during the recent goblin siege. Are you sure I can have them back? I will make sure that you are aptly rewarded.",
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
							// start cutscene
							Dom.cutscene();
							// quest progress
							Player.quests.questProgress.christmasPresentsDelivered = 1; // always the first NPC to be delivered to
							// chat
							Dom.chat.insertSequence([
							Dom.chat.say("Soul Healer Nalaa", "Thank you for taking the time to bring this to me."),
							Dom.chat.say("Soul Healer Nalaa", "/me gently unfolds the wrapping paper to reveal a brand new Scepter of Souls."),
							Dom.chat.say("Soul Healer Nalaa", "It's a new Scepter of Souls! Thank you, adventurer. May the Demigods' blessings be bestowed upon you.")],
							[500]);
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
							// start cutscene
							Dom.cutscene();
							// quest progress
							Player.quests.questProgress.christmasPresentsDelivered = 2; // always the second NPC to be delivered to
							// chat
							Dom.chat.insertSequence([
							Dom.chat.say("Item Buyer Noledar", "Wow, really? That's so nice, I don't think anyone has delivered me a present before!"),
							Dom.chat.say("Item Buyer Noledar", "/me peels away at the wrapping paper to reveal a large heap of gold."),
							Dom.chat.say("Item Buyer Noledar", "Wow! Gilas was right - good things <strong>can</strong> happen to ordinary people! Thank you very much, and a merry Christmas to you!")],
							[500]);
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
							{item: Items.consumable[4], cost: 2}, // potion of health I
							{item: Items.consumable[3], cost: 2}, // potion of swiftness I
							{item: Items.consumable[2], cost: 4}, // potion of strength I
							{item: Items.consumable[11], cost: 4, condition: function () { // potion of goblin resistance
								return Player.quests.completedQuestArray.includes("Potion Making II");
							}},
							{item: Items.consumable[17], cost: 2, costCurrency: 5, eventRequirement: "Christmas"}, // Christmas Potion
						],
						role: "merchant",
						roleRequirement: function () {
							return Player.level > 2;
						},
						shopGreeting: "Want to buy a potion? Of course you do.",
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
									y: 1201,
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
				image: "cart",
				name: "Cart",
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
			level: "",
			territory: "",
			displayOnEnter: true,
		},

		indoors: true,

		tagGameAllowed: true,

		song_day: "assets/music/Tavern.mp3",
		song_night: "assets/music/Tavern.mp3",

		checkpoint: false, // probably in the future taverns should be the ONLY checkpoints

		lootArea: "loggingCamp", // for level up music

		mapData: {
			cols: 16,
			rows: 24,
			tsize: 60,
			tilesPerRow: 5,
			solidTiles: [1, 3, 6, 8, 12], // bar and walls
			dayTiles: [9], // windows
			nightTiles: [10],
			layers: [
				[3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 9, 3, 3, 3, 3, 9, 3, 3, 3, 9, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 8, 8, 3, 3, 3, 3, 3, 11, 11, 11, 11, 11, 11, 11, 11, 11, 7, 7, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 11, 11, 3, 3, 9, 3, 3, 3, 3, 3, 9, 3, 3, 3, 3, 3, 12, 12, 8, 8, 3, 8, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 12, 12, 7, 7, 11, 7, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 1, 1, 1, 1, 1, 1, 1, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 2, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 7, 2, 2, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 7, 7, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11],
			],
		},

		images: {
			tiles: {normal: "assets/tilemap/tavern.png"},
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
						newQuestFrequency: "daily",
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
		],
		
		things: [
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
				orderOffsetY: -40,
				image: "table",
				name: "Table",
			},
			{
				x: 180,
				y: 508,
				orderOffsetY: -40,
				image: "table",
				name: "Table",
			},
			{
				x: 600,
				y: 508,
				orderOffsetY: -40,
				image: "table",
				name: "Table",
			},
			{
				x: 780,
				y: 1108,
				orderOffsetY: -40,
				image: "table",
				name: "Table",
			},
			{
				x: 780,
				y: 1288,
				orderOffsetY: -40,
				image: "table",
				name: "Table",
			},
			{
				x: 842,
				y: 324,
				orderOffsetY: -30,
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
					{x: array[i].x-40, y: array[i].y-20, orderOffsetY: -20},
					{x: array[i].x-1.5, y: array[i].y-20, orderOffsetY: -20},
					{x: array[i].x+37, y: array[i].y-20, orderOffsetY: -20},
				);
			}
			
			// generate an array of large tables
			array = Game.things.filter(thing => thing.name === "Large Table" && thing.use !== "wizardsLore");
			
			// add to the array of possible positions
			for (let i = 0; i < array.length; i++) {
				positions.push(
					{x: array[i].x-40, y: array[i].y-20, orderOffsetY: -10},
					{x: array[i].x-1.5, y: array[i].y-20, orderOffsetY: -10},
					{x: array[i].x+37, y: array[i].y-20, orderOffsetY: -10},
					{x: array[i].x-20, y: array[i].y-40, orderOffsetY: 10},
					{x: array[i].x+17, y: array[i].y-40, orderOffsetY: 10},
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
		
		onAreaLeave: function () {
			if (Player.quests.activeQuestArray.includes("Cleaning the Floor")) {
				Dom.quest.abandon(Quests.tavern[1]);
				Dom.chat.insert("Cleaning the Floor has been abandoned. You can start it again by speaking to an innkeeper.")
			}
			if (Player.quests.activeQuestArray.includes("Tavern Tidy-up")) {
				Dom.quest.abandon(Quests.tavern[2]);
				Dom.chat.insert("Tavern Tidy-up has been abandoned. You can start it again by speaking to an innkeeper.")
			}
			if (Player.quests.activeQuestArray.includes("Hungry Taverners")) {
				Dom.quest.abandon(Quests.tavern[3]);
				Dom.chat.insert("Hungry Taverners has been abandoned. You can start it again by speaking to an innkeeper.")
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
			tilesPerRow: 10,
			solidTiles: [5, 15, 25, 35, 45], // tower
			waterTiles: [36, 46, 56, 32, 42, 52],
			iceTiles: [36, 46, 32, 42, 52],
			mudTiles: [1, 11, 21, 31, 41, 51, 61, 71, 81, 91, 101, 111, 121, 131],
			pathTiles: [4, 6, 14, 16, 24, 26, 34, 44, 54, 64, 74, 84],
			dayTiles: [3, 13, 23], // torches
			nightTiles: [33, 43, 53], // torches
			layers: [
				[102, 57, 36, 76, 36, 36, 7, 82, 102, 51, 121, 1, 1, 111, 71, 41, 102, 102, 102, 102, 131, 21, 21, 31, 82, 102, 102, 33, 102, 102, 102, 102, 102, 102, 102, 102, 15, 35, 45, 5, 102, 57, 46, 36, 56, 76, 7, 28, 29, 30, 51, 71, 71, 41, 102, 102, 72, 102, 102, 131, 91, 1, 1, 101, 31, 102, 102, 13, 72, 102, 102, 3, 102, 102, 82, 92, 35, 45, 35, 45, 92, 57, 66, 76, 36, 36, 7, 38, 39, 40, 102, 102, 102, 102, 82, 102, 102, 102, 92, 81, 1, 1, 11, 111, 41, 102, 62, 23, 102, 102, 62, 13, 102, 102, 102, 102, 15, 35, 45, 5, 102, 57, 36, 36, 46, 36, 7, 102, 102, 102, 82, 102, 102, 102, 102, 102, 102, 102, 102, 81, 11, 1, 1, 61, 102, 102, 102, 102, 102, 102, 102, 23, 48, 49, 102, 102, 35, 45, 35, 45, 102, 57, 36, 36, 36, 66, 7, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 51, 121, 1, 11, 61, 102, 3, 102, 102, 8, 9, 102, 102, 102, 102, 102, 102, 15, 35, 45, 5, 102, 57, 36, 36, 36, 36, 7, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 62, 51, 71, 71, 41, 102, 13, 102, 102, 18, 19, 102, 102, 102, 102, 102, 102, 35, 45, 35, 45, 102, 57, 46, 66, 56, 36, 7, 102, 102, 102, 131, 21, 31, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 92, 23, 102, 102, 102, 102, 102, 102, 3, 102, 102, 102, 15, 5, 15, 5, 102, 57, 76, 36, 36, 66, 7, 102, 102, 131, 91, 1, 61, 48, 49, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 13, 102, 102, 102, 5, 25, 5, 15, 102, 57, 36, 36, 32, 56, 7, 102, 131, 91, 1, 1, 101, 21, 31, 102, 102, 102, 102, 92, 82, 102, 102, 102, 102, 102, 102, 48, 49, 102, 102, 62, 23, 28, 29, 30, 15, 25, 15, 5, 2, 57, 36, 36, 42, 36, 7, 102, 51, 71, 121, 1, 1, 111, 41, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 48, 49, 102, 102, 102, 102, 102, 38, 39, 40, 102, 4, 48, 49, 12, 57, 36, 46, 52, 36, 7, 102, 102, 102, 51, 71, 71, 41, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 84, 4, 4, 4, 64, 102, 62, 22, 57, 56, 36, 36, 36, 7, 102, 102, 92, 102, 102, 102, 102, 72, 102, 102, 102, 102, 102, 102, 102, 28, 29, 30, 102, 102, 102, 102, 102, 34, 4, 4, 64, 102, 102, 102, 102, 102, 102, 102, 57, 36, 36, 36, 36, 7, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 62, 38, 39, 40, 102, 102, 102, 102, 102, 102, 102, 102, 102, 62, 102, 102, 131, 31, 102, 102, 16, 6, 6, 6, 6, 26, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 131, 91, 61, 102, 102, 57, 46, 36, 36, 36, 7, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 131, 21, 91, 11, 61, 102, 102, 57, 36, 36, 32, 36, 7, 102, 102, 102, 48, 49, 131, 21, 31, 102, 102, 102, 102, 82, 102, 102, 102, 77, 47, 47, 87, 92, 102, 102, 102, 102, 102, 131, 91, 1, 1, 1, 61, 102, 102, 57, 36, 36, 42, 36, 7, 102, 102, 131, 21, 21, 91, 111, 41, 102, 102, 102, 82, 102, 102, 102, 77, 37, 36, 46, 117, 47, 87, 102, 102, 102, 131, 91, 1, 11, 1, 111, 41, 102, 102, 57, 36, 46, 52, 56, 7, 102, 102, 51, 121, 1, 111, 41, 102, 102, 102, 102, 102, 102, 102, 102, 57, 36, 56, 36, 36, 66, 7, 102, 102, 102, 81, 11, 1, 1, 1, 61, 82, 102, 102, 57, 36, 56, 46, 36, 7, 102, 102, 102, 51, 71, 41, 102, 102, 102, 102, 102, 102, 102, 92, 102, 57, 46, 76, 36, 36, 36, 7, 102, 102, 102, 51, 121, 1, 1, 111, 41, 102, 102, 102, 57, 36, 36, 36, 36, 7, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 107, 27, 36, 56, 46, 17, 97, 102, 102, 92, 102, 51, 71, 71, 41, 102, 102, 131, 102, 57, 36, 36, 36, 36, 7, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 48, 49, 107, 67, 67, 67, 97, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 131, 91, 102, 57, 36, 36, 36, 36, 7, 102, 102, 102, 102, 102, 102, 3, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 62, 102, 81, 11, 102, 57, 36, 66, 36, 36, 7, 102, 102, 102, 102, 102, 102, 13, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 131, 21, 21, 21, 21, 21, 31, 48, 49, 102, 131, 91, 1, 102, 57, 46, 36, 36, 36, 7, 102, 102, 92, 102, 48, 49, 23, 102, 62, 102, 102, 102, 102, 102, 82, 102, 102, 72, 131, 21, 91, 1, 1, 11, 1, 1, 101, 21, 21, 21, 91, 1, 1, 102, 57, 36, 36, 32, 36, 7, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 3, 102, 102, 92, 102, 102, 102, 131, 91, 11, 11, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 11, 1, 102, 57, 36, 56, 42, 56, 7, 102, 102, 102, 102, 102, 102, 8, 9, 102, 102, 13, 102, 102, 102, 102, 82, 131, 91, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 102, 57, 36, 36, 52, 46, 7, 102, 102, 3, 102, 102, 102, 18, 19, 102, 102, 23, 102, 102, 102, 131, 21, 91, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 102, 57, 36, 36, 36, 36, 7, 102, 72, 13, 102, 102, 102, 102, 102, 102, 102, 102, 102, 131, 21, 91, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 11, 11, 1, 102, 57, 36, 36, 36, 36, 7, 102, 102, 23, 102, 102, 102, 102, 102, 131, 21, 21, 21, 91, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 11, 11, 11],
				[],
			],
			interactWithTile: function(tileNum, x, y) { // pick up logs
				if (tileNum === 48) { // left side of log stack
					// channel for 1 second
					Game.hero.channel(function () {
						// give log item to player
						if (Dom.inventory.give(Items.item[2], 1) !== false) { // check if player has enough inventory space
							// replace tiles with grass
							map.setTile(0, map.getCol(x), map.getRow(y), 102);
							map.setTile(0, map.getCol(x + 60), map.getRow(y), 102);
						}
					}, [], 1000, "Retrieving Logs");
				}
				else if (tileNum === 49) { // right side of log stack
					// channel for 1 second
					Game.hero.channel(function () {
						// give log item to player
						if (Dom.inventory.give(Items.item[2], 1) !== false) { // check if player has enough inventory space
							// replace tiles with grass
							map.setTile(0, map.getCol(x), map.getRow(y), 102);
							map.setTile(0, map.getCol(x - 60), map.getRow(y), 102);
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
			tiles: {normal: "assets/tilemap/nilbog.png", christmas: "assets/tilemap/nilbog-christmas.png"},
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
			torch: {normal: "assets/npcs/torch.png"},
			ghost: {samhain: "assets/npcs/ghost.png"},
			lootChest: {normal: "assets/objects/chest.png"},
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
						role: "questStartFinish"
					},
					{
						quest: Quests.eaglecrestLoggingCamp[21],
						role: "questStartFinish"
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

		things: [], // for traps to be shown
	},

	nilbogPast: {
		id: 4,

		data: {
			name: "The Nilbog",
			level: (250+Event.antoraxAge) + " years ago...",
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
			solidTiles: [21, 29, 37, 45, 53, 61], // tower
			waterTiles: [31, 39, 47],
			mudTiles: [4, 12, 20, 28, 36, 44, 52, 60, 68, 76, 84, 92, 100, 108],
			pathTiles: [6, 14, 22, 30, 38, 46, 54, 62, 70, 7, 15, 23],
			layers: [
				[47, 31, 31, 96, 72, 77, 77, 77, 77, 77, 77, 29, 53, 61, 21, 31, 55, 39, 31, 8, 77, 77, 77, 77, 77, 77, 53, 61, 53, 61, 31, 31, 31, 31, 8, 77, 77, 77, 77, 77, 77, 29, 53, 61, 21, 63, 31, 47, 16, 80, 77, 77, 77, 77, 77, 77, 53, 61, 53, 61, 31, 31, 16, 80, 77, 77, 77, 77, 77, 77, 77, 29, 53, 61, 21, 56, 56, 80, 77, 69, 77, 77, 77, 77, 77, 77, 53, 61, 53, 61, 1, 2, 3, 77, 77, 77, 77, 77, 77, 77, 77, 29, 21, 29, 21, 9, 10, 11, 77, 77, 77, 77, 77, 77, 77, 13, 21, 37, 21, 29, 77, 77, 77, 77, 77, 77, 77, 77, 1, 2, 3, 29, 45, 29, 21, 77, 77, 77, 77, 77, 77, 77, 77, 9, 10, 11, 77, 6, 77, 5, 77, 77, 77, 77, 77, 77, 13, 77, 70, 6, 6, 6, 54, 77, 77, 77, 77, 77, 77, 77, 77, 30, 6, 54, 5, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 108, 28, 5, 77, 77, 1, 2, 3, 77, 69, 77, 77, 77, 77, 108, 76, 52, 77, 77, 77, 9, 10, 11, 77, 77, 77, 77, 108, 20, 76, 12, 52, 77],
				[],
			],
		},

		images: {
			tiles: {normal: "assets/tilemap/nilbogPast.png"},
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
			tilesPerRow: 4,
			solidTiles: [1, 2, 3, 5, 6, 7, 8, 9, 10, 12], // walls & downwards stairs
			layers: [
				[10, 8, 12, 9, 10, 8, 12, 9, 10, 9, 8, 12, 8, 12, 8, 12, 8, 12, 8, 12, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 4, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 4, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 4, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 4],
				[],
			],
		},

		images: {
			tiles: {normal: "assets/tilemap/nilbogTower.png"},
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
			tilesPerRow: 4,
			solidTiles: [1, 2, 3, 5, 6, 7, 8, 9, 10, 12], // walls & downwards stairs
			layers: [
				[10, 8, 12, 9, 10, 8, 12, 9, 10, 9, 8, 12, 8, 12, 8, 12, 8, 12, 8, 12, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 4, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 4, 11, 11, 11, 11, 4, 11, 4, 11, 11, 11, 11, 4, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 4, 11, 11, 11, 11, 11, 4, 11, 11, 11, 11, 11, 4, 11, 11, 11, 11, 11, 6, 7, 11, 11, 11, 11, 11, 4, 11],
				[],
			],
		},

		images: {
			tiles: {normal: "assets/tilemap/nilbogTower.png"},
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
			tilesPerRow: 4,
			solidTiles: [1, 2, 3, 5, 6, 7, 8, 9, 10, 12], // walls & downwards stairs
			layers: [
				[10, 8, 12, 9, 10, 8, 12, 9, 10, 9, 1, 2, 8, 12, 1, 2, 8, 12, 1, 2, 3, 5, 10, 9, 3, 5, 10, 9, 3, 5, 11, 4, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 4, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 4, 11, 11, 11, 11, 4, 11, 11, 11, 11, 11, 11, 4, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 4, 11, 4, 11, 6, 7, 11, 11, 4, 11, 11, 11, 11],
				[],
			],
		},

		images: {
			tiles: {normal: "assets/tilemap/nilbogTower.png"},
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
			tilesPerRow: 4,
			solidTiles: [1, 2, 3, 5, 6, 7, 8, 9, 10, 12], // walls & downwards stairs
			layers: [
				[10, 8, 12, 9, 10, 8, 12, 9, 10, 9, 8, 12, 8, 12, 8, 12, 8, 12, 8, 12, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 4, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 4, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 4, 11, 11, 11, 11, 11, 6, 7, 11, 11, 11, 11, 11, 11, 11],
				[],
			],
		},

		images: {
			tiles: {normal: "assets/tilemap/nilbogTower.png"},
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
			tilesPerRow: 4,
			solidTiles: [1, 2, 3, 5, 6, 7, 8, 9, 10, 12], // walls & downwards stairs
			layers: [
				[10, 8, 12, 8, 12, 8, 12, 8, 12, 9, 8, 12, 1, 2, 8, 12, 8, 12, 8, 12, 10, 9, 3, 5, 10, 9, 10, 9, 10, 9, 11, 13, 13, 13, 13, 13, 13, 13, 13, 11, 16, 17, 18, 17, 18, 17, 18, 17, 18, 14, 16, 18, 17, 18, 17, 18, 17, 18, 17, 14, 16, 17, 18, 17, 18, 17, 18, 17, 18, 14, 16, 18, 17, 18, 17, 18, 17, 18, 17, 14, 11, 15, 15, 15, 15, 15, 15, 15, 15, 11, 11, 6, 7, 11, 11, 11, 11, 11, 11, 11],
				[],
			],
		},

		images: {
			tiles: {normal: "assets/tilemap/nilbogTower.png"},
			stairs: {normal: "assets/objects/stairsRight.png"},
			painting: {normal: "assets/objects/paintingDesert.png"}, // image to be renamed
			goblinKing: {normal: "assets/enemies/goblinKing.png"},
			goblinKingCorpse: {normal: "assets/corpses/goblinKing.png"},
			slash: {normal: "assets/projectiles/slash.png"}, // (ignored by loader if it is already loaded because of a knight player)
			fireball: {normal: "assets/projectiles/fireball.png"}, // (ignored by loader if it is already loaded because of a mage player)
			arrow: {normal: "assets/projectiles/arrow.png"}, // (ignored by loader if it is already loaded because of an archer player)
			weaponRack: {normal: "assets/objects/weaponRack.png"},
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
			x: 400,
			y: 400,
		},

		lootArea: "eaglecrest",
		lootTier: 1,

		mapData: {
			cols: 25,
			rows: 22,
			tsize: 60,
			tilesPerRow: 3,
			solidTiles: [1, 2, 3, 4, 5, 6, 7, 8, 11, 13, 14, 16, 17, 19, 22], // wall
			dayTiles: [14, 17, 6, 18, 22], // windows and lights
			nightTiles: [2, 8, 3, 9, 19], // windows and lights
			layers: [
				[16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 6, 16, 16, 16, 16, 16, 16, 16, 16, 6, 16, 16, 16, 16, 16, 6, 16, 16, 16, 16, 16, 16, 16, 16, 6, 16, 16, 22, 16, 17, 14, 7, 22, 16, 16, 16, 16, 4, 16, 16, 16, 16, 22, 16, 17, 14, 1, 22, 16, 16, 16, 16, 16, 16, 11, 5, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 11, 5, 16, 16, 16, 16, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 18, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 18, 10, 10, 12, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 12, 10, 10, 15, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 15, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 18, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 18, 10, 10, 12, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 12, 10, 10, 15, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 15, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 18, 10, 10, 10, 10, 10, 10, 10, 18, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 12, 10, 10, 10, 10, 10, 10, 10, 12, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 15, 10, 10, 10, 10, 10, 10, 10, 15, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
				[],
			],
		},

		isIcy: function() {
			return Event.event === "Christmas";
		},

		images: {
			tiles: {normal: "assets/tilemap/eaglecrestCity.png"},
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
		},

		areaTeleports: [
			{
				// teleport to bank
				x: 1200,
				y: 210,
				width: 120,
				height: 2,
				teleportTo: "eaglecrestBank",
				destinationX: 515,
				destinationY: 830,
			},
			{
				// teleport to tavern
				x: 300,
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
				y: 690,
				width: 2,
				height: 360,
				teleportTo: "eaglecrestWest",
				destinationX: 1240,
				playerAdjustY: -190,
			},
			{
				// teleport to eaglecrest east street
				x: 1520,
				y: 690,
				width: 2,
				height: 360,
				teleportTo: "eaglecrestEast",
				destinationX: 20,
				playerAdjustY: -190,
			},
		],

		collisions: [
			// temporary - change when positioning is based on y value
			{
				x: 750, // waterfall
				y: 780,
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
					width: 1422,
					height: 992,
				},
			],
		},

		npcs: [
			{
				// id: 0,
				x: 200,
				y: 1140,
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
				x: 940,
				y: 1190,
				image: "guard1",
				name: "Eaglecrest Guard",
				hostility: "friendly",
				level: 50,
				stats: {
					maxHealth: 300,
					defence: 20,
				},
			},
			{
				// id: 2,
				x: 560,
				y: 1190,
				image: "guard2",
				name: "Eaglecrest Guard",
				hostility: "friendly",
				level: 50,
				stats: {
					maxHealth: 300,
					defence: 20,
				},
			},
			{
				// id: 3,
				x: 130,
				y: 500,
				image: "guard1",
				name: "Eaglecrest Guard",
				hostility: "friendly",
				level: 50,
				stats: {
					maxHealth: 300,
					defence: 20,
				},
			},
			{
				// id: 4,
				x: 1375,
				y: 500,
				image: "guard2",
				name: "Eaglecrest Guard",
				hostility: "friendly",
				level: 50,
				stats: {
					maxHealth: 300,
					defence: 20,
				},
			},
			{
				// id: 5,
				x: 895,
				y: 275,
				image: "guard1",
				name: "Eaglecrest Guard",
				hostility: "friendly",
				level: 50,
				stats: {
					maxHealth: 300,
					defence: 20,
				},
			},
			{
				// id: 6,
				x: 605,
				y: 275,
				image: "guard2",
				name: "Eaglecrest Guard",
				hostility: "friendly",
				level: 50,
				stats: {
					maxHealth: 300,
					defence: 20,
				},
			},
			{
				// id: 7,
				x: 920,
				y: 785,
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
				y: 870,
				readImage: "mailbox",
				unreadImage: "mailboxUnread",
				name: "Mailbox",
			},
		],

		things: [
			{
				x: 300,
				y: 1100,
				image: "cart2",
			},
			{
				x: 1320,
				y: 920,
				image: "cart3",
			},
			{
				x: 1380,
				y: 1175,
				image: "cart1",
			},
			{
				x: 750,
				y: 700,
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
			cols: 21,
			rows: 11,
			tsize: 60,
			tilesPerRow: 3,
			solidTiles: [1, 2, 3, 4, 5, 6, 7, 8, 11, 13, 14, 16, 17, 19, 22], // wall
			dayTiles: [14, 17, 6, 18, 22], // windows and lights
			nightTiles: [2, 8, 3, 9, 19], // windows and lights
			layers: [
				[16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 6, 16, 16, 16, 16, 4, 16, 16, 16, 16, 6, 16, 16, 16, 16, 4, 16, 16, 16, 16, 6, 16, 16, 16, 22, 16, 17, 16, 22, 16, 16, 16, 16, 16, 22, 16, 14, 16, 22, 16, 16, 16, 16, 16, 16, 16, 16, 11, 16, 16, 16, 16, 16, 16, 16, 16, 16, 5, 16, 16, 16, 16, 16, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
				[],
			],
		},

		images: {
			tiles: {normal: "assets/tilemap/eaglecrestCity.png"},
			maskSalesman: {normal: "assets/npcs/maskSalesman.png"},
		},

		areaTeleports: [
			{
				// teleport to eaglecrest plaza
				x: 1280,
				y: 480,
				width: 2,
				height: 360,
				teleportTo: "eaglecrest",
				destinationX: 20,
				playerAdjustY: 190,
			},
		],
		
		villagerData: {
			minPeople: 0,
			maxPeople: 2,
			locations: [
				{
					x: 39,
					y: 260,
					width: 1182,
					height: 332,
				},
			],
		},
		
		npcs: [
			{
				// id: 0,
				x: 674,
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
			cols: 21,
			rows: 11,
			tsize: 60,
			tilesPerRow: 3,
			solidTiles: [1, 2, 3, 4, 5, 6, 7, 8, 11, 13, 14, 16, 17, 19, 22], // wall
			dayTiles: [14, 17, 6, 18, 22], // windows and lights
			nightTiles: [2, 8, 3, 9, 19], // windows and lights
			layers: [
				[16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 6, 16, 16, 16, 16, 4, 16, 16, 16, 16, 6, 16, 16, 16, 16, 4, 16, 16, 16, 16, 6, 16, 16, 16, 22, 16, 17, 16, 22, 16, 16, 16, 16, 16, 22, 16, 14, 16, 22, 16, 16, 16, 16, 16, 16, 16, 16, 11, 16, 16, 16, 16, 16, 16, 16, 16, 16, 5, 16, 16, 16, 16, 16, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
				[],
			],
		},

		images: {
			tiles: {normal: "assets/tilemap/eaglecrestCity.png"},
			itemBuyer: {normal: "assets/npcs/nhkghghh.png"},
		},

		areaTeleports: [
			{
				// teleport to eaglecrest plaza
				x: -20,
				y: 480,
				width: 2,
				height: 360,
				teleportTo: "eaglecrest",
				destinationX: 1480,
				playerAdjustY: 190,
			},
		],
		
		villagerData: {
			minPeople: 0,
			maxPeople: 2,
			locations: [
				{
					x: 39,
					y: 260,
					width: 1182,
					height: 332,
				},
			],
		},
		
		npcs: [
			{
				// id: 6,
				x: 540,
				y: 313,
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
							return Player.quests.completedQuestArray.includes("TBD");
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
			level: "",
			territory: "",
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
			tilesPerRow: 1,
			solidTiles: [1], // wall
			layers: [
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 1, 1, 5, 5, 1, 1, 1, 5, 5, 1, 1, 5, 5, 1, 1, 5, 5, 1, 1, 5, 5, 1, 1, 1, 5, 5, 1, 1, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 4, 4, 4, 4, 4, 4, 2, 3, 2, 3, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 3, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 3, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 3, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 3, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 3, 2, 3, 2, 4, 4, 4, 4, 4, 4],
				[],
			],
		},

		images: {
			tiles: {normal: "assets/tilemap/eaglecrestBank.png"},
			banker1: {normal: "assets/npcs/eaglecrestBanker.png"},
			banker2: {normal: "assets/npcs/eaglecrestBanker2.png"},
			banker3: {normal: "assets/npcs/eaglecrestBanker3.png"},
			banker4: {normal: "assets/npcs/eaglecrestBanker4.png"},
		},

		areaTeleports: [
			{
				// teleport to eaglecrest plaza
				x: 420,
				y: 949,
				width: 240,
				height: 2,
				teleportTo: "eaglecrest",
				destinationX: 1200,
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
			level: "",
			territory: "",
			displayOnEnter: true,
		},

		indoors: true,

		tagGameAllowed: true,

		song_day: "assets/music/Tavern.mp3",
		song_night: "assets/music/Tavern.mp3",

		checkpoint: false, // probably in the future taverns should be the ONLY checkpoints

		lootArea: "loggingCamp", // for level up music

		mapData: {
			cols: 21,
			rows: 24,
			tsize: 60,
			tilesPerRow: 5,
			solidTiles: [1, 12, 14, 15], // bar and walls
			dayTiles: [16], // windows
			nightTiles: [17],
			layers: [
				[14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 4, 14, 14, 14, 4, 14, 14, 14, 4, 14, 14, 14, 4, 14, 14, 14, 4, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 15, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 15, 11, 11, 11, 11, 11, 11, 11, 11, 11, 7, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 7, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 2, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 7, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 14, 14, 4, 14, 14, 14, 14, 14, 4, 14, 14, 12, 12, 12, 11, 11, 12, 12, 12, 12, 12, 15, 15, 14, 14, 14, 14, 14, 14, 15, 14, 15, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 7, 7, 11, 11, 11, 11, 11, 11, 7, 11, 7, 12, 12, 12, 12, 12, 12, 12, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 11, 11, 11, 11, 11, 11, 11, 1, 1, 1, 1, 1, 1, 1, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11],
			],
		},

		images: {
			tiles: {normal: "assets/tilemap/tavern.png"},
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
		},

		areaTeleports: [
			{
				x: 630,
				y: 1480,
				width: 240,
				height: 2,
				teleportTo: "eaglecrest",
				destinationX: 300,
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
						newQuestFrequency: "daily",
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
					questProgress: "<strong>Jake</strong>: you're not done yet! Keep going.",
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
				orderOffsetY: -40,
				image: "table",
				name: "Table",
			},
			{
				x: 360,
				y: 628,
				orderOffsetY: -40,
				image: "table",
				name: "Table",
			},
			{
				x: 840,
				y: 268,
				orderOffsetY: -40,
				image: "table",
				name: "Table",
			},
			{
				x: 900,
				y: 628,
				orderOffsetY: -40,
				image: "table",
				name: "Table",
			},
			{
				x: 362,
				y: 264,
				orderOffsetY: -30,
				use: "wizardsLore",
				image: "largeTable",
				name: "Large Table",
			},
			{
				x: 842,
				y: 444,
				orderOffsetY: -30,
				image: "largeTable",
				name: "Large Table",
			},
			{
				x: 182,
				y: 1344,
				orderOffsetY: -30,
				image: "largeTable",
				name: "Large Table",
			},
			{
				x: 1082,
				y: 1344,
				orderOffsetY: -30,
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
				image: "gameBoard1",
				name: "Wizard's Lore",
				onTouchChat: "A game of Wizard's Lore, a board game traditionally played by wizard students and scholars.",
			},
			{
				x: 1083,
				y: 1314,
				image: "gameBoard2",
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
					{x: array[i].x-40, y: array[i].y-20, orderOffsetY: -20},
					{x: array[i].x-1.5, y: array[i].y-20, orderOffsetY: -20},
					{x: array[i].x+37, y: array[i].y-20, orderOffsetY: -20},
				);
			}
			
			// generate an array of large tables
			array = Game.things.filter(thing => thing.name === "Large Table" && thing.use !== "wizardsLore");
			
			// add to the array of possible positions
			for (let i = 0; i < array.length; i++) {
				positions.push(
					{x: array[i].x-40, y: array[i].y-20, orderOffsetY: -10},
					{x: array[i].x-1.5, y: array[i].y-20, orderOffsetY: -10},
					{x: array[i].x+37, y: array[i].y-20, orderOffsetY: -10},
					{x: array[i].x-20, y: array[i].y-40, orderOffsetY: 10},
					{x: array[i].x+17, y: array[i].y-40, orderOffsetY: 10},
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
		
		onAreaLeave: function () {
			if (Player.quests.activeQuestArray.includes("Cleaning the Floor")) {
				Dom.quest.abandon(Quests.tavern[1]);
				Dom.chat.insert("Cleaning the Floor has been abandoned. You can start it again by speaking to an innkeeper.")
			}
			if (Player.quests.activeQuestArray.includes("Tavern Tidy-Up")) {
				Dom.quest.abandon(Quests.tavern[2]);
				Dom.chat.insert("Tavern Tidy-Up has been abandoned. You can start it again by speaking to an innkeeper.")
			}
			if (Player.quests.activeQuestArray.includes("Hungry Taverners")) {
				Dom.quest.abandon(Quests.tavern[3]);
				Dom.chat.insert("Hungry Taverners has been abandoned. You can start it again by speaking to an innkeeper.")
			}
		},
		
	},
};

var Villagers = [
	{
		// any
		image: "silvioStarstrike",
		imageSource: {normal: "assets/npcs/silvioStarstrike.png"},
		name: "Silvio Starstrike",
		stats: {
			level: 20,
			maxHealth: 150,
			walkSpeed: 160,
			defence: 5,
		},
		hostility: "friendly",
		areas: [
			"loggingCampTavern",
			"eaglecrestTavern",
			"eaglecrestBank",
			"eaglecrest",
			"eaglecrestEast",
			"eaglecrestWest",
		],
		roles: [],
		chat: {
			notUnlockedRoles: "I bet you've never met a lunarlancer before! Be warned - I have a short temper.",
			chooseChat: "Don't say a false word. I could decimate you with my celestial power.",
			receiveTavernGood: "I see you've brought me some blessings from the stars. What do you mean I ordered them? Don't underestimate the power of the sky.",
		}
	},
	{
		// tavern
		image: "darioHorfern",
		imageSource: {normal: "assets/npcs/darioHorfern.png"},
		name: "Dario Horfern",
		stats: {
			level: 10,
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
			notUnlockedRoles: "This would be my favourite place in the whole city... if it wasn't so dusty!",
			chooseChat: "You can go away if you haven't brought me a drink.",
			receiveTavernGood: "I've been waiting for ages for this!",
		}
	},
	{
		// tavern
		image: "gremaRoskin",
		imageSource: {normal: "assets/npcs/gremaRoskin.png"},
		name: "Grema Roskin",
		stats: {
			level: 15,
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
			notUnlockedRoles: "Smells of fried beetroot in here.",
			chooseChat: "Hello again, did you bring beetroot this time?",
			receiveTavernGood: "It's no fried beetroot, but it'll do. Thank you.",
		}
	},
	{
		// logging camp
		image: "feller",
		imageSource: {normal: "assets/npcs/feller.png"},
		name: "Logging Camp Feller",
		stats: {
			level: 4,
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
		// logging camp
		image: "treecutter",
		imageSource: {normal: "assets/npcs/treecutter.png"},
		name: "Logging Camp Treecutter",
		stats: {
			level: 7,
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
		// any
		image: "robertHendman",
		imageSource: {normal: "assets/npcs/robertHendman.png"},
		name: "Robert Hendman",
		stats: {
			level: 12,
			maxHealth: 85,
			walkSpeed: 140,
			defence: 5,
		},
		hostility: "friendly",
		areas: [
			"loggingCampTavern",
			"eaglecrestTavern",
			"eaglecrestBank",
			"eaglecrest",
			"eaglecrestEast",
			"eaglecrestWest",
		],
		roles: [],
		chat: {
			notUnlockedRoles: "Have you seen anyone playing Wizard's Lore before? Me neither. I bet it's just for show.",
			chooseChat: "I'm going to head down to the Eaglecrest monastery soon. Would you like to come along too?",
			receiveTavernGood: "Thank you "+ChatText.gender[Player.gender].formal+"! A good day to you.",
		}
	},
	{
		// any
		image: "wilmaRedding",
		imageSource: {normal: "assets/npcs/wilmaRedding.png"},
		name: "Wilma Redding",
		stats: {
			level: 12,
			maxHealth: 85,
			walkSpeed: 140,
			defence: 5,
		},
		hostility: "friendly",
		areas: [
			"loggingCampTavern",
			"eaglecrestTavern",
			"eaglecrestBank",
			"eaglecrest",
			"eaglecrestEast",
			"eaglecrestWest",
		],
		roles: [],
		chat: {
			notUnlockedRoles: "Wooden tavern... roaring fire... going here always makes me a bit nervous.",
			chooseChat: "It wouldn't be Eaglecrest without this good ol' tavern",
			receiveTavernGood: "My order? And not a moment too soon!",
		}
	},
	{
		// any
		image: "greenbeard",
		imageSource: {normal: "assets/npcs/greenbeard.png"},
		name: "Captain Greenbeard",
		stats: {
			level: 40,
			maxHealth: 250,
			walkSpeed: 130,
			defence: 8,
		},
		hostility: "friendly",
		areas: [
			"loggingCampTavern",
			"eaglecrestTavern",
			"eaglecrestBank",
			"eaglecrest",
			"eaglecrestEast",
			"eaglecrestWest",
		],
		roles: [],
		chat: {
			notUnlockedRoles: "Yarr harr! Have ye spied me ship nearby?",
			chooseChat: "Ahoy there!",
			receiveTavernGood: "Nothin' better than a hearty supper at the tavern.",
		}
	},
];

// sets a tile on the Map (specifyable area for if it is used in a setTimeout)
function SetTile (area, layer, col, row, newTileNum) {
	let map = Areas[area].mapData;
	map.layers[layer][row * map.cols + col] = newTileNum;
}
