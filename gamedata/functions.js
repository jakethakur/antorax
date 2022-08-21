//
// Asset loader
// https://developer.mozilla.org/en-US/docs/Games/Techniques/Tilemaps
//

let Loader = {
    images: {}
};

// load an image to the loader
// key = image name; src = image source
// deleteIf = optional function that returns true or false depending on whether image can be deleted on area change
// if deleteIf is set to false, it is set to function(){return false} thus never deletes the image
// flipMode is set to "horizontal" or "vertical" to flip the image as well as loading it
Loader.loadImage = function (key, src, deleteIf, flipMode) {
	let d; // where promise is saved
	if (!(key in this.images)) { // check if image has already been loaded in
		if (deleteIf === false) {
			// false creates function to never delete image
			deleteIf = function(){return false;}
		}

		// normal image laod in
	    let img = new Image();

	    d = new Promise(function (resolve, reject) {
	        img.onload = function () {
				// image loaded
				if (flipMode !== undefined && location.hostname !== '' && location.hostname !== 'localhost') {
					// also flip image
					// (provided you are not on a local host - otherwise flipped image cannot be loaded due to CORS restraints, see github wiki)
					FlipImage(img, flipMode).then(function (flippedImg) {
						this.images[key] = {
							img: flippedImg,
							src: src,
							flipped: flipMode,
							deleteIf: deleteIf
						};
			            resolve(flippedImg);
					}.bind(this));
				}
				else {
					this.images[key] = {
						img: img,
						src: src,
						deleteIf: deleteIf
					};
		            resolve(img);
				}
	        }.bind(this);

	        img.onerror = function () {
	            reject("Could not load image: " + src);
	        };
	    }.bind(this));

	    img.src = src;
	}
	else {
		// image has already been loaded in
		d = new Promise(function (resolve, reject) {
			// warn the user, since it is possible this is an unintended side effect (two different images using same key name)
			console.warn("An image was loaded under a key name (" + key + ") that already exists in loader. Please tell Jake.")
			// return a promise that resolves instantly
			resolve("image already loaded");
		});
	}
	// return the promise
	return d;
};

Loader.getImage = function (key) {
	if (key in this.images) {
		return this.images[key].img;
	}
	else {
		console.error("Image " + key + " could not be loaded. Is it misspelt or not already loaded in?");
		return null;
	}
};

// get whole object of image at key (contains source, flipped, etc.)
Loader.getImageInfo = function (key) {
	if (key in this.images) {
		return this.images[key];
	}
	else {
		console.error("Image " + key + " could not be loaded. Is it misspelt or not already loaded in?");
		return null;
	}
};

Loader.wipeImages = function () {
	// wipe all images from images object (apart from exceptions)
	// exceptions are documented in .deleteIf as a function (true = can delete)
	for (let key in this.images) {
		if (this.images.hasOwnProperty(key) &&
		(this.images[key].deleteIf === undefined || this.images[key].deleteIf())) {
			// image can de deleted
			delete this.images[key];
		}
	}
};

// pass in  image being flipped
// mode = "horizontal" (y flip) or "vertical" (x flip)
// returns a promise, where .then can be used to access the flipped image as the parameter
function FlipImage (img, mode) {
	// get image data of image
	let canvas = document.createElement("canvas");
	let ctx = canvas.getContext("2d");
	canvas.width = img.width;
	canvas.height = img.height;
	ctx.drawImage(img, 0, 0);
	let imgData = ctx.getImageData(0, 0, img.width, img.height);

	let flippedImg = new ImageData(img.width, img.height);

	// (1 pixel = 4 bits due to rgba values)
   	let numberOfPixels = imgData.data.length / 4;

   	for (let pixel = 0 ; pixel < numberOfPixels ; pixel++) {
		// get x and y of pixel in for loop
		let x = pixel % img.width;
		let y = Math.floor(pixel / img.width);

		// find pixel number of new flipped pixel
		let xFlip, yFlip;
		if (mode === "vertical") {
			// flip x only
			xFlip = img.width - 1 - x;
			yFlip = y;
		}
		else if (mode === "horizontal") {
			// flip y only
			xFlip = x;
			yFlip = img.height - 1 - y;
		}
		else {
			console.error("Unknown mode for flip of image.");
			return;
		}
		let newPixel = yFlip * img.width + xFlip;

		// convert pixel number to pixel index
   	   	let pixelIndex = 4 * pixel;
   	   	let flipIndex = 4 * newPixel;

		// set pixel indices (rgba)
   	   	flippedImg.data[flipIndex + 0] = imgData.data[pixelIndex + 0];
   	   	flippedImg.data[flipIndex + 1] = imgData.data[pixelIndex + 1];
   	   	flippedImg.data[flipIndex + 2] = imgData.data[pixelIndex + 2];
   	   	flippedImg.data[flipIndex + 3] = imgData.data[pixelIndex + 3];
   	}

	// convert to image that can be drawn on canvas
	// returns a promise, where .then can be used to access the image as the function parameter
	return createImageBitmap(flippedImg);
}

// load an object of any images (same format as in areadata)
// images = object of images like those found in areadata
// deleteIf = function that deletes the images from Loader if true (set to undefined for delete on area change)
// returns an array of the promises of the loading images (in case that is necessary)
Loader.loadMultipleImages = function (images, deleteIf) {
	let imageInformation = this.prepareImageInformation(images);
	let names = imageInformation.names; // image key names
	let addresses = imageInformation.addresses;
	let flip = imageInformation.flip; // whether the iamage is flipped or not

	let toLoad = [];

	for (let i = 0; i < names.length; i++) {
		if (addresses[i] !== undefined) { // it might be undefined if the event for the character is not active
			toLoad.push(this.loadImage(names[i], addresses[i], deleteIf, flip[i]));
			// no deleteIf since these images are associated with the area
		}
	}

    return toLoad;
};

// converts image object to separate array variables that can be used by Loader.loadMultipleImages
// images = object where keys are image keys in loader, and value is an object of image addresses
// image addresses object contains a "normal" property for normal image address...
// ...and can contain event properties (e.g. "samhain") for event image addresses...
// ...also can contain "flip" property containing either "vertical" or "horizontal" to load a flipped image
Loader.prepareImageInformation = function (images) {
	let imageInformation = {};

	imageInformation.names = Object.keys(images);

	imageInformation.addresses = [];
	imageInformation.flip = [];

	let imageAddresses = Object.values(images);
	for (let i = 0; i < imageAddresses.length; i++) {
		let image = imageAddresses[i];

		if (Event.event === "Christmas" && image.christmas !== undefined) {
			// christmas images
			imageInformation.addresses.push(image.christmas);
		}
		else if (Event.event === "Samhain" && image.samhain !== undefined) {
			// samhain images
			imageInformation.addresses.push(image.samhain);
		}
		else {
			imageInformation.addresses.push(image.normal); // if this is undefined, the image is not loaded in by Game.load
		}

		imageInformation.flip.push(image.flip); // whether the image should be flipped by loadImage
	}

	return imageInformation;
}

//
// Keyboard handler
//

var Keyboard = {};

// init keyboard listening to keys
Keyboard.init = function () {
    window.addEventListener("keydown", this.onKeyDown.bind(this));
    window.addEventListener("keyup", this.onKeyUp.bind(this));

	// add variables for keys to be added
	this.keys = []; // array of key objects (with key, downFunction, and upFunction)
}

// called to start listening to a key
// key is the same as event.key (the key name)
// downFunction and upFucntion are passed in the event as a parameter
// no function = undefined parameter for that function
Keyboard.listenForKey = function (key, downFunction, upFunction) {
	this.keys.push({
		key: key,
		downFunction: downFunction,
		upFunction: upFunction,
	});
}

// calls listenForKey but autogenerates the functions
// sets a variable to true when the key is down and false when it is up
// the variable is at the address context[varName]
Keyboard.listenForKeyWithVariable = function (key, context, varName) {
	let downFunction = CreateFunction(context, varName, true);
	let upFunction = CreateFunction(context, varName, false);
	this.listenForKey(key, downFunction, upFunction)
}

// stop listening to the key parameter
Keyboard.unlistenKey = function (key) {
	for (let i = 0; i < this.keys.length; i++) {
		if (this.keys[i].key.toUpperCase() === key) {
			this.keys.splice(i, 1);
			return;
		}
	}
	console.warn("Key " + key + " was not already being listened to.");
}

// called when a key is pressed
Keyboard.onKeyDown = function (ev) {
	// not a text input and no text is selected (CTRL+C)
	if ((ev.target.tagName !== "INPUT" || ev.target.type !== "text") && window.getSelection().type !== "Range") {
		// if a hotkey is not being changed
		if (Dom.settings.hotkey === undefined) {
			for (let i = 0; i < this.keys.length; i++) {
				if (ev.key.toUpperCase() === this.keys[i].key) {
					// key that is being listened to has been pressed
					ev.preventDefault();
					if (this.keys[i].downFunction !== undefined) {
						this.keys[i].downFunction(ev);
					}
					break;
				}
			}
		}
		else{
			ev.preventDefault();
		}
	}
}

// called when a key is released
Keyboard.onKeyUp = function (ev) {
	// not a text input and no text is selected (CTRL+C)
	if ((ev.target.tagName !== "INPUT" || ev.target.type !== "text") && window.getSelection().type !== "Range") {
		// if a hotkey is being changed
		if (Dom.settings.hotkey !== undefined) {
			ev.preventDefault();
			Dom.settings.hotkeys(ev);
		}
		// act normally
		else {
			for (let i = 0; i < this.keys.length; i++) {
				if (ev.key.toUpperCase() === this.keys[i].key) {
					// key that is being listened to has been released
					ev.preventDefault();
					if (this.keys[i].upFunction !== undefined) {
						this.keys[i].upFunction(ev);
					}
					break;
				}
			}
		}
	}
	else if (ev.key === "Enter") {
		Dom.chat.input(ev.target.id);
	}
	else if (ev.key === "Escape") {
		ev.target.blur();
	}
}

// library of functions to be called by keys
Keyboard.downFunctions = {
    SHIFT: function () {
        setTimeout (function () {
			Game.keysDown.SHIFT = true;
            Game.secondary.render();
            Dom.inventory.hideHotbar(true);
            Dom.elements.bookmarks.style.display = "none";
			if (Dom.chat.displayOpacity.length > 0 || Dom.elements.canvasChatInput === document.activeElement) {
				Dom.elements.canvasChatInput.style.zIndex = 0;
				Dom.elements.canvasSend.style.zIndex = 0;
				Dom.elements.canvasChatInput.style.visibility = "hidden";
				Dom.elements.canvasSend.style.visibility = "hidden";
			}
			Dom.elements.chat.style.visibility = "hidden";
			Dom.chat.hideInput = true;
        }, 1);
    },
};
Keyboard.upFunctions = {
    SHIFT: function () {
        setTimeout (function () {
			Game.keysDown.SHIFT = false;
            Game.secondary.render();
            Dom.inventory.hideHotbar();
            Dom.elements.bookmarks.style.display = "";
			if (Dom.chat.displayOpacity.length > 0 || Dom.elements.canvasChatInput === document.activeElement) {
				Dom.elements.canvasChatInput.style.zIndex = 10;
				Dom.elements.canvasSend.style.zIndex = 10;
				Dom.elements.canvasChatInput.style.visibility = "visible";
				Dom.elements.canvasSend.style.visibility = "visible";
			}
			Dom.elements.chat.style.visibility = "visible";
			Dom.chat.hideInput = false;
        }, 1);
    },
	TALK: function () { // t
		Dom.elements.canvasChatInput.style.zIndex = 10;
		Dom.elements.canvasSend.style.zIndex = 10;
		Dom.elements.canvasChatInput.style.visibility = "visible";
		Dom.elements.canvasSend.style.visibility = "visible";
		Dom.elements.canvasChatInput.style.opacity = 0.6;
		Dom.elements.canvasChatInput.select();
	}
}

// experimental tilting for mobile (called by event listener)
function MobileTilt (event) {
    let x;
    let y;
    if (window.innerHeight <= window.innerWidth) {
        x = event.beta;
        y = event.gamma;
    }
    else {
        x = event.gamma;
        y = event.beta;
    }

	// 10 = tolerance
    if (x > 10 && x !== null) {
        Game.keysDown.RIGHT = true;
        Game.keysDown.LEFT = false;
    }
    else if (x < -10 && x !== null) {
        Game.keysDown.LEFT = true;
        Game.keysDown.RIGHT = false;
    }
    else {
        Game.keysDown.LEFT = false;
        Game.keysDown.RIGHT = false;
    }

    if (y > 10 && y !== null) {
        Game.keysDown.UP = true;
        Game.keysDown.DOWN = false;
    }
    else if (y < -10 && y !== null) {
        Game.keysDown.DOWN = true;
        Game.keysDown.UP = false;
    }
    else {
        Game.keysDown.UP = false;
        Game.keysDown.DOWN = false;
    }
}

//
// Misc functions
//

// returns a function that sets a variable to the value parameter
// the variable is at the address context[varName]
function CreateFunction (context, varName, value) {
	return function () {
		context[varName] = value;
	};
}

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

// get date in format dd/mm/yyyy
function GetFullDateDisplay () {
	let fullDate = GetFullDate();
	return fullDate.substring(6)+"/"+fullDate.substring(4,6)+"/"+fullDate.substring(0,4);
}

// get date in format yyyymmdd
function GetFullDate () {
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
	return date.substring(6) + " " + months[parseInt(date.substring(4,6))-1] + " " + date.substring(0,4);
}

// save an item to local storage
/*function SaveItem (name, value) {
	if (localStorage.getItem("accept") === "true") { // check the player has accepted local storage
		localStorage.setItem(name, value);
	}
}*/

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

function ToObjectKey (str) {
	return ToCamelCase(str).replace(/[^a-zA-Z]/g, "");
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
	if (degrees !== undefined) {
		return degrees * (Math.PI / 180);
	}
	return undefined;
}

// convert to degrees
function ToDegrees (radians) {
	if (radians !== undefined) {
		return radians * (180 / Math.PI);
	}
	return undefined;
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

// increases a variable (e.g. quest variable) even if it is undefined
// undefined is seen as 0
// amount is optional (specifies a value other than 1)
function Increment (variable, amount) {
	if (amount === undefined) {
		amount = 1; // default
	}

	if (variable === undefined) {
		variable = amount;
	}
	else {
		variable += amount;
	}

	return variable
}

// displays time between start and end using the most appropriate unit (in words)
// e.g. for item cooldown
// parameters are of format yyyymmddhhmmss
function CalculateTime (start, end) {
	let time = (parseInt(end.substring(0,4))-parseInt(start.substring(0,4))) * 31536000;
	time += (parseInt(end.substring(4,6))-parseInt(start.substring(4,6))) * 2592000;
	time += (parseInt(end.substring(6,8))-parseInt(start.substring(6,8))) * 86400;
	time += (parseInt(end.substring(8,10))-parseInt(start.substring(8,10))) * 3600;
	time += (parseInt(end.substring(10,12))-parseInt(start.substring(10,12))) * 60;
	time += parseInt(end.substring(12))-parseInt(start.substring(12));
	let answer = "";
	if (time >= 31536000) {
		answer = Math.floor(time/31536000)+" Year";
	}
	else if (time >= 2592000) {
		answer = Math.floor(time/2592000)+" Month";
	}
	else if (time >= 86400) {
		answer = Math.floor(time/86400)+" Day";
	}
	else if (time >= 3600) {
		answer = Math.floor(time/3600)+" Hour";
	}
	else if (time >= 60) {
		answer = Math.floor(time/60)+" Minute";
	}
	else {
		answer = time+" Second";
	}
	if (answer.substring(0,2) !== "1 ") {
		answer += "s";
	}
	return answer;
}

// gets the current week of the year
// thanks to https://stackoverflow.com/a/27125580/9713957
function GetWeek() {
	let now = new Date();
	let onejan = new Date(now.getFullYear(), 0, 1);
	let week = Math.ceil( (((now - onejan) / 86400000) + onejan.getDay() + 1) / 7 );
	return week;
}

// generate random seed based on the time (so it is the same for everyone)
// parameters are based on weight applied to each time period
function GenerateSeed(yearWeight, monthWeight, dateWeight, hoursWeight, minutesWeight, secondsWeight) {
	let date = new Date();
	let seed = 0;

	seed += date.getFullYear()*yearWeight;
	seed += date.getMonth()*monthWeight;
	seed += date.getDate()*dateWeight;
	seed += date.getHours()*hoursWeight;
	seed += date.getMinutes()*minutesWeight;
	seed += date.getSeconds()*secondsWeight;

	return seed;
}

// convert ms to mm:ss format
// 2:22 is used instead of 02:22
function TimeDisplay(ms) {
	let seconds = ms/1000;
	let minutes = Math.floor(seconds/60);
	let secondsRemainder = seconds % 60;
	// ensure length of seconds is 2
	if (String(secondsRemainder).length < 2) {
		secondsRemainder = "0"+secondsRemainder;
	}
	return minutes + ":" + secondsRemainder;
}

// return true if a name is legal (any letter of either case, apostrophe, accents)
// strValue = a string to be validated
function validateName(strValue) {
	let objRegExp = /^[a-zA-Z'\u00C0-\u00ff]+$/;
	if (!objRegExp.test(strValue)) {
		objRegExp = /^$/;
		// return true if it is empty
		return objRegExp.test(strValue);
	}
	else {
		// return true if it is legal
		return true;
	}
}
