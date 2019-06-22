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

var array = [];
var arrayLength = 1;
var area = document.getElementById("area");
var category = document.getElementById("category");
var event = document.getElementById("event");
var obtained = document.getElementById("obtained");
var min = document.getElementById("min");
var max = document.getElementById("max");
var searchBar = document.getElementById("searchBar");
var events = ["Samhain", "Christmas"];

if(localStorage.getItem("a") !== null){
    let savedPlayer = JSON.parse(localStorage.getItem("a"));
    // bosses killed fix (if new bosses were added)
	player = Object.assign({}, Player);
    savedPlayer.bossesKilled = Object.assign(player.bossesKilled, savedPlayer.bossesKilled);
    Archer = Object.assign(player, savedPlayer); // add any new stuff added to savedata
}else{
    Archer = Player;
}
if(localStorage.getItem("m") !== null){
    let savedPlayer = JSON.parse(localStorage.getItem("m"));
    // bosses killed fix (if new bosses were added)
	player = Object.assign({}, Player);
    savedPlayer.bossesKilled = Object.assign(player.bossesKilled, savedPlayer.bossesKilled);
    Mage = Object.assign(player, savedPlayer); // add any new stuff added to savedata
}else{
    Mage = Player;
}
if(localStorage.getItem("k") !== null){
    let savedPlayer = JSON.parse(localStorage.getItem("k"));
    // bosses killed fix (if new bosses were added)
	player = Object.assign({}, Player);
    savedPlayer.bossesKilled = Object.assign(player.bossesKilled, savedPlayer.bossesKilled);
    Knight = Object.assign(player, savedPlayer); // add any new stuff added to savedata
}else{
    Knight = Player;
}

//var Archer = JSON.parse(localStorage.getItem("a")) !== null ? JSON.parse(localStorage.getItem("a")) : Player;
//var Mage = JSON.parse(localStorage.getItem("m")) !== null ? JSON.parse(localStorage.getItem("m")) : Player;
//var Knight = JSON.parse(localStorage.getItem("k")) !== null ? JSON.parse(localStorage.getItem("k")) : Player;

//array = Achievements;

function validate(strValue){
	var objRegExp  = /^[a-zA-Z0-9 \u00C0-\u00ff]+$/;
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
		if(window.innerWidth >= 490*2+45){
			screenSize = window.innerWidth;
		}else{
			screenSize = 490*2+45;
		}
		previousWidth = window.innerWidth;
		arrange();
	}
	if(area.value != previousArea || category.value != previousCategory || event.value != previousEvent || obtained.value != previousObtained || min.value != previousMin || max.value != previousMax || searchBar.value != previousSearch){
		previousCategory = category.value;
		array = [];
		if(min.value > 100 || (min.value < 1 && min.value.length > 0) || min.value.length > 3){
			min.value = previousMin;
		}
		if(max.value > 100 || (max.value < 1 && max.value.length > 0) || max.value.length > 3){
			max.value = previousMax;
		}
		if(!validate(searchBar.value)){
			searchBar.value = previousSearch;
		}
		if(category.value == "all"){
			array = [...Achievements];
		}else{
			for(var i = 0; i < Achievements.length; i++){
				if(Achievements[i].category.includes(category.value)){
					array.push(Achievements[i]);
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
		previousEvent = event.value;
		var b = 0;
		if(event.value != "all" && event.value != "other"){
			for(var i = 0; i < arrayLength; i++){
				if(array[i-b].event != event.value && (event.value != "none" || array[i-b].event != undefined)){
					array.splice(i-b,1);
					b++;
				}
			}
		}else if (event.value == "other"){
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
			if(array[i-b].points < min.value || array[i-b].points > max.value){
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
			if(Object.keys(archaeology).includes(ToCamelCase(array[i].name))){
				progress++;
			}
		}
		displayed = array.length;
		arrayLength = array.length;
		previousObtained = obtained.value;
		b = 0;
		if(obtained.value != "all"){
			for(var i = 0; i < arrayLength; i++){
				if(obtained.value == "only"){
					if(!Object.keys(archaeology).includes(ToCamelCase(array[i-b].name))){
						array.splice(i-b,1);
						b++;
					}
				}else{
					if(Object.keys(archaeology).includes(ToCamelCase(array[i-b].name))){
						array.splice(i-b,1);
						b++;
					}
				}
			}
		}
		/*array.sort(function(a, b){
			if(a.name < b.name) { return -1; }
			if(a.name > b.name) { return 1; }
			return 0;
		})*/
		arrange();
	}
}

function arrange(){
	var columns = Math.floor((screenSize-45)/490);
	document.getElementById("all").innerHTML = "";
	for(var d = 0; d < columns; d++){
		document.getElementById("all").innerHTML += '<ul id="flashcardlist'+d+'" class="flashcardlist"></ul>';
	}
	var c = -1;
	for(let i = 0; i < array.length; i++){
		c++;
		if(c >= columns){
			c = 0;
		}
		document.getElementById("flashcardlist"+c).innerHTML += '<li class="box" id="box'+i+'" '+(Object.keys(archaeology).includes(ToCamelCase(array[i].name)) ? "style='border: 5px solid darkgreen'" : "")+'><div class="img" id="img'+i+'" style="background-image: url(\''+array[i].image+'\')"</img></div><p id="name'+i+'" class="para"></p><p id="description'+i+'" class="para"></p><p id="date'+i+'" class="date"></p><p id="points'+i+'" class="points"></p></li>';
		document.getElementById("flashcardlist"+c).style.left = 25+c*490+((screenSize-45)-(((Math.floor((screenSize-45)/490)))*490))/2+"px";
		document.getElementById("name"+i).innerHTML = "<b>"+array[i].name+"</b>";
		document.getElementById("description"+i).style.width = "335px";
		if (array[i].points.toString().length === 2) {
			document.getElementById("description"+i).style.width = "310px";
		}
		else if (array[i].points.toString().length === 3) {
			document.getElementById("description"+i).style.width = "290px";
		}
		document.getElementById("description"+i).innerHTML = !array[i].hidden || Object.keys(archaeology).includes(ToCamelCase(array[i].name)) ? array[i].description : "???";
		document.getElementById("points"+i).innerHTML = array[i].points;
		if(archaeology[ToCamelCase(array[i].name)] != undefined){
			document.getElementById("date"+i).innerHTML = archaeology[ToCamelCase(array[i].name)];
			document.getElementById("points"+i).style.top = "38px";
		}
		if(array[i].position !== undefined){
			document.getElementById("img"+i).style.backgroundPosition = array[i].position.x+"%"+array[i].position.y+"%";
		}
		if(array[i].color !== undefined){
			document.getElementById("img"+i).style.backgroundColor = array[i].color;
		}
		if(array[i].size !== undefined){
			document.getElementById("img"+i).style.backgroundSize = array[i].size;
		}
		if(array[i].expand !== undefined){
			document.getElementById("box"+i).style.cursor = "pointer";
			if(array[i].expand.type === "progressBar" || array[i].expand.type === "redirect"){
				if (typeof array[i].expand.value !== "function") {
					document.getElementById("box"+i).innerHTML += "<div class='progressBar' id='progressBar"+i+"' hidden><div class='innerProgressBar' style='width: "+(array[i].expand.value/array[i].expand.total*433)+"px;'></div><div class='progressBarText'>"+(array[i].expand.value !== undefined ? array[i].expand.value : 0)+"/"+array[i].expand.total+"</div></div>";
				}else{
					document.getElementById("box"+i).innerHTML += "<div class='progressBar' id='progressBar"+i+"' hidden><div class='innerProgressBar' style='width: "+(array[i].expand.value()/array[i].expand.total*433)+"px;'></div><div class='progressBarText'>"+(array[i].expand.value() !== undefined ? array[i].expand.value() : 0)+"/"+array[i].expand.total+"</div></div>";
				}
				if(array[i].expand.type === "redirect"){ //style='columns: 1; text-align: center; font-size: 20px;'
					document.getElementById("box"+i).innerHTML += "<a hidden class='link' id='link"+i+"' href='"+array[i].expand.location+"' target='_blank'>"+array[i].expand.text+"</a>";
					document.getElementById("progressBar"+i).style.bottom = "35px";
				}
			}else if(array[i].expand.type === "checkList"){
				document.getElementById("box"+i).innerHTML += "<div class='checkList' id='progressBar"+i+"' hidden></div>";
				if(array[i].class === "single"){
					if(array[i].expand.saved === "quest"){
						for(let x = 0; x < array[i].expand.text.length; x++){
							generateList(i, x, Archer.quests.completedQuestArray.includes(array[i].expand.complete[x]), Mage.quests.completedQuestArray.includes(array[i].expand.complete[x]), Knight.quests.completedQuestArray.includes(array[i].expand.complete[x]))
						}
							/*let text = array[i].expand.text[x];
							let text2 = " <strong>";
							let length = 0;
							if(Archer.quests.completedQuestArray.includes(array[i].expand.complete[x])){
								length++;
								text2 += "&#10166";
							}
							if(Mage.quests.completedQuestArray.includes(array[i].expand.complete[x])){
								length++;
								text2 += "&#9882";
							}
							if(Knight.quests.completedQuestArray.includes(array[i].expand.complete[x])){
								length++;
								text2 += "&#9876";
							}
							document.getElementById("progressBar"+i).innerHTML += (text.length + (length > 0 ? length*2+2 : 0) > 30 ? text.substring(0, 30-(length > 0 ? length*2+2 : 0))+"..." : text)+text2+"</strong><br>";*/
					}else{
						for(let x = 0; x < array[i].expand.text.length; x++){
							//document.getElementById("progressBar"+i).innerHTML += array[i].expand.text[x]+"&nbsp;<strong>"+(Archer.quests.questProgress[array[i].expand.complete[x]] ? "&#10166" : "")+(Mage.quests.questProgress[array[i].expand.complete[x]] ? "&#9882" : "")+(Knight.quests.questProgress[array[i].expand.complete[x]] ? "&#9876" : "")+"</strong><br>";
							generateList(i, x, Archer.quests.questProgress[array[i].expand.complete[x]], Mage.quests.questProgress[array[i].expand.complete[x]], Knight.quests.questProgress[array[i].expand.complete[x]])
						}
					}
				}else{
					for(let x = 0; x < array[i].expand.text.length; x++){
						document.getElementById("progressBar"+i).innerHTML += array[i].expand.text[x]+(User.fish[array[i].expand.complete[x]] ? " &#10004;" : "")+"<br>";
					}
				}
			}
		}
	}
	for(let i = 0; i < array.length; i++){
		if(array[i].expand !== undefined){
			document.getElementById("box"+i).onclick = function(){
				//if(array[i].expand.type !== "redirect"){
					if(document.getElementById("progressBar"+i).hidden){
						if(array[i].expand.type === "progressBar"){
							document.getElementById("box"+i).style.height = "99px";
						}else if(array[i].expand.type === "redirect"){
							document.getElementById("box"+i).style.height = "124px";
							document.getElementById("link"+i).hidden = false;
						}else{
							document.getElementById("box"+i).style.height = "100%";
						}
						document.getElementById("progressBar"+i).hidden = false;
					}else{
						document.getElementById("box"+i).style.height = "60px";
						document.getElementById("progressBar"+i).hidden = true;
						if(array[i].expand.type === "redirect"){
							document.getElementById("link"+i).hidden = true;
						}
					}
				//}else{
					//window.open(array[i].expand.location);
				//}
			}
		}
	}
	document.getElementById("total").innerHTML = User.achievementPoints.total;
	document.getElementById("unclaimed").innerHTML = User.achievementPoints.unclaimed;
	document.getElementById("filters").hidden = false;
	document.getElementById("progress").hidden = false;
	document.getElementById("all").hidden = false;
	document.getElementById("filters").style.width = (((Math.floor((screenSize-45)/490)))*490)-35+"px";
	document.getElementById("pointsInfo").style.width = 5+(((Math.floor((screenSize-45)/490)))*490)-35+"px";
	document.getElementById("progress").style.width = (((Math.floor((screenSize-45)/490)))*490)-25+"px";
	document.getElementById("filters").style.left = 25+((screenSize-45)-(((Math.floor((screenSize-45)/490)))*490))/2+"px";
	document.getElementById("pointsInfo").style.marginLeft = 20+((screenSize-45)-(((Math.floor((screenSize-45)/490)))*490))/2+"px";
	document.getElementById("progress").style.left = 25+((screenSize-45)-(((Math.floor((screenSize-45)/490)))*490))/2+"px";
	document.getElementById("searchBar").style.width = (((Math.floor((screenSize-45)/490)))*490)-95+"px";
	var progressDisplayed = !isNaN(progress/displayed) && isFinite(progress/displayed) ? progress/displayed : 0;
	document.getElementById("progressText").innerHTML = "You have obtained "+Math.floor(progressDisplayed*100)+"% of "+(total == displayed ? "all" : "these")+" achievements";
	document.getElementById("innerProgress").style.width = progressDisplayed*((((Math.floor((screenSize-45)/490)))*490)-24.5)+"px";
	if(columns == 2){
		/*document.getElementById("space0").style.width = (document.getElementById("filters").offsetWidth/2)-430+"px";
		document.getElementById("space1").style.width = (document.getElementById("filters").offsetWidth/2)-430+"px";
		document.getElementById("space3").style.width = (document.getElementById("filters").offsetWidth/2)-300+"px";
		document.getElementById("space2").style.display = "none";
		document.getElementById("filters").style.height = "200px";
		document.getElementById("br").style.display = "";
		document.getElementById("br3").style.display = "none";
		for(var i = 0; i < columns; i++){
			document.getElementsByClassName("flashcardlist")[i].style.top = "315px";
		}*/
		document.getElementById("space0").style.width = (document.getElementById("filters").offsetWidth/2)-300+"px";
		document.getElementById("space2").style.width = (document.getElementById("filters").offsetWidth/2)-300+"px";
		document.getElementById("space4").style.width = (document.getElementById("filters").offsetWidth/2)-300+"px";
		document.getElementById("space2").style.display = "";
		document.getElementById("space1").style.display = "none";
		document.getElementById("space3").style.display = "none";
		document.getElementById("filters").style.height = "250px";
		document.getElementById("br2").style.display = "none";
		document.getElementById("br3").style.display = "";
		document.getElementById("br").style.display = "";
		for(var i = 0; i < columns; i++){
			document.getElementsByClassName("flashcardlist")[i].style.top = "415px";
		}
	/*if(columns == 1){
		document.getElementById("space0").style.width = (document.getElementById("filters").offsetWidth/3)-270+"px";
		document.getElementById("space1").style.width = (document.getElementById("filters").offsetWidth/3)-270+"px";
		document.getElementById("space3").style.width = (document.getElementById("filters").offsetWidth/2)-340+"px";
		document.getElementById("space1").style.display = "";
		document.getElementById("space2").style.display = "none";
		document.getElementById("filters").style.height = "200px";
		document.getElementById("br").style.display = "";
		document.getElementById("br3").style.display = "none";
		/*for(var i = 0; i < columns; i++){
			document.getElementsByClassName("flashcardlist")[i].style.top = "315px";
		}*/
	}else{
		/*for(var i = 0; i < 4; i++){
			document.getElementById("space"+i).style.width = (document.getElementById("filters").offsetWidth/4)-350+"px";
		}
		document.getElementById("space1").style.display = "";
		document.getElementById("space2").style.display = "";
		document.getElementById("filters").style.height = "150px";
		document.getElementById("br").style.display = "none";
		document.getElementById("br3").style.display = "none";
		for(var i = 0; i < columns; i++){
			document.getElementsByClassName("flashcardlist")[i].style.top = "265px";
		}*/
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
			document.getElementsByClassName("flashcardlist")[i].style.top = "365px";
		}
	}
	document.getElementById("progress").style.top = document.getElementById("filters").offsetHeight + 95 + "px";
}

function generateList (i, x, archerIf, mageIf, knightIf) {
	let text = array[i].expand.text[x];
	let text2 = " <strong>";
	let length = 0;
	if(archerIf){
		length++;
		text2 += "&#10166";
	}
	if(mageIf){
		length++;
		text2 += "&#9882";
	}
	if(knightIf){
		length++;
		text2 += "&#9876";
	}
	document.getElementById("progressBar"+i).innerHTML += (text.length + (length > 0 ? length*2+2 : 0) > 30 ? text.substring(0, 30-(length > 0 ? length*2+3 : 0))+"..." : text)+text2+"</strong><br>";
}

var previousWidth = window.innerWidth;
var previousCategory = "";
var previousArea = "";
var previousEvent = "";
var previousObtained = "";
var previousMin = "";
var previousMax = "";
var previousSearch = "";
var screenSize = 490*2+45;
var total = Achievements.length;
var displayed = 0;
var progress = 0;
if(window.innerWidth >= 490*2+45){
	screenSize = window.innerWidth;
}else{
	screenSize = 490*2+45;
}
var archaeology = JSON.parse(localStorage.getItem("user"));
if(archaeology == null){
	archaeology = {};
}else{
	archaeology = archaeology.achievements;
}
checkChange();
arrange();
