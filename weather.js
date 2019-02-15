let Weather = {
	snow: {
		gravity: 50, // down movement per second
		windMultiplier: 0.4, // multiplied with wind intensity
	},
	rain: {
		gravity: 200,
		windMultiplier: 0.2,
	},
};

// called by Game.init
Weather.init = function () {
	this.particleArray = []; // array of precipitation particles
	// updateVariables called by loadArea to populate particleArray and decide on weather
	
	// set a timeout for updating weather and time (for efficiency)
	// every 10s
	setInterval(function () {
		Weather.updateVariables();
		Event.updateTime(Game.areaName);
		Game.renderDayNight();
		map.setDayNightTiles();
	}, 10000);
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
	// measure for number of weather particles per 36000 pixels squared (600*600 canvas)
	// intensity loops forward and back
	this.intensity = (this.dateValue*3) % 260 + 20; // between 20 and 280
	if (this.intensity > 150) { // intensity is looping backwards
		this.intensity = 300 - this.intensity; // now between 20 and 150
	}
	// final intensity value is from 20 to 150
	
	// scale it up based on canvas size
	this.intensity *= (Game.canvasArea / 36000);
}

Weather.updateWind = function () {
	this.windDirection = ToRadians((this.dateValue * 10) % 360); // 0 = to the right
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
		// check for particle off screen
		this.respawnParticle(particle);
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
		// add or remove weather particles
		this.updateParticleNumber();
	}
	this.updateWind();
}

// update the number of particles by adding/removing them
// called by Weather.updateVariables (if the weather is not clear)
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
// called by Game.update
// delta is fraction of second (where 1 is 1 second)
Weather.moveParticles = function (delta) {
	for (let i = 0; i < this.particleArray.length; i++) { // iterate through particle array
		let particle = this.particleArray[i];
		
		// gravity
		particle.y += this[particle.type].gravity * particle.speedMultiplier * delta;
		
		// wind (currently just affects x)
		//particle.y += Math.sin(this.windDirection) * (this.windIntensity * this[particle.type].windMultiplier) * particle.speedMultiplier * delta;
		particle.x += Math.cos(this.windDirection) * (this.windIntensity * this[particle.type].windMultiplier) * particle.speedMultiplier * delta;
		
		// check for off screen particle
		this.respawnParticle(particle)
	}
}

// reset the position of an off screen particle
Weather.respawnParticle = function (particle) {
	// set off screen variables
	let top = -10 + Game.viewportOffsetY;
	let bottom = Dom.canvas.height + 10 - Game.viewportOffsetY;
	let left = -10 + Game.viewportOffsetX;
	let right = Dom.canvas.width + 10 - Game.viewportOffsetX;
	// check for particle off screen (x)
	if (particle.x > right) {
		particle.x = left;
		particle.y = Random(top, bottom); // simulates it being a new particle
	}
	else if (particle.x < left) {
		particle.x = right;
		particle.y = Random(top, bottom);
	}
	// check for particle off screen (y)
	if (particle.y > bottom) {
		particle.x = Random(left, right);
		particle.y = top;
	}
	else if (particle.y < top) {
		particle.x = Random(left, right);
		particle.y = bottom;
	}
}

// render weather particles onto Game canvas
Weather.render = function () {
	Game.ctx.fillStyle="#FFFFFF";
	for (let i = 0; i < this.particleArray.length; i++) { // iterate through particle array
		let particle = this.particleArray[i];
		
		if (particle.type === "snow") {
			Game.ctx.fillStyle = "#FFFFFF";
			Game.ctx.fillRect(particle.x, particle.y , 2, 2);
		}
		else if (particle.type === "rain") {
			Game.ctx.fillStyle = "#b0d4e5";
			Game.ctx.fillRect(particle.x, particle.y , 1, 12);
		}
	}
}
