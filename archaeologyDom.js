document.getElementById("name").innerHTML = "<b>"+items.boots[2].name+"</b>";
if(items.boots[2].rarity == "common"){
	document.getElementById("name").style.color = "black";
}else if(items.boots[2].rarity == "unique"){
	document.getElementById("name").style.color = "orange";
}else{
	document.getElementById("name").style.color = "purple";
}