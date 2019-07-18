// Adventurer's Log
var Adventure = {

	// questing areas

	eaglecrestLoggingCamp: {
		html: `<div id="eaglecrestLoggingCampAL" class="adventure">
			Eaglecrest Logging Camp<br>
			<span class="adventureContent">Help the logging camp defend against goblins.</span>
		</div>`,
		condition: function () {
			return !Player.quests.completedQuestArray.includes("The Goblin King");
		},
	},

	// events

	samhain: {
		html: `<div id="samhainAL" class="adventure">
			Samhain Event<br>
			<span class="adventureContent">Kill stronger enemies during a blood moon and buy limited edition items.</span>
		</div>`,
		condition: function () {
			return Event.event === "Samhain";
		},
	},
	christmas: {
		html: `<div id="christmasAL" class="adventure">
			Christmas Event<br>
			<span class="adventureContent">Celebrate Christmas with the logging camp.</span>
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
	
	instructions: {
		html: `<div id="instructionsAL" class="adventure">
			<span id="instructionsTitle" style="cursor: pointer;" onclick="Dom.instructions.index();"><u>Instructions</u></span><br>
			<span class="adventureContent">View information to help you in your journey.</span>
		</div>`,
		condition: function () {
			return true;
		},
	},
};

var Instructions = [
	{
		chapterTitle: "Chapter I: Getting Started",
		pages: [
			`<b>The Mighty Zararanath</b>: Welcome to the mystical kingdom of Antorax, ${Player.name}!`,
			`<em><b>The Mighty Zararanath</b> is speaking to you through a telepathic link. Don't worry, it doesn't hurt.</em>`,
			`<b>The Mighty Zararanath</b>: You can use the <b>w</b>, <b>a</b>, <b>s</b>, and <b>d</b> keys to move around.`,
			`<b>The Mighty Zararanath</b>: Start your first quest by speaking to the <b>Cart Driver</b>.`,
		],
		alternativePages: function () {
			Dom.chat.insertSequence([
				`<b>The Mighty Zararanath</b>: Welcome to the mystical kingdom of Antorax, ${Player.name}!`,
				`<b>The Mighty Zararanath</b>: Oh. I've spoken to you before.`,
			], undefined, function () {
				Dom.alert.target = function () {
					Dom.chat.insert(`<b>The Mighty Zararanath</b>: Good luck on your travels.`, 500);
					document.getElementById("tutorialOn").checked = true;
					document.getElementById("tutorialOn").onclick();
					Player.unlockedInstructions.push(Instructions[0].chapterTitle);
					Dom.quests.possible();
				}
				Dom.alert.targetNo = function () {
					Dom.chat.insertSequence([
						`<b>The Mighty Zararanath</b>: You can use the <b>w</b>, <b>a</b>, <b>s</b>, and <b>d</b> keys to move around.`,
						`<b>The Mighty Zararanath</b>: Start your first quest by speaking to the <b>Cart Driver</b>. Press the <strong>space</strong> key whilst standing near him to talk to him.`,
					], undefined, function () {
						Player.unlockedInstructions.push(Instructions[0].chapterTitle);
						Dom.quests.possible();
					});
					Dom.alert.targetNo = undefined;
				}
				Dom.alert.page("Do you want to skip Zararanath's tutorial? You can always re-enable it in settings.", 2);
			});
		}
	},
	{
        chapterTitle: "Chapter II: Quests and Merchants",
        pages: [
            `<b>The Mighty Zararanath</b>: Quests are one of the main methods of progression for adventurers like you.`,
            `<b>The Mighty Zararanath</b>: You can see information about your current and possible quests in your quest log, by clicking on the <strong>green bookmark</strong> at the bottom of your screen.`,
            `<b>The Mighty Zararanath</b>: For this quest, you have to buy your first weapon from a merchant using <strong>3 Gold</strong>.`,
            `<b>The Mighty Zararanath</b>: Merchants can be found all around Antorax, from which you can buy all manner of items!`,
        ],
    },
    {
        chapterTitle: "Chapter III: Advanced Navigation",
        pages: [
            `<b>The Mighty Zararanath</b>: Nicely done! Keep journeying to the Logging Camp - you don't have far left to go!`,
            `<b>The Mighty Zararanath</b>: You can tell you're close to a settlement by the banners put up nearby. With civilisation comes banners and capitalism!`,
            `<b>The Mighty Zararanath</b>: And don't worry, the water doesn't hurt.`
        ],
    },
    {
        chapterTitle: "Chapter IV: Civilisation",
        pages: [
            `<b>The Mighty Zararanath</b>: Welcome to the Eaglecrest Logging Camp!`,
            `<b>The Mighty Zararanath</b>: <strong>Marshall Teper</strong>, your quest master for this area, is just north from here.`,
            `<b>The Mighty Zararanath</b>: Complete your quest by speaking to him, and collect a new quest!`,
            `<b>The Mighty Zararanath</b>: Oh. And if you ever forget what someone said to you, you can always click the <strong>blue bookmark</strong> to open your chat log.`
        ],
    },
    {
        chapterTitle: "Chapter V: Inventory",
        pages: [
            `<b>The Mighty Zararanath</b>: Congratulations on completing your first quest! You even got a special reward for doing so - some <strong>Logging Boots</strong>.`,
            `<b>The Mighty Zararanath</b>: You now need to access your inventory to equip these items! Click the <strong>red bookmark</strong> to do so.`,
            `<b>The Mighty Zararanath</b>: Try dragging your new weapon and boots onto their slots at the left to equip them.`,
            `<b>The Mighty Zararanath</b>: Similarly, you can unequip them by dragging them back to the item slots at the right.`
        ],
    },
];
