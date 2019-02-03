var User = JSON.parse(localStorage.getItem("user"));
var Achievements = [
		// GENERAL
	{
		// id: 0,
		name: "Level 5",
		description: "Reach level 5.",
		points: 5,
		category: ["general"],
		area: ["global"],
		image: "../assets/achievements/level5.png",
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
		isCompleted: function(){
			return Player.quests.questProgress.mincePie && Player.quests.questProgress.christmasPudding && Player.quests.questProgress.mulledWine;
		},
		expand: {
			type: "checkList",
			text: ["Mince Pie", "Christmas Pudding", "Mulled Wine"],
			complete: ["mincePie", "christmasPudding", "mulledWine"],
		},
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
		},
		expand: {
			type: "progressBar",
			value: User.progress.dailyQuests,
			total: 50,
		},
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
		},
		expand: {
			type: "progressBar",
			value: User.progress.quests,
			total: 50,
		},
	},
	{
		// id: 4,
		name: "Logging Camp Questmaster",
		description: "Complete all 16 non-event quests in Eaglecrest Logging Camp.",
		points: 10,
		category: ["quests"],
		area: ["eaglecrestLoggingCamp"],
		image: "../assets/npcs/teper.png",
		position: {x: 117,y: -10},
		color: "#ddddff",
		class: "single",
		isCompleted: function(){ // REMOVE FISHING QUESTS
			let done = true;
			for(let i = 0; i < Quests.eaglecrestLoggingCamp.length; i++){
				if(Quests.eaglecrestLoggingCamp[i].eventRequirement === undefined && Quests.eaglecrestLoggingCamp[i].repeatTime === undefined && !Player.quests.completedQuestArray.includes(Quests.eaglecrestLoggingCamp[i].quest)){
					done = false;
				}
			}
			return done;
		},
		expand: {
			type: "checkList",
			text: ["To the Logging Camp", "Learning from the Best", "Combat Training", "Retrieval of Logs", "Making Yourself Useful", "First Class Recovery", "A Lost Fishing Rod", "Strengthening Defences", "The Sceptre of Souls", "Another Man's Treasure", "Fire Power", "Potion Making", "Potion Making II", "The Goblin King", "Partners in Goblin Destruction", "A 'Spark' of Imagination"],
			complete: ["To the Logging Camp", "Learning from the Best", "Combat Training", "Retrieval of Logs", "Making Yourself Useful", "First Class Recovery", "A Lost Fishing Rod", "Strengthening Defences", "The Sceptre of Souls", "Another Man's Treasure", "Fire Power", "Potion Making", "Potion Making II", "The Goblin King", "Partners in Goblin Destruction", "A 'Spark' of Imagination"],
			saved: "quest",
		},
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
		isCompleted: function(){
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
		isCompleted: function(){
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
		isCompleted: function(){
			return User.progress.enemies >= 5000;
		},
		expand: {
			type: "progressBar",
			value: User.progress.enemies,
			total: 5000,
		},
	},
	{
		// id: 9,
		name: "Master Combatant",
		description: "Kill 10,000 enemies.",
		points: 25,
		category: ["combat"],
		area: ["global"],
		image: "../assets/achievements/masterCombatant.png",
		class: "cumulative",
		isCompleted: function(){
			return User.progress.enemies >= 10000;
		},
		expand: {
			type: "progressBar",
			value: User.progress.enemies,
			total: 10000,
		},
	},
	{
		// id: 10,
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
		},
		expand: {
			type: "progressBar",
			value: User.progress.goblins,
			total: 100,
		},
	},
	{
		// id: 11,
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
		},
		expand: {
			type: "progressBar",
			value: User.progress.goblins,
			total: 250,
		},
	},
	{
		// id: 12,
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
		},
		expand: {
			type: "progressBar",
			value: User.progress.goblins,
			total: 500,
		},
	},
	{
		// id: 13,
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
        name: "The Slayer of the Tattered Knight",
        description: "Kill the Tattered Knight.",
        points: 5,
        category: ["combat"],
        area: ["eaglecrestLoggingCamp"],
        event: "Antorax",
        image: "../assets/enemies/tatteredKnight.png",
        position: {x: 90, y: -1},
        color: "#ddddff",
        class: "single",
        isCompleted: function(){
            return Player.bossesKilled.tatteredKnight !== 0;
        }
    },
	{
		// id: 14,
		name: "Outgrowing your Toys",
		description: "Destroy a target dummy.",
		hidden: true,
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
		// id: 15,
		name: "Tree Hugger",
		description: "Reach venerated reputation with Eaglecrest Logging Camp.",
		points: 20,
		category: ["reputation"],
		area: ["eaglecrestLoggingCamp"],
		image: "../assets/achievements/loggingCamp.png",
		size: "contain",
		class: "single",
		isCompleted: function(){
			return Player.reputation.eaglecrestLoggingCamp.level >= 6;
		}
	},
		// ARCHAEOLOGY
	{
		// id: 16,
		name: "Logging Camp Archaeologist",
		description: "Uncover all unidentified items in Eaglecrest Logging Camp.",
		points: 20,
		category: ["archaeology"],
		area: ["eaglecrestLoggingCamp"],
		image: "../assets/items/helm/5.png",
		class: "cumulative",
		isCompleted: function(){
			let done = true;
			for(let i = 0; i < 7; i++){
				for(let x = 0; x < Items[Object.keys(Items)[i]].length; x++){
					if(Items[Object.keys(Items)[i]][x].area === "loggingCamp" && !User.archaeology.includes(Items[Object.keys(Items)[i]][x].name)){
						done = false;
					}
				}
			}
			return done;
		}
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
		isCompleted: function(){
			return User.archaeology.includes("The Set of the Ocean Warrior");
		}
	},
	{
		// id: 18,
		name: "Master Archaeologist",
		description: "Complete archaeology.",
		points: 100,
		category: ["archaeology"],
		area: ["global"],
		image: "../assets/items/helm/9.png",
		class: "cumulative",
		isCompleted: function(){
			return User.archaeology.includes("Master Archaeologist's Hat");
		}
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
		isCompleted: function(){
			let done = true;
			for(let i = 0; i < 7; i++){
				for(let x = 0; x < Items[Object.keys(Items)[i]].length; x++){
					if(Items[Object.keys(Items)[i]][x].event === "Samhain" && !User.archaeology.includes(Items[Object.keys(Items)[i]][x].name)){
						done = false;
					}
				}
			}
			return done;
		}
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
		isCompleted: function(){
			let done = true;
			for(let i = 0; i < 7; i++){
				for(let x = 0; x < Items[Object.keys(Items)[i]].length; x++){
					if(Items[Object.keys(Items)[i]][x].event === "Christmas" && !User.archaeology.includes(Items[Object.keys(Items)[i]][x].name)){
						done = false;
					}
				}
			}
			return done;
		}
	},
		// FISHING
	{
		// id: 21,
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
		// id: 22,
		name: "Stacks of Seals I",
		description: "Obtain 20 fishing seals.",
		points: 10,
		category: ["fishing"],
		area: ["global"],
		image: "../assets/items/currency/3.png",
		class: "cumulative",
		isCompleted: function(){
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
		area: ["eaglecrestLoggingCamp"],
		image: "../assets/items/fish/6.png",
		class: "cumulative",
		isCompleted: function(){
			let done = true;
			for(let i = 0; i < Items.fish.length; i++){
				if(Items.fish[i].areas[0] === "loggingCamp" && Items.fish[i].areas.length === 1 && Items.fish[i].fishingType === "fish" && User.fish[i] === 0){
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
		},
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
		isCompleted: function(){
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
		isCompleted: function(){
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
		isCompleted: function(){
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
		isCompleted: function(){
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
