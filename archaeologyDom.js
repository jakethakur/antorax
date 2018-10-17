var array = [];
var arrayLength = 0;
var previousWidth = window.innerWidth;
var previousCategory = "";
var previousRarity = "";
var previousMin = "";
var previousMax = "";
var previousSearch = "";
var screenSize = 245*3+45;
if(window.innerWidth >= 245*3+45){
	screenSize = window.innerWidth;
}else{
	screenSize = 245*3+45;
}

function validate(strValue) {
	var objRegExp  = /^[a-zA-Z\u00C0-\u00ff]+$/;
	if(!objRegExp.test(strValue)){
		objRegExp  = /^$/;
		return objRegExp.test(strValue);
	}else{
		return objRegExp.test(strValue);
	}
}

checkChange();
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
	if(rarity.value != previousRarity || category.value != previousCategory || obtained.value != previousObtained || min.value != previousMin || max.value != previousMax || searchBar.value != previousSearch){
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
					if(!Items[Object.keys(Items)[i]][x].uncollectable){
						array.push(Items[Object.keys(Items)[i]][x]);
					}
				}
			}
		}else if(category.value == "armour"){
			for(var i = 0; i < 4; i++){
				for(var x = 2; x < Items[Object.keys(Items)[i]].length; x++){
					if(!Items[Object.keys(Items)[i]][x].uncollectable){
						array.push(Items[Object.keys(Items)[i]][x]);
					}
				}
			}
		}else if(category.value == "weapon"){
			for(var i = 4; i < 7; i++){
				for(var x = 2; x < Items[Object.keys(Items)[i]].length; x++){
					if(!Items[Object.keys(Items)[i]][x].uncollectable){
						array.push(Items[Object.keys(Items)[i]][x]);
					}
				}
			}
		}else{
			for(var x = 2; x < Items[Object.keys(Items)[category.value]].length; x++){
				if(!Items[Object.keys(Items)[category.value]][x].uncollectable){
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
		previousMin = min.value;
		previousMax = max.value;
		b = 0;
		for(var i = 0; i < arrayLength; i++){
			if(array[i-b].tier < min.value || array[i-b].tier < max.value){
				array.splice(i-b,1);
				b++;
			}
		}
		arrayLength = array.length
		previousObtained = obtained.value;
		b = 0;
		if(obtained.value != "all"){
			for(var i = 0; i < arrayLength; i++){
				if(obtained.value == "only"){
					if(!JSON.parse(localStorage.getItem("archaeology")).includes(array[i-b].name)){
						array.splice(i-b,1);
						b++;
					}
				}else{
					if(JSON.parse(localStorage.getItem("archaeology")).includes(array[i-b].name)){
						array.splice(i-b,1);
						b++;
					}
				}
			}
		}
		arrayLength = array.length;
		b = 0;
		previousSearch = searchBar.value;
		if(document.getElementById("searchBar").value != ""){
			var input = document.getElementById("searchBar");
			var filter = input.value.toLowerCase();
			for (var i = 0; i < arrayLength; i++) {
				var a = array[i-b].name;
				if (a.toLowerCase().indexOf(filter) < 0) {
					array.splice(i-b,1);
					b++;
				}
			}
		}
		arrange();
	}
}
arrange();
function arrange(){
	var c = 0;
	var columns = Math.floor((screenSize-45)/245);
	document.getElementById("all").innerHTML = "";
	for(var d = 0; d < columns; d++){
		document.getElementById("all").innerHTML += '<ul id="flashcardlist'+d+'" class="flashcardlist"></ul>';
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
		if(array[i].imageArchaeology == undefined){
			document.getElementById("flashcardlist"+c).innerHTML += '<li class="box" '+(JSON.parse(localStorage.getItem("archaeology")).includes(array[i].name) ? "style='border: 5px solid darkgreen'" : "")+'><img src="'+array[i].image+'" class="img"><p id="name'+i+'" class="para"></p><p id="tier'+i+'" class="para"></p><p id="stats'+i+'" class="para"></p><p id="set'+i+'" class="para"></p><p id="lore'+i+'" class="para"></p></li>';
		}else{
			document.getElementById("flashcardlist"+c).innerHTML += '<li class="box"><img src="'+array[i].imageArchaeology+'" class="img"><p id="name'+i+'" class="para"></p><p id="tier'+i+'" class="para"></p><p id="stats'+i+'" class="para"></p><p id="set'+i+'" class="para"></p><p id="lore'+i+'" class="para"></p></li>';
		}
		document.getElementById("flashcardlist"+c).style.left = 25+c*245+((screenSize-45)-(((Math.floor((screenSize-45)/245)))*245))/2+"px";
		document.getElementById("name"+i).innerHTML = "<b>"+array[i].name+"</b>";
		if(array[i].rarity == "common"){
			document.getElementById("name"+i).style.color = "black";
		}else if(array[i].rarity == "unique"){
			document.getElementById("name"+i).style.color = "orange";
		}else{
			document.getElementById("name"+i).style.color = "purple";
		}
		document.getElementById("tier"+i).innerHTML = "";
		if(category.value == 7){
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
		for(var a = 0; a < Object.keys(array[i].stats).length; a++){
			var replaceStat = Object.keys(array[i].stats)[a].replace( /([A-Z])/g, " $1" );
			document.getElementById("stats"+i).innerHTML += replaceStat.charAt(0).toUpperCase() + replaceStat.slice(1)+": "+array[i].stats[Object.keys(array[i].stats)[a]]+"<br>";
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
	}
	document.getElementById("filters").style.width = (((Math.floor((screenSize-45)/245)))*245)-35+"px";
	document.getElementById("filters").style.left = 25+((screenSize-45)-(((Math.floor((screenSize-45)/245)))*245))/2+"px";
	document.getElementById("searchBar").style.width = (((Math.floor((screenSize-45)/245)))*245)-95+"px";
	if(columns == 3){
		document.getElementById("space0").style.width = (document.getElementById("filters").offsetWidth/2)-250+"px";
		document.getElementById("space3").style.width = (document.getElementById("filters").offsetWidth/2)-250+"px";
		document.getElementById("space1").style.display = "none";
		document.getElementById("space2").style.display = "none";
		document.getElementById("filters").style.height = "250px";
		document.getElementById("br").style.display = "";
		document.getElementById("br3").style.display = "";
		for(var i = 0; i < columns; i++){
			document.getElementsByClassName("flashcardlist")[i].style.top = "310px";
		}
	}else if(columns <= 5){
		document.getElementById("space0").style.width = (document.getElementById("filters").offsetWidth/3)-250+"px";
		document.getElementById("space1").style.width = (document.getElementById("filters").offsetWidth/3)-250+"px";
		document.getElementById("space3").style.width = (document.getElementById("filters").offsetWidth/2)-250+"px";
		document.getElementById("space1").style.display = "";
		document.getElementById("space2").style.display = "none";
		document.getElementById("filters").style.height = "200px";
		document.getElementById("br").style.display = "";
		document.getElementById("br3").style.display = "none";
		for(var i = 0; i < columns; i++){
			document.getElementsByClassName("flashcardlist")[i].style.top = "260px";
		}
	}else{
		for(var i = 0; i < 4; i++){
			document.getElementById("space"+i).style.width = (document.getElementById("filters").offsetWidth/4)-319+"px";
		}
		document.getElementById("space1").style.display = "";
		document.getElementById("space2").style.display = "";
		document.getElementById("filters").style.height = "150px";
		document.getElementById("br").style.display = "none";
		document.getElementById("br3").style.display = "none";
		for(var i = 0; i < columns; i++){
			document.getElementsByClassName("flashcardlist")[i].style.top = "210px";
		}
	}
}