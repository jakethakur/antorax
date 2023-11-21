
// default unlocked items:
// ids of unlocked customisation options in skindata
let unlocked = {
	skinTone: [],
	hair: [],
	mageClothing: [],
	archerClothing: [],
	knightClothing: [],
};
for (const [type] of Object.entries(unlocked)) {
	for (const option of Skins[type]) {
		if (option.base) {
			unlocked[type].push(option.id);
		}
	}
}

if (localStorage.getItem("user") !== null) {
	//unlocked = JSON.parse(localStorage.getItem("user")).skins;
}

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
	--opacity: 0.8;`
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
	--opacity: 0.6;`
}

let num = 0;
let selected = {
	a: 0,
	m: 0,
	k: 0,
};
if(localStorage.getItem("selected") !== null){
	selected = JSON.parse(localStorage.getItem("selected"));
}
else {
	selected.class = Object.keys(selected)[Math.floor(Math.random()*3)];
}
if(localStorage.getItem("name") !== null){
	document.getElementById("name").value = localStorage.getItem("name");
}
let previousWidth = window.innerWidth;
let previousHeight = window.innerHeight;
let previousName = "";

function validate(strValue) {
	let objRegExp  = /^[a-zA-Z'\u00C0-\u00ff]+$/;
	if(!objRegExp.test(strValue)){
		objRegExp  = /^$/;
		// return true if it is empty
		return objRegExp.test(strValue);
	}else{
		// return true if it is legal
		return true;//objRegExp.test(strValue);
	}
}

function checkChange(){
	window.requestAnimationFrame(checkChange);
	if(window.innerWidth !== previousWidth){
		previousWidth = window.innerWidth;
		arrange();
	}
	if(window.innerHeight !== previousHeight){
		previousHeight = window.innerHeight;
		arrange();
	}
	if(document.getElementById("name").value.length !== previousName.length){
		if(document.getElementById("name").value.length > 15 || (!validate(document.getElementById("name").value))){
			document.getElementById("name").value = previousName;
		}
		previousName = document.getElementById("name").value;
		if(localStorage.getItem("accept") === "true"){
			setTimeout(function(){
				localStorage.setItem("name", document.getElementById("name").value);
			},1);
		}
	}
}
checkChange();

setTimeout(function(){arrange();},10);
function arrange(){
	if(localStorage.getItem(selected.class) !== null){
		document.getElementById("play").innerHTML = "Continue Your Adventure";
	}else{
		document.getElementById("play").innerHTML = "Begin Your Adventure";
	}
	/*document.getElementById("archer").style.width = window.innerWidth/5-54+"px";
	document.getElementById("archer").style.height = window.innerHeight/3-58+"px";
	document.getElementById("mage").style.width = window.innerWidth/5-54+"px";
	document.getElementById("mage").style.height = window.innerHeight/3-58+"px";
	document.getElementById("knight").style.width = window.innerWidth/5-54+"px";
	document.getElementById("knight").style.height = window.innerHeight/3-58+"px";
	document.getElementById("playerPreview").style.height = window.innerHeight-205+"px";
	document.getElementById("play").style.top = window.innerHeight-85+"px";
	document.getElementById("play").style.left = window.innerWidth/2-document.getElementById("play").offsetWidth/2+"px";
	document.getElementById("left").style.left = window.innerWidth/100*27-document.getElementById("left").offsetWidth/2+"px";
	document.getElementById("left").style.top = window.innerHeight/2-document.getElementById("left").offsetHeight/2+"px";
	document.getElementById("right").style.top = window.innerHeight/2-document.getElementById("right").offsetHeight/2+"px";
	document.getElementById("right").style.left = window.innerWidth/100*73-document.getElementById("right").offsetWidth/2+"px";
	document.getElementById("name").style.width = document.getElementById("play").offsetWidth-10+"px";
	document.getElementById("name").style.left = window.innerWidth/2-document.getElementById("name").offsetWidth/2+"px";
	document.getElementById("name").style.width = document.getElementById("play").offsetWidth-document.getElementById("name").offsetHeight-5+"px";
	document.getElementById("random").style.left = parseInt(document.getElementById("play").style.left) + document.getElementById("name").offsetWidth-5+"px";
	document.getElementById("random").style.height = document.getElementById("name").offsetHeight-10+"px";
	document.getElementById("random").style.width = document.getElementById("name").offsetHeight-10+"px";
	document.getElementById("logo").style.left = window.innerWidth/5*4+"px";
	document.getElementById("logo").style.width = window.innerWidth/5-34+"px";
	document.getElementById("info").style.left = window.innerWidth/5*4+"px";
	document.getElementById("info").style.top = document.getElementById("logo").offsetHeight+40+"px";
	document.getElementById("info").style.width = window.innerWidth/5-34+"px";
	document.getElementById("skins").style.left = window.innerWidth/5*4+"px";
	document.getElementById("skins").style.top = document.getElementById("logo").offsetHeight+40+90+"px";
	document.getElementById("skins").style.width = window.innerWidth/5-34+"px";
	document.getElementById("news").style.left = window.innerWidth/5*4+"px";
	document.getElementById("news").style.top = document.getElementById("logo").offsetHeight+40+90+103+"px";
	document.getElementById("news").style.width = window.innerWidth/5-34+"px";
	document.getElementById("news").style.height = window.innerHeight-document.getElementById("logo").offsetHeight-95-90-103+"px";*/
	display();
}

function save () {
	if(localStorage.getItem("accept") === "true"){
		setTimeout(function(){
			localStorage.setItem("selected", JSON.stringify(selected));
		},1);
	}
}




let bowEl = document.getElementById("archer");
let staffEl = document.getElementById("mage");
let swordEl = document.getElementById("knight");

bowEl.onclick = function(){
	selected.class = "a";

	bowEl.style.backgroundImage = 'url("./assets/bowAnim/hoverSelect.png")';

	staffEl.style.backgroundImage = 'url("./assets/staffAnim/hover.png")';
	staffEl.style.backgroundPosition = "0px 0px";
	staffFrame = 0;
	clearInterval(staffAnimInterval);
	staffAnimInterval = null;

	swordEl.style.backgroundImage = 'url("./assets/swordAnim/hover.png")';
	swordEl.style.backgroundPosition = "0px 0px";
	swordFrame = 0;
	clearInterval(swordAnimInterval);
	swordAnimInterval = null;

	save();
	arrange();
}

staffEl.onclick = function(){
	selected.class = "m";

	bowEl.style.backgroundImage = 'url("./assets/bowAnim/hover.png")';
	bowEl.style.backgroundPosition = "0px 0px";
	bowFrame = 0;
	clearInterval(bowAnimInterval);
	bowAnimInterval = null;

	staffEl.style.backgroundImage = 'url("./assets/staffAnim/hoverSelect.png")';

	swordEl.style.backgroundImage = 'url("./assets/swordAnim/hover.png")';
	swordEl.style.backgroundPosition = "0px 0px";
	swordFrame = 0;
	clearInterval(swordAnimInterval);
	swordAnimInterval = null;


	save();
	arrange();
}

swordEl.onclick = function(){
	selected.class = "k";

	bowEl.style.backgroundImage = 'url("./assets/bowAnim/hover.png")';
	bowEl.style.backgroundPosition = "0px 0px";
	bowFrame = 0;
	clearInterval(bowAnimInterval);
	bowAnimInterval = null;

	staffEl.style.backgroundImage = 'url("./assets/staffAnim/hover.png")';
	staffEl.style.backgroundPosition = "0px 0px";
	staffFrame = 0;
	clearInterval(staffAnimInterval);
	staffAnimInterval = null;

	swordEl.style.backgroundImage = 'url("./assets/swordAnim/hoverSelect.png")';

	save();
	arrange();
}

// animations

var bowFrame = 0;
var bowAnimInterval = null;
const totalBowHoverFrames = 21;
const bowHoverFramesPerRow = 5;
const bowIdleFramesPerRow = 2;

bowEl.addEventListener(
	"mouseenter",
	(event) => {
		if (bowAnimInterval === null) {
			bowAnimInterval = setInterval(function () {
				bowFrame++;
				if (bowFrame < totalBowHoverFrames) {
					let xSpacing = 250 * (bowFrame%bowHoverFramesPerRow);
					let ySpacing = 250 * Math.floor(bowFrame/bowHoverFramesPerRow);
					bowEl.style.backgroundPosition = "-" + xSpacing + "px -" + ySpacing + "px";
				}
				else {
					if (bowEl.style.backgroundImage === 'url("./assets/bowAnim/hover.png")' || bowEl.style.backgroundImage === '') {
						bowEl.style.backgroundImage = 'url("./assets/bowAnim/idle.png")';
					}
					else if (bowEl.style.backgroundImage === 'url("./assets/bowAnim/hoverSelect.png")') {
						bowEl.style.backgroundImage = 'url("./assets/bowAnim/idleSelect.png")';
					}
					let xSpacing = 250 * (bowFrame%bowIdleFramesPerRow);
					let ySpacing = 250 * Math.floor(bowFrame/bowIdleFramesPerRow);
					bowEl.style.backgroundPosition = "-" + xSpacing + "px -" + ySpacing + "px";
				}
			}, 100);
		}
	},
	false,
);

var staffFrame = 0;
var staffAnimInterval = null;
const totalstaffHoverFrames = 10;
const staffHoverFramesPerRow = 3;
const staffIdleFramesPerRow = 2;

staffEl.addEventListener(
	"mouseenter",
	(event) => {
		if (staffAnimInterval === null) {
			staffAnimInterval = setInterval(function () {
				staffFrame++;
				if (staffFrame < totalstaffHoverFrames) {
					let xSpacing = 250 * (staffFrame%staffHoverFramesPerRow);
					let ySpacing = 250 * Math.floor(staffFrame/staffHoverFramesPerRow);
					staffEl.style.backgroundPosition = "-" + xSpacing + "px -" + ySpacing + "px";
				}
				else {
					if (staffEl.style.backgroundImage === 'url("./assets/staffAnim/hover.png")' || staffEl.style.backgroundImage === '') {
						staffEl.style.backgroundImage = 'url("./assets/staffAnim/idle.png")';
					}
					else if (staffEl.style.backgroundImage === 'url("./assets/staffAnim/hoverSelect.png")') {
						staffEl.style.backgroundImage = 'url("./assets/staffAnim/idleSelect.png")';
					}
					let xSpacing = 250 * (staffFrame%staffIdleFramesPerRow);
					let ySpacing = 250 * Math.floor(staffFrame/staffIdleFramesPerRow);
					staffEl.style.backgroundPosition = "-" + xSpacing + "px -" + ySpacing + "px";
				}
			}, 100);
		}
	},
	false,
);

var swordFrame = 0;
var swordAnimInterval = null;
const totalswordHoverFrames = 17;
const swordHoverFramesPerRow = 4;
const swordIdleFramesPerRow = 2;

swordEl.addEventListener(
	"mouseenter",
	(event) => {
		if (swordAnimInterval === null) {
			swordAnimInterval = setInterval(function () {
				swordFrame++;
				if (swordFrame < totalswordHoverFrames) {
					let xSpacing = 250 * (swordFrame%swordHoverFramesPerRow);
					let ySpacing = 250 * Math.floor(swordFrame/swordHoverFramesPerRow);
					swordEl.style.backgroundPosition = "-" + xSpacing + "px -" + ySpacing + "px";
				}
				else {
					if (swordEl.style.backgroundImage === 'url("./assets/swordAnim/hover.png")' || swordEl.style.backgroundImage === '') {
						swordEl.style.backgroundImage = 'url("./assets/swordAnim/idle.png")';
					}
					else if (swordEl.style.backgroundImage === 'url("./assets/swordAnim/hoverSelect.png")') {
						swordEl.style.backgroundImage = 'url("./assets/swordAnim/idleSelect.png")';
					}
					let xSpacing = 250 * (swordFrame%swordIdleFramesPerRow);
					let ySpacing = 250 * Math.floor(swordFrame/swordIdleFramesPerRow);
					swordEl.style.backgroundPosition = "-" + xSpacing + "px -" + ySpacing + "px";
				}
			}, 100);
		}
	},
	false,
);




document.getElementById("random").onclick = function(){
	document.getElementById("name").value = randomName();
}

document.getElementById("play").onclick = function(){
	if(document.getElementById("name").value.length > 2){
		sessionStorage.setItem("class",selected.class);
		sessionStorage.setItem("skin",selected[selected.class]);
		sessionStorage.setItem("name",document.getElementById("name").value);
		window.location.replace("../index.html");
	}else{
		document.getElementById("name").style.borderColor = "red";
		document.getElementById("random").style.borderColor = "red";
		document.getElementById("play").style.borderColor = "red";
		setTimeout(function(){
			document.getElementById("name").style.borderColor = "var(--border)";
			document.getElementById("random").style.borderColor = "var(--border)";
			document.getElementById("play").style.borderColor = "var(--border)";
		},200);
	}
}

function display(){
	document.getElementById("random").style.backgroundImage = "url('./assets/random.png')";

	// player rotation
	if(num === 0){ // forward
		document.getElementById("playerPreview").src="./assets/"+selected.class+selected[selected.class]+"/f.png";
		//document.getElementById("playerPreview").style.left = window.innerWidth/2-document.getElementById("playerPreview").offsetWidth/2+parseInt(document.getElementById("playerPreview").width)/Skins[selected.class][selected[selected.class]].position.x+"px";
	}else if(num === 1){ // left
		document.getElementById("playerPreview").src="./assets/"+selected.class+selected[selected.class]+"/l.png";
		//document.getElementById("playerPreview").style.left = window.innerWidth/2-document.getElementById("playerPreview").offsetWidth/2+parseInt(document.getElementById("playerPreview").width)/Skins[selected.class][selected[selected.class]].position.y+"px";
	}else if(num === 2){ // backward
		document.getElementById("playerPreview").src="./assets/"+selected.class+selected[selected.class]+"/b.png";
		//document.getElementById("playerPreview").style.left = window.innerWidth/2-document.getElementById("playerPreview").offsetWidth/2-parseInt(document.getElementById("playerPreview").width)/Skins[selected.class][selected[selected.class]].position.x+"px";
	}else { // right
		document.getElementById("playerPreview").src="./assets/"+selected.class+selected[selected.class]+"/r.png";
		//document.getElementById("playerPreview").style.left = window.innerWidth/2-document.getElementById("playerPreview").offsetWidth/2-parseInt(document.getElementById("playerPreview").width)/Skins[selected.class][selected[selected.class]].position.y+"px";
	}

	if(localStorage.getItem(selected.class) !== null) {
		document.getElementById("info").innerHTML = "<strong>Level "+JSON.parse(localStorage.getItem(selected.class)).level+"</strong>"+
		"<br><span style='font-size: 16px;'>"+JSON.parse(localStorage.getItem(selected.class)).displayAreaName+"</span>";
	}
	else {
		document.getElementById("info").innerHTML = "<strong>Level 0</strong><br><span style='font-size: 16px;'>Not Started</span>";
	}

	//
	// customisation screen population
	// tbd shouldn't need to be called this often, I'm just lazy !
	//
	let types = ["skinTone", "hair"]; // id in skindata
	let elementIds = ["skinToneSelect", "hairSelect", "clothingSelect"]; // html ids
	let sisterIds = ["skinToneColourSelect", "hairColourSelect", "clothingColourSelect"]; // html ids
	if (selected.class === "m") {
		types.push("mageClothing");
	}
	else if (selected.class === "a") {
		types.push("archerClothing");
	}
	else if (selected.class === "k") {
		types.push("knightClothing");
	}
	for (let i = 0; i < types.length; i++) {
		// type choices
		let typeName = types[i];
		let idName = elementIds[i];
		document.getElementById(idName).innerHTML = "";

		for (let j = 0; j < unlocked[typeName].length; j++) {
			let skindataId = unlocked[typeName][j]; // id in skindata
			let skin = Skins[typeName][skindataId];
			let colour = skin.colours[0];
			if (typeof colour === "undefined") {
				colour = {name: ""};
			}
			document.getElementById(idName).innerHTML += "<div class='customisationSelection' id='"+typeName+j+"'>";
			document.getElementById(typeName+j).style.backgroundImage = 'url("assets/playerPreview/'+skin.src+colour.name+'Front.png")';
			//document.getElementById("outfit"+i).style.right = 12 - Skins[selected.class][unlocked[selected.class][i]].headAdjust.x + "px";
			//document.getElementById("outfit"+i).style.top = -10 - Skins[selected.class][unlocked[selected.class][i]].headAdjust.y + "px";

			// now add onclicks
			document.getElementById(typeName+j).onclick = function () {
				selected[selected.class][typeName] = unlocked[typeName][j];
				save();
				display();
			}
		}

		// now do the same for colour choices (of the currently selected one)
		let sisterIdName = sisterIds[i];
		// find the currently selected skin (probs an easier way - this is just temp for now)
		let skindataId = unlocked[typeName][0]; // temp
		let skin = Skins[typeName][skindataId];
		document.getElementById(sisterIdName).innerHTML = "";
		for (let j = 0; j < skin.colours.length; j++) {
			let colourObj = skin.colours[j];

			document.getElementById(sisterIdName).innerHTML += "<div class='customisationSelection' id='"+typeName+"Color"+j+"'>";
			document.getElementById(typeName+"Color"+j).style.backgroundColor = colourObj.hex;

			// now add onclicks
			document.getElementById(typeName+"Color"+j).onclick = function () {
				selected[selected.class][typeName] = unlocked[typeName][i];
				save();
				display();
			}
		}
	}
}

document.getElementById("left").onclick = function () {
	num++;
	if(num > 3){num = 0;}
	display();
}

document.getElementById("right").onclick = function () {
	num--;
	if(num < 0){num = 3;}
	display();
}

//startCustomisation();

function startCustomisation () {
	document.getElementById("customisation").hidden = false;
	document.getElementById("centralImage").hidden = true;
}
