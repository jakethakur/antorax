//these arrays will soon be moving to questdata.js. this is already being done with gold, which is now player.gold
var helmArray = ["","url('assets/items/helm.png')","url('assets/items/helm2.png')"];
var chestArray = ["","url('assets/items/chest.png')","url('assets/items/chest2.png')"];
var greavesArray = ["","url('assets/items/greaves.png')","url('assets/items/greaves2.png')"];
var bootsArray = ["","url('assets/items/boots.png')","url('assets/items/boots2.png')"];
var weaponArray = ["","url('assets/items/weapon.png')","url('assets/items/weapon2.png')"];

var helmNum = 0;
var chestNum = 0;
var greavesNum = 0;
var bootsNum = 0;
var weaponNum = 0;

// update the DOM display of gold
function updateGold() {
	document.getElementById("gold").innerText = player.gold;
}
updateGold();

// DOM function arrays

var chat = {};

// changes which armour is shown in inventory
function changeNum(array,num,string){
	num++
	if(num >= array.length){
		num=0;
	}
	document.getElementById(string).style.backgroundImage = array[num];
	if(string == "helm"){helmNum = num;}
	if(string == "chest"){chestNum = num;}
	if(string == "greaves"){greavesNum = num;}
	if(string == "boots"){bootsNum = num;}
	if(string == "weapon"){weaponNum = num;}
}

chat.length = 0;
chat.contents = [];

// insert text in chat box
chat.insert = function(text, delay) {
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
chat.purge = function() {
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

function displayInformation(y){
	information.hidden = false;
	document.getElementById("information").style.marginTop = y;
}

function hideInformation(){
	information.hidden = true;
}

function displayInformationMerchant(y){
	informationMerchant.hidden = false;
	document.getElementById("informationMerchant").style.top = 142+(y*82)+"px";
}

function hideInformationMerchant(){
	informationMerchant.hidden = true;
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
	merchantDom(prompt("Please enter merchant name"),prompt("Please enter merchant chat"),[prompt("Please enter merchant option"),prompt("Please enter anpother merchant option")]);
}

var questVar = "";
var objectivesVar = "";

function npcDom(quest,name,chat,objectives,gold,xp){
	changeBook(document.getElementById("questStart"));
	document.getElementById("questStartQuest").innerHTML = quest;
	document.getElementById("questStartName").innerHTML = name;
	document.getElementById("questStartChat").innerHTML = chat;
	document.getElementById("questStartObjectives").innerHTML = "";
	for(var i = 0; i < objectives.length; i++){
		document.getElementById("questStartObjectives").innerHTML += objectives[i] + "<br>";
	}
	document.getElementById("questStartGold").innerHTML = "0";
	document.getElementById("questStartXP").innerText = "0";
	questVar = quest;
	objectivesVar = objectives;
}

function acceptFunction(){
	npcBook(questVar,objectivesVar);
	questStart.hidden = true;
	questsPage.hidden = false;
	questVar = "";
	objectivesVar = "";
}

function declineFunction(){
	questStart.hidden = true;
	merchantPage.hidden = true;
	questsPage.hidden = false;
	questVar = "";
	objectivesVar = "";
}

var activeQuestArray = [];
var completedQuestArray = [];
var questNum = 0;
var questString = "";
function npcBook(quest,objectives){
	activeQuestArray.push(quest);
	document.getElementById("activeQuestBox").style.textAlign = "left";
	if(questNum == 0){
		document.getElementById("activeQuestBox").innerText = "";
	}
	document.getElementById("activeQuestBox").innerHTML += "<strong>" + quest + "</strong><br>";
	for(var i = 0; i < objectives.length; i++){
		document.getElementById("activeQuestBox").innerHTML += objectives[i] + "<br>"
	}
	document.getElementById("activeQuestBox").innerHTML += "<br>";
	questNum += 30+(18*objectives.length);
	questString = JSON.stringify(questNum+10)+"px";
	document.getElementById("activeQuestBox").style.height = questString;
	if(questNum < 50){
		document.getElementById("activeQuestBox").style.height = "40px";
	}
}

function merchantDom(title,greeting,options){
	changeBook(document.getElementById("merchantPage"));
	document.getElementById("merchantPageTitle").innerHTML = title;
	document.getElementById("merchantPageChat").innerHTML = greeting; //jt todo: change greeting to chat when chat becomes book.chat
	chat.insert("<strong>" + title + ": " + "</strong>" + greeting, 100);
	document.getElementById("merchantPageOptions").innerHTML = "";
	document.getElementById("merchantPageBreak").innerHTML = "";
	for(var i = 0; i < options.length; i++){
		document.getElementById("merchantPageOptions").innerHTML += "<img src='./assets/items/sword.png' style='border: 5px solid #886622;' onmouseover='displayInformationMerchant(" + i + ")'onmouseleave='hideInformationMerchant()'></img><br><br>";
		document.getElementById("merchantPageBuy").innerHTML += "<div class='buy' onclick = 'buyFunction(" + options[i] + ")'>Buy for: </div><br>";
		document.getElementById("merchantPageBreak").innerHTML += "<br><br><br><br><br>";
	}
}

function buyFunction(item){
	if(player.gold >= item.cost){
		player.gold -= item.cost;
		updateGold();
		weaponArray.push(item.image);
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