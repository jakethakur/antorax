function update(){
	if(document.getElementById("answer").getElementsByTagName("div").length = 12){
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
}

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