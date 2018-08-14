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
			],
			
			addresses: [
				"./assets/tilemap/tutorial.png",
				"./assets/npcs/driver.png",
				"./assets/npcs/weaponsmith.png",
				"./assets/objects/cartEaglecrest.png",
			],
		},
		
		song_day: "./assets/music/Pippin-the-Hunchback.mp3",
		song_night: "./assets/music/Pippin-the-Hunchback-night.mp3",
		
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
				level: 10,
				stats: {
					maxHealth: 100,
					defence: 1,
				},
				quests: [
					{
						quest: Quests.eaglecrestLoggingCamp[0], 
						role: "start"
					},
				],
				chat: {
					questProgress: "Good luck with your adventures!",
					questComplete: "I hope your quests are going well!",
				}
			},
			{
				x: 1300,
				y: 350,
				image: "weaponsmith",
				name: "Weaponsmith",
				level: 10,
				stats: {
					maxHealth: 100,
					defence: 2,
				},
				sold: Player.class === "k" ? [Items.sword[2],] : (Player.class === "m" ? [Items.staff[2],] : (Player.class === "a" ? [Items.bow[2],] : [])),
				chat: {
					shopGreeting: "Would you like to buy anything?",
					shopLeave: "Come back some time.",
				},
			},
		],
		
		characters: [
			{
				x: 2290,
				y: 290,
				image: "cart",
			},
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
			],
			
			addresses: [
				"./assets/tilemap/loggingCamp.png",
				"./assets/npcs/teper.png",
				"./assets/npcs/identifier.png",
				"./assets/enemies/dummy.png",
			],
		},
		
		song_day: "./assets/music/Pippin-the-Hunchback.mp3",
		song_night: "./assets/music/Pippin-the-Hunchback-night.mp3",
		
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
				level: 50,
				stats: {
					maxHealth: 300,
					defence: 10,
				},
				quests: [
					{
						quest: Quests.eaglecrestLoggingCamp[0], 
						role: "finish"
					},
				],
				chat: {
					questProgress: "Get on with your work!",
					questComplete: "There's lots of work still to be done.",
					inventoryFull: "You have no space to hold this. Empty your bags a bit and come back.",
				},
			},
		],
		
		identifiers: [
			{
				x: 680,
				y: 540,
				image: "identifier",
				name: "Identifier Gilas",
				level: 30,
				stats: {
					maxHealth: 200,
					defence: 3,
				},
			},
		],
		
		dummies: [
			{
				x: 230,
				y: 750,
				image: "dummy",
				name: "Target Dummy",
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
		
		NPCs: [
			{
				x: 165,
				y: 65,
				image: "innkeeper",
				name: "Gregor Goldenbrew",
				level: 10,
				stats: {
					maxHealth: 100,
					defense: 2,
				},
				quests: [
					{
						quest: Quests.eaglecrestLoggingCamp[1], 
						role: "start"
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
					// replace tiles with grass
					map.setTile(0, map.getCol(x), map.getRow(y), 102)
					map.setTile(0, map.getCol(x + 60), map.getRow(y), 102)
					// give log item to player
					Dom.inventory.give(Items.item[2], 1);
				}
				else if (tileNum === 49) { // right side of log stack
					// replace tiles with grass
					map.setTile(0, map.getCol(x), map.getRow(y), 102)
					map.setTile(0, map.getCol(x - 60), map.getRow(y), 102)
					// give log item to player
					Dom.inventory.give(Items.item[2], 1);
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
			],
		},
		
		song_day: "./assets/music/Pippin-the-Hunchback.mp3",
		song_night: "./assets/music/Pippin-the-Hunchback-night.mp3",
		
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
		
		NPCs: [
		],
		
		characters: [
			/*{
				x: 2290,
				y: 290,
				width: 246,
				height: 175,
				image: "cart",
			},*/
		],
		
		villagers: [
		],
		
		enemies: [
			{
				x: 1100,
				y: 400,
				image: "rockGoblin",
				deathImage: "goblinCorpse",
				name: "Goblin Rockthrower",
				level: 2,
				stats: {
					damage: 2,
					walkSpeed: 100,
					maxHealth: 14,
					range: 200,
					healthRegen: 0.5,
					reloadTime: 2000,
					respawnTime: 3000,
					variance: 100,
				},
				leashRadius: 400,
				projectile: {
					image: "rock",
				},
				lootTable: [
					
				],
			},
			{
				x: 900,
				y: 300,
				image: "swordGoblin",
				deathImage: "goblinCorpse",
				name: "Goblin Skirmisher",
				level: 2,
				stats: {
					damage: 2,
					walkSpeed: 90,
					maxHealth: 14,
					defence: 2,
					range: 60,
					healthRegen: 0.5,
					reloadTime: 1500,
					respawnTime: 3000,
				},
				leashRadius: 400,
				projectile: {
					image: "melee",
				},
			},
			{
				x: 1000,
				y: 250,
				image: "hammerGoblin",
				deathImage: "goblinCorpse",
				name: "Goblin Bruiser",
				level: 3,
				stats: {
					damage: 3,
					walkSpeed: 70,
					maxHealth: 14,
					defence: 3,
					range: 60,
					healthRegen: 0.5,
					reloadTime: 2000,
					respawnTime: 3000,
				},
				leashRadius: 400,
				projectile: {
					image: "melee",
				},
			},
			{
				x: 1050,
				y: 100,
				image: "fireGoblin",
				deathImage: "goblinCorpse",
				name: "Fire Goblin",
				level: 4,
				stats: {
					damage: 2,
					walkSpeed: 95,
					maxHealth: 18,
					defence: 1,
					range: 140,
					reloadTime: 2250,
					healthRegen: 0.5,
					flaming: 1,
					respawnTime: 10000,
				},
				leashRadius: 400,
				projectile: {
					image: "fire",
				},
			},
		],
	},
	
};