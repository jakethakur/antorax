if (localStorage.getItem("user") !== null) {
	User = JSON.parse(localStorage.getItem("user"));
}
else {
	User = {
		achievementPoints : {
			total: 0,
			unclaimed: 0,
		},
		skins: {
			a: [0, 1],
			m: [0, 1],
			k: [0, 1],
		},
	};
}

if (User.settings !== undefined && User.settings.dark) {
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
	--opacity: 0.8;
	--input: #aaaaaa;`
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
	--opacity: 0.6;
	--input: #ffffff;`
}


let array = [];
for (let i = 2; i < Skins.a.length; i++) {
	Skins.a[i].class = "a";
	array.push(Skins.a[i]);
}
for (let i = 2; i < Skins.m.length; i++) {
	Skins.m[i].class = "m";
	array.push(Skins.m[i]);
}
for (let i = 2; i < Skins.k.length; i++) {
	Skins.k[i].class = "k";
	array.push(Skins.k[i]);
}
document.getElementById("options").innerHTML = "Archer";
for (let i = 0; i < array.length; i++) {
	if (i === Skins.a.length-2) {
		document.getElementById("options").innerHTML += "Mage";
	}
	if (i === Skins.a.length + Skins.m.length-4) {
		document.getElementById("options").innerHTML += "Knight";
	}
	document.getElementById("options").innerHTML += '<div class="option" id="option'+i+'"></div>';
	document.getElementById("option"+i).innerHTML = '<div class="image" id="image'+i+'"></div><div class="name" id="name'+i+'"></div><div class="projectile" id="projectile'+i+'"></div>';
	document.getElementById("image"+i).style.backgroundImage = 'url("../selection/assets/'+array[i].class+array[i].id+'/f.png")';
	document.getElementById("image"+i).style.right = 20 - array[i].headAdjust.x + "px";
	document.getElementById("image"+i).style.height = 60 + array[i].headAdjust.y + "px";
	document.getElementById("image"+i).style.bottom = 3 + array[i].headAdjust.y + "px";
	document.getElementById("name"+i).innerHTML = array[i].name;
	document.getElementById("projectile"+i).style.backgroundImage = "url('../assets/projectiles/"+array[i].projectile+".png')";
	if (array[i].cursor !== "crosshair") {
		document.getElementById("option"+i).setAttribute("style","cursor: " + "url('../assets/cursors/" + array[i].cursor + ".png') " + array[i].cursorPosition.x + " " + array[i].cursorPosition.y + ", auto;");
	}
	if (User.skins[array[i].class].includes(array[i].id)) {
		document.getElementById("option"+i).style.borderColor = "darkgreen";
	}
	if (array[i].gender === "m") {
		document.getElementById("option"+i).style.backgroundColor = "#C4D5F3";
	}
	else {
		document.getElementById("option"+i).style.backgroundColor = "#D2C1F0";
	}
}
let skin = array[0];
let num = 0;
let face = ["f", "r", "b", "l"];

for (let i = 0; i < array.length; i++) {
	document.getElementById("option"+i).onclick = function () {
		skin = array[i];
		display();
	}
}

document.getElementById("total").innerHTML = User.achievementPoints.total;
document.getElementById("unclaimed").innerHTML = User.achievementPoints.unclaimed;

function display () {
	document.getElementById("skin").src = "../selection/assets/"+skin.class+skin.id+"/"+face[num]+".png";
	document.getElementById("skin").hidden = false;
	if (num === 0) {
		document.getElementById("skin").style.left = window.innerWidth/2-document.getElementById("skin").offsetWidth/2+parseInt(document.getElementById("skin").width)/skin.position.x+"px";
	}
	else if (num === 1) {
		document.getElementById("skin").style.left = window.innerWidth/2-document.getElementById("skin").offsetWidth/2-parseInt(document.getElementById("skin").width)/skin.position.y+"px";
	}
	else if (num === 2) {
		document.getElementById("skin").style.left = window.innerWidth/2-document.getElementById("skin").offsetWidth/2-parseInt(document.getElementById("skin").width)/skin.position.x+"px";
	}
	else if (num === 3) {
		document.getElementById("skin").style.left = window.innerWidth/2-document.getElementById("skin").offsetWidth/2+parseInt(document.getElementById("skin").width)/skin.position.y+"px";
	}
	if (User.skins[skin.class].includes(skin.id)) {
		document.getElementById("buy").hidden = true;
	}
	else {
		document.getElementById("buy").hidden = false;
	}
}

display();

document.getElementById("left").onclick = function () {
	if (num > 0) {
		num--;
	}
	else {
		num = 3;
	}
	display();
}

document.getElementById("right").onclick = function () {
	if (num < 3) {
		num++;
	}
	else {
		num = 0;
	}
	display();
}

document.getElementById("buy").onclick = function () {
	if (User.achievementPoints.unclaimed >= 25) {
		document.getElementById("buy").style.backgroundColor = "#bb9933";
		setTimeout(function () {
			document.getElementById("buy").style.backgroundColor = "var(--bottom)";
		},200);
		User.achievementPoints.unclaimed -= 25;
		User.skins[skin.class].push(skin.id);
		User.skinPurchased = true;
		document.getElementById("unclaimed").innerHTML = User.achievementPoints.unclaimed;
		if (localStorage.getItem("accept") === "true") {
			localStorage.setItem("user", JSON.stringify(User));
		}
	}
	else {
		document.getElementById("buy").style.borderColor = "red";
		setTimeout(function () {
			document.getElementById("buy").style.borderColor = "var(--border)";
		},200);
	}
}

let width = window.innerWidth;
let height = window.innerHeight;

function checkChange () {
	if (width !== window.innerWidth || height !== window.innerHeight) {
		width = window.innerWidth;
		height = window.innerHeight;
		display();
	}
	window.requestAnimationFrame(checkChange);
}

checkChange();
