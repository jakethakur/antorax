function Round (number, dp) {
    if(dp === undefined) {
		number *= 10;
    }else{
		number *= dp;
	}
	number = Math.floor(number);
    if(dp === undefined) {
		number /= 10;
    }else{
		number /= dp;
	}
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

function Random (minimum, maximum) {
    return Math.floor((Math.random() * (maximum - minimum + 1)) + minimum);
}

// get date in format ddmmyyyy
function GetFullDate () {
	let d = new Date();
	let dateString = "";
	// day
	let mem = d.getDate();
	if (mem.length !== 2) {
		mem = "0" + mem;
	}
	dateString += mem;
	// month
	mem = d.getMonth()+1;
	if (mem.length !== 2) {
		mem = "0" + mem;
	}
	dateString += mem;
	// year
	dateString += d.getFullYear();
	return dateString;
}

function SaveItem(name, value){
	if(localStorage.getItem("accept") === "true"){
		localStorage.setItem(name, value);
	}
}

function Romanize(num){
  let lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
  for(i in lookup){
    while(num >= lookup[i]){
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
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
    var rightclick;
    if (e.which) {
		rightclick = (e.which == 3);
	}
    else if (e.button) {
		rightclick = (e.button == 2);
	}
    return(rightclick); // true or false, you can trap right click here by if comparison
}