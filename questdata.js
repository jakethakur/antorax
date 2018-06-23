var quests = {
	eaglecrestLoggingCamp: [
		{
			// id: 0
			quest: "To the Logging Camp",
			
			startName: "Cart Driver",
			startChat: "Well. When did that rock get there? I guess that's another cart unsalvageable. I'm afraid you're going to have to walk to the <strong>Eaglecrest Logging Camp</strong> from here. If you walk down a bit to the west you should see the entrance to the camp.<br>Your weapon broke in the crash? Gah, that always happens! Uh, I mean, how unlucky! Take this <strong>3 gold</strong> and you can buy yourself a new one, I guess. There's a good weaponsmith not far from here.",
			
			finishName: "Marshall Teper",
			finishChat: "Welcome to the Eaglecrest Logging Camp, adventurer. It's useful to have you here. I hope your journey was fine.<br>Take this gold and pair of boots. They're provided by the King's Covenant to all new adventurers. Feel free to have a look around the camp and buy anything you want, but not for too long. We've got work to be done.",
			
			objectives: [
				"Buy a weapon from a nearby weaponsmith.",
				"Speak to <strong>Marshall Teper</strong> at the Eaglecrest Logging Camp.",
			],
			
			/*conditions: [
				Player.inventory.weapon.length > 1,
			],*/
			
			isCompleted: function() {
				var completed = []; // contains true or false for all of the objectives, with the last element being if the quest is ready to complete
				
				// true or falses for each objective (apart from the turn-in objective)
				
				for(var i = 0; i < Player.inventory.items.length; i++){
					if(Player.inventory.items[i].type == "sword" || Player.inventory.items[i].type == "staff" || Player.inventory.items[i].type == "bow"){
						completed.push(true);
						break;
					}
				}
				
				var finished = true;
				for(var i = 0; i < completed.length; i++) {
					if(!completed[i]) {
						finished = false;
					}
				}
				
				completed.push(finished);
				
				return completed;
			},
			
			howToStart: "Speak to the Cart Driver.",
			levelRequirement: 1,
			//questRequirement: "address to quest here",
			
			rewards: {
				gold: 5,
				xp: 10,
				items: [
					items.boots[2],
				],
				reputation: {
					eaglecrestLoggingCamp: 6,
				},
			},
			
			onQuestStart: function() {
				Dom.chat.insert("The cart driver fumbles around in his wallet to give you 3 golden ingots. You can spend them at a merchant to buy a new weapon.", 100);
				Player.gold += 3;
				Dom.inventory.updateGold();
			},
		},
		
		{
			// id: 1
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
				var completed = []; // contains true or false for all of the objectives, with the last element being if the quest is ready to complete
				
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
			questRequirement: "quests.eaglecrestLoggingCamp[0]", // doesn't work - tbd
			
			rewards: {
				xp: 10,
				reputation: {
					eaglecrestLoggingCamp: 2,
				},
			},
		},
		
		{
			quest: "A drink on us!",
			name: "Gregor Goldenbrew",
			chat: "I 'aven't seen you round 'ere before! Hehe, enjoy a drink by the hearth - free on us!",
			
			objectives: [
				"Take a sip from your wood-brewed beer around the hearth.",
			],
			
			howToStart: "Speak to Gregor Goldenbrew in the Treefeller's Tavern.",
			levelRequirement: 1,
			
			rewards: {
				xp: 25,
			},
			
			onQuestStart: function() {
				Dom.chat.insert("Gregor brews you an extra large beer. Try not to get too tipsy!", 100);
				// give the player a brew
			},
		},
	],
}