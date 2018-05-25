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
			
			rewards: {
			gold: 5,
			xp: 10,
			},
			
			onQuestStart: function() {
				chat.insert("The cart driver fumbles around in his wallet to give you 3 golden ingots. You can spend them at a merchant to buy a new weapon.", 100);
				Game.hero.gold += 3;
				Game.dom.updateGold();
			},
		},
	],
}