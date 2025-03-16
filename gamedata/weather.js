//
// Weather
//

// Scroll down for Event (i.e. time, darkness, event definition, ...)~

let Weather = {
	particleData: {
		snow: {
			weight: 80, // down movement per second
			windMultiplier: 0.4, // multiplied with wind intensity
		},
		rain: {
			weight: 200,
			windMultiplier: 0.2,
		},
		bloodRain: {
			weight: 200,
			windMultiplier: 0.25,
		},
		ley: {
			weight: 0, // down movement per second
			windMultiplier: 0.3, // multiplied with wind intensity
			windAffectsY: true, // wind affects y pos (doesn't usually with snow/rain)
		},
		// "additional" particles
		fish: {
			weight: 300,
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
	setInterval(this.tick, 10000);
	// also tick once on init
	this.tick(true);
}

// called every 10 seconds from Weather.init interval
// init is set to true if this is called on init
// note this is called by Window (interval) every 10 seconds, not by Weather, so cannot use this.
Weather.tick = function (init) {
	if (document.getElementById("weatherOn").checked) {
		Weather.updateVariables();


		if (!init) {
			// not called on init

			// gusts
			if (Weather.weatherType == "ley")
			{
				Weather.gust(Random(0, 360));
			}

			// lightning
			if (Weather.lightning && Weather.lightningTimeout === undefined) {
				let timeUntilStrike = (120 - (Weather.intensity / (Game.canvasArea / 36000))) * 100; // intensity varies from 0 to 120, thus time varies from 0s to 12s
				Weather.lightningTimeout = setTimeout(Weather.commenceLightningStrike, timeUntilStrike);
			}

		}
	}

	Event.updateTime(Game.areaName);
	if (!init) {
		// not called on init
		Game.dayNightUpdate();
	}
}

// called by Game.loadArea and by Weather.updateVariables
Weather.chooseWeather = function (areaName) {
	let oldWeatherType = this.weatherType; // for checking if weather has changed

	if (Areas[areaName].weather !== undefined) {
		// static weather for area
		this.weatherType = Areas[areaName].weather;
		this.weatherAdditional = Areas[areaName].weatherAdditional;
		this.lightning = Areas[areaName].lightning;
	}
	else if (Event.event === "Fish" && !Areas[areaName].noRain && !Areas[areaName].indoors) {
		// fish rain
		this.weatherType = "rain";
		this.lightning = undefined;

		// set the weather after additional image has loaded in
		if(!("weatherImagefish" in Loader.images)) // note the fish needs to be lowercase because it is "WeatherImage"+this.weatherAdditional
		{
			// img not been loaded yet
			let p = Loader.loadImage("weatherImagefish", "./assets/objects/fishRain.png", function () {
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
		else {
			// img has been loaded already in the past
			this.weatherAdditional = "fish";
		}
	}
	else if ((this.dateValue / 40) % 8 < 1 || (this.dateValue / 40) % 21 < 1) {
	//else if ((new Date()).getSeconds() > 30) { // for testing
		if (Areas[areaName].isIcy !== undefined && Areas[areaName].isIcy() && !Areas[areaName].noRain && !Areas[areaName].indoors) {
			// icy area - snow instead of rain
			this.weatherType = "snow";
			this.weatherAdditional = undefined;
		}
		else if (Event.time === "bloodMoon" && !Areas[areaName].noRain && !Areas[areaName].indoors) {
			// blood rain
			this.weatherType = "bloodRain";
			this.weatherAdditional = undefined;
		}
		else if (!Areas[areaName].noRain && !Areas[areaName].indoors) {
			// rain
			this.weatherType = "rain";
			this.weatherAdditional = undefined;
		}
		else {
			this.weatherType = "clear";
		}

		if ((this.dateValue / 40) % 21 < 1 && !Areas[areaName].noLightning) {
			// lightning
			this.lightning = true;
		}
		else {
			this.lightning = undefined;
		}
	}
	else {
		this.weatherType = "clear";
		this.weatherAdditional = undefined;
		this.lightning = undefined;
	}

	if (this.weatherType !== oldWeatherType) {
		// weather has been updated

		// if weather is now rain and was not previously, call onRainStart function of area
		if ((this.weatherType === "rain" || this.weatherType === "fish") &&
		(oldWeatherType !== "rain" && oldWeatherType !== "fish")) {
			if (Areas[areaName].onRainStart !== undefined) {
				Areas[areaName].onRainStart();
			}
		}
		// if weather is now clear and was not previously, call onRainStop function of area
		else if ((this.weatherType === "clear" || this.weatherType === "snow") &&
		(oldWeatherType !== "clear" && oldWeatherType !== "snow")) {
			if (Areas[areaName].onRainStop !== undefined) {
				Areas[areaName].onRainStop();
			}
		}
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

	if (this.lightning) {
		// increased intensity
		this.intensity *= 1.4
	}

	// scale it up based on canvas size
	this.intensity *= (Game.canvasArea / 36000);
}

// start a wind gust
// mulitplier is maximum multiplier reached by the wind of its base value
// rate is amount that windIntensity is multiplied by * tick length, minus 1.
// direction is in degrees
Weather.gust = function (direction, multiplier, rate) {
	if (direction == undefined) {
		direction = this.windDirection;
	}
	if (multiplier == undefined) {
		multiplier = 4;
	}
	if (rate == undefined) {
		rate = 1;
	}

	this.windDirection = ToRadians(direction); // 0 = to the right

	this.windGust = {
		baseIntensity: this.windIntensity,
		multiplier: multiplier,
		rate: rate,
		status: "increasing"
	}; // wind is increasing intensity at rate windGust.rate until it reaches windGust.baseIntensity * windGust.multiplier
}

// called every in game tick by main !
Weather.updateGust = function (delta) {
	// check if there is a gust blowing the wind atm
	if (this.windGust != undefined)
	{
		if (this.windGust.status === "increasing") {
			if (this.windIntensity < this.windGust.baseIntensity*this.windGust.multiplier) {
				// wind intensity still needs to increase!
				this.windIntensity *= 1 + (this.windGust.rate * delta);
			}
			else {
				// now wind slows back down..
				this.windGust.status = "decreasing";
			}
		}

		if (this.windGust.status === "decreasing") {
			if (this.windIntensity > this.windGust.baseIntensity) {
				// wind intensity still needs to decrease!
				this.windIntensity /= 1 + (this.windGust.rate * delta);
			}
			else {
				// now wind gust is done
				this.windIntensity = this.windGust.baseIntensity;
				this.windGust = undefined;
			}
		}
	}
}

// called every weather tick (~ten seconds)
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
		if (screenMovedY < 0) {
			// player moving up
			particle.y -= screenMovedY;
		}
		else {
			// player moving down
			if (this.weatherType == "ley")
			{
				particle.y -= screenMovedY;
			}
			else
			{
				particle.y -= screenMovedY/3;
			}
		}
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
	if (this.weatherType !== "clear" && this.particleArray.length < Math.round(this.intensity)) {
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

		// weight
		particle.y += this.particleData[particle.type].weight * particle.speedMultiplier * delta;

		// wind
		particle.x += Math.cos(this.windDirection) * (this.windIntensity * this.particleData[particle.type].windMultiplier) * particle.speedMultiplier * delta;
		if (this.particleData[particle.type].windAffectsY) {
			// usually doesn't affect y but we can make exceptions ;)
			particle.y += Math.sin(this.windDirection) * (this.windIntensity * this.particleData[particle.type].windMultiplier) * particle.speedMultiplier * delta;
		}

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

// since there are two strikes, the parameter is set to true if it is the second strike (so a third one is not triggered)
Weather.commenceLightningStrike = function (secondStrike) {
	Weather.lightningOnScreen = true;

	if (!secondStrike) {
		// first strike, trigger second strike
		Weather.lightningTimeout = setTimeout(Weather.commenceLightningStrike, 200, true);
	}
	else {
		// second strike, allow another first strike timeout to begin
		Weather.lightningTimeout = undefined;
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
			Game.ctx.globalAlpha = 0.8;
			Game.ctx.fillRect(particle.x, particle.y , 1, 12);
		}
		else if (particle.type === "bloodRain") {
			Game.ctx.fillStyle = "#660000";
			Game.ctx.globalAlpha = 0.4;
			Game.ctx.fillRect(particle.x, particle.y , 1, 12);
		}
		else if (particle.type === "fish") {
			let img = Loader.getImage("weatherImage"+this.weatherAdditional);
			Game.ctx.drawImage(img, particle.x, particle.y, img.width, img.height);
		}
		else if (particle.type === "ley") {
			Game.ctx.fillStyle = "#c565fc";
			Game.ctx.fillRect(particle.x, particle.y , 3, 3);
		}
	}
	Game.ctx.globalAlpha = 1;
}

//
// Events and Time
//

let Event = {
	// return variable with dates for use in event setting functions
	getDate: function () {
		let d = {};
		d.today = new Date();
		d.minute = d.today.getMinutes();
		d.hour = d.today.getHours();
		d.day = d.today.getDate();
		d.month = d.today.getMonth() + 1; // January is 0, so add 1
		d.year = d.today.getFullYear();
		return d;
	},

	// init variables required for Areas definition (called straight away)
	init: function () {
		// get date
		let d = this.getDate();

		// antorax age
		this.antoraxAge = d.year - 2016; // used for some NPC texts (especially on Antorax Day)
		if (d.day < 20 && d.month === 1) {
			// before Antorax day; subtract one from age
			this.antoraxAge--;
		}

		this.globalXpBonus = 0; // percentage

		this.nightThreshold = 0.2; // tbd make it so that this can be changed per area
	},

	// update time (called on loadArea)
	// areaName passed in as parameter because Game.areaName has not been set yet by laodArea
	updateTime: function (areaName) {
		// get date
		let d = this.getDate();

		if (Areas[areaName].time !== undefined) {
			// area always has a specific time
			this.time = Areas[areaName].time;
		}

		else if (this.event === "Samhain" && Player.quests.questProgress.bloodMoonUnlocked) {
			// halloween night time & bloodmoon unlocked
			this.time = "bloodMoon";
		}

		else if (d.day == 21 && d.month == 6) {
			// Summer Solstice - sun up all day
			this.time = "day";
		}
		else if (d.day == 21 && d.month == 12) {
			// Winter Solstice - sun down all day
			this.time = "night";
		}

		else if (d.hour >= 7 && d.hour < 19) {
			// day time
			this.time = "day";
		}
		else {
			// night time
			this.time = "night";
		}

		this.updateDarkness(d, areaName); // update how dark the canvas is
		this.updateFog(d, areaName);
		this.updateSeason(d);
	},

	// update how dark the canvas is (called automatically by updateTime)
	updateDarkness: function (d, areaName) {
		// 0.40 darkness is max due to natural
		// lights turn on at Areas[areaName].nightThreshold darkness ()

		if (typeof Areas[areaName].darkness !== "undefined") {
			this.darkness = Areas[areaName].darkness;
		}
		else {
			// darkness set due to time of day
			if (d === undefined) {
				// no date parameter
				// get date
				let d = this.getDate();
			}

			let timeDarkness = 0; // darkness due to time

			if (d.hour === 18 && d.minute > 30) {
				timeDarkness = 0.2 - ((60 - d.minute) * 0.2 / 30);
				// linear darkness progression from 18:30 to 19:00 of 0.00 to 0.20
			}
			else if (d.hour === 19 && d.minute < 30) {
				timeDarkness = 0.4 - ((30 - d.minute) * 0.2 / 30);
				// linear darkness progression from 19:00 to 19:30 of 0.20 to 0.40
			}
			else if (d.hour === 6 && d.minute > 30) {
				timeDarkness = 0.4 - ((60 - d.minute) * 0.2 / 30);
				// linear darkness progression from 06:30 to 07:00 of 0.40 to 0.20
			}
			else if (d.hour === 7 && d.minute < 30) {
				timeDarkness = 0.2 - ((30 - d.minute) * 0.2 / 30);
				// linear darkness progression from 07:00 to 07:30 of 0.20 to 0.00
			}
			else if (this.time === "night" || this.time === "bloodMoon") {
				// completely dark
				timeDarkness = 0.4;
			}
			else { // time must be day
				// completely light
				timeDarkness = 0;
			}

			// if it is halloween and it is dark due to time, notify Game to make the sky blood dark for blood moon
			// Game can't check Event.time because it isn't blood moon 30 mins before and after when it is getting dark
			if (this.time === "bloodMoon" && timeDarkness > 0) {
				this.redSky = true;
			}
			else {
				this.redSky = false;
			}

			let weatherDarkness = 0; // darkness due to weather

			if (Weather.weatherType === "rain") {
				weatherDarkness = 0.3 * (Weather.intensity / 150) / (Game.canvasArea / 36000);
				// 0.30 darkness if the weather is at its hightest intensity
			}
			else {
				// completely light
				weatherDarkness = 0;
			}

			this.darkness = Math.max(timeDarkness, weatherDarkness); // take the darkest of the two

			if (Areas[areaName].indoors && this.darkness > this.nightThreshold) {
				// indoors, and lights are on
				this.darkness = 0;
			}
		}
	},

	// update amount of foggg (called automatically by updateTime)
	updateFog: function (d, areaName) {
		if (!Areas[areaName].indoors && !Areas[areaName].noFog) {
			// see if it's a foggy day, or near a foggy day
			let fogSeed = GenerateSeed(79, 33, 10, 0, 0, 0);
			if (fogSeed % 200 < 11) {
				// foggy day !!
				// about 1 in 20 days are foggy...
				// max 0.5 - darkness / 2
				let maxFog = 0.5;
				Event.fog = (maxFog-(Event.darkness/2));
			}
			else {
				Event.fog = 0;
			}
		}
	},

	// update event (called on loadArea)
	updateEvent: function () {
		// get date
		let d = this.getDate();

		// James Day
		// Summer Solstice
		if (d.day === 21 && d.month === 6) {
			this.event = "James";
		}
		// Samhain (Halloween)
		// Blood Moon
		else if (d.month === 10) {
			//this.event = "Samhain"; // disabled for 2024 until the quests have been updated :)
		}
		// Christmas
		else if (d.month === 12) {
			this.event = "Christmas";
			// Christmas Day
			if (d.day === 25) {
				this.christmasDay = true;
			}
			else {
				this.christmasDay = false;
			}

			// disabled for now bc tilemap needs updating >:(
			this.event = undefined;
		}
		// Antorax Day
		else if (d.month === 1 && d.day === 20) {
			this.event = "Antorax";
			this.globalXpBonus = 100;
		}
		// Fish Day
		else if (d.month === 4 && d.day === 1) {
			this.event = "Fish";
		}
		// Heroes of Antorax
		else if (d.year === 2019 && (d.month === 4 && d.day >= 24)
		|| (d.month === 5 && d.day <= 5)) {
			this.event = "Heroes";
		}
		// Valentine's
		else if (d.day === 14 && d.month === 2) {
			this.event = "Valentine";
		}
		// New Year's
		else if (d.day === 1 && d.month === 1) {
			this.event = "New Year";
		}
		// Samme day
		if (d.day === 11 && d.month === 10) {
			this.event = "Samme";
		}
	},

	updateSeason: function (d) {
        switch (d.month) {
            case 12:
            case 1:
            case 2:
                this.season = "winter";
                break;
            case 3:
            case 4:
            case 5:
                this.season = "spring";
                break;
            case 6:
            case 7:
            case 8:
                this.season = "summer";
                break;
            case 9:
            case 10:
            case 11:
                this.season = "autumn";
                break;
        }
    },
};

// init event variables needed for Area definition
Event.init();
