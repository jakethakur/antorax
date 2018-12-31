//
// Asset loader
// https://developer.mozilla.org/en-US/docs/Games/Techniques/Tilemaps
//

let Loader = {
    images: {}
};

Loader.loadImage = function (key, src) { // key = image name; src = image source
	let d; // where promise is saved
	if (!(key in this.images)) { // check if image has already been loaded in
	    let img = new Image();

	    d = new Promise(function (resolve, reject) {
	        img.onload = function () {
	            this.images[key] = img;
	            resolve(img);
	        }.bind(this);

	        img.onerror = function () {
	            reject('Could not load image: ' + src);
	        };
	    }.bind(this));

	    img.src = src;
	}
	else {
		// image has already been loaded in
		d = new Promise(function (resolve, reject) {
			// return a promise that resolves instantly
			resolve('image already loaded');
		});
	}
	// return the promise
	return d;
};

Loader.getImage = function (key) {
	if (key in this.images) {
		return this.images[key];
	}
	else {
		console.error("Image " + key + " could not be loaded. Is it misspelt or not already loaded in?");
		return null;
	}
};

Loader.wipeImages = function (exceptions) {
	//this.images = {}; // inefficient - wipes player from object
	
	// wipe all images from images object (apart from exceptions)
	for (var key in this.images) {
		if (this.images.hasOwnProperty(key) && !exceptions.includes(key)) {
			delete this.images[key];
		}
	}
};

//
// Misc functions
//

// second parameter optional - rounds by default to 1dp
function Round (number, dp) {
    if (dp === undefined) {
		dp = 1; // 1 dp default
    }
		
	number *= Math.pow(10, dp);
	
	number = Math.floor(number);
	
	number /= Math.pow(10, dp);
	
	return number;
}

function IsContainedInArray (subArray, largeArray) {
	for(let i = 0; i < subArray.length; i++) {
		// if an element from subArray can't be found in largeArray
		if (largeArray.indexOf(subArray[i]) === -1) {
			return false;
		}
	}
	return true;
}

// random integer between minimum and maximum (inclusive)
function Random (minimum, maximum) {
    return Math.floor((Math.random() * (maximum - minimum + 1)) + minimum);
}

// get date in format ddmmyyyy
function GetFullDate () {
    let d = new Date();
    let dateString = "";
    // day
    let mem = d.getDate().toString();
    if (mem.length !== 2) {
        mem = "0" + mem;
    }
    dateString += mem;
    // month
    mem = (d.getMonth()+1).toString();
    if (mem.length !== 2) {
        mem = "0" + mem;
    }
    dateString += mem;
    // year
    dateString += d.getFullYear().toString();
    return dateString;
}

// get date and time in format yyyymmddhhmmss
function GetFullDateTime () {
    let d = new Date();
    let dateString = "";
    // year
    dateString += d.getFullYear().toString();
    // month
    let mem = (d.getMonth()+1).toString();
    if (mem.length !== 2) {
        mem = "0" + mem;
    }
    dateString += mem;
    // day
    mem = d.getDate().toString();
    if (mem.length !== 2) {
        mem = "0" + mem;
    }
    dateString += mem;
	// hour
	mem = d.getHours().toString();
	if (mem.length !== 2) {
		mem = "0" + mem;
	}
    dateString += mem;
	// minute
	mem = d.getMinutes().toString();
	if (mem.length !== 2) {
		mem = "0" + mem;
	}
    dateString += mem;
	// second
	mem = d.getSeconds().toString();
	if (mem.length !== 2) {
		mem = "0" + mem;
	}
    dateString += mem;
    return dateString;
}

function GetFullDateString () {
	let date = GetFullDate();
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",];
	return date.substring(0,2) + " " + months[parseInt(date.substring(2,4))-1] + " " + date.substring(4);
}

// save an item to local storage
function SaveItem (name, value) {
	if (localStorage.getItem("accept") === "true") { // check the player has accepted local storage
		localStorage.setItem(name, value);
	}
}

// convert number to roman numerals
// thanks to https://stackoverflow.com/a/32851198/9713957
function Romanize (num) {
	let lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
	for (i in lookup) {
		while (num >= lookup[i]) {
			roman += i;
			num -= lookup[i];
		}
	}
	return roman;
}

function ToCamelCase (str) {
	let array = str.split(" ");
	let camelCase = "";
	for (let i = 0; i < array.length; i++) {
		camelCase += array[i].charAt(0).toUpperCase() + array[i].slice(1);
	}
	return camelCase.charAt(0).toLowerCase() + camelCase.slice(1);
}

function FromCamelCase (str) {
	return str.charAt(0).toUpperCase() + str.slice(1).replace( /([A-Z])/g, " $1" );
}

// random number between min and max, biased around certain value (bias)
// influence is how much influence on the random number this should have (should normally be set to 1)
// thanks to https://stackoverflow.com/a/29325222/9713957
function BiasedRandom (min, max, bias, influence) {
    let rnd = Math.random() * (max - min) + min,   // random in range
        mix = Math.random() * influence;           // random mixer
    return rnd * (1 - mix) + bias * mix;           // mix full range and bias
}

// convert to radians
function ToRadians (degrees) {
  return degrees * (Math.PI / 180);
}

// convert to degrees
function ToDegrees (radians) {
  return radians * (180 / Math.PI);
}

// checks if a click event was a right click
// thanks to https://stackoverflow.com/a/4235486/9713957
function CheckRightClick (e) {
    let rightclick;
    if (e.which) {
		rightclick = (e.which == 3);
	}
    else if (e.button) {
		rightclick = (e.button == 2);
	}
    return(rightclick); // true or false, you can trap right click here by if comparison
}

// thanks to https://stackoverflow.com/a/4351575
function ExecuteFunctionByName (functionName, context, args) {
	let namespaces = functionName.split("."); // array of function namespaces
	let func = namespaces.pop(); // set last function namespace
	namespaces.forEach(namespace => {
		context = context[namespace];
	});
	// call function and return its return
	//return context[func](...args);
	return context[func].apply(context, args); // context[func] = function to be called; context = this in function; args = array of function parameters
}

// ensure that value has a + or - sign before it
// the returned value is a string (even though the inputted value is normally an int)
function NumberSign (value) {
	if (value >= 0) {
		return "+" + value;
	}
	else {
		// negative; no reason to add sign (already has)
		return value;
	}
}

// returns a deep clone of the object
// this is the fastest way to do it in general - see https://stackoverflow.com/a/5344074/9713957
function DeepCloneObject (obj) {
	return JSON.parse(JSON.stringify(obj));
}
