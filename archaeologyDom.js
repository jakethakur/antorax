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
	if(rarity.value != previousRarity || category.value != previousCategory || min.value != previousMin || max.value != previousMax || searchBar.value != previousSearch){
		previousCategory = category.value;
		array = [];
		if(min.value > 1 || (min.value < 1 && min.value.length > 0) || min.value.length > 1){
			min.value = previousMin;
		}
		if(max.value > 1 || (max.value < 1 && max.value.length > 0) || max.value.length > 1){
			max.value = previousMax;
		}
		if(category.value == "all"){
			for(var i = 0; i < 7; i++){
				for(var x = 2; x < items[Object.keys(items)[i]].length; x++){
					array.push(items[Object.keys(items)[i]][x]);
				}
			}
		}else if(category.value == "armour"){
			for(var i = 0; i < 4; i++){
				for(var x = 2; x < items[Object.keys(items)[i]].length; x++){
					array.push(items[Object.keys(items)[i]][x]);
				}
			}
		}else if(category.value == "weapon"){
			for(var i = 4; i < 7; i++){
				for(var x = 2; x < items[Object.keys(items)[i]].length; x++){
					array.push(items[Object.keys(items)[i]][x]);
				}
			}
		}else{
			for(var x = 2; x < items[Object.keys(items)[category.value]].length; x++){
				array.push(items[Object.keys(items)[category.value]][x]);
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
		
		arrayLength = array.length;
		b = 0;
		previousSearch = searchBar.value;
		if(document.getElementById("searchBar").value != ""){
			var input = document.getElementById("searchBar");
			var filter = input.value.toLowerCase();
			for (var i = 0; i < arrayLength; i++) {
				console.log(array);
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
		document.getElementById("flashcardlist"+c).innerHTML += '<li class="box"><img src="'+array[i].image+'" class="img"><p id="name'+i+'" class="para"></p><p id="tier'+i+'" class="para"></p><p id="stats'+i+'" class="para"></p><p id="lore'+i+'" class="para"></p></li>';
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
			console.log("yes");
			console.log(array[i]);
			for(var f = 0; f < array[i].armour.length; f++){
				document.getElementById("tier"+i).innerHTML += "<br>"+array[i].armour[f];
			}
			document.getElementById("tier"+i).innerHTML += "<br>";
			for(var f = 0; f < 7; f++){
				for(var g = 0; g < items[Object.keys(items)[f]].length; g++){
					console.log(items[Object.keys(items)[f]][g].name);
					console.log(array[i].armour[0]);
					if(items[Object.keys(items)[f]][g].name == array[i].armour[0]){
						console.log("no");
						if(items[Object.keys(items)[f]][g].lore != undefined && items[Object.keys(items)[f]][g].lore != ""){
							console.log(items[Object.keys(items)[f]][g].lore);
							document.getElementById("lore"+i).innerHTML = "<br><i>"+items[Object.keys(items)[f]][g].lore+"</i>";
						}
					}
				}
			}
		}
		document.getElementById("tier"+i).innerHTML += "<br>Tier: "+array[i].tier;
		for(var a = 0; a < Object.keys(array[i].stats).length; a++){
			var replaceStat = Object.keys(array[i].stats)[a].replace("_"," ");
			document.getElementById("stats"+i).innerHTML += replaceStat+": "+array[i].stats[Object.keys(array[i].stats)[a]]+"<br>";
		}
		if(array[i].lore != undefined && array[i].lore != ""){
			document.getElementById("lore"+i).innerHTML = "<br><i>"+array[i].lore+"</i>";
		}
	}
	document.getElementById("filters").style.width = (((Math.floor((screenSize-45)/245)))*245)-35+"px";
	document.getElementById("filters").style.left = 25+((screenSize-45)-(((Math.floor((screenSize-45)/245)))*245))/2+"px";
	document.getElementById("searchBar").style.width = (((Math.floor((screenSize-45)/245)))*245)-95+"px";
	if(columns <= 4){
		document.getElementById("space0").style.width = (((((Math.floor((screenSize-45)/245)))*245)-35)/2)-(500/2)+"px";
		document.getElementById("space2").style.width = (((((Math.floor((screenSize-45)/245)))*245)-35)/2)-(500/2)+"px";
		document.getElementById("space1").style.display = "none";
		document.getElementById("filters").style.height = "200px";
		document.getElementById("br").style.display = "";
		console.log("no");
		for(var i = 0; i < columns; i++){
			console.log("yes");
			document.getElementsByClassName("flashcardlist")[i].style.top = "260px";
		}
	}else{
		for(var i = 0; i < 3; i++){
			document.getElementById("space"+i).style.width = (((((Math.floor((screenSize-45)/245)))*245)-35)/3)-319+"px";
		}
		document.getElementById("space1").style.display = "";
		document.getElementById("filters").style.height = "150px";
		document.getElementById("br").style.display = "none";
		for(var i = 0; i < columns; i++){
			document.getElementsByClassName("flashcardlist")[i].style.top = "210px";
		}
	}
}