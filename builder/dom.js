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
	if(position == Builder){
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
setList = "<option value=''>None</option>";
for(var i = 2; i < Object.keys(Items.set).length; i++){
	setList += "<option value='"+i+"'>"+Items.set[Object.keys(Items.set)[i]].name+"</option>";
}

var Builder = {
	question: "What would you like to build?",
	item: {
		question: "What item would you like to build?",
		helm: [
			{
				question: "Please enter the name:",
				answer: '<input type="text" id="helmName" placeholder="War Ogre\'s Helm"></input>\
					<div class="submit" onclick="submit()">Submit</div>',
				name: "",
			},
			{
				question: "Please enter the tier:",
				answer: '<input type="number" id="helmTier" min="1" value="1" style="width: 10%; left: 45%;"></input>\
					<div class="submit" onclick="submit()">Submit</div>',
				name: "",
			},
			{
				question: "Please select the rarity:",
				answer: '<select type="select" id="helmRarity">\
					<option value="common">Common</option>\
					<option value="unique">Unique</option>\
					<option value="mythic">Mythic</option>\
					</select>\
					<div class="submit" onclick="submit()">Submit</div>',
				name: "",
			},
			{
				question: "Please enter the defence:",
				answer: '<input type="number" id="helmDefence" value="0" style="width: 10%; left: 45%;"></input>\
					<div class="submit" onclick="submit()">Submit</div>',
				name: "",
			},
			{
				question: "Please select any other stats:",
				answer: '<input type="checkbox" name="helmStats" value="criticalChance">Critical Chance</input><br>\
					<input type="checkbox" name="helmStats" value="dodgeChance">Dodge Chance</input><br>\
					<input type="checkbox" name="helmStats" value="flaming">Flaming</input><br>\
					<input type="checkbox" name="helmStats" value="focusSpeed">Focus Speed</input><br>\
					<input type="checkbox" name="helmStats" value="healthRegen">Health Regen</input><br>\
					<input type="checkbox" name="helmStats" value="looting">Looting</input><br>\
					<input type="checkbox" name="helmStats" value="poison">Poison</input><br>\
					<input type="checkbox" name="helmStats" value="reflection">Reflection</input><br>\
					<input type="checkbox" name="helmStats" value="stun">Stun</input><br>\
					<input type="checkbox" name="helmStats" value="swimSpeed">Swim Speed</input><br>\
					<input type="checkbox" name="helmStats" value="walkSpeed">Walk Speed</input><br>\
					<div class="submit" onclick="submit()">Submit</div>',
				name: "",
			},
			{
				question: "Please enter the lore if it has one:",
				answer: '<input type="text" id="helmLore" style="width: 77%; left: 11.5%; font-size: 3vw;" placeholder="Protects you from splinters. And goblins!"></input>\
					<div class="submit" onclick="submit()">Submit</div>',
				name: "",
			},
			{
				question: "Please select the set if it has one:",
				answer: '<select type="select" id="helmSet">\
					'+setList+'\
					</select>\
					<div class="submit" onclick="submit()">Submit</div>',
				name: "",
			},
			/*{
				question: "What area is this item for?",
				answer: '<input type="text" id="helmArea" placeholder="Eaglecrest Logging Camp" style="width: 60%; left: 20%;"></input>\
					<div class="submit" onclick="submit()">Submit</div>',
				name: "",
			},*/
			{
				question: "How is this item obtained?",
				answer: '<input type="text" id="helmObtain" style="width: 77%; left: 11.5%; font-size: 3vw;" placeholder="Find as an unidentified item in Eaglecrest Logging Camp"></input>\
					<div class="submit" onclick="submit()">Submit</div>',
				name: "",
			},
		],
		chest: [
			
		],
		greaves: [
			
		],
		boots: [
			
		],
		sword: [
			
		],
		staff: [
			
		],
		bow: [
			
		],
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
}

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
	if(back1 != undefined){
		position = back1;
		back1 = undefined;
	}else if(back0 != undefined){
		position = Builder;
		back0 = undefined;
	}
	document.getElementById("question").innerHTML = position.question;
	document.getElementById("answer").innerHTML = "";
	for(var i = 1; i < Object.keys(position).length; i++){
		var replaceStat = Object.keys(position)[i].replace( /([A-Z])/g, " $1" );
		document.getElementById("answer").innerHTML += '<div id="'+replaceStat+'" onclick="forward('+i+')">'+replaceStat.charAt(0).toUpperCase() + replaceStat.slice(1)+'</div>';
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
		document.getElementById("question").innerHTML = position[0].question;
		document.getElementById("answer").innerHTML = position[0].answer;
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
	stage++;
	document.getElementById("question").innerHTML = position[stage].question;
	document.getElementById("answer").innerHTML = position[stage].answer;
}

/*function index(){
	document.getElementById("question").innerHTML = 'What would you like to build?';
	document.getElementById("answer").innerHTML = "";
	for(var i = 1; i < Object.keys(Builder).length; i++){
		var replaceStat = Object.keys(Builder)[i].replace( /([A-Z])/g, " $1" );
		document.getElementById("answer").innerHTML += '<div id="'+replaceStat+'" onclick="'+replaceStat+'()">'+replaceStat.charAt(0).toUpperCase() + replaceStat.slice(1)+'</div>';
	}
	update();
}*/

/*function item(){
	back0 = position;
	position = Builder.item;
	document.getElementById("question").innerHTML = 'What item would you like to build?';
	document.getElementById("answer").innerHTML = "";
	for(var i = 1; i < Object.keys(Builder.item).length; i++){
		var replaceStat = Object.keys(Builder.item)[i].replace( /([A-Z])/g, " $1" );
		document.getElementById("answer").innerHTML += '<div id="'+replaceStat+'" onclick="forward('+i+')">'+replaceStat.charAt(0).toUpperCase() + replaceStat.slice(1)+'</div>';
	}
	update();
}

function helm(){
	back1 = position;
	position = Builder.item.helm;
	document.getElementById("question").innerHTML = 'Please enter a name:';
	document.getElementById("answer").innerHTML = '<input type="text" id="helmName"></input>\
	<div class="submit" onclick="helmTier()">Submit</div>';
	update();
}*/