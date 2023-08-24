var Quests = {
	eaglecrestLoggingCamp: [
		{
			id: 0,
			quest: "To the Logging Camp",
			questArea: "eaglecrestLoggingCamp", // name of the array this is contained in

			important: true, // appears at top of quest log and choose dom

			//startName: "Cart Driver",
			startChat: [{
				text: `That's it, we're here!`,
			},{
				text: `I'm afraid you're going to have to walk to the <strong>Eaglecrest Logging Camp</strong> on your own from here. `,
			},{
				text: `If you walk down a bit to the west you should see the entrance to the camp.`,
			},{
				text: `Oh, and you should probably buy a weapon on your way there...`,
			},],

			//finishName: "Marshall Teper",
			finishChat: [{
				text: `Welcome to the Eaglecrest Logging Camp, adventurer. It's useful to have you here. I hope your journey was fine.`,
			},{
				text: `Take this gold and pair of boots. They're provided by the King's Covenant to all new adventurers.`,
			},{
				text: `Feel free to have a look around the camp and buy anything you want, but not for too long. We've got work to be done.`,
			},],

			objectives: [
				"Buy a weapon from a nearby weaponsmith.",
				"Speak to <strong>Marshall Teper</strong>.",
			],

			isCompleted: function() {
				let completed = []; // contains true or false for all of the objectives, with the last element being if the quest is ready to complete

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(Dom.inventory.check(2, "sword", 1) || Dom.inventory.check(2, "staff", 1) || Dom.inventory.check(2, "bow", 1));

				if (completed[0]) {
					// tutorial
					Game.setTimeout(function () {
						if (Player.tutorialProgress === 3 && Game.areaName === "tutorial") {
							Dom.instructions.page(4);
						}
					}, 2000);
				}

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to the <strong>Cart Driver</strong>.",
			levelRequirement: 1,
			questRequirements: [],
			requirement: function () {
				return Player.tutorialProgress === 1 || Player.skipTutorial;
			},

			rewards: {
				xp: 10,
				items: [
					{item: Items.boots[2],},
					{item: Items.currency[2], quantity: 2,},
				],
			},

			onQuestStart: function() {
				Dom.instructions.page(2);
			},

			onQuestFinish: function() {
				Dom.instructions.page(6);
			},
		},

		{
			id: 1,
			quest: "Learning from the Best",
			questArea: "eaglecrestLoggingCamp",

			important: true,

			startName: "Mashall Teper",
			startChat: [{
				text: `You'll need to learn how to fight if you can be of any worth here - there are goblins out there, and they'll want you dead.`,
			},{
				text: `Go and see <strong>Combat Trainer Saral</strong>. She's more skilled in combat than anyone else here.`,
			},],

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
                let torchNPC = Game.npcs.find(npc => npc.name === "Goblin Torch");
                Game.removeObject(torchNPC.id, "npcs");
            },

			rewards: {
				xp: 50,
			},

			removeItems: [
				{item: Items.staff[7],}, // remove goblin torch
			],

			onQuestFinish: function() {
				if (Game.areaName === "nilbog") {
					Game.npcs.push(new NPC(Areas.nilbog.npcs[0])); // add goblin torch image to the map
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
						Game.npcs.find(NPC => NPC.name === "Ciarra Darkbrew").takeDamage(100);
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
						Game.npcs.find(NPC => NPC.name === "Ciarra Darkbrew").takeDamage(100);
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
					if (Player.quests.timesCompleted.eaglecrestLoggingCamp[25] === null || Player.quests.timesCompleted.eaglecrestLoggingCamp[25] === undefined) {
						Areas.eaglecrestLoggingCamp.npcs[9] = Game.prepareNPC(Areas.eaglecrestLoggingCamp.npcs[9], "npcs", true);
						Game.things.push(new NPC(Areas.eaglecrestLoggingCamp.npcs[9]));
	                }
					else if (Player.quests.timesCompleted.eaglecrestLoggingCamp[25] === 5) {
						Areas.eaglecrestLoggingCamp.npcs[10] = Game.prepareNPC(Areas.eaglecrestLoggingCamp.npcs[10], "npcs", true);
						Game.things.push(new NPC(Areas.eaglecrestLoggingCamp.npcs[10]));
					}
					else if (Player.quests.timesCompleted.eaglecrestLoggingCamp[25] === 8) {
						Areas.eaglecrestLoggingCamp.npcs[11] = Game.prepareNPC(Areas.eaglecrestLoggingCamp.npcs[11], "npcs", true);
						Game.things.push(new NPC(Areas.eaglecrestLoggingCamp.npcs[11]));
					}
				}
			}

		},

	],

	eaglecrest: [
		{
			id: 0,
			quest: "Help! Lost Cat",
			questArea: "eaglecrest",

			startName: "Help Notice",
			startChat: [{
				text: `<b>Have you seen this cat?</b>`,
			},{
				text: `Black cat with white paws and nose.`,
			},{
				text: `His name is <b>Amelio</b>.`,
			},{
				text: `Last seen outside the Eaglecrest tavern.`,
			},{
				text: `If found, please bring to <b>Priest Kemp-Eau</b> inside Eaglecrest Monastery for a reward.`,
			},],

			finishName: "Priest Kemp-Eau",
			finishChat: [{
				text: `Is that Amelio?!`,
			},{
				text: `Awww come over here, you haven't been to the tavern again have you?!`,
			},{
				text: `No, I meant the cat, not you ${Player.name}!`,
			},{
				text: `Anyway, thank you immensely ${Player.name}. I assume you saw our notice!? He usually goes on his little séjours but never for this long!`,
			},{
				text: `We have been searching for weeks. I cannot state how happy we are to see him back.`,
			},{
				text: `Ahh yes your reward. Here is some gold. I hope it goes towards a good cause.`,
			},{
				text: `Wait, adventurer!! If you want some more rewards.. we still need to find out why Amelio was missing for so long.`,
			},{
				text: `He's never done this before. I'm sure it's nothing, but..`
			}],

			objectives: [
				"Find the lost cat, Amelio.",
				"Bring the cat to <strong>Priest Kemp-Eau</strong>.",
			],

			isCompleted: function() {
				let completed = [];

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(typeof Game.hero !== "undefined" && typeof Game.hero.hasOnLead !== "undefined" && Game.hero.hasOnLead.name === "Amelio");

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Find the 'lost cat' notice in Eaglecrest City.",
			levelRequirement: 4,
			questRequirements: ["To Eaglecrest, and Beyond!"],

			rewards: {
				xp: 50,
				items: [{item: Items.currency[2], quantity: 5}],
			},
		},

		{
			id: 1,
			quest: "Snakes and the City",
			questArea: "eaglecrest",

			startName: "Recruiter Sylvie",
			startChat: `<b>Eaglecrest needs you!</b><br>${Player.name}! I suppose you can see what I'm going to ask of you... There's snakes... Everywhere! Not in our <b>Eaglecrest</b>, I say! There's no room for anyone here to slack off - let's all work together to eliminate these snakes for good.<br>How, you say? A <b>net</b> of course! Bring me ten snakes.`,

			finishName: "Recruiter Sylvie",
			finishChat: `Great! <b>Eaglecrest</b> awards your efforts with <b>1 Gold</b>.<br>If we keep working together every day, these snakes will be gone in no time. <i>Now if only we knew where the snakes were coming from...</i>`,

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
					{item: Items.sword[16],}, // the net
				],
			},

			removeItems: [
				{item: Items.sword[16],}, // remove the net
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
			startChat: `Greetingssssss ${Player.name},<br><br>
			I have ssseen your effortssss. How about we make a deal?<br><br>
			Attached isss a key to my lair. Find it in the City and we can discusssss.`,

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
			startChat: `I know who you are. I don't appreciate you capturing my offsssspring. But I notice the ssskill you posessssssss.<br><br>
			There is ssome work I need asssssisssstance with. And I have plenty of rare rewardsssss. But first I need to know I can trussst you won't betray me for the City.<br><br>
			Use thiss <b>Ssssceptre of Sssorrows</b> to capture the light from the main areas of the City. They'll never know it was you. Sssee it as you undoing your wrongssssss of capturing my innocent children.`,

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
				completed.push(Player.quests.questProgress.eaglecrestSamhainLights);
				completed.push(Player.quests.questProgress.eaglecrestWestSamhainLights);
				completed.push(Player.quests.questProgress.eaglecrestEastSamhainLights);
				completed.push(Player.quests.questProgress.eaglecrestGraveyardSamhainLights);

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
				let npc = Game.npcs.find(npc => npc.name === "???");
				npc.name = "The Soothsssayer";
			},
		},

		{
			id: 5,
			quest: "Moving Like a Snake",
			questArea: "eaglecrest",

			startName: "The Soothsssayer",
			startChat: `My offsssspring have been ssscouting out the City these passt dayssss. And they found <b>four cratessss</b> around the City with ingredientsss that I need.<br><br>
			They are not sssstrong enough to open the boxesss. But you are. Go find them for me. I have rewardsssssss.`,

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
				hidden.push(!Player.quests.npcProgress.eaglecrest[5]); // feather objective
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
			startChat: `How about I explain to you sssome of what'sss going on. I'm sssure you would love that.<br><br>
			These Crystalsss can bring about the ssssummoning of a Blood Moon over all of Antorax, harbouring the return of dead ssssoulss to the mortal realm. And lotsss of sssspecial rewardssssssssss for you.<br><br>
			Ssssupervise my cauldron whilst the Blood Moon is ssssummoned, and the Blood Moon will be ourssss!`,

			finishName: "The Soothsssayer",
			finishChat: `The Blood Moon hassss rissssen. The ssssoulsss of old are near.<br><br>
			You will find <b>Ssssamhain Marksssss</b> on some enemiessss during the Blood Moon. Bring them to me. I have more rewardsssss for you.`,

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
				}, 72666));

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
					{item: Items.currency[2], quantity: 2,},
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

			startName: "Fisherman Guimtal",
			startChat: [{
				text: `Somethin' has been infesting the waters and makin' it so us fishermen can't get no fish.`,
			},{
				text: `I think the toads may hold the answer. Can yah get some parts from 'em for me so I can investigate 'em.`,
			},],

			finishName: "Fisherman Guimtal",
			finishChat: [{
				text: `Thanks for the help, I'll get back to yah.`,
			},],

			objectives: [
				"Obtain 16 tadpoles.",
				"Obtain 4 frogspawn.",
				"Speak to <strong>Fisherman Guimtal</strong>.",
			],

			isCompleted: function() {
				let completed = [];

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(checkProgress(Dom.inventory.check(34, "fish"), 16));
				completed.push(checkProgress(Dom.inventory.check(33, "fish"), 4));

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to <strong>Fisherman Guimtal</strong>.",
			levelRequirement: 5,
			questRequirements: ["Learning to Fish III"],

			rewards: {
				xp: 30,
				items: [
					{item: Items.currency[2], quantity: 3,},
				],
			},

			removeItems: [
				{item: Items.fish[34], quantity: 16,}, // tadpoles
				{item: Items.fish[33], quantity: 4,}, // frogspawn
			],

			resetVariables: [
			],
		},
		{
			id: 8,
			quest: "A Fool's Errand",
			questArea: "eaglecrest",

			startName: "The Jester",
			startChat: [{
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

			finishName: "The Jester",
			finishChat: [{
				text: `Thank you so much! Now that you’ve helped this poor clown, you’ll be laughing all the way to the bank. I’ll make sure of it!`,
			},{
				text: `And to whoever stole my magic mirror... you need to take a long hard look at yourself!`,
			},],

			objectives: [
				"Find The Jester's <b>Brass Bugle</b> in the Eaglecrest Plains.",
				"Find The Jester's <b>Confetti Cannon</b> in the Eaglecrest Plains.",
				"Find The Jester's <b>Triangle</b> in the Eaglecrest Plains.",
				"Find The Jester's three <b>Juggling Balls</b> in the Eaglecrest Plains.",
				"Speak to <b>The Jester</b>.",
			],

			isCompleted: function() {
				let completed = [];

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(checkProgress(Dom.inventory.check(58, "item"), 1));
				completed.push(checkProgress(Dom.inventory.check(60, "item"), 1));
				completed.push(checkProgress(Dom.inventory.check(59, "item"), 1));
				completed.push(checkProgress(Dom.inventory.check(57, "item"), 3));

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to <b>The Jester</b> in the Eaglecrest Plains.",
			levelRequirement: 7,
			questRequirements: ["Overdraft"],

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
		},
		{
			id: 9,
			quest: "Every Flower in My Garden",
			questArea: "eaglecrest",

			startName: "Farmer Eloise",
			startChat: [{
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

			finishName: "Farmer Eloise",
			finishChat: [{
				text: `I'll plant these tomorrow~`,
			},{
				text: `⁀ ‿ ⁀`,
			},],

			objectives: [
				"Pick 6 <b>blue callalillies</b> from the <b>flower forest</b> in the Eaglecrest Plains <i>(they're big and blue~)</i>.",
				"Pick 6 <b>marigolds</b> from around the Eaglecrest Plains <i>(they're yellow)</i>.",
				"Speak to <b>Farmer Eloise</b>.",
			],

			isCompleted: function() {
				let completed = [];

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(checkProgress(Dom.inventory.check(68, "item"), 6));
				completed.push(checkProgress(Dom.inventory.check(31, "item"), 6));

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to <b>Farmer Eloise</b> in the Eaglecrest Plains Farms.",
			levelRequirement: 8,
			questRequirements: ["Overdraft"],
			// tbd reputation requirement

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
		},
		{
			id: 10,
			quest: "WANTED: Coyote Pack Wrangler!",
			questArea: "eaglecrest",

			startName: "Recruiter Sylvie",
			startChat: [{
				text: `${Player.name}! You look like you need something to do!`,
			},{
				text: `The City has recently been having trouble with Coyotes in the eastern grassy region of the Plains.`,
			},{
				text: `It is believed that one or many <b>Coyote Pack Wranglers</b> are causing this trouble. If you feel ready, seek one out and deal with them!`,
			},],

			finishName: "Recruiter Sylvie",
			finishChat: [{
				text: `Well done. Although the Pack Wrangler may be back soon, this will surely act as a deterrent.`,
			},],

			objectives: [
				"Kill a <b>Coyote Pack Wrangler</b> in the eastern grassy region of the Plains.",
				"Speak to <strong>Recruiter Sylvie</strong>.",
			],

			isCompleted: function() {
				let completed = [];

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(Player.quests.questProgress.coyoteWranglersQuest > 0);

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to <strong>Recruiter Sylvie</strong>.",
			levelRequirement: 8,
			questRequirements: ["Overdraft"],

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
		{
			id: 11,
			quest: "WANTED: Coyote Pack Wrangler! (bis)",
			questArea: "eaglecrest",

			startName: "Recruiter Sylvie",
			startChat: [{
				text: `Hello again, ${Player.name}. It is unfortunate, but the <b>Coyote Pack Wrangler</b> has been sighted again in the Plains' eastern grassy region.`,
			},{
				text: `Even more unfortunate - it seems to have come with backup...`,
			},{
				text: `Best you deal with it for the safety of the City's citizens. Maybe the Wrangler and its coyotes will get the message this time??`,
			},],

			finishName: "Recruiter Sylvie",
			finishChat: [{
				text: `Great. Let's hope the Pack Wrangler finds somewhere else to go now, for the City's sake...`,
			},],

			objectives: [
				"Kill a <b>Coyote Pack Wrangler</b> in the eastern grassy region of the Plains.",
				"Speak to <strong>Recruiter Sylvie</strong>.",
			],

			isCompleted: function() {
				let completed = [];

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(Player.quests.questProgress.coyoteWranglersQuest > 0);

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to <strong>Recruiter Sylvie</strong>.",
			levelRequirement: 8,
			questRequirements: ["WANTED: Coyote Pack Wrangler!"],

			repeatTime: "daily",
			shareCooldownWith: [{questArea: "eaglecrest", id: 10}],

			rewards: {
				xp: 50,
				items: [
					{item: Items.currency[2], quantity: 4,},
				],
				reputation: {
					eaglecrestCity: 60,
				},
			},

			resetVariables: [
				"coyoteWranglersQuest",
			],
		},
		{
			id: 12,
			quest: "Troubled Waters II",
			questArea: "eaglecrest",

			startName: "Fisherman Guimtal",
			startChat: [{
				text: `Ah yah back. Seems like the toads ain't the ones causin' the fish to go.`,
			},{
				text: `Try speakin' to <strong>Fisher Sharptooth</strong> to if they know anythin' about this.`,
			},{
				text: `They should be fishin' <b>east</b> of the lake.`,
			},],

			finishName: "Fisher Sharptooth",
			finishChat: [{
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

			objectives: [
				"Speak to <strong>Fisher Sharptooth</strong> located <b>east</b> of the lake.",
				"Speak to <strong>Fisherman Guimtal</strong> to see how to speak to <strong>Fisher Sharptooth</strong>.",
				"Speak to the <b>shopkeepers</b> of <strong>Eaglecrest City</strong> to see if they have a <b>translator</b>.",
				"Speak to <strong>Alchemist Tamtam</strong> in the <b>east</b> of <strong>Eaglecrest City</strong> and give him the <b>blueprint</b>.",
				"Speak to <strong>Fisherman Tobenam</strong> in <strong>Fisher's Valley</strong> and see what he can do with the <b>blueprint</b>.",
				"Fish up a <b>Universal Translator</b> in <strong>Fisher's Valley</strong>.",
				//"Speak to <strong>Fisherman Tobenam</strong>.",
				"Return to <strong>Fisher Sharptooth</strong> and give them the <b>Universal Translator</b>."
			],

			isHidden: function() {
				let hidden = [];

				if (Player.quests.questProgress.troubledWaters2Progress === undefined)
				{
					Player.quests.questProgress.troubledWaters2Progress = 0;
				}

				// true or falses for each objective (apart from the turn-in objective)
				hidden.push(false);
				hidden.push(Player.quests.questProgress.troubledWaters2Progress < 1);
				hidden.push(Player.quests.questProgress.troubledWaters2Progress < 2);
				hidden.push(Player.quests.questProgress.troubledWaters2Progress < 3);
				hidden.push(Player.quests.questProgress.troubledWaters2Progress < 4);
				hidden.push(Player.quests.questProgress.troubledWaters2Progress < 5);
				hidden.push(Player.quests.questProgress.troubledWaters2Progress < 6);
				//hidden.push(Player.quests.questProgress.troubledWaters2Progress < 7);

				return hidden;
			},

			isCompleted: function() {
				let completed = [];

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(Player.quests.questProgress.troubledWaters2Progress > 0);
				completed.push(Player.quests.questProgress.troubledWaters2Progress > 1);
				completed.push(Player.quests.questProgress.troubledWaters2Progress > 2);
				completed.push(Player.quests.questProgress.troubledWaters2Progress > 3);
				completed.push(Player.quests.questProgress.troubledWaters2Progress > 4);
				completed.push(Player.quests.questProgress.troubledWaters2Progress > 5);
				//completed.push(Player.quests.questProgress.troubledWaters2Progress > 6);

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to <strong>Fisherman Guimtal</strong>.",
			levelRequirement: 5,
			questRequirements: ["Troubled Waters", "Learning to Fish III"],

			rewards: {
				xp: 50,
				items: [
					{item: Items.currency[2], quantity: 5,},
				],
				reputation: {
					eaglecrestCity: 30,
				},
			},

			removeItems: [
				{item: Items.fish[37],}, // remove the translator
			],

			onQuestStart: function() {
				Player.quests.questProgress.troubledWaters2Progress = 0;
			}
		},
		{
			id: 13,
			quest: "Troubled Waters III (Eaglecrest Plains Fishing Tourǃǃ)",
			questArea: "eaglecrest",

			startName: "Fisher Sharptooth",
			startChat: [{
				text: `So wes needs to finds wheres the source of this issue is.`,
			},{
				text: `I thinks wes could do this bys fishing arounds the plains. This should helps us finds wheres the issue.`,
			},],

			finishName: "Fisher Sharptooth",
			finishChat: [{
				text: `I'lls examines this fish fors yous. Comes backs laters and I'lls tells you the lasts things to do.`,
			},],

			objectives: [
				"Fish up a fish near the <b>train station</b> in the <b>north west</b> of the <b>plains</b>.",
				"Fish up a fish near the <b>flower forest</b> in the <b>south west</b> of the <b>plains</b>.",
				"Fish up a fish near the <b>lake</b> in the <b>centre</b> of the <b>plains</b>.",
				"Fish up a fish near the <b>farm</b> in the <b>north east</b> of the <b>plains</b>.",
				"Fish up a fish near the <b>tall grass</b> in the <b>south east</b> of the <b>plains</b>.",
				"Return to <b>Fisher Sharptooth</b>.",
				"Head down the <b>Eaglecrest Well</b> and fish up a fish.",
				"Return to <b>Fisher Sharptooth</b>.",
			],

			isHidden: function() {
				let hidden = [];

				if (Player.quests.questProgress.troubledWaters3Progress === undefined)
				{
					Player.quests.questProgress.troubledWaters3Progress = 1;
				}

				// true or falses for each objective (apart from the turn-in objective)
				hidden.push(false);
				hidden.push(false);
				hidden.push(false);
				hidden.push(false);
				hidden.push(false);
				hidden.push(Player.quests.questProgress.northWestFish === 0 || Player.quests.questProgress.southWestFish === 0 || Player.quests.questProgress.centreFish === 0 || Player.quests.questProgress.northEastFish === 0 || Player.quests.questProgress.southEastFish === 0);
				hidden.push(Player.quests.questProgress.troubledWaters3Progress < 2);
				hidden.push(Player.quests.questProgress.troubledWaters3Progress < 3);

				return hidden;
			},

			isCompleted: function() {
				let completed = [];
				// true or falses for each objective (apart from the turn-in objective)
				completed.push(Player.quests.questProgress.northWestFish > 0);
				completed.push(Player.quests.questProgress.southWestFish > 0);
				completed.push(Player.quests.questProgress.centreFish > 0);
				completed.push(Player.quests.questProgress.northEastFish > 0);
				completed.push(Player.quests.questProgress.southEastFish > 0);
				completed.push(Player.quests.questProgress.troubledWaters3Progress > 1);
				completed.push(Player.quests.questProgress.troubledWaters3Progress > 2);

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to <strong>Fisher Sharptooth</strong>.",
			levelRequirement: 5,
			questRequirements: ["Troubled Waters II", "tbd"],

			rewards: {
				xp: 75,
				reputation: {
					eaglecrestCity: 30,
				},
			},

			removeItems: [

			],

			onQuestStart: function() {
				Player.quests.questProgress.troubledWaters3Progress = 1;
			}
		},
		{
			id: 14,
			quest: "Troubled Waters IV (Big Fish in a Small Pond)",
			questArea: "eaglecrest",

			startName: "Fisher Sharptooth",
			startChat: [{
				text: `I looks at the fish ands its seems thats theres is a large fish in the well.`,
			},{
				text: `I needs somes bait to gets the fish outs. Gets mes a fish longer thans a metre please ands wes cans ends this.`,
			},],

			finishName: "Fisher Sharptooth",
			finishChat: [{
				text: `I'lls examines this fish fors yous. Comes backs laters and I'lls tells you the lasts things to do.`,
			},],

			objectives: [
				"Fish up a fish longer than <b>100cm</b> and return to <b>Fisher Sharptooth</b> to make into bait.",
				"Fish up the <b>King of Herrings</b> located in <b>Eaglecrest Well</b>.",
				"Defeat the <b>Lake Lurker</b>.",
				"Return to <b>Fisherman Guimtal</b>"
			],

			isHidden: function() {
				let hidden = [];

				if (Player.quests.questProgress.troubledWaters4Progress === undefined)
				{
					Player.quests.questProgress.troubledWaters4Progress = 1;
				}

				// true or falses for each objective (apart from the turn-in objective)
				hidden.push(false);
				hidden.push(Player.quests.questProgress.troubledWaters4Progress < 2);
				hidden.push(Player.quests.questProgress.troubledWaters4Progress < 3);

				return hidden;
			},

			isCompleted: function() {
				let completed = [];
				// true or falses for each objective (apart from the turn-in objective)
				completed.push(Player.quests.questProgress.troubledWaters4Progress > 1 && Dom.inventory.check(37, "consumable", 1) || Player.quests.questProgress.troubledWaters4Progress > 2);
				completed.push(Player.quests.questProgress.troubledWaters4Progress > 2);

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to <strong>Fisher Sharptooth</strong>.",
			levelRequirement: 5,
			questRequirements: ["Troubled Waters III (Eaglecrest Plains Fishing Tourǃǃ)", "tba"],

			rewards: {
				xp: 75,
				reputation: {
					eaglecrestCity: 30,
				},
			},

			removeItems: [
				{item: Items.fish[38]},
			],

			onQuestStart: function() {
				Player.quests.questProgress.troubledWaters4Progress = 1;
			}
		},
		{
			id: 15,
			quest: "Bee Careful ǃ ǃ",
			questArea: "eaglecrest",

			startName: "Farmer Eloise",
			startChat: [{
				text: `The bees won't stop swarming that flower forest~!`,
			},{
				text: `Maybe they're lost⁀˚`,
			},{
				text: `Could you try to lure a swarm back˚?`,
			},{
				text: `Try not to hurt the bees~`,
			},],

			finishName: "Farmer Eloise",
			finishChat: [{
				text: `Welcome back, bees˚!⁀!`,
			},],

			objectives: [
				"Lure a <b>Bee Swarm</b> from the Plains flower forest to the farm.",
				"Speak to <b>Farmer Eloise</b>.",
			],

			isCompleted: function() {
				let completed = [];

				// true or falses for each objective (apart from the turn-in objective)
				let objCompleted;
				if (!Player.quests.questProgress.beeCarefulFinished) {
					let beeSwarms = Game.enemies.filter(enemy => enemy.name === "Bee Swarm" && enemy.hostility === "hostile");
					let farmerEloise = Game.npcs.filter(npc => npc.name === "Farmer Eloise")[0];
					let nearest = Game.closest(beeSwarms, farmerEloise);
					objCompleted = (Game.distance(nearest, farmerEloise) < 300);
					if (completed) {
						Player.quests.questProgress.beeCarefulFinished = true;

						nearest.attackTargets[Game.hero.id].baseAggro = 0;
						nearest.attackTargets[Game.hero.id].aggro = 0;
						nearest.hostility = "neutral";
					}
				}
				else {
					objCompleted = true;
				}
				completed.push(objCompleted);

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to <b>Farmer Eloise</b> in the Eaglecrest Plains Farms.",
			levelRequirement: 9,
			questRequirements: ["Every Flower in My Garden"],
			// tbd reputation requirement

			rewards: {
				xp: 60,
				items: [
					{item: Items.currency[2], quantity: 4,},
				],
				reputation: {
					eaglecrestFarm: 100,
				},
			},
		},

		/*{
			id: 14,
			quest: "The Pyromancer's Shopping List",
			questArea: "eaglecrest",

			startName: "Peto the Pyromancer",
			startChat: [{
				text: `Hello there, stranger! Would you mind helping me with a a certain... <i>ahahaha</i>... a certain matter?`,
			},{
				text: `I need a number of specific reagents for my... uh... experiments and you seem like you'd be able to help.`,
			},{
				text: `A pyromancer's work is never done, but a bag of flour would certainly help speed it up. <i>hehe</i>`,
			},{
				text: `Could you retreive some from the nearby farm if you're willing?`,
			}],

			stepName1: "Farmer Scop",
			stepChat1: [{
				text: `That pyromancer's an odd fella. He loves his pies, but the rumours I've 'eard are bloomin' unsavoury.`
			},{
				text: `I don't want you on me land a second longer! Get one of 'em sacks of flour by the entrance, then get off with ye!`
			},],

			stepName2: "Peto the Pyromancer",
			stepChat2: [{
				text: `Oh goody! A bag of flour! This'll do nicely for my pyromancer experiments <i>hahaha</i>.`
			},{
				text: `If you're still willing, some eggs would go down a treat! You can nick them off the local chickens <i>hehe</i>.`
			},],

			stepName3: "Peto the Pyromancer",
			stepChat3: [{
				text: `Are those my eggs? Why, thank you!`
			},{
				text: `What do I need them for? Why, that's <i>ahaha</i>.. why, that would be <i>hahaha</i>... that would be none of your business!`
			},{
				text: `But if you're willing to fetch one final ingredient, I could do with some milk! That farm might be worth another try...`
			}],

			stepName4: "Farmer Scop",
			stepChat4: [{
				text: `I thought I told ya to get lost! We've got no cows here and besides... I'm not makin' any more pies for that Peto fella! Not after..... last time.`,
			},{
				text: `You city folk make me sick.`,
			},{
				text: `But if you're that desperate, I reckon that <b>Alchemist Tamtam</b> would sell you some milk. Now get off me land! I've nowt left for ye here!`
			},],

			stepName5: "Alchemist Tamtam",
			stepChat5: [{
				text: `Milk??<br><em>Tamtam's ears drop down.</em>`,
			},{
				text: `It's been a long time since someone's asked me for that...`,
			},{
				text: `I guess... we can brew some!!!`
			},{
				text: `Yesss... We'll need a <b>Katydid</b>, a piece of <b>Iron Ore</b>, a <b>Milkfish</b> and some <b>Lavender</b>.`
			},{
				text: `Oooonly thing is... I can't remember the order we need to add them to the cauldron in!`
			},{
				text: `You'll need to add the <b>Milkfish</b> first... After that, I guess there's only one way to find out!!`
			},],

			finishName: "Peto the Pyromancer",
			finishChat: [{
				text: `My ingredients!`,
			},{
				text: `Wait. Did I say 'ingredients'? Well I meant... <i>ahaha</i> my pyromancer potion ingredients! For a potion! <i>oh no.</i>.`,
			},{
				text: `A pie romancer's work is never done!... Wait... did I say pie romancer? <i>heh</i>.. Well now I've said too much....`
			},],

			objectives: [
				"Ask <b>Farmer Scop</b> where you can find some <b>flour</b>.",
				"Give <b>Peto the Pyromancer</b> some flour.",
				"Give <b>Peto the Pyromancer</b> three <b>eggs</b> from chickens.",
				"Ask <b>Farmer Scop</b> where you can find some <b>milk</b>.",
				"Ask <b>Alchemist Tamtam</b> for some milk.",
				"Add the four ingredients in the right order to brew some milk <i>(Milkfish is first!)</i>",
				"Give <b>Peto the Pyromancer</b> the milk.",
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
				completed.push(checkProgress(Dom.inventory.check(68, "item"), 6));
				completed.push(checkProgress(Dom.inventory.check(31, "item"), 6));

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to <b>Peto the Pyromancer</b> in Eaglecrest City.",
			levelRequirement: 7,
			questRequirements: ["Overdraft"],

			rewards: {
				xp: 100,
				items: [
					{item: Items.item[1]}, // mystery (get the helm the next day)
					{item: Items.currency[2], quantity: 2,},
				],
			},

			removeItems: [
				{item: Items.item[68], quantity: 6},
				{item: Items.item[31], quantity: 6},
			],
		},

		*/
		/*{
			id: 8,
			quest: "Troubled Waters II",
			questArea: "eaglecrest",

			startName: "Fisherman Guimtal",
			startChat: "So I've investigat'd the toads and it don't seem to have anything to do anything with them. Yah should talk to Fisherman Sharptooth, I think they know more.",

			finishName: "Fisherman Guimtal",
			finishChat: "",

			objectives: [
				"Speak to <strong>Fisherman Sharptooth</strong>.",
				"Get back to <strong>Fisherman Guimtal</strong>.",
				"Speak to <strong>Fisherman Guimtal</strong>.",
			],

			isHidden: function() {
				let hidden = [];

				if (Player.quests.questProgress.troubledWatersProgress === undefined)
				{
					Player.quests.questProgress.troubledWatersProgress = 0;
				}

				// true or falses for each objective (apart from the turn-in objective)
				hidden.push(false);
				hidden.push(Player.quests.questProgress.troubledWatersProgress < 1);
				hidden.push(false);

				return hidden;
			},

			isCompleted: function() {
				let completed = []; // contains true or false for all of the objectives, with the last element being if the quest is ready to complete

				// true or falses for each objective (apart from the turn-in objective)
				completed.push(checkProgress(Player.quests.questProgress.troubledWatersProgress, 10));

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "Speak to <strong>Fisherman Guimtal</strong>.",
			levelRequirement: 5,
			questRequirements: ["Troubled Waters"],

			rewards: {
				xp: 50,
				items: [
					{item: Items.currency[2], quantity: 5,},
				],
			},
		},*/
		/*{
			id: "tbd", // tbdddddddddddddddd
			quest: "Cat Warrior",
			questArea: "eaglecrest",

			startName: "tbd",
			startChat: "tbd.",

			finishName: "tbd",
			finishChat: "tbd.",

			objectives: [
				"Drink the <strong>cat potion</strong>.",
				"Speak to <strong>tbd</strong> in the <strong>Eaglecrest Elixirs Storerooms.</strong>",
				"Complete three laps of the obstacle course!", // hidden obj
				"Speak to <strong>Alchemist Tamtam</strong>.",
			],

			isCompleted: function() {
				let completed = [];

				let lapsCompleted = 0; //tbd
				completed.push(false);
				completed.push(checkProgress(lapsCompleted, 3));

				completed = checkFinished(completed);

				return completed;
			},

			howToStart: "tbd.",
			levelRequirement: 4,
			questRequirements: ["Potion Making II"],

			rewards: {
				xp: 50,
				items: [{}], // cat toy tbd
			},
		},*/
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
					{item: Items.sword[13],}, // the mop
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

					let array = Game.things.concat(Game.npcs); // array of things that cannot be touched

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
							Dom.inventory.removeById(item.id, item.type, 1, undefined, true); // remove the QUEST item
							// quest progress
							Game.villagers[i].tavernGoodsDelivered = true; // always the first NPC to be delivered to
							// chat
							Dom.chat.insert(Dom.chat.say(Game.villagers[i].name, Game.villagers[i].chat.receiveTavernGood));
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

			callQuestFinishOnAbandon: true,

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
