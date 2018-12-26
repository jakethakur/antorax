const EnemyLootTables = {
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
				95,				// 0
				Infinity,		// 1
			],
		},
		{ // position reverser
			item: Items.consumable[14],
			chance: [
				95,				// 0
				Infinity,		// 1
			],
		},
		{ // restorative timepiece
			item: Items.consumable[15],
			chance: [
				95,				// 0
				Infinity,		// 1
			],
		},
		{ // arcane magnet
			item: Items.item[15],
			chance: [
				95,				// 0
				Infinity,		// 1
			],
		},
		{ // tattered tome
			item: Items.item[16],
			chance: [
				90,				// 0
				Infinity,		// 1
			],
		},
		{ // tower chest key
			item: Items.item[18],
			chance: [
				96,				// 0
				Infinity,		// 1
			],
		},
	],
};

const ChestLootTables = {
	global: [
		// all chests have this (for events)
		{ // samhain mark
			item: Items.currency[4],
			condition: function () {
				if (Game.time === "bloodMoon") {
					return true;
				}
				return false;
			},
			chance: [
				0,				// 0
				50,				// 1
				80,				// 2
				Infinity,		// 3
			],
		},
	],
	nilbog: [
		{ // unidentified item
			item: {
				name: "unidentified",
				tier: 1,
				area: "loggingCamp",
			},
			chance: [
				0,				// 0
				70,				// 1
				Infinity,		// 2
			],
		},
		{ // gold
			item: Items.currency[2],
			chance: [
				0,				// 0
				0,				// 1
				30,				// 2
				60,				// 3
				90,				// 4
				Infinity,		// 5
			],
		},
		{ // random potion (including goblin potion)
			item: [Items.consumable[2], Items.consumable[3], Items.consumable[4], Items.consumable[6]],
			chance: [
				0,				// 0
				Infinity,		// 1
			],
		},
	],
	nilbogTower: [ // used as well as nilbog
		{ // displacement grenade
			item: Items.consumable[13],
			chance: [
				50,				// 0
				Infinity,		// 1
			],
		},
		{ // position reverser
			item: Items.consumable[14],
			chance: [
				50,				// 0
				Infinity,		// 1
			],
		},
		{ // restorative timepiece
			item: Items.consumable[15],
			chance: [
				50,				// 0
				Infinity,		// 1
			],
		},
		{ // arcane magnet
			item: Items.item[15],
			chance: [
				50,				// 0
				Infinity,		// 1
			],
		},
	],
};