// DOM function arrays
var Dom = {
	elements: {
		chatPage: document.getElementById("chatPage"),
		inventoryPage: document.getElementById("inventoryPage"),
		questsPage: document.getElementById("questsPage"),
		settingsPage: document.getElementById("settingsPage"),
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
	settings: {},
	quest: {},
	merchant: {},
};

// change currently displayed page
// returns if the page was changed or not
Dom.changeBook = function(page, override) {
	//override says if the function should be run regardless of if the player has a quest active (e.g: declining a quest or closing a merchant)
	if(this.currentlyDisplayed == "" || override) { // check the player doesn't have a quest active
		// hide all pages
		this.elements.chatPage.hidden = true;
		this.elements.inventoryPage.hidden = true;
		this.elements.questsPage.hidden = true;
		this.elements.settingsPage.hidden = true;
		this.elements.questStart.hidden = true;
		this.elements.questFinish.hidden = true;
		this.elements.merchantPage.hidden = true;
		document.getElementById(page).hidden = false;
		
		if(override) {
			this.currentlyDisplayed = ""; // reset current display if it is overriden
		}
		
		return true;
	}
	else {
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

// insert text in chat page
Dom.chat.insert = function(text, delay) {
	this.contents.push(text);
	setTimeout(function() {
		chatPage.innerHTML = '<p>' + text + '</p>' + chatPage.innerHTML;
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
		console.log(block);
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
	}
	if(block == completedQuestBox && Dom.quests.completedQuestArray.length == 0){
		document.getElementById("completedQuestBox").style.textAlign = "center";
		document.getElementById("completedQuestBox").innerText = "You have no completed quests";
	}
}

// arrange position of bookmarks
Dom.settings.bookmarkPosition = function() {
	// VERY INEFFICIENT (css continues to be appended - edit .style of each element instead?)
	if(document.getElementById("bottom").checked) { // arrange bookmarks at bottom of screen
		const css = document.createElement( 'style' );
		css.textContent = `
		#changeChat, #changeInventory, #changeQuests, #changeSettings {
			top: 619px;
			transform: rotate(90deg);
			transform-origin: top left;
		}
		#changeChat {
		left: 710px;
		}
		#changeInventory {
		left: 780px;
		}
		#changeQuests {
		left: 850px;
		}
		#changeSettings {
		left: 920px;
		}
		#chatImage, #inventoryImage, #questsImage, #settingsImage{
			top: 649px;
		}
		#chatImage{
			left: 669px;
		}
		#inventoryImage{
			left: 739px;
		}
		#questsImage{
			left: 820px;
		}
		#settingsImage{
			left: 875px;
		}
		`;
		document.head.appendChild( css );
	}
	else { // arrange bookmarks at top of screen
		const css = document.createElement( 'style' );
		css.textContent = `
		#changeChat, #changeInventory, #changeQuests, #changeSettings {
			left: 1162px;
			transform: rotate(0deg);
			transform-origin: top left;
		}
		#changeChat {
		top: 38px;
		}
		#changeInventory {
		top: 108px;
		}
		#changeQuests {
		top: 178px;
		}
		#changeSettings {
		top: 248px;
		}
		#chatImage, #inventoryImage, #questsImage, #settingsImage{
			left: 1197px;
		}
		#chatImage{
			top: 43px;
		}
		#inventoryImage{
			top: 113px;
		}
		#questsImage{
			top: 183px;
			left: 1212px;
		}
		#settingsImage {
			top: 253px;
		}
		`;
	document.head.appendChild( css );
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

// display inventory information next to item
Dom.inventory.displayInformation = function(y,array){
	document.getElementById("itemInformation").innerHTML = "";
	document.getElementById("itemInformation").hidden = false;
	document.getElementById("itemInformation").style.marginTop = y;
	document.getElementById("itemInformation").innerHTML = "<div class='triangleLeft'></div><div class='innerTriangleLeft'></div>" + array[0].name;
	/*document.getElementById("itemInformation").innerHTML = "<div class='triangleLeft'></div><div class='innerTriangleLeft'></div>";
	for(var i = 0; i < Object.keys(array[num].stats).length; i++) {
		document.getElementById("itemInformation").innerHTML += "<br>";
		document.getElementById("itemInformation").innerHTML += Object.keys(array[num].stats)[i] + ": " + array[num].stats[Object.keys(array[num].stats)[i]];
	}*/
}

Dom.merchant.displayInformation = function(y,array,num) {
	document.getElementById("informationMerchant").innerHTML = "";
	document.getElementById("informationMerchant").hidden = false;
	document.getElementById("informationMerchant").style.top = 142+(y*82)+"px";
	document.getElementById("informationMerchant").innerHTML = "<div class='triangleLeft'></div><div class='innerTriangleLeft'></div>" + array[num].name;
}

Dom.quests.displayInformation = function(y,array,total){
	console.log(array);
	document.getElementById("questInformation").innerHTML = "";
	document.getElementById("questInformation").hidden = false;
	document.getElementById("questInformation").style.top = "342.5px";
	document.getElementById("questInformation").style.left = 785-(total*35)+(y*70) +"px";
	document.getElementById("questInformation").innerHTML = "<div class='rectangleRightUp'></div><div class='rectangleRightDown'></div><div class='triangleRight'></div><div class='innerTriangleRight'></div>" + array[y].name;
}

//ignore this
function npcDomCode(){
	Dom.quest.finish(quests.eaglecrestLoggingCamp[0]);
}

//ignore this
function merchantDomCode(){
	Dom.merchant.page(prompt("Please enter merchant name"),prompt("Please enter merchant chat"),[prompt("Please enter merchant option"),prompt("Please enter anpother merchant option")]);
}

Dom.currentlyDisplayed = ""; // the currently displayed quest, merchant, etc. (something that can't be overridden)

// display quest start page
Dom.quest.start = function(quest) { // quest is passed in as parameter
	if(Dom.changeBook("questStart", false)) {
		document.getElementById("questStartQuest").innerHTML = quest.quest;
		document.getElementById("questStartName").innerHTML = quest.name;
		document.getElementById("questStartChat").innerHTML = quest.chat;
		document.getElementById("questStartObjectives").innerHTML = "";
		for(var i = 0; i < quest.objectives.length; i++){
			document.getElementById("questStartObjectives").innerHTML += quest.objectives[i] + "<br>";
		}
		if(quest.rewards.gold == 0){
			document.getElementById("questStartGold").hidden = true;
			console.log(document.getElementById("questStartGold"));
		}else{
			document.getElementById("questStartGold").hidden = false;
			document.getElementById("questStartGold").innerHTML = quest.rewards.gold;
		}
		document.getElementById("questStartXP").innerHTML = quest.rewards.xp;
		console.log(quest.rewards.items);
		document.getElementById("questStartItems").innerHTML = "";
		for(var i = 0; i < quest.rewards.items.length; i++){
			document.getElementById("questStartItems").innerHTML += "<img src=" + quest.rewards.items[i].image + " class='theseQuestOptions'></img>&nbsp;&nbsp;";
		}
		console.log(document.getElementById("questStartItems").innerHTML);
		for(let x = 0; x < document.getElementsByClassName("theseQuestOptions").length; x++){
			document.getElementsByClassName("theseQuestOptions")[x].onmouseover = function() {
				Dom.quests.displayInformation(x, quest.rewards.items,document.getElementsByClassName("theseQuestOptions").length);
			};
			document.getElementsByClassName("theseQuestOptions")[x].onmouseleave = function() {
				Dom.expand("questInformation");
				//document.getElementById("informationMerchant").hidden = true;
			}
		}
		Dom.currentlyDisplayed = quest;
	}
}

// display quest finish page
Dom.quest.finish = function(quest){
	Dom.changeBook("questFinish", false);
	document.getElementById("questFinishQuest").innerHTML = quest.quest;
	document.getElementById("questFinishName").innerHTML = quest.name;
	document.getElementById("questFinishChat").innerHTML = quest.chat;
	document.getElementById("questFinishGold").innerHTML = quest.rewards.gold;
	document.getElementById("questFinishXP").innerHTML = quest.rewards.xp;
	Player.gold += parseInt(quest.rewards.gold);
	Player.xp += parseInt(quest.rewards.xp);
	Dom.inventory.updateGold();
	Dom.currentlyDisplayed = quest;
}

// quest accepted
Dom.quest.accept = function(){
	Dom.quests.activeQuests(Dom.currentlyDisplayed);
	
	// check if there is a quest start function
	if (Dom.currentlyDisplayed.onQuestStart != undefined) {
		Dom.currentlyDisplayed.onQuestStart();
	}
	
	// switch off quest start screen (and to quest log)
	Dom.changeBook("questsPage", true); // also resets Dom.currentlyDisplayed
}

Dom.quest.acceptRewards = function(){
	console.log(Dom.currentlyDisplayed);
	for(var i = 0; i < Dom.quests.activeQuestArray.length; i++){
		console.log(Dom.currentlyDisplayed);
		if(Dom.quests.activeQuestArray[i] == Dom.currentlyDisplayed.quest){
			console.log("yes");
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
	Dom.changeBook("questsPage", true); // also resets Dom.currentlyDisplayed
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
	console.log(Dom.quests.activeQuestArray);
	document.getElementById("activeQuestBox").style.textAlign = "left";
	document.getElementById("activeQuestBox").innerText = "";
	for(var x = 0; x < Dom.quests.activeQuestArray.length; x++){
		/*document.getElementById("activeQuestBox").style.textAlign = "left";
		if(Dom.quests.questNum == 0){
			document.getElementById("activeQuestBox").innerText = "";
		}*/
		document.getElementById("activeQuestBox").innerHTML += "<strong>" + Dom.quests.activeQuestUseArray[x].quest + "</strong><br>";
		for(var i = 0; i < Dom.quests.activeQuestUseArray[x].objectives.length; i++){
			document.getElementById("activeQuestBox").innerHTML += Dom.quests.activeQuestUseArray[x].objectives[i] + "<br>";
		}
		document.getElementById("activeQuestBox").innerHTML += "<br>";
		Dom.quests.questNum += 30+(18*Dom.quests.activeQuestUseArray[x].objectives.length);
		Dom.quests.questString = JSON.stringify(Dom.quests.questNum+10)+"px";
		document.getElementById("activeQuestBox").style.height = Dom.quests.questString;
	}
	if(Dom.quests.activeQuestArray.length == 0){
		document.getElementById("activeQuestBox").style.height = "40px";
		document.getElementById("activeQuestBox").style.textAlign = "center";
		document.getElementById("activeQuestBox").innerText = "You have no completed quests";
	}
}

Dom.quests.completedQuestNum = 0;
Dom.quests.completedQuestString = "";
Dom.quests.completed = function(quest){
	Dom.changeBook('questsPage', true);
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
//function Dom.merchant.page(title,greeting,options){
	Dom.changeBook("merchantPage", false);
	Dom.currentlyDisplayed = "merchant";
	document.getElementById("merchantPageTitle").innerHTML = title;
	document.getElementById("merchantPageChat").innerHTML = greeting; //jt todo: change greeting to chat when chat becomes book.chat
	Dom.chat.insert("<strong>" + title + ": " + "</strong>" + greeting, 100);
	document.getElementById("merchantPageOptions").innerHTML = "";
	document.getElementById("merchantPageBuy").innerHTML = "";
	for(let i = 0; i < options.length; i++){
		//document.getElementById("merchantPageOptions").innerHTML += "<img src='./assets/items/sword.png' style='border: 5px solid #886622;' onmouseover='Dom.merchant.displayInformation(" + i,options,i + ")'onmouseleave='hideInformationMerchant()'></img><br><br>";
		document.getElementById("merchantPageOptions").innerHTML += "<img src=" + options[i].image + " class='theseOptions' style='border: 5px solid #886622;'></img><br><br>";
		document.getElementById("merchantPageBuy").innerHTML += "<div class='buy'>Buy for: " + options[i].cost + " gold</div><br>";
		for(let x = 0; x < document.getElementsByClassName("buy").length; x++){
			document.getElementsByClassName("buy")[x].onclick = function() {
				Dom.merchant.buy(options[x]);
			};
		}
		for(let x = 0; x < document.getElementsByClassName("theseOptions").length; x++){
			document.getElementsByClassName("theseOptions")[x].onmouseover = function() {
				Dom.merchant.displayInformation(x, options, x);
			};
			document.getElementsByClassName("theseOptions")[x].onmouseleave = function() {
				Dom.expand("informationMerchant");
				//document.getElementById("informationMerchant").hidden = true;
			}
		}
	}
}

// buy item from merchant
Dom.merchant.buy = function(item){
	if(Player.gold >= item.cost){
		Player.gold -= item.cost;
		Dom.inventory.updateGold();
		Player.inventory.weapon.push(item);
	}
	else {
		alert("You don't have sufficient funds to buy that item.");
	}
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
		console.log(Dom.quests.allQuestString);
		document.getElementById("allQuestBox").style.height = Dom.quests.allQuestString;
	}
}