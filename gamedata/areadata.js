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
					{
						role: "text",
						chooseText: "Show <strong>Fisherman Tobenam</strong> the <b>blueprint</b>.",
						chat: `I haven't seen one of those in a while, heheh. Those fish are pretty rare, heheh, but I'm sure you can find one of them here. Trying fishing a while and you should find one.`,
						buttons: ["Leave"],
						showCloseButton: false,
						forceChoose: true, // forces choose dom
						functions: [function () {
							// close page
							Dom.closePage("textPage");
							// quest progress
							Player.quests.questProgress.troubledWaters2Progress = 5;
							Dom.quests.active();
							Dom.inventory.removeById(74, "item", 1);
						}],
						roleRequirement: function () {
							return Player.quests.questProgress.troubledWaters2Progress === 4;
						},
					},
					{
						role: "text",
						chooseText: "Show <strong>Fisherman Tobenam</strong> the <b>Universal Translator</b>.",
						chat: `Heheheh, you found one. I'll see you around then, heheh.`,
						buttons: ["Leave"],
						showCloseButton: false,
						forceChoose: true, // forces choose dom
						functions: [function () {
							// close page
							Dom.closePage("textPage");
							// quest progress
							Player.quests.questProgress.troubledWaters2Progress = 7;
							Dom.quests.active();
						}],
						roleRequirement: function () {
							return Player.quests.questProgress.troubledWaters2Progress === 6;
						},
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
									x: 5000,
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
			cols: 175,
			rows: 80,
			tsize: 60,
			tilesPerRow: 8,
			solidTiles: [1, 2, 3, 4, 6, 7, 9, 10, 11, 12, 13, 15, 17, 18, 19, 20, 21, 23, 25, 26, 27, 28, 29, 31, 33, 34, 35, 36, 37, 38, 39, 42, 43, 44, 45, 46, 47, 51, 53, 55, 57, 58, 61, 65, 69, 73, 77, 82, 83, 161, 164, 168, 196, 197, 286, 292, 303, 304, 328, 327],
			dayTiles: [11, 27, 34, 42, 7], // windows and lights
			nightTiles: [3, 19, 2, 18, 15],
			pathTiles: [5, 12, 41, 50, 51, 57, 58, 59, 60, 76],
			iceTiles: [27, 35],
			objectTiles: [169], // upper roof tile
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
			layers: [
				[49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,43,43,43,43,43,6,6,41,41,41,6,164,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,41,41,41,41,41,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,164,6,6,6,6,6,41,43,43,43,43,43,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,
49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,43,43,43,43,6,6,6,168,41,41,6,164,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,41,41,41,41,41,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,164,6,6,6,6,6,41,43,43,43,43,43,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,
49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,43,43,43,43,43,6,6,168,41,41,6,164,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,41,41,41,41,41,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,164,6,6,6,6,6,41,43,43,43,43,43,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,
49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,43,43,43,43,6,6,6,41,41,41,6,164,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,41,41,41,41,41,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,164,6,6,6,6,6,41,43,43,43,43,43,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,
49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,43,43,43,43,43,6,6,41,41,41,6,164,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,41,41,41,41,41,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,164,6,6,6,6,6,41,43,43,43,43,43,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,
49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,43,43,43,43,43,6,6,168,41,41,6,164,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,161,49,49,49,49,49,49,49,49,66,49,81,49,41,41,41,41,41,49,66,49,81,49,49,49,49,49,49,49,49,161,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,164,6,6,6,6,6,41,43,43,43,43,43,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,
49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,43,43,43,43,6,6,6,41,41,41,6,164,49,49,49,49,49,49,49,49,49,49,49,49,49,164,161,164,49,49,49,49,49,49,49,67,49,66,49,41,41,41,41,41,49,67,49,66,49,49,49,49,49,49,49,164,161,164,49,49,49,49,49,49,49,49,49,49,49,49,49,164,6,6,6,6,6,41,43,43,43,43,43,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,
49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,43,43,43,43,6,6,6,168,41,41,6,164,49,49,49,49,49,49,49,49,49,49,49,164,161,161,161,164,49,49,49,49,49,49,49,49,49,49,41,41,41,41,41,49,49,49,49,49,49,49,49,49,49,164,161,161,161,164,49,49,49,49,49,49,49,49,49,49,49,164,6,6,6,6,6,41,43,43,43,43,43,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,
49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,43,43,43,43,43,6,6,41,41,41,6,164,49,49,49,49,49,49,49,49,49,164,161,161,161,161,161,164,164,49,49,49,49,49,49,49,49,41,41,41,41,41,49,49,49,49,49,49,49,49,49,164,161,161,161,161,161,164,164,49,49,49,49,49,49,49,49,164,6,6,6,6,6,41,43,43,43,43,43,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,
49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,43,43,43,43,6,6,6,41,41,41,6,164,49,49,49,49,49,49,164,164,164,161,161,161,161,161,164,164,164,49,49,49,49,49,49,49,41,41,41,41,41,49,49,49,49,49,49,49,164,164,164,161,161,161,161,161,164,164,164,49,49,49,49,49,49,164,6,6,6,6,6,41,43,43,43,43,43,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,
49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,43,43,43,43,43,0,6,168,41,41,6,164,49,49,49,49,161,164,164,164,161,161,161,161,161,164,164,164,161,49,49,49,49,49,49,41,41,41,41,41,49,49,49,49,49,49,161,164,164,164,161,161,161,161,161,164,164,164,161,49,49,49,49,164,6,43,43,6,6,43,43,43,43,43,43,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,161,49,49,49,49,49,49,49,49,49,49,49,49,49,49,
49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,43,43,43,43,43,168,168,168,168,168,168,168,168,49,168,161,164,164,161,161,161,161,161,161,161,164,164,161,168,168,168,6,168,168,168,168,168,0,0,168,168,6,168,168,168,161,164,164,161,161,161,161,161,161,161,164,164,161,168,168,168,164,6,6,6,6,6,41,43,43,43,43,43,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,36,36,161,49,49,49,49,49,49,49,49,49,49,49,49,49,
49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,43,43,43,43,164,6,6,6,6,6,6,6,6,6,82,161,161,161,43,43,43,43,43,161,161,161,82,6,6,6,6,6,0,43,43,43,43,43,0,6,6,6,6,6,82,161,161,161,43,43,43,43,43,161,161,161,82,6,6,6,6,6,6,6,6,6,6,43,43,43,43,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,36,36,36,49,49,49,49,49,49,49,49,49,49,49,49,49,
49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,43,43,164,6,6,6,6,6,6,6,6,6,6,82,82,161,161,161,161,161,161,43,43,161,82,82,6,6,6,6,0,43,43,43,43,43,43,43,0,6,6,6,6,82,82,161,43,43,43,43,43,43,43,161,82,82,6,6,6,6,6,6,6,6,6,6,6,43,43,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,165,36,49,36,36,49,49,49,49,49,49,49,49,49,49,49,49,
49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,164,6,6,6,6,6,161,161,161,161,161,6,82,82,43,43,43,43,43,43,43,43,43,82,82,6,49,49,49,43,43,43,43,43,43,43,43,43,49,49,161,6,82,82,43,43,43,43,43,43,43,43,43,82,82,6,6,161,161,161,161,171,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,165,36,49,49,49,36,36,49,49,49,49,49,49,49,49,49,49,49,
49,49,49,49,49,49,49,49,49,49,49,161,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,164,6,6,6,6,6,43,43,43,43,43,43,164,82,82,43,43,0,0,43,0,0,43,43,82,82,36,43,43,43,43,43,43,313,314,315,43,43,43,43,43,43,6,82,82,43,43,0,0,43,0,0,43,43,82,82,36,43,43,43,43,43,43,6,6,6,6,6,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,164,161,164,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,82,36,36,36,36,36,82,49,49,49,49,49,49,49,49,49,49,49,
49,49,49,49,49,49,49,49,49,49,36,36,161,49,49,49,49,49,49,49,49,49,49,49,49,49,49,164,6,6,6,6,6,43,43,43,35,35,35,35,36,36,82,43,43,0,0,43,0,0,43,43,82,36,36,35,35,35,35,35,35,321,322,323,35,35,35,35,35,35,36,36,82,43,43,0,0,43,0,0,43,43,82,36,36,35,35,35,35,43,43,164,6,6,6,6,6,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,161,49,161,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,161,36,161,49,49,49,49,49,49,49,49,49,49,49,49,82,65,65,65,65,65,82,49,49,49,49,49,49,49,49,49,49,49,
49,49,49,49,49,49,49,49,49,49,36,36,36,49,49,49,49,49,49,49,49,49,49,49,49,49,164,6,6,6,6,6,43,43,43,43,43,43,43,43,161,36,36,43,43,43,43,43,43,43,43,43,82,36,161,43,11,43,43,11,43,329,330,331,43,11,43,43,11,43,161,36,36,43,43,43,43,43,43,43,43,43,82,36,161,43,43,43,43,43,43,43,164,6,6,6,6,6,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,168,168,168,168,168,168,168,168,36,36,49,36,36,36,49,36,36,36,36,36,36,36,36,36,36,36,82,65,43,27,82,57,82,36,36,36,36,36,36,36,36,36,36,36,
49,49,49,49,49,49,49,49,49,165,36,49,36,36,49,49,49,49,49,49,49,49,49,49,49,164,6,6,6,6,6,43,43,43,43,43,43,43,43,43,52,161,161,36,36,36,36,36,36,36,36,36,36,161,52,43,43,43,43,43,43,337,338,339,43,43,43,43,43,43,52,161,161,36,36,36,36,36,36,36,36,36,36,161,52,43,43,43,43,43,43,43,43,164,6,6,6,6,6,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,164,6,43,43,43,6,6,6,6,49,49,165,36,49,36,36,49,6,6,6,6,6,6,6,6,6,6,82,65,43,27,82,57,82,6,6,6,6,6,6,6,6,6,6,49,
49,49,49,49,49,49,49,49,165,36,49,49,49,36,36,49,49,49,49,49,49,49,49,49,164,6,6,6,6,6,43,43,43,43,43,43,74,74,74,49,82,52,161,161,161,161,161,161,161,161,161,161,161,52,82,49,74,74,74,41,41,41,41,41,41,41,49,184,74,184,82,52,161,161,161,161,161,161,161,161,161,161,161,52,82,43,43,43,43,43,43,43,43,43,164,6,6,6,6,6,49,49,49,49,49,49,49,49,49,82,43,49,49,49,49,49,43,82,49,49,49,49,49,49,49,49,49,49,49,164,6,43,43,43,6,6,6,6,6,6,165,36,49,49,49,36,36,49,49,49,49,49,49,49,49,49,49,82,65,65,65,65,57,82,49,49,49,49,49,49,49,49,49,49,49,
49,49,49,49,49,49,49,49,36,36,36,36,36,36,36,49,49,49,49,49,49,49,49,164,6,6,6,6,6,43,43,43,43,43,43,49,49,41,49,49,83,82,52,43,43,43,43,43,43,43,43,43,52,82,83,49,49,41,41,41,41,41,41,41,41,41,41,184,184,184,83,82,52,43,43,43,43,43,43,43,43,43,52,82,83,49,49,49,74,187,43,43,43,43,43,164,6,6,6,6,6,49,49,49,49,49,49,49,49,57,57,269,43,43,43,269,58,58,49,49,49,49,49,49,49,49,49,49,164,6,43,43,6,6,43,161,161,161,161,6,82,36,36,36,36,36,82,49,49,49,49,49,49,49,49,49,62,273,65,65,65,65,65,82,62,49,49,49,49,49,49,49,49,49,49,
49,49,49,49,49,49,49,49,57,58,43,43,43,57,58,49,49,49,49,49,49,49,49,6,41,6,6,6,43,43,43,43,43,43,49,49,49,49,49,49,49,83,82,43,27,27,43,43,43,43,43,43,82,83,49,49,41,41,41,41,41,41,41,41,41,41,41,41,184,184,184,184,82,43,27,27,43,43,43,43,43,43,82,83,83,49,49,49,49,49,49,43,43,43,43,43,164,6,6,6,6,6,49,49,49,49,49,49,49,57,57,49,49,49,49,269,58,58,49,49,49,49,49,49,49,49,49,164,6,6,6,6,6,41,43,43,43,43,43,49,82,65,65,65,65,65,82,49,49,49,161,161,161,161,161,161,62,62,273,58,43,57,273,62,62,161,161,161,161,49,49,49,49,49,43,
168,168,168,168,168,168,168,168,57,58,43,27,82,57,58,168,168,168,168,168,168,168,6,168,168,6,6,43,43,43,43,43,43,49,49,49,49,49,49,49,49,49,82,43,27,27,43,18,43,17,43,43,82,49,49,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,184,184,82,43,27,27,43,18,43,1,43,43,82,83,49,49,49,49,49,49,49,49,43,43,43,43,43,164,6,6,6,6,6,168,168,168,168,168,168,57,57,49,168,168,168,269,58,58,168,168,168,168,168,168,168,168,168,6,6,6,6,6,43,168,43,43,43,43,43,43,82,65,65,65,65,65,82,49,161,43,161,65,65,65,49,36,36,62,165,62,62,62,62,62,36,36,43,49,49,49,161,43,161,327,43,
6,6,6,6,6,6,6,6,57,58,43,27,82,57,58,6,6,6,6,6,6,6,6,6,6,6,43,43,43,43,43,43,49,49,49,49,49,49,49,49,81,49,83,43,43,43,43,26,43,43,43,43,83,49,49,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,184,184,83,43,43,43,43,26,43,43,43,43,83,49,49,49,49,49,49,49,49,49,49,43,43,43,43,43,164,6,6,6,6,6,6,6,6,6,6,57,57,168,6,6,6,269,58,58,6,6,6,6,6,6,6,6,6,6,6,43,6,43,6,6,43,35,35,35,35,35,82,65,65,27,65,65,82,49,49,82,65,65,65,65,65,161,36,36,161,161,161,161,161,36,36,161,65,49,49,49,49,82,65,43,43,
6,6,6,6,6,6,6,6,57,58,43,27,57,57,58,6,6,6,6,6,6,6,6,6,6,43,43,43,43,43,43,49,49,49,49,49,49,49,49,49,49,49,49,0,195,41,41,41,41,41,0,0,49,81,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,184,184,184,184,184,41,41,41,41,41,49,49,49,49,49,49,49,49,49,49,49,49,49,49,43,43,43,43,43,164,6,6,6,6,6,6,6,6,6,57,57,269,51,51,51,269,58,58,6,6,6,6,6,6,6,6,6,6,43,6,43,6,6,6,43,11,43,43,43,43,82,65,65,65,65,65,82,65,49,82,65,65,65,65,65,65,65,161,161,161,161,161,161,82,161,65,43,49,49,49,49,82,65,49,43,
161,161,161,161,161,36,161,62,273,58,43,43,43,57,58,62,161,36,161,161,161,161,161,161,161,43,43,43,43,43,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,41,41,41,41,41,49,49,49,41,41,41,41,41,41,41,41,184,184,184,41,41,41,41,41,41,41,41,184,184,184,41,41,41,41,41,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,43,43,43,43,43,161,161,161,161,161,161,36,161,62,273,57,269,51,51,51,269,58,58,62,161,36,161,161,161,161,161,161,161,161,161,161,43,43,43,43,43,43,43,43,62,82,65,65,65,65,65,82,62,49,82,65,65,65,65,65,65,65,82,44,44,44,44,44,82,44,65,43,49,49,49,49,82,65,65,43,
43,43,43,43,43,43,36,62,62,273,58,43,57,273,62,62,36,43,43,43,43,43,43,43,43,43,43,43,43,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,41,41,41,41,41,49,41,41,41,41,41,41,41,41,41,41,184,184,184,41,41,41,41,41,41,41,41,41,41,184,41,41,41,41,41,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,43,43,43,43,43,43,43,43,43,43,43,36,62,62,273,58,43,43,43,57,273,62,62,36,43,43,43,43,43,43,43,43,43,43,43,43,43,43,74,74,74,74,74,164,161,161,161,161,161,161,161,164,49,82,65,28,28,65,28,28,65,82,49,49,49,49,49,82,49,28,28,49,28,28,49,82,65,65,74,
43,43,43,43,43,43,36,36,62,165,62,62,62,62,62,36,36,43,43,43,43,43,43,43,43,43,43,43,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,184,184,184,184,184,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,43,43,43,43,43,43,43,43,43,161,36,36,62,165,62,62,62,62,62,62,62,36,36,161,43,43,43,43,43,43,43,43,43,43,43,43,49,49,49,49,49,49,0,161,161,161,161,161,161,161,0,49,82,65,28,28,65,28,28,65,82,49,53,69,61,49,82,49,28,28,49,28,28,49,82,65,65,49,
35,35,35,35,35,35,161,36,36,161,161,161,161,161,36,36,161,35,35,35,35,35,35,35,43,43,43,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,184,184,184,184,184,184,184,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,43,43,35,35,35,35,35,35,35,161,36,36,161,161,161,161,161,161,161,36,36,161,35,35,35,35,35,35,35,35,35,35,43,43,49,49,49,49,49,49,49,0,52,44,44,44,44,44,52,49,49,82,65,28,28,65,28,28,65,82,49,37,21,45,49,82,49,28,28,49,28,28,49,82,65,65,49,
11,43,43,43,43,43,52,161,161,161,161,161,161,161,161,161,52,43,43,43,43,43,43,43,11,43,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,184,184,184,184,184,184,184,184,184,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,43,11,43,43,43,43,43,43,52,161,161,161,161,161,161,161,161,161,161,161,52,43,43,43,43,11,43,43,43,43,11,43,49,49,49,49,66,81,49,49,0,82,65,28,28,28,65,82,49,49,82,65,28,28,65,28,28,65,82,49,13,21,29,49,82,49,28,28,49,28,28,49,82,65,65,49,
43,43,43,43,43,43,82,52,43,43,43,43,43,43,43,52,82,43,43,43,43,43,43,43,43,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,184,184,184,41,41,41,41,41,184,184,184,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,43,43,43,43,43,43,43,82,52,43,43,43,57,43,58,43,43,43,52,82,43,43,43,43,43,43,43,43,43,43,49,49,49,49,49,75,66,49,49,0,82,65,28,28,28,65,82,49,49,82,65,49,49,65,49,49,65,82,49,13,77,29,49,82,49,73,73,49,73,73,49,82,65,65,49,
195,41,41,41,49,187,82,82,43,27,43,43,43,43,43,82,82,195,74,74,74,74,74,74,187,49,49,49,49,49,49,49,49,49,49,49,49,49,49,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,184,184,184,184,41,41,41,41,41,41,41,184,184,184,184,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,49,49,49,49,49,49,49,49,49,49,49,49,49,49,74,74,74,74,74,74,74,82,82,43,43,43,57,27,58,43,43,43,82,82,74,74,74,74,74,74,74,74,74,187,49,49,67,66,49,49,49,49,49,49,82,65,73,73,73,65,82,49,49,82,65,65,65,65,65,65,65,82,49,13,21,29,49,82,49,49,49,49,49,49,49,82,65,184,49,
41,41,41,41,41,49,83,82,43,27,43,2,43,20,43,82,83,49,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,49,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,49,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,83,82,25,2,43,57,27,58,43,18,33,82,83,41,41,41,41,41,41,41,41,41,41,49,49,49,49,49,49,49,49,49,49,83,49,49,49,49,49,83,49,49,83,49,49,49,49,49,49,49,83,41,41,41,41,41,83,49,49,49,49,49,49,49,83,49,49,49,
41,41,41,41,41,41,49,83,43,43,43,10,43,43,43,83,49,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,49,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,83,43,10,43,57,43,58,43,26,43,83,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,41,41,41,41,41,49,49,49,49,49,49,49,49,49,49,49,49,
41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,49,49,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,49,41,41,49,49,49,49,49,49,41,41,41,41,41,41,49,49,49,49,49,49,66,75,49,81,66,49,67,49,49,41,41,41,41,41,49,49,49,49,81,66,49,49,49,49,49,49,
41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,184,184,184,176,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,49,184,184,184,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,49,49,49,49,41,41,41,41,41,49,49,49,49,49,66,49,49,49,49,49,41,41,41,41,41,49,49,49,49,49,66,49,49,49,49,49,49,
41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,184,184,184,184,41,41,41,41,41,41,41,41,41,4,4,4,4,4,4,4,4,4,41,41,41,41,41,41,41,41,41,184,184,184,184,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,49,49,41,41,41,41,41,41,49,49,49,41,41,41,41,41,49,49,49,49,41,41,41,41,41,41,41,49,41,41,41,41,41,41,41,41,41,49,49,49,49,49,49,49,49,49,49,49,49,
41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,184,184,176,184,41,41,41,41,41,41,41,41,41,4,12,12,12,12,12,12,12,12,12,4,41,41,41,41,41,41,41,41,41,184,184,184,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,49,49,49,49,49,49,49,49,41,41,41,49,49,49,49,49,49,49,41,41,41,49,49,49,49,41,41,41,41,49,81,49,49,49,49,49,49,49,49,49,49,
41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,184,184,176,184,184,41,41,41,41,41,41,41,41,4,12,51,51,51,51,51,51,51,51,51,12,4,41,41,41,41,41,41,41,41,184,184,184,184,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,49,49,49,49,49,49,49,49,41,41,41,41,41,49,49,49,49,49,49,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,49,49,49,49,49,49,49,49,49,49,49,49,
168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,41,41,41,41,41,41,41,41,184,184,176,176,184,49,41,41,41,41,41,41,41,4,12,51,12,6,51,51,51,6,6,6,12,51,12,4,41,41,41,41,41,41,41,176,184,176,184,184,41,41,41,41,41,41,41,41,41,41,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,49,49,49,41,41,41,41,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,41,49,49,49,49,49,49,49,49,49,49,49,49,
6,6,6,6,6,6,6,6,0,0,0,0,0,0,0,0,0,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,164,41,41,41,41,41,41,41,184,176,176,176,184,49,41,41,41,41,41,41,4,12,12,12,12,6,6,6,6,6,6,6,51,12,51,12,4,41,41,41,41,41,41,41,184,176,176,184,41,41,41,41,41,41,41,41,41,41,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,41,41,41,6,164,49,49,49,49,49,41,41,41,41,41,41,41,49,49,49,49,49,49,49,49,49,41,41,41,49,41,41,41,49,49,49,67,66,49,49,49,49,67,49,49,
6,6,6,6,6,6,51,51,51,51,51,0,0,0,0,0,0,0,0,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,164,41,41,41,41,41,41,41,184,176,176,176,184,41,41,41,41,41,41,41,12,51,12,12,328,328,328,328,328,328,328,328,328,51,12,51,12,41,41,41,41,41,41,41,184,176,176,184,184,41,41,41,41,41,41,41,41,41,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,41,41,41,6,164,49,49,49,49,49,49,49,49,66,49,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,49,49,49,49,49,66,49,49,75,49,49,49,49,49,
161,161,161,161,161,0,51,51,0,51,51,0,0,0,0,0,0,0,51,0,161,161,161,161,161,161,161,161,161,161,161,161,161,161,164,41,41,41,41,41,41,184,184,176,176,176,184,41,41,41,41,41,41,41,51,6,12,328,328,328,328,328,328,328,328,328,328,328,51,12,51,41,41,41,41,41,41,41,184,176,176,176,184,41,41,41,41,41,41,41,41,41,161,161,161,161,161,161,161,161,161,161,161,161,161,161,0,51,51,0,51,51,0,0,0,0,0,0,0,51,0,161,161,161,161,161,161,161,161,161,41,6,41,41,41,6,164,49,49,49,49,49,49,66,75,49,49,49,49,49,49,49,49,49,49,49,49,66,75,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,
43,43,43,43,43,0,36,51,51,51,51,51,51,51,51,51,51,51,36,0,43,43,43,43,43,43,43,43,43,43,43,43,43,43,164,41,41,41,41,41,41,184,176,176,176,176,184,41,41,41,41,41,41,41,6,6,328,328,328,328,328,328,328,328,328,328,328,328,328,51,12,41,41,41,41,41,41,41,184,176,176,176,184,184,41,41,41,41,41,41,41,41,43,43,43,43,43,43,43,43,43,43,43,43,43,43,0,36,51,51,51,51,51,51,51,51,51,51,6,36,0,43,43,43,43,43,43,43,43,43,41,41,6,41,41,41,6,164,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,66,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,
43,43,43,43,43,161,36,36,62,165,62,62,62,62,62,62,62,36,36,161,43,43,43,43,43,43,43,43,43,43,43,43,43,43,41,41,41,41,41,41,41,184,176,176,176,176,184,41,41,41,41,41,41,41,6,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,51,41,41,41,41,41,41,41,184,176,176,176,176,184,41,41,41,41,41,41,41,41,43,43,43,43,43,43,43,43,43,43,43,43,43,43,161,36,36,62,165,62,62,62,62,62,62,62,36,36,161,43,43,43,43,43,43,43,43,43,168,168,168,6,168,41,41,6,164,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,
35,35,35,35,35,35,161,36,36,161,161,161,161,161,161,161,36,36,161,35,35,35,35,35,35,35,35,35,35,35,35,35,35,43,41,41,41,41,41,41,41,184,176,176,176,176,184,41,41,41,41,41,41,41,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,41,41,41,41,41,41,41,184,176,176,176,176,184,41,41,41,41,41,41,41,41,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,161,36,36,161,161,161,161,161,161,161,36,36,161,35,35,35,35,35,35,35,35,35,35,6,6,6,6,6,41,41,41,6,164,49,49,49,49,67,66,49,49,49,49,49,49,81,66,49,49,49,49,66,81,49,49,49,81,66,49,49,49,49,49,49,49,75,49,49,
43,11,43,43,43,43,52,161,161,161,161,161,161,161,161,161,161,161,52,43,43,11,43,43,43,43,43,11,43,43,43,43,43,11,41,41,41,41,41,41,41,184,184,176,176,176,184,41,41,41,41,41,41,41,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,41,41,41,41,41,41,41,184,176,176,176,176,184,41,41,41,41,41,41,41,41,11,43,43,43,43,43,11,43,43,43,43,43,11,43,43,52,161,161,161,161,161,161,161,161,161,161,161,52,43,43,43,11,43,43,43,43,43,11,6,6,6,6,6,6,168,41,41,6,164,49,49,49,66,49,49,49,49,49,49,49,66,49,49,49,49,49,49,66,49,49,49,66,49,49,49,49,81,49,49,49,49,49,49,
43,43,43,43,43,43,82,52,43,43,43,43,43,43,43,43,43,52,82,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,41,41,41,41,41,41,41,184,184,176,176,176,184,184,41,41,41,41,41,41,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,41,41,41,41,41,41,184,184,176,176,176,176,184,41,41,41,41,41,41,41,41,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,82,52,43,43,43,43,43,43,43,43,43,52,82,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,6,6,168,41,41,6,164,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,
195,74,74,74,74,74,82,82,43,43,43,43,43,43,43,43,43,82,82,74,74,74,74,74,74,74,74,74,74,74,74,74,74,187,41,41,41,41,41,41,41,41,184,176,176,176,176,184,41,41,41,41,41,41,41,328,328,328,328,328,328,328,328,328,328,328,328,328,328,328,41,41,41,41,41,41,41,184,176,176,176,176,184,41,41,41,41,41,41,41,41,41,195,74,74,74,74,74,74,74,74,74,74,74,74,74,74,82,82,43,43,43,43,43,43,43,43,43,82,82,74,195,74,74,74,74,74,74,74,74,74,43,43,43,43,6,6,6,41,41,41,6,164,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,
41,41,41,41,41,49,83,82,43,43,43,43,43,43,43,43,43,82,83,49,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,184,184,176,176,176,184,41,41,41,41,41,41,41,41,328,328,328,328,328,328,328,328,328,328,328,328,328,41,41,41,41,41,41,41,41,184,176,176,176,184,184,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,49,83,82,43,43,43,43,42,43,43,43,43,82,83,49,41,41,41,41,41,41,41,41,41,41,41,43,43,43,43,43,6,6,41,41,41,6,164,49,49,49,49,67,49,49,49,49,49,49,49,49,75,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,
41,41,41,41,41,41,49,83,43,43,43,43,43,43,43,43,43,83,49,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,184,184,176,176,184,41,41,41,41,41,41,41,41,41,328,328,328,328,328,328,328,328,328,328,328,41,41,41,41,41,41,41,41,41,184,176,176,184,184,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,49,83,43,43,43,43,43,43,43,43,43,83,49,41,41,41,41,41,41,41,41,41,41,41,41,41,43,43,43,43,43,6,6,168,41,41,6,164,49,49,49,49,49,49,66,49,49,49,49,49,49,49,49,66,49,49,49,49,67,49,49,49,49,49,49,49,49,49,
41,41,41,41,41,41,41,41,0,0,0,0,0,0,0,0,0,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,184,176,176,184,184,41,41,41,41,41,41,41,41,41,328,328,328,328,328,328,328,328,328,41,41,41,41,41,41,41,41,41,184,184,176,184,184,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,0,0,0,0,0,0,0,0,0,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,43,43,43,43,6,6,6,41,41,41,6,164,49,49,49,49,49,81,66,49,49,49,49,49,49,66,81,49,49,49,49,49,49,49,49,49,49,49,49,49,49,
41,41,41,41,41,0,0,41,41,41,41,41,41,41,41,41,41,41,0,0,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,184,184,184,184,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,184,184,184,184,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,0,0,41,41,41,41,41,41,41,41,41,41,41,0,0,41,41,41,41,41,41,41,41,41,41,41,41,41,41,43,43,43,43,6,6,6,168,41,41,6,164,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,75,49,49,
41,41,41,41,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,184,184,184,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,184,184,184,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,43,43,43,43,43,6,6,41,41,41,6,164,49,49,49,49,49,49,49,49,49,75,66,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,
41,41,41,41,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,161,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,161,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,43,43,43,43,6,6,6,41,41,41,6,164,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,
41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,161,36,161,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,161,36,161,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,43,6,6,168,41,41,6,164,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,
168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,164,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,36,36,36,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,36,36,36,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,
6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,41,41,41,6,164,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,165,36,49,36,36,41,41,41,41,41,41,41,41,41,41,41,41,41,165,36,49,36,36,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,164,6,43,43,43,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,41,41,41,6,164,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,165,36,49,49,49,36,36,41,41,41,41,41,41,41,41,41,41,41,165,36,49,49,49,36,36,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,164,6,43,43,43,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,41,6,41,41,41,6,164,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,36,36,36,36,36,36,36,41,41,41,41,41,41,41,41,41,41,41,36,36,36,36,36,36,36,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,164,6,43,43,6,6,43,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,
43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,41,41,6,41,41,41,6,164,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,57,58,43,43,43,57,58,41,41,41,41,41,41,41,41,41,41,41,57,58,43,43,43,57,58,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,164,6,6,6,6,6,41,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,
43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,168,168,168,6,168,168,168,6,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,57,58,43,27,82,57,58,168,168,168,168,168,168,168,168,168,168,168,57,58,43,27,82,57,58,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,6,6,6,6,6,43,168,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,
35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,43,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,57,58,43,27,82,57,58,168,168,168,6,6,6,6,6,168,168,168,57,58,43,27,82,57,58,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,43,6,43,6,6,43,43,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,
11,43,43,43,43,43,11,43,43,43,43,43,11,43,43,43,43,43,11,43,43,43,43,43,11,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,57,58,43,27,57,57,58,6,6,0,43,43,43,43,43,0,6,6,57,58,43,27,57,57,58,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,43,6,43,6,6,6,43,11,43,43,43,43,43,11,43,43,43,43,43,11,43,43,43,43,43,11,43,43,43,43,43,11,43,43,43,43,11,43,43,43,43,11,43,43,43,43,43,11,43,43,43,43,43,43,11,43,43,43,43,43,11,43,43,43,43,43,11,43,43,43,43,43,11,43,43,43,43,43,11,43,43,43,
43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,161,43,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,161,62,273,58,43,43,43,57,58,6,161,43,43,43,43,43,43,43,161,6,273,58,43,43,43,57,58,62,161,161,161,161,161,161,161,161,161,161,161,161,161,161,43,43,43,43,161,161,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,
195,195,195,195,195,195,195,195,195,195,195,195,74,74,74,74,74,74,74,74,74,74,74,74,74,49,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,6,6,6,0,43,49,43,43,43,43,43,43,43,43,43,49,43,43,6,6,6,0,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,49,195,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,
49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,6,43,0,43,43,43,43,43,313,314,315,43,43,43,43,43,43,43,6,43,0,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,
49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,43,43,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,43,43,43,35,6,35,43,43,35,35,35,35,321,322,323,35,35,35,35,43,43,35,6,35,43,43,43,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,43,43,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,
49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,43,11,43,43,43,43,43,11,43,43,43,43,43,11,43,43,43,43,43,11,43,43,43,43,6,43,43,43,43,43,11,43,329,330,331,43,11,43,43,43,43,43,6,43,43,43,43,43,43,43,43,43,43,11,43,43,43,43,43,11,43,43,43,43,43,11,43,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,
49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,6,43,43,43,43,43,43,43,337,338,339,43,43,43,43,43,43,43,6,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,
49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,195,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,43,43,74,6,74,43,43,49,49,49,41,41,41,41,41,49,49,49,43,43,74,6,74,43,43,49,195,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,187,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,
49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,43,49,6,49,43,49,49,49,49,41,41,41,41,41,49,49,49,49,43,49,6,49,43,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,
49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,66,49,6,49,49,49,49,49,49,41,41,41,41,41,49,49,49,49,49,49,6,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,
49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,66,66,6,81,49,49,49,49,49,41,41,41,41,41,49,49,49,49,49,66,6,81,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,
49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,67,6,66,49,49,49,49,49,41,41,41,41,41,49,49,49,49,49,67,6,66,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,
49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,6,49,49,49,49,49,49,41,41,41,41,41,49,49,49,49,49,49,6,41,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,
49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,6,49,49,49,49,49,49,41,41,41,41,41,49,49,49,49,49,49,6,41,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,
49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,6,49,49,49,49,49,49,41,41,41,41,41,49,49,49,49,49,49,6,41,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,
49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,6,49,49,49,49,49,49,41,41,41,41,41,49,49,49,49,49,49,6,41,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,
49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,6,49,49,49,49,49,49,41,41,41,41,41,49,49,49,49,49,49,6,41,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49],




			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,167,0,0,0,0,43,43,171,6,6,6,163,0,171,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,325,0,0,0,324,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,172,169,165,6,6,6,6,43,43,0,0,0,166,166,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,167,0,0,0,43,43,43,171,6,6,6,163,0,171,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,325,0,0,0,324,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,172,169,165,6,6,6,6,43,43,0,0,0,166,166,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,167,0,0,0,0,0,43,171,6,6,6,163,0,171,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,325,0,0,0,324,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,172,169,165,6,6,6,6,43,43,0,0,0,166,166,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,167,0,0,0,0,43,43,171,6,6,6,163,0,171,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,325,0,0,0,324,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,172,169,165,6,6,6,6,43,43,0,0,0,166,166,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,167,0,0,0,0,43,43,171,6,6,6,163,0,171,0,0,0,0,0,0,0,0,0,0,0,0,0,0,172,164,171,0,0,0,0,0,0,0,0,0,0,0,325,0,0,0,324,0,0,0,0,0,0,0,0,0,0,0,172,164,171,0,0,0,0,0,0,0,0,0,0,0,0,0,0,172,169,165,6,6,6,6,43,43,0,0,0,166,166,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,167,0,0,0,0,0,43,171,6,6,6,163,0,171,0,0,0,0,0,0,0,0,0,0,0,0,172,164,163,164,171,0,0,0,0,0,0,0,0,0,0,325,0,0,0,324,0,0,0,0,0,0,0,0,0,0,172,164,163,164,171,0,0,0,0,0,0,0,0,0,0,0,0,172,169,165,6,6,6,6,43,43,0,0,0,166,166,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,167,0,0,0,0,43,43,171,6,6,6,163,0,171,0,0,0,0,0,0,0,0,0,0,172,164,0,0,0,164,171,0,0,0,0,0,0,0,0,0,325,0,0,0,324,0,0,0,0,0,0,0,0,0,172,164,0,0,0,164,171,0,0,0,0,0,0,0,0,0,0,172,169,165,6,6,6,6,43,43,0,0,0,166,166,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,167,0,0,0,0,43,43,171,6,6,6,163,0,171,0,0,0,0,0,0,0,0,172,164,0,165,0,163,0,164,171,0,0,0,0,0,0,0,0,325,0,0,0,324,0,0,0,0,0,0,0,0,172,164,0,165,0,163,0,164,171,0,0,0,0,0,0,0,0,172,169,165,6,6,6,6,43,43,0,0,0,166,166,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,167,0,0,0,0,43,43,171,6,6,6,163,0,171,0,0,0,0,0,0,172,164,0,165,0,0,0,163,0,0,171,0,0,0,0,0,0,0,325,0,0,0,324,0,0,0,0,0,0,0,172,164,0,165,0,0,0,163,0,0,171,0,0,0,0,0,0,172,169,165,6,6,6,6,43,43,0,0,0,166,166,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,167,0,0,0,0,43,43,171,6,6,6,163,0,171,0,0,0,0,172,0,0,165,0,0,0,0,0,163,0,0,171,0,0,0,0,0,0,325,0,0,0,324,0,0,0,0,0,0,172,0,0,165,0,0,0,0,0,163,0,0,171,0,0,0,0,172,169,165,6,6,6,6,43,43,0,0,0,166,166,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,167,0,0,0,0,0,0,171,6,6,6,163,169,169,169,169,169,164,0,165,0,0,0,0,0,0,0,163,0,164,171,169,169,169,169,169,325,169,169,169,324,169,169,169,169,169,169,164,0,165,0,0,0,0,0,0,0,163,0,164,169,169,169,169,169,165,6,6,6,0,43,165,0,0,0,166,166,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,165,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,167,0,0,0,0,0,172,6,168,168,168,6,168,168,168,163,164,0,0,165,0,0,0,0,0,163,0,0,164,165,0,168,168,168,172,161,161,161,161,161,171,168,168,168,0,163,164,0,0,165,0,0,0,0,0,163,0,0,164,165,0,0,168,165,6,6,6,6,43,43,0,0,0,0,166,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,165,161,163,171,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,167,0,0,0,172,0,165,0,0,0,0,0,0,0,0,163,164,164,0,161,161,161,161,161,161,164,164,165,0,0,0,0,172,164,165,162,162,162,163,164,171,0,0,0,0,163,164,164,0,161,161,161,161,161,161,164,164,165,0,0,0,0,0,0,0,0,163,0,171,0,0,0,166,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,164,164,163,161,164,171,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,167,0,172,0,165,0,0,0,0,0,0,0,0,0,0,163,164,161,161,161,161,161,161,161,164,165,0,0,0,0,172,164,165,0,0,0,0,0,163,164,171,0,0,0,0,163,164,161,161,161,161,161,161,161,164,165,0,0,0,0,0,0,0,0,0,0,163,0,0,0,166,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,164,164,161,161,161,161,0,171,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,167,0,165,0,0,0,172,171,0,0,0,172,171,0,0,162,162,162,162,162,162,162,162,162,0,0,172,161,161,161,165,0,0,0,0,0,0,0,163,161,161,172,171,0,0,162,162,162,162,162,162,162,162,162,0,0,172,161,0,0,0,172,6,6,6,6,6,0,166,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,164,161,161,161,161,161,161,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,165,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,172,0,165,0,0,0,172,164,162,162,162,162,162,164,171,0,60,0,0,0,0,0,0,0,60,0,172,164,162,162,162,0,0,0,0,0,0,0,0,0,162,162,163,164,171,0,60,0,0,0,0,0,0,0,60,0,172,164,162,162,162,162,163,164,171,0,0,0,163,164,171,0,0,0,0,0,0,0,0,0,0,0,0,0,164,165,163,163,164,171,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,172,161,171,0,0,0,0,0,0,0,0,0,0,0,0,273,161,161,161,161,161,273,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,165,161,163,171,0,0,0,0,0,0,0,0,0,0,0,0,172,0,165,0,0,0,172,164,165,0,0,0,0,0,164,164,171,60,60,0,0,60,0,0,60,60,172,164,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,164,164,171,60,60,0,0,60,0,0,60,60,172,164,164,0,0,0,0,0,163,0,171,0,0,0,163,164,171,0,0,0,0,0,0,0,0,0,0,0,164,164,165,161,163,161,164,171,0,0,0,0,0,0,0,0,0,0,0,0,0,169,169,169,169,169,169,169,169,169,169,169,165,161,163,169,169,169,169,169,169,169,169,169,169,169,169,296,273,276,65,296,273,276,169,169,169,169,169,169,169,169,169,169,169,
0,0,0,0,0,0,0,0,0,164,164,163,161,164,171,0,0,0,0,0,0,0,0,0,0,172,0,165,0,0,0,172,164,165,0,0,0,0,0,0,164,164,164,171,59,0,0,59,0,0,60,172,164,164,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,164,164,164,171,59,0,0,59,0,0,60,172,164,164,164,0,0,0,0,0,0,163,0,171,0,0,0,163,164,171,0,0,0,0,0,0,0,0,0,164,164,164,161,0,161,164,164,0,171,0,0,0,0,0,0,0,0,0,0,0,172,0,0,0,0,0,0,0,0,0,169,164,164,163,161,164,0,0,0,0,0,0,0,0,0,0,0,0,0,65,28,65,65,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,164,164,161,161,161,161,0,171,0,0,0,0,0,0,0,0,172,0,165,0,0,0,172,164,165,0,0,0,0,0,0,0,163,164,164,164,165,0,0,0,0,0,163,164,164,164,165,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,163,164,164,164,165,0,0,0,0,0,163,164,164,164,165,0,0,0,0,0,0,0,163,0,171,0,0,0,163,164,171,0,0,0,0,0,0,0,0,164,164,161,161,0,0,161,164,161,0,0,0,0,0,0,0,0,0,0,0,172,0,165,6,6,6,0,0,0,0,6,164,164,161,161,161,161,0,171,0,0,0,0,0,0,0,0,0,0,173,28,28,28,65,0,0,0,0,0,0,0,0,0,0,0,6,
0,0,0,0,0,0,0,0,164,161,161,161,161,161,161,0,0,0,0,0,0,0,0,172,0,165,0,0,0,172,164,165,0,0,0,0,166,0,0,74,0,163,164,165,0,0,0,0,0,0,0,163,164,165,0,195,0,187,342,0,0,0,0,0,0,333,317,195,0,187,0,163,164,165,0,0,0,0,0,0,0,163,164,165,0,0,0,0,0,0,0,0,0,163,0,171,0,0,0,163,164,171,0,0,0,0,0,0,0,273,164,161,161,161,161,161,164,273,0,0,0,0,0,0,0,0,0,0,172,0,165,6,6,6,0,0,0,0,0,0,164,161,161,161,161,161,161,6,6,6,6,6,6,6,6,6,6,275,173,28,28,28,65,274,6,6,6,6,6,6,6,6,6,6,6,
0,0,0,0,0,0,0,0,273,161,161,161,161,161,273,0,0,0,0,0,0,0,172,0,165,0,0,0,172,164,165,0,0,0,0,166,49,49,0,0,82,0,162,162,162,162,162,162,162,162,162,162,162,0,82,0,0,342,332,0,0,0,0,0,0,0,333,317,0,0,82,0,162,162,162,162,162,162,162,162,162,162,162,0,82,74,74,74,74,167,0,0,0,0,163,0,171,0,0,0,163,164,171,0,0,0,0,0,0,273,273,273,273,273,273,273,273,273,0,0,0,0,0,0,0,0,0,172,0,165,6,6,6,0,36,36,36,36,172,0,273,161,161,161,161,161,273,6,6,6,6,6,6,6,6,6,71,273,275,173,173,174,274,273,24,6,6,6,6,6,6,6,6,6,164,
169,169,169,169,169,169,169,169,296,273,276,43,296,273,276,169,169,169,169,169,169,169,164,165,6,0,0,172,164,165,0,0,0,0,166,0,0,49,0,0,83,82,0,0,0,0,0,0,0,0,0,0,0,82,83,0,342,332,0,0,0,0,0,0,0,0,0,333,317,0,83,82,0,0,0,0,0,0,0,0,0,0,0,82,0,0,49,49,49,0,167,0,0,0,0,163,0,171,0,0,0,163,164,169,169,169,169,169,169,296,276,269,169,169,169,296,273,273,169,169,169,169,169,169,169,169,169,169,165,6,6,6,6,43,162,162,162,162,162,164,296,273,276,65,296,273,276,161,161,161,161,161,161,161,0,164,164,71,274,43,273,43,275,24,164,164,0,0,161,161,161,161,161,161,0,
0,0,0,0,0,0,0,0,0,0,43,27,43,57,0,0,0,0,0,0,0,163,165,6,6,0,172,164,165,0,0,0,0,166,0,0,0,49,49,0,0,83,0,0,0,0,0,0,0,0,0,0,0,83,0,342,332,0,0,0,0,0,0,0,0,0,0,0,333,317,0,83,0,0,0,0,0,0,0,0,0,0,0,0,0,0,49,49,49,49,0,167,0,0,0,0,163,0,171,0,0,6,163,165,0,0,0,0,0,0,0,269,196,196,196,269,58,273,0,0,0,0,0,0,0,0,163,165,0,6,6,0,43,43,0,0,0,0,0,162,0,0,65,28,65,65,0,65,171,82,0,162,65,65,164,164,164,164,161,165,196,196,161,164,164,164,164,65,65,65,171,82,0,0,0,
0,0,0,0,0,0,0,0,0,0,43,27,43,57,0,0,0,0,0,0,0,0,0,0,0,172,164,165,0,0,0,0,166,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,325,0,0,0,0,0,72,56,78,0,0,0,0,0,324,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,49,0,0,49,49,0,167,0,0,0,0,163,0,171,0,0,0,0,0,0,0,0,0,0,0,269,0,0,0,0,0,296,0,0,0,0,0,0,0,0,0,0,0,6,0,43,43,43,0,0,0,0,0,0,0,0,28,28,28,174,0,65,44,82,65,0,65,65,163,164,164,161,0,0,0,0,0,161,164,164,165,65,65,65,65,82,65,327,0,
0,0,0,0,0,0,0,0,275,58,43,27,43,0,274,0,0,0,0,0,0,0,0,0,0,164,165,0,0,0,0,166,0,0,0,0,0,0,0,0,0,0,0,49,49,325,0,0,0,324,49,49,0,0,342,332,0,0,0,0,72,8,49,79,78,0,0,0,0,333,317,49,0,195,187,325,41,41,41,324,195,187,0,0,0,0,0,0,0,0,49,49,0,167,43,0,0,0,163,0,171,0,0,0,0,0,0,0,0,275,0,0,0,0,0,0,0,274,0,0,0,0,0,0,0,0,0,0,6,172,43,43,43,43,43,0,0,0,0,172,0,173,28,28,28,173,0,171,65,0,0,0,0,0,0,163,161,0,0,0,0,0,0,161,161,165,0,0,0,0,0,0,0,327,0,
36,36,36,36,36,161,161,71,273,275,0,0,0,274,273,24,161,161,36,36,36,36,36,36,163,165,0,0,0,0,166,0,0,0,0,0,0,0,0,0,0,0,0,0,0,325,0,0,0,324,0,0,0,342,332,0,0,0,0,72,8,184,184,184,79,78,0,0,0,0,333,317,49,0,0,325,41,41,41,324,0,0,0,0,0,0,0,0,0,0,0,0,0,0,167,0,0,0,0,163,165,36,36,36,36,36,161,161,71,273,275,0,196,196,196,197,274,273,24,161,161,36,36,36,36,36,36,36,161,36,43,0,0,0,0,0,0,0,0,164,171,173,0,0,0,173,172,164,0,0,0,0,0,0,0,0,162,52,162,162,162,162,162,52,162,0,0,0,0,0,0,0,0,327,0,
162,162,162,162,162,162,164,164,71,274,43,273,43,275,24,164,164,162,162,162,162,162,162,162,162,0,0,0,0,166,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,325,0,0,0,324,0,342,326,332,0,0,0,0,0,16,49,184,184,184,49,63,0,0,0,0,0,333,326,317,0,325,41,41,41,324,0,0,0,0,0,0,0,0,0,0,0,0,0,49,0,167,0,0,0,0,162,162,162,162,162,162,162,164,164,71,274,43,273,273,273,43,275,24,164,164,162,162,162,162,162,162,162,162,162,162,0,0,0,166,166,74,0,0,0,164,36,36,161,273,161,0,24,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,327,0,
0,0,0,0,0,164,164,164,164,161,165,196,196,161,164,164,164,164,0,0,0,0,0,0,0,0,0,0,166,0,0,0,0,0,0,0,0,0,0,0,49,49,49,0,0,325,0,0,0,333,326,332,0,0,0,0,0,0,72,8,184,184,184,184,184,79,78,0,0,0,0,0,0,333,326,332,0,0,0,324,0,0,0,0,0,0,0,0,0,0,0,0,0,49,49,0,167,0,0,0,0,0,0,0,0,0,164,164,164,164,161,165,196,196,196,196,161,164,164,164,164,0,0,0,0,43,0,43,0,43,0,0,0,166,0,0,0,0,0,327,0,0,0,0,0,0,0,65,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,327,0,
0,0,0,0,0,163,164,164,161,0,0,0,0,0,161,164,164,165,0,0,0,0,0,0,0,0,0,166,0,0,0,0,0,0,0,0,0,0,49,49,49,49,49,0,342,332,0,0,0,0,0,0,0,0,0,0,0,334,316,184,184,184,184,184,184,184,341,0,0,0,0,0,0,0,0,0,0,0,0,333,326,317,0,0,0,0,0,0,0,0,0,0,0,0,49,49,0,167,0,0,0,0,0,0,0,0,163,164,164,161,0,0,0,0,0,0,0,161,164,164,165,0,0,0,0,0,0,0,0,0,0,0,166,0,0,0,0,0,0,327,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,163,161,0,0,0,0,0,0,161,161,165,0,0,0,0,0,0,0,0,0,166,0,0,0,0,0,0,0,0,0,49,49,49,49,49,0,342,326,332,0,0,0,0,0,0,0,0,0,0,0,72,316,184,184,184,184,184,184,184,184,184,341,78,0,0,0,0,0,0,0,0,0,0,0,0,333,326,317,0,0,0,0,0,0,0,0,0,0,49,49,49,0,167,0,0,0,0,0,0,0,0,163,161,0,0,0,0,0,0,0,0,161,161,165,0,0,0,0,0,0,0,0,0,0,0,166,0,0,0,0,0,0,0,327,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,162,162,162,162,162,162,162,162,162,0,0,0,0,0,0,0,0,0,166,0,0,0,0,0,0,0,0,0,0,49,49,49,0,342,326,332,0,0,0,0,0,0,0,0,0,0,0,334,318,8,184,184,184,80,64,64,64,85,184,184,184,79,318,340,0,0,0,0,0,0,0,0,0,0,0,0,333,317,0,0,0,0,0,0,0,0,0,49,0,0,0,0,167,0,0,0,0,0,0,0,0,162,162,162,162,162,162,162,162,162,162,162,0,0,0,0,0,0,0,0,0,0,0,166,0,0,0,0,0,0,0,0,327,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
195,74,74,74,74,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,49,49,49,49,49,0,0,0,0,342,332,0,0,0,0,0,0,0,0,0,0,0,334,72,56,184,184,184,184,80,24,0,0,0,71,85,184,184,184,184,341,340,0,0,0,0,0,0,0,0,0,0,0,0,333,317,0,0,0,0,0,49,49,49,49,49,49,49,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,187,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
326,326,326,326,317,0,0,0,0,0,0,0,0,0,0,0,0,0,342,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,332,0,0,0,0,0,0,0,0,0,0,334,72,56,0,49,80,64,64,64,24,0,0,0,0,0,71,64,64,64,85,0,341,318,78,0,0,0,0,0,0,0,0,0,0,0,333,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,317,0,0,0,0,0,0,0,0,0,0,0,0,0,342,326,326,326,326,326,326,326,317,49,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,324,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,333,317,0,0,0,0,0,0,0,0,0,0,0,342,332,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,72,56,56,56,0,49,80,64,24,0,0,0,0,0,0,0,0,0,0,0,0,0,71,64,85,49,79,56,56,56,78,41,41,41,41,41,41,41,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,333,317,0,0,0,0,0,0,0,0,0,0,0,342,332,0,0,0,0,0,0,0,333,326,326,326,326,326,326,326,326,326,317,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,324,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,333,326,326,326,326,326,326,326,326,326,326,326,332,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,72,56,8,184,184,49,80,64,24,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,71,317,64,0,49,49,79,56,78,41,41,41,41,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,333,326,326,326,326,326,326,326,326,326,326,326,332,0,0,0,0,0,41,41,41,41,0,41,41,41,41,41,41,41,41,333,326,326,326,317,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,324,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,72,8,184,184,184,49,80,24,0,0,0,0,0,0,0,197,0,0,0,0,0,0,196,197,0,0,0,0,333,317,16,184,0,0,49,341,78,41,41,41,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,41,41,41,41,41,41,41,0,0,41,41,41,41,41,41,41,41,333,326,326,326,317,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,324,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,72,8,184,184,184,184,80,24,0,0,0,0,0,0,196,0,0,0,0,0,0,0,0,0,196,197,0,0,0,0,333,317,49,0,0,184,49,341,78,41,41,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,41,41,41,41,41,41,41,41,41,41,41,41,41,41,0,0,41,41,41,41,41,0,326,326,326,326,326,317,0,0,0,0,0,0,0,0,0,324,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,72,8,184,184,184,184,80,24,0,0,0,0,0,0,196,4,0,0,0,0,0,0,0,0,0,4,196,197,0,0,0,0,71,64,85,0,184,0,49,341,78,41,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,334,318,318,318,318,318,318,318,318,340,41,41,41,41,41,41,41,41,41,0,0,41,41,41,41,41,41,41,0,0,0,41,41,41,41,41,41,0,324,0,0,0,0,0,0,0,0,0,0,0,0,
169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,0,0,0,0,0,0,0,72,8,184,184,0,184,184,63,0,0,0,0,0,0,196,4,12,5,0,0,0,0,0,0,0,6,12,4,196,197,0,0,0,0,41,16,184,0,0,0,49,341,78,41,0,0,0,0,0,0,0,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,324,169,169,169,169,169,169,169,169,341,318,318,318,340,41,41,41,41,41,41,41,41,0,0,0,0,0,0,0,0,0,0,0,0,0,41,41,41,324,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,164,171,0,0,0,0,0,0,16,184,184,184,0,184,0,63,0,0,0,0,0,196,4,12,5,6,0,291,0,291,291,0,291,6,6,12,4,196,197,0,0,0,41,16,49,0,176,0,184,49,63,41,0,0,0,0,0,0,172,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,168,168,0,172,171,0,0,341,318,318,340,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,324,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,164,164,0,0,0,0,0,0,16,184,176,0,0,184,0,63,0,0,0,0,0,4,12,6,6,6,0,301,299,291,301,299,291,6,6,6,12,4,0,0,0,0,41,16,49,0,176,176,0,49,63,41,0,0,0,0,0,0,164,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,6,6,163,0,171,0,0,0,0,341,318,318,318,318,318,41,41,41,41,41,41,41,41,41,41,41,41,41,41,334,318,316,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,6,6,6,6,6,6,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,164,164,0,0,0,0,0,72,8,184,0,0,0,184,80,24,0,0,0,0,0,12,6,6,6,5,0,302,300,291,302,300,291,50,6,6,6,12,0,0,0,0,41,71,85,184,176,176,0,184,79,78,0,0,0,0,0,0,164,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,6,6,6,6,6,6,6,6,6,6,6,6,0,0,0,0,0,0,0,0,0,0,6,6,6,6,163,0,171,0,0,0,0,0,0,0,0,0,341,318,318,318,318,318,318,318,318,318,318,318,318,318,316,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
36,36,36,36,36,161,6,6,6,6,0,0,6,6,6,6,6,6,172,161,36,36,36,36,36,36,36,36,36,36,36,36,36,164,164,0,0,0,0,0,16,184,184,0,0,176,184,63,0,0,0,0,0,0,6,6,6,5,0,0,0,0,291,0,291,0,291,50,6,6,6,0,0,0,0,41,41,16,184,176,176,176,184,49,63,0,0,0,0,0,0,164,164,36,36,36,36,36,36,36,36,36,36,36,36,161,161,6,6,6,6,0,0,6,6,6,6,6,6,172,161,161,36,36,36,36,36,36,36,36,168,171,6,6,6,163,0,171,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
162,162,162,162,162,164,164,6,6,6,6,6,6,6,6,6,6,6,164,164,162,162,162,162,162,162,162,162,162,162,162,162,162,163,0,0,0,0,0,0,16,184,0,0,0,176,184,63,0,0,0,0,0,0,60,6,5,0,0,0,0,0,301,299,291,0,301,299,50,6,6,0,0,0,0,41,41,16,184,176,0,0,0,184,63,0,0,0,0,0,0,164,165,162,162,162,162,162,162,162,162,162,162,162,162,162,164,164,6,6,6,6,6,6,6,6,6,6,6,164,164,162,162,162,162,162,162,162,162,162,43,43,171,6,6,6,163,171,171,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,164,164,164,164,161,165,196,196,196,196,161,164,164,164,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,184,0,0,0,176,184,63,0,0,0,0,0,0,60,5,0,0,0,0,0,0,302,300,291,0,302,300,291,50,6,0,0,0,0,41,41,16,184,176,0,0,176,184,63,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,164,164,164,164,161,161,300,291,302,300,161,164,164,164,164,0,0,0,0,0,0,0,0,0,43,43,43,171,6,6,6,163,0,171,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,163,164,164,161,0,0,0,0,0,0,0,161,164,164,165,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,184,0,0,0,176,184,63,0,0,41,0,0,0,5,291,284,291,0,291,0,291,0,291,0,0,291,0,291,0,50,0,0,0,0,41,41,16,184,176,0,0,176,184,63,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,163,164,164,161,0,0,0,291,0,302,0,291,164,164,165,0,0,0,0,0,0,0,0,0,43,43,43,43,171,6,6,6,163,0,171,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,163,161,0,0,0,0,0,0,0,0,161,161,165,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,340,0,0,0,0,0,16,184,0,0,0,176,184,79,78,0,41,0,0,0,0,301,299,291,0,301,299,291,0,301,299,291,291,0,0,0,0,0,0,0,0,41,72,8,184,176,0,0,176,184,63,0,0,0,0,0,0,334,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,163,161,0,0,0,0,301,299,291,0,301,163,165,0,0,0,0,0,0,0,0,0,0,43,43,43,43,43,171,6,6,6,163,0,171,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,162,162,162,162,162,162,162,162,162,162,162,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,325,0,0,0,0,0,16,184,184,0,0,0,184,184,63,0,0,0,0,0,0,302,300,291,0,302,300,291,0,302,300,291,291,0,0,0,0,0,0,0,0,41,16,184,184,176,0,0,184,184,63,0,0,0,0,0,0,324,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,162,162,162,162,162,162,162,162,162,302,162,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,43,171,6,6,6,163,0,171,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,325,0,0,0,0,0,71,85,184,0,0,0,176,184,63,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,41,16,184,176,0,0,0,184,80,24,0,0,0,0,0,0,324,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,291,0,302,0,291,0,302,291,0,0,0,0,0,0,0,0,0,0,0,0,167,0,0,0,0,43,43,171,6,6,6,163,0,171,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
326,326,326,326,317,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,342,326,326,326,326,326,326,326,326,326,326,326,326,326,332,0,0,0,0,0,0,16,184,184,0,0,0,184,63,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,41,16,184,176,0,0,184,184,63,41,0,0,0,0,0,0,333,326,326,326,326,326,326,326,326,326,326,326,326,326,317,0,0,0,0,301,299,291,34,301,299,291,291,0,0,0,342,326,326,326,326,326,326,326,326,326,326,0,0,0,0,43,43,171,6,6,6,163,0,171,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,333,317,0,0,0,0,0,0,0,0,0,0,0,0,0,342,332,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,71,85,184,184,0,0,184,79,78,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,72,8,184,0,0,184,184,80,24,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,333,317,0,0,0,302,300,291,0,302,300,291,291,0,0,342,332,0,0,0,0,0,0,0,0,0,0,167,0,0,0,0,0,43,171,6,6,6,163,0,171,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,333,326,317,0,0,0,0,0,0,0,0,0,342,326,332,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,71,85,184,184,0,184,184,63,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,184,184,176,184,184,80,24,41,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,333,326,317,0,0,0,0,0,0,0,0,0,342,326,332,0,0,0,0,0,0,0,0,0,0,0,0,167,0,0,0,0,43,43,171,6,6,6,163,0,171,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,333,326,326,326,326,326,326,326,326,326,332,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,71,85,184,184,184,184,63,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,184,184,184,184,80,24,41,41,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,333,326,326,326,326,326,326,326,326,326,332,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,167,0,0,0,0,43,43,171,6,6,6,163,0,171,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,71,85,184,184,184,63,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,184,184,184,49,24,41,41,41,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,167,0,0,0,0,43,43,171,6,6,6,163,0,171,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,71,64,64,64,24,0,0,0,165,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,165,0,0,0,71,64,64,64,24,41,41,41,41,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,167,0,0,0,0,43,43,171,6,6,6,163,0,171,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,165,161,163,171,0,0,0,0,0,0,0,0,0,0,0,0,0,0,165,161,163,171,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,167,43,43,43,43,169,43,171,6,6,6,163,169,171,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,168,168,168,168,171,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,164,164,163,161,164,171,0,0,0,0,0,0,0,0,0,0,0,0,164,164,163,161,164,171,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,172,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,6,6,163,0,171,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,164,164,161,161,161,161,0,171,0,0,0,0,0,0,0,0,0,0,164,164,161,161,161,161,0,171,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,172,0,165,6,6,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,6,6,6,163,0,171,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,164,161,161,161,161,161,161,0,0,0,0,0,0,0,0,0,0,0,164,161,161,161,161,161,161,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,172,0,165,6,6,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,161,171,6,6,6,163,0,171,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,273,161,161,161,161,161,273,0,0,0,0,0,0,0,0,0,0,0,273,161,161,161,161,161,273,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,172,0,165,6,6,6,0,161,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,
162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,43,43,171,6,6,6,163,171,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,296,273,276,43,296,273,276,169,169,169,169,169,169,169,169,169,169,169,296,273,276,43,296,273,276,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,169,165,6,6,6,6,43,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,43,43,43,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,43,43,43,171,6,6,6,163,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,43,27,43,57,0,0,0,0,0,0,0,0,0,0,0,0,0,0,43,27,43,57,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,163,165,0,6,6,0,43,43,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,43,43,43,43,171,6,6,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,43,27,43,57,0,0,0,172,161,161,161,161,161,171,0,0,0,0,43,27,43,57,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,43,43,43,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,43,43,43,43,43,171,6,6,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,275,58,43,27,43,0,274,0,172,164,165,162,162,162,163,164,171,0,275,58,43,27,43,0,274,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,172,43,43,43,43,43,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,71,273,275,0,0,0,274,273,172,164,165,0,0,0,0,0,163,164,171,273,275,0,0,0,274,273,24,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,43,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,167,0,0,0,0,0,0,43,43,43,43,162,162,162,162,162,162,162,162,162,162,162,162,162,163,164,164,171,0,172,164,164,161,165,0,0,0,0,0,0,0,163,161,164,164,171,0,172,164,164,165,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,162,0,0,0,166,166,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,167,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,163,164,164,0,164,164,165,162,0,0,0,0,0,0,0,0,0,162,163,164,164,0,164,164,165,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,43,0,43,0,43,0,0,0,166,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,167,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,163,164,0,164,165,0,0,0,0,0,0,0,0,0,0,0,0,0,163,164,0,164,165,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,166,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,167,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,164,0,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,164,0,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,166,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,167,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,164,0,164,0,0,0,43,0,0,0,0,0,0,0,0,0,0,0,164,0,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,166,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,167,0,0,164,0,164,0,0,166,0,0,325,0,0,0,324,0,0,167,0,0,164,0,164,0,0,166,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,167,0,164,0,164,0,166,0,0,0,325,0,0,0,324,0,0,0,167,0,164,0,164,0,166,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,167,164,0,164,166,0,0,0,0,325,0,0,0,324,0,0,0,0,167,164,0,164,166,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,164,0,164,0,0,0,0,0,325,0,0,0,324,0,0,0,0,0,164,0,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,164,0,164,0,0,0,0,0,325,0,0,0,324,0,0,0,0,0,164,0,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,164,0,164,0,0,0,0,0,325,0,0,0,324,0,0,0,0,0,164,0,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,164,0,164,0,0,0,0,0,325,0,0,0,324,0,0,0,0,0,164,0,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,164,0,164,0,0,0,0,0,325,0,0,0,324,0,0,0,0,0,164,0,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,164,0,164,0,0,0,0,0,325,0,0,0,324,0,0,0,0,0,164,0,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,164,0,164,0,0,0,0,0,325,0,0,0,324,0,0,0,0,0,164,0,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,163,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,171,0,0,0,0,172,164,165,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,163,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,171,0,0,0,0,172,164,165,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,163,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,171,0,0,0,0,172,164,165,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,163,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,171,0,0,0,0,172,164,165,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,163,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,171,0,0,0,0,172,164,165,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,163,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,165,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,165,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,171,0,0,0,0,172,164,165,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,163,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,172,164,165,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,163,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,171,0,0,0,0,172,164,165,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,163,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,172,164,165,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,163,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,172,164,165,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,163,164,0,0,0,0,0,0,171,0,0,172,165,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,169,0,0,0,169,0,0,0,0,0,172,165,0,0,0,0,0,0,0,0,0,0,0,0,171,0,0,172,0,0,0,0,0,172,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,172,163,171,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,163,164,171,6,6,6,163,165,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,163,0,0,0,0,172,164,165,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,172,0,161,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,165,0,0,161,0,0,0,161,0,0,163,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,165,0,0,161,0,0,0,161,0,0,163,0,0,0,0,0,0,0,0,0,0,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,172,164,161,161,161,164,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,161,0,0,0,0,0,161,0,0,0,0,196,196,197,0,0,0,0,0,0,0,0,0,0,196,196,197,0,0,0,161,0,0,0,0,0,161,0,0,0,0,0,0,0,0,0,0,0,0,0,164,171,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,172,164,171,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,172,164,164,161,161,161,164,164,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,172,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,162,162,0,162,162,0,0,0,0,197,171,0,163,0,0,0,0,0,0,0,0,0,165,0,0,0,197,0,0,0,162,162,0,162,162,0,0,0,0,0,171,0,0,0,0,171,0,0,0,163,164,171,0,0,0,0,0,0,0,0,0,0,0,0,0,0,172,164,164,164,171,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,163,164,165,161,161,161,163,164,165,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,172,163,171,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,165,0,0,0,163,0,0,0,0,0,27,27,0,27,27,0,0,0,0,0,165,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,27,27,0,27,27,0,0,0,0,0,165,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,172,164,165,165,163,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,163,161,161,161,161,161,165,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,172,0,161,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,27,27,0,27,27,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,27,27,0,27,27,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,172,164,164,165,0,163,164,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,172,0,161,0,171,0,0,0,0,0,0,0,0,0,0,0,0,162,162,162,162,162,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,172,164,161,161,161,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,173,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,172,164,164,165,36,161,36,163,164,164,0,0,0,0,0,0,0,0,0,0,0,0,0,171,0,0,0,0,0,0,0,0,172,164,161,161,161,164,171,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,172,164,164,161,161,161,164,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,60,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,173,173,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,163,164,165,165,161,161,161,163,163,164,165,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,172,164,164,161,161,161,164,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,163,164,165,161,161,161,163,164,165,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,60,60,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,332,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,173,173,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,163,164,36,161,161,161,36,164,165,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,163,164,165,161,161,161,163,164,165,0,169,0,0,0,0,0,0,172,0,0,0,0,0,0,0,171,0,0,0,0,0,0,169,0,0,0,
0,0,0,0,0,0,0,0,163,161,0,161,0,161,165,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,60,60,59,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,174,173,173,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,162,162,162,162,162,162,162,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,172,171,0,0,0,0,171,163,161,0,161,0,161,165,0,172,161,171,0,0,0,0,172,164,171,0,0,0,0,0,172,164,171,0,0,0,0,172,161,171,172,0,
0,0,0,0,0,0,0,0,0,162,162,162,162,162,0,0,0,0,0,0,0,172,0,0,0,0,0,0,0,0,0,0,60,60,59,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,174,173,0,173,0,0,0,0,0,0,0,0,0,171,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,172,0,0,0,0,0,172,164,165,0,0,0,163,0,0,162,162,162,162,162,0,172,164,0,164,171,161,161,172,0,164,164,171,273,0,273,172,164,164,0,171,161,161,172,164,0,164,171,165,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,60,0,60,60,59,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,174,173,173,173,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,165,0,0,0,172,164,165,0,0,0,0,0,0,0,0,0,0,0,0,0,163,171,161,172,165,162,162,0,0,0,164,165,161,161,161,163,164,0,0,0,162,162,163,171,161,172,165,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,60,60,60,59,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,334,318,340,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,174,173,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,172,164,165,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,44,52,44,0,0,0,0,0,0,165,0,0,0,0,0,163,0,0,0,0,0,0,44,52,44,0,0,
0,0,0,0,0,0,0,172,0,0,0,0,0,0,0,171,0,0,0,0,0,0,0,0,172,0,0,0,60,60,60,59,0,0,0,0,0,0,0,0,0,0,0,195,187,0,0,0,0,0,195,187,0,0,0,0,0,0,0,0,334,316,0,341,340,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,174,173,173,0,0,0,0,0,0,0,0,0,0,0,0,172,0,0,0,0,0,0,0,0,0,171,0,0,0,0,0,0,0,0,0,0,172,164,165,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,65,0,0,0,0,0,0,0,165,0,0,0,0,0,0,0,163,0,65,65,65,65,65,0,0,327,0,
0,0,0,0,0,0,172,164,171,0,0,0,0,0,172,164,171,0,0,0,0,0,0,0,0,0,0,0,60,60,59,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,334,316,0,0,0,341,340,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,174,173,173,0,0,0,0,0,0,0,0,0,0,172,164,171,0,0,0,0,0,0,0,172,164,171,0,0,0,0,0,36,36,36,36,163,165,0,0,0,0,0,0,0,0,163,0,0,73,73,73,0,0,165,65,0,0,0,0,0,0,0,44,0,0,0,0,0,0,0,44,0,65,65,65,65,65,0,0,327,0,
0,0,0,0,0,172,0,164,164,171,273,0,273,172,164,164,0,171,0,0,0,0,0,0,0,0,0,60,60,59,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,324,0,0,0,0,0,325,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,174,173,173,0,0,0,0,0,0,0,0,172,0,164,164,171,273,275,0,274,273,172,164,164,0,171,0,0,0,0,0,0,0,0,0,0,0,0,0,0,74,74,74,74,164,164,164,165,36,163,164,164,164,65,0,0,0,0,0,0,0,0,0,65,65,65,65,65,0,65,0,0,65,0,0,65,0,0,327,0,
0,0,0,0,0,0,0,0,164,165,161,161,161,163,164,0,0,0,0,0,0,0,0,0,0,0,0,60,59,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,334,316,0,0,0,0,0,341,340,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,174,173,173,0,0,0,0,0,0,0,0,0,0,164,165,161,161,161,161,161,163,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,163,164,165,0,0,0,163,164,165,65,0,0,0,0,0,0,0,0,0,65,0,0,0,65,0,65,0,0,65,0,0,65,0,0,327,0,
0,0,0,0,0,0,0,0,165,0,0,0,0,0,163,0,0,0,0,0,0,0,0,0,0,0,60,59,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,340,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,174,173,173,0,0,0,0,0,0,0,0,0,165,0,0,0,0,0,0,0,163,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,65,65,0,0,0,0,0,0,0,0,0,65,0,0,0,65,0,65,0,0,65,0,0,65,0,0,327,0,
0,0,0,0,0,0,0,165,0,0,0,0,0,0,0,163,0,0,0,0,0,0,0,0,0,0,59,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,334,0,0,0,0,0,0,0,0,0,0,0,340,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,174,173,0,0,0,0,0,0,0,0,165,0,0,0,0,0,0,0,0,0,163,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,65,65,0,0,0,0,0,0,0,0,0,65,0,0,0,65,0,65,0,0,65,0,0,65,0,0,327,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,316,0,0,0,342,326,326,326,317,0,0,0,341,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,174,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,65,65,0,0,73,73,0,73,73,0,0,65,0,0,0,65,0,65,0,0,65,0,0,65,0,0,327,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,318,316,0,0,0,0,342,332,0,0,0,333,317,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,195,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,319,0,0,0,0,0,0,0,65,65,0,0,0,0,0,0,0,0,0,65,0,0,0,65,0,65,65,65,65,65,65,65,0,0,320,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,318,316,0,0,342,326,326,326,332,0,0,0,0,0,333,326,326,326,317,0,0,0,340,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,325,0,0,0,324,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,334,318,318,316,0,0,342,326,332,0,0,0,0,0,0,0,0,0,0,0,0,0,333,326,317,0,341,318,318,318,340,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,325,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,334,318,316,0,0,0,342,326,332,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,333,0,0,0,0,0,341,318,340,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,325,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,334,0,0,238,238,0,342,332,0,0,0,0,0,0,196,197,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,340,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,325,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,334,0,0,0,238,238,342,332,0,0,0,0,0,0,0,197,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,238,238,0,0,340,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,333,0,0,0,0,0,0,0,342,326,326,326,332,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,41,41,41,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,334,0,0,0,0,0,342,332,0,0,0,0,0,0,0,197,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,333,326,317,238,238,0,0,0,340,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,41,41,41,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,333,326,332,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,334,316,0,241,241,0,0,325,0,0,0,0,0,0,0,197,0,0,0,0,0,0,0,0,0,50,0,0,0,0,0,0,0,0,0,324,0,0,0,0,0,0,340,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,169,0,0,0,0,0,0,0,0,169,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,324,0,0,241,241,0,0,325,0,0,0,0,0,196,197,0,290,303,303,303,303,303,304,286,303,289,50,0,0,196,0,0,0,0,0,324,0,0,0,237,237,0,325,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,168,168,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,6,6,6,6,6,6,6,6,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,324,0,0,0,0,0,0,325,0,0,0,0,0,197,0,5,298,0,0,0,299,0,0,0,0,297,0,50,0,0,197,0,0,0,0,324,0,0,0,237,237,0,325,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,6,6,6,6,6,6,6,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,340,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,334,316,0,0,0,0,0,342,332,0,0,0,0,0,197,60,0,306,0,0,299,0,0,0,0,0,305,0,0,50,60,197,0,0,0,0,333,317,0,0,0,0,0,341,340,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,6,6,6,6,6,6,6,6,6,6,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,172,171,6,6,6,6,6,6,6,6,6,6,6,172,171,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,324,0,237,237,0,0,0,325,0,0,0,0,0,0,5,60,60,0,0,290,304,286,303,303,303,303,303,304,292,60,60,197,0,0,0,0,0,324,0,0,0,0,236,236,325,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,172,171,6,6,6,6,6,6,6,6,6,6,6,172,171,0,0,0,0,0,0,0,0,0,172,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,162,164,0,171,169,169,169,169,169,169,169,169,169,172,0,164,162,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,324,0,237,237,0,242,242,325,0,0,0,0,0,0,0,60,59,0,0,298,0,0,0,299,0,0,0,299,291,60,60,197,0,0,0,0,0,324,0,239,239,0,236,236,325,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,164,0,171,169,169,169,169,169,169,169,169,169,172,0,164,0,0,0,0,0,0,0,0,0,163,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,43,0,0,0,164,165,161,161,161,161,161,163,164,0,0,0,43,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,324,0,0,0,0,242,242,325,0,0,0,0,0,0,0,59,0,0,0,306,0,0,299,0,0,0,299,0,0,174,60,197,0,0,0,0,0,324,0,239,239,0,0,0,325,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,164,165,0,161,161,161,161,163,0,0,0,0,0,0,0,0,0,0,0,0,0,0,163,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,35,0,0,0,165,0,0,0,0,0,0,0,163,0,0,0,35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,324,0,0,0,0,0,0,325,0,0,0,0,0,0,303,303,303,303,303,303,303,303,303,303,304,286,303,304,292,0,174,197,0,0,0,0,0,324,0,0,0,0,0,0,325,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,165,290,304,286,303,303,303,303,303,291,0,0,0,0,0,0,0,0,0,0,0,0,0,163,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,43,0,0,165,0,0,0,0,0,0,0,0,0,163,0,0,43,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,324,0,243,243,0,0,0,341,340,0,0,0,0,0,0,0,299,0,0,0,299,0,0,0,299,0,0,0,291,0,0,197,0,0,0,0,334,316,0,0,0,234,234,0,325,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,165,0,298,0,0,0,299,0,0,0,291,0,0,0,0,0,0,0,0,0,0,0,0,0,0,163,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,43,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,43,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,324,0,243,243,0,234,234,0,325,0,0,0,0,0,177,299,0,0,0,299,0,0,0,299,0,0,0,0,291,0,178,0,0,0,0,0,324,0,0,0,0,234,234,0,325,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,306,0,0,302,300,291,0,299,291,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,163,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,74,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,74,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,333,317,0,0,0,234,234,0,325,0,0,0,0,0,0,177,0,0,0,0,0,0,0,0,0,0,0,0,0,178,0,0,0,0,0,0,324,0,0,0,0,0,0,342,332,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,74,0,0,0,303,303,303,303,303,303,303,304,292,291,0,0,74,0,0,0,0,0,0,0,0,0,0,0,0,0,163,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,324,0,0,0,0,0,0,325,0,0,0,0,0,0,0,177,0,0,0,0,0,0,0,0,0,0,0,178,0,0,0,0,0,0,0,324,0,235,235,0,0,0,325,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,299,0,34,0,299,0,301,291,0,0,0,0,0,0,0,0,0,0,0,0,167,0,0,0,0,163,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,333,317,0,0,236,236,0,341,340,0,0,0,0,0,0,0,177,0,0,0,0,0,0,0,0,0,178,0,0,0,0,0,0,0,334,316,0,235,235,0,0,342,332,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,299,0,0,10,299,0,301,302,291,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,163,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,41,0,0,0,49,49,49,49,49,49,49,49,49,0,0,0,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,333,317,0,236,236,0,0,325,0,0,0,0,0,0,0,0,177,0,0,0,0,0,0,0,178,0,0,0,0,0,0,0,0,324,0,0,0,0,0,342,332,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,41,0,0,0,49,49,49,49,49,49,49,49,49,0,0,0,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,163,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,41,41,41,0,0,0,0,0,0,0,0,0,0,0,41,41,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,333,317,0,0,0,0,325,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,324,0,0,0,0,342,332,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,41,41,41,0,0,0,0,0,0,0,0,0,0,0,41,41,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,163,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,333,317,0,0,0,325,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,324,0,0,0,342,332,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,163,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,333,326,326,326,332,0,0,172,163,171,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,172,163,171,0,0,333,326,326,326,332,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,163,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,172,0,161,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,172,0,161,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,169,169,169,169,169,163,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,168,168,0,172,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,172,164,161,161,161,164,0,0,0,0,0,0,0,0,0,0,0,0,172,164,161,161,161,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,171,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,163,164,6,6,6,6,163,165,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,172,164,164,161,161,161,164,164,0,0,0,0,0,0,0,0,0,0,172,164,164,161,161,161,164,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,163,164,165,161,161,161,163,164,165,0,0,0,0,0,0,0,0,0,163,164,165,161,161,161,163,164,165,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,172,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,163,161,0,161,0,161,165,0,0,0,0,0,0,0,0,0,0,0,163,161,0,161,0,161,165,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,172,171,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,163,164,0,0,0,0,0,0,171,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,162,162,162,162,162,0,0,0,0,0,0,0,0,0,0,0,0,0,162,162,162,162,162,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,172,0,0,0,0,0,172,164,165,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,162,162,162,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,163,164,0,0,0,0,0,165,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,165,0,0,0,172,164,165,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,163,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,172,164,165,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,163,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,172,0,0,0,0,0,0,0,171,0,0,0,0,0,0,0,0,0,172,0,0,0,0,0,0,0,171,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,172,164,165,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,163,165,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,164,171,0,0,0,0,0,172,164,0,0,0,0,0,0,0,0,0,164,171,0,0,0,0,0,172,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,36,36,36,36,163,165,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,162,162,162,162,162,162,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,272,272,272,272,272,0,163,0,0,0,0,0,0,0,0,0,165,0,272,272,272,272,272,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

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
			guard1: {normal: "assets/npcs/eaglecrestGuard.png"},
			guard2: {normal: "assets/npcs/eaglecrestGuard2.png"},
			maskSalesman: {normal: "assets/npcs/maskSalesman.png"},
			mailbox: {normal: "assets/objects/mailbox.png"},
			barrel: {normal: "assets/objects/barrel.png"},
			hayWagon: {normal: "assets/objects/hayWagon.png"},
			hayBale1PawPeaks: {normal: "assets/objects/hayBale1PawPeaks.png"},
			hayBale2PawPeaks: {normal: "assets/objects/hayBale2PawPeaks.png"},
			well: {normal: "assets/objects/well.png"},
			ironBucket: {normal: "assets/objects/ironBucket.png"},
			cauldronEaglecrest: {normal: "assets/objects/cauldronEaglecrest.png"},
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

tripwires: [
	{
	x: 3753,
	y: 3640,
	width: 120,
	height: 2,
	onPlayerTouch: function () {
					if (Game.hero.moveTowards === undefined) {

						Game.hero.hidden = true;
						Game.hero.moveTowards = {
							x: Game.hero.x,
							y: Game.hero.y + 570,
							moveTowardsFinishFunction: function () {
								Game.hero.hidden = false;
							},
							speedScalar: 2,
						};
						Game.hero.updateRotation();
					}
				}
},

{
x: 3753,
y: 4080,
width: 120,
height: 2,
onPlayerTouch: function () {
									if (Game.hero.moveTowards === undefined) {

											Game.hero.hidden = true;
											Game.hero.moveTowards = {
													x: Game.hero.x,
													y: Game.hero.y - 570,
													moveTowardsFinishFunction: function () {
														Game.hero.hidden = false;
													},
													speedScalar: 2,
											};
											Game.hero.updateRotation();
									}
							}
},


],

		areaTeleports: [
			{
				// teleport to bank
				x: 4652,
				y: 1350,
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
				x: 2852.7,
				y: 1350.2,
				width: 120,
				height: 2,
				teleportTo: "eaglecrestTavern",
				destinationX: 630,
				destinationY: 1380,
			},
			{
				// teleport to the forge
				x: 6633,
				y: 1950,
				width: 60,
				height: 2,
				teleportTo: "theForge",
				destinationX: 395,
				destinationY: 770,
			},
			{
				// teleport to eaglecrest elixirs
				x: 6988,
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
				x: 6810.6,
				y: 2970.7,
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
				y: 1700,
				width: 170,
				height: 60,
			},
		],

		villagerData: {
			minPeople: 15,
			maxPeople: 20,
			locations: [

				{x: 57.9, y: 2055.6, width: 2049.2, height: 193},
				{x: 2090.5, y: 1945.6, width: 362, height: 1632.2},
				{x: 2698.5, y: 1703.4, width: 454.9, height: 220.5},
				{x: 2505.5, y: 1794.8, width: 178.1, height: 325.7},
				{x: 4310.5, y: 1660.4, width: 676.5, height: 316.7},
				{x: 4842.8, y: 1943.1, width: 1571.8, height: 308.3},
				{x: 6440.9, y: 2059.7, width: 999, height: 202.2},
				{x: 7450.5, y: 1973.5, width: 838.7, height: 235.5},
				{x: 5099.6, y: 2264.4, width: 344.8, height: 1295.9},
				{x: 5464.1, y: 2978.4, width: 933, height: 276.6},
				{x: 6385.1, y: 3111, width: 1673.7, height: 133},
				{x: 1226.1, y: 2961.7, width: 862, height: 288.6},
				{x: 0, y: 3070.5, width: 1231.3, height: 210},
				{x: 2980, y: 2213.1, width: 242.5, height: 945.6},
				{x: 4300.9, y: 2202.6, width: 192.1, height: 911.1},
				{x: 2489.3, y: 3299.5, width: 373.3, height: 257.3},
				{x: 4637.9, y: 3317, width: 445, height: 241.9},
				{x: 8310.4, y: 2008.8, width: 1389.8, height: 425.3},


			],
		},

		villagers: [
			{
				boundary: [{x: 4312.3, y: 2264, width: 235.8, height: 914.8},
				{x: 3017.9, y: 2185.6, width: 185, height: 983.9},],
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
						role: "questStartFinish"
					},
					{
						quest: Quests.eaglecrest[11],
						role: "questStartFinish"
					},
					{
                        role: "text",
                        chooseText: "Ask about a <b>translator</b>.",
                        chat: `A <b>translator</b>? Unfortunately I don't, but I'm sure you can find one around! Maybe some of the <b>shopkeepers</b> would have one.<br><br>
						Remember to come back to me later and maybe I'll have something for you to do!`,
                        buttons: ["Leave"],
                        showCloseButton: false,
                        forceChoose: true, // forces choose dom
                        functions: [function () {
                            // close page
                            Dom.closePage("textPage");
                            // quest progress
                            Dom.quests.active();
                        }],
                        roleRequirement: function () {
                            return Player.quests.questProgress.troubledWaters2Progress === 2;
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
				// id: 0,
				x: 4679,
				y: 3484,
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
                        role: "text",
                        chooseText: "Ask about a <b>translator</b>.",
                        chat: `A <b>Translator</b>? No. Try asking some of the <b>shopkeepers</b>.`,
                        buttons: ["Leave"],
                        showCloseButton: false,
                        forceChoose: true, // forces choose dom
                        functions: [function () {
                            // close page
                            Dom.closePage("textPage");
                            // quest progress
                            Dom.quests.active();
                        }],
                        roleRequirement: function () {
                            return Player.quests.questProgress.troubledWaters2Progress === 2;
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
				x: 6090,
				y: 2886,
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
                        role: "text",
                        chooseText: "Ask about a <b>translator</b>.",
                        chat: `I only buy, not sell. Speaking of selling, you got anything for me?`,
                        buttons: ["Leave"],
                        showCloseButton: false,
                        forceChoose: true, // forces choose dom
                        functions: [function () {
                            // close page
                            Dom.closePage("textPage");
                            // quest progress
                            Dom.quests.active();
                        }],
                        roleRequirement: function () {
                            return Player.quests.questProgress.troubledWaters2Progress === 2;
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
				y: 1140,
				image: "guard1",
				template: NPCTemplates.guard,
				roles: [
					{
                        role: "text",
                        chooseText: "Ask about a <b>translator</b>.",
                        chat: `I'm busy, go ask someone else.`,
                        buttons: ["Leave"],
                        showCloseButton: false,
                        forceChoose: true, // forces choose dom
                        functions: [function () {
                            // close page
                            Dom.closePage("textPage");
                            // quest progress
                            Dom.quests.active();
                        }],
                        roleRequirement: function () {
                            return Player.quests.questProgress.troubledWaters2Progress === 2;
                        },
                    },
				]
			},
			{
				// id: 2,
				x: 3872,
				y: 1140,
				image: "guard2",
				template: NPCTemplates.guard,
			},
			{
				// id: 3,
				x: 3588,
				y: 3567,
				image: "guard1",
				template: NPCTemplates.guard,
			},
			{
				// id: 4,
				x: 3910,
				y: 3567,
				image: "guard2",
				template: NPCTemplates.guard,
			},
			{
				// id: 5,
				x: 5572,
				y: 2007,
				image: "guard2",
				template: NPCTemplates.guard,
			},
			{
				// id: 5,
				x: 1936,
				y: 1980,
				image: "guard1",
				template: NPCTemplates.guard,
			},
			{
				// id: 6,
				x: 5572,
				y: 2246,
				image: "guard1",
				template: NPCTemplates.guard,
			},
			{
				// id: 7,
				x: 1936,
				y: 2246,
				image: "guard2",
				template: NPCTemplates.guard,
			},
			{
				// id: 8,
				x: 5723,
				y: 2886,
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
                        role: "text",
                        chooseText: "Ask about a <b>translator</b>.",
                        chat: `Don't have a <b>translator</b>. Feel free to come back if you have something for me to identify!`,
                        buttons: ["Leave"],
                        showCloseButton: false,
                        forceChoose: true, // forces choose dom
                        functions: [function () {
                            // close page
                            Dom.closePage("textPage");
                            // quest progress
                            Dom.quests.active();
                        }],
                        roleRequirement: function () {
                            return Player.quests.questProgress.troubledWaters2Progress === 2;
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
				x: 2984,
				y: 1927,
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
				x: 2123,
				y: 1850,
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
                        role: "text",
                        chooseText: "Ask about a <b>translator</b>.",
                        chat: `I've only got pies, but they'll be sure to fill your stomach!`,
                        buttons: ["Leave"],
                        showCloseButton: false,
                        forceChoose: true, // forces choose dom
                        functions: [function () {
                            // close page
                            Dom.closePage("textPage");
                            // quest progress
                            Dom.quests.active();
                        }],
                        roleRequirement: function () {
                            return Player.quests.questProgress.troubledWaters2Progress === 2;
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
				x: 1453,
				y: 2886,
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
                        role: "text",
                        chooseText: "Ask about a <b>translator</b>.",
                        chat: `<b>Translator</b>? No. But I do have some of the best and most authentic marks you'll find for miles around.<br><br>
						Talk to some other <strong>shopkeepers</strong> to see if they have any.`,
                        buttons: ["Leave"],
                        showCloseButton: false,
                        forceChoose: true, // forces choose dom
                        functions: [function () {
                            // close page
                            Dom.closePage("textPage");
                            // quest progress
                            Dom.quests.active();
                        }],
                        roleRequirement: function () {
                            return Player.quests.questProgress.troubledWaters2Progress === 2;
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
				x: 2908,
				y: 2635,
				readImage: "mailbox",
				unreadImage: "mailboxUnread",
				name: "Mailbox",
			},
		],

		things: [
			{x: [5887], y: [1872], image: 'catBowlEmpty', orderOffsetY: -6, name: 'Cat Bowl'},


			{x: 7126.9, y: 2021.4, image: 'cauldronEaglecrest', name: ''},
			{x: 6539.9, y: 2039.2, image: 'anvil', name: ''},
{x: 3747.5, y: 2561.9, z: -2, image: 'eaglecrestStatue', name: 'Eaglecrest Statue'},
{x: 3747.5, y: 2104.9, z: 2, image: 'eaglecrestStatueHead', name: 'Eaglecrest Statue'},
{x: 8306.1, y: 1658.7, image: 'gargoyleLeft', name: 'Monastery Gargoyle', orderOffsetY: 100,},
{x: 10474.3, y: 1581.6, image: 'gargoyleRight', name: 'Monastery Gargoyle', orderOffsetY: 100,},
{x: [8941.2, 9427.7, 9842, 10055.4], y: [2755.6, 3060.4, 2800, 2315.6], image: 'gravestone1', name: 'Gravestone'},
{x: [9394.4, 10325.8, 10324.7], y: [2735.1, 2167.8, 3069.1], image: 'gravestone2', name: 'Gravestone'},
{x: [9854.3, 10177.2, 9997, 10304.1, 9093.2], y: [3114.7, 2768, 2592.6, 2531.2, 3021.7], image: 'gravestone3', name: 'Gravestone'},
{
	// id: 2,
	// if this id is changed, change the onRainStart function as well
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





			{x: [2256, 2023.5, 1805.3, 2401, 5255.2, 5484.3, 5651.1, 5107.8, 5312.8], y: [1375.1, 1569, 1785.4, 1639.1, 1353.4, 1584.4, 1815.5, 1616.8, 1825.7], image: 'hayWagon', name: 'hayWagon'},


			{x: [2552.1, 2486.4, 3215.8, 3280.5, 5343, 5381.1, 2209.7, 2183.1, 994.2, 1058.4, 621.4, 384.7, 3532.9, 3600.7, 3951.7, 3382.4, 3437.4], y: [1414.1, 1345.9, 1371.6, 1286.8, 1212.9, 1236.4, 1158, 1181, 1955.3, 1882.7, 2009.8, 1956.6, 2309.5, 2309.5, 2498.2, 2676.7, 2676.7], image: 'barrel', orderOffsetY: -6, name: 'barrel'},
			{x: 75.8, y: 281.2, image: 'gingerbreadHouse', name: 'Gingerbread House', canBeShown: function (){return Event.event === "Christmas"}},
			{x: 718.9, y: 818.2, image: 'gingerbreadHouse', name: 'Gingerbread House', canBeShown: function (){return Event.event === "Christmas"}},
			{x: 1295.2, y: 1671.8, image: 'gingerbreadHouse', name: 'Gingerbread House', canBeShown: function (){return Event.event === "Christmas"}},
			{
				x: 2634,
				y: 3456,
				orderOffsetY: -20,
				image: "cart2",
			},
			{
				x: 5341,
				y: 3420,
				orderOffsetY: -20,
				image: "cart2",
			},
			{
				x: 2184,
				y: 3304,
				orderOffsetY: -20,
				image: "cart3",
			},
			{
				x: 4870,
				y: 3466,
				orderOffsetY: -20,
				image: "cart1",
			},
			{
				x: 3742,
				y: 1624,
				orderOffsetY: -30,
				image: "fountain1",
				name: "Water Fountain",
				// animation!
				animation: {
					type: "carousel",
					frameTime: 300,
					images: ["fountain1", "fountain2", "fountain3", "fountain4"],
				},
			},
			// border lampposts
			{
				x: [3142.6, 4360.4, 5079.2, 2414.6, 2444, 5069.6, 5052.5, 2439.2, 2983.9, 4457.9, 3523.3, 3979.3],
				y: [1565.3, 1565.3, 1857.6, 1857.6, 2368.2, 2368.2, 2911.4, 2911.4, 1897.3, 1897.3, 1526.3, 1526.3],
				imageDay: "eaglecrestLampDay",
				imageNight: "eaglecrestLampNight",
				name: "Eaglecrest Lamp",
			},

			{
				x: 4497,
				y: 1350,
				image: "closedSign",
				name: "Closed Notice",
				canBeShown: function () {
					return !Player.quests.completedQuestArray.includes("Overdraft");
				},
			},
			{x: 2123, y: 1833, image: 'marketStall', name: 'Billie the Beetroot Merchant', showNameTag: true},
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
					{
                        role: "text",
                        chooseText: "Ask about a <b>translator</b>.",
                        chat: `<b>Translator</b>? No. But I do have some of the best and most authentic marks you'll find for miles around. Talk to some other <strong>shopkeepers</strong> to see if they have any.`,
                        buttons: ["Leave"],
                        showCloseButton: false,
                        forceChoose: true, // forces choose dom
                        functions: [function () {
                            // close page
                            Dom.closePage("textPage");
                            // quest progress
                            Dom.quests.active();
                        }],
                        roleRequirement: function () {
                            return Player.quests.questProgress.troubledWaters2Progress === 2;
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
			if (Player.quests.activeQuestArray.includes("Overdraft") && Player.quests.npcProgress.eaglecrest[2] === 0) {
				Dom.chat.insert(Dom.chat.say("Head Banker Jonos", "Uhhh can't you see we're closed?"));
			}
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
				destinationX: 4649,
				destinationY: 1424,
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
                        role: "text",
                        chooseText: "Ask about a <b>translator</b>.",
                        chat: "I'm afraid we don't have any. Unless you have one in your bank storage I'm afraid I can't help you.",
                        buttons: ["Leave"],
                        showCloseButton: false,
                        forceChoose: true, // forces choose dom
                        functions: [function () {
                            // close page
                            Dom.closePage("textPage");
                            // quest progress
                            Dom.quests.active();
                        }],
                        roleRequirement: function () {
                            return Player.quests.questProgress.troubledWaters2Progress === 2;
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
                        role: "text",
                        chooseText: "Ask about a <b>translator</b>.",
                        chat: `A <b>translator</b>? What would you need that for?<br><br>
						Unless you have one in your bank storage I'm afraid I can't help you. Try asking some other <b>shopkeepers</b>.`,
                        buttons: ["Leave"],
                        showCloseButton: false,
                        forceChoose: true, // forces choose dom
                        functions: [function () {
                            // close page
                            Dom.closePage("textPage");
                            // quest progress
                            Dom.quests.active();
                        }],
                        roleRequirement: function () {
                            return Player.quests.questProgress.troubledWaters2Progress === 2;
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
                        role: "text",
                        chooseText: "Ask about a <b>translator</b>.",
                        chat: "I'm afraid we don't have any. Unless you have one in your bank storage I'm afraid I can't help you.",
                        buttons: ["Leave"],
                        showCloseButton: false,
                        forceChoose: true, // forces choose dom
                        functions: [function () {
                            // close page
                            Dom.closePage("textPage");
                            // quest progress
                            Dom.quests.active();
                        }],
                        roleRequirement: function () {
                            return Player.quests.questProgress.troubledWaters2Progress === 2;
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
                        role: "text",
                        chooseText: "Ask about a <b>translator</b>.",
                        chat: "I'm afraid we don't have any. Unless you have one in your bank storage I'm afraid I can't help you.",
                        buttons: ["Leave"],
                        showCloseButton: false,
                        forceChoose: true, // forces choose dom
                        functions: [function () {
                            // close page
                            Dom.closePage("textPage");
                            // quest progress
                            Dom.quests.active();
                        }],
                        roleRequirement: function () {
                            return Player.quests.questProgress.troubledWaters2Progress === 2;
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
				destinationX: 2849.6,
				destinationY: 1423.7,
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
							{item: Items.food[9], cost: 0, eventRequirement: "Antorax", quest: true, unconsumable: true, removeOnAbandon: "Hungry Taverners"}, // Birthday Cake (changed every year)
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
							{item: Items.food[9], cost: 7, eventRequirement: "Antorax"}, // Birthday Cake (changed every year)
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
                        role: "text",
                        chooseText: "Ask about a <b>translator</b>.",
                        chat: `<strong>Rhus</strong>: Why would a tavern have a <b>translator</b>!<br>
						<strong>Jak</strong>: Sorry, we don't have one, try asking some of the <strong>shopkeepers</strong>.`,
                        buttons: ["Leave"],
                        showCloseButton: false,
                        forceChoose: true, // forces choose dom
                        functions: [function () {
                            // close page
                            Dom.closePage("textPage");
                            // quest progress
                            Dom.quests.active();
                        }],
                        roleRequirement: function () {
                            return Player.quests.questProgress.troubledWaters2Progress === 2;
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
                        role: "text",
                        chooseText: "Ask about a <b>translator</b>.",
                        chat: `I don't have 'un, but I do have the finest steel o' Eaglecrest! You could ask some other <strong>shopkeepers</strong>.<br><br>
						<em>Oh, you're leavin' already</em>.`,
                        buttons: ["Leave"],
                        showCloseButton: false,
                        forceChoose: true, // forces choose dom
                        functions: [function () {
                            // close page
                            Dom.closePage("textPage");
                            // quest progress
                            Dom.quests.active();
                        }],
                        roleRequirement: function () {
                            return Player.quests.questProgress.troubledWaters2Progress === 2;
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
				[350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
					{
                        role: "text",
                        chooseText: "Ask about a <b>translator</b>.",
                        chat: `Noooooo! Unfortunately I don't have one! You could ask the other <strong>shopkeepers</strong>, I'm sure one of them will have one!`,
                        buttons: ["Leave"],
                        showCloseButton: false,
                        forceChoose: true, // forces choose dom
                        functions: [function () {
                            // close page
                            Dom.closePage("textPage");
                            // quest progress
                            Dom.quests.active();
                        }],
                        roleRequirement: function () {
                            return Player.quests.questProgress.troubledWaters2Progress === 2;
                        },
                    },
					{
                        role: "text",
                        chooseText: "Give blueprint to <strong>Alchemist Tamtam</strong>.",
                        chat: `Not suuuuuure what I can do with this! This looks more like a fish than a device or alchemy ingrediant!<br><br>
						Maybe talk to <strong>Fisherman Tobenam</strong> and see if he can do something with it!`,
                        buttons: ["Leave"],
                        showCloseButton: false,
                        forceChoose: true, // forces choose dom
                        functions: [function () {
                            // close page
                            Dom.closePage("textPage");
                            // quest progress
							Player.quests.questProgress.troubledWaters2Progress = 4;
                            Dom.quests.active();
                        }],
                        roleRequirement: function () {
                            return Player.quests.questProgress.troubledWaters2Progress === 3;
                        },
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
					{
                        role: "text",
                        chooseText: "Ask about a <b>translator</b>.",
                        chat: `A <b>translator?</b> I have things much greater!<br><br>
						But I also have something that you could be looking for. Here's a <b>blueprint</b> which I found while trying to find some more wares to sell. I was going to bring it to <strong>Alchemist Tamtam</strong> later, but it seems it could be more useful to you.<br><br>
						Try bringing it to <strong>Alchemist Tamtam</strong> and see if he can build the <b>translator</b> for you!<br><br>
						Gold? No need, take it for free. Although, make sure to buy some of my wares later!`,
                        buttons: ["Leave"],
                        showCloseButton: false,
                        forceChoose: true, // forces choose dom
                        functions: [function () {
                            // close page
                            Dom.closePage("textPage");
                            // quest progress
							if (Dom.inventory.checkSpace() > 0)
							{
								Player.quests.questProgress.troubledWaters2Progress = 3;
	                            Dom.quests.active();
								//give quest item
								Dom.inventory.give(Items.item[74]);
							}
							else {
								//say users inventory is full
								Dom.chat.insert("<strong>Shopkeeper Barda</strong>: Unless the cards have bluffed... your inventory is stuffed. Come back when you have more space.");
							}
                        }],
                        roleRequirement: function () {
                            return Player.quests.questProgress.troubledWaters2Progress === 2;
                        },
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

			// if they are holding old rusted staff, they get kicked out
			if (Player.inventory.weapon.type === "staff" && Player.inventory.weapon.id === 16) {
				Game.setTimeout(Game.statusEffects.stun.bind(Game.statusEffects), 1000, {target: Game.hero, time: 3.5});
				Dom.chat.insert(Dom.chat.say("Priestess Ronson", "You there! What's that you're holding?"), 500);
				Dom.chat.insert(Dom.chat.say("Priestess Ronson", "By the Pantheon, what are you doing!? This is hallowed ground, no place for a thing like that!"), 2000);
				Game.setTimeout(Game.loadArea.bind(Game), 4000, ["eaglecrestGraveyard", {x: 2010, y: 450}]);
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

		isIcy: function() {
			return Event.event === "Christmas";
		},

		mapData: {
			origin: {x: 240, y: 120},
			cols: 128,
			rows: 105,
			tsize: 60,
			tilesPerRow: 8,
			solidTiles: [1, 2, 3, 6, 7, 9, 10, 11, 13, 15, 17, 18, 19, 20, 21, 23, 25, 26, 27, 28, 29, 31, 33, 34, 35, 36, 37, 38, 39, 42, 43, 44, 45, 46, 47, 53, 55, 61, 65, 69, 70, 73, 77, 82, 83, 89, 90, 97, 98, 123, 131, 150, 151, 152, 200, 208, 269, 270, 271],
			dayTiles: [11, 27, 34, 42, 7], // windows and lights
			nightTiles: [3, 19, 2, 18, 15],
			pathTiles: [5, 12, 41, 50, 51, 57, 58, 59, 60, 76, 86, 87, 88, 91, 92, 93, 99, 107, 108, 109, 110, 111, 113, 115, 117, 118, 119, 121, 125, 126, 127, 129, 133, 134, 135, 137, 138, 139, 140, 141, 147, 148, 149],
			waterTiles: [32, 40, 48, 112, 120, 128],
			iceTiles: [32, 40, 48],
			tallGrassBottoms: [215, -215], // tall grass (slows player)
			objectTiles: [142, 196, 197], // top of barrel, fences, (cattails are 136 and 144 but picking object flowers, cattails etc doesn't work yet)
			transparentTiles: [94, 95, 96, 102, 103, 104, 114, 116, 122, 124, 130, 132, 136, 144], // these tiles should be ignored when considering water etc, even when they're at the front of the canvas
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
							channelTime: 1000, itemType: "item", itemId: 68, channelText: "Flower picking"
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
							channelTime: 1000, itemType: "item", itemId: 32, channelText: "Flower picking"
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
							channelTime: 1000, itemType: "item", itemId: 31, channelText: "Flower picking"
						},
					},
				},
				{
					tile: 239,
					ySpacing: 20,
					xSpacing: -6,
					name: "Lavender",
					objectProperties: {
						canBePickedUp: {
							channelTime: 1000, itemType: "item", itemId: 30, channelText: "Flower picking"
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
							channelTime: 1000, itemType: "item", itemId: 67, channelText: "Flower picking"
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
							channelTime: 1000, itemType: "item", itemId: 66, channelText: "Flower picking"
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
							channelTime: 1000, itemType: "item", itemId: 65, channelText: "Flower picking"
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
							channelTime: 1000, itemType: "item", itemId: 64, channelText: "Flower picking"
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
							channelTime: 1000, itemType: "item", itemId: 63, channelText: "Flower picking"
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
			layers: [
				[40, 32, 40, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 32, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 32, 32, 32, 32, 32, 32, 32, 32, 32, 0, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            40, 40, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 112, 32, 32, 32, 32, 32, 32, 32, 32, 40, 49, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 191, 191, 191, 191, 191, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 112, 112, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 40, 32, 32, 66, 32, 32, 66, 81, 66, 66, 67, 66, 66, 66, 66, 49, 49, 49, 49, 49, 66, 75, 66, 49, 49, 32, 32, 32, 32, 32, 40, 32, 32, 32, 32, 40, 32, 49, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 32, 32, 40, 32, 32, 32, 32, 32, 32, 32, 40, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 191, 191, 191, 191, 191, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 269, 269, 269, 269, 269, 112, 112, 32, 32, 32, 32, 112,
            32, 32, 32, 32, 32, 32, 66, 49, 49, 49, 49, 49, 49, 66, 75, 66, 66, 49, 49, 49, 49, 66, 66, 66, 67, 49, 49, 32, 32, 32, 32, 40, 32, 40, 40, 32, 40, 49, 49, 11, 43, 43, 43, 11, 43, 43, 43, 11, 43, 43, 43, 11, 43, 89, 90, 43, 11, 43, 43, 43, 11, 43, 43, 43, 11, 43, 43, 43, 11, 49, 32, 112, 32, 32, 32, 32, 32, 32, 32, 40, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 191, 191, 66, 66, 191, 191, 191, 32, 32, 32, 32, 32, 32, 32, 32, 112, 112, 32, 269, 269, 32, 32, 49, 269, 269, 112, 112, 112, 32, 32, 112,
            32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 81, 49, 49, 49, 49, 49, 49, 66, 49, 49, 49, 49, 32, 32, 40, 32, 40, 40, 32, 40, 49, 49, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 97, 98, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 49, 32, 40, 32, 32, 32, 32, 32, 32, 40, 40, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 191, 191, 66, 66, 66, 32, 191, 32, 32, 32, 32, 32, 32, 32, 112, 112, 49, 277, 269, 66, 66, 49, 49, 49, 269, 278, 112, 112, 112, 32, 112,
            32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 40, 32, 40, 40, 32, 40, 49, 49, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 105, 106, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 49, 32, 40, 32, 32, 32, 32, 32, 32, 40, 40, 32, 32, 32, 32, 32, 32, 32, 49, 49, 49, 66, 32, 32, 32, 32, 32, 191, 66, 66, 66, 191, 191, 191, 191, 191, 32, 32, 32, 32, 32, 112, 112, 112, 49, 66, 81, 66, 49, 66, 49, 49, 49, 49, 49, 112, 112, 32, 112,
            32, 32, 32, 32, 49, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 49, 49, 49, 49, 49, 32, 40, 32, 40, 40, 32, 40, 49, 49, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 118, 117, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 49, 32, 40, 32, 32, 32, 32, 32, 32, 112, 40, 32, 32, 32, 191, 191, 49, 49, 49, 49, 49, 49, 66, 32, 32, 32, 32, 191, 66, 191, 191, 191, 191, 191, 191, 32, 32, 32, 32, 32, 32, 112, 32, 49, 49, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 0, 32, 32, 112,
            32, 32, 32, 32, 49, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 188, 49, 49, 49, 49, 49, 49, 40, 32, 40, 40, 32, 40, 49, 49, 49, 49, 49, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 118, 117, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 40, 32, 32, 32, 32, 32, 32, 40, 32, 32, 32, 191, 191, 49, 49, 49, 49, 49, 49, 49, 49, 191, 32, 32, 32, 191, 191, 191, 191, 0, 0, 191, 191, 191, 32, 32, 32, 32, 32, 32, 49, 49, 49, 32, 66, 66, 66, 49, 66, 66, 66, 32, 66, 0, 32, 32, 112,
            32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 32, 32, 32, 32, 40, 49, 49, 49, 49, 49, 66, 66, 66, 66, 81, 66, 49, 49, 49, 49, 49, 118, 117, 49, 49, 49, 49, 49, 66, 66, 49, 49, 49, 49, 49, 49, 49, 32, 32, 40, 32, 32, 32, 32, 32, 32, 40, 40, 40, 191, 191, 191, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 49, 191, 191, 191, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49, 49, 49, 32, 66, 81, 66, 49, 66, 66, 66, 32, 66, 0, 32, 32, 112,
            32, 32, 32, 32, 32, 66, 66, 49, 49, 49, 127, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 40, 40, 40, 40, 40, 40, 99, 99, 99, 108, 49, 49, 67, 66, 66, 66, 66, 66, 66, 49, 49, 49, 118, 117, 49, 49, 49, 49, 66, 66, 66, 81, 66, 66, 49, 49, 49, 49, 32, 40, 40, 32, 32, 32, 32, 32, 32, 40, 40, 40, 191, 191, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 191, 191, 191, 191, 49, 40, 40, 40, 40, 32, 32, 32, 32, 32, 32, 49, 32, 32, 66, 66, 66, 49, 66, 66, 66, 32, 32, 32, 32, 32, 32,
            32, 32, 32, 32, 32, 81, 67, 66, 49, 49, 126, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 40, 40, 40, 40, 40, 40, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 118, 117, 49, 49, 66, 66, 67, 66, 66, 66, 66, 49, 49, 49, 49, 49, 32, 40, 40, 32, 32, 32, 32, 32, 32, 40, 40, 40, 191, 191, 191, 49, 49, 191, 191, 66, 49, 191, 49, 191, 32, 32, 32, 32, 191, 191, 191, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49, 32, 32, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32,
            32, 32, 32, 32, 32, 75, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 49, 49, 127, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 119, 117, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 49, 49, 32, 32, 40, 40, 32, 32, 32, 32, 32, 32, 40, 40, 40, 191, 191, 191, 191, 191, 191, 191, 191, 191, 191, 191, 32, 32, 32, 32, 32, 32, 32, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 112, 32, 32, 32, 32, 40, 40, 32, 32, 32, 49, 49, 32, 32, 32, 32, 32, 32,
            32, 32, 112, 32, 32, 32, 221, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 32, 32, 32, 32, 40, 49, 49, 32, 32, 40, 40, 40, 40, 40, 40, 40, 40, 49, 118, 119, 119, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 133, 49, 49, 32, 32, 32, 32, 66, 66, 66, 32, 32, 32, 32, 32, 49, 40, 40, 32, 32, 32, 32, 32, 32, 40, 32, 32, 49, 191, 191, 191, 191, 40, 40, 32, 32, 32, 32, 32, 32, 112, 32, 32, 32, 32, 32, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 32, 32, 112, 112, 32, 32, 32, 32, 49, 112, 112, 32, 32, 32, 112,
            32, 32, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 40, 32, 32, 40, 32, 32, 32, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49, 49, 66, 32, 32, 32, 32, 32, 32, 32, 32, 40, 40, 32, 32, 32, 32, 32, 32, 40, 32, 32, 40, 191, 191, 40, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 112, 32, 32, 32, 112, 112, 32, 32, 32, 112,
            32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 40, 112, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 112, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 40, 40, 40, 32, 32, 32, 32, 32, 32, 40, 32, 40, 191, 191, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 112, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 112,
            32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 40, 40, 40, 32, 32, 32, 40, 32, 32, 32, 32, 32, 191, 32, 32, 32, 32, 32, 32, 32, 32, 32, 191, 191, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 40, 40, 40, 32, 32, 32, 32, 32, 32, 32, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 40, 32, 40, 0, 32, 32, 32, 32, 32, 112, 32, 32, 32, 32, 32, 32, 32, 0, 112, 0, 32, 32, 191, 191, 191, 191, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 222, 222, 32, 32, 32, 32, 32, 32,
            32, 32, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49, 49, 32, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 40, 32, 32, 32, 32, 112, 0, 0, 0, 0, 32, 32, 0, 32, 32, 78, 0, 49, 32, 49, 49, 0, 0, 32, 32, 32, 191, 191, 191, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 222, 222, 32, 32, 32, 32, 32, 32,
            32, 32, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 40, 40, 40, 40, 40, 49, 118, 119, 117, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 49, 32, 32, 32, 32, 32, 40, 32, 32, 32, 32, 0, 0, 49, 49, 49, 49, 49, 49, 49, 32, 32, 49, 49, 32, 32, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 281, 281, 281, 281, 32, 32, 32, 32,
            32, 32, 49, 32, 32, 32, 32, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 49, 49, 32, 32, 32, 32, 32, 32, 66, 81, 66, 49, 49, 40, 40, 40, 40, 40, 40, 40, 49, 118, 119, 117, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 49, 66, 66, 67, 49, 49, 49, 49, 40, 40, 32, 32, 0, 0, 49, 32, 32, 32, 32, 32, 66, 75, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 66, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 281, 281, 281, 281, 32, 32, 32, 32,
            32, 32, 32, 32, 32, 32, 32, 66, 67, 66, 66, 32, 32, 32, 32, 32, 32, 67, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 66, 49, 32, 32, 32, 32, 32, 40, 40, 49, 118, 119, 117, 49, 49, 66, 66, 66, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 49, 49, 49, 66, 66, 49, 49, 221, 32, 32, 32, 0, 0, 32, 32, 32, 66, 66, 32, 32, 32, 66, 49, 49, 112, 112, 112, 49, 49, 49, 49, 66, 32, 66, 66, 32, 32, 32, 32, 32, 32, 32, 191, 191, 191, 191, 49, 48, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 48, 32, 32, 32, 281, 281, 281, 32, 32, 32, 32,
            32, 32, 32, 32, 32, 32, 32, 66, 66, 75, 66, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 49, 49, 119, 119, 117, 49, 49, 49, 66, 66, 66, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 0, 32, 32, 32, 66, 75, 66, 66, 66, 32, 32, 32, 49, 112, 112, 112, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 191, 191, 191, 191, 191, 49, 48, 48, 32, 32, 32, 32, 32, 32, 32, 49, 32, 32, 32, 32, 32, 282, 282, 281, 281, 281, 32, 32, 32, 32,
            32, 32, 32, 32, 32, 32, 32, 49, 66, 66, 66, 49, 32, 32, 32, 32, 66, 49, 49, 49, 49, 110, 99, 99, 99, 99, 99, 99, 99, 99, 99, 32, 32, 32, 32, 32, 32, 99, 99, 119, 119, 117, 49, 49, 49, 66, 81, 66, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 40, 40, 32, 32, 0, 32, 32, 49, 66, 49, 66, 81, 66, 66, 32, 32, 32, 112, 112, 32, 32, 32, 32, 32, 32, 32, 66, 32, 32, 32, 32, 32, 32, 32, 191, 191, 191, 191, 191, 49, 49, 32, 32, 32, 32, 32, 32, 49, 112, 112, 112, 32, 32, 32, 32, 32, 282, 282, 222, 281, 32, 32, 32, 32,
            32, 32, 32, 32, 32, 32, 32, 49, 49, 66, 66, 49, 32, 112, 32, 32, 49, 67, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 49, 49, 119, 119, 117, 49, 49, 49, 49, 66, 66, 66, 49, 49, 49, 49, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 49, 191, 191, 191, 191, 191, 49, 49, 32, 32, 32, 32, 32, 112, 112, 112, 112, 112, 32, 32, 32, 32, 32, 222, 222, 222, 281, 32, 32, 32, 32,
            32, 32, 32, 32, 32, 32, 32, 49, 49, 66, 67, 32, 32, 32, 32, 32, 49, 66, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 40, 40, 40, 40, 40, 49, 49, 118, 119, 117, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 49, 49, 49, 66, 75, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 66, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 110, 99, 99, 32, 32, 32, 32, 32, 99, 99, 99, 108, 49, 191, 191, 191, 191, 32, 32, 32, 112, 112, 49, 49, 49, 112, 112, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 32, 32, 32, 32, 32, 32, 81, 49, 66, 75, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 91, 49, 49, 49, 32, 32, 32, 32, 32, 32, 40, 40, 40, 40, 40, 40, 49, 49, 118, 119, 117, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 49, 81, 66, 66, 49, 32, 32, 32, 32, 32, 32, 49, 49, 49, 66, 66, 81, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 91, 49, 49, 32, 32, 32, 32, 32, 49, 49, 49, 91, 49, 191, 191, 191, 191, 32, 32, 112, 112, 32, 281, 281, 281, 112, 112, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            112, 40, 32, 32, 32, 32, 32, 32, 49, 49, 66, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 91, 49, 49, 32, 32, 66, 66, 49, 49, 40, 40, 40, 40, 40, 40, 40, 49, 49, 118, 119, 119, 125, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 66, 66, 66, 49, 49, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 148, 99, 99, 99, 99, 99, 99, 109, 49, 49, 32, 32, 32, 32, 32, 49, 49, 49, 91, 49, 191, 191, 191, 191, 32, 32, 32, 112, 281, 281, 49, 49, 49, 112, 112, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            40, 40, 32, 32, 40, 40, 32, 32, 40, 40, 40, 32, 40, 32, 32, 40, 32, 32, 49, 49, 49, 91, 49, 49, 32, 49, 49, 49, 66, 49, 40, 40, 40, 40, 40, 40, 49, 49, 49, 126, 119, 119, 119, 99, 99, 99, 99, 99, 99, 108, 49, 49, 49, 49, 32, 32, 32, 32, 32, 66, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 110, 99, 99, 99, 109, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 191, 191, 110, 109, 49, 191, 191, 191, 191, 32, 32, 32, 112, 281, 281, 49, 49, 49, 112, 112, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            40, 40, 32, 32, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 40, 32, 32, 40, 40, 40, 40, 40, 40, 32, 40, 40, 49, 49, 49, 40, 40, 40, 40, 40, 40, 49, 49, 49, 49, 118, 119, 117, 49, 49, 49, 49, 49, 49, 111, 99, 99, 108, 49, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 49, 49, 49, 49, 110, 99, 99, 99, 109, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 191, 191, 91, 49, 49, 49, 49, 49, 49, 32, 32, 32, 112, 281, 281, 49, 49, 49, 49, 112, 112, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            40, 40, 32, 32, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 49, 49, 49, 49, 118, 119, 117, 49, 49, 49, 49, 49, 49, 49, 49, 49, 111, 99, 99, 32, 32, 32, 32, 99, 99, 99, 99, 99, 99, 32, 32, 32, 32, 32, 99, 99, 99, 99, 109, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 191, 191, 91, 49, 49, 49, 49, 49, 49, 32, 32, 32, 112, 281, 281, 49, 49, 49, 49, 112, 112, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            40, 40, 32, 32, 32, 32, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 66, 66, 49, 49, 126, 119, 119, 125, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 49, 49, 49, 221, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 191, 191, 91, 191, 191, 191, 191, 49, 49, 32, 32, 32, 112, 281, 281, 281, 49, 49, 32, 32, 112, 112, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            40, 40, 32, 32, 32, 32, 32, 32, 32, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 49, 66, 75, 49, 49, 118, 119, 119, 125, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 191, 191, 91, 191, 191, 191, 191, 49, 32, 32, 32, 32, 112, 49, 281, 281, 49, 49, 32, 32, 32, 112, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            40, 40, 32, 32, 32, 32, 32, 32, 32, 40, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 49, 66, 66, 66, 49, 126, 119, 119, 117, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 66, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 191, 191, 91, 191, 191, 191, 191, 49, 32, 32, 32, 32, 112, 281, 281, 281, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            40, 40, 32, 32, 112, 32, 32, 32, 49, 66, 49, 49, 49, 221, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 49, 66, 66, 66, 49, 49, 118, 119, 119, 125, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 66, 67, 49, 49, 49, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 66, 75, 49, 49, 49, 32, 32, 32, 32, 32, 32, 191, 191, 91, 191, 191, 191, 191, 49, 32, 32, 32, 32, 32, 281, 281, 281, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 40, 32, 32, 32, 32, 32, 49, 66, 66, 49, 49, 49, 49, 49, 75, 49, 49, 66, 66, 49, 91, 49, 66, 66, 49, 49, 49, 49, 49, 32, 40, 40, 40, 40, 49, 49, 66, 67, 66, 49, 49, 126, 119, 119, 117, 49, 49, 49, 49, 49, 66, 49, 32, 32, 32, 32, 32, 49, 49, 66, 66, 49, 49, 32, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 66, 66, 66, 67, 66, 32, 32, 66, 32, 32, 32, 32, 32, 49, 49, 32, 32, 32, 32, 32, 32, 191, 191, 91, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 281, 281, 281, 49, 32, 32, 32, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 32, 32, 32, 32, 32, 32, 49, 66, 67, 66, 49, 49, 49, 49, 66, 66, 66, 66, 66, 49, 91, 49, 67, 66, 49, 49, 49, 32, 32, 32, 40, 40, 40, 40, 40, 49, 49, 66, 66, 49, 49, 49, 126, 119, 119, 125, 49, 49, 49, 66, 66, 32, 32, 32, 32, 32, 32, 49, 49, 49, 66, 67, 66, 32, 32, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 81, 66, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49, 49, 111, 108, 49, 49, 49, 32, 32, 32, 32, 32, 32, 281, 281, 32, 281, 281, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 32, 32, 32, 32, 32, 49, 49, 66, 66, 67, 66, 49, 49, 49, 66, 81, 66, 66, 49, 49, 91, 49, 49, 49, 49, 66, 49, 32, 32, 40, 40, 40, 40, 40, 40, 49, 49, 49, 66, 49, 49, 49, 49, 118, 119, 117, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 32, 40, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 32, 32, 49, 49, 49, 49, 112, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49, 49, 91, 49, 49, 32, 32, 32, 32, 32, 32, 32, 281, 281, 281, 281, 281, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 32, 32, 32, 32, 32, 49, 49, 66, 67, 75, 66, 66, 49, 49, 49, 49, 67, 66, 49, 49, 91, 49, 49, 49, 49, 67, 32, 32, 49, 40, 40, 40, 40, 40, 40, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 32, 32, 32, 32, 32, 100, 100, 100, 40, 40, 32, 32, 32, 32, 112, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 40, 40, 40, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49, 91, 49, 32, 32, 32, 32, 32, 32, 32, 32, 281, 281, 281, 281, 281, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 32, 32, 40, 32, 32, 49, 49, 49, 66, 67, 66, 66, 49, 49, 49, 49, 66, 66, 49, 49, 91, 49, 49, 66, 49, 49, 32, 32, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 32, 32, 40, 40, 40, 32, 32, 100, 100, 100, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 112, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 32, 32, 32, 40, 32, 32, 32, 32, 281, 281, 281, 281, 281, 40, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 32, 32, 40, 32, 49, 49, 49, 49, 66, 66, 75, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 66, 66, 49, 32, 49, 49, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 32, 32, 40, 40, 32, 32, 32, 40, 40, 40, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 112, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 32, 40, 281, 281, 281, 281, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 81, 66, 66, 49, 49, 66, 66, 49, 49, 49, 49, 91, 49, 66, 67, 67, 49, 32, 32, 49, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 112, 40, 40, 40, 40, 40, 40, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 112, 32, 281, 281, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 32, 32, 112, 32, 49, 49, 49, 49, 49, 66, 66, 66, 49, 49, 75, 66, 49, 49, 49, 110, 109, 49, 49, 66, 66, 49, 32, 32, 66, 49, 40, 40, 40, 40, 40, 40, 40, 40, 112, 40, 40, 32, 40, 40, 40, 40, 40, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49, 49, 49, 112, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 112, 32, 32, 281, 281, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 64,
            32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 75, 81, 81, 49, 49, 49, 66, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 32, 75, 49, 40, 40, 40, 40, 40, 32, 32, 32, 32, 32, 32, 32, 49, 118, 119, 117, 32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 112, 49, 49, 49, 32, 32, 49, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 112, 32, 32, 32, 32, 32, 32, 281, 281, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 32, 32, 32, 32, 32, 49, 49, 49, 66, 66, 67, 66, 49, 49, 66, 75, 66, 49, 49, 91, 49, 66, 66, 66, 49, 49, 49, 32, 32, 49, 40, 40, 112, 40, 40, 49, 49, 32, 32, 32, 32, 49, 49, 118, 119, 117, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 49, 49, 49, 32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 112, 32, 32, 281, 281, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 32, 32, 32, 32, 32, 49, 49, 66, 67, 66, 75, 66, 49, 49, 66, 66, 49, 49, 49, 91, 49, 66, 81, 66, 49, 49, 49, 49, 32, 32, 40, 40, 40, 40, 40, 49, 32, 32, 32, 49, 49, 49, 49, 118, 119, 117, 49, 49, 32, 32, 32, 32, 32, 49, 49, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 93, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 112, 112, 32, 281, 281, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 81, 75, 66, 49, 49, 49, 49, 49, 49, 49, 91, 49, 66, 75, 66, 49, 49, 49, 66, 32, 32, 32, 40, 40, 40, 40, 32, 32, 32, 49, 49, 49, 49, 49, 118, 119, 117, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 49, 49, 49, 49, 49, 112, 49, 49, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 93, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 49, 112, 32, 32, 281, 281, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 32, 40, 40, 32, 32, 49, 49, 49, 49, 66, 81, 66, 49, 49, 49, 49, 49, 49, 49, 91, 49, 66, 66, 66, 67, 66, 49, 67, 49, 32, 32, 40, 40, 40, 32, 32, 32, 66, 49, 49, 49, 49, 49, 118, 119, 117, 49, 49, 49, 49, 66, 75, 66, 49, 49, 49, 49, 49, 49, 49, 49, 66, 66, 67, 66, 66, 66, 49, 49, 32, 32, 32, 32, 49, 49, 49, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 49, 32, 49, 281, 281, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 32, 40, 40, 32, 32, 49, 49, 49, 66, 75, 66, 67, 66, 66, 49, 67, 49, 49, 110, 109, 49, 49, 75, 66, 66, 66, 49, 49, 49, 49, 32, 40, 40, 40, 32, 32, 67, 66, 81, 49, 49, 49, 127, 119, 119, 133, 49, 49, 49, 49, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 66, 66, 66, 75, 66, 66, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 67, 66, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 93, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 112, 32, 32, 32, 49, 281, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49,
            32, 32, 112, 40, 32, 32, 32, 32, 49, 66, 66, 66, 66, 66, 66, 49, 49, 49, 49, 91, 49, 49, 66, 67, 81, 66, 66, 49, 49, 49, 32, 32, 40, 40, 40, 40, 32, 66, 66, 66, 49, 49, 49, 118, 119, 117, 49, 49, 49, 49, 66, 75, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 66, 67, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 75, 66, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 49, 221,
            32, 40, 40, 40, 32, 32, 32, 32, 32, 32, 32, 32, 32, 66, 66, 49, 49, 49, 49, 91, 49, 49, 66, 66, 66, 75, 66, 49, 49, 49, 32, 32, 32, 40, 40, 40, 40, 66, 66, 66, 49, 49, 49, 118, 119, 117, 49, 49, 49, 49, 66, 66, 67, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 67, 66, 66, 66, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 49, 49, 110, 99, 115, 99, 141, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49, 49,
            32, 32, 40, 40, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 40, 40, 40, 66, 75, 66, 49, 49, 49, 118, 119, 117, 49, 49, 49, 49, 49, 66, 66, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 81, 66, 66, 66, 66, 66, 49, 49, 49, 110, 99, 87, 32, 32, 32, 32, 99, 107, 109, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 112, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49, 49,
            32, 32, 40, 40, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 40, 40, 40, 49, 81, 66, 66, 49, 49, 118, 119, 117, 49, 49, 49, 49, 49, 49, 66, 66, 67, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 66, 81, 66, 49, 49, 49, 91, 49, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 92, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 221, 49,
            32, 32, 40, 40, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 40, 40, 40, 40, 49, 66, 67, 66, 49, 49, 118, 119, 117, 49, 49, 221, 49, 49, 49, 49, 49, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 66, 75, 66, 49, 49, 49, 49, 91, 49, 32, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 221, 32, 32, 49, 49,
            49, 40, 40, 40, 32, 32, 32, 32, 49, 49, 66, 66, 66, 49, 49, 49, 49, 49, 110, 109, 49, 49, 66, 66, 66, 66, 66, 49, 49, 49, 49, 32, 32, 40, 40, 40, 40, 49, 49, 66, 66, 49, 49, 118, 119, 117, 49, 49, 49, 49, 49, 49, 49, 49, 49, 81, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 66, 66, 66, 49, 49, 49, 110, 109, 49, 32, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 221, 32, 32, 49, 221,
            49, 49, 40, 40, 32, 32, 49, 49, 49, 49, 66, 67, 75, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 66, 67, 75, 67, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 66, 75, 49, 49, 118, 119, 119, 125, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 112, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49, 49,
            49, 49, 40, 40, 32, 32, 49, 49, 49, 66, 67, 81, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 66, 66, 66, 66, 66, 66, 81, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 66, 67, 49, 49, 126, 119, 119, 117, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 110, 99, 99, 99, 99, 99, 99, 99, 99, 108, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 49, 49, 49, 111, 99, 115, 108, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49, 49,
            49, 49, 40, 40, 112, 32, 49, 49, 66, 75, 66, 66, 49, 49, 49, 49, 49, 110, 109, 49, 49, 49, 49, 49, 75, 66, 81, 66, 66, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 49, 66, 49, 49, 49, 118, 119, 117, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 110, 99, 99, 99, 109, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 49, 49,
            49, 49, 40, 40, 32, 32, 49, 67, 81, 66, 66, 75, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 66, 66, 66, 66, 66, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 49, 49, 49, 49, 49, 118, 119, 119, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 109, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 111, 99, 99, 99, 99, 108, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 93, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 49, 49,
            49, 49, 40, 40, 32, 32, 49, 66, 66, 67, 66, 66, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 66, 66, 81, 66, 75, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 49, 49, 49, 49, 49, 49, 118, 119, 119, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 49, 49, 49, 49, 49, 111, 99, 99, 99, 99, 99, 99, 99, 99, 119, 119, 125, 49, 32, 32, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 49, 49,
            49, 49, 40, 40, 32, 32, 49, 49, 66, 66, 66, 66, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 66, 66, 66, 66, 66, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 49, 49, 49, 49, 49, 49, 118, 119, 119, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 49, 49, 49, 66, 49, 49, 49, 49, 49, 49, 49, 49, 118, 119, 119, 49, 32, 32, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49,
            134, 134, 40, 40, 32, 32, 134, 134, 125, 66, 66, 127, 134, 134, 134, 134, 134, 119, 134, 134, 134, 134, 125, 66, 67, 66, 67, 66, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 127, 134, 134, 134, 134, 134, 119, 119, 119, 49, 49, 49, 49, 49, 66, 66, 66, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 66, 66, 67, 49, 49, 49, 49, 49, 49, 118, 119, 117, 49, 32, 32, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40,
            135, 135, 40, 40, 32, 32, 119, 119, 119, 134, 134, 119, 119, 135, 135, 135, 135, 119, 135, 135, 135, 119, 119, 134, 134, 134, 125, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 118, 119, 119, 119, 119, 119, 119, 119, 119, 49, 49, 49, 49, 66, 66, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 49, 66, 49, 49, 49, 49, 49, 118, 119, 117, 49, 32, 32, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 93, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            49, 49, 40, 40, 40, 40, 49, 126, 135, 135, 135, 135, 133, 49, 49, 49, 49, 91, 49, 49, 49, 126, 135, 135, 135, 119, 119, 134, 134, 134, 134, 134, 134, 40, 40, 40, 40, 40, 119, 119, 119, 135, 135, 135, 135, 135, 133, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            49, 49, 40, 40, 32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 126, 135, 135, 135, 135, 135, 135, 135, 40, 40, 40, 40, 40, 119, 119, 117, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            49, 49, 40, 40, 32, 32, 49, 49, 49, 49, 66, 49, 49, 49, 49, 49, 110, 109, 49, 49, 49, 49, 49, 49, 66, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 119, 119, 117, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            49, 49, 40, 40, 32, 32, 32, 49, 49, 49, 66, 66, 66, 66, 66, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 66, 66, 49, 49, 49, 49, 40, 40, 40, 40, 40, 118, 119, 117, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            40, 40, 32, 40, 32, 32, 32, 32, 49, 49, 75, 66, 66, 66, 66, 66, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 66, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 118, 119, 117, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 49, 49,
            32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 49, 49, 66, 67, 66, 49, 91, 49, 49, 49, 49, 66, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 32, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 49, 49,
            32, 32, 32, 32, 32, 32, 32, 40, 40, 40, 40, 40, 49, 49, 49, 49, 91, 49, 49, 32, 40, 40, 40, 40, 40, 40, 40, 32, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 32, 32, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 148, 140, 140, 115, 140, 140, 140, 115, 115, 115, 140, 140, 140, 140, 115, 32, 32, 32, 32, 32, 32, 32, 32, 49, 49,
            32, 32, 32, 32, 32, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 112, 40, 40, 40, 32, 87, 32, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 118, 119, 117, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 92, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 49, 221,
            32, 32, 32, 32, 40, 40, 40, 112, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 112, 40, 40, 40, 40, 40, 40, 112, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 32, 32, 32, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 49, 118, 119, 117, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 49, 66,
            32, 32, 32, 32, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 40, 40, 40, 40, 32, 40, 40, 40, 40, 40, 40, 40, 40, 40, 49, 49, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 49, 118, 119, 117, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 66, 66,
            32, 32, 32, 32, 40, 40, 32, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 32, 40, 40, 40, 40, 40, 40, 40, 32, 49, 49, 49, 49, 40, 40, 40, 40, 40, 118, 119, 117, 49, 49, 66, 66, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 66, 49, 118, 119, 117, 32, 32, 32, 32, 32, 49, 49, 110, 115, 99, 140, 99, 147, 99, 115, 109, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49, 49,
            32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 118, 119, 117, 49, 49, 67, 66, 75, 66, 66, 66, 66, 66, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 49, 49, 66, 66, 49, 49, 118, 119, 119, 32, 32, 32, 32, 32, 99, 99, 109, 49, 49, 49, 49, 92, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49, 49,
            32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 118, 119, 117, 49, 49, 49, 66, 66, 81, 66, 66, 66, 66, 67, 66, 81, 49, 49, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 49, 49, 127, 134, 134, 134, 134, 134, 134, 119, 119, 117, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49,
            32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 118, 119, 119, 125, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 66, 66, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 49, 110, 99, 99, 99, 119, 119, 119, 119, 135, 135, 135, 135, 135, 133, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 93, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40,
            32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 40, 40, 40, 40, 126, 135, 119, 119, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 108, 49, 49, 49, 40, 40, 40, 40, 40, 66, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 49, 49, 91, 49, 49, 49, 126, 119, 135, 133, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 93, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 49, 49, 49, 49, 49, 49, 49, 110, 99, 99, 99, 109, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 66, 66, 49, 49, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 111, 99, 99, 99, 40, 40, 40, 40, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 109, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 66, 66, 66, 67, 66, 66, 32, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 93, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            112, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 49, 91, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 49, 49, 40, 40, 40, 40, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 75, 66, 66, 66, 49, 49, 49, 49, 91, 49, 49, 66, 75, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 49, 49, 67, 66, 75, 66, 81, 66, 49, 49, 91, 49, 49, 49, 40, 40, 40, 40, 40, 40, 32, 32, 32, 32, 32, 40, 32, 32, 32, 49, 49, 91, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 112, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 112, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 32, 32, 32, 40, 40, 40, 32, 32, 32, 32, 40, 32, 40, 40, 32, 32, 40, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 112, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 32, 112, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 40, 112, 40, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 112, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40,
            32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 49, 49, 66, 66, 66, 66, 49, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 112, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49,
            32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 49, 91, 49, 49, 49, 49, 49, 66, 66, 66, 66, 66, 66, 49, 49, 49, 40, 40, 40, 40, 40, 110, 99, 99, 99, 108, 49, 49, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 49, 49, 32, 32, 32, 40, 40, 40, 32, 32, 32, 32, 40, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 32, 32, 32, 32, 40, 40, 32, 40, 40, 40, 40, 32, 32, 32, 32, 32, 32, 32, 49, 49,
            32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 49, 49, 49, 91, 49, 49, 49, 49, 66, 66, 66, 66, 66, 66, 66, 66, 49, 49, 40, 40, 40, 40, 40, 91, 49, 49, 49, 111, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 109, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 40, 40, 40, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49, 49,
            32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 49, 49, 49, 91, 49, 49, 49, 49, 49, 66, 66, 66, 66, 66, 66, 49, 49, 49, 40, 40, 40, 40, 40, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 40, 40, 40, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49, 49,
            32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 49, 49, 111, 99, 99, 99, 108, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 111, 108, 49, 66, 66, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49, 49,
            32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 49, 49, 49, 49, 49, 49, 111, 99, 99, 147, 115, 115, 107, 99, 99, 99, 108, 40, 40, 40, 40, 40, 40, 91, 49, 66, 252, 253, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 66, 81, 49, 49, 49, 49, 66, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 112, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49, 49,
            32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 93, 49, 49, 49, 49, 49, 49, 91, 40, 40, 40, 40, 40, 40, 91, 49, 66, 260, 261, 66, 66, 49, 49, 49, 49, 49, 49, 66, 49, 49, 49, 49, 49, 49, 49, 66, 66, 66, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 49, 66, 66, 49, 66, 66, 66, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 66, 67,
            32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 91, 49, 40, 40, 40, 40, 40, 91, 49, 66, 66, 66, 66, 66, 49, 66, 49, 66, 66, 66, 66, 81, 66, 49, 49, 49, 66, 66, 66, 66, 66, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 66, 75, 66, 67, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49, 66,
            32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 40, 49, 49, 49, 49, 49, 66, 81, 49, 49, 49, 49, 93, 49, 49, 49, 49, 49, 49, 91, 49, 40, 40, 40, 40, 40, 91, 49, 49, 66, 66, 49, 49, 49, 67, 66, 66, 66, 66, 66, 75, 66, 66, 66, 66, 66, 66, 252, 253, 66, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 66, 66, 66, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49, 66,
            32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 49, 49, 49, 49, 66, 66, 66, 49, 49, 49, 149, 49, 49, 49, 49, 49, 49, 111, 108, 40, 40, 40, 40, 40, 91, 49, 49, 49, 49, 49, 49, 66, 81, 75, 66, 66, 66, 66, 252, 253, 66, 66, 66, 66, 66, 260, 261, 66, 66, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 66, 66, 66, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49,
            32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 112, 40, 40, 49, 49, 49, 66, 66, 66, 66, 75, 66, 66, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 91, 40, 40, 40, 40, 40, 111, 108, 49, 49, 49, 49, 49, 66, 66, 66, 66, 67, 66, 66, 260, 261, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 49, 67, 66, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40,
            32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 49, 66, 81, 67, 66, 66, 66, 67, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 91, 40, 40, 112, 40, 40, 40, 91, 49, 49, 49, 49, 49, 66, 66, 66, 66, 81, 66, 75, 66, 67, 81, 66, 67, 49, 49, 49, 66, 66, 66, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 49, 66, 66, 75, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 66, 75, 66, 66, 66, 66, 66, 66, 66, 66, 66, 49, 49, 49, 49, 49, 49, 49, 91, 40, 32, 32, 32, 32, 32, 91, 49, 49, 49, 49, 49, 66, 66, 66, 252, 253, 66, 246, 247, 248, 66, 66, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 112, 40, 40, 49, 49, 49, 66, 66, 66, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 91, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 49, 66, 66, 66, 75, 32, 32, 32, 75, 81, 66, 49, 49, 49, 49, 49, 49, 49, 91, 49, 32, 32, 32, 32, 32, 91, 49, 49, 49, 49, 66, 66, 66, 66, 260, 261, 66, 254, 255, 256, 66, 66, 66, 66, 66, 66, 49, 49, 49, 66, 66, 66, 49, 40, 40, 40, 40, 40, 40, 49, 49, 66, 66, 81, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 149, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 40, 40, 40, 40, 40, 49, 49, 49, 49, 66, 66, 66, 32, 32, 32, 66, 66, 67, 66, 49, 49, 49, 49, 49, 49, 91, 49, 32, 32, 32, 32, 32, 91, 49, 49, 49, 66, 66, 66, 66, 66, 81, 66, 75, 262, 263, 264, 66, 66, 66, 246, 247, 248, 66, 66, 66, 66, 252, 253, 66, 40, 40, 40, 40, 40, 40, 32, 32, 32, 66, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 40, 40, 40, 40, 32, 32, 32, 32, 32,
            32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 40, 40, 40, 40, 49, 49, 49, 49, 49, 66, 32, 32, 32, 32, 32, 66, 66, 66, 49, 49, 49, 49, 49, 49, 111, 99, 32, 32, 32, 32, 32, 109, 49, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 252, 253, 66, 254, 255, 256, 66, 66, 66, 66, 260, 261, 66, 66, 40, 40, 40, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49, 32, 32, 32, 32, 32, 32, 49, 32, 32, 32, 32, 32, 40, 40, 40, 40, 32, 49, 49, 49, 49,
            32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 40, 40, 40, 40, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 40, 49, 49, 49, 66, 66, 252, 253, 66, 66, 66, 66, 66, 66, 66, 66, 260, 261, 66, 262, 263, 264, 66, 66, 66, 66, 66, 66, 66, 49, 40, 40, 40, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 0, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 40, 40, 49, 49, 49, 49, 49, 49,
            32, 32, 112, 40, 32, 32, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 40, 40, 40, 40, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 40, 40, 40, 40, 49, 49, 49, 49, 66, 260, 261, 66, 66, 66, 49, 49, 49, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 49, 49, 40, 40, 40, 40, 40, 32, 32, 32, 32, 32, 32, 112, 32, 32, 32, 0, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 40, 40, 49, 49, 49, 49, 49, 49,
            32, 32, 32, 40, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49, 49, 49, 66, 66, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 66, 66, 66, 66, 66, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 0, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 40, 49, 49, 49, 49, 49, 49,
            49, 32, 32, 40, 32, 32, 32, 32, 32, 32, 32, 112, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 112, 40, 40, 40, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49,
            49, 49, 40, 40, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 40, 40, 40, 40, 40, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49, 49, 49, 49, 49, 49, 49],


							// layer two
							[80, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 85, 49, 49, 49, 63, 0, 0, 0, 0, 0, 0, 71, 64, 64, 64, 64, 85, 49, 80, 24, 0, 32, 72, 56, 56, 56, 56, 56, 78, 0, 0, 16, 49, 49, 49, 80, 32, 0, 0, 0, 0, 270, 270, 270, 270, 270, 0, 0, 0, 0, 71, 85, 49,
            63, 0, 0, 0, 32, 32, 72, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 56, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 49, 49, 80, 0, 0, 0, 0, 0, 0, 0, 136, 0, 0, 0, 136, 71, 85, 63, 32, 0, 32, 16, 0, 191, 191, 191, 191, 63, 0, 0, 32, 85, 49, 80, 32, 0, 0, 0, 0, 270, 269, 269, 269, 269, 269, 270, 0, 0, 0, 0, 71, 85,
            24, 0, 0, 0, 32, 72, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 78, 0, 0, 0, 189, 0, 0, 0, 0, 72, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 0, 0, 0, 0, 72, 8, 49, 80, 0, 0, 0, 0, 189, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 24, 32, 0, 72, 8, 24, 191, 191, 191, 71, 79, 78, 0, 0, 32, 85, 63, 0, 0, 0, 0, 270, 269, 271, 271, 271, 271, 271, 269, 270, 0, 0, 32, 32, 16,
            0, 0, 0, 0, 72, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 56, 78, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 49, 49, 63, 0, 0, 0, 0, 0, 0, 0, 72, 56, 56, 56, 56, 78, 0, 0, 0, 0, 0, 16, 63, 191, 191, 191, 191, 191, 71, 63, 0, 0, 0, 32, 32, 32, 0, 0, 72, 269, 271, 271, 208, 208, 208, 271, 271, 269, 78, 0, 0, 0, 71,
            0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 78, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 85, 80, 0, 0, 136, 0, 0, 0, 72, 56, 8, 191, 191, 191, 191, 79, 78, 0, 0, 0, 72, 8, 24, 191, 191, 191, 191, 191, 191, 79, 78, 0, 0, 0, 0, 0, 0, 72, 49, 271, 271, 208, 208, 208, 208, 208, 271, 271, 287, 78, 0, 0, 0,
            113, 113, 113, 113, 113, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 213, 0, 0, 0, 0, 63, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 16, 63, 0, 0, 0, 0, 0, 72, 8, 49, 191, 191, 191, 191, 191, 191, 79, 78, 0, 0, 16, 63, 191, 191, 191, 189, 191, 191, 72, 49, 63, 0, 0, 136, 0, 0, 72, 8, 127, 119, 269, 208, 208, 208, 208, 208, 269, 119, 125, 49, 63, 0, 0,
            188, 188, 188, 188, 188, 185, 186, 185, 186, 185, 186, 185, 186, 185, 186, 185, 186, 185, 186, 185, 186, 185, 186, 185, 186, 0, 0, 0, 0, 0, 79, 78, 0, 0, 189, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 72, 8, 63, 0, 0, 0, 0, 72, 8, 80, 191, 191, 191, 191, 191, 191, 191, 49, 79, 78, 0, 16, 63, 191, 191, 72, 56, 56, 56, 8, 49, 63, 0, 0, 0, 0, 72, 0, 127, 119, 135, 269, 208, 208, 208, 208, 208, 269, 135, 119, 125, 79, 0, 0,
            188, 188, 188, 188, 188, 193, 194, 193, 194, 193, 194, 193, 194, 193, 194, 193, 194, 193, 194, 193, 194, 193, 194, 193, 194, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 16, 49, 63, 0, 0, 0, 72, 8, 80, 191, 191, 191, 191, 191, 191, 191, 191, 191, 85, 63, 0, 16, 79, 56, 56, 8, 49, 49, 80, 191, 191, 79, 78, 0, 0, 0, 16, 0, 118, 117, 80, 269, 208, 208, 208, 208, 208, 269, 85, 126, 119, 125, 0, 0,
            129, 129, 129, 129, 129, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 201, 205, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 71, 85, 79, 78, 0, 0, 16, 80, 191, 191, 191, 191, 191, 191, 191, 191, 191, 191, 191, 63, 0, 16, 0, 0, 0, 0, 0, 49, 191, 191, 191, 191, 63, 0, 0, 0, 16, 0, 126, 133, 63, 272, 272, 0, 0, 0, 0, 0, 16, 49, 118, 117, 0, 0,
            0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 16, 49, 63, 0, 0, 16, 63, 191, 191, 191, 191, 191, 191, 191, 191, 191, 191, 191, 63, 0, 71, 85, 191, 191, 191, 64, 191, 191, 191, 191, 191, 63, 0, 0, 0, 71, 85, 0, 80, 24, 0, 0, 0, 0, 0, 0, 0, 71, 85, 126, 133, 0, 0,
            0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49, 0, 0, 0, 0, 16, 49, 63, 0, 189, 16, 63, 191, 191, 191, 191, 191, 191, 191, 191, 191, 191, 8, 63, 0, 0, 71, 191, 191, 191, 191, 191, 191, 191, 191, 191, 63, 0, 0, 0, 0, 16, 0, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 282, 0, 0, 0,
            0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49, 0, 0, 0, 0, 16, 49, 63, 0, 0, 16, 191, 191, 191, 216, 191, 191, 56, 56, 0, 0, 49, 80, 24, 0, 0, 71, 85, 191, 191, 191, 191, 191, 191, 191, 80, 24, 0, 0, 0, 0, 71, 85, 63, 32, 32, 32, 72, 56, 78, 32, 32, 32, 71, 64, 24, 32, 0,
            0, 0, 0, 0, 71, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 64, 64, 64, 64, 85, 0, 0, 80, 64, 64, 24, 0, 0, 0, 0, 71, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 71, 0, 0, 24, 0, 0, 0, 0, 0, 72, 8, 80, 0, 0, 0, 16, 191, 191, 191, 191, 191, 191, 80, 64, 64, 64, 64, 24, 0, 0, 0, 0, 71, 85, 191, 191, 191, 191, 191, 80, 24, 0, 0, 0, 0, 32, 32, 71, 24, 32, 136, 32, 16, 49, 79, 78, 32, 32, 32, 32, 32, 32, 0,
            0, 0, 0, 0, 0, 71, 64, 85, 0, 0, 0, 0, 0, 80, 64, 64, 64, 64, 64, 64, 24, 0, 0, 0, 0, 71, 80, 64, 24, 0, 0, 0, 0, 0, 0, 0, 0, 71, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 85, 80, 24, 0, 0, 0, 0, 80, 64, 64, 64, 71, 24, 64, 64, 0, 0, 0, 0, 16, 49, 63, 0, 0, 0, 8, 191, 191, 191, 191, 191, 64, 24, 0, 0, 0, 0, 0, 0, 32, 32, 32, 0, 71, 85, 191, 191, 191, 191, 24, 0, 0, 0, 0, 32, 32, 32, 32, 32, 32, 32, 72, 8, 281, 281, 79, 78, 32, 136, 32, 136, 32, 72,
            0, 0, 0, 0, 0, 0, 0, 71, 64, 64, 64, 64, 64, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 86, 87, 88, 94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 24, 64, 64, 64, 64, 64, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 0, 64, 0, 0, 136, 0, 49, 191, 191, 191, 191, 80, 0, 0, 0, 32, 72, 56, 56, 78, 32, 32, 32, 32, 0, 0, 0, 64, 64, 64, 0, 0, 0, 0, 72, 78, 32, 32, 32, 32, 32, 72, 8, 281, 281, 281, 281, 63, 32, 32, 136, 32, 72, 8,
            0, 0, 72, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 86, 87, 88, 94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 71, 0, 0, 0, 0, 0, 0, 191, 191, 191, 191, 191, 63, 32, 32, 32, 72, 0, 49, 49, 0, 0, 78, 32, 32, 0, 0, 136, 0, 0, 0, 0, 0, 0, 72, 8, 79, 78, 32, 32, 72, 56, 8, 281, 281, 281, 281, 281, 79, 78, 32, 32, 32, 71, 85,
            0, 72, 8, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 56, 56, 78, 0, 0, 0, 0, 0, 104, 86, 87, 88, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 78, 0, 0, 0, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 191, 191, 191, 191, 80, 24, 32, 32, 32, 71, 0, 49, 49, 49, 49, 79, 78, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 281, 281, 222, 56, 56, 8, 281, 281, 281, 281, 282, 281, 281, 281, 79, 56, 78, 32, 32, 71,
            0, 16, 66, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 56, 56, 56, 56, 56, 56, 56, 8, 0, 0, 63, 0, 0, 0, 0, 72, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 78, 0, 0, 0, 0, 0, 72, 8, 0, 0, 0, 0, 0, 72, 78, 0, 0, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 85, 191, 191, 191, 63, 32, 32, 32, 32, 32, 71, 85, 49, 49, 49, 80, 0, 0, 0, 72, 0, 56, 56, 78, 0, 0, 0, 71, 85, 281, 281, 281, 281, 281, 281, 281, 281, 282, 281, 281, 282, 281, 281, 49, 63, 32, 32, 0,
            0, 16, 66, 63, 0, 0, 72, 56, 56, 56, 56, 78, 0, 0, 72, 56, 56, 72, 56, 56, 78, 8, 0, 0, 0, 0, 32, 32, 32, 32, 32, 32, 63, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 66, 66, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 72, 56, 56, 56, 56, 56, 56, 56, 56, 8, 63, 0, 32, 32, 32, 32, 32, 32, 32, 0, 0, 0, 0, 0, 0, 49, 190, 0, 0, 0, 32, 32, 32, 32, 32, 71, 0, 0, 80, 0, 0, 72, 56, 0, 8, 49, 49, 79, 78, 0, 0, 0, 71, 64, 64, 64, 85, 49, 281, 281, 281, 281, 281, 281, 282, 282, 281, 222, 79, 78, 0, 0,
            0, 16, 0, 63, 0, 0, 16, 49, 49, 49, 49, 63, 0, 0, 16, 0, 72, 8, 0, 0, 79, 56, 56, 56, 32, 32, 32, 32, 0, 0, 32, 78, 24, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 66, 0, 0, 0, 0, 0, 0, 0, 66, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 80, 24, 32, 32, 32, 32, 32, 72, 56, 56, 78, 0, 0, 0, 0, 0, 64, 64, 24, 0, 0, 0, 0, 0, 32, 32, 32, 32, 71, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 0, 0, 0, 71, 64, 64, 64, 85, 281, 281, 281, 281, 282, 281, 281, 281, 63, 0, 0,
            0, 16, 80, 24, 0, 0, 16, 0, 0, 0, 0, 63, 0, 0, 71, 85, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 72, 8, 0, 0, 0, 0, 0, 0, 49, 49, 49, 0, 0, 0, 0, 66, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 32, 32, 32, 72, 8, 0, 0, 79, 56, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 32, 72, 32, 32, 32, 32, 0, 0, 0, 0, 8, 64, 64, 64, 85, 0, 63, 0, 0, 0, 0, 136, 0, 32, 0, 0, 0, 0, 71, 85, 281, 281, 281, 281, 282, 281, 281, 63, 0, 0,
            0, 71, 24, 0, 0, 0, 16, 0, 0, 0, 0, 79, 78, 0, 0, 72, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 49, 49, 49, 0, 0, 0, 0, 63, 0, 0, 0, 71, 85, 0, 0, 0, 0, 0, 0, 0, 63, 0, 32, 32, 32, 72, 8, 0, 0, 0, 0, 0, 79, 78, 0, 0, 0, 0, 0, 0, 32, 32, 32, 32, 16, 79, 32, 80, 32, 0, 0, 0, 16, 63, 239, 239, 239, 16, 0, 79, 78, 0, 0, 0, 0, 32, 136, 32, 32, 32, 32, 0, 71, 85, 281, 281, 281, 281, 282, 281, 63, 0, 0,
            0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 49, 63, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 49, 49, 49, 49, 0, 0, 0, 0, 79, 78, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 80, 24, 0, 32, 32, 32, 16, 0, 0, 0, 0, 0, 0, 0, 79, 78, 0, 0, 0, 0, 72, 0, 8, 79, 56, 8, 0, 79, 32, 0, 0, 0, 72, 8, 63, 239, 239, 239, 16, 0, 0, 63, 0, 136, 0, 32, 32, 32, 32, 32, 32, 32, 32, 0, 71, 222, 281, 281, 281, 282, 281, 63, 0, 0,
            0, 72, 78, 0, 0, 72, 8, 0, 0, 0, 0, 49, 63, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 49, 49, 49, 49, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 63, 0, 0, 32, 32, 72, 8, 0, 0, 0, 0, 0, 0, 0, 0, 79, 56, 56, 56, 56, 8, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 79, 56, 56, 56, 8, 0, 0, 79, 78, 0, 0, 32, 72, 56, 56, 56, 78, 32, 32, 32, 0, 16, 281, 281, 281, 281, 80, 24, 0, 32,
            0, 71, 24, 0, 0, 71, 85, 0, 0, 0, 0, 80, 24, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 71, 85, 0, 0, 0, 0, 0, 63, 0, 0, 0, 32, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 80, 64, 64, 85, 63, 0, 32, 32, 16, 196, 196, 196, 63, 32, 32, 0, 0, 16, 281, 281, 222, 80, 24, 0, 32, 32,
            0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 63, 0, 0, 72, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 64, 64, 64, 64, 64, 24, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 78, 0, 0, 0, 16, 0, 0, 0, 0, 0, 63, 0, 0, 0, 32, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 63, 235, 235, 16, 63, 0, 32, 72, 8, 197, 0, 0, 79, 78, 32, 0, 0, 71, 85, 281, 32, 24, 0, 32, 32, 32,
            0, 0, 72, 78, 0, 0, 71, 85, 0, 0, 0, 63, 0, 0, 16, 71, 85, 0, 0, 0, 0, 0, 0, 0, 80, 24, 0, 0, 0, 0, 63, 0, 0, 0, 0, 72, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 63, 0, 0, 0, 32, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 63, 235, 235, 16, 63, 0, 32, 16, 0, 197, 282, 0, 0, 63, 32, 32, 32, 32, 16, 80, 24, 32, 0, 32, 32, 32,
            0, 0, 71, 24, 0, 0, 0, 71, 64, 64, 64, 24, 0, 0, 71, 64, 71, 85, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 79, 78, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 64, 85, 0, 0, 0, 79, 56, 56, 8, 63, 0, 32, 16, 0, 282, 282, 281, 281, 79, 78, 32, 32, 32, 71, 24, 32, 32, 0, 32, 72, 32,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 71, 64, 64, 64, 64, 64, 64, 24, 64, 85, 0, 0, 0, 63, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 78, 0, 0, 16, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 236, 16, 0, 0, 0, 0, 0, 0, 0, 63, 0, 32, 16, 0, 282, 282, 281, 281, 49, 63, 32, 32, 32, 32, 32, 32, 32, 0, 0, 16, 49,
            78, 0, 0, 0, 0, 0, 144, 0, 0, 0, 0, 0, 0, 0, 0, 144, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 64, 64, 64, 24, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 66, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 16, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 234, 16, 0, 0, 0, 0, 0, 0, 0, 63, 32, 32, 16, 0, 282, 282, 281, 281, 281, 63, 32, 32, 32, 32, 32, 32, 0, 0, 72, 32, 49,
            63, 0, 0, 0, 0, 144, 144, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 66, 66, 0, 0, 0, 0, 0, 0, 63, 0, 0, 16, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 24, 0, 0, 0, 16, 237, 16, 0, 80, 64, 64, 85, 0, 0, 63, 32, 32, 0, 0, 283, 283, 282, 281, 281, 32, 78, 32, 32, 32, 32, 0, 0, 72, 32, 49, 49,
            63, 0, 0, 0, 0, 0, 0, 0, 0, 72, 56, 56, 56, 56, 56, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 16, 0, 0, 0, 0, 0, 80, 24, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49, 63, 0, 0, 0, 16, 236, 16, 0, 63, 241, 243, 16, 0, 80, 24, 32, 32, 112, 0, 0, 282, 281, 281, 281, 281, 79, 32, 32, 32, 0, 0, 72, 32, 49, 49, 49,
            63, 0, 144, 144, 0, 0, 0, 72, 56, 8, 0, 0, 0, 0, 0, 79, 56, 56, 56, 56, 56, 56, 56, 56, 56, 78, 0, 0, 0, 0, 63, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 24, 0, 0, 16, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49, 49, 49, 0, 0, 0, 0, 0, 0, 0, 0, 49, 79, 78, 0, 0, 16, 234, 16, 0, 63, 243, 241, 16, 0, 63, 0, 0, 32, 16, 0, 0, 281, 281, 281, 281, 281, 49, 63, 49, 49, 49, 72, 32, 49, 49, 49, 49,
            63, 0, 0, 0, 0, 0, 72, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 56, 56, 56, 56, 63, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 72, 8, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 49, 49, 49, 49, 49, 80, 64, 64, 85, 0, 0, 0, 0, 0, 49, 49, 63, 0, 0, 16, 237, 16, 0, 79, 56, 56, 8, 0, 63, 0, 0, 32, 16, 0, 0, 0, 281, 281, 281, 281, 49, 63, 49, 49, 49, 16, 49, 49, 49, 49, 49,
            63, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49, 0, 0, 0, 0, 32, 32, 0, 0, 0, 0, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 32, 24, 0, 0, 16, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 71, 85, 0, 0, 0, 0, 0, 49, 49, 49, 49, 49, 80, 24, 32, 32, 71, 64, 64, 85, 49, 49, 49, 49, 63, 0, 0, 16, 56, 8, 0, 0, 0, 0, 0, 80, 24, 0, 0, 49, 112, 0, 0, 282, 282, 281, 281, 281, 0, 63, 49, 49, 49, 16, 49, 49, 49, 49, 49,
            63, 0, 0, 0, 0, 72, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 0, 16, 49, 0, 49, 49, 0, 49, 49, 49, 49, 80, 24, 32, 32, 32, 32, 32, 32, 71, 85, 49, 49, 49, 63, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 49, 112, 49, 281, 282, 282, 281, 281, 281, 80, 112, 49, 49, 49, 16, 49, 49, 49, 49, 49,
            24, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 72, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 80, 64, 24, 0, 0, 0, 0, 0, 71, 85, 49, 49, 49, 49, 49, 49, 49, 49, 63, 32, 32, 32, 32, 32, 32, 32, 32, 71, 85, 49, 80, 24, 0, 0, 71, 85, 0, 0, 0, 0, 0, 80, 24, 0, 0, 0, 72, 112, 49, 281, 282, 282, 281, 281, 80, 24, 49, 49, 49, 49, 16, 49, 49, 49, 49, 49,
            0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 63, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 80, 64, 64, 64, 64, 64, 64, 64, 64, 64, 32, 64, 24, 0, 0, 0, 71, 100, 64, 64, 64, 24, 0, 0, 0, 0, 0, 0, 0, 0, 16, 49, 49, 49, 49, 49, 49, 49, 80, 24, 32, 32, 32, 32, 32, 32, 32, 32, 32, 71, 64, 24, 0, 0, 0, 0, 71, 85, 0, 0, 0, 80, 24, 0, 0, 0, 49, 112, 49, 49, 281, 282, 282, 281, 281, 63, 32, 49, 49, 49, 49, 16, 49, 49, 49, 49, 49,
            0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 79, 78, 0, 0, 0, 71, 64, 80, 64, 64, 64, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 71, 85, 49, 49, 49, 49, 49, 80, 24, 32, 32, 32, 32, 32, 32, 32, 32, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 64, 64, 64, 24, 0, 0, 0, 0, 49, 112, 49, 49, 281, 281, 281, 281, 281, 63, 32, 49, 49, 49, 72, 8, 49, 49, 49, 49, 49,
            0, 0, 0, 136, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 63, 0, 85, 0, 0, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 16, 49, 49, 49, 49, 49, 63, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 85, 49, 49, 49, 281, 282, 281, 63, 32, 49, 49, 49, 32, 32, 49, 49, 49, 80, 64,
            78, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 0, 0, 0, 0, 0, 63, 0, 0, 0, 63, 0, 0, 85, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 56, 56, 56, 56, 32, 32, 32, 32, 71, 64, 85, 49, 80, 64, 24, 32, 32, 32, 32, 72, 56, 56, 78, 32, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 112, 85, 49, 49, 281, 282, 49, 63, 32, 32, 49, 49, 49, 32, 85, 49, 32, 32, 32,
            63, 0, 0, 32, 32, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 0, 0, 0, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 56, 56, 56, 56, 78, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 8, 0, 0, 78, 56, 32, 32, 32, 32, 32, 32, 71, 64, 24, 32, 32, 32, 32, 32, 32, 16, 49, 49, 79, 78, 32, 32, 0, 0, 0, 0, 72, 56, 56, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 112, 112, 281, 281, 281, 63, 32, 0, 0, 49, 49, 32, 32, 64, 32, 32, 49,
            63, 0, 0, 32, 32, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 63, 0, 0, 0, 72, 56, 56, 56, 56, 56, 72, 8, 0, 0, 0, 0, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 78, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 72, 8, 49, 49, 49, 79, 78, 32, 32, 0, 0, 72, 8, 215, 215, 79, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 112, 112, 49, 281, 281, 79, 78, 0, 0, 0, 49, 49, 49, 49, 49, 49, 49,
            63, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 79, 56, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 78, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 16, 0, 0, 49, 0, 0, 79, 78, 32, 32, 0, 16, 215, 215, 215, 215, 79, 56, 56, 56, 56, 56, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 281, 281, 0, 79, 56, 0, 0, 0, 0, 49, 49, 49, 49, 49,
            63, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 78, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 72, 8, 0, 0, 0, 0, 0, 0, 79, 78, 0, 0, 16, 215, 215, 160, 215, 215, 215, 0, 160, 160, 215, 79, 78, 0, 0, 0, 0, 0, 0, 32, 71, 85, 49, 281, 281, 282, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            63, 0, 144, 144, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 71, 85, 215, 160, 160, 215, 215, 0, 160, 160, 215, 215, 79, 56, 56, 78, 0, 0, 0, 32, 32, 71, 85, 281, 281, 281, 66, 0, 0, 0, 0, 0, 0, 0, 72,
            63, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 78, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 160, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 215, 160, 160, 215, 215, 0, 215, 215, 215, 215, 215, 215, 215, 79, 78, 0, 0, 32, 32, 32, 16, 281, 66, 66, 80, 0, 0, 0, 0, 0, 0, 72, 8,
            24, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 215, 215, 160, 160, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 24, 0, 0, 0, 16, 215, 215, 215, 215, 215, 0, 215, 215, 215, 215, 215, 215, 215, 215, 79, 78, 0, 0, 0, 0, 71, 32, 66, 80, 0, 0, 0, 0, 0, 0, 72, 8, 0,
            0, 0, 0, 0, 0, 71, 64, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49, 80, 24, 0, 0, 0, 71, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 215, 215, 215, 215, 215, 160, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 72, 8, 215, 215, 215, 215, 215, 0, 215, 215, 215, 215, 160, 160, 215, 215, 215, 79, 78, 0, 0, 0, 112, 112, 112, 112, 0, 0, 0, 0, 0, 0, 16, 0, 0,
            0, 0, 0, 144, 0, 0, 0, 71, 64, 64, 64, 64, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49, 0, 0, 63, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 215, 215, 215, 215, 215, 215, 215, 160, 160, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 215, 215, 0, 0, 0, 0, 0, 215, 215, 215, 160, 160, 160, 160, 215, 215, 215, 79, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 71, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 24, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 215, 215, 215, 215, 215, 215, 215, 160, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 215, 215, 215, 0, 215, 215, 215, 160, 160, 160, 160, 215, 215, 215, 215, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0,
            78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 72, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 78, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 215, 215, 215, 215, 215, 215, 160, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 215, 215, 215, 215, 215, 215, 0, 215, 215, 215, 160, 160, 160, 160, 215, 215, 215, 215, 79, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0,
            79, 78, 0, 0, 0, 0, 72, 56, 56, 56, 56, 56, 56, 56, 56, 56, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 56, 78, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 215, 215, 215, 215, 160, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 71, 64, 85, 215, 215, 215, 215, 0, 215, 215, 215, 215, 160, 160, 160, 215, 215, 215, 215, 215, 79, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0,
            49, 79, 78, 0, 0, 72, 8, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 78, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 160, 160, 160, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 0, 16, 215, 215, 215, 215, 0, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 79, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0,
            49, 49, 63, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 0, 71, 85, 215, 215, 215, 0, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 79, 56, 78, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0,
            49, 49, 63, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 0, 0, 16, 215, 215, 215, 0, 0, 0, 0, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 79, 78, 0, 0, 0, 0, 0, 0, 16, 0, 0,
            49, 49, 63, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 0, 0, 16, 215, 215, 215, 215, 215, 215, 0, 215, 215, 215, 215, 215, 215, 215, 160, 160, 215, 215, 215, 215, 215, 63, 0, 0, 0, 0, 0, 0, 16, 0, 0,
            0, 49, 63, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 0, 0, 16, 215, 215, 215, 215, 215, 215, 0, 215, 215, 215, 215, 215, 215, 160, 160, 160, 160, 215, 215, 215, 215, 63, 0, 0, 0, 0, 0, 0, 16, 0, 0,
            49, 49, 63, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 71, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 64, 64, 64, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 0, 0, 16, 215, 215, 215, 215, 215, 215, 0, 215, 215, 215, 215, 215, 215, 160, 160, 160, 160, 160, 215, 215, 215, 63, 0, 0, 0, 0, 0, 0, 16, 0, 0,
            49, 0, 63, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 78, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 64, 64, 64, 64, 64, 24, 0, 0, 0, 71, 64, 64, 64, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 0, 0, 16, 215, 215, 215, 215, 215, 215, 0, 215, 215, 215, 215, 215, 215, 160, 160, 160, 160, 215, 215, 215, 215, 63, 0, 0, 0, 0, 0, 0, 71, 85, 0,
            0, 0, 63, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 64, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 64, 64, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 0, 0, 16, 215, 215, 215, 215, 215, 215, 0, 215, 215, 215, 215, 215, 215, 160, 160, 160, 160, 215, 215, 215, 215, 63, 0, 0, 0, 0, 0, 0, 85, 71, 85,
            0, 0, 63, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 64, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 64, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 0, 72, 8, 215, 215, 215, 215, 215, 215, 0, 160, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 63, 0, 0, 0, 0, 0, 0, 0, 0, 71,
            0, 0, 63, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 64, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 64, 64, 64, 64, 64, 64, 64, 64, 64, 49, 80, 24, 0, 0, 0, 0, 0, 16, 215, 215, 215, 215, 215, 215, 215, 0, 160, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            49, 0, 63, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 64, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 64, 0, 0, 0, 0, 0, 0, 16, 215, 215, 215, 215, 215, 215, 215, 0, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            49, 0, 63, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 64, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 8, 215, 215, 215, 215, 215, 215, 215, 0, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 63, 0, 0, 0, 0, 0, 0, 0, 0, 72,
            49, 0, 63, 0, 0, 71, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 80, 64, 64, 64, 64, 64, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 8, 215, 215, 160, 160, 160, 215, 215, 215, 0, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 63, 0, 0, 0, 0, 0, 0, 72, 56, 8,
            64, 64, 24, 0, 0, 0, 71, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 80, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 8, 215, 215, 160, 160, 160, 160, 215, 215, 215, 0, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 160, 63, 0, 0, 0, 0, 0, 0, 16, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 71, 64, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 64, 64, 64, 64, 64, 24, 0, 0, 0, 71, 64, 64, 64, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 215, 215, 215, 160, 160, 160, 215, 215, 215, 215, 0, 215, 215, 160, 160, 160, 215, 215, 215, 215, 215, 215, 215, 160, 160, 63, 0, 0, 0, 0, 0, 0, 16, 0, 0,
            0, 189, 72, 78, 0, 0, 0, 0, 0, 71, 64, 85, 0, 0, 0, 0, 0, 0, 0, 80, 64, 64, 64, 64, 64, 64, 64, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 56, 56, 56, 78, 0, 0, 0, 16, 215, 215, 215, 160, 160, 215, 215, 215, 215, 215, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 0, 0, 16, 0, 0,
            0, 0, 71, 24, 0, 0, 0, 0, 0, 0, 0, 71, 64, 64, 64, 64, 64, 64, 64, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 144, 144, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 8, 0, 0, 0, 63, 0, 0, 0, 16, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 0, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 160, 160, 63, 0, 0, 0, 0, 0, 0, 16, 0, 0,
            0, 72, 78, 189, 0, 189, 0, 0, 144, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 56, 56, 56, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 63, 0, 0, 0, 16, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 0, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 63, 0, 0, 0, 0, 0, 0, 16, 0, 0,
            0, 71, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 56, 56, 56, 56, 78, 0, 0, 0, 72, 56, 56, 56, 56, 8, 0, 0, 0, 79, 56, 56, 56, 56, 56, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 8, 0, 0, 0, 0, 63, 0, 0, 0, 16, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 0, 215, 215, 215, 215, 215, 160, 160, 160, 215, 215, 215, 215, 215, 215, 63, 0, 0, 0, 0, 0, 0, 16, 0, 0,
            0, 0, 0, 0, 0, 72, 56, 56, 56, 56, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 56, 56, 56, 56, 56, 56, 56, 8, 237, 237, 237, 237, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 56, 56, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 56, 56, 56, 8, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 160, 215, 0, 0, 0, 0, 0, 0, 0, 0, 0, 215, 215, 215, 215, 160, 160, 160, 160, 160, 215, 215, 215, 215, 80, 24, 0, 0, 0, 0, 0, 0, 16, 0, 0,
            0, 0, 72, 56, 56, 8, 236, 236, 237, 237, 79, 56, 56, 56, 56, 56, 56, 56, 56, 56, 8, 0, 238, 238, 238, 238, 238, 236, 236, 236, 236, 237, 237, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 56, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 56, 56, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 215, 215, 215, 215, 0, 215, 215, 215, 215, 215, 215, 215, 160, 160, 160, 160, 160, 215, 215, 215, 80, 24, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0,
            0, 72, 8, 238, 238, 236, 236, 237, 237, 237, 237, 236, 236, 236, 236, 160, 0, 160, 236, 236, 236, 236, 238, 238, 238, 238, 238, 236, 236, 236, 236, 237, 237, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 72, 56, 56, 78, 0, 0, 0, 0, 0, 0, 0, 0, 72, 56, 56, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 160, 215, 215, 215, 215, 215, 215, 0, 215, 215, 215, 215, 215, 215, 215, 160, 160, 160, 160, 215, 215, 215, 215, 63, 0, 0, 0, 0, 0, 0, 0, 0, 71, 85, 49,
            0, 16, 238, 238, 238, 238, 237, 237, 237, 237, 237, 236, 236, 236, 237, 160, 0, 160, 236, 236, 236, 238, 238, 242, 237, 237, 160, 236, 236, 236, 238, 238, 238, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 24, 0, 0, 16, 0, 0, 79, 56, 78, 0, 0, 0, 72, 56, 56, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 71, 85, 215, 215, 215, 215, 215, 215, 0, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 80, 24, 0, 0, 0, 0, 144, 0, 0, 0, 0, 71, 85,
            0, 16, 238, 238, 238, 238, 238, 237, 237, 160, 160, 160, 160, 237, 237, 160, 0, 160, 239, 239, 239, 239, 242, 242, 237, 237, 237, 237, 237, 238, 238, 238, 80, 24, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 79, 56, 56, 56, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 78, 0, 0, 0, 16, 215, 215, 215, 215, 215, 215, 0, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 63, 0, 0, 144, 0, 0, 0, 0, 0, 0, 0, 0, 16,
            0, 16, 235, 238, 238, 238, 239, 239, 241, 241, 241, 241, 241, 241, 237, 160, 0, 160, 237, 239, 239, 239, 239, 237, 237, 237, 237, 237, 237, 238, 238, 238, 63, 0, 0, 0, 72, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 72, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 71, 85, 215, 215, 215, 215, 215, 0, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 80, 24, 0, 0, 144, 0, 0, 0, 0, 0, 0, 0, 0, 16,
            0, 16, 235, 235, 235, 239, 239, 239, 239, 239, 241, 241, 241, 241, 237, 160, 0, 160, 239, 239, 239, 239, 239, 237, 237, 237, 160, 234, 242, 242, 238, 238, 63, 0, 0, 0, 16, 66, 66, 0, 0, 0, 0, 0, 0, 66, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 71, 85, 215, 215, 215, 215, 0, 215, 215, 215, 215, 215, 160, 160, 160, 160, 215, 80, 64, 64, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 144, 0, 16,
            0, 16, 235, 235, 235, 239, 239, 239, 239, 239, 241, 241, 241, 241, 237, 160, 0, 239, 239, 239, 239, 239, 239, 239, 237, 237, 234, 234, 234, 234, 238, 238, 63, 0, 0, 0, 16, 66, 0, 0, 0, 0, 80, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 85, 0, 0, 63, 0, 0, 16, 0, 0, 66, 0, 0, 221, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 0, 71, 85, 160, 160, 160, 0, 160, 160, 160, 160, 160, 160, 80, 64, 64, 64, 24, 32, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71,
            0, 16, 235, 235, 235, 235, 239, 239, 239, 237, 237, 237, 241, 235, 235, 235, 0, 160, 236, 239, 239, 239, 239, 235, 235, 235, 234, 234, 234, 234, 238, 80, 24, 0, 0, 0, 71, 64, 64, 64, 64, 64, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 64, 64, 24, 0, 0, 71, 64, 64, 64, 64, 64, 64, 64, 64, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 64, 64, 64, 64, 64, 24, 0, 0, 0, 0, 0, 0, 71, 85, 160, 160, 0, 160, 160, 160, 80, 64, 64, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 16, 241, 235, 235, 235, 160, 236, 237, 237, 237, 237, 237, 235, 235, 235, 0, 160, 236, 236, 236, 236, 236, 235, 235, 235, 234, 234, 234, 234, 238, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 64, 64, 64, 64, 64, 64, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 16, 241, 235, 236, 236, 236, 236, 237, 237, 237, 237, 235, 235, 235, 235, 0, 160, 236, 236, 236, 160, 160, 235, 235, 235, 234, 234, 234, 234, 238, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 16, 241, 241, 236, 236, 236, 236, 236, 237, 237, 235, 235, 235, 235, 235, 0, 160, 236, 242, 242, 242, 160, 235, 235, 235, 234, 241, 241, 241, 241, 63, 0, 144, 136, 144, 0, 0, 0, 0, 0, 0, 0, 72, 56, 56, 56, 56, 56, 56, 56, 56, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 56,
            0, 16, 241, 241, 160, 160, 236, 236, 236, 238, 238, 238, 242, 242, 242, 242, 0, 160, 242, 242, 242, 242, 242, 242, 235, 235, 241, 241, 241, 241, 241, 79, 78, 0, 0, 0, 72, 56, 56, 56, 56, 56, 56, 8, 0, 0, 0, 0, 0, 0, 0, 0, 79, 56, 56, 78, 0, 0, 0, 72, 56, 56, 56, 56, 56, 56, 56, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 56, 56, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 144, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 8, 0,
            0, 16, 241, 238, 238, 160, 235, 235, 238, 238, 238, 238, 242, 242, 242, 160, 0, 160, 243, 243, 242, 242, 242, 242, 242, 160, 160, 241, 241, 241, 241, 241, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 79, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 8, 0, 0, 63, 0, 0, 0, 0, 0, 0, 0, 0, 72, 56, 56, 56, 56, 56, 56, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 49, 0,
            0, 16, 241, 238, 238, 235, 235, 235, 235, 235, 235, 235, 235, 160, 160, 160, 0, 160, 243, 243, 243, 242, 242, 242, 242, 239, 239, 239, 239, 239, 239, 80, 24, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 56, 78, 0, 0, 0, 72, 56, 56, 8, 0, 0, 0, 0, 0, 0, 79, 56, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 49, 0,
            0, 16, 238, 238, 238, 235, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 141, 160, 235, 243, 243, 242, 242, 242, 242, 239, 239, 239, 239, 239, 239, 63, 0, 0, 0, 72, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 56, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 49, 0,
            0, 16, 238, 238, 234, 234, 236, 236, 236, 243, 243, 235, 235, 243, 243, 243, 141, 235, 235, 235, 235, 242, 242, 242, 243, 243, 239, 239, 239, 241, 241, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0,
            0, 16, 234, 234, 234, 234, 234, 236, 236, 243, 235, 235, 235, 235, 243, 243, 0, 235, 235, 235, 235, 242, 242, 243, 243, 243, 239, 241, 241, 241, 241, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 71, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 71, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0,
            0, 16, 234, 234, 234, 234, 234, 236, 236, 243, 235, 235, 160, 235, 235, 243, 0, 235, 235, 30, 30, 30, 30, 30, 243, 243, 243, 241, 241, 241, 241, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 78, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 78, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0,
            0, 16, 234, 234, 234, 234, 236, 236, 236, 243, 243, 235, 235, 235, 235, 242, 0, 235, 235, 30, 30, 30, 30, 30, 243, 239, 239, 239, 241, 241, 80, 24, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0,
            0, 16, 160, 160, 236, 236, 236, 236, 243, 243, 243, 243, 235, 235, 242, 242, 148, 99, 99, 30, 30, 30, 30, 30, 239, 239, 239, 239, 239, 241, 63, 0, 0, 0, 72, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0,
            0, 16, 160, 238, 236, 236, 160, 238, 238, 242, 242, 242, 242, 242, 242, 242, 0, 235, 242, 30, 30, 30, 30, 30, 239, 239, 239, 239, 239, 238, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 0, 0, 79, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 85, 0,
            0, 16, 238, 238, 238, 234, 234, 234, 234, 243, 242, 242, 242, 242, 243, 243, 0, 160, 242, 30, 30, 30, 30, 30, 239, 239, 239, 239, 239, 238, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 64,
            0, 16, 238, 238, 234, 234, 234, 234, 234, 243, 243, 242, 242, 243, 243, 243, 0, 160, 242, 242, 242, 242, 242, 242, 239, 239, 242, 238, 238, 238, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 71, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 71, 85, 238, 234, 234, 234, 234, 234, 243, 243, 243, 242, 160, 243, 243, 0, 160, 242, 242, 243, 243, 242, 242, 242, 242, 242, 238, 238, 238, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 78, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 66, 0, 0, 63, 0, 0, 0, 0, 0, 0, 0, 0, 144, 0, 0, 0, 0, 0,
            0, 0, 16, 238, 238, 234, 234, 241, 241, 241, 243, 243, 234, 234, 243, 243, 0, 160, 243, 243, 243, 243, 160, 160, 160, 241, 241, 241, 160, 238, 63, 0, 144, 0, 16, 0, 0, 0, 0, 0, 0, 0, 80, 64, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 71, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 16, 238, 160, 242, 242, 241, 241, 241, 241, 234, 234, 234, 234, 234, 0, 239, 239, 239, 239, 160, 234, 234, 234, 241, 241, 241, 241, 238, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 63, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 78, 0, 0, 0, 71, 64, 64, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 221, 0, 0, 63, 0, 0, 0, 144, 0, 0, 0, 0, 72, 56, 56, 56, 56,
            0, 0, 71, 85, 238, 238, 241, 241, 241, 241, 241, 234, 234, 234, 234, 234, 239, 239, 239, 239, 239, 239, 234, 234, 241, 241, 241, 241, 241, 80, 24, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 80, 24, 0, 71, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 0, 0, 71, 64, 64, 64, 64, 64, 64, 64, 0, 64, 64, 64, 64, 64, 85, 0, 63, 0, 0, 0, 0, 0, 0, 72, 56, 8, 215, 215, 215, 215,
            0, 0, 0, 71, 64, 85, 241, 241, 241, 241, 241, 234, 234, 234, 234, 239, 239, 239, 239, 239, 239, 234, 234, 241, 241, 241, 241, 241, 80, 24, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 64, 24, 0, 0, 0, 0, 0, 0, 16, 215, 215, 215, 215, 215, 215,
            0, 0, 0, 0, 0, 16, 242, 241, 241, 242, 242, 242, 242, 234, 239, 239, 239, 239, 239, 234, 234, 234, 234, 234, 234, 241, 241, 80, 24, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 80, 24, 0, 0, 0, 71, 85, 0, 0, 0, 221, 0, 80, 64, 64, 64, 64, 24, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 215, 215, 215, 215, 215, 215,
            56, 78, 144, 0, 0, 71, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 24, 0, 0, 0, 0, 0, 0, 71, 85, 0, 0, 0, 80, 24, 0, 0, 0, 0, 0, 71, 85, 0, 0, 0, 80, 24, 0, 0, 0, 0, 0, 0, 0, 0, 71, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 80, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 8, 215, 215, 0, 215, 215, 215,
            0, 79, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 64, 64, 64, 24, 0, 0, 0, 0, 0, 0, 0, 71, 64, 64, 64, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 215, 215, 215, 215, 215, 215, 215,
            0, 221, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 144, 144, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 56, 56, 56, 56, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 215, 215, 215, 215, 215, 215, 215],
			   // layer three
			   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 196, 196, 196, 197, 196, 197, 0, 0, 0, 196, 196, 196, 197, 24, 0, 0, 0, 0, 270, 270, 270, 270, 270, 0, 0, 0, 0, 71, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 64, 64, 64, 85, 0, 0, 0, 71, 0, 0, 0, 24, 0, 0, 0, 0, 270, 269, 269, 269, 269, 269, 270, 0, 136, 0, 0, 71, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 78, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 285, 0, 192, 191, 192, 0, 213, 0, 0, 0, 71, 0, 0, 0, 0, 0, 0, 270, 269, 271, 271, 271, 271, 271, 269, 270, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 196, 196, 196, 196, 197, 0, 0, 0, 0, 0, 0, 0, 192, 189, 191, 192, 192, 0, 213, 0, 0, 0, 71, 24, 0, 0, 72, 56, 269, 271, 271, 272, 272, 272, 271, 271, 269, 56, 78, 0, 0, 71,
            114, 114, 114, 114, 114, 196, 196, 196, 196, 196, 196, 196, 196, 196, 196, 196, 196, 196, 196, 196, 196, 196, 196, 196, 196, 196, 197, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 80, 64, 64, 85, 0, 0, 0, 0, 0, 0, 285, 0, 192, 191, 191, 189, 191, 191, 203, 0, 0, 136, 144, 0, 0, 0, 16, 0, 271, 271, 272, 208, 208, 208, 272, 271, 271, 49, 79, 78, 0, 0,
            202, 202, 202, 202, 202, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 285, 64, 24, 216, 216, 71, 85, 0, 0, 0, 0, 0, 0, 191, 191, 192, 0, 192, 191, 0, 205, 0, 0, 144, 0, 144, 72, 56, 8, 127, 119, 269, 208, 208, 208, 208, 208, 269, 119, 125, 196, 197, 32, 0,
            186, 185, 186, 185, 186, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 203, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 195, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 187, 0, 212, 195, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 187, 0, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 216, 216, 0, 216, 216, 71, 213, 0, 0, 0, 0, 0, 192, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 49, 127, 197, 135, 269, 208, 208, 208, 208, 208, 269, 135, 119, 125, 197, 78, 0,
            194, 193, 194, 193, 194, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 203, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 212, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 189, 216, 189, 0, 216, 216, 71, 85, 122, 114, 130, 0, 0, 0, 0, 196, 196, 197, 64, 85, 0, 122, 114, 114, 114, 130, 0, 118, 196, 196, 269, 208, 208, 208, 208, 208, 269, 196, 196, 196, 197, 63, 32,
            201, 201, 201, 201, 201, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 122, 114, 114, 114, 114, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 226, 220, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 216, 0, 0, 216, 216, 0, 0, 189, 216, 16, 137, 137, 137, 0, 80, 64, 85, 0, 285, 24, 192, 71, 85, 137, 137, 137, 137, 137, 0, 126, 0, 63, 32, 32, 32, 32, 32, 32, 32, 16, 0, 118, 197, 63, 32,
            114, 114, 114, 114, 114, 196, 196, 196, 196, 196, 197, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 113, 113, 113, 113, 113, 113, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 212, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 216, 216, 216, 0, 189, 216, 189, 0, 216, 216, 16, 124, 116, 132, 0, 63, 192, 71, 0, 24, 191, 189, 192, 16, 124, 116, 116, 116, 132, 0, 0, 80, 24, 32, 32, 32, 32, 32, 32, 32, 71, 0, 126, 133, 63, 32,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 129, 129, 129, 129, 129, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 226, 220, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 216, 216, 216, 216, 0, 216, 216, 0, 216, 72, 0, 0, 0, 0, 16, 63, 192, 192, 189, 191, 191, 192, 192, 16, 0, 0, 0, 0, 0, 16, 0, 0, 32, 32, 32, 32, 32, 32, 32, 32, 32, 16, 49, 80, 24, 32,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 124, 116, 116, 116, 116, 132, 0, 0, 0, 119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 212, 0, 0, 80, 64, 64, 64, 64, 64, 85, 0, 0, 80, 24, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 191, 189, 216, 0, 72, 0, 0, 56, 56, 205, 0, 0, 0, 0, 0, 284, 78, 192, 191, 191, 189, 192, 72, 205, 0, 0, 0, 0, 0, 71, 0, 63, 32, 32, 32, 72, 56, 78, 32, 32, 32, 71, 64, 24, 32, 32,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49, 49, 0, 49, 49, 49, 49, 49, 49, 49, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 212, 80, 64, 0, 32, 32, 32, 32, 32, 71, 85, 80, 0, 32, 32, 0, 0, 0, 0, 0, 0, 24, 0, 0, 16, 63, 216, 191, 191, 72, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 284, 78, 192, 192, 192, 72, 205, 0, 0, 0, 0, 189, 0, 0, 71, 24, 32, 136, 144, 16, 49, 79, 78, 32, 32, 32, 0, 32, 32, 32,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 64, 85, 49, 49, 49, 49, 49, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 102, 86, 87, 88, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 226, 220, 32, 32, 32, 32, 32, 32, 32, 32, 71, 0, 32, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 8, 63, 216, 216, 72, 8, 80, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 284, 56, 56, 56, 8, 63, 0, 0, 0, 0, 32, 32, 0, 0, 0, 144, 32, 72, 8, 281, 281, 79, 78, 32, 136, 144, 136, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 64, 64, 64, 85, 80, 64, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 86, 87, 88, 94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 32, 32, 32, 32, 32, 32, 32, 0, 32, 32, 0, 0, 0, 0, 0, 0, 240, 0, 24, 0, 0, 16, 285, 24, 191, 216, 16, 80, 24, 0, 144, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 64, 0, 0, 0, 24, 0, 0, 0, 72, 78, 32, 32, 32, 32, 32, 72, 8, 281, 281, 281, 281, 63, 32, 32, 136, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 86, 87, 88, 94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 32, 72, 56, 56, 56, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 16, 63, 216, 189, 216, 16, 63, 0, 144, 136, 0, 8, 0, 0, 79, 56, 0, 0, 0, 0, 144, 0, 0, 0, 0, 0, 0, 0, 72, 8, 79, 78, 32, 32, 72, 56, 8, 281, 196, 196, 196, 196, 197, 78, 144, 144, 144, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 32, 0, 0, 32, 0, 0, 0, 0, 32, 32, 32, 32, 32, 32, 32, 32, 0, 0, 0, 0, 0, 104, 86, 87, 88, 94, 0, 72, 56, 56, 56, 56, 56, 78, 0, 0, 0, 0, 0, 0, 0, 0, 72, 8, 49, 49, 49, 79, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 79, 78, 216, 72, 205, 24, 0, 0, 0, 0, 85, 0, 0, 0, 0, 0, 0, 0, 0, 32, 32, 0, 0, 0, 0, 189, 0, 16, 0, 0, 79, 56, 56, 8, 0, 0, 0, 281, 281, 281, 281, 197, 79, 56, 78, 32, 32, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 32, 32, 32, 32, 0, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 0, 0, 0, 0, 0, 103, 86, 87, 88, 95, 0, 8, 49, 49, 49, 49, 49, 79, 0, 0, 0, 0, 0, 0, 0, 226, 220, 49, 49, 49, 49, 49, 79, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 71, 85, 79, 56, 8, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 32, 32, 72, 0, 0, 0, 0, 0, 0, 71, 85, 0, 0, 0, 0, 0, 281, 281, 281, 281, 281, 281, 281, 196, 196, 196, 197, 32, 32, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 32, 32, 0, 0, 0, 0, 32, 32, 32, 32, 32, 32, 72, 56, 56, 78, 32, 32, 0, 0, 0, 0, 0, 0, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 56, 8, 212, 49, 49, 49, 49, 49, 49, 0, 0, 0, 0, 0, 0, 0, 0, 32, 32, 32, 32, 32, 32, 16, 49, 49, 80, 24, 32, 32, 189, 0, 0, 0, 0, 64, 85, 0, 24, 0, 32, 32, 72, 0, 0, 0, 0, 0, 0, 0, 0, 71, 64, 64, 64, 0, 66, 281, 281, 0, 197, 281, 281, 281, 281, 281, 281, 197, 78, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 32, 0, 0, 0, 0, 0, 0, 0, 0, 56, 56, 56, 8, 0, 0, 79, 0, 32, 0, 0, 0, 0, 0, 0, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 212, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 32, 32, 32, 71, 102, 138, 96, 32, 32, 32, 32, 32, 0, 0, 0, 0, 0, 24, 0, 32, 32, 72, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 64, 64, 64, 0, 196, 196, 197, 281, 281, 281, 281, 197, 63, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 226, 220, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 32, 32, 104, 138, 94, 32, 32, 32, 32, 0, 72, 78, 0, 0, 0, 0, 0, 32, 72, 285, 0, 0, 0, 0, 0, 0, 0, 0, 0, 144, 136, 0, 0, 0, 0, 0, 0, 71, 85, 0, 197, 0, 281, 281, 281, 196, 197, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 122, 114, 114, 114, 114, 130, 0, 0, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 212, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 32, 102, 138, 96, 32, 32, 72, 78, 0, 0, 0, 78, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 144, 0, 136, 144, 0, 189, 0, 0, 71, 85, 196, 196, 197, 281, 281, 0, 197, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 107, 0, 0, 0, 0, 115, 107, 0, 137, 137, 137, 137, 137, 137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 226, 220, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 104, 138, 94, 72, 56, 8, 0, 0, 0, 75, 0, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 136, 144, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 85, 0, 197, 281, 281, 196, 197, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 92, 0, 0, 0, 0, 0, 0, 0, 0, 0, 124, 116, 116, 116, 116, 132, 0, 0, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 212, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 103, 138, 95, 0, 0, 66, 0, 0, 0, 0, 0, 122, 114, 114, 114, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 196, 197, 0, 80, 24, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 32, 0, 0, 0, 0, 0, 0, 92, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 212, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 93, 0, 0, 0, 0, 0, 0, 0, 0, 0, 137, 137, 137, 137, 137, 0, 0, 115, 0, 0, 0, 0, 0, 213, 0, 0, 0, 0, 0, 0, 0, 0, 197, 0, 0, 0, 0, 16, 281, 281, 281, 80, 24, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 212, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 93, 0, 0, 0, 0, 0, 0, 0, 0, 0, 124, 116, 116, 116, 132, 0, 0, 0, 0, 0, 0, 0, 0, 203, 0, 0, 0, 0, 0, 0, 0, 0, 197, 0, 0, 0, 0, 71, 85, 281, 80, 24, 0, 0, 189, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 32, 32, 32, 32, 0, 0, 0, 0, 0, 0, 0, 0, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 212, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 107, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 92, 0, 0, 0, 0, 205, 0, 0, 0, 16, 0, 0, 281, 0, 197, 0, 0, 0, 0, 0, 16, 80, 24, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 32, 32, 32, 32, 32, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 107, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 227, 217, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 285, 0, 0, 0, 0, 0, 0, 0, 0, 0, 122, 114, 114, 130, 0, 281, 281, 0, 197, 0, 0, 0, 0, 0, 71, 24, 0, 0, 0, 0, 0, 56,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 32, 32, 0, 0, 0, 102, 138, 96, 0, 0, 32, 32, 32, 32, 32, 32, 32, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 122, 114, 114, 130, 0, 212, 0, 0, 0, 0, 122, 114, 114, 114, 130, 0, 0, 0, 0, 0, 0, 0, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 229, 0, 0, 0, 0, 0, 0, 0, 0, 0, 137, 137, 137, 137, 0, 281, 281, 0, 196, 197, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 196,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 32, 0, 0, 104, 138, 94, 0, 0, 32, 32, 32, 32, 32, 32, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 137, 137, 137, 137, 0, 212, 107, 115, 0, 0, 137, 137, 137, 137, 137, 0, 0, 107, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 66, 66, 66, 66, 0, 0, 0, 0, 0, 0, 229, 0, 0, 0, 0, 0, 0, 0, 0, 0, 124, 116, 116, 132, 0, 281, 281, 281, 0, 197, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 197,
            197, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 138, 94, 0, 0, 0, 0, 72, 56, 78, 32, 32, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 124, 116, 116, 132, 0, 212, 0, 0, 0, 0, 124, 116, 116, 116, 132, 0, 0, 0, 0, 0, 0, 0, 66, 66, 66, 0, 0, 0, 0, 66, 66, 66, 66, 66, 0, 0, 49, 63, 0, 0, 0, 229, 0, 0, 93, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 66, 281, 281, 281, 0, 197, 79, 0, 0, 0, 189, 0, 0, 0, 0, 8, 196, 197,
            197, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 138, 94, 0, 0, 72, 56, 8, 49, 79, 78, 32, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 212, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 67, 66, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49, 63, 0, 0, 0, 229, 0, 0, 92, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 281, 281, 281, 281, 196, 196, 197, 78, 32, 32, 32, 0, 0, 8, 196, 197, 0,
            197, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 103, 138, 95, 0, 56, 8, 66, 66, 49, 49, 63, 32, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 227, 217, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 66, 66, 0, 0, 0, 49, 49, 0, 0, 0, 0, 0, 0, 0, 0, 49, 79, 78, 0, 0, 229, 0, 0, 93, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 197, 281, 281, 281, 0, 0, 197, 63, 32, 32, 32, 0, 8, 196, 197, 0, 0,
            197, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49, 66, 66, 49, 49, 63, 32, 0, 0, 72, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 212, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 66, 0, 0, 0, 0, 0, 0, 0, 0, 49, 80, 64, 64, 85, 0, 0, 0, 0, 66, 66, 49, 63, 0, 0, 229, 0, 0, 0, 0, 0, 0, 205, 0, 0, 0, 0, 32, 0, 0, 197, 281, 281, 281, 0, 0, 66, 0, 32, 32, 32, 0, 196, 197, 0, 0, 0,
            197, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 24, 32, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 64, 0, 0, 0, 0, 0, 212, 0, 0, 0, 0, 0, 0, 0, 32, 0, 71, 85, 0, 66, 66, 0, 0, 0, 66, 66, 0, 0, 80, 24, 32, 32, 71, 64, 64, 85, 49, 49, 81, 49, 63, 0, 0, 284, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 16, 0, 281, 281, 281, 0, 281, 0, 197, 24, 32, 32, 32, 0, 197, 0, 0, 0, 0,
            197, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 24, 32, 32, 0, 0, 16, 49, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 32, 0, 0, 0, 0, 227, 217, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 66, 66, 66, 66, 66, 66, 66, 66, 0, 24, 32, 32, 32, 32, 32, 32, 71, 85, 49, 66, 49, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 32, 16, 0, 281, 281, 281, 0, 0, 196, 197, 24, 32, 32, 32, 0, 197, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 32, 32, 32, 0, 72, 8, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 24, 32, 0, 0, 72, 8, 212, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 0, 66, 66, 66, 66, 66, 81, 66, 0, 0, 32, 32, 32, 32, 32, 32, 32, 32, 71, 85, 49, 80, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 8, 0, 197, 281, 281, 0, 0, 197, 24, 32, 32, 32, 32, 0, 197, 0, 0, 221, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 93, 0, 0, 0, 0, 0, 0, 24, 32, 32, 32, 0, 16, 49, 49, 49, 0, 0, 0, 0, 0, 0, 102, 86, 87, 88, 96, 64, 85, 49, 63, 32, 32, 0, 0, 16, 267, 212, 268, 49, 49, 63, 0, 0, 0, 0, 0, 0, 0, 0, 16, 49, 66, 67, 66, 66, 66, 49, 80, 24, 32, 32, 32, 32, 32, 32, 32, 32, 32, 71, 64, 24, 0, 0, 0, 0, 0, 0, 0, 93, 0, 0, 0, 0, 0, 0, 32, 16, 0, 196, 197, 281, 281, 0, 0, 197, 0, 32, 32, 32, 32, 0, 197, 0, 0, 0, 0,
            0, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 92, 0, 0, 0, 0, 0, 0, 32, 32, 32, 32, 72, 8, 49, 49, 49, 0, 0, 0, 0, 0, 0, 104, 86, 87, 88, 96, 0, 16, 80, 24, 32, 0, 0, 72, 8, 267, 100, 268, 80, 64, 24, 0, 0, 0, 0, 0, 32, 0, 0, 71, 85, 49, 66, 66, 66, 66, 80, 24, 32, 32, 32, 32, 32, 32, 32, 32, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 102, 138, 96, 0, 0, 0, 0, 0, 32, 16, 0, 197, 0, 0, 281, 0, 281, 197, 0, 32, 32, 32, 0, 0, 197, 221, 0, 196, 196,
            0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 32, 32, 32, 71, 0, 49, 49, 0, 24, 0, 0, 0, 0, 0, 104, 86, 87, 88, 96, 0, 71, 24, 32, 32, 0, 0, 71, 85, 49, 80, 64, 24, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 16, 49, 66, 75, 66, 49, 63, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 138, 94, 0, 0, 0, 0, 0, 32, 71, 0, 196, 196, 196, 197, 281, 0, 0, 0, 32, 32, 32, 71, 85, 196, 196, 196, 197, 64,
            0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 32, 32, 32, 0, 71, 0, 0, 24, 0, 0, 0, 0, 0, 0, 104, 86, 87, 88, 96, 0, 32, 32, 32, 0, 0, 0, 0, 71, 64, 24, 0, 0, 0, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 71, 64, 85, 49, 80, 64, 24, 32, 32, 32, 32, 72, 56, 56, 78, 32, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 138, 94, 0, 0, 0, 0, 0, 32, 32, 71, 0, 0, 0, 197, 281, 281, 0, 0, 32, 32, 32, 32, 71, 0, 0, 80, 24, 32,
            0, 0, 0, 0, 16, 0, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 78, 32, 32, 32, 32, 0, 71, 24, 0, 0, 32, 32, 0, 0, 0, 103, 86, 87, 88, 95, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 72, 56, 0, 32, 32, 32, 32, 32, 32, 32, 71, 64, 24, 32, 32, 32, 32, 32, 32, 16, 49, 49, 79, 78, 32, 32, 0, 0, 0, 0, 0, 207, 207, 0, 0, 104, 138, 94, 0, 0, 0, 0, 0, 0, 32, 0, 71, 64, 85, 281, 281, 281, 63, 32, 0, 32, 32, 32, 32, 71, 0, 24, 32, 32,
            0, 0, 0, 32, 71, 0, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 32, 32, 32, 0, 0, 0, 32, 32, 32, 32, 32, 32, 0, 0, 0, 0, 0, 0, 0, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 72, 8, 0, 79, 0, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 72, 8, 49, 49, 49, 79, 78, 32, 32, 0, 0, 0, 207, 207, 207, 207, 0, 104, 138, 94, 0, 0, 0, 0, 0, 0, 0, 0, 32, 32, 16, 281, 281, 0, 0, 0, 0, 32, 32, 32, 32, 32, 32, 32, 32, 32,
            0, 0, 0, 0, 0, 0, 66, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 78, 32, 32, 32, 0, 32, 32, 32, 32, 32, 72, 56, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 72, 56, 56, 8, 0, 0, 0, 79, 0, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 16, 0, 0, 49, 0, 0, 0, 78, 32, 32, 0, 0, 207, 207, 0, 207, 207, 207, 138, 95, 0, 207, 0, 0, 0, 0, 0, 0, 32, 0, 71, 85, 49, 197, 79, 78, 56, 78, 32, 32, 32, 32, 32, 32, 32, 32,
            0, 0, 0, 0, 0, 0, 66, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 93, 0, 0, 0, 0, 0, 0, 0, 0, 63, 32, 32, 0, 32, 32, 32, 32, 32, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 56, 56, 0, 32, 32, 32, 32, 72, 56, 56, 8, 0, 0, 0, 0, 0, 0, 0, 79, 0, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 72, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 207, 0, 0, 207, 207, 0, 0, 0, 207, 207, 0, 0, 0, 0, 0, 32, 32, 32, 71, 85, 196, 197, 79, 49, 79, 78, 32, 32, 32, 32, 32, 32, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 78, 32, 0, 0, 0, 32, 32, 72, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 56, 56, 56, 56, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 0, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 207, 0, 0, 207, 207, 0, 207, 207, 207, 207, 207, 207, 207, 0, 0, 32, 32, 32, 32, 71, 49, 197, 49, 49, 66, 63, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 32, 72, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 207, 207, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 56, 0, 32, 32, 32, 32, 32, 32, 72, 56, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 207, 207, 207, 207, 207, 0, 207, 207, 207, 207, 207, 207, 207, 207, 0, 32, 32, 32, 32, 32, 85, 196, 197, 49, 0, 24, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 32, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 207, 207, 207, 207, 207, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 56, 56, 56, 56, 56, 56, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 207, 207, 207, 207, 207, 0, 207, 207, 207, 207, 0, 0, 207, 207, 207, 0, 0, 0, 0, 0, 71, 85, 66, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 32, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 207, 207, 207, 207, 207, 207, 207, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 207, 207, 0, 0, 0, 0, 0, 207, 207, 207, 0, 0, 0, 0, 207, 207, 207, 0, 0, 0, 0, 32, 71, 64, 24, 32, 0, 0, 0, 72, 56, 8, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 102, 138, 96, 0, 0, 0, 0, 0, 0, 0, 0, 92, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 207, 207, 207, 207, 207, 207, 207, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 122, 114, 114, 114, 130, 0, 0, 0, 207, 207, 207, 0, 207, 207, 207, 0, 0, 0, 0, 207, 207, 207, 207, 0, 0, 0, 32, 32, 32, 32, 32, 0, 72, 56, 8, 49, 49, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 104, 138, 94, 0, 0, 0, 0, 0, 0, 0, 0, 138, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 207, 207, 207, 207, 207, 207, 0, 0, 0, 0, 0, 0, 190, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 137, 137, 137, 137, 137, 207, 207, 207, 207, 207, 207, 0, 207, 207, 207, 0, 0, 0, 0, 207, 207, 207, 207, 0, 0, 0, 32, 32, 32, 32, 32, 0, 16, 49, 49, 49, 49, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 104, 138, 94, 0, 0, 0, 0, 0, 0, 0, 0, 138, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 207, 207, 207, 207, 0, 0, 0, 0, 0, 0, 0, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 124, 116, 116, 116, 132, 0, 0, 207, 207, 207, 207, 0, 207, 207, 207, 207, 0, 0, 0, 207, 207, 207, 207, 207, 0, 0, 0, 0, 0, 0, 0, 0, 16, 49, 49, 49, 49, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 104, 138, 94, 0, 0, 0, 0, 0, 0, 0, 0, 93, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 207, 207, 207, 207, 0, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 0, 0, 0, 0, 0, 0, 0, 16, 49, 221, 49, 49, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 92, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 32, 0, 0, 0, 207, 207, 207, 0, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 0, 0, 0, 0, 32, 0, 16, 49, 49, 49, 49, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 125, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79, 78, 0, 32, 32, 32, 0, 0, 207, 207, 207, 0, 0, 0, 0, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 0, 0, 32, 0, 71, 85, 49, 49, 49, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 66, 67, 0, 93, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 115, 115, 0, 0, 0, 140, 107, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 92, 0, 0, 49, 79, 78, 32, 32, 0, 0, 0, 207, 207, 207, 207, 207, 207, 0, 207, 207, 207, 207, 207, 207, 207, 0, 0, 207, 207, 207, 207, 207, 0, 0, 0, 0, 16, 49, 49, 49, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 0, 0, 0, 0, 66, 66, 0, 0, 0, 0, 0, 0, 0, 0, 66, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49, 49, 63, 32, 32, 32, 32, 0, 207, 207, 207, 207, 207, 207, 0, 207, 207, 207, 207, 207, 207, 0, 0, 0, 0, 207, 207, 207, 207, 0, 0, 0, 0, 16, 49, 49, 49, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 0, 0, 0, 0, 66, 66, 66, 0, 0, 0, 0, 0, 0, 0, 66, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 115, 0, 0, 0, 0, 107, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49, 49, 63, 32, 32, 32, 32, 0, 207, 207, 207, 207, 207, 207, 0, 207, 207, 207, 207, 207, 207, 0, 0, 0, 0, 0, 207, 207, 207, 0, 0, 0, 0, 16, 49, 49, 49, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 0, 0, 92, 0, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 107, 107, 0, 0, 115, 0, 134, 0, 0, 0, 49, 49, 63, 32, 32, 32, 32, 0, 207, 207, 207, 207, 207, 207, 0, 207, 207, 207, 207, 207, 207, 0, 0, 0, 0, 207, 207, 207, 207, 0, 0, 0, 0, 16, 49, 221, 49, 0, 0,
            0, 0, 122, 114, 114, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 0, 49, 49, 63, 0, 32, 32, 32, 0, 207, 207, 207, 207, 207, 207, 0, 207, 207, 207, 207, 207, 207, 0, 0, 0, 0, 207, 207, 207, 207, 0, 0, 0, 0, 71, 64, 85, 49, 49, 0,
            0, 0, 113, 113, 113, 113, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 66, 0, 0, 0, 0, 0, 0, 0, 0, 134, 134, 134, 134, 0, 0, 117, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 0, 49, 80, 24, 0, 32, 32, 32, 0, 207, 207, 207, 207, 207, 207, 0, 0, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 0, 0, 0, 0, 0, 0, 71, 0, 49, 221,
            0, 0, 129, 129, 129, 129, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 122, 114, 114, 114, 130, 0, 0, 0, 0, 0, 0, 0, 0, 117, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 144, 136, 144, 0, 0, 0, 136, 0, 0, 189, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49, 49, 63, 0, 0, 32, 32, 72, 207, 207, 207, 207, 207, 207, 207, 0, 0, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 0, 0, 0, 0, 0, 0, 0, 71, 64, 64,
            0, 0, 124, 116, 116, 132, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 113, 113, 113, 113, 113, 0, 0, 0, 135, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 102, 86, 87, 88, 49, 80, 24, 0, 32, 32, 32, 0, 207, 207, 207, 207, 207, 207, 207, 0, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 66, 0, 0, 93, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 129, 129, 129, 129, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 136, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 144, 136, 144, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 86, 87, 88, 94, 24, 0, 32, 0, 0, 0, 0, 207, 207, 207, 207, 207, 207, 207, 0, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 66, 66, 0, 0, 0, 0, 0, 66, 0, 0, 0, 0, 0, 66, 75, 0, 66, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 124, 116, 116, 116, 132, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 136, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 144, 144, 136, 0, 0, 0, 0, 0, 144, 136, 0, 0, 0, 104, 86, 87, 88, 94, 0, 0, 32, 0, 0, 0, 207, 207, 0, 0, 0, 207, 207, 207, 0, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 0, 0, 0, 0, 0, 0, 66, 66, 0, 66, 66, 0, 0, 0, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 144, 144, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 86, 87, 88, 94, 0, 0, 32, 0, 0, 207, 207, 0, 0, 0, 0, 207, 207, 207, 0, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 92, 0, 0, 66, 81, 0, 0, 66, 0, 0, 75, 0, 0, 0, 0, 0, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 144, 144, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 86, 87, 88, 94, 0, 0, 0, 0, 207, 207, 207, 0, 0, 0, 207, 207, 207, 207, 0, 207, 207, 0, 0, 0, 207, 207, 207, 207, 207, 207, 207, 0, 0, 122, 114, 130, 0, 0, 122, 114, 114, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 103, 86, 87, 88, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 86, 87, 88, 94, 0, 0, 0, 0, 207, 207, 207, 0, 0, 207, 207, 207, 207, 207, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 113, 113, 113, 113, 113, 113, 113, 113, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 86, 87, 88, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 144, 144, 144, 0, 0, 0, 0, 0, 103, 86, 87, 88, 95, 0, 0, 0, 0, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 0, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 0, 0, 121, 121, 121, 121, 121, 121, 121, 121, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 102, 138, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 86, 87, 88, 96, 0, 0, 0, 0, 0, 0, 144, 136, 0, 0, 0, 0, 144, 136, 144, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 144, 144, 136, 144, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 0, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 129, 129, 129, 129, 129, 129, 129, 129, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 138, 94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 86, 87, 88, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 0, 207, 207, 207, 207, 207, 0, 0, 0, 207, 207, 207, 207, 207, 207, 122, 114, 130, 0, 0, 122, 114, 114, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 138, 94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 103, 86, 87, 88, 95, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 136, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 136, 144, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 207, 0, 0, 0, 0, 0, 0, 0, 0, 0, 207, 207, 207, 207, 0, 0, 0, 0, 0, 207, 207, 207, 207, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 138, 94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 122, 114, 114, 114, 130, 0, 0, 0, 207, 207, 207, 207, 0, 207, 207, 207, 207, 207, 207, 207, 0, 0, 0, 0, 0, 207, 207, 207, 0, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 103, 138, 95, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 136, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 137, 137, 137, 137, 137, 0, 207, 207, 207, 207, 207, 207, 0, 207, 207, 207, 207, 207, 207, 207, 0, 0, 0, 0, 207, 207, 207, 207, 80, 0, 32, 32, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 124, 116, 116, 116, 132, 0, 207, 207, 207, 207, 207, 207, 0, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 0, 63, 32, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 207, 207, 207, 207, 207, 207, 0, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 80, 24, 32, 32, 32, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 135, 0, 135, 0, 0, 0, 107, 0, 0, 0, 0, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 207, 207, 207, 207, 207, 0, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 49, 63, 32, 32, 32, 32, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 122, 114, 114, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 207, 207, 207, 207, 0, 207, 207, 207, 207, 207, 0, 0, 0, 0, 207, 0, 0, 0, 80, 24, 32, 32, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 93, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 137, 137, 137, 137, 0, 0, 0, 0, 0, 0, 107, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49, 80, 64, 64, 24, 32, 32, 32, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 93, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 124, 116, 116, 132, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 92, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 24, 32, 32, 32, 32, 32, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 93, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 102, 138, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 32, 32, 32, 32, 32, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 138, 94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 102, 138, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 102, 138, 96, 0, 0, 0, 0, 0, 0, 0, 0, 32, 32, 32, 32, 32, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 93, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 138, 94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 138, 94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 138, 94, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 138, 94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 138, 94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 138, 94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 92, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 103, 138, 95, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 138, 94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 138, 94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 92, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 115, 0, 107, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 103, 138, 95, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 103, 138, 95, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 93, 0, 0, 0, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 115, 115, 0, 0, 0, 0, 107, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66,
            0, 0, 0, 0, 0, 0, 198, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 66,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 93, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 107, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 93, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 251, 250, 250, 250, 265, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 92, 0, 0, 0, 0, 0, 0, 92, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 0, 0, 0, 249, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 0, 0, 0, 249, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 93, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 0, 0, 0, 249, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 92, 0, 0, 259, 258, 258, 258, 266, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 93, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 92, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 92, 0, 0, 0, 0, 0, 0, 93, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 122, 114, 114, 114, 130, 92, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 207, 207, 207, 207,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 137, 137, 137, 137, 137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 87, 88, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 207, 207, 207, 207, 207, 207,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 124, 116, 116, 116, 132, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 87, 88, 0, 0, 0, 0, 0, 0, 0, 0, 0, 189, 0, 0, 0, 0, 207, 207, 207, 207, 207, 207,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 189, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 87, 88, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 207, 207, 0, 207, 207, 207,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 87, 88, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 207, 207, 207, 207, 207, 207, 207,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 207, 207, 207, 207, 207, 207, 207,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		],
},

		callAreaJoinOnInit: true,
		onAreaJoin: function () {
			// samhain snakes and lights
			if (Event.event === "Samhain" && Player.quests.completedQuestArray.includes("Overdraft")) {
				let no = Random(10,20); // num of snakes
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

			// remove cat paw prints unless the quest is active
			let pawPrintTiles = [212, 209, 210, 211, 220, 217, 218, 219, 228, 225, 226, 227];
			for (let i = 0; i < map.layers[2].length; i++) {
				if (pawPrintTiles.includes(map.layers[2][i])) {
					map.layers[2][i] = 0;
				}
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
			if (Player.quests.questLastFinished.eaglecrest[9] > yesterdayDate || IsNullLike(Player.quests.questLastFinished.eaglecrest[9])) { // not finished, or finished after yesterday
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

		images: {
			tiles: {normal: "assets/tilemap/eaglecrest.png", christmas: "assets/tilemap/eaglecrestChristmas.png"},
			melee: {normal: "assets/projectiles/melee.png"},
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
			crate: {normal: "assets/objects/crate.png"},
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
			beeSwarmCorpse: {normal: "assets/corpses/toad.png"},
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
			sharptooth: {normal: "assets/npcs/sharptooth.png"}
		},

		areaTeleports: [
			{
				// teleport to eaglecrest city
				x: 3000,
				y: 130,
				width: 120,
				height: 2,
				teleportTo: "eaglecrest",
				destinationX: 3750,
				destinationY: 4735,
			},
			{
				// teleport to cave opening
				x: 7450,
				y: 4100,
				width: 2,
				height: 600,
				teleportTo: "caveOpening",
				destinationX: 960, // tba
				destinationY: 1670,
				teleportCondition: function () {
					return false;
				},
				teleportFailText: "Archaeological exploration of the <i>Eaglecrest Caverns</i> has not yet commenced! Check back soon.",
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
							return Player.quests.npcProgress.eaglecrest[2] === 2 && Player.quests.questProgress.overdraftFrogDeadOne && Player.quests.questProgress.overdraftFrogDeadTwo;
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
                            role: "questStartFinish",
                            quest: Quests.eaglecrest[7]
                        },
                        {
                            role: "questStart",
                            quest: Quests.eaglecrest[12]
                        },
						{
	                        role: "text",
	                        chooseText: "Tell <strong>Fisherman Guimtal</strong> about <strong>Fisher Sharptooth</strong>.",
	                        chat: `Ah, I see. They're a cat.<br><br>
							Yah see, I've never actually spoken to 'em, I just heard from mah friends.<br><br>
							Why don't yah try speakin' to some <b>shopkeepers</b> in <strong>Eaglecrest</strong> and see if they sellin' any <b>translators</b> or somethin' like that.<br><br>
							I'll see yah around, then.`,
	                        buttons: ["Leave"],
	                        showCloseButton: false,
	                        forceChoose: true, // forces choose dom
	                        functions: [function () {
	                            // close page
	                            Dom.closePage("textPage");
	                            // quest progress
	                            Player.quests.questProgress.troubledWaters2Progress = 2;
	                            Dom.quests.active();
	                        }],
	                        roleRequirement: function () {
	                            return Player.quests.questProgress.troubledWaters2Progress === 1;
	                        },
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
                x: 4950,
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
	                        role: "text",
	                        chooseText: "Say that Fisherman Guimtal sent you.",
	                        chat: "Miau, miau miau miau miau! Miau miau miau.",
	                        buttons: ["Leave"],
	                        showCloseButton: false,
	                        forceChoose: true, // forces choose dom
	                        functions: [function () {
	                            // close page
	                            Dom.closePage("textPage");
	                            // quest progress
	                            Player.quests.questProgress.troubledWaters2Progress = 1;
	                            Dom.quests.active();
	                        }],
	                        roleRequirement: function () {
	                            return Player.quests.questProgress.troubledWaters2Progress === 0;
	                        },
	                    },
						{
	                        role: "questFinish",
	                        quest: Quests.eaglecrest[12],
						},
                ],
                chat: {
                    questProgress: "Yous looks like yous never seen a cat fish before.",
                    notUnlockedRoles: "Miau, miau miau miau.",
                    //questComplete: "Thank yah for the help, I guess I'll see yah around.",
                    //inventoryFull: "Yah bags are full, come back when yah got room.",
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
						role: "questStartFinish",
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
			{x: [-89, -89, 50.2, -1, 57.1, 1779, -9.5, -4.6, -89.8, 1785.1, 2369.8, 2241.9, 2497.3, 2667.3, 2065.4, 3319.9, 5207.9, 5303.8, 5437.7, 5089.6, 4377.3, 6891.7, 6969, 6614.6, 7074.1, 7074.1, 7076.4, 6351.2, 5097.8, 4534.6, 3993.3, 3864.3], y: [482.3, 23, 1454.5, 1249, 989.1, 2272, 3657, 3307.7, 5944.1, 4795.9, 5726.4, 5964.9, 5964.2, 6060.9, 6060.9, 5670.8, 4677, 4981.5, 4784.6, 4888.5, 4848.7, 5336.5, 4874.9, 5013.1, 4060.6, 3791.6, 2637.4, 2397.4, 2194, 2209.7, 2122.4, 759.6], image: 'riverIdol', name: '∞River Idol'},
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
            },
			{
                x: [3099, 2434.9, 2819.4, 2306.6, 2555.5, 2627.6, 2557.2, 5077.8, 2603.3, 2244, 5045.3, 2246.9, 4788.8, 482.5, 762.8, 1415.4, 1105.9],
                y: [377.4, 623.7, 625.9, 1155.9, 1908.7, 2445.1, 2958, 3411.8, 3424.6, 3754.2, 4095.2, 4285.4, 4417.7, 518.1, 518.1, 522.3, 522.3],
                name: "Lantern",
				imageDay: "lanternDayLeft",
				imageNight: "lanternNightLeft",
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
				if (Player.quests.activeQuestArray.includes("Cat Warrior")) {
					return false; // no collision
				}
				else {
					return true;
				}
			}},
			// bit leading from the start to the water bit
			{x: 510, y: 2660, width: 60, height: 300, collisionCondition: function () {
				if (Player.quests.activeQuestArray.includes("Cat Warrior") && Player.quests.questProgress.catLifeProgress > 1) {
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
				else if (Player.quests.activeQuestArray.includes("Cat Warrior") && (typeof Player.quests.questProgress.catLifeProgress === "undefined" || Player.quests.questProgress.catLifeProgress === 0)) {
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

		indoors: true,

		borderColour: "white",

		mapData: {
			cols: 20,
			rows: 10,
			tsize: 60,
			tilesPerRow: 8,
			layers: [[204],]
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
			Game.setTimeout(Game.hero.getOffMount.bind(Game.hero), 10000);removeAnimation
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
{x:[3236.5, 2162.2, 2642.1, 1056.3, 730.1, 6618, 5424.7, 1647.7, 3615.9, 1914.7, 1374.7, 28.7, 4716, 182.7, 6067.5, 470.2, 2376.5, 2911.9, 7273.5, 3838.9, 6911.3, 0, 2727.8, 4049.2, 996.4, 4739, 680, 6057.7, 5408.9, 2446.1, 3798.6, 7638.7, 7297.9, 61.9, 276.1, 829.4, 2667.8, 6284.3, 5486, 1178.8, 709.1, 999.2, 2411.7, 6587.9, 7320, 34.8, 429.6, 4365.2, 5022, 7689.2, 780.6, 1463.8, 5594, 6384.3, 210.3, 6667.5, 1040.1, 8032.7, 390, 71, 1446.4, 5329, 6815.1, 795, 1182.1, 6176.7, 301.1, 4651.6, 520.7, 66.2, 1532.8, 8112.3, 5431.1, 5954.6, 6893.7, 306.6, 1318.6, 901.5, 6603.7, 1107, 1491.2, 202.5, 740, 959, 73.7, 305.7, 1255.2, 3191, 8043.1, 1503.2, 7113.1, 3507.4, 3830.4, 2670.8, 2062.4, 7453.8, 6741.5, 4190.7, 2970.1, 8362.9, 674.3, 338.5, 78.5, 996.9, 2398.6, 1358.3, 3984.4, 7028.2, 8074.5, 2875.1, 7507.8, 6711.9, 3959.4, 7786.8, 2725.5, 6984.2, 4198.6, 536.5, 2503.8, 7534.8, 1408.2, 2092.7, 85.4, 6524.4, 907.7, 6824.9, 2793.3, 7786.8, 4213.8, 1243.4, 634.8, 6315.6, 1539.1, 2143.9, 8110.4, 7507.8, 7026.1, 6638.8, 2819.8, 7781.1, 10187.1, 514.3, 4233, 8254.4, 6307.4, 6887.3, 8559.8, 1745.2, 2850.2, 126.5, 9924.4, 2507.4, 8892.2, 8332.2, 7593.1, 10184, 6600.6, 4076.9, 9303.3, 979.1, 3170.7, 3617.4, 9593.2, 7026.1], y:[1440.5, 1483, 1499.6, 1514.7, 1518.3, 1522.3, 1533.4, 1537.2, 1538.7, 1550.5, 1551.9, 1552.1, 1552.6, 1552.6, 1586.2, 1591.7, 1598.5, 1622.7, 1638.8, 1655.2, 1748.1, 1804.3, 1804.9, 1814.4, 1820.9, 1848.9, 1877.6, 1915.3, 1938.9, 1955.6, 1965, 2034, 2037.5, 2111.6, 2117.3, 2130.5, 2183.9, 2246.6, 2274.2, 2288.4, 2315, 2346, 2373.2, 2399, 2429.4, 2446.4, 2451, 2456.9, 2506.7, 2507.8, 2564.1, 2590.2, 2625.3, 2664.9, 2688.2, 2710.8, 2731.6, 2746.5, 2789.9, 2870.4, 2876, 2973.5, 3005.8, 3036.8, 3046, 3062, 3096.6, 3168, 3176.9, 3194.4, 3200.6, 3253.3, 3279.1, 3284.2, 3290.7, 3328.9, 3354.3, 3404.2, 3440.4, 3533, 3560.6, 3569.5, 3605.5, 3769.4, 3792, 3806.9, 3821.2, 3827, 3860, 3871.4, 3876.2, 3889.5, 3899.3, 3917.4, 3940, 3963.5, 3998.1, 4003.5, 4028.6, 4055.9, 4057.7, 4097.1, 4097.1, 4100.3, 4116.2, 4162, 4316.4, 4328, 4360.6, 4387.4, 4532, 4551.7, 4603.5, 4618.5, 4636.9, 4662.8, 4736, 4826.9, 4829, 4841.4, 4854.2, 4894.2, 4897.8, 4903.1, 4978.6, 4985.9, 5026.2, 5031.7, 5072.6, 5083.5, 5160.9, 5174.9, 5238.9, 5270.4, 5281.9, 5285, 5297.9, 5302, 5363.2, 5391.5, 5430.3, 5443.7, 5492.6, 5533.1, 5601.1, 5627.6, 5652.5, 5664.1, 5716.3, 5746.5, 5782.7, 5808.5, 5846.5, 5846.5, 5850.6, 5856, 5860.9, 5862.1, 5865.9, 5868.4, 5886.8, 5886.8, 5891.5, 5984.5], image:"spruceTree",name:"Spruce",},

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


};

// TBD - remove since this is redundant (map.setTile should be used instead)
// sets a tile on the Map (area and main) (specifyable area for if it is used in a setTimeout)
function SetTile (area, layer, col, row, newTileNum) {
	let map = Areas[area].mapData;
	map.layers[layer][row * map.cols + col] = newTileNum;
}
