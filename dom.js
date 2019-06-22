"use strict";

// go to class select if the user's class has not been selected yet for this session
if (sessionStorage.getItem("class") === null) {
	window.location.replace("./selection/index.html");
}

let Dom = {
	elements: {
		achievement: document.getElementById("achievement"),
		achievementDescription: document.getElementById("achievementDescription"),
		achievementImg: document.getElementById("achievementImg"),
		achievementName: document.getElementById("achievementName"),
		achievementPoints: document.getElementById("achievementPoints"),
		activeQuestBox: document.getElementById("activeQuestBox"),
		adventurePage: document.getElementById("adventurePage"),
		alert: document.getElementById("alert"),
		alertDispose: document.getElementById("alertDispose"),
		alertNo: document.getElementById("alertNo"),
		alertOptions: document.getElementById("alertOptions"),
		alertText: document.getElementById("alertText"),
		alertYes: document.getElementById("alertYes"),
		bagText: document.getElementById("bagText"),
		bankPage: document.getElementById("bankPage"),
		bankPageInventory: document.getElementById("bankPageInventory"),
		buyerPage: document.getElementById("buyerPage"),
		buyerPageChat: document.getElementById("buyerPageChat"),
		buyerPageInventory: document.getElementById("buyerPageInventory"),
		canvasChatInput: document.getElementById("canvasChatInput"),
		canvasSend: document.getElementById("canvasSend"),
		chance: document.getElementById("chance"),
		chanceImage: document.getElementById("chanceImage"),
		changeAdventure: document.getElementById("changeAdventure"),
		changeChat: document.getElementById("changeChat"),
		changeInventory: document.getElementById("changeInventory"),
		changeQuests: document.getElementById("changeQuests"),
		changeReputation: document.getElementById("changeReputation"),
		changeSettings: document.getElementById("changeSettings"),
		chat: document.getElementById("chat"),
		chatInput: document.getElementById("chatInput"),
		chatPage: document.getElementById("chatPage"),
		chatText: document.getElementById("chatText"),
		choosePage: document.getElementById("choosePage"),
		close: document.getElementById("close"),
		closeDriver: document.getElementById("closeDriver"),
		closeReputation: document.getElementById("closeReputation"),
		completedQuestBox: document.getElementById("completedQuestBox"),
		coordsOn: document.getElementById("coordsOn"),
		darkOn: document.getElementById("darkOn"),
		dayNight: document.getElementById("dayNight"),
		driverPage: document.getElementById("driverPage"),
		driverPageBuy: document.getElementById("driverPageBuy"),
		driverPageMain: document.getElementById("driverPageMain"),
		fpsOn: document.getElementById("fpsOn"),
		fullscreenOff: document.getElementById("fullscreenOff"),
		fullscreenOn: document.getElementById("fullscreenOn"),
		game: document.getElementById("game"),
		gridOn: document.getElementById("gridOn"),
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
		inventoryGoldXP: document.getElementById("inventoryGoldXP"),
		inventoryPage: document.getElementById("inventoryPage"),
		itemIdentification: document.getElementById("itemIdentification"),
		itemInventory: document.getElementById("itemInventory"),
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
		musicOn: document.getElementById("musicOn"),
		name: document.getElementById("name"),
		otherQuestBox: document.getElementById("otherQuestBox"),
		outIdtriangle: document.getElementById("outIdtriangle"),
		outTriangle: document.getElementById("outTriangle"),
		particlesOff: document.getElementById("particlesOff"),
		particlesOn: document.getElementById("particlesOn"),
		possibleQuestBox: document.getElementById("possibleQuestBox"),
		questFinish: document.getElementById("questFinish"),
		questFinishChat: document.getElementById("questFinishChat"),
		questFinishItems: document.getElementById("questFinishItems"),
		questFinishName: document.getElementById("questFinishName"),
		questFinishQuest: document.getElementById("questFinishQuest"),
		questFinishRewardsTitle: document.getElementById("questFinishRewardsTitle"),
		questFinishStartItems: document.getElementById("questFinishStartItems"),
		questFinishXP: document.getElementById("questFinishXP"),
		questsPage: document.getElementById("questsPage"),
		questStart: document.getElementById("questStart"),
		questStartChat: document.getElementById("questStartChat"),
		questStartItems: document.getElementById("questStartItems"),
		questStartName: document.getElementById("questStartName"),
		questStartObjectives: document.getElementById("questStartObjectives"),
		questStartQuest: document.getElementById("questStartQuest"),
		questStartRewardsTitle: document.getElementById("questStartRewardsTitle"),
		questStartStartItems: document.getElementById("questStartStartItems"),
		questStartStartRewardsTitle: document.getElementById("questStartStartRewardsTitle"),
		questStartXP: document.getElementById("questStartXP"),
		reputationPage: document.getElementById("reputationPage"),
		rightArrow: document.getElementById("rightArrow"),
		secondary: document.getElementById("secondary"),
		set: document.getElementById("set"),
		settingAcceptHolder: document.getElementById("settingAcceptHolder"),
		settingDelete: document.getElementById("settingDelete"),
		settingLogout: document.getElementById("settingLogout"),
		settingsPage: document.getElementById("settingsPage"),
		settingsTwoPage: document.getElementById("settingsTwoPage"),
		settingTutorialHolder: document.getElementById("settingTutorialHolder"),
		speedOn: document.getElementById("speedOn"),
		stats: document.getElementById("stats"),
		textPage: document.getElementById("textPage"),
		transparencyOn: document.getElementById("transparencyOn"),
		triangle: document.getElementById("triangle"),
		tutorialOff: document.getElementById("tutorialOff"),
		tutorialOn: document.getElementById("tutorialOn"),
		weapon: document.getElementById("weapon"),
		weatherOff: document.getElementById("weatherOff"),
		weatherOn: document.getElementById("weatherOn"),
	},
	canvas: {},
	chat: {},
	inventory: {},
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
	choose: {},
	text: {},
	alert: {},
	achievements: {},
};

for (let i = 0; i < Items.fish.length; i++) {
	User.fish.push(0);
}

// USER SAVEDATA FIXES more at bottom
if (localStorage.getItem("archaeology") !== null) {
	User.archaeology = JSON.parse(localStorage.getItem("archaeology"));
	localStorage.removeItem("archaeology");
}
if (localStorage.getItem("fish") !== null) {
	User.fish = JSON.parse(localStorage.getItem("fish"));
	localStorage.removeItem("fish");
}

//User.settings.keyboard = User.settings.keyboard;

// save an item to the settings object in local storage
/*Dom.settings.save = function (name, value) {
	User.settings[name] = value;
	SaveItem("settings", JSON.stringify(User.settings));
}*/

Dom.alert.page = function (text, type, values, page) { // can't pass in target and ev because chooseStats are called by an innerHTML
	Dom.elements.alert.hidden = false;
	if (page !== undefined) {
		Dom.elements.alert.style.left = document.getElementById(page).offsetLeft+document.getElementById(page).offsetWidth/2-175+"px";
	}
	else {
		Dom.elements.alert.style.left = Dom.canvas.width/2-175+"px";
	}
	// text only (e.g. chooseStats)
	if (type === "text") {
		Dom.elements.alertOptions.style.display = "block";
		Dom.elements.alertOptions.innerHTML = values;
		Dom.elements.alertYes.style.display = "none";
		Dom.elements.alertNo.style.display = "none";
		Dom.elements.alertDispose.style.display = "none";
	}
	// 3 buttons
	else if (type === 3) {
		Dom.elements.alertOptions.style.display = "none";
		Dom.elements.alertYes.style.display = "inline-block";
		Dom.elements.alertDispose.style.display = "inline-block";
		Dom.elements.alertNo.style.display = "inline-block";
		Dom.elements.alertNo.style.left = "0px";
		Dom.elements.alertNo.style.bottom = "5px";
		Dom.elements.alertNo.innerHTML = "Cancel";
		Dom.elements.alertYes.innerHTML = values !== undefined ? values[0] : "One";
		Dom.elements.alertDispose.innerHTML = values !== undefined ? values[1] : "All";
	}
	// 2 buttons
	else if (type === 2) {
		Dom.elements.alertOptions.style.display = "none";
		Dom.elements.alertYes.style.display = "inline-block";
		Dom.elements.alertNo.style.display = "inline-block";
		Dom.elements.alertDispose.style.display = "none";
		Dom.elements.alertNo.style.left = "15px";
		Dom.elements.alertNo.innerHTML = "No";
		Dom.elements.alertYes.innerHTML = "Yes";
		Dom.elements.alertNo.style.bottom = "20px";
	}
	// 1 button
	else{
		Dom.elements.alertOptions.style.display = "none";
		Dom.elements.alertYes.style.display = "none";
		Dom.elements.alertDispose.style.display = "none";
		Dom.elements.alertNo.style.display = "inline-block";
		Dom.elements.alertNo.style.left = "0px";
		Dom.elements.alertNo.innerHTML = "OK";
		Dom.elements.alertNo.style.bottom = "20px";
	}
	Dom.elements.alertText.innerHTML = text;
}

// Make the save, logout, delete buttons at the bottom of the settings page
Dom.elements.settingLogout.innerHTML = "You are logged in as "+Player.name+(localStorage.getItem("accept") ? "<div id='settingSave' onclick='Game.saveProgress()'>Save</div>" : "")+"<div id='settingLogoutInner' onclick='Game.saveProgress(\"logout\")'>Logout</div>"+(localStorage.getItem("accept") ? "<div id='settingDelete' onclick='Dom.settings.delete()'>Delete</div>" : "")+"<br><br><br><div id='settingControls' onclick='Dom.settings.page(\"settingsTwoPage\")'>Controls</div>";

Dom.settings.delete = function () {
	Dom.alert.target = function () {
		localStorage.removeItem(Player.class);
		window.location.replace("./selection/index.html");
	}
	Dom.alert.page("Are you sure you want to delete your progress for this class? It will be lost forever!", 2, undefined, "settingsPage");
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
	}else{
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
		}
	}
}

Dom.quests.active = function (quest) {
	if (quest !== undefined && quest !== null) {
		Player.quests.activeQuestArray.push(quest.quest);
	}else if (quest === null) {
		console.error("Please tell Peter that you have recieved the error: quest === null");
	}
	Dom.elements.activeQuestBox.style.textAlign = "left";
	Dom.quests.activeHTML = {true: "", undefined: "", daily: "",};
	for (let x = 0; x < Player.quests.activeQuestArray.length; x++) {
		let currentQuest = "";
		for (let i = 0; i < Object.keys(Quests).length; i++) {
			for (let y = 0; y < Quests[Object.keys(Quests)[i]].length; y++) {
				if (Quests[Object.keys(Quests)[i]][y].quest === Player.quests.activeQuestArray[x]) {
					if (Quests[Object.keys(Quests)[i]][y].repeatTime === "daily") {
						Quests[Object.keys(Quests)[i]][y].important = "daily";
					}
					// the quest Object is worked out by the name saved in the activeQuestArray
					currentQuest = Quests[Object.keys(Quests)[i]][y];
				}
			}
		}
		if (currentQuest.eventRequirement === undefined || currentQuest.eventRequirement === Event.event) {
			let isCompleted = currentQuest.isCompleted();
			Dom.quests.activeHTML[currentQuest.important] += "<br><br><strong>" + currentQuest.quest + "</strong>";
			let completedObjectives = 0;
			for (let i = 0; i < currentQuest.objectives.length; i++) {
				Dom.quests.activeHTML[currentQuest.important] += "<br>" + currentQuest.objectives[i];
				if (isCompleted[i] === true && i !== currentQuest.objectives.length-1) {
					Dom.quests.activeHTML[currentQuest.important] += " &#10004;";
					completedObjectives++;
				}else if (isCompleted[i] !== false && i !== currentQuest.objectives.length-1) {
					Dom.quests.activeHTML[currentQuest.important] += " " + isCompleted[i];
				}
			}
			if (currentQuest.autofinish && completedObjectives >= currentQuest.objectives.length-1) {
				Dom.choose.page(currentQuest.finishName, ["Quest Finish: " + currentQuest.quest], [Dom.quest.finish], [[currentQuest]]);
			}else if (completedObjectives >= currentQuest.objectives.length-1 && !Player.quests.canBeFinishedArray.includes(currentQuest.quest)) {
				Player.quests.canBeFinishedArray.push(currentQuest.quest);
			}
			if (currentQuest.wasCompleted === undefined) {
				currentQuest.wasCompleted = isCompleted;
			}else{
				for (let i = 0; i < currentQuest.wasCompleted.length; i++) {
					if (currentQuest.wasCompleted[i] !== true && isCompleted[i] === true) {
						Dom.chat.insert("Quest log updated");
						currentQuest.wasCompleted = isCompleted;
						break;
					}
				}
			}
			if (isCompleted[isCompleted.length - 1]) {
				currentQuest.completed = true;
			}else{
				currentQuest.completed = false;
			}
		}else{
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

Dom.checkProgress = function () {
	Dom.achievements.update();
	Dom.quests.active();
	Dom.inventory.conditionalStats();
}

Dom.closeNPCPages = function () {
	if (this.elements.bankPage.hidden === false) {
		Dom.closePage("inventoryPage");
		//Dom.bank.active = false;
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
	this.elements.choosePage.hidden = true;
	this.elements.textPage.hidden = true;
	Dom.currentlyDisplayed = "";
	Dom.currentNPC = {};
}

Dom.closePage = function (page, notClose) {
	if (page === "chatPage" || page === "inventoryPage" || page === "questsPage" || page === "adventurePage" || page === "reputationPage" || page === "settingsPage" || page === "settingsTwoPage") {
		let tab = page
		if (page === "settingsTwoPage") {
			tab = "settingsPage";
		}
		document.getElementById("change"+tab.substring(0,1).toUpperCase()+tab.substring(1,tab.length-4)).style.opacity = 0.7;	
		document.getElementById("change"+tab.substring(0,1).toUpperCase()+tab.substring(1,tab.length-4)).style.bottom = "-12px";
	}
	else if (!notClose) {
		Dom.currentlyDisplayed = "";
		Dom.currentNPC = {};
	}
	if (page === "inventoryPage" && Dom.bank.active) {
		Dom.closePage("bankPage");
		Dom.bank.active = false;
	}
	document.getElementById(page).hidden = true;
}

Dom.changeBook = function (page, openClose) {
	let bookmark = false;
	let tab = page
	let settingsOpen = false;
	if (page === "settingsTwoPage") {
		tab = "settingsPage";
	}
	else if (page === "settingsPage") {
		page = Dom.settings.current;
	}
	if (document.getElementById(page).hidden && !settingsOpen) {
		
		if (page === "chatPage" || page === "inventoryPage" || page === "questsPage" || page === "adventurePage" || page === "reputationPage" || page === "settingsPage" || page === "settingsTwoPage") {
			bookmark = true;
			document.getElementById("change"+tab.substring(0,1).toUpperCase()+tab.substring(1,tab.length-4)).style.opacity = 1;
			document.getElementById("change"+tab.substring(0,1).toUpperCase()+tab.substring(1,tab.length-4)).style.bottom = "0px";
		}
		
		document.getElementById(page).hidden = false;
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
			else{
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
		if (page === "reputationPage") {
			Dom.reputation.update();
		}
		return true;
	}
	else if (openClose) {
		Dom.closePage(page);
	}
}

Dom.hotbar.update = function () {
	for (let i = 0; i < 6; i++) {
		Dom.elements.hotbar.getElementsByTagName("td")[i].innerHTML = Dom.elements.itemInventory.getElementsByTagName("td")[i].innerHTML;
		if (Dom.elements.hotbar.getElementsByTagName("td")[i].getElementsByTagName("img").length > 0) {
			Dom.elements.hotbar.getElementsByTagName("td")[i].getElementsByTagName("img")[0].setAttribute('draggable', false);
			if (Player.inventory.items[i].onClick !== undefined) {
				Dom.elements.hotbar.getElementsByTagName("td")[i].getElementsByTagName("img")[0].setAttribute('onclick', "Player.inventory.items["+i+"].onClick("+i+", true)");
			}
		}
	}
}

Dom.instructions.index = function () {
	// chooseDOM
	if (Player.unlockedInstructions.length > 1) {
		let parameters = ["Instructions", [], [], []];
		for (let i = 0; i < Player.unlockedInstructions.length; i++) {
			parameters[1].push(Instructions[i].chapterTitle);
			parameters[2].push(Dom.instructions.page);
			parameters[3].push([i, "index"]);
		}
		Dom.choose.page(...parameters);
	}
	// chat ONLY
	else {
		Dom.instructions.page(0, "chat")
	}
}

Dom.instructions.page = function (chapter, calledFrom) {
	if (calledFrom === "index") {
		Dom.currentlyDisplayed = "";
	}
	if (calledFrom !== undefined || !Player.skipTutorial) {
		if (chapter > 0 || !User.notFirst || calledFrom !== undefined) {
			// normal unlocking
			Dom.chat.insertSequence(Instructions[chapter].pages, undefined, function () {
				if (Player.unlockedInstructions.length === chapter) {
					Player.unlockedInstructions.push(Instructions[chapter].chapterTitle);
					Dom.quests.possible();
				}
			}, chapter);
		}
		// first instructions for second+ time
		else {
			Instructions[0].alternativePages();
		}
	}
}

// insert a message into the chat, under the format of "name: message"
// name is emboldened via <strong> tags
// if message begins with "/me " (including space), the format changes to "this.name message"

// if singleUse is true, and if Dom.chat.contents contains message, the message is not sent (handled by Dom.chat.insert)
// if important is true, the chat message triggers a red flashing prompt around the chat bookmark

// if the message is an array, arrayType should specify what is done with that array
// arrayType "random" picks a random message and sends it from the array
// arrayType "all" sends all of the messages (using this function) with delay same as delay parameter between each of them

Dom.chat.say = function (name, message, language) {
	if (message !== undefined) {
		// update message for special chat cases

		if (message.constructor === Array) {
			if (message.length > 1) {
				// pick a random message from the array
				message = message[Random(0, message.length - 1)];
			}
			else {
				// only one message anyway
				message = message[0];
			}
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

Dom.chat.insertSequence = function (text, values, end, endParameters) {
	if (values === undefined) {
		values = [];
		values.length = text.length+1;
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
	
	if (end !== undefined) {
		setTimeout (function () {
			end(endParameters);
		}, time);
	}
}

Dom.chat.input = function (id) {
	if (Dom.elements[id].value !== "") {
		Dom.chat.insert(Dom.chat.say(Player.name, Dom.elements[id].value));
		Dom.elements[id].value = "";
	}
	Dom.elements[id].select();
	Dom.elements[id].focus();
}

Dom.elements.canvasChatInput.onblur = function () {
	Dom.elements.canvasChatInput.hidden = true;
}

Dom.chat.contents = []; // stores all the chat messages
Dom.chat.displayChat = [];
Dom.chat.displayOpacity = [];
Dom.chat.insert = function (text, delay, time, noRepeat) {
	if (delay === undefined) {
		delay = 0;
	}
	if (time === undefined) {
		time = text.split(" ").length/200*60000;
	}
	setTimeout(function () {
		if (!noRepeat || !Dom.chat.contents.includes(text)) {
			if (this.contents.length >= 1000) {
				// purge the oldest
				this.contents.shift();
			}
			if (Dom.canvas.width !== undefined) {
				this.contents.push(text);
				// chat in the bottom left
				Dom.chat.displayChat.push(text);
				Dom.elements.chat.innerHTML += "<li class='chatBox' style='opacity:0.6;'>"+text+"</li>";
				Dom.chat.displayOpacity.push(time/2+500);
				//Dom.elements.canvasChatInput.hidden = false;
				if (!Dom.chat.chatInterval) {
					Dom.chat.chatInterval = setInterval(function () {
						if (Dom.chat.displayChat.length === 0) {
							clearInterval(Dom.chat.chatInterval);
							Dom.chat.chatInterval = false;
						}
						for (let x = 0; x < Dom.chat.displayChat.length; x++) {
							Dom.elements.canvasChatInput.hidden = false;
							Dom.chat.displayOpacity[x]-=2;
							if (Dom.chat.displayOpacity[x] < 600) {
								Dom.elements.chat.getElementsByTagName("li")[x].style.opacity = Dom.chat.displayOpacity[x]/1000;
							}
							if (Dom.elements.chat.getElementsByTagName("li")[x].style.opacity <= 0) {
								Dom.chat.displayChat.shift();
								Dom.chat.displayOpacity.shift();
								for (let i = 0; i < Dom.chat.displayChat.length; i++) {
									Dom.elements.chat.getElementsByTagName("li")[i].innerHTML = Dom.elements.chat.getElementsByTagName("li")[i+1].innerHTML;
									Dom.elements.chat.getElementsByTagName("li")[i].style.opacity = Dom.elements.chat.getElementsByTagName("li")[i+1].style.opacity;
								}
								Dom.elements.chat.removeChild(Dom.elements.chat.getElementsByTagName("li")[Dom.chat.displayChat.length]);
								if (Dom.chat.displayChat.length === 0 && Dom.elements.canvasChatInput !== document.activeElement) {
									Dom.elements.canvasChatInput.hidden = true;
								}
								break;
							}
						}
					},1);
				}

				Dom.elements.chatText.innerHTML += "<br><br>" + text;
				/*for (let i = this.contents.length-1; i >= 0; i--) {
					Dom.elements.chatText.innerHTML += this.contents[i]+"<br><br>";
				}*/
			}
			return true;
		}else{
			return false;
		}
	}.bind(this), delay);
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

			if (Player.reputation[area].score >= ReputationPoints[Player.reputation[area].level] && Player.reputation[area].level !== 6) {
				//Dom.reputation.update();
				Game.displayOnCanvas("Reputation Level Up!", [FromCamelCase(area), Dom.reputation.levels[Player.reputation[area].level] + " \u{2794} " + Dom.reputation.levels[Player.reputation[area].level+1]], 4, true); // display on canvas for 4s or enters a queue (true)
				//Dom.levelUp.page("reputation", area, Player.reputation[area].level);
			}//else if (Player.reputation[area].score <= 0) {
				Dom.reputation.update();
			//}
		}
	// first time
	}else{
		Player.reputation[area].score += amount;
		Dom.chat.insert("You have gained " + amount + " reputation with " + FromCamelCase(area));
		Player.reputation[area].changed = true;
		if (Dom.reputation.ready) {
			Dom.elements.reputationPage.innerHTML += FromCamelCase(area) + ': <div class="widthPadding"></div> <div class="reputationBox"> <div class="reputationBar"></div> </div><br><br>';
		}
	}
}

Dom.reputation.start = function () {
	Dom.elements.reputationPage.innerHTML = "";
	for (let i = 0; i < Object.keys(Player.reputation).length; i++) {
		if (Player.reputation[Object.keys(Player.reputation)[i]].changed) {
			Dom.elements.reputationPage.innerHTML += FromCamelCase(Object.keys(Player.reputation)[i]) + ':<div class="widthPadding"></div> <div class="reputationBox"> <div class="reputationBar"></div> </div><br><br>';
		}
	}
	Player.reputationReady = true;
	Dom.reputation.ready = true;
	Dom.reputation.update();
}

Dom.reputation.levels = ["Abhorred","Hated","Unfriendly","Neutral","Friendly","Honoured","Venerated"];
Dom.reputation.update = function () {
	// if the close button is not there yet
	if (!Dom.reputation.ready && Dom.elements.reputationPage.getElementsByTagName("div").length === 0) {
		for (let i = 0; i < Object.keys(Player.reputation).length; i++) {
			if (Player.reputation[Object.keys(Player.reputation)[i]].changed && Dom.elements.closeReputation === null) {
				// if the close button should be there
				Dom.elements.reputationPage.innerHTML += "<div id='closeReputation' onclick='Dom.reputation.start()'>Close</div>"
			}
		}
	}
	for (let i = 0; i < Object.keys(Player.reputation).length; i++) {
		if (Player.reputation[Object.keys(Player.reputation)[i]].changed) {
			if (Player.reputation[Object.keys(Player.reputation)[i]].score >= ReputationPoints[Player.reputation[Object.keys(Player.reputation)[i]].level]) {
				this.upLevel(Player.reputation[Object.keys(Player.reputation)[i]],i);
			}else if (Player.reputation[Object.keys(Player.reputation)[i]].score < 0) {
				this.downLevel(Player.reputation[Object.keys(Player.reputation)[i]],i);
			}else if (Dom.reputation.ready) {
				if (Player.reputation[Object.keys(Player.reputation)[i]].level > 3) {
					document.getElementsByClassName("reputationBar")[i].style.backgroundColor = "green";
				}else if (Player.reputation[Object.keys(Player.reputation)[i]].level < 3) {
					document.getElementsByClassName("reputationBar")[i].style.backgroundColor = "red";
				}else{
					document.getElementsByClassName("reputationBar")[i].style.backgroundColor = "gold";
				}
				if (Player.reputation[Object.keys(Player.reputation)[i]].level !== 6 && Player.reputation[Object.keys(Player.reputation)[i]].level !== 0) {
					document.getElementsByClassName("reputationBar")[i].innerHTML = this.levels[Player.reputation[Object.keys(Player.reputation)[i]].level] + "&nbsp;&nbsp;(" + Player.reputation[Object.keys(Player.reputation)[i]].score + "/"+ReputationPoints[Player.reputation[Object.keys(Player.reputation)[i]].level]+")";
					document.getElementsByClassName("widthPadding")[i].innerHTML = this.levels[Player.reputation[Object.keys(Player.reputation)[i]].level] + " (" + Player.reputation[Object.keys(Player.reputation)[i]].score + "/"+ReputationPoints[Player.reputation[Object.keys(Player.reputation)[i]].level]+")";
				}else{
					document.getElementsByClassName("reputationBar")[i].innerHTML = this.levels[Player.reputation[Object.keys(Player.reputation)[i]].level];
					document.getElementsByClassName("widthPadding")[i].innerHTML = this.levels[Player.reputation[Object.keys(Player.reputation)[i]].level];
				}
				if (Player.reputation[Object.keys(Player.reputation)[i]].level >= 3) {
					document.getElementsByClassName("reputationBar")[i].style.textIndent = ((250-document.getElementsByClassName("widthPadding")[i].clientWidth)/2) + "px";
					document.getElementsByClassName("reputationBar")[i].style.width = Player.reputation[Object.keys(Player.reputation)[i]].score*250/ReputationPoints[Player.reputation[Object.keys(Player.reputation)[i]].level]+"px";
					document.getElementsByClassName("reputationBar")[i].style.left = "0px";
				}else{
					document.getElementsByClassName("reputationBar")[i].style.textIndent = ((250-document.getElementsByClassName("widthPadding")[i].clientWidth)/2)-Player.reputation[Object.keys(Player.reputation)[i]].score*250/ReputationPoints[Player.reputation[Object.keys(Player.reputation)[i]].level]+ "px";
					document.getElementsByClassName("reputationBar")[i].style.width = (ReputationPoints[Player.reputation[Object.keys(Player.reputation)[i]].level]-Player.reputation[Object.keys(Player.reputation)[i]].score)*250/ReputationPoints[Player.reputation[Object.keys(Player.reputation)[i]].level]+"px";
					document.getElementsByClassName("reputationBar")[i].style.left = Player.reputation[Object.keys(Player.reputation)[i]].score*250/ReputationPoints[Player.reputation[Object.keys(Player.reputation)[i]].level]+"px";
				}
				if (Player.reputation[Object.keys(Player.reputation)[i]].level === 6) {
					document.getElementsByClassName("reputationBar")[i].style.width = "250px";
				}
				document.getElementsByClassName("widthPadding")[i].innerHTML = "";
			}
		}
	}
}

Dom.reputation.upLevel = function (Area,i) {
	if (Area.level < 5) {
		Area.score -= ReputationPoints[Player.reputation[Object.keys(Player.reputation)[i]].level];
		Area.level++;
		Dom.chat.insert("Your reputation with " + FromCamelCase(Object.keys(Player.reputation)[i]) + " has increased to " + Dom.reputation.levels[Area.level]);
		this.update();
	}else{
		Area.level = 6;
		Area.score = 0;
		this.update();
	}
}

Dom.reputation.downLevel = function (Area,i) {
	if (Area.level > 1) {
		Area.level--;
		Area.score += ReputationPoints[Player.reputation[Object.keys(Player.reputation)[i]].level];
		Dom.chat.insert("Your reputation with " + FromCamelCase(Object.keys(Player.reputation)[i]) + " has decreased to " + Dom.reputation.levels[Area.level]);
		this.update();
	}else{
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
		}else{
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
		}else{
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

Dom.inventory.displayIdentification = function (display) {
	if (display) {
		Dom.elements.itemIdentification.hidden = false;
		Dom.inventory.updatePosition(Dom.elements.itemIdentification, "inventoryPage");
	}
	Dom.elements.innerStats.innerHTML = "<strong>Level: " + Player.level + "</strong>"+
	"<br><strong>XP: " + Round(100*Player.xp/LevelXP[Player.level],2) + "%</strong> ("+Player.xp+"/"+LevelXP[Player.level]+")"+
	"<br><br><strong>Stats:</strong>";
	Dom.elements.innerStats.innerHTML += "<br>Max Health: " + Player.stats.maxHealth;
	if (Player.inventory.weapon.name !== "") {
		Dom.elements.innerStats.innerHTML += "<br>Damage: " + Round(Player.stats.damage+Player.stats.damage*Player.stats.damagePercentage/100);
		if (Player.stats.maxDamage !== 0 && Player.stats.maxDamage !== Player.stats.damage) {
			Dom.elements.innerStats.innerHTML += "-" + Round(Player.stats.maxDamage+Player.stats.maxDamage*Player.stats.damagePercentage/100);
		}
	}else{
		Dom.elements.innerStats.innerHTML += "<br>Damage: 0";
	}
	Dom.elements.innerStats.innerHTML += "<br>Defence: " + Player.stats.defence;
	if (Player.stats.blockDefence !== 0) {
		Dom.elements.innerStats.innerHTML += "<br>Block Defence: " + Player.stats.blockDefence;
	}
	Dom.elements.innerStats.innerHTML += "<br>Critical Chance: " + Player.stats.criticalChance + "%";
	Dom.elements.innerStats.innerHTML += "<br>Dodge Chance: " + Player.stats.dodgeChance + "%";
	if (Player.stats.flaming !== 0) {
		Dom.elements.innerStats.innerHTML += "<br>Flaming "+Romanize(Player.stats.flaming);
	}
	if (Player.stats.frostaura) {
		Dom.elements.innerStats.innerHTML += "<br>Frostaura";
	}
	if (Player.class === "a") {
		Dom.elements.innerStats.innerHTML += "<br>Focus Speed: " + Player.stats.focusSpeed + "/s";
	}
	Dom.elements.innerStats.innerHTML += "<br>Health Regen: " + Player.stats.healthRegen + "/s";
	if (Player.stats.lifesteal !== 0) {
		Dom.elements.innerStats.innerHTML += "<br>Lifesteal: " + Player.stats.lifesteal + "%";
	}
	if (Player.stats.hex !== 0) {
		Dom.elements.innerStats.innerHTML += "<br>Hex: " + Player.stats.hex + "%";
	}
	if (Player.stats.looting !== 100) {
		Dom.elements.innerStats.innerHTML += "<br>Looting: " + Player.stats.looting + "%";
	}
	if (Player.stats.poisonX !== 0 && Player.stats.posionY !== 0) {
		Dom.elements.innerStats.innerHTML += "<br>Poison: " + Player.stats.poisonX + "/" + Player.stats.poisonY + "s";
	}
	if (Player.stats.reflection !== 0) {
		Dom.elements.innerStats.innerHTML += "<br>Reflection: " + Player.stats.reflection + "%";
	}
	if (Player.stats.reloadTime !== 500) {
		Dom.elements.innerStats.innerHTML += "<br>Reload Time: " + Player.stats.reloadTime/1000 + "s";
	}
	if (Player.stats.stun !== 0) {
		Dom.elements.innerStats.innerHTML += "<br>Stun: " + Player.stats.stun + "s";
	}
	Dom.elements.innerStats.innerHTML += "<br>Swim Speed: " + Player.stats.swimSpeed + "/s";
	Dom.elements.innerStats.innerHTML += "<br>Walk Speed: " + Player.stats.walkSpeed + "/s";
	if (Player.stats.iceSpeed !== 270) {
		Dom.elements.innerStats.innerHTML += "<br>Ice Speed: " + Player.stats.iceSpeed + "/s";
	}
	if (Player.stats.xpBonus !== 0) {
		Dom.elements.innerStats.innerHTML += "<br>XP Bonus: " + Player.stats.xpBonus + "%";
	}
	if (Player.stats.fishingSkill !== 0) {
		Dom.elements.innerStats.innerHTML += "<br>Fishing Skill: " + Round(Player.stats.fishingSkill);
	}
	if (Player.statusEffects.length !== 0) {
		Dom.elements.innerStatus.innerHTML = "<strong>Status Effects:</strong>";
		for (let i = 0; i < Player.statusEffects.length; i++) {
			Dom.elements.innerStatus.innerHTML += "<br>" + Player.statusEffects[i].title + ": " + Player.statusEffects[i].effect + (Player.statusEffects[i].info ? Player.statusEffects[i].info.time ? " (" + (Math.floor(Player.statusEffects[i].info.time) - Math.floor(Player.statusEffects[i].info.ticks)) + "s)" : "" : "");
		}
	}
	Dom.elements.itemIdentification.style.width = Dom.elements.innerStats.offsetWidth+"px";
}

Dom.inventory.stats = function (stat, value, array) { // stat should be in Title Case // copy to archaeology
	if (stat === "Defence" || stat === "Block Defence" || stat === "Fishing Skill" || stat === "Max Health") {
		return stat+": "+NumberSign(value)+"<br>";
	}else if (stat === "Critical Chance" || stat === "Dodge Chance" || stat === "Looting" || stat === "Reflection" || stat === "Lifesteal" || stat === "Xp Bonus" || stat === "Hex" || stat === "Damage Percentage") {
		return stat+": "+NumberSign(value)+"%<br>";
	}else if (stat === "Health Regen" || stat === "Swim Speed" || stat === "Walk Speed" || stat === "Ice Speed" || stat === "Focus Speed") {
		return stat+": "+NumberSign(value)+"/s<br>";
	}else if (stat === "Stun") {
		return stat+": "+NumberSign(value)+"s<br>";
	}else if (stat === "Reload Time") {
		return stat+": "+(NumberSign(value/1000))+"s<br>";
	}else if (stat === "Flaming") {
		return stat+" "+Romanize(value)+"<br>";
	}else if (stat === "Poison X") {
		return "Poison: "+NumberSign(value)+"/"+array.poisonY+"s<br>";
	}else if (stat === "Damage") {
		return stat+": "+value + (array.maxDamage > value ? "-" + array.maxDamage : "")+"<br>";
	}else if (stat === "Frostaura") {
		return stat+"<br>";
	}else{
		return "";
	}
};

Dom.inventory.displayInformation = function (item, stacked, element, position, hide) {
	if (hide !== "cooldown" || Dom.inventory.displayedInformation === item.name) {
		if (hide === undefined) {
			Dom.elements.information.hidden = true;
		}
		if (item.image !== undefined) {
			if (hide === undefined) {
				Dom.elements.information.style.opacity = 0;
				Dom.elements.information.hidden = false;
			}
			Dom.inventory.updatePosition(Dom.elements.information, element);
			Dom.elements.information.style.opacity = 1;
			Dom.inventory.displayedInformation = item.name;
			if (item.name !== undefined) {
				Dom.elements.name.innerHTML = item.name;
				if (item.rarity === "mythic") {
					Dom.elements.name.style.color = "#b13fea";
				}else if (item.rarity === "unique") {
					Dom.elements.name.style.color = "orange";
				}else if (item.rarity === "junk") {
					Dom.elements.name.style.color = "darkgray";
				}else{
					Dom.elements.name.style.color = "var(--text)";
				}
			}else{
				Dom.elements.name.innerHTML = "Unidentified "+item.type.charAt(0).toUpperCase() + item.type.slice(1);
				Dom.elements.name.style.color = "var(--text)";
			}
			// weapon, armour or rod
			if (item.type !== "item" && item.type !== "bag" && item.type !== "currency" && item.type !== "fish" && item.type !== "consumable" && item.type !== "food" && item.type !== "teleport") {
				if (item.type !== "rod") {
					Dom.elements.stats.innerHTML = "Tier: "+item.tier+"<br>";
				}else{
					Dom.elements.stats.innerHTML = "";
				}
				if (item.stats !== undefined) {
					for (let i = 0; i < Object.keys(item.stats).length; i++) {
						if (Object.keys(item.stats)[i] !== item.chosenStat) {

							Dom.elements.stats.innerHTML += Dom.inventory.stats(FromCamelCase(Object.keys(item.stats)[i]), item.stats[Object.keys(item.stats)[i]], item.stats);
						}
					}
					if (item.chooseStats !== undefined) {
						if (Object.keys(item.chooseStats).length > 0) {
							Dom.elements.stats.innerHTML += "<br>Click to choose stat:<br>";
						}
						for (let i = 0; i < Object.keys(item.chooseStats).length; i++) {
							let color = "gray";
							if (Object.keys(item.chooseStats)[i] === item.chosenStat) {
								color = "var(--text)";
							}
							Dom.elements.stats.innerHTML += "<span style='color: "+color+"'>"+Dom.inventory.stats(FromCamelCase(Object.keys(item.chooseStats)[i]), item.chooseStats[Object.keys(item.chooseStats)[i]], item.chooseStats)+"</span>";
						}
					}
					if (item.conditionalChooseStats !== undefined) {
						if (item.chooseStats === undefined) {
							item.chooseStats = [];
						}
						if (Object.keys(item.conditionalChooseStats).length > Object.keys(item.chooseStats).length) {
							Dom.elements.stats.innerHTML += "<br>Locked stats:<br>";
						}
						for (let i = 0; i < Object.keys(item.conditionalChooseStats).length; i++) {
							if (!Object.keys(item.chooseStats).includes(Object.keys(item.conditionalChooseStats[i])[0])) {
								Dom.elements.stats.innerHTML += "<span style='color: gray'>"+Dom.inventory.stats(FromCamelCase(Object.keys(item.conditionalChooseStats[i])[0]), item.conditionalChooseStats[i][Object.keys(item.conditionalChooseStats[i])[0]], item.conditionalChooseStats)+"</span>";
							}
						}
					}
					if (item.conditionalStats !== undefined) {
						for (let x = 0; x < item.conditionalStats.length; x++) {
							Dom.elements.stats.innerHTML += "<br>"+item.conditionalStats[x].text+"<br>";
							for (let i = 0; i < Object.keys(item.conditionalStats[x].stats).length; i++) {
								let color = "gray";
								if (Items[item.type][item.id].conditionalStats[x].condition()) {
									color = "var(--text)";
								}
								Dom.elements.stats.innerHTML += "<span style='color: "+color+"'>"+Dom.inventory.stats(FromCamelCase(Object.keys(item.conditionalStats[x].stats)[i]), item.conditionalStats[x].stats[Object.keys(item.conditionalStats[x].stats)[i]], item.conditionalStats[x].stats)+"</span>";
							}
						}
					}
				}else{
					Dom.elements.stats.innerHTML += "<br>Area: " + FromCamelCase(item.area);
				}
				if (item.set !== undefined) {
					// if the item is equipped
					if (position === "equip") {
						let setNum = 0;
						for (let i = 0; i < Items.set[item.set].armour.length; i++) {
							for (let x = 0; x < 4; x++) {
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
							if (Items.set[item.set].multiplier !== undefined) {
								for (let i = 0; i < Items.set[item.set].multiplier.length; i++) {
									Dom.elements.set.innerHTML += "<br>"+ Items.set[item.set].multiplier[i].text;
								}
							}
						}
					// if the item is not equipped
					}else{
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
								for (let x = 0; x < 4; x++) {
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
							if (Items.set[item.set].multiplier !== undefined) {
								for (let i = 0; i < Items.set[item.set].multiplier.length; i++) {
									Dom.elements.set.innerHTML += "<br>"+ Items.set[item.set].multiplier[i].text;
								}
							}
						}
					}
				}else{
					Dom.elements.set.innerHTML = "";
				}
			}else{
				Dom.elements.set.innerHTML = "";
				Dom.elements.stats.innerHTML = "";
			}
			if (item.type === "bag") {
				Dom.elements.stats.innerHTML = "Capacity: "+item.size;
			}
			if (item.type === "currency") {
				if (stacked !== undefined) {
					Dom.elements.name.innerHTML = stacked + " " + Dom.elements.name.innerHTML;
				}else if (item.stacked !== undefined) {
					Dom.elements.name.innerHTML = item.stacked + " " + Dom.elements.name.innerHTML;
				}else{
					Dom.elements.name.innerHTML = "1 " + Dom.elements.name.innerHTML;
				}
			}
			if (item.fishingType === "fish") {
				Dom.elements.stats.innerHTML = "Length: " + item.length + "cm";
			}
			if (item.quest !== undefined && (item.quest === true || item.quest())) {
				Dom.elements.stats.innerHTML = "<span style='color: slateblue;'>Quest item</span><br>" + (Dom.elements.stats.innerHTML !== "" ? "<br>"+Dom.elements.stats.innerHTML : "");
			}else{
				Dom.elements.stats.style.color = "var(--text)";
			}
			let lorebuyer = "<br><br>";
			if (item.use !== undefined) {
				Dom.elements.lore.innerHTML = item.use;
			}
			else if (item.functionText !== undefined && item.functionText !== "") {// && item.chooseStats === undefined) {
				Dom.elements.lore.innerHTML = /*(Dom.elements.stats.innerHTML !== "" ? "<br>" : "") +*/ item.functionText + (item.charges !== undefined ? "<br><br>" + item.charges + " Charges" : "");
			}
			else if (item.healthRestore !== undefined && item.healthRestoreTime !== undefined) {
				Dom.elements.lore.innerHTML = "Restores "+item.healthRestore+" health over "+item.healthRestoreTime+" seconds (whilst not in combat)";
			}
			else {
				Dom.elements.lore.innerHTML = "";
				lorebuyer = "";
			}
			//let lorebuyer = "";
			if (item.lore !== undefined && item.lore !== "" && !Array.isArray(item.lore)) {
				Dom.elements.lore.innerHTML += lorebuyer+"<i>"+item.lore+"</i>";
				lorebuyer = "<br><br>";
			}/*else{
				Dom.elements.lore.innerHTML = "";
			}*/
			if (position === "buyer" && item.sellPrice !== undefined) {
				Dom.elements.lore.innerHTML += lorebuyer+"Sell "+(item.sellQuantity !== 1 ? item.sellQuantity : "")+" for "+(item.charges === undefined ? item.sellPrice : Math.ceil(item.sellPrice / (item.maxCharges / item.charges)))+" gold";
			}
			if (item.cooldownStart !== undefined && parseInt(item.cooldownStart) + item.cooldown > parseInt(GetFullDateTime())) {
				let answer = CalculateTime(GetFullDateTime(), (parseInt(item.cooldownStart) + item.cooldown).toString());
				Dom.elements.lore.innerHTML += (Dom.elements.lore.innerHTML !== "" ? "<br><br>" : "") +"On cooldown:<br>" + answer;
				Dom.inventory.displayTimer = true;
				setTimeout(function () {
					if (Dom.inventory.displayTimer) {
						Dom.inventory.displayInformation(item, stacked, element, position, "cooldown");
					}
				},1000);
			}
			Dom.elements.information.style.width = Math.max(Dom.elements.name.offsetWidth, Dom.elements.stats.offsetWidth)+"px";
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
Dom.quest.start = function (quest) {
	if (Dom.changeBook("questStart")) {//, true/*false*/, true)) {
		Dom.elements.questStartQuest.innerHTML = quest.quest;
		Dom.elements.questStartName.innerHTML = quest.startName;
		Dom.elements.questStartChat.innerHTML = quest.startChat;
		Dom.elements.questStartObjectives.innerHTML = "";
		for (let i = 0; i < quest.objectives.length; i++) {
			Dom.elements.questStartObjectives.innerHTML += "<br>" + quest.objectives[i];
		}
		
		// xp rewards
		Dom.elements.questStartItems.innerHTML = "";
		Dom.elements.questStartXP.hidden = true;
		if (quest.rewards !== undefined) {
			if (quest.rewards.xp > 0) {
				Dom.elements.questStartXP.hidden = false;
				Dom.elements.questStartXP.innerHTML = quest.rewards.xp;
			}
			Dom.elements.questStartRewardsTitle.innerHTML = "<br><br><b>Quest Rewards</b><br>";

			// service rewards
			if (quest.rewards.services !== undefined) {
				for (let i = 0; i < quest.rewards.services.length; i++) {
					Dom.elements.questStartItems.innerHTML += "<img src='./assets/icons/" + quest.rewards.services[i].image + ".png' class='theseQuestServices'></img>&nbsp;&nbsp;";
				}
			}

			// item rewards
			if (!quest.addedRewardsFromTables) {
				for (let i = 0; i < QuestRewardTables.globalAll.length; i++) {
					quest.rewards.items.push(QuestRewardTables.globalAll[i]);
				}

				if (quest.repeatTime === "daily") {
					for (let i = 0; i < QuestRewardTables.globalDaily.length; i++) {
						quest.rewards.items.push(QuestRewardTables.globalDaily[i]);
					}
				}
				quest.addedRewardsFromTables = true;
			}

			if (quest.rewards.items !== undefined) {
				for (let i = 0; i < quest.rewards.items.length; i++) {
					Dom.quest.addReward(quest.rewards.items[i], "questStartItems", "theseQuestOptions", "questStackNum");
				}
			}
		}
		else{
			Dom.elements.questStartRewardsTitle.innerHTML = "";
		}
		
		// start rewards
		Dom.elements.questStartStartItems.innerHTML = "";
		if (quest.startRewards !== undefined) {
			Dom.elements.questStartStartRewardsTitle.innerHTML = "<br><br><b>Quest Start Rewards</b><br>";
			
			// service rewards
			if (quest.startRewards.services !== undefined) {
				for (let i = 0; i < quest.startRewards.services.length; i++) {
					Dom.elements.questStartStartItems.innerHTML += "<img src='./assets/icons/" + quest.startRewards.services[i].image + ".png' class='theseQuestStartServices'></img>&nbsp;&nbsp;";
				}
			}
			
			// item rewards
			if (quest.startRewards.items !== undefined) {
				for (let i = 0; i < quest.startRewards.items.length; i++) {
					Dom.quest.addReward(quest.startRewards.items[i], "questStartStartItems", "theseQuestStartOptions", "questStartStackNum");
				}
			}
		}
		else{
			Dom.elements.questStartStartRewardsTitle.innerHTML = "";
		}
		
		// repeats for all item rewards
		let startArray = document.getElementsByClassName("theseQuestStartServices");
		if (startArray.length === 0) {
			startArray = document.getElementsByClassName("theseQuestStartOptions");
		}
		else {
			for (let x = 0; x < document.getElementsByClassName("theseQuestStartServices").length; x++) {
				quest.startRewards.services[x].type = "item";
				quest.startRewards.services[x].name = "Service Reward";
				document.getElementsByClassName("theseQuestStartServices")[x].onmouseover = function () {
					Dom.inventory.displayInformation(quest.startRewards.services[x], undefined, "questStart");
				};
				document.getElementsByClassName("theseQuestStartServices")[x].onmouseleave = function () {
					Dom.expand("information");
				};
			}
		}
		if (startArray.length > 0) {
			startArray[startArray.length-1].onload = function () {
				for (let x = 0; x < document.getElementsByClassName("theseQuestStartOptions").length; x++) {
					document.getElementsByClassName("theseQuestStartOptions")[x].onmouseover = function () {
						Dom.inventory.displayInformation(quest.startRewards.items[x].item, quest.startRewards.items[x].quantity, "questStart");
					};
					document.getElementsByClassName("theseQuestStartOptions")[x].onmouseleave = function () {
						Dom.expand("information");
					};
				}
				
				for (let x = 0; x < document.getElementsByClassName("questStartStackNum").length; x++) {
					document.getElementsByClassName("questStartStackNum")[x].onmouseover = function () {
						Dom.inventory.displayInformation(quest.startRewards.items[x].item, quest.startRewards.items[x].quantity, "questStart");
					};
					document.getElementsByClassName("questStartStackNum")[x].onmouseleave = function () {
						Dom.expand("information");
					};
					document.getElementsByClassName("questStartStackNum")[x].style.left = document.getElementsByClassName("theseQuestStartOptions")[x].offsetLeft + 5 + "px";
					document.getElementsByClassName("questStartStackNum")[x].style.top = document.getElementsByClassName("theseQuestStartOptions")[x].offsetTop + 33 + "px";
				}
			}
		}
		let array = document.getElementsByClassName("theseQuestServices");
		if (array.length === 0) {
			array = document.getElementsByClassName("theseQuestOptions");
		}
		else {
			for (let x = 0; x < document.getElementsByClassName("theseQuestServices").length; x++) {
				quest.rewards.services[x].type = "item";
				quest.rewards.services[x].name = "Service Reward";
				document.getElementsByClassName("theseQuestServices")[x].onmouseover = function () {
					Dom.inventory.displayInformation(quest.rewards.services[x], undefined, "questStart");
				};
				document.getElementsByClassName("theseQuestServices")[x].onmouseleave = function () {
					Dom.expand("information");
				};
			}
		}
		if (array.length > 0) {
			array[array.length-1].onload = function () {
				for (let x = 0; x < document.getElementsByClassName("theseQuestOptions").length; x++) {
					document.getElementsByClassName("theseQuestOptions")[x].onmouseover = function () {
						Dom.inventory.displayInformation(quest.rewards.items[x].item, quest.rewards.items[x].quantity, "questStart");
					};
					document.getElementsByClassName("theseQuestOptions")[x].onmouseleave = function () {
						Dom.expand("information");
					};
				}
				
				for (let x = 0; x < document.getElementsByClassName("questStackNum").length; x++) {
					document.getElementsByClassName("questStackNum")[x].onmouseover = function () {
						Dom.inventory.displayInformation(quest.rewards.items[x].item, quest.rewards.items[x].quantity, "questStart");
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

Dom.quest.addReward = function (item, element, className, stackNum) {
	if (item.condition === undefined || item.condition()) {
		if (item.quantity !== undefined && item.quantity !== 1) {
			document.getElementById(element).innerHTML += "<img src=" + item.item.image + " class='"+className+"'><div class='"+stackNum+"'>"+item.quantity+"</div></img>&nbsp;&nbsp;";
		}else{
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

Dom.quest.finish = function (quest) {
	if (Dom.changeBook("questFinish")) {//, true/*false*/, true)) {
		Dom.elements.questFinishQuest.innerHTML = quest.quest;
		Dom.elements.questFinishName.innerHTML = quest.finishName;
		Dom.elements.questFinishChat.innerHTML = quest.finishChat;
		
		// xp rewards
		Dom.elements.questFinishItems.innerHTML = "";
		Dom.elements.questFinishXP.hidden = true;
		if (quest.rewards !== undefined) {
			if (quest.rewards.xp > 0) {
				Dom.elements.questFinishXP.hidden = false;
				Dom.elements.questFinishXP.innerHTML = quest.rewards.xp;
			}
			Dom.elements.questFinishRewardsTitle.innerHTML = "<br><br><b>Quest Rewards</b><br>";

		// service rewards
		if (quest.rewards.services !== undefined) {
			for (let i = 0; i < quest.rewards.services.length; i++) {
				Dom.elements.questFinishItems.innerHTML += "<img src='./assets/icons/" + quest.rewards.services[i].image + ".png' class='theseQuestFinishServices'></img>&nbsp;&nbsp;";
			}
		}

		//item rewards
		if (!quest.addedRewardsFromTables) {
			for (let i = 0; i < QuestRewardTables.globalAll.length; i++) {
				quest.rewards.items.push(QuestRewardTables.globalAll[i]);
			}

			if (quest.repeatTime === "daily") {
				for (let i = 0; i < QuestRewardTables.globalDaily.length; i++) {
					quest.rewards.items.push(QuestRewardTables.globalDaily[i]);
				}
			}
			quest.addedRewardsFromTables = true;
		}

			Dom.elements.questFinishRewardsTitle.innerHTML = "<br><br><b>Quest Rewards</b><br>";
			if (quest.rewards.items !== undefined) {
				for (let i = 0; i < quest.rewards.items.length; i++) {
					Dom.quest.addReward(quest.rewards.items[i], "questFinishItems", "theseQuestFinishOptions", "questFinishStackNum");
				}
				
				// display warning if there is not enough space to hold all possible rewards
				if (Dom.inventory.requiredSpace(quest.rewards.items, true)) {
					Dom.elements.chanceImage.hidden = true;
					Dom.elements.chance.hidden = true;
				}
				else {
					Dom.elements.chanceImage.hidden = false;
					Dom.elements.chance.hidden = false;
				}
				
			}
		}else{
			Dom.elements.questFinishRewardsTitle.innerHTML = "";
			Dom.elements.questFinishStartItems.innerHTML = "";
		}
		
		let array = document.getElementsByClassName("theseQuestFinishServices");
		if (array.length === 0) {
			array = document.getElementsByClassName("theseQuestFinishOptions");
		}
		else {
			for (let x = 0; x < document.getElementsByClassName("theseQuestFinishServices").length; x++) {
				quest.rewards.services[x].type = "item";
				quest.rewards.services[x].name = "Service Reward";
				document.getElementsByClassName("theseQuestFinishServices")[x].onmouseover = function () {
					Dom.inventory.displayInformation(quest.rewards.services[x], undefined, "questFinish");
				};
				document.getElementsByClassName("theseQuestFinishServices")[x].onmouseleave = function () {
					Dom.expand("information");
				};
			}
		}
		array[array.length-1].onload = function () {
			for (let x = 0; x < document.getElementsByClassName("theseQuestFinishOptions").length; x++) {
				document.getElementsByClassName("theseQuestFinishOptions")[x].onmouseover = function () {
					Dom.inventory.displayInformation(quest.rewards.items[x].item, quest.rewards.items[x].quantity, "questFinish");
				};
				document.getElementsByClassName("theseQuestFinishOptions")[x].onmouseleave = function () {
					Dom.expand("information");
				};
			}
			for (let x = 0; x < document.getElementsByClassName("questFinishStackNum").length; x++) {
				document.getElementsByClassName("questFinishStackNum")[x].onmouseover = function () {
					Dom.inventory.displayInformation(quest.rewards.items[x].item, quest.rewards.items[x].quantity, "questFinish");
				};
				document.getElementsByClassName("questFinishStackNum")[x].onmouseleave = function () {
					Dom.expand("information");
				};
				document.getElementsByClassName("questFinishStackNum")[x].style.left = document.getElementsByClassName("theseQuestFinishOptions")[x].offsetLeft + 5 + "px";
				document.getElementsByClassName("questFinishStackNum")[x].style.top = document.getElementsByClassName("theseQuestFinishOptions")[x].offsetTop + 33 + "px";
			}
		}
		
		Dom.currentlyDisplayed = quest;
	}
}

Dom.quest.accept = function () {
	if (Dom.currentlyDisplayed.resetVariables !== undefined) {
		for (let i = 0; i < Dom.currentlyDisplayed.resetVariables.length; i++) {
			Player.quests.questProgress[Dom.currentlyDisplayed.resetVariables[i]] = undefined;
		}
	}
	Dom.quests.active(Dom.currentlyDisplayed);
	Dom.quests.possible();
	let quest = Dom.currentlyDisplayed;
	if (Dom.currentlyDisplayed.onQuestStart !== undefined) {
		Dom.currentlyDisplayed.onQuestStart();
	}
	// if the onQuestStart changed the page then don't change the page
	if (Dom.currentlyDisplayed === quest) {
		Dom.closePage('questStart');
	}

	// last because it saves
	if (quest.startRewards !== undefined) {
		for (let i = 0; i < quest.startRewards.items.length; i++) {
			if (quest.startRewards.items[i].condition === undefined || quest.startRewards.items[i].condition() && (quest.startRewards.items[i].chance === undefined || quest.startRewards.items[i].chance > Random(0, 99))) {
				Dom.inventory.give(quest.startRewards.items[i].item, quest.startRewards.items[i].quantity);
				if (quest.startRewards.items[i].chance !== undefined) {
					if (quest.startRewards.items[i].quantity > 1) {
						Dom.chat.insert("You earned "+quest.startRewards.items[i].quantity+" rare <strong>"+quest.startRewards.items[i].item.name+"</strong> from completing this quest.");
					}
					else {
						Dom.chat.insert("You earned a rare <strong>"+quest.startRewards.items[i].item.name+"</strong> from completing this quest.");
					}
				}
			}
		}
	}
}

Dom.quest.acceptRewards = function () {
	if (Dom.currentlyDisplayed.removeItems !== undefined) {
		for (let i = 0; i < Dom.currentlyDisplayed.removeItems.length; i++) {
			Dom.inventory.removeById(Dom.currentlyDisplayed.removeItems[i].item.id, Dom.currentlyDisplayed.removeItems[i].item.type, Dom.currentlyDisplayed.removeItems[i].quantity);
		}
	}
	if (Dom.currentlyDisplayed.rewards.reputation !== undefined) {
		for (let i = 0; i < Object.keys(Dom.currentlyDisplayed.rewards.reputation).length; i++) {
			Dom.reputation.give(Object.keys(Dom.currentlyDisplayed.rewards.reputation)[i], Dom.currentlyDisplayed.rewards.reputation[Object.keys(Dom.currentlyDisplayed.rewards.reputation)[i]])
		}
	}
	for (let i = 0; i < Player.quests.activeQuestArray.length; i++) {
		if (Player.quests.activeQuestArray[i] === Dom.currentlyDisplayed.quest) {
			Player.quests.activeQuestArray.splice(i,1);
		}
	}
	Dom.quests.completed(Dom.currentlyDisplayed);
	if (Dom.currentlyDisplayed.repeatTime !== "daily") {
		User.progress.quests = Increment(User.progress.quests);
	}else{
		User.progress.dailyQuests = Increment(User.progress.dailyQuests);
	}
	Player.quests.questLastFinished[Dom.currentlyDisplayed.questArea][Dom.currentlyDisplayed.id] = GetFullDate();
	Dom.checkProgress();
	Dom.quests.possible();
	Dom.adventure.update();
	Player.quests.canBeFinishedArray.splice(Player.quests.canBeFinishedArray.findIndex(quest => quest === Dom.currentlyDisplayed.quest),1);
	let quest = Dom.currentlyDisplayed;
	if (Dom.currentlyDisplayed.onQuestFinish !== undefined) {
		Dom.currentlyDisplayed.onQuestFinish();
	}
	// if the onQuestFinish changed the page then don't change the page
	if (Dom.currentlyDisplayed === quest) {
		Dom.closePage('questFinish');
	}
	Game.getXP(quest.rewards.xp, false); // not affected by XP Bonus

	// last because it saves
	if (quest.rewards.items !== undefined) {
		for (let i = 0; i < quest.rewards.items.length; i++) {
			if (quest.rewards.items[i].item.type !== "item" || quest.rewards.items[i].item.id !== 1) {
				if ((quest.rewards.items[i].condition === undefined || quest.rewards.items[i].condition()) && (quest.rewards.items[i].chance === undefined || quest.rewards.items[i].chance > Random(0, 99))) {
					Dom.inventory.give(quest.rewards.items[i].item, quest.rewards.items[i].quantity);
					if (quest.rewards.items[i].chance !== undefined) {
						if (quest.rewards.items[i].quantity > 1) {
							Dom.chat.insert("You earned "+quest.rewards.items[i].quantity+" rare <strong>"+quest.rewards.items[i].item.name+"</strong> from completing this quest.");
						}
						else {
							Dom.chat.insert("You earned a rare <strong>"+quest.rewards.items[i].item.name+"</strong> from completing this quest.");
						}
					}
				}
			}
		}
	}

	/*for (let i = 0; i < QuestRewardTables.globalAll.length; i++) {
		if (QuestRewardTables.globalAll[i].condition === undefined || QuestRewardTables.globalAll[i].condition() && (QuestRewardTables.globalAll[i].chance === undefined || QuestRewardTables.globalAll[i].chance > Random(0, 99))) {
			Dom.inventory.give(QuestRewardTables.globalAll[i].item, QuestRewardTables.globalAll[i].quantity);
		}
	}

	if (quest.repeatTime === "daily") {
		for (let i = 0; i < QuestRewardTables.globalDaily.length; i++) {
			if (QuestRewardTables.globalDaily[i].condition === undefined || QuestRewardTables.globalDaily[i].condition() && (QuestRewardTables.globalDaily[i].chance === undefined || QuestRewardTables.globalDaily[i].chance > Random(0, 99))) {
				Dom.inventory.give(QuestRewardTables.globalDaily[i].item, QuestRewardTables.globalDaily[i].quantity);
			}
		}
	}*/
}

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
				//if (Player.quests.randomDailyQuests[quest.randomGroup] !== quest.quest) {
					if (Player.quests.randomDailyQuests[quest.randomGroup] === undefined) {
						Player.quests.possibleQuestArray.push(quest.quest);
						if (!Dom.quests.possibleHTML[quest.important].includes(FromCamelCase(quest.randomGroup))) {
							Dom.quests.possibleHTML[quest.important] += "<br><br><strong>" + FromCamelCase(quest.randomGroup) + "</strong><br>" + quest.howToStart;
						}
					}
					questCanBeStarted = false;
				//}
			}
			else {
				// check if it is daily or one time
				if (quest.repeatTime === undefined) {
					// one time
					if (Player.quests.completedQuestArray.includes(quest.quest)) { // quest has already been completed
						questCanBeStarted = false;
					}
				}
				else if (quest.repeatTime === "daily") {
					// daily
					if (Player.quests.questLastFinished[quest.questArea][quest.id] >= GetFullDate()) { // quest has already been done today (or after today o.O)
						// note that if the quest has not been finished (hence questLastFinished is undefined) the condition will always return false
						questCanBeStarted = false;
					}
				}
			}
			if (quest.reputationRequirements !== undefined) {
				for (let y = 0; y < Object.keys(quest.reputationRequirements).length; y++) {
					if (quest.reputationRequirements[Object.keys(quest.reputationRequirements)[y]] > Player.reputation[Object.keys(quest.reputationRequirements)[y]].level) {
						questCanBeStarted = false;
					}
				}
			}

			if (questCanBeStarted) {
				if (quest.repeatTime === "daily") {
					quest.important = "daily";
				}
				Player.quests.possibleQuestArray.push(quest.quest);
				Dom.quests.possibleHTML[quest.important] += "<br><br><strong>" + quest.quest + "</strong><br>" + quest.howToStart;
				if (!previousPossible.includes(quest.quest)) {
					newPossible.push(quest.quest);
					if (quest.quest !== "To the Logging Camp") {
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

Dom.quests.completed = function (quest) {
	let first = true;
	for (let i = 0; i < Player.quests.completedQuestArray.length; i++) {
		if (quest !== undefined && Player.quests.completedQuestArray[i] === quest.quest) {
			// quest has already been completed (daily quest)
			first = false;
		}
	}
	if (quest !== undefined && first) {
		Player.quests.completedQuestArray.push(quest.quest);
	}
	if (Player.quests.completedQuestArray.length > 0) {
		Dom.elements.completedQuestBox.style.textAlign = "left";
		Dom.elements.completedQuestBox.innerText = "";
		for (let i = 0; i < Player.quests.completedQuestArray.length; i++) {
			Dom.elements.completedQuestBox.innerHTML += Player.quests.completedQuestArray[i] + "<br>";
		}
	}
}

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

Dom.merchant.page = function (npc, sold, chat) {
	if (Dom.changeBook("merchantPage")) {//, true/*false*/, true);
		//Dom.currentlyDisplayed = npc.name;
		//Dom.changeBook("merchantPage", false); // stops close button being red
		Dom.elements.merchantPageTitle.innerHTML = npc.name;
		Dom.elements.merchantPageChat.innerHTML = chat;
		Dom.elements.merchantPageOptions.innerHTML = "";
		Dom.elements.merchantPageBuy.innerHTML = "";
		for (let i = 0; i < sold.length; i++) {
			Dom.elements.merchantPageOptions.innerHTML += "<img src=" + sold[i].item.image + " class='theseOptions' style='border: 5px solid var(--border);'></img><br><br>";
			if (sold[i].costCurrency === undefined) {
				sold[i].costCurrency = 2;
			}
			Dom.elements.merchantPageBuy.innerHTML += "<div class='buy'>Buy for: " + sold[i].cost + " " + Items.currency[sold[i].costCurrency].name + "</div><br>";
			for (let x = 0; x < document.getElementsByClassName("buy").length; x++) {
				document.getElementsByClassName("buy")[x].onclick = function () {
					Dom.merchant.buy(sold[x], x, npc);
				};
			}
			// repeats for every image
			for (let x = 0; x < document.getElementsByClassName("theseOptions").length; x++) {
				document.getElementsByClassName("theseOptions")[x].onmouseover = function () {
					Dom.inventory.displayInformation(sold[x].item, undefined, "merchantPage");
				};
				document.getElementsByClassName("theseOptions")[x].onmouseleave = function () {
					Dom.expand("information");
				}
			}
			Dom.elements.close.onclick = function () {
				Dom.closePage('merchantPage');
				npc.say(npc.chat.shopLeave, 0, true);
			}
		}
	}
}

Dom.merchant.buy = function (item,index,npc) {
	if (Dom.inventory.check(item.costCurrency,"currency",item.cost) && Dom.inventory.requiredSpace([{item: item.item}])) {
		document.getElementsByClassName("buy")[index].style.backgroundColor = "#bb9933";
		setTimeout(function () {
			document.getElementsByClassName("buy")[index].style.backgroundColor = "var(--bottom)";
		},200);
		Dom.inventory.removeById(item.costCurrency,"currency",item.cost);
		Dom.inventory.give(item.item);
		Dom.chat.insert("You bought a " + item.item.name + ".", 100);
	}else{
		if (!Dom.inventory.check(item.costCurrency,"currency",item.cost)) {
			document.getElementsByClassName("buy")[index].style.border = "5px solid red";
			setTimeout(function () {
				document.getElementsByClassName("buy")[index].style.border = "5px solid var(--border)";
			},200);
			npc.say(npc.chat.tooPoor, 0, true);
		}else{
			npc.say(npc.chat.inventoryFull, 0, true);
			Dom.alert.page("You do not have enough space in your inventory for that item.", 0, undefined, "merchantPage");
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
Dom.identifier.left = function (npc/*, over*/) {
	if (Dom.identifier.displayed !== 0) {
		Dom.identifier.displayed--;
	}else{
		Dom.identifier.displayed = Dom.identifier.unId.length-1;
	}
	Dom.identifier.page(npc/*, over*/);
}

Dom.identifier.right = function (npc/*, over*/) {
	if (Dom.identifier.displayed !== Dom.identifier.unId.length-1) {
		Dom.identifier.displayed++;
	}else{
		Dom.identifier.displayed = 0;
	}
	Dom.identifier.page(npc/*, over*/);
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
	}else{
		return false;
	}
}

Dom.identifier.page = function (npc/*, over*/) {
	if (Dom.changeBook("identifierPage")) {//, true/*false*/, true);
		//Dom.currentlyDisplayed = npc.name;
		//Dom.changeBook("identifierPage", false); // stops close button being red
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

Dom.identifier.identify = function (npc) {
	if (Dom.inventory.check(2,"currency",1)/* && Dom.identifier.unId.length !== 0*/) {
		Dom.inventory.removeById(2,"currency",1);
		Dom.closePage("identifierPage")//, true, true);
		Dom.changeBook("identifiedPage")//, true, true);
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
		}else if (Dom.identifier.unId[Dom.identifier.displayed].rarity === "unique") {
			Dom.elements.identifiedPageChat.innerHTML = npc.chat.identifyUnique;
		}else{
			Dom.elements.identifiedPageChat.innerHTML = npc.chat.identifyMythic;
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
	}else/* if (Dom.identifier.unId.length !== 0)*/{
 		Dom.elements.identifierPageBuy.style.border = "5px solid red";
		setTimeout(function () {
			Dom.elements.identifierPageBuy.style.border = "5px solid var(--border)";
		},200);
		npc.say(npc.chat.tooPoor, 0, true);
	}
}

Dom.inventory.give = function (item, num, position, noSave) {
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
						added = true;
						position = i;
						Player.inventory.items[i] = Object.assign({},item);
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
						if (item.set !== undefined && !User.archaeology.includes(Items.set[item.set].name)) {
							let obtained = true;
							for (let x = 0; x < Items.set[item.set].armour.length; x++) {
								if (!Dom.inventory.find(-1, -1, undefined, undefined, Items.set[item.set].armour[x])) {
									obtained = false;
								}
							}
							if (obtained) {
								User.archaeology.push(Items.set[item.set].name);
							}
						}
						Dom.inventory.prepare(Player.inventory.items, i, Dom.elements.itemInventory.getElementsByTagName("td")[i]);

						// if a bag is being given to the bag slot
						if (i === 5 && item.type === "bag") {
							for (let x = 0; x < Math.floor(item.size/6); x++) {
								let str = "<tr>";
								for (let inv = Player.inventory.items.length; inv < Player.inventory.items.length+6; inv++) {
									str += '<td ondrop="Dom.inventory.drop(event, Player.inventory.items, '+inv+');Game.inventoryUpdate(event)" ondragover="Dom.inventory.allowDrop(event)" onmouseover="Dom.inventory.displayInformation(Player.inventory.items['+inv+'], undefined, \'inventoryPage\')" onmouseleave="Dom.expand(\'information\')" ondrag="Dom.expand(\'information\')" onclick="Game.inventoryUpdate()"></td>';
								}
								Dom.elements.itemInventory.innerHTML += str+"</tr>";
								Player.inventory.items.push({},{},{},{},{},{});
							}
							Dom.inventory.update();
						}
						if ((item.type === "helm" || item.type === "chest" || item.type === "greaves" || item.type === "boots" || item.type === "sword" || item.type === "staff" || item.type === "bow") && !User.archaeology.includes(item.name) && item.name !== undefined) {
							User.archaeology.push(item.name);
						}
						if (item.images !== undefined) {
                            // item has image(s) that should be loaded with it
                            let names = Object.keys(item.images);
                            let addresses = Object.values(item.images);
                            for (let x = 0; x < names.length; x++) {
                                Loader.loadImage(names[i], addresses[i], false);
                                // tbd - this is inefficient since it never deletes the image
                                // but it should delete the image when the item is no longer in inventory
                            }
                        }
						break; // stops the item being placed in multiple slots
					}
				}
			}
		}
	// specific position
	}else{
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
		if (item.set !== undefined && !User.archaeology.includes(Items.set[item.set].name)) {
			let obtained = true;
			for (let x = 0; x < Items.set[item.set].armour.length; x++) {
				if (!Dom.inventory.find(-1, -1, undefined, undefined, Items.set[item.set].armour[x])) {
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
		if (position === 5 && item.type === "bag") {
			for (let x = 0; x < Math.floor(item.size/6); x++) {
				let str = "<tr>";
				for (let inv = Player.inventory.items.length; inv < Player.inventory.items.length+6; inv++) {
					str += '<td ondrop="Dom.inventory.drop(event, Player.inventory.items, '+inv+');Game.inventoryUpdate(event)" ondragover="Dom.inventory.allowDrop(event)" onmouseover="Dom.inventory.displayInformation(Player.inventory.items['+inv+'], undefined, \'inventoryPage\')" onmouseleave="Dom.expand(\'information\')" ondrag="Dom.expand(\'information\')" onclick="Game.inventoryUpdate()"></td>';
				}
				Dom.elements.itemInventory.innerHTML += str+"</tr>";
				Player.inventory.items.push({},{},{},{},{},{});
			}
			Dom.inventory.update();
		}
		if ((item.type === "helm" || item.type === "chest" || item.type === "greaves" || item.type === "boots" || item.type === "sword" || item.type === "staff" || item.type === "bow") && !User.archaeology.includes(item.name) && item.name !== undefined) {
			User.archaeology.push(item.name);
		}
	}
	if (item.name === "Fishing Seal") {
		User.progress.seals = Increment(User.progress.seals, num);
	}
	Dom.hotbar.update();
	Dom.checkProgress();
	if (typeof Game !== "undefined" && Game.hero !== undefined && !noSave) {
		Game.saveProgress("auto");
	}
	if (added) {
		return position;
	}else{
		return false;
	}
}

/*if (localStorage.getItem("archaeology") !== null) {
	User.archaeology = JSON.parse(localStorage.getItem("archaeology"));
}else{
	User.archaeology = [];
}
if (localStorage.getItem("fish") !== null) {
	User.fish = JSON.parse(localStorage.getItem("fish"));
}else{
	User.fish = [];
	for (let i = 0; i < Items.fish.length; i++) {
		User.fish.push(0);
	}
}
if (localStorage.getItem("achievements") !== null) {
	User.achievements = JSON.parse(localStorage.getItem("achievements"));
}else{
	User.achievements = {};
}*/

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

Dom.inventory.cooldown = function (inventoryPosition, hotbar, check) {
	let item = Player.inventory.items;
	if (isNaN(inventoryPosition)) {
		item = Player.inventory;
	}

	if (Dom.bank.active) {
		Dom.bank.inOut("in", inventoryPosition);
	}
	else if (item[inventoryPosition].cooldown !== undefined) {
		if (item[inventoryPosition].cooldownStart === undefined || parseInt(item[inventoryPosition].cooldownStart) + item[inventoryPosition].cooldown <= parseInt(GetFullDateTime())) {
			//item[inventoryPosition].cooldownStart = GetFullDateTime();
			if (!check) {
				for (let i = 0; i < Player.inventory.items.length; i++) {
					if (Player.inventory.items[i].type === item[inventoryPosition].type && Player.inventory.items[i].id === item[inventoryPosition].id) {
						Player.inventory.items[i].cooldownStart = GetFullDateTime();
					}
				}
				if ((item[inventoryPosition].onClickEventRequirement === undefined || item[inventoryPosition].onClickEventRequirement === Event.event) && (item[inventoryPosition].onClickAreaRequirement === undefined || item[inventoryPosition].onClickAreaRequirement.includes(Game.areaName))) {
					if (item[inventoryPosition].onClickFunction !== undefined) {
						item[inventoryPosition].onClickFunction(inventoryPosition, hotbar);
					}
				}
			}
			else {
				return true;
			}
		}
		else {
			Dom.chat.insert("This item is on cooldown. You can use it in " + CalculateTime(GetFullDateTime(), (parseInt(item[inventoryPosition].cooldownStart) + item[inventoryPosition].cooldown).toString()));
		}
	}
	else {
		if (!check) {
			if ((item[inventoryPosition].onClickEventRequirement === undefined || item[inventoryPosition].onClickEventRequirement === Event.event) && (item[inventoryPosition].onClickAreaRequirement === undefined || item[inventoryPosition].onClickAreaRequirement.includes(Game.areaName))) {
				if (item[inventoryPosition].onClickFunction !== undefined) {
					item[inventoryPosition].onClickFunction(inventoryPosition, hotbar);
				}
			}
		}else{
			return true;
		}
	}
}

Dom.inventory.chooseStats = function (inventoryPosition) {
	// item inventory
	if (!isNaN(inventoryPosition)) {
		// not currently used because ocean set is equipped onClick
		let values = "";
		let str = Player.inventory.items[inventoryPosition].chooseStats;

		// if there is at least 1 option
		if (Object.keys(str).length > 0) {
			Dom.alert.ev = [];
			// repeats for each chooseStat
			for (let i = 0; i < Object.keys(str).length; i++) {
				if (Object.keys(str)[i] === Player.inventory.items[inventoryPosition].chosenStat) {
					values += "<strong><span onclick='Dom.alert.target(Dom.alert.ev, "+i+")'>"+Dom.inventory.stats(FromCamelCase(Object.keys(str)[i]), str[Object.keys(str)[i]], str) + "</span></strong>";
				}else{
					values += "<span onclick='Dom.alert.target(Dom.alert.ev, "+i+")'>"+Dom.inventory.stats(FromCamelCase(Object.keys(str)[i]), str[Object.keys(str)[i]], str) + "</span>";
				}
				Dom.alert.ev.push([Object.keys(str)[i], str[Object.keys(str)[i]]]);
			}
			Dom.alert.target = function (ev, num) {
				Dom.elements.alert.hidden = true;
				if (Player.inventory.items[inventoryPosition].chosenStat !== undefined) {
					delete Player.inventory.items[inventoryPosition].stats[Player.inventory.items[inventoryPosition].chosenStat];
				}
				Player.inventory.items[inventoryPosition].chosenStat = ev[num][0];
				Player.inventory.items[inventoryPosition].stats[ev[num][0]] = ev[num][1];
			}
			Dom.alert.page("Choose an effect:", "text", values, "inventoryPage");
			return true;
		}
	// equipped
	}else{
		let values = "";
		let str = Player.inventory[inventoryPosition].chooseStats;

		// if there is at least 1 option
		if (Object.keys(str).length > 0) {
			Dom.alert.ev = [];
			// repeats for each chosenStat
			for (let i = 0; i < Object.keys(str).length; i++) {
				if (Object.keys(str)[i] === Player.inventory[inventoryPosition].chosenStat) {
					values += "<strong><span onclick='Dom.alert.target(Dom.alert.ev, "+i+")'>"+Dom.inventory.stats(FromCamelCase(Object.keys(str)[i]), str[Object.keys(str)[i]], str) + "</span></strong>";
				}else{
					values += "<span onclick='Dom.alert.target(Dom.alert.ev, "+i+")'>"+Dom.inventory.stats(FromCamelCase(Object.keys(str)[i]), str[Object.keys(str)[i]], str) + "</span>";
				}
				Dom.alert.ev.push([Object.keys(str)[i], str[Object.keys(str)[i]]]);
			}
			Dom.alert.target = function (ev, num) {
				Dom.elements.alert.hidden = true;
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
			}
			Dom.alert.page("Choose an effect:", "text", values, "inventoryPage");
			return true;
		}
	}
}

Dom.inventory.constructUnId = function (area,tier) {
	let tempUnId = new UnId(area,tier);
	Dom.inventory.give(tempUnId);
}

function UnId(area,tier) {
	this.area = area;
	this.tier = tier;
	let types = ["helm", "chest", "greaves", "boots", "sword", "staff", "bow"];
	this.typeNum = Random(0, 4);
	if (this.typeNum === 4) {
		if (Player.class === "m") {
			this.typeNum++;
		}else if (Player.class === "a") {
			this.typeNum += 2;
		}
	}
	this.type = types[this.typeNum];
	this.image = "assets/items/"+this.type+"/unidentified.png";
	this.rarityNum = Random(0, 25-1);
	if (this.rarityNum < 18) {
	this.rarity = "common";
	}else if (this.rarityNum < 24) {
		this.rarity = "unique";
	}else{
		this.rarity = "mythic";
	}
	this.unidentified = true;
	this.sellPrice = 1;
}

// start a cutscene for a certain period of time
// a cutscene stops any other NPCs from being spoken to
Dom.cutscene = function (duration) {
    Dom.currentlyDisplayed = "cutscene";
    setTimeout(function () {
        Dom.currentlyDisplayed = "";
    }, duration);
}

Dom.inventory.dispose = function (ev) {
	if (Dom.inventory.fromId !== undefined && ev.target.id !== "helm" && ev.target.id !== "chest" && ev.target.id !== "greaves" && ev.target.id !== "boots" && ev.target.id !== "weapon" && !ev.target.classList.contains("stackNum")) {

		let quest = false;
		if (Dom.inventory.fromArray[Dom.inventory.fromId].quest !== undefined && (Dom.inventory.fromArray[Dom.inventory.fromId].quest === true || Dom.inventory.fromArray[Dom.inventory.fromId].quest())) {
			// if it is a quest item
			quest = true;
		}

		let remove = true;
		for (let i = 6; i < Dom.inventory.fromArray.length; i++) {
			if (Dom.inventory.fromArray[i].image !== undefined) {
				// if it is safe to dispose of the bag
				remove = false;
				break;
			}
		}

		ev.preventDefault(); // allows the item to drop
		if (ev.target.id !== "" && (remove || ((Dom.inventory.fromId !== 5 || Dom.inventory.fromArray !== Player.inventory.items) && (Dom.inventory.fromId > 5 || Dom.inventory.fromArray !== Player.bank.items))) && !quest) {
			Dom.alert.target = function (ev, all) {
				
				// item inventory or bank
				if (Dom.inventory.fromArray !== Player.inventory) {

					// if you dispose of the INVENTORY bag then reset the inventory
					if (Dom.inventory.fromId === 5 && Dom.inventory.fromArray === Player.inventory.items && Player.inventory.items[5].type === "bag") {
						let str = "<tr>";
						for (let inv = 0; inv < 6; inv++) {
							str += '<td ondrop="Dom.inventory.drop(event, Player.inventory.items, '+inv+');Game.inventoryUpdate(event)" ondragover="Dom.inventory.allowDrop(event)" onmouseover="Dom.inventory.displayInformation(Player.inventory.items['+inv+'], undefined, \'inventoryPage\')" onmouseleave="Dom.expand(\'information\')" ondrag="Dom.expand(\'information\')" onclick="Game.inventoryUpdate()"></td>';
						}
						Dom.elements.itemInventory.innerHTML = str+"</tr>";
						Dom.elements.itemInventory.getElementsByTagName("td")[5].style.backgroundImage = "url('assets/items/bag/1.png')";
						for (let x = 0; x < 6; x++) {
							if (Player.inventory.items[x].image !== undefined) {
								Dom.elements.itemInventory.getElementsByTagName("td")[x].innerHTML = '<img src="'+Player.inventory.items[x].image+'" draggable="true" ondragstart="Dom.inventory.drag(event, Player.inventory.items, '+x+')"></img>';
								if (Player.inventory.items[x].stacked !== undefined && Player.inventory.items[x].stacked !== 1) {
									Dom.elements.itemInventory.getElementsByTagName("td")[x].innerHTML += "<div class='stackNum' id='stackNum"+x+"'>"+Player.inventory.items[x].stacked+"</div>";
								}
							}
						}
						Player.inventory.items.splice(6);
						Dom.inventory.update();
					}
					
					// if you dispose of a BANK bag then reset the bank
					if (Dom.inventory.fromId <= 5 && Dom.inventory.fromArray === Player.bank.items) {
						Player.bank.items.splice(Player.bank.items.length - Player.bank.items[Dom.inventory.fromId].size);
						Dom.bank.page();
						Dom.elements.bankPageInventory.getElementsByTagName("td")[Dom.inventory.fromId].style.backgroundImage = "url('assets/items/bag/1.png')";
					}

					Dom.inventory.remove(Dom.inventory.fromId, all, Dom.inventory.fromArray); /// TBD possible for other arrays
				}
				// equipment slots
				else {
					Dom.inventory.removeEquipment(Dom.inventory.fromArray[Dom.inventory.fromId]);
					Dom.inventory.fromArray[Dom.inventory.fromId] = {};
					Dom.inventory.fromElement.innerHTML = "";
				}
				Game.inventoryUpdate();
			};
			//Dom.alert.ev = Object.assign({}, Dom.inventory.fromId);
			if (Dom.inventory.fromArray[Dom.inventory.fromId].stacked > 1) {
				Dom.alert.page("How many would you like to drop?", 3, undefined, "inventoryPage");
			}else{
				Dom.alert.page("Are you sure you want to drop this item? It will be lost forever!", 2, undefined, "inventoryPage");
			}
		}else if (ev.target.id !== "") {
			if (!quest) {
				Dom.alert.page("Move some items to the bank, sell or dispose of them before you can do that.", 0, undefined, "inventoryPage");
			}else{
				Dom.alert.page("You cannot dispose of this item because you need it for a quest.", 0, undefined, "inventoryPage");
			}
		}
	}
}

Dom.inventory.removeById = function (ID, type, num, array) {

	let equip = false;
	if (array === undefined) {
		array = Player.inventory.items;
		equip = true;
	}

	let remove = false;
	for (let i = 0; i < array.length; i++) {
		if (array[i].type === type && array[i].id === ID) {
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
			if (Player.inventory[Object.keys(Player.inventory)[i]].type === type && Player.inventory[Object.keys(Player.inventory)[i]].id === ID) {
				let equipment = ["helm","chest","greaves","boots","weapon"]
				Dom.inventory.removeEquipment(Player.inventory[equipment[i]]);
				Player.inventory[equipment[i]] = {};
				document.getElementById(equipment[i]).innerHTML = "";
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
	}else{
		return false;
	}
}

Dom.inventory.remove = function (num, all, array) { // array is optional

	if (array === undefined) {
		array = Player.inventory.items;
	}
	
	let element = "itemInventory";
	if (array === Player.bank.items) {
		element = "bankPageInventory";
	}

	// repeats once unless all is a number
	for (let i = 0; i < (isNaN(all) ? 1 : all); i++) {
		// remove item completely
		if (array[num].stacked === 1 || array[num].stacked === undefined || all === true) {
			// because they are unset
			let id = array[num].id;
			let type = array[num].type;
			document.getElementById(element).getElementsByTagName("td")[num].innerHTML = "";
			array[num] = {};
			// if more items still need to be removed
			if (!isNaN(all) && all - i !== 1) {
				// check for more of the same items and remove them
				Dom.inventory.removeById(id, type, all-i-1, array);
			}
		// decrease stack size
		}else{
			array[num].stacked--;
			if (array[num].stacked !== 1) {
				document.getElementById("stackNum"+num).innerHTML = array[num].stacked;
			}
			else{
				document.getElementById("stackNum"+num).hidden = true;
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
		let scroll = document.getElementsByClassName("DOM")[i].scrollTop;
		if (!event.target.draggable && event.target.className !== "stackNum" && event.target.autocomplete === undefined) { // === document.getElementsByClassName("DOM")[i]) {
			Dom.canvas.dragPageX = event.clientX-document.getElementsByClassName("DOM")[i].offsetLeft;
			Dom.canvas.dragPageY = event.clientY-document.getElementsByClassName("DOM")[i].offsetTop;
			Dom.canvas.stopMove = false;
			for (let x = 0; x < document.getElementsByClassName("DOM").length; x++) {
				if (parseInt(document.getElementsByClassName("DOM")[x].style.zIndex) >= parseInt(document.getElementsByClassName("DOM")[i].style.zIndex)) {
					document.getElementsByClassName("DOM")[x].style.zIndex--;
				}
			}
			document.getElementsByClassName("DOM")[i].style.zIndex = 6+document.getElementsByClassName("DOM").length-1;
			Dom.canvas.moveDom(document.getElementsByClassName("DOM")[i], document.getElementsByClassName("DOM")[i].id, scroll);
		}
	}
}

Dom.canvas.moveDom = function (object, page, scroll) {
	if (object.scrollTop === scroll) {
		object.style.left = window.mouseX - Dom.canvas.dragPageX + "px";
		object.style.top = window.mouseY - Dom.canvas.dragPageY + "px";

		// All NPC DOMs have the same position
		if (page !== "chatPage" && page !== "inventoryPage" && page !== "questsPage" && page !== "adventurePage" && page !== "reputationPage" && page !== "settingsPage" && page !== "settingsTwoPage") {
			Dom.canvas.npcLeft = object.style.left;
			Dom.canvas.npcTop = object.style.top;
		}

		if (!Dom.canvas.stopMove) {
			setTimeout(function () {
				Dom.canvas.moveDom(object, page, scroll);
			},1);
		}else{
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

Dom.bank.bagCases = function () {
	// slot backgrounds
	if (Dom.inventory.fromArray === Player.bank.items && Dom.inventory.fromId < 6 && Dom.inventory.fromArray[Dom.inventory.fromId].image === undefined) {
		Dom.elements.bankPageInventory.getElementsByTagName("td")[Dom.inventory.fromId].style.backgroundImage = "url('./assets/items/bag/1.png')";
	}
	if (Dom.inventory.toArray === Player.bank.items && Dom.inventory.toId < 6) {
		Dom.elements.bankPageInventory.getElementsByTagName("td")[Dom.inventory.toId].style.backgroundImage = "none";
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

Dom.inventory.bagCases = function () {
	// slot backgrounds
	if (Dom.inventory.fromArray === Player.inventory.items && Dom.inventory.fromId === 5 && Dom.inventory.fromArray[Dom.inventory.fromId].image === undefined) {
		Dom.elements.itemInventory.getElementsByTagName("td")[5].style.backgroundImage = "url('./assets/items/bag/1.png')";
	}
	if (Dom.inventory.toArray === Player.inventory.items && Dom.inventory.toId === 5) {
		Dom.elements.itemInventory.getElementsByTagName("td")[5].style.backgroundImage = "none";
	}
	
	let changed = true;
	// going from the bag slot from a bag
	if (this.fromArray === Player.inventory.items && this.fromId === 5 && this.toArray[this.toId].type === "bag") {
		Dom.inventory.bagSwaps(this.fromArray[this.fromId], this.toArray[this.toId], Player.inventory.items);
	}
	// going to the bag slot to a bag
	else if (this.toArray === Player.inventory.items && this.toId === 5 && this.fromArray[this.fromId].type === "bag") {
		Dom.inventory.bagSwaps(this.toArray[this.toId], this.fromArray[this.fromId], Player.inventory.items);
	}
	// going to the bag slot from a bag and not swapping
	else if (this.toArray === Player.inventory.items && this.toId === 5 && this.toArray[this.toId].type === "bag") {
		for (let y = 0; y < this.toArray[this.toId].size; y++) {
			Player.inventory.items.push({});
		}
	}
	// going from the bag slot to a bag and not swapping
	else if (this.fromArray === Player.inventory.items && this.fromId === 5 && this.fromArray[this.fromId].type === "bag") {
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
		if (Player.inventory.items[5].image === undefined) {
			Dom.elements.itemInventory.getElementsByTagName("td")[5].style.backgroundImage = "url('assets/items/bag/1.png')";
		}
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
		if (Dom.inventory.toArray === Player.inventory.items && Dom.inventory.toId === 5 && Dom.inventory.toArray[Dom.inventory.toId].type === "bag" && Dom.inventory.fromArray[Dom.inventory.fromId].type === "bag") {
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
		else if (Dom.inventory.fromArray === Player.inventory.items && Dom.inventory.fromId === 5 && Dom.inventory.fromArray[Dom.inventory.fromId].type === "bag" && Dom.inventory.toArray[Dom.inventory.toId].type === "bag") {
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
		else{
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
		Dom.inventory.fromArray[Dom.inventory.fromId] = {};
		Dom.inventory.fromElement.innerHTML = "";
		return false;
	}

	// invalid drag to equip slot
	if (Dom.inventory.toArray.weapon !== undefined) {
		if (!((Dom.inventory.toId === Dom.inventory.fromArray[Dom.inventory.fromId].type || ((Dom.inventory.fromArray[Dom.inventory.fromId].allClasses === true ||
		(Dom.inventory.fromArray[Dom.inventory.fromId].type === "sword" && Player.class === "k") || (Dom.inventory.fromArray[Dom.inventory.fromId].type === "staff" && Player.class === "m") || (Dom.inventory.fromArray[Dom.inventory.fromId].type === "bow" && Player.class === "a") || Dom.inventory.fromArray[Dom.inventory.fromId].type === "rod") && Dom.inventory.toId === "weapon")) && !Dom.inventory.fromArray[Dom.inventory.fromId].unidentified)) {
			return false;
		}
	}
	// invalid drag from equip slot
	if (Dom.inventory.fromArray.weapon !== undefined) {
		if (!((Dom.inventory.fromId === Dom.inventory.toArray[Dom.inventory.toId].type || ((Dom.inventory.toArray[Dom.inventory.toId].allClasses === true ||
		(Dom.inventory.toArray[Dom.inventory.toId].type === "sword" && Player.class === "k") || (Dom.inventory.toArray[Dom.inventory.toId].type === "staff" && Player.class === "m") || (Dom.inventory.toArray[Dom.inventory.toId].type === "bow" && Player.class === "a") || Dom.inventory.toArray[Dom.inventory.toId].type === "rod") && Dom.inventory.fromId === "weapon")) && !Dom.inventory.toArray[Dom.inventory.toId].unidentified)
		&& Dom.inventory.toArray[Dom.inventory.toId].image !== undefined) { // checking if it exists
			return false;
		}
	}

	// inventory bag slot
	if ((Dom.inventory.toArray === Player.inventory.items && Dom.inventory.toId === 5) || (Dom.inventory.fromArray === Player.inventory.items && Dom.inventory.fromId === 5)) {
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

Dom.inventory.drop = function (toElement, toArray, toId, fromElement, fromArray, fromId) { // from is not required for drag-n-drop cases

	Dom.elements.alert.hidden = true;

	if (fromId !== undefined) {
		Dom.inventory.fromElement = fromElement;
		Dom.inventory.fromArray = fromArray;
		Dom.inventory.fromId = fromId;
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
		// swap the code for the items
		let temp = this.toArray[this.toId];
		this.toArray[this.toId] = this.fromArray[this.fromId];
		this.fromArray[this.fromId] = temp;

		// generate the elements for the items
		if (this.toElement.innerHTML !== "") {
			this.fromElement.innerHTML = "<img src='"+this.fromArray[this.fromId].image+"' draggable='true' ></img>";
			if (this.fromArray[this.fromId].stacked > 1) {
				this.fromElement.innerHTML += "<div class='stackNum' id='stackNum"+this.fromId+"'>"+this.fromArray[this.fromId].stacked+"</div>";
			}
			this.setItemFunctions(this.fromElement.getElementsByTagName("img")[0], this.fromArray, this.fromId);
		}else{
			this.fromElement.innerHTML = "";
		}
		this.toElement.innerHTML = "<img src='"+this.toArray[this.toId].image+"' draggable='true' ></img>";
		if (this.toArray[this.toId].stacked > 1) {
			this.toElement.innerHTML += "<div class='stackNum' id='stackNum"+this.toId+"'>"+this.toArray[this.toId].stacked+"</div>";
		}
		this.setItemFunctions(this.toElement.getElementsByTagName("img")[0], this.toArray, this.toId);

		// update stats
		if (Dom.inventory.fromArray === Player.inventory) {
			Dom.inventory.removeEquipment(Dom.inventory.toArray[Dom.inventory.toId]);
			if (Dom.inventory.fromArray[Dom.inventory.fromId].image !== undefined) {
				Dom.inventory.addEquipment(Dom.inventory.fromArray[Dom.inventory.fromId]);
			}
		}
		else if (Dom.inventory.toArray === Player.inventory) {
			if (Dom.inventory.fromArray[Dom.inventory.fromId].image !== undefined) {
				Dom.inventory.removeEquipment(Dom.inventory.fromArray[Dom.inventory.fromId]);
			}
			Dom.inventory.addEquipment(Dom.inventory.toArray[Dom.inventory.toId]);
		}

		// inventory bag cases
		if ((Dom.inventory.toArray === Player.inventory.items && Dom.inventory.toId === 5) || (Dom.inventory.fromArray === Player.inventory.items && Dom.inventory.fromId === 5)) {
			Dom.inventory.bagCases();
		}

		// bank bag cases
		if ((Dom.inventory.toArray === Player.bank.items && Dom.inventory.toId < 6) || (Dom.inventory.fromArray === Player.bank.items && Dom.inventory.fromId < 6)) {
			Dom.bank.bagCases();
		}

		// reset variables for new drag incase next drag has none
		//Dom.inventory.fromElement = undefined;
		//Dom.inventory.fromArray = undefined;
		//Dom.inventory.fromId = undefined;
	}
	Game.inventoryUpdate();
	Dom.hotbar.update();
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
	else {
		element.onclick = function () {
			Dom.bank.inOut("out", id);
		}
	}
}

Dom.inventory.removeEquipment = function (array) {
	// draw slot background
	let element = "weapon";
	let type = "sword";
	if (array.type !== "rod" && array.type !== "sword" && array.type !== "staff" && array.type !== "bow") {
		element = array.type;
		type = array.type;
	}
	document.getElementById(element).style.backgroundImage = "url('assets/items/"+type+"/1.png')";
	
	Dom.inventory.beforeChangedStats();
	if (array.stats !== undefined) {
		for (let i = 0; i < Object.keys(array.stats).length; i++) {

			if (array.stats[Object.keys(array.stats)[i]] !== true) {
				Player.stats[Object.keys(array.stats)[i]] -= array.stats[Object.keys(array.stats)[i]];
			}else{
				Player.stats[Object.keys(array.stats)[i]] = false;
			}
		}
	}
	if (array.set !== undefined) {
		Dom.inventory.noSet = false;
		for (let i = 0; i < Items.set[array.set].armour.length; i++) {
			if (Player.inventory.helm.name !== Items.set[array.set].armour[i] && Player.inventory.chest.name !== Items.set[array.set].armour[i] && Player.inventory.greaves.name !== Items.set[array.set].armour[i] && Player.inventory.boots.name !== Items.set[array.set].armour[i]
			&& array.name !== Items.set[array.set].armour[i] && array.name !== Items.set[array.set].armour[i] && array.name !== Items.set[array.set].armour[i] && array.name !== Items.set[array.set].armour[i]) {
				// if the set bonus is NOT active
				Dom.inventory.noSet = true;
			}
		}
		if (!Dom.inventory.noSet) {
			for (let i = 0; i < Object.keys(Items.set[array.set].stats).length; i++) {

				if (Items.set[array.set].stats[Object.keys(Items.set[array.set].stats)[i]] !== true) {
					Player.stats[Object.keys(Items.set[array.set].stats)[i]] -= Items.set[array.set].stats[Object.keys(Items.set[array.set].stats)[i]];
				}else{
					Player.stats[Object.keys(Items.set[array.set].stats)[i]] = false;
				}
			}
			if (Items.set[array.set].multiplier !== undefined) {
				for (let x = 0; x < Items.set[array.set].multiplier.length; x++) {
					// repeats for each slot that the multiplier applies to (e.g. helm, chest...)
					for (let i = 0; i < Items.set[array.set].multiplier[x].slots.length; i++) {
						// adds the multiplied stat for each intended slot to the player stats
						Player.stats[Player.inventory[Items.set[array.set].multiplier[x].slots[i]][Items.set[array.set].multiplier[x].stat]] -= (Items.set[array.set].multiplier[x].multiplier-1) * Player.inventory[Items.set[array.set].multiplier[x].slots[i]].stats[Player.inventory[Items.set[array.set].multiplier[x].slots[i]][Items.set[array.set].multiplier[x].stat]];
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
							}else{
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
		Game.hero.trail = undefined;
		clearInterval(Game.hero.trailInterval);
	}
	Dom.inventory.afterChangedStats();
}

Dom.inventory.addEquipment = function (array) {
	// remove slot background
	let element = "weapon";
	if (array.type !== "rod" && array.type !== "sword" && array.type !== "staff" && array.type !== "bow") {
		element = array.type;
	}
	document.getElementById(element).style.backgroundImage = "none";
	
	Dom.inventory.beforeChangedStats();
	if (array.stats !== undefined) {
		for (let i = 0; i < Object.keys(array.stats).length; i++) {

			if (array.stats[Object.keys(array.stats)[i]] !== true) {
				Player.stats[Object.keys(array.stats)[i]] += array.stats[Object.keys(array.stats)[i]];
			}else{
				Player.stats[Object.keys(array.stats)[i]] = true;
			}
		}
	}
	if (array.set !== undefined) {
		Dom.inventory.noSet = false;
		for (let i = 0; i < Items.set[array.set].armour.length; i++) {
			if (Player.inventory.helm.name !== Items.set[array.set].armour[i] && Player.inventory.chest.name !== Items.set[array.set].armour[i] && Player.inventory.greaves.name !== Items.set[array.set].armour[i] && Player.inventory.boots.name !== Items.set[array.set].armour[i]) {
				// if the set bonus is NOT active
				Dom.inventory.noSet = true;
			}
		}
		if (!Dom.inventory.noSet) {
			for (let i = 0; i < Object.keys(Items.set[array.set].stats).length; i++) {

				if (Items.set[array.set].stats[Object.keys(Items.set[array.set].stats)[i]] !== true) {
					Player.stats[Object.keys(Items.set[array.set].stats)[i]] += Items.set[array.set].stats[Object.keys(Items.set[array.set].stats)[i]];
				}else{
					Player.stats[Object.keys(Items.set[array.set].stats)[i]] = true;
				}
			}
			if (Items.set[array.set].multiplier !== undefined) {
				for (let x = 0; x < Items.set[array.set].multiplier.length; x++) {
					// repeats for each slot that the multiplier applies to (e.g. helm, chest...)
					for (let i = 0; i < Items.set[array.set].multiplier[x].slots.length; i++) {
						// adds the multiplied stat for each intended slot to the player stats
						Player.stats[Player.inventory[Items.set[array.set].multiplier[x].slots[i]][Items.set[array.set].multiplier[x].stat]] += (Items.set[array.set].multiplier[x].multiplier-1) * Player.inventory[Items.set[array.set].multiplier[x].slots[i]].stats[Player.inventory[Items.set[array.set].multiplier[x].slots[i]][Items.set[array.set].multiplier[x].stat]];
					}
				}
			}
		}
	}
	if (array.conditionalStats !== undefined) {
		Player.conditionalStats.push({type: array.type, id: array.id, active: [],});
		Dom.inventory.conditionalStats();
	}
	/*if (array.conditionalChooseStats !== undefined) {
		Player.conditionalChooseStats.push({type: array.type, id: array.id, active: [],});
		Dom.inventory.conditionalStats();
	}*/
	if (array.trail !== undefined) {
		Game.hero.trail = array.trail;
		Game.hero.trailInterval = setInterval(Game.addTrailParticle, 100, Game.hero, Game.hero.trail);
	}
	Dom.inventory.afterChangedStats();
}

Dom.inventory.find = function (ID, type, notEquipped, calledByCheck, name, array) {
	if (array === undefined) {
		array = Player.inventory.items;
	}
	else {
		notEquipped = true;
	}
	let index = [];
	let completed = 0;
	for (let i = 0; i < array.length; i++) {
		if ((array[i].type === type && array[i].id === ID) || (array[i].name === name && name !== undefined)) {
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
		}else if ((Player.inventory.helm.type === type && Player.inventory.helm.id === ID) || (Player.inventory.helm.name === name && name !== undefined)) {
			index.push("helm");
			completed++;
		}else if ((Player.inventory.chest.type === type && Player.inventory.chest.id === ID) || (Player.inventory.chest.name === name && name !== undefined)) {
			index.push("chest");
			completed++;
		}else if ((Player.inventory.greaves.type === type && Player.inventory.greaves.id === ID) || (Player.inventory.greaves.name === name && name !== undefined)) {
			index.push("greaves");
			completed++;
		}else if ((Player.inventory.boots.type === type && Player.inventory.boots.id === ID) || (Player.inventory.boots.name === name && name !== undefined)) {
			index.push("boots");
			completed++;
		}
	}
	if (calledByCheck) {
		return completed;
	}
	else{
		return index;
	}
}

// returns true or false depending on if an item (specified by id and type) is in player's inventory or not
// num checks for a certain number of them (defaults to 1)
// notEquipped means it must not be equipped (defaults to false)
Dom.inventory.check = function (ID, type, num, notEquipped, array) {
	let completed = Dom.inventory.find(ID, type, notEquipped, true, array);
	if (num !== undefined) {
		if (completed >= num) {
			completed = true;
		}else{
			completed = false;
		}
	}
	return(completed);
}

if (Player.class === "a") {
	Dom.elements.weapon.style.backgroundImage = "url('./assets/items/bow/1.png')";
}else if (Player.class === "m") {
	Dom.elements.weapon.style.backgroundImage = "url('./assets/items/staff/1.png')";
}else{
	Dom.elements.weapon.style.backgroundImage = "url('./assets/items/sword/1.png')";
}

Dom.elements.inventoryGoldXP.style.backgroundImage = 'url("./selection/assets/'+Player.class+Player.skin+'/f.png")';
Dom.elements.inventoryGoldXP.style.right = 20 - Skins[Player.class][Player.skin].headAdjust.x + "px";
Dom.elements.inventoryGoldXP.style.height = 60 + Skins[Player.class][Player.skin].headAdjust.y + "px";
Dom.elements.inventoryGoldXP.style.bottom = 3 + Skins[Player.class][Player.skin].headAdjust.y + "px";

Dom.elements.alertYes.onclick = function () {
	// close alert and call function with parameter
	Dom.alert.target(Dom.alert.ev);
	Dom.elements.alert.hidden = true;
}

Dom.elements.alertNo.onclick = function () {
	// close alert only - and potentially call a function
	if (Dom.alert.targetNo !== undefined) {
		Dom.alert.targetNo(Dom.alert.evNo);
	}
	Dom.elements.alert.hidden = true;
}

Dom.elements.alertDispose.onclick = function () {
	// close alert and call function with parameter and (true)
	Dom.alert.target(Dom.alert.ev, true);
	Dom.elements.alert.hidden = true;
}

Dom.elements.hotbar.onmouseover = function () {
	Dom.elements.hotbar.style.opacity = 1;
}

Dom.elements.hotbar.onmouseleave = function () {
	Dom.elements.hotbar.style.opacity = "var(--opacity)";
}

Dom.settings.acceptOn = function () {
	// accept localStorage for progress saving
	localStorage.setItem("accept","true");
	// hide option for progress saving in settings and add save button
	Dom.elements.settingAcceptHolder.innerHTML = "";
	Dom.elements.settingLogout.innerHTML = "<div id='settingControls' onclick='Dom.settings.page(\"settingsTwoPage\")'>Controls</div><br><br>You are logged in as "+Player.name+"<div id='settingSave' onclick='Game.saveProgress()'>Save</div><div id='settingLogoutInner' onclick='Game.saveProgress(\"logout\")'>Logout</div><div id='settingDelete'>Delete</div>";
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
		if ((items[i].condition === undefined || items[i].condition()) && (items[i].chance === undefined || includeChance)) {
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
	}else{
		Dom.elements.hotbar.hidden = false;
	}
}

Dom.loot.page = function (name, items) {
	if (Dom.changeBook("lootPage")) {//, true/*false*/, true);
		//Dom.currentlyDisplayed = name;
		Dom.loot.looted = items;
		Dom.elements.lootingPageTitle.innerHTML = name;
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
						Dom.elements.loot.getElementsByTagName("td")[i].innerHTML = "<img src=" + items[i].item.image + " class='lootOptions'><div class='lootStackNum'>"+items[i].quantity+"</div></img>";
					}else{
						Dom.elements.loot.getElementsByTagName("td")[i].innerHTML = "<img src=" + items[i].item.image + " class='lootOptions'><span class='lootStackNum'></span></img>";
					}
				}
			}
			// repeats for each piece of loot
			let num = -1;
			for (let i = 0; i < items.length; i++) {
				if (items[i] !== undefined && items[i] !== null) {
					num++;
					items[i].num = num;
					document.getElementsByClassName("lootOptions")[num].onclick = function () {
						Dom.expand("information");
						if (Dom.inventory.requiredSpace([items[i]])) {
							Dom.inventory.give(items[i].item, items[i].quantity);
							document.getElementsByClassName("lootOptions")[items[i].num].outerHTML = "<span class='lootOptions'></span>";
							document.getElementsByClassName("lootStackNum")[items[i].num].outerHTML = "<span class='lootStackNum'></span>";
							Dom.loot.looted[i] = undefined;
						}else{
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
						}else{
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

Dom.text.page = function (name, text, close, buttons, functions, give) {
	if (Dom.changeBook("textPage")) {//, true/*false*/, true);
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
		for (let i = 0; i < buttons.length; i++) {
			if (buttons[i] !== undefined) {
				Dom.elements.textPage.innerHTML += "<br><center><div id='buttons"+i+"' class='buttons'>"+buttons[i]+"</div></center>";
			}
		}
		if (close) {
			Dom.elements.textPage.innerHTML += "<br><br><br><center><div class='closeClass' onclick='Dom.closePage(\"textPage\")'>Close</div></center>";
		}
		// onclicks have to be below this point because the line above resets them
		for (let i = 0; i < buttons.length; i++) {
			if (buttons[i] !== undefined) {
				document.getElementById("buttons"+i).onclick = function () {
					functions[i]();
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
	if (i === 5 && Player.inventory.items[5].type === "bag") {
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
	}
	if (Player.inventory.items[i].sellCurrency === undefined) {
		Player.inventory.items[i].sellCurrency = 2;
	}
	Dom.inventory.give(Items.currency[Player.inventory.items[i].sellCurrency], (all ? Player.inventory.items[i].sellQuantity*Math.floor(Player.inventory.items[i].stacked/Player.inventory.items[i].sellQuantity)*Player.inventory.items[i].sellPrice : (Player.inventory.items[i].charges === undefined ? Player.inventory.items[i].sellPrice : Math.ceil(Player.inventory.items[i].sellPrice / (Player.inventory.items[i].maxCharges / Player.inventory.items[i].charges)))));
	Dom.inventory.remove(i, all ? Math.floor(Player.inventory.items[i].stacked/Player.inventory.items[i].sellQuantity)*Player.inventory.items[i].sellQuantity : /*Player.inventory.items[i].sellQuantity <= Player.inventory.items[i].stacked ?*/ Player.inventory.items[i].sellQuantity /*: 0*/);
	Dom.buyer.page();
}

Dom.buyer.page = function (npc) {
	Dom.changeBook("buyerPage")//, true/*false*/, true);
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
			remove = false;
		}
	}
	for (let i = 0; i < Player.inventory.items.length; i++) {
		if (Player.inventory.items[i].image !== undefined) {
			// building the table
			Dom.elements.buyerPageInventory.getElementsByTagName("td")[i].innerHTML = "<img src='"+Player.inventory.items[i].image+"' draggable='true' ondragstart='Dom.inventory.drag(event, Player.inventory.items, "+i+")'></img>";;
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
				Dom.elements.buyerPageInventory.getElementsByTagName("td")[i].onclick = function () {
					if (!(!remove && i === 5 && Player.inventory.items[5].type === "bag") && Dom.inventory.check(Player.inventory.items[i].id, Player.inventory.items[i].type, Player.inventory.items[i].sellQuantity)) {
						Dom.alert.ev = i;
						Dom.alert.target = Dom.buyer.remove;
						if (Player.inventory.items[i].stacked >= Player.inventory.items[i].sellQuantity*2) {
							Dom.alert.page("How many <strong>"+Player.inventory.items[i].name+"</strong> would you like to sell for <strong>"+(Player.inventory.items[i].charges === undefined ? Player.inventory.items[i].sellPrice : Math.ceil(Player.inventory.items[i].sellPrice / (Player.inventory.items[i].maxCharges / Player.inventory.items[i].charges)))+" "+Items.currency[Player.inventory.items[i].sellCurrency].name.toLowerCase()+"</strong> "+(Player.inventory.items[i].sellQuantity !== 1 ? "per "+Player.inventory.items[i].sellQuantity+"?" : "each?"),
								3, [Player.inventory.items[i].sellQuantity <= Player.inventory.items[i].stacked ? Player.inventory.items[i].sellQuantity : 0, Math.floor(Player.inventory.items[i].stacked/Player.inventory.items[i].sellQuantity)*Player.inventory.items[i].sellQuantity], "buyerPage"
							);
						}else{
							Dom.alert.page("Are you sure you want to sell <strong>"+(Player.inventory.items[i].sellQuantity > 1 ? Player.inventory.items[i].sellQuantity+" " : "")+(Player.inventory.items[i].unidentified ? "unidentified "+Player.inventory.items[i].type : Player.inventory.items[i].name)+"</strong> for <strong>"+(Player.inventory.items[i].charges === undefined ? Player.inventory.items[i].sellPrice : Math.ceil(Player.inventory.items[i].sellPrice / (Player.inventory.items[i].maxCharges / Player.inventory.items[i].charges)))+" "+Items.currency[Player.inventory.items[i].sellCurrency].name.toLowerCase()+"</strong>? You cannot buy it back!", 2, undefined, "buyerPage");
						}
					}else if (!(!remove && i === 5 && Player.inventory.items[5].type === "bag")) {
						Dom.alert.page("You need "+Player.inventory.items[i].sellQuantity+" of these to sell them.", 0, undefined, "buyerPage");
					}else{
						Dom.alert.page("Move some items to the bank, sell or dispose of them before you can do that.", 0, undefined, "buyerPage");
					}
				}
			}else{
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

Dom.choose.page = function (npc, buttons, functions, parameters, force) {
	let name = npc.name !== undefined ? npc.name : npc; // for cases like Goblin Torch
	if (npc.constructor.name === "NPC" && !Player.metNPCs.includes(name)) {
		Player.metNPCs.push(name);
	}

	if (Dom.currentlyDisplayed === "") {
		Dom.currentlyDisplayed = name;
		if (name !== npc) {
			Dom.currentNPC.type = npc.type;
			Dom.currentNPC.id = npc.id;
		}
		if (buttons.length > 1 || force) {
			if (Dom.changeBook("choosePage")) {
				Dom.elements.choosePage.innerHTML = "<h1>"+name+"</h1>"+(npc.chat !== undefined ? "<p>"+npc.chat.chooseChat+"</p>" : "");
				Dom.choose.HTML = "";
				Dom.choose.sideHTML = "";
				Dom.choose.dailyHTML = "";
				for (let i = 0; i < buttons.length; i++) {
					let imagenum = 2;
					if (functions[i] === Dom.driver.page) {
						imagenum = 0;
					}else if (functions[i] === Dom.identifier.page) {
						imagenum = 3;
					}else if (functions[i] === Dom.buyer.page) {
						imagenum = 4;
					}else if (functions[i] === Dom.merchant.page) {
						imagenum = 5;
					}else if (functions[i] === Dom.quest.finish) {
						imagenum = 6;
					}else if (functions[i] === Dom.quest.start) {
						if (parameters[i][0].repeatTime === "daily") {
							imagenum = 1;
						}else{
							imagenum = 7;
						}
					}else if (functions[i] === Dom.text.page) {
						if (parameters[i][0] === "Soul Healer") {
							imagenum = 8;
						}/*else{
							imagenum = 1;
						}*/
					}
					if (imagenum === 6 || imagenum === 7) {
						if (parameters[i][0].important === true) {
							Dom.elements.choosePage.innerHTML += "<p class='choosePageButtons' id='choosePageButtons"+i+"'><img src='assets/icons/choose.png' class='chooseIcon' style='clip: rect("+25*imagenum+"px, 25px, "+25*(imagenum+1)+"px, 0px); margin-top: -"+(25*imagenum+3)+"px'></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>"+buttons[i]+"</strong></p>";
						}else{
							Dom.choose.sideHTML += "<p class='choosePageButtons' id='choosePageButtons"+i+"'><img src='assets/icons/choose.png' class='chooseIcon' style='clip: rect("+25*imagenum+"px, 25px, "+25*(imagenum+1)+"px, 0px); margin-top: -"+(25*imagenum+3)+"px'></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+buttons[i]+"</p>";
						}
					}else if (imagenum === 0) {
						Dom.choose.dailyHTML += "<p class='choosePageButtons' id='choosePageButtons"+i+"'><img src='assets/icons/choose.png' class='chooseIcon' style='clip: rect("+25*imagenum+"px, 25px, "+25*(imagenum+1)+"px, 0px); margin-top: -"+(25*imagenum+3)+"px'></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+buttons[i]+"</p>";
					}else{
						Dom.choose.HTML += "<p class='choosePageButtons' id='choosePageButtons"+i+"'><img src='assets/icons/choose.png' class='chooseIcon' style='clip: rect("+25*imagenum+"px, 25px, "+25*(imagenum+1)+"px, 0px); margin-top: -"+(25*imagenum+3)+"px'></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+buttons[i]+"</p>";
					}
				}
				Dom.elements.choosePage.innerHTML += Dom.choose.sideHTML + Dom.choose.dailyHTML + Dom.choose.HTML + '<br><br><center><div id="choosePageClose" class="closeClass" onclick="Dom.closePage(\'choosePage\')">Close</div></center>';
				for (let i = 0; i < buttons.length; i++) {
					document.getElementById("choosePageButtons"+i).onclick = function () {
						Dom.closePage("choosePage", true);
						functions[i](...parameters[i]);
					}
				}
			}
		}else{
			functions[0](...parameters[0]);
		}
	}
}

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
			else{
				Keyboard.listenForKey(keyName, Keyboard.downFunctions[Object.keys(User.settings.keyboard)[Dom.settings.hotkey]], Keyboard.upFunctions[Object.keys(User.settings.keyboard)[Dom.settings.hotkey]]);
			}

			User.settings.keyboard[Object.keys(User.settings.keyboard)[Dom.settings.hotkey]] = keyName;
			document.getElementsByClassName("hotkey")[Dom.settings.hotkey].innerHTML = Dom.settings.keyName(ev);
			Dom.settings.hotkey = undefined;
			//User.settings.keyboard = User.settings.keyboard;

		// if it is unavailable set it back to what it was
		}else{
			document.getElementsByClassName("hotkey")[Dom.settings.hotkey].innerHTML = Dom.settings.keyName(User.settings.keyboard[Object.keys(User.settings.keyboard)[Dom.settings.hotkey]]);
			Dom.settings.hotkey = undefined;
		}
	}else if (keyName === User.settings.keyboard.CHAT) {
		Dom.changeBook("chatPage", true);
	}else if (keyName === User.settings.keyboard.INVENTORY) {
		Dom.changeBook("inventoryPage", true);
	}else if (keyName === User.settings.keyboard.QUESTS) {
		Dom.changeBook("questsPage", true);
	}else if (keyName === User.settings.keyboard.ADVENTURE) {
		Dom.changeBook("adventurePage", true);
	}else if (keyName === User.settings.keyboard.REPUTATION) {
		Dom.changeBook("reputationPage", true);
	}else if (keyName === User.settings.keyboard.SETTINGS) {
		Dom.changeBook("settingsPage", true);
	}
}

Dom.settings.current = "settingsPage";
Dom.settings.page = function (page) {
	if (page !== undefined) {
		// change to a specific settings page
		Dom.closePage(Dom.settings.current);
		Dom.settings.current = page;
		Dom.changeBook(page, true);
	}else{
		// change to the last settings page that was open
		Dom.changeBook(Dom.settings.current, true);
	}
}

Dom.instructions.unlockTab = function (tab, skip) {
	if (!Player.unlockedTabs.includes(tab)) {
		Player.unlockedTabs.push(tab);
		document.getElementById("change"+tab[0].toUpperCase()+tab.substring(1)).style.display = "block";
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
	Dom.instructions.unlockTab("reputation", true);
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

if (User.settings.coords === true) {
	Dom.elements.coordsOn.checked = true;
}
if (User.settings.fps === true) {
	Dom.elements.fpsOn.checked = true;
}
if (User.settings.hitboxes === true) {
	Dom.elements.hitboxesOn.checked = true;
}
if (User.settings.grid === true) {
	Dom.elements.gridOn.checked = true;
}

Dom.bank.inOut = function (direction, num) {
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

		let notBag = true;
		if (array[num].type === "bag") {
			for (let i = 0; i < Player.bank.unlockedSlots; i++) {
				if (Player.bank.items[i].image === undefined) {
					Dom.inventory.drop(Dom.elements.bankPageInventory.getElementsByTagName("td")[i], Player.bank.items, i, element, array, num)
					notBag = false;
					break;
				}
			}
		}
		if (notBag) {
			for (let i = 6; i < Player.bank.items.length; i++) {
				if (Player.bank.items[i].image === undefined) {
					Dom.inventory.drop(Dom.elements.bankPageInventory.getElementsByTagName("td")[i], Player.bank.items, i, element, array, num)
					break;
				}
			}
		}
	}

	else {
		for (let i = 0; i < Player.inventory.items.length; i++) {
			if (Player.inventory.items[i].image === undefined) {
				Dom.inventory.drop(Dom.elements.itemInventory.getElementsByTagName("td")[i], Player.inventory.items, i, Dom.elements.bankPageInventory.getElementsByTagName("td")[num], Player.bank.items, num) ///UPDATE // to, from
				break;
			}
		}
	}
}

Dom.bank.page = function () {
	Dom.changeBook("inventoryPage");
	Dom.changeBook("bankPage");
	Dom.bank.active = true;

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
				Dom.elements.bankPageInventory.getElementsByTagName("td")[i].style.backgroundImage = "url('./assets/items/bag/1.png')";
			}
		}
		else {
			Dom.elements.bankPageInventory.getElementsByTagName("td")[i].style.backgroundImage = "url('./assets/items/bag/0.png')";
			if (nextUnlock) {
				Dom.elements.bankPageInventory.getElementsByTagName("td")[i].onclick = function () {
					if (Dom.inventory.check(2, "currency") /*+ Dom.inventory.check(2, "currency", undefined, undefined, Player.bank.items)*/ >= BagSlotCosts[i]) {
						Dom.alert.ev = i;
						Dom.alert.target = function () {
							Dom.inventory.removeById(2, "currency", BagSlotCosts[i]);
							Player.bank.unlockedSlots++;
							Dom.bank.page();
						}
						Dom.alert.page("Would you like to buy this bag slot for "+BagSlotCosts[i]+" gold?", 2, undefined, "bankPage");
					}
					else {
						Dom.alert.page("You cannot afford this bag slot. Come back when you have "+BagSlotCosts[i]+" gold", undefined, undefined, "bankPage");
					}
				}
				nextUnlock = false;
			}
			else {
				Dom.elements.bankPageInventory.getElementsByTagName("td")[i].onclick = function () {
					Dom.alert.page("You cannot unlock this bag slot.", undefined, undefined, "bankPage");
				}
			}
		}
	}
	for (let i = 0; i < Player.bank.items.length; i++) {
		if (Player.bank.items[i].image !== undefined) {
			// building the table
			Dom.elements.bankPageInventory.getElementsByTagName("td")[i].innerHTML = "<img src='"+Player.bank.items[i].image+"' draggable='true' ondragstart='Dom.inventory.drag(event, Player.bank.items, "+i+")' onclick='Dom.bank.inOut(\"out\", "+i+")'></img>";
			if (Player.bank.items[i].stacked !== undefined && Player.bank.items[i].stacked !== 1) {
				Dom.elements.bankPageInventory.getElementsByTagName("td")[i].innerHTML += "<div class='stackNum' id='bankStackNum"+i+"'>"+Player.bank.items[i].stacked+"</div>";
			}
		}
	}
}

Dom.driver.page = function (npc, destinations) {
	if (Dom.changeBook("driverPage")) {//, true/*false*/, true);
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
				}else{
					Dom.driver.previous = undefined;
					Dom.elements.driverPageBuy.style.display = "none";
				}
			}
		}
		Dom.elements.driverPageBuy.onclick = function () {
			if (Dom.inventory.check(2, "currency", destinations[Dom.driver.previous].cost)) {
				Dom.alert.target = function (destination) {
					Dom.inventory.removeById(2, "currency", destinations[Dom.driver.previous].cost);
					Game.loadArea(destination.destinationName, destination.destinationPosition);
					Dom.driver.previous = undefined;
				}
				Dom.alert.ev = destinations[Dom.driver.previous];
				Dom.alert.page("Are you sure you want to go to <strong>"+destinations[Dom.driver.previous].title+"</strong> for <strong>"+destinations[Dom.driver.previous].cost+"</strong> gold?", 2, undefined, "driverPage");
			}else{
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
			}else{
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
			}else{
				document.getElementsByClassName("mailImage")[ii].style.backgroundImage = "url('"+Offsets[Player.mail.mail[i].image].image+".png')";
				document.getElementsByClassName("mailImage")[ii].style.backgroundPosition = Offsets[Player.mail.mail[i].image].x+"%"+Offsets[Player.mail.mail[i].image].y+"%";
			}
			document.getElementsByClassName("mailDelete")[ii].onclick = function () {
				Dom.alert.target = function () {
					Player.mail.mail.splice(i, 1);
					Dom.mail.page();
					Game.mailboxUpdate("read");
					Dom.mail.page(true);
				}
				Dom.alert.page("Are you sure you want to delete this mail? It will be lost forever!", 2, undefined, "mailPage");
			}
			document.getElementsByClassName("mailFlag")[ii].onclick = function () {
				Dom.mail.notOpen = true;
				if (Player.mail.mail[i].flag) {
					Player.mail.mail[i].flag = false;
				}else{
					Player.mail.mail[i].flag = true;
				}
				Dom.mail.page(true);
			}
			document.getElementsByClassName("mail")[ii].onclick = function () {
				// if you did not click on delete or flag
				if (Dom.elements.alert.hidden && !Dom.mail.notOpen) {
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
					}else{
						let quest = Quests[Player.mail.mail[i].openParameters[0]][Player.mail.mail[i].openParameters[1]];
						if (Player.quests.possibleQuestArray.includes(quest.quest)) {
							ExecuteFunctionByName("quest.start", Dom, [quest]);
						}else{
							ExecuteFunctionByName("text.page", Dom, [quest.quest, "<strong>"+quest.startName+"</strong><br>"+quest.startChat, true, [], []]);
						}
					}
					Game.mailboxUpdate("read");
					/*if (first && Player.mail.mail[i].openFunction === "quest.start") {
						Player.mail.mail[i].openFunction = "text.page";
						Player.mail.mail[i].openParameters = [Player.mail.mail[i].openParameters.quest, "<strong>"+Player.mail.mail[i].startName+"</strong>"+Player.mail.mail[i].startChat];
					}*/
				}else{
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
	Dom.elements.adventurePage.innerHTML = `<div id="level" style="display:inline;">Level ${Player.level}</div>
		<a href="./achievements/index.html" target="_blank" style="display: inline; float: right;">Achievements</a>
		<br><br><br>Suggested Content:`;
	for (let i = 0; i < Object.keys(Adventure).length; i++) {
		if (Adventure[Object.keys(Adventure)[i]].condition()) {
			let html = Adventure[Object.keys(Adventure)[i]].html;
			if (Adventure[Object.keys(Adventure)[i]].special !== undefined) {
				html = html.replace(/SPECIAL/, Adventure[Object.keys(Adventure)[i]].special());
			}
			Dom.elements.adventurePage.innerHTML += html;
		}
	}
}

Dom.inventory.reEquip = function (event) {
	let slot = event.target.id;//composedPath()[0].id;
	if (!Dom.inventory.deEquip) {
		for (let i = Player.inventory.items.length-1; i >= 0; i--) {
			if (Player.inventory.items[i].type === slot || (slot === "weapon" && (Player.inventory.items[i].type === "sword" || Player.inventory.items[i].type === "staff" || Player.inventory.items[i].type === "bow" || Player.inventory.items[i].type === "rod"))) {
				Dom.inventory.drop(event, Player.inventory, slot, Dom.elements.itemInventory.getElementsByTagName("td")[i], Player.inventory.items, i); // to, from
				break;
			}
		}
	}
}

Dom.inventory.prepare = function (array, i, element) {
	/*if (arrayI[i].chooseStats !== undefined) {
		Items[array[i].type][array[i].id].onClick = Dom.inventory.chooseStats;
	}*/
	if (array[i].conditionalChooseStats !== undefined) {
		if (array[i].chooseStats === undefined) {
			array[i].chooseStats = [];
		}
		//Player.conditionalChooseStats.push({type: array[i].type, id: array[i].id, active: [],});
		Dom.inventory.conditionalStats();
	}
	if (array[i].classStats !== undefined && array[i].classStats[Player.class] !== undefined) {
		Object.assign(array[i].stats, array[i].classStats[Player.class]);
	}
	if (array[i].healthRestore !== undefined && array[i].healthRestoreTime !== undefined) {
		//array[i].secondClickFunction = Items[array[i].type][array[i].id].onClick;
		Items[array[i].type][array[i].id].onClick = Dom.inventory.food;
		//array[i].functionText = "Restores "+array[i].healthRestore+" health over "+array[i].healthRestoreTime+" seconds (whilst not in combat)";
	}
	if (array[i].type === "teleport") {
		Items[array[i].type][array[i].id].onClick = Dom.inventory.teleport;
	}
	if ((array[i].type === "sword" || array[i].type === "staff" || array[i].type === "bow" || array[i].type === "rod") && array[i].name !== undefined) {
		Items[array[i].type][array[i].id].onClick = function (i) {
			if (Dom.bank.active) {
				Dom.bank.inOut("in", i);
			}
			else if (!isNaN(i)) {
				Dom.inventory.drop(Dom.elements.weapon, Player.inventory, "weapon", Dom.elements.itemInventory.getElementsByTagName("td")[i], Player.inventory.items, i); // to, from
			}
			else{
				let chooseStats = false;
				if (Player.inventory[i].chooseStats !== undefined) {
					Dom.inventory.deEquip = true;
					if (Dom.inventory.chooseStats(i)) {
						chooseStats = true;
					}
				}
				if (!chooseStats) {
					if (Dom.inventory.give(Player.inventory[i], 1, undefined, true) !== false) { // don't save while you have one equipped AND on in inventory
						Dom.inventory.deEquip = true;
						Dom.inventory.removeEquipment(Player.inventory[i]);
						Player.inventory[i] = {};
						document.getElementById(i).innerHTML = "";
						Game.inventoryUpdate();
					}
				}
			}
		}
	}
	if ((array[i].type === "helm" || array[i].type === "chest" || array[i].type === "greaves" || array[i].type === "boots") && array[i].name !== undefined) {
		Items[array[i].type][array[i].id].onClick = function (i) {
			if (Dom.bank.active) {
				Dom.bank.inOut("in", i);
			}
			else if (!isNaN(i)) {
				Dom.inventory.drop(document.getElementById(Player.inventory.items[i].type), Player.inventory, Player.inventory.items[i].type, Dom.elements.itemInventory.getElementsByTagName("td")[i], Player.inventory.items, i); // to, from
			}else{
				let chooseStats = false;
				if (Player.inventory[i].chooseStats !== undefined) {
					Dom.inventory.deEquip = true;
					if (Dom.inventory.chooseStats(i)) {
						chooseStats = true;
					}
				}
				if (!chooseStats) {
					if (Dom.inventory.give(Player.inventory[i], 1, undefined, true) !== false) { // don't save while you have one equipped AND one in inventory
						Dom.inventory.deEquip = true;
						Dom.inventory.removeEquipment(Player.inventory[i]);
						Player.inventory[i] = {};
						document.getElementById(i).innerHTML = "";
						Game.inventoryUpdate();
					}
				}
			}
		}
	}
	if (!array[i].unidentified) {
		array[i].onClickFunction = Items[array[i].type][array[i].id].onClick;
		//if (array[i].onClickFunction !== undefined) {
			if (array[i].channel !== undefined) {
				array[i].onClick = function (inventoryPosition) {
					if (Dom.inventory.cooldown(inventoryPosition, false, true)) {
						Game.hero.channel(Dom.inventory.cooldown, [inventoryPosition], Player.inventory.items[inventoryPosition].channel, Player.inventory.items[inventoryPosition].name);
					}
				}
			}else{
				array[i].onClick = Dom.inventory.cooldown;
			}
		//}
		array[i].onKill = Items[array[i].type][array[i].id].onKill;
		array[i].onHit = Items[array[i].type][array[i].id].onHit;
		array[i].onAttack = Items[array[i].type][array[i].id].onAttack;
		array[i].onCatch = Items[array[i].type][array[i].id].onCatch;
		array[i].onOpen = Items[array[i].type][array[i].id].onOpen;
		array[i].quest = Items[array[i].type][array[i].id].quest;
	}
	if (element !== undefined) {
		element.innerHTML = "<img src='"+array[i].image+"' draggable='true' ondragstart='Dom.inventory.drag(event,"+(array === Player.inventory.items ? "Player.inventory.items,"+i : 'Player.inventory, "'+i+'"')+")' "+(array[i].onClick !== undefined ? "onclick='Player.inventory"+(array === Player.inventory.items?".items["+i+"].onClick("+i+")'":"."+i+".onClick(\""+i+"\")'") : "")+"></img>";
		if (array[i].stacked !== undefined && array[i].stacked !== 1) {
			element.innerHTML += "<div class='stackNum' id='stackNum"+i+"'>"+array[i].stacked+"</div>";
		}
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
	/*
	for (let i = 0; i < Player.conditionalChooseStats.length; i++) {
		for (let x = 0; x < Items[Player.conditionalChooseStats[i].type][Player.conditionalChooseStats[i].id].conditionalChooseStats.length; x++) {
			let conditionalStat = Items[Player.conditionalChooseStats[i].type][Player.conditionalChooseStats[i].id].conditionalChooseStats[x];

			// find the item in the inventory
			let item = {};
			for (let y = 0; y < Player.inventory.items.length; y++) {
				if (Player.inventory.items[y].type === Player.conditionalChooseStats[i].type && Player.inventory.items[y].id === Player.conditionalChooseStats[i].id) {
					item = Player.inventory.items[y];
				}
			}
			for (let y = 0; y < Object.keys(Player.inventory).length; y++) {
				if (Player.inventory[Object.keys(Player.inventory)[y]].type === Player.conditionalChooseStats[i].type && Player.inventory[Object.keys(Player.inventory)[y]].id === Player.conditionalChooseStats[i].id) {
					item = Player.inventory[Object.keys(Player.inventory)[y]];
				}
			}
			if (item.image !== undefined) {
				if (conditionalStat.condition(item)) {
					if (!Player.conditionalChooseStats[i].active[x]) {
						Player.conditionalChooseStats[i].active[x] = true;
						// add conditionalStats to stats

						item.chooseStats[Object.keys(conditionalStat)[0]] = conditionalStat[Object.keys(conditionalStat)[0]];

					}
				}
				else{
					if (Player.conditionalChooseStats[i].active[x]) {
						Player.conditionalChooseStats[i].active[x] = false;
						// remove conditionalStats from stats

						delete item.chooseStats[Object.keys(conditionalStat)[0]];

					}
				}
			}
			else {
				Player.conditionalChooseStats.splice(i, 1);
			}
		}
	}*/
}

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
						}else{
							Player.stats[Object.keys(conditionalStat.stats)[i]] = true;
						}
					}
					Dom.inventory.afterChangedStats();
				}
			}else{
				if (Player.conditionalStats[i].active[x]) {
					Dom.inventory.beforeChangedStats();
					Player.conditionalStats[i].active[x] = false;
					// remove conditionalStats from stats
					for (let i = 0; i < Object.keys(conditionalStat.stats).length; i++) {
						if (conditionalStat.stats[Object.keys(conditionalStat.stats)[i]] !== true) {
							Player.stats[Object.keys(conditionalStat.stats)[i]] -= conditionalStat.stats[Object.keys(conditionalStat.stats)[i]];
						}else{
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
	if (Player.stats.hex === 0) {
		Dom.inventory.hexWasZero = true;
	}
}

Dom.inventory.afterChangedStats = function () {
	if (Player.stats.hex > 0 && Dom.inventory.hexWasZero) {
		Game.loadHexImages();
	}
	Game.secondary.render();
}

Dom.settings.transparency = function () {
	if (Dom.elements.transparencyOn.checked) {
		for (let i = 0; i < document.getElementsByClassName("DOM").length; i++) {
			document.getElementsByClassName("DOM")[i].style.opacity = "var(--opacity)";
		}
	}else{
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

Dom.settings.dark = function () {
	if (User.settings.dark) {
		document.documentElement.style = `
		--border: #202020;
		--alert: #707070;
		--selected: #258bde;
		--top: #1d2d3b;
		--bottom: #454545;
		--page: #202020;
		--text: #dcddde;
		--link: #99bfde;
		--arrow: #454545;
		--opacity: 0.9;`
	}
	else {
		document.documentElement.style = `
		--border: #886622;
		--alert: #eecc77;
		--selected: #fdf581;
		--top: #fff7a5;
		--bottom: #fef9b4;
		--page: #f9f9d0;
		--text: #000000;
		--link: #0000ff;
		--arrow: #886622;
		--opacity: 0.6;`
	}
}

// called by viewport resize or by init
// parameter is true if called on init
Dom.updateScreenSize = function (init) {
	Dom.canvas.width = window.innerWidth;
	Dom.canvas.height = window.innerHeight;

	Dom.elements.game.width = Dom.canvas.width;
	Dom.elements.game.height = Dom.canvas.height;
	Dom.elements.dayNight.width = Dom.canvas.width;
	Dom.elements.dayNight.height = Dom.canvas.height;
	Dom.elements.light.width = Dom.canvas.width;
	Dom.elements.light.height = Dom.canvas.height;
	Dom.elements.secondary.width = Dom.canvas.width;
	Dom.elements.secondary.height = Dom.canvas.height;
	Dom.elements.chat.style.width = Dom.canvas.width/2-183+"px";
	Dom.elements.canvasChatInput.style.width = Dom.canvas.width/2-187-3+"px";
	Dom.elements.hotbar.style.left = Dom.canvas.width/2-167.6+"px";
	Dom.elements.hotbar.style.top = Dom.canvas.height-80+"px";
	let left = (Dom.canvas.width/2-168-400)/2 + Dom.canvas.width/2+168;
	Dom.elements.changeChat.style.left= left+"px";
	Dom.elements.changeInventory.style.left= left+70+"px";
	Dom.elements.changeQuests.style.left= left+140+"px";
	Dom.elements.changeAdventure.style.left= left+210+"px";
	Dom.elements.changeReputation.style.left= left+280+"px";
	Dom.elements.changeSettings.style.left= left+350+"px";
	Dom.elements.achievement.style.left= Dom.canvas.width-458+"px";

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
		Game.secondary.render();
		Game.renderDayNight();

		// update weather intensity and reset the positions of the particles
		if (Dom.elements.weatherOn.checked) {
			Weather.updateIntensity();
			//Weather.reset();
		}
	}
}

Dom.init = function () {
	
	Dom.updateScreenSize(true);

	Dom.elements.itemInventory.innerHTML = "";
	for (let i = 0; i < Player.inventory.items.length/6; i++) {
		let str = "<tr>";
		for (let inv = 6*i; inv < 6*i+6; inv++) {
				str += '<td ondrop="Dom.inventory.drop(event, Player.inventory.items, '+inv+');Game.inventoryUpdate(event)" ondragover="Dom.inventory.allowDrop(event)" onmouseover="Dom.inventory.displayInformation(Player.inventory.items['+inv+'], undefined, \'inventoryPage\')" onmouseleave="Dom.expand(\'information\')" ondrag="Dom.expand(\'information\')" onclick="Game.inventoryUpdate()"></td>';
		}
		Dom.elements.itemInventory.innerHTML += str+"</tr>";
	}
	// prepare the item inventory
	for (let i = 0; i < Player.inventory.items.length; i++) {
		// if the item has melted
		if (Player.inventory.items[i].image !== undefined && !Player.inventory.items[i].unidentified && Items[Player.inventory.items[i].type][Player.inventory.items[i].id].deleteIf !== undefined && Items[Player.inventory.items[i].type][Player.inventory.items[i].id].deleteIf ()) {
			setTimeout(function () {
				Dom.chat.insert("It's not snowy any more! Your "+Player.inventory.items[i].name+" melted.");
				Player.inventory.items[i] = {};
			},1000);
		}else if (Player.inventory.items[i].image !== undefined) {
			Dom.inventory.prepare(Player.inventory.items, i, Dom.elements.itemInventory.getElementsByTagName("td")[i]);
		}
	}
	if (Player.inventory.items[5].image === undefined) {
		Dom.elements.itemInventory.getElementsByTagName("td")[5].style.backgroundImage = "url('assets/items/bag/1.png')";
	}

	// prepare the equipments slots
	for (let i = 0; i < Object.keys(Player.inventory).length-1; i++) { // repeats for each equipment slot
		// if the item has melted
		if (Player.inventory[Object.keys(Player.inventory)[i]].image !== undefined && Items[Player.inventory[Object.keys(Player.inventory)[i]].type][Player.inventory[Object.keys(Player.inventory)[i]].id].deleteIf !== undefined && Items[Player.inventory[Object.keys(Player.inventory)[i]].type][Player.inventory[Object.keys(Player.inventory)[i]].id].deleteIf ()) {
			setTimeout(function () {
				Dom.chat.insert("It's not snowy any more! Your "+Player.inventory[Object.keys(Player.inventory)[i]].name+" melted.");
				Player.inventory[Object.keys(Player.inventory)[i]] = {};
			},1000);
		}
		// if there is an item
		else if (Player.inventory[Object.keys(Player.inventory)[i]].image !== undefined) {
			Dom.inventory.prepare(Player.inventory, Object.keys(Player.inventory)[i], document.getElementById(Object.keys(Player.inventory)[i]));
			document.getElementById(Object.keys(Player.inventory)[i]).style.backgroundImage = "none";
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
				Dom.chat.insert("It's not snowy any more! Your "+Player.bank.items[i].name+" melted.");
				Player.bank.items[i] = {};
			},1000);
		}else if (Player.bank.items[i].image !== undefined) {
			Dom.inventory.prepare(Player.bank.items, i, Dom.elements.bankPageInventory.getElementsByTagName("td")[i]);
		}
	}

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
			else{
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

	for (let i = 0; i < Player.unlockedTabs.length; i++) {
		document.getElementById("change"+Player.unlockedTabs[i][0].toUpperCase()+Player.unlockedTabs[i].slice(1)).style.display = "block";
	}
	if (Player.unlockedInstructions.length >= Instructions.length) {
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

	// MAIL
	let date = GetFullDate();
	// the first time the player logs on each day
	if (!Player.days.includes(date)) {
		
		// Load a new class: gold, mail, instructions
		if (localStorage.getItem(Player.class) === null) {
	        Dom.inventory.give(Items.currency[2],3);
	        Dom.mail.give(
	            "Welcome to Antorax!",
	            "The Tinkering Guild",
	            "galuthelTheTrapMechanic",
	            "text.page",
	            ["Welcome to Antorax!",
	            `Hello ${Player.name}!<br><br>It's great to have new people joining us in Antorax. I look forward to meeting you very soon in Wizard Island. Perhaps you would like to try out one of our newest inventions - the ScreenGrabber 3000! It's free of charge. Pop us a letter if it explodes, otherwise see you soon!<br><br>From the Tinkering Guild`, true, [], [],
	            [{item: Items.item[14]}]], [{item: Items.item[14]}],
	        );
			Dom.instructions.page(0);
		}

		// christmas daily rewards
		if (Event.event === "Christmas") {
			let randomNPC = Player.metNPCs[Random(0, Player.metNPCs.length-1)]; // NPC that sent message
			if (Event.christmasDay) { // christmas day
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
			}else if (date.substring(6) < "25") { // before christmas
				Dom.mail.give(
					25 - parseInt(date.substring(6)) + " Day"+(parseInt(date.substring(6)) !== 24 ? "s" : "")+" To Go!",
					randomNPC,
					ToCamelCase(randomNPC),
					"text.page",
					["Merry Christmas!",
					"This is your free daily chistmas token. Spend it wisely!", true, [], [],
					[{item: Items.currency[5]}]], [{item: Items.currency[5]}],
				);
			}else { // after christmas (in december)
				Dom.mail.give(
					parseInt(date.substring(6)) + " of Christmas 2018",
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
			);
			if (!Player.quests.completedQuestArray.includes("The Legend of the Tattered Knight")) {
				Dom.mail.give(
					"The Legend of the Tattered Knight",
					"unknown sender",
					"./assets/items/item/16",
					"quest.start",
					["eaglecrestLoggingCamp", 25],
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
		
		Player.days.push(date);
		Player.quests.randomDailyQuests = {};
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
	Dom.checkProgress(); // Dom.quests.active()
	Dom.quests.possible();
	Dom.quests.completed();
	//Dom.changeBook(Player.tab); // sets tab to whatever the player was on when they last saved
	Dom.adventure.update(); // chooses what should be shown in adventurer's log
	// clear any unintentional chat and welcome player
	Dom.chat.contents = [];

	if (Event.christmasDay) {
	    Dom.chat.insert("Merry Christmas, " + Player.name + "!", 0, undefined, true);
	}
	else if(localStorage.getItem(Player.class) !== null) {
	    Dom.chat.insert("Welcome back, " + Player.name + "!", 0, undefined, true);
	}
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

	Dom.elements.weatherOn.onclick = function () {
		User.settings.weather = true;
	}
	Dom.elements.weatherOff.onclick = function () {
		User.settings.weather = false;
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

	Dom.alert.target = Dom.settings.acceptOn;
	if (localStorage.getItem("accept") !== "true") {
		Dom.alert.page("This site uses local storage for progress saving, do you accept?", 2, undefined, "game");
	}else{
		Dom.elements.settingAcceptHolder.innerHTML = "";
	}

	// keyboard functions
	let array = ["ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX"];
	for (let i = 0; i < 6; i++) {
		Keyboard.upFunctions[array[i]] = function () {
			if (Player.inventory.items[i].onClick !== undefined) {
				Player.inventory.items[i].onClick(i);
				Game.inventoryUpdate();
			}
		}
		Keyboard.listenForKey(User.settings.keyboard[array[i]], undefined, Keyboard.upFunctions[array[i]]);
	}
	array = ["CHAT", "INVENTORY", "QUESTS", "ADVENTURE", "REPUTATION", "SETTINGS"];
	for (let i = 0; i < 6; i++) {
		Keyboard.upFunctions[array[i]] = Dom.settings.hotkeys;
		Keyboard.listenForKey(User.settings.keyboard[array[i]], undefined, Keyboard.upFunctions[array[i]]);
	}
	Keyboard.listenForKey(User.settings.keyboard.TALK, undefined, Keyboard.upFunctions.TALK);

	//document.documentElement.requestFullscreen(); - disabled by chrome
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

// SAVEDATA FIXES
if (User.achievementPoints.total === 0) {
	for (let i = 0; i < Object.keys(User.achievements).length; i++) {
		for (let x = 0; x < Achievements.length; x++) {
			if (Object.keys(User.achievements)[i] === ToCamelCase(Achievements[x].name)) {
				User.achievementPoints.total += Achievements[x].points;
				User.achievementPoints.unclaimed += Achievements[x].points;
				break;
			}
		}
	}
}
