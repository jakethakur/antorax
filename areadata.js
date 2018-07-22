var Areas = { // areas should have a capital (global variable)
	
	tutorial: {
		
		data: {
			name: "Fishers' Valley",
			level: "Level 1 - 5",
			territory: "Neutral territory",
		},

		mapData: {
			// make a place to specify what the tilemap is, and make each of the 2 areas use a separate tilemap
			cols: 43,
			rows: 10,
			tsize: 60,
			tilesPerRow: 7, //tiles per tilemap row (important!)
			solidTiles: [],
			waterTiles: [24, 31, 38],
			pathTiles: [2, 9, 16, 23, 30, 37, 44, 51, 58],
			layers: [
				[50, 1, 50, 2, 50, 1, 50, 50, 50, 50, 50, 50, 39, 24, 24, 4, 50, 1, 50, 50, 50, 50, 36, 50, 50, 5, 6, 7, 50, 50, 50, 50, 36, 50, 50, 50, 36, 50, 50, 50, 50, 50, 50, 50, 8, 50, 2, 50, 8, 50, 50, 50, 50, 26, 27, 39, 24, 38, 4, 50, 8, 50, 50, 50, 50, 50, 50, 50, 12, 13, 14, 50, 43, 50, 50, 50, 50, 36, 50, 50, 50, 50, 50, 50, 50, 50, 43, 15, 50, 2, 50, 15, 50, 26, 27, 50, 26, 27, 39, 24, 24, 4, 50, 15, 43, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 36, 50, 50, 50, 50, 50, 50, 50, 43, 50, 27, 50, 50, 37, 2, 2, 2, 2, 2, 2, 2, 2, 10, 3, 3, 17, 2, 2, 2, 9, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 60, 26, 27, 50, 50, 50, 50, 50, 50, 50, 50, 50, 39, 24, 24, 4, 26, 27, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 19, 20, 21, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 4, 50, 50, 50, 50, 50, 50, 50, 26, 27, 43, 50, 39, 24, 24, 81, 32, 60, 50, 50, 50, 50, 50, 43, 50, 50, 50, 50, 50, 50, 22, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 81, 60, 50, 50, 50, 50, 50, 26, 27, 50, 53, 32, 25, 24, 24, 24, 24, 81, 60, 50, 50, 50, 50, 50, 50, 50, 50, 5, 6, 7, 29, 43, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 24, 81, 32, 32, 32, 32, 32, 32, 32, 32, 25, 24, 24, 24, 24, 24, 24, 24, 81, 32, 60, 50, 50, 50, 50, 50, 50, 12, 13, 14, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 36, 50, 50, 24, 24, 24, 24, 24, 24, 24, 38, 31, 24, 24, 24, 24, 24, 52, 45, 38, 24, 24, 24, 81, 32, 32, 60, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 31, 38, 24, 24, 24, 24, 24, 24, 24, 24, 24, 38, 52, 45, 52, 45, 45, 24, 31, 24, 24, 24, 24, 81, 32, 32, 32, 32, 32, 60, 50, 50, 50, 50, 50, 50, 50, 36, 50, 50, 50, 50, 36],
				[],
			],
		},
		
		// images that need to be loaded in
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
		
		song-day: "./assets/music/Pippin-the-Hunchback.mp3",
		song-night: "./assets/music/Pippin-the-Hunchback-night.mp3",
		
		player: {
			x: 2297,
			y: 387,
		},
		
		areaTeleports: [
			{
				x: 315,
				y: -49,
				width: 210,
				height: 2,
				teleportTo: "eaglecrestLoggingCamp",
				destinationX: 460,
				destinationY: 1100,
			},
		],
		
		questNPCs: [
			{
				x: 2080,
				y: 290,
				width: 92,
				height: 100,
				image: "driver",
				quests: [
					{
						quest: Quests.eaglecrestLoggingCamp[0], 
						role: "start"
					},
				],
				name: "Cart Driver",
				questProgressText: "Good luck with your travels!",
				questCompleteText: "Look how much you've grown!",
			},
		],
		
		merchants: [
			{
				x: 1300,
				y: 350,
				width: 90,
				height: 110,
				image: "weaponsmith",
				name: "Weaponsmith",
				greetingText: "Would you like to buy anything?",
				buyText: "Come back some time.",
				items: [
					Items.sword[2],
					Items.staff[2],
					Items.bow[2],
				],
			},
		],
		
		characters: [
			{
				x: 2290,
				y: 290,
				width: 246,
				height: 175,
				image: "cart",
			},
		],
		
		villagers: [
			/*{
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
				x: 1500,
				y: 200,
				width: 90,
				height: 110,
				image: "weaponsmith",
				name: "Weaponsmith Clone",
				speed: 1,
				health: 355,
				range: 200,
				reloadTime: 1000,
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
			cols: 20,
			rows: 20,
			tsize: 60,
			tilesPerRow: 11,
			solidTiles: [4,5,6,25,36,34],
			waterTiles: [50, 51, 52],
			layers: [
				[35, 35, 35, 35, 5, 5, 5, 5, 5, 5, 5, 35, 35, 35, 61, 50, 57, 35, 35, 35, 35, 64, 65, 35, 5, 34, 5, 25, 6, 34, 5, 35, 35, 35, 61, 52, 57, 35, 35, 35, 64, 65, 35, 19, 5, 5, 5, 36, 5, 5, 5, 18, 35, 35, 61, 50, 57, 35, 49, 35, 35, 35, 17, 7, 7, 7, 8, 7, 7, 7, 7, 7, 13, 26, 61, 50, 57, 35, 64, 65, 35, 35, 16, 7, 7, 7, 7, 7, 7, 7, 8, 7, 13, 37, 61, 50, 57, 64, 65, 35, 35, 49, 17, 7, 7, 7, 7, 7, 7, 7, 7, 7, 12, 48, 61, 50, 57, 35, 35, 35, 64, 65, 17, 7, 7, 8, 7, 7, 7, 7, 7, 7, 13, 35, 61, 56, 57, 35, 35, 35, 35, 35, 17, 7, 7, 7, 7, 7, 7, 7, 7, 7, 13, 35, 2, 1, 3, 35, 35, 35, 35, 35, 17, 7, 7, 7, 7, 7, 7, 7, 7, 7, 13, 35, 61, 50, 57, 35, 35, 35, 35, 35, 16, 7, 7, 7, 7, 7, 7, 7, 7, 7, 13, 35, 61, 50, 57, 35, 35, 35, 35, 35, 16, 7, 7, 7, 7, 7, 7, 7, 8, 7, 12, 35, 61, 51, 57, 35, 35, 35, 35, 35, 17, 7, 7, 7, 7, 7, 7, 7, 7, 7, 13, 35, 61, 50, 57, 35, 35, 35, 35, 35, 35, 15, 15, 15, 14, 14, 14, 15, 15, 14, 35, 35, 61, 50, 57, 35, 35, 35, 35, 9, 10, 11, 35, 35, 35, 35, 35, 35, 26, 35, 35, 35, 61, 50, 57, 35, 35, 35, 35, 20, 21, 22, 35, 35, 35, 35, 35, 35, 37, 35, 35, 35, 61, 50, 57, 35, 35, 35, 49, 31, 32, 33, 35, 35, 35, 35, 35, 35, 48, 64, 65, 35, 61, 56, 57, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 61, 56, 57, 35, 64, 65, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 27, 28, 29, 61, 52, 57, 35, 64, 65, 35, 64, 65, 35, 35, 35, 35, 35, 35, 35, 49, 38, 39, 40, 61, 50, 57, 64, 65, 49, 64, 65, 35, 64, 65, 35, 35, 35, 35, 35, 35, 35, 35, 35, 61, 50, 57, 49, 35, 35],
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
				"./assets/tilemap/tilemap.png",
				"./assets/npcs/teper.png",
				"./assets/npcs/identifier.png",
				"./assets/enemies/dummy.png",
			],
		},
		
		song-day: "./assets/music/Pippin-the-Hunchback.mp3",
		song-night: "./assets/music/Pippin-the-Hunchback-night.mp3",
		
		areaTeleports: [
			{
				// teleport to tutorial area (south)
				x: 385,
				y: 1249,
				width: 150,
				height: 2,
				teleportTo: "tutorial",
				destinationX: 200,
				destinationY: 100,
			},
			{
				// teleport to tavern (tavern door - north)
				x: 445,
				y: 82,
				width: 60,
				height: 2,
				teleportTo: "tavern",
				destinationX: 315,
				destinationY: 650,
			},
		],
		
		questNPCs: [
			{
				x: 464,
				y: 440,
				width: 73,
				height: 123,
				image: "teper",
				quests: [
					{
						quest: Quests.eaglecrestLoggingCamp[0], 
						role: "finish"
					},
				],
				name: "Marshall Teper",
				questProgressText: "Get on with your work!",
				questCompleteText: "There's lots of work still to be done.",
			},
		],
		
		identifiers: [
			{
				x: 260,
				y: 540,
				width: 78,
				height: 125,
				image: "identifier",
			},
		],
		
		dummies: [
			{
				x: 570,
				y: 550,
				width: 57,
				height: 100,
				image: "dummy",
				name: "Target Dummy",
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
			solidTiles: [1],
			waterTiles: [],
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
		
		song-day: "./assets/music/Tavern.mp3",
		song-night: "./assets/music/Tavern.mp3",
		
		questNPCs: [
			{
				x: 165,
				y: 65,
				width: 67,
				height: 90,
				image: "innkeeper",
				quests: [
					{
						quest: Quests.eaglecrestLoggingCamp[1], 
						role: "start"
					},
				],
				name: "Gregor Goldenbrew",
				questProgressText: "Girls! Make some room by the hearth, won't ya!",
				questCompleteText: "Oh ho ho! It's good to see ya again!",
			},
		],
		
	},
	
};