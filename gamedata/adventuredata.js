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
			Samhain Event<br>
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
			}else if(Player.quests.completedQuestArray.includes("Learning to Fish I")){
				return "Learning to Fish II";
			}else if(Player.quests.completedQuestArray.includes("A Lost Fishing Rod")){
				return "Learning to Fish I";
			}else{
				return "A Lost Fishing Rod";
			}
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
			`<b>The Mighty Zararanath:</b> Welcome to the mystical kingdom of Antorax, ${Player.name}!`,
			`<em>The Mighty Zararanath is speaking to you through a telepathic link. Don't worry, it doesn't hurt.</em>`,
			`<b>The Mighty Zararanath:</b> You can use the <b>w</b>, <b>a</b>, <b>s</b>, and <b>d</b> keys to move around.`,
			`<b>The Mighty Zararanath:</b> Start your first quest by speaking to the <b>Cart Driver</b>.`,
		],
	},
	{
		chapterTitle: "Chapter II: Quests and Merchants",
		pages: [
			"These people, if they happen to have to do something, will sometimes ask you to do them a favour. They seem to be very trusting in you, which is odd, since they have never technically met you before… You can check your active quests in the tab marked with an exclamation mark (your Quest Log), as well as your progress in those quests and who you received the quest from. Doing quests will bestow upon you rich rewards - or some useless garbage that you’ll never use! You can also decline quests and accept them later (or not at all!), but you may not be able to progress as quickly if you do so.",
			"Merchants of all types appear all over Antorax, and from them you can purchase all manner of items. Just make sure you have the right amount of gold - these sellers are stubborn and won’t budge on their prices! It’s almost as if their prices had been pre-programmed by some higher power…",
		],
	},
	{
		chapterTitle: "Chapter III: Advanced Navigation",
		pages: [
			"Referring to before, where there’s civilisation, there’s not only buildings but capitalism too! It appears that the ruling kingdoms of Antorax have felt the need to mark their territory by placing banners all over the place, kind of like how animals wee on their favourite tree. As you approach their town, the number of banners you can see will increase, leading up to a gateway that you can go through.",
			"Water, unlike most other games, doesn’t actually kill you - it just slows you down a bit. To be honest, it's just easier to find a bridge. Also, you can walk on lily pads! Somehow…",
			"When you wish to enter a new area, touch the edge of the map or anything else that leads to a new area, such as a door, and you will be magically transported to a new place. You’d think that the developers would have cared enough to make the whole world one open space but apparently they couldn’t be bothered. But hey, what do I know, I’m just a writer!",
		],
	},
	{
		chapterTitle: "Chapter IV: Civilisation",
		pages: [
			"As with any place on any earth, where there’s civilisation, there’s buildings. Remarkably, you can enter buildings through a mystical entrance commoners call ‘doors’. If you can’t enter, this simply means that the poor occupants didn’t want any random adventurers invading their privacy and locked their door. Even NPCs need their quiet time, y’know.",
			"Clicking the blue bookmark with a speech bubble on it takes you to the chat tab. If anyone decides to speak to you, or anything important happens, you will see what they are trying to say in the chat tab. To read it, just move your eyes from left to right and read the letters one by one, then put them together. Come on, did I really need to tell you that? If you see it flashing red, something important has happened! Click it! You know you want to!",
			"Clicking the grey bookmark with the gear will take you to the settings. Here is where you can adjust different things about the game, such as music, what information to view, particles and weather?",
		],
	},
	{
		chapterTitle: "Chapter V: Inventory",
		pages: [
			"What kind of half-baked RPG would this be without limited inventory space. After a three minute debate, the devs decided to limit your space because otherwise the whole game would be pointless. To view your inventory click the red bookmark with a sword on it. You can increase your inventory capacity by placing a bag in the last slot of your hotbar so you can carry around even more useless gear with sentimental value.",
			"Aside from miscellaneous items, you have to also carry around your armour and weapons. Armour is shown on the left of the main inventory in four boxes; drag a piece of armour from the main inventory into its slot to equip it. Your weapon is the lonely box above the armour and it works exactly the same as the armour boxes. Your armour reduces the damage you take, your weapon increases the damage you deal and different gear has different properties. This could be poison, more range, less cooldown or even more coolness (actually, no). To view your character’s total stats, hover over your player’s head above your weapon.",
		],
	},
		/*{
			title: "Reputation",
			text: "Kind of like a bad girlfriend, the more good stuff you do for an area or their allies, the more the people there will like you. However, also like a bad girlfriend, the more bad stuff you do, or the more you help their enemies, the less they will be willing to forgive you and will eventually come to hate you and never want to see your stupid face ever again, you naughty person! To see a convenient list of your current reputations, click on the purple bookmark with some shaking hands on it.",
		},*/
];
