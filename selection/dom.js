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
		return objRegExp.test(strValue);
	}else{
		return objRegExp.test(strValue);
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
	document.getElementById("news").style.left = window.innerWidth/5*4+"px";
	document.getElementById("news").style.top = document.getElementById("logo").offsetHeight+40+"px";
	document.getElementById("news").style.width = window.innerWidth/5-34+"px";
	document.getElementById("news").style.height = window.innerHeight-document.getElementById("logo").offsetHeight-95+"px";
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

document.getElementById("image").onclick = function(){
	if(selected[selected.class] < Skins[selected.class].length-1){
		selected[selected.class]++;
	}else{
		selected[selected.class] = 0;
	}
	display();
}

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
			document.getElementById("name").style.borderColor = "#886622";
			document.getElementById("random").style.borderColor = "#886622";
			document.getElementById("play").style.borderColor = "#886622";
		},200);
	}
}

function display(){
	document.getElementById("random").style.backgroundImage = "url('./assets/rm.png')";
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
}

document.addEventListener('mouseup', function(event){
	if(event.pageX < parseInt(document.getElementById("image").style.left) && event.pageX > window.innerWidth/5 && event.pageY > 100 && event.pageY < window.innerHeight-105){
		num++;
		if(num > 3){num = 0;}
	}else if(event.pageX > parseInt(document.getElementById("image").style.left) + document.getElementById("image").offsetWidth && event.pageX < window.innerWidth/5*4 && event.pageY > 100 && event.pageY < window.innerHeight-105){
		num--;
		if(num < 0){num = 3;}
	}
	display();
	if(localStorage.getItem("accept") === "true"){
		setTimeout(function(){
			localStorage.setItem("selected", JSON.stringify(selected));
		},1);
	}
});