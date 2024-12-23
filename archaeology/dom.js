if (localStorage.getItem("user") !== null && JSON.parse(localStorage.getItem("user")).settings.dark) {
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
	--opacity: 0.8;
	--input: #aaaaaa;`
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
	--opacity: 0.6;
	--input: #ffffff;`
}

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
var area = document.getElementById("area");
var obtained = document.getElementById("obtained");
var display = document.getElementById("display");
var searchBar = document.getElementById("searchBar");
var session = {};
var User = JSON.parse(localStorage.getItem("user"));
var events = ["Samhain", "Christmas"];

document.getElementById("reset").onclick = function () {
	category.value = "all";
	rarity.value = "all";
	event.value = "all";
	area.value = "all";
	obtained.value = "all";
	display.value = "all";
	searchBar.value = "";
	url.searchParams.delete("category");
	url.searchParams.delete("rarity");
	url.searchParams.delete("event");
	url.searchParams.delete("area");
	url.searchParams.delete("obtained");
	url.searchParams.delete("display");
	url.searchParams.delete("searchBar");
	window.history.pushState({}, "Antorax Archaeology", url.toString());
}

if (url.searchParams.get("category") !== null) {
	category.value = url.searchParams.get("category");
}
if (url.searchParams.get("rarity") !== null) {
	rarity.value = url.searchParams.get("rarity");
}
if (url.searchParams.get("event") !== null) {
	event.value = url.searchParams.get("event");
}
if (url.searchParams.get("area") !== null) {
	area.value = url.searchParams.get("area");
}
if (url.searchParams.get("obtained") !== null) {
	obtained.value = url.searchParams.get("obtained");
}
if (url.searchParams.get("display") !== null) {
	display.value = url.searchParams.get("display");
}
if (url.searchParams.get("searchBar") !== null) {
	searchBar.value = url.searchParams.get("searchBar");
}

archaeology = [];
if(User !== null){
	archaeology = User.archaeology;
}

/*if(sessionStorage.getItem("filter") != null){
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
}*/

// returns what should be displayed of a stat on an item
// stat = string of what the stat is
// stat should be in Title Case
// value = value of the stat
// array = item's item.stats
// copied from Dom.inventory.stats
function Stats (stat, value, array) {
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
	else if (stat === "Breathing") {
		return "Underwater Breathing "+Romanize(value)+"<br>";
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
	else if (stat === "Frostaura" || stat === "Splash Damage" || stat === "Wind Shield" || stat === "Water Walking") {
		return stat+"<br>";
	}
	else if (stat === "Move During Focus") {
		return "Allows movement during attacks<br>";
	}
	else if (stat === "Unstoppable") {
		return "Grants invulnerability to stuns and slows<br>";
	}
	else if (stat === "Number Of Projectiles") {
		return "Number of Projectiles: "+value+"<br>";
	}
	else {
		return "";
	}
};

function validate(strValue){
	var objRegExp  = /^[a-zA-Z0-9 ',:+-.|]+$/;
	if(!objRegExp.test(strValue)){
		objRegExp  = /^$/;
		// return true if it is empty
		return objRegExp.test(strValue);
	}else{
		// return true if it is legal
		return true;//objRegExp.test(strValue);
	}
}

function init(){
	previousCategory = category.value;
	array = [];
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

	for (let x = 0; x < array.length; x++) {
		array[x].stats.tier = array[x].tier;
		array[x].allStats = Object.assign({}, array[x].stats);
		if (array[x].chooseStats !== undefined) {
			Object.assign(array[x].allStats, array[x].chooseStats);
		}
		if (array[x].conditionalStats !== undefined) {
			array[x].conditionalStats.forEach(stat => Object.assign(array[x].allStats, stat.stats));
		}
		if (array[x].conditionalChooseStats !== undefined) {
			array[x].conditionalChooseStats.forEach(stat => array[x].allStats[Object.keys(stat)[0]] = stat[Object.keys(stat)[0]]);
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
	previousArea = area.value;
	var b = 0;
	if(area.value != "all"){
		for(var i = 0; i < arrayLength; i++){
			if(!array[i-b].area.includes(area.value)){
				array.splice(i-b,1);
				b++;
			}
		}
	}
	arrayLength = array.length;
	previousObtained = obtained.value;
	var b = 0;
	if(obtained.value != "all"){
		for(var i = 0; i < arrayLength; i++){
			if(!array[i-b].obtain.includes(obtained.value)){
				array.splice(i-b,1);
				b++;
			}
		}
	}
	arrayLength = array.length;
	b = 0;
	previousSearch = searchBar.value;
	if(document.getElementById("searchBar").value != ""){
		var input = document.getElementById("searchBar");
		var filter = input.value.toLowerCase().replace(/ /g,"");

		filter = filter.split(",");
		for (let i = 0; i < filter.length; i++) {
			filter[i] = filter[i].split("|");
		}

		for (var i = 0; i < arrayLength; i++) {
			//if (filter.some(filter => array[i-b].name.toLowerCase().replace(/ /g,"").indexOf(filter) < 0 && !Object.keys(array[i-b].stats).some(stat => FromCamelCase(stat).toLowerCase().replace(/ /g,"").indexOf(filter) >= 0))) {
				//array[i-b].name.toLowerCase().indexOf(filter) < 0 || ) {

				for (let j = 0; j < filter.length; j++) {

					if (filter[j][0] !== "" || filter[j].length !== 1) {
						//filter[j] = filter[j].split("|");
						let anyLegal = false;

						for (let k = 0; k < filter[j].length; k++) {
							if (filter[j][k] !== "") {
								let legal = true;
								if (array[i-b].name.toLowerCase().replace(/ /g,"").indexOf(filter[j][k]) < 0 && !Object.keys(array[i-b].allStats).some(stat => FromCamelCase(stat).toLowerCase().replace(/ /g,"").indexOf(filter[j][k]) >= 0)) {
									let search = filter[j][k].split(":");
									let stat = array[i-b].allStats[Object.keys(array[i-b].allStats).find(stat => FromCamelCase(stat).toLowerCase().replace(/ /g,"") === search[0])];
									if (search.length === 2 && stat !== undefined) {
										if (search[1].substring(search[1].length-1) === "+" && stat >= parseFloat(search[1].substring(0, search[1].length-1))) {

										}
										else if (search[1].substring(search[1].length-1) === "-" && stat <= parseFloat(search[1].substring(0, search[1].length-1))) {

										}
										else if (stat === parseFloat(search[1]) || search[1] === "") {

										}else if (search[1].indexOf("-") > 0 && search[1].indexOf("-") < search[1].length-1) {
											let maxMin = search[1].split("-");
											if (stat < parseFloat(maxMin[0]) || stat > parseFloat(maxMin[1])) {
												legal = false;
											}
										}
										else {
											legal = false;
										}
									}
									else {
										legal = false;
									}
								}

								if (legal) {
									//array.splice(i-b,1);
									//b++;
									anyLegal = true;
									break;
								}
							}
						}

						if (!anyLegal) {
							array.splice(i-b,1);
							b++;
							break;
						}
					}
				}

			//}
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
	previousDisplay = display.value;
	b = 0;
	if(display.value != "all"){
		for(var i = 0; i < arrayLength; i++){
			/*var current = true;
			if(category.value == 8){
				for(x = 0; x < array[i-b].armour.length; x++){
					if(archaeology != null && !archaeology.includes(array[i-b].armour[x])){
						current = false;
					}
				}
			}*/
			if(display.value == "only"){
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
	});
	arrange();
	checkChange();
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
	if(rarity.value != previousRarity || category.value != previousCategory || event.value != previousEvent || area.value != previousArea || obtained.value != previousObtained || display.value != previousDisplay || searchBar.value != previousSearch){
		if (rarity.value != previousRarity) {
			if (rarity.value !== "all") {
				url.searchParams.set("rarity", rarity.value);
			}else{
				url.searchParams.delete("rarity");
			}
		}
		if (category.value != previousCategory) {
			if (category.value !== "all") {
				url.searchParams.set("category", category.value);
			}else{
				url.searchParams.delete("category");
			}
		}
		if (event.value != previousEvent) {
			if (event.value !== "all") {
				url.searchParams.set("event", event.value);
			}else{
				url.searchParams.delete("event");
			}
		}
		if (area.value != previousArea) {
			if (area.value !== "all") {
				url.searchParams.set("area", area.value);
			}else{
				url.searchParams.delete("area");
			}
		}
		if (obtained.value != previousObtained) {
			if (obtained.value !== "all") {
				url.searchParams.set("obtained", obtained.value);
			}else{
				url.searchParams.delete("obtained");
			}
		}
		if (display.value != previousDisplay) {
			if (display.value !== "all") {
				url.searchParams.set("display", display.value);
			}else{
				url.searchParams.delete("display");
			}
		}
		//let notSearchBar = true;
		if (searchBar.value != previousSearch) {
			if (searchBar.value != "") {
				url.searchParams.set("searchBar", searchBar.value);
			}else{
				url.searchParams.delete("searchBar");
			}
			init();
			//notSearchBar = false;
		}
		//if (notSearchBar) {
			//window.location.replace(url.toString());
		//}
		window.history.pushState({}, "Antorax Archaeology", url.toString());
		init();
		//arrange();
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
		document.getElementById("flashcardlist"+c).innerHTML += `<li class="box" id="box${i}" ${archaeology != null ? archaeology.includes(array[i].name) ? "style='border: 5px solid darkgreen'" : "" : ""}>
			<img src="../${array[i].imageArchaeology == undefined ? array[i].image : array[i].imageArchaeology}" class="img">
			<p id="name${i}" class="para">
			</p><p id="stats${i}" class="para">
			</p><p id="conditionalStats${i}" class="para">
			</p><p id="chooseStats${i}" class="para">
			</p><p id="conditionalChooseStats${i}" class="para">
			</p><p id="activeAbility${i}" class="para">
			</p><p id="functionText${i}" class="para">
			</p><p id="durability${i}" class="para">
			</p><p id="set${i}" class="para">
			</p><p id="lore${i}" class="para"></p>
		</li>`;
		document.getElementById("flashcardlist"+c).style.left = 25+c*245+((screenSize-45)-(((Math.floor((screenSize-45)/245)))*245))/2+"px";
		if(viewedItemType == "set"){
			document.getElementById("flashcardlist"+c).style.left = 140+260*c+"px";
		}

		// item name
		document.getElementById("name"+i).innerHTML = "<b>"+array[i].name+"</b>";
		// rarity colouring
		if(array[i].rarity == "common") {
			document.getElementById("name"+i).style.color = "var(--text)";
		}
		else if(array[i].rarity == "unique") {
			document.getElementById("name"+i).style.color = "orange";
		}
		else if(array[i].rarity == "mythic") {
			document.getElementById("name"+i).style.color = "#b13fea";
		}
		else if(array[i].rarity == "junk") {
			document.getElementById("name"+i).style.color = "darkgray";
		}
		else {
			document.getElementById("name"+i).style.color = "red";
		}

		/*if(category.value == 8){ // should be 8 but not sure if we want it
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
		}*/
		document.getElementById("stats"+i).innerHTML = "<br>Tier: "+array[i].tier+"<br>";
		if(category.value == 8 || viewedItemType == "set"){
			document.getElementById("stats"+i).innerHTML += "<br>Set Bonus:<br>";
		}
		for(var a = 0; a < Object.keys(array[i].stats).length; a++){
			document.getElementById("stats"+i).innerHTML += Stats(FromCamelCase(Object.keys(array[i].stats)[a]), array[i].stats[Object.keys(array[i].stats)[a]], array[i].stats);
		}
		if(array[i].multiplier !== undefined){
			for(let a = 0; a < array[i].multiplier.length; a++){
				document.getElementById("stats"+i).innerHTML += array[i].multiplier[a].text;
			}
		}
		if (array[i].allChooseStats) {
			document.getElementById("stats"+i).innerHTML += "All choose stats of this set are activated";
		}
		if(array[i].set != undefined && array[i].set != ""){
			document.getElementById("set"+i).innerHTML = "<br>Part of "+Items.set[array[i].set].name;
		}

		// lore
		// note the player also needs to have unlocked the item for it to show lore
		if(array[i].lore != undefined && array[i].lore != "" && archaeology != null && archaeology.includes(array[i].name)){
			document.getElementById("lore"+i).innerHTML = "<br><i>"+array[i].lore+"</i>";
		}

		if(array[i].chooseStats != undefined){
			document.getElementById("chooseStats"+i).innerHTML = "<br>One of the following stats may be chosen:<br>";
			for(var a = 0; a < Object.keys(array[i].chooseStats).length; a++){
				var replaceStat = Object.keys(array[i].chooseStats)[a].replace( /([A-Z])/g, " $1" );
				document.getElementById("chooseStats"+i).innerHTML += Stats(replaceStat.charAt(0).toUpperCase() + replaceStat.slice(1), array[i].chooseStats[Object.keys(array[i].chooseStats)[a]]);
			}
		}
		if(array[i].conditionalStats != undefined){
			for(var x = 0; x < array[i].conditionalStats.length; x++){
				document.getElementById("conditionalStats"+i).innerHTML = "<br>"+array[i].conditionalStats[x].text+"<br>";
				for(var a = 0; a < Object.keys(array[i].conditionalStats[x].stats).length; a++){
					document.getElementById("conditionalStats"+i).innerHTML += Stats(FromCamelCase(Object.keys(array[i].conditionalStats[x].stats)[a]), array[i].conditionalStats[x].stats[Object.keys(array[i].conditionalStats[x].stats)[a]], array[i].conditionalStats[x].stats)+"</span>";
				}
			}
		}
		if(array[i].conditionalChooseStats != undefined){
			document.getElementById("conditionalChooseStats"+i).innerHTML = "<br>One of the following stats may be chosen after they are unlocked:<br>";
			for(var a = 0; a < array[i].conditionalChooseStats.length; a++){
				document.getElementById("conditionalChooseStats"+i).innerHTML += Stats(FromCamelCase(Object.keys(array[i].conditionalChooseStats[a])[0]), array[i].conditionalChooseStats[a][Object.keys(array[i].conditionalChooseStats[a])[0]], array[i].conditionalChooseStats[a])+"</span>";
			}
		}
		if(array[i].archaeologyFunctionText != undefined && array[i].archaeologyFunctionText != ""){
			document.getElementById("functionText"+i).innerHTML = "<br>"+array[i].archaeologyFunctionText+"<br>";
		}else if(array[i].functionText != undefined && array[i].functionText != ""){
			document.getElementById("functionText"+i).innerHTML = "<br>"+array[i].functionText+"<br>";
		}

		// active ability text
		if (array[i].activeAbility != undefined) {// && item.chooseStats === undefined) {
			document.getElementById("activeAbility"+i).innerHTML = "Active ability: " + Spells[array[i].activeAbility].name + " " + Romanize(array[i].activeAbilityTier);
		}

		if(array[i].maxDurability != undefined){
			document.getElementById("durability"+i).innerHTML = "<br>Durability: " + array[i].maxDurability;
		}
	}
	if(viewedItemId == undefined || viewedItemType == undefined){
		for(let i = 0; i < array.length; i++){
			document.getElementById("box"+i).onclick = function(){
				/*if(localStorage.getItem("accept") === "true"){
					session.category = category.value;
					session.rarity = rarity.value;
					session.obtained = obtained.value;
					session.min = min.value;
					session.max = max.value;
					session.searchBar = searchBar.value;
					sessionStorage.setItem("filter", JSON.stringify(session));
				}*/
				url.searchParams.set("id", array[i].id);
				url.searchParams.set("type", array[i].type);
				window.location.replace(url.toString());
				//window.location += "?id="+array[i].id+"&type="+array[i].type;
			}
		}
		document.getElementById("filters").style.width = (((Math.floor((screenSize-45)/245)))*245)-35+"px";
		document.getElementById("progress").style.width = (((Math.floor((screenSize-45)/245)))*245)-25+"px";
		document.getElementById("filters").style.left = 25+((screenSize-45)-(((Math.floor((screenSize-45)/245)))*245))/2+"px";
		document.getElementById("progress").style.left = 25+((screenSize-45)-(((Math.floor((screenSize-45)/245)))*245))/2+"px";
		document.getElementById("searchBar").style.width = (((Math.floor((screenSize-45)/245)))*245)-95-35-110+"px";
		var progressDisplayed = !isNaN(progress/displayed) && isFinite(progress/displayed) ? progress/displayed : 0;
		if(category.value != 8){
			document.getElementById("progressText").innerHTML = "You have obtained "+Math.floor(progressDisplayed*100)+"% of "+(total == displayed ? "all" : "these")+" items";
			document.getElementById("innerProgress").style.width = progressDisplayed*((((Math.floor((screenSize-45)/245)))*245)-24.5)+"px";
		}else{
			document.getElementById("progressText").innerHTML = "You have obtained "+Math.floor(progressDisplayed*100)+"% of "+(setTotal == displayed ? "all" : "these")+" sets";
			document.getElementById("innerProgress").style.width = progressDisplayed*((((Math.floor((screenSize-45)/245)))*245)-24.5)+"px";
		}
		/*if(columns == 3){
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
		}else{
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
		}*/

		document.getElementById("filters").style.display = "flex";

		for(var i = 0; i < columns; i++){
			document.getElementsByClassName("flashcardlist")[i].style.top = document.getElementById("filters").offsetHeight+100+"px";
		}

		document.getElementById("progress").style.top = document.getElementById("filters").offsetHeight + 45 + "px";
	}else{ // viewed item
		document.getElementById("flashcardlist0").style.left = "100px";
		document.getElementById("flashcardlist0").style.top = "100px";
		if(Items[viewedItemType][viewedItemId].set != undefined){
			document.getElementById("box1").onclick = function(){
				url.searchParams.set("id", Items[viewedItemType][viewedItemId].set);
				url.searchParams.set("type", "set");
				window.location.replace(url.toString());
				//window.location = "./index.html?id="+Items[viewedItemType][viewedItemId].set+"&type=set";
			}
		}
		if(viewedItemType == "set"){
			for(let i = 1; i < Items[viewedItemType][viewedItemId].armour.length; i++){
				document.getElementById("box"+i).onclick = function(){
					url.searchParams.set("id", array[i].id);
					url.searchParams.set("type", array[i].type);
					window.location.replace(url.toString());
					//window.location = "./index.html?id="+array[i].id+"&type="+array[i].type;
				}
				document.getElementById("flashcardlist4").style.width = "250px";
			}
		}
		if(viewedItemType != "set"){
			document.getElementById("obtain").hidden = false;
			document.getElementById("obtain").style.top = "100px";
			document.getElementById("obtain").style.width = (window.innerWidth - 500 < 1000 ? window.innerWidth - 500 : 1000) + "px";
			document.getElementById("obtain").innerHTML = archaeology.includes(Items[viewedItemType][viewedItemId].name) ? "You have obtained this item." : "You have not yet obtained this item";
			document.getElementById("obtain").innerHTML += "<br><br>"+Items[viewedItemType][viewedItemId].obtainText;
			if (typeof Items[viewedItemType][viewedItemId].sellPrice !== "undefined" && Items[viewedItemType][viewedItemId].sellPrice !== 0) {
				document.getElementById("obtain").innerHTML += "<br><br>Sells for "+Items[viewedItemType][viewedItemId].sellPrice+" gold at an item buyer.";
			}
		}
		document.getElementById("stats").hidden = false;
		document.getElementById("stats").style.top = viewedItemType != "set" ? 130 + document.getElementById("obtain").offsetHeight + "px" : "100px";
		document.getElementById("stats").style.width = (window.innerWidth - 500 < 1000 ? window.innerWidth - 500 : 1000) + "px";
		document.getElementById("stats").innerHTML = "";

		//
		// displayed information about stats
		//
		// normal stats
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
		// choose stats
		if(Items[viewedItemType][viewedItemId].chooseStats != undefined){
			for(var i = 0; i < Object.keys(Items[viewedItemType][viewedItemId].chooseStats).length; i++){
				var replaceStat = Object.keys(Items[viewedItemType][viewedItemId].chooseStats)[i].replace( /([A-Z])/g, " $1" );
				document.getElementById("stats").innerHTML += "<tr><td>"+replaceStat[0].toUpperCase()+replaceStat.slice(1)+"</td><td>"+StatsInfo[Object.keys(Items[viewedItemType][viewedItemId].chooseStats)[i]]+"</td></tr>";
			}
		}
		// conditional stats
		if(Items[viewedItemType][viewedItemId].conditionalStats != undefined){
			for (let conditionNo = 0; conditionNo < Items[viewedItemType][viewedItemId].conditionalStats.length; conditionNo++) {
				for(var i = 0; i < Object.keys(Items[viewedItemType][viewedItemId].conditionalStats[conditionNo].stats).length; i++){
					var replaceStat = Object.keys(Items[viewedItemType][viewedItemId].conditionalStats[conditionNo].stats)[i].replace( /([A-Z])/g, " $1" );
					document.getElementById("stats").innerHTML += "<tr><td>"+replaceStat[0].toUpperCase()+replaceStat.slice(1)+"</td><td>"+StatsInfo[Object.keys(Items[viewedItemType][viewedItemId].conditionalStats[conditionNo].stats)[i]]+"</td></tr>";
				}
			}
		}
		// additionally specified stats / stat related (i.e. status effects) help
		if(Items[viewedItemType][viewedItemId].archaeologyAdditionalStats != undefined){
			for(var i = 0; i < Object.keys(Items[viewedItemType][viewedItemId].archaeologyAdditionalStats).length; i++){
				var replaceStat = Items[viewedItemType][viewedItemId].archaeologyAdditionalStats[i].replace( /([A-Z])/g, " $1" );
				document.getElementById("stats").innerHTML += "<tr><td>"+replaceStat[0].toUpperCase()+replaceStat.slice(1)+"</td><td>"+StatsInfo[Items[viewedItemType][viewedItemId].archaeologyAdditionalStats[i]]+"</td></tr>";
			}
		}
		// additional notes (tbd change formatting?)
		if (typeof Items[viewedItemType][viewedItemId].archaeologyNotes !== "undefined") {
			document.getElementById("stats").innerHTML += "<br><tr><td colspan='2'>"+Items[viewedItemType][viewedItemId].archaeologyNotes+"</td></tr>";
		}
		// tbd: class stats and additional choose stats

		if(viewedItemType == "set"){
			for(var i = 1; i < 5; i++){
				document.getElementById("flashcardlist"+i).style.top = 150 + document.getElementById("stats").offsetHeight + "px";
			}
		}
		document.getElementById("back").onclick = function(){
			url.searchParams.delete("id");
			url.searchParams.delete("type");

			window.location.replace(url.toString()); // archaeology
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
		document.getElementById("box0").style.cursor = "default";
	}
}

var StatsInfo = {
	damage: "Changes damage dealt from a basic attack. Can interact with some spells and abilities to affect how strong they are.",
	staffDamage: "Changes damage dealt from a basic attack. The maximum damage is achieved by channelling the projectile to its full size. Can interact with some spells and abilities to affect how strong they are.",
	defence: "Reduces damage taken. 1 defence = 0.1 less damage taken.",
	maxHealth: "Changes your maximum health.",
	rangeMultiplier: "Changes the radius in which you can attack. Also increases an archer's focus speed.",
	reloadTime: "Minimum time between finishing an attack and starting a new one.",
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
	flaming: ["Error", "Makes your basic attacks flaming, meaning 1 damage is dealt every second for 3 seconds. On attack, this status is refreshed. Ignores defence.", "Makes your basic attacks flaming, meaning 2 damage is dealt every second for 4 seconds. On attack, this status is refreshed. Ignores defence."],
	poisonX: "Deals bonus damage to the enemy over a time period in seconds. This ability can stack. Ignores defence.",
	reflection: "Changes the amount of damage dealt back to enemies when you are attacked, as a percentage of the damage dealt to you. Doesn't reflect status effects.",
	stun: "Changes the amount of time (in seconds) that you stun an enemy for after attacking it. When stunned, an enemy cannot move, attack, cast or channel. The enemy continues to regen.",
	lifesteal: "Changes the amount of health healed for when you damage an enemy with a basic attack, as a percentage of the damage dealt. Doesn't heal for status effects.",
	xpBonus: "Increases XP received from non-quest sources.",
	frostaura: "Slows enemies by 50% within your attack range.",
	hex: "Gives a chance to transform attacked enemies into an animal for 2 seconds, causing them to deal 90% less damage over that time period.",
	damagePercentage: "Adds additional percentage of damage dealt with basic attacks and spells.",
	fishingSkill: "Changes the fish that can be fished up from a location.",
	minimumVariance: "Changes the minimum variance of projectiles fired by the weapon.",
	durability: "The number of attacks that can be dealt by the weapon before it breaks.",
	splashDamage: "Damages all enemies at the location, rather than just one.",
	windShield: "Prevents player movement caused by wind.",
	slowTime: "Slows hit enemies for a certain period of time. This effect can stack to slow them for longer.",
	moveDuringFocus: "Allows player movement whilst focussing shots.",
	stealing: "Increases chance of looting gold and rare items from corpses.",
	healingPower: "Changes the amount of healing you receieve (not including health regen).",
	stealth: "Stops enemies from being able to target you (unless you are touching them or attack them).",
	rooting: "Changes the amount of time (in seconds) that you root an enemy for after attacking it. When rooted, an enemy cannot move. However, it can attack, cast, channel and regen.",
	knockback: "The distance enemies are knocked away from you when you attack them, in pixels.",
	interactRange: "Multiplier for the range from which you can interact with entities, i.e. talk to NPCs or loot a corpse. (base value is 240px)",
	poisonStrength: "Changes the amount poison damage dealt, as a percentage.",
	unstoppable: "Invulnerability to stuns, slows, roots, hexes.",
	exploding: "Whenever you kill an enemy, they explode, dealing 50% of your attack damage to nearby enemies and setting them on fire.",
	breathing: ["Error", "Allows underwater breathing for up to 10 seconds without air."],
	waterWalking: "Allows you to walk normal speed on water.",
	numberOfProjectiles: "Multiple projectiles are fired at once!",
	enemyAggro: "Changes how much aggro you generate from enemies.",
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
	var previousArea = "";
	var previousObtained = "";
	var previousDisplay = "";
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

	// get total number of items in archaeology
	total = GetTotalItems(function(item){return true}, archaeology);

	//checkChange();
	init();
	//arrange();
}

document.getElementById("circle").onmouseover = function () {
	document.getElementById("information").hidden = false;
}

document.getElementById("circle").onmouseleave = function () {
	document.getElementById("information").hidden = true;
}
