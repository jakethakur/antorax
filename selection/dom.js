
// default unlocked items:
// ids of unlocked customisation options in skindata
let unlocked = {
	skinTone: [],
	beard: [],
	hair: [],
	hat: [],
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

let previewDirection = 0;
let selected = { // default values (tbd randomise these)
	a: {
		skinTone: 0,
		beard: 0,
		hair: 0,
		archerClothing: 0,
		hairColour: "Black",
		hat: 0,
	},
	m: {
		skinTone: 0,
		beard: 0,
		hair: 0,
		mageClothing: 0,
		hairColour: "Black",
		hat: 0,
	},
	k: {
		skinTone: 0,
		beard: 0,
		hair: 0,
		knightClothing: 0,
		hairColour: "Black",
		hat: 0,
	},
};

let localStorageSelected = localStorage.getItem("selected");
if(localStorageSelected !== null){
	localStorageSelected = JSON.parse(localStorageSelected);
	// update to new system
	if (typeof localStorageSelected.k !== "object") {
		localStorageSelected.k = {};
	}
	if (typeof localStorageSelected.a !== "object") {
		localStorageSelected.a = {};
	}
	if (typeof localStorageSelected.m !== "object") {
		localStorageSelected.m = {};
	}
	Object.assign(selected.k, localStorageSelected.k);
	Object.assign(selected.a, localStorageSelected.a);
	Object.assign(selected.m, localStorageSelected.m);
	selected.class = localStorageSelected.class;
}
else {
	selected.class = Object.keys(selected)[Math.floor(Math.random()*3)];
}
switch (selected.class) {
	case "a":
		selected.classFull = "archer";
		break;
	case "m":
		selected.classFull = "mage";
		break;
	case "k":
		selected.classFull = "knight";
		break;
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
	selected.classFull = "archer";

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

	if (customisationDisp === "mageClothing" || customisationDisp === "knightClothing") {
		customisationDisp = "archerClothing";
		imageDirectory = "clothing/archer/";
	}

	save();
	arrange();
	populateSelectionMenu();
}

staffEl.onclick = function(){
	selected.class = "m";
	selected.classFull = "mage";

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

	if (customisationDisp === "archerClothing" || customisationDisp === "knightClothing") {
		customisationDisp = "mageClothing";
		imageDirectory = "clothing/mage/";
	}

	save();
	arrange();
	populateSelectionMenu();
}

swordEl.onclick = function(){
	selected.class = "k";
	selected.classFull = "knight";

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

	if (customisationDisp === "mageClothing" || customisationDisp === "archerClothing") {
		customisationDisp = "knightClothing";
		imageDirectory = "clothing/knight/";
	}

	save();
	arrange();
	populateSelectionMenu();
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

// play
document.getElementById("play").onclick = function(){
	// check they've entered a name
	if (document.getElementById("name").value.length > 2) {
		// set sessionStorage
		sessionStorage.setItem("class",selected.class);
		sessionStorage.setItem("name",document.getElementById("name").value);
		// customisation
		selected[selected.class].clothing = selected[selected.class][selected.classFull+"Clothing"];
		sessionStorage.setItem("customisation",JSON.stringify(selected[selected.class]));

		// sometimes sessionStorage doesn't carry over i.e. firefox local version. so store this info in the domain name instead for local versions
		if (location.hostname === "" || location.hostname === "localhost") {
			window.location.replace("../index.html?class="+selected.class+"&name="+document.getElementById("name").value+"&skinTone="+selected[selected.class].skinTone+"&clothing="+selected[selected.class][selected.classFull+"Clothing"]+"&beard="+selected[selected.class].beard+"&hair="+selected[selected.class].hair+"&hairColour="+selected[selected.class].hairColour+"&hat="+selected[selected.class].hat);
		}
		else {
			window.location.replace("../index.html");
		}

	}else{
		// no name entered
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

function display () {
	document.getElementById("random").style.backgroundImage = "url('./assets/random.png')";

	// player rotation
	if(previewDirection === 0){ // forward
		//document.getElementById("playerPreview").src="./assets/"+selected.class+selected[selected.class]+"/f.png";
		//document.getElementById("playerPreview").style.left = window.innerWidth/2-document.getElementById("playerPreview").offsetWidth/2+parseInt(document.getElementById("playerPreview").width)/Skins[selected.class][selected[selected.class]].position.x+"px";
	}else if(previewDirection === 1){ // left
		//document.getElementById("playerPreview").src="./assets/"+selected.class+selected[selected.class]+"/l.png";
		//document.getElementById("playerPreview").style.left = window.innerWidth/2-document.getElementById("playerPreview").offsetWidth/2+parseInt(document.getElementById("playerPreview").width)/Skins[selected.class][selected[selected.class]].position.y+"px";
	}else if(previewDirection === 2){ // backward
		//document.getElementById("playerPreview").src="./assets/"+selected.class+selected[selected.class]+"/b.png";
		//document.getElementById("playerPreview").style.left = window.innerWidth/2-document.getElementById("playerPreview").offsetWidth/2-parseInt(document.getElementById("playerPreview").width)/Skins[selected.class][selected[selected.class]].position.x+"px";
	}else { // right
		//document.getElementById("playerPreview").src="./assets/"+selected.class+selected[selected.class]+"/r.png";
		//document.getElementById("playerPreview").style.left = window.innerWidth/2-document.getElementById("playerPreview").offsetWidth/2-parseInt(document.getElementById("playerPreview").width)/Skins[selected.class][selected[selected.class]].position.y+"px";
	}

	if(localStorage.getItem(selected.class) !== null) {
		document.getElementById("info").innerHTML = "<strong>Level "+JSON.parse(localStorage.getItem(selected.class)).level+"</strong>"+
		"<br><span style='font-size: 22px;'>"+JSON.parse(localStorage.getItem(selected.class)).displayAreaName+"</span>";
	}
	else {
		document.getElementById("info").innerHTML = "<strong>Level 0</strong><br><span style='font-size: 22px;'>Not Started</span>";
	}

	// update player image

	// skin tone
	let skinToneSrc = Skins.skinTone[selected[selected.class].skinTone].src;
	document.getElementById("skinTonePreview").src = "../assets/playerCustom/skinTone/" + skinToneSrc + ".png";
	// ears
	document.getElementById("earsPreview").src = "../assets/playerCustom/ears/" + skinToneSrc + ".png";
	// face
	if (Skins.skinTone[selected[selected.class].skinTone].race === "Orc") {
		document.getElementById("facePreview").src = "../assets/playerCustom/facialExpression/baseOrc.png";
	}
	else {
		document.getElementById("facePreview").src = "../assets/playerCustom/facialExpression/base.png";
	}

	// clothing
	let clothingSrc = Skins[selected.classFull+"Clothing"][selected[selected.class][selected.classFull+"Clothing"]].src;
	document.getElementById("clothingPreview").src = "../assets/playerCustom/clothing/" + selected.classFull + "/" + clothingSrc + ".png";

	// beard
	let beardSrc = Skins.beard[selected[selected.class].beard].src;
	if (!Skins.beard[selected[selected.class].beard].blank) {
		beardSrc += selected[selected.class].hairColour;
	}
	document.getElementById("beardPreview").src = "../assets/playerCustom/beard/" + beardSrc + ".png";

	// hair
	let hairSrc = Skins.hair[selected[selected.class].hair].src;
	if (!Skins.hair[selected[selected.class].hair].blank) {
		hairSrc += selected[selected.class].hairColour;
	}
	document.getElementById("hairPreview").src = "../assets/playerCustom/hair/" + hairSrc + ".png";

	// hat
	let hatSrc = Skins.hat[selected[selected.class].hat].src;
	document.getElementById("hatPreview").src = "../assets/playerCustom/hat/" + hatSrc + ".png";
}

var customisationDisp;
var imageDirectory;
hairButton();

// display skin tone selection in the customisation menu
function skinToneButton () {
	deselectButtons(); // unselects old button
	customisationDisp = "skinTone";
	imageDirectory = "skinTone/";
	document.getElementById(customisationDisp+"View").classList.add("selected");
	populateSelectionMenu();
}

// display clothing selection in the customisation menu
function clothingButton () {
	deselectButtons(); // unselects old button
	if (selected.class === "m") {
		customisationDisp = "mageClothing";
		imageDirectory = "clothing/mage/";
	}
	else if (selected.class === "a") {
		customisationDisp = "archerClothing";
		imageDirectory = "clothing/archer/";
	}
	else if (selected.class === "k") {
		customisationDisp = "knightClothing";
		imageDirectory = "clothing/knight/";
	}
	document.getElementById("clothingView").classList.add("selected");
	populateSelectionMenu();
}

// display hair selection in the customisation menu
function hairButton () {
	deselectButtons(); // unselects old button
	customisationDisp = "hair";
	imageDirectory = "hair/";
	document.getElementById(customisationDisp+"View").classList.add("selected");
	populateSelectionMenu();
}

// display hat selection in the customisation menu
function hatButton () {
	deselectButtons(); // unselects old button
	customisationDisp = "hat";
	imageDirectory = "hat/";
	document.getElementById(customisationDisp+"View").classList.add("selected");
	populateSelectionMenu();
}

// remove yellow border from all button
function deselectButtons () {
	document.getElementById("skinToneView").classList.remove("selected");
	document.getElementById("clothingView").classList.remove("selected");
	document.getElementById("hairView").classList.remove("selected");
	document.getElementById("hatView").classList.remove("selected");
}

// customisation screen population
function populateSelectionMenu () {
	document.getElementById("customisationSelect").innerHTML = "";
	document.getElementById("customisationSelect2").innerHTML = "";
	document.getElementById("customisationColourSelect").innerHTML = "";

	for (let j = 0; j < unlocked[customisationDisp].length; j++) {
		let skindataId = unlocked[customisationDisp][j]; // id in skindata
		let skin = Skins[customisationDisp][skindataId]; // object in skindata

		// check this is for the correct class (i.e. for hats)
		if (typeof skin.class === "undefined" || skin.class === selected.class) {
			addCustomisationElement(skin, "customisationSelect", j, customisationDisp);
		}
	}

	// now add onclicks
	// needs to be done now, otherwise they get reset as innerhtml is updated
	for (let j = 0; j < unlocked[customisationDisp].length; j++) {
		let skindataId = unlocked[customisationDisp][j]; // id in skindata
		let skin = Skins[customisationDisp][skindataId]; // object in skindata
		// check this is actually displayed in the menu
		if (typeof skin.class === "undefined" || skin.class === selected.class) {
			document.getElementById(customisationDisp+j).onclick = function () {
				selected[selected.class][customisationDisp] = unlocked[customisationDisp][j];
				save();
				display();
			}
		}
	}

	// also display facial hair (beard) if it's for hair
	if (customisationDisp === "hair") {
		let selectedSkin = Skins.beard[selected[selected.class].beard];

		for (let j = 0; j < unlocked.beard.length; j++) {
			let skindataId = unlocked.beard[j]; // id in skindata
			let skin = Skins.beard[skindataId]; // object in skindata

			addCustomisationElement(skin, "customisationSelect2", j, "beard");
		}

		// now add onclicks
		for (let j = 0; j < unlocked.beard.length; j++) {
			document.getElementById("beard"+j).onclick = function () {
				selected[selected.class].beard = unlocked.beard[j];
				save();
				display();
			}
		}
	}

	// also display colour choices if it's for hair
	if (customisationDisp === "hair") {
		let selectedSkin = Skins[customisationDisp][selected[selected.class][customisationDisp]];
		let colourArray;
		if (typeof Skins[customisationDisp][selected[selected.class][customisationDisp]].colours === "undefined") {
			// no additional colour choices for selected hair
			colourArray = Skins.hairColours; // just default colours allowed
		}
		else {
			colourArray = selectedSkin.colours.concat(Skins.hairColours);
		}

		// set unlocked colours (since these vary for each hairstyle)
		unlocked.hairColour = colourArray.map(colourObj => colourObj.name);

		for (let j = 0; j < colourArray.length; j++) {
			let colourObj = colourArray[j];

			document.getElementById("customisationColourSelect").innerHTML += "<img src='assets/customisationColours/hair"+colourObj.name+".png' class='customisationSelection' id='"+customisationDisp+"Colour"+j+"'>";
		}

		// now add onclicks
		for (let j = 0; j < colourArray.length; j++) {
			document.getElementById(customisationDisp+"Colour"+j).onclick = function () {
				selected[selected.class][customisationDisp+"Colour"] = unlocked[customisationDisp+"Colour"][j];
				save();
				display();
			}
		}
	}
}

// called by populateSelectionMenu
// note this doesn't check if the skin is actually valid to be added (i.e. right class, unlocked)
function addCustomisationElement(skin, parentElementId, j, type) {
	let colour;
	if (type === "hair") {
		colour = Skins.hairColours[0]; // default colour
	}
	else if (typeof skin.colours !== "undefined") {
		colour = skin.colours[0]; // default colour
	}
	else {
		colour = {name: ""}; // no colours available for this
	}

	// add an el for each item
	document.getElementById(parentElementId).innerHTML += "<div class='customisationSelection' id='"+type+j+"'>";
	document.getElementById(type+j).style.backgroundImage = 'url("../assets/playerCustom/'+imageDirectory+skin.src+colour.name+'.png")';
	// adjust (legacy)
	//document.getElementById("outfit"+i).style.right = 12 - Skins[selected.class][unlocked[selected.class][i]].headAdjust.x + "px";
	//document.getElementById("outfit"+i).style.top = -10 - Skins[selected.class][unlocked[selected.class][i]].headAdjust.y + "px";
}


/*document.getElementById("left").onclick = function () {
	previewDirection++;
	if(previewDirection > 3){previewDirection = 0;}
	display();
}

document.getElementById("right").onclick = function () {
	previewDirection--;
	if(previewDirection < 0){previewDirection = 3;}
	display();
}*/
