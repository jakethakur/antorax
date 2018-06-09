var array = [];
var previousWidth = window.innerWidth;
var previousCategory = "";
checkChange();
function checkChange(){
	window.requestAnimationFrame(checkChange);
	if(window.innerWidth != previousWidth){
		previousWidth = window.innerWidth;
		arrange();
	}
	if(category.value != previousCategory){
		previousCategory = category.value;
		array = [];
		if(category.value == "all"){
			for(var i = 0; i < 7; i++){
				for(var x = 0; x < items[Object.keys(items)[i]].length; x++){
					array.push(items[Object.keys(items)[i]][x]);
				}
			}
		}else if(category.value == "armour"){
			for(var i = 0; i < 4; i++){
				for(var x = 0; x < items[Object.keys(items)[i]].length; x++){
					array.push(items[Object.keys(items)[i]][x]);
				}
			}
		}else if(category.value == "weapon"){
			for(var i = 4; i < 7; i++){
				for(var x = 0; x < items[Object.keys(items)[i]].length; x++){
					array.push(items[Object.keys(items)[i]][x]);
				}
			}
		}else{
				for(var x = 0; x < items[Object.keys(items)[category.value]].length; x++){
					array.push(items[Object.keys(items)[category.value]][x]);
				}
		}
		arrange();
	}
}
arrange();
function arrange(){
	var columns = Math.floor((window.innerWidth-45)/185);
	//document.getElementById("all").innerHTML = "<div id='searchBar'><input type='radio' id='helm' onclick='radioOnOff(\"helm\")' checked='true'>Helms&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='radio' checked>Chests&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='radio' checked>Greaves&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='radio' checked>Boots&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='radio' checked>Swords&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='radio' checked>Staffs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='radio' checked>Bows</div>";
	document.getElementById("all").innerHTML = "";
	document.getElementById("searchBar").style.width = (((Math.floor((window.innerWidth-45)/185)))*185)-35+"px";
	document.getElementById("searchBar").style.left = 25+((window.innerWidth-45)-(((Math.floor((window.innerWidth-45)/185)))*185))/2+"px";
	for(var i = 0; i < array.length; i++){
		for(var a = 0; a < columns; a++){
			if(Math.floor(i/columns)==(i-a)/columns){
				x=a;
			}
		}
		document.getElementById("all").innerHTML += '<ul id="flashcardlist'+x+'" class="flashcardlist"></ul>';
		document.getElementById("flashcardlist"+x).innerHTML += '<li class="box"><img src="'+array[i].image+'" class="img"><p id="name'+i+'" class="para"></p><p id="tier'+i+'" class="para"></p><p id="stats'+i+'" class="para"></p><p id="lore'+i+'" class="para"></p></li>';
		document.getElementById("flashcardlist"+x).style.left = 25+x*185+((window.innerWidth-45)-(((Math.floor((window.innerWidth-45)/185)))*185))/2+"px";
		document.getElementById("name"+i).innerHTML = "<b>"+array[i].name+"</b>";
		if(array[i].rarity == "common"){
			document.getElementById("name"+i).style.color = "black";
		}else if(array[i].rarity == "unique"){
			document.getElementById("name"+i).style.color = "orange";
		}else{
			document.getElementById("name"+i).style.color = "purple";
		}
		document.getElementById("tier"+i).innerHTML = "<br>Tier: "+array[i].tier;
		for(var a = 0; a < Object.keys(array[i].stats).length; a++){
			document.getElementById("stats"+i).innerHTML += Object.keys(array[i].stats)[a]+": "+array[i].stats[Object.keys(array[i].stats)[a]]+"<br>";
		}
		document.getElementById("lore"+i).innerHTML = "<br>"+array[i].lore;
	}
}