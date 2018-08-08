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
	if(document.getElementById("inventoryInformation") != undefined){
		document.getElementById("inventoryInformation").style.left = window.innerWidth/2+90+"px";
	}
	if(position == Builder){
		document.getElementById("back").hidden = true;
	}else{
		document.getElementById("back").hidden = false;
	}
}

setList = "<option value=''>None</option>";
for(var i = 2; i < Object.keys(Items.set).length; i++){
	setList += "<option value='"+i+"'>"+Items.set[Object.keys(Items.set)[i]].name+"</option>";
}

var name = "helm";

function stats(primary){
	if(primary == "defence"){
		return '<br><br><br><input type="checkbox" name="stats" value="criticalChance">Critical Chance</input><br>\
				<input type="checkbox" name="stats" value="dodgeChance">Dodge Chance</input><br>\
				<input type="checkbox" name="stats" value="focusSpeed">Focus Speed</input><br>\
				<input type="checkbox" name="stats" value="healthRegen">Health Regen</input><br>\
				<input type="checkbox" name="stats" value="looting">Looting</input><br>\
				<input type="checkbox" name="stats" value="reflection">Reflection</input><br>\
				<input type="checkbox" name="stats" value="swimSpeed">Swim Speed</input><br>\
				<input type="checkbox" name="stats" value="walkSpeed">Walk Speed</input><br>\
				<div class="submit" onclick="submitStat()">Submit</div>'
	}else{
		return '<br><br><br><input type="checkbox" name="stats" value="criticalChance">Critical Chance</input><br>\
				<input type="checkbox" name="stats" value="dodgeChance">Dodge Chance</input><br>\
				<input type="checkbox" name="stats" value="flaming">Flaming</input><br>\
				<input type="checkbox" name="stats" value="focusSpeed">Focus Speed</input><br>\
				<input type="checkbox" name="stats" value="healthRegen">Health Regen</input><br>\
				<input type="checkbox" name="stats" value="looting">Looting</input><br>\
				<input type="checkbox" name="stats" value="poison">Poison</input><br>\
				<input type="checkbox" name="stats" value="reflection">Reflection</input><br>\
				<input type="checkbox" name="stats" value="stun">Stun</input><br>\
				<input type="checkbox" name="stats" value="swimSpeed">Swim Speed</input><br>\
				<input type="checkbox" name="stats" value="walkSpeed">Walk Speed</input><br>\
				<div class="submit" onclick="submitStat()">Submit</div>'
	}
}

function armour(type,placeholder,primary) {
	return [
		{/*0*/
			question: "Please enter the name:",
			answer: '<input type="text" placeholder="'+placeholder+'"></input>\
				<div class="submit" onclick="submit()">Submit</div>',
			value: "",
		},
		{/*1*/
			question: "Please enter the tier:",
			answer: '<input type="number" min="1" value="1" style="width: 10%; left: 45%;"></input>\
				<div class="submit" onclick="submit()">Submit</div>',
			value: "",
		},
		{/*2*/
			question: "Please select the rarity:",
			answer: '<select type="select">\
				<option value="common">Common</option>\
				<option value="unique">Unique</option>\
				<option value="mythic">Mythic</option>\
				</select>\
				<div class="submit" onclick="submit()">Submit</div>',
			value: "",
		},
		{/*3*/
			question: "Please enter image address:",
			answer: '<input type="text" style="font-size: 3vw;" value="assets/items/'+type+'/'+Items[type].length+'.png"></input>\
				<div class="submit" onclick="submit()">Submit</div>',
			value: "",
		},
		{/*4*/
			question: "Please enter the "+primary+":",
			answer: '<input type="number" value="0" style="width: 10%; left: 45%;"></input>\
				<div class="submit" onclick="submit()">Submit</div>',
			value: "",
		},
		{/*5*/
			question: "Please select any other stats:",
			answer: stats(primary),
			value: "",
		},
		{/*6*/
			question: "Please enter the lore if it has one:",
			answer: '<input type="text" style="width: 77%; left: 11.5%; font-size: 3vw;" placeholder="Protects you from splinters. And goblins!"></input>\
				<div class="submit" onclick="submit()">Submit</div>',
			value: "",
		},
		{/*7*/
			question: "Please select the set if it has one:",
			answer: '<select type="select" >\
				'+setList+'\
				</select>\
				<div class="submit" onclick="submit()">Submit</div>',
			value: "",
		},
		/*{
			question: "What area is this item for?",
			answer: '<input type="text" placeholder="Eaglecrest Logging Camp" style="width: 60%; left: 20%;"></input>\
				<div class="submit" onclick="submit()">Submit</div>',
			value: "",
		},*/
		{/*8*/
			question: "How is this item obtained?",
			answer: '<input type="text" id="obtain" style="width: 77%; left: 11.5%; font-size: 3vw;" placeholder="Find as an unidentified item in Eaglecrest Logging Camp"></input>\
				<div class="submit" onclick="finish()">Submit</div>',
			value: "",
		},
	];
}

var Builder = {
	question: "What would you like to build?",
	item: {
		question: "What item would you like to build?",
		helm: armour("helm","War Ogre's Helm","defence"),
		chest: armour("chest","The Tattered Knight's Chestplate","defence"),
		greaves: armour("greaves","Weirwood Carved Greaves","defence"),
		boots: armour("boots","Marshall Teper's Lost Boots","defence"),
		sword: armour("sword","Blade of the Orc Raiders","damage"),
		staff: armour("staff","The Highborn Hoarder's Staff","damage"),
		bow: armour("bow","Kraiss' Brimstone Bow","damage"),
		set: [
			
		],
		currency: [
			
		],
		bag: [
			
		],
		questItem: [
			
		],
		junkItem: [
			
		],
	},
	quest: {
		
	},
	npc: {
		
	},
	enemy: {
		
	},
};

var stats = [];
var position = Builder;
var stage = 0;
var back0 = undefined;
var back1 = undefined;
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

document.getElementById("back").onclick = function(){
	if(stage != 0){
		if(document.getElementById("inventoryInformation") == undefined){
			stage--;
		}
	}else if(back1 != undefined){
		position = back1;
		back1 = undefined;
	}else if(back0 != undefined){
		position = Builder;
		back0 = undefined;
	}
	if(position.length != undefined){
		document.getElementById("question").innerHTML = position[stage].question;
		document.getElementById("answer").innerHTML = position[stage].answer;
		if(position[stage].value != "" && position[stage].value != undefined && document.getElementById("answer").getElementsByTagName("input").length != 0){
			document.getElementById("answer").getElementsByTagName("input")[0].value = position[stage].value;
		}else if(position[stage].value != "" && position[stage].value != undefined && document.getElementById("answer").getElementsByTagName("select").length != 0){
			document.getElementById("answer").getElementsByTagName("select")[0].value = position[stage].value;
		}
	}else{
		document.getElementById("question").innerHTML = position.question;
		document.getElementById("answer").innerHTML = "";
		for(var i = 1; i < Object.keys(position).length; i++){
			var replaceStat = Object.keys(position)[i].replace( /([A-Z])/g, " $1" );
			document.getElementById("answer").innerHTML += '<div id="'+replaceStat+'" onclick="forward('+i+')">'+replaceStat.charAt(0).toUpperCase() + replaceStat.slice(1)+'</div>';
		}
	}
	update();
}

function forward(num){
	if(back0 == undefined){
		back0 = position;
		position = back0[Object.keys(back0)[num]];
	}else if(back1 == undefined){
		back1 = position;
		position = back1[Object.keys(back1)[num]];
	}
	if(position.length != undefined){
		name = Object.keys(back1)[num];
		document.getElementById("question").innerHTML = position[0].question;
		document.getElementById("answer").innerHTML = position[0].answer;
		if(position[stage].value != "" && position[stage].value != undefined && document.getElementById("answer").getElementsByTagName("input").length != 0){
			document.getElementById("answer").getElementsByTagName("input")[0].value = position[stage].value;
		}else if(position[stage].value != "" && position[stage].value != undefined && document.getElementById("answer").getElementsByTagName("select").length != 0){
			document.getElementById("answer").getElementsByTagName("select")[0].value = position[stage].value;
		}
	}else{
		document.getElementById("question").innerHTML = position.question;
		document.getElementById("answer").innerHTML = "";
		for(var i = 1; i < Object.keys(position).length; i++){
			var replaceStat = Object.keys(position)[i].replace( /([A-Z])/g, " $1" );
			document.getElementById("answer").innerHTML += '<div id="'+replaceStat+'" onclick="forward('+i+')">'+replaceStat.charAt(0).toUpperCase() + replaceStat.slice(1)+'</div>';
		}
	}
	update();
}

function submit(){
	if(document.getElementById("answer").getElementsByTagName("input").length == 1){
		position[stage].value = document.getElementById("answer").getElementsByTagName("input")[0].value;
	}else if(document.getElementById("answer").getElementsByTagName("input").length == 0){
		position[stage].value = document.getElementById("answer").getElementsByTagName("select")[0].value;	
	}else if(document.getElementById("answer").getElementsByTagName("input").length == 2){
		position[stage].value = document.getElementById("answer").getElementsByTagName("input")[0].value + "/" + document.getElementById("answer").getElementsByTagName("input")[1].value+"s";
	}
	stage++;
	document.getElementById("question").innerHTML = position[stage].question;
	document.getElementById("answer").innerHTML = position[stage].answer;
	if(position[stage].value != "" && position[stage].value != undefined && document.getElementById("answer").getElementsByTagName("input").length != 0){
		document.getElementById("answer").getElementsByTagName("input")[0].value = position[stage].value;
	}else if(position[stage].value != "" && position[stage].value != undefined && document.getElementById("answer").getElementsByTagName("select").length != 0){
		document.getElementById("answer").getElementsByTagName("select")[0].value = position[stage].value;
	}
}

function submitStat(){
	for(var i = document.getElementsByName("stats").length - 1; i >= 0; i--){
		if(document.getElementsByName("stats")[i].checked){
			var replaceStat = document.getElementsByName("stats")[i].value.replace( /([A-Z])/g, " $1" );
			stats.push(document.getElementsByName("stats")[i].value);
			if(document.getElementsByName("stats")[i].value != "poison"){
				position.splice(stage+1,0,{
					question: "Please enter the "+replaceStat.toLowerCase()+":",
					answer: '<input type="number" id="'+document.getElementsByName("stats")[i].value+'" value="0" style="width: 10%; left: 45%;"></input>\
					<div class="submit" onclick="submit()">Submit</div>',
				});
			}else{
				position.splice(stage+1,0,{
					question: "Please enter the "+replaceStat.toLowerCase()+":",
					answer: '<input type="number" id="poisonX" value="0" style="width: 10%; left: 38%;"></input>\
					<div style="font-size: 5vw; background-color: transparent; border: 0px solid transparent; width: 4%; left: 48%; top: 46%;">/</div>\
					<input type="number" id="poisonY" value="0" style="width: 10%; left: 52%;"></input>\
					<div class="submit" onclick="submit()">Submit</div>',
				});
			}
		}
	}
	submit();
}

function finish(){
	if(document.getElementById("answer").getElementsByTagName("input").length == 1){
		position[stage].value = document.getElementById("answer").getElementsByTagName("input")[0].value;
	}else if(document.getElementById("answer").getElementsByTagName("input").length == 0){
		position[stage].value = document.getElementById("answer").getElementsByTagName("select")[0].value;	
	}else{
		position[stage].value = document.getElementById("answer").getElementsByTagName("select")[0].value + "/" + document.getElementById("answer").getElementsByTagName("select")[1].value+"s";
	}
	var complete = '{\n'+
	'&nbsp;&nbsp;&nbsp;&nbsp;id: '+Items[name].length+',\n'+
	'&nbsp;&nbsp;&nbsp;&nbsp;name: "'+position[0].value+'",\n'+
	'&nbsp;&nbsp;&nbsp;&nbsp;type: "'+name+'",\n'+
	'&nbsp;&nbsp;&nbsp;&nbsp;image: "'+position[3].value+'",\n'+
	'&nbsp;&nbsp;&nbsp;&nbsp;tier: '+position[1].value+',\n'+
	'&nbsp;&nbsp;&nbsp;&nbsp;rarity: "'+position[2].value+'",\n'+
	'&nbsp;&nbsp;&nbsp;&nbsp;obtain: "'+position[8+stats.length].value+'",\n'+
	'&nbsp;&nbsp;&nbsp;&nbsp;area: "Eaglecrest Logging Camp",\n';
	if(position[6+stats.length].value != ""){
		complete += '&nbsp;&nbsp;&nbsp;&nbsp;lore: "'+position[6+stats.length].value+'",\n';
	}
	if(position[7+stats.length].value != ""){
		complete += '&nbsp;&nbsp;&nbsp;&nbsp;set: '+position[7+stats.length].value+',\n';
	}
	complete += '&nbsp;&nbsp;&nbsp;&nbsp;stats: {\n'+
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;defence: "'+sign(position[4].value)+position[4].value+'",\n';
	for(var i = 1; i < stats.length+1; i++){
		if(stats[stats.length-i] == "flaming"){
			complete += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+stats[stats.length-i]+': '+position[i+5].value+',\n';
		}else if(stats[stats.length-i] == "criticalChance" || stats[stats.length-i] == "dodgeChance" || stats[stats.length-i] == "looting" || stats[stats.length-i] == "reflection"){
			complete += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+stats[stats.length-i]+': "'+sign(position[i+5].value)+position[i+5].value+'%",\n';
		}else if(stats[stats.length-i] == "focusSpeed" || stats[stats.length-i] == "healthRegen" || stats[stats.length-i] == "swimSpeed" || stats[stats.length-i] == "walkSpeed"){
			complete += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+stats[stats.length-i]+': "'+sign(position[i+5].value)+position[i+5].value+'/s",\n';
		}else if(stats[stats.length-i] == "stun"){
			complete += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+stats[stats.length-i]+': "'+sign(position[i+5].value)+position[i+5].value+'s",\n';
		}else{
			complete += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+stats[stats.length-i]+': "'+sign(position[i+5].value)+position[i+5].value+'"\n';
		}
	}
	complete += '&nbsp;&nbsp;&nbsp;&nbsp;},\n},';
	document.getElementById("question").innerHTML = "Here is your item:";
	document.getElementById("answer").innerHTML = '<div id="result" style="font-size: 16px; text-align: left; padding: 1.5vw; left: 2%; top: 20%; user-select: text; max-width: 40%; word-wrap: break-word">'+complete.replace(/\n/g,"<br>")+'</div>\
	<div id="image" style="left: 50%; top: 20%; width: 50px; height: 50px;"></div>\
	<div id="inventoryInformation" style="left: '+(window.innerWidth/2+90)+'px; top: 20%; font-size: 16px; word-wrap: break-word">\
	<div class="triangleLeft"></div>\
	<div id="invTriangle" class="innerTriangleLeft"></div>\
	<p id="invName" style="font-weight: bold;"></p>\
	<p id="invStats"></p>\
	<p id="invSet"></p>\
	<p id="invLore"></p>\
	</div>';
	var img = new Image();
	img.src = "../"+position[3].value;
	img.onload = function() {
		document.getElementById("image").style.backgroundImage = "url('../"+position[3].value+"')";
	};
	img.onerror = function() {
		document.getElementById("image").style.backgroundImage = "url('../assets/items/"+name+"/unidentified.png')";
	};
	img.onabort = function() {
		console.error("image load aborted")
	};
	console.log(complete);
	document.getElementById("invName").innerHTML = position[0].value;
	if(position[2].value == "mythic"){ // if the item is a mythic...
		document.getElementById("invName").style.color = "purple"; // ...sets the name color to purple
	}else if(position[2].value == "unique"){ // if the item is a unique...
		document.getElementById("invName").style.color = "orange"; // ...sets the name color to orange
	}else{ // if the item is a common...
		document.getElementById("invName").style.color = "black"; // ...sets the name color to black
	}
	document.getElementById("invStats").innerHTML = "Tier: "+position[1].value+
	'<br>Defence: '+sign(position[4].value)+position[4].value;
	for(var i = 1; i < stats.length + 1; i++){ // repeat for all stats
		var replaceStat = stats[stats.length-i].replace( /([A-Z])/g, " $1" );
		if(stats[stats.length-i] == "flaming"){
			document.getElementById("invStats").innerHTML += '<br>'+replaceStat.charAt(0).toUpperCase() + replaceStat.slice(1)+': '+position[i+5].value;
		}else if(stats[stats.length-i] == "criticalChance" || stats[stats.length-i] == "dodgeChance" || stats[stats.length-i] == "looting" || stats[stats.length-i] == "reflection"){
			document.getElementById("invStats").innerHTML += '<br>'+replaceStat.charAt(0).toUpperCase() + replaceStat.slice(1)+': '+sign(position[i+5].value)+position[i+5].value+'%';
		}else if(stats[stats.length-i] == "focusSpeed" || stats[stats.length-i] == "healthRegen" || stats[stats.length-i] == "swimSpeed" || stats[stats.length-i] == "walkSpeed"){
			document.getElementById("invStats").innerHTML += '<br>'+replaceStat.charAt(0).toUpperCase() + replaceStat.slice(1)+': '+sign(position[i+5].value)+position[i+5].value+'/s';
		}else if(stats[stats.length-i] == "stun"){
			document.getElementById("invStats").innerHTML += '<br>'+replaceStat.charAt(0).toUpperCase() + replaceStat.slice(1)+': '+sign(position[i+5].value)+position[i+5].value+'s';
		}else{
			document.getElementById("invStats").innerHTML += '<br>'+replaceStat.charAt(0).toUpperCase() + replaceStat.slice(1)+': '+sign(position[i+5].value)+position[i+5].value;
		}
	}
	if(position[7+stats.length].value != ""){ // if the item has a set...
		document.getElementById("invSet").innerHTML = Items.set[position[7+stats.length].value].name + " ("+Items.set[position[7+stats.length].value].armour.length+"/" + Items.set[position[7+stats.length].value].armour.length+")"; // ...add the set to the information
		document.getElementById("invSet").innerHTML += "<br><br>Set Bonus:";
		for(var i = 0; i < Object.keys(Items.set[position[7+stats.length].value].stats).length; i++){ // repeat for all stats
			if(Object.keys(Items.set[position[7+stats.length].value].stats)[i] != "flaming"){
				var replaceStat = Object.keys(Items.set[position[7+stats.length].value].stats)[i].replace( /([A-Z])/g, " $1" );
				document.getElementById("invSet").innerHTML += "<br>"+replaceStat.charAt(0).toUpperCase() + replaceStat.slice(1)+": "+Items.set[position[7+stats.length].value].stats[Object.keys(Items.set[position[7+stats.length].value].stats)[i]];
			}else{
				var replaceStat = Object.keys(Items.set[position[7+stats.length].value].stats)[i].replace( /([A-Z])/g, " $1" );
				document.getElementById("invSet").innerHTML += "<br>"+replaceStat.charAt(0).toUpperCase() + replaceStat.slice(1)+": "+romanize(Items.set[position[7+stats.length].value].stats[Object.keys(Items.set[position[7+stats.length].value].stats)[i]]);
			}
		}
	}else{
		document.getElementById("invSet").innerHTML = "";
	}
	if(position[6+stats.length].value != undefined){ // if the item has a lore...
		document.getElementById("invLore").innerHTML = "<i>"+position[6+stats.length].value+"</i>"; // ...add the lore to the information
	}else{
		document.getElementById("invLore").innerHTML = "";
	}
}

function sign(value){
	if(value >= 0){
		return "+";
	}else{
		return "";
	}
}

function romanize(num){
  var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
  for(i in lookup){
    while(num >= lookup[i]){
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}