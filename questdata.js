var Quests = {
	eaglecrestLoggingCamp: [
		{
			id: 0,
			quest: "To the Logging Camp",
			
			// redundant but will keep anyway
			startName: "Cart Driver",
			startChat: "That's it, we're here! I'm afraid you're going to have to walk to the <strong>Eaglecrest Logging Camp</strong> from here. If you walk down a bit to the west you should see the entrance to the camp.<br>You should probably buy a weapon on your way there. It looks like you have enough gold on you to do so. There's a good weaponsmith on your way to the camp, not far from here.",
			
			finishName: "Marshall Teper",
			finishChat: "Welcome to the Eaglecrest Logging Camp, adventurer. It's useful to have you here. I hope your journey was fine.<br>Take this gold and pair of boots. They're provided by the King's Covenant to all new adventurers. Feel free to have a look around the camp and buy anything you want, but not for too long. We've got work to be done.",
			
			objectives: [
				"Buy a weapon from a nearby weaponsmith.",
				"Speak to <strong>Marshall Teper</strong> at the Eaglecrest Logging Camp.",
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
			
			onQuestStart: function() {
				Dom.chat.insert("The cart driver fumbles around in his wallet to give you 3 golden ingots. You can spend them at a merchant to buy a new weapon.", 100); // perhaps move to chat object in quest start NPC
			},
		},
		
		{
			id: 1,
			quest: "Learning from the Best",
			
			startName: "Mashall Teper",
			startChat: "You're going to need to learn how to fight if you're going to be able to help us gather some wood - there are goblins out there in the forest.<br>Go and see <strong>Overseer Saral</strong>. She's more skilled in combat than anyone else here. She'll be able to teach you what you need to know know.",
			
			finishName: "Overseer Saral",
			finishChat: "tbd",
			
			objectives: [
				"Equip your weapon in the inventory.",
				"Speak to <strong>Overseer Saral</strong> at the Eaglecrest Logging Camp.",
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
			
			howToStart: "Speak to <strong>Marshall Teper</strong> at the Eaglecrest Logging Camp.",
			levelRequirement: 1,
			questRequirement: "To the Logging Camp", // doesn't work - tbd
			
			rewards: {
				xp: 10,
				reputation: {
					eaglecrestLoggingCamp: 2,
				},
			},
		},
		
		{
			id: 2,
			quest: "A drink on us!",
			
			startName: "Gregor Goldenbrew",
			startChat: "I 'aven't seen you round 'ere before! Hehe, enjoy a drink by the hearth - free on us!",
			
			objectives: [
				"Take a sip from your wood-brewed beer around the hearth.",
			],
			
			howToStart: "Speak to Gregor Goldenbrew in the Treefeller's Tavern.",
			levelRequirement: 1,
			questRequirement: "To the Logging Camp", // doesn't work - tbd
			
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
			startChat: "tbd",
			
			finishName: "Fisherman Tobenam",
			finishChat: "tbd",
			
			objectives: [
				"Find <strong>Fisherman Tobenam's</strong> fishing rod. They think it has been taken by a goblin.",
				"Return to <strong>Fisherman Tobenam</strong> at the Fisher's Valley.",
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
			
			howToStart: "Speak to <strong>Fisherman Tobenam</strong> at the Fisher's Valley.",
			levelRequirement: 2,
			questRequirement: "To the Logging Camp", // doesn't work - tbd
			
			rewards: {
				xp: 50,
			},
		},
		
		{
			id: 4, // tbc
			quest: "Learning to Fish I",
			
			startName: "Fisherman Tobenam",
			startChat: "tbd",
			
			finishName: "Fisherman Tobenam",
			finishChat: "tbd",
			
			objectives: [
				"Buy a fishing rod from Fisherman Tobenam and equip it.",
				"Fish something up!",
				"Return to <strong>Fisherman Tobenam</strong> at the Fisher's Valley.",
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
			
			howToStart: "Speak to <strong>Fisherman Tobenam</strong> at the Fisher's Valley.",
			levelRequirement: 2,
			questRequirement: "To the Logging Camp", // doesn't work - tbd
			
			rewards: {
				xp: 50,
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
				"Return to <strong>Fisherman Tobenam</strong> at the Fisher's Valley.",
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
			
			howToStart: "Speak to <strong>Fisherman Tobenam</strong> at the Fisher's Valley.",
			levelRequirement: 2,
			questRequirement: "Learning to Fish I", // doesn't work - tbd
			
			rewards: {
				xp: 50,
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
				"Return to <strong>Fisherman Tobenam</strong> at the Fisher's Valley.",
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
			
			howToStart: "Speak to <strong>Fisherman Tobenam</strong> at the Fisher's Valley.",
			levelRequirement: 2,
			questRequirement: "Learning to Fish II", // doesn't work - tbd
			
			rewards: {
				xp: 100,
			},
		},
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