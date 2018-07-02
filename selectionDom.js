var num = 0;

document.getElementById("archer").style.width = window.innerWidth/5-54+"px";
document.getElementById("archer").style.height = window.innerHeight/3-58+"px";
document.getElementById("mage").style.width = window.innerWidth/5-54+"px";
document.getElementById("mage").style.height = window.innerHeight/3-58+"px";
document.getElementById("knight").style.width = window.innerWidth/5-54+"px";
document.getElementById("knight").style.height = window.innerHeight/3-58+"px";
document.getElementById("image").style.height = window.innerHeight-135+"px";
document.getElementById("image").style.left = window.innerWidth/2-document.getElementById("image").offsetWidth/2+"px";
document.getElementById("name").style.left = document.getElementById("image").getBoundingClientRect().left+"px";
document.getElementById("name").style.top = window.innerHeight-85+"px";
document.getElementById("name").style.width = document.getElementById("image").offsetWidth-10+"px";
document.getElementById("logo").style.left = window.innerWidth/5*4+"px";
document.getElementById("logo").style.width = window.innerWidth/5-24+"px";
document.getElementById("news").style.left = window.innerWidth/5*4+"px";
document.getElementById("news").style.top = document.getElementById("logo").offsetHeight+40+"px";
document.getElementById("news").style.width = window.innerWidth/5-34+"px";
document.getElementById("news").style.height = window.innerHeight-document.getElementById("logo").offsetHeight-95+"px";

document.addEventListener('mouseup', function(event){
	if(event.pageX < window.innerWidth/2 && event.pageX > window.innerWidth/5 && event.pageY > 20 && event.pageY < window.innerHeight-115){
		num++;
		if(num > 3){num = 0;}
	} else if(event.pageX > window.innerWidth/2 && event.pageX < window.innerWidth/5*4 && event.pageY > 20 && event.pageY < window.innerHeight-115){
		num--;
		if(num < 0){num = 3;}
	}
	console.log(num);
	if(num == 0){
		document.getElementById("image").src="assets/class-select/archerFront.png";
	}
	else if(num == 1){
		document.getElementById("image").src="assets/class-select/archerLeft.png";
	}
	else if(num == 2){
		document.getElementById("image").src="assets/class-select/archerBack.png";
	}
	else {
		document.getElementById("image").src="assets/class-select/archerRight.png";
	}
});