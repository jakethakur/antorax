var areas = {
	tutorial: {
		questNPCs: [
			{
				//map: map,
				x: 1470,
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
				x: 500,
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
				x: 440,
				y: -49,
				width: 150,
				height: 2,
				teleportTo: "eaglecrestLoggingCamp"
			},
		],

		mapData: {
			cols: 30,
			rows: 10,
			tsize: 60,
			tilesPerRow: 8, //tiles per tilemap row
			layers: [[
				37, 26, 33, 22, 23, 24, 24, 22, 23, 24, 24, 24, 3, 4, 5, 24, 24, 24, 24, 24, 24, 2, 24, 24, 24, 24, 24, 24, 24, 24, 37, 29, 33, 24, 24, 24, 24, 22, 23, 24, 24, 24, 11, 12, 13, 24, 21, 24, 24, 24, 24, 24, 24, 2, 1, 24, 24, 24, 24, 24, 37, 28, 33, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 21, 1, 37, 26, 33, 22, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 3, 4, 5, 24, 24, 24, 37, 26, 33, 24, 22, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 18, 19, 20, 24, 2, 7, 8, 24, 11, 12, 13, 24, 24, 24, 37, 26, 9, 35, 34, 24, 24, 24, 24, 24, 21, 24, 24, 24, 24, 24, 24, 17, 24, 24, 24, 15, 16, 24, 24, 24, 24, 24, 24, 24, 10, 26, 26, 26, 9, 34, 24, 24, 24, 24, 24, 24, 24, 24, 3, 4, 5, 25, 21, 24, 24, 24, 24, 24, 24, 24, 7, 8, 1, 24, 27, 26, 26, 26, 26, 33, 24, 24, 24, 24, 24, 24, 24, 24, 11, 12, 13, 24, 24, 24, 24, 24, 24, 24, 24, 24, 15, 16, 2, 24, 26, 26, 29, 28, 26, 9, 35, 35, 35, 35, 34, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 2, 24, 24, 24, 24, 24, 24, 24, 29, 28, 26, 27, 26, 26, 29, 26, 28, 26, 9, 35, 35, 35, 35, 35, 34, 24, 24, 24, 24, 24, 24, 24, 24, 21, 24, 24, 24, 24,
			],[]],
		},
		
		player: {
			x: 1700,
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