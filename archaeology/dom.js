document.getElementById("progress").hidden = false;
var urlString = window.location.href;
var url = new URL(urlString);
var viewedItemId = url.searchParams.get("id");
var viewedItemType = url.searchParams.get("type");
var array = [];
var arrayLength = 1;
var rarity = document.getElementById("rarity");
var category = document.getElementById("category");
var event = document.getElementById("event");
var obtained = document.getElementById("obtained");
var min = document.getElementById("min");
var max = document.getElementById("max");
var searchBar = document.getElementById("searchBar");
var session = {};
var archaeology = JSON.parse(localStorage.getItem("user"));
var events = ["Samhain", "Christmas"];

if (url.searchParams.get("category") !== null) {
	category.value = url.searchParams.get("category");
}
if (url.searchParams.get("rarity") !== null) {
	rarity.value = url.searchParams.get("rarity");
}
if (url.searchParams.get("event") !== null) {
	event.value = url.searchParams.get("event");
}
if (url.searchParams.get("obtained") !== null) {
	obtained.value = url.searchParams.get("obtained");
}
if (url.searchParams.get("min") !== null) {
	min.value = url.searchParams.get("min");
}
if (url.searchParams.get("max") !== null) {
	max.value = url.searchParams.get("max");
}
if (url.searchParams.get("searchBar") !== null) {
	searchBar.value = url.searchParams.get("searchBar");
}

if(archaeology === null){
	archaeology = [];
}else{
	archaeology = archaeology.archaeology;
}

if(sessionStorage.getItem("filter") != null){
	session = JSON.parse(sessionStorage.getItem("filter"));
	if(viewedItemId == undefined && viewedItemType == undefined){
		rarity.value = session.rarity
		category.value = session.category
		obtained.value = session.obtained
		min.value = session.min
		max.value = session.max
		searchBar.value = session.searchBar
		sessionStorage.removeItem("filter");
	}
}

function Stats(stat, value, array){ // stat should be in Title Case // copied from DOM
	if(stat === "Defence" || stat === "Block Defence" || stat === "Fishing Skill" || stat === "Max Health") {
		return stat+": "+NumberSign(value)+"<br>";
	}else if(stat === "Critical Chance" || stat === "Dodge Chance" || stat === "Looting" || stat === "Reflection" || stat === "Lifesteal" || stat === "Xp Bonus"){
		return stat+": "+NumberSign(value)+"%<br>";
	}else if(stat === "Health Regen" || stat === "Swim Speed" || stat === "Walk Speed" || stat === "Ice Speed" || stat === "Focus Speed"){
		return stat+": "+NumberSign(value)+"/s<br>";
	}else if(stat === "Stun"){
		return stat+": "+NumberSign(value)+"s<br>";
	}else if(stat === "Reload Time"){
		return stat+": "+(NumberSign(value/500))+"s<br>";
	}else if(stat === "Flaming"){
		return stat+" "+Romanize(value)+"<br>";
	}else if(stat === "Poison X"){
		return "Poison: "+NumberSign(value)+"/"+array.poisonY+"s<br>";
	}else if(stat === "Damage"){
		return stat+": "+value + (array.maxDamage > value ? "-" + array.maxDamage : "")+"<br>";
	}else if(stat === "Frostaura"){
		return stat+"<br>";
	}else{
		return "";
	}
};

function validate(strValue){
	var objRegExp  = /^[a-zA-Z \u00C0-\u00ff]+$/;
	if(!objRegExp.test(strValue)){
		objRegExp  = /^$/;
		return objRegExp.test(strValue);
	}else{
		return objRegExp.test(strValue);
	}
}

function checkChange(){
	window.requestAnimationFrame(checkChange);
	if(window.innerWidth != previousWidth){
		if(window.innerWidth >= 245*3+45){
			screenSize = window.innerWidth;
		}else{
			screenSize = 245*3+45;
		}
		previousWidth = window.innerWidth;
		arrange();
	}
	if(rarity.value != previousRarity || category.value != previousCategory || event.value != previousEvent || obtained.value != previousObtained || min.value != previousMin || max.value != previousMax || searchBar.value != previousSearch){
		previousCategory = category.value;
		array = [];
		if(min.value > 1 || (min.value < 1 && min.value.length > 0) || min.value.length > 1){
			min.value = previousMin;
		}
		if(max.value > 1 || (max.value < 1 && max.value.length > 0) || max.value.length > 1){
			max.value = previousMax;
		}
		if(!validate(searchBar.value)){
			searchBar.value = previousSearch;
		}
		if(category.value == "all"){
			for(var i = 0; i < 7; i++){
				for(var x = 2; x < Items[Object.keys(Items)[i]].length; x++){
					if(!Items[Object.keys(Items)[i]][x].uncollectable && (!Items[Object.keys(Items)[i]][x].limitedEdition || archaeology.includes(Items[Object.keys(Items)[i]][x].name))){
						array.push(Items[Object.keys(Items)[i]][x]);
					}
				}
			}
		}else if(category.value == "armour"){
			for(var i = 0; i < 4; i++){
				for(var x = 2; x < Items[Object.keys(Items)[i]].length; x++){
					if(!Items[Object.keys(Items)[i]][x].uncollectable && (!Items[Object.keys(Items)[i]][x].limitedEdition || archaeology.includes(Items[Object.keys(Items)[i]][x].name))){
						array.push(Items[Object.keys(Items)[i]][x]);
					}
				}
			}
		}else if(category.value == "weapon"){
			for(var i = 4; i < 7; i++){
				for(var x = 2; x < Items[Object.keys(Items)[i]].length; x++){
					if(!Items[Object.keys(Items)[i]][x].uncollectable && (!Items[Object.keys(Items)[i]][x].limitedEdition || archaeology.includes(Items[Object.keys(Items)[i]][x].name))){
						array.push(Items[Object.keys(Items)[i]][x]);
					}
				}
			}
		}else{
			for(var x = 2; x < Items[Object.keys(Items)[category.value]].length; x++){
				if(!Items[Object.keys(Items)[category.value]][x].uncollectable && (!Items[Object.keys(Items)[category.value]][x].limitedEdition || archaeology.includes(Items[Object.keys(Items)[category.value]][x].name))){
					array.push(Items[Object.keys(Items)[category.value]][x]);
				}
			}
		}
		arrayLength = array.length;
		previousRarity = rarity.value;
		var b = 0;
		if(rarity.value != "all"){
			for(var i = 0; i < arrayLength; i++){
				if(array[i-b].rarity != rarity.value){
					array.splice(i-b,1);
					b++;
				}
			}
		}
		arrayLength = array.length;
		previousEvent = event.value;
		var b = 0;
		if(event.value != "all" && event.value != "other"){
			for(var i = 0; i < arrayLength; i++){
				if(array[i-b].event != event.value && (event.value != "none" || array[i-b].event != undefined)){
					array.splice(i-b,1);
					b++;
				}
			}
		}else if(event.value == "other"){
			for(var i = 0; i < arrayLength; i++){
				if(events.includes(array[i-b].event) || array[i-b].event == undefined){
					array.splice(i-b,1);
					b++;
				}
			}
		}
		arrayLength = array.length;
		previousMin = min.value;
		previousMax = max.value;
		b = 0;
		for(var i = 0; i < arrayLength; i++){
			if(array[i-b].tier < min.value || array[i-b].tier > max.value){
				array.splice(i-b,1);
				b++;
			}
		}
		arrayLength = array.length;
		b = 0;
		previousSearch = searchBar.value;
		if(document.getElementById("searchBar").value != ""){
			var input = document.getElementById("searchBar");
			var filter = input.value.toLowerCase();
			for (var i = 0; i < arrayLength; i++) {
				if (array[i-b].name.toLowerCase().indexOf(filter) < 0) {
					array.splice(i-b,1);
					b++;
				}
			}
		}
		progress = 0;
		for(var i = 0; i < array.length; i++){
			if(archaeology != null && archaeology.includes(array[i].name)){
				progress++;
			}/*else if(category.value == 8){
				var current = true;
				for(x = 0; x < array[i].armour.length; x++){
					if(archaeology != null && !archaeology.includes(array[i].armour[x])){
						current = false;
					}
				}
				if(current){
					progress++;
				}
			}*/
		}
		displayed = array.length;
		arrayLength = array.length;
		previousObtained = obtained.value;
		b = 0;
		if(obtained.value != "all"){
			for(var i = 0; i < arrayLength; i++){
				/*var current = true;
				if(category.value == 8){
					for(x = 0; x < array[i-b].armour.length; x++){
						if(archaeology != null && !archaeology.includes(array[i-b].armour[x])){
							current = false;
						}
					}
				}*/
				if(obtained.value == "only"){
					if(archaeology == null || !archaeology.includes(array[i-b].name)/* && (category.value == 8 && !current || category.value != 8)*/){
						array.splice(i-b,1);
						b++;
					}
				}else{
					if((archaeology != null && archaeology.includes(array[i-b].name))/* || category.value == 8 && current*/){
						array.splice(i-b,1);
						b++;
					}
				}
			}
		}
		array.sort(function(a, b){
			if(a.name < b.name) { return -1; }
			if(a.name > b.name) { return 1; }
			return 0;
		})
		arrange();
	}
}

function arrange(){
	var c = 0;
	var columns = Math.floor((screenSize-45)/245);
	document.getElementById("all").innerHTML = "";
	for(var d = 0; d < columns; d++){
		document.getElementById("all").innerHTML += '<ul id="flashcardlist'+d+'" class="flashcardlist"></ul>';
	}
	if(viewedItemId != undefined && viewedItemType != undefined){
		document.getElementById("all").innerHTML += '<ul id="flashcardlist0" class="flashcardlist"></ul>';
		if(viewedItemType == "set"){
			document.getElementById("all").innerHTML += '<ul id="flashcardlist1" class="flashcardlist"></ul>';
			document.getElementById("all").innerHTML += '<ul id="flashcardlist2" class="flashcardlist"></ul>';
			document.getElementById("all").innerHTML += '<ul id="flashcardlist3" class="flashcardlist"></ul>';
			document.getElementById("all").innerHTML += '<ul id="flashcardlist4" class="flashcardlist"></ul>';
			columns = 5;
		}
	}
	for(var i = 0; i < array.length; i++){
		for(var a = 0; a < columns; a++){
			if(document.getElementById("flashcardlist"+a).offsetHeight < document.getElementById("flashcardlist"+c).offsetHeight){
				c = a;
			}
			for(var e = 0; e < columns - 1; e++){
				if(c == columns-1 && a == columns-1 && document.getElementById("flashcardlist"+e).offsetHeight == document.getElementById("flashcardlist"+c).offsetHeight){
					c = e;
				}
			}
		}
		//if(category.value != 8 && (viewedItemId == undefined || viewedItemType == undefined || array[i].type != "set")){
			document.getElementById("flashcardlist"+c).innerHTML += '<li class="box" id="box'+i+'" '+(archaeology != null ? archaeology.includes(array[i].name) ? "style='border: 5px solid darkgreen'" : "" : "")+'><img src="../'+(array[i].imageArchaeology == undefined ? array[i].image : array[i].imageArchaeology)+'" class="img"><p id="name'+i+'" class="para"></p><p id="tier'+i+'" class="para"></p><p id="stats'+i+'" class="para"></p><p id="set'+i+'" class="para"></p><p id="function'+i+'" class="para"></p><p id="lore'+i+'" class="para"></p></li>';
		/*}else{
			var current = true;
			for(x = 0; x < array[i].armour.length; x++){
				if(archaeology != null && !archaeology.includes(array[i].armour[x]))
				{
					current = false;
				}
			}
			if(current){
				document.getElementById("flashcardlist"+c).innerHTML += '<li class="box" id="box'+i+'" style="border: 5px solid darkgreen"><img src="../'+(array[i].imageArchaeology == undefined ? array[i].image : array[i].imageArchaeology)+'" class="img"><p id="name'+i+'" class="para"></p><p id="tier'+i+'" class="para"></p><p id="stats'+i+'" class="para"></p><p id="set'+i+'" class="para"></p><p id="function'+i+'" class="para"></p><p id="lore'+i+'" class="para"></p></li>';
			}else{
				document.getElementById("flashcardlist"+c).innerHTML += '<li class="box" id="box'+i+'"><img src="../'+(array[i].imageArchaeology == undefined ? array[i].image : array[i].imageArchaeology)+'" class="img"><p id="name'+i+'" class="para"></p><p id="tier'+i+'" class="para"></p><p id="stats'+i+'" class="para"></p><p id="set'+i+'" class="para"></p><p id="function'+i+'" class="para"></p><p id="lore'+i+'" class="para"></p></li>';
			}
		}*/
		document.getElementById("flashcardlist"+c).style.left = 25+c*245+((screenSize-45)-(((Math.floor((screenSize-45)/245)))*245))/2+"px";
		if(viewedItemType == "set"){
			document.getElementById("flashcardlist"+c).style.left = 140+260*c+"px";
		}
		document.getElementById("name"+i).innerHTML = "<b>"+array[i].name+"</b>";
		if(array[i].rarity == "common"){
			document.getElementById("name"+i).style.color = "black";
		}else if(array[i].rarity == "unique"){
			document.getElementById("name"+i).style.color = "orange";
		}else{
			document.getElementById("name"+i).style.color = "purple";
		}
		document.getElementById("tier"+i).innerHTML = "";
		if(category.value == 7){ // should be 8 but not sure if we want it
			console.log("ERROR");
			for(var f = 0; f < array[i].armour.length; f++){
				document.getElementById("tier"+i).innerHTML += "<br>"+array[i].armour[f];
			}
			document.getElementById("tier"+i).innerHTML += "<br>";
			for(var f = 0; f < 7; f++){
				for(var g = 0; g < Items[Object.keys(Items)[f]].length; g++){
					if(Items[Object.keys(Items)[f]][g].name == array[i].armour[0]){
						if(Items[Object.keys(Items)[f]][g].lore != undefined && Items[Object.keys(Items)[f]][g].lore != ""){
							document.getElementById("lore"+i).innerHTML = "<br><i>"+Items[Object.keys(Items)[f]][g].lore+"</i>";
						}
					}
				}
			}
		}
		document.getElementById("tier"+i).innerHTML += "<br>Tier: "+array[i].tier;
		if(category.value == 8 || viewedItemType == "set"){
			document.getElementById("tier"+i).innerHTML += "<br><br>Set Bonus:";
		}
		for(var a = 0; a < Object.keys(array[i].stats).length; a++){
			
			document.getElementById("stats"+i).innerHTML += Stats(FromCamelCase(Object.keys(array[i].stats)[a]), array[i].stats[Object.keys(array[i].stats)[a]], array[i].stats);
			
			/*var replaceStat = Object.keys(array[i].stats)[a].replace( /([A-Z])/g, " $1" );
			if(Object.keys(array[i].stats)[a] != "flaming"){
				document.getElementById("stats"+i).innerHTML += replaceStat.charAt(0).toUpperCase() + replaceStat.slice(1)+": "+array[i].stats[Object.keys(array[i].stats)[a]]+"<br>";
			}else{
				document.getElementById("stats"+i).innerHTML += "Flaming "+Romanize(array[i].stats[Object.keys(array[i].stats)[a]])+"<br>";
			}*/
		}
		if(array[i].multiplier !== undefined){
			for(let a = 0; a < array[i].multiplier.length; a++){
				document.getElementById("stats"+i).innerHTML += array[i].multiplier[a].text;
			}
		}
		if(array[i].set != undefined && array[i].set != ""){
			document.getElementById("set"+i).innerHTML = "<br>Part of "+Items.set[array[i].set].name;
		}
		if(array[i].lore != undefined && array[i].lore != ""){
			document.getElementById("lore"+i).innerHTML = "<br><i>"+array[i].lore+"</i>";
		}
		if(array[i].archaeologyFunctionText != undefined && array[i].archaeologyFunctionText != ""){
			document.getElementById("function"+i).innerHTML = "<br>"+array[i].archaeologyFunctionText+"<br>";
		}else if(array[i].functionText != undefined && array[i].functionText != ""){
			document.getElementById("function"+i).innerHTML = "<br>"+array[i].functionText+"<br>";
		}
		if(array[i].chooseStats != undefined){
			document.getElementById("function"+i).innerHTML += "<br>One of the following stats may be chosen:<br>";
			for(var a = 0; a < Object.keys(array[i].chooseStats).length; a++){
				var replaceStat = Object.keys(array[i].chooseStats)[a].replace( /([A-Z])/g, " $1" );
				document.getElementById("function"+i).innerHTML += Stats(replaceStat.charAt(0).toUpperCase() + replaceStat.slice(1), array[i].chooseStats[Object.keys(array[i].chooseStats)[a]]);
			}
		}
		if(array[i].conditionalStats != undefined){
			for(var x = 0; x < array[i].conditionalStats.length; x++){
				document.getElementById("function"+i).innerHTML += "<br>"+array[i].conditionalStats[x].text+"<br>";
				for(var a = 0; a < Object.keys(array[i].conditionalStats[x].stats).length; a++){
					document.getElementById("function"+i).innerHTML += Stats(FromCamelCase(Object.keys(array[i].conditionalStats[x].stats)[a]), array[i].conditionalStats[x].stats[Object.keys(array[i].conditionalStats[x].stats)[a]], array[i].conditionalStats[x].stats)+"</span>";
				}
			}
		}
	}
	if(viewedItemId == undefined || viewedItemType == undefined){
		for(let i = 0; i < array.length; i++){
			document.getElementById("box"+i).onclick = function(){
				if(localStorage.getItem("accept") === "true"){
					session.category = category.value;
					session.rarity = rarity.value;
					session.obtained = obtained.value;
					session.min = min.value;
					session.max = max.value;
					session.searchBar = searchBar.value;
					sessionStorage.setItem("filter", JSON.stringify(session));
				}
				window.location += "?id="+array[i].id+"&type="+array[i].type;
			}
		}
		document.getElementById("filters").style.width = (((Math.floor((screenSize-45)/245)))*245)-35+"px";
		document.getElementById("progress").style.width = (((Math.floor((screenSize-45)/245)))*245)-25+"px";
		document.getElementById("filters").style.left = 25+((screenSize-45)-(((Math.floor((screenSize-45)/245)))*245))/2+"px";
		document.getElementById("progress").style.left = 25+((screenSize-45)-(((Math.floor((screenSize-45)/245)))*245))/2+"px";
		document.getElementById("searchBar").style.width = (((Math.floor((screenSize-45)/245)))*245)-95+"px";
		var progressDisplayed = !isNaN(progress/displayed) && isFinite(progress/displayed) ? progress/displayed : 0;
		if(category.value != 8){
			document.getElementById("progressText").innerHTML = "You have obtained "+Math.floor(progressDisplayed*100)+"% of "+(total == displayed ? "all" : "these")+" items";
			document.getElementById("innerProgress").style.width = progressDisplayed*((((Math.floor((screenSize-45)/245)))*245)-24.5)+"px";
		}else{
			document.getElementById("progressText").innerHTML = "You have obtained "+Math.floor(progressDisplayed*100)+"% of "+(setTotal == displayed ? "all" : "these")+" sets";
			document.getElementById("innerProgress").style.width = progressDisplayed*((((Math.floor((screenSize-45)/245)))*245)-24.5)+"px";
		}
		if(columns == 3){
			document.getElementById("space0").style.width = (document.getElementById("filters").offsetWidth/2)-250+"px";
			document.getElementById("space2").style.width = (document.getElementById("filters").offsetWidth/2)-250+"px";
			document.getElementById("space4").style.width = (document.getElementById("filters").offsetWidth/2)-250+"px";
			document.getElementById("space2").style.display = "";
			document.getElementById("space1").style.display = "none";
			document.getElementById("space3").style.display = "none";
			document.getElementById("filters").style.height = "250px";
			document.getElementById("br2").style.display = "none";
			document.getElementById("br3").style.display = "";
			document.getElementById("br").style.display = "";
			for(var i = 0; i < columns; i++){
				document.getElementsByClassName("flashcardlist")[i].style.top = "365px";
			}
		}else/* if(columns <= 5)*/{
			document.getElementById("space0").style.width = (document.getElementById("filters").offsetWidth/4)-150+"px";
			document.getElementById("space1").style.width = (document.getElementById("filters").offsetWidth/4)-150+"px";
			document.getElementById("space3").style.width = (document.getElementById("filters").offsetWidth/4)-150+"px";
			document.getElementById("space4").style.width = (document.getElementById("filters").offsetWidth/4)-150+"px";
			document.getElementById("space1").style.display = "";
			document.getElementById("space3").style.display = "";
			document.getElementById("space2").style.display = "none";
			document.getElementById("filters").style.height = "200px";
			document.getElementById("br2").style.display = "";
			document.getElementById("br3").style.display = "none";
			document.getElementById("br").style.display = "none";
			for(var i = 0; i < columns; i++){
				document.getElementsByClassName("flashcardlist")[i].style.top = "315px";
			}
		}/*else{
			for(var i = 0; i < 4; i++){
				document.getElementById("space"+i).style.width = (document.getElementById("filters").offsetWidth/4)-319+"px";
			}
			document.getElementById("space1").style.display = "";
			document.getElementById("space2").style.display = "";
			document.getElementById("filters").style.height = "150px";
			document.getElementById("br").style.display = "none";
			document.getElementById("br3").style.display = "none";
			for(var i = 0; i < columns; i++){
				document.getElementsByClassName("flashcardlist")[i].style.top = "265px";
			}
		}*/
		document.getElementById("filters").hidden = false;
		document.getElementById("progress").style.top = document.getElementById("filters").offsetHeight + 45 + "px";
	}else{ // viewed item
		document.getElementById("flashcardlist0").style.left = "100px";
		document.getElementById("flashcardlist0").style.top = "100px";
		if(Items[viewedItemType][viewedItemId].set != undefined){
			document.getElementById("box1").onclick = function(){
				window.location = "./index.html?id="+Items[viewedItemType][viewedItemId].set+"&type=set";
			}
		}
		if(viewedItemType == "set"){
			for(let i = 1; i < 5; i++){
				document.getElementById("box"+i).onclick = function(){
					window.location = "./index.html?id="+array[i].id+"&type="+array[i].type;
				}
			}
		}
		if(viewedItemType != "set"){
			document.getElementById("obtain").hidden = false;
			document.getElementById("obtain").style.top = "100px";
			document.getElementById("obtain").style.width = (window.innerWidth - 500 < 1000 ? window.innerWidth - 500 : 1000) + "px";
			document.getElementById("obtain").innerHTML = archaeology.includes(Items[viewedItemType][viewedItemId].name) ? "You have obtained this item." : "You have not yet obtained this item";
			document.getElementById("obtain").innerHTML += "<br><br>"+Items[viewedItemType][viewedItemId].obtain;
			document.getElementById("obtain").innerHTML += "<br><br>Sells for "+Items[viewedItemType][viewedItemId].sellPrice+" gold at an item buyer.";
		}
		document.getElementById("stats").hidden = false;
		document.getElementById("stats").style.top = viewedItemType != "set" ? 130 + document.getElementById("obtain").offsetHeight + "px" : "100px";
		document.getElementById("stats").style.width = (window.innerWidth - 500 < 1000 ? window.innerWidth - 500 : 1000) + "px";
		document.getElementById("stats").innerHTML = "";
		for(var i = 0; i < Object.keys(Items[viewedItemType][viewedItemId].stats).length; i++){
			var replaceStat = Object.keys(Items[viewedItemType][viewedItemId].stats)[i].replace( /([A-Z])/g, " $1" );
			if(Object.keys(Items[viewedItemType][viewedItemId].stats)[i] == "damage" && Items[viewedItemType][viewedItemId].stats.maxDamage != undefined){
				document.getElementById("stats").innerHTML += "<tr><td>Damage</td><td>"+StatsInfo.staffDamage+"</td></tr>";
			}else if(Object.keys(Items[viewedItemType][viewedItemId].stats)[i] == "flaming"){
				document.getElementById("stats").innerHTML += "<tr><td>Flaming</td><td>"+StatsInfo.flaming[Items[viewedItemType][viewedItemId].stats.flaming]+"</td></tr>";
			}else if(StatsInfo[Object.keys(Items[viewedItemType][viewedItemId].stats)[i]] != undefined){
				document.getElementById("stats").innerHTML += "<tr><td>"+replaceStat[0].toUpperCase()+replaceStat.slice(1)+"</td><td>"+StatsInfo[Object.keys(Items[viewedItemType][viewedItemId].stats)[i]]+"</td></tr>";
			}
		}
		if(Items[viewedItemType][viewedItemId].chooseStats != undefined){
			for(var i = 0; i < Object.keys(Items[viewedItemType][viewedItemId].chooseStats).length; i++){
				var replaceStat = Object.keys(Items[viewedItemType][viewedItemId].chooseStats)[i].replace( /([A-Z])/g, " $1" );
				document.getElementById("stats").innerHTML += "<tr><td>"+replaceStat[0].toUpperCase()+replaceStat.slice(1)+"</td><td>"+StatsInfo[Object.keys(Items[viewedItemType][viewedItemId].chooseStats)[i]]+"</td></tr>";
			}
		}
		if(viewedItemType == "set"){
			for(var i = 1; i < 5; i++){
				document.getElementById("flashcardlist"+i).style.top = 150 + document.getElementById("stats").offsetHeight + "px";
			}
		}
		document.getElementById("back").onclick = function(){
			window.location.replace("./index.html"); // archaeology
		}
		if(Items[viewedItemType][viewedItemId].set != undefined){
			document.getElementById("box1").getElementsByTagName("img")[0].onload = function(){
				document.getElementById("back").hidden = false;
				document.getElementById("back").style.top = 105 + document.getElementById("flashcardlist0").offsetHeight + "px";
			}
		}else{
			document.getElementById("box0").getElementsByTagName("img")[0].onload = function(){
				document.getElementById("back").hidden = false;
				document.getElementById("back").style.top = 105 + document.getElementById("flashcardlist0").offsetHeight + "px";
			}
		}
	}
}

var StatsInfo = {
	damage: "Changes damage dealt from a basic attack. Can interact with some spells and abilities to affect how strong they are.",
	staffDamage: "Changes damage dealt from a basic attack. The maximum damage is achieved by channelling the projectile to its full size. Can interact with some spells and abilities to affect how strong they are.",
	defence: "Reduces damage taken. 1 defence = 0.1 less damage taken.",
	maxHealth: "Changes your maximum health.",
	range: "The value that should be added to your range.",
	reloadTime: "Minimum time between finishing an attack and starting a new one. Includes blocking for knight.",
	walkSpeed: "Changes movement speed on land.",
	swimSpeed: "Changes movement speed in water (and mud).",
	iceSpeed: "Changes movement speed on ice.",
	healthRegen: "Changes rate of health regeneration.",
	looting: "Changes chance of receiving items from a corpse.",
	focusSpeed: "Changes the speed that you can focus your shots.",
	variance: "Changes the distance in pixels that your arrow can vary from your cursor.",
	blockDefence: "Changes the defence gained when you block (hold your right click button).",
	criticalChance: "Changes chance of dealing double damage with an attack.",
	dodgeChance: "Changes chance of ignoring an enemy attack.",
	flaming: ["Error", "Makes your basic attacks flaming, meaning 1 damage is dealt every second for three seconds. On attack, this status is refreshed. Ignores defence."],
	poison: "Deals bonus damage to the enemy over a time period in seconds. This ability can stack. Ignores defence.",
	reflection: "Changes the amount of damage dealt back to enemies when you are attacked, as a percentage of the damage dealt to you. Doesn't reflect status effects.",
	stun: "Changes the amount of time (in seconds) that you stun an enemy for after it attacks. When stunned, an enemy cannot move, attack, cast or channel. The enemy continues to regen.",
	lifesteal: "Changes the amount of health healed for when you damage an enemy with a basic attack, as a percentage of the damage dealt. Doesn't heal for status effects.",
	xpBonus: "Increases XP received as a percentage.",
	frostaura: "Slows enemies by 50% within a 150px range.",
	fishingSkill: "Changes the fish that can be fished up from a location.",
}

if(viewedItemId != undefined && viewedItemType != undefined){
	document.getElementById("filters").hidden = true;
	document.getElementById("progress").hidden = true;
	array.push(Items[viewedItemType][viewedItemId]);
	if(Items[viewedItemType][viewedItemId].set != undefined){
		array.push(Items.set[Items[viewedItemType][viewedItemId].set]);
	}
	if(viewedItemType == "set"){
		for(var i = 0; i < 4; i++){
			for(var x = 0; x < Items[Object.keys(Items)[i]].length; x++){
				if(Items[viewedItemType][viewedItemId].armour.includes(Items[Object.keys(Items)[i]][x].name)){
					array.push(Items[Object.keys(Items)[i]][x]);
				}
			}
		}
	}
	//var screenSize = window.innerWidth;
	arrange();
}
else{
	var previousWidth = window.innerWidth;
	var previousCategory = "";
	var previousRarity = "";
	var previousEvent = "";
	var previousObtained = "";
	var previousMin = "";
	var previousMax = "";
	var previousSearch = "";
	var screenSize = 245*3+45;
	var total = 0;
	var setTotal = Items.set.length-2;
	var displayed = 0;
	var progress = 0;
	if(window.innerWidth >= 245*3+45){
		screenSize = window.innerWidth;
	}else{
		screenSize = 245*3+45;
	}
	for(var i = 0; i < 7; i++){
		for(var x = 2; x < Items[Object.keys(Items)[i]].length; x++){
			if(!Items[Object.keys(Items)[i]][x].uncollectable){
				total++;
			}
		}
	}
	checkChange();
	arrange();
}