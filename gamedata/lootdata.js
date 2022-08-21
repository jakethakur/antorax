// How chance works:
// number rolled from 1 to 100
// chances are multiplied by looting
// largest number that roll is more than is chosen for item

const EnemyLootTables = {
	global: [
		// all enemies have this (for events)
		{ // ubik
			item: Items.consumable[29],
			chance: [
				0.01,			// 0
				0,				// 1
			],
		},
		{ // samhain mark
			item: Items.currency[4],
			condition: function () {
				return Event.time === "bloodMoon";
			},
			chance: [
				15,				// 0
				0,				// 1
			],
		},
		// "Heroes of Antorax" fragments (1% drop chance)
		{
			item: Items.item[19],
			condition: function () {
				return Event.event === "Heroes";
			},
			chance: [
				1,				// 0
				0,				// 1
			],
		},
		{
			item: Items.item[20],
			condition: function () {
				return Event.event === "Heroes";
			},
			chance: [
				1,				// 0
				0,				// 1
			],
		},
		{
			item: Items.item[21],
			condition: function () {
				return Event.event === "Heroes";
			},
			chance: [
				1,				// 0
				0,				// 1
			],
		},
		{
			item: Items.item[22],
			condition: function () {
				return Event.event === "Heroes";
			},
			chance: [
				1,				// 0
				0,				// 1
			],
		},
		{
			item: Items.item[23],
			condition: function () {
				return Event.event === "Heroes";
			},
			chance: [
				1,				// 0
				0,				// 1
			],
		},
		{
			item: Items.item[24],
			condition: function () {
				return Event.event === "Heroes";
			},
			chance: [
				1,				// 0
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
				15,				// 0
				3,				// 1
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
				1,				// 0
				0,				// 1
			],
		},
		{ // Fisherman Tobenam's Lost Rod
			item: Items.item[7],
			condition: function () {
			// quest is active and player doesn't already have the rod
				return Player.quests.activeQuestArray.includes("A Lost Fishing Rod") && !Dom.inventory.check(7, "item", 1);
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
				return Event.time === "bloodMoon";
			},
			chance: [
				100,			// 0
				100,			// 1
				35,				// 2
				6,				// 3
				1,				// 4
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
				// goblin king has not been killed before
				return Player.bossesKilled.goblinKing === 0;
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
	marshallSheridan: [
		{ // loggers' flannel
			item: Items.chest[9],
			chance: [
				50,				// 0
				0,				// 1
			],
		},
		{ // marshall sheridan's logging axe
			item: Items.sword[15],
			chance: [
				20,				// 0
				0,				// 1
			],
			condition: function () {
				return Player.class === "k";
			},
		},
		{ // logging boots
			item: Items.boots[2],
			chance: [
				40,				// 0
				0,				// 1
			],
		},
		{ // logging sack
			item: Items.bag[2],
			chance: [
				30,				// 0
				0,				// 1
			],
		},
		{ // goblin resistance potion
			item: Items.consumable[11],
			chance: [
				30,				// 0
				0,				// 1
			],
		},
		{ // log
			item: Items.item[2],
			chance: [
				100,			// 0
				100,			// 1
				100,			// 2
				80,				// 3
				60,				// 4
				40,				// 5
				20,				// 6
				0,				// 7
			],
		},
		{ // gold
			item: Items.currency[2],
			chance: [
				100,			// 0
				100,			// 1
				60,				// 2
				20,				// 3
				0,				// 4
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
				35,				// 1
				0,				// 2
			],
		},
	],
	barebonesNkkja: [
		{ // barebones helm
			item: Items.helm[22],
			chance: [
				40,				// 0
				0,				// 1
			],
		},
		{ // barebones windbreaker
			item: Items.chest[10],
			chance: [
				30,				// 0
				0,				// 1
			],
		},
		{ // ellemental staff of the nilbog
			item: Items.staff[13],
			chance: [
				20,				// 0
				0,				// 1
			],
			condition: function () {
				return Player.class === "m";
			},
		},
	],
};

const ChestLootTables = {
	global: [
		// all chests have this (for events)
		{ // samhain mark
			item: Items.currency[4],
			condition: function () {
				return Event.time === "bloodMoon";
			},
			chance: [
				100,			// 0
				30,				// 1
				5,				// 2
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
				60,				// 1
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

const QuestRewardTables = {
	// rewards for all quests
	globalAll: [

	],
	// rewards for all daily quests
	globalDaily: [
		// "Heroes of Antorax" fragments (3% drop chance)
		{
			item: Items.item[19],
			condition: function () {
				return Event.event === "Heroes";
			},
			chance: 3, // TBD update to loot table system?
		},
		{
			item: Items.item[20],
			condition: function () {
				return Event.event === "Heroes";
			},
			chance: 3,
		},
		{
			item: Items.item[21],
			condition: function () {
				return Event.event === "Heroes";
			},
			chance: 3,
		},
		{
			item: Items.item[22],
			condition: function () {
				return Event.event === "Heroes";
			},
			chance: 3,
		},
		{
			item: Items.item[23],
			condition: function () {
				return Event.event === "Heroes";
			},
			chance: 3,
		},
		{
			item: Items.item[24],
			condition: function () {
				return Event.event === "Heroes";
			},
			chance: 3,
		},
	],
};
