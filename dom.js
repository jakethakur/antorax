var Dom = { // DOM function arrays
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
		identifierPage: document.getElementById("identifierPage"),
		identifiedPage: document.getElementById("identifiedPage"),
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
	identifier: {},
};
Dom.previous = "instructionsPage"; // change currently displayed page
Dom.changeBook = function(page, override, x) { // returns if the page was changed or not
	//override says if the function should be run regardless of if the player has a quest active (e.g: declining a quest or closing a merchant)
	if(this.currentlyDisplayed == "" || override) { // check the player doesn't have a quest active
		// hide all pages
		if(page != "questStart" && page != "questFinish" && page != "merchantPage" && page != "identifierPage" && page != "identifiedPage"){
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
		this.elements.identifierPage.hidden = true;
		this.elements.identifiedPage.hidden = true;
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
			for(var i = 0; i < document.getElementsByClassName("closeClass").length; i++){
				document.getElementsByClassName("closeClass")[i].style.border = "5px solid #886622";
			}
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

// update the DOM display of gold and xp
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
		this.displayInformation("30px",Player.inventory.helm);
	}
	if(equipmentType == "chest"){
		Player.inventory.chest = array;
		this.displayInformation("100px",Player.inventory.chest);
	}
	if(equipmentType == "greaves"){
		Player.inventory.greaves = array;
		this.displayInformation("170px",Player.inventory.greaves);
	}
	if(equipmentType == "boots"){
		Player.inventory.boots = array;
		this.displayInformation("240px",Player.inventory.boots);
	}
	if(equipmentType == "weapon"){
		Player.inventory.weapon = array;
		this.displayInformation("325px",Player.inventory.weapon);
	}
}

Dom.inventory.stats = function(){
	document.getElementById("statInfo").innerHTML = "<strong>Damage: <br>Defence: <br>Critical Chance: <br>Focus Speed: <br>Health Regen: <br>Looting: <br>Poison: <br>Reflection: <br>Walk Speed: </strong>";
}
Dom.inventory.stats();

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
		document.getElementById("itemInformation").hidden = false;
		document.getElementById("itemInformation").style.top = y;
		document.getElementById("itemInformation").innerHTML = "<div class='triangleLeft'></div><div id='triangle' class='innerTriangleLeft'></div><p id='name'><b>"+array[0].name+"</b></p><p id='stats'></p><p id='lore'></p>";
		if(array[0].rarity == "common"){
			document.getElementById("name").style.color = "black";
		}else if(array[0].rarity == "unique"){
			document.getElementById("name").style.color = "orange";
		}else{
			document.getElementById("name").style.color = "purple";
		}
		document.getElementById("stats").innerHTML = "Tier: "+array[0].tier;
		for(var i = 0; i < Object.keys(array[0].stats).length; i++){
			var replaceStat = Object.keys(array[0].stats)[i].replace("_"," ");
			document.getElementById("stats").innerHTML += "<br>"+replaceStat+": "+array[0].stats[Object.keys(array[0].stats)[i]];
		}
		if(array[0].lore != undefined){
			document.getElementById("lore").innerHTML += "<i>"+array[0].lore+"</i>";
		}
		document.getElementById("triangle").style.bottom = document.getElementById("itemInformation").offsetHeight - 50 + "px";
	}
}

Dom.merchant.displayInformation = function(y,array,num) {
	document.getElementById("informationMerchant").hidden = false;
	document.getElementById("informationMerchant").style.top = y+"px";
	document.getElementById("informationMerchant").innerHTML = "<div class='triangleLeft'></div><div id='merchantTriangle' class='innerTriangleLeft'></div><p id='merchantName'><b>"+array[num].name+"</b></p><p id='merchantStats'></p><p id='merchantLore'></p>";
	if(array[num].rarity == "common"){
		document.getElementById("merchantName").style.color = "black";
	}else if(array[num].rarity == "unique"){
		document.getElementById("merchantName").style.color = "orange";
	}else{
		document.getElementById("merchantName").style.color = "purple";
	}
	document.getElementById("merchantStats").innerHTML = "Tier: "+array[num].tier;
	for(var i = 0; i < Object.keys(array[num].stats).length; i++){
		var replaceStat = Object.keys(array[num].stats)[i].replace("_"," ");
		document.getElementById("merchantStats").innerHTML += "<br>"+replaceStat+": "+array[num].stats[Object.keys(array[num].stats)[i]];
	}
	if(array[num].lore != undefined){
		document.getElementById("merchantLore").innerHTML += "<i>"+array[num].lore+"</i>";
	}
	document.getElementById("merchantTriangle").style.bottom = document.getElementById("informationMerchant").offsetHeight - 50 + "px";
}

Dom.quests.displayInformation = function(num,array,total){
	document.getElementById("questInformation").hidden = false;
	document.getElementById("questInformation").style.top = document.getElementById("questStartGold").getBoundingClientRect().top+"px";
	document.getElementById("questInformation").style.left = 780-(total*35)+(num*70) +"px";
	document.getElementById("questInformation").innerHTML = "<div class='rectangleRightUp' id='questRectangle'></div><div class='rectangleRightDown'></div><div class='triangleRight'></div><div id='questTriangle' class='innerTriangleRight'></div><p id='questName'><b>"+array[num].name+"</b></p><p id='questStats'></p><p id='questLore'></p>";
	if(array[num].rarity == "common"){
		document.getElementById("questName").style.color = "black";
	}else if(array[num].rarity == "unique"){
		document.getElementById("questName").style.color = "orange";
	}else{
		document.getElementById("questName").style.color = "purple";
	}
	document.getElementById("questStats").innerHTML = "Tier: "+array[num].tier;
	for(var i = 0; i < Object.keys(array[num].stats).length; i++){
		var replaceStat = Object.keys(array[num].stats)[i].replace("_"," ");
		document.getElementById("questStats").innerHTML += "<br>"+replaceStat+": "+array[num].stats[Object.keys(array[num].stats)[i]];
	}
	if(array[num].lore != undefined){
		document.getElementById("questLore").innerHTML += "<i>"+array[num].lore+"</i>";
	}
	document.getElementById("questTriangle").style.bottom = document.getElementById("questInformation").offsetHeight - 50 + "px";
	document.getElementById("questRectangle").style.bottom = document.getElementById("questInformation").offsetHeight - 50 + "px";
}

Dom.quests.displayFinishInformation = function(num,array,total){
	document.getElementById("questFinishInformation").hidden = false;
	document.getElementById("questFinishInformation").style.top = document.getElementById("questFinishGold").getBoundingClientRect().top+"px";
	document.getElementById("questFinishInformation").style.left = 780-(total*35)+(num*70) +"px";
	document.getElementById("questFinishInformation").innerHTML = "<div class='rectangleRightUp' id='finishRectangle'></div><div class='rectangleRightDown'></div><div class='triangleRight'></div><div id='finishTriangle' class='innerTriangleRight'></div><p id='finishName'><b>"+array[num].name+"</b></p><p id='finishStats'></p><p id='finishLore'></p>";
	if(array[num].rarity == "common"){
		document.getElementById("finishName").style.color = "black";
	}else if(array[num].rarity == "unique"){
		document.getElementById("finishName").style.color = "orange";
	}else{
		document.getElementById("finishName").style.color = "purple";
	}
	document.getElementById("finishStats").innerHTML = "Tier: "+array[num].tier;
	for(var i = 0; i < Object.keys(array[num].stats).length; i++){
		var replaceStat = Object.keys(array[num].stats)[i].replace("_"," ");
		document.getElementById("finishStats").innerHTML += "<br>"+replaceStat+": "+array[num].stats[Object.keys(array[num].stats)[i]];
	}
	if(array[num].lore != undefined){
		document.getElementById("finishLore").innerHTML += "<i>"+array[num].lore+"</i>";
	}
	document.getElementById("finishTriangle").style.bottom = document.getElementById("questFinishInformation").offsetHeight - 50 + "px";
	document.getElementById("finishRectangle").style.bottom = document.getElementById("questFinishInformation").offsetHeight - 50 + "px";
}

Dom.identifier.displayInformation = function(num,array){
	document.getElementById("identifierInformation").hidden = false;
	document.getElementById("identifierInformation").style.top = document.getElementById("identifierPageOption").getBoundingClientRect().top - 46 + "px";
	document.getElementById("identifierInformation").style.left = document.getElementById("identifierPageOption").getBoundingClientRect().left + 90 +"px";
	document.getElementById("identifierInformation").innerHTML = "<div class='rectangleLeftUp' id='identifierRectangle'></div><div class='rectangleLeftDown'></div><div class='triangleLeft'></div><div id='identifierTriangle' class='innerTriangleLeft'></div><p id='identifierName'><b> Unidentified "+array[num].type+"</b></p><p id='identifierStats'></p><p id='identifierLore'></p>";
	document.getElementById("identifierStats").innerHTML = "Tier: "+array[num].tier;
	document.getElementById("identifierLore").innerHTML += "Area: "+array[num].area;
	document.getElementById("identifierTriangle").style.bottom = document.getElementById("identifierInformation").offsetHeight - 50 + "px";
	document.getElementById("identifierRectangle").style.bottom = document.getElementById("identifierInformation").offsetHeight - 50 + "px";
}
Dom.identifier.displayIdentifiedInformation = function(num,array){
	document.getElementById("identifiedInformation").hidden = false;
	document.getElementById("identifiedInformation").style.top = document.getElementById("identifiedPageOption").getElementsByTagName("img")[0].getBoundingClientRect().top + "px";
	document.getElementById("identifiedInformation").style.left = document.getElementById("identifiedPageOption").getElementsByTagName("img")[0].getBoundingClientRect().left + 90 +"px";
	document.getElementById("identifiedInformation").innerHTML = "<div class='triangleLeft'></div><div id='identifiedTriangle' class='innerTriangleLeft'></div><p id='identifiedName'><b>" + array[num].name + "</b></p><p id='identifiedStats'></p><p id='identifiedLore'></p>";
	if(array[num].rarity == "common"){
		document.getElementById("identifiedName").style.color = "black";
	}else if(array[num].rarity == "unique"){
		document.getElementById("identifiedName").style.color = "orange";
	}else{
		document.getElementById("identifiedName").style.color = "purple";
	}
	document.getElementById("identifiedStats").innerHTML = "Tier: "+array[num].tier;
	for(var i = 0; i < Object.keys(array[num].stats).length; i++){
		var replaceStat = Object.keys(array[num].stats)[i].replace("_"," ");
		document.getElementById("identifiedStats").innerHTML += "<br>"+replaceStat+": "+array[num].stats[Object.keys(array[num].stats)[i]];
	}
	if(array[num].lore != undefined){
		document.getElementById("identifiedLore").innerHTML += "<i>"+array[num].lore+"</i>";
	}
	document.getElementById("identifiedTriangle").style.bottom = document.getElementById("identifiedInformation").offsetHeight - 50 + "px";
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
Dom.quests.activeQuests = function(quest){ // when a quest is started or ended...
	if(quest != undefined){ // if a quest is started...
		Dom.quests.activeQuestArray.push(quest.quest); // adds the quest name to the array of active quest names
		Dom.quests.activeQuestUseArray.push(quest); // adds the quest to the array of active quests
	}
	document.getElementById("activeQuestBox").style.textAlign = "left"; // the text in the box is written from the left
	document.getElementById("activeQuestBox").innerText = ""; // sets the text in the box to none
	for(var x = 0; x < Dom.quests.activeQuestArray.length; x++){ // repeats for every active quest
		document.getElementById("activeQuestBox").innerHTML += "<strong>" + Dom.quests.activeQuestUseArray[x].quest + "</strong>"; // writes the name of the quest in the box
		for(var i = 0; i < Dom.quests.activeQuestUseArray[x].objectives.length; i++){ // repeats for each objective
			document.getElementById("activeQuestBox").innerHTML += "<br>" + Dom.quests.activeQuestUseArray[x].objectives[i]; // writes the objective in the box
			if(Dom.quests.activeQuestUseArray[x].isCompleted()[i] && i != Dom.quests.activeQuestUseArray[x].objectives.length-1){ // if the objective has been completed...
				document.getElementById("activeQuestBox").innerHTML += " &#10004;"; // ...put a tick next to it
			}
		}
		if(quest != undefined){ // if a quest is started
			document.getElementById("activeQuestBox").innerHTML += "<br>"; // adds a new line to the box
			Dom.quests.questNum += 30+(18*Dom.quests.activeQuestUseArray[x].objectives.length); // sets the...
			Dom.quests.questString = JSON.stringify(Dom.quests.questNum+10)+"px"; // ...height of...
			document.getElementById("activeQuestBox").style.height = Dom.quests.questString; // ...the box
		}
	}
	if(Dom.quests.activeQuestArray.length == 0){ // if there are no active quests
		document.getElementById("activeQuestBox").style.height = "40px"; // set the height to 40px
		document.getElementById("activeQuestBox").style.textAlign = "center"; // write text in the centre
		document.getElementById("activeQuestBox").innerText = "You have no active quests"; // write "you have no active quests"
	}
}

Dom.quests.completedQuestNum = 0; // sets the number of completed quests to 0
Dom.quests.completedQuestString = ""; // sets the height of the box to 0
Dom.quests.completed = function(quest){ // when a quest is completed...
	Dom.changeBook(Dom.previous, true); // the completed quest page opens
	Dom.quests.completedQuestArray.push(quest.quest); // the quest is added to the array of completed quests
	document.getElementById("completedQuestBox").style.textAlign = "left"; // the text in the box is written from the left
	if(Dom.quests.completedQuestNum == 0){ // if there are completed quests...
		document.getElementById("completedQuestBox").innerText = ""; // ...it sets the box to empty
	}
	document.getElementById("completedQuestBox").innerHTML += quest.quest + "<br>"; // adds the quests you just completed to the box
	Dom.quests.completedQuestNum += 18; // increases the height...
	Dom.quests.questString = JSON.stringify(Dom.quests.questNum+10)+"px"; // ...of the box...
	document.getElementById("activeQuestBox").style.height = Dom.quests.questString; // ...by one line
	if(Dom.quests.questNum < 50){ // if the box is too small...
		document.getElementById("activeQuestBox").style.height = "40px"; // ...its height is set to 40px
	}
}

Dom.merchant.page = function(title,greeting,options){ // merchant page
	Dom.changeBook("merchantPage", false); // changes the page to the merchant page
	Dom.currentlyDisplayed = title; // sets the currently displayed variable to the merchant's name
	Dom.changeBook("merchantPage", false, 1); // stops close button being red
	document.getElementById("merchantPageTitle").innerHTML = title; // sets the title to the merchant's name
	document.getElementById("merchantPageChat").innerHTML = greeting; // sets the greeting to the merchant's greeting
	document.getElementById("merchantPageOptions").innerHTML = ""; // sets the options to none
	document.getElementById("merchantPageBuy").innerHTML = ""; // sets the buy buttons to none
	for(let i = 0; i < options.length; i++){ // repeats for each option
		document.getElementById("merchantPageOptions").innerHTML += "<img src=" + options[i].image + " class='theseOptions' style='border: 5px solid #886622;'></img><br><br>"; // sets the image for the option
		document.getElementById("merchantPageBuy").innerHTML += "<div class='buy'>Buy for: " + options[i].cost + " gold</div><br>"; // makes a buy button next to the option
		for(let x = 0; x < document.getElementsByClassName("buy").length; x++){ // repeats for every buy button
			document.getElementsByClassName("buy")[x].onclick = function() { // when you click on a buy button...
				Dom.merchant.buy(options[x]); // ...the buy function is called
			};
		}
		for(let x = 0; x < document.getElementsByClassName("theseOptions").length; x++){ // repeats for every option
			document.getElementsByClassName("theseOptions")[x].onmouseover = function() { // when you hover over an item...
				Dom.merchant.displayInformation(document.getElementsByClassName("theseOptions")[x].getBoundingClientRect().top, options, x); // ...its information displays
			};
			document.getElementsByClassName("theseOptions")[x].onmouseleave = function() { // when you stop hovering over an item...
				Dom.expand("informationMerchant"); // ...its information stops displaying
			}
		}
	}
}

Dom.merchant.buy = function(item){ // buy item from merchant
	if(Player.gold >= item.cost){ // if they have an enough gold...
		Player.gold -= item.cost; // takes the amount of gold from the player
		Dom.inventory.updateGold(); // updates how much gold the display shows
		Dom.quest.give(item); // gives the player the item
		Dom.chat.insert("You bought a " + item.name + ".", 100); // tells the player they bough an item in the chat
	}
	else { // if they do not have enough gold...
		alert("You don't have sufficient funds to buy that item."); // alert them that they don't have enough gold
	}
}
Dom.identifier.displayed = Player.inventory.unId.length-1; // set the currently displayed item in the identifier to the latest one
	
Dom.identifier.left = function(chat, chat1, chat2, chat3, over){ // code called on clicking the left arrow to change the displayed item to the previous item
	if(Dom.identifier.displayed != 0){ // checks if the currently displayed item is the first in the array
		Dom.identifier.displayed--; // sets the currently displayed item to the previous item
	}else{
		Dom.identifier.displayed = Player.inventory.unId.length-1; // sets the currently displayed item to the last item in the array
	}
	Dom.identifier.page(chat, chat1, chat2, chat3, over); // opens and updates the identifier page
}

Dom.identifier.right = function(chat, chat1, chat2, chat3, over){ // this code is not important
	if(Dom.identifier.displayed != Player.inventory.unId.length-1){ // checks if the currently displayed item is the last in the array
		Dom.identifier.displayed++; // sets the currently displayed item to the next item
	}else{
		Dom.identifier.displayed = 0; // sets the currently displayed item to the first item in the array
	}
	Dom.identifier.page(chat, chat1, chat2, chat3, over); // opens and updates the identifier page
}

Dom.identifier.page = function(chat, chat1, chat2, chat3, over){ // identifier page
	Dom.changeBook("identifierPage", over); // changes page to identifier
	Dom.currentlyDisplayed = "identifier"; // sets the currently displayed page variable to identifier
	Dom.changeBook("identifierPage", false, 1); // stops close button being red
	if(chat != undefined){
		document.getElementById("identifierPageChat").innerHTML = chat; // sets the greeting to the parameter (chat)
	}
	document.getElementById("identifierPageOption").onmouseover = function(){ // when the player hovers over the item...
	}
	document.getElementById("identifierPageOption").onmouseleave = function(){ // when the player stops hovering over the item...
	}
	document.getElementById("identifierPageBuy").onclick = function(){ // when the player clicks identify...
	}
	if(Player.inventory.unId.length != 0){ // checks if the player has any unIDed items
		document.getElementById("identifierPageOption").innerHTML = "<img src=" + Player.inventory.unId[Dom.identifier.displayed].image + " class='theseOptions' style='padding: 0px; margin: 0px; border: 5px solid #886622; height: 50px; width: 50px;'></img>"; // sets the image to the selected item
		document.getElementById("identifierPageOption").onmouseover = function(){ // when the player hovers over the item...
			Dom.identifier.displayInformation(Dom.identifier.displayed,Player.inventory.unId); // ...it displays its information
		}
		document.getElementById("identifierPageOption").onmouseleave = function(){ // when the player stops hovering over the item...
			Dom.expand("identifierInformation"); // ...it stops displaying the information
		}
		document.getElementById("identifierPageBuy").onclick = function(){ // when the player clicks identify...
			Dom.identifier.identify(chat,chat1,chat2,chat3); // ...it calls the identify function (below)
		}
	}else{
		document.getElementById("identifierPageOption").innerHTML = "<img class='theseOptions' style='background-color: #fef9b4; border: 5px solid #886622; height: 50px; width: 50px;'></img>"; // sets the image to empty
	}
	document.getElementById("leftArrow").style.top = document.getElementById("identifierPageOption").getBoundingClientRect().top - 32 +"px"; // sets the left arrows position to the same height as the image
	document.getElementById("leftArrow").style.left = document.getElementById("identifierPageOption").getBoundingClientRect().left - 31 +"px"; // sets the left arrows position to left of the image
	document.getElementById("leftArrow").onclick = function(){ // when the player clicks on the left arrow...
		Dom.identifier.left(chat, chat1, chat2, chat3); // ...it changes the selected item to the previous unIDed item
		// at the end of the function it calls Dom.identifier.page and that is when the code breaks
	}
	document.getElementById("rightArrow").style.top = document.getElementById("identifierPageOption").getBoundingClientRect().top - 32 +"px"; // sets the right arrows position to the same height as the image
	document.getElementById("rightArrow").style.left = document.getElementById("identifierPageOption").getBoundingClientRect().left + 71 +"px"; // sets the right arrows position to right of the image
	document.getElementById("rightArrow").onclick = function(){ // when the player clicks in the right arrow...
		Dom.identifier.right(chat, chat1, chat2, chat3); // it changes the selected item to the next unIDed item
		// this function does not work yet but does not cause the error.
	}
	document.getElementById("identifierPageBuy").innerHTML = "Identify for: "+"1"+" gold"; // sets the text inside the identify button
}

setTimeout(function(){ // wait for timeout
	Dom.identifier.page("What would you like to identify?","Here is your item, adventurer", "Some people would pay good money for that item", "Wow! A Mythic"); // opens and updates the identifier page
},100); // wait 100

Dom.quest.give = function(item){ // gives the player the item
	if(item.type == "helm"){Player.inventory.helm.push(item);} // adds the helm to the players helm array
	if(item.type == "chest"){Player.inventory.chest.push(item);} // adds the chest to the players chest array
	if(item.type == "greaves"){Player.inventory.greaves.push(item);} // adds the greaves to the players greaves array
	if(item.type == "boots"){Player.inventory.boots.push(item);} // adds the boots to the players boots array
	if(item.type == "sword" || item.type == "staff" || item.type == "bow" || item.type == "rod"){Player.inventory.weapon.push(item);} // adds the weapon to the players weapons arary
}

Dom.quests.allQuestNum = 18; // sets the box height...
Dom.quests.allQuestString = ""; // ...to one line
for(var i = 0; i < Object.keys(quests).length; i++){ // repeats this code for each area
	for(var x = 0; x < quests[Object.keys(quests)[i]].length; x++){ // repeats this code for each quest
		document.getElementById("allQuestBox").innerHTML += quests[Object.keys(quests)[i]][x].quest + "<br>"; // writes the name of the quest in the box
		//for(var y = 0; y < quests[Object.keys(quests)[i]][x].objectives.length; y++){ // repeats this code for each objective
			//document.getElementById("allQuestBox").innerHTML += quests[Object.keys(quests)[i]][x].objectives[y] + "<br>"; // writes the objective under the name
		//}
		//document.getElementById("allQuestBox").innerHTML += "<br>"; // adds a space after the objectives
		Dom.quests.allQuestNum += 18; // increases...
		Dom.quests.allQuestString = JSON.stringify(Dom.quests.allQuestNum)+"px"; // ...height...
		document.getElementById("allQuestBox").style.height = Dom.quests.allQuestString; // ...of the box
	}
}

function unIdConstruct(area,tier){ // constructs an unidentified item when you kill an enemy
	this.area = area; // sets the item's area to the area you are in
	this.tier = tier; // sets the item's tier to the tier of the enemy
	var types = ["Helm","Chest","Greaves","Boots","Sword","Staff","Bow"]; // an array of types of weapon/armour
	this.typeNum = Math.floor(Math.random()*7); // a random number between 0 and 7...
	this.type = types[typeNum]; // ...used to choose a random category (e.g. bow)
	this.image = "'assets/items/"+this.type+".png'"; // sets the item's image to the default for its category (e.g. basic bow)
	this.rarityNum = Math.floor(Math.random()*25); // a random number between 0 and 25
	if(this.rarityNum < 18){ // 18/25 chance that the item is a...
		this.rarity = "common"; // ...common
	}else if(this.rarity < 24){ // 6/25 chance that the item is a...
		this.rarity = "unique"; // ...unique
	}else{ // 1/25 chance that the item is a...
		this.rarity = "mythic"; // ...mythic
	}
}

Dom.identifier.identify = function(chat, chat1, chat2, chat3){ // the page that you go to when you click "identify for 1 gold"
	if(Player.gold >= 1){
		Player.gold--;
		Dom.changeBook("identifiedPage",true); // changed page to the identified page
		Dom.currentlyDisplayed = "identified"; // sets the currently displayed page variable to identified
		Dom.identifier.array = []; // sets the possible items to none
		if(Player.inventory.unId[Dom.identifier.displayed].rarity == "common"){ // if it is a common item...
			document.getElementById("identifiedPageChat").innerHTML = chat1; // ...it uses the "common" chat
		}else if(Player.inventory.unId[Dom.identifier.displayed].rarity == "unique"){ // if it is a unique item...
			document.getElementById("identifiedPageChat").innerHTML = chat2; // ...it uses the "unique" chat
		}else{ // if it is a myhtic item...
			document.getElementById("identifiedPageChat").innerHTML = chat3; // ...it uses the "mythic" chat
		}
		for(i = 0; i < items[Object.keys(items)[Player.inventory.unId[Dom.identifier.displayed].typeNum]].length; i++){ // for every item of the same catergory (e.g. bow)...
			if(items[Object.keys(items)[Player.inventory.unId[Dom.identifier.displayed].typeNum]][i].tier == Player.inventory.unId[Dom.identifier.displayed].tier && items[Object.keys(items)[Player.inventory.unId[Dom.identifier.displayed].typeNum]][i].area == Player.inventory.unId[Dom.identifier.displayed].area && items[Object.keys(items)[Player.inventory.unId[Dom.identifier.displayed].typeNum]][i].rarity == Player.inventory.unId[Dom.identifier.displayed].rarity){ // ...check if it matches the stats...
				Dom.identifier.array.push(items[Object.keys(items)[Player.inventory.unId[Dom.identifier.displayed].typeNum]][i]); // ...if it does add is to the array of possible items
			}
		}
		Dom.identifier.num = Math.floor(Math.random()*Dom.identifier.array.length); // a random number between 0 and the number of items in the array of possible items
		Dom.identifier.item = Dom.identifier.array[Dom.identifier.num]; // a random item from the array of possible items
		document.getElementById("identifiedPageOption").innerHTML = "<img src=" + Dom.identifier.item.image + " class='theseOptions' style='padding: 0px; margin: 0px; border: 5px solid #886622; height: 50px; width: 50px;'></img>"; // sets the image to the selected item
		Dom.quest.give(Dom.identifier.item); // gives the player the item
		document.getElementById("identifiedPageOption").getElementsByTagName("img")[0].onmouseover = function(){ // when the player hovers over the item...
			Dom.identifier.displayIdentifiedInformation(Dom.identifier.num,Dom.identifier.array); // ...it displays its information
		}
		document.getElementById("identifiedPageOption").getElementsByTagName("img")[0].onmouseleave = function(){ // when the player stops hovering over the item...
			Dom.expand("identifiedInformation"); // ...it stops displaying the information
		}
		document.getElementById("identifiedPageBack").onclick = function(){ // when you click on the back button...
			Dom.identifier.left(chat, chat1, chat2, chat3, true); // ...the page goes back to the normal identifier
		}
		Player.inventory.unId.splice(Dom.identifier.displayed, 1); // removes from the array of unidentified items
	}else{
		alert("You don't have sufficient funds to buy that item."); // alert them that they don't have enough gold
	}
}