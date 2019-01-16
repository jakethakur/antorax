let Weather = {};

// called by Game.init
Weather.init = function () {
	// canvas
	this.canvas = document.getElementById("weather");
    this.ctx = this.canvas.getContext('2d');
	
	// static variables
	this.snow = {
		gravity: 25, // down movement per second
		windMultiplier: 0.15, // multiplied with wind intensity
	};
	// populate particleArray
	this.particleArray = []; // array of precipitation particles
}

// called by Game.loadArea
Weather.chooseWeather = function (areaName) {
	if (Areas[areaName].weather !== undefined) {
		// static weather for area
		this.weatherType = Areas[areaName].weather;
	}
	if (Areas[areaName].isIcy !== undefined && Areas[areaName].isIcy()) {
		// icy area
		this.weatherType = "snow";
	}
	else {
		this.weatherType = "clear";
	}
}

// resets weather particle distribution
// called on area change or non-gradual teleport (as the weather is distributed oddly due to these)
Weather.reset = function () {
	Weather.particleArray = []; // Weather not this because sometimes called by setTimeout
}


// update random weather seed (called every tick)
Weather.updateSeed = function () {
	this.date = new Date();
    this.dateValue = 0;
	
	this.dateValue += this.date.getFullYear();
	this.dateValue += this.date.getMonth()*10;
	this.dateValue += this.date.getDate()*5;
	this.dateValue += this.date.getHours()*10;
	this.dateValue += this.date.getMinutes();
	this.dateValue += this.date.getSeconds()/100;
}

Weather.updateIntensity = function () {
	// measure for number of weather particles
	this.intensity = (this.dateValue/2) % 350; // value from 0 to 350
}

Weather.updateWind = function () {
	this.windDirection = ToRadians((this.dateValue * 10) % 360);
	this.windIntensity = this.dateValue % 100; // value from 0 to 100
	// sin/cos of windDirection * windIntensity * weather windMultiplier = distance moved due to wind
}

// move weather particles due to camera move
// called by Camera.update
Weather.move = function (screenMovedX, screenMovedY) {
	for (let i = 0; i < this.particleArray.length; i++) { // iterate through particle array
		let particle = this.particleArray[i];
		particle.x -= screenMovedX;
		particle.y -= screenMovedY;
		// check for particle off screen (x)
		if (particle.x > 610) {
			particle.x = -10;
			particle.y = Random(0, 600); // simulates it being a new particle
		}
		else if (particle.x < -10) {
			particle.x = 610;
			particle.y = Random(0, 600);
		}
		// check for particle off screen (y)
		if (particle.y > 610) {
			particle.y = -10;
			particle.x = Random(0, 600);
		}
		else if (particle.y < -10) {
			particle.y = 610;
			particle.x = Random(0, 600);
		}
	}
}

// update weather particles
// delta is fraction of second (where 1 is 1 second)
Weather.update = function (delta) {
	// update variables
	this.updateSeed();
	this.updateIntensity();
	this.updateWind();
	
	// add/remove weather particles if intensity has changed
	if (this.particleArray.length < Math.round(this.intensity)) {
		// particles need to be added
		for (let i = 0; i < Math.round(this.intensity) - this.particleArray.length; i++) {
			// add a particle, ensuring even distribution of them
			this.particleArray.push({
				x: Random(0, 600),
				y: Random(0, 600),
				speedMultiplier: Random(6, 14) / 10, // all particles have their own speed multiplier as well
			});
		}
	}
	else if (this.particleArray.length > Math.round(this.intensity)) {
		// particles need to be removed
		this.particleArray.splice(0, this.particleArray.length - Math.round(this.intensity));
	}
	
	// move weather particles
	for (let i = 0; i < this.particleArray.length; i++) { // iterate through particle array
		let particle = this.particleArray[i];
		if (particle.y > 610 || particle.x < -10 || particle.x > 610) {
			// particle off screen
			particle.y = -10;
			particle.x = Random(0, 600);
		}
		particle.y += this[this.weatherType].gravity * particle.speedMultiplier * delta;
		particle.y += Math.sin(this.windDirection) * (this.windIntensity * this[this.weatherType].windMultiplier) * particle.speedMultiplier * delta;
		particle.x += Math.cos(this.windDirection) * (this.windIntensity * this[this.weatherType].windMultiplier) * particle.speedMultiplier * delta;
	}
}

// render weather particles
Weather.render = function () {
	for (let i = 0; i < this.particleArray.length; i++) { // iterate through particle array
		let particle = this.particleArray[i];
		if (this.weatherType === "snow") {
			this.ctx.fillStyle="#FFFFFF";
			this.ctx.fillRect(particle.x, particle.y , 2, 2);
		}
	}
}
