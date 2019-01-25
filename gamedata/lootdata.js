// How chance works:
// number rolled from 0 to 100
// chances are multiplied by looting
// smallest number that roll is more than is chosen for item

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
				25,				// 0
				0,				// 1
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
			chance: [
				40,				// 0
				0,				// 1
			],
		},
		{ // gold
			item: Items.currency[2],
			chance: [
				20,				// 0
				5,				// 1
				0,				// 2
			],
		},
		{ // log
			item: Items.item[2],
			chance: [
				20,				// 0
				0,				// 1
			],
		},
		{ // scrap of cloth
			item: Items.item[3],
			chance: [
				70,				// 0
				0,				// 1
			],
		},
		{ // goblin brewed potion
			item: Items.consumable[6],
			chance: [
				10,				// 0
				0,				// 1
			],
		},
		{ // goblin sewn bag
			item: Items.bag[3],
			chance: [
				2,				// 0
				0,				// 1
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
				35,				// 0
				0,				// 1
			],
		},
		{ // goblin eye
			item: Items.item[10],
			chance: [
				15,				// 0
				14,				// 1
				0,				// 2
			],
		},
	],
	nilbogTowerGoblin: [ // as well as nilbogGoblin
		{ // displacement grenade
			item: Items.consumable[13],
			chance: [
				5,				// 0
				0,				// 1
			],
		},
		{ // position reverser
			item: Items.consumable[14],
			chance: [
				5,				// 0
				0,				// 1
			],
		},
		{ // restorative timepiece
			item: Items.consumable[15],
			chance: [
				5,				// 0
				0,				// 1
			],
		},
		{ // arcane magnet
			item: Items.item[15],
			chance: [
				5,				// 0
				0,				// 1
			],
		},
		{ // tattered tome
			item: Items.item[16],
			chance: [
				10,				// 0
				0,				// 1
			],
		},
		{ // tower chest key
			item: Items.item[18],
			chance: [
				4,				// 0
				0,				// 1
			],
		},
	],
};

const BossLootTables = {
	global: [
		// all bosses have this (for events)
		{ // samhain mark
			item: Items.currency[4],
			condition: function () {
				if (Game.time === "bloodMoon") {
					return true;
				}
				return false;
			},
			chance: [
				100,			// 0
				100,			// 1
				50,				// 2
				30,				// 3
				10,				// 4
				0,				// 5
			],
		},
	],
	goblinKing: [
		{ // random tier 1 mythic armour if it is the first time defeating this boss
			item: [Items.helm[5], Items.chest[5], Items.greaves[5], Items.boots[6]],
			chance: [
				100,			// 0
				0,				// 1
			],
			condition: function () {
				if (Player.bossesKilled.goblinKing === 0) {
					return true; // goblin king has not been killed before
				}
				return false;
			},
		},
	],
	tatteredKnight: [
		{ // tattered knight's chestplate
			item: Items.chest[5],
			chance: [
				100,			// 0
				0,				// 1
			],
		},
		{ // tattered tome
			item: Items.item[16],
			chance: [
				100,			// 0
				100,			// 1
				100,			// 2
				100,			// 3
				80,				// 4
				60,				// 5
				40,				// 6
				20,				// 7
				0,				// 8
			],
		},
		{ // gold (lots)
			item: Items.currency[2],
			chance: [
				100,			// 0
				100,			// 1
				100,			// 2
				70,				// 3
				40,				// 4
				10,				// 5
				0,				// 6
			],
		},
		{ // unidentified items
			item: {
				name: "unidentified",
				tier: 1,
				area: "loggingCamp",
			},
			chance: [
				100,			// 0
				100,			// 1
				80,				// 2
				0,				// 3
				20,				// 4
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
				100,			// 0
				50,				// 1
				20,				// 2
				0,				// 3
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
				100,			// 0
				30,				// 1
				0,				// 2
			],
		},
		{ // gold
			item: Items.currency[2],
			chance: [
				100,			// 0
				70,				// 1
				30,				// 2
				0,				// 3
			],
		},
		{ // random potion (including goblin potion)
			item: [Items.consumable[2], Items.consumable[3], Items.consumable[4], Items.consumable[6]],
			chance: [
				100,			// 0
				0,				// 1
			],
		},
	],
	nilbogTower: [ // used as well as nilbog
		{ // displacement grenade
			item: Items.consumable[13],
			chance: [
				50,				// 0
				0,				// 1
			],
		},
		{ // position reverser
			item: Items.consumable[14],
			chance: [
				50,				// 0
				0,				// 1
			],
		},
		{ // restorative timepiece
			item: Items.consumable[15],
			chance: [
				50,				// 0
				0,				// 1
			],
		},
		{ // arcane magnet
			item: Items.item[15],
			chance: [
				50,				// 0
				0,				// 1
			],
		},
	],
};
