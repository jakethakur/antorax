var Achievements = [
		// GENERAL
	{
		// id: 0,
		name: "Level 5",
		description: "Reach level 5.",
		points: 5,
		category: ["general"],
		area: ["global"],
		image: "../assets/icons/level5.png",
		class: "single",
		isCompleted: function(){
			return Player.level >= 5;
		}
	},
	{
		// id: 1,
		name: "Christmas Meal",
		description: "Eat a mince pie, Christmas pudding, wash it down with some mulled wine.",
		points: 5,
		category: ["general"],
		area: ["global"],
		event: ["Christmas"],
		image: "../assets/items/food/1.png",
		class: "single",
	},
		// QUESTS
	{
		// id: 2,
		name: "Daily Quester I",
		description: "Complete 50 daily quests.",
		points: 10,
		category: ["quests"],
		area: ["global"],
		image: "../assets/icons/dailyQuests.png",
		class: "cumulative",
		isCompleted: function(){
			return User.progress.dailyQuests >= 50;
		}
	},
	{
		// id: 3,
		name: "Questmaster I",
		description: "Complete 50 quests.",
		points: 10,
		category: ["quests"],
		area: ["global"],
		image: "../assets/icons/quests.png",
		class: "cumulative",
		isCompleted: function(){
			return User.progress.quests >= 50;
		}
	},
	{
		// id: 4,
		name: "Logging Camp Questmaster",
		description: "Complete all 20 non-event quests in Eaglecrest Logging Camp.",
		points: 10,
		category: ["quests"],
		area: ["eaglecrestLoggingCamp"],
		image: "../assets/npcs/teper.png",
		position: {x: 117,y: -10},
		color: "#ddddff",
		class: "single",
		isCompleted: function(){ // REMOVE FISHING QUESTS
			let progress = 0;
			for(let i = 0; i < Quests.eaglecrestLoggingCamp.length; i++){
				if(Quests.eaglecrestLoggingCamp[i].eventRequirement === undefined){
					progress++;
				}
			}
			return progress >= 20;
		}
	},
		// COMBAT
	{
		// id: 5,
		name: "Novice Combatant",
		description: "Kill 300 enemies.",
		points: 10,
		category: ["combat"],
		area: ["global"],
		image: "../assets/items/sword/3.png",
		class: "cumulative",
		isCompleted: function(){
			return User.progress.enemies >= 300;
		}
	},
	{
		name: "Adept Combatant",
		description: "Kill 1,000 enemies.",
		points: 10,
		category: ["combat"],
		area: ["global"],
		image: "../assets/items/bow/4.png",
		class: "cumulative",
		isCompleted: function(){
			return User.progress.enemies >= 1000;
		}
	},
	{
		name: "Intermediate Combatant",
		description: "Kill 2,500 enemies.",
		points: 10,
		category: ["combat"],
		area: ["global"],
		image: "../assets/items/staff/5.png",
		class: "cumulative",
		isCompleted: function(){
			return User.progress.enemies >= 2500;
		}
	},
	{
		name: "Expert Combatant",
		description: "Kill 5,000 enemies.",
		points: 10,
		category: ["combat"],
		area: ["global"],
		image: "../assets/items/sword/6.png",
		class: "cumulative",
		isCompleted: function(){
			return User.progress.enemies >= 5000;
		}
	},
	{
		name: "Master Combatant",
		description: "Kill 10,000 enemies.",
		points: 25,
		category: ["combat"],
		area: ["global"],
		image: "",
		class: "cumulative",
		isCompleted: function(){
			return User.progress.enemies >= 10000;
		}
	},
	{
		name: "Goblin Slayer Bronze",
		description: "Kill 100 Nilbog goblins.",
		points: 10,
		category: ["combat"],
		area: ["eaglecrestLoggingCamp"],
		image: "../assets/enemies/goblinRockthrower.png",
		position: {x: 45, y: -15},
		color: "#cd7f32",
		class: "cumulative",
		isCompleted: function(){
			return User.progress.goblins >= 100;
		}
	},
	{
		name: "Goblin Slayer Silver",
		description: "Kill 250 Nilbog goblins.",
		points: 10,
		category: ["combat"],
		area: ["eaglecrestLoggingCamp"],
		image: "../assets/enemies/goblinBruiser.png",
		position: {x: 10, y: -15},
		color: "lightgray",
		class: "cumulative",
		isCompleted: function(){
			return User.progress.goblins >= 250;
		}
	},
	{
		name: "Goblin Slayer Gold",
		description: "Kill 500 Nilbog goblins.",
		points: 10,
		category: ["combat"],
		area: ["eaglecrestLoggingCamp"],
		image: "../assets/enemies/goblinCrusader.png",
		position: {x: -200, y: -10},
		color: "#fac540",
		class: "cumulative",
		isCompleted: function(){
			return User.progress.goblins >= 500;
		}
	},
	{
		name: "Green-Skinned Assault",
		description: "Kill the Goblin King.",
		points: 5,
		category: ["combat"],
		area: ["eaglecrestLoggingCamp"],
		image: "../assets/enemies/goblinKing.png",
		position: {x: 57, y: 0},
		color: "#ddddff",
		class: "single",
		isCompleted: function(){
			return Player.bossesKilled.goblinKing !== 0;
		}
	},
	{
		name: "Outgrowing your Toys",
		description: "???",
		points: 10,
		category: ["combat"],
		area: ["global", "eaglecrestLoggingCamp"],
		image: "../assets/enemies/dummy.png",
		color: "#ddddff",
		class: "single",
		isCompleted: function(){
			return User.progress.dummies >= 1;
		}
	},
		// REPUTATION
	{
		name: "Tree Hugger",
		description: "Reach venerated reputation with Eaglecrest Logging Camp.",
		points: 20,
		category: ["reputation"],
		area: ["eaglecrestLoggingCamp"],
		image: "",
		class: "single",
		isCompleted: function(){
			return Player.reputation.eaglecrestLoggingCamp.level >= 6;
		}
	},
		// ARCHAEOLOGY
	{
		name: "Logging Camp Archaeologist",
		description: "Uncover all unidentified items in Eaglecrest Logging Camp.",
		points: 20,
		category: ["archaeology"],
		area: ["eaglecrestLoggingCamp"],
		image: "../assets/items/helm/5.png",
		class: "cumulative",
	},
	{
		name: "Return of the Ocean Warrior",
		description: "Uncover the Set of the Ocean Warrior.",
		points: 10,
		category: ["archaeology", "fishing"],
		area: ["global"],
		image: "../assets/items/helm/6.png",
		class: "single",
	},
	{
		name: "Master Archaeologist",
		description: "Complete archaeology.",
		points: 100,
		category: ["archaeology"],
		area: ["global"],
		image: "",
		class: "cumulative",
	},
	{
		name: "Samhain Archaeologist I",
		description: "Obtain all tier I Samhain items.",
		points: 15,
		category: ["archaeology"],
		area: ["global"],
		event: "Samhain",
		image: "../assets/items/chest/7.png",
		class: "cumulative",
	},
	{
		name: "Christmas Archaeologist I",
		description: "Obtain all tier I Christmas items.",
		points: 15,
		category: ["archaeology"],
		area: ["global"],
		event: "Christmas",
		image: "../assets/items/helm/7.png",
		class: "cumulative",
	},
		// FISHING
	{
		name: "Learning to Fish",
		description: "Complete the introductory fishing quests.",
		points: 10,
		category: ["fishing", "quests"],
		area: ["global", "eaglecrestLoggingCamp"],
		image: "../assets/items/rod/2.png",
		class: "single",
		isCompleted: function(){
			return Player.quests.completedQuestArray.includes("Learning to Fish III");
		}
	},
	{
		name: "Stacks of Seals I",
		description: "Obtain 20 fishing seals.",
		points: 10,
		category: ["fishing"],
		area: ["global"],
		image: "../assets/items/currency/3.png",
		class: "cumulative",
		isCompleted: function(){
			return User.progress.seals >= 20;
		}
	},
	{
		name: "Logging Camp Angler",
		description: "Fish up every fish native to Eaglecrest Logging Camp.",
		points: 10,
		category: ["fishing"],
		area: ["eaglecrestLoggingCamp"],
		image: "../assets/items/fish/6.png",
		class: "cumulative",
	},
	{
		name: "Saviour of Christmas",
		description: "Complete the quest <em>Sunken Presents</em>.",
		points: 5,
		category: ["fishing", "quests"],
		area: ["eaglecrestLoggingCamp"],
		event: "Christmas",
		image: "../assets/items/fish/21.png",
		class: "single",
		isCompleted: function(){
			return Player.quests.completedQuestArray.includes("Sunken Presents");
		}
	},
	{
		name: "Novice Fisher",
		description: "Fish up 100 fish.",
		points: 10,
		category: ["fishing"],
		area: ["global"],
		image: "../assets/items/fish/0.png",
		class: "cumulative",
		isCompleted: function(){
			return User.progress.fish >= 100;
		}
	},
	{
		name: "Adept Fisher",
		description: "Fish up 300 fish.",
		points: 10,
		category: ["fishing"],
		area: ["global"],
		image: "../assets/items/fish/3.png",
		class: "cumulative",
		isCompleted: function(){
			return User.progress.fish >= 300;
		}
	},
	{
		name: "Intermediate Fisher",
		description: "Fish up 600 fish.",
		points: 10,
		category: ["fishing"],
		area: ["global"],
		image: "../assets/items/fish/2.png",
		class: "cumulative",
		isCompleted: function(){
			return User.progress.fish >= 600;
		}
	},
	{
		name: "Expert Fisher",
		description: "Fish up 1000 fish.",
		points: 10,
		category: ["fishing"],
		area: ["global"],
		image: "../assets/items/fish/1.png",
		class: "cumulative",
		isCompleted: function(){
			return User.progress.fish >= 1000;
		}
	},
	{
		name: "Master Fisher",
		description: "Fish up 1,500 fish.",
		points: 25,
		category: ["fishing"],
		area: ["global"],
		image: "../assets/items/fish/5.png",
		class: "cumulative",
		isCompleted: function(){
			return User.progress.fish >= 1500;
		}
	},
	{
		name: "How Chimerical!",
		description: "Fish up a chimerafish.",
		points: 25,
		category: ["fishing"],
		area: ["global"],
		image: "../assets/items/fish/7.png",
		class: "single",
		isCompleted: function(){
			return User.fish[7] >= 1;
			/*for(let i = 0; i < Player.inventory.items.length; i++){
				if(Player.inventory.items[i].name === "Chimerafish"){
					return true;
				}
			}*/
		}
	},
]
