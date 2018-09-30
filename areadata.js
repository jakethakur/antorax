var LootTables = { // loot table templates
	nilbogGoblin: [
		{ // unidentified item
			item: {
				name: "unidentified",
				tier: 1,
				area: "Eaglecrest Logging Camp",
			},
			chance: [ // number rolled from 0 to 100, and then multiplied by looting (100% default)
				60,				// 0
				Infinity,		// 1
			],
		},
		{ // gold
			item: Items.currency[2],
			chance: [
				45,				// 0
				95,				// 1
				Infinity,		// 2
			],
		},
		{ // log
			item: Items.item[2],
			chance: [
				80,				// 0
				Infinity,		// 1
			],
		},
		{ // scrap of cloth
			item: Items.item[3],
			chance: [
				30,				// 0
				Infinity,		// 1
			],
		},
		/*{ // goblin brewed potion (to be made)
			item: Items.bag[3],
			chance: [
				80,				// 0
				Infinity,		// 1
			],
		},*/
		{ // goblin sewn bag
			item: Items.bag[3],
			chance: [
				96,				// 0
				Infinity,		// 1
			],
		},
		{ // Fisherman Tobenam's Lost Rod
			item: Items.item[7],
			condition: function () {
				if (Player.quests.activeQuestArray.includes("A Lost Fishing Rod") && !Dom.inventory.check(7, "item", 1)) {
					return true; // quest is active and player doesn't already have the rod
				}
				return false;
			},
			chance: [
				65,				// 0
				Infinity,		// 1
			],
		},
	],
}

var Areas = {
	
	tutorial: {
		
		data: {
			name: "Fishers' Valley",
			level: "Level 1 - 5",
			territory: "Neutral territory",
		},

		mapData: {
			cols: 43,
			rows: 10,
			tsize: 60,
			tilesPerRow: 7,
			waterTiles: [24, 31, 38],
			pathTiles: [2, 9, 16, 23, 30, 37, 44, 51, 58],
			layers: [
				[50, 1, 50, 2, 50, 1, 50, 50, 50, 50, 50, 50, 39, 24, 24, 4, 50, 1, 50, 50, 50, 50, 36, 50, 50, 5, 6, 7, 50, 50, 50, 50, 36, 50, 50, 50, 36, 50, 50, 50, 50, 50, 50, 50, 8, 50, 2, 50, 8, 50, 50, 50, 50, 26, 27, 39, 24, 38, 4, 50, 8, 50, 50, 50, 50, 50, 50, 50, 12, 13, 14, 50, 43, 50, 50, 50, 50, 36, 50, 50, 50, 50, 50, 50, 50, 50, 43, 15, 50, 2, 50, 15, 50, 26, 27, 50, 26, 27, 39, 24, 24, 4, 50, 15, 43, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 36, 50, 50, 50, 50, 50, 50, 50, 43, 50, 27, 50, 50, 37, 2, 2, 2, 2, 2, 2, 2, 2, 10, 3, 3, 17, 2, 2, 2, 9, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 60, 26, 27, 50, 50, 50, 50, 50, 50, 50, 50, 50, 39, 24, 24, 4, 26, 27, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 19, 20, 21, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 4, 50, 50, 50, 50, 50, 50, 50, 26, 27, 43, 50, 39, 24, 24, 81, 32, 60, 50, 50, 50, 50, 50, 43, 50, 50, 50, 50, 50, 50, 22, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 81, 60, 50, 50, 50, 50, 50, 26, 27, 50, 53, 32, 25, 24, 24, 24, 24, 81, 60, 50, 50, 50, 50, 50, 50, 50, 50, 5, 6, 7, 29, 43, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 24, 81, 32, 32, 32, 32, 32, 32, 32, 32, 25, 24, 24, 24, 24, 24, 24, 24, 81, 32, 60, 50, 50, 50, 50, 50, 50, 12, 13, 14, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 36, 50, 50, 24, 24, 24, 24, 24, 24, 24, 38, 31, 24, 24, 24, 24, 24, 52, 45, 38, 24, 24, 24, 81, 32, 32, 60, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 31, 38, 24, 24, 24, 24, 24, 24, 24, 24, 24, 38, 52, 45, 52, 45, 45, 24, 31, 24, 24, 24, 24, 81, 32, 32, 32, 32, 32, 60, 50, 50, 50, 50, 50, 50, 50, 36, 50, 50, 50, 50, 36],
				[],
			],
		},
		
		images: {
			names: [
				"tiles",
				"driver",
				"weaponsmith",
				"cart",
				"fisherman",
			],
			
			addresses: [
				"./assets/tilemap/tutorial.png",
				"./assets/npcs/driver.png",
				"./assets/npcs/weaponsmith.png",
				"./assets/objects/cartEaglecrest.png",
				"./assets/npcs/fisherman.png",
			],
		},
		
		song_day: "./assets/music/Pippin-the-Hunchback.mp3",
		song_night: "./assets/music/Pippin-the-Hunchback-night.mp3",
		
		waterType: "brackish",
		
		checkpoint: false,
		player: {
			x: 2297,
			y: 387,
		},
		
		areaTeleports: [
			{
				// teleport to logging camp (path - north)
				x: 315,
				y: -49,
				width: 210,
				height: 2,
				teleportTo: "eaglecrestLoggingCamp",
				destinationX: 880,
				destinationY: 1100,
			},
		],
		
		NPCs: [
			{
				x: 2080,
				y: 290,
				image: "driver",
				name: "Cart Driver",
				hostility: "friendly",
				level: 10,
				stats: {
					maxHealth: 100,
					defence: 1,
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
				x: 1300,
				y: 350,
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
						sold: Player.class === "k" ? [Items.sword[2],] : (Player.class === "m" ? [Items.staff[2],] : (Player.class === "a" ? [Items.bow[2],] : [])),
						role: "merchant",
					},
				],
				chat: {
					shopGreeting: "Would you like to buy anything?",
					shopLeave: "Come back some time.",
					inventoryFull: "Looks like your bag's too full! Empty it a bit and come back.",
					tooPoor: "You can't afford that item. Kill some enemies and come back.",
				},
			},
			{
				x: 263,
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
						quest: Quests.eaglecrestLoggingCamp[6], 
						role: "questStart",
					},
					{
						quest: Quests.eaglecrestLoggingCamp[6], 
						role: "questFinish",
					},
					{
						quest: Quests.eaglecrestLoggingCamp[7], 
						role: "questStart",
					},
					{
						quest: Quests.eaglecrestLoggingCamp[7], 
						role: "questFinish",
					},
					{
						quest: Quests.eaglecrestLoggingCamp[8], 
						role: "questStart",
					},
					{
						quest: Quests.eaglecrestLoggingCamp[8], 
						role: "questFinish",
					},
					{
						quest: Quests.eaglecrestLoggingCamp[9], 
						role: "questStart",
					},
					{
						quest: Quests.eaglecrestLoggingCamp[9], 
						role: "questFinish",
					},
					{
						sold: [Items.consumable[8]],
						role: "merchant",
						roleRequirement: function () {
							return Player.completedQuestArray.includes("Learning to Fish II") || Player.activeQuestArray.includes("Learning to Fish II");
						},
					},
				],
				chat: {
					notUnlockedRoles: "It's a great day to fish, heheh.",
					chooseChat: "Caught a big one?",
					shopGreeting: "You can always buy a lure to fish up more. Heheh, that rhymed!",
					shopLeave: "Heheh, see you soon!",
					inventoryFull: "You've lots of fish in your bags, but you've not any space for your rewards!",
					tooPoor: "You can't afford that, but don't let that stop ya from fishing!",
					// "&#9835; I'm fiiiiiiiishing in the rain! &#9835;"
				},
				canBeShown: function () {
					return Player.quests.completedQuestArray.includes("To the Logging Camp");
				},
			},
		],
		
		things: [
			{
				x: 2290,
				y: 290,
				image: "cart",
				name: "Cart",
			},
		],
		
		chests: [
			/*{
				x: 1690,
				y: 290,
				image: "cart",
				name: "Loot Chest-Cart",
				loot: [Items.bow[2]],
				lootQuantities: [1],
				inventorySpace: 8,
				disappearAfterOpened: true,
			},*/
		],
		
		villagers: [
			/*{
				// out of date
				x: 200,
				y: 200,
				width: 90,
				height: 110,
				image: "weaponsmith",
				name: "Weaponsmith Clone",
				speed: 1,
				boundary: {
					x: 0,
					y: 0,
					width: 1000,
					height: 400,
				},
			},*/
		],
		
		enemies: [
			/*{
				x: 2200,
				y: 200,
				width: 90,
				height: 110,
				image: "weaponsmith",
				name: "Evil Weaponsmith Clone",
				stats: {
					damage: 5,
					walkSpeed: 180,
					maxHealth: 355,
					range: 200,
					reloadTime: 1000,
				},
				leashRadius: 500,
				projectile: {
					width: 10,
					height: 40,
					adjust: {
						// manually adjust position - make this per class (per projectile image) in the future ( tbd )
						x: 30,
						y: 70,
					},
					image: "projectile",
				}
			}*/
		],
	},
	
	
	eaglecrestLoggingCamp: {
		
		data: {
			name: "Eaglecrest Logging Camp",
			level: "Level 1 - 5",
			territory: "Allied territory",
		},
		
		mapData: {
			cols: 28,
			rows: 20,
			tsize: 60,
			tilesPerRow: 9,
			solidTiles: [1, 10, 19, 28, 37, 46], // tavern building
			waterTiles: [30, 32, 39, 41, 48, 50],
			pathTiles: [4, 13, 22, 31, 40, 49, 58, 67, 76],
			layers: [
				[93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 10, 10, 10, 10, 10, 10, 10, 93, 93, 93, 51, 41, 59, 6, 93, 93, 93, 93, 84, 93, 93, 93, 93, 93, 93, 25, 26, 93, 10, 46, 10, 28, 19, 46, 10, 93, 93, 93, 51, 68, 32, 6, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 25, 26, 93, 83, 10, 10, 10, 37, 10, 10, 10, 74, 93, 93, 51, 32, 30, 6, 84, 75, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 65, 2, 2, 2, 11, 2, 2, 2, 2, 2, 29, 3, 51, 32, 39, 6, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 56, 2, 2, 2, 2, 2, 2, 2, 11, 2, 29, 12, 51, 32, 48, 6, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 84, 65, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 21, 51, 50, 32, 6, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 25, 26, 65, 2, 2, 11, 2, 2, 2, 2, 2, 2, 29, 93, 51, 32, 32, 6, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 65, 2, 2, 2, 2, 2, 2, 2, 2, 2, 29, 93, 14, 5, 5, 23, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 65, 2, 2, 2, 2, 2, 2, 2, 2, 2, 29, 93, 51, 32, 32, 6, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 56, 2, 2, 2, 2, 2, 2, 2, 2, 2, 29, 93, 51, 32, 30, 6, 93, 75, 93, 66, 93, 93, 93, 93, 93, 93, 93, 93, 56, 2, 2, 2, 2, 2, 2, 2, 11, 2, 20, 93, 51, 32, 39, 6, 75, 93, 93, 93, 93, 57, 93, 93, 93, 57, 93, 93, 65, 2, 2, 2, 2, 2, 2, 2, 2, 2, 29, 93, 51, 41, 48, 6, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 47, 47, 47, 38, 38, 38, 47, 47, 38, 93, 93, 51, 50, 41, 6, 93, 93, 84, 93, 93, 93, 93, 66, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 51, 32, 32, 6, 93, 93, 93, 57, 93, 57, 93, 93, 93, 93, 93, 93, 93, 93, 3, 93, 93, 93, 93, 93, 3, 93, 93, 93, 51, 32, 32, 6, 93, 93, 93, 93, 66, 93, 93, 93, 93, 93, 84, 93, 93, 93, 12, 93, 93, 93, 93, 93, 12, 93, 93, 93, 51, 32, 32, 6, 75, 93, 93, 93, 93, 93, 93, 93, 57, 93, 93, 93, 93, 93, 21, 93, 93, 93, 93, 93, 21, 25, 26, 93, 51, 32, 59, 6, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 22, 93, 93, 93, 93, 93, 93, 51, 41, 32, 6, 93, 93, 75, 93, 93, 57, 93, 93, 93, 93, 93, 25, 26, 93, 93, 93, 93, 4, 93, 93, 93, 7, 8, 9, 51, 32, 32, 6, 93, 84, 93, 93, 93, 93, 93, 93, 93, 93, 25, 26, 93, 25, 26, 93, 93, 4, 93, 93, 84, 16, 17, 18, 51, 32, 50, 6, 93, 93, 93],
				[],
			],
		},
		
		images: {
			names: [
				"tiles",
				"teper",
				"identifier",
				"dummy",
				"saral",
				"mailman",
				"soulHealer",
				"galuthel",
				"itemBuyer",
				"darkbrew",
			],
			
			addresses: [
				"./assets/tilemap/loggingCamp.png",
				"./assets/npcs/teper.png",
				"./assets/npcs/identifier.png",
				"./assets/enemies/dummy.png",
				"./assets/npcs/saral.png",
				"./assets/npcs/mailman.png",
				"./assets/npcs/soulHealer.png",
				"./assets/npcs/galuthel.png",
				"./assets/npcs/itemBuyer.png",
				"./assets/npcs/darkbrew.png",
			],
		},
		
		song_day: "./assets/music/Pippin-the-Hunchback.mp3",
		song_night: "./assets/music/Pippin-the-Hunchback-night.mp3",
		
		waterType: "freshwater",
		
		checkpoint: true,
		player: {
			x: 663,
			y: 217,
		},
		
		areaTeleports: [
			{
				// teleport to fishers' valley (path - south)
				x: 1020,
				y: 1249,
				width: 240,
				height: 2,
				teleportTo: "tutorial",
				destinationX: 200,
				destinationY: 100,
			},
			{
				// teleport to tavern (tavern door - north)
				x: 865,
				y: 82,
				width: 60,
				height: 2,
				teleportTo: "tavern",
				destinationX: 315,
				destinationY: 650,
			},
			{
				// teleport to the nilbog (bridge - east)
				x: 1550,
				y: 570,
				width: 120,
				height: 240,
				teleportTo: "nilbog",
				destinationX: 200,
				destinationY: 760,
			},
		],
		
		NPCs: [
			{
				x: 884,
				y: 440,
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
						role: "questStart"
					},
					{
						quest: Quests.eaglecrestLoggingCamp[3], 
						role: "questFinish"
					},
					{
						quest: Quests.eaglecrestLoggingCamp[4], 
						role: "questStart"
					},
					{
						quest: Quests.eaglecrestLoggingCamp[4], 
						role: "questFinish"
					},
				],
				chat: {
					questProgress: "Get on with your work!",
					questComplete: "There's lots of work still to be done.",
					inventoryFull: "You have no space to hold this. Empty your bags a bit and come back.",
				},
			},
			{
				x: 365,
				y: 870,
				image: "saral",
				name: "Combat Trainer Saral",
				hostility: "friendly",
				level: 40,
				stats: {
					maxHealth: 250,
					defence: 10,
				},
				roles: [
					{
						quest: Quests.eaglecrestLoggingCamp[1], 
						role: "questFinish"
					},
					{
						quest: Quests.eaglecrestLoggingCamp[2], 
						role: "questStart"
					},
					{
						quest: Quests.eaglecrestLoggingCamp[2], 
						role: "questFinish"
					},
				],
				chat: {
					questProgress: "The dummy isn't going anywhere.",
					questComplete: "You can always check your adventure log if you need to brush up on your combat skills.",
					inventoryFull: "Empty your bags some. You have no space for your rewards.",
				},
			},
			{
				x: 1166,
				y: 300,
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
						quest: Quests.eaglecrestLoggingCamp[5], 
						role: "questStart"
					},
					{
						quest: Quests.eaglecrestLoggingCamp[5], 
						role: "questFinish"
					},
				],
				chat: {
					questProgress: "I hope you can find it. I'm getting worried.",
					questComplete: "Thank you so much! I must hurry now to Eaglecrest.",
					inventoryFull: "I'm not sure you have any space to hold this.",
				},
				canBeShown: function () {
					return (Player.quests.activeQuestArray.includes("Retrieval of Logs") || Player.quests.activeQuestArray.includes("Making Yourself Useful") || Player.quests.activeQuestArray.includes("First Class Recovery")) && !Player.quests.completedQuestArray.includes("First Class Recovery");
				},
			},
			{
				x: 680,
				y: 540,
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
						role: "identifier",
					},
				],
				chat: {
					identifierGreeting: "What would you like to identify?",
					noUnidentified: "You have no unidentified items. Kill and loot enemies to get some.",
					identifyCommon: "Here is your item, adventurer.",
					identifyUnique: "Hmm, this item is of rather fine quality, adventurer.",
					identifyMythic: "Wow! Some people would pay good money for that item!",
					tooPoor: "You don't have enough gold to identify that. Kill and loot enemies to get some.",
				}
			},
			{
				x: 1160,
				y: 100,
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
						role: "soulHealer",
					},
				],
				chat: {
					canBeHealedText: "My blessings to you. It appears that you have a soul debt, meaning you will earn XP slower due to a recent death. If you wish, I can cleanse your soul and remove this effect for a small price.",
					cannotBeHealedText: "When you die, you will earn some future XP slower than normal. If this happens to you and you wish to be cleansed of this, come to me and I can remove it for you for a small price. May the purity of the demigods be with you.",
					healedText: "May the purity of the demigods be with you.",
					tooPoor: "I don't think you can afford that.",
				},
			},
			{
				x: 435,
				y: 372,
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
						sold: [Items.consumable[7]],
						role: "merchant",
						roleRequirement: function () {
							return Player.quests.activeQuestArray.includes("Strengthen Defences");
						}
					},
				],
				chat: {
					notUnlockedRoles: "I think we have enough traps out at the moment. Come back in a bit.",
					shopGreeting: "If you're out of traps, I'll give you some more.",
					shopLeave: "Let's crush those goblins.",
					inventoryFull: "Empty your inventory a bit and come back.",
				},
			},
			{
				x: 576,
				y: 984,
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
						role: "itemBuyer",
						roleRequirement: function () {
							return Player.quests.completedQuestArray.includes("Retrieval of Logs");
						}
					},
				],
				chat: {
					notUnlockedRoles: "I'm not sure you have anything I can buy from you. Come back a bit later.",
					buyerGreeting: "I'll happily buy any items that you're willing to part with.",
				},
			},
			{
				x: 1111,
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
						sold: [Items.consumable[4], Items.consumable[3], Items.consumable[2]],
						role: "merchant",
						roleRequirement: function () {
							return Player.level > 2;
						}
					},
				],
				chat: {
					notUnlockedRoles: "I've been told you're not a high enough level to handle my potions.",
					shopGreeting: "Want to buy a potion? Of course you do.",
					shopLeave: "Side effects? No. Trust me.",
					inventoryFull: "You don't want to be spilling a potion with an inventory as full as yours. Come back with some free space.",
				},
			},
		],
		
		dummies: [
			{
				x: 230,
				y: 750,
				image: "dummy",
				name: "Training Dummy",
				hostility: "dummy",
				stats: {
					maxHealth: 1000,
				},
				chat: {
					fiftyPercentHealth: "/me creaks",
					tenPercentHealth: "/me creaks loudly",
					death: "/me crumbles into a heap of rubble",
				},
			},
		],
		
	},
	
	
	tavern: {
		
		data: {
			name: "Treefeller's Tavern",
			level: "",
			territory: "",
		},
		
		mapData: {
			cols: 12,
			rows: 12,
			tsize: 60,
			tilesPerRow: 3,
			solidTiles: [1], // bar
			layers: [
				[2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 4, 7, 8, 4, 3, 3, 4, 7, 8, 4, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 4, 7, 8, 4, 3, 5, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3],
				[],
			],
		},
		
		images: {
			names: [
				"tiles",
				"innkeeper",
			],
			
			addresses: [
				"./assets/tilemap/tavern.png",
				"./assets/npcs/innkeeper.png",
			],
		},
		
		areaTeleports: [
			/*{
				x: 460,
				y: 1250,
				width: 150,
				height: 2,
				teleportTo: "tutorial",
				destinationX: 200,
				destinationY: 100,
			},*/
		],
		
		song_day: "./assets/music/Tavern.mp3",
		song_night: "./assets/music/Tavern.mp3",
		
		checkpoint: false, // probably in the future taverns should be the ONLY checkpoints
		
		NPCs: [
			{
				x: 165,
				y: 65,
				image: "innkeeper",
				name: "Gregor Goldenbrew",
				hostility: "friendly",
				level: 15,
				stats: {
					maxHealth: 100,
					defense: 2,
				},
				roles: [
					{
						quest: Quests.eaglecrestLoggingCamp[1], 
						role: "questStart"
					},
				],
				questProgressText: "Girls! Make some room by the hearth, won't ya!",
				questCompleteText: "Oh ho ho! It's good to see ya again!",
			},
		],
		
	},
	
	nilbog: {
		
		data: {
			name: "The Nilbog",
			level: "Level 2 - 5",
			territory: "Hostile territory",
		},

		mapData: {
			cols: 26,
			rows: 26,
			tsize: 60,
			tilesPerRow: 10,
			solidTiles: [5, 15, 25, 35, 45], // tower
			waterTiles: [36, 46, 56, 32, 42, 52],
			mudTiles: [1, 11, 21, 31, 41, 51, 61, 71, 81, 91, 101, 111, 121, 131],
			pathTiles: [4, 14, 24, 34, 44, 54, 64, 74, 84],
			dayTiles: [3, 13, 23], // torches
			nightTiles: [33, 43, 53], // torches
			layers: [
				[102, 57, 66, 46, 7, 102, 131, 21, 21, 31, 82, 102, 102, 33, 102, 102, 102, 102, 102, 102, 102, 102, 15, 35, 45, 5, 102, 57, 76, 76, 7, 131, 91, 1, 1, 101, 31, 102, 102, 13, 72, 102, 102, 3, 102, 102, 82, 92, 35, 45, 35, 45, 92, 57, 46, 36, 7, 81, 1, 1, 11, 111, 41, 102, 62, 23, 102, 102, 62, 13, 102, 102, 102, 102, 15, 35, 45, 5, 102, 57, 66, 36, 7, 81, 11, 1, 1, 61, 102, 102, 102, 102, 102, 102, 102, 23, 48, 49, 102, 102, 35, 45, 35, 45, 102, 57, 56, 76, 7, 51, 121, 1, 11, 61, 102, 3, 102, 102, 8, 9, 102, 102, 102, 102, 102, 102, 15, 35, 45, 5, 102, 57, 36, 46, 7, 62, 51, 71, 71, 41, 102, 13, 102, 102, 18, 19, 102, 102, 102, 102, 102, 102, 35, 45, 35, 45, 102, 57, 46, 66, 7, 102, 102, 102, 102, 102, 92, 23, 102, 102, 102, 102, 102, 102, 3, 102, 102, 102, 15, 5, 15, 5, 102, 57, 76, 36, 7, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 13, 102, 102, 102, 5, 25, 5, 15, 102, 57, 36, 32, 7, 92, 82, 102, 102, 102, 102, 102, 102, 48, 49, 102, 102, 62, 23, 28, 29, 30, 15, 25, 15, 5, 2, 57, 36, 42, 7, 102, 102, 102, 102, 102, 102, 102, 48, 49, 102, 102, 102, 102, 102, 38, 39, 40, 102, 4, 48, 49, 12, 57, 36, 52, 7, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 84, 4, 4, 4, 64, 102, 62, 22, 57, 56, 36, 7, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 34, 4, 64, 102, 102, 102, 102, 102, 102, 102, 57, 36, 36, 7, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 62, 102, 102, 131, 31, 102, 102, 16, 6, 6, 26, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 131, 91, 61, 102, 102, 57, 36, 36, 7, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 131, 21, 91, 11, 61, 102, 102, 57, 36, 32, 7, 102, 82, 102, 102, 102, 77, 47, 47, 87, 48, 49, 102, 102, 102, 131, 91, 1, 1, 1, 61, 102, 102, 57, 36, 42, 7, 82, 102, 102, 102, 77, 37, 36, 46, 117, 47, 87, 102, 102, 131, 91, 1, 11, 1, 111, 41, 102, 102, 57, 46, 52, 7, 102, 102, 102, 102, 57, 36, 56, 36, 36, 66, 7, 102, 102, 81, 11, 1, 1, 1, 61, 82, 102, 102, 57, 56, 46, 7, 102, 102, 92, 102, 57, 46, 76, 36, 36, 36, 7, 102, 102, 51, 121, 1, 1, 111, 41, 102, 102, 102, 57, 36, 36, 7, 102, 102, 102, 102, 107, 27, 36, 56, 46, 17, 97, 102, 48, 49, 51, 71, 71, 41, 102, 102, 131, 102, 57, 36, 36, 7, 102, 102, 102, 48, 49, 107, 67, 67, 67, 97, 102, 102, 102, 102, 102, 102, 102, 102, 102, 131, 91, 102, 57, 36, 36, 7, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 62, 102, 81, 11, 102, 57, 36, 66, 7, 102, 102, 102, 102, 102, 102, 48, 49, 131, 21, 21, 21, 21, 21, 31, 48, 49, 102, 131, 91, 1, 102, 57, 46, 36, 7, 102, 102, 82, 102, 102, 102, 131, 21, 91, 1, 1, 11, 1, 1, 101, 21, 21, 21, 91, 1, 1, 30, 57, 36, 36, 7, 102, 92, 102, 102, 102, 131, 91, 11, 11, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 11, 1, 40, 57, 36, 56, 7, 102, 102, 102, 82, 131, 91, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1],
				[],
			],
			interactWithTile: function(tileNum, x, y) {
				if (tileNum === 48) { // left side of log stack
					// give log item to player
					if (Dom.inventory.give(Items.item[2], 1)) { // check if player has enough inventory space
						// replace tiles with grass
						map.setTile(0, map.getCol(x), map.getRow(y), 102);
						map.setTile(0, map.getCol(x + 60), map.getRow(y), 102);
					}
				}
				else if (tileNum === 49) { // right side of log stack
					// give log item to player
					if (Dom.inventory.give(Items.item[2], 1)) { // check if player has enough inventory space
						// replace tiles with grass
						map.setTile(0, map.getCol(x), map.getRow(y), 102);
						map.setTile(0, map.getCol(x - 60), map.getRow(y), 102);
					}
				}
			},
		},
		
		images: {
			names: [
				"tiles",
				"rockGoblin",
				"rock",
				"swordGoblin",
				"hammerGoblin",
				"melee",
				"fireGoblin",
				"fire",
				"goblinCorpse",
				"mailcart",
			],
			
			addresses: [
				"./assets/tilemap/nilbog.png",
				"./assets/enemies/goblinRockthrower.png",
				"./assets/projectiles/rock.png",
				"./assets/enemies/goblinSkirmisher.png",
				"./assets/enemies/goblinBruiser.png",
				"./assets/projectiles/melee.png",
				"./assets/enemies/goblinPyromancer.png",
				"./assets/projectiles/m.png",
				"./assets/corpses/deadGoblin.png",
				"./assets/objects/cartDestroyed.png",
			],
		},
		
		song_day: "./assets/music/Pippin-the-Hunchback.mp3",
		song_night: "./assets/music/Pippin-the-Hunchback-night.mp3",
		
		waterType: "freshwater",
		
		checkpoint: false,
		
		areaTeleports: [
			{
				// teleport to logging camp (bridge - west)
				x: 120,
				y: 960,
				width: 120,
				height: 300,
				teleportTo: "eaglecrestLoggingCamp",
				destinationX: 1330,
				destinationY: 400,
			},
		],
		
		things: [
			/*{
				x: 2290,
				y: 290,
				width: 246,
				height: 175,
				image: "cart",
			},*/
		],
		
		chests: [
			{
				x: 1140,
				y: 905,
				image: "mailcart",
				name: "Mail Cart",
				loot: [Items.item[6]],
				lootQuantities: [1],
				inventorySpace: 8,
				disappearAfterOpened: false,
				canBeShown: function () {
					return (Player.quests.activeQuestArray.includes("Making Yourself Useful") || Player.quests.activeQuestArray.includes("First Class Recovery"));
				},
			},
		],
		
		enemies: [
			{
				x: 1070, // at goblin camp
				y: 400,
				image: "rockGoblin",
				deathImage: "goblinCorpse",
				name: "Goblin Rockthrower",
				hostility: "hostile",
				level: 2,
				stats: {
					damage: 3,
					walkSpeed: 100,
					maxHealth: 10,
					range: 200,
					healthRegen: 0.4,
					reloadTime: 2000,
					lootTime: 10000,
					respawnTime: 11000,
					variance: 100,
				},
				leashRadius: 350,
				xpGiven: 10,
				projectile: {
					image: "rock",
				},
				lootTableTemplate: LootTables.nilbogGoblin,
				lootTable: [
					{ // polished rock
						item: Items.item[4],
						chance: [
							20,				// 0
							70,				// 1
							95,				// 2
							Infinity,		// 3
						],
					},
				],
				inventorySpace: 8,
			},
			{
				x: 630, // south west (near logging camp)
				y: 1320,
				image: "rockGoblin",
				deathImage: "goblinCorpse",
				name: "Goblin Rockthrower",
				hostility: "hostile",
				level: 2,
				stats: {
					damage: 3,
					walkSpeed: 100,
					maxHealth: 10,
					range: 200,
					healthRegen: 0.4,
					reloadTime: 2000,
					lootTime: 10000,
					respawnTime: 11000,
					variance: 100,
				},
				leashRadius: 350,
				xpGiven: 10,
				projectile: {
					image: "rock",
				},
				lootTableTemplate: LootTables.nilbogGoblin,
				lootTable: [
					{ // polished rock
						item: Items.item[4],
						chance: [
							20,				// 0
							70,				// 1
							95,				// 2
							Infinity,		// 3
						],
					},
				],
				inventorySpace: 8,
			},
			{
				x: 900, // at goblin camp
				y: 300,
				image: "swordGoblin",
				deathImage: "goblinCorpse",
				name: "Goblin Skirmisher",
				hostility: "hostile",
				level: 2,
				stats: {
					damage: 2,
					walkSpeed: 90,
					maxHealth: 10,
					defence: 2,
					range: 60,
					healthRegen: 0.4,
					reloadTime: 1500,
					lootTime: 10000,
					respawnTime: 11000,
				},
				leashRadius: 350,
				xpGiven: 10,
				projectile: {
					image: "melee",
				},
				lootTableTemplate: LootTables.nilbogGoblin,
				inventorySpace: 8,
			},
			{
				x: 1240, // south (between bogs)
				y: 1240,
				image: "swordGoblin",
				deathImage: "goblinCorpse",
				name: "Goblin Skirmisher",
				hostility: "hostile",
				level: 2,
				stats: {
					damage: 2,
					walkSpeed: 90,
					maxHealth: 10,
					defence: 2,
					range: 60,
					healthRegen: 0.4,
					reloadTime: 1500,
					lootTime: 10000,
					respawnTime: 20000, // longer respawn time
				},
				leashRadius: 350,
				xpGiven: 10,
				projectile: {
					image: "melee",
				},
				lootTableTemplate: LootTables.nilbogGoblin,
				inventorySpace: 8,
			},
			{
				x: 860, // next to mail cart (only present when that quest is active)
				y: 915,
				image: "swordGoblin",
				deathImage: "goblinCorpse",
				name: "Goblin Skirmisher",
				hostility: "hostile",
				level: 2,
				stats: {
					damage: 2,
					walkSpeed: 90,
					maxHealth: 10,
					defence: 2,
					range: 60,
					healthRegen: 0.4,
					reloadTime: 1500,
					lootTime: 10000,
					respawnTime: 11000,
				},
				leashRadius: 350,
				xpGiven: 10,
				projectile: {
					image: "melee",
				},
				lootTableTemplate: LootTables.nilbogGoblin,
				inventorySpace: 8,
				canBeShown: function () { // only show when mail cart quest is active
					return (Player.quests.activeQuestArray.includes("Making Yourself Useful") || Player.quests.activeQuestArray.includes("First Class Recovery"));
				},
			},
			{
				x: 1000, // at goblin camp
				y: 250,
				image: "hammerGoblin",
				deathImage: "goblinCorpse",
				name: "Goblin Bruiser",
				hostility: "hostile",
				level: 3,
				stats: {
					damage: 4,
					walkSpeed: 70,
					maxHealth: 10,
					defence: 3,
					range: 60,
					healthRegen: 0.4,
					reloadTime: 2000,
					lootTime: 10000,
					respawnTime: 11000,
				},
				leashRadius: 350,
				xpGiven: 10,
				projectile: {
					image: "melee",
				},
				lootTableTemplate: LootTables.nilbogGoblin,
				inventorySpace: 8,
			},
			{
				x: 1510, // outside tower
				y: 640,
				image: "hammerGoblin",
				deathImage: "goblinCorpse",
				name: "Goblin Bruiser",
				hostility: "hostile",
				level: 3,
				stats: {
					damage: 4,
					walkSpeed: 70,
					maxHealth: 10,
					defence: 3,
					range: 60,
					healthRegen: 0.4,
					reloadTime: 2000,
					lootTime: 10000,
					respawnTime: 11000,
				},
				leashRadius: 350,
				xpGiven: 10,
				projectile: {
					image: "melee",
				},
				lootTableTemplate: LootTables.nilbogGoblin,
				inventorySpace: 8,
			},
			{
				x: 1050, // at goblin camp
				y: 100,
				image: "fireGoblin",
				deathImage: "goblinCorpse",
				name: "Fire Goblin",
				hostility: "hostile",
				level: 4,
				stats: {
					damage: 3,
					walkSpeed: 95,
					maxHealth: 14,
					defence: 1,
					range: 140,
					reloadTime: 2250,
					healthRegen: 0.4,
					flaming: 1,
					lootTime: 10000,
					respawnTime: 20000,
				},
				leashRadius: 350,
				xpGiven: 20,
				projectile: {
					image: "fire",
				},
				lootTableTemplate: LootTables.nilbogGoblin,
				lootTable: [
					{ // firey rock
						item: Items.item[5],
						chance: [
							50,				// 0
							Infinity,		// 1
						],
					},
				],
				inventorySpace: 8,
			},
		],
	},
	
};
