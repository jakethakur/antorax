var quests = {
	eaglecrestLoggingCamp: [
		{
			quest: "To the Logging Camp",
			name: "Cart Driver",
			chat: "Well. When did that rock get there? I guess that's another cart unsalvageable. I'm afraid you're going to have to walk to the <strong>Eaglecrest Logging Camp</strong> from here. If you walk down a bit to the west you should see the entrance to the camp.<br>Your weapon broke in the crash? Gah, that always happens! Uh, I mean, how unlucky! Take this <strong>3 gold</strong> and you can buy yourself a new one, I guess. There's a good weaponsmith not far from here.",
			
			objectives: [
				"Buy a weapon from a nearby weaponsmith.",
				"Speak to <strong>Marshall Teper</strong> at the Eaglecrest Logging Camp.",
			],
			
			howToStart: "Speak to the Cart Driver.",
			levelRequirement: 1,
			//questRequirement: "address to quest here",
			
			rewards: {
				gold: 5,
				xp: 10,
			},
			
			onQuestStart: function() {
				Dom.chat.insert("The cart driver fumbles around in his wallet to give you 3 golden ingots. You can spend them at a merchant to buy a new weapon.", 100);
				Player.gold += 3;
				Dom.inventory.updateGold();
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