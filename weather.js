let Weather = {
	snow: {
		gravity: 40, // down movement per second
		windMultiplier: 0.5, // multiplied with wind intensity
	},
	rain: {
		gravity: 200,
		windMultiplier: 0.2,
	},
};

// called by Game.init
Weather.init = function () {
	// canvas
	this.canvas = document.getElementById("weather");
    this.ctx = this.canvas.getContext('2d');
	
	// populate particleArray
	this.particleArray = []; // array of precipitation particles
	this.update(); // includes chooshing weather and populating particleArray
}

// called by Game.loadArea
Weather.chooseWeather = function (areaName) {
	let oldWeatherType = this.weatherType; // for checking if weather has changed
	
	if (Areas[areaName].weather !== undefined) {
		// static weather for area
		this.weatherType = Areas[areaName].weather;
	}
	else if ((this.dateValue / 40) % 6 < 1) {
		if (Areas[areaName].isIcy !== undefined && Areas[areaName].isIcy()) {
			// icy area - snow instead of rain
			this.weatherType = "snow";
		}
		else {
			// rain
			this.weatherType = "rain";
		}
	}
	else {
		this.weatherType = "clear";
	}
	
	if (this.weatherType !== oldWeatherType) {
		// weather has been updated
		
		// update conditional stats
		Dom.inventory.conditionalStats();
	}
}

// resets weather particle distribution
// called on area change or non-gradual teleport (as the weather is distributed oddly due to these)
Weather.reset = function () {
	this.particleArray = []; // Weather not this because sometimes called by setTimeout
	
	// render this change (because otherwise render might not be called due to player being indoors)
	this.render(); // TBD possibly this shouldn't be called until Game.render?
}


// update random weather seed (called every tick)
Weather.updateSeed = function () {
	this.date = new Date();
    this.dateValue = 0;
	
	this.dateValue += this.date.getFullYear()*25;
	this.dateValue += this.date.getMonth()*25;
	this.dateValue += this.date.getDate()*25;
	this.dateValue += this.date.getHours()*10;
	this.dateValue += this.date.getMinutes();
	this.dateValue += this.date.getSeconds()/100;
}

Weather.updateIntensity = function () {
	// measure for number of weather particles
	this.intensity = (this.dateValue*6) % 500 + 100; // value from 100 to 600
}

Weather.updateWind = function () {
	this.windDirection = ToRadians((this.dateValue * 10) % 360);
	this.windIntensity = this.dateValue % 100; // value from 0 to 100
	// sin/cos of windDirection * windIntensity * weather windMultiplier = distance moved due to wind
	// currently wind only affects x movement
}

// move weather particles due to camera move
// called by Camera.update
Weather.heroMove = function (screenMovedX, screenMovedY) {
	for (let i = 0; i < this.particleArray.length; i++) { // iterate through particle array
		let particle = this.particleArray[i];
		particle.x -= screenMovedX;
		particle.y -= screenMovedY;
		// check for particle off screen (x)
		if (particle.x > Dom.canvas.width + 10) {
			particle.x = -10;
			particle.y = Random(0, Dom.canvas.height); // simulates it being a new particle
		}
		else if (particle.x < -10) {
			particle.x = Dom.canvas.width + 10;
			particle.y = Random(0, Dom.canvas.height);
		}
		// check for particle off screen (y)
		if (particle.y > Dom.canvas.height + 10) {
			particle.y = -10;
			particle.x = Random(0, Dom.canvas.width);
		}
		else if (particle.y < -10) {
			particle.y = Dom.canvas.height + 10;
			particle.x = Random(0, Dom.canvas.width);
		}
	}
}

// update weather
// delta is fraction of second (where 1 is 1 second)
// called by Weather.init and Game when there is at least 1 particle
Weather.update = function (delta) {
	Weather.updateVariables();
	
	if (this.weatherType !== "clear") { // no more weather particles should be made if it is clear
		Weather.updateParticleNumber();
	}
		
	if (delta !== undefined) { // this function is also called by Weather.init with no delta
		Weather.moveParticles(delta);
	}
}

// update weather random variables
Weather.updateVariables = function () {
	// update random seed variable
	this.updateSeed();
	// weather type
	this.chooseWeather(Game.areaName);
	// weather conditions
	if (this.weatherType !== "clear") {
		this.updateIntensity();
	}
	this.updateWind();
}

// update the number of particles by adding/removing them
Weather.updateParticleNumber = function () {
	// add/remove weather particles if intensity has changed
	// AND if weather is not clear (though this is still called so existing particles have a chance to disappear first)
	if (this.particleArray.length < Math.round(this.intensity)) {
		// particles need to be added
		for (let i = 0; i < Math.round(this.intensity) - this.particleArray.length; i++) {
			// add a particle, ensuring even distribution of them
			this.particleArray.push({
				x: Random(0, Dom.canvas.width),
				y: Random(0, Dom.canvas.height),
				speedMultiplier: Random(6, 14) / 10, // all particles have their own speed multiplier as well
				type: this.weatherType,
			});
		}
	}
	else if (this.particleArray.length > Math.round(this.intensity)) {
		// particles need to be removed
		this.particleArray.splice(0, this.particleArray.length - Math.round(this.intensity));
	}
}

// move weather particles
Weather.moveParticles = function (delta) {
	for (let i = 0; i < this.particleArray.length; i++) { // iterate through particle array
		let particle = this.particleArray[i];
		
		// gravity
		particle.y += this[particle.type].gravity * particle.speedMultiplier * delta;
		
		// wind (currently just affects x)
		//particle.y += Math.sin(this.windDirection) * (this.windIntensity * this[particle.type].windMultiplier) * particle.speedMultiplier * delta;
		particle.x += Math.cos(this.windDirection) * (this.windIntensity * this[particle.type].windMultiplier) * particle.speedMultiplier * delta;
		
		// check for off screen particle
		if (particle.y > Dom.canvas.height + 10 || particle.x < -10 || particle.x > Dom.canvas.width + 10) {
			// particle off screen
			if (this.weatherType !== "clear") {
				// re-add the particle
				particle.y = -10;
				particle.x = Random(0, Dom.canvas.width);
			}
			else {
				// remove the particle completely
				this.particleArray.splice(i, 1);
				i--;
			}
		}
	}
}

// render weather particles
Weather.render = function () {
	this.ctx.clearRect(0, 0, Dom.canvas.width, Dom.canvas.height);
	this.ctx.fillStyle="#FFFFFF";
	for (let i = 0; i < this.particleArray.length; i++) { // iterate through particle array
		let particle = this.particleArray[i];
		if (particle.type === "snow") {
			this.ctx.fillStyle="#FFFFFF";
			this.ctx.fillRect(particle.x, particle.y , 2, 2);
		}
		else if (particle.type === "rain") {
			this.ctx.fillStyle="#b0d4e5";
			this.ctx.fillRect(particle.x, particle.y , 1, 12);
		}
	}
}
