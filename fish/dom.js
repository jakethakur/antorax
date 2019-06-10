if (JSON.parse(localStorage.getItem("user")).settings.dark) {
	document.documentElement.style = `
	--border: #202020;
	--alert: #707070;
	--selected: #258bde;
	--top: #1d2d3b;
	--bottom: #454545;
	--page: #202020;
	--text: #ffffff;
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
var total = 0;
var collected = 0;

for(var x = 0; x < Items.fish.length; x++){
	if(Items.fish[x].fishingType === "fish"){
		array.push(Items.fish[x]);
	}
	total++;
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
}

function arrange(){
	var c = 0;
	var columns = Math.floor((screenSize-45)/245);
	document.getElementById("all").innerHTML = "";
	for(var d = 0; d < columns; d++){
		document.getElementById("all").innerHTML += '<ul id="flashcardlist'+d+'" class="flashcardlist"></ul>';
	}
	document.getElementById("all").innerHTML += '<ul id="flashcardlist0" class="flashcardlist"></ul>';
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
		document.getElementById("flashcardlist"+c).innerHTML += '<li class="box" id="box'+i+'"><img src="../'+(array[i].imageArchaeology == undefined ? array[i].image : array[i].imageArchaeology)+'" class="img"><p id="name'+i+'" class="para"></p><p id="tier'+i+'" class="para"></p><p id="stats'+i+'" class="para"></p><p id="set'+i+'" class="para"></p><p id="function'+i+'" class="para"></p><p id="lore'+i+'" class="para"></p></li>';
		document.getElementById("flashcardlist"+c).style.left = 25+c*245+((screenSize-45)-(((Math.floor((screenSize-45)/245)))*245))/2+"px";
		document.getElementById("name"+i).innerHTML = "<b>"+array[i].name+"</b>";
		if(array[i].rarity == "mythic"){
			document.getElementById("name"+i).style.color = "purple";
		}else if(array[i].rarity == "unique"){
			document.getElementById("name"+i).style.color = "orange";
		}else if(array[i].rarity == "common"){
			document.getElementById("name"+i).style.color = "black";
		}else{
			document.getElementById("name"+i).style.color = "gray";
		}
		if(localStorage.getItem("user") !== null && JSON.parse(localStorage.getItem("user")).fish[i] !== 0){
			document.getElementById("tier"+i).innerHTML = "<br>Best Length: "+JSON.parse(localStorage.getItem("user")).fish[i]+"cm";
			document.getElementById("box"+i).style.borderColor = "darkgreen";
			collected++;
		}else{
			document.getElementById("tier"+i).innerHTML = "<br>You have not yet<br>caught this fish";
			document.getElementById("box"+i).style.borderColor = "var(--border)";
		}
		document.getElementById("tier"+i).innerHTML += "<br><br>"+array[i].howToCatch;
		document.getElementById("stats"+i).innerHTML = "<br>Sells for "+array[i].sellPrice+" gold<br>at an item buyer";
		if(array[i].lore !== undefined && array[i].lore !== ""){
			document.getElementById("lore"+i).innerHTML = "<br><em>"+array[i].lore+"</em>";
		}
	}
	document.getElementById("progress").style.width = (((Math.floor((screenSize-45)/245)))*245)-25+"px";
	document.getElementById("progress").style.left = 25+((screenSize-45)-(((Math.floor((screenSize-45)/245)))*245))/2+"px";
	document.getElementById("progressText").innerHTML = "You have obtained "+Math.floor(collected/array.length*100)+"% of all fish";
	document.getElementById("innerProgress").style.width = (collected/array.length)*((((Math.floor((screenSize-45)/245)))*245)-24.5)+"px";
	for(var i = 0; i < columns; i++){
		document.getElementsByClassName("flashcardlist")[i].style.top = "85px";
	}
}

var previousWidth = window.innerWidth;
var screenSize = 245*3+45;
var displayed = 0;
var progress = 0;
if(window.innerWidth >= 245*3+45){
	screenSize = window.innerWidth;
}else{
	screenSize = 245*3+45;
}
checkChange();
arrange();