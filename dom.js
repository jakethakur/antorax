var gold = 0;

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

function changeNum(array,num,string){
	console.log(helmNum);
	console.log(helmArray[helmNum]);
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

document.getElementById("gold").innerText = gold;
document.getElementById("activeQuests").innerText = "Active Quests";
document.getElementById("possibleQuests").innerText = "Possible Quests";
document.getElementById("allQuests").innerText = "All Quests";

//insert text in chat box
function insertChat(text, delay) {
	setTimeout(function() {
		chat.innerHTML = '<p>' + text + '</p>' + chat.innerHTML;
		chatlength++;
		if (chatlength >= 10000) { //check chat isn't too big; if it is then purge it. 10,000 is an arbitrary value; maybe change?
			purgeChat();
			chat.innerHTML = '<p>' + text + '</p>' + chat.innerHTML;
			chatlength++;
		}
	}, delay);
}

//delete all chat
function purgeChat() {
	chat.innerHTML = '<p>Chat cleared to free up memory.</p>';
	chatlength = 1;
}

function changeBook(page) {
	chat.hidden = true;
	inventory.hidden = true;
	quests.hidden = true;
	page.hidden = false;
}

function displayInformation(y){
	information.hidden = false;
	document.getElementById("information").style.marginTop = y;
}

function hideInformation(){
	information.hidden = true;
}

function expand(block){
	block = document.getElementById(block);
	if(block.hidden == true){
		block.hidden = false;
	}else{
		block.hidden = true;
	}
}

function polygonPoints(){
	return ("0,0 0,50 100,50 130,25 100,0");
}

if(screen.height > 864){
	const css = document.createElement( 'style' );
	css.textContent = `
	#changeChat, #changeInventory, #changeQuests {
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
	#chatImage, #inventoryImage, #questsImage{
		top: 649px;
	}
	#chatImage{
		left: 665px;
	}
	#inventoryImage{
		left: 735px;
	}
	#questsImage{
		left: 820px;
	}
	`;
	document.head.appendChild( css );
}else{
	const css = document.createElement( 'style' );
	css.textContent = `
	#changeChat, #changeInventory, #changeQuests {
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
	#chatImage, #inventoryImage, #questsImage{
		left: 1197px;
	}
	#chatImage{
		top: 40px;
	}
	#inventoryImage{
		top: 110px;
	}
	#questsImage{
		top: 180px;
		left: 1212px;
	}
	`;
	document.head.appendChild( css );
}
function chatIcon(){
	return("./assets/icons/chat.png");
}