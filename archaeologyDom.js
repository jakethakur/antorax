document.getElementById("all").style.height = window.innerHeight;
document.getElementById("all").style.width = window.innerWidth;

var array = [];
for(var i = 0; i < Object.keys(items).length; i++){
	for(var x = 0; x < items[Object.keys(items)[i]].length; x++){
		array.push(items[Object.keys(items)[i]][x]);
	}
}
for(var i = 0; i < array.length; i++){
	document.getElementById("all").innerHTML += '<div class="box"><img src="'+array[i].image+'" class="img"><p id="name'+i+'" class="para"></p><p id="tier'+i+'" class="para"></p><p id="stats'+i+'" class="para"></p><p id="lore'+i+'" class="para"></p></div>';
	
	document.getElementById("name"+i).innerHTML = "<b>"+array[i].name+"</b>";
	if(array[i].rarity == "common"){
		document.getElementById("name"+i).style.color = "black";
	}else if(array[i].rarity == "unique"){
		document.getElementById("name"+i).style.color = "orange";
	}else{
		document.getElementById("name"+i).style.color = "purple";
	}
	document.getElementById("tier"+i).innerHTML = "<br>Tier: "+array[i].tier;
	for(var x = 0; x < Object.keys(array[i].stats).length; x++){
		document.getElementById("stats"+i).innerHTML += Object.keys(array[i].stats)[x]+": "+array[i].stats[Object.keys(array[i].stats)[x]]+"<br>";
	}
	document.getElementById("lore"+i).innerHTML = "<br>"+array[i].lore;
}