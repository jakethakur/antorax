var Quests = {
	loggingCampNew: [
		{
			id: 0,
			quest: "To the Logging Camp",
			questArea: "eaglecrestLoggingCamp", // name of the array this is contained in

			important: true, // appears at top of quest log and choose dom

			questType: "storyline",

			steps: [
				{
					stepNum: 0,
					chat: [{
						text: `That's it, we're here!`,
					},{
						text: `I'm afraid you're going to have to walk to the <strong>Eaglecrest Logging Camp</strong> on your own from here. `,
					},{
						text: `If you walk down a bit to the west you should see the entrance to the camp.`,
					},{
						text: `Oh, and you should probably buy a weapon on your way there...`,
					},],
				},
				{
					stepNum: 1,
					chat: [{
						text: `Welcome to the Eaglecrest Logging Camp, adventurer. It's useful to have you here. I hope your journey was fine.`,
					},{
						text: `Take this gold and pair of boots. They're provided by the King's Covenant to all new adventurers.`,
					},{
						text: `Now, you'll need to learn how to fight if you can be of any worth here - there are goblins out there, and they'll want you dead.`,
					},{
						text: `Go and see <strong>Combat Trainer Saral</strong>. She's more skilled in combat than anyone else here.`,
					},],
					rewards: {
						xp: 10,
						items: [
							{item: Items.boots[2],},
							{item: Items.currency[2], quantity: 2,},
						],
					},
					onFinish: function () {
						Dom.instructions.page(6);
					}
				},
			],

			objectivesList: [
				{id: 0, text: "Buy a weapon from a nearby weaponsmith.",
					isCompleted: function () {
						let completed = Dom.inventory.check(2, "sword", 1) || Dom.inventory.check(2, "staff", 1) || Dom.inventory.check(2, "bow", 1)
						if (completed) {
							// tutorial
							Game.setTimeout(function () {
								if (Player.tutorialProgress === 3 && Game.areaName === "tutorial") {
									Dom.instructions.page(4);
								}
							}, 2000);
						}
						return completed;
					}
				},
				{id: 1, text: "Speak to <strong>Marshall Teper</strong>.",
					completeStep: 1, // if this step is completed, then this objective is always completed
				},
			],

			howToStart: "Speak to the <strong>Cart Driver</strong>.",
			levelRequirement: 1,
			questRequirements: [],
			requirement: function () {
				return Player.tutorialProgress === 1 || Player.skipTutorial;
			},

			onQuestStart: function() {
				Dom.instructions.page(2);
			},
		},
	],
	eaglecrestLoggingCamp: [ // old quests - should be moved over to loggingCampNew
		{
			id: 0,
			quest: "To the Logging Camp",
			questArea: "eaglecrestLoggingCamp", // name of the array this is contained in

			important: true, // appears at top of quest log and choose dom

			questType: "storyline",

			steps: [
				{
					stepNum: 0,
					chat: [{
						text: `That's it, we're here!`,
					},{
						text: `I'm afraid you're going to have to walk to the <strong>Eaglecrest Logging Camp</strong> on your own from here. `,
					},{
						text: `If you walk down a bit to the west you should see the entrance to the camp.`,
					},{
						text: `Oh, and you should probably buy a weapon on your way there...`,
					},],
				},
				{
					stepNum: 1,
					chat: [{
						text: `Welcome to the Eaglecrest Logging Camp, adventurer. It's useful to have you here. I hope your journey was fine.`,
					},{
						text: `Take this gold and pair of boots. They're provided by the King's Covenant to all new adventurers.`,
					},{
						text: `Now, you'll need to learn how to fight if you can be of any worth here - there are goblins out there, and they'll want you dead.`,
					},{
						text: `Go and see <strong>Combat Trainer Saral</strong>. She's more skilled in combat than anyone else here.`,
					},],
					rewards: {
						xp: 10,
						items: [
							{item: Items.boots[2],},
							{item: Items.currency[2], quantity: 2,},
						],
					},
					onFinish: function () {
						Dom.instructions.page(6);
					}
				},
			],

			objectivesList: [
				{id: 0, text: "Buy a weapon from a nearby weaponsmith.",
					isCompleted: function () {
						let completed = Dom.inventory.check(2, "sword", 1) || Dom.inventory.check(2, "staff", 1) || Dom.inventory.check(2, "bow", 1)
						if (completed) {
							// tutorial
							Game.setTimeout(function () {
								if (Player.tutorialProgress === 3 && Game.areaName === "tutorial") {
									Dom.instructions.page(4);
								}
							}, 2000);
						}
						return completed;
					}
				},
				{id: 1, text: "Speak to <strong>Marshall Teper</strong>.",
					completeStep: 1, // if this step is completed, then this objective is always completed
				},
			],

			howToStart: "Speak to the <strong>Cart Driver</strong>.",
			levelRequirement: 1,
			questRequirements: [],
			requirement: function () {
				return Player.tutorialProgress === 1 || Player.skipTutorial;
			},

			onQuestStart: function() {
				Dom.instructions.page(2);
			},
		},

		{
			id: 1,
			quest: "Learning from the Best",
			questArea: "eaglecrestLoggingCamp",

			important: true,
			questType: "storyline",

			startName: "Mashall Teper",
			startChat: [],

			finishName: "Combat Trainer Saral",
			finishChat: [{
				text: `Why hello, ${Player.name}. I always love new blood in the Logging Camp. Now let's get started, shall we?`,
			},],

			objectives: [
				"Equip your weapon in the inventory.",
				"Speak to <strong>Combat Trainer Saral</strong>.",
			],

			isCompleted: function() {
				let completed = [];

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(Player.inventory.weapon.type === "bow" || Player.inventory.weapon.type === "staff" || Player.inventory.weapon.type === "sword");

				if (completed[0] && Player.tutorialProgress === 7) {
					// tutorial
					Game.setTimeout(function () {
						if (Player.tutorialProgress === 7 && typeof Dom.currentNPC.name === "undefined") {
							Dom.instructions.page(8);
						}
					}, 5000)
				}

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to <strong>Marshall Teper</strong>.",
			levelRequirement: 1,
			questRequirements: ["To the Logging Camp"],

			rewards: {
				xp: 10,
			},

			onQuestStart: function() {
				Dom.instructions.page(7);
			},

			onQuestFinish: function() {
				Dom.instructions.page(9);
			},
		},

		{
			id: 2,
			quest: "Combat Training",
			questArea: "eaglecrestLoggingCamp",

			important: true,

			startName: "Combat Trainer Saral",
			startChat: [{
				text: `${Player.name}, I'd like for you to deal some damage to this <strong>Training Dummy</strong>. 10 should suffice.`,
			},],

			finishName: "Combat Trainer Saral",
			finishChat: [{
				text: `Well done. It's inspiring to watch a new adventurer learn their ways - I look forward to seeing more of you in the future.`,
			},{
				text: `I imagine <strong>Marshall Teper</strong> would like for you to get to work with him now.`,
			},],

			objectives: [
				"Deal at least 10 damage to the <strong>Training Dummy</strong>.",
				"Speak to <strong>Combat Trainer Saral</strong>.",
			],

			isCompleted: function() {
				let completed = [];

				// true or falses for each objective (apart from the turn-in objective)
				// quest must be finished in Eaglecrest Logging Camp, hence Game.dummies[0] is always the right dummy
				completed.push(typeof Game.dummies !== "undefined" && typeof Game.dummies[0] !== "undefined" && checkProgress(Game.dummies[0].damageTaken, 10));

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to <strong>Combat Trainer Saral</strong>.",
			levelRequirement: 1,
			questRequirements: ["Learning from the Best"],

			rewards: {
				xp: 20,
				items: [
					{item: Items.currency[2], quantity: 3,},
				],
			},

			onQuestStart: function() {
				Dom.instructions.page(10);
			},

			onQuestFinish: function() {
				Dom.instructions.page(11);
			},
		},

		{
			id: 3,
			quest: "Retrieval of Logs",
			questArea: "eaglecrestLoggingCamp",

			important: true,

			startName: "Marshall Teper",
			startChat: [{
				text: `You looked good enough at the training dummy to go out to <strong>The Nilbog</strong>.`,
			},{
				text: `It's a camp of some goblins, but trust me - they're not much stronger than that dummy you just fought.`,
			},{
				text: `They recently invaded our camp in huge numbers, and managed to steal some logs of wood whilst we were fighting them off.`,
			},{
				text: `Head <b>east</b> to <strong>The Nilbog</strong> and retrieve some wood from them, and return it to me.`,
			},],

			finishName: "Marshall Teper",
			finishChat: [{
				text: `Good. Now we need to make sure that a goblin attack like this won't happen again.`,
			},],

			objectives: [
				"Retrieve 4 logs from The Nilbog to the <b>east</b>. <em>(press space whilst standing on one to pick it up)</em>",
				"Speak to <strong>Marshall Teper</strong>.",
			],

			isCompleted: function() {
				let completed = [];

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(checkProgress(Dom.inventory.check(2, "item"), 4));

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to <strong>Marshall Teper</strong>.",
			levelRequirement: 1,
			questRequirements: ["Combat Training"],

			rewards: {
				xp: 30,
				items: [
					{item: Items.currency[2], quantity: 2,},
					{item: Items.bag[2],}, // logging sack
				],
				reputation: {
					eaglecrestLoggingCamp: 50,
				},
			},

			removeItems: [
				{item: Items.item[2], quantity: 4,}, // logs
			],

			onQuestFinish: function() {
				// unlock reputation tab
				Dom.instructions.page(13);
			}
		},
		{
			id: 4,
			quest: "More Logs",
			questArea: "eaglecrestLoggingCamp",

			startName: "Marshall Teper",
			startChat: [{
				text: `There's still more logs out there in The Nilbog. We need to retrieve some more.`,
			},],

			finishName: "Marshall Teper",
			finishChat: [{
				text: `Good. Sometimes it feels like you're the only one that wants to work around here.`,
			},{
				text: `Come back tomorrow and we can retrieve some more.`,
			},],

			objectives: [
				"Retrieve 4 logs from The Nilbog.",
				"Speak to <strong>Marshall Teper</strong>.",
			],

			isCompleted: function() {
				let completed = [];

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(checkProgress(Dom.inventory.check(2, "item"), 4));

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to <strong>Marshall Teper</strong>.",
			levelRequirement: 3,
			questRequirements: ["Making Yourself Useful"],
			repeatTime: "daily",

			rewards: {
				xp: 30,
				items: [
					{item: Items.currency[2], quantity: 1,},
				],
				reputation: {
					eaglecrestLoggingCamp: 50,
				},
			},

			removeItems: [
				{item: Items.item[2], quantity: 4,}, // logs
			],
		},

		{
			id: 5,
			quest: "Making Yourself Useful",
			questArea: "eaglecrestLoggingCamp",

			important: true,

			startName: "Marshall Teper",
			startChat: [{
				text: `There's lots going on around the Logging Camp at the moment, especially after the goblin attack.`,
			},{
				text: `Make yourself known to the people in the camp and see if there's anyone that could use your help.`,
			},],

			finishName: "Marshall Teper",
			finishChat: [{
				text: `You made quick work of that. It is time for you to head to the city soon, but first we need to get to the root of this goblin issue.`,
			},],

			objectives: [
				"Help 3 people around the Logging Camp.",
				"Speak to <strong>Marshall Teper</strong>.",
			],

			isCompleted: function() {
				let completed = [];

				// true or falses for each objective (apart from the turn-in objective)
				let peopleHelped = 0; // count number of people that the player has helped
				if (Player.quests.completedQuestArray.includes("First Class Recovery")) { peopleHelped++; }
				if (Player.quests.completedQuestArray.includes("Strengthening Defences")) { peopleHelped++; }
				if (Player.quests.completedQuestArray.includes("The Sceptre of Souls")) { peopleHelped++; }
				if (Player.quests.completedQuestArray.includes("Another Man's Treasure")) { peopleHelped++; }
				if (Player.quests.completedQuestArray.includes("Fire Power")) { peopleHelped++; }
				if (Player.quests.completedQuestArray.includes("Potion Making")) { peopleHelped++; }
				if (Player.quests.completedQuestArray.includes("A Lost Fishing Rod")) { peopleHelped++; }
				completed.push(checkProgress(peopleHelped, 3));

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to <strong>Marshall Teper</strong>.",
			levelRequirement: 2,
			questRequirements: ["Retrieval of Logs"],

			rewards: {
				xp: 50,
				items: [
					{item: Items.currency[2], quantity: 3,},
					{item: Items.chest[4],},
				],
				reputation: {
					eaglecrestLoggingCamp: 100,
				},
			},
		},

		{
			id: 6,
			quest: "First Class Recovery",
			questArea: "eaglecrestLoggingCamp",

			startName: "Eaglecrest Mailman",
			startChat: [{
				text: `Oh no - I was driving my mail cart through that boggy area to the east and came across a huge group of goblins!`,
			},{
				text: `I had to abandon the cart and flee for my life, but I left a mail sack in the cart...`,
			},{
				text: `Please, would you be able to try to find my missing mail sack?`,
			},],

			finishName: "Eaglecrest Mailman",
			finishChat: [{
				text: `Phew, I was so worried. It's a shame about the cart though...`,
			},],

			objectives: [
				"Find a mail sack inside the mail cart at the Nilbog.",
				"Speak to the <strong>Eaglecrest Mailman</strong>.",
			],

			isCompleted: function() {
				let completed = [];

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(Dom.inventory.check(6, "item", 1));

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to the <strong>Eaglecrest Mailman</strong>.",
			levelRequirement: 2,
			questRequirements: ["Retrieval of Logs"],

			rewards: {
				xp: 30,
				items: [
					{item: Items.currency[2], quantity: 1,},
				],
				reputation: {
					eaglecrestCity: 20,
				},
			},

			removeItems: [
				{item: Items.item[6],}, // mail sack
			],
		},

		{
			id: 7,
			quest: "A Lost Fishing Rod",
			questArea: "eaglecrestLoggingCamp",

			startName: "Fisherman Tobenam",
			startChat: [{
				text: `You! You look like you've been to see the goblins!`,
			},{
				text: `One of my fav'rite fishing rods has been stolen from me, and I think it was one of those goblins, heheh!`,
			},{
				text: `Would you be able to head down to them and see if you can find it?`,
			},{
				text: `I'll happily give you a couple o' lessons on fishing if you're able to get your hands on it.`,
			},],

			finishName: "Fisherman Tobenam",
			finishChat: [{
				text: `You found it!`,
			},{
				text: `Heheh, let me clean it for you.`,
			},{
				text: `You can keep it for your fishing lessons with me. I've plenty of other rods I can be using.`,
			},{
				text: `Now, let me teach you... the way of the water! Heheheh.`,
			},],

			objectives: [
				"Find <strong>Fisherman Tobenam's</strong> fishing rod. He thinks it has been taken by a goblin.",
				"Return to <strong>Fisherman Tobenam</strong>.",
			],

			isCompleted: function() {
				let completed = [];

				// true or falses for each objective (apart from the turn-in objective)
				completed.push((Dom.inventory.check(7, "item", 1)));

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to <strong>Fisherman Tobenam</strong> at the Fishers' Valley.",
			levelRequirement: 2,
			questRequirements: ["Retrieval of Logs"],

			rewards: {
				xp: 20,
				items: [
					{item: Items.rod[2],},
				],
			},

			removeItems: [
				{item: Items.item[7],}, // Tobenam's Lost Fishing Rod (cleaned version given in its place)
			],
		},

		{
			id: 8,
			quest: "Strengthening Defences",
			questArea: "eaglecrestLoggingCamp",

			startName: "Galuthel the Trap Mechanic",
			startChat: [{
				text: `Welcome to the logging camp, adventurer. I hope Teper hasn't been too harsh on you.`,
			},{
				text: `My traps are some of the best technology this area has to offer to stop those goblins.`,
			},{
				text: `Help me by taking some traps and place them around in The Nilbog. 3 should suffice.`,
			},{
				text: `They will make a huge impact in deterring the goblins, and will maybe help out in your combats!`,
			},],

			finishName: "Galuthel the Trap Mechanic",
			finishChat: [{
				text: `Excellent. You can always come back later if you have a bit of spare time. I'd appreciate your help.`,
			},],

			objectives: [
				"Place 3 goblin traps around The Nilbog. <em>(click on one to place it)</em>",
				"Speak to <strong>Galuthel the Trap Mechanic</strong>.",
			],

			isCompleted: function() {
				let completed = [];

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(checkProgress(Player.quests.questProgress.goblinTrapsPlaced, 3));

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to <strong>Galuthel the Trap Mechanic</strong>.",
			levelRequirement: 2,
			questRequirements: ["Retrieval of Logs"],

			rewards: {
				xp: 30,
				items: [
					{item: Items.currency[2], quantity: 1,},
				],
				reputation: {
					eaglecrestLoggingCamp: 50,
				},
			},

			removeItems: [
				// remove all traps
				{item: Items.consumable[7], quantity: "all",},
			],
		},
		{
			id: 9,
			quest: "Reinforcing Defences",
			questArea: "eaglecrestLoggingCamp",

			startName: "Galuthel the Trap Mechanic",
			startChat: [{
				text: `If you have some time, I need 3 more traps placed around The Nilbog and The Tower. We can't let those goblins attack us again!`,
			},],

			finishName: "Galuthel the Trap Mechanic",
			finishChat: [{
				text: `Thank you. Same time tomorrow?`,
			},],

			objectives: [
				"Place 3 goblin traps around The Nilbog. <em>(click on one to place it)</em>",
				"Speak to <strong>Galuthel the Trap Mechanic</strong>.",
			],

			isCompleted: function() {
				let completed = [];

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(checkProgress(Player.quests.questProgress.goblinTrapsPlaced, 3));

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to <strong>Galuthel the Trap Mechanic</strong>.",
			levelRequirement: 5,
			questRequirements: ["Strengthening Defences"],
			repeatTime: "daily",

			rewards: {
				xp: 30,
				items: [
					{item: Items.currency[2], quantity: 1,},
				],
				reputation: {
					eaglecrestLoggingCamp: 50,
				},
			},

			removeItems: [
				// remove all traps
				{item: Items.consumable[7], quantity: "all",},
			],

			resetVariables: [
				"goblinTrapsPlaced",
			],
		},

		{
			id: 10,
			quest: "The Sceptre of Souls",
			questArea: "eaglecrestLoggingCamp",

			startName: "Soul Healer Nalaa",
			startChat: [{
				text: `My blessings to you. My sceptre is running low on soul essence, a sacred power contained in the corpses of those who have recently died.`,
			},{
				text: `I use it to remove XP fatigue from those who have died, here at the Logging Camp.`,
			},{
				text: `I am not well equipped to go out to collect this essence, however I believe that you are. May you restore my sceptre's power?`,
			},],

			finishName: "Soul Healer Nalaa",
			finishChat: [{
				text: `Thank you. It is people like you that allow the Logging Camp to flourish.`,
			},],

			objectives: [
				"Use the Sceptre of Souls near 5 corpses to restore its power. <em>(click on it to use it)</em>",
				"Speak to <strong>Soul Healer Nalaa</strong>.",
			],

			isCompleted: function() {
				let completed = [];

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(checkProgress(Player.quests.questProgress.soulSceptreEnergy, 5));

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to <strong>Soul Healer Nalaa</strong>.",
			levelRequirement: 3,
			questRequirements: ["Retrieval of Logs"],

			startRewards: {
				items: [
					{item: Items.item[8],}, // soul sceptre
				],
			},

			rewards: {
				xp: 30,
				items: [
					{item: Items.currency[2], quantity: 1,},
				],
				reputation: {
					eaglecrestLoggingCamp: 50,
				},
			},

			removeItems: [
				{item: Items.item[8],}, // remove soul sceptre
			],
		},

		{
			id: 11,
			quest: "Partners in Goblin Destruction",
			questArea: "eaglecrestLoggingCamp",

			startName: "Goblin Torch",
			startChat: [{
				text: `<em>The torch speaks to you with a coarse whisper.</em><br>Please help. Goblins used wrong spell. On me.`,
			},{
				text: `I can think. And speak. Other torches. Can not.`,
			},{
				text: `I hate goblins. As much as you. Please. Give me. A lift? We can kill. Together.`,
			},],

			finishName: "Goblin Torch",
			finishChat: [{
				text: `Thank you. That was the. Best time of my life.`,
			}],
			finishNpcSrc: "assets/objects/torchNight1.png",

			objectives: [
				"Kill 20 goblins with the help of the goblin torch.",
				"Place the torch back at the goblin camp.",
			],

			isCompleted: function() {
				let completed = [];

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(checkProgress(Player.quests.questProgress.goblinsKilledWithTorch, 20));
				completed.push(completed[0] === true); // second objective isn't actually an objective so just mirrors the first

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "???",
			levelRequirement: 5,
			questRequirements: [],

			autofinish: true,

			startRewards: {
				items: [
					{item: Items.staff[7],}, // goblin torch
				],
			},

			onQuestStart: function () {
                let torchNPC = Game.characters.find(npc => npc.name === "Goblin Torch");
                Game.removeObject(torchNPC.id, "characters");
            },

			rewards: {
				xp: 50,
			},

			removeItems: [
				{item: Items.staff[7],}, // remove goblin torch
			],

			onQuestFinish: function() {
				if (Game.areaName === "nilbog") {
					Game.characters.push(new Character(Areas.nilbog.characters[0])); // add goblin torch image to the map
				}
			},
		},

		{
			id: 12,
			quest: "Another Man's Treasure",
			questArea: "eaglecrestLoggingCamp",

			startName: "Item Buyer Noledar",
			startChat: [{
				text: `Hello. I've been working on my latest achievement and need some assistance if you wouldn't mind.`,
			},{
				text: `I need to collect 8 <strong>Scraps of Cloth</strong> and 4 <strong>Polished Rocks</strong> from the goblins in <strong>The Nilbog</strong>, but I've heard it's dangerous out there and don't want to leave my cart unattended.`,
				long: true,
			},{
				text: `Is there any chance you could head down there to help me? I've heard you're good around the goblins.`,
			},],

			finishName: "Item Buyer Noledar",
			finishChat: [{
				text: `Thank you so much! Now, I just need to find some space in my cart...`,
			},{
				text: `If you ever have more items you don't want, you can come and visit me to sell them any time.`,
			},],

			objectives: [
				"Obtain 8 <strong>Scraps of Cloth</strong> from goblins.",
				"Obtain 4 <strong>Polished Rocks</strong> from goblins.",
				"Speak to <strong>Item Buyer Noledar</strong>.",
			],

			isCompleted: function() {
				let completed = [];

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(checkProgress(Dom.inventory.check(3, "item"), 8));
				completed.push(checkProgress(Dom.inventory.check(4, "item"), 4));

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to <strong>Item Buyer Noledar</strong>.",
			levelRequirement: 2,
			questRequirements: ["Retrieval of Logs"],

			rewards: {
				xp: 30,
				services: [
					{image: "itemBuyer", lore: "You will be able to sell items to Noledar after completing this quest."},
				],
				items: [
					{item: Items.currency[2], quantity: 2,},
				],
				reputation: {
					eaglecrestLoggingCamp: 50,
				},
			},

			removeItems: [
				{item: Items.item[3], quantity: 8,}, // scrap of cloth
				{item: Items.item[4], quantity: 4,}, // polished rock
			],
		},

		{
			id: 13,
			quest: "Fire Power",
			questArea: "eaglecrestLoggingCamp",

			startName: "Identifier Gilas",
			startChat: [{
				text: `As part of my research, I have been looking into what makes the <strong>Fire Goblin</strong> so much stronger than the other goblins. You might have seen one at the <strong>north</strong> of <strong>The Nilbog</strong>.`,
				long: true,
			},{
				text: `I believe their strength is down to <strong>Fiery Rocks</strong>, sourced from the <strong>Nilbog Tower</strong>. They are potentially very strong forms of magic, but not that the goblins would know how to use them to their full potential!`,
				long: true,
			},{
				text: `Please, find one of these rocks from a fire goblin and return it to me. It will be very useful in my research.`,
			},],

			finishName: "Identifier Gilas",
			finishChat: [{
				text: `Thank you. This will be very useful for my research.`,
			},],

			objectives: [
				"Obtain a <strong>Fiery Rock</strong> from a <strong>Fire Goblin</strong>.",
				"Speak to <strong>Identifier Gilas</strong>.",
			],

			isCompleted: function() {
				let completed = [];

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(Dom.inventory.check(5, "item", 1));

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to <strong>Identifier Gilas</strong>.",
			levelRequirement: 4,
			questRequirements: ["Retrieval of Logs"],

			rewards: {
				xp: 30,
				items: [
					{item: Items.currency[2], quantity: 1,},
				],
				reputation: {
					eaglecrestLoggingCamp: 50,
				},
			},

			removeItems: [
				{item: Items.item[5],}, // fiery rock
			],
		},

		{
			id: 14,
			quest: "Potion Making",
			questArea: "eaglecrestLoggingCamp",

			startName: "Ciarra Darkbrew",
			startChat: [{
				text: `It's important that we potion merchants experiment with our wares. You wouldn't want to feel <i>too</i> safe as a customer, would you?`,
			},{
				text: `Gather some potion ingredients for me and let's see what we can brew up.`,
			},],

			finishName: "Ciarra Darkbrew",
			finishChat: [{
				text: `Interesting. Let's see how this goes.`,
			},{
				text: `Stand back. We wouldn't want your arms to detatch so soon.`,
			},{
				text: `Ciarra adds the potion ingredients to an inert vial.`,
				saidBy: "none",
				autoProgress: true, // doesn't require player clicking
				progressIn: 3000,
			},{
				text: `The vial fizzes rapidly.`,
				saidBy: "none",
				autoProgress: true,
				progressIn: 3000,
				onFinish: function () {
					if (Game.areaName === "eaglecrestLoggingCamp") {
						// damage Ciarra
						Game.characters.find(NPC => NPC.name === "Ciarra Darkbrew").takeDamage(100);
						// displace player if they are too close
						let d = Game.distance(Game.hero, {x: 1571, y: 633}); // distance from ciarra
						if (d < 240) {
							Game.hero.displace(0, 240-d, 1, Game.bearing({x: 1571, y: 633}, Game.hero));
						}
					}
				}
			},{
				text: `The vial explodes.`,
				saidBy: "none",
				autoProgress: true,
				progressIn: 2500,
			},{
				text: `That... didn't go as planned.`,
			},],

			/*onQuestFinish: function () {
				Dom.closePage('questFinish');
				Dom.chat.insertSequence([
					Dom.chat.say("Ciarra Darkbrew", "Stand back. We wouldn't want your arms to detatch so soon."),
					Dom.chat.say("Ciarra Darkbrew", "/me adds the potion ingredients to an inert vial."),
					"The vial fizzes rapidly.",
					"The vial explodes.",
					Dom.chat.say("Ciarra Darkbrew", "That... didn't go as planned.")],
				[1000, 3000, 2500, 2000, 2000], undefined, undefined, true); // cutscene with no end function

				Game.setTimeout(function () {
					if (Game.areaName === "eaglecrestLoggingCamp") {
						// damage Ciarra
						Game.characters.find(NPC => NPC.name === "Ciarra Darkbrew").takeDamage(100);
						// displace player if they are too close
                        let d = Game.distance(Game.hero, {x: 1571, y: 633}); // distance from ciarra
                        if (d < 240) {
                            Game.hero.displace(0, 240-d, 1, Game.bearing({x: 1571, y: 633}, Game.hero));
                        }
					}
				}, 8600);
			},*/

			objectives: [
				"Gather 2 goblin eyes.",
				"Fill up a bucket with mud from The Nilbog.",
				"Obtain a vial of goblin blood. You might be able to ask a nearby merchant for one.",
				"Speak to <strong>Ciarra Darkbrew</strong>.",
			],

			isCompleted: function() {
				let completed = [];

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(checkProgress(Dom.inventory.check(10, "item"), 2));
				completed.push(Dom.inventory.check(13, "item", 1));
				completed.push(Dom.inventory.check(11, "item", 1));

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to <strong>Ciarra Darkbrew</strong>.",
			levelRequirement: 3,
			questRequirements: ["Retrieval of Logs"],

			startRewards: {
				items: [
					{item: Items.item[12],},
				],
			},

			removeItems: [
				{item: Items.item[10], quantity: 1,}, // goblin eye
				{item: Items.item[13],}, // bucket of Nilbog mud
				{item: Items.item[11],}, // vial of goblin blood
			],

			rewards: {
				xp: 30,
				items: [
					{item: Items.currency[2], quantity: 2,},
				],
				reputation: {
					eaglecrestLoggingCamp: 50,
				},
			},
		},

		{
			id: 15,
			quest: "Potion Making II",
			questArea: "eaglecrestLoggingCamp",

			startName: "Ciarra Darkbrew",
			startChat: [{
				text: `Let's try again. Perhaps adding Nilbog mud wasn't a good idea.`,
			},{
				text: `To stop such a violent reaction, <strong>direweed</strong> should be added. If you know how to fish, you can catch it from nearby waters.`,
			},],

			finishName: "Ciarra Darkbrew",
			finishChat: [{
				text: `Try two. Stand back; you wouldn't want to die <em>such</em> a horrible death.`,
			},{
				text: `Ciarra adds the potion ingredients to an inert vial.`,
				saidBy: "none",
				autoProgress: true, // doesn't require player clicking
				progressIn: 3000,
			},{
				text: `The vial fizzes rapidly.`,
				saidBy: "none",
				autoProgress: true,
				progressIn: 3000,
			},{
				text: `The vial simmers to produce a bluish-green coloured liquid.`,
				saidBy: "none",
				autoProgress: true,
				progressIn: 2500,
			},{
				text: `Excellent. If you'd like to try the potion, you can buy some from me. I promise it won't kill you. Probably.`,
			},],

			// below is legacy code
			/*onQuestFinish: function () {
				Dom.closePage('questFinish');
				Dom.chat.insertSequence([
					Dom.chat.say("Ciarra Darkbrew", "/me adds the potion ingredients to an inert vial."),
					"The vial fizzes rapidly.",
					"The vial simmers to produce a bluish-green coloured liquid.",
					Dom.chat.say("Ciarra Darkbrew", "Excellent. If you'd like to try the potion, you can buy some from me. I promise it won't kill you. Probably.")],
				[1500, 4000, 6000, 8000], undefined, undefined, true); // cutscene with no end function
			},*/

			objectives: [
				"Gather 2 more goblin eyes.",
				"Fish up 1 direweed.",
				"Obtain another vial of goblin blood.",
				"Speak to <strong>Ciarra Darkbrew</strong>.",
			],

			isCompleted: function() {
				let completed = [];

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(checkProgress(Dom.inventory.check(10, "item"), 2));
				completed.push(Dom.inventory.check(19, "fish", 1));
				completed.push(Dom.inventory.check(11, "item", 1));

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to <strong>Ciarra Darkbrew</strong>.",
			levelRequirement: 3,
			questRequirements: ["Potion Making"],

			removeItems: [
				{item: Items.item[10], quantity: 2,}, // goblin eye
				{item: Items.fish[19],}, // direweed
				{item: Items.item[11],}, // vial of goblin blood
			],

			rewards: {
				xp: 50,
				items: [
					{item: Items.currency[2], quantity: 2,},
				],
				reputation: {
					eaglecrestLoggingCamp: 50,
				},
			},
		},

		{
			id: 16,
			quest: "Combat Practice",
			questArea: "eaglecrestLoggingCamp",

			startName: "Combat Trainer Saral",
			startChat: [{
				text: `We meet again, ${Player.name}.`,
			},{
				text: `It's always important to warm up before a day of combat. Hone your skills and kill 9 goblins in The Nilbog.`,
			},],

			finishName: "Combat Trainer Saral",
			finishChat: [{
				text: `Beautifully done, ${Player.name}. I love the smell of goblin blood. Same time tomorrow?`,
			},],

			objectives: [
				"Kill 9 goblins.",
				"Speak to <strong>Combat Trainer Saral</strong>.",
			],

			isCompleted: function() {
				let completed = [];

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(checkProgress(Player.quests.questProgress.goblinsKilled, 9));

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to <strong>Combat Trainer Saral</strong>.",
			levelRequirement: 3,
			questRequirements: ["Making Yourself Useful"],
			repeatTime: "daily",

			rewards: {
				xp: 30,
				items: [
					{item: Items.currency[2], quantity: 1,},
				],
				reputation: {
					eaglecrestLoggingCamp: 50,
				},
			},

			resetVariables: [
				"goblinsKilled",
			],
		},

		{
			id: 17,
			quest: "The Goblin King",
			questArea: "eaglecrestLoggingCamp",

			important: true,

			startName: "Marshall Teper",
			startChat: [{
				text: `<b>The Goblin King</b> rules over the goblins. We believe it is because of their ruler that the goblins act as hostile towards us as they do.`,
			},{
				text: `Unfortunately, the Antorax ley energy nearby means that the goblins and their ruler come back to life after killed, however killing the Goblin King will certainly throw off the goblins for a while.`,
				long: true,
			},{
				text: `<b>The Nilbog Tower</b> has been a dangerous place since they first took it over - it has all sorts of magical items left over that will will be unlike anything you have seen before.`,
				long: true,
			},{
				text: `Moreover, only the strongest of goblins are elected to protect their ruler. I suggest not engaging them. Prepare yourself with <b>equipment</b>, <b>traps</b> and <b>potions</b>, and see how you fare against the Goblin King.`,
				long: true,
			},],

			finishName: "Marshall Teper",
			finishChat: [{
				text: `Well done. Few novices can say they have killed the Goblin King.`,
			},],

			objectives: [
				"Kill the Goblin King at the top of the Nilbog Tower.",
				"Speak to <strong>Marshall Teper</strong>.",
			],

			isCompleted: function() {
				let completed = [];

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(Player.bossesKilled.goblinKing !== 0 && Player.bossesKilled.goblinKing !== undefined);

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to <strong>Marshall Teper</strong>.",
			levelRequirement: 4,
			questRequirements: ["Making Yourself Useful"],

			rewards: {
				xp: 50,
				items: [
					{item: Items.currency[2], quantity: 3,},
				],
				reputation: {
					eaglecrestLoggingCamp: 250,
				},
			},
		},

		{
			id: 18,
			quest: "The Festive Spirit",
			questArea: "eaglecrestLoggingCamp",

			startName: "Combat Trainer Saral",
			startChat: `Merry Christmas, ${Player.name}. The snow does make a beautiful weapon here in the logging camp, wouldn't you agree? Of course, snowballs won't do much against our normal target dummy at this time of year, but I have an idea for a different 'target dummy' we can use.<br>Gather some snowballs from snow gathering on nearby rocks, and toss them at <strong>Marshall Teper</strong>. It's the festive spirit, ${Player.name}!`,

			finishName: "Combat Trainer Saral",
			finishChat: `Nice work, ${Player.name}. I bet he got really angry!`,

			objectives: [
				"Make 3 snowballs from the snow gathering on the nearby rocks.",
				"Throw them all at <strong>Marshall Teper</strong>.",
				"Speak to <strong>Combat Trainer Saral</strong>.",
			],

			isCompleted: function() {
				let completed = [];

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(checkProgress(Player.quests.questProgress.snowCollected, 3));
				completed.push(checkProgress(Player.quests.questProgress.hitTeper, 3));

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to <strong>Combat Trainer Saral</strong>.",
			levelRequirement: 2,
			questRequirements: ["Retrieval of Logs"],
			eventRequirement: "Christmas",

			repeatTime: "daily",

			rewards: {
				xp: 25,
				items: [
					{item: Items.currency[5], quantity: 2,}, // christmas token
				],
			},

			resetVariables: [
				"snowCollected",
				"hitTeper",
			],
		},

		{
			id: 19,
			quest: "Sunken Presents",
			questArea: "eaglecrestLoggingCamp",

			startName: "Fisherman Tobenam",
			startChat: `There're Christmas presents in the river! I saw it! The sleigh crashed! Heheh, maybe you could help to fish them up and deliver them!`,

			finishName: "You saved Christmas!",
			finishChat: `The last present is for you!<br>Merry Christmas, ${Player.name}!`,
			finishNpcSrc: "assets/items/fish/21.png",

			objectives: [
				"Fish up 3 presents from the river at Fishers' Valley.",
				"Deliver them to their intended recipients.",
			],

			isCompleted: function() {
				let completed = [];

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(checkProgress(Player.quests.questProgress.christmasPresentsCaught, 3));
				if (Player.quests.questProgress.christmasPresentsDelivered === 2 && completed[0] === true) {
					// player has delivered first 2 presents and has caught the third
					completed.push(true);
				}
				else {
					completed.push(checkProgress(Player.quests.questProgress.christmasPresentsDelivered, 3));
				}

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to <strong>Fisherman Tobenam</strong>.",
			levelRequirement: 2,
			questRequirements: ["Learning to Fish III"],
			eventRequirement: "Christmas",

			autofinish: true,

			rewards: {
				xp: 50,
				items: [
					{item: Items.currency[5], quantity: 6,}, // christmas token
					{item: Items.item[1],}, // secret (fishing rod is given through present)
				],
			},
		},

		{
			id: 20,
			quest: "Deck the Halls!",
			questArea: "eaglecrestLoggingCamp",

			startName: "Marshall Teper",
			startChat: `Merry Christmas. For us to win the Antorax Christmas Decoration Competition in the Logging Camp this year, we're going to need to make more of an effort than this. Plant some new Christmas Trees around the camp.`,

			finishName: "Marshall Teper",
			finishChat: `Hmm, I guess that looks fine.`,

			objectives: [
				"Place at least 5 Christmas Saplings around the Logging Camp. <em>(click on one to place it)</em>",
				"Speak to <strong>Marshall Teper</strong>.",
			],

			isCompleted: function() {
				let completed = [];

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(checkProgress(Player.quests.questProgress.christmasSaplingsPlaced, 5));

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to <strong>Marshall Teper</strong>.",
			levelRequirement: 2,
			questRequirements: ["Retrieval of Logs"],
			eventRequirement: "Christmas",

			repeatTime: "daily",

			rewards: {
				xp: 25,
				items: [
					{item: Items.currency[5], quantity: 2,}, // christmas token
				],
			},

			resetVariables: [
				"christmasSaplingsPlaced",
			],

			removeItems: [
				// remove all saplings
				{item: Items.consumable[18], quantity: "all",},
			]
		},

		{
			id: 21,
			quest: "A 'Spark' of Imagination",
			questArea: "eaglecrestLoggingCamp",

			startName: "Goblin Torch",
			startChat: [{
				text: `Hello. Conscious goblin torch. Gets very bored. Please. Bring some books. Tower has books. Books cure boredom.`,
			},],

			finishName: "Goblin Torch",
			finishChat: [{
				text: `This will be. Exciting. Thank you.`,
			},],

			objectives: [
				"Gather 4 tattered tomes from goblins in the Nilbog Tower.",
				"Bring them back to the <strong>Goblin Torch</strong>.",
			],

			isCompleted: function() {
				let completed = [];

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(checkProgress(Dom.inventory.check(16, "item"), 4));

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to the <strong>Goblin Torch</strong> in The Nilbog.",
			levelRequirement: 5,
			questRequirements: ["Partners in Goblin Destruction"],

			rewards: {
				xp: 50,
			},

			removeItems: [
				{item: Items.item[16], quantity: 4,}, // remove goblin torch
			],

			onQuestFinish: function() {
				// goblin torch chat line
				Dom.chat.insert(Dom.chat.say("Goblin Torch", "Wizard runic. Very interesting. I'll be wizard soon."), 2500); // has to read the book
			},
		},

		{
			id: 22,
			quest: "The Legend of the Tattered Knight",
			questArea: "eaglecrestLoggingCamp",

			//mailStart: true,

			startName: "There once was a knight sent into exile, from the magical realm of Azuras,",
			startChat: `He invaded towers, looted innocents, and stole from the vulnerable and young.<br>
						He was defeated by the great Wizard Andrews, near his tower in the Nilbog,<br>
						The same great wizard who would become the leader of the Wizards in Antorax.<br><br>
						Since then, many have recounted sightings of a knight in red and orange armour,<br>
						However few have fought him, and even fewer have lived to tell the tale.<br>
						It is said that there are riches to behold for those who emerge victorious,<br>
						In a past timezone where the knight still stands, can you reap his spoils?<br>
						<br><i>You will be teleported upon starting this quest</i>`,
			finishName: "To the victor goes the spoils!",
			finishChat: `And thus, ${Player.name} defeats the tattered knight. However this was not his end.<br>
						Many still recount seeing a knight in red and yellow armour around Antorax and its outskirts.<br>
						After all, death is never the end in Antorax...<br>
						<br><i>You will be teleported back upon finishing this quest</i>`,

			objectives: [
				"Defeat and loot the Tattered Knight in Nilbog Past.",
			],

			isCompleted: function() {
				let completed = [];

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(Player.bossesKilled.tatteredKnight !== 0 && // boss has been killed
				Game.areaName === "nilbogPast" && // area is nilbogPast (where boss is)
				(Game.enemies[0] === undefined || // enemy doesn't exist (game has been refreshed) OR
				Game.enemies[0].isCorpse === false) && // enemy's corpse has despawned (has been looted)
				Dom.currentlyDisplayed !== "The Tattered Knight"); // DOM is not currently showing looting screen

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Started from a message sent by mail.",
			levelRequirement: 1,
			questRequirements: [],
			eventRequirement: "Antorax",

			autofinish: true,

			rewards: {
				xp: 50,
				items: [{item: Items.item[1],}], // secret (items from tattered knight)
			},

			onQuestStart: function() {
				Game.hero.temporaryAreaTeleport("nilbogPast", 100, 100);
			},

			onQuestFinish: function() {
				Game.hero.temporaryAreaTeleportReturn();
			},
		},

		{
			id: 23,
			quest: "To Eaglecrest, and Beyond!",
			questArea: "eaglecrestLoggingCamp",

			important: true,

			startName: "Marshall Teper",
			startChat: [{
				text: `You've done fine with your work here in the Logging Camp, but it's time for you to head to Eaglecrest.`,
			},{
				text: `Finish off anything you want to here, then speak to <strong>Cart Driver Alaran</strong> to take a cart to Eaglecrest, the capital city of Antorax.`,
			},{
				text: `You'll always be able to come back here in the future; just speak to <b>Alaran</b> in Eaglecrest and he can take you over.`,
			},{
				text: `There's always work to be done and goblins to be defended against. I hope we'll be seeing you again soon.`,
			},],

			finishName: "Cart Driver Alaran",
			finishChat: [{
				text: `Here we are, Eaglecrest! You'll love it here.`,
			}],

			objectives: [
				"Take a cart to Eaglecrest.",
				"Speak to <strong>Cart Driver Alaran</strong>.",
			],

			isCompleted: function() {
				let completed = [];

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(Game.areaName === "eaglecrest");

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to <strong>Marshall Teper</strong>.",
			levelRequirement: 4,
			questRequirements: ["The Goblin King"],

			startRewards: {
				services: [
					{image: "driver", lore: "You will be able to take a cart to Eaglecrest upon starting this quest."},
				],
			},

			rewards: {
				xp: 10,
			},
		},

		{
			id: 24,
			quest: "A Burning Need to be Cleaned",
			questArea: "eaglecrestLoggingCamp",

			startName: "Goblin Torch",
			startChat: [{
				text: `Goblins. Make goblin torch dirty. Please, clean me. No water. Just cloth.`,
			},],

			finishName: "Goblin Torch",
			finishChat: [{
				text: `I am clean! Thank you. Adventurer.`,
			},{
				text: `Oh. What is your name?`
			}],
			finishNpcSrc: "assets/objects/torchNight1.png",

			objectives: [
				"Obtain 1 scrap of cloth.",
				"Use it to clean the <strong>Goblin Torch</strong>.",
				"Obtain 1 scrap of cloth.",
				"Speak to a <strong>potion merchant</strong> about a potion of fire resistance.",
				"Bring 1 fireroot from the Eaglecrest Bazaar to <strong>Alchemist Tamtam</strong>.",
				"Douse the scrap of cloth in the potion of fire resistance.",
				"Use it to clean the <strong>Goblin Torch</strong>.",
				"",
			],

			isHidden: function() {
				let completed = [];

				if (Player.quests.npcProgress.eaglecrestLoggingCamp[24] === undefined) {
					Player.quests.npcProgress.eaglecrestLoggingCamp[24] = 1;
				}

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(false);
				completed.push(false);
				completed.push(Player.quests.npcProgress.eaglecrestLoggingCamp[24] < 2);
				completed.push(Player.quests.npcProgress.eaglecrestLoggingCamp[24] < 2);
				completed.push(Player.quests.npcProgress.eaglecrestLoggingCamp[24] < 3);
				completed.push(Player.quests.npcProgress.eaglecrestLoggingCamp[24] < 2);
				completed.push(Player.quests.npcProgress.eaglecrestLoggingCamp[24] < 2);
				completed.push(true);

				completed = checkFinished(completed);

				return completed;
			},

			isCompleted: function() {
				let completed = [];

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(Dom.inventory.check(3, "item", 1) || Player.quests.npcProgress.eaglecrestLoggingCamp[24] >= 2); // 1 scrap of cloth
				completed.push(Player.quests.npcProgress.eaglecrestLoggingCamp[24] >= 2);
				completed.push((Dom.inventory.check(3, "item", 1) || Dom.inventory.check(27, "item", 1)) && Player.quests.npcProgress.eaglecrestLoggingCamp[24] >= 2 ); // 1 scrap of cloth
				completed.push(Player.quests.npcProgress.eaglecrestLoggingCamp[24] >= 3 || Dom.inventory.check(25, "consumable", 1) || Dom.inventory.check(27, "item", 1)); // also allows having obtained the potion by another way
				completed.push(Player.quests.npcProgress.eaglecrestLoggingCamp[24] >= 4 || Dom.inventory.check(25, "consumable", 1) || Dom.inventory.check(27, "item", 1));
				completed.push(Dom.inventory.check(27, "item", 1)); // 1 fire resistant cloth
				completed.push(Player.quests.npcProgress.eaglecrestLoggingCamp[24] >= 5);

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to the <strong>Goblin Torch</strong> in The Nilbog.",
			levelRequirement: 5,
			questRequirements: ["A 'Spark' of Imagination"],

			autofinish: true,

			rewards: {
				xp: 50,
			},

		},

		{
			id: 25,
			quest: "A Tale of Two Twintops",
			questArea: "eaglecrestLoggingCamp",

			startName: [
				"Nessy Tintop",
				"Torian Tintop",
				"Nessy Tintop",
				"Torian Tintop",
				"Nessy Tintop",
				"Torian Tintop",
				"Nessy Tintop",
				"Torian Tintop",
				"Nessy Tintop",
				"Torian Tintop",
				"Torian and Nessy Tintop",
			],

			finishName: [
				"Torian Tintop",
				"Nessy Tintop",
				"Torian Tintop",
				"Nessy Tintop",
				"Torian Tintop",
				"Nessy Tintop",
				"Torian Tintop",
				"Nessy Tintop",
				"Torian Tintop",
				"Nessy Tintop",
				"Tightly Packed Present",
			],

			startChat: [
				"Hello? What are you lookin' at? I'm just tryin' to find a friend, OK? He's not missing, it's for a game.<br><br>Yes I've been looking for a while. Yes there's a reward for whoever finds 'im first. Doesn't mean you can go off and look for him and take my reward! But yes, I wouldn't mind your help finding 'im if you insist.",
				"Alright, my turn to search now - bet y' can't find Nessy before me!",
				"Yes, I'm looking for Torian. He says I <strong>have</strong> to let you join in, but don't take all the reward this time!",
				"Y'know the game! Let's find Nessy! Who can get the reward first?",
				"Yes, I'm looking for Torian. He says I <strong>have</strong> to let you join in, but don't take all the reward this time!",
				"Y'know the game! Let's find Nessy! Who can get the reward first?",
				"Yes, I'm looking for Torian. He says I <strong>have</strong> to let you join in, but don't take all the reward this time!",
				"Y'know the game! Let's find Nessy! Who can get the reward first?",
				"Yes, I'm looking for Torian. He says I <strong>have</strong> to let you join in, but don't take all the reward this time!",
				"I swear, Nessy's not <strong>anywhere</strong>!!! No way you'll be able to find her this time.",
				`<strong>Torian Tintop</strong>: Haha, thanks from us for all the help with our hide 'n' find games. Not sure Nessy would 'ave ever found me otherwise!<br><br>
				<strong>Nessy Tintop</strong>: Hey! I'm good as well y'know! They're taller than me! But yeah, Torian's not very good.<br><br>
				<strong>Torian Tintop</strong>: Remember the time you were eaten by a goblin Nessy? ... Anyway, we've set up one last game for y'. We've hidden a present somewhere in the Camp for y'. We promise the reward's worth your time!<br><br>
				<strong>Nessy Tintop</strong>: Bet y' can't find it!`,
			],

			finishChat: [
				"Well done! Y' found me! Oh, you're not Nessy... Never mind, y' can still have all the reward! It's not much, but it's all we have. I'm sure it'll be more after a few games here!",
				"Awh what, you're playin' now? I thought it was Torian's turn! OK, here's your reward.",
				"Haha, you again! Here's ya reward!",
				"Ugh, I guess you can have the reward this time. Why's it Torian never finds me first?",
				"Haha, you again! Here's ya reward!",
				"Ugh, I guess you can have the reward this time. Why's it Torian never finds me first?",
				"Haha, you again! Here's ya reward!",
				"Ugh, I guess you can have the reward this time. Why's it Torian never finds me first?",
				"Haha, you again! Here's ya reward!",
				"<strong>What!</strong> You really are good at hide 'n' find!",
				'<em>The present is signed "From Nessy and Torian Tintop"</em> ',
			],

			objectives: [
				["Find <strong>Torian Tintop</strong> somewhere in the Logging Camp area."],
				["Find <strong>Nessy Tintop</strong> somewhere in the Logging Camp area."],
				["Find <strong>Torian Tintop</strong> somewhere in the Logging Camp area."],
				["Find <strong>Nessy Tintop</strong> somewhere in the Logging Camp area."],
				["Find <strong>Torian Tintop</strong> somewhere in the Logging Camp area."],
				["Find <strong>Nessy Tintop</strong> somewhere in the Logging Camp area."],
				["Find <strong>Torian Tintop</strong> somewhere in the Logging Camp area."],
				["Find <strong>Nessy Tintop</strong> somewhere in the Logging Camp area."],
				["Find <strong>Torian Tintop</strong> somewhere in the Logging Camp area."],
				["Find <strong>Nessy Tintop</strong> somewhere in the Logging Camp area."],
				["Find the <strong>Tightly Packed Present</strong> somewhere in the Logging Camp area."],
			],

			howToStart: "Speak to one of the <strong>Tintop</strong> twins in the logging camp.",
			levelRequirement: 4,
			questRequirements: ["Making Yourself Useful"],

			repeatTime: "daily",
			numberOfRepeats: 11,
			multipleAreas: true,

			rewards: {
				xp: 30,
				items: [{item: Items.item[1],}], // question mark
				timesCompleted: [
                    [{item: Items.item[4]}], // polished rock
                    [{item: Items.item[3], quantity: 3}], // scrap of cloth
                    [{item: Items.fish[8]}], // old boot
                    [{item: Items.item[29]}], // burnt cloth
                    [{item: Items.food[0]}], // bread
                    [{item: Items.consumable[6]}], // goblin brewed potion
                    [{item: Items.consumable[5]}], // wood-brewed beer
                    [{item: Items.consumable[3]}], // potion of swiftness
                    [{item: new UnId("loggingCamp", 1)}, {item: new UnId("loggingCamp", 1)}], // unidentified item
                    [{item: Items.fish[17]}], // ocean chest key
                    [],
                ],
			},

			isCompleted: function() {
				return [true];
			},

			onQuestStart: function () {
				if (Game.areaName === "eaglecrestLoggingCamp") {
					if (Player.quests.prog.eaglecrestLoggingCamp[25].timesCompleted === null || Player.quests.prog.eaglecrestLoggingCamp[25].timesCompleted === undefined) {
						Areas.eaglecrestLoggingCamp.characters[9] = Game.prepareNPC(Areas.eaglecrestLoggingCamp.characters[9], "characters", true);
						Game.things.push(new Character(Areas.eaglecrestLoggingCamp.characters[9]));
	                }
					else if (Player.quests.prog.eaglecrestLoggingCamp[25].timesCompleted === 5) {
						Areas.eaglecrestLoggingCamp.characters[10] = Game.prepareNPC(Areas.eaglecrestLoggingCamp.characters[10], "characters", true);
						Game.things.push(new Character(Areas.eaglecrestLoggingCamp.characters[10]));
					}
					else if (Player.quests.prog.eaglecrestLoggingCamp[25].timesCompleted === 8) {
						Areas.eaglecrestLoggingCamp.characters[11] = Game.prepareNPC(Areas.eaglecrestLoggingCamp.characters[11], "characters", true);
						Game.things.push(new Character(Areas.eaglecrestLoggingCamp.characters[11]));
					}
				}
			}

		},

	],

	eaglecrest: [
		{
			id: 0,
			quest: "Hidden Quest",
			questArea: "eaglecrest",

			howToStart: "Hidden Quest",
			levelRequirement: 1000,
			questRequirements: [],

			/*old quest, for legacy reasons :)
			I don't think this quest ever worked lol! I could never be bothered to properly add leads
			Originally this was going to be the introduction to the cat questline (and then amelio would go missing again...)
			But it always felt a bit janky, and the first part felt like too much of a barrier to a (hopefully) fun and unique rest of the quest

			id: 0,
			quest: "Help! Lost Cat",
			questArea: "eaglecrest",

			startName: "Help Notice",
			startChat: [{
				text: `<b>Have you seen this cat?</b>`,
			},{
				text: `Missing black cat with white paws and nose.`,
			},{
				text: `His name is <b>Amelio</b>.`,
			},{
				text: `Last seen outside the Eaglecrest tavern.`,
			},{
				text: `If found, please bring by lead to <b>Priest Kemp-Eau</b> inside <b>Eaglecrest Monastery</b> for a reward.`,
			},],

			finishName: "Priest Kemp-Eau",
			finishChat: [{
				text: `Is that Amelio?!`,
			},{
				text: `Awww come over here, you haven't been to the tavern again have you?!`,
			},{
				text: `No, I meant the cat, not you ${Player.name}!`,
			},{
				text: `Anyway, thank you immensely ${Player.name}. I assume you saw our notice!? He usually goes on his little séjours, but never for this long!`,
			},{
				text: `We have been searching for weeks. I cannot state how happy we are to see him back.`,
			},{
				text: `Ahh yes, your reward. Here is some gold. I hope it goes towards a good cause.`
			}],

			howToStart: "Find a 'lost cat' notice in Eaglecrest City.",
			levelRequirement: 4,
			questRequirements: ["Overdraft"],*/
		}, // now we skip to id 17 :)

		{
			id: 1,
			quest: "Snakes and the City",
			questArea: "eaglecrest",

			startName: "Recruiter Sylvie",
			startChat: [{
				text: `<b>Eaglecrest needs you!</b>`,
			},{
				text: `${Player.name}! I suppose you can see what I'm going to ask of you... There's snakes... Everywhere! Not in our <b>Eaglecrest</b>, I say!`,
			},{
				text: `There's no room for anyone here to slack off - let's all work together to eliminate these snakes for good.`,
			},{
				text: `How, you say? A <b>net</b> of course! Bring me ten snakes.`,
			},],

			finishName: "Recruiter Sylvie",
			finishChat: [{
				text: `Great! <b>Eaglecrest</b> awards your efforts with <b>1 Gold</b>.`,
			},{
				text: `If we keep working together every day, these snakes will be gone in no time.`,
			},{
				text: `<i>Now if only we knew where the snakes were coming from...</i>`,
			}],

			objectives: [
				"Round up <b>10 snakes</b> using the <b>net</b>.",
				"Speak to <strong>Recruiter Sylvie</strong>.",
			],

			isCompleted: function() {
				let completed = [];

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(Dom.inventory.check(34, "item", 10));

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to <strong>Recruiter Sylvie</strong>.",
			levelRequirement: 4,
			questRequirements: ["Overdraft"],
			eventRequirement: "Samhain",

			repeatTime: "daily",

			rewards: {
				xp: 20,
				items: [
					{item: Items.currency[2], quantity: 1,}, // goldy woldy
				],
				reputation: {
					eaglecrestCity: 20,
				},
			},

			startRewards: {
				items: [
					{item: Items.tool[6],}, // the net
				],
			},

			removeItems: [
				{item: Items.tool[6],}, // remove the net
				{item: Items.item[34], quantity: 10}, // remove the snakes
			],
		},

		{
			id: 2,
			quest: "Overdraft",
			questArea: "eaglecrest",

			important: true,

			startName: "Recruiter Sylvie",
			startChat: [{
				text: `A new archaeologist! Welcome, from all of the citizens and workers, to the most resplendent, excellent, grand, opulent, showstopping city of all of Antorax!`,long:true
			},{
				text: `Let me not get ahead of myself. What is your name?`,
			},{
				text: `Well, <b>Eaglecrest needs you</b>, ${Player.name}! I will be your task-master, quest-setter, direction-giver for the forseeable future!`,
			},{
				text: `I am sure you are glad to be out of the hands of <b>Marshall Teper</b>. And out of that pit of a logging camp!`,
			},{
				text: `But don't let the archaeologists fool you - everyone still has their part to play in maintining the city.`,
			},{
				text: `Speaking of which... the <b>Eaglecrest Bank</b> has been closed for the past couple of days due to an... unforseen issue.`,
			},{
				text: `I was told it would be reopening today - can you head over there and help them out?`,
			},{
				text: `Ah yes - the bank is just <b>north</b> of here. It is indicated with a gold coin outside.`,
			},],

			finishName: "Recruiter Sylvie",
			finishChat: [{
				text: `All sorted? Excellent! Well, ${Player.name}, you definitely deserve a rest in our beautiful city.`,
			},{
				text: `Have a look around, and I am sure I will be seeing more of you in good time.`,
			},{
				text: `Speaking of resting... have you tried a <b>beetroot pie</b>? They are one of the many delicacies of <b>Eaglecrest</b>, and I happen to have a few on me!`,
			},],

			objectives: [
				"Speak to <b>Head Banker Jonos</b> about the situation at the bank, to the <b>north</b> of Eaglecrest.",
				"Speak to <b>Shopkeeper Barda</b> in <b>The Eaglecrest Bazaar</b> to the <b>west</b> of Eaglecrest.",
				"Speak to <b>Gildo Cleftbeard</b> in the <b>Eaglecrest Plains</b>, to the <b>south</b> of Eaglecrest.",
				"Speak to <b>Captain Greenbeard</b> in the <b>Eagle's Span Tavern</b>, to the <b>north</b> of Eaglecrest.",
				"Speak to <b>Head Banker Jonos</b> once you've resolved the situation.",
				"Speak to <strong>Recruiter Sylvie</strong>.",
			],

			isHidden: function() {
				let hidden = [];

				if (Player.quests.npcProgress.eaglecrest[2] === undefined) {
					Player.quests.npcProgress.eaglecrest[2] = 0;
				}

				// true or falses for each objective (apart from the turn-in objective)
				hidden.push(false);
				hidden.push(Player.quests.npcProgress.eaglecrest[2] < 1);
				hidden.push(Player.quests.npcProgress.eaglecrest[2] < 2);
				hidden.push(Player.quests.npcProgress.eaglecrest[2] < 3);
				hidden.push(Player.quests.npcProgress.eaglecrest[2] < 1);
				hidden.push(false);

				return hidden;
			},

			isCompleted: function() {
				let completed = [];

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(Player.quests.npcProgress.eaglecrest[2] >= 1); // jonos
				completed.push(Player.quests.npcProgress.eaglecrest[2] >= 2); // barda
				completed.push(Player.quests.npcProgress.eaglecrest[2] >= 3); // gildo
				completed.push(Player.quests.npcProgress.eaglecrest[2] >= 4); // greenbeard
				completed.push(Player.quests.npcProgress.eaglecrest[2] >= 5); // jonos again

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to <strong>Recruiter Sylvie</strong>.",
			levelRequirement: 4,
			questRequirements: ["To Eaglecrest, and Beyond!"],

			rewards: {
				xp: 50,
				items: [
					{item: Items.item[1]}, // mystery
					{item: Items.currency[2], quantity: 5,},
					{item: Items.food[5], quantity: 1,},
				],
				services: [
					{image: "bank", lore: "You will be able access the bank to store your items once you have finished this quest."},
				],
				reputation: {
					eaglecrestCity: 100,
				},
			},
		},

		{
			id: 3,
			quest: "The Slithering Truth",
			questArea: "eaglecrest",

			startName: "???",
			startChat: [{
				text: `Greetingssssss ${Player.name},`,
			},{
				text: `I have ssseen your aggresssionssss againsssst my kin. How about we make a deal?`,
			},{
				text: `Attached isss a key to my lair. Find it in the City and we can discusssss.`,
			},],

			finishName: "???",
			finishChat: `Successssss. You found me.`,

			objectives: [
				"Find and enter the lair somewhere in the City.",
				"Speak to the owner of the lair.",
			],

			isCompleted: function() {
				let completed = [];

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(Game.areaName === "samhainLair");

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "???",
			levelRequirement: 4,
			eventRequirement: "Samhain",
			questRequirements: ["Snakes and the City"],

			rewards: {
				xp: 25,
			},

			startRewards: {
				items: [
					{item: Items.item[36],}, // skeleton key
				],
			},
		},

		{
			id: 4,
			quest: "Snaking Bad",
			questArea: "eaglecrest",

			startName: "???",
			startChat: [{
				text: `I know who you are. I don't appreciate you capturing my offsssspring. But I notice the ssskill you posessssssss.`,
			},{
				text: `There is ssome work I need asssssisssstance with. And I have plenty of rare rewardsssss. But first I need to know I can trussst you won't betray me for the City.`,
				long: true,
			},{
				text: `Use thiss <b>Ssssceptre of Sssorrows</b> to capture the light from the main areas of the City. They'll never know it was you. Sssee it as you undoing your wrongssssss of capturing my innocent children.`,
				long: true,
			},],

			finishName: "The Soothsssayer",
			finishChat: `Excellent. I am <b>The Soothsssayer</b>. Let'ssss get sstarted with the real work ssshall we?`,

			objectives: [
				"Use the <b>Sceptre of Sorrows</b> to siphon the light from Eaglecrest City Centre.",
				"Siphon the light from Eaglecrest West.",
				"Siphon the light from Eaglecrest East.",
				"Siphon the light from Eaglecrest Graveyard.",
				"Speak to the snake man.",
			],

			isCompleted: function() {
				let completed = [];

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(Player.quests.questProgress.mainSamhainLights);
				completed.push(Player.quests.questProgress.westSamhainLights);
				completed.push(Player.quests.questProgress.eastSamhainLights);
				completed.push(Player.quests.questProgress.graveyardSamhainLights);

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to the snake man in their lair.",
			levelRequirement: 4,
			questRequirements: ["The Slithering Truth"],
			eventRequirement: "Samhain",

			rewards: {
				xp: 25,
				items: [
					{item: Items.currency[2], quantity: 2,},
				],
				reputation: {
					theSoothsayer: 25,
				},
			},

			startRewards: {
				items: [
					{item: Items.item[35],}, // sceptre
				],
			},

			removeItems: [
				{item: Items.item[35],}, // remove the sceptre
			],

			onQuestFinish: function () {
				let npc = Game.characters.find(npc => npc.name === "???");
				npc.name = "The Soothsssayer";
			},

			onQuestStart: function () {
				Player.quests.questProgress.hasSkeletonKey = true;
			},
		},

		{
			id: 5,
			quest: "Moving Like a Snake",
			questArea: "eaglecrest",

			startName: "The Soothsssayer",
			startChat: [{
				text: `My offsssspring have been ssscouting out the City these passt dayssss. And they found <b>four cratessss</b> around the City with ingredientsss that I need.`,
				long: true,
			},{
				text: `They are not sssstrong enough to open the boxesss. But you are. Go find them for me. I have rewardsssssss.`,
			},],

			finishName: "The Soothsssayer",
			finishChat: `Good. You have my Crystalsssss. Now let'ssss ssstart the fun.`,

			objectives: [
				"Find a special crate somewhere in the Eaglecrest Bazaar.",
				"Find a special crate somewhere in Eaglecrest Graveyard.",
				"Find a special crate somewhere to the west of Eaglecrest Plains.",
				"Collect 5 Wispy Feathers for the <b>Mask Salesman</b>.",
				"Find a special crate somewhere in Eaglecrest City West.",
				"Speak to the <b>The Soothsssayer</b> with the contents of all four crates.",
			],

			isHidden: function() {
				let hidden = [];

				// true or falses for each objective (apart from the turn-in objective)
				hidden.push(false);
				hidden.push(false);
				hidden.push(false);
				hidden.push(!Player.quests.npcProgress.eaglecrest[5]); // feather objective // tbd update because npcProgress no longer exists :)
				hidden.push(false);
				hidden.push(false);

				return hidden;
			},

			isCompleted: function() {
				let completed = [];

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(Player.quests.questProgress.bazaarCrate);
				completed.push(Player.quests.questProgress.graveyardCrate);
				completed.push(Player.quests.questProgress.plainsCrate);
				completed.push(Player.quests.questProgress.westCrate || checkProgress(Dom.inventory.check(37, "item"), 5));
				completed.push(Player.quests.questProgress.westCrate);

				completed.push(Dom.inventory.check(38, "item", 4));

				return completed;
			},

			howToStart: "Speak to The Soothsssayer in their lair.",
			levelRequirement: 4,
			questRequirements: ["Snaking Bad"],
			eventRequirement: "Samhain",

			rewards: {
				xp: 25,
				items: [
					{item: Items.consumable[10], quantity: 1,},
				],
				reputation: {
					theSoothsayer: 25,
				},
			},

			removeItems: [
				{item: Items.item[38], quantity: 4}, // remove the crystals
			],
		},

		{
			id: 6,
			quest: "The Blood Moon is Coming...",
			questArea: "eaglecrest",

			startName: "The Soothsssayer",
			startChat: [{
				text: `How about I explain to you sssome of what'sss going on. I'm sssure you would love that.`,
			},{
				text: `These Crystalsss can bring about the ssssummoning of a Blood Moon over all of Antorax, harbouring the return of dead ssssoulss to the mortal realm.`,
				long: true,
			},{
				text: `... and lotsss of sssspecial rewardssssssssss for you.`,
			},{
				text: `Ssssupervise my cauldron whilst the Blood Moon is ssssummoned, and the Blood Moon will be ourssss!`,
			},],

			finishName: "The Soothsssayer",
			finishChat: [{
				text: `The Blood Moon hassss rissssen. The ssssoulsss of old are near.`,
			},{
				text: `You will find <b>Ssssamhain Marksssss</b> on some enemiessss during the Blood Moon. Bring them to me. I have more rewardsssss for you.`,
			},],
			finishNpcSrc: "assets/npcs/soothsssayer.png",

			objectives: [
				"Protect the cauldron whilst the Blood Moon is sssummoned.",
				"Speak to the <b>The Soothsssayer</b>.",
			],

			autofinish: true,

			isCompleted: function() {
				let completed = [];

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(Player.quests.questProgress.bloodMoonUnlocked);

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to The Soothsssayer in their lair.",
			levelRequirement: 4,
			questRequirements: ["Moving Like a Snake"],
			eventRequirement: "Samhain",

			onQuestStart: function () {
				let cauldron = Game.characters.find(character => character.name === "The Soothsssayer's Cauldron");

				if (typeof cauldron === "undefined") {
					Game.characters.push(new Character(Game.prepareNPC({template: NPCTemplates.soothsssayerCauldron}, "character")));
					cauldron = Game.characters.find(character => character.name === "The Soothsssayer's Cauldron");
				}

				cauldron.channel(function () {
					// it's a blood moon now...
					Player.quests.questProgress.bloodMoonUnlocked = true;
					Event.updateTime("samhainLair");
					// channelling finished
					// kill all enemies
					while (Game.enemies.length > 0) {
						Game.enemies[0].takeDamage(1000);
					}
					// visual effects
					Weather.commenceLightningStrike();
					Game.camera.initScreenShake(13,5000);
				}, [], 87666, "", {colour: "#7FD922"});

				Game.clearedTimeoutsOnAreaChange.push(Game.setTimeout(function () {
					Game.enemies.push(new Enemy(Game.prepareNPC({
						x: 500,
						y: 600,
						template: EnemyTemplates.eaglecrest.phantom2,
					}, "enemies")));
					Game.enemies[Game.enemies.length-1].say("No! You can't!");
				}, 5000));

				Game.clearedTimeoutsOnAreaChange.push(Game.setTimeout(function () {
					Game.enemies.push(new Enemy(Game.prepareNPC({
						x: 100,
						y: 750,
						template: EnemyTemplates.eaglecrest.phantom2,
					}, "enemies")));
					Game.enemies.push(new Enemy(Game.prepareNPC({
						x: 500,
						y: 350,
						template: EnemyTemplates.eaglecrest.phantom1,
					}, "enemies")));
				}, 11000));

				Game.clearedTimeoutsOnAreaChange.push(Game.setTimeout(function () {
					Dom.chat.insert(Dom.chat.say("The Soothsssayer", "Get on with it and kill those ghosssstssss. The processssss must finish!"));
				}, 15666));

				Game.clearedTimeoutsOnAreaChange.push(Game.setTimeout(function () {
					Game.camera.initScreenShake(4,2500);
				}, 17000));

				Game.clearedTimeoutsOnAreaChange.push(Game.setTimeout(function () {
					Game.enemies.push(new Enemy(Game.prepareNPC({
						x: 100,
						y: 350,
						template: EnemyTemplates.eaglecrest.phantom1,
					}, "enemies")));
					Game.enemies.push(new Enemy(Game.prepareNPC({
						x: 500,
						y: 750,
						template: EnemyTemplates.eaglecrest.phantom1,
					}, "enemies")));
					Game.enemies[Game.enemies.length-1].say("The Blood Moon will kill us all..");
				}, 18000));

				Game.clearedTimeoutsOnAreaChange.push(Game.setTimeout(function () {
					Dom.chat.insert(Dom.chat.say("The Soothsssayer", "Why am I getting <i>you</i> to do all thisss?- Well, do you think Eaglecrest would be happy with <i>me</i> ssstrolling around the City in their current ssssssituation?"));
				}, 32000));

				Game.clearedTimeoutsOnAreaChange.push(Game.setTimeout(function () {
					Weather.commenceLightningStrike();
					Game.camera.initScreenShake(6,3500);
				}, 34000));

				Game.clearedTimeoutsOnAreaChange.push(Game.setTimeout(function () {
					Game.enemies.push(new Enemy(Game.prepareNPC({
						x: 100,
						y: 350,
						template: EnemyTemplates.eaglecrest.phantom1,
					}, "enemies")));
					Game.enemies.push(new Enemy(Game.prepareNPC({
						x: 500,
						y: 750,
						template: EnemyTemplates.eaglecrest.phantom2,
					}, "enemies")));
					Game.enemies.push(new Enemy(Game.prepareNPC({
						x: 100,
						y: 750,
						template: EnemyTemplates.eaglecrest.phantom2,
					}, "enemies")));
					Game.enemies.push(new Enemy(Game.prepareNPC({
						x: 500,
						y: 350,
						template: EnemyTemplates.eaglecrest.phantom1,
					}, "enemies")));
					Game.enemies[Game.enemies.length-1].say("Seize the cauldron!");
				}, 35222));

				Game.clearedTimeoutsOnAreaChange.push(Game.setTimeout(function () {
					Dom.chat.insert(Dom.chat.say("The Soothsssayer", "Yessssssss! Keep going! It'sssss working!"));
				}, 48666));

				Game.clearedTimeoutsOnAreaChange.push(Game.setTimeout(function () {
					Weather.commenceLightningStrike();
					Game.camera.initScreenShake(10,4000);
				}, 50500));

				Game.clearedTimeoutsOnAreaChange.push(Game.setTimeout(function () {
					Game.enemies.push(new Enemy(Game.prepareNPC({
						x: 100,
						y: 500,
						template: EnemyTemplates.eaglecrest.phantom1,
					}, "enemies")));
				}, 51222));

				Game.clearedTimeoutsOnAreaChange.push(Game.setTimeout(function () {
					Game.enemies.push(new Enemy(Game.prepareNPC({
						x: 220,
						y: 1000,
						template: EnemyTemplates.eaglecrest.phantom2,
					}, "enemies")));
					Game.enemies.push(new Enemy(Game.prepareNPC({
						x: 300,
						y: 930,
						template: EnemyTemplates.eaglecrest.phantom2,
					}, "enemies")));
					Game.enemies.push(new Enemy(Game.prepareNPC({
						x: 380,
						y: 1000,
						template: EnemyTemplates.eaglecrest.phantom1,
					}, "enemies")));
					Game.enemies[Game.enemies.length-1].say("You can't..");
				}, 53000));

				Game.clearedTimeoutsOnAreaChange.push(Game.setTimeout(function () {
					Dom.chat.insert(Dom.chat.say("The Soothsssayer", "I knew you would be the right persssson for this. I sssaw."));
				}, 69666));
				Game.clearedTimeoutsOnAreaChange.push(Game.setTimeout(function () {
					Dom.chat.insert(Dom.chat.say("The Soothsssayer", "I wasssn't sssearching for loyalty, I was looking for the lack of it. You were willing to do anything for a reward. Look what you're doing for me now."));
				}, 70666));
				Game.clearedTimeoutsOnAreaChange.push(Game.setTimeout(function () {
					Dom.chat.insert(Dom.chat.say("The Soothsssayer", `I've got lotssss more rewardsss ${Player.name}, don't worry.`));
				}, 73666));

				Game.clearedTimeoutsOnAreaChange.push(Game.setTimeout(function () {
					Weather.commenceLightningStrike();
					Game.camera.initScreenShake(13,4000);
					Areas.samhainLair.weather = "bloodRain";
					Areas.samhainLair.indoors = false;
					Weather.updateVariables();
				}, 74666));

				Game.clearedTimeoutsOnAreaChange.push(Game.setTimeout(function () {
					Game.enemies.push(new Enemy(Game.prepareNPC({
						x: 313,
						y: 150,
						template: EnemyTemplates.eaglecrest.phantom2,
					}, "enemies")));
				}, 75222));

				Game.clearedTimeoutsOnAreaChange.push(Game.setTimeout(function () {
					Game.enemies.push(new Enemy(Game.prepareNPC({
						x: 300,
						y: 950,
						template: EnemyTemplates.eaglecrest.phantom2,
					}, "enemies")));
				}, 77777));

				Game.clearedTimeoutsOnAreaChange.push(Game.setTimeout(function () {
					Game.enemies.push(new Enemy(Game.prepareNPC({
						x: 100,
						y: 100,
						template: EnemyTemplates.eaglecrest.phantom1,
					}, "enemies")));
					Game.enemies[Game.enemies.length-1].say("We must make a last stand..");
				}, 79777));

				Game.clearedTimeoutsOnAreaChange.push(Game.setTimeout(function () {
					Game.enemies.push(new Enemy(Game.prepareNPC({
						x: 500,
						y: 550,
						template: EnemyTemplates.eaglecrest.phantom2,
					}, "enemies")));
				}, 81222));

				Game.clearedTimeoutsOnAreaChange.push(Game.setTimeout(function () {
					Game.enemies.push(new Enemy(Game.prepareNPC({
						x: 400,
						y: 130,
						template: EnemyTemplates.eaglecrest.phantom2,
					}, "enemies")));
				}, 81777));

				Game.clearedTimeoutsOnAreaChange.push(Game.setTimeout(function () {
					Game.enemies.push(new Enemy(Game.prepareNPC({
						x: 500,
						y: 333,
						template: EnemyTemplates.eaglecrest.phantom2,
					}, "enemies")));
				}, 82100));

				Game.clearedTimeoutsOnAreaChange.push(Game.setTimeout(function () {
					Game.enemies.push(new Enemy(Game.prepareNPC({
						x: 200,
						y: 200,
						template: EnemyTemplates.eaglecrest.phantom2,
					}, "enemies")));
				}, 82500));
			},

			rewards: {
				xp: 50,
				items: [
					{item: Items.currency[2], quantity: 6,},
					{item: Items.consumable[9],},
				],
				reputation: {
					theSoothsayer: 50,
				},
			},

			onQuestFinish: function () {
				Dom.alert.page("During a Blood Moon, enemies will be much stronger and will respawn much faster.<br>Health will no longer regenerate outdoors, unless using a special Samhain food item.<br><br>Some special bosses will also spawn. Kill them before the moon disappears at the end of the month!<br><br>Enemies have a chance to drop <b>Samhain Marks</b>, which can be brought to some merchants for rewards.<br>But at what cost?<br>", 0);
			},
		},


		{
			id: 7,
			quest: "Troubled Waters",
			questArea: "eaglecrest",

			steps: [
				{
					stepNum: 0,
					name: "Fisherman Guimtal",
					chat: [{
						text: `Somethin' has been infesting the waters and makin' it so us fishermen can't get no fish.`,
					},{
						text: `I think the toads may hold the answer. Can yah get some parts from 'em for me so I can investigate 'em.`,
					},],
				},
				{
					stepNum: 1,
					name: "Fisherman Guimtal",
					chat: [{
						text: `Thanks for the help, I'll get back to yah.`,
					},],
					rewards: {
						xp: 30,
						items: [
							{item: Items.currency[2], quantity: 3,},
							{item: Items.currency[3], quantity: 1,},
						],
					},
					removeItems: [
						{item: Items.fish[34], quantity: 16,}, // tadpoles
						{item: Items.fish[33], quantity: 4,}, // frogspawn
					],
					objectiveRequirement: [0,1]
				},
			],

			objectivesList: [
				{id: 0, text: "Obtain 16 tadpoles.",
					isCompleted: function () {
						return Dom.inventory.check(34, "fish");
					}, outOf: 16,
				},
				{id: 1, text: "Obtain 4 frogspawn.",
					isCompleted: function () {
						return Dom.inventory.check(33, "fish");
					}, outOf: 4,
				},
				{id: 2, text: "Speak to <strong>Fisherman Guimtal</strong>.",
				},
			],

			howToStart: "Speak to <strong>Fisherman Guimtal</strong>.",
			levelRequirement: 5,
			questRequirements: ["Overdraft"],
		},

		{
			id: 8,
			quest: "A Fool's Errand",
			questArea: "eaglecrest",

			steps: [
				{
					stepNum: 0,
					name: "The Jester",
					chat: [{
						text: `Good heavens, I’m all out of tricks!`,
					},{
						text: `See, I’m the Eaglecrest court jester but nothing’s funny about getting robbed.`,
					},{
						text: `I was just frolicking in the praries when waylay hit - those toads must have thought my foghorn was a froghorn the way they hopped off with it!`,
						long: true
					},{
						text: `My confetti cannon has been pilfered, my triangle’s gone pear-shaped, but worst of all, my prized juggling balls have been nicked. Anyone in the Eaglecrest plains could have them by now!`,
						long: true
					},{
						text: `I can’t do my routine without my props... I’d have to become a... <i>(shudders)</i> a mime! NO! I need them back.`,
					},{
						text: `They must be somewhere in the plains! I’d help you... But look at me - I’m not exactly camouflaged!`,
					},],
				},
				{
					stepNum: 1,
					name: "The Jester",
					chat: [{
						text: `Thank you so much! Now that you’ve helped this poor clown, you’ll be laughing all the way to the bank. I’ll make sure of it!`,
					},{
						text: `And to whoever stole my magic mirror... you need to take a long hard look at yourself!`,
					},],
					rewards: {
						xp: 85,
						items: [
							{item: Items.currency[2], quantity: 4,},
						],
						reputation: {
							eaglecrestCity: 20,
							theJester: 110,
						},
					},
					removeItems: [
						{item: Items.item[58],},
						{item: Items.item[60],},
						{item: Items.item[59],},
						{item: Items.item[57], quantity: 3},
					],
					objectiveRequirement: [0,1,2,3]
				},
			],

			objectivesList: [
				{id: 0, text: "Find The Jester's <b>Brass Bugle</b> in the Eaglecrest Plains.",
					isCompleted: function () {
						return Dom.inventory.check(58, "item");
					}, outOf: 1,
				},
				{id: 1, text: "Find The Jester's <b>Confetti Cannon</b> in the Eaglecrest Plains.",
					isCompleted: function () {
						return Dom.inventory.check(60, "item");
					}, outOf: 4,
				},
				{id: 2, text: "Find The Jester's <b>Triangle</b> in the Eaglecrest Plains.",
					isCompleted: function () {
						return Dom.inventory.check(59, "item");
					}, outOf: 4,
				},
				{id: 3, text: "Find The Jester's three <b>Juggling Balls</b> in the Eaglecrest Plains.",
					isCompleted: function () {
						return Dom.inventory.check(57, "item");
					}, outOf: 4,
				},
				{id: 4, text: "Speak to <b>The Jester</b>.",
				},
			],

			howToStart: "Speak to <b>The Jester</b> in the Eaglecrest Plains.",
			levelRequirement: 7,
			questRequirements: ["Overdraft"],
		},
		{
			id: 9,
			quest: "Every Flower in My Garden",
			questArea: "eaglecrest",

			steps: [
				{
					stepNum: 0,
					name: "Farmer Eloise",
					chat: [{
						text: `Hmm~ Do you think the bees are happy?˚`,
					},{
						text: `They keep swarming down in that flower forest˚ I hope they're not sad about my flower patches⁀!`,
						onFinish: function () {
							// pan to the patch
							Game.camera.pan({x: 5875, y:1790}, 250, "constant");
						}
					},{
						text: `You see that empty patch over there˚?`,
					},{
						text: `Some <b>blue callalilies</b> would be great there~⁀They're big and blue and there's some in the flower forest~`,
						onFinish: function () {
							// pan back
							Game.camera.pan(Game.hero, 250, "constant", function () {
								// reset camera
								Game.camera.follow(Game.hero);
							}, 0);
						}
					},{
						text: `Oh⁀and some <b>Marigolds</b>˚ they're the yellow flowers all around the plains~`,
					},],
				},
				{
					stepNum: 1,
					name: "Farmer Eloise",
					chat: [{
						text: `I'll plant these tomorrow~`,
					},{
						text: `⁀ ‿ ⁀`,
					},],
					rewards: {
						xp: 40,
						items: [
							{item: Items.tool[4]},
							{item: Items.currency[2], quantity: 2,},
						],
						reputation: {
							eaglecrestFarm: 50,
						},
					},
					removeItems: [
						{item: Items.item[68], quantity: 6},
						{item: Items.item[31], quantity: 6},
					],
					objectiveRequirement: [0,1]
				},
			],

			objectivesList: [
				{id: 0, text: "Pick 6 <b>blue callalillies</b> from the <b>flower forest</b> in the Eaglecrest Plains <i>(they're big and blue~)</i>.",
					isCompleted: function () {
						return Dom.inventory.check(68, "item");
					}, outOf: 6,
				},
				{id: 1, text: "Pick 6 <b>marigolds</b> from around the Eaglecrest Plains <i>(they're yellow)</i>.",
					isCompleted: function () {
						return Dom.inventory.check(31, "item");
					}, outOf: 6,
				},
				{id: 2, text: "Speak to <b>Farmer Eloise</b>.",
				},
			],

			howToStart: "Speak to <b>Farmer Eloise</b> in the Eaglecrest Plains Farms.",
			levelRequirement: 8,
			questRequirements: ["Overdraft"],
			// tbd reputation requirement
		},
		{
			id: 10,
			quest: "WANTED: Coyote Pack Wrangler!",
			questArea: "eaglecrest",

			steps: [
				{
					stepNum: 0,
					name: "Recruiter Sylvie",
					chat: [{
						text: `${Player.name}! You look like you need something to get on with!`,
					},{
						text: `The City has recently been having trouble with Coyotes in the eastern grassy region of the Plains.`,
					},{
						text: `It is believed that one or many <b>Coyote Pack Wranglers</b> are causing this trouble. If you feel ready, seek one out and deal with them!`,
					},],
				},
				{
					stepNum: 1,
					name: "Recruiter Sylvie",
					chat: [{
						text: `Well done. Although the Pack Wrangler may be back soon, this will surely act as a deterrent.`,
					},],
					rewards: {
						xp: 50,
						items: [
							{item: Items.currency[2], quantity: 4,},
						],
						reputation: {
							eaglecrestCity: 60,
						},
					},
					objectiveRequirement: 0
				},
			],

			objectivesList: [
				{id: 0, text: "Kill a <b>Coyote Pack Wrangler</b> in the eastern grassy region of the Plains.",
					isCompleted: function () {
						return Player.quests.questProgress.coyoteWranglers > 0;
					},
				},
				{id: 1, text: "Speak to <strong>Recruiter Sylvie</strong>.",
				},
			],

			howToStart: "Speak to <strong>Recruiter Sylvie</strong>.",
			levelRequirement: 8,
			questRequirements: [],
		},
		{
			id: 11,
			quest: "WANTED: Coyote Pack Wrangler! (bis)",
			questArea: "eaglecrest",

			steps: [
				{
					stepNum: 0,
					name: "Recruiter Sylvie",
					chat: [{
						text: `Hello again, ${Player.name}. It is unfortunate, but the <b>Coyote Pack Wrangler</b> has been sighted again in the Plains' eastern grassy region.`,
					},{
						text: `Even more unfortunate - it seems to have come with backup...`,
					},{
						text: `Best you deal with it for the safety of the City's citizens. Maybe the Wrangler and its coyotes will get the message this time??`,
					},],
				},
				{
					stepNum: 1,
					name: "Recruiter Sylvie",
					chat: [{
						text: `Great. Let's hope the Pack Wrangler finds somewhere else to pester, for the City's sake...`,
					},],
					rewards: {
						xp: 50,
						items: [
							{item: Items.currency[2], quantity: 4,},
						],
						reputation: {
							eaglecrestCity: 60,
						},
					},
					objectiveRequirement: 0
				},
			],

			objectivesList: [
				{id: 0, text: "Kill a <b>Coyote Pack Wrangler</b> in the eastern grassy region of the Plains.",
					associatedVariable: "coyoteWranglers",
				},
				{id: 1, text: "Speak to <strong>Recruiter Sylvie</strong>.",
				},
			],

			howToStart: "Speak to <strong>Recruiter Sylvie</strong>.",
			levelRequirement: 8,
			questRequirements: ["WANTED: Coyote Pack Wrangler!"],

			repeatTime: "daily",
			shareCooldownWith: [{questArea: "eaglecrest", id: 10}],

			resetVariables: [
				"coyoteWranglers",
			],
		},
		{
			id: 12,
			quest: "Troubled Waters II",
			questArea: "eaglecrest",

			steps: [
				{
					stepNum: 0,
					name: "Fisherman Guimtal",
					chat: [{
						text: `Ah yah back. Seems like the toads ain't the ones causin' the fish to go.`,
					},{
						text: `Try speakin' to <strong>Fisher Sharptooth</strong> to if they know anythin' about this.`,
					},{
						text: `They should be fishin' <b>east</b> of the lake.`,
					},],
				},
				{
					stepNum: 1,
					name: "Fisherman Sharptoth",
					chat: [{
						text: `Miau miau?`,
						options: [
							{
								text: "Say that <b>Fisherman Guimtal</b> sent you.",
								action: "progress",
							},
						]
					},{
						text: `Miau, miau miau miau miau! Miau miau miau.`,
					},],
				},
				{
					stepNum: 2,
					name: "Fisherman Guimtal",
					chat: [{
						text: `Ah, I see. They're a cat.`,
					},{
						text: `Yah see, I've never actually spoken to 'em, I just heard from mah friends.`,
					},{
						text: `Why don't yah try speakin' to some <b>shopkeepers</b> in <strong>Eaglecrest</strong> and see if they sellin' any <b>translators</b> or somethin' like that.`,
					},{
						text: `I'll see yah around, then.`,
					},],
				},
				{
					stepNum: 3,
					forceChoose: true,
					chooseText: "Ask about a <b>translator</b>.",
					name: "Shopkeeper Barda",
					chat: [{
						text: `A <b>translator?</b> I have things much greater!`,
					},{
						text: `But I also have something that you could be looking for. Here's a <b>blueprint</b> which I found while trying to find some more wares to sell. I was going to bring it to <strong>Alchemist Tamtam</strong> later, but it seems it could be more useful to you.`,
						long: true,
					},{
						text: `Try bringing it to <strong>Alchemist Tamtam</strong> and see if he can build the <b>translator</b> for you!<br><br>`,
					},{
						text: `Gold? No need, take it for free. Although, make sure to buy some of my wares later!`,
					},],
					rewards: {
						items: [
							{item: Items.item[74]},
						],
					},
				},
				{
					stepNum: 4,
					forceChoose: true,
					chooseText: "Give blueprint to <strong>Alchemist Tamtam</strong>.",
					name: "Alchemist Tamtam",
					chat: [{
						text: `Not suuuuuure what I can do with this! This looks more like a fish than a device or alchemy ingrediant!`,
					},{
						text: `Maybe talk to <strong>Fisherman Tobenam</strong> and see if he can do something with it!`,
					},],
				},
				{
					stepNum: 5,
					forceChoose: true,
					chooseText: "Show <strong>Fisherman Tobenam</strong> the <b>blueprint</b>.",
					name: "Fisherman Tobenam",
					chat: [{
						text: `I haven't seen one of those in a while, heheh. It's a sort of blueprint, more like a fish map, heh.`,
					},{
						text: `Those fish are pretty rare, heheh, but I'm sure you can find one of them here. Try fishing a while and you should find one.`,
					},],
				},
				{
					stepNum: 6,
					name: "Fisherman Sharptooth",
					chat: [{
						text: `Miau, miau miau?`,
						options: [
							{
								text: "Present the translator to Sharptooth.",
								action: "progress",
							},
						]
					},{
						text: `<i>Sharptooth snaches the translator out of your hand and eats it!!</i>`,
					},{
						text: `Yous looks surprised? Did yous nots thinks I woulds eat the translator?`,
					},{
						text: `This translator was for mes right? Oh well, yous can hears mes now.`,
					},{
						text: `Oh, yous wants to learns abouts whys there no fish? Wells it's tragic indeeds.`,
					},{
						text: `I'm sures with yours helps we cans solves this issue.`,
					},],
					rewards: {
						xp: 50,
						items: [
							{item: Items.currency[2], quantity: 2,},
							{item: Items.currency[3], quantity: 2,},
						],
						reputation: {
							eaglecrestCity: 30,
						},
					},
					removeItems: [
						{item: Items.fish[37],}, // remove the translator
					],
					objectiveRequirement: 5
				},
			],

			objectivesList: [
				{id: 0, text: "Speak to <strong>Fisher Sharptooth</strong> located <b>east</b> of the lake.",
					completeStep: 1,
				},
				{id: 1, text: "Speak to <strong>Fisherman Guimtal</strong> to see how to speak to <strong>Fisher Sharptooth</strong>.",
					revealStep: 1,
					completeStep: 2,
				},
				{id: 2, text: "Speak to the <b>shopkeepers</b> of <strong>Eaglecrest City</strong> to see if they have a <b>translator</b>.",
					revealStep: 2,
					completeStep: 3,
				},
				{id: 3, text: "Speak to <strong>Alchemist Tamtam</strong> in the <b>east</b> of <strong>Eaglecrest City</strong> and give him the <b>blueprint</b>.",
					revealStep: 3,
					completeStep: 4,
				},
				{id: 4, text: "Speak to <strong>Fisherman Tobenam</strong> in <strong>Fisher's Valley</strong> and see what he can do with the <b>blueprint</b>.",
					revealStep: 4,
					completeStep: 5,
				},
				{id: 5, text: "Fish up a <b>Universal Translator</b> in <strong>Fisher's Valley</strong>.",
					revealStep: 5,
					associatedVariable: "translatorFishedUp",
				},
				{id: 6, text: "Return to <strong>Fisher Sharptooth</strong> and give them the <b>Universal Translator</b>.",
					revealStep: 5,
				},
			],

			howToStart: "Speak to <strong>Fisherman Guimtal</strong>.",
			levelRequirement: 5,
			questRequirements: ["Troubled Waters", "Learning to Fish III"],
			shareCooldownWith: [{questArea: "eaglecrest", id: 7}],
		},
		{
			id: 13,
			quest: "Troubled Waters III (Eaglecrest Plains Fishing Tourǃǃ)",
			questArea: "eaglecrest",

			steps: [
				{
					stepNum: 0,
					name: "Fisher Sharptooth",
					chat: [{
						text: `So wes needs to finds wheres the source of this issue is.`,
					},{
						text: `I thinks wes could do this bys fishing arounds the plains. This should helps us finds wheres the issue.`,
					},],
				},
				{
					stepNum: 1,
					name: "Fisher Sharptooth",
					chat: [{
						text: `Hows did you gets on?`,
						options: [
							{
								text: "Show Fisher Sharptooth the fish",
								action: "progress",
							},
						]
					},{
						text: `They dos not looks tastys.`,
					},{
						text: `It seems the fish seems to bes comings froms thes <b>well</b>. Perhaps theres ares somethings downs theres gettings all the fish.`,
					},{
						text: `Whys don'ts yous head downs the well and do some fishing to sees if theres anything downs theres.`,
					},],
					objectiveRequirement: [0,1,2,3,4]
				},
				{
					stepNum: 2,
					name: "Fisher Sharptooth",
					chat: [{
						text: `I'lls examines this fish fors yous. Comes backs laters and I'lls tells you the lasts things to do.`,
					},],
					objectiveRequirement: [6],
					rewards: {
						xp: 50, // tbd remove and replace with some sort of fishing reward / fishing xp / fishing skill
						items: [
							{item: Items.currency[2], quantity: 3,},
							{item: Items.currency[3], quantity: 2,},
						],
						reputation: {
							eaglecrestCity: 30,
						},
					},
				},
			],

			objectivesList: [
				{id: 0, text: "Fish up a fish near the <b>train station</b> in the <b>north west</b> of the <b>plains</b>.",
					associatedVariable: "northWestFish"
				},
				{id: 1, text: "Fish up a fish near the <b>flower forest</b> in the <b>south west</b> of the <b>plains</b>.",
					associatedVariable: "southWestFish"
				},
				{id: 2, text: "Fish up a fish near the <b>lake</b> in the <b>centre</b> of the <b>plains</b>.",
					associatedVariable: "centreFish"
				},
				{id: 3, text: "Fish up a fish near the <b>farm</b> in the <b>north east</b> of the <b>plains</b>.",
					associatedVariable: "northEastFish"
				},
				{id: 4, text: "Fish up a fish near the <b>tall grass</b> in the <b>south east</b> of the <b>plains</b>.",
					associatedVariable: "southEastFish"
				},
				{id: 5, text: "Return to <b>Fisher Sharptooth</b>.",
					completeStep: 1
				},
				{id: 6, text: "Head down the <b>Eaglecrest Well</b> and fish up a fish.",
					revealStep: 1, associatedVariable: "wellFish"
				},
				{id: 7, text: "Return to <b>Fisher Sharptooth</b>.",
					revealStep: 1,
				},
			],

			howToStart: "Speak to <strong>Fisher Sharptooth</strong>.",
			levelRequirement: 5,
			questRequirements: ["Troubled Waters II"],
		},
		{
			id: 14,
			quest: "Troubled Waters IV (Big Fish in a Small Pond)",
			questArea: "eaglecrest",

			steps: [
				{
					stepNum: 0,
					name: "Fisher Sharptooth",
					chat: [{
						text: `I looks at the fish ands its seems thats theres is a large fish in the well.`,
					},{
						text: `I needs somes bait to gets the fish outs. Gets mes a fish longer thans a metre please ands wes cans ends this.`,
					},],
				},
				// the two intermediate steps with sharptooth are actually done from areadata, since these can be repeated, and are shared with the reprisal of this quest (id 16)
				{
					stepNum: 1,
					name: "Fisher Sharptooth",
					chat: [{
						text: `Ooohs, yous kills it. The fish shoulds be comings backs nows. Alls the fishers wills be pleased whens yous sees thems next.`,
					},{
						text: `Here's somes <b>gold</b> ands <b>fishing seals</b> fors yours troubles. I'lls sees yous soons.`,
					},],
					rewards: {
						xp: 100,
						reputation: {
							eaglecrestCity: 100,
						},
						items: [
							{item: Items.currency[2], quantity: 5,},
							{item: Items.currency[3], quantity: 3,},
						],
					},
					objectiveRequirement: 3,
				}
			],

			objectivesList: [
				{id: 0, text: "Fish up a fish longer than <b>100cm</b> and return to <b>Fisher Sharptooth</b> to make it into bait.",
					isCompleted: function () {
						return (Dom.inventory.check(37, "consumable", 1) ||
							Dom.inventory.check(40, "fish", 1) ||
							Dom.inventory.check(38, "consumable", 1) ||
							Player.quests.questProgress.lakeLurkerLastCaught === GetFullDate());
					}
				},
				{id: 1, text: "Use the King of Herrings Bait to fish up the <b>King of Herrings</b> located in <b>Eaglecrest Well</b>, then return to <b>Fisher Sharptooth</b> to make it into bait.",
					isHidden: function () {
						return !Player.quests.prog.eaglecrest[14].vars.herringBaitObtained;
					},
					isCompleted: function () {
						return (Dom.inventory.check(40, "fish", 1) ||
							Dom.inventory.check(38, "consumable", 1) ||
							Player.quests.questProgress.lakeLurkerLastCaught === GetFullDate());
					}
				},
				{id: 2, text: "Use the Lake Lurker Bait to fish up the <b>Lake Lurker</b> located in <b>Eaglecrest Well</b>.",
					isHidden: function () {
						return !Player.quests.prog.eaglecrest[14].vars.lakeLurkerBaitObtained;
					},
					isCompleted: function () {
						return Player.quests.questProgress.lakeLurkerLastCaught === GetFullDate();
					}
				},
				{id: 3, text: "Defeat the <b>Lake Lurker</b>.",
					isHidden: function () {
						return !Player.quests.prog.eaglecrest[14].vars.lakeLurkerBaitObtained;
					},
					isCompleted: function () {
						return Player.bossesKilled.lakeLurker === GetFullDate();
					}
				},
				{id: 4, text: "Return to <b>Fisher Sharptooth</b>.",
					isHidden: function () {
						return !Player.quests.prog.eaglecrest[14].vars.lakeLurkerBaitObtained;
					},
				},
			],

			howToStart: "Speak to <strong>Fisher Sharptooth</strong>.",
			levelRequirement: 5,
			questRequirements: ["Troubled Waters III (Eaglecrest Plains Fishing Tourǃǃ)"],
			shareCooldownWith: [{questArea: "eaglecrest", id: 13}],
		},
		// skip one quest (to id 16) to get to the daily quest version of this

		{
			id: 15,
			quest: "Bee Careful ǃ ǃ",
			questArea: "eaglecrest",

			steps: [
				{
					stepNum: 0,
					name: "Farmer Eloise",
					chat: [{
						text: `The bees won't stop swarming that flower forest~!`,
					},{
						text: `Maybe they're lost⁀˚`,
					},{
						text: `Could you try to lure a swarm back˚?`,
					},{
						text: `Try not to hurt the bees~`,
					},],
				},
				{
					stepNum: 1,
					name: "Farmer Eloise",
					chat: [{
						text: `Welcome back, bees˚!⁀!`,
					},],
					objectiveRequirement: 0,
					rewards: {
						xp: 60,
						items: [
							{item: Items.currency[2], quantity: 4,},
						],
						reputation: {
							eaglecrestFarm: 100,
						},
					},
				}
			],

			objectivesList: [
				{id: 0, text: "Lure a <b>Bee Swarm</b> from the Plains flower forest to Farmer Eloise's beehives.",
					isCompleted: function() {
						let objCompleted = false;
						if (!Player.quests.questProgress.beeCarefulFinished && typeof Game.enemies !== "undefined") {
							if(Game.areaName === "eaglecrestPlains")
							{
								let beeSwarms = Game.enemies.filter(enemy => enemy.name === "Bee Swarm" && enemy.hostility === "hostile");
								let farmerEloise = Game.characters.filter(npc => npc.name === "Farmer Eloise")[0];
								let nearest = Game.closest(beeSwarms, farmerEloise);
								objCompleted = (Game.distance(nearest, farmerEloise) < 300);
								if (objCompleted) {
									Player.quests.questProgress.beeCarefulFinished = true;

									nearest.attackTargets[Game.hero.id].baseAggro = 0;
									nearest.attackTargets[Game.hero.id].aggro = 0;
									nearest.hostility = "neutral";
								}
							}
						}
						else {
							objCompleted = true;
						}

						return objCompleted;
					},
				},
				{id: 1, text: "Speak to <b>Farmer Eloise</b>."},
			],

			howToStart: "Speak to <b>Farmer Eloise</b> in the Eaglecrest Plains Farms.",
			levelRequirement: 9,
			questRequirements: ["Every Flower in My Garden"],
			// tbd reputation requirement?
		},

		{
			id: 16,
			quest: "Troubled Waters (bis)",
			questArea: "eaglecrest",

			repeatTime: "daily",

			steps: [
				{
					stepNum: 0,
					name: "Fisher Sharptooth",
					chat: [{
						text: `The fish numbers seems to bes dwindling agains.`,
					},{
						text: `I needs somes bait to gets the fish outs. Please gets mes a fish longer thans a metre please ands wes cans ends this.`,
					},],
				},
				{
					stepNum: 1,
					finishName: "Fisher Sharptooth",
					finishChat: [{
						text: `Ooohs, yous kills it. The fish shoulds be comings backs nows. Alls the fishers wills be pleased.`,
					},{
						text: `Here's somes <b>gold</b> ands a <b>fishing seal</b> fors yours troubles. I'lls sees yous soons.`,
					},],
					objectiveRequirement: 2,
					rewards: {
						xp: 50,
						reputation: {
							eaglecrestCity: 50,
						},
						items: [
							{item: Items.currency[2], quantity: 2,},
							{item: Items.currency[3], quantity: 1,},
						],
					},
				}
			],

			objectivesList: [
				{id: 0, text: "Fish up a fish longer than <b>100cm</b> and return to <b>Fisher Sharptooth</b> to make it into bait.",
					isCompleted: function () {
						return (Dom.inventory.check(37, "consumable", 1) ||
							Dom.inventory.check(40, "fish", 1) ||
							Dom.inventory.check(38, "consumable", 1) ||
							Player.quests.questProgress.lakeLurkerLastCaught === GetFullDate());
					}
				},
				{id: 1, text: "Use the King of Herrings Bait to fish up the <b>King of Herrings</b> located in <b>Eaglecrest Well</b>, then return to <b>Fisher Sharptooth</b> to make it into bait.",
					isCompleted: function () {
						return (Dom.inventory.check(40, "fish", 1) ||
							Dom.inventory.check(38, "consumable", 1) ||
							Player.quests.questProgress.lakeLurkerLastCaught === GetFullDate());
					}
				},
				{id: 2, text: "Use the Lake Lurker Bait to fish up the <b>Lake Lurker</b> located in <b>Eaglecrest Well</b>, then kill the Lake Lurker.",
					isCompleted: function () {
						return Player.bossesKilled.lakeLurker === GetFullDate();
					}
				},
				{id: 3, text: "Return to <b>Fisher Sharptooth</b>.",},
			],

			howToStart: "Speak to <strong>Fisher Sharptooth</strong>.",
			levelRequirement: 5,
			questRequirements: ["Troubled Waters IV (Big Fish in a Small Pond)"],
			shareCooldownWith: [{questArea: "eaglecrest", id: 14}],
		},

		// cat questline
		{
			id: 17,
			quest: "Help! Lost Cat",
			questArea: "eaglecrest",

			steps: [
				{
					stepNum: 0,
					name: "Help Notice",
					chat: [{
						text: `<b>Have you seen this cat?</b>`,
					},{
						text: `Missing white cat with black smudge pattern.`,
					},{
						text: `His name is <b>Amelio</b>.`,
					},{
						text: `She was last seen outside the <b>Eaglecrest tavern</b>.`,
					},{
						text: `Please talk to <b>Priest Kemp-Eau</b> in the <b>Eaglecrest Monastery</b> if you are able to assist.`,
					},{
						text: `<b>Generous reward</b> upon Amelio's finding.`,
					},],
				},
				{
					stepNum: 1,
					name: "Priest Kemp-Eau",
					chat: [{
						text: `${Player.name}! It must be by some divine destiny you've come by here!`,
					},{
						text: `Our cat <b>Amelio</b> has gone missing... for the third time this month...`,
					},{
						text: `We treat him well! No other cat in the realm has such spiritual connection to those above. So, ${Player.name}, you must understand the divine shock we are in that she has gone missing so frequently.`,
						long: true,
					},{
						text: `It's taken a toll on us here at the Monastery. Some of us suspect Elder involvement but.. well... I'd hesitate to jump to conclusions.`,
					},{
						text: `Anyway! I am getting ahead of myself. You really are in the right place at the right time. Would you be able to offer your compitencies?`,
						options: [
							{
								text: "Sure!",
								action: "progress",
							},
							{
								text: "If I must...",
								action: "progress",
							},
						]
					},{
						text: `What would the Monastery do without you, ${Player.name}!`,
					},{
						text: `I've spoken to the Tinkerers' Guild and managed to get my hands on a rare prototype: the <b>PawPerceptors~1450α</b>.`,
					},{
						text: `I was told it works via.. something something ley emittance..`,
					},{
						text: `<i>Sigh...</i> I'm not very technical myself. I gathered it leads your Psyche on a divine path to where you need to be.`
					},{
						text: `Anyway, follow the trail of paw prints and it should show us where Amelio is running off to!`,
					},],
					rewards: {
						items: [{item: Items.helm[45]}],
					},
				},
				{
					stepNum: 2,
					name: "Priest Kemp-Eau",
					chat: [{
						text: `${Player.name}, I sense you're bearing bad news. Where were you led?`,
						options: [
							{
								text: "Tell Priest Kemp-Eau what happened",
								action: "progress",
							},
						]
					},{
						text: `Down the sewer? ....<b>That is certainly not a holy place!!!</b>`,
					},{
						text: `I just can't think why Amelio would be going down.. <i>there</i>, rather than in the Monastery..`,
					},{
						text: `She's a cat of faith!!`,
					},{
						text: `Oh, and to think the sewers are getting demolished soon..`,
					},{
						text: `${Player.name}, this is not good - we need to do something about this before Amelio gets injured!`,
					},{
						text: `I sense <b>Alchemist Tamtam</b> will be able to help with this. Whilst I was searching for a device to find Amelio with, he did mention an experimental recipe that could help...`,
						long: true,
					},],
					rewards: {
						xp: 50,
						items: [{item: Items.currency[2], quantity: 5}, {item: Items.item[1]}],
					},
					removeItems: [{
						item: Items.helm[45],
					}],
				}
			],

			objectivesList: [
				{
					text: "Talk to <strong>Priest Kemp-Eau</strong> in the <b>Eaglecrest Monastery</b> to the east of Eaglecrest.",
					completeStep: 1,
				},
				{
					text: "Use the PawPerceptor~1450α to find the missing cat Amelio.",
					associatedVariable: "", // set by a tripwire after following the path (only whilst wearing the goggles)
				},
				{
					text: "Bring the cat to <strong>Priest Kemp-Eau</strong>.",
					step: 1, // refers to step1Chat (instead of isCompleted)
					isHidden: function () {

					},
				},
				{
					text: "Report back to <strong>Priest Kemp-Eau</strong>.",
					isCompleted: function () {

					},
					isHidden: function () {

					},
				},
				{
					text: "Visit <b>Alchemist Tamtam<b> in <b>Eaglecrest Elixirs</b>.",
					step: "finish", // refers to finishChat (instead of isCompleted)
					isHidden: function () {

					},
				},
			],

			howToStart: "Find a 'lost cat' notice in Eaglecrest City.",
			levelRequirement: 4,
			questRequirements: ["Overdraft"], // tbd change this so you have to have finished fontanel to unlock, and it's a storyline quest
		},
		{
			id: 18,
			quest: "Potion Making IV", // I and II are in logging camp; maybe add an III in the caves somewhere :) also, a fishing only potion making could be cool
			questArea: "eaglecrest",

			steps: [
				{
					stepNum: 0,
					name: "Alchemist Tamtam",
					chat: [{
						text: `${Player.name}!!! Great to see you again!!!<br><em>Tamtam's tail wags quickly.</em>`,
						options: [
							{
								text: "Tell Tamtam about the situation.",
								action: "progress",
							},
						]
					},{
						text: `Oooooh.... Yeeeessss I do have a recipe I've been working on!!`,
					},{
						text: `Only thing is...... The ingredients can be hard to find... <sub>you'll see what I mean</sub>`,
					},{
						text: `Soooo, let me make you a list!!`,
					},{
						text: `You'll need three <b>cattails</b> from the rivers...`,
					},{
						text: `One <b><i>Doohickey</i></b>...`,
						options: [
							{
								text: "Ok...",
								action: "progress",
							},
							{
								text: "What??",
								action: "progress",
							},
						]
					},{
						text: `Shhh!! You'll know what I mean...`,
					},{
						text: `And, finally, one <b>Living Frog's Leg</b>... you can get the <i>Doohickey</i> and the leg from the toads around the plains!!`,
					},{
						text: `Welllll, good luck!!!`,
					},]
				},
			],

			startName: "Alchemist Tamtam",
			startChat: [{
				text: `Ooookkkaaayy soooo, let me make you a list!!`,
			},{
				text: `You'll need three <b>cattails</b> from the rivers...`,
			},{
				text: `One <b><i>Doohickey</i></b>...`,
				options: [
					{
						text: "Ok...",
						action: "progress",
					},
					{
						text: "What??",
						action: "progress",
					},
				]
			},{
				text: `Shhh!! You'll know what I mean...`,
			},{
				text: `And, finally, one <b>Living Frog's Leg</b>... you can get the <i>Doohickey</i> and the leg from the toads around the plains!!`,
			},{
				text: `Welllll, good luck!!!`,
			},],

			stepName1: "Alchemist Tamtam",
			stepChat1: [{
				text: `<em>Tamtam's ears perk up.</em><br>Yay!! You found them! And you're not even injured!!`,
				options: [
					{
						text: "Hand Tamtam the ingredients.",
						action: "progress",
					},
				]
			},{
				text: `Ok... let's see!! First, for agility, the frog's leg....`,
			},{
				text: `Tamtam adds the leg to a cauldron, and it bubbles and turns green-y brown as the leg sinks.`,
				saidBy: "none",
				autoProgress: true,
				progressIn: 4000,
			},{
				text: `Yay!! Now the <i>Doohickey</i>.`,
			},{
				text: `The <i>Doohickey</i> simmers in the cauldron as the contents become more viscous.`,
				saidBy: "none",
				autoProgress: true,
				progressIn: 4000,
			},{
				text: `Purrrfect... now for the last ingredient!`,
			},{
				text: `Tamtam adds the cattails all at once, filling the room with a fine mist as the cauldron turns furry(???) and ginger.`,
				saidBy: "none",
				autoProgress: true,
				progressIn: 4000,
			},{
				text: `Try this!!!!`,
				options: [
					{
						text: "Take potion.",
						action: "function",
						function: function () {
							// give the potion; make sure to check that the player has inventory space (otherwise give them temp space?)
						}
					},
				]
			},],

			finishName: "Meow",
			finishChat: "Well...",

			objectivesList: [
				{
					text: "Gather 3 <b>cattails</b> from the Plains river. <i>They are the brown reeds in the water</i>.",
					isCompleted: function () {

					},
				},
				{
					text: "Loot a <b>Living Frog's Leg</b> from a toad in the Plains.",
					isCompleted: function () {

					},
				},
				{
					text: "Loot a <b><i>Doohickey</i></b> from a toad in the Plains.",
					isCompleted: function () {

					},
				},
				{
					text: "Give the ingredients to <b>Alchemist Tamtam<b> in <b>Eaglecrest Elixirs</b>.",
					isCompleted: function () {

					},
				},
				{
					text: "Drink the potion!!",
					isCompleted: function () {

					},
					isHidden: function () {

					},
				},
			],

			autofinish: true,

			howToStart: "Speak to <strong>Alchemist Tamtam</strong> in <b>Eaglecrest Elixirs</b>.",
			levelRequirement: 4,
			questRequirements: ["Help! Lost Cat"],

			rewards: {
				xp: 60,
				items: [{item: Items.item[1]}], // mystery
			},
		},
		{
			id: 19,
			quest: "Practice Makes Purrfect",
			questArea: "eaglecrest",

			startName: "Alchemist Tamtam",
			startChat: [{
				text: `It's weird being a cat right!!! <sub>First try!! Yessss...</sub>`,
			},{
				text: `Last time I made someone a slug by accident... <sup>ooooppsss</sup>`,
			},,{
				text: `Anyway. Some things you should know!!`,
			},{
				text: `You can speak to me since... welllll... I'm just a dog... But gooood luck communicating with anyone else!`,
			},{
				text: `Luckily for you, your trainer is a cat too!`,
				options: [
					{
						text: "Trainer?",
						action: "progress",
					},
					{
						text: "Sounds about right..",
						action: "progress",
					},
				]
			},{
				text: `Welllll, you think you'd be able to survive down there without a bit of training?`,
			},{
				text: `Their name is <b>Willow</b>, you'll love them!! Just head through that door to the <strong>storerooms</strong>!`,
			}],

			stepName1: "Trainer Willow",
			stepChat1: [{
				text: `<i>Trainer Willow yawns. You woke them up.</i>`,
				saidBy: "none",
			},{
				text: `Hmph. At least you're not a slug.`,
				options: [
					{
						text: "I know right!",
						action: "progress",
					},
					{
						text: "Rude..",
						action: "progress",
					},
				]
			},{
				text: `Here's the deal. I want to get back to sleep as soon as possible - complete three laps of this <b>Obstacle Course</b> as quickly as you can.`,
				long: true,
			},{
				text: `You should know :: you can use your <b>spell key</b> to <b>leap</b> forward, which might save you some time.`,
			},],

			stepName2: "Trainer Willow",
			stepChat2: [{
				text: `Yawn. Even the slug did it faster...`,
			},{
				text: `Nah I'm joking. That wasn't too bad. Leave me in peace now though?`,
			},],

			finishName: "Alchemist Tamtam",
			finishChat: [{
				text: `Yaaayyy you did it!!! Have some treats!! <sub>Isn't cat life great??</sub>`,
			},],

			objectivesList: [
				{
					text: "Talk to <b>Trainer Willow</b> in the <b>Eaglecrest Elixirs storerooms</b>.",
					isCompleted: function () {

					},
				},
				{
					text: "Complete all three laps of the course as quickly as possible",
					isCompleted: function () {

					},
					isHidden: function () {

					}
				},
				{
					text: "Talk to <b>Trainer Willow</b>.",
					isCompleted: function () {

					},
					isHidden: function () {

					}
				},
				{
					text: "Talk to <b>Alchemist Tamtam</b> after you have finished your training.",
					isCompleted: function () {

					},
				},
			],

			howToStart: "Speak to <strong>Alchemist Tamtam</strong> in <b>Eaglecrest Elixirs</b>.",
			levelRequirement: 10,
			questRequirements: ["Potion Making IV"],

			rewards: {
				xp: 60,
				items: [{item: Items.item[1]}], // cat treats (tbd)
			},
		},
		{
			id: 20,
			quest: "Secrets of the Sewers",
			questArea: "eaglecrest",

			startName: "Alchemist Tamtam",
			startChat: [{
				text: `Welllll I guess this is it.. <i>Tamtam's tail droops.</i>`,
			},{
				text: `Good luck on your mission - bring me a souvenir!`,
			},],

			stepName1: "Amelio",
			stepChat1: [{
				text: `Oh hey! Didn't think I'd see another cat down here :)`,
				options: [
					{
						text: "Hand Tamtam the ingredients.",
						action: "progress",
					},
				]
			},],

			stepName2: "???",
			stepChat2: [{
				text: `hello again amelio.`, // tbd make this a different font
			},{
				text: `I see you've brought ${Player.name} with you. what a pleasant surprise.`,
			},{
				text: `${Player.name}, I've been wanting to meet you for a long, long time. we all have.`,
			},{
				text: `here's your ςคtภเթ as promised, amelio.`,
			},{
				text: `you too, ${Player.name}. take some. cats can't resist it, though I'm not sure what effect it has on a ${Player.race} in cat form.`,
			},],

			stepName3: "???",
			stepChat3: [{
				text: `we've got so much more to catch up on, ${Player.name}, but I fear our time will be cut short any minute now.`,
			},{
				text: `you'll know where to find me.`, // player mysteriously gets given/finds a device that leads them to here...
			},],

			finishName: "Alchemist Tamtam",
			finishChat: [{
				text: `I see you've brought ${Player.name} with you. what a pleasant surprise.`,
			},],

			objectivesList: [
				{
					text: "Head through the open sewer entrance to the east of Eaglecrest.",
					isCompleted: function () {

					},
				},
				{
					text: "Find Amelio!",
					isCompleted: function () {

					},
				},
				{
					text: "Solve the River Idols' puzzle.",
					isCompleted: function () {

					},
					isHidden: function () {

					}
				},
				{
					text: "Discover what Amelio wants to show you.",
					isCompleted: function () {

					},
					isHidden: function () {

					}
				},
				{
					text: "Take the ςคtภเթ.",
					isCompleted: function () {

					},
					isHidden: function () {

					}
				},
				{
					text: "Escape!!!",
					isCompleted: function () {

					},
					isHidden: function () {

					}
				},
				{
					text: "Bring Amelio back to Eaglecrest Monastery.",
					isCompleted: function () {

					},
				},
			],

			howToStart: "Speak to <strong>Alchemist Tamtam</strong> in <b>Eaglecrest Elixirs</b>.",
			levelRequirement: 10,
			questRequirements: ["Practice Makes Purrfect"],

			rewards: {
				xp: 150,
				items: [{item: Items.item[1]}], // mystery (monastery armour reward, and catnip)
			},
		},
		{
			id: 21,
			quest: "The Pyromancer's Shopping List",
			questArea: "eaglecrest",

			steps: [
				{
					stepNum: 0,
					name: "Peto the Pyromancer",
					chat: [{
						text: `Hello there, stranger! Would you mind helping me with a a certain... <i>ahahaha</i>... a certain matter?`,
					},{
						text: `I need a number of specific reagents for my... uh... experiments and you seem like you'd be able to help.`,
					},{
						text: `A pyromancer's work is never done, but a bag of flour would certainly help speed it up. <i>hehe</i>`,
					},{
						text: `Could you retreive some from the nearby farm if you're willing?`,
					}],
				},
				{
					stepNum: 1,
					name: "Farmer Scop",
					chat: [{
						text: `That pyromancer's an odd fella. He loves his pies, but the rumours I've 'eard are bloomin' unsavoury.`
					},{
						text: `I don't want you on me land a second longer! Get one of 'em sacks of flour by the waterwheel, then get off with ye!`
					},],
				},
				{
					stepNum: 2,
					name: "Peto the Pyromancer",
					chat: [{
						text: `Oh goody! A bag of flour! This'll do nicely for my pyromancer experiments <i>hahaha</i>.`
					},{
						text: `If you're still willing, two eggs would go down a treat! You can nick them off the local chickens <i>hehe</i>.`
					},],
					removeItems: [
						{item: Items.item[76], quantity: 1},
					],
				},
				{
					stepNum: 3,
					name: "Peto the Pyromancer",
					chat: [{
						text: `Are those my eggs? Why, thank you!`
					},{
						text: `What do I need them for? Why, that's <i>ahaha</i>.. why, that would be <i>hahaha</i>... that would be none of your business!`
					},{
						text: `But if you're willing to fetch one final ingredient, I could do with some milk! That farm might be worth another try...`
					}],
					removeItems: [
						{item: Items.item[40], quantity: 3},
					],
				},
				{
					stepNum: 4,
					name: "Farmer Scop",
					chat: [{
						text: `I thought I told ya to get lost! We've got no cows here and besides... I'm not makin' any more pies for that Peto fella! Not after..... last time.`,
					},{
						text: `You city folk make me sick.`,
					},{
						text: `But if you're that desperate, I reckon that <b>Alchemist Tamtam</b> would sell you some milk. Now get off me land! I've nowt left for ye here!`
					},],
				},
				{
					stepNum: 5,
					name: "Alchemist Tamtam",
					chat: [
						{
							text: `Milk??<br><em>Tamtam's ears drop down.</em>`,
						},{
							text: `It's been a long time since someone's asked me for that...`,
						},{
							text: `I guess... we can brew some!!`
						},{
							text: `Hmmm, so that'll be a <b>Katydid</b>, a piece of <b>Iron Ore</b>, a <b>Milkfish</b> and some <b>Lavender</b>.`
						},{
							text: `Oooonly thing is... it's a dangerous recipe to brew.`
						},{
							text: `Can you keep an eye on the cauldron for me!! You'll see why...`
						},
					],
					reattemptChat: [
						{
							text: `<em>Tamtam looks into your eyes mournfully.</em>`,
						},{
							text: `I told you it's a dangerous recipe!!`,
						},{
							text: `<em>Tamtam's ears perk up.</em>`,
						},{
							text: `Let's try again! <sup>Again!</sup>`
						},{
							text: `Just try to protect the cauldron whilst the milk is brewing!!!`
						},
					],
					onFinish: function () {
						// set the image of the cauldron
						let obj = Game.characters.find(entity => entity.name === "Tamtam's Favourite Cauldron");
						if (typeof obj !== "undefined") {
							obj.setImage("cauldronQuest");
						}
						// add a spoon to the cauldron
						obj.behaviourFunctions.summonSpoon();
					},
					startProtect: { // starts a scoreboard with these parameters, after onFinish
						timeLimit: 85,
						progressBarDescription: "Brewing",
						protectObject: function () {
							let obj = Game.characters.find(entity => entity.name === "Tamtam's Favourite Cauldron");
							return obj;
						},
						protectObjectToCreate: {
							image: "cauldronQuest",
							template: NPCTemplates.tamtamCauldron,
						},
						title: "Potion Making",
						questArea: "eaglecrest",
						questId: 21,
						questStep: 5,
						enableQuestReattempt: true,
						allowedAreas: ["eaglecrestElixirs"],
						successFunction: function () {
							// set the image of the cauldron
							let obj = Game.characters.find(entity => entity.name === "Tamtam's Favourite Cauldron");
							obj.setImage("cauldronMilk");
						},
						finishFunction: function () {
							// remove spoon from the cauldron
							let obj = Game.characters.find(entity => entity.name === "Tamtam's Favourite Cauldron");
							obj.behaviourFunctions.removeSpoon();
						},
						randomEvents: [
							{ // imp
								func: function () {
									let enemy = Game.summonObject({
										x: 380,
										y: 550,
										template: EnemyTemplates.eaglecrest.imp,
										associatedScoreboard: Dom.scoreboard.id,
										type: "enemies",
										attackTargets: [{target: function () { 
											return Game.characters.find(character => character.name === "Tamtam's Favourite Cauldron");
										}, baseAggro: 4}],
									});
									enemy.displace(0, Random(70, 100), 2, ToRadians(Random(0, 360)));
								},
								cooldown: 7500,
								requiredTimeElapsed: 5000,
								maxTimeElapsed: 50000
							},
							{ // katydids
								func: function () {
									let num = Random (15, 40);
									for (let i = 0; i < num; i++) {
										let enemy = Game.summonObject({
											x: 380,
											y: 550,
											orderOffsetY: 300,
											template: EnemyTemplates.eaglecrest.katydid,
											associatedScoreboard: Dom.scoreboard.id,
											type: "enemies",
											attackTargets: [{target: function () { 
												return Game.characters.find(character => character.name === "Tamtam's Favourite Cauldron");
											}, baseAggro: 5}],
										});
										enemy.displace(0, Random(140, 180), Random(0.8, 1.2), ToRadians(Random(0, 360)));
									}
								},
								cooldown: 7500,
								requiredTimeElapsed: 5000
							},
							{ // icebolt
								func: function () {
									for (let bearing = 0; bearing < 2*Math.PI; bearing+=Math.PI/4) {
										Game.projectiles.push(new Projectile({
											map: map,
											x: 380,
											y: 550,
											stats: {
												damage: 5,
												stun: 0.5,
												slowAmount: 50,
												slowTime: 3
											},
											targets: [[Game.hero]],
											image: "icebolt",
											moveDirection: bearing,
											stopMovingOnDamage: true,
											moveSpeed: 150,
											type: "projectiles",
										}));
									}
								},
								cooldown: 1000,
								requiredTimeElapsed: 7000
							},
							{ // two imps
								func: function () {
									for (let i = 0; i < 2; i++) {
										let enemy = Game.summonObject({
											x: 380,
											y: 550,
											template: EnemyTemplates.eaglecrest.imp,
											associatedScoreboard: Dom.scoreboard.id,
											type: "enemies",
											attackTargets: [{target: function () { 
												return Game.characters.find(character => character.name === "Tamtam's Favourite Cauldron");
											}, baseAggro: 5}],
										});
										enemy.displace(0, Random(70, 100), 2, ToRadians(Random(0, 360)));
									}
								},
								cooldown: 8000,
								requiredTimeElapsed: 50000
							},
						],
						chatSequence: [
							{npc: {name: "Alchemist Tamtam", image: "tamtam"}, chat: [{text: `Oohhhh no, I was worried this would happen... Protect the cauldron, pleaseeeee!`,},],time: 6000},
							{npc: {name: "Alchemist Tamtam", image: "tamtam"}, chat: [{text: `That's my favourite cauldron!! Keep an eye on ittt!!`,},],time: 61200},
						],
					}
				},
				{
					stepNum: 6,
					name: "Alchemist Tamtam",
					chat: [{
						text: `<em>Tamtam's tail wags intensely</em>.<br>Eeeeexcellent!!!`,
					},{
						text: `Hereeeee's your milk... and we made a huge batch so come back and buy some more if you ever need it! Yippeeee!`,
					},],
					objectiveRequirement: [9], // the ids of all objectives that are required for this step (in addition to having finished the previous step)
					rewards: {
						items: [
							{item: Items.item[77],},
						],
					},
					autofinish: true,
				},
				{
					stepNum: 7,
					name: "Peto the Pyromancer",
					chat: [{
						text: `My ingredients!`,
					},{
						text: `Wait. Did I say 'ingredients'? Well I meant... <i>ahaha</i> my pyromancer potion ingredients! For a potion! <i>oh no.</i>.`,
					},{
						text: `A pie romancer's work is never done!... Wait... did I say pie romancer? <i>heh</i>.. Well now I've said too much....`
					},],
					removeItems: [
						{item: Items.item[77], quantity: 1},
					],
					rewards: {
						xp: 100,
						items: [
							{item: Items.currency[2], quantity: 5,},
						],
					},
				},
			],

			objectivesList: [
				{id: 0, text: "Ask <b>Farmer Scop</b> at <b>Eaglecrest Farm</b> where you can find some flour.",
					completeStep: 1, // if this step is completed, then this objective is always completed
				},
				{id: 1, text: "Gather a sack of flour from near the <b>Eaglecrest Farm</b> mill.",
					revealStep: 1, // if this step is completed, this objective is revealed (hidden otherwise; overrides isHidden)
					isCompleted: function() {return Dom.inventory.check(76, "item")},
					completeStep: 2, // if this step is completed, then this objective is always completed
				},
				{id: 2, text: "Give <b>Peto the Pyromancer</b> the flour.",
					completeStep: 2,
				},
				{id: 3, text: "Gather three eggs from chickens in the Plains.",
					isCompleted: function () {
						return Dom.inventory.check(40, "item");
					}, outOf: 3,
					completeStep: 3,
					revealStep: 2,
				},
				{id: 4, text: "Give <b>Peto the Pyromancer</b> the eggs.",
					completeStep: 3,
					revealStep: 2,
				},
				{id: 5, text: "Ask <b>Farmer Scop</b> where you can find some milk.",
					completeStep: 4,
					revealStep: 3,
				},
				{id: 6, text: "Ask <b>Alchemist Tamtam</b> at <b>Eaglecrest Elixirs</b> for some milk.",
					completeStep: 5,
					revealStep: 4,
				},
				{id: 7, text: "Talk to <b>Alchemist Tamtam</b> to try to protect his cauldron again.", reattempt: 5,
				},
				{id: 8, text: "Protect Tamtam's cauldron!",
					associatedVariable:"scoreboardProgress",
					revealStep: 5,
				},
				{id: 9, text: "Collect the milk from <b>Alchemist Tamtam</b>.",
					associatedVariable:"scoreboardProgress",
					revealStep: 5,
					completeStep: 6,
				},
				{id: 10, text: "Give <b>Peto the Pyromancer</b> the milk.",
					revealStep: 3,
				},
			],

			howToStart: "Speak to <b>Peto the Pyromancer</b> in Eaglecrest City.",
			//levelRequirement: 7,
			levelRequirement: 1,
			//questRequirements: ["to be added"],
		},
		{
			id: 22,
			quest: "Phishing for Treasure",
			questArea: "eaglecrest",

			steps: [
				{
					stepNum: 0,
					name: "???", // mail
					chat: [{
						text: `<s>AHOY</s> HELLO ${Player.name}, for your services at eaglecrest, we bestow upon you 100000 gold. Visit the tavern to claim your <s>booty</s> reward.`
					},],
				},
				{
					stepNum: 1, // triggered upon entering the tavern and being ambushed by Greenbeard
					name: "Captain Greenbeard",
					chat: [{
						text: `YARR I didn’t think you’d fall for it you FOOL! It’s about time you paid for the trouble you’ve caused me.`
					},{
						text: `Help me find this treasure in the plains... and then consider us even.`
					},{
						text: `Arrr, take this <b>Eaglecrest Plains Treasure Map</b> and meet me at the red X! Yer'll see what I mean.`
					},],
				},
				{
					stepNum: 2, // meeting him at the plains
					name: "Captain Greenbeard",
					chat: [{
						text: `Ahoy, ${Player.name}!`,
					},{
						text: `Yer see, I can see the booty, but the chest won't open!`,
					},{
						text: `Bet it's got something to do with those damned <b>River Idol</b> statues.`,
					},{
						text: `Have yer seen any of those purple orbs anywhere? Word on the street be that they appease the River Idols.`,
					},],
				},
				{
					stepNum: 3, // triggers straight after completing the puzzle
					name: "Captain Greenbeard",
					chat: [{
						text: `YARRR WE SOLVED IT!  Finally the Loan Sharks will never bother me again!`,
					},{
						text: `You be making a better first mate than I expected. Do you want to do the honours and open the chest?`,
					},],
					objectiveRequirement: [2], // the ids of all objectives that are required for this step (in addition to having finished the previous step)
					autofinish: true,
				},
				{
					stepNum: 4, // triggers after closing the chest
					name: "Captain Greenbeard",
					chat: [{
						text: `What’s this?! A breathing helmet? I’d never find any use for this!!`,
					},{
						text: `You know what... keep it all for yourself. This isn't worth my time!`,
					},],
					objectiveRequirement: [4], // the ids of all objectives that are required for this step (in addition to having finished the previous step)
					autofinish: true,
					removeItems: [
						{item: Items.item[78], quantity: 1}, // remove the treasure map
					],
					rewards: {
						xp: 100,
						items: [
							{item: Items.item[1]}, // mystery (chest contents)
						],
					},
				},
			],

			objectivesList: [
				{id: 0, text: "Meet the mysterious mailer in the <b>Eagle's Span Tavern</b> in Eaglecrest.",
					completeStep: 1, // if this step is completed, then this objective is always completed
				},
				{id: 1, text: "Meet <b>Captain Greenbeard</b> at the spot marked on the map he gave to you.",
					revealStep: 1, // if this step is completed, this objective is revealed (hidden otherwise; overrides isHidden)
					completeStep: 2,
				},
				{id: 2, text: "Appease the River Idols by guiding the purple orbs to them.",
					revealStep: 2,
					associatedVariable: "leyAggregateEscorted",
					outOf: 4,
				},
				{id: 3, text: "Speak to Captain Greenbeard.",
					revealStep: 2,
					completeStep: 3,
				},
				{id: 4, text: "Open the chest.",
					revealStep: 3,
				},
				{id: 3, text: "Speak to Captain Greenbeard.",
					revealStep: 3,
					completeStep: 4,
				},
			],

			howToStart: "Open your mail from <b>an Unknown Sender</b>.",
			levelRequirement: 1,
			//levelRequirement: 7,
			//questRequirements: ["Overdraft"],
		},
		{
			id: 23,
			quest: "Underwater",
			questArea: "eaglecrest",

			steps: [
				{
					stepNum: 0,
					name: "Captain Greenbeard", // mail
					chat: [{
						text: `tbd`,
					}],
				},
				{
					stepNum: 1,
					name: "Captain Greenbeard", // irl
					chat: [{
						text: `You go check it out, I'm not the biggest fan of water.`,
						options: [
							{
								text: "But...",
								action: "progress",
								response: {
									text: `...what?`,
								}
							},
							{
								text: "Aren't you a pirate?!",
								action: "progress",
								response: {
									text: `What's that got to do with it?`,
								}
							},
						]
					},{
						text: `Go on... jump!`,
					}],
				},
				{
					stepNum: 2,
					name: "Captain Greenbeard",
					chat: [{
						text: `My ingredients!`,
					},],
					objectiveRequirement: [5], // the ids of all objectives that are required for this step (in addition to having finished the previous step)
					removeItems: [
						{item: Items.item[77], quantity: 1},
					],
					rewards: {
						xp: 100,
						items: [
							{item: Items.item[1]}, // mystery (get the helm the next day)
							{item: Items.currency[2], quantity: 5,},
						],
					},
				},
			],

			objectivesList: [
				{id: 0, text: "Bring your <b>breathing helmet</b> to <b>Captain Greenbeard</b> at <i>River Heart's Blessing</i>, the lake in the centre of the Plains.",
					completeStep: 1, // if this step is completed, then this objective is always completed
				},
				{id: 1, text: "Ask <b>Captain Greenbeard</b> to jump into the water!",
					revealStep: 1, // if this step is completed, this objective is revealed (hidden otherwise; overrides isHidden)
				},
				{id: 2, text: "Explore underwater.",
					revealStep: 1,
				},
				{id: 3, text: "Destroy the <b>Giant Frog</b>.",
					isHidden: function () {

					}
				},
			],

			howToStart: "Open your mail from <b>Captain Greenbeard</b>!",
			levelRequirement: 8,
			questRequirements: ["Overdraft"],
		},
		{
			id: 24,
			quest: "Build-A-Mech",
			questArea: "eaglecrest",

			steps: [
				{
					stepNum: 0,
					name: "Athena Tinker",
					chat: [{
						text: `tbd`,
					}],
				},
				{
					stepNum: 1,
					name: "Tinkerer",
					chat: [{
						text: `tbd`,
					},],
					rewards: {
						xp: 100,
						items: [
							{item: Items.currency[2], quantity: 5,},
						],
					},
				},
				{
					stepNum: 2,
					name: "Tinkerer",
					chat: [{
						text: `tbd`,
					},],
					rewards: {
						xp: 100,
						items: [
							{item: Items.currency[2], quantity: 5,},
						],
					},
				},
			],

			objectivesList: [
				{id: 0, text: "Report to <b>tinkerer's name</b> in the Tinkerers' Workshop inside .",},
				{id: 1, text: "Complete the conveyor belt game",
					revealStep: 1, // if this step is completed, this objective is revealed (hidden otherwise; overrides isHidden)
				},
				{id: 2, text: "Complete the conveyor belt game",
					revealStep: 1, // if this step is completed, this objective is revealed (hidden otherwise; overrides isHidden)
				},
				{id: 3, text: "Complete the conveyor belt game",
					revealStep: 1, // if this step is completed, this objective is revealed (hidden otherwise; overrides isHidden)
				},
				{id: 4, text: "Complete the conveyor belt game",
					revealStep: 1, // if this step is completed, this objective is revealed (hidden otherwise; overrides isHidden)
				},
				{id: 5, text: "Report to <b>tinkerer's name</b> in the Tinkerers' Workshop inside .",},
			],

			howToStart: "Speak to <b>Athena Tinker</b> in the <b>Eagle's Span Tavern</b>.",
			levelRequirement: 8,
			questRequirements: ["Underwater"],
		},
		{
			id: 25,
			quest: "Quality Assurance",
			questArea: "eaglecrest",

			steps: [
				{
					stepNum: 0,
					name: "Technician Ustinov",
					chat: [{
						text: `Glug glog-hello there.`,
					},{
						text: `Perfect timing - we're due to be sent a supply of mech parts in a few minutes.`,
					},{
						text: `All I'll need you to do is pull the <b>Purple Lever</b> and <b>Yellow Lever</b> to sort the barrels to the rigggght colour hatch.`,
					},{
						text: `A few mistakes is fine, but we'll need at least 76% of them sorted to their correct hatches!`,
					},{
						text: `Glog-here they come now!`,
					}],
					reattemptChat: [{ // used on reattempt or post-abandon
						text: `Glog. Hello again.`,
					},{
						text: `Give the sorting another go - we're due another batch of parts any minute now!`,
					},{
						text: `All you're needed to do is pull the <b>Purple</b> and <b>Yellow Levers</b> to sort the barrels to the riggght colour hatches.`,
					},{
						text: `Remember we'll need at least 76% of them sorted to the correct hatches.`,
					}],
					startScoreboard: { // starts a scoreboard with these parameters, after onFinish
						scoreboardInitFunction: function () {
							Player.quests.prog.eaglecrest[25].vars.gameScore = 0; // initialise score variables
							Player.quests.prog.eaglecrest[25].vars.failedBarrels = 0;
							Player.quests.prog.eaglecrest[25].vars.percentageCorrect = 1;
							Game.areaVariables.qualityAssuranceQuestId = 25; // so the barrels know which quest variables to update
							Game.areaVariables.conveyorSpeed = 100;
							// update tile animation speeds
							for (let i = 0; i < map.animateTiles.length; i++) {
								if (map.animateTiles[i].conveyor) {
									let intervalNum = map.animateTiles[i].intervalNumber;
									Game.changeInterval(intervalNum, 180);
								}
							}
						},
						timeLimit: 121,
						stopEventsAfter: 112,
						variablesArray: [{
							keyName: "percentageCorrect",
							title: "Success Rate",
							percentage: true,
						}],
						targetVariableIndex: 0,
						targetValue: 0.76,
						title: "Quality Assurance",
						questArea: "eaglecrest",
						questId: 25,
						questStep: 0,
						enableQuestReattempt: true,
						allowedAreas: ["tinkerersWorkshop"],
						randomEvents: [
							{ // blue barrel
								func: function () {
									Game.things.push(new Thing(Game.prepareNPC({
										x: 89.9, y: 909.3,
										image: "toxicWasteBlue",
										name: "Blue Barrel",
										template: QuestTemplates.eaglecrest.conveyorGameBarrel,
										speed: Game.areaVariables.conveyorSpeed
									}, "things")));
								},
								cooldown: 3000,
							},
							{ // red barrel
								func: function () {
									Game.things.push(new Thing(Game.prepareNPC({
										x: 89.9, y: 909.3,
										image: "toxicWasteRed",
										name: "Red Barrel",
										template: QuestTemplates.eaglecrest.conveyorGameBarrel,
										speed: Game.areaVariables.conveyorSpeed
									}, "things")));
								},
								cooldown: 3000,
							},
							{ // green barrel
								func: function () {
									Game.things.push(new Thing(Game.prepareNPC({
										x: 89.9, y: 909.3,
										image: "toxicWasteGreen",
										name: "Green Barrel",
										template: QuestTemplates.eaglecrest.conveyorGameBarrel,
										speed: Game.areaVariables.conveyorSpeed
									}, "things")));
								},
								cooldown: 3000,
								requiredTimeElapsed: 11000
							},
						],
						eventSequence: [
							{ // speed increase
								func: function () {
									for (let i = 0; i < Dom.scoreboard.randomEvents.length; i++) {
										Dom.scoreboard.randomEvents[i].cooldown = 2300; // 3000 -> 2300
									}
									// update movement speed of new objects
									Game.areaVariables.conveyorSpeed = 130; // 100 -> 130
									// update movement speed of old objects
									for (let i = 0; i < Game.things.length; i++) {
										if (Game.things[i].name === "Red Barrel" || Game.things[i].name === "Blue Barrel" || Game.things[i].name === "Green Barrel" || Game.things[i].name === "Explosive") {
											Game.things[i].speed = Game.areaVariables.conveyorSpeed;
										}
									}
									// update tile animation speeds
									for (let i = 0; i < map.animateTiles.length; i++) {
										if (map.animateTiles[i].conveyor) {
											let intervalNum = map.animateTiles[i].intervalNumber;
											Game.changeInterval(intervalNum, 138); // 180 -> 138
										}
									}
								}, time: 34300
							},
							{ // speed increase
								func: function () {
									for (let i = 0; i < Dom.scoreboard.randomEvents.length; i++) {
										Dom.scoreboard.randomEvents[i].cooldown = 1500; // 2300 -> 1500
									}
									// update movement speed of new objects
									Game.areaVariables.conveyorSpeed = 200; // 130 -> 200
									// update movement speed of old objects
									for (let i = 0; i < Game.things.length; i++) {
										if (Game.things[i].name === "Red Barrel" || Game.things[i].name === "Blue Barrel" || Game.things[i].name === "Green Barrel" || Game.things[i].name === "Explosive") {
											Game.things[i].speed = Game.areaVariables.conveyorSpeed;
										}
									}
									// update tile animation speeds
									for (let i = 0; i < map.animateTiles.length; i++) {
										if (map.animateTiles[i].conveyor) {
											let intervalNum = map.animateTiles[i].intervalNumber;
											Game.changeInterval(intervalNum, 90); // 138 -> 90
										}
									}
								}, time: 66200
							},
							{ // speed increase
								func: function () {
									for (let i = 0; i < Dom.scoreboard.randomEvents.length; i++) {
										Dom.scoreboard.randomEvents[i].cooldown = 1000; // 1500 -> 1000
									}
									// update movement speed of new objects
									Game.areaVariables.conveyorSpeed = 300; // 200 -> 300
									// update movement speed of old objects
									for (let i = 0; i < Game.things.length; i++) {
										if (Game.things[i].name === "Red Barrel" || Game.things[i].name === "Blue Barrel" || Game.things[i].name === "Green Barrel" || Game.things[i].name === "Explosive") {
											Game.things[i].speed = Game.areaVariables.conveyorSpeed;
										}
									}
									// update tile animation speeds
									for (let i = 0; i < map.animateTiles.length; i++) {
										if (map.animateTiles[i].conveyor) {
											let intervalNum = map.animateTiles[i].intervalNumber;
											Game.changeInterval(intervalNum, 60); // 180 -> 60
										}
									}
								}, time: 98200
							},
						],
						chatSequence: [
							{npc: {name: "Technician Ustinov", image: "assets/npcs/ustinov.png"}, chat: [{text: `Conveyor belts to speed 2.`,},],time: 34300},
							{npc: {name: "Technician Ustinov", image: "assets/npcs/ustinov.png"}, chat: [{text: `Glglglu-conveyor belts to speed 3.`,},],time: 66200},
							{npc: {name: "Technician Ustinov", image: "assets/npcs/ustinov.png"}, chat: [{text: `Conveyor belts to maximum speed setting.`,},],time: 98200}
						],
					}
				},
				{
					stepNum: 1,
					name: "Technician Ustinov",
					chat: [{
						text: `Glglg-wonderful work!`,
					},{
						text: `Come back and help out again if you gggget a chance.`,
					},],
					objectiveRequirement: [1], // the ids of all objectives that are required for this step (in addition to having finished the previous step)
					rewards: {
						xp: 50,
						reputation: {
							tinkerersGuild: 15,
						},
					},
				},
			],

			objectivesList: [
				{id: 0, text: "Speak to <b>Technician Ustinov</b> in the <b>Tinkerers' Workshop</b> to attempt the challenge again.", reattempt: 0}, // this is only shown if step 0 is ready to be reattempted (is completed otherwise)
				{id: 1, text: "Achieve a success rate of 76% or greater at the conveyor belt station, to the left of the <b>Tinkerers' Workshop</b>.", associatedVariable:"scoreboardProgress"},
				{id: 2, text: "Speak to <b>Technician Ustinov</b> in the <b>Tinkerers' Workshop</b>.",},
			],

			howToStart: "Speak to <b>Technician Ustinov</b> in the <b>Tinkerers' Workshop</b>.",
			/*levelRequirement: 8,
			questRequirements: ["Underwater"],
			requirement: function () {
				return Player.quests.prog.eaglecrest[24].stepProgress[1]; // completed step with id 2 of the tinkerer quest, i.e. spoken to the lead tinkerer
			},*/
			levelRequirement: 1,
			questRequirements: [],
			requirement: function () {
				return true;
			}
		},
		{
			id: 26,
			quest: "Batteries not Included",
			questArea: "eaglecrest",

			steps: [
				{
					stepNum: 0,
					name: "Weapons Tinkerer Dolph",
					chat: [{
						text: `Greetings, let me keep this short as I've got a lot to do today.`,
					},{
						text: ``,
					},],
				},
				{
					stepNum: 1,
					name: "Weapons Tinkerer Dolph",
					chat: [{
						text: `tbd`,
					},],
					rewards: {
						xp: 100,
						items: [
							{item: Items.currency[2], quantity: 5,},
						],
					},
				},
			],

			objectivesList: [
				{id: 0, text: "Find fifteen green <b>Lucents</b> around the <b>Eaglecrest Tinkerers' Workshop</b>.",},
				{id: 1, text: "Speak to <b>Weapons Tinkerer Dolph</b> in the <b>Tinkerers' Workshop</b>.",},
			],

			howToStart: "Speak to <b>Weapons Tinkerer Dolph</b> in the <b>Tinkerers' Workshop</b>.",
			levelRequirement: 8,
			questRequirements: ["Underwater"],
			requirement: function () {
				return Player.quests.prog.eaglecrest[24].stepProgress[1];
			}
		},
		{
			id: 27,
			quest: "pipe drone game",
			questArea: "eaglecrest",

			steps: [
				{
					stepNum: 0,
					name: "Drone Operator Penelope",
					chat: [{
						text: `tbd`,
					},],
				},
				{
					stepNum: 1,
					name: "Drone Operator Penelope",
					chat: [{
						text: `tbd`,
					},],
					rewards: {
						xp: 100,
						items: [
							{item: Items.currency[2], quantity: 5,},
						],
					},
				},
			],

			objectivesList: [
				{id: 0, text: "Pilot the drone to fix the pipes",},
				{id: 1, text: "Speak to <b>Drone Operator Penelope</b> in the <b>Tinkerers' Workshop</b>.",},
			],

			howToStart: "Speak to <b>Drone Operator Penelope</b> in the <b>Tinkerers' Workshop</b>.",
			levelRequirement: 8,
			questRequirements: ["Underwater"],
			requirement: function () {
				return Player.quests.prog.eaglecrest[24].stepProgress[1];
			}
		},
		{
			id: 28,
			quest: "River's Blessing",
			questArea: "eaglecrest",

			steps: [
				{
					stepNum: 0,
					name: "Tinkerer", // communication link to the tinkerers from the mech
					chat: [{
						text: `tbd`, // communication as you get in the mech (a function here should also put you in the mech)
					},],
				},
				{
					stepNum: 0,
					name: "Tinkerer",
					chat: [{
						text: `tbd`, // communication as you enter the frog queen base
					},],
				},
				{
					stepNum: 1,
					name: "Tinkerer",
					chat: [{
						text: `tbd`,
					},],
					rewards: {
						xp: 100,
						items: [
							{item: Items.currency[2], quantity: 5,},
						],
					},
				},
			],

			objectivesList: [
				{id: 0, text: "Enter the River Heart's Blessing and approach the Frog Queen's Base",},
				{id: 1, text: "Report to <b>tinkerer's name</b> in the <b>Tinkerers' Workshop</b>.",},
			],

			howToStart: "Collect the Mech by <b>River Heart's Blessing</b> in the centre of the Plains.",
			levelRequirement: 8, // realistically they'll be at least level 9-10 by now
			questRequirements: ["tinkerer quest tbd"],
		},
		{
			id: 29,
			quest: "City Canal Cleanup",
			questArea: "eaglecrest",

			hiddenQuest: true,

			steps: [
				{
					stepNum: 0,
					name: "Solario Sunshadow",
					chat: [{
						text: `Hmmmmm,,`,
					},{
						text: `I think someone's been using the canals as garbage disposal!`,
					},{
						text: `I don't possess the gift of a fishing rod,, could you help clear the water instead?`,
					},{
						text: `May the Sun forever show its shadow.`,
					},],
				},
				{
					stepNum: 1,
					name: "Solario Sunshadow",
					chat: [{
						text: `Wonderful! The water's looking cleaner already,, though I hope the City are getting to the bottom of where this junk is coming from.`,
					},{
						text: `May the shadows forever guide you.`,
					},],
					rewards: {
						xp: 20,
						reputation: {
							eaglecrestCity: 50,
						},
					},
					objectiveRequirement: 0
				},
			],

			objectivesList: [
				{id: 0, text: "Fish up three pieces of junk from the Eaglecrest City canal.",
					associatedVariable: "canalJunkFishedUp", // tbd
				},
				{id: 1, text: "Speak to <strong>Solario Sunshadow</strong>.",
				},
			],

			howToStart: "Speak to <strong>Solario Sunshadow</strong>.",
			levelRequirement: 6,
		},
		{
			id: 30,
			quest: "Quality Assurance - Daily a07381",
			questArea: "eaglecrest",

			steps: [
				{
					stepNum: 0,
					name: "Technician Ustinov",
					chat: [{
						text: `Glug glog glug-hello.`,
					},{
						text: `Perfect timing again - a supply of mech parts is due imminently.`,
					},{
						text: `As a reminder, all you'll need to do is pull the <b>Purple Lever</b> and <b>Yellow Lever</b> to sort the barrels to the riggggght colour hatch.`,
					},{
						text: `Since you're now experienced, we'll need at least 82% of them sorted to their correct hatches!`,
					},{
						text: `Glog glug-here come the parts.`,
					}],
					reattemptChat: [{ // used on reattempt or post-abandon
						text: `Glog. Hello again.`,
					},{
						text: `Give the sorting another go - we're due another batch of parts any minute now!`,
					},{
						text: `All you're needed to do is pull the <b>Purple</b> and <b>Yellow Levers</b> to sort the barrels to the rigggght colour hatches.`,
					},{
						text: `Remember we'll need at least 82% of them sorted to the correct hatches.`,
					}],
					startScoreboard: { // starts a scoreboard with these parameters, after onFinish
						scoreboardInitFunction: function () {
							Player.quests.prog.eaglecrest[30].vars.gameScore = 0; // initialise score variables
							Player.quests.prog.eaglecrest[30].vars.failedBarrels = 0;
							Player.quests.prog.eaglecrest[30].vars.percentageCorrect = 1;
							Game.areaVariables.qualityAssuranceQuestId = 30; // so the barrels know which quest variables to update
							Game.areaVariables.conveyorSpeed = 130;
							// update tile animation speeds
							for (let i = 0; i < map.animateTiles.length; i++) {
								if (map.animateTiles[i].conveyor) {
									let intervalNum = map.animateTiles[i].intervalNumber;
									Game.changeInterval(intervalNum, 138);
								}
							}
						},
						timeLimit: 117,
						stopEventsAfter: 108,
						variablesArray: [{
							keyName: "percentageCorrect",
							title: "Success Rate",
							percentage: true,
						}],
						targetVariableIndex: 0,
						targetValue: 0.82,
						title: "Quality Assurance",
						questArea: "eaglecrest",
						questId: 30,
						questStep: 0,
						enableQuestReattempt: true,
						allowedAreas: ["tinkerersWorkshop"],
						successFunction: function () {
							if (Player.quests.prog.eaglecrest[30].vars.percentageCorrect > User.progress.qualityAssuranceAchievement1) {
								User.progress.qualityAssuranceAchievement1 = Player.quests.prog.eaglecrest[30].vars.percentageCorrect;
							}
						},
						randomEvents: [
							{ // blue barrel
								func: function () {
									Game.characters.push(new Character(Game.prepareNPC({
										x: 89.9, y: 909.3,
										image: "toxicWasteBlue",
										name: "Blue Barrel",
										template: QuestTemplates.eaglecrest.conveyorGameBarrel,
										speed: Game.areaVariables.conveyorSpeed
									}, "characters")));
								},
								cooldown: 2300,
							},
							{ // red barrel
								func: function () {
									Game.characters.push(new Character(Game.prepareNPC({
										x: 89.9, y: 909.3,
										image: "toxicWasteRed",
										name: "Red Barrel",
										template: QuestTemplates.eaglecrest.conveyorGameBarrel,
										speed: Game.areaVariables.conveyorSpeed
									}, "characters")));
								},
								cooldown: 2300,
							},
							{ // green barrel
								func: function () {
									Game.characters.push(new Character(Game.prepareNPC({
										x: 89.9, y: 909.3,
										image: "toxicWasteGreen",
										name: "Green Barrel",
										template: QuestTemplates.eaglecrest.conveyorGameBarrel,
										speed: Game.areaVariables.conveyorSpeed
									}, "characters")));
								},
								cooldown: 2300,
							},
						],
						eventSequence: [
							{ // speed increase
								func: function () {
									for (let i = 0; i < Dom.scoreboard.randomEvents.length; i++) {
										Dom.scoreboard.randomEvents[i].cooldown = 1500; // 2300 -> 1500
									}
									// update movement speed of new objects
									Game.areaVariables.conveyorSpeed = 200; // 130 -> 200
									// update movement speed of old objects
									for (let i = 0; i < Game.characters.length; i++) {
										if (Game.characters[i].name === "Red Barrel" || Game.characters[i].name === "Blue Barrel" || Game.characters[i].name === "Green Barrel" || Game.characters[i].name === "Explosive") {
											Game.characters[i].speed = Game.areaVariables.conveyorSpeed;
										}
									}
									// update tile animation speeds
									for (let i = 0; i < map.animateTiles.length; i++) {
										if (map.animateTiles[i].conveyor) {
											let intervalNum = map.animateTiles[i].intervalNumber;
											Game.changeInterval(intervalNum, 90); // 138 -> 90
										}
									}
								}, time: 38300
							},
							{ // speed increase
								func: function () {
									for (let i = 0; i < Dom.scoreboard.randomEvents.length; i++) {
										Dom.scoreboard.randomEvents[i].cooldown = 1000; // 1500 -> 1000
									}
									// update movement speed of new objects
									Game.areaVariables.conveyorSpeed = 300; // 200 -> 300
									// update movement speed of old objects
									for (let i = 0; i < Game.characters.length; i++) {
										if (Game.characters[i].name === "Red Barrel" || Game.characters[i].name === "Blue Barrel" || Game.characters[i].name === "Green Barrel" || Game.characters[i].name === "Explosive") {
											Game.characters[i].speed = Game.areaVariables.conveyorSpeed;
										}
									}
									// update tile animation speeds
									for (let i = 0; i < map.animateTiles.length; i++) {
										if (map.animateTiles[i].conveyor) {
											let intervalNum = map.animateTiles[i].intervalNumber;
											Game.changeInterval(intervalNum, 60); // 180 -> 60
										}
									}
								}, time: 91200
							},
						],
						chatSequence: [
							{npc: {name: "Technician Ustinov", image: "assets/npcs/ustinov.png"}, chat: [{text: `Glog-- Conveyor belts to speed 3.`,},],time: 38300},
							{npc: {name: "Technician Ustinov", image: "assets/npcs/ustinov.png"}, chat: [{text: `Conveyor belts to maximum speed setting.`,},],time: 91200}
						],
					}
				},
				{
					stepNum: 1,
					name: "Technician Ustinov",
					chat: [{
						text: `Glglgreat work as usual!`,
					},],
					objectiveRequirement: [1], // the ids of all objectives that are required for this step (in addition to having finished the previous step)
					rewards: {
						xp: 50,
						reputation: {
							tinkerersGuild: 15,
						},
					},
				},
			],

			objectivesList: [
				{id: 0, text: "Speak to <b>Technician Ustinov</b> in the <b>Tinkerers' Workshop</b> to attempt the challenge again.", reattempt: 0}, // this is only shown if step 0 is ready to be reattempted (is completed otherwise)
				{id: 1, text: "Achieve a success rate of 82% or greater at the conveyor belt station, to the left of the <b>Tinkerers' Workshop</b>.", associatedVariable:"scoreboardProgress"},
				{id: 2, text: "Speak to <b>Technician Ustinov</b> in the <b>Tinkerers' Workshop</b>.",},
			],

			howToStart: "Speak to <b>Technician Ustinov</b> in the <b>Tinkerers' Workshop</b>.",
			levelRequirement: 1,
			questRequirements: ["Quality Assurance"],

			repeatTime: "daily",
			randomGroup: "qualityAssuranceDaily",
			shareCooldownWith: [{questArea: "eaglecrest", id: 25}],

			resetVariables: [
				"scoreboardProgress",
			],
		},
		{
			id: 31,
			quest: "Quality Assurance - Daily b00624",
			questArea: "eaglecrest",

			steps: [
				{
					stepNum: 0,
					name: "Technician Ustinov",
					chat: [{
						text: `Glug glug glog glug-hello.`,
					},{
						text: `Glug glug -oh, hello.`,
					},{
						text: `Looks like you're here at the perfect time - the next supply of mech parts is due.`,
					},{
						text: `As a reminder, you'll need to pull the <b>Purple Lever</b> and <b>Yellow Lever</b> to sort the barrels to the rigggggght colour hatch.`,
					},{
						text: `I've been alerted this this supply includes several <b>Explosives</b> which will need to be <b>destroyed</b> with your weapon.`,
					},{
						text: `But-glog-try not to damage any of the other barrels...`,
					},{
						text: `We'll need a success rate of 68%, but be aware that letting any explosives through - or damaging any barrels - will reduce this.`,
					},{
						text: `Gluug-here come the parts.`,
					}],
					reattemptChat: [{ // used on reattempt or post-abandon
						text: `Glog. Hello again.`,
					},{
						text: `Apologggies if the explosives are causing you trouble...`,
					},{
						text: `Give the sorting another go - remember the <b>explosives</b> will need to be <b>destroyed</b> with your weapon.`,
					},{
						text: `But don't destroy the barrels!`,
					},{
						text: `We'll need at least 68% of the parts sorted to the correct hatches.`,
					}],
					startScoreboard: { // starts a scoreboard with these parameters, after onFinish
						scoreboardInitFunction: function () {
							Player.quests.prog.eaglecrest[31].vars.gameScore = 0; // initialise score variables
							Player.quests.prog.eaglecrest[31].vars.failedBarrels = 0;
							Player.quests.prog.eaglecrest[31].vars.percentageCorrect = 1;
							Game.areaVariables.qualityAssuranceQuestId = 31; // so the barrels know which quest variables to update
							Game.areaVariables.conveyorSpeed = 100;
							// update tile animation speeds
							for (let i = 0; i < map.animateTiles.length; i++) {
								if (map.animateTiles[i].conveyor) {
									let intervalNum = map.animateTiles[i].intervalNumber;
									Game.changeInterval(intervalNum, 180);
								}
							}
						},
						timeLimit: 121,
						stopEventsAfter: 112,
						variablesArray: [{
							keyName: "percentageCorrect",
							title: "Success Rate",
							percentage: true,
						}],
						targetVariableIndex: 0,
						targetValue: 0.68,
						title: "Quality Assurance",
						questArea: "eaglecrest",
						questId: 31,
						questStep: 0,
						enableQuestReattempt: true,
						allowedAreas: ["tinkerersWorkshop"],
						randomEvents: [
							{ // blue barrel
								func: function () {
									Game.characters.push(new Character(Game.prepareNPC({
										x: 89.9, y: 909.3,
										image: "toxicWasteBlue",
										name: "Blue Barrel",
										template: QuestTemplates.eaglecrest.conveyorGameBarrel,
										speed: Game.areaVariables.conveyorSpeed
									}, "characters")));
								},
								cooldown: 3000,
								requiredTimeElapsed: 7000,
							},
							{ // red barrel
								func: function () {
									Game.characters.push(new Character(Game.prepareNPC({
										x: 89.9, y: 909.3,
										image: "toxicWasteRed",
										name: "Red Barrel",
										template: QuestTemplates.eaglecrest.conveyorGameBarrel,
										speed: Game.areaVariables.conveyorSpeed
									}, "characters")));
								},
								cooldown: 3000,
							},
							{ // green barrel
								func: function () {
									Game.characters.push(new Character(Game.prepareNPC({
										x: 89.9, y: 909.3,
										image: "toxicWasteGreen",
										name: "Green Barrel",
										template: QuestTemplates.eaglecrest.conveyorGameBarrel,
										speed: Game.areaVariables.conveyorSpeed
									}, "characters")));
								},
								cooldown: 3000,
								requiredTimeElapsed: 12000,
							},
							{ // explosive
								func: function () {
									Game.characters.push(new Character(Game.prepareNPC({
										x: 89.9, y: 909.3,
										image: "explosive",
										name: "Explosive",
										template: QuestTemplates.eaglecrest.conveyorGameBarrel,
										speed: Game.areaVariables.conveyorSpeed
									}, "characters")));
								},
								cooldown: 3000,
							},
						],
						eventSequence: [
							{ // speed increase
								func: function () {
									for (let i = 0; i < Dom.scoreboard.randomEvents.length; i++) {
										Dom.scoreboard.randomEvents[i].cooldown = 2300; // 3000 -> 2300
									}
									// update movement speed of new objects
									Game.areaVariables.conveyorSpeed = 130; // 100 -> 130
									// update movement speed of old objects
									for (let i = 0; i < Game.characters.length; i++) {
										if (Game.characters[i].name === "Red Barrel" || Game.characters[i].name === "Blue Barrel" || Game.characters[i].name === "Green Barrel" || Game.characters[i].name === "Explosive") {
											Game.characters[i].speed = Game.areaVariables.conveyorSpeed;
										}
									}
									// update tile animation speeds
									for (let i = 0; i < map.animateTiles.length; i++) {
										if (map.animateTiles[i].conveyor) {
											let intervalNum = map.animateTiles[i].intervalNumber;
											Game.changeInterval(intervalNum, 138); // 180 -> 138
										}
									}
								}, time: 24300
							},
							{ // speed increase
								func: function () {
									for (let i = 0; i < Dom.scoreboard.randomEvents.length; i++) {
										Dom.scoreboard.randomEvents[i].cooldown = 1500; // 2300 -> 1500
									}
									// update movement speed of new objects
									Game.areaVariables.conveyorSpeed = 200; // 130 -> 200
									// update movement speed of old objects
									for (let i = 0; i < Game.characters.length; i++) {
										if (Game.characters[i].name === "Red Barrel" || Game.characters[i].name === "Blue Barrel" || Game.characters[i].name === "Green Barrel" || Game.characters[i].name === "Explosive") {
											Game.characters[i].speed = Game.areaVariables.conveyorSpeed;
										}
									}
									// update tile animation speeds
									for (let i = 0; i < map.animateTiles.length; i++) {
										if (map.animateTiles[i].conveyor) {
											let intervalNum = map.animateTiles[i].intervalNumber;
											Game.changeInterval(intervalNum, 90); // 138 -> 90
										}
									}
								}, time: 46200
							},
							{ // speed increase
								func: function () {
									for (let i = 0; i < Dom.scoreboard.randomEvents.length; i++) {
										Dom.scoreboard.randomEvents[i].cooldown = 1000; // 1500 -> 1000
									}
									// update movement speed of new objects
									Game.areaVariables.conveyorSpeed = 300; // 200 -> 300
									// update movement speed of old objects
									for (let i = 0; i < Game.characters.length; i++) {
										if (Game.characters[i].name === "Red Barrel" || Game.characters[i].name === "Blue Barrel" || Game.characters[i].name === "Green Barrel" || Game.characters[i].name === "Explosive") {
											Game.characters[i].speed = Game.areaVariables.conveyorSpeed;
										}
									}
									// update tile animation speeds
									for (let i = 0; i < map.animateTiles.length; i++) {
										if (map.animateTiles[i].conveyor) {
											let intervalNum = map.animateTiles[i].intervalNumber;
											Game.changeInterval(intervalNum, 60); // 180 -> 60
										}
									}
								}, time: 88200
							},
						],
						chatSequence: [
							{npc: {name: "Technician Ustinov", image: "assets/npcs/ustinov.png"}, chat: [{text: `Conveyor belts to speed 2.`,},],time: 24300},
							{npc: {name: "Technician Ustinov", image: "assets/npcs/ustinov.png"}, chat: [{text: `Glglglu-conveyor belts to speed 3.`,},],time: 46200},
							{npc: {name: "Technician Ustinov", image: "assets/npcs/ustinov.png"}, chat: [{text: `Conveyor belts to maximum speed setting!`,},],time: 88200}
						],
						successFunction: function () {
							if (Player.quests.prog.eaglecrest[31].vars.percentageCorrect > User.progress.qualityAssuranceAchievement2) {
								User.progress.qualityAssuranceAchievement2 = Player.quests.prog.eaglecrest[31].vars.percentageCorrect;
							}
						},
					}
				},
				{
					stepNum: 1,
					name: "Technician Ustinov",
					chat: [{
						text: `Glglggreat work!`,
					},{
						text: `I'll contact the parts team to ensure there are minimal explosives included in the next batch..`,
					},],
					objectiveRequirement: [1], // the ids of all objectives that are required for this step (in addition to having finished the previous step)
					rewards: {
						xp: 50,
						reputation: {
							tinkerersGuild: 25,
						},
					},
				},
			],

			objectivesList: [
				{id: 0, text: "Speak to <b>Technician Ustinov</b> in the <b>Tinkerers' Workshop</b> to attempt the challenge again.", reattempt: 0}, // this is only shown if step 0 is ready to be reattempted (is completed otherwise)
				{id: 1, text: "Achieve a success rate of 68% or greater at the conveyor belt station, to the left of the <b>Tinkerers' Workshop</b>.", associatedVariable:"scoreboardProgress"},
				{id: 2, text: "Speak to <b>Technician Ustinov</b> in the <b>Tinkerers' Workshop</b>.",},
			],

			howToStart: "Speak to <b>Technician Ustinov</b> in the <b>Tinkerers' Workshop</b>.",
			levelRequirement: 1,
			questRequirements: ["Quality Assurance"],
			requirement: function () {
				return Player.quests.prog.eaglecrest[30].timesCompleted >= 2;
			},

			randomGroup: "qualityAssuranceDaily",

			resetVariables: [
				"scoreboardProgress",
			],
		},
		{
			id: 32,
			quest: "WANTED: Baron Foxglove!!",
			questArea: "eaglecrest",

			steps: [
				{
					stepNum: 0,
					name: "Recruiter Sylvie",
					chat: [{
						text: `Greetings, ${Player.name}. Another hostile Party has come to the City's attention.`,
					},{
						text: `We've had reports of a .`,
					},],
				},
				{
					stepNum: 1,
					name: "Baron Foxglove",
					chat: [{
						text: `Greetings, ${Player.name}. Another hostile Party has come to the City's attention.`,
					},],
					onFinish: function () {
						let foxglove = Game.enemies.find(enemy => enemy.name === "Baron Foxglove");
						foxglove.setAggro(Game.hero, 20);
					}
				},
			],

			startName: "Recruiter Sylvie",
			startChat: [{
				text: `Greetings, ${Player.name}. Another hostile Party has come to the City's attention.`,
			},{
				text: `We've had reports of a .`,
			},],

			finishName: "Recruiter Sylvie",
			finishChat: [{
				text: `tbd`,
			},],

			objectives: [
				"Challenge <b>Baron Foxglove</b> to combat and win, in the Plains' flower forest.",
				"Speak to <strong>Recruiter Sylvie</strong>.",
			],

			isCompleted: function() {
				let completed = [];

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(Player.bossesKilled.baronFoxglove === GetFullDate());

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to <strong>Recruiter Sylvie</strong>.",
			levelRequirement: 10,
			questRequirements: [],

			repeatTime: "daily",

			rewards: {
				xp: 50,
				items: [
					{item: Items.currency[2], quantity: 4,},
				],
				reputation: {
					eaglecrestCity: 60,
				},
			},
		},
	],

	tavern: [
		{
			id: 0,
			quest: "A Drink on Us!",
			questArea: "tavern",

			startName: "Gregor Goldenbrew",
			startChat: [{
				text: `I 'aven't seen you round 'ere before! Hehe, enjoy a drink by the hearth - free on us!`,
			},],

			finishName: "Gregor Goldenbrew",
			finishChat: [{
				text: `Heh, yer gonna love it here!`,
			},],

			objectives: [
				"Take a sip from your wood-brewed beer around the hearth.",
				"Speak to <strong>Gregor Goldenbrew</strong>.",
			],

			howToStart: "Speak to <strong>Gregor Goldenbrew</strong> in the Treefeller's Tavern.",
			levelRequirement: 1,
			questRequirements: ["To the Logging Camp"],

			rewards: {
				xp: 10,
			},

			startRewards: {
				items: [
					{item: Items.consumable[5],},
				],
			},

			resetVariables: [
				"drunkBeer",
			],

			isCompleted: function() {
				let completed = [];

				completed.push(checkProgress(Player.quests.questProgress.drunkBeer, 1));

				completed = checkFinished(completed);

				return completed;
			},

			onQuestStart: function() {
				Dom.chat.insert("Gregor brews you an extra large beer. Try not to get too tipsy!", 100);
			},
		},
		{
			id: 1,
			quest: "Cleaning the Floor",
			questArea: "tavern",

			gregorGoldenbrew: {
				startName: "Gregor Goldenbrew",
				startChat: [{
					text: `It's getting a bit dirty 'round 'ere! Any chance ya can help clean up for a li'l gold?`,
				},],
				finishName: "Gregor Goldenbrew",
				finishChat: [{
					text: `Wow! The tavern's looking better than ever. Here's yer reward.`,
				},],
				objectives: [
					"Use the mop to clean away the dirt in the tavern.",
					"Speak to <strong>Gregor Goldenbrew</strong>.",
				],
			},

			innkeepersRhusJak: {
				startName: "Innkeepers Rhus-Jak",
				startChat: [{
					text: `<strong>Jak</strong>: The tavern's a bit dirty at the moment. We're both busy serving guests, but if you wanted a job and a bit of gold ...`,
				},{
					text: `<strong>Rhus</strong>: Then clean the floor with mop!!`,
				},],
				finishName: "Innkeepers Rhus-Jak",
				finishChat: [{
					text: `<strong>Rhus</strong>: Give mop back here!`,
				},{
					text: `<strong>Jak</strong>: Thank you! It's looking a lot better here now.`,
				},],
				objectives: [
					"Use the mop to clean away the dirt in the tavern.",
					"Speak to <strong>Innkeepera Rhus-Jak</strong>.",
				],
			},

			multipleAreas: true,

			howToStart: "Speak to an innkeeper.",
			levelRequirement: 1,
			questRequirements: ["To the Logging Camp"],
			requirement: function () {
				return Game.areaName !== "loggingCampTavern" || Player.quests.completedQuestArray.includes("A Drink on Us!");
			},
			repeatTime: "repeatable",
			randomGroup: "tavernJobs",

			rewards: {
				xp: 10,
				items: [
					{item: Items.currency[2],}, // 1 gold
				],
			},

			startRewards: {
				items: [
					{item: Items.sword[13], removeOnAbandon: true}, // the mop
				],
			},

			removeItems: [
				{item: Items.sword[13],}, // remove the mop
			],

			isCompleted: function () {
				let completed = [];

				completed.push(checkProgress(Player.quests.questProgress.dirtDone, Player.quests.questProgress.dirtTotal));

				completed = checkFinished(completed);

				return completed;
			},

			onQuestStart: function () {

				// select a random number of dirt to generate between 5 and 15
				let random = Random(5, 15);
				Player.quests.questProgress.dirtTotal = random;
				Player.quests.questProgress.dirtDone = 0;

				// spawn the dirt
				for (let i = 0; i < random; i++) {

					// generate the dirt at a random location
					Game.characters.push(new Character({
	                    map: map,
	                    type: "characters",
	                    x: Random(0, map.cols * map.tsize),
	                    y: Random(0, (map.rows-1.5) * map.tsize),
						z: -0.5, // should never be infront of player
	                    image: "dirt",
	                    name: "Dirt",
	                    hostility: "neutral",
	                    level: 1,
						xpGiven: 0,
						corpseOnDeath: false,
						respawnOnDeath: false,
						damageableByPlayer: true,
						canBeDamagedBy: ["Mop"],
	                    stats: {
	                        walkSpeed: 0,
	                        maxHealth: 1,
	                    },
						onDeath: function () {
							Player.quests.questProgress.dirtDone++;
						}
	                }));

					let array = Game.things.concat(Game.characters); // array of things that cannot be touched

					// if the centre of the dirt is touching any thing then choose a new location
					let dirt = Game.characters[Game.characters.length-1];
					let touching = true;
					while (touching) {
						touching = false;
						if ([30, 85].includes(map.getTile(0, map.getCol(dirt.x-dirt.width/2), map.getRow(dirt.y+dirt.height/2))) // floor tile (2 numbers because 2 areas)
						&& [30, 85].includes(map.getTile(0, map.getCol(dirt.x+dirt.width/2), map.getRow(dirt.y+dirt.height/2)))) { // (update if moved)
							for (let x = 0; x < array.length; x++) {
								if (array[x].isTouching(dirt)) {
									touching = true;
									dirt.x = Random(0, map.cols * map.tsize);
									dirt.y = Random(0, (map.rows-1.5) * map.tsize);
									break;
								}
							}
						}
						else {
							touching = true;
							dirt.x = Random(0, map.cols * map.tsize);
							dirt.y = Random(0, (map.rows-1.5) * map.tsize);
						}
					}
				}
			},
		},
		{
			id: 2,
			quest: "Tavern Tidy-Up",
			questArea: "tavern",

			gregorGoldenbrew: {
				startName: "Gregor Goldenbrew",
				startChat: [{
					text: `My tables are getting covered with all these plates and mugs. Would ya mind collecting 'em all and bringing 'em back 'ere for me?`,
				},{
					text: `I'll give ya some gold for yer time.`,
				},],
				finishName: "Gregor Goldenbrew",
				finishChat: [{
					text: `Don't worry, I got yer reward here. My tavern's very popular so come back 'n' help whenever ya want.`,
				},],
				objectives: [
					"Collect mugs and plates from tables.",
					"Return them to <strong>Gregor Goldenbrew</strong>.",
				],
			},

			innkeepersRhusJak: {
				startName: "Innkeepers Rhus-Jak",
				startChat: [{
					text: `<strong>Rhus</strong>: Tables are messy.`,
				},{
					text: `<strong>Jak</strong>: Could you help us tidy them a little? You can have a bit of gold for your time.`,
				},{
					text: `<strong>Rhus</strong>: Tables are <strong>very</strong> messy.`,
				},],
				finishName: "Innkeepers Rhus-Jak",
				finishChat: [{
					text: `<strong>Jak</strong>: Thank you! I'm sure they'll get cluttered again, but the tavern's looking great at the moment.`,
				},{
					text: `<strong>Rhus</strong>: Tables are clean.`,
				},],
				objectives: [
					"Collect mugs and plates from tables.",
					"Return them to <strong>Innkeepers Rhus-Jak</strong>.",
				],
			},

			multipleAreas: true,

			howToStart: "Speak to an innkeeper.",
			levelRequirement: 1,
			questRequirements: ["To the Logging Camp"],
			requirement: function () {
				return Game.areaName !== "loggingCampTavern" || Player.quests.completedQuestArray.includes("A Drink on Us!");
			},
			repeatTime: "repeatable",
			randomGroup: "tavernJobs",

			rewards: {
				xp: 10,
				items: [
					{item: Items.currency[2],}, // 1 gold
				],
			},

			removeItems: [
				{item: Items.item[25], quantity: true}, // all mugs
				{item: Items.item[26], quantity: true}, // all plates
			],

			isCompleted: function () {
				let completed = [];

				completed.push(checkProgress(Player.quests.questProgress.mugsPlatesDone, Player.quests.questProgress.mugsPlatesTotal));

				completed = checkFinished(completed);

				return completed;
			},

			onQuestStart: function () {

				if (Player.quests.questProgress.mugsPlatesDone === undefined) {
					Areas[Game.areaName].onAreaJoin();
					Player.quests.questProgress.mugsPlatesDone = 0;
				}

				for (let i = 0; i < Game.things.length; i++) {
					if (Game.things[i].name === "Mug") {
						Game.things[i].onInteract = function () {
							Game.removeObject(this.id, "things");
							Dom.inventory.give(Items.item[25]);
							Player.quests.questProgress.mugsPlatesDone++;
						}
					}
					else if (Game.things[i].name === "Plate") {
						Game.things[i].onInteract = function () {
							Game.removeObject(this.id, "things");
							Dom.inventory.give(Items.item[26]);
							Player.quests.questProgress.mugsPlatesDone++;
						}
					}
				}
			},

			onQuestFinish: function () {
				Player.quests.questProgress.mugsPlatesDone = undefined;
			}
		},
		{
			id: 3,
			quest: "Hungry Taverners",
			questArea: "tavern",

			gregorGoldenbrew: {
				startName: "Gregor Goldenbrew",
				startChat: [{
					text: `'Ey you!`,
				},{
					text: `Wanna make a bit o' money helpin' me out? If ya do I need someone to hand out these tavern goods for me.`,
				},],
				finishName: "Gregor Goldenbrew",
				finishChat: [{
					text: `'Ey you!`,
				},{
					text: `Great! That should keep 'em happy for a few minutes.`,
				},],
				objectives: [
					"Hand out some tavern goods to people around the tavern",
					"Speak to <strong>Gregor Goldenbrew</strong>.",
				],
			},

			innkeepersRhusJak: {
				startName: "Innkeepers Rhus-Jak",
				startChat: [{
					text: `<strong>Jak</strong>: There's a lot of people waiting for their orders! Could you lend us a hand and give out some foodstuffs?`,
				},],
				finishName: "Innkeepers Rhus-Jak",
				finishChat: [{
					text: `<strong>Rhus</strong>: Good. People happy.`,
					text: `<strong>Jak</strong>: Thank you!`,
				},],
				objectives: [
					"Hand out some tavern goods to people around the tavern <i>(check your quest log!)</i>",
					"Speak to <strong>Innkeepers Rhus-Jak</strong>.",
				],
			},

			multipleAreas: true,

			howToStart: "Speak to an innkeeper.",
			levelRequirement: 1,
			questRequirements: ["To the Logging Camp"],
			requirement: function () {
				return Game.areaName !== "loggingCampTavern" || Player.quests.completedQuestArray.includes("A Drink on Us!");
			},
			repeatTime: "repeatable",
			randomGroup: "tavernJobs",

			rewards: {
				xp: 10,
				items: [
					{item: Items.currency[2],}, // 1 gold
				],
			},

			isCompleted: function () {
				let completed = [];

				for (let i = Game.villagers.length-1; i >= 0; i--) {
					completed.push(Game.villagers[i].tavernGoodsDelivered === true);
				}

				completed = checkFinished(completed);

				return completed;
			},

			onQuestStart: function (npc) {

				// remove the first objective which just tells you you will hand general stuff to general people
				this[ToObjectKey(npc.name)].objectives.shift();

				// filter out all unactive event items
				let sold = npc.roles[0].sold.filter(item => item.eventRequirement === undefined || item.eventRequirement === Event.event);

				// for each villager assign a random item sold by the npc
				for (let i = 0; i < Game.villagers.length; i++) {
					let item = sold[Random(0, sold.length-1)].item;
					this[ToObjectKey(npc.name)].objectives.unshift("Give " + item.name + " to " + Game.villagers[i].name + ".")

					if (typeof Game.villagers[i].roles !== undefined) {
						Game.villagers[i].roles = [];
					}

					Game.villagers[i].roles.push({
						role: "function",
						chooseText: "Here is your " + item.name,
						forceChoose: true, // forces choose dom
						onClick: function () {
							// remove the item
							Dom.inventory.removeById(item.id, item.type, 1, true, true, false, true); // remove the QUEST item
							// quest progress
							Game.villagers[i].tavernGoodsDelivered = true; // always the first NPC to be delivered to
							// chat
							Dom.chat.insert(Dom.chat.say(Game.villagers[i].name, Game.villagers[i].chat.receiveTavernGood, Game.villagers[i].language));
							// because it thinks a dom page is open
							Dom.currentlyDisplayed = "";
							Dom.currentNPC = {};
						},
						roleRequirement: function () {
							// if they have the item AS A QUEST ITEM and they haven't been delivered it already!
							return Dom.inventory.check(item.id, item.type, 1, true, undefined, true) && !Game.villagers[i].tavernGoodsDelivered;
						}
					});
				}
			},

			callQuestFinishOnAbandon: 1, // this is set to the step(s, if array) of which the finish function should be called

			onQuestFinish: function (npc) {
				// remove all items with the property removeOnAbandon set to the quest name
				for (let i = 0; i < Player.inventory.items.length; i++) {
					if (Player.inventory.items[i].removeOnAbandon === "Hungry Taverners") {
						Dom.inventory.remove(i, true);
					}
				}

				// remove the role for giving the tavern goods of all the villagers, and their tavernGoodsDelivered property
				for (let i = 0; i < Game.villagers.length; i++) {
					Game.villagers[i].roles.pop();
					Game.villagers[i].tavernGoodsDelivered = false;
				}

				// reset the objectives
				this[ToObjectKey(npc.name)].objectives = ["Hand out some tavern goods to people around the tavern", this[ToObjectKey(npc.name)].objectives.pop()];
			}
		},
	],

	fishing: [
		{
			id: 0,
			quest: "Learning to Fish I",
			questArea: "fishing",

			startName: "Fisherman Tobenam",
			startChat: [{
				text: `Heheh, you can't always fish up a fish right away, but you can always fish up some driftwood!`,
			},{
				text: `Take a fish and see what you're gettin', heh.`,
			},],

			finishName: "Fisherman Tobenam",
			finishChat: [{
				text: `Heheh, you'll improve at fishing the more you do it.`,
			},],

			objectives: [
				"Fish something up!",
				"Speak to <strong>Fisherman Tobenam</strong>.",
			],

			isCompleted: function() {
				let completed = [];

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(Player.stats.fishingSkill > 0);

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to <strong>Fisherman Tobenam</strong>.",
			levelRequirement: 2,
			questRequirements: ["A Lost Fishing Rod"],

			rewards: {
				xp: 20,
			},
		},

		{
			id: 1,
			quest: "Learning to Fish II",
			questArea: "fishing",

			startName: "Fisherman Tobenam",
			startChat: [{
				text: `What better way to get a fish than to use some bait? Buy a <strong>Can of Worms</strong> from me, and try your luck, heheh.`,
			},],

			finishName: "Fisherman Tobenam",
			finishChat: [{
				text: `Heheh, your first catch! You'll be good as me in no time...`,
			},],

			objectives: [
				"Buy a can of worms from Fisherman Tobenam and use it.",
				"Catch your first fish!",
				"Speak to <strong>Fisherman Tobenam</strong>.",
			],

			isCompleted: function() {
				let completed = [];

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(Player.quests.questProgress.hasUsedBait || false);
				completed.push(Player.quests.questProgress.fishCaught > 0 || false);

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to <strong>Fisherman Tobenam</strong>.",
			levelRequirement: 2,
			questRequirements: ["Learning to Fish I"],

			rewards: {
				xp: 20,
			},
		},

		{
			id: 2,
			quest: "Learning to Fish III",
			questArea: "fishing",

			startName: "Fisherman Tobenam",
			startChat: [{
				text: `What did I say, you can't get fish all the time without practising!`,
			},{
				text: `Keep fishing until your skill is level 10... your effort now will be made up for later, heheh. Oh, and don't forget to use up that bait!`,
			},],

			finishName: "Fisherman Tobenam",
			finishChat: [{
				text: `Wow, well done! You're now a fishing master, heheh, almost. Come back to me every day and I'll give you something to do, heheh.`,
			},],

			objectives: [
				"Level your base fishing skill to 10.",
				"Speak to <strong>Fisherman Tobenam</strong>.",
			],

			isCompleted: function() {
				let completed = [];

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(Player.stats.fishingSkill >= 10 ? true : " ("+Round(Player.stats.fishingSkill)+"/10)");

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to <strong>Fisherman Tobenam</strong>.",
			levelRequirement: 2,
			questRequirements: ["Learning to Fish II"],

			rewards: {
				xp: 50,
			},
		},

		{
			id: 3,
			quest: "A Big Catch",
			questArea: "fishing",

			startName: "Fisherman Tobenam",
			startChat: `How's your fishing going? Reel up 15 items and we'll see, heheh.`,

			finishName: "Fisherman Tobenam",
			finishChat: `Not bad, heheh. I'm glad I taught you how to fish now!`,

			objectives: [
				"Fish up 15 items.",
				"Speak to <strong>Fisherman Tobenam</strong>.",
			],

			isCompleted: function() {
				let completed = []; // contains true or false for all of the objectives, with the last element being if the quest is ready to complete

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(checkProgress(Player.quests.questProgress.itemsFishedUp, 15));

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to <strong>Fisherman Tobenam</strong>.",
			levelRequirement: 2,
			questRequirements: ["Learning to Fish III"],
			fishingRequirement: {
				min: 0,
				max: 1000,
			},
			repeatTime: "daily",
			randomGroup: "fishingDaily",

			rewards: {
				xp: 30,
				items: [
					{item: Items.currency[3],}, // fishing seal
				],
			},

			resetVariables: [
				"itemsFishedUp",
			],
		},

		{
			id: 4,
			quest: "A Big Splash",
			questArea: "fishing",

			startName: "Fisherman Tobenam",
			startChat: `Heheh, what's the point in fishing if you don't fish up fish? Fish up 10 fish! Heheh.`,

			finishName: "Fisherman Tobenam",
			finishChat: `Heheh, you're getting better and better!`,

			objectives: [
				"Fish up 10 fish.",
				"Speak to <strong>Fisherman Tobenam</strong>.",
			],

			isCompleted: function() {
				let completed = []; // contains true or false for all of the objectives, with the last element being if the quest is ready to complete

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(checkProgress(Player.quests.questProgress.fishCaught, 10));

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to <strong>Fisherman Tobenam</strong>.",
			levelRequirement: 2,
			questRequirements: ["Learning to Fish III"],
			fishingRequirement: {
				min: 0,
				max: 1000,
			},
			repeatTime: "daily",
			randomGroup: "fishingDaily",

			rewards: {
				xp: 30,
				items: [
					{item: Items.currency[3],}, // fishing seal
				],
			},

			resetVariables: [
				"fishCaught",
			],
		},

		{
			id: 5,
			quest: "A Bigger Splash",
			questArea: "fishing",

			startName: "Fisherman Tobenam",
			startChat: `Today feels like a lucky day, heheh! Fish up lots and test your luck!`,

			finishName: "Fisherman Tobenam",
			finishChat: `Heheh, you sure were lucky!`,

			objectives: [
				"Fish up 25 fish.",
				"Speak to <strong>Fisherman Tobenam</strong>.",
			],

			isCompleted: function() {
				let completed = []; // contains true or false for all of the objectives, with the last element being if the quest is ready to complete

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(checkProgress(Player.quests.questProgress.fishCaught, 25));

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to <strong>Fisherman Tobenam</strong>.",
			levelRequirement: 2,
			questRequirements: ["Learning to Fish III"],
			fishingRequirement: {
				min: 0,
				max: 1000,
			},
			repeatTime: "daily",
			randomGroup: "fishingDaily",

			rewards: {
				xp: 50,
				items: [
					{item: Items.currency[3], quantity: 2,}, // fishing seal
				],
			},

			resetVariables: [
				"fishCaught",
			],
		},

		{
			id: 6,
			quest: "Junk Cleanup",
			questArea: "fishing",

			startName: "Fisherman Tobenam",
			startChat: `The water seems quite dirty, heheh. Fish up some of the junk to clean it up!`,

			finishName: "Fisherman Tobenam",
			finishChat: `Heheh, it's much better now.`,

			objectives: [
				"Fish up 25 junk items.",
				"Speak to <strong>Fisherman Tobenam</strong>.",
			],

			isCompleted: function() {
				let completed = []; // contains true or false for all of the objectives, with the last element being if the quest is ready to complete

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(checkProgress(Player.quests.questProgress.junkCaught, 25));

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to <strong>Fisherman Tobenam</strong>.",
			levelRequirement: 2,
			questRequirements: ["Learning to Fish III"],
			fishingRequirement: {
				min: 0,
				max: 1000,
			},
			repeatTime: "daily",
			randomGroup: "fishingDaily",

			rewards: {
				xp: 20,
				items: [
					{item: Items.currency[3], quantity: 1,}, // fishing seal
				],
			},

			resetVariables: [
				"junkCaught",
			],
		},

		{
			id: 7,
			quest: "Long Fish",
			questArea: "fishing",

			startName: "Fisherman Tobenam",
			startChat: `Heheh, how about catching some longer fish today?`,

			finishName: "Fisherman Tobenam",
			finishChat: `Heheh, they are really quite long!`,

			objectives: [
				"Fish up 5 fish longer than 100cm.",
				"Speak to <strong>Fisherman Tobenam</strong>.",
			],

			isCompleted: function() {
				let completed = []; // contains true or false for all of the objectives, with the last element being if the quest is ready to complete

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(checkProgress(Player.quests.questProgress.longFishCaught, 5));

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to <strong>Fisherman Tobenam</strong>.",
			levelRequirement: 2,
			questRequirements: ["Learning to Fish III"],
			fishingRequirement: {
				min: 25,
				max: 1000,
			},
			repeatTime: "daily",
			randomGroup: "fishingDaily",

			rewards: {
				xp: 30,
				items: [
					{item: Items.currency[3], quantity: 1,}, // fishing seal
				],
			},

			resetVariables: [
				"longFishCaught",
			],
		},

		{
			id: 8,
			quest: "Longer Fish",
			questArea: "fishing",

			startName: "Fisherman Tobenam",
			startChat: `Heheh, how about catching some more long fish today?`,

			finishName: "Fisherman Tobenam",
			finishChat: `Heheh, they are really quite long!`,

			objectives: [
				"Fish up 10 fish longer than 100cm.",
				"Speak to <strong>Fisherman Tobenam</strong>.",
			],

			isCompleted: function() {
				let completed = []; // contains true or false for all of the objectives, with the last element being if the quest is ready to complete

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(checkProgress(Player.quests.questProgress.longFishCaught, 10));

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to <strong>Fisherman Tobenam</strong>.",
			levelRequirement: 2,
			questRequirements: ["Learning to Fish III"],
			fishingRequirement: {
				min: 40,
				max: 1000,
			},
			repeatTime: "daily",
			randomGroup: "fishingDaily",

			rewards: {
				xp: 50,
				items: [
					{item: Items.currency[3], quantity: 2,}, // fishing seal
				],
			},

			resetVariables: [
				"longFishCaught",
			],
		},

		{
			id: 9,
			quest: "Common Fisher",
			questArea: "fishing",

			startName: "Fisherman Tobenam",
			startChat: `A great place to start in fishing is commons, heheh. Fish some up!`,

			finishName: "Fisherman Tobenam",
			finishChat: `Great work today, heheheh.`,

			objectives: [
				"Fish up 10 common fish.",
				"Speak to <strong>Fisherman Tobenam</strong>.",
			],

			isCompleted: function() {
				let completed = []; // contains true or false for all of the objectives, with the last element being if the quest is ready to complete

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(checkProgress(Player.quests.questProgress.commonFishCaught, 10));

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to <strong>Fisherman Tobenam</strong>.",
			levelRequirement: 2,
			questRequirements: ["Learning to Fish III"],
			fishingRequirement: {
				min: 0,
				max: 1000,
			},
			repeatTime: "daily",
			randomGroup: "fishingDaily",

			rewards: {
				xp: 30,
				items: [
					{item: Items.currency[3], quantity: 1,}, // fishing seal
				],
			},

			resetVariables: [
				"commonFishCaught",
			],
		},

		{
			id: 10,
			quest: "Unique Fisher",
			questArea: "fishing",

			startName: "Fisherman Tobenam",
			startChat: `Heheh, lets see if you can find some unique fish today.`,

			finishName: "Fisherman Tobenam",
			finishChat: `You really did it, heheh.`,

			objectives: [
				"Fish up 3 unique fish.",
				"Speak to <strong>Fisherman Tobenam</strong>.",
			],

			isCompleted: function() {
				let completed = []; // contains true or false for all of the objectives, with the last element being if the quest is ready to complete

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(checkProgress(Player.quests.questProgress.uniqueFishCaught, 3));

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to <strong>Fisherman Tobenam</strong>.",
			levelRequirement: 2,
			questRequirements: ["Learning to Fish III"],
			fishingRequirement: {
				min: 25,
				max: 1000,
			},
			repeatTime: "daily",
			randomGroup: "fishingDaily",

			rewards: {
				xp: 40,
				items: [
					{item: Items.currency[3], quantity: 1,}, // fishing seal
				],
			},

			resetVariables: [
				"uniqueFishCaught",
			],
		},

		{
			id: 11,
			quest: "Mythic Fisher",
			questArea: "fishing",

			startName: "Fisherman Tobenam",
			startChat: `You are improving, heheh. Let's test your skills with a mythic fish, heheh.`,

			finishName: "Fisherman Tobenam",
			finishChat: `That is one cool looking fish, heheh.`,

			objectives: [
				"Fish up a mythic fish.",
				"Speak to <strong>Fisherman Tobenam</strong>.",
			],

			isCompleted: function() {
				let completed = []; // contains true or false for all of the objectives, with the last element being if the quest is ready to complete

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(checkProgress(Player.quests.questProgress.mythicFishCaught, 1));

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to <strong>Fisherman Tobenam</strong>.",
			levelRequirement: 2,
			questRequirements: ["Learning to Fish III"],
			fishingRequirement: {
				min: 40,
				max: 1000,
			},
			repeatTime: "daily",
			randomGroup: "fishingDaily",

			rewards: {
				xp: 50,
				items: [
					{item: Items.currency[3], quantity: 2,}, // fishing seal
				],
			},

			resetVariables: [
				"mythicFishCaught",
			],
		},

		{
			// make sure to add daily quest to quest area under tobernam/other fisherman
			id: 12,
			quest: "Master Fisher",
			questArea: "fishing",

			startName: "Fisherman Tobenam",
			startChat: `Heheh, I heard you were getting better, let's test your skill.`,

			finishName: "Fisherman Tobenam",
			finishChat: `You'll be better than me soon, heheh.`,

			objectives: [
				"Fish up 50 fish.",
				"Speak to <strong>Fisherman Tobenam</strong>.",
			],

			isCompleted: function() {
				let completed = []; // contains true or false for all of the objectives, with the last element being if the quest is ready to complete

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(checkProgress(Player.quests.questProgress.fishCaught, 50));

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to <strong>Fisherman Tobenam</strong>.",
			levelRequirement: 2,
			questRequirements: ["Learning to Fish III"],
			fishingRequirement: {
				min: 100,
				max: 1000,
			},
			repeatTime: "daily",
			randomGroup: "fishingDaily",

			rewards: {
				xp: 100,
				items: [
					{item: Items.currency[3], quantity: 3,}, // fishing seal
				],
			},

			resetVariables: [
				"fishCaught",
			],
		},
	],

	caves: [
		{
			id: 0,
			quest: "Dig Base Alfa",
			questArea: "caves",

			questType: "storyline",

			steps: [
				{
					stepNum: 0,
					name: "Recruiter Sylvie",
					chat: [{
						text: `${Player.name}!.....`,
					},{
						text: `...`,
					},{
						text: `..CONGRATULATIONS ON LEVEL TEN!!!`,
					},{
						text: `The city is truly thourishing, with many thanks to your help around the area.`,
					},{
						text: `Hey, I've even heard the frog problem has been sorted! Those exterminators I ordered were rather effective..`,
					},{
						text: `But ${Player.name}, what is the point of such a marvellous city if not the work produced by it?`,
					},{
						text: `That's why I need you to report to <b>Field Director Lyn</b> at <b>Eaglecrest Dig Base Alfa</b> immediately.`,
					},{
						text: `It's unfortunate, but as an archaeological city we need as much energy put into the <b>Caves excavation effort</b> as possible.`,
					},{
						text: `After all,<br><b>Eaglecrest needs you!</b>`,
					}],
				},
				{
					stepNum: 1,
					name: "Field Director Lyn",
					chat: [{
						text: `—search squadron sent IMMEDIATELY to the lower schist plateau, -1087.21, 546.66.`,
					},{
						text: `DIGBETH, we need prompt backup against Palatine AND Vomer!`,
					},{
						text: `No JERICHO, it's the LOWER-UPWARD-CRYSTALLINE bridge that needs immediate reinforcement against—`,
					},{
						text: `Ah! You must be one of the new archeaologists I ordered from Sylvie. I was hoping there'd be more of you, though it was hard enough to get Sylvie to send backup in the first place...`,
					},{
						text: `I hope you had a pleasant journey! I'm Archaeologist Lin, the head of command here at <b>Dig Base Alfa</b>.`
					},{
						text: `Not a second to be wasted - please report to <b>P.I. Jericho</b> for further orders.`
					},{
						text: `DIGBETH, request services from Sylvie AT ONCE! Yes, AGAIN!`
					},],
					rewards: {
						xp: 20,
						items: [
							{item: Items.currency[2], quantity: 4,},
						],
					},
				},
			],

			objectivesList: [
				{id: 0, text: "Report to <b>Field Director Lyn</b> at <b>Dig Base Alfa</b>, which can be found to the east of the plains, through the coyote field.",
				},
			],

			howToStart: "Speak to <b>Recruiter Sylvie</b> in Eaglecrest City.",
			levelRequirement: 10,
			questRequirements: ["Last frog quest"],
		},
		{
			id: 1,
			quest: "The Caves Awaken",
			questArea: "caves",

			questType: "storyline",

			steps: [
				{
					stepNum: 0,
					name: "Principal Investigator Jericho",
					chat: [{
						text: `Hello! Greetings! Salutations! It's a busy time here at Base Camp Alfa I'm afraid, but no time better for your arrival! What's your name?`,
						options: [
							{
								text: `${Player.name}`,
								action: "progress",
							},
						]
					},{
						text: `Well great to meet you ${Player.name}! Wonderful name that! I once had a dead cat called ${Player.name}! Well, not dead when I had it- you know what I mean...`,
					},{
						text: `Yes, anyway, your, erm, orders. Dig Base Alfa's primary goal is excavation of the upper cave schists, which you'll be sent into.`
					},{
						text: `However, the majority of our dig effort in this area comes from the <b>chests</b> that populate the area. A <b>chest</b> is, well, a sort of box-`,
					},{
						text: `Sorry. I'm quite nervous. In fact, it's my first day on the job, and... erm...`,
						options: [
							{
								text: `...Yes?`,
								action: "progress",
							},
						]
					},{
						text: `The caves they're... Coming alive...`,
					}],
				},
				{
					stepNum: 1,
					name: "Principal Investigator Jericho",
					chat: [{
						text: `Ouch, looked like the living rock gave you a hard time...`,
					},{
						text: `How was your expedition? Did you find anything of value?`,
						options: [
							{
								text: `<i>Show Jericho the book</i>`,
								action: "progress",
							},
						]
					},{
						text: `Hmmm... Interesting! From a glance this book looks like this could have originated over a thousand years ago.`,
					},{
						text: `Let me analyse this book and get back to you soon, see you!`,
					},{
						text: `Oh, also, I'm pretty sure there's other archaeologists around that need a hand. Don't be afraid to offer your services!`
					},],
					removeItems: [], // tbd
					rewards: {
						xp: 50,
					},
				},
			],

			objectivesList: [
				{id: 0, text: "Open and loot five chests from the Upper Schists",
				},
				{id: 1, text: "Bring your findings to <b>P.I. Jericho</b>",
				},
			],

			howToStart: "Report to <b>P.I. Jericho</b> at <b>Dig Base Alfa</b>.",
			levelRequirement: 10,
			questRequirements: ["Dig Base Alfa"],
		},
		{
			id: 2,
			quest: "Digging for Answers",
			questArea: "caves",

			steps: [
				{
					stepNum: 0,
					name: "Senior Archaeologist Digbeth",
					chat: [{
						text: `I trust you've heard about the caves coming to life? Yes.. it seems to be all anyone is talking about recently.`,
					},{
						text: `Nobody knows why. Some say it's due to a surge in the ley lines the caves lie upon, but then why hasn't this happened before? The caves formed to follow the endemic ley lines millions of years ago, we archaeologists only catalysed their opening into the overground.`,
						long: true,
					},{
						text: `Some others proffer a spiritual suggestion, that the gods are fighting back against those seeking to disrupt nature. But these ideas are generally frowned upon - they have absolutely no archeaological basis.`,
						long: true,
					},{
						text: `Either way, I've been working at this site long enough to know that something's up. So, say, how would you feel about helping me figure out the cause of all this?`,
					},{
						text: `I should add that this work isn't <i>officially</i> sanctioned by the Convent, but with ${Event.antoraxAge} years under my belt at this site, I have strings I can pull. What do you say to giving me a hand?`,
						long: true,
						options: [
							{
								text: `Sign me up!`,
								action: "progress",
							},
							{
								text: `I'm not sure I...`,
								action: "progress",
							},
						]
					},{
						text: `Excellent, glad to have you on board! I need you to see what's inside these <b>Living Rocks</b> around the upper schists. They're not easily killed by conventional weapons, which is why we'll need to source something more... explosive.`,
						long: true,
					},{
						text: `I know just the guy for the job - have a chat to my friend <b>Item Buyer Pierre</b> inside the caves, and see if there's anything he can do for us.`,
					}],
				},
				{
					stepNum: 1,
					name: "Item Buyer Pierre",
					chat: [{
						text: `'ello there. What can I get ya for?`,
						options: [
							{
								text: `Something explosive!`,
								action: "progress",
							},
							{
								text: `Something to kill the Living Rock with!`,
								action: "progress",
							},
						]
					},{
						text: `Can't say yer the first 'un today to ask that for.`,
					},{
						text: `I'll give ya anythin' for an equitable trade. Les see...`,
					},{
						text: `<b>5440 gold</b> for <b>5 diamond-grade dynamite</b>? Guaranteed to blow anythin' apart if want it yer.`,
						options: [
							{
								text: `What?!`,
								action: "progress",
							},
							{
								text: `I can't afford that!`,
								action: "progress",
							},
						]
					},{
						text: `Eh, fine. <b>5210 gold</b> for <b>5 diamond-grade dynamite</b>. Take it or leave it.`,
						options: [
							{
								text: `Leave it`,
								action: "progress",
							},
						]
					},{
						text: `Fine, pleasure doin' business with y'.`,
					},{
						text: `'ang on... fine. There's somethin' else y' could bring.`,
					},{
						text: `I've a real craving for... <b>Crumpets</b>. Three should do me wonderful!`,
					}
					],
				},
				{
					stepNum: 2,
					name: "Item Buyer Pierre",
					chat: [{
						text: `Fanks, I was starved!`,
					},{
						text: `'ere's yer <b>diamond-grade dynamite</b>. Pleasure doin' business with yers.`,
					},{
						text: `I'm startin' to like havin' yer around 'ere. Don't go off down those caves forever like those other archaeologists ya? Can't be givin' my sister business.`,
						long: true,
					},{
						text: `And if y' have any other crumpets, bring 'em my way ya?`,
					},{
						text: `Ta!`,
					}
					],
					rewards: [], // tbd
					removeItems: [], // tbd
				},
				{
					stepNum: 3,
					name: "Senior Archaeologist Digbeth",
					chat: [{
						text: `Well?`,
					},{
						text: `'ere's yer <b>diamond-grade dynamite</b>. Pleasure doin' business with yers.`,
					},
					],
					rewards: [], // tbd
					removeItems: [], // tbd
				},
			],

			objectivesList: [
				{id: 0, text: "Talk to <b>Item Buyer Pierre</b> in the Caves.",
				},
				{id: 1, text: "Bring three <b>crumpets</b> to <b>Item Buyer Pierre</b>.",
				},
				{id: 2, text: "Use the <b>diamond-grade dynamite</b> to kill and loot a <b>Living Rock</b>.",
				},
				{id: 3, text: "Bring your findings to <b>Senior Archaeologist Digbeth</b>.",
				},
			],

			howToStart: "Chat to <b>P.I. Jericho</b> at <b>Dig Base Alfa</b>.",
			levelRequirement: 10,
			questRequirements: ["Dig Base Alfa"],
		},
		{
			id: 3,
			quest: "Ballad of the Lost, Part 1",
			questArea: "caves",

			steps: [
				{
					stepNum: 0,
					name: "Principal Investigator Jericho",
					chat: [{
						text: `Hello! Greetings! Salutations! It's a busy time here at Base Camp Alfa I'm afraid, but no time better for your arrival! What's your name?`,
						options: [
							{
								text: `${Player.name}`,
								action: "progress",
							},
						]
					},{
						text: `Well great to meet you ${Player.name}! Wonderful name that! I once had a dead cat called ${Player.name}! Well, not dead when I had it- you know what I mean...`,
					},{
						text: `Yes, anyway, your, erm, orders. Dig Base Alfa's primary goal is excavation of the upper cave schists, which you'll be sent into.`
					},{
						text: `However, the majority of our dig effort in this area comes from the <b>chests</b> that populate the area. A <b>chest</b> is, well, a sort of box-`,
					},{
						text: `Sorry. I'm quite nervous. In fact, it's my first day on the job, and... erm...`,
						options: [
							{
								text: `...Yes?`,
								action: "progress",
							},
						]
					},{
						text: `The caves they're... Coming alive...`,
					}],
				},
				{
					stepNum: 1,
					name: "Principal Investigator Jericho",
					chat: [{
						text: `Ouch, looked like the living rock gave you a hard time...`,
					},{
						text: `How was your expedition? Did you find anything of value?`,
						options: [
							{
								text: `<i>Show Jericho the book</i>`,
								action: "progress",
							},
						]
					},{
						text: `Hmmm... Interesting! From a glance this book looks like this could have originated over a thousand years ago.`,
					},{
						text: `Let me analyse this book and get back to you soon, see you!`,
					},{
						text: `Oh, also, I'm pretty sure there's other archaeologists around that need a hand. Don't be afraid to offer your services!`
					},],
					removeItems: [], // tbd
					rewards: {
						xp: 50,
					},
				},
			],

			objectivesList: [
				{id: 0, text: "Open and loot five chests from the Upper Schists",
				},
				{id: 1, text: "Bring your findings to <b>P.I. Jericho</b>",
				},
			],

			howToStart: "Report to <b>P.I. Jericho</b> at <b>Dig Base Alfa</b>.",
			levelRequirement: 10,
			questRequirements: ["Dig Base Alfa"],
		},
	],
};

// check if all of the contents of the array are true
// adds the last value to the completed array
function checkFinished (completed) {
	let finished = true;
	for (let i = 0; i < completed.length; i++) {
		if (completed[i] !== true) {
			finished = false;
		}
	}
	completed.push(finished);
	return completed;
}

// return a string that contains the progress for a countable objectives
// currentProgress and requiredProgress should be countable values (currentProgress can be undefined though)
// either false, true, or (x/y)
function checkProgress (currentProgress, requiredProgress) {
	if (currentProgress === undefined || currentProgress === 0) {
		return false;
	}
	else if (currentProgress >= requiredProgress) {
		return true;
	}
	else {
		return "(" + currentProgress + "/" + requiredProgress + ")";
	}
}
