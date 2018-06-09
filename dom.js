// DOM function arrays
var Dom = {
	elements: {
		chatPage: document.getElementById("chatPage"),
		inventoryPage: document.getElementById("inventoryPage"),
		questsPage: document.getElementById("questsPage"),
		settingsPage: document.getElementById("settingsPage"),
		instructionsPage: document.getElementById("instructionsPage"),
		reputationPage: document.getElementById("reputationPage"),
		questStart: document.getElementById("questStart"),
		questFinish: document.getElementById("questFinish"),
		merchantPage: document.getElementById("merchantPage"),
	},
	chat: {
		length: 0,
		contents: [],
	},
	inventory: {},
	quests: {},
	instructions: {},
	reputation: {},
	settings: {},
	quest: {},
	merchant: {},
};
Dom.previous = "instructionsPage";
// change currently displayed page
// returns if the page was changed or not
Dom.changeBook = function(page, override, x) {
	//override says if the function should be run regardless of if the player has a quest active (e.g: declining a quest or closing a merchant)
	if(this.currentlyDisplayed == "" || override) { // check the player doesn't have a quest active
		// hide all pages
		if(page != "questStart" && page != "questFinish" && page != "merchantPage"){
			Dom.previous = page;
		}
		this.elements.chatPage.hidden = true;
		this.elements.inventoryPage.hidden = true;
		this.elements.questsPage.hidden = true;
		this.elements.settingsPage.hidden = true;
		this.elements.instructionsPage.hidden = true;
		this.elements.reputationPage.hidden = true;
		this.elements.questStart.hidden = true;
		this.elements.questFinish.hidden = true;
		this.elements.merchantPage.hidden = true;
		document.getElementById(page).hidden = false;
		
		if(page == "chatPage"){
			if(chatPageString == ""){
				chatPage.innerHTML = "<br>" + chatPageStringOld;
			}
			document.getElementById("dot").hidden = true;
			document.getElementById("dot").innerHTML = 0;
			chatPageStringOld = chatPageString + chatPageStringOld;
			chatPageString = "";
		}
		
		if(page == "reputationPage"){
			Dom.reputation.update(); // not necessary?
		}

		if(override) {
			this.currentlyDisplayed = ""; // reset current display if it is overriden
			Dom.quests.activeQuests(undefined);
		}
		
		return true;
	}
	else {
		for(var i = 0; i < document.getElementsByClassName("closeClass").length; i++){
			document.getElementsByClassName("closeClass")[i].style.border = "5px solid red";
		}
		if(x != 0 && x != 1){
			Dom.override = true;
			setTimeout(function(){
				for(var i = 0; i < document.getElementsByClassName("closeClass").length; i++){
					document.getElementsByClassName("closeClass")[i].style.border = "5px solid #886622";
					Dom.override = false;
				}
			},200);
		} else if(x == 1){
			for(var i = 0; i < document.getElementsByClassName("closeClass").length; i++){
				document.getElementsByClassName("closeClass")[i].style.border = "5px solid #886622";
			}
		}
		return false;
	}
}

// update the DOM display of gold (and xp temporarily)
Dom.inventory.updateGold = function() {
	for(var i = 0; i < document.getElementsByClassName("goldDisplay").length; i++) {
		document.getElementsByClassName("goldDisplay")[i].innerText = Player.gold;
	}
	for(var i = 0; i < document.getElementsByClassName("xpDisplay").length; i++) {
		document.getElementsByClassName("xpDisplay")[i].innerText = Player.xp;
	}
}
Dom.inventory.updateGold();

// change which item is shown in inventory
Dom.inventory.changeEquipment = function(array,equipmentType) {
	array.push(array[0]);
	array.splice(0, 1);
	document.getElementById(equipmentType).style.backgroundImage = "url(" + array[0].image + ")";
	if(equipmentType == "helm"){
		Player.inventory.helm = array;
		this.displayInformation("10px",Player.inventory.helm);
	}
	if(equipmentType == "chest"){
		Player.inventory.chest = array;
		this.displayInformation("80px",Player.inventory.chest);
	}
	if(equipmentType == "greaves"){
		Player.inventory.greaves = array;
		this.displayInformation("150px",Player.inventory.greaves);
	}
	if(equipmentType == "boots"){
		Player.inventory.boots = array;
		this.displayInformation("220px",Player.inventory.boots);
	}
	if(equipmentType == "weapon"){
		Player.inventory.weapon = array;
		this.displayInformation("305px",Player.inventory.weapon);
	}
}

var chatPageString = "";
var chatPageStringOld = "";
document.getElementById("dot").innerHTML = 0;
// insert text in chat page
Dom.chat.insert = function(text, delay) {
	if(chatPage.hidden){
		if(document.getElementById("dot").innerHTML != "<b>...</b>"){
			document.getElementById("dot").hidden = false;
			document.getElementById("dot").innerHTML = parseInt(document.getElementById("dot").innerHTML) + 1;
			if(parseInt(document.getElementById("dot").innerHTML) > 99){
				document.getElementById("dot").innerHTML = "<b>...</b>";
				document.getElementById("dot").style.lineHeight = "7.5px";
			}
		}
	}
	this.contents.push(text);
	setTimeout(function() {
		chatPageString = text + "<br><br>" + chatPageString;
		chatPage.innerHTML = "<br>" + chatPageString;
		if(chatPageStringOld != 0){chatPage.innerHTML += '-------------------- <b>New Messages</b> --------------------';}
		chatPage.innerHTML += "</p>" + chatPageStringOld;
		if(chatPage.hidden == false){
			Dom.changeBook("chatPage",true);
		}
		this.length++;
		if (this.length >= 10000) { //check chat isn't too big; if it is then purge it. 10,000 is an arbitrary value; maybe change?
			this.purge();
			chatPage.innerHTML = '<p>' + text + '</p>' + chatPage.innerHTML;
			this.length++;
		}
	}, delay);
}

// delete all chat
Dom.chat.purge = function() {
	chatPage.innerHTML = '<p>Chat cleared to free up memory.</p>';
	this.contents = {};
	this.length = 1;
}

// expand/collapse element
Dom.expand = function(block) {
	block = document.getElementById(block);
	if(block.hidden) {
		block.hidden = false;
	}
	else {
		block.hidden = true;
	}
	// the player has no active quests (possibly inefficient? doesn't need to check every time it's opened)
	if(block == activeQuestBox && Dom.quests.activeQuestArray.length == 0){
		document.getElementById("activeQuestBox").style.textAlign = "center";
		document.getElementById("activeQuestBox").innerText = "You have no active quests";
	}else if(block == completedQuestBox && Dom.quests.completedQuestArray.length == 0){
		document.getElementById("completedQuestBox").style.textAlign = "center";
		document.getElementById("completedQuestBox").innerText = "You have no completed quests";
	}else if(block == itemInformation){
		block.hidden = true;
	}
}

// arrange position of bookmarks
Dom.settings.bookmarkPosition = function() {
	// INEFFICIENT?
	if(document.getElementById("bottom").checked) { // arrange bookmarks at bottom of screen
		document.getElementById("changeChat").style.top="619px";
		document.getElementById("changeChat").style.transform="rotate(90deg)";
		document.getElementById("changeChat").style.transformOrigin="top left";
		document.getElementById("changeInventory").style.top="619px";
		document.getElementById("changeInventory").style.transform="rotate(90deg)";
		document.getElementById("changeInventory").style.transformOrigin="top left";
		document.getElementById("changeQuests").style.top="619px";
		document.getElementById("changeQuests").style.transform="rotate(90deg)";
		document.getElementById("changeQuests").style.transformOrigin="top left";
		document.getElementById("changeInstructions").style.top="619px";
		document.getElementById("changeInstructions").style.transform="rotate(90deg)";
		document.getElementById("changeInstructions").style.transformOrigin="top left";
		document.getElementById("changeReputation").style.top="619px";
		document.getElementById("changeReputation").style.transform="rotate(90deg)";
		document.getElementById("changeReputation").style.transformOrigin="top left";
		document.getElementById("changeSettings").style.top="619px";
		document.getElementById("changeSettings").style.transform="rotate(90deg)";
		document.getElementById("changeSettings").style.transformOrigin="top left";
		document.getElementById("changeChat").style.left="710px";
		document.getElementById("changeInventory").style.left="780px";
		document.getElementById("changeQuests").style.left="850px";
		document.getElementById("changeInstructions").style.left="920px";
		document.getElementById("changeReputation").style.left="990px";
		document.getElementById("changeSettings").style.left="1060px";
		document.getElementById("chatImage").style.top="649px";
		document.getElementById("inventoryImage").style.top="649px";
		document.getElementById("questsImage").style.top="649px";
		document.getElementById("instructionsImage").style.top="649px";
		document.getElementById("reputationImage").style.top="649px";
		document.getElementById("settingsImage").style.top="649px";
		document.getElementById("chatImage").style.left="669px";
		document.getElementById("inventoryImage").style.left="739px";
		document.getElementById("questsImage").style.left="820px";
		document.getElementById("instructionsImage").style.left="875px";
		document.getElementById("reputationImage").style.left="943px";
		document.getElementById("settingsImage").style.left="1015px";
		document.getElementById("dot").style.top="646px";
		document.getElementById("dot").style.left="689px";
	}
	else { // arrange bookmarks at top of screen
		document.getElementById("changeChat").style.left="1162px";
		document.getElementById("changeChat").style.transform="rotate(0deg)";
		document.getElementById("changeChat").style.transformOrigin="top left";
		document.getElementById("changeInventory").style.left="1162px";
		document.getElementById("changeInventory").style.transform="rotate(0deg)";
		document.getElementById("changeInventory").style.transformOrigin="top left";
		document.getElementById("changeQuests").style.left="1162px";
		document.getElementById("changeQuests").style.transform="rotate(0deg)";
		document.getElementById("changeQuests").style.transformOrigin="top left";
		document.getElementById("changeInstructions").style.left="1162px";
		document.getElementById("changeInstructions").style.transform="rotate(0deg)";
		document.getElementById("changeInstructions").style.transformOrigin="top left";
		document.getElementById("changeReputation").style.left="1162px";
		document.getElementById("changeReputation").style.transform="rotate(0deg)";
		document.getElementById("changeReputation").style.transformOrigin="top left";
		document.getElementById("changeSettings").style.left="1162px";
		document.getElementById("changeSettings").style.transform="rotate(0deg)";
		document.getElementById("changeSettings").style.transformOrigin="top left";
		document.getElementById("changeChat").style.top="38px";
		document.getElementById("changeInventory").style.top="108px";
		document.getElementById("changeQuests").style.top="178px";
		document.getElementById("changeInstructions").style.top="248px";
		document.getElementById("changeReputation").style.top="318px";
		document.getElementById("changeSettings").style.top="388px";
		document.getElementById("chatImage").style.top="43px";
		document.getElementById("inventoryImage").style.top="113px";
		document.getElementById("questsImage").style.top="183px";
		document.getElementById("instructionsImage").style.top="253px";
		document.getElementById("reputationImage").style.top="323px";
		document.getElementById("settingsImage").style.top="393px";
		document.getElementById("chatImage").style.left="1197px";
		document.getElementById("inventoryImage").style.left="1197px";
		document.getElementById("questsImage").style.left="1212px";
		document.getElementById("instructionsImage").style.left="1197px";
		document.getElementById("reputationImage").style.left="1197px";
		document.getElementById("settingsImage").style.left="1197px";
		document.getElementById("dot").style.top="41px";
		document.getElementById("dot").style.left="1217px";
	}
}

// determine what the position of the bookmarks should be for the user (based on their window size)
if(window.innerHeight >= 755) {
	document.getElementById("bottom").checked = true;
	Dom.settings.bookmarkPosition();
}
else if(window.innerWidth >= 1295) {
	document.getElementById("right").checked = true;
	Dom.settings.bookmarkPosition();
}
else {
	alert("Your window size is too small. Please zoom out!");
	console.warn("Your window size is too small. Please zoom out!");
	document.getElementById("bottom").checked = true;
	Dom.settings.bookmarkPosition();
}

Dom.reputation.levels = ["Hated","Unfriendly","Neutral","Friendly","Honoured"]; // possible reputation levels
for(var i = 0; i < Object.keys(Player.reputation).length; i++){
	Player.reputation[Object.keys(Player.reputation)[i]].score = 5; // reputation score (between levels)
	Player.reputation[Object.keys(Player.reputation)[i]].level = 2; // reputation level
}

Dom.reputation.update = function(){
	for(var i = 0; i < Object.keys(Player.reputation).length; i++){
		if(Player.reputation[Object.keys(Player.reputation)[i]].score > 10) {
			this.upLevel(Player.reputation[Object.keys(Player.reputation)[i]]);
		}
		else if(Player.reputation[Object.keys(Player.reputation)[i]].score < 0) {
			this.downLevel(Player.reputation[Object.keys(Player.reputation)[i]]);
		}
		else {
			console.log(Player.reputation[Object.keys(Player.reputation)[i]].level);
			document.getElementById("reputationBar").innerHTML = this.levels[Player.reputation[Object.keys(Player.reputation)[i]].level];
			document.getElementById("widthPadding").innerHTML = this.levels[Player.reputation[Object.keys(Player.reputation)[i]].level];
			if(Player.reputation[Object.keys(Player.reputation)[i]].level >=2) {
				document.getElementById("reputationBar").style.textIndent = ((250-document.getElementById("widthPadding").clientWidth)/2) + "px";
				document.getElementById("reputationBar").style.width = Player.reputation[Object.keys(Player.reputation)[i]].score*25+"px";
				document.getElementById("reputationBar").style.left = "0px";
			}
			else {
				document.getElementById("reputationBar").style.textIndent = ((250-document.getElementById("widthPadding").clientWidth)/2)-Player.reputation[Object.keys(Player.reputation)[i]].score*25+ "px";
				document.getElementById("reputationBar").style.width = (10-Player.reputation[Object.keys(Player.reputation)[i]].score)*25+"px";
				document.getElementById("reputationBar").style.left = Player.reputation[Object.keys(Player.reputation)[i]].score*25+"px";
			}
		}
	}
}

Dom.reputation.upLevel = function(Area){
			console.log("uplevel");
	Area.score -= 11;
	Area.level++;
	if(Area.level > 2) {
		document.getElementById("reputationBar").style.backgroundColor = "green";
	}
	else if(Area.level < 2) {
		document.getElementById("reputationBar").style.backgroundColor = "red";
	}
	else {
		document.getElementById("reputationBar").style.backgroundColor = "gold";
	}
	this.update();
}
Dom.reputation.downLevel = function(Area){
			console.log("downlevel");
	Area.score += 11;
	Area.level--;
	if(Area.level < 2){
		document.getElementById("reputationBar").style.backgroundColor = "red";
	}else if(Area.level > 2){
		document.getElementById("reputationBar").style.backgroundColor = "green";
	}else{
		document.getElementById("reputationBar").style.backgroundColor = "gold";
	}
	this.update();
}

// display inventory information next to item
Dom.inventory.displayInformation = function(y,array){
	document.getElementById("itemInformation").hidden = true;
	if(array[0].name != ""){
		document.getElementById("itemInformation").innerHTML = "";
		document.getElementById("itemInformation").hidden = false;
		document.getElementById("itemInformation").style.marginTop = y;
		document.getElementById("itemInformation").innerHTML = "<div class='triangleLeft'></div><div class='innerTriangleLeft'></div>" + array[0].name;
	}
}

Dom.merchant.displayInformation = function(y,array,num) {
	document.getElementById("informationMerchant").innerHTML = "";
	document.getElementById("informationMerchant").hidden = false;
	document.getElementById("informationMerchant").style.top = y+"px";
	document.getElementById("informationMerchant").innerHTML = "<div class='triangleLeft'></div><div class='innerTriangleLeft'></div>" + array[num].name;
}

Dom.quests.displayInformation = function(y,array,total){
	document.getElementById("questInformation").innerHTML = "";
	document.getElementById("questInformation").hidden = false;
	document.getElementById("questInformation").style.top = document.getElementById("questStartGold").getBoundingClientRect().top+"px";
	document.getElementById("questInformation").style.left = 785-(total*35)+(y*70) +"px";
	document.getElementById("questInformation").innerHTML = "<div class='rectangleRightUp'></div><div class='rectangleRightDown'></div><div class='triangleRight'></div><div class='innerTriangleRight'></div>" + array[y].name;
}

Dom.quests.displayFinishInformation = function(y,array,total){
	console.log("yes");
	document.getElementById("questFinishInformation").innerHTML = "";
	document.getElementById("questFinishInformation").hidden = false;
	document.getElementById("questFinishInformation").style.top = document.getElementById("questFinishGold").getBoundingClientRect().top+"px";
	document.getElementById("questFinishInformation").style.left = 785-(total*35)+(y*70) +"px";
	document.getElementById("questFinishInformation").innerHTML = "<div class='rectangleRightUp'></div><div class='rectangleRightDown'></div><div class='triangleRight'></div><div class='innerTriangleRight'></div>" + array[y].name;
}

Dom.currentlyDisplayed = ""; // the currently displayed quest, merchant, etc. (something that can't be overridden)

// display quest start page
Dom.quest.start = function(quest) { // quest is passed in as parameter
	if(Dom.changeBook("questStart", false)) {
		document.getElementById("questStartQuest").innerHTML = quest.quest;
		document.getElementById("questStartName").innerHTML = quest.startName;
		document.getElementById("questStartChat").innerHTML = quest.startChat;
		document.getElementById("questStartObjectives").innerHTML = "";
		for(var i = 0; i < quest.objectives.length; i++){
			document.getElementById("questStartObjectives").innerHTML += quest.objectives[i] + "<br>";
		}
		if(quest.rewards.gold == 0){
			document.getElementById("questStartGold").style.display = "none";
			document.getElementById("goldClass").style.display = "none";
		}else{
			document.getElementById("questStartGold").innerHTML = quest.rewards.gold;
		}
		if(quest.rewards.xp == 0){
			document.getElementById("questStartXP").style.display = "none";
			document.getElementById("xpClass").style.display = "none";
		}else{
			document.getElementById("questStartXP").innerHTML = quest.rewards.xp;
		}
		document.getElementById("questStartItems").innerHTML = "";
		for(var i = 0; i < quest.rewards.items.length; i++){
			document.getElementById("questStartItems").innerHTML += "<img src=" + quest.rewards.items[i].image + " class='theseQuestOptions'></img>&nbsp;&nbsp;";
		}
		for(let x = 0; x < document.getElementsByClassName("theseQuestOptions").length; x++){
			document.getElementsByClassName("theseQuestOptions")[x].onmouseover = function() {
				Dom.quests.displayInformation(x, quest.rewards.items,document.getElementsByClassName("theseQuestOptions").length);
			};
			document.getElementsByClassName("theseQuestOptions")[x].onmouseleave = function() {
				Dom.expand("questInformation");
			}
		}
		Dom.currentlyDisplayed = quest;
	}
}

// display quest finish page
Dom.quest.finish = function(quest){
	Dom.changeBook("questFinish", false);
	document.getElementById("questFinishQuest").innerHTML = quest.quest;
	document.getElementById("questFinishName").innerHTML = quest.finishName;
	document.getElementById("questFinishChat").innerHTML = quest.finishChat;
	if(quest.rewards.gold == 0){
		document.getElementById("questFinishGold").style.display = "none";
		document.getElementById("goldClass").style.display = "none";
	}else{
		document.getElementById("questFinishGold").innerHTML = quest.rewards.gold;
	}
	if(quest.rewards.xp == 0){
		document.getElementById("questFinishXP").style.display = "none";
		document.getElementById("xpClass").style.display = "none";
	}else{
		document.getElementById("questFinishXP").innerHTML = quest.rewards.xp;
	}
	document.getElementById("questStartItems").innerHTML = "";
	for(var i = 0; i < quest.rewards.items.length; i++){
		document.getElementById("questFinishItems").innerHTML += "<img src=" + quest.rewards.items[i].image + " class='theseQuestOptions'></img>&nbsp;&nbsp;";
	}
	for(let x = 0; x < document.getElementsByClassName("theseQuestOptions").length; x++){
		document.getElementsByClassName("theseQuestOptions")[x].onmouseover = function() {
			Dom.quests.displayFinishInformation(x, quest.rewards.items,document.getElementsByClassName("theseQuestOptions").length);
		};
		document.getElementsByClassName("theseQuestOptions")[x].onmouseleave = function() {
			Dom.expand("questFinishInformation");
		}
	}
	Player.gold += parseInt(quest.rewards.gold);
	Player.xp += parseInt(quest.rewards.xp);
	Dom.inventory.updateGold();
	Dom.quest.give(quest.rewards.items[0]);
	Dom.currentlyDisplayed = quest;
	
	// reputation rewards
	if(quest.rewards.reputation != undefined) {
		for(var i = 0; i < Object.keys(quest.rewards.reputation).length; i++) {
			Player.reputation[Object.keys(quest.rewards.reputation)[i]].score += quest.rewards.reputation[Object.keys(quest.rewards.reputation)[i]];
		}
	}
	Dom.reputation.update();
}

// quest accepted
Dom.quest.accept = function(){
	Dom.quests.activeQuests(Dom.currentlyDisplayed);
	
	// check if there is a quest start function
	if (Dom.currentlyDisplayed.onQuestStart != undefined) {
		Dom.currentlyDisplayed.onQuestStart();
	}
	
	// switch off quest start screen (and to quest log)
	Dom.changeBook(Dom.previous, true); // also resets Dom.currentlyDisplayed
}

Dom.quest.acceptRewards = function(){
	for(var i = 0; i < Dom.quests.activeQuestArray.length; i++){
		if(Dom.quests.activeQuestArray[i] == Dom.currentlyDisplayed.quest){
			Dom.quests.activeQuestArray.splice(i,1);
			Dom.quests.activeQuestUseArray.splice(i,1);
		}
	}
	Dom.quests.completed(Dom.currentlyDisplayed);
	
	// check if there is a quest start function
	if (Dom.currentlyDisplayed.onQuestFinish != undefined) {
		Dom.currentlyDisplayed.onQuestFinish();
	}
	
	// switch off quest start screen (and to quest log)
	Dom.changeBook(Dom.previous, true); // also resets Dom.currentlyDisplayed
	Dom.quests.activeQuests(undefined);
}

Dom.quests.activeQuestArray = [];
Dom.quests.activeQuestUseArray = [];
Dom.quests.completedQuestArray = [];
Dom.quests.questNum = 0;
Dom.quests.questString = "";
// change to active
Dom.quests.activeQuests = function(quest){
	if(quest != undefined){
		Dom.quests.activeQuestArray.push(quest.quest);
		Dom.quests.activeQuestUseArray.push(quest);
	}
	document.getElementById("activeQuestBox").style.textAlign = "left";
	document.getElementById("activeQuestBox").innerText = "";
	for(var x = 0; x < Dom.quests.activeQuestArray.length; x++){
		/*document.getElementById("activeQuestBox").style.textAlign = "left";
		if(Dom.quests.questNum == 0){
			document.getElementById("activeQuestBox").innerText = "";
		}*/
		document.getElementById("activeQuestBox").innerHTML += "<strong>" + Dom.quests.activeQuestUseArray[x].quest + "</strong>";
		for(var i = 0; i < Dom.quests.activeQuestUseArray[x].objectives.length; i++){
			document.getElementById("activeQuestBox").innerHTML += "<br>" + Dom.quests.activeQuestUseArray[x].objectives[i];
			console.log(Dom.quests.activeQuestUseArray[x].isCompleted());
			if(Dom.quests.activeQuestUseArray[x].isCompleted()[i] && i != Dom.quests.activeQuestUseArray[x].objectives.length-1){
				document.getElementById("activeQuestBox").innerHTML += " &#10004;";
			}
		}
		if(quest != undefined){
			document.getElementById("activeQuestBox").innerHTML += "<br>";
			Dom.quests.questNum += 30+(18*Dom.quests.activeQuestUseArray[x].objectives.length);
			Dom.quests.questString = JSON.stringify(Dom.quests.questNum+10)+"px";
			document.getElementById("activeQuestBox").style.height = Dom.quests.questString;
		}
	}
	if(Dom.quests.activeQuestArray.length == 0){
		document.getElementById("activeQuestBox").style.height = "40px";
		document.getElementById("activeQuestBox").style.textAlign = "center";
		document.getElementById("activeQuestBox").innerText = "You have no active quests";
	}
}

Dom.quests.completedQuestNum = 0;
Dom.quests.completedQuestString = "";
Dom.quests.completed = function(quest){
	Dom.changeBook(Dom.previous, true);
	Dom.quests.completedQuestArray.push(quest.quest);
	document.getElementById("completedQuestBox").style.textAlign = "left";
	if(Dom.quests.completedQuestNum == 0){
		document.getElementById("completedQuestBox").innerText = "";
	}
	document.getElementById("completedQuestBox").innerHTML += quest.quest + "<br>";
	Dom.quests.completedQuestNum += 18;
	Dom.quests.questString = JSON.stringify(Dom.quests.questNum+10)+"px";
	document.getElementById("activeQuestBox").style.height = Dom.quests.questString;
	if(Dom.quests.questNum < 50){
		document.getElementById("activeQuestBox").style.height = "40px";
	}
}

Dom.merchant.page = function(title,greeting,options){
	Dom.changeBook("merchantPage", false);
	Dom.currentlyDisplayed = title;
	Dom.changeBook("merchantPage", false, 1);
	document.getElementById("merchantPageTitle").innerHTML = title;
	document.getElementById("merchantPageChat").innerHTML = greeting;
	document.getElementById("merchantPageOptions").innerHTML = "";
	document.getElementById("merchantPageBuy").innerHTML = "";
	for(let i = 0; i < options.length; i++){
		document.getElementById("merchantPageOptions").innerHTML += "<img src=" + options[i].image + " class='theseOptions' style='border: 5px solid #886622;'></img><br><br>";
		document.getElementById("merchantPageBuy").innerHTML += "<div class='buy'>Buy for: " + options[i].cost + " gold</div><br>";
		for(let x = 0; x < document.getElementsByClassName("buy").length; x++){
			document.getElementsByClassName("buy")[x].onclick = function() {
				Dom.merchant.buy(options[x]);
			};
		}
		for(let x = 0; x < document.getElementsByClassName("theseOptions").length; x++){
			document.getElementsByClassName("theseOptions")[x].onmouseover = function() {
				Dom.merchant.displayInformation(document.getElementsByClassName("theseOptions")[x].getBoundingClientRect().top, options, x);
			};
			document.getElementsByClassName("theseOptions")[x].onmouseleave = function() {
				Dom.expand("informationMerchant");
			}
		}
	}
}

// buy item from merchant
Dom.merchant.buy = function(item){
	if(Player.gold >= item.cost){
		Player.gold -= item.cost;
		Dom.inventory.updateGold();
		Dom.quest.give(item);
		Dom.chat.insert("You bought a " + item.name + ".", 100);
	}
	else {
		alert("You don't have sufficient funds to buy that item.");
	}
}

Dom.quest.give = function(item){
	if(item.type == "helm"){Player.inventory.helm.push(item);}
	if(item.type == "chest"){Player.inventory.chest.push(item);}
	if(item.type == "greaves"){Player.inventory.greaves.push(item);}
	if(item.type == "boots"){Player.inventory.boots.push(item);}
	if(item.type == "sword" || item.type == "staff" || item.type == "bow" || item.type == "rod"){Player.inventory.weapon.push(item);}
}

Dom.quests.allQuestNum = 18;
Dom.quests.allQuestString = "";
for(var i = 0; i < Object.keys(quests).length; i++){
	for(var x = 0; x < quests[Object.keys(quests)[i]].length; x++){
		document.getElementById("allQuestBox").innerHTML += quests[Object.keys(quests)[i]][x].quest + "<br>";
		//for(var y = 0; y < quests[Object.keys(quests)[i]][x].objectives.length; y++){
			//document.getElementById("allQuestBox").innerHTML += quests[Object.keys(quests)[i]][x].objectives[y] + "<br>";
		//}
		//document.getElementById("allQuestBox").innerHTML += "<br>";
		Dom.quests.allQuestNum += 18;
		Dom.quests.allQuestString = JSON.stringify(Dom.quests.allQuestNum)+"px";
		document.getElementById("allQuestBox").style.height = Dom.quests.allQuestString;
	}
}