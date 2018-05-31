var helmNum = 0;
var chestNum = 0;
var greavesNum = 0;
var bootsNum = 0;
var weaponNum = 0;

// DOM function arrays

var Dom = {
	chat: {},
	inventory: {},
	quests: {},
	settings: {},
};

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
Dom.inventory.changeEquipment = function(array,string) {
	array.push(array[0]);
	array.splice(0, 1);
	document.getElementById(string).style.backgroundImage = "url(" + array[0].image + ")";
	if(string == "helm"){
		Player.inventory.helm = array;
		this.displayInformation("10px",Player.inventory.helm);
	}
	if(string == "chest"){
		Player.inventory.chest = array;
		this.displayInformation("80px",Player.inventory.chest);
	}
	if(string == "greaves"){
		Player.inventory.greaves = array;
		this.displayInformation("150px",Player.inventory.greaves);
	}
	if(string == "boots"){
		Player.inventory.boots = array;
		this.displayInformation("220px",Player.inventory.boots);
	}
	if(string == "weapon"){
		Player.inventory.weapon = array;
		this.displayInformation("305px",Player.inventory.weapon);
	}
}

Dom.inventory.displayInformation = function(y,array){
	//console.log(array);
	//console.log(0);
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


Dom.chat.length = 0;
Dom.chat.contents = [];

// insert text in chat box
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

function changeBook(page) {
	if(questVar == ""){
		chatPage.hidden = true;
		inventoryPage.hidden = true;
		questsPage.hidden = true;
		settingsPage.hidden = true;
		questStart.hidden = true;
		merchantPage.hidden = true;
		page.hidden = false;
	}
}
function hideInformation(){
	document.getElementById("itemInformation").hidden = true;
}

function displayInformationMerchant(y,array,num){
	//console.log(array);
	//console.log(num);
	document.getElementById("informationMerchant").innerHTML = "";
	document.getElementById("informationMerchant").hidden = false;
	document.getElementById("informationMerchant").style.top = 142+(y*82)+"px";
	document.getElementById("informationMerchant").innerHTML = "<div class='triangleLeft'></div><div class='innerTriangleLeft'></div>" + array[num].name;
}

function hideInformationMerchant(){
	document.getElementById("informationMerchant").hidden = true;
}

function expand(block){
	block = document.getElementById(block);
	if(block.hidden == true){
		block.hidden = false;
	}else{
		block.hidden = true;
	}
	if(block == activeQuestBox && questNum == 0){
		document.getElementById("activeQuestBox").style.textAlign = "center";
		document.getElementById("activeQuestBox").innerText = "You have no active quests";
	}
}

function bookmarkPosition() {
	if(document.getElementById("bottom").checked){
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
	}else{
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

if(screen.height >= 864){
	document.getElementById("bottom").checked = true;
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
}else{
	document.getElementById("right").checked = true;
	const css = document.createElement( 'style' );
	css.textContent = `
	#changeChat, #changeInventory, #changeQuests, #changeSettings {
		left: 1162px;
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

function npcDomCode(){
	finishDom(prompt("Please enter quest name"),prompt("Please enter npc name"),prompt("Please enter npc chat"),prompt("Please enter amount of gold"),prompt("please enter amount of xp"));
}

function merchantDomCode(){
	merchantDom(prompt("Please enter merchant name"),prompt("Please enter merchant chat"),[prompt("Please enter merchant option"),prompt("Please enter anpother merchant option")]);
}

var questVar = "";

function npcDom(quest){
	changeBook(document.getElementById("questStart"));
	document.getElementById("questStartQuest").innerHTML = quest.quest;
	document.getElementById("questStartName").innerHTML = quest.name;
	document.getElementById("questStartChat").innerHTML = quest.chat;
	document.getElementById("questStartObjectives").innerHTML = "";
	for(var i = 0; i < quest.objectives.length; i++){
		document.getElementById("questStartObjectives").innerHTML += quest.objectives[i] + "<br>";
	}
	document.getElementById("questStartGold").innerHTML = quest.rewards.gold;
	document.getElementById("questStartXP").innerHTML = quest.rewards.xp;
	questVar = quest;
}

function finishDom(quest){
	changeBook(document.getElementById("questFinish"));
	questVar = "merchant";
	document.getElementById("questFinishQuest").innerHTML = quest.quest;
	document.getElementById("questFinishName").innerHTML = quest.name;
	document.getElementById("questFinishChat").innerHTML = quest.chat;
	document.getElementById("questFinishGold").innerHTML = quest.rewards.gold;
	document.getElementById("questFinishXP").innerHTML = quest.rewards.xp;
	Player.gold += parseInt(quest.rewards.gold);
	Player.xp += parseInt(quest.rewards.xp);
	updateGold();
}

function acceptFunction(){
	npcBook(questVar);
	questStart.hidden = true;
	questsPage.hidden = false;
	
	// check if there is a quest start function
	if (questVar.onQuestStart != undefined) {
		questVar.onQuestStart();
	}
	
	// reset currently displayed quest
	questVar = "";
}

function declineFunction(){
	questFinish.hidden = true;
	questStart.hidden = true;
	merchantPage.hidden = true;
	questsPage.hidden = false;
	questVar = "";
}

var activeQuestArray = [];
var completedQuestArray = [];
var questNum = 0;
var questString = "";
function npcBook(quest){
	activeQuestArray.push(quest.quest);
	document.getElementById("activeQuestBox").style.textAlign = "left";
	if(questNum == 0){
		document.getElementById("activeQuestBox").innerText = "";
	}
	document.getElementById("activeQuestBox").innerHTML += "<strong>" + quest.quest + "</strong><br>";
	for(var i = 0; i < quest.objectives.length; i++){
		document.getElementById("activeQuestBox").innerHTML += quest.objectives[i] + "<br>"
	}
	document.getElementById("activeQuestBox").innerHTML += "<br>";
	questNum += 30+(18*quest.objectives.length);
	questString = JSON.stringify(questNum+10)+"px";
	document.getElementById("activeQuestBox").style.height = questString;
	if(questNum < 50){
		document.getElementById("activeQuestBox").style.height = "40px";
	}
}

function merchantDom(title,greeting,options){
	changeBook(document.getElementById("merchantPage"));
	questVar = "merchant";
	document.getElementById("merchantPageTitle").innerHTML = title;
	document.getElementById("merchantPageChat").innerHTML = greeting; //jt todo: change greeting to chat when chat becomes book.chat
	Dom.chat.insert("<strong>" + title + ": " + "</strong>" + greeting, 100);
	document.getElementById("merchantPageOptions").innerHTML = "";
	document.getElementById("merchantPageBuy").innerHTML = "";
	for(let i = 0; i < options.length; i++){
		//console.log(options);
		//document.getElementById("merchantPageOptions").innerHTML += "<img src='./assets/items/sword.png' style='border: 5px solid #886622;' onmouseover='displayInformationMerchant(" + i,options,i + ")'onmouseleave='hideInformationMerchant()'></img><br><br>";
		document.getElementById("merchantPageOptions").innerHTML += "<img src=" + options[i].image + " class='theseOptions' style='border: 5px solid #886622;' onmouseleave='hideInformationMerchant()'></img><br><br>";
		document.getElementById("merchantPageBuy").innerHTML += "<div class='buy'>Buy for: " + options[i].cost + " gold</div><br>";
		for(let x = 0; x < document.getElementsByClassName("buy").length; x++){
			//console.log(options[x]);
			document.getElementsByClassName("buy")[x].onclick = function() {
				//console.log(options);
				//console.log(x);
				buyFunction(options[x]);
			};
		}
		//console.log(document.getElementsByClassName("theseOptions").length);
		for(let x = 0; x < document.getElementsByClassName("theseOptions").length; x++){
			//console.log(options[x]);
			document.getElementsByClassName("theseOptions")[x].onmouseover = function() {
				//console.log(options);
				//console.log(x);
				displayInformationMerchant(x, options, x);
			};
		}
	}
}

function buyFunction(item){
	if(Player.gold >= item.cost){
		Player.gold -= item.cost;
		updateGold();
		Player.inventory.weapon.push(item);
	}
	else {
		alert("You don't have sufficient funds to buy that item.");
	}
}

var allQuestNum = 0;
var allQuestString = "";
for(var i = 0; i < Object.keys(quests).length; i++){
	for(var x = 0; x < quests[Object.keys(quests)[i]].length; x++){
		document.getElementById("allQuestBox").innerHTML += "<strong>" + quests[Object.keys(quests)[i]][x].quest + "</strong><br>";
		for(var y = 0; y < quests[Object.keys(quests)[i]][x].objectives.length; y++){
			document.getElementById("allQuestBox").innerHTML += quests[Object.keys(quests)[i]][x].objectives[y] + "<br>";
		}
		allQuestNum = 30+(18*quests[Object.keys(quests)[i]][x].objectives.length);
		allQuestString = JSON.stringify(allQuestNum+10)+"px";
		document.getElementById("allQuestBox").style.height = allQuestString;
	}
}