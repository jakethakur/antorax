// How chance works:
// number rolled from 1 to 100
// chances are multiplied by looting
// largest number that roll is more than is chosen for item

const EnemyLootTables = {
	global: [
		// all enemies have this (usually for events)
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
		// slingshot
		{ // present
			item: Items.consumable[34],
			condition: function () {
				return Player.inventory.weapon.category === "slingshot";
			},
			chance: [
				3,				// 0
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
				20,				// 0
				0,				// 1
			],
		},
		{ // gold
			item: Items.currency[2],
			chance: [
				5,				// 0
				0,				// 1
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
				15,				// 0
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
	frog: [
		{ // unidentified item
			item: {
				name: "unidentified",
				tier: 1,
				area: "eaglecrest",
			},
			chance: [
				25,				// 0
				0,				// 1
			],
		},
		{ // gold
			item: Items.currency[2],
			chance: [
				4,				// 0
				0,				// 1
			],
		},
		{ // frogspawn
			item: Items.fish[33],
			chance: [
				40,				// 0
				0,				// 1
			],
		},
		{ // tadpole
			item: Items.fish[34],
			chance: [
				30,				// 0
				20,				// 1
				18,				// 2
				15,				// 3
				11,				// 4
				0,				// 5
			],
		},
		{ // water walking pot
			item: Items.consumable[27],
			chance: [
				7,				// 0
				0,				// 1
			],
		},
		{ // frogfruit
			item: Items.food[8],
			chance: [
				1,				// 0
				0,				// 1
			],
		},
		{ // soggy letter
			item: Items.item[54],
			chance: [
				0.4,			// 0
				0,				// 1
			],
		},
		{ // soggy tendrils
			item: Items.fish[23],
			chance: [
				20,				// 0
				5,				// 1
				3,				// 2
				0,				// 3
			],
		},
		{ // fallfish
			item: Items.fish[24],
			chance: [
				4,				// 0
				0,				// 1
			],
			onLootGenerate: function (item) {
				item.item.length = Round(BiasedRandom(item.item.length.min, item.item.length.max, item.item.length.avg, 1));
				return item;
			}
		},
		{ // grayling
			item: Items.fish[25],
			chance: [
				3,				// 0
				0,				// 1
			],
			onLootGenerate: function (item) {
				item.item.length = Round(BiasedRandom(item.item.length.min, item.item.length.max, item.item.length.avg, 1));
				return item;
			}
		},
		{ // rudd
			item: Items.fish[26],
			chance: [
				4,				// 0
				0,				// 1
			],
			onLootGenerate: function (item) {
				item.item.length = Round(BiasedRandom(item.item.length.min, item.item.length.max, item.item.length.avg, 1));
				return item;
			}
		},
		{ // weatherfish
			item: Items.fish[27],
			chance: [
				5,				// 0
				0,				// 1
			],
			onLootGenerate: function (item) {
				item.item.length = Round(BiasedRandom(item.item.length.min, item.item.length.max, item.item.length.avg, 1));
				return item;
			}
		},
		{ // asp
			item: Items.fish[28],
			chance: [
				0.2,			// 0
				0,				// 1
			],
			onLootGenerate: function (item) {
				item.item.length = Round(BiasedRandom(item.item.length.min, item.item.length.max, item.item.length.avg, 1));
				return item;
			}
		},
		{ // ide
			item: Items.fish[29],
			chance: [
				0.2,			// 0
				0,				// 1
			],
			onLootGenerate: function (item) {
				item.item.length = Round(BiasedRandom(item.item.length.min, item.item.length.max, item.item.length.avg, 1));
				return item;
			}
		},
	],
	chicken: [
		{ // unidentified item
			item: {
				name: "unidentified",
				tier: 1,
				area: "eaglecrest",
			},
			chance: [
				5,				// 0
				0,				// 1
			],
		},
		{ // gold
			item: Items.currency[2],
			chance: [
				3,				// 0
				0,				// 1
			],
		},
		{ // feather
			item: Items.item[37],
			chance: [
				90,				// 0
				30,				// 1
				1,				// 2
				0,				// 3
			],
		},
		{ // red feather
			item: Items.item[39],
			chance: [
				2.5,			// 0
				0.03,			// 1
				0,				// 2
			],
		},
		{ // egg
			item: Items.item[40],
			chance: [
				50,				// 0
				15,				// 1
				2,				// 2
				0,				// 3
			],
		},
		{ // sickly egg
			item: Items.item[41],
			chance: [
				3,				// 0
				2,				// 1
				0,				// 2
			],
		},
		{ // golden feather
			item: Items.item[51],
			chance: [
				0.5,			// 0
				0,				// 1
			],
		},
		{ // screwed-up letter
			item: Items.item[53],
			chance: [
				0.4,			// 0
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
				40,				// 0
				0,				// 1
			],
		},
		{ // marshall sheridan's logging axe
			item: Items.sword[15],
			chance: [
				30,				// 0
				0,				// 1
			],
			condition: function () {
				return Player.class === "k";
			},
		},
		{ // logging boots
			item: Items.boots[2],
			chance: [
				30,				// 0
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
				60,				// 1
				20,				// 2
				0,				// 3
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
		/*{ // elemental staff of the nilbog
			item: Items.staff[13],
			chance: [
				20,				// 0
				0,				// 1
			],
			condition: function () {
				return Player.class === "m";
			},
		},*/
	],
};

const ChestLootTables = {
	global: [
		// all chests have this (for events)
		/*{ // samhain mark
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
		},*/
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
				90,				// 0
				30,				// 1
				0,				// 2
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

const QuestRewardTables = { // currently not in use
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
