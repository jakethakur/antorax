var areas = {
	tutorial: {
		questStartNPCs: [
			{
				x: 2070,
				y: 340,
				width: 92,
				height: 100,
				image: "driver",
				quest: quests.eaglecrestLoggingCamp[0],
				name: "Cart Driver",
				questProgressText: "Good luck with your travels!",
				questCompleteText: "Look how much you've grown!",
			},
		],
		
		questFinishNPCs: [
		],
		
		merchants: [
			{
				x: 1100,
				y: 400,
				width: 90,
				height: 110,
				image: "weaponsmith",
				name: "Weaponsmith",
				greetingText: "Would you like to buy anything?",
				buyText: "Come back again some time.",
				items: [
					{
						name: "Basic Sword",
						cost: 3,
						image: "assets/items/sword.png",
						stats: {}
					},
					{
						name: "Basic Staff",
						cost: 3,
						image:"assets/items/staff.png",
						stats: {}
					},
					{
						name: "Basic Bow",
						cost: 3,
						image:"assets/items/bow.png",
						stats: {}
					},
				],
			},
		],
		
		areaTeleports: [
			{
				x: 255,
				y: -49,
				width: 150,
				height: 2,
				teleportTo: "eaglecrestLoggingCamp"
			},
		],

		mapData: {
			// make a place to specify what the tilemap is, and make each of the 2 areas use a separate tilemap
			cols: 40,
			rows: 10,
			tsize: 60,
			tilesPerRow: 11, //tiles per tilemap row (important!)
			layers: [
				[35, 26, 35, 35, 26, 35, 35, 35, 35, 35, 61, 50, 57, 35, 26, 35, 35, 35, 35, 35, 35, 35, 27, 28, 29, 35, 35, 35, 35, 35, 35, 24, 35, 35, 35, 35, 35, 35, 35, 35, 35, 37, 35, 35, 37, 35, 35, 35, 64, 65, 61, 52, 57, 35, 37, 35, 35, 35, 35, 35, 35, 35, 38, 39, 40, 35, 49, 35, 35, 35, 35, 35, 35, 24, 23, 35, 35, 35, 35, 35, 49, 48, 35, 35, 48, 64, 65, 35, 64, 65, 61, 56, 57, 35, 48, 49, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 49, 23, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 2, 1, 3, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 27, 28, 29, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 61, 50, 57, 64, 65, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 45, 46, 47, 35, 24, 42, 43, 35, 38, 39, 40, 35, 35, 35, 65, 35, 35, 35, 35, 35, 64, 65, 49, 35, 61, 50, 63, 59, 58, 35, 35, 35, 35, 35, 49, 35, 35, 35, 35, 35, 35, 30, 35, 35, 35, 53, 54, 35, 35, 35, 35, 35, 35, 35, 64, 65, 35, 35, 35, 64, 65, 35, 60, 59, 67, 50, 50, 50, 63, 58, 35, 35, 35, 35, 35, 35, 35, 35, 27, 28, 29, 41, 49, 35, 35, 35, 35, 35, 35, 35, 42, 43, 23, 35, 59, 59, 59, 59, 59, 59, 59, 59, 67, 50, 50, 50, 50, 50, 50, 63, 59, 58, 35, 35, 35, 35, 35, 35, 38, 39, 40, 35, 35, 35, 35, 35, 35, 35, 35, 35, 53, 54, 24, 35, 50, 50, 50, 50, 50, 50, 50, 51, 50, 50, 50, 56, 50, 50, 50, 50, 50, 63, 59, 59, 58, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 24, 35, 35, 35, 35, 35, 35, 35, 50, 50, 51, 50, 50, 50, 50, 50, 50, 50, 56, 56, 50, 50, 50, 50, 50, 50, 50, 50, 63, 59, 59, 59, 59, 59, 58, 35, 35, 35, 35, 35, 35, 35, 35, 49, 35, 35, 35, 35],
				[],
			],
		},
		
		player: {
			x: 2300,
			y: 270,
		}
	},
	
	
	eaglecrestLoggingCamp: {
		questStartNPCs: [
		],
		
		questFinishNPCs: [
			{
				x: 500,
				y: 500,
				width: 92,
				height: 100,
				image: "driver",
				quest: quests.eaglecrestLoggingCamp[0],
				name: "Marshall Teper",
				questProgressText: "Get on with your work!",
				questCompleteText: "There's lots of work still to be done.",
			},
		],
		
		merchants: [
		],
		
		areaTeleports: [
		],
		
		mapData: {
			// make a place to specify what the tilemap is, and make each of the 2 areas use a separate tilemap
			cols: 20,
			rows: 20,
			tsize: 60,
			tilesPerRow: 11, //tiles per tilemap row (important!)
			layers: [
				[35, 35, 35, 35, 5, 5, 5, 5, 5, 5, 5, 35, 35, 35, 61, 50, 57, 35, 35, 35, 35, 64, 65, 35, 5, 34, 5, 25, 6, 34, 5, 35, 35, 35, 61, 52, 57, 35, 35, 35, 64, 65, 35, 19, 5, 5, 5, 36, 5, 5, 5, 18, 35, 35, 61, 50, 57, 35, 49, 35, 35, 35, 17, 7, 7, 7, 8, 7, 7, 7, 7, 7, 13, 26, 61, 50, 57, 35, 64, 65, 35, 35, 16, 7, 7, 7, 7, 7, 7, 7, 8, 7, 13, 37, 61, 50, 57, 64, 65, 35, 35, 49, 17, 7, 7, 7, 7, 7, 7, 7, 7, 7, 12, 48, 61, 50, 57, 35, 35, 35, 64, 65, 17, 7, 7, 8, 7, 7, 7, 7, 7, 7, 13, 35, 61, 56, 57, 35, 35, 35, 35, 35, 17, 7, 7, 7, 7, 7, 7, 7, 7, 7, 13, 35, 2, 1, 3, 35, 35, 35, 35, 35, 17, 7, 7, 7, 7, 7, 7, 7, 7, 7, 13, 35, 61, 50, 57, 35, 35, 35, 35, 35, 16, 7, 7, 7, 7, 7, 7, 7, 7, 7, 13, 35, 61, 50, 57, 35, 35, 35, 35, 35, 16, 7, 7, 7, 7, 7, 7, 7, 8, 7, 12, 35, 61, 51, 57, 35, 35, 35, 35, 35, 17, 7, 7, 7, 7, 7, 7, 7, 7, 7, 13, 35, 61, 50, 57, 35, 35, 35, 35, 35, 35, 15, 15, 15, 14, 14, 14, 15, 15, 14, 35, 35, 61, 50, 57, 35, 35, 35, 35, 9, 10, 11, 35, 35, 35, 35, 35, 35, 26, 35, 35, 35, 61, 50, 57, 35, 35, 35, 35, 20, 21, 22, 35, 35, 35, 35, 35, 35, 37, 35, 35, 35, 61, 50, 57, 35, 35, 35, 49, 31, 32, 33, 35, 35, 35, 35, 35, 35, 48, 64, 65, 35, 61, 56, 57, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 61, 56, 57, 35, 64, 65, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 27, 28, 29, 61, 52, 57, 35, 64, 65, 35, 64, 65, 35, 35, 35, 35, 35, 35, 35, 49, 38, 39, 40, 61, 50, 57, 64, 65, 49, 64, 65, 35, 64, 65, 35, 35, 35, 35, 35, 35, 35, 35, 35, 61, 50, 57, 49, 35, 35],
				[],
			],
		},
		
		player: {
			x: 460,
			y: 1200,
		}
	},
};