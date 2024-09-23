"use strict";

// go to class select if the user's class has not been selected yet for this session
// playerClass is set in savedata
if (playerClass === null) {
	window.location.replace("./selection/index.html");
}

window.onfocus = function () {
	Dom.focus = true;
}

window.onblur = function () {
	Dom.focus = false;
}

let Dom = {
	focus: true,
	elements: {
		acceptOn: document.getElementById("acceptOn"),
		achievement: document.getElementById("achievement"),
		achievementDescription: document.getElementById("achievementDescription"),
		achievementImg: document.getElementById("achievementImg"),
		achievementName: document.getElementById("achievementName"),
		achievementPoints: document.getElementById("achievementPoints"),
		activeAbility: document.getElementById("activeAbility"),
		activeQuestBox: document.getElementById("activeQuestBox"),
		adventurePage: document.getElementById("adventurePage"),
		adventureWrapper: document.getElementById("adventureWrapper"),
		aggroOn: document.getElementById("aggroOn"),
		bag: document.getElementById("bag"),
		bagText: document.getElementById("bagText"),
		bankPage: document.getElementById("bankPage"),
		bankPageInventory: document.getElementById("bankPageInventory"),
		bookmarks: document.getElementById("bookmarks"),
		boots: document.getElementById("boots"),
		buyer: document.getElementById("buyer"),
		buyerPage: document.getElementById("buyerPage"),
		buyerPageChat: document.getElementById("buyerPageChat"),
		buyerPageInventory: document.getElementById("buyerPageInventory"),
		canvasChatInput: document.getElementById("canvasChatInput"),
		canvasSend: document.getElementById("canvasSend"),
		chance: document.getElementById("chance"),
		chanceImage: document.getElementById("chanceImage"),
		changeSpellbook: document.getElementById("changeSpellbook"),
		changeChat: document.getElementById("changeChat"),
		changeInventory: document.getElementById("changeInventory"),
		changeQuests: document.getElementById("changeQuests"),
		changeAdventure: document.getElementById("changeAdventure"),
		changeSettings: document.getElementById("changeSettings"),
		charges: document.getElementById("charges"),
		chat: document.getElementById("chat"),
		chatInput: document.getElementById("chatInput"),
		chatPage: document.getElementById("chatPage"),
		chatText: document.getElementById("chatText"),
		chest: document.getElementById("chest"),
		choosePage: document.getElementById("choosePage"),
		choosePageAchievementPoints: document.getElementById("choosePageAchievementPoints"),
		choosePageBoots: document.getElementById("choosePageBoots"),
		choosePageChest: document.getElementById("choosePageChest"),
		choosePageContent: document.getElementById("choosePageContent"),
		choosePageGreaves: document.getElementById("choosePageGreaves"),
		choosePageHelm: document.getElementById("choosePageHelm"),
		choosePagePlayer: document.getElementById("choosePagePlayer"),
		choosePageWeapon: document.getElementById("choosePageWeapon"),
		chooseStats: document.getElementById("chooseStats"),
		close: document.getElementById("close"),
		closeDriver: document.getElementById("closeDriver"),
		closeReputation: document.getElementById("closeReputation"),
		completedQuestBox: document.getElementById("completedQuestBox"),
		conditionalChooseStats: document.getElementById("conditionalChooseStats"),
		conditionalStats: document.getElementById("conditionalStats"),
		cooldown: document.getElementById("cooldown"),
		coordsOn: document.getElementById("coordsOn"),
		creditsPage: document.getElementById("creditsPage"),
		darkOn: document.getElementById("darkOn"),
		dayNight: document.getElementById("dayNight"),
		driverPage: document.getElementById("driverPage"),
		driverPageBuy: document.getElementById("driverPageBuy"),
		driverPageMain: document.getElementById("driverPageMain"),
		durability: document.getElementById("durability"),
		food: document.getElementById("food"),
		fpsOn: document.getElementById("fpsOn"),
		fullscreenOff: document.getElementById("fullscreenOff"),
		fullscreenOn: document.getElementById("fullscreenOn"),
		functionText: document.getElementById("functionText"),
		game: document.getElementById("game"),
		greaves: document.getElementById("greaves"),
		gridOn: document.getElementById("gridOn"),
		helm: document.getElementById("helm"),
		hitboxesOn: document.getElementById("hitboxesOn"),
		hotbar: document.getElementById("hotbar"),
		identifiedPage: document.getElementById("identifiedPage"),
		identifiedPageBack: document.getElementById("identifiedPageBack"),
		identifiedPageChat: document.getElementById("identifiedPageChat"),
		identifiedPageOption: document.getElementById("identifiedPageOption"),
		identifierPage: document.getElementById("identifierPage"),
		identifierPageBuy: document.getElementById("identifierPageBuy"),
		identifierPageChat: document.getElementById("identifierPageChat"),
		identifierPageOption: document.getElementById("identifierPageOption"),
		idtriangle: document.getElementById("idtriangle"),
		information: document.getElementById("information"),
		innerStats: document.getElementById("innerStats"),
		innerStatus: document.getElementById("innerStatus"),
		interact: document.getElementById("interact"),
		inventoryGoldXP: document.getElementById("inventoryGoldXP"),
		inventoryPage: document.getElementById("inventoryPage"),
		itemDescriptionText: document.getElementById("itemDescriptionText"),
		itemTier: document.getElementById("itemTier"),
		itemIdentification: document.getElementById("itemIdentification"),
		itemInventory: document.getElementById("itemInventory"),
		leaderboardPage: document.getElementById("leaderboardPage"),
		leaderboardPageDescription: document.getElementById("leaderboardPageDescription"),
		leaderboardPageList: document.getElementById("leaderboardPageList"),
		leaderboardPageList: document.getElementById("leaderboardPageList"),
		leaderboardPageTitle: document.getElementById("leaderboardPageTitle"),
		leftArrow: document.getElementById("leftArrow"),
		level: document.getElementById("level"),
		light: document.getElementById("light"),
		loot: document.getElementById("loot"),
		lootAll: document.getElementById("lootAll"),
		lootingPageClose: document.getElementById("lootingPageClose"),
		lootingPageTitle: document.getElementById("lootingPageTitle"),
		lootPage: document.getElementById("lootPage"),
		lore: document.getElementById("lore"),
		mailPage: document.getElementById("mailPage"),
		merchantPage: document.getElementById("merchantPage"),
		merchantPageBuy: document.getElementById("merchantPageBuy"),
		merchantPageChat: document.getElementById("merchantPageChat"),
		merchantPageOptions: document.getElementById("merchantPageOptions"),
		merchantPageTitle: document.getElementById("merchantPageTitle"),
		infoBar: document.getElementById("infoBar"),
		minigamesOn: document.getElementById("minigamesOn"),
		mountSlotLocked: document.getElementById("mountSlotLocked"),
		mountSlotUnlocked: document.getElementById("mountSlotUnlocked"),
		musicOn: document.getElementById("musicOn"),
		name: document.getElementById("name"),
		notifsOn: document.getElementById("notifsOn"),
		npcChatBanner1: document.getElementById("npcChatBanner1"),
		npcChatBannerText1: document.getElementById("npcChatBannerText1"),
		npcChatBannerHeader1: document.getElementById("npcChatBannerHeader1"),
		npcChatImage: document.getElementById("npcChatImage"),
		npcChatNext: document.getElementById("npcChatNext"),
		npcChatOptions: document.getElementById("chatBannerOptions"),
		npcChatOptionList: document.getElementById("chatBannerOptionList"),
		otherQuestBox: document.getElementById("otherQuestBox"),
		outIdtriangle: document.getElementById("outIdtriangle"),
		outTriangle: document.getElementById("outTriangle"),
		particlesOff: document.getElementById("particlesOff"),
		particlesOn: document.getElementById("particlesOn"),
		players: document.getElementById("players"),
		playersInfo: document.getElementById("playersInfo"),
		possibleQuestBox: document.getElementById("possibleQuestBox"),
		quest: document.getElementById("quest"),
		questFinish: document.getElementById("questFinish"),
		questFinishItems: document.getElementById("questFinishItems"),
		questFinishQuest: document.getElementById("questFinishQuest"),
		questFinishRewardsTitle: document.getElementById("questFinishRewardsTitle"),
		//questFinishStartItems: document.getElementById("questFinishStartItems"),
		questFinishXP: document.getElementById("questFinishXP"),
		questsPage: document.getElementById("questsPage"),
		questStart: document.getElementById("questStart"),
		questStartChat: document.getElementById("questStartChat"),
		questStartChatWrapper: document.getElementById("questStartChatWrapper"),
		questStartItems: document.getElementById("questStartItems"),
		questStartName: document.getElementById("questStartName"),
		questStartObjectives: document.getElementById("questStartObjectives"),
		questStartQuest: document.getElementById("questStartQuest"),
		questStartRewardsTitle: document.getElementById("questStartRewardsTitle"),
		questStartStartItems: document.getElementById("questStartStartItems"),
		questStartStartRewardsTitle: document.getElementById("questStartStartRewardsTitle"),
		questStartXP: document.getElementById("questStartXP"),
		reputationPage: document.getElementById("reputationPage"),
		reputationWrapper: document.getElementById("reputationWrapper"),
		rightArrow: document.getElementById("rightArrow"),
		secondary: document.getElementById("secondary"),
		set: document.getElementById("set"),
		settingAcceptHolder: document.getElementById("settingAcceptHolder"),
		settingDelete: document.getElementById("settingDelete"),
		settingLogout: document.getElementById("settingLogout"),
		settingsPage: document.getElementById("settingsPage"),
		settingNotifsHolder: document.getElementById("settingNotifsHolder"),
		settingsTwoPage: document.getElementById("settingsTwoPage"),
		settingTutorialHolder: document.getElementById("settingTutorialHolder"),
		speedOn: document.getElementById("speedOn"),
		spellArsenal: document.getElementById("spellArsenal"),
		spellsEquipped: document.getElementById("spellsEquipped"),
		stats: document.getElementById("stats"),
		textPage: document.getElementById("textPage"),
		them: document.getElementById("them"),
		tradePage: document.getElementById("tradePage"),
		tradePageInventory: document.getElementById("tradePageInventory"),
		tradePageOther: document.getElementById("tradePageOther"),
		transparencyOn: document.getElementById("transparencyOn"),
		triangle: document.getElementById("triangle"),
		trinketSlot1: document.getElementById("trinketSlot1"),
		trinketSlot2: document.getElementById("trinketSlot2"),
		trinketSlot3: document.getElementById("trinketSlot3"),
		tutorialOff: document.getElementById("tutorialOff"),
		tutorialOn: document.getElementById("tutorialOn"),
		weapon: document.getElementById("weapon"),
		weatherOff: document.getElementById("weatherOff"),
		weatherOn: document.getElementById("weatherOn"),
		nametagOff: document.getElementById("nametagOff"),
		nametagOn: document.getElementById("nametagOn"),
	},
	canvas: {},
	chat: {},
	inventory: {
		slotKeys: { // lookup for inventory DOM slot keyname in Dom.elements based on item type
			weapon: "weapon",
			helm: "helm",
			chest: "chest",
			greaves: "greaves",
			boots: "boots",
			staff: "weapon",
			bow: "weapon",
			sword: "weapon",
			tool: "weapon",
			rod: "weapon",
			mount: "mountSlotUnlocked",
			bag: "bag",
			// aaaaaaaaaaaaa tbd trinkets
		},
	},
	hotbar: {},
	quests: {},
	adventure: {},
	reputation: {},
	settings: {},
	instructions: {},
	quest: {},
	merchant: {},
	identifier: {},
	loot: {},
	buyer: {},
	mail: {},
	driver: {},
	bank: {},
	trade: {},
	leaderboard: {},
	choose: {},
	text: {},
	alert: {},
	infoBar: {},
	achievements: {},
	spellChoice: {},
	spellbook: {},
};

//
// Alerts
//

Dom.alert.array = []; // number of alerts that have appeared (used to give ids)

// start a dom alert
// text = what the alert says
// type = number of buttons or text or input
// type = 3 makes the button just "ok"
// values (type 3 or text) = array of what buttons will say
// values (input) = "name" if you want name validation
// page = what page it came from (what it appears over); undefined = canvas
// target = an object containing target, ev, targetNo, evNo
	// target is the function that is called by confirming the alert
	// targetNo is the function that is called by clicking no
	// ev is an array of parameters that is passed in to target
	// evNo is an array of parameters that is passed in to targetNo

// if type = 3 then the last parameter after all of ev is set to true on clicking second button
Dom.alert.page = function (text, type, values, page, target) { // can't pass in target and ev because chooseStats are called by an innerHTML

	// if there are no alerts already open on the same page
	if (Dom.alert.array.find(alert => alert.page === page) === undefined || page === undefined) {

		if (target === undefined) {
			target = {};
		}

		let id = Dom.alert.array.length;
		if (target !== undefined) {
			Dom.alert.array.push(Object.assign(target, {id: id, page: page, text: text}));
		}

		let alert = document.createElement("div");
		alert.classList.add("alert");
		alert.id = "alert"+id;

		if (page !== undefined) {
			alert.style.left = document.getElementById(page).offsetLeft+document.getElementById(page).offsetWidth/2-175+"px";
		}
		else {
			alert.style.left = Dom.canvas.width/2-175+"px";
		}

		// text only (e.g. chooseStats)
		if (type === "text") {
			alert.innerHTML = `<p class="alertText" id="alertText${id}">${text}</p>
			<div class="alertOptions" id="alertOptions${id}" onclick="Game.inventoryUpdate()">${values}</div>`;
		}
		// text input (e.g. name tag)
		else if (type === "input") {
			alert.innerHTML = `<p class="alertText" id="alertText${id}">${text}</p>
			<input type="text" class="alertInput" id="alertInput${id}"></input>
			<div class="alertYes" id="alertYes${id}" onclick="Game.inventoryUpdate()">OK</div>
			<div class="alertNo" id="alertNo${id}" style="left: 15px; bottom: 20px;">Cancel</div>`;
		}
		// 3 buttons
		else if (type === 3) {
			alert.innerHTML = `<p class="alertText" id="alertText${id}">${text}</p>
			<div class="alertYes" id="alertYes${id}" onclick="Game.inventoryUpdate()">${values !== undefined ? values[0] : "One"}</div>
			<div class="alertDispose" id="alertDispose${id}" onclick="Game.inventoryUpdate()">${values !== undefined ? values[1] : "All"}</div>
			<div class="alertNo" id="alertNo${id}" style="left: 0px; bottom: 5px;">Cancel</div>`;
		}
		// 2 buttons
		else if (type === 2) {
			alert.innerHTML = `<p class="alertText" id="alertText${id}">${text}</p>
			<div class="alertYes" id="alertYes${id}" onclick="Game.inventoryUpdate()">Yes</div>
			<div class="alertNo" id="alertNo${id}" style="left: 15px; bottom: 20px;">No</div>`;
		}
		// 1 button
		else {
			alert.innerHTML = `<p class="alertText" id="alertText${id}">${text}</p>
			<div class="alertNo" id="alertNo${id}" style="left: 0px; bottom: 20px;">OK</div>`;
		}

		document.body.appendChild(alert);

		// set the functions
		if (type === 3 || type === 2) {
			document.getElementById("alertYes"+id).onclick = function () {
				// close alert and call function with parameter
				if (target.ev !== undefined) {
					target.target(...target.ev);
				}
				else {
					target.target();
				}
				document.body.removeChild(alert);
				Dom.alert.array.splice(Dom.alert.array.findIndex(index => index.id === target.id, 1));
			}
		}

		if (type === "input") {
			document.getElementById("alertYes"+id).onclick = function () {
				// close alert and call function with parameter
				let value = alert.getElementsByTagName("INPUT")[0].value;
				if (target.ev === undefined) {
					target.ev = [];
				}
				let newValue = target.ev.unshift(value); // add player input to the beginning of the parameter array
				target.target(...newValue);
				document.body.removeChild(alert);
				Dom.alert.array.splice(Dom.alert.array.findIndex(index => index.id === target.id, 1));
			}

			Dom.alert.array[id].value = "";
			if (values === "name") {
				document.getElementById("alertInput"+id).onkeydown = function () {
					setTimeout(function () {
						if (ValidateName(document.getElementById("alertInput"+id).value)) {
							Dom.alert.array[id].value = document.getElementById("alertInput"+id).value;
						}
						else {
							document.getElementById("alertInput"+id).value = Dom.alert.array[id].value;
						}
					}, 1);
				}
			}
		}

		if (type !== "text") {
			document.getElementById("alertNo"+id).onclick = function () {
				// close alert only - and potentially call a function
				if (target.targetNo !== undefined) {
					if (target.evNo !== undefined) {
						target.targetNo(...target.evNo);
					}
					else {
						target.targetNo();
					}
				}
				document.body.removeChild(alert);
				Dom.alert.array.splice(Dom.alert.array.findIndex(index => index.id === target.id, 1));
			}
		}

		if (type === 3) {
			document.getElementById("alertDispose"+id).onclick = function () {
				// close alert and call function with parameter and (true)
				if (target.ev !== undefined) {
					target.target(...target.ev, true);
				}
				else {
					target.target(true);
				}
				document.body.removeChild(alert);
				Dom.alert.array.splice(Dom.alert.array.findIndex(index => index.id === target.id, 1));
			}
		}

		if (type === "text") {
			alert.onclick = function () {
				document.body.removeChild(alert);
				Dom.alert.array.splice(Dom.alert.array.findIndex(index => index.id === target.id, 1));
			}
		}
	}
}

// close the alert from Dom.alert.array with a particular id
Dom.alert.close = function (id) {
	document.body.removeChild(document.getElementById("alert"+id));
	Dom.alert.array.splice(Dom.alert.array.findIndex(index => index.id === id, 1));
}

// close all open alerts
Dom.alert.closeAll = function () {
	for (let i = 0; i < Dom.alert.array.length; i++) {
		let id = Dom.alert.array[i].id;
		document.body.removeChild(document.getElementById("alert"+id));
		Dom.alert.array.splice(0, 1);
		i--;
	}
}




// Make the save, logout, delete buttons at the top of the settings page
Dom.elements.settingLogout.innerHTML = "You are logged in as "+Player.name+"<div id='settingSave' onclick='Game.saveProgress()'>Save</div><div id='settingLogoutInner' onclick='Game.saveProgress(\"logout\")'>Logout</div><div id='settingDelete' onclick='Dom.settings.delete()'>Delete</div><br><br><br><div id='settingControls' onclick='Dom.settings.page(\"settingsTwoPage\")'>Controls</div>";

Dom.settings.delete = function () {

	Dom.alert.page("Are you sure you want to delete your progress for this class? It will be lost forever!", 2, undefined, "settingsPage", {
		target: function () {
			Dom.settings.deleted = true;
			localStorage.removeItem(Player.class);
			window.location.replace("./selection/index.html");
		}
	});
}

// DO NOT ADD CODE ABOVE THIS POINT

Dom.achievements.page = function (i) {
	if (!Dom.achievements.wait) {
		Dom.achievements.wait = true;
		Dom.elements.achievementImg.style = 'background-image: url("'+Achievements[i].image.substring(1)+'")';
		Dom.elements.achievementName.innerHTML = '<strong>'+Achievements[i].name+'</strong>';
		Dom.elements.achievementDescription.innerHTML = 'Achievement Unlocked';
		Dom.elements.achievementPoints.innerHTML = Achievements[i].points;

		setTimeout(function () {
			Dom.elements.achievementDescription.style.marginRight = 15 + Dom.elements.achievementPoints.offsetWidth+"px";
		},1);
		if (Achievements[i].position !== undefined) {
			Dom.elements.achievementImg.style.backgroundPosition = Achievements[i].position.x+"%"+Achievements[i].position.y+"%";
		}
		if (Achievements[i].color !== undefined) {
			Dom.elements.achievementImg.style.backgroundColor = Achievements[i].color;
		}

		Dom.elements.achievement.hidden = false;
		setTimeout(function () {
			Dom.elements.achievementDescription.innerHTML = Achievements[i].description;
		}, 3000);
		setTimeout(function () {
			Dom.elements.achievement.hidden = true;
			Dom.achievements.wait = false;
		}, 5000);
	}else {
		setTimeout(function () {
			Dom.achievements.page(i);
		}, 6000);
	}
}

Dom.achievements.update = function () {
	for (let i = 0; i < Achievements.length; i++) {
		if (!Object.keys(User.achievements).includes(ToCamelCase(Achievements[i].name)) && Achievements[i].isCompleted !== undefined && Achievements[i].isCompleted()) {
			User.achievements[ToCamelCase(Achievements[i].name)] = GetFullDateDisplay();
			User.achievementPoints.total += Achievements[i].points;
			User.achievementPoints.unclaimed += Achievements[i].points;
			Dom.achievements.page(i);

			// send websocket information if websocket is open
            if (ws !== false && ws.readyState === 1) {
                ws.send(JSON.stringify({
                    type: "achievementEarnt",
                    achievementPoints: User.achievementPoints.total,
                    achievement: Achievements[i].name
                }));
            }
		}
	}
}

// called to update all player quest etc. progress
Dom.checkProgress = function () {
	Dom.achievements.update();
	Dom.quests.active();
	Dom.quests.possible();
}

// called when the player has walked further than its domRange away from the npc that it is talking to (saved in Dom.currentNPC)
Dom.closeNPCPages = function () {
	if (this.elements.bankPage.hidden === false) {
		Dom.closePage("inventoryPage");
		//Dom.bank.active = false;
	}

	if (Dom.trade.requested) {
		Dom.chat.insert("Your trade request with " + Dom.currentlyDisplayed + " has been cancelled because one of you walked away.");
        Dom.chat.notification(Dom.currentlyDisplayed + " has cancelled the trade request.");
		Dom.trade.requested = false;
	}
	else if (Dom.trade.received) {
		let alert = Dom.alert.array.find(alert => alert.data === "tradeReceived");
		if (alert !== undefined) { // showing the function to join the game still (so the wrong one isn't closed by accident)
			Dom.alert.close(alert.id);
			//document.getElementById("alertNo"+alert.id).onclick();
		}
        Dom.chat.insert("Your trade request from " + Dom.currentlyDisplayed + " has been cancelled because one of you walked away.");
        Dom.chat.notification(Dom.currentlyDisplayed + " has cancelled the trade request.");
		Dom.trade.received = false;
	}

	if (this.elements.tradePage.hidden === false) {
		Dom.trade.close(true);
		//Dom.closePage("inventoryPage");
		//Dom.trade.active = false;
	}

	this.elements.questStart.hidden = true;
	this.elements.questFinish.hidden = true;
	this.elements.merchantPage.hidden = true;
	this.elements.identifierPage.hidden = true;
	this.elements.identifiedPage.hidden = true;
	this.elements.lootPage.hidden = true;
	this.elements.buyerPage.hidden = true;
	this.elements.mailPage.hidden = true;
	this.elements.driverPage.hidden = true;
	//this.elements.bankPage.hidden = true;
	//this.elements.tradePage.hidden = true;
	this.elements.leaderboardPage.hidden = true;
	this.elements.choosePage.hidden = true;
	this.elements.textPage.hidden = true;

	this.elements.npcChatBanner1.hidden = true;
	Dom.elements.npcChatOptions.hidden = true;

	Dom.currentlyDisplayed = "";
	Dom.currentNPC = {};
}

// these pages can be displayed even if an NPC page is also being shown (i.e. currentlyDisplayed isn't "")
// therefore these pages won't set currentlyDisplayed or currentNPC
const displayExceptionPages = ["leaderboardPage"];

//  notClose is set to true if currentlyDisplayed and currentNPC shoudl not be changed when the page is closed
// i.e. if the NPC is still being spoken to (i.e. another page is opened/still open) after this one is closed
Dom.closePage = function (page, notClose) {
	if (page === "chatPage" || page === "inventoryPage" || page === "questsPage" || page === "adventurePage" || page === "spellbookPage" || page === "settingsPage" || page === "settingsTwoPage" || page === "creditsPage") {
		let tab = page
		if (page === "settingsTwoPage" || page === "creditsPage") {
			tab = "settingsPage";
		}
		document.getElementById("change"+tab.substring(0,1).toUpperCase()+tab.substring(1,tab.length-4)).style.opacity = 0.7;
		//document.getElementById("change"+tab.substring(0,1).toUpperCase()+tab.substring(1,tab.length-4)).style.bottom = "-12px";
		document.getElementById("change"+tab.substring(0,1).toUpperCase()+tab.substring(1,tab.length-4)).style.marginTop = "12px";

	}
	else if (!notClose && !displayExceptionPages.includes(page)) {
		Dom.currentlyDisplayed = "";
		Dom.currentNPC = {};
	}

	if (page === "inventoryPage" && Dom.bank.active) {
		Dom.closePage("bankPage");
		Dom.bank.active = false;
	}
	if (page === "inventoryPage" && !Dom.elements.tradePage.hidden) {
		Dom.closePage("tradePage");
		if (Dom.trade.active) {
			Dom.trade.close();
		}
	}

	document.getElementById(page).hidden = true;

	Dom.checkProgress();
}

// open a page
// returns true if the page was hidden and will now be shown
// openClose means the page is closed if it is already open
// npc is used to set currentNPC if one exists
Dom.changeBook = function (page, npc, openClose) {
	let bookmark = false;
	let tab = page
	let settingsOpen = false;
	if (page === "settingsTwoPage" || page === "creditsPage") {
		tab = "settingsPage";
	}
	else if (page === "settingsPage") {
		page = Dom.settings.current;
	}
	if (document.getElementById(page).hidden && !settingsOpen) {
		// check if page is a "bookmarked" one
		if (page === "chatPage" || page === "inventoryPage" || page === "questsPage" || page === "adventurePage" || page === "spellbookPage" || page === "settingsPage" || page === "settingsTwoPage" || page === "creditsPage") {
			bookmark = true;
			document.getElementById("change"+tab.substring(0,1).toUpperCase()+tab.substring(1,tab.length-4)).style.opacity = 1;
			//document.getElementById("change"+tab.substring(0,1).toUpperCase()+tab.substring(1,tab.length-4)).style.bottom = "0px";
			document.getElementById("change"+tab.substring(0,1).toUpperCase()+tab.substring(1,tab.length-4)).style.marginTop = "0px";
		}

		if (!bookmark && Dom.currentlyDisplayed !== "" && !displayExceptionPages.includes(page)) {
			// a page is already displayed
			return false;
		}

		document.getElementById(page).hidden = false;

		if (!bookmark && !displayExceptionPages.includes(page)) {
			Dom.currentlyDisplayed = page;
			if (typeof npc !== "undefined" && typeof npc.type !== "undefined") {
				Dom.currentNPC = npc;
			}
		}

		for (let x = 0; x < document.getElementsByClassName("DOM").length; x++) {
			if (parseInt(document.getElementsByClassName("DOM")[x].style.zIndex) >= parseInt(document.getElementById(page).style.zIndex)) {
				document.getElementsByClassName("DOM")[x].style.zIndex--;
			}
		}
		document.getElementById(page).style.zIndex = 6+document.getElementsByClassName("DOM").length-1;

		let left = 530;
		let right = 0;
		let next = 30;
		//let top = 0;
		for (let i = 0; i < document.getElementsByClassName("DOM").length; i++) {
			if (document.getElementsByClassName("DOM")[i].hidden === false && document.getElementsByClassName("DOM")[i] !== document.getElementById(page)) {
				if (document.getElementsByClassName("DOM")[i].offsetLeft < left) {
					left = document.getElementsByClassName("DOM")[i].offsetLeft;
					//top = document.getElementsByClassName("DOM")[i].offsetTop;
				}
				if (document.getElementsByClassName("DOM")[i].offsetLeft > right) {
					right = document.getElementsByClassName("DOM")[i].offsetLeft;
				}
				if (document.getElementsByClassName("DOM")[i].style.left === next+"px" && document.getElementsByClassName("DOM")[i].style.top === next+"px") {
					next += 22;
				}
			}
		}

		// All NPC DOMs have the same position
		if (!bookmark) {
			document.getElementById(page).style.left = Dom.canvas.npcLeft;
			document.getElementById(page).style.top = Dom.canvas.npcTop;
		}
		if (left < 530) {
			if (right < Dom.canvas.width-1060) {
				document.getElementById(page).style.left = Dom.canvas.width-530+"px";
			}
			else {
				document.getElementById(page).style.left = next+"px";
				document.getElementById(page).style.top = next+"px";
			}
		}
		// All NPC DOMs have the same position
		if (!bookmark) {
			Dom.canvas.npcLeft = document.getElementById(page).style.left;
			Dom.canvas.npcTop = document.getElementById(page).style.top;
		}

		/*if (page === "chatPage") {
			Dom.chat.page();
		}*/

		// preparation of pages
		if (page === "reputationPage") {
			Dom.reputation.update();
		}
		if (page === "chatPage") {
			if (Dom.elements.chatText.offsetHeight === 390) {
				Dom.elements.chatText.style.overflowY = "auto";
				Dom.elements.chatText.scrollTop = Dom.elements.chatText.scrollHeight;
			}
		}

		return true;
	}
	else if (openClose) {
		Dom.closePage(page);
	}
}

// called when player connection status changes
Dom.chat.showPlayersOnline = function (type) {
	if (type === "hide") {
		Dom.elements.players.hidden = true;
		Dom.elements.playersInfo.hidden = true;
	}
	else if (type === "show") {
		Dom.chat.overridePlayers = false;
		Dom.elements.players.innerHTML = Dom.players.length;
		Dom.elements.players.hidden = false;
	}
	else if (type === "reconnecting") {
		Dom.chat.overridePlayers = true;
		Dom.elements.players.innerHTML = "Reconnecting...";
		Dom.elements.players.hidden = false;
		Dom.elements.playersInfo.hidden = true;
	}
}

Dom.hotbar.update = function () {
	for (let i = 0; i < 6; i++) {
		Dom.elements.hotbar.getElementsByTagName("td")[i].innerHTML = Dom.elements.itemInventory.getElementsByTagName("td")[i].innerHTML;
		if (Dom.elements.hotbar.getElementsByTagName("td")[i].getElementsByTagName("img").length > 0) {
			Dom.elements.hotbar.getElementsByTagName("td")[i].getElementsByTagName("img")[0].setAttribute('draggable', false);
			Dom.elements.hotbar.getElementsByTagName("td")[i].getElementsByTagName("img")[0].setAttribute('ondragstart', "return false;");
			if (Player.inventory.items[i].onClick !== undefined) {
				Dom.elements.hotbar.getElementsByTagName("td")[i].getElementsByTagName("img")[0].setAttribute('onclick', "Player.inventory.items["+i+"].onClick("+i+", true)");
			}
		}
	}
}

//
// Instructions
//

// calls Tutorial in adventuredata.js
Dom.instructions.page = function (chapter) {
	if (!Player.skipTutorial && !Player.tipsSeen.includes(chapter) && (Player.tutorialProgress === undefined || Player.tutorialProgress < chapter)) {
		// player still wants to see tutorial

		if (!Tutorial[chapter].branch) {
			// in the main tutorial path
			// changes your tutorialProgress chapter
			Player.tutorialProgress = chapter;
		}
		Player.tipsSeen.push(chapter); // array of all chapters seen

		Dom.alert.closeAll(); // close all other open tutorial messages
		if (chapter === 0 && User.notFirst) {
			// instructions for second+ time playing
			Tutorial[0].altFunc();
		}
		else {
			Tutorial[chapter].func();
		}
	}
	Dom.quests.possible();
}

Dom.instructions.unlockTab = function (tab, skip) {
	if (!Player.unlockedTabs.includes(tab)) {
		Player.unlockedTabs.push(tab);
		document.getElementById("change"+tab[0].toUpperCase()+tab.substring(1)).style.display = "block";
		document.getElementById("change"+tab[0].toUpperCase()+tab.substring(1)).style.bottom = "-12px";
		document.getElementById("change"+tab[0].toUpperCase()+tab.substring(1)).style.top = Dom.canvas.height-87+12+"px";

		if (skip) {
			Player.skippedTabs.push(tab);
		}
	}
	else if (!skip) {
		Player.skippedTabs.shift();
	}
}

Dom.elements.tutorialOn.onclick = function () {
	Dom.instructions.unlockTab("quests", true);
	Dom.instructions.unlockTab("chat", true);
	Dom.instructions.unlockTab("inventory", true);
	Dom.instructions.unlockTab("adventure", true);
	Player.skipTutorial = true;
}

Dom.elements.tutorialOff.onclick = function () {
	Player.skipTutorial = false;
	for (let i = 0; i < Player.skippedTabs.length; i++) {
		for (let x = 0; x < Player.unlockedTabs.length; x++) {
			if (Player.unlockedTabs[x] === Player.skippedTabs[i]) {
				Player.unlockedTabs.splice(x, 1);
			}
		}
		document.getElementById("change"+Player.skippedTabs[i][0].toUpperCase()+Player.skippedTabs[i].substring(1)).style.display = "none";
	}
	Player.skippedTabs = [];
}


//
// Chat
//

// if message is an array of objects with parameters text and condition
// returns the first message where condition is true or undefined
Dom.chat.decideMessage = function (message) {
	// if message is an array of objects
	if (message.constructor === Array && typeof message[0] === "object") {
		for (let i = 0; i < message.length; i++) {
			// if that condition is true or undefined
			if (message[i].condition === undefined || message[i].condition()) {
				// return that message
				return message[i].text;
			}
		}
	}
	else {
		// if the message is not in this format then return it without editing
		return message;
	}
 }

// format a message for chat, under the format of "name: message"
// name is emboldened via <strong> tags
// if message begins with "/me " (including space), the format changes to "this.name message"
// if message is an array of objects with parameters text and condition, the message is decided from these (first object that satisfies)
Dom.chat.say = function (name, message, language) {
	if (message !== undefined) {
		// update message for special chat cases

		// pick a message based on conditions for messages (if there are no conditions the message is returned normally)
        // conditions in message can be done by making message an array of objects, with properties text and conition
        message = this.decideMessage(message);

		if (message.constructor === Array) {
			// pick a random message from the array
			message = message[Random(0, message.length - 1)];
		}

		if (language === "giblish") {
			message = Dom.chat.toGiblish(message);
		}

		if (typeof name === "undefined") {
			// no name for NPC, post without a name
		}
		else if (message.substring(0, 4) === "/me ") {
			// reflexive message
			message = "<strong>" + name + "</strong> " + message.substr(4, message.length);
		}
		else {
			// normal message (includes NPC name)
			message = "<strong>" + name + "</strong>: " + message;
		}

		return message;
	}
	else {
		console.warn("undefined chat message for " + name);
	}
}

// text - array of strings
// values - array of integers which are times in milliseconds between messages (OR a single value, time waited between each message)
// end - function called when sequence is done
// endParameters - array of parameters passed in to end function
// cutscene true means no other npcs can be spoken to whilst this is running
Dom.chat.insertSequence = function (text, values, end, endParameters, cutscene) {
	if (values === undefined) {
		values = [];
		values.length = text.length+1; // should be text.length ??
	}
	else if (!Array.isArray(values)) {
		// single integer value
		let x = values;
		values = [];
		for (let i = 0; i < text.length; i++) {
			values.push(x);
		}
	}
	values.push(0);

	let time = values[0] || 0;
	for (let i = 0; i < text.length; i++) {

		if (values[i+1] === undefined) {
			values[i+1] = text[i].split(" ").length/200*60000;
		}

		Dom.chat.insert(text[i], time, values[i+1]);

		time += values[i+1];
	}

	if (cutscene) {
		Dom.cutscene(time);
	}

	if (end !== undefined) {
		setTimeout (function () {
			end(endParameters);
		}, time);
	}
}


// input to chat via chat page or bottom right of screen
Dom.chat.input = function (id) {
	Dom.chat.playerMessage(Dom.elements[id].value);

	Dom.elements[id].value = "";

	Dom.elements[id].select();
	Dom.elements[id].focus();
}

// player sending a message to chat
Dom.chat.playerMessage = function (message) {
	if (message !== "") {

		if (message === "/help") {
			Dom.chat.insert(Dom.chat.say("The Mighty Zararanath",
			`Hello, ${Player.name}. Here is a list of commands that you can type in chat:
			<br><br>/me [message] - refer to yourself in the third person.
			<br>/msg [player name] [message] - send a message to only one player.
			<br>/r [message] - respond to the person who most recently messaged you through /msg.
			<br>/ping - see your connection speed with server.
			<br><br>If you require help with the game, click your yellow bookmark with a compass on.`));
		}

		// message intended to be sent to other players
		else if (ws === false || ws.readyState !== 1) {
			// server off
			Dom.chat.insert(Dom.chat.say(Player.name, message));
			if (message === "/creative") {
				Game.toggleCreativeMode();
			}
			else if (message.substring(0, 7) === "/image ") {
				Game.setCreativeItem(message.substr(7));
			}
		}
		else {
			// server on

			if (message === "/ping") {
				let message = {
			        type: "ping",
			        content: Date.now(),
			    }
			    let jsonMessage = JSON.stringify(message);
			    ws.send(jsonMessage);
			}

			else if (message.substring(0, 5) === "/msg ") {
				let array = message.split(" ");
				if (array.length > 2 && Dom.players.findIndex(player => player.name === array[1]) !== -1) {
					let string = array[2];
					for (let i = 3; i < array.length; i++) {
						string += " " + array[i];
					}
					Dom.chat.insert(Dom.chat.say(Player.name + " &#10132; " + array[1], string));
					let messageObj = {
				        type: "msg",
				        name: array[1],
				        content: string,
				    }
				    let jsonMessage = JSON.stringify(messageObj);
				    ws.send(jsonMessage);
				}
				else if (array.length <= 2) {
					Dom.chat.insert("Incorrect usage of /msg. Should be /msg [player name] [message].");
				}
				else {
					Dom.chat.insert("Player "+array[1]+" cannot be found.");
				}
			}

			else if (message.substring(0, 3) === "/r ") {
				if (Dom.chat.replyTo !== undefined) {
					Dom.chat.insert(Dom.chat.say(Player.name + " &#10132; " + Dom.chat.replyTo, message.substring(3)));
					let messageObj = {
						type: "msg",
						name: Dom.chat.replyTo,
						content: message.substring(3),
					}
					let jsonMessage = JSON.stringify(messageObj);
					ws.send(jsonMessage);
				}
				else {
					Dom.chat.insert("You cannot return a message until someone has messaged you first.");
				}
			}

			// send message which is thus broadcasted to all others (no KAO)
			else {
				let messageObj = {
			        type: "chat",
			        name: Player.name,
			        content: message,
			    }
			    let jsonMessage = JSON.stringify(messageObj);
			    ws.send(jsonMessage);
			}
		}

		message = "";
	}
}

Dom.elements.canvasChatInput.onblur = function () {
	Dom.elements.canvasChatInput.style.zIndex = 0;
	Dom.elements.canvasSend.style.zIndex = 0;
	Dom.elements.canvasChatInput.style.visibility = "hidden";
	Dom.elements.canvasSend.style.visibility = "hidden";
}

// if the websocket is open, announce something to all users on the websocket
// second parameter is optional and does not send the message to the sender (this user) if it is true
Dom.chat.announce = function (message, exceptSender) {
    // check if user is connected to the websocket
    if (ws !== false && ws.readyState === 1) {
        let except;
        if (exceptSender) {
            except = ws.userID;
        }
        let messageToSend = {
            type: "info",
            content: message,
            except: except
        }
        let jsonMessage = JSON.stringify(messageToSend);
        ws.send(jsonMessage);
    }
}

Dom.chat.contents = []; // stores all the chat messages
Dom.chat.displayOpacity = []; // stores the opacity

// inserts a message into chat
// text (string) is the message
// delay (int) is the time in ms before the message is sent
// time (int) is the time in ms that the message appears for (CURRENTLY DEACTIVATED)
// noRepeat (boolean) is set to true if the message should not be sent if it has been sent before
Dom.chat.insert = function (text, delay, time, noRepeat) {

	// if the delay parameter is not defined, send the message immediately
	if (delay === undefined) {
		delay = 0;
	}

	/*if (time === undefined) {
		time = text.split(" ").length/200*60000;
	}*/

	// set the delay for a cutscene message to be the time it takes to read the previous message
	if (Dom.currentlyDisplayed === "cutscene") {
		delay = Dom.chat.cutsceneEnd - Date.now();
	}

	setTimeout(function () {
		if (!noRepeat || !Dom.chat.contents.includes(text)) {
			// wait for the delay then check if it should be sent and send it

			// if more than 1000 chat messages have been sent since last refresh, delete the oldest
			if (this.contents.length >= 1000) {
				this.contents.shift();
			}
			//if (Dom.canvas.width !== undefined) {
			this.contents.push(text);

			// chat in the bottom left
			Dom.elements.chat.innerHTML += "<li class='chatBox' style='opacity:0.6;'>"+text+"</li>";
			Dom.elements.chat.style.top= Dom.canvas.height-Dom.chat.offset-Dom.elements.chat.offsetHeight+"px";
			Dom.chat.displayOpacity.push(1500);
			document.documentElement.style.setProperty('--chatOpacity', 0.6);
			Dom.elements.canvasChatInput.hidden = false;

			// if the following code is not already running then start running it
			if (!Dom.chat.chatInterval) {

				// repeat the following code every 1ms until all chat messages completely disappear
				Dom.chat.chatInterval = setInterval(function () {
					if (Dom.chat.displayOpacity.length === 0) {
						clearInterval(Dom.chat.chatInterval);
						Dom.chat.chatInterval = false;
					}

					// if not shift and there are messages to show then show the input box
					if (!Dom.chat.hideInput && Dom.chat.displayOpacity.length > 0) {
						Dom.elements.canvasChatInput.style.zIndex = 10;
						Dom.elements.canvasSend.style.zIndex = 11;
						Dom.elements.canvasChatInput.style.visibility = "visible";
						Dom.elements.canvasSend.style.visibility = "visible";
					}

					// for each message
					for (let x = 0; x < Dom.chat.displayOpacity.length; x++) {

						// after "0.9s" decrease the opactity by "0.002/ms"
						Dom.chat.displayOpacity[x]-=2;
						if (Dom.chat.displayOpacity[x] < 600) {
							Dom.elements.chat.getElementsByTagName("li")[x].style.opacity = Dom.chat.displayOpacity[x]/1000;

							// if it is the bottom message and the input is not selected then set its opacity
							if (x === Dom.chat.displayOpacity.length-1 && Dom.elements.canvasChatInput !== document.activeElement) {
								document.documentElement.style.setProperty('--chatOpacity', Dom.chat.displayOpacity[x]/1000);
							}
						}

						// if it has disappeared
						if (Dom.elements.chat.getElementsByTagName("li")[x].style.opacity <= 0) {

							// remove it from the array
							Dom.chat.displayOpacity.shift();

							// set each element to the element below it
							for (let i = 0; i < Dom.chat.displayOpacity.length; i++) {
								Dom.elements.chat.getElementsByTagName("li")[i].innerHTML = Dom.elements.chat.getElementsByTagName("li")[i+1].innerHTML;
								Dom.elements.chat.getElementsByTagName("li")[i].style.opacity = Dom.elements.chat.getElementsByTagName("li")[i+1].style.opacity;
							}

							// remove the element
							Dom.elements.chat.removeChild(Dom.elements.chat.getElementsByTagName("li")[Dom.chat.displayOpacity.length]);

							// if it is the last element then hide the input box
							if (Dom.chat.displayOpacity.length === 0 && Dom.elements.canvasChatInput !== document.activeElement) {
								Dom.elements.canvasChatInput.style.zIndex = 0;
								Dom.elements.canvasSend.style.zIndex = 0;
								Dom.elements.canvasChatInput.style.visibility = "hidden";
								Dom.elements.canvasSend.style.visibility = "hidden";
							}

							// update the position of the message boxes
							Dom.elements.chat.style.top = Dom.canvas.height-Dom.chat.offset-Dom.elements.chat.offsetHeight+"px";

							// start again from the first message
							break;
						}
					}
				}, 1);
			}

			// add the text to the chat page
			Dom.elements.chatText.innerHTML += "<p class='chatPara'>" + text + "</p>";
			if (Dom.elements.chatText.offsetHeight === 390) {
				Dom.elements.chatText.style.overflowY = "auto";
				Dom.elements.chatText.scrollTop = Dom.elements.chatText.scrollHeight;
			}
			//}

			// text has been inserted
			return true;
		}
		else {
			// text has not been inserted
			return false;
		}
	}.bind(this), delay);
}


//
// NPC dialogue banners
//

Dom.chat.timeoutTime = 20; // ms between each character being shown

// npc is the npc object, which has .name (used for title) and .image (or you can set npc to false)
// text is either a single string, or an object with required property "text" and any additional properties (see below)...
// ... or an array of these objects to be displayed in sequence
// optional properties of object inputs include "onFinish" (function) and "options" (see questdata for format)
// skippable is whether the text can be skipped by pressing enter
Dom.chat.npcBanner = function (npc, text, skippable) {
	if (Dom.currentlyDisplayed === "") {
		Dom.currentlyDisplayed = "npcBanner";
		Dom.currentNPC = npc;

		//skippable = true;
	
		Dom.chat.npcBannerReadyToProgress = false;
	
		// reinit
		//Dom.elements.npcChatBanner1.style.height = "116px";
		Dom.chat.npcBannerText = "";
		Dom.chat.npcBannerArray = undefined;
	
		let toShow;
		if (Array.isArray(text)) {
			if (text.length > 1) {
				// still some text left to be shown after this
				Dom.chat.upcomingBannerText = []; // used as parameter for successive npcBanner function calls
				// deep copy text into upcomingBannerText:
				for (let i = 0; i < text.length; i++) {
					Dom.chat.upcomingBannerText.push(text[i]);
				}
	
				Dom.chat.upcomingBannerNpc = npc;
	
				// array of text parameters
				toShow = Dom.chat.upcomingBannerText.shift();
			}
			else {
				Dom.chat.upcomingBannerText = undefined;
	
				toShow = text[0];
			}
		}
		else {
			Dom.chat.upcomingBannerText = undefined;
	
			toShow = text;
		}
	
		Dom.chat.npcBannerParams = {}; // any additional params that are needed by the functions below
	
		Dom.chat.npcBannerParams.skippable = skippable;
	
		if (typeof toShow === "object") {
			if (toShow.long) {
				// show three lines
				Dom.elements.npcChatBanner1.style.height = "142px";
			}
			else {
				// show two lines
				Dom.elements.npcChatBanner1.style.height = "116px";
			}
	
			Dom.chat.npcBannerText = toShow.text;
	
			Dom.chat.npcBannerParams.onFinish = toShow.onFinish; // function or undefined
			Dom.chat.npcBannerParams.onFinishParams = toShow.onFinishParams; // array or undefined
	
			// these are just to be set by DOM functions
			Dom.chat.npcBannerParams.onFinishDom = toShow.onFinishDom; // function or undefined
			Dom.chat.npcBannerParams.onFinishDomParams = toShow.onFinishDomParams; // array or undefined
	
			Dom.chat.npcBannerParams.autoProgress = toShow.autoProgress;
	
			if (typeof toShow.progressIn !== "undefined") {
				// in ms
				setTimeout(this.npcChatProgress, toShow.progressIn, true);
			}
	
			if (typeof toShow.options !== "undefined") {
				// in ms
				Dom.chat.npcBannerParams.options = toShow.options;
			}
		}
		else if (typeof toShow === "string") {
			Dom.chat.npcBannerText = toShow;
		}
		else {
			console.error("Unexpected type of text parameter for NPC chat banner", toShow);
			return;
		}
	
		// finish reinit
		if (toShow.saidBy === "none" || npc === false) {
			// i.e. an action rather than a person saying it
			Dom.elements.npcChatBannerHeader1.innerHTML = "";
			Dom.elements.npcChatImage.style.background = "none";
		}
		else {
			// npc parameter is saying it
			Dom.elements.npcChatImage.style.background = "";
			Dom.elements.npcChatBannerHeader1.innerHTML = npc.name;
			Dom.elements.npcChatImage.style.backgroundImage = "url('"+npc.imageSrc+"')";
		}
	
		// show
		Dom.elements.npcChatNext.src = "assets/icons/dialogueWait.png";
		Dom.elements.npcChatBanner1.hidden = false;
	
		setTimeout(Dom.chat.npcBannerIterate, this.timeoutTime, 1);
	}
}

Dom.chat.npcBannerIterate = function (i) {
	if (Dom.chat.npcBannerText[i-1] === "<") {
		let afterSubstring = Dom.chat.npcBannerText.substr(i); // ith index onwards
		i += afterSubstring.indexOf(">") + 1;
	}

	let textToShow = Dom.chat.npcBannerText.substr(0, i); // 0th to i-1th index
	Dom.elements.npcChatBannerText1.innerHTML = textToShow;

	if (i < Dom.chat.npcBannerText.length) {
		let timeoutTime = Dom.chat.timeoutTime; // default

		let longerPauseArray = [".", "-", "!", "?", ";", "…", "⁀", "‿", "~", "ᵔ", "ᵕ"];
		if (longerPauseArray.includes(Dom.chat.npcBannerText[i-1])) {
			timeoutTime *= 10;
		}

		let shorterPauseArray = [",", ":", "˚"];
		if (shorterPauseArray.includes(Dom.chat.npcBannerText[i-1])) {
			timeoutTime *= 4;
		}

		Dom.chat.npcBannerParams.timeout = setTimeout(Dom.chat.npcBannerIterate, timeoutTime, i+1);
	}
	else if (!Dom.chat.npcBannerParams.autoProgress) {
		// done

		// check if there are options to be made by the player
		if (typeof Dom.chat.npcBannerParams.options !== "undefined") {
			// player must make choice
			Dom.elements.npcChatNext.src = "assets/icons/dialogueChoice.png";

			Dom.elements.npcChatOptionList.innerHTML = "";
			Dom.elements.npcChatOptions.hidden = false;
			for (let i = 0; i < Dom.chat.npcBannerParams.options.length; i++) {
				Dom.elements.npcChatOptionList.innerHTML += "<li class='chatBannerOption' onclick='Dom.chat.chooseOption("+i+")'>"+Dom.chat.npcBannerParams.options[i].text+"</li>";
			}

			Dom.chat.npcBannerReadyToProgress = false;
		}
		else {
			Dom.elements.npcChatNext.src = "assets/icons/dialogueNext.png";
			Dom.chat.npcBannerReadyToProgress = true;
		}
	}
}

// called by onclick
// choice is a number from 0 to the number of choices-1
Dom.chat.chooseOption = function (choice) {
	Dom.elements.npcChatOptions.hidden = true;

	let choiceObj = Dom.chat.npcBannerParams.options[choice];

	if (choiceObj.action === "progress") { // progress on in chat (like a choose your own path book)
		Dom.chat.npcChatProgress(true, choiceObj.jumpToId); // currently choice does nothing, tbd
	}
	else if (choiceObj.action === "function") { // function specified in choiceObj.function, with params at choiceObj.params
		// set onFinishChoice and onFinishChoiceParams so this fn gets called
		Dom.chat.npcBannerParams.onFinishChoice = choiceObj.function;
		Dom.chat.npcBannerParams.onFinishChoiceParams = choiceObj.params;
		// progress (/end) npc chat banner (where this fn will be called, and potentially more chat will be shown)
		Dom.chat.npcChatProgress(true);
	}
}

// called on enter key press, or an answer being picked
// forceProgress set to true if npcBannerReadyToProgress should be ignored
// jumpToId skips to a chat with the specified id parameter
Dom.chat.npcChatProgress = function (forceProgress, jumpToId) {
	if (typeof Dom.chat.npcBannerParams !== "undefined" && Dom.chat.npcBannerParams.skippable && !Dom.chat.npcBannerReadyToProgress) {
		clearTimeout(Dom.chat.npcBannerParams.timeout);
		Dom.chat.npcBannerIterate(Dom.chat.npcBannerText.length);
	}

	if (Dom.chat.npcBannerReadyToProgress || forceProgress === true) { // current chat has showed
		Dom.chat.npcBannerReadyToProgress = false;

		if (typeof Dom.chat.upcomingBannerText === "undefined") {
			// nothing more to be shown - clear dom currently displayed and remove banner from the screen
			Dom.chat.npcChatFinished();
			// case of more to be shown is done at bottom of function
		}

		// onFinish fn
		if (typeof Dom.chat.npcBannerParams.onFinish !== "undefined") {
			if (typeof Dom.chat.npcBannerParams.onFinishParams === "undefined") {
				Dom.chat.npcBannerParams.onFinishParams = [];
			}
			Dom.chat.npcBannerParams.onFinish(...Dom.chat.npcBannerParams.onFinishParams);
			Dom.chat.npcBannerParams.onFinish = undefined;
		}

		// onFinishDom fn (same as above, but just set by dom functions)
		if (typeof Dom.chat.npcBannerParams.onFinishDom !== "undefined") {
			if (typeof Dom.chat.npcBannerParams.onFinishDomParams === "undefined") {
				Dom.chat.npcBannerParams.onFinishDomParams = [];
			}
			Dom.chat.npcBannerParams.onFinishDom(...Dom.chat.npcBannerParams.onFinishDomParams);
			Dom.chat.npcBannerParams.onFinishDom = undefined;
		}

		// onFinishChoice fn (choice with "function" action)
		if (typeof Dom.chat.npcBannerParams.onFinishChoice !== "undefined") {
			if (typeof Dom.chat.npcBannerParams.onFinishChoiceParams === "undefined") {
				Dom.chat.npcBannerParams.onFinishChoiceParams = [];
			}
			Dom.chat.npcBannerParams.onFinishChoice(...Dom.chat.npcBannerParams.onFinishChoiceParams);
			Dom.chat.npcBannerParams.onFinishChoice = undefined;
		}

		// jumpToId
		if (Array.isArray(Dom.chat.upcomingBannerText) && typeof jumpToId !== "undefined") {
			while (Dom.chat.upcomingBannerText.length > 0 && (typeof Dom.chat.upcomingBannerText[0] === "string" || (typeof Dom.chat.upcomingBannerText[0] === "object" && Dom.chat.upcomingBannerText[0].id !== jumpToId))) {
				Dom.chat.upcomingBannerText.splice[0];
			}
			if (Dom.chat.upcomingBannerText.length === 0) {
				console.warn("Could not find an upcoming chat message with the id ", jumpToId);
				Dom.chat.upcomingBannerText = undefined;
			}
		}
		else if (typeof Dom.chat.upcomingBannerText === "string" || (typeof Dom.chat.upcomingBannerText === "object" && Dom.chat.upcomingBannerText.id !== jumpToId)) {
			// nothing fits the given criteria
			console.warn("Could not find an upcoming chat message with the id ", jumpToId, Dom.chat.upcomingBannerText);
			Dom.chat.upcomingBannerText = undefined;
		}

		if (typeof Dom.chat.upcomingBannerText !== "undefined") {
			// new stuff to be shown
			Dom.chat.npcBanner(Dom.chat.upcomingBannerNpc, Dom.chat.upcomingBannerText);
		}
		// the case of nothing more to be shown was done at the top of this func
	}
}

// called by progress fn above, when there is nothing more to be shown
// note that this is also hidden in Dom.closeNPCPages, but this function is not called.
Dom.chat.npcChatFinished = function() {
	Dom.currentlyDisplayed = "";
	Dom.currentNPC = {};

	Dom.elements.npcChatBanner1.hidden = true;
}






Dom.expand = function (block) {
	block = document.getElementById(block);
	if (block.hidden) {
		block.hidden = false;
	}else {
		block.hidden = true;
	}
	if (block === information) {
		Dom.inventory.displayTimer = false;
		block.hidden = true;
	}
}

//
// Reputation
//

Dom.reputation.give = function (area, amount) {
	if (Player.reputation[area].changed) {
		if (Player.reputation[area].level !== 6 || amount < 0) {
			Player.reputation[area].score += amount;

			if (amount > 0) {
				Dom.chat.insert("You have gained " + amount + " reputation with " + FromCamelCase(area));
			}
			else {
				Dom.chat.insert("You have lost " + (0-amount) + " reputation with " + FromCamelCase(area));
			}

			Dom.reputation.update();
		}
	// first time
	}
	else {
		Player.reputation[area].score += amount;
		Dom.chat.insert("You have gained " + amount + " reputation with " + FromCamelCase(area));
		Player.reputation[area].changed = true;
		if (Dom.reputation.ready) {
			Dom.elements.reputationWrapper.innerHTML += FromCamelCase(area) + ':<div class="widthPadding"></div> <div class="reputationBox"> <div class="reputationBar"></div> </div><br><br>';
		}
	}
}

Dom.reputation.start = function () {
	Dom.elements.reputationWrapper.innerHTML = "<br>";
	for (let i = 0; i < Object.keys(Player.reputation).length; i++) {
		if (Player.reputation[Object.keys(Player.reputation)[i]].changed) {
			Dom.elements.reputationWrapper.innerHTML += FromCamelCase(Object.keys(Player.reputation)[i]) + ':<div class="widthPadding"></div> <div class="reputationBox"> <div class="reputationBar"></div> </div><br><br>';
		}
	}
	Player.reputationReady = true;
	Dom.reputation.ready = true;
	Dom.reputation.update();
}

Dom.reputation.levels = ["Abhorred","Hated","Unfriendly","Neutral","Friendly","Honoured","Venerated"];
Dom.reputation.update = function () {
	// if the close button is not there yet
	if (!Dom.reputation.ready && Dom.elements.reputationWrapper.getElementsByTagName("div").length === 0) {
		for (let i = 0; i < Object.keys(Player.reputation).length; i++) {
			if (Player.reputation[Object.keys(Player.reputation)[i]].changed && Dom.elements.closeReputation === null) {
				// if the close button should be there
				Dom.elements.reputationWrapper.innerHTML += "<div id='closeReputation' onclick='Dom.reputation.start()'>Close</div>"
				Dom.elements.closeReputation = document.getElementById("closeReputation");
			}
		}
	}

	let visibleReputation = []; // array of player reputations that are visible in their reputation menu
	for (let i = 0; i < Object.keys(Player.reputation).length; i++) {
		if (Player.reputation[Object.keys(Player.reputation)[i]].changed) {
			visibleReputation.push(Object.keys(Player.reputation)[i]);
		}
	}

	for (let i = 0; i < visibleReputation.length; i++) {
		let reputationName = visibleReputation[i]; // key name of reputation currently being considered
		if (Player.reputation[reputationName].score >= ReputationPoints[Player.reputation[reputationName].level]) {
			this.upLevel(Player.reputation[reputationName], reputationName);
		}
		else if (Player.reputation[reputationName].score < 0) {
			this.downLevel(Player.reputation[reputationName], reputationName);
		}
		else if (Dom.reputation.ready) {
			if (Player.reputation[reputationName].level > 3) {
				document.getElementsByClassName("reputationBar")[i].style.backgroundColor = "green";
			}
			else if (Player.reputation[reputationName].level < 3) {
				document.getElementsByClassName("reputationBar")[i].style.backgroundColor = "red";
			}
			else {
				document.getElementsByClassName("reputationBar")[i].style.backgroundColor = "gold";
			}
			if (Player.reputation[reputationName].level !== 6 && Player.reputation[reputationName].level !== 0) {
				document.getElementsByClassName("reputationBar")[i].innerHTML = this.levels[Player.reputation[reputationName].level] + "&nbsp;&nbsp;(" + Player.reputation[reputationName].score + "/"+ReputationPoints[Player.reputation[reputationName].level]+")";
				document.getElementsByClassName("widthPadding")[i].innerHTML = this.levels[Player.reputation[reputationName].level] + " (" + Player.reputation[reputationName].score + "/"+ReputationPoints[Player.reputation[reputationName].level]+")";
			}
			else {
				document.getElementsByClassName("reputationBar")[i].innerHTML = this.levels[Player.reputation[reputationName].level];
				document.getElementsByClassName("widthPadding")[i].innerHTML = this.levels[Player.reputation[reputationName].level];
			}
			if (Player.reputation[reputationName].level >= 3) {
				document.getElementsByClassName("reputationBar")[i].style.textIndent = ((250-document.getElementsByClassName("widthPadding")[i].clientWidth)/2) + "px";
				document.getElementsByClassName("reputationBar")[i].style.width = Player.reputation[reputationName].score*250/ReputationPoints[Player.reputation[reputationName].level]+"px";
				document.getElementsByClassName("reputationBar")[i].style.left = "0px";
			}
			else {
				document.getElementsByClassName("reputationBar")[i].style.textIndent = ((250-document.getElementsByClassName("widthPadding")[i].clientWidth)/2)-Player.reputation[reputationName].score*250/ReputationPoints[Player.reputation[reputationName].level]+ "px";
				document.getElementsByClassName("reputationBar")[i].style.width = (ReputationPoints[Player.reputation[reputationName].level]-Player.reputation[reputationName].score)*250/ReputationPoints[Player.reputation[reputationName].level]+"px";
				document.getElementsByClassName("reputationBar")[i].style.left = Player.reputation[reputationName].score*250/ReputationPoints[Player.reputation[reputationName].level]+"px";
			}
			if (Player.reputation[reputationName].level === 6) {
				document.getElementsByClassName("reputationBar")[i].style.width = "250px";
			}
			document.getElementsByClassName("widthPadding")[i].innerHTML = "";
		}
	}
}

// name is key name of this in Player.reputation
Dom.reputation.upLevel = function (Area, keyName) {
	if (Area.level <= 5) {
		Area.score -= ReputationPoints[Player.reputation[keyName].level];
		Area.level++;
		Dom.chat.insert("Your reputation level with " + FromCamelCase(keyName) + " has increased to " + Dom.reputation.levels[Area.level]);
		Game.displayOnCanvas("Reputation Level Up!", [FromCamelCase(keyName), Dom.reputation.levels[Player.reputation[keyName].level-1] + " \u{2794} " + Dom.reputation.levels[Player.reputation[keyName].level]], 4, true); // display on canvas for 4s or enters a queue (true)
		if (Area.level === 6) {
			Dom.chat.announce("<strong>" + Player.name + "</strong> has reached venerated reputation with " + FromCamelCase(keyName) + "!", true);
		}
		this.update();
	}
	else {
		Area.level = 6;
		Area.score = 0;
		this.update();
	}
}

// name is key name of this in Player.reputation
Dom.reputation.downLevel = function (Area, keyName) {
	if (Area.level > 1) {
		Area.level--;
		Area.score += ReputationPoints[Player.reputation[keyName].level];
		Dom.chat.insert("Your reputation level with " + FromCamelCase(keyName) + " has decreased to " + Dom.reputation.levels[Area.level]);
		this.update();
	}
	else {
		Area.level = 0;
		Area.score = 0;
		this.update();
	}
}

document.onmousemove = function (e) {
	let event = e || window.event;
    window.mouseX = event.clientX;
    window.mouseY = event.clientY;
}

Dom.inventory.updatePosition = function (object, element) {
	let left = document.getElementById(element).offsetLeft;
	let top = document.getElementById(element).offsetTop;
	let width = object.offsetWidth;
	if (window.mouseX !== Dom.inventory.prevMouseX || window.mouseY !== Dom.inventory.prevMouseY || object.offsetWidth !== Dom.inventory.prevWidth) {
		Dom.inventory.prevMouseX = window.mouseX;
		Dom.inventory.prevMouseY = window.mouseY;
		Dom.inventory.prevWidth = object.offsetWidth;
		// information displays on the right
		if (window.mouseX+width+30 <= left+521) {
			object.style.left = window.mouseX+30+"px";
			Dom.elements.outTriangle.style = "right: "+(width-6)+"px; border-right: 20px solid var(--border); border-left: 0px solid transparent;";
			Dom.elements.outIdtriangle.style = "right: "+(width-6)+"px; border-right: 20px solid var(--border); border-left: 0px solid transparent;";
			Dom.elements.triangle.style = "right: "+(width-14)+"px; border-right: 20px solid var(--bottom); border-left: 0px solid transparent;";
			Dom.elements.idtriangle.style = "right: "+(width-14)+"px; border-right: 20px solid var(--bottom); border-left: 0px solid transparent;";
		// information displays on the left
		}else {
			object.style.left = window.mouseX-width-30+"px";
			Dom.elements.outTriangle.style = "left: "+(width-6)+"px; border-left: 20px solid var(--border); border-right: 0px solid transparent;";
			Dom.elements.outIdtriangle.style = "left: "+(width-6)+"px; border-left: 20px solid var(--border); border-right: 0px solid transparent;";
			Dom.elements.triangle.style = "left: "+(width-14)+"px; border-left: 20px solid var(--bottom); border-right: 0px solid transparent;";
			Dom.elements.idtriangle.style = "left: "+(width-14)+"px; border-left: 20px solid var(--bottom); border-right: 0px solid transparent;";
		}
		// information fits vertically
		if (window.mouseY+object.offsetHeight-30 <= top+601) {
			object.style.top = window.mouseY-30+"px";
			Dom.elements.outTriangle.style.top = "10px";
			Dom.elements.outIdtriangle.style.top = "10px";
			Dom.elements.triangle.style.top = "10px";
			Dom.elements.idtriangle.style.top = "10px";
		// information does not fit vertically
		}else {
			object.style.top = top+601-object.offsetHeight+"px";
			Dom.elements.outTriangle.style.top = window.mouseY - object.getBoundingClientRect().top - 20 + "px";
			Dom.elements.outIdtriangle.style.top = window.mouseY - object.getBoundingClientRect().top - 20 + "px";
			Dom.elements.triangle.style.top = window.mouseY - object.getBoundingClientRect().top - 20 + "px";
			Dom.elements.idtriangle.style.top = window.mouseY - object.getBoundingClientRect().top - 20 + "px";
		}
	}
	if (!object.hidden) {
		setTimeout(function () {
			Dom.inventory.updatePosition(object, element);
		},1);
	}
}

// display player info when hovering over their head in the inventory
Dom.inventory.displayIdentification = function (display) {
	if (display) {
		Dom.elements.itemIdentification.hidden = false;
		Dom.inventory.updatePosition(Dom.elements.itemIdentification, "inventoryPage");
	}
	Dom.elements.innerStats.innerHTML = "<strong>Level: " + Player.level + "</strong>";
	if (Player.level !== LevelXP.length - 1) {
		Dom.elements.innerStats.innerHTML += "<br><strong>XP: " + Round(100*Player.xp/LevelXP[Player.level],2) + "%</strong> ("+Round(Player.xp)+"/"+LevelXP[Player.level]+")";
	}

	//
	// stats
	//
	Dom.elements.innerStats.innerHTML += "<br><br><strong>Stats:</strong>";

	// these should stay at the top
	Dom.elements.innerStats.innerHTML += "<br>Max Health: " + Player.stats.maxHealth;
	// damage
	if (Player.inventory.weapon.name !== "") {
		Dom.elements.innerStats.innerHTML += "<br>Damage: " + Round(Player.stats.damage+Player.stats.damage*Player.stats.damagePercentage/100);
		if (Player.stats.maxDamage !== 0 && Player.stats.maxDamage !== Player.stats.damage) {
			Dom.elements.innerStats.innerHTML += "-" + Round(Player.stats.maxDamage+Player.stats.maxDamage*Player.stats.damagePercentage/100);
		}
	}
	else {
		Dom.elements.innerStats.innerHTML += "<br>Damage: 0";
	}
	// defence
	Dom.elements.innerStats.innerHTML += "<br>Defence: " + Player.stats.defence;
	if (Player.stats.blockDefence !== 0) {
		Dom.elements.innerStats.innerHTML += "<br>Block Defence: " + Player.stats.blockDefence;
	}

	if (Player.stats.enemyAggro !== 100) {
		Dom.elements.innerStats.innerHTML += "<br>Enemy aggro: " + Player.stats.enemyAggro + "%";
	}

	if (Player.stats.rangeMultiplier !== 100) {
		Dom.elements.innerStats.innerHTML += "<br>Range: " + Player.stats.rangeMultiplier + "%";
	}

	if (Player.stats.numberOfProjectiles !== 0 && Player.stats.numberOfProjectiles !== 1) {
		Dom.elements.innerStats.innerHTML += "<br>Number of Projectiles: " + Player.stats.numberOfProjectiles;
	}

	if (Player.stats.healingPower !== 100) {
		Dom.elements.innerStats.innerHTML += "<br>Healing power: " + Player.stats.healingPower + "%";
	}

	// vaguely alphabetical order
	Dom.elements.innerStats.innerHTML += "<br>Critical Chance: " + Player.stats.criticalChance + "%";
	Dom.elements.innerStats.innerHTML += "<br>Dodge Chance: " + Player.stats.dodgeChance + "%";
	if (Player.stats.flaming !== 0) {
		Dom.elements.innerStats.innerHTML += "<br>Flaming "+Romanize(Player.stats.flaming);
	}
	if (Player.stats.exploding !== 0) {
		Dom.elements.innerStats.innerHTML += "<br>Exploding "+Romanize(Player.stats.exploding);
	}
	if (Player.stats.frostaura) {
		Dom.elements.innerStats.innerHTML += "<br>Frostaura";
	}
	if (Player.stats.arcaneAura) {
		Dom.elements.innerStats.innerHTML += "<br>Arcane aura";
	}
	if (Player.stats.unstoppable) {
		Dom.elements.innerStats.innerHTML += "<br>Immunity to stuns and slows";
	}
	if (Player.class === "a" && Player.stats.focusSpeed !== 1) {
		Dom.elements.innerStats.innerHTML += "<br>Focus Speed: " + (Player.stats.focusSpeed*100) + "%";
	}
	Dom.elements.innerStats.innerHTML += "<br>Health Regen: " + Player.stats.healthRegen + "/s";
	if (Player.stats.lifesteal !== 0) {
		Dom.elements.innerStats.innerHTML += "<br>Lifesteal: " + Player.stats.lifesteal + "%";
	}
	if (Player.stats.looting !== 100) {
		Dom.elements.innerStats.innerHTML += "<br>Looting: " + Player.stats.looting + "%";
	}
	if (Player.stats.stealing !== 0) {
		Dom.elements.innerStats.innerHTML += "<br>Stealing: " + Player.stats.stealing + "%";
	}
	if (Player.stats.minimumVariance > 10) {
		Dom.elements.innerStats.innerHTML += "<br>Min Projectile Variance: " + Player.stats.minimumVariance;
	}
	if (Player.stats.poisonX !== 0 && Player.stats.posionY !== 0) {
		Dom.elements.innerStats.innerHTML += "<br>Poison: " + (Player.stats.poisonX*Player.stats.poisonStrength/100) + "/" + Player.stats.poisonY + "s";
	}
	if (Player.stats.reflection !== 0) {
		Dom.elements.innerStats.innerHTML += "<br>Reflection: " + Player.stats.reflection + "%";
	}
	if (Player.stats.reloadTime !== 500) {
		Dom.elements.innerStats.innerHTML += "<br>Reload Time: " + Player.stats.reloadTime/1000 + "s";
	}
	if (Player.stats.slowAmount !== 0 && Player.stats.slowTime !== 0) {
		Dom.elements.innerStats.innerHTML += "<br>Slow: " + Player.stats.slowAmount + "% for " + Player.stats.slowTime + "s";
	}
	if (Player.stats.stun !== 0) {
		Dom.elements.innerStats.innerHTML += "<br>Stun: " + Player.stats.stun + "s";
	}
	if (Player.stats.rooting !== 0) {
		Dom.elements.innerStats.innerHTML += "<br>Rooting: " + Player.stats.rooting + "s";
	}
	if (Player.stats.hex !== 0) {
		Dom.elements.innerStats.innerHTML += "<br>Hex: " + Player.stats.hex + "%";
	}
	if (Player.stats.knockback !== 0) {
		Dom.elements.innerStats.innerHTML += "<br>Knockback: " + Player.stats.knockback + "px";
	}
	Dom.elements.innerStats.innerHTML += "<br>Swim Speed: " + Player.stats.swimSpeed + "/s";
	Dom.elements.innerStats.innerHTML += "<br>Walk Speed: " + Player.stats.walkSpeed + "/s";
	if (Player.stats.iceSpeed !== 270) {
		Dom.elements.innerStats.innerHTML += "<br>Ice Speed: " + Player.stats.iceSpeed + "/s";
	}
	if (Player.stats.xpBonus !== 0) {
		Dom.elements.innerStats.innerHTML += "<br>XP Bonus: " + Player.stats.xpBonus + "%";
	}

	// these should stay at the bottom
	if (Player.stats.fishingSkill !== 0) {
		Dom.elements.innerStats.innerHTML += "<br>Fishing Skill: " + Round(Player.stats.fishingSkill);
	}

	//
	// status effects
	//
	if (Player.statusEffects.length !== 0) {
		Dom.elements.innerStatus.innerHTML = "<strong>Status Effects:</strong>";
		for (let i = 0; i < Player.statusEffects.length; i++) {
			if (!Player.statusEffects[i].hidden) {
				Dom.elements.innerStatus.innerHTML += "<br>" + Player.statusEffects[i].title + ": " + Player.statusEffects[i].effect + (Player.statusEffects[i].info ? Player.statusEffects[i].info.time ? " (" + (Math.floor(Player.statusEffects[i].info.time) - Math.floor(Player.statusEffects[i].info.ticks)) + "s)" : "" : "");
			}
		}
	}
	Dom.elements.itemIdentification.style.width = Dom.elements.innerStats.offsetWidth+"px";
}

// returns what should be displayed of a stat on an item or spell (inventory/spellbook item/spell hoverover)
// stat = string of what the stat is
// stat should be in Title Case
// value = value of the stat
// array = item's item.stats
// copy to archaeology (Stats)
Dom.inventory.stats = function (stat, value, array) {
	if (stat === "Defence" || stat === "Block Defence" || stat === "Fishing Skill" || stat === "Max Health") {
		return stat+": "+NumberSign(value)+"<br>";
	}
	else if (stat === "Critical Chance" || stat === "Dodge Chance" || stat === "Looting" || stat === "Reflection" || stat === "Lifesteal" || stat === "Xp Bonus" || stat === "Hex" || stat === "Damage Percentage" || stat === "Stealing" || stat === "Range Multiplier" || stat === "Healing Power" || stat === "Interact Range" || stat === "Poison Strength" || stat === "Enemy Aggro" || stat === "Channelling Move Speed") {
		return stat+": "+NumberSign(value)+"%<br>";
	}
	else if (stat === "Focus Speed") {
		return stat+": "+NumberSign(value*100)+"%<br>";
	}
	else if (stat === "Health Regen" || stat === "Swim Speed" || stat === "Walk Speed" || stat === "Ice Speed") {
		return stat+": "+NumberSign(value)+"/s<br>";
	}
	else if (stat === "Stun" || stat === "Rooting") {
		return stat+": "+NumberSign(value)+"s<br>";
	}
	else if (stat === "Reload Time") {
		return stat+": "+(NumberSign(value/1000))+"s<br>";
	}
	else if (stat === "Flaming" || stat === "Exploding") {
		return stat+" "+Romanize(value)+"<br>";
	}
	else if (stat === "Poison X") {
		return "Poison: " + NumberSign(value) + "/" + array.poisonY + "s<br>";
	}
	else if (stat === "Slow Amount") {
		return "Slow: -" + value + "% for " + array.slowTime + "s<br>";
	}
	else if (stat === "Slow Time" && typeof array.slowAmount === "undefined") {
		return "Slow Time: +" + array.slowTime + "s<br>";
	}
	else if (stat === "Damage") {
		return stat+": "+value + (array.maxDamage > value ? "-" + array.maxDamage : "")+"<br>";
	}
	else if (stat === "Minimum Variance") {
		return stat+": "+value+"<br>";
	}
	else if (stat === "Knockback") {
		return stat+": "+NumberSign(value)+"px<br>";
	}
	else if (stat === "Frostaura" || stat === "Splash Damage" || stat === "Wind Shield") {
		return stat+"<br>";
	}
	/*else if (stat === "Move During Focus") {
		return "Allows movement during attacks<br>";
	}*/
	else if (stat === "Unstoppable") {
		return "Grants invulnerability to stuns and slows<br>";
	}
	else if (stat === "Number Of Projectiles") {
		return "Number of Projectiles: "+value+"<br>";
	}
	//
	// spell stats (no plus sign)
	//
	else if (stat === "Mana Cost" || stat === "Range") {
		return stat+": "+value+"<br>";
	}
	else if (stat === "Channel Time" || stat === "Cooldown" || stat === "Effect Duration") {
		return stat+": "+(value/1000)+"s<br>";
	}
	else if (stat === "Stun Time") {
		return stat+": "+value+"s<br>";
	}
	else if (stat === "Mana Per Second") {
		return stat+": "+value+"/s<br>";
	}
	else if (stat === "Velocity") {
		return stat+": "+(value/1000)+"/s<br>";
	}
	else if (stat === "Defence Multiplier" || stat === "Damage Multiplier" || stat === "Movement Multiplier") {
		return stat+": "+value+"%<br>";
	}
	else { 
		return "";
	}
};

// display the information of an item, shown on hoverover
// array is the array of equipment in chooseDOM
// emptySlotMessage is the message to be shown if the slot is empty but being hovered over - doesn't yet work !
Dom.inventory.displayInformation = function (item, stacked, element, position, hide, array, emptySlotMessage) {
	if (item === undefined) {
		item = {};
	}
	if (hide !== "cooldown" || Dom.inventory.displayedInformation === item.name) {
		if (hide === undefined) {
			Dom.elements.information.hidden = true;
		}
		if (item.image !== undefined) {
			// slot not empty
			if (hide === undefined) {
				Dom.elements.information.style.opacity = 0;
				Dom.elements.information.hidden = false;
				Dom.elements.name.style.width = null;
				Dom.elements.stats.style.width = null;
			}
			Dom.inventory.updatePosition(Dom.elements.information, element);
			Dom.elements.information.style.opacity = 1;
			Dom.inventory.displayedInformation = item.name;
			if (item.name !== undefined) {
				Dom.elements.name.innerHTML = item.name;
				if (item.rarity === "mythic") {
					Dom.elements.name.style.color = "#b13fea";
				}
				else if (item.rarity === "unique") {
					Dom.elements.name.style.color = "orange";
				}
				else if (item.rarity === "junk") {
					Dom.elements.name.style.color = "darkgray";
				}
				else {
					Dom.elements.name.style.color = "var(--text)";
				}
			}
			else {
				Dom.elements.name.innerHTML = "Unidentified "+item.type.charAt(0).toUpperCase() + item.type.slice(1);
				Dom.elements.name.style.color = "var(--text)";
			}

			// display item's stats
			Dom.elements.stats.innerHTML = "";
			Dom.elements.conditionalStats.innerHTML = "";
			Dom.elements.chooseStats.innerHTML = "";
			Dom.elements.conditionalChooseStats.innerHTML = "";
			if (item.stats !== undefined) {

				// look for chosen stat from choose stats (if there is one)
				for (let i = 0; i < Object.keys(item.stats).length; i++) {
					if (Object.keys(item.stats)[i] !== item.chosenStat) {

						Dom.elements.stats.innerHTML += Dom.inventory.stats(FromCamelCase(Object.keys(item.stats)[i]), item.stats[Object.keys(item.stats)[i]], item.stats);
					}
				}

				// choose stats (stats that can be chosen from)
				if (item.chooseStats !== undefined) {
					if (Object.keys(item.chooseStats).length > 0) {
						if (!item.allChooseStats) {
							Dom.elements.chooseStats.innerHTML = "Click to choose stat:<br>";
						}
						else {
							Dom.elements.chooseStats.innerHTML = "";
						}
					}
					for (let i = 0; i < Object.keys(item.chooseStats).length; i++) {
						let color = "gray";
						if (Object.keys(item.chooseStats)[i] === item.chosenStat || item.allChooseStats) {
							color = "var(--text)";
						}
						Dom.elements.chooseStats.innerHTML += "<span style='color: "+color+"'>"+Dom.inventory.stats(FromCamelCase(Object.keys(item.chooseStats)[i]), item.chooseStats[Object.keys(item.chooseStats)[i]], item.chooseStats)+"</span>";
					}
				}
				else {
					Dom.elements.chooseStats.innerHTML = "";
				}

				// conditional choose stats (choose stats that require a condition)
				if (item.conditionalChooseStats !== undefined) {
					if (item.chooseStats === undefined) {
						item.chooseStats = [];
					}
					if (Object.keys(item.conditionalChooseStats).length > Object.keys(item.chooseStats).length) {
						Dom.elements.conditionalChooseStats.innerHTML = "Locked stats:<br>";
					}
					for (let i = 0; i < Object.keys(item.conditionalChooseStats).length; i++) {
						if (!Object.keys(item.chooseStats).includes(Object.keys(item.conditionalChooseStats[i])[0])) {
							Dom.elements.conditionalChooseStats.innerHTML += "<span style='color: gray'>"+Dom.inventory.stats(FromCamelCase(Object.keys(item.conditionalChooseStats[i])[0]), item.conditionalChooseStats[i][Object.keys(item.conditionalChooseStats[i])[0]], item.conditionalChooseStats)+"</span>";
						}
					}
				}
				else {
					Dom.elements.conditionalChooseStats.innerHTML = "";
				}

				// conditional stats (stats that require a condition to be true to be active; otherwise they are displayed in grey)
				if (item.conditionalStats !== undefined) {
					for (let x = 0; x < item.conditionalStats.length; x++) {
						Dom.elements.conditionalStats.innerHTML = item.conditionalStats[x].text+"<br>";
						for (let i = 0; i < Object.keys(item.conditionalStats[x].stats).length; i++) {
							let color = "gray";
							if (Items[item.type][item.id].conditionalStats[x].condition()) {
								color = "var(--text)";
							}
							Dom.elements.conditionalStats.innerHTML += "<span style='color: "+color+"'>"+Dom.inventory.stats(FromCamelCase(Object.keys(item.conditionalStats[x].stats)[i]), item.conditionalStats[x].stats[Object.keys(item.conditionalStats[x].stats)[i]], item.conditionalStats[x].stats)+"</span>";
						}
					}
				}
				else {
					Dom.elements.conditionalStats.innerHTML = "";
				}
			}

			// weapon, armour, rod or tool
			if (item.type !== "item" && item.type !== "spell" && item.type !== "bag" && item.type !== "currency" && item.type !== "fish" && item.type !== "consumable" && item.type !== "food" && item.type !== "teleport" && item.type !== "dev") {

				// weapons used to attack have tiers that should be displayed
				if (item.type !== "rod" && item.type !== "tool") {
					Dom.elements.itemTier.innerHTML = "Tier: "+item.tier+"<br>";
				}
				else {
					Dom.elements.itemTier.innerHTML = "";
				}

				if (item.set !== undefined) {
					// if the item is equipped
					if (position === "equip") {
						let setNum = 0;
						for (let i = 0; i < Items.set[item.set].armour.length; i++) {
							for (let x = 0; x < 5; x++) {
								if (Player.inventory[Object.keys(Player.inventory)[x]].name === Items.set[item.set].armour[i]) {
									setNum++;
									break;
								}
							}
						}
						Dom.elements.set.innerHTML = Items.set[item.set].name + " (" + setNum + "/" + Items.set[item.set].armour.length+")";
						// if the whole set is equipped
						if (setNum === Items.set[item.set].armour.length) {
							Dom.elements.set.innerHTML += "<br><br>Set Bonus:<br>";
							for (let i = 0; i < Object.keys(Items.set[item.set].stats).length; i++) {

								Dom.elements.set.innerHTML += Dom.inventory.stats(FromCamelCase(Object.keys(Items.set[item.set].stats)[i]), Items.set[item.set].stats[Object.keys(Items.set[item.set].stats)[i]], Items.set[item.set].stats);
							}

							// mulitplier
							if (Items.set[item.set].multiplier !== undefined) {
								for (let i = 0; i < Items.set[item.set].multiplier.length; i++) {
									Dom.elements.set.innerHTML += Items.set[item.set].multiplier[i].text + "<br>";
								}
							}

							// allChooseStats
							if (Items.set[item.set].allChooseStats) {
								Dom.elements.set.innerHTML += "All choose stats of this set are activated";
							}
						}
					}
					// if the item is in the player chooseDOM
					else if (position === "trade") {
						let setNum = 0;
						for (let i = 0; i < Items.set[item.set].armour.length; i++) {
							for (let x = 0; x < 5; x++) {
								if (array[Object.keys(array)[x]].name === Items.set[item.set].armour[i]) {
									setNum++;
									break;
								}
							}
						}
						Dom.elements.set.innerHTML = Items.set[item.set].name + " (" + setNum + "/" + Items.set[item.set].armour.length+")";
						// if the whole set is equipped
						if (setNum === Items.set[item.set].armour.length) {
							Dom.elements.set.innerHTML += "<br><br>Set Bonus:<br>";
							for (let i = 0; i < Object.keys(Items.set[item.set].stats).length; i++) {

								Dom.elements.set.innerHTML += Dom.inventory.stats(FromCamelCase(Object.keys(Items.set[item.set].stats)[i]), Items.set[item.set].stats[Object.keys(Items.set[item.set].stats)[i]], Items.set[item.set].stats);
							}

							// multiplier
							if (Items.set[item.set].multiplier !== undefined) {
								for (let i = 0; i < Items.set[item.set].multiplier.length; i++) {
									Dom.elements.set.innerHTML += Items.set[item.set].multiplier[i].text + "<br>";
								}
							}

							// allChooseStats
							if (Items.set[item.set].allChooseStats) {
								Dom.elements.set.innerHTML += "All choose stats of this set are activated";
							}
						}
					}
					// if the item is not equipped and not in player chooseDOM
					else {
						let setNum = 0;
						for (let i = 0; i < Items.set[item.set].armour.length; i++) {
							let checkUsed = true;
							for (let x = 0; x < Player.inventory.items.length; x++) {
								if (Player.inventory.items[x].name === Items.set[item.set].armour[i]) {
									setNum++;
									checkUsed = false;
									break;
								}
							}
							// if not in item inventory check equipped slots
							if (checkUsed) {
								for (let x = 0; x < 5; x++) {
									if (Player.inventory[Object.keys(Player.inventory)[x]].name === Items.set[item.set].armour[i]) {
										setNum++;
										break;
									}
								}
							}
						}
						Dom.elements.set.innerHTML = Items.set[item.set].name + " (" + setNum + "/" + Items.set[item.set].armour.length+")";
						// if the whole set is in the inventory
						if (setNum === Items.set[item.set].armour.length) {
							Dom.elements.set.innerHTML += "<br><br>Set Bonus:<br>";
							for (let i = 0; i < Object.keys(Items.set[item.set].stats).length; i++) {

								Dom.elements.set.innerHTML += Dom.inventory.stats(FromCamelCase(Object.keys(Items.set[item.set].stats)[i]), Items.set[item.set].stats[Object.keys(Items.set[item.set].stats)[i]], Items.set[item.set].stats);
							}

							// mulitplier
							if (Items.set[item.set].multiplier !== undefined) {
								for (let i = 0; i < Items.set[item.set].multiplier.length; i++) {
									Dom.elements.set.innerHTML += Items.set[item.set].multiplier[i].text + "<br>";
								}
							}

							// allChooseStats
							if (Items.set[item.set].allChooseStats) {
								Dom.elements.set.innerHTML += "All choose stats of this set are activated";
							}
						}
					}
				}
				else {
					Dom.elements.set.innerHTML = "";
				}
			}
			else {
				Dom.elements.set.innerHTML = "";
				Dom.elements.itemTier.innerHTML = "";
			}
			if (item.type === "bag") {
				Dom.elements.stats.innerHTML = "Capacity: "+item.size;
			}
			if (item.type === "currency") {
				if (stacked !== undefined) {
					Dom.elements.name.innerHTML = stacked + " " + Dom.elements.name.innerHTML;
				}
				else if (item.stacked !== undefined) {
					Dom.elements.name.innerHTML = item.stacked + " " + Dom.elements.name.innerHTML;
				}
				else {
					Dom.elements.name.innerHTML = "1 " + Dom.elements.name.innerHTML;
				}
			}

			// spells
			if (item.type === "spell") {
				Dom.elements.itemDescriptionText.innerHTML = item.description;
			}

			// length of fish
			if (item.fishingType === "fish") {
				Dom.elements.stats.innerHTML = "Length: " + item.length + "cm";
			}

			// quest item
			if (item.quest !== undefined && (item.quest === true || item.quest())) {
				Dom.elements.quest.hidden = false;
			}
			else {
				Dom.elements.quest.hidden = true;
			}

			// active ability text
			if (typeof item.activeAbility !== "undefined") {// && item.chooseStats === undefined) {
				Dom.elements.activeAbility.innerHTML = "Active ability: " + Spells[item.activeAbility].name + " " + Romanize(item.activeAbilityTier);
			}
			else {
				Dom.elements.activeAbility.innerHTML = "";
			}

			// function text (use of an item)
			if (item.functionText !== undefined && item.functionText !== "") {// && item.chooseStats === undefined) {
				Dom.elements.functionText.innerHTML = item.functionText;
			}
			else {
				Dom.elements.functionText.innerHTML = "";
			}

			// durability
			if (item.maxDurability !== undefined) {
				Dom.elements.durability.innerHTML = "Durability: " + (item.durability || item.maxDurability) + "/" + item.maxDurability;
			}
			else {
				Dom.elements.durability.innerHTML = "";
			}

			// charges
			if (item.charges !== undefined) {
				if (item.charges === 1) {
					Dom.elements.charges.innerHTML = item.charges + " Charge";
				}
				else {
					Dom.elements.charges.innerHTML = item.charges + " Charges";
				}
			}
			else if (item.maxCharges !== undefined) {
				if (item.maxCharges === 1) {
					Dom.elements.charges.innerHTML = item.maxCharges + " Charge";
				}
				else {
					Dom.elements.charges.innerHTML = item.maxCharges + " Charges";
				}
			}
			else {
				Dom.elements.charges.innerHTML = "";
			}

			// food
			if (item.healthRestore !== undefined && item.healthRestoreTime !== undefined) {
				Dom.elements.food.innerHTML = "Restores "+item.healthRestore+" health over "+item.healthRestoreTime+" seconds (whilst not in combat)";
			}
			else {
				Dom.elements.food.innerHTML = "";
			}

			// item lore
			if (item.lore !== undefined && item.lore !== "" && !Array.isArray(item.lore)) {
				Dom.elements.lore.innerHTML = item.lore;
			}else {
				Dom.elements.lore.innerHTML = "";
			}

			// item buyer price
			if (position === "buyer" && item.sellPrice !== undefined && (item.quest === undefined || !item.quest())) {
				// the maths to work out the prices
				let charges = item.charges || item.durability;
				let maxCharges = item.maxCharges || item.maxDurability;

				Dom.elements.buyer.innerHTML = "Sell "+(item.sellQuantity !== 1 ? item.sellQuantity : "")+" for "+(charges === undefined ? item.sellPrice : Math.ceil((item.sellPrice-1) * charges / maxCharges))+" "+Items.currency[item.sellCurrency].name.toLowerCase();
			}
			else {
				Dom.elements.buyer.innerHTML = "";
			}

			// item cooldown
			if (item.cooldown !== undefined) {
				item.countdownStart = item.cooldownStart;
				item.countdown = item.cooldown;
				item.countdownText = "On cooldown";
			}

			// misc timer
			if (item.countdownStart !== undefined && parseInt(item.countdownStart) + item.countdown > parseInt(GetFullDateTime())) {
				let answer = CalculateTime(GetFullDateTime(), (parseInt(item.countdownStart) + item.countdown).toString());
				Dom.elements.cooldown.innerHTML = (Dom.elements.lore.innerHTML !== "" ? "<br><br>" : "") + item.countdownText+":<br>" + answer;
				Dom.inventory.displayTimer = true;
				setTimeout(function () {
					if (Dom.inventory.displayTimer) {
						Dom.inventory.displayInformation(item, stacked, element, position, "cooldown");
					}
				},1000);
			}
			else {
				Dom.elements.cooldown.innerHTML = "";
			}

			Dom.elements.information.style.width = 1 + Math.max(Dom.elements.name.offsetWidth, Dom.elements.stats.offsetWidth)+"px";
			Dom.elements.name.style.width = Dom.elements.information.offsetWidth - 31 + "px";
			Dom.elements.stats.style.width = Dom.elements.information.offsetWidth - 31 + "px";
		}
		else if (emptySlotMessage !== undefined) {
			// slot empty
			// tbd !!!!
		}
	}
}

Dom.inventory.removeItemCharge = function (inventoryPosition, hotbar) {
	Player.inventory.items[inventoryPosition].charges--;
	if (Player.inventory.items[inventoryPosition].charges <= 0) {
		this.remove(inventoryPosition);
	}
	// change the image to a more used image if it has one
	if (Player.inventory.items[inventoryPosition].chargeImages !== undefined) {
		if (Player.inventory.items[inventoryPosition].chargeImages[Math.floor((Player.inventory.items[inventoryPosition].maxCharges - Player.inventory.items[inventoryPosition].charges) / (Player.inventory.items[inventoryPosition].maxCharges / (Player.inventory.items[inventoryPosition].chargeImages.length)))] !== Player.inventory.items[inventoryPosition].image) {
			Player.inventory.items[inventoryPosition].image = Player.inventory.items[inventoryPosition].chargeImages[Math.floor((Player.inventory.items[inventoryPosition].maxCharges - Player.inventory.items[inventoryPosition].charges) / (Player.inventory.items[inventoryPosition].maxCharges / (Player.inventory.items[inventoryPosition].chargeImages.length)))];
			Dom.elements.itemInventory.getElementsByTagName("td")[inventoryPosition].innerHTML = "<img src='"+Player.inventory.items[inventoryPosition].image+"' draggable='true' ondragstart='Dom.inventory.drag(event, Player.inventory.items, "+inventoryPosition+")' "+(Player.inventory.items[inventoryPosition].onClick !== undefined ? "onclick='Player.inventory.items["+inventoryPosition+"].onClick("+inventoryPosition+")'" : "") +"></img>";
		}
	}
	if (!hotbar) {
		this.displayInformation(Player.inventory.items[inventoryPosition], undefined, "inventoryPage");
	}
}

Dom.currentlyDisplayed = "";
Dom.currentNPC = {};

//
// quests
//

//
// quest start/progress/finish from npc
//

// just spoken to an npc to start the quest - display chat then call dom.quest.start (if step===0) or dom.quest.progress (o.w.)
// this is always called through choose dom, which deals with currentlyDisplayed etc
// finish parameter refers to whether the quest is being finished on this step or not
Dom.quest.progressFromNpc = function (quest, npc, step, finish) {
	// prepare quest object
	ourQuest = this.prepareQuestObject(quest, npc);

	// now finished with preparing quest object. yay.

	// check player has enough inventory space for any rewards after completing this step (or starting the quest, in case step=0)
	if (typeof ourQuest.steps[step].rewards === "undefined" || typeof ourQuest.steps[step].rewards.items === "undefined" || Dom.inventory.requiredSpace(ourQuest.steps[step].rewards.items)) {
		let chat = ourQuest.steps[step].chat;

		// format chat so the onFinishDom property can be given to it
		chat = Dom.quest.formatBannerChat(chat);

		if (step === 0) {
			chat[chat.length-1].onFinishDom = Dom.quest.start; // quest.start gets called once the npc dialogue is finished
		}
		else {
			chat[chat.length-1].onFinishDom = Dom.quest.progress; // quest.progress gets called once the npc dialogue is finished
		}
		chat[chat.length-1].onFinishDomParams = [ourQuest, npc, step, finish];

		Dom.chat.npcBanner(npc, chat);
	}
	// not enough inventory space
	else if (typeof npc !== "undefined") {
		npc.say(npc.chat.inventoryFull, 0, true);
		Dom.currentNPC = {};
		Dom.currentlyDisplayed = "";
	}
}

// shallow copies and prepares a quest object by consolidating all the relevant information
// quest is the object as appears in questdata
// npc is the npc that the quest is being started from (optional - retrieved from Player.quests.startedFromNpc otherwise)
Dom.quest.prepareQuestObject = function (quest, npc) {
	let ourQuest = {}; 
	// shallow clone
	Object.assign(ourQuest, quest);

	// first deal with quests that might have different information depending on the npc that takes the quest
	if (typeof npc === "undefined") {
		npc = Player.quests.startedFromNpc[quest.questArea][quest.id];
	}
	if (typeof ourQuest.differsOnNpc !== "undefined" && typeof ourQuest.differsOnNpc[ToObjectKey(npc.name)] !== "undefined") {
		// quest.differsOnNpc[npcName] contains some or all of the quest information
		Object.assign(ourQuest, ourQuest.differsOnNpc[ToObjectKey(npc.name)]);
	}

	// next deal with quests that might have different information depending on the number of times that the quest has been completed
	let timesCompleted = Player.quests.timesCompleted[ourQuest.questArea][ourQuest.id]; // the number of times the player has completed this quest already (helpful for if the dialogue varies for each attempt for example
	if (timesCompleted === null || timesCompleted === undefined)
	{
		timesCompleted = 0;
	}
	if (typeof ourQuest.differsOnTimesCompleted !== "undefined" && typeof ourQuest.differsOnTimesCompleted[timesCompleted] !== "undefined") {
		// quest.differsOnTimesCompleted[timesCompleted] contains some or all of the quest information
		Object.assign(ourQuest, ourQuest.differsOnTimesCompleted[timesCompleted]);
	}

	// note that none of the above preparation stuff should affect any conditions of the quest starting, as Dom.quests.possible doesn't work with this 
	// tbd make a way to verify that quests aren't doing this?

	return ourQuest;
}

// shows quest start plage
// without dialogue (assumes dialogue it has already been shown by progressFromNpc)
// note this isn't for the quest actually being accepted - they still have the option to decline. accepting the quest is done in Dom.quest.accept
Dom.quest.start = function (quest, npc) {
	// check AGAIN (in case they updated their inventory during dialogue) if player has enough inventory space for any start rewards
	if (typeof quest.steps[0].rewards === "undefined" || typeof quest.steps[0].rewards.items === "undefined" || Dom.inventory.requiredSpace(quest.steps[0].rewards.items)) {
		if (Dom.changeBook("questStart")) {
			if (quest.multipleAreas) {
				Player.quests.questProgress[quest.quest] = ToObjectKey(npc.name); // aaaaaaaaaaaaaaaaaaaaaa tbd don't use questProgress, instead make a separate variable just for this (like with startedFromNpc)
			}

			Dom.elements.questStartQuest.innerHTML = quest.quest;

			let timesCompleted = Player.quests.timesCompleted[quest.questArea][quest.id]; // the number of times the player has completed this quest already (helpful for if the dialogue varies for each attempt for example
			if (timesCompleted === null || timesCompleted === undefined)
			{
				timesCompleted = 0;
			}

			// display text if it's started from player's mail
			if (quest.mailStart) { // aaaaaaaaaaaaaaaaaaaaaa tbd
				let startName = quest.startName || quest[ToObjectKey(npc.name)].startName;
				if (Array.isArray(startName)) {
					startName = startName[timesCompleted];
				}
				Dom.elements.questStartName.innerHTML = startName;

				let startChat = quest.startChat || quest[ToObjectKey(npc.name)].startChat;
				if (Array.isArray(startChat)) {
					startChat = startChat[timesCompleted];
				}
				Dom.elements.questStartChat.innerHTML = startChat;

				Dom.elements.questStartChatWrapper.hidden = false;
			}
			else {
				Dom.elements.questStartChatWrapper.hidden = true;
			}

			let objectives = quest.objectivesList;

			// display objectives on quest start page
			Dom.elements.questStartObjectives.innerHTML = "";
			for (let i = 0; i < objectives.length; i++) {
				if (typeof objectives[i].revealStep === "undefined" && (objectives[i].isHidden === "undefined" || !objectives[i].isHidden())) {
					Dom.elements.questStartObjectives.innerHTML += "<br>" + objectives[i].text;
				}
			}

			// calculate the total rewards from the whole quest
			// note this does NOT include start rewards
			let totalXp = 0;
			let itemsArray = [];
			let servicesArray = [];
			for (let i = 1; i < quest.steps.length; i++) { // skips first step 
				let step = quest.steps[i];

				if (typeof step.rewards !== "undefined") {
					if (typeof step.rewards.xp !== "undefined") {
						totalXp += step.rewards.xp;
					}
					if (typeof step.rewards.items !== "undefined") {
						for (let j = 0; i < step.rewards.items.length; j++) {
							let itemObj = step.rewards.items[j];
							if (typeof itemObj.quantity === "undefined") {
								itemObj.quantity = 1;
							}
							// see if it exists in itemsArray yet
							let alreadyInArray = false;
							for (let k = 0; k < itemsArray.length; k++) {
								let existingItemObj = itemsArray[k];
								if (existingItemObj.item.id === itemObj.item.id && existingItemObj.item.type === itemObj.item.type) {
									// same item is already in rewards array - just add the quantity
									existingItemObj.quantity += itemObj.quantity;
									alreadyInArray = true;
									break;
								}
							}
							if (!alreadyInArray) {
								// not yet in rewards array - add the whole item object
								itemsArray.push(itemObj);
							}
						}
					}
					if (typeof step.rewards.services !== "undefined") {
						for (let j = 0; i < step.rewards.services.length; j++) {
							servicesArray.push(step.rewards.services[i]);
						}
					}
				}
			}

			// xp rewards
			Dom.elements.questStartItems.innerHTML = "";
			Dom.elements.questStartXP.hidden = true;
			if (totalXp > 0 || itemsArray.length > 0 || servicesArray.length > 0) {
				// the quest has some rewards (of any type)
				if (totalXp > 0) {
					Dom.elements.questStartXP.hidden = false;
					Dom.elements.questStartXP.innerHTML = totalXp;
				}
				Dom.elements.questStartRewardsTitle.innerHTML = "<br><br><b>Quest Rewards</b><br>";

				// service rewards
				if (servicesArray.length > 0) {
					for (let i = 0; i < servicesArray.length; i++) {
						Dom.elements.questStartItems.innerHTML += "<img src='./assets/icons/" + servicesArray[i].image + ".png' class='theseQuestServices'></img>&nbsp;&nbsp;";
					}
				}

				// item rewards

				if (itemsArray.length > 0) {
					for (let i = 0; i < itemsArray.length; i++) {
						Dom.quest.addReward(itemsArray[i], "questStartItems", "theseQuestOptions", "questStackNum");
					}
				}

				// from quest reward tables (global additional rewards for all quests)
				// e.g. eternity glove gemstones
				/*if (!quest.addedRewardsFromTables) { // check if rewards have been added from quest reward tables yet
					for (let i = 0; i < QuestRewardTables.globalAll.length; i++) {
						if (QuestRewardTables.globalAll[i].condition()) {
							quest.rewards.items.push(QuestRewardTables.globalAll[i]);
						}
					}

					if (quest.repeatTime === "daily") {
						for (let i = 0; i < QuestRewardTables.globalDaily.length; i++) {
							if (QuestRewardTables.globalDaily[i].condition()) {
								quest.rewards.items.push(QuestRewardTables.globalDaily[i]);
							}
						}
					}
					quest.addedRewardsFromTables = true;
				}*/ // removed system for now - maybe in the future it should just show the chance of getting the items
			}
			else {
				// the quest has no rewards
				Dom.elements.questStartRewardsTitle.innerHTML = "";
			}

			// start rewards
			Dom.elements.questStartStartItems.innerHTML = "";
			let startRewards = quest.steps[0].rewards;
			if (startRewards !== undefined) {
				Dom.elements.questStartStartRewardsTitle.innerHTML = "<br><br><b>You will receive these items upon starting the quest:</b><br>";

				// service rewards
				if (startRewards.services !== undefined) {
					for (let i = 0; i < startRewards.services.length; i++) {
						Dom.elements.questStartStartItems.innerHTML += "<img src='./assets/icons/" + startRewards.services[i].image + ".png' class='theseQuestStartServices'></img>&nbsp;&nbsp;";
					}
				}

				// item rewards
				if (startRewards.items !== undefined) {
					for (let i = 0; i < startRewards.items.length; i++) {
						Dom.quest.addReward(startRewards.items[i], "questStartStartItems", "theseQuestStartOptions", "questStartStackNum");
					}
				}
			}
			else {
				Dom.elements.questStartStartRewardsTitle.innerHTML = "";
			}

			// now repeat for all start & finish item rewards, adding their hover over information display
			// service start rewards
			let startArray = document.getElementsByClassName("theseQuestStartServices");
			if (startArray.length === 0) {
				startArray = document.getElementsByClassName("theseQuestStartOptions");
			}
			else {
				for (let x = 0; x < document.getElementsByClassName("theseQuestStartServices").length; x++) {
					quest.startRewards.services[x].type = "item";
					quest.startRewards.services[x].name = "Service Reward";
					document.getElementsByClassName("theseQuestStartServices")[x].onmouseover = function () {
						Dom.inventory.displayInformation(quest.steps[0].rewards.services[x], undefined, "questStart");
					};
					document.getElementsByClassName("theseQuestStartServices")[x].onmouseleave = function () {
						Dom.expand("information");
					};
				}
			}
			// item start rewards
			if (startArray.length > 0) {
				startArray[startArray.length-1].onload = function () {
					for (let x = 0; x < document.getElementsByClassName("theseQuestStartOptions").length; x++) {
						document.getElementsByClassName("theseQuestStartOptions")[x].onmouseover = function () {
							Dom.inventory.displayInformation(quest.steps[0].rewards.items[x].item, quest.steps[0].rewards.items[x].quantity, "questStart");
						};
						document.getElementsByClassName("theseQuestStartOptions")[x].onmouseleave = function () {
							Dom.expand("information");
						};
					}

					for (let x = 0; x < document.getElementsByClassName("questStartStackNum").length; x++) {
						document.getElementsByClassName("questStartStackNum")[x].onmouseover = function () {
							Dom.inventory.displayInformation(quest.steps[0].rewards.items[x].item, quest.steps[0].rewards.items[x].quantity, "questStart");
						};
						document.getElementsByClassName("questStartStackNum")[x].onmouseleave = function () {
							Dom.expand("information");
						};
						document.getElementsByClassName("questStartStackNum")[x].style.left = document.getElementsByClassName("theseQuestStartOptions")[x].offsetLeft + 5 + "px";
						document.getElementsByClassName("questStartStackNum")[x].style.top = document.getElementsByClassName("theseQuestStartOptions")[x].offsetTop + 33 + "px";
					}
				}
			}
			// service step rewards
			let array = document.getElementsByClassName("theseQuestServices");
			if (array.length === 0) {
				array = document.getElementsByClassName("theseQuestOptions");
			}
			else {
				for (let x = 0; x < document.getElementsByClassName("theseQuestServices").length; x++) {
					servicesArray[x].type = "item";
					servicesArray[x].name = "Service Reward";
					document.getElementsByClassName("theseQuestServices")[x].onmouseover = function () {
						Dom.inventory.displayInformation(servicesArray[x], undefined, "questStart");
					};
					document.getElementsByClassName("theseQuestServices")[x].onmouseleave = function () {
						Dom.expand("information");
					};
				}
			}
			// item step rewards
			if (array.length > 0) {
				array[array.length-1].onload = function () {
					for (let x = 0; x < document.getElementsByClassName("theseQuestOptions").length; x++) {
						document.getElementsByClassName("theseQuestOptions")[x].onmouseover = function () {
							Dom.inventory.displayInformation(itemsArray[x].item, itemsArray[x].quantity, "questStart");
						};
						document.getElementsByClassName("theseQuestOptions")[x].onmouseleave = function () {
							Dom.expand("information");
						};
					}

					for (let x = 0; x < document.getElementsByClassName("questStackNum").length; x++) {
						document.getElementsByClassName("questStackNum")[x].onmouseover = function () {
							Dom.inventory.displayInformation(itemsArray[x].item, itemsArray[x].quantity, "questStart");
						};
						document.getElementsByClassName("questStackNum")[x].onmouseleave = function () {
							Dom.expand("information");
						};
						document.getElementsByClassName("questStackNum")[x].style.left = document.getElementsByClassName("theseQuestOptions")[x].offsetLeft + 5 + "px";
						document.getElementsByClassName("questStackNum")[x].style.top = document.getElementsByClassName("theseQuestOptions")[x].offsetTop + 33 + "px";
					}
				}
			}

			Dom.currentlyDisplayed = quest;
		}
	}
	// not enough inventory space
	else if (typeof npc !== "undefined") {
		npc.say(npc.chat.inventoryFull, 0, true);
		Dom.currentNPC = {};
		Dom.currentlyDisplayed = "";
	}
}

// format chat for npc chat banner, so the onFinishDom property can be given to it
Dom.quest.formatBannerChat = function (chat) {
	if (Array.isArray(chat)) {
		if (typeof chat[chat.length-1] === "string") {
			chat[chat.length-1] = {text: chat[chat.length-1]};
		}
	}
	else if (typeof chat === "object") {
		chat = [chat];
	}
	else if (typeof chat === "string") {
		chat = [{text: chat}];
	}
	else {
		console.error("Unknown type of chat", chat);
	}

	return chat;
}

Dom.quest.addReward = function (item, element, className, stackNum) {
	if (item.condition === undefined || item.condition()) {
		if (item.quantity !== undefined && item.quantity !== 1) {
			document.getElementById(element).innerHTML += "<img src=" + item.item.image + " class='"+className+"'><div class='"+stackNum+"'>"+item.quantity+"</div></img>&nbsp;&nbsp;";
		}else {
			document.getElementById(element).innerHTML += "<img src=" + item.item.image + " class='"+className+"'><div class='"+stackNum+"'></div></img>&nbsp;&nbsp;";
		}
		if (item.chance !== undefined) {
			let array = document.getElementById(element).getElementsByClassName(stackNum);
			array[array.length-1].innerHTML = item.chance+"%<br>"+array[array.length-1].innerHTML;
			array[array.length-1].style.marginTop = "-23px";
			//if (item.quantity !== undefined && item.quantity !== 1) {
				//array[array.length-1].style.marginLeft = "8px";
			//}
		}
	}
}

// called after quest NPC's dialogue for everything other than starting quest (where quest.start is instead called)
// variable incrementing, removing items, showing page, etc
// this function itself handles everything with the page; acceptRewards (which this calls) handles everything that's not to do with page
Dom.quest.progress = function (quest, npc, step, finish) {
	if (Dom.changeBook("questFinish", npc)) {//, true/*false*/, true)) {
		if (finish) {
			Dom.elements.questFinishQuest.innerHTML = "Quest finish: " + quest.quest;
		}
		else {
			Dom.elements.questFinishQuest.innerHTML = "Quest progress: " + quest.quest;
		}

		// increment variables etc
		this.acceptRewards(quest, npc, step, finish);

		// display rewards
		Dom.elements.questFinishItems.innerHTML = "";
		Dom.elements.questFinishXP.hidden = true;
		let rewards = quest.steps[step].rewards;
		if (rewards !== undefined) {
			// xp rewards
			if (rewards.xp > 0) {
				Dom.elements.questFinishXP.hidden = false;
				Dom.elements.questFinishXP.innerHTML = rewards.xp;
			}
			Dom.elements.questFinishRewardsTitle.innerHTML = "<br><br><b>Quest Rewards</b><br>";

			// service rewards
			if (rewards.services !== undefined) {
				for (let i = 0; i < rewards.services.length; i++) {
					Dom.elements.questFinishItems.innerHTML += "<img src='./assets/icons/" + rewards.services[i].image + ".png' class='theseQuestFinishServices'></img>&nbsp;&nbsp;";
				}
			}

			// item rewards display
			Dom.elements.questFinishRewardsTitle.innerHTML = "<br><br><b>Quest Rewards</b><br>";
			if (rewards.items !== undefined) {
				for (let i = 0; i < rewards.items.length; i++) {
					if (rewards.items[i].item.type !== "item" || rewards.items[i].item.id !== 1) {
						Dom.quest.addReward(rewards.items[i], "questFinishItems", "theseQuestFinishOptions", "questFinishStackNum");
					}
					else {
						rewards.items.splice(i, 1);
						i--;
					}
				}

				// display warning if there is not enough space to hold all possible rewards
				// (only applies to items given by chance, which is not currently used)
				if (Dom.inventory.requiredSpace(rewards.items, true)) {
					Dom.elements.chanceImage.hidden = true;
					Dom.elements.chance.hidden = true;
				}
				else {
					Dom.elements.chanceImage.hidden = false;
					Dom.elements.chance.hidden = false;
				}

			}
			else {
				Dom.elements.chanceImage.hidden = true;
				Dom.elements.chance.hidden = true;
			}
		}
		else {
			Dom.elements.questFinishRewardsTitle.innerHTML = "";
			//Dom.elements.questFinishStartItems.innerHTML = "";
		}

		// add mouseovers
		let array = document.getElementsByClassName("theseQuestFinishServices");
		if (array.length === 0) {
			array = document.getElementsByClassName("theseQuestFinishOptions");
		}
		if (array.length === 0) {
			array = [document.getElementById("questFinishXP")];
		}
		else {
			for (let x = 0; x < document.getElementsByClassName("theseQuestFinishServices").length; x++) {
				rewards.services[x].type = "item";
				rewards.services[x].name = "Service Reward";
				document.getElementsByClassName("theseQuestFinishServices")[x].onmouseover = function () {
					Dom.inventory.displayInformation(rewards.services[x], undefined, "questFinish");
				};
				document.getElementsByClassName("theseQuestFinishServices")[x].onmouseleave = function () {
					Dom.expand("information");
				};
			}
		}
		array[array.length-1].onload = function () {
			for (let x = 0; x < document.getElementsByClassName("theseQuestFinishOptions").length; x++) {
				document.getElementsByClassName("theseQuestFinishOptions")[x].onmouseover = function () {
					Dom.inventory.displayInformation(rewards.items[x].item, rewards.items[x].quantity, "questFinish");
				};
				document.getElementsByClassName("theseQuestFinishOptions")[x].onmouseleave = function () {
					Dom.expand("information");
				};
			}
			for (let x = 0; x < document.getElementsByClassName("questFinishStackNum").length; x++) {
				document.getElementsByClassName("questFinishStackNum")[x].onmouseover = function () {
					Dom.inventory.displayInformation(rewards.items[x].item, rewards.items[x].quantity, "questFinish");
				};
				document.getElementsByClassName("questFinishStackNum")[x].onmouseleave = function () {
					Dom.expand("information");
				};
				document.getElementsByClassName("questFinishStackNum")[x].style.left = document.getElementsByClassName("theseQuestFinishOptions")[x].offsetLeft + 5 + "px";
				document.getElementsByClassName("questFinishStackNum")[x].style.top = document.getElementsByClassName("theseQuestFinishOptions")[x].offsetTop + 33 + "px";
			}
		}
	}
}

// they've just completed step number "step".
// called by Dom.quest.progress (i.e. when npc dialogue has finished)
// handles everything that's not to do with showing the page
Dom.quest.acceptRewards = function (quest, npc, step, finish) {
	// increment variables
	Player.quests.stepProgress[quest.questArea][quest.id][step] = true;

	// increment timesCompleted variable
	if (quest.repeatTime === "daily" || quest.repeatTime === "repeatable" || quest.numberOfRepeats !== undefined) {
		Player.quests.timesCompleted[quest.questArea][quest.id] = Increment(Player.quests.timesCompleted[quest.questArea][quest.id]);
	}

	// removeItems
	// note that the quest step can still be completed even if this item is not in the player's inventory - this should instead be checked in an objective
	if (typeof quest.steps[step].removeItems !== "undefined") {
		for (let i = 0; i < quest.steps[step].removeItems.length; i++) {
			Dom.inventory.removeById(quest.steps[step].removeItems[i].item.id, quest.steps[step].removeItems[i].item.type, quest.steps[step].removeItems[i].quantity);
		}
	}

	// reputation
	if (quest.steps[step].rewards.reputation !== undefined) {
		for (let i = 0; i < Object.keys(quest.steps[step].rewards.reputation).length; i++) {
			Dom.reputation.give(Object.keys(quest.steps[step].rewards.reputation)[i], quest.steps[step].rewards.reputation[Object.keys(quest.steps[step].rewards.reputation)[i]])
		}
	}

	// if finishing quest, remove it from active quests array
	if (finish) {
		for (let i = 0; i < Player.quests.activeQuestArray.length; i++) {
			if (Player.quests.activeQuestArray[i] === quest.quest) { // checks if they have the same name
				Player.quests.activeQuestArray.splice(i,1);
			}
		}

		Dom.quests.completed(quest);
	}

	// user.progress variables (i.e. for achivements)
	if (quest.repeatTime === "repeatable") {
		User.progress.repeatableQuests = Increment(User.progress.repeatableQuests);
		if (quest.randomGroup !== undefined) {
			Player.quests.randomDailyQuests[quest.randomGroup] = undefined;
		}
	}
	else if (Dom.currentlyDisplayed.repeatTime === "daily") {
		User.progress.dailyQuests = Increment(User.progress.dailyQuests);
	}
	else {
		User.progress.quests = Increment(User.progress.quests);
	}

	quest.wasCompleted = undefined; // for Dom.quests.active

	Player.quests.questLastFinished[quest.questArea][quest.id] = GetFullDate();

	Dom.adventure.update();

	if (quest.steps[step].onFinish !== undefined) {
		// pass in the npc
		quest.steps[step].onFinish(npc);
	}

	Game.getXP(quest.steps[step].rewards.xp, false); // false = not affected by XP Bonus
	Dom.checkProgress();

	// last because it saves
	if (quest.steps[step].rewards !== undefined && quest.steps[step].rewards.items !== undefined) {
		for (let i = 0; i < quest.steps[step].rewards.items.length; i++) {
			if (quest.steps[step].rewards.items[i].item.type !== "item" || quest.steps[step].rewards.items[i].item.id !== 1) {
				if ((quest.steps[step].rewards.items[i].condition === undefined || quest.steps[step].rewards.items[i].condition()) && (quest.steps[step].rewards.items[i].chance === undefined || quest.steps[step].rewards.items[i].chance > Random(0, 99))) {
					Dom.inventory.give(quest.steps[step].rewards.items[i].item, quest.steps[step].rewards.items[i].quantity);

					// items with probability (not used currently)
					if (quest.steps[step].rewards.items[i].chance !== undefined) {
						if (quest.steps[step].rewards.items[i].quantity > 1) {
							Dom.chat.insert("You earned "+quest.steps[step].rewards.items[i].quantity+" rare <strong>"+quest.steps[step].rewards.items[i].item.name+"</strong> from completing this quest.");
						}
						else {
							Dom.chat.insert("You earned a rare <strong>"+quest.steps[step].rewards.items[i].item.name+"</strong> from completing this quest.");
						}
					}
				}
			}
		}
	}
	//quest.steps[step].rewards = Dom.quests.defaultRewards;
}

// called by quest finish DOM button, or navigating away from game
// no longer required, as rewards are now accepted instantly on quest finish
/*Dom.quest.declineRewards = function () {
	let quest = Dom.currentlyDisplayed;
	if (Player.quests.timesCompleted[quest.questArea][quest.id] === 1) {
		Player.quests.timesCompleted[quest.questArea][quest.id] = null;
	}
	else if (Player.quests.timesCompleted[quest.questArea][quest.id] > 1) {
		Player.quests.timesCompleted[quest.questArea][quest.id]--;
	}
	quest.rewards = Dom.quests.defaultRewards;
	Dom.closePage('questFinish');
}*/

// called from onclick button on quest start page
Dom.quest.accept = function () {
	let quest = Dom.currentlyDisplayed;

	// resetting of Player.quests.progress[quest.questArea][quest.id] variables on quest start
	if (quest.resetVariables !== undefined) {
		for (let i = 0; i < quest.resetVariables.length; i++) {
			Player.quests.progress[quest.questArea][quest.id][quest.resetVariables[i]] = undefined;
		}
	}

	// reset objectiveProgress and stepProgress
	Player.quests.objectiveProgress[quest.questArea][quest.id] = [];
	Player.quests.stepProgress[quest.questArea][quest.id] = [];

	// set the npc that the player started the quest from, in case the quest differsOnNpc
	Player.quests.startedFromNpc[quest.questArea][quest.id] = Dom.currentNPC;

	// quest start function
	if (quest.steps[0].onFinish !== undefined) {
		if (Dom.currentNPC.type !== undefined) { // pass in the currentNPC if poss :)
			quest.steps[0].onFinish(Game[Dom.currentNPC.type].find(npc => npc.id === Dom.currentNPC.id));
		}
		else {
			quest.steps[0].onFinish();
		}
	}

	// after onQuestStart because (e.g.) tavern clean-up sets variables in onQuestStart needed for this
	Dom.quests.active(quest);
	Dom.quests.possible();

	// close the quest start page
	// BUG if the onQuestStart changed the page then don't change the page
	if (Dom.currentlyDisplayed === quest) {
		Dom.closePage('questStart');
	}

	// last because it saves
	if (quest.steps[0].rewards !== undefined && quest.steps[0].rewards.items !== undefined) {
		for (let i = 0; i < quest.steps[0].rewards.items.length; i++) {
			if (quest.steps[0].rewards.items[i].condition === undefined || quest.steps[0].rewards.items[i].condition() && (quest.steps[0].rewards.items[i].chance === undefined || quest.steps[0].rewards.items[i].chance > Random(0, 99))) {
				Dom.inventory.give(quest.steps[0].rewards.items[i].item, quest.steps[0].rewards.items[i].quantity);
				if (quest.steps[0].rewards.items[i].chance !== undefined) {
					if (quest.steps[0].rewards.items[i].quantity > 1) {
						Dom.chat.insert("You earned "+quest.steps[0].rewards.items[i].quantity+" rare <strong>"+quest.steps[0].rewards.items[i].item.name+"</strong> from completing this quest.");
					}
					else {
						Dom.chat.insert("You earned a rare <strong>"+quest.steps[0].rewards.items[i].item.name+"</strong> from completing this quest.");
					}
				}
			}
		}
	}
}

//
// quest log
//

// update progress of currently active quests
// a parameter being passed in means this has been called from Dom.quest.accept, and this quest should be added to Player.quests.activeQuestArray
// the parameter should be the quest object, as appears in questdata.js 
Dom.quests.active = function (quest) {
	if (quest !== undefined) {
		Player.quests.activeQuestArray.push(quest.quest);
	}

	Dom.elements.activeQuestBox.style.textAlign = "left";

	// classification of quests
	Dom.quests.activeHTML = {true: "", undefined: "", daily: "",};

	for (let x = 0; x < Player.quests.activeQuestArray.length; x++) {
		let currentQuest = "";

		// find Player.quests.activeQuestArray[x] in questdata, to get properties from it (as Player.quests.activeQuestArray[x] is just the name of the quest)
		for (let i = 0; i < Object.keys(Quests).length; i++) {
			for (let y = 0; y < Quests[Object.keys(Quests)[i]].length; y++) {
				if (Quests[Object.keys(Quests)[i]][y].quest === Player.quests.activeQuestArray[x]) {
					// found the quest :)

					// classification of quests
					if (Quests[Object.keys(Quests)[i]][y].repeatTime === "daily") {
						Quests[Object.keys(Quests)[i]][y].important = "daily";
					}

					// the quest Object is worked out by the name saved in the activeQuestArray
					currentQuest = Quests[Object.keys(Quests)[i]][y];
				}
			}
		}

		if (currentQuest === "") {
			console.error("Quest: "+Player.quests.activeQuestArray[x]+" could not be found.");
			Player.quests.activeQuestArray.splice(x, 1);
		}

		else if (typeof currentQuest.steps === "undefined") {
			// can be removed in the future (added 21/09/2024 because of new quest system)
			console.warn("Quest: "+Player.quests.activeQuestArray[x]+" has not yet been updated to the new quest system, so was abandoned.");
			Player.quests.activeQuestArray.splice(x, 1);
		}

		else if (currentQuest.eventRequirement === undefined || currentQuest.eventRequirement === Event.event) {
			// prepare the quest object by consolidating all the relevant information
			currentQuest = Dom.quest.prepareQuestObject(currentQuest);

			Dom.quests.activeHTML[currentQuest.important] += "<br><br><strong>" + currentQuest.quest + "</strong>";

			let completedObjectives = 0;
			let objectives = currentQuest.objectivesList;

			for (let i = 0; i < objectives.length; i++) {
				// see if the objective is hidden
				let hidden = true;
				if (typeof objectives[i].isHidden === "undefined" && typeof objectives[i].revealStep === "undefined") {
					// never hidden
					hidden = false;
				}
				if (typeof objectives[i].revealStep !== "undefined") {
					// objective is always revealed if this step is completed, otherwise it may be hidden
					if (Player.quests.stepProgress[currentQuest.questArea][currentQuest.id][objectives[i].revealStep]) {
						// the required step has been completed
						hidden = false;
					}
				}
				if (hidden && typeof objectives[i].isHidden !== "undefined") {
					hidden = objectives[i].isHidden(); // doesn't override revealStep
				}

				// display the objective if it's not hidden
				if (!hidden) {
					// see if the objective is completed / what the progress is
					let completed = false;
					if (typeof objectives[i].completeStep !== "undefined") {
						// objective is always completed if this step is completed
						if (!Player.quests.stepProgress[currentQuest.questArea][currentQuest.id][objectives[i].completeStep]) {
							// the required step has not been completed
							completed = true;
						}
					}
					if (!completed && typeof objectives[i].isCompleted !== "undefined") {
						completed = objectives[i].isCompleted(); // gives the progress (as a number or symbol to be displayed, or as true/false)
					}
					else if (!completed && typeof objectives[i].associatedVariable !== "undefined") { // associated variable with this objective - usually Dom.quests.active is called whenever this var is updated
						completed = Player.quests.progress[currentQuest.questArea][currentQuest.id][objectives[i].associatedVariable];
					}

					if (completed === 0) {
						completed = false; // no point displaying it as the player has no progress yet
					}

					// if the progress is a number, and there's an outOf value, display it as "x/y"
					if (typeof objectives[i].outOf !== "undefined" && !isNaN(completed) && completed !== true && completed !== false) {
						if (objectives[i].outOf <= completed) {
							// reached objective - completed!
							completed = true;
						}
						else {
							completed = completed + "/" + objectives[i].outOf;
						}
					}

					Dom.quests.activeHTML[currentQuest.important] += "<br>" + objectives[i].text;
					// now display the progress of this objective
					if (completed === true && i !== objectives.length-1) {
						// objective completed (and it's not the last objective, as this is the turn-in objective)
						Dom.quests.activeHTML[currentQuest.important] += "&#10004;"; // tick
					}
					else if (completed !== false && typeof completed !== "undefined" && i !== objectives.length-1) {
						// objective has progress to be displayed
						Dom.quests.activeHTML[currentQuest.important] += " " + completed;
					}

					// save progress information in Player.quests.objectiveProgress, so it can be eaisly accessed by Game when checking quest finish
					if (completed === true) {
						Player.quests.objectiveProgress[currentQuest.questArea][currentQuest.id][i] = true;
					}
					else {
						Player.quests.objectiveProgress[currentQuest.questArea][currentQuest.id][i] = false;
					}

					// complete the objective in the code
					if (completed === true && i !== objectives.length) {
						completedObjectives++;
					}
				}

			}
			if (currentQuest.autofinish && completedObjectives >= objectives.length) {
				// quest should finish once all objectives are done (wothout needing to speak directly to npc), and all objectives are done
				let npcName = currentQuest.steps[currentQuest.steps.length-1].name;
				Dom.choose.page([{
					npc:npcName,
					buttons: ["Quest Finish: " + currentQuest.quest],
					functions: [Dom.quest.progressFromNpc],
					parameters: [[currentQuest, {name: npcName, imageSrc: currentQuest.finishNpcSrc}]], // finishNpcSrc is optional src to image of npc to be shown
				}]);
			}

			let objectiveProgress = Player.quests.objectiveProgress[currentQuest.questArea][currentQuest.id];

			// set to whether or not this was completed last time this function was called (to track and announce if quest log is updated)
			if (currentQuest.wasCompleted === undefined) {
				currentQuest.wasCompleted = objectiveProgress;
			}
			else {
				for (let i = 0; i < currentQuest.wasCompleted.length; i++) {
					if (currentQuest.wasCompleted[i] !== true && objectiveProgress[i] === true) {
						Dom.chat.insert("Quest log updated");
						currentQuest.wasCompleted = objectiveProgress;
						break;
					}
				}
			}
			if (objectiveProgress[objectiveProgress.length - 1]) {
				currentQuest.completed = true; // not sure the point of this - might be able to remove it 
			}
			else {
				currentQuest.completed = false;
			}
		}
		else {
			// event required for the quest has expired - remove it from the activeQuestArray (effectively abandoning it), and move on
			Dom.chat.insert("Your quest '" + currentQuest.quest + "' has expired.");
			Player.quests.activeQuestArray.splice(x, 1);
		}
	}
	Dom.quests.activeHTML.true += Dom.quests.activeHTML.undefined + Dom.quests.activeHTML.daily;
	Dom.elements.activeQuestBox.innerHTML = Dom.quests.activeHTML.true.substring(8);
	if (Player.quests.activeQuestArray.length === 0) {
		Dom.elements.activeQuestBox.style.textAlign = "center";
		Dom.elements.activeQuestBox.innerText = "You have no active quests";
	}
}

// removes a quest from your active quest array
// quest parameter should be the name of the quest
Dom.quests.abandon = function (quest) {
	for (let i = 0; i < Player.quests.activeQuestArray.length; i++) {
		if (Player.quests.activeQuestArray[i] === quest) {
			Player.quests.activeQuestArray.splice(i, 1);
			Dom.chat.insert("You abandoned your quest '" + quest + "'.");
			break;
		}
	}
	Dom.quests.possible();
	Dom.quests.active();
}

// updates Player.quests.possibleQuestArray, an array of quests that are possible to be started
// then uses this to update all possible quests (quests that can be started) in the quest log
Dom.quests.possible = function () {
	let previousPossible = Player.quests.possibleQuestArray;
	let newPossible = [];
	Player.quests.possibleQuestArray = [];
	Dom.elements.possibleQuestBox.style.textAlign = "left";
	Dom.quests.possibleHTML = {true: "", undefined: "", daily: "",};
	for (let i = 0; i < Object.keys(Quests).length; i++) {
		for (let x = 0; x < Quests[Object.keys(Quests)[i]].length; x++) {
			let questCanBeStarted = true;
			let quest = Quests[Object.keys(Quests)[i]][x];
			// note that none of the following properties should change depending on the npc/timesCompleted ! they should be constant for all versions of this quest
			if (Player.quests.activeQuestArray.includes(quest.quest)) { // quest is already active
				questCanBeStarted = false;
			}
			else if (quest.requirement !== undefined && !quest.requirement()) { // a specific function is not true
				questCanBeStarted = false;
			}
			else if (quest.levelRequirement > Player.level) { // player is not a high enough level
				questCanBeStarted = false;
			}
			else if (!IsContainedInArray(quest.questRequirements, Player.quests.completedQuestArray)) { // quest requirements have not been completed
				questCanBeStarted = false;
			}
			else if (quest.fishingRequirement !== undefined && (Player.stats.fishingSkill > quest.fishingRequirement.max || Player.stats.fishingSkill < quest.fishingRequirement.min)) { // fishing skill not in range
				questCanBeStarted = false;
			}
			else if (quest.eventRequirement !== undefined && quest.eventRequirement !== Event.event) {
				questCanBeStarted = false;
			}
			// groups of daily quests where only one can be done every day
			else if (quest.randomGroup !== undefined) {
				//if (quest.repeatTime === "daily") {
					if (Player.quests.randomDailyQuests[quest.randomGroup] === undefined) {
						Player.quests.possibleQuestArray.push(quest.quest);
						if (!Dom.quests.possibleHTML[quest.important].includes(FromCamelCase(quest.randomGroup)) && quest.repeatTime !== "repeatable") {
							Dom.quests.possibleHTML[quest.important] += "<br><br><strong>" + FromCamelCase(quest.randomGroup) + "</strong><br>" + quest.howToStart;
						}
					}
					questCanBeStarted = false;
				//}
			}
			else if (Player.quests.timesCompleted[quest.questArea][quest.id] >= quest.numberOfRepeats) {
				questCanBeStarted = false;
			}
			// check if it is daily or one time
			else if (quest.repeatTime === undefined) {
				// one time
				if (Player.quests.completedQuestArray.includes(quest.quest)) { // quest has already been completed
					questCanBeStarted = false;
				}
			}
			else if (quest.repeatTime === "daily") {
				// daily
				if (Player.quests.questLastFinished[quest.questArea][quest.id] >= GetFullDate() || Player.quests.timesCompleted[quest.questArea][quest.id] >= quest.numberOfRepeats) { // quest has already been done today (or after today o.O)
					// note that if the quest has not been finished (hence questLastFinished is undefined) the condition will always return false
					questCanBeStarted = false;
				}
			// repeatables can always be started so no code needed
			}

			if (quest.reputationRequirements !== undefined) {
				for (let y = 0; y < Object.keys(quest.reputationRequirements).length; y++) {
					if (quest.reputationRequirements[Object.keys(quest.reputationRequirements)[y]] > Player.reputation[Object.keys(quest.reputationRequirements)[y]].level) {
						questCanBeStarted = false;
					}
				}
			}

			// might share its cooldown with another (usually one-time) quest
			if (typeof quest.shareCooldownWith !== "undefined") { // array of objects
				for (let i = 0; i < quest.shareCooldownWith.length; i++) {
					let checkQuest = quest.shareCooldownWith[i]; // should have questArea and id properties
					if (typeof Player.quests.questLastFinished[checkQuest.questArea] !== "undefined" && Player.quests.questLastFinished[checkQuest.questArea][checkQuest.id] >= GetFullDate()) {
						questCanBeStarted = false;
					}
				}
			}

			if (questCanBeStarted) {
				if (quest.repeatTime !== "repeatable") {
					// if it is not a repeatable add it to the possible quest box
					if (quest.repeatTime === "daily") {
						quest.important = "daily";
					}
					Dom.quests.possibleHTML[quest.important] += "<br><br><strong>" + quest.quest + "</strong><br>" + quest.howToStart; // tbc when the new quest log is implemented
				}
				Player.quests.possibleQuestArray.push(quest.quest);
				if (!previousPossible.includes(quest.quest)) {
					newPossible.push(quest.quest);
					if (quest.quest !== "To the Logging Camp" && !Player.quests.completedQuestArray.includes(quest.quest)) {
						Dom.chat.insert('You have unlocked the quest "' + quest.quest + '"');
					}
				}
			}
		}
	}
	Dom.quests.possibleHTML.true += Dom.quests.possibleHTML.undefined + Dom.quests.possibleHTML.daily;
	Dom.elements.possibleQuestBox.innerHTML = Dom.quests.possibleHTML[true].substring(8);
	if (Player.quests.possibleQuestArray.length === 0) {
		Dom.elements.possibleQuestBox.style.textAlign = "center";
		Dom.elements.possibleQuestBox.innerText = "You have no possible quests";
	}
	Dom.quests.other();
	return newPossible;
}

// updates Player.quests.completedQuestArray, an array of quests that have been completed
// then uses this to update all completed quests in the quest log
// parameter is a quest that was completed right before this function was called. parameter should be a quest object (i.e. as appears in questdata)
Dom.quests.completed = function (quest) {
	let first = true;
	for (let i = 0; i < Player.quests.completedQuestArray.length; i++) {
		if (quest !== undefined && Player.quests.completedQuestArray[i] === quest.quest) {
			// quest has already been completed (daily quest)
			first = false;
		}
	}
	if (quest !== undefined && first) {
		// first time completing the quest which was passed in, so add it to completedQuestArray
		Player.quests.completedQuestArray.push(quest.quest);
	}

	// questbook page styling
	if (Player.quests.completedQuestArray.length > 0) {
		Dom.elements.completedQuestBox.style.textAlign = "left";
		Dom.elements.completedQuestBox.innerText = "";
		for (let i = 0; i < Player.quests.completedQuestArray.length; i++) {
			Dom.elements.completedQuestBox.innerHTML += Player.quests.completedQuestArray[i] + "<br>";
		}
	}
}

// updates the quest log list of all quests that are not possible, active or completed
Dom.quests.other = function () {
	Dom.elements.otherQuestBox.innerHTML = "";
	for (let i = 0; i < Object.keys(Quests).length; i++) {
		for (let x = 0; x < Quests[Object.keys(Quests)[i]].length; x++) {
			if (!Player.quests.activeQuestArray.includes(Quests[Object.keys(Quests)[i]][x].quest) && !Player.quests.possibleQuestArray.includes(Quests[Object.keys(Quests)[i]][x].quest) && !Player.quests.completedQuestArray.includes(Quests[Object.keys(Quests)[i]][x].quest)) {
				Dom.elements.otherQuestBox.innerHTML += Quests[Object.keys(Quests)[i]][x].quest + "<br>";
			}
		}
	}
	if (Dom.elements.otherQuestBox.innerHTML === "") {
		Dom.elements.otherQuestBox.style.textAlign = "center";
		Dom.elements.otherQuestBox.innerText = "You have unlocked every quest";
	}
}


//
// Merchant
//

// sold is array of "sold" objects from areadata which include .item, .cost, etc. (see areadata, or get peter to comment his code!;))
// npc and chat are for display purposes
// the sold objects can contain a .buyButtonText property, which changes the "buy for x gold" text to some string
Dom.merchant.page = function (npc, sold, chat) {
	if (Dom.changeBook("merchantPage", npc)) {//, true/*false*/, true);
		//Dom.changeBook("merchantPage", npc, false); // stops close button being red - TBD make more efficient lol

		// init page
		Dom.elements.merchantPageTitle.innerHTML = npc.name;
		Dom.elements.merchantPageChat.innerHTML = chat;
		Dom.elements.merchantPageOptions.innerHTML = "";
		Dom.elements.merchantPageBuy.innerHTML = "";

		// iterate through each item to be bought
		for (let i = 0; i < sold.length; i++) {
			// item to be bought image
			Dom.elements.merchantPageOptions.innerHTML += "<img src=" + sold[i].item.image + " class='theseOptions' style='border: 5px solid var(--border);'></img><br><br>";

			// buy currency variable
			if (sold[i].costCurrency === undefined) {
				sold[i].costCurrency = 2;
			}

			// buy button text
			let buyButtonText;
			if (typeof sold[i].buyButtonText !== "undefined") {
				buyButtonText = sold[i].buyButtonText;
			}
			else if (sold[i].cost !== 0) {
				buyButtonText = "Buy for: " + sold[i].cost + " " + Items.currency[sold[i].costCurrency].name;
			}
			else {
				buyButtonText = "Get for free";
			}

			// buy button
			Dom.elements.merchantPageBuy.innerHTML += "<div class='buy'>" + buyButtonText + "</div><br>";
		}

		// buy onclicks
		for (let x = 0; x < document.getElementsByClassName("buy").length; x++) {
			document.getElementsByClassName("buy")[x].onclick = function () {
				Dom.merchant.buy(sold[x], x, npc);
			};
		}

		// image hoverovers, repeats for every image
		for (let x = 0; x < document.getElementsByClassName("theseOptions").length; x++) {
			document.getElementsByClassName("theseOptions")[x].onmouseover = function () {
				Dom.inventory.displayInformation(sold[x].item, undefined, "merchantPage");
			};
			document.getElementsByClassName("theseOptions")[x].onmouseleave = function () {
				Dom.expand("information");
			}
		}

		// close button initiation
		Dom.elements.close.onclick = function () {
			Dom.closePage('merchantPage');
			npc.say(npc.chat.shopLeave, 0, true);
		}
	}
}

// called by the onclick of a buy button on Dom.merchant.page
// item is the item object as seen in a merchant's role in area data
// npc is the npc object from game
// index is the index of the item in the list of items sold
Dom.merchant.buy = function (item, index, npc) {
	let itemStillAvailable = true;
	if (typeof item.condition !== "undefined") {
		itemStillAvailable = item.condition();
	}

	if (!itemStillAvailable) {
		// no longer available
		npc.say(npc.chat.noLongerAvailable, 0, true);
		Dom.alert.page("That item is no longer available.", 0, undefined, "merchantPage");
	}
	else if (!Dom.inventory.check(item.costCurrency,"currency",item.cost)) {
		// too poor
		document.getElementsByClassName("buy")[index].style.border = "5px solid red";
		setTimeout(function () {
			document.getElementsByClassName("buy")[index].style.border = "5px solid var(--border)";
		},200);
		npc.say(npc.chat.tooPoor, 0, true);
	}
	else if (!Dom.inventory.requiredSpace([{item: item.item}])) {
		// not enough space
		npc.say(npc.chat.inventoryFull, 0, true);
		Dom.alert.page("You do not have enough space in your inventory for that item.", 0, undefined, "merchantPage");
	}
	else {
		// buy the item!

		// flash buy button brown
		document.getElementsByClassName("buy")[index].style.backgroundColor = "#bb9933";
		setTimeout(function () {
			document.getElementsByClassName("buy")[index].style.backgroundColor = "var(--bottom)";
		},200);

		Dom.inventory.removeById(item.costCurrency,"currency",item.cost);
		item.item = Object.assign({}, item.item);
		item.item.unconsumable = item.unconsumable;
		item.item.quest = item.quest;
		item.item.removeOnAbandon = item.removeOnAbandon;
		Dom.inventory.give(item.item);

		// chat message
		if (item.cost === 0) {
			Dom.chat.insert("You got a " + item.item.name + ".", 100);
		}
		else {
			Dom.chat.insert("You bought a " + item.item.name + ".", 100);
		}

		if (typeof item.buyFunction !== "undefined") {
			item.buyFunction(item);
		}
	}
}

// chooses certain items from an array of items to be sold by a merchant
// items is an array of item objects
// date is an integer and changes whenever the items sold should be changed (e.g. with date)
// date should be a positive integer
// numberOfItems is the number of items from the array that should be sold (i.e. that are returned)
Dom.merchant.chooseItems = function (items, date, numberOfItems) {
    if (numberOfItems >= items.length){
        console.warn("numberOfItems is bigger than items.length");
        numberOfItems = items.length;
    }

	// ensure that date is a positive integer
	date = Math.round(date);
	if (date < 1) {
		console.warn("date should be a positive integer");
		date = 1;
	}

	// index of first chosen item
	// if this is too big, it is looped back in for loop
    let itemsChosen = numberOfItems*(date - 1);

	// array of items that are chosen
    let newItems = [];

	// pick items
    for (let i = 0; i < numberOfItems; i++) {
		// index of item chosen
        let itemIndex = i + itemsChosen;
		// make sure itemIndex refers to a valid item in array
        itemIndex = itemIndex % items.length;
		// push item to array
        newItems.push(items[itemIndex]);
    }

    return newItems;
}

Dom.identifier.displayed = 0;

// toggle item display to the left
Dom.identifier.left = function (npc) {
	if (Dom.identifier.displayed !== 0) {
		Dom.identifier.displayed--;
	}else {
		Dom.identifier.displayed = Dom.identifier.unId.length-1;
	}
	Dom.identifier.page(npc, true);
}

// toggle item display to the right
Dom.identifier.right = function (npc) {
	if (Dom.identifier.displayed !== Dom.identifier.unId.length-1) {
		Dom.identifier.displayed++;
	}else {
		Dom.identifier.displayed = 0;
	}
	Dom.identifier.page(npc, true);
}

Dom.identifier.check = function () {
	Dom.identifier.unId = [];
	for (let i = 0; i < Player.inventory.items.length; i++) {
		if (Player.inventory.items[i].unidentified) {
			Dom.identifier.unId.push(Player.inventory.items[i]);
		}
	}
	if (Dom.identifier.unId.length > 0) {
		return true;
	}else {
		return false;
	}
}

// display the identifier page!
// refresh is set to true if the page is already open but needs to be updated (i.e. called from identifier.left)
Dom.identifier.page = function (npc, refresh) {
	let pageOpened = Dom.changeBook("identifierPage", npc);
	if (pageOpened || refresh) { // check whether page's display actually needs to be refreshed, or whether the page has just been closed
		Dom.elements.identifierPageChat.innerHTML = npc.chat.identifierGreeting;
		Dom.elements.identifierPageOption.innerHTML = "<img src=" + Dom.identifier.unId[Dom.identifier.displayed].image + " class='theseOptions' style='padding: 0px; margin: 0px; border: 5px solid var(--border); height: 50px; width: 50px;'></img>";
		Dom.elements.identifierPageOption.onmouseover = function () {
			Dom.inventory.displayInformation(Dom.identifier.unId[Dom.identifier.displayed], undefined, "identifierPage");
		}
		Dom.elements.identifierPageOption.onmouseleave = function () {
			Dom.expand("information");
		}
		Dom.elements.identifierPageBuy.style.visibility = "visible";
		Dom.elements.identifierPageBuy.onclick = function () {
			Dom.identifier.identify(npc);
		}
		Dom.elements.leftArrow.onclick = function () {
			Dom.identifier.left(npc);
		}
		Dom.elements.rightArrow.onclick = function () {
			Dom.identifier.right(npc);
		}
		Dom.elements.identifierPageBuy.innerHTML = "Identify for: 1 gold";
	}
}

// identify the currently displayed item
// note item rarity is predetermined
Dom.identifier.identify = function (npc) {
	if (Dom.inventory.check(2,"currency",1)/* && Dom.identifier.unId.length !== 0*/) {
		// sufficient currency; identify th eitem
		Dom.inventory.removeById(2,"currency",1);
		Dom.closePage("identifierPage")//, true, true);
		Dom.changeBook("identifiedPage", npc)//, true, true);
		Dom.currentlyDisplayed = npc.name;

		for (let i = 0; i < Player.inventory.items.length; i++) {
			if (Player.inventory.items[i].unidentified && Player.inventory.items[i].tier === Dom.identifier.unId[Dom.identifier.displayed].tier && Player.inventory.items[i].area === Dom.identifier.unId[Dom.identifier.displayed].area && Player.inventory.items[i].rarity === Dom.identifier.unId[Dom.identifier.displayed].rarity && Player.inventory.items[i].type === Dom.identifier.unId[Dom.identifier.displayed].type) {
				Player.inventory.items[i] = {};
				Dom.elements.itemInventory.getElementsByTagName("td")[i].innerHTML = "";
				break; // stops multiple items being removed
			}
		}

		Dom.identifier.array = []; // array of possible identified items

		if (Dom.identifier.unId[Dom.identifier.displayed].rarity === "common") {
			Dom.elements.identifiedPageChat.innerHTML = npc.chat.identifyCommon;
		}
		else if (Dom.identifier.unId[Dom.identifier.displayed].rarity === "unique") {
			Dom.elements.identifiedPageChat.innerHTML = npc.chat.identifyUnique;
		}
		else if (Dom.identifier.unId[Dom.identifier.displayed].rarity === "mythic") {
			Dom.elements.identifiedPageChat.innerHTML = npc.chat.identifyMythic;
		}
		else {
			Dom.elements.identifiedPageChat.innerHTML = npc.chat.identifyJunk;
		}

		// repeats for every item of the same catergory (e.g. bow)
		for (let i = 2; i < Items[Object.keys(Items)[Dom.identifier.unId[Dom.identifier.displayed].typeNum]].length; i++) {
			if (Items[Object.keys(Items)[Dom.identifier.unId[Dom.identifier.displayed].typeNum]][i].tier === Dom.identifier.unId[Dom.identifier.displayed].tier && Items[Object.keys(Items)[Dom.identifier.unId[Dom.identifier.displayed].typeNum]][i].unidentifiedArea !== undefined && Items[Object.keys(Items)[Dom.identifier.unId[Dom.identifier.displayed].typeNum]][i].unidentifiedArea.includes(Dom.identifier.unId[Dom.identifier.displayed].area) && Items[Object.keys(Items)[Dom.identifier.unId[Dom.identifier.displayed].typeNum]][i].rarity === Dom.identifier.unId[Dom.identifier.displayed].rarity) {
				// add it to the array of possible items if it matches the stats
				Dom.identifier.array.push(Items[Object.keys(Items)[Dom.identifier.unId[Dom.identifier.displayed].typeNum]][i]);
			}
		}
		Dom.identifier.num = Random(0, Dom.identifier.array.length-1);
		Dom.identifier.item = Dom.identifier.array[Dom.identifier.num]; // a random item from the array of possible items
		Dom.elements.identifiedPageOption.innerHTML = "<img src=" + Dom.identifier.item.image + " class='theseOptions' style='padding: 0px; margin: 0px; border: 5px solid var(--border); height: 50px; width: 50px;'></img>";
		Dom.inventory.give(Dom.identifier.item);
		Dom.elements.identifiedPageOption.getElementsByTagName("img")[0].onmouseover = function () {
			Dom.inventory.displayInformation(Dom.identifier.array[Dom.identifier.num], undefined, "identifiedPage");
		}
		Dom.elements.identifiedPageOption.getElementsByTagName("img")[0].onmouseleave = function () {
			Dom.expand("information");
		}
		Dom.elements.identifiedPageBack.onclick = function () {
			Dom.identifier.displayed = 0;
			if (Dom.identifier.check()) {
				Dom.closePage("identifiedPage", true);
				Dom.identifier.page(npc/*, true*/);
			}
			else {
				Dom.closePage("identifiedPage");
			}
		}
		Dom.identifier.unId.splice(Dom.identifier.displayed, 1);
		Game.saveProgress("auto");
	}

	else/* if (Dom.identifier.unId.length !== 0)*/ {
		// insufficient currency!
 		Dom.elements.identifierPageBuy.style.border = "5px solid red";
		setTimeout(function () {
			Dom.elements.identifierPageBuy.style.border = "5px solid var(--border)";
		}, 200);
		npc.say(npc.chat.tooPoor, 0, true);
	}
}

// returns the position of the item, or false if it couldn't be added (inventory full)
Dom.inventory.give = function (item, num, position, noSave, noArchaeology) {
	let added = false; // true if you received the item and returned at the end of the function
	if (num === undefined) {
		num = 1;
	}
	if (position === undefined) {
		for (let y = 0; y < num; y++) {
			let add = true; // true if the item still needs to be added
			for (let i = 0; i < Player.inventory.items.length; i++) {
				// if the item is already in the inventory
				if (Player.inventory.items[i].id === item.id && Player.inventory.items[i].type === item.type) {
					if (Player.inventory.items[i].stacked === undefined) {
						Player.inventory.items[i].stacked = 1;
					}
					if (Player.inventory.items[i].stacked < Player.inventory.items[i].stack) {
						// adds the item to the existing stack
						added = true;
						Player.inventory.items[i].stacked++;
						Dom.elements.itemInventory.getElementsByTagName("td")[i].innerHTML = "<img src='"+Player.inventory.items[i].image+"' draggable='true' ondragstart='Dom.inventory.drag(event, Player.inventory.items, "+i+")' "+(Player.inventory.items[i].onClick !== undefined ? "onclick='Player.inventory.items["+i+"].onClick("+i+")'" : "") +"></img><div class='stackNum' id='stackNum"+i+"'>"+Player.inventory.items[i].stacked+"</div>";
						add = false;
					}
				}
			}
			// if the item still needs to be added
			if (add) {
				for (let i = 0; i < Player.inventory.items.length; i++) {
					// if the slot is empty then the item is added
					if (Player.inventory.items[i].image === undefined) {

						// if it is the bag slot then remove the background
						/*if (i === 5) {
							Dom.elements.itemInventory.getElementsByTagName("td")[5].style.backgroundImage = "none";
						}*/

						added = true;
						position = i;
						Player.inventory.items[i] = Object.assign({}, item);
						if (Player.inventory.items[i].maxCharges !== undefined) {
							Player.inventory.items[i].charges = Player.inventory.items[i].maxCharges;
						}
						if (Array.isArray(Player.inventory.items[i].lore)) {
							let lores = item.lore;
							if (Player.inventory.items[i].loreEventRequirements !== undefined) {
								for (let x = 0; x < Player.inventory.items[i].lore.length; x++) {
									if (Player.inventory.items[i].loreEventRequirements[x] !== "" && Player.inventory.items[i].loreEventRequirements[x] !== Event.event) {
										lores.splice(x, 1);
									}
								}
							}
							Player.inventory.items[i].lore = lores[Random(0, lores.length-1)];
						}

						if (item.countdown !== undefined) {
							Player.inventory.items[i].countdownStart = GetFullDateTime();
						}

						if (!noArchaeology && item.set !== undefined && !User.archaeology.includes(Items.set[item.set].name)) {
							let obtained = true;
							for (let x = 0; x < Items.set[item.set].armour.length; x++) {
								if (Dom.inventory.find(-1, -1, undefined, undefined, Items.set[item.set].armour[x]).length === 0) {
									obtained = false;
								}
							}
							if (obtained) {
								User.archaeology.push(Items.set[item.set].name);
							}
						}
						Dom.inventory.prepare(Player.inventory.items, i, Dom.elements.itemInventory.getElementsByTagName("td")[i]);

						// if a bag is being given to the bag slot
						/*if (i === 5 && item.type === "bag") {
							for (let x = 0; x < Math.floor(item.size/6); x++) {
								let str = "<tr>";
								for (let inv = Player.inventory.items.length; inv < Player.inventory.items.length+6; inv++) {
									str += '<td ondrop="Dom.inventory.drop(event, Player.inventory.items, '+inv+');Game.inventoryUpdate(event)" ondragover="Dom.inventory.allowDrop(event)" onmouseover="Dom.inventory.displayInformation(Player.inventory.items['+inv+'], undefined, \'inventoryPage\')" onmouseleave="Dom.expand(\'information\')" ondrag="Dom.expand(\'information\')" onclick="Game.inventoryUpdate()"></td>';
								}
								Dom.elements.itemInventory.innerHTML += str+"</tr>";
								Player.inventory.items.push({},{},{},{},{},{});
							}
							Dom.inventory.update();
						}*/

						// if the item has not been obtained before and is in archaeology, add it to archaeology progress
						if (!noArchaeology && (item.type === "helm" || item.type === "chest" || item.type === "greaves" || item.type === "boots" || item.type === "sword" || item.type === "staff" || item.type === "bow" || item.type === "rod" || item.type === "trinket") && !User.archaeology.includes(item.name) && item.name !== undefined) {
							User.archaeology.push(item.name);
						}

						// special images to be loaded with item
						Dom.inventory.loadItemRequiredImages(item);

						break; // stops the item being placed in multiple slots
					}
				}
			}
		}
	// specific position
	}
	else {
		added = true;
		Player.inventory.items[position] = Object.assign({},item);
		if (Player.inventory.items[position].maxCharges !== undefined) {
			Player.inventory.items[position].charges = Player.inventory.items[position].maxCharges;
		}
		if (Array.isArray(Player.inventory.items[position].lore)) {
			let lores = item.lore;
			if (Player.inventory.items[position].loreEventRequirements !== undefined) {
				for (let x = 0; x < Player.inventory.items[position].lore.length; x++) {
					if (Player.inventory.items[position].loreEventRequirements[x] !== "" && Player.inventory.items[position].loreEventRequirements[x] !== Event.event) {
						lores.splice(x, 1);
					}
				}
			}
			Player.inventory.items[position].lore = lores[Random(0, lores.length-1)];
		}
		if (!noArchaeology && item.set !== undefined && !User.archaeology.includes(Items.set[item.set].name)) {
			let obtained = true;
			for (let x = 0; x < Items.set[item.set].armour.length; x++) {
				if (Dom.inventory.find(-1, -1, undefined, undefined, Items.set[item.set].armour[x]).length === 0) {
					obtained = false;
				}
			}
			if (obtained) {
				User.archaeology.push(Items.set[item.set].name);
			}
		}
		Player.inventory.items[position].stacked = num;
		Dom.inventory.prepare(Player.inventory.items, position, Dom.elements.itemInventory.getElementsByTagName("td")[position]);

		// if a bag is being given to the bag slot
		/*if (position === 5 && item.type === "bag") {
			for (let x = 0; x < Math.floor(item.size/6); x++) {
				let str = "<tr>";
				for (let inv = Player.inventory.items.length; inv < Player.inventory.items.length+6; inv++) {
					str += '<td ondrop="Dom.inventory.drop(event, Player.inventory.items, '+inv+');Game.inventoryUpdate(event)" ondragover="Dom.inventory.allowDrop(event)" onmouseover="Dom.inventory.displayInformation(Player.inventory.items['+inv+'], undefined, \'inventoryPage\')" onmouseleave="Dom.expand(\'information\')" ondrag="Dom.expand(\'information\')" onclick="Game.inventoryUpdate()"></td>';
				}
				Dom.elements.itemInventory.innerHTML += str+"</tr>";
				Player.inventory.items.push({},{},{},{},{},{});
			}
			Dom.inventory.update();
		}*/
		if (!noArchaeology && (item.type === "helm" || item.type === "chest" || item.type === "greaves" || item.type === "boots" || item.type === "sword" || item.type === "staff" || item.type === "bow") && !User.archaeology.includes(item.name) && item.name !== undefined) {
			User.archaeology.push(item.name);
		}
	}

	// increment any user progress variables
	if (item.name === "Fishing Seal") {
		User.progress.seals = Increment(User.progress.seals, num);
	}

	Dom.hotbar.update();
	Dom.checkProgress();

	// tutorial
	if (Dom.inventory.checkSpace() === 0) {
		Dom.instructions.page(14);
	}

	// save
	if (typeof Game !== "undefined" && Game.hero !== undefined && !noSave) {
		Game.saveProgress("auto");
	}

	// onGive function
	if (added) {

		if (item.onGive !== undefined) {
			item.onGive();
		}

		Game.inventoryUpdate();

		return position;
	}
	else {
		return false;
	}
}

// load an item's additional required images (for use on the canvas), and don't let it be used until they have loaded
// the parameter should be the item object
Dom.inventory.loadItemRequiredImages = function (item) {
	if (item.requiredImages !== undefined) {
		// item has image(s) that should be loaded with it

		// item cannot be used until images are loaded
		item.imageLoading = true;

		let p = Loader.loadMultipleImages(item.requiredImages, false);
		// tbd - this is inefficient since it never deletes the image
		// but it should delete the image when the item is no longer in inventory

		// allow item to be used once image(s) have been loaded
		Promise.all(p).then(function () {
			item.imageLoading = false;
		}.bind(this));
	}
}

Dom.inventory.food = function (inventoryPosition) {
	if (!Game.hero.hasStatusEffectType("food")) {
		// update achievement progress
		if (Player.inventory.items[inventoryPosition].secondClick !== undefined) {
			Player.inventory.items[inventoryPosition].secondClick(inventoryPosition);
		}
		// eat the item
		Game.statusEffects.food({
			target: Game.hero,
			effectTitle: Player.inventory.items[inventoryPosition].name,
			healthRestore: Player.inventory.items[inventoryPosition].healthRestore,
			time: Player.inventory.items[inventoryPosition].healthRestoreTime,
			bloodMoonRestore: Player.inventory.items[inventoryPosition].bloodMoonRestore,
		});
		// remove the item
		Dom.inventory.remove(inventoryPosition);
	}
}

Dom.inventory.teleport = function (inventoryPosition) {
	let to = Player.inventory.items[inventoryPosition].teleport;
	Game.loadArea(to.location, {x: to.x, y: to.y});
	Dom.inventory.displayInformation(Player.inventory.items[inventoryPosition], undefined, "inventoryPage", undefined, true);
}

Dom.inventory.chooseStats = function (inventoryPosition) {
	// item inventory
	if (!isNaN(inventoryPosition)) {
		// not currently used because ocean set is equipped onClick
		let values = "";
		let str = Player.inventory.items[inventoryPosition].chooseStats;

		// if there is at least 1 option
		if (Object.keys(str).length > 0) {
			let ev = [[]];
			let id = Dom.alert.array.length;
			// repeats for each chooseStat
			for (let i = 0; i < Object.keys(str).length; i++) {
				if (Object.keys(str)[i] === Player.inventory.items[inventoryPosition].chosenStat) {
					values += "<strong><span onclick='Dom.alert.array["+id+"].target(Dom.alert.array["+id+"].ev[0], "+i+")'>"+Dom.inventory.stats(FromCamelCase(Object.keys(str)[i]), str[Object.keys(str)[i]], str) + "</span></strong>";
				}
				else {
					values += "<span onclick='Dom.alert.array["+id+"].target(Dom.alert.array["+id+"].ev[0], "+i+")'>"+Dom.inventory.stats(FromCamelCase(Object.keys(str)[i]), str[Object.keys(str)[i]], str) + "</span>";
				}
				ev[0].push([Object.keys(str)[i], str[Object.keys(str)[i]]]);
			}
			Dom.alert.page("Choose an effect:", "text", values, "inventoryPage", {
				target: function (ev, num) {
					if (Player.inventory.items[inventoryPosition].chosenStat !== undefined) {
						delete Player.inventory.items[inventoryPosition].stats[Player.inventory.items[inventoryPosition].chosenStat];
					}
					Player.inventory.items[inventoryPosition].chosenStat = ev[num][0];
					Player.inventory.items[inventoryPosition].stats[ev[num][0]] = ev[num][1];
				},
				ev: ev,
			});
			return true;
		}
	}
	// equipped
	else {
		let values = "";
		let str = Player.inventory[inventoryPosition].chooseStats;

		// if there is at least 1 option
		if (Object.keys(str).length > 0) {
			let ev = [[]];
			let id = Dom.alert.array.length;
			// repeats for each chosenStat
			for (let i = 0; i < Object.keys(str).length; i++) {
				if (Object.keys(str)[i] === Player.inventory[inventoryPosition].chosenStat) {
					values += "<strong><span onclick='Dom.alert.array["+id+"].target(Dom.alert.array["+id+"].ev[0], "+i+")'>"+Dom.inventory.stats(FromCamelCase(Object.keys(str)[i]), str[Object.keys(str)[i]], str) + "</span></strong>";
				}
				else {
					values += "<span onclick='Dom.alert.array["+id+"].target(Dom.alert.array["+id+"].ev[0], "+i+")'>"+Dom.inventory.stats(FromCamelCase(Object.keys(str)[i]), str[Object.keys(str)[i]], str) + "</span>";
				}
				ev[0].push([Object.keys(str)[i], str[Object.keys(str)[i]]]);
			}
			Dom.alert.page("Choose an effect:", "text", values, "inventoryPage", {
				target: function (ev, num) {
					Dom.inventory.beforeChangedStats();
					let setNum = 0;
					if (Player.inventory[inventoryPosition].set !== undefined) {
						for (let i = 0; i < Items.set[Player.inventory[inventoryPosition].set].armour.length; i++) {
							for (let x = 0; x < 4; x++) {
								if (Player.inventory[Object.keys(Player.inventory)[x]].name === Items.set[Player.inventory[inventoryPosition].set].armour[i]) {
									setNum++;
									break;
								}
							}
						}
					}
					if (Player.inventory[inventoryPosition].chosenStat !== undefined) {
						Player.stats[Player.inventory[inventoryPosition].chosenStat] -= parseFloat(Player.inventory[inventoryPosition].stats[Player.inventory[inventoryPosition].chosenStat]);
						if (setNum !== 0) {
							if (setNum === Items.set[Player.inventory[inventoryPosition].set].armour.length) {
								let x = Items.set[Player.inventory[inventoryPosition].set].multiplier.findIndex(multiplier => multiplier.stat === "chosenStat");
								if (x !== -1) {
									Player.stats[Player.inventory[inventoryPosition][Items.set[Player.inventory[inventoryPosition].set].multiplier[x].stat]] -= parseFloat(Player.inventory[inventoryPosition].stats[Player.inventory[inventoryPosition][Items.set[Player.inventory[inventoryPosition].set].multiplier[x].stat]]);
								}
							}
							delete Player.inventory[inventoryPosition].stats[Player.inventory[inventoryPosition].chosenStat];
						}
					}
					Player.inventory[inventoryPosition].chosenStat = ev[num][0];
					Player.stats[ev[num][0]] += parseFloat(ev[num][1]);
					Player.inventory[inventoryPosition].stats[ev[num][0]] = ev[num][1];
					if (setNum !== 0) {
						if (setNum === Items.set[Player.inventory[inventoryPosition].set].armour.length) {
							let x = Items.set[Player.inventory[inventoryPosition].set].multiplier.findIndex(multiplier => multiplier.stat === "chosenStat");
							if (x !== -1) {
								Player.stats[Player.inventory[inventoryPosition][Items.set[Player.inventory[inventoryPosition].set].multiplier[x].stat]] += parseFloat(Player.inventory[inventoryPosition].stats[Player.inventory[inventoryPosition][Items.set[Player.inventory[inventoryPosition].set].multiplier[x].stat]]);
							}
						}
					}
					Dom.inventory.afterChangedStats();
				},
				ev: ev,
			});
			return true;
		}
	}
}

Dom.inventory.constructUnId = function (area,tier) {
	let tempUnId = new UnId(area,tier);
	Dom.inventory.give(tempUnId);
}

// start a cutscene for a certain period of time
// a cutscene stops any other NPCs from being spoken to
Dom.cutscene = function (duration) {
	Dom.chat.cutsceneEnd = Date.now() + duration;
    Dom.currentlyDisplayed = "cutscene";
    setTimeout(function () {
        Dom.currentlyDisplayed = "";
    }, duration);
}

Dom.inventory.disposeConfirm = function (all) {

	if (Dom.inventory.fromArray !== Player.inventory) {
		// item inventory or bank

		// if you dispose of a BANK bag then reset the bank
		if (Dom.inventory.fromId <= 5 && Dom.inventory.fromArray === Player.bank.items) {
			Player.bank.items.splice(Player.bank.items.length - Player.bank.items[Dom.inventory.fromId].size);
			Dom.bank.page();
			Dom.elements.bankPageInventory.getElementsByTagName("td")[Dom.inventory.fromId].style.backgroundImage = "url('assets/items/bag/1.png'), url('assets/interface/gearBackground.png')";
		}

		Dom.inventory.remove(Dom.inventory.fromId, all, Dom.inventory.fromArray);
	}
	else {
		// equipment slots

		// if you dispose of the INVENTORY bag then reset the inventory
		if (Dom.inventory.fromId === "bag") {//aaaaaaaaaa check fromId works like this :)
			let str = "<tr>";
			for (let inv = 0; inv < 6; inv++) {
				str += '<td ondrop="Dom.inventory.drop(event, Player.inventory.items, '+inv+');Game.inventoryUpdate(event)" ondragover="Dom.inventory.allowDrop(event)" onmouseover="Dom.inventory.displayInformation(Player.inventory.items['+inv+'], undefined, \'inventoryPage\')" onmouseleave="Dom.expand(\'information\')" ondrag="Dom.expand(\'information\')" onclick="Game.inventoryUpdate()"></td>';
			}
			Dom.elements.itemInventory.innerHTML = str+"</tr>";
			for (let x = 0; x < 6; x++) {
				if (Player.inventory.items[x].image !== undefined) {
					Dom.elements.itemInventory.getElementsByTagName("td")[x].innerHTML = '<img src="'+Player.inventory.items[x].image+'" draggable="true" ondragstart="Dom.inventory.drag(event, Player.inventory.items, '+x+')"></img>';
					if (Player.inventory.items[x].stacked !== undefined && Player.inventory.items[x].stacked !== 1) {
						Dom.elements.itemInventory.getElementsByTagName("td")[x].innerHTML += "<div class='stackNum' id='stackNum"+x+"'>"+Player.inventory.items[x].stacked+"</div>";
					}
				}
			}
			Player.inventory.items.splice(6);//aaaaaaaaaaaaaaaaaaaaaa needs changing?

			Dom.inventory.update();
		}

		Dom.inventory.removeEquipment(Dom.inventory.fromArray[Dom.inventory.fromId]);
		Dom.inventory.fromArray[Dom.inventory.fromId] = {};
		Dom.inventory.fromElement.innerHTML = "";
	}
	Game.inventoryUpdate();
	Game.equipmentUpdate();
}

// called upon dropping an item/spell on the canvas or inventory/loot/bank/trade page
// note that this also calls when dropping on something on that page (i.e. on an inventory slot) hence the if statements
Dom.inventory.dispose = function (ev) {

	let page = "inventoryPage";
	if (Dom.inventory.fromArray === Player.bank.items) {
		page = "bankPage";
	}

	// first check they're not dropping it onto an inventory slot
	if (Dom.inventory.fromId !== undefined && ev.target.id !== "helm" && ev.target.id !== "chest" && ev.target.id !== "greaves" && ev.target.id !== "boots" && ev.target.id !== "weapon" && ev.target.id !== "mountSlotLocked" && ev.target.id !== "mountSlotUnlocked" && ev.target.id !== "bag" && !ev.target.classList.contains("stackNum")) {//aaaaaaaaa also check they're not dropping onto acccessory slot

		// can't dispose quest items
		let deniedQuest = false;
		if (Dom.inventory.fromArray[Dom.inventory.fromId].quest !== undefined && (Dom.inventory.fromArray[Dom.inventory.fromId].quest === true || Dom.inventory.fromArray[Dom.inventory.fromId].quest())) {
			// if it is a quest item
			deniedQuest = true;
		}

		// can't dispose bags if the inventory is too full
		let deniedBag = false; // tracks if we're not allowed to remove a bag because of inventory space
		if (Dom.inventory.fromId === "bag") {
			// disposing a bag from the inventory
			// check that all item slots 6 and onwards are empty, otherwise we wouldn't be able to dispose of a bag
			for (let i = 6; i < Player.inventory.items.length; i++) {
				if (Player.inventory.items[i] !== undefined && Player.inventory.items[i].image !== undefined) {
					// it is NOT safe to dispose of a bag - there is something in a slot!
					deniedBag = true;
					break;
				}
			}
		}
		else if (Dom.inventory.fromId < 6 && Dom.inventory.fromArray === Player.bank.items) { // <6 because there are 6 bag slots in the bank (the first 6 item slots)
			// disposing a bag from the bank
			let bagSpace = Player.bank.items[Dom.inventory.fromId].size;
			for (let i = Player.bank.items.length-bagSpace; i < Player.bank.items.length; i++) {
				if (Player.bank.items[i] !== undefined && Player.bank.items[i].image !== undefined) {
					// it is NOT safe to dispose of a bag - there is something in a slot!
					deniedBag = true;
					break;
				}
			}
		}

		ev.preventDefault(); // allows the item to drop

		// if img or td then it is an inventory slot so don't dispose
		if (ev.target.tagName !== "IMG" && ev.target.tagName !== "TD") {

			if (!deniedBag && !deniedQuest) {
				// allowed to dispose of the item!
				if (Dom.inventory.fromArray[Dom.inventory.fromId].stacked > 1) { // stacked item
					Dom.alert.page("How many would you like to drop?", 3, undefined, page, {
						target: Dom.inventory.disposeConfirm,
					});
				}
				else {
					Dom.alert.page("Are you sure you want to drop this item? It will be lost forever!", 2, undefined, page, {
						target: Dom.inventory.disposeConfirm,
					});
				}
			}
			else {
				// not allowed to dispose of the item (either because it's a bag or a quest item), so tell them why
				if (deniedBag) {
					Dom.alert.page("Move some items to the bank, sell or dispose of them before you can do that.", 0, undefined, page);
				}
				else { // deniedQuest must be true
					Dom.alert.page("You cannot dispose of this item because you need it for a quest.", 0, undefined, page);
				}
			}
		}
	}
}

// remove an item by its id and type
// returns true is successful or false if not successful
// set num to true to remove all items
Dom.inventory.removeById = function (ID, type, num, array, quest) {

	let equip = false;
	if (array === undefined) {
		array = Player.inventory.items;
		equip = true;
	}

	let remove = false;
	for (let i = 0; i < array.length; i++) {
		if (array[i].type === type && array[i].id === ID && (!quest || array[i].quest === true || (array[i].quest !== undefined && array[i].quest()))) {
			Dom.inventory.remove(i, num);
			remove = true;
			if (num !== "all") {
				break; // stops multiple items being removed
			}
		}
	}
	// if the item has not yet been removed check the equipped slots
	if (!remove && equip) {
		for (let i = 0; i < Object.keys(Player.inventory).length-1; i++) {
			let equipmentKey = Object.keys(Player.inventory)[i];
			if (Player.inventory[equipmentKey].type === type && Player.inventory[equipmentKey].id === ID) {
				Dom.inventory.removeEquipment(Player.inventory[equipmentKey]);
				Player.inventory[equipmentKey] = {};
				Game.equipmentUpdate();
				document.getElementById(equipmentKey).innerHTML = "";
				remove = true;
				break; // stops multiple items being removed
			}
		}
	}
	Dom.expand("information");
	Dom.hotbar.update();
	Dom.checkProgress();
	if (remove) {
		return true;
	}
	else {
		return false;
	}
}

// array is optional array that the item is removed from (inventory by default)
// num is the index in array that stuff is removed from
// all is the number to be removed, or removes all of the items if it is set to true
Dom.inventory.remove = function (num, all, array) {

	// loot (overwritten if not loot)
	let element = "loot";
	let stackNum = "lootStackNum";

	// inventory
	if (array === undefined || array === Player.inventory.items) {
		array = Player.inventory.items;
		element = "itemInventory";
		stackNum = "stackNum";
	}
	// bank
	else if (array === Player.bank.items) {
		element = "bankPageInventory";
		stackNum = "bankStackNum";
	}

	if (array[num].image !== undefined && !array[num].unidentified && Items[array[num].type][array[num].id].onRemove !== undefined) {
		Items[array[num].type][array[num].id].onRemove();
	}

	// repeats once unless all is a number
	for (let i = 0; i < (isNaN(all) ? 1 : all); i++) {
		// remove item completely
		if (array[num].stacked === 1 || array[num].stacked === undefined || all === true) {
			if (typeof array[num].id !== "undefined") { // check an item exists at this location
				// almost removed - only 1 thing left to remove in the stack, or everything from the stack is being removed
				let id = array[num].id;
				let type = array[num].type;
				document.getElementById(element).getElementsByTagName("td")[num].innerHTML = "";
				array[num] = {};
				// if more items still need to be removed
				if (!isNaN(all) && all - i !== 1) {
					// check for more of the same items and remove them
					Dom.inventory.removeById(id, type, all-i-1, array);
				}
			}
		}
		// decrease stack size
		else {
			array[num].stacked--;
			if (array[num].quantity !== undefined) {
				array[num].quantity--;
			}
			if (array[num].stacked !== 1) {
				document.getElementById(stackNum+num).innerHTML = array[num].stacked;
			}
			else {
				document.getElementById(stackNum+num).hidden = true;
			}
		}
	}
	Dom.expand("information");
	Dom.hotbar.update();
	Dom.checkProgress();
}
/*
Dom.draggedPage = "";
Dom.draggedPageX = "";
Dom.draggedPageY = "";
for (let i = 0; i < document.getElementsByClassName("DOM").length; i++) {
	document.getElementsByClassName("DOM")[i].style.left = "0px";
	document.getElementsByClassName("DOM")[i].style.top = "0px";
	console.log(document.getElementsByClassName("DOM")[i].id);
	document.getElementsByClassName("DOM")[i].ondragstart = function (ev) {
		Dom.draggedPage = document.getElementsByClassName("DOM")[i];
		Dom.draggedPageX = ev.screenX-document.getElementsByClassName("DOM")[i].offsetLeft;
		Dom.draggedPageY = ev.screenY-document.getElementsByClassName("DOM")[i].offsetTop-70;
		let a = 0;
	}
}*/
Dom.canvas.drop = function (ev) {
	//if (!ev.target.classList.includes("stackNum")) {
		Dom.inventory.dispose(ev);
	/*}/*else if (ev.target.id === "secondary") {
		Dom.draggedPage.style.left = ev.clientX-Dom.draggedPageX+"px" //= ev.clientX-Dom.draggedPageX-20+"px";
		Dom.draggedPage.style.top = ev.clientY-Dom.draggedPageY+"px";
		Dom.draggedPage = "";
		Dom.draggedPageX = "";
		Dom.draggedPageY = "";
	}*/
}

for (let i = 0; i < document.getElementsByClassName("DOM").length; i++) {
	document.getElementsByClassName("DOM")[i].style.zIndex = 6+i;
	document.getElementsByClassName("DOM")[i].onmousedown = function (event) {
		let scroll = event.target.scrollTop;
		if (!event.target.draggable && event.target.className !== "stackNum" && event.target.autocomplete === undefined && event.composedPath().find(el => el.className === "chatPara") === undefined) {
			Dom.canvas.dragPageX = event.clientX-document.getElementsByClassName("DOM")[i].offsetLeft;
			Dom.canvas.dragPageY = event.clientY-document.getElementsByClassName("DOM")[i].offsetTop;
			Dom.canvas.stopMove = false;
			for (let x = 0; x < document.getElementsByClassName("DOM").length; x++) {
				if (parseInt(document.getElementsByClassName("DOM")[x].style.zIndex) >= parseInt(document.getElementsByClassName("DOM")[i].style.zIndex)) {
					document.getElementsByClassName("DOM")[x].style.zIndex--;
				}
			}
			document.getElementsByClassName("DOM")[i].style.zIndex = 6+document.getElementsByClassName("DOM").length-1;
			Dom.canvas.moveDom(document.getElementsByClassName("DOM")[i], document.getElementsByClassName("DOM")[i].id, scroll, event.target);
		}
	}
}

Dom.canvas.moveDom = function (object, page, scroll, scrollObject) {
	if (scrollObject.scrollTop === scroll) {
		object.style.left = window.mouseX - Dom.canvas.dragPageX + "px";
		object.style.top = window.mouseY - Dom.canvas.dragPageY + "px";

		// All NPC DOMs have the same position
		if (page !== "chatPage" && page !== "inventoryPage" && page !== "questsPage" && page !== "adventurePage" && page !== "spellbookPage" && page !== "settingsPage" && page !== "settingsTwoPage" && page !== "creditsPage") {
			Dom.canvas.npcLeft = object.style.left;
			Dom.canvas.npcTop = object.style.top;
		}

		if (!Dom.canvas.stopMove) {
			setTimeout(function () {
				Dom.canvas.moveDom(object, page, scroll, scrollObject);
			},1);
		}else {
			document.onmouseup = undefined;
		}
		document.onmouseup = function () {
			Dom.canvas.stopMove = true;
		}
	}
}

// updates the position of the "buy bags to get more inventory space" text
Dom.inventory.update = function () {
	Dom.elements.bagText.style.top = 300+(26*(Dom.elements.itemInventory.rows.length))+"px";
	if (Dom.elements.itemInventory.rows.length > 7) {
		Dom.elements.bagText.hidden = true;
	}
	else {
		Dom.elements.bagText.hidden = false;
	}
}

// when an item is held over a place that it can be dropped in
Dom.inventory.allowDrop = function (ev) {
    ev.preventDefault(); // allows the item to be dropped
}

Dom.inventory.drag = function (fromElement, fromArray, fromId) {
    //ev.dataTransfer.setData("text", x); // ev.dataTransfer.getData("text") || data = initial position of item
	Dom.inventory.fromElement = fromElement.composedPath()[1]; // could use path if table was needed
	Dom.inventory.fromArray = fromArray;
	Dom.inventory.fromId = fromId;

	Dom.expand("information");
}

Dom.inventory.bagSwaps = function (to, from, array) {
	// if is being swapped with another bag
	if (to.type === "bag") {
		// if the new bag is bigger than the old bag
		if (to.size >= from.size) {
			for (let i = 0; i < (to.size - from.size); i++) {
				array.push({});
			}
		}
		// if the new bag is smaller than the old bag
		else {
			array.splice(array.length - from.size + to.size);
		}
	}
	// if the bag is being removed and not replaced
	else {
		// removes the code from the rest of the inventory
		array.splice(array.length - from.size);
	}
}

Dom.bank.bagCases = function () {//aaaaaaaaaaaaaaa tbd?
	// slot backgrounds
	if (Dom.inventory.fromArray === Player.bank.items && Dom.inventory.fromId < 6 && Dom.inventory.fromArray[Dom.inventory.fromId].image === undefined) {
		Dom.elements.bankPageInventory.getElementsByTagName("td")[Dom.inventory.fromId].style.backgroundImage = "url('./assets/items/bag/1.png'), url('assets/interface/gearBackground.png')";
	}
	if (Dom.inventory.toArray === Player.bank.items && Dom.inventory.toId < 6) {
		Dom.elements.bankPageInventory.getElementsByTagName("td")[Dom.inventory.toId].style.backgroundImage = "url('assets/interface/gearBackground.png')";
	}

	// going from the bag slot from a bag
	if (Dom.inventory.fromArray === Player.bank.items && Dom.inventory.fromId < 6 && Dom.inventory.toArray[Dom.inventory.toId].type === "bag") {
		Dom.inventory.bagSwaps(Dom.inventory.fromArray[Dom.inventory.fromId], Dom.inventory.toArray[Dom.inventory.toId], Player.bank.items);
	}
	// going from the bag slot to a bag and not swapping
	else if (Dom.inventory.fromArray === Player.bank.items && Dom.inventory.fromId < 6 && Dom.inventory.fromArray[Dom.inventory.fromId].type === "bag") {
		for (let y = 0; y < Dom.inventory.fromArray[Dom.inventory.fromId].size; y++) {
			Player.bank.items.push({});
		}
	}

	// going to the bag slot to a bag
	if (Dom.inventory.toArray === Player.bank.items && Dom.inventory.toId < 6 && Dom.inventory.fromArray[Dom.inventory.fromId].type === "bag") {
		Dom.inventory.bagSwaps(Dom.inventory.toArray[Dom.inventory.toId], Dom.inventory.fromArray[Dom.inventory.fromId], Player.bank.items);
	}
	// going to the bag slot from a bag and not swapping
	else if (Dom.inventory.toArray === Player.bank.items && Dom.inventory.toId < 6 && Dom.inventory.toArray[Dom.inventory.toId].type === "bag") {
		for (let y = 0; y < Dom.inventory.toArray[Dom.inventory.toId].size; y++) {
			Player.bank.items.push({});
		}
	}

	Dom.bank.page();
}

// deals with bag being moved in/out of slot in inventory
Dom.inventory.bagCases = function () {
	// slot backgrounds
	/*if (Dom.inventory.fromId === "bag" && Dom.inventory.fromArray[Dom.inventory.fromId].image === undefined) {
		Dom.elements.itemInventory.getElementsByTagName("td")[5].style.backgroundImage = "url('./assets/items/bag/1.png')";
	}
	if (Dom.inventory.toId === "bag") {
		Dom.elements.itemInventory.getElementsByTagName("td")[5].style.backgroundImage = "none";
	}*/

	let changed = true;
	// going from the bag slot from a bag
	if (Dom.inventory.fromId === "bag" && this.toArray[this.toId].type === "bag") {
		Dom.inventory.bagSwaps(this.fromArray[this.fromId], this.toArray[this.toId], Player.inventory.items);
	}
	// going to the bag slot to a bag
	else if (Dom.inventory.toId === "bag" && this.fromArray[this.fromId].type === "bag") {
		Dom.inventory.bagSwaps(this.toArray[this.toId], this.fromArray[this.fromId], Player.inventory.items);
	}
	// going to the bag slot from a bag and not swapping
	else if (Dom.inventory.toId === "bag" && this.toArray[this.toId].type === "bag") {
		for (let y = 0; y < this.toArray[this.toId].size; y++) {
			Player.inventory.items.push({});
		}
	}
	// going from the bag slot to a bag and not swapping
	else if (Dom.inventory.fromId === "bag" && this.fromArray[this.fromId].type === "bag") {
		for (let y = 0; y < this.fromArray[this.fromId].size; y++) {
			Player.inventory.items.push({});
		}
	}
	// no bags changed
	else {
		changed = false;
	}

	if (changed) {
		// redraw the inventory if a bag has been changed
		Dom.elements.itemInventory.innerHTML = "";
		for (let i = 0; i < Player.inventory.items.length; i+=6) {
			let str = "<tr>";
			for (let inv = i; inv < i+6; inv++) {
				str += '<td ondrop="Dom.inventory.drop(event, Player.inventory.items, '+inv+');Game.inventoryUpdate(event)" ondragover="Dom.inventory.allowDrop(event)" onmouseover="Dom.inventory.displayInformation(Player.inventory.items['+inv+'], undefined, \'inventoryPage\')" onmouseleave="Dom.expand(\'information\')" ondrag="Dom.expand(\'information\')" onclick="Game.inventoryUpdate()"></td>';
			}
			Dom.elements.itemInventory.innerHTML += str+"</tr>";
		}
		for (let i = 0; i < Player.inventory.items.length; i++) {
			if (Player.inventory.items[i].image !== undefined) {
				Dom.elements.itemInventory.getElementsByTagName("td")[i].innerHTML = '<img src="'+Player.inventory.items[i].image+'" draggable="true" ondragstart="Dom.inventory.drag(event, Player.inventory.items, '+i+')" onclick="Player.inventory.items['+i+'].onClick('+i+')"></img>';
				if (Player.inventory.items[i].stacked !== undefined && Player.inventory.items[i].stacked !== 1) {
					Dom.elements.itemInventory.getElementsByTagName("td")[i].innerHTML += "<div class='stackNum' id='stackNum"+i+"'>"+Player.inventory.items[i].stacked+"</div>";
				}
			}
		}
		/*if (Player.inventory.items[5].image === undefined) {
			Dom.elements.itemInventory.getElementsByTagName("td")[5].style.backgroundImage = "url('assets/items/bag/1.png')";
		}*/
	}
}

Dom.bank.validateBags = function () {

	// swapping bags between bank bag slots
	if (Dom.inventory.toArray === Player.bank.items && Dom.inventory.toId < Dom.bank.unlockedSlots && Dom.inventory.fromArray === Player.bank.items && Dom.inventory.fromId < Dom.bank.unlockedSlots) {
		return true;
	}

	// normal item in bag slot or not unlocked bag slot
	if ((Dom.inventory.toArray === Player.bank.items && (Dom.inventory.fromArray[Dom.inventory.fromId].type !== "bag" || (Dom.inventory.toId >= Player.bank.unlockedSlots && Dom.inventory.toId < 6)))
	|| (Dom.inventory.fromArray === Player.bank.items && Dom.inventory.toArray[Dom.inventory.toId].type !== "bag" && Dom.inventory.toArray[Dom.inventory.toId].type !== undefined)){
		return false;
	}

	let highest = 0;
	// checks position of the last item in the inventory
	for (let x = Player.bank.items.length-1; x >= 6; x--) {
		if (Player.bank.items[x].image !== undefined || (Dom.inventory.toId === x && Dom.inventory.toArray === Player.bank.items)) {
			highest = x;
			break;
		}
	}

	if (highest > 0) {
		// two bags are being swapped at the bag slot
		if (Dom.inventory.toArray === Player.bank.items && Dom.inventory.toId < 6 && Dom.inventory.fromArray[Dom.inventory.fromId].type === "bag") {
			// if the new bag is smaller than the old bag
			if (Dom.inventory.toArray[Dom.inventory.toId].size > Dom.inventory.fromArray[Dom.inventory.fromId].size) {
				// if the item is outside the new bag size
				if (highest >= Dom.inventory.toArray[Dom.inventory.toId].size) {
					// dont let the bags be swapped
					return false;
				}
			}
		}
		// two bags are being swapped
		else if (Dom.inventory.fromArray === Player.bank.items && Dom.inventory.fromId < 6 && Dom.inventory.toArray[Dom.inventory.toId].type === "bag") {
			// if the new bag is smaller than the old bag
			if (Dom.inventory.fromArray[Dom.inventory.fromId].size > Dom.inventory.toArray[Dom.inventory.toId].size) {
				// if the item is outside the new bag size
				if (highest >= Dom.inventory.fromArray[Dom.inventory.fromId].size) {
					// dont let the bags be swapped
					return false;
				}
			}
		}
		// a bag is being removed and not replaced which is needed
		else if (Player.bank.items.length - Dom.inventory.fromArray[Dom.inventory.fromId].size <= highest){
			// dont let the bag be removed
			return false;
		}
	}

	return true;
}

Dom.inventory.validateBags = function () {
	let highest = 0;
	// checks position of the last item in the inventory
	for (let x = Player.inventory.items.length-1; x >= 6; x--) {
		if (Player.inventory.items[x].image !== undefined || (Dom.inventory.toId === x && Dom.inventory.toArray === Player.inventory.items)) {
			highest = x;
			break;
		}
	}

	if (highest > 0) {
		// two bags are being swapped at the bag slot
		if (Dom.inventory.toId === "bag" && Dom.inventory.toArray[Dom.inventory.toId].type === "bag" && Dom.inventory.fromArray[Dom.inventory.fromId].type === "bag") {
			// if the new bag is smaller than the old bag
			if (Dom.inventory.toArray[Dom.inventory.toId].size > Dom.inventory.fromArray[Dom.inventory.fromId].size) {
				// if the item is outside the new bag size
				if (highest >= Dom.inventory.toArray[Dom.inventory.toId].size) {
					// dont let the bags be swapped
					return false;
				}
			}
		}
		// two bags are being swapped
		else if (Dom.inventory.fromId === "bag" && Dom.inventory.fromArray[Dom.inventory.fromId].type === "bag" && Dom.inventory.toArray[Dom.inventory.toId].type === "bag") {
			// if the new bag is smaller than the old bag
			if (Dom.inventory.fromArray[Dom.inventory.fromId].size > Dom.inventory.toArray[Dom.inventory.toId].size) {
				// if the item is outside the new bag size
				if (highest >= Dom.inventory.fromArray[Dom.inventory.fromId].size) {
					// dont let the bags be swapped
					return false;
				}
			}
		}
		// a bag is being removed and not replaced
		else {
			// dont let the bag be removed
			return false;
		}
	}
	return true;
}

Dom.inventory.validateSwap = function () {

	// item dropped on itself
	if (Dom.inventory.fromArray === Dom.inventory.toArray && Dom.inventory.fromId === Dom.inventory.toId) {
		return false;
	}

	// key dropped on chest - must be first for it to work in equipment slots
	if (Dom.inventory.fromArray[Dom.inventory.fromId].opens !== undefined &&
	Dom.inventory.fromArray[Dom.inventory.fromId].opens.type === Dom.inventory.toArray[Dom.inventory.toId].type &&
	Dom.inventory.fromArray[Dom.inventory.fromId].opens.id === Dom.inventory.toArray[Dom.inventory.toId].id) {
		Dom.inventory.toArray[Dom.inventory.toId].onOpen(Dom.inventory.toId, Dom.inventory.fromArray[Dom.inventory.fromId].name);
		if (Dom.inventory.fromArray[Dom.inventory.fromId].stacked > 1) {
			Dom.inventory.fromArray[Dom.inventory.fromId].stacked--;
		}
		else {
			Dom.inventory.fromArray[Dom.inventory.fromId] = {};
			Dom.inventory.toElement.innerHTML = "";
		}
		//return false;
		// swap the code for the items
		let temp = this.toArray[this.toId];
		this.toArray[this.toId] = this.fromArray[this.fromId];
		this.fromArray[this.fromId] = temp;
	}

	// reversible version of key dropped on chest - e.g. fire resistant cloth
	if (Dom.inventory.toArray[Dom.inventory.toId].opens !== undefined && Dom.inventory.toArray[Dom.inventory.toId].opens.reversible &&
	Dom.inventory.toArray[Dom.inventory.toId].opens.type === Dom.inventory.fromArray[Dom.inventory.fromId].type &&
	Dom.inventory.toArray[Dom.inventory.toId].opens.id === Dom.inventory.fromArray[Dom.inventory.fromId].id) {
		Dom.inventory.fromArray[Dom.inventory.fromId].onOpen(Dom.inventory.fromId, Dom.inventory.toArray[Dom.inventory.toId].name);
		if (Dom.inventory.toArray[Dom.inventory.toId].stacked > 1) {
			Dom.inventory.toArray[Dom.inventory.toId].stacked--;
		}
		else {
			Dom.inventory.toArray[Dom.inventory.toId] = {};
			Dom.inventory.toElement.innerHTML = "";
		}
		// doesn't return false because they should be switched
	}

	// invalid drag to equip slot
	if (Dom.inventory.toArray.weapon !== undefined) {
		if (!((Dom.inventory.toId === Dom.inventory.fromArray[Dom.inventory.fromId].type || ((Dom.inventory.fromArray[Dom.inventory.fromId].allClasses === true ||
		(Dom.inventory.fromArray[Dom.inventory.fromId].type === "sword" && Player.class === "k") || (Dom.inventory.fromArray[Dom.inventory.fromId].type === "staff" && Player.class === "m") || (Dom.inventory.fromArray[Dom.inventory.fromId].type === "bow" && Player.class === "a") || Dom.inventory.fromArray[Dom.inventory.fromId].type === "rod" || Dom.inventory.fromArray[Dom.inventory.fromId].type === "tool") && Dom.inventory.toId === "weapon")) && !Dom.inventory.fromArray[Dom.inventory.fromId].unidentified)) {
			return false;
		}
	}
	// invalid drag from equip slot
	if (Dom.inventory.fromArray.weapon !== undefined) {
		if (!((Dom.inventory.fromId === Dom.inventory.toArray[Dom.inventory.toId].type || ((Dom.inventory.toArray[Dom.inventory.toId].allClasses === true ||
		(Dom.inventory.toArray[Dom.inventory.toId].type === "sword" && Player.class === "k") || (Dom.inventory.toArray[Dom.inventory.toId].type === "staff" && Player.class === "m") || (Dom.inventory.toArray[Dom.inventory.toId].type === "bow" && Player.class === "a") || Dom.inventory.toArray[Dom.inventory.toId].type === "rod" || Dom.inventory.toArray[Dom.inventory.toId].type === "tool") && Dom.inventory.fromId === "weapon")) && !Dom.inventory.toArray[Dom.inventory.toId].unidentified)
		&& Dom.inventory.toArray[Dom.inventory.toId].image !== undefined) { // checking if it exists
			return false;
		}
	}

	// inventory bag slot
	if ((Dom.inventory.toId === "bag") || (Dom.inventory.fromId === "bag")) {
		if (!Dom.inventory.validateBags()) {
			Dom.alert.page("Move some items to the bank, sell or dispose of them before you can do that.", 0, undefined, "inventoryPage");
			return false;
		}
	}

	// bank bag slot
	if ((Dom.inventory.toArray === Player.bank.items && Dom.inventory.toId < 6) || (Dom.inventory.fromArray === Player.bank.items && Dom.inventory.fromId < 6)) {
		if (!Dom.bank.validateBags()) {
			Dom.alert.page("Move some items to the bank, sell or dispose of them before you can do that.", 0, undefined, "inventoryPage");
			return false;
		}
	}

	// stacking items
	if (Dom.inventory.fromArray[Dom.inventory.fromId].id === Dom.inventory.toArray[Dom.inventory.toId].id && Dom.inventory.fromArray[Dom.inventory.fromId].type === Dom.inventory.toArray[Dom.inventory.toId].type
	&& Dom.inventory.toArray[Dom.inventory.toId].stack !== undefined && Dom.inventory.toArray[Dom.inventory.toId].stack !== Dom.inventory.toArray[Dom.inventory.toId].stacked) {

		if (Dom.inventory.toArray[Dom.inventory.toId].stacked === undefined) {
			Dom.inventory.toArray[Dom.inventory.toId] = 1;
		}
		if (Dom.inventory.fromArray[Dom.inventory.fromId].stacked === undefined) {
			Dom.inventory.fromArray[Dom.inventory.fromId] = 1;
		}

		// no overflow
		if (Dom.inventory.fromArray[Dom.inventory.fromId].stacked <= Dom.inventory.toArray[Dom.inventory.toId].stack - Dom.inventory.toArray[Dom.inventory.toId].stacked) {
			Dom.inventory.fromArray[Dom.inventory.fromId].stacked += Dom.inventory.toArray[Dom.inventory.toId].stacked;
			Dom.inventory.toArray[Dom.inventory.toId] = {};
			Dom.inventory.toElement.innerHTML = "";
		}
		// overflow
		else {
			Dom.inventory.toArray[Dom.inventory.toId].stacked -= Dom.inventory.fromArray[Dom.inventory.fromId].stack - Dom.inventory.fromArray[Dom.inventory.fromId].stacked;
			Dom.inventory.fromArray[Dom.inventory.fromId].stacked = Dom.inventory.fromArray[Dom.inventory.fromId].stack;
		}
	}

	return true;
}

// from is not required for drag-n-drop cases - it will have been previously set as Dom.inventory.fromX in Dom.inventory.drag
// tableElement and stackNums are only for right click
// element refers to the DOM element object; array refers to the itemdata item object (misnomer); Id refers to the id in Player.inventory
Dom.inventory.drop = function (toElement, toArray, toId, fromElement, fromArray, fromId, toTableElement, fromTableElement, fromStackNum, toStackNum) {

	if (fromId !== undefined) {
		Dom.inventory.fromElement = fromElement;
		Dom.inventory.fromArray = fromArray;
		Dom.inventory.fromId = fromId;
	}

	if (toArray !== Dom.trade.other && (toArray !== Dom.trade.items || (Dom.inventory.fromArray[Dom.inventory.fromId].quest === undefined || (Dom.inventory.fromArray[Dom.inventory.fromId].quest !== true && !Dom.inventory.fromArray[Dom.inventory.fromId].quest())))) {

		// close any inventory related alerts
		let alert = Dom.alert.array.filter(alert => alert.page === "inventoryPage" || alert.page === "bankPage" || alert.page === "tradePage");
		for (let i = 0; i < alert.length; i++) {
			Dom.alert.close(alert[i].id);
			//document.getElementById("alertNo"+alert[i].id).onclick();
		}

		if (toElement.composedPath === undefined) {
			Dom.inventory.toElement = toElement;
		}
		else {
			toElement.preventDefault();
			if (""+toElement.composedPath()[0] === "[object HTMLImageElement]" || ""+toElement.composedPath()[0].className === "stackNum") {
				Dom.inventory.toElement = toElement.composedPath()[1];
			}
			else {
				Dom.inventory.toElement = toElement.composedPath()[0];
			}
		}
		Dom.inventory.toArray = toArray;
		Dom.inventory.toId = toId;

		if (Dom.inventory.validateSwap()) {

			// not a right click (normal)
			if (toTableElement === undefined) {

				// remove old stats - must be done before items are switched (ocean warrior set)
				if (Dom.inventory.fromArray === Player.inventory) {
					Dom.inventory.removeEquipment(Dom.inventory.fromArray[Dom.inventory.fromId]);
				}
				else if (Dom.inventory.toArray === Player.inventory) {
					if (Dom.inventory.toArray[Dom.inventory.toId].image !== undefined) {
						Dom.inventory.removeEquipment(Dom.inventory.toArray[Dom.inventory.toId]);
					}
				}

				// swap the code for the items
				let temp = this.toArray[this.toId];
				this.toArray[this.toId] = this.fromArray[this.fromId];
				this.fromArray[this.fromId] = temp;

				// add new stats - must be done after items are switched (set bonuses)
				if (Dom.inventory.fromArray === Player.inventory) {
					if (Dom.inventory.fromArray[Dom.inventory.fromId].image !== undefined) {
						Dom.inventory.addEquipment(Dom.inventory.fromArray[Dom.inventory.fromId]);
					}
				}
				else if (Dom.inventory.toArray === Player.inventory) {
					Dom.inventory.addEquipment(Dom.inventory.toArray[Dom.inventory.toId]);
				}

				// must be at end of code changes
				Game.equipmentUpdate();

				let stackNum = "stackNum";
				if (fromArray === Player.bank.items) { // should these be this.fromArray?
					stackNum = "bankStackNum";
				}
				else if (fromArray === Dom.trade.items) {
					stackNum = "tradeStackNum";
				}

				// generate the elements for the items
				if (this.toElement.innerHTML !== "") {
					this.fromElement.innerHTML = "<img src='"+this.fromArray[this.fromId].image+"' draggable='true' ></img>";
					if (this.fromArray[this.fromId].stacked > 1) {
						this.fromElement.innerHTML += "<div class='stackNum' id='"+stackNum+this.fromId+"'>"+this.fromArray[this.fromId].stacked+"</div>";
					}
					this.setItemFunctions(this.fromElement.getElementsByTagName("img")[0], this.fromArray, this.fromId);
				}
				else {
					this.fromElement.innerHTML = "";
				}

				stackNum = "stackNum";
				if (toArray === Player.bank.items) {
					stackNum = "bankStackNum";
				}
				else if (toArray === Dom.trade.items) {
					stackNum = "tradeStackNum";
				}

				this.toElement.innerHTML = "<img src='"+this.toArray[this.toId].image+"' draggable='true' ></img>";
				if (this.toArray[this.toId].stacked > 1) {
					this.toElement.innerHTML += "<div class='stackNum' id='"+stackNum+this.toId+"'>"+this.toArray[this.toId].stacked+"</div>";
				}
				this.setItemFunctions(this.toElement.getElementsByTagName("img")[0], this.toArray, this.toId);

				// inventory bag cases
				if ((Dom.inventory.toId === "bag") || (Dom.inventory.fromId === "bag")) {
					Dom.inventory.bagCases();
				}

				// bank bag cases
				if ((Dom.inventory.toArray === Player.bank.items && Dom.inventory.toId < 6) || (Dom.inventory.fromArray === Player.bank.items && Dom.inventory.fromId < 6)) {
					Dom.bank.bagCases();
				}
			}

			// only move 1 item across from a stack
			else {
				// decrease the stack size of the clicked stack
				if (this.fromArray[this.fromId].stacked === undefined) {
					this.fromArray[this.fromId].stacked = 1;
				}
				this.fromArray[this.fromId].stacked--;
				if (this.fromArray[this.fromId].stacked > 1) {
					document.getElementById(fromStackNum+this.fromId).innerHTML = this.fromArray[this.fromId].stacked;
				}
				// if stack size is 1 then delete stackNum
				else if (this.fromArray[this.fromId].stacked === 1) {
					fromTableElement.getElementsByTagName("td")[this.fromId].removeChild(document.getElementById(fromStackNum+this.fromId))//.innerHTML = "";
				}

				// find an identical item to increase the stack size
				let stacked = false;
				for (let i = 0; i < this.toArray.length; i++) {
					if (this.toArray[i].type === this.fromArray[this.fromId].type && this.toArray[i].id === this.fromArray[this.fromId].id && this.toArray[i].stacked < this.toArray[i].stack) {
						this.toArray[i].stacked++;
						if (this.toArray[i].stacked > 2) {
							document.getElementById(toStackNum+i).innerHTML = this.toArray[i].stacked;
						}
						else {
							toTableElement.getElementsByTagName("td")[i].innerHTML += "<div class='stackNum' id='"+toStackNum+i+"'>"+this.toArray[i].stacked+"</div>"
						}
						this.setItemFunctions(toTableElement.getElementsByTagName("td")[i].getElementsByTagName("img")[0], this.toArray, i);
						stacked = true;
						break;
					}
				}
				// no item was found so make a new one
				if (!stacked) {
					this.toArray[this.toId] = Object.assign({}, this.fromArray[this.fromId]);
					this.toArray[this.toId].stacked = 1;
					this.toElement.innerHTML = "<img src='"+this.toArray[this.toId].image+"' draggable='true' ></img>";
					this.setItemFunctions(this.toElement.getElementsByTagName("img")[0], this.toArray, this.toId);
				}

				// delete fromElement if it has a stack of zero
				// must be at end because its data is used earlier
				if (this.fromArray[this.fromId].stacked === 0) {
					this.fromElement.innerHTML = "";
					this.fromArray[this.fromId] = {};
				}
			}
		}
		Game.inventoryUpdate();
		Dom.hotbar.update();
		if (toArray === Dom.trade.items || fromArray === Dom.trade.items) {
			let message = {
		        type: "trade",
				action: "update",
		        content: Dom.trade.items,
				target: Dom.trade.target,
		    }
		    let jsonMessage = JSON.stringify(message);
		    ws.send(jsonMessage);

			// unconfirm if it was confirmed because items have been moved
			document.getElementById("tradePageInventory").style.borderColor = "var(--border)";
			for (let i = 0; i < 24; i++) {
				document.getElementById("tradePageInventory").getElementsByTagName("td")[i].style.borderColor = "var(--border)";
			}
			document.getElementById("tradePageOther").style.borderColor = "var(--border)";
			for (let i = 0; i < 24; i++) {
				document.getElementById("tradePageInventory").getElementsByTagName("td")[i].style.borderColor = "var(--border)";
			}
		}
	}
}

Dom.inventory.setItemFunctions = function (element, array, id) {
	element.ondragstart = function (event) {
		Dom.inventory.drag(event, array, id);
	}
	if (array[id].onClick !== undefined && (array === Player.inventory.items || array === Player.inventory)) {
		element.onclick = function () {
			array[id].onClick(id);
		}
	}
	else if (array === Player.bank.items) {
		element.onclick = function () {
			Dom.inventory.inOut("out", id, "bank");
		}
	}
	else { // trade
		element.onclick = function () {
			Dom.inventory.inOut("out", id, "trade");
		}
	}
}

// player wants to remove equipment from a slot
// array is (the item in) that slot (misnomer)
Dom.inventory.removeEquipment = function (array) {
	// draw slot background
	let element = Dom.inventory.slotKeys[array.type];
	let type; // for setting back the background image
	if (array.type !== "rod" && array.type !== "tool" && array.type !== "sword" && array.type !== "staff" && array.type !== "bow") {
		type = array.type;
	}
	else if (Player.class === "a") {
		type = "bow";
	}
	else if (Player.class === "m") {
		type = "staff";
	}
	document.getElementById(element).style.backgroundImage = "url('assets/items/"+type+"/1.png'), url('assets/interface/gearBackground.png')";

	// bags
	if (array.type === "bag") {
		Dom.inventory.bagCases(); // DOESN'T YET WORK TBD FOR CLICKING OF BAGS TO UNEQUIP
	}

	Dom.inventory.beforeChangedStats();
	if (array.stats !== undefined) {
		for (let i = 0; i < Object.keys(array.stats).length; i++) {

			if (array.stats[Object.keys(array.stats)[i]] !== true) {
				Player.stats[Object.keys(array.stats)[i]] -= array.stats[Object.keys(array.stats)[i]];
			}else {
				Player.stats[Object.keys(array.stats)[i]] = false;
			}
		}
	}
	if (array.set !== undefined) {
		Dom.inventory.noSet = false;
		for (let i = 0; i < Items.set[array.set].armour.length; i++) {
			if (Player.inventory.helm.name !== Items.set[array.set].armour[i] && Player.inventory.chest.name !== Items.set[array.set].armour[i] && Player.inventory.greaves.name !== Items.set[array.set].armour[i] && Player.inventory.boots.name !== Items.set[array.set].armour[i] && Player.inventory.weapon.name !== Items.set[array.set].armour[i]
			&& array.name !== Items.set[array.set].armour[i] && array.name !== Items.set[array.set].armour[i] && array.name !== Items.set[array.set].armour[i] && array.name !== Items.set[array.set].armour[i]) {
				// if the set bonus is NOT active
				Dom.inventory.noSet = true;
			}
		}

		// if a set has just been deactivated
		if (!Dom.inventory.noSet) {
			for (let i = 0; i < Object.keys(Items.set[array.set].stats).length; i++) {

				if (Items.set[array.set].stats[Object.keys(Items.set[array.set].stats)[i]] !== true) {
					Player.stats[Object.keys(Items.set[array.set].stats)[i]] -= Items.set[array.set].stats[Object.keys(Items.set[array.set].stats)[i]];
				}else {
					Player.stats[Object.keys(Items.set[array.set].stats)[i]] = false;
				}
			}

			// multiplier
			if (Items.set[array.set].multiplier !== undefined) {
				for (let x = 0; x < Items.set[array.set].multiplier.length; x++) {
					// repeats for each slot that the multiplier applies to (e.g. helm, chest...)
					for (let i = 0; i < Items.set[array.set].multiplier[x].slots.length; i++) {
						// adds the multiplied stat for each intended slot to the player stats
						Player.stats[Player.inventory[Items.set[array.set].multiplier[x].slots[i]][Items.set[array.set].multiplier[x].stat]] -= (Items.set[array.set].multiplier[x].multiplier-1) * Player.inventory[Items.set[array.set].multiplier[x].slots[i]].stats[Player.inventory[Items.set[array.set].multiplier[x].slots[i]][Items.set[array.set].multiplier[x].stat]];
					}
				}
			}

			// allChooseStats
			if (Items.set[array.set].allChooseStats) {
				for (let i = 0; i < Items.set[array.set].armour.length; i++) {
					for (let x = 0; x < 5; x++) {
						let item = Object.values(Player.inventory)[x];
						if (item.name === Items.set[array.set].armour[i]) {
							if (item.chooseStats !== undefined) {
								for (let y = 0; y < Object.keys(item.chooseStats).length; y++) {
									let stat = Object.keys(item.chooseStats)[y];
									if (stat !== item.chosenStat) {
										Player.stats[stat] -= item.chooseStats[stat];
									}
								}
								item.allChooseStats = false;
							}
							break;
						}
					}
				}
			}

		}
	}
	if (array.conditionalStats !== undefined) {
		for (let y = 0; y < Player.conditionalStats.length; y++) {
			if (Player.conditionalStats[y].type === array.type && Player.conditionalStats[y].id === array.id) {

				for (let i = 0; i < array.conditionalStats.length; i++) {
					if (Player.conditionalStats[y].active[i]) {
						Player.conditionalStats[y].active[i] = false;
						for (let x = 0; x < Object.keys(array.conditionalStats[i].stats).length; x++) {
							if (array.conditionalStats[i].stats[Object.keys(array.conditionalStats[i].stats)[x]] !== true) {
								Player.stats[Object.keys(array.conditionalStats[i].stats)[x]] -= array.conditionalStats[i].stats[Object.keys(array.conditionalStats[i].stats)[x]];
							}else {
								Player.stats[Object.keys(array.conditionalStats[i].stats)[x]] = false;
							}
						}
					}
				}

				Player.conditionalStats.splice(y, 1);
				break;
			}
		}
	}
	/*if (array.conditionalChooseStats !== undefined) {
		for (let y = 0; y < Player.conditionalChooseStats.length; y++) {
			if (Player.conditionalChooseStats[y].type === array.type && Player.conditionalChooseStats[y].id === array.id) {

				// do not delete because it is only effecting chooseStats

				Player.conditionalChooseStats.splice(y, 1);
				break;
			}
		}
	}*/
	if (array.trail !== undefined) {
		Game.hero.removeTrail(array.trailName);
	}
	Dom.inventory.afterChangedStats();
}

// array is equipment's object (as in itemdata) - i.e. array.stats is the item's stats
// (tbd rename variable 'array'!)
Dom.inventory.addEquipment = function (array, noSet) {
	// remove slot background
	let element = Dom.inventory.slotKeys[array.type];
	document.getElementById(element).style.backgroundImage = "url('assets/interface/gearBackground.png')";

	Dom.inventory.beforeChangedStats();

	if (array.stats !== undefined) {
		let itemStatKeys = Object.keys(array.stats);

		for (let i = 0; i < itemStatKeys.length; i++) {
			let itemStat = array.stats[itemStatKeys[i]];

			// add each of the stats of the item equipped
			// behaves differently based on data type
			if (typeof itemStat === "number") {
				Player.stats[itemStatKeys[i]] += itemStat;
			}
			else if (typeof array.stats[Object.keys(array.stats)[i]] === "boolean") {
				Player.stats[itemStatKeys[i]] = itemStat;
			}
			else if (typeof array.stats[Object.keys(array.stats)[i]] === "string") {
				Player.stats[itemStatKeys[i]] = itemStat;
			}
			else {
				console.error("Unexpected item stat value: ", itemStat);
			}
		}
	}

	if (array.set !== undefined && !noSet) {
		Dom.inventory.noSet = false;
		for (let i = 0; i < Items.set[array.set].armour.length; i++) {
			if (Player.inventory.helm.name !== Items.set[array.set].armour[i] && Player.inventory.chest.name !== Items.set[array.set].armour[i] && Player.inventory.greaves.name !== Items.set[array.set].armour[i] && Player.inventory.boots.name !== Items.set[array.set].armour[i] && Player.inventory.weapon.name !== Items.set[array.set].armour[i]) {
				// if the set bonus is NOT active
				Dom.inventory.noSet = true;
			}
		}

		// if a set has just been activated
		if (!Dom.inventory.noSet) {
			for (let i = 0; i < Object.keys(Items.set[array.set].stats).length; i++) {

				if (Items.set[array.set].stats[Object.keys(Items.set[array.set].stats)[i]] !== true) {
					Player.stats[Object.keys(Items.set[array.set].stats)[i]] += Items.set[array.set].stats[Object.keys(Items.set[array.set].stats)[i]];
				}else {
					Player.stats[Object.keys(Items.set[array.set].stats)[i]] = true;
				}
			}

			// multiplier
			if (Items.set[array.set].multiplier !== undefined) {
				for (let x = 0; x < Items.set[array.set].multiplier.length; x++) {
					// repeats for each slot that the multiplier applies to (e.g. helm, chest...)
					for (let i = 0; i < Items.set[array.set].multiplier[x].slots.length; i++) {
						// adds the multiplied stat for each intended slot to the player stats
						Player.stats[Player.inventory[Items.set[array.set].multiplier[x].slots[i]][Items.set[array.set].multiplier[x].stat]] += (Items.set[array.set].multiplier[x].multiplier-1) * Player.inventory[Items.set[array.set].multiplier[x].slots[i]].stats[Player.inventory[Items.set[array.set].multiplier[x].slots[i]][Items.set[array.set].multiplier[x].stat]];
					}
				}
			}

			// allChooseStats
			if (Items.set[array.set].allChooseStats) {
				for (let i = 0; i < Items.set[array.set].armour.length; i++) {
					for (let x = 0; x < 5; x++) {
						let item = Object.values(Player.inventory)[x];
						if (item.name === Items.set[array.set].armour[i]) {
							if (item.chooseStats !== undefined) {
								for (let y = 0; y < Object.keys(item.chooseStats).length; y++) {
									let stat = Object.keys(item.chooseStats)[y];
									if (stat !== item.chosenStat) {
										Player.stats[stat] += item.chooseStats[stat];
									}
								}
								item.allChooseStats = true;
							}
							break;
						}
					}
				}
			}

		}
	}
	if (array.conditionalStats !== undefined) {
		Player.conditionalStats.push({type: array.type, id: array.id, active: [],});
		//Dom.inventory.conditionalStats(); // now called every tick in main
	}
	/*if (array.conditionalChooseStats !== undefined) {
		Player.conditionalChooseStats.push({type: array.type, id: array.id, active: [],});
		Dom.inventory.conditionalStats();
	}*/
	if (array.trail !== undefined) {
		Game.hero.addTrail(array.trailName, array.trail);
	}
	Dom.inventory.afterChangedStats();
}

// returns array of inventory positions
// calledByCheck instead returns the amount of this item in your inventory (not sure why inventory.count isn't used instead - tbd.)
Dom.inventory.find = function (ID, type, notEquipped, calledByCheck, name, array, quest) {
	if (array === undefined) {
		array = Player.inventory.items;
	}
	else {
		notEquipped = true;
	}
	let index = [];
	let completed = 0;
	for (let i = 0; i < array.length; i++) {
		if (((array[i].type === type && array[i].id === ID) || (array[i].name === name && name !== undefined)) && (!quest || array[i].quest === true || (array[i].quest !== undefined && array[i].quest()))) {
			index.push(i);
			if (array[i].stacked === undefined) {
				array[i].stacked = 1;
			}
			completed += array[i].stacked;
		}
	}
	if (!notEquipped) {
		if ((Player.inventory.weapon.type === type && Player.inventory.weapon.id === ID) || (Player.inventory.weapon.name === name && name !== undefined)) {
			index.push("weapon");
			completed++;
		}
		else if ((Player.inventory.helm.type === type && Player.inventory.helm.id === ID) || (Player.inventory.helm.name === name && name !== undefined)) {
			index.push("helm");
			completed++;
		}
		else if ((Player.inventory.chest.type === type && Player.inventory.chest.id === ID) || (Player.inventory.chest.name === name && name !== undefined)) {
			index.push("chest");
			completed++;
		}
		else if ((Player.inventory.greaves.type === type && Player.inventory.greaves.id === ID) || (Player.inventory.greaves.name === name && name !== undefined)) {
			index.push("greaves");
			completed++;
		}
		else if ((Player.inventory.boots.type === type && Player.inventory.boots.id === ID) || (Player.inventory.boots.name === name && name !== undefined)) {
			index.push("boots");
			completed++;
		}
		else if ((Player.inventory.mount.type === type && Player.inventory.mount.id === ID) || (Player.inventory.mount.name === name && name !== undefined)) {
			index.push("mount");
			completed++;
		}
		else if ((Player.inventory.bag.type === type && Player.inventory.bag.id === ID) || (Player.inventory.bag.name === name && name !== undefined)) {
			index.push("bag");
			completed++;
		}
		else {
			for (let i = 0; i < Player.inventory.trinkets.length; i++) {
				if (((Player.inventory.trinkets[i].type === type && Player.inventory.trinkets[i].id === ID) || (Player.inventory.trinkets[i].name === name && name !== undefined)) && (!quest || Player.inventory.trinkets[i].quest === true || (Player.inventory.trinkets[i].quest !== undefined && Player.inventory.trinkets[i].quest()))) {
					index.push("trinkets"+i);
					completed++;
				}
			}
		}
	}
	if (calledByCheck) {
		return completed;
	}
	else {
		return index;
	}
}

// returns number of an item (specified by id and type) in player's inventory or not
// num parameter checks for AT LEAST certain number of them, and returns true/false instead.
// notEquipped means it must not be equipped (defaults to false)
Dom.inventory.check = function (ID, type, num, notEquipped, array, quest) {
	let completed = Dom.inventory.find(ID, type, notEquipped, true, array, undefined, quest);
	if (num !== undefined) {
		if (completed >= num) {
			completed = true;
		}
		else {
			completed = false;
		}
	}
	return completed;
}

// returns the number of items in the inventory satisfying the critera
// same params as above (but num is missing!!!) (tbd make these an object...)
Dom.inventory.count = function (ID, type, notEquipped, array, quest) {
	let foundItems = Dom.inventory.find(ID, type, notEquipped, false, array, undefined, quest);
	let numberFound = 0;
	// now count stacks
	for (let i = 0; i < foundItems.length; i++) {
		let inventoryItem = Player.inventory.items[foundItems[i]];
		if (typeof inventoryItem.stacked === "undefined") {
			numberFound++;
		}
		else {
			numberFound += inventoryItem.stacked;
		}
	}
	return numberFound;
}

if (Player.class === "a") {
	Dom.elements.weapon.style.backgroundImage = "url('./assets/items/bow/1.png'), url('assets/interface/gearBackground.png')";
	Dom.elements.choosePageWeapon.style.backgroundImage = "url('./assets/items/bow/1.png'), url('assets/interface/gearBackground.png')";
}
else if (Player.class === "m") {
	Dom.elements.weapon.style.backgroundImage = "url('./assets/items/staff/1.png'), url('assets/interface/gearBackground.png')";
	Dom.elements.choosePageWeapon.style.backgroundImage = "url('./assets/items/staff/1.png'), url('assets/interface/gearBackground.png')";
}
else {
	Dom.elements.weapon.style.backgroundImage = "url('./assets/items/sword/1.png'), url('assets/interface/gearBackground.png')";
	Dom.elements.choosePageWeapon.style.backgroundImage = "url('./assets/items/sword/1.png'), url('assets/interface/gearBackground.png')";
}


// 
// SPELLBOOK : spell arsenal 
//

Dom.spellbook.init = function () {
	this.drawEquipped();
	this.drawArsenal();
}

// draws the equipped spells in the spellbook
// should be called on game initiation
Dom.spellbook.drawEquipped = function () {
	let elements = Dom.elements.spellsEquipped.getElementsByTagName("td");
	for (let i = 0; i < Player.spells.length; i++) {
		if (Player.spells[i].image !== undefined) {
			elements[i].innerHTML = '<img src="'+Player.spells[i].image+'" id="spellEquippedImg'+i+'" draggable="true" ondragstart="Dom.spellbook.drag(event, \'equipped\', '+i+')"></img>';
		}
		else if (typeof elements[i] !== "undefined") {
			elements[i].innerHTML = "";
		}
	}
}

// draws the arsenal (spell inventory) in the spellbook
// should be called on game initiation, or on a new spell / spell slot being unlocked
// similar to inventory.bagCases
Dom.spellbook.drawArsenal = function () {
	// redraw the spell arsenal (inventory) if a new spell has been unlocked
	Dom.elements.spellArsenal.innerHTML = "";
	for (let i = 0; i < Player.spellArsenal.length; i+=6) {
		let str = "<tr>";
		for (let inv = i; inv < i+6; inv++) {
			str += '<td ondragover="Dom.inventory.allowDrop(event)" onmouseover="Dom.inventory.displayInformation(Player.spellArsenal['+inv+'], undefined, \'spellbookPage\')" onmouseleave="Dom.expand(\'information\')" ondrag="Dom.expand(\'information\')"></td>';
		}
		Dom.elements.spellArsenal.innerHTML += str+"</tr>";
	}
	let elements = Dom.elements.spellArsenal.getElementsByTagName("td");
	for (let i = 0; i < Player.spellArsenal.length; i++) {
		if (Player.spellArsenal[i].image !== undefined) {
			elements[i].innerHTML = '<img src="'+Player.spellArsenal[i].image+'" id="spellArsenalImg'+i+'" draggable="true" ondragstart="Dom.spellbook.drag(event, \'arsenal\', '+i+')"></img>';
			// grey out spell if it's equipped
			for (let j = 0; j < Player.spells.length; j++) {
				if (Player.spells[j].id === Player.spellArsenal[i].id && Player.spells[j].class === Player.spellArsenal[i].class) {
					// the spell is equipped
					document.getElementById("spellArsenalImg"+i).style.filter = "grayscale(100%) contrast(0%)";
				}
			}
			// could use the below to represent tier of spells ?
			/*if (Player.inventory.items[i].stacked !== undefined && Player.inventory.items[i].stacked !== 1) {
				elements[i].innerHTML += "<div class='stackNum' id='stackNum"+i+"'>"+Player.inventory.items[i].stacked+"</div>";
			}*/
		}
		else if (typeof elements[i] !== "undefined") {
			elements[i].innerHTML = "";
		}
	}
}

// called upon dragging a spell from spell arsenal / equipped spells
// fromArray is set to a WORD: "equipped" or "arsenal"
// fromElement is set to event (not used)
// sets information for use in Dom.spellbook.equip
Dom.spellbook.drag = function (fromElement, fromArray, fromId) {
	Dom.spellbook.fromArray = fromArray;
	Dom.spellbook.fromId = fromId;

	Dom.expand("information");
}

// for dropping onto equipped spell slot
// toId is spell slot being dropped onto (i.e. Player.spells[toId])
// fromId is spell arsenal slot being dropped from (i.e. Player.spellArsenal[fromid])
Dom.spellbook.equip = function (toId) {
	let fromId = Dom.spellbook.fromId; // set in Dom.spellbook.drag
	let fromArray = Dom.spellbook.fromArray; // set in Dom.spellbook.drag
	if (fromArray === "arsenal") {
        // unequip old spell
        let arsenalId = Player.spellArsenal.findIndex(spell => spell.id === Player.spells[toId].id && spell.class === Player.spells[toId].class)
        if (arsenalId >= 0) {
            // there was an old spell equipped in this id slot
            document.getElementById("spellArsenalImg"+arsenalId).style.filter = ""; // ungrey
        }
        // check this spell wasn't equipped anywhere else; if it was then unequip it
        for (let i = 0; i < Player.spells.length; i++) {
            if (Player.spells[i].id === Player.spellArsenal[fromId].id && Player.spells[i].class === Player.spellArsenal[fromId].class) {
                // it's equipped as spell i
                Player.spells[i] = {};
            }
        }
        // equip new spell
        Player.spells[toId] = Player.spellArsenal[fromId];
        document.getElementById("spellArsenalImg"+fromId).style.filter = "grayscale(100%) contrast(0%)";
        // load in image of new spell in main
        Game.playerSpellImages[toId] = "Loading";
        Loader.deleteImage("playerSpellRune"+toId, true);
        let p = Loader.loadImage("playerSpellRune"+toId, Player.spells[toId].image, false);
        p.then(function (loaded) {
            Game.playerSpellImages[toId] = Loader.getImage("playerSpellRune"+toId);
        }.bind(this)).catch(function (err) {
            // error for if the image didn't load
            console.error("Your spell image did not load correctly.", err);
        });
    }
    else if (fromArray === "equipped") {
        let swapSpell = Player.spells[toId]; // this might not actually have a spell in it, but this is fine
        Player.spells[toId] = Player.spells[fromId];
        Player.spells[fromId] = swapSpell;
        // swap around loaded images
        let tempImage = Game.playerSpellImages[toId];
        Game.playerSpellImages[toId] = Game.playerSpellImages[fromId];
        Game.playerSpellImages[fromId] = tempImage;
    }
    else {
        console.error("Unexpected fromArray value in spellbook", fromArray);
    }
	// update equipped spells display
	Dom.spellbook.drawEquipped();
}




//Dom.elements.inventoryGoldXP.style.backgroundImage = 'url("./selection/assets/'+Player.class+Player.skin+'/f.png")';
//Dom.elements.inventoryGoldXP.style.right = 20 - Skins[Player.class][Player.skin].headAdjust.x + "px";
//Dom.elements.inventoryGoldXP.style.height = 60 + Skins[Player.class][Player.skin].headAdjust.y + "px";
//Dom.elements.inventoryGoldXP.style.bottom = 3 + Skins[Player.class][Player.skin].headAdjust.y + "px";
// aaaaaaaa tbd !!!!!

Dom.elements.hotbar.onmouseover = function () {
	Dom.elements.hotbar.style.opacity = 1;
}

Dom.elements.hotbar.onmouseleave = function () {
	Dom.elements.hotbar.style.opacity = "var(--opacity)";
}

Dom.settings.acceptOn = function () {
	if (Dom.elements.acceptOn.checked) {
		// accept localStorage for progress saving
		localStorage.setItem("accept", "true");
		localStorage.setItem("name", Player.name);
		// hide option for progress saving in settings and add save button
		Dom.elements.settingAcceptHolder.innerHTML = "";
	}
}

if (User.settings.music === true) {
	Dom.elements.musicOn.checked = true;
}

Dom.inventory.checkSpace = function () {
	let space = 0;
	for (let i = 0; i < Player.inventory.items.length; i++) {
		if (Player.inventory.items[i].image === undefined) {
			space++
		}
	}
	return space;
}

Dom.inventory.requiredSpace = function (items, includeChance) {
	let required = 0;
	// repeat for each required item
	for (let i = 0; i < items.length; i++) {
		if ((items[i].condition === undefined || items[i].condition()) && (items[i].chance === undefined || includeChance) && (items[i].item.type !== "item" || items[i].item.id !== 1)) {
			if (items[i].item.stack === undefined) {
				items[i].item.stack = 1;
			}
			if (items[i].quantity === undefined) {
				items[i].quantity = 1;
			}
			let notRequired = 0;
			for (let x = 0; x < Player.inventory.items.length; x++) {
				if (Player.inventory.items[x].stacked === undefined) {
					Player.inventory.items[x].stacked = 1;
				}
				if (Player.inventory.items[x].id === items[i].item.id && Player.inventory.items[x].type === items[i].item.type) {
					notRequired += items[i].item.stack - Player.inventory.items[x].stacked;
				}
			}
			required += Math.ceil((items[i].quantity - notRequired) / items[i].item.stack); // required empty spaces for this item
		}
	}
	return required <= Dom.inventory.checkSpace();
}

Dom.inventory.hideHotbar = function (hide) {
	if (hide) {
		Dom.elements.hotbar.hidden = true;
	}else {
		Dom.elements.hotbar.hidden = false;
	}
}

// npc is the full npc object
Dom.loot.page = function (npc, items) {
	if (Dom.changeBook("lootPage", npc)) {//, true/*false*/, true);
		//Dom.changeBook("lootPage");
		//Dom.changeBook("lootPage");

		// the format of Dom.loot.looted is the same as Dom.quest.rewards
		Dom.loot.looted = items;

		Dom.elements.lootingPageTitle.innerHTML = npc.name;
		let lootSpaces = "";
		for (let i = 0; i < items.length; i+=8) {
			lootSpaces += "<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
		}
		Dom.elements.lootingPageClose.style.top = 55 * items.length/8 + "px";
		Dom.elements.lootAll.style.top = 55 * items.length/8 - 50 + "px";
		let promise = new Promise(function (resolve, reject) {
			Dom.elements.loot.innerHTML = lootSpaces;
			resolve("resolved");
		// when the table has been drawn...
		}).then(function (result) {
			/*if (items.length > space) {
				console.warn(name+" has generated too much loot for its space of "+space);
			}*/
			for (let i = 0; i < items.length; i++) {
				//let currentSpaceNum = Random(0, spaces.length-1);
				//let currentSpace = spaces[currentSpaceNum]; // random slot in the table array
				//spaces.splice(currentSpaceNum,1); // removes slot from the table array so it can't be chosen again
				if (items[i] !== undefined && items[i] !== null) {
					if (items[i].quantity !== 1) {
						Dom.elements.loot.getElementsByTagName("td")[i].innerHTML = "<img src=" + items[i].item.image + " class='lootOptions' draggable='false' ondragstart='Dom.inventory.drag(event, Dom.loot.items, "+i+")'><div id='lootStackNum"+i+"' class='lootStackNum'>"+items[i].quantity+"</div></img>";
					}else {
						Dom.elements.loot.getElementsByTagName("td")[i].innerHTML = "<img src=" + items[i].item.image + " class='lootOptions' draggable='false' ondragstart='Dom.inventory.drag(event, Dom.loot.items, "+i+")'><span id='lootStackNum"+i+"' class='lootStackNum'></span></img>";
					}
					//Dom.inventory.setItemFunctions(Dom.elements.loot.getElementsByTagName("td")[i], Dom.loot.items, i);
				}
			}
			// add onclick for each piece of loot
			let num = -1;
			for (let i = 0; i < items.length; i++) {
				if (items[i] !== undefined && items[i] !== null) {
					num++;
					items[i].num = num;
					document.getElementsByClassName("lootOptions")[num].onclick = function () {
						Dom.expand("information");
						if (Dom.inventory.requiredSpace([items[i]])) {
							let inventoryPosition = Dom.inventory.give(items[i].item, items[i].quantity);
							if (typeof items[i].item !== "undefined" && typeof items[i].item.onLoot !== "undefined") {
								items[i].item.onLoot(inventoryPosition);
							}
							document.getElementsByClassName("lootOptions")[items[i].num].outerHTML = "<span class='lootOptions'></span>";
							document.getElementsByClassName("lootStackNum")[items[i].num].outerHTML = "<span class='lootStackNum'></span>";
							Dom.loot.looted[i] = undefined;
						}else {
							Dom.alert.page("You do not have enough space in your inventory for that item.", 0 , undefined, "lootPage");
						}
					};
					document.getElementsByClassName("lootStackNum")[num].onclick = function () {
						Dom.expand("information");
						if (Dom.inventory.requiredSpace([items[i]])) {
							Dom.inventory.give(items[i].item, items[i].quantity);
							document.getElementsByClassName("lootOptions")[items[i].num].outerHTML = "<span class='lootOptions'></span>";
							document.getElementsByClassName("lootStackNum")[items[i].num].outerHTML = "<span class='lootStackNum'></span>";
							Dom.loot.looted[i] = undefined;
						}else {
							Dom.alert.page("You do not have enough space in your inventory for that item.", 0 , undefined, "lootPage");
						}
					};
					document.getElementsByClassName("lootOptions")[num].onmouseover = function () {
						Dom.inventory.displayInformation(items[i].item, items[i].quantity, "lootPage");
					}
					document.getElementsByClassName("lootStackNum")[num].onmouseover = function () {
						Dom.inventory.displayInformation(items[i].item, items[i].quantity, "lootPage");
					}
					document.getElementsByClassName("lootOptions")[num].onmouseleave = function () {
						Dom.expand("information");
					}
					document.getElementsByClassName("lootStackNum")[num].onmouseleave = function () {
						Dom.expand("information");
					}
				}
			}
			Dom.elements.lootAll.onclick = function () {
				for (let i = 0; i < document.getElementsByClassName("lootOptions").length; i++) {
					if (document.getElementsByClassName("lootOptions")[i].onclick !== null) {
						document.getElementsByClassName("lootOptions")[i].onclick();
					}
				}
				Dom.closePage('lootPage');
				Game.lootClosed(Dom.loot.looted);
			}
		},items);
		Game.saveProgress("auto");
	}
}

// name is the large text shown at the top of the page
// text is the text displayed in the page - can be a function which returns the text displayed on the page alternatively
// more documentation tbd : )
// give parameter is just cosmetic, showing the item on the page as an "attached item". to actually give the item to the player, add this to the "functions" parameter
Dom.text.page = function (name, text, close, buttons, functions, give, npc) {
	if (Dom.changeBook("textPage", npc)) {//, true/*false*/, true);
		// text might be a function in which case the value taken is the value returned
		if (typeof text === "function") {
			text = text();
		}

		Dom.elements.textPage.innerHTML = '<h1 id="textPageName">'+name+'</h1>'
		Dom.elements.textPage.innerHTML += '<p id="textPageText">'+text+'</p>'
		if (give !== undefined) {
			Dom.elements.textPage.innerHTML += "<br><br><strong>Attached Items:</strong><br><br>";
			for (let i = 0; i < give.length; i++) {
				if (give[i].quantity === undefined) {
					give[i].quantity = 1;
				}
				Dom.elements.textPage.innerHTML += "<img src=" + give[i].item.image + " class='theseTextOptions'><div class='textStackNum'>"+(give[i].quantity !== 1 ? give[i].quantity : "")+"</div></img>&nbsp;&nbsp;";
			}
		}
		if (buttons !== undefined) {
			for (let i = 0; i < buttons.length; i++) {
				if (buttons[i] !== undefined) {
					Dom.elements.textPage.innerHTML += "<br><center><div id='buttons"+i+"' class='buttons'>"+buttons[i]+"</div></center>";
				}
			}
		}
		if (close) {
			Dom.elements.textPage.innerHTML += "<br><br><br><center><div class='closeClass' onclick='Dom.closePage(\"textPage\")'>Close</div></center>";
		}
		// onclicks have to be below this point because the line above resets them
		if (buttons !== undefined) {
			for (let i = 0; i < buttons.length; i++) {
				if (buttons[i] !== undefined) {
					document.getElementById("buttons"+i).onclick = function () {
						functions[i]();
					}
				}
			}
		}
		if (give !== undefined) {
			for (let i = 0; i < give.length; i++) {
				document.getElementsByClassName("theseTextOptions")[i].onmouseover = function () {
					Dom.inventory.displayInformation(give[i].item, give[i].quantity, "textPage");
				};
				document.getElementsByClassName("theseTextOptions")[i].onmouseleave = function () {
					Dom.expand("information");
				};
				document.getElementsByClassName("textStackNum")[i].onmouseover = function () {
					Dom.inventory.displayInformation(give[i].item, give[i].quantity, "textPage");
				};
				document.getElementsByClassName("textStackNum")[i].onmouseleave = function () {
					Dom.expand("information");
				};
				document.getElementsByClassName("textStackNum")[i].style.left = document.getElementsByClassName("theseTextOptions")[i].offsetLeft + 5 + "px";
				document.getElementsByClassName("textStackNum")[i].style.top = document.getElementsByClassName("theseTextOptions")[i].offsetTop + 33 + "px";
			}
		}
	}
}

Dom.buyer.remove = function (i, all) {
	// if the bag was removed
	/*if (i === 5 && Player.inventory.items[5].type === "bag") {
		// rebuild the hotbar
		let str = "<tr>";
		for (let inv = 0; inv < 6; inv++) {
			str += '<td ondrop="Dom.inventory.drop(event, Player.inventory.items, '+inv+');Game.inventoryUpdate(event)" ondragover="Dom.inventory.allowDrop(event)" onmouseover="Dom.inventory.displayInformation(Player.inventory.items['+inv+'], undefined, \'inventoryPage\')" onmouseleave="Dom.expand(\'information\')" ondrag="Dom.expand(\'information\')" onclick="Game.inventoryUpdate()"></td>';
		}
		Dom.elements.itemInventory.innerHTML = str+"</tr>";
		if (Player.inventory.items[5].image === undefined) {
			Dom.elements.itemInventory.getElementsByTagName("td")[5].style.backgroundImage = "url('assets/items/bag/1.png')";
		}
		for (let x = 0; x < 6; x++) {
			if (Player.inventory.items[x].image !== undefined) {
				Dom.elements.itemInventory.getElementsByTagName("td")[x].innerHTML = '<img src="'+Player.inventory.items[x].image+'" draggable="true" ondragstart="Dom.inventory.drag(event, Player.inventory.items, '+x+')"></img>';
				if (Player.inventory.items[x].stacked !== undefined && Player.inventory.items[x].stacked !== 1) {
					Dom.elements.itemInventory.getElementsByTagName("td")[x].innerHTML += "<div class='stackNum' id='stackNum"+x+"'>"+Player.inventory.items[x].stacked+"</div>";
				}
			}
		}
		Player.inventory.items.splice(6,Player.inventory.items.length-6);
		Dom.inventory.update();
	}*/
	if (Player.inventory.items[i].sellCurrency === undefined) {
		Player.inventory.items[i].sellCurrency = 2;
	}
	Dom.inventory.give(Items.currency[Player.inventory.items[i].sellCurrency], (all ? Math.floor(Player.inventory.items[i].stacked/Player.inventory.items[i].sellQuantity)*Player.inventory.items[i].sellPrice : (Player.inventory.items[i].charges === undefined ? Player.inventory.items[i].sellPrice : Math.ceil(Player.inventory.items[i].sellPrice / (Player.inventory.items[i].maxCharges / Player.inventory.items[i].charges)))));
	Dom.inventory.remove(i, all ? Math.floor(Player.inventory.items[i].stacked/Player.inventory.items[i].sellQuantity)*Player.inventory.items[i].sellQuantity : /*Player.inventory.items[i].sellQuantity <= Player.inventory.items[i].stacked ?*/ Player.inventory.items[i].sellQuantity /*: 0*/);
	Dom.buyer.page();
}

Dom.buyer.page = function (npc) {
	Dom.changeBook("buyerPage", npc)//, true/*false*/, true);
	// if the buyer page is being opened not refreshed
	if (npc !== undefined) {0
		Dom.elements.buyerPageChat.innerHTML = npc.chat.buyerGreeting;
	}
	Dom.elements.buyerPageInventory.innerHTML = "";
	for (let i = 0; i < Dom.elements.itemInventory.getElementsByTagName("td").length / 6; i++) {
		Dom.elements.buyerPageInventory.innerHTML += "<tr><td/><td/><td/><td/><td/><td/></tr>";
	}
	let remove = true;
	for (let i = 6; i < Player.inventory.items.length; i++) {
		if (Player.inventory.items[i].image !== undefined) {
			// if the bag is unsafe to remove
			remove = false;//aaaaaaaa???????
		}
	}
	for (let i = 0; i < Player.inventory.items.length; i++) {
		if (Player.inventory.items[i].image !== undefined) {
			// building the table
			Dom.elements.buyerPageInventory.getElementsByTagName("td")[i].innerHTML = "<img src='"+Player.inventory.items[i].image+"' draggable='true' ondragstart='Dom.inventory.drag(event, Player.inventory.items, "+i+")'></img>";
			if (Player.inventory.items[i].stacked !== undefined && Player.inventory.items[i].stacked !== 1) {
				Dom.elements.buyerPageInventory.getElementsByTagName("td")[i].innerHTML += "<div class='stackNum' id='stackNum"+i+"'>"+Player.inventory.items[i].stacked+"</div>";
			}
			Dom.elements.buyerPageInventory.getElementsByTagName("td")[i].getElementsByTagName("img")[0].setAttribute('draggable', false);
			if (Player.inventory.items[i].sellPrice !== undefined && !(Player.inventory.items[i].quest !== undefined && (Player.inventory.items[i].quest === true || Player.inventory.items[i].quest()))) {
				if (Player.inventory.items[i].sellCurrency === undefined) {
					Player.inventory.items[i].sellCurrency = 2;
				}
				if (Player.inventory.items[i].sellQuantity === undefined) {
					Player.inventory.items[i].sellQuantity = 1;
				}
				if (Player.inventory.items[i].stacked === undefined) {
					Player.inventory.items[i].stacked = 1;
				}

				// onclick
				Dom.elements.buyerPageInventory.getElementsByTagName("td")[i].onclick = function () {
					if (!(!remove && i === 5 && Player.inventory.items[5].type === "bag") && Dom.inventory.check(Player.inventory.items[i].id, Player.inventory.items[i].type, Player.inventory.items[i].sellQuantity)) {

						// the maths to work out the prices
						let charges = Player.inventory.items[i].charges || Player.inventory.items[i].durability;
						let maxCharges = Player.inventory.items[i].maxCharges || Player.inventory.items[i].maxDurability;

						let price = charges === undefined ? Player.inventory.items[i].sellPrice : Math.ceil((Player.inventory.items[i].sellPrice-1) * charges / maxCharges);
						let currency = Items.currency[Player.inventory.items[i].sellCurrency].name.toLowerCase();
						let quantity = Player.inventory.items[i].sellQuantity !== 1 ? "per "+Player.inventory.items[i].sellQuantity+"?" : "each?";

						// if there is more than one option of how many to sell
						if (Player.inventory.items[i].stacked >= Player.inventory.items[i].sellQuantity*2) {
							Dom.alert.page("How many <strong>"+Player.inventory.items[i].name+"</strong> would you like to sell for <strong> " + price + " " + currency + "</strong> " + quantity + "? You cannot buy it back!",
							3, [Player.inventory.items[i].sellQuantity, Math.floor(Player.inventory.items[i].stacked/Player.inventory.items[i].sellQuantity)*Player.inventory.items[i].sellQuantity], "buyerPage", {
								target: Dom.buyer.remove,
								ev: [i],
							});
						}

						// if there is only one option of how many to sell
						else {
							Dom.alert.page("Are you sure you want to sell <strong>"+(Player.inventory.items[i].sellQuantity > 1 ? Player.inventory.items[i].sellQuantity+" " : "")+(Player.inventory.items[i].unidentified ? "Unidentified "+Player.inventory.items[i].type[0].toUpperCase()+Player.inventory.items[i].type.substring(1) : Player.inventory.items[i].name)+"</strong> for <strong>" + price + " " + currency + "</strong>? You cannot buy it back!", 2, undefined, "buyerPage", {
								target: Dom.buyer.remove,
								ev: [i],
							});
						}
					}
					else if (!(!remove && i === 5 && Player.inventory.items[5].type === "bag")) {
						Dom.alert.page("You need "+Player.inventory.items[i].sellQuantity+" of these to sell them.", 0, undefined, "buyerPage");
					}
					else {
						Dom.alert.page("Move some items to the bank, sell or dispose of them before you can do that.", 0, undefined, "buyerPage");
					}
				}

			}
			else {
				Dom.elements.buyerPageInventory.getElementsByTagName("td")[i].onclick = function () {
					Dom.alert.page("You cannot sell that item.", 0, undefined, "buyerPage");
				}
			}
			Dom.elements.buyerPageInventory.getElementsByTagName("td")[i].onmouseover = function () {
				Dom.inventory.displayInformation(Player.inventory.items[i], undefined, "buyerPage", "buyer");
			}
			Dom.elements.buyerPageInventory.getElementsByTagName("td")[i].onmouseleave = function () {
				Dom.expand("information");
			}
		}
	}
}

// the hub for opening a dom page from the game !
// deals with currentlyDisplayed etc.
// if there are multiple pages that the player can choose between, they get given the option
// otherwise it goes directly to the single page option.
// the "force" property can be set to true to open the choose dialogue even if there is only one option
Dom.choose.page = function (npcs) {
	// (for now) we just open the first npc that is passed in
	let npc = npcs[0].npc;
	let buttons = npcs[0].buttons; // function descriptions
	let functions = npcs[0].functions;
	let parameters = npcs[0].parameters; // array of arrays
	let force = npcs[0].force; // choose page should be forced even if there is only one func to be chosen from

	let name = npc.name !== undefined ? npc.name : npc; // for cases like Goblin Torch

	if (npc.constructor.name === "NPC" && !Player.metNPCs.includes(name) && npc.meetable && name !== "???") {
		Player.metNPCs.push(name); // for achivements etc
	}

	if (name !== npc) { // if name is npc, then npc has no .name property so isn't actually an npc
		Dom.currentNPC.type = npc.type;
		Dom.currentNPC.id = npc.id;
	}
	if (buttons.length > 1 || npcs.length > 1 || force) {
		// show choose dialogue !

		let chat;
		if (typeof npc.chat !== "undefined" && typeof npc.chat.chooseChat !== "undefined") {
			chat = npc.chat.chooseChat; // christmas chat messages etc are done in main, on creation of the npc
		}
		else {
			chat = ". . ." // temp
			console.warn("No choose chat for npc, please tell Jake", npc);
		}

		// format chat (so we can add properties to it)
		chat = Dom.quest.formatBannerChat(chat);

		chat[chat.length-1].options = [];
		// populate the options:
		for (let i = 0; i < buttons.length; i++) {
			let func = function () {
				if (typeof npcs[0].additionalOnClicks !== "undefined" && typeof npcs[0].additionalOnClicks[i] !== "undefined") {
					npcs[0].additionalOnClicks[i](); // additional function to be called as well as opening the page
				}
				functions[i](...parameters[i]);
				Dom.checkProgress();
			};
			chat[chat.length-1].options.push({
				text: buttons[i],
				action: "function",
				function: functions[i],
				params: parameters[i],
			});
		}
		chat[chat.length-1].options.push({
			text: "Goodbye",
			action: "progress",
		});

		Dom.chat.npcBanner(npc, chat);


		/*if (Dom.changeBook("choosePage")) {
			Dom.elements.choosePageContent.innerHTML = "";
			let total = 0;
			for (let i = 0; i < npcs.length; i++) {

				let npc = npcs[i].npc;
				let buttons = npcs[i].buttons;
				let functions = npcs[i].functions;
				let parameters = npcs[i].parameters;
				let force = npcs[i].force;
				let name = npc.name !== undefined ? npc.name : npc; // for cases like Goblin Torch

				if (npc.type === "players") {
					// Player chooseDOM only
					Dom.elements.choosePagePlayer.hidden = false;

					// find the player in Dom.players
					for (let i = 0; i < Dom.players.length; i++) {
						if (npc.userID === Dom.players[i].userID) {
							npc = Dom.players[i];
							break;
						}
					}

					// achievement points
					Dom.elements.choosePageAchievementPoints.innerHTML = npc.achievementPoints;

					// equipment slots

					let array = ["helm", "chest", "greaves", "boots", "weapon", "mount", "bag"];//aaaaaaaaaaaaaa trinkets
					for (let i = 0; i < array.length; i++) {
						let element = Dom.elements["choosePage"+array[i][0].toUpperCase()+array[i].substring(1)];
						if (npc.equipment[array[i]].image !== undefined) {
							element.innerHTML = "<img src='"+npc.equipment[array[i]].image+"'></img>";
							element.style.backgroundImage = "none";
							element.onmouseover = function () {
								Dom.inventory.displayInformation(npc.equipment[array[i]], undefined, "tradePage", "trade", undefined, npc.equipment);
							}
							element.onmouseleave = function () {
								Dom.expand("information");
							}
						}
						// no item in slot
						else {
							element.innerHTML = "";
							// armour slot
							if (array[i] !== "weapon") {
								element.style.backgroundImage = "url('assets/items/"+array[i]+"/1.png')";
							}
							// weapon slot
							else {
								element.innerHTML = "";
								if (npc.class === "a") {
									element.style.backgroundImage = "url('assets/items/bow/1.png')";
								}
								else if (npc.class === "m") {
									element.style.backgroundImage = "url('assets/items/staff/1.png')";
								}
								else {
									element.style.backgroundImage = "url('assets/items/sword/1.png')";
								}
							}
						}
					}

					// greeting
					let clss = "knight";
					if (npc.class === "a") {
						clss = "archer";
					}
					else if (npc.class === "m") {
						clss = "mage";
					}
					Dom.elements.choosePageContent.innerHTML = "<h1>"+name+"</h1><p>Level "+npc.level+" "+clss;
				}

				// not players (normal)
				else {
					Dom.elements.choosePageContent.innerHTML += "<h1>"+name+"</h1>"+((npc.chat !== undefined && npc.chat.chooseChat !== undefined) ? "<p>"+npc.chat.chooseChat+"</p>" : "");
					Dom.elements.choosePagePlayer.hidden = true;
				}

				// all (players and not players)
				Dom.choose.HTML = "";
				Dom.choose.sideHTML = "";
				Dom.choose.dailyHTML = "";
				for (let i = 0; i < buttons.length; i++) {
					let imagenum = 2;
					if (functions[i] === Dom.driver.page) {
						imagenum = 0;
					}
					else if (functions[i] === Dom.identifier.page) {
						imagenum = 3;
					}
					else if (functions[i] === Dom.buyer.page) {
						imagenum = 4;
					}
					else if (functions[i] === Dom.merchant.page) {
						imagenum = 5;
					}
					else if (functions[i] === Dom.quest.finish) {
						imagenum = 6;
					}
					else if (functions[i] === Dom.quest.start) {
						if (parameters[i][0].repeatTime === "daily" || parameters[i][0].repeatTime === "repeatable") {
							imagenum = 1;
						}
						else {
							imagenum = 7;
						}
					}
					else if (functions[i] === Dom.text.page) {
						if (parameters[i][0] === "Soul Healer") {
							imagenum = 8;
						}
					}
					if (imagenum === 6 || imagenum === 7) {
						if (parameters[i][0].important === true) {
							Dom.elements.choosePageContent.innerHTML += "<p class='choosePageButtons' id='choosePageButtons"+total+"'><img src='assets/icons/choose.png' class='chooseIcon' style='clip: rect("+25*imagenum+"px, 25px, "+25*(imagenum+1)+"px, 0px); margin-top: -"+(25*imagenum+3)+"px'></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>"+buttons[i]+"</strong></p>";
						}
						else {
							Dom.choose.sideHTML += "<p class='choosePageButtons' id='choosePageButtons"+total+"'><img src='assets/icons/choose.png' class='chooseIcon' style='clip: rect("+25*imagenum+"px, 25px, "+25*(imagenum+1)+"px, 0px); margin-top: -"+(25*imagenum+3)+"px'></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+buttons[i]+"</p>";
						}
					}
					else if (imagenum === 0) {
						Dom.choose.dailyHTML += "<p class='choosePageButtons' id='choosePageButtons"+total+"'><img src='assets/icons/choose.png' class='chooseIcon' style='clip: rect("+25*imagenum+"px, 25px, "+25*(imagenum+1)+"px, 0px); margin-top: -"+(25*imagenum+3)+"px'></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+buttons[i]+"</p>";
					}
					else {
						Dom.choose.HTML += "<p class='choosePageButtons' id='choosePageButtons"+total+"'><img src='assets/icons/choose.png' class='chooseIcon' style='clip: rect("+25*imagenum+"px, 25px, "+25*(imagenum+1)+"px, 0px); margin-top: -"+(25*imagenum+3)+"px'></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+buttons[i]+"</p>";
					}
					total++;
				}
				Dom.elements.choosePageContent.innerHTML += Dom.choose.sideHTML + Dom.choose.dailyHTML + Dom.choose.HTML +"<br><br>";
			}

			// after for loop so only one close button even if there are multiple npcs
			Dom.elements.choosePageContent.innerHTML += '<center><div id="choosePageClose" class="closeClass" onclick="Dom.closePage(\'choosePage\')">Close</div></center>'

			// after close button because functions reset
			total = 0;
			for (let x = 0; x < npcs.length; x++) {
				for (let i = 0; i < npcs[x].buttons.length; i++) {
					document.getElementById("choosePageButtons"+total).onclick = function () {
						Dom.closePage("choosePage", true);
						if (typeof npcs[x].additionalOnClicks !== "undefined" && typeof npcs[x].additionalOnClicks[i] !== "undefined") {
							npcs[x].additionalOnClicks[i](); // additional function to be called as well as opening the page
						}
						npcs[x].functions[i](...npcs[x].parameters[i]);
						Dom.checkProgress();
					}
					total++;
				}
			}

		}*/
	}
	else {
		functions[0](...parameters[0]);
		Dom.checkProgress();
	}
}

//
// Settings
//

Dom.settings.keyName = function (ev) {
	if (typeof ev !== "string") {
		ev = ev.key;
	}
	let keyName = "SPACE";
	if (ev !== " ") {
		keyName = ev.toUpperCase();
		/*if (keyName.toLowerCase() !== keyName && keyName.length === 1) {
			keyName = "SHIFT + " + keyName;
		}*/
		if (keyName.substring(0,5) === "ARROW") {
			keyName = keyName.substring(5);
		}
	}
	return keyName;
}

Dom.settings.hotkeys = function (ev) {
	let keyName = ev.key.toUpperCase(); //Dom.settings.keyName(ev);
	// if a hotkey is being set
	if (Dom.settings.hotkey !== undefined) {
		let available = true;
		for (let i = 0; i < Object.keys(User.settings.keyboard).length; i++) {
			if (User.settings.keyboard[Object.keys(User.settings.keyboard)[i]] === keyName && i !== Dom.settings.hotkey) {
				// if that key is already a hot key
				available = false;
			}
		}
		// if that key is available and not a bad key (unidentified)
		if (available && ev.keyCode !== 255 && ev.keyCode !== 173 && ev.keyCode !== 174 && ev.keyCode !== 175 && ev.keyCode !== 176 && ev.keyCode !== 177 && ev.keyCode !== 179 && ev.keyCode !== 44) {

			Keyboard.unlistenKey(User.settings.keyboard[Object.keys(User.settings.keyboard)[Dom.settings.hotkey]]);

			let keysWithVariables = ["UP", "LEFT", "DOWN", "RIGHT", "SPACE"];
			if (keysWithVariables.includes(Object.keys(User.settings.keyboard)[Dom.settings.hotkey])) {
				Keyboard.listenForKeyWithVariable(keyName, Game.keysDown, Object.keys(User.settings.keyboard)[Dom.settings.hotkey]);
			}
			else {
				Keyboard.listenForKey(keyName, Keyboard.downFunctions[Object.keys(User.settings.keyboard)[Dom.settings.hotkey]], Keyboard.upFunctions[Object.keys(User.settings.keyboard)[Dom.settings.hotkey]]);
			}

			User.settings.keyboard[Object.keys(User.settings.keyboard)[Dom.settings.hotkey]] = keyName;
			document.getElementsByClassName("hotkey")[Dom.settings.hotkey].innerHTML = Dom.settings.keyName(ev);
			Dom.settings.hotkey = undefined;
			//User.settings.keyboard = User.settings.keyboard;

		}
		// if it is unavailable set it back to what it was
		else {
			document.getElementsByClassName("hotkey")[Dom.settings.hotkey].innerHTML = Dom.settings.keyName(User.settings.keyboard[Object.keys(User.settings.keyboard)[Dom.settings.hotkey]]);
			Dom.settings.hotkey = undefined;
		}
	}
	// normal hotkey - not being changed
	else if (keyName === User.settings.keyboard.CHAT && Player.unlockedTabs.includes("chat")) {
		Dom.changeBook("chatPage", undefined, true);
	}
	else if (keyName === User.settings.keyboard.INVENTORY && Player.unlockedTabs.includes("inventory")) {
		Dom.changeBook("inventoryPage", undefined, true);
	}
	else if (keyName === User.settings.keyboard.QUESTS && Player.unlockedTabs.includes("quests")) {
		Dom.changeBook("questsPage", undefined, true);
	}
	else if (keyName === User.settings.keyboard.ADVENTURE && Player.unlockedTabs.includes("adventure")) {
		Dom.changeBook("adventurePage", undefined, true);
	}
	else if (keyName === User.settings.keyboard.SPELLBOOK && Player.unlockedTabs.includes("spellbook")) {
		Dom.changeBook("spellbookPage", undefined, true);
	}
	else if (keyName === User.settings.keyboard.SETTINGS) {
		Dom.changeBook("settingsPage", undefined, true);
	}
}

Dom.settings.current = "settingsPage";
Dom.settings.page = function (page) {
	if (page !== undefined) {
		// change to a specific settings page
		Dom.closePage(Dom.settings.current);
		Dom.settings.current = page;
		Dom.changeBook(page, undefined, true);
	}else {
		// change to the last settings page that was open
		Dom.changeBook(Dom.settings.current, undefined, true);
	}
}

// for tutorial settings please see the instructions section!

if (User.settings.coords === true) {
	Dom.elements.coordsOn.checked = true;
}
if (User.settings.fps === true) {
	Dom.elements.fpsOn.checked = true;
}
if (User.settings.hitbox === true) {
	Dom.elements.hitboxesOn.checked = true;
}
if (User.settings.aggro === true) {
	Dom.elements.aggroOn.checked = true;
}
if (User.settings.grid === true) {
	Dom.elements.gridOn.checked = true;
}

// direction - in or out of bank
// num - position in inventory or bank (i)
// other - a string such as "bank" to say where it is going / coming from
Dom.inventory.inOut = function (direction, num, other) {
	if (direction === "in") {

		let array = "";
		let element = "";
		if (isNaN(num)) {
			array = Player.inventory;
			element = document.getElementById(num);
		}
		else {
			array = Player.inventory.items;
			element = Dom.elements.itemInventory.getElementsByTagName("td")[num];
		}

		// bank not trade
		if (other === "bank") {
			// a bag is dropped in the bank bag slots
			let notBag = true;
			if (array[num].type === "bag") {
				for (let i = 0; i < Player.bank.unlockedSlots; i++) {
					if (Player.bank.items[i].image === undefined) {
						Dom.inventory.drop(Dom.elements.bankPageInventory.getElementsByTagName("td")[i], Player.bank.items, i, element, array, num);
						notBag = false;
						break;
					}
				}
			}
			// any item is dropped in the main bank space
			if (notBag) {
				for (let i = 6; i < Player.bank.items.length; i++) {
					if (Player.bank.items[i].image === undefined) {
						// right clicked (only 1 is moved across)
						if (/*array[num].stacked > 1 && */event.button >= 2) {
							Dom.inventory.drop(Dom.elements.bankPageInventory.getElementsByTagName("td")[i], Player.bank.items, i, element, array, num, Dom.elements.bankPageInventory, Dom.elements.itemInventory, "stackNum", "bankStackNum");
						}
						// left clicked (all are moved across)
						else {
							Dom.inventory.drop(Dom.elements.bankPageInventory.getElementsByTagName("td")[i], Player.bank.items, i, element, array, num);
						}
						break;
					}
				}
			}
		}
		// trade not bank
		else {
			for (let i = 0; i < 24; i++) {
				if (Dom.trade.items[i].image === undefined) {
					// right clicked (only 1 is moved across)
					if (/*array[num].stacked > 1 && */event.button >= 2) {
						Dom.inventory.drop(Dom.elements.tradePageInventory.getElementsByTagName("td")[i], Dom.trade.items, i, element, array, num, Dom.elements.tradePageInventory, Dom.elements.itemInventory, "stackNum", "tradeStackNum");
					}
					// left clicked (all are moved across)
					else {
						Dom.inventory.drop(Dom.elements.tradePageInventory.getElementsByTagName("td")[i], Dom.trade.items, i, element, array, num);
					}
					break;
				}
			}
		}
	}
	// from bank/trade to inventory
	else {
		let array = Player.bank.items;
		let element = Dom.elements.bankPageInventory;
		let stackNum = "bankStackNum";
		if (other === "trade") {
			array = Dom.trade.items;
			element = Dom.elements.tradePageInventory;
			stackNum = "tradeStackNum";
		}
		for (let i = 0; i < Player.inventory.items.length; i++) {
			if (Player.inventory.items[i].image === undefined) {
				// right clicked (only 1 is moved across)
				if (/*array[num].stacked > 1 && */event.button >= 2) {
					Dom.inventory.drop(Dom.elements.itemInventory.getElementsByTagName("td")[i], Player.inventory.items, i, element.getElementsByTagName("td")[num], array, num, Dom.elements.itemInventory, element, stackNum, "stackNum");
				}
				// left clicked (all are moved across)
				else {
					Dom.inventory.drop(Dom.elements.itemInventory.getElementsByTagName("td")[i], Player.inventory.items, i, element.getElementsByTagName("td")[num], array, num);
				}
				break;
			}
		}
	}
}

Dom.bank.page = function (npc) {
	Dom.changeBook("inventoryPage");
	Dom.changeBook("bankPage", npc);
	Dom.bank.active = true;

	Dom.instructions.page(16); // open if they haven't already seen them

	let html = "<thead>"
	for (let i = 0; i < Player.bank.items.length; i+=6) {
		let str = "<tr>";
		for (let inv = i; inv < i+6; inv++) {
			str += '<td ondrop="Dom.inventory.drop(event, Player.bank.items, '+inv+');Game.inventoryUpdate(event)" ondragover="Dom.inventory.allowDrop(event)" onmouseover="Dom.inventory.displayInformation(Player.bank.items['+inv+'], undefined, \'bankPage\')" onmouseleave="Dom.expand(\'information\')" ondrag="Dom.expand(\'information\')" onclick="Game.inventoryUpdate()"></td>';
		}
		html += str+"</tr>";
		if (i === 0) {
			html += "</thead><tbody>";
		}
	}
	Dom.elements.bankPageInventory.innerHTML = html+"</body>";

	/*let remove = true;
	for (let i = 6; i < Player.inventory.items.length; i++) {
		if (Player.inventory.items[i].image !== undefined) {
			// if the bag is unsafe to remove
			remove = false;
		}
	}*/
	let nextUnlock = true;
	for (let i = 0; i < 6; i++) {
		if (i < Player.bank.unlockedSlots) {
			// draw bag slot background if there is no item
			if (Player.bank.items[i].image === undefined) {
				Dom.elements.bankPageInventory.getElementsByTagName("td")[i].style.backgroundImage = "url('./assets/items/bag/1.png'), url('assets/interface/gearBackground.png')";
			}
		}
		else {
			Dom.elements.bankPageInventory.getElementsByTagName("td")[i].style.backgroundImage = "url('./assets/items/bag/0.png'), url('assets/interface/gearBackground.png')";
			if (nextUnlock) {
				Dom.elements.bankPageInventory.getElementsByTagName("td")[i].onclick = function () {
					if (Dom.inventory.check(2, "currency") /*+ Dom.inventory.check(2, "currency", undefined, undefined, Player.bank.items)*/ >= BagSlotCosts[i]) {
						Dom.alert.page("Would you like to buy this bag slot for "+BagSlotCosts[i]+" gold?", 2, undefined, "bankPage", {
							target: function () {
								Dom.inventory.removeById(2, "currency", BagSlotCosts[i]);
								Player.bank.unlockedSlots++;
								Dom.bank.page();
							},
							ev: [i],
						});
					}
					else {
						Dom.alert.page("You cannot afford this bag slot. Come back when you have "+BagSlotCosts[i]+" gold", undefined, undefined, "bankPage");
					}
				}
				nextUnlock = false;
			}
			else {
				Dom.elements.bankPageInventory.getElementsByTagName("td")[i].onclick = function () {
					Dom.alert.page("You must unlock the previous bag slot first.", undefined, undefined, "bankPage");
				}
			}
		}
	}
	for (let i = 0; i < Player.bank.items.length; i++) {
		if (Player.bank.items[i].image !== undefined) {
			// building the table
			Dom.elements.bankPageInventory.getElementsByTagName("td")[i].innerHTML = "<img src='"+Player.bank.items[i].image+"' draggable='true' ondragstart='Dom.inventory.drag(event, Player.bank.items, "+i+")' onclick='Dom.inventory.inOut(\"out\", "+i+", \"bank\")'></img>";
			if (Player.bank.items[i].stacked !== undefined && Player.bank.items[i].stacked !== 1) {
				Dom.elements.bankPageInventory.getElementsByTagName("td")[i].innerHTML += "<div class='stackNum' id='bankStackNum"+i+"'>"+Player.bank.items[i].stacked+"</div>";
			}
		}
	}
}

Dom.driver.page = function (npc, destinations) {
	if (Dom.changeBook("driverPage", npc)) {//, true/*false*/, true);
		Dom.elements.driverPageBuy.style.display = "none";
		Dom.elements.driverPageMain.innerHTML = "<br><h1>"+npc.name+"</h1>";
		Dom.elements.driverPageMain.innerHTML += "<p>"+npc.chat.driverText+"<p><br>";
		for (let i = 0; i < destinations.length; i++) {
			Dom.elements.driverPageMain.innerHTML += "<div class='driver' ><div class='driverImage' style='background-image: url(\"./assets/"+destinations[i].image+"\")'></div><div class='mailTitle'><strong>"+destinations[i].title+"</strong></div><div class='driverDescription'>"+destinations[i].description+"</div><div class='driverDescription2'></div></div>";
			while (document.getElementsByClassName("driverDescription")[i].scrollHeight > document.getElementsByClassName("driverDescription")[i].offsetHeight) {
				document.getElementsByClassName("driverDescription2")[i].innerHTML = document.getElementsByClassName("driverDescription")[i].innerHTML.substring(document.getElementsByClassName("driverDescription")[i].innerHTML.lastIndexOf(" ")) + document.getElementsByClassName("driverDescription2")[i].innerHTML;
				document.getElementsByClassName("driverDescription")[i].innerHTML = document.getElementsByClassName("driverDescription")[i].innerHTML.substring(0, document.getElementsByClassName("driverDescription")[i].innerHTML.lastIndexOf(" "));
			}
		}
		for (let i = 0; i < destinations.length; i++) {
			document.getElementsByClassName("driver")[i].onclick = function () {
				if (Dom.driver.previous !== undefined) {
					document.getElementsByClassName("driver")[Dom.driver.previous].style.backgroundColor = "var(--bottom)";
				}
				if (Dom.driver.previous !== i) {
					Dom.driver.previous = i;
					document.getElementsByClassName("driver")[i].style.backgroundColor = "var(--selected)";
					Dom.elements.driverPageBuy.innerHTML = "Go to <strong>"+destinations[i].title+"</strong> for <strong>"+destinations[i].cost+"</strong> gold";
					Dom.elements.driverPageBuy.style.display = "";
				}else {
					Dom.driver.previous = undefined;
					Dom.elements.driverPageBuy.style.display = "none";
				}
			}
		}
		Dom.elements.driverPageBuy.onclick = function () {
			if (Dom.inventory.check(2, "currency", destinations[Dom.driver.previous].cost)) {
				Dom.alert.page("Are you sure you want to go to <strong>"+destinations[Dom.driver.previous].title+"</strong> for <strong>"+destinations[Dom.driver.previous].cost+"</strong> gold?", 2, undefined, "driverPage", {
					target: function (destination) {
						Dom.inventory.removeById(2, "currency", destinations[Dom.driver.previous].cost);
						Game.loadArea(destination.destinationName, destination.destinationPosition);
						Dom.driver.previous = undefined;
					},
					ev: [destinations[Dom.driver.previous]],
				});
			}
			else {
				Dom.elements.driverPageBuy.style.borderColor = "red";
				setTimeout(function () {
					Dom.elements.driverPageBuy.style.borderColor = "var(--border)";
				},200);
			}
		}
	}
}

Dom.elements.closeDriver.onclick = function () {
	Dom.driver.previous = undefined;
	Dom.closePage("driverPage");
}

// uses the same page as Dom.driver.page (see above) but with slightly different code
Dom.spellChoice.page = function (npc, spells) {
	if (Dom.changeBook("driverPage", npc)) {//, true/*false*/, true);
		Dom.elements.driverPageBuy.style.display = "none";
		Dom.elements.driverPageMain.innerHTML = "<br><h1>"+npc.name+"</h1>";
		Dom.elements.driverPageMain.innerHTML += "<p>"+npc.chat.spellChoiceText+"<p><br>";

		for (let i = 0; i < spells.length; i++) {
			let spell = Spells[spells[i].spellId];
			let tier = spells[i].spellTier;

			// tbd pg make it show channel time and mana cost (see commented line below)
			//om.elements.driverPageMain.innerHTML += "<div class='driver' ><div class='driverImage' style='background-image: url(\"./"+spell.image+"\")'></div><div class='mailTitle'><strong>"+spell.name+"</strong></div><div class='driverDescription'> <b>Difficulty</b>: "+spell.difficulty+"<br><b>Channel time</b>: "+spell.channelTime[tier]+"<br><b>Mana cost</b>: "+spell.manaCost[tier]+"<br>"+spell.description[tier]+"</div><div class='driverDescription2'></div></div>";
			Dom.elements.driverPageMain.innerHTML += "<div class='driver' ><div class='driverImage' style='background-image: url(\"./"+spell.image+"\")'></div><div class='mailTitle'><strong>"+spell.name+"</strong></div><div class='driverDescription'> <b>Difficulty</b>: "+spell.difficulty+"<br>"+spell.description[tier]+"</div><div class='driverDescription2'></div></div>";

			while (document.getElementsByClassName("driverDescription")[i].scrollHeight > document.getElementsByClassName("driverDescription")[i].offsetHeight) {
				document.getElementsByClassName("driverDescription2")[i].innerHTML = document.getElementsByClassName("driverDescription")[i].innerHTML.substring(document.getElementsByClassName("driverDescription")[i].innerHTML.lastIndexOf(" ")) + document.getElementsByClassName("driverDescription2")[i].innerHTML;
				document.getElementsByClassName("driverDescription")[i].innerHTML = document.getElementsByClassName("driverDescription")[i].innerHTML.substring(0, document.getElementsByClassName("driverDescription")[i].innerHTML.lastIndexOf(" "));
			}
		}

		for (let i = 0; i < spells.length; i++) {
			let spell = Spells[spells[i].spellId];
			let tier = spells[i].spellTier;

			document.getElementsByClassName("driver")[i].onclick = function () {
				if (Dom.driver.previous !== undefined) {
					document.getElementsByClassName("driver")[Dom.driver.previous].style.backgroundColor = "var(--bottom)";
				}
				if (Dom.driver.previous !== i) {
					Dom.driver.previous = i;
					document.getElementsByClassName("driver")[i].style.backgroundColor = "var(--selected)";
					Dom.elements.driverPageBuy.innerHTML = "Learn <strong>"+spell.name+"</strong>";
					Dom.elements.driverPageBuy.style.display = "";
				}
				else {
					Dom.driver.previous = undefined;
					Dom.elements.driverPageBuy.style.display = "none";
				}
			}
		}

		Dom.elements.driverPageBuy.onclick = function () {
			let id = Spells[spells[Dom.driver.previous].spellId].id;
			let tier = spells[Dom.driver.previous].spellTier;

			Game.hero.spells[0] = {id: id, tier: tier};

			Dom.driver.previous = undefined;
			Dom.closePage("driverPage");
		}
	}
}

Dom.mail.page = function (override) {
	if (Dom.changeBook("mailPage") || override) {//, true/*false*/, true);
		Dom.elements.mailPage.innerHTML = "<br><h1>Mailbox</h1><br>";
		for (let i = Player.mail.mail.length-1; i >= 0; i--) {
			Dom.elements.mailPage.innerHTML += "<div "+/*(Player.mail.mail[i].flag ? "style='border-color: black'" : "")+*/"class='mail' "+(Player.mail.opened.includes(Player.mail.mail[i].title) && !Player.mail.mail[i].flag ?"style='background-color: var(--bottom);'":"")+"><div class='mailImage'></div><div class='mailTitle'><strong>"+Player.mail.mail[i].title+"</strong><br>From "+Player.mail.mail[i].sender+"<br>Received on "+Player.mail.mail[i].date+"</div><div class='mailFlag'></div><div class='mailDelete'>X</div></div>";
			if (Player.mail.mail[i].flag) {
				document.getElementsByClassName("mailFlag")[Player.mail.mail.length-1-i].innerHTML +=
				'<svg class="flag" height="22" width="15" tabindex = "0">\
				<polygon points ="0,0 15,1 15,13 1,12 1,22 0,22 0,0 1,0 1,12" style="fill:#ee0000;stroke:var(--text);stroke-width:1" />\
				</svg>';
			}else {
				document.getElementsByClassName("mailFlag")[Player.mail.mail.length-1-i].innerHTML +=
				'<svg class="flag" height="22" width="15" tabindex = "0">\
				<polygon points ="0,0 15,1 15,13 1,12 1,22 0,22 0,0 1,0 1,12" style="fill:var(--border);stroke:var(--text);stroke-width:1" />\
				</svg>';
			}
		}
		if (Player.mail.mail.length === 0) {
			Dom.elements.mailPage.innerHTML += "<br><br>You have no mail, come back soon.<br><br><br><br>";
		}
		Dom.elements.mailPage.innerHTML += "<br><br><center><div class='closeClass' id='closeMail' onclick='Dom.closePage(\"mailPage\")'>Close</div></center>";
		for (let i = Player.mail.mail.length-1; i >= 0; i--) {
			let ii = Player.mail.mail.length-1-i;
			if (Player.mail.mail[i].image.substring(0,2) === "./") {
				document.getElementsByClassName("mailImage")[ii].style.backgroundImage = "url('"+Player.mail.mail[i].image+".png')";
			}
			else {
				let offset = Offsets[Player.mail.mail[i].image];
				if (typeof offset === "undefined") {
					offset = Offsets.shadow;
				}
				document.getElementsByClassName("mailImage")[ii].style.backgroundImage = "url('"+offset.image+".png')";
				document.getElementsByClassName("mailImage")[ii].style.backgroundPosition = offset.x+"%"+offset.y+"%";
			}
			document.getElementsByClassName("mailDelete")[ii].onclick = function () {
				Dom.mail.notOpen = true;
				Dom.alert.page("Are you sure you want to delete this mail? It will be lost forever!", 2, undefined, "mailPage", {
					target: function () {
						Player.mail.mail.splice(i, 1);
						Dom.mail.page();
						Game.mailboxUpdate("read");
						Dom.mail.page(true);
					}
				});
			}
			document.getElementsByClassName("mailFlag")[ii].onclick = function () {
				Dom.mail.notOpen = true;
				if (Player.mail.mail[i].flag) {
					Player.mail.mail[i].flag = false;
				}
				else {
					Player.mail.mail[i].flag = true;
				}
				Dom.mail.page(true);
			}
			document.getElementsByClassName("mail")[ii].onclick = function () {
				// if you did not click on delete or flag
				if (!Dom.mail.notOpen) {
					let first = false;
					// if it is unopened
					if (!Player.mail.opened.includes(Player.mail.mail[i].title)) {
						first = true;
						Player.mail.opened.push(Player.mail.mail[i].title);
						if (Player.mail.mail[i].give !== undefined && Dom.inventory.requiredSpace(Player.mail.mail[i].give)) {
							for (let x = 0; x < Player.mail.mail[i].give.length; x++) {
								Dom.inventory.give(Player.mail.mail[i].give[x].item, Player.mail.mail[i].give[x].quantity);
							}
						}else if (Player.mail.mail[i].give !== undefined) {
							Player.mail.opened.pop();
							Dom.alert.page("You do not have sufficient inventory space to hold the items attached to this mail. Come back to collect them when you have more space.", 0, undefined, "mailPage");
						}
					}
					Dom.closePage("mailPage", true);
					if (Player.mail.mail[i].openFunction !== "quest.start") {
						ExecuteFunctionByName(Player.mail.mail[i].openFunction, Dom, Player.mail.mail[i].openParameters);
					}
					else {
						let quest = Quests[Player.mail.mail[i].openParameters[0]][Player.mail.mail[i].openParameters[1]];
						if (Player.quests.possibleQuestArray.includes(quest.quest)) {
							ExecuteFunctionByName("quest.start", Dom, [quest]);
						}
						else {
							ExecuteFunctionByName("text.page", Dom, [quest.quest, "<strong>"+(quest.startName)+"</strong><br>"+(quest.startChat), true, [], []]);
						}
					}
					Game.mailboxUpdate("read");
				}else {
					Dom.mail.notOpen = false;
				}
			}
		}
	}
}

Dom.mail.give = function (title, sender, image, openFunction, openParameters, give, noRepeat) {
	if (!Player.mail.received.includes(title) || !noRepeat) {
		Player.mail.mail.push({
			title: title,
			sender: sender,
			image: image,
			date: GetFullDateString(),
			openFunction: openFunction,
			openParameters: openParameters,
			give: give,
		});
		if (!Player.mail.received.includes(title)) {
			Player.mail.received.push(title);
		}
		if (typeof Game !== "undefined") {
			Game.mailboxUpdate("received");
		}
	}
}

Dom.mail.unread = function () {
	let unreadMail = 0;
	for (let i = 0; i < Player.mail.mail.length; i++) {
		if (!Player.mail.opened.includes(Player.mail.mail[i].title)) {
			unreadMail++;
		}
	}
	return unreadMail;
}

Dom.adventure.update = function () {
	Dom.elements.adventureWrapper.innerHTML = `<div id="level" style="display:inline;">Level ${Player.level}</div>
		<a href="./achievements/index.html" target="_blank" style="font-size: 22px; display: inline; float: right;">Achievements</a>
		<br><br>Suggested Content:`;
	for (let i = 0; i < Object.keys(Adventure).length; i++) {
		if (Adventure[Object.keys(Adventure)[i]].condition()) {
			let html = Adventure[Object.keys(Adventure)[i]].html;
			if (Adventure[Object.keys(Adventure)[i]].special !== undefined) {
				html = html.replace(/SPECIAL/, Adventure[Object.keys(Adventure)[i]].special());
			}
			Dom.elements.adventureWrapper.innerHTML += html;
		}
	}
}

// called upon clicking on an equipment slot (NOT dragging away from)
Dom.inventory.reEquip = function (event) {
	let slot = event.target.id;//composedPath()[0].id;
	if (!Dom.inventory.deEquip) {
		for (let i = Player.inventory.items.length-1; i >= 0; i--) {
			if (Player.inventory.items[i].type === slot || (slot === "weapon" && (Player.inventory.items[i].type === "sword" || Player.inventory.items[i].type === "staff" || Player.inventory.items[i].type === "bow" || Player.inventory.items[i].type === "rod" || Player.inventory.items[i].type === "tool"))) {
				Dom.inventory.drop(event, Player.inventory, slot, Dom.elements.itemInventory.getElementsByTagName("td")[i], Player.inventory.items, i); // to, from
				break;
			}
		}
	}
}

Dom.inventory.channel = function (array, i, hotbar) {

	// set cooldownStart for all identical items
	for (let x = 0; x < Player.inventory.items.length; x++) {
		if (Player.inventory.items[x].type === array[i].type && Player.inventory.items[x].id === array[i].id) {
			Player.inventory.items[x].cooldownStart = GetFullDateTime();
		}
	}

	// call the function
	array[i].onClickFunction(i, hotbar);

}

// called on init for each item in inventory and bank; and whenever an item is given
// array = array item is contained in
// i = item's index in the array / its key in the object
// element = element that the item is being prepared for
Dom.inventory.prepare = function (array, i, element) {

	// conditional choose stats init
	if (array[i].conditionalChooseStats !== undefined) {
		if (array[i].chooseStats === undefined) {
			array[i].chooseStats = [];
		}
		//Dom.inventory.conditionalStats(); // now called every tick in main
	}

	// add class stats to stats
	if (array[i].classStats !== undefined && array[i].classStats[Player.class] !== undefined) {
		Object.assign(array[i].stats, array[i].classStats[Player.class]);
	}

	// set food onclick
	if (array[i].healthRestore !== undefined && array[i].healthRestoreTime !== undefined) {
		Items[array[i].type][array[i].id].onClickFunction = Dom.inventory.food;
	}

	// set teleport onclick
	if (array[i].type === "teleport") {
		Items[array[i].type][array[i].id].onClickFunction = Dom.inventory.teleport;
	}

	// set onClicks for equipment only
	//if (array[i].name !== undefined) {

	// set the true onClick to onClickFunction
	//Items[array[i].type][array[i].id].onClickFunction = Items[array[i].type][array[i].id].onClick;

	// work out type as the equipment slot (weapon, helm, etc...)
	let type;
	if (array[i].type === "sword" || array[i].type === "staff" || array[i].type === "bow" || array[i].type === "rod" || array[i].type === "tool") {
		type = "weapon";
	}
	else if (array[i].type === "helm" || array[i].type === "chest" || array[i].type === "greaves" || array[i].type === "boots" || array[i].type === "mount" || array[i].type === "bag") { // aaaaaaaa trinkets
		type = array[i].type;
	}

	// if the item is a piece of equipment (and not unidentified) then set the onClick
	if (type !== undefined && !array[i].unidentified) {

		// defines onclick for all items in the inventory!!! this stays with them no matter where they move!!
		// only called on clicking, not dragging
		// set by inventory.prepare (this parent function) on start of game / item being given
		// only applies to slots with items in them (i.e. the items themselves)
		Items[array[i].type][array[i].id].onClick = function (i) {

			// if bank is open then bank
			if (Dom.bank.active) {
				Dom.inventory.inOut("in", i, "bank");
			}

			// if trade is open then trade
			else if (Dom.trade.active) {
				Dom.inventory.inOut("in", i, "trade");
			}

			// if not equipped then equip
			else if (!isNaN(i)) {
				if (type === "mount" && !Player.overallProgress.mountSlotUnlocked) {
					Dom.alert.page("You have not unlocked mounts yet!");
				}
				else {
					// allowed to equip
					Dom.inventory.drop(Dom.elements[Dom.inventory.slotKeys[type]], Player.inventory, type, Dom.elements.itemInventory.getElementsByTagName("td")[i], Player.inventory.items, i); // to, from
				}
			}

			// clicking on an equipped item, so chooseStats, onClickFunction, or unequip
			else {
				let chooseStats = false;
				let onClick = false;

				// chooseStats onClick if necessary
				if (Player.inventory[i].chooseStats !== undefined && !Player.inventory[i].allChooseStats) {
					Dom.inventory.deEquip = true;
					if (Dom.inventory.chooseStats(i)) {
						chooseStats = true;
					}
				}

				// true onClick exists and is allowed
				else if (Player.inventory[i].onClickFunction !== undefined && !Player.inventory[i].imageLoading && (Player.inventory[i].onClickEventRequirement === undefined || Player.inventory[i].onClickEventRequirement === Event.event) && (Player.inventory[i].onClickAreaRequirement === undefined || Player.inventory[i].onClickAreaRequirement.includes(Game.areaName))) {

					onClick = true; // overrides unequipping item on click

					// cooldown exists
					if (Player.inventory[i].cooldown !== undefined) {

						// if it is not currently on cooldown
						if (Player.inventory[i].cooldownStart === undefined || parseInt(Player.inventory[i].cooldownStart) + Player.inventory[i].cooldown <= parseInt(GetFullDateTime())) {

							// set cooldownStart for all identical items (NOT IF CHANNELED BECAUSE DONE AFTER)
							if (Player.inventory[i].channel === undefined) {
								for (let x = 0; x < Player.inventory.items.length; x++) {
									if (Player.inventory.items[x].type === Player.inventory[i].type && Player.inventory.items[x].id === Player.inventory[i].id) {
										Player.inventory.items[x].cooldownStart = GetFullDateTime();
									}
								}
							}

							// call the normal onClick since the cooldown was not active

							// must be channelled
							if (Player.inventory[i].channel !== undefined) {
								Game.hero.channel(Dom.inventory.channel, [Player.inventory, i], Player.inventory[i].channel, Player.inventory[i].name);
							}

							// no channel (call immediately)
							else {
								Player.inventory[i].onClickFunction(i, hotbar);
							}

						}

						// if it is currently on cooldown
						else {
							Dom.chat.insert("This item is on cooldown. You can use it in " + CalculateTime(GetFullDateTime(), (parseInt(Player.inventory[i].cooldownStart) + Player.inventory[i].cooldown).toString()));
						}

					}

					// no cooldown
					else {

						// must be channelled
						if (Player.inventory[i].channel !== undefined) {
							Game.hero.channel(Player.inventory[i].onClickFunction, [i], Player.inventory[i].channel, Player.inventory[i].name);
						}

						// no channel (call immediately)
						else {
							Player.inventory[i].onClickFunction(i);
						}

					}
				}

				// unequip the item
				if (!chooseStats && !onClick) {
					if (Dom.inventory.give(Player.inventory[i], 1, undefined, true) !== false) { // don't save while you have one equipped AND on in inventory
						Dom.inventory.deEquip = true;
						Dom.inventory.removeEquipment(Player.inventory[i]); // handles changing of stats, bag slots, etc.
						Player.inventory[i] = {};
						Game.equipmentUpdate();
						document.getElementById(Dom.inventory.slotKeys[i]).innerHTML = "";
						Game.inventoryUpdate();
					}
				}
			}
		}
	}

	// set the onClick for items which are not equipment (unidentified items are included here)
	else {
		Items[array[i].type][array[i].id].onClick = function (i, hotbar) {

			// if bank is open then bank
			if (Dom.bank.active) {
				Dom.inventory.inOut("in", i, "bank");
			}

			// if trade is open then trade
			else if (Dom.trade.active) {
				Dom.inventory.inOut("in", i, "trade");
			}

			let array = Player.inventory.items;
			if (isNaN(i)) {
				array = Player.inventory;
			}

			// true onClick exists and is allowed
			else if (array[i].onClickFunction !== undefined && !Player.inventory.items[i].unconsumable && !array[i].imageLoading && (array[i].onClickEventRequirement === undefined || array[i].onClickEventRequirement === Event.event) && (array[i].onClickAreaRequirement === undefined || array[i].onClickAreaRequirement.includes(Game.areaName))) {

				// cooldown exists
				if (array[i].cooldown !== undefined) {

					// if it is not currently on cooldown
					if (array[i].cooldownStart === undefined || parseInt(array[i].cooldownStart) + array[i].cooldown <= parseInt(GetFullDateTime())) {

						// set cooldownStart for all identical items (NOT IF CHANNELED BECAUSE DONE AFTER)
						if (array[i].channel === undefined) {
							for (let x = 0; x < Player.inventory.items.length; x++) {
								if (Player.inventory.items[x].type === array[i].type && Player.inventory.items[x].id === array[i].id) {
									Player.inventory.items[x].cooldownStart = GetFullDateTime();
								}
							}
						}

						// call the normal onClick since the cooldown was not active

						// must be channelled
						if (array[i].channel !== undefined) {
							Game.hero.channel(Dom.inventory.channel, [array, i, hotbar], array[i].channel, array[i].name);
						}

						// no channel (call immediately)
						else {
							array[i].onClickFunction(i, hotbar);
						}

					}

					// if it is currently on cooldown
					else {
						Dom.chat.insert("This item is on cooldown. You can use it in " + CalculateTime(GetFullDateTime(), (parseInt(array[i].cooldownStart) + array[i].cooldown).toString()));
					}

				}

				// no cooldown
				else {

					// must be channelled
					if (array[i].channel !== undefined) {
						Game.hero.channel(array[i].onClickFunction, [i, hotbar], array[i].channel, array[i].name);
					}

					// no channel (call immediately)
					else {
						array[i].onClickFunction(i, hotbar);
					}
				}
			}
		}
	}
	//}

	//if (!array[i].unidentified) {
	/*array[i].onClickFunction = Items[array[i].type][array[i].id].onClick;
	if (array[i].channel !== undefined) {
		array[i].onClick = function (inventoryPosition) {
			if (Dom.inventory.cooldown(inventoryPosition, false, true)) {
				Game.hero.channel(Dom.inventory.cooldown, [inventoryPosition], Player.inventory.items[inventoryPosition].channel, Player.inventory.items[inventoryPosition].name);
			}
		}
	}
	else {
		array[i].onClick = Dom.inventory.cooldown;
	}*/

	// copy over functions from itemdata to Player, since they are not saved by json
	// tbd do this for intervalfunction, onwalk, etc. and make main nicer
	array[i].onClick = Items[array[i].type][array[i].id].onClick;
	array[i].onClickFunction = Items[array[i].type][array[i].id].onClickFunction;
	array[i].onKill = Items[array[i].type][array[i].id].onKill;
	array[i].onHit = Items[array[i].type][array[i].id].onHit;
	array[i].onAttack = Items[array[i].type][array[i].id].onAttack;
	array[i].onCatch = Items[array[i].type][array[i].id].onCatch;
	array[i].onOpen = Items[array[i].type][array[i].id].onOpen;
	if (!array[i].quest) {
		array[i].quest = Items[array[i].type][array[i].id].quest;
	}
	/*}

	// unidentified item onclick (for bank and trade)
	else {
		array[i].onClick = function (inventoryPosition) {
			Dom.inventory.cooldown(inventoryPosition)
		}
	}*/

	// update the element
	if (element !== undefined && element !== null) {
		element.innerHTML = "<img src='"+array[i].image+"' draggable='true' ondragstart='Dom.inventory.drag(event,"+(array === Player.inventory.items ? "Player.inventory.items,"+i : 'Player.inventory, "'+i+'"')+")' "+(array[i].onClick !== undefined ? "onclick='Player.inventory"+(array === Player.inventory.items?".items["+i+"].onClick("+i+")'":"."+i+".onClick(\""+i+"\")'") : "")+"></img>";
		if (array[i].stacked !== undefined && array[i].stacked !== 1) {
			element.innerHTML += "<div class='stackNum' id='stackNum"+i+"'>"+array[i].stacked+"</div>";
		}
	}

}

document.oncontextmenu = function (ev) {
	if (ev.target.onclick !== null) {
		ev.target.onclick();
	}
}

// return item given the inventory position
Dom.inventory.getItemFromPosition = function (inventoryPosition) {
    if (Number.isInteger(inventoryPosition)) {
        // not equipped
        return Player.inventory.items[inventoryPosition];
    }
    else {
        // equipped (e.g. "helm", "weapon", ...)
        return Player.inventory[inventoryPosition];
    }
}

Dom.inventory.conditionalChooseStats = function () {
	for (let i = 0; i < Player.inventory.items.length; i++) {
		if (Player.inventory.items[i].conditionalChooseStats !== undefined) {
			for (let x = 0; x < Player.inventory.items[i].conditionalChooseStats.length; x++) {
				if (Items[Player.inventory.items[i].type][Player.inventory.items[i].id].conditionalChooseStats[x].condition(Player.inventory.items[i]) && !Object.keys(Player.inventory.items[i].chooseStats).includes(Object.keys(Player.inventory.items[i].conditionalChooseStats[x])[0])) {
					Player.inventory.items[i].chooseStats[Object.keys(Player.inventory.items[i].conditionalChooseStats[x])[0]] = Player.inventory.items[i].conditionalChooseStats[x][Object.keys(Player.inventory.items[i].conditionalChooseStats[x])[0]];
				}
				else if (!Items[Player.inventory.items[i].type][Player.inventory.items[i].id].conditionalChooseStats[x].condition(Player.inventory.items[i]) && Object.keys(Player.inventory.items[i].chooseStats).includes(Object.keys(Player.inventory.items[i].conditionalChooseStats[x])[0])) {
					delete Player.inventory.items[i].chooseStats[Object.keys(Player.inventory.items[i].conditionalChooseStats[x])[0]];
				}
			}
		}
	}
	// equipped slots
	for (let i = 0; i < 5; i++) {
		if (Player.inventory[Object.keys(Player.inventory)[i]].conditionalChooseStats !== undefined) {
			for (let x = 0; x < Player.inventory[Object.keys(Player.inventory)[i]].conditionalChooseStats.length; x++) {
				if (Items[Player.inventory[Object.keys(Player.inventory)[i]].type][Player.inventory[Object.keys(Player.inventory)[i]].id].conditionalChooseStats[x].condition(Player.inventory[Object.keys(Player.inventory)[i]]) && !Object.keys(Player.inventory[Object.keys(Player.inventory)[i]].chooseStats).includes(Object.keys(Player.inventory[Object.keys(Player.inventory)[i]].conditionalChooseStats[x])[0])) {
					Player.inventory[Object.keys(Player.inventory)[i]].chooseStats[Object.keys(Player.inventory[Object.keys(Player.inventory)[i]].conditionalChooseStats[x])[0]] = Player.inventory[Object.keys(Player.inventory)[i]].conditionalChooseStats[x][Object.keys(Player.inventory[Object.keys(Player.inventory)[i]].conditionalChooseStats[x])[0]];
				}
				else if (!Items[Player.inventory[Object.keys(Player.inventory)[i]].type][Player.inventory[Object.keys(Player.inventory)[i]].id].conditionalChooseStats[x].condition(Player.inventory[Object.keys(Player.inventory)[i]]) && Object.keys(Player.inventory[Object.keys(Player.inventory)[i]].chooseStats).includes(Object.keys(Player.inventory[Object.keys(Player.inventory)[i]].conditionalChooseStats[x])[0])) {
					delete Player.inventory[Object.keys(Player.inventory)[i]].chooseStats[Object.keys(Player.inventory[Object.keys(Player.inventory)[i]].conditionalChooseStats[x])[0]];
				}
			}
		}
	}
}

// reevaluate conditional stats of equipped items (should be called every tick in main, since needs to account for player movement, enemy movement, despawning, etc.)
Dom.inventory.conditionalStats = function () {
	for (let i = 0; i < Player.conditionalStats.length; i++) {
		for (let x = 0; x < Items[Player.conditionalStats[i].type][Player.conditionalStats[i].id].conditionalStats.length; x++) {
			let conditionalStat = Items[Player.conditionalStats[i].type][Player.conditionalStats[i].id].conditionalStats[x];
			if (conditionalStat.condition()) {
				if (!Player.conditionalStats[i].active[x]) {
					Dom.inventory.beforeChangedStats();
					Player.conditionalStats[i].active[x] = true;
					// add conditionalStats to stats
					for (let i = 0; i < Object.keys(conditionalStat.stats).length; i++) {
						if (conditionalStat.stats[Object.keys(conditionalStat.stats)[i]] !== true) {
							Player.stats[Object.keys(conditionalStat.stats)[i]] += conditionalStat.stats[Object.keys(conditionalStat.stats)[i]];
						}else {
							Player.stats[Object.keys(conditionalStat.stats)[i]] = true;
						}
					}
					Dom.inventory.afterChangedStats();
				}
			}else {
				if (Player.conditionalStats[i].active[x]) {
					Dom.inventory.beforeChangedStats();
					Player.conditionalStats[i].active[x] = false;
					// remove conditionalStats from stats
					for (let i = 0; i < Object.keys(conditionalStat.stats).length; i++) {
						if (conditionalStat.stats[Object.keys(conditionalStat.stats)[i]] !== true) {
							Player.stats[Object.keys(conditionalStat.stats)[i]] -= conditionalStat.stats[Object.keys(conditionalStat.stats)[i]];
						}else {
							Player.stats[Object.keys(conditionalStat.stats)[i]] = false;
						}
					}
					Dom.inventory.afterChangedStats();
				}
			}
		}
	}
	Dom.inventory.conditionalChooseStats();
}

Dom.inventory.beforeChangedStats = function () {
	// for loading hex images
	if (Player.stats.hex === 0) {
		Dom.inventory.hexWasZero = true;
	}
	else {
		Dom.inventory.hexWasZero = false;
	}
}

Dom.inventory.afterChangedStats = function () {
	// for loading hex images
	if (Player.stats.hex > 0 && Dom.inventory.hexWasZero) {
		Game.loadHexImages();
	}
}

Dom.settings.transparency = function () {
	if (Dom.elements.transparencyOn.checked) {
		User.settings.transparency = true;
		for (let i = 0; i < document.getElementsByClassName("DOM").length; i++) {
			document.getElementsByClassName("DOM")[i].style.opacity = "var(--opacity)";
		}
	}
	else {
		User.settings.transparency = false;
		for (let i = 0; i < document.getElementsByClassName("DOM").length; i++) {
			document.getElementsByClassName("DOM")[i].style.opacity = 1;
		}
	}
}

Dom.chat.toGiblish = function (chat) {
	let me = false;
	if (chat.substring(0, 4) === "/me ") {
		chat = chat.substr(4, message.length);
		me = true;
	}
	chat = chat.replace(/z/g, "n");
	chat = chat.replace(/y/g, "n");
	chat = chat.replace(/x/g, "n");
	chat = chat.replace(/w/g, "y");
	chat = chat.replace(/v/g, "y");
	chat = chat.replace(/t/g, "y");
	chat = chat.replace(/s/g, "r");
	chat = chat.replace(/q/g, "r");
	chat = chat.replace(/p/g, "n");
	chat = chat.replace(/m/g, "n");
	chat = chat.replace(/k/g, "l");
	chat = chat.replace(/j/g, "l");
	chat = chat.replace(/g/g, "h");
	chat = chat.replace(/f/g, "h");
	chat = chat.replace(/d/g, "f");
	chat = chat.replace(/c/g, "f");
	chat = chat.replace(/b/g, "f");
	// vowels
	chat = chat.replace(/u/g, "b");
	chat = chat.replace(/o/g, "u");
	chat = chat.replace(/i/g, "o");
	chat = chat.replace(/e/g, "i");
	chat = chat.replace(/a/g, "e");
	chat = chat.replace(/b/g, "a");
	if (me) {
		return "/me "+chat;
	}
	else {
		return chat;
	}
}

// Store of player information
Dom.players = [];
// Updates display of online players at top of chat page
// object is the object passed in by the websocket server
// action is the thing that should be changed in the player display
Dom.chat.players = function (object, action) {
	if ((action === "join" || action === "leave") && !Dom.chat.overridePlayers) {
		if (object.numberOnline !== 1) {
            Dom.elements.players.innerHTML = object.numberOnline + " players online";
        }
        else {
            Dom.elements.players.innerHTML = object.numberOnline + " player online";
        }
    }

    if (action === "join") {
		// if someone else has logged on
        if (object.userID !== ws.userID) {
            Dom.chat.insert(object.name+" has joined the game!");
			Dom.chat.notification(object.name + " has joined the game!");
        }
        Dom.players.push(object);
    }

    else if (action === "leave") {
        for (let i = 0; i < Dom.players.length; i++) {
			// find the player that has logged off
            if (Dom.players[i].userID === object.userID) {
				Dom.chat.insert(Dom.players[i].name+" has left the game.");
				Dom.chat.notification(Dom.players[i].name + " has left the game.");
                Dom.players.splice(i, 1);
            }
        }
    }

    else if (action === "retroactive") {
		// the player has just logged on; adding already logged on players
        Dom.players.push(object);
    }

	else { // something has changed about an online player (e.g. area or level)
        for (let i = 0; i < Dom.players.length; i++) {
			// find who the changed information is about
            if (Dom.players[i].userID === object.userID) {
				// update the information
                Dom.players[i] = Object.assign(Dom.players[i], object);
                if (action === "level" && Dom.players[i].userID !== ws.userID) {
					// level up chat announcement
                    Dom.chat.insert("<strong>"+Dom.players[i].name+"</strong> has levelled up to level "+Dom.players[i].level+".");
                }
				else if (action === "achievement" && Dom.players[i].userID !== ws.userID) {
                    // achievement chat announcement
                    Dom.chat.insert("<strong>" + Dom.players[i].name + "</strong> has earnt the achievement \"" + Dom.players[i].achievement + "\"!");
                }
            }
        }
    }

	// updates the display (doesn't open it)
    Dom.chat.playersInfo();
}

Dom.elements.playersInfo.onclick = function () {
	Dom.elements.playersInfo.hidden = true;
}

Dom.elements.players.onclick = function () {
	if (Dom.elements.playersInfo.hidden) {
		Dom.elements.playersInfo.hidden = false;
	}
	else {
		Dom.elements.playersInfo.hidden = true;
	}
}

Dom.chat.playersInfo = function () {
	Dom.elements.playersInfo.innerHTML = "";
	for (let i = 0; i < Dom.players.length; i ++) {
		let clss = "knight";
		if (Dom.players[i].class === "a") {
			clss = "archer";
		}
		else if (Dom.players[i].class === "m") {
			clss = "mage";
		}
		if (i > 0) {
			Dom.elements.playersInfo.innerHTML += "<br>";
		}

		Dom.elements.playersInfo.innerHTML += "<div id='players"+i+"' class='players'></div>";

		/*document.getElementById("players"+i).style.backgroundImage = 'url("./selection/assets/'+Dom.players[i].class+Dom.players[i].skin+'/f.png")';
		document.getElementById("players"+i).style.right = 20 - Skins[Dom.players[i].class][Dom.players[i].skin].headAdjust.x + "px";
		document.getElementById("players"+i).style.height = "60px";// + Skins[Dom.players[i].class][Dom.players[i].skin].headAdjust.y + "px";
		document.getElementById("players"+i).style.bottom = 3 + Skins[Dom.players[i].class][Dom.players[i].skin].headAdjust.y + "px";*/

		Dom.elements.playersInfo.innerHTML += "<div class='playersText'><strong>" + Dom.players[i].name + "</strong> (Level " + Dom.players[i].level + " " + clss + ")<br>" + Dom.players[i].displayArea + "</div>";
	}
}

Dom.trade.items = [{},{},{},{},{},{},{},{},
					{},{},{},{},{},{},{},{},
					{},{},{},{},{},{},{},{},];
Dom.trade.other = [{},{},{},{},{},{},{},{},
					{},{},{},{},{},{},{},{},
					{},{},{},{},{},{},{},{},];

Dom.trade.page = function () {
	Dom.changeBook("inventoryPage");
	Dom.changeBook("tradePage");
	Dom.trade.requested = false;
	Dom.trade.received = false;
	Dom.trade.active = true;

	Dom.elements.them.innerHTML = Dom.currentlyDisplayed;

	// construct your empty inventory
	let html = "<tbody>";
	for (let i = 0; i < 24; i+=8) {
		let str = "<tr>";
		for (let inv = i; inv < i+8; inv++) {
			str += '<td ondrop="Dom.inventory.drop(event, Dom.trade.items, '+inv+');Game.inventoryUpdate(event)" ondragover="Dom.inventory.allowDrop(event)" onmouseover="Dom.inventory.displayInformation(Dom.trade.items['+inv+'], undefined, \'tradePage\')" onmouseleave="Dom.expand(\'information\')" ondrag="Dom.expand(\'information\')" onclick="Game.inventoryUpdate()"></td>';
		}
		html += str+"</tr>";
	}
	Dom.elements.tradePageInventory.innerHTML = html+"</body>";
	Dom.trade.updateTheirInventory(Dom.trade.other);
}

Dom.trade.request = function (userID, name) {
	Dom.trade.target = userID;
	Dom.trade.requested = true;
	let message = {
		type: "trade",
		action: "request",
		target: userID,
		userID: ws.userID,
		name: Player.name,
	}
	let jsonMessage = JSON.stringify(message);
	ws.send(jsonMessage);
	Dom.chat.insert("Trade request sent to "+ name +". Walk away to cancel.");
}

Dom.trade.requestReceived = function (userID, name, npc) {
	if (Dom.currentlyDisplayed === "") {
		Dom.trade.received = true;
		Dom.currentlyDisplayed = name;
		Dom.currentNPC = npc;
		Dom.alert.page(name + " would like to trade with you, do you accept?", 2, undefined, undefined, {
			data: "tradeReceived",
			ev: [userID],
			evNo: [userID],
			target: function (userID) {
				Dom.trade.target = userID;
				let message = {
					type: "trade",
					action: "accept",
					target: Dom.trade.target,
					name: Player.name,
				}
				let jsonMessage = JSON.stringify(message);
				ws.send(jsonMessage);
				Dom.trade.page();
			},
			targetNo: function (userID) {
				let message = {
					type: "trade",
					action: "decline",
					target: userID,
					name: Player.name,
				}
				let jsonMessage = JSON.stringify(message);
				ws.send(jsonMessage);
				Dom.currentlyDisplayed = "";
			},
		});
	}
	else {
		Dom.chat.insert(name + " tried to trade with you but could not because you had another page open.");
		let message = {
			type: "trade",
			action: "busy",
			target: userID,
			name: Player.name,
		}
		let jsonMessage = JSON.stringify(message);
		ws.send(jsonMessage);
	}
}

Dom.trade.updateTheirInventory = function (inventory) {
	Dom.trade.other = inventory;

	// construct their empty inventory
	let html = "<tbody>";
	for (let i = 0; i < 24; i+=8) {
		let str = "<tr>";
		for (let inv = i; inv < i+8; inv++) {
			str += '<td ondrop="Dom.inventory.drop(event, Dom.trade.other, '+inv+');Game.inventoryUpdate(event)" ondragover="Dom.inventory.allowDrop(event)" onmouseover="Dom.inventory.displayInformation(Dom.trade.other['+inv+'], undefined, \'tradePage\')" onmouseleave="Dom.expand(\'information\')" ondrag="Dom.expand(\'information\')" onclick="Game.inventoryUpdate()"></td>';
		}
		html += str+"</tr>";
	}
	Dom.elements.tradePageOther.innerHTML = html+"</body>";

	// fill the inventory with elements
	for (let i = 0; i < Dom.trade.other.length; i++) {
		if (Dom.trade.other[i].image !== undefined) {
			Dom.elements.tradePageOther.getElementsByTagName("td")[i].innerHTML = "<img src='"+Dom.trade.other[i].image+"' draggable='false'></img>";
			if (Dom.trade.other[i].stacked !== undefined && Dom.trade.other[i].stacked !== 1) {
				Dom.elements.tradePageOther.getElementsByTagName("td")[i].innerHTML += "<div class='stackNum' id='tradeOtherStackNum"+i+"'>"+Dom.trade.other[i].stacked+"</div>";
			}
		}
	}

	// unconfirm if it was confirmed because items have been moved
	document.getElementById("tradePageInventory").style.borderColor = "var(--border)";
	for (let i = 0; i < 24; i++) {
		document.getElementById("tradePageInventory").getElementsByTagName("td")[i].style.borderColor = "var(--border)";
	}
	document.getElementById("tradePageOther").style.borderColor = "var(--border)";
	for (let i = 0; i < 24; i++) {
		document.getElementById("tradePageOther").getElementsByTagName("td")[i].style.borderColor = "var(--border)";
	}
}

Dom.trade.close = function (second) {
	for (let i = 0; i < 24; i++) {
		if (Dom.trade.items[i].image !== undefined) {
			Dom.inventory.give(Dom.trade.items[i]);
		}
	}
	Dom.trade.items = [{},{},{},{},{},{},{},{},
						{},{},{},{},{},{},{},{},
						{},{},{},{},{},{},{},{},];
	Dom.trade.other = [{},{},{},{},{},{},{},{},
						{},{},{},{},{},{},{},{},
						{},{},{},{},{},{},{},{},];
	if (!second) {
		let message = {
			type: "trade",
			action: "close",
			target: Dom.trade.target,
			name: Player.name,
		}
		let jsonMessage = JSON.stringify(message);
		ws.send(jsonMessage);
	}
	Dom.trade.active = false;
	Dom.closePage("inventoryPage");
}

// only called by main player
Dom.trade.confirm = function () {
	let items = [];
	for (let i = 0; i < 24; i++) {
		if (Dom.trade.other[i].image !== undefined) {
			items.push({item: Dom.trade.other[i]});
		}
	}
	if (Dom.inventory.requiredSpace(items)) {
		document.getElementById("tradePageInventory").style.borderColor = "darkgreen";
		for (let i = 0; i < 24; i++) {
			document.getElementById("tradePageInventory").getElementsByTagName("td")[i].style.borderColor = "darkgreen";
		}
		let message = {
			type: "trade",
			action: "confirm",
			target: Dom.trade.target,
			name: Player.name,
		}
		let jsonMessage = JSON.stringify(message);
		ws.send(jsonMessage);
		if (document.getElementById("tradePageOther").style.borderColor === "darkgreen") {
			Dom.trade.complete();
		}
	}
	else {
		Dom.alert.page("You do not have enough inventory space to complete this trade.");
	}
}

// only called by other player - different inventories
Dom.trade.confirmOther = function () {
	document.getElementById("tradePageOther").style.borderColor = "darkgreen";
	for (let i = 0; i < 24; i++) {
		document.getElementById("tradePageOther").getElementsByTagName("td")[i].style.borderColor = "darkgreen";
	}
	if (document.getElementById("tradePageInventory").style.borderColor === "darkgreen") {
		Dom.trade.complete();
	}
}

Dom.trade.complete = function () {
	for (let i = 0; i < 24; i++) {
		if (Dom.trade.other[i].image !== undefined) {
			Dom.inventory.give(Dom.trade.other[i], undefined, undefined, undefined, true);
		}
	}
	Dom.trade.items = [{},{},{},{},{},{},{},{},
						{},{},{},{},{},{},{},{},
						{},{},{},{},{},{},{},{},];
	Dom.trade.other = [{},{},{},{},{},{},{},{},
						{},{},{},{},{},{},{},{},
						{},{},{},{},{},{},{},{},];
	Dom.trade.active = false;
	Dom.closePage("inventoryPage");
}

Dom.elements.canvasChatInput.onfocus = function () {
	document.documentElement.style.setProperty('--chatOpacity', 0.6);
}

window.onbeforeunload = function() {
	if (Dom.trade.active) {
		Dom.trade.close();
	}
	if (Areas[Game.areaName].onAreaLeave !== undefined && Areas[Game.areaName].callAreaLeaveOnLogout) {
		Areas[Game.areaName].onAreaLeave(true);
	}
	/*if (!Array.isArray(Dom.currentlyDisplayed) && typeof Dom.currentlyDisplayed === "object" && Dom.currentlyDisplayed !== null) {
		Dom.quest.declineRewards();
	}*/

	// save the game (last)
	if (!Dom.settings.deleted) {
		Game.saveProgress();
	}
}

// notification if user has given permission
Dom.chat.notification = function (title, body) {
	if (Notification.permission === "granted" && Dom.elements.notifsOn.checked && !Dom.focus) { // setting radio button is also checked just in case they accepted but then turned it off by settings
        let notification = new Notification(title, {body: body, silent: true});
    }
}

// players is an array of objects with score, class, skinTone etc.
// unit is the unit for the score (e.g. seconds)
Dom.leaderboard.page = function (title, description, players, unit) {
	if (Dom.changeBook("leaderboardPage")) {
		Dom.elements.leaderboardPageTitle.innerHTML = title;
		if (description !== undefined) {
			Dom.elements.leaderboardPageDescription.innerHTML = description;
			Dom.elements.leaderboardPageDescription.hidden = false;
		}
		else {
			Dom.elements.leaderboardPageDescription.hidden = true;
		}
		Dom.elements.leaderboardPageList.innerHTML = "";
		let maxWidth = 0;
		if (unit === undefined) {
			unit = ""
		}
		for (let i = 0; i < players.length; i++) {
			Dom.elements.leaderboardPageList.innerHTML += "<li class='leaderboardPageList'><div class='leaderboardPageSkin' id='leaderboardPageSkin"+i+"'></div><strong class='leaderboardPageName'>"+players[i].name+"</strong><span class='leaderboardPageScore'>"+players[i].score+unit+"</span></li>";
			document.getElementById("leaderboardPageSkin"+i).style.backgroundImage = 'url("./selection/assets/'+players[i].class+players[i].skin+'/f.png")';
			document.getElementById("leaderboardPageSkin"+i).style.right = 20 - Skins[players[i].class][players[i].skin].headAdjust.x + "px";
			//document.getElementById("leaderboardPageSkin"+i).style.height = 60 + Skins[players[i].class][players[i].skin].headAdjust.y + "px";
			document.getElementById("leaderboardPageSkin"+i).style.bottom = Skins[players[i].class][players[i].skin].headAdjust.y - 15 + "px";
			maxWidth = Math.max(maxWidth, document.getElementsByClassName("leaderboardPageScore")[i].offsetWidth);
		}
		maxWidth = 190-maxWidth/2;
		Dom.elements.leaderboardPageList.style.marginLeft = maxWidth+"px";
		for (let i = 0; i < players.length; i++) {
			document.getElementsByClassName("leaderboardPageScore")[i].style.left = maxWidth+130+"px";
		}
	}
}

Dom.settings.fullscreen = function () {
	if (Dom.elements.fullscreenOn.checked) {
		if (window.innerHeight !== screen.height || window.innerHeight + 1 !== screen.height) {
			document.documentElement.requestFullscreen();
		}
	}
	else {
		if (window.innerHeight === screen.height || window.innerHeight + 1 === screen.height) {
			document.exitFullscreen();
		}
	}
}

Dom.settings.music = function () {
	if (Dom.elements.musicOn.checked) {
		if (Game.playingMusic === null) {
			Game.playMusic();
		}
	}
	else {
		if (Game.playingMusic !== null) {
			Game.stopMusic();
		}
	}
}

Dom.settings.coords = function () {
	if (Dom.elements.coordsOn.checked) {
		User.settings.coords = true;
	}
	else {
		User.settings.coords = false;
	}
}

Dom.settings.fps = function () {
	if (Dom.elements.fpsOn.checked) {
		User.settings.fps = true;
	}
	else {
		User.settings.fps = false;
	}
}

Dom.settings.hitbox = function () {
	if (Dom.elements.hitboxesOn.checked) {
		User.settings.hitbox = true;
	}
	else {
		User.settings.hitbox = false;
	}
}

Dom.settings.aggro = function () {
	if (Dom.elements.aggroOn.checked) {
		User.settings.aggro = true;
	}
	else {
		User.settings.aggro = false;
	}
}

Dom.settings.grid = function () {
	if (Dom.elements.gridOn.checked) {
		User.settings.grid = true;
	}
	else {
		User.settings.grid = false;
	}
}

Dom.settings.minigames = function () {
	if (Dom.elements.minigamesOn.checked) {
		User.settings.minigames = true;
	}
	else {
		User.settings.minigames = false;
	}
}

Dom.quest.abandon = function (quest) {

	//if the quest is active then abandon it
	if (Player.quests.activeQuestArray.includes(quest.quest)) {

		// remove all items with the property removeOnAbandon set to the quest name
		for (let i = 0; i < Player.inventory.items.length; i++) {
			if (Player.inventory.items[i].removeOnAbandon === quest.quest) {
				Dom.inventory.remove(i, true);
			}
		}
		for (let i = 0; i < Object.values(Player.inventory).length; i++) {
			if (Object.values(Player.inventory)[i].removeOnAbandon === quest.quest) {
				Dom.inventory.fromArray = Player.inventory;
				Dom.inventory.fromId = Object.keys(Player.inventory)[i]
				Dom.inventory.disposeConfirm();
			}
		}

		// remove from active quest array
		for (let i = 0; i < Player.quests.activeQuestArray.length; i++) {
			if (Player.quests.activeQuestArray[i] === quest.quest) {
				Player.quests.activeQuestArray.splice(i, 1);
				break;
			}
		}

		if (typeof quest.callQuestFinishOnAbandon !== "undefined") { // this specifies the step's finish function that should be called (even if that step has not been unlocked yet!!!)
			if (Dom.currentNPC.type !== undefined) { // pass in the currentNPC if poss :)
				quest.steps[quest.callQuestFinishOnAbandon].onFinish(Game[Dom.currentNPC.type].find(npc => npc.id === Dom.currentNPC.id));
			}
			else {
				quest.steps[quest.callQuestFinishOnAbandon].onFinish();
			}
		}

		// update boxes
		Dom.checkProgress();
	}
}

// displays info bar at top of canvas with html
// optional hex colour code
Dom.infoBar.page = function (html, colour) {
	Dom.elements.infoBar.innerHTML = html;
	Dom.elements.infoBar.style.left = Dom.canvas.width/2 - Dom.elements.infoBar.offsetWidth/2 + "px";
	if (typeof colour !== "undefined") {
		Dom.elements.infoBar.style.color = colour;
	}
	else {
		Dom.elements.infoBar.style.color = "#000000";
	}
}

Dom.infoBar.updateYPosition = function () {
	Dom.elements.infoBar.style.top = Game.viewportOffsetY + 20 + "px";
}

Dom.settings.dark = function () {
	if (Dom.elements.darkOn.checked) {
		User.settings.dark = true;
		document.documentElement.style = `
		--border: #202020;
		--alert: #707070;
		--selected: #258bde;
		--top: #1d2d3b;
		--bottom: #454545;
		--page: #202020;
		--text: #dcddde;
		--link: #dcddde;
		--arrow: #454545;
		--opacity: 0.9;
		--input: #aaaaaa;`
	}
	else {
		User.settings.dark = false;
		document.documentElement.style = `
		--border: #886622;
		--alert: #eecc77;
		--selected: #fdf581;
		--top: #fff7a5;
		--bottom: #fef9b4;
		--page: #f9f9d0;
		--text: #000000;
		--link: #000000;
		--arrow: #886622;
		--opacity: 0.8;
		--input: #ffffff;`
	}
}

Dom.zoom = 1.0;
// called by viewport resize or by init
// parameter is true if called on init
Dom.updateScreenSize = function (init) {

	if (window.innerHeight/Dom.zoom < 620) {
		Dom.zoom -= 0.1;
		document.documentElement.style.setProperty('--zoom', Dom.zoom);
	}
	if (window.innerHeight >= 620) {
		Dom.zoom = 1.0;
		document.documentElement.style.setProperty('--zoom', '1.0');
	}

	Dom.canvas.width = window.innerWidth;//document.body.style.zoom;
	Dom.canvas.height = window.innerHeight;//document.body.style.zoom;

	// everything that needs to be centred etc. based on canvas size
	Dom.elements.interact.style.left = Dom.canvas.width-110+"px";
	Dom.elements.game.width = Dom.canvas.width;
	Dom.elements.game.height = Dom.canvas.height;
	Dom.elements.dayNight.width = Dom.canvas.width;
	Dom.elements.dayNight.height = Dom.canvas.height;
	Dom.elements.light.width = Dom.canvas.width;
	Dom.elements.light.height = Dom.canvas.height;
	Dom.elements.secondary.width = Dom.canvas.width;
	Dom.elements.secondary.height = Dom.canvas.height;
	Dom.elements.chat.style.width = Dom.canvas.width/2-191+"px";
	Dom.elements.canvasChatInput.style.width = Dom.canvas.width/2-194+"px";
	Dom.elements.hotbar.style.left = Dom.canvas.width/2-167.6+"px";
	Dom.elements.hotbar.style.top = Dom.canvas.height-80+"px";
	Dom.elements.canvasSend.style.top = Dom.elements.canvasChatInput.offsetTop - 12 + "px";
	Dom.elements.canvasSend.style.left = Dom.canvas.width/2-214 + "px";

	if (Dom.canvas.width < 1215) {
		Dom.elements.bookmarks.style.left = Dom.canvas.width/2+168+"px";
		Dom.elements.bookmarks.style.width = Dom.canvas.width/2-168+"px";
	}
	else {
		Dom.elements.bookmarks.style.left =(Dom.canvas.width/2-168-400)/2 + Dom.canvas.width/2+168-20+"px";
		Dom.elements.bookmarks.style.width = "440px";
	}
	Dom.elements.bookmarks.style.top = Dom.canvas.height-87+"px";

	Dom.elements.achievement.style.left= Dom.canvas.width-458+"px";
	Dom.elements.chat.style.top= Dom.canvas.height-Dom.chat.offset-Dom.elements.chat.offsetHeight+"px";

	if (window.innerHeight === screen.height || window.innerHeight + 1 === screen.height) {
		Dom.elements.fullscreenOn.checked = true;
	}
	else {
		Dom.elements.fullscreenOff.checked = true;
	}

	// only call Game functions if this was called due to viewport being resized
	// because Game functions are called anyway on init
	if (!init) {
		// update camera variables
		Game.camera.width = Dom.canvas.width;
		Game.camera.height = Dom.canvas.height;
		Game.camera.setMaxClampValues();
		Game.camera.update();

		// update Game canvas variables
		Game.updateCanvasViewport();

		// canvases are resized so are wiped - render them if they will not be rendered anyway next tick
		Game.renderDayNight();

		// update weather intensity and reset the positions of the particles
		if (Dom.elements.weatherOn.checked) {
			Weather.updateIntensity();
			Weather.reset();
			Weather.updateParticleNumber();
		}
	}
}

Dom.init = function () {

	// SAVEDATA FIXES
	if (Player.version < CurrentVersion) {
		// put any required updates here
		Player.version = CurrentVersion;
	}

	//document.body.style.zoom = "1.0";
	Dom.updateScreenSize(true);

	// iterate through rows of items, generating html
	Dom.elements.itemInventory.innerHTML = "";
	for (let i = 0; i < Player.inventory.items.length/6; i++) {
		let str = "<tr>";
		for (let inv = 6*i; inv < 6*i+6; inv++) {
				str += '<td ondrop="Dom.inventory.drop(event, Player.inventory.items, '+inv+');Game.inventoryUpdate(event)" ondragover="Dom.inventory.allowDrop(event)" onmouseover="Dom.inventory.displayInformation(Player.inventory.items['+inv+'], undefined, \'inventoryPage\')" onmouseleave="Dom.expand(\'information\')" ondrag="Dom.expand(\'information\')" onclick="Game.inventoryUpdate()"></td>';
		}
		Dom.elements.itemInventory.innerHTML += str+"</tr>";
	}

	//
	// prepare the item inventory
	// (this should probably have its own function and not all be init)
	//
	for (let i = 0; i < Player.inventory.items.length; i++) {
		// check if the item should be removed according to its deleteIf
		if (Player.inventory.items[i].image !== undefined && !Player.inventory.items[i].unidentified && Items[Player.inventory.items[i].type][Player.inventory.items[i].id].deleteIf !== undefined && Items[Player.inventory.items[i].type][Player.inventory.items[i].id].deleteIf()) {
			setTimeout(function () {
				if (typeof Player.inventory.items[i].deleteIfMessage !== "undefined") {
					Dom.chat.insert(Player.inventory.items[i].deleteIfMessage);
				}
				Player.inventory.items[i] = {};
			}, 1000);
		}

		else if (Player.inventory.items[i].image !== undefined) {
			Dom.inventory.prepare(Player.inventory.items, i, Dom.elements.itemInventory.getElementsByTagName("td")[i]);

			// if the item has image(s) that should be loaded with it for the canvas, load the image
			Dom.inventory.loadItemRequiredImages(Player.inventory.items[i]);
		}
	}

	// equipment slots being locked
	if (!Player.overallProgress.mountSlotUnlocked) {
		// horses not yet unlocked
		Dom.elements.mountSlotUnlocked.hidden = true;
		Dom.elements.mountSlotLocked.hidden = false;
	}
	// locked trinket slots
	// these locked slots work slightly differently because they're in a table
	if (Player.level < 10000) {
		Dom.elements.trinketSlot1.classList.add("trinketSlotLocked");
		Dom.elements.trinketSlot1.onmouseover = function(){Dom.inventory.displayInformation({name: 'Trinket slot locked', image:''}, undefined, 'inventoryPage', 'equip')};
		Dom.elements.trinketSlot1.removeAttribute("ondrag");
		Dom.elements.trinketSlot1.removeAttribute("onclick");
		Dom.elements.trinketSlot1.removeAttribute("ondrop");
		Dom.elements.trinketSlot1.removeAttribute("ondragover");
	}
	if (Player.level < 10000) {
		Dom.elements.trinketSlot2.classList.add("trinketSlotLocked");
		Dom.elements.trinketSlot2.onmouseover = function(){Dom.inventory.displayInformation({name: 'Trinket slot locked', image:''}, undefined, 'inventoryPage', 'equip')};
		Dom.elements.trinketSlot2.removeAttribute("ondrag");
		Dom.elements.trinketSlot2.removeAttribute("onclick");
		Dom.elements.trinketSlot2.removeAttribute("ondrop");
		Dom.elements.trinketSlot2.removeAttribute("ondragover");
	}
	if (Player.level < 10000) {
		Dom.elements.trinketSlot3.classList.add("trinketSlotLocked");
		Dom.elements.trinketSlot3.onmouseover = function(){Dom.inventory.displayInformation({name: 'Trinket slot locked', image:''}, undefined, 'inventoryPage', 'equip')};
		Dom.elements.trinketSlot3.removeAttribute("ondrag");
		Dom.elements.trinketSlot3.removeAttribute("onclick");
		Dom.elements.trinketSlot3.removeAttribute("ondrop");
		Dom.elements.trinketSlot3.removeAttribute("ondragover");
	}

	/*if (Player.inventory.items[5].image === undefined) {
		Dom.elements.itemInventory.getElementsByTagName("td")[5].style.backgroundImage = "url('assets/items/bag/1.png')";
	}*/

	// prepare the equipment slots (armour, weapons, mount, etc.)
	for (let i = 0; i < Object.keys(Player.inventory).length-1; i++) { // repeats for each equipment slot (all keys but items)
		let item = Player.inventory[Object.keys(Player.inventory)[i]];

		// check if the item should be removed according to its deleteIf
		if (item.image !== undefined && Items[item.type][item.id].deleteIf !== undefined && Items[item.type][item.id].deleteIf()) {
			setTimeout(function () {
				if (typeof item.deleteIfMessage !== "undefined") {
					Dom.chat.insert(item.deleteIfMessage);
				}
				item = {};
			}, 1000);
		}

		// if there is an item
		else if (item.image !== undefined) {
			Dom.inventory.prepare(Player.inventory, Object.keys(Player.inventory)[i], Dom.elements[Dom.inventory.slotKeys[Object.keys(Player.inventory)[i]]]);
			document.getElementById(Dom.inventory.slotKeys[Object.keys(Player.inventory)[i]]).style.backgroundImage = "url('assets/interface/gearBackground.png')";
		}
	}

	if (Player.stats.hex > 0) {
		Game.loadHexImages();
	}

	// prepare the bank
	for (let i = 0; i < Player.bank.items.length; i++) {
		// if the item has melted
		if (Player.bank.items[i].image !== undefined && !Player.bank.items[i].unidentified && Items[Player.bank.items[i].type][Player.bank.items[i].id].deleteIf !== undefined && Items[Player.bank.items[i].type][Player.bank.items[i].id].deleteIf ()) {
			setTimeout(function () {
				if (typeof Player.bank.items[i].deleteIfMessage !== "undefined") {
					Dom.chat.insert(Player.bank.items[i].deleteIfMessage);
				}
				Player.bank.items[i] = {};
			},1000);
		}else if (Player.bank.items[i].image !== undefined) {
			Dom.inventory.prepare(Player.bank.items, i, Dom.elements.bankPageInventory.getElementsByTagName("td")[i]);
		}
	}

	// prepare the spellbook
	Dom.spellbook.init();

	// if any reputation has changed set the reputation page to the main reputation page
	if (Player.reputationReady) {
		Dom.reputation.start();
	}

	// constructs controls page
	for (let i = 0; i < document.getElementsByClassName("hotkey").length; i++) {
		document.getElementsByClassName("hotkey")[i].innerHTML = Dom.settings.keyName(User.settings.keyboard[Object.keys(User.settings.keyboard)[i]]);
		document.getElementsByClassName("hotkey")[i].onclick = function () {
			if (Dom.settings.hotkey === undefined) {
				document.getElementsByClassName("hotkey")[i].innerHTML = "...";
				Dom.settings.hotkey = i;
			}
			else {
				let temp = User.settings.keyboard[Object.keys(User.settings.keyboard)[Dom.settings.hotkey]];
				document.getElementsByClassName("hotkey")[Dom.settings.hotkey].innerHTML = document.getElementsByClassName("hotkey")[i].innerHTML;
				document.getElementsByClassName("hotkey")[i].innerHTML = Dom.settings.keyName(temp);
				User.settings.keyboard[Object.keys(User.settings.keyboard)[Dom.settings.hotkey]] = User.settings.keyboard[Object.keys(User.settings.keyboard)[i]];
				User.settings.keyboard[Object.keys(User.settings.keyboard)[i]] = temp;
				Dom.settings.hotkey = undefined;
			}
		}
	}

	Dom.elements.level.innerHTML = "Level "+Player.level;

	// display unlocked bookmarks
	document.getElementById("changeAdventure").style.bottom = "-12px";
	document.getElementById("changeSettings").style.bottom = "-12px";
	for (let i = 0; i < Player.unlockedTabs.length; i++) {
		if (Player.unlockedTabs[i] === "reputation") {
			Player.unlockedTabs[i] = "spellbook"; // fixes save progress for old pages
		}
		document.getElementById("change"+Player.unlockedTabs[i][0].toUpperCase()+Player.unlockedTabs[i].slice(1)).style.display = "block";
		document.getElementById("change"+Player.unlockedTabs[i][0].toUpperCase()+Player.unlockedTabs[i].slice(1)).style.bottom = "-12px";
	}

	// tutorial button in settings
	if (Player.tutorialProgress >= Tutorial.length-1) {
		// completed the tutorial
		Dom.elements.settingTutorialHolder.hidden = true;
	}
	if (Player.skipTutorial) {
		Dom.elements.tutorialOn.checked = true;
	}

	for (let i = 0; i < Player.statusEffects.length; i++) {
		if (Player.statusEffects[i].title === "HIGH SPEED! (test status effect)") {
			Dom.elements.speedOn.checked = true;
		}
	}

	// set up Player.quests data structure
	// make sure these variables are up to date (i.e. incorporate new quests and new areas since last time playing)
	let varNames = ["progress", "questLastFinished", "timesCompleted", "startedFromNpc", "objectiveProgress", "stepProgress"];
	for (let i = 0; i < varNames.length; i++) {
		let obj = Player.quests[varNames[i]];
		if (Object.keys(Quests).length > Object.keys(obj).length) {
			for (let j = 0; j < Object.keys(Quests).length; j++) { // iterating through the quest areas
				if (!Object.keys(obj).includes(Object.keys(Quests)[j])) {
					obj[Object.keys(Quests)[j]] = [];
				}
			}
		}
	}
	// these variables should have an object for each quest
	let varNames2 = ["progress"];
	for (let i = 0; i < varNames2.length; i++) {
		let obj = Player.quests[varNames2[i]];
		if (Object.keys(Quests).length > Object.keys(obj).length) {
			for (let j = 0; j < Object.keys(Quests).length; j++) {  // iterating through the quest areas
				let areaName = Object.keys(Quests)[j];
				for (let k = 0; j < Quests[areaName].length; k++) {  // iterating through the quests in this area
					Quests[areaName][k] = {};
				}
			}
		}
	}
	// these variables should have an array for each quest
	let varNames3 = ["objectiveProgress", "stepProgress"];
	for (let i = 0; i < varNames3.length; i++) {
		let obj = Player.quests[varNames3[i]];
		if (Object.keys(Quests).length > Object.keys(obj).length) {
			for (let j = 0; j < Object.keys(Quests).length; j++) {  // iterating through the quest areas
				let areaName = Object.keys(Quests)[j];
				for (let k = 0; j < Quests[areaName].length; k++) {  // iterating through the quests in this area
					Quests[areaName][k] = [];
				}
			}
		}
	}

	// MAIL (mostly)
	let date = GetFullDate();
	let yesterdayDate = GetFullDate(1);
	// the first time the player logs on each day
	if (!Player.days.includes(date)) {

		if (localStorage.getItem(Player.class) === null) {

			//
			// Load a new class: gold, mail, instructions
			//

			Dom.inventory.give(Items.currency[2],3);

			Dom.mail.give(
	            "Welcome to Antorax!",
	            "The Tinkering Guild",
	            "dolph",
	            "text.page",
	            ["Welcome to Antorax!",
	            `Hello ${Player.name}!<br><br>It's great to have new people joining us in Antorax. We look forward to meeting you very soon in Eaglecrest City. Perhaps you would like to try out one of our newest inventions - the ScreenGrabber 3000! It's free of charge. Pop us a letter if it explodes, otherwise see you soon!<br><br>From the Tinkering Guild`, true, [], [],
	            [{item: Items.item[14]}]], [{item: Items.item[14]}],
	        );

			Dom.instructions.page(0);

		}

		//
		// Mail, to be sent on first day the player logs in
		//

		// christmas daily rewards
		if (Event.event === "Christmas") {
			let randomNPC = "";
			// keep finding a new npc the player has met until we find one that has information in Offsets
			while (typeof Offsets[ToCamelCase(randomNPC)] === "undefined") {
				randomNPC = Player.metNPCs[Random(0, Player.metNPCs.length-1)]; // NPC that sent message (one the player's met before!)
			}
			if (Event.christmasDay) { // christmas day
				/*
				// 2018 message
				Dom.mail.give(
					"Merry Christmas!",
					"Father Christmas",
					"fatherChristmas",
					"text.page",
					["Merry Christmas!",
					"Have a great Christmas! Please enjoy the 2018 Christmas gift.", true, [], [],
					[{item: Items.item[17],},{item: Items.currency[5], quantity: 5,}]],
					[{item: Items.item[17],},{item: Items.currency[5], quantity: 5,}],
				);
				*/
				// 2022 message
				Dom.mail.give(
					"Merry Christmas!",
					"Father Christmas",
					"fatherChristmas",
					"text.page",
					["Merry Christmas!",
					"Have a great Christmas! Please enjoy the 2022 Christmas gift.", true, [], [],
					[{item: Items.item[17],},{item: Items.currency[5], quantity: 5,}]],
					[{item: Items.item[17],},{item: Items.currency[5], quantity: 5,}],
				);
			}
			else if (date.substring(6) < "25") { // before christmas
				Dom.mail.give(
					25 - parseInt(date.substring(6)) + " Day"+(parseInt(date.substring(6)) !== 24 ? "s" : "")+" To Go!",
					randomNPC,
					ToCamelCase(randomNPC),
					"text.page",
					["Merry Christmas!",
					"This is your free daily chistmas token. Spend it wisely!", true, [], [],
					[{item: Items.currency[5]}]], [{item: Items.currency[5]}],
				);
			}
		}

		// Antorax Day mail
		if (Event.event === "Antorax") {
			/*
			// 2019 message
			Dom.mail.give(
				"Antorax is " + Event.antoraxAge + " today!",
				"The King of Eaglecrest",
				"eaglecrestKing",
				"text.page",
				["Antorax is " + Event.antoraxAge + " today!",
				`<p>${Event.antoraxAge} years ago today, the realms of Antorax settled on an agreement to cooperate in the archaeology and exploration of these beautiful lands. Although there have been conflicts since then, there have been countless discoveries made by the Antorax alliance, and we endevour to continue.</p>
				<p>This year, there have been countless advancements in the fields of Archaeology, with huge discoveries of mythic items. There have also been developments to the Eaglecrest Logging Camp, and improvements to the accessibility of Antorax for its citizens.</p>
				<p>We hope you enjoy this special day, and that we will celebrate the many more Antorax Days to come together.</p>`, true, [], [],
				[{item: Items.helm[10]}]], [{item: Items.helm[10]}],
			);*/

			// 2022 message
			Dom.mail.give(
				"Antorax is " + Event.antoraxAge + " today!",
				"The King of Eaglecrest",
				"eaglecrestKing",
				"text.page",
				["Antorax is " + Event.antoraxAge + " today!",
				`<p>${Event.antoraxAge} years ago today, the realms of Antorax settled on an agreement to cooperate in the archaeology and exploration of these beautiful lands. Although there have been conflicts since then, there have been countless discoveries made by the Antorax alliance, and we endevour to continue.</p>
				<p>This year, there have been countless advancements in the fields of Archaeology - mythic items have been unearthed from past and faraway lands, many within the realm of Eaglecrest's local plains. There have additionally been huge developments in the teaching of magic, which will be further consolidated in the coming years. Morever, we cannot go without mentioning the countless new citizens of Eaglecrest, to whom I hope you have given a warm welcome!</p>
				<p>Antorax has not been without its challenges this year, facing a colder winter than ever, and a serpentine assault of Eaglecrest City. However these complications have been endured and resolved thanks to all of you adventurers, archaeologists, and even fishers.</p>
				<p>We hope you enjoy this special day, and that we will celebrate the many more Antorax Days to come together.</p>`, true, [], [],
				[{item: Items.helm[28]}]], [{item: Items.helm[28]}],
			);

			if (!Player.quests.completedQuestArray.includes("The Legend of the Tattered Knight")) {
				Dom.mail.give(
					"The Legend of the Tattered Knight",
					"unknown sender",
					"./assets/items/item/16",
					"quest.start",
					["eaglecrestLoggingCamp", 22],
				);
			}
		}

		// Fish mail
        else if (Event.event === "Fish") {
            Dom.mail.give(
                "A Soggy Surprise...",
                "unknown sender",
                "./assets/items/sword/10",
                "text.page",
                ["A Soggy Surprise...",
                `A fish fell in your mailbox!`, true, [], [],
                [{item: Items.sword[10]}]], [{item: Items.sword[10]}],
            );
        }

		// Heroes of Antorax mail
		else if (Event.event === "Heroes") {
			Dom.mail.give(
			    "A Gift for the Worthy",
			    "The Lord of Thunder",
			    "lordOfThunder",
			    "text.page",
			    ["A Gift for the Worthy",
			    `<p>Six fragments of incredibly rare gemstones - objects with the power to wipe out entire civilizations – have been found in Antorax. The stones are useful in the right hands, but I fear the forces of evil may get to them first. Only the strongest of beings can safely use the stones, which is why I have entrusted you with this <strong>Eternity Glove</strong>, a container for that power.<p>
				<p>It is your duty to locate all six stones and add them to the Glove, so they are safe from any villains who would use them for ill.</p>
				<p>Good luck, adventurer… and send a raven if you have any questions.</p>`, true, [], [],
			    [{item: Items.sword[11]}]], [{item: Items.sword[11]}], true // noRepeat
			);
		}

		// James Day mail
		else if (Event.event === "James") {
			Dom.mail.give(
			    "Happy James Day!",
			    "Marshall Teper",
			    "marshallTeper",
			    "text.page",
			    ["Happy James Day!",
			    "For some reason they asked <em>me</em> to send some mail out to everyone today. There might be an event on, but that doesn't mean you can stop working. We need more workers in the Logging Camp.<br><br>Marshall Teper", true, [], [],
			    [{item: Items.boots[7]}]], [{item: Items.boots[7]}],
			);
		}

		// Samhain mail
		else if (Event.event === "Samhain") {
			Dom.mail.give(
			    "Bumper Samhain Harvest!",
			    "Farmer Lennie",
                "./assets/items/helm/23",
			    "text.page",
			    ["Bumper Samhain Harvest!",
			    `It's the season of Samhain once again! What's a pumpkin doing in your mailbox? Well, out at the Eaglecrest Ranch we've had a bumper harvest of pumpkins, only makes sense to share them with everyone. Oh - and don't forget to try some of the pumpkin treats in a tavern. They're made entirely with Eaglecrest produce!<br><br>From Farmer Lennie`, true, [], [],
			    [{item: Items.helm[23]}]], [{item: Items.helm[23]}], true // noRepeat
			);

			if (!Player.quests.completedQuestArray.includes("The Slithering Truth") && !Player.quests.activeQuestArray.includes("The Slithering Truth") && Player.quests.timesCompleted.eaglecrest[1] >= 0) {
				// they haven't completed the quest this mail starts before, and they have completed "snakes and the city" at least once
				Dom.mail.give(
					"The Slithering Truth",
					"unknown sender",
					"./assets/items/item/36",
					"quest.start",
					["eaglecrest", 3], true // noRepeat
				);
			}

			else if (Player.quests.completedQuestArray.includes("The Slithering Truth") && !Player.quests.questProgress.hasSkeletonKey) { // aaaaaaaaaaaaaaaaaaaaaa tbd don't use questProgress
				let name = "???";
				if (Player.quests.completedQuestArray.includes("Snaking Bad")) {
					name = "The Soothsssayer";
				}
				Player.quests.questProgress.hasSkeletonKey = true; // aaaaaaaaaaaaaaaaaaaaaa tbd don't use questProgress
				Dom.mail.give(
				    "Sssssurprise Return",
				    name,
	                "./assets/items/item/36",
				    "text.page",
				    ["BOO!",
				    `I'm back.<br><br>How about you sssslither back to my lair?<br><br>Ssssee you ssssoon.<br>xx`, true, [], [],
				    [{item: Items.item[36]}]], [{item: Items.item[36]}],
				);
			}
		}

		// Valentine's mail
		else if (Event.event === "Valentine") {
			Dom.mail.give(
			    "Love Is in the Air!",
			    "Mysterious Lover",
			    "shadow",
			    "text.page",
			    ["Love Is in the Air!",
			    `<p>${Player.name},</p>
				<p>You may not know me, but I have been watching your deeds and have been very impressed. It may seem like your doings are unrewarded, but know that there are always those who appreciate your every move.</p>
				<p>On this day of giving and feasting, please celebrate with a token of my undying appreciation.</p>`, true, [], [],
			    [{item: Items.boots[12]}]], [{item: Items.boots[12]}],
			);
		}

		// Samme Day mail
		else if (Event.event === "Samme") {
			Dom.mail.give(
			    "Happy Samme Day!",
			    "Fish Tank",
			    "fishTank",
			    "text.page",
			    ["Happy Samme Day!",
			    "Happy Samme Day!", true, [], [],
			    [{item: Items.chest[21]}]], [{item: Items.chest[21]}],
			);
		}

		Player.days.push(date);

		// login rewards
		if (typeof Player.consecutiveDays === "undefined") {
			Player.consecutiveDays = 0;
		}
		if (Player.days.includes(yesterdayDate)) {
			Player.consecutiveDays++;
		}
		else {
			Player.consecutiveDays = 1;
		}

		// seven days in a row
		if (Player.consecutiveDays === 7) {
			Dom.mail.give(
				"We've Seen a Lot of You",
				"The King of Eaglecrest",
				"eaglecrestKing",
				"text.page",
				["We've Seen a Lot of You",
				`<p>${Player.name}, I hope this letter finds you well and safe.</p>
				<p>Your dedication to Eaglecrest's, and Antorax's, cause is truly remarkable. The Kingdom would like to personally thank you for your contributions with this <b style="color:orange;">Antorak</b>. We hope it will prove useful on your further adventures.</p>`, true, [], [],
				[{item: Items.chest[11]}]], [{item: Items.chest[11]}],
			);
		}

		// reset chest locations
		Player.chests.locations = []

		// reset randomDailyQuests ONLY IF THEY ARE NOT STILL ACTIVE :(
		let array = [];
		for (let i = 0; i < Object.keys(Quests).length; i++) {
			for (let x = 0; x < Object.values(Quests)[i].length; x++) {
				if (Player.quests.activeQuestArray.includes(Object.values(Quests)[i][x].quest) && Object.values(Quests)[i][x].quest.randomGroup !== undefined) {
					array.push(Object.values(Quests)[i][x].randomGroup);
				}
			}
		}
		for (let i = 0; i < Object.keys(Player.quests.randomDailyQuests).length; i++) {
			if (!array.includes(Object.keys(Player.quests.randomDailyQuests)[i])) {
				Player.quests.randomDailyQuests[Object.keys(Player.quests.randomDailyQuests)[i]] = undefined;
			}
		}

		Player.chests.positions = {}; // chests change position each day
	}

	// Archaeology mail
	let done = true;
	for (let i = 0; i < 7; i++) {
		for (let x = 0; x < Items[Object.keys(Items)[i]].length; x++) {
			if (!Items[Object.keys(Items)[i]][x].uncollectable && !User.archaeology.includes(Items[Object.keys(Items)[i]][x].name) && Items[Object.keys(Items)[i]][x].name !== "Master Archaeologist's Hat") {
				done = false;
			}
		}
	}
	if (done) {
		Dom.mail.give(
			"Master Archaeologist",
			"Alys Loreworth",
			"alysLoreworth",
			"text.page",
			["Master Archaeologist",
			`<p>Dear ${playerName},</p>
			<p>I am Alys Loreworth, the lead archaeologist of Antorax. I have noticed your incredible contributions to Antorax's archaeology effort, and would like to congratulate and thank you for them. Without you, we would not have uncovered many of the rare and significant items that are currently residing in the Great Museum, Wizard Island. I trust that we will continue to receive contributions from you in the years to come - there is still lots that has not been discovered.</p>
			<p>I have attached a <strong>Master Archaeologist's Hat</strong>, which I hope you will find of use when uncovering items in the future. A hat like this is incredibly rare and remarkably powerful, only owned by the most accomplished of archaeologists. Many who have worn it say they find themselves to be much luckier with their archaeological finds...</p>
			<p>Good luck on your continued travels,
			<br>Alys Loreworth, Lead Archaeologist</p>`, true, [], [],
			[{item: Items.helm[9]}]], [{item: Items.helm[9]}], true // noRepeat
		);
	}

	Dom.hotbar.update();
	Dom.inventory.update();

	// remove all active repeatable quests before checkProgress (quests.active)
	for (let x = 0; x < Player.quests.activeQuestArray.length; x ++) {
		for (let i = 0; i < Object.keys(Quests).length; i++) {
			for (let y = 0; y < Quests[Object.keys(Quests)[i]].length; y++) {
				if (Quests[Object.keys(Quests)[i]][y].quest === Player.quests.activeQuestArray[x]) {
					if (Quests[Object.keys(Quests)[i]][y].repeatTime === "repeatable") {
						Player.quests.activeQuestArray.splice(x, 1);
					}
				}
			}
		}
	}

	Dom.checkProgress(); // calls Dom.quests.active()
	Dom.quests.completed();
	Dom.adventure.update(); // chooses what should be shown in adventurer's log

	// clear any unintentional chat and welcome player
	Dom.chat.contents = [];

	let dateObj = Event.getDate();

	// welcome back message
	if (localStorage.getItem(Player.class) !== null) {
		// events
		if (Event.christmasDay) {
		    Dom.chat.insert("Merry Christmas, " + Player.name + "!", 0, undefined, true);
		}
		else if (Event.event === "Antorax") {
		    Dom.chat.insert("Happy Antorax Day, " + Player.name + "!!", 0, undefined, true);
		}
		else if (Event.event === "New Year") {
		    Dom.chat.insert("Happy new year, " + Player.name + "! Make a wish~", 0, undefined, true);
		}
		else if (Event.event === "Valentine") {
		    Dom.chat.insert("We love you, " + Player.name + "!", 0, undefined, true);
		}
		// consecutive days
		else if (Player.consecutiveDays === 5) {
		    Dom.chat.insert("Welcome back, " + Player.name + "! Back already?!", 0, undefined, true);
		}
		else if (Player.consecutiveDays === 20) {
		    Dom.chat.insert("What a surprise, " + Player.name + "'s back!", 0, undefined, true);
		}
		else if (Player.consecutiveDays === -1) {
			// needs finishing lol
		    //Dom.chat.insert("We've been missing you, " + Player.name + ". . .only joking!", 0, undefined, true);
		}
		// times of the day (50% chance of this message being given)
		else if (dateObj.hour >= 6 && dateObj.hour <= 10 && Random(0,1) === 0) {
		    Dom.chat.insert("Good morning, " + Player.name + "!", 0, undefined, true);
		}
		else if (dateObj.hour >= 13 && dateObj.hour <= 15 && Random(0,1) === 0) {
		    Dom.chat.insert("Good afternoon, " + Player.name + "!", 0, undefined, true);
		}
		else if (dateObj.hour >= 17 && dateObj.hour <= 19 && Random(0,1) === 0) {
		    Dom.chat.insert("Good evening, " + Player.name + "!", 0, undefined, true);
		}
		else if (dateObj.hour <= 4 && Random(0,30) === 0) {
		    Dom.chat.insert(Player.name + "! What brings you here at this hour?", 0, undefined, true);
		}
		// lucky greetings
		else if (Random(0,100) === 0) {
		    Dom.chat.insert("Howdy " + Player.name + "!", 0, undefined, true);
		}
		else if (Random(0,100) === 0) {
		    Dom.chat.insert("Welcome back, " + Player.name + "! How are you?", 0, undefined, true);
		}
		else if (Random(0,333) === 0) {
		    Dom.chat.insert("Make a wish, " + Player.name + "! Today's going to be a lucky day.", 0, undefined, true);
		}
		// slightly less rare
		else if (Random(0,30) === 0) {
		    Dom.chat.insert("How's it going, " + Player.name + "?", 0, undefined, true);
		}
		else if (Random(0,30) === 0) {
		    Dom.chat.insert("Good to see you, " + Player.name + "!", 0, undefined, true);
		}
		else if (Random(0,30) === 0) {
		    Dom.chat.insert("Hello " + Player.name + "!", 0, undefined, true);
		}
		// various rare punctuation variants lol
		else if (Random(0,30) === 0) {
		    Dom.chat.insert("Welcome back, " + Player.name + ".", 0, undefined, true);
		}
		else if (Random(0,30) === 0) {
		    Dom.chat.insert("Welcome back, " + Player.name + "!!", 0, undefined, true);
		}
		// default :)
		else {
	    	Dom.chat.insert("Welcome back, " + Player.name + "!", 0, undefined, true);
		}
	}
	// secondary additionl message
	if (Event.event === "Fish") {
	    Dom.chat.insert("Something <em>fishy</em> is going on...", 2000, undefined, true);
	}


	// tell the player if they have unread mail
	let unreadMail = Dom.mail.unread();
	if (Player.quests.completedQuestArray.includes("To the Logging Camp")) {
		if (unreadMail > 1) {
			// plural
			Dom.chat.insert("You have " + unreadMail + " new messages!"); // maybe make it more obvious that player has to check their mailbox for this?
		}
		else if (unreadMail > 0) {
			// singular
			Dom.chat.insert("You have " + unreadMail + " new message!"); // maybe make it more obvious that player has to check their mailbox for this?
		}
	}

	for (let i = 0; i < Player.chatOnJoin.length; i++) {
		Dom.chat.insert(Player.chatOnJoin[i]);
	}
	Player.chatOnJoin = [];

	Dom.elements.weatherOn.onclick = function () {
		User.settings.weather = true;
		Game.dayNightUpdate();
	}
	Dom.elements.weatherOff.onclick = function () {
		User.settings.weather = false;
		Game.dayNightUpdate();
		//Weather.ctx.clearRect(0, 0, 600, 600);
	}
	if (!User.settings.weather) {
		Dom.elements.weatherOff.checked = true;
	}
	Dom.elements.particlesOn.onclick = function () {
		User.settings.particles = true;
	}
	Dom.elements.particlesOff.onclick = function () {
		User.settings.particles = false;
	}
	if (!User.settings.particles) {
		Dom.elements.particlesOff.checked = true;
	}
	if (User.settings.transparency) {
		Dom.elements.transparencyOn.checked = true;
		Dom.settings.transparency();
	}
	if (User.settings.dark) {
		Dom.elements.darkOn.checked = true;
		Dom.settings.dark();
	}
	Dom.elements.nametagOn.onclick = function () {
		User.settings.nametag = true;
	}
	Dom.elements.nametagOff.onclick = function () {
		User.settings.nametag = false;
	}
	if (User.settings.nametag) {
		Dom.elements.nametagOn.checked = true;
	}


	// permission settings
	// local storage
	if (localStorage.getItem("accept") === "true") {
		// hide local storage setting since they have agreed
		Dom.elements.settingAcceptHolder.innerHTML = "";
	}
	else if (Player.tutorialProgress >= 2) {
		// ask them if they are happy for local storage, if they are far enough in the tutorial (they should be asked by the tutorial anyway, but keeping this just in case)
		Dom.alert.page("This site uses local storage for progress saving, is that ok?", 2, undefined, "game", {
			target: function () {
				Dom.elements.acceptOn.checked = true;
				Dom.settings.acceptOn();
			},
		});
	}
	// notifications
	if (Notification.permission === "granted" && localStorage.getItem("notifsRefused") !== "true") {
		Dom.elements.notifsOn.checked = true;
	}

	// keyboard functions
	// hotbar
	let array = ["ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX"];
	for (let i = 0; i < 6; i++) {
		Keyboard.upFunctions[array[i]] = function () {
			if (!Game.rightClickActive) {
				// items
				if (Player.inventory.items[i].onClick !== undefined) {
					Player.inventory.items[i].onClick(i, true);
					Game.inventoryUpdate();
				}
			}
			else {
				// spells
				if (typeof Game.hero.spells[i] !== "undefined") {
					// spell slot i isn't empty
					if (typeof Game.hero.spells[i].onCooldown === "undefined" || Game.hero.spells[i].onCooldown === 0) {
						let targetX = Game.camera.x + Game.previousMousePosition.x - Game.viewportOffsetX; // mouseX (tbd should probably be made into a function)
						let targetY = Game.camera.y + Game.previousMousePosition.y - Game.viewportOffsetX; // mouseY
						Game.hero.channelSpell(Game.hero.spells[i], {x: targetX, y: targetY});
					}
				}
			}
		}
		Keyboard.listenForKey(User.settings.keyboard[array[i]], undefined, Keyboard.upFunctions[array[i]]);
	}

	// dom bookmark hotkeys
	array = ["CHAT", "INVENTORY", "QUESTS", "ADVENTURE", "SPELLBOOK", "SETTINGS"];
	for (let i = 0; i < 6; i++) {
		Keyboard.upFunctions[array[i]] = Dom.settings.hotkeys;
		Keyboard.listenForKey(User.settings.keyboard[array[i]], undefined, Keyboard.upFunctions[array[i]]);
	}
	Keyboard.listenForKey(User.settings.keyboard.TALK, undefined, Keyboard.upFunctions.TALK);

	// mount:
	Keyboard.upFunctions["MOUNT"] = function () {
		if (Player.inventory.mount.onClick !== undefined) {
			Player.inventory.mount.onClick("mount");
			Game.inventoryUpdate();
		}
	}
	Keyboard.listenForKey(User.settings.keyboard["MOUNT"], undefined, Keyboard.upFunctions["MOUNT"]);


	Dom.chat.offset = 40; // distance of chat from bottom of canvas (because input is hidden)
	// add a 'space' button on mobile devices and hide canvas chat input
	// thanks to https://stackoverflow.com/a/29509267/9713957
	if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
		Dom.elements.canvasChatInput.style.zIndex = 0;
		Dom.elements.canvasSend.style.zIndex = 0;
		Dom.elements.canvasChatInput.style.visibility = "hidden";
		Dom.elements.canvasSend.style.visibility = "hidden";
		Dom.elements.interact.hidden = false;
		Dom.chat.offset = 10;
		Dom.elements.interact.onclick = function () {
			Game.keysDown.SPACE = true;
			setTimeout(function () {
				Game.keysDown.SPACE = false;
			}, 100);
		}
	}
}

// TESTING functions
Dom.testing = {};

// complete a quest as if the player had done it manually
Dom.testing.completeQuest = function (quest, acceptRewards, notStart) {
	if (quest.constructor.name === "String") {
		let set = false;
		for (let i = 0; i < Object.keys(Quests).length; i++) {
			for (let x = 0; x < Quests[Object.keys(Quests)[i]].length; x++) {
				if (Quests[Object.keys(Quests)[i]][x].quest.toLowerCase() === quest.toLowerCase()) {
					quest = Quests[Object.keys(Quests)[i]][x];
					set = true;
					break;
				}
			}
			if (set) {
				break;
			}
		}
	}
	Dom.currentlyDisplayed = quest;
	if (!Player.quests.activeQuestArray.includes(quest.quest) && !notStart) {
		Dom.quest.start(quest);
		Dom.quest.accept();
	}
	Dom.quest.finish(quest);
	if (!acceptRewards) {
		Dom.quest.acceptRewards();
	}
	return quest.quest;
}

let defaultStats = Object.assign({}, Player.stats);

Dom.testing.resetStats = function () {

	/*for (let i = 0; i < 5; i++) {
		if (Object.values(Player.inventory)[i].image !== undefined) {
			Dom.inventory.removeEquipment(Object.values(Player.inventory)[i]);
		}
	}*/

	let maxHealth = Player.stats.maxHealth;
	Player.stats = Object.assign({}, defaultStats);
	Player.stats.maxHealth = maxHealth;
	let noSet = false;

	for (let i = 0; i < 5; i++) {
		if (Object.values(Player.inventory)[i].image !== undefined) {
			Dom.inventory.addEquipment(Object.values(Player.inventory)[i], noSet);
		}
		noSet = true;
	}

	Game.inventoryUpdate();
	Game.equipmentUpdate();
}
