"use strict";

//
// Realms of Antorax canvas code
// Jake Thakur 2018-2019
//

// https://developer.mozilla.org/en-US/docs/Games/Techniques/Tilemaps

//
// Game object
//

var Game = {
	// function objects
	statusEffects: {},
	spells: {},
	secondary: {},

	displayedStats: 0, // number of stats displayed at the top left
};
Game.canvas = document.getElementById("game");
Game.secondary.canvas = document.getElementById("secondary");
Game.canvasLight = document.getElementById("light");
Game.canvasDayNight = document.getElementById("dayNight");

// run game
// anything that needs to be done before images are loaded
Game.run = function (context, contextSecondary, contextDayNight, contextLight) {
    this.ctx = context;
	this.ctxDayNight = contextDayNight;
	this.ctxLight = contextLight;
    this.secondary.ctx = contextSecondary;

	// ctx settings
	this.ctx.imageSmoothingEnabled = false;

    this.previousElapsed = 0;

	this.loadPlayer(); // load the player from local storage

	this.initWebSocket(); // init the web socket if the user is on the Heroku version

	// projectile name for hero (for use with projectile image loading)
	this.heroProjectileName = Skins[Player.class][Player.skin].projectile;
	this.heroProjectileAdjust = Skins[Player.class][Player.skin].projectileAdjust;
	this.heroBobberName = "bobber";

	this.nextEntityId = 0; // unique entity ids are assigned using this variable, which is never reset

	// load area and images
    this.loadArea(Player.areaName, {x: Player.x, y: Player.y});
};

// load the player by setting the necessary variables (either from local storage or from template if class is new)
Game.loadPlayer = function () {
	if (localStorage.getItem(Player.class) !== null) {
		// load existing class
        let savedPlayer = JSON.parse(localStorage.getItem(Player.class));

        // add anything new that has been added in savedata to Player
        savedPlayer.bossesKilled = Object.assign(Player.bossesKilled, savedPlayer.bossesKilled);
        savedPlayer.stats = Object.assign(Player.stats, savedPlayer.stats);
        Player = Object.assign(Player, savedPlayer);

        Player.name = playerName;
        Player.skin = playerSkin;
    }
}

//
// WebSocket
//

var ws = false; // false means it has not been set (user is on local version)

Game.initWebSocket = function () {
	this.hasConnectedToWebSocket = false;

	// https://devcenter.heroku.com/articles/node-websockets
	if (location.origin.includes("http")) {
		// not on a local version
		let hostURI = location.origin.replace(/^http/, "ws"); // websocket URI
		ws = new WebSocket(hostURI);

		// WebSocket functions

		// connection established
		ws.onopen = function () {
			if (Game.hasConnectedToWebSocket) {
				// was attempting to reconnect and has now connected
				Dom.chat.insert("Successfully reconnected!");
			}
			else {
				// first time connecting
				Game.hasConnectedToWebSocket = true; // so it knows you have connected to websocket before
			}

			// send username so the user is saved under a particular name in the websocket
			ws.send(JSON.stringify({
				type: "userInformation",
				name:  Player.name,
				class: Player.class,
				level: Player.level,
				skin: Player.skin,
				area: Player.areaName,
				displayArea: Player.displayAreaName,
				x: Player.x,
				y: Player.y,
				direction: 3
			}));

			// show other players online in chat
			Dom.chat.showPlayersOnline("show");
		}

		// message received
		ws.onmessage = function (event) {
			let message = JSON.parse(event.data);
			switch (message.type) {
				case "playerLocation":
					// multiplayer player location
					// find which player it is
					let user;
					if (Game.players !== undefined) { // check user has loaded enough to have loaded Game.players
						for (let i = 0; i < Game.players.length; i++) {
							if (Game.players[i].userID === message.userID) {
								user = Game.players[i];
								break;
							}
						}
					}

					// if user is undefined, either the user is not in the player's area or there has been an error
					if (user !== undefined) {
						user.x = message.x;
						user.y = message.y;
						if (message.direction !== user.direction) {
							// direction changed
							user.direction = message.direction;
							user.updateRotation();
						}
						if (message.expand !== undefined && message.expand !== user.expand) {
							// expand changed
							user.setExpand(message.expand);
						}
					}
					break;

				case "userID":
					// set ws.userID (i.e. for excepting oneself in some future broadcasts)
					ws.userID = message.content;
					break;

				case "msg": // for private message from someone (the name being sender -> target is handled in server)
					Dom.replyTo = message.sender;
					// no break because the same is done as chat for the rest

				case "chat":
					// do not allow user ta use < or > in chat (stop HTML injection)
					let messageContent = message.content.replace(/[<>]/g, "");
					// insert in chat
					Dom.chat.insert(Dom.chat.say(message.name, messageContent));
				    // notification if user has given permission
					Dom.chat.notification(message.name, messageContent);
					break;

				case "info":
					Dom.chat.insert(message.content);
					break;

				case "keepAlive":
					// used to stop the connection dying after 55s (Heroku)
					ws.send(JSON.stringify({
						type: "keepAlive",
					}));
					break;

				case "playersOnline":
					// update display of players online in chat DOM
					// message.action tells DOM what to update
					Dom.chat.players(message, message.action); // passes in whole object

					// update information in Game.players
					// addPlayer checks if the player should be added to Game.players (e.g. if they are in right area)
					switch (message.action) {
						case "join":
						case "retroactive":
							Game.addPlayer(message);
							break;
						case "area":
							// find the player from DOM and only add it if they have moved to the player's current area
							if (message.area === Player.areaName) {
								Game.addPlayerByID(message.userID);
							}
							else {
								// if they used to be in the player's area, remove them
								Game.removePlayerByID(message.userID);
							}
							break;
						case "leave":
							Game.removePlayerByID(message.userID);
							break;
					}
					break;

				case "ping":
					// pong received (for server response time checking)
					Dom.chat.insert(Dom.chat.say("Server", "Pong received from server in " + (Date.now()-message.content) + "ms."));
					break;

				case "trade":
					switch (message.action) {

						// trade requests

	 					case "request":
							// trade request received
							// find player in Game.players for DOM currentNPC
							let currentNPC;
							for (let i = 0; i < Game.players.length; i++) {
								if (Game.players[i].userID === message.userID) {
									currentNPC = {
										id: Game.players[i].id,
										type: Game.players[i].type
									};
								}
							}
							if (currentNPC !== undefined) {
								Dom.trade.requestReceived(message.userID, message.name, currentNPC);
								Dom.chat.notification("You have received a trade request from " + message.name + ".");
							}
							else {
								console.error("Trade request received from a player that isn't in the same area.")
							}
							break;

						case "accept":
							// trade accepted by user that player is waiting on to accept/decline
							Dom.trade.page();
							Dom.chat.notification("Your trade request with " + message.name + " has been accepted.");
							break;

						case "decline":
							// trade declined by user that player is waiting on to accept/decline
							Dom.currentlyDisplayed = "";
							Dom.chat.insert("Your trade request with " + message.name + " has been declined.");
							Dom.chat.notification("Your trade request with " + message.name + " has been declined.");
							break;

						case "busy":
							// trade could not be started because the user requested was currently occupied
							Dom.currentlyDisplayed = "";
							Dom.chat.insert(message.name + " is currently busy doing something else. Come back later.");
							break;

						// trade page

	 					case "update":
							// other user's trade inventory is updated
							Dom.trade.updateTheirInventory(message.content);
							break;

	 					case "confirm":
							// trade confirmed by another user
							Dom.trade.confirmOther();
							Dom.chat.notification(message.name + " has confirmed the trade.");
							break;

						case "close":
							// close trade (true = called by other person)
							Dom.trade.close(true);
							Dom.chat.insert(message.name + " has cancelled the trade.");
							Dom.chat.notification(message.name + " has cancelled the trade.");
							break;
					}
					break;

				default:
					console.error("Message type " + message.type + " is not recognised");
			}
		};

		ws.onerror = function (event) {
			console.error("WebSocket error observed:", event);
		};

		// user disconnected (readyState has been set to 3)
		ws.onclose = function (event) {
			// offline
			// remove all existing players in the area
			Dom.players = [];
			for (let i = 0; i < Game.players.length; i++) {
				Game.removeObject(Game.players[i].id, "players", UserControllable, i);
			}

			if (Game.hasConnectedToWebSocket) {
				// if they have connected before to the websocket (thus a possible connection exists), try to reconnect them
				// if the reconnect fails, this will be called again straight away
				Dom.chat.showPlayersOnline("reconnecting");
				Dom.chat.insert("You lost connection to the websocket. Attempting to reconnect in 5 seconds.");
				// reset websocket
				ws = false;
				// try to reconnect in 5 seconds
				setTimeout(Game.initWebSocket, 5000);
			}
			else {
				// websocket hasn't connected before - we can assume a 404 error because they are on a single player version
				Dom.chat.showPlayersOnline("hide");
			}
		};
	}
	else {
		console.info("Playing on a local version. Multiplayer features are not available.")
	}
}

// for adding another player to Game.players and checking the conditions required
Game.addPlayer = function (player) {
	// if players is undefined, don't add player (because the player will be added anyway from Dom.players when Game.players is defined in loadArea)
	// if players IS defined and is receiving retroactive player additions (action="retroactive"), this must mean that they were sent after loadArea (where Dom.players had nothing anyway)
	if (this.players !== undefined) {

		// deep copy player (because it could have come from Dom.players)
		let copiedPlayer = Object.assign({}, player);

		if (copiedPlayer.area === Player.areaName && // check player is in the same area
		copiedPlayer.userID !== ws.userID) { // and player is not Game.hero

			// check the player has not already been added
			let playerAlreadyAdded = this.players.findIndex(existingPlayer => existingPlayer.userID === copiedPlayer.userID);
			if (playerAlreadyAdded === -1 && this.prepareNPC(copiedPlayer, "players")) {

				// object properties (to stop attacker breaking)
				copiedPlayer.hostility = "friendly";
				copiedPlayer.stats = {};
				copiedPlayer.stats.maxHealth = 50 + (copiedPlayer.level-1) * 5;
				copiedPlayer.projectile = {};

				// add the player
				this.players.push(new UserControllable(copiedPlayer));
				let addedPlayer = this.players[this.players.length-1];

				// load its image
				addedPlayer.init().then(function () {
					// set the image
					addedPlayer.setImage("player"+addedPlayer.class+addedPlayer.skin, {x:0,y:0}, 57, 120);

					addedPlayer.updateRotation();

					// allow player to be shown
					addedPlayer.hidden = false;
				});
			}
		}
	}
}

Game.addPlayerByID = function (userID) {
	let player = Dom.players.find(player => player.userID === userID);
	this.addPlayer(player);
}

// player does not necessarily need to exist - this function checks that they do first
Game.removePlayerByID = function (userID) {
	let player = Game.players.find(player => player.userID === userID);
	if (player !== undefined) {
		// a player in the area should be removed
		Game.removeObject(player.id, "players", UserControllable);
	}
}

//
// Start up function
//

window.onload = function () {
    let context = Game.canvas.getContext('2d');
	let contextSecondary = Game.secondary.canvas.getContext('2d');
	let contextDayNight = Game.canvasDayNight.getContext('2d');
	let contextLight = Game.canvasLight.getContext('2d');
    Game.run(context, contextSecondary, contextDayNight, contextLight);
};

//
// Map
//

var map = {
	// validate that row/col exist on the map
	// if they do not, return the closest existing row/col
	validateCol: function (col) {
		if (col < 0) {
			return 0;
		}
		if (col >= this.cols) {
			return this.cols-1;
		}
		return col;
	},
	validateRow: function (row) {
		if (row < 0) {
			return 0;
		}
		if (row >= this.rows) {
			return this.rows-1;
		}
		return row;
	},

    getTile: function (layer, col, row) {
		col = this.validateCol(col);
		row = this.validateRow(row);
        return this.layers[layer][row * map.cols + col];
    },

    getCol: function (x) {
        let col = Math.floor(x / this.tsize);
		return this.validateCol(col);
    },
    getRow: function (y) {
        let row = Math.floor(y / this.tsize);
		return this.validateRow(row);
    },

	// top/left of tile
    getX: function (col) {
		col = this.validateCol(col);
        return col * this.tsize;
    },
    getY: function (row) {
		row = this.validateRow(row);
        return row * this.tsize;
    },

	isSolidTileAtXY: function (x, y) {
        let col = this.getCol(x);
        let row = this.getRow(y);

		let isSolid = false; // set to true if any tile is unpassable (on any layer)

		// loop through all layers and return TRUE if any tile is solid
		for (let layer = 0; layer < this.layers.length; layer++) {
			let tile = this.getTile(layer, col, row);

			if (typeof this.solidTiles !== "undefined") { // check that this map contains solidTiles
				for (let i = 0; i < this.solidTiles.length; i++) {
					// looping through solid tiles
					if (tile === this.solidTiles[i]) {
						// solid tile found
						isSolid = true;
						break;
					}
				}
			}
		}

		return isSolid;
	},
	isSlowTileAtXY: function (x, y) {
        let col = this.getCol(x);
        let row = this.getRow(y);

        // check first layer only and return TRUE if any tile is a slowing tile
        let tile = this.getTile(0, col, row);

		let isSlow = null; // set to a string for any slow/fast tile being touched

		if (typeof this.waterTiles !== "undefined") { // check that this map contains waterTiles
			for (let i = 0; i < this.waterTiles.length; i++) {
				if (tile === this.waterTiles[i]) {
					// water tile found
					isSlow = "water";
					break;
				}
			}
		}
		if (typeof this.mudTiles !== "undefined") { // check that this map contains mudTiles
			for (let i = 0; i < this.mudTiles.length; i++) {
				if (tile === this.mudTiles[i]) {
					// mud tile found
					isSlow = "mud";
					break;
				}
			}
		}
		if (typeof this.iceTiles !== "undefined") { // check that this map contains iceTiles
			for (let i = 0; i < this.iceTiles.length; i++) {
				if (tile === this.iceTiles[i]) {
					// ice tile found
					isSlow = "ice";
					break;
				}
			}
		}
		if (typeof this.pathTiles !== "undefined") { // check that this map contains pathTiles
			for (let i = 0; i < this.pathTiles.length; i++) {
				if (tile === this.pathTiles[i]) {
					// path tile found
					isSlow = "path";
					break;
				}
			}
		}
		return isSlow;
	},

	setTile: function (layer, col, row, newTileNum) {
        this.layers[layer][row * map.cols + col] = newTileNum;
    },

	// set tiles to day or night versions (called on time update by weather interval)
	setDayNightTiles: function () {
		// tiles changed to night versions if darkness > 0.2 (due to weather or night)
		if (Areas[Game.areaName].mapData.nightTiles !== undefined) {

			// tiles to be changed
			if (Areas[Game.areaName].mapData.nightTiles.length === Areas[Game.areaName].mapData.dayTiles.length) {
				// iterate through tiles to replace
				for (let replaceIndex = 0; replaceIndex < Areas[Game.areaName].mapData.nightTiles.length; replaceIndex++) {
					// iterate through area's tiles to find those that need replacing
					for (let tileIndex = 0; tileIndex < Areas[Game.areaName].mapData.layers[0].length; tileIndex++) {
						// check day or night versions
						if (Event.darkness >= 0.2) {
							// night time
							if (this.layers[0][tileIndex] === Areas[Game.areaName].mapData.dayTiles[replaceIndex]) {
								// tile needs replacing
								this.layers[0][tileIndex] = Areas[Game.areaName].mapData.nightTiles[replaceIndex];
							}
						}
						else {
							// day time
							if (this.layers[0][tileIndex] === Areas[Game.areaName].mapData.nightTiles[replaceIndex]) {
								// tile needs replacing
								this.layers[0][tileIndex] = Areas[Game.areaName].mapData.dayTiles[replaceIndex];
							}
						}
					}
				}
			}
			else {
				console.error("dayTiles and nightTiles should have the same length in areadata.js for area " + areaName + ", but do not");
			}

		}
	}
};

//
// Canvas functions
//

// find bearing between two entities (with x and y)
// returns answer in radians
Game.bearing = function (obj1, obj2) {
	let bearing = Math.atan2(obj2.y - obj1.y, obj2.x - obj1.x);
	return bearing;
}

// find distance between two entities (with x and y) - pythagoras' theorem
Game.distance = function (obj1, obj2) {
	return Math.sqrt((obj1.x - obj2.x) * (obj1.x - obj2.x) + (obj1.y - obj2.y) * (obj1.y - obj2.y));
}

// search for an entity with a specific id (first param) within an array (second param)
// returns the array index of the first found item of the array with that id
// only works for projectiles as of 01/07/18 (they're the only entities with ids)
Game.searchFor = function (id, array) {
	let index = null;
	for (let i = 0; i < array.length; i++) {
		if (array[i].id === id) {
			index = i;
			break;
		}
	}
	if (index === null) {
		console.error("The requested item of id " + id + " could not be found in the following array: ", array);
	}
	return index;
}

// remove object from all arrays it is in using its id
// id = object.id
// type = name of the array the object is in
// className = the class name of the object
// index = known index of the object in its array (e.g. of an enemy in Game.enemies) - this is optional
Game.removeObject = function (id, type, className, index) {
	// every object is an entity
	// remove from allEntities
	this.allEntities.splice(this.searchFor(id, this.allEntities), 1);

	if (className.prototype instanceof Thing || className.name === "Thing") {
		// extends off Thing or is Thing
		// remove from allThings
		this.allThings.splice(this.searchFor(id, this.allThings), 1);

		if (className.prototype instanceof Character || className.name === "Character") {
			// extends off Character or is Character
			// remove from allCharacters
			this.allCharacters.splice(this.searchFor(id, this.allCharacters), 1);

			if (className.prototype instanceof Attacker || className.name === "Attacker") {
				// extends off Attacker or is Attacker
				// remove from allAttackers
				this.allAttackers.splice(this.searchFor(id, this.allAttackers), 1);
			}
		}
	}

	// remove from specific array of its type
	if (index === undefined) {
		index = this.searchFor(id, this[type]);
	}
	this[type].splice(index, 1);
}

// checks if an NPC can be shown (from their canBeShown function)
Game.canBeShown = function (NPC) {
	let show = true;
	if (NPC.canBeShown !== undefined) {
		if (!NPC.canBeShown()) {
			show = false;
		}
	}
	return show;
}

// checks if two objects are within a certain range of each other
Game.areNearby = function (obj1, obj2, range) {
	let distanceValue = this.distance(obj1, obj2);
	if (distanceValue <= range) {
		return true;
	}
	else {
		return false;
	}
}

// find the closest entity in an array (objArray) to another entity (mainObj)
Game.closest = function (objArray, mainObj) {
	let closestDistance = Infinity;
	let closestIndex = -1;
	for (let i = 0; i < objArray.length; i++) {
		let distanceTo = this.distance(mainObj, objArray[i]);
		if (distanceTo < closestDistance) {
			closestIndex = i;
			closestDistance = distanceTo;
		}
	}
	return objArray[closestIndex];
}

//
// Base Classes (sole role is inheritance)
//

// an unseen object - takes up space but can't be seen
class Entity {
	constructor(properties) {
		this.id = Game.nextEntityId; // for choose DOM and removing entity
		Game.nextEntityId++;
		this.type = properties.type; // array the NPC is in (for choose DOM and removing entity)

		this.map = properties.map;
		this.x = properties.x || 0;
		this.y = properties.y || 0;
		this.width = properties.width;
		this.height = properties.height;

		this.hitboxColour = properties.hitboxColour || "#FF0000"; // hex colour for hitbox

		this.collisionType = properties.collisionType || "body"; // "feet" = check collision with Game.hero.footHitbox
		// collision type currently only applies to tripwires

		// onLoad function
		this.onLoad = properties.onLoad;
		if (this.onLoad !== undefined) {
			this.onLoad();
		}

		Game.allEntities.push(this); // array for current area only
	}

	isTouching (object) {
		/*if (this.rotate !== undefined || object.rotate !== undefined) {
			// involves rotated hitboxes
		}
		potentially useful: https://gamedev.stackexchange.com/a/86784/119033
		https://stackoverflow.com/a/12414951/9713957
		https://yal.cc/rot-rect-vs-circle-intersection/
		*/

		// make a copy of the two things to check collision on
		let object1 = object;
		let object2 = this;

		// check that the objects do not have their own special hitbox
		if (this.hitbox !== undefined) {
			object2 = this.hitbox;
		}
		if (object.hitbox !== undefined) {
			object1 = object.hitbox;
		}

		if (object2.screenX - object2.width / 2 < object1.screenX + object1.width / 2 &&
	    object2.screenX + object2.width / 2 > object1.screenX - object1.width / 2 &&
	    object2.screenY - object2.height / 2 < object1.screenY + object1.height / 2 &&
	    object2.screenY + object2.height / 2 > object1.screenY - object1.height / 2) {
			return true;
		}
		else {
			return false;
		}
	}

	// confirm that nothing is being touched in a particular array
	isTouchingType (array) {
		for (let i = 0; i < array.length; i++) {
			if (this.isTouching(array[i])) {
				return true;
			}
		}
		// not touching any of them
		return false;
	}

	// get top, bottom, left, and right positions in pixels
	// based on x and y (not screenX and screenY)
	getBoundaries () {
		let boundaries = {
			left: this.x - this.width / 2,
			right: this.x + this.width / 2,
			top: this.y - this.height / 2,
			bottom: this.y + this.height / 2,
		};
		return boundaries;
	}
}

// a version of entity that can be seen
class Thing extends Entity {
	constructor(properties) {
		super(properties);

		// set image related variables
		if (properties.image !== undefined) {
			this.setImage(properties.image, properties.crop, properties.width, properties.height);

			// if the image is a **horizontal** tileset, where all images have the same width and height, this specifies the number image to use (starting at 0 for the first image)
			// doesn't work with setImage or changeImage/resetImage
			this.imageNumber = properties.imageNumber || 0; // currently only works for projectiles (TBD)
		}
		else {
			this.hidden = true; // an image must be loaded and set via setIMage before it can be shown (and then hidden may be set back)
		}

		this.setExpand(properties.expand || 1); // width multiplier (based on base width and base height)

		this.z = properties.z || 0; // used for canvas positioning: -1 is always below (e.g. wizard's lore) and 1 is always on top (e.g. projectile)

		this.name = properties.name;

		this.bright = properties.bright; // currently does nothing

		if (properties.animationFrameTime !== undefined) {
			// animation (tick is every 250s)

			this.animationFrameTime = properties.animationFrameTime; // time until next animation frame (can be changed by animate function)
			this.lastAnimated = 0; // in ms, time it was last animated (used with animationFrameTime)

			this.animate = properties.animateFunction;

			// let Game know this should be animated in animationTick (and that there should be an animationTick at all)
			Game.animationList.push(this);
		}

		Game.allThings.push(this); // array for current area only
	}

	// imageName is the key name of the image stored in loader
	// crop is object with width and height information (x, y , width, height)
	// width and height are optional "stretch" parameters
	// rotationImages is object of image key names in loader of rotation images (i.e. different character directions)
	// rotationImages can be set to false to not change rotationImage variables
	setImage (imageName, crop, width, height, rotationImages) {
		if (this.imageName !== imageName) {
			// avoid undefined error later
			if (crop === undefined) {
				crop = {};
			}

			this.imageName = imageName;
			this.image = Loader.getImage(imageName);

			// crop (for drawing on canvas)
			// width/height = stretch and compress of image
			// crop width and height means no stretch nor compress
			this.crop = {};
			this.crop.x = crop.x || 0;
			this.crop.y = crop.y || 0;
			this.crop.width = crop.width || (this.image.width - this.crop.x);
			this.crop.height = crop.height || (this.image.height - this.crop.y);
			// set width and height to image dimensions unless otherwise specified
			this.width = width || this.crop.width;
			this.height = height || this.crop.height;

			// used as reference for expand
			this.baseWidth = this.width;
			this.baseHeight = this.height;

			if (this.setRotationImageVariables !== undefined && rotationImages !== false) {
				// only works for enemies atm - tbd extend to all cases and remove this if statement
				this.setRotationImageVariables(rotationImages);
			}
		}
	}

	// set an image due to a change in movement direction
	// therefore does not change rotationImageVariables
	setImageMovement (imageName, crop, width, height) {
		this.setImage(imageName, crop, width, height, false);
	}

	// temporary change of image (used with resetImage)
	// parameters same as setImage
	changeImage (imageName, crop, width, height, rotationImages) {
		// variables for changing image back
		if (this.initialImageInformation === undefined) {
			// only set variable it it has not already been set
			this.initialImageInformation = {
				name: this.imageName,
				crop: this.crop,
				baseWidth: this.baseWidth,
				baseHeight: this.baseHeight,
				rotationImages: this.rotationImages
			}
		}

		this.setImage(imageName, crop, width, height, rotationImages);
	}

	// reset image to information saved by changeImage
	resetImage () {
		if (this.initialImageInformation !== undefined) {
			this.setImage(this.initialImageInformation.name, this.initialImageInformation.crop, this.initialImageInformation.baseWidth, this.initialImageInformation.baseHeight, this.initialImageInformation.rotationImages);

			this.initialImageInformation = undefined;
		}
		else {
			console.warn("resetImage was called when initialImageInformation had not been set for " + this.name);
		}
	}

	// set the expand of the entity
	setExpand (value) {
		this.expand = value;
		this.width = this.baseWidth * this.expand;
		this.height = this.baseHeight * this.expand;
	}
}

// a version of thing that can be damaged (but can't deal damage)
class Character extends Thing {
	constructor(properties) {
		super(properties);

		// foot collision (for tile speeds/collisions)
		// x and y positions are in centre
		let footHeight = properties.footHeight || 20; // distance from bottom boundary of player of foot hitbox
		this.footHitbox = new Entity({
			map: map,
			x: this.x,
			y: this.y + this.height/2 - footHeight/2,
			width: this.width,
			height: footHeight,
			hitboxColour: "#FF00FF",
		});

		this.channelling = false;
		this.channellingInfo = false;

		this.health = properties.health || properties.stats.maxHealth;
		this.damageTaken = 0; // only used so far for Dummies
		this.speed = properties.stats.walkSpeed || 0;

		this.level = properties.level;

		this.class = properties.class;

		this.species = properties.species; // "human", "goblin", "orc", etc.
		this.subSpecies = properties.subSpecies; // "nilbog goblin", "fire orc", etc.

		this.hostility = properties.hostility; // used for name colour

		this.spawnX = properties.x;
		this.spawnY = properties.y;

		this.respawning = false;
		this.isCorpse = false;

		// stats
		this.stats = {};

		// these stats must have a value
		this.stats.maxHealth = properties.stats.maxHealth;

		// it is recommended that you pick a value for these, but not necessary
		this.stats.defence = properties.stats.defence || 0;
		this.stats.healthRegen = properties.stats.healthRegen || 0.5;
		this.stats.walkSpeed = properties.stats.walkSpeed || 180; // base speed values are same as player
		this.stats.swimSpeed = properties.stats.swimSpeed || 60;
		this.stats.iceSpeed = properties.stats.iceSpeed || 270;
		this.stats.lootTime = properties.stats.lootTime || 10000; // time that it can be looted for
		this.stats.respawnTime = properties.stats.respawnTime || 11000; // time to respawn (should be more than lootTime)

		// optional stats
		// using || defaults to second value if first is undefined, 0 or ""
		this.stats.dodgeChance = properties.stats.dodgeChance || 0;
		this.stats.reflection = properties.stats.reflection || 0;
		this.stats.stealthed = properties.stats.stealthed || false; // can't be seen
		this.stats.frostaura = properties.stats.frostaura || false;

		this.chat = properties.chat || {}; // object containing properties that are inserted into chat when specific things happen
		/* examples of chat properties:
			firstDamaged - said when the character is damaged for the first time
			fiftyPercentHealth - said when the character goes below 50% health for the first time
			tenPercentHealth - said when the character goes below 10% health for the first time
			death - said when the character dies (unlimited times)
			questProgress - said when a quest involving this NPC is in progress (mandatory for quest npcs)
			questComplete - said when quests involving this NPC have been finished (mandatory for quest npcs)
			inventoryFull - said when a quest involving this NPC adds more items than needed (mandatory for quest npcs that add something to inventory on start or finish)
			shopLeave - said when you leave a merchant (mandatory for merchants)
			more tba

			use "/me " at the start of the chat to make the chat reflexive
			e.g:	"Hi" => "Character: Hi"
					"/me Hi" => "Character Hi"
		*/

		// whether NPC's name should be shown in chat
		// (might not be if a special name is hard-coded instead, for example)
		if (properties.showNameInChat === undefined) {
			this.showNameInChat = true;
		}
		else {
			this.showNameInChat = properties.showNameInChat;
		}
		// type of chat sending to use if array is passed as message to chat()
		// either "all" or "random"
		this.chatArrayType = properties.chatArrayType;

		// event chat changes
		if (Event.christmasDay) {
			// chooseChat changed
			if (this.chat.chooseChat !== undefined && this.chat.christmasGreeting !== undefined) {
				this.chat.chooseChat = this.chat.christmasGreeting;
			}
		}
		else if (Event.event === "Antorax") { // Antorax Day
			// chooseChat changed
			if (this.chat.chooseChat !== undefined && this.chat.antoraxDayGreeting !== undefined) {
				this.chat.chooseChat = this.chat.antoraxDayGreeting;
			}
		}

		this.direction = properties.direction || 0; // used for rotation image

		this.statusEffects = [];

		Game.allCharacters.push(this); // array for current area only
	}

	// insert a message into the chat, under the format of "this.name: message"
	// this.name is emboldened via <strong> tags
	// name is only shown if property "showNameInChat" of the NPC is true
	// if message begins with "/me " (including space), the format changes to "this.name message"
	// see sayChat for parameter descriptions
	say (message, delay, singleUse, arrayType, language) {
		let name = this.name;
		if (!this.showNameInChat) {
			// name should not be shown in chat (e.g. because it is already included in chat messages)
			// pass in undefined for name
			name = undefined;
		}

		arrayType = arrayType || this.chatArrayType; // set arrayType to the NPC's default arrayType if it is undefined as parameter

		if (arrayType !== "all") {
			Dom.chat.insert(Dom.chat.say(name, message, language), delay, undefined, singleUse);
		}
		else {
			Dom.chat.insertSequence(message);
		}
	}

	// function to be carried out during Game.render(), after image render
	// note that this is overwritten by Hero
	postRenderFunction () {
		// show health bar and character name above head
		Game.drawCharacterInformation(Game.ctx, this);
		return true; // tell render to render the rest of the object normally
	}

	// update x, y, screenX and screenY of foot hitbox
	updateFootHitbox () {
		this.footHitbox.x = this.x;
		this.footHitbox.y = this.y + this.height/2 - this.footHitbox.height/2;
		Game.updateScreenPosition(this.footHitbox);
	}

	// remove status effect from the specified index of this.statusEffects
	removeStatusEffect (index) {
		if (this.statusEffects[index].tickTimeout !== undefined) {
			clearTimeout(this.statusEffects[index].tickTimeout); // clear tick
		}
		if (this.statusEffects[index].onExpire !== undefined) {
			this.statusEffects[index].onExpire(this); // call onExpire
		}
		this.statusEffects.splice(index, 1); // remove it
	}

	// clear all status effects and their tick timeouts
	// called upon death, alongside removing all of the status effects themselves
	removeAllStatusEffects () {
		while (this.statusEffects.length > 0) {
			// cannot be set to [] for Game.hero, otherwise it no longer mirrors player
			this.removeStatusEffect(0);
		}
	}

	// take damage
	takeDamage (damage) {
		this.health -= damage;
		this.damageTaken += damage;

		// check for death
		if (this !== Game.hero) {
			// not player (assumed it is killed by player - TBD)
			// TBD use hostility to check if it is killed by player
			if (this.health <= 0 && !this.respawning) { // check it is dead and not already respawning
				// wipe status effects and their tick timeouts
				this.removeAllStatusEffects();

				// death
				this.respawning = true;
				this.isCorpse = true;

				// loot
				if (this.lootTable !== undefined) {
					this.generateLoot(this.lootTable);
				}

				// xp
				Game.getXP(this.xpGiven / Player.level); // now that the XP has fully been added, check for a levelUp and display it on the canvas

				// on kill function
				if (Player.inventory.weapon.onKill !== undefined) {
					Player.inventory.weapon.onKill();
				}

				// corpse disappears in this.stats.lootTime ms
				setTimeout(function () {
					this.isCorpse = false;
					// call Dom.quests.active if it is needed for a quest regarding this enemy
					if (this.name === "The Tattered Knight") {
						Dom.quests.active();
					}
				}.bind(this), this.stats.lootTime);

				// respawn in this.stats.respawnTime ms (if it is not a boss)
				if (this.hostility !== "boss") {
					setTimeout(function () {
						this.respawn();
					}.bind(this), this.stats.respawnTime);
				}
				else {
					// set boss date killed
					Player.bossesKilled[this.bossKilledVariable] = GetFullDate();
				}

				//
				// quest progress
				//

				// enemies killed achievement
				if (this.hostility === "hostile" || this.hostility === "boss") {
					User.progress.enemies = Increment(User.progress.enemies);

					// enemies killed with fish achievement
					if (Player.inventory.weapon.type === "sword" && Player.inventory.weapon.id === 10) { // fishy equipped
						User.progress.enemiesKilledWithFish = Increment(User.progress.enemiesKilledWithFish);
					}
				}

				if (this.subSpecies === "nilbog goblin") {
					// goblins killed achievement
					User.progress.goblins = Increment(User.progress.goblins);
					// general goblins killed objective
					Player.quests.questProgress.goblinsKilled = Increment(Player.quests.questProgress.goblinsKilled);
					// goblins killed with goblin torch objective
					if (Player.inventory.weapon.type === "staff" && Player.inventory.weapon.id === 7) { // goblin torch equipped
						Player.quests.questProgress.goblinsKilledWithTorch = Increment(Player.quests.questProgress.goblinsKilledWithTorch);
					}
				}
				else if (this.subSpecies === "dummy") {
					User.progress.dummies = Increment(User.progress.dummies);
				}

				// weapon chat message (some weapons have a chat message for when they kill something!)
				if (Player.inventory.weapon.chat !== undefined && Player.inventory.weapon.chat.kill !== undefined) {
					Dom.chat.insert(Dom.chat.say(Player.inventory.weapon.name, Player.inventory.weapon.chat.kill));
				}

				// death text
				if (typeof this.chat.death !== "undefined") {
					this.say(this.chat.death, 0, true);
				}
			}
		}
		// player
		else {
			if (this.health <= 0 && !this.respawning) { // check it is dead and not already respawning

				// find existing xp fatigue effect
				let existingEffect = this.statusEffects.find(statusEffect => statusEffect.title === "XP Fatigue");

				// wipe status effects (including existing XP fatigue)
				this.removeAllStatusEffects();

				// death
				this.respawning = true;
				this.isCorpse = true;

				// area onDeath function
				if (Areas[Game.areaName].onDeath !== undefined) {
					Areas[Game.areaName].onDeath();
				}

				// load checkpoint area
				Game.loadArea(this.checkpoint, Areas[this.checkpoint].player);

				this.health = this.stats.maxHealth;

				let ineffectiveAmount = LevelXP[Game.hero.level] / 6; // amount of XP to be worth 50% less
				let stacks = 1;
				if (existingEffect !== undefined) {
					// existing xp fatigue effect
					ineffectiveAmount += existingEffect.info.ineffectiveAmount; // stack to an effect XP fatigue effect
					stacks = existingEffect.info.stacks + 1;
					if (ineffectiveAmount > LevelXP[Game.hero.level]) { // caps out at the total XP to your next level
						ineffectiveAmount = LevelXP[Game.hero.level];
					}
				}
				ineffectiveAmount = Math.round(ineffectiveAmount);

				// add stronger xp fatigue effect (or add one if the player doesn't already have one)
				Game.hero.statusEffects.push(new statusEffect({
					title: "XP Fatigue",
					effect: "You recently died. Your next " + ineffectiveAmount + " XP is worth 50% less.",
					info: {
						stacks: stacks,
						ineffectiveAmount: ineffectiveAmount,
					},
					image: "xpDown",
				}));

				Player.fatiguedXP = ineffectiveAmount;

				Game.hero.updateStatusEffects();

				// save progress
				Game.saveProgress("auto");
			}
		}
	}

	// respawn after death
	respawn () {
		this.loot = null;

		this.hasBeenSiphoned = false; // for quests

		this.x = this.spawnX;
		this.y = this.spawnY;

		this.health = this.stats.maxHealth;
		this.damageTaken = 0;

		this.speed = this.stats.walkSpeed || 0;

		this.respawning = false;
	}

	// check if the character has a status effect with the specific title
	hasStatusEffect (title, startIndex, finishBeforeIndex) {
		// startIndex and finishBeforeIndex are the same as String.substring parameters
		if (startIndex === undefined) {
			startIndex = 0;
		}
		if (finishBeforeIndex === undefined) {
			finishBeforeIndex = title.length;
		}
		if (this.statusEffects.find(statusEffect => statusEffect.title.substring(startIndex, finishBeforeIndex) === title) !== undefined) {
			return true;
		}
		return false;
	}

	// check if the character has a status effect of the specified type
	hasStatusEffectType (type) {
		for (let i = 0; i < this.statusEffects.length; i++) {
			if (this.statusEffects[i].type === type) {
				return true;
			}
		}
		return false;
	}

	// set character speed
	// baseSpeed stops the speed being changed from status effects and slow tiles (e.g. for displacement)
	setSpeed (baseSpeed) {
		let footY = this.y + this.height/2 - this.footHitbox.height/2; // y position of feet

		// test for slow tiles (e.g: water, mud)
		let slowTile = this.map.isSlowTileAtXY(this.x, footY);

		if (slowTile === null || baseSpeed) { // normal speed
			this.speed = this.stats.walkSpeed;
			// remove swimming/mud/ice/path status effect
			Game.removeTileStatusEffects(this);
		}

		else if (slowTile === "ice") { // on ice tile
			this.speed = this.stats.iceSpeed;

			Game.removeTileStatusEffects(this, "Ice skating"); // remove all status effects from other tiles
			if (!this.hasStatusEffect("Ice skating")) { // give status effect if the player doesn't already have it
				Game.statusEffects.generic({
					target: this,
					effectTitle: "Ice skating",
					effectDescription: "Increased movement speed",
					imageName: "speedUp", // TBD change this?
					type: "ice",
					effectStack: "noStack",
				});
			}
		}

		else if (slowTile === "path") { // on path
			this.speed = this.stats.walkSpeed * 1.15;

			Game.removeTileStatusEffects(this, "On a path"); // remove all status effects from other tiles
			if (!this.hasStatusEffect("On a path")) { // give status effect if the player doesn't already have it
				Game.statusEffects.generic({
					target: this,
					effectTitle: "On a path",
					effectDescription: "+15% movement speed",
					imageName: "speedUp",
					type: "path",
					effectStack: "noStack",
				});
			}
		}

		else if (slowTile === "water") { // in water tile
			this.speed = this.stats.swimSpeed;

			Game.removeTileStatusEffects(this, "Swimming"); // remove all status effects from other tiles
			if (!this.hasStatusEffect("Swimming")) { // give status effect if the player doesn't already have it
				// remove fire status effect
				for (let i = 0; i < this.statusEffects.length; i++) {
					if (this.statusEffects[i].title.substring(0, 4) == "Fire") {
						this.removeStatusEffect(i);
					}
				}
				// add water status effect
				Game.statusEffects.generic({
					target: this,
					effectTitle: "Swimming",
					effectDescription: "Reduced movement speed",
					imageName: "water",
					type: "water",
					effectStack: "noStack",
				});
			}
		}

		else if (slowTile === "mud") { // in mud tile
			// currently mud goes the same speed as in a water tile
			this.speed = this.stats.swimSpeed;

			Game.removeTileStatusEffects(this, "Stuck in the mud"); // remove all status effects from other tiles
			if (!this.hasStatusEffect("Stuck in the mud")) { // give status effect if the player doesn't already have it
				Game.statusEffects.generic({
					target: this,
					effectTitle: "Stuck in the mud",
					effectDescription: "Reduced movement speed",
					imageName: "mud",
					type: "mud",
					effectStack: "noStack",
				});
			}
		}

		else {
			console.error("Unknown slow tile: " + slowTile);
		}

		if (!baseSpeed) {
			// speed status effects (can be buff or debuff)
			let oldSpeed = this.speed; // not a compound increase
			for (let i = 0; i < this.statusEffects.length; i++) {
				let statusEffect = this.statusEffects[i];
				if (statusEffect.info.speedIncrease !== undefined) {
					// increase speed if the status effect does so
					// status effect is in percentage
					this.speed += oldSpeed * (statusEffect.info.speedIncrease / 100);
				}
			}

			// frostaura (for enemie only)
			if ((this.hostility === "hostile" || this.hostility === "boss") &&
			Game.hero.stats.frostaura === true && Game.distance(this, Game.hero) < 150) {
				// range of frostaura is currently 2.5 tiles
				this.speed /= 2; // currently applied at end, TBD change?
			}
		}
	}

	// whee! make the character fly away from their current point
	// velocity = pixels thrown per second
	// time = time in SECONDS
	// direction = in RADIANS
	// must be called every tick (often called by stun code in move)
	// velocity, time, and direction ONLY need to be passed in for the first time this function is called
	displace (delta, velocity, time, direction) {
		if (this.isBeingDisplaced === undefined) { // not being displaced yeet
			// init displacement
			this.isBeingDisplaced = {
				time: time,
				velocity: velocity,
				direction: direction,
				elapsed: 0,
			}; // time the player has been displaced for

			// expand by 0.01
			this.setExpand(1.01);

			// stunned status effect
			Game.statusEffects.stun({
				target: this,
				time: time,
				effectTitle: "Displacement",
				effectDescription: "Being displaced",
				onExpire: "removeDisplacement",
			});

			return {x:0, y:0};
		}
		else if (this.isBeingDisplaced.elapsed < this.isBeingDisplaced.time) { // displace player
			// expand
			let newExpand;
			if (this.isBeingDisplaced.time < 1) {
				// small time displace uses different equation
				newExpand = -Math.pow(2*this.isBeingDisplaced.elapsed-this.isBeingDisplaced.time, 2) + Math.pow(this.isBeingDisplaced.time, 2) + 1;
			}
			else {
				newExpand = -Math.pow((2/this.isBeingDisplaced.time)*this.isBeingDisplaced.elapsed-1, 2) + 2;
			}
			// graph for expand over time: https://www.desmos.com/calculator/ygygwjtzwe

			this.setExpand(newExpand);

			// move
			let dirx = Math.cos(this.isBeingDisplaced.direction);
			let diry = Math.sin(this.isBeingDisplaced.direction);
			this.x += dirx * this.isBeingDisplaced.velocity * delta;
			this.y += diry * this.isBeingDisplaced.velocity * delta;

			this.isBeingDisplaced.elapsed += delta;

			return {x:dirx, y:diry};
		}
		else { // displacement finished
			return {x:0, y:0};
		}
	}

	// remove all status effects where statusEffect[key] === value
	// currently untested and unused - be careful when using
	cleanse (value, key) {
		for (let i = 0; i < this.statusEffects.length; i++) {
			if (this.statusEffects[i].key === value) {
				this.removeStatusEffect(i);
				i--; // status effect has been removed so move back index
			}
		}
	}
}

// a version of character that can deal damage
class Attacker extends Character {
	constructor(properties) {
		super(properties);

		// stats
		if (this.stats === undefined) {
			this.stats = {};
		}

		// these stats must have a value
		this.stats.damage = properties.stats.damage;
		this.stats.range = properties.stats.range;
		this.stats.reloadTime = properties.stats.reloadTime; // time in ms to attack again

		// optional stats
		// using || defaults to second value if first is undefined, 0 or ""
		this.stats.damagePercentage = properties.stats.damagePercentage || 0; // bonus damage percentage
		this.stats.criticalChance = properties.stats.criticalChance || 0;
		this.stats.flaming = properties.stats.flaming || 0;
		this.stats.poisonX = properties.stats.poisonX || 0;
		this.stats.poisonY = properties.stats.poisonY || 0;
		this.stats.stun = properties.stats.stun || 0;
		this.stats.variance = properties.stats.variance || 0;
		this.stats.lifesteal = properties.stats.lifesteal || 0;
		this.stats.hex = properties.stats.hex || 0;
		this.stats.penetration = properties.stats.penetration || true; // if projectile damages more than one thing
		// functions
		if (properties.stats.onAttack !== undefined) {
			// bind can only be called if it is not undefined
			this.stats.onAttack = properties.stats.onAttack.bind(this); // bound to this
		}
		this.updateStats = properties.updateStats; // only works for enemies ATM

		// trail (currently just works for hero ATM)
		this.trail = properties.trail;

		// spells
		this.spells = properties.spells || [];
		for (let i = 0; i < this.spells.length; i++) {
			if (this.spells[i].interval !== undefined) {
				this.spells[i].ready = false; // cannot be used until intverval has finished
				setTimeout(function (i) {
					this.spells[i].ready = true;
				}.bind(this), this.spells[i].interval, i);
			}
			else {
				this.spells[i].ready = true;
			}
		}

		// information about projectile
		// only supported for enemies - should be updated to work for player as well (TBD TBD!!!)
		this.projectile = {};
		this.projectile.image = properties.projectile.image;
		// not necessary (can be left as undefined to just fit to projectile image size)
		this.projectile.width = properties.projectile.width;
		this.projectile.height = properties.projectile.height;
		// not necessary (defaults to x: 0 and y: 0 later on if it is undefined)
		this.projectile.adjust = properties.projectile.adjust || {};

		this.canAttack = true; // check attack is not reloading

		Game.allAttackers.push(this); // array for current area only
	}


	// remove whatever is currently being channelled
	// called when the character moves or tries to channel something else
	// reason is set to why the channel was removed (not used yet)
	removeChannelling (reason) {
		if (this.channelling !== false) {
			// remove existing channelling
			if (this.channelling === "fishing") {
				// remove fishing bobber
				Game.removeObject(this.channellingProjectileId, "projectiles", Projectile);
				this.channelling = false;
				this.channellingProjectileId = null;
			}
			else if (this.channelling === "projectile" || this.channelling === "block") {
				this.finishAttack(); // for attack channelling for hero
			}
			else {
				clearTimeout(this.channelling); // might not always be a timeout, but this doesn't matter (does nothing if not a timeout)
				// N.B. this.channelling should never be an int, otherwise clearTimeout *does* mess it up
			}
			// now nothing is being channelled
			this.channelling = false;
			this.channellingInfo = false;
		}
	}

	// channel a function
	// this.channelling is set to the timeout
	// channelling fails (thus the timeout is cleared) if the character's channelling is set to something else or if the user moves
	// parameters must be an array
	// description is a short description shown on the channelling bar
	// description is set to false if a bar should not be shown
	channel (func, parameters, time, description) {
		if (!this.hasStatusEffectType("stun")) { // cannot channel when stunned
			// remove whatever was previously channelled
			this.removeChannelling("channel");
			// add line to remove channelling when channelling expires to the function
			let channelFunction = function (parameters) {
				func(...parameters);
				this.channelling = false;
				this.channellingInfo = false;
			}.bind(this);
			// set channelling to the timeout
			this.channelling = setTimeout(channelFunction, time, parameters);

			// channelling progress bar information
			if (description !== false) {
				// channelling bar should be shown
				this.channellingInfo = {
					description: description,
					time: time,
					start: Date.now(),
				};
			}
		}
	}

	// a simpler channel for spells
	channelSpell (spellName, spellTier, parameters) {
		// add implicit parameters
		parameters.caster = this;
		parameters.tier = spellTier;
		// because parameters is always an object for spells, it is turned into an array for the function call
		this.channel(Game.spells[spellName].func, [parameters], Game.spells[spellName].channelTime[spellTier - 1], FromCamelCase(spellName));
	}

	// collide with solid tiles
	// returns true/false depending on whether it collided or not (currently unused)
	collide (dirx, diry, delta) {
		let row, col;

		// update foot hitbox position
		this.updateFootHitbox();
		let boundaries = this.footHitbox.getBoundaries();

		// check for collisions on sprite sides
		let collision =
			this.map.isSolidTileAtXY(boundaries.left, boundaries.top) ||
			this.map.isSolidTileAtXY(boundaries.right, boundaries.top) ||
			this.map.isSolidTileAtXY(boundaries.right, boundaries.bottom) ||
			this.map.isSolidTileAtXY(boundaries.left, boundaries.bottom);

		// check collision with collisions - invisible entities that cannot be passed
		for (let i = 0; i < Game.collisions.length; i++) {
			// check if the player's feet are touching the collision
			if (this.footHitbox.isTouching(Game.collisions[i])) {
				collision = true;
			}
		}

		if (!collision) {
			// do not carry out the following code if there is no collision
			return collision;
		}

		if (diry > 0) {
			this.y -= this.speed * delta * diry;
		}
		else if (diry < 0) {
			this.y += this.speed * delta * Math.abs(diry);
		}
		if (dirx > 0) {
			this.x -= this.speed * delta * dirx;
		}
		else if (dirx < 0) {
			this.x += this.speed * delta * Math.abs(dirx);
		}

		return collision;
	}
}

//
// Proper Classes (used in-game; ordered from lowest-level to highest-level)
//

// hidden teleport from one area to another
class AreaTeleport extends Entity {
	constructor(properties) {
		super(properties);

		this.teleportTo = properties.teleportTo;
		// either destination or player adjust must be defined (but not both) for both x and y
		this.destinationX = properties.destinationX;
		this.destinationY = properties.destinationY;
		this.playerAdjustX = properties.playerAdjustX;
		this.playerAdjustY = properties.playerAdjustY;

		// the following are ignored if they are undefined
		this.teleportCondition = properties.teleportCondition; // condition for the teleport to work
		this.teleportFailText = properties.teleportFailText; // text if teleportCondition fails
		this.teleportFailFunction = properties.teleportFailFunction; // function if teleportCondition fails
	}
}

// hidden hitbox that calls a function when hits
class Tripwire extends Entity {
	constructor(properties) {
		super(properties);

		this.onPlayerTouch = properties.onPlayerTouch; // function called when touched by player (will be called multiple times)
		// note that onPlayerTouch is bound to the entity (this = entity)
	}
}

// drawn as a rectangle with a colour; is removed after a certain period of time
class Particle extends Entity {
	constructor(properties) {
		super(properties);

		if (properties.colour.constructor === Array) {
			// pick a random colour
			this.colour = properties.colour[Random(0, properties.colour.length-1)];
		}
		else {
			this.colour = properties.colour;
		}

		this.moveTowards = properties.moveTowards; // optional

		// rotation: optional; in radians; distorts coordinates of particle
		if (properties.rotation === "random") {
			// random rotation chosen
			this.rotation = ToRadians(Random(0, 359));
		}
		else {
			this.rotation = properties.rotation;
		}

		this.light = properties.light || false; // if this is set to true, it is drawn on the light canvas

		this.transparency = properties.transparency || 1; // 0 (invisible) to 1 (opaque)
	}
}

// function used to create a particle and add it to the particles array
Game.createParticle = function (properties) {
	if (document.getElementById("particlesOn").checked) { // check particle setting
		// create particle
		let id = Game.nextEntityId; // id of added particle
		let particle = new Particle(properties);
		this.particles.push(particle);
		// set its removal time
		this.objectRemoveTimeouts.push(setTimeout(function (id) {
			// remove the same particle (particle of the same id)
			Game.removeObject(id, "particles", Particle);
		}, properties.removeIn, id)); // pushed to objectRemoveTimeouts so it can be removed when the area is changed
	}
}

// a thing that is a point of information or special interest
class InfoPoint extends Thing {
	constructor(properties) {
		super(properties);

		this.onTouchChat = properties.onTouchChat; // inserted to chat on touch (only inserted once); NOT in the format 'name: chat'
	}
}

// useed for other players through websocket
// TBD revise what this inherits from - uses same functions as other classes
class UserControllable extends Attacker {
	constructor (properties) {
		super(properties);

		this.hidden = true;

		this.userID = properties.userID;

		this.skin = properties.skin;
	}

	// call to load image after constructor
	init () {
		return Loader.loadImage("player"+this.class+this.skin, "./assets/player/" + this.class + this.skin + ".png");
	}

	// called after this.direction is updated
	updateRotation () {
		if (this.direction === 1) {
			this.crop = {
				x: 0,
				y: this.baseHeight,
				width: this.baseWidth,
				height: this.baseHeight
			};
		}

		else if (this.direction === 2) {
			this.crop = {
				x: this.baseWidth,
				y: this.baseHeight,
				width: this.baseWidth,
				height: this.baseHeight
			};
		}

		else if (this.direction === 3) {
			this.crop = {
				x: 0,
				y: 0,
				width: this.baseWidth,
				height: this.baseHeight
			};
		}

		else if (this.direction === 4) {
			this.crop = {
				x: this.baseWidth,
				y: 0,
				width: this.baseWidth,
				height: this.baseHeight
			};
		}
	}
}

// player of the game - similar to Player global variable in saveData.js, but only contains necessary information (also has some cool functions)
class Hero extends Attacker {
	constructor (properties) {
		super(properties);

		// perhaps condense channelling with enemy's canAttack?
		this.channelTime = 0;

		// status effects override - mirror savedata.js' versions
		this.statusEffects = Player.statusEffects;

		// stats
		this.stats.looting = properties.stats.looting;
		this.stats.rangeModifier = properties.stats.rangeModifier; // added to range
		this.stats.domRange = 240; // distance from an entity that a DOM menu may be opened

		// optional stats
		// using || defaults to second value if first is undefined, 0 or ""
		this.stats.focusSpeed = properties.stats.focusSpeed || 0; // archer only
		this.stats.maxDamage = properties.stats.maxDamage; // mage only
		this.stats.blockDefence = properties.stats.blockDefence; // knight only
		this.stats.xpBonus = properties.stats.xpBonus || 0; // perentage

		// fishing stats
		this.stats.fishingSkill = properties.stats.fishingSkill || 0;

		// where the player respawns when they die (set at any major city)
		this.checkpoint = properties.checkpoint || "tutorial";

		// time travel teleport positions
		this.oldPosition = properties.oldPosition; // might be undefined
	}

	move (delta, dirx, diry) { // called when being displaced, moving towards something, or player is moving hero

		this.removeChannelling("move"); // stuff cannot be channelled whilst moving

		let baseSpeed = false; // whether speed should be altered by status effects and slow tiles (false means do alter)
		// if baseSpeed is a number instead, the speed is set to that without setSpeed being called

		// move hero
		if (this.hasStatusEffect("Displacement")) {
			// player being displaced!
			let dir = this.displace(delta);
			dirx = dir.x;
			diry = dir.y;
			if (this.isBeingDisplaced !== undefined) {
				baseSpeed = this.isBeingDisplaced.velocity; // do not run setSpeed
			}
		}
		else if (this.hasStatusEffectType("stun") || this.isCorpse) {
			// player cannot move (any other stun effect)
		}
		else if (this.moveTowards !== undefined) {
			// move towards a particular point
			// player cannot control themselves
			let direction = Game.bearing(this, this.moveTowards);
			dirx = Math.cos(direction);
			diry = Math.sin(direction);

			// movement speed
			this.speed = this.stats.walkSpeed;
			// speed scalar due to moveTowards (decimal value)
			if (this.moveTowards !== undefined && this.moveTowards.speedScalar !== undefined) {
				this.speed *= this.moveTowards.speedScalar;
			}

			this.x += dirx * this.speed * delta;
			this.y += diry * this.speed * delta;

			if (Math.round(this.x) < this.moveTowards.x + 2 && Math.round(this.x) > this.moveTowards.x - 2
			&& Math.round(this.y) < this.moveTowards.y + 2 && Math.round(this.y) > this.moveTowards.y - 2) {
				// destination reached
				// remove moveTowards
				this.moveTowards = undefined;
			}
		}
		else {
			this.x += dirx * this.speed * delta;
			this.y += diry * this.speed * delta;
		}

		// check if we walked into a non-walkable tile
		if (Game.hero.moveTowards === undefined) { // hero should only collide if controlled by player
			this.collide(dirx, diry, delta);
		}

		// set walkspeed for next move() function call
		if (baseSpeed === false || baseSpeed === true) {
			this.setSpeed(baseSpeed);
		}
		else {
			this.speed = baseSpeed;
		}

		// clamp values
		//let maxX = this.map.cols * this.map.tsize;
		//let maxY = this.map.rows * this.map.tsize;
		let maxX = Game.camera.maxX + Game.camera.width;
		let maxY = Game.camera.maxY + Game.camera.height;
		this.x = Math.max(0, Math.min(this.x, maxX));
		this.y = Math.max(0, Math.min(this.y, maxY));
	}

	// start channeling basic attack
	startAttack (e) {
		if (this.canAttack && Player.inventory.weapon.name !== "" && !Player.inventory.weapon.cannotAttack && !this.hasStatusEffectType("stun")) { // checks the player has a weapon and is not currently reloading and is not currently stunned
			// Player.inventory.weapon.cannotAttack is set to true when the projectile image is being loaded (e.g: weapon with special projectile is equipped/unequipped)
			if (!CheckRightClick(e)) {
				// left-click (normal) attack

				// position of projectile
				let projectileX = Game.camera.x + e.clientX - Game.viewportOffsetX;
				let projectileY = Game.camera.y + e.clientY - Game.viewportOffsetY;
				let distanceToProjectile = Game.distance({x: projectileX, y: projectileY,}, this);

				if (Player.inventory.weapon.type === "staff" || Player.inventory.weapon.type === "bow" || Player.inventory.weapon.type === "sword") {
					// player is using conventional weapon

					if (distanceToProjectile < this.stats.range) {
						// player is in range

						this.canAttack = false;

						this.removeChannelling("attack"); // remove anything that was previously channelling

						this.channelling = "projectile";

						let projectileRotate = Game.bearing(this, {x: projectileX, y: projectileY}) + Math.PI / 2;

						let variance = this.stats.variance;
						if (Game.getAttackType() === "bow") { // alter variance based on distance to enemy if the class is archer
							let distanceFraction = distanceToProjectile / 600; // fraction of maximum variance (max variance = Playerstats.variance)
							variance *= distanceFraction;
						}

						this.channellingProjectileId = Game.nextEntityId;

						// tbd make work the same as enemy projectile
						Game.projectiles.push(new Projectile({
							map: map,
							x: projectileX,
							y: projectileY,
							attacker: this,
							targets: [Game.enemies, Game.dummies,],
							rotate: projectileRotate,
							adjust: {
								// manually adjust position (programmed for each projectile in skindata/itemdata)
								x: Game.heroProjectileAdjust.x,
								y: Game.heroProjectileAdjust.y,
								towards: {x: this.x, y: this.y},
							},
							hitbox: { // arrow tip at mouse position
								x: projectileX,
								y: projectileY,
								width: this.class === "k" ? 60 : (this.class === "m" ? 23 : (this.class === "a" ? 10 : 0)),
								height: this.class === "k" ? 60 : (this.class === "m" ? 23 : (this.class === "a" ? 10 : 0)),
							},
							image: Game.heroProjectileName,
							beingChannelled: true,
							variance: variance,
							type: "projectiles",
						}));

						Game.secondary.updateCursor(e); // no longer crosshair because attack is reloading
					}
				}
				else if (Player.inventory.weapon.type === "rod" && this.channelling === false) {
					// fishing rod (bobber has not been cast yet)
					this.fishingBobs = 0; // number of times that the fishing bobber has bobbed
					if (Weather.type === "rain") {
						this.fishingBobs = 1; // faster to get fish when it is raining
					}

					if (distanceToProjectile < this.stats.range && this.map.isSlowTileAtXY(projectileX, projectileY) === "water") {
						// player is in range and clicked in water

						this.channelling = "fishing";

						this.channellingProjectileId = Game.nextEntityId;

						Game.projectiles.push(new Projectile({
							map: map,
							x: projectileX,
							y: projectileY,
							width: 27, // width and height of each individual image
							height: 23,
							image: Game.heroBobberName,
							beingChannelled: true,
							type: "projectiles",
						}));

						// timer for first bob
						let bobTime = Random(1000, 12000);
						if (Weather.type === "rain") {
							// shorter bobTime if it is raining
							bobTime = Math.round(bobTime / 2); // now 500 to 6000
						}
						setTimeout(this.fish.bind(this), bobTime);
					}
				}
				else if (Player.inventory.weapon.type === "rod" && this.channelling === "fishing") {
					// fishing rod (bobber has been cast)

					/*Game.removeObject(this.channellingProjectileId, "projectiles", Projectile); // remove bobber

					this.channelling = false;
					this.channellingProjectileId = null;*/

					// in the future, the player should be able to remove the bobber whilst fishing
				}
				else if (Player.inventory.weapon.type === "rod" && this.channelling.fishingType !== undefined && this.fishingBobs >= 100) { // channelling.type is only defined when it is set to an item (i.e. a fishing item)
					// fishing rod (fish has been caught - player is clicking to pull it up)

					this.fishingBobs++;

					if (this.fishingBobs >= 100 + this.channelling.clicksToCatch) {
						// fish caught

						// quest progress
						Player.quests.questProgress.itemsFishedUp = Increment(Player.quests.questProgress.itemsFishedUp);

						// chat message
						if (this.channelling.fishingType === "fish") { // fish
							Dom.chat.insert("You caught a " + this.channelling.length + "cm <strong>" + this.channelling.name + "</strong>!");
						}
						else if (this.channelling.fishingType === "waterjunk") { // junk item
							Dom.chat.insert("You fished up a <strong>" + this.channelling.name + "</strong>.");
						}
						else if (this.channelling.fishingType === "watermisc") { // misc
							Dom.chat.insert("You reeled up a <strong>" + this.channelling.name + "</strong>.");
						}
						else {
							console.error("It is not known that an item of fishingType " + channelling.fishingType + " can be fished up.");
						}

						// increase fishing skill
						// see fish spreadsheet for algorithm
						// note: if the Game.hero stats were updated in the middle of this code, it **might** ignore some skill that should have been added (overwritten back to old value in savedata.js) - tbd fix this
						// tbd make own function
						let oldFishingSkill = this.stats.fishingSkill; // remember old fishing skill to know if it has changed by a whole number
						// normal fishing skill values
						if (this.channelling.fishingType === "waterjunk") {
							if (this.stats.fishingSkill < FishingLevels[Player.lootArea]) {
								// player's fishing skill is too low to get any other items
								this.stats.fishingSkill++;
							}
						}
						else if (this.channelling.rarity === "common") {
							if (this.stats.fishingSkill >= FishingLevels[Player.lootArea] &&
							this.stats.fishingSkill < FishingLevels[Player.lootArea] + 15) {
								// player has only unlocked commons in this area
								this.stats.fishingSkill++;
							}
							else if (this.stats.fishingSkill >= FishingLevels[Player.lootArea] + 15 &&
							this.stats.fishingSkill < FishingLevels[Player.lootArea] + 30) {
								// player has only unlocked commons and uniques in this area
								this.stats.fishingSkill += 0.5;
							}
							else if (this.stats.fishingSkill >= FishingLevels[Player.lootArea] + 30 &&
							this.stats.fishingSkill < FishingLevels[Player.lootArea] + 45) {
								// player has recently unlocked mythics in this area
								this.stats.fishingSkill += 0.25;
							}
							else {
								// player has outleveled this area
								this.stats.fishingSkill += 0.1;
							}
						}
						else if (this.channelling.rarity === "unique") {
							if (this.stats.fishingSkill >= FishingLevels[Player.lootArea] + 15 &&
							this.stats.fishingSkill < FishingLevels[Player.lootArea] + 30) {
								// player has only unlocked commons and uniques in this area
								this.stats.fishingSkill += 2;
							}
							else if (this.stats.fishingSkill >= FishingLevels[Player.lootArea] + 30 &&
							this.stats.fishingSkill < FishingLevels[Player.lootArea] + 45) {
								// player has recently unlocked mythics in this area
								this.stats.fishingSkill++;
							}
							else {
								// player has outleveled this area
								this.stats.fishingSkill += 0.5;
							}
						}
						else if (this.channelling.rarity === "mythic") {
							if (this.stats.fishingSkill >= FishingLevels[Player.lootArea] + 30 &&
							this.stats.fishingSkill < FishingLevels[Player.lootArea] + 45) {
								// player has recently unlocked mythics in this area
								this.stats.fishingSkill += 3;
							}
							else {
								// player has outleveled this area
								this.stats.fishingSkill++;
							}
						}
						else {
							console.warn("Fishing item " + this.channelling + "currently never gives any fishing skill, but probably should.");
						}

						if (this.channelling.length !== undefined) {
							// player has caught a fish
							// achievement variable
							User.progress.fish = Increment(User.progress.fish);
							// quest variable
							Player.quests.questProgress.fishCaught = Increment(Player.quests.questProgress.fishCaught);
						}

						// give fish
						// must be after quest progress and fishing skill
						let inventoryPosition = Dom.inventory.give(this.channelling);
						// inventory position saved for if onCatch needs it

						// onCatch function
						if (this.channelling.onCatch !== undefined) {
							this.channelling.onCatch(inventoryPosition);
						}

						if (Math.floor(this.stats.fishingSkill) - Math.floor(oldFishingSkill) > 0) { // check if the player's fishing skill has increased to the next integer (or more)
							Dom.chat.insert("Your fishing skill has increased to " + Math.floor(this.stats.fishingSkill) + "."); // notify them of this in chat
						}

						// update player stats
						//Player.stats = Game.hero.stats; // inefficient (should be linked)

						// fish length for fisher's log
						if (this.channelling.length > User.fish[this.channelling.id]) {
							User.fish[this.channelling.id] = this.channelling.length;
						}

						// remove fishing bobber
						Game.removeObject(this.channellingProjectileId, "projectiles", Projectile);
						this.channelling = false;
						this.channellingProjectileId = null;

						Dom.checkProgress();
					}
				}
			}
			else {
				// knight block attack
				if (Game.getAttackType() === "sword") {
					this.channelling = "block";
				}
			}
		}
	}

	// shoot basic attack
	finishAttack (e) {
		if (this.channelling === "projectile") { // check that the player is channelling a projectile (they might not have a weapon equipped so are not channelling, for example)
			this.channelTime = 0;
			this.channelling = false;

			// get projectile
			let shotProjectile = Game.projectiles[Game.searchFor(this.channellingProjectileId, Game.projectiles)];

			// set projectile as not channelling
			shotProjectile.beingChannelled = false;

			shotProjectile.varyPosition(); // vary projectile position based off its variance

			// damage enemies that the projectile is touching
			shotProjectile.dealDamage(shotProjectile.attacker, shotProjectile.targets);

			// function called for all attacks whether they hit an enemy or not
			if (Player.inventory.weapon.onAttack !== undefined) {
			    Player.inventory.weapon.onAttack(shotProjectile);
			}

			// after a timeout (2s), remove the projectile that was just shot
			// this doesn't work if the user attacks too fast, though this shouldn't be a problem...
			let a = this.channellingProjectileId; // maintain a variable of the currently shot projectile
			Game.objectRemoveTimeouts.push(setTimeout(function (a) {
				Game.removeObject(a, "projectiles", Projectile);
			}, 1500, a)); // pushed to objectRemoveTimeouts so it can be removed when the area is changed

			this.channellingProjectileId = null;

			// wait for the player's reload time (1s) until they can attack again
			setTimeout(function () {
				this.canAttack = true;
				// remove beam animation if there was one
				this.beam = undefined;
				// add back crosshair to cursor (if mouse is in range)
				Game.secondary.updateCursor();
			}.bind(this), this.stats.reloadTime);

			// special animations
			if (typeof Skins[Player.class][Player.skin].animations !== "undefined" && typeof Skins[Player.class][Player.skin].animations.onHit !== "undefined") {
				// on attack animation
				let animation = Skins[Player.class][Player.skin].animations.onHit;
				if (animation.type === "beam") {
					// cast a beam to the projectile for 0.5s
					this.beam = {
						x: shotProjectile.x,
						y: shotProjectile.y,
						width: animation.width * shotProjectile.expand,
						colour: animation.colour,
					}
				}
			}

			// update quest log
			Dom.checkProgress();
		}
		else if (this.channelling === "block") {
			this.channelling = false;

			// wait for the player's reload time (1s) until they can attack again
			setTimeout(function () {
				this.canAttack = true;
				// add back crosshair to cursor (if mouse is in range)
				Game.secondary.updateCursor();
			}.bind(this), this.stats.reloadTime);
		}
	}

	// called whenever Game.hero's status effects are updated
	updateStatusEffects () {
		// update secondary canvas (status effects display on it)
		Game.secondary.render();

		// update dom
		Dom.inventory.displayIdentification();
	}

	// map.getTile for Game.hero
	getTileAtFeet () {
		return map.getTile(0, map.getCol(this.x), map.getRow(this.y + this.height/2));
	}

	// called by fishing bobber timeouts
	fish () {
		if (this.channelling === "fishing") {
			if (this.fishingBobs < 7 && this.fishingBobs > -1) {
				// bob fishing bobber every ~1 second
				this.fishingBobs++;

				if (Random(0, 5) < this.fishingBobs) {
					// fish caught

					// increase fishing skill if the player has a fish bait status effect
					let fishingSkill = this.stats.fishingSkill;
					let baitStatusEffectIndex = this.statusEffects.findIndex(statusEffect => statusEffect.title === "Fish bait");
					if (baitStatusEffectIndex !== -1) { // check if player has a bait status effect
						fishingSkill += this.statusEffects[baitStatusEffectIndex].info.skillIncrease;
						this.removeStatusEffect(baitStatusEffectIndex);
					}

					// find what rarities the player can fish up
					// junk is fished up in the proportion not unlocked by common/unique/mythic
					let raritiesAvailable = [];
					if (fishingSkill >= FishingLevels[Player.lootArea]) {
						// can fish up commons
						raritiesAvailable.push("common");
					}
					if (fishingSkill >= FishingLevels[Player.lootArea] + 15) {
						// can fish up uniques
						raritiesAvailable.push("unique");
					}
					if (fishingSkill >= FishingLevels[Player.lootArea] + 30) {
						// can fish up mythics
						raritiesAvailable.push("mythic");
					}

					// pick a random rarity from the raritiesAvailable array
					let RandomNum = Random(0, 7);
					let itemRarity = "";
					if (RandomNum === 0) {
						// 1 in 8 chance for a mythic
						itemRarity = "mythic";
					}
					else if (RandomNum < 3) {
						// 2 in 8 chance for a unique
						itemRarity = "unique";
					}
					else {
						// 5 in 8 chance for a common
						itemRarity = "common";
					}
					// check if the player has unlocked that rarity, otherwise give them a junk item
					if (!raritiesAvailable.includes(itemRarity)) {
						itemRarity = "junk";
					}

					// find the fish that should be caught
					let fish = Items.fish;
					fish = fish.filter(item => item.areas.includes(Player.lootArea) || item.areas.includes(Game.areaName) || item.areas.length === 0); // filter for area (either lootArea or areaName)
					if (baitStatusEffectIndex !== -1 &&
					(Player.quests.questProgress.fishCaught === 0 || Player.quests.questProgress.fishCaught === undefined)) {
						// player is using fishing bait but has never caught a fish before
						// guaranteed common fish!
						fish = fish.filter(item => item.fishingType === "fish" && item.rarity === "common");
					}
					else {
						fish = fish.filter(item => item.rarity === itemRarity); // filter for rarity (see above)
					}
					fish = fish.filter(item => item.timeRequirement === undefined || Event.time === item.timeRequirement); // filter for time that it can be fished up
					fish = fish.filter(item => item.catchRequirement === undefined || item.catchRequirement()); // filter for general fishing requirement
					if (fish.constructor === Array) {
						// still more fish to pick from
						fish = fish[Random(0, fish.length - 1)]; // Random fish that fulfils requirements above
					}
					fish = { ...fish }; // remove all references to itemdata in fish variable (otherwise length value changed in this will also affect itemData)!

					// calculate time to catch fish and clicks needed for fish
					// see fish spreadsheet for how this is figured out
					// should be moved to its own (recursive?) function
					let clicks = 0;
					let time = 0; // in ms
					if (fish.fishingType === "waterjunk") { // junk fishing item (uses different algorithm for clicks and time)
						clicks = 1;
						time = 1000;
					}
					else if (fish.fishingType === "watermisc") { // misc fishing item (no length, so clicks and time specified in itemdata)
						clicks = fish.clicksToCatch;
						time = fish.timeToCatch;
					}
					else { // fish
						// calculate fish length
						// between min and max; biased towards average
						let fishLength = Round(BiasedRandom(fish.length.min, fish.length.max, fish.length.avg, 1));
						fish.length = fishLength; // replace length object with an integer saying the fish's length

						// clicks
						if (fishLength / 25 >= 4) {
							clicks += 4;
							fishLength -= 100;

							if (fishLength / 50 >= 4) {
								clicks += 4;
								fishLength -= 200;

								if (fishLength / 75 >= 4) {
									clicks += 4;
									fishLength -= 300;

									if (fishLength / 100 >= 4) {
										clicks += 4;
										fishLength -= 400;
										console.error("Fish length " + fish.length + " is not accounted for being so large!");
									}
									else {
										clicks += Math.floor(fishLength / 100);
									}

								}
								else {
									clicks += Math.floor(fishLength / 75);
								}

							}
							else {
								clicks += Math.floor(fishLength / 50);
							}

						}
						else {
							clicks += Math.floor(fishLength / 25);
							if (clicks === 0) {
								clicks = 1; // clicks needed defaults to 1
							}
						}
						// time
						if (fish.rarity === "common") {
							time += 500 + 500 * clicks;
						}
						if (fish.rarity === "unique") {
							time += 300 + 300 * clicks;
						}
						if (fish.rarity === "mythic") {
							time += 200 + 200 * clicks;
						}
					}
					fish.clicksToCatch = clicks;

					// fish finished! time for player to fish it up...
					this.channelling = fish;
					this.fishingBobs = 100; // fishingBobs is used to see how many clicks the player has done when it is >= 100

					Game.projectiles[Game.searchFor(this.channellingProjectileId, Game.projectiles)].imageNumber = 2; // submerged image for projectile

					// timer for player clicks
					setTimeout(function (fish) {
						if (this.channelling === fish) { // fish has not been caught
							// remove fishing bobber
							Game.removeObject(this.channellingProjectileId, "projectiles", Projectile);
							this.channelling = false;
							this.channellingProjectileId = null;
						}
					}.bind(this), time, fish);
				}
				else {
					// timer for next bob
					let bobTime = Random(500, 1500);
					setTimeout(this.fish.bind(this), bobTime);

					// set bobbing image (and set it back in 200ms)
					// tbd make searchFor only need to be run once (for efficiency)
					Game.projectiles[Game.searchFor(this.channellingProjectileId, Game.projectiles)].imageNumber = 1; // bobbing image for projectile
					setTimeout(function () {
						Game.projectiles[Game.searchFor(this.channellingProjectileId, Game.projectiles)].imageNumber = 0; // set image back to normal after 150ms
					}.bind(this), 200);
				}
			}
		}
	}

	// teleport to x y position
	teleport (x, y) {
		this.x = x;
		this.y = y;
		setTimeout(function(){
			Weather.reset();
		}.bind(Weather), 10); // timeout is used because the weather is not updated for a tick
	}

	preRenderFunction () {
		// if player is stealthed, draw them partially transparent
		if (this.stats.stealthed) {
			Game.ctx.globalAlpha = 0.6;
		}
		return true;
	}

	postRenderFunction () {
		// reset globalAlpha in case it was changed by preRenderFunction due to stealth
		Game.ctx.globalAlpha = 1;
	}

	// called after this.direction is updated
	updateRotation () {
		if (this.direction === 1) {
			this.crop = {
				x: 0,
				y: this.baseHeight,
				width: this.baseWidth,
				height: this.baseHeight
			};
		}

		else if (this.direction === 2) {
			this.crop = {
				x: this.baseWidth,
				y: this.baseHeight,
				width: this.baseWidth,
				height: this.baseHeight
			};
		}

		else if (this.direction === 3) {
			this.crop = {
				x: 0,
				y: 0,
				width: this.baseWidth,
				height: this.baseHeight
			};
		}

		else if (this.direction === 4) {
			this.crop = {
				x: this.baseWidth,
				y: 0,
				width: this.baseWidth,
				height: this.baseHeight
			};
		}
	}
}

// any projectile
class Projectile extends Thing {
	constructor(properties) {
		super(properties);

		this.z = properties.z || 1; // appears on top by default (z would normally be 0)

		this.attacker = properties.attacker || {
			stats: properties.stats, // for if projectile deals its own damage
		};
		this.targets = properties.targets; // should be array

		this.variance = properties.variance || 0; // diameter of circle that it could fall into

		this.rotate = properties.rotate || 0;

		this.beingChannelled = properties.beingChannelled || false;

		// set width and height to death image dimensions unless otherwise specified
		this.width = properties.width || this.image.width;
		this.height = properties.height || this.image.height;

		// adjust position to make it move towards a point (e.g: move arrow so that the point hits the target
		if (properties.adjust === undefined) {
			properties.adjust = {}; // stop undefined error from trying to set adjust x/y/towards
		}
		this.adjust = {
			x: properties.adjust.x || 0,
			y: properties.adjust.y || 0,
			towards: properties.adjust.towards || {x:0,y:0},
		};

		// custom hitbox
		if (properties.hitbox !== undefined) {
			this.hitbox = {
				x: properties.hitbox.x,
				y: properties.hitbox.y,
				width: properties.hitbox.width,
				height: properties.hitbox.height,
			}
		}

		// position the projectile should move towards
		// this object should contain an x and y if you want the projectile to move
		// could be set to an enemy, for example, if you want the projectile to home into that enemy
		this.moveTowards = properties.moveTowards;
		// speed is multiplied by delta like other speeds
		this.moveSpeed = properties.moveSpeed;

		this.damageDealt = []; // array of damages dealt to show
	}

	// deal damage to array of entities (to)
	// attacker = whose stats to use when dealing damage
	// to = array of arrays of objects to deal damage to
	// make sure that attacker and to are at least Characters in the inheritance chain (not Entities or Things)
	// hence, if you want to damage a single target still put it in an array, e.g: dealDamage(attacker, [[Game.hero]])
	dealDamage (attacker, to) {
		let endLoops = false; // set to true if loops should be ended (e.g. after dealing damage with penetration = false)

		for (let i = 0; i < to.length && !endLoops; i++) { // iterate through arrays of objects in to
			// the following loop is iterated through backwards so that, if there is no penetration, the top enemy is hit not bottom
			for (let x = to[i].length-1; x >= 0 && !endLoops; x--) { // iterate through objects in to

				Game.updateScreenPosition(this); // update projectile position

				if (this.isTouching(to[i][x]) && !to[i][x].respawning) { // check projectile is touching character it wants to damage

					if (Random(0, 99) < to[i][x].stats.dodgeChance) { // hit dodged
						this.damageDealt.push({enemy: to[i][x], damage: "hit dodged", critical: false});
					}
					else {
						// damage
						let blockDefence = 0;
						if (to[i][x].channelling === "block") { // add block defence if the target is blocking
							blockDefence = to[i][x].stats.blockDefence;
						}

						let attackerDamage = attacker.stats.damage;

						// increase base damage based on damagePercentage
						attackerDamage *= 1 + (attacker.stats.damagePercentage/100);

						// calculate damage based on channelling time (if the attacker is a mage)
						if (attacker.stats.maxDamage !== undefined && attacker.stats.maxDamage > attacker.stats.damage) {
							// increase max damage based on damagePercentage
							let maxDamage = attacker.stats.maxDamage;
							maxDamage *= 1 + (attacker.stats.damagePercentage/100);

							// this.expand - 1 = a number from 0 to 1
							// multiply the extra damage gained by maxDamage by this fraction to see the extra damage dealt
							let a = (maxDamage - attackerDamage); // possible extra damage
							let b = Round(this.expand) - 1; // multiplier
							let c = a * b; // extra damage dealt
							attackerDamage += c;
						}

						// blood moon - enemies deal more damage
						if (Event.time === "bloodMoon" &&
						(attacker.hostility === "hostile" || attacker.hostility === "boss")) {
							attackerDamage *= 3;
						}

						let targetDefence = to[i][x].stats.defence + blockDefence; // calculate target defence

						// defence status effect
						to[i][x].statusEffects.forEach(statusEffect => {
							if (statusEffect.info.defenceIncrease !== undefined) {
								// increase defence if the status effect does so
								// check what the attacker's species is (or that status effect is not geared towards a certain subspecies)
								if (statusEffect.info.subSpecies === undefined || attacker.subSpecies === statusEffect.info.subSpecies) {
									targetDefence *= 1 + (statusEffect.info.defenceIncrease / 100);
								}
							}
						});

						// defence
						let dmgDealt = attackerDamage - (targetDefence / 10);
						if (dmgDealt < 0) {
							dmgDealt = 0;
						}

						// attackDamage status effect
						attacker.statusEffects.forEach(statusEffect => {
							if (statusEffect.info.damageIncrease !== undefined) {
								// increase damage dealt if the status effect does so
								dmgDealt *= 1 + (statusEffect.info.damageIncrease / 100);
								if (dmgDealt < 0) {
									dmgDealt = 0;
								}
							}
						});

						let critical = false
						if (Random(0, 99) < attacker.stats.criticalChance) { // critical hit
							dmgDealt *= 2
							critical = true;
						}

						// deal the damage!
						to[i][x].takeDamage(dmgDealt);
						this.damageDealt.push({enemy: to[i][x], damage: dmgDealt, critical: critical});

						// lifesteal
						let lifestealPercentage = attacker.stats.lifesteal;
						// check for status effects that increase lifesteal
						attacker.statusEffects.forEach(statusEffect => {
							if (statusEffect.info.lifestealIncrease !== undefined) {
								// increase lifesteal percentage if the status effect does so
								lifestealPercentage += statusEffect.info.lifestealIncrease;
							}
						});
						// do lifesteal stuff
						if (lifestealPercentage > 0) {
							Game.restoreHealth(attacker, dmgDealt * (attacker.stats.lifesteal / 100));
						}

						// poison
						if (attacker.stats.poisonX > 0 && attacker.stats.poisonY > 0) { // check if target weapon has poison
							Game.statusEffects.poison({
								target: to[i][x],
								poisonDamage: attacker.stats.poisonX,
								time: attacker.stats.poisonY,
							});
						}

						// flaming
						if (attacker.stats.flaming > 0) { // check if target weapon has flaming
							Game.statusEffects.fire({
								target: to[i][x],
								tier: attacker.stats.flaming,
							});
						}

						// reflection
						if (to[i][x].stats.reflection > 0) { // check if target has reflection
							attacker.takeDamage(dmgDealt * (to[i][x].stats.reflection / 100))
						}

						// stun
						if (attacker.stats.stun > 0) { // check if target weapon has stun
							Game.statusEffects.stun({target: to[i][x], time: attacker.stats.stun});
						}

						// hex
						if (Random(0, 99) < attacker.stats.hex) { // check if target weapon has hex
							Game.statusEffects.hex({target: to[i][x]});
						}

						// spread any curse status effects
						Game.spreadCurse(attacker, to[i][x])

						// re-render the second canvas if the hero has been damaged
						if (to[i][x] == Game.hero) {
							Game.secondary.render();
						}

						// onHit function
						// perhaps make work for other non-weapon things in the future? (TBD)
						// there should be a good system for this - maybe a list of functions called on attack or something, handled by Game.inventoryUpdate
						if (attacker == Game.hero && Player.inventory.weapon.onHit !== undefined) {
							Player.inventory.weapon.onHit(to[i][x]);
						}

						// chat relating to being damaged (and dealing damage? TBD)
						if (typeof to[i][x].chat !== "undefined") { // check the character has been given text to say about being damaged
							if (to[i][x].health < to[i][x].stats.maxHealth / 10 && typeof to[i][x].chat.tenPercentHealth !== "undefined") { // 10% health chat message
								to[i][x].say(to[i][x].chat.tenPercentHealth, 0, true);
							}
							else if (to[i][x].health < to[i][x].stats.maxHealth / 2 && typeof to[i][x].chat.fiftyPercentHealth !== "undefined") { // 50% health chat message
								to[i][x].say(to[i][x].chat.fiftyPercentHealth, 0, true);
							}
							else if (to[i][x].health < to[i][x].stats.maxHealth && typeof to[i][x].chat.firstDamaged !== "undefined") { // first damaged chat message
								to[i][x].say(to[i][x].chat.firstDamaged, 0, true);
							}
						}

						// remove attacker's stealth
						if (attacker.stats.stealthed) {
							attacker.stats.stealthed = false;
							Game.removeStealthEffects(attacker);
						}
						// remove target's stealth
						if (to[i][x].stats.stealthed) {
							to[i][x].stats.stealthed = false;
							Game.removeStealthEffects(to[i][x]);
						}

						if (to[i][x] == Game.hero || attacker == Game.hero) {
							// remove any food status effects (hero is in combat)
							for (let i = 0; i < Game.hero.statusEffects.length; i++) {
								if (Game.hero.statusEffects[i].image === "food") {
									// food status effect; remove it
									Game.hero.removeStatusEffect(i);
									i--;
								}
							}
						}
					}

					if (attacker.stats.penetration === false) {
						// only one enemy should be damaged
						endLoops = true;
					}
				}
			}
		}
	}

	// move projectile to Random position in circle, where circle is its variance
	varyPosition () {
		if (this.variance !== undefined) {
			if (this.variance > 0) {
				let RandomDistance = Random(0, this.variance * this.variance);
				let RandomAngle = Random(0, Math.PI * 2);
				this.x += Math.sqrt(RandomDistance) * Math.cos(RandomAngle);
				this.y += Math.sqrt(RandomDistance) * Math.sin(RandomAngle);

				if (this.hitbox !== undefined) { // move special hitbox
					this.hitbox.x += Math.sqrt(RandomDistance) * Math.cos(RandomAngle);
					this.hitbox.y += Math.sqrt(RandomDistance) * Math.sin(RandomAngle);
				}
			}
		}
	}

	// carry out before image render
	preRenderFunction() {
		if (Game.getAttackType() === "bow" && this.beingChannelled && Game.hero.channelling === "projectile") {
			// show archer red circle instead of projectile if they are currently channelling it
			Game.ctx.strokeStyle = "red";
			Game.ctx.beginPath();
			Game.ctx.arc(this.hitbox.screenX, this.hitbox.screenY, this.variance, 0, 2*Math.PI);
			Game.ctx.stroke();

			return false; // don't render the projectile's image
		}

		else {
			// render projectile normally
			if (Game.getAttackType() === "staff" && this.beingChannelled && Game.hero.channelling === "projectile") {
				// mage projectiles are transparent when being channelled
				Game.ctx.globalAlpha = 0.6;
			}

			return true; // do render the image
		}
	}

	// carry out after image render
	postRenderFunction() {
		// shows damage dealt by projectile
		for (let x = 0; x < this.damageDealt.length; x++) {
			// formatting
			if (this.damageDealt[x].critical) {
				Game.ctx.fillStyle = "rgb(255, 0, 0)"; // maybe use rgba to make it fade away?
			}
			else {
				Game.ctx.fillStyle = "rgb(0, 0, 0)"; // maybe use rgba to make it fade away?
			}
			Game.ctx.textAlign = "left";
			Game.ctx.font = "18px El Messiri";

			let damage = this.damageDealt[x].damage;
			if (damage !== "hit dodged") {
				damage = Round(damage); // round damage to 1d.p. if it is an integer value
			}

			Game.ctx.fillText(damage, this.screenX, this.screenY);
		}

		Game.ctx.globalAlpha = 1; // restore transparency if it was changed by preRenderFunction (e.g: mage channelled projectile)
	}
}

// quest NPC (to be merged with merchant)
class NPC extends Character {
	constructor(properties) {
		super(properties);

		this.roles = properties.roles; // array of objects, containing anything that can happen when the NPC is touched
	}
}

// person that just moves around and does nothing of use (to be what merchant/quest NPC inherit off)
// currently doesn't move properly
class Villager extends Character {
	constructor(properties) {
		super(properties);

		this.wait = 0; // total time spent waiting

		this.boundary = properties.boundary; // object of circle or rectangle that the npc cannot walk out of (specified by type: "ellipse")
		// currently just rect
		//https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/ellipse
	}

	// organises movement
	update (delta) {
		// check if the NPC's movement state needs to be reassigned
		if (this.state === undefined) { // state has never been assigned
			if (Random(1,2) === 1) {
				this.initWaitState();
			}
			else {
				this.initMoveState();
			}
		}

		// movement
		else if (this.state.type === "move") {

			if (this.xInRange() && this.yInRange()) {
				// movement destination reached (to nearest 10px)
				this.initWaitState();
			}

			else { // move towards destination
				this.move(delta);
			}

		}

		// waiting
		else if (this.state.type === "wait") {

			if (this.state.waitElapsed >= this.state.waitTime) {
				// waiting duration reached
				this.initMoveState();
			}

			else { // wait
				this.state.waitElapsed += delta;
				// ...
			}
		}
	}

	initMoveState() {
		this.state = {};
		this.state.location = {
			x: Random(this.boundary.x, this.boundary.x + this.boundary.width),
			y: Random(this.boundary.y, this.boundary.y + this.boundary.height),
		}
		this.state.type = "move";
	}

	initWaitState() {
		this.state = {};
		this.state.waitTime = Random(2, 30); // in seconds (mesured with delta)
		this.state.waitElapsed = 0;
		this.state.type = "wait";
	}

	move (delta) {
		this.setSpeed();

		this.bearing = Game.bearing(this, {x: this.state.location.x, y: this.state.location.y}); // update bearing (maybe doesn't need to be done every tick?)

		// move if not too close to target
		if (!this.xInRange()) {
			this.x += Math.cos(this.bearing) * this.speed * delta;
		}
		if (!this.yInRange()) {
			this.y += Math.sin(this.bearing) * this.speed * delta;
		}
	}

	// check if movement should be stopped (x or y are in range to nearest 10)
	xInRange () {
		return Math.round(this.x / 10) === Math.round(this.state.location.x / 10);
	}
	yInRange () {
		return Math.round(this.y / 10) === Math.round(this.state.location.y / 10);
	}
}

// training enemy; displays damage taken rather than health
// e.g: target dummy
class Dummy extends Character {
	constructor(properties) {
		super(properties);
	}
}

// moves and attacks in a hostile way...
class Enemy extends Attacker {
	constructor(properties) {
		super(properties);

		// rotation image names (tbd move to character)
		// properties.rotationImages should be an object with "up", "down", "Left", and "right"
		this.setRotationImageVariables(properties.rotationImages);

		// combat traits (specific to enemy)
		this.leashRadius = properties.leashRadius; // how far away the player has to be for the enemy to stop following them

		// stats
		this.stats.alwaysMove = properties.stats.alwaysMove || false; // move even when in range

		this.deathImage = Loader.getImage(properties.deathImage); // corpse image
		// set width and height to death image dimensions unless otherwise specified
		this.deathImageWidth = properties.deathImageWidth || this.deathImage.width;
		this.deathImageHeight = properties.deathImageHeight || this.deathImage.height;


		// lootTable: an array of objects for each loot item - these objects contain the item ("item") and chances of looting them ("chance")
		// if properties.lootTableTemplate is an array of lootTables (more than one template), merge them
		let lootTableTemplate = [];
		if (properties.lootTableTemplate !== undefined) {
			for (let i = 0; i < properties.lootTableTemplate.length; i++) {
				lootTableTemplate = lootTableTemplate.concat(properties.lootTableTemplate[i]);
			}
		}
		// merge the arrays properties.lootTable and properties.lootTableTemplate
		if (properties.lootTable !== undefined) {
			this.lootTable = properties.lootTable.concat(lootTableTemplate);
		}
		else {
			this.lootTable = lootTableTemplate;
		}
		// merge the loot table with the global loot table as well
		if (this.hostility === "hostile") {
			this.lootTable = this.lootTable.concat(EnemyLootTables.global);
		}
		else if (this.hostility === "boss") {
			this.lootTable = this.lootTable.concat(BossLootTables.global);
		}
		// see generateLoot() function in Enemy for how the lootTable works

		this.xpGiven = properties.xpGiven;

		this.inventorySpace = properties.inventorySpace;

		// set when the enemy dies
		this.loot = null; // loot that can be picked up by player (null if the player cannot loot the enemy or already has)
		// loot is an array of objects, where the object has properties item and quantity

		/* array of objects, where objects are in following format:
		{
			arrayName: (name of array in Game, i.e. "things" for Game.things)
			objectName: (optional, objects of only a specific name in that array)
			isTouchingFunction: (passed in object index as parameter, bound to this using call)
		}*/
		this.checkTouching = properties.checkTouching;

		// boss stuff
		if (this.hostility === "boss") {
			this.bossKilledVariable = properties.bossKilledVariable; // set to date killed to check it hasn't been killed today
		}
	}

	// rotation image names (tbd move to character)
	// these are the key names of the images in loader
	// not all of these need to exist - the best one will be picked (see below)
	// tbd make more efficient?
	setRotationImageVariables (imageKeyNames) {
		if (imageKeyNames !== undefined) {
			this.rotationImages = {
				left: imageKeyNames.left,
				right: imageKeyNames.right,
				up: imageKeyNames.up,
				down: imageKeyNames.down,
			};

			if (this.rotationImages.left !== undefined &&
			this.rotationImages.right !== undefined &&
			this.rotationImages.up !== undefined &&
			this.rotationImages.down !== undefined) {
				// all 4 directions
				this.rotationImageChange = "all";
			}
			else if (this.rotationImages.left !== undefined &&
			this.rotationImages.right !== undefined &&
			this.rotationImages.up === undefined &&
			this.rotationImages.down === undefined) {
				// just left and right directions
				this.rotationImageChange = "leftRight";
			}
			else if (this.rotationImages.left === undefined &&
			this.rotationImages.right === undefined &&
			this.rotationImages.up !== undefined &&
			this.rotationImages.down !== undefined) {
				// just up and down directions
				this.rotationImageChange = "upDown";
			}
			else {
				// irregular pattern of images found
				console.warn(this.name + " has an unknown selection of rotation images set.");
				this.rotationImageChange = "none";
			}
		}
		else {
			// no rotation image changing
			this.rotationImages = undefined;
			this.rotationImageChange = "none";
		}
	}

	update (delta) {
		if (this.hasStatusEffect("Displacement")) {
			// being displaced!
			this.displace(delta);
		}
		else if (this.hasStatusEffectType("stun")) {
			// enemy is stunned
		}
		else {
			// perhaps condense into hostile and passive ai functions (that also apply to things like villagers)?

			// update stats function (might be used to set the value of range, etc.)
			if (this.updateStats !== undefined) {
				this.updateStats();
			}

			if (this.channelling === false) {
				// stuff should only be done if it does not cancel something that is being channelled

				let dist = Game.distance(this, Game.hero);

				// find a spell that is not on cooldown and can be cast
				// TBD enemy mana
				let spellIndex = -1;
				if (this.spells.length !== 0) {
					// enemy has some spells
					spellIndex = this.spells.findIndex(spell => spell.ready &&
						(spell.castCondition === undefined || spell.castCondition()));
				}

				if (spellIndex !== -1) {
					// a spell has been found that can be cast
					let spell = this.spells[spellIndex];
					// no longer ready
					spell.ready = false;
					// cast the spell
					this.channelSpell(spell.name, spell.tier, spell.parameters());
					// spell interval (how often it is cast by enemy)
					setTimeout(function (spellIndex) {
						this.spells[spellIndex].ready = true;
					}.bind(this), spell.interval, spellIndex);
				}

				else if (dist < this.stats.range && // hero is within range
				(!Game.hero.stats.stealthed || this.isTouching(Game.hero))) { // hero is not stealthed OR they are and you are touching them
					// enemy should attack hero
					// canAttack is inside if statement because otherwise the enemy moves when it is in range but cannot attack
					if (this.canAttack) { // projectile can be shot
						this.shoot([[Game.hero],]);
					}
					// alwaysMove stat means that it always moves even when in range
					else if (this.stats.alwaysMove &&
					dist > 20 && // stop any stuttering on top of hero
					dist < this.leashRadius) { // not outside of leashRadius from hero
					!Game.hero.stats.stealthed && // hero is not stealthed
						this.move(delta, Game.hero);
					}
				}

				else if (dist > this.leashRadius) { // enemy should move passively
					// passive movement within given (to be given...) boundaries...
				}

				else if (dist < this.leashRadius && // not outside of leashRadius from hero
				dist > this.stats.range && // can't yet attack hero
				!Game.hero.stats.stealthed) { // hero is not stealthed
					// enemy should move towards hero
					this.move(delta, Game.hero);
				}

			}

		}

		// if player has a magnet, pull in enemies (even if enemy is stunned or displaced)
		// this effect stacks!
		for (let i = 0; i < Player.inventory.items.length; i++) {
			if (Player.inventory.items[i].magnetism !== undefined) {
				let d = Player.inventory.items[i].range - Game.distance(this, Game.hero);
				if (d > 0) {
					// in range
					let b = Game.bearing(this, Game.hero);
					let speed = Items.item[15].magnetism * (d / Player.inventory.items[i].range);
					this.x += Math.cos(b) * speed * delta;
					this.y += Math.sin(b) * speed * delta;
				}
			}
		}
	}

	// move towards entity (towards parameter)
	move (delta, towards) {
		// figure out speed
		this.setSpeed();

		this.bearing = Game.bearing(this, towards); // update bearing (maybe doesn't need to be done every tick?)

		let dirx = Math.cos(this.bearing);
		let diry = Math.sin(this.bearing);

		// set image based on direction of movement if there are multiple rotation images
		this.setRotationImage(dirx, diry);

		this.x += dirx * this.speed * delta;
		this.y += diry * this.speed * delta;

		// collide with solid tiles
		this.collide(dirx, diry, delta);
	}

	// set image based on direction of movement if there are multiple rotation images
	setRotationImage (dirx, diry) {
		if (this.rotationImageChange !== "none") {
			if (this.rotationImageChange === "upDown" || // only up down images exist for this NPC
			(this.rotationImageChange === "all" && // OR all images exist AND...
			Math.abs(diry) > Math.abs(dirx))) { //...there is more up down movement than left right
				// up down movement
				if (diry > 0) {
					// up movement
					this.setImageMovement(this.rotationImages.up);
					this.direction = 1;
				}
				else {
					// down movement
					this.setImageMovement(this.rotationImages.down);
					this.direction = 3;
				}
			}
			else {
				// left right movement
				if (dirx > 0) {
					// right movement
					this.setImageMovement(this.rotationImages.right);
					this.direction = 4;
				}
				else {
					// left movement
					this.setImageMovement(this.rotationImages.left);
					this.direction = 2;
				}
			}
		}
	}

	// shoot projectile at array of arrays of enemies (at)
	// currently just the first thing in at is shot at - tbd
	shoot (at) {
		this.canAttack = false;

		let projectileX, projectileY, projectileRotate;

		projectileX = at[0][0].x;
		projectileY = at[0][0].y;
		projectileRotate = Game.bearing(this, {x: projectileX, y: projectileY}) + Math.PI / 2;

		// set image based on direction of projectile (if there are multiple rotation images for this character)
		// sin and cos wrong direction because pi/2 was added to it
		this.setRotationImage(Math.sin(projectileRotate), Math.cos(projectileRotate));

		this.channellingProjectileId = Game.nextEntityId;

		// save projectile into variable
		let shotProjectile = new Projectile({
			map: map,
			x: projectileX,
			y: projectileY,
			attacker: this,
			targets: at,
			width: this.projectile.width,
			height: this.projectile.height,
			rotate: projectileRotate,
			adjust: {
				x: this.projectile.adjust.x || undefined,
				y: this.projectile.adjust.y || undefined,
				towards: this.projectile.adjust.towards || undefined,
			},
			image: this.projectile.image,
			variance: this.stats.variance,
			type: "projectiles"
		});
		shotProjectile.varyPosition(); // move projectile based on its variance

		Game.projectiles.push(shotProjectile); // add projectile to array of projectiles

		// damage allies that the projectile is touching
		shotProjectile.dealDamage(this, at);

		// onAttck function for enemy
		if (this.stats.onAttack !== undefined) {
			this.stats.onAttack();
		}

		// wait to shoot next projectile
		setTimeout(function () {
			this.canAttack = true;
		}.bind(this), this.stats.reloadTime);

		// after a timeout (2s), remove the projectile that was just shot
		// taken from Player
		let a = this.channellingProjectileId; // maintain a variable of the currently shot projectile
		Game.objectRemoveTimeouts.push(setTimeout(function (a) {
			Game.removeObject(a, "projectiles", Projectile);
		}, 1500, a)); // pushed to objectRemoveTimeouts so it can be removed when the area is changed

		this.channellingProjectileId = null;
	}

	// generate loot from lootTable (called when enemy dies or a chest is added)
	generateLoot (lootTable) {
		if (this.loot === null) {
			let loot = Game.generateLoot(lootTable);
			loot = Game.formatLoot(loot);
			this.loot = Game.positionLoot(loot, this.inventorySpace);
		}
		else {
			console.error("Expected this.loot to be null, however it was not. Loot has not been generated.");
		}
	}
}

// can be looted
class LootChest extends Thing {
	constructor(properties) {
		super(properties);

		let loot = properties.loot; // items contained and their quantities
		this.inventorySpace = properties.inventorySpace;

		// format and position loot
		loot = Game.formatLoot(loot);
		this.loot = Game.positionLoot(loot, this.inventorySpace);

		this.disappearAfterOpened = properties.disappearAfterOpened; // whether it should hide straight after being looted (hence deleting any remaining loot)

		this.canBeLooted = properties.canBeLooted; // optional function (returns false if the item is still shown but shouldn't be looted)

		this.chestKey = properties.chestKey; // the item required to open the chest (and removed once it is opened)
		// if the chest cannot be opened because of the lack of a key, the player is told about this in chat

		// chest is locked if the chest requires a chestKey
		// note that this property is reset on areaChange (hence the chest has either been removed or will be locked again when the player returns)
		this.locked = false;
		if (this.chestKey !== undefined) {
			this.locked = true;
		}
	}

	openLoot (arrayIndex) {
		Dom.choose.page(this, ["Loot chest"], [function (chest) {
			Dom.loot.page(chest.name, chest.loot);
			Dom.loot.currentId = "c"+arrayIndex;
			// "c"+i is a string that allows the loot menu to be identified - c means chest, and arrayIndex is the index of the enemy in Game.chests
			// the loot menu closes when the area changes anyway, so this will always work
			// Dom.loot.currentId is only ever used in main, in the function Game.lootClosed() (called by index.html)
		}], [[this]]);
	}
}

// can be looted
class Cannon extends Thing {
	constructor(properties) {
		super(properties);

		this.firingStatus = 0; // 0 = not loaded; 1 = loaded

		this.canBeInteractedWith = true; // set to false during timeout

		this.levelRequirement = properties.levelRequirement; // level requirement to use cannon
		// maybe introduce quest requirement in future?
	}

	interact () {
		if (this.canBeInteractedWith) {
			if (this.firingStatus === 0) {
				// load cannon
				this.firingStatus = 1;
				this.canBeInteractedWith = false;
				setTimeout(function () {
					this.canBeInteractedWith = true;
				}.bind(this), 1000);
			}
			else if (this.firingStatus === 0) {
				// fire cannon
				this.firingStatus = 0;
				this.canBeInteractedWith = false;

				// cannonball
				Game.things.push(new Thing({
					//image: ,
					name: "Cannonball",
					x: this.x,
					y: this.y,
					type: "thing",
				}));

				setTimeout(function () {
					this.canBeInteractedWith = true;
				}.bind(this), 1000);
			}
		}
	}
}

// can be opened for mail
class Mailbox extends Thing {
    constructor(properties) {
        super(properties);

        // image key names displayed when read/unread
        this.readImage = properties.readImage;
        this.unreadImage = properties.unreadImage;
    }
}

//
// Camera
//

class Camera extends Entity {
	constructor(properties) {
		super(properties);

		// set maxX and maxY variables, the maximum x and y positions of the camera
		this.setMaxClampValues();
	}

	// maximum x and y positions
	// sets this.maxX and this.maxY
	setMaxClampValues () {
		if (this.map.scrollX === false) {
			// do not scroll in the x axis
			this.maxX = 0;
		}
		else {
			this.maxX = this.map.cols * this.map.tsize - this.width;
		}

		if (this.map.scrollY === false) {
			// do not scroll in the y axis
			this.maxY = 0;
		}
		else {
			this.maxY = this.map.rows * this.map.tsize - this.height;
		}
	}

	follow (sprite) {
	    this.following = sprite;
	    sprite.screenX = 0;
	    sprite.screenY = 0;
	}

	// called on loadArea or hero move
	// parameter init is set to true if this is being called on area change
	update (init) {
	    // assume followed sprite should be placed at the center of the screen whenever possible
	    this.following.screenX = this.width / 2 + Game.viewportOffsetX;
	    this.following.screenY = this.height / 2 + Game.viewportOffsetY;

		// distance moved by camera in both directions (for weather to be moved by)
		// calculated by difference in old x/y and new x/y
		let movedX = this.x;
		let movedY = this.y;

	    // make the camera follow the sprite
	    this.x = this.following.x - this.width / 2;
	    this.y = this.following.y - this.height / 2;
	    // clamp values between 0 and maxX/Y
	    this.x = Math.max(0, Math.min(this.x, this.maxX));
	    this.y = Math.max(0, Math.min(this.y, this.maxY));

	    // in map corners, the sprite cannot be placed in the center of the screen and we have to change its screen coordinates

	    // left and right sides
	    if (this.following.x < this.width / 2 ||
	        this.following.x > this.maxX + this.width / 2) {
	        this.following.screenX = this.following.x - this.x + Game.viewportOffsetX;
	    }
	    // top and bottom sides
	    if (this.following.y < this.height / 2 ||
	        this.following.y > this.maxY + this.height / 2) {
	        this.following.screenY = this.following.y - this.y + Game.viewportOffsetY;
	    }

		// movedX and movedY are the old position values
		movedX = this.x - movedX;
		movedY = this.y - movedY;
		// move weather!
		if (document.getElementById("weatherOn").checked && !Areas[Game.areaName].indoors) {
			if (Weather.particleArray.length > 0 && init !== true) {
				Weather.heroMove(movedX, movedY);
			}
		}
	}

	// check if object is displayed on the screen
	// if mode is "hitbox", it is checked if the hitbox is on the screen instead of the image (for hitbox rendering)
	isOnScreen (object, mode) {
		if (mode === "hitbox" && object.hitbox !== undefined) {
			// hitbox mode
			if (object.hitbox.x + object.hitbox.width / 2 > this.x && object.hitbox.y + object.hitbox.height / 2 > this.y) { // object's x and y are big enough
				if (object.hitbox.x - object.hitbox.width / 2 < this.x + Dom.canvas.width && object.hitbox.y - object.hitbox.height / 2 < this.y + Dom.canvas.height) { // object's x and y are also small enough
					return true;
				}
			}
		}
		else {
			// image mode
			if (object.x + object.width / 2 > this.x && object.y + object.height / 2 > this.y) { // object's x and y are big enough
				if (object.x - object.width / 2 < this.x + Dom.canvas.width && object.y - object.height / 2 < this.y + Dom.canvas.height) { // object's x and y are also small enough
					return true;
				}
			}
		}
		return false;
	}
}

//
// Status effects
//

// status effect constructor
function statusEffect(properties) {
	this.title = properties.title; // displayed title
	this.effect = properties.effect; // displayed effect (displayed in the DOM as a description of the status effect, in player stats)

	this.info = properties.info || {}; // extra information (e.g: poison damage and length)

	this.tick = properties.tick; // function to be carried out every second

	this.image = properties.image; // image to be shown

	this.type = properties.type; // status effect type
}

// check through owner's status effects to see which can be removed (due to having expired)
// called by a status effect's own tick function
// might need to be reworked (tbd)
// tbd rework to be like Game.removeStealthEffects
Game.removeExpiredStatusEffect = function (owner) {
	for (let i = 0; i < owner.statusEffects.length; i++) { // iterate through owner's status effects
		// check that the status effect can expire
		if (typeof owner.statusEffects[i].info.time !== "undefined" && typeof owner.statusEffects[i].info.ticks !== "undefined") {
			// check if it has expired
			if (owner.statusEffects[i].info.ticks >= owner.statusEffects[i].info.time) {
				owner.removeStatusEffect(i); // remove it, also calling onExpire
				i--;
			}
		}
	}
	// refresh canvas status effects if the status effect was applied to player
	if (owner.constructor.name === "Hero") {
		Game.hero.updateStatusEffects();
	}
}

// remove stealth status effect once stealth has expired elsewhere (this function is called when stealth expires)
Game.removeStealthEffects = function (owner) {
	if (!owner.stats.stealthed) { // confirm owner is not stealthed
		// remove all stealth status effects
		for (let i = 0; i < owner.statusEffects.length; i++) {
			if (owner.statusEffects[i].info.stealth === true) {
				owner.removeStatusEffect(i);
				i--;
			}
		}
		// refresh canvas status effects if the status effect was applied to player
		if (owner.constructor.name === "Hero") {
			Game.hero.updateStatusEffects();
		}
	}
}

// spread any curse status effects to attacked enemy (victim)
Game.spreadCurse = function (attacker, victim) {
	let index = -2; // placeholder
	while (index !== -1) { // repeat until there are no more curse status effects
		index = attacker.statusEffects.findIndex(statusEffect => statusEffect.info.curse === true); // find a curse effect
		if (index >= 0) { // if an effect was found...
			victim.statusEffects.push(attacker.statusEffects[index]); // give the status effect to the victim
			attacker.removeStatusEffect(index); // remove the status effect from the attacker
		}
	}
	// refresh canvas status effects if anything happened to the player
	if (attacker.constructor.name === "Hero" || victim.constructor.name === "Hero") {
		Game.hero.updateStatusEffects();
	}
}

// remove all status effects associated with being on a certain map tile from the target, except those with the title of keep variables
// keep is optional
Game.removeTileStatusEffects = function (target, keep) {
	for (let i = 0; i < target.statusEffects.length; i++) {
		if ((target.statusEffects[i].title === "Swimming"
		|| target.statusEffects[i].title === "Stuck in the mud"
		|| target.statusEffects[i].title === "Ice skating"
		|| target.statusEffects[i].title === "On a path")
		&& target.statusEffects[i].title !== keep) {
			// remove status effect
			target.removeStatusEffect(i);
			// refresh canvas status effects if target is the player
			if (target.constructor.name === "Hero") {
				Game.hero.updateStatusEffects();
			}
		}
	}
};

// status effect function array
// so that Hero's status effects can be saved with progress saving (and returned their functions in Game.initStatusEffects)
Game.statusEffects.functions = {
	// generic tick function for all timed status effects
	tick: function (owner, timeTicked) { // decrease time
		if (Round(this.info.ticks) < this.info.time) { // check effect has not expired
			// call onTick
			if (this.onTick !== undefined) {
				this.onTick(owner);
			}

			this.info.ticks += timeTicked / 1000; // timeTicked is in ms
			if (owner.constructor.name === "Hero") { // refresh canvas status effects if the status effect was applied to player
				Game.hero.updateStatusEffects();
			}

			// calculate next tick time
			let nextTickTime = 1000;
			if (this.info.time - this.info.ticks <= 2
			&& this.onTick === undefined) {
				// faster tick if effect is approaching its end (and there is no onTick function)
				nextTickTime = 100;
			}

			// set the next tick as a timeout
			// set to a variable where it can be easily removed with the statusEffect if necessary
			this.tickTimeout = setTimeout(function (owner) {
				// nextTickTime is timeTicked
				this.tick(owner, nextTickTime);
			}.bind(this), nextTickTime, owner, nextTickTime);
		}
		else { // remove effect interval
			// remove effect
			Game.removeExpiredStatusEffect(owner);
		}
	},

	// fire onTick
	fireTick: function (owner) {
		owner.takeDamage(this.info.fireDamagePerSecond);
	},

	// poison onTick
	poisonTick: function (owner) {
		owner.takeDamage(this.info.poisonDamage / this.info.time);
	},

	// food onTick
	foodTick: function (owner) {
		Game.restoreHealth(owner, Round(this.info.healthRestore / this.info.time, 1)); // 1dp
	},

	// stealth onExpire
	stealthRemove: function (target) {
		// remove stealth effect
		target.stats.stealth = false;
		Game.removeStealthEffects(target);
	},

	// xp onExpire
	decreaseXP: function (target) {
		target.stats.xpBonus -= this.info.xpIncrease;
	},

	// restorative timepiece (Items.item[15]) onExpire
	setHealth: function (target) {
		target.health = this.info.oldHealth;
	},

	// end displacement effect
	removeDisplacement: function (target) {
		target.isBeingDisplaced = undefined;
		target.setExpand(1);
	},

	// reset target's image back to its "initialImage" (e.g. for hex)
	// also reset its dimensions
	resetImage: function (target) {
		target.resetImage();
	},
};

// give target a buff/debuff
// properties includes target, effectTitle, effectDescription, increasePropertyName(optional), increasePropertyValue(optional), time(optional), imageName, onExpire(optional)
Game.statusEffects.generic = function (properties) {
	// check that the effect stacks (note that this is opt-out not opt-in - properties.effectStack must be set to "noStack" if it doesn't stack)
	let found = -1;
	if (properties.effectStack !== "noStack") {
		// effect DOES stack
		// try to find an existing effect that does the same and has the same name
		found = properties.target.statusEffects.findIndex(function(element) {
			return element.title === properties.effectTitle && // title same
				(properties.increasePropertyName === undefined || // no property increased
				element.info[properties.increasePropertyName] === properties.increasePropertyValue || // same property increased by same value
				(properties.effectStack === "multiply" && element.info[properties.increasePropertyName] !== undefined)); // property exists and multiplied effect
		});
	}

	if (found === -1) { // no similar effect currently applied to the target, or effect doesn't stack

		// effect description
		let effectText = properties.effectDescription;

		properties.target.statusEffects.push(new statusEffect({
			title: properties.effectTitle,
			effect: effectText,
			info: {
				curse: properties.curse ? true : false, // transferred on to enemies on attack
			},
			image: properties.imageName,
			type: properties.type
		}));

		// the status effect that was just added
		// "bound" to the original status effect - if this is editied, it is as well
		let addedStatusEffect = properties.target.statusEffects[properties.target.statusEffects.length - 1];

		// check if the status effect has an increaseProperty
		if (properties.increasePropertyName !== undefined) {
			// set the property of the status effect that says the increased stat
			addedStatusEffect.info[properties.increasePropertyName] = properties.increasePropertyValue;
		}

		if (properties.time !== undefined) {
			// timed status effect

			// add time properties
			addedStatusEffect.info.time = properties.time;
			addedStatusEffect.info.ticks = 0;

			// add functions
			// properties.onExpire and properties.onTick are the key names from Game.statusEffects.functions
			if (properties.onExpire !== undefined) {
				// onExpire is called when the statuseffect is removed
				 // this is bound to the status effect (hence this.owner and this.info work)
				addedStatusEffect.onExpire = this.functions[properties.onExpire].bind(addedStatusEffect);
				// reference for savedata (used if the target is Game.hero)
				addedStatusEffect.onExpireSource = properties.onExpire; // key name of function reference in Game.statusEffects.functions
			}
			if (properties.onTick !== undefined) {
				 // this is bound to the status effect (hence this.owner and this.info work)
				addedStatusEffect.onTick = this.functions[properties.onTick].bind(addedStatusEffect);
				// reference for savedata (used if the target is Game.hero)
				addedStatusEffect.onTickSource = properties.onTick; // key name of function reference in Game.statusEffects.functions
			}

			// tick function
			// reduces status effect time, removes status effect when necessary, calls onTick and onExpire when necessary
			addedStatusEffect.tick = this.functions.tick;

			// calculate next tick time
			let nextTickTime = 1000;
			if (properties.time <= 2 && properties.onTick === undefined) {
				// faster tick if effect is approaching its end (and there is no onTick function)
				nextTickTime = 100;
			}

			// begin tick
			addedStatusEffect.tickTimeout = setTimeout(function (owner) {
				// nextTickTime is timeTicked
				this.tick(owner, nextTickTime);
			}.bind(addedStatusEffect), nextTickTime, properties.target, nextTickTime);

		}
	}
	else if (found !== -1) { // extend existing status effect
		if (properties.effectStack === "refresh") {
			// refresh time instead of adding time
			properties.target.statusEffects[found].info.ticks = 0;
		}
		else if (properties.effectStack === "multiply") {
			// add to max time AND make the effect stronger
			properties.target.statusEffects[found].info.time += properties.time;
			properties.target.statusEffects[found].info[properties.increasePropertyName] += properties.increasePropertyValue;
			// tbd update description as well
		}
		else {
			// default - add to max time
			properties.target.statusEffects[found].info.time += properties.time;
		}
	}

	if (properties.target.constructor.name === "Hero") { // refresh canvas status effects if the status effect was applied to player
		Game.hero.updateStatusEffects();
	}
}

// generate an effect description from the amount that a property is increased by, and the rest of the text
Game.statusEffects.generateEffectDescription = function (amount, text) {
	return NumberSign(amount) + text;
}

// give target the fire debuff
// just target and tier parameters required (however if there is no tier, damagePerSecond and time is required)
Game.statusEffects.fire = function(properties) {
	// see if the target is in water (hence cannot be set on fire)
	let water = properties.target.statusEffects.filter(statusEffect => statusEffect.title === "Swimming");

	if (water.length === 0) {
		let newProperties = properties;
		// check if there is a tier or if stats are being set manually
		if (properties.tier !== undefined) {
			// tiered
			// turn tier into roman numeral
			newProperties.tier = Romanize(properties.tier);

			// find what tier does
			if (newProperties.tier === "I") {
				newProperties.increasePropertyValue = 1; // fireDamagePerSecond
				newProperties.time = 3;
			}
			else {
				console.error("Fire status effect tier " + tier + " has not been assigned damage and time");
			}
		}
		else {
			// manual stats - time and damagePerSecond should be in properties
			newPropertier.tier = "";
			newProperties.increasePropertyValue = properties.damagePerSecond;
		}
		// fire stats have now been set

		newProperties.effectTitle = properties.effectTitle || "Fire " + newProperties.tier;
		newProperties.effectDescription = properties.effectDescription || "Take " + newProperties.increasePropertyValue + " damage per second";
		newProperties.increasePropertyName = "fireDamagePerSecond";
		newProperties.onTick = "fireTick";
		newProperties.imageName = "fire";
		newProperties.type = "fire";
		newProperties.effectStack = "refresh"; // effect refreshes (doesn't extend time above 3s)
		this.generic(newProperties);
	}
}

// give target the poison debuff
// damage per second = poisonDamage / time
// target, poisonDamage and time parameters are the only parameters required
Game.statusEffects.poison = function(properties) {
	let newProperties = properties;
	newProperties.effectTitle = properties.effectTitle || "Poisoned";
	newProperties.effectDescription = properties.effectDescription || "Take " + properties.poisonDamage + " damage over time";
	newProperties.increasePropertyName = "poisonDamage";
	newProperties.increasePropertyValue = properties.poisonDamage;
	newProperties.onTick = "poisonTick";
	newProperties.imageName = "poison";
	newProperties.type = "poison";
	newProperties.effectStack = "noStack"; // effect does not stack
	this.generic(newProperties);
}

// give target the stunned debuff
// just target and time parameters required
Game.statusEffects.stun = function (properties) {
	let newProperties = properties;
	newProperties.effectTitle = properties.effectTitle || "Stunned";
	newProperties.effectDescription = properties.effectDescription || "Cannot move or attack";
	newProperties.imageName = "stunned";
	newProperties.type = "stun";
	this.generic(newProperties);

	// remove what target is channelling
	properties.target.removeChannelling("stun");
}

// give target the attackDamage buff/debuff
// properties includes target, effectTitle, damageIncrease, time
Game.statusEffects.attackDamage = function (properties) {
	let newProperties = properties;
	newProperties.effectDescription = properties.effectDescription || this.generateEffectDescription(properties.damageIncrease, "% attack damage");
	newProperties.increasePropertyName = "damageIncrease";
	newProperties.increasePropertyValue = properties.damageIncrease;
	if (properties.damageIncrease > 0) {
		newProperties.imageName = "damageUp";
		newProperties.type = "strength";
	}
	else {
		newProperties.imageName = "damageDown";
		newProperties.type = "weakness";
	}
	this.generic(newProperties);
}

// give target a walkspeed buff/debuff
// properties includes target, effectTitle, speedIncrease, time
Game.statusEffects.walkSpeed = function(properties) {
	let newProperties = properties;
	newProperties.effectDescription = properties.effectDescription || this.generateEffectDescription(properties.speedIncrease, "% walk speed");
	newProperties.increasePropertyName = "speedIncrease";
	newProperties.increasePropertyValue = properties.speedIncrease;
	if (properties.speedIncrease > 0) {
		newProperties.imageName = "speedUp";
		newProperties.type = "speed";
	}
	else {
		newProperties.imageName = "speedDown";
		newProperties.type = "slow";
	}
	this.generic(newProperties);
}

// give target a lifesteal buff
// properties includes target, effectTitle, lifestealIncrease, time
Game.statusEffects.lifesteal = function(properties) {
	let newProperties = properties;
	newProperties.effectDescription = properties.effectDescription || this.generateEffectDescription(properties.lifestealIncrease, "% lifesteal");
	newProperties.increasePropertyName = "lifestealIncrease";
	newProperties.increasePropertyValue = properties.lifestealIncrease;
	newProperties.imageName = "lifesteal";
	newProperties.type = "lifesteal";
	this.generic(newProperties);
}

// give target a stealth buff
// properties includes target, effectTitle, time(optional)
Game.statusEffects.stealth = function(properties) {
	let newProperties = properties;
	newProperties.effectDescription = "Cannot be seen by enemies until attack";
	newProperties.increasePropertyName = "stealth";
	newProperties.increasePropertyValue = true;
	newProperties.imageName = "stealth";
	newProperties.type = "stealth";
	if (properties.time !== undefined) {
		// if it is a timed stealth effect, make sure to remove the stealth when it expires
		newProperties.onExpire = "stealthRemove";
	}
	// give target stealth
	properties.target.stats.stealthed = true;
	// add status effect
	this.generic(newProperties);
}

// give target a defence buff/debuff
// properties includes target, effectTitle, defenceIncrease, time, subSpecies (optional)
Game.statusEffects.defence = function(properties) {
	let newProperties = properties;
	if (newProperties.subSpecies !== undefined) {
		// targeted against a specific subspecies
		newProperties.effectDescription = properties.effectDescription || this.generateEffectDescription(properties.defenceIncrease, "% defence against " + properties.subSpecies + "s");
	}
	else {
		// general
		newProperties.effectDescription = properties.effectDescription || this.generateEffectDescription(properties.defenceIncrease, "% defence");
	}
	newProperties.increasePropertyName = "defenceIncrease";
	newProperties.increasePropertyValue = properties.defenceIncrease;
	if (properties.speedIncrease > 0) {
		newProperties.imageName = "defenceUp";
		newProperties.type = "strength";
	}
	else {
		newProperties.imageName = "defenceDown";
		newProperties.type = "vulnerability";
	}
	this.generic(newProperties);
}

// give target a food buff
// properties includes target, effectTitle, healthRestore, time
Game.statusEffects.food = function(properties) {
	let newProperties = properties;
	newProperties.effectDescription = this.generateEffectDescription(properties.healthRestore, " health restored over time whilst not in combat");
	newProperties.increasePropertyName = "healthRestore";
	newProperties.increasePropertyValue = properties.healthRestore;
	newProperties.imageName = "food";
	newProperties.type = "food";
	newProperties.onTick = "foodTick";
	this.generic(newProperties);
}

// give target a xp buff / debuff (changes Game.hero.stats.xpBonus)
// properties includes target, effectTitle, xpIncrease, time
Game.statusEffects.xp = function(properties) {
	let newProperties = properties;
	newProperties.effectDescription = properties.effectDescription || this.generateEffectDescription(properties.xpIncrease, "% XP gain");
	newProperties.increasePropertyName = "xpIncrease";
	newProperties.increasePropertyValue = properties.xpIncrease;
	if (properties.xpIncrease > 0) {
		newProperties.imageName = "xpUp";
		newProperties.type = "xpUp";
	}
	else {
		newProperties.imageName = "xpDown";
		newProperties.type = "xpDown";
	}
	// increase XP
	properties.target.stats.xpBonus += properties.xpIncrease;
	// decrease XP on expire
	newProperties.onExpire = "decreaseXP";

	this.generic(newProperties);
}

// give target a "hexed" debuff, where they deal 90% less damage and turn into an animal for a default of 2s
// properties includes target, time (optional)
// properties can also incldue an "image" parameter which is the key name of an image in loader to turn the target into
// properties can also include imageCrop, imageWidth, imageHeight, rotationImages (all optional and same as params for setImage)
// otherwise a random animal is chosen as the image
Game.statusEffects.hex = function (properties) {
	let newProperties = properties;
	newProperties.effectTitle = properties.effectTitle || "Hexed",
	newProperties.damageIncrease = properties.damageIncrease || -90;
	newProperties.time = properties.time || 2;

	// change image of target
	let imageName, rotationImages;
	if (properties.image === undefined) {
		// one of the default images
		// imageName is set in next switch statement...
		switch (Random(0, 2)) {
			case 0:
				imageName = "sheepRight"; // likely this will be overwritten by next switch statement
				rotationImages = {
					left: "sheepLeft",
					right: "sheepRight"
				};
				break;

			case 1:
				imageName = "chickenRight";
				rotationImages = {
					left: "chickenLeft",
					right: "chickenRight"
				};
				break;

			case 2:
				imageName = "toadRight";
				rotationImages = {
					left: "toadLeft",
					right: "toadRight"
				};
				break;
		}
	}
	else {
		// specified image
		imageName = properties.image;
		rotationImages = properties.rotationImages;
	}

	// if rotation images exist, set image based on current rotation of character instead
	if (rotationImages !== undefined) {
		switch (properties.target.direction) {
			case 1:
				imageName = rotationImages.up;
				break;
			case 2:
				imageName = rotationImages.left;
				break;
			case 3:
				imageName = rotationImages.down;
				break;
			case 4:
				imageName = rotationImages.right;
				break;
		}
	}

	properties.target.changeImage(imageName,
		properties.imageCrop,
		properties.imageWidth,
		properties.imageHeight,
		rotationImages);

	newProperties.onExpire = "resetImage"; // change image back when it expires

	this.attackDamage(newProperties);
}

//
// Spells
//

// arrays in a spell object have their index correspond to the spell tier - 1

Game.spells = {
	charge: {
		class: "k",

		// properties should contain tier (as int value), caster, target
		func: function (properties) {
			let dist = Game.distance(properties.caster, properties.target);
			let velocity = Game.spells.charge.velocity[properties.tier-1];
			let time = dist / velocity;
			let bear = Game.bearing(properties.caster, properties.target);
			properties.caster.displace(0, velocity, time, bear); // start displacement
		},

		velocity: [
			300,	// tier 1
		],

		channelTime: [
			500,	// tier 1
		],

		// TBD
		manaCost: [
			0,		// tier 1
		],

		cooldown: [
			1500,	// tier 1
		],
	},

	unholyStrike: {
		class: "k",

		// properties should contain tier (as int value), caster, target
		func: function (properties) {
			Game.statusEffects.stun({
				effectTitle: "Unholy Strike",
				target: properties.target,
				time: Game.spells.unholyStrike.stunTime[properties.tier-1],
			});
		},

		stunTime: [
			3,		// tier 1
		],

		channelTime: [
			1500,	// tier 1
		],

		// TBD
		manaCost: [
			0,		// tier 1
		],

		cooldown: [
			10000,	// tier 1
		],
	},

};

//
// Item functions
//

// launch a firework! (circle-shaped)
// properties should contain x, y, radius (radius of firework circle) ...
// ... particles (number of particles), explodeTime (time to reach maximum radius) ...
// ... lingerTime (time remained at maximum radius), colours (an array of hex)
Game.launchFirework = function (properties) {
	// sunflower seed distribution is used to randomly distribute points in a circle
	// thanks https://stackoverflow.com/a/28572551/9713957 :)
	let alpha = 0;
	let b = Math.round(alpha*Math.sqrt(properties.particles)); // number of boundary points
	let phi = (Math.sqrt(5)+1)/2; // golden ratio
	for (let i = 0; i < properties.particles; i++) {
		// position calculations for maximum position from centre
		let r;
	    if (i+1 > properties.particles - b) {
			// place on the boundary
			r = properties.radius;
		}
		else {
			// apply square root
			r = (Math.sqrt(i/2)/Math.sqrt(properties.particles-(b+1)/2)) * properties.radius;
		}
		let theta = 2*Math.PI*(i+1)/Math.pow(phi,2);
		// positioning (net movement from properties.x and properties.y)
		let x = r*Math.cos(theta);
		let y = r*Math.sin(theta);
		// create a new particle
		this.createParticle({
			x: properties.x,
			y: properties.y,
			width: 2,
			height: 2,
			colour: properties.colours, // class Particle chooses random colour from array
			moveTowards: {
				x: x + properties.x,
				y: y + properties.y,
				time: properties.explodeTime,
			},
			removeIn: properties.explodeTime + properties.lingerTime,
			light: true, // fireworks appear light
		});
	}
}

// launch some fireworks to celebrate the player levelling up!
// fireworks launched every 500ms - number remaining tracked by parameter
Game.levelUpFireworks = function (numberRemaining) {
	let colourArray = []; // array of firework colours
	if (Game.hero.level === LevelXP.length - 1) {
		// golden fireworks if they are max level
		colourArray.push("#f9ff54");
	}
	else if (numberRemaining % 5 === 0) {
		// multiple of 5 remaining - multicoloured firework!
		colourArray.push("#ff0000", "#ff7b00", "#ffff00", "#00ff00", "#00ffff", "7b00ff", "#ff00ff");
	}
	else {
		// random colour in the rainbow...
		switch (Random(0, 6)) {
			case 0:
				colourArray.push("#ff0000");
				break;
			case 1:
				colourArray.push("#ff7b00");
				break;
			case 2:
				colourArray.push("#ffff00");
				break;
			case 3:
				colourArray.push("#00ff00");
				break;
			case 4:
				colourArray.push("#00ffff");
				break;
			case 5:
				colourArray.push("#7b00ff");
				break;
			case 6:
				colourArray.push("#ff00ff");
				break;
		}
	}

	Game.launchFirework({
		x: Random(Game.hero.x - Dom.canvas.width / 2, Game.hero.x + Dom.canvas.width / 2),
		y: Random(Game.hero.y - Dom.canvas.height / 2, Game.hero.y + Dom.canvas.height / 2),
		radius: Random(125, 175),
		particles: 500,
		explodeTime: 500,
		lingerTime: 1000,
		colours: colourArray,
	});

	if (numberRemaining > 1) {
		// more fireworks to be launched in 500ms
		setTimeout(Game.levelUpFireworks, 500, numberRemaining - 1)
	}
}

// add a new trail particle around the character (normally called by a setInterval)
// the particle data is saved in trailParticle
Game.addTrailParticle = function (character, trailParticle) {
	trailParticle.x = character.x + Random(-trailParticle.variance, trailParticle.variance);
	trailParticle.y = character.y + Random(-trailParticle.variance, trailParticle.variance);
	Game.createParticle(trailParticle); // Game not this because it is called by setInterval
}

//
// Init game / load new area
//

// load an object of any images
// images = object of images like those found in areadata
// deleteIf = function that deletes the images from Loader if true (set to undefined for delete on area change)
Game.loadImages = function (images, deleteIf) {
	let imageInformation = this.prepareImageInformation(images);
	let names = imageInformation.names; // image key names
	let addresses = imageInformation.addresses;
	let flip = imageInformation.flip; // whether the iamage is flipped or not

	let toLoad = [];

	for (let i = 0; i < names.length; i++) {
		if (addresses[i] !== undefined) { // it might be undefined if the event for the character is not active
			toLoad.push(Loader.loadImage(names[i], addresses[i], deleteIf, flip[i]));
			// no deleteIf since these images are associated with the area
		}
	}

    return toLoad;
};

// load default images (e.g. player, status effect, etc.)
// returns an array of these promises
Game.loadDefaultImages = function () {
	let toLoad = [];

	// check player image has been loaded (if not, then load it)
	if (!Object.keys(Loader.images).includes("player"+Player.class+Player.skin)) {
		// load image based on class
		toLoad.push(Loader.loadImage("player"+Player.class+Player.skin, "./assets/player/" + Player.class + Player.skin + ".png", false));
	}

	// check if the class' default projectile has been loaded
	if (!Object.keys(Loader.images).includes(this.heroProjectileName)) {
		// load class' default projectile
		toLoad.push(Loader.loadImage(this.heroProjectileName, "./assets/projectiles/" + this.heroProjectileName + ".png", false));
	}

	// check status image has been loaded (if not, then load it)
	if (!Object.keys(Loader.images).includes("status")) {
		toLoad.push(Loader.loadImage("status", "./assets/icons/status.png", false));
	}

	// check fishing bobber has been loaded (if not, then load it)
	// maybe this should just be done if the player has a fishing rod? - tbd
	if (!Object.keys(Loader.images).includes("bobber")) {
		toLoad.push(Loader.loadImage("bobber", "./assets/projectiles/bobber.png", false));
	}

	return toLoad;
}

// converts image object to separate array variables that can be used by Game.loadImages
// images = object where keys are image keys in loader, and value is an object of image addresses
// image addresses object contains a "normal" property for normal image address...
// ...and can contain event properties (e.g. "samhain") for event image addresses...
// ...also can contain "flip" property containing either "vertical" or "horizontal" to load a flipped image
Game.prepareImageInformation = function (images) {
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

// pull data from areadata.js
Game.loadArea = function (areaName, destination) {

	this.areaTeleports = []; // stop player from teleporting again during promise

	// remove animationTick if one exists, to stop unloaded images being tried to be used
	if (this.animationTick !== undefined) {
		clearInterval(this.animationTick);
		this.animationTick = undefined;
	}

	// wipe previously loaded images (except exceptions - based on deleteif)
	Loader.wipeImages();

	// set game time of day and event
	Event.updateEvent();
	Event.updateTime(areaName);

	// load images
	// p = array of promises of images being loaded
    let p = this.loadImages(Areas[areaName].images);

	// check that default images are loaded (e.g. player, status effect, etc.) and add any that aren't to toLoad
	p.push(...Game.loadDefaultImages());

	// wait until images have been loaded
    Promise.all(p).then(function (loaded) {

		this.areaName = areaName;

		// save data information
		Player.areaName = areaName;
        Player.displayAreaName = Areas[areaName].data.name;
		Player.lootArea = Areas[areaName].lootArea;
		Player.lootTier = Areas[areaName].lootTier;

		// map
		// there are some properties that some areaData areas don't have, so should be undefined rather than the old value
		map.solidTiles = undefined;
		map.waterTiles = undefined;
		map.iceTiles = undefined;
		map.mudTiles = undefined;
		map.pathTiles = undefined;
		map.scrollX = undefined;
		map.scrollY = undefined;
		// now add all properties from areaData to the map variable
		Object.assign(map, Areas[areaName].mapData);
		// ice tiles only exist if the area isIcy
		if (Areas[areaName].isIcy !== undefined && Areas[areaName].isIcy()) {
			// area is icy
			// any water tiles that are also ice tiles are now no longer water tiles
			map.waterTiles = map.waterTiles.filter(tile => {
				if (map.iceTiles.includes(tile)) {
					return false;
				}
				else {
					return true;
				}
			});
		}
		else {
			// purge the ice!
			map.iceTiles = undefined;
		}

		// set tileset
		this.tileAtlas = Loader.getImage("tiles");

		// recalibrate camera (for areas other than first area)
		if (this.camera !== undefined) {
			// set maximum x and y positions of camera
			this.camera.setMaxClampValues();
		}

		// list of objects to be animated (with a .animate function)
		this.animationList = [];

		// remove all status effect timeouts for previous area's characters
		if (this.allCharacters !== undefined) {
			for (let i = 0; i < this.allCharacters.length; i++) {
				if (this.allCharacters[i].constructor.name === "Hero") {
					this.allCharacters[0].removeAllStatusEffects();
				}
			}
		}

		// class arrays
		this.allEntities = [];
		this.allThings = [];
		this.allCharacters = [];
		this.allAttackers = [];

		// villagers (currently broken)
		this.villagers = [];
		if (Areas[areaName].villagers !== undefined) {
			for (let i = 0; i < Areas[areaName].villagers.length; i++) {
				if (this.prepareNPC(Areas[areaName].villagers[i], "villagers")) {
					this.villagers.push(new Villager(Areas[areaName].villagers[i]));
				}
			}
		}

		// things (aesthetic only)
		this.things = [];
		if (Areas[areaName].things !== undefined) {
			for (let i = 0; i < Areas[areaName].things.length; i++) {
				if (this.prepareNPC(Areas[areaName].things[i], "things")) {
					this.things.push(new Thing(Areas[areaName].things[i]));
				}
			}
		}

		// quest npcs, merchants, identifiers, soul healers, item buyers, etc.
		this.npcs = [];
		if (Areas[areaName].npcs !== undefined) { // check they exist in areadata.js
			for (let i = 0; i < Areas[areaName].npcs.length; i++) {
				if (this.prepareNPC(Areas[areaName].npcs[i], "npcs")) {
					this.npcs.push(new NPC(Areas[areaName].npcs[i]));
				}
			}
		}

		// dummies (enemies for training) - trivial (don't damage you)
		this.dummies = [];
		if (Areas[areaName].dummies !== undefined) {
			for (let i = 0; i < Areas[areaName].dummies.length; i++) {
				if (this.prepareNPC(Areas[areaName].dummies[i], "dummies")) {
					this.dummies.push(new Dummy(Areas[areaName].dummies[i]));
				}
			}
		}

		// enemies
		this.enemies = [];
		if (Areas[areaName].enemies !== undefined) {
			for (let i = 0; i < Areas[areaName].enemies.length; i++) {
				if (this.prepareNPC(Areas[areaName].enemies[i], "enemies")) {

					// bosses only can be killed once a day
					if (Areas[areaName].enemies[i].hostility !== "boss" ||
						GetFullDate() - Player.bossesKilled[Areas[areaName].enemies[i].bossKilledVariable] > 0) {
						this.enemies.push(new Enemy(Areas[areaName].enemies[i]));

						// check for blood moon
						if (Event.time === "bloodMoon") {
							// blood moon - enemies have more health
							this.enemies[this.enemies.length - 1].health *= 2;
							this.enemies[this.enemies.length - 1].stats.maxHealth *= 2;
						}
					}
				}
			}
		}

		// loot chests
		this.chests = [];
		if (Areas[areaName].chests !== undefined) {
			for (let i = 0; i < Areas[areaName].chests.length; i++) {
				if (this.prepareNPC(Areas[areaName].chests[i], "chests")) {
					this.chests.push(new LootChest(Areas[areaName].chests[i]));
				}
			}
		}

		// cannons (outdated)
		this.cannons = [];
		if (Areas[areaName].cannons !== undefined) {
			Areas[areaName].cannons.forEach(cannon => {
				if (this.canBeShown(cannon)) { // check if NPC should be shown
					cannon.map = map;
					cannon.type = "cannons";
					this.cannons.push(new Cannon(cannon));
				}
			});
		}

		// particles and projectiles don't persist between areas - cancel their remove timeouts
		if (this.objectRemoveTimeouts !== undefined) {
			for (let i = 0; i < this.objectRemoveTimeouts.length; i++) {
				clearTimeout(this.objectRemoveTimeouts[i]);
			}
		}
		this.objectRemoveTimeouts = [];

		// particles
		this.particles = [];

		// reset any channelling projectile (if the player exists)
		if (this.hero !== undefined) {
			this.hero.channellingProjectileId = null;
			this.hero.channelling = false;
			this.hero.canAttack = true;
		}

		// projectiles
		this.projectiles = [];

		// area teleports
		if (Areas[areaName].areaTeleports !== undefined) {
			for (let i = 0; i < Areas[areaName].areaTeleports.length; i++) {
				if (this.prepareNPC(Areas[areaName].areaTeleports[i], "areaTeleports")) {
					this.areaTeleports.push(new AreaTeleport(Areas[areaName].areaTeleports[i]));
				}
			}
		}

		// tripwires (invisible; calls function when touched)
		this.tripwires = [];
		if (Areas[areaName].tripwires !== undefined) {
			for (let i = 0; i < Areas[areaName].tripwires.length; i++) {
				if (this.prepareNPC(Areas[areaName].tripwires[i], "tripwires")) {
					this.tripwires.push(new Tripwire(Areas[areaName].tripwires[i]));
				}
			}
		}

		// collisions (invisible; cannot be passed)
		this.collisions = [];
		if (Areas[areaName].collisions !== undefined) {
			for (let i = 0; i < Areas[areaName].collisions.length; i++) {
				if (this.prepareNPC(Areas[areaName].collisions[i], "collisions")) {
					this.collisions.push(new Entity(Areas[areaName].collisions[i]));
				}
			}
		}

		// mailboxes
		this.mailboxes = [];
		if (Areas[areaName].mailboxes !== undefined) {
			for (let i = 0; i < Areas[areaName].mailboxes.length; i++) {
				if (this.prepareNPC(Areas[areaName].mailboxes[i], "mailboxes")) {

					// flag up if there is unread mail
					if (Dom.mail.unread() > 0) {
						// flag up
						Areas[areaName].mailboxes[i].image = Areas[areaName].mailboxes[i].unreadImage;
					}
					else {
						// no flag
						Areas[areaName].mailboxes[i].image = Areas[areaName].mailboxes[i].readImage;
					}

					this.mailboxes.push(new Mailbox(Areas[areaName].mailboxes[i]));
				}
			}
		}

		// infoPoints
		this.infoPoints = [];
		if (Areas[areaName].infoPoints !== undefined) {
			for (let i = 0; i < Areas[areaName].infoPoints.length; i++) {
				if (this.prepareNPC(Areas[areaName].infoPoints[i], "infoPoints")) {
					this.infoPoints.push(new InfoPoint(Areas[areaName].infoPoints[i]));
				}
			}
		}

		// players
		this.players = [];
		if (ws !== false && ws.readyState === 1) {
			// websockeet is active
			for (let i = 0; i < Dom.players.length; i++) {
				// addPlayer checks necessary conditions for player additioin
				this.addPlayer(Dom.players[i]);
			}
		}

		// music
		// it is checked if the user has selected for music to be played in the settings within the Game.playMusic function
		this.playMusic();

		// init game (if it hasn't been done so already)
		let init = false; // set to if this is the first areaTeleport of the game
		if (this.hero === undefined) {
			this.init();
			init = true;
		}
		else {
			// code to be called when area is accessed due to area teleport (not game load)

			// reset weather
			if (document.getElementById("weatherOn").checked) {
				Weather.reset();
			}

			// close NPC pages
            Dom.closeNPCPages();

			// re-add player to allEntities etc.
			this.allEntities.push(Game.hero);
			this.allThings.push(Game.hero);
			this.allCharacters.push(Game.hero);
			this.allAttackers.push(Game.hero);

			// tell server that area has been changed so that DOM chat players online can display this for all players
		    // check if user is connected to the websocket
		    if (ws !== false && ws.readyState === 1) {
				ws.send(JSON.stringify({
					type: "changeArea",
					area: this.areaName,
					displayArea: Player.displayAreaName,
					x: this.hero.x,
					y: this.hero.y,
					direction: this.hero.direction
				}));
			}
		}

		// display area name
		// it is always displayed on init (thus only checked if it should be displayed if init is not called)
		if (Areas[areaName].data.displayOnEnter !== false || init) {
			// tbd wait until font is loaded
			let title = Areas[areaName].data.name;
			let subtitles = [];
			subtitles.push(Areas[areaName].data.level);
			if (Areas[areaName].data.territory !== "") {
				// only show territory if it is defined for the area
				subtitles.push(Areas[areaName].data.territory + " territory");
			}
			// function to set the variable
			this.displayOnCanvas(title, subtitles, 2);
		}

		// update viewportOffset and canvasArea variables
		this.updateCanvasViewport();

		// reposition player
		if (destination !== undefined) {
			this.hero.x = destination.x;
			this.hero.y = destination.y;
		}
		// remove player moveTowards
		this.hero.moveTowards = undefined;

		// allow hero to move again if they died
		if (this.hero.respawning) {
			this.hero.respawning = false;
			this.hero.isCorpse = false;
			Dom.chat.insert("You died.");
		}

		// if the area is a checkpoint and it is not the player's current checkpoint, update the player's checkpoint
		if (Areas[areaName].checkpoint && this.hero.checkpoint !== areaName) {
			this.hero.checkpoint = areaName;
			Dom.chat.insert("Checkpoint reached! Your spawn location has been set to this location.");
		}

		// load in randomly generated loot chests if the area has data for them
		if (Areas[areaName].chestData !== undefined) {
			this.generateChests(Areas[areaName].chestData);
		}

		// call onAreaTeleport function if there is one
		if (!init) { // only if the area was teleported to (not game refresh)
			if (Areas[areaName].onAreaTeleport !== undefined) {
				Areas[areaName].onAreaTeleport();
			}
		}

		// update camera position
		this.camera.update(true);

		// set foot hitbox position (updated on hero move normally)
		this.updateScreenPosition(this.hero.footHitbox);

		// render secondary canvas
		this.secondary.render();

		// decide on weather
		Weather.updateVariables(); // includes choosing weather and populating particleArray
		// incorporate weather into time
		Event.updateTime(areaName);

		// if it is nighttime, change all daytime tiles to their nighttime versions
		map.setDayNightTiles();

		// render day night
		this.renderDayNight();

		// Antorax Day fireworks
		if (Event.event === "Antorax" && Areas[areaName].data.territory === "Allied" && !Areas[areaName].indoors && this.fireworkInterval === undefined) {
			// Antorax Day; area is allied and indoors and a firework interval has not yet been set
			// launch fireworks periodically at random positions on the player's screen
			this.fireworkInterval = setInterval(function () {
				// same as Antorax Day Firework items
				if (Random(0, 3) === 0) {
					// large firework
					this.launchFirework({
						x: Random(this.hero.x - Dom.canvas.width / 2, this.hero.x + Dom.canvas.width / 2),
						y: Random(this.hero.y - Dom.canvas.height / 2, this.hero.y + Dom.canvas.height / 2),
						radius: 250,
						particles: 1500,
						explodeTime: 750,
						lingerTime: 1000,
						colours: ["#8cff91", "#ff82f8"], // lighter colours so they are more visible
					});
				}
				else {
					// normal firework
					this.launchFirework({
						x: Random(this.hero.x - Dom.canvas.width / 2, this.hero.x + Dom.canvas.width / 2),
						y: Random(this.hero.y - Dom.canvas.height / 2, this.hero.y + Dom.canvas.height / 2),
						radius: 150,
						particles: 600,
						explodeTime: 500,
						lingerTime: 1000,
						colours: ["#8cff91", "#ff82f8"], // lighter colours so they are more visible
					});
				}
			}, 1500, this.areaName);
		}
		else if (this.fireworkInterval !== undefined) {
			// remove interval from a previous area
			clearInterval(this.fireworkInterval);
			this.fireworkInterval = undefined;
		}

		// animations
		// tick called every 100s (perhaps change in future?)
		if (this.animationList.length > 0) {
			this.totalAnimationTime = 0; // used to find if animate should be called for an object

			this.animationTick = setInterval(function () {
				Game.totalAnimationTime += 100;

				for (let i = 0; i < Game.animationList.length; i++) {
					if (Game.animationList[i].lastAnimated + Game.animationList[i].animationFrameTime <= Game.totalAnimationTime) {
						// should be animated
						Game.animationList[i].animate();
						Game.animationList[i].lastAnimated = Game.totalAnimationTime;
					}
				}
			}, 100);
		}

		// time travel fog
		/*
		if (Areas[areaName].timeTravel === true) {
			this.createParticle({
				x: 0,
				y: 0,
				width: 2,
				height: 2,
				colour: "#b7b7b7",
				transparency: Random(3, 7) / 10,
			});
		}
		*/

    }.bind(this))
	.catch(function (err) {
		// error for if the images didn't load
	    console.error("Your images did not load correctly, or there was an error in the Game.loadArea function...", err);
	});
}

// viewportOffset and canvasArea variables
// called by loadArea and canvas resize
Game.updateCanvasViewport = function () {
	// if the area is too small so does not fit in the screen, it should be moved to the centre of the screen
	// calculate the variables of offset so the drawn sprites and tilemap can be adjusted by this
	// note this is the width of black on each side
	this.viewportOffsetX = 0;
	this.viewportOffsetY = 0;
	if (map.tsize * map.cols < this.camera.width) {
		// area width not big enough to fill camera
		// set offset so the canvas is drawn in the centre of screen
		this.viewportOffsetX = (this.camera.width - (map.tsize * map.cols)) / 2;
	}
	if (map.tsize * map.rows < this.camera.height) {
		// area height not big enough to fill camera
		// set offset so the canvas is drawn in the centre of screen
		this.viewportOffsetY = (this.camera.height - (map.tsize * map.rows)) / 2;
	}

	// set area of canvas using this viewportOffset
	// currently used for weather particles
	this.canvasArea = (Dom.canvas.width - this.viewportOffsetX*2) * (Dom.canvas.height - this.viewportOffsetY*2);
}

// initialise game and DOM
Game.init = function () {
	// init keyboard
	Keyboard.init();

	// init DOM
	Dom.init();

	// music
	this.playingMusic = null;

	// create the player
	// its x and y are not set until Game.loadArea resumes
	this.hero = new Hero({
		// properties inherited from Entity
		map: map,
		x: Areas[this.areaName].player !== undefined ? Areas[this.areaName].player.x : 0,
		y: Areas[this.areaName].player !== undefined ? Areas[this.areaName].player.y : 0,
		width: 57,
		height: 120,

		// properties inheritied from Thing
		image: "player"+Player.class+Player.skin,

		// properties inherited from Character
		health: Player.health,
		name: Player.name,
		level: Player.level,
		class: Player.class,

		direction: 3,
		crop: {
			x: 0,
			y: 0,
			width: 57,
			height: 120
		},

		// properties inherited from Attacker

		// stats
		stats: Player.stats,

		trail: Player.trail,

		// projectile (TBD)
		projectile: {},

		checkpoint: Player.checkpoint,

		oldPosition: Player.oldPosition,
	});

	// link stats
    // currently a bit inefficient?
    Game.hero.stats = Player.stats;

	// set player projectile
	this.projectileImageUpdate();

	// set loaded status image
	this.statusImage = Loader.getImage("status");

	//
	// keyboard listeners
	//

	// stores whether the keys are up (false) or down (true)
	this.keysDown = {
		SHIFT: false, // not set normally
	};

	// list of keys and variables to be added (variable name is same as key name)
	let keysToAdd = ["UP", "LEFT", "DOWN", "RIGHT", "SPACE"];

	// add them and a keyboard listener that sets the variable to true/false
	for (let i = 0; i < keysToAdd.length; i++) {
		// add variable to keysDown
		this.keysDown[keysToAdd[i]] = false;
		// add listener
		Keyboard.listenForKeyWithVariable(User.settings.keyboard[keysToAdd[i]], this.keysDown, keysToAdd[i]);
	}

	// shift
	// special method of adding key because it calls a separate function
	Keyboard.listenForKey(User.settings.keyboard.SHIFT, Keyboard.downFunctions.SHIFT, Keyboard.upFunctions.SHIFT);

	// player attack on click
	document.getElementById("click").addEventListener("mousedown", Game.hero.startAttack.bind(this.hero));
	document.getElementById("click").addEventListener("mouseup", Game.hero.finishAttack.bind(this.hero));

	// change between default cursor and crosshair based on player range
	document.getElementById("click").addEventListener("mousemove", Game.secondary.updateCursor.bind(document.getElementById("click")));

	// experimental mobile tilt movement (not called unless on mobile and device has gyroscopes)
	Dom.chat.insert("start");
	window.addEventListener("deviceorientation", MobileTilt);

	// fps array (used for tracking frames per second in Game.fps())
	this.fpsArray = [];

	// init canvas display variables (used by displayOnCanvas)
	this.canvasDisplay = {};
	this.canvasDisplayQueue = [];

	// health regeneration every second
	setInterval(function () {
		if (document.hasFocus()) { // check user is focused on the game (otherwise enemies cannot damage but user can heal)
			this.regenHealth();
		}
	}.bind(this), 1000);

	// hero trail interval
	if (Game.hero.trail !== undefined) {
		// hero has a trail
		// new particle every 100ms
		Game.hero.trailInterval = setInterval(Game.addTrailParticle, 100, Game.hero, Game.hero.trail);
	}

	// game viewport camera
    this.camera = new Camera({map: map, width: Dom.canvas.width, height: Dom.canvas.height});
    this.camera.follow(this.hero);

	// init weather
	Weather.init();

	// re-init hero's saved status effects
	this.initStatusEffects();

	// start Game tick
	window.requestAnimationFrame(this.tick);

	// saveTimeout ensures that there is always a save at least every 60 seconds
	// save in 60 seconds (init saveTimeout)
	// if there is a save before this, this is set back to 60 seconds
	Game.saveTimeout = setTimeout(function() {
		Game.saveProgress("auto");
	}, 60000);
};

// re-start hero status effect ticks (from savedata)
Game.initStatusEffects = function () {
	// iterate through status effects
	for (let i = 0; i < this.hero.statusEffects.length; i++) {
		let statusEffect = this.hero.statusEffects[i];

		if (statusEffect.info.time !== undefined) { // check if status effect should tick
			// give the status effect the tick function
			statusEffect.tick = this.statusEffects.functions.tick;

			// if it has an onExpire function, add it
			if (statusEffect.onExpireSource !== undefined) {
				statusEffect.onExpire = this.statusEffects.functions[statusEffect.onExpireSource];
			}
			// if it has an onTick function, add it
			if (statusEffect.onTickSource !== undefined) {
				statusEffect.onTick = this.statusEffects.functions[statusEffect.onTickSource];
			}

			// calculate next tick time
			let nextTickTime = 1000;
			if (statusEffect.info.time <= 2 && statusEffect.onTick === undefined) {
				// faster tick if effect is approaching its end (and there is no onTick function)
				nextTickTime = 100;
			}

			// begin tick
			statusEffect.tickTimeout = setTimeout(function (owner) {
				// nextTickTime is timeTicked
				statusEffect.tick(owner, nextTickTime);
			}.bind(statusEffect), nextTickTime, Game.hero, nextTickTime);
		}
	}
}

// init an NPC for being added by loadArea
// returns true/false depending on if the NPC should be shown
Game.prepareNPC = function (npc, type) {
	if (this.canBeShown(npc)) {
		this.setInformationFromTemplate(npc);
		npc.map = map;
		npc.type = type;
		return true;
	}
	return false;
}

// set the properties of a character from its template
// called by prepareNPC
Game.setInformationFromTemplate = function (properties) {
	if (properties.template !== undefined) {
		// a template exists
		// add template properties to main properties object
		Object.assign(properties.template.stats, properties.stats); // template updated
		Object.assign(properties, properties.template); // properties updated

		if (properties.speciesTemplate !== undefined) {
			// a second template, specific to the species
			if (properties.speciesTemplate.stats !== undefined) {
				Object.assign(properties.speciesTemplate.stats, properties.stats); // species template updated
			}
			Object.assign(properties, properties.speciesTemplate); // properties updated
		}
	}

	return properties;
}

//
// Game tick
//

// calculate current tick length and update/render canvas accordingly
Game.tick = function (elapsed) {
    window.requestAnimationFrame(this.tick);

    // clear previous frame
    this.ctx.clearRect(0, 0, Dom.canvas.width, Dom.canvas.height);
    this.ctxLight.clearRect(0, 0, Dom.canvas.width, Dom.canvas.height);

    // compute delta time in seconds -- also cap it
    let delta = (elapsed - this.previousElapsed) / 1000.0;
    delta = Math.min(delta, 0.25); // maximum delta of 250 ms
    this.previousElapsed = elapsed;


	this.update(delta); // update game state

	// check for screen size change
	if (Dom.canvas.width !== window.innerWidth - 2 || Dom.canvas.height !== window.innerHeight - Dom.canvas.heightOffset) {
		// update the screen display to fit the new size
		Dom.updateScreenSize();
	}

	this.render(delta); // render game display


	// reset text formatting
	this.resetFormatting();

	// display delta time (debug)
	//this.ctx.fillText("delta: " + Math.round(delta * 1000) / 1000, 10, 30);
}.bind(Game);

//
// Chests and loot
//

// generate chest(s) around area
Game.generateChests = function (chestData) {
	if (Player.chests.opened[this.areaName] === undefined || GetFullDate() - Player.chests.opened[this.areaName] > 0) {
		// chest last opened at least a day ago (or hasn't been opened before)
		// spawn chests
		let spawnLocationArray = chestData.spawnLocations.slice(); // so that chestData itself is not changed
		for (let i = 0; i < chestData.spawnAmount; i++) {
			let spawnLocation;
			if (Player.chests.locations[this.areaName] !== undefined) {
				// chest has already been set a position for today
				spawnLocation = Player.chests.locations[this.areaName];
			}
			else {
				// chest has not been set a position yet today
				let locationIndex = Random(0, spawnLocationArray.length - 1);
				spawnLocation = spawnLocationArray[locationIndex];
				spawnLocationArray.splice(locationIndex, 1); // so it cannot be picked by the next chest in for loop (if there is one)

				// set save variable so chest is in same position for rest of day
				Player.chests.locations[this.areaName] = spawnLocation;
			}

			// concatenate loot tables (for if there are multiple)
			let lootTable = [];
			for (let i = 0; i < chestData.lootTableTemplate.length; i++) {
				lootTable = lootTable.concat(chestData.lootTableTemplate[i]);
			}
			// global loot table
			lootTable = lootTable.concat(ChestLootTables.global);

			// make chest
			this.chests.push(new LootChest({
				x: spawnLocation.x,
				y: spawnLocation.y,
				name: "Loot Chest", // used to set the loot chest opened date
				image: "lootChest",
				loot: Game.generateLoot(lootTable), // this is formatted and positioned in the loot chest class
				inventorySpace: chestData.inventorySpace,
				map: map,
				type: "chests",
				chestKey: chestData.chestKey, // key required for chest opening
			}));
		}
	}
}

// for enemies and loot chests
// returns an array with loot generated from a loot table
Game.generateLoot = function (lootTable) {
	let lootArray = [];
	for (let i = 0; i < lootTable.length; i++) {
		// check if item is eligible to be looted by the player (i.e. correct quest has been started, they haven't already looted it, etc.)
		let itemCanBeLooted = true;
		if (lootTable[i].condition !== undefined) {
			itemCanBeLooted = lootTable[i].condition();
		}

		if (itemCanBeLooted) {
			// for each item, a Random number between 0 and 100 is generated
			// lootTable is an array of objects, where the objects have a property called chance (an array)
			// chance contains the probability of getting x amount of that item, where x is the array index of the probability
			// the lowest number that the roll is higher than is selected for the number of that item that the player receives
			// the numbers in the array are multiplied by player's looting

			let possibleDropChances = lootTable[i].chance.map(element => element * (Game.hero.stats.looting/100)); // multiply chances by looting, deep copying array in process
			let rollRandom = Random(1, 100); // random number to see how much of item i the player will get (lower is better)
			let eligibleDropChances = possibleDropChances.filter(chance => rollRandom > chance); // filter chances of getting item to see all chances the player is eligible for with their roll
			let itemQuantity = possibleDropChances.indexOf(Math.max(...eligibleDropChances)); // get the number of that item the player will get

			if (itemQuantity > 0) { // check that the player should receive the item
				let item = lootTable[i].item;
				if (item.constructor === Array) {
					// if there are multiple items in an array, pick one at random
					item = item[Random(0, item.length - 1)];
				}

				if (item.name === "unidentified") {
					// repeat separately for each unidentified item
					for (let i = 0; i < itemQuantity; i++) {
						let itemToBePushed = {
							item: new UnId(item.area, item.tier), // construct unidentified item
							quantity: 1,
						};
						lootArray.push(itemToBePushed);
					}
				}
				else {
					let itemToBePushed = {
						item: item,
						quantity: itemQuantity,
					};
					lootArray.push(itemToBePushed);
				}
			}
		}
	}
	return lootArray;
}

// format array of items to have the correct quantities and stacks
Game.formatLoot = function (items) {
	for (let i = 0; i < items.length; i++) {
		// default stack size is 1
        if (items[i].item.stack === undefined) {
            items[i].item.stack = 1;
        }
		// default stacked quantity value is 1
        if (items[i].quantity === undefined) {
            items[i].quantity = 1;
        }
		// if there is more stacked than allowed, split the excess
        if (items[i].quantity > items[i].item.stack) {
            items.push({item: items[i].item, quantity: items[i].quantity-items[i].item.stack,});
            items[i].quantity = items[i].item.stack;
        }
    }

	return items;
}

// position loot ready for Dom.loot.page
// takes array of items and places them randomly in an array with (space) indices
// there are hence empty positions in the array (empty objects)
Game.positionLoot = function (items, space) {
    let spaces = [];
    let display = [];
	// generate array of possible spaces (these are removed when an item takes that random space)
    for (let i = 0; i < space; i++) {
        spaces.push(i);
        display.push(undefined);
    }
    for (let i = 0; i < items.length; i++) {
		if (spaces.length === 0) {
			// no spaces left
			console.warn("An item was truncated from the loot array due to there not being enough space in the lootee's inventory.")
			break; // end for loop
		}
		else {
			// get a random position and add the item to that position
	        let rnd = Random(0, spaces.length - 1);
	        display[rnd] = items[i];
			// remove the random position
	        spaces.splice(rnd,1);
		}
    }
    return display;
}

//
// Music
//

// called whenever a new area is entered, with the song specified in areaData
Game.playMusic = function () {
	// check the user has allowed music to play
	if (document.getElementById("musicOn").checked) {
		User.settings.music = true;
		// check if the new area's music is already being played
		let song = Areas[this.areaName]["song_" + Event.time];
		if (song === undefined) {
			// song doesn't exist - see why
			if (Areas[this.areaName].indoors) {
				// indoor areas always have daytime song
				song = Areas[this.areaName]["song_day"];
			}
			else if (Event.time === "bloodMoon") {
				// most areas have night song at blood moon
				song = Areas[this.areaName]["song_night"];
			}
			else {
				// no song exists
				console.error("No song exists for the area", this.areaName, "at the time", Event.time);
				// no need to load a song
				return;
			}
		}
		if (this.playingMusic !== Areas[this.areaName]["song_" + Event.time]) {
			this.loadMusic(Areas[this.areaName]["song_" + Event.time]);
		}
	}
}

// loads and plays music, stopping previous music
Game.loadMusic = function (song) {
	// stop previously playing song
	if (this.audio !== undefined) {
		this.stopMusic(); // possibly inefficient? might not unload old audio
	}

	this.audio = new Audio(song);

	// set music to repeat
	this.audio.addEventListener('ended', function() {
		this.currentTime = 0;
		this.play();
	}, false);

	this.audio.play();
	this.playingMusic = song;
}

// stop playing current music
Game.stopMusic = function () {
	User.settings.music = false;
	this.audio.pause();
	this.playingMusic = null;
}

// play the level up sound for the current area
// needs to be hard-coded into switch statement for each area... :(
Game.playLevelupSound = function (areaName) {
	// check the user has allowed music to play
	if (document.getElementById("musicOn").checked) {

		let levelUp = false;

		// find level up sound to play
		switch (lootArea) {

			case "loggingCamp":
				levelUp = new Audio("./assets/sounds/loggingCampLevelup.mp3");
				break;

			default:
				console.error("No level up sound for current area - add it to the switch statement in Game.playLevelupSound");

		}

		if (levelUp !== false) { // check that the area has been added to the switch statement

			this.audio.pause(); // pause currently playing song
			levelUp.play(); //  play levelup sound
			levelUp.addEventListener('ended', function() { // resume area's song when levelup sound has finished
				this.audio.play();
			}.bind(Game), false);

		}

	}
}

//
// Health
//

// called every second
// healthRegen = health regenerated per second
// tbd make list of characters that regen health
Game.regenHealth = function () {
	// player
	this.restoreHealth(Game.hero, Game.hero.stats.healthRegen);
	// food is done in the food status effect itself

	// npcs
	for (let i = 0; i < Game.npcs.length; i++) {
		if (!Game.npcs[i].respawning) {
			this.restoreHealth(Game.npcs[i], Game.npcs[i].stats.healthRegen);
		}
	}
	// dummies
	for (let i = 0; i < Game.dummies.length; i++) {
		if (!Game.dummies[i].respawning) {
			this.restoreHealth(Game.dummies[i], Game.dummies[i].stats.healthRegen);
		}
	}
	// enemies
	for (let i = 0; i < Game.enemies.length; i++) {
		if (!Game.enemies[i].respawning) {
			this.restoreHealth(Game.enemies[i], Game.enemies[i].stats.healthRegen);
		}
	}
}

// restores health to the target, not allowing them to go above their maximum health
// returns true if the target was healed for the full amount
Game.restoreHealth = function (target, health) {
	if (target.health !== target.stats.maxHealth) {
		// health can be restored
		if (target.health + health > target.stats.maxHealth) {
			// too much health - cap out at maximum
			target.health = target.stats.maxHealth;
			if (target.constructor.name === "Hero") {
				// update health bar display
				Game.secondary.render();
				return false;
			}
		}
		else {
			target.health += health;
			if (target.constructor.name === "Hero") {
				// update health bar display
				Game.secondary.render();
				return true;
			}
		}
	}
}

//
// Update game state
//

Game.update = function (delta) {

	//
	// User movement
	//

	// update collision positions
	for (let i = 0; i < this.collisions.length; i++) {
		this.updateScreenPosition(this.collisions[i]);
	}

	let moved = false;
    // handle hero movement with arrow keys
	if (this.hero.moveTowards === undefined && !this.hero.hasStatusEffect("Displacement")) {
		let dirx = 0;
		let diry = 0;
		// player has control over themselves
	    if (this.keysDown.LEFT) { dirx = -1; this.hero.direction = 2; this.hero.updateRotation(); }
	    if (this.keysDown.RIGHT) { dirx = 1; this.hero.direction = 4; this.hero.updateRotation(); }
	    if (this.keysDown.UP) { diry = -1; this.hero.direction = 1; this.hero.updateRotation(); }
	    if (this.keysDown.DOWN) { diry = 1; this.hero.direction = 3; this.hero.updateRotation(); }

		// strafing is slower
		if (dirx !== 0 && diry !== 0) {
			// strafing
			if (dirx === 1) {
				dirx = 0.71; // ~sqrt(0.5)
			}
			else if (dirx === -1) {
				dirx = -0.71;
			}
			if (diry === 1) {
				diry = 0.71;
			}
			else if (diry === -1) {
				diry = -0.71;
			}
		}

		if (dirx !== 0 || diry !== 0) {
	        this.hero.move(delta, dirx, diry);
	        this.hasScrolled = true;
		    this.camera.update();
			moved = true;
	    }
		else {
	        this.hasScrolled = false;
		}
	}
	else {
		// hero always moves until it reaches a certain destination
		this.hero.move(delta); // no need for direction functions (found out in move)
		this.hasScrolled = true;
	    this.camera.update();
		moved = true;
	}

	// tell server that user location has changed so other users can see it
	// check if user is connected to the websocket
	if (moved && ws !== false && ws.readyState === 1) {
		ws.send(JSON.stringify({
			type: "playerLocation",
			userID: ws.userID,
			x: this.hero.x,
			y: this.hero.y,
			direction: this.hero.direction,
			expand: this.hero.expand
		}));
	}

	//
	// User interaction
	//

	// check collision with npcs - includes quest givers, quest finishers, merchants, soul healers, more TBA
	for (let i = 0; i < this.npcs.length; i++) { // iterate though npcs

		let npc = this.npcs[i];

 		// check npc is not dead, that hero is touching it, and that it is not already currently displayed
		if (this.hero.isTouching(npc) && Dom.currentlyDisplayed !== npc.name && !npc.respawning) {

			// arrays for choose DOM (these are populated in the below for loop)
			let textArray = []; // array of text to describe that function
			let functionArray = []; // array of functions that can be called
			let parameterArray = []; // array of arrays of parameters for these functions (to be ...spread into the function)

			let forceChoose = false; // whether choose dom should be forced (some roles want this)

			// booleans to decide npc chat for if choose DOM doesn't open
			let questActive = false; // if one of the npc's quests is currently active
			let questComplete = false; // if one of the npc's quests has been completed
			let notUnlockedRoles = false; // if one of the npc's roles has not been unlocked
			let textSaid = false; // if all of the above variables should be ignored (because something else has been said instead, e.g: soul healer cannot be healed text)
			// see below for loop for logic regarding these variables

			if (this.keysDown.SPACE && npc.roles !== undefined) {
				// choosing to interact with NPC - bring up a DOM menu if possible
				// and the NPC is a functional NPC (does something when spoken to)

				for (let x = 0; x < npc.roles.length; x++) { // iterate through quests involving that npc
					let role = npc.roles[x];

					if (role.roleRequirement === undefined || role.roleRequirement()) {
						// quest starts
						if (role.role === "questStart" || role.role === "questStartFinish") {
							// quest is ready to be accepted

							let questCanBeStarted = true; // set to false if the quest cannot be started
							let questToBeStarted = role.quest;

							if (role.quest.constructor === Array && role.newQuestFrequency === "daily") {
								// quest is an array (hence a random one is picked each questing time period)
								// all of these quests are daily quests
								if (role.quest.some(quest => Player.quests.activeQuestArray.includes(quest.quest))) { // one of the quests is currently active
									questCanBeStarted = false;
									questActive = true; // for npc dialogue
								}
								else if (role.quest.some(quest => Player.quests.questLastFinished[quest.questArea][quest.id] >= GetFullDate())) { // one of the quests has already been done today (or after today o.O)
									questCanBeStarted = false;
									questComplete = true; // for npc dialogue
								}
								else {
									// pick a quest to be started
									if (Player.quests.randomDailyQuests[role.questVariable] !== undefined) {
										// a quest has already been chosen for the player today
										questToBeStarted = questToBeStarted.find(quest => quest.quest === Player.quests.randomDailyQuests[role.questVariable]);
									}
									else {
										// a quest has not been chosen for the player today
										questToBeStarted = questToBeStarted.filter(quest => Player.quests.possibleQuestArray.includes(quest.quest));
										if (questToBeStarted.length > 0) { // at least one quest survived the level and quest requirements
											questToBeStarted = questToBeStarted[Random(0, questToBeStarted.length - 1)]; // pick random quest
											// set variable so future quests today are the same
											Player.quests.randomDailyQuests[role.questVariable] = questToBeStarted.quest;
										}
										else {
											questCanBeStarted = false;
										}
									}
								}
							}
							else {
								// single quest
								if (!Player.quests.possibleQuestArray.includes(role.quest.quest)) {
									// quest is not possible
									questCanBeStarted = false;

									// figure out what NPC should say to the player
									if (Player.quests.activeQuestArray.includes(role.quest.quest)) { // quest is already active
										questActive = true; // for npc dialogue
									}
									else {
										// check if it is daily or one time
										if (role.quest.repeatTime === undefined) {
											// one time
											if (Player.quests.completedQuestArray.includes(role.quest.quest)) { // quest has already been completed
												questComplete = true; // for npc dialogue
											}
										}
										else if (role.quest.repeatTime === "daily") {
											// daily
											if (Player.quests.questLastFinished[role.quest.questArea][role.quest.id] >= GetFullDate()) { // quest has already been done today (or after today o.O)
												// note that if the quest has not been finished (hence questLastFinished is undefined) the condition will always return false
												questComplete = true; // for npc dialogue
											}
										}
									}

								}
							}

							if (questCanBeStarted) {

								if (typeof questToBeStarted.startRewards !== "undefined" && typeof questToBeStarted.startRewards.items !== "undefined") {
									if (Dom.inventory.requiredSpace(questToBeStarted.startRewards.items)) {
										// user has space for quest start items
										// quest start appears as an option for choose DOM
										textArray.push("Quest start: " + questToBeStarted.quest);
										functionArray.push(Dom.quest.start);
										parameterArray.push([questToBeStarted]);
									}
									else {
										// user doesn't have enough space
										npc.say(npc.chat.inventoryFull, 0, true);
									}
								}
								else {
									// no quest start items, so user ofc has enough inventory space
									// quest start appears as an option for choose DOM
									textArray.push("Quest start: " + questToBeStarted.quest);
									functionArray.push(Dom.quest.start);
									parameterArray.push([questToBeStarted]);
								}
							}
						}

						// quest finishes
						if (role.role === "questFinish" || role.role === "questStartFinish") {
							// check if quest is ready to be finished

							let questCanBeFinished = true; // set to false if the quest cannot be finished
							let questToBeFinished = role.quest;

							if (role.quest.constructor === Array && role.newQuestFrequency === "daily") {
								// quest is an array (hence a Random one is picked each questing time period)
								// all of these quests are daily quests

								questToBeFinished = role.quest.find(quest => Player.quests.activeQuestArray.includes(quest.quest)); // find which quest the active one is

								if (questToBeFinished === undefined) { // none of the quests are currently active
									questCanBeFinished = false;
								}

								// no need to check if it has already been completed as these are all daily
							}
							else {
								// single quest
								if (!Player.quests.activeQuestArray.includes(role.quest.quest)) { // quest is not already active
									questCanBeFinished = false;
								}
							}

							if (questCanBeFinished) {
								// check if quest conditions have been fulfilled
								// canBeFinishedArray used for efficiency
								if (Player.quests.canBeFinishedArray.includes(questToBeFinished.quest)) {

									if (typeof role.quest.rewards !== "undefined" && typeof role.quest.rewards.items !== "undefined") {
										if (Dom.inventory.requiredSpace(role.quest.rewards.items)) {
											// user has space for quest finish items
											// quest finish appears as an option for choose DOM
											textArray.push("Quest finish: " + role.quest.quest);
											functionArray.push(Dom.quest.finish);
											parameterArray.push([role.quest]);
										}
										else {
											// user doesn't have enough space
											npc.say(npc.chat.inventoryFull, 0, true);
										}
									}
									else {
										// no quest item rewards, so user ofc has enough inventory space
										// quest finish appears as an option for choose DOM
										textArray.push("Quest finish: " + questToBeFinished.quest);
										functionArray.push(Dom.quest.finish);
										parameterArray.push([questToBeFinished]);
									}
								}
								// quest conditions have not been fulfilled
								else {
									questActive = true;
								}

							}
							// quest has already been completed
							else if (Player.quests.completedQuestArray.includes(role.quest.quest)) {
								questComplete = true;
							}
						}

						// merchants
						else if (role.role === "merchant") {
							// merchant appears as an option for choose DOM

							// filter the sold items to check that they are eligible to be sold
							let soldItems = role.sold.filter(soldItem => soldItem.eventRequirement === undefined || soldItem.eventRequirement === Event.event);

							// filter for condition
							soldItems = soldItems.filter(soldItem => soldItem.condition === undefined || soldItem.condition() === true);

							if (typeof role.numberSold !== "undefined") {
								// sell a particular amount of items that rotate over time
								let dateValue = 1;
								let date = new Date();
								switch (role.rotation) {
									case "day":
										dateValue = date.getDate(); // 1 to 31
										break;

									case "week":
										dateValue = GetWeek(); // 1 to 52
										break;

									default:
										console.error("Unrecognised rotation type for merchant " + npc.name);
								}

								soldItems = Dom.merchant.chooseItems(soldItems, dateValue, role.numberSold);
							}

							textArray.push(role.chooseText || "I'd like to browse your goods.");
							functionArray.push(Dom.merchant.page);
							parameterArray.push([npc, soldItems, role.shopGreeting]);
						}

						// soul healers
						else if (role.role === "soulHealer") {
							let statusEffect = this.hero.statusEffects.find(statusEffect => statusEffect.title === "XP Fatigue"); // try to find xp fatigue effect
							if (statusEffect !== undefined) {
								// calculate cost
								this.soulHealerCost = Math.floor(statusEffect.info.ineffectiveAmount / 50); // set to Game so that it can be accessed from the function in Dom.text.page
								if (this.soulHealerCost < 1) {
									this.soulHealerCost = 1;
								}

								// save the npc into a variable so that it can say something if the person is healed
								this.currentSoulHealer = npc;

								// soul healer appears as an option for choose DOM
								textArray.push(role.chooseText || "I'd like to remove my 'XP Fatigue' status effect.");
								functionArray.push(Dom.text.page);
								parameterArray.push(["Soul Healer", npc.chat.canBeHealedText, true, ["Remove XP Fatigue for " + this.soulHealerCost + " gold"], [function () {
									if (Dom.inventory.check(2, "currency", this.soulHealerCost)) {
										Dom.inventory.removeById(2, "currency", this.soulHealerCost);
										this.hero.removeStatusEffect(this.hero.statusEffects.findIndex(statusEffect => statusEffect.title === "XP Fatigue")); // remove xp fatigue effect
										Dom.closePage("textPage");
										this.currentSoulHealer.say(this.currentSoulHealer.chat.healedText, 0, false);
										this.currentSoulHealer = undefined; // reset variable that remembers which soul healer the player is speaking to
										this.soulHealerCost = undefined; // reset variable that remembers the cost for soul healing
									}
									else {
										// player cannot afford it
										this.soulHealers[i].say(this.soulHealers[i].chat.tooPoor, 0, true);
									}
								}]]);
							}
							else {
								if (!Dom.chat.contents.includes("<strong>" + npc.name + "</strong>: " + npc.chat.healedText)) {
									if (Dom.currentlyDisplayed === "") {
										// display instruction text if user cannot be healed and hasn't just been healed
										npc.say(npc.chat.cannotBeHealedText, 0, true);
										textSaid = true; // do not say something in chat, as something has already been said
									}
								}
							}
						}

						// identifiers
						else if (role.role === "identifier") {
							// identifier appears as an option for choose DOM
							if (Dom.identifier.check()) {
								// player has unidentified items
								textArray.push(role.chooseText || "I have an item I'd like to identify.");
								functionArray.push(Dom.identifier.page);
								parameterArray.push([npc, true]);
							}
							else {
								if (Dom.currentlyDisplayed === "") {
									// player has no unidentified items; send chat message explaining this instead==
									npc.say(npc.chat.noUnidentified, 0, true);
									textSaid = true; // do not say something in chat, as something has already been said
								}
							}
						}

						// item buyers
						else if (role.role === "itemBuyer") {
							// item buyer appears as an option for choose DOM
							textArray.push(role.chooseText || "I'd like to sell some items to you.");
							functionArray.push(Dom.buyer.page);
							parameterArray.push([npc]);
						}

						// drivers
						else if (role.role === "driver") {
							// driver appears as an option for choose DOM
							textArray.push(role.chooseText || "I'd like to ride your cart to somewhere.");
							functionArray.push(Dom.driver.page);
							parameterArray.push([npc, role.destinations]);
						}

						// bankers
						else if (role.role === "banker") {
							// bank appears as an option for choose DOM
							textArray.push(role.chooseText || "I'd like to access my bank storage.");
							functionArray.push(Dom.bank.page);
							parameterArray.push([]);
						}

						// generic text DOM
						else if (role.role === "text") {
							// npc chat appears as an option in choose DOM
							textArray.push(role.chooseText);
							functionArray.push(Dom.text.page);
							parameterArray.push([npc.name, role.chat, role.showCloseButton, role.buttons, role.functions]);
						}

						// button just runs a function
						else if (role.role === "function") {
							// npc chat appears as an option in choose DOM
							textArray.push(role.chooseText);
							functionArray.push(role.onClick);
							parameterArray.push([]);
						}


						// force choose DOM if the role wants this
						if (role.forceChoose === true) {
							forceChoose = true;
						}
					}
					else {
						notUnlockedRoles = true;
					}
				} // finished iterating through this npc's roles

			}

			if (functionArray.length > 0) {
				// npc can be spoken to, hence choose DOM should be opened
				// Dom.choose.page checks whether or not the DOM is occupied, and handles red flashing of close button
				Dom.choose.page(npc, textArray, functionArray, parameterArray, forceChoose);
				// if there is only one thing that can be chosen between, choose DOM handles this and just skips itself straight to that one thing
			}
			else {
				// text that the npc says if they don't open a choose DOM
				// note some of these don't require spacebar
				if (!textSaid && Dom.currentlyDisplayed === "") { // check if any extra text should be said at all
					if (questActive) {
						// the player has active quest(s) with the npc and no other alternate options
						npc.say(npc.chat.questProgress, 0, true);
					}
					else if (questComplete) {
						// the player has finished quest(s) with the npc and no other alternate options
						npc.say(npc.chat.questComplete, 0, true);
					}
					else if (notUnlockedRoles) {
						// the player has not unlocked a possible role with the npc and pressed spacebar
						npc.say(npc.chat.notUnlockedRoles, 0, true);
					}
				}
			}
		}

		// check if the currently displayed NPC is the current one in the for loop
		if (npc.id === Dom.currentNPC.id && npc.type === Dom.currentNPC.type) {
			// close the DOM if the player is too far away from the NPC or if the NPC is dead
			if (npc.respawning || this.distance(this.hero, npc) > this.hero.stats.domRange) {
				// NPC is dead or player is more than 4 (can be changed) tiles away from NPC
				Dom.closeNPCPages();
			}
		}
	} // finished iterating through npcs

	// update villagers
	for (let i = 0; i < this.villagers.length; i++) {
		if (!this.villagers[i].respawning) { // check villager is not dead
			this.villagers[i].update(delta);
		}
    }

	// update enemies
	for (let i = 0; i < this.enemies.length; i++) {
		let enemy = this.enemies[i];

		if (!enemy.respawning) { // check enemy is not dead
			enemy.update(delta);
		}

		// enemy looting
		// check enemy is a corpse (hence might be able to be looted)
		if (this.enemies[i].isCorpse) {
			// check player is touching enemy, player is holding space, enemy can be looted, and DOM isn't occupied
			if (this.keysDown.SPACE && this.hero.isTouching(this.enemies[i]) && this.enemies[i].loot !== null && Dom.currentlyDisplayed === "") {
				// looting page
				Dom.choose.page(this.enemies[i], ["Loot enemy"], [function () {
					Dom.loot.page(Game.enemies[i].name, Game.enemies[i].loot);
					Dom.loot.currentId = "e"+i;
					// "e"+i is a string that allows the loot menu to be identified - e means enemy, and i is the index of the enemy in Game.enemies
					// the loot menu closes when the area changes anyway, so this will always work
					// Dom.loot.currentId is only ever used in main, in the function Game.lootClosed() (called by index.html)
				}], [[]]);
			}
		}

		// check if the currently displayed DOM is for the current enemy in the for loop (looting)
		if (enemy.id === Dom.currentNPC.id && enemy.type === Dom.currentNPC.type) {
			// close the DOM if the player is too far away from the enemy or if the enemy is dead
			if (enemy.respawning && this.distance(this.hero, enemy) > this.hero.stats.domRange) {
				// enemy is dead or player is more than 4 tiles away from enemy
				Dom.closeNPCPages();
			}
		}

		// checkTouching
		if (enemy.checkTouching !== undefined) {
			// iterate through each separate thing that should be checked
			for (let x = 0; x < enemy.checkTouching.length; x++) {
				// array of things to check
				let touchingArray = this[enemy.checkTouching[x].arrayName];
				if (enemy.checkTouching[x].objectName !== undefined) {
					// particular name for object in array
					touchingArray = touchingArray.filter(obj => obj.name === enemy.checkTouching[x].objectName);
				}

				// check if any of them are being touched
				for (let y = 0; y < touchingArray.length; y++) {
					if (enemy.isTouching(touchingArray[y])) {
						// it is touching it
						// passes in index of object to function
						// call is used to bind it to enemy
						enemy.checkTouching[x].isTouchingFunction.call(enemy, y, touchingArray[y].id);
					}
				}
			}
		}
	}

	// move projectiles if they need to be moved
	for (let i = 0; i < this.projectiles.length; i++) {
		let projectile = this.projectiles[i];

		if (projectile.moveTowards !== undefined) {
			// move towards the position
			let direction = this.bearing(projectile, projectile.moveTowards);
			projectile.x += Math.cos(direction) * projectile.moveSpeed * delta;
			projectile.y += Math.sin(direction) * projectile.moveSpeed * delta;

			// only deal damage if it hasn't before
			if (projectile.damageDealt.length === 0) {
				// hasn't dealt damage
				projectile.dealDamage(projectile.attacker, projectile.targets);
				// stop moving
				if (projectile.stopMovingOnDamage === true) {
					projectile.moveTowards = undefined;
				}
				// after a timeout (2s), remove the projectile that was just shot
				// taken from Player
				let a = projectile.id; // maintain a variable of the currently shot projectile's id
				this.objectRemoveTimeouts.push(setTimeout(function (a) {
					this.removeObject(this.channellingProjectileId, "projectiles", Projectile);
				}, 1500, a)); // pushed to objectRemoveTimeouts so it can be removed when the area is changed
			}

			// remove the projectile if it has moved too far
		}
	}

	// check collision with mailboxes
	for (let i = 0; i < this.mailboxes.length; i++) {
		let mailbox = this.mailboxes[i];

		// pressing space and touching mailbox, and DOM isn't currently occupied
		if (this.keysDown.SPACE && this.hero.isTouching(mailbox) && Dom.currentlyDisplayed === "") {
			Dom.choose.page(mailbox, ["Check mail"], [Dom.mail.page], [[]]);
		}

		// check if the currently displayed DOM is for the current mailbox in the for loop
		if (mailbox.id === Dom.currentNPC.id && mailbox.type === Dom.currentNPC.type) {
			// close the DOM if the player is too far away from the mailbox or if the mailbox is dead
			if (this.distance(this.hero, mailbox) > this.hero.stats.domRange) {
				// player is more than 4 tiles away from mailbox
				Dom.closeNPCPages();
			}
		}
	}

	// check collision with real players
	for (let i = 0; i < this.players.length; i++) {
		let player = this.players[i];

		// pressing space and touching player, and DOM isn't currently occupied
		if (this.keysDown.SPACE && this.hero.isTouching(player) && Dom.currentlyDisplayed === "") {
			// true = force trade
			Dom.choose.page(player, ["Trade with this player"], [Dom.trade.request], [[player.userID, player.name]], true);
		}

		// check if the currently displayed DOM is for the current player in the for loop
		if (player.id === Dom.currentNPC.id && player.type === Dom.currentNPC.type) {
			// close the DOM if the player is too far away from the player or if the mailbox is dead
			if (this.distance(this.hero, player) > this.hero.stats.domRange) {
				// player is more than 4 tiles away from player
				Dom.closeNPCPages();
			}
		}
	}

	// check collision with tiles
	if (this.keysDown.SPACE) {
		// space key is down
		let tileNum = this.hero.getTileAtFeet();
		if (map.interactWithTile !== undefined) {
			map.interactWithTile(tileNum, this.hero.x, this.hero.y + this.hero.height/2);
		}
	}

	// check distance from chests
	for (let i = 0; i < this.chests.length; i++) {
		let chest = this.chests[i];

		// chest opening
		// player is holding space, touching chest, chest can be looted, and DOM isn't occupied
		if (this.keysDown.SPACE && Game.hero.isTouching(chest) && chest.loot !== null && Dom.currentlyDisplayed === "") {
			// canBeLooted function
			if (chest.canBeLooted === undefined || chest.canBeLooted()) {
				// check for locked chest
				if (!chest.locked) {
					// chest not locked
				}
				else if (chest.locked && Dom.inventory.check(chest.chestKey.id, chest.chestKey.type)) {
					// chest locked but player has key
					// remove key
					Dom.inventory.removeById(chest.chestKey.id, chest.chestKey.type);
					// unlock chest (for if the player opens it again before changing area)
					chest.locked = false;
					// chat message to tell them that a key was used
					Dom.chat.insert("You used a <strong>" + chest.chestKey.name + "</strong> to unlock the Loot Chest.");
				}
				else {
					// chest locked and doesn't have a key
					// chat message to tell them this
					Dom.chat.insert("The Loot Chest is locked! You need a <strong>" + chest.chestKey.name + "</strong> to unlock it.", 0, undefined, true);
				}

				// if the chest has been unlocked, open the chest!
				if (!chest.locked) {
					chest.openLoot(i);
				}
			}
		}

		// check if the currently displayed DOM is for the current chest in the for loop
		if (chest.id === Dom.currentNPC.id && chest.type === Dom.currentNPC.type) {
			// close the DOM if the player is too far away from the chest or if the chest is dead
			if (this.distance(this.hero, chest) > this.hero.stats.domRange) {
				// player is more than 4 tiles away from chest
				Dom.closeNPCPages();
				// loot not wiped (so the player can revisit if they closed by accident)
			}
		}
	}

	// cannons (not currently used nor working)
	for (let i = 0; i < this.cannons.length; i++) {
		// check if player is touching cannon and holding space
		if (this.keysDown.SPACE && Game.hero.isTouching(this.cannons[i])) {
			this.cannons[i].interact(); // might not end up doing anything if cannon is on cooldown (perhaps that if should be moved here?)
		}
	}

	// check collision with area teleports
	for (let i = 0; i < this.areaTeleports.length; i++) {
		// give area teleports a screen X and Y
		this.updateScreenPosition(this.areaTeleports[i]);

        if (this.hero.isTouching(this.areaTeleports[i])) {
			if (this.areaTeleports[i].teleportCondition === undefined
			|| (this.areaTeleports[i].teleportCondition !== undefined && this.areaTeleports[i].teleportCondition())) {
				// a teleport condition has been met (if there is one)
				// find player destination
				let destinationX = this.areaTeleports[i].destinationX || this.hero.x + this.areaTeleports[i].playerAdjustX;
				let destinationY = this.areaTeleports[i].destinationY || this.hero.y + this.areaTeleports[i].playerAdjustY;
				// teleport to new area
				this.loadArea(this.areaTeleports[i].teleportTo, {x: destinationX, y: destinationY});
			}
			else {
				// teleport condition not met
				if (this.areaTeleports[i].teleportFailText !== undefined) {
					// text in chat
					Dom.chat.insert(this.areaTeleports[i].teleportFailText, 0, undefined, true);
				}
				if (this.areaTeleports[i].teleportFailFunction !== undefined) {
					// function
					this.areaTeleports[i].teleportFailFunction();
				}
			}
		}
    }

	// check collision with tripwires - invisible entities that call a function when touched
	for (let i = 0; i < this.tripwires.length; i++) {
		let entity = this.tripwires[i];

		// give tripwires a screen X and Y
		this.updateScreenPosition(entity);

        if ((entity.collisionType === "body" && this.hero.isTouching(entity)) ||
		(entity.collisionType === "feet" && this.hero.footHitbox.isTouching(entity))) {
			let boundOnPlayerTouch = entity.onPlayerTouch.bind(entity);
			boundOnPlayerTouch();
		}
	}

	// check collision with points of interest (things that insert something to chat when you touch them)
	for (let i = 0; i < this.infoPoints.length; i++) {
		let thing = this.infoPoints[i];

		if (this.hero.moveTowards === undefined && this.hero.isTouching(thing)) {
			// does not trigger if moveTowards is active
			Dom.chat.insert(thing.onTouchChat, 0, undefined, true); // noRepeat is true
		}
	}

	this.playerProjectileUpdate(delta); // update player's currently channelling projectile

	// update particles (move them)
	if (document.getElementById("particlesOn").checked) { // check particle setting
		for (let i = 0; i < this.particles.length; i++) {
			let particle = this.particles[i]; // save to variable for easy access

			if (particle.moveTowards !== undefined) {
				// move the particle towards a location over its time period
				let proportionTravelled = delta*1000 / particle.moveTowards.time;
				particle.x += (particle.moveTowards.x - particle.x) * proportionTravelled;
				particle.y += (particle.moveTowards.y - particle.y) * proportionTravelled;
			}
		}
	}

	// update weather particles
	if (document.getElementById("weatherOn").checked && !Areas[this.areaName].indoors) {
		Weather.addAdditionalParticles();
		Weather.moveParticles(delta);
	}
};

// update player's currently channelling projectile
Game.playerProjectileUpdate = function(delta) {
	if (this.hero.channellingProjectileId !== null && this.hero.channellingProjectileId !== undefined && this.hero.channelling === "projectile") { // check that the player is currently channelling a projectile
		let projectile = this.projectiles[this.searchFor(this.hero.channellingProjectileId, this.projectiles)];

		// increase player channelTime if they are holding their mouse down
		if (this.hero.channelling) {
			this.hero.channelTime += delta;
		}

		// archer weapons slowly focus as they are channelling
		if (this.getAttackType() === "bow") {
			if (projectile.variance > 0 + this.hero.stats.focusSpeed * delta * 16) { // check it won't be 0 or less
				projectile.variance -= this.hero.stats.focusSpeed * delta * 16;
			}
			else {
				projectile.variance = 1;
			}
		}

		// mage weapon
		else if (this.getAttackType() === "staff") {
			if (projectile.expand < 2) { // check it won't be 0 or less
				// takes about 1 second to fully expand
				projectile.expand += delta;
				projectile.width += projectile.image.width * delta;
				projectile.height += projectile.image.height * delta;
				projectile.hitbox.width += 23 * delta; // assumes the mage hitbox's width is always 30
				projectile.hitbox.height += 23 * delta;
			}
		}
	}
}

// returns the attack type of the player's currently equipped weapon, or undefined if they do not have one equipped
// "bow", "staff", "sword", or "rod" depending on how the weapon should act for attacking
// only neccessary to use at the moment for if allProjectiles might affect weapon's type
Game.getAttackType = function () {
    let weaponType = Player.inventory.weapon.type;

    if (Player.inventory.weapon.allProjectiles) {
        // weapon shoots projectiles based on user's class
        switch (Player.class) {
            case "a":
                weaponType = "bow";
                break;
            case "m":
                weaponType = "staff";
                break;
            case "k":
                weaponType = "sword";
                break;
            default:
                console.error("Unknown player class: " + Player.class);
        }
    }

    return weaponType;
}

// increase player XP by xpGiven, and check for levelup, update secondary canvas, obey XP fatigue, etc.
// xpBonus is set to false if there is no XP bonus given by xp multiplier
Game.getXP = function (xpGiven, xpBonus) {
	if (typeof xpGiven === "number") {
		// xp bonus
		if (xpBonus === false) {
			xpGiven *= (1 + Game.hero.stats.xpBonus / 100)
		}

		// increase XP
		Player.xp += xpGiven;

		// XP fatigue
		if (Player.fatiguedXP !== 0) { // fatigued XP is worth 50% less due to a recent death
			if (xpGiven > Player.fatiguedXP) {
				Player.xp -= Player.fatiguedXP / 2;
				Player.fatiguedXP = 0;
				Game.hero.removeStatusEffect(Game.hero.statusEffects.findIndex(statusEffect => statusEffect.title === "XP Fatigue"), 1); // remove xp fatigue effect
			}
			else {
				Player.xp -= xpGiven / 2;
				Player.fatiguedXP -= xpGiven;
			}
		}

		// now that the XP has fully been added, check for a levelUp and display it on the canvas

		// check for level up
		if (Player.level < LevelXP.length - 1) {
			if (Player.xp >= LevelXP[Player.level]) {
				// level up
				Player.xp -= LevelXP[Player.level];
				Player.level++;
				this.hero.level = Player.level;

				// level up cosmetic stuff
				this.playLevelupSound(this.areaName);
				this.levelUpFireworks(Player.level);
				this.displayOnCanvas("Level Up!", (Player.level-1) + " \u{2794} " + Player.level, 4, true); // display on canvas for 34

				// increase player health
				Player.stats.maxHealth += 5;

				if(Player.level >= LevelXP.length - 1){
					// sets xp bar to fully completed because Game.getXP doesn't set it when you level up
					Player.xp = LevelXP[Player.level];
				}

				document.getElementById("level").innerHTML = "Level "+Player.level;

				// chat message for level up
				Dom.chat.insert("Level up: "+(Player.level-1)+" &#10132; "+Player.level);

				// tell server that player's level has been changed so that DOM chat players online can display this for all players
				// Dom also announces this level up to all players
			    // check if user is connected to the websocket
			    if (ws !== false && ws.readyState === 1) {
					ws.send(JSON.stringify({
						type: "changeLevel",
						level: Player.level
					}));
				}

				// update possible quests
				Dom.quests.possible();

				this.getXP(0); // levelling up multiple times
			}
			// xp gained
			this.secondary.render();
		}
		else {
			// max level
			Player.xp = LevelXP[Player.level];
		}

		Dom.checkProgress();
	}
	else {
		console.error("XP increase amount is not a number: ", xpGiven)
	}
}

// called whenever weapon/armour is changed (in order to change player stats)
// this is called by index.html
// PG's code
Game.inventoryUpdate = function (e) {
	// check if a weapon or armour slot has been changed
	if (e === undefined || // clicked on an item
		Dom.inventory.fromArray === Player.inventory || Dom.inventory.toArray === Player.inventory) { // dragged to or from an equipment slot

		// player stats updated
		this.hero.stats = Player.stats; // inefficient (should be linked)

		// if the player is holding a weapon, set their range
		if (Player.inventory.weapon.type !== undefined) {
			// player has weapon equipped
			let weaponType = this.getAttackType();
			this.hero.stats.range = WeaponRanges[weaponType] + this.hero.stats.rangeModifier;
		}
		else {
			// no weapon equipped
			this.hero.stats.range = 0;
		}

		// set player projectile
		this.projectileImageUpdate();

		// if the player is no longer holding a fishing rod, remove their bobber
		if (Player.inventory.weapon.type !== "rod" && this.hero.channelling === "fishing") {
			this.removeObject(this.hero.channellingProjectileId, "projectiles", Projectile); // remove bobber

			this.hero.channelling = false;
			this.hero.channellingProjectileId = null;
		}

		// set weapon variance
		if (this.getAttackType() === "bow" || Player.inventory.weapon.variance !== undefined) {
			this.hero.stats.variance = Player.inventory.weapon.variance || 100; // 100 is default
		}
		else {
			// non-bows have no variance
			this.hero.stats.variance = 0;
		}

		// set weapon penetration
		if (this.getAttackType() === "bow" || Player.inventory.weapon.penetration !== undefined) {
			this.hero.stats.penetration = Player.inventory.weapon.penentration || false;
		}
		else {
			// non-bows do penetrate
			this.hero.stats.penetration = true;
		}
	}

	// update item buyer page if it is open
	if (document.getElementById("buyerPage").hidden === false) {
	    Dom.buyer.page();
	}

	Dom.checkProgress(); // quest log update check
}

// set player projectile/bobber image
Game.projectileImageUpdate = function () {
	// figure out if it is a projectile or bobber, and save variable names for later
	let nameAddress = "heroProjectileName";
	let adjustAddress = "heroProjectileAdjust";
	if (Player.inventory.weapon.type === "rod") {
		nameAddress = "heroBobberName";
		adjustAddress = null;
	}

	// if the player is now holding a weapon with a special projectile image, load that image and stop the player from attacking until this is done
	if (Player.inventory.weapon.projectile !== undefined && this[nameAddress] !== Player.inventory.weapon.projectile) {
		// not loaded projectile image before
		this[nameAddress] = Player.inventory.weapon.projectile;
		if (adjustAddress !== null) { // set adjust for projectiles only (not bobbers)
			this[adjustAddress] = Player.inventory.weapon.projectileAdjust;
			if (this[adjustAddress] === undefined) {
				this[adjustAddress] = {x:0,y:0}; // default value
			}
		}

		// load image and stop player attacking until it has loaded
		this.loadImagesAndStopAttacking({[this[nameAddress]]: {normal:"./assets/projectiles/" + this[nameAddress] + ".png"}}, false);
	}

	// if the player is NOT holding a weapon with a special projectile image, and the skin does have a special projectile image
	else if (Player.inventory.weapon.projectile === undefined && this[nameAddress] !== Skins[Player.class][Player.skin].projectile) {
		// needs to reload default projectile image
		if (nameAddress === "heroProjectileName") {
			// weapon projectile - saved in skindata by default
			this[nameAddress] = Skins[Player.class][Player.skin].projectile;
		}
		else if (nameAddress === "heroBobberName") {
			// bobber projectile - default is always "bobber"
			this[nameAddress] = "bobber";
		}
		if (adjustAddress !== null) { // set adjust for projectiles only (not bobbers)
			this[adjustAddress] = Skins[Player.class][Player.skin].projectileAdjust;
		}

		// load image and stop player attacking until it has loaded
		this.loadImagesAndStopAttacking({[this[nameAddress]]: {normal: "./assets/projectiles/" + this[nameAddress] + ".png"}}, false);
	}
}

// called whenever the "hex" stat has been changed from 0 to something else
Game.loadHexImages = function () {
	this.loadImagesAndStopAttacking({
		sheepRight: {normal: "./assets/enemies/sheep.png"},
		sheepLeft: {normal: "./assets/enemies/sheep.png", flip: "vertical"},
		chickenRight: {normal: "./assets/enemies/chicken.png"},
		chickenLeft: {normal: "./assets/enemies/chicken.png", flip: "vertical"},
		toadRight: {normal: "./assets/enemies/toad.png"},
		toadLeft: {normal: "./assets/enemies/toad.png", flip: "vertical"},
	}, function () {
		return Game.hero.stats.hex === 0; // only delete on area change if hex is 0
	});
}

// load image(s) and stop the player from attacking until it is done
// images parameter should be an object in the same format as areadata's "images" properties
// deleteIf is the deleteIf parameter used for all the images (tbd make this per image)
Game.loadImagesAndStopAttacking = function (images, deleteIf) {
	// set weapon property "cannotAttack" to true so the player is blocked from attacking
	Player.inventory.weapon.cannotAttack = true;

	let p = this.loadImages(images, deleteIf);

	// wait until the image(s) have been loaded (or an error has been returned)
	Promise.all(p).then(function (value) {
		// only called once (every) image has loaded (or if it has already been loaded)
		// set weapon "cannotAttack" property back to false
		Player.inventory.weapon.cannotAttack = undefined;
	})
	.catch(function (err) {
		console.error("Your image(s) did not load correctly.", err);
	});
}

// called whenever a loot menu is closed
// called by index.html
// itemsRemaining is the array, in the same format as a loot array (object with item and quantity)
// itemsRemaining is an array of undefined if there are no items remaining
// tbd optimise so enemy and chest are not as separate
Game.lootClosed = function (itemsRemaining) {
	if (Dom.loot.currentId[0] === "e") {
		// enemy loot menu closed
		let arrayIndex = Dom.loot.currentId.substr(1);
		Game.enemies[arrayIndex].loot = itemsRemaining; // update items remaining
		if (itemsRemaining.every(item => item === undefined)) {
			// set loot to null so it isn't opened by the player again
			Game.enemies[arrayIndex].loot = null;
		}
	}
	else if (Dom.loot.currentId[0] === "c") {
		// chest loot menu closed
		let arrayIndex = Dom.loot.currentId.substr(1);
		if (Game.chests[arrayIndex].disappearAfterOpened) {
			Game.removeObject(Game.chests[arrayIndex].id, "chests", LootChest, arrayIndex);
		}
		else {
			Game.chests[arrayIndex].loot = itemsRemaining; // update items remaining
			if (itemsRemaining.every(item => item === undefined)) {
				// set loot to null so it isn't opened by the player again
				Game.chests[arrayIndex].loot = null;
			}
		}
		// if it is a loot chest, set the day in savedata (so one cannot be opened again in this area today)
		if (Game.chests[arrayIndex].name === "Loot Chest") {
			Player.chests.opened[Game.areaName] = GetFullDate();
		}

		// save to stop them getting infinite loot from chests
		Game.saveProgress("auto");
	}
	else if (Dom.loot.currentId[0] === "i") {
		// item loot menu closed (e.g. sunken chest)
		let inventoryPosition = Dom.loot.currentId.substr(1); // inventory position of item (array index)
		// set loot
		Player.inventory.items[inventoryPosition].loot = itemsRemaining;
		// remove the chest if there is no loot left
		if (itemsRemaining.every(item => item === undefined)) {
			// no loot left
			Dom.inventory.remove(inventoryPosition);
		}

		// save to stop them getting infinite loot from the item
		Game.saveProgress("auto");
	}
	else if (Dom.loot.currentId[0] === "x") {
		// do nothing
	}
	else {
		console.error("Dom.loot.currentId cannot be understood: " + Dom.loot.currentId);
	}
}

// updates mailbox images
// called when mail is opened (the mailbox's flag might go down), or when mail is received (flag might go up)
// parameter type is set to "received" or "read" based on what happened
// make more efficient to not call getImage if the image is already active? TBD
Game.mailboxUpdate = function (type) {
	if (this.mailboxes !== undefined) {
		if (type === "read") {
			if (Dom.mail.unread() === 0) {
				for (let i = 0; i < this.mailboxes.length; i++) {
					// TBD check existing imageName
					this.mailboxes[i].image = Loader.getImage(this.mailboxes[i].readImage);
					this.mailboxes[i].imageName = this.mailboxes[i].readImage;
				}
			}
		}
		else if (type === "received") {
			// perhaps check if Dom.mail.unread is 1, because only one message will come in at a time and if it is more than 1 then it would already be a flag
			for (let i = 0; i < this.mailboxes.length; i++) {
				// TBD check existing imageName
				this.mailboxes[i].image = Loader.getImage(this.mailboxes[i].unreadImage);
				this.mailboxes[i].imageName = this.mailboxes[i].unreadImage;
			}
		}
		else {
			console.error("Unrecognised parameter (should be 'read' or 'received')", type)
		}
	}
}

// called by HIGH SPEED radio buttons with the parameter "add" (give status effect) or "remove" (remove status effect)
Game.highSpeed = function (addRemove) {
	if (addRemove === "add") {
		// add status effect
		Game.statusEffects.walkSpeed({
			target: Game.hero,
			effectTitle: "HIGH SPEED! (test status effect)",
			speedIncrease: 500, // percentage increase
		});
	}
	else if (addRemove === "remove") {
		// remove status effect
		Game.hero.statusEffects = Game.hero.statusEffects.filter(statusEffect => statusEffect.title !== "HIGH SPEED! (test status effect)");
		// reflect this change on secondary canvas
		Game.hero.updateStatusEffects();
	}
	else {
		// unknown parameter
		console.error("Unknown parameter for Game.highSpeed (it should be 'add' or 'remove'):", addRemove)
	}
}

//
// Render game (draw onto canvas)
//

Game.drawLayer = function (layer) {
	let startCol, endCol, startRow, endRow;
	let offsetX = 0;
	let offsetY = 0;

	// start and end positions of tilemap to draw (tiles on screen)

	startCol = Math.floor(this.camera.x / map.tsize);
	if (this.viewportOffsetX > 0) {
		// area width not big enough to fill camera
		// set end column so canvas drawing does not loop
		endCol = map.cols - 1;
		// add to offset so the canvas is drawn in the centre of screen
		offsetX += this.viewportOffsetX;
	}
	else {
	    endCol = startCol + Math.ceil(this.camera.width / map.tsize);
	}

	startRow = Math.floor(this.camera.y / map.tsize);
	if (this.viewportOffsetY > 0) {
		// area height not big enough to fill camera
		// set end column so canvas drawing does not loop
		endRow = map.rows - 1;
		// add to offset so the canvas is drawn in the centre of screen
		offsetY += this.viewportOffsetY;
	}
	else {
	    endRow = startRow + Math.ceil(this.camera.height / map.tsize);
	}

	// tile draw offset
    offsetX += -this.camera.x + startCol * map.tsize;
    offsetY += -this.camera.y + startRow * map.tsize;

    for (let c = startCol; c <= endCol; c++) {
        for (let r = startRow; r <= endRow; r++) {
            let tile = map.getTile(layer, c, r); // tile number

			// draw position
			let x = (c - startCol) * map.tsize + offsetX;
            let y = (r - startRow) * map.tsize + offsetY;

            if (tile !== 0) { // 0 is empty tile
                this.ctx.drawImage(
                    this.tileAtlas, // image
					// cropping
                    ((tile - 1) % map.tilesPerRow) * map.tsize, // source x
                    Math.floor((tile - 1) / map.tilesPerRow) * map.tsize, // source y
                    map.tsize, // source width
                    map.tsize, // source height
					// drawing
                    Math.round(x),  // target x
                    Math.round(y), // target y
                    map.tsize, // target width
                    map.tsize // target height
                );
            }
        }
    }
};

Game.drawGrid = function () {
	// stroke colour
	this.ctx.strokeStyle="#0000ff";

    let width = map.cols * map.tsize;
    let height = map.rows * map.tsize;
    let x, y;
	// horizontal lines
    for (let r = 0; r < map.rows; r++) {
        x = - this.camera.x + this.viewportOffsetX;
        y = r * map.tsize - this.camera.y + this.viewportOffsetY;
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(width + this.viewportOffsetX, y);
        this.ctx.stroke();
    }
	// vertical lines
    for (let c = 0; c < map.cols; c++) {
        x = c * map.tsize - this.camera.x + this.viewportOffsetX;
        y = - this.camera.y + this.viewportOffsetY;
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x, height + this.viewportOffsetY);
        this.ctx.stroke();
    }
};

Game.drawHitboxes = function () {
	for (let i = 0; i < this.allEntities.length; i++) { // iterate through everything with a hitbox
		let objectToRender = this.allEntities[i];

		if (this.camera.isOnScreen(objectToRender, "hitbox")) { // check object hitbox is on the screen hence should be rendered

			// stroke colour
			this.ctx.strokeStyle = objectToRender.hitboxColour;

			if (objectToRender.hitbox !== undefined) { // check if the object has a special hitbox that should be drawn instead
				this.drawhitbox(objectToRender.hitbox);
			}
			else {
				this.drawhitbox(objectToRender);
			}

		}
	}
}

// draw an entity's hitbox
Game.drawhitbox = function(entity) {
	this.ctx.strokeRect(entity.screenX - entity.width / 2, entity.screenY - entity.height / 2, entity.width, entity.height);
}

// display coordinates on canvas (settings option)
Game.coordinates = function (character) {
	// reset text formatting
	this.resetFormatting();

	this.ctx.fillText("x: " + Math.round(character.x), 10 + this.viewportOffsetX, 50 + this.viewportOffsetY);
	this.ctx.fillText("y: " + Math.round(character.y), 10 + this.viewportOffsetX, 60 + this.viewportOffsetY);
}

// display frames per second on canvas (settings option)
// delta = time in ms between frames
// tbd change to https://developer.mozilla.org/en-US/docs/Web/API/Performance/now
Game.fps = function (delta) {
	// reset text formatting
	this.resetFormatting();

	// add current fps value to fps array
	this.fpsArray.push(Math.round(1 / delta));
	if (this.fpsArray.length >= 100) {
		this.fpsArray.shift();
	}

	// calculate average
	let sum = 0;
	for (let i = 0; i < this.fpsArray.length; i++) {
		sum += this.fpsArray[i];
	}
	let average = sum / this.fpsArray.length;

	// write on canvas
	this.ctx.fillText("fps: " + Round(average), 10 + this.viewportOffsetX, 75 + this.viewportOffsetY);
}

// reset text formatting
Game.resetFormatting = function () {
	this.ctx.textAlign = "left";
	this.ctx.fillStyle = "rgba(0, 0, 0, 1)";
	this.ctx.font = "10px El Messiri"; // maybe serif instead?
}

// draw a rotated image (rotated in radians)
// source: https://stackoverflow.com/a/11985464/9713957 --- thank you! <3
Game.drawImageRotated = function (ctx, img, x, y, width, height, rad) {
    // convert degrees to radian
    //var rad = deg * Math.PI / 180;

    // set the origin to the center of the image
    ctx.translate(x + width / 2, y + height / 2);

    // rotate the canvas around the origin
    ctx.rotate(rad);

    // draw the image
    ctx.drawImage(img,width / 2 * (-1),height / 2 * (-1),width,height);

    // reset the canvas
    ctx.rotate(rad * ( -1 ) );
    ctx.translate((x + width / 2) * (-1), (y + height / 2) * (-1));
}

// update entity's screen position (called every time it is rendered, and also in functions like dealDamage)
// screenX and screenY are the CENTRE of the object (hence width/2 or height/2 are subtracted when drawing images to get the top left), as are x and y
Game.updateScreenPosition = function (entity) {
	entity.screenX = (entity.x) - this.camera.x + this.viewportOffsetX;
	entity.screenY = (entity.y) - this.camera.y + this.viewportOffsetY;

	if (typeof entity.adjust !== "undefined") { // adjust postiion
		let angle = this.bearing(entity, entity.adjust.towards);
		entity.screenX += entity.adjust.x * Math.cos(angle);
		entity.screenY += entity.adjust.y * Math.sin(angle);
	}

	if (typeof entity.hitbox !== "undefined") { // special hitbox
		entity.hitbox.screenX = (entity.hitbox.x) - this.camera.x + this.viewportOffsetX;
		entity.hitbox.screenY = (entity.hitbox.y) - this.camera.y + this.viewportOffsetY;
	}
}

// draw character health bar and name in correct placed
Game.drawCharacterInformation = function (ctx, character) {
	let characterInformationHeight = 3; // size of healthbar or other similar thing (e.g: damage taken), so that it is known how much to offset character's name by (in y axis)
	let channellingBarDrawn = 0;

	if (character.hostility === "friendly" || character.hostility === "neutral") {
		// only draw health bar if character is damaged
		if (character.health !== character.stats.maxHealth) {
			this.drawHealthBar(ctx, character, character.screenX - character.width * 0.5, character.screenY - character.height * 0.5 - 15 - characterInformationHeight, character.width, 15);
			characterInformationHeight = 15;
			characterInformationHeight += 3; // padding
		}
	}
	else if (character.hostility === "dummy") {
		// show damage taken above head instead of health bar (if the character has taken any damage)
		if (character.damageTaken > 0) {
			this.drawDamageTaken(ctx, character, character.screenX, character.screenY - character.height / 2 - 1 - characterInformationHeight, 18);
			characterInformationHeight = 18;
			characterInformationHeight += 3; // padding
		}
	}
	else if (character.hostility === "hostile" || character.hostility === "boss") {
		// always draw health bar
		this.drawHealthBar(ctx, character, character.screenX - character.width * 0.5, character.screenY - character.height * 0.5 - 15 - characterInformationHeight, character.width, 15);
		characterInformationHeight = 15;
		characterInformationHeight += 3; // padding
	}
	else {
		console.error("Unknown character hostility: ", character.hostility);
	}

	if (character.channellingInfo !== false) {
		// character is channelling something
		this.drawChannellingBar(ctx, character, character.screenX - character.width * 0.5, character.screenY - character.height * 0.5 - 15 - characterInformationHeight, character.width, 15);
		channellingBarDrawn = 15;
		channellingBarDrawn += 3; // padding
	}

	/*if (characterInformationHeight !== 0) { // !characterInformationHeight is not used, as characterInformationHeight is set to a number (not true) if it isn't false
		characterInformationHeight += 3; // padding for name (currently not seen as necessary, so this has been commented out)
	}*/

	this.drawCharacterName(ctx, character, character.screenX, character.screenY - character.height / 2 - characterInformationHeight - channellingBarDrawn - 3);
}

// draw a health bar (on given context, for given character, at given position, with given dimensions)
// tbd : change colour for friendly characters?
Game.drawHealthBar = function (ctx, character, x, y, width, height) {
	// remember previous canvas transparency preferences
	const oldGlobalAlpha = ctx.globalAlpha;

	// canvas formatting
	ctx.lineWidth = 1;
	ctx.globalAlpha = 0.6;

	// health variables

	// get width of each small health bar (in health)
	// there should be between 3 and 9 bars (with the exception of low health )
	let barValue = 10;
	let barValueFound = false;
	let numberOfBars;
	while (!barValueFound) {
		numberOfBars = character.stats.maxHealth / barValue;
		if (numberOfBars < 10) { // less than 10 little health bars with this barValue
			barValueFound = true;
		}
		else { // more than 9; multiply bar size by 10 and try again
			barValue *= 3;
		}
	}

	character.healthFraction = character.health / character.stats.maxHealth; // fraction of health remaining

	if (character.healthFraction > 0) { // check the character has some health to draw (we don't want to draw negative health)
		// colour based on size of each bar
		if (barValue === 10) {
			ctx.fillStyle = "#FF4D4D"; // light red
		}
		else if (barValue === 30) {
			ctx.fillStyle = "#FF0000"; // red
		}
		else if (barValue === 90) {
			ctx.fillStyle = "#CC0000"; // dark red
		}
		else if (barValue === 270) {
			ctx.fillStyle = "#800000"; // maroon (very dark red)
		}
		else if (barValue === 810) {
			ctx.fillStyle = "#DAA520"; // gold
		}
		else {
			// default
			ctx.fillStyle = "FFFF00";
			console.warn("No dedicated health bar colour for bar size " + barValue);
		}

		// health bar body
		ctx.fillRect(x, y, character.healthFraction * width, height);
	}

	// health bar border
	ctx.strokeStyle = "black";
	ctx.strokeRect(x, y, width, height); // general border around the whole thing
	let i; // defined for use outside of for loop
	for (i = 0; i < character.stats.maxHealth / barValue - 1; i++) {
		ctx.strokeRect(x + barValue / character.stats.maxHealth * width * i, y, barValue / character.stats.maxHealth * width, height);
	}

	// final bar
	ctx.strokeRect(x + barValue / character.stats.maxHealth * width * i, y, width - (barValue / character.stats.maxHealth * width * i), height);

	// restore previous canvas transparency preferences
	ctx.globalAlpha = oldGlobalAlpha;
}

Game.drawDamageTaken = function (ctx, character, x, y, fontSize) {
	// formatting
	ctx.fillStyle = "rgb(0, 0, 0)";
	ctx.textAlign = "center";
	ctx.font = "bold " + fontSize + "px El Messiri";

	// "\u{2694}" displays the unicode crossed swords symbol
	// thanks to Wilfred Lee at https://stackoverflow.com/a/49667311/9713957
	// w3schools reference for unicode special characters: https://www.w3schools.com/charsets/ref_utf_symbols.asp
	ctx.fillText("\u{2694} " + Round(character.damageTaken), x, y);
}

// draw character's name (often positioned to be above their head
// tbd : change colour for friendly characters?
Game.drawCharacterName = function (ctx, character, x, y) {

	// text formatting
	ctx.font = "13px El Messiri";
	ctx.textAlign = "center";
	ctx.strokeStyle = "black";
	ctx.lineWidth = 0.5;
	// colour based on whether npc is good or not
	if (character.hostility === "hostile") {
		ctx.fillStyle = "red";
	}
	else if (character.hostility === "friendly") {
		ctx.fillStyle = "#08720d"; // dark green name
	}
	else if (character.hostility === "neutral") {
		ctx.fillStyle = "#c9c202"; // yellow name
	}
	else if (character.hostility === "boss") {
		ctx.fillStyle = "#8c0700"; // dark red name
	}
	else {
		ctx.fillStyle = "black";
	}


	// draw text
	ctx.fillText(character.name, x, y);
	// black border (easier to read)
	ctx.strokeText(character.name, x, y);
}

// draw a channelling bar (on given context, for given character, at given position, with given dimensions)
Game.drawChannellingBar = function (ctx, character, x, y, width, height) {
	const oldGlobalAlpha = ctx.globalAlpha;

	// figure out elapsed and remaining values (in ms)
	const elapsed = Date.now() - character.channellingInfo.start;
	//const remaining = Game.hero.channellingInfo.time - elapsed;
	const completedFraction = elapsed / character.channellingInfo.time;

	// fill colour (purple)
	ctx.fillStyle = "#f442c2";
	ctx.strokeStyle = "black";

	ctx.globalAlpha = 0.6;
	ctx.lineWidth = 1;

	// bar body
	ctx.fillRect(x, y, completedFraction * width, height);

	// bar border
	ctx.globalAlpha = 0.8;
	ctx.strokeRect(x, y, width-1, height);

	// text
	this.ctx.font = "bold " + height + "px El Messiri";
	this.ctx.textAlign = "center";
	this.ctx.fillStyle = "white";
	this.ctx.fillText(character.channellingInfo.description, x + width / 2, y + height / 4 * 3);

	this.ctx.globalAlpha = oldGlobalAlpha;
}

// displays information on canvas
// subtitles should either be a single string or an array of strings
// duration is in seconds
Game.displayOnCanvas = function (title, subtitles, duration, important) {
	if (subtitles.constructor !== Array) {
		subtitles = [subtitles]; // make sure it is in array form
	}

	if (important === false) {
		// important is checked to be undefined not false, fix this problem
		console.warn("'Important' parameter should be undefined, not false.");
		important = undefined;
	}

	// value to be set
	let displayVariable = {
		title: title,
		subtitles: subtitles,
		duration: duration, // starts to fade over the last second
		important: important,
	};

	if (important) {
		// it should not be overriden and should always be displayed (might be placed in queue)
		if (this.canvasDisplay.important !== undefined) {
			// there is currently another important message being displayed
			// add this message to queue to be displayed after it
			this.canvasDisplayQueue.push(displayVariable);
		}
		else {
			// even if there is an unimportant message showing, overwrite it

			// set the variable to be handled by Game.render
			this.canvasDisplay = displayVariable;
		}
	}
	else {
		// not integral it is shown
		if (this.canvasDisplay.important === undefined) {
			// set the variable to be handled by Game.render
			this.canvasDisplay = displayVariable;
		}
	}
}

// called once the current canvas display has finished, for a new one to be added from the queue
Game.canvasDisplayFinished = function () {
	this.canvasDisplay = {};

	if (this.canvasDisplayQueue.length > 0) {
		// another message should take its place
		this.canvasDisplay = this.canvasDisplayQueue.shift();
	}
}

// draw images on canvas
Game.render = function (delta) {
	// draw map background layer
	this.drawLayer(0);

	// sort by y value
	// set values to sort by, basing their value on their z position as well as y value
	// 10^10 is an arbitrary value that should always be out of reach of y values
	for (let i = 0; i < this.allThings.length; i++) {
		if (this.allThings[i].hidden !== true) {
			this.allThings[i].sortValue = this.allThings[i].y + this.allThings[i].z * 10000000000;
		}
		else {
			// a y value might not have been assigned to the object yet
			// arbitary sort value
			this.allThings[i].sortValue = 0;
		}
	}
	// gnomesort - used because it is fast on mostly sorted data (which this will be because NPCs don't move)
	let i = 0;
	while (i < this.allThings.length) {
		if (i === 0 || this.allThings[i].sortValue >= this.allThings[i-1].sortValue) {
			// nothing to swap
	        i++;
	    }
	    else {
	        // swap
	        let mem = this.allThings[i];
	        this.allThings[i] = this.allThings[i-1];
	        this.allThings[i-1] = mem;
	        i--;
	    }
	}

	// render everything with image
	for (let i = 0; i < this.allThings.length; i++) { // iterate through everything to be rendered

		let objectToRender = this.allThings[i];

		// check object should be rendered
		if (Game.camera.isOnScreen(objectToRender, "image") && // object on screen
		(objectToRender.stats === undefined || !objectToRender.stats.stealthed) && // object isn't stealthed
		objectToRender.hidden !== true) {

			// set character screen x and y
			this.updateScreenPosition(objectToRender);

			if (!objectToRender.respawning) { // check character is not dead

				let renderImage = true; // if image should be rendered
				if (objectToRender.preRenderFunction !== undefined) {
					renderImage = objectToRender.preRenderFunction();
					// whether image is rendered is based off the return value of preRenderFunction
					// also applies for whether postRenderFunction is called
				}

				if (renderImage) {
					if (objectToRender.rotate !== undefined && objectToRender.rotate !== 0) {
						// rotate and draw (just for projectiles currently)
						// no crop information passed in
						this.drawImageRotated(
							this.ctx,
							objectToRender.image,
							objectToRender.screenX - objectToRender.width / 2,
							objectToRender.screenY - objectToRender.height / 2,
							objectToRender.width,
							objectToRender.height,
							objectToRender.rotate
						);
					}
					else {
						// draw image (unrotated)
						this.ctx.drawImage(
							objectToRender.image,
							objectToRender.crop.x, objectToRender.crop.y,
							objectToRender.crop.width, objectToRender.crop.height,
							objectToRender.screenX - objectToRender.width / 2,
							objectToRender.screenY - objectToRender.height / 2,
							objectToRender.width,
							objectToRender.height
						);
					}

					if (objectToRender.postRenderFunction !== undefined) {
						objectToRender.postRenderFunction();
					}
				}

			}

			else if (objectToRender.deathImage !== undefined && objectToRender.isCorpse) { // display corpse

				// tbd make it work the same way as the above function
				// maybe do this by using changeImage on death instead?

				// draw image (corpse)
				this.ctx.drawImage(
					objectToRender.deathImage,
					objectToRender.screenX - objectToRender.deathImageWidth / 2,
					objectToRender.screenY - objectToRender.deathImageHeight / 2,
					objectToRender.deathImageWidth,
					objectToRender.deathImageHeight
				);
			}
		}

	}

	if (this.hero.channelling === "fishing" || (this.hero.channelling.type !== undefined && this.hero.fishingBobs >= 100)) { // check player's fishing bobber is out
		// line between fishing bobber and player
		let projectile = this.projectiles[this.searchFor(this.hero.channellingProjectileId, this.projectiles)];
		this.ctx.strokeStyle = "grey";
		this.ctx.beginPath();
		if (projectile.imageNumber === 0) {
			this.ctx.moveTo(projectile.screenX, projectile.screenY - 8); // bobber above water
		}
		else if (projectile.imageNumber === 1) {
			this.ctx.moveTo(projectile.screenX, projectile.screenY); // bobber bobbing
		}
		else if (projectile.imageNumber === 2) {
			this.ctx.moveTo(projectile.screenX, projectile.screenY + 8); // bobber submerged by fish
		}
		this.ctx.lineTo(this.hero.screenX, this.hero.screenY);
		this.ctx.stroke();
	}

	// draw player animations
	if (this.hero.beam !== undefined) {
		// set formatting
		this.ctx.lineWidth = this.hero.beam.width;
		this.ctx.strokeStyle = this.hero.beam.colour;
		// draw line
		this.ctx.beginPath();
		this.ctx.moveTo(this.hero.screenX, this.hero.screenY);
		this.ctx.lineTo(this.hero.beam.x - this.hero.x + this.hero.screenX,
						this.hero.beam.y - this.hero.y + this.hero.screenY);
		this.ctx.stroke();
		// reset default formatting
		this.ctx.lineWidth = 0.5;
		this.ctx.strokeStyle = "#000000";
	}

	// draw particles
	// particles are drawn as rects
	// their properties are x, y, width, height, colour (as hex)
	if (document.getElementById("particlesOn").checked) { // check particle setting
		for (let i = 0; i < this.particles.length; i++) {
			let particle = this.particles[i]; // save to variable for easy access

			// update screen position of particle
			this.updateScreenPosition(particle);

			// figure out how much to rotate the canvas (if any) for particle rotation
			let rotation = 0;
			if (particle.rotation !== undefined) {
				rotation = particle.rotation;
			}

			let ctx;
			if (particle.light) {
				// draw on light canvas instead
				ctx = this.ctxLight;
			}
			else {
				ctx = this.ctx;
			}

			// transform canvas so the rotation happens around the rect itself
			ctx.translate(particle.screenX + particle.width / 2, particle.screenY + particle.height / 2);
			// rotate canvas
			ctx.rotate(rotation);
			// transparency
			ctx.globalAlpha = particle.transparency;

			// draw particle
			ctx.fillStyle = particle.colour;
			ctx.fillRect(-particle.width / 2, -particle.height / 2, particle.width, particle.height);
			//this.ctx.drawImage(img,width / 2 * (-1),height / 2 * (-1),width,height);

			// reset canvas stuff
			ctx.resetTransform();
			ctx.globalAlpha = 1;
		}
	}

    // draw map top layer
    //this.drawLayer(1);

	// only render the following if the player isn't pressing the shift key
	// also do not render if a screenshot is going to be taken with the camera this tick
	if (!this.keysDown.SHIFT && !this.takePhoto) {

		//
		// Setting options
		//

	    // draw map grid (debug)
	    if (document.getElementById("gridOn").checked) {
			this.drawGrid();
	    }

	    // draw hitboxes (debug)
	    if (document.getElementById("hitboxesOn").checked) {
			this.drawHitboxes();
	    }

	    // show player coords (debug)
	    if (document.getElementById("coordsOn").checked) {
			this.coordinates(this.hero);
	    }

	    // show canvas fps (debug)
		if (document.getElementById("fpsOn").checked){
			this.fps(delta);
		}

		// hero channelling bar above xp bar
		if (Game.hero.channellingInfo !== false) {
			Game.drawChannellingBar(this.ctx, this.hero, Dom.canvas.width/2-167.6, Dom.canvas.height-104, 335, 12);
		}

		// display area information or level up information
		if (this.canvasDisplay.duration > 0) {
			// formatting
			this.ctx.fillStyle = "rgba(0, 0, 0, " + this.canvasDisplay.duration + ")"; // fades over last second
			this.ctx.textAlign = "center";

			let drawY = 100 + this.viewportOffsetY; // y position for top of information

			this.ctx.font = "48px MedievalSharp"; // for title
			this.ctx.fillText(this.canvasDisplay.title, Dom.canvas.width / 2, drawY); // area name

			this.ctx.font = "28px El Messiri"; // for subtitles
			for (let i = 0; i < this.canvasDisplay.subtitles.length; i++) {
				// can display multiple subtitles

				this.ctx.fillText(this.canvasDisplay.subtitles[i], Dom.canvas.width / 2, drawY + 20 + 30*(i+1)); // area level
			}

			this.canvasDisplay.duration -= delta;

			if (this.canvasDisplay.duration <= 0) {
				// has expired; remove it and replace it with what is next in queue (if applicable)
				this.canvasDisplayFinished();
			}
		}
	}

	// render weather
	if (document.getElementById("weatherOn").checked && !Areas[Game.areaName].indoors) {
		if (Weather.particleArray.length > 0) {
			Weather.render();
		}
	}

	if (this.takePhoto) {
		this.screenshot();
	}
};

// take a screenshot of the main canvas and show the user the image to be downloaded
// called by Game.render after Game.takePhoto has been set to true
Game.screenshot = function () {
	// ensure this is not called multiple times
	this.takePhoto = false;

	// top-left of photo
	let x = this.hero.screenX-300;
	let y = this.hero.screenY-300;
	// if player will appear on left of image
	if (this.hero.x < 300) {
		// if area has black around edge
		if (Dom.canvas.width - this.hero.map.cols * this.hero.map.tsize > 0) {
			// don't take photo of the black edge
			x = (Dom.canvas.width - this.hero.map.cols * this.hero.map.tsize)/2;
		}
		else {
			x = 0;
		}
	}
	// if player will appear on right of image
	else if (this.hero.x > this.hero.map.cols * this.hero.map.tsize - 300) {
		// if area has black around edge
		if (Dom.canvas.width - this.hero.map.cols * this.hero.map.tsize > 0) {
			// don't take photo of the black edge
			x = Dom.canvas.width - (Dom.canvas.width - this.hero.map.cols * this.hero.map.tsize)/2 - 600;
		}
		else {
			x = Dom.canvas.width - 600;
		}
	}
	// if player will appear at top of image
	if (this.hero.y < 300) {
		// if area has black around edge
		if (Dom.canvas.height - this.hero.map.rows * this.hero.map.tsize > 0) {
			// don't take photo of the black edge
			y = (Dom.canvas.height - this.hero.map.rows * this.hero.map.tsize)/2;
		}
		else {
			y = 0;
		}
	}
	// if player will appear at bottom of image
	else if (this.hero.y > this.hero.map.rows * this.hero.map.tsize - 300) {
		// if area has black around edge
		if (Dom.canvas.height - this.hero.map.rows * this.hero.map.tsize > 0) {
			// don't take photo of the black edge
			y = Dom.canvas.height - (Dom.canvas.height - this.hero.map.rows * this.hero.map.tsize)/2 - 600;
		}
		else {
			y = Dom.canvas.height - 600;
		}
	}

	// draw game, dayNight and light canvas onto a new camera canvas
	let canvas = document.createElement("canvas");
	let ctx = canvas.getContext("2d");
	canvas.width = 600;
	canvas.height = 600;
	ctx.drawImage(this.canvas, x, y, 600, 600, 0, 0, 600, 600);
	ctx.drawImage(this.canvasDayNight, x, y, 600, 600, 0, 0, 600, 600);
	ctx.drawImage(this.canvasLight, x, y, 600, 600, 0, 0, 600, 600);

	// if the inventory is open make it an inventoy alert, else make it a canvas alert
	let page = "inventoryPage";
	if (document.getElementById("inventoryPage").hidden) {
		page = undefined;
	}

	// convert the camera canvas to an image and create an alert to download it
	let dataURL = canvas.toDataURL("image/png");
	Dom.alert.page("Click the image to download<br><br><a href='"+dataURL+"' download><img src='"+dataURL+"' height='200px'></img></a>", 0, undefined, page);
}

//
// Secondary canvas render (only called when it needs to be, not every tick)
//

// update crosshair based on mouse distance from player (called by mouseMove event listener in init)
// cursor is also updated based on whether player can attack or not
Game.secondary.updateCursor = function (event) {
	// if event is undefined, set it to the previous known mouse position
	if (event === undefined) {
		event = {
			clientX: Game.previousMousePosition.x,
			clientY: Game.previousMousePosition.y
		};
	}
	else {
		// set the know mouse position in case it is needed for the future
		Game.previousMousePosition = {
			x: event.clientX,
			y: event.clientY
		};
	}

	// get player's range and mouse distance
	let mouseDistanceFromHero = Game.distance({x: Game.camera.x + event.clientX - Game.viewportOffsetX, y: Game.camera.y + event.clientY - Game.viewportOffsetY,}, Game.hero);
	let range = Game.hero.stats.range;

	// if the weapon is a fishing rod, check the mouse is in water
	let rodInWater = true;
	if (Player.inventory.weapon.type === "rod") {
		// rod equipped
		if (map.isSlowTileAtXY(event.clientX + Game.camera.x, event.clientY + Game.camera.y) !== "water") {
			// no water tile at mouse pointer
			rodInWater = false;
		}
	}

	// check the player's mouse distance is within range and they are not reloading
	if (mouseDistanceFromHero < range && Game.hero.canAttack && rodInWater) {
		// mouse in range and hero can attack (crosshair)
		let cursor = Skins[Player.class][Player.skin].cursor;
		if (cursor !== "crosshair") {
			// cursor requires custom image
			cursor = "url('assets/cursors/" + cursor + ".png') " + Skins[Player.class][Player.skin].cursorPosition.x + " " + Skins[Player.class][Player.skin].cursorPosition.y + ", auto;";
		}
		document.getElementById("click").setAttribute("style","cursor: " + cursor);
	}
	else {
		// mouse not in range or hero cannot attack (normal cursor)
		document.getElementById("click").style.cursor = "default";
	}
}

// render secondary canvas (contains anything that does not need to be continuously redrawn)
// mainly PG code
Game.secondary.render = function () {
	// clear secondary canvas
	this.ctx.clearRect(0, 0, Dom.canvas.width, Dom.canvas.height);

    // fill canvas 'background colour' as black
    this.ctx.fillStyle = "black";
	this.ctx.globalAlpha = 1;
	if (Game.viewportOffsetX > 0) {
    	this.ctx.fillRect(0, 0, Game.viewportOffsetX, Dom.canvas.height);
    	this.ctx.fillRect(Game.viewportOffsetX + map.cols * map.tsize, 0, Game.viewportOffsetX, Dom.canvas.height);
	}
	if (Game.viewportOffsetY > 0) {
    	this.ctx.fillRect(0, 0, Dom.canvas.width, Game.viewportOffsetY);
    	this.ctx.fillRect(0, Game.viewportOffsetY + map.rows * map.tsize, Dom.canvas.width, Game.viewportOffsetY);
	}

	if (!Game.keysDown.SHIFT) { // only render the second canvas if the player isn't pressing the shift key

		// set canvas formatting style defaults
		this.ctx.lineWidth = 1;
		this.ctx.globalAlpha = 0.6;

		// player health bar at top-left
		Game.drawHealthBar(this.ctx, Game.hero, 10, 10, 250, 25);

		// set xp variables
		const totalWidth = 335; // total width of xp bar
		const totalHeight = 8; // total height of xp bar
		const totalLeft = Dom.canvas.width/2-167.6; // total left of xp bar
		const totalTop = Dom.canvas.height-85; // total top of xp bar
		Player.xpFraction = Player.xp / LevelXP[Player.level]; // fraction of XP for current level

		// rainbow gradient
		// tbd make more efficient
		let grd = this.ctx.createLinearGradient(totalLeft, 0, totalLeft+totalWidth-1, 0);
		if (Player.level < LevelXP.length - 1) {
			grd.addColorStop(0, "red");
			grd.addColorStop("0.2", "yellow");
			grd.addColorStop("0.4", "green");
			grd.addColorStop("0.6", "blue");
			grd.addColorStop("0.8", "magenta");
			grd.addColorStop(1, "indigo");
		}
		else {
			grd.addColorStop(0, "#daa520");
			grd.addColorStop(0.6, "#daa520");
			grd.addColorStop(0.8, "#e8c264");
			grd.addColorStop(1, "#daa520");
		}
		this.ctx.fillStyle = grd;

		// xp bar body
		this.ctx.fillRect(totalLeft, totalTop, Player.xpFraction * totalWidth, totalHeight);

		// xp bar border
		this.ctx.globalAlpha = 0.8;
		this.ctx.strokeRect(totalLeft, totalTop, totalWidth-1, totalHeight);
		this.ctx.globalAlpha = 0.6;

		// level
		this.ctx.font = "bold 30px El Messiri";
        this.ctx.textAlign = "center";
        this.ctx.fillStyle = "lightGrey";
        this.ctx.fillText(Player.level, Dom.canvas.width/2, Dom.canvas.height-74);
        this.ctx.fillStyle = "white";
        this.ctx.fillText(Player.level, Dom.canvas.width/2-2, Dom.canvas.height-76);

		// status effect icons next to health bar
		for(let i = 0; i < Game.hero.statusEffects.length; i++) {
			let iconNum = null;
			if (Game.hero.statusEffects[i].image === "bait") {
				iconNum = 0;
			}
			else if (Game.hero.statusEffects[i].image === "defenceUp") {
				iconNum = 1;
			}
			else if (Game.hero.statusEffects[i].image === "speedDown") {
				iconNum = 2;
			}
			else if (Game.hero.statusEffects[i].image === "fire") {
				iconNum = 3;
			}
			else if (Game.hero.statusEffects[i].image === "food") {
				iconNum = 4;
			}
			else if (Game.hero.statusEffects[i].image === "lifesteal") {
				iconNum = 5;
			}
			else if (Game.hero.statusEffects[i].image === "mud") {
				iconNum = 6;
			}
			else if (Game.hero.statusEffects[i].image === "poison") {
				iconNum = 7;
			}
			else if (Game.hero.statusEffects[i].image === "speedUp") {
				iconNum = 8;
			}
			else if (Game.hero.statusEffects[i].image === "stealth") {
				iconNum = 9;
			}
			else if (Game.hero.statusEffects[i].image === "damageUp") {
				iconNum = 10;
			}
			else if (Game.hero.statusEffects[i].image === "stunned") {
				iconNum = 11;
			}
			else if (Game.hero.statusEffects[i].image === "timer") {
				iconNum = 12;
			}
			else if (Game.hero.statusEffects[i].image === "defenceDown") {
				iconNum = 13;
			}
			else if (Game.hero.statusEffects[i].image === "water") {
				iconNum = 14;
			}
			else if (Game.hero.statusEffects[i].image === "damageDown") {
				iconNum = 15;
			}
			else if (Game.hero.statusEffects[i].image === "xpUp") {
				iconNum = 16;
			}
			else if (Game.hero.statusEffects[i].image === "xpDown") {
				iconNum = 17;
			}
			else { // no status effect image
				iconNum = 3; // fire image used as placeholder
				console.error("Status effect " + Game.hero.statusEffects[i].title + " icon not found");
			}
			this.ctx.drawImage(Game.statusImage, 0, 27 * iconNum, 27, 27, 270 + i * 35, 10, 27, 27);
			this.ctx.fillStyle = "black";
			this.ctx.font = "20px El Messiri";
			this.ctx.textAlign = "right";
			if (typeof Game.hero.statusEffects[i].info !== "undefined") { // variable exists
				if (typeof Game.hero.statusEffects[i].info.time !== "undefined" && typeof Game.hero.statusEffects[i].info.ticks !== "undefined") { // variable exists
					this.ctx.fillText(Round(Game.hero.statusEffects[i].info.time - Game.hero.statusEffects[i].info.ticks), 295 + i * 35, 37);
				}
			}
			this.ctx.textAlign = "center";
		}
	}
}

// only called whenever loadArea is called (for efficiency) - called as often as getTime
// night effect
Game.renderDayNight = function () {
	// wipe canvas
	this.ctxDayNight.clearRect(0, 0, Dom.canvas.width, Dom.canvas.height);
	// make canvas darker if it is night time and the player is not indoors
	if (!Areas[Game.areaName].indoors) {
		if (Event.redSky === true) {
			// blood moon (or one developing)
			this.ctxDayNight.fillStyle = "#2d0101"; // red tint
			this.ctxDayNight.globalAlpha = Event.darkness;
			this.ctxDayNight.fillRect(0, 0, Dom.canvas.width, Dom.canvas.height);
		}
		else {
			this.ctxDayNight.fillStyle = "black";
			this.ctxDayNight.globalAlpha = Event.darkness;
			this.ctxDayNight.fillRect(0, 0, Dom.canvas.width, Dom.canvas.height);
		}
	}
}

//
// Save player progress
//

// autosave every 1 minute
/*setInterval(function() {
	Game.saveProgress("auto");
}, 60000);*/

Game.saveProgress = function (saveType) { // if saveType is "auto" then the save is an autosave (hence has a slightly different console.info)
	if (localStorage.getItem("accept") === "true") {
		// save player position to savedata.js
		Player.x = Game.hero.x;
		Player.y = Game.hero.y;
		Player.checkpoint = Game.hero.checkpoint;
		// save other player details that aren't otherwise saved to savedata
		Player.health = Game.hero.health;
		Player.trail = Game.hero.trail;
		Player.oldPosition = Game.hero.oldPosition; // time travel
		// re-link status effects (inefficient - tbd)
		Player.statusEffects = Game.hero.statusEffects;
		// re-link player stats (inefficient - tbd)
		//Player.stats = Game.hero.stats;

		// save everything in savedata.js
		localStorage.setItem(Player.class, JSON.stringify(Player));

		// save all user information apart from changes in unclaimed achievement points and skins (in case something was baught during game open)
		let prevUser = JSON.parse(localStorage.getItem("user"));
		if (prevUser !== null && prevUser.skinPurchased === true) {
			// user has bought a skin this session
			User.skins = prevUser.skins;
			User.achievementPoints.unclaimed = prevUser.achievementPoints.unclaimed;
			User.skinPurchased = undefined;
		}
		localStorage.setItem("user", JSON.stringify(User));

		clearTimeout(Game.saveTimeout); // clear the previous 60 second timeout to avoid saves being too often
		Game.saveTimeout = setTimeout(function() {
			Game.saveProgress("auto");
		}, 60000); // save a minute after the current save

		// message to console
		let time = new Date();
		console.info((saveType === "auto" ? "AUTO" : "") + "SAVE AT " + (time.getHours() < 10 ? "0" : "") + time.getHours() + ":" + (time.getMinutes() < 10 ? "0" : "") + time.getMinutes() + ":" + (time.getSeconds() < 10 ? "0" : "") + time.getSeconds());
	}
	if (saveType === "logout") {
		window.location.replace("./selection/index.html");
	}
}
