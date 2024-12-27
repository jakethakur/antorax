if(JSON.parse(localStorage.getItem("user")) !== null){
	let user = JSON.parse(localStorage.getItem("user"));
	user.progress = Object.assign(User.progress, user.progress);
	user.settings.keyboard = Object.assign(User.settings.keyboard, user.settings.keyboard);
	user.settings = Object.assign(User.settings, user.settings);
	User = Object.assign(User, user);
	User.notFirst = true;
	User.skinPurchased = undefined;
}

for (let i = User.fish.length; i < Items.fish.length; i++) {
    User.fish.push(0);
}

const AchievementFunctions = { // functions used in Achivements variable
    hardcoreMaxLevel: function () {
        let currentMax = 0;
        if (Archer.totalDeaths === 0 && Archer.level > currentMax) {
            currentMax = Archer.level;
        }
        if (Mage.totalDeaths === 0 && Mage.level > currentMax) {
            currentMax = Mage.level;
        }
        if (Knight.totalDeaths === 0 && Knight.level > currentMax) {
            currentMax = Knight.level;
        }
        return currentMax;
    }
}

var Achievements = [
		//
		// GENERAL
		//
	{
		name: "Level 5",
		description: "Reach level 5.",
		points: 5,
		category: ["general"],
		area: ["global"],
		image: "../assets/achievements/level5.png",
		class: "single",
		isCompleted: function () {
			return Player.level >= 5;
		},
		expand: {
			type: "progressBar",
			value: function () { return Math.max(Archer.level, Mage.level, Knight.level); },
			total: 5,
		},
	},
	{
		name: "Level 10",
		description: "Reach level 10.",
		points: 10,
		category: ["general"],
		area: ["global"],
		image: "../assets/achievements/level10.png",
		class: "single",
		isCompleted: function () {
			return Player.level >= 10;
		},
		expand: {
			type: "progressBar",
			value: function () { return Math.max(Archer.level, Mage.level, Knight.level); },
			total: 10,
		},
	},
	{
		name: "Social Butterfly I",
		description: "Meet 50 different characters with one class.",
		points: 10,
		category: ["general"],
		area: ["global"],
		image: "../assets/items/helm/11.png",
		class: "single",
		isCompleted: function () {
			return Player.metNPCs.length >= 50;
		},
		expand: {
			type: "progressBar",
			value: function () { return Math.max(Archer.metNPCs.length, Mage.metNPCs.length, Knight.metNPCs.length); },
			total: 50,
		},
	},
		//
		// QUESTS
		//
	{
		name: "Daily Quester I",
		description: "Complete 50 daily quests.",
		points: 10,
		category: ["quests"],
		area: ["global"],
		image: "../assets/icons/dailyQuests.png",
		class: "cumulative",
		isCompleted: function () {
			return User.progress.dailyQuests >= 50;
		},
		expand: {
			type: "progressBar",
			value: User.progress.dailyQuests,
			total: 50,
		},
	},
	{
		name: "Daily Quester II",
		description: "Complete 250 daily quests.",
		points: 10,
		category: ["quests"],
		area: ["global"],
		image: "../assets/icons/dailyQuests.png",
		class: "cumulative",
		isCompleted: function () {
			return User.progress.dailyQuests >= 250;
		},
		expand: {
			type: "progressBar",
			value: User.progress.dailyQuests,
			total: 250,
		},
	},
	{
		name: "Questmaster I",
		description: "Complete 50 quests.",
		points: 10,
		category: ["quests"],
		area: ["global"],
		image: "../assets/icons/quests.png",
		class: "cumulative",
		isCompleted: function () {
			return User.progress.quests >= 50;
		},
		expand: {
			type: "progressBar",
			value: User.progress.quests,
			total: 50,
		},
	},
	{
		name: "Logging Camp Questmaster",
		description: "Complete all 18 non-event quests in Eaglecrest Logging Camp.",
		points: 10,
		category: ["quests"],
		area: ["loggingCamp"],
		image: "../assets/npcs/teper.png",
		position: {x: 117,y: -10},
		color: "#ddddff",
		class: "single",
		isCompleted: function () {
			let done = true;
			for (let i = 0; i < Quests.eaglecrestLoggingCamp.length; i++) {
				// only look for one-time, non-event quests
				if (Quests.eaglecrestLoggingCamp[i].eventRequirement === undefined && Quests.eaglecrestLoggingCamp[i].repeatTime === undefined && !Player.quests.completedQuestArray.includes(Quests.eaglecrestLoggingCamp[i].quest)) {
					done = false;
				}
			}
			return done;
		},
		expand: {
			type: "checkList",
			text: ["To the Logging Camp", "Learning from the Best", "Combat Training", "Retrieval of Logs", "Making Yourself Useful", "First Class Recovery", "A Lost Fishing Rod", "Strengthening Defences", "The Sceptre of Souls", "Another Man's Treasure", "Fire Power", "Potion Making", "Potion Making II", "The Goblin King", "To Eaglecrest, and Beyond!", "Partners in Goblin Destruction", "A 'Spark' of Imagination", "A Burning Need to be Cleaned"],
			complete: ["To the Logging Camp", "Learning from the Best", "Combat Training", "Retrieval of Logs", "Making Yourself Useful", "First Class Recovery", "A Lost Fishing Rod", "Strengthening Defences", "The Sceptre of Souls", "Another Man's Treasure", "Fire Power", "Potion Making", "Potion Making II", "The Goblin King", "To Eaglecrest, and Beyond!", "Partners in Goblin Destruction", "A 'Spark' of Imagination", "A Burning Need to be Cleaned"],
			saved: "quest",
		},
	},
		//
		// GENERAL COMBAT
		// (not bosses)
		//
	{
		// id: 5,
		name: "Novice Combatant",
		description: "Kill 300 enemies.",
		points: 10,
		category: ["combat"],
		area: ["global"],
		image: "../assets/items/sword/3.png",
		class: "cumulative",
		isCompleted: function () {
			return User.progress.enemies >= 300;
		},
		expand: {
			type: "progressBar",
			value: User.progress.enemies,
			total: 300,
		},
	},
	{
		// id: 6,
		name: "Adept Combatant",
		description: "Kill 1,000 enemies.",
		points: 10,
		category: ["combat"],
		area: ["global"],
		image: "../assets/items/bow/4.png",
		class: "cumulative",
		isCompleted: function () {
			return User.progress.enemies >= 1000;
		},
		expand: {
			type: "progressBar",
			value: User.progress.enemies,
			total: 1000,
		},
	},
	{
		// id: 7,
		name: "Intermediate Combatant",
		description: "Kill 2,500 enemies.",
		points: 10,
		category: ["combat"],
		area: ["global"],
		image: "../assets/items/staff/5.png",
		class: "cumulative",
		isCompleted: function () {
			return User.progress.enemies >= 2500;
		},
		expand: {
			type: "progressBar",
			value: User.progress.enemies,
			total: 2500,
		},
	},
	{
		// id: 8,
		name: "Expert Combatant",
		description: "Kill 5,000 enemies.",
		points: 10,
		category: ["combat"],
		area: ["global"],
		image: "../assets/items/sword/4.png",
		class: "cumulative",
		isCompleted: function () {
			return User.progress.enemies >= 5000;
		},
		expand: {
			type: "progressBar",
			value: User.progress.enemies,
			total: 5000,
		},
	},
	{
		name: "Master Combatant",
		description: "Kill 10,000 enemies.",
		points: 25,
		category: ["combat"],
		area: ["global"],
		image: "../assets/achievements/masterCombatant.png",
		class: "cumulative",
		isCompleted: function () {
			return User.progress.enemies >= 10000;
		},
		expand: {
			type: "progressBar",
			value: User.progress.enemies,
			total: 10000,
		},
	},
		//
		// SPECIAL COMBAT
		//
	{
		name: "Close One!",
		description: "Defeat a boss with one health point remaining.",
		hidden: true,
		points: 10,
		category: ["combat"],
		area: ["global"],
		image: "../assets/items/consumable/4.png",
		class: "single",
		isCompleted: function () {
			return User.progress.closeOne;
		},
	},
	{
		name: "Thermal Runaway",
		description: "Set off 6 successive explosions with an Exploding weapon.",
		points: 10,
		category: ["combat"],
		area: ["global"],
		image: "../assets/achievements/explosion.png",
		class: "single",
		isCompleted: function () {
			return User.progress.successiveExplosions >= 6;
		},
		expand: {
			type: "progressBar",
			value: User.progress.successiveExplosions,
			total: 6,
		},
	},
	{
		name: "They'll Never See It Coming",
		description: "While in stealth, kill a maximum health enemy with one hit.",
		points: 5,
		category: ["combat"],
		area: ["global"],
		image: "../assets/items/helm/33.png",
		class: "single",
		isCompleted: function () {
			return User.progress.theyllNeverSeeItComing;
		},
	},
		//
		// AREA SPECIFIC COMBAT
		//
	{
		name: "Goblin Slayer Bronze",
		description: "Kill 100 Nilbog goblins.",
		points: 10,
		category: ["combat"],
		area: ["loggingCamp"],
		image: "../assets/enemies/goblinRockthrower.png",
		position: {x: 45, y: -15},
		color: "#cd7f32",
		class: "cumulative",
		isCompleted: function () {
			return User.progress.goblins >= 100;
		},
		expand: {
			type: "progressBar",
			value: User.progress.goblins,
			total: 100,
		},
	},
	{
		name: "Goblin Slayer Silver",
		description: "Kill 250 Nilbog goblins.",
		points: 10,
		category: ["combat"],
		area: ["loggingCamp"],
		image: "../assets/enemies/goblinBruiser.png",
		position: {x: 10, y: -15},
		color: "lightgray",
		class: "cumulative",
		isCompleted: function () {
			return User.progress.goblins >= 250;
		},
		expand: {
			type: "progressBar",
			value: User.progress.goblins,
			total: 250,
		},
	},
	{
		name: "Goblin Slayer Gold",
		description: "Kill 500 Nilbog goblins.",
		points: 10,
		category: ["combat"],
		area: ["loggingCamp"],
		image: "../assets/enemies/goblinCrusader.png",
		position: {x: -200, y: -10},
		color: "#fac540",
		class: "cumulative",
		isCompleted: function () {
			return User.progress.goblins >= 500;
		},
		expand: {
			type: "progressBar",
			value: User.progress.goblins,
			total: 500,
		},
	},
	{
		name: "Kingslayer",
		description: "Kill the Goblin King.",
		points: 5,
		category: ["combat"],
		area: ["loggingCamp"],
		image: "../assets/enemies/goblinKing.png",
		position: {x: 57, y: 0},
		color: "#ddddff",
		class: "single",
		isCompleted: function () {
			return Player.bossesKilled.goblinKing !== 0 && Player.bossesKilled.goblinKing !== undefined;
		}
	},
	{
		name: "Toadsbane Bronze",
		description: "Kill 100 large toads.",
		points: 10,
		category: ["combat"],
		area: ["loggingCamp"],
		image: "../assets/items/fish/33.png",
		color: "#cd7f32",
		class: "cumulative",
		isCompleted: function () {
			return User.progress.frogs >= 100;
		},
		expand: {
			type: "progressBar",
			value: User.progress.frogs,
			total: 100,
		},
	},
	{
		name: "Toadsbane Silver",
		description: "Kill 250 large toads.",
		points: 10,
		category: ["combat"],
		area: ["loggingCamp"],
		image: "../assets/items/fish/34.png",
		color: "lightgray",
		class: "cumulative",
		isCompleted: function () {
			return User.progress.frogs >= 250;
		},
		expand: {
			type: "progressBar",
			value: User.progress.frogs,
			total: 250,
		},
	},
	{
		name: "Toadsbane Gold",
		description: "Kill 500 large toads.",
		points: 10,
		category: ["combat"],
		area: ["loggingCamp"],
		image: "../assets/enemies/toad.png",
		position: {x: 108, y: 0},
		color: "#fac540",
		class: "cumulative",
		isCompleted: function () {
			return User.progress.frogs >= 500;
		},
		expand: {
			type: "progressBar",
			value: User.progress.frogs,
			total: 500,
		},
	},
	{
		name: "Slay Queen",
		description: "Kill the Frog Queen.",
		points: 10,
		category: ["combat"],
		area: ["eaglecrest"],
		image: "../assets/enemies/frogQueen.png",
		position: {x: 29.4, y: 7},
		color: "#ddddff",
		class: "single",
		isCompleted: function () {
			return Player.bossesKilled.frogQueen !== 0 && Player.bossesKilled.frogQueen !== undefined;
		}
	},
	{
		name: "Many Chickens Harmed in the Process",
		description: "Obtain a golden feather.",
		hidden: true,
		points: 10,
		category: ["combat"],
		area: ["eaglecrest"],
		image: "../assets/items/item/51.png",
		color: "lightgray",
		class: "single",
		isCompleted: function () {
			return Dom.inventory.check(51, "item");
		}
	},
	{
		name: "Aconite",
		description: "Kill a Coyote Pack Wrangler 8 times on one class.",
		points: 10,
		category: ["combat"],
		area: ["eaglecrest"],
		image: "../assets/items/item/67.png",
		color: "lightgray",
		class: "single",
		isCompleted: function () {
			return Player.quests.questProgress.coyoteWranglers >= 8;
		},
		expand: {
			type: "progressBar",
			value: function () { return Math.max(Archer.quests.questProgress.coyoteWranglers||0, Mage.quests.questProgress.coyoteWranglers||0, Knight.quests.questProgress.coyoteWranglers||0); },
			total: 8,
		},
	},

	{
		name: "Florist of the Dead",
		description: "Kill Baron Foxglove.",
		points: 5,
		category: ["combat"],
		area: ["eaglecrest"],
		image: "../assets/enemies/foxglove.png",
		position: {x: 90, y: 0},
		color: "lightgray",
		class: "single",
		isCompleted: function () {
			return Player.bossesKilled.foxglove !== 0 && Player.bossesKilled.foxglove !== undefined;
		}
	},

	{
		name: "Peace for Madeleine Wallace",
		description: "Hand in 9 letters to an Eaglecrest mail carrier (on any class).",
		hidden: true,
		points: 10,
		category: ["general", "combat", "archaeology"],
		area: ["eaglecrest"],
		image: "../assets/items/bag/8.png",
		color: "lightgrey",
		class: "cumulative",
		isCompleted: function () {
			return User.progress.turnedInLetters >= 9;
		},
		expand: {
			type: "progressBar",
			value: User.progress.turnedInLetters,
			total: 9,
		},
	},
	{
		name: "Bedtime",
		description: "Kill The Underlord.",
		points: 5,
		category: ["combat"],
		area: ["caves"],
		image: "../assets/enemies/rockOverlord.png",
		position: {x: 57, y: 0},
		color: "#ddddff",
		class: "single",
		isCompleted: function () {
			return Player.bossesKilled.underlord !== 0 && Player.bossesKilled.underlord !== undefined;
		}
	},
	{
		name: "Crystal Healing",
		description: "Kill the bosses at each of the three Cave Chakras.",
		points: 10,
		category: ["combat"],
		area: ["caves"],
        image: "../assets/enemies/stoneElemental1.png", // tbd change this
        color: "#540606", // tbd change this
		class: "single",
		isCompleted: function () {
			return Player.bossesKilled.vomer && Player.bossesKilled.maxilla && Player.bossesKilled.palatine;
		},
		expand: {
			type: "checkList",
			saved: "boss",
			text: ["Vomer", "Maxilla", "Palatine"],
			complete: ["Vomer", "Maxilla", "Palatine"],
		},
	},
	{
		name: "Spectral Success", // tbd change
		description: "Complete the Animated Mineshaft.",
		points: 5,
		category: ["combat"],
		area: ["caves"],
		image: "../assets/npcs/valAsh.png",
		position: {x: 32, y: 5},
		color: "#ddddff",
		class: "single",
		isCompleted: function () {
			return false;
		}
	},

	{
        name: "The Slayer of the Tattered Knight",
        description: "Kill the Tattered Knight.",
        points: 5,
        category: ["combat"],
        area: ["loggingCamp"],
        event: "Antorax",
        image: "../assets/enemies/tatteredKnight.png",
        position: {x: 90, y: -1},
        color: "#ddddff",
        class: "single",
        isCompleted: function () {
            return Player.bossesKilled.tatteredKnight !== 0 && Player.bossesKilled.tatteredKnight !== undefined;
        }
    },
	{
		name: "Outgrowing your Toys",
		description: "Destroy a target dummy.",
		hidden: true,
		points: 10,
		category: ["combat"],
		area: ["global", "loggingCamp"],
		image: "../assets/enemies/dummy.png",
		color: "#ddddff",
		class: "single",
		isCompleted: function () {
			return User.progress.dummies >= 1;
		}
	},
	{
        name: "Time to Krill",
        description: "Kill 10 enemies with a fish.",
        points: 5,
        category: ["combat"],
        area: ["global"],
        event: "Fish",
        image: "../assets/items/sword/10.png",
		class: "cumulative",
		isCompleted: function () {
			return User.progress.enemiesKilledWithFish >= 10;
		},
		expand: {
			type: "progressBar",
			value: User.progress.enemiesKilledWithFish,
			total: 10,
		},
    },
	{
		name: "Luck of Samme",
		description: "Have 3 of the same mythic equipment pieces in your inventory.",
		hidden: true,
		points: 5,
		category: ["general"],
		area: ["global"],
		image: "../assets/items/chest/21.png",
		color: "lightgrey",
		class: "single",
		isCompleted: function () {
			let mythics = {};
			let validTypes = ["helm", "chest", "greaves", "boots", "sword", "bow", "staff"];
			let val = 0;
			for (let i = 0; i < Player.inventory.items.length; i++) {
				if (Player.inventory.items[i].rarity === "mythic" && validTypes.includes(Player.inventory.items[i].type)) {
					let key = Player.inventory.items[i].type + "" + Player.inventory.items[i].id;
					if (typeof mythics[key] === "undefined") {
						mythics[key] = 1;
					}
					else {
						mythics[key]++;
						if (mythics[key] > val) {
							val = mythics[key];
						}
					}
				}
			}
			if (typeof User.progress.luckOfSammeProgress === "undefined") {
				User.progress.luckOfSammeProgress = 0;
			}
			if (val > User.progress.luckOfSammeProgress) {
				User.progress.luckOfSammeProgress = val;
			}
			return User.progress.luckOfSammeProgress;
		},
		expand: {
			type: "progressBar",
			value: User.progress.luckOfSammeProgress,
			total: 3,
		},
	},
	{
		name: "Nilbog under Blood Moon",
		description: "Kill the two Blood Moon bosses in the Nilbog.",
		points: 10,
		category: ["combat"],
		area: ["loggingCamp"],
		event: "Samhain",
        image: "../assets/enemies/marshallSheridan.png",
        position: {x: 8, y: -1},
        color: "#540606",
		class: "single",
		isCompleted: function () {
			return Player.bossesKilled.marshallSheridan && Player.bossesKilled.barebonesNkkja;
		},
		expand: {
			type: "checkList",
			saved: "boss",
			text: ["Marshall Sheridan", "'Barebones' Nkkja"],
			complete: ["marshallSheridan", "barebonesNkkja"],
		},
	},

	/*{
		name: "Work-Life Balance",
		description: "Work 10 tavern jobs and kill 50 enemies in 10 minutes, recorded by a timepiece.",//tbc
		points: 5,
		category: ["combat", "quests"],
		area: ["global"],
		image: "../assets/items/consumable/15.png",
		//color: "#5D3400",
		class: "single",
		isCompleted: function () {
			//return tbd;
		}
	},*/
		//
		// REPUTATION
		//
	{
		name: "Tree Hugger",
		description: "Reach venerated reputation with Eaglecrest Logging Camp.",
		points: 20,
		category: ["reputation"],
		area: ["loggingCamp"],
		image: "../assets/achievements/loggingCamp.png",
		size: "contain",
		class: "single",
		isCompleted: function () {
			return Player.reputation.eaglecrestLoggingCamp.level >= 6;
		}
	},
		//
		// EXPLORATION
		//
	{
		name: "Gnome World",
		description: "Find 6 gnomes hidden around Eaglecrest.",
		hidden: true,
		points: 5,
		category: ["exploration"],
		area: ["eaglecrest"],
		image: "../assets/objects/gnomeGreen.png",
		class: "any",
		isCompleted: function () {
			if (typeof User.progress.gnomesFound !== "undefined"){return User.progress.gnomesFound.length} else {return 0};
		},
		expand: {
			type: "progressBar",
			value: function () {if (typeof User.progress.gnomesFound !== "undefined"){return User.progress.gnomesFound.length} else {return 0}},
			total: 6,
		},
	},
	{
		name: "Midas' Spoils",
		description: "Open a golden chest.",
		points: 5,
		category: ["exploration"],
		area: ["caves"],
		image: "../assets/objects/chest.png", // tbd change
		class: "single",
		isCompleted: function () {
			return false;
		},
	},
	{
		name: "Lootrunner Jr.",
		description: "Open 50 chests in the Caves.",
		points: 5,
		category: ["exploration"],
		area: ["caves"],
		image: "../assets/objects/chest.png", // tbd change
		class: "cumulative",
		isCompleted: function () {
			return false;
		},
		expand: {
			type: "progressBar",
			value: 0,
			total: 50,
		},
	},
	{
		name: "Lootrunner Sr.",
		description: "Open 300 chests in the Caves.", // tbd change
		points: 10,
		category: ["exploration"],
		area: ["caves"],
		image: "../assets/objects/chest.png",
		class: "cumulative",
		isCompleted: function () {
			return false;
		},
		expand: {
			type: "progressBar",
			value: 0,
			total: 300,
		},
	},
		//
		// ARCHAEOLOGY
		//
	{
		name: "Logging Camp Archaeologist",
		description: "Uncover all unidentified items in Eaglecrest Logging Camp.",
		points: 20,
		category: ["archaeology"],
		area: ["loggingCamp"],
		image: "../assets/items/helm/5.png",
		class: "cumulative",
		isCompleted: function () {
			let done = true;
			for(let i = 0; i < 7; i++){
				for(let x = 0; x < Items[Object.keys(Items)[i]].length; x++){
					if(Items[Object.keys(Items)[i]][x].unidentifiedArea !== undefined && Items[Object.keys(Items)[i]][x].unidentifiedArea.includes("loggingCamp") && !User.archaeology.includes(Items[Object.keys(Items)[i]][x].name)){
						done = false;
					}
				}
			}
			return done;
		},
		expand: {
			type: "redirect",
			text: "View in archaeology",
			location: "../archaeology/index.html?obtained=unidentified&area=loggingCamp",
			total: GetTotalItems(function(item) {
				return item.obtain.includes("unidentified") && item.area.includes("loggingCamp");
			}),
			value: function () {
				let done = 0;
				for(let i = 0; i < 7; i++){
					for(let x = 0; x < Items[Object.keys(Items)[i]].length; x++){
						if(Items[Object.keys(Items)[i]][x].unidentifiedArea !== undefined && Items[Object.keys(Items)[i]][x].unidentifiedArea.includes("loggingCamp") && User.archaeology.includes(Items[Object.keys(Items)[i]][x].name)){
							done++;
						}
					}
				}
				return done;
			},
		},
	},
	{
		// id: 17,
		name: "Return of the Ocean Warrior",
		description: "Uncover the Set of the Ocean Warrior.",
		points: 10,
		category: ["archaeology", "fishing"],
		area: ["global"],
		image: "../assets/items/helm/6.png",
		class: "single",
		isCompleted: function () {
			return User.archaeology.includes("The Set of the Ocean Warrior");
		},
		expand: {
			type: "redirect",
			text: "View in archaeology",
			location: "../archaeology/index.html?searchBar=Ocean Warrior",
			total: 4,
			value: function () {
				if (User.archaeology.includes("The Set of the Ocean Warrior")) {
					return 4;
				}else{
					let archer = 0;
					if(Archer.inventory.items.some(item => item.name === "The Ocean Warrior's Helm") || Archer.inventory.helm.name === "The Ocean Warror's Helm"){archer++;}
				 	if(Archer.inventory.items.some(item => item.name === "The Ocean Warrior's Chestplate") || Archer.inventory.helm.name === "The Ocean Warror's Chestplate"){archer++;}
					if(Archer.inventory.items.some(item => item.name === "The Ocean Warrior's Leggings") || Archer.inventory.helm.name === "The Ocean Warror's Leggings"){archer++;}
					if(Archer.inventory.items.some(item => item.name === "The Ocean Warrior's Boots") || Archer.inventory.helm.name === "The Ocean Warror's Boots"){archer++;}

					let mage = 0;
					if(Mage.inventory.items.some(item => item.name === "The Ocean Warrior's Helm") || Mage.inventory.helm.name === "The Ocean Warror's Helm"){mage++;}
				 	if(Mage.inventory.items.some(item => item.name === "The Ocean Warrior's Chestplate") || Mage.inventory.helm.name === "The Ocean Warror's Chestplate"){mage++;}
					if(Mage.inventory.items.some(item => item.name === "The Ocean Warrior's Leggings") || Mage.inventory.helm.name === "The Ocean Warror's Leggings"){mage++;}
					if(Mage.inventory.items.some(item => item.name === "The Ocean Warrior's Boots") || Mage.inventory.helm.name === "The Ocean Warror's Boots"){mage++;}

					let knight = 0;
					if(Knight.inventory.items.some(item => item.name === "The Ocean Warrior's Helm") || Knight.inventory.helm.name === "The Ocean Warror's Helm"){knight++;}
				 	if(Knight.inventory.items.some(item => item.name === "The Ocean Warrior's Chestplate") || Knight.inventory.helm.name === "The Ocean Warror's Chestplate"){knight++;}
					if(Knight.inventory.items.some(item => item.name === "The Ocean Warrior's Leggings") || Knight.inventory.helm.name === "The Ocean Warror's Leggings"){knight++;}
					if(Knight.inventory.items.some(item => item.name === "The Ocean Warrior's Boots") || Knight.inventory.helm.name === "The Ocean Warror's Boots"){knight++;}

					return Math.max(archer, mage, knight);
				}
			}
		},
	},
	{
		name: "Eaglecrest Plains Archaeologist",
		description: "Uncover all unidentified items in the Eaglecrest Plains.",
		points: 20,
		category: ["archaeology"],
		area: ["eaglecrest"],
		image: "../assets/items/helm/30.png",
		class: "cumulative",
		isCompleted: function () {
			let done = true;
			for(let i = 0; i < 7; i++){
				for(let x = 0; x < Items[Object.keys(Items)[i]].length; x++){
					if(Items[Object.keys(Items)[i]][x].unidentifiedArea !== undefined && Items[Object.keys(Items)[i]][x].unidentifiedArea.includes("eaglecrest") && !User.archaeology.includes(Items[Object.keys(Items)[i]][x].name)){
						done = false;
					}
				}
			}
			return done;
		},
		expand: {
			type: "redirect",
			text: "View in archaeology",
			location: "../archaeology/index.html?obtained=unidentified&area=eaglecrest",
			total: GetTotalItems(function(item) {
				return item.obtain.includes("unidentified") && item.area.includes("eaglecrest");
			}),
			value: function () {
				let done = 0;
				for(let i = 0; i < 7; i++){
					for(let x = 0; x < Items[Object.keys(Items)[i]].length; x++){
						if(Items[Object.keys(Items)[i]][x].unidentifiedArea !== undefined && Items[Object.keys(Items)[i]][x].unidentifiedArea.includes("eaglecrest") && User.archaeology.includes(Items[Object.keys(Items)[i]][x].name)){
							done++;
						}
					}
				}
				return done;
			},
		},
	},
	{
		name: "Caves Archaeologist",
		description: "Uncover all unidentified items in the Caves.",
		points: 20,
		category: ["archaeology"],
		area: ["caves"],
		image: "../assets/items/helm/41.png",
		class: "cumulative",
		isCompleted: function () {
			let done = true;
			for(let i = 0; i < 7; i++){
				for(let x = 0; x < Items[Object.keys(Items)[i]].length; x++){
					if(Items[Object.keys(Items)[i]][x].unidentifiedArea !== undefined && Items[Object.keys(Items)[i]][x].unidentifiedArea.includes("caves") && !User.archaeology.includes(Items[Object.keys(Items)[i]][x].name)){
						done = false;
					}
				}
			}
			return done;
		},
		expand: {
			type: "redirect",
			text: "View in archaeology",
			location: "../archaeology/index.html?obtained=unidentified&area=caves",
			total: GetTotalItems(function(item) {
				return item.obtain.includes("unidentified") && item.area.includes("caves");
			}),
			value: function () {
				let done = 0;
				for(let i = 0; i < 7; i++){
					for(let x = 0; x < Items[Object.keys(Items)[i]].length; x++){
						if(Items[Object.keys(Items)[i]][x].unidentifiedArea !== undefined && Items[Object.keys(Items)[i]][x].unidentifiedArea.includes("caves") && User.archaeology.includes(Items[Object.keys(Items)[i]][x].name)){
							done++;
						}
					}
				}
				return done;
			},
		},
	},
	{
		// id: 19,
		name: "Samhain Archaeologist I",
		description: "Obtain all tier I Samhain items.",
		points: 15,
		category: ["archaeology"],
		area: ["global"],
		event: "Samhain",
		image: "../assets/items/chest/7.png",
		class: "cumulative",
		isCompleted: function () {
			let done = true;
			for(let i = 0; i < 7; i++){
				for(let x = 0; x < Items[Object.keys(Items)[i]].length; x++){
					if(Items[Object.keys(Items)[i]][x].event === "Samhain" && !User.archaeology.includes(Items[Object.keys(Items)[i]][x].name)){
						done = false;
					}
				}
			}
			return done;
		},
		expand: {
			type: "redirect",
			text: "View in archaeology",
			location: "../archaeology/index.html?event=Samhain",
			total: GetTotalItems(function(item) {
				return item.event === "Samhain";
			}),
			value: function () {
				let done = 0;
				for(let i = 0; i < 7; i++){
					for(let x = 0; x < Items[Object.keys(Items)[i]].length; x++){
						if(Items[Object.keys(Items)[i]][x].event === "Samhain" && User.archaeology.includes(Items[Object.keys(Items)[i]][x].name)){
							done++;
						}
					}
				}
				return done;
			}
		},
	},
	{
		// id: 20,
		name: "Christmas Archaeologist I",
		description: "Obtain all tier I Christmas items.",
		points: 15,
		category: ["archaeology"],
		area: ["global"],
		event: "Christmas",
		image: "../assets/items/helm/7.png",
		class: "cumulative",
		isCompleted: function () {
			let done = true;
			for(let i = 0; i < 7; i++){
				for(let x = 0; x < Items[Object.keys(Items)[i]].length; x++){
					if(Items[Object.keys(Items)[i]][x].event === "Christmas" && !User.archaeology.includes(Items[Object.keys(Items)[i]][x].name)){
						done = false;
					}
				}
			}
			return done;
		},
		expand: {
			type: "redirect",
			text: "View in archaeology",
			location: "../archaeology/index.html?event=Christmas",
			total: GetTotalItems(function(item) {
				return item.event === "Christmas";
			}),
			value: function () {
				let done = 0;
				for(let i = 0; i < 7; i++){
					for(let x = 0; x < Items[Object.keys(Items)[i]].length; x++){
						if(Items[Object.keys(Items)[i]][x].event === "Christmas" && User.archaeology.includes(Items[Object.keys(Items)[i]][x].name)){
							done++;
						}
					}
				}
				return done;
			},
		},
	},
	{
		name: "I got a Golden Tool!",
		description: "Obtain a golden tool.",
		points: 15,
		category: ["archaeology"],
		area: ["global"],
		image: "../assets/items/bow/18.png",
		class: "cumulative",
		isCompleted: function () {
			return User.archaeology.includes("Golden Slingshot");
		},
	},
	{
		name: "Master Archaeologist",
		description: "Complete archaeology.",
		points: 100,
		category: ["archaeology"],
		area: ["global"],
		image: "../assets/items/helm/9.png",
		class: "cumulative",
		isCompleted: function () {
			return User.archaeology.includes("Master Archaeologist's Hat"); // owned only when all other items are owned
		},
		expand: {
			type: "redirect",
			text: "View in archaeology",
			location: "../archaeology/index.html",
			total: GetTotalItems(function(item){return true}),
			value: User.archaeology.length,
		},
	},
		//
		// MISC I (more important than misc ii)
		//
	{
		name: "Christmas Dinner",
		description: "Eat a mince pie and Christmas pudding, and wash it down with some mulled wine.",
		points: 5,
		category: ["general"],
		area: ["global"],
		event: "Christmas",
		image: "../assets/items/food/1.png",
		class: "single",
		isCompleted: function () {
			return Player.quests.questProgress.mincePie && Player.quests.questProgress.christmasPudding && Player.quests.questProgress.mulledWine;
		},
		expand: {
			type: "checkList",
			text: ["Mince Pie", "Christmas Pudding", "Mulled Wine"],
			complete: ["mincePie", "christmasPudding", "mulledWine"],
		},
	},
	{
		name: "Samhain Treats",
		description: "Eat a pumpkin pie and caramel apple, and drink a pumpkin brew.",
		points: 5,
		category: ["general"],
		area: ["global"],
		event: "Samhain",
		image: "../assets/items/food/7.png",
		class: "single",
		isCompleted: function () {
			return Player.quests.questProgress.pumpkinPie && Player.quests.questProgress.caramelApple && Player.quests.questProgress.pumpkinBrew;
		},
		expand: {
			type: "checkList",
			text: ["Pumpkin Pie", "Caramel Apple", "Pumpkin Brew"],
			complete: ["pumpkinPie", "caramelApple", "pumpkinBrew"],
		},
	},
	    //
	    // HARDCORE MODE
	    //
	{
		name: "Level 5: Hardcore",
		description: "Reach level 5 without any deaths.",
		points: 10,
		category: ["general"],
		area: ["global"],
		image: "../assets/achievements/level5.png", // tbd different image
		class: "single",
		isCompleted: function () {
			return Player.level >= 5 && Player.totalDeaths === 0;
		},
		expand: {
			type: "progressBar",
			value: AchievementFunctions.hardcoreMaxLevel,
			total: 5,
		},
	},
	{
		name: "Level 10: Hardcore",
		description: "Reach level 10 without any deaths.",
		points: 20,
		category: ["general"],
		area: ["global"],
		image: "../assets/achievements/level10.png", // tbd different image
		class: "single",
		isCompleted: function () {
			return Player.level >= 10 && Player.totalDeaths === 0;
		},
		expand: {
			type: "progressBar",
			value: AchievementFunctions.hardcoreMaxLevel,
			total: 10,
		},
	},
		//
		// FISHING
		//
	{
		// id: 21,
		name: "Learning to Fish",
		description: "Complete the introductory fishing quests.",
		points: 10,
		category: ["fishing", "quests"],
		area: ["global", "loggingCamp"],
		image: "../assets/items/rod/2.png",
		class: "single",
		isCompleted: function () {
			return Player.quests.completedQuestArray.includes("Learning to Fish III");
		},
		expand: {
			type: "checkList",
			text: ["A Lost Fishing Rod", "Learning to Fish I", "Learning to Fish II", "Learning to Fish III"],
			complete: ["A Lost Fishing Rod", "Learning to Fish I", "Learning to Fish II", "Learning to Fish III"],
			saved: "quest",
		},
	},
	{
		// id: 22,
		name: "Stacks of Seals I",
		description: "Obtain 20 fishing seals.",
		points: 10,
		category: ["fishing"],
		area: ["global"],
		image: "../assets/items/currency/3.png",
		class: "cumulative",
		isCompleted: function () {
			return User.progress.seals >= 20;
		},
		expand: {
			type: "progressBar",
			value: User.progress.seals,
			total: 20,
		},
	},
	{
		name: "Logging Camp Angler",
		description: "Fish up every fish native to Eaglecrest Logging Camp.",
		points: 10,
		category: ["fishing"],
		area: ["loggingCamp"],
		image: "../assets/items/fish/6.png",
		class: "cumulative",
		isCompleted: function () {
			let done = true;
			for(let i = 0; i < Items.fish.length; i++){
				if(Items.fish[i].areas[0] === "loggingCamp" && Items.fish[i].areas.length === 1 && Items.fish[i].fishingType === "fish" && User.fish[i] === 0 || Items.fish[i].areas[0] === "loggingCamp" && Items.fish[i].areas.length === 1 && Items.fish[i].fishingType === "fish" && User.fish[i] === null){
					done = false;
				}
			}
			return done;
		},
		expand: {
			type: "checkList",
			text: ["Yellow Perch", "Milkfish", "Saffron Cod", "Pink Salmon", "Sea Trout", "Cobia", "Dolphinfish"],
			complete: [0, 1, 2, 3, 4, 5, 6],
			//saved: "fish",
			// tbd link to fishers log
		},
	},
	{
		name: "Eaglecrest Plains Angler",
		description: "Fish up every fish native to Eaglecrest Plains.",
		points: 10,
		category: ["fishing"],
		area: ["eaglecrest"],
		image: "../assets/achievements/eaglecrestFishing.png",
		class: "cumulative",
		isCompleted: function () {
			let done = true;
			for(let i = 0; i < Items.fish.length; i++){
				if(Items.fish[i].areas[0] === "eaglecrest" && Items.fish[i].areas.length === 1 && Items.fish[i].fishingType === "fish" && User.fish[i] === 0 || Items.fish[i].areas[0] === "eaglecrest" && Items.fish[i].areas.length === 1 && Items.fish[i].fishingType === "fish" && User.fish[i] === null){
					done = false;
				}
			}
			return done;
		},
		expand: {
			type: "checkList",
			text: ["Fallfish", "Grayling", "Rudd", "Weatherfish", "Asp", "Ide", "Goliath Grouper", "Oscar"],
			complete: [24, 25, 26, 27, 28, 29, 30, 31],
			//saved: "fish",
			// tbd link to fishers log
		},
	},
	{
		name: "Novice Fisher",
		description: "Fish up 100 fish.",
		points: 10,
		category: ["fishing"],
		area: ["global"],
		image: "../assets/items/fish/0.png",
		class: "cumulative",
		isCompleted: function () {
			return User.progress.fish >= 100;
		},
		expand: {
			type: "progressBar",
			value: User.progress.fish,
			total: 100,
		},
	},
	{
		name: "Adept Fisher",
		description: "Fish up 300 fish.",
		points: 10,
		category: ["fishing"],
		area: ["global"],
		image: "../assets/items/fish/3.png",
		class: "cumulative",
		isCompleted: function () {
			return User.progress.fish >= 300;
		},
		expand: {
			type: "progressBar",
			value: User.progress.fish,
			total: 300,
		},
	},
	{
		name: "Intermediate Fisher",
		description: "Fish up 600 fish.",
		points: 10,
		category: ["fishing"],
		area: ["global"],
		image: "../assets/items/fish/2.png",
		class: "cumulative",
		isCompleted: function () {
			return User.progress.fish >= 600;
		},
		expand: {
			type: "progressBar",
			value: User.progress.fish,
			total: 600,
		},
	},
	{
		name: "Expert Fisher",
		description: "Fish up 1000 fish.",
		points: 10,
		category: ["fishing"],
		area: ["global"],
		image: "../assets/items/fish/1.png",
		class: "cumulative",
		isCompleted: function () {
			return User.progress.fish >= 1000;
		},
		expand: {
			type: "progressBar",
			value: User.progress.fish,
			total: 1000,
		},
	},
	{
		name: "Master Fisher",
		description: "Fish up 1,500 fish.",
		points: 25,
		category: ["fishing"],
		area: ["global"],
		image: "../assets/items/fish/5.png",
		class: "cumulative",
		isCompleted: function () {
			return User.progress.fish >= 1500;
		},
		expand: {
			type: "progressBar",
			value: User.progress.fish,
			total: 1500,
		},
	},
	{
		name: "How Chimerical!",
		description: "Fish up a chimerafish.",
		points: 25,
		hidden: true,
		category: ["fishing"],
		area: ["global"],
		image: "../assets/items/fish/7.png",
		class: "single",
		isCompleted: function () {
			return User.fish[7] >= 1;
		},
	},
	{
		name: "That's Not a Fish!!",
		description: "Kill the Lake Lurker.",
		points: 10,
		category: ["fishing", "combat"],
		area: ["eaglecrest"],
		image: "../assets/enemies/seaMonster.png",
		position: {x: 50, y: -1},
		class: "single",
		isCompleted: function () {
			return Player.bossesKilled.lakeLurker !== 0 && Player.bossesKilled.lakeLurker !== undefined;
		}
	},
	{
		name: "Legacy of Captain Calaca",
		description: "Last hit the Lake Lurker with your weapon.",
		points: 5,
		category: ["fishing", "combat"],
		area: ["eaglecrest"],
		image: "../assets/items/bow/13.png",
		class: "single",
		isCompleted: function () {
			return User.progress.legacyOfCaptainCalaca;
		}
	},
	//
	// SEASONAL FISHING
	//
	{
		name: "Saviour of Christmas",
		description: "Complete the quest <em>Sunken Presents</em>.",
		points: 5,
		category: ["fishing", "quests"],
		area: ["loggingCamp"],
		event: "Christmas",
		image: "../assets/items/fish/21.png",
		color: "#cd7f32",
		class: "single",
		isCompleted: function () {
			return Player.quests.completedQuestArray.includes("Sunken Presents");
		},
	},

	//
	// MISC II (quest challenges etc)
	//

	{
		name: "Quality Assured!",
		description: "Complete the 'Quality Assurance' minigame with a score of 100%.",
		points: 5,
		category: ["quests"],
		area: ["eaglecrest"],
		image: "../assets/achievements/qualityAssurance.png",
		class: "single",
		isCompleted: function () {
			return User.progress.qualityAssuranceAchievement === true;
		},
	},
	{
		name: "Where's my Reward?!",
		description: "Find Smudge.",
		points: 5,
		category: ["quests"],
		area: ["eaglecrest"],
		image: "../assets/achievements/pawPrint.png",
		class: "single",
		isCompleted: function () {
			return false;
		},
	},
	{
		name: "Enlightened Kitty",
		description: "Meet the divine (???) and live to tell the tale!",
		hidden: true,
		points: 5,
		category: ["quests"],
		area: ["eaglecrest"],
		image: "../assets/items/item/33.png",
		class: "single",
		isCompleted: function () {
			return false;
		},
	},

	/*{
        name: "Speedy Cat",
        description: "Complete Tamtam's obstacle course in less than .",
		hidden: true,
        points: 5,
        category: ["quests"],
        area: ["eaglecrest"],
        image: "../assets/items/consumable/10.png",
        class: "single",
        isCompleted: function () {
            return false;
        },
    },*/

	//
	// MISC III (seasonal quests etc)
	//

	{
		name: "Master of Tag",
		description: "Win a multiplayer game of tag with 5 or more players.",
		points: 5,
		category: ["general"],
		area: ["global"],
		image: "../assets/items/consumable/22.png",
		class: "single",
		isCompleted: function () {
			return User.progress.tagAchievement === true;
		},
	},

	{
        name: "A Blood Moon is Rising...",
        description: "Assist in the rising of a blood moon.",
        points: 5,
        category: ["quests"],
        area: ["eaglecrest"],
        event: "Samhain",
        image: "../assets/items/consumable/10.png",
        color: "#540606",
        class: "single",
        isCompleted: function () {
            return Player.quests.questProgress.bloodMoonUnlocked;
        },
    },
	{
		name: "Santa's Helper",
		description: "Deliver 15 presents.",
		points: 5,
		category: ["fishing"],
		area: ["global"],
		image: "../assets/achievements/present.png",
		color: "lightgray",
		class: "cumulative",
		isCompleted: function () {
			return User.progress.presentsDelivered >= 15;
		},
		expand: {
			type: "progressBar",
			value: User.progress.presentsDelivered,
			total: 15,
		},
	},
	{
		name: "Present Collector",
		description: "Open 10 presents.",
		points: 5,
		category: ["general"],
		area: ["global"],
		image: "../assets/items/consumable/34.png",
		color: "lightgray",
		class: "cumulative",
		isCompleted: function () {
			return User.progress.presentsOpened >= 10;
		},
		expand: {
			type: "progressBar",
			value: User.progress.presentsOpened,
			total: 10,
		},
	},
	/*{
		name: "Present Hoarder",
		description: "Open 25 presents.",
		points: 10,
		category: ["fishing", "general"],
		area: ["global"],
		image: "../assets/items/consumable/34.png",
		color: "#fac540",
		class: "cumulative",
		isCompleted: function () {
			return User.progress.presentsOpened >= 25;
		},
		expand: {
			type: "progressBar",
			value: User.progress.presentsOpened,
			total: 25,
		},
	},*/
];
