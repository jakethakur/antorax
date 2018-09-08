var Quests = {
	eaglecrestLoggingCamp: [
		{
			id: 0,
			quest: "To the Logging Camp",
			
			// redundant but will keep anyway
			startName: "Cart Driver",
			startChat: `That's it, we're here! I'm afraid you're going to have to walk to the <strong>Eaglecrest Logging Camp</strong> from here. If you walk down a bit to the west you should see the entrance to the camp.<br>You should probably buy a weapon on your way there. It looks like you have enough gold on you to do so. There's a good weaponsmith on your way to the camp, not far from here.`,
			
			finishName: "Marshall Teper",
			finishChat: `Welcome to the Eaglecrest Logging Camp, adventurer. It's useful to have you here. I hope your journey was fine.<br>Take this gold and pair of boots. They're provided by the King's Covenant to all new adventurers. Feel free to have a look around the camp and buy anything you want, but not for too long. We've got work to be done.`,
			
			objectives: [
				"Buy a weapon from a nearby weaponsmith.",
				"Speak to <strong>Marshall Teper</strong>.",
			],
			
			isCompleted: function() {
				let completed = []; // contains true or false for all of the objectives, with the last element being if the quest is ready to complete
				
				// true or falses for each objective (apart from the turn-in objective)
				completed.push(Dom.inventory.check(2, "sword") || Dom.inventory.check(2, "staff") || Dom.inventory.check(2, "bow"));
				
				completed = checkFinished(completed);
				
				return completed;
			},
			
			howToStart: "Speak to the Cart Driver.",
			levelRequirement: 1,
			questRequirements: [],
			
			rewards: {
				xp: 10,
				items: [
					Items.currency[2],
					Items.boots[2],
				],
				itemQuantities: [
					5,
					1,
				],
				reputation: {
					eaglecrestLoggingCamp: 6,
				},
			},
		},
		
		{
			id: 1,
			quest: "Learning from the Best",
			
			startName: "Mashall Teper",
			startChat: `You're going to need to learn how to fight if you're going to be able to help us gather some wood - there are goblins out there.<br>Go and see <strong>Combat Trainer Saral</strong>. She's more skilled in combat than anyone else here. She'll be able to teach you what you need to know.`,
			
			finishName: "Combat Trainer Saral",
			finishChat: `Why hello, ${Player.name}. I always love new blood in the Logging Camp. Now let's get started, shall we?`,
			
			objectives: [
				"Equip your weapon in the inventory.",
				"Speak to <strong>Combat Trainer Saral</strong>.",
			],
			
			isCompleted: function() {
				var completed = [];
				
				// true or falses for each objective (apart from the turn-in objective)
				completed.push(Player.inventory.weapon[0].type === "bow" || Player.inventory.weapon[0].type === "staff" || Player.inventory.weapon[0].type === "sword");
				
				var finished = true;
				for(var i = 0; i < completed.length; i++) {
					if(!completed[i]) {
						finished = false;
					}
				}
				
				completed.push(finished);
				
				return completed;
			},
			
			howToStart: "Speak to <strong>Marshall Teper</strong>.",
			levelRequirement: 1,
			questRequirements: ["To the Logging Camp"],
			
			rewards: {
				xp: 10,
				reputation: {
					eaglecrestLoggingCamp: 2,
				},
			},
		},
		
		{
			id: 2,
			quest: "Combat Training",
			
			startName: "Combat Trainer Saral",
			startChat: `${Player.name}, I'd like for you to deal some damage to this <strong>Training Dummy</strong>. 20 should suffice. <br>You can find out more about how you can attack in your <strong>adventure log</strong>.`,
			
			finishName: "Combat Trainer Saral",
			finishChat: `Well done. It's inspiring to watch a new adventurer learn their ways - I look forward to seeing more of you in the future. I imagine <strong>Marshall Teper</strong> would like for you to get to work with him now.`,
			
			objectives: [
				"Deal at least 20 damage to the <strong>Training Dummy</strong>.",
				"Speak to <strong>Combat Trainer Saral</strong>.",
			],
			
			isCompleted: function() {
				var completed = [];
				
				// true or falses for each objective (apart from the turn-in objective)
				completed.push(typeof Game.dummies !== "undefined" && Game.dummies[0].damageTaken >= 20); // quest must be finished in Eaglecrest Logging Camp, hence Game.dummies[0] is always the right dummy
				
				var finished = true;
				for(var i = 0; i < completed.length; i++) {
					if(!completed[i]) {
						finished = false;
					}
				}
				
				completed.push(finished);
				
				return completed;
			},
			
			howToStart: "Speak to <strong>Combat Trainer Saral</strong>.",
			levelRequirement: 1,
			questRequirements: ["Learning from the Best"],
			
			rewards: {
				xp: 20,
				reputation: {
					eaglecrestLoggingCamp: 2,
				},
			},
		},
		
		{
			id: 3,
			quest: "Retrieval of Logs",
			
			startName: "Marshall Teper",
			startChat: `You looked good enough at the training dummy to go out to <strong>The Nilbog</strong>. It's the camp of some goblins, but trust me - they're not much stronger than that dummy you just fought.<br>They recently invaded our camp in huge numbers, and managed to steal some logs of wood whilst we were fighting them off. Head east to <strong>The Nilbog</strong> and retrieve some wood from them, and return it to me.`,
			
			finishName: "Marshall Teper",
			finishChat: `Good. Now we need to make sure that a goblin attack like this won't happen again.`,
			
			objectives: [
				"Retrieve 4 logs from The Nilbog. <em>(press space when standing on one to pick it up)</em>",
				"Speak to <strong>Marshall Teper</strong>.",
			],
			
			isCompleted: function() {
				var completed = [];
				
				// true or falses for each objective (apart from the turn-in objective)
				completed.push(Dom.inventory.check(2, "misc", 4));
				
				var finished = true;
				for(var i = 0; i < completed.length; i++) {
					if(!completed[i]) {
						finished = false;
					}
				}
				
				completed.push(finished);
				
				return completed;
			},
			
			howToStart: "Speak to <strong>Marshall Teper</strong>.",
			levelRequirement: 1,
			questRequirements: ["Combat Training"],
			
			rewards: {
				xp: 30,
				reputation: {
					eaglecrestLoggingCamp: 4,
				},
			},
			
			removeItems: [
				Items.item[2], // logs
			],
			removeItemQuantity: [
				4,
			],
		},
		
		{
			id: 4,
			quest: "Making Yourself Useful",
			
			startName: "Marshall Teper",
			startChat: `There's lots going on around the logging camp at the moment, especially after the goblin attack. Speak to some people in the camp and see if there's anyone that could use your help.`,
			
			finishName: "Marshall Teper",
			finishChat: `You made quick work of that. I believe it is time for you to head to Eaglecrest soon, but first we need to get to the root of this goblin problem.`,
			
			objectives: [
				"Help 3 people around the Logging Camp.",
				"Speak to <strong>Marshall Teper</strong>.",
			],
			
			isCompleted: function() {
				var completed = [];
				
				// true or falses for each objective (apart from the turn-in objective)
				//TBD
				
				var finished = true;
				for(var i = 0; i < completed.length; i++) {
					if(!completed[i]) {
						finished = false;
					}
				}
				
				completed.push(finished);
				
				return completed;
			},
			
			howToStart: "Speak to <strong>Marshall Teper</strong>.",
			levelRequirement: 1,
			questRequirements: ["Retrieval of Logs"],
			
			rewards: {
				xp: 50,
				reputation: {
					eaglecrestLoggingCamp: 5,
				},
				// there should be a good item reward
			},
		},
		
		{
			id: 5,
			quest: "Stolen Mail",
			
			startName: "Eaglecrest Mailman",
			startChat: `Oh no - I was driving my mail cart through that boggy area to the east and came across a huge group of goblins! I had to abandon the cart and flee for my life, but I left a mail sack in the cart. Please, would you be able to try to find my missing mail sack?`,
			
			finishName: "Eaglecrest Mailman",
			finishChat: `Phew, I was so worried. It's a shame about the cart though...`,
			
			objectives: [
				"Find a mail sack inside the mail cart at the Nilbog.",
				"Speak to the <strong>Eaglecrest Mailman</strong>.",
			],
			
			isCompleted: function() {
				var completed = [];
				
				// true or falses for each objective (apart from the turn-in objective)
				completed.push(Dom.inventory.check(7, "quest"));
				
				var finished = true;
				for(var i = 0; i < completed.length; i++) {
					if(!completed[i]) {
						finished = false;
					}
				}
				
				completed.push(finished);
				
				return completed;
			},
			
			howToStart: "Speak to the <strong>Eaglecrest Mailman</strong>.",
			levelRequirement: 1,
			questRequirements: ["Retrieval of Logs"],
			
			rewards: {
				xp: 30,
				reputation: {
					//eaglecrestCity: 5,
				},
			},
			
			removeItems: [
				Items.item[7], // mail sack
			],
			removeItemQuantity: [
				1,
			],
		},
		
		/*{
			id: 2,
			quest: "A drink on us!",
			
			startName: "Gregor Goldenbrew",
			startChat: "I 'aven't seen you round 'ere before! Hehe, enjoy a drink by the hearth - free on us!",
			
			objectives: [
				"Take a sip from your wood-brewed beer around the hearth.",
			],
			
			howToStart: "Speak to Gregor Goldenbrew in the Treefeller's Tavern.",
			levelRequirement: 1,
			questRequirements: ["To the Logging Camp"],
			
			rewards: {
				xp: 25,
			},
			
			onQuestStart: function() {
				Dom.chat.insert("Gregor brews you an extra large beer. Try not to get too tipsy!", 100);
				// give the player a brew
			},
		},
		
		{
			id: 3, // tbc
			quest: "A Lost Fishing Rod",
			
			startName: "Fisherman Tobenam",
			startChat: "You! You look like you've been to see the goblins! One of my fav'rite fishing rods has been stolen from me, and I think it was one of those goblins, heheh! Would you be able to head down to them and see if you can find it? I'll happily give you a couple o' lessons on fishing if you're able to get your hands on it.",
			
			finishName: "Fisherman Tobenam",
			finishChat: "You found it! Heheh, let me clean it for you. You can keep it for your fishing lessons with me. I've plenty of other rods I can be using. Now, let me teach you... the way of the water! Heheheh.",
			
			objectives: [
				"Find <strong>Fisherman Tobenam's</strong> fishing rod. He thinks it has been taken by a goblin.",
				"Return to <strong>Fisherman Tobenam</strong>.",
			],
			
			isCompleted: function() {
				var completed = [];
				
				// true or falses for each objective (apart from the turn-in objective)
				completed.push((Dom.inventory.check(6, "quest")) ? true : false);
				
				var finished = true;
				for(var i = 0; i < completed.length; i++) {
					if(!completed[i]) {
						finished = false;
					}
				}
				
				completed.push(finished);
				
				return completed;
			},
			
			howToStart: "Speak to <strong>Fisherman Tobenam</strong> at the Fisher's Valley.",
			levelRequirement: 2,
			questRequirements: ["Retrieval of Logs"],
			
			rewards: {
				xp: 30,
				items: [
					Items.rod[2],
				],
				itemQuantities: [
					1,
				],
			},
			
			removeItems: [
				Items.item[6], // Tobenam's Lost Fishing Rod (cleaned version given in its place)
			],
			removeItemQuantity: [
				1,
			],
		},
		
		{
			id: 4, // tbc
			quest: "Learning to Fish I",
			
			startName: "Fisherman Tobenam",
			startChat: "tbd",
			
			finishName: "Fisherman Tobenam",
			finishChat: "tbd",
			
			objectives: [
				"Fish something up!",
				"Speak to <strong>Fisherman Tobenam</strong>.",
			],
			
			isCompleted: function() {
				var completed = [];
				
				// true or falses for each objective (apart from the turn-in objective)
				//completed.push((Player.inventory.weapon.length > 1) ? true : false); tbd
				
				var finished = true;
				for(var i = 0; i < completed.length; i++) {
					if(!completed[i]) {
						finished = false;
					}
				}
				
				completed.push(finished);
				
				return completed;
			},
			
			howToStart: "Speak to <strong>Fisherman Tobenam</strong>.",
			levelRequirement: 2,
			questRequirements: ["A Lost Fishing Rod"],
			
			rewards: {
				xp: 30,
			},
		},
		
		{
			id: 5,
			quest: "Learning to Fish II",
			
			startName: "Fisherman Tobenam",
			startChat: "tbd",
			
			finishName: "Fisherman Tobenam",
			finishChat: "tbd",
			
			objectives: [
				"Buy a can of worms from Fisherman Tobenam and use it.",
				"Catch your first fish!",
				"Speak to <strong>Fisherman Tobenam</strong>.",
			],
			
			isCompleted: function() {
				var completed = [];
				
				// true or falses for each objective (apart from the turn-in objective)
				//completed.push((Player.inventory.weapon.length > 1) ? true : false); tbd
				
				var finished = true;
				for(var i = 0; i < completed.length; i++) {
					if(!completed[i]) {
						finished = false;
					}
				}
				
				completed.push(finished);
				
				return completed;
			},
			
			howToStart: "Speak to <strong>Fisherman Tobenam</strong>.",
			levelRequirement: 2,
			questRequirements: ["Learning to Fish I"],
			
			rewards: {
				xp: 30,
			},
		},
		
		{
			id: 6,
			quest: "Learning to Fish III",
			
			startName: "Fisherman Tobenam",
			startChat: "tbd",
			
			finishName: "Fisherman Tobenam",
			finishChat: "tbd",
			
			objectives: [
				"Level your base fishing skill to 10.",
				"Speak to <strong>Fisherman Tobenam</strong>.",
			],
			
			isCompleted: function() {
				var completed = [];
				
				// true or falses for each objective (apart from the turn-in objective)
				//completed.push((Player.inventory.weapon.length > 1) ? true : false); tbd
				
				var finished = true;
				for(var i = 0; i < completed.length; i++) {
					if(!completed[i]) {
						finished = false;
					}
				}
				
				completed.push(finished);
				
				return completed;
			},
			
			howToStart: "Speak to <strong>Fisherman Tobenam</strong>.",
			levelRequirement: 2,
			questRequirements: ["Learning to Fish II"],
			
			rewards: {
				xp: 50,
			},
		},*/
	],
};

// check if all of the contents of the array are true
// adds the last value to the completed array
function checkFinished(completed) {
	var finished = true;
	for(var i = 0; i < completed.length; i++) {
		if(!completed[i]) {
			finished = false;
		}
	}
	completed.push(finished);
	return completed;
}