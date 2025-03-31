//
// Loot area defintion
//

const FishingLevels = {
	loggingCamp: 10,
	eaglecrest: 20,
	eaglecrestWell: 0,
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

		// data displayed on moving to area
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
			],
			interactWithTile: function(tileNum, x, y) {
				// pick up snowball from rock
				let replaceTiles = map.setTilesAtLocation([
					{tileNum: 101, replaceTo: 56, relativePosition: {x: 0, y: 0}},
					{tileNum: 102, replaceTo: 72, relativePosition: {x: 1, y: 0}},
					{tileNum: 109, replaceTo: 64, relativePosition: {x: 0, y: 1}},
				], {x:x, y:y});
				if (replaceTiles !== false) {
					// touching a snowy rock
					Game.hero.channel(function () {
						// give snowball to player
						if (Dom.inventory.give(Items.bow[8], 1) !== false) { // check if player has enough inventory space
							Player.quests.questProgress.snowCollected = Increment(Player.quests.questProgress.snowCollected);
							Dom.checkProgress();
							// remove snowy rock's snow from tilemap
							replaceTiles();
						}
						// add snow back after 1 minute
						let addSnowBack = map.setTilesAtLocation([
							{tileNum: 56, replaceTo: 101, relativePosition: {x: 0, y: 0}},
							{tileNum: 72, replaceTo: 102, relativePosition: {x: 1, y: 0}},
							{tileNum: 64, replaceTo: 109, relativePosition: {x: 0, y: 1}},
						], {x:x, y:y}, "tutorial");
						Game.setTimeout(function (x, y) { if (Weather.weatherType === "snow") {addSnowBack(x, y)}}, 60000, [x, y]);
					}, [], 1000, "Making a Snowball");
				}
			},
		},

		isIcy: function() {
			return Event.event === "Christmas";
		},

		images: {
			tiles: {normal: "assets/tilemap/loggingCamp.png", christmas: "assets/tilemap/loggingCampChristmas.png"},
			driver: {normal: "assets/npcs/driver.png"},
			weaponsmith: {normal: "assets/npcs/weaponsmith.png"},
			cart: {normal: "assets/objects/cartEaglecrest.png", christmas: "assets/objects/cartEaglecrestChristmas.png"},
			fisherman: {normal: "assets/npcs/tobenam.png"},
			weaponsmithSign: {normal: "assets/objects/weaponsmithSign.png", christmas: "assets/objects/weaponsmithSignChristmas.png"},
			eaglecrestBanner: {normal: "assets/objects/eaglecrestBanner.png", christmas: "assets/objects/eaglecrestBannerChristmas.png"},
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
					notUnlockedRoles: "Hope the journey wasn't too bumpy!",
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
						role: "questProgress",
						quest: Quests.eaglecrest[12],
						step: [5],
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
							{item: Items.rod[6], cost: 15, costCurrency: 3}, // rod of steel
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
					Player.quests.prog.eaglecrestLoggingCamp[25].timesCompleted === 2;
				}
			},
			{
				template: NPCTemplates.nessyTintop,
				x: 3630,
				y: 266,
				orderOffsetY: -10,
				canBeShown: function () {
					return Player.quests.activeQuestArray.includes("A Tale of Two Twintops") &&
					Player.quests.prog.eaglecrestLoggingCamp[25].timesCompleted === 9;
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
					Player.quests.prog.eaglecrestLoggingCamp[25].timesCompleted === 10;
                },
				onClose: function () {
					Quests.eaglecrestLoggingCamp[25].autofinish = true;
					User.progress.presentsOpened = Increment(User.progress.presentsOpened); // achievement progress
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
			],
			interactWithTile: function(tileNum, x, y) {
				// pick up snowball from rock
				let replaceTiles = map.setTilesAtLocation([
					{tileNum: 101, replaceTo: 56, relativePosition: {x: 0, y: 0}},
					{tileNum: 102, replaceTo: 72, relativePosition: {x: 1, y: 0}},
					{tileNum: 109, replaceTo: 64, relativePosition: {x: 0, y: 1}},
				], {x:x, y:y});
				if (replaceTiles !== false) {
					// touching a snowy rock
					Game.hero.channel(function () {
						// give snowball to player
						if (Dom.inventory.give(Items.bow[8], 1) !== false) { // check if player has enough inventory space
							Player.quests.questProgress.snowCollected = Increment(Player.quests.questProgress.snowCollected);
							Dom.checkProgress();
							// remove snowy rock's snow from tilemap
							replaceTiles();
						}
						// add snow back after 1 minute
						let addSnowBack = map.setTilesAtLocation([
							{tileNum: 56, replaceTo: 101, relativePosition: {x: 0, y: 0}},
							{tileNum: 72, replaceTo: 102, relativePosition: {x: 1, y: 0}},
							{tileNum: 64, replaceTo: 109, relativePosition: {x: 0, y: 1}},
						], {x:x, y:y}, "eaglecrestLoggingCamp");
						Game.setTimeout(function (x, y) { if (Weather.weatherType === "snow") {addSnowBack(x, y)}}, 60000, [x, y]);
					}, [], 1000, "Making a Snowball");
				}
			},
		},

		isIcy: function() {
			return Event.event === "Christmas";
		},

		images: {
			tiles: {normal: "assets/tilemap/loggingCamp.png", christmas: "assets/tilemap/loggingCampChristmas.png"},
			teper: {normal: "assets/npcs/teper.png"},
			teperAngry: {christmas: "assets/npcs/teper-angry.png"},
			identifier: {normal: "assets/npcs/gilas.png"},
			dummy: {normal: "assets/enemies/dummy.png", christmas: "assets/enemies/dummyChristmas.png"},
			dummyCorpse: {normal: "assets/corpses/dummy.png", christmas: "assets/corpses/dummyChristmas.png"},
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
			cart: {normal: "assets/objects/cartEaglecrest2.png", christmas: "assets/objects/cartEaglecrestChristmas2.png"},
			driver: {normal: "assets/npcs/alaran.png"},
			eaglecrestBanner: {normal: "assets/objects/eaglecrestBanner.png", christmas: "assets/objects/eaglecrestBannerChristmas.png"},
			nilbogBanner: {normal: "assets/objects/nilbogBanner.png", christmas: "assets/objects/nilbogBannerChristmas.png"},
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
				teleportCondition: function () {
					return Player.quests.completedQuestArray.includes("Retrieval of Logs");
				}
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
							User.progress.presentsDelivered = Increment(User.progress.presentsDelivered);
							// chat
							Dom.chat.insertSequence([
								Dom.chat.say("Soul Healer Nalaa", "Thank you for taking the time to bring this to me."),
								Dom.chat.say("Soul Healer Nalaa", "/me gently unfolds the wrapping paper to reveal a brand new sceptre of Souls."),
								Dom.chat.say("Soul Healer Nalaa", "It's a new sceptre of Souls! Thank you, adventurer. May the Demigods' blessings be bestowed upon you.")],
							[500, 1500, 2500], undefined, undefined, true); // cutscene with no end function
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
							User.progress.presentsDelivered = Increment(User.progress.presentsDelivered);
							// chat
							Dom.chat.insertSequence([
								Dom.chat.say("Item Buyer Noledar", "Wow, really? That's so nice, I don't think anyone has delivered me a present before!"),
								Dom.chat.say("Item Buyer Noledar", "/me peels away at the wrapping paper to reveal a large heap of gold."),
								Dom.chat.say("Item Buyer Noledar", "Wow! Gilas was right - good things <strong>can</strong> happen to ordinary people! Thank you very much, and a merry Christmas to you!")],
							[500, 1500, 2500], undefined, undefined, true); // cutscene with no end function
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
									x: 2725,
									y: 3500,
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
					(Player.quests.prog.eaglecrestLoggingCamp[25].timesCompleted === null || Player.quests.prog.eaglecrestLoggingCamp[25].timesCompleted === undefined);
				}
			},
			{
				// id: 10
				template: NPCTemplates.nessyTintop,
				x: 2080,
				y: 305,
				canBeShown: function () {
					return Player.quests.activeQuestArray.includes("A Tale of Two Twintops") &&
					Player.quests.prog.eaglecrestLoggingCamp[25].timesCompleted === 5;
				}
			},
			{
				// id: 11
				template: NPCTemplates.torianTintop,
				x: 712,
				y: 380,
				canBeShown: function () {
					return Player.quests.activeQuestArray.includes("A Tale of Two Twintops") &&
					Player.quests.prog.eaglecrestLoggingCamp[25].timesCompleted === 8;
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
					return Player.quests.prog.eaglecrestLoggingCamp[25].timesCompleted === 10 &&
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
					return Player.quests.prog.eaglecrestLoggingCamp[25].timesCompleted === 10 &&
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
					return Player.quests.prog.eaglecrestLoggingCamp[25].timesCompleted % 2 === 1 &&
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
					return (Player.quests.prog.eaglecrestLoggingCamp[25].timesCompleted === null || // haven't started quest yet
						Player.quests.prog.eaglecrestLoggingCamp[25].timesCompleted === undefined ||
						(Player.quests.prog.eaglecrestLoggingCamp[25].timesCompleted !== 10 && // or have started it and have completed it an even number of times
						Player.quests.prog.eaglecrestLoggingCamp[25].timesCompleted % 2 === 0)) && // or have started it and have completed it an even number of times
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
				animation: {
					type: "function",
					frameTime: 1100,
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
						if (this.animateObj.imageName === "lightsRB") {
							this.animateObj.image = Loader.getImage("lightsGY"); // tbd use setImage
							this.animateObj.imageName = "lightsGY";
						}
						else if (this.animateObj.imageName === "lightsGY") {
							this.animateObj.image = Loader.getImage("lightsRB");
							this.animateObj.imageName = "lightsRB";
						}
						// time for next animation frame
						if (this.timeoutTicks > 10) {
							this.frameTime = 300; // formerly 250
						}
						else {
							this.frameTime = 1100;
						}
					},
				},
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
			hearth1: {normal: "assets/objects/hearth1.png", christmas: "assets/objects/hearth1Christmas.png"},
			hearth2: {normal: "assets/objects/hearth2.png", christmas: "assets/objects/hearth2Christmas.png"},
			hearth3: {normal: "assets/objects/hearth3.png", christmas: "assets/objects/hearth3Christmas.png"},
			dirt: {normal: "assets/enemies/dirt.png"},
			mug: {normal: "assets/items/item/25.png"},
			plate: {normal: "assets/items/item/26.png"},
			table: {normal: "assets/objects/table.png"},
			largeTable: {normal: "assets/objects/largeTable.png"},
			barrel: {normal: "assets/objects/barrel.png", christmas: "assets/objects/barrelChristmas.png"},
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
						    {item: Items.consumable[5], cost: 0, quest: true, unconsumable: true, removeOnAbandon: "Hungry Taverners"}, // Wood-Brewed Beer
							{item: Items.consumable[16], cost: 0, eventRequirement: "Christmas", quest: true, unconsumable: true, removeOnAbandon: "Hungry Taverners"}, // Mulled Wine
						    {item: Items.food[0], cost: 0, quest: true, unconsumable: true, removeOnAbandon: "Hungry Taverners"}, // Bread
						    {item: Items.food[1], cost: 0, eventRequirement: "Christmas", quest: true, unconsumable: true, removeOnAbandon: "Hungry Taverners"}, // Mince Pie
						    {item: Items.food[2], cost: 0, eventRequirement: "Christmas", quest: true, unconsumable: true, removeOnAbandon: "Hungry Taverners"}, // Christmas Pudding
						    {item: Items.food[9], cost: 0, eventRequirement: "Antorax", quest: true, unconsumable: true, removeOnAbandon: "Hungry Taverners"}, // Birthday Cake (changed every year)
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
						    {item: Items.food[9], cost: 7, eventRequirement: "Antorax"}, // Birthday Cake (changed every year)
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
					questProgress: "You lot! Make some room by the hearth, won't ya!",
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
					Player.quests.prog.eaglecrestLoggingCamp[25].timesCompleted === 1;
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
                    Player.quests.prog.eaglecrestLoggingCamp[25].timesCompleted === 4;
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
					Player.quests.prog.eaglecrestLoggingCamp[25].timesCompleted === 6;
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
				animation: {
					type: "carousel",
					frameTime: 200,
					images: ["hearth1", "hearth2", "hearth3"],
				},
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
				let replaceTilesLog = map.setTilesAtLocation([
					{tileNum: 93, replaceTo: 105, relativePosition: {x: 0, y: 0}},
					{tileNum: 94, replaceTo: 105, relativePosition: {x: 1, y: 0}},
				], {x:x, y:y});
				if (replaceTilesLog !== false) {
					// touching a log
					Game.hero.channel(function () {
						// give log item to player
						if (Dom.inventory.give(Items.item[2], 1) !== false) { // check if player has enough inventory space
							// remove log from tilemap
							replaceTilesLog();
						}
					}, [], 1000, "Retrieving Logs");
				}

				// pick up snowball from rock
				let replaceTilesSnow = map.setTilesAtLocation([
					{tileNum: 101, replaceTo: 56, relativePosition: {x: 0, y: 0}},
					{tileNum: 102, replaceTo: 72, relativePosition: {x: 1, y: 0}},
					{tileNum: 109, replaceTo: 64, relativePosition: {x: 0, y: 1}},
				], {x:x, y:y});
				if (replaceTilesSnow !== false) {
					// touching a snowy rock
					Game.hero.channel(function () {
						// give snowball to player
						if (Dom.inventory.give(Items.bow[8], 1) !== false) { // check if player has enough inventory space
							Player.quests.questProgress.snowCollected = Increment(Player.quests.questProgress.snowCollected);
							Dom.checkProgress();
							// remove snowy rock's snow from tilemap
							replaceTilesSnow();
						}
						// add snow back after 1 minute
						let addSnowBack = map.setTilesAtLocation([
							{tileNum: 56, replaceTo: 101, relativePosition: {x: 0, y: 0}},
							{tileNum: 72, replaceTo: 102, relativePosition: {x: 1, y: 0}},
							{tileNum: 64, replaceTo: 109, relativePosition: {x: 0, y: 1}},
						], {x:x, y:y}, "nilbog");
						Game.setTimeout(function (x, y) { if (Weather.weatherType === "snow") {addSnowBack(x, y)}}, 60000, [x, y]);
					}, [], 1000, "Making a Snowball");
				}
			},
		},

		isIcy: function() {
			return Event.event === "Christmas";
		},

		images: {
			tiles: {normal: "assets/tilemap/loggingCamp.png", christmas: "assets/tilemap/loggingCampChristmas.png"},
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
			torch1: {day: "assets/objects/torchDay1.png", night: "assets/objects/torchNight1.png"},
			torch2: {day: "assets/objects/torchDay2.png", night: "assets/objects/torchNight2.png"},
			torch3: {day: "assets/objects/torchDay3.png", night: "assets/objects/torchNight3.png"},
			torchNight1: {normal: "assets/objects/torchNight1.png"}, // always needed for sentient goblin torch
			torchNight2: {normal: "assets/objects/torchNight2.png"},
			torchNight3: {normal: "assets/objects/torchNight3.png"},
			lootChest: {normal: "assets/objects/chest.png"},
			eaglecrestBanner: {normal: "assets/objects/eaglecrestBanner.png", christmas: "assets/objects/eaglecrestBannerChristmas.png"},
			nilbogBanner: {normal: "assets/objects/nilbogBanner.png", christmas: "assets/objects/nilbogBannerChristmas.png"},
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
			barebonesNkkja: {samhain: "assets/enemies/barebonesNkkja.png"},
			barebonesNkkjaCorpse: {samhain: "assets/corpses/barebonesNkkja.png"},
			fireballGreen: {samhain: "assets/projectiles/fireballGreen.png"},
			mudAnimation: {samhain: "assets/enemies/mudAnimation.png"},
			cauldron: {samhain: "assets/objects/cauldronSamhain.png"},
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

				if (Player.bossesKilled.marshallSheridan !== date && Player.bossesKilled.barebonesNkkja !== date) {
					// samhain boss (blood moon, and  has not been killed today)

					let bossNotSeen = Player.quests.questProgress.samhainBossIntroducedNilbog !== date; // whether boss has been introduced today or not

					if (bossNotSeen) {
						// boss has not been introduced today

						// define boss variable
						if (typeof Player.bossesKilled.marshallSheridan === "undefined") {
							Player.bossesKilled.marshallSheridan = 0;
						}
						if (typeof Player.bossesKilled.barebonesNkkja === "undefined") {
							Player.bossesKilled.barebonesNkkja = 0;
						}

						// decide which boss they see today
						if (Player.bossesKilled.barebonesNkkja >= Player.bossesKilled.marshallSheridan) {
							// sheridan
							Player.quests.questProgress.samhainBossNilbogToday = "marshallSheridan";
						}
						else {
							// nkkja
							Player.quests.questProgress.samhainBossNilbogToday = "barebonesNkkja";
						}

						// make sure this isn't called again
						Player.quests.questProgress.samhainBossIntroducedNilbog = date;
					}

					let boss; // pointer to variable boss is set to (used as shorthand)

					// add the boss' stuff and pan to them
					if (Player.quests.questProgress.samhainBossNilbogToday === "marshallSheridan") {
						// statue of marshall sheridan
						Game.enemies.push(new Enemy(Game.prepareNPC({
							x: 1817,
							y: 1310,
							template: EnemyTemplates.nilbog.marshallSheridan,
						}, "enemies")));
						boss = Game.enemies[Game.enemies.length-1];

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
					}
					else if (Player.quests.questProgress.samhainBossNilbogToday === "barebonesNkkja") {
						// barebones nkkja
						Game.enemies.push(new Enemy(Game.prepareNPC({
							x: 1717,
							y: 703,
							template: EnemyTemplates.nilbog.barebonesNkkja,
						}, "enemies")));
						boss = Game.enemies[Game.enemies.length-1];

						// cauldrons
						Game.characters.push(new Character(Game.prepareNPC({
							template: EnemyTemplates.nilbog.nkkjaCauldron,
							x: 1554,
							y: 226,
							name: "Nkkja's Cauldron of Wind",
							onDeath: function () {
								// stop any existing wind effect
								Game.wind = undefined;
								Dom.chat.insert(Dom.chat.say("'Barebones' Nkkja", "Have you any idea how long this took to make? Get here and face me!"));
							}
						}, "characters")));
						Game.characters.push(new Character(Game.prepareNPC({
							template: EnemyTemplates.nilbog.nkkjaCauldron,
							x: 1200,
							y: 1500,
							name: "Nkkja's Cauldron of Lightning",
							onDeath: function () {
								Dom.chat.insert(Dom.chat.say("'Barebones' Nkkja", "No! You will pay for this, with your blood!"));
							}
						}, "characters")));
						Game.characters.push(new Character(Game.prepareNPC({
							template: EnemyTemplates.nilbog.nkkjaCauldron,
							x: 2070,
							y: 1150,
							name: "Nkkja's Cauldron of Earth",
							onDeath: function () {
								// remove all of the existing bog elementals
								for (let i = 0; i < Game.enemies.length; i++) {
									if (Game.enemies[i].name === "Bog Animation") {
										Game.removeObject(Game.enemies[i].id, "enemies", i)
										i--;
									}
								}
								Dom.chat.insert(Dom.chat.say("'Barebones' Nkkja", "My bog creatures now hate you as much as I do!"));
							}
						}, "characters")));

						// pan to boss
						if (bossNotSeen) {
							// stop boss from moving until introduction is complete
							Game.statusEffects.stun({target: boss, time: 5, hidden: true})

							// pan to boss and cauldrons
							Game.camera.pan(boss, 600, "accelerate", function () {
								// function to be called 2s after pan is finished
								// pan to wind cauldron
								Game.camera.pan({x: 1554, y: 226}, 800, "accelerate", function () {
									// pan to earth cauldron
									Game.camera.pan({x: 2070, y: 1150}, 800, "accelerate", function () {
										// pan to lightning cauldron
										Game.camera.pan({x: 1200, y: 1500}, 800, "accelerate", function () {
											// pan back to player
											Game.camera.pan(Game.hero, 800, "constant", function () {
												// reset camera
												Game.camera.follow(Game.hero);
											}, 0);
										}, 1000);
									}, 1000);
								}, 1000);
							}, 2000);
						}
					}
				}
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
				animation: {
					type: "carousel",
					frameTime: 200,
					images: ["torchNight1", "torchNight2", "torchNight3"],
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
							}, [], 6000, "Cleaning Goblin Torch", {channelCancelFunction : function () {
								// even if channelling is cancelled, this should be set back
								Dom.currentlyDisplayed = "";
								Dom.currentNPC = {};
							}});
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
					Player.quests.prog.eaglecrestLoggingCamp[25].timesCompleted === 3;
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
				animation: {
					type: "carousel",
					frameTime: 200,
					images: ["campfire1", "campfire2", "campfire3"],
				},
			},
			{
				x: 840,
				y: 1570,
				image: "campfire1",
				name: "Campfire",
				// animation!
				animation: {
					type: "carousel",
					frameTime: 200,
					images: ["campfire1", "campfire2", "campfire3"],
				},
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
				image: "torch1",
				name: "Goblin Torch",
				animation: {
					type: "carousel",
					frameTime: 200,
					images: ["torch1", "torch2", "torch3"],
				},
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
			],
		},

		images: {
			tiles: {normal: "assets/tilemap/loggingCamp.png"},
			stairs: {normal: "assets/objects/stairsRight.png"},
			painting: {normal: "assets/objects/paintingAndrews.png", christmas: "assets/objects/paintingAndrewsChristmas.png"},
			goblinTowerkeeper: {normal: "assets/enemies/goblinTowerkeeper.png"},
			goblinCorpse: {normal: "assets/corpses/deadGoblin.png"},
			melee: {normal: "assets/projectiles/melee.png"},
			trap: {normal: "assets/objects/trap.png"},
		},

		areaTeleports: [
			{
				// teleport to nilbog (bottom of tower)
				x: 300,
				y: 649,
				width: 600,
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
			weaponRack: {normal: "assets/objects/weaponRack.png", christmas: "assets/objects/weaponRackChristmas.png"},
			torianTintop: {normal: "assets/npcs/torianTintop.png"},
			nessyTintop: {normal: "assets/npcs/nessyTintop.png"},
			trap: {normal: "assets/objects/trap.png"},
			goblinTowerkeeper: {normal: "assets/enemies/goblinTowerkeeper.png"},
			goblinCrusader: {normal: "assets/enemies/goblinCrusader.png"},
			goblinCorpse: {normal: "assets/corpses/deadGoblin.png"},
			melee: {normal: "assets/projectiles/melee.png"},
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
					Player.quests.prog.eaglecrestLoggingCamp[25].timesCompleted === 7;
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

	tagGameAllowed: "eaglecrest",

	song_day: "assets/music/Eaglecrest.mp3",
	song_night: "assets/music/Eaglecrest.mp3",

	checkpoint: true,
	player: {
		x: 2860,
		y: 1786,
	},

	lootArea: "eaglecrest",
	lootTier: 1,

	mapData: {
		origin: {x:  960, y: 0},
		cols: 191,
		rows: 80,
		tsize: 60,
		tilesPerRow: 8,
		solidTiles: [1, 2, 3, 4, 6, 7, 9, 10, 11, 12, 13, 15, 17, 18, 19, 20, 21, 23, 25, 26, 27, 28, 29, 31, 33, 34, 35, 36, 37, 38, 39, 42, 43, 44, 45, 46, 47, 51, 53, 55, 57, 58, 61, 65, 69, 73, 77, 82, 83, 161, 164, 168, 196, 197, 286, 292, 303, 304, 328, 327, 231, 232, 244, 245, 269, 68, 394, 393, 388],
		dayTiles: [11, 27, 34, 42, 7, 417, 199, 598, 606, 591, 599, 607, 729, 730, 731, 737, 738, 739, 746, 747, 748], // windows and lights
		nightTiles: [3, 19, 2, 18, 15, 418, 419, 582, 590, 592, 600, 608, 749, 750, 751, 757, 758, 759, 745, 755, 756],
		pathTiles: [5, 12, 41, 50, 51, 57, 58, 59, 60, 76, 113, 121, 129, 420, 421, 414],
		iceTiles: [27, 35],
		showIfTiles: [ // calculated in runtime so should be quite efficient if possible (only use if it needs to be checked every frame)
			{
				tiles: [212, 209, 210, 211, 220, 217, 218, 219, 228, 225, 226, 227],
				function () { // returns true or false depending on whether these files can be shown or not
					return Player.inventory.helm.type === "helm" && Player.inventory.helm.id === 45; // wearing pawperceptors
				}
			}
		],
		animateTiles: [

			{
			// water boundary
			tiles: [307, 343],
			animateTime: 180,
		},

		{
		// Tinkerer Windows!
		tiles: [356, 358, 359, 350, 357, 360],
		animateTime: 400,
		},

		{
		// water boundary 2
		tiles: [311, 336],
		animateTime: 180,
	},
	{
	// water boundary
	tiles: [344, 312],
	animateTime: 180,
},
{
	// river tiles
	tiles: [222, 223, 230],
	animateTime: 200,
},
{
	// water soil boundary
	tiles: [71, 182],
	animateTime: 200,
},
{
	// water soil boundary
	tiles: [181, 24],
	animateTime: 200,
},
{
	// water soil boundary
	tiles: [64, 183],
	animateTime: 200,
},

{
	// water
	tiles: [32, 40, 48],
	animateTime: 200,
},


	],
		objectTiles: [169, 369, 377], // upper roof tile
		repeatTiles: [
			{
				tile: 192,
				ySpacing: 20,
				xSpacing: 5,
				name: "Beetroot"
			},
			{
				tile: 216,
				ySpacing: 20,
				xSpacing: 10,
				name: "Amaranth"
			},
			{
				tile: 243,
				ySpacing: 20,
				xSpacing: -30,
				name: "Teal Callalilies"
			},
			{
				tile: 242,
				ySpacing: 20,
				xSpacing: -20,
				name: "Daisies"
			},
			{
				tile: 241,
				ySpacing: 20,
				xSpacing: -30,
				name: "Marigolds"
			},
			{
				tile: 239,
				ySpacing: 20,
				xSpacing: -6,
				name: "Lavender"
			},
			{
				tile: 238,
				ySpacing: 30,
				xSpacing: -20,
				name: "Wolfsbane"
			},
			{
				tile: 237,
				ySpacing: 20,
				xSpacing: -10,
				name: "Cyan Wallflowers"
			},
			{
				tile: 236,
				ySpacing: 30,
				xSpacing: -10,
				name: "Orange Tulips"
			},
			{
				tile: 234,
				ySpacing: 20,
				xSpacing: -10,
				name: "Poppies"
			},
			{
				tile: 235,
				ySpacing: 20,
				xSpacing: -10,
				name: "Pink Alcea"
			},
			{
				tile: 215,
				ySpacing: 20,
				xSpacing: -6,
				name: "Tall Grass",
				kMultiplier: 6,
			},
			{
				tile: 207,
				ySpacing: 20,
				xSpacing: -6,
				name: "Tall Grass Tops",
				orderOffsetY: 60,
				kMultiplier: 6,
			},
			{
				tile: 160,
				ySpacing: 20,
				xSpacing: -6,
				name: "Grass",
				kMultiplier: 6,
			},
		],

	},

	isIcy: function() {
		return Event.event === "Christmas";
	},

	images: {
		tiles: {normal: "assets/tilemap/eaglecrest.png", christmas: "assets/tilemap/eaglecrestChristmas.png"},
		cart1: {normal: "assets/objects/cartEaglecrest.png", christmas: "assets/objects/cartEaglecrestChristmas.png"},
		cart2: {normal: "assets/objects/cartEaglecrest2.png", christmas: "assets/objects/cartEaglecrestChristmas2.png"},
		cart3: {normal: "assets/objects/cartEaglecrest3.png", christmas: "assets/objects/cartEaglecrestChristmas3.png"},
		driver: {normal: "assets/npcs/alaran.png"},
		weaponsmith: {normal: "assets/npcs/weaponsmith.png"},
		alysLoreworth: {normal: "assets/npcs/alysLoreworth.png"},
		guard1: {normal: "assets/npcs/eaglecrestGuard.png"},
		guard2: {normal: "assets/npcs/eaglecrestGuard2.png"},
		maskSalesman: {normal: "assets/npcs/maskSalesman.png"},
		mailbox: {normal: "assets/objects/mailbox.png"},
		tent2light: {normal: "assets/objects/tent2light.png"},
		barrel: {normal: "assets/objects/barrel.png"},
		hayWagon: {normal: "assets/objects/hayWagon.png"},
		hayBale1PawPeaks: {normal: "assets/objects/hayBale1PawPeaks.png"},
		hayBale2PawPeaks: {normal: "assets/objects/hayBale2PawPeaks.png"},
		well: {normal: "assets/objects/well.png"},
		ironBucket: {normal: "assets/objects/ironBucket.png"},
		cauldronEaglecrest: {normal: "assets/objects/cauldronEaglecrest.png"},
		freeItemBox: {normal: "assets/objects/freeItemBox.png"},
		freeItemBoxValentines2024: {normal: "assets/objects/freeItemBoxValentines2024.png"},
		camellia: {normal: "assets/objects/camellia.png"},
		shrub: {normal: "assets/objects/shrub.png"},
		shrub1: {normal: "assets/objects/shrub1.png"},
		shrub2: {normal: "assets/objects/shrub2.png"},
		camellia2: {normal: "assets/objects/camellia2.png"},
		archaeologistBag: {normal: "assets/objects/archaeologistBag.png"},
		archaeologistBrush1: {normal: "assets/objects/archaeologistBrush1.png"},
		archaeologistBrush2: {normal: "assets/objects/archaeologistBrush2.png"},
		anvil: {normal: "assets/objects/anvil.png"},
		eaglecrestStatue: {normal: "assets/objects/eaglecrestStatue.png"},
		eaglecrestStatueHead: {normal: "assets/objects/eaglecrestStatueHead.png"},
		gravestone1: {normal: "assets/objects/gravestone1.png", christmas: "assets/objects/gravestone1Christmas.png"},
		gravestone2: {normal: "assets/objects/gravestone2.png", christmas: "assets/objects/gravestone2Christmas.png"},
		gravestone3: {normal: "assets/objects/gravestone3.png", christmas: "assets/objects/gravestone3Christmas.png"},
		gargoyleLeft: {normal: "assets/objects/gargoyle.png", christmas: "assets/objects/gargoyleChristmas.png"},
		gargoyleRight: {normal: "assets/objects/gargoyle.png", christmas: "assets/objects/gargoyleChristmas.png", flip: "vertical"},
		gargoyleWaterLeft1: {normal: "assets/objects/waterShoot1.png"},
		gargoyleWaterLeft2: {normal: "assets/objects/waterShoot2.png"},
		gargoyleWaterLeft3: {normal: "assets/objects/waterShoot3.png"},
		gargoyleWaterRight1: {normal: "assets/objects/waterShoot1.png", flip: "vertical"},
		gargoyleWaterRight2: {normal: "assets/objects/waterShoot2.png", flip: "vertical"},
		gargoyleWaterRight3: {normal: "assets/objects/waterShoot3.png", flip: "vertical"},
		lanternCave: {normal: "assets/objects/lanternCave.png"},
		mailboxUnread: {normal: "assets/objects/mailboxUnread.png"},
		fountain1: {normal: "assets/objects/fountainFlowing1.png", christmas: "assets/objects/fountainChristmas.png"},
		fountain2: {normal: "assets/objects/fountainFlowing2.png", christmas: "assets/objects/fountainChristmas.png"},
		fountain3: {normal: "assets/objects/fountainFlowing3.png", christmas: "assets/objects/fountainChristmas.png"},
		fountain4: {normal: "assets/objects/fountainFlowing4.png", christmas: "assets/objects/fountainChristmas.png"},
		identifier: {normal: "assets/npcs/hranatha.png"},
		eaglecrestLampDay: {normal: "assets/objects/eaglecrestLampDay.png", christmas: "assets/objects/eaglecrestLampDayChristmas.png"},
		eaglecrestLampNight: {normal: "assets/objects/eaglecrestLampNight.png", christmas: "assets/objects/eaglecrestLampNightChristmas.png"},
		eaglecrestLampSamhain: {samhain: "assets/objects/eaglecrestLampSamhain.png"},
		helpNotice: {normal: "assets/objects/helpNotice.png"},
		buntingEaglecrest: {normal: "assets/objects/buntingEaglecrest.png"},
		marketStall2: {normal: "assets/objects/marketStall2.png"},
		gearSteel: {normal: "assets/objects/gearSteel.png"},
		gearRust: {normal: "assets/objects/gearRust.png"},
		siren: {normal: "assets/objects/siren.png"},
		tinkererChimney: {normal: "assets/objects/tinkererChimney.png"},
		buntingEaglecrestTinkerers: {normal: "assets/objects/buntingEaglecrestTinkerers.png"},
		buntingEaglecrest2: {normal: "assets/objects/buntingEaglecrest2.png"},
		buntingEaglecrest3: {normal: "assets/objects/buntingEaglecrest3.png"},
		buntingEaglecrest4: {normal: "assets/objects/buntingEaglecrest4.png"},
		sylvie: {normal: "assets/npcs/sylvie.png"},
		yellowSnakeRight: {samhain: "assets/enemies/yellowSnake.png"},
		yellowSnakeLeft: {samhain: "assets/enemies/yellowSnake.png", flip: "vertical"},
		closedSign: {normal: "assets/objects/closedEaglecrest.png"},
		marketStall: {normal: "assets/objects/marketStall.png", christmas: "assets/objects/marketStallChristmas.png"},
		pieMerchant: {normal: "assets/npcs/pieMerchant.png"},
		itemBuyer: {normal: "assets/npcs/nhkghghh.png"},
		gingerbreadHouse: {christmas: "assets/objects/gingerbreadHouse.png"},
		catBowlEmpty: {normal: "assets/objects/catBowlEmpty.png"},
		catBowlFull: {normal: "assets/objects/catBowlFull.png"},
		eagleStatue: {normal: "assets/objects/eagleStatue.png"},
		sewerEntrance: {normal: "assets/objects/sewerEntrance.png"},
		dowsingRod: {normal: "assets/objects/dowsingRod.png"},
		eaglecrestBanner: {normal: "assets/objects/eaglecrestBanner.png"},
		bench: {normal: "assets/objects/bench.png"},
		benchFlip: {normal: "assets/objects/benchFlip.png"},
		flowerPot: {normal: "assets/objects/flowerPot.png"},
		eaglecrestGhost: {samhain: "assets/enemies/eaglecrestGhost.png"},
		eaglecrestGhost2: {samhain: "assets/enemies/eaglecrestGhost2.png"},
		crateSamhain: {samhain: "assets/objects/crateSamhain.png"},
		melee: {samhain: "assets/projectiles/melee.png"},

	},

	callAreaJoinOnInit: true,
	onAreaJoin: function () {
		// samhain snakes and lights
		if (Event.event === "Samhain" && Player.quests.completedQuestArray.includes("Overdraft")) {
			let no = Random(60,90); // num of snakes
			for (let i = 0; i < no; i++) {
				Game.villagers.push(new Villager(Game.prepareNPC({
					template: EnemyTemplates.eaglecrest.snake,
				}, "villagers")));
			}

			if (Player.quests.questProgress.westSamhainLights) {
				Areas.eaglecrest.samhainLights("west");
			}
			if (Player.quests.questProgress.mainSamhainLights) {
				Areas.eaglecrest.samhainLights("main");
			}
			if (Player.quests.questProgress.eastSamhainLights) {
				Areas.eaglecrest.samhainLights("east");
			}
			if (Player.quests.questProgress.graveyardSamhainLights) {
				Areas.eaglecrest.samhainLights("graveyard");
			}
		}
	},

	// turn eaglecrest lights green!
	samhainLights: function (location) {
		let minX, maxX;
		if (location === "west") {
			minX = 0;
			maxX = 2200;
		}
		else if (location === "main") {
			minX = 2200;
			maxX = 5560;
		}
		else if (location === "east") {
			minX = 5560;
			maxX = 7810;
		}
		else if (location === "graveyard") {
			minX = 7810;
			maxX = 99999;
		}
		let tileFunction = function (layer, tileNum) {
			let tileCol = tileNum % map.cols;
			let tileX = map.getX(tileCol);
			return tileX >= minX && tileX < maxX;
		}
		map.replaceTiles(3, 145, tileFunction);
		map.replaceTiles(11, 145, tileFunction);
		map.replaceTiles(2, 146, tileFunction);
		map.replaceTiles(34, 146, tileFunction);
		map.replaceTiles(18, 153, tileFunction);
		map.replaceTiles(42, 153, tileFunction);
		map.replaceTiles(27, 154, tileFunction);
		map.replaceTiles(19, 154, tileFunction);
		map.replaceTiles(35, 156, tileFunction);
		// also replace image of any light objects
		for (let i = 0; i < Game.things.length; i++) {
			if (Game.things[i].name === "Eaglecrest Lamp" && Game.things[i].x >= minX && Game.things[i].x < maxX) {
				Game.things[i].setImage("eaglecrestLampSamhain");
				Game.things[i].imageNight = "eaglecrestLampSamhain";
				Game.things[i].imageDay = "eaglecrestLampSamhain";
			}
		}
	},

	tripwires: [
{ // eagle statue speed buffs
	x: [2640.3, 4920.4, 8213, 7904.8, 7943.3, 6807, 690.5, 3420, 4080], y: [1920.5, 1920.5, 1845, 3187.5, 4404.7, 2500, 2500, 3200, 3200],
	width: 500, height: 500,
	collisionType: "feet",
	onPlayerTouch: function () {
		Game.statusEffects.walkSpeed({
			target: Game.hero,
			effectTitle: "Eagle's Swiftness",
			speedIncrease: 75,
			time: 10,
			effectStack: "refresh", // effect refreshes (doesn't extend time above 0.5s)
			// end purple effect when this effect expires
			onExpire: "removeTrail",
			callExpireOnRemove: true,
			onExpireParams: ["eagleStatueSpeed"]
		});
		// purple particle effect trail
		Game.hero.addTrail("eagleStatueSpeed", {
			width: 3,
			height: 3,
			colour: ["#8317C6", "#621191"], // class Particle chooses random colour from array
			removeIn: 1000,
			rotation: 0,
			variance: 50, // variance in position (in x/y axis in one direction from player)
			intensity: 1, // no. of particles every 100ms
		});
		// find nearest statue; give it trail and animate it
		let statueArray = Game.things.filter(entity => entity.name === "Eagle Statue");
		let statue = Game.closest(statueArray, Game.hero);
		/*statue.addTrail("eagleStatueSpeed", { // commented because was hard to remove the trail
			width: 3,
			height: 3,
			colour: ["#8317C6", "#621191"], // class Particle chooses random colour from array
			removeIn: 1000,
			rotation: 0,
			variance: 80, // variance in position (in x/y axis in one direction from player)
			intensity: 8, // no. of particles every 100ms
		});*/
		if (typeof statue.animation === "undefined") {
			statue.setAnimation({
				type: "spritesheet",
				frameTime: 250,
				imagesPerRow: 3,
				totalImages: 5,
				stopAnimationOnState: 4,
				startState: 0,
			});
		}
	}
},



],

	areaTeleports: [
		{
			// teleport to bank
			x: 4890,
			y: 1315,
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
			// teleport to tinkerersEntrance
			x: 5190,
			y: 2820,
			width: 120,
			height: 2,
			teleportTo: "tinkerersEntrance",
			destinationX: 360,
			destinationY: 694,
		},


		{
			// teleport to tavern
			x: 2610.2,
			y: 1315,
			width: 120,
			height: 2,
			teleportTo: "eaglecrestTavern",
			destinationX: 630,
			destinationY: 1380,
		},
		{
			// teleport to the forge
			x: 6570,
			y: 1950,
			width: 60,
			height: 2,
			teleportTo: "theForge",
			destinationX: 395,
			destinationY: 770,
		},
		{
			// teleport to eaglecrest elixirs
			x: 7050,
			y: 1951,
			width: 60,
			height: 2,
			teleportTo: "eaglecrestElixirs",
			destinationX: 395,
			destinationY: 770,
		},
		{
			// teleport to shop
			x: 691,
			y: 1951,
			width: 60,
			height: 2,
			teleportTo: "eaglecrestBazaar",
			destinationX: 395,
			destinationY: 770,
		},
		{
			// teleport to eaglecrest monastery
			x: 9631,
			y: 1850,
			width: 120,
			height: 2,
			teleportTo: "eaglecrestMonastery",
			destinationX: 1100,
			destinationY: 1730,
			teleportCondition: function () {
				return false;
			},
			teleportFailText: "The Monastery is currently closed for rennovation."
		},
		{
			// teleport to eaglecrest plains
			x: 3744,
			y: 4800,
			width: 520,
			height: 2,
			teleportTo: "eaglecrestPlains",
			destinationX: 3000,
			destinationY: 300,
		},
		{
			// teleport to a shop that hasn't been made yet...
			x: 6153,
			y: 2898,
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

	collisions: [
		{
			x: 3740, // fountain
			y: 1640,
			width: 170,
			height: 60,
		},
	],

	villagerData: {
		minPeople: 15,
		maxPeople: 20,
		locations: [

			{x: 39.5, y: 1963.6, width: 2176.1, height: 282.5},
			{x: 0, y: 3035.5, width: 1493.1, height: 214},
			{x: 2283.8, y: 3171.8, width: 737.6, height: 272},
			{x: 2873.3, y: 2127.1, width: 309.8, height: 976.5},
			{x: 2226.5, y: 1968.5, width: 636, height: 184.5},
			{x: 4415.3, y: 3218.7, width: 617.6, height: 203.7},
			{x: 5110.3, y: 3047.8, width: 1391.3, height: 249.8},
			{x: 6585.1, y: 3031.1, width: 1358.8, height: 209.5},
			{x: 4997.6, y: 1966.7, width: 3010.3, height: 301.7},
			{x: 4339, y: 2258, width: 270.5, height: 892.4},
			{x: 8081.3, y: 2011.9, width: 1665.7, height: 403.1},


		],
	},

	villagers: [
		{
			boundary: [
			{x: 3604.8, y: 2998.2, width: 288, height: 205.3},],
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
				{
					quest: Quests.eaglecrest[10],
					role: "questProgress",
					step: [0, 1]
				},
				{
					quest: Quests.eaglecrest[11],
					role: "questProgress",
					step: [0, 1]
				},
				{
					role: "chatBanner",
					chooseText: "Ask about a <b>translator</b>.",
					forceChoose: true,
					chat: [{
						text: `A <b>translator</b>? Unfortunately I don't, but I'm sure you can find one around! Maybe some of the <b>shopkeepers</b> would have one.`,
					},{
						text: `Remember to come back to me later and maybe I'll have something for you to do!`,
					},],
					roleRequirement: function () {
						return Player.quests.prog.eaglecrest[12].stepProgress[2] && !Player.quests.prog.eaglecrest[12].stepProgress[3];
					},
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
			x: 4095,
			y: 3412,
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
			// id: 0,
			x: 2635,
			y: 3500,
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
				{
					role: "chatBanner",
					chooseText: "Ask about a <b>translator</b>.",
					forceChoose: true,
					chat: [{
						text: `A <b>Translator</b>? No. Try asking some of the <b>shopkeepers</b>.`,
					},],
					roleRequirement: function () {
						return Player.quests.prog.eaglecrest[12].stepProgress[2] && !Player.quests.prog.eaglecrest[12].stepProgress[3];
					},
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
			// id: 6,
			x: 5668,
			y: 1825,
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
				{
					role: "chatBanner",
					chooseText: "Ask about a <b>translator</b>.",
					forceChoose: true,
					chat: [{
						text: `I only buy, not sell. Speaking of selling, you got anything for me?`,
					},],
					roleRequirement: function () {
						return Player.quests.prog.eaglecrest[12].stepProgress[2] && !Player.quests.prog.eaglecrest[12].stepProgress[3];
					},
				},
			],
			chat: {
				notUnlockedRoles: "I promise I'm not like other goblins. I just buy stuff. Lots of good stuff to collect. I'm trying to make my own armour. Can you help?",
				buyerGreeting: "Loot loot loot. Some for me, perhaps?",
			},
		},
		{
			// id: 1,
			x: 3618,
			y: 400,
			image: "guard1",
			template: NPCTemplates.guard,
			roles: [
				{
					role: "chatBanner",
					chooseText: "Ask about a <b>translator</b>.",
					forceChoose: true,
					chat: [{
						text: `I'm busy. Leave.`,
					},],
					roleRequirement: function () {
						return Player.quests.prog.eaglecrest[12].stepProgress[2] && !Player.quests.prog.eaglecrest[12].stepProgress[3];
					},
				},
			]
		},
		{
			// id: 2,
			x: 3872,
			y: 400,
			image: "guard2",
			template: NPCTemplates.guard,
		},
		{
			// id: 3,
			x: 3588,
			y: 3755,
			image: "guard1",
			template: NPCTemplates.guard,
		},
		{
			// id: 4,
			x: 3910,
			y: 3755,
			image: "guard2",
			template: NPCTemplates.guard,
		},

		{
			// id: 8,
			x: 1845,
			y: 1825,
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
				{
					role: "chatBanner",
					chooseText: "Ask about a <b>translator</b>.",
					forceChoose: true,
					chat: [{
						text: `Don't have a <b>translator</b>. Feel free to come back if you have something for me to identify!`,
					},],
					roleRequirement: function () {
						return Player.quests.prog.eaglecrest[12].stepProgress[2] && !Player.quests.prog.eaglecrest[12].stepProgress[3];
					},
				},
			],
			chat: {
				identifierGreeting: "Something for me to identify for you, hm?",
				noUnidentified: "There's nothing for me to identify. Find some items and come back to me.",
				identifyCommon: "Nothing special this time.",
				identifyUnique: "Hm, a unique item. Nice.",
				identifyMythic: "Ooh! It's been a while since I last saw one of those!",
				tooPoor: "I can't identify that for free, you know.",
			},
		},






		{
			// id: 9,
			x: 2920.3,
			y: 1915.2,
			orderOffsetY: 37.5,
			image: "helpNotice",
			name: "Help Notice",
			showNameTag: false,
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
			meetable: false,
		},
		{
			x: 1209,
			y: 1897,
			image: "pieMerchant",
			name: "Billie the Beetroot Merchant",
			showNameTag: false, // shown on stall instead
			hostility: "friendly",
			level: 30,
			stats: {
				maxHealth: 200,
				defence: 6,
			},
			roles: [
				{
					sold: [
						{item: Items.food[5], cost: 5},
					],
					role: "merchant",
					shopGreeting: "Greetings, customer. Care to indulge in a beetroot pie?",
				},
				{
					role: "chatBanner",
					chooseText: "Ask about a <b>translator</b>.",
					forceChoose: true,
					chat: [{
						text: `What would you need a translator for? The language of pies is universal!`,
					},{
						text: `I've only got pies, but they'll be sure to fill your stomach!`,
					},],
					roleRequirement: function () {
						return Player.quests.prog.eaglecrest[12].stepProgress[2] && !Player.quests.prog.eaglecrest[12].stepProgress[3];
					},
				},
			],
			chat: {
				shopLeave: "You'll be back. Nobody can resist my pies for long.",
				inventoryFull: "Seems like you've been a little too indulgent lately. Come back when your inventory's emptier.",
				tooPoor: "An empty stomach and an empty purse. Oh dear.",
				// TBD - to beckon the player over: Smell something tasty?, Looks like you've got a full purse and an empty stomach! Fancy a pie?
			},
		},
		{
			// id: 0,
			x: 1176,
			y: 2920,
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
					role: "function",
					chooseText: "Here are 5 Wispy Feathers",
					onClick: function () {
						if (Dom.inventory.check(37, "item", 5)) {
							Dom.inventory.removeById(37, "item", 5);
							Dom.inventory.give(Items.item[38]);
							Player.quests.questProgress.westCrate = true;
							Dom.text.page("Mask Salesman", "You have my feathers? Great. These will prove rather helpful.<br><br>I know what you're doing with these Crystals. All I can say, is make sure I get my cut of Marks once the blood has risen from the depths. <b><i>I insist</i></b>.", true, [], [], [{item: Items.item[38]}]);
						}
					},
					forceChoose: true, // forces choose dom
					roleRequirement: function () {
						if (!Dom.inventory.requiredSpace([{item: Items.item[38]}])) {
							Dom.chat.insert(Dom.chat.say("Mask Salesman", "You don't have enough space in your bags for the Crystal."));
							return false;
						}
						return !Player.quests.questProgress.westCrate && Player.quests.activeQuestArray.includes("Moving Like a Snake") && Dom.inventory.check(37, "item", 5);
					}
				},
				{
					role: "text",
					chooseText: "Have you seen a mysterious crate nearby?",
					chat: `Yes I have. And it had a rather nice <b>Blood-Red Crystal</b> in it.<br><br>
					Oh, you want the crystal? That's a shame isn't it.<br><br>
					I suppose there is something you could do.... I need fresh resources for my masks. Bring me <b>5 Wispy Feathers</b> from the <b>Chickens</b> in the <b>Plains</b>. And then I will <i>consider</i> parting with the crystal.`,
					showCloseButton: false,
					buttons: ["Close"],
					functions: [function () {
						// close page
						Dom.closePage("textPage");
						// quest progress
						Player.quests.npcProgress.eaglecrest[5] = true;
						Dom.quests.active();
					}],
					forceChoose: true, // forces choose dom
					roleRequirement: function () {
						return !Player.quests.questProgress.westCrate && Player.quests.activeQuestArray.includes("Moving Like a Snake") && !Dom.inventory.check(37, "item", 5);
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
					chooseText: "Do you have anything special you're selling today?",
					shopGreeting: "You'd <em>love</em> to hear how I made this mask.",
					roleRequirement: function () {
						return Event.event === "Valentine";
					},
				},
				{
					sold: [
						{item: Items.helm[34], cost: 10, costCurrency: 5}, // mechanical santa mask
					],
					role: "merchant",
					chooseText: "What have you got to sell this Christmas?",
					shopGreeting: "Who says the Christmas season can't have a bit of horror?",
					roleRequirement: function () {
						return Event.event === "Christmas";
					},
				},
				{
					role: "chatBanner",
					chooseText: "Ask about a <b>translator</b>.",
					forceChoose: true,
					chat: [{
						text: `<b>Translator</b>? No. But I do have some of the best masks you'll find for miles around.`,
					},{
						text: `Maybe a less... authentic... shopkeeper will have one.`,
					},],
					roleRequirement: function () {
						return Player.quests.prog.eaglecrest[12].stepProgress[2] && !Player.quests.prog.eaglecrest[12].stepProgress[3];
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

	mailboxes: [
		{
			x: 3010.2,
			y: 2300,
			readImage: "mailbox",
			unreadImage: "mailboxUnread",
			name: "Mailbox",
		},
	],

	things: [
		{
			x: [2640.3, 4920.4, 8213, 7904.8, 7943.3, 6807, 690.5, 3420, 4080], y: [1920.5, 1920.5, 1845, 3187.5, 4404.7, 2500, 2500, 3200, 3200],
			image: 'eagleStatue',
			name: 'Eagle Statue',
			crop: {
				x: 0,
				y: 2,
				width: 150,
				height: 188
			}
		},

		{
			x: [4015.6, 3483.1, 2586.4, 2036.5, 4924.5, 5463.1],
			y: [2568.1, 2568.1, 2328.8, 2328.8, 2328.8, 2328.8],
			orderOffsetY: -10,
			name: "dowsingRod",
			image: "dowsingRod",
			crop: {
				x: 0,
				y: 0,
				width: 80,
				height: 80
			},
			animation: {
				type: "spritesheet",
				frameTime: 10000,
				imagesPerRow: 3,
				totalImages: 3,
			},
		},
		{x: 5675.6, y: 2983.4, image: 'catBowlEmpty', name: ''},

//the canal!
{x: [245, -252, -306, -434, -434, 409, -410, -221, -265, 140, 209, 480, 278, -226, -298, -433, -433, -433, -211, 173, 362, 437, 962, 1006], y: [1858, 1858, 1858, 2013, 2058, 2262, 2262, 2262, 2262, 2262, 2262, 2005, 2897, 2897, 2897, 2981, 3032, 3089, 3286, 3286, 3286, 3286, 1976, 1917], image: 'camellia', name: ''},
{x: [549, 399, 86, 86, -151, -437, -403, -148, 91, 91, 91, -150, -150, 495, 468], y: [2043, 1961, 1913, 1943, 2255, 1915, 1889, 1864, 2911, 2947, 3282, 3246, 2890, 3044, 3059], image: 'shrub', name: ''},
{x: [-201, -364, -426, 427, 334, 507, 868, -159, 94, -412, -149, 423, 554], y: [1869, 1832, 2145, 1927, 1847, 2039, 1999, 2210, 2861, 2841, 2955, 3014, 3286], image: 'shrub2', name: ''},
{x: [106, 139, 370, 445, 98, 98, -153, -153, -153, -153, -422, -422, -422, -316, 271, 328, 486, 486, 508, 564, -419, -356, -427, -330, -273, -153, 108, 249, 300, 157, 199, 325, 362, 477, 533, 566], y: [1836, 1865, 1902, 1976, 2210, 2258, 2271, 2160, 1885, 1936, 1930, 1978, 2188, 2273, 2275, 2275, 2275, 2212, 2067, 2038, 2881, 2881, 2940, 3299, 3299, 3299, 3299, 3299, 3299, 2895, 2895, 2952, 2986, 3309, 3188, 3215], image: 'shrub1', name: ''},


		{x: [4168.7, 2761.6, 2357.9, 3201.4, 4656.7], y: [2430.5, 3040.6, 1811.7, 964.4, 1669.4], image: 'bench', name: ''},
		{x: [3952, 3977, 4046.8, 3970, 4088.6, 4123.3, 4078.1, 4183, 3372.9, 3338.4, 3436.7, 3526.7, 3545.6, 3547, 3465.9, 3400.7, 2998.8, 2958.9, 2921.4, 2886.9, 2861.1, 2897.9, 2932.5, 2882.7, 2840, 2819, 4504.3, 4535.8, 4575.7, 4605.1, 4633.4, 4664.9, 4701.7, 4640.8, 4688, 4736.8, 2871.6, 2886.7, 4628.9], y: [3898.8, 3831.8, 3859.5, 3876.3, 3747.2, 3720.1, 3697.4, 3679.5, 3712.9, 3681.4, 3697.2, 3820.5, 3858.9, 3897.8, 3859.4, 3751.9, 3644.6, 3690.5, 3728, 3768.5, 3713.3, 3673.6, 3634.4, 3591.2, 3627.9, 3659.4, 3638.7, 3670.2, 3710.1, 3751.5, 3782.8, 3667.3, 3627.6, 3544.2, 3591.4, 3598.8, 3805.8, 3844, 3829.8], image: 'shrub1', name: ''}, //eaglecrest entrance

    {x: [3992.8, 4203.7, 3231.7, 2799.6, 2827.1, 2164.5, 2186.9, 3517.5, 3501.2, 3322.2, 3381.3, 3563], y: [3244.2, 3224.7, 2966.4, 3116.3, 3084.6, 3034.7, 3000.2, 3220.9, 3247.7, 3225.2, 3270.5, 4110.9, 3839], image: 'shrub', name: ''},
		{x: [ 3461.5, 4056.6, 4120.9, 3291.1, 5123.7, 5169.3, 4588.8, 4588.8], y: [ 2374.3, 2379.9, 3667.7, 3060.7, 1748.4, 1766.8, 1830.2, 1877.5], image: 'camellia', name: ''},
{x: [4615.1, 4594.6, 4562.8, 4562.8, 5337.4, 5357.6, 5245.8, 5209.6, 5254.2, 2244.4, 2268.2, 2314.2, 2943.9, 2943.9, 2881.6, 2881.6, 2092, 2073, 2833.3, 2833.3, 2265.9, 2341.1, 2318.8], y: [1962.2, 1982.8, 1676.9, 1700.5, 1913.7, 1928.6, 1382.7, 1416.2, 1416.2, 1412.4, 1925.8, 1925.8, 1660.7, 1694.8, 1830.5, 1859.4, 1945.8, 1961.8, 1448.3, 1461.8, 1430.5, 1724.3, 1746.7], image: 'shrub', name: ''},
{x: [4281.9, 4272.6, 3215.5, 3224.8, 3289.6, 4290.6, 4290.6, 3217.6, 3217.6, 3277.4, 4225.4, 3219.2, 3682.4, 3692.3,], y: [3084.1, 3103.9, 3071.7, 3102.1, 3227.3, 2794.6, 2758, 2765.3, 2733.9, 2914.8, 2914.8, 2873.3, 3578.4, 3598,], image: 'shrub', name: ''},
		{x: [5526.5, 5511.6, 5810.4, 5830, 4158.2, 3539.6, 3609.4, 3618.7, 3880.8, 3880.8, 3908.8, 2469.6, 5031.6, 3237.2, 4677.2, 4677.2, 4273, 4273, 3479.1, 4011.3, 3931.5, 3801, 3817.8, 3681.2, 3709, 3796.5, 3753.2,], y: [1906.4, 1944.9, 1905.5, 1946.2, 3215.9, 3215.3, 3045.6, 2997, 2997, 3039, 3074.8, 1381.8, 1383.1, 2942.8, 2905.4, 2939.6, 2842.7, 2890.1, 3262.9, 3262.1, 3219.8, 3584.7, 3546.8, 3546.8, 3510.4, 3510.4, 3496.4,], image: 'shrub1', name: ''}, //outside of buildings!
		{x: [2601.9, 5131.5, 2120.9,  4037.4, 6020, 4218.6, 6454.3, 3368.6, 4120.6, 3390.5, 3464, 4041.5, 3952.1, 5090.9, 4684.8, 4542.8, 4609.3,  4554.8,  3547.1,   3048.6,2909.2,  4507.6], y: [3064.4, 1447.2, 3122.9, 3789.4,  1932, 3059, 3009.2, 3667.7, 2328.3, 2328.3, 2434.8, 2434.8, 2399.6, 3548.7, 1438, 3632.4, 3691.9, 1580.4, 2399.6, 2001.1,1511.5, 2010.5], image: 'camellia2', name: ''},
		{x: [2119.6, 2119.6, 6511.2, 6546.1, 6601.1,   3003.8,  2909.2, 4472.4, 4567.4, 4630.8, 4626.1, 4951.4, 5020.4, 3462.5, 5448.2, 4900.2, 3640, 3860.6,], y:[3178.5, 3243, 3015.8, 3047.8, 3057.7,   2010.5,   1563.9, 1999.3,  1527.2,  1546.4,  3627.5, 3548.7, 3548.7,  3786.2,1932,3079.5,2399.6, 2399.6,], image: 'camellia', name: ''},
		{x: [3255.4, 2729.2, 3341.7, 3983.2, 4141.2, 4690, 4252.5, 4776.7, 1941, 1979.8, 2023.3, 5234.9, 5274.3, 2186.7, 2239.6, 4288.4], y:[2859.7, 2964.5, 3215.8, 3199, 3064.1, 2797.9, 2924.3, 2952.5, 3013.2, 3043, 3043, 1334.4, 1284.5, 1264.3, 1304.8, 3006.1], image: 'shrub2', name: ''},
		{x: [4226.7, 5062.2, 5062.2, 5321.7, 5321.7, 2181.1, 2181.1, 2181.1, 2181.1, 2435.6, 2435.6, 2435.6, 2436.4, 2758.5, 2758.5, 2758.5, 2758.5, 2758.5, 2468.5, 2468.5, 2468.5, 2468.5, 2475.5, 5036.6, 5036.6, 5036.6, 5036.6, 4755.4, 4755.4, 4755.4, 4755.4, 4755.4, 1689.5, 1689.5, 1674.6, 1963, 1963, 1982.6, 5332.3, 3237.6], y:[2967.8, 2964.8, 2917.5, 2917.5, 2949, 2905, 2942.6, 2972.6, 3007.1, 2906.9, 2941.4, 2968.5, 3013.1, 1360.1, 1396.8, 1427.9, 1475.9, 1517.9, 1425.1, 1453.6, 1486.6, 1519.6, 1366.8, 1414.9, 1441.2, 1478.7, 1516.2, 1393.5, 1416, 1462.6, 1503.1, 1524.1, 1892.2, 1926.6, 1959.6, 1908.5, 1933.9, 1966.5, 2999.9, 2911.5], image: 'shrub1', name: ''}, //SIDES of entrance OTHER than central building
		{x: [3388, 5590.1, 3235.4, 4283.8, 3222.6, 3254.9, 3700.9], y:[3067, 2982.9, 3018.4, 2773.7, 2767.9, 2929.6, 3506.9], image: 'shrub2', name: ''}, //part2!
		{x: [5059.5, 4145.4, 3585.6, 2678.5, 2834.1, 2834.1, 3593.4, 3238.5, 3968.5, 3529, 3551.1, 3994.2, 5551.8, 5504.5, 5478.7, 5548.9, 5357.8], y:[2994.1, 3261.6, 3073, 3018.7, 2908.6, 2874.1, 3211.3, 2992.9, 4399.3, 4399.3, 4345.2, 4450.7, 3442.5, 3471.8, 3528.9, 3494.6, 3032.7], image: 'shrub1', name: ''},



		{x: [ 4750, 3330, 4297.7, 2845.4], y: [ 3050, 2430.5, 964.4, 1669.5], image: 'benchFlip', name: ''},
		{x: [5858.3], y: [2891.8], image: 'tent2light', name: ''},
		{x: [3620.6, 3890.1, 4054.6, 3472.6,  2717.4, 4987.5], y: [893, 893, 943.6, 943.6, 1366.4, 1362.7], image: 'flowerPot', name: ''},
		{x: [2228.6, 2811.2, 3263, 4238.2, 5018.6, 4952.9, 2554.2, 2476.6, 4691.2, 4560.9, 2385.6], y: [1873.4, 2539.8, 2542.3, 2537.2, 3072.6, 2221.9, 2206.9, 3065.1, 2539.7, 1423.3, 1460.6], image: 'flowerPot', name: ''},

	{x: [1], y: [1], image: 'archaeologistBrush1', name: ''},
	{x: [1], y: [1], image: 'archaeologistBrush2', name: ''},


{x: [3953.7, 3660.8, 3894.4, 3476, 3518.7], y: [1431.3, 1628.2, 1823.7, 1797.2, 1434.1], image: 'lanternCave', name: ''},
{x: [2525.4, 4979.8], y: [3176.6, 3176.6], image: 'marketStall2', name: ''},
{x: [6025.6], y: [2003.4], image: 'freeItemBox', name: ''},
{x: [6025.6], y: [2003.4], image: 'freeItemBoxValentines2024', name: ''},
		{x: 7126.9, y: 2021.4, image: 'cauldronEaglecrest', name: ''},
		{x: 6539.9, y: 2039.2, image: 'anvil', name: ''},
		{x: 3747.5, y: 1600, z: -2, image: 'eaglecrestStatue', name: 'Eaglecrest Statue'},
		{x: 3747.5, y: 1144.9, z: 2, image: 'eaglecrestStatueHead', name: 'Eaglecrest Statue'},
		{x: 8306.1, y: 1658.7, image: 'gargoyleLeft', name: 'Monastery Gargoyle', orderOffsetY: 100,},
		{x: 10474.3, y: 1581.6, image: 'gargoyleRight', name: 'Monastery Gargoyle', orderOffsetY: 100,},
		{x: [8941.2, 9427.7, 9842, 10055.4, 9689.7], y: [2755.6, 3060.4, 2800, 2315.6, 2514.1,], image: 'gravestone1', name: 'Gravestone'},
		{x: [9394.4, 10325.8, 10324.7, 9238,], y: [2735.1, 2167.8, 3069.1, 2045.4,], image: 'gravestone2', name: 'Gravestone'},
		{x: [9854.3, 10177.2, 9997, 10304.1, 9093.2, 9913.1, 8576.9, ], y: [3114.7, 2768, 2592.6, 2531.2, 3021.7, 2068, 2556.7,], image: 'gravestone3', name: 'Gravestone'},
		{x: [4023, 2308, 5192, 4501, 3001, 1828, 2392, 3159, 4355, 5108, 5668, 4858, 2642, 3424], y: [3088, 2754, 2755, 2119, 2119, 1505, 1293, 4024, 4024, 1302, 1735, 3192, 3192, 3375], image: 'buntingEaglecrest2', name: 'buntingEaglecrest2'},
		{x: [3409.3, 4162.9, 4196.9], y: [4056.7, 2904.1, 3322.6], image: 'buntingEaglecrest3', name: 'buntingEaglecrest3'},
		{x: [4092.8, 3769.1, 1864.6, 2443.1], y: [4056.7, 2544, 1712.2, 2857], image: 'buntingEaglecrest4', name: 'buntingEaglecrest4'},
		{x: [3061.8, 3022.1, 4494.7, 4443.1, 3756.6, 3747.5], y: [2743.4, 2847.8, 2856.2, 2730.6, 2810, 4266.1], z: 1, image: 'buntingEaglecrest', name: 'buntingEaglecrest',
			crop: {
				x: 0,
				y: 0,
				width: 480,
				height: 120
		},
			animation: {
				type: "spritesheet",
				frameTime: 1000,
				imagesPerRow: 2,
				totalImages: 2,
			},
		},
	 {x: [5191.5], y: [2560.4], z: 1, image: 'buntingEaglecrestTinkerers', name: 'buntingEaglecrestTinkerers',
		crop: {
			x: 0,
			y: 0,
			width: 480,
			height: 120
				},
		animation: {
			type: "spritesheet",
			frameTime: 1000,
			imagesPerRow: 2,
			totalImages: 2,
		},
	},

	{x: [4967.3, 5052.8], y: [2619, 2721.5], z:-1, image: 'gearSteel', name: 'gearSteel',
	crop: {
		x: 0,
		y: 0,
		width: 202.5,
		height: 202.5
	},
	animation: {
		type: "spritesheet",
		frameTime: 350,
		imagesPerRow: 2,
		totalImages: 2,
	},
},
{x: [5520.1, 4818.1, 5305.4], y: [2760.2, 2569.5, 2241], image: 'tinkererChimney', name: 'tinkererChimney',
crop: {
	x: 0,
	y: 0,
	width: 140,
	height: 140
},
animation: {
	type: "spritesheet",
	frameTime: 200,
	imagesPerRow: 3,
	totalImages: 3,
},
},

{x: [4880.2, 5031.2, 5377.6], y: [2748.7, 2395.8, 2635.2], image: 'siren', name: 'siren',
crop: {
	x: 0,
	y: 0,
	width: 24,
	height: 24
},
animation: {
	type: "spritesheet",
	frameTime: 200,
	imagesPerRow: 2,
	totalImages: 2,
},
},

{x: [ 5052.8, 4953.3], y: [ 2721.5, 2717.2], image: 'gearRust', name: 'gearRust',
crop: {
	x: 0,
	y: 0,
	width: 68,
	height: 68
},
animation: {
	type: "spritesheet",
	frameTime: 150,
	imagesPerRow: 2,
	totalImages: 2,
},
},

		{x: [2763.1, 2606.7, 1318.9, 4898, 6131.9, 2304.2, 691.6, 4684.9, 2693.5, 6805.9, 7972.8, 6477.6, 3750, 3748.2], y: [1242.4, 893, 1715.1, 883.7, 1725.9, 2558.5, 2863.1, 4305, 4185.2, 2873.8, 3894.1, 395.1, 180.5, 4015], z: 1, image: 'buntingEaglecrest', name: 'buntingEaglecrest',
		crop: {
			x: 0,
			y: 0,
			width: 480,
			height: 120
		},
		animation: {
			type: "spritesheet",
			frameTime: 1000,
			imagesPerRow: 2,
			totalImages: 2,
		},},
		{
			x: 8203.8,
			y: 1769.8,
			image: "gargoyleWaterLeft1",
			name: "Gargoyle Water",
			animation: {
				type: "carousel",
				frameTime: 200,
				images: ["gargoyleWaterLeft1", "gargoyleWaterLeft2", "gargoyleWaterLeft3"],
			},
			canBeShown: function () {
				return Weather.weatherType === "rain";
			},
		},
		{
			x: 3748,
			y: 3540,
			image: "fountain1",
			name: "Fountain",
			animation: {
				type: "carousel",
				frameTime: 200,
				images: ["fountain1", "fountain2", "fountain3", "fountain4"],
			},
		},







		{x: [2360.1, 5147, 1450.7, 6226.1], y:[1620, 1620, 1871.4, 1891.1], image: 'hayWagon', name: 'hayWagon'},
				{x: [6380, 6001, 5841, 6531, 7827, 8638, 9065, 9821, 10369, 9503, 8440, 7501, 6435, 7404, 8417, 9431, 10453, 5565, 5325], y:[3997, 4043, 4357, 4702, 4685, 4680, 4680, 4680, 4680, 4126, 4070, 4098, 548, 535, 527, 524, 524, 3316, 3516], image: 'hayWagon', name: 'hayWagon'},

		{x: [2070.6, 2309.3, 2267.9, 2174, 2133.5, 3029.5, 3078.6, 2128.2, 1423.1, 1461.2, 1670.6, 1720.1, 3553.6, 3608.8, 3833.2, 3892.4, 3506.2,  5363.9, 5339.4, 5282.9, 5329.5, 5489.9, 5916.3, 6083, 6052.1, 4177.8, 2769.2, 2737.8, 1880.6, 3296.4, 3331.4, 4755.8, 4734.2, 5607.2, 6155.7, 5860, 5806], y: [1885.9, 1403.2, 1358.8, 1263.3, 1215.4, 1281.9, 1238.8, 1868.8, 1694.5, 1722.1, 1887.2, 1887.2, 1349.3, 1349, 1531.6, 1531.6, 1712.4,  1201.2, 1252.7, 1803.2, 1843.8, 1899.2, 1892.8, 1750.3, 1794.6, 3010.1, 2851.5, 2896.1, 2906.7, 2986.5, 3014, 2922, 2885.2, 2895.2, 2738.3, 2621.2, 2621.2], image: 'barrel', orderOffsetY: -6, name: 'barrel'},
		{x: 75.8, y: 281.2, image: 'gingerbreadHouse', name: 'Gingerbread House', canBeShown: function (){return Event.event === "Christmas"}},
		{x: 718.9, y: 818.2, image: 'gingerbreadHouse', name: 'Gingerbread House', canBeShown: function (){return Event.event === "Christmas"}},
		{x: 1295.2, y: 1671.8, image: 'gingerbreadHouse', name: 'Gingerbread House', canBeShown: function (){return Event.event === "Christmas"}},

		{
			x: 2103.1,
			y: 3419.3,
			orderOffsetY: -20,
			image: "cart2",
		},
		{
			x: 1927.9,
			y: 3215.7,
			orderOffsetY: -20,
			image: "cart3",
		},
		{
			x: 2452.1,
			y: 3490.2,
			orderOffsetY: -20,
			image: "cart1",
		},

		// border lampposts
		{
			x: [2920.3, 4584.3, 5038.7, 5261.7,  5068.8, 4672.4, 4751.3, 2184, 2491.6, 2858.3, 2404.2, 5490.7, 3302.3, 4195.1, 2753.5, 5776.2, 6334.5, 6648.3, 5526.9, 5888.1, 6416.8, 2784, 1658.9, 1302.6, 1010, 4360.8, 3144.4, 3567.6, 3929],
			y: [1888.2, 1888.2, 1732.8, 1895.9,  3166.4, 3166.4, 2229.5, 1955.3, 1807.1, 3170.2, 3170.2, 3043.7, 3586.1, 3586.1, 2218.5, 3211.1, 2995.9, 3213.9, 2131.8, 1965.8, 2183.1,  1463.3, 2137.7, 1954.7, 2183, 2029.3, 2029.3, 3297.8, 3297.8],
			imageDay: "eaglecrestLampDay",
			imageNight: "eaglecrestLampNight",
			name: "Eaglecrest Lamp",
			lightEmit: {onlyAtNight: true},
		},

		{
			x: 4620,
			y: 1320,
			image: "closedSign",
			name: "Closed Notice",
			canBeShown: function () {
				return !Player.quests.completedQuestArray.includes("Overdraft");
			},
		},
		{x: 1209, y: 1885, image: 'marketStall', name: 'Billie the Beetroot Merchant', showNameTag: true},

		// samhain quest
		{
			// wrong crates
			x: [8499.3, 9290.7, 9889.1, 10471.7, 10328.9, 10295.9, 9742.2, 8617.5, 8922.4, 9414.7, 9656.4],
			y: [1929.1, 2060.4, 2065.8, 1687.1, 2525.7, 3070.9, 3239.3, 2552.8, 2753.3, 3023.7, 2473.1],
			orderOffsetY: -10,
			image: "crateSamhain",
			onInteract: function () {
				Game.hero.channel(function () {
					let ghostShown = Random(0,1);
					if (ghostShown === 1) {
						let imageNumber = Random(1,2);
						Game.enemies.push(new Enemy(Game.prepareNPC({
							x: Game.hero.x + Random(-250, 250),
							y: Game.hero.y + Random(-250, 250),
							template: EnemyTemplates.eaglecrest["phantom"+imageNumber],
						}, "enemies")));
						let lineNumber = Random(0,3);
						let textLines = ["Why do you awaken me?", "What do you want..", "Leave me alone!", "Ugh."];
						Game.enemies[Game.enemies.length-1].say(textLines[lineNumber]);
					}
					Dom.chat.insert("That crate is empty!");
				}, [], 1666, "Rummaging through crate", {cancelChannelOnDamage: true});
			},
			canBeShown: function () {
				return Player.quests.completedQuestArray.includes("Snakes and the City") && Event.event === "Samhain";
			}
		},
		{
			// correct crate
			x: 10161.3,
			y: 2759.5,
			orderOffsetY: -10,
			image: "crateSamhain",
			onInteract: function () {
				if (!Player.quests.questProgress.graveyardCrateGhosts) { // reset each time the area is left
					Game.enemies.push(new Enemy(Game.prepareNPC({
						x: 10301.3,
						y: 2759.5,
						template: EnemyTemplates.eaglecrest.phantom2,
					}, "enemies")));
					Game.enemies.push(new Enemy(Game.prepareNPC({
						x: 10001.3,
						y: 2759.5,
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
							Dom.quests.active()
						}
					}
					else {
						Dom.chat.insert("You have already looted that crate!");
					}
				}, [], 1666, "Rummaging through crate", {cancelChannelOnDamage: true});
			},
			canBeShown: function () {
				return Player.quests.completedQuestArray.includes("Snakes and the City") && Event.event === "Samhain";
			}
		},
	],

	onRainStart: function () {
		// add water from gargoyle in 10 seconds
		Game.setTimeout(function () {
			// check area is still the same
			if (Game.areaName === "eaglecrest") {
				// add them
				let npcToPrepare = Areas.eaglecrest.things.find(thing => thing.name === "Gargoyle Water");
				let preparedNPC = Game.prepareNPC(npcToPrepare, "things");
				if (preparedNPC) {
					Game.things.push(new Thing(preparedNPC));
				}
			}
		}, 10000);
	},

	onRainStop: function () {
		// remove water from gargoyles in 10 seconds
		Game.setTimeout(function () {
			// check area is still the same
			if (Game.areaName === "eaglecrest") {
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
		lootTier: 1,

		isIcy: function() {
			return Event.event === "Christmas";
		},

		mapData: {
			cols: 31,
			rows: 12,
			tsize: 60,
			tilesPerRow: 8,
			solidTiles: [1, 2, 3, 6, 7, 9, 10, 11, 13, 15, 17, 18, 19, 20, 21, 23, 25, 26, 27, 28, 29, 31, 33, 34, 35, 36, 37, 38, 39, 42, 43, 44, 45, 46, 47, 53, 55, 61, 65, 69, 73, 77, 82, 83],
			dayTiles: [11, 27, 34, 42, 7, 417], // windows and lights
			nightTiles: [3, 19, 2, 18, 15, 418],
			pathTiles: [5, 12, 41, 50, 51, 57, 58, 59, 60, 76],
			layers: [
				[43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 43, 43, 43, 11, 43, 43, 43, 43, 20, 43, 43, 43, 43, 11, 43, 9, 43, 11, 43, 43, 43, 43, 25, 43, 43, 43, 43, 11, 43, 43, 43, 43, 43, 43, 43, 43, 43, 27, 43, 42, 43, 27, 43, 43, 43, 43, 43, 43, 43, 43, 43, 27, 43, 34, 43, 27, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 26, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 10, 43, 43, 43, 43, 43, 43, 43, 43, 41, 59, 49, 49, 49, 49, 49, 57, 41, 59, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 57, 41, 59, 49, 49, 49, 49, 49, 57, 41, 41, 60, 68, 49, 49, 49, 4, 12, 41, 60, 68, 49, 49, 49, 49, 49, 49, 49, 49, 49, 4, 12, 41, 60, 68, 49, 49, 49, 4, 12, 41, 41, 41, 76, 58, 58, 58, 5, 41, 41, 41, 76, 58, 58, 58, 58, 58, 58, 58, 58, 58, 5, 41, 41, 41, 76, 58, 58, 58, 5, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41],
			],
			animateTiles: [{
				// christmas lights on walls!
				tiles: [350, 356, 351, 359, 352, 360],
				animateTime: 600,
				animateCondition: function () {return Event.event === "Christmas"}
			}],
		},

		images: {
			tiles: {normal: "assets/tilemap/eaglecrest.png", christmas: "assets/tilemap/eaglecrestChristmas.png"},
			maskSalesman: {normal: "assets/npcs/maskSalesman.png"},
			yellowSnakeRight: {samhain: "assets/enemies/yellowSnake.png"},
			yellowSnakeLeft: {samhain: "assets/enemies/yellowSnake.png", flip: "vertical"},
			catBowlEmpty: {normal: "assets/objects/catBowlEmpty.png"},
			catBowlFull: {normal: "assets/objects/catBowlFull.png"},
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

		things: [
			{x: 360, y: 297, orderOffsetY: -6, image: 'catBowlEmpty', name: 'Cat Bowl'},
		],

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
						role: "function",
						chooseText: "Here are 5 Wispy Feathers",
						onClick: function () {
							if (Dom.inventory.check(37, "item", 5)) {
                                Dom.inventory.removeById(37, "item", 5);
								Dom.inventory.give(Items.item[38]);
                                Player.quests.questProgress.westCrate = true;
                                Dom.text.page("Mask Salesman", "You have my feathers? Great. These will prove rather helpful.<br><br>I know what you're doing with these Crystals. All I can say, is make sure I get my cut of Marks once the blood has risen from the depths. <b><i>I insist</i></b>.", true, [], [], [{item: Items.item[38]}]);
                            }
						},
						forceChoose: true, // forces choose dom
						roleRequirement: function () {
							if (!Dom.inventory.requiredSpace([{item: Items.item[38]}])) {
								Dom.chat.insert(Dom.chat.say("Mask Salesman", "You don't have enough space in your bags for the Crystal."));
								return false;
							}
							return !Player.quests.questProgress.westCrate && Player.quests.activeQuestArray.includes("Moving Like a Snake") && Dom.inventory.check(37, "item", 5);
						}
					},
					{
						role: "text",
						chooseText: "Have you seen a mysterious crate nearby?",
						chat: `Yes I have. And it had a rather nice <b>Blood-Red Crystal</b> in it.<br><br>
						Oh, you want the crystal? That's a shame isn't it.<br><br>
						I suppose there is something you could do.... I need fresh resources for my masks. Bring me <b>5 Wispy Feathers</b> from the <b>Chickens</b> in the <b>Plains</b>. And then I will <i>consider</i> parting with the crystal.`,
						showCloseButton: false,
						buttons: ["Close"],
						functions: [function () {
							// close page
							Dom.closePage("textPage");
							// quest progress
							Player.quests.npcProgress.eaglecrest[5] = true;
							Dom.quests.active();
						}],
						forceChoose: true, // forces choose dom
						roleRequirement: function () {
							return !Player.quests.questProgress.westCrate && Player.quests.activeQuestArray.includes("Moving Like a Snake") && !Dom.inventory.check(37, "item", 5);
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
						chooseText: "Do you have anything special you're selling today?",
						shopGreeting: "You'd <em>love</em> to hear how I made this mask.",
						roleRequirement: function () {
							return Event.event === "Valentine";
						},
					},
					{
						sold: [
							{item: Items.helm[34], cost: 10, costCurrency: 5}, // mechanical santa mask
						],
						role: "merchant",
						chooseText: "What have you got to sell this Christmas?",
						shopGreeting: "Who says the Christmas season can't have a bit of horror?",
						roleRequirement: function () {
							return Event.event === "Christmas";
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
		lootTier: 1,

		isIcy: function() {
			return Event.event === "Christmas";
		},

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
			],
			animateTiles: [{
				// christmas lights on walls!
				tiles: [350, 356, 351, 359, 352, 360],
				animateTime: 600,
				animateCondition: function () {return Event.event === "Christmas"}
			}],
		},

		images: {
			tiles: {normal: "assets/tilemap/eaglecrest.png", christmas: "assets/tilemap/eaglecrestChristmas.png"},
			itemBuyer: {normal: "assets/npcs/nhkghghh.png"},
			cart: {normal: "assets/objects/cartEaglecrest3.png", christmas: "assets/objects/cartEaglecrestChristmas3.png"},
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
		lootTier: 1,

		mapData: {
			cols: 17,
			rows: 15,
			tsize: 60,
			tilesPerRow: 8,
			solidTiles: [1, 2, 3, 6, 7, 9, 10, 11, 13, 15, 17, 18, 19, 20, 21, 23, 25, 26, 27, 28, 29, 31, 33, 34, 35, 36, 37, 38, 39, 42, 43, 44, 45, 46, 47, 53, 55, 61, 65, 69, 73, 77, 82, 83],
			pathTiles: [5, 12, 41, 50, 51, 57, 58, 59, 60, 76],
			layers: [
				[6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 38, 38, 6, 6, 38, 38, 6, 6, 6, 38, 38, 6, 6, 38, 38, 6, 6, 38, 38, 6, 6, 38, 38, 6, 6, 6, 38, 38, 6, 6, 38, 38, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 14, 22, 14, 22, 14, 22, 14, 22, 14, 22, 14, 22, 14, 22, 14, 22, 14, 22, 14, 22, 14, 22, 14, 22, 14, 22, 14, 22, 14, 22, 14, 22, 14, 22, 30, 30, 30, 30, 30, 30, 14, 22, 14, 22, 14, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 14, 22, 14, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 22, 14, 22, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 14, 22, 14, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 22, 14, 22, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 14, 22, 14, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 22, 14, 22, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 14, 22, 14, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 14, 22, 14, 22, 14, 30, 30, 30, 30, 30, 30],
				[350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			],
			animateTiles: [{
				// christmas lights on walls!
				tiles: [350, 356, 351, 359, 352, 360],
				animateTime: 600,
				animateCondition: function () {return Event.event === "Christmas"}
			}],
		},

		images: {
			tiles: {normal: "assets/tilemap/eaglecrest.png", christmas: "assets/tilemap/eaglecrestChristmas.png"},
			banker1: {normal: "assets/npcs/eaglecrestBanker.png"},
			banker2: {normal: "assets/npcs/eaglecrestBanker2.png"},
			banker3: {normal: "assets/npcs/eaglecrestBanker3.png"},
			banker4: {normal: "assets/npcs/eaglecrestBanker4.png"},
			yellowSnakeRight: {samhain: "assets/enemies/yellowSnake.png"},
			yellowSnakeLeft: {samhain: "assets/enemies/yellowSnake.png", flip: "vertical"},
			//constellation1: {normal: "assets/objects/constellation1.png",},
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
			//if (Player.quests.activeQuestArray.includes("Overdraft") && Player.quests.npcProgress.eaglecrest[2] === 0) {
			//	Dom.chat.insert(Dom.chat.say("Head Banker Jonos", "Uhhh can't you see we're closed?"));
			//}
		},

		/*things: [
			{
				x: [249.8, 333.4, 553.7, 870.2, 777.1, 574.7, 116.5, 502.6],
				y: [337.5, 95.2, 138.8, 333.3, 743.1, 541.9, 766.6, 422.2],
				z: 1,
				image: "constellation1",
				name: "Constellation",
				speed: 70,
				rotateSpeed: 10,
				transparency: 0.7,
				moveTowardsLoopStartIndex: "random",
				moveTowardsLoop: [
					{x: 485, y: 459.4, image: 'rootedStatusImage', name: 'default'},
					{x: 269.6, y: 495.2, image: 'rootedStatusImage', name: 'default'},
					{x: 170.3, y: 628.4, image: 'rootedStatusImage', name: 'default'},
					{x: 240.1, y: 744.7, image: 'rootedStatusImage', name: 'default'},
					{x: 374.8, y: 786.3, image: 'rootedStatusImage', name: 'default'},
					{x: 519.1, y: 725.3, image: 'rootedStatusImage', name: 'default'},
					{x: 580.1, y: 556.5, image: 'rootedStatusImage', name: 'default'},
					{x: 407.7, y: 293.6, image: 'rootedStatusImage', name: 'default'},
					{x: 341.5, y: 158.8, image: 'rootedStatusImage', name: 'default'},
					{x: 437.3, y: 50.8, image: 'rootedStatusImage', name: 'default'},
					{x: 606.6, y: 19.4, image: 'rootedStatusImage', name: 'default'},
					{x: 688.4, y: 101.3, image: 'rootedStatusImage', name: 'default'},
					{x: 758.1, y: 220, image: 'rootedStatusImage', name: 'default'},
					{x: 751.1, y: 359.4, image: 'rootedStatusImage', name: 'default'},
					{x: 546.6, y: 429, image: 'rootedStatusImage', name: 'default'},
					{x: 611.9, y: 614.8, image: 'rootedStatusImage', name: 'default'},
					{x: 757.6, y: 716.4, image: 'rootedStatusImage', name: 'default'},
					{x: 924.2, y: 699.1, image: 'rootedStatusImage', name: 'default'},
					{x: 950.3, y: 545.8, image: 'rootedStatusImage', name: 'default'},
					{x: 777.5, y: 446.6, image: 'rootedStatusImage', name: 'default'},
					{x: 591.3, y: 410, image: 'rootedStatusImage', name: 'default'},
					{x: 331.6, y: 361.2, image: 'rootedStatusImage', name: 'default'},
					{x: 151.4, y: 328.2, image: 'rootedStatusImage', name: 'default'},
					{x: 99.2, y: 222, image: 'rootedStatusImage', name: 'default'},
					{x: 85.2, y: 104.8, image: 'rootedStatusImage', name: 'default'},
					{x: 199.2, y: 59.5, image: 'rootedStatusImage', name: 'default'},
					{x: 317.4, y: 56, image: 'rootedStatusImage', name: 'default'},
					{x: 451.3, y: 106.5, image: 'rootedStatusImage', name: 'default'},
					{x: 575.6, y: 174.4, image: 'rootedStatusImage', name: 'default'},
					{x: 648.7, y: 286.8, image: 'rootedStatusImage', name: 'default'},
					{x: 554.7, y: 402.9, image: 'rootedStatusImage', name: 'default'},
				]
			},
		],*/

		areaTeleports: [
			{
				// teleport to eaglecrest plaza
				x: 510,
				y: 949,
				width: 240,
				height: 2,
				teleportTo: "eaglecrest",
				destinationX: 4888.2,
				destinationY: 1395.8,
			},
		],

		villagerData: {
			minPeople: 0,
			maxPeople: Player.quests.completedQuestArray.includes("Overdraft") ? 4 : 0,
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
					{
						role: "function",
						chooseText: "I would like to exchange previous event currency for gold.", // only possible when the related event isn't active
						onClick: function () {
							let currencyToExchange = [];
							let totalGoldEarnt = 0;
							let samhainMarks = Dom.inventory.count(4, "currency");
							if (Event.event !== "Samhain" && samhainMarks > 0) {
								currencyToExchange.push({id: 5, name: "Samhain Mark", number: samhainMarks});
								totalGoldEarnt += samhainMarks*1;
							}
							let christmasTokens = Dom.inventory.count(5, "currency");
							if (Event.event !== "Christmas" && christmasTokens > 0) {
								currencyToExchange.push({id: 5, name: "Christmas Token", number: christmasTokens});
								totalGoldEarnt += christmasTokens*1;
							}

							let npcText = "It looks like you have ";
							for (let i = 0; i < currencyToExchange.length; i++) {
								npcText += currencyToExchange[i].number + " " + currencyToExchange[i].name;
								if (currencyToExchange[i].number > 1) {
									npcText += "s";
								}
								if (i < currencyToExchange.length-2) { // not the last or penultimate
									npcText += ", ";
								}
								else if (i === currencyToExchange.length-2) { // the penultimate
									npcText += " and ";
								}
							}

							npcText += " from events that have finished.<br><br>If you'd like, we can exchange these for " + totalGoldEarnt + " Gold. Or alternatively, you can hold on to them to use next year.";

							Dom.text.page("Eaglecrest Banker", npcText, false, ["Exchange for "+totalGoldEarnt+" Gold", "Don't exchange"], [
								function () {
									Dom.inventory.give(Items.currency[2], totalGoldEarnt);
									if (Event.event !== "Samhain") {
										Dom.inventory.removeById(4, "currency", true);
									}
									if (Event.event !== "Christmas") {
										Dom.inventory.removeById(5, "currency", true);
									}
									Dom.closePage("textPage");
								},
								function () {
									Dom.closePage("textPage");
								}
							]);
						},
						roleRequirement: function () {
							return (Dom.inventory.check(4, "currency") && Event.event !== "Samhain") || (Dom.inventory.check(5, "currency") && Event.event !== "Christmas"); // paste over, remove the item
						},
					},
					{
						role: "chatBanner",
						chooseText: "Ask about a <b>translator</b>.",
						forceChoose: true,
						chat: [{
							text: `I'm afraid we don't have any. Unless you have one in your bank storage I'm afraid I can't help you.`,
						},],
						roleRequirement: function () {
							return Player.quests.prog.eaglecrest[12].stepProgress[2] && !Player.quests.prog.eaglecrest[12].stepProgress[3];
						},
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
					{
						role: "function",
						chooseText: "I would like to exchange previous event currency for gold.", // only possible when the related event isn't active
						onClick: function () {
							let currencyToExchange = [];
							let totalGoldEarnt = 0;
							let samhainMarks = Dom.inventory.count(4, "currency");
							if (Event.event !== "Samhain" && samhainMarks > 0) {
								currencyToExchange.push({id: 5, name: "Samhain Mark", number: samhainMarks});
								totalGoldEarnt += samhainMarks*1;
							}
							let christmasTokens = Dom.inventory.count(5, "currency");
							if (Event.event !== "Christmas" && christmasTokens > 0) {
								currencyToExchange.push({id: 5, name: "Christmas Token", number: christmasTokens});
								totalGoldEarnt += christmasTokens*1;
							}

							let npcText = "It looks like you have ";
							for (let i = 0; i < currencyToExchange.length; i++) {
								npcText += currencyToExchange[i].number + " " + currencyToExchange[i].name;
								if (currencyToExchange[i].number > 1) {
									npcText += "s";
								}
								if (i < currencyToExchange.length-2) { // not the last or penultimate
									npcText += ", ";
								}
								else if (i === currencyToExchange.length-2) { // the penultimate
									npcText += " and ";
								}
							}

							npcText += " from events that have finished.<br><br>If you'd like, we can exchange these for " + totalGoldEarnt + " Gold. Or alternatively, you can hold on to them to use next year.";

							Dom.text.page("Eaglecrest Banker", npcText, false, ["Exchange for "+totalGoldEarnt+" Gold", "Don't exchange"], [
								function () {
									Dom.inventory.give(Items.currency[2], totalGoldEarnt);
									if (Event.event !== "Samhain") {
										Dom.inventory.removeById(4, "currency", true);
									}
									if (Event.event !== "Christmas") {
										Dom.inventory.removeById(5, "currency", true);
									}
									Dom.closePage("textPage");
								},
								function () {
									Dom.closePage("textPage");
								}
							]);
						},
						roleRequirement: function () {
							return (Dom.inventory.check(4, "currency") && Event.event !== "Samhain") || (Dom.inventory.check(5, "currency") && Event.event !== "Christmas");
						},
					},
					{
						role: "chatBanner",
						chooseText: "Ask about a <b>translator</b>.",
						forceChoose: true,
						chat: [{
							text: `I'm afraid we don't have any. Unless you have one in your bank storage I'm afraid I can't help you.`,
						},],
						roleRequirement: function () {
							return Player.quests.prog.eaglecrest[12].stepProgress[2] && !Player.quests.prog.eaglecrest[12].stepProgress[3];
						},
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
					{
						role: "function",
						chooseText: "I would like to exchange previous event currency for gold.", // only possible when the related event isn't active
						onClick: function () {
							let currencyToExchange = [];
							let totalGoldEarnt = 0;
							let samhainMarks = Dom.inventory.count(4, "currency");
							if (Event.event !== "Samhain" && samhainMarks > 0) {
								currencyToExchange.push({id: 5, name: "Samhain Mark", number: samhainMarks});
								totalGoldEarnt += samhainMarks*1;
							}
							let christmasTokens = Dom.inventory.count(5, "currency");
							if (Event.event !== "Christmas" && christmasTokens > 0) {
								currencyToExchange.push({id: 5, name: "Christmas Token", number: christmasTokens});
								totalGoldEarnt += christmasTokens*1;
							}

							let npcText = "It looks like you have ";
							for (let i = 0; i < currencyToExchange.length; i++) {
								npcText += currencyToExchange[i].number + " " + currencyToExchange[i].name;
								if (currencyToExchange[i].number > 1) {
									npcText += "s";
								}
								if (i < currencyToExchange.length-2) { // not the last or penultimate
									npcText += ", ";
								}
								else if (i === currencyToExchange.length-2) { // the penultimate
									npcText += " and ";
								}
							}

							npcText += " from events that have finished.<br><br>If you'd like, we can exchange these for " + totalGoldEarnt + " Gold. Or alternatively, you can hold on to them to use next year.";

							Dom.text.page("Eaglecrest Banker", npcText, false, ["Exchange for "+totalGoldEarnt+" Gold", "Don't exchange"], [
								function () {
									Dom.inventory.give(Items.currency[2], totalGoldEarnt);
									if (Event.event !== "Samhain") {
										Dom.inventory.removeById(4, "currency", true);
									}
									if (Event.event !== "Christmas") {
										Dom.inventory.removeById(5, "currency", true);
									}
									Dom.closePage("textPage");
								},
								function () {
									Dom.closePage("textPage");
								}
							]);
						},
						roleRequirement: function () {
							return (Dom.inventory.check(4, "currency") && Event.event !== "Samhain") || (Dom.inventory.check(5, "currency") && Event.event !== "Christmas");
						},
					},
					{
						role: "chatBanner",
						chooseText: "Ask about a <b>translator</b>.",
						forceChoose: true,
						chat: [{
							text: `I'm afraid we don't have any. Unless you have one in your bank storage I'm afraid I can't help you.`,
						},],
						roleRequirement: function () {
							return Player.quests.prog.eaglecrest[12].stepProgress[2] && !Player.quests.prog.eaglecrest[12].stepProgress[3];
						},
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
					{
						role: "function",
						chooseText: "I would like to exchange previous event currency for gold.", // only possible when the related event isn't active
						onClick: function () {
							let currencyToExchange = [];
							let totalGoldEarnt = 0;
							let samhainMarks = Dom.inventory.count(4, "currency");
							if (Event.event !== "Samhain" && samhainMarks > 0) {
								currencyToExchange.push({id: 5, name: "Samhain Mark", number: samhainMarks});
								totalGoldEarnt += samhainMarks*1;
							}
							let christmasTokens = Dom.inventory.count(5, "currency");
							if (Event.event !== "Christmas" && christmasTokens > 0) {
								currencyToExchange.push({id: 5, name: "Christmas Token", number: christmasTokens});
								totalGoldEarnt += christmasTokens*1;
							}

							let npcText = "It looks like you have ";
							for (let i = 0; i < currencyToExchange.length; i++) {
								npcText += currencyToExchange[i].number + " " + currencyToExchange[i].name;
								if (currencyToExchange[i].number > 1) {
									npcText += "s";
								}
								if (i < currencyToExchange.length-2) { // not the last or penultimate
									npcText += ", ";
								}
								else if (i === currencyToExchange.length-2) { // the penultimate
									npcText += " and ";
								}
							}

							npcText += " from events that have finished.<br><br>If you'd like, we can exchange these for " + totalGoldEarnt + " Gold. Or alternatively, you can hold on to them to use next year.";

							Dom.text.page("Eaglecrest Banker", npcText, false, ["Exchange for "+totalGoldEarnt+" Gold", "Don't exchange"], [
								function () {
									Dom.inventory.give(Items.currency[2], totalGoldEarnt);
									if (Event.event !== "Samhain") {
										Dom.inventory.removeById(4, "currency", true);
									}
									if (Event.event !== "Christmas") {
										Dom.inventory.removeById(5, "currency", true);
									}
									Dom.closePage("textPage");
								},
								function () {
									Dom.closePage("textPage");
								}
							]);
						},
						roleRequirement: function () {
							return (Dom.inventory.check(4, "currency") && Event.event !== "Samhain") || (Dom.inventory.check(5, "currency") && Event.event !== "Christmas");
						},
					},
					{
						role: "chatBanner",
						chooseText: "Ask about a <b>translator</b>.",
						forceChoose: true,
						chat: [{
							text: `I'm afraid we don't have any. Unless you have one in your bank storage I'm afraid I can't help you.`,
						},],
						roleRequirement: function () {
							return Player.quests.prog.eaglecrest[12].stepProgress[2] && !Player.quests.prog.eaglecrest[12].stepProgress[3];
						},
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
						chat: `Look, what are you doing in here? Don't make me call the guards on you.<br><br>
						Oh Sylvie sent you to help? Well why didn't you say! Well sorry for the rude introduction, let's try that again.<br><br>
						I'm <b>Head Banker Jonos</b>, and I'm responsible for this mess of a situation! The bank has had to close due to . . . well . . . we lent someone <b>all</b> of our Gold in error. So we had no choice but to close until we get it back. Don't go around telling people! My job is on the line here! If people found out . . .<br><br>
						Do I know who we lent the Gold to? Well if I did then you wouldn't be here would you? I need to you help look around the City for whoever has all our Gold, and send them back here.<br><br>
						What do you mean you're new to the City? Why did Sylvie send you here then? Ugh, well a good place to start would be asking <b>Shopkeeper Barda</b> in <b>The Eaglecrest Bazaar</b> to the <b>west</b> of here. Her local knowledge is admittedly better than mine. And much better than yours from the sounds of it ! !`,
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
						chat: `Oh thank the Pantheon! I cannot thank you enough. So your local knowledge can't be too bad then!<br><br>
						Look, whilst you're here, how about we show you how the bank works?`,
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
							Dom.chat.insert(Dom.chat.say("Head Banker Jonos", "Here's an <b>Eaglecrest Bag</b>. Head over to the banker at the counter and speak to them about storing your items!")); // no repeat
						}],
						roleRequirement: function () {
							if (!Dom.inventory.requiredSpace([{item: Items.bag[6]}])) {
								Dom.chat.insert(Dom.chat.say("Head Banker Jonos", "Free up some space in your inventory then we can discuss!"), undefined, undefined, true); // no repeat
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
					notUnlockedRoles: "I'm trying my hardest here! Stuff just keeps going wrong.",
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
					notUnlockedRoles: "Busy, busy, busy, busy, busy, oh sorry didn't see you there! Don't let me get in your way.",
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
					notUnlockedRoles: "Why does Jonos speak like that?",
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

		lootArea: "eaglecrest",
		lootTier: 1, // for level up music

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
			animateTiles: [{
				// christmas lights on walls!
				tiles: [350, 356, 351, 359, 352, 360],
				animateTime: 600,
				animateCondition: function () {return Event.event === "Christmas"}
			}],
		},

		images: {
			tiles: {normal: "assets/tilemap/eaglecrest.png", christmas: "assets/tilemap/eaglecrestChristmas.png"},
			innkeeper: {normal: "assets/npcs/rhus-jak.png"},
			stairsRight: {normal: "assets/objects/stairsRight.png"},
			stairsLeft: {normal: "assets/objects/stairsLeft.png"},
			gameBoard1: {normal: "assets/objects/gameBoard1.png"},
			gameBoard2: {normal: "assets/objects/gameBoard2.png"},
			hearth1: {normal: "assets/objects/hearth1.png", christmas: "assets/objects/hearth1Christmas.png"},
			hearth2: {normal: "assets/objects/hearth2.png", christmas: "assets/objects/hearth2Christmas.png"},
			hearth3: {normal: "assets/objects/hearth3.png", christmas: "assets/objects/hearth3Christmas.png"},
			dirt: {normal: "assets/enemies/dirt.png"},
			mug: {normal: "assets/items/item/25.png"},
			plate: {normal: "assets/items/item/26.png"},
			table: {normal: "assets/objects/table.png"},
			largeTable: {normal: "assets/objects/largeTable.png"},
			barrel: {normal: "assets/objects/barrel.png", christmas: "assets/objects/barrelChristmas.png"},
			catAmelioLeft: {normal: "assets/npcs/catAmelioLeft.png"}, // for amelio
            catAmelioRight: {normal: "assets/npcs/catAmelioLeft.png", flip: "vertical"},
			yellowSnakeRight: {samhain: "assets/enemies/yellowSnake.png"},
			yellowSnakeLeft: {samhain: "assets/enemies/yellowSnake.png", flip: "vertical"},
		},

		areaTeleports: [
			{
				x: 630,
				y: 1480,
				width: 240,
				height: 2,
				teleportTo: "eaglecrest",
				destinationX: 2609.9,
				destinationY: 1401.4,
			},
			{
				x: 1235,
				y: 85,
				width: 60,
				height: 2,
				teleportTo: "samhainLair",
				destinationX: 300,
				destinationY: 1730,
				teleportCondition: function () {
					return Dom.inventory.check(36, "item"); // if they're holding skeleton key
				},
				teleportFailText: "The door appears to be locked.",
			},
		],

		onAreaJoin: function () {
			// phishing for treasure - they've opened greenbeard's letter but haven't spoken to him in the tavern yet
			if (Player.quests.prog.eaglecrest[22][0] && !Player.quests.prog.eaglecrest[22][1]) {
				let greenbeard = this.npcs.find(npc => npc.name === "Captain Greenbeard");
				Game.setTimeout(function () {
					let location = {x: Game.hero.x + 50, y: Game.hero.y - 20};
					greenbeard.displaceToLocation(location, 3, true);
					// stun hero
					Game.statusEffects.stun({
						target: Game.hero,
						effectTitle: "Greenbeard",
						time: 4,
					});
				}, 1000);
				// quest progress dialogue
				Game.setTimeout(function () {
					Dom.quest.progressFromNpc(Quests.eaglecrest[22], greenbeard, 1);
				}, 4000);
			}
		},

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
							{item: Items.food[12], cost: 0, eventRequirement: "Antorax", quest: true, unconsumable: true, removeOnAbandon: "Hungry Taverners"}, // Birthday Cake (changed every year)
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
							{item: Items.food[12], cost: 8, eventRequirement: "Antorax"}, // Birthday Cake (changed every year)
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
					{
						role: "chatBanner",
						chooseText: "Ask about a <b>translator</b>.",
						forceChoose: true,
						chat: [{
							text: `<strong>Rhus</strong>: Why would a tavern have a <b>translator</b>!<br>
							<strong>Jak</strong>: Sorry, we don't have one, try asking some of the <strong>shopkeepers</strong.`,
						},],
						roleRequirement: function () {
							return Player.quests.prog.eaglecrest[12].stepProgress[2] && !Player.quests.prog.eaglecrest[12].stepProgress[3];
						},
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
				image: { // Greenberad, for overdraft quest
					skinTone: "humanLight1",
					clothing: "greenbeard",
					hair: "greenbeard",
					hat: "pirateHat",
				},
				template: Villagers[7],
				canBeShown: function () {
					return Player.quests.activeQuestArray.includes("Overdraft"); // overwrite's villager template's canBeShown
				},
				roles: [
					{
						role: "text",
						chooseText: "Ask Greenbeard if he borrowed the money from the bank.",
						chat: `Blimey! Sink me! Sounds like a situation the bank's got themselves in.<br><br>
						Yarrr, I borrowed some doubloons from the bank earlier today. It was only <b>10,000 Gold</b>...<br><br>
						Truth be told, I needed it to give to 'em <b>Loan Sharks</b>. I got myself in a bit o' trouble with 'em...<br><br>
						Oh an' Gildo? He just wanted money for some fresh booty! What else's a pirate meant to do in the face of a citizen in need?<br><br>
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
				x: 990,
				y: 601,
				image: {
					skinTone: "humanLight1",
					clothing: "greenbeard",
					hair: "greenbeard",
					hat: "pirateHat",
				}, // Phishing for Treasure quest
				template: Villagers[7],
				canBeShown: function () {
					return Player.quests.prog.eaglecrest[22][0] && !Player.quests.prog.eaglecrest[22][1]; // they've opened greenbeard's letter but haven't spoken to him in the tavern yet
				},
				// no need to give him the quest progress role as this is triggered automatically in the onAreaJoin
			},
			/*{
				image: "catAmelioLeft",
        		rotationImages: {
            		left: "catAmelioLeft",
            		right: "catAmelioRight"
        		},
				animation: {
					type: "spritesheet",
					frameTime: 30,
					imagesPerRow: 3,
					totalImages: 3,
					animateBasis: "walk"
				},
				crop: {
					x: 3,
					y: 1,
					width: 88,
					height: 79,
				},
                name: "Amelio",
                speciesTemplate: SpeciesTemplates.cat,
			},*/
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
				animation: {
					type: "carousel",
					frameTime: 200,
					images: ["hearth1", "hearth2", "hearth3"],
				},
			},
			{
				x: 134,
				y: 125,
				z: -1,
				image: "hearth1",
				name: "Tavern Hearth",
				// animation!
				animation: {
					type: "carousel",
					frameTime: 200,
					images: ["hearth1", "hearth2", "hearth3"],
				},
			},
			{
				x: 630,
				y: 844,
				z: -1,
				image: "hearth1",
				name: "Tavern Hearth",
				// animation!
				animation: {
					type: "carousel",
					frameTime: 200,
					images: ["hearth1", "hearth2", "hearth3"],
				},
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
			{ // eagle statue speed buffs
				x: [2078.3, 5069.2, 5044.5, 7834.2, 2076, 3366, 3737.8], y: [2001.9, 2913.7, 1979.2, 1673.1, 2956.8, 2879.2, 2879.2],
				width: 400, height: 400,
				collisionType: "feet",
				onPlayerTouch: function () {

				}
			},
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
		lootTier: 1,

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
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			],
			animateTiles: [{
				// christmas lights on walls!
				tiles: [350, 356, 351, 359, 352, 360],
				animateTime: 600,
				animateCondition: function () {return Event.event === "Christmas"}
			}],
		},

		images: {
			tiles: {normal: "assets/tilemap/eaglecrest.png", christmas: "assets/tilemap/eaglecrestChristmas.png"},
			blacksmith: {normal: "assets/npcs/blacksmith.png"},
			eaglecrestianForgedSet: {normal: "assets/items/set/5.png"},
			eaglecrestianForgedBow: {normal: "assets/items/bow/11.png"},
			eaglecrestianForgedStaff: {normal: "assets/items/staff/11archaeology.png"},
			eaglecrestianForgedSword: {normal: "assets/items/sword/12.png"},
			anvil: {normal: "assets/objects/anvil.png", christmas: "assets/objects/anvilChristmas.png"},
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
				teleportTo: "eaglecrest",
				destinationX: 6627,
				destinationY: 2026,
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
					{
						role: "chatBanner",
						chooseText: "Ask about a <b>translator</b>.",
						forceChoose: true,
						chat: [{
							text: `I don't have 'un, but I do have the finest steel o' Eaglecrest! You could ask some other shopkeepers.`
						},{
							text: `<em>Oh, you're leavin' already</em>.`
						},],
						roleRequirement: function () {
							return Player.quests.prog.eaglecrest[12].stepProgress[2] && !Player.quests.prog.eaglecrest[12].stepProgress[3];
						},
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
		lootTier: 1,

		mapData: {
			cols: 13,
			rows: 14,
			tsize: 60,
			tilesPerRow: 8,
			solidTiles: [1, 2, 3, 6, 7, 9, 10, 11, 13, 15, 17, 18, 19, 20, 21, 23, 25, 26, 27, 28, 29, 31, 33, 34, 35, 36, 37, 38, 39, 42, 43, 44, 45, 46, 47, 53, 55, 61, 65, 69, 73, 77, 82, 83],
			dayTiles: [11, 27, 34, 42, 7], // windows and lights
			nightTiles: [3, 19, 2, 18, 15],
			pathTiles: [5, 12, 41, 50, 51, 57, 58, 59, 60, 76],
			/*layers: [
				[6, 6, 6, 23, 47, 31, 55, 31, 55, 39, 6, 6, 6, 6, 7, 6, 31, 55, 39, 7, 39, 23, 47, 6, 7, 6, 6, 101, 6, 39, 23, 47, 23, 47, 31, 55, 6, 6, 6, 6, 10, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 46, 46, 46, 46, 46, 46, 46, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
				[350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			],*/
			animateTiles: [{
				// christmas lights on walls!
				tiles: [350, 356, 351, 359, 352, 360],
				animateTime: 600,
				animateCondition: function () {return Event.event === "Christmas"}
			}],
		},

		images: {
			tiles: {normal: "assets/tilemap/eaglecrest.png", christmas: "assets/tilemap/eaglecrestChristmas.png"},
			tamtam: {normal: "assets/npcs/tamtam.png"},
			potionStand: {normal: "assets/objects/potionStand.png"},
			cauldronEaglecrest: {normal: "assets/objects/cauldronEaglecrest.png", christmas: "assets/objects/cauldronEaglecrestChristmas.png"},
			yellowSnakeRight: {samhain: "assets/enemies/yellowSnake.png"},
			yellowSnakeLeft: {samhain: "assets/enemies/yellowSnake.png", flip: "vertical"},
			catBowlEmpty: {normal: "assets/objects/catBowlEmpty.png"},
			catBowlFull: {normal: "assets/objects/catBowlFull.png"},
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
				// teleport to eaglecrest east side
				x: 390,
				y: 889,
				width: 240,
				height: 2,
				teleportTo: "eaglecrest",
				destinationX: 6989,
				destinationY: 2029,
			},
			{
				// teleport to storerooms
				x: 90,
				y: 145,
				width: 60,
				height: 2,
				teleportTo: "catLife",
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
				languge: ["default", "cat"],
				roles: [
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
					{
						role: "chatBanner",
						chooseText: "Ask about a <b>translator</b>.",
						forceChoose: true,
						chat: [{
							text: `Noooooo! Unfortunately I don't have one! You could ask the other <strong>shopkeepers</strong>, I'm sure one of them will have one!!`
						},],
						roleRequirement: function () {
							return Player.quests.prog.eaglecrest[12].stepProgress[2] && !Player.quests.prog.eaglecrest[12].stepProgress[3];
						},
					},
					{
						role: "questProgress",
						quest: Quests.eaglecrest[12],
						step: [4],
					},
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
							{item: Items.consumable[31], cost: 25, condition: function () { // cat potion
								return Player.quests.completedQuestArray.includes("Potion Making IV");
							}},
							{item: Items.consumable[41], cost: 3, condition: function () { // milk
								return Player.quests.completedQuestArray.includes("The Pyromancer's Shopping List");
							}},
						],
						role: "merchant",
						shopGreeting: "There's a potion for you, and you, and youuuuu!",
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
			{x: 644, y: 396, image: 'catBowlEmpty', orderOffsetY: -6, name: 'Cat Bowl'},
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
		lootTier: 1,

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
				[350, 351, 352, 350, 351, 352, 350, 351, 352, 350, 351, 352, 350, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			],
			animateTiles: [{
				// christmas lights on walls!
				tiles: [350, 356, 351, 359, 352, 360],
				animateTime: 600,
				animateCondition: function () {return Event.event === "Christmas"}
			}],
		},

		images: {
			tiles: {normal: "assets/tilemap/eaglecrest.png", christmas: "assets/tilemap/eaglecrestChristmas.png"},
			barda: {normal: "assets/npcs/barda.png"},
			wardrobeClosed: {normal: "assets/objects/wardrobeClosed.png", christmas: "assets/objects/wardrobeClosedChristmas.png"},
			wardrobeOpen1: {normal: "assets/objects/wardrobeOpen1.png"},
			wardrobeOpen2: {normal: "assets/objects/wardrobeOpen2.png"},
			crate: {normal: "assets/objects/crate.png", christmas: "assets/objects/crateChristmas.png"},
			eaglecrestBanner: {normal: "assets/objects/eaglecrestBanner.png", christmas: "assets/objects/eaglecrestBannerChristmas.png"},
			table: {normal: "assets/objects/table.png"},
			largeTable: {normal: "assets/objects/largeTable.png"},
			gargoyle: {normal: "assets/objects/gargoyle.png", christmas: "assets/objects/gargoyleChristmas.png"},
			sheepRight: {normal: "./assets/enemies/sheep.png"},
			sheepLeft: {normal: "./assets/enemies/sheep.png", flip: "vertical"},
			dummy: {normal: "assets/enemies/dummy.png", christmas: "assets/enemies/dummyChristmas.png"},
			dummyCorpse: {normal: "assets/corpses/dummy.png", christmas: "assets/corpses/dummyChristmas.png"},
			yellowSnakeRight: {samhain: "assets/enemies/yellowSnake.png"},
			yellowSnakeLeft: {samhain: "assets/enemies/yellowSnake.png", flip: "vertical"},
			eaglecrestGhost: {samhain: "assets/enemies/eaglecrestGhost.png"},
			eaglecrestGhost2: {samhain: "assets/enemies/eaglecrestGhost2.png"},
			crateSamhain: {samhain: "assets/objects/crateSamhain.png"},
			melee: {samhain: "assets/projectiles/melee.png"},
			gnome: {normal: "assets/objects/gnomeYellow.png"},
			stuffedCat: {normal: "assets/objects/stuffedCat.png"},
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
				teleportTo: "eaglecrest",
				destinationX: 689,
				destinationY: 2029,
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

		infoPoints: [
			{x: 670.5, y: 227.1, image: 'stuffedCat', name: 'Stuffed Cat', onTouchChat: "A stuffed cat."},
		],

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
						role: "questProgress",
						quest: Quests.eaglecrest[12],
						step: [3],
					},
					{
						sold: [
							{item: Items.helm[36], cost: 10, costCurrency: 5, eventRequirement: "Christmas"}, // Sprout Hat

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

							{item: Items.item[75], cost: 7}, // speedrun clock

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
				x: 706.5, y: 205.8, orderOffsetY: -100, image: 'gnome', name: 'Gnome',
				onInteract: function () {
					if (typeof User.progress.gnomesFound === "undefined") {
						User.progress.gnomesFound = [];
					}
					if (!User.progress.gnomesFound.includes("yellow")) {
						Dom.chat.insert("<i>You found a yellow gnome~")
						User.progress.gnomesFound.push("yellow");
					}
				}
			},
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
				x: 560,
				y: 170,
				image: "wardrobeOpen2",
				name: "Wardrobe"
			},
			{
				x: 60,
				y: 225,
				orderOffsetY: -10,
				image: "crate",
				name: "Crate"
			},
			{
				x: 320,
				y: 220,
				orderOffsetY: -10,
				image: "crate",
				name: "Crate"
			},
			{
				x: 670,
				y: 220,
				orderOffsetY: -10,
				image: "crate",
				name: "Crate"
			},
			{
				x: 740,
				y: 224,
				orderOffsetY: -10,
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
				y: 340,
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
				orderOffsetY: -10,
				image: "crateSamhain",
				onInteract: function () {
					if (!Player.quests.questProgress.bazaarCrateGhosts) { // reset when area is left
						Game.enemies.push(new Enemy(Game.prepareNPC({
							x: 707,
							y: 263,
							template: EnemyTemplates.eaglecrest.phantom2,
						}, "enemies")));
						Game.enemies.push(new Enemy(Game.prepareNPC({
							x: 250,
							y: 441,
							template: EnemyTemplates.eaglecrest.phantom1,
						}, "enemies")));
						Game.enemies.push(new Enemy(Game.prepareNPC({
							x: 262,
							y: 112,
							template: EnemyTemplates.eaglecrest.phantom2,
						}, "enemies")));
						Game.enemies.push(new Enemy(Game.prepareNPC({
							x: 482,
							y: 511,
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
					}, [], 1666, "Rummaging through crate", {cancelChannelOnDamage: true});
				},
                canBeShown: function () {
                    return Player.quests.completedQuestArray.includes("Snakes and the City") && Event.event === "Samhain";
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
		lootTier: 1,

		isIcy: function() {
			return Event.event === "Christmas";
		},

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
			],
			animateTiles: [{
				// christmas lights on walls!
				tiles: [350, 356, 351, 359, 352, 360],
				animateTime: 600,
				animateCondition: function () {return Event.event === "Christmas"}
			}],
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
			tiles: {normal: "assets/tilemap/eaglecrest.png", christmas: "assets/tilemap/eaglecrestChristmas.png"},
			gravestone1: {normal: "assets/objects/gravestone1.png", christmas: "assets/objects/gravestone1Christmas.png"},
			gravestone2: {normal: "assets/objects/gravestone2.png", christmas: "assets/objects/gravestone2Christmas.png"},
			gravestone3: {normal: "assets/objects/gravestone3.png", christmas: "assets/objects/gravestone3Christmas.png"},
			gargoyleLeft: {normal: "assets/objects/gargoyle.png", christmas: "assets/objects/gargoyleChristmas.png"},
			gargoyleRight: {normal: "assets/objects/gargoyle.png", christmas: "assets/objects/gargoyleChristmas.png", flip: "vertical"},
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
			catBowlEmpty: {normal: "assets/objects/catBowlEmpty.png"},
			catBowlFull: {normal: "assets/objects/catBowlFull.png"},
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
			{x: 2270, y: 530, image: 'catBowlEmpty', orderOffsetY: -6, name: 'Cat Bowl'},
			{
				// id: 0,
				x: 684,
				y: 249,
				orderOffsetY: 100,
				image: "gargoyleLeft",
				name: "Monastery Gargoyle",
			},
			{
				// id: 1,
				x: 2796,
				y: 90,
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
				animation: {
					type: "carousel",
					frameTime: 200,
					images: ["gargoyleWaterLeft1", "gargoyleWaterLeft2", "gargoyleWaterLeft3"],
				},
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
				animation: {
					type: "carousel",
					frameTime: 200,
					images: ["gargoyleWaterLeft1", "gargoyleWaterLeft2", "gargoyleWaterLeft3"],
				},
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
					}, [], 1666, "Rummaging through crate", {cancelChannelOnDamage: true});
				},
                canBeShown: function () {
                    return Player.quests.completedQuestArray.includes("Snakes and the City") && Event.event === "Samhain";
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
					}, [], 1666, "Rummaging through crate", {cancelChannelOnDamage: true});
				},
                canBeShown: function () {
                    return Player.quests.completedQuestArray.includes("Snakes and the City") && Event.event === "Samhain";
                }
			},
		],

		onRainStart: function () {
			// add water from gargoyles in 10 seconds
			Game.setTimeout(function () {
				// check area is still the same
				if (Game.areaName === "eaglecrestGraveyard") {
					// add them
					let preparedNPC = Game.prepareNPC(Areas.eaglecrestGraveyard.things[2], "things");
					if (preparedNPC) {
						Game.things.push(new Thing(preparedNPC));
					}
					preparedNPC = Game.prepareNPC(Areas.eaglecrestGraveyard.things[3], "things");
					if (preparedNPC) {
						Game.things.push(new Thing(preparedNPC));
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
		lootTier: 1,

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
				[82, 65, 65, 65, 65, 65, 65, 65, 82, 65, 65, 65, 65, 65, 65, 65, 65, 65, 82, 65, 65, 65, 65, 65, 65, 65, 65, 65, 82, 65, 65, 65, 65, 65, 65, 65, 82,
            82, 65, 28, 28, 65, 28, 28, 65, 82, 65, 65, 28, 28, 65, 28, 28, 65, 65, 82, 65, 65, 28, 28, 65, 28, 28, 65, 65, 82, 65, 28, 28, 65, 28, 28, 65, 82,
            82, 65, 28, 28, 65, 28, 28, 65, 82, 65, 65, 28, 28, 65, 28, 28, 65, 65, 82, 65, 65, 28, 28, 65, 28, 28, 65, 65, 82, 65, 28, 28, 65, 28, 28, 65, 82,
            82, 65, 28, 28, 65, 28, 28, 65, 82, 65, 65, 28, 28, 65, 28, 28, 65, 65, 82, 65, 65, 28, 28, 65, 28, 28, 65, 65, 82, 65, 28, 28, 65, 28, 28, 65, 82,
            82, 65, 28, 28, 65, 28, 28, 65, 82, 65, 65, 28, 28, 65, 28, 28, 65, 65, 82, 65, 65, 28, 28, 65, 28, 28, 65, 65, 82, 65, 28, 28, 65, 28, 28, 65, 82,
            82, 65, 73, 73, 65, 73, 73, 65, 82, 65, 65, 73, 73, 65, 73, 73, 65, 65, 82, 65, 65, 73, 73, 65, 73, 73, 65, 65, 82, 65, 73, 73, 65, 73, 73, 65, 82,
            70, 62, 62, 62, 62, 62, 62, 62, 70, 62, 62, 62, 62, 62, 62, 62, 62, 62, 70, 62, 62, 62, 62, 62, 62, 62, 62, 62, 70, 62, 62, 62, 62, 62, 62, 62, 70,
            62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62,
            62, 62, 62, 62, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 62, 62, 62, 62, 62, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 62, 62, 62, 62,
            62, 62, 62, 62, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 62, 62, 62, 62, 62, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 62, 62, 62, 62,
            62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 14, 14, 62, 62, 62, 62, 62, 14, 14, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62,
            65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 14, 14, 62, 62, 62, 62, 62, 14, 14, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65,
            65, 65, 84, 65, 65, 84, 65, 65, 84, 65, 65, 84, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 84, 65, 65, 84, 65, 65, 84, 65, 65, 84, 65, 65,
            65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 84, 65, 65, 65, 84, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65,
            62, 62, 62, 62, 62, 62, 62, 62, 62, 14, 14, 30, 30, 30, 65, 65, 65, 65, 65, 65, 65, 65, 65, 30, 30, 30, 14, 14, 62, 62, 62, 62, 62, 62, 62, 62, 62,
            62, 62, 62, 62, 62, 62, 62, 62, 62, 14, 14, 62, 62, 62, 62, 62, 62, 14, 14, 14, 62, 62, 62, 62, 62, 62, 14, 14, 62, 62, 62, 62, 62, 62, 62, 62, 62,
            62, 62, 62, 62, 62, 62, 62, 62, 62, 14, 14, 62, 62, 62, 62, 62, 62, 14, 14, 14, 62, 62, 62, 62, 62, 62, 14, 14, 62, 62, 62, 62, 62, 62, 62, 62, 62,
            62, 62, 62, 62, 62, 62, 62, 62, 62, 14, 14, 62, 62, 62, 62, 62, 62, 14, 14, 14, 62, 62, 62, 62, 62, 62, 14, 14, 62, 62, 62, 62, 62, 62, 62, 62, 62,
            62, 62, 62, 62, 62, 62, 62, 62, 62, 14, 14, 62, 62, 62, 62, 62, 62, 14, 14, 14, 62, 62, 62, 62, 62, 62, 14, 14, 62, 62, 62, 62, 62, 62, 62, 62, 62,
            62, 62, 62, 62, 62, 62, 62, 62, 62, 14, 14, 62, 62, 62, 62, 62, 62, 14, 14, 14, 62, 62, 62, 62, 62, 62, 14, 14, 62, 62, 62, 62, 62, 62, 62, 62, 62,
            62, 62, 62, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 62, 62, 62,
            62, 62, 62, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 62, 62, 62,
            62, 62, 62, 14, 14, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 14, 14, 14, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 14, 14, 62, 62, 62,
            62, 62, 62, 14, 14, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 14, 14, 14, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 14, 14, 62, 62, 62,
            62, 62, 62, 14, 14, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 14, 14, 14, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 14, 14, 62, 62, 62,
            62, 62, 62, 14, 14, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 14, 14, 14, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 14, 14, 62, 62, 62,
            62, 62, 62, 14, 14, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 14, 14, 14, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 14, 14, 62, 62, 62,
            62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 14, 14, 14, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62,
            62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 14, 14, 14, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62,
            62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 14, 14, 14, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62],
		],
			animateTiles: [{
				// christmas lights on walls!
				tiles: [350, 356, 351, 359, 352, 360],
				animateTime: 600,
				animateCondition: function () {return Event.event === "Christmas"}
			}],
		},

		images: {
			tiles: {normal: "assets/tilemap/eaglecrest.png", christmas: "assets/tilemap/eaglecrestChristmas.png"},
			kempEau: {normal: "assets/npcs/kemp-Eau.png"},
			ronson: {normal: "assets/npcs/ronson.png"},
			sollwyn: {normal: "assets/npcs/sollwyn.png"},
			marAsh: {normal: "assets/npcs/mar'Ash.png"},
			archbishop: {normal: "assets/npcs/archbishop.png"},
			stairsLeft: {normal: "assets/objects/stairsLeft.png"},
			stairsRight: {normal: "assets/objects/stairsRight.png"},
			catAmelioLeft: {normal: "./assets/npcs/catAmelioLeft.png"},
			catAmelioRight: {normal: "./assets/npcs/catAmelioLeft.png", flip: "vertical"},
			yellowSnakeRight: {samhain: "assets/enemies/yellowSnake.png"},
			yellowSnakeLeft: {samhain: "assets/enemies/yellowSnake.png", flip: "vertical"},

			bookPage: {normal: "assets/objects/bookPage.png"},
			candle: {normal: "assets/objects/candle.png"},
			candles: {normal: "assets/objects/candles.png"},
			dowsingRodStand: {normal: "assets/objects/dowsingRodStand.png"},
			multitoolStand: {normal: "assets/objects/multitoolStand.png"},
			monasteryFlowerPot: {normal: "assets/objects/monasteryFlowerPot.png"},
			monasteryHolyWater: {normal: "assets/objects/monasteryHolyWater.png"},
			monasteryLectern: {normal: "assets/objects/monasteryLectern.png"},
			monasteryPew: {normal: "assets/objects/monasteryPew.png"},
			monasteryPrayerMat: {normal: "assets/objects/monasteryPrayerMat.png"},
			riverIdol: {normal: "assets/objects/riverIdol.png"},
			winterMelon: {normal: "assets/objects/winterMelon.png"},
			catBowlEmpty: {normal: "assets/objects/catBowlEmpty.png"},
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

			// if they are holding old rusted staff, they get kicked out
			if (Player.inventory.weapon.type === "staff" && Player.inventory.weapon.id === 16) {
				Dom.chat.npcBanner({imageSrc: "./assets/npcs/ronson.png", name: "Priestess Ronson",}, [
					{text: "You there! What's that you're holding?", onFinish: function () {
						Game.setTimeout(Game.statusEffects.stun.bind(Game.statusEffects), 1000, {target: Game.hero, time: 5});
					}}, {text: "By the Pantheon, what are you doing!? This is hallowed ground, no place for a thing like that!", onFinish: function () {
						Game.loadArea("eaglecrest", {x: 9634, y: 1950});
					}}
				]);
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
				teleportTo: "eaglecrest",
				destinationX: 9634,
				destinationY: 1950,
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
				x: 1095,
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
					{
						role: "soulHealer",
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

			{x: [874, 1342.7, 874, 1342.7, 874, 1342.7, 874, 1342.7, 874, 1342.7], y: [1015, 1015, 1145, 1145, 1405, 1405, 1535, 1535, 1665, 1665], image: 'monasteryPew', name: 'Pew'},

			{x: 449.9, y: 1010.7, image: 'riverIdol', name: 'River Idol'},
			{x: 134.6, y: 1045.8, image: 'riverIdol', name: 'River Idol'},
			{x: 303.2, y: 1075.4, image: 'monasteryHolyWater', name: 'Holy Water'},
			{x: 474.7, y: 853.5, image: 'monasteryHolyWater', name: 'Holy Water'},
			{x: 100.9, y: 853.5, image: 'monasteryHolyWater', name: 'Holy Water'},
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
				image: "catAmelioLeft",
        		rotationImages: {
            		left: "catAmelioLeft",
            		right: "catAmelioLeft"
        		},
				animation: {
					type: "spritesheet",
					frameTime: 30,
					imagesPerRow: 3,
					totalImages: 3,
					animateBasis: "walk"
				},
				crop: {
					x: 3,
					y: 1,
					width: 88,
					height: 79,
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
		lootTier: 1,

		isIcy: function() {
			return Event.event === "Christmas";
		},
mapData: {
			origin: {x: 240, y: 2220},
			cols: 200,
			rows: 140,
			tsize: 60,
			tilesPerRow: 8,
			solidTiles: [1, 2, 3, 6, 7, 9, 10, 11, 13, 15, 17, 18, 19, 20, 21, 23, 25, 26, 27, 28, 29, 31, 33, 34, 35, 36, 37, 38, 39, 42, 43, 44, 45, 46, 47, 53, 55, 61, 65, 69, 70, 73, 77, 82, 83, 89, 90, 97, 98, 123, 131, 150, 151, 152, 200, 208, 269, 270, 271],
			dayTiles: [11, 27, 34, 42, 7], // windows and lights
			nightTiles: [3, 19, 2, 18, 15],
			pathTiles: [5, 12, 41, 50, 51, 57, 58, 59, 60, 76, 86, 87, 88, 91, 92, 93, 99, 107, 108, 109, 110, 111, 113, 115, 117, 118, 119, 121, 125, 126, 127, 129, 133, 134, 135, 137, 138, 139, 140, 141, 147, 148, 149],
			waterTiles: [32, 40, 48, 112, 120, 128],
			iceTiles: [32, 40, 48],
			tallGrassBottoms: [215, -215], // tall grass (slows player)
			objectTiles: [142, 196, 197,66,75], // top of barrel, fences, (cattails are 136 and 144 but picking object flowers, cattails etc doesn't work yet)
			transparentTiles: [94, 95, 96, 102, 103, 104, 114, 116, 122, 124, 130, 132, 136, 144], // these tiles should be ignored when considering water etc, even when they're at the front of the canvas
			showIfTiles: [ // calculated in runtime so should be quite efficient if possible (only use if it needs to be checked every frame)
				{
					tiles: [212, 209, 210, 211, 220, 217, 218, 219, 228, 225, 226, 227],
					function () { // returns true or false depending on whether these files can be shown or not
						return Player.inventory.helm.type === "helm" && Player.inventory.helm.id === 45; // wearing pawperceptors
					}
				}
			],
			repeatTiles: [
				{
					tile: 192,
					ySpacing: 20,
					xSpacing: 5,
					name: "Beetroot",
					objectProperties: {
						canBePickedUp: {
							channelTime: 1000, itemType: "item", itemId: 72, channelText: "Harvesting crop"
						},
					},
				},
				{
					tile: 216,
					ySpacing: 20,
					xSpacing: 10,
					name: "Amaranth",
					objectProperties: {
						canBePickedUp: {
							channelTime: 1000, itemType: "item", itemId: 73, channelText: "Harvesting crop"
						},
					},
				},
				{
					tile: 243,
					ySpacing: 20,
					xSpacing: -30,
					name: "Teal Callalilies",
					objectProperties: {
						canBePickedUp: {
							channelTime: 1000, itemType: "item", itemId: 68, channelText: "Flower picking",
							//additionalFunction: Areas.eaglecrestPlains.flowerPickUp(68),
						},
					},
				},
				{
					tile: 242,
					ySpacing: 20,
					xSpacing: -20,
					name: "Daisies",
					objectProperties: {
						canBePickedUp: {
							channelTime: 1000, itemType: "item", itemId: 32, channelText: "Flower picking",
							//additionalFunction: Areas.eaglecrestPlains.flowerPickUp(32),
						},
					},
				},
				{
					tile: 241,
					ySpacing: 20,
					xSpacing: -30,
					name: "Marigolds",
					objectProperties: {
						canBePickedUp: {
							channelTime: 1000, itemType: "item", itemId: 31, channelText: "Flower picking",
							//additionalFunction: Areas.eaglecrestPlains.flowerPickUp(31),
						},
					},
				},
				{
					tile: 239,
					ySpacing: 10,
					xSpacing: -8,
					name: "Lavender",
					objectProperties: {
						canBePickedUp: {
							channelTime: 1000, itemType: "item", itemId: 30, channelText: "Flower picking",
							//additionalFunction: Areas.eaglecrestPlains.flowerPickUp(64),
						},
					},
				},
				{
					tile: 238,
					ySpacing: 30,
					xSpacing: -20,
					name: "Wolfsbane",
					objectProperties: {
						canBePickedUp: {
							channelTime: 1000, itemType: "item", itemId: 67, channelText: "Flower picking",
							//additionalFunction: Areas.eaglecrestPlains.flowerPickUp(67),
						},
					},
				},
				{
					tile: 237,
					ySpacing: 20,
					xSpacing: -10,
					name: "Cyan Wallflowers",
					objectProperties: {
						canBePickedUp: {
							channelTime: 1000, itemType: "item", itemId: 66, channelText: "Flower picking",
							//additionalFunction: Areas.eaglecrestPlains.flowerPickUp(66),
						},
					},
				},
				{
					tile: 236,
					ySpacing: 30,
					xSpacing: -10,
					name: "Orange Tulips",
					objectProperties: {
						canBePickedUp: {
							channelTime: 1000, itemType: "item", itemId: 65, channelText: "Flower picking",
							//additionalFunction: Areas.eaglecrestPlains.flowerPickUp(65),
						},
					},
				},
				{
					tile: 234,
					ySpacing: 20,
					xSpacing: -10,
					name: "Poppies",
					objectProperties: {
						canBePickedUp: {
							channelTime: 1000, itemType: "item", itemId: 64, channelText: "Flower picking",
							//additionalFunction: Areas.eaglecrestPlains.flowerPickUp(64),
						},
					},
				},
				{
					tile: 235,
					ySpacing: 20,
					xSpacing: -10,
					name: "Pink Alcea",
					objectProperties: {
						canBePickedUp: {
							channelTime: 1000, itemType: "item", itemId: 63, channelText: "Flower picking",
							//additionalFunction: Areas.eaglecrestPlains.flowerPickUp(63),
						},
					},
				},
				{
					tile: 215,
					ySpacing: 20,
					xSpacing: -6,
					name: "Tall Grass",
					kMultiplier: 6,
				},
				{
					tile: 207,
					ySpacing: 20,
					xSpacing: -6,
					name: "Tall Grass Tops",
					orderOffsetY: 60,
					kMultiplier: 6,
				},
				{
					tile: 160,
					ySpacing: 20,
					xSpacing: -6,
					name: "Grass",
					kMultiplier: 6,
				},
			],
			animateTiles: [
			{
				// river tiles
				tiles: [32, 40, 48],
				animateTime: 200,
			},{
				// rippling river tiles
				tiles: [112, 120, 128],
				animateTime: 200,
			},{
				// water soil boundary
				tiles: [64, 183],
				animateTime: 200,
			},
			{
				// water soil boundary
				tiles: [71, 182],
				animateTime: 200,
			},
			{
				// water soil boundary
				tiles: [181, 24],
				animateTime: 200,
			},




			{
				// christmas lights! (bridge)
				tiles: [114, 161],
				animateTime: 1000,
				animateCondition: function () {return Event.event === "Christmas"}
			},{
				// christmas lights! (bridge)
				tiles: [116, 162],
				animateTime: 1000,
				animateCondition: function () {return Event.event === "Christmas"}
			},{
				// christmas lights! (bridge)
				tiles: [122, 169],
				animateTime: 1000,
				animateCondition: function () {return Event.event === "Christmas"}
			},{
				// christmas lights! (bridge)
				tiles: [124, 170],
				animateTime: 1000,
				animateCondition: function () {return Event.event === "Christmas"}
			},{
				// christmas lights! (bridge)
				tiles: [130, 177],
				animateTime: 1000,
				animateCondition: function () {return Event.event === "Christmas"}
			},{
				// christmas lights! (bridge)
				tiles: [132, 178],
				animateTime: 1000,
				animateCondition: function () {return Event.event === "Christmas"}
			},{
				// christmas lights! (bridge)
				tiles: [94, 163],
				animateTime: 1000,
				animateCondition: function () {return Event.event === "Christmas"}
			},{
				// christmas lights! (bridge)
				tiles: [95, 164],
				animateTime: 1000,
				animateCondition: function () {return Event.event === "Christmas"}
			},{
				// christmas lights! (bridge)
				tiles: [96, 165],
				animateTime: 1000,
				animateCondition: function () {return Event.event === "Christmas"}
			},{
				// christmas lights! (bridge)
				tiles: [102, 171],
				animateTime: 1000,
				animateCondition: function () {return Event.event === "Christmas"}
			},{
				// christmas lights! (bridge)
				tiles: [103, 172],
				animateTime: 1000,
				animateCondition: function () {return Event.event === "Christmas"}
			},{
				// christmas lights! (bridge)
				tiles: [104, 173],
				animateTime: 1000,
				animateCondition: function () {return Event.event === "Christmas"}
			},{
				// christmas lights on walls!
				tiles: [350, 356, 351, 359, 352, 360],
				animateTime: 600,
				animateCondition: function () {return Event.event === "Christmas"}
			}],
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
				else if (tileNum === 136) { // cattail
					// channel for 1 second
					Game.hero.channel(function () {
						// give cattail to player
						Dom.inventory.give(Items.item[55]);
						// remove flower from tilemap
						map.setTile(2, map.getCol(x), map.getRow(y), 144);
					}, [], 1000, "Flower Picking");
				}
			},
},

		callAreaJoinOnInit: true,
		onAreaJoin: function () {
			// samhain snakes and lights
			if (Event.event === "Samhain" && Player.quests.completedQuestArray.includes("Overdraft")) {
				let no = Random(20,35); // num of snakes
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

			// reset if player has seen jester or not
			Player.quests.questProgress.seenJesterOnScreen = false;
		},

		// same as onAreaJoin but called before anything is loaded
		onAreaLoad: function () {
			// set plainsStatueProgress
			Player.quests.questProgress.plainsStatueProgress = 0;

			if (Player.level >= 10) {
				Player.quests.questProgress.plainsStatueProgress++;
			}

			// see if plains archaeology finished for this class
			let archaeologyFinished = true;
			let checkCategory;
			if (Player.class === "a") {
				checkCategory = "bow";
			}
			else if (Player.class === "m") {
				checkCategory = "staff";
			}
			else if (Player.class === "k") {
				checkCategory = "sword";
			}
			for(let x = 0; x < Items[checkCategory].length; x++){
				if(Items[checkCategory][x].unidentifiedArea !== undefined && Items[checkCategory][x].unidentifiedArea.includes("eaglecrest") && !User.archaeology.includes(Items[checkCategory][x].name)){
					archaeologyFinished = false;
				}
			}
			if (archaeologyFinished) {
				Player.quests.questProgress.plainsStatueProgress++;
			}
			// other two conditions (tba and tbc) should be joining a cult and finishing cat quest

			// remove callalillies and marigolds from farm flower beds unless every flower in my garden has been finished for at least a day
			let yesterdayDate = GetFullDate(1);
			let mapCols = Areas["eaglecrestPlains"].mapData.cols;
			if (Areas["eaglecrestPlains"].mapData.layers[1][101+31*mapCols] !== 0 && Math.abs(Areas["eaglecrestPlains"].mapData.layers[1][101+31*mapCols]) !== 241) { // first some validation... (just in case map has been changed without this code being changed) - this isn't foolproof but should catch any change
				console.error("Position of marigold flower bed has been moved but code has not been updated - please tell Jake!");
			}
			if (Player.quests.prog.eaglecrest[9].questLastFinished > yesterdayDate || IsNullLike(Player.quests.prog.eaglecrest[9].questLastFinished)) { // not finished, or finished after yesterday
				// remove them
				Areas["eaglecrestPlains"].mapData.layers[1][101+31*mapCols] = 0;
				Areas["eaglecrestPlains"].mapData.layers[1][102+31*mapCols] = 0;
				Areas["eaglecrestPlains"].mapData.layers[1][101+32*mapCols] = 0;
				Areas["eaglecrestPlains"].mapData.layers[1][102+32*mapCols] = 0;
			}
		},

		callAreaLeaveOnLogout: true,
		onAreaLeave: function (logout) {
			// samhain
			Player.quests.questProgress.plainsCrateGhosts = false;
		},

		// for foxglove boss
		pickUpFlower: function (flowerId) {
			let foxgloveBoss = Game.enemies.find(enemy => enemy.name === "Baron Foxglove");
			if (typeof foxgloveBoss !== "undefined" && typeof foxgloveBoss.flowersToCollect !== "undefined") {
				let spliceId = foxgloveBoss.flowersToCollect.find
				if (typeof foxgloveBoss.flowersToCollect.includes(flowerId)) {
					foxgloveBoss.s
				}
			}
		},

		// called when the hero gets on the train to paw peaks
		getOnTrainOutbound: function () {
			let trainComponents = Game.things.filter(thing => thing.name === "Train Carriage" || thing.name === "Train Driver's Carriage");
			let carriage = trainComponents.find(thing => thing.name === "Train Carriage");
			Game.hero.getOnMount(carriage);
			for (let i = 0; i < trainComponents.length; i++) {
				// start train animation
				trainComponents[i].setAnimation({
					type: "spritesheet",
					imagesPerRow: 4,
					frameTime: 90,
					totalImages: 16
				});

				// move train
				trainComponents[i].moveTowards = {
					x: -1000,
					y: trainComponents[i].y,
					speed: 100,
				};
			}

			// load area
			Game.setTimeout(Game.loadArea.bind(Game), 8000, "pawPeaks");
		},

		onFishCaught: function()
		{
			//troubled waters area fishing progress
			if(Game.hero.x >= -240 && Game.hero.x <= 2000 && Game.hero.y >= -120 && Game.hero.y <= 1000)
			{
				if(Player.quests.prog.eaglecrest[13].vars.northWestFish === undefined)
				{
					Player.quests.prog.eaglecrest[13].vars.northWestFish = 1;
					Dom.quests.active();
				}
				else
				{
					Player.quests.prog.eaglecrest[13].vars.northWestFish += 1;
				}
			}
			else if(Game.hero.x >= -240 && Game.hero.x <= 2000 && Game.hero.y >= 4150 && Game.hero.y <= 6180)
			{
				if(Player.quests.prog.eaglecrest[13].vars.southWestFish === undefined)
				{
					Player.quests.prog.eaglecrest[13].vars.southWestFish = 1;
					Dom.quests.active();
				}
				else
				{
					Player.quests.prog.eaglecrest[13].vars.southWestFish += 1;
				}
			}
			else if(Game.hero.x >= 2040 && Game.hero.x <= 5040 && Game.hero.y >= 3200 && Game.hero.y <= 4500)
			{
				if(Player.quests.prog.eaglecrest[13].vars.centreFish === undefined)
				{
					Player.quests.prog.eaglecrest[13].vars.centreFish = 1;
					Dom.quests.active();
				}
				else
				{
					Player.quests.prog.eaglecrest[13].vars.centreFish += 1;
				}
			}
			else if(Game.hero.x >= 4200 && Game.hero.x <= 7440 && Game.hero.y >= -120 && Game.hero.y <= 2200)
			{
				if(Player.quests.prog.eaglecrest[13].vars.northEastFish === undefined)
				{
					Player.quests.prog.eaglecrest[13].vars.northEastFish = 1;
					Dom.quests.active();
				}
				else
				{
					Player.quests.prog.eaglecrest[13].vars.northEastFish += 1;
				}
			}
			else if(Game.hero.x >= 5300 && Game.hero.x <= 7440 && Game.hero.y >= 2360 && Game.hero.y <= 4800)
			{
				if(Player.quests.prog.eaglecrest[13].vars.southEastFish === undefined)
				{
					Player.quests.prog.eaglecrest[13].vars.southEastFish = 1;
					Dom.quests.active();
				}
				else
				{
					Player.quests.prog.eaglecrest[13].vars.southEastFish += 1;
				}
			}
			Dom.quests.active();
		},

		images: {
			tiles: {normal: "assets/tilemap/eaglecrest.png", christmas: "assets/tilemap/eaglecrestChristmas.png"},
			melee: {normal: "assets/projectiles/melee.png"},
			guard1: {normal: "assets/npcs/eaglecrestGuard.png"},
			guard2: {normal: "assets/npcs/eaglecrestGuard2.png"},
			eaglecrestGhost: {samhain: "assets/enemies/eaglecrestGhost.png"},
			eaglecrestGhost2: {samhain: "assets/enemies/eaglecrestGhost2.png"},
			crateSamhain: {samhain: "assets/objects/crateSamhain.png"},
			yellowSnakeRight: {samhain: "assets/enemies/yellowSnake.png"},
			yellowSnakeLeft: {samhain: "assets/enemies/yellowSnake.png", flip: "vertical"},
			toadRight: {normal: "assets/enemies/toad.png"},
			toadLeft: {normal: "assets/enemies/toad.png", flip: "vertical"},
			toadCorpse: {normal: "assets/corpses/toad.png"},
			waterball: {normal: "assets/projectiles/waterball.png"},
			gildoCleftbeard: {normal: "assets/npcs/gildoCleftbeard.png"},
			chickenRight: {normal: "assets/enemies/chicken.png"},
			chickenLeft: {normal: "assets/enemies/chicken.png", flip: "vertical"},
			chickenCorpse: {normal: "assets/corpses/chicken.png"},
			sprinkler: {normal: "assets/objects/sprinkler.png"},
			well: {normal: "assets/objects/well.png"},
			lanternDayLeft: {normal: "assets/objects/lanternDayLeft.png"},
			lanternNightLeft: {normal: "assets/objects/lanternNightLeft.png"},
			lanternDayRight: {normal: "assets/objects/lanternDayLeft.png", flip: "vertical"},
			lanternNightRight: {normal: "assets/objects/lanternNightLeft.png", flip: "vertical"},
			fishermanGuimtal: {normal: "assets/npcs/fishermanGuimtal.png"},
			gnome: {normal: "assets/objects/gnomeBlue.png"},
			statue1: {normal: "assets/objects/plainsStatue1.png"},
			statue2: {normal: "assets/objects/plainsStatue2.png"},
			statue3: {normal: "assets/objects/plainsStatue3.png"},
			statue4: {normal: "assets/objects/plainsStatue4.png"},
			statue5: {normal: "assets/objects/plainsStatue5.png"},
			trainFrontLeft: {normal: "assets/objects/trainFront.png"},
			trainFrontRight: {normal: "assets/objects/trainFront.png", flip: "vertical"},
			trainCarriage: {normal: "assets/objects/trainCarriage.png"},
			barrel: {normal: "assets/objects/barrel.png"},
			crate: {normal: "assets/objects/crate.png", christmas: "assets/objects/crateChristmas.png"},
			coyoteUnbotheredLeft: {normal: "assets/enemies/coyoteUnbothered.png", flip: "vertical"},
			coyoteUnbotheredRight: {normal: "assets/enemies/coyoteUnbothered.png"},
			coyoteBotheredLeft: {normal: "assets/enemies/coyoteBothered.png", flip: "vertical"},
			coyoteBotheredRight: {normal: "assets/enemies/coyoteBothered.png"},
			coyoteShootingLeft: {normal: "assets/enemies/coyoteShooting.png", flip: "vertical"},
			coyoteShootingRight: {normal: "assets/enemies/coyoteShooting.png"},
			coyoteCorpse: {normal: "assets/corpses/coyote.png"},
			jaws: {normal: "assets/projectiles/jaws.png",},
			coyoteWrangler: {normal: "assets/enemies/coyotePackWrangler.png"},
			coyoteWranglerCorpse: {normal: "assets/corpses/coyotePackWrangler.png"},
			beeSwarmLeft: {normal: "assets/enemies/beeSwarm.png"},
			beeSwarmRight: {normal: "assets/enemies/beeSwarm.png", flip: "vertical"},
			beeSwarmCorpse: {normal: "assets/corpses/beeSwarm.png"},
			bumblebeeLeft1: {normal: "assets/enemies/bumblebee1.png"},
			bumblebeeRight1: {normal: "assets/enemies/bumblebee1.png", flip: "vertical"},
			bumblebeeLeft2: {normal: "assets/enemies/bumblebee2.png"},
			bumblebeeRight2: {normal: "assets/enemies/bumblebee2.png", flip: "vertical"},
			rockSpike: {normal: "assets/objects/rockSpike.png"},
			signTrain: {normal: "assets/objects/signTrain.png"},
			sewerEntrance: {normal: "assets/objects/sewerEntrance.png"},
			flowerPot: {normal: "assets/objects/flowerPot.png"},
			tree1A: {normal: "assets/objects/tree1A.png"},
			tree2A: {normal: "assets/objects/tree2A.png"},
			tree3A: {normal: "assets/objects/tree3A.png"},
			riverIdol: {normal: "assets/objects/riverIdol.png"},
			jesterTriangle: {normal: "assets/objects/jesterTriangle.png"},
			jesterBugle: {normal: "assets/objects/jesterBugle.png"},
			jesterConfetti: {normal: "assets/objects/jesterConfetti.png"},
			jesterBall: {normal: "assets/items/item/57.png"},
			rockSpike: {normal: "assets/objects/rockSpike.png"},
			conductor: {normal: "assets/npcs/conductorDanes.png"},
			steppingStone: {normal: "assets/objects/steppingStone.png"},
  			waterWheelOvergrown: {normal: "assets/objects/waterWheelOvergrown.png"},
  			waterWheel: {normal: "assets/objects/waterWheel.png"},
			hayWagon: {normal: "assets/objects/hayWagon.png"},
			beehive: {normal: "assets/objects/beehive.png"},
			hayBale1: {normal: "assets/objects/hayBale1Eaglecrest.png"},
			ironBucket: {normal: "assets/objects/ironBucket.png"},
			hayBale2: {normal: "assets/objects/hayBale2Eaglecrest.png"},
			target: {normal: "assets/objects/target.png"},
			wheelBarrowRed: {normal: "assets/objects/wheelBarrowRed.png"},
			spade: {normal: "assets/objects/spade.png"},
			flourSack: {normal: "assets/objects/flourSack.png"},
			scarecrow: {normal: "assets/enemies/scarecrow.png"},
			wiseMan: {normal: "assets/npcs/wiseMan.png"},
			jester: {normal: "assets/npcs/jester.png"},
			trainDriver: {normal: "assets/npcs/trainDriver.png"},
			signFarm: {normal: "assets/objects/signFarm.png"},
			sheepRight: {normal: "./assets/enemies/sheep.png"},
			sheepLeft: {normal: "./assets/enemies/sheep.png", flip: "vertical"},
			blackSheepRight: {normal: "./assets/enemies/blackSheep.png"},
			blackSheepLeft: {normal: "./assets/enemies/blackSheep.png", flip: "vertical"},
			waterTrough: {normal: "assets/objects/waterTrough.png"},
			wateringCan: {normal: "assets/objects/wateringCan.png"},
			catBowlEmpty: {normal: "assets/objects/catBowlEmpty.png"},
			farmerLennie: {normal: "assets/npcs/farmerLennie.png"},
			farmerScop: {normal: "assets/npcs/farmerScop.png"},
			farmerEloise: {normal: "assets/npcs/farmerEloise.png"},
			armouredToadLeft: {normal: "assets/enemies/toadArmoured.png"},
			armouredToadRight: {normal: "assets/enemies/toadArmoured.png", flip: "vertical"},
			sharptooth: {normal: "assets/npcs/sharptooth.png"},
			foxglove: {normal: "assets/enemies/foxglove.png"},
			foxgloveHand: {normal: "assets/enemies/foxgloveHands.png"},
			foxgloveSunken: {normal: "assets/enemies/foxgloveSunken.png"},
			foxgloveCorpse: {normal: "assets/corpses/foxglove.png"},
			arrow: {normal: "assets/projectiles/arrow.png"},
			eagleStatue: {normal: "assets/objects/eagleStatue.png"},
			eaglecrestBanner: {normal: "assets/objects/eaglecrestBanner.png", christmas: "assets/objects/eaglecrestBannerChristmas.png"},
			//temp:
			brownHorseRight: {normal: "assets/mounts/brownHorse/brownHorseSide.png"},
			brownHorseLeft: {normal: "assets/mounts/brownHorse/brownHorseSide.png",flip:"vertical"},
			brownHorseFront: {normal: "assets/mounts/brownHorse/brownHorseFront.png"},
			brownHorseBack: {normal: "assets/mounts/brownHorse/brownHorseBack.png"},
			// still temp for demolitionist darrow
			demolitionistDarrow: {normal: "assets/npcs/demolitionist.png"},
			demolitionistDarrowCorpse: {normal: "assets/npcs/demolitionist.png"},
			dynamiteLit: {normal: "assets/projectiles/dynamiteLit.png"},
			// back to not temp anymore
			shrub: {normal: "assets/objects/shrub.png"},
			shrub1: {normal: "assets/objects/shrub1.png"},
			shrub2: {normal: "assets/objects/shrub2.png"},
			plainsShrub1: {normal: "assets/objects/plainsShrub1.png"},
			plainsShrub2: {normal: "assets/objects/plainsShrub2.png"},
			plainsShrub3: {normal: "assets/objects/plainsShrub3.png"},
			leyAggregate: {normal: "assets/objects/leyAggregate.png"},
			crystalLarge: {normal: "assets/objects/plainsCrystalLarge.png"},
			crystalSmall: {normal: "assets/objects/plainsCrystalSmall.png"},
		},

		areaTeleports: [
			{
				// teleport to eaglecrest city
				x: 3000,
				y: 210,
				width: 120,
				height: 2,
				teleportTo: "eaglecrest",
				destinationX: 3750,
				destinationY: 4735,
			},
			{
				// teleport to cave opening
				x: 7307.5,
				y: 3809.7,
				width: 0,
				height: 342,
				teleportTo: "caveEntrance",
				destinationX: 111, // tba
				destinationY: 1512,

			},


			{
				// teleport to forest
				x: -260,
				y: 3440,
				width: 2,
				height: 900,
				teleportTo: "forest",
				destinationX: 960, // tba
				destinationY: 1670,
				teleportCondition: function () {
					return false;
				},
				teleportFailText: "Archaeological exploration of <i>the Forest</i> has not yet commenced!",
			},
		],

		villagerData: {
			minPeople: 10,
			maxPeople: 22,
			locations: [
				{x: 392.6, y: 393.6, width: 1068.3, height: 249.5}, // train station
				{x: 2014.7, y: 263.6, width: 1180.8, height: 376.6}, // by eaglecrest gate
				{x: 2015, y: 890.3, width: 883.5, height: 1144.6}, // island with statue
				{x: 2023.2, y: 2571.9, width: 745.4, height: 1132}, // main path on upper big central island
				{x: 2041.1, y: 2724.8, width: 3077.4, height: 681.6}, // upper horizontal desire line on big central island
				{x: 4898, y: 2436.6, width: 113.3, height: 2232.2}, // vertical desire line & bridge on central islands
				{x: 2025.8, y: 4383.8, width: 3011.2, height: 252.3}, // lower horizontal desire line & bridge on central islands
				{x: 2069.4, y: 2652, width: 126.6, height: 2009.3}, // vertical desire line & bridge on central islands
				{x: 2054.4, y: 2652, width: 156.6, height: 2009.3}, // bottom middle island with river idols
				//{x: 3466.5, y: 4969.3, width: 1535.6, height: 1071.8}, // purple ley shard spike island
				{x: 5444.8, y: 5024.6, width: 642.5, height: 665.8}, // wise man reflection island
				//{x: 5377.8, y: 3837.3, width: 1302.3, height: 641.1}, // tall grass island lower side
				//{x: 5570.9, y: 2578.3, width: 676.1, height: 1947.5}, // tall grass island vertical boundary
				{x: 5618.2, y: 1085.3, width: 344.6, height: 991}, // farm flower garden
				{x: 6334.7, y: 1374.6, width: 341.6, height: 950.9}, // farm animal island
				{x: 6939.6, y: 827.7, width: 272.2, height: 468.5}, // farm hay island
				{x: 5678.2, y: -105.5, width: 338.4, height: 760.2}, // farm beetroot island
				{x: 4720.7, y: 180.8, width: 573.1, height: 401.4}, // farm amaranth island
				{x: 3938, y: 1252.6, width: 1361.1, height: 584.2}, // island leading to farm horizontal boundary
				{x: 4115.2, y: 1128.3, width: 344.6, height: 1131.7}, // island leading to farm vertical boundary
				{x: 3275.6, y: 883, width: 345.8, height: 1142.5, requirement: function () {return Player.quests.npcProgress.eaglecrest[2] >= 3}}, // gildo attack / sewer entrance island (requirement is so it doesn't interfere with first part of overdraft)
				{x: -138.1, y: 1023.5, width: 1772.3, height: 335.2}, // top left flowerpot island and smaller islands to the left (maybe don't include the smaller islands to the left? idk)
				{x: 216.9, y: 1788.5, width: 1185.1, height: 2094}, // prarie
				{x: -69.8, y: 4254.4, width: 1651.9, height: 1543.3}, // flower forest
			],
		},

		// temp for fun :~)
		mounts: [
			{
				x: 520,
				y: 3200,
				direction: 3,
				name: "Horsey",
				rotationImages: {
					up: "brownHorseBack",
					down: "brownHorseFront",
					left: "brownHorseLeft",
					right: "brownHorseRight",
				},
				template: MountTemplates.default,
			}
		],

		leyAggregates: [
			{
				x: 5703, // wise man island
				y: 5106,
				template: EnemyTemplates.eaglecrest.leyAggregate,
				target: {x: 5300, y: 5000},
			},
			{
				x: 3514, // crystal island
				y: 5910,
				template: EnemyTemplates.eaglecrest.leyAggregate,
				target: {x: 5093, y: 4906},
			},
			{
				x: 5749, // coyote island
				y: 3874,
				template: EnemyTemplates.eaglecrest.leyAggregate,
				target: {x: 5437, y: 4797},
			},
			{
				x: 4036, // river's blessing island
				y: 4252,
				template: EnemyTemplates.eaglecrest.leyAggregate,
				target: {x: 5206, y: 4686},
			},
		],

		npcs: [
			{
				x: 3436,
				y: 1171,
				image: "gildoCleftbeard",
				template: Villagers[8],
				stats: {
					defence: 57,
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
							return false; // temp
							//return Player.quests.npcProgress.eaglecrest[2] === 2 && Player.quests.questProgress.overdraftFrogDeadOne && Player.quests.questProgress.overdraftFrogDeadTwo;
						},
					},
				],
			},
			{
                x: 3175,
                y: 1600,
                image: "fishermanGuimtal",
                name: "Fisherman Guimtal",
                hostility: "friendly",
                level: 10,
                stats: {
                    maxHealth: 100,
                    defence: 1,
                    healthRegen: 0.3,
                },
                roles: [
                        {
                            role: "questProgress",
                            quest: Quests.eaglecrest[7],
							step: [0,1],
                        },
                        {
                            role: "questProgress",
                            quest: Quests.eaglecrest[12],
							step: [0, 2],
                        },
                ],
                chat: {
                    questProgress: "What've yah caught?",
                    notUnlockedRoles: "What've yah caught?",
                    questComplete: "Thank yah for the help, I guess I'll see yah around.",
                    inventoryFull: "Yah bags are full, come back when yah got room.",
                },
            },
			{
                x: 4910,
                y: 3800,
                image: "sharptooth",
                name: "Fisher Sharptooh",
                hostility: "friendly",
                level: 10,
                stats: {
                    maxHealth: 100,
                    defence: 1,
                    healthRegen: 0.3,
                },
                roles: [
						{
							role: "questProgress",
							quest: Quests.eaglecrest[12],
							step: [1, 6],
						},
						{
	                        role: "questProgress",
	                        quest: Quests.eaglecrest[13],
							step: [0, 1, 2],
						},
						{
	                        role: "questProgress",
	                        quest: Quests.eaglecrest[14],
							step: [0, 1],
						},
						{
							role: "questProgress",
							quest: Quests.eaglecrest[16],
							step: [0, 1],
						},
						{
	                        role: "chatBanner",
	                        chooseText: "Give <b>Fisher Sharptooth</b> a fish longer than <b>100cm</b>, for it to be turned into bait.",
	                        chat: [{
								text: `Okays, I am trying not to eats it.`,
								onFinish: function () { // remove the fish
									for (let i = 0; i < Player.inventory.items.length; i++) {
										if (Player.inventory.items[i].type === "fish" && Player.inventory.items[i].length > 100) {
											Dom.inventory.remove(i);
											return;
										}
									}
								},
							},{
								text: `Nows wes has the fishs Is needs to turns its intos bait.`,
							},{
								text: `<em><b>Fisher Sharptooth</b> turns around and you hear multiple clangs and some switch sqwelching afterwards</em>`
							},{
								text: `Heres yous goes. Yous shoulds nows fish ups a <b>King of Herrings</b>.`
							}, {
								text: `Its a large fish so the large fish shouldn'ts be ables to eats it, so yous shoulds be ables to finds one in the well.`,
								onFinish: function () {
									// quest progress
									Player.quests.prog.eaglecrest[14].vars.herringBaitObtained = true; // so that next step is displayed
									Dom.quests.active();
									Dom.inventory.give(Items.consumable[37], 1);
								}
							}],
	                        forceChoose: true, // forces choose dom
	                        roleRequirement: function () {
								if((Player.quests.activeQuestArray.includes("Troubled Waters IV (Big Fish in a Small Pond)") ||
									Player.quests.completedQuestArray.includes("Troubled Waters IV (Big Fish in a Small Pond)")) &&
									Dom.inventory.check(40, "fish") === 0) // they don't have a king of herrings
								{
									for (let i = 0; i < Player.inventory.items.length; i++) {
									    if (Player.inventory.items[i].type === "fish" && Player.inventory.items[i].length > 100) {
									       	return true;
									    }
									}
								}
								return false;
	                        },
	                    },
						{
							role: "chatBanner",
							chooseText: "Give <b>Fisher Sharptooth</b> the <b>King of Herrings</b>, for it to be turned into bait.",
							chat: [{
								text: `Wows! This is reallys bigs! Is only heards abouts thems befores. Never seens.`,
								onFinish: function () { // remove the fish
									Dom.inventory.removeById(40, "fish");
								},
							},{
								text: `Anyways Is needs to turns this intos bait so yous cans catch whats is eatings all the fish.`,
							},{
								text: `<b>Fisher Sharptooth</b> turns around and you see them eat a bit off before turning it into bait</em>.`
							},{
								text: `Okays. Heres is the baits for yous. Nows go downs the well and fish ups the <b>Lake Lurker</b>!`
							}, {
								text: `Its a large fish so the large fish shouldn'ts be ables to eats it, so yous shoulds be ables to finds one in the well.`,
								onFinish: function () {
									// quest progress
									Player.quests.prog.eaglecrest[14].vars.lakeLurkerBaitObtained = true; // so that next step is displayed
									Dom.quests.active();
									Dom.inventory.removeById(40, "fish");
									Dom.inventory.give(Items.consumable[38]);
								}
							}],
							forceChoose: true, // forces choose dom
							roleRequirement: function () {
								return (Player.quests.prog.eaglecrest[14].vars.herringBaitObtained && Dom.inventory.check(40 , "fish"));
							},
						},
                ],
                chat: {
					questProgress: [
						{
							text: "Yous looks likes yous nevers seens a cat fish befores.",
							condition: function()
							{
								return Player.quests.completedQuestArray.includes("Troubled Waters II"); // translator has been given to sharptooth
							}
						},
						{
							text: "Miau, miau miau miau." // tbd use language system
						},
					],
                    notUnlockedRoles: "Miau, miau miau miau.",
                    questComplete: "Yous looks likes yous nevers seens a cat fish befores.",
                    questActive: "Yous looks likes yous nevers seens a cat fish befores.",
                    inventoryFull: "Yous needs mores space. Comes back laters.",
                },
            },
			{
				x: 428,
				y: 391,
				image: "conductor",
				name: "Conductor Danes",
				hostility: "friendly",
				level: 30,
				stats: {
					maxHealth: 200,
					defence: 14,
				},
				roles: [
					{
						role: "driver",
						roleRequirement: function () {
							return false;
						},
						destinations: [
							{
								destinationName: "pawPeaks",
								destinationPosition: {
									x: 86,
									y: 1641,
								},
								title: "Paw Peaks",
								description: "A faraway mountainous land.",
								image: "achievements/pawPeaks.png",
								cost: 5,
							},
						],
					},
				],
				chat: {
					notUnlockedRoles: "Tickets please!",
					driverText: "What's your destination?",
					tooPoor: "",
					chooseChat: "",
					christmasGreeting: "",
					antoraxDayGreeting: "",
				},
			},
			{
				x: 6142,
				y: 5990,
				image: "wiseMan",
				name: "Wise Man",
				hostility: "friendly",
				level: 100,
				stats: {
					maxHealth: 50,
					defence: 2,
				},
				roles: [ // maybe a quest / chat thing where you need to fetch something for him in return for some knowledge? (i.e. help with golden slingshot, etc.)
				],
				chat: {
					notUnlockedRoles: "You see, at my age, there's nothing to do but watch the horizon, and look for gnomes. Can't say I've found any yet though.",
					//notUnlockedRoles: "I believe the king is waiting for you - follow the path!", // his line from the original game! can seem like he's demented here
				},
			},
			{
				x: 375,
				y: 2222,
				image: "jester",
				template: Villagers[24],
				health: 56, // damaged
				stats: {
					defence: 64,
					healthRegen: 0,
				},
				canBeShown: function () {
					return Player.quests.possibleQuestArray.includes("A Fool's Errand") || Player.quests.activeQuestArray.includes("A Fool's Errand");
				},
			},
			{
				x: 5088,
				y: 4526,
				image: {
					skinTone: "humanLight1",
					clothing: "greenbeard",
					hair: "greenbeard",
					hat: "pirateHat",
				},
				template: Villagers[7],
				canBeShown: function () {
					return Player.quests.prog.eaglecrest[22][1] && !Player.quests.prog.eaglecrest[22][4]; // they've met greenbeard in tavern but haven't finished the quest yet
				},
				roles: [
					{
						quest: Quests.eaglecrest[22],
						role: "questProgress",
						step: [2, 3, 4],
					},
				],
			},
			{
				x: 354,
				y: 161,
				image: "trainDriver",
				name: "Driver Ooridge",
				hostility: "friendly",
				level: 60,
				stats: {
					maxHealth: 350,
					defence: 8,
				},
				roles: [
				],
				chat: {
					notUnlockedRoles: ".  .  .   ~",
				},
			},
			{
				x: 5877,
				y: 1405,
				image: "farmerEloise",
				name: "Farmer Eloise",
				hostility: "friendly",
				level: 20,
				stats: {
					maxHealth: 150,
					defence: 6,
				},
				roles: [
					{
						quest: Quests.eaglecrest[9],
						role: "questProgress",
						step: [0,1]
					},
					{
						quest: Quests.eaglecrest[15],
						role: "questProgress",
						step: [0,1]
					}
				],
				chat: {
					notUnlockedRoles: "Everything's going grand in the gardens~",
					questProgress: "I love flowers~˚",
					questComplete: "A man made of flowers? Now that I'd like to see~",
					//choose text: 'Eaglecrest air is foul! Lucky my flowers keep me smellin' sweet.' getting food: 'Thanks for that. Farming's 'ungry work.'
				},
			},
			{
				x: 4623,
				y: 880,
				image: "farmerScop",
				name: "Farmer Scop",
				hostility: "friendly",
				level: 40,
				stats: {
					maxHealth: 250,
					defence: 11,
				},
				roles: [
				],
				chat: {
					notUnlockedRoles: "I could have y' done for trespassin'.",
					chooseText: "I don't 'ave time for you. The city won't feed itself.'",
					receiveTavernGood: "I remember growing those beets. Now look what you've done to 'em",
					//alt choose text : What more d'you want?
				},
			},
			{
				x: 2891,
				y: 315,
				image: "guard2",
				template: NPCTemplates.guard,
			},
			{
				x: 3120,
				y: 315,
				image: "guard2",
				template: NPCTemplates.guard,
			},
		],

		villagers: [
			{
				image: "blackSheepRight",
				boundary: {
					x: 5210,
					y: 780,
					width: 270,
					height: 120,
				},
				name: "tbd",
				nameHidden: function () {
					return true;
				},
				level: 50,
				stats: {
					maxHealth: 40,
					defence: 100,
					walkSpeed: 100,
				},
				hostility: "neutral",
				chat: {
					notUnlockedRoles: "BAA."
				},
				rotationImages: {
					left: "blackSheepLeft",
					right: "blackSheepRight"
				},
				canBeOnLead: false,
			},
			{
				boundary: {
					x: 5610,
					y: -60,
					width: 340,
					height: 630,
				},
				image: "farmerLennie",
				name: "Farmer Lennie",
				hostility: "friendly",
				level: 30,
				stats: {
					maxHealth: 200,
					defence: 7,
		            walkSpeed: 119,
				},
				roles: [
				],
				chat: {
					notUnlockedRoles: "Farming's no easy job but someone's gotta do it! I guess I'm that someone.",
					chooseText: "Don't stand too close! We're not friends.",
					tavernGoodsDelivered: "Just what I needed! The taste of wheat gets dull after a while.",
					//notUnlockedRoles: "It's really som'ing, to live off the fatta the lan’.",
				},
			},
			{
				speciesTemplate: SpeciesTemplates.sheep,
				rotationImages: {
					left: "sheepLeft",
					right: "sheepRight"
				},
				name: "Sheep",
				hostility: "neutral",
				repeatNumber: 2,
				stats: {
					damage: 14,
					walkSpeed: 65,
					swimSpeed: 25,
					iceSpeed: 150,
					maxHealth: 85,
					defence: 5,
					range: 75,
					reloadTime: 1250,
					healthRegen: 1,
					lootTime: 10000,
					respawnTime: 20000,
				},
			},
		],

		enemies: [
			//
			// general enemies:
			//
			{
				spawnLocations: "villager",
				template: EnemyTemplates.eaglecrest.chicken,
				repeatNumber: 13,
			},
			{
				spawnLocations: [{x: 1989, y: 3168, width: 3210, height: 1700}], // central river (entrance to frog queen's base // river's blessing)
				template: EnemyTemplates.eaglecrest.toad,
				repeatNumber: 18,
			},
			{
				spawnLocations: [{x: -164, y: 401.6, width: 7574.4, height: 5718},], // whole map
				template: EnemyTemplates.eaglecrest.toad,
				repeatNumber: 22,
				canBeShown: function () {
					return Player.quests.npcProgress.eaglecrest[2] >= 3; // so they don't interfere with first part of overdraft
				},
			},
			{
				spawnLocations: [{x: -164, y: 401.6, width: 7574.4, height: 5718},], // whole map
				template: EnemyTemplates.eaglecrest.armouredToad,
				repeatNumber: 2,
				canBeShown: function () {
					return Player.quests.npcProgress.eaglecrest[2] >= 3; // so they don't interfere with first part of overdraft
				},
			},
			{
				spawnLocations: "villager",
				template: EnemyTemplates.eaglecrest.zararanath,
				canBeShown: function () {
					return Random(0, 365) === 0;
				},
			},
			{
				spawnLocations: "villager",
				template: EnemyTemplates.eaglecrest.coyote,
				canBeShown: function () {
					return Player.quests.npcProgress.eaglecrest[2] >= 3; // so they don't interfere with first part of overdraft
				},
				repeatNumber: 1,
			},
			// coyotes (tall grass)
			{
				x: [5831.2, 6333.9, 5749.8],
				y: [3402.9, 3004.1, 2726.3],
				template: EnemyTemplates.eaglecrest.coyote,
			},
			{
				x: 6200,
				y: 4100,
				template: EnemyTemplates.eaglecrest.coyoteWrangler,
			},
			{
				x: 6300,
				y: 3800,
				template: EnemyTemplates.eaglecrest.coyote,
				name: "Pack Coyote",
				association: "coyotePack",
				canBeShown: function () {
					 return Player.bossesKilled.coyoteWrangler !== Game.fullDate;
				}
			},
			{
				x: 5770,
				y: 4200,
				template: EnemyTemplates.eaglecrest.coyote,
				name: "Pack Coyote",
				association: "coyotePack",
				canBeShown: function () {
					 return Player.bossesKilled.coyoteWrangler !== Game.fullDate;
				}
			},
			{
				x: 6000,
				y: 4000,
				template: EnemyTemplates.eaglecrest.coyote,
				name: "Pack Coyote",
				association: "coyotePack",
				canBeShown: function () {
					// must have killed the pack once before
					return Player.quests.questProgress.coyoteWranglers > 0 && Player.bossesKilled.coyoteWrangler !== Game.fullDate;
				}
			},
			{
				x: 6031.8, y: 4363.1,
				template: EnemyTemplates.eaglecrest.coyote,
				name: "Pack Coyote",
				association: "coyotePack",
				canBeShown: function () {
					// must have killed the pack twice before
					return Player.quests.questProgress.coyoteWranglers > 1 && Player.bossesKilled.coyoteWrangler !== Game.fullDate;
				}
			},
			{
				x: 6313.9, y: 4155.3,
				template: EnemyTemplates.eaglecrest.coyote,
				name: "Pack Coyote",
				association: "coyotePack",
				canBeShown: function () {
					// must have killed the pack three times before
					return Player.quests.questProgress.coyoteWranglers > 2 && Player.bossesKilled.coyoteWrangler !== Game.fullDate;
				}
			},
			{
				x: 6482.1, y: 4351.4,
				template: EnemyTemplates.eaglecrest.coyote,
				name: "Pack Coyote",
				association: "coyotePack",
				canBeShown: function () {
					// must have killed the pack four times before
					return Player.quests.questProgress.coyoteWranglers > 3 && Player.bossesKilled.coyoteWrangler !== Game.fullDate;
				}
			},
			{
				x: 6529.3, y: 3950.2,
				template: EnemyTemplates.eaglecrest.coyote,
				name: "Pack Coyote",
				association: "coyotePack",
				canBeShown: function () {
					// must have killed the pack five times before
					return Player.quests.questProgress.coyoteWranglers > 4 && Player.bossesKilled.coyoteWrangler !== Game.fullDate;
				}
			},
			{
				x: 5740.3, y: 4029.5,
				template: EnemyTemplates.eaglecrest.coyote,
				name: "Pack Coyote",
				association: "coyotePack",
				canBeShown: function () {
					// must have killed the pack six times before
					return Player.quests.questProgress.coyoteWranglers > 5 && Player.bossesKilled.coyoteWrangler !== Game.fullDate;
				}
			},
			{
				x: 6282.4, y: 3984.7,
				template: EnemyTemplates.eaglecrest.coyote,
				name: "Pack Coyote",
				association: "coyotePack",
				canBeShown: function () {
					// must have killed the pack seven times before
					return Player.quests.questProgress.coyoteWranglers > 6 && Player.bossesKilled.coyoteWrangler !== Game.fullDate;
				}
			},
			// flower forest
			{
				spawnLocations: [{x: -69.8, y: 4254.4, width: 1651.9, height: 1543.3}], // flower forest
				template: EnemyTemplates.eaglecrest.beeSwarm,
				repeatNumber: 5,
			},
			{
				x: 1050,
				y: 5400,
				template: EnemyTemplates.eaglecrest.baronFoxglove,
			},
			// farmyard
			{
				spawnLocations: [{x: 5618.2, y: 1085.3, width: 344.6, height: 991}], // flower garden (farm)
				template: EnemyTemplates.eaglecrest.beeSwarm,
				hostility: "neutral",
				repeatNumber: 2,
			},
			{
				// farmyard animals on animal island
				spawnLocations:  [{x: 6454.2, y: 1357.5, width: 115, height: 841.6}, {x: 6763, y: 2450.4, width: 157, height: 169.2}, {x: 6574.2, y: 1828.6, width: 120.1, height: 575.2},],
				template: EnemyTemplates.eaglecrest.chicken,
				repeatNumber: 7,
			},
			// crystals for the crystal island
			{x: [4646, 4290], y: [5781, 5665], template: EnemyTemplates.eaglecrest.crystalLarge},
			{x: [4377, 4439, 5042, 4738, 4081, 3901, 3662], y: [5475, 5834, 5778, 5353, 5901, 5961, 5239], template: EnemyTemplates.eaglecrest.crystalSmall},
			//
			// quest enemies:
			//
			// enemies with jester
			{
				x: [359.9, 251, 182.8, 650.9],
				y: [1950.2, 2451.6, 2103, 2042.6],
				template: EnemyTemplates.eaglecrest.toad,
				respawnOnDeath: false,
				canBeShown: function () {
					return Player.quests.possibleQuestArray.includes("A Fool's Errand");
				},
			},
			{
				x: 570.9,
				y: 2286.6,
				template: EnemyTemplates.eaglecrest.toad,
				health: 26,
				respawnOnDeath: false,
				canBeShown: function () {
					return Player.quests.possibleQuestArray.includes("A Fool's Errand");
				},
			},
			// overdraft
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
			// temp
			/*{
				x: 1000,
				y: 1000,
				template: EnemyTemplates.eaglecrest.demolitionistDarrow,
			},*/
		],

		infoPoints: [
			// the statue shown depends on the player's "plains progress", which is measured in onAreaLoad
			{
				x: 2594,
				y: 1299,
				image: "statue1",
				name: "I",
				onTouchChat: "This looks like the beginnings of a statue under construction. It is entitled 'I'.",
				canBeShown: function () {
					return Player.quests.questProgress.plainsStatueProgress === 0;
				}
			},
			{
				x: 2594,
				y: 1271,
				image: "statue2",
				name: "I",
				onTouchChat: "This looks like the beginnings of a statue under construction. It is entitled 'I'.",
				canBeShown: function () {
					return Player.quests.questProgress.plainsStatueProgress === 1;
				}
			},
			{
				x: 2591,
				y: 1241,
				image: "statue3",
				name: "I",
				onTouchChat: "The statue is still under construction. It is entitled 'I'.",
				canBeShown: function () {
					return Player.quests.questProgress.plainsStatueProgress === 2;
				}
			},
			{
				x: 2621,
				y: 1226,
				image: "statue4",
				name: "I",
				onTouchChat: "The statue is still under construction. It is entitled 'I'.",
				canBeShown: function () {
					return Player.quests.questProgress.plainsStatueProgress === 3;
				}
			},
			{
				x: 2586,
				y: 1206,
				image: "statue5",
				name: "I",
				onTouchChat: "The statue is entitled 'I'.",
				canBeShown: function () {
					return Player.quests.questProgress.plainsStatueProgress === 4;
				}
			},
			{
				x: 7264,
				y: 3300,
				image: "wateringCan",
				name: "Watering Can",
				onTouchChat: "These rocks don't look like they need watering...",
			},
		],

		things: [
			{x: [3117.2, 2883.4], y: [222.8, 222.8], image: 'eagleStatue', name: 'Eagle Statue', crop: {x: 0,y: 2,width: 150,height: 188}, canBeShown: function () {
				return Player.reputation.eaglecrestCity.level === 5; // honoured
			}},
			// by statue
			{x: 2571.1, y: 2725.2, image: 'eagleStatue', name: 'Eagle Statue', crop: {x: 0,y: 2,width: 150,height: 188}, canBeShown: function () {
				return Player.reputation.eaglecrestCity.level === 5; // honoured
			}},
			// lake north west
			{x: 2274.2, y: 4469.9, image: 'eagleStatue', name: 'Eagle Statue', crop: {x: 0,y: 2,width: 150,height: 188}, canBeShown: function () {
				return Player.reputation.eaglecrestCity.level === 5; // honoured
			}},
			// lake south west
			{x: 2109.2, y: 1544.4, image: 'eagleStatue', name: 'Eagle Statue', crop: {x: 0,y: 2,width: 150,height: 188}, canBeShown: function () {
				return Player.reputation.eaglecrestCity.level === 6; // venerated
			}},
			// prarie
			{x: 1433, y: 3498.7, image: 'eagleStatue', name: 'Eagle Statue', crop: {x: 0,y: 2,width: 150,height: 188}, canBeShown: function () {
				return Player.reputation.eaglecrestCity.level === 6; // venerated
			}},
			// lake south east
			{x: 4804.9, y: 4222.6, image: 'eagleStatue', name: 'Eagle Statue', crop: {x: 0,y: 2,width: 150,height: 188}, canBeShown: function () {
				return Player.reputation.eaglecrestCity.level === 6; // venerated
			}},

			//greenery

{x: [2362, 2336, 2302.9, 2332.7, 2362.3, 2066.8, 2040.5, 2012.6, 2040.6, 2071.5, 2072.7, 2679, 2630, 2654.5, 2682.3, 2934.1, 2955, 2972.5, 2927.1, 2947.9, 2878.5, 2907.4, 2868.5, 2823.6, 2827.2, 2586.4, 2586.4, 2623.1, 2601.2, 2633.2, 1890.3, 1867, 1847.4, 1896.2, 1863.6, 1833, 1848.6, 1875.4, 1903.6, 2307.8, 2967.2,], y: [916.7, 933.8, 954.6, 954.6, 933.8, 907.4, 931.9, 954.6, 954.6, 928.9, 961.6, 1543.1, 1546.6, 1572.8, 1567.9, 1198.9, 1226.7, 1242.5, 1221.7, 1242.5, 929.8, 948.1, 947.8, 923.8, 952, 2068.9, 2096.9, 2096.9, 2106.5, 2106.5, 1822.1, 1848.8, 1873.7, 1852.9, 1874.9, 1893.3, 1929.8, 1899.6, 1871.4, 919.8, 1271,], image: 'plainsShrub1', name: 'plainsShrub1'},


{x: [3290.8, 3262.7, 3240.2, 1876.9, 1905.2, 1926, 1949, 1960.4, 1929, 1891.4, 1914.1, 3110, 3129.6, 3156.9, 3169.7, 3140.4, 3111, 3085.5, 3080.2, 3100.5, 3107.9, 2980, 3007.6, 3029, 3019.9, 3009.4, 2992.6, 2961.4, 2952.2, 2952.2, 2098.5, 2068.3, 2040.3, 2014.1, 2028.7, 4640.8, 4674.7, 4700.8, 4690.1, 4638.8, 5548.2, 5569.2, 5605.3, 5624.9, 5586.5, 5553.1, 4258.7, 4280.4, 4301.3, 4333.1, 4365.5, 4389.3, 4347.3, 4319.3, 4295.2, 4243.1, 4223.3, 3827.3, 3789.8, 3741.4, 3696.4, 3682.6, 3828.3, 3652.5, 3849.5, 3876.1, 3139.7, 3113.3, 3092.7, 3062.9, 2723, 2705.2, 2673.7, 2650.8, 2612.3, 2895.6, 2936.9, 2963.9, 3012.9, 2959.3, 2944, 2846.7, 2888.4, 2940.5, 3017.5, 2867.8, 2997, 3450.7, 3478.7, 3505.3, 3482.4, 3541.8, 3420.4, 3435.1, 3986.7, 4023.8, 4065.3, 4037.3, 4095.2, 4067.2, 4685.1, 4717.3, 4753.7, 4788.7, 4840.1, 4825.4, 4809.5, 4783.8, 4755.8, 4722.5, 4839.9, 4839.9, 3754.5, 3722.5, 3806, 3647.2, 3625.3, 3990.8, 4011.6, 4030, 4036.7, 4075.9, 4056.1, 4030.3, 3947.8, 3925.9, 3960.6, 3996.9, 3962.2, 4629.5, 4728.9, 4689.5, 4728, 1339.9, 1305, 1289.6, 1269.3, 1293.2, 1317.3, 1341.5, 1260.9, 1548.3, 1528, 1519.3, 1505.1, 1507.6, 1519.7, 1542.1, 1550.8, 718.9, 651, 659.3, 685, 707, 683.8, 634.8, 656.5, 694.9, 721.2, 761.1, 785.3, 818.5, 719.7, 866, 783.1, 826.6, 878.6, 916.5, 935.4, 901.1, 867.2, 826.7, 786.7, 821.2, 862.1, 893.1, 923.1, 957.2, 1002.7, 1384, 1401.1, 1419.5, 1435.4, 1456, 1410.5, 1382.7, 1365, 1443.4, 1477.3, 1459.8, 3246.3], y: [628.9, 652, 677.5, 575.3, 586.2, 609.4, 631.5, 587.3, 561.3, 555.1, 555.1, 1138.3, 1156.9, 1184.2, 1231.8, 1210, 1180.6, 1155.1, 1117.7, 1097.4, 1068.6, 1980.7, 1953, 1931.7, 1956.3, 1991.8, 2014.1, 2051.3, 2020.7, 1979.7, 2191.3, 2209.5, 2237.5, 2263.8, 2225.1, 1997.4, 1983, 1950.4, 2010.6, 2017.9, 2055.4, 2076.4, 2113.4, 2148, 2132.6, 2104.3, 3513.6, 3546.6, 3565.5, 3581.3, 3593.2, 3617, 3612.4, 3584.4, 3560.3, 3535.4, 3516.2, 3392.2, 3392.2, 3392.2, 3392.2, 3417.9, 3412, 3435.8, 3431.4, 3447.5, 3630.9, 3657.3, 3677.9, 3690.2, 3742.9, 3762.1, 3793.6, 3814.9, 3814.9, 4056.1, 4090.4, 4117.4, 4117.4, 4083.1, 4068.7, 4068.7, 4105.1, 4134.5, 4159, 4100.3, 4148.8, 4259.6, 4284.1, 4303.7, 4324.5, 4324.5, 4285.3, 4300, 4317.2, 4297.6, 4314.5, 4337.2, 4272.3, 4293.3, 4017.8, 4003.1, 3998.2, 3973.7, 3922.3, 3954.5, 3987.9, 4024.1, 4024.1, 4024.1, 3968, 4001.2, 3413.8, 3413.8, 3413.8, 3422.9, 3438.3, 2565.7, 2586.5, 2608.5, 2623.8, 2638.5, 2607.8, 2577.6, 2548.6, 2521.4, 2526.3, 2555.7, 2571.8, 2040.1, 1970.5, 1982.9, 1927.4, 1416.3, 1442.2, 1457.6, 1477.9, 1502.6, 1478.4, 1454.3, 1500.4, 1976.4, 1988.7, 1996.4, 2012.6, 2053.5, 2042.4, 2020, 2006.3, 2918.7, 2932.6, 2917.3, 2937, 2959, 2991, 2991, 2970.4, 2970.4, 2970.4, 2941, 2923.9, 2923.9, 2991.3, 2929, 683.3, 683.3, 683.3, 717.2, 736.1, 721.8, 703.9, 702.9, 702.9, 709.9, 722.8, 732.3, 746.3, 756.4, 756.4, -48.1, -27.5, -5.6, 12, 29.2, 17, -10.9, -26.8, 41.4, 56.1, 56.1, 654], image: 'plainsShrub3', name: 'plainsShrub3'},


			// misc again
			{x: 2789.4, y: 287.1, image: 'eaglecrestBanner', name: 'Eaglecrest Banner'},
			{x: 3217.2, y: 287.1, image: 'eaglecrestBanner', name: 'Eaglecrest Banner'},
			{x: [2680.6, 2652.2, 3311.3, 3338.6, 3680.4, 3707.7, 2284.8, 2316.7], y: [312.7, 341.1, 306.9, 334.2, 331.6, 299.8, 307.3, 337.8], image: 'shrub1', name: 'shrub1'},
			// misc again
			{x: 6581.3, y: 2435.8, image: 'hayBale1', name: 'Hay Bale'}, // more hay bales..
			{x: 6743, y: 1691.3, image: 'hayBale2', name: 'Hay Bale'}, // more hay bales..
			{x: [6685.6, 6835.1, 5282.2], y: [1813.6, 2647.2, 748.4], image: 'waterTrough', name: 'Trough'},
			{x: [4294, 4301.3, 2109.5, 6586.5], y: [116.7, 1936.3, 5302.8, 5864.4], image: 'catBowlEmpty', name: 'Cat Bowl'},
			// barrels and crates and stepping stones
			{x: [1454.9, 1357.2, 2372.9, 2436.7, 2873.5, 5845.3, 5781.6, 5433.7, 2249.3, 3710.1, 3647.4, 3577.3, 3913.7, 7408.9, 7409.9, 7339, 3052]
, y: [234.4, 290.3, 3639.7, 3639.7, 4149.4, 5802.3, 5802.3, 5943.1, 3641, 577.9, 525.7, 525.7, 529.7, 1894.8, 2019.7, 1924.3, 4928.1], image: 'barrel', name: 'Barrel'},
			{x: [5572.8, 5710.3, 2274.5, 2346.2, 2346.2, 3118.5, 2308.2, 2363.7, 1455.7, 1390.6, 1317.1, 1371, 3499.1, 4324.6, 4392.7, 4478.3, 6456, 6522.6, 7411.7, 7440, 2908.5, 2806.8, 2841.7, 4276.1, 6787, 6309.5]
, y: [5764.6, 5817.5, 5095.4, 5119.1, 5027, 3542, 3653.3, 3443.2, 300.7, 240.6, 240.6, 174.7, 536, -120, -97.1, -112.6, 1275.4, 1321, -92.1, -24, 4203.5, 4170.2, 4226, 353.6, 1992.9, 2188.4], image: 'crate', name: 'Crate'},
			{x: 7320.8, y: 394.3, image: 'flourSack', name: 'Flour Sack'},
			{x: 7174.2, y: 416.8, image: 'flourSack', name: 'Flour Sack'},
			{x: [5919.7, 5669.8, 5730.5, 5520.3, 4830.9, 4162, 851.1, -183.9], y: [1132.1, 1754.3, 2050.6, 220.7, 712.8, 1204.6, 1120.6, 6081.3], image: 'wateringCan', name: 'Watering Can'},
			{x: [5933.8, 5063.7, 6461.3], y: [712.5, 590.4, 227.3], image: 'wheelBarrowRed', name: 'Red Wheelbarrow'},
			{x: [5769, 4731.6, 5098.3, 4271.1, 4863, 5845.3, 6534.3, 6244.2, 7012.6, 7078.5, 6355.6, 6813.2], y: [79.1, 664.9, 347.1, 678.7, 377.3, 508.6, 568.7, 817.4, 1456.3, 2179.6, 1747.1, 2701.4], image: 'scarecrow', name: 'Scarecrow'},
			{x: [5161.4, 6289.7, 6331.6, 5795.1], y: [134.8, 872.3, 872.3, 362.8], image: 'spade', name: 'Spade'},
			{x: [6747, 7074.5, 7042.5, 6013.1, 5207.5, 6011.3, 7212.6, 4913.9, 4264.9, 4308.5, 4018.7, 4810.4, 6379.9, 6333.4], y: [943.5, 812.8, 1375.3, 292.8, 181.3, 982, 2024.8, 1908.5, 2884.4, 2917.9, 2939.9, 3144.4, 5367.9, 5309.3], image: 'ironBucket', name: 'Iron Bucket'},
			{x: [5778.9, 6001.9, 5633.6, 6034.2, 5901.4, 5642.1], y: [1020, 1251.3, 1457.9, 1777.3, 2004.6, 2041.7], image: 'beehive', name: 'Beehive'},
			{x: 6897.3, y: 634.1, image: 'hayWagon', name: 'Hay Wagon'},
			{x: 6565.3, y: 869.3, image: 'hayWagon', name: 'Hay Wagon'},
			{x: 6908.1, y: 879.4, image: 'hayBale1', name: 'Haybale'},
			{x: [7104.7, 7415.5, 5420.4, 5313.1], y: [1160.2, 752.9, 974.8, -86.7], image: 'hayBale2', name: 'Haybale'},
			{x: 6866.2, y: 295, image: 'waterWheelOvergrown', name: 'Waterwheel'},
			{x: 6282.1, y: -51.8, image: 'target', name: 'Archery Target'},
			{x: [-115.4, -83.5, -45.6, 19, 88.3, -5.1, 36, 154.1, 230.4, 6851.9, 6741.7, 6827, 6748.1, 6794.6, 6464.7, 6574, 6982.9]
, y: [1227.5, 1415, 737.6, 703.2, 1719.3, 1597.6, 1663.9, 1759.5, 1772.2, 4858.8, 4950.3, 5046.6, 5127.5, 5280.7, 5030.9, 4917.7, 5121.9],
image: 'steppingStone', name: 'Stepping Stone', z: -1, walkable: true,},
			// rocks for cave
			{x: [7470, 7168.3, 7221.8, 7176, 7346.8, 7434.1, 7359.9, 7419.3, 7361.1, 7403.5, 7361, 7405.9, 7370.8, 7392.4, 7436.5, 7440, 7390, 7341.8], y: [4505.8, 2851.9, 3031.5, 3243.7, 3457.7, 3377.6, 3303.3, 3209.6, 3097.5, 2921, 2821.2, 2641.6, 4105.2, 4210.3, 4285.5, 3708.4, 3768.7, 2719.6], image: 'rockSpike', name: 'Rock Spike', collision: {relativeX: 0, relativeY: 105, width: 100, height: 20}},
			// jester quest
			// aaaaaaaaaa tbd make sparkle if quest is active
			{x: 302, y: 671, z: -0.5, image: 'jesterTriangle', name: 'Triangle', canBePickedUp: {
				channelTime: 1000, itemType: "item", itemId: 59, onPickUp: function () {Player.quests.questProgress.jesterTriangle = true;}
			}, canBeShown: function () {
				return !Player.quests.questProgress.jesterTriangle;
			}},
			{x: 2763, y: 3632, orderOffsetY: -10, image: 'jesterConfetti', name: 'Confetti Cannon', canBePickedUp: {
				channelTime: 1000, itemType: "item", itemId: 60, onPickUp: function () {Player.quests.questProgress.jesterConfetti = true;}
			}, canBeShown: function () {
				return !Player.quests.questProgress.jesterConfetti;
			}},
			{x: 3574, y: 4444, orderOffsetY: -10, image: 'jesterBugle', name: 'Bugle', canBePickedUp: {
				channelTime: 1000, itemType: "item", itemId: 58, onPickUp: function () {Player.quests.questProgress.jesterBugle = true;}
			}, canBeShown: function () {
				return !Player.quests.questProgress.jesterBugle;
			}},
			/*{x: 6393.7, y: 4332.1, orderOffsetY: -10, image: 'jesterBall', name: 'Juggling Ball', onInteract: function () {
				Game.hero.channel(function () { // tbd generalise this as a property of Things ?
					if (Dom.inventory.give(Items.item[57]) === false) {
						Dom.chat.insert("<i>Your inventory is full! Try again when you have space.</i>");
					}
					else {
						Player.quests.questProgress.jesterBall1 = true;
						// remove this object from the map
						let removeObj = Game.things.find(thing => thing.name === "Juggling Ball" && thing.isTouching(Game.hero));
						Game.removeObject(removeObj.id, "things");
					}
				}, [], 1000, "Picking item up");
			}, canBeShown: function () {
				return !Player.quests.questProgress.jesterBall1;
			}},*/
			{x: 6393.7, y: 4332.1, orderOffsetY: -10, image: 'jesterBall', name: 'Juggling Ball', canBePickedUp: {
				channelTime: 1000, itemType: "item", itemId: 57, onPickUp: function () {Player.quests.questProgress.jesterBall1 = true;}
			}, canBeShown: function () {
				return !Player.quests.questProgress.jesterBall1;
			}},
			{x: 5639.3, y: 3690.3, orderOffsetY: -10, image: 'jesterBall', name: 'Juggling Ball', canBePickedUp: {
				channelTime: 1000, itemType: "item", itemId: 57, onPickUp: function () {Player.quests.questProgress.jesterBall2 = true;}
			}, canBeShown: function () {
				return !Player.quests.questProgress.jesterBall2;
			}},
			{x: 6159, y: 2880.5, orderOffsetY: -10, image: 'jesterBall', name: 'Juggling Ball', canBePickedUp: {
				channelTime: 1000, itemType: "item", itemId: 57, onPickUp: function () {Player.quests.questProgress.jesterBall3 = true;}
			}, canBeShown: function () {
				return !Player.quests.questProgress.jesterBall3;
			}},
			// river idols / puzzle stuff
			{x: [-89, -89, 50.2, -1, 57.1, 1779, -9.5, -4.6, -89.8, 1785.1, 2369.8, 2241.9, 2497.3, 2667.3, 2065.4, 3319.9, 5207.9, 5303.8, 5437.7, 5089.6, 4377.3, 6891.7, 6969, 6614.6, 7074.1, 7074.1, 7076.4, 6351.2, 5097.8, 4534.6, 3993.3, 3864.3], y: [482.3, 23, 1454.5, 1249, 989.1, 2272, 3657, 3307.7, 5944.1, 4795.9, 5726.4, 5964.9, 5964.2, 6060.9, 6060.9, 5670.8, 4677, 4981.5, 4784.6, 4888.5, 4848.7, 5336.5, 4874.9, 5013.1, 4060.6, 3791.6, 2637.4, 2397.4, 2194, 2209.7, 2122.4, 759.6],
				image: 'riverIdol',
				name: 'River Idol',
				crop: {
					x: 0,
					y: 0, 
					width: 67,
					height: 177,
				}
			},
			// forest trees
			{x: -203.8, y: 2944.9, image: 'tree1A', name: 'Tree'},
			{x: -131.1, y: 3686.7, image: 'tree2A', name: 'Tree'},
			{x: -180.1, y: 3301.2, image: 'tree2A', name: 'Tree'},
			{x: -205, y: 3180.7, image: 'tree3A', name: 'Tree'},
			{x: -216.9, y: 3557.7, image: 'tree3A', name: 'Tree'},
			// misc decorations
			{x: [962.4, 1139, 1141.7, 957, 1564.4, 1126, 1121.8, 972.4, 979.3, -42.6, -72.2, 92.7, 542.7, 805.3, 876.4, 960.6, 1520.9, 1443.9, 1633, 1508.4, 1554.7, 49.4, 49.4, 7351.8, 3764.2, 3534.9, 3643.9, 3862, 5159.4, 5151.5, 5991.6, 5897.4, 5702.4]
, y: [1526.3, 1526.3, 1815.1, 1815.1, 1864.8, 1271.4, 1139.9, 1270, 1143.5, 3965.8, 4012.5, 4078.1, 711.4, -38.1, 20.7, -38.3, 1783.8, 1748.8, 2707.2, 2496.2, 2854.3, 2173.9, 2377.1, 1370.3, 2395.2, 2460.4, 2358.3, 2504.5, 2535.7, 2674.6, 1901, 924.6, 2110.4], image: 'flowerPot', name: 'Flower Pot'},
			{x: 3263.1, y: 2152.9, z: -1, image: 'sewerEntrance', name: 'Sewer Entrance'},
			{x: 1833.2, y: 213, image: 'signTrain', name: 'Train Sign'},
			{x: 4189, y: 764, image: 'signFarm', name: 'Farm Sign'},
			{x: 4000, y: 1545, image: 'signFarm', name: 'Farm Sign'},
			{
				x: [580, 850, 1120],
				y: [218, 218, 218],
				orderOffsetY: -100, // tbd change to make it feel more 3d ? or probs bette rto add collision acc, when nested collisions r (soon) a thing xo
				name: "Train Carriage",
				image: "trainCarriage",
				crop: {
					x: 0,
					y: 0,
					width: 450,
					height: 450
				},
				// for hero / npc "mounting" in carriage
				rideAdjustX: -27,
				rideAdjustY: 25,
			},
			{
				x: 315,
				y: 218,
				orderOffsetY: -100,
				name: "Train Driver's Carriage",
				image: "trainFrontLeft",
				crop: {
					x: 0,
					y: 0,
					width: 450,
					height: 450
				},
				// tbd make the driver mount this ?
			},
			{
				x: 5795, y: 5780,  image: 'gnome', name: 'Gnome',
				onInteract: function () {
					if (typeof User.progress.gnomesFound === "undefined") {
						User.progress.gnomesFound = [];
					}
					if (!User.progress.gnomesFound.includes("blue")) {
						Dom.chat.insert("<i>You found a blue gnome ⚬°</i>")
						User.progress.gnomesFound.push("blue");
					}
				}
			},
			{
                x: [2667.7, 2054.5, 2055.1, 2150.1, 2363.3, 2291.2, 2020.4, 4543.8],
                y: [484.3, 1052.7, 1432.1, 1764.4, 2633.2, 3173.4, 3526, 4270.5],
                name: "Lantern",
				imageDay: "lanternDayRight",
				imageNight: "lanternNightRight",
				lightEmit: {onlyAtNight: true},
            },
			{
                x: [3099, 2434.9, 2819.4, 2306.6, 2555.5, 2627.6, 2557.2, 5077.8, 2603.3, 2244, 5045.3, 2246.9, 4788.8, 482.5, 762.8, 1415.4, 1105.9],
                y: [377.4, 623.7, 625.9, 1155.9, 1908.7, 2445.1, 2958, 3411.8, 3424.6, 3754.2, 4095.2, 4285.4, 4417.7, 518.1, 518.1, 522.3, 522.3],
                name: "Lantern",
				imageDay: "lanternDayLeft",
				imageNight: "lanternNightLeft",
				lightEmit: {onlyAtNight: true},
            },
			{
				x: [371.8, 376.1, 1212.3, 1259, 1298.4, 570.1, 1350.9, 151.4, 491.6, 1172.3, 1080.4, 2685.8, 4642.7],
				y: [2113, 2483.6, 2678.2, 2250, 3291.9, 3816.1, 4547.9, 4734.5, 5278.4, 5702.8, 4823, 5025.7, 2913.1],
				orderOffsetY: -10,
				name: "Sprinkler",
				image: "sprinkler",
				crop: {
					x: 0,
					y: 0,
					width: 120,
					height: 120
				},
				animation: {
					type: "spritesheet",
					frameTime: 90,
					imagesPerRow: 4,
					totalImages: 14,
				},
			},
			{
				x: 4141,
				y: 2816,
				name: "Well",
				image: "well",
				onInteract: function () {
				    if (Player.quests.prog.eaglecrest[13].stepProgress[1]) {
						Game.hero.channel(function () {
				            Game.loadArea("eaglecrestWell", {x: 760, y: -300});
				        }, [], 1500, "Entering well");

				    }
				    else {
				        Dom.chat.npcBanner(false, "<i>Looks like a pretty deep well...</i>", true);
				    }
				}
			},
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
								Dom.quests.active();
								Dom.chat.insert("You found a <b>Blood-Red Crystal</b> in the crate.");
							}
						}
						else {
							Dom.chat.insert("You have already looted that crate!");
						}
					}, [], 1666, "Rummaging through crate", {cancelChannelOnDamage: true});
				},
				canBeShown: function () {
					return Player.quests.completedQuestArray.includes("Snakes and the City") && Event.event === "Samhain";
				}
			},
		],

		collisions: [
			{ // well
				x: 4141,
				y: 2926,
				width: 120,
				height: 1,
			},
			{ // statue
				x: 2588,
				y: 1310,
				width: 146,
				height: 10,
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

		tagGameAllowed: true,

		song_day: "assets/music/Eaglecrest.mp3",
		song_night: "assets/music/Eaglecrest.mp3",

		checkpoint: false,

		lootArea: "eaglecrest",
		lootTier: 1,

		indoors: true,

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
			iceTiles: [32, 40, 48],
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
			tiles: {normal: "assets/tilemap/eaglecrest.png", christmas: "assets/tilemap/eaglecrestChristmas.png"},
			yellowSnakeRight: {normal: "assets/enemies/yellowSnake.png"},
			yellowSnakeLeft: {normal: "assets/enemies/yellowSnake.png", flip: "vertical"},
			snakeMan: {normal: "assets/npcs/soothsssayer.png"},
			eaglecrestGhost: {normal: "assets/enemies/eaglecrestGhost.png"},
			eaglecrestGhost2: {normal: "assets/enemies/eaglecrestGhost2.png"},
			melee: {normal: "assets/projectiles/melee.png"},
			crateSamhain: {normal: "assets/objects/crateSamhain.png"}, // tbd add a crate
			cauldron: {normal: "assets/objects/cauldronSamhain.png"},
		},

		callAreaJoinOnInit: true,
		onAreaJoin: function () {
			if (Event.event === "Samhain") {
				// samhain snakes
				let no = Random(10,30); // num of snakes
				for (let i = 0; i < no; i++) {
					Game.villagers.push(new Villager(Game.prepareNPC({
						template: EnemyTemplates.eaglecrest.snake,
					}, "villagers")));
				}

				if (Player.quests.questProgress.bloodMoonUnlocked) {
					Areas.samhainLair.indoors = false;
					Areas.samhainLair.weather = "bloodRain";
					Event.updateTime("samhainLair");
					Weather.updateVariables();
				}
			}
			else {
				Game.loadArea("eaglecrestTavern", {x: 1158, y: 169});
			}
		},

		callAreaLeaveOnLogout: true,
		onAreaLeave: function (logout) {
			// in case they died on the blood moon is coming quest
			if (Event.time !== "bloodMoon") {
				Areas.samhainLair.weather = undefined;
				Areas.samhainLair.indoors = true;
			}

			// abandon blood moon is coming quest
			if (Player.quests.activeQuestArray.includes("The Blood Moon is Coming...")) {
				let chat = "<b>The Blood Moon is Coming...</b> has been failed. Restart the quest by speaking to <b>The Soothsssayer</b>.";
				if (logout) {
					Player.chatOnJoin.push(chat);
				}
				else {
					Dom.chat.insert(chat);
				}
				Dom.quest.abandon(Quests.eaglecrest[6]);
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
				name: "The Soothsssayer",
				nameHidden: function () {
					return !Player.quests.completedQuestArray.includes("Snaking Bad");
				},
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
							{item: Items.trinket[6], cost: 35, costCurrency: 4, buyFunction: BuyFunctions.samhainItemBuy}, // coffin trinket
						],
						role: "merchant",
						chooseText: "I'd like to turn in some Samhain Marks for items.",
						shopGreeting: "Now there'ssss the Blood Moon, I need <b>Sssssamhain Marksssss</b> for the next ssstage of my plan. There'ssss itemss in it for you of coursssse...",
						roleRequirement: function () {
							return Event.time === "bloodMoon";
						},
					},
					{
						quest: Quests.eaglecrest[3],
						role: "questFinish",
					},
					{
						quest: Quests.eaglecrest[4],
						role: "questStartFinish",
					},
					{
						quest: Quests.eaglecrest[5],
						role: "questStartFinish",
					},
					{
						quest: Quests.eaglecrest[6],
						role: "questStart",
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
				template: NPCTemplates.soothsssayerCauldron
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

	catLife: {
		id: 22,

		data: {
			name: "Eaglecrest Elixirs Storerooms",
			displayOnEnter: true,
		},

		song_day: "assets/music/Eaglecrest.mp3",
		song_night: "assets/music/Eaglecrest.mp3",

		checkpoint: false,

		lootArea: "eaglecrest",
		lootTier: 1,

		indoors: true,

		// start race function - called by initLap1 to announce the start of the race, start timer, etc.
		startRace: function () {
			Game.displayOnCanvas("Ready?", [], 2.5, true);
			Game.displayOnCanvas("Set?", [], 2.5, true);
			Game.displayOnCanvas("Go!", ["Lap 1 of 3"], 2.5, true);

			Game.setTimeout(function () {
				// race begins!
				let timer = new Timer();
				Player.quests.questProgress.catLifeTimerId = timer.id;
			}, 5000);
		},

		//
		// following fns are called by the tripwire on start line
		//

		// init lap 1 and also the race in general
		// called when they touch the tripwire on the start line after the quest has been started
		initLap1: function () {
			let playerStunTime = 5; // stun them until they're allowed to go

			if (!Player.quests.questProgress.seenCatLifeCourse) {
				// show them the pan of the course if they haven't seen it yet
				Player.quests.questProgress.seenCatLifeCourse = true;

				Game.camera.pan({x: Game.hero.x, y: 0}, 400, "accelerate", function () {
					Game.camera.pan(Game.hero, 700, "accelerate", function () {
						// reset camera
						Game.camera.follow(Game.hero);

						Areas.catLife.startRace();
					}, 0);
				}, 1000);

				playerStunTime += 9; // can't move during pan cutscene
			}
			else {
				Areas.catLife.startRace(); // announces the start of the race and starts the timer etc
			}

			Game.statusEffects.stun({target: Game.hero, time: playerStunTime, hidden: true});

			Player.quests.questProgress.catLifeProgress = 1;

			// targets
			for (let i = 1; i <= 4; i++) {
				Game.characters.push(new Character({
					map: map,
					type: "characters",
					x: 230*i,
					y: Random(200, 360),
					image: "target",
					name: "Target",
					showNameTag: false,
					hostility: "neutral",
					level: 1,
					xpGiven: 0,
					corpseOnDeath: false,
					respawnOnDeath: false,
					damageableByPlayer: true,
					stats: {
						walkSpeed: 0,
						maxHealth: 1,
					},
					onDeath: function () {
						Player.quests.questProgress.catLifeTargets = Increment(Player.quests.questProgress.catLifeTargets);
					}
				}));
			}

			// projectiles
			//for (let i = 0; i < )



			for (let projectileNum = 0; projectileNum < 32; projectileNum++) {
				let projectileY = 570+60*projectileNum;
				let staggerTime = projectileNum * 1000;
				Game.setTimeout(function () {
					Game.setInterval(function () {
						Game.projectiles.push(new Projectile({
							map: map,
							x: 0,
							y: projectileY,
							stats: {
								damage: 0,
								//stun: 2,
							},
							targets: [[Game.hero]],
							image: "icebolt",
							moveDirection: 0,
							stopMovingOnDamage: true,
							moveSpeed: 150,
							type: "projectiles",
						}));
					}, 6000, undefined, true);
				}, staggerTime);
			}
		},

		mapData: {
			cols: 19,
			rows: 45,
			tsize: 60,
			tilesPerRow: 8,
			solidTiles: [1, 2, 3, 6, 7, 9, 10, 11, 13, 15, 17, 18, 19, 20, 21, 23, 25, 26, 27, 28, 29, 31, 33, 34, 35, 36, 37, 38, 39, 42, 43, 44, 45, 46, 47, 53, 55, 61, 65, 69, 70, 73, 77, 82, 83, 89, 90, 97, 98, 123, 131, 155, 150, 151, 143, 152],
			dayTiles: [11, 27, 34, 42, 7], // windows and lights
			nightTiles: [3, 19, 2, 18, 15],
			pathTiles: [5, 12, 41, 50, 51, 57, 58, 59, 60, 76, 86, 87, 88, 91, 92, 93, 99, 107, 108, 109, 110, 111, 113, 115, 117, 118, 119, 121, 125, 126, 127, 129, 133, 134, 135, 137, 138, 139, 140, 141, 147, 148, 149],
			waterTiles: [32, 40, 48, 112, 120, 128],
			iceTiles: [32, 40, 48],
			objectTiles: [142], // top of barrel
			layers: [
				[31, 55, 39, 47, 55, 23, 39, 55, 55, 31, 23, 39, 31, 47, 55, 39, 55, 31, 47,
	            39, 7, 47, 55, 31, 7, 55, 23, 31, 7, 31, 39, 31, 7, 23, 47, 31, 7, 39,
	            6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
	            6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
	            30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
	            30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
	            30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
	            30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
	            30, 46, 46, 46, 46, 46, 46, 46, 30, 30, 46, 46, 46, 46, 46, 46, 46, 30, 30,
	            30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
	            30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
	            30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
	            30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
	            30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
	            30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
	            30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
	            30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
	            30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
	            30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
	            30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
	            30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
	            30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
	            30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
	            30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
	            30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
	            30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
	            30, 30, 30, 30, 30, 30, 30, 30, 30, 46, 46, 46, 46, 46, 46, 46, 30, 30, 30,
	            30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
	            30, 30, 30, 30, 30, 30, 30, 30, 30, 32, 32, 32, 32, 32, 32, 32, 32, 32, 30,
	            30, 30, 30, 30, 30, 30, 30, 30, 30, 32, 32, 32, 32, 32, 32, 32, 32, 32, 30,
	            30, 30, 30, 30, 30, 30, 30, 30, 30, 32, 32, 32, 32, 32, 32, 32, 32, 32, 30,
	            30, 30, 30, 30, 30, 30, 30, 30, 30, 32, 32, 32, 32, 32, 32, 32, 32, 32, 30,
	            30, 30, 30, 30, 30, 30, 30, 30, 30, 32, 32, 32, 32, 32, 32, 32, 32, 32, 30,
	            30, 30, 30, 30, 30, 30, 30, 30, 30, 32, 32, 32, 32, 32, 32, 32, 32, 32, 30,
	            30, 30, 30, 30, 30, 30, 30, 30, 30, 32, 32, 32, 32, 32, 32, 32, 32, 32, 30,
	            30, 30, 30, 30, 30, 30, 30, 30, 30, 32, 32, 32, 32, 32, 32, 32, 32, 32, 30,
	            30, 30, 30, 30, 30, 30, 30, 30, 30, 32, 32, 32, 32, 32, 32, 32, 32, 32, 30,
	            30, 30, 30, 30, 30, 30, 30, 30, 30, 32, 32, 32, 32, 32, 32, 32, 32, 32, 30,
	            30, 30, 30, 30, 30, 30, 30, 30, 30, 32, 32, 32, 32, 32, 32, 32, 32, 32, 30,
	            30, 30, 30, 30, 30, 30, 30, 30, 30, 32, 32, 32, 32, 32, 32, 32, 32, 32, 30,
	            30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
	            30, 159, 159, 159, 159, 159, 159, 159, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
	            30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
	            30, 30, 30, 30, 30, 30, 30, 30, 30, 159, 159, 159, 159, 159, 159, 159, 159, 159, 30,
	            30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	            151, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 151,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 151, 151,
	            142, 0, 0, 0, 0, 0, 0, 0, 142, 142, 0, 0, 0, 0, 0, 0, 0, 152, 151,
	            143, 0, 0, 0, 0, 0, 0, 0, 150, 143, 0, 0, 0, 0, 0, 0, 0, 150, 152,
	            143, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0, 0, 142, 0, 0, 0, 0, 143,
	            143, 0, 0, 0, 0, 142, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0, 0, 0, 143,
	            143, 0, 0, 0, 0, 150, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 143,
	            150, 0, 0, 0, 0, 0, 0, 0, 142, 142, 0, 0, 142, 142, 142, 0, 0, 142, 143,
	            151, 0, 0, 0, 0, 0, 0, 142, 150, 143, 0, 0, 150, 150, 150, 0, 0, 150, 150,
	            152, 0, 0, 0, 0, 0, 0, 150, 152, 143, 0, 142, 142, 142, 142, 142, 0, 0, 0,
	            143, 0, 0, 0, 0, 0, 0, 151, 143, 150, 0, 143, 150, 150, 150, 143, 0, 142, 142,
	            143, 0, 0, 0, 0, 0, 0, 0, 143, 0, 142, 143, 0, 142, 0, 143, 0, 150, 143,
	            143, 0, 0, 0, 0, 0, 0, 0, 150, 0, 150, 150, 0, 143, 0, 143, 142, 0, 143,
	            143, 0, 0, 0, 0, 0, 0, 0, 0, 0, 142, 142, 142, 143, 0, 150, 150, 0, 143,
	            143, 0, 0, 0, 0, 0, 0, 0, 142, 0, 150, 150, 143, 143, 0, 142, 0, 0, 143,
	            143, 0, 0, 0, 0, 0, 0, 0, 143, 142, 142, 142, 143, 150, 0, 143, 0, 142, 143,
	            143, 0, 0, 0, 0, 0, 0, 0, 143, 150, 150, 150, 143, 0, 142, 143, 142, 143, 143,
	            143, 142, 142, 142, 142, 142, 0, 0, 143, 0, 142, 0, 150, 0, 143, 150, 150, 150, 143,
	            143, 150, 150, 150, 150, 150, 0, 0, 143, 0, 143, 142, 142, 142, 143, 0, 142, 0, 143,
	            150, 0, 0, 142, 142, 142, 142, 142, 143, 0, 150, 150, 150, 150, 150, 0, 143, 0, 150,
	            151, 0, 0, 150, 150, 150, 150, 150, 143, 0, 0, 0, 0, 0, 0, 0, 143, 0, 0,
	            151, 142, 142, 142, 0, 142, 0, 0, 143, 0, 0, 0, 0, 0, 0, 0, 150, 0, 142,
	            151, 150, 150, 150, 151, 150, 0, 0, 143, 0, 0, 0, 0, 0, 0, 0, 0, 0, 143,
	            152, 0, 0, 0, 0, 0, 0, 0, 143, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150,
	            143, 0, 0, 142, 142, 142, 142, 142, 143, 0, 0, 0, 0, 0, 0, 0, 0, 0, 151,
	            143, 0, 0, 150, 150, 150, 150, 150, 143, 0, 0, 0, 0, 0, 0, 0, 0, 0, 151,
	            143, 0, 0, 0, 0, 0, 0, 0, 143, 0, 0, 0, 0, 0, 0, 0, 0, 0, 151,
	            143, 142, 0, 142, 142, 142, 0, 0, 143, 0, 0, 0, 0, 0, 0, 0, 0, 0, 151,
	            143, 150, 151, 150, 150, 150, 0, 0, 150, 0, 0, 0, 0, 0, 0, 0, 0, 0, 151,
	            143, 0, 0, 0, 0, 0, 0, 0, 152, 0, 0, 0, 0, 0, 0, 0, 0, 0, 151,
	            150, 0, 0, 0, 0, 0, 0, 0, 143, 0, 0, 0, 0, 0, 0, 0, 0, 0, 152,
	            0, 0, 0, 142, 142, 142, 142, 142, 143, 0, 0, 0, 0, 0, 0, 0, 0, 0, 143,
	            142, 0, 0, 150, 150, 150, 150, 150, 143, 0, 0, 0, 0, 0, 0, 0, 0, 0, 143,
	            143, 0, 0, 0, 0, 0, 0, 0, 143, 0, 0, 0, 0, 0, 0, 0, 0, 0, 143,
	            143, 0, 0, 0, 0, 0, 0, 0, 143, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150,
	            150, 0, 0, 0, 0, 0, 0, 0, 143, 0, 0, 0, 0, 0, 0, 0, 0, 0, 151,
	            152, 0, 0, 0, 0, 0, 0, 0, 143, 0, 0, 0, 0, 0, 0, 0, 0, 0, 151,
	            143, 0, 0, 0, 0, 0, 0, 0, 150, 30, 30, 30, 30, 30, 0, 0, 0, 0, 152,
	            143, 0, 0, 0, 0, 0, 0, 0, 0, 30, 30, 30, 30, 30, 30, 30, 30, 30, 143,
	            150, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150],
			],
			animateTiles: [{
				// water tiles
				tiles: [32, 40, 48],
				animateTime: 400,
			}],
		},

		images: {
			tiles: {normal: "assets/tilemap/eaglecrest.png"},
			cauldron: {normal: "assets/objects/cauldronEaglecrest.png", christmas: "assets/objects/cauldronEaglecrestChristmas.png"},
			icebolt: {normal: "assets/projectiles/icebolt.png"},
			target: {normal: "assets/objects/target.png"},
			movingPlatform: {normal: "assets/objects/movingPlatform1.png"},
			potionStand: {normal: "assets/objects/potionStand.png"},
		},

		npcs: [
		],

		collisions: [
			// misc collisions (cauldrons etc)
			{x: 310, y: 920, width: 200, height: 120},
			{x: 240, y: 1150, width: 170, height: 120},
			{x: 510, y: 1120, width: 60, height: 180},
			{x: 30, y: 2190, width: 60, height: 180},
			{x: 1080, y: 890, width: 120, height: 180},
			{x: 1110, y: 1560, width: 60, height: 180},
			{x: 455, y: 1140, width: 50, height: 30},
			// after target practice
			{x: 800, y: 810, width: 500, height: 60, collisionCondition: function () {
				if (Player.quests.questProgress.catLifeTargets === 4) {
					return false; // no collision
				}
				else {
					return true;
				}
			}},
			// finish line
			{x: 270, y: 2440, width: 420, height: 60, collisionCondition: function () {
				if (Player.quests.activeQuestArray.includes("Practice Makes Purrfect")) {
					return false; // no collision
				}
				else {
					return true;
				}
			}},
			// bit leading from the start to the water bit
			{x: 510, y: 2660, width: 60, height: 300, collisionCondition: function () {
				if (Player.quests.activeQuestArray.includes("Practice Makes Purrfect") && Player.quests.questProgress.catLifeProgress > 1) {
					return false; // no collision
				}
				else {
					return true;
				}
			}}
		],

		tripwires: [ // make sure the player is doing the course in order!
			{x: 270, y: 780, width: 420, height: 2, collisionType: "feet", onPlayerTouch: function () { // after the first stretch
				if (Player.quests.questProgress.catLifeProgress % 3 === 1) {
					Player.quests.questProgress.catLifeProgress++;
					Game.displayOnCanvas("split time .. tbd", ["Shoot down all the targets!"], 6, true);
				}
			}},
			{x: 810, y: 1620, width: 540, height: 2, collisionType: "feet", onPlayerTouch: function () { // after the targets and maze
				if (Player.quests.questProgress.catLifeProgress % 3 === 2) {
					Player.quests.questProgress.catLifeProgress++;
					Game.displayOnCanvas("split time .. tbd", ["Keep going!!"], 4, true);
				}
			}},
			{x: 270, y: 2470, width: 420, height: 2, collisionType: "feet", onPlayerTouch: function () { // finish line
				if (Player.quests.questProgress.catLifeProgress === 3) {
					// start lap 2
					Areas.catLife.initLap2();
					Game.displayOnCanvas("split time .. tbd", ["Lap 2 of 3"], 4, true);
					// catLifeProgress is incremented in initLap2
				}
				else if (Player.quests.questProgress.catLifeProgress === 6) {
					// start lap 3
					Areas.catLife.initLap3();
					Game.displayOnCanvas("split time .. tbd", ["Lap 3 of 3"], 4, true);
				}
				else if (Player.quests.activeQuestArray.includes("Practice Makes Purrfect") && (typeof Player.quests.questProgress.catLifeProgress === "undefined" || Player.quests.questProgress.catLifeProgress === 0)) {
					// start lap 1
					Areas.catLife.initLap1();
				}
				else if (Player.quests.questProgress.catLifeProgress === 9) {
					// finish race!
					//tbd
					// remember to reset timer variable and catlifeprogress variable on race finish !!!!!
				}
			}},
		],

		things: [
			// potion stands
			{x: [153.4, 424.5, 666.4, 730.2, 671.8, 788.6], y: [455.4, 455.4, 455.4, 1533.1, 1533.1, 1533.1], image: 'potionStand', name: 'Potion Stand'},
			// cauldrons
			{x: [251.7, 1078.1, 364.2, 367.8, 269.7, 289.3, 203.3, 478.5, 289.3, 187.5, 1140, 0], y: [868.6, 879.5, 881, 933.9, 936.2, 1098.8, 1108.8, 1116.6, 1165.5, 1170.1, 1540.9, 2198.1], image: 'cauldron', name: 'Cauldron'},
			// moving platforms
			{
				x: 680,
				y: 1800,
				z: -1,
				walkable: true,
				image: "movingPlatform",
				name: "Moving Platform",
				speed: 100,
				moveTowardsLoop: [
					{
						x: 680,
						y: 1800
					},
					{
						x: 680,
						y: 2100
					}
				]
			},
			{
				x: 930,
				y: 2270,
				z: -1,
				walkable: true,
				image: "movingPlatform",
				name: "Moving Platform",
				speed: 100,
				moveTowardsLoop: [
					{
						x: 930,
						y: 2270
					},
					{
						x: 930,
						y: 1970
					}
				]
			},
		],

	},

	sewerWhiteRoom: {
		id: 23,

		data: {
			name: "Eaglecrest Sewers",
			displayOnEnter: false,
		},

		tagGameAllowed: false,

		song_day: "assets/music/Eaglecrest.mp3",
		song_night: "assets/music/Eaglecrest.mp3",

		checkpoint: true,

		lootArea: "eaglecrest",
		lootTier: 1,

		indoors: true,

		borderColour: "white",

		mapData: {
			cols: 20,
			rows: 10,
			tsize: 60,
			tilesPerRow: 8,
			layers: [[204],]
		},

	},
pawPeaksTower: {
        id: 23,

        data: {
            name: "Ice Tower",
            level: "Level 1 - 5",
            territory: "Neutral",
            displayOnEnter: true,
        },

		lootArea: "loggingCamp",
        lootTier: 1,

		indoors: true,

		tagGameAllowed: false,

		song_day: "assets/music/Forest.mp3",
		song_night: "assets/music/Forest.mp3",

		checkpoint: false,


        mapData: {

animateTiles: [
		{
                // tower water tiles 1
                tiles: [321, 331, 341, 351, 361, 371, 381, 391, 401, 411, 421, 431],
                animateTime: 30,
            },
{
                // waterfall tile
                tiles: [288, 298, 308],
                animateTime: 100,
            },
{
                // waterfall tile 2
                tiles: [289, 299, 309],
                animateTime: 100,
            },
{
                // tower water tiles 2
                tiles: [322, 332, 342, 352, 362, 372, 382, 392, 402, 412, 422, 432],
                animateTime: 30,
            }
],

numberOfLayers: 3,
            cols: 20,
            rows: 20,
            tsize: 60,
            tilesPerRow: 10,
            layers: [
	[17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,
17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,
17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,
17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,
17,17,17,17,17,0,0,0,0,0,0,0,0,0,0,17,17,17,17,17,
17,17,17,17,17,0,0,0,0,0,0,0,0,0,0,17,17,17,17,17,
17,17,17,17,17,0,0,0,0,0,0,0,0,0,0,17,17,17,17,17,
17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,
17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,
17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,
101,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,102,
51,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,52,
51,52,151,152,152,152,152,122,122,122,122,152,152,152,152,152,152,153,51,52,
51,52,161,132,162,162,174,154,132,132,132,162,162,162,162,162,162,163,51,52,
51,52,161,132,162,162,133,174,154,132,164,162,162,162,162,162,162,133,51,52,
51,52,131,132,132,132,133,162,162,162,162,162,162,162,162,162,132,133,51,52,
51,52,131,132,132,164,162,123,162,162,162,162,162,162,162,132,132,133,51,52,
51,52,141,142,172,172,172,172,172,172,172,172,172,172,142,142,142,143,51,52,
51,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,51,52,
111,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,51,112],

[0,321,322,0,0,0,0,0,0,0,0,0,0,0,0,0,0,321,322,0,
0,321,322,0,0,0,0,0,0,0,0,0,0,0,0,0,0,321,322,0,
0,321,322,0,0,0,0,0,0,0,0,0,0,0,0,0,0,321,322,0,
0,321,322,0,0,0,0,0,0,0,0,0,0,0,0,0,0,321,322,0,
0,321,322,0,0,0,0,0,0,0,0,0,0,0,0,0,0,321,322,0,
0,321,322,0,0,0,0,0,0,0,0,0,0,0,0,0,0,321,322,0,
0,321,322,0,0,0,0,0,0,0,0,0,0,0,0,0,0,321,322,0,
0,321,322,0,0,0,0,0,0,0,0,0,0,0,0,0,0,321,322,0,
0,321,322,0,0,0,0,0,0,0,0,0,0,0,0,0,0,321,322,0,
76,321,322,73,76,76,76,76,76,76,76,76,76,76,76,76,76,321,322,73,
101,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,102,
51,103,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,103,52,
51,52,132,162,132,162,162,132,132,132,132,132,132,162,162,162,162,132,51,52,
51,52,162,0,0,132,162,162,132,132,132,132,0,0,7,0,0,132,51,52,
51,52,132,132,132,0,162,162,162,132,132,162,0,0,0,0,0,132,51,52,
51,52,132,132,132,132,0,0,0,162,132,132,0,0,0,0,132,132,51,52,
51,52,132,132,132,132,132,132,0,132,0,0,132,0,0,132,132,132,51,52,
51,52,132,132,132,132,132,162,132,132,162,162,162,162,132,132,132,132,51,52,
51,103,6,6,6,6,6,6,6,6,132,132,132,6,6,6,6,6,103,52,
111,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,112],

[0,321,322,0,0,0,0,0,0,0,0,0,0,0,0,0,0,321,322,0,
38,321,322,38,38,38,38,38,38,38,38,38,38,38,38,38,38,321,322,38,
0,321,322,0,0,0,0,0,0,0,0,0,0,0,0,0,0,321,322,0,
0,321,322,0,0,0,0,0,0,0,0,0,0,48,0,0,0,321,322,0,
0,321,322,0,0,17,17,17,17,17,17,17,17,17,17,0,0,321,322,0,
0,321,322,0,0,17,17,17,17,17,17,17,17,17,17,0,0,321,322,0,
0,321,322,0,0,17,17,17,17,17,17,17,17,17,17,0,0,321,322,0,
0,321,322,0,0,0,48,0,0,0,0,0,0,0,0,0,0,321,322,0,
0,321,322,0,0,0,0,0,0,0,0,0,0,0,0,0,0,321,322,0,
0,288,289,0,0,0,0,0,0,0,0,0,0,0,0,0,0,288,289,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,218,162,217,132,132,132,132,132,132,132,208,172,172,145,162,146,0,0,
0,0,132,206,0,209,142,142,219,132,132,237,173,2,7,171,145,162,0,0,
0,0,132,132,208,173,2,2,171,226,207,163,2,2,2,2,161,162,0,0,
0,0,0,132,216,7,2,2,2,161,236,238,153,2,2,151,144,162,0,0,
0,0,207,207,146,153,2,2,151,229,132,132,246,122,122,248,235,162,0,0,
0,0,145,162,162,146,152,152,227,132,132,132,132,132,132,132,247,156,0,0,
0,0,0,0,0,0,0,0,0,0,6,6,6,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]



        },
		images: {
            tiles: {normal: "assets/tilemap/pawPeaks.png"},
        },

areaTeleports: [
            {
                x: 598,
                y: 1250,
                width: 60,
                height: 2,
                teleportTo: "pawPeaks",
                destinationX: 8791,
                destinationY: 1893,
            },

        ]

	},



    pawPeaks: {
        id: 23,

        data: {
            name: "Paw Peaks",
            level: "Level 1 - 5",
            territory: "Neutral",
            displayOnEnter: true,
        },
lootArea: "loggingCamp",
        lootTier: 1,
weather: "snow",
        mapData: {
solidTiles: [86,81,83,73,76,74,75,98,96,47,17,113,124,135,91,147,157,134,314,313,303,304,293,294,124,125,89,88,82],
waterTiles: [396, 386, 376, 366, 356, 346, 336, 326, 316, 306, 296, 286, 397, 387, 377, 367, 357, 347, 337, 327, 317, 307, 297, 287,321, 331, 341, 351, 361, 371, 381, 391, 401, 411, 421, 431,322, 332, 342, 352, 362, 372, 382, 392, 402, 412, 422, 432,441, 442, 443, 444, 445, 446, 461, 462, 463, 464, 465, 466,428, 427, 426, 425, 424, 423, 408, 407, 406, 405, 404, 403,438, 437, 436, 435, 434, 433, 418, 417, 416, 415, 414, 413,273, 274, 275,283, 284, 285,252, 262, 272,231, 232, 233,241, 242, 243,251, 261, 271,253, 254, 255,256, 266, 276,257, 267, 277,258, 268, 278,259, 269, 279,324, 334, 344,353, 363, 373,325, 335, 345,323, 333, 343],
animateTiles: [

{
                // cave water tiles 1
                tiles: [396, 386, 376, 366, 356, 346, 336, 326, 316, 306, 296, 286],
                animateTime: 40,
            },
{
                // cave water tiles 2
                tiles: [397, 387, 377, 367, 357, 347, 337, 327, 317, 307, 297, 287],
                animateTime: 40,
            },



{
                // water tiles river 1
                tiles: [321, 331, 341, 351, 361, 371, 381, 391, 401, 411, 421, 431],
                animateTime: 40,
            },
{
                // water tiles river 2
                tiles: [322, 332, 342, 352, 362, 372, 382, 392, 402, 412, 422, 432],
                animateTime: 40,
            },
{
                // water tiles river 4
                tiles: [441, 442, 443, 444, 445, 446, 461, 462, 463, 464, 465, 466],
                animateTime: 40,
            },
{
                // water tiles river 5
                tiles: [428, 427, 426, 425, 424, 423, 408, 407, 406, 405, 404, 403],
                animateTime: 40,
            },
{
                // water tiles river 6
                tiles: [438, 437, 436, 435, 434, 433, 418, 417, 416, 415, 414, 413],
                animateTime: 40,
            },
{
                // water tiles river 3
                tiles: [323, 333, 343],
                animateTime: 80,
            },
{
                // water tiles river 55
                tiles: [325, 335, 345],
                animateTime: 80,
            },
{
                // water tiles river 55
                tiles: [324, 334, 344],
                animateTime: 80,
            },
{
                // water tiles river 55
                tiles: [353, 363, 373],
                animateTime: 80,
            },
{
                // waterfall
                tiles: [288, 298, 308],
                animateTime: 80,
            },
{
                // waterfall 2
                tiles: [289, 299, 309],
                animateTime: 80,
            },
{
                // rope tiles
                tiles: [281, 291, 301],
                animateTime: 250,
            },
{
                // vine tiles
                tiles: [282, 292, 302],
                animateTime: 250,
            },



],
			numberOfLayers: 3,
            cols: 172,
            rows: 100,
            tsize: 60,
            tilesPerRow: 10,
            layers: [
				[91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91,
				            91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91,
				            91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91,
				            91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91,
				            91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91,
				            91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91,
				            91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91,
				            91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91,
				            91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 8, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91,
				            91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 8, 8, 8, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91,
				            91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 8, 8, 8, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91,
				            91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 8, 8, 8, 8, 8, 8, 8, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91,
				            91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 8, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 8, 8, 8, 8, 8, 8, 8, 8, 8, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91,
				            91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 24, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91,
				            91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 24, 91, 91, 91, 47, 17, 17, 17, 56, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91,
				            91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 81, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 24, 91, 91, 91, 47, 17, 17, 17, 56, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91,
				            91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 81, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 24, 91, 91, 91, 17, 17, 17, 17, 56, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91,
				            91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 81, 81, 81, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 24, 91, 91, 91, 17, 17, 17, 17, 56, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91,
				            91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 96, 81, 81, 81, 81, 81, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 24, 91, 91, 91, 47, 17, 17, 48, 56, 47, 17, 17, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91,
				            91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 81, 81, 81, 81, 81, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 24, 91, 8, 8, 47, 17, 17, 17, 56, 47, 17, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91,
				            91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 81, 81, 81, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 8, 8, 8, 47, 17, 17, 17, 56, 47, 17, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91,
				            91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 104, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 81, 81, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 17, 17, 56, 17, 48, 17, 17, 56, 47, 17, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91,
				            91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 104, 104, 104, 104, 104, 104, 104, 104, 104, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 0, 0, 0, 91, 91, 91, 91, 91, 91, 91, 91, 91, 81, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 17, 48, 56, 17, 17, 17, 17, 56, 47, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91,
				            91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 0, 0, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 55, 17, 56, 17, 17, 17, 17, 17, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91,
				            91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 81, 81, 81, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 2, 17, 56, 17, 17, 17, 17, 56, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91,
				            92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 91, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 91, 91, 81, 81, 91, 91, 91, 92, 92, 92, 92, 92, 91, 91, 91, 91, 91, 91, 91, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 91, 91, 92, 56, 17, 17, 17, 17, 56, 91, 91, 91, 91, 91, 91, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 91, 91, 81, 81, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 321, 24, 2, 2, 25, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 24, 2, 2, 2, 17, 17, 17, 17, 56, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 81, 91, 81, 81, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 321, 0, 422, 322, 25, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 24, 2, 2, 2, 47, 17, 17, 17, 56, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 81, 91, 81, 81, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 321, 0, 422, 322, 25, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 24, 2, 2, 2, 47, 17, 17, 67, 56, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 321, 0, 422, 322, 25, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 24, 2, 2, 2, 47, 17, 17, 77, 56, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 321, 0, 422, 322, 25, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 24, 2, 2, 1, 47, 17, 17, 77, 56, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 81, 81, 81, 81, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 321, 0, 422, 322, 25, 24, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 91, 86, 86, 86, 86, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 81, 81, 0, 0, 81, 81, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 321, 0, 422, 322, 25, 24, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 83, 83, 83, 83, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 81, 0, 0, 0, 0, 81, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 321, 0, 422, 2, 441, 24, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 83, 2, 2, 2, 2, 86, 86, 86, 86, 86, 86, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 81, 0, 81, 81, 0, 0, 0, 0, 81, 81, 81, 81, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 321, 24, 422, 2, 25, 24, 2, 2, 2, 2, 2, 2, 325, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 86, 86, 86, 86, 86, 86, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 81, 81, 81, 81, 0, 0, 95, 95, 0, 0, 81, 81, 81, 81, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 321, 422, 22, 22, 22, 22, 22, 22, 22, 403, 22, 26, 321, 321, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 86, 86, 86, 86, 86, 86, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 81, 81, 81, 0, 86, 86, 86, 86, 86, 86, 0, 81, 81, 81, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 422, 23, 23, 23, 23, 23, 23, 23, 321, 24, 422, 24, 321, 321, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 86, 86, 86, 86, 86, 86, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 81, 81, 81, 86, 86, 86, 86, 86, 86, 86, 86, 81, 81, 81, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 31, 22, 24, 2, 321, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
				            2, 2, 2, 2, 2, 2, 2, 11, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 81, 81, 86, 86, 2, 58, 58, 58, 58, 2, 86, 86, 81, 81, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 23, 422, 421, 321, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
				            2, 2, 2, 2, 2, 11, 11, 11, 11, 11, 11, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 8, 198, 198, 2, 8, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 81, 81, 86, 86, 81, 192, 192, 192, 182, 0, 86, 86, 81, 81, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 421, 422, 421, 321, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 8, 198, 2, 8, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 81, 86, 192, 192, 192, 182, 182, 182, 192, 2, 86, 81, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 421, 422, 421, 321, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 86, 86, 86, 2, 2, 2, 2, 2, 86, 86, 86, 86, 86, 81, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 81, 86, 192, 182, 182, 182, 192, 192, 192, 2, 86, 81, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 421, 422, 421, 321, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 2, 51, 2, 2, 52, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 421, 422, 421, 321, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 51, 2, 2, 52, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 321, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 51, 2, 2, 52, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 321, 2, 422, 322, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 27, 27, 27, 27, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 27, 27, 27, 27, 27, 51, 2, 2, 52, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 321, 2, 422, 322, 25, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 293,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 51, 2, 2, 52, 2, 2, 2, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 2, 2, 51, 2, 2, 52, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 321, 2, 422, 2, 441, 24, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 293,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 51, 2, 2, 52, 1, 27, 2, 27, 2, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 27, 2, 2, 2, 1, 51, 2, 2, 52, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 2, 321, 24, 422, 2, 25, 24, 2, 2, 2, 2, 2, 2, 2, 2, 2, 325, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 293, 293,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 51, 2, 2, 52, 1, 27, 1, 2, 2, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 2, 2, 1, 1, 1, 51, 2, 2, 52, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 31, 22, 2, 2, 2, 2, 2, 2, 2, 2, 2, 403, 22, 26, 321, 321, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 293, 293,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 51, 2, 2, 52, 36, 36, 1, 1, 1, 81, 81, 81, 0, 0, 0, 0, 0, 81, 81, 81, 2, 1, 1, 36, 26, 51, 2, 2, 52, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 81, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 23, 2, 2, 2, 2, 2, 2, 2, 2, 321, 24, 422, 24, 321, 321, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 293, 293, 293,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 11, 11, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 27, 51, 2, 2, 52, 27, 27, 26, 1, 1, 26, 81, 2, 58, 58, 58, 58, 58, 2, 81, 26, 1, 1, 36, 36, 26, 51, 2, 2, 52, 27, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 321, 31, 22, 322, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 293, 293, 293,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 11, 11, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 27, 51, 2, 2, 52, 36, 27, 36, 26, 26, 1, 81, 2, 58, 58, 58, 58, 58, 2, 81, 1, 26, 36, 36, 36, 26, 51, 2, 2, 52, 27, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 23, 23, 321, 321, 321, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 293, 293, 293,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 11, 11, 11, 11, 11, 2, 2, 2, 2, 2, 2, 2, 2, 27, 27, 51, 2, 2, 52, 36, 36, 26, 26, 36, 36, 81, 2, 166, 166, 166, 166, 166, 2, 81, 26, 36, 36, 26, 36, 26, 51, 2, 2, 52, 27, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 321, 321, 321, 321, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 293, 293,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 27, 27, 27, 51, 2, 2, 52, 36, 26, 36, 26, 36, 27, 81, 2, 166, 166, 2, 2, 2, 2, 81, 27, 36, 26, 26, 36, 27, 51, 2, 2, 72, 27, 27, 27, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 81, 81, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 321, 321, 321, 321, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 293, 293,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 27, 27, 27, 51, 2, 2, 52, 26, 27, 27, 27, 26, 26, 36, 36, 36, 51, 51, 52, 26, 26, 36, 26, 26, 26, 36, 36, 26, 51, 2, 2, 72, 27, 27, 27, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 81, 81, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 321, 321, 321, 321, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 2, 2, 293,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 27, 27, 27, 51, 2, 2, 52, 26, 27, 27, 27, 26, 26, 26, 36, 36, 51, 51, 52, 26, 26, 36, 26, 26, 26, 36, 26, 27, 51, 2, 2, 72, 27, 26, 27, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 81, 81, 81, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 321, 321, 321, 321, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 293,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 11, 11, 2, 27, 27, 27, 51, 2, 2, 52, 36, 26, 36, 36, 26, 27, 27, 2, 36, 51, 457, 52, 26, 26, 36, 36, 36, 36, 27, 27, 27, 51, 2, 2, 72, 26, 26, 27, 27, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 321, 321, 321, 321, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 421, 293,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 11, 11, 11, 11, 2, 2, 27, 27, 27, 51, 457, 457, 52, 36, 26, 36, 36, 26, 27, 27, 36, 36, 51, 457, 52, 26, 26, 36, 36, 36, 36, 27, 27, 2, 2, 6, 6, 2, 2, 27, 36, 27, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 321, 321, 321, 321, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 293,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 11, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 27, 2, 27, 103, 103, 447, 447, 36, 36, 36, 36, 26, 26, 36, 36, 2, 103, 103, 103, 2, 26, 26, 36, 36, 27, 27, 2, 2, 2, 2, 2, 2, 2, 2, 36, 36, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 321, 2, 2, 321, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 2, 2, 2, 2, 2, 6, 1, 1, 0, 0, 6, 6, 6, 2, 2, 293, 293,
				            2, 2, 2, 2, 2, 11, 11, 11, 11, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 27, 27, 36, 103, 103, 447, 447, 6, 6, 2, 2, 2, 2, 2, 2, 2, 103, 103, 103, 2, 2, 447, 447, 2, 2, 2, 103, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 2, 2, 2, 2, 2, 6, 1, 1, 0, 0, 6, 6, 6, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 447, 2, 6, 6, 1, 1, 1, 6, 6, 2, 2, 2, 293, 293,
				            2, 2, 2, 2, 2, 11, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 27, 27, 27, 27, 103, 447, 447, 447, 447, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 103, 2, 27, 27, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 447, 2, 6, 6, 1, 1, 1, 6, 6, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 2, 2, 6, 0, 6, 6, 447, 2, 2, 2, 103, 2, 2, 2, 16, 16, 16, 16, 16, 16, 16, 0, 0, 0, 16, 16, 2, 2, 293, 293, 293,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 27, 36, 27, 103, 103, 447, 447, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 103, 27, 2, 2, 2, 27, 27, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 0, 6, 6, 447, 2, 2, 2, 103, 2, 2, 2, 16, 16, 16, 16, 16, 16, 16, 0, 0, 0, 16, 16, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 16, 16, 16, 16, 16, 2, 2, 6, 0, 6, 447, 447, 447, 447, 2, 103, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 293, 293, 293,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 27, 27, 103, 103, 447, 52, 27, 27, 27, 27, 2, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 26, 27, 27, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 0, 6, 447, 447, 447, 447, 2, 103, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 16, 16, 447, 16, 16, 16, 103, 16, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 293, 293, 293,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 11, 11, 2, 2, 2, 2, 27, 27, 51, 457, 457, 52, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 26, 26, 26, 27, 2, 2, 2, 2, 2, 2, 2, 2, 2, 16, 16, 16, 16, 16, 16, 16, 16, 2, 2, 2, 0, 16, 16, 447, 16, 16, 16, 103, 16, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 16, 16, 16, 16, 16, 16, 16, 16, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 321, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 293, 293,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 11, 11, 11, 11, 11, 11, 2, 2, 2, 2, 2, 2, 2, 51, 457, 457, 52, 27, 27, 2, 2, 27, 2, 2, 2, 2, 27, 27, 27, 27, 27, 27, 27, 27, 2, 2, 2, 2, 27, 27, 27, 27, 27, 27, 27, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 321, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 293, 293,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 11, 11, 2, 2, 2, 2, 2, 2, 2, 2, 2, 51, 51, 52, 52, 27, 2, 2, 27, 27, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 0, 0, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 321, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 11, 11, 11, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 6, 2, 2, 293,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 51, 51, 52, 52, 27, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 11, 11, 11, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 192, 192, 192, 192, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 192, 192, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 11, 11, 2, 2, 2, 2, 321, 2, 2, 2, 11, 162, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 162, 162, 162, 162, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 293,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 51, 1, 1, 52, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 1, 1, 2, 2, 192, 192, 192, 192, 192, 2, 2, 2, 2, 1, 1, 2, 2, 2, 192, 192, 192, 192, 2, 2, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 321, 2, 2, 321, 2, 162, 11, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 11, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 293,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 0, 2, 2, 2, 2, 1, 1, 2, 2, 2, 192, 192, 192, 192, 192, 2, 2, 2, 2, 2, 1, 2, 2, 2, 192, 192, 192, 192, 2, 2, 2, 1, 1, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 321, 321, 2, 162, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 293,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 192, 192, 192, 192, 192, 192, 2, 2, 2, 1, 1, 2, 2, 192, 192, 192, 192, 192, 2, 2, 1, 1, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 11, 11, 2, 321, 2, 321, 321, 2, 162, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 11, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 2, 2, 2, 2, 2, 2, 16, 2, 293, 293,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 192, 192, 192, 192, 192, 192, 192, 2, 2, 2, 2, 2, 2, 2, 192, 192, 192, 192, 192, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 11, 2, 2, 353, 428, 2, 2, 2, 2, 375, 438, 2, 2, 321, 321, 2, 162, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 132, 132, 132, 162, 162, 162, 162, 162, 162, 162, 2, 2, 2, 2, 2, 1, 2, 293, 293,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 81, 81, 81, 81, 81, 81, 81, 81, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 192, 192, 192, 192, 192, 192, 192, 2, 2, 2, 2, 2, 2, 192, 192, 192, 192, 192, 192, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 353, 2, 2, 2, 2, 2, 2, 2, 2, 321, 321, 11, 162, 2, 2, 2, 2, 2, 2, 2, 2, 2, 162, 162, 162, 162, 162, 162, 162, 162, 132, 132, 132, 132, 132, 132, 132, 162, 162, 162, 162, 132, 132, 2, 2, 2, 2, 2, 1, 2, 293, 293,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 81, 2, 2, 2, 2, 2, 2, 2, 2, 81, 2, 2, 2, 2, 2, 2, 2, 0, 2, 192, 192, 2, 2, 2, 2, 2, 192, 192, 192, 192, 192, 192, 192, 2, 2, 2, 2, 2, 2, 192, 192, 192, 192, 192, 192, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 321, 0, 2, 2, 2, 2, 2, 2, 2, 2, 324, 321, 2, 162, 2, 2, 2, 2, 2, 2, 2, 162, 162, 162, 162, 162, 162, 162, 162, 162, 132, 132, 132, 132, 132, 132, 132, 132, 162, 162, 162, 132, 132, 132, 2, 2, 2, 2, 2, 1, 2, 2, 293,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 81, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 81, 2, 2, 2, 2, 2, 2, 0, 192, 192, 192, 192, 192, 2, 2, 2, 2, 192, 192, 192, 192, 192, 192, 2, 2, 2, 2, 2, 192, 192, 192, 192, 192, 192, 2, 2, 2, 2, 2, 192, 192, 192, 192, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 321, 0, 11, 11, 438, 2, 2, 2, 2, 2, 428, 324, 2, 162, 11, 11, 2, 2, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 132, 132, 132, 132, 132, 132, 132, 132, 132, 162, 162, 132, 132, 132, 132, 132, 132, 2, 2, 1, 2, 2, 2,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 192, 192, 192, 192, 192, 192, 2, 2, 2, 192, 192, 192, 192, 192, 2, 2, 2, 1, 2, 2, 192, 192, 192, 192, 192, 192, 2, 2, 2, 2, 192, 192, 192, 192, 192, 192, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 322, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 2, 2, 2, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 132, 132, 132, 132, 132, 132, 132, 132, 132, 162, 162, 132, 132, 132, 11, 2, 1, 2, 2, 1, 2, 2, 2,
				            17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 192, 192, 192, 192, 192, 192, 192, 2, 2, 2, 192, 192, 192, 192, 2, 2, 2, 1, 2, 2, 192, 192, 192, 192, 192, 192, 2, 2, 2, 2, 192, 192, 192, 192, 192, 192, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 11, 2, 2, 2, 322, 2, 2, 2, 2, 2, 2, 2, 2, 2, 162, 2, 2, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 132, 132, 132, 132, 132, 132, 132, 132, 132, 162, 162, 132, 132, 132, 2, 2, 1, 2, 2, 2, 2, 2, 2,
				            17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 192, 192, 192, 192, 192, 192, 192, 2, 2, 2, 2, 192, 2, 2, 2, 2, 1, 1, 2, 2, 2, 192, 192, 192, 192, 2, 2, 2, 2, 192, 192, 182, 192, 192, 192, 192, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 11, 0, 2, 2, 2, 322, 2, 162, 162, 162, 162, 162, 162, 162, 162, 162, 2, 162, 162, 162, 162, 162, 162, 162, 132, 132, 132, 162, 162, 162, 162, 162, 132, 132, 132, 132, 132, 132, 132, 132, 132, 162, 162, 132, 132, 132, 132, 2, 2, 132, 2, 2, 2, 2, 2,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 192, 192, 192, 192, 192, 192, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 192, 192, 192, 2, 2, 2, 2, 2, 192, 192, 182, 192, 192, 192, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 321, 321, 321, 321, 2, 2, 2, 2, 2, 2, 2, 2, 11, 162, 11, 162, 162, 162, 162, 162, 162, 132, 132, 132, 132, 132, 162, 162, 162, 162, 132, 132, 132, 132, 132, 132, 132, 132, 162, 162, 162, 162, 132, 132, 132, 132, 132, 132, 132, 162, 162, 2, 2,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 86, 86, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 192, 192, 192, 192, 192, 192, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 192, 2, 2, 2, 2, 2, 192, 192, 192, 192, 192, 192, 192, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 321, 321, 321, 321, 2, 2, 2, 2, 2, 2, 2, 11, 11, 162, 162, 162, 162, 162, 162, 162, 162, 132, 132, 132, 132, 132, 162, 162, 162, 162, 162, 132, 132, 132, 132, 132, 132, 132, 162, 162, 162, 162, 162, 162, 132, 132, 132, 132, 132, 132, 162, 2, 2,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 49, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 0, 2, 2, 192, 192, 192, 192, 192, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 192, 192, 192, 192, 192, 192, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 321, 321, 321, 321, 2, 2, 2, 2, 2, 2, 2, 2, 2, 162, 162, 162, 162, 162, 162, 162, 162, 132, 132, 132, 132, 132, 162, 162, 162, 162, 162, 162, 132, 132, 132, 132, 132, 162, 162, 162, 162, 162, 162, 162, 162, 132, 132, 132, 132, 132, 162, 2, 2,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 0, 2, 2, 192, 192, 192, 192, 2, 2, 2, 2, 2, 1, 1, 192, 192, 192, 192, 192, 192, 2, 2, 2, 2, 2, 2, 2, 2, 2, 192, 192, 192, 192, 192, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 321, 321, 321, 321, 2, 2, 2, 2, 2, 2, 2, 2, 2, 162, 162, 162, 162, 162, 162, 162, 162, 162, 132, 132, 132, 162, 162, 162, 162, 162, 162, 162, 162, 132, 132, 132, 162, 162, 162, 162, 162, 132, 132, 132, 132, 162, 162, 132, 132, 132, 162, 162, 2,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 192, 192, 192, 192, 192, 192, 2, 2, 2, 1, 1, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 192, 192, 192, 192, 192, 192, 192, 192, 192, 2, 2, 2, 1, 2, 2, 2, 2, 2, 192, 192, 192, 192, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 321, 321, 321, 321, 2, 2, 2, 2, 2, 2, 2, 2, 2, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 162, 2,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 192, 192, 192, 192, 192, 192, 192, 192, 2, 2, 1, 1, 2, 2, 2, 0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 192, 2, 192, 192, 2, 192, 192, 192, 192, 192, 192, 192, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 321, 321, 321, 321, 2, 2, 2, 2, 2, 2, 2, 2, 2, 162, 2, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 132, 132, 132, 132, 132, 162, 162, 162, 162, 162, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 162, 2,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 11, 11, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 192, 192, 192, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 192, 192, 192, 192, 192, 192, 192, 192, 192, 192, 2, 1, 1, 2, 2, 2, 0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 192, 192, 192, 192, 192, 2, 192, 192, 64, 65, 192, 192, 182, 2, 192, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 321, 321, 321, 321, 2, 2, 2, 2, 2, 2, 2, 2, 2, 162, 2, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 132, 132, 132, 132, 132, 132, 132, 132, 162, 162, 162, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 162, 2,
				            2, 2, 2, 2, 2, 2, 2, 2, 11, 11, 11, 11, 11, 2, 2, 2, 2, 2, 2, 2, 11, 11, 2, 2, 2, 2, 2, 192, 192, 192, 192, 192, 2, 2, 2, 2, 2, 2, 2, 2, 2, 192, 192, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 192, 192, 192, 192, 192, 192, 192, 192, 192, 192, 2, 2, 1, 2, 2, 2, 0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 192, 192, 192, 192, 192, 192, 192, 192, 286, 287, 192, 182, 182, 2, 2, 192, 192, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 321, 321, 321, 321, 2, 2, 2, 2, 2, 2, 2, 2, 2, 162, 2, 2, 162, 162, 162, 162, 162, 162, 162, 162, 162, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 162, 162, 132, 132, 132, 132, 132, 132, 132, 132, 162, 132, 132, 132, 132, 132, 162, 2,
				            2, 2, 2, 192, 192, 2, 2, 2, 2, 11, 11, 11, 2, 2, 2, 2, 11, 11, 11, 11, 11, 2, 2, 2, 2, 2, 2, 192, 192, 192, 192, 192, 2, 2, 2, 2, 2, 2, 2, 2, 192, 192, 192, 192, 2, 2, 2, 2, 2, 2, 1, 2, 2, 192, 192, 192, 192, 192, 192, 192, 192, 192, 192, 1, 2, 1, 2, 2, 2, 0, 0, 1, 1, 1, 2, 2, 2, 2, 192, 2, 192, 192, 192, 192, 192, 192, 2, 286, 287, 2, 182, 192, 192, 2, 192, 192, 192, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 321, 321, 321, 321, 2, 2, 2, 2, 2, 2, 2, 2, 2, 162, 2, 2, 2, 162, 162, 162, 162, 162, 162, 162, 162, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 162, 162, 132, 132, 132, 132, 132, 132, 132, 162, 132, 132, 132, 132, 132, 132, 162, 2,
				            2, 2, 192, 192, 192, 192, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 11, 11, 2, 2, 2, 2, 2, 2, 2, 2, 192, 192, 192, 192, 192, 2, 2, 2, 2, 2, 2, 2, 192, 192, 192, 192, 192, 2, 2, 2, 2, 2, 2, 1, 1, 1, 192, 192, 192, 192, 192, 192, 192, 192, 192, 192, 1, 2, 1, 2, 2, 2, 0, 0, 1, 1, 1, 2, 2, 2, 2, 192, 2, 192, 192, 192, 192, 192, 192, 192, 286, 287, 2, 192, 192, 192, 192, 2, 2, 192, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 321, 24, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 162, 162, 162, 162, 162, 162, 162, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 162, 132, 132, 132, 132, 132, 132, 162, 162, 132, 132, 132, 132, 132, 162, 162, 2,
				            2, 2, 192, 192, 192, 192, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 192, 192, 192, 192, 2, 2, 2, 2, 2, 2, 2, 192, 192, 192, 192, 192, 192, 2, 2, 2, 2, 2, 1, 2, 1, 192, 192, 192, 192, 192, 192, 192, 192, 192, 192, 2, 2, 1, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 192, 2, 2, 192, 192, 192, 192, 192, 182, 192, 286, 287, 2, 182, 182, 192, 192, 2, 2, 2, 192, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 321, 0, 422, 322, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 162, 162, 162, 162, 162, 162, 162, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 162, 162, 132, 132, 132, 162, 162, 162, 132, 132, 132, 132, 132, 162, 162, 162, 2,
				            2, 2, 192, 192, 192, 192, 2, 2, 2, 2, 2, 2, 2, 2, 192, 192, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 192, 192, 192, 2, 2, 2, 2, 2, 2, 2, 2, 192, 192, 192, 192, 192, 192, 2, 2, 2, 2, 2, 1, 2, 2, 192, 192, 192, 192, 192, 192, 192, 192, 192, 192, 2, 2, 1, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 192, 2, 192, 192, 192, 192, 192, 192, 182, 192, 286, 287, 2, 192, 182, 182, 192, 2, 2, 2, 192, 192, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 11, 11, 2, 2, 2, 2, 2, 321, 0, 422, 322, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 162, 162, 162, 162, 162, 162, 162, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 162, 162, 162, 162, 162, 162, 132, 132, 132, 132, 132, 132, 162, 162, 162, 162, 2,
				            2, 2, 192, 192, 192, 192, 2, 2, 2, 2, 2, 2, 2, 192, 192, 192, 192, 2, 2, 2, 2, 192, 192, 192, 2, 2, 2, 2, 192, 192, 192, 2, 2, 2, 2, 2, 2, 2, 2, 2, 192, 192, 192, 192, 192, 2, 2, 2, 2, 2, 1, 1, 2, 192, 192, 192, 192, 192, 192, 192, 192, 192, 192, 2, 1, 1, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 1, 192, 2, 182, 192, 192, 192, 192, 192, 182, 192, 286, 287, 192, 192, 192, 192, 2, 2, 2, 2, 2, 192, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 11, 11, 2, 2, 2, 2, 2, 2, 2, 321, 0, 422, 322, 25, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 11, 11, 11, 2, 162, 162, 162, 162, 162, 162, 162, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 162, 162, 162, 162, 162, 132, 132, 132, 132, 132, 132, 162, 162, 162, 162, 2, 2,
				            2, 2, 192, 192, 192, 2, 2, 2, 2, 2, 2, 2, 192, 192, 192, 192, 192, 2, 2, 2, 2, 192, 192, 192, 2, 2, 2, 2, 192, 192, 192, 2, 2, 2, 2, 2, 2, 2, 2, 2, 192, 192, 192, 192, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 192, 192, 192, 192, 192, 192, 192, 192, 2, 2, 1, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 1, 192, 2, 182, 182, 192, 192, 192, 192, 182, 182, 286, 287, 192, 192, 2, 192, 192, 2, 2, 182, 2, 192, 2, 2, 2, 2, 2, 2, 2, 2, 2, 11, 11, 11, 2, 2, 2, 2, 2, 2, 2, 2, 321, 0, 422, 322, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 162, 162, 162, 162, 162, 162, 162, 162, 132, 132, 132, 132, 132, 132, 132, 132, 162, 162, 162, 132, 132, 132, 132, 132, 132, 132, 132, 162, 162, 162, 162, 162, 2, 2,
				            2, 2, 192, 192, 192, 2, 2, 2, 2, 2, 2, 2, 192, 192, 192, 192, 192, 2, 2, 2, 2, 192, 192, 192, 192, 2, 2, 2, 2, 2, 2, 2, 2, 192, 192, 2, 2, 2, 2, 2, 2, 192, 192, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 192, 192, 192, 192, 192, 192, 2, 2, 2, 1, 2, 2, 2, 2, 0, 0, 2, 1, 2, 2, 2, 1, 192, 2, 182, 182, 192, 182, 192, 192, 2, 2, 286, 287, 2, 2, 2, 182, 192, 192, 2, 182, 182, 192, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 321, 0, 422, 322, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 132, 132, 132, 132, 132, 162, 162, 162, 132, 132, 132, 132, 132, 132, 132, 132, 162, 162, 162, 162, 162, 162, 2, 2,
				            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 192, 192, 192, 192, 192, 2, 2, 2, 2, 192, 192, 192, 192, 2, 2, 2, 2, 2, 2, 2, 2, 192, 192, 192, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 0, 0, 2, 1, 1, 2, 2, 1, 192, 192, 192, 192, 192, 182, 192, 2, 2, 2, 286, 287, 2, 2, 2, 182, 192, 192, 2, 182, 182, 192, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 321, 0, 422, 322, 25, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 132, 132, 132, 132, 132, 132, 132, 132, 162, 162, 162, 162, 162, 162, 2, 2,
				            2, 2, 2, 2, 2, 2, 2, 192, 192, 2, 2, 2, 2, 192, 192, 192, 192, 2, 2, 2, 192, 192, 192, 192, 192, 2, 2, 2, 2, 2, 2, 2, 2, 192, 192, 192, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 0, 0, 2, 1, 1, 1, 2, 1, 1, 192, 192, 192, 192, 192, 192, 192, 192, 192, 194, 195, 192, 192, 192, 192, 192, 192, 192, 192, 192, 192, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 321, 0, 422, 2, 441, 24, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 132, 132, 132, 132, 132, 132, 132, 162, 162, 162, 162, 162, 162, 162, 2, 2,
				            2, 2, 2, 2, 2, 2, 192, 192, 192, 192, 2, 2, 2, 192, 192, 192, 2, 2, 2, 192, 192, 192, 192, 192, 192, 2, 2, 2, 2, 2, 2, 2, 192, 192, 192, 192, 192, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 0, 0, 2, 1, 1, 1, 2, 2, 1, 192, 192, 192, 192, 192, 182, 182, 192, 192, 194, 195, 192, 192, 182, 182, 182, 192, 192, 192, 192, 192, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 321, 24, 422, 2, 25, 24, 2, 2, 2, 2, 2, 2, 325, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 132, 132, 132, 132, 132, 162, 162, 162, 2, 2, 2, 2, 2, 2, 2,
				            2, 2, 2, 2, 2, 2, 192, 192, 192, 192, 192, 2, 2, 2, 2, 2, 2, 2, 2, 192, 192, 192, 192, 192, 192, 192, 2, 2, 2, 2, 2, 2, 192, 192, 192, 192, 192, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 1, 1, 2, 2, 2, 2, 192, 192, 192, 192, 182, 182, 192, 192, 194, 195, 192, 192, 182, 182, 182, 192, 192, 192, 192, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 321, 31, 22, 22, 22, 22, 22, 22, 22, 403, 22, 26, 321, 321, 2, 2, 2, 11, 11, 11, 2, 2, 2, 2, 2, 2, 2, 2, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 162, 2, 2, 11, 11, 2, 2, 2, 2,
				            2, 2, 2, 2, 2, 192, 192, 192, 192, 192, 192, 2, 2, 2, 2, 2, 2, 2, 2, 192, 192, 192, 192, 192, 192, 192, 2, 2, 2, 2, 2, 2, 192, 192, 192, 192, 192, 192, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 192, 192, 192, 192, 182, 192, 192, 194, 195, 192, 192, 182, 182, 182, 192, 192, 192, 1, 1, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 422, 23, 23, 23, 23, 23, 23, 23, 321, 24, 422, 24, 321, 321, 2, 11, 11, 11, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 162, 162, 162, 162, 162, 162, 162, 162, 162, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
				            2, 2, 2, 2, 2, 192, 192, 192, 192, 192, 192, 192, 2, 2, 2, 2, 2, 2, 2, 192, 192, 192, 192, 192, 192, 192, 2, 2, 2, 2, 2, 2, 192, 192, 192, 192, 192, 192, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 192, 192, 192, 192, 192, 192, 194, 195, 192, 192, 192, 192, 192, 192, 192, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 321, 31, 22, 24, 2, 321, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
				            2, 2, 2, 2, 2, 192, 192, 192, 192, 192, 192, 192, 192, 2, 2, 2, 2, 2, 192, 192, 192, 192, 192, 192, 192, 192, 2, 2, 2, 2, 2, 192, 192, 192, 192, 192, 192, 192, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 192, 192, 192, 192, 192, 194, 195, 192, 192, 192, 192, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 422, 23, 23, 422, 421, 321, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0,
				            2, 2, 2, 2, 2, 192, 192, 192, 192, 192, 192, 192, 192, 2, 2, 2, 2, 2, 192, 192, 192, 192, 192, 192, 192, 2, 2, 2, 2, 2, 2, 192, 192, 192, 192, 192, 192, 192, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 192, 192, 194, 195, 192, 192, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 421, 422, 421, 321, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 8, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 97, 81, 81, 98, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 0, 0, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 83, 0, 0, 91, 91, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 91, 91, 91, 91, 81, 81, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 0, 0, 91, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 86, 0, 0, 91, 91, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 91, 91, 91, 91, 81, 81, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 0, 0, 91, 47, 0, 0, 48, 0, 8, 8, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 0, 0, 91, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 81, 81, 81, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 0, 0, 0, 47, 17, 0, 17, 0, 8, 8, 8, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 0, 0, 91, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 69, 81, 96, 96, 96, 81, 81, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 0, 0, 18, 0, 17, 0, 17, 0, 0, 0, 0, 54, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 0, 0, 91, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 0, 0, 81, 81, 81, 89, 99, 0, 0, 0, 0, 0, 0, 0, 96, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 18, 0, 0, 0, 48, 0, 17, 0, 0, 0, 56, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 0, 0, 91, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 81, 81, 81, 81, 89, 91, 0, 0, 0, 97, 98, 0, 0, 96, 81, 97, 98, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 0, 0, 0, 0, 17, 0, 17, 0, 0, 0, 54, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 81, 81, 0, 0, 0, 0, 0, 0, 82, 39, 0, 81, 81, 0, 96, 59, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 17, 0, 0, 0, 0, 56, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 91, 0, 0, 0, 0, 0, 29, 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 81, 0, 0, 0, 0, 0, 0, 0, 81, 81, 39, 0, 82, 82, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 17, 0, 48, 0, 0, 54, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 91, 0, 0, 97, 98, 0, 81, 81, 0, 97, 98, 0, 0, 0, 0, 91, 91, 81, 0, 0, 0, 0, 0, 0, 0, 0, 81, 88, 81, 29, 81, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 0, 0, 0, 0, 0, 0, 0, 54, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 39, 81, 81, 0, 0, 96, 0, 0, 0, 0, 0, 0, 81, 81, 81, 0, 0, 0, 0, 0, 0, 81, 81, 81, 81, 81, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 0, 0, 0, 0, 0, 0, 0, 81, 81, 81, 81, 82, 82, 96, 0, 0, 0, 0, 0, 0, 0, 81, 81, 81, 0, 0, 0, 0, 0, 0, 92, 81, 81, 89, 91, 0, 0, 0, 0, 0, 0, 92, 92, 92, 92, 92, 92, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 92, 92, 55, 0, 0, 48, 0, 17, 0, 92, 92, 92, 92, 92, 92, 0, 0, 0, 92, 92, 92, 92, 92, 92, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 88, 81, 81, 29, 81, 81, 0, 0, 0, 0, 0, 0, 0, 81, 81, 81, 81, 0, 0, 0, 0, 0, 0, 0, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 354, 322, 322, 322, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 55, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 82, 82, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 88, 81, 81, 81, 89, 0, 0, 0, 0, 0, 0, 0, 0, 81, 81, 81, 0, 0, 0, 0, 0, 0, 0, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 354, 321, 0, 365, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 81, 81, 81, 81, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 81, 89, 0, 0, 0, 0, 0, 0, 0, 81, 81, 81, 81, 81, 0, 0, 0, 0, 0, 0, 81, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 354, 422, 0, 365, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 81, 81, 81, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 81, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 354, 422, 0, 365, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 81, 81, 81, 81, 81, 81, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 422, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 81, 81, 83, 83, 83, 83, 81, 81, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 422, 0, 365, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 92, 92, 92, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 81, 83, 83, 0, 0, 83, 83, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 422, 0, 422, 422, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 81, 81, 81, 81, 81, 86, 81, 86, 86, 81, 81, 81, 81, 81, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 81, 81, 83, 0, 0, 0, 0, 83, 81, 81, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 422, 0, 422, 0, 441, 441, 441, 441, 441, 441, 441, 0, 374, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 81, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 81, 81, 81, 81, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 0, 81, 83, 83, 0, 0, 0, 0, 83, 83, 81, 0, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 97, 98, 0, 0, 0, 0, 97, 98, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 354, 322, 422, 441, 441, 441, 441, 441, 441, 441, 441, 441, 441, 0, 0, 175, 175, 175, 175, 175, 175, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 88, 81, 81, 82, 82, 82, 86, 86, 86, 86, 86, 86, 82, 82, 81, 81, 81, 89, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 83, 83, 0, 0, 86, 86, 0, 0, 83, 83, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 39, 0, 0, 0, 0, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 81, 81, 81, 81, 0, 0, 0, 0, 0, 0, 354, 422, 441, 441, 441, 441, 441, 441, 441, 441, 441, 441, 0, 374, 0, 2, 2, 2, 175, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 82, 81, 81, 81, 81, 86, 86, 86, 86, 86, 81, 81, 82, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 82, 83, 0, 0, 0, 0, 0, 0, 0, 0, 83, 82, 82, 85, 85, 85, 85, 85, 85, 85, 85, 85, 0, 0, 0, 0, 0, 81, 81, 39, 0, 82, 82, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 81, 81, 81, 81, 81, 0, 0, 0, 0, 0, 0, 364, 441, 441, 441, 441, 441, 441, 441, 441, 441, 441, 321, 0, 365, 2, 2, 0, 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 0, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 0, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 83, 83, 0, 0, 0, 0, 0, 0, 0, 0, 83, 83, 82, 0, 0, 0, 0, 0, 0, 0, 0, 75, 0, 0, 0, 0, 0, 88, 81, 81, 29, 81, 81, 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 441, 422, 422, 321, 365, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 86, 0, 0, 86, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 83, 0, 0, 86, 0, 0, 0, 0, 86, 0, 0, 83, 83, 0, 0, 0, 0, 0, 0, 0, 0, 75, 0, 0, 0, 0, 0, 0, 88, 81, 81, 81, 81, 89, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 96, 2, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 364, 441, 422, 422, 421, 321, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 81, 81, 198, 198, 0, 0, 86, 86, 86, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 2, 83, 0, 0, 86, 0, 0, 0, 0, 0, 81, 86, 0, 0, 83, 0, 0, 0, 0, 0, 0, 0, 0, 75, 0, 0, 0, 0, 0, 0, 0, 81, 81, 81, 89, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 97, 98, 0, 29, 39, 0, 97, 98, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 354, 422, 421, 321, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 81, 81, 198, 2, 81, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 88, 0, 0, 86, 0, 0, 0, 0, 0, 0, 86, 0, 0, 89, 0, 0, 0, 0, 0, 0, 0, 0, 75, 0, 0, 0, 0, 0, 0, 0, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 39, 81, 81, 0, 0, 96, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 354, 422, 421, 321, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 86, 49, 49, 49, 86, 81, 198, 2, 81, 369, 369, 369, 369, 369, 369, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 81, 96, 81, 73, 73, 73, 76, 76, 76, 81, 96, 81, 84, 76, 76, 76, 76, 76, 76, 76, 76, 76, 0, 0, 0, 0, 0, 0, 0, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 81, 81, 81, 82, 82, 96, 0, 59, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 422, 421, 321, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 51, 52, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 81, 81, 81, 81, 81, 0, 0, 0, 0, 0, 0, 11, 11, 11, 0, 0, 0, 354, 422, 421, 321, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 27, 27, 27, 2, 2, 2, 2, 27, 27, 27, 27, 2, 2, 0, 27, 27, 27, 2, 2, 0, 51, 52, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 88, 81, 81, 81, 81, 89, 0, 96, 0, 0, 0, 0, 11, 11, 11, 11, 0, 0, 354, 321, 321, 321, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 52, 0, 27, 27, 0, 27, 27, 27, 27, 2, 2, 2, 2, 2, 27, 27, 27, 27, 27, 27, 27, 2, 0, 51, 52, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 88, 81, 81, 89, 0, 0, 99, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 354, 321, 0, 365, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 149, 113,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 52, 27, 27, 27, 27, 27, 0, 0, 27, 27, 27, 27, 27, 27, 27, 0, 0, 27, 0, 27, 27, 27, 0, 51, 52, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 422, 0, 422, 422, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 138,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 51, 52, 0, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 0, 27, 27, 27, 27, 0, 51, 52, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 97, 98, 0, 0, 0, 0, 97, 98, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 422, 0, 422, 0, 441, 441, 441, 441, 441, 441, 441, 441, 441, 441, 0, 374, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 149, 113, 138,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 51, 52, 0, 27, 27, 27, 27, 27, 27, 82, 82, 82, 82, 82, 82, 82, 82, 82, 27, 27, 27, 27, 27, 27, 0, 51, 52, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 39, 81, 81, 0, 0, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 322, 422, 441, 441, 441, 441, 441, 441, 441, 441, 441, 441, 441, 441, 441, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 138, 138,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 51, 52, 0, 27, 27, 27, 27, 27, 82, 82, 83, 83, 83, 83, 83, 83, 83, 82, 82, 27, 27, 27, 27, 27, 0, 51, 52, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 81, 81, 81, 82, 82, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 422, 441, 441, 441, 441, 441, 441, 441, 441, 441, 441, 441, 441, 325, 0, 374, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 149, 113, 138, 138,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 51, 52, 0, 27, 27, 27, 27, 27, 82, 83, 83, 81, 81, 81, 81, 81, 83, 83, 82, 27, 27, 27, 0, 27, 0, 51, 52, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 88, 81, 81, 29, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 82, 0, 0, 0, 0, 364, 441, 441, 441, 441, 441, 441, 441, 441, 441, 441, 441, 441, 441, 321, 0, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 138, 138, 138,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 378, 0, 51, 52, 0, 0, 0, 27, 27, 27, 88, 83, 81, 89, 0, 0, 0, 88, 81, 83, 89, 27, 27, 27, 27, 27, 0, 51, 52, 0, 0, 0, 0, 0, 0, 2, 2, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 88, 81, 81, 81, 89, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 441, 422, 321, 321, 321, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 138, 138, 138,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 0, 51, 52, 0, 0, 0, 27, 27, 27, 27, 0, 86, 0, 0, 0, 0, 0, 86, 0, 27, 27, 27, 27, 27, 0, 0, 51, 52, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 81, 81, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 441, 422, 321, 321, 321, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 138, 138, 137,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 398, 0, 51, 52, 0, 27, 27, 27, 27, 27, 27, 0, 86, 0, 0, 0, 0, 0, 86, 0, 27, 27, 27, 0, 27, 27, 0, 51, 52, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 81, 89, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 81, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 321, 321, 321, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 134, 138, 138,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 51, 457, 0, 27, 27, 0, 0, 27, 0, 81, 86, 73, 76, 86, 86, 86, 86, 81, 0, 0, 27, 27, 27, 0, 0, 457, 457, 52, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 83, 83, 81, 0, 0, 0, 0, 0, 0, 0, 81, 81, 81, 81, 81, 81, 81, 0, 0, 354, 321, 321, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 138, 138,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 51, 457, 0, 27, 27, 27, 0, 27, 27, 27, 0, 27, 103, 1, 0, 27, 27, 0, 0, 27, 0, 0, 27, 27, 51, 457, 457, 52, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 81, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 83, 83, 81, 0, 0, 0, 0, 0, 0, 0, 81, 81, 86, 86, 86, 0, 81, 0, 0, 354, 321, 321, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 134, 138,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 51, 457, 52, 27, 0, 27, 0, 27, 27, 27, 0, 27, 103, 1, 0, 27, 27, 0, 27, 27, 27, 27, 27, 0, 51, 457, 457, 52, 354, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 81, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 83, 83, 83, 0, 0, 0, 0, 0, 0, 0, 0, 81, 86, 86, 86, 0, 0, 0, 0, 354, 321, 321, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 138,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 51, 457, 457, 52, 27, 0, 0, 27, 27, 27, 0, 36, 0, 0, 0, 0, 27, 27, 27, 27, 27, 0, 27, 0, 0, 51, 457, 457, 52, 364, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 86, 86, 86, 0, 0, 0, 0, 354, 321, 321, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 138,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 103, 103, 103, 103, 103, 27, 27, 27, 27, 0, 0, 27, 27, 0, 0, 0, 0, 27, 27, 27, 27, 27, 0, 0, 103, 103, 457, 457, 103, 103, 364, 385, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 0, 86, 0, 0, 0, 0, 321, 321, 321, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 149, 113, 138,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 369, 385, 0, 0, 103, 103, 103, 27, 27, 27, 0, 27, 27, 103, 0, 0, 0, 103, 0, 0, 27, 0, 0, 0, 103, 103, 103, 103, 103, 103, 103, 103, 364, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 321, 321, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 103, 6, 6, 447, 447, 447, 6, 6, 1, 0, 0, 0, 0, 2, 2, 2, 0, 2, 138, 138,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 27, 0, 0, 368, 385, 0, 103, 103, 103, 103, 447, 447, 447, 447, 103, 103, 0, 0, 0, 103, 103, 447, 447, 447, 447, 447, 103, 103, 103, 103, 103, 103, 103, 103, 103, 103, 103, 6, 6, 0, 0, 0, 0, 0, 6, 103, 103, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 103, 6, 6, 447, 447, 447, 6, 6, 1, 0, 0, 0, 0, 0, 0, 6, 6, 103, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 103, 103, 103, 447, 447, 447, 447, 447, 447, 1, 0, 0, 0, 0, 2, 2, 2, 149, 113, 138, 138,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 103, 103, 0, 0, 0, 447, 103, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 447, 447, 447, 447, 103, 103, 2, 2, 103, 103, 103, 447, 447, 447, 16, 16, 0, 0, 0, 0, 0, 103, 103, 103, 103, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 103, 103, 103, 447, 447, 447, 447, 447, 447, 1, 0, 0, 0, 0, 447, 447, 447, 103, 103, 103, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 447, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 447, 1, 6, 0, 0, 0, 0, 6, 447, 447, 103, 103, 103, 103, 103, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 138, 138, 138,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 378, 398, 103, 103, 103, 103, 103, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 103, 2, 2, 2, 2, 103, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 103, 103, 103, 103, 447, 447, 447, 2, 1, 1, 6, 0, 0, 0, 0, 6, 447, 447, 103, 103, 103, 103, 103, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 364, 103, 103, 103, 103, 447, 447, 447, 447, 447, 0, 0, 0, 0, 0, 16, 16, 16, 1, 1, 1, 1, 1, 0, 16, 16, 16, 16, 16, 16, 0, 0, 0, 0, 0, 0, 0, 0, 365, 1, 1, 0, 0, 0, 0, 447, 447, 447, 447, 103, 103, 103, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 138, 138, 138,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 0, 0, 103, 103, 0, 0, 0, 27, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 395, 0, 0, 0, 0, 0, 0, 0, 0, 2, 103, 103, 103, 447, 447, 447, 447, 2, 1, 1, 0, 0, 0, 0, 447, 447, 447, 447, 103, 103, 103, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 103, 103, 447, 447, 447, 447, 447, 447, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 321, 321, 321, 321, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 16, 103, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 138, 138, 137,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 375, 103, 103, 103, 103, 0, 398, 0, 0, 27, 369, 369, 369, 369, 385, 0, 0, 0, 0, 0, 0, 395, 369, 369, 369, 369, 385, 0, 0, 0, 0, 0, 395, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 103, 16, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 16, 103, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 103, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 321, 321, 321, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 134, 138, 138,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 51, 457, 457, 52, 385, 27, 27, 27, 27, 0, 0, 0, 0, 364, 369, 369, 369, 369, 369, 369, 375, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 149, 139, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 321, 321, 321, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 138, 138,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 103, 1, 0, 103, 27, 27, 27, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 149, 139, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148, 159, 0, 149, 139, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 321, 321, 321, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 134, 138,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 27, 27, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 149, 139, 0, 0, 0, 148, 159, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148, 159, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 321, 321, 321, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 138,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 27, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 149, 139, 0, 0, 0, 149, 139, 0, 149, 139, 0, 0, 0, 0, 134, 124, 0, 0, 0, 0, 0, 149, 139, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 321, 321, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 138,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 51, 457, 457, 52, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 82, 82, 82, 82, 82, 82, 82, 0, 0, 0, 2, 2, 0, 148, 159, 0, 0, 0, 148, 159, 0, 148, 159, 0, 0, 0, 0, 148, 157, 0, 0, 0, 0, 0, 148, 159, 0, 0, 0, 0, 149, 139, 0, 0, 0, 149, 139, 0, 0, 0, 149, 139, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 321, 321, 0, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 149, 113, 138,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 51, 457, 457, 52, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 81, 81, 81, 81, 81, 81, 81, 81, 82, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 134, 124, 0, 0, 0, 148, 159, 0, 0, 0, 148, 159, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 321, 321, 321, 0, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 138, 138,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 82, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 149, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148, 157, 0, 0, 0, 0, 0, 149, 139, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 378, 379, 428, 428, 428, 428, 428, 321, 321, 321, 0, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 138, 138,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 81, 83, 83, 83, 83, 83, 83, 83, 83, 81, 81, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 134, 124, 0, 0, 0, 0, 0, 0, 149, 139, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148, 159, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 428, 438, 438, 438, 438, 438, 438, 321, 321, 321, 365, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 263, 263, 0, 0, 0, 0, 0, 0, 2, 138, 138,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 83, 86, 86, 86, 86, 86, 86, 86, 86, 83, 81, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148, 157, 124, 0, 0, 0, 0, 0, 148, 159, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 378, 321, 353, 428, 428, 428, 428, 428, 428, 321, 321, 365, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 221, 0, 0, 2, 2, 0, 0, 0, 0, 2, 134, 138,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 81, 86, 86, 86, 86, 86, 86, 86, 86, 81, 83, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148, 157, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 149, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 73, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 321, 321, 428, 0, 438, 438, 438, 438, 438, 369, 375, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 241, 0, 0, 379, 379, 374, 0, 0, 0, 0, 2, 134,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 86, 86, 86, 86, 86, 86, 86, 86, 81, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 149, 149, 139, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 134, 124, 0, 0, 0, 0, 0, 0, 0, 0, 149, 0, 0, 0, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 321, 321, 321, 0, 428, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 231, 0, 0, 132, 137, 176, 1, 1, 1, 0, 2, 2,
				            384, 383, 384, 383, 384, 383, 384, 383, 384, 383, 384, 383, 384, 383, 384, 383, 384, 383, 384, 383, 384, 383, 384, 383, 384, 383, 384, 383, 384, 383, 384, 383, 384, 383, 384, 383, 384, 383, 384, 383, 384, 0, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 86, 86, 86, 2, 2, 86, 86, 86, 81, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 134, 124, 124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 149, 139, 0, 0, 0, 0, 148, 157, 0, 0, 0, 0, 0, 0, 0, 0, 134, 124, 0, 0, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 321, 321, 321, 322, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 221, 0, 0, 132, 138, 176, 1, 1, 2684354561, 0, 0, 0,
				            394, 393, 394, 393, 394, 393, 394, 393, 394, 393, 394, 393, 394, 393, 394, 393, 394, 393, 394, 393, 394, 393, 394, 393, 394, 393, 394, 393, 394, 393, 394, 393, 394, 393, 394, 393, 394, 393, 394, 393, 394, 0, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 86, 86, 86, 2, 2, 86, 86, 86, 81, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 148, 157, 157, 0, 0, 0, 0, 0, 0, 0, 192, 0, 0, 0, 148, 159, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148, 157, 0, 0, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 321, 321, 321, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 263, 263, 263, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 221, 0, 0, 132, 132, 132, 374, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 86, 86, 2, 2, 2, 2, 86, 86, 81, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 134, 124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 321, 321, 321, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 221, 0, 0, 0, 233, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 251, 251, 223, 0, 132, 0, 0, 2, 2, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 86, 86, 2, 2, 2, 2, 86, 86, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148, 157, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 149, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 321, 321, 321, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 162, 274, 0, 0, 272, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 221, 0, 132, 132, 0, 0, 2, 0, 0,
				            0, 0, 0, 0, 0, 0, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 73, 73, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 134, 124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 321, 321, 321, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 221, 0, 0, 272, 251, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 251, 251, 251, 251, 251, 0, 0, 0,
				            6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 149, 139, 0, 0, 0, 0, 0, 0, 192, 192, 192, 192, 192, 2, 2, 0, 0, 0, 0, 0, 0, 0, 148, 157, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 321, 321, 321, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 251, 251, 251, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 378, 379, 379, 379, 379, 374, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148, 159, 0, 192, 192, 0, 0, 192, 303, 313, 314, 304, 192, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 321, 321, 321, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 264, 244, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 378, 398, 0, 0, 0, 0, 388, 374, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 149, 139, 0, 75, 85, 0, 192, 0, 0, 192, 192, 64, 64, 65, 65, 0, 192, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 321, 321, 321, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 263, 262, 263, 263, 261, 0, 0, 0, 0, 0, 221, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 378, 398, 0, 0, 0, 0, 0, 0, 388, 374, 0, 0, 0, 0, 2, 2, 0, 0, 2, 0, 0, 0, 148, 159, 0, 75, 0, 0, 0, 0, 192, 192, 0, 64, 288, 289, 65, 0, 0, 192, 0, 0, 0, 0, 0, 0, 149, 139, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 321, 321, 321, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 221, 0, 0, 0, 0, 0, 271, 222, 0, 0, 0, 221, 244, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 149, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 0, 0, 0, 0, 0, 0, 0, 0, 365, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 75, 192, 0, 0, 0, 192, 0, 0, 0, 199, 199, 0, 0, 0, 192, 192, 0, 0, 0, 0, 0, 148, 159, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 321, 321, 321, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 231, 271, 0, 0, 0, 243, 0, 0, 271, 232, 0, 0, 221, 0, 0, 0, 0, 0, 272, 251, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 134, 124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 0, 0, 0, 0, 0, 0, 0, 0, 365, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 192, 0, 0, 149, 0, 0, 0, 0, 0, 0, 0, 0, 0, 192, 192, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 321, 321, 321, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 221, 0, 0, 0, 0, 0, 0, 0, 0, 242, 0, 0, 221, 0, 0, 0, 0, 272, 251, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 149, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148, 157, 124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 149, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 0, 0, 0, 0, 0, 0, 0, 0, 365, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 134, 124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 192, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 354, 322, 322, 322, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 221, 273, 0, 0, 0, 0, 0, 0, 0, 271, 242, 0, 221, 0, 0, 272, 251, 251, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 134, 124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148, 157, 0, 0, 0, 0, 0, 0, 0, 0, 0, 134, 124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 0, 0, 0, 0, 0, 0, 0, 0, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 192, 0, 0, 0, 148, 157, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 192, 192, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 354, 321, 0, 365, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 221, 0, 0, 0, 0, 0, 0, 0, 0, 222, 0, 0, 251, 251, 251, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 148, 157, 124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148, 157, 124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 0, 0, 0, 0, 0, 0, 0, 0, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 192, 192, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 354, 422, 0, 365, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 241, 0, 0, 0, 0, 0, 243, 0, 0, 232, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 148, 157, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148, 157, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 364, 385, 0, 0, 0, 0, 0, 0, 395, 375, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 192, 192, 192, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 354, 422, 0, 365, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 221, 0, 273, 0, 0, 0, 0, 0, 0, 242, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 149, 0, 0, 0, 0, 0, 0, 0, 149, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 364, 385, 0, 0, 0, 0, 395, 375, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 134, 124, 0, 0, 0, 0, 0, 0, 0, 0, 149, 192, 192, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 354, 422, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 251, 231, 0, 0, 0, 0, 0, 254, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 395, 375, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 134, 124, 0, 0, 0, 0, 0, 0, 134, 124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 364, 369, 369, 369, 369, 375, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148, 159, 0, 0, 0, 0, 0, 0, 0, 0, 134, 192, 192, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 354, 422, 0, 365, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 251, 252, 253, 251, 251, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148, 157, 124, 0, 0, 0, 0, 0, 148, 157, 124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148, 157, 192, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 354, 422, 0, 0, 422, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148, 157, 0, 0, 0, 0, 0, 0, 148, 157, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 422, 0, 422, 0, 441, 441, 441, 441, 441, 441, 441, 0, 374, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 149, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 322, 422, 441, 441, 441, 441, 441, 441, 441, 441, 441, 441, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 134, 124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 149, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 422, 441, 441, 441, 441, 441, 441, 441, 441, 441, 325, 0, 374, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 148, 157, 124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 149, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 134, 124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 364, 441, 441, 441, 441, 441, 441, 441, 441, 441, 441, 321, 0, 365, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 148, 157, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 134, 124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148, 157, 124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 441, 422, 422, 321, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148, 157, 124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148, 157, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 364, 441, 422, 422, 421, 321, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148, 157, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 364, 385, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 354, 422, 421, 321, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 91, 0, 0, 0, 0, 0, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 91, 91, 0, 0, 0, 0, 0, 0, 0, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 91, 91, 91, 91, 0, 0, 0, 0, 0, 0, 0, 91, 91, 91, 91, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 91, 91, 91, 91, 0, 0, 0, 0, 0, 0, 0, 91, 91, 91, 91, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 91, 91, 91, 91, 0, 0, 0, 0, 0, 0, 0, 91, 91, 91, 91, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 91, 91, 91, 91, 0, 0, 0, 0, 0, 0, 0, 91, 91, 91, 91, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 91, 91, 91, 91, 91, 91, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 0, 0, 0, 0, 0, 0, 0, 91, 91, 91, 91, 91, 0, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 0, 0, 0, 0, 0, 0, 0, 91, 91, 91, 91, 91, 0, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 0, 0, 0, 0, 0, 0, 0, 91, 91, 91, 91, 91, 0, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 0, 0, 0, 0, 0, 0, 0, 91, 91, 91, 91, 91, 0, 91, 91, 91, 91, 91, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 97, 98, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 91, 91, 47, 17, 17, 17, 56, 91, 91, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 91, 91, 0, 48, 0, 0, 56, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 91, 47, 0, 0, 0, 56, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 91, 91, 91, 91, 91, 91, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 91, 91, 91, 97, 96, 96, 98, 91, 91, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 56, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 91, 91, 91, 91, 91, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 91, 97, 96, 96, 96, 96, 98, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 56, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 91, 91, 91, 91, 91, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 282, 99, 82, 82, 82, 79, 96, 98, 0, 0, 0, 0, 0, 0, 0, 97, 98, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 282, 88, 81, 95, 95, 0, 79, 282, 0, 0, 0, 0, 0, 0, 69, 96, 96, 59, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 281, 0, 0, 0, 0, 0, 0, 0, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 282, 0, 0, 81, 81, 0, 0, 282, 91, 91, 91, 97, 98, 91, 97, 96, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 0, 281, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 0, 0, 0, 0, 0, 97, 98, 0, 0, 0, 0, 91, 0, 282, 0, 88, 81, 97, 98, 0, 282, 91, 91, 97, 96, 96, 96, 96, 96, 96, 96, 98, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 91, 91, 91, 91, 91, 91, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 281, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 91, 91, 91, 91, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 0, 0, 0, 0, 69, 96, 96, 98, 0, 0, 0, 0, 0, 282, 0, 97, 96, 99, 81, 0, 0, 91, 91, 79, 96, 96, 96, 96, 99, 79, 96, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 91, 91, 91, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 281, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 0, 0, 0, 0, 0, 79, 96, 99, 0, 0, 0, 0, 0, 282, 0, 29, 49, 81, 89, 0, 0, 0, 91, 91, 91, 91, 79, 96, 96, 98, 49, 99, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 91, 91, 91, 91, 91, 91, 0, 0, 0, 0, 0, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 281, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 0, 97, 96, 96, 98, 0, 0, 97, 96, 98, 0, 0, 0, 282, 0, 88, 81, 97, 96, 98, 0, 0, 0, 0, 91, 91, 91, 96, 96, 99, 91, 0, 0, 0, 0, 0, 0, 91, 91, 91, 0, 0, 91, 0, 91, 91, 0, 0, 91, 0, 0, 0, 0, 0, 0, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 281, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 92, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 92, 92, 92, 92, 92, 92, 92, 0, 0, 0, 0, 0, 79, 96, 96, 99, 0, 97, 96, 96, 96, 59, 0, 0, 282, 0, 0, 81, 81, 79, 96, 98, 0, 0, 0, 92, 92, 69, 81, 49, 81, 92, 0, 0, 0, 0, 0, 92, 288, 289, 288, 289, 92, 92, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 92, 281, 0, 47, 0, 0, 0, 0, 92, 92, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 96, 96, 96, 96, 96, 49, 99, 0, 0, 0, 282, 0, 97, 59, 81, 0, 49, 49, 0, 0, 0, 0, 0, 0, 0, 81, 89, 0, 0, 0, 0, 0, 0, 0, 354, 322, 322, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 281, 55, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 69, 96, 96, 96, 96, 96, 99, 0, 0, 0, 0, 0, 282, 97, 96, 0, 68, 97, 98, 0, 0, 0, 0, 0, 0, 97, 98, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 422, 0, 149, 139, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 281, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 96, 49, 0, 0, 0, 0, 0, 0, 97, 96, 96, 74, 78, 75, 96, 96, 98, 0, 0, 0, 0, 96, 96, 96, 98, 0, 0, 0, 0, 0, 0, 0, 0, 422, 0, 134, 124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 281, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 81, 59, 0, 0, 11, 2, 2, 49, 49, 49, 74, 0, 75, 49, 49, 49, 2, 2, 2, 97, 96, 96, 96, 96, 98, 0, 0, 11, 11, 0, 0, 0, 422, 0, 148, 159, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 73, 0, 0, 0, 77, 0, 76, 0, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 82, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 97, 98, 81, 0, 0, 0, 11, 11, 2, 2, 0, 73, 74, 0, 75, 76, 0, 0, 0, 0, 0, 49, 49, 49, 49, 49, 49, 0, 11, 11, 11, 0, 0, 0, 422, 0, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 87, 0, 175, 175, 175, 175, 175, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 96, 96, 98, 0, 0, 11, 11, 11, 2, 0, 0, 1, 0, 1, 2, 0, 0, 11, 11, 0, 0, 0, 82, 82, 0, 0, 0, 0, 11, 11, 0, 149, 139, 422, 0, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 175, 175, 175, 175, 175, 175, 175, 2, 175, 175, 175, 175, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 81, 81, 83, 83, 83, 83, 83, 83, 83, 83, 83, 83, 83, 83, 81, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 86, 86, 83, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 97, 96, 96, 96, 96, 98, 0, 11, 11, 2, 2, 0, 0, 1, 0, 1, 2, 2, 11, 11, 11, 11, 0, 82, 81, 81, 82, 2, 0, 0, 11, 11, 0, 134, 124, 422, 0, 388, 374, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 175, 175, 2, 2, 175, 175, 1, 2, 2, 2, 175, 175, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 81, 83, 83, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 83, 83, 81, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 86, 86, 86, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49, 49, 49, 49, 49, 49, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 2, 11, 11, 0, 82, 81, 81, 81, 81, 82, 0, 0, 0, 0, 0, 148, 159, 422, 0, 0, 388, 379, 379, 379, 379, 379, 379, 374, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 175, 2, 1, 1, 1, 2, 2, 2, 2, 175, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 83, 83, 86, 95, 86, 86, 106, 107, 108, 109, 86, 86, 95, 86, 83, 83, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 95, 95, 86, 86, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 2, 0, 81, 81, 83, 83, 81, 81, 0, 0, 0, 0, 0, 0, 364, 385, 422, 441, 441, 441, 441, 441, 441, 441, 441, 388, 374, 2, 0, 175, 175, 175, 175, 175, 175, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 83, 86, 95, 95, 95, 86, 116, 117, 118, 119, 86, 95, 95, 95, 86, 83, 83, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 86, 95, 95, 86, 86, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 97, 96, 96, 98, 0, 0, 97, 96, 98, 0, 0, 1, 2, 2, 2, 2, 2, 0, 0, 81, 83, 83, 83, 83, 81, 0, 0, 0, 0, 0, 0, 2, 364, 385, 441, 441, 441, 441, 441, 441, 441, 441, 441, 388, 149, 139, 2, 2, 2, 175, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 86, 95, 95, 95, 86, 126, 127, 128, 129, 86, 95, 95, 95, 86, 81, 281, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 0, 0, 0, 0, 0, 0, 86, 0, 0, 0, 76, 76, 76, 76, 76, 76, 76, 76, 0, 0, 0, 0, 79, 96, 96, 99, 0, 97, 96, 96, 96, 59, 2, 2, 2, 2, 0, 0, 0, 0, 0, 83, 83, 83, 83, 83, 83, 0, 0, 0, 0, 0, 0, 2, 2, 364, 369, 369, 369, 369, 369, 369, 385, 441, 321, 0, 134, 124, 2, 0, 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 1, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 86, 49, 49, 49, 86, 86, 86, 86, 86, 86, 49, 49, 49, 86, 81, 281, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 29, 81, 81, 39, 86, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 96, 96, 96, 96, 96, 96, 99, 0, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 97, 98, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 364, 385, 422, 321, 148, 159, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 86, 86, 95, 86, 86, 29, 81, 81, 39, 86, 86, 95, 86, 86, 81, 281, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 29, 89, 0, 0, 88, 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 96, 96, 96, 96, 99, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 2, 11, 0, 0, 2, 97, 98, 97, 96, 96, 59, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 354, 422, 421, 365, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 86, 95, 95, 95, 86, 81, 467, 468, 81, 86, 95, 95, 95, 86, 81, 281, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 96, 96, 49, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 11, 11, 11, 0, 2, 96, 96, 96, 96, 96, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 422, 421, 365, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 86, 95, 95, 95, 86, 0, 477, 478, 0, 86, 95, 95, 95, 86, 81, 281, 2, 2, 2, 2, 2, 2, 0, 0, 0, 83, 0, 0, 29, 89, 0, 0, 0, 0, 88, 39, 0, 0, 83, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 81, 59, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 11, 11, 11, 0, 97, 96, 96, 96, 99, 49, 97, 96, 96, 98, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 422, 421, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 369, 369, 369, 369, 369, 369, 0, 487, 488, 0, 49, 49, 49, 49, 49, 369, 281, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 369, 369, 369, 385, 0, 0, 0, 0, 395, 369, 369, 369, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 97, 98, 81, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 2, 2, 2, 2, 79, 96, 96, 99, 0, 0, 79, 96, 96, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 422, 421, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 1, 1, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 51, 457, 457, 52, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 457, 457, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 96, 96, 98, 0, 0, 11, 11, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 97, 96, 96, 98, 49, 96, 96, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 422, 421, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 2, 2, 2,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 51, 457, 457, 52, 0, 0, 378, 379, 374, 73, 73, 73, 74, 2, 2, 2, 2, 84, 76, 2, 378, 379, 374, 0, 0, 0, 457, 457, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 0, 2, 2, 2, 2, 0, 97, 96, 96, 96, 96, 98, 0, 11, 11, 11, 0, 1, 1, 1, 2, 2, 0, 0, 0, 0, 0, 88, 96, 96, 96, 99, 0, 96, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 149, 139, 321, 321, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 149,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 51, 457, 457, 0, 0, 378, 398, 0, 388, 379, 379, 374, 73, 73, 73, 76, 2, 378, 379, 379, 398, 0, 388, 374, 0, 0, 457, 457, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 0, 0, 2, 2, 2, 2, 0, 49, 49, 49, 49, 49, 49, 0, 11, 11, 11, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 2, 79, 96, 49, 0, 0, 79, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 134, 124, 321, 0, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 149, 134,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 51, 457, 457, 0, 378, 398, 0, 26, 0, 27, 27, 388, 379, 379, 379, 379, 379, 398, 27, 27, 0, 0, 0, 388, 374, 0, 457, 457, 0, 0, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 1, 1, 2, 0, 0, 0, 0, 0, 0, 81, 81, 59, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148, 159, 422, 0, 388, 374, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 134, 157,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 457, 457, 0, 398, 0, 0, 0, 0, 0, 82, 82, 82, 82, 82, 82, 82, 82, 82, 0, 0, 0, 0, 0, 388, 0, 457, 457, 0, 0, 0, 2, 0, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 97, 98, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 97, 98, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 422, 0, 0, 388, 379, 379, 379, 379, 379, 379, 379, 379, 379, 374, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 2, 2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 149, 134, 157,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 457, 457, 0, 0, 0, 0, 0, 0, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 0, 0, 26, 36, 0, 0, 457, 457, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 97, 96, 96, 98, 49, 49, 97, 96, 98, 0, 2, 2, 0, 1, 1, 0, 0, 0, 0, 0, 96, 96, 96, 98, 0, 0, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 2, 364, 385, 422, 441, 441, 441, 441, 441, 441, 441, 441, 441, 441, 441, 388, 374, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 134, 157, 157,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 457, 457, 0, 0, 26, 0, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 457, 457, 0, 0, 73, 73, 73, 73, 73, 76, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 79, 96, 96, 96, 98, 0, 79, 96, 96, 59, 2, 2, 0, 1, 1, 1, 0, 0, 0, 97, 96, 96, 96, 96, 98, 0, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 364, 385, 441, 441, 441, 441, 441, 441, 441, 441, 441, 441, 441, 441, 388, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 149, 134, 157, 157,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 457, 457, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49, 49, 49, 49, 49, 0, 0, 0, 26, 0, 0, 0, 0, 0, 457, 457, 0, 0, 74, 0, 0, 0, 0, 75, 0, 0, 0, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 79, 96, 96, 96, 98, 49, 99, 0, 2, 2, 0, 0, 1, 1, 0, 0, 0, 49, 49, 49, 49, 49, 49, 0, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 364, 369, 369, 369, 369, 369, 369, 369, 369, 369, 385, 441, 321, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 134, 157, 157, 157,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 457, 457, 0, 0, 0, 0, 36, 0, 83, 0, 49, 0, 0, 0, 0, 0, 49, 0, 83, 27, 36, 27, 27, 27, 0, 457, 457, 0, 2, 74, 0, 0, 2, 0, 75, 0, 0, 0, 0, 1, 1, 1, 1, 0, 2, 2, 2, 2, 0, 0, 0, 0, 79, 96, 96, 99, 0, 0, 0, 2, 2, 0, 0, 1, 1, 1, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 364, 385, 321, 321, 365, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 134, 157, 157, 157,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 457, 457, 0, 0, 0, 0, 0, 0, 365, 49, 0, 0, 0, 0, 0, 0, 0, 49, 354, 0, 27, 27, 27, 27, 0, 457, 457, 0, 2, 74, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 1, 2, 2, 2, 0, 2, 2, 0, 0, 81, 49, 0, 59, 0, 0, 2, 2, 0, 0, 0, 1, 1, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 82, 82, 82, 82, 82, 0, 0, 2, 354, 321, 321, 365, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 134, 157, 157, 147,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 457, 457, 0, 0, 27, 0, 0, 0, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 0, 0, 0, 0, 0, 0, 457, 457, 0, 2, 73, 73, 73, 76, 0, 1, 0, 0, 73, 73, 73, 73, 73, 76, 0, 1, 2, 0, 2, 2, 2, 2, 0, 0, 81, 81, 0, 0, 0, 0, 2, 2, 0, 0, 0, 1, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 82, 81, 81, 81, 81, 81, 82, 0, 149, 139, 321, 321, 365, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 1, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 148, 125, 157, 157,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 457, 0, 0, 0, 36, 27, 0, 27, 365, 369, 369, 0, 0, 0, 0, 369, 369, 369, 354, 0, 0, 27, 0, 0, 0, 457, 457, 395, 2, 2, 2, 0, 0, 0, 1, 0, 0, 74, 0, 0, 0, 0, 75, 0, 1, 1, 0, 0, 0, 0, 0, 0, 97, 98, 81, 0, 0, 0, 0, 2, 2, 0, 0, 0, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 81, 83, 83, 83, 83, 83, 81, 0, 134, 124, 321, 321, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 134, 157, 157,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 457, 0, 0, 0, 0, 0, 0, 27, 0, 0, 0, 0, 51, 457, 52, 0, 0, 0, 27, 0, 27, 0, 0, 0, 0, 0, 0, 365, 2, 2, 2, 0, 0, 2, 1, 1, 0, 74, 0, 0, 2, 0, 75, 0, 2, 1, 0, 2, 0, 0, 0, 0, 96, 96, 96, 98, 0, 0, 0, 2, 2, 2, 2, 0, 2, 1, 1, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 83, 81, 95, 95, 95, 81, 83, 0, 148, 159, 321, 321, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 148, 125, 157,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 457, 0, 0, 0, 0, 27, 0, 0, 0, 0, 27, 0, 51, 457, 52, 0, 27, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 365, 2, 2, 2, 0, 2, 2, 2, 1, 0, 74, 0, 0, 0, 0, 0, 0, 2, 1, 0, 2, 0, 0, 0, 97, 96, 96, 96, 96, 98, 0, 0, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 81, 0, 0, 0, 81, 0, 0, 0, 354, 321, 321, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 134, 157,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 457, 0, 395, 369, 385, 0, 0, 0, 27, 0, 0, 395, 385, 0, 395, 385, 0, 27, 0, 0, 0, 0, 395, 369, 385, 0, 0, 365, 2, 2, 2, 2, 2, 2, 0, 1, 0, 73, 73, 73, 76, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 49, 49, 49, 49, 49, 49, 0, 0, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 81, 0, 198, 0, 81, 0, 0, 0, 354, 321, 321, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 134, 157,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 457, 457, 388, 374, 368, 385, 0, 0, 0, 0, 395, 375, 354, 0, 365, 364, 385, 27, 0, 0, 0, 395, 375, 378, 398, 0, 0, 388, 374, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 81, 96, 198, 96, 81, 0, 0, 0, 354, 321, 321, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 0, 149, 134, 157,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 103, 0, 388, 374, 368, 385, 0, 0, 395, 375, 378, 398, 0, 388, 374, 364, 385, 0, 0, 395, 375, 378, 398, 0, 0, 0, 0, 388, 374, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 11, 11, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 73, 73, 73, 76, 76, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 378, 398, 388, 379, 379, 379, 374, 2, 1, 1, 1, 2, 2, 2, 2, 2, 0, 134, 157, 157,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 103, 0, 0, 388, 379, 398, 0, 0, 388, 379, 398, 0, 0, 0, 388, 379, 398, 0, 0, 388, 379, 398, 0, 395, 369, 369, 385, 0, 388, 379, 379, 379, 398, 0, 0, 0, 0, 0, 0, 388, 379, 374, 0, 0, 1, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 378, 398, 388, 379, 379, 379, 374, 2, 1, 1, 1, 2, 2, 378, 398, 0, 388, 374, 0, 0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 378, 398, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 388, 374, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 378, 398, 0, 0, 0, 0, 0, 388, 374, 2, 1, 1, 1, 2, 2, 2, 2, 149, 134, 157, 157,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 354, 103, 103, 103, 103, 447, 447, 447, 447, 447, 447, 447, 447, 447, 447, 447, 447, 447, 447, 0, 0, 0, 0, 395, 375, 0, 0, 368, 385, 0, 0, 0, 0, 447, 447, 447, 447, 447, 447, 447, 0, 0, 388, 374, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 378, 398, 0, 0, 0, 0, 0, 388, 374, 2, 1, 1, 1, 2, 364, 385, 0, 0, 388, 374, 0, 0, 0, 2, 2, 0, 0, 1, 1, 0, 354, 447, 447, 447, 447, 447, 447, 447, 447, 447, 447, 447, 447, 447, 447, 447, 447, 447, 447, 447, 447, 447, 447, 365, 1, 2, 2, 2, 364, 385, 388, 379, 379, 379, 398, 0, 395, 369, 385, 0, 0, 0, 388, 374, 2, 2, 1, 1, 2, 2, 2, 134, 157, 157, 157,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 103, 395, 369, 369, 385, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 395, 375, 0, 0, 0, 0, 368, 385, 0, 0, 0, 0, 0, 0, 0, 0, 0, 395, 369, 385, 0, 388, 379, 379, 374, 2, 1, 1, 2, 2, 2, 364, 385, 388, 379, 379, 379, 398, 0, 395, 369, 385, 0, 0, 0, 388, 374, 2, 2, 1, 1, 2, 0, 369, 385, 0, 388, 379, 379, 379, 379, 374, 0, 0, 1, 1, 0, 364, 385, 16, 16, 16, 16, 16, 16, 16, 73, 73, 73, 76, 76, 76, 16, 16, 16, 16, 0, 0, 0, 395, 375, 1, 1, 1, 2, 2, 364, 385, 0, 0, 0, 0, 395, 375, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 134, 157, 157, 157,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 103, 365, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 368, 385, 0, 0, 0, 388, 374, 0, 1, 1, 1, 2, 2, 364, 385, 0, 0, 0, 0, 395, 375, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 368, 385, 0, 0, 0, 0, 0, 365, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 321, 321, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 364, 385, 0, 0, 395, 375, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 134, 157, 157, 147,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 354, 457, 457, 365, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 368, 385, 0, 0, 0, 388, 374, 0, 0, 1, 1, 2, 2, 364, 385, 0, 0, 395, 375, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 368, 385, 0, 0, 0, 395, 375, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 321, 321, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 148, 125, 157, 157,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 398, 457, 457, 388, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 321, 321, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 134, 157, 157,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 51, 457, 457, 52, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 2, 2, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 321, 321, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 148, 125, 157,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 51, 457, 457, 52, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 378, 379, 374, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 321, 321, 365, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 378, 379, 379, 374, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 134, 157,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 51, 457, 457, 52, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 378, 398, 148, 147, 374, 0, 0, 0, 0, 0, 0, 0, 0, 75, 378, 379, 374, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 321, 321, 149, 139, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 378, 379, 379, 398, 0, 0, 388, 379, 379, 379, 374, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 134, 157,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 385, 457, 457, 395, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 0, 0, 159, 365, 73, 74, 0, 0, 0, 0, 0, 75, 76, 354, 0, 388, 374, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 321, 0, 134, 124, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 378, 398, 0, 0, 0, 0, 0, 0, 0, 0, 0, 388, 379, 374, 0, 0, 0, 0, 0, 0, 0, 0, 2, 149, 134, 157,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 364, 369, 369, 375, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 0, 0, 0, 388, 374, 74, 0, 0, 0, 0, 0, 75, 378, 398, 148, 147, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 378, 398, 321, 0, 148, 159, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 378, 379, 398, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 388, 379, 374, 0, 0, 0, 0, 0, 0, 2, 134, 157, 157,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 378, 398, 139, 0, 0, 0, 365, 74, 0, 0, 0, 0, 0, 75, 354, 0, 0, 159, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 378, 379, 379, 379, 379, 398, 321, 321, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 378, 398, 0, 0, 0, 0, 0, 0, 0, 0, 263, 261, 262, 0, 0, 0, 0, 0, 388, 374, 0, 0, 0, 0, 0, 2, 134, 157, 157,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 354, 148, 147, 139, 0, 0, 365, 74, 0, 0, 0, 0, 0, 378, 398, 0, 0, 0, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 149, 139, 378, 398, 438, 438, 438, 438, 438, 321, 321, 395, 375, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 378, 398, 0, 0, 0, 0, 0, 0, 263, 263, 264, 244, 0, 0, 233, 0, 0, 0, 0, 0, 365, 0, 0, 0, 0, 0, 0, 134, 157, 157,
	            0, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 76, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 73, 73, 73, 73, 73, 73, 73, 73, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 0, 0, 0, 0, 0, 0, 83, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 378, 374, 73, 73, 74, 0, 0, 368, 385, 159, 147, 0, 0, 365, 0, 0, 0, 0, 0, 0, 354, 0, 0, 0, 395, 375, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 134, 124, 398, 428, 428, 428, 428, 428, 428, 428, 395, 375, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 378, 379, 398, 0, 0, 0, 0, 0, 0, 231, 0, 0, 0, 0, 0, 0, 272, 0, 0, 0, 0, 0, 365, 2, 2, 0, 0, 0, 0, 148, 125, 157,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 0, 95, 95, 0, 0, 95, 95, 0, 83, 0, 0, 0, 0, 0, 0, 0, 2, 378, 398, 388, 379, 374, 73, 74, 0, 0, 354, 0, 159, 0, 0, 375, 0, 0, 0, 0, 0, 378, 398, 0, 139, 0, 365, 0, 0, 0, 0, 0, 378, 379, 379, 374, 73, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148, 159, 0, 321, 0, 395, 369, 369, 369, 369, 375, 2, 2, 0, 2, 0, 0, 0, 0, 0, 378, 379, 398, 0, 0, 0, 0, 0, 0, 0, 0, 221, 0, 0, 254, 223, 0, 244, 0, 222, 0, 0, 0, 0, 388, 149, 113, 113, 139, 0, 0, 0, 148, 125,
	            113, 113, 113, 113, 113, 113, 113, 113, 113, 113, 113, 113, 113, 113, 113, 113, 113, 113, 113, 113, 113, 113, 113, 113, 139, 0, 0, 0, 0, 0, 0, 0, 0, 149, 113, 113, 113, 113, 113, 113, 113, 139, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 95, 95, 0, 0, 95, 95, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 354, 0, 0, 139, 388, 374, 73, 74, 0, 368, 385, 0, 0, 0, 0, 0, 0, 0, 0, 0, 368, 385, 148, 147, 0, 365, 0, 0, 0, 0, 378, 398, 0, 139, 388, 374, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 354, 321, 321, 395, 375, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 378, 379, 398, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 221, 0, 0, 233, 264, 0, 0, 0, 242, 0, 0, 0, 244, 0, 134, 147, 125, 159, 0, 0, 0, 2, 148,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148, 124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49, 49, 86, 86, 49, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 354, 0, 148, 147, 147, 388, 374, 74, 0, 0, 368, 385, 395, 375, 0, 0, 0, 0, 0, 0, 2, 354, 0, 159, 395, 375, 0, 0, 0, 0, 354, 0, 148, 147, 0, 365, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 321, 321, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 378, 398, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 221, 0, 243, 0, 0, 0, 0, 0, 242, 0, 0, 0, 0, 0, 134, 157, 113, 139, 0, 0, 0, 0, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 149, 124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 29, 81, 81, 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 364, 385, 0, 159, 159, 0, 388, 74, 0, 0, 0, 364, 375, 0, 0, 0, 0, 0, 0, 0, 2, 368, 385, 395, 375, 0, 0, 0, 0, 378, 398, 0, 0, 159, 395, 375, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 354, 321, 321, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 378, 398, 0, 0, 0, 0, 0, 0, 261, 0, 0, 0, 0, 0, 0, 241, 0, 0, 0, 0, 0, 0, 273, 232, 0, 0, 0, 0, 0, 148, 125, 125, 159, 0, 0, 0, 0, 0,
	            125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 159, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 198, 198, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 354, 0, 148, 147, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 368, 375, 0, 0, 0, 0, 0, 354, 0, 0, 0, 0, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 321, 321, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 354, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 221, 273, 0, 244, 0, 243, 0, 242, 0, 0, 0, 0, 0, 0, 0, 0, 0, 388, 374, 0, 0, 0, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 96, 96, 81, 198, 198, 81, 96, 96, 81, 0, 0, 0, 0, 0, 0, 0, 2, 0, 364, 385, 0, 159, 0, 395, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 378, 398, 139, 0, 0, 395, 375, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 321, 321, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 378, 398, 0, 0, 0, 0, 0, 0, 0, 243, 0, 0, 0, 0, 0, 0, 0, 221, 273, 0, 0, 0, 273, 232, 0, 0, 0, 0, 0, 0, 0, 0, 244, 132, 388, 374, 0, 0, 0,
	            0, 73, 73, 73, 73, 73, 0, 0, 0, 0, 0, 0, 0, 0, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 354, 0, 0, 395, 375, 0, 0, 0, 0, 0, 0, 0, 0, 73, 73, 73, 73, 73, 74, 0, 0, 0, 2, 2, 0, 0, 354, 148, 147, 0, 395, 375, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 321, 321, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 354, 0, 0, 0, 0, 0, 0, 0, 244, 0, 0, 0, 0, 0, 0, 0, 0, 0, 231, 0, 0, 0, 242, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 388, 374, 0, 0,
	            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 2, 0, 73, 76, 1, 1, 73, 76, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 364, 369, 369, 375, 0, 0, 0, 0, 0, 0, 0, 378, 379, 379, 379, 379, 379, 374, 73, 74, 0, 0, 2, 2, 0, 0, 354, 0, 159, 395, 375, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 11, 11, 0, 0, 0, 354, 321, 321, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 354, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 251, 251, 251, 0, 0, 0, 0, 0, 263, 263, 262, 263, 0, 0, 261, 263, 263, 388, 374, 0,
	            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 75, 85, 0, 0, 1, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 378, 379, 379, 398, 0, 0, 0, 0, 0, 388, 374, 73, 74, 0, 2, 2, 0, 0, 364, 369, 369, 375, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 11, 0, 0, 0, 0, 0, 354, 321, 321, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 364, 385, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 263, 261, 0, 0, 0, 0, 0, 242, 221, 0, 244, 0, 242, 365, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 84, 74, 0, 0, 0, 0, 0, 0, 75, 85, 0, 2, 1, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 2, 75, 76, 378, 398, 0, 149, 139, 0, 113, 113, 113, 113, 0, 388, 374, 74, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 321, 321, 149, 139, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 354, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 242, 221, 0, 0, 0, 232, 365, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 378, 379, 374, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 74, 0, 0, 0, 0, 0, 0, 0, 0, 75, 0, 2, 1, 1, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 2, 75, 378, 398, 192, 0, 134, 124, 0, 134, 137, 135, 124, 0, 0, 388, 374, 74, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 321, 321, 134, 124, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 364, 385, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 243, 0, 0, 0, 222, 221, 0, 243, 0, 242, 365, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 378, 398, 139, 388, 374, 0, 0, 0, 0, 0, 0, 0, 0, 0, 378, 374, 0, 0, 0, 0, 0, 0, 1, 2, 2, 0, 74, 0, 0, 0, 0, 0, 0, 0, 0, 75, 0, 2, 2, 1, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 75, 76, 354, 0, 0, 0, 148, 159, 0, 148, 159, 148, 159, 0, 0, 0, 388, 379, 374, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 11, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 321, 321, 148, 159, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 364, 385, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 231, 0, 0, 0, 0, 0, 244, 0, 0, 241, 0, 0, 0, 242, 365, 0,
	            0, 0, 0, 378, 374, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 148, 147, 139, 365, 0, 0, 0, 0, 0, 0, 0, 0, 378, 398, 388, 374, 0, 0, 0, 0, 0, 1, 1, 1, 1, 74, 0, 0, 0, 0, 0, 0, 0, 0, 75, 0, 1, 1, 1, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 75, 378, 398, 0, 0, 0, 139, 0, 0, 192, 0, 0, 192, 0, 149, 139, 0, 0, 388, 374, 74, 0, 0, 0, 0, 0, 0, 11, 11, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 149, 139, 321, 321, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 364, 385, 0, 0, 0, 0, 0, 0, 0, 0, 0, 254, 223, 0, 0, 0, 0, 0, 0, 0, 0, 0, 243, 0, 244, 0, 252, 0, 221, 271, 0, 0, 0, 242, 365, 0,
	            0, 0, 378, 398, 388, 374, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 364, 385, 159, 147, 365, 0, 0, 0, 12, 0, 0, 0, 378, 398, 139, 0, 365, 0, 0, 0, 0, 0, 1, 1, 1, 0, 74, 0, 0, 0, 0, 0, 0, 0, 0, 75, 1, 1, 1, 1, 0, 0, 2, 2, 0, 0, 0, 0, 0, 75, 76, 354, 192, 0, 0, 148, 147, 0, 0, 149, 139, 0, 192, 0, 148, 159, 0, 0, 0, 365, 84, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 134, 124, 322, 322, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 364, 385, 0, 0, 0, 0, 0, 0, 0, 0, 233, 264, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 241, 0, 0, 272, 251, 0, 365, 0,
	            0, 0, 354, 147, 139, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 0, 395, 375, 0, 0, 0, 0, 0, 0, 0, 354, 148, 147, 139, 388, 374, 0, 0, 0, 0, 1, 1, 1, 0, 74, 0, 0, 0, 0, 0, 0, 0, 0, 75, 1, 1, 1, 1, 0, 0, 2, 2, 0, 0, 0, 0, 0, 75, 378, 398, 192, 0, 0, 0, 159, 0, 0, 134, 124, 0, 192, 0, 0, 0, 0, 149, 139, 388, 374, 84, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 148, 159, 422, 0, 149, 139, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 354, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 252, 0, 0, 0, 0, 0, 262, 264, 0, 272, 253, 0, 0, 365, 0,
	            0, 0, 354, 159, 147, 365, 0, 0, 0, 0, 0, 0, 0, 0, 378, 374, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 0, 365, 0, 0, 0, 0, 0, 0, 0, 0, 364, 385, 159, 147, 0, 365, 0, 0, 0, 0, 1, 2, 2, 0, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 2, 2, 0, 0, 0, 0, 0, 75, 354, 192, 192, 0, 0, 0, 0, 0, 0, 148, 159, 0, 192, 0, 0, 0, 0, 148, 147, 192, 388, 374, 74, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 422, 0, 134, 124, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 364, 385, 0, 0, 0, 0, 0, 0, 0, 0, 0, 244, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 261, 264, 0, 0, 272, 252, 0, 0, 395, 375, 0,
	            0, 0, 354, 0, 395, 375, 0, 0, 0, 0, 0, 0, 0, 378, 398, 388, 374, 0, 0, 0, 0, 378, 379, 374, 0, 0, 0, 0, 354, 0, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 0, 159, 395, 375, 0, 0, 0, 0, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 0, 0, 2, 2, 1, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 354, 192, 0, 0, 0, 0, 149, 139, 0, 192, 0, 0, 149, 139, 0, 0, 0, 0, 159, 192, 192, 365, 74, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 422, 0, 148, 159, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 354, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 263, 274, 0, 244, 272, 251, 0, 0, 0, 365, 0, 0,
	            0, 0, 354, 0, 365, 0, 0, 0, 12, 0, 0, 0, 378, 398, 139, 0, 365, 0, 0, 0, 0, 354, 139, 365, 0, 0, 0, 0, 364, 369, 375, 0, 0, 0, 0, 0, 0, 0, 0, 0, 364, 385, 395, 375, 0, 0, 0, 0, 0, 1, 1, 2, 2, 75, 85, 0, 0, 0, 0, 0, 75, 76, 0, 2, 2, 1, 1, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 354, 192, 0, 0, 0, 0, 0, 0, 0, 192, 0, 0, 148, 159, 192, 0, 0, 139, 0, 0, 192, 365, 74, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 422, 0, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 364, 385, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 263, 262, 264, 0, 243, 0, 272, 252, 0, 0, 0, 0, 0, 0, 0,
	            0, 0, 364, 369, 375, 0, 0, 0, 0, 0, 0, 0, 354, 148, 147, 139, 365, 0, 0, 0, 0, 354, 147, 388, 374, 0, 0, 0, 0, 0, 0, 0, 0, 378, 374, 0, 0, 0, 0, 0, 0, 364, 375, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 0, 75, 76, 76, 76, 76, 76, 76, 0, 0, 2, 1, 1, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 354, 192, 0, 0, 0, 0, 148, 159, 192, 192, 0, 0, 192, 192, 192, 0, 148, 147, 0, 0, 192, 365, 74, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 149, 139, 422, 0, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 2, 364, 385, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 221, 0, 0, 0, 0, 244, 0, 272, 0, 0, 0, 395, 375, 2, 0, 0,
	            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 368, 385, 159, 147, 365, 0, 0, 0, 0, 354, 159, 147, 365, 0, 0, 0, 0, 0, 0, 0, 0, 354, 388, 374, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 364, 385, 192, 0, 0, 0, 192, 192, 192, 192, 0, 0, 192, 192, 192, 0, 0, 159, 0, 0, 192, 365, 74, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 134, 124, 422, 0, 388, 374, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 2, 2, 364, 369, 369, 369, 385, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 221, 0, 0, 243, 0, 0, 272, 253, 0, 0, 395, 375, 2, 2, 0, 0,
	            0, 0, 0, 0, 0, 0, 0, 378, 374, 0, 0, 0, 0, 354, 0, 395, 375, 0, 0, 0, 378, 398, 0, 159, 365, 0, 0, 0, 0, 0, 0, 0, 0, 354, 0, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 0, 2, 1, 1, 2, 0, 0, 1, 1, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 354, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 365, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148, 159, 422, 0, 0, 388, 379, 379, 379, 379, 379, 379, 374, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 364, 385, 0, 0, 0, 0, 0, 0, 0, 0, 0, 221, 0, 244, 0, 0, 272, 251, 0, 395, 369, 375, 2, 2, 2, 0, 0,
	            0, 0, 0, 0, 0, 0, 378, 398, 388, 374, 0, 0, 0, 368, 369, 375, 0, 0, 0, 378, 398, 0, 0, 0, 365, 0, 0, 0, 0, 0, 0, 0, 378, 398, 0, 388, 374, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 2, 1, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 364, 385, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 395, 375, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 364, 385, 422, 441, 441, 441, 441, 441, 441, 441, 441, 388, 374, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 364, 385, 0, 0, 0, 0, 0, 0, 0, 0, 0, 251, 252, 253, 253, 251, 0, 395, 375, 0, 0, 0, 0, 0, 0, 0,
	            0, 0, 0, 0, 0, 0, 354, 148, 147, 388, 374, 0, 0, 0, 0, 0, 0, 0, 0, 354, 0, 0, 0, 0, 388, 374, 0, 0, 0, 12, 0, 0, 354, 0, 0, 139, 365, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 364, 385, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 395, 375, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 364, 385, 441, 441, 441, 441, 441, 441, 441, 441, 441, 388, 149, 139, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 364, 369, 369, 369, 385, 0, 0, 0, 0, 0, 0, 0, 395, 369, 369, 369, 375, 0, 0, 0, 0, 0, 0, 0, 0,
	            0, 0, 0, 0, 0, 378, 398, 0, 159, 147, 365, 0, 0, 0, 0, 0, 0, 0, 0, 354, 0, 139, 0, 0, 0, 365, 0, 0, 0, 0, 0, 0, 354, 0, 148, 147, 388, 374, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 364, 385, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 395, 375, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 11, 11, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 364, 369, 369, 369, 369, 369, 369, 385, 441, 321, 0, 134, 124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 364, 369, 369, 369, 369, 369, 369, 369, 375, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	            0, 0, 0, 0, 0, 354, 0, 0, 0, 159, 388, 374, 0, 0, 0, 12, 0, 0, 0, 354, 148, 147, 139, 0, 0, 365, 0, 0, 0, 0, 0, 0, 354, 0, 0, 159, 147, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 364, 385, 0, 0, 0, 0, 0, 0, 0, 0, 0, 395, 369, 369, 375, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 11, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 364, 385, 422, 321, 148, 159, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	            0, 0, 0, 0, 0, 354, 0, 0, 0, 0, 0, 388, 374, 0, 0, 0, 0, 0, 378, 398, 0, 159, 147, 0, 395, 375, 0, 0, 0, 0, 0, 378, 398, 0, 0, 0, 159, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 364, 369, 369, 385, 0, 0, 0, 0, 395, 369, 375, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 354, 422, 421, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2,
	            0, 0, 0, 0, 0, 354, 0, 0, 0, 0, 0, 0, 365, 0, 0, 0, 0, 0, 354, 0, 0, 0, 159, 0, 365, 0, 0, 0, 0, 0, 0, 354, 0, 0, 0, 0, 0, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 354, 0, 0, 0, 395, 375, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 422, 421, 365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
			],
        },
		images: {
            tiles: {normal: "assets/tilemap/pawPeaks.png"},
			spruceTree: {normal: "assets/objects/spruceTree.png"},
			well: {normal: "assets/objects/well.png"},
			mailbox: {normal: "assets/objects/mailbox.png"},
			mailboxUnread: {normal: "assets/objects/mailboxUnread.png"},
			marketStallPawPeaks: {normal: "assets/objects/marketStallPawPeaks.png"},

			winterMelon: {normal: "assets/objects/winterMelon.png"},
			winterMelonFlip: {normal: "assets/objects/winterMelon.png", flip:"vertical"},
			horaldThymustad: {normal: "assets/npcs/horaldThymustad.png"},
			eighGold: {normal: "assets/npcs/eighgold.png"},
			geo: {normal: "assets/npcs/geo.png"},
			sparksCartographer: {normal: "assets/npcs/sparksCartographer.png"},
			trainCarriage: {normal: "assets/objects/trainCarriage.png"},
			trainFront: {normal: "assets/objects/trainFront.png"},
			trainFrontRight: {normal: "assets/objects/trainFront.png", flip: "vertical"},
			hayBale2: {normal: "assets/objects/hayBale2PawPeaks.png"},
			hayBale1: {normal: "assets/objects/hayBale1PawPeaks.png"},
			iceSpike: {normal: "assets/objects/iceSpike.png"},
			iceSpikeFlip: {normal: "assets/objects/iceSpike.png", flip:"vertical"},
			iceOrb: {normal: "assets/objects/iceOrb.png"},
			wateringCan: {normal: "assets/objects/wateringCan.png"},
			spade: {normal: "assets/objects/spade.png"},
			wheelBarrow: {normal: "assets/objects/wheelBarrow.png"},
			ironBucket: {normal: "assets/objects/ironBucket.png"},
			sapling: {normal: "assets/objects/sapling.png"},
			sprinkler: {normal: "assets/objects/sprinkler.png"},
			flowerBasket: {normal: "assets/objects/flowerBasket.png"},
			lanternNightLeft: {normal: "assets/objects/lanternNightLeft.png"},
			lanternNightRight: {normal: "assets/objects/lanternNightLeft.png",flip:"vertical"},
			hayWagon: {normal: "assets/objects/hayWagon.png"},
			flowerBasketSide: {normal: "assets/objects/flowerBasketSide.png"},
			mountain: {normal: "assets/objects/mountain.png"},
			target: {normal: "assets/objects/targetArchery.png"},
			horseshoe: {normal: "assets/objects/horseshoe.png"},
			brownHorseRight: {normal: "assets/mounts/brownHorse/brownHorseSide.png"},
			brownHorseLeft: {normal: "assets/mounts/brownHorse/brownHorseSide.png",flip:"vertical"},
			brownHorseFront: {normal: "assets/mounts/brownHorse/brownHorseFront.png"},
			brownHorseBack: {normal: "assets/mounts/brownHorse/brownHorseBack.png"},
		},

		onAreaJoin: function () {
			Areas.pawPeaks.getOnTrainInbound();
		},

		// called when the hero is arriving to paw peaks
		getOnTrainInbound: function () {
			let trainComponents = Game.things.filter(thing => thing.name === "Train Carriage" || thing.name === "Train Driver's Carriage");
			let carriages = trainComponents.filter(thing => thing.name === "Train Carriage");
			let carriage = carriages[carriages.length-1];
			Game.hero.getOnMount(carriage);
			for (let i = 0; i < trainComponents.length; i++) {
				// start train animation
				trainComponents[i].setAnimation({
					type: "spritesheet",
					imagesPerRow: 4,
					frameTime: 90,
					totalImages: 16
				});

				// move train
				trainComponents[i].moveTowards = {
					x: trainComponents[i].x + 2000,
					y: trainComponents[i].y,
					speed: 100,
					//moveTowardsFinishFunction:
				};
			}

			// unmount player once train has reached destination
			Game.setTimeout(Game.hero.getOffMount.bind(Game.hero), 10000);//removeAnimation
		},

		collisions: [
            {
                x: 412,
                y: 412,
                width: 825,
                height: 950,
            },
        ],

		areaTeleports: [
            {
                x: 8790,
                y: 1803,
                width: 60,
                height: 2,
                teleportTo: "pawPeaksTower",
                destinationX: 598,
                destinationY: 1116,
            },
        ],

		mounts: [
			{
				x: 500,
				y: 1700,
				direction: 3,
				name: "Horsey",
				rotationImages: {
					up: "brownHorseBack",
					down: "brownHorseFront",
					left: "brownHorseLeft",
					right: "brownHorseRight",
				},
				template: MountTemplates.default,
			}
		],

		npcs: [
            {
                x: 2524,
                y: 3100,
                image: "horaldThymustad",
                name: "Horald Thymustad",
                hostility: "friendly",
                level: 10,
                stats: {
                    maxHealth: 100,
                    defence: 1,
                    healthRegen: 0.3,
                },
                roles: [
                ],
                chat: {
                },
            },
			{
                x: 7513,
                y: 3424,
                image: "sparksCartographer",
                name: "Sparks the Cartographer",
                hostility: "friendly",
                level: 10,
                stats: {
                    maxHealth: 100,
                    defence: 1,
                    healthRegen: 0.3,
                },
                roles: [
                ],
                chat: {
                },
            },

  			{
                x: 3513,
                y: 2659,
                image: "eighGold",
                name: "Horsekeeper Eighgold",
                hostility: "friendly",
                level: 10,
                stats: {
                    maxHealth: 100,
                    defence: 1,
                    healthRegen: 0.3,
                },
                roles: [
                ],
                chat: {notUnlockedRoles:"Ugh why does this donkey keeps skhaiping me"
                },
            },


{
                x: 4835,
                y: 4699,
                image: "geo",
                name: "Geogeo the Geologist",
                hostility: "friendly",
                level: 10,
                stats: {
                    maxHealth: 100,
                    defence: 1,
                    healthRegen: 0.3,
                },
                roles: [
                ],
                chat: {
                },
            },
        ],

mailboxes: [
			{
				x: 2155,
				y: 3102,
				readImage: "mailbox",
				unreadImage: "mailboxUnread",
				name: "Mailbox",
			},
],
things: [
			{
				x: [-700, -430, -160],
				y: [4478, 4478, 4478],
				orderOffsetY: -100,
				name: "Train Carriage",
				image: "trainCarriage",
				crop: {
					x: 0,
					y: 0,
					width: 450,
					height: 450
				},
				// for hero / npc "mounting" in carriage
				rideAdjustX: -27,
				rideAdjustY: 25,
			},
			{
				x: 110,
				y: 4478,
				orderOffsetY: -100,
				name: "Train Driver's Carriage",
				image: "trainFrontRight",
				crop: {
					x: 0,
					y: 0,
					width: 450,
					height: 450
				},
			},

			{
				x:[3236.5, 2162.2, 2642.1, 1056.3, 730.1, 6618, 5424.7, 1647.7, 3615.9, 1914.7, 1374.7, 28.7, 4716, 182.7, 6067.5, 470.2, 2376.5, 2911.9, 7273.5, 3838.9, 6911.3, 0, 2727.8, 4049.2, 996.4, 4739, 680, 6057.7, 5408.9, 2446.1, 3798.6, 7638.7, 7297.9, 61.9, 276.1, 829.4, 2667.8, 6284.3, 5486, 1178.8, 709.1, 999.2, 2411.7, 6587.9, 7320, 34.8, 429.6, 4365.2, 5022, 7689.2, 780.6, 1463.8, 5594, 6384.3, 210.3, 6667.5, 1040.1, 8032.7, 390, 71, 1446.4, 5329, 6815.1, 795, 1182.1, 6176.7, 301.1, 4651.6, 520.7, 66.2, 1532.8, 8112.3, 5431.1, 5954.6, 6893.7, 306.6, 1318.6, 901.5, 6603.7, 1107, 1491.2, 202.5, 740, 959, 73.7, 305.7, 1255.2, 3191, 8043.1, 1503.2, 7113.1, 3507.4, 3830.4, 2670.8, 2062.4, 7453.8, 6741.5, 4190.7, 2970.1, 8362.9, 674.3, 338.5, 78.5, 996.9, 2398.6, 1358.3, 3984.4, 7028.2, 8074.5, 2875.1, 7507.8, 6711.9, 3959.4, 7786.8, 2725.5, 6984.2, 4198.6, 536.5, 2503.8, 7534.8, 1408.2, 2092.7, 85.4, 6524.4, 907.7, 6824.9, 2793.3, 7786.8, 4213.8, 1243.4, 634.8, 6315.6, 1539.1, 2143.9, 8110.4, 7507.8, 7026.1, 6638.8, 2819.8, 7781.1, 10187.1, 514.3, 4233, 8254.4, 6307.4, 6887.3, 8559.8, 1745.2, 2850.2, 126.5, 9924.4, 2507.4, 8892.2, 8332.2, 7593.1, 10184, 6600.6, 4076.9, 9303.3, 979.1, 3170.7, 3617.4, 9593.2, 7026.1], y:[1440.5, 1483, 1499.6, 1514.7, 1518.3, 1522.3, 1533.4, 1537.2, 1538.7, 1550.5, 1551.9, 1552.1, 1552.6, 1552.6, 1586.2, 1591.7, 1598.5, 1622.7, 1638.8, 1655.2, 1748.1, 1804.3, 1804.9, 1814.4, 1820.9, 1848.9, 1877.6, 1915.3, 1938.9, 1955.6, 1965, 2034, 2037.5, 2111.6, 2117.3, 2130.5, 2183.9, 2246.6, 2274.2, 2288.4, 2315, 2346, 2373.2, 2399, 2429.4, 2446.4, 2451, 2456.9, 2506.7, 2507.8, 2564.1, 2590.2, 2625.3, 2664.9, 2688.2, 2710.8, 2731.6, 2746.5, 2789.9, 2870.4, 2876, 2973.5, 3005.8, 3036.8, 3046, 3062, 3096.6, 3168, 3176.9, 3194.4, 3200.6, 3253.3, 3279.1, 3284.2, 3290.7, 3328.9, 3354.3, 3404.2, 3440.4, 3533, 3560.6, 3569.5, 3605.5, 3769.4, 3792, 3806.9, 3821.2, 3827, 3860, 3871.4, 3876.2, 3889.5, 3899.3, 3917.4, 3940, 3963.5, 3998.1, 4003.5, 4028.6, 4055.9, 4057.7, 4097.1, 4097.1, 4100.3, 4116.2, 4162, 4316.4, 4328, 4360.6, 4387.4, 4532, 4551.7, 4603.5, 4618.5, 4636.9, 4662.8, 4736, 4826.9, 4829, 4841.4, 4854.2, 4894.2, 4897.8, 4903.1, 4978.6, 4985.9, 5026.2, 5031.7, 5072.6, 5083.5, 5160.9, 5174.9, 5238.9, 5270.4, 5281.9, 5285, 5297.9, 5302, 5363.2, 5391.5, 5430.3, 5443.7, 5492.6, 5533.1, 5601.1, 5627.6, 5652.5, 5664.1, 5716.3, 5746.5, 5782.7, 5808.5, 5846.5, 5846.5, 5850.6, 5856, 5860.9, 5862.1, 5865.9, 5868.4, 5886.8, 5886.8, 5891.5, 5984.5],
				image:"spruceTree",
				name:"Spruce",
				collision: {relativeX: 0, relativeY: 130, width: 30, height: 20},
				orderOffsetY: -24,
			},

{x:[7818.8, 8099.4, 8489.7, 8637],y:[1463.5, 2082.1, 2538.3, 3150.4],image:"iceSpike",name:"icespike"},

{x:[4337.7, 3537.4],y:[2715.8, 3022.8],image:"hayBale1",name:"hayBale1"},

{x:[1931.8, 2362.2],y:[3058, 3257.7],image:"lanternNightLeft",name:"lanternNightLeft"},
{x:[9683.6, 422.9, 7717, 3349.1, 1913.7],y:[1182.5, 1182.5, 1182.5, 1182.5, 1182.5], z:-1, image:"mountain",name:"mountain"},
{x:[3058.4,2615.4],y:[3058, 3257.7],image:"lanternNightRight",name:"lanternNightRight"},
{x:[2913.1, 2045],y:[3101.4, 3101.4],image:"marketStallPawPeaks",name:"marketStallPawPeaks"},
{x:[4105.3, 3889.9],y:[2616.7, 2984.7],image:"hayBale2",name:"hayBale2"},
{x:[3119],y:[5013],image:"wateringCan",name:"wateringCan"},
{x:[6692.4, 7452.7, 7502.7, 6367.4],y:[1817.3, 1861.2, 2331.7, 2940.2],image:"target",name:"target"},
{x:[10006.4, 9816.9, 9556.5, 9616.1],y:[1416.9, 1933.1, 2475, 3156.3],image:"iceSpikeFlip",name:"iceSpikeFlip"},
{x:[4568.9, 4858.7, 5224.8, 6014.5, 5025.2, 5628.8, 4863.8, 5092.5, 6201, 5658.8, 5138.3, 5771.6, 6363.9, 6227.8, 5211.3, 3614.9, 3431.7, 3525.3, 3566.8, 3346.3, 3333.5, 3542.4, 3229.7, 3469.7, 3733.5, 3619, 3493.3, 3584, 3384.6, 3268.1, 3713.3, 3310.9, 3554.4, 3476.7, 3259.1, 3381.2, 3737.3, 3213.8, 3650.5, 3423.1, 3609.2, 3389.3, 3529, 3476.4, 3382.2, 3595.2],y:[1823.9, 1949.9, 2049.3, 2143, 2286.8, 2333.3, 2528.3, 2746.2, 2822.4, 2853.1, 3194.3, 3194.3, 3214.7, 3422.4, 3430.4, 4905.3, 4915.5, 4915.5, 4957.8, 4961.9, 5020.1, 5041, 5042.6, 5049.2, 5054.2, 5071.7, 5105.8, 5140, 5173, 5192.1, 5197.3, 5220.1, 5224.5, 5270.9, 5274.6, 5280.1, 5293.2, 5299.3, 5320.7, 5349.7, 5360.9, 5391.9, 5414, 5441.8, 5458.1, 5471.7],image:"sapling",name:"sapling",},
{x:[3246.2, 3312.9],y:[4705.7, 4705.7],image:"spade",name:"spade"},
{x: 3561.2, y: 3323, image: 'well', name: ''},
{x:[3009.6, 3854.2],y:[4738.6, 5387.1],image:"wheelBarrow",name:"wheelBarrow"},
{x:[3939.9, 4515.4, 4454.9, 2913.9, 3127.9],y:[2722.6, 2774.8, 2980.1, 4877.2, 5363.3],image:"ironBucket",name:"ironBucket",},
{x: 3724.9, y: 2699.4, image: 'hayWagon', name: ''},
{x: 4128.7, y: 2807.2, image: 'hayWagon', name: ''},
{x:[2679, 2314.7, 2820, 2164.8], y: [3192.3, 3192.3, 3501.8, 3501.8], image: 'flowerBasket', name: ''},
{x:[3077.6, 1902.1, 3078.2, 1902], y: [2956.2, 2956.2, 3232.6, 3232.6], image: 'flowerBasketSide', name: ''},
{x:[3255.7, 3201.5, 3162.1, 3202.9, 3157.2, 3209.8, 3161.1, 3323.7, 3301.9, 3164.6], y: [2374.1, 2412.2, 2540.6, 2570, 2594.3, 2619, 2646.8, 2821.6, 2878.6, 3043.8], z:-1, image: 'horseshoe', name: ''},

{
				x: [3355.1, 3635.1, 3480],
				y: [5053.4, 5053.4, 5353.2],
				orderOffsetY: -10,
				name: "Sprinkler",
				image: "sprinkler",
				crop: {
					x: 0,
					y: 0,
					width: 120,
					height: 120
				},
				animation: {
					type: "spritesheet",
					frameTime: 90,
					imagesPerRow: 4,
					totalImages: 14,
				},
			},
{x:[276.3, 5465.4, 4672.4, 6117, 1116.1, 5262.9, 4816.3, 684.9, 5794.1, 5241.9, 6240.3, 1085.8, 100, 993, 8050.5, 9892.5, 7815.9, 1689.8, 353.3, 2307.1, 1137.4, 2294.6, 7954.1, 9079.4, 8601.8, 1726.8, 3494.1, 3280.2, 3673.5, 3475.7, 3636.1, 3301.2, 3577.9],y:[1683.8, 1715.1, 2021.5, 2159.9, 2529.6, 2713.6, 2741.5, 2771.6, 3057.6, 3250.3, 3252.3, 3293, 3385, 4005.1, 4105.8, 4153.3, 4767.8, 4879.4, 4974.3, 5016.7, 5411.6, 5493.4, 5532.6, 5769.2, 5840.2, 5894.4, 4976.7, 5149.4, 5149.4, 5169.4, 5272.1, 5297.3, 5423.6],image:"winterMelon",name:"winterMelon",},

/* {x:3182,y:3870,image:"FullSnowPile",name:"Snow",width:100,height:75, onInteract: function () {
                    let channelFunction = function () {
                        if (typeof this.state === "undefined") {
                            this.state = 1;
                        }
                        if (this.state === 1) {
                            this.state = 2;
                            this.setImage("PartialSnowPile", undefined,100,75);
                        }
                        else if (this.state === 2) {
                            this.state = 3;
                            // become a random reward ...
                        }

                    };
                    Game.hero.channel(channelFunction.bind(this), [], 2000, "Snow digging", {cancelChannelOnDamage: true});
                },}
*/
          ],
},

//Eaglecrest well for fishing tour

eaglecrestWell: {
	id: 24,

	data: {
		name: "Eaglecrest Well",
		displayOnEnter: true,
	},

	indoors: true,

	tagGameAllowed: true,

	song_day: "assets/music/Eaglecrest.mp3",
	song_night: "assets/music/Eaglecrest.mp3",

	checkpoint: false,

	lootArea: "eaglecrestWell",

	mapData: {
		origin: {x: 0, y: 300},
		cols: 25,
		rows: 30,
		tsize: 60,
		tilesPerRow: 10,
		solidTiles: [23, 24, 33, 34],
		pathTiles: [],
		waterTiles: [28, 10, 20],
		animateTiles: [{
			// water
			tiles: [28, 10, 20],
			animateTime: 300,
		},{
			// rope
			tiles: [19, 29, 39],
			animateTime: 400,
		}],
		objectTiles: [36, 37, 47], // bones
		layers: [
			[33, 34, 33, 34, 33, 34, 33, 34, 33, 34, 33, 34, 33, 34, 33, 34, 33, 34, 33, 34, 33, 34, 33, 34, 33,
            23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23,
            23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23,
            33, 34, 33, 34, 33, 34, 33, 34, 33, 34, 33, 34, 33, 34, 33, 34, 33, 34, 33, 34, 33, 34, 33, 34, 33,
            23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23,
            23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23,
            33, 34, 33, 34, 33, 34, 33, 34, 33, 34, 33, 34, 33, 34, 33, 34, 33, 34, 33, 34, 33, 34, 33, 34, 33,
            23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23,
            1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 2, 2, 1,
            11, 12, 1, 1, 1, 2, 1, 1, 2, 1, 1, 12, 11, 12, 11, 11, 11, 12, 11, 11, 12, 11, 12, 12, 11,
            1, 2, 1, 1, 11, 1, 1, 11, 1, 1, 1, 2, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 2, 2, 1,
            11, 12, 1, 2, 1, 2, 11, 1, 11, 12, 11, 28, 28, 28, 28, 12, 11, 11, 11, 12, 11, 1, 2, 12, 11,
            1, 1, 1, 2, 1, 12, 1, 2, 1, 28, 20, 28, 28, 28, 28, 28, 28, 28, 1, 2, 1, 11, 12, 2, 1,
            11, 12, 1, 12, 11, 2, 11, 12, 28, 28, 20, 28, 10, 10, 10, 28, 20, 28, 28, 12, 11, 12, 11, 12, 11,
            1, 1, 2, 2, 1, 2, 1, 28, 28, 20, 28, 28, 28, 28, 28, 28, 20, 28, 28, 28, 1, 1, 2, 2, 1,
            11, 11, 12, 12, 11, 12, 28, 28, 20, 20, 28, 10, 10, 20, 20, 28, 20, 10, 10, 28, 11, 11, 12, 2, 11,
            1, 2, 1, 2, 1, 28, 28, 28, 20, 20, 10, 10, 28, 28, 28, 20, 20, 10, 28, 28, 28, 2, 11, 12, 1,
            11, 12, 11, 12, 11, 28, 28, 10, 28, 20, 28, 20, 20, 20, 28, 28, 20, 10, 28, 28, 28, 12, 11, 12, 11,
            1, 2, 1, 2, 28, 28, 28, 28, 28, 20, 20, 28, 28, 28, 20, 20, 20, 20, 20, 28, 28, 28, 11, 12, 1,
            11, 12, 11, 12, 20, 20, 28, 10, 28, 28, 20, 28, 28, 28, 28, 28, 20, 20, 28, 20, 28, 28, 11, 12, 11,
            1, 2, 1, 2, 28, 10, 20, 20, 28, 28, 28, 28, 20, 28, 28, 28, 28, 20, 28, 20, 28, 28, 1, 2, 1,
            11, 12, 1, 2, 28, 10, 10, 10, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 10, 20, 28, 28, 11, 12, 11,
            1, 1, 11, 12, 2, 28, 10, 10, 28, 28, 28, 28, 28, 28, 28, 28, 28, 10, 10, 20, 28, 28, 1, 2, 1,
            11, 1, 11, 11, 12, 12, 28, 28, 28, 28, 28, 20, 28, 10, 10, 10, 10, 28, 20, 20, 28, 28, 11, 12, 11,
            1, 1, 11, 12, 12, 2, 1, 2, 28, 28, 28, 20, 20, 20, 28, 28, 28, 20, 20, 28, 28, 2, 1, 2, 1,
            11, 1, 2, 11, 12, 12, 1, 1, 2, 28, 28, 28, 28, 20, 28, 28, 28, 20, 28, 28, 11, 12, 11, 12, 11,
            1, 1, 1, 1, 11, 12, 11, 11, 1, 2, 1, 2, 28, 20, 28, 28, 1, 2, 1, 2, 1, 1, 1, 1, 1,
            11, 11, 11, 11, 11, 12, 12, 12, 11, 12, 11, 12, 11, 12, 11, 12, 11, 12, 1, 12, 1, 2, 11, 11, 11,
            1, 2, 1, 2, 1, 11, 12, 2, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1,
            11, 12, 11, 12, 11, 12, 11, 12, 11, 12, 11, 12, 11, 12, 11, 12, 11, 12, 11, 12, 11, 12, 11, 12, 11],

			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 38, 0, 0, 0, 0, 0, 0, 0, 0, 38, 0, 0, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 0, 0, 0, 38, 0, 0, 0, 0, 47, 48, 47, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 37, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 38, 0, 0, 0, 0, 37, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 48, 0, 0, 0, 0, 0, 0, 36, 0, 0, 0,
            0, 0, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 37, 0, 38, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 38, 0, 0, 0, 0, 37, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 37, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 0, 0, 0, 0, 0, 47, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 37, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 47, 37, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 47, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		],
	},

	images: {
		tiles: {normal: "assets/tilemap/caves.png"},
		melee: {normal: "assets/projectiles/melee.png"},
		seaMonster: {normal: "assets/enemies/seaMonster.png"},
		seaMonsterTail: {normal: "assets/enemies/seaMonsterTail.png"},
		seaMonsterArch: {normal: "assets/enemies/seaMonsterCoil.png"},
		waterCoalesce: {normal: "assets/enemies/waterCoalesce.png"},
		waterball: {normal: "assets/projectiles/waterball.png"},
		seaMonsterCorpse: {normal: "assets/corpses/seaMonster.png"},
		// decorations:
		gnome: {normal: "assets/objects/gnomeGreen.png"},
		crate: {normal: "assets/objects/crate.png", christmas: "assets/objects/crateChristmas.png"},
	},

	callAreaJoinOnInit: true,
	onAreaJoin: function () {
		// if boss was caught today but not yet killed, summon it.
		if (Player.quests.questProgress.lakeLurkerLastCaught === GetFullDate() && Player.bossesKilled.lakeLurker !== GetFullDate()) {

			Areas.eaglecrestWell.startBoss();
		}

		if (Game.hero.y < -150) {
			//Game.hero.direction = 2;
			//Game.hero.updateRotation();
			Game.hero.moveTowards = {
				x: 760,
				y: 180,
				speedScalar: 0.6,
			};
		}

	},

	entities: [
		{
			x: 750,
			y: 200,
			width: 100,
			height: 150,
			onInteract: function () {
				Game.hero.channel(function () {
					Game.hero.direction = 1;
					Game.hero.moveTowards = {
						x: 760,
						y: -300,
						speedScalar: 0.6,
					};
					Game.hero.moveTowardsFinishFunction = function () {
						Game.loadArea("eaglecrestPlains", {x: 4130, y: 2970});
					};
					Game.hero.updateRotation();
				}, [], 1000, "Leaving well");
			}
		},
	],

	startBoss: function()
	{
		Game.camera.initScreenShake(13,1500);
		Game.clearedTimeoutsOnAreaChange.push(Game.setTimeout(function () {
			let preparedEnemy = Game.prepareNPC({
				x: 840,
				y: 810,
				template: EnemyTemplates.eaglecrest.lakeLurker,
			}, "enemies");

			if (preparedEnemy !== false) {
				Game.enemies.push(new Enemy(preparedEnemy));

				// pan to boss
				Game.camera.pan({x: 800, y: 900}, 250, "accelerate", function () {
					Areas.eaglecrestWell.initNewPhase();
					let num = Game.setInterval(Areas.eaglecrestWell.initNewPhase, 35000);
					Game.clearedIntervalsOnAreaChange.push(num);
					Areas.eaglecrestWell.intervalToClear = num;

					Game.camera.pan(Game.hero, 250, "accelerate", function () {
						// reset camera
						Game.camera.follow(Game.hero);
					}, 0);

					Dom.alert.page("Fish up the Lake Lurker's appendages to damage it!", 0);
				}, 1500);
			}
		}, 1500));
	},

	// remove old apprendages
	initNewPhase: function () {
		Game.camera.initScreenShake(9,1500);
		let removeList = Game.enemies.filter(enemy => enemy.name === "Lake Lurker Arch" || enemy.name === "Lake Lurker Tail");
		for (let i = 0; i <removeList.length; i++) {
			Game.removeObject(removeList[i].id, "enemies");
		}
		let boss = Game.enemies.find(enemy => enemy.name === "Lake Lurker");
		let bossHealthProportion = boss.health / boss.stats.maxHealth;

		if(bossHealthProportion > 0.4)
		{
			Areas.eaglecrestWell.startEasyPhase();
		}
		else {
			Areas.eaglecrestWell.startHardPhase();
		}
	},

	startEasyPhase: function ()
	{
	  Areas.eaglecrestWell.summonTail();
		Areas.eaglecrestWell.summonTail();
		Areas.eaglecrestWell.summonArch();
	},

	startHardPhase: function ()
	{
	  Areas.eaglecrestWell.summonTail();
		Areas.eaglecrestWell.summonTail();
		Areas.eaglecrestWell.summonTail();
		Areas.eaglecrestWell.summonArch();
		Areas.eaglecrestWell.summonArch();
	},

	summonTail: function()
	{
		let tailX = [1217.5, 1057.6, 855.3, 650, 464, 393, 506.6, 668.8, 868.4, 1027.3, 1109, 1165.7, 1193.6];
		let tailY = [1041.8, 1149.7, 1198, 1132.7, 1017.7, 799.2, 608.6, 473.4, 459.9, 514.4, 630.1, 765.8, 874.6];

		let index = Random(0, tailX.length-1);

		let x = tailX[index];
		let y = tailY[index];

		let preparedEnemy = Game.prepareNPC({
			x: x,
			y: y,
			template: EnemyTemplates.eaglecrest.lakeLurkerTail,
		}, "enemies");
		Game.enemies.push(new Enemy(preparedEnemy));


		let preparedEnemy2 = Game.prepareNPC({
			spawnLocations: [{x: x-100, y: y-100, width: 200, height: 200}], // central river (entrance to frog queen's base // river's blessing)
			template: EnemyTemplates.eaglecrest.waterCoalesce,
			repeatNumber: 3,
		}, "enemies");
		Game.enemies.push(new Enemy(preparedEnemy2));
		Game.enemies.push(new Enemy(preparedEnemy2));
	},

	summonArch: function()
	{
		let archX = [1050.4, 960.8, 758.2, 576.7, 641.5, 782.1, 954.7, 1028.6];
		let archY = [938, 1018, 1002.4, 889.8, 732.8, 630.2, 671.9, 779.8];

		let index = Random(0, archX.length-1);

		let x = archX[index];
		let y = archY[index];

		let preparedEnemy = Game.prepareNPC({
			x: x,
			y: y,
			template: EnemyTemplates.eaglecrest.lakeLurkerArch,
		}, "enemies");
		Game.enemies.push(new Enemy(preparedEnemy));

		let preparedEnemy2 = Game.prepareNPC({
			spawnLocations: [{x: x-200, y: y-200, width: 400, height: 400}], // central river (entrance to frog queen's base // river's blessing)
			template: EnemyTemplates.eaglecrest.waterCoalesce,
			repeatNumber: 4,
		}, "enemies");
		Game.enemies.push(new Enemy(preparedEnemy2));
		Game.enemies.push(new Enemy(preparedEnemy2));
		Game.enemies.push(new Enemy(preparedEnemy2));
	},

	things: [
		{
			x: 172, y: 1400, image: 'gnome', name: 'Gnome',
			onInteract: function () {
				if (typeof User.progress.gnomesFound === "undefined") {
					User.progress.gnomesFound = [];
				}
				if (!User.progress.gnomesFound.includes("green")) {
					Dom.chat.insert("<i>You found a green gnome﹏</i>")
					User.progress.gnomesFound.push("green");
				}
			}
		},
		{
			x: [209.2, 119.4, 38, 1232.5, 1332.7, 1474.3, 1412, 1177.2, 1112.1, 34.2, 410.8],
			y: [1412, 1364.2, 1444.6, 1395.7, 1369.1, 914.3, 175.5, 175.5, 182.9, 192.9, 186.3],
			image: 'crate', name: 'Crate',
		},
	],
},

caveEntrance: {
	id: 25,

	// data displayed on moving to area
	data: {
		name: "Cave Entrance",
		level: "Level 10 - 15",
		territory: "Neutral",
		displayOnEnter: true,
	},

	indoors: false,

	tagGameAllowed: true,

	song_day: "assets/music/Eaglecrest.mp3",
	song_night: "assets/music/Eaglecrest.mp3",

	checkpoint: false,

	lootArea: "caveEntrance",

	mapData: {
		origin: {x: 0, y: 300},
		cols: 30,
		rows: 32,
		tsize: 60,
		tilesPerRow: 10,
		solidTiles: [23, 24, 33, 34],
		pathTiles: [],
		waterTiles: [28, 10, 20],
		animateTiles: [{
			// water
			tiles: [80, 90, 100],
			animateTime: 250,
		},
	],
		objectTiles: [36, 37, 47], // bones
		layers: [
			[23,23,23,23,23,23,23,23,23,23,23,15,111,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,
23,23,23,23,23,23,23,23,23,23,23,15,23,23,23,15,23,15,23,15,23,23,23,23,23,23,23,23,23,23,
23,23,23,23,23,23,23,23,23,23,23,15,15,16,16,15,16,15,15,15,23,23,23,23,23,23,23,23,23,23,
23,23,23,23,23,23,23,23,23,15,15,15,16,23,23,23,23,22,15,15,15,23,23,23,23,23,23,23,23,23,
23,23,23,23,23,23,23,23,15,15,15,15,15,23,23,23,15,15,15,15,15,15,23,23,23,23,23,23,23,23,
23,23,23,23,23,23,23,15,15,15,15,15,15,6,45,45,43,45,15,15,15,15,15,23,23,23,23,23,23,23,
23,23,23,23,23,15,15,15,15,15,15,15,15,45,0,0,0,15,15,15,15,15,15,5,15,23,23,23,23,23,
23,23,23,23,15,15,15,15,15,15,15,15,15,45,0,0,0,15,16,15,15,15,15,15,15,15,23,23,23,23,
23,23,23,23,15,15,15,15,15,15,1,1,1,45,0,0,0,1,1,1,15,15,15,15,15,15,23,23,23,23,
23,23,23,15,15,15,15,15,15,1,1,1,1,1,1,1,1,1,1,1,1,15,15,15,15,15,15,23,23,23,
23,23,23,15,15,15,15,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,15,15,15,15,23,23,23,
23,23,15,15,15,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,15,15,15,23,23,
23,23,15,15,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,15,15,23,23,
23,15,15,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,15,15,23,
23,15,15,1,1,1,1,1,1,1,1,80,15,15,15,15,15,15,80,1,1,1,1,1,1,1,1,15,15,23,
23,15,1,1,1,1,1,1,1,1,15,80,80,80,80,80,80,80,80,15,1,1,1,1,1,1,1,1,15,23,
15,15,1,1,1,1,1,1,1,80,80,80,80,80,80,80,80,80,80,80,80,1,1,1,1,1,1,1,15,15,
15,1,1,1,1,1,1,1,80,80,80,80,80,80,80,80,80,80,80,80,80,1,1,1,1,1,1,1,1,15,
15,1,1,1,1,1,1,1,80,80,80,80,80,80,80,80,80,80,80,80,80,80,1,1,1,1,1,1,1,15,
15,1,1,1,1,1,1,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,1,1,1,1,1,1,15,
1,1,1,1,1,1,1,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,1,1,1,1,1,1,1,
1,1,1,1,1,1,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,1,1,1,1,1,1,
1,1,1,1,1,1,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,1,1,1,1,1,1,
80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,
80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,
80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,80,
80,80,80,80,80,80,80,80,79,79,79,80,80,80,79,79,80,80,80,79,79,79,79,80,80,80,80,80,80,80,
80,80,80,80,80,80,80,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,80,80,80,80,80,80,
80,80,80,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,80,80,
79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,
79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,
79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79],

			[0,0,22,5,15,15,32,0,0,23,23,15,23,23,23,23,23,15,15,23,23,0,0,31,15,5,5,21,0,0,
0,0,15,15,15,32,0,0,0,0,0,15,15,5,5,5,5,5,5,88,0,0,0,0,31,15,15,15,0,0,
0,22,15,32,0,0,0,0,0,0,22,0,16,16,16,16,16,16,0,15,0,0,0,0,0,0,31,15,21,0,
0,15,32,0,0,0,0,0,22,0,0,0,21,83,23,84,83,83,0,0,0,21,0,0,0,0,0,31,15,0,
22,15,0,0,0,0,0,22,0,0,0,0,83,23,23,23,86,15,15,0,0,0,21,73,86,0,0,0,15,21,
15,32,0,0,0,0,22,0,85,0,0,0,86,11,45,45,12,15,0,0,0,0,73,86,0,0,0,0,31,15,
15,0,0,0,22,5,0,0,87,87,86,0,73,6,45,45,43,84,0,0,0,0,73,0,0,21,0,0,0,15,
32,0,0,0,0,0,0,0,0,0,73,16,15,6,45,45,43,0,16,0,0,83,0,73,0,0,0,0,0,31,
0,0,0,22,0,0,0,0,0,0,32,0,31,6,45,45,43,32,0,31,0,85,0,73,0,0,21,0,0,0,
0,0,0,0,0,0,0,0,0,32,0,0,0,0,0,0,0,0,0,0,31,86,0,73,0,0,0,0,0,0,
0,0,22,0,0,0,0,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,31,73,0,0,0,21,0,0,
0,0,0,0,0,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,38,0,0,31,0,87,87,87,0,
0,22,84,86,32,0,48,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,48,0,31,0,0,21,0,
0,0,0,32,0,0,0,38,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,31,0,0,0,
0,0,0,0,0,47,0,0,0,0,0,108,103,97,98,98,99,0,107,0,0,0,0,0,0,0,0,0,0,0,
22,0,32,0,0,0,0,0,0,108,0,32,103,97,98,98,99,0,31,0,107,0,0,0,0,0,0,31,0,0,
0,0,0,0,0,0,0,0,0,32,0,0,103,97,98,98,99,0,0,0,31,0,0,0,0,37,0,0,0,0,
0,32,0,0,0,0,0,0,108,0,0,0,103,97,98,98,99,0,0,0,0,107,0,0,0,0,0,0,31,0,
0,0,0,0,0,0,0,0,32,0,0,0,103,97,98,98,99,0,0,0,0,31,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,108,0,0,0,0,103,97,98,98,99,0,0,0,0,0,107,0,0,0,0,0,0,0,
32,0,0,0,0,0,0,32,0,0,0,0,103,97,98,98,99,0,0,0,0,0,31,0,0,0,0,0,0,31,
0,0,0,0,0,0,108,0,0,0,0,0,103,97,98,98,99,0,0,0,0,0,0,107,0,0,0,0,0,0,
0,0,0,0,0,108,32,0,0,0,0,0,103,97,98,98,99,0,0,0,0,0,0,31,107,0,0,0,0,0,
15,15,15,15,15,32,0,0,0,0,0,0,103,97,98,98,99,0,0,0,0,0,0,0,31,15,15,15,15,15,
0,0,0,0,0,0,0,0,0,0,0,0,103,97,98,98,99,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,104,105,105,105,106,103,79,98,98,79,0,0,104,105,105,105,106,0,0,0,0,0,0,
0,0,0,0,0,0,104,109,0,0,0,110,105,79,79,79,79,105,105,0,0,0,0,110,106,80,0,0,0,0,
0,0,104,105,105,105,109,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,110,105,105,105,106,0,
104,105,109,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,110,106,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,16,16,16,16,21,23,23,23,23,23,23,23,23,22,16,16,16,16,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,15,5,5,5,5,5,75,87,87,73,74,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,22,15,0,0,0,0,0,84,73,0,73,21,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,87,87,87,87,71,73,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,75,87,87,88,74,15,15,15,86,0,81,73,0,0,75,87,87,87,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,85,0,91,73,0,0,0,85,0,0,0,0,0,0,
0,0,0,0,0,0,75,87,73,0,87,71,0,0,0,0,73,0,0,85,0,0,83,86,87,87,88,74,0,0,
0,0,0,0,0,0,73,0,73,0,0,81,73,0,0,0,73,0,73,73,84,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,85,83,73,0,73,91,0,0,0,0,73,0,0,0,72,87,87,87,87,88,75,0,0,0,
0,0,0,0,0,0,86,0,73,0,0,0,0,0,0,0,0,0,0,0,82,0,0,0,0,0,73,0,0,0,
0,0,0,0,0,0,73,0,0,0,0,0,0,0,0,0,0,0,0,0,92,0,0,0,0,0,73,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,73,0,0,0,
0,75,87,87,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,73,0,0,0,
72,0,0,85,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,85,0,0,0,
82,0,0,0,0,0,0,0,0,0,0,0,0,97,98,98,99,94,0,0,0,0,0,0,0,0,0,0,0,0,
92,0,0,0,0,0,0,0,0,0,0,0,0,97,98,98,99,94,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,97,98,98,99,94,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,97,98,98,99,94,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,36,0,0,0,0,0,0,97,98,98,99,94,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,97,98,98,99,94,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,97,98,98,99,94,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,97,98,98,99,94,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,97,98,98,99,94,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,97,98,98,99,94,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,97,98,98,99,94,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,97,98,98,99,94,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

		],

	},
	images: {
		tiles: {normal: "assets/tilemap/caves.png"},
		tent: {normal: "assets/objects/tent.png"},
		tent1: {normal: "assets/objects/tent1.png"},
		tent2: {normal: "assets/objects/tent2.png"},
		rockSpike: {normal: "assets/objects/rockSpike.png"},
		lanternCave: {normal: "assets/objects/lanternCave.png"},
		barrel: {normal: "assets/objects/barrel.png"},
		archaeologistBag: {normal: "assets/objects/archaeologistBag.png"},
		archaeologistBrush1: {normal: "assets/objects/archaeologistBrush1.png"},
		archaeologistBrush2: {normal: "assets/objects/archaeologistBrush2.png"},
		campfire1: {normal: "assets/objects/campfire1.png"},
		campfire2: {normal: "assets/objects/campfire2.png"},
		campfire3: {normal: "assets/objects/campfire3.png"},
		alysLoreworth: {normal: "assets/npcs/alysLoreworth.png"},
},

areaTeleports: [
	{
		// teleport to plains
		x: 12,
		y: 1500.8,
		width: 2,
		height: 259.2,
		teleportTo: "eaglecrestPlains",
		destinationX: 7250,
		destinationY: 3963,
	},
],


things: [



{x:[1091.2, 1216.7, 1355.7, 1644.1, 1494.5, 1695.8, 1167.4, 712.7, 329.1, 606.4,332.5, 89.9, 338.4, 1410.5],y:[1464.3, 1332.7, 1472.3, 1469.8, 1345.7, 1168.8, 863.8, 1298.5, 1301, 985.1,542.9, 182.4, -124.3, -209.5],image:"rockSpike",name:"rockSpike"},
{x:[225.6, 1367.6, 1587.8],y:[837.3, 482.5, 850.1],image:"tent2",name:"tent2"},
{x:[367.8, 844.3, 1248.4, 1258, 1730.1, 1666.1,236.2],y:[144.8, -54.4, -153.8, 236.9, 411.1, 149.1,474.4],image:"lanternCave",name:"lanternCave"},
{x:[330.7, 375.9, 293.5],y:[634.4, 590.7, 590.7],image:"archaeologistBag",name:"archaeologistBag"},
{x:[573.7, 30, 1764.2],y:[29.8, 938.4, 147],image:"archaeologistBrush1",name:"archaeologistBrush1"},
{x:[1357.1, 1068.6],y:[174.8, -249.5],image:"archaeologistBrush2",name:"archaeologistBrush2"},
{x:[622.8, 746.7, 800.7, 1226.3, 1521.8, 1471.1, 1432.7, 1617.9, 1677.7, 142.3, 169.9],y:[-90.1, -144, -144, -242.6, -91.1, 151.7, 334.1, 327.3, 715.8, 643.7, 394.6],image:"barrel",name:"barrel"},
{x: 528.5, y: 346.4, image: 'tent1', name: ''},
{
	x: 1412.5,
	y: 712.3,
	image: "campfire1",
	name: "Campfire",
	// animation!
	animation: {
		type: "carousel",
		frameTime: 200,
		images: ["campfire1", "campfire2", "campfire3"],
	}
},
],
npcs: [
            {
                x: 527,
                y: 419,
                image: "alysLoreworth",
                name: "Alys Loreworth",
                hostility: "friendly",
                level: 10,
                stats: {
                    maxHealth: 100,
                    defence: 1,
                    healthRegen: 0.3,
                },
                roles: [
                ],
                chat: {
                },
            },
					],
},

caves: {
	id: 26,

	// data displayed on moving to area
	data: {
		name: "The Caves",
		level: "Level 10 - 15",
		territory: "Neutral",
		displayOnEnter: true,
	},

	tagGameAllowed: true,

	darkness: 0.3,
	noRain: true,
	noLightning: true,

	song_day: "assets/music/Eaglecrest.mp3",
	song_night: "assets/music/Eaglecrest.mp3",
	checkpoint: false,
	lootArea: "caves",

	mapData: {
		origin: {x: 0, y: 900},
		cols: 125,
		rows: 180,
		tsize: 60,
		tilesPerRow: 10,
		solidTiles: [23, 24, 33, 34],
		objectTiles: [386],
		pathTiles: [],
		waterTiles: [28, 10, 20],
		lightEmitTiles: [{tile: 391, brightness: 0.8, radius: 150},
			{tile: 406, brightness: 0.9, radius: 500}, {tile: 405, brightness: 0.5, radius: 100}, {tile: 517, brightness: 0.8, radius: 120},
		],
		animateTiles: [
			{
				// water boundary
				tiles: [297, 321, 314, 307],
				animateTime: 180,
			},

			{
			// shoreline
			tiles: [353, 354, 355, 356],
			animateTime: 180,
		},


			{
			tiles: [326, 341],
			animateTime: 360,
		},

		{
		tiles: [327, 342],
		animateTime: 360,
	},

	{
	tiles: [336, 351],
	animateTime: 360,
	},

	{
	tiles: [337, 352],
	animateTime: 360,
	},
			
			
			{
			// water
			tiles: [28, 10, 20],
			animateTime: 300,
		},
		{
			// rope
			tiles: [19, 29, 39],
			animateTime: 400,
		},
		{
			// torches
			tiles: [391, 392],
			animateTime: 400,
		},
		{
			// lamps
			tiles: [404, 405],
			animateTime: 1200,
		}
	],
		objectTiles: [36, 37, 47], // bones	

},
images: {
	tiles: {normal: "assets/tilemap/caves.png"},
	tent: {normal: "assets/objects/tent.png"},
	tent1: {normal: "assets/objects/tent1.png"},
	tent2: {normal: "assets/objects/tent2.png"},
	rockSpike: {normal: "assets/objects/rockSpike.png"},
	lanternCave: {normal: "assets/objects/lanternCave.png"},
	barrel: {normal: "assets/objects/barrel.png"},
	archaeologistBag: {normal: "assets/objects/archaeologistBag.png"},
	archaeologistMap: {normal: "assets/objects/archaeologistMap.png"},
	archaeologistBrush1: {normal: "assets/objects/archaeologistBrush1.png"},
	archaeologistBrush2: {normal: "assets/objects/archaeologistBrush2.png"},
	bookPage: {normal: "assets/objects/bookPage.png"},
	caveShrineBlue: {normal: "assets/objects/caveShrineBlue.png"},
	caveShrineOrange: {normal: "assets/objects/caveShrineOrange.png"},
	caveShrineGreen: {normal: "assets/objects/caveShrineGreen.png"},
	campfire1: {normal: "assets/objects/campfire1.png"},
	campfire2: {normal: "assets/objects/campfire2.png"},
	campfire3: {normal: "assets/objects/campfire3.png"},
	rock1: {normal: "assets/objects/rock1.png"},
	animatedMineshaftCrystal: {normal: "assets/objects/animatedMineshaftCrystal.png"},
	animatedMineshaftCrystalBR: {normal: "assets/objects/animatedMineshaftCrystalBR.png"},
	animatedMineshaftCrystalTR: {normal: "assets/objects/animatedMineshaftCrystalTR.png"},
	caveDoor: {normal: "assets/objects/caveDoorAnimation.png"},
	chest: {normal: "assets/objects/chest.png"},
	alysLoreworth: {normal: "assets/npcs/alysLoreworth.png"},
	mrPeacock: {normal: "assets/npcs/mrPeacock.png"},
	valAsh: {normal: "assets/npcs/valAsh.png"},
	nest: {normal: "assets/objects/nest.png"},
  maxilla: {normal: "assets/enemies/maxilla.png"},
	vomer: {normal: "assets/enemies/vomer.png"},
	palatine: {normal: "assets/enemies/palatine.png"},
	stoneElemental1: {normal: "assets/enemies/stoneElemental1.png"},
	crystalAntOrange: {normal: "assets/enemies/crystalAntOrange.png"},
	crystalAntOrangeQueen: {normal: "assets/enemies/crystalAntOrangeQueen.png"},
	crystalAntBlueQueen: {normal: "assets/enemies/crystalAntBlueQueen.png"},
	crystalAntBlue: {normal: "assets/enemies/crystalAntBlue.png"},
	crystalAntGreen: {normal: "assets/enemies/crystalAntGreen.png"},
	crystalAntGreenQueen: {normal: "assets/enemies/crystalAntGreenQueen.png"},
	coyoteCorpse: {normal: "assets/corpses/coyote.png"},
	jaws: {normal: "assets/projectiles/jaws.png",},


},



things: [





],

npcs: [
           

					],

					



},


cavesShop: {
	id: 27,

	data: {
		name: "Caves Shop",
		displayOnEnter: false,
	},

	indoors: true,

	tagGameAllowed: true,

	song_day: "assets/music/Eaglecrest.mp3",
	song_night: "assets/music/Eaglecrest.mp3",

	checkpoint: false,

	lootArea: "eaglecrest",
	lootTier: 1,

	mapData: {
		cols: 24,
		rows: 22,
		tsize: 60,
		tilesPerRow: 10,
		solidTiles: [176, 177, 178, 59, 60, 34, 44, 113, 114, 167, 168],
		layers: [
			[34,34,34,34,34,34,34,34,34,159,159,159,159,159,159,34,34,34,34,34,34,34,34,34,
34,34,113,44,44,44,44,49,50,169,169,169,169,169,169,49,50,44,44,44,44,114,34,34,
34,34,44,44,44,44,44,44,44,159,159,159,159,159,169,44,44,44,44,44,44,44,34,34,
34,34,44,44,44,44,44,44,44,169,169,169,169,169,169,44,44,44,44,44,44,44,34,34,
34,34,44,159,159,159,159,44,168,169,159,159,159,159,159,168,44,159,159,159,159,44,34,34,
34,34,159,159,159,159,159,159,168,169,169,169,169,169,169,168,159,159,159,159,159,159,34,34,
34,34,169,169,169,169,169,169,168,159,159,159,159,159,169,168,169,169,169,169,169,169,34,34,
34,34,159,159,27,27,27,27,168,169,169,169,169,169,169,168,27,27,27,27,169,169,34,34,
34,34,169,169,27,27,27,27,168,168,168,168,168,168,168,168,27,27,27,27,159,169,34,34,
34,34,159,159,27,27,27,27,27,177,177,177,177,177,177,27,27,27,27,27,169,169,34,34,
34,34,169,169,27,27,27,27,27,27,27,159,159,27,27,27,27,27,27,27,169,159,34,34,
34,34,159,159,27,27,27,27,27,27,27,169,169,27,27,27,27,27,27,27,169,169,34,34,
34,34,169,169,27,27,27,27,27,27,27,159,159,27,27,27,27,27,27,27,169,169,34,34,
34,34,159,159,27,27,27,27,27,27,27,169,169,27,27,27,27,27,27,27,169,159,34,34,
34,34,159,159,27,27,27,27,27,27,27,159,159,27,27,27,27,27,27,27,169,169,34,34,
34,113,169,169,159,159,159,159,159,159,169,169,169,159,169,159,159,159,159,159,159,159,114,34,
34,44,169,169,169,169,169,169,169,169,159,159,159,169,169,169,169,169,169,169,169,169,44,34,
34,44,27,27,27,27,27,27,27,27,27,169,159,27,27,27,27,27,27,27,27,27,44,34,
34,159,159,27,27,27,27,27,27,27,27,159,159,27,27,27,27,27,27,27,27,159,159,34,
34,159,169,159,27,27,27,27,27,27,27,169,169,27,27,27,27,27,27,27,159,159,169,34,
34,159,169,169,159,27,27,27,27,27,27,159,159,27,27,27,27,27,27,159,159,159,159,34,
34,169,169,169,169,27,27,27,27,27,27,169,169,27,27,27,27,27,27,159,169,169,169,34],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,195,194,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,186,0,0,175,0,0,186,0,186,175,0,175,0,0,186,0,0,175,0,0,0,
0,0,0,188,198,198,187,0,0,188,198,188,198,198,187,0,0,188,198,198,187,0,0,0,
0,0,0,188,198,198,187,119,160,188,198,0,0,198,187,160,120,188,198,198,187,0,0,0,
0,0,60,188,198,198,187,160,0,188,198,0,0,198,187,0,160,188,198,198,187,59,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,185,185,185,185,0,0,0,0,0,0,0,0,185,185,185,185,173,0,0,0,
0,0,0,0,0,197,197,0,0,167,167,167,167,167,167,0,0,197,197,0,173,0,0,0,
0,0,0,0,0,188,187,0,176,0,0,0,0,0,0,178,0,188,187,0,173,0,0,0,
0,0,0,0,0,0,0,0,0,0,184,0,0,173,0,0,0,0,0,0,173,0,0,0,
0,0,0,0,0,0,0,0,0,0,184,0,0,173,0,0,0,0,0,0,173,0,0,0,
0,0,0,0,0,0,0,0,0,0,184,0,0,173,0,0,0,0,0,0,173,0,0,0,
0,0,0,0,0,0,0,0,0,0,184,0,0,173,0,0,0,0,0,0,173,0,0,0,
0,0,0,0,0,0,0,0,0,0,184,0,0,173,0,0,0,0,0,0,173,0,0,0,
0,0,0,191,185,185,185,185,185,185,185,0,0,185,185,185,185,185,185,185,180,0,0,0,
0,0,193,193,193,193,193,193,193,193,193,0,0,193,193,193,193,193,193,193,193,193,0,0,
0,0,0,0,0,0,0,0,0,0,184,0,0,173,0,0,0,0,0,0,0,0,0,0,
0,60,185,0,0,0,0,0,0,0,184,0,0,173,0,0,0,0,0,0,0,185,59,0,
0,0,191,185,0,0,197,197,0,0,184,0,0,173,0,0,197,197,0,0,185,180,0,0,
0,0,0,191,185,0,188,187,0,0,184,0,0,173,0,0,188,187,0,185,180,0,0,0,
0,0,0,0,0,0,0,0,0,0,184,0,0,173,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,117,0,195,194,194,196,0,0,195,194,195,194,194,196,0,0,195,194,194,196,0,126,0,
0,0,0,198,198,198,198,0,0,198,198,198,198,198,198,0,0,198,198,198,198,0,0,0,
0,0,0,186,0,0,175,0,0,186,0,186,175,0,175,0,0,186,198,198,175,0,0,0,
0,0,0,186,0,0,175,0,0,186,0,186,175,0,175,0,0,186,0,0,175,0,0,0,
0,0,0,186,0,0,175,0,0,186,0,186,175,0,175,0,0,186,0,0,175,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,184,0,195,196,0,0,0,0,0,0,0,0,0,0,195,196,0,0,0,0,0,
0,0,0,184,0,0,0,0,48,38,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,137,0,184,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,184,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,184,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,184,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,184,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,127,0,
0,0,0,184,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,184,0,0,0,195,196,0,0,0,0,0,0,0,0,195,196,0,0,0,173,0,0,
0,0,0,184,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,173,0,0,0,
0,0,0,0,184,0,0,0,0,0,0,0,0,0,0,0,0,0,0,173,0,0,0,0,
0,0,0,0,184,0,0,0,0,0,0,0,0,0,0,0,0,0,0,173,0,0,0,0]
	],

	},

	images: {
		tiles: {normal: "assets/tilemap/caves.png"},
		itemStand: {normal: "assets/objects/itemStand.png"},
		mrsPeacock: {normal: "assets/npcs/mrsPeacock.png"},

},
things: [
	{
		x: [569, 866, 887.9, 550.4, 350.8, 1088.8, 995.8, 451.3],
		y: [1097.6, 1097.6, 805.7, 805.7, 805.7, 805.7, 684.2, 684.2],
		image: "itemStand",
		name: "itemStand",
	},
],

npcs: [
	{
		x: 723,
		y: 406,
		image: "mrsPeacock",
		name: "???",
		hostility: "friendly",
		level: 10,
		stats: {
			maxHealth: 100,
			defence: 1,
			healthRegen: 0.3,
		},
	},
	],
	areaTeleports: [
		{
			// teleport to logging camp (path - north)
			x: 720,
			y: 1320,
			width: 354,
			height: 10,
			teleportTo: "caves",
			destinationX: 4311,
			destinationY: -280,
		},


	],

},

chloroville: {
	id: 28,

	// data displayed on moving to area
	data: {
		name: "The Undergrove",
		level: "Level 10 - 15",
		territory: "Neutral",
		displayOnEnter: true,
	},

	indoors: true,

	tagGameAllowed: true,

	song_day: "assets/music/Eaglecrest.mp3",
	song_night: "assets/music/Eaglecrest.mp3",
	checkpoint: false,
	lootArea: "caves",

	mapData: {
		origin: {x: 0, y: 0},
		cols: 80,
		rows: 100,
		tsize: 60,
		tilesPerRow: 10,
		solidTiles: [23, 24, 33, 34],
		pathTiles: [],
		waterTiles: [28, 10, 20],
		animateTiles: [{
			// water
			tiles: [28, 10, 20],
			animateTime: 300,
		},{
			// rope
			tiles: [19, 29, 39],
			animateTime: 400,
		}],
		objectTiles: [36, 37, 47], // bones
		layers: [
[223,223,238,238,238,238,238,238,238,238,238,238,238,238,238,238,223,222,228,228,204,204,204,223,204,223,223,223,223,223,223,223,223,204,204,211,279,238,238,238,238,238,238,223,223,223,223,223,223,223,223,223,223,223,223,223,223,204,204,204,228,228,221,223,238,238,238,238,238,238,238,238,238,238,238,238,238,238,223,223,
223,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,223,222,228,228,204,204,204,204,204,204,204,223,223,223,223,204,204,223,211,279,238,238,238,238,238,238,238,223,223,223,223,204,204,204,204,204,204,204,204,204,204,228,228,221,223,223,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,223,
223,238,238,281,281,281,281,281,281,281,281,281,281,281,281,238,238,223,223,223,222,228,228,204,204,204,204,223,204,204,204,204,204,204,223,211,279,238,238,238,238,238,238,238,238,204,204,204,204,223,204,204,204,204,204,204,228,228,228,221,223,223,223,238,238,281,281,281,281,281,281,281,281,281,281,281,281,238,238,223,
223,238,238,281,281,281,281,281,281,281,281,281,281,281,281,238,238,223,223,223,223,223,223,204,204,204,204,204,204,223,223,204,204,204,223,211,279,238,238,238,238,238,238,279,211,204,204,204,204,223,204,204,204,204,204,204,223,223,223,223,223,223,223,238,238,281,281,281,281,281,281,281,281,281,281,281,281,238,238,223,
211,238,238,281,269,269,269,281,281,269,269,269,281,281,281,238,238,211,223,223,223,223,223,223,204,204,204,204,204,204,223,204,223,223,223,211,279,238,238,238,238,238,238,211,211,223,223,204,204,223,204,204,223,204,204,223,223,223,223,223,223,223,211,238,238,281,269,269,269,281,281,269,269,269,281,281,281,238,238,211,
211,211,238,281,269,269,269,281,281,269,269,269,281,281,281,238,211,211,211,223,223,223,223,223,204,204,223,223,204,223,223,223,223,223,223,211,279,238,238,238,238,238,238,211,211,223,223,223,223,223,223,223,223,204,223,223,223,223,223,223,211,211,211,211,238,281,269,269,269,281,281,269,269,269,281,281,281,238,211,211,
211,211,238,281,281,281,281,281,281,281,281,281,281,281,281,238,211,211,211,211,211,223,223,223,223,223,223,223,223,223,223,211,211,211,223,211,279,238,238,238,238,238,238,211,211,211,211,211,223,223,223,223,223,223,223,223,223,223,223,211,211,211,211,211,238,281,281,281,281,281,281,281,281,281,281,281,281,238,211,211,
211,211,238,201,201,201,201,201,201,201,201,201,201,201,201,238,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,279,238,238,238,238,238,238,282,282,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,238,201,201,201,201,201,201,201,201,201,201,201,201,238,211,211,
211,211,238,281,281,281,281,281,281,281,281,281,281,281,281,238,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,282,282,279,238,238,238,238,238,238,282,282,282,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,238,281,281,281,281,281,281,281,281,281,281,281,281,238,211,211,
211,211,211,211,211,211,211,211,211,211,214,214,214,214,214,214,211,238,238,238,238,238,238,238,238,238,238,238,238,238,238,211,211,282,282,282,279,238,238,238,238,238,238,282,282,282,282,211,211,238,238,238,238,238,238,238,238,238,238,238,238,238,238,211,211,211,211,211,211,211,211,211,214,214,214,214,214,214,211,211,
209,228,228,211,211,211,211,211,211,211,214,214,214,214,214,214,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,282,282,282,282,279,238,238,238,238,238,238,279,282,282,282,282,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,238,211,211,211,211,211,211,211,211,214,214,214,214,214,214,211,211,
209,209,228,228,228,211,211,211,211,211,214,214,214,214,214,214,238,238,281,281,281,281,281,281,281,281,281,281,281,281,238,238,282,282,282,282,282,238,238,238,238,238,238,279,282,282,282,282,238,238,281,281,281,281,281,281,281,281,281,281,281,281,238,238,211,211,211,211,211,211,211,211,214,214,214,214,214,214,211,211,
209,209,209,228,228,228,228,211,211,211,214,214,214,214,214,214,238,238,281,281,281,281,281,281,281,281,281,281,281,281,238,238,282,282,282,282,282,238,238,238,238,238,238,279,282,282,282,282,238,238,281,281,281,281,281,281,281,281,281,281,281,281,238,238,211,211,211,211,211,211,211,214,214,214,214,214,214,214,211,228,
209,209,209,209,209,228,228,228,211,211,214,214,214,214,214,214,238,238,281,269,269,269,281,281,269,269,269,281,281,281,238,238,282,282,282,282,282,238,238,238,238,238,238,279,282,282,282,282,238,238,281,269,269,269,281,281,269,269,269,281,281,281,238,238,211,211,211,211,211,211,211,214,214,214,214,214,214,214,211,228,
209,209,209,209,209,209,228,228,228,211,214,214,214,214,214,214,214,238,281,269,269,269,281,281,269,269,269,281,281,281,238,211,282,282,282,282,282,238,238,238,238,238,238,279,282,282,282,282,211,238,281,269,269,269,281,281,269,269,269,281,281,281,238,211,211,211,211,211,211,211,214,214,214,214,214,214,214,211,228,228,
209,209,209,209,209,206,228,228,228,211,211,214,214,214,214,214,214,238,281,281,281,281,281,281,281,281,281,281,281,281,238,211,282,282,282,282,282,238,238,238,238,238,238,279,282,282,282,282,211,238,281,281,281,281,281,281,281,281,281,281,281,281,238,211,211,211,211,211,211,214,214,214,214,214,214,214,214,228,228,228,
209,209,209,209,202,204,228,228,228,211,211,214,214,214,214,214,214,238,201,201,201,201,201,201,201,201,201,201,201,201,238,211,282,282,282,282,282,238,238,238,238,238,238,282,282,282,282,282,211,238,201,201,201,201,201,201,201,201,201,201,201,201,238,211,211,211,211,211,211,214,214,214,214,214,214,214,211,228,228,228,
209,209,209,209,204,204,228,228,225,211,211,214,214,214,214,214,214,238,281,281,281,281,281,281,281,281,281,281,281,281,238,211,282,282,282,282,282,238,238,238,238,238,238,282,282,282,282,282,211,238,281,281,281,281,281,281,281,281,281,281,281,281,238,211,211,211,211,211,214,214,214,214,214,214,214,214,228,228,228,209,
209,209,209,202,204,204,228,221,223,211,211,214,214,214,214,214,214,211,211,211,211,211,211,211,211,214,214,214,214,214,214,211,211,282,282,282,282,238,238,238,238,238,238,282,282,282,282,211,211,211,211,211,211,211,211,211,214,214,214,214,214,214,214,211,211,211,211,214,214,214,214,214,214,214,214,211,228,228,209,209,
209,209,209,204,204,228,228,223,223,211,211,214,214,214,214,214,214,211,211,211,211,211,211,211,211,214,214,214,214,214,214,211,211,211,282,282,282,238,238,238,238,238,238,282,282,282,211,211,211,211,211,211,211,211,211,214,214,214,214,214,214,214,214,211,211,211,211,214,214,214,214,214,214,214,211,228,228,228,209,209,
209,209,202,204,228,228,225,223,223,211,211,214,214,214,214,214,214,214,211,211,211,211,211,211,211,214,214,214,214,214,214,211,211,211,211,282,282,279,238,238,238,238,238,282,282,211,211,211,211,211,211,211,211,211,214,214,214,214,214,214,214,214,214,211,211,211,211,214,214,214,214,214,214,211,211,228,228,228,209,209,
209,209,204,204,228,228,223,223,10,10,211,214,214,214,214,214,214,214,211,211,211,211,211,211,211,214,214,214,214,214,214,211,211,211,211,211,211,45,45,45,45,45,45,211,211,211,211,211,211,211,211,211,214,214,214,214,214,214,214,214,214,214,211,211,211,211,214,214,214,214,214,214,214,211,211,228,228,209,209,209,
209,209,204,228,228,225,223,10,10,10,10,214,214,214,214,214,214,214,214,211,211,211,211,211,211,214,214,214,214,214,214,214,211,211,10,10,10,10,211,211,10,10,10,10,10,10,211,211,211,211,211,214,214,214,214,214,214,214,214,214,214,211,211,211,211,214,214,214,214,214,214,214,214,211,211,228,228,209,209,209,
209,209,204,228,228,223,223,10,10,10,10,211,214,214,214,214,214,214,214,214,211,211,211,211,211,214,214,214,214,214,214,214,211,10,10,10,10,10,10,10,10,10,10,10,10,10,211,211,211,211,214,214,214,214,214,214,214,214,214,214,211,211,211,211,214,214,214,214,214,214,214,214,214,211,228,228,209,209,209,209,
209,209,228,228,228,223,10,10,10,10,10,211,214,214,214,214,214,214,214,214,214,214,211,211,211,211,214,214,214,214,214,214,211,10,10,10,10,10,10,10,10,10,10,10,10,10,211,214,214,214,214,214,214,214,214,214,214,214,214,211,211,211,211,214,214,214,214,214,214,214,214,214,211,211,228,209,209,209,209,209,
209,209,228,228,228,223,10,10,10,10,10,211,214,214,214,214,214,214,214,214,214,214,214,214,214,211,214,214,214,214,214,214,211,10,10,10,10,10,10,10,10,10,10,10,211,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,211,211,214,214,214,214,214,214,214,214,214,214,211,228,228,209,209,209,209,209,
209,209,209,228,228,10,10,10,10,10,10,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,10,10,10,10,10,10,10,10,211,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,211,228,228,228,204,204,204,209,209,
209,209,209,228,228,228,10,10,10,10,10,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,211,10,10,10,10,10,10,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,211,211,228,228,228,204,204,204,204,209,
209,209,209,209,228,228,228,10,10,10,10,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,211,10,10,10,10,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,211,228,228,228,204,204,204,204,209,
209,209,209,209,209,228,228,228,10,10,211,214,214,214,214,214,214,211,211,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,211,211,211,214,214,214,214,214,214,214,214,214,214,214,214,214,211,211,211,211,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,211,211,228,228,204,204,204,204,209,
209,209,209,209,209,228,228,228,10,10,214,214,214,214,214,214,211,211,211,211,211,211,214,214,214,214,214,214,214,214,214,214,214,214,214,214,211,214,214,214,214,214,214,214,214,214,214,214,214,10,10,10,10,10,10,10,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,223,211,228,228,228,228,204,209,
209,209,209,209,209,209,228,228,228,10,214,214,214,214,214,214,211,211,211,211,211,211,211,211,211,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,211,10,10,10,10,10,10,10,10,10,214,214,214,214,214,214,211,214,214,214,214,214,214,214,214,223,223,224,228,228,228,228,209,
209,209,209,209,209,209,228,228,228,211,214,214,214,214,214,214,211,211,211,211,211,211,211,211,211,211,211,211,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,10,10,10,10,10,10,10,10,10,10,10,10,211,211,211,211,211,211,211,214,214,214,214,214,214,214,214,223,223,223,223,223,228,228,209,
209,209,204,204,204,204,204,228,228,211,214,214,214,214,214,211,211,211,211,211,211,211,211,211,211,211,211,211,211,214,214,214,214,214,214,214,214,214,214,214,214,214,214,10,10,10,10,10,10,10,10,10,10,211,211,211,211,211,211,211,211,211,211,211,211,214,214,214,214,214,214,214,211,223,223,223,223,228,228,209,
204,204,204,204,204,204,204,228,228,211,214,214,214,214,214,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,214,214,214,214,214,214,214,214,214,214,214,10,10,10,10,10,10,10,211,211,211,211,211,211,211,211,211,211,211,211,209,211,211,211,211,214,214,214,214,214,214,211,211,223,223,223,228,228,209,
204,204,204,204,204,204,204,228,228,211,214,214,214,214,214,211,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,214,214,214,214,214,214,214,214,214,211,10,10,10,10,10,10,209,228,209,209,209,209,209,209,209,209,209,209,209,209,209,211,211,211,214,214,214,214,214,214,211,211,211,223,223,228,228,209,
204,204,204,204,204,204,228,228,228,211,214,214,214,214,214,211,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,231,231,231,231,231,231,231,231,231,211,10,10,10,10,10,10,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,211,211,211,211,214,214,214,214,214,211,211,211,211,211,228,228,209,
228,228,228,228,228,228,228,228,225,211,214,214,214,214,214,211,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,213,213,213,213,213,213,213,213,213,211,10,10,10,10,10,10,209,204,204,204,204,204,204,203,209,209,209,209,209,209,209,211,211,211,211,214,214,214,214,214,211,211,211,211,211,228,228,209,
228,228,228,228,228,228,228,221,223,211,214,214,214,214,214,211,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,213,213,213,213,213,213,213,213,213,213,213,10,10,10,10,10,209,204,204,204,204,204,204,204,203,209,209,209,209,209,209,211,211,211,211,214,214,214,214,211,211,211,211,211,211,228,228,209,
228,228,228,228,228,221,223,223,223,211,211,214,214,214,214,211,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,211,213,213,213,213,213,213,213,213,213,213,201,10,10,10,10,228,204,204,204,204,204,204,204,204,203,209,209,209,209,209,211,211,211,211,211,211,211,211,211,211,211,211,211,211,228,228,209,
228,228,221,223,223,223,223,223,223,211,211,214,214,214,214,211,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,211,211,213,213,213,213,213,213,213,213,213,213,211,211,211,211,228,204,204,204,204,204,204,204,204,204,205,209,209,209,209,211,211,211,211,211,211,211,211,211,211,211,211,211,211,228,228,228,
221,223,223,223,223,223,223,223,211,211,211,211,214,214,214,211,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,211,211,211,211,213,213,213,213,213,213,213,213,211,211,211,211,222,228,228,228,228,228,228,228,204,204,204,209,209,209,209,211,211,211,211,211,45,45,45,45,45,45,211,211,211,223,228,228,
223,223,223,223,223,223,223,211,211,211,211,211,211,211,211,211,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,211,211,211,211,213,213,213,213,213,213,213,211,211,211,211,223,222,228,228,228,228,228,228,228,204,204,209,209,209,209,211,211,211,211,45,45,45,45,45,45,45,45,211,211,223,228,228,
223,223,223,223,223,211,211,211,211,211,211,214,214,214,214,211,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,201,228,211,213,213,213,213,213,213,213,211,211,211,211,223,223,223,223,224,228,228,228,228,228,204,209,209,209,209,211,211,211,45,45,45,45,45,45,45,45,45,211,211,223,228,228,
223,223,211,211,211,211,211,211,211,211,211,214,214,214,214,211,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,228,228,211,212,212,212,212,212,212,211,211,211,201,223,223,223,223,223,228,228,228,228,228,209,209,209,209,209,211,211,211,45,45,45,45,45,45,45,45,45,211,211,211,228,228,
211,211,211,211,211,211,211,211,211,211,214,214,214,214,214,211,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,228,228,211,201,201,201,201,201,201,211,211,201,201,201,223,223,223,223,228,228,228,228,228,209,209,209,209,209,209,211,211,45,45,45,45,45,45,45,45,45,211,211,211,209,209,
214,214,214,214,211,211,214,214,214,214,214,214,214,214,214,211,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,228,228,201,201,201,201,201,201,201,211,201,201,201,201,201,223,223,223,228,228,228,204,228,209,209,209,209,209,209,211,211,45,45,45,45,45,45,45,45,45,211,211,211,209,209,
214,214,214,214,211,214,214,214,214,214,214,214,214,214,214,211,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,228,228,201,201,201,201,201,201,211,211,201,201,201,201,201,201,211,211,228,228,228,204,228,209,209,209,209,209,209,209,211,211,45,45,45,45,45,45,45,45,211,211,209,209,209,
214,214,214,211,214,214,214,214,214,214,214,214,214,214,214,211,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,228,228,201,201,201,201,201,201,211,211,201,201,201,201,201,201,211,211,228,228,228,204,228,209,209,209,209,209,209,209,209,209,211,45,45,45,45,45,45,211,209,209,209,209,209,
214,214,214,211,214,214,214,214,214,214,214,214,214,214,211,211,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,228,228,201,201,201,201,201,201,211,211,201,201,201,201,201,201,211,211,228,228,228,228,204,209,209,209,209,209,209,209,209,209,209,209,209,211,211,211,209,209,209,209,209,209,209,
214,214,214,211,214,214,214,214,214,214,214,214,214,211,211,211,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,228,228,201,201,201,201,201,201,211,211,201,201,201,201,201,201,201,201,228,228,228,228,204,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,
211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,228,228,201,201,201,201,201,211,211,201,201,201,201,201,201,201,201,201,222,228,228,228,204,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,
211,211,211,211,211,211,211,211,211,211,211,211,211,211,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,228,228,228,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,223,228,228,228,228,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,228,228,228,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,223,228,228,228,228,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,228,228,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,223,228,228,228,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,228,228,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,228,228,228,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,206,228,228,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,228,228,228,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,206,204,204,204,204,228,228,201,201,201,201,201,201,201,201,211,211,201,201,201,201,201,201,228,228,228,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,228,228,228,228,209,209,228,204,204,204,204,204,228,228,201,201,201,201,201,201,211,211,211,201,201,201,201,201,201,201,228,228,228,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,228,228,228,228,209,209,228,204,204,204,204,204,228,228,201,201,201,201,201,211,211,211,211,201,201,201,201,201,201,211,228,228,228,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,228,228,228,228,209,209,228,204,204,204,204,228,228,228,201,201,201,201,211,211,211,211,201,201,201,201,201,201,201,211,228,228,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,228,228,228,228,209,209,228,228,228,228,228,228,228,228,201,201,201,201,211,211,211,211,201,201,201,201,201,201,211,211,228,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,228,228,228,228,228,228,204,228,228,228,228,228,228,221,201,201,201,201,201,211,211,211,201,201,201,201,201,201,211,211,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,228,228,228,228,228,204,204,228,228,228,228,228,221,223,201,201,201,201,201,201,211,201,201,201,201,201,201,201,211,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,228,228,228,228,228,204,204,228,228,225,223,223,223,223,201,201,201,201,201,201,201,201,201,201,201,201,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,228,228,228,228,228,228,228,228,228,223,223,223,223,223,201,201,201,201,201,201,201,201,201,201,201,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,228,228,228,228,228,228,228,228,228,223,223,223,223,211,211,201,201,201,201,201,201,201,201,201,201,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,228,228,228,228,228,228,228,228,228,223,223,223,211,211,201,201,201,201,201,201,201,201,201,201,201,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,211,211,211,211,201,201,201,201,201,201,201,201,201,201,201,201,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,211,211,211,211,201,201,201,201,201,201,201,201,201,201,201,201,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,211,211,211,211,201,201,201,201,201,201,201,211,201,201,201,201,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,211,211,211,201,201,201,201,201,201,201,211,211,211,211,211,211,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,202,211,211,211,201,201,201,201,201,201,201,211,211,211,211,211,211,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,204,211,211,211,201,201,201,201,201,201,201,211,211,211,211,211,211,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,204,211,211,211,201,201,201,201,201,201,201,201,211,211,211,211,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,204,211,211,211,201,201,201,201,201,201,201,201,211,211,228,228,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,204,211,211,211,201,201,201,201,201,201,201,201,211,228,228,228,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,228,211,211,211,211,201,201,201,201,201,201,201,211,228,228,228,205,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,204,204,204,204,204,204,228,228,211,211,211,201,201,201,201,201,201,201,211,228,228,228,228,204,204,204,204,204,205,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,204,204,204,204,204,204,204,204,228,228,228,211,211,201,201,201,201,201,201,201,211,228,228,228,228,204,204,204,204,204,204,204,205,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,204,204,204,204,204,204,204,204,204,204,204,228,228,228,211,211,201,201,201,201,201,201,201,211,228,228,228,228,204,204,204,204,204,204,204,204,204,204,203,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,204,204,204,204,204,204,204,204,204,204,204,209,228,228,228,211,201,201,201,201,201,201,201,201,201,228,228,228,228,204,204,204,204,204,204,204,204,204,204,204,203,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,204,204,204,204,204,204,204,228,228,228,228,228,228,228,228,228,228,201,201,201,201,201,201,201,201,201,201,228,228,228,228,228,228,228,228,228,228,204,204,204,204,204,204,204,204,203,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,204,204,204,204,204,204,204,228,228,228,228,228,228,228,228,228,228,228,221,201,201,201,201,201,201,201,201,201,201,222,228,228,228,228,228,228,228,228,228,228,228,204,204,204,204,204,204,204,203,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,204,204,204,204,204,228,228,228,228,228,228,228,228,228,228,228,228,228,225,223,201,201,201,201,201,201,201,201,201,201,223,224,228,228,228,228,228,228,228,228,228,228,228,228,228,204,204,204,204,204,203,209,209,209,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,204,204,204,204,204,228,228,228,228,228,228,206,223,223,223,223,223,223,223,223,223,201,201,201,201,201,201,201,201,201,201,223,223,223,223,223,223,223,223,223,224,228,228,228,228,228,228,204,204,204,204,204,204,204,203,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,204,204,204,204,228,228,228,228,228,228,206,223,223,223,223,223,223,223,223,223,223,223,201,201,201,201,201,211,201,201,201,201,223,223,223,223,223,223,223,223,223,223,223,224,228,228,228,228,228,228,204,204,204,204,204,204,203,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,204,204,204,228,228,228,228,228,206,223,223,223,223,223,223,223,223,223,223,211,223,223,201,201,201,201,201,211,211,211,201,201,201,201,223,223,223,223,223,223,223,223,223,223,223,223,223,224,228,228,228,228,228,204,204,204,204,204,204,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,204,204,228,228,228,228,228,206,223,223,223,223,223,223,223,223,223,223,223,223,223,211,201,201,201,201,201,211,211,211,201,201,201,201,211,223,223,223,223,223,223,223,223,223,223,223,223,223,224,228,228,228,228,228,204,204,204,204,204,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,228,228,228,228,228,228,206,223,223,223,223,223,223,223,211,211,211,211,211,211,211,201,201,201,201,201,201,201,201,211,211,201,201,201,201,201,201,211,211,211,211,211,211,211,223,223,223,223,223,223,223,224,228,228,228,228,228,228,204,204,205,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,228,228,228,228,228,202,223,223,223,223,223,223,223,211,211,211,211,211,211,211,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,211,211,211,211,211,211,211,223,223,223,223,223,223,223,228,228,228,228,228,228,204,204,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,228,228,228,228,202,223,223,223,223,223,211,211,211,211,211,211,211,211,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,211,211,211,211,211,211,211,211,223,223,223,223,228,228,228,228,228,228,228,204,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,228,228,228,228,202,223,223,223,223,223,211,211,211,211,211,211,211,211,211,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,211,10,10,10,10,10,10,211,211,223,223,223,228,228,228,228,228,228,228,204,205,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,228,228,228,228,202,223,223,223,223,211,211,10,10,10,10,10,10,211,211,211,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,211,10,10,10,10,10,10,10,10,211,211,223,228,228,228,228,228,228,228,228,204,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,228,228,228,228,223,223,223,201,211,211,10,10,10,10,10,10,10,211,211,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,10,10,10,10,10,10,10,10,10,211,211,228,228,228,228,228,228,228,228,204,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,228,228,228,206,223,223,201,201,211,211,10,10,10,10,10,10,10,10,211,201,201,201,201,201,201,201,201,211,211,211,211,211,211,211,211,211,211,201,201,201,201,201,201,201,201,10,10,10,10,10,10,10,10,10,10,211,228,228,228,228,228,228,228,228,204,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,228,228,228,223,223,201,201,201,211,211,10,10,10,10,10,10,10,10,201,201,201,201,201,201,201,211,211,211,211,211,211,211,211,211,211,211,211,211,211,201,201,201,201,201,201,201,10,10,10,10,10,10,10,10,10,211,228,228,228,228,228,228,228,228,228,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,228,228,228,228,223,201,201,201,201,211,211,10,10,10,10,10,10,10,10,201,201,201,201,201,201,201,211,211,211,211,211,211,211,211,211,211,211,211,211,211,201,201,201,201,201,201,201,10,10,10,10,10,10,10,10,10,211,228,228,228,228,228,228,228,228,228,209,209,209,209,209,209,209,
209,209,209,209,209,209,204,228,228,228,206,223,201,201,201,201,211,211,10,10,10,10,10,10,10,211,201,201,201,201,201,201,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,201,201,201,201,201,201,211,10,10,10,10,10,10,10,10,211,228,228,228,228,228,228,228,228,228,209,209,209,209,209,209,209,
209,209,209,209,209,209,204,209,209,209,204,201,201,201,201,201,211,211,10,10,10,10,10,10,211,211,201,201,201,201,201,201,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,211,201,201,201,201,201,201,211,211,211,10,10,10,10,10,10,211,228,228,228,228,228,228,228,228,228,209,209,209,209,209,209,209],




[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,215,267,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,258,0,216,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,240,240,240,240,240,240,240,240,240,240,240,240,0,0,0,0,0,215,267,247,247,247,247,247,247,247,247,247,247,247,247,247,278,247,279,280,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,247,258,216,0,0,0,0,0,0,240,240,240,240,240,240,240,240,240,240,240,240,0,0,0,
0,0,240,240,247,247,247,258,246,246,247,247,247,247,240,240,0,0,0,0,0,0,215,267,247,247,267,247,247,247,247,247,0,267,247,278,0,279,280,247,247,280,279,247,267,247,247,247,247,247,247,0,0,0,0,247,216,0,0,0,0,0,0,0,240,240,247,247,247,258,246,246,247,247,247,247,240,240,0,0,
0,240,240,247,247,247,247,256,0,0,266,247,247,247,247,240,240,0,0,0,0,0,0,0,0,0,0,0,267,247,247,0,0,0,247,278,244,279,280,247,247,280,279,0,250,247,247,0,267,247,0,0,0,0,0,247,0,0,0,0,0,0,0,240,240,247,247,247,247,256,0,0,266,247,247,247,247,240,240,0,
0,240,247,247,247,258,246,0,0,0,0,246,246,246,267,246,240,234,0,0,0,0,0,0,0,0,0,0,0,267,247,0,0,0,247,278,244,279,280,0,247,280,279,250,0,0,0,0,0,247,0,0,0,0,0,247,0,0,0,0,0,0,235,240,247,247,247,258,246,0,0,0,0,246,246,246,267,246,240,0,
0,266,258,0,0,0,0,0,0,0,0,0,0,0,0,0,246,0,234,0,0,0,0,0,0,0,0,0,0,0,247,0,0,0,247,278,244,279,280,0,247,280,279,0,0,0,0,0,0,247,0,0,0,0,0,247,0,0,0,0,235,0,0,266,258,0,0,0,0,0,0,0,0,0,0,0,0,0,246,0,
0,0,0,275,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,234,0,0,0,0,0,0,0,0,0,247,235,0,0,247,278,244,279,280,0,247,280,279,0,0,0,0,234,0,247,0,0,0,0,0,246,0,0,0,235,0,0,0,0,0,275,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,197,197,197,197,197,197,197,197,197,197,197,197,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,247,278,244,279,280,244,247,280,279,251,243,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,197,197,197,197,197,197,197,197,197,197,197,197,0,0,0,
0,0,0,198,186,198,198,198,0,198,198,175,198,198,198,0,0,0,238,238,238,238,238,238,238,238,238,238,238,238,0,0,0,0,247,273,244,279,280,244,247,280,279,0,252,243,0,0,0,0,238,238,238,238,238,238,238,238,238,238,238,238,0,0,0,198,186,198,198,198,0,198,198,175,198,198,198,0,0,0,
237,0,0,0,186,0,0,0,0,0,242,0,0,198,198,263,239,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,271,273,0,244,279,280,0,246,280,279,0,0,252,243,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,186,0,0,0,0,0,242,0,0,198,198,263,0,0,
0,218,0,237,0,0,0,0,0,0,242,0,0,0,0,263,0,0,240,240,240,240,240,240,240,240,240,240,240,240,0,0,271,273,0,249,244,279,280,0,0,280,279,244,270,0,252,243,0,0,240,240,240,240,240,240,240,240,240,240,240,240,0,0,0,0,0,0,0,0,0,0,242,0,0,0,0,263,0,0,
0,0,218,0,0,237,0,0,0,0,242,0,0,0,0,263,0,240,240,247,247,247,258,246,246,247,247,247,247,240,240,0,242,0,0,0,249,279,280,0,0,280,279,244,259,0,0,263,0,240,240,247,247,247,258,246,246,247,247,247,247,240,240,0,0,0,0,0,0,0,0,0,242,0,0,0,0,263,0,217,
0,0,0,218,0,0,0,237,0,0,242,0,0,0,0,263,240,240,247,247,247,247,256,0,0,266,247,247,247,247,240,240,242,0,0,0,0,279,280,0,0,280,279,244,259,0,0,263,240,240,247,247,247,247,256,0,0,266,247,247,247,247,240,240,0,0,0,0,0,0,0,271,273,0,0,0,0,263,0,0,
0,0,0,0,0,218,0,0,237,0,242,0,0,0,0,252,240,247,247,247,258,246,0,0,0,0,246,246,246,267,246,240,242,0,0,0,0,279,280,0,244,280,279,0,259,0,0,263,240,247,247,247,258,246,0,0,0,0,246,246,246,267,246,240,0,0,0,0,0,0,0,242,0,0,0,0,261,253,217,0,
0,0,0,0,0,0,0,0,0,0,262,272,0,0,0,0,263,258,0,0,0,0,0,0,0,0,0,0,0,0,0,246,242,0,0,0,0,279,280,244,244,280,279,0,259,0,0,263,266,258,0,0,0,0,0,0,0,0,0,0,0,0,0,246,0,0,0,0,0,0,271,273,0,0,0,0,263,217,0,0,
0,0,0,0,0,0,0,0,0,0,0,242,0,0,0,0,263,0,275,0,0,0,0,0,0,0,0,0,0,0,0,0,242,0,0,0,0,279,280,244,0,280,279,0,250,0,0,263,0,0,275,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,271,273,0,0,0,0,261,253,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,242,0,0,0,0,263,0,197,197,197,197,197,197,197,197,197,197,197,197,0,0,242,0,0,0,260,279,280,0,0,280,279,259,0,0,0,263,0,0,197,197,197,197,197,197,197,197,197,197,197,197,0,0,0,0,0,0,0,242,0,0,0,0,0,263,217,0,0,207,
0,0,0,0,0,0,0,0,0,0,0,242,0,0,0,0,263,0,198,186,198,198,198,0,198,198,175,198,198,198,0,0,262,272,0,0,278,279,280,0,0,280,279,259,0,0,0,253,0,0,198,186,198,198,198,0,198,198,175,198,198,198,0,0,0,0,0,0,271,273,0,0,0,0,261,253,0,0,207,0,
0,0,0,0,0,0,0,0,0,0,0,242,0,0,0,0,263,0,0,186,0,0,0,0,0,242,175,0,198,198,263,0,0,262,272,0,278,279,280,0,0,280,279,259,0,0,253,0,0,0,0,186,0,0,0,0,271,273,175,0,198,198,263,0,0,0,0,271,273,0,0,0,0,261,253,217,0,0,0,0,
0,0,0,0,0,216,0,0,0,0,0,242,0,0,0,0,263,0,0,0,0,0,0,0,0,242,0,0,0,0,263,0,0,0,262,272,278,279,280,0,0,280,279,250,0,253,0,0,0,0,0,0,0,0,0,271,273,0,0,0,0,0,263,0,0,0,0,242,0,0,0,0,261,253,0,0,0,0,0,0,
0,0,0,0,216,0,0,0,0,0,0,242,0,0,0,0,252,243,0,0,0,0,0,0,0,242,0,0,0,0,263,0,0,0,0,262,241,303,280,0,0,280,303,241,253,0,0,0,0,0,0,0,0,0,271,273,0,0,0,0,0,261,253,0,0,0,0,242,0,0,0,0,263,0,0,0,0,207,0,0,
0,0,0,0,0,0,0,0,252,243,0,242,0,0,0,0,0,263,0,0,0,0,0,0,0,242,0,0,0,0,263,0,0,0,0,0,0,262,241,241,241,241,253,0,0,0,0,0,0,0,0,0,271,251,273,0,0,0,0,0,261,253,0,0,0,0,271,273,0,0,0,0,263,0,0,0,0,0,0,0,
0,0,0,216,0,0,0,235,0,252,243,262,272,0,0,0,0,252,243,0,0,0,0,0,0,242,0,0,0,0,252,243,0,0,271,251,251,243,0,0,271,251,251,251,251,243,0,0,0,0,0,271,273,0,0,0,0,0,0,261,253,0,0,0,0,271,273,0,0,0,0,0,263,0,217,0,217,0,0,0,
0,0,0,0,0,0,0,0,0,0,263,0,242,0,0,0,0,0,252,243,0,0,0,0,0,262,272,0,0,0,0,263,0,271,273,0,0,252,251,251,273,0,0,0,0,263,0,0,0,0,271,273,0,0,0,0,0,0,261,253,0,0,0,0,271,273,0,0,0,0,0,261,253,0,0,217,0,0,0,0,
0,0,216,0,0,0,235,0,0,0,263,0,242,0,0,0,0,0,0,252,251,243,0,0,0,0,242,0,0,0,0,263,0,242,0,0,0,0,0,0,0,0,0,261,241,253,0,271,251,251,273,0,0,0,0,0,0,0,263,0,0,0,0,271,273,0,0,0,0,0,0,263,0,217,207,0,0,0,0,0,
0,0,218,0,0,0,0,0,0,0,263,0,242,0,0,0,0,0,0,0,0,252,251,251,243,0,262,272,0,0,0,263,0,242,0,0,0,0,0,0,261,241,241,253,0,271,251,273,0,0,0,0,0,0,0,0,0,0,252,243,0,271,251,273,0,0,0,0,0,0,261,253,217,0,205,0,0,0,0,0,
0,0,0,0,0,235,0,0,0,0,263,271,273,0,0,0,0,0,0,0,0,0,0,0,252,251,251,273,0,0,0,252,243,262,272,0,0,0,0,261,253,0,271,251,251,273,0,0,0,0,0,0,0,0,0,0,0,0,0,252,251,273,0,0,0,0,0,0,0,261,253,0,0,0,204,0,0,205,0,0,
0,0,0,218,0,0,237,0,0,0,263,242,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,263,0,262,272,0,0,261,253,271,251,273,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,263,0,0,0,0,204,0,0,0,0,0,
0,0,0,0,0,0,0,237,0,261,253,242,0,0,0,0,261,241,241,272,0,0,0,0,0,0,0,0,0,0,0,0,252,243,0,262,241,241,253,271,273,0,0,0,0,0,0,0,0,0,261,241,241,241,241,272,0,0,0,0,0,0,0,0,0,0,0,0,0,252,243,0,0,0,204,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,263,0,242,0,0,0,261,253,0,0,262,241,241,272,0,0,0,0,0,0,0,0,0,0,252,243,0,0,0,271,273,0,0,0,0,0,0,0,0,261,241,253,0,0,0,0,262,272,0,0,0,0,0,0,0,0,0,0,0,0,0,263,0,222,0,215,0,0,0,0,0,
0,0,0,0,0,208,0,0,237,263,271,273,0,0,0,263,0,0,0,0,0,0,262,241,241,272,0,0,0,0,0,0,0,0,252,243,0,271,273,0,0,0,0,0,0,0,261,241,253,271,251,251,251,251,251,243,262,272,0,0,0,0,261,241,272,0,0,0,0,0,252,243,0,222,0,0,0,215,0,0,
0,0,0,0,0,0,208,0,0,253,242,0,0,0,0,263,0,0,0,0,0,0,0,0,0,262,241,241,272,0,0,0,0,0,0,252,251,273,0,0,0,0,0,0,261,241,253,0,271,273,0,0,0,0,0,252,243,262,241,241,241,241,253,0,242,0,0,0,0,0,0,263,0,0,224,0,0,0,0,0,
0,0,0,0,0,0,206,0,0,0,242,0,0,0,261,253,0,0,0,0,0,0,0,0,0,0,0,0,262,272,0,0,0,0,0,0,0,0,0,0,0,0,261,241,253,271,251,251,273,0,0,0,0,0,0,0,263,0,0,0,0,0,0,0,262,272,0,0,0,0,0,263,0,0,0,0,224,0,0,0,
0,206,0,0,0,0,0,0,0,0,242,0,0,0,263,0,207,209,209,209,209,209,209,209,209,209,209,208,0,262,241,272,0,0,0,0,0,0,0,0,0,261,253,271,251,273,0,0,0,0,0,0,207,209,209,209,209,209,209,209,209,218,0,0,0,262,272,0,0,0,0,263,234,0,0,0,0,228,228,209,
0,0,0,0,0,0,0,0,0,0,242,0,0,0,263,0,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,262,272,0,0,0,0,0,0,0,261,253,271,273,0,0,0,0,226,228,228,228,209,209,209,209,209,209,209,209,209,0,218,0,0,0,242,0,0,0,0,263,0,234,0,0,0,228,228,209,
0,0,0,0,0,0,0,0,0,0,242,0,0,0,263,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,242,0,0,0,0,0,0,0,263,0,242,0,0,0,0,0,228,207,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,262,272,0,0,0,263,0,0,234,0,0,0,0,209,
0,0,0,0,0,0,216,0,0,0,242,0,0,0,263,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,242,0,0,0,0,0,0,0,263,0,242,0,0,0,0,0,228,205,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,242,0,0,0,263,0,0,0,0,234,0,0,209,
204,216,0,0,0,0,0,0,0,0,242,0,0,0,263,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,242,0,0,0,0,0,0,0,263,0,262,272,0,0,0,0,228,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,242,0,0,261,253,0,0,0,0,0,0,0,209,
0,0,0,0,0,0,0,0,0,0,262,272,0,0,263,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,262,272,0,0,0,0,0,0,252,251,243,262,272,0,0,0,228,0,0,0,0,0,0,0,209,209,209,209,0,0,0,0,0,0,0,262,241,241,253,0,0,0,0,0,0,0,0,209,
0,0,0,0,0,0,0,0,0,0,0,242,0,0,263,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,262,272,0,0,0,0,0,0,0,252,243,262,241,241,241,0,0,0,0,0,0,0,0,209,209,209,209,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,262,272,0,263,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,262,241,272,0,0,0,0,0,0,263,0,0,0,0,0,215,0,0,0,0,0,0,209,209,209,209,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,224,0,209,
0,0,0,0,0,0,0,0,235,0,0,0,262,241,253,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,262,272,0,0,0,0,0,263,0,0,0,0,0,0,0,0,0,0,0,215,209,209,209,209,0,0,0,0,0,0,0,0,271,251,251,251,251,243,0,0,0,0,0,209,
0,0,0,0,0,0,0,235,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,218,0,0,0,242,0,0,0,0,0,263,0,0,254,255,0,0,0,0,0,0,0,0,209,209,209,209,0,0,0,0,0,0,0,271,273,0,0,0,0,252,243,0,0,0,0,209,
0,0,0,0,0,235,0,0,0,0,0,271,251,251,243,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,209,228,227,262,272,0,0,0,0,263,0,0,264,265,0,0,0,0,0,0,0,0,209,209,209,209,0,0,0,0,0,0,271,273,0,0,0,0,0,0,263,0,0,0,0,209,
0,0,235,0,0,0,0,0,0,0,0,242,0,0,263,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,242,0,0,0,0,263,0,0,0,271,0,0,0,0,0,0,0,0,209,209,209,209,0,0,0,218,0,0,242,0,0,0,0,0,0,0,263,0,0,234,217,209,
235,0,0,0,0,0,0,0,0,0,271,273,0,0,263,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,242,0,0,0,0,263,0,0,271,273,234,0,0,0,0,0,0,0,205,209,209,0,0,0,0,0,0,0,242,0,0,0,0,0,0,0,263,0,0,0,0,209,
251,251,251,243,0,0,271,251,251,251,273,0,0,0,263,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,271,273,0,0,0,261,253,0,271,273,0,0,234,0,0,0,0,0,0,0,209,209,0,0,0,0,0,218,0,262,272,0,0,0,0,0,0,263,0,0,217,0,0,
0,0,261,253,0,271,273,0,0,0,0,0,0,0,263,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,242,0,0,0,0,263,0,0,242,0,0,0,0,263,0,234,0,0,0,0,209,209,0,0,0,0,0,0,218,0,262,272,0,0,0,0,261,253,0,217,0,0,0,
0,0,263,0,271,273,0,0,0,0,0,0,0,261,253,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,273,0,0,0,0,263,0,0,242,0,0,0,0,263,0,0,0,0,0,0,205,0,0,0,0,0,0,0,0,0,218,262,241,241,241,241,253,217,0,0,0,0,0,
0,0,263,0,242,0,0,0,0,0,0,0,261,253,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,263,0,0,262,272,0,0,0,263,0,0,0,0,0,215,0,0,0,0,0,0,0,0,0,0,0,0,0,218,0,217,0,0,0,0,0,0,0,
241,241,253,0,262,241,241,241,241,241,241,241,253,0,0,217,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,261,253,0,0,271,273,0,0,0,252,251,243,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,217,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,237,0,0,0,263,0,0,271,273,0,0,0,0,0,0,263,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,217,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,252,251,251,273,0,0,0,0,0,0,0,252,0,0,0,0,215,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,218,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,207,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,261,272,0,0,0,0,0,234,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,261,253,262,272,0,0,0,0,261,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,261,241,253,0,0,242,0,0,0,0,263,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,209,209,209,209,209,209,0,209,0,0,0,0,0,0,0,0,0,0,0,261,253,0,0,0,271,273,0,0,0,261,253,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,209,209,209,209,209,209,0,209,0,0,0,0,0,0,0,0,0,0,261,253,0,0,0,0,242,0,0,0,0,263,0,0,0,217,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,209,209,209,209,209,209,0,209,0,0,0,0,216,0,0,0,0,0,263,0,0,0,0,271,273,0,0,0,261,253,0,0,217,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,209,209,209,209,209,209,0,202,216,0,0,0,0,0,0,0,0,0,263,0,0,0,0,242,0,0,0,0,263,0,0,217,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,209,209,209,209,209,209,202,0,0,0,0,0,0,0,0,0,0,0,252,243,0,0,0,242,0,0,0,0,263,0,217,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,209,209,209,209,209,209,0,0,0,0,0,0,0,0,0,272,0,0,0,252,243,0,271,273,0,0,0,0,263,217,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,209,209,209,209,209,209,218,0,0,0,0,0,0,0,0,242,0,0,0,0,252,251,273,0,0,0,207,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,209,209,209,209,209,209,209,216,0,0,0,0,0,0,0,262,272,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,209,209,209,209,209,209,209,209,218,0,0,0,0,0,235,0,242,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,209,209,209,209,209,209,209,209,209,218,0,0,0,235,0,271,273,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,209,209,209,209,209,0,0,0,0,0,235,0,0,0,271,273,0,0,0,0,0,0,0,0,0,261,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,242,0,0,0,0,0,261,241,272,0,0,263,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,254,254,255,0,242,0,0,0,0,261,253,0,262,241,241,253,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,264,264,265,271,273,0,0,0,0,263,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,242,0,0,0,0,0,263,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,242,0,0,0,0,0,263,0,0,0,0,0,217,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,219,220,0,242,0,0,0,0,0,252,243,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,229,230,0,242,0,0,0,0,0,0,263,0,226,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,237,0,0,0,262,272,0,0,0,0,0,263,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,206,0,237,0,0,0,242,0,0,0,0,0,263,0,0,0,0,205,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,202,204,0,0,0,0,0,0,0,227,0,0,262,272,0,0,0,0,263,0,0,0,0,204,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,206,0,0,0,0,0,0,0,0,0,0,0,0,0,271,273,0,0,0,0,263,0,0,0,0,204,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,202,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,242,0,0,0,0,0,263,0,0,0,0,204,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,202,0,0,0,0,0,0,0,0,0,0,0,216,0,0,0,0,271,273,0,0,0,0,0,252,243,0,0,0,215,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,206,0,0,0,0,0,0,0,216,0,0,0,0,0,0,0,0,0,251,273,0,0,0,0,0,0,0,252,0,0,0,0,0,0,0,0,0,215,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,202,0,0,0,0,0,0,0,216,0,0,0,0,0,0,0,228,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,215,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,209,209,209,209,209,209,209,0,202,0,0,0,0,0,216,0,0,0,0,0,0,0,0,0,228,228,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,215,0,0,0,0,0,0,0,209,209,209,209,209,209,0,0,0,0,0,0,0,
0,0,0,0,0,0,209,209,209,209,209,209,209,204,0,0,0,0,0,216,0,0,0,0,0,225,0,0,0,0,0,223,0,0,0,0,0,0,0,261,241,272,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,215,0,0,0,0,0,0,209,209,209,209,209,209,0,0,0,0,0,0,0,
0,0,0,0,0,0,209,209,209,209,209,209,209,0,0,0,0,216,0,0,0,0,0,225,0,0,0,0,0,0,0,223,0,0,0,0,0,0,261,253,0,262,272,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,215,0,0,0,0,209,209,209,209,209,209,0,0,0,0,0,0,0,
0,0,0,0,0,0,209,209,209,209,209,209,209,0,0,216,0,0,0,0,225,0,0,0,0,0,0,0,0,0,0,223,0,0,242,0,0,0,263,0,0,0,242,0,0,263,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,215,0,0,209,209,209,209,209,209,0,0,0,0,0,0,0,
0,0,0,0,0,0,209,209,209,209,209,209,209,0,216,0,0,0,0,225,0,0,0,0,0,0,0,0,0,0,0,0,0,235,242,0,0,0,263,0,0,0,242,0,0,263,234,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,215,0,209,209,209,209,209,209,0,0,0,0,0,0,0,
0,0,0,0,0,0,209,209,209,209,209,209,209,0,0,0,0,225,0,0,0,0,0,0,0,235,0,0,0,0,0,0,271,251,273,0,0,0,252,243,0,0,242,0,0,252,251,243,0,0,0,0,0,0,234,0,0,0,0,0,0,0,0,0,0,0,0,209,209,209,209,209,209,0,0,0,0,0,0,0,
0,0,0,0,0,0,209,209,209,209,209,209,209,228,228,228,0,0,0,0,0,0,0,235,0,0,0,0,0,0,271,251,273,0,0,0,0,0,0,252,251,251,273,0,0,0,0,252,251,243,0,0,0,0,0,0,234,0,0,0,0,0,0,0,0,0,0,209,209,209,209,209,209,0,0,0,0,0,0,0,
0,0,0,0,0,0,209,209,209,209,209,209,209,228,228,228,0,0,0,0,235,0,0,0,0,0,0,0,271,251,273,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,252,251,243,0,0,0,0,0,0,0,234,0,0,0,0,0,0,0,209,209,209,209,209,209,0,0,0,0,0,0,0,
0,0,0,0,0,0,209,209,209,209,209,209,209,228,228,228,0,0,0,235,0,0,0,0,0,0,0,0,242,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,263,0,271,251,251,251,251,243,0,234,0,0,0,0,0,0,209,209,209,209,209,209,0,0,0,0,0,0,0,
0,0,0,0,0,0,209,209,209,209,209,209,209,228,228,228,0,235,0,271,251,251,251,251,243,0,0,0,242,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,263,0,242,0,0,0,0,252,251,243,0,234,0,0,0,0,209,209,209,209,209,209,0,0,0,0,0,0,0,
0,0,0,0,0,0,209,209,209,209,209,209,209,228,228,228,0,0,271,273,0,0,0,0,263,0,0,271,273,0,0,0,0,0,261,241,241,241,241,241,241,241,241,241,241,272,0,0,0,0,0,252,243,242,0,0,0,0,0,0,252,243,0,0,0,0,0,209,209,209,209,209,209,0,0,0,0,0,0,0,
0,0,0,0,0,0,209,209,209,209,209,209,209,228,228,228,0,0,242,0,0,0,0,0,252,243,0,242,0,0,0,0,261,241,253,0,0,0,0,0,0,0,0,0,0,262,241,272,0,0,0,0,263,262,272,0,0,0,0,0,0,252,243,0,0,0,0,209,209,209,209,209,209,0,0,0,0,0,0,0,
0,0,0,0,0,0,209,209,209,209,209,209,209,228,228,228,0,0,242,0,0,0,0,0,0,263,271,273,0,0,0,0,263,0,0,0,0,0,0,0,0,0,0,0,0,0,0,242,0,0,0,0,252,243,242,0,0,0,0,0,0,0,263,0,0,0,0,209,209,209,209,209,209,0,0,0,0,0,0,0,
0,0,0,0,0,0,209,209,209,209,209,209,209,228,228,228,0,0,242,0,0,0,0,0,261,253,242,0,0,0,0,261,253,0,0,0,0,0,0,0,0,0,0,0,0,0,0,262,272,0,0,0,0,263,262,272,0,0,0,0,0,0,263,0,0,0,0,209,209,209,209,209,209,0,0,0,0,0,0,0,
0,0,0,0,0,0,209,209,209,209,209,209,209,228,228,228,0,0,242,0,0,0,0,261,253,0,242,0,0,0,0,263,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,242,0,0,0,0,263,0,262,241,272,0,0,0,0,263,0,0,0,0,209,209,209,209,209,209,0,0,0,0,0,0,0,
0,0,0,0,0,0,209,209,209,209,209,209,209,228,228,228,0,0,262,241,241,241,241,253,0,0,242,0,0,0,0,263,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,242,0,0,0,0,263,0,0,0,262,241,241,241,241,253,0,0,0,0,209,209,209,209,209,209,0,0,0,0,0,0,0],




[0,0,244,0,0,244,244,0,0,244,244,244,0,244,244,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,247,247,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,244,0,0,244,244,247,247,247,247,244,0,244,244,0,0,0,
0,244,244,0,244,247,0,0,247,247,247,247,247,247,244,244,0,0,0,0,0,0,0,0,0,247,0,0,0,0,0,0,0,0,0,247,247,247,247,0,0,0,0,0,0,0,0,0,0,0,0,0,247,247,0,0,0,0,0,0,0,0,0,244,244,0,244,244,247,247,247,247,247,247,247,0,244,244,0,0,
0,244,244,0,244,244,0,0,244,244,244,244,244,247,247,244,0,0,0,0,0,0,246,0,0,247,247,247,247,247,247,247,247,247,0,247,247,247,247,0,0,247,247,0,0,0,0,0,0,0,0,0,0,247,247,0,258,246,0,0,0,0,0,244,244,0,244,244,0,0,244,244,244,244,244,244,244,244,0,0,
0,244,0,244,244,244,0,0,244,244,244,244,244,0,0,244,244,0,0,0,0,0,0,246,246,246,0,0,0,0,247,247,247,247,247,247,247,247,247,0,0,0,0,0,0,0,0,0,0,0,0,0,247,0,0,0,0,0,0,0,0,0,0,244,0,244,244,244,0,0,244,244,244,244,244,0,0,244,244,0,
0,244,0,244,244,0,0,0,0,244,244,244,244,0,0,0,244,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,247,0,0,0,0,246,0,0,244,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,244,0,244,244,0,0,0,0,244,244,244,244,0,0,0,244,0,
0,0,0,244,244,0,0,0,0,0,244,244,244,292,291,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,244,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,244,244,0,0,0,0,0,244,244,244,292,291,0,0,0,
0,0,0,244,244,0,0,0,0,0,0,244,244,302,301,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,244,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,244,244,0,0,0,0,0,0,244,244,302,301,0,0,0,
0,0,0,274,274,274,274,274,274,274,274,274,275,194,194,0,0,0,239,239,239,239,239,239,239,239,239,239,239,239,246,0,0,0,0,0,0,244,0,0,0,0,0,0,0,0,0,0,0,0,239,239,239,239,239,239,239,239,239,239,239,239,0,0,0,274,274,274,274,274,274,274,274,274,275,194,194,0,0,0,
0,0,0,0,198,0,0,0,198,0,0,198,0,194,194,0,0,239,239,239,239,239,239,239,239,239,239,239,239,239,239,0,0,0,0,278,0,244,244,0,0,0,0,0,0,0,0,0,0,239,239,239,239,239,239,239,239,239,239,239,239,239,239,0,0,0,198,0,0,0,198,0,0,198,0,194,194,0,274,274,
0,0,0,0,0,0,0,0,0,0,0,175,0,194,194,0,0,244,0,0,244,244,0,0,244,244,244,0,244,244,0,239,0,0,0,278,0,244,244,0,0,0,0,270,0,0,0,0,239,244,0,0,244,244,0,0,244,244,244,0,244,244,0,239,0,0,0,0,0,0,0,0,0,175,0,194,194,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,198,198,0,244,244,0,244,247,247,247,247,247,247,247,247,0,244,244,0,0,0,0,0,0,244,244,244,0,244,0,0,0,0,0,0,244,244,0,244,247,247,247,247,247,247,244,244,0,244,244,0,0,0,0,0,0,0,0,0,0,0,0,198,198,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,244,244,0,244,244,0,0,244,244,244,244,244,244,244,244,0,0,0,0,0,0,244,244,244,0,244,244,0,0,0,0,0,244,244,0,244,244,0,0,244,244,244,244,244,244,244,244,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,244,0,244,244,244,0,0,244,244,244,244,244,0,0,244,244,0,0,0,0,0,0,244,244,0,244,244,0,0,0,0,0,244,0,244,244,244,0,0,244,244,244,244,244,0,0,244,244,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,244,0,244,244,0,0,0,0,244,244,244,244,0,0,0,244,0,0,0,0,0,0,244,244,0,0,244,244,0,0,0,0,244,0,244,244,0,0,0,0,244,244,244,244,0,0,0,244,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,266,0,244,244,0,0,0,0,0,244,244,244,292,291,0,0,0,0,0,0,0,0,0,244,244,0,244,244,0,0,0,0,0,0,244,244,0,0,0,0,0,244,244,244,292,291,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,244,244,0,0,0,0,0,0,244,244,302,301,0,0,0,0,0,0,0,0,244,244,244,244,244,244,0,0,0,0,0,0,244,244,0,0,0,0,0,0,244,244,302,301,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,274,274,274,274,274,274,274,274,274,275,194,194,0,0,0,0,0,0,0,0,244,0,244,244,244,0,0,0,0,0,0,0,274,274,274,274,274,274,274,274,274,275,194,194,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,198,0,0,0,198,0,0,198,0,194,194,0,274,274,275,0,0,0,244,244,0,0,244,244,0,0,0,261,274,274,0,0,198,0,0,0,198,0,0,198,0,194,194,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,194,194,0,0,0,274,275,0,0,0,0,0,0,244,244,0,0,261,274,275,0,0,0,0,0,0,0,0,0,0,0,0,194,194,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,198,198,0,0,0,0,274,275,294,293,293,293,293,293,294,293,261,274,275,0,0,0,0,0,0,0,0,0,0,0,0,0,198,198,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,274,275,272,303,303,303,303,261,0,274,275,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,235,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,274,274,274,274,274,274,274,274,275,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,237,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,227,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,208,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,217,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,274,274,274,274,274,274,274,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,254,254,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,264,264,265,0,0,0,0,0,0,0,0,0,0,0,219,220,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,229,230,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,219,220,220,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,229,230,230,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,47,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,219,220,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,47,0,0,0,0,0,37,230,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,219,220,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,37,0,0,0,0,0,0,0,0,0,229,230,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,36,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,218,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,219,220,220,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,229,230,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,36,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,254,255,254,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,264,265,264,265,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,47,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,235,0,0,0,0,0,0,0,0,0,0,234,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,47,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,47,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,47,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,244,244,244,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,244,244,0,245,244,244,0,47,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,244,0,0,0,0,0,244,244,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,244,0,0,0,0,0,244,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,244,0,0,0,0,0,0,0,244,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,244,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,244,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,245,244,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,245,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,244,0,0,0,0,0,244,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,245,244,0,0,0,0,0,244,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,245,244,244,244,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,245,244,244,244,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

		],
	},
	images: {
			tiles: {normal: "assets/tilemap/caves.png"},
			sundew: {normal: "assets/objects/sundew.png"},
			pitcherPlant: {normal: "assets/objects/pitcherPlant.png"},
			corpseFlower: {normal: "assets/objects/corpseFlower.png"},
			mushroomsBlue: {normal: "assets/objects/mushroomsBlue.png"},
			bench: {normal: "assets/objects/bench.png"},
			benchFlip: {normal: "assets/objects/benchFlip.png"},
			lanternCave: {normal: "assets/objects/lanternCave.png"},
			barrel: {normal: "assets/objects/barrel.png"},
			mailbox: {normal: "assets/objects/mailbox.png"},
			mailboxUnread: {normal: "assets/objects/mailboxUnread.png"},
		},
		things: [
			{
				x: [1330, 556.3, 688.5, 1125.8, 2917.1, 2490.3, 2602.9, 2664.4, 2186.3, 2474.9, 1454.8, 3264.4, 2661.6, 3674.6, 4134.2, 3888.6, 4545.8, 1937],
				y: [1280, 715.2, 1458.3, 1850.7, 1358.5, 2176.1, 3055.3, 3737.2, 4743.5, 5375.5, 5518.2, 5926.1, 4278.9, 1448.1, 801.3, 2132.7, 2719.3, 440.1],
				image: "corpseFlower",
				name: "corpseFlower",
			},
			{
				x: [345.4, 641.3, 560.4, 1174.3, 1991.8, 2900.8, 3884.9, 3969.4, 4737.3, 4475.3, 3884.7, 2709.8, 2123.7, 2440, 1071.2, 3035.2, 3746.1],
				y: [573.8, 1032.9, 2649.3, 1111.8, 1228.1, 1170.1, 1150.4, 567.3, 520, 2127.7, 2380.3, 2387.9, 4051, 5168.1, 5575.2, 5304.4, 5605.8],
				image: "pitcherPlant",
				name: "pitcherPlant",
			},
			{
				x: [3221.3, 3908.7, 4283.3, 4502.7, 3750.5, 1442, 645.5, 597.5, 824.5, 287, 2107.9, 3083.8, 2746.1, 2816.7, 1647.1, 3468.8],
				y: [1132.8, 909.1, 544.4, 2360.7, 1900, 1078.1, 1726.5, 525, 2997.5, 2719.6, 2474.7, 2791, 3507.3, 4413.1, 5323.3, 5459.1],
				image: "sundew",
				name: "sundew",
			},

			{
				x: [446.5, 203.2, 4567.6, 2965.6, 3337.8, 1976.4, 1335.7, 1845.9, 3229.8, 3683.7, 3280.5, 1816.5, 1035.4, 973.6, 2915, 3210.7, 3753.5, 3821.2, 4688.6, 4717.3, 150.9, 1463.7],
				y: [919.2, 1370, 1750, 2406.2, 2987.4, 3646.1, 5028.3, 4886.6, 4931.9, 5150.3, 2472.8, 538.7, 520, 58.1, 607.6, 407.9, 617.7, 40.9, 146.3, 870.9, 2219.4, 462.3],
				image: "mushroomsBlue",
				name: "mushroomsBlue",
			},
			{
				x: [1445, 3086.2, 3845, 4046.1],
				y: [1423.7, 1265.7, 1377.1, 1013.7],
				image: "bench",
				name: "bench",
			},

			{
				x: [2081.2, 1156.5],
				y: [1727.6, 1332.4],
				image: "benchFlip",
				name: "benchFlip",
			},

			{
				x: [2646.3, 2178.6, 2625, 2910.3, 3811.8, 3808.2, 4708.1, 1890.4, 993.5, 988.6, 91.6],
				y: [970.9, 666.7, 265.3, 869.5, 869.5, 332.1, 332.1, 867.7, 867.7, 327.1, 327.1],
				image: "lanternCave",
				name: "lanternCave",
			},

			{
				x: [2928.3, 2952.2, 2998.5, 3765.7, 3797, 3860.3, 3834.5, 4668.7, 4702.7, 1829.8, 1879.4, 1879.4, 743.6, 686.6, 116.9, 141.1, 1009.9, 1046, 1564.7],
				y: [1049.7, 1075.2, 1080, 1080.1, 1039.9, 514.6, 491.8, 526.9, 489.8, 1057, 1055.4, 1017.9, 558.2, 558.2, 495.5, 516.8, 1035.7, 1053.9, 1091.1],
				image: "barrel",
				name: "barrel",
			},
		],

		mailboxes: [
			{
				x: 2660.3,
				y: 1532.5,
				readImage: "mailbox",
				unreadImage: "mailboxUnread",
				name: "Mailbox",
			},
		],
	},

	tinkerersWorkshop: {
		id: 29,

		data: {
			name: "Tinkerers' Workshop",
			displayOnEnter: false,
		},

		indoors: true,

		tagGameAllowed: true,

		song_day: "assets/music/Eaglecrest.mp3",
		song_night: "assets/music/Eaglecrest.mp3",

		checkpoint: false,

		lootArea: "eaglecrest",
		lootTier: 1,
		
		areaVariables: {
			conveyorSpeed: 100, // speed of objects moving on conveyor belts
			conveyorDirection1: "down",
			conveyorDirection2: "up",
		},

		mapData: {
			origin: {x: 0, y: -180},
			cols: 48,
			rows: 32,
			tsize: 60,
			tilesPerRow: 8,
			objectTiles: [489, 490, 491],
			animateTiles: [
				{
					tiles: [441, 442, 443, 444, 445],
					animateTime: 180,
					conveyor: true,
					requireContinuity: true,
				},
				{
					tiles: [449, 450, 451, 452, 453],
					animateTime: 180,
					conveyor: true,
					requireContinuity: true,
				},
				{
					tiles: [569, 570, 571, 572, 573],
					animateTime: 180,
					conveyor: true,
					requireContinuity: true,
				},
				{
					tiles: [577, 578, 579, 580, 581],
					animateTime: 180,
					conveyor: true,
					requireContinuity: true,
				},
				{	
					tiles: [585, 586, 587, 588, 589],
					animateTime: 180,
					conveyor: true,
					requireContinuity: true,
				},

				{
					tiles: [593, 594, 595, 596, 597],
					animateTime: 180,
					conveyor: true,
					requireContinuity: true,
				},
			],
			layers: [
				[429,429,429,429,429,429,429,429,429,429,429,429,429,429,485,436,510,431,431,431,431,431,431,431,431,431,431,431,431,431,431,510,436,485,430,429,429,429,429,429,429,429,429,429,429,429,429,429,
429,429,429,429,429,429,429,429,429,429,429,429,429,429,436,436,510,431,437,438,437,438,438,438,437,438,437,438,437,438,431,510,436,436,429,429,429,429,429,429,429,429,429,429,429,429,429,429,
436,436,436,436,510,431,431,436,436,436,436,431,431,510,436,436,510,431,429,430,429,430,429,430,429,430,429,430,429,430,431,510,436,436,510,431,431,436,436,436,436,431,431,510,436,436,436,436,
510,510,510,510,510,431,431,436,436,436,436,431,431,510,510,510,510,431,437,438,437,438,437,437,437,437,437,438,437,438,431,510,510,510,510,431,431,436,436,436,436,431,431,510,510,510,510,510,
431,431,431,431,431,431,485,430,430,430,430,485,431,431,431,431,431,485,438,438,429,430,520,520,520,520,429,438,438,430,485,431,431,431,431,431,485,430,430,430,430,485,431,431,431,431,431,431,
429,438,438,438,438,438,485,431,431,431,431,485,438,438,438,438,438,485,438,438,438,438,520,520,520,520,437,438,438,438,485,438,438,438,438,438,485,431,431,431,431,485,429,430,429,438,429,430,
437,438,437,438,438,438,485,493,493,493,493,485,438,438,438,438,438,485,438,438,438,430,456,456,456,456,429,438,438,438,485,438,438,438,438,438,485,493,493,493,493,485,437,438,438,438,438,438,
429,430,429,438,438,430,485,493,493,493,493,485,429,438,438,438,429,485,438,438,437,438,456,456,456,456,437,438,437,438,485,430,429,430,429,430,485,493,493,493,493,485,438,438,438,438,438,430,
438,438,437,438,437,438,485,493,493,493,493,485,437,438,437,438,437,485,456,456,456,456,436,436,436,436,456,456,456,456,485,438,437,438,437,438,485,493,493,493,493,485,438,438,438,438,438,438,
438,430,429,430,429,430,485,493,493,493,493,485,429,430,429,430,429,485,456,456,456,456,436,436,436,436,456,456,456,456,485,430,429,430,429,430,485,493,493,493,493,485,438,438,438,430,429,430,
438,438,437,438,437,438,485,493,493,493,493,485,437,438,438,438,438,485,456,456,456,485,433,433,433,433,485,456,456,456,485,438,437,438,438,438,485,493,493,493,493,485,438,438,437,438,437,438,
429,429,429,430,429,438,485,456,456,456,456,485,429,430,438,438,438,485,438,438,429,436,436,436,436,436,436,429,429,429,485,438,438,438,438,438,485,456,456,456,456,485,438,438,429,430,429,430,
437,441,437,438,437,438,504,504,504,504,504,504,437,438,437,438,429,485,436,436,435,435,436,436,436,435,435,436,436,436,485,438,438,438,438,438,504,504,504,504,504,504,437,438,437,438,441,438,
431,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,436,436,436,435,435,435,435,435,435,436,435,435,436,436,0,0,0,428,504,504,504,504,504,504,504,504,504,504,504,456,431,
431,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,436,436,435,435,436,436,436,436,436,436,436,435,436,436,0,428,428,428,504,428,428,428,428,428,428,428,428,428,504,456,431,
431,428,428,428,428,428,428,428,428,428,439,428,428,428,428,428,428,436,436,435,435,436,436,436,436,436,436,436,436,436,436,0,428,428,428,504,428,428,428,428,428,428,428,428,428,504,456,431,
431,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,436,436,436,435,435,436,435,435,436,436,436,435,436,436,0,428,428,428,504,428,428,428,428,428,428,428,428,428,504,456,431,
431,428,428,439,428,428,428,428,428,428,428,428,428,428,428,428,428,436,436,436,436,436,436,436,435,435,435,435,435,436,436,0,428,428,428,504,428,428,428,428,428,428,428,428,428,504,456,431,
431,428,428,428,428,428,439,428,439,428,428,428,428,428,428,428,428,436,436,436,436,436,436,436,436,436,436,436,436,436,436,0,0,0,0,504,504,504,504,504,504,504,504,504,504,504,456,431,
431,492,492,492,492,492,492,492,492,441,492,492,492,492,492,492,441,426,426,426,426,426,426,426,426,426,426,426,426,426,426,441,492,492,492,492,492,492,520,520,520,520,520,520,520,520,456,431,
431,510,436,436,436,435,436,436,436,510,455,455,455,455,455,455,510,434,434,434,434,434,434,434,434,434,434,434,434,434,434,431,455,455,455,455,455,455,431,431,431,431,431,431,431,431,456,431,
431,510,436,436,436,436,436,436,436,510,493,493,493,493,493,493,510,456,456,456,456,456,456,456,456,456,456,456,456,456,456,431,493,493,493,493,493,493,431,431,431,431,431,431,431,431,456,431,
431,510,435,436,436,436,436,436,436,510,431,431,431,431,431,431,510,456,456,456,456,456,456,456,456,456,456,456,456,456,456,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,456,431,
431,510,436,436,436,436,436,436,436,510,431,431,431,431,431,431,510,456,456,456,456,456,456,456,456,456,456,456,456,456,456,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,456,431,
431,510,510,510,510,510,510,510,510,431,431,471,431,431,471,431,510,456,456,456,456,456,456,456,456,456,456,456,456,456,456,431,431,471,431,431,471,431,525,525,525,525,525,525,525,525,525,431,
431,485,429,429,429,429,430,429,430,510,431,431,431,431,431,431,510,456,456,456,456,456,456,456,456,456,456,456,456,456,456,431,431,431,431,431,431,431,456,429,429,429,429,429,430,429,485,431,
493,485,429,429,429,437,429,429,429,510,431,431,431,431,431,431,510,456,456,456,456,456,456,456,456,456,456,456,456,456,456,431,431,431,431,431,431,431,456,429,429,429,429,429,438,437,485,493,
436,485,429,429,429,429,429,429,429,510,510,510,510,510,510,510,431,456,456,456,456,456,456,456,456,456,456,456,456,456,456,431,456,456,456,456,456,456,456,429,429,429,429,429,430,429,485,436,
436,436,438,437,438,437,429,429,429,485,429,429,429,429,430,429,431,456,456,456,456,456,456,456,456,456,456,456,456,456,456,431,429,429,429,429,430,429,485,437,438,437,438,437,438,437,436,436,
436,436,436,436,436,436,436,436,436,485,429,429,429,437,438,437,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,429,429,429,437,438,437,485,436,436,436,436,436,436,436,436,436,
436,436,436,436,436,436,436,436,436,485,429,429,429,429,430,429,430,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,429,430,429,485,436,436,436,436,436,436,436,436,436,
436,436,436,436,436,436,436,436,436,436,438,437,438,437,438,437,438,429,429,429,429,429,429,429,429,429,429,429,429,429,429,437,438,437,438,437,438,437,436,436,436,436,436,436,436,436,436,436












],

	[566,567,568,0,0,566,567,568,0,0,542,543,544,0,0,0,442,446,0,0,0,0,0,0,0,0,0,0,0,0,446,445,0,0,0,0,542,543,544,0,566,567,568,0,0,542,543,544,
574,575,576,0,441,574,575,576,0,0,550,551,552,441,432,0,442,0,447,538,0,558,559,560,0,0,534,535,536,448,0,445,0,440,441,574,575,576,0,0,550,551,552,441,0,550,551,552,
0,0,0,0,441,0,0,513,0,0,514,0,0,441,0,0,442,0,0,0,0,566,567,568,0,0,542,543,544,0,0,445,0,0,441,0,0,513,0,0,514,0,0,441,0,0,0,0,
449,449,449,449,593,0,0,513,0,0,514,0,0,577,449,449,593,0,0,0,0,574,575,576,0,0,550,551,552,0,0,577,449,449,593,0,0,513,0,0,514,0,0,577,449,449,449,449,
0,0,0,0,0,0,447,0,0,0,0,448,0,0,0,0,0,447,0,0,0,0,0,0,0,0,0,558,559,560,448,0,0,0,0,0,447,0,0,0,0,448,0,0,0,0,0,0,
534,535,536,0,0,0,0,409,0,0,410,0,0,0,0,0,0,0,534,535,536,0,0,0,0,0,0,566,567,568,0,0,0,0,0,0,0,409,0,0,410,0,0,0,0,0,0,0,
542,543,544,558,559,560,0,0,0,0,0,0,0,0,558,559,560,0,542,543,544,0,0,0,0,0,0,574,575,576,0,0,0,558,559,560,0,0,0,0,0,0,0,534,535,536,0,0,
550,551,552,566,567,568,0,0,0,0,0,0,0,0,566,567,568,0,550,551,552,0,0,0,0,0,0,0,0,0,0,0,0,566,567,568,0,0,0,0,0,0,0,542,543,544,0,0,
0,0,0,574,575,576,0,0,0,0,0,0,0,0,574,575,576,0,0,0,0,514,0,0,0,0,513,0,0,0,0,0,0,574,575,576,0,0,0,0,0,0,0,550,551,552,0,0,
558,559,560,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,478,0,514,0,0,0,0,513,0,478,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,558,559,560,
566,567,568,534,535,536,0,0,0,0,0,0,558,559,560,0,0,0,0,0,0,511,0,0,0,0,512,0,0,0,0,534,535,536,0,0,0,0,0,0,0,0,0,0,0,566,567,568,
574,575,576,542,543,544,489,489,489,489,489,489,566,567,568,0,0,0,558,559,560,432,0,0,0,0,440,550,551,552,0,542,543,544,0,0,489,489,489,489,489,489,0,0,0,574,575,576,
0,454,0,550,551,552,432,0,0,0,0,440,574,575,576,0,0,0,0,0,0,0,0,0,0,648,0,0,0,0,0,550,551,552,0,0,432,0,0,0,0,440,538,0,0,538,454,0,
0,441,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,432,0,446,0,0,0,0,0,0,0,648,478,0,440,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,441,0,
0,441,0,446,0,0,0,0,648,0,0,0,0,0,478,0,0,513,648,0,0,0,0,0,0,0,648,0,648,0,514,0,0,446,0,0,0,0,0,0,0,0,0,0,478,0,441,0,
0,441,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,513,0,0,0,0,0,0,0,0,0,0,0,0,514,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,441,0,
0,441,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,513,0,0,648,0,0,0,0,0,0,648,648,0,514,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,441,0,
0,441,0,478,0,0,0,0,0,0,0,0,0,648,446,0,0,513,0,478,0,0,0,0,0,0,0,0,446,0,514,0,0,478,0,0,0,0,0,0,0,0,0,0,446,0,441,0,
0,441,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,516,515,515,515,515,515,515,515,515,515,515,515,515,517,0,0,0,0,0,0,0,0,0,0,0,0,0,0,527,441,0,
0,441,0,648,0,0,0,0,0,497,0,0,0,0,0,0,498,538,0,0,0,561,546,546,546,546,537,0,0,561,546,505,0,0,0,0,0,0,0,0,0,0,0,0,0,0,528,0,
0,441,513,0,469,461,470,0,514,441,0,0,0,0,0,0,442,553,555,546,546,539,537,0,0,0,553,555,537,538,0,441,0,0,0,0,0,0,537,0,0,0,561,546,537,538,521,0,
0,441,513,0,471,471,471,0,514,441,0,0,0,0,0,0,442,0,0,0,0,0,0,0,0,0,0,0,0,0,0,441,0,0,0,0,0,0,553,555,546,546,539,537,547,545,521,0,
0,441,513,0,464,472,463,0,514,441,513,0,648,0,0,514,442,0,478,0,0,0,0,0,0,0,0,0,0,478,0,441,513,0,0,0,0,523,0,538,561,555,546,563,538,0,521,0,
0,441,516,515,515,515,515,515,517,441,513,469,0,0,470,514,442,0,0,0,0,0,0,0,0,0,0,0,0,0,0,441,513,469,0,0,470,523,0,553,539,545,0,553,545,0,521,0,
0,577,449,449,449,449,449,449,449,506,513,469,461,461,470,514,442,0,0,0,0,0,0,0,0,0,0,0,0,0,0,441,513,469,461,461,470,514,577,449,449,449,449,449,449,449,593,0,
0,0,0,534,535,536,0,0,0,441,513,464,472,472,463,514,442,0,0,0,0,0,0,0,0,0,0,0,0,0,0,441,513,464,472,472,463,514,441,0,0,0,0,534,535,536,0,0,
0,0,0,542,543,544,558,559,560,441,516,515,515,515,515,517,441,0,0,0,0,0,0,0,0,0,0,0,0,0,0,441,516,515,515,515,515,517,441,534,535,536,0,542,543,544,0,0,
0,0,0,550,551,552,566,567,568,577,449,449,449,449,449,449,509,0,478,0,0,0,0,0,0,0,0,0,0,478,0,577,449,449,449,449,449,449,593,542,543,544,0,550,551,552,0,0,
0,440,0,0,0,0,574,575,576,0,558,559,560,0,0,0,441,0,0,0,0,0,0,0,0,0,0,0,0,0,0,441,534,535,536,0,0,0,0,550,551,552,0,0,0,0,432,0,
0,648,0,0,0,0,0,648,0,0,566,567,568,0,0,0,577,449,449,449,449,449,449,449,449,449,449,449,449,449,449,593,542,543,544,534,535,536,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,574,575,576,558,559,560,0,0,0,558,559,560,0,558,559,558,559,560,0,0,0,0,550,551,552,542,543,544,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,440,0,0,0,566,567,568,0,0,0,566,567,568,0,566,567,567,567,568,0,0,0,0,0,0,0,550,551,552,432,0,0,0,0,0,0,0,648,0
],

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,454,0,0,0,0,0,0,0,0,454,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,454,0,0,0,0,0,0,0,0,454,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,561,539,546,546,546,546,546,546,546,555,537,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,587,0,0,0,0,0,0,0,0,585,0,0,585,0,538,0,0,0,0,0,0,0,0,538,538,0,0,585,0,0,587,0,0,0,0,0,0,0,0,585,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,547,537,0,0,0,0,0,0,0,538,538,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,538,0,0,547,537,0,0,0,0,0,0,547,546,546,546,546,0,538,538,0,0,0,0,0,0,0,538,538,0,0,538,538,0,0,0,0,0,0,0,0,0,547,537,0,0,0,0,
0,538,0,0,538,538,0,0,0,0,0,0,538,0,0,0,0,0,538,547,537,0,0,0,0,0,0,538,538,0,0,538,538,0,0,0,0,0,0,0,0,0,538,547,546,546,546,546,
0,547,546,546,539,545,0,0,0,0,0,0,538,0,0,0,0,0,538,538,538,0,0,0,0,0,0,553,563,0,0,538,538,0,0,0,0,0,0,0,0,0,538,553,555,546,546,546,
0,553,546,537,0,0,0,0,0,0,0,0,547,537,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,553,539,546,537,0,0,0,0,0,0,0,538,0,538,0,0,0,
0,0,0,538,0,0,0,0,0,0,0,0,538,538,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,538,0,0,0,0,0,0,0,538,0,538,0,0,0,
0,0,0,538,0,0,0,0,0,0,0,0,538,553,546,546,537,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,561,563,0,0,0,0,0,0,0,538,0,538,0,0,0,
0,0,0,538,0,0,0,0,0,0,0,0,553,537,0,0,538,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,538,538,0,0,0,0,0,0,0,538,0,553,537,0,0,
0,0,0,538,0,0,0,0,0,0,0,0,0,538,0,0,538,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,561,563,538,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,428,428,428,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,428,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,428,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,428,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,428,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,428,428,428,428,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,521,0,0,0,0,523,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,521,0,0,0,0,523,524,524,524,524,524,524,524,524,441,0,
0,0,0,0,0,0,0,0,0,0,521,0,0,0,0,523,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,521,0,0,0,0,523,522,522,522,522,522,522,522,522,441,0,
0,0,0,0,0,0,0,0,0,0,521,0,0,0,0,523,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,521,0,0,0,0,523,522,522,522,522,522,522,522,522,441,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,522,522,522,522,522,522,522,522,441,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,522,522,522,522,522,522,522,522,441,0,
0,585,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,526,569,0,0,0,0,0,0,0,585,0,
0,0,0,0,0,538,538,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,553,539,555,555,546,546,537,0,0,
0,0,0,561,546,563,547,537,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,538,553,546,546,545,0,0,
0,0,0,538,0,547,539,545,0,585,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,441,0,0,0,0,0,0,585,0,0,538,0,0,0,0,0,0,
0,0,0,538,0,538,0,0,0,0,0,538,0,0,538,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,538,0,0,0,0,0,0,0,553,537,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,561,539,546,546,539,537,585,0,0,0,0,0,0,0,0,0,0,0,0,0,0,585,0,553,555,546,546,537,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,553,546,537,0,0,538,0,561,545,0,0,547,537,0,0,0,0,0,538,0,538,0,0,0,538,0,0,538,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,538,0,0,538,0,538,0,0,0,538,538,0,0,0,0,561,539,537,538,0,0,0,538,0,0,538,0,0,0,0,0,0,0,0,0,0






]

		],

		},

		images: {
			tiles: {normal: "assets/tilemap/eaglecrest.png"},
			gearSteel: {normal: "assets/objects/gearSteel.png"},
			gearRust: {normal: "assets/objects/gearRust.png"},
			tinkererChimney: {normal: "assets/objects/tinkererChimney.png"},
			tinkererLight: {normal: "assets/objects/tinkererLight.png"},
		 	tinkererWires: {normal: "assets/objects/tinkererWires.png"},
			tinkererMech: {normal: "assets/mounts/tinkererMech/tinkererMechIdle.png"},
			siren: {normal: "assets/objects/siren.png"},
			toxicWasteGreen: {normal: "assets/objects/toxicWasteGreen.png"},
			toxicWastePurple: {normal: "assets/objects/toxicWastePurple.png"},
			toxicWasteRed: {normal: "assets/objects/toxicWasteRed.png"},
			toxicWasteBlue: {normal: "assets/objects/toxicWasteBlue.png"},
			blueprints: {normal: "assets/objects/blueprints.png"},
			goggles: {normal: "assets/items/helm/45.png"},
			armour: {normal: "assets/items/set/13.png"},
			floorWires: {normal: "assets/objects/floorWires.png"},
			floorWires2: {normal: "assets/objects/floorWires2.png"},
			leverPurple: {normal: "assets/objects/leverPurple.png"},
			leverYellow: {normal: "assets/objects/leverYellow.png"},
			liftDoor: {normal: "assets/objects/workshopLiftDoor.png"},
			ustinov: {normal: "assets/npcs/ustinov.png"},
			dolph: {normal: "assets/npcs/dolph.png"},
			penelope: {normal: "assets/npcs/penelope.png"},
			harroway: {normal: "assets/npcs/harroway.png"},
		},
		npcs: [
			{
				x: 461,
				y: 1452,
				image: "ustinov",
				name: "Technician Ustinov",
				hostility: "friendly",
				level: 22,
				stats: {
					maxHealth: 160,
					defence: 6,
					healthRegen: 0.3,
				},
				roles: [
					{
						role: "questProgress",
						quest: Quests.eaglecrest[25],
						step: [0, 1],
					},
				],
				chat: {
					notUnlockedRoles: "What are you doingg here?",
					questProgress: "Glug-get yourself back to those levers, there's more items to sort througgh!",
					questComplete: "Don't you love all the rust here? Makes it feel so homely!",
					inventoryFull: "Your baggs are full!",
				},
			},
			{
				x: 2105,
				y: 1587,
				image: "penelope",
				name: "Drone Operator Penelope",
				hostility: "friendly",
				level: 26,
				stats: {
					maxHealth: 200,
					defence: 3,
					healthRegen: 0.2,
				},
				roles: [
					{
						role: "questProgress",
						quest: Quests.eaglecrest[27],
						step: [0, 1],
					},
				],
				chat: {
					notUnlockedRoles: "Hey hey!",
					questProgress: "",
					questComplete: "",
					inventoryFull: "",
				},
			},
			{
				x: 1165,
				y: 1735,
				image: "dolph",
				name: "Weapons Tinkerer Dolph",
				hostility: "friendly",
				level: 40,
				stats: {
					maxHealth: 250,
					defence: 19,
					healthRegen: 0.4,
				},
				roles: [
					{
						role: "questProgress",
						quest: Quests.eaglecrest[27],
						step: [0, 1],
					},
				],
				chat: {
					notUnlockedRoles: "Yes?",
					questProgress: "",
					questComplete: "",
					inventoryFull: "",
				},
			},
			{
				x: 1365,
				y: 735,
				image: "harroway",
				name: "Head Tinkerer Harroway",
				hostility: "friendly",
				level: 35,
				stats: {
					maxHealth: 361,
					defence: 99,
					healthRegen: 1,
				},
				roles: [
				],
				chat: {
					notUnlockedRoles: "",
					questProgress: "",
					questComplete: "",
					inventoryFull: "",
				},
			},
		],
		things: [
			{
				x: [928.9, 575.4, 639.2,  1927.1, 2044, 2309.4, 2221.8, 2560.6, 2686.6, 810, 900.2,  2081.6, 1976.9, 2725.8, 2629, 192.3, 257.4, 484.1, 138.5, 197.6],
				y: [1980.8, 1973.2, 2043.9, 2045.3, 1991.4,  2018.6, 2013.7, 1842.9, 1842.9, 740.4, 659.7, 741, 681.7, 698.9, 783.4, 1811.6, 1868, 1809.2, 762.8, 695],
				image: "gearSteel",
				name: "gearSteel",
				crop: {
					x: 0,
					y: 0,
					width: 202.5,
					height: 202.5
				},
				animation: {
					type: "spritesheet",
					frameTime: 350,
					imagesPerRow: 2,
					totalImages: 2,
				},
			},
			{
				x: 1441, y: 1650,
				image: "tinkererMech",
				name: "tinkererMech",
				crop: {
					x: 0,
					y: 0,
					width: 493,
					height: 388,
				},
				animation: {
					type: "spritesheet",
					frameTime: 250,
					imagesPerRow: 4,
					totalImages: 4,
				},
			},
			{x: 1443.1, y: 540.2, z:-1, image: 'liftDoor', name: 'liftDoor',
				crop: {
					x: 0,
					y: 0,
					width: 240,
					height: 240,
				},
			},
			{
				x: [1993.9, 806.4,  2629.6, 2104.4, 1952.2, 2269.3, 2619.7, 840.1, 665.8, 388.5, 282.1],
				y: [755.9, 656.8,  708.7, 684.2, 1969.9, 1955.9, 1784.8, 1984.5, 1962.5, 1800.6, 1781.7],
				image: "gearRust",
				name: "gearRust",
				crop: {
					x: 0,
					y: 0,
					width: 68,
					height: 68
				},
				animation: {
					type: "spritesheet",
					frameTime: 150,
					imagesPerRow: 2,
					totalImages: 2,
				},
			},

			{
				x: [181.5, 1001.9, 1887.5,  2771.2, 116.5],
				y: [1532.7, 385.7, 385.7,  385.7, 385.7],
				image: "tinkererChimney",
				name: "tinkererChimney",
				crop: {
					x: 0,
					y: 0,
					width: 140,
					height: 140
				},
				animation: {
					type: "spritesheet",
					frameTime: 200,
					imagesPerRow: 3,
					totalImages: 3,
				},
			},
			{
				x: [834.1, 319.6, 2029.3, 2496.6],
				y: [536.3, 536.3, 536.3, 536.3],
				image: "tinkererLight",
				name: "tinkererLight",
				crop: {
					x: 0,
					y: 0,
					width: 120,
					height: 120
				},
				animation: {
					type: "spritesheet",
					frameTime: 600,
					imagesPerRow: 4,
					totalImages: 4,
				},
			},
			{
				x: [693.2],
				y: [1619.6],
				image: "leverPurple",
				name: "Purple Lever",
				crop: {
					x: 0,
					y: 0,
					width: 100,
					height: 28
				},
				onInteract: function () {
					if (Game.areaVariables.conveyorDirection1 === "down") {
						Game.areaVariables.conveyorDirection1 = "up";
						map.replaceTiles(506, 507);
						this.crop.y = 28;
					}
					else if (Game.areaVariables.conveyorDirection1 === "up") {
						Game.areaVariables.conveyorDirection1 = "down";
						map.replaceTiles(507, 506);
						this.crop.y = 0;
					}
				},
				interactCooldown: 0.3,
			},

			{
				x: [869.2],
				y: [1619.6],
				image: "leverYellow",
				name: "Yellow Lever",
				crop: {
					x: 0,
					y: 28,
					width: 100,
					height: 28
				},
				onInteract: function () {
					if (Game.areaVariables.conveyorDirection2 === "down") {
						Game.areaVariables.conveyorDirection2 = "up";
						map.replaceTiles(508, 509);
						this.crop.y = 28;
					}
					else if (Game.areaVariables.conveyorDirection2 === "up") {
						Game.areaVariables.conveyorDirection2 = "down";
						map.replaceTiles(509, 508);
						this.crop.y = 0;
					}
				},
				interactCooldown: 0.3,
			},



			{
				x: [2760.1, 2282.4, 842.1,  301.7, 2581.9, 484.2, 29.1, 2043.4, 1313, 1570.3, 1572.1, 1307.8, 1307.8, 1561.5, 1258.7, 1620.9, 1259.2, 1623.1],
				y: [525.9, 525.9, 525.9,  1722.9, 1722.9, 526.8, 526.8, 526.8, 290.9, 290.9, 329.4, 329.4, 398.7, 398.7, 1374.1, 1374.1, 2034.8, 2034.8],
				image: "tinkererWires",
				name: "tinkererWires",
			},

			{
				x: [359.8],
				y: [1478.7],
				z: -1,
				image: "blueprints",
				name: "blueprints",
			},
			{
				x: [390.7],
				y: [1430],
				z: -1,
				image: "goggles",
				name: "goggles",
			},

			{
				x: [270.2],
				y: [1461.3],
				z: -1,
				image: "armour",
				name: "armour",
			},

			{
				x: [2602.2,  71.2,  1152, 1110.1, 883, 1989.9,],
				y: [937.5,  1861.6, 634.1, 667.2,  926.8, 409.2,],
				image: "toxicWasteGreen",
				name: "toxicWasteGreen",
			},

			{
				x: [2386.3,  823.5,  1798.8, 2663.4,  2052.9,],
				y: [1903.1,  926.8,  1424.8, 937.5,  409.2,],
				image: "toxicWastePurple",
				name: "toxicWastePurple",
			},

			{
				x: [1076.2, 2444, 1734.2, 98,],
				y: [1424.8, 1903.1, 1424.8, 1884.9,],
				image: "toxicWasteRed",
				name: "toxicWasteRed",
			},

			{
				x: [180.6, 1110.4],
				y: [1090.7, 1564.7],
				image: "floorWires",
				name: "floorWires",
			},

			{
				x: [1700.1, 2633.6],
				y: [ 1853.5, 1249.3],
				z: -1,
				image: "floorWires2",
				name: "floorWires2",
			},



			{
				x:  [998.8, 151.8, 1893, 2722.6, 923.7, 1956.4, 1888.4, 988.9,  1036.3, 1834.3, 2105.8, 2578.3, 292.8, 770.5],
				y: [ 959.3, 959.3, 959.3, 959.3, 1758.9, 1758.9, 1293.1, 1293.1,   239.7, 239.7, 428.7, 428.7, 428.7, 428.7],
				image: "siren",
				name: "siren",
				crop: {
					x: 0,
					y: 0,
					width: 202.5,
					height: 202.5
				},
				crop: {
					x: 0,
					y: 0,
					width: 24,
					height: 24
				},
				animation: {
					type: "spritesheet",
					frameTime: 200,
					imagesPerRow: 2,
					totalImages: 2,
				},
			},




		],
		areaTeleports: [
			{
				x: 1442,
				y: 500,
				width: 210,
				height: 2,
				teleportTo: "tinkerersEntrance",
				destinationX: 845,
				destinationY: 290,
			},

		],
		tripwires: [
		{
		x: [1442] , y: [693],
		width: 200, height: 200,
		collisionType: "feet",
		onPlayerTouch: function () {

			let liftDoorArray = Game.things.filter(entity => entity.name === "liftDoor");
			let liftDoor = Game.closest(liftDoorArray, Game.hero);

			if (typeof liftDoor.animation === "undefined") {
				liftDoor.setAnimation({

					type: "spritesheet",
					frameTime: 130,
					imagesPerRow: 5,
					totalImages: 5,

					stopAnimationOnState: 4,
					startState: 0,

					});
			}
		}
		},


		],
	},


	tinkerersEntrance: {
		id: 30,

		data: {
			name: "???",
			displayOnEnter: false,
		},

		indoors: true,

		tagGameAllowed: true,

		song_day: "assets/music/Eaglecrest.mp3",
		song_night: "assets/music/Eaglecrest.mp3",

		checkpoint: false,

		lootArea: "eaglecrest",
		lootTier: 1,

		mapData: {
			cols: 20,
			rows: 13,
			tsize: 60,
			tilesPerRow: 8,
			animateTiles: [
		],
			layers: [
				[6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,
480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,
480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,
480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,
480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,
480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,
480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,
480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,
480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480,480
],

	[537,0,547,545,0,0,0,0,0,0,0,0,457,458,459,460,0,0,0,561,
539,546,545,0,0,0,0,0,0,0,0,0,465,466,467,468,0,0,561,539,
0,0,0,0,0,0,0,0,0,0,0,0,473,474,475,476,0,0,538,0,
0,0,0,487,0,0,0,0,487,0,0,0,481,482,483,484,0,0,538,0,
0,0,0,488,0,0,0,0,488,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,488,487,487,487,487,488,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,494,495,495,495,495,496,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,469,461,461,470,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,471,471,471,471,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,464,472,472,463,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
]
		],

		},

		images: {
			tiles: {normal: "assets/tilemap/eaglecrest.png"},
			anthea: {normal: "assets/npcs/anthea.png"},

	},
	things: [
	],

		areaTeleports: [

			{
				x: 841,
				y: 183,
				width: 210,
				height: 2,
				teleportTo: "tinkerersWorkshop",
				destinationX: 1442,
				destinationY: 683,
			},

			{
				x: 355,
				y: 780,
				width: 210,
				height: 2,
				teleportTo: "eaglecrest",
				destinationX: 5190,
				destinationY: 2888,
			},
],
			npcs: [
			            {
			                x: 361,
			                y: 285,
			                image: "anthea",
			                name: "Anthea",
			                hostility: "friendly",
			                level: 10,
			                stats: {
			                    maxHealth: 100,
			                    defence: 1,
			                    healthRegen: 0.3,
			                },
			                roles: [
			                ],
			                chat: {
			                },
			            },

								],



	},

	underwaterGrove: {
		id: 32,

		data: {
			name: "???",
			displayOnEnter: true,
		},

		indoors: true,

		tagGameAllowed: true,

		song_day: "assets/music/Eaglecrest.mp3",
		song_night: "assets/music/Eaglecrest.mp3",

		checkpoint: false,

		lootArea: "eaglecrest",
		lootTier: 1,

		mapData: {
			origin: {x:0, y:2040},
			cols: 58,
			rows: 100,
			tsize: 60,
			tilesPerRow: 10,
			underwaterTiles: [289],
			objectTiles: [308, 318, 309, 319, 334, 335, 338, 339, 330, 340, 320, 207, 208, 217, 218, 214, 229, 230, 226, 227, 236, 237, 254],
			solidTiles: [310, 311, 312, 322, 323, 333, 204, 209, 228, 231, 232, 224, 225, 221, 222, 223, 234, 235],
			animateTiles: [

				{
				// water boundary
				tiles: [297, 321, 314, 307],
				animateTime: 180,
			},

			{
			// shoreline
			tiles: [353, 354, 355, 356],
			animateTime: 180,
		},


			{
			tiles: [326, 341],
			animateTime: 360,
		},

		{
		tiles: [327, 342],
		animateTime: 360,
	},

	{
	tiles: [336, 351],
	animateTime: 360,
	},

	{
	tiles: [337, 352],
	animateTime: 360,
	},





		],

			layers: [
				[209,209,209,209,209,209,209,204,204,204,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,204,204,204,204,204,204,204,204,204,205,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,204,204,204,204,204,204,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,204,204,204,204,209,209,209,209,209,209,209,204,204,204,204,204,204,204,204,204,204,204,204,205,209,209,209,209,209,209,209,
209,209,228,228,209,209,204,204,204,204,204,204,209,209,209,209,209,209,209,209,209,209,209,209,209,209,204,204,204,204,204,204,219,219,219,220,209,204,204,204,228,228,228,228,228,228,228,204,213,204,204,204,203,209,209,209,209,209,
209,209,209,228,209,204,228,204,204,204,228,204,204,204,209,209,209,209,209,209,209,209,209,209,209,204,204,204,204,204,204,204,204,204,204,204,204,204,228,228,228,228,228,228,228,228,223,223,223,204,204,204,204,204,204,204,209,209,
209,209,209,204,204,228,204,223,223,223,204,228,204,204,209,209,209,209,209,209,209,209,209,209,204,204,204,204,204,204,204,204,204,204,204,204,222,228,228,228,228,228,228,228,223,223,223,223,223,223,228,204,204,204,204,203,209,209,
209,209,209,228,228,204,223,223,223,223,223,204,228,204,209,209,209,209,209,209,209,209,209,209,204,204,204,350,350,350,350,350,204,204,222,228,223,224,213,228,228,228,228,228,223,223,228,223,223,228,228,228,228,204,204,204,204,209,
209,209,209,228,228,223,350,350,350,350,350,223,204,209,209,209,209,209,209,209,209,209,209,209,204,204,350,350,350,350,350,350,350,204,223,223,223,223,223,224,228,228,228,228,223,228,225,223,223,223,223,223,223,222,204,204,203,209,
209,209,209,206,228,223,350,350,350,350,350,223,209,209,209,209,209,209,209,209,209,209,209,209,204,204,350,350,350,350,350,350,350,350,350,224,228,223,223,223,223,223,223,223,223,228,223,223,223,223,223,223,223,223,223,204,204,204,
209,209,209,204,228,350,350,350,350,350,350,209,209,209,209,209,209,209,209,209,209,209,209,209,209,204,350,350,350,350,350,350,350,350,350,223,223,224,228,223,223,223,223,223,228,225,223,223,0,228,228,228,223,223,224,204,204,203,
209,209,202,204,228,350,350,350,350,350,350,209,204,204,204,209,209,209,209,209,209,209,209,209,209,209,209,350,350,350,350,350,350,350,350,350,223,223,223,222,228,228,228,228,221,223,223,223,223,0,0,223,223,223,223,223,204,204,
209,209,204,228,228,350,350,350,350,350,228,204,209,204,204,204,209,209,209,209,209,209,209,209,209,209,209,209,350,350,350,350,350,350,350,350,350,350,223,223,223,223,223,223,223,223,360,360,360,223,223,223,360,360,223,223,204,204,
209,206,204,228,228,225,350,350,350,350,228,204,209,209,204,204,204,209,209,204,204,204,209,209,209,209,204,204,228,228,228,350,350,350,350,350,350,350,350,350,223,223,223,223,223,223,360,360,360,360,223,360,360,360,360,223,228,204,
209,204,228,228,223,223,350,350,350,222,228,228,204,209,209,204,209,205,209,204,204,204,209,206,204,204,204,204,228,228,228,228,350,350,350,350,350,350,350,350,350,350,350,223,223,360,360,360,360,360,360,360,360,360,360,223,228,228,
202,204,228,228,221,350,350,350,350,223,223,228,204,204,209,209,209,204,204,204,204,204,204,204,209,204,204,228,228,228,228,228,350,350,350,350,350,350,350,350,350,350,350,360,360,360,360,360,360,360,360,360,360,360,360,228,228,228,
204,228,228,223,223,350,350,350,350,350,222,228,228,204,204,204,209,209,209,209,209,209,209,209,204,204,228,228,228,228,228,228,228,350,350,350,350,350,350,350,350,350,350,360,360,360,360,360,360,360,360,360,360,360,228,228,228,228,
204,228,228,225,350,350,350,350,350,350,223,222,228,228,204,204,204,204,204,204,204,204,204,204,204,228,223,228,228,223,223,228,228,350,350,350,350,350,350,350,350,350,350,360,360,360,360,360,360,360,360,360,360,223,228,228,228,228,
228,228,225,223,350,350,350,350,350,350,350,223,222,228,204,204,204,204,204,204,204,204,204,204,204,223,223,224,221,223,223,228,228,221,350,350,350,350,350,350,350,350,350,360,360,360,360,360,360,360,360,360,360,223,228,222,228,228,
228,221,223,350,350,350,350,350,350,350,350,350,223,222,213,228,204,204,204,204,224,213,225,213,228,223,223,223,223,223,223,223,223,223,350,350,350,350,350,350,350,350,350,360,360,360,360,360,360,360,360,360,360,223,228,223,223,223,
223,223,350,350,350,350,350,350,350,350,350,350,350,223,223,222,213,213,213,213,223,223,223,223,224,225,223,223,223,223,223,223,223,350,350,350,350,350,350,350,350,350,350,360,360,360,360,360,360,360,360,360,360,223,228,223,223,223,
225,350,350,350,350,350,350,350,350,350,350,350,350,350,223,223,223,223,223,223,223,223,223,223,223,223,223,228,212,223,350,350,350,350,350,350,350,350,350,350,350,350,350,360,360,360,360,360,360,360,360,360,360,228,228,223,223,223,
223,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,223,223,223,223,223,213,212,228,228,228,223,223,223,350,350,350,350,350,350,350,350,350,228,228,228,228,228,228,228,228,360,360,360,360,360,360,228,228,228,228,223,223,
350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,223,223,223,223,223,223,350,350,350,350,350,350,350,350,350,350,228,228,228,228,228,228,228,228,228,228,360,360,360,360,360,228,228,228,228,228,228,
350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,223,350,350,350,350,350,350,350,350,350,350,350,350,228,228,228,228,228,228,228,228,228,228,360,360,360,360,360,228,228,223,228,228,228,
350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,228,228,209,209,209,209,209,209,228,228,228,360,350,360,360,360,228,228,228,223,223,228,
350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,228,209,209,209,209,209,209,209,209,228,228,228,360,350,360,360,223,205,209,228,228,223,223,
350,209,209,209,209,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,209,209,209,209,209,209,209,209,209,209,209,209,228,228,360,350,360,360,223,204,288,209,228,228,228,
209,209,209,209,209,209,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,209,209,209,209,209,209,209,209,209,209,209,209,209,228,228,360,350,360,360,360,204,204,209,209,228,228,
209,209,209,209,209,209,209,209,209,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,228,228,360,350,350,360,360,204,204,0,209,209,228,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,350,350,350,350,350,350,350,350,350,350,350,350,228,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,228,228,228,360,350,360,360,360,204,204,204,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,228,228,228,350,350,350,350,350,350,350,228,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,228,228,228,360,350,360,360,360,360,204,204,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,228,228,228,350,350,350,350,350,350,228,204,204,204,209,209,209,209,209,209,204,204,204,209,209,209,209,209,209,209,228,228,228,360,360,360,360,360,360,204,204,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,228,228,228,350,350,350,350,228,228,204,204,204,204,204,204,204,204,204,204,204,204,204,209,209,209,209,209,209,209,228,228,228,360,360,360,360,360,228,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,228,228,228,350,350,350,350,228,228,228,204,204,204,204,204,204,204,204,204,204,204,204,204,209,209,209,209,209,209,228,228,228,228,360,360,360,228,228,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,228,228,350,350,350,350,228,228,228,228,228,228,204,204,204,204,228,228,228,228,228,204,209,209,209,209,209,209,209,228,228,228,228,228,228,228,228,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,206,228,228,223,350,350,223,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,205,209,209,209,209,209,209,209,209,209,228,228,228,228,228,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,206,204,228,228,223,350,350,223,223,228,228,228,228,228,228,228,228,228,228,228,228,228,228,204,204,205,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,204,204,228,228,223,289,289,223,223,223,228,228,228,228,228,228,228,228,228,228,228,228,228,204,204,204,205,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,206,204,204,228,228,223,289,289,289,223,223,223,228,228,228,228,228,223,223,223,223,223,228,228,204,204,204,204,204,205,209,209,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,206,204,204,228,228,228,223,289,289,289,289,223,223,223,223,223,223,223,223,223,223,223,223,0,228,228,204,204,204,204,204,205,209,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,206,204,204,228,228,228,228,289,289,289,289,289,289,223,223,223,223,223,223,223,311,311,311,223,223,223,228,228,228,204,204,204,204,205,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,206,204,204,204,228,228,228,289,223,289,289,289,289,289,289,311,311,311,311,311,289,289,289,289,289,223,223,223,228,228,228,204,204,204,204,204,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,206,204,204,204,228,228,228,223,223,223,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,223,223,223,228,228,228,228,204,204,204,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,206,204,204,204,228,228,228,289,223,223,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,223,223,223,228,228,228,228,204,204,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,206,204,204,204,228,228,228,289,223,223,289,289,289,289,289,289,289,289,209,209,209,209,209,209,209,209,289,289,289,289,289,223,223,223,228,228,228,228,209,211,211,211,211,211,211,211,211,211,209,
209,209,209,209,209,209,209,209,206,204,204,204,228,228,228,289,223,223,289,289,289,289,289,289,204,209,209,209,209,209,209,209,209,209,209,209,209,204,289,289,289,223,223,223,228,228,209,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,204,204,204,228,228,228,289,223,223,289,289,289,289,289,289,289,204,209,209,209,209,209,209,209,209,209,209,209,209,209,228,289,289,289,223,223,223,209,209,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,204,204,228,228,228,289,223,223,311,289,289,289,289,289,289,289,204,209,209,209,209,209,209,209,209,209,209,209,209,209,204,228,289,289,289,223,223,204,204,204,204,204,204,203,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,204,228,228,228,225,223,223,311,289,289,289,289,289,289,228,228,209,209,209,209,209,209,209,209,209,209,209,209,209,209,204,228,223,289,289,289,223,204,204,204,204,204,204,204,204,209,209,209,209,209,
209,209,209,209,209,206,209,209,228,228,228,225,223,223,311,289,289,289,289,289,289,228,228,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,206,228,223,289,289,289,223,204,204,204,204,204,204,204,204,203,209,209,209,209,
209,209,209,209,209,209,209,209,209,228,223,223,223,311,289,289,289,289,289,289,228,228,209,209,209,209,209,209,209,209,209,209,209,209,206,204,204,204,204,228,223,289,289,289,223,228,204,204,204,204,204,204,204,204,205,209,209,209,
209,209,209,209,209,209,204,209,209,204,228,223,311,289,289,289,289,289,289,223,228,209,209,209,209,209,209,209,209,209,209,209,209,204,204,204,204,204,204,333,311,289,289,289,223,224,228,228,228,228,228,228,204,204,204,209,209,209,
209,209,209,209,209,209,209,209,209,204,311,311,289,289,289,289,289,289,289,223,209,209,209,209,209,209,209,209,209,209,209,209,209,204,204,204,204,204,311,333,311,289,289,289,223,223,224,228,223,228,228,228,204,204,204,209,209,209,
209,209,209,209,209,209,209,209,209,204,311,289,289,289,289,289,289,289,289,209,209,209,209,209,209,209,209,209,209,209,209,209,209,204,204,311,311,311,333,333,311,289,289,289,311,223,223,223,223,224,228,228,204,228,204,209,209,209,
209,209,209,209,209,209,209,209,209,204,311,289,289,289,289,289,289,289,289,333,209,209,209,209,209,209,209,209,209,209,209,209,209,228,333,333,333,333,333,333,311,289,289,289,311,311,311,311,223,223,228,228,204,228,209,209,209,209,
209,209,209,209,209,209,209,209,209,333,311,289,289,289,289,289,289,289,289,204,333,209,209,209,209,209,209,209,209,209,209,228,228,204,333,333,333,333,333,333,331,289,289,289,289,311,311,311,311,311,333,333,228,228,209,209,209,209,
209,209,209,209,209,209,209,209,333,204,311,289,289,289,289,289,289,289,289,204,204,333,209,209,209,209,209,209,209,209,209,204,204,204,333,333,333,333,333,331,311,289,289,289,289,289,311,311,311,311,333,333,204,204,209,209,209,209,
209,209,209,209,209,209,209,333,204,204,311,289,289,289,289,289,289,289,289,204,204,204,205,219,209,209,209,209,209,209,209,228,204,311,333,333,333,333,333,311,311,289,289,289,289,289,289,289,311,333,333,333,204,204,209,209,209,209,
209,209,209,209,209,209,204,204,204,204,311,289,289,289,289,289,289,289,289,333,204,204,204,204,205,209,209,209,209,209,209,209,228,333,333,333,333,311,311,311,289,289,289,289,289,289,289,289,311,333,333,204,228,204,209,209,209,209,
209,209,209,209,209,209,204,204,204,333,311,289,289,289,289,289,289,289,289,311,333,204,204,204,204,205,209,209,209,209,209,209,228,228,333,333,333,311,311,289,289,289,289,289,289,289,289,289,311,333,333,333,204,204,209,209,209,209,
209,209,209,209,209,209,204,204,333,333,311,289,289,289,289,289,289,289,289,311,333,333,204,204,204,204,204,209,209,209,209,228,228,228,228,333,333,311,289,289,289,289,289,289,289,289,289,289,311,333,333,333,204,204,209,209,209,209,
209,209,209,209,209,209,204,333,333,333,333,289,289,289,289,289,289,289,289,311,333,333,333,311,204,204,205,219,209,209,209,209,209,209,209,209,333,311,289,289,289,289,289,289,289,289,289,289,222,333,333,333,204,204,209,209,209,209,
209,209,209,209,209,209,209,333,333,333,333,311,289,289,289,289,289,289,289,311,311,333,333,333,333,204,204,204,205,219,219,219,220,219,220,206,333,311,289,289,289,289,289,289,289,289,289,289,311,311,333,333,333,204,209,209,209,209,
209,209,209,209,209,209,209,209,209,333,333,333,289,289,289,289,289,289,289,311,311,311,333,333,333,333,204,204,204,204,204,204,204,204,204,204,333,333,289,289,289,289,289,289,289,289,289,289,311,311,333,333,333,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,333,333,289,289,289,289,289,289,289,311,311,333,333,333,333,311,311,204,204,204,204,204,204,204,204,333,333,311,289,289,289,289,289,289,289,289,289,311,311,333,333,204,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,289,289,289,289,289,289,289,311,311,333,333,333,333,333,311,311,311,311,311,311,311,311,311,333,333,311,289,289,289,289,289,289,289,289,289,289,311,333,333,204,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,289,289,289,289,289,289,289,289,311,312,316,333,333,333,333,333,311,311,311,311,311,311,333,333,333,313,289,289,289,289,289,289,289,289,289,289,311,333,333,204,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,289,289,289,289,289,289,289,311,311,311,311,311,311,224,333,333,333,333,333,333,333,333,333,313,311,289,289,289,289,289,289,289,289,289,289,311,333,333,204,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,289,289,289,289,289,289,289,332,333,311,311,311,311,311,316,316,316,316,316,316,316,316,313,311,311,289,289,289,289,289,289,289,289,289,289,311,333,333,204,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,289,289,289,289,289,289,289,311,311,333,333,311,311,311,311,311,311,311,311,311,311,311,311,311,311,289,289,289,289,289,289,289,289,289,289,333,333,333,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,289,289,289,289,289,289,289,289,311,311,311,333,333,311,311,311,311,311,311,311,311,311,311,311,289,289,289,289,289,289,289,289,289,289,311,333,333,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,289,289,289,289,289,289,289,289,289,289,311,311,311,311,311,311,311,311,311,311,311,311,289,289,289,289,289,289,289,289,289,289,289,333,333,204,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,289,289,289,289,289,289,289,289,289,311,311,289,289,311,311,311,311,311,311,311,289,289,289,289,289,289,289,289,289,289,289,333,333,333,204,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,289,289,289,289,289,289,289,289,289,289,289,289,289,0,0,0,0,0,289,289,289,289,289,289,289,289,289,289,289,333,333,333,333,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,289,289,289,289,289,289,289,289,289,0,0,0,0,0,289,289,289,289,289,289,289,289,289,289,333,333,333,333,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,202,289,289,289,289,289,289,289,289,0,0,0,0,0,289,289,289,289,333,333,333,333,333,333,333,333,333,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,204,204,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,333,333,333,333,333,333,333,333,333,333,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,204,204,289,289,289,289,289,289,289,289,289,289,289,289,289,289,333,333,333,333,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,204,204,289,289,289,289,289,289,289,289,289,289,289,289,289,333,333,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,204,311,289,289,289,289,289,289,289,289,289,289,289,289,311,333,333,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,333,289,289,289,289,289,289,289,289,289,289,289,289,311,333,333,205,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,209,209,204,204,204,204,204,204,333,333,289,289,289,289,289,289,289,289,289,289,289,311,333,333,228,204,204,204,204,204,205,209,209,209,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,209,209,209,204,204,204,204,204,204,204,204,333,333,311,289,289,289,289,289,289,289,289,289,289,311,333,333,204,204,204,204,204,204,204,204,205,209,209,209,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,209,204,204,204,204,204,204,204,204,204,204,204,333,333,311,289,289,289,289,289,289,289,289,289,289,311,333,333,204,204,204,204,204,204,204,204,204,204,204,203,209,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,209,209,204,204,204,204,204,311,311,311,311,311,311,333,333,333,311,289,289,289,289,289,289,289,289,289,289,311,333,333,333,311,311,311,311,311,311,204,204,204,204,204,203,209,209,209,209,209,209,209,209,
209,209,209,209,209,209,209,204,204,204,204,204,311,311,333,333,333,333,333,333,333,333,333,311,289,289,289,289,289,289,289,289,289,289,311,333,333,333,333,333,333,333,333,333,311,311,204,204,204,204,204,204,203,209,209,209,209,209,
209,209,209,209,209,204,204,204,204,311,311,311,333,333,333,333,333,333,333,333,333,333,333,221,289,289,289,289,289,289,289,289,289,289,222,333,333,333,333,333,333,333,333,333,333,333,311,311,311,204,204,204,204,203,209,209,209,209,
209,209,209,209,204,204,204,204,311,333,333,333,333,333,333,316,316,316,316,316,316,316,225,311,289,289,289,289,289,289,289,289,289,289,311,224,316,316,333,333,333,316,316,333,333,333,333,333,333,311,204,204,204,204,203,209,209,209,
209,204,209,204,204,204,311,311,333,333,333,333,333,316,206,311,311,311,311,311,311,311,311,311,289,289,289,289,289,289,289,289,289,332,311,311,311,311,311,311,311,311,311,224,316,333,333,333,333,333,311,311,204,204,204,204,204,203,
209,204,204,204,204,311,333,333,333,333,316,316,206,311,311,311,311,311,311,311,311,311,311,311,289,289,289,289,289,289,289,289,289,289,311,311,311,311,311,311,311,311,311,311,311,224,316,316,333,333,333,333,311,311,204,204,204,204,
209,204,204,311,333,333,333,333,333,206,311,311,311,311,311,311,311,311,311,311,311,311,311,289,289,289,289,289,289,289,289,289,289,289,289,312,311,311,311,311,311,311,311,311,311,311,311,311,224,333,333,333,333,333,311,204,204,204,
209,204,311,333,333,333,333,316,206,311,311,311,311,311,311,311,311,311,311,311,311,311,289,289,289,289,289,289,289,289,289,289,289,289,289,289,332,311,311,311,311,311,332,333,311,311,311,311,311,224,316,333,333,333,333,311,204,204,
228,204,333,333,333,316,206,311,311,311,311,311,311,311,289,289,0,0,0,0,0,0,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,311,311,333,333,311,311,311,311,311,224,316,333,333,333,204,228,
228,204,333,333,311,311,311,311,311,311,311,311,289,289,289,289,0,0,0,0,0,0,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,311,311,311,333,333,311,311,311,311,311,311,333,333,204,228,
228,204,333,333,311,311,311,311,311,289,289,289,289,289,289,289,0,0,0,0,0,0,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,311,311,311,311,311,311,311,311,333,333,204,228,
228,204,333,333,311,311,311,311,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,311,311,289,289,311,311,311,311,333,333,204,228,
228,204,333,333,311,311,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,311,311,333,333,204,228,
228,204,333,333,311,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,311,333,333,204,228,
209,209,333,333,333,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,333,333,333,209,209,
209,209,209,333,333,333,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,333,333,333,209,209,209,
209,209,209,209,333,333,333,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,289,333,333,333,209,209,209,209






],







	[0,0,0,0,0,0,220,0,0,0,220,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,220,220,0,0,0,0,0,0,0,0,206,0,0,0,0,0,0,0,0,0,0,219,0,0,0,0,0,0,0,0,
0,0,0,0,0,229,0,0,0,0,0,205,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,203,0,0,0,0,0,206,0,0,236,254,254,254,254,254,254,254,237,0,0,0,0,0,0,0,0,0,
0,0,209,209,209,202,236,254,254,254,227,0,203,0,0,0,0,0,0,0,0,0,0,0,0,0,202,0,0,0,0,210,205,0,0,0,202,0,236,254,0,0,0,0,0,0,213,213,225,0,0,0,0,219,219,0,0,0,
0,0,0,209,206,236,0,212,213,213,0,227,0,230,0,0,0,0,0,0,0,0,0,0,0,206,0,0,0,0,0,210,0,0,0,0,236,254,0,0,0,0,0,0,0,225,223,223,223,226,237,0,0,0,0,230,0,0,
0,0,209,229,236,0,225,0,0,0,222,0,237,230,0,0,0,0,0,0,0,0,0,0,229,0,0,0,0,47,0,210,0,0,226,237,0,0,0,0,0,0,0,0,231,223,236,237,0,232,0,254,237,0,0,0,0,0,
0,0,0,229,0,231,0,0,0,0,0,232,0,230,0,0,0,0,0,0,0,0,0,0,229,0,0,216,0,0,0,215,0,0,0,0,0,0,0,0,0,0,0,0,225,236,0,221,0,224,212,213,212,254,237,0,230,0,
0,0,0,229,0,231,235,0,48,0,234,232,228,0,0,0,0,0,0,0,0,0,0,0,229,210,216,48,38,0,0,0,215,0,0,232,237,223,0,0,213,213,213,225,223,47,0,0,0,0,0,245,0,0,231,0,0,0,
0,0,0,0,0,231,0,38,0,0,0,232,0,207,218,0,0,0,0,0,0,0,0,0,229,210,210,0,0,0,0,0,0,0,234,0,212,254,237,223,223,223,223,223,236,0,0,0,236,254,254,237,0,0,232,237,0,230,
0,0,0,0,0,231,0,0,0,0,264,0,0,205,0,208,0,0,0,0,0,0,0,0,0,214,210,0,0,0,0,0,0,0,0,0,0,0,213,254,254,254,254,254,0,0,0,264,222,0,0,0,0,0,0,231,0,0,
0,0,0,0,0,231,47,37,0,0,232,203,229,0,205,0,208,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,48,0,234,0,0,0,0,213,212,213,213,0,0,0,264,0,224,213,225,0,245,0,232,237,0,
0,0,0,216,0,231,0,0,0,236,0,0,0,218,0,205,206,0,217,214,214,214,218,0,0,0,219,206,254,254,237,0,0,38,0,0,0,234,0,0,0,0,0,0,0,0,235,0,234,0,0,0,0,234,0,232,231,0,
0,0,0,0,0,0,233,0,0,232,0,0,205,0,218,0,217,207,0,219,219,219,0,208,0,206,0,0,226,237,0,254,237,0,0,0,0,0,0,234,0,349,0,0,0,0,0,37,0,234,0,235,0,0,234,232,0,227,
0,0,216,0,231,0,233,0,0,0,0,215,0,203,0,214,0,0,206,0,0,0,205,0,229,0,0,236,0,0,0,0,231,0,0,0,0,0,0,0,0,0,348,0,0,235,0,0,0,0,0,0,48,0,201,232,0,0,
0,0,0,0,0,235,0,0,0,0,232,0,0,0,205,220,0,218,207,214,218,217,208,217,206,0,226,0,0,0,0,0,231,0,0,0,0,0,0,0,0,47,348,348,235,0,0,0,0,0,0,38,0,0,201,0,0,226,
0,216,0,231,0,0,0,0,0,234,0,0,215,0,0,0,203,0,0,220,219,220,220,202,0,226,226,254,254,227,0,0,0,227,0,0,0,0,0,0,0,0,348,348,0,0,0,0,0,0,0,0,0,226,0,0,236,0,
0,0,0,0,235,0,0,0,0,0,0,0,0,215,0,0,0,0,0,0,0,0,0,0,0,224,222,0,227,225,0,0,0,231,0,48,38,0,0,0,0,0,348,348,0,0,0,0,0,0,0,36,201,232,0,226,0,0,
216,0,0,0,0,0,48,0,38,0,234,0,0,0,254,237,0,0,0,0,226,254,237,0,210,0,0,0,0,245,0,222,212,0,0,0,0,36,0,0,0,0,348,348,0,0,47,0,0,0,0,0,201,232,236,0,0,0,
0,0,0,235,36,0,0,0,0,0,0,234,0,0,0,0,254,227,236,227,0,0,213,0,0,237,0,245,0,0,0,0,245,0,0,0,0,0,0,0,0,0,348,348,0,0,0,0,0,0,38,0,201,232,232,0,224,213,
231,0,235,0,0,0,0,0,0,0,0,0,234,0,0,0,0,0,0,225,245,0,0,0,0,0,0,236,254,233,245,0,0,235,0,0,0,0,0,0,0,0,348,348,0,0,0,0,0,48,0,0,201,232,232,0,0,0,
0,235,0,0,0,0,0,0,0,0,0,0,0,234,0,0,0,245,0,0,226,227,236,254,237,236,254,0,0,221,235,0,0,0,0,0,0,0,226,254,254,254,348,348,254,237,0,0,0,0,0,0,201,0,232,237,0,0,
0,0,0,0,38,0,0,0,0,0,0,0,0,0,0,234,0,0,0,0,224,0,0,0,0,36,213,221,0,235,0,0,0,0,0,0,0,236,0,0,0,0,0,0,0,0,237,0,0,0,0,226,0,0,222,0,254,254,
235,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,234,245,0,224,213,225,0,235,0,0,0,0,0,0,0,0,236,0,0,0,0,0,0,0,0,0,0,237,0,0,0,232,0,0,223,222,213,0,
0,48,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,234,0,235,0,0,0,0,0,0,0,0,0,0,232,0,207,214,214,214,214,208,0,0,0,231,0,0,0,232,0,0,237,223,223,222,
0,0,0,0,0,0,0,47,0,0,0,0,0,0,0,36,0,0,0,0,0,0,0,0,0,0,0,0,0,0,38,0,0,0,0,236,217,214,0,0,0,0,0,0,218,0,0,231,0,0,0,224,207,218,0,237,223,223,
0,217,214,214,208,0,0,0,0,0,0,0,0,0,0,0,0,0,38,48,0,0,0,0,0,0,0,0,0,0,48,0,0,207,214,214,0,0,0,0,0,0,0,0,229,0,0,231,0,0,0,0,0,0,218,0,254,227,
214,0,0,0,0,218,0,0,0,0,37,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,217,0,0,0,0,0,0,0,0,0,0,0,0,218,0,231,0,0,0,0,0,205,0,208,0,0,
0,0,0,0,0,0,214,214,208,0,0,0,0,0,0,0,0,0,0,0,0,0,36,0,0,0,0,0,217,214,214,214,0,0,0,0,0,0,0,0,0,0,0,0,0,229,0,231,0,0,0,234,0,0,0,0,218,0,
0,0,0,0,0,0,0,0,0,214,214,214,214,218,0,0,0,0,0,0,0,0,0,0,0,0,236,254,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,229,0,231,0,0,38,0,0,0,205,0,0,214,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,254,254,254,237,0,0,0,0,0,0,0,236,207,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,229,0,0,227,0,0,48,215,0,0,230,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,218,0,0,254,237,0,0,0,0,0,0,205,220,220,0,0,0,0,0,0,219,219,220,0,0,0,0,0,0,0,229,0,0,231,0,0,0,0,215,0,230,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,218,0,0,231,0,0,0,0,236,0,0,0,0,203,219,219,220,220,202,0,0,0,205,0,0,0,0,0,0,229,0,0,231,0,0,0,0,0,236,230,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,208,0,0,227,0,0,226,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,218,0,0,237,0,0,0,226,0,230,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,229,0,0,231,0,0,232,0,0,215,0,0,0,0,0,0,0,0,0,0,0,0,230,0,0,0,0,0,0,229,0,0,0,254,254,254,0,0,230,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,229,0,0,231,0,0,232,0,0,0,0,0,215,0,0,0,0,216,0,0,0,215,230,0,0,0,0,0,0,0,214,218,0,0,0,0,0,207,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,231,0,0,224,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,214,214,214,214,214,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,231,353,353,327,224,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,231,294,294,337,327,224,0,0,0,0,0,0,0,212,212,213,0,0,0,0,0,0,0,220,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,231,304,304,304,337,327,224,213,212,212,213,213,225,0,0,0,222,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,216,0,0,231,295,295,295,295,337,327,0,0,0,0,0,326,314,314,314,327,222,0,215,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,216,0,0,0,225,305,305,305,305,322,337,314,314,314,314,314,336,0,0,0,337,327,222,0,0,215,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,225,326,318,0,0,0,0,322,0,0,0,0,0,323,0,0,0,322,337,327,224,0,0,215,0,0,0,201,230,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,216,0,0,225,326,336,318,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,322,337,327,224,0,0,0,215,0,201,230,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,216,0,0,225,326,336,323,0,0,0,0,0,0,217,214,214,214,214,214,214,218,0,0,0,322,337,327,224,0,0,0,215,201,230,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,216,0,0,313,326,336,323,0,0,0,0,217,214,214,0,0,0,0,0,0,0,0,214,214,218,0,322,337,327,224,0,0,0,201,0,209,209,209,209,209,209,209,209,209,0,
0,0,0,0,0,0,0,0,0,0,0,0,216,0,0,313,326,336,323,0,0,37,0,201,230,0,0,0,0,0,0,0,0,0,0,0,0,229,237,0,322,337,327,222,0,207,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,216,0,0,313,326,336,323,0,0,0,0,0,201,230,0,0,0,0,0,0,0,0,0,0,0,0,0,210,237,0,322,337,327,232,205,220,220,219,220,219,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,216,0,0,313,326,336,0,0,0,0,0,0,236,264,230,0,0,0,0,0,0,0,0,0,0,0,0,0,229,210,237,0,322,337,232,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,216,0,0,313,326,336,0,323,0,0,0,0,236,0,217,0,0,0,0,0,0,0,0,0,0,0,0,0,0,229,210,231,0,0,322,232,0,0,0,0,0,0,0,230,209,209,209,0,0,
0,0,0,0,0,209,0,0,216,0,0,313,326,336,0,323,0,0,0,0,236,0,217,0,0,0,0,0,0,0,0,0,0,0,0,219,220,219,0,0,231,0,0,0,232,0,0,0,0,0,0,0,230,209,209,209,0,0,
0,0,0,0,0,209,209,209,0,0,231,326,336,0,323,0,47,0,0,236,0,207,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,315,231,0,0,47,222,215,0,0,0,0,0,0,230,209,209,209,0,0,
0,0,0,0,0,209,209,0,0,229,315,336,0,323,0,0,0,0,264,232,207,0,0,0,0,0,0,0,0,0,0,209,0,229,0,0,0,326,314,0,340,318,0,319,327,0,0,0,0,0,0,215,230,209,209,209,0,0,
0,0,0,0,0,209,209,0,0,229,340,318,323,0,0,0,0,0,264,232,0,0,0,0,0,0,0,0,0,0,0,209,0,229,326,314,314,336,0,0,340,318,38,319,337,327,0,212,212,0,0,0,230,209,209,209,0,0,
0,0,0,0,0,209,0,0,0,229,340,318,0,0,0,0,0,0,264,0,0,0,0,0,0,0,0,0,0,0,0,209,0,229,336,0,0,0,323,0,340,318,0,319,0,337,314,314,327,232,0,0,230,209,209,209,0,0,
0,0,0,0,209,209,0,0,0,229,340,318,0,0,0,0,38,48,0,205,0,0,0,0,0,0,0,0,0,0,0,209,0,202,323,0,0,0,0,0,340,318,0,319,0,0,0,0,337,232,315,315,230,209,209,209,0,0,
0,0,0,0,209,209,0,0,0,0,340,318,0,38,0,0,0,48,0,0,205,0,0,0,0,0,0,0,0,0,0,209,202,326,0,0,0,0,0,0,0,318,0,0,322,0,0,0,0,330,0,207,205,209,209,0,0,0,
0,0,0,209,209,0,0,0,0,0,340,318,0,0,0,0,0,0,0,327,0,205,0,0,0,0,0,0,0,0,0,229,326,336,0,0,0,0,0,0,0,318,0,0,0,234,0,0,0,330,0,230,0,230,209,0,0,0,
0,0,0,209,0,0,0,0,0,326,340,318,0,0,0,37,36,0,319,337,327,0,0,0,0,0,0,0,0,0,0,209,336,0,0,0,0,0,313,308,0,318,0,0,36,0,0,319,322,0,0,205,208,230,209,0,0,0,
0,0,0,0,0,0,229,0,326,336,340,318,0,0,0,0,0,0,319,322,337,327,0,0,0,0,0,0,0,0,0,209,209,323,0,0,0,340,0,308,323,0,0,0,0,0,0,319,330,0,0,0,205,230,0,0,0,0,
0,0,0,0,0,0,229,326,336,323,340,318,0,0,0,0,0,38,319,330,322,337,327,0,0,0,0,0,0,0,0,209,209,209,218,0,0,340,0,323,0,0,0,0,0,0,0,319,330,0,0,215,0,230,0,0,0,0,
0,0,0,0,0,0,229,336,323,0,340,318,0,36,48,0,0,0,319,330,0,322,337,314,327,0,230,0,0,0,0,209,209,209,209,208,0,340,323,0,0,0,0,0,0,0,0,319,330,0,0,0,0,230,0,0,0,0,
0,0,0,0,0,0,229,323,0,0,0,318,0,0,0,0,0,0,0,332,333,0,322,0,337,327,0,0,0,0,0,0,0,0,0,0,0,340,308,0,0,0,0,0,0,0,0,334,312,0,0,0,0,230,0,0,0,0,
0,0,0,0,0,0,0,214,208,0,0,340,318,0,0,0,0,0,309,0,312,0,0,0,322,337,327,0,0,0,0,0,0,0,0,0,0,340,0,0,0,0,0,0,0,0,0,330,0,330,0,0,215,230,0,0,0,0,
0,0,0,0,0,0,0,0,0,214,208,0,318,0,47,0,0,0,0,0,0,330,0,0,0,322,337,314,327,0,0,0,0,0,0,326,0,0,318,0,0,0,0,0,0,0,319,332,320,330,0,0,207,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,214,214,218,0,0,0,0,0,322,0,330,0,0,0,0,0,0,337,314,314,314,314,314,314,336,0,0,340,318,0,0,0,0,48,0,0,322,312,330,0,201,230,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,229,0,0,0,0,0,0,0,332,333,0,0,0,322,0,0,0,0,0,0,0,0,0,0,0,340,318,0,0,0,0,0,0,0,0,322,330,0,201,230,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,229,0,0,0,0,0,0,322,0,0,0,317,317,317,0,322,0,0,0,0,0,0,323,0,0,0,0,0,0,0,0,0,47,0,0,0,330,0,201,230,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,218,0,0,0,0,0,319,334,339,0,0,0,0,332,0,0,0,0,0,0,0,0,0,0,0,318,0,0,0,0,0,0,0,0,0,330,0,201,230,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,229,0,0,0,0,0,319,0,0,320,335,0,0,0,0,317,317,0,317,0,317,317,0,0,0,318,0,0,0,0,0,0,0,0,0,330,0,201,230,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,229,0,0,0,48,38,319,0,332,317,0,320,320,335,0,311,311,311,311,311,311,0,0,308,0,318,0,48,0,0,0,0,0,0,319,0,0,201,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,229,0,0,0,0,0,0,322,0,0,332,0,0,331,0,311,311,311,311,311,311,0,0,308,323,0,0,0,0,0,0,0,0,319,330,0,217,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,208,0,0,0,0,0,0,322,311,311,332,313,0,0,311,333,311,333,311,311,0,0,323,0,0,37,0,0,0,0,0,0,319,0,201,230,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,38,0,322,0,0,323,322,333,333,333,333,333,289,0,323,0,0,0,0,0,0,0,0,0,334,0,0,201,230,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,214,214,214,218,0,0,0,0,322,323,0,0,311,311,311,289,289,311,323,0,0,0,0,0,0,0,0,0,334,0,0,0,217,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,208,0,0,0,0,0,0,0,289,311,311,311,311,289,0,38,0,0,334,320,320,320,320,320,0,0,0,217,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,289,289,289,289,289,289,0,0,334,320,0,0,0,0,0,0,0,0,217,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,229,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,334,0,0,0,207,214,214,214,214,214,214,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,229,326,0,0,0,0,36,0,0,0,0,0,0,0,0,334,0,207,214,214,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,229,336,318,38,0,0,0,0,0,0,47,0,0,0,334,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,229,335,318,0,0,0,0,0,0,0,0,0,0,319,330,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,220,219,219,220,220,206,0,318,0,0,0,0,0,0,0,0,0,0,319,330,0,0,205,219,220,220,220,220,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,220,202,204,0,0,0,0,0,0,0,335,0,0,0,0,38,0,0,0,0,319,330,0,0,204,0,0,0,0,0,0,220,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,220,219,206,0,0,0,0,0,0,0,326,0,0,340,318,0,0,0,48,0,0,0,0,319,330,0,0,327,0,0,0,0,0,0,0,0,220,219,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,202,0,0,0,326,314,314,314,314,314,314,336,0,0,340,318,0,0,0,0,0,37,0,0,319,330,0,0,337,314,314,314,314,314,314,327,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,219,202,0,0,326,314,336,0,0,0,0,0,0,323,0,0,340,318,0,0,0,0,0,0,0,0,319,330,0,0,322,0,0,0,0,0,0,337,314,327,0,0,0,219,220,0,0,0,0,0,0,
0,0,0,0,0,219,206,0,326,314,314,336,0,0,323,0,0,0,0,0,0,0,0,340,318,0,0,0,0,0,0,0,38,319,330,0,0,0,0,0,0,0,0,322,0,0,337,314,314,327,0,0,0,0,0,0,0,0,
0,0,0,0,202,0,0,326,336,0,0,0,323,0,0,0,0,0,0,0,0,0,0,331,318,0,0,0,0,0,0,0,0,319,312,0,0,0,0,0,0,0,0,0,0,322,0,0,0,337,327,0,0,0,0,0,0,0,
209,209,219,202,0,326,314,336,0,323,0,0,0,0,0,0,0,317,0,317,0,317,313,318,318,0,0,0,0,0,0,0,0,334,0,332,0,0,0,0,0,0,317,0,0,0,0,0,322,0,337,314,327,0,0,0,209,209,
209,229,204,0,326,336,0,0,323,0,0,0,0,0,331,308,311,311,311,311,311,311,0,318,305,0,0,0,0,0,0,0,0,0,335,0,0,309,332,317,331,0,309,332,0,0,0,0,0,322,0,0,337,314,327,201,0,209,
209,229,326,314,336,0,323,0,0,0,0,317,313,308,0,308,311,311,311,311,311,311,0,318,318,0,0,0,0,0,0,0,0,322,332,335,0,309,0,0,319,0,309,0,309,312,0,317,0,0,0,322,0,0,337,327,0,209,
209,229,336,0,323,0,0,0,0,331,308,0,0,308,0,308,311,333,311,333,311,311,0,323,0,0,0,0,0,0,0,0,0,0,322,0,320,339,0,0,319,0,334,339,0,0,0,0,332,0,0,0,0,322,0,337,0,209,
209,229,0,323,0,0,0,0,313,0,308,0,0,308,0,308,333,333,333,333,333,289,323,0,0,0,0,0,0,38,0,0,0,0,48,322,0,313,318,0,319,0,0,0,320,335,0,0,0,312,0,0,0,0,322,201,0,209,
209,229,0,0,0,317,331,308,0,0,308,0,0,308,323,0,311,311,311,289,289,311,0,48,0,0,0,0,0,48,0,0,0,0,0,0,0,323,0,0,0,0,0,332,317,0,335,334,339,0,0,332,317,0,0,201,0,209,
209,229,0,0,340,0,0,308,0,0,308,0,323,0,0,0,289,311,311,311,311,289,0,0,36,0,0,0,0,0,0,36,0,0,0,0,0,0,0,0,0,0,322,0,0,332,0,0,331,0,0,0,0,330,0,201,0,209,
209,229,0,0,340,0,0,308,0,323,0,0,0,0,0,0,289,289,289,289,289,289,0,0,0,0,0,0,37,0,0,0,0,0,0,38,0,0,0,0,0,0,0,322,311,311,332,313,0,0,0,0,0,330,0,201,0,209,
209,229,0,0,340,0,0,308,323,0,0,0,47,0,0,0,0,0,38,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,48,0,0,0,0,0,0,0,0,0,322,0,0,323,234,0,0,0,330,0,201,0,209,
209,229,0,0,340,0,323,0,0,0,0,0,0,0,37,0,0,0,48,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,37,47,0,0,322,323,0,0,0,234,0,330,0,201,0,209,
209,229,0,0,340,318,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,319,330,0,201,0,209,
0,0,210,0,0,303,304,303,304,303,304,303,304,303,304,303,304,303,304,303,304,303,304,303,304,303,304,303,304,303,304,303,304,303,304,303,304,303,304,303,304,303,303,304,303,304,303,304,303,304,303,304,303,0,0,201,0,0,
0,0,0,0,0,0,296,295,296,295,296,295,296,295,296,295,296,295,296,295,296,295,296,295,296,295,296,295,296,295,296,295,296,295,296,295,296,295,296,295,296,295,296,295,296,295,296,295,296,295,295,296,0,0,0,0,0,0,
0,0,0,0,0,0,0,305,306,305,306,305,306,305,306,305,306,305,306,305,306,305,306,305,306,305,306,305,306,305,306,305,306,305,306,305,306,305,306,305,306,305,306,305,306,305,306,305,306,305,305,306,0,0,0,0,0,0











	],

	[0,0,0,0,0,0,0,210,0,201,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,219,0,0,0,0,0,0,0,0,210,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,210,210,0,201,201,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,206,210,0,0,0,0,0,0,0,0,0,210,210,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,210,0,0,0,201,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,210,210,0,0,201,0,0,0,0,0,210,210,0,0,0,0,0,0,0,0,0,347,357,0,201,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,210,210,210,0,0,201,201,0,0,0,0,0,0,0,0,0,0,0,0,347,233,244,0,233,0,201,0,0,201,0,0,0,
0,0,0,0,0,0,0,357,0,264,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,210,210,210,210,0,0,201,201,0,0,264,0,0,0,0,0,0,0,0,37,0,233,0,0,233,0,0,37,0,201,0,0,0,
0,0,0,0,0,0,0,233,0,347,264,0,0,0,0,0,0,0,0,0,0,0,0,0,0,210,210,210,0,0,0,201,201,264,0,264,347,0,0,0,0,0,0,0,0,233,0,0,357,233,0,0,0,0,201,201,0,0,
0,0,0,0,0,0,0,0,0,0,264,0,217,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,201,264,264,0,264,244,347,0,0,0,0,0,357,233,0,244,347,0,0,0,244,0,0,201,0,0,
0,0,0,0,210,0,0,0,0,0,264,207,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,264,0,0,0,264,0,0,244,0,0,233,0,244,244,0,0,0,0,244,244,0,201,201,0,
0,0,0,210,210,0,0,0,0,0,226,0,201,0,0,0,0,0,0,0,0,0,0,0,0,0,208,0,0,0,0,0,0,0,264,264,347,0,0,36,0,0,0,0,0,0,233,245,0,0,0,0,233,244,0,0,201,0,
0,0,0,210,210,0,0,0,0,0,201,0,201,201,0,0,0,0,0,0,0,0,0,0,0,0,0,218,0,0,0,0,0,0,0,264,264,244,244,0,0,0,0,0,0,233,233,357,244,0,0,0,233,264,347,0,201,0,
0,0,210,210,0,0,0,0,0,47,201,201,0,201,201,0,0,210,0,0,0,0,0,0,0,0,0,0,210,0,0,0,0,0,0,0,0,245,244,347,0,0,244,244,244,357,233,0,264,0,0,244,357,347,0,0,0,0,
0,0,210,210,0,0,0,0,0,0,201,201,0,0,201,0,0,0,0,0,0,0,0,0,0,0,210,0,210,47,0,0,0,0,0,0,0,0,0,0,0,0,245,244,244,233,233,0,0,0,0,0,0,0,0,0,0,0,
0,210,210,0,0,233,357,0,264,0,0,201,201,0,0,0,201,0,0,210,0,201,0,0,210,0,210,0,0,0,227,0,0,0,0,0,0,0,0,0,0,0,349,245,245,233,0,0,0,0,0,0,0,0,0,37,0,0,
0,210,210,0,0,357,0,0,264,264,0,201,201,201,0,0,0,0,0,0,0,0,0,0,0,0,210,0,0,0,231,0,0,0,0,0,0,0,0,0,0,0,0,349,0,0,0,0,0,0,0,0,0,0,236,0,0,0,
0,210,0,36,233,233,0,0,0,347,0,0,201,201,0,201,0,0,0,0,0,0,0,0,210,0,0,0,0,36,221,233,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,210,0,347,233,0,0,0,0,264,264,0,0,201,0,201,0,203,202,0,0,0,0,0,210,264,0,0,0,0,347,233,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,233,233,0,0,0,0,0,264,264,0,0,0,201,0,0,0,0,0,0,37,236,227,347,0,0,0,233,244,0,0,0,233,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,347,0,0,0,0,0,
0,0,357,233,0,0,0,0,0,0,0,264,347,0,0,0,36,0,0,264,0,0,0,0,0,264,0,0,244,357,244,233,0,244,233,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,347,0,0,
0,233,233,0,0,0,0,0,0,0,0,0,264,0,264,0,0,0,0,347,0,244,244,0,0,264,0,0,0,227,0,357,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,347,0,0,264,0,0,
0,233,0,0,0,0,0,0,0,0,0,0,0,0,264,264,357,0,244,244,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,254,254,0,0,0,0,0,0,0,0,236,0,0,264,0,0,
347,233,0,0,0,0,0,0,0,0,0,0,0,0,0,264,0,244,244,244,0,0,0,0,0,47,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,47,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,357,244,0,0,0,357,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,47,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,357,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,347,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,264,201,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,264,201,201,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,201,201,201,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,207,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,201,201,201,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,208,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,201,201,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,37,0,0,0,0,0,0,0,201,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,201,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,201,0,0,201,0,0,0,0,0,0,210,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,201,0,0,201,0,0,0,0,0,0,210,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,47,0,0,0,201,0,0,0,0,0,0,210,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,36,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,210,0,0,233,264,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,210,0,0,233,264,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,210,0,0,233,319,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,210,0,210,0,0,233,0,322,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,210,0,0,0,0,233,0,0,322,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,210,0,0,0,0,233,0,0,0,0,0,0,0,0,0,0,0,308,0,0,308,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,210,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,308,0,0,0,0,308,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,309,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,308,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,309,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,308,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,225,0,309,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,308,0,0,0,0,0,217,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,225,0,309,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,210,0,0,308,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,210,0,0,0,0,0,225,0,309,318,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,208,0,0,0,308,264,201,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,210,0,0,0,0,225,0,309,309,318,0,0,0,0,226,254,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,227,0,0,264,201,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,210,0,0,0,225,0,309,309,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,233,0,264,201,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,208,0,0,225,0,309,309,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,210,0,233,0,264,201,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,208,0,0,309,309,0,0,0,0,0,226,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,210,315,233,0,264,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,210,309,309,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,210,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,210,309,0,0,0,0,0,0,0,217,0,0,0,0,0,0,0,0,0,0,0,0,0,0,210,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,210,308,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,210,0,0,0,0,0,0,0,0,0,309,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,210,308,0,0,0,0,0,0,201,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,210,0,0,0,0,0,0,0,0,0,309,0,308,309,0,315,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,206,210,308,0,0,0,0,0,0,201,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,309,0,308,309,319,0,0,201,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,206,210,210,0,0,0,0,0,0,0,201,0,0,0,0,0,0,0,0,0,0,0,0,229,210,0,0,0,0,0,0,0,308,0,0,0,0,322,308,309,319,0,0,201,0,0,0,0,0,0,
0,0,0,0,0,0,0,206,210,210,0,308,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,208,0,0,0,0,0,0,0,308,0,0,0,0,0,0,0,338,0,201,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,210,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,218,0,0,0,0,0,0,308,0,0,0,0,0,0,0,0,0,201,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,308,0,0,0,0,0,0,309,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,335,0,0,0,0,0,0,319,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,210,0,318,0,0,0,0,0,0,0,0,319,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,319,319,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,210,0,318,0,0,0,0,0,0,0,0,319,319,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,339,0,0,0,0,0,319,244,309,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,339,0,0,0,0,0,0,0,0,0,319,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,319,244,0,0,0,0,0,0,0,0,0,0,0,0,0,0,244,0,0,0,0,0,0,0,0,0,0,0,319,319,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,319,244,0,0,0,0,0,0,0,0,0,0,0,244,0,245,244,0,0,0,308,0,0,0,0,0,0,0,0,319,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,245,309,0,0,0,0,0,0,0,0,0,244,244,244,245,0,0,0,0,318,0,0,0,0,0,0,0,0,319,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,244,244,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,319,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,244,0,312,0,0,0,0,0,0,0,0,308,245,308,0,0,0,0,0,0,0,0,319,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,338,320,335,0,0,0,0,245,244,0,0,0,0,0,0,0,0,0,334,0,0,207,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,244,0,0,0,0,244,244,312,316,313,0,0,244,0,244,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,245,0,0,0,309,244,334,322,0,323,320,339,244,244,308,0,0,0,0,0,0,0,0,0,338,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,218,0,0,0,0,0,0,0,0,0,244,0,0,312,316,317,0,0,331,245,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,244,332,313,245,0,0,0,0,0,0,0,0,0,0,338,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,322,245,244,245,0,323,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,210,0,0,0,0,0,0,0,0,0,322,323,0,0,0,334,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,210,210,0,0,0,0,0,0,0,0,0,0,0,0,0,334,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,210,210,0,0,0,0,0,0,0,0,0,0,0,0,334,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,210,308,0,0,0,0,0,0,0,0,0,0,0,0,0,201,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,210,0,0,0,0,0,0,0,0,0,0,0,309,0,0,201,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,210,339,0,0,0,0,0,0,0,0,0,0,0,0,0,201,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,210,0,0,0,0,0,210,0,0,0,0,0,0,0,0,0,0,0,309,0,0,201,0,0,0,0,0,201,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,210,0,210,0,0,0,0,0,0,0,0,308,0,0,0,0,0,0,0,0,309,0,0,0,0,0,0,0,0,201,0,201,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,210,0,0,210,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,201,0,0,201,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,210,0,0,0,0,0,0,0,0,0,318,0,0,0,308,0,0,0,0,0,0,0,0,309,0,0,0,0,0,0,0,0,0,0,0,0,0,201,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,210,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,293,294,293,294,293,294,293,294,293,294,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,201,0,0,0,0,0,0,
0,0,0,0,0,210,0,210,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,303,304,303,304,303,304,303,304,303,304,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,201,201,0,0,0,0,0,
0,0,0,0,210,210,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,308,295,296,295,296,295,296,295,296,295,296,309,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,201,0,0,219,0,0,
0,0,210,0,210,0,0,0,0,0,0,0,0,0,0,0,0,338,320,335,0,0,244,308,318,306,305,306,305,306,305,306,305,0,309,245,244,0,0,0,0,245,244,0,0,0,0,0,0,0,0,0,0,0,0,0,230,0,
0,0,210,0,0,0,0,0,0,0,0,0,0,0,244,0,0,312,316,313,0,0,244,308,0,0,0,0,0,0,0,0,0,0,0,309,244,244,245,244,244,0,244,0,309,0,0,0,0,0,0,0,0,0,0,201,230,0,
0,0,210,0,0,0,0,0,0,0,244,244,245,244,244,0,334,322,0,323,320,339,0,308,0,0,0,0,0,0,0,0,0,0,309,0,0,0,244,244,309,0,0,0,0,245,244,244,0,0,0,0,0,0,0,201,230,0,
0,0,210,0,0,0,0,0,0,0,244,245,0,0,245,0,312,316,317,0,0,331,0,0,0,0,0,0,0,0,0,0,0,0,0,309,0,0,244,245,309,0,0,0,0,0,0,244,309,0,0,0,0,0,0,0,230,0,
0,0,210,0,0,0,0,0,244,0,0,0,0,0,0,0,0,244,244,332,313,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,322,0,0,0,0,0,0,0,0,0,0,0,0,245,244,0,0,0,0,0,230,0,
0,0,210,0,0,244,245,0,244,0,0,0,0,0,0,0,322,244,245,245,244,323,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,245,244,244,0,0,0,0,244,244,309,244,0,0,0,230,0,
0,0,210,0,0,244,244,0,245,0,0,0,0,0,0,0,0,0,0,322,323,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,244,0,0,0,244,244,309,309,244,0,0,0,230,0,
0,0,210,0,0,244,245,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,245,244,0,322,309,309,245,0,0,0,230,0,
0,0,210,0,0,245,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,322,0,0,0,0,230,0,
0,0,210,0,0,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,293,294,293,294,293,294,293,0,0,0,230,0,
0,0,218,0,0,339,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,338,0,0,207,0,0,
0,0,0,218,0,0,335,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,334,0,0,217,0,0,0,
0,0,0,0,208,0,0,335,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,334,0,0,217,0,0,0,0











	],

],
		},

		images: {
			tiles: {normal: "assets/tilemap/caves.png"},
			waterRock1: {normal: "assets/objects/waterRock1.png"},
			waterRock2: {normal: "assets/objects/waterRock2.png"},
			waterRock3: {normal: "assets/objects/waterRock3.png"},
			waterRock4: {normal: "assets/objects/waterRock4.png"},
			rock1: {normal: "assets/objects/rock1.png"},
			rock2: {normal: "assets/objects/rock2.png"},
			rock3: {normal: "assets/objects/rock2Alt.png"},
			rock4: {normal: "assets/objects/rock3.png"},
			waterPlant: {normal: "assets/objects/waterPlant.png"},
			mushroomsBlue: {normal: "assets/objects/mushroomsBlue.png"},
			mushroomRed: {normal: "assets/objects/mushroomRed.png"},
			mushroomPurple: {normal: "assets/objects/mushroomPurple.png"},
			shrub3: {normal: "assets/objects/shrub3.png"},
			frogQueenThrone: {normal: "assets/objects/frogQueenThrone.png"},
			barrel: {normal: "assets/objects/barrel.png"},
			corpseFlower: {normal: "assets/objects/corpseFlower.png"},
			teapotHumidifier: {normal: "assets/objects/teapotHumidifier.png"},
			frogSpawn: {normal: "assets/items/fish/33.png"},
			frogQueen: {normal: "assets/enemies/frogQueen.png"},

	},
	things: [
		{
			x: [888, 2254],
			y: [551, 111],
			image: "rock1",
			name: "rock1",
		},

		{
			x: [2455, 2205, 923, 1319, 2862],
			y: [314, 93, 516, 802, 945],
			image: "rock4",
			name: "rock4",
		},

		{
			x: [2846, 2308, 2040, 1869, 1338, 885, 3245],
			y: [-1407, -1369, -1594, -869, -708, -817, -1337],
			image: "corpseFlower",
			name: "corpseFlower",
		},

		{
			x: [2439, 2352, 2990, 3064, 3026, 3204, 3334, 3344, 3307, 3351, 3096, 2381, 2369, 2408, 1997, 1898, 1718, 1535, 1277, 792, 155, 145, 320, 614, 2889, 2793, 3076, 2851],
			y: [-1499, -1749, -1836, -1497, -1516, -1673, -771, -564, -583, -601, -659, -800, -761, -761, -1064, -1148, -891, -1148, -839, -1064, -1183, -1144, -1441, -1855, -231, -450, -76, -248],
			image: "frogSpawn",
			name: "frogSpawn",
		},
		{
			x: [474, 440, 924, 899,  1194, 2454, 2487, 2911, 2948, 1889, 2209, 2281,  1153, 1118, 2446, 2379, 2890, 1422, 2141, 2175],
			y: [3624, 3657, 3410, 3432,  3331, 3385, 3404, 3649, 3612, 2395, 2228, 2160,  1758, 1725, 1399, 1466, 1824, 1617, 1880, 1847],
			image: "waterRock1",
			name: "waterRock1",
		},
		{x: 2493, y: -1846, image: 'frogQueenThrone', name: ''},

		{
			x: [2028, 1533, 1228,],
			y: [2150, 2055, 3305,],
			z: [2],
			image: "waterRock1",
			name: "waterRock1",
		},

		{
			x: [1638, 1604, 1668, 1646, 1024, 1053, 2256, 2289, 3079, 3111, 3386],
			y: [-1287, -1256, -960, -933, -1024, -1012, -1850, -1868, -1847, -1823, -1494],
			z: [2],
			image: "barrel",
			name: "barrel",
		},

		{
			x: [274, 1087, 1470, 1592, 1939, 2128, 2435, 2619, 2823, 3036, 2898, 3422],
			y: [-1166, -860, -701, -1004, -965, -1534, -1600, -1362, -1571, -1390, -1818, -916],
			z: [0],
			image: "mushroomsBlue",
			name: "mushroomsBlue",
		},

		{
			x: [1899, 1949, 1416, 1131, 1085, 736, 203, 25, 2534, 2583, 3038, 3086, 2628, 2834, 3383, 3432, 3216, 3400, 3446, 2285, 2797, 433],
			y: [-1230, -1196, -1050, -1006, -963, -1127, -1256, -919, -813, -845, -1602, -1579, -1531, -1792, -1389, -1351, -703, -558, -512, -1571, -200, -1877],
			z: [2],
			image: "rock1",
			name: "rock1",
		},

		{
			x: [2145, 2078, 2055, 2123, 2182, 2150, 2125, 2239, 2219, 2269, 2280, 2321, 2359, 2380, 2634, 2668, 2690, 2678, 2659, 2691, 2811, 2787, 2772, 2737, 2716, 2820, 2844, 2865, 2799, 2770, 2592, 2618, 2629, 2444, 2476, 2513, 2478, 2449, 2347, 2370, 2370, 2188, 2188, 2188, 2220, 2220, 2416, 2441, 2400, 2365, 2333, 2347, 2608, 2608, 2608, 2608, 2628, 2628, 2575, 2637, 2678, 2703, 2679, 2648, 2928, 2908, 2884, 2925, 2925, 2904, 2894, 2918, 3102, 3102, 2956, 2978, 3039, 3056, 3074, 3330, 3330, 3243, 3206, 3206, 3238, 3354, 3324, 3324, 3349, 3330, 3476, 3450, 3431, 3456, 3480, 3279, 3255, 3269, 3298, 3121, 3151, 3178, 3171, 3189, 3219, 2852, 2852, 2852, 2820, 2820, 2689, 2709, 2739, 2705, 2676, 2570, 2612, 2594, 2625, 2606, 2500, 2476, 2446, 2466, 2503, 2453, 2246, 2267, 2287, 2002, 2002, 2002, 1971, 1971, 1914, 1942, 1966, 1927, 1899, 1832, 1832, 1832, 1801, 1801, 1690, 1664, 1630, 1662, 1593, 1593, 1593, 1617, 1617, 1764, 1461, 1482, 1497, 1459, 1262, 1288, 1312, 1322, 1302, 1230, 1230, 1385, 1407, 1426, 1441, 1411, 1146, 1173, 1173, 1147, 939, 912, 618, 632, 661, 672, 690, 696, 634, 634, 634, 596, 579, 276, 276, 276, 276, 242, 242, 328, 328, 328, 328, 292, 292, 142, 161, 184, 146, 122, 1749, 1497, 1037, 759, 297, 181, 27, 1395, 1923, 2444, 3088, 3036, 3371, 3451, 2912, 2887, 2871, 2900, 3287, 3266, 3236, 3270, 3292, 2955, 2988, 3021, 2986, 2950, 2806, 2874, 3132, 3162, 3201, 3174, 3144, 2853, 2853, 2853, 2824, 2740, 2706, 721, 494, 524, 561, 540, 512],
			y: [-1723, -1786, -1765, -1700, -1631, -1614, -1646, -1602, -1586, -1606, -1574, -1561, -1490, -1469, -1474, -1493, -1528, -1471, -1589, -1607, -1688, -1669, -1649, -1729, -1703, -1730, -1743, -1764, -1799, -1772, -1656, -1671, -1703, -1659, -1659, -1659, -1678, -1678, -1692, -1672, -1700, -1837, -1807, -1776, -1836, -1800, -1948, -1966, -1934, -1829, -1829, -1802, -1896, -1875, -1853, -1817, -1850, -1875, -1886, -1977, -1977, -1977, -1959, -1959, -1943, -1923, -1902, -1910, -1610, -1590, -1555, -1570, -1572, -1539, -1495, -1483, -1824, -1807, -1802, -1590, -1557, -1120, -1098, -1073, -1089, -1122, -1098, -1078, -1096, -1121, -1249, -1226, -1208, -1184, -1212, -1234, -1211, -678, -658, -712, -697, -718, -850, -826, -811, -676, -707, -742, -742, -712, -885, -869, -848, -832, -861, -783, -822, -807, -802, -776, -869, -852, -823, -805, -834, -861, -789, -819, -793, -1178, -1139, -1106, -1164, -1122, -1361, -1339, -1315, -1315, -1334, -1282, -1258, -1218, -1237, -1267, -1319, -1299, -1275, -1269, -1184, -1160, -1127, -1142, -1179, -1137, -1081, -1060, -1031, -1046, -1002, -1022, -1043, -1020, -1005, -867, -838, -804, -782, -765, -794, -815, -949, -969, -1002, -980, -932, -953, -1195, -1180, -1180, -1155, -1130, -1112, -1401, -1375, -1342, -1339, -1374, -1322, -1297, -1265, -1240, -1255, -1296, -1745, -1716, -1679, -1652, -1680, -1720, -1063, -1085, -1114, -1112, -1084, -947, -976, -964, -1084, -1494, -1218, -977, -1021, -1211, -1549, -1751, -1562, -1431, -704, -319, -344, -313, -280, -217, -192, -171, -151, -173, -139, -113, -101, -80, -104, -274, -99, -58, -58, -58, -34, -34, -460, -482, -521, -498, -560, -683, -1754, -1840, -1840, -1840, -1868, -1868],
			z: [2],
			image: "shrub3",
			name: "shrub3",
		},

		{
			x: [2208, 2318, 2347, 2486, 2522, 3016, 3052, 3170, 2508, 2217, 2185, 2078, 2080, 2747, 2724, 2789, 2932, 1906, 1942, 1716, 1570, 1554, 1606, 1590, 1692, 1346, 1379, 865, 892, 1180, 1202, 701, 723, 740, 697, 713, 653, 286, 272, 141, 42, 18, 1023, 1056, 3049, 3096],
			y: [-1437, -1377, -1361, -1324, -1324, -1328, -1328, -1439, -1306, -1416, -1455, -1564, -1537, -1307, -1287, -1400, -1389, -907, -907, -790, -727, -696, -738, -715, -778, -731, -716, -855, -846, -785, -763, -973, -955, -938, -953, -937, -1030, -1115, -1092, -898, -754, -729, -795, -795, -477, -427],
			image: "shrub3",
			name: "shrub3",
		},

{
		x: [2205, 2390, 2567, 2841, 2992, 3240, 3273, 2752, 2327, 3355, 3326, 3378, 3202, 2463, 2330, 1888, 1922, 1885, 1413, 918, 948, 95, 329, 329, 699, 2798, 365, 387, 2853, 2879, 3031],
		y: [-1616, -1687, -1534, -1733, -1607, -1720, -1686, -1906, -1906, -1216, -842, -809, -777, -749, -840, -1096, -1062, -1295, -887, -1037, -1012, -1150, -1390, -1390, -1679, -1916, -1819, -1841, -192, -162, -41],
		z: [2],
		image: "mushroomPurple",
		name: "mushroomPurple",
		},

		{
			x: [2085, 2127, 2158, 2511, 2680, 2767, 2683, 2564, 2269, 2845, 2890, 2977, 3015, 2966, 3301, 3386, 3247, 3217, 3278, 3450, 3146, 2234, 2269, 2698, 1802, 1845, 1954, 1621, 1257, 1296, 850, 640, 675, 609, 259, 226, 70, 296, 2774, 2826, 3242, 2816, 672],
			y: [-1740, -1765, -1656, -1503, -1557, -1712, -1853, -1677, -1752, -1973, -1942, -1769, -1734, -1560, -1568, -1309, -1182, -1151, -894, -798, -744, -711, -745, -792, -1407, -1367, -1115, -867, -1039, -1067, -1039, -1247, -1212, -1393, -1384, -1349, -1044, -1594, -621, -386, -108, -591, -1823],
			z: [2],
			image: "mushroomRed",
			name: "mushroomRed",
		},


		{
			x: [2221, 2590, 2704, 2743, 2540, 2577, 2878, 3083, 3083, 2079, 2240, 1434, 569, 513],
			y: [3309, 3322, 3392, 3424, 2988, 3014, 1665, 1552, 1600, 1214, 1136, 1982, 1498, 1557],
			z: [2],
			image: "waterRock2",
			name: "waterRock2",
		},

		{
			x: [2840],
			y: [1320],
			image: "waterRock2",
			name: "waterRock2",
		},

		{
			x: [2685, 2854, 2154, 1955, 1516, 1684],
			y: [3603, 3123, 2903, 1898, 1751, 2247],
			image: "waterRock3",
			name: "waterRock3",
		},

		{
			x: [205, 165, 656, 1361, 3135, 3121, 1811, 1689, 1214, 2110, 2246, 2869, 1312, 1185, 2992, 2418, 1373],
			y: [3373, 3397, 3093, 3416, 3289, 3699, 2193, 1892, 1543, 1164, 2188, 1804, 2717, 2972, 3285, 3058, 1767],
			image: "waterRock4",
			name: "waterRock4",
		},

		{
			x: [1312],
			y: [2717],
			z: [2],
			image: "waterRock4",
			name: "waterRock4",
		},

		{
			x: [3003, 3039, 3087, 3086, 3150, 2498, 2526, 2563, 2492, 2526, 2071, 2136, 2682, 2736, 2780, 3241, 3024, 3071, 912, 879, 839, 220, 160, 569, 535, 506, 626, 597, 567, 609, 639, 1140, 1114, 785, 815, 1721, 1615, 1573, 1344, 1381, 2194, 2102, 2059, 633, 633, 467, 1170, 1164, 2346, 2373, 2905, 2063, 2061, 2063, 2140, 2180, 2324, 2324, 2659, 2704, 1488, 1459, 707, 750],
			y: [3628, 3663, 3709, 3650, 3715, 3457, 3492, 3522, 3497, 3534, 3185, 3250, 3048, 3076, 3092, 3341, 3199, 3223, 2975, 3009, 3027, 3335, 3447, 3116, 3149, 3176, 3504, 3528, 3548, 3556, 3532, 3530, 3505, 3476, 3446, 2260, 2284, 2297, 1949, 1978, 1789, 1869, 1869, 1461, 1416, 1556, 1812, 1754, 2096, 2041, 1841, 1302, 1347, 1377, 1112, 1112, 1525, 1568, 1218, 1242, 1678, 1643, 1071, 1014],
			animation: {
				type: "spritesheet",
				frameTime: 600,
				imagesPerRow: 3,
				totalImages: 3,
			},
			crop: {
				x: 0,
				y: 0,
				width: 96,
				height: 140
			},
			image: "waterPlant",
			name: "waterPlant",
			breathingArea: true,
		},

		{
			x: [1773, 3075, 497],
			y: [-1610, -245, -1603],
			animation: {
				type: "spritesheet",
				frameTime: 150,
				imagesPerRow: 3,
				totalImages: 3,
			},
			crop: {
				x: 0,
				y: 0,
				width: 196,
				height: 164
			},
			image: "teapotHumidifier",
			name: "teapotHumidifier",
		},

		{
			x: [3005, 2648, 626, 1167, 1767],
			y: [943, 437, 796, 226, 109],
			image: "mushroomsBlue",
			name: "mushroomsBlue",
		},

		{x: [2928], y: [-1136], image: 'frogQueen', name: 'frogQueen',
		crop: {
      x: 0,
			y: 0,
			width: 150,
		  height: 231
		},
		animation: {
			type: "spritesheet",
			frameTime: 200,
			imagesPerRow: 5,
			totalImages: 14,
		},
		},

	],

	npcs: [

		],
		areaTeleports: [
			{
				// teleport to logging camp (path - north)
				x: 1,
				y: 1,
				width: 354,
				height: 10,
				teleportTo: "caves",
				destinationX: 4311,
				destinationY: -280,
			},


		],

	},


};

// TBD - remove since this is redundant (map.setTile should be used instead)
// sets a tile on the Map (area and main) (specifyable area for if it is used in a setTimeout)
function SetTile (area, layer, col, row, newTileNum) {
	let map = Areas[area].mapData;
	map.layers[layer][row * map.cols + col] = newTileNum;
}
