let Weather = {
	particleData: {
		snow: {
			gravity: 70, // down movement per second
			windMultiplier: 0.4, // multiplied with wind intensity
		},
		rain: {
			gravity: 200,
			windMultiplier: 0.2,
		},
		// "additional" particles
		fish: {
			gravity: 300,
			windMultiplier: 0.1,
			chance: 35, // chance that a particle is this one
			removeOnceFallen: true,
		},
	}
};

// called by Game.init
Weather.init = function () {
	this.particleArray = []; // array of precipitation particles
	// updateVariables called by loadArea to populate particleArray and decide on weather

	// set a timeout for updating weather and time (for efficiency)
	// every 10s
	setInterval(function () {
		if (document.getElementById("weatherOn").checked) {
			Weather.updateVariables();
			Event.updateTime(Game.areaName);
			Game.dayNightUpdate();
		}
	}, 10000);
}

// called by Game.loadArea
Weather.chooseWeather = function (areaName) {
	let oldWeatherType = this.weatherType; // for checking if weather has changed

	if (Areas[areaName].weather !== undefined) {
		// static weather for area
		this.weatherType = Areas[areaName].weather;
		this.weatherAdditional = Areas[areaName].weatherAdditional;
	}
	else if (Event.event === "Fish") {
		// fish rain
		this.weatherType = "rain";

		// set the weather after additional image has loaded in
		let p = Loader.loadImage("weatherImage", "./assets/objects/fishRain.png", function () {
			return Event.event !== "Fish"; // delete on area change if event is not fish
		});

		// wait until images have been loaded
		// TBD make this into function?
	    p.then(function (loaded) {
			this.weatherAdditional = "fish";
		}.bind(this))
		.catch(function (err) {
			// error for if the images didn't load
		    console.error("Weather image did not load correctly.", err);
		});
	}
	else if ((this.dateValue / 40) % 7 < 1) {
	//else if (this.date.getSeconds() > 30) { // for testing
		if (Areas[areaName].isIcy !== undefined && Areas[areaName].isIcy()) {
			// icy area - snow instead of rain
			this.weatherType = "snow";
			this.weatherAdditional = undefined;
		}
		else {
			// rain
			this.weatherType = "rain";
			this.weatherAdditional = undefined;
		}
	}
	else {
		this.weatherType = "clear";
		this.weatherAdditional = undefined;
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
	// generate random seed based on the time (so it is the same for everyone)
	// parameters are based on weight applied to each time period
	this.dateValue = GenerateSeed(25, 25, 25, 10, 1, 0.01);
}

Weather.updateIntensity = function () {
	// measure for number of weather particles per 36000 pixels squared (600*600 canvas)
	// intensity loops forward and back
	this.intensity = (this.dateValue % 120) + 20; // between 20 and 140
	if (this.intensity > 80) { // intensity is looping backwards
		this.intensity = 160 - this.intensity; // now between 20 and 80
	}
	// final intensity value is from 20 to 80

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
		let numberOfParticles = this.particleArray.length;
		for (let i = 0; i < Math.round(this.intensity) - numberOfParticles; i++) {
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

// additional particles are often removed after falling once
// called every game update tick to see if an "additional" particle should be added (e.g. a fish)
// called before Weather.moveParticles
Weather.addAdditionalParticles = function () {
	if (typeof this.weatherAdditional !== "undefined"
		&& Random(1, this.particleData[this.weatherAdditional].chance) === 1) {

		this.particleArray.push({
			x: Random(0, Dom.canvas.width),
			y: 0,
			speedMultiplier: Random(6, 14) / 10, // all particles have their own speed multiplier as well
			type: this.weatherAdditional,
		});
	}
}

// move weather particles
// called by Game.update
// delta is fraction of second (where 1 is 1 second)
Weather.moveParticles = function (delta) {
	for (let i = 0; i < this.particleArray.length; i++) { // iterate through particle array
		let particle = this.particleArray[i];

		// gravity
		particle.y += this.particleData[particle.type].gravity * particle.speedMultiplier * delta;

		// wind (currently just affects x)
		//particle.y += Math.sin(this.windDirection) * (this.windIntensity * this.particleData[particle.type].windMultiplier) * particle.speedMultiplier * delta;
		particle.x += Math.cos(this.windDirection) * (this.windIntensity * this.particleData[particle.type].windMultiplier) * particle.speedMultiplier * delta;

		// check for off screen particle
		this.respawnParticle(particle, i);
	}
}

// reset the position of an off screen particle
Weather.respawnParticle = function (particle, index) {
	// set off screen variables
	let top = -10 + Game.viewportOffsetY;
	let bottom = Dom.canvas.height + 10 - Game.viewportOffsetY;
	let left = -10 + Game.viewportOffsetX;
	let right = Dom.canvas.width + 10 - Game.viewportOffsetX;

	let removeParticle = false; // whether particle should be removed (weather now clear)

	// particle always removed instead of being respawned
	let neverRespawnParticle = Weather.particleData[particle.type].removeOnceFallen === true;

	// check for particle off screen (x)
	if (particle.x > right) {
		if (this.weatherType !== "clear" && !neverRespawnParticle) {
			particle.x = left + 10;
			particle.y = Random(top, bottom); // simulates it being a new particle
		}
		else {
			removeParticle = true;
		}
	}
	else if (particle.x < left) {
		if (this.weatherType !== "clear" && !neverRespawnParticle) {
			particle.x = right - 10;
			particle.y = Random(top, bottom);
		}
		else {
			removeParticle = true;
		}
	}
	// check for particle off screen (y)
	if (particle.y > bottom) {
		if (this.weatherType !== "clear" && !neverRespawnParticle) {
			particle.x = Random(left, right);
			particle.y = top + 10;
		}
		else {
			removeParticle = true;
		}
	}
	else if (particle.y < top) {
		if (this.weatherType !== "clear" && !neverRespawnParticle) {
			particle.x = Random(left, right);
			particle.y = bottom - 10;
		}
		else {
			removeParticle = true;
		}
	}

	// remove particle if it is offscreen and weather is now clear
	if (removeParticle) {
		this.particleArray.splice(index, 1);
		// tbd improve - i might be inaccurate now in the for loop...
	}
}

// render weather particles onto Game canvas
Weather.render = function () {
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
		else if (particle.type === "fish") {
			let img = Loader.getImage("weatherImage");
			Game.ctx.drawImage(img, particle.x, particle.y, img.width, img.height);
		}
	}
}
