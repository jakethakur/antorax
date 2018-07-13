var Dom = { // DOM function arrays
	elements: { // pages
		chatPage: document.getElementById("chatPage"), // shortens references to the chatPage to "chatPage"
		inventoryPage: document.getElementById("inventoryPage"), // shortens references to the inventoryPage to "inventoryPage"
		questsPage: document.getElementById("questsPage"), // shortens references to the questsPage to "questsPage"
		settingsPage: document.getElementById("settingsPage"), // shortens references to the settingsPage to "settingsPage"
		instructionsPage: document.getElementById("instructionsPage"), // shortens references to the instructionsPage to "instructionsPage"
		reputationPage: document.getElementById("reputationPage"), // shortens references to the reputationPage to "reputationPage"
		questStart: document.getElementById("questStart"), // shortens references to the questStart to "questStart"
		questFinish: document.getElementById("questFinish"), // shortens references to the questFinish to "questFinish"
		merchantPage: document.getElementById("merchantPage"), // shortens references to the merchantPage to "merchantPage"
		identifierPage: document.getElementById("identifierPage"), // shortens references to the identifierPage to "identifierPage"
		identifiedPage: document.getElementById("identifiedPage"), // shortens references to the identifiedPage to "identifiedPage"
	},
	chat: {}, // variables to do with the chat are defined as Dom.chat.varName
	inventory: {}, // variables to do with inventory are defined as Dom.inventory.varName
	quests: {}, // variables to do with quests are defined as Dom.quests.varName
	instructions: {}, // variables to do with instructions are defined as Dom.instructions.varName
	reputation: {}, // variables to do with reputation are defined as Dom.reputation.varName
	settings: {}, // variables to do with settings are defined as Dom.settings.varName
	quest: {}, // variables to do with quest are defined as Dom.quest.varName
	merchant: {}, // variables to do with merchant are defined as Dom.merchant.varName
	identifier: {}, // variables to do with identifier are defined as Dom.identifier.varName
};

var Stats = { // variables to do with stats are defined as Stats.varName
	Damage: 0, // the user's total damage default is 0 but can be changed by weapons
	Defence: 0, // the user's total defence default is 0 but can be changed by armour
	Critical_Chance: 1, // the user's total critical chance default is 1 but can be changed by armour or weapons
	Dodge_Chance: 1, // the user's total dodge chance default is 1 but can be changed by armout or weapons
	Flaming: 0, // the user does not usually deal fire damage to enemies but some weapons do
	Focus_Speed: 1, // the user's total focus speed default is 1 but can be changed by bows
	Health_Regen: 2, // the user's total health regen default is 2 but can be changed by armour or weapons
	Looting: 50, // the user's total looting default is 50 but can be changed by armour or weapons
	PoisonX: 0, // the user's total posion default is 0 damage...
	PoisonY: 0, // ...over 0 seconds but can be changed by armour or weapons
	Reflection: 0, // the user's total looting default is 0 but can be changed by armour or weapons
	Stun: 0, // the user's total stun time default is 0 but can be changed by armour or weapons
	Swim_Speed: 60, // the user's total swim speed default is 60 but can be changed by armour or weapons
	Walk_Speed: 180, // the user's total walk speed default is 180 but can be changed by armour or weapons
};

if(sessionStorage.getItem("class")==undefined){
	window.location.replace("./selection.html");
}

Dom.previous = "instructionsPage"; // change currently displayed page
Dom.changeBook = function(page, override, x) { // changes the page or changes the color of close buttons
	//override says if the function should be run regardless of if the player has a quest active (e.g: declining a quest or closing a merchant)
	if(this.currentlyDisplayed == "" || override) { // check the player doesn't have a quest active
		// hide all pages
		if(page != "questStart" && page != "questFinish" && page != "merchantPage" && page != "identifierPage" && page != "identifiedPage"){ // if the page being changed to is a not a pop up...
			Dom.previous = page; // ... it will open it next time you close a pop up
		}
		this.elements.chatPage.hidden = true; // hides the chat
		this.elements.inventoryPage.hidden = true; // hides the inventory
		this.elements.questsPage.hidden = true; // hides the quest log
		this.elements.settingsPage.hidden = true; // hides the settings
		this.elements.instructionsPage.hidden = true; // hides the instructions
		this.elements.reputationPage.hidden = true; // hides the reputation
		this.elements.questStart.hidden = true; // hides the questStart pop up
		this.elements.questFinish.hidden = true; // hides the questFinish pop up
		this.elements.merchantPage.hidden = true; // hides the merchant pop up
		this.elements.identifierPage.hidden = true; // hides the identifier pop up
		this.elements.identifiedPage.hidden = true; // hides the identified item pop up
		document.getElementById(page).hidden = false; // displays the page you are opening
		if(page == "chatPage"){ // if the chat is being opened
			if(Dom.chat.newString == ""){ // if there is no new chat
				chatPage.innerHTML = "<br>" + Dom.chat.oldString; // display the old chat
			}
			document.getElementById("dot").hidden = true; // remove notifications
			document.getElementById("dot").innerHTML = 0; // set notification number to 0
			Dom.chat.oldString = Dom.chat.newString + Dom.chat.oldString; // add the new chat to the old chat
			Dom.chat.newString = ""; // set the new chat to nothing
		}
		if(page == "reputationPage"){ // if the reputation is being opened
			Dom.reputation.update(); // update the reputation (not sure why it is necessary)
		}
		if(override) { // if the a pop up is being closed
			for(var i = 0; i < document.getElementsByClassName("closeClass").length; i++){ // repeat for all close buttons
				document.getElementsByClassName("closeClass")[i].style.border = "5px solid #886622"; // set close button border color to normal
			}
			this.currentlyDisplayed = ""; // reset current display if it is overriden
			Dom.quests.activeQuests(undefined); // update the active quests box
		}
		return true; // returns true if the page was changed
	}
	else { // if the page cannot be changed
		for(var i = 0; i < document.getElementsByClassName("closeClass").length; i++){ // repeat for all close buttons
			document.getElementsByClassName("closeClass")[i].style.border = "5px solid red"; // set close button border color to red
		}
		if(x != 0 && x != 1){ // if x = "undefined"
			Dom.override = true; // overrides future updates
			setTimeout(function(){ // waits 200
				for(var i = 0; i < document.getElementsByClassName("closeClass").length; i++){ // repeat for all close buttons
					document.getElementsByClassName("closeClass")[i].style.border = "5px solid #886622"; // set close button border color back to normal
					Dom.override = false; // allows future updates
				}
			},200); // waits 0.2 seconds
		} else if(x == 1){ // // if x = 1
			for(var i = 0; i < document.getElementsByClassName("closeClass").length; i++){ // repeat for all close buttons
				document.getElementsByClassName("closeClass")[i].style.border = "5px solid #886622"; // instantly set close button border color back to normal
			}
		}
		return false; // returns false if the page was not changed
	}
}

Dom.inventory.updateGold = function() { // update the DOM display of gold and xp
	for(var i = 0; i < document.getElementsByClassName("goldDisplay").length; i++) { // repeat for each gold display
		document.getElementsByClassName("goldDisplay")[i].innerText = Player.gold; // set the number displayed to the amount of gold
	}
	for(var i = 0; i < document.getElementsByClassName("xpDisplay").length; i++) { // repeat for each xp display
		document.getElementsByClassName("xpDisplay")[i].innerText = Player.xp; // set the number displayed to the amount of xp
	}
}
Dom.inventory.updateGold(); // calls the function to update the gold display

/*Dom.inventory.changeEquipment = function(array,equipmentType) { // change which item is shown in inventory
	for(var i = 0; i < Object.keys(array[0].stats).length; i++){ // repeats code for all stats in old item
		Stats[Object.keys(array[0].stats)[i]] -= parseInt(array[0].stats[Object.keys(array[0].stats)[i]]); // minuses that stat from the player's stats
	}
	if(array[0].set != undefined){ // if the item being removed is part of a set
		Dom.inventory.noSet = false; // allows the set code to run
		for(var i = 0; i < items.sets[array[0].set].armour.length; i++){ // repeats for all armour in the set
			if(Player.inventory.helm[0].name != items.sets[array[0].set].armour[i] && Player.inventory.chest[0].name != items.sets[array[0].set].armour[i] && Player.inventory.greaves[0].name != items.sets[array[0].set].armour[i] && Player.inventory.boots[0].name != items.sets[array[0].set].armour[i]){ // checks if the armour is being worn
				Dom.inventory.noSet = true; // does not allow the set code to run
			}
		}
		if(!Dom.inventory.noSet){ // set code (runs if the player was wearing a set but now isn't)
			for(var i = 0; i < Object.keys(items.sets[array[0].set].stats).length; i++){ // repeats for all stats in set
				Stats[Object.keys(items.sets[array[0].set].stats)[i]] -= parseInt(items.sets[array[0].set].stats[Object.keys(items.sets[array[0].set].stats)]); // removes that stat from player's stats
			}
		}
	}
	array.push(array[0]); // adds the first element of the array to the end of the array
	array.splice(0, 1); // removes the first element of the array
	for(var i = 0; i < Object.keys(array[0].stats).length; i++){ // repeats code for all stats in new item
		Stats[Object.keys(array[0].stats)[i]] += parseInt(array[0].stats[Object.keys(array[0].stats)[i]]); // adds that stat to the player's stats
	}
	if(array[0].set != undefined){ // if the item being added is part of a set
		Dom.inventory.noSet = false; // allows the set code to run
		for(var i = 0; i < items.sets[array[0].set].armour.length; i++){ // repeats for all armour in the set
			if(Player.inventory.helm[0].name != items.sets[array[0].set].armour[i] && Player.inventory.chest[0].name != items.sets[array[0].set].armour[i] && Player.inventory.greaves[0].name != items.sets[array[0].set].armour[i] && Player.inventory.boots[0].name != items.sets[array[0].set].armour[i]){ // checks if the armour is being worn
				Dom.inventory.noSet = true; // does not allow the set code to run
			}
		}
		if(!Dom.inventory.noSet){ // set code (runs if the player was not wearing a set but now is)
			for(var i = 0; i < Object.keys(items.sets[array[0].set].stats).length; i++){ // repeats for all stats in set
				Stats[Object.keys(items.sets[array[0].set].stats)[i]] += parseInt(items.sets[array[0].set].stats[Object.keys(items.sets[array[0].set].stats)]); // removes that stat from player's stats
			}
		}
	}
	document.getElementById(equipmentType).style.backgroundImage = "url(" + array[0].image + ")"; // sets the image of to the the item's image
	if(equipmentType == "helm"){ // if the equipment being changed is a helm...
		Player.inventory.helm = array; // ...updates the helm array...
		this.displayInformation("294px",Player.inventory.helm); // ... and displays the information for your helm
	}else if(equipmentType == "chest"){ // if the equipment being changed is a chest...
		Player.inventory.chest = array; // ...updates the chest array...
		this.displayInformation("364px",Player.inventory.chest); // ...and displays the information for your chest
	}else if(equipmentType == "greaves"){ // if the equipment being chaged are greaves...
		Player.inventory.greaves = array; // ...updates the greaves array...
		this.displayInformation("434px",Player.inventory.greaves); // ...and displays the information for your greaves
	}else if(equipmentType == "boots"){ // if the equipment being changed are boots...
		Player.inventory.boots = array; // ...updates the boots array...
		this.displayInformation("504px",Player.inventory.boots); // ...and displays the information for your boots
	}else{ // if the equipment being changed is a weapon...
		Player.inventory.weapon = array; // ...updates the weapon array...
		this.displayInformation("184px",Player.inventory.weapon); // ...and displays the information for your weapon
	}
}*/

Dom.chat.newString = ""; // sets the new chat to nothing
Dom.chat.oldString = ""; // sets the old chat to nothing
Dom.chat.length = 0; // sets the chat length to 0
Dom.chat.contents = []; // sets the chat contents to 0
document.getElementById("dot").innerHTML = 0; // sets the notification number to 0
Dom.chat.insert = function(text, delay) { // // insert text in chat page
	if(Dom.chat.length == 10) { // if chat is too big
			Dom.chat.purge(); // purge it
		}
	if(chatPage.hidden){ // if the chat is hidden
		if(document.getElementById("dot").innerHTML != "<b>...</b>"){ // if there are less than 100 notifications
			document.getElementById("dot").hidden = false; // display the notifications
			document.getElementById("dot").innerHTML = parseInt(document.getElementById("dot").innerHTML) + 1; // add 1 to the notification number
			if(parseInt(document.getElementById("dot").innerHTML) > 99){ // if there are 100 notifications
				document.getElementById("dot").innerHTML = "<b>...</b>"; // set the notification number to "..."
				document.getElementById("dot").style.lineHeight = "7.5px"; // move the "..." to the centre
			}
		}
	}
	Dom.chat.contents.push(text); // add the text to the array of chat contents
	setTimeout(function() { // wait for the amount of time specified in the parameter
		Dom.chat.newString = text + "<br><br>" + Dom.chat.newString; // adds the text to the new chat
		chatPage.innerHTML = "<br>" + Dom.chat.newString; // sets the chat to the new chat
		if(Dom.chat.oldString != 0){chatPage.innerHTML += '-------------------- <b>New Messages</b> --------------------';} // if there is old chat write "New Messages"
		chatPage.innerHTML += "</p>" + Dom.chat.oldString; // write old chat under new messages
		if(!chatPage.hidden){ // if the chat is displayed...
			Dom.changeBook("chatPage",true); // ...update the chat
		}
		Dom.chat.length++; // adds 1 to the length of the chat
	}, delay); // sets the delay to the amount specified in the parameter
}

Dom.chat.purge = function() { // delete all chat
	Dom.chat.oldString = ""; // sets the old chat to nothing
	Dom.chat.newString = "Chat cleared to free up memory"; // warns the user that the chat was reset
	Dom.chat.length = 1; // sets the chat length to 1
	Dom.chat.contents = []; // sets the chat contents to nothing
}

Dom.expand = function(block) { // expand/collapse element
	block = document.getElementById(block); // sets block to the element: block
	if(block.hidden) { // if the element is hidden...
		block.hidden = false; // ...display it
	}
	else { // if the element is displayed...
		block.hidden = true; // ...hide it
	}
	if(block == activeQuestBox && Dom.quests.activeQuestArray.length == 0){ // if the player has no active quests... (possibly inefficient? doesn't need to check every time it's opened)
		document.getElementById("activeQuestBox").style.textAlign = "center"; // ...the text in the active quest box is written in the centre...
		document.getElementById("activeQuestBox").innerText = "You have no active quests"; // ... and it says "you have no active quests"
	}else if(block == completedQuestBox && Dom.quests.completedQuestArray.length == 0){ // if the player has no completed quests...
		document.getElementById("completedQuestBox").style.textAlign = "center"; // ...the text in the completed quest box is written in the centre... 
		document.getElementById("completedQuestBox").innerText = "You have no completed quests"; // ...and it says "you have no completed quests"
	}else if(block == itemInformation || block == identifierInformation){ // if the block is the itemInformation...
		block.hidden = true; // ...hide it
	}
}

Dom.settings.bookmarkPosition = function() { // arrange position of bookmarks
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
	else { // arrange bookmarks at right of screen
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

if(window.innerHeight >= 755) { // if the window height is big enough...
	document.getElementById("bottom").checked = true; // ...set the bookmark position to the bottom...
	Dom.settings.bookmarkPosition(); // ...then update the position
}
else if(window.innerWidth >= 1295) { // if the window height is too small but the width is big enough...
	document.getElementById("right").checked = true; // ...set the bookmark position to the right...
	Dom.settings.bookmarkPosition(); // ...then update the position
}
else { // if the window size is too small...
	alert("Your window size is too small. Please zoom out and refresh the page!"); // ...alert the user that their window is too small...
	console.warn("Your window size is too small. Please zoom out and refresh the page!"); // ...warn the user that their window is too small...
	document.getElementById("bottom").checked = true; // ...set the bookmark position to bottom...
	Dom.settings.bookmarkPosition(); // ...then update the position
}

Dom.reputation.levels = ["Hated","Unfriendly","Neutral","Friendly","Honoured"]; // possible reputation levels
for(var i = 0; i < Object.keys(Player.reputation).length; i++){ // repeat for all reputations
	Player.reputation[Object.keys(Player.reputation)[i]].score = 5; // reputation score (between levels)
	Player.reputation[Object.keys(Player.reputation)[i]].level = 2; // reputation level
}
Dom.reputation.update = function(){ // update reputation
	for(var i = 0; i < Object.keys(Player.reputation).length; i++){ // repeat for all reputations
		if(Player.reputation[Object.keys(Player.reputation)[i]].score > 10) { // if the reputation is above 10...
			this.upLevel(Player.reputation[Object.keys(Player.reputation)[i]]); // ...increase the reputation level
		}
		else if(Player.reputation[Object.keys(Player.reputation)[i]].score < 0) { // if the reputation is below 0...
			this.downLevel(Player.reputation[Object.keys(Player.reputation)[i]]); // ...decrease the reputation level
		}
		else { // if the reputation is between 0 and 10
			document.getElementById("reputationBar").innerHTML = this.levels[Player.reputation[Object.keys(Player.reputation)[i]].level]; // writes the level in the repuatation bar
			document.getElementById("widthPadding").innerHTML = this.levels[Player.reputation[Object.keys(Player.reputation)[i]].level]; // gets the width of the text
			if(Player.reputation[Object.keys(Player.reputation)[i]].level >=2) { // if the reputation is neutral or above
				document.getElementById("reputationBar").style.textIndent = ((250-document.getElementById("widthPadding").clientWidth)/2) + "px"; // writes the text in the centre
				document.getElementById("reputationBar").style.width = Player.reputation[Object.keys(Player.reputation)[i]].score*25+"px"; // sets the width of the bar
				document.getElementById("reputationBar").style.left = "0px"; // sets the bar to start on the left
			}
			else { // if the reputation is negative
				document.getElementById("reputationBar").style.textIndent = ((250-document.getElementById("widthPadding").clientWidth)/2)-Player.reputation[Object.keys(Player.reputation)[i]].score*25+ "px"; // writes the text in the centre
				document.getElementById("reputationBar").style.width = (10-Player.reputation[Object.keys(Player.reputation)[i]].score)*25+"px"; // sets the width of the bar
				document.getElementById("reputationBar").style.left = Player.reputation[Object.keys(Player.reputation)[i]].score*25+"px"; // sets the bar to start on the right
			}
		}
	}
}

Dom.reputation.upLevel = function(Area){ // increases the reputation level
	Area.score -= 11; // resets the score to 0 + the remainder
	Area.level++; // increases the reputation level
	if(Area.level > 2) { // if the reputation is positive...
		document.getElementById("reputationBar").style.backgroundColor = "green"; // ...sets the color to green
	}
	else if(Area.level < 2) { // if the reputation is negative...
		document.getElementById("reputationBar").style.backgroundColor = "red"; // ...sets the color to red
	}
	else { // if the reputation is neutral...
		document.getElementById("reputationBar").style.backgroundColor = "gold"; // ...sets the color to yellow
	}
	this.update(); // updates the reputation
}

Dom.reputation.downLevel = function(Area){ // decreases the reputation level
	Area.score += 11; // resets the score to 10 - the remainder
	Area.level--; // decreases the reputation level
	if(Area.level < 2){ // if the reputation is negative...
		document.getElementById("reputationBar").style.backgroundColor = "red"; // ...sets the color to red
	}else if(Area.level > 2){ // if the reputation is positive...
		document.getElementById("reputationBar").style.backgroundColor = "green"; // ...sets the color to green
	}else{ // if the reputation is neutral...
		document.getElementById("reputationBar").style.backgroundColor = "gold"; // ...sets the color to yellow
	}
	this.update(); // updates the reputation
}

Dom.inventory.displayIdentification = function(){ // display inventory information
	document.getElementById("itemInformation").hidden = false; // ...display information
	document.getElementById("itemInformation").style.top = "74px"; // sets information's top value to the value specified in the parameter
	document.getElementById("itemInformation").innerHTML = "<div class='triangleLeft'></div><div id='triangle' class='innerTriangleLeft'></div><p id='innerStats'></p>"; // construct the information
	document.getElementById("innerStats").innerHTML += "Damage: " + Stats.Damage; // updates the damage display
	document.getElementById("innerStats").innerHTML += "<br>Defence: " + Stats.Defence; // updates the defence display
	document.getElementById("innerStats").innerHTML += "<br>Critical Chance: " + Stats.Critical_Chance + "%"; // updates the critical chance display
	document.getElementById("innerStats").innerHTML += "<br>Dodge Chance: " + Stats.Dodge_Chance + "%"; // updates the dodge chance display
	document.getElementById("innerStats").innerHTML += "<br>Flaming: " + Stats.Flaming; // updates the flaming display
	document.getElementById("innerStats").innerHTML += "<br>Focus Speed: " + Stats.Focus_Speed; // updates the focus speed display
	document.getElementById("innerStats").innerHTML += "<br>Health Regen: " + Stats.Health_Regen + "/s"; // updates the health regen display
	document.getElementById("innerStats").innerHTML += "<br>Looting: " + Stats.Looting + "%"; // updates the looting display
	document.getElementById("innerStats").innerHTML += "<br>Poison: " + Stats.PoisonX + "/" + Stats.PoisonY + "s"; // updates the poison display
	document.getElementById("innerStats").innerHTML += "<br>Reflection: " + Stats.Reflection + "%"; // updates the reflection display
	document.getElementById("innerStats").innerHTML += "<br>Stun: " + Stats.Stun + "s"; // updates the stun display
	document.getElementById("innerStats").innerHTML += "<br>Swim Speed: " + Stats.Swim_Speed + "/s"; // updates the swim speed display
	document.getElementById("innerStats").innerHTML += "<br>Walk Speed: " + Stats.Walk_Speed + "/s"; // updates the walk speed display
	document.getElementById("triangle").style.bottom = document.getElementById("itemInformation").offsetHeight - 50 + "px"; // position the triangle in the correct place
}

Dom.inventory.displayInformation = function(y,array){ // display inventory information
	document.getElementById("itemInformation").hidden = true; // hide item information
	if(array[0].name != ""){ // if the user is hovering over an item...
		document.getElementById("itemInformation").hidden = false; // ...display information
		document.getElementById("itemInformation").style.top = y; // sets information's top value to the value specified in the parameter
		document.getElementById("itemInformation").innerHTML = "<div class='triangleLeft'></div><div id='triangle' class='innerTriangleLeft'></div><p id='name'><b>"+array[0].name+"</b></p><p id='stats'></p><p id='lore'></p>"; // construct the information without the values
		if(array[0].rarity == "common"){ // if the item is a common...
			document.getElementById("name").style.color = "black"; // ...sets the name color to black
		}else if(array[0].rarity == "unique"){ // if the item is a unique...
			document.getElementById("name").style.color = "orange"; // ...sets the name color to orange
		}else{ // if the item is a mythic...
			document.getElementById("name").style.color = "purple"; // ...sets the name color to purple
		}
		document.getElementById("stats").innerHTML = "Tier: "+array[0].tier; // add the tier to the information
		for(var i = 0; i < Object.keys(array[0].stats).length; i++){ // repeat for all stats
			var replaceStat = Object.keys(array[0].stats)[i].replace("_"," "); // replace any underscores with spaces
			document.getElementById("stats").innerHTML += "<br>"+replaceStat+": "+array[0].stats[Object.keys(array[0].stats)[i]]; // add the stats to the information
		}
		if(array[0].lore != undefined){ // if the item has a lore...
			document.getElementById("lore").innerHTML += "<i>"+array[0].lore+"</i>"; // ...add the lore to the information
		}
		document.getElementById("triangle").style.bottom = document.getElementById("itemInformation").offsetHeight - 50 + "px"; // position the triangle in the correct place
	}
}

Dom.merchant.displayInformation = function(y,array,num) { // display merchant information
	document.getElementById("informationMerchant").hidden = false; // display merchant information
	document.getElementById("informationMerchant").style.top = y+"px"; // sets the information's top value to the value specified in the parameter
	document.getElementById("informationMerchant").innerHTML = "<div class='triangleLeft'></div><div id='merchantTriangle' class='innerTriangleLeft'></div><p id='merchantName'><b>"+array[num].name+"</b></p><p id='merchantStats'></p><p id='merchantLore'></p>"; // construct the information without the values
	if(array[num].rarity == "common"){ // if the item is a common...
		document.getElementById("merchantName").style.color = "black"; // ...sets the name color to black
	}else if(array[num].rarity == "unique"){ // if the item is a unique...
		document.getElementById("merchantName").style.color = "orange"; // ...sets the name color to orange
	}else{ // if the item is a mythic...
		document.getElementById("merchantName").style.color = "purple"; // ...sets the name color to purple
	}
	document.getElementById("merchantStats").innerHTML = "Tier: "+array[num].tier; // add the tier to the information
	for(var i = 0; i < Object.keys(array[num].stats).length; i++){ // repeat for all stats
		var replaceStat = Object.keys(array[num].stats)[i].replace("_"," "); // replace any underscores with spaces
		document.getElementById("merchantStats").innerHTML += "<br>"+replaceStat+": "+array[num].stats[Object.keys(array[num].stats)[i]]; // add the stats to the information
	}
	if(array[num].lore != undefined){ // if the item has a lore...
		document.getElementById("merchantLore").innerHTML += "<i>"+array[num].lore+"</i>"; // ...add the lore to the information
	}
	document.getElementById("merchantTriangle").style.bottom = document.getElementById("informationMerchant").offsetHeight - 50 + "px"; // postition the triangle in the correct place
}

Dom.quests.displayInformation = function(num,array,total){ // display quest start information
	document.getElementById("questInformation").hidden = false; // display quest start information
	document.getElementById("questInformation").style.top = document.getElementsByClassName("theseQuestOptions")[num].getBoundingClientRect().top+"px"; // sets the information's top value to the top value of the image
	document.getElementById("questInformation").style.left = 780-(total*35)+(num*70) +"px"; // sets the information's left value based on information from the parameter
	document.getElementById("questInformation").innerHTML = "<div class='rectangleRightUp' id='questRectangle'></div><div class='rectangleRightDown'></div><div class='triangleRight'></div><div id='questTriangle' class='innerTriangleRight'></div><p id='questName'><b>"+array[num].name+"</b></p><p id='questStats'></p><p id='questLore'></p>"; // construct the information without the values
	if(array[num].rarity == "common"){ // if the item is a common...
		document.getElementById("questName").style.color = "black"; // ...sets the name color to black
	}else if(array[num].rarity == "unique"){ // if the item is a unique...
		document.getElementById("questName").style.color = "orange"; // ...sets the name color to orange
	}else{ // if the item is a mythic...
		document.getElementById("questName").style.color = "purple"; // ...sets the name color to purple
	}
	document.getElementById("questStats").innerHTML = "Tier: "+array[num].tier; // add the tier to the information
	for(var i = 0; i < Object.keys(array[num].stats).length; i++){ // repeat for all stats
		var replaceStat = Object.keys(array[num].stats)[i].replace("_"," "); // replace any underscores with spaces
		document.getElementById("questStats").innerHTML += "<br>"+replaceStat+": "+array[num].stats[Object.keys(array[num].stats)[i]]; // add the stats to the information
	}
	if(array[num].lore != undefined){ // if the item has a lore...
		document.getElementById("questLore").innerHTML += "<i>"+array[num].lore+"</i>"; // ...add the lore to the information
	}
	document.getElementById("questTriangle").style.bottom = document.getElementById("questInformation").offsetHeight - 50 + "px"; // position the triangle in the correct place
	document.getElementById("questRectangle").style.bottom = document.getElementById("questInformation").offsetHeight - 50 + "px"; // position the rectangle in the correct place
}

Dom.quests.displayFinishInformation = function(num,array,total){ // display quest finish information
	document.getElementById("questFinishInformation").hidden = false; // display quest start information
	document.getElementById("questFinishInformation").style.top = document.getElementsByClassName("theseQuestFinishOptions")[num].getBoundingClientRect().top+"px"; // sets the information's top value to the top value of the image
	document.getElementById("questFinishInformation").style.left = 780-(total*35)+(num*70) +"px"; // sets the information's left value based on the information from the parameter
	document.getElementById("questFinishInformation").innerHTML = "<div class='rectangleRightUp' id='finishRectangle'></div><div class='rectangleRightDown'></div><div class='triangleRight'></div><div id='finishTriangle' class='innerTriangleRight'></div><p id='finishName'><b>"+array[num].name+"</b></p><p id='finishStats'></p><p id='finishLore'></p>"; // construct the information without the values
	if(array[num].rarity == "common"){ // if the item is a common...
		document.getElementById("finishName").style.color = "black"; // ...sets the name color to black
	}else if(array[num].rarity == "unique"){ // if the item is a unique...
		document.getElementById("finishName").style.color = "orange"; // ...sets the name color to orange
	}else{ // if the item is a mythic...
		document.getElementById("finishName").style.color = "purple"; // ...sets the name color to purple
	}
	document.getElementById("finishStats").innerHTML = "Tier: "+array[num].tier; // add the tier to the information
	for(var i = 0; i < Object.keys(array[num].stats).length; i++){ // repeat for all stats
		var replaceStat = Object.keys(array[num].stats)[i].replace("_"," "); // replace any underscores with spaces
		document.getElementById("finishStats").innerHTML += "<br>"+replaceStat+": "+array[num].stats[Object.keys(array[num].stats)[i]]; // add the stats to the information
	}
	if(array[num].lore != undefined){ // if the item has a lore...
		document.getElementById("finishLore").innerHTML += "<i>"+array[num].lore+"</i>"; // ...add the lore to the information
	}
	document.getElementById("finishTriangle").style.bottom = document.getElementById("questFinishInformation").offsetHeight - 50 + "px"; // position the triangle in the correct place
	document.getElementById("finishRectangle").style.bottom = document.getElementById("questFinishInformation").offsetHeight - 50 + "px"; // position the rectangle in the correct place
}

Dom.identifier.displayInformation = function(num,array){ // display identifier information
	document.getElementById("identifierInformation").hidden = true; // hide identifier information
	if(array.length != 0){ // if the player is hovering over an item
		document.getElementById("identifierInformation").hidden = false; // display identifier information
		document.getElementById("identifierInformation").style.top = document.getElementById("identifierPageOption").getBoundingClientRect().top - 46 + "px"; // sets the information's top value to the top value of the item
		document.getElementById("identifierInformation").style.left = document.getElementById("identifierPageOption").getBoundingClientRect().left + 90 +"px"; // sets the information's left value based on the left value of the item
		document.getElementById("identifierInformation").innerHTML = "<div class='rectangleLeftUp' id='identifierRectangle'></div><div class='rectangleLeftDown'></div><div class='triangleLeft'></div><div id='identifierTriangle' class='innerTriangleLeft'></div><p id='identifierName'><b> Unidentified "+array[num].type+"</b></p><p id='identifierStats'></p><p id='identifierLore'></p>"; // construct the information without the values
		document.getElementById("identifierStats").innerHTML = "Tier: "+array[num].tier; // add the tier to the information
		document.getElementById("identifierLore").innerHTML += "Area: "+array[num].area; // add the area to the information
		document.getElementById("identifierTriangle").style.bottom = document.getElementById("identifierInformation").offsetHeight - 50 + "px"; // positition the triangle in the correct place
		document.getElementById("identifierRectangle").style.bottom = document.getElementById("identifierInformation").offsetHeight - 50 + "px"; // postition the rectangle in the correct place
	}
}

Dom.identifier.displayIdentifiedInformation = function(num,array){ // display identified information
	document.getElementById("identifiedInformation").hidden = false; // display identified information
	document.getElementById("identifiedInformation").style.top = document.getElementById("identifiedPageOption").getElementsByTagName("img")[0].getBoundingClientRect().top + "px"; // sets the information's top value to the top value of the item
	document.getElementById("identifiedInformation").style.left = document.getElementById("identifiedPageOption").getElementsByTagName("img")[0].getBoundingClientRect().left + 90 +"px"; // sets the informations left value based on the left value of the item
	document.getElementById("identifiedInformation").innerHTML = "<div class='triangleLeft'></div><div id='identifiedTriangle' class='innerTriangleLeft'></div><p id='identifiedName'><b>" + array[num].name + "</b></p><p id='identifiedStats'></p><p id='identifiedLore'></p>"; // constuct the information without the values
	if(array[num].rarity == "common"){ // if the item is a common...
		document.getElementById("identifiedName").style.color = "black"; // ...sets the name color to black
	}else if(array[num].rarity == "unique"){ // if the item is a unique...
		document.getElementById("identifiedName").style.color = "orange"; // ...sets the name color to orange
	}else{ // if the item is a mythic...
		document.getElementById("identifiedName").style.color = "purple"; // ...sets the name color to purple
	}
	document.getElementById("identifiedStats").innerHTML = "Tier: "+array[num].tier; // add the tier to the information
	for(var i = 0; i < Object.keys(array[num].stats).length; i++){ // repeat fot all stats
		var replaceStat = Object.keys(array[num].stats)[i].replace("_"," "); // replace any underscores with spaces
		document.getElementById("identifiedStats").innerHTML += "<br>"+replaceStat+": "+array[num].stats[Object.keys(array[num].stats)[i]]; // add the stats to the information
	}
	if(array[num].lore != undefined){ // if the items has a lore...
		document.getElementById("identifiedLore").innerHTML += "<i>"+array[num].lore+"</i>"; // ...add the lore to the information
	}
	document.getElementById("identifiedTriangle").style.bottom = document.getElementById("identifiedInformation").offsetHeight - 50 + "px"; // position the triangle in the correct place
}

Dom.currentlyDisplayed = ""; // the currently displayed quest, merchant, etc. (any pop up)
Dom.quest.start = function(quest) { // display quest start page
	if(Dom.changeBook("questStart", false)) { // display quest start page
		document.getElementById("questStartQuest").innerHTML = quest.quest; // sets title to quest name
		document.getElementById("questStartName").innerHTML = quest.startName; // sets NPC name to NPC name
		document.getElementById("questStartChat").innerHTML = quest.startChat; // sets chat to NPC chat
		document.getElementById("questStartObjectives").innerHTML = ""; // sets objectives to none
		for(var i = 0; i < quest.objectives.length; i++){ // repeat for all objectives
			document.getElementById("questStartObjectives").innerHTML += quest.objectives[i] + "<br>"; // adds ovjective to objectives
		}
		if(quest.rewards.gold == 0 || quest.rewards.gold == undefined){ // if there is no gold reward...
			document.getElementById("questStartGold").style.display = "none"; // ...do not display gold
			//document.getElementById("goldClass").style.display = "none";
		}else{ // if there is a gold reward...
			document.getElementById("questStartGold").innerHTML = quest.rewards.gold; // ...display the amount of gold inside the gold
		}
		if(quest.rewards.xp == 0 || quest.rewards.xp == undefined){ // if there is no xp reward...
			document.getElementById("questStartXP").style.display = "none"; // ...do not display xp
			//document.getElementById("xpClass").style.display = "none";
		}else{ // if there is a xp reward...
			document.getElementById("questStartXP").innerHTML = quest.rewards.xp; // ...display the amount of xp inside the xp
		}
		document.getElementById("questStartItems").innerHTML = ""; // sets the item rewards to none
		for(var i = 0; i < quest.rewards.items.length; i++){ // repeats for all item rewards
			document.getElementById("questStartItems").innerHTML += "<img src=" + quest.rewards.items[i].image + " class='theseQuestOptions'></img>&nbsp;&nbsp;"; // adds item to item rewards
		}
		for(let x = 0; x < document.getElementsByClassName("theseQuestOptions").length; x++){ // repeats for all item rewards
			document.getElementsByClassName("theseQuestOptions")[x].onmouseover = function() { // when the user hovers over the item...
				Dom.quests.displayInformation(x, quest.rewards.items,document.getElementsByClassName("theseQuestOptions").length); // ...displays the information for that item
			};
			document.getElementsByClassName("theseQuestOptions")[x].onmouseleave = function() { // when the user stops hovering over the item...
				Dom.expand("questInformation"); // ...stops displaying the information for that item
			};
		}
		Dom.currentlyDisplayed = quest; // sets the currently displayed pop up to the quest
	}
}

Dom.quest.finish = function(quest){ // display quest finish page
	Dom.changeBook("questFinish", false); // display quest finish page
	document.getElementById("questFinishQuest").innerHTML = quest.quest; // sets title to quest name
	document.getElementById("questFinishName").innerHTML = quest.finishName; // sets NPC name to NPC name
	document.getElementById("questFinishChat").innerHTML = quest.finishChat; // sets chat to NPC chat
	if(quest.rewards.gold == 0 || quest.rewards.gold == undefined){ // if the is no gold reward...
		document.getElementById("questFinishGold").style.display = "none"; // ...do not display gold
		//document.getElementById("goldClass").style.display = "none";
	}else{ // if there is a gold reward...
		document.getElementById("questFinishGold").innerHTML = quest.rewards.gold; // ...display the amount of gold inside the gold
	}
	if(quest.rewards.xp == 0 || quest.rewards.xp == undefined){ // if there is no xp reward...
		document.getElementById("questFinishXP").style.display = "none"; // ...do not display xp
		//document.getElementById("xpClass").style.display = "none";
	}else{ // if there is a xp reward...
		document.getElementById("questFinishXP").innerHTML = quest.rewards.xp; // ...display the amount of xp inside the xp
	}
	document.getElementById("questFinishItems").innerHTML = ""; // sets the item rewards to none
	for(var i = 0; i < quest.rewards.items.length; i++){ // repeats for all item rewards
		document.getElementById("questFinishItems").innerHTML += "<img src=" + quest.rewards.items[i].image + " class='theseQuestFinishOptions'></img>&nbsp;&nbsp;"; //adds item to item rewards
	}
	for(let x = 0; x < document.getElementsByClassName("theseQuestFinishOptions").length; x++){ // repeats for all item rewards
		document.getElementsByClassName("theseQuestFinishOptions")[x].onmouseover = function() { // when the user hovers over the item...
			Dom.quests.displayFinishInformation(x, quest.rewards.items,document.getElementsByClassName("theseQuestFinishOptions").length); // ...displays the information for that item
		};
		document.getElementsByClassName("theseQuestFinishOptions")[x].onmouseleave = function() { // when the user stops hovering over the item...
			Dom.expand("questFinishInformation"); // ...stops displaying the information for that item
		};
	}
	//Player.gold += parseInt(quest.rewards.gold);
	Player.gold += quest.rewards.gold; // gives the player the gold reward
	//Player.xp += parseInt(quest.rewards.xp);
	Player.xp += quest.rewards.xp // gives the player the xp reward
	Dom.inventory.updateGold(); // updates the gold and xp display
	for(var i = 0; i < quest.rewards.items.length; i++){ // repeats for all item rewards
		Dom.quest.give(quest.rewards.items[i]); // gives the player the reward
	}
	Dom.currentlyDisplayed = quest; // sets the currently displayed variable to the quest
	if(quest.rewards.reputation != undefined) { // reputation rewards
		for(var i = 0; i < Object.keys(quest.rewards.reputation).length; i++) { // repeats for all reputation rewards
			Player.reputation[Object.keys(quest.rewards.reputation)[i]].score += quest.rewards.reputation[Object.keys(quest.rewards.reputation)[i]]; // gives the player the reputation reward
		}
	}
	Dom.reputation.update(); // updates the reputation display
}

Dom.quest.accept = function(){ // quest accepted
	Dom.quests.activeQuests(Dom.currentlyDisplayed); // add the quest to the active quests
	if (Dom.currentlyDisplayed.onQuestStart != undefined) { // if there is a quest start function...
		Dom.currentlyDisplayed.onQuestStart(); // ...do it
	}
	Dom.changeBook(Dom.previous, true); // change page back to previous page
}

Dom.quest.acceptRewards = function(){ // quest rewards accepted
	for(var i = 0; i < Dom.quests.activeQuestArray.length; i++){ // repeats for all active quests
		if(Dom.quests.activeQuestArray[i] == Dom.currentlyDisplayed.quest){ // if this is the quest you just finished...
			Dom.quests.activeQuestArray.splice(i,1); // ...remove it from the active quest array...
			Dom.quests.activeQuestUseArray.splice(i,1); // ...and revove it from the other active quest array
		}
	}
	Dom.quests.completed(Dom.currentlyDisplayed); // add the quest to the completed quest array
	if (Dom.currentlyDisplayed.onQuestFinish != undefined) { // if there is a quest start function...
		Dom.currentlyDisplayed.onQuestFinish(); // ...do it
	}
	Dom.changeBook(Dom.previous, true); // change back to previous page
	Dom.quests.activeQuests(undefined); // update the active quest box
}

Dom.quests.activeQuestArray = []; // sets the active quest array to nothing
Dom.quests.activeQuestUseArray = []; // sets the other active quest array to nothing
Dom.quests.completedQuestArray = []; // sets the completed quest array to nothing
Dom.quests.questNum = 0; // sets the quest number to 0
Dom.quests.questString = ""; // sets the string version of the quest number to nothing
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

Dom.identifier.displayed = 0; // set the currently displayed item in the identifier to the latest one	
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
	document.getElementById("identifierPageChat").innerHTML = chat; // sets the greeting to the parameter (chat)
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
	}else{ // if the player has on unIDed items...
		document.getElementById("identifierPageOption").innerHTML = "<img class='theseOptions' style='background-color: #fef9b4; border: 5px solid #886622; height: 50px; width: 50px;'></img>"; // sets the image to empty
	}
	document.getElementById("leftArrow").style.top = document.getElementById("identifierPageOption").getBoundingClientRect().top - 32 +"px"; // sets the left arrows position to the same height as the image
	document.getElementById("leftArrow").style.left = document.getElementById("identifierPageOption").getBoundingClientRect().left - 31 +"px"; // sets the left arrows position to left of the image
	document.getElementById("leftArrow").onclick = function(){ // when the player clicks on the left arrow...
		Dom.identifier.left(chat, chat1, chat2, chat3); // ...it changes the selected item to the previous unIDed item
	}
	document.getElementById("rightArrow").style.top = document.getElementById("identifierPageOption").getBoundingClientRect().top - 32 +"px"; // sets the right arrows position to the same height as the image
	document.getElementById("rightArrow").style.left = document.getElementById("identifierPageOption").getBoundingClientRect().left + 71 +"px"; // sets the right arrows position to right of the image
	document.getElementById("rightArrow").onclick = function(){ // when the player clicks in the right arrow...
		Dom.identifier.right(chat, chat1, chat2, chat3); // it changes the selected item to the next unIDed item
	}
	document.getElementById("identifierPageBuy").innerHTML = "Identify for: "+"1"+" gold"; // sets the text inside the identify button
}

Dom.quest.give = function(item){ // gives the player the item
	//if(item.type == "helm"){Player.inventory.items.push(item);} // adds the helm to the players helm array
	//if(item.type == "chest"){Player.inventory.items.push(item);} // adds the chest to the players chest array
	//if(item.type == "greaves"){Player.inventory.items.push(item);} // adds the greaves to the players greaves array
	//if(item.type == "boots"){Player.inventory.items.push(item);} // adds the boots to the players boots array
	if(item.unidentified){
		Player.inventory.unId.push(item);
	}
	for(var i = 0; i < Player.inventory.items.length; i++){ // repeats code for all inventory slots
		if(Object.keys(Player.inventory.items[i]).length == 0){ // if the slot is empty
			Player.inventory.items[i] = item; // puts the item in the inventory slot
			document.getElementsByTagName("td")[i].innerHTML = "<img src='"+Player.inventory.items[i].image+"' draggable='true' ondragstart='Dom.inventory.drag(event,"+i+")'></img>"; // sets the items image
			break; // stops the item being placed in multiple slots
		}
	}
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

for(var i = 0; i < 2; i++){
	setTimeout(function(){
		unIdConstruct("Eaglecrest Logging Camp",1);
	},1);
}
function unIdConstruct(area,tier){ // constructs an unidentified item when you kill an enemy
	this.area = area; // sets the item's area to the area you are in
	this.tier = tier; // sets the item's tier to the tier of the enemy
	var types = ["helm","chest","greaves","boots","sword","staff","bow"]; // an array of types of weapon/armour
	this.typeNum = Math.floor(Math.random()*7); // a random number between 0 and 7...
	this.type = types[typeNum].toLowerCase(); // ...used to choose a random category (e.g. bow)
	this.image = "assets/items/"+this.type+"/2.png"; // sets the item's image to the default for its category (e.g. basic bow)
	this.rarityNum = Math.floor(Math.random()*25); // a random number between 0 and 25
	if(this.rarityNum < 18){ // 18/25 chance that the item is a...
		this.rarity = "common"; // ...common
	}else if(this.rarity < 24){ // 6/25 chance that the item is a...
		this.rarity = "unique"; // ...unique
	}else{ // 1/25 chance that the item is a...
		this.rarity = "mythic"; // ...mythic
	}
	this.unidentified = true;
	Dom.quest.give(this);
}

Dom.identifier.identify = function(chat, chat1, chat2, chat3){ // the page that you go to when you click "identify for 1 gold"
	if(Player.gold >= 1 && Player.inventory.unId.length != 0){ // if the player can afford the item
		Player.gold--; // take the money from the player
		Dom.inventory.updateGold(); // update the gold display
		Dom.changeBook("identifiedPage",true); // changed page to the identified page
		Dom.currentlyDisplayed = "identified"; // sets the currently displayed page variable to identified
		
		for(var i = 0; i < Player.inventory.items.length; i++){
			if(Player.inventory.items[i].unidentified && Player.inventory.items[i].tier == Player.inventory.unId[Dom.identifier.displayed].tier && Player.inventory.items[i].area == Player.inventory.unId[Dom.identifier.displayed].area && Player.inventory.items[i].rarity == Player.inventory.unId[Dom.identifier.displayed].rarity && Player.inventory.items[i].type == Player.inventory.unId[Dom.identifier.displayed].type){
				console.log("yes");
				Player.inventory.items[i] = "";
			}
		}
		
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
	}else if(Player.inventory.unId.length != 0){ // if the player can't afford the item
 		alert("You don't have sufficient funds to buy that item."); // alert them that they don't have enough gold
	}
}

for(var i = 0; i < Player.inventory.items.length; i++){ // repeats the code for all inventory slots
	if(Player.inventory.items[i].image != undefined){ // if the slot is not empty...
		document.getElementsByTagName("td")[i].innerHTML = "<img src='"+Player.inventory.items[i].image+"' draggable='true' ondragstart='Dom.inventory.drag(event,"+i+")'></img>"; // ...puts the image in the slot
	}
}

Dom.inventory.update = function(){ // updates the position of the "buy bags to get more inventory space" text
	document.getElementById("bagText").style.top = 300+(26*(document.getElementById("itemInventory").rows.length))+"px"; // sets the position to half way below the inventory
}
Dom.inventory.update(); // sets the original position of the text

Dom.inventory.allowDrop = function(ev) { // when an item is held over a place that it can be dropped in...
    ev.preventDefault(); // ...allows the item to be dropped
}

Dom.inventory.drag = function(ev, x) { // when an item is dragged...
    ev.dataTransfer.setData("text", x); // ...sets the variables for the drop
	Dom.expand("itemInformation"); // hides the item information
}

Dom.inventory.drop = function(ev,equip) { // when an item is dropped
    ev.preventDefault(); // allows the item to drop
	var data = ev.dataTransfer.getData("text"); // sets the variable data to a set variable chosen when the item was picked up
	var test = ""+ev.target+""; // checks if there is an item already there
	if(equip == undefined){ // if the item is being moved to an inventory slot
		if(data != "weapon" && data != "helm" && data != "chest" && data != "greaves" && data != "boots"){ // if the item is being moved from an inventory slot
			if(test[12] == "T"){ // if there is not an item already there
				for(var i = 0; i < Player.inventory.items.length; i++){ // repeats code for all inventory slots
					/*if(document.getElementsByTagName("td")[i].innerHTML == document.getElementById("data").innerHTML && document.getElementsByTagName("td")[i] != ev.target){
						document.getElementsByTagName("td")[i].innerHTML = "";
					}else*/ if(document.getElementsByTagName("td")[i] == ev.target){ // if the item slot us where you are putting the item
						Player.inventory.items[i] = Player.inventory.items[data]; // sets the slot you are putting the item in to the item you are putting in it
						document.getElementsByTagName("td")[data].innerHTML = ""; // updates the image for the new slot
						ev.target.innerHTML = "<img src='"+Player.inventory.items[data].image+"' draggable='true' ondragstart='Dom.inventory.drag(event,"+i+")'></img>"; // updates the image for the new slot
					}
				}
				Player.inventory.items[data] = {}; // sets the slot you got the item from to empty
			}
			else{ // if there is an item already there
				for(var i = 0; i < Player.inventory.items.length; i++){ // repeats code fot all inventory slots
					/*if(document.getElementsByTagName("td")[i].innerHTML == document.getElementById("data").innerHTML && document.getElementsByTagName("td")[i].innerHTML != ev.target.outerHTML){
						document.getElementsByTagName("td")[i].innerHTML = "img src='";
					}else*/ if(document.getElementsByTagName("td")[i].innerHTML == ev.target.outerHTML){ // if the item slot is where you are putting the item
						test = Player.inventory.items[i]; // sets the variable for later
						Player.inventory.items[i] = Player.inventory.items[data]; // sets the slot you are putting the item in to the item you are putting in it
						document.getElementsByTagName("td")[data].innerHTML = "<img src='"+test.image+"' draggable='true' ondragstart='Dom.inventory.drag(event,"+data+")'></img>"; // updates the image for the previous slot
						document.getElementsByTagName("td")[i].innerHTML = "<img src='"+Player.inventory.items[data].image+"' draggable='true' ondragstart='Dom.inventory.drag(event,"+i+")'></img>"; // updates the image fot the new slot
					}
				}
				Player.inventory.items[data] = test; // sets the slot you got the item from to the item in the slot you are putting the item in
			}
		}else{ // if the item is being moved from a weapon/armour slot
			if(test[12] == "T"){ // if there is not an item already there
				for(var i = 0; i < Player.inventory.items.length; i++){ // repeats code for all inventory slots
					/*if(document.getElementsByTagName("td")[i].innerHTML == document.getElementById("data").innerHTML && document.getElementsByTagName("td")[i] != ev.target){
						document.getElementsByTagName("td")[i].innerHTML = "";
					}else*/ if(document.getElementsByTagName("td")[i] == ev.target){ // if the item slot us where you are putting the item
						Player.inventory.items[i] = Player.inventory[data][0]; // sets the slot you are putting the item in to the item you are putting in it
						document.getElementById(data).innerHTML = ""; // updates the image for the new slot
						ev.target.innerHTML = "<img src='"+Player.inventory.items[i].image+"' draggable='true' ondragstart='Dom.inventory.drag(event,"+i+")'></img>"; // updates the image for the new slot
						if(Player.inventory.items[i].type != "sword" && Player.inventory.items[i].type != "staff" && Player.inventory.items[i].type != "bow"){ // if it is armour
							Dom.inventory.removeEquipment(Player.inventory[Player.inventory.items[i].type]); // removes the stats of that armour from the total
							Player.inventory[Player.inventory.items[i].type].splice(0,1); // sets the slot you are putting the item in to the item you are putting in it
							Player.inventory[Player.inventory.items[i].type].push({name: "",image: "",stats: {},},); // sets the slot you are putting the item in to the item you are putting in it
						}else{ // if it is a weapon
							Dom.inventory.removeEquipment(Player.inventory.weapon); // removes the stats of that weapon from the total
							Player.inventory.weapon.splice(0,1); // sets the slot you are putting the item in to the item you are putting in it
							Player.inventory.weapon.push({name: "",image: "",stats: {},},); // sets the slot you are putting the item in to the item you are putting in it
						}
					}
				}
				Player.inventory.items[data] = {}; // sets the slot you got the item from to empty
			}
		}
	}else{ // if the item is being moved to a weapon/armour slot
		if(test[12] == "D"){ // if there is not an item already there
			if((Player.inventory.items[data].type == ev.target.id || (Player.inventory.items[data].type == "sword" && ev.target.id == "weapon") || (Player.inventory.items[data].type == "staff" && ev.target.id == "weapon") || (Player.inventory.items[data].type == "bow" && ev.target.id == "weapon")) && !Player.inventory.items[data].unidentified){ // if the item is allowed in that slot (e.g. a helm in the helm slot)
				Player.inventory[ev.target.id].splice(0,1); // sets the slot you are putting the item in to the item you are putting in it
				Player.inventory[ev.target.id].push(Player.inventory.items[data]); // sets the slot you are putting the item in to the item you are putting in it
				Dom.inventory.addEquipment(Player.inventory[equip]); // adds the stats of the equipment to the total
				document.getElementsByTagName("td")[data].innerHTML = ""; // updates the image for the new slot
				Player.inventory.items[data] = {}; // sets the slot you got the item from to empty
				document.getElementById(ev.target.id).innerHTML = "<img src='"+Player.inventory[ev.target.id][0].image+"' draggable='true' ondragstart='Dom.inventory.drag(event,\""+ev.target.id+"\")'></img>"; // updates the image
			}
		}else{ // if there is already an item there
			if((Player.inventory.items[data].type == equip || (Player.inventory.items[data].type == "sword" && equip == "weapon") || (Player.inventory.items[data].type == "staff" && equip == "weapon") || (Player.inventory.items[data].type == "bow" && equip == "weapon")) && !Player.inventory.items[data].unidentified){ // if the item is allowed in that slot (e.g. a helm in the helm slot);
				test = Player.inventory[equip][0]; // sets the variable for later
				Dom.inventory.removeEquipment(Player.inventory[equip]); // removes the stats of the equipment from the total
				Player.inventory[equip].splice(0,1); // sets the slot you are putting the item in to the item you are putting in it
				Player.inventory[equip].push(Player.inventory.items[data]); // sets the slot you are putting the item in to the item you are putting in it
				Dom.inventory.addEquipment(Player.inventory[equip]); // adds the stats of the equipment from the total
				document.getElementsByTagName("td")[data].innerHTML = "<img src='"+test.image+"' draggable='true' ondragstart='Dom.inventory.drag(event,\""+data+"\")'></img>"; // updates the image for the previous slot
				Player.inventory.items[data] = test; // sets the slot you got the item from to empty
				document.getElementById(equip).innerHTML = "<img src='"+Player.inventory[equip][0].image+"' draggable='true' ondragstart='Dom.inventory.drag(event,\""+equip+"\")'></img>"; // updates the image for the new slot
			}
		}
	}
}

Dom.inventory.removeEquipment = function(array){ // removes the stats of an item from the player's total
	for(var i = 0; i < Object.keys(array[0].stats).length; i++){ // repeats code for all stats in old item
		Stats[Object.keys(array[0].stats)[i]] -= parseInt(array[0].stats[Object.keys(array[0].stats)[i]]); // minuses that stat from the player's stats
	}
	if(array[0].set != undefined){ // if the item being removed is part of a set
		Dom.inventory.noSet = false; // allows the set code to run
		for(var i = 0; i < items.sets[array[0].set].armour.length; i++){ // repeats for all armour in the set
			if(Player.inventory.helm[0].name != items.sets[array[0].set].armour[i] || Player.inventory.chest[0].name != items.sets[array[0].set].armour[i] || Player.inventory.greaves[0].name != items.sets[array[0].set].armour[i] || Player.inventory.boots[0].name != items.sets[array[0].set].armour[i]){ // checks if the armour is being worn
				Dom.inventory.noSet = true; // does not allow the set code to run
			}
		}
		if(!Dom.inventory.noSet){ // set code (runs if the player was wearing a set but now isn't)
			for(var i = 0; i < Object.keys(items.sets[array[0].set].stats).length; i++){ // repeats for all stats in set
				Stats[Object.keys(items.sets[array[0].set].stats)[i]] -= parseInt(items.sets[array[0].set].stats[Object.keys(items.sets[array[0].set].stats)]); // removes that stat from player's stats
			}
		}
	}
}

Dom.inventory.addEquipment = function(array){ // adds the stats of an item to the payer's total
	if(array[0].stats != undefined){
		for(var i = 0; i < Object.keys(array[0].stats).length; i++){ // repeats code for all stats in old item
			Stats[Object.keys(array[0].stats)[i]] += parseInt(array[0].stats[Object.keys(array[0].stats)[i]]); // minuses that stat from the player's stats
		}
	}
	if(array[0].set != undefined){ // if the item being removed is part of a set
		Dom.inventory.noSet = false; // allows the set code to run
		for(var i = 0; i < items.sets[array[0].set].armour.length; i++){ // repeats for all armour in the set
			if(Player.inventory.helm[0].name != items.sets[array[0].set].armour[i] || Player.inventory.chest[0].name != items.sets[array[0].set].armour[i] || Player.inventory.greaves[0].name != items.sets[array[0].set].armour[i] || Player.inventory.boots[0].name != items.sets[array[0].set].armour[i]){ // checks if the armour is being worn
				Dom.inventory.noSet = true; // does not allow the set code to run
			}
		}
		if(!Dom.inventory.noSet){ // set code (runs if the player was wearing a set but now isn't)
			for(var i = 0; i < Object.keys(items.sets[array[0].set].stats).length; i++){ // repeats for all stats in set
				Stats[Object.keys(items.sets[array[0].set].stats)[i]] += parseInt(items.sets[array[0].set].stats[Object.keys(items.sets[array[0].set].stats)]); // removes that stat from player's stats
			}
		}
	}
}

Dom.inventory.check = function(){
	var completed = false;
	for(var i = 0; i < Player.inventory.items.length; i++){
		if(Player.inventory.items[i].type == "sword" || Player.inventory.items[i].type == "staff" || Player.inventory.items[i].type == "bow"){
			completed = true;
			break;
		}
	}
	if(completed == false && Player.inventory.weapon[0].name != ""){
		completed = true;
	}
	
	return(completed);
}