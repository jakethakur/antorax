var areas = {
	tutorial: {
		questNPCs: [
			{
				//map: map,
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
		
		merchants: [
			{
				//map: map,
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
			cols: 40,
			rows: 10,
			tsize: 60,
			tilesPerRow: 10, //tiles per tilemap row (important!)
			layers: [
				[50, 22, 50, 50, 22, 50, 50, 50, 50, 50, 55, 37, 51, 50, 22, 50, 50, 50, 50, 50, 50, 50, 23, 24, 25, 50, 50, 50, 50, 50, 50, 17, 50, 50, 50, 50, 50, 50, 50, 50, 50, 32, 50, 50, 32, 50, 50, 50, 58, 59, 55, 46, 51, 50, 32, 50, 50, 50, 50, 50, 50, 50, 33, 34, 35, 50, 27, 50, 50, 50, 50, 50, 50, 17, 16, 50, 50, 50, 50, 50, 27, 42, 50, 50, 42, 58, 59, 50, 58, 59, 55, 47, 51, 50, 42, 27, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 27, 16, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 2, 1, 3, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 23, 24, 25, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 55, 37, 51, 58, 59, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 43, 44, 45, 50, 17, 38, 39, 50, 33, 34, 35, 50, 50, 50, 59, 50, 50, 50, 50, 50, 58, 59, 27, 50, 55, 37, 57, 53, 52, 50, 50, 50, 50, 50, 27, 50, 50, 50, 50, 50, 50, 26, 50, 50, 50, 48, 49, 50, 50, 50, 50, 50, 50, 50, 58, 59, 50, 50, 50, 58, 59, 50, 54, 53, 61, 37, 46, 37, 57, 52, 50, 50, 50, 50, 50, 50, 50, 50, 23, 24, 25, 36, 27, 50, 50, 50, 50, 50, 50, 50, 38, 39, 16, 50, 53, 53, 53, 53, 53, 53, 53, 53, 61, 37, 37, 37, 37, 37, 37, 57, 53, 52, 50, 50, 50, 50, 50, 50, 33, 34, 35, 50, 50, 50, 50, 50, 50, 50, 50, 50, 48, 49, 17, 50, 37, 37, 37, 37, 37, 37, 46, 41, 37, 37, 37, 47, 46, 37, 41, 37, 37, 57, 53, 53, 52, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 17, 50, 50, 50, 50, 50, 50, 50, 37, 46, 41, 37, 37, 37, 37, 37, 37, 37, 47, 47, 37, 37, 37, 41, 46, 37, 37, 37, 57, 53, 53, 53, 53, 53, 52, 50, 50, 50, 50, 50, 50, 50, 50, 27, 50, 50, 50, 50],
				[],
			],
		},
		
		player: {
			x: 2300,
			y: 270,
		}
	},
};

/*
initArea();
	
function initArea() {
	for(var i = 0; i < questNPCs.length; i++) {
		Game.questNPCs.push(new questNPC(questNPCs[i]));
	}
	for(var i = 0; i < merchants.length; i++) {
		Game.merchants.push(new merchant(merchants[i]));
	}
	Object.assign(map, mapData);
}
*/