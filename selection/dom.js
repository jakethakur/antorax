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
	class: "a",
};
if(localStorage.getItem("selected") !== null){
	selected = JSON.parse(localStorage.getItem("selected"));
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
	document.getElementById("archer").style.width = window.innerWidth/5-54+"px";
	document.getElementById("archer").style.height = window.innerHeight/3-58+"px";
	document.getElementById("mage").style.width = window.innerWidth/5-54+"px";
	document.getElementById("mage").style.height = window.innerHeight/3-58+"px";
	document.getElementById("knight").style.width = window.innerWidth/5-54+"px";
	document.getElementById("knight").style.height = window.innerHeight/3-58+"px";
	document.getElementById("image").style.height = window.innerHeight-205+"px";
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
	document.getElementById("logo").style.width = window.innerWidth/5-24+"px";
	document.getElementById("info").style.left = window.innerWidth/5*4+"px";
	document.getElementById("info").style.top = document.getElementById("logo").offsetHeight+40+"px";
	document.getElementById("info").style.width = window.innerWidth/5-34+"px";
	document.getElementById("skins").style.left = window.innerWidth/5*4+"px";
	document.getElementById("skins").style.top = document.getElementById("logo").offsetHeight+40+90+"px";
	document.getElementById("skins").style.width = window.innerWidth/5-34+"px";
	document.getElementById("news").style.left = window.innerWidth/5*4+"px";
	document.getElementById("news").style.top = document.getElementById("logo").offsetHeight+40+90+103+"px";
	document.getElementById("news").style.width = window.innerWidth/5-34+"px";
	document.getElementById("news").style.height = window.innerHeight-document.getElementById("logo").offsetHeight-95-90-103+"px";
	display();
}

document.getElementById("archer").onclick = function(){
	selected.class = "a";
	arrange();
}

document.getElementById("mage").onclick = function(){
	selected.class = "m";
	arrange();
}

document.getElementById("knight").onclick = function(){
	selected.class = "k";
	arrange();
}

document.getElementById("random").onclick = function(){
	document.getElementById("name").value = randomName(Skins[selected.class][selected[selected.class]].gender);
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
	document.getElementById("random").style.backgroundImage = "url('./assets/r"+Skins[selected.class][selected[selected.class]].gender+".png')";
	if(num === 0){ // forward
		document.getElementById("image").src="./assets/"+selected.class+selected[selected.class]+"/f.png";
		document.getElementById("image").style.left = window.innerWidth/2-document.getElementById("image").offsetWidth/2+parseInt(document.getElementById("image").width)/Skins[selected.class][selected[selected.class]].position.x+"px";
	}else if(num === 1){ // left
		document.getElementById("image").src="./assets/"+selected.class+selected[selected.class]+"/l.png";
		document.getElementById("image").style.left = window.innerWidth/2-document.getElementById("image").offsetWidth/2+parseInt(document.getElementById("image").width)/Skins[selected.class][selected[selected.class]].position.y+"px";
	}else if(num === 2){ // backward
		document.getElementById("image").src="./assets/"+selected.class+selected[selected.class]+"/b.png";
		document.getElementById("image").style.left = window.innerWidth/2-document.getElementById("image").offsetWidth/2-parseInt(document.getElementById("image").width)/Skins[selected.class][selected[selected.class]].position.x+"px";
	}else { // right
		document.getElementById("image").src="./assets/"+selected.class+selected[selected.class]+"/r.png";
		document.getElementById("image").style.left = window.innerWidth/2-document.getElementById("image").offsetWidth/2-parseInt(document.getElementById("image").width)/Skins[selected.class][selected[selected.class]].position.y+"px";
	}
	if(localStorage.getItem(selected.class) !== null) {
		document.getElementById("info").innerHTML = "<strong>Level "+JSON.parse(localStorage.getItem(selected.class)).level+"</strong>"+
		"<br><span style='font-size: 16px;'>"+JSON.parse(localStorage.getItem(selected.class)).displayAreaName+"</span>";
	}
	else {
		document.getElementById("info").innerHTML = "<strong>Level 0</strong><br><span style='font-size: 16px;'>Not Started</span>";
	}
	document.getElementById("skins").innerHTML = "";
	for (let i = 0; i < Skins[selected.class].length; i++) {
		document.getElementById("skins").innerHTML += "<div class='skin' id='skin"+i+"'>";
		document.getElementById("skin"+i).style.backgroundImage = 'url("assets/'+selected.class+i+'/f.png")';
		document.getElementById("skin"+i).style.right = 12 - Skins[selected.class][i].headAdjust.x + "px";
		document.getElementById("skin"+i).style.top = -10 - Skins[selected.class][i].headAdjust.y + "px";
	}
	document.getElementById("skins").innerHTML = "<center>"+document.getElementById("skins").innerHTML+"</center>";
	for (let i = 0; i < Skins[selected.class].length; i++) {
		document.getElementById("skin"+i).onclick = function () {
			selected[selected.class] = i;
			display();
		}
	}
}

document.getElementById("left").onclick = function () {
	num++;
	if(num > 3){num = 0;}
	display();
	if(localStorage.getItem("accept") === "true"){
		setTimeout(function(){
			localStorage.setItem("selected", JSON.stringify(selected));
		},1);
	}
}

document.getElementById("right").onclick = function () {
	num--;
	if(num < 0){num = 3;}
	display();
	if(localStorage.getItem("accept") === "true"){
		setTimeout(function(){
			localStorage.setItem("selected", JSON.stringify(selected));
		},1);
	}
}