function update(){
	
	for(var i = 0; i < document.getElementsByClassName("option").length; i++){
		document.getElementsByClassName("option")[i].style.width = (screenWidth - 240) / 4 + "px";
		document.getElementsByClassName("option")[i].style.height = screenHeight - 210 + "px";
		document.getElementsByClassName("option")[i].style.lineHeight = screenHeight - 210 + "px";
		document.getElementsByClassName("option")[i].style.left = 20 + ((screenWidth - 240) / 4 + 50) * i + "px";
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

var previousWidth = 0;
var previousHeight = 0;
var screenWidth = 0;
var screenHeight = 0;
function checkChange(){
window.requestAnimationFrame(checkChange);
	if(window.innerWidth != previousWidth || window.innerHeight != previousHeight){
		if(window.innerWidth >= 979){
			screenWidth = window.innerWidth;
		}else{
			console.log("yes");
			screenWidth = 979;
		}
		if(window.innerHeight >= 272){
			screenHeight = window.innerHeight;
		}else{
			screenHeight = 272;
		}
		previousWidth = window.innerWidth;
		previousHeight = window.innerHeight;
		update();
	}
}
checkChange();