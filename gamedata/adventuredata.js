// Adventurer's Log
var Adventure = {

	// questing areas

	eaglecrestLoggingCamp: {
		html: `<div id="eaglecrestLoggingCampAL" class="adventure">
			Eaglecrest Logging Camp<br>
			<span class="adventureContent">Help the Logging Camp defend against goblins.</span>
		</div>`,
		condition: function () {
			return !Player.quests.completedQuestArray.includes("The Goblin King");
		},
	},

	// events

	samhain: {
		html: `<div id="samhainAL" class="adventure">
			Samhain Event<br>
			<span class="adventureContent">Kill stronger enemies and special bosses during a blood moon to get limited edition items.</span>
		</div>`,
		condition: function () {
			return Event.event === "Samhain";
		},
	},
	christmas: {
		html: `<div id="christmasAL" class="adventure">
			Christmas Event<br>
			<span class="adventureContent">Celebrate Christmas with the Logging Camp.</span>
		</div>`,
		condition: function () {
			return Event.event === "Christmas";
		},
	},

	// external pages

	archaeology: {
		html: `<div id="archaeologyAL" class="adventure">
			<a href="./archaeology/index.html" target="_blank">Archaeology</a><br>
			<span class="adventureContent">Uncover and collect weapons and armour.</span>
		</div>`,
		condition: function () {
			return true;
		},
	},
	fishersLog: {
		html: `<div id="fishAL" class="adventure">
			<a href="./fish/index.html" target="_blank">Fisher's Log</a><br>
			<span class="adventureContent">View the longest fish you have caught.</span>
		</div>`,
		condition: function () {
			return Player.quests.completedQuestArray.includes("Learning to Fish III");
		},
	},
	fishingQuests: {
		html: `<div id="fishAL" class="adventure">
			Learning to Fish<br>
			<span class="adventureContent">Complete the quest: SPECIAL.</span>
		</div>`,
		condition: function () {
			return !Player.quests.completedQuestArray.includes("Learning to Fish III") && Player.quests.completedQuestArray.includes("Retrieval of Logs");
		},
		special: function () {
			if(Player.quests.completedQuestArray.includes("Learning to Fish II")){
				return "Learning to Fish III";
			}
			else if(Player.quests.completedQuestArray.includes("Learning to Fish I")){
				return "Learning to Fish II";
			}
			else if(Player.quests.completedQuestArray.includes("A Lost Fishing Rod")){
				return "Learning to Fish I";
			}
			else{
				return "A Lost Fishing Rod";
			}
		},
	},

	tavernJobs: {
		html: `<div id="tavernAL" class="adventure">
			Tavern Jobs<br>
			<span class="adventureContent">Earn gold by completing jobs at a nearby tavern.</span>
		</div>`,
		condition: function () {
			return Player.quests.completedQuestArray.includes("To the Logging Camp");
		},
	},
};

const Tutorial = [
	{
		chapter: 0, // called upon game starting
		func: function () {
			Dom.alert.page("Welcome to Antorax!<br><br>Use the <b>WSAD</b> keys to move.", 0);
		},
		altFunc: function () {
			Dom.alert.page("Do you want to skip the tutorial? You can always re-enable it in settings.", 2, undefined, undefined, {
				target: function () {
					Dom.chat.insert(`Good luck on your travels!`, 500);
					document.getElementById("tutorialOn").checked = true;
					document.getElementById("tutorialOn").onclick();
					// allow player to move again
					Dom.instructions.decidingToSkip = false;
					Game.hero.cleanse("Tutorial", "title");
				},
				targetNo: function () {
					// same as func
					Tutorial[0].func();
					// allow player to move again
					Dom.instructions.decidingToSkip = false;
					Game.hero.cleanse("Tutorial", "title");
				},
			});

			Dom.instructions.decidingToSkip = true; // means player won't be able to move when Game inits (given the "Tutorial" status effect)
		},
	},
	{
		chapter: 1, // called a little after player moving
		func: function () {
			if (typeof Dom.currentNPC.name === "undefined") {
				Dom.alert.page("Great!<br><br>The <b>Cart Driver</b> wants to give you a quest. Press the <b>Spacebar</b> whilst you are touching them.", 0);
			}
		},
	},
	{
		chapter: 2, // called upon player accepting first quest
		func: function () {
			Dom.instructions.unlockTab("quests");
			Dom.expand('activeQuestBox');

			if (localStorage.getItem("accept") !== "true") {
				Game.statusEffects.stun({
					target: Game.hero,
					effectTitle: "Tutorial",
					effectDescription: "Making tricky decisions...",
					hidden: true,
				});
				Dom.alert.page("We use local storage to save your progress - is that ok?", 2, undefined, "game", {
					target: function () {
						Dom.elements.acceptOn.checked = true;
						Dom.settings.acceptOn();
						Game.hero.cleanse("Tutorial", "title");
					},
					targetNo: function () {
						Game.hero.cleanse("Tutorial", "title");
					},
				});
			}
		},
	},
	{
		chapter: 3, // called upon player walking towards weaponsmith
		func: function () {
			Dom.alert.page("You need to buy a weapon - walk over to the <b>Weaponsmith</b> and press <b>Space</b> to buy a weapon from them.", 0);
		},
	},
	{
		chapter: 4, // called a little after player buying weapon
		func: function () {
			Dom.alert.page("You look well equipped!<br><br>To finish your quest, follow the <b>Purple banners</b> to reach the Logging Camp.", 0);
		},
	},
	{
		chapter: 5, // called upon player reaching logging camp
		func: function () {
			Dom.alert.page("Welcome to the Logging Camp!<br><br>Speak to <b>Marshall Teper</b> who is just <b>north</b> of here.", 0);
		},
	},
	{
		chapter: 6, // called upon player completing first quest
		func: function () {
			Dom.alert.page("Congratulations on completing your first quest!<br><br>There are always more quests to complete - speak to <b>Marshall Teper</b> again to see what is next.", 0);
			Game.setTimeout(function () {
				if (typeof Dom.currentNPC.name === "undefined" && !Player.quests.activeQuestArray.includes("Learning from the Best") && !Player.quests.completedQuestArray.includes("Learning from the Best")) {
					// tut tut tut they haven't started the next quest yet
					Dom.alert.page("Speak to <b>Marshall Teper</b> again to start your next quest.", 0);
				}
			}, 10000);
		},
	},
	{
		chapter: 7, // called upon player starting second quest
		func: function () {
			Dom.instructions.unlockTab("inventory");
			Dom.alert.page("Click on the <b>Red Bookmark</b> at the <b>bottom-left</b> of your screen to open your inventory and equip your items!", 0);
		},
	},
	{
		chapter: 8, // called after equipping items
		func: function () {
			Dom.alert.page("Great!<br><br>If you ever forget what you need to do for a quest, click on the <b>Green Bookmark</b> at the <b>bottom-left</b>.", 0);
		},
	},
	{
		chapter: 9, // called after finishing second quest
		func: function () {
			Game.setTimeout(function () {
				let npc = Game.npcs.find(npc => npc.name === "Combat Trainer Saral");
				Dom.quest.start(Quests.eaglecrestLoggingCamp[2], npc);
			}, 100);
		},
	},
	{
		chapter: 10, // called upon starting third quest
		func: function () {
			switch (Player.class) {
				case "a":
					Dom.alert.page("Press your <b>Left Mouse Button</b> to attack.<br><br>When you let go, an arrow will be shot somewhere in the <b>red circle</b>.<br><br><b>Hold down</b> your Left Mouse Button to increase your accuracy!", 0);
					break;
				case "m":
					Dom.alert.page("Press your <b>Left Mouse Button</b> to attack something near you.<br><br>The longer you hold it down, the more damage your attack will do!", 0);
					break;
				case "k":
					Dom.alert.page("Click your <b>Left Mouse Button</b> to attack something.<br><br>You can only attack enemies close to you!", 0);
					break;
			}
		},
	},
	{
		chapter: 11, // called after finishing third quest
		func: function () {
			Dom.alert.page("Looks like you're ready to venture out and fight some enemies!<br><br>To see what quests are available to start next, click on the <br><b>Green Bookmark</b> and look at the <b>Possible Quests</b> section.", 0);
			Dom.expand('possibleQuestBox');
		},
	},
	{
		chapter: 12, // called a little after entering the nilbog
		func: function () {
			Dom.alert.page("Press your <b>Spacebar</b> whilst standing on a log to pick it up.<br><br>You can't move whilst you're picking one up.", 0);
		},
	},
	{
		chapter: 13, // called upon player finishing logs quest
		func: function () {
			Game.setTimeout(function () {
				Dom.alert.page("You got a <b>bag</b> from that quest!<br><br>Move it to your <b>last inventory slot</b> to increase your inventory size.", 0);
			}, 1000);
			Dom.instructions.unlockTab("reputation");
		},
	},
	{
		chapter: 14, // called upon inventory filling up
		branch: true,
		func: function () {
			Dom.alert.page("Your inventory is full!<br><br> Open up your inventory and drag out an item to discard it.", 0);
		},
	},
	{
		chapter: 15, // called upon killing an enemy
		branch: true,
		func: function () {
			Dom.alert.page("Nice shot!<br><br>Press your <b>Spacebar</b> on the dead goblin to take some loot!", 0);
		},
	},
];
