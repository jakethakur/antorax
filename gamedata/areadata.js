//
// Events
//

// get date
let today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1; // January is 0, so add 1
let year = today.getFullYear();

let antoraxAge = year - 2016; // used for some NPC texts (especially on Antorax Day)
if (day < 20 && month === 1) {
	// before Antorax day; subtract one from age
	antoraxAge--;
}

//
// Loot area defintion
//

const FishingLevels = {
	loggingCamp: 10,
};

//
// Area defintion
//

var Areas = {
	
	tutorial: {
		
		data: {
			name: "Fishers' Valley",
			level: "Level 1 - 5",
			territory: "Neutral",
			displayOnEnter: true,
		},
		
		indoors: false,

		mapData: {
			cols: 43,
			rows: 10,
			tsize: 60,
			tilesPerRow: 7,
			waterTiles: [24, 31, 38],
			iceTiles: [24, 31],
			pathTiles: [2, 3, 9, 10, 16, 17, 23, 30, 37, 44, 51, 58],
			layers: [
				[50, 1, 50, 2, 50, 1, 50, 50, 50, 50, 50, 50, 39, 24, 24, 4, 50, 1, 50, 50, 50, 50, 36, 50, 50, 5, 6, 7, 50, 50, 50, 50, 36, 50, 50, 50, 36, 50, 50, 50, 50, 50, 50, 50, 8, 50, 2, 50, 8, 50, 50, 50, 50, 26, 27, 39, 24, 38, 4, 50, 8, 50, 50, 50, 50, 50, 50, 50, 12, 13, 14, 50, 43, 50, 50, 50, 50, 36, 50, 50, 50, 50, 50, 50, 50, 50, 43, 15, 50, 2, 50, 15, 50, 26, 27, 50, 26, 27, 39, 24, 24, 4, 50, 15, 43, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 36, 50, 50, 50, 50, 50, 50, 50, 43, 50, 27, 50, 50, 37, 2, 2, 2, 2, 2, 2, 2, 2, 10, 3, 3, 17, 2, 2, 2, 9, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 60, 26, 27, 50, 50, 50, 50, 50, 50, 50, 50, 50, 39, 24, 24, 4, 26, 27, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 19, 20, 21, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 4, 50, 50, 50, 50, 50, 50, 50, 26, 27, 43, 50, 39, 24, 24, 81, 32, 60, 50, 50, 50, 50, 50, 43, 50, 50, 50, 50, 50, 50, 22, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 81, 60, 50, 50, 50, 50, 50, 26, 27, 50, 53, 32, 25, 24, 24, 24, 24, 81, 60, 50, 50, 50, 50, 50, 50, 50, 50, 5, 6, 7, 29, 43, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 24, 81, 32, 32, 32, 32, 32, 32, 32, 32, 25, 24, 24, 24, 24, 24, 24, 24, 81, 32, 60, 50, 50, 50, 50, 50, 50, 12, 13, 14, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 36, 50, 50, 24, 24, 24, 24, 24, 24, 24, 38, 31, 24, 24, 24, 24, 24, 52, 45, 38, 24, 24, 24, 81, 32, 32, 60, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 31, 38, 24, 24, 24, 24, 24, 24, 24, 24, 24, 38, 52, 45, 52, 45, 45, 24, 31, 24, 24, 24, 24, 81, 32, 32, 32, 32, 32, 60, 50, 50, 50, 50, 50, 50, 50, 36, 50, 50, 50, 50, 36],
				[],
			],
			interactWithTile: function(tileNum, x, y) { // pick up snowball from rock
				if (tileNum === 6 && Game.event === "Christmas"){ // rock top centre
					// give snowball to player
					if (Dom.inventory.give(Items.bow[8], 1)) { // check if player has enough inventory space
						if(Player.quests.questProgress.snowCollected === undefined){
							Player.quests.questProgress.snowCollected = 1;
						}else{
							Player.quests.questProgress.snowCollected++;
						}
						Dom.checkProgress();
						// replace tiles with no snow rocks
						map.setTile(0, map.getCol(x), map.getRow(y), 34);
						map.setTile(0, map.getCol(x + 60), map.getRow(y), 35);
						map.setTile(0, map.getCol(x), map.getRow(y + 60), 41);
						// add snow back after 5 minutes
						setTimeout(function(){
							SetTile("tutorial", 0, map.getCol(x), map.getRow(y), 6);
							SetTile("tutorial", 0, map.getCol(x + 60), map.getRow(y), 7);
							SetTile("tutorial", 0, map.getCol(x), map.getRow(y + 60), 13);
						},60000);
					}
				}
				else if (tileNum === 13 && Game.event === "Christmas") { // rock bottom centre
					// give snowball to player
					if (Dom.inventory.give(Items.bow[8], 1)) { // check if player has enough inventory space
						if(Player.quests.questProgress.snowCollected === undefined){
							Player.quests.questProgress.snowCollected = 1;
						}else{
							Player.quests.questProgress.snowCollected++;
						}
						Dom.checkProgress();
						// replace tiles with no snow rocks
						map.setTile(0, map.getCol(x), map.getRow(y - 60), 34);
						map.setTile(0, map.getCol(x + 60), map.getRow(y - 60), 35);
						map.setTile(0, map.getCol(x), map.getRow(y), 41);
						// add snow back after 5 minutes
						setTimeout(function(){
							SetTile("tutorial", 0, map.getCol(x), map.getRow(y - 60), 6);
							SetTile("tutorial", 0, map.getCol(x + 60), map.getRow(y - 60), 7);
							SetTile("tutorial", 0, map.getCol(x), map.getRow(y), 13);
						},60000);
					}
				}
			},
		},
		
		isIcy: function() {
			return Game.event === "Christmas";
		},
		
		images: {
			tiles: {normal: "./assets/tilemap/tutorial.png", christmas: "./assets/tilemap/tutorial-christmas.png"},
			driver: {normal: "./assets/npcs/driver.png"},
			weaponsmith: {normal: "./assets/npcs/weaponsmith.png"},
			cart: {normal: "./assets/objects/cartEaglecrest.png"},
			fisherman: {normal: "./assets/npcs/fisherman.png"},
		},
		
		song_day: "./assets/music/Pippin-the-Hunchback.mp3",
		song_night: "./assets/music/Pippin-the-Hunchback-night.mp3",
		
		checkpoint: false,
		player: {
			x: 2297,
			y: 387,
		},
		
		lootArea: "loggingCamp",
		lootTier: 1,
		
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
					// check that the "to the logging camp" quest has been started, weapon has been bought, and the instructions haven't been shown before
					let questStarted = Player.quests.activeQuestArray.includes("To the Logging Camp");
					let weaponBought = Dom.inventory.check(2, "sword", 1) || Dom.inventory.check(2, "staff", 1) || Dom.inventory.check(2, "bow", 1);
					
					if (questStarted && weaponBought && Player.unlockedInstructions.length < 3) {
						Dom.adventure.addInstruction(3); // open instructions chapter 3
					}
					// otherwise if the player hasn't started the quest, teleport them back to make them!
					else if (!questStarted && !Player.quests.completedQuestArray.includes("To the Logging Camp")) {
						Game.hero.teleport(2297, 387);
						Dom.alert.page("You need to start your first quest. Speak to the Cart Driver who is right next to you.")
					}
					// otherwise if the player hasn't bought the weapon, teleport them back to make them!
					else if (!weaponBought && !Player.quests.completedQuestArray.includes("To the Logging Camp")) {
						Game.hero.teleport(1457, 385);
						Dom.alert.page("You need to buy a weapon to progress in your quest. Buy one from the nearby Weaponsmith.")
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
						shopGreeting: "Would you like to buy anything?",
					},
				],
				chat: {
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
						quest: Quests.fishing[3],
						role: "questStartFinish",
					},
					{
						quest: Quests.fishing[4],
						role: "questStartFinish",
					},
					{
						quest: Quests.fishing[5],
						role: "questStartFinish",
					},
					{
						quest: Quests.eaglecrestLoggingCamp[19],
						role: "questStart",
					},
					{
						quest: [Quests.fishing[0], Quests.fishing[1], Quests.fishing[2]], 
						role: "questStartFinish",
						newQuestFrequency: "daily",
						questVariable: "fishingDaily",
					},
					{
						sold: [
							{item: Items.rod[3], cost: 3}, // basic fishing rod
							{item: Items.consumable[8], cost: 4}, // can of worms
							{item: Items.consumable[12], cost: 4, condition: function () { // magnetised lure
						        return Player.stats.fishingSkill >= 10;
						    }},
						],
						role: "merchant",
						chooseText: "I'd like to browse your fishing items.",
						roleRequirement: function () {
							return Player.quests.completedQuestArray.includes("Learning to Fish II") || Player.quests.activeQuestArray.includes("Learning to Fish II");
						},
						shopGreeting: "You can always buy a lure to fish up more. Heheh, that rhymed!",
					},
					{
						sold: [
							{item: Items.currency[2], cost: 1, costCurrency: 3}, // 1 gold
							{item: Items.bag[4], cost: 10, costCurrency: 3}, // fishing pouch
						],
						role: "merchant",
						chooseText: "I'd like to see what I can buy with fishing seals.",
						roleRequirement: function () {
							return Player.quests.completedQuestArray.includes("Learning to Fish III");
						},
						shopGreeting: "If ya do enough fishing, you can get some rare items. Heheh.",
					},
				],
				chat: {
					notUnlockedRoles: "It's a great day to fish, heheh.",
					chooseChat: "Caught a big one?",
					shopLeave: "Heheh, see you soon!",
					inventoryFull: "You've lots of fish in your bags, but you've not any space for your rewards!",
					tooPoor: "You can't afford that, but don't let that stop ya from fishing!",
					questProgress: "It's a great day to fish, heheh.",
					// "&#9835; I'm fiiiiiiiishing in the rain! &#9835;"
					christmasGreeting: "Heheh, what better to do on Christmas Day than to fish!",
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
			territory: "Allied",
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
			iceTiles: [30, 32, 39, 41, 48],
			pathTiles: [4, 5, 13, 14, 22, 23, 31, 40, 49, 58, 67, 76],
			layers: [
				[93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 10, 10, 10, 10, 10, 10, 10, 93, 93, 93, 51, 41, 59, 6, 93, 93, 93, 93, 93, 93, 93, 84, 93, 93, 93, 93, 93, 93, 25, 26, 93, 10, 46, 10, 28, 19, 46, 10, 93, 93, 93, 51, 68, 32, 6, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 25, 26, 93, 83, 10, 10, 10, 37, 10, 10, 10, 74, 93, 93, 51, 32, 30, 6, 84, 75, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 65, 2, 2, 2, 11, 2, 2, 2, 2, 2, 29, 3, 51, 32, 39, 6, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 56, 2, 2, 2, 2, 2, 2, 2, 11, 2, 29, 12, 51, 32, 48, 6, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 84, 65, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 21, 51, 50, 32, 6, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 25, 26, 65, 2, 2, 11, 2, 2, 2, 2, 2, 2, 29, 93, 51, 32, 32, 6, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 65, 2, 2, 2, 2, 2, 2, 2, 2, 2, 29, 93, 14, 5, 5, 23, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 65, 2, 2, 2, 2, 2, 2, 2, 2, 2, 29, 93, 51, 32, 32, 6, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 56, 2, 2, 2, 2, 2, 2, 2, 2, 2, 29, 93, 51, 32, 30, 6, 93, 75, 93, 93, 93, 69, 66, 93, 93, 93, 93, 93, 93, 93, 93, 56, 2, 2, 2, 2, 2, 2, 2, 11, 2, 20, 93, 51, 32, 39, 6, 75, 93, 93, 93, 69, 33, 93, 93, 57, 93, 93, 93, 57, 93, 93, 65, 2, 2, 2, 2, 2, 2, 2, 2, 2, 29, 93, 51, 41, 48, 6, 93, 93, 93, 93, 51, 32, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 47, 47, 47, 38, 38, 38, 47, 47, 38, 93, 93, 51, 50, 41, 6, 93, 93, 84, 93, 51, 41, 93, 93, 93, 93, 66, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 51, 32, 32, 6, 93, 93, 93, 93, 96, 24, 57, 93, 57, 93, 93, 93, 93, 93, 93, 93, 93, 3, 93, 93, 93, 93, 93, 3, 93, 93, 93, 51, 32, 32, 6, 93, 93, 93, 25, 26, 93, 93, 66, 93, 93, 93, 93, 93, 84, 93, 93, 93, 12, 93, 93, 93, 93, 93, 12, 93, 93, 93, 51, 32, 32, 6, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 57, 93, 93, 93, 93, 93, 21, 93, 93, 93, 93, 93, 21, 25, 26, 93, 51, 32, 59, 6, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 22, 93, 93, 93, 93, 93, 93, 51, 41, 32, 6, 93, 93, 75, 93, 93, 93, 93, 93, 57, 93, 93, 93, 93, 93, 25, 26, 93, 93, 93, 93, 4, 93, 93, 93, 7, 8, 9, 51, 32, 32, 6, 93, 84, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 25, 26, 93, 25, 26, 93, 93, 4, 93, 93, 84, 16, 17, 18, 51, 32, 50, 6, 93, 93, 93, 75, 93, 93],
				[],
			],
			interactWithTile: function(tileNum, x, y) { // pick up snowball from rock
				if (tileNum === 8 && Game.event === "Christmas"){ // rock top centre
					// give snowball to player
					if (Dom.inventory.give(Items.bow[8], 1)) { // check if player has enough inventory space
						if(Player.quests.questProgress.snowCollected === undefined){
							Player.quests.questProgress.snowCollected = 1;
						}else{
							Player.quests.questProgress.snowCollected++;
						}
						Dom.checkProgress();
						// replace tiles with no snow rocks
						map.setTile(0, map.getCol(x), map.getRow(y), 35);
						map.setTile(0, map.getCol(x + 60), map.getRow(y), 36);
						map.setTile(0, map.getCol(x), map.getRow(y + 60), 44);
						// add snow back after 5 minutes
						setTimeout(function(){
							SetTile("eaglecrestLoggingCamp", 0, map.getCol(x), map.getRow(y), 8);
							SetTile("eaglecrestLoggingCamp", 0, map.getCol(x + 60), map.getRow(y), 9);
							SetTile("eaglecrestLoggingCamp", 0, map.getCol(x), map.getRow(y + 60), 17);
						},60000);
					}
				}
				else if (tileNum === 17 && Game.event === "Christmas") { // rock bottom centre
					// give snowball to player
					if (Dom.inventory.give(Items.bow[8], 1)) { // check if player has enough inventory space
						if(Player.quests.questProgress.snowCollected === undefined){
							Player.quests.questProgress.snowCollected = 1;
						}else{
							Player.quests.questProgress.snowCollected++;
						}
						Dom.checkProgress();
						// replace tiles with no snow rocks
						map.setTile(0, map.getCol(x), map.getRow(y - 60), 35);
						map.setTile(0, map.getCol(x + 60), map.getRow(y - 60), 36);
						map.setTile(0, map.getCol(x), map.getRow(y), 44);
						// add snow back after 5 minutes
						setTimeout(function(){
							SetTile("eaglecrestLoggingCamp", 0, map.getCol(x), map.getRow(y - 60), 8);
							SetTile("eaglecrestLoggingCamp", 0, map.getCol(x + 60), map.getRow(y - 60), 9);
							SetTile("eaglecrestLoggingCamp", 0, map.getCol(x), map.getRow(y), 17);
						},60000);
					}
				}
			},
		},
		
		isIcy: function() {
			return Game.event === "Christmas";
		},
		
		images: {
			tiles: {normal: "./assets/tilemap/loggingCamp.png", christmas: "./assets/tilemap/loggingCamp-christmas.png"},
			teper: {normal: "./assets/npcs/teper.png"},
			teperAngry: {christmas: "./assets/npcs/teper-angry.png"},
			identifier: {normal: "./assets/npcs/identifier.png"},
			dummy: {normal: "./assets/enemies/dummy.png", christmas: "./assets/enemies/dummy-christmas.png"},
			saral: {normal: "./assets/npcs/saral.png"},
			mailman: {normal: "./assets/npcs/mailman.png"},
			soulHealer: {normal: "./assets/npcs/soulHealer.png"},
			galuthel: {normal: "./assets/npcs/galuthel.png"},
			itemBuyer: {normal: "./assets/npcs/itemBuyer.png"},
			darkbrew: {normal: "./assets/npcs/darkbrew.png"},
			mailbox: {normal: "./assets/objects/mailbox.png"},
			mailboxUnread: {normal: "./assets/objects/mailboxUnread.png"},
			christmasTree: {christmas: "./assets/objects/christmasTree.png"},
			christmasTreeUnread: {christmas: "./assets/objects/christmasTreeUnread.png"},
			lightsRB: {christmas: "./assets/objects/lightsRB.png"},
			lightsGY: {christmas: "./assets/objects/lightsGY.png"},
			christmasSapling: {christmas: "./assets/objects/christmasSapling.png"},
		},
		
		song_day: "./assets/music/Pippin-the-Hunchback.mp3",
		song_night: "./assets/music/Pippin-the-Hunchback-night.mp3",
		
		checkpoint: true,
		player: {
			x: 717,
			y: 208,
		},
		
		lootArea: "loggingCamp",
		lootTier: 1,
		
		onAreaTeleport: function () {
			// start instructions chapter 4 if the player hasn't already
			if (Player.unlockedInstructions.length < 4) {
				Dom.adventure.addInstruction(4);
				// show chat tab
				Dom.adventure.unlockTab("chat");
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
				x: 900,
				y: 87,
				width: 60,
				height: 2,
				teleportTo: "tavern",
				destinationX: 315,
				destinationY: 600,
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
						quest: Quests.eaglecrestLoggingCamp[17],
						role: "questStartFinish"
					},
					{
						quest: Quests.eaglecrestLoggingCamp[20],
						role: "questStartFinish"
					},
					{
						sold: [
							{item: Items.consumable[18], cost: 0}, // christmas saplings
						],
						role: "merchant",
						chooseText: "I need some more Christmas Saplings.",
						roleRequirement: function () {
							return Player.quests.activeQuestArray.includes("Deck the Halls!");
						},
						shopGreeting: "Take some Christmas Saplings to decorate the Logging Camp with.",
					},
					{
						role: "text",
						chooseText: "I found a pair of boots that I think might be yours.",
						chat: "Are you sure? Give them here.<br>You're right, they were mine. They were stolen by a goblin during the recent goblin siege. Are you sure I can have them back? I will make sure that you are aptly rewarded.",
						buttons: ["Return them", "Keep them"],
						showCloseButton: false,
						forceChoose: true, // forces choose dom
						functions: [function () {
							// remove the boots
							Dom.inventory.removeById(6, "boots", 1);
							// give rewards
							Game.getXP(50);
							Dom.reputation.give("eaglecrestLoggingCamp", 300);
							Dom.inventory.give(Items.currency[2], 5);
							Dom.chat.insert("Marshall Teper has given you <strong>5 Gold</strong> for the boots.", 0);
							// close page
							Dom.changeBook(Player.tab, true);
							// chat message
							Game.npcs[0].say("Thank you. I hope you find these rewards useful to your progression. Now, back to work.", false, 0, true); // Teper is Game.npcs[0]
						},
						function () {
							// close page
							Dom.changeBook(Player.tab, true);
							// chat message
							Game.npcs[0].say("What, are you even allowed to keep them? I'd like my boots back!", false, 0, false); // Teper is Game.npcs[0]
						}],
						roleRequirement: function () {
							return Dom.inventory.check(6, "boots", 1, false); // check that the player has Marshall Teper's lost boots
						},
					},
				],
				chat: {
					notUnlockedRoles: "I'm busy. Come back later.",
					chooseChat: "What do you want?",
					questProgress: "Get on with your work!",
					questComplete: "There's lots of work still to be done.",
					inventoryFull: "You have no space to hold this. Empty your bags a bit and come back.",
					shopLeave: "I expect a fine job done.",
					christmasGreeting: "Yes, I <strong>do</strong> celebrate Christmas.",
					antoraxDayGreeting: `This Logging Camp has been operating at full capacity for ${antoraxAge} years today. Don't think today will be any different.`,
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
					{
						quest: Quests.eaglecrestLoggingCamp[16], 
						role: "questStartFinish"
					},
					{
						quest: Quests.eaglecrestLoggingCamp[18], 
						role: "questStartFinish"
					},
					{
						role: "merchant",
						chooseText: "What have you got to sell this Christmas?",
						sold: [
							{item: Items.bow[10], cost: 3, costCurrency: 5,}, // Crystal Bow
							{item: Items.staff[10], cost: 3, costCurrency: 5,}, // Ice Staff
							{item: Items.sword[9], cost: 3, costCurrency: 5,}, // Icicle
						],
						roleRequirement: function () {
							return Game.event === "Christmas" && Player.quests.completedQuestArray.includes("Combat Training");
						},
						shopGreeting: "I have some special weapons you can purchase this Christmas.",
					},
				],
				chat: {
					questProgress: "The dummy isn't going anywhere.",
					questComplete: "You can always check your adventure log if you need to brush up on your combat skills.",
					inventoryFull: "Empty your bags some. You have no space for your rewards.",
					chooseChat: `I trust your combat is going fine, ${Player.name}.`,
					shopLeave: "I wish you the best in your battles.",
					tooPoor: "You can't afford that. You know what to do - Kill!",
					christmasGreeting: `Merry Christmas, ${Player.name}! What better a day to be practising your combat.`,
					antoraxDayGreeting: `Have a jolly Antorax day, ${Player.name}. I've been killing enemies for ${antoraxAge} years - this calls for some celebration!`,
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
						quest: Quests.eaglecrestLoggingCamp[13], 
						role: "questStartFinish"
					},
					{
						role: "identifier",
					},
					{
						role: "merchant",
						chooseText: "What have you got to sell this Christmas?",
						sold: [
							{item: Items.bow[9], cost: 25, costCurrency: 5,}, // Snowball Cannon
							{item: Items.staff[9], cost: 25, costCurrency: 5,}, // Vulpric's Ice Staff
							{item: Items.sword[8], cost: 25, costCurrency: 5,}, // Permafrost
						],
						roleRequirement: function () {
							return Game.event === "Christmas" && Player.quests.completedQuestArray.includes("Retrieval of Logs");
						},
						shopGreeting: "I have some rare weapons that you can buy this Christmas with your Christmas Tokens.",
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
					shopLeave: "See you soon with some unidentified items!",
					christmasGreeting: "Merry Christmas! I hope your Christmas archaeology progress is coming across nicely.",
					antoraxDayGreeting: `Jocund Antorax Day! Have you got your party hat from the mail? Those will be worth a lot in the coming years!`,
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
						role: "function",
						chooseText: "I found a present addressed to you!",
						forceChoose: true, // forces choose dom
						onClick: function () {
							// remove the item
							Dom.inventory.removeById(21, "fish", 1);
							// start cutscene
							Dom.changeBook("chatPage", true, false, 6000);
							// quest progress
							Player.quests.questProgress.christmasPresentsDelivered = 1; // always the first NPC to be delivered to
							// chat
							Game.sayChat("Soul Healer Nalaa", "Thank you for taking the time to bring this to me.", false, 500, false);
							Game.sayChat("Soul Healer Nalaa", "/me gently unfolds the wrapping paper to reveal a brand new Scepter of Souls.", false, 2000, false);
							Game.sayChat("Soul Healer Nalaa", "It's a new Scepter of Souls! Thank you, adventurer. May the Demigods' blessings be bestowed upon you.", false, 4000, false);
						},
						roleRequirement: function () {
							let presentPositions = Dom.inventory.find(21, "fish", true); // array of present inventory positions
							for (let i = 0; i < presentPositions.length; i++) {
								if (Player.inventory.items[presentPositions[i]].targetNPC === "Soul Healer Nalaa") {
									// found one for item buyer noledar
									return true;
								}
							}
							return false;
						},
					},
					{
						quest: Quests.eaglecrestLoggingCamp[10], 
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
					chooseChat: "Blessings to you.",
					inventoryFull: "I don't think you have space for that.",
					christmasGreeting: "You have my blessings on this sacred day.",
					antoraxDayGreeting: `I think many of us can say that Antorax has made us much stronger over these ${antoraxAge} years.`,
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
						quest: Quests.eaglecrestLoggingCamp[8], 
						role: "questStartFinish"
					},
					{
						quest: Quests.eaglecrestLoggingCamp[9], 
						role: "questStartFinish"
					},
					{
						sold: [
							{item: Items.consumable[7], cost: 0}, // goblin trap
						],
						role: "merchant",
						chooseText: "I need some more goblin traps.",
						roleRequirement: function () {
							return Player.quests.activeQuestArray.includes("Strengthening Defences") || Player.quests.activeQuestArray.includes("Reinforcing Defences");
						},
						shopGreeting: "If you're out of traps, I'll give you some more.",
					},
					{
						sold: [
							{item: Items.consumable[19], cost: 0}, // Antorax Day Firework
							{item: Items.consumable[20], cost: 3}, // Large Antorax Day Firework
						],
						role: "merchant",
						chooseText: "I'd like to buy some fireworks.",
						roleRequirement: function () {
							return Game.event === "Antorax";
						},
						shopGreeting: "More fireworks! Let's set the sky on fire this Antorax Day.",
					},
				],
				chat: {
					notUnlockedRoles: "I think we have enough traps out at the moment. Come back in a bit.",
					chooseChat: "How's it going?",
					shopLeave: "Let's crush those goblins.",
					tooPoor: "You can't afford that one.",
					inventoryFull: "Empty your inventory a bit and come back.",
					questComplete: "I'll have more traps for you to place in a bit. Come back tomorrow.",
					christmasGreeting: "Have a good Christmas. It's my day off for trap making today.",
					antoraxDayGreeting: `Trap making for ${antoraxAge} years? You're making me feel old.`,
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
						role: "function",
						chooseText: "I found a present addressed to you!",
						forceChoose: true, // forces choose dom
						onClick: function () {
							// remove the item
							Dom.inventory.removeById(21, "fish");
							// start cutscene
							Dom.changeBook("chatPage", true, false, 6000);
							// quest progress
							Player.quests.questProgress.christmasPresentsDelivered = 2; // always the second NPC to be delivered to
							// chat
							Game.sayChat("Item Buyer Noledar", "Wow, really? That's so nice, I don't think anyone has delivered me a present before!", false, 500, false);
							Game.sayChat("Item Buyer Noledar", "/me peels away at the wrapping paper to reveal a large heap of gold.", false, 2000, false);
							Game.sayChat("Item Buyer Noledar", "Wow! Gilas was right - good things <strong>can</strong> happen to ordinary people! Thank you very much, and a merry Christmas to you!", false, 4000, false);
						},
						roleRequirement: function () {
							let presentPositions = Dom.inventory.find(21, "fish", true); // array of present inventory positions
							for (let i = 0; i < presentPositions.length; i++) {
								if (Player.inventory.items[presentPositions[i]].targetNPC === "Item Buyer Noledar") {
									// found one for item buyer noledar
									return true;
								}
							}
							return false;
						},
					},
					{
						quest: Quests.eaglecrestLoggingCamp[12], 
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
							{item: Items.helm[7], cost: 10, costCurrency: 5, eventRequirement: "Christmas"}, // Santa Hat
							{item: Items.boots[9], cost: 10, costCurrency: 5, eventRequirement: "Christmas"}, // Ice Skates
							/*{item: Items.helm[11], cost: 7, condition: function () { // Umbrella Hat
								return Weather.weatherType === "rain";
							}},*/
							{item: Items.item[11], cost: 2}, // vial of goblin blood
							{item: Items.bag[5], cost: 15}, // brown backsack
							{item: Items.helm[2], cost: 2}, // worn leather helm
							{item: Items.chest[2], cost: 3}, // worn leather tunic
							{item: Items.greaves[2], cost: 3}, // worn leather trousers
							{item: Items.boots[3], cost: 2}, // worn leather boots
						],
						role: "merchant",
						roleRequirement: function () {
							return Player.quests.completedQuestArray.includes("Retrieval of Logs");
						},
						shopGreeting: "I can sell you some second-hand equipment for a reduced price.",
					},
				],
				chat: {
					chooseChat: "Hello, how are you?",
					notUnlockedRoles: "I'm not sure you have anything I can buy from you. Come back a bit later.",
					buyerGreeting: "I'll happily buy any items that you're willing to part with.",
					shopLeave: "Have a good day now.",
					inventoryFull: "I'm not sure you have any space to carry that.",
					tooPoor: "I don't think you have enough gold to buy that. Sorry.",
					christmasGreeting: "Happy Christmas! I really hope you have a great day.",
					antoraxDayGreeting: `It's Antorax Day! It's so great to be a part of this, even if I'm just an item buyer.`,
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
						quest: Quests.eaglecrestLoggingCamp[14], 
						role: "questStartFinish"
					},
					{
						quest: Quests.eaglecrestLoggingCamp[15], 
						role: "questStartFinish"
					},
					{
						sold: [
							{item: Items.consumable[4], cost: 2}, // potion of health I
							{item: Items.consumable[3], cost: 2}, // potion of swiftness I
							{item: Items.consumable[2], cost: 4}, // potion of strength I
							{item: Items.consumable[11], cost: 4, condition: function () { // potion of goblin resistance
								return Player.quests.completedQuestArray.includes("Potion Making II");
							}},
							{item: Items.consumable[17], cost: 2, costCurrency: 5, eventRequirement: "Christmas"}, // Christmas Potion
						],
						role: "merchant",
						roleRequirement: function () {
							return Player.level > 2;
						},
						shopGreeting: "Want to buy a potion? Of course you do.",
					},
				],
				chat: {
					chooseChat: "Making potions isn't child's play.",
					notUnlockedRoles: "I've been told you're not a high enough level to handle my potions.",
					shopLeave: "Side effects? No. Trust me.",
					inventoryFull: "You don't want to be carrying a potion with an inventory as full as yours. Come back with some free space.",
					tooPoor: "You're not going to be able to buy that potion without enough gold.",
					christmasGreeting: "My potions make a great Christmas drink.",
					antoraxDayGreeting: "What ingredients would be in an Antorax Day potion? Dynamite, sulphur, a little bit of fire - want to try some?",
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
				subSpecies: "dummy",
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
				readImage: "mailbox",
				unreadImage: "mailboxUnread",
				name: "Mailbox",
			},
			{
				x: 480,
				y: 600,
				readImage: "christmasTree",
				unreadImage: "christmasTreeUnread",
				name: "Christmas Tree",
				canBeShown: function () {
					return Game.event === "Christmas";
				},
			},
		],
		
		things: [
			{
				x: 870,
				y: 87,
				image: "lightsRB",
				name: "Christmas Lights",
				bright: true,
				canBeShown: function () {
					return Game.event === "Christmas";
				},
				// change colour!
				onLoad: function () {
					if (Game.areaName === "eaglecrestLoggingCamp") {
						// increase number of ticks
						if (this.timeoutTicks === undefined || this.timeoutTicks >= 20) {
							this.timeoutTicks = 1;
						}
						else {
							this.timeoutTicks++;
						}
						// alternate image
						// the first time this is called, imageName is undefined so the iamge is not changed
						if (this.imageName === "lightsRB") {
							this.image = Loader.getImage("lightsGY");
							this.imageName = "lightsGY";
						}
						else if (this.imageName === "lightsGY") {
							this.image = Loader.getImage("lightsRB");
							this.imageName = "lightsRB";
						}
						// set another timeout
						let timeoutTime = 1100;
						if (this.timeoutTicks > 10) {
							timeoutTime = 250;
						}
						setTimeout(this.onLoad.bind(this), timeoutTime);
					}
				},
			},
		],
	},
	
	
	tavern: {
		
		data: {
			name: "Treefellers' Tavern",
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
			tiles: {normal: "./assets/tilemap/tavern.png"},
			innkeeper: {normal: "./assets/npcs/innkeeper.png"},
		},
		
		areaTeleports: [
			{
				x: 361,
				y: 800,
				width: 60,
				height: 60,
				teleportTo: "eaglecrestLoggingCamp",
				destinationX: 868,
				destinationY: 200,
			},
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
						quest: Quests.tavern[0], 
						role: "questStartFinish",
					},
					{
						sold: [
						    {item: Items.consumable[5], cost: 2,}, // Wood-Brewed Beer
							{item: Items.consumable[16], cost: 2, costCurrency: 5, eventRequirement: "Christmas"}, // Mulled Wine
						    {item: Items.food[0], cost: 2,}, // Bread
						    {item: Items.food[1], cost: 2, costCurrency: 5, eventRequirement: "Christmas"}, // Mince Pie
						    {item: Items.food[2], cost: 2, costCurrency: 5, eventRequirement: "Christmas"}, // Christmas Pudding
						    {item: Items.food[3], cost: 5, eventRequirement: "Antorax"}, // Birthday Cake (changed every year)
							{item: Items.teleport[0], cost: 30,}, // Logging Teleport Coin
						],
						role: "merchant",
						roleRequirement: function () {
							return Player.quests.completedQuestArray.includes("A Drink on Us!");
						},
						shopGreeting: "Only the finest food 'n' drink here.",
					},
				],
				chat: {
					questProgress: "Girls! Make some room by the hearth, won't ya!",
					chooseChat: "Oh ho ho! It's good to see ya again!",
					notUnlockedRoles: "I'v never seen ya 'round 'ere before!",
					shopLeave: "See ya soon!",
					inventoryFull: "How're ya gonna hold that?!",
					tooPoor: "Ya can't afford that.",
					christmasGreeting: "Ha, it's Christmas! Have a good 'un!",
					antoraxDayGreeting: "Happy Antorax Day! I've lots o' birthday cakes if you want a break from all the fireworks out there.",
				},
			},
		],
		
	},
	
	nilbog: {
		
		data: {
			name: "The Nilbog",
			level: "Level 2 - 5",
			territory: "Hostile",
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
			iceTiles: [36, 46, 32, 42, 52],
			mudTiles: [1, 11, 21, 31, 41, 51, 61, 71, 81, 91, 101, 111, 121, 131],
			pathTiles: [4, 6, 14, 16, 24, 26, 34, 44, 54, 64, 74, 84],
			dayTiles: [3, 13, 23], // torches
			nightTiles: [33, 43, 53], // torches
			layers: [
				[28, 29, 30, 102, 102, 57, 66, 46, 7, 102, 131, 21, 21, 31, 82, 102, 102, 33, 102, 102, 102, 102, 102, 102, 102, 102, 15, 35, 45, 5, 38, 39, 40, 102, 102, 57, 76, 76, 7, 131, 91, 1, 1, 101, 31, 102, 102, 13, 72, 102, 102, 3, 102, 102, 82, 92, 35, 45, 35, 45, 102, 102, 48, 49, 92, 57, 46, 36, 7, 81, 1, 1, 11, 111, 41, 102, 62, 23, 102, 102, 62, 13, 102, 102, 102, 102, 15, 35, 45, 5, 102, 102, 102, 102, 102, 57, 66, 36, 7, 81, 11, 1, 1, 61, 102, 102, 102, 102, 102, 102, 102, 23, 48, 49, 102, 102, 35, 45, 35, 45, 102, 102, 102, 102, 102, 57, 56, 76, 7, 51, 121, 1, 11, 61, 102, 3, 102, 102, 8, 9, 102, 102, 102, 102, 102, 102, 15, 35, 45, 5, 102, 102, 102, 102, 102, 57, 36, 46, 7, 62, 51, 71, 71, 41, 102, 13, 102, 102, 18, 19, 102, 102, 102, 102, 102, 102, 35, 45, 35, 45, 102, 102, 102, 102, 102, 57, 46, 66, 7, 102, 102, 102, 102, 102, 92, 23, 102, 102, 102, 102, 102, 102, 3, 102, 102, 102, 15, 5, 15, 5, 102, 102, 102, 102, 102, 57, 76, 36, 7, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 13, 102, 102, 102, 5, 25, 5, 15, 102, 102, 102, 102, 102, 57, 36, 32, 7, 92, 82, 102, 102, 102, 102, 102, 102, 48, 49, 102, 102, 62, 23, 28, 29, 30, 15, 25, 15, 5, 102, 102, 102, 102, 2, 57, 36, 42, 7, 102, 102, 102, 102, 102, 102, 102, 48, 49, 102, 102, 102, 102, 102, 38, 39, 40, 102, 4, 48, 49, 102, 102, 102, 102, 12, 57, 36, 52, 7, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 84, 4, 4, 4, 64, 102, 62, 102, 102, 102, 102, 22, 57, 56, 36, 7, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 34, 4, 64, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 57, 36, 36, 7, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 62, 102, 102, 131, 31, 102, 102, 102, 102, 102, 102, 16, 6, 6, 26, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 131, 91, 61, 102, 102, 102, 102, 102, 102, 57, 36, 36, 7, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 131, 21, 91, 11, 61, 102, 102, 102, 102, 102, 102, 57, 36, 32, 7, 102, 82, 102, 102, 102, 77, 47, 47, 87, 48, 49, 102, 102, 102, 131, 91, 1, 1, 1, 61, 102, 102, 102, 102, 102, 102, 57, 36, 42, 7, 82, 102, 102, 102, 77, 37, 36, 46, 117, 47, 87, 102, 102, 131, 91, 1, 11, 1, 111, 41, 102, 102, 102, 102, 102, 102, 57, 46, 52, 7, 102, 102, 102, 102, 57, 36, 56, 36, 36, 66, 7, 102, 102, 81, 11, 1, 1, 1, 61, 82, 102, 102, 102, 102, 102, 102, 57, 56, 46, 7, 102, 102, 92, 102, 57, 46, 76, 36, 36, 36, 7, 102, 102, 51, 121, 1, 1, 111, 41, 102, 102, 102, 102, 102, 102, 102, 57, 36, 36, 7, 102, 102, 102, 102, 107, 27, 36, 56, 46, 17, 97, 102, 48, 49, 51, 71, 71, 41, 102, 102, 131, 102, 2, 102, 102, 102, 57, 36, 36, 7, 102, 102, 102, 48, 49, 107, 67, 67, 67, 97, 102, 102, 102, 102, 102, 102, 102, 102, 102, 131, 91, 102, 12, 102, 102, 102, 57, 36, 36, 7, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 62, 102, 81, 11, 102, 22, 48, 49, 102, 57, 36, 66, 7, 102, 102, 102, 102, 102, 102, 48, 49, 131, 21, 21, 21, 21, 21, 31, 48, 49, 102, 131, 91, 1, 102, 102, 102, 102, 102, 57, 46, 36, 7, 102, 102, 82, 102, 102, 102, 131, 21, 91, 1, 1, 11, 1, 1, 101, 21, 21, 21, 91, 1, 1, 102, 102, 28, 29, 30, 57, 36, 36, 7, 102, 92, 102, 102, 102, 131, 91, 11, 11, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 11, 1, 102, 92, 38, 39, 40, 57, 36, 56, 7, 102, 102, 102, 82, 131, 91, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1],
				[],
			],
			interactWithTile: function(tileNum, x, y) { // pick up logs
				if (tileNum === 48) { // left side of log stack
					// give log item to player
					if (Dom.inventory.give(Items.item[2], 1) !== false) { // check if player has enough inventory space
						// replace tiles with grass
						map.setTile(0, map.getCol(x), map.getRow(y), 102);
						map.setTile(0, map.getCol(x + 60), map.getRow(y), 102);
					}
				}
				else if (tileNum === 49) { // right side of log stack
					// give log item to player
					if (Dom.inventory.give(Items.item[2], 1) !== false) { // check if player has enough inventory space
						// replace tiles with grass
						map.setTile(0, map.getCol(x), map.getRow(y), 102);
						map.setTile(0, map.getCol(x - 60), map.getRow(y), 102);
					}
				}
				// pick up snowball from rock
				else if (tileNum === 29 && Game.event === "Christmas"){ // rock top centre
					// give snowball to player
					if (Dom.inventory.give(Items.bow[8], 1) !== false) { // check if player has enough inventory space
						if(Player.quests.questProgress.snowCollected === undefined){
							Player.quests.questProgress.snowCollected = 1;
						}else{
							Player.quests.questProgress.snowCollected++;
						}
						Dom.checkProgress();
						// replace tiles with no snow rocks
						map.setTile(0, map.getCol(x), map.getRow(y), 59);
						map.setTile(0, map.getCol(x + 60), map.getRow(y), 60);
						map.setTile(0, map.getCol(x), map.getRow(y + 60), 69);
						// add snow back after 5 minutes
						setTimeout(function(){
							SetTile("nilbog", 0, map.getCol(x), map.getRow(y), 29);
							SetTile("nilbog", 0, map.getCol(x + 60), map.getRow(y), 30);
							SetTile("nilbog", 0, map.getCol(x), map.getRow(y + 60), 39);
						},60000);
					}
				}
				else if (tileNum === 39 && Game.event === "Christmas") { // rock bottom centre
					// give snowball to player
					if (Dom.inventory.give(Items.bow[8], 1) !== false) { // check if player has enough inventory space
						if(Player.quests.questProgress.snowCollected === undefined){
							Player.quests.questProgress.snowCollected = 1;
						}else{
							Player.quests.questProgress.snowCollected++;
						}
						Dom.checkProgress();
						// replace tiles with no snow rocks
						map.setTile(0, map.getCol(x), map.getRow(y - 60), 59);
						map.setTile(0, map.getCol(x + 60), map.getRow(y - 60), 60);
						map.setTile(0, map.getCol(x), map.getRow(y), 69);
						// add snow back after 5 minutes
						setTimeout(function(){
							SetTile("nilbog", 0, map.getCol(x), map.getRow(y - 60), 29);
							SetTile("nilbog", 0, map.getCol(x + 60), map.getRow(y - 60), 30);
							SetTile("nilbog", 0, map.getCol(x), map.getRow(y), 39);
						},60000);
					}
				}
			},
		},
		
		isIcy: function() {
			return Game.event === "Christmas";
		},
		
		images: {
			tiles: {normal: "./assets/tilemap/nilbog.png", christmas: "./assets/tilemap/nilbog-christmas.png"},
			goblinRockthrower: {normal: "./assets/enemies/goblinRockthrower.png"},
			rock: {normal: "./assets/projectiles/rock.png"},
			goblinSkirmisher: {normal: "./assets/enemies/goblinSkirmisher.png"},
			goblinBruiser: {normal: "./assets/enemies/goblinBruiser.png"},
			melee: {normal: "./assets/projectiles/melee.png"},
			fireGoblin: {normal: "./assets/enemies/goblinPyromancer.png"},
			fireball: {normal: "./assets/projectiles/fireball.png"}, // (ignored by loader if it is already loaded because of a mage player)
			goblinCorpse: {normal: "./assets/corpses/deadGoblin.png"},
			mailcart: {normal: "./assets/objects/cartDestroyed.png"},
			trap: {normal: "./assets/objects/trap.png"},
			torch: {normal: "./assets/npcs/torch.png"},
			ghost: {samhain: "./assets/npcs/ghost.png"},
			lootChest: {normal: "./assets/objects/chest.png"},
		},
		
		song_day: "./assets/music/Pippin-the-Hunchback.mp3",
		song_night: "./assets/music/Pippin-the-Hunchback-night.mp3",
		
		checkpoint: false,
		
		lootArea: "loggingCamp",
		lootTier: 1,
		
		chestData: {
			spawnLocations: [
				{x: 576, y: 30,},
				{x: 1500, y: 150,},
				{x: 1470, y: 640,},
				{x: 1580, y: 1310,},
				{x: 845, y: 1373,},
			],
			spawnAmount: 1,
			respawnTime: 1, // days
			tier: 1,
			lootTableTemplate: [ChestLootTables.nilbog],
			inventorySpace: 16,
		},
		
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
						quest: Quests.eaglecrestLoggingCamp[11], 
						role: "questStartFinish"
					},
					{
						quest: Quests.eaglecrestLoggingCamp[21], 
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
						chooseText: "I'd like to browse your Samhain event items.",
						shopGreeting: "I can exchange items from my realm with Samhain Marks for a limited time.",
					},
				],
				chat: {
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
				loot: [{item: Items.item[6]}],
				lootQuantities: [1],
				inventorySpace: 8,
				disappearAfterOpened: false,
				canBeShown: function () {
					return (Player.quests.activeQuestArray.includes("First Class Recovery") || Player.quests.completedQuestArray.includes("First Class Recovery"));
				},
				canBeLooted: function () {
					return (Player.quests.activeQuestArray.includes("First Class Recovery") && !Dom.inventory.check(6, "item", 1));
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
	
	nilbogPast: {
		
		data: {
			name: "The Nilbog",
			level: (250+antoraxAge) + " years ago...",
			territory: "Hostile",
			displayOnEnter: true,
		},
		
		// timey wimey stuff
		timeTravel: true, // cloudy border
		weather: "clear", // TBD rainy?
		time: "day",

		mapData: {
			cols: 15,
			rows: 15,
			tsize: 60,
			tilesPerRow: 8,
			solidTiles: [21, 29, 37, 45, 53, 61], // tower
			waterTiles: [31, 39, 47],
			mudTiles: [4, 12, 20, 28, 36, 44, 52, 60, 68, 76, 84, 92, 100, 108],
			pathTiles: [6, 14, 22, 30, 38, 46, 54, 62, 70, 7, 15, 23],
			layers: [
				[47, 31, 31, 96, 72, 77, 77, 77, 77, 77, 77, 29, 53, 61, 21, 31, 55, 39, 31, 8, 77, 77, 77, 77, 77, 77, 53, 61, 53, 61, 31, 31, 31, 31, 8, 77, 77, 77, 77, 77, 77, 29, 53, 61, 21, 63, 31, 47, 16, 80, 77, 77, 77, 77, 77, 77, 53, 61, 53, 61, 31, 31, 16, 80, 77, 77, 77, 77, 77, 77, 77, 29, 53, 61, 21, 56, 56, 80, 77, 69, 77, 77, 77, 77, 77, 77, 53, 61, 53, 61, 1, 2, 3, 77, 77, 77, 77, 77, 77, 77, 77, 29, 21, 29, 21, 9, 10, 11, 77, 77, 77, 77, 77, 77, 77, 13, 21, 37, 21, 29, 77, 77, 77, 77, 77, 77, 77, 77, 1, 2, 3, 29, 45, 29, 21, 77, 77, 77, 77, 77, 77, 77, 77, 9, 10, 11, 77, 6, 77, 5, 77, 77, 77, 77, 77, 77, 13, 77, 70, 6, 6, 6, 54, 77, 77, 77, 77, 77, 77, 77, 77, 30, 6, 54, 5, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 108, 28, 5, 77, 77, 1, 2, 3, 77, 69, 77, 77, 77, 77, 108, 76, 52, 77, 77, 77, 9, 10, 11, 77, 77, 77, 77, 108, 20, 76, 12, 52, 77],
				[],
			],
		},
		
		images: {
			tiles: {normal: "./assets/tilemap/nilbogPast.png"},
			tatteredKnight: {normal: "./assets/enemies/tatteredKnight.png"},
			tatteredKnightCorpse: {normal: "./assets/corpses/tatteredKnight.png"},
			slash: {normal: "./assets/projectiles/slash.png"}, // (ignored by loader if it is already loaded because of a knight player)
			mailbox: {normal: "./assets/objects/mailbox.png"},
			mailboxUnread: {normal: "./assets/objects/mailboxUnread.png"},
		},
		
		song_day: "./assets/music/Pippin-the-Hunchback-boss.mp3",
		
		checkpoint: false,
		
		mailboxes: [
			{
				x: 460,
				y: 600,
				readImage: "mailbox",
				unreadImage: "mailboxUnread",
				name: "Mailbox",
			},
		],
		
		enemies: [
			{
				x: 300,
				y: 300,
				template: EnemyTemplates.nilbog.tatteredKnight,
			},
		],
		
		onDeath: function () {
			// abandon "The Legend of the Tattered Knight" quest (it can be started again from the mail)
			for (let i = 0; i < Player.quests.activeQuestArray.length; i++) {
				if (Player.quests.activeQuestArray[i] === "The Legend of the Tattered Knight") {
					Player.quests.activeQuestArray.splice(i, 1);
					break;
				}
			}
			Dom.quests.active();
			Dom.quests.possible();
			
			// chat message to let them know
			Dom.chat.insert("Your quest was abandoned. Re-open the mail message to have another attempt.", 0, true, false); // important param = true
		},
	},
	
	nilbogTower1: {
		
		data: {
			name: "Nilbog Tower",
			level: "Level 3 - 5",
			territory: "Hostile",
			displayOnEnter: true,
		},
		
		indoors: true,

		mapData: {
			cols: 10,
			rows: 10,
			tsize: 60,
			tilesPerRow: 4,
			solidTiles: [1, 2, 3, 5, 6, 7, 8, 9, 10, 12], // walls & downwards stairs
			layers: [
				[10, 8, 12, 9, 10, 8, 12, 9, 10, 9, 8, 12, 8, 12, 8, 12, 8, 12, 8, 12, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 4, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 4, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 4, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 4],
				[],
			],
		},
		
		images: {
			tiles: {normal: "./assets/tilemap/nilbogTower.png"},
			stairs: {normal: "./assets/objects/stairs.png"},
			painting: {normal: "./assets/objects/paintingAndrews.png"},
			goblinTowerkeeper: {normal: "./assets/enemies/goblinTowerkeeper.png"},
			goblinCorpse: {normal: "./assets/corpses/deadGoblin.png"},
			melee: {normal: "./assets/projectiles/melee.png"},
		},
		
		song_day: "./assets/music/Pippin-the-Hunchback.mp3",
		
		checkpoint: false,
		
		lootArea: "loggingCamp",
		lootTier: 1,
		
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
				x: 540,
				y: 60,
				width: 2,
				height: 60,
				teleportTo: "nilbogTower2",
				destinationX: 90,
				destinationY: 560,
			},
		],
		
		onAreaTeleport: function () {
			// stair animations
			if (Game.hero.y < 100) {
				// move down stairs
				Game.hero.direction = 2;
				Game.hero.moveTowards = {
					x: 290,
					y: 175,
					speedScalar: 0.6,
				};
			}
		},
		
		things: [
			{
				x: 468,
				y: 97,
				image: "stairs",
				name: "Stairs",
			},
		],
		
		infoPoints: [
			{
				x: 546,
				y: 157,
				image: "painting",
				name: "Painting",
				onTouchChat: "A painting of Wizard Andrews, one of the most accompished wizards that has ever been known. This tower used to be his, but was overrun by goblins after he left to persue his life of wizardry."
			},
		],
		
		collisions: [
			{
				x: 600, // bottom of stairs
				y: 240,
				width: 248,
				height: 50,
			},
		],
		
		tripwires: [
			{
				// going to top of stairs
				x: 338,
				y: 220,
				width: 2,
				height: 40,
				collisionType: "feet",
				onPlayerTouch: function () {
					if (Game.hero.moveTowards === undefined) {
						// walk up stairs
						Game.hero.direction = 4;
						Game.hero.moveTowards = {
							x: 600,
							y: Game.hero.y - 240,
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
			{
				x: 450,
				y: 260,
				template: EnemyTemplates.nilbog.goblinTowerkeeper,
			},
		],
	},
	
	nilbogTower2: {
		
		data: {
			name: "Nilbog Tower",
			level: "Level 3 - 5",
			territory: "Hostile",
			displayOnEnter: false,
		},
		
		indoors: true,

		mapData: {
			cols: 10,
			rows: 10,
			tsize: 60,
			tilesPerRow: 4,
			solidTiles: [1, 2, 3, 5, 6, 7, 8, 9, 10, 12], // walls & downwards stairs
			layers: [    
				[10, 8, 12, 9, 10, 8, 12, 9, 10, 9, 8, 12, 8, 12, 8, 12, 8, 12, 8, 12, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 4, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 4, 11, 11, 11, 11, 4, 11, 4, 11, 11, 11, 11, 4, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 4, 11, 11, 11, 11, 11, 4, 11, 11, 11, 11, 11, 4, 11, 11, 11, 11, 11, 6, 7, 11, 11, 11, 11, 11, 4, 11],
				[],
			],
		},
		
		images: {
			tiles: {normal: "./assets/tilemap/nilbogTower.png"},
			stairs: {normal: "./assets/objects/stairs.png"},
			painting: {normal: "./assets/objects/paintingScorchedAzuras.png"},
			goblinTowerkeeper: {normal: "./assets/enemies/goblinTowerkeeper.png"},
			goblinCrusader: {normal: "./assets/enemies/goblinCrusader.png"},
			goblinCorpse: {normal: "./assets/corpses/deadGoblin.png"},
			melee: {normal: "./assets/projectiles/melee.png"},
			lootChest: {normal: "./assets/objects/chestTower.png"},
		},
		
		song_day: "./assets/music/Pippin-the-Hunchback.mp3",
		
		checkpoint: false,
		
		lootArea: "loggingCamp",
		lootTier: 1,
		
		chestData: {
			spawnLocations: [
				{x: 450, y: 475,},
			],
			spawnAmount: 1,
			respawnTime: 2, // days
			tier: 1,
			lootTableTemplate: [ChestLootTables.nilbog, ChestLootTables.nilbogTower],
			inventorySpace: 16,
			chestKey: Items.item[18],
		},
		
		areaTeleports: [
			{
				// teleport to floor 1
				x: 177,
				y: 600,
				width: 10,
				height: 10,
				teleportTo: "nilbogTower1",
				destinationX: 500,
				destinationY: 10,
			},
			{
				// teleport to floor 3
				x: 540,
				y: 60,
				width: 2,
				height: 60,
				teleportTo: "nilbogTower3",
				destinationX: 90,
				destinationY: 560,
			},
		],
		
		onAreaTeleport: function () {
			// stair animations
			if (Game.hero.y > 540) {
				// move up stairs
				Game.hero.direction = 2;
				Game.hero.moveTowards = {
					x: 15,
					y: 520,
					speedScalar: 0.6,
				};
			}
			else if (Game.hero.y < 100) {
				// move down stairs
				Game.hero.direction = 2;
				Game.hero.moveTowards = {
					x: 290,
					y: 175,
					speedScalar: 0.6,
				};
			}
		},
		
		things: [
			{
				x: 468,
				y: 97,
				image: "stairs",
				name: "Stairs",
			},
		],
		
		infoPoints: [
			{
				x: 546,
				y: 157,
				image: "painting",
				name: "Painting",
				onTouchChat: "A painting of Scorched Azuras, the scarred lands that were once an incredible forest. The trees were burnt down and the ground scored by a group of fire orcs, whom Andrews could not stop as a young wizard. To this day he still regrets he was unable to do something to stop them."
			},
		],
		
		collisions: [
			{
				x: 600, // bottom of stairs
				y: 240,
				width: 248,
				height: 50,
			},
		],
		
		tripwires: [
			{
				// going to bottom
				x: 60,
				y: 600,
				width: 2,
				height: 40,
				collisionType: "feet",
				onPlayerTouch: function () {
					if (Game.hero.moveTowards === undefined) {
						// walk down stairs
						Game.hero.direction = 4;
						Game.hero.moveTowards = {
							x: 150,
							y: 550,
							speedScalar: 0.6,
						};
					}
				}
			},
			{
				// going to top of stairs
				x: 338,
				y: 220,
				width: 2,
				height: 40,
				collisionType: "feet",
				onPlayerTouch: function () {
					if (Game.hero.moveTowards === undefined) {
						// walk up stairs
						Game.hero.direction = 4;
						Game.hero.moveTowards = {
							x: 600,
							y: Game.hero.y - 240,
							speedScalar: 0.6,
						};
					}
				}
			},
		],
		
		enemies: [
			{
				x: 200,
				y: 320,
				template: EnemyTemplates.nilbog.goblinCrusader,
			},
			{
				x: 500,
				y: 500,
				template: EnemyTemplates.nilbog.goblinTowerkeeper,
			},
		],
	},
	
	nilbogTower3: {
		
		data: {
			name: "Nilbog Tower Library",
			level: "Level 3 - 5",
			territory: "Hostile",
			displayOnEnter: false,
		},
		
		indoors: true,

		mapData: {
			cols: 10,
			rows: 10,
			tsize: 60,
			tilesPerRow: 4,
			solidTiles: [1, 2, 3, 5, 6, 7, 8, 9, 10, 12], // walls & downwards stairs
			layers: [    
				[10, 8, 12, 9, 10, 8, 12, 9, 10, 9, 1, 2, 8, 12, 1, 2, 8, 12, 1, 2, 3, 5, 10, 9, 3, 5, 10, 9, 3, 5, 11, 4, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 4, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 4, 11, 11, 11, 11, 4, 11, 11, 11, 11, 11, 11, 4, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 4, 11, 4, 11, 6, 7, 11, 11, 4, 11, 11, 11, 11],
				[],
			],
		},
		
		images: {
			tiles: {normal: "./assets/tilemap/nilbogTower.png"},
			stairs: {normal: "./assets/objects/stairs.png"},
			painting: {normal: "./assets/objects/paintingElvenWoodlands.png"},
			goblinTowerkeeper: {normal: "./assets/enemies/goblinTowerkeeper.png"},
			goblinCrusader: {normal: "./assets/enemies/goblinCrusader.png"},
			goblinCorpse: {normal: "./assets/corpses/deadGoblin.png"},
			melee: {normal: "./assets/projectiles/melee.png"},
		},
		
		song_day: "./assets/music/Pippin-the-Hunchback.mp3",
		
		checkpoint: false,
		
		lootArea: "loggingCamp",
		lootTier: 1,
		
		areaTeleports: [
			{
				// teleport to floor 2
				x: 177,
				y: 600,
				width: 10,
				height: 10,
				teleportTo: "nilbogTower2",
				destinationX: 500,
				destinationY: 10,
			},
			{
				// teleport to floor 4
				x: 540,
				y: 60,
				width: 2,
				height: 60,
				teleportTo: "nilbogTower4",
				destinationX: 90,
				destinationY: 560,
			},
		],
		
		onAreaTeleport: function () {
			// stair animations
			if (Game.hero.y > 540) {
				// move up stairs
				Game.hero.direction = 2;
				Game.hero.moveTowards = {
					x: 15,
					y: 520,
					speedScalar: 0.6,
				};
			}
			else if (Game.hero.y < 100) {
				// move down stairs
				Game.hero.direction = 2;
				Game.hero.moveTowards = {
					x: 290,
					y: 175,
					speedScalar: 0.6,
				};
			}
		},
		
		things: [
			{
				x: 468,
				y: 97,
				image: "stairs",
				name: "Stairs",
			},
		],
		
		infoPoints: [
			{
				x: 537,
				y: 158,
				image: "painting",
				name: "Painting",
				onTouchChat: "A painting of Wizard Andrews with the Lady of Autumn, in the Forest of the Hundred Trees, Elven Woodlands. Andrews was blessed by the elves on this day for his help in the defense of Woodreach against the vampire-elf Mroll."
			},
		],
		
		collisions: [
			{
				x: 600, // bottom of stairs
				y: 240,
				width: 248,
				height: 50,
			},
		],
		
		tripwires: [
			{
				// going to bottom
				x: 60,
				y: 600,
				width: 2,
				height: 40,
				collisionType: "feet",
				onPlayerTouch: function () {
					if (Game.hero.moveTowards === undefined) {
						// walk down stairs
						Game.hero.direction = 4;
						Game.hero.moveTowards = {
							x: 150,
							y: 550,
							speedScalar: 0.6,
						};
					}
				}
			},
			{
				// going to top of stairs
				x: 338,
				y: 220,
				width: 2,
				height: 40,
				collisionType: "feet",
				onPlayerTouch: function () {
					if (Game.hero.moveTowards === undefined) {
						// walk up stairs
						Game.hero.direction = 4;
						Game.hero.moveTowards = {
							x: 600,
							y: Game.hero.y - 240,
							speedScalar: 0.6,
						};
					}
				}
			},
		],
		
		enemies: [
			{
				x: 270,
				y: 210,
				template: EnemyTemplates.nilbog.goblinCrusader,
			},
			{
				x: 430,
				y: 450,
				template: EnemyTemplates.nilbog.goblinTowerkeeper,
			},
			{
				x: 100,
				y: 300,
				template: EnemyTemplates.nilbog.goblinTowerkeeper,
			},
		],
	},
	
	nilbogTower4: {
		
		data: {
			name: "Nilbog Tower",
			level: "Level 3 - 5",
			territory: "Hostile",
			displayOnEnter: false,
		},
		
		indoors: true,

		mapData: {
			cols: 10,
			rows: 10,
			tsize: 60,
			tilesPerRow: 4,
			solidTiles: [1, 2, 3, 5, 6, 7, 8, 9, 10, 12], // walls & downwards stairs
			layers: [    
				[10, 8, 12, 9, 10, 8, 12, 9, 10, 9, 8, 12, 8, 12, 8, 12, 8, 12, 8, 12, 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 4, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 4, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 4, 11, 11, 11, 11, 11, 6, 7, 11, 11, 11, 11, 11, 11, 11],
				[],
			],
		},
		
		images: {
			tiles: {normal: "./assets/tilemap/nilbogTower.png"},
			stairs: {normal: "./assets/objects/stairs.png"},
			painting: {normal: "./assets/objects/paintingDesert.png"}, // image to be renamed
			goblinCrusader: {normal: "./assets/enemies/goblinCrusader.png"},
			goblinCorpse: {normal: "./assets/corpses/deadGoblin.png"},
			melee: {normal: "./assets/projectiles/melee.png"},
			lootChest: {normal: "./assets/objects/chestTower.png"},
		},
		
		song_day: "./assets/music/Pippin-the-Hunchback.mp3",
		
		checkpoint: false,
		
		lootArea: "loggingCamp",
		lootTier: 1,
		
		chestData: {
			spawnLocations: [
				{x: 300, y: 350,},
			],
			spawnAmount: 1,
			respawnTime: 2, // days
			tier: 1,
			lootTableTemplate: [ChestLootTables.nilbog, ChestLootTables.nilbogTower],
			inventorySpace: 16,
			chestKey: Items.item[18],
		},
		
		areaTeleports: [
			{
				// teleport to floor 3
				x: 177,
				y: 600,
				width: 10,
				height: 10,
				teleportTo: "nilbogTower3",
				destinationX: 500,
				destinationY: 10,
			},
			{
				// teleport to floor 5
				x: 540,
				y: 60,
				width: 2,
				height: 60,
				teleportTo: "nilbogTower5",
				destinationX: 90,
				destinationY: 560,
			},
		],
		
		onAreaTeleport: function () {
			// stair animations
			if (Game.hero.y > 540) {
				// move up stairs
				Game.hero.direction = 2;
				Game.hero.moveTowards = {
					x: 15,
					y: 520,
					speedScalar: 0.6,
				};
			}
			else if (Game.hero.y < 100) {
				// move down stairs
				Game.hero.direction = 2;
				Game.hero.moveTowards = {
					x: 290,
					y: 175,
					speedScalar: 0.6,
				};
			}
		},
		
		things: [
			{
				x: 468,
				y: 97,
				image: "stairs",
				name: "Stairs",
			},
		],
		
		infoPoints: [
			{
				x: 540,
				y: 164,
				image: "painting",
				name: "Painting",
				onTouchChat: "A painting of The Wastelands. They were barren lands, where Wizard Andrews fought through the barbarian tribes to destroy the Chaos Parasite and its corruption."
			},
		],
		
		collisions: [
			{
				x: 600, // bottom of stairs
				y: 240,
				width: 248,
				height: 50,
			},
		],
		
		tripwires: [
			{
				// going to bottom
				x: 60,
				y: 600,
				width: 2,
				height: 40,
				collisionType: "feet",
				onPlayerTouch: function () {
					if (Game.hero.moveTowards === undefined) {
						// walk down stairs
						Game.hero.direction = 4;
						Game.hero.moveTowards = {
							x: 150,
							y: 550,
							speedScalar: 0.6,
						};
					}
				}
			},
			{
				// going to top of stairs
				x: 338,
				y: 220,
				width: 2,
				height: 40,
				collisionType: "feet",
				onPlayerTouch: function () {
					if (Game.hero.moveTowards === undefined) {
						// walk up stairs
						Game.hero.direction = 4;
						Game.hero.moveTowards = {
							x: 600,
							y: Game.hero.y - 240,
							speedScalar: 0.6,
						};
					}
				}
			},
		],
		
		enemies: [
			{
				x: 200,
				y: 250,
				template: EnemyTemplates.nilbog.goblinCrusader,
			},
			{
				x: 400,
				y: 250,
				template: EnemyTemplates.nilbog.goblinCrusader,
			},
			{
				x: 200,
				y: 450,
				template: EnemyTemplates.nilbog.goblinCrusader,
			},
			{
				x: 400,
				y: 450,
				template: EnemyTemplates.nilbog.goblinCrusader,
			},
		],
	},
	
	nilbogTower5: {
		
		data: {
			name: "Nilbog Tower",
			level: "Level 3 - 5",
			territory: "Hostile",
			displayOnEnter: false,
		},
		
		indoors: true,

		mapData: {
			cols: 10,
			rows: 10,
			tsize: 60,
			tilesPerRow: 4,
			solidTiles: [1, 2, 3, 5, 6, 7, 8, 9, 10, 12], // walls & downwards stairs
			layers: [    
				[10, 8, 12, 8, 12, 8, 12, 8, 12, 9, 8, 12, 1, 2, 8, 12, 8, 12, 8, 12, 10, 9, 3, 5, 10, 9, 10, 9, 10, 9, 11, 13, 13, 13, 13, 13, 13, 13, 13, 11, 16, 17, 18, 17, 18, 17, 18, 17, 18, 14, 16, 18, 17, 18, 17, 18, 17, 18, 17, 14, 16, 17, 18, 17, 18, 17, 18, 17, 18, 14, 16, 18, 17, 18, 17, 18, 17, 18, 17, 14, 11, 15, 15, 15, 15, 15, 15, 15, 15, 11, 11, 6, 7, 11, 11, 11, 11, 11, 11, 11],
				[],
			],
		},
		
		images: {
			tiles: {normal: "./assets/tilemap/nilbogTower.png"},
			stairs: {normal: "./assets/objects/stairs.png"},
			painting: {normal: "./assets/objects/paintingDesert.png"}, // image to be renamed
			goblinKing: {normal: "./assets/enemies/goblinKing.png"},
			goblinKingCorpse: {normal: "./assets/corpses/goblinKing.png"},
			slash: {normal: "./assets/projectiles/slash.png"}, // (ignored by loader if it is already loaded because of a knight player)
			fireball: {normal: "./assets/projectiles/fireball.png"}, // (ignored by loader if it is already loaded because of a mage player)
			arrow: {normal: "./assets/projectiles/arrow.png"}, // (ignored by loader if it is already loaded because of an archer player)
			weaponRack: {normal: "./assets/objects/weaponRack.png"},
		},
		
		song_day: "./assets/music/Pippin-the-Hunchback-boss.mp3",
		
		checkpoint: false,
		
		lootArea: "loggingCamp",
		lootTier: 1,
		
		areaTeleports: [
			{
				// teleport to floor 4
				x: 177,
				y: 600,
				width: 10,
				height: 10,
				teleportTo: "nilbogTower4",
				destinationX: 500,
				destinationY: 10,
			},
		],
		
		onAreaTeleport: function () {
			// stair animations
			if (Game.hero.y > 540) {
				// move up stairs
				Game.hero.direction = 2;
				Game.hero.moveTowards = {
					x: 15,
					y: 520,
					speedScalar: 0.6,
				};
			}
		},
		
		tripwires: [
			{
				// going to bottom
				x: 60,
				y: 600,
				width: 2,
				height: 40,
				collisionType: "feet",
				onPlayerTouch: function () {
					if (Game.hero.moveTowards === undefined) {
						// walk down stairs
						Game.hero.direction = 4;
						Game.hero.moveTowards = {
							x: 150,
							y: 550,
							speedScalar: 0.6,
						};
					}
				}
			},
		],
		
		enemies: [
			{
				x: 300,
				y: 150,
				template: EnemyTemplates.nilbog.goblinKing,
			},
		],
		
		things: [
			{
				x: 500,
				y: 150,
				image: "weaponRack",
			},
		],
	},
};

// sets a tile on the Map (specifyable area for if it is used in a setTimeout)
function SetTile (area, layer, col, row, newTileNum) {
	let map = Areas[area].mapData;
	map.layers[layer][row * map.cols + col] = newTileNum;
}