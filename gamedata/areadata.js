const FishingLevels = {
	loggingCamp: 10,
};

const LootTables = { // loot table templates
	global: [
		// all enemies have this (for events)
		{ // samhain mark
			item: Items.currency[4],
			condition: function () {
				if (Game.time === "bloodMoon") {
					return true;
				}
				return false;
			},
			chance: [
				75,				// 0
				Infinity,		// 1
			],
		},
	],
	nilbogGoblin: [
		{ // unidentified item
			item: {
				name: "unidentified",
				tier: 1,
				area: "loggingCamp",
			},
			chance: [ // number rolled from 0 to 100, and then multiplied by looting (100% default)
				60,				// 0
				Infinity,		// 1
			],
		},
		{ // gold
			item: Items.currency[2],
			chance: [
				80,				// 0
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
		{ // goblin brewed potion
			item: Items.consumable[6],
			chance: [
				90,				// 0
				Infinity,		// 1
			],
		},
		{ // goblin sewn bag
			item: Items.bag[3],
			chance: [
				98,				// 0
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
		{ // goblin eye
			item: Items.item[10],
			chance: [
				85,				// 0
				87,				// 1
				Infinity,		// 2
			],
		},
	],
	nilbogTowerGoblin: [ // as well as nilbogGoblin
		{ // displacement grenade
			item: Items.consumable[13],
			chance: [
				93,				// 0
				Infinity,		// 1
			],
		},
		{ // position reverser
			item: Items.consumable[14],
			chance: [
				93,				// 0
				Infinity,		// 1
			],
		},
		{ // restorative timepiece
			item: Items.consumable[15],
			chance: [
				93,				// 0
				Infinity,		// 1
			],
		},
	],
};

const EnemyTemplates = {
	nilbog: {
		goblinRockthrower: {
			image: "goblinRockthrower",
			deathImage: "goblinCorpse",
			name: "Goblin Rockthrower",
			species: "goblin",
			subSpecies: "nilbog goblin",
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
		goblinSkirmisher: {
			image: "goblinSkirmisher",
			deathImage: "goblinCorpse",
			name: "Goblin Skirmisher",
			species: "goblin",
			subSpecies: "nilbog goblin",
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
		goblinBruiser: {
			image: "goblinBruiser",
			deathImage: "goblinCorpse",
			name: "Goblin Bruiser",
			species: "goblin",
			subSpecies: "nilbog goblin",
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
		fireGoblin: {
			image: "fireGoblin",
			deathImage: "goblinCorpse",
			name: "Fire Goblin",
			species: "goblin",
			subSpecies: "nilbog goblin",
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
				image: "fireball",
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
		goblinTowerkeeper: {
			image: "goblinTowerkeeper",
			deathImage: "goblinCorpse",
			name: "Goblin Towerkeeper",
			species: "goblin",
			subSpecies: "nilbog goblin",
			hostility: "hostile",
			level: 5,
			stats: {
				damage: 3.5,
				walkSpeed: 75,
				maxHealth: 12,
				defence: 8,
				range: 90,
				healthRegen: 0.4,
				reloadTime: 1250,
				lootTime: 10000,
				respawnTime: 20000,
			},
			leashRadius: 300,
			xpGiven: 35,
			projectile: {
				image: "melee",
			},
			lootTableTemplate: LootTables.nilbogGoblin,
			inventorySpace: 8,
		},
		goblinCrusader: {
			image: "goblinCrusader",
			deathImage: "goblinCorpse",
			name: "Goblin Crusader",
			species: "goblin",
			subSpecies: "nilbog goblin",
			hostility: "hostile",
			level: 5,
			stats: {
				damage: 5,
				walkSpeed: 65,
				maxHealth: 12,
				defence: 10,
				range: 60,
				healthRegen: 0.4,
				reloadTime: 2000,
				lootTime: 10000,
				respawnTime: 20000,
				stun: 0.2,
			},
			leashRadius: 300,
			xpGiven: 35,
			projectile: {
				image: "melee",
			},
			lootTableTemplate: LootTables.nilbogGoblin,
			inventorySpace: 8,
		},
	},
};

var Areas = {
	
	tutorial: {
		
		data: {
			name: "Fishers' Valley",
			level: "Level 1 - 5",
			territory: "Neutral territory",
			displayOnEnter: true,
		},
		
		indoors: false,

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
		
		tripwires: [
			{
				// instructions pop up when bridge is moved to
				x: 1100,
				y: 600,
				width: 1,
				height: 600,
				onPlayerTouch: function () {
					// check that the "to the logging camp" quest has been started and the instructions haven't been shown before
					if (Player.quests.activeQuestArray.includes("To the Logging Camp")
					&& Player.unlockedInstructions.length < 3) {
						Dom.adventure.addInstruction(3); // open instructions chapter 3
					}
					// otherwise if the player hasn't started the quest, teleport them back to make them!
					else if (!Player.quests.activeQuestArray.includes("To the Logging Camp") && !Player.quests.completedQuestArray.includes("To the Logging Camp")) {
						Game.hero.x = 2297;
						Game.hero.y = 387;
						Dom.alert.page("You need to start your first quest. Speak to the Cart Driver who is right next to you.")
					}
				}
			}
		],
		
		npcs: [
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
						sold: Player.class === "k" ? [{item: Items.sword[2], cost: 3},]
						: Player.class === "m" ? [{item: Items.staff[2], cost: 3},]
						: Player.class === "a" ? [{item: Items.bow[2], cost: 3,},]
						: [],
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
						quest: Quests.eaglecrestLoggingCamp[7], 
						role: "questStartFinish",
					},
					{
						quest: Quests.eaglecrestLoggingCamp[8], 
						role: "questStartFinish",
					},
					{
						quest: Quests.eaglecrestLoggingCamp[9], 
						role: "questStartFinish",
					},
					{
						quest: Quests.eaglecrestLoggingCamp[10], 
						role: "questStartFinish",
					},
					{
						quest: [Quests.fishing[0], Quests.fishing[1], Quests.fishing[2]], 
						role: "questStartFinish",
						newQuestFrequency: "daily",
					},
					{
						sold: [
							{item: Items.consumable[8], cost: 4}, // can of worms
							{item: Items.consumable[12], cost: 4}, // magnetised lure
						],
						role: "merchant",
						chooseText: "I'd like to browse your fishing items.",
						roleRequirement: function () {
							return Player.quests.completedQuestArray.includes("Learning to Fish II") || Player.quests.activeQuestArray.includes("Learning to Fish II");
						},
					},
					{
						sold: [
							{item: Items.currency[2], cost: 1, quantity: 3, costCurrency: 3}, // 3 gold
							{item: Items.bag[4], cost: 10, costCurrency: 3}, // fishing pouch
						],
						role: "merchant",
						chooseText: "I'd like to see what I can buy with fishing seals.",
						roleRequirement: function () {
							return Player.quests.completedQuestArray.includes("Learning to Fish III");
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
					questProgress: "It's a great day to fish, heheh.",
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
			displayOnEnter: true,
		},
		
		indoors: false,
		
		mapData: {
			cols: 31,
			rows: 20,
			tsize: 60,
			tilesPerRow: 9,
			solidTiles: [1, 10, 19, 28, 37, 46], // tavern building
			waterTiles: [30, 32, 39, 41, 48, 50],
			pathTiles: [4, 13, 22, 31, 40, 49, 58, 67, 76],
			layers: [
				[93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 10, 10, 10, 10, 10, 10, 10, 93, 93, 93, 51, 41, 59, 6, 93, 93, 93, 93, 93, 93, 93, 84, 93, 93, 93, 93, 93, 93, 25, 26, 93, 10, 46, 10, 28, 19, 46, 10, 93, 93, 93, 51, 68, 32, 6, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 25, 26, 93, 83, 10, 10, 10, 37, 10, 10, 10, 74, 93, 93, 51, 32, 30, 6, 84, 75, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 65, 2, 2, 2, 11, 2, 2, 2, 2, 2, 29, 3, 51, 32, 39, 6, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 56, 2, 2, 2, 2, 2, 2, 2, 11, 2, 29, 12, 51, 32, 48, 6, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 84, 65, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 21, 51, 50, 32, 6, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 25, 26, 65, 2, 2, 11, 2, 2, 2, 2, 2, 2, 29, 93, 51, 32, 32, 6, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 65, 2, 2, 2, 2, 2, 2, 2, 2, 2, 29, 93, 14, 5, 5, 23, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 65, 2, 2, 2, 2, 2, 2, 2, 2, 2, 29, 93, 51, 32, 32, 6, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 56, 2, 2, 2, 2, 2, 2, 2, 2, 2, 29, 93, 51, 32, 30, 6, 93, 75, 93, 93, 93, 69, 66, 93, 93, 93, 93, 93, 93, 93, 93, 56, 2, 2, 2, 2, 2, 2, 2, 11, 2, 20, 93, 51, 32, 39, 6, 75, 93, 93, 93, 69, 33, 93, 93, 57, 93, 93, 93, 57, 93, 93, 65, 2, 2, 2, 2, 2, 2, 2, 2, 2, 29, 93, 51, 41, 48, 6, 93, 93, 93, 93, 51, 32, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 47, 47, 47, 38, 38, 38, 47, 47, 38, 93, 93, 51, 50, 41, 6, 93, 93, 84, 93, 51, 41, 93, 93, 93, 93, 66, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 51, 32, 32, 6, 93, 93, 93, 93, 96, 24, 57, 93, 57, 93, 93, 93, 93, 93, 93, 93, 93, 3, 93, 93, 93, 93, 93, 3, 93, 93, 93, 51, 32, 32, 6, 93, 93, 93, 25, 26, 93, 93, 66, 93, 93, 93, 93, 93, 84, 93, 93, 93, 12, 93, 93, 93, 93, 93, 12, 93, 93, 93, 51, 32, 32, 6, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 57, 93, 93, 93, 93, 93, 21, 93, 93, 93, 93, 93, 21, 25, 26, 93, 51, 32, 59, 6, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 22, 93, 93, 93, 93, 93, 93, 51, 41, 32, 6, 93, 93, 75, 93, 93, 93, 93, 93, 57, 93, 93, 93, 93, 93, 25, 26, 93, 93, 93, 93, 4, 93, 93, 93, 7, 8, 9, 51, 32, 32, 6, 93, 84, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 25, 26, 93, 25, 26, 93, 93, 4, 93, 93, 84, 16, 17, 18, 51, 32, 50, 6, 93, 93, 93, 75, 93, 93],
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
				"mailbox",
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
				"./assets/objects/mailbox.png", // tbd image for flag up
			],
		},
		
		song_day: "./assets/music/Pippin-the-Hunchback.mp3",
		song_night: "./assets/music/Pippin-the-Hunchback-night.mp3",
		
		checkpoint: true,
		player: {
			x: 717,
			y: 208,
		},
		
		onAreaLoad: function () {
			// start instructions chapter 4 if the player hasn't already
			if (Player.unlockedInstructions.length < 4) {
				Dom.adventure.addInstruction(4);
				// show chat tab
				Player.unlockedTabs.push("chat");
				document.getElementById("changeChat").style.display = "block";
				document.getElementById("chatImage").hidden = false;
			}
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
				y: 1200,
				width: 120,
				height: 1200,
				teleportTo: "nilbog",
				destinationX: 440,
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
		
		npcs: [
			{
				// id: 0,
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
						quest: Quests.eaglecrestLoggingCamp[20], 
						role: "questStartFinish"
					},
					{
						role: "text",
						chooseText: "I found a pair of boots that I think might be yours.",
						chat: "Are you sure? Give them here.<br>You're right, they were mine. They were stolen by a goblin during the recent goblin siege. Are you sure I can have them back? I will make sure that you are aptly rewarded.",
						buttons: ["Return them", "Keep them"],
						showCloseButton: false,
						functions: [function () {
							// remove the boots
							Dom.inventory.removeById(6, "boots", 1);
							// give rewards
							Game.getXP(50);
							Dom.reputation.give("eaglecrestLoggingCamp", 300);
							Dom.inventory.give(Items.currency[2], 5);
							Dom.chat.insert("Marshall Teper has given you <strong>5 Gold</strong> for the boots.", 0);
							// close page
							Dom.changeBook(Player.tab, true); // close page
							// chat message
							Game.npcs[0].say("Thank you. I hope you find these rewards useful to your progression. Now, back to work.", false, 0, false); // Teper is Game.npcs[0]
						},
						function () {
							// close page
							Dom.changeBook(Player.tab, true); // close page
							// chat message
							Game.npcs[0].say("What, are you even allowed to keep them? I'd like my boots back!", false, 0, false); // Teper is Game.npcs[0]
						}],
						roleRequirement: function () {
							return Dom.inventory.check(6, "boots", 1, true); // check that the player has Marshall Teper's lost boots
						},
					},
				],
				chat: {
					notUnlockedRoles: "I'm busy. Come back later.",
					chooseChat: "What do you want?",
					questProgress: "Get on with your work!",
					questComplete: "There's lots of work still to be done.",
					inventoryFull: "You have no space to hold this. Empty your bags a bit and come back.",
				},
			},
			{
				// id: 1,
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
						role: "questStartFinish"
					},
				],
				chat: {
					questProgress: "The dummy isn't going anywhere.",
					questComplete: "You can always check your adventure log if you need to brush up on your combat skills.",
					inventoryFull: "Empty your bags some. You have no space for your rewards.",
				},
			},
			{
				// id: 2,
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
						quest: Quests.eaglecrestLoggingCamp[16], 
						role: "questStartFinish"
					},
					{
						role: "identifier",
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
				}
			},
			{
				// id: 4,
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
						quest: Quests.eaglecrestLoggingCamp[13], 
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
				},
			},
			{
				// id: 5,
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
						quest: Quests.eaglecrestLoggingCamp[11], 
						role: "questStartFinish"
					},
					{
						quest: Quests.eaglecrestLoggingCamp[12], 
						role: "questStartFinish"
					},
					{
						sold: [
							{item: Items.consumable[7], cost: 0}, // goblin trap
						],
						role: "merchant",
						roleRequirement: function () {
							return Player.quests.activeQuestArray.includes("Strengthening Defences") || Player.quests.activeQuestArray.includes("Reinforcing Defences");
						}
					},
				],
				chat: {
					notUnlockedRoles: "I think we have enough traps out at the moment. Come back in a bit.",
					chooseChat: "How's it going?",
					shopGreeting: "If you're out of traps, I'll give you some more.",
					shopLeave: "Let's crush those goblins.",
					inventoryFull: "Empty your inventory a bit and come back.",
					questComplete: "I'll have more traps for you to place in a bit. Come back tomorrow.",
				},
			},
			{
				// id: 6,
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
						quest: Quests.eaglecrestLoggingCamp[15], 
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
							{item: Items.item[11], cost: 2}, // vial of goblin blood[
							{item: Items.bag[5], cost: 6}, // brown backsack
							{item: Items.helm[2], cost: 2}, // worn leather helm
							{item: Items.chest[2], cost: 3}, // worn leather tunic
							{item: Items.greaves[2], cost: 3}, // worn leather trousers
							{item: Items.boots[2], cost: 2}, // worn leather boots
						],
						role: "merchant",
						roleRequirement: function () {
							return Player.quests.completedQuestArray.includes("Retrieval of Logs");
						}
					},
				],
				chat: {
					chooseChat: "Hello, how are you?",
					notUnlockedRoles: "I'm not sure you have anything I can buy from you. Come back a bit later.",
					buyerGreeting: "I'll happily buy any items that you're willing to part with.",
					shopGreeting: "I can sell you some second-hand equipment for a reduced price.",
					shopLeave: "Have a good day now.",
					inventoryFull: "I'm not sure you have any space to carry that.",
					tooPoor: "I don't think you have enough gold to buy that. Sorry.",
				},
			},
			{
				// id: 7,
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
						quest: Quests.eaglecrestLoggingCamp[17], 
						role: "questStartFinish"
					},
					{
						quest: Quests.eaglecrestLoggingCamp[18], 
						role: "questStartFinish"
					},
					{
						sold: [
							{item: Items.consumable[4], cost: 2}, // potion of health I
							{item: Items.consumable[3], cost: 2}, // potion of swiftness I
							{item: Items.consumable[2], cost: 4}, // potion of strength I
							{item: Items.consumable[11], cost: 4, condition: function () {
								return Player.quests.completedQuestArray.includes("Potion Making II");
							}}, // potion of goblin resistance II
						],
						role: "merchant",
						roleRequirement: function () {
							return Player.level > 2;
						}
					},
				],
				chat: {
					chooseChat: "Making potions isn't child's play.",
					notUnlockedRoles: "I've been told you're not a high enough level to handle my potions.",
					shopGreeting: "Want to buy a potion? Of course you do.",
					shopLeave: "Side effects? No. Trust me.",
					inventoryFull: "You don't want to be carrying a potion with an inventory as full as yours. Come back with some free space.",
					tooPoor: "You're not going to be able to buy that potion without enough gold.",
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
		
		mailboxes: [
			{
				x: 626,
				y: 132,
				image: "mailbox",
				name: "Mailbox",
			},
		],
		
	},
	
	
	tavern: {
		
		data: {
			name: "Treefeller's Tavern",
			level: "",
			territory: "",
			displayOnEnter: true,
		},
		
		indoors: true,
		
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
		
		npcs: [
			{
				x: 165,
				y: 65,
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
			displayOnEnter: true,
		},
		
		indoors: false,

		mapData: {
			cols: 30,
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
				[28, 29, 30, 102, 102, 57, 66, 46, 7, 102, 131, 21, 21, 31, 82, 102, 102, 33, 102, 102, 102, 102, 102, 102, 102, 102, 15, 35, 45, 5, 38, 39, 40, 102, 102, 57, 76, 76, 7, 131, 91, 1, 1, 101, 31, 102, 102, 13, 72, 102, 102, 3, 102, 102, 82, 92, 35, 45, 35, 45, 102, 102, 48, 49, 92, 57, 46, 36, 7, 81, 1, 1, 11, 111, 41, 102, 62, 23, 102, 102, 62, 13, 102, 102, 102, 102, 15, 35, 45, 5, 102, 102, 102, 102, 102, 57, 66, 36, 7, 81, 11, 1, 1, 61, 102, 102, 102, 102, 102, 102, 102, 23, 48, 49, 102, 102, 35, 45, 35, 45, 102, 102, 102, 102, 102, 57, 56, 76, 7, 51, 121, 1, 11, 61, 102, 3, 102, 102, 8, 9, 102, 102, 102, 102, 102, 102, 15, 35, 45, 5, 102, 102, 102, 102, 102, 57, 36, 46, 7, 62, 51, 71, 71, 41, 102, 13, 102, 102, 18, 19, 102, 102, 102, 102, 102, 102, 35, 45, 35, 45, 102, 102, 102, 102, 102, 57, 46, 66, 7, 102, 102, 102, 102, 102, 92, 23, 102, 102, 102, 102, 102, 102, 3, 102, 102, 102, 15, 5, 15, 5, 102, 102, 102, 102, 102, 57, 76, 36, 7, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 13, 102, 102, 102, 5, 25, 5, 15, 102, 102, 102, 102, 102, 57, 36, 32, 7, 92, 82, 102, 102, 102, 102, 102, 102, 48, 49, 102, 102, 62, 23, 28, 29, 30, 15, 25, 15, 5, 102, 102, 102, 102, 2, 57, 36, 42, 7, 102, 102, 102, 102, 102, 102, 102, 48, 49, 102, 102, 102, 102, 102, 38, 39, 40, 102, 4, 48, 49, 102, 102, 102, 102, 12, 57, 36, 52, 7, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 84, 4, 4, 4, 64, 102, 62, 102, 102, 102, 102, 22, 57, 56, 36, 7, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 34, 4, 64, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 57, 36, 36, 7, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 62, 102, 102, 131, 31, 102, 102, 102, 102, 102, 102, 16, 6, 6, 26, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 131, 91, 61, 102, 102, 102, 102, 102, 102, 57, 36, 36, 7, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 131, 21, 91, 11, 61, 102, 102, 102, 102, 102, 102, 57, 36, 32, 7, 102, 82, 102, 102, 102, 77, 47, 47, 87, 48, 49, 102, 102, 102, 131, 91, 1, 1, 1, 61, 102, 102, 102, 102, 102, 102, 57, 36, 42, 7, 82, 102, 102, 102, 77, 37, 36, 46, 117, 47, 87, 102, 102, 131, 91, 1, 11, 1, 111, 41, 102, 102, 102, 102, 102, 102, 57, 46, 52, 7, 102, 102, 102, 102, 57, 36, 56, 36, 36, 66, 7, 102, 102, 81, 11, 1, 1, 1, 61, 82, 102, 102, 102, 102, 102, 102, 57, 56, 46, 7, 102, 102, 92, 102, 57, 46, 76, 36, 36, 36, 7, 102, 102, 51, 121, 1, 1, 111, 41, 102, 102, 102, 102, 102, 102, 102, 57, 36, 36, 7, 102, 102, 102, 102, 107, 27, 36, 56, 46, 17, 97, 102, 48, 49, 51, 71, 71, 41, 102, 102, 131, 102, 2, 102, 102, 102, 57, 36, 36, 7, 102, 102, 102, 48, 49, 107, 67, 67, 67, 97, 102, 102, 102, 102, 102, 102, 102, 102, 102, 131, 91, 102, 12, 102, 102, 102, 57, 36, 36, 7, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 62, 102, 81, 11, 102, 22, 48, 49, 102, 57, 36, 66, 7, 102, 102, 102, 102, 102, 102, 48, 49, 131, 21, 21, 21, 21, 21, 31, 48, 49, 102, 131, 91, 1, 102, 102, 102, 102, 102, 57, 46, 36, 7, 102, 102, 82, 102, 102, 102, 131, 21, 91, 1, 1, 11, 1, 1, 101, 21, 21, 21, 91, 1, 1, 102, 102, 28, 29, 30, 57, 36, 36, 7, 102, 92, 102, 102, 102, 131, 91, 11, 11, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 11, 1, 102, 92, 38, 39, 40, 57, 36, 56, 7, 102, 102, 102, 82, 131, 91, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1],
				[],
			],
			interactWithTile: function(tileNum, x, y) { // pick up logs
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
				"goblinRockthrower",
				"rock",
				"goblinSkirmisher",
				"goblinBruiser",
				"melee",
				"fireGoblin",
				"fireball", // (ignored by loader if it is already loaded because of a mage player)
				"goblinCorpse",
				"mailcart",
				"trap",
				"torch",
				"ghost"
			],
			
			addresses: [
				"./assets/tilemap/nilbog.png",
				"./assets/enemies/goblinRockthrower.png",
				"./assets/projectiles/rock.png",
				"./assets/enemies/goblinSkirmisher.png",
				"./assets/enemies/goblinBruiser.png",
				"./assets/projectiles/melee.png",
				"./assets/enemies/goblinPyromancer.png",
				"./assets/projectiles/fireball.png",
				"./assets/corpses/deadGoblin.png",
				"./assets/objects/cartDestroyed.png",
				"./assets/objects/trap.png",
				"./assets/npcs/torch.png",
				"./assets/npcs/ghost.png",
			],
		},
		
		song_day: "./assets/music/Pippin-the-Hunchback.mp3",
		song_night: "./assets/music/Pippin-the-Hunchback-night.mp3",
		
		checkpoint: false,
		
		areaTeleports: [
			{
				// teleport to logging camp (bridge - west)
				x: 360,
				y: 1560,
				width: 480,
				height: 1200,
				teleportTo: "eaglecrestLoggingCamp",
				destinationX: 1348,
				playerAdjustY: -360,
			},
			{
				// teleport to nilbog tower (tower - north east)
				x: 1680,
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
				x: 1078,
				y: 502,
				image: "torch",
				name: "Goblin Torch",
				hostility: "friendly",
				level: 5,
				stats: {
					maxHealth: 75,
					defence: 5,
				},
				roles: [
					{
						quest: Quests.eaglecrestLoggingCamp[14], 
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
				y: 547,
				image: "ghost",
				name: "Samhain Ghost",
				hostility: "friendly",
				level: 20,
				stats: {
					maxHealth: 150,
					defence: 1,
					dodgeChance: 40,
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
						roleText: "I'd like to browse your Samhain event items.",
					},
				],
				chat: {
					shopGreeting: "I can exchange items from my realm with Samhain Marks for a limited time.",
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
				x: 1380,
				y: 905,
				image: "mailcart",
				name: "Mail Cart",
				loot: [Items.item[6]],
				lootQuantities: [1],
				inventorySpace: 8,
				disappearAfterOpened: false,
				canBeShown: function () {
					return (Player.quests.activeQuestArray.includes("First Class Recovery") || Player.quests.completedQuestArray.includes("First Class Recovery"));
				},
			},
		],
		
		enemies: [
			{
				x: 1310, // at goblin camp
				y: 400,
				template: EnemyTemplates.nilbog.goblinRockthrower,
			},
			{
				x: 870, // south west (near logging camp)
				y: 1320,
				template: EnemyTemplates.nilbog.goblinRockthrower,
			},
			{
				x: 1010, // at goblin camp
				y: 300,
				template: EnemyTemplates.nilbog.goblinSkirmisher,
			},
			{
				x: 1480, // south (between bogs)
				y: 1240,
				template: EnemyTemplates.nilbog.goblinSkirmisher,
				//template.stats.respawnTime: 20000, // longer respawn time (currently doesn't work)
			},
			{
				x: 1100, // next to mail cart (only present when that quest is active)
				y: 915,
				template: EnemyTemplates.nilbog.goblinSkirmisher,
				canBeShown: function () { // only show after mail cart quest has been started
					return (Player.quests.activeQuestArray.includes("First Class Recovery") || Player.quests.completedQuestArray.includes("First Class Recovery"));
				},
			},
			{
				x: 1240, // at goblin camp
				y: 250,
				template: EnemyTemplates.nilbog.goblinBruiser,
			},
			{
				x: 1750, // outside tower
				y: 640,
				template: EnemyTemplates.nilbog.goblinBruiser,
			},
			{
				x: 1350, // at goblin camp
				y: 100,
				template: EnemyTemplates.nilbog.fireGoblin,
			},
		],
		
		things: [], // for traps to be shown
	},
	
	nilbogTower1: {
		
		data: {
			name: "Nilbog Tower",
			level: "Level 3 - 5",
			territory: "Hostile territory",
			displayOnEnter: true,
		},
		
		indoors: true,

		mapData: {
			cols: 10,
			rows: 10,
			tsize: 60,
			tilesPerRow: 2,
			solidTiles: [1, 2, 3, 4, 6, 8, 9, 11], // walls
			layers: [
				[3, 9, 11, 1, 3, 9, 11, 1, 3, 1, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
				[],
			],
		},
		
		images: {
			names: [
				"tiles",
				"stairs",
				"painting",
				"goblinTowerkeeper",
				"goblinCorpse",
				"melee",
			],
			
			addresses: [
				"./assets/tilemap/nilbogTower.png",
				"./assets/objects/stairs.png",
				"./assets/objects/paintingAndrews.png",
				"./assets/enemies/goblinTowerkeeper.png",
				"./assets/corpses/deadGoblin.png",
				"./assets/projectiles/melee.png",
			],
		},
		
		song_day: "./assets/music/Pippin-the-Hunchback.mp3",
		
		checkpoint: false,
		
		areaTeleports: [
			{
				// teleport to nilbog (bottom of tower)
				x: 240,
				y: 649,
				width: 240,
				height: 2,
				teleportTo: "nilbog",
				destinationX: 1650,
				destinationY: 515,
			},
			{
				// teleport to floor 2
				x: 620,
				y: 60,
				width: 2,
				height: 60,
				teleportTo: "nilbogTower2",
				destinationX: 30,
				destinationY: 534,
			},
		],
		
		things: [
			{
				x: 497,
				y: 125,
				image: "stairs",
				name: "Stairs",
			},
			{
				x: 560,
				y: 180,
				image: "painting",
				name: "Painting",
			},
		],
		
		collisions: [
			{
				x: 600, // bottom of stairs
				y: 240,
				width: 177,
				height: 50,
			},
		],
		
		tripwires: [
			{
				// going to top of stairs
				x: 400,
				y: 230,
				width: 2,
				height: 50,
				collisionType: "feet",
				onPlayerTouch: function () {
					if (Game.hero.moveTowards === undefined) {
						// walk up stairs
						Game.hero.direction = 4;
						Game.hero.moveTowards = {
							x: 600,
							y: Game.hero.y -180,
							speedScalar: 0.6,
						};
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
		],
	},
	
	nilbogTower2: {
		
		data: {
			name: "Nilbog Tower",
			level: "Level 3 - 5",
			territory: "Hostile territory",
			displayOnEnter: false,
		},
		
		indoors: true,

		mapData: {
			cols: 10,
			rows: 10,
			tsize: 60,
			tilesPerRow: 2,
			solidTiles: [1, 2, 3, 4, 6, 8, 9, 11], // walls
			layers: [
				[3, 9, 11, 1, 3, 9, 11, 1, 3, 1, 9, 11, 9, 11, 9, 11, 9, 11, 9, 11, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7, 5, 5, 5, 5, 5, 5, 5, 5, 5],
				[],
			],
		},
		
		images: {
			names: [
				"tiles",
				"stairs",
				"painting",
				"goblinTowerkeeper",
				"goblinCrusader",
				"goblinCorpse",
				"melee",
			],
			
			addresses: [
				"./assets/tilemap/nilbogTower.png",
				"./assets/objects/stairs.png", // TBC (flip stairs)
				"./assets/objects/paintingAndrews.png", // TBC
				"./assets/enemies/goblinTowerkeeper.png",
				"./assets/enemies/goblinCrusader.png",
				"./assets/corpses/deadGoblin.png",
				"./assets/projectiles/melee.png",
			],
		},
		
		song_day: "./assets/music/Pippin-the-Hunchback.mp3",
		
		checkpoint: false,
		
		areaTeleports: [
			{
				// teleport to nilbog (bottom of tower)
				x: 60, // TBC
				y: 649, // TBC
				width: 60,
				height: 2,
				teleportTo: "nilbogTower1",
				destinationX: 360,
				destinationY: 180,
			},
			/*{
				// teleport to floor 3
				x: 620, // TBC
				y: 60, // TBC
				width: 2,
				height: 60,
				teleportTo: "nilbogTower3",
				destinationX: 30, // TBC
				destinationY: 534,
			},*/
		],
		
		/*things: [
			{
				x: 497, // TBC
				y: 125, // TBC
				image: "stairs",
				name: "Stairs",
			},
			{
				x: 560, // TBC
				y: 180, // TBC
				image: "painting",
				name: "Painting",
			},
		],
		
		collisions: [
			{
				x: 600, // bottom of stairs // TBC
				y: 240,
				width: 177,
				height: 50,
			},
		],
		
		tripwires: [
			{
				// going to top of stairs
				x: 400, // TBC
				y: 230,
				width: 2,
				height: 50,
				collisionType: "feet",
				onPlayerTouch: function () {
					if (Game.hero.moveTowards === undefined) {
						// walk up stairs
						Game.hero.direction = 4;
						Game.hero.moveTowards = {
							x: 600, // TBC
							y: Game.hero.y -180,
							speedScalar: 0.6,
						};
					}
				}
			}
		],*/
		
		enemies: [
			{
				x: 300,
				y: 200,
				template: EnemyTemplates.nilbog.goblinCrusader,
			},
		],
	},
};
