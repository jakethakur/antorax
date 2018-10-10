let num = 0;
let max = {
	am: 1,
	af: 0,
	mm: 1,
	mf: 1,
	km: 1,
	kf: 0,
}
let selected = {
	am: 0,
	af: 0,
	mm: 0,
	mf: 0,
	km: 0,
	kf: 0,
	class: "a",
	gender: "m",
};
if(localStorage.getItem("selected") !== null){
	selected = JSON.parse(localStorage.getItem("selected"));
	document.getElementById("name").value = localStorage.getItem("name");
}
let previousWidth = window.innerWidth;
let previousHeight = window.innerHeight;
let previousName = "";

function validate(strValue) {
	let objRegExp  = /^[a-zA-Z0-9_\u00C0-\u00ff]+$/;
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
	document.getElementById("archer").style.width = window.innerWidth/5-54+"px";
	document.getElementById("archer").style.height = window.innerHeight/3-58+"px";
	document.getElementById("mage").style.width = window.innerWidth/5-54+"px";
	document.getElementById("mage").style.height = window.innerHeight/3-58+"px";
	document.getElementById("knight").style.width = window.innerWidth/5-54+"px";
	document.getElementById("knight").style.height = window.innerHeight/3-58+"px";
	document.getElementById("image").style.height = window.innerHeight-205+"px";
	document.getElementById("play").style.top = window.innerHeight-85+"px";
	document.getElementById("play").style.left = window.innerWidth/2-document.getElementById("play").offsetWidth/2+"px";
	document.getElementById("male").style.width = document.getElementById("female").offsetWidth-30+"px";
	document.getElementById("male").style.left = window.innerWidth/100*27-document.getElementById("male").offsetWidth/2+"px";
	document.getElementById("left").style.left = window.innerWidth/100*27-document.getElementById("left").offsetWidth/2+"px";
	document.getElementById("left").style.top = window.innerHeight/2-document.getElementById("left").offsetHeight/2+"px";
	document.getElementById("right").style.top = window.innerHeight/2-document.getElementById("right").offsetHeight/2+"px";
	document.getElementById("female").style.left = window.innerWidth/100*73-document.getElementById("female").offsetWidth/2+"px";
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
	display();
}

document.getElementById("mage").onclick = function(){
	selected.class = "m";
	display();
}

document.getElementById("knight").onclick = function(){
	selected.class = "k";
	display();
}

document.getElementById("male").onclick = function(){
	selected.gender = "m";
	display();
}

document.getElementById("female").onclick = function(){
	selected.gender = "f";
	display();
}

document.getElementById("image").onclick = function(){
	if(selected[selected.class+selected.gender] !== max[selected.class+selected.gender]){
		selected[selected.class+selected.gender]++;
	}else{
		selected[selected.class+selected.gender] = 0;
	}
	display();
}

document.getElementById("random").onclick = function(){
	document.getElementById("name").value = randomName(selected.gender);
}

document.getElementById("play").onclick = function(){
	if(document.getElementById("name").value.length > 2){
		sessionStorage.setItem("class",selected.class);
		sessionStorage.setItem("gender",selected.gender);
		sessionStorage.setItem("skin",selected[selected.class+selected.gender]);
		sessionStorage.setItem("name",document.getElementById("name").value);
		window.location.replace("./index.html");
	}
}

function display(){
	document.getElementById("random").style.backgroundImage = "url('assets/class-select/r"+selected.gender+".png')";
	if(num === 0){
		document.getElementById("image").src="assets/class-select/"+selected.class+selected.gender+selected[selected.class+selected.gender]+"/f.png";
		if(selected.class!=="m"){
			document.getElementById("image").style.left = window.innerWidth/2-document.getElementById("image").offsetWidth/2-parseInt(document.getElementById("image").width)/6.7+"px";
		}else{
			document.getElementById("image").style.left = window.innerWidth/2-document.getElementById("image").offsetWidth/2-parseInt(document.getElementById("image").width)/10+"px";
		}
	}else if(num === 1){
		document.getElementById("image").src="assets/class-select/"+selected.class+selected.gender+selected[selected.class+selected.gender]+"/l.png";
		if(selected.class==="a"){
			document.getElementById("image").style.left = window.innerWidth/2-document.getElementById("image").offsetWidth/2+"px";
		}else if(selected.class==="m"){
			document.getElementById("image").style.left = window.innerWidth/2-document.getElementById("image").offsetWidth/2+parseInt(document.getElementById("image").width)/20+"px";
		}else{
			document.getElementById("image").style.left = window.innerWidth/2-document.getElementById("image").offsetWidth/2-parseInt(document.getElementById("image").width)/10+"px";
		}
	}else if(num === 2){
		document.getElementById("image").src="assets/class-select/"+selected.class+selected.gender+selected[selected.class+selected.gender]+"/b.png";
		if(selected.class!=="m"){
			document.getElementById("image").style.left = window.innerWidth/2-document.getElementById("image").offsetWidth/2+parseInt(document.getElementById("image").width)/6.7+"px";
		}else{
			document.getElementById("image").style.left = window.innerWidth/2-document.getElementById("image").offsetWidth/2+parseInt(document.getElementById("image").width)/10+"px";
		}
	}else {
		document.getElementById("image").src="assets/class-select/"+selected.class+selected.gender+selected[selected.class+selected.gender]+"/r.png";
		if(selected.class==="a"){
			document.getElementById("image").style.left = window.innerWidth/2-document.getElementById("image").offsetWidth/2+"px";
		}else if(selected.class==="m"){
			document.getElementById("image").style.left = window.innerWidth/2-document.getElementById("image").offsetWidth/2-parseInt(document.getElementById("image").width)/20+"px";
		}else{
			document.getElementById("image").style.left = window.innerWidth/2-document.getElementById("image").offsetWidth/2+parseInt(document.getElementById("image").width)/10+"px";
		}
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