function update(){
	if(document.getElementById("answer").getElementsByTagName("div").length == 4){
		for(var i = 0; i < document.getElementById("answer").getElementsByTagName("div").length; i++){
			document.getElementById("answer").getElementsByTagName("div")[i].style.width = "21.5%";
			document.getElementById("answer").getElementsByTagName("div")[i].style.height = "74%";
			document.getElementById("answer").getElementsByTagName("div")[i].style.lineHeight = "74vh";
			document.getElementById("answer").getElementsByTagName("div")[i].style.left = 2 + 24.5 * i + "%";
			document.getElementById("answer").getElementsByTagName("div")[i].style.top = "20%";
		}
	}else if(document.getElementById("answer").getElementsByTagName("div").length == 12){
		for(var x = 0; x < 3; x++){
			for(var i = 0; i < 4; i++){
				document.getElementById("answer").getElementsByTagName("div")[4*x+i].style.width = "21.5%";
				document.getElementById("answer").getElementsByTagName("div")[4*x+i].style.height = "21%";
				document.getElementById("answer").getElementsByTagName("div")[4*x+i].style.lineHeight = "21vh";
				document.getElementById("answer").getElementsByTagName("div")[4*x+i].style.top = 20 + 26.5 * x + "%";
				document.getElementById("answer").getElementsByTagName("div")[4*x+i].style.left = 2 + 24.5 * i + "%";
			}
		}
	}
	if(back == ""){
		document.getElementById("back").hidden = true;
	}else{
		document.getElementById("back").hidden = false;
	}
	/*
	document.getElementById("code").innerHTML = "{<br>&nbsp;&nbsp;&nbsp;&nbsp;//id: "+document.getElementById("ID").value+"<br>&nbsp;&nbsp;&nbsp;&nbsp;name: "+'"'+document.getElementById("name").value+'"'+",<br>&nbsp;&nbsp;&nbsp;&nbsp;type: "+'"'+document.getElementById("type").value+'"'+',<br>&nbsp;&nbsp;&nbsp;&nbsp;image: "assets/items/'+document.getElementById("type").value+'/0.png"'+",<br>&nbsp;&nbsp;&nbsp;&nbsp;tier: 1,<br>&nbsp;&nbsp;&nbsp;&nbsp;rarity: "+'"'+document.getElementById("rarity").value+'"'+',<br>&nbsp;&nbsp;&nbsp;&nbsp;obtain: "Find as an unidentified item in Eaglecrest Logging Camp",<br>&nbsp;&nbsp;&nbsp;&nbsp;area: "Eaglecrest Logging Camp",';
	if(document.getElementById("lore").value != ""){
		document.getElementById("code").innerHTML += '<br>&nbsp;&nbsp;&nbsp;&nbsp;lore: '+'"'+document.getElementById("lore").value+'",';
	}
	if(document.getElementById("set").value != ""){
		document.getElementById("code").innerHTML += '<br>&nbsp;&nbsp;&nbsp;&nbsp;set: '+'"'+document.getElementById("set").value+'",';
	}
	document.getElementById("code").innerHTML += '<br>&nbsp;&nbsp;&nbsp;&nbsp;stats:{';
	if(document.getElementById("type").value != "sword" && document.getElementById("type").value != "staff" && document.getElementById("type").value != "bow"){
		document.getElementById("code").innerHTML += "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Defence: "+damage.value+",";
	}else{
		document.getElementById("code").innerHTML += "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Damage: "+damage.value+",";
	}
	
	if(document.getElementById("second").value != ""){
		document.getElementById("code").innerHTML += "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+second.value+",";
	}
	if(document.getElementById("third").value != ""){
		document.getElementById("code").innerHTML += "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+third.value+",";
	}
	document.getElementById("code").innerHTML += "<br>&nbsp;&nbsp;&nbsp;&nbsp;},<br>},";*/
}
/*update();
window.addEventListener('keyup', function(){
	if(window.getSelection().toString() == ""){
		update();
	}
});
window.addEventListener('mouseup', function(){
	if(window.getSelection().toString() == ""){
		update();
	}
});*/

var back = "";
var previousWidth = 0;
var previousHeight = 0;
function checkChange(){
window.requestAnimationFrame(checkChange);
	if(window.innerWidth != previousWidth || window.innerHeight != previousHeight){
		previousWidth = window.innerWidth;
		previousHeight = window.innerHeight;
		update();
	}
}
checkChange();

var Builder = {
	item: {
		helm: {
			name: "",
		},
		chest: {
			
		},
		greaves: {
			
		},
		boots: {
			
		},
		sword: {
			
		},
		staff: {
			
		},
		bow: {
			
		},
		set: {
			
		},
		currency: {
			
		},
		bag: {
			
		},
		questItem: {
			
		},
		junkItem: {
			
		},
	},
	quest: {
		
	},
	npc: {
		
	},
	enemy: {
		
	},
}

document.getElementById("back").onclick = function(){
	back();
}

function index(){
	document.getElementById("question").innerHTML = 'What would you like to build?';
	/*document.getElementById("answer").innerHTML = '<div id="item" onclick="item()">Item</div>\
	<div id="quest">Quest</div>\
	<div id="npc">NPC</div>\
	<div id="enemy">Enemy</div>';*/
	document.getElementById("answer").innerHTML = "";
	for(var i = 0; i < Object.keys(Builder).length; i++){
		var replaceStat = Object.keys(Builder)[i].replace( /([A-Z])/g, " $1" );
		document.getElementById("answer").innerHTML += '<div id="'+replaceStat+'" onclick="'+replaceStat+'()">'+replaceStat.charAt(0).toUpperCase() + replaceStat.slice(1)+'</div>';
	}
	update();
}

function item(){
	document.getElementById("question").innerHTML = 'What item would you like to build?';
	/*document.getElementById("answer").innerHTML = '<div id="helm" onclick="helm()">Helm</div>\
	<div id="chest">Chest</div>\
	<div id="greaves">Greaves</div>\
	<div id="boots">Boots</div>\
	<div id="sword">Sword</div>\
	<div id="staff">Staff</div>\
	<div id="bow">Bow</div>\
	<div id="set">Set</div>\
	<div id="currency">Currency</div>\
	<div id="bag">Bag</div>\
	<div id="quest item">Quest Item</div>\
	<div id="junk item">Junk Item</div>';*/
	document.getElementById("answer").innerHTML = "";
	for(var i = 0; i < Object.keys(Builder.item).length; i++){
		var replaceStat = Object.keys(Builder.item)[i].replace( /([A-Z])/g, " $1" );
		document.getElementById("answer").innerHTML += '<div id="'+replaceStat+'" onclick="'+replaceStat+'()">'+replaceStat.charAt(0).toUpperCase() + replaceStat.slice(1)+'</div>';
	}
	back = index;
	update();
}

function helm(){
	document.getElementById("question").innerHTML = 'Please enter a name:';
	back = item;
	document.getElementById("answer").innerHTML = '<input type="text" id="helmName"></input>\
	<div class="submit" onclick="helmTier()">Submit</div>';
}