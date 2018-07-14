var num = 0;
var selected = "a";
var gender = "m";
var previousWidth = window.innerWidth;
var previousHeight = window.innerHeight;
var previousName = "";

function validate(strValue) {
	var objRegExp  = /^[a-zA-Z\u00C0-\u00ff]+$/;
	if(!objRegExp.test(strValue)){
		objRegExp  = /^$/;
		return objRegExp.test(strValue);
	}else{
		return objRegExp.test(strValue);
	}
}

checkChange();
function checkChange(){
	window.requestAnimationFrame(checkChange);
	if(window.innerWidth != previousWidth){
		previousWidth = window.innerWidth;
		arrange();
	}
	if(window.innerHeight != previousHeight){
		previousHeight = window.innerHeight;
		arrange();
	}
	if(document.getElementById("name").value.length != previousName.length){
		if(document.getElementById("name").value.length > 12 || (!validate(document.getElementById("name").value))){
			document.getElementById("name").value = previousName;
		}
		previousName = document.getElementById("name").value;
	}
}

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

document.addEventListener('mouseup', function(event){
	if(event.pageX < parseInt(document.getElementById("image").style.left) && event.pageX > window.innerWidth/5 && event.pageY > 100 && event.pageY < window.innerHeight-105){
		num++;
		if(num > 3){num = 0;}
	}else if(event.pageX > parseInt(document.getElementById("image").style.left) + document.getElementById("image").offsetWidth && event.pageX < window.innerWidth/5*4 && event.pageY > 100 && event.pageY < window.innerHeight-105){
		num--;
		if(num < 0){num = 3;}
	}
	display();
});

document.getElementById("archer").onclick = function(){
	selected = "a";
	display();
}

document.getElementById("mage").onclick = function(){
	selected = "m";
	display();
}

document.getElementById("knight").onclick = function(){
	selected = "k";
	display();
}

document.getElementById("image").onclick = function(){
	if(gender == "m"){
		gender = "f";
	}else{
		gender = "m";
	}
	display();
}

document.getElementById("random").onclick = function(){
	document.getElementById("name").value = randomName(gender);
}

document.getElementById("play").onclick = function(){
	if(document.getElementById("name").value.length > 2){
		sessionStorage.setItem("class",selected);
		window.location.replace("./index.html");
	}
}

function display(){
	if(num == 0){
		document.getElementById("image").src="assets/class-select/"+selected+gender+"f.png";
		if(selected!="m"){
			document.getElementById("image").style.left = window.innerWidth/2-document.getElementById("image").offsetWidth/2-parseInt(document.getElementById("image").width)/6.7+"px";
		}else{
			document.getElementById("image").style.left = window.innerWidth/2-document.getElementById("image").offsetWidth/2-parseInt(document.getElementById("image").width)/10+"px";
		}
	}else if(num == 1){
		document.getElementById("image").src="assets/class-select/"+selected+gender+"l.png";
		if(selected=="a"){
			document.getElementById("image").style.left = window.innerWidth/2-document.getElementById("image").offsetWidth/2+"px";
		}else if(selected=="m"){
			document.getElementById("image").style.left = window.innerWidth/2-document.getElementById("image").offsetWidth/2+parseInt(document.getElementById("image").width)/20+"px";
		}else{
			document.getElementById("image").style.left = window.innerWidth/2-document.getElementById("image").offsetWidth/2-parseInt(document.getElementById("image").width)/10+"px";
		}
	}else if(num == 2){
		document.getElementById("image").src="assets/class-select/"+selected+gender+"b.png";
		if(selected!="m"){
			document.getElementById("image").style.left = window.innerWidth/2-document.getElementById("image").offsetWidth/2+parseInt(document.getElementById("image").width)/6.7+"px";
		}else{
			document.getElementById("image").style.left = window.innerWidth/2-document.getElementById("image").offsetWidth/2+parseInt(document.getElementById("image").width)/10+"px";
		}
	}else {
		document.getElementById("image").src="assets/class-select/"+selected+gender+"r.png";
		if(selected=="a"){
			document.getElementById("image").style.left = window.innerWidth/2-document.getElementById("image").offsetWidth/2+"px";
		}else if(selected=="m"){
			document.getElementById("image").style.left = window.innerWidth/2-document.getElementById("image").offsetWidth/2-parseInt(document.getElementById("image").width)/20+"px";
		}else{
			document.getElementById("image").style.left = window.innerWidth/2-document.getElementById("image").offsetWidth/2+parseInt(document.getElementById("image").width)/10+"px";
		}
	}
}