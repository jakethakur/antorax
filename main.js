"use strict";

//
// Realms of Antorax canvas code
// Jake Thakur 2018-2023
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
	tag: {},

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
	this.heroProjectile2Name = Skins[Player.class][Player.skin].projectile2; // currently just for knight's fissure
	this.heroProjectileAdjust = Skins[Player.class][Player.skin].projectileAdjust;
	this.heroProjectileInfo = {}; // any additional info
	this.heroBobberName = "bobber";

	this.nextEntityId = 0; // unique entity ids are assigned using this variable, which is never reset

	if (typeof Player.oldPosition !== "undefined" && Player.oldPosition.reason === "tag") {
		// teleport them back to their old location because they were in the middle of a tag game (but have now left it)
		Player.areaName = Player.oldPosition.area;
		Player.x = Player.oldPosition.x;
		Player.y = Player.oldPosition.y;
		Player.oldPosition = undefined;
	}

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
        savedPlayer.quests = Object.assign(Player.quests, savedPlayer.quests);
        savedPlayer.reputation = Object.assign(Player.reputation, savedPlayer.reputation);
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
				direction: 3,
				equipment: {
					helm: Player.inventory.helm,
					chest: Player.inventory.chest,
					greaves: Player.inventory.greaves,
					boots: Player.inventory.boots,
					weapon: Player.inventory.weapon
				},
				achievementPoints: User.achievementPoints.total
			}));

			// show other players online in chat (because player is connected to server)
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
							user.setExpandZ(message.expand);
						}
					}
					break;

				case "userID":
					// set ws.userID (i.e. for excepting oneself in some future broadcasts)
					ws.userID = message.content;
					break;

				case "msg": // for private message from someone (the name being sender -> target is handled in server)
					Dom.chat.replyTo = message.sender;
					// no break because the same is done as chat for the rest

				case "chat":
					// do not allow user ta use < or > in chat (stop HTML injection)
					let messageContent = message.content.replace(/[<>]/g, "");
					// insert in chat
					Dom.chat.insert(Dom.chat.say(message.name, messageContent));
				    // notification if user has given permission
					if (message.sender !== undefined) {
						// private message ("msg") - because message.name contains a unicode icon that does not display on notification, it should be changed
						message.name = message.sender + " (private message)";
					}
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

						case "walkAway":
							// other player walked away
							// if this player was off the tab, they would not have closed their page/alert/pending request
							// so close it ...
							if (Dom.trade.requested || Dom.trade.received || Dom.trade.active) {
								Dom.closeNPCPages();
							}
							break;
					}
					break;

				case "tagGame":
					switch (message.action) {
						case "request":
							// invited to a tag game
							// set current minigame variable even if player has not joined
							Game.minigameInProgress = {
								game: "tag",
								area: message.area,
								playing: false,
								status: "starting",
								immunePlayers: []
							};

							// find player who started game and update their playing game in DOm.players, and which areas they appear in
							// find their full object
							let initialJoinPlayer = Dom.players.find(player => player.userID === message.startedBy);
							// update properties that Dom might not have had a chance to update
							initialJoinPlayer.area = message.spawnArea;
							// make other players know they joined the game ...
							Game.tag.playerJoin(initialJoinPlayer);

							// only ask them to join if their setting is on
							if (Dom.elements.minigamesOn.checked) {
								// alert to ask them if they want to join
								Dom.alert.page("A game of tag has been started in " + message.displayAreaName + ". Would you like to join?", 2, undefined, undefined, {
                                    target: Game.tag.join, // function to be called if they click yes
                                    ev: [message.spawnArea, message.spawnX, message.spawnY], // parameters for function
                                });
								// notifiction
								Dom.chat.notification("A game of tag has been started in " + message.displayAreaName + ".");
							}
							break;

						case "playerJoin":
							// find their full object
							let joinedPlayer = Dom.players.find(player => player.userID === message.userID);
							// update properties that Dom might not have had a chance to update
							joinedPlayer.area = message.area;

							Game.tag.playerJoin(joinedPlayer);
							break;

						case "start":
							// game started
							Game.minigameInProgress.status = "started";

							if (!Game.minigameInProgress.playing) {
								// not playing
								// close alert for people who still have it open
                                let alert = Dom.alert.array.find(alert => alert.target === Game.tag.join);
                                if (alert !== undefined) { // showing the function to join the game still (so the wrong one isn't closed by accident)
                                    Dom.alert.close(alert.id);
                                    Dom.chat.insert("You missed the start of the tag game :(");
                                }
							}
							else {
								// playing game!
								Dom.chat.insert("The game has started!");
								// notifiction for if they're not on the tab
								Dom.chat.notification("The game of tag has started!");
								// length of game (displayed on infoBar by newTaggedPlayer)
								Game.minigameInProgress.timeRemaining = TimeDisplay(message.gameLength);
								// tagged player
								Game.tag.newTaggedPlayer(message.taggedPlayer);
							}
							break;

						case "taggedPlayer":
							if (Game.minigameInProgress.playing) {
								if (message.reason === "playerLeave") {
									Dom.chat.insert("The currently tagged player left the game. A random player has been tagged instead.")
								}
								// new tagged player
								Game.tag.newTaggedPlayer(message.taggedPlayer);
							}
							break;

						case "timeRemaining":
							// convert time to mm:ss format
					 		Game.minigameInProgress.timeRemaining = TimeDisplay(message.content);
							// update infobar time display
							if (Game.minigameInProgress.status === "started") {
								// just overwrite time to maintain other information
								document.getElementById("tagTimeRemaining").innerHTML = Game.minigameInProgress.timeRemaining;
							}
							else {
								// no other information - completely overwrite
								Dom.infoBar.page(Game.minigameInProgress.timeRemaining + " until game start");
							}
							break;

						case "finish":
							// end of game
							Game.minigameInProgress.status = "finished";

							// show scores if they were in game
							if (Game.minigameInProgress.playing) {
								Game.tag.finish(message.leaderboardData);
							}

							// hide infobar
							Dom.infoBar.page("");
							break;

						case "fizzle":
							// game couldn't start properly due to not enough players

							// close alert for people who still have it open
							if (!Game.minigameInProgress.playing) {
								// not playing
								// close alert if it wasn't already closed
								let alert = Dom.alert.array.find(alert => alert.target === Game.tag.join);
								if (alert !== undefined) { // showing the function to join the game still (checked so the wrong one isn't closed by accident)
									Dom.alert.close(alert.id);
								}
							}
							else {
								// return player that started game back to their initial location
								Game.hero.temporaryAreaTeleportReturn();

								if (message.returnGauntlet) {
									// user that is still in game is host
									Dom.inventory.give(Items.consumable[22]);
								}
								else {
									Dom.chat.insert("There were not enough players to start the game because the game host left.");
								}
								Dom.chat.notification("There were not enough players to start the game."); // in case they were not on the tab
							}

							// hide infobar
							Dom.infoBar.page("");

							// reset minigameInProgress
							Game.minigameReset();
							break;

						case "close":
							// tag game closed

							if (Game.minigameInProgress.playing) {
								// clear firework interval
								Game.clearInterval(Game.tag.fireworkWinnerInterval);

								Game.hero.temporaryAreaTeleportReturn();
							}

							Game.minigameReset();

						case "retroactive":
							// information received about it on player join
							// users in tag game is received by playersOnline
							Game.minigameInProgress = {
								game: "tag",
								area: message.area,
								playing: false,
								status: message.status
							};
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
			if (Game.players !== undefined) {
				for (let i = 0; i < Game.players.length; i++) {
					Game.removeObject(Game.players[i].id, "players", i);
				}
			}

			if (Game.hasConnectedToWebSocket) {
				// if they have connected before to the websocket (thus a possible connection exists), try to reconnect them
				// if the reconnect fails, this will be called again straight away
				Dom.chat.showPlayersOnline("reconnecting");
				Dom.chat.insert("You lost connection to the websocket. Attempting to reconnect in 5 seconds.");
				// reset websocket
				ws = false;
				// try to reconnect in 5 seconds
				Game.setTimeout(Game.initWebSocket, 5000)
			}
			else {
				// websocket hasn't connected before - we can assume a 404 error because they are on a single player version
				Dom.chat.showPlayersOnline("hide");
			}
		};
	}
	else {
		console.info("Playing on a local version. Multiplayer features are not available.");

		// hide option for notifications
		Dom.elements.settingNotifsHolder.innerHTML = "";
	}
}

// for adding another player to Game.players and checking the conditions required
Game.addPlayer = function (player) {
	// if players is undefined, don't add player (because the player will be added anyway from Dom.players when Game.players is defined in loadArea)
	// if players IS defined and is receiving retroactive player additions (action="retroactive"), this must mean that they were sent after loadArea (where Dom.players had nothing anyway)
	if (this.players !== undefined) {

		// deep copy player (because it could have come from Dom.players)
		let copiedPlayer = Object.assign({}, player);

		let addPlayer = true; // if set to false do not add the npc

		if (copiedPlayer.area !== Player.areaName) {
			// player is not in same area
			addPlayer = false;
		}
		else if (copiedPlayer.userID === ws.userID) {
			// player is Game.hero
			addPlayer = false;
		}
		else if (this.minigameInProgress !== undefined && // minigame in progress
		((this.minigameInProgress.playing && copiedPlayer.playingGame === undefined) || // you're in game but they're not playing
		(!this.minigameInProgress.playing && copiedPlayer.playingGame !== undefined))) { // you're not in game but they are
			addPlayer = false;
		}

		if (addPlayer) {

			// check the player has not already been added
			let playerAlreadyAdded = this.players.findIndex(existingPlayer => existingPlayer.userID === copiedPlayer.userID);
			copiedPlayer = this.prepareNPC(copiedPlayer, "players");
			if (playerAlreadyAdded === -1 && copiedPlayer !== false) {

				// object properties (to stop attacker breaking)
				copiedPlayer.stats = {};
				copiedPlayer.stats.maxHealth = 50 + (copiedPlayer.level-1) * 5;
				copiedPlayer.projectile = {};
				// name colour
				if (this.minigameInProgress !== undefined && this.minigameInProgress.playing && this.minigameInProgress.taggedPlayer === copiedPlayer.userID) {
					// tagged in minigame that user is playing
					copiedPlayer.hostility = "gameHostile";
				}
				else {
					copiedPlayer.hostility = "friendly";
				}

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
	let player = this.players.find(player => player.userID === userID);
	if (player !== undefined) {
		// a player in the area should be removed
		this.removeObject(player.id, "players");
	}
}

// get a player's object in Game (i.e. in the same area) from their user id
Game.getPlayerFromID = function (userID) {
	if (ws.userID === userID) {
		// player is this player
		// must be checked separately because they are not in Game.players
		return Game.hero;
	}
	else {
		return this.players.find(player => player.userID === userID);
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

// Information about how the map origin works:
// columns/rows are always considered as being from 0 to the number of columns
// so getting coordinates from columns needs to involve the origin
// origin should only be used by map functions when dealing with convering columns (i.e. in a for loop, or from getCol) to coordinates
// OR when dealing with camera / player clamping (i.e. the limit coordinates)
// ctrl-f to find all the uses of map.origin if confused !

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

	// gets tiles of all layers at location, returning an array
    getTiles: function (col, row) {
		col = this.validateCol(col);
		row = this.validateRow(row);
		let tileArray = [];
		for (let layer = 0; layer < this.layers.length; layer++) {
			tileArray.push(this.getTile(layer, col, row));
		}
        return tileArray;
    },

    getCol: function (x) {
        let col = Math.floor((x+this.origin.x) / this.tsize);
		return this.validateCol(col);
    },
    getRow: function (y) {
        let row = Math.floor((y+this.origin.y) / this.tsize);
		return this.validateRow(row);
    },

	// top/left of tile
    getX: function (col) {
		col = this.validateCol(col);
        return col * this.tsize - this.origin.x;
    },
    getY: function (row) {
		row = this.validateRow(row);
        return row * this.tsize - this.origin.y;
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

		// find layer to check - we want the highest layer with a non-transparent tile
		let layer = this.layers.length - 1;
		let foundLayer = false;
		while(layer >= 1 && !foundLayer) {
			let tileNum = this.getTile(layer, col, row);
			if (tileNum !== 0 && !this.transparentTiles.includes(tileNum)) {
				// this is the tile we are considering! (i.e. highest up in player's view)
				foundLayer = true;
			}
			else {
				layer--;
			}
		}

        // check first layer only and return TRUE if any tile is a slowing tile
        let tile = this.getTile(layer, col, row);

		let isSlow = null; // set to a string for any slow/fast tile being touched

		// move slower in water
		if (typeof this.waterTiles !== "undefined") { // check that this map contains waterTiles
			for (let i = 0; i < this.waterTiles.length; i++) {
				if (tile === this.waterTiles[i]) {
					// water tile found
					isSlow = "water";
					break;
				}
			}
		}
		// move slower in mud
		if (typeof this.mudTiles !== "undefined") {
			for (let i = 0; i < this.mudTiles.length; i++) {
				if (tile === this.mudTiles[i]) {
					// mud tile found
					isSlow = "mud";
					break;
				}
			}
		}
		// move faster on ice
		if (typeof this.iceTiles !== "undefined") {
			for (let i = 0; i < this.iceTiles.length; i++) {
				if (tile === this.iceTiles[i]) {
					// ice tile found
					isSlow = "ice";
					break;
				}
			}
		}
		// move faster on paths
		if (typeof this.pathTiles !== "undefined") {
			for (let i = 0; i < this.pathTiles.length; i++) {
				if (tile === this.pathTiles[i]) {
					// path tile found
					isSlow = "path";
					break;
				}
			}
		}

		// some tiles are irrespective of layer !
		let tileArray = this.getTiles(col, row);
		// move slower in tall grass
		if (typeof this.tallGrassBottoms !== "undefined") {
			for (let i = 0; i < this.tallGrassBottoms.length; i++) {
				if (tileArray.includes(this.tallGrassBottoms[i])) {
					// tall grass found
					isSlow = "tallGrass";
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
		if (this.nightTiles !== undefined) {

			// tiles to be changed
			if (this.nightTiles.length === this.dayTiles.length) {
				// iterate through tiles to replace
				for (let replaceIndex = 0; replaceIndex < this.nightTiles.length; replaceIndex++) {
					// iterate through layers
					for (let layer = 0; layer < this.layers.length; layer++) {
						// iterate through area's tiles to find those that need replacing
						for (let tileIndex = 0; tileIndex < this.layers[layer].length; tileIndex++) {
							// check day or night versions
							if (Event.darkness >= 0.2) {
								// night time
								if (this.layers[layer][tileIndex] === this.dayTiles[replaceIndex]) {
									// tile needs replacing
									this.layers[layer][tileIndex] = this.nightTiles[replaceIndex];
								}
							}
							else {
								// day time
								if (this.layers[layer][tileIndex] === this.nightTiles[replaceIndex]) {
									// tile needs replacing
									this.layers[layer][tileIndex] = this.dayTiles[replaceIndex];
								}
							}
						}
					}
				}
			}
			else {
				console.error("dayTiles and nightTiles should have the same length in areadata.js for area " + areaName + ", but do not");
			}

		}
	},

	// animates tiles based on this.animateTiles
	initTileAnimation: function () {
		// clear intervals from last time
		if (Array.isArray(this.tileAnimationIntervals)) {
			for (let i = 0; i < this.tileAnimationIntervals.length; i++) {
				Game.clearInterval(this.tileAnimationIntervals[i]);
			}
		}
		this.tileAnimationIntervals = [];

		// set new intervals if there are tiles to be animated
		if (this.animateTiles !== undefined) {
			for (let animateIndex = 0; animateIndex < this.animateTiles.length; animateIndex++) {
				if (typeof this.animateTiles[animateIndex].animateCondition === "undefined" || this.animateTiles[animateIndex].animateCondition()) {
					this.tileAnimationIntervals.push(Game.setInterval(this.animateTilesFunction.bind(this), this.animateTiles[animateIndex].animateTime, [animateIndex]));
				}
			}
		}
	},

	// animates tiles based on this.animateTiles
	// called by intervals set by initTileAnimation
	// parameter is the index to be animated of the array map.animateTimes
	animateTilesFunction: function(animateIndex) {
		// finding startCol etc is exactly the same as in drawLayer - tbd mayb try to generalise into a fn
		let startCol, endCol, startRow, endRow;

		startCol = Math.floor(Game.camera.x / this.tsize) + this.origin.x/60;
		if (this.viewportOffsetX > 0) {
			// area width not big enough to fill camera
			// set end column so canvas drawing does not loop
			endCol = this.cols - 1;
		}
		else {
		    endCol = startCol + Math.ceil(Game.camera.width / this.tsize);
		}

		startRow = Math.floor(Game.camera.y / this.tsize) + this.origin.y/60;
		if (this.viewportOffsetY > 0) {
			// area height not big enough to fill camera
			// set end column so canvas drawing does not loop
			endRow = this.rows - 1;
		}
		else {
		    endRow = startRow + Math.ceil(Game.camera.height / this.tsize);
		}

		// iterate through tiles
		for (let layer = 0; layer < this.layers.length; layer++) {
		    for (let c = startCol; c <= endCol; c++) {
		        for (let r = startRow; r <= endRow; r++) {
		            let tileNum = map.getTile(layer, c, r); // tile number

					// see if tile should be animated by appearing in this.animateTiles[animateIndex]
					let index = this.animateTiles[animateIndex].tiles.findIndex(tile => tile === tileNum);
					if (index >= 0) {
						// tile should be animated!
						index++;
						if (index === this.animateTiles[animateIndex].tiles.length) {
							// wrap around to start of animate array
							index = 0;
						}
						// set the tile
						// could use map.setTile? not sure if necessary
						this.setTile(layer, c, r, this.animateTiles[animateIndex].tiles[index]);
					}
		        }
			}
	    }
	},

	// replaces a tile or group of tiles - these tiles should all be distinct (e.g. 6 different tiles make up a rock)
	//
	// tileData is an array of objects, with each object containing the following:
	// tileNum: integer specifying the tile that should be replaced
	// replaceTo: integer specifying the tile that it should be replaced to (same is tileNum if not replaced)
	// relativePosition: object containing x and y, where the top left tile being replaced is x:0, y:0, and one unit of x/y is one row/col
	//
	// location is an object containing x and y properties of the location that it should be checked to see if tiles can be replaced
	//
	// areaName is an optional name of the area, where the tiles are not replaced if the area is different
	//
	// either returns false if no tiles were replaced, or a function that can be called to replace the tiles
	setTilesAtLocation: function (tileData, location, areaName) {
		let locationCol = map.getCol(location.x);
		let locationRow = map.getRow(location.y);
		let tileAtLocation = map.getTile(0, locationCol, locationRow);

		let touchingTile = tileData.find(tile => tile.tileNum === tileAtLocation);

		if (touchingTile !== undefined) {
			// touching a tile, tiles should be replaced
			return function () {
				if (Game.areaName === areaName || typeof areaName == "undefined") {
					let origin = touchingTile.relativePosition;

					for (let i = 0; i < tileData.length; i++) {
						let relativeCol = tileData[i].relativePosition.x - origin.x;
						let relativeRow = tileData[i].relativePosition.y - origin.y;

						map.setTile(0, locationCol + relativeCol, locationRow + relativeRow, tileData[i].replaceTo);
					}
				}
			}
		}
		return false;
	},

	// replace all tiles in the area (any layer) of id "from" to id "to"
	replaceTiles: function (from, to) {
		// iterate through layers
		for (let layer = 0; layer < this.layers.length; layer++) {
			// iterate through tiles to find those that need replacing
			for (let tileIndex = 0; tileIndex < this.layers[layer].length; tileIndex++) {
				if (this.layers[layer][tileIndex] === from) {
					// tile needs replacing
					this.layers[layer][tileIndex] = to;
				}
			}
		}
	},

	//
	// 'hard-coded' functions to do specific things
	//

	// turn eaglecrest lights green!
	eaglecrestSamhainLights: function () {
		this.replaceTiles(3, 145);
		this.replaceTiles(11, 145);
		this.replaceTiles(2, 146);
		this.replaceTiles(34, 146);
		this.replaceTiles(18, 153);
		this.replaceTiles(42, 153);
		this.replaceTiles(27, 154);
		this.replaceTiles(19, 154);
		this.replaceTiles(35, 156);
		// also replace image of any light objects
		for (let i = 0; i < Game.things.length; i++) {
			if (Game.things[i].name === "Eaglecrest Lamp") {
				Game.things[i].setImage("eaglecrestLampSamhain");
				Game.things[i].imageNight = "eaglecrestLampSamhain";
				Game.things[i].imageDay = "eaglecrestLampSamhain";
			}
		}
	},
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
// set mightNotBeInArray to true if it doesn't matter if no object is found
Game.searchFor = function (id, array, mightNotBeInArray) {
	let index = null;
	for (let i = 0; i < array.length; i++) {
		if (array[i].id === id) {
			index = i;
			break;
		}
	}
	if (index === null && !mightNotBeInArray) {
		console.error("The requested item of id " + id + " could not be found in the following array: ", array);
	} // some places this is used, it doesn't matter if the search fails
	return index;
}

// remove object from all arrays it is in using its id
// id = object.id
// type = name of the array the object is in
// index = known index of the object in its array (e.g. of an enemy in Game.enemies) - this is optional
Game.removeObject = function (id, type, index) {
	// find the class of the object from its type
	let className = this.typeClasses[type];

	// every object is an entity
	// remove from allEntities
	this.allEntities.splice(this.searchFor(id, this.allEntities), 1);

	if (className.prototype instanceof Visible || className.name === "Visible") {
		// extends off Thing or is Thing
		// remove from allVisibles
		this.allVisibles.splice(this.searchFor(id, this.allVisibles), 1);

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
		else if (className.prototype instanceof Shape || className.name === "Shape") {
			this.allShapes.splice(this.searchFor(id, this.allShapes), 1);
		}
	}

	// remove from damageableByPlayer (if it is in there)
	let damageableArrayIndex = this.searchFor(id, this.damageableByPlayer, true);
	if (damageableArrayIndex !== null) {
		this.damageableByPlayer.splice(damageableArrayIndex, 1);
	}

	// remove from enemy attackTargets arrays
	for (let i = 0; i < this.enemies.length; i++) {
		for (let j = 0; j < this.enemies[i].attackTargets.length; j++) {
			if (this.enemies[i].attackTargets[j].target.id === id) {
				// remove it
				this.enemies[i].attackTargets.splice(j);
				j--;
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
	if (objArray.length !== 0) {
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
	return undefined;
}

// check if obj1's x and y are within 20 pixels of obj2's
// obj1 and obj2 should have x and y properties
Game.isAtLocation = function (obj1, obj2) {
	if (obj1 !== undefined && obj2 !== undefined
	&& Math.round(obj1.x / 20) === Math.round(obj2.x / 20)
	&& Math.round(obj1.y / 20) === Math.round(obj2.y / 20)) {
		return true;
	}
	return false;
}

// swap the positions of two entities!
Game.swapPositions = function (entity1, entity2) {
	let entity1X = entity1.x;
	let entity1Y = entity1.y;
	entity1.x = entity2.x;
	entity1.y = entity2.y;
	entity2.x = entity1X;
	entity2.y = entity1Y;

	// stop any bugs from arising...
	entity1.moveTowards = undefined;
	entity2.moveTowards = undefined;
	if (typeof entity1.removeChannelling !== "undefined") {
		entity1.removeChannelling("move");
	}
	if (typeof entity2.removeChannelling !== "undefined") {
		entity2.removeChannelling("move");
	}
}

//
// Timeouts
// (replaces setTimeout so can be run synchronously)
// (same for interval, just isn't removed from the array)
//

Game.currentTimeoutId = 0; // incremented by 1 for each new timeout/interval; unique for each timeout (so they can be removed)
Game.timeouts = [];
Game.intervals = [];

// timeouts / intervals stopped when area is changed should be added (their ids) to this array
Game.clearedTimeoutsOnAreaChange = [];
Game.clearedIntervalsOnAreaChange = [];

// time should be in ms
// params are parameters passed into the function. array if more than one parameter
Game.setTimeout = function (func, time, params) {
	if (!Array.isArray(params)) {
		params = [params];
	}
	this.currentTimeoutId++;
	let timeoutObject = {id: this.currentTimeoutId, func: func, time: time, elapsed: 0, params: params};
	this.timeouts.push(timeoutObject);
	return this.currentTimeoutId;
}
Game.setInterval = function (func, time, params, call) { // call is set to true if it should be called straight away rather than before the delay
	if (!Array.isArray(params)) {
		params = [params];
	}
	this.currentTimeoutId++;
	let timeoutObject = {id: this.currentTimeoutId, func: func, time: time, elapsed: 0, params: params};
	this.intervals.push(timeoutObject);

	if (call) {
		func(...params);
	}

	return this.currentTimeoutId;
}

// param is timeout.id / interval.id (unique id for each timeout/interval)
Game.clearTimeout = function(id) {
	let index = this.timeouts.findIndex(timeout => timeout.id === id);
	if (index >= 0 && !isNaN(index)) {
		this.timeouts.splice(index, 1);
		return true;
	}
	return false;
}
Game.clearInterval = function(id) {
	let index = this.intervals.findIndex(timeout => timeout.id === id);
	if (index >= 0 && !isNaN(index)) {
		this.intervals.splice(index, 1);
		return true;
	}
	return false;
}

//
// Timers
//

Game.timers = []; // timers are all be added to this array so they are incremented
Game.nextTimerId = 0;

class Timer {
	constructor () {
		this.id = Game.nextTimerId;
		Game.nextTimerId++;

		this.paused = false;

		this.elapsed = 0; // in ms

		this.splitTimes = []; // this is an array of arrays of split times, where the array the split time is placed in is the parameter of this.split (i.e. the leg of the lap)
		this.lastSplitAt = 0; // elapsed time when split was last called

		Game.timers.push(this);
	}

	reset () {
		this.elapsed = 0;
	}

	// returns the time (in ms) since the last split time (/ initiation if there wasn't a prev split time)
	// leg is an interger that corresponds to the array of this.splitTimes that the split time is placed in (i.e. the leg of the lap - set to 0 by default!)
	split (leg) {
		if (typeof leg === "undefined") {
			leg = 0; // set to 0 by default
		}
		if (!Array.isArray(this.splitTimes[leg])) {
			this.splitTimes[leg] = [];
		}
		let splitTime = this.elapsed - this.lastSplitTime;
		this.splitTimes[leg].push(splitTime);
		this.lastSplitAt = this.elapsed;
		return splitTime;
	}
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
		if (this.type === undefined) {
			console.error("The type of this entity was not specified - please tell Jake~", this);
		}

		this.createdAt = Game.gameTime; // game time at which this was created
		this.createdAtTicks = Game.gameTicks; // the above but in ticks

		this.source = {
			location: properties.source, // where the entity came from (villager, area, etc.) - used for finding location of images
			id: properties.sourceId // id of where entity came from in this location (if applicable)
		};

		this.area = Game.areaName;

		this.map = properties.map;
		this.x = properties.x;
		this.y = properties.y;
		this.width = properties.width;
		this.height = properties.height;

		// for if it can be mounted.. mountee position relative to this
		this.rideAdjustX = properties.rideAdjustX || 0;
		this.baseRideAdjustX = this.rideAdjustX;
		this.rideAdjustY = properties.rideAdjustY || 0;
		this.baseRideAdjustY = this.rideAdjustY;

		// alternate spawning:
		// tbd use for chests and villagers!
		this.spawnLocations = properties.spawnLocations; // an array of objects denoting spawn boxes, a random place in a random one of them is chosen
		if (this.spawnLocations === "villager") {
			// take villager spawn locations (from Area villagerData)
			this.spawnLocations = Game.villagerLocationArray;
		}
		if (typeof this.x === "undefined" && typeof this.y === "undefined" && typeof this.spawnLocations !== "undefined") {
			let spawnPosition = this.positionFromSpawnLocations(this.spawnLocations);
			this.x = spawnPosition[0];
			this.y = spawnPosition[1];
		}

		this.moveTowards = properties.moveTowards; // should be an object with an x and y, and a speed property if this entity doesn't have a .speed/this speed should be overriden
		// movetowards can also be given a moveTowardsFinishFunction which is called when the locations is reached (not if it's interrupted before this!)
		// note moveTowards is currently incompatible with player / enemy / projectile move towards - tbd merge them into this one :)
		this.moveTowardsLoop = properties.moveTowardsLoop;// moveTowardsLoop is an optional array of moveTowards objects which are iterated through one after another
		if (typeof this.moveTowardsLoop !== "undefined") {
			let startIndex;
			if (typeof properties.moveTowardsLoopStartIndex !== "undefined") {
				this.moveTowardsLoopStartIndex = properties.moveTowardsLoopStartIndex;
				if (this.moveTowardsLoopStartIndex === "random") {
					this.moveTowardsLoopStartIndex = Random(0,this.moveTowardsLoop.length);
				}
				startIndex = this.moveTowardsLoopStartIndex;
			}
			else {
				startIndex = 0;
			}
			this.moveTowards = this.moveTowardsLoop[startIndex];
			this.moveTowardsState = startIndex; // index in loop that is currently being followed
		}
		this.speed = properties.speed; // potentially used with moveTowards

		this.rotate = 0;
		this.rotateSpeed = ToRadians(properties.rotateSpeed); // input is in deg per second

		if (this.type === "collisions") { // done here because collisions are actually entities in a special array .. tbd change this?
			this.hitboxColour = properties.hitboxColour || "#FF00000";
		}
		else if (this.type === "tripwires") { // done here because collisions are actually entities in a special array .. tbd change this?
			this.hitboxColour = properties.hitboxColour || "#00FF00";
		}
		else {
			this.hitboxColour = properties.hitboxColour || "#0000FF"; // hex colour for hitbox
		}

		this.collisionType = properties.collisionType || "body"; // "feet" = check collision with Game.hero.footHitbox
		// collision type currently only applies to tripwires

		/* checkTouching is an array of objects, where objects are in following format:
		{
			arrayName: (name of array in Game, i.e. "things" for Game.things)
			objectName: (optional, objects of only a specific name in that array)
			isTouchingFunction: (passed in object index as parameter, bound to this using call)
		}*/
		this.checkTouching = properties.checkTouching;

		this.collision = properties.collision; // if the player should collide with this (i.e. it has a nested collision)
		// this.collision is an object, with properties relativeX, relativeY, width, height
		// relative position means from the centre of this, to the centre of the collision
		if (typeof this.collision !== "undefined") {
			let collisionData = {
				x: this.x + this.collision.relativeX,
				y: this.y + this.collision.relativeY,
				width: this.collision.width,
				height: this.collision.height,
				source: "childCollision",
				type: "collisions"
			}
			Game.collisions.push(new Collision(collisionData));
		}

		// trail
		// array of particle trails
		this.trails = properties.trails || [];

		// sparkling trail for quest
		if (properties.sparkle) {
			this.sparkle(properties.sparkleColour); // leave as undefined for gold
			// sets this.sparkling to true
		}


		this.use = properties.use; // optional metadata about object, can be used by anything that needs it
		this.dev = properties.dev; // if this is true it was placed by a dev item, can be deleted by dev items, etc

		// onLoad function
		this.onLoad = properties.onLoad;
		if (this.onLoad !== undefined) {
			this.onLoad();
		}

		// set screenX and screenY (if camera has been defined, i.e. this is not created before init)
		if (Game.camera !== undefined) {
			Game.updateScreenPosition(this);
		}

		if (properties.addToObjectArrays !== false) {
			Game.allEntities.push(this); // array for current area only
		}
	}

	// spawnLocations should be an array of objects with an x, y, optional width and height
	// a random one is chosen and a random postion in that spawn location is chosen
	positionFromSpawnLocations (spawnLocations) {
		let x, y;
		let spawnLocation = spawnLocations[Random(0, spawnLocations.length-1)];
		if (typeof spawnLocation.width === "undefined") {
			x = spawnLocation.x;
		}
		else {
			x = Random(spawnLocation.x, spawnLocation.x+spawnLocation.width);
		}
		if (typeof spawnLocation.height === "undefined") {
			y = spawnLocation.y;
		}
		else {
			y = Random(spawnLocation.y, spawnLocation.y+spawnLocation.height);
		}
		return [x, y];
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

		if (object2.x - object2.width / 2 < object1.x + object1.width / 2 &&
	    object2.x + object2.width / 2 > object1.x - object1.width / 2 &&
	    object2.y - object2.height / 2 < object1.y + object1.height / 2 &&
	    object2.y + object2.height / 2 > object1.y - object1.height / 2) {
			return true;
		}
		else {
			return false;
		}
	}

	// check if something is being touched in a particular array
	// true = at least one thing in array is being touched
	// false = nothing in array is being touched
	isTouchingType (array) {
		for (let i = 0; i < array.length; i++) {
			if (this.isTouching(array[i])) {
				return true;
			}
		}
		// not touching any of them
		return false;
	}

	// return an array of touched entities
	getTouching () {
		let touchingArray = [];

		for (let i = 0; i < Game.allEntities.length; i++) {
			if (this.isTouching(Game.allEntities[i])) {
				touchingArray.push(Game.allEntities[i]);
			}
		}

		return touchingArray;
	}

	// checks which directions (if any) this is touching object
	// movex and movey are the most recent movements in the x and y directions
	// returns an object with x and y properties, set to true/false depending on if there is a collision in that direction with the player's current movement direction
	// tbd reduce code duplication
	isColliding (object, movex, movey) {
		// directions that are being collided in
		let collisionDirections = {
			x: false,
			y: false
		};

		// test for collision in x
		this.y -= movey;
		if (this.isTouching(object)) {
			// still touching object (with just x movement)
			collisionDirections.x = true;
		}

		// test for collision in y
		this.y += movey;
		this.x -= movex;
		if (this.isTouching(object)) {
			// still touching object (with just y movement)
			collisionDirections.y = true;
		}

		// undo temporary position change
		this.x += movex;

		return collisionDirections;
	}

	// get top, bottom, left, and right coordinates
	// also midpoint (midX, midY) coordinates
	// based on x and y (not screenX and screenY)
	getBoundaries () {
		let boundaries = {
			left: this.x - this.width / 2,
			right: this.x + this.width / 2,
			top: this.y - this.height / 2,
			bottom: this.y + this.height / 2,
		};
		boundaries.midX = (boundaries.left + boundaries.right) / 2;
		boundaries.midY = (boundaries.top + boundaries.bottom) / 2;
		return boundaries;
	}

	// returns an array of objects of solid tiles being touched
	// the objects have properties x, y, width (60), height (60)
	// note that, depending on the size of 'this', two of the same tile might be returned (tbd fix this)
	getTouchingSolidTiles () {
		let boundaries = this.getBoundaries();

		let touchingSolidTiles = [];

		if (this.map.isSolidTileAtXY(boundaries.left, boundaries.top)) {
			// tile at top left
			touchingSolidTiles.push({
				// find col/row, multiply by 60, then subtract sideLength/2
				x: (Math.floor(boundaries.left/60))*60+30,
				y: (Math.floor(boundaries.top/60))*60+30,
				width: 60,
				height: 60
			});
		}
		if (this.map.isSolidTileAtXY(boundaries.right, boundaries.top)) {
			// tile at top right
			touchingSolidTiles.push({
				x: (Math.floor(boundaries.right/60))*60+30,
				y: (Math.floor(boundaries.top/60))*60+30,
				width: 60,
				height: 60
			});
		}
		if (this.map.isSolidTileAtXY(boundaries.left, boundaries.bottom)) {
			// tile at bottom left
			touchingSolidTiles.push({
				x: (Math.floor(boundaries.left/60))*60+30,
				y: (Math.floor(boundaries.bottom/60))*60+30,
				width: 60,
				height: 60
			});
		}
		if (this.map.isSolidTileAtXY(boundaries.right, boundaries.bottom)) {
			// tile at bottom right
			touchingSolidTiles.push({
				x: (Math.floor(boundaries.right/60))*60+30,
				y: (Math.floor(boundaries.bottom/60))*60+30,
				width: 60,
				height: 60
			});
		}

		return touchingSolidTiles;
	}

	isOnMap () {
		if (this.x < -map.origin.x || this.x > map.cols*60 - map.origin.x || this.y < -map.origin.y || this.y > map.rows*60 -map.origin.y) {
			return false;
		}
		return true;
	}

	// returns true if touching a solid tile or collision, and false if not
	isStuck () {
		let touchingSolidTiles = this.footHitbox.getTouchingSolidTiles(); // array
		let touchingCollision = this.footHitbox.isTouchingType(Game.collisions); // set to true or false depending on whether a collision is being touched
		return (touchingSolidTiles.length > 0 || touchingCollision);
	}


	// give the entity a new particle trail (it is fine if the trail is already on the entity - this checks that)
	// name should be a unique name associated with the trail so it can be easily removed
	// particleData is an object with all the particles' data (including variance etc - see party hat item)
	// additional particleData properties:
	// duration removes the trail after a certain time in SECONDS has elapsed
	addTrail (name, particleData) {
		for (let i = 0; i < this.trails.length; i++) {
			if (this.trails[i].trailName === name) {
				return false; // trail already exists
			}
		}
		particleData.trailName = name;
		if (typeof particleData.height === "undefined") {
			particleData.height = particleData.width;
		}
		this.trails.push(particleData);
		return true;
	}

	// remove trail by name (if it's being removed by id instead it's fine to just splice)
	removeTrail (name) {
		let trailRemoved = false;
		for (let i = 0; i < this.trails.length; i++) {
			if (this.trails[i].trailName === name) {
				this.trails.splice(i, 1);
				trailRemoved = true;
			}
		}
		return trailRemoved;
	}

	// specific trails for "sparkling" entities (i.e. quest locations)
	// only one of these can be set at once
	sparkleOn (colour) {
		if (!this.sparkling) {
			if (typeof colour === "undefined") {
				colour = "FFE000"; // gold , default
			}
			this.addTrail("&sparkle", {
				width: 3,
				height: 3,
				colour: colour,
				removeIn: 1000,
				rotation: 0,
				variance: 50, // variance in position (in x/y axis in one direction from player)
				intensity: 4, // no. of particles every 100ms
				light: true
			});
			this.sparkling = true;
		}
	}

	sparkleOff (colour) {
		if (this.sparkling) {
			this.removeTrail("&sparkle");
			this.sparkling = false;
		}
	}
}

// Shape and Thing both inherit from this
class Visible extends Entity {
	constructor(properties) {
		super(properties);

		// canvas positioning
		this.z = properties.z || 0; // -1 is always below (e.g. wizard's lore) and 1 is always on top (e.g. projectile)
		this.orderOffsetY = properties.orderOffsetY || 0; // offset to how the y acts in canvas positioning sorting algorithm


		this.removeIn = properties.removeIn; // measured in seconds

		this.transparency = properties.transparency; // global alpha that it should be drawn with (1 = opaque, 0 = transparent)

		// optional function for when space is pressed when touching
		this.onInteract = properties.onInteract;

		if (properties.addToObjectArrays !== false) {
			Game.allVisibles.push(this); // array for current area only
		}
	}
}

// rather than having an image, this displays a shape
class Shape extends Visible {
	constructor(properties) {
		super(properties);

		this.renderType = "shape";

		this.shape = properties.shape || "ellipse"; // "rect", "ellipse" are the only currently supported types

		this.colour = properties.colour; // if undefined there is no inside fill
		this.borderColour = properties.borderColour;
		this.thickness = properties.thickness || 0; // border thickness, if 0 there is no border

		// optional changing between colours
		this.colourTransition = properties.colourTransition; // array of colours to transition between
		this.transitionSpeed = properties.transitionSpeed;

		if (properties.addToObjectArrays !== false) {
			Game.allShapes.push(this); // array for current area only
		}
	}
}

// a version of entity that can be seen + has an image
class Thing extends Visible {
	constructor(properties) {
		super(properties);

		this.renderType = "image";

		// set image related variables

		// set image to a default rotation image if image is undefined but rotationImages is not
		// otherwise npc would be made hidden by the next block of code
		if (properties.image === undefined && properties.rotationImages !== undefined) {
			properties.image = properties.rotationImages.left || properties.rotationImages.forward;
		}

		if (properties.image !== undefined) {
			this.setImage(properties.image, properties.crop, properties.width, properties.height, properties.rotationImages);
		}
		else if (properties.imageDay !== undefined) {
			// has separate day image and night image
			this.imageDay = properties.imageDay;
			this.imageNight = properties.imageNight;
			this.setImage(properties.imageDay, properties.crop, properties.width, properties.height, properties.rotationImages);
			// this is set by setDayNightImages
		}
		else {
			// an image must be loaded and set via setImage before it can be shown (and then hidden may be set back to false)
			this.hidden = true;
		}

		this.setExpand(properties.expand || 1); // width multiplier (based on base width and base height)

		// sources (and keys) of rotation images, used if images need to be reloaded for next area
		this.rotationImageSources = {};
		if (this.rotationImages !== undefined) {
			if (this.source.location === "villager") {
				// find image sources in villagers
				this.rotationImageSources = Villagers[this.source.id].images;
			}
			else if (this.source.location === "area") {
				// find image sources in area
				let imageKeys = Object.values(this.rotationImages);
				for (let i = 0; i < imageKeys.length; i++) {
					if (imageKeys[i] !== undefined) {
						this.rotationImageSources[imageKeys[i]] = Areas[Game.areaName].images[imageKeys[i]];
					}
				}
			}
			else if (this.source.location === "prevArea") { // i.e. characters from lead
				this.rotationImageSources = properties.rotationImageSources;
			}
			// note nothing is yet done for enemies summonned by spells
		}



		if (typeof properties.nameHidden !== "undefined" && properties.nameHidden()) {
			this.name = "???";
		}
		else {
			this.name = properties.name;
		}

		this.bright = properties.bright; // currently does nothing

		//
		// animation
		//
		if (typeof properties.crop !== "undefined" && typeof properties.animation !== "undefined") {
			properties.animation.baseCrop = properties.crop; // for cropping borders of spritesheet animation
		}
		this.setAnimation(properties.animation); // see setAnimation function for what properties should be passed in etc



		if (properties.addToObjectArrays !== false) {
			Game.allThings.push(this); // array for current area only
		}

		this.canBeOnLead = properties.canBeOnLead || false; // whether a lead can be put on them

		this.showNameTag = properties.showNameTag || false;

		this.walkable = properties.walkable || false; // whether the object can be walked on as normal ground (i.e. even if it is over water)
		if (this.walkable && properties.addToObjectArrays !== false) {
			Game.walkableObjects.push(this);
		}


		this.canBePickedUp = properties.canBePickedUp || false; // player can press space to channel and pick up
		// if it can be picked up, it should be an object with properties "channelTime" (ms), "itemType" (i.e. "sword"), "itemId" (in itemdata), "channelText" (optional), "inventoryFullText" (optional), "onPickUp" (optional)
		if (this.canBePickedUp !== false) {
			if (typeof this.onInteract === "undefined") {
				let channelText = this.canBePickedUp.channelText || "Picking item up";
				let inventoryFullText = this.canBePickedUp.inventoryFullText || "<i>Your inventory is full! Try again when you have space.</i>";

				let pickUpProperties = this.canBePickedUp;
				let removeId = this.id;
				let removeType = this.type;

				let channelFunction = function () {
					if (Dom.inventory.give(Items[pickUpProperties.itemType][pickUpProperties.itemId]) === false) {
						Dom.chat.insert(inventoryFullText);
					}
					else {
						if (typeof pickUpProperties.onPickUp !== "undefined") {
							pickUpProperties.onPickUp();
						}
						// remove this object from the map
						Game.removeObject(removeId, removeType);
					}
				}

				this.onInteract = function () {
					Game.hero.channel(channelFunction, [], this.canBePickedUp.channelTime, channelText);
				}
			}
			else {
				this.canBePickedUp = false;
				console.error(this.name, "could not have canBePickedUp property since onInteract had already been set.")
			}
		}


		this.onDarkBackground = properties.onDarkBackground || false; // for darker character names (not currently finished - tbd)
	}

	// imageName is the key name of the image stored in loader
	// crop is object with width and height information (x, y , width, height)
	// width and height are optional "stretch" parameters
	// rotationImages is object of image key names in loader of rotation images (i.e. different character directions)
	// rotationImages can be set to false to not change rotationImage variables
	// rotationImages can be set to undefined if the character's image does not change on rotate (this will successfully overwirte any old rotation image variables)
	setImage (imageName, crop, width, height, rotationImages) {
		if (this.imageName !== imageName) {
			// avoid undefined error later
			if (crop === undefined) {
				crop = {};
			}

			this.imageName = imageName;
			let imageObject = Loader.getImageInfo(imageName);
			this.image = imageObject.img;
			this.imageSrc = imageObject.src;
			this.imageFlipped = imageObject.flipped;

			this.setImageDimensions(crop, width, height);

			// changing of images on rotation
			// check function exists (i.e. capacity for images to be changed on rotation exists)
			if (this.setRotationImageVariables !== undefined && rotationImages !== false) {
				this.setRotationImageVariables(rotationImages);
			}
		}
	}

	setImageDimensions (crop, width, height, rotationImages) {
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

	// set the expand and z position of the entity (the z position is based on the expand)
	setExpandZ (value) {
		this.setExpand(value);
		this.z = value-1;
	}

	// sets the object to have a certain animation, which can be removed by removeAnimaton
	setAnimation (properties) {
		this.animation = properties; // this should be an object with the following properties:
		// "type" which should be either "carousel" (separate images used) or "spritesheet" (all images on one spritesheet) or "function" (no extra properties required besides frameTime; just has a function called every frameTime)
		// "frameTime" is the time in ms until the next animation frame
		// in addition, "carousel" type needs an animation.images array
		// .. and "spritesheet" type needs an imagesPerRow and totalImages property. the border width (if any) between the images is figured out from the current object.crop properties
		// also, animation.state is set to the index of the current image, animation.animateObj is set to this, and animation.lastAnimated is set to the time in ms since it was last animated
		// a random state is chosen to begin with, but if this isn't desired then it can be set using animation.startState

		// input validation for animation.type:
		if (typeof this.animation !== "undefined" && this.animation.type !== "carousel" && this.animation.type !== "spritesheet" && this.animation.type !== "function") {
			console.error("Unknown animation.type for "+this.name, this.animation);
			this.animation = undefined;
		}

		if (typeof this.animation !== "undefined") {
			// deep copy ..
			this.animation = Object.assign({}, this.animation);
			// set totalImages property if necessary
			if (this.animation.type === "carousel") {
				this.animation.totalImages = this.animation.images.length;
			}
			if (this.animation.type === "function" && typeof this.animation.totalImages === "undefined") {
				this.animation.totalImages = 1; // some random default value since it doesn't matter for function type
			}

			this.animation.lastAnimated = 0; // in ms, time it was last animated (used with frameTime)

			this.animation.animateObj = this;

			if (typeof this.animation.startState !== "undefined") {
				this.animation.state = this.animation.startState;
			}
			else {
				this.animation.state = Random(0, this.animation.totalImages-1);
			}

			// let Game know this should be animated in animationTick (and that there should be an animationTick at all)
			Game.animationList.push(this);
		}
	}

	removeAnimation () {
		// remove all animatoin properties
		this.animation = undefined;

		// remove this from game animationlist
		let i = Game.animationList.findIndex(object => object.id === this.id);
		Game.animationList.splice(i, 1);
	}

	// overwritten by Character
	postRenderFunction () {
		if (this.showNameTag) {
			Game.drawCharacterName(Game.ctx, this, this.screenX, this.screenY - this.height / 2 - 3);
		}
	}
}

// a version of thing that can be damaged (but can't deal damage)
class Character extends Thing {
	constructor(properties) {
		super(properties);

		// rotation image names
		// properties.rotationImages should be an object with "up", "down", "Left", and "right"
		this.setRotationImageVariables(properties.rotationImages);

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
			type: "entities",
		});

		// channelling
		this.channelling = false;
		this.channellingInfo = false;


		this.health = properties.health || properties.stats.maxHealth;
		this.damageTaken = 0; // only used so far for Dummies
		this.damageTakenFromHero = false; // boolean - used to decide if hero should get progress from the character dying

		this.damageableByPlayer = properties.damageableByPlayer; // set to true if the hero can damage them (automatically set to true for enemies and dummies)
		if (this.damageableByPlayer && properties.addToObjectArrays !== false) {
			Game.damageableByPlayer.push(this);
		}

		this.speed = properties.stats.walkSpeed || 0;

		this.level = properties.level;

		this.class = properties.class;

		this.species = properties.species; // "human", "goblin", "orc", etc.
		this.subSpecies = properties.subSpecies; // "nilbog goblin", "fire orc", etc.

		this.hostility = properties.hostility; // used for name colour

		this.association = properties.association; // used e.g. by coyotes (set to "coyotePack") to see which are in a pack and should be healed by wrangler

		this.spawnX = properties.x;
		this.spawnY = properties.y;

		this.respawning = false; // is in the process of coming back from the dead (doesn't have to be a corpse to do this)
		this.isCorpse = false; // is currently a corpse (doesn't mean it will respawn!)
		// to check if it is dead, check respawning || isCorpse (if neither of these happen upon death, the entity is removed)

		this.deathImage = {}; // corpse image (optional)
		this.deathImage.image = properties.deathImage; // key name of image in loader (has already been loaded in)
		// set width and height to death image dimensions unless otherwise specified (handled by setImage)
		this.deathImage.width = properties.deathImageWidth;
		this.deathImage.height = properties.deathImageHeight;
		this.deathImage.crop = properties.deathImageCrop;

		// stats
		this.stats = {};

		// these stats must have a value
		this.stats.maxHealth = properties.stats.maxHealth;

		// it is recommended that you pick a value for these, but not necessary
		this.stats.defence = properties.stats.defence || 0;
		this.stats.healthRegen = typeof properties.stats.healthRegen !== "undefined" ? properties.stats.healthRegen : 0.5;
		this.stats.walkSpeed = properties.stats.walkSpeed || 180; // base speed values are same as player
		this.stats.swimSpeed = properties.stats.swimSpeed || 60;
		this.stats.iceSpeed = properties.stats.iceSpeed || 270;
		this.stats.channellingMoveSpeed = properties.stats.channellingMoveSpeed || 30; // percentage of speed if moving whilst channelling smth
		this.stats.lootTime = properties.stats.lootTime || 10000; // time that it can be looted for
		this.stats.respawnTime = properties.stats.respawnTime || 11000; // time to respawn (should be more than lootTime)

		// optional stats
		// using || defaults to second value if first is undefined, 0 or ""
		this.stats.dodgeChance = properties.stats.dodgeChance || 0;
		this.stats.reflection = properties.stats.reflection || 0;
		this.stats.stealthed = properties.stats.stealthed || false; // can't be seen
		this.stats.frostaura = properties.stats.frostaura || false;
		this.stats.windShield = properties.stats.windShield || false; // can't be moved by wind
		this.stats.healingPower = properties.stats.healingPower || 100; // multiplier of healing receieved (doesn't include usual health regen)
		this.stats.unstoppable = properties.stats.unstoppable || false; // immunity to movement-reducing abilities
		this.stats.enemyAggro = properties.stats.enemyAggro || 100; // percentage

		this.critter = properties.critter; // if this is set to true, doesn't count for combatant achivements

		// array items that can damage the character (empty = any can)
		// array should contain item names
		this.canBeDamagedBy = properties.canBeDamagedBy || [];

		// whether it shows a lootable corpse when it dies
		this.corpseOnDeath = properties.corpseOnDeath;
		if (this.corpseOnDeath === undefined) {
			this.corpseOnDeath = true; // default value (wouldn't work otherwise since true would take precedence)
		}
		// whether it respawns when it dies
		this.respawnOnDeath = properties.respawnOnDeath;
		if (this.respawnOnDeath === undefined) {
			this.respawnOnDeath = true; // default value (wouldn't work otherwise since true would take precedence)
		}

		this.onDeath = properties.onDeath;
		this.onDeathAdditional = properties.onDeathAdditional; // so that we can have an ondeath from the speciestemplate and from areadata for example
		// onDeathAdditional doesn't require damage to be dealt by hero, but onDeath does!!!

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

		// loop through chat messages to check that none of them are objects
		// if they are objects then set the chat based on the area the character is in (e.g. .eaglecrest, .loggingCamp)
		let chatKeys = Object.keys(this.chat);
		for (let i = 0; i < chatKeys.length; i++) {
			if (typeof this.chat[chatKeys[i]] === "object" && !Array.isArray(this.chat[chatKeys[i]])) {
				this.chat[chatKeys[i]] = this.chat[chatKeys[i]][Player.lootArea];
			}
		}

		// whether NPC's name should be shown in chat
		// (might not be if a special name is hard-coded instead, for example)
		// note the npc name isn't shown in chat for chat sequences anyway
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
				this.chat.questComplete = this.chat.christmasGreeting;
				this.chat.notUnlockedRoles = this.chat.christmasGreeting;
			}
		}
		else if (Event.event === "Antorax") { // Antorax Day
			// chooseChat changed
			if (this.chat.chooseChat !== undefined && this.chat.antoraxDayGreeting !== undefined) {
				this.chat.chooseChat = this.chat.antoraxDayGreeting;
				this.chat.questComplete = this.chat.antoraxDayGreeting;
				this.chat.notUnlockedRoles = this.chat.antoraxDayGreeting;
			}
		}

		// areaJoin chat message (if the npc has one)
		if (this.chat.areaJoin !== undefined) {
			this.say(this.chat.areaJoin, 0, true);
		}

		this.direction = properties.direction || 0; // used for rotation image

		this.statusEffects = [];
		this.numberOfHiddenStatusEffects = 0; // number of status effects that aren't shown (for displaying status effects)

		if (properties.addToObjectArrays !== false) {
			Game.allCharacters.push(this); // array for current area only
		}

		if (typeof properties.showNameTag === "undefined") {
			this.showNameTag = true; // same as property in Thing, but now defaults to true
		}
	}


	// remove whatever is currently being channelled
	// called when the character moves or tries to channel something else
	// reason is set to why the channel was removed (i.e. "move", "damage", ...)
	// if there is one, this also calls and resets channelCancelFunction (which should always be set after channel() is called!)
	removeChannelling (reason) {
		if (this.channelling !== false) {

			// check that reason is a valid reason...
			if (reason === "move" && !this.channellingInfo.cancelChannelOnMove) {
				return;
			}
			if (reason === "damage" && !this.channellingInfo.cancelChannelOnDamage) {
				return;
			}

			// remove existing channelling
			if (this.channelling === "fishing") {
				// remove fishing bobber
				Game.removeObject(this.channellingProjectileId, "projectiles");
				this.channellingProjectileId = null;

				Game.clearTimeout(Game.fishTimeout);
			}
			else if (this.channelling === "projectile") {
				if (reason !== "projectileAttackFinished") {
					this.finishAttack(); // for attack channelling for hero
				}
			}
			else {
				Game.clearTimeout(this.channelling); // might not always be a timeout, but this doesn't matter (does nothing if not a timeout)
				// N.B. this.channelling should never be an int, otherwise clearTimeout *does* mess it up (maybs validate this?))
			}

			// now nothing is being channelled
			this.channelling = false;
			this.channellingInfo = false;

			// if there was a channelCancelFunction, call it then set it back to undefined
			if (typeof this.channelCancelFunction !== "undefined") {
				this.channelCancelFunction();
				this.channelCancelFunction = undefined;
			}
		}
	}

	// set the values of this.channelling and this.channellingInfo
	// these should never be set / removed without using these functions !
	// channellingValue is what this.channelling is set to
	// parameters must be an array
	// time is in ms, and is optional here (but required for "channel" fn below)
	// description is a short description shown on the channelling bar
	// description is set to false if a bar should not be shown
	// extraInfo is an object that could have the following properties: (all saved in channellingInfo)
	// extraInfo.colour is an optional colour for the channelling bar (otherwise it uses default magenta)
	// extraInfo.cancelChannelOnDamage means the channel is cancelled when they take damage
	// extraInfo.cancelChannelOnMove means the channel is cancelled when they move (on by default)
	// extraInfo.channelCancelFunction is a function to be called on the channel being cancelled
	// extraInfo.timeout is set to true if this was called from this.channel. otherwise channellingValue is not allowed to be an integer!!
	setChannelling (channellingValue, time, description, extraInfo) {
		this.removeChannelling("channellingForceSet"); // should never be the reason removeChannelling is called, but just in case...

		if (typeof extraInfo === "undefined") {
			extraInfo = {};
		}

		if (Number.isInteger(channellingValue) && !extraInfo.timeout) {
			// not allowed !!!!
			console.error("Channelling value was attempted to be set to an integer but wasn't a timeout!!", channellingValue);
		}

		// set channelling to the timeout
		this.channelling = channellingValue; // parameters is ...spread twice (from setTimeout and channelFunction) so array of array of params :)

		if (typeof extraInfo.cancelChannelOnMove === "undefined") {
			extraInfo.cancelChannelOnMove = true; // default value
		}

		this.channellingInfo = {
			description: description,
			time: time,
			start: Date.now(), // tbd use Game.gameTicks or Game.gameTime here instead?
			colour: extraInfo.colour,
			cancelChannelOnDamage: extraInfo.cancelChannelOnDamage, // cancel the channelling when they take damage
			cancelChannelOnMove: extraInfo.cancelChannelOnMove, // cancel the channelling when they move
			timeout: extraInfo.timeout, // true or false
		};
	}

	// **channel a function** (channelling projectiles etc is handled separately, in setChannelling above this)
	// this.channelling is set to the timeout
	// channelling fails (thus the timeout is cleared) if the character's channelling is set to something else or if the user moves
	// see setChannelling function above for documentation & constraints on params
	channel (func, parameters, time, description, extraInfo) {
		if (!this.hasStatusEffectType("stun")) { // cannot channel when stunned
			// remove whatever was previously channelled
			this.removeChannelling("channel");
			// add line to remove channelling when channelling expires to the function
			let channelFunction = function (parameters) {
				func(...parameters);
				this.channelling = false;
				this.channellingInfo = false;
			}.bind(this);

			let channellingValue = Game.setTimeout(channelFunction, time, [parameters]); // what this.channelling is set to

			if (typeof extraInfo === "undefined") {
				extraInfo = {};
			}
			extraInfo.timeout = true; // because called from this fn, so channellingValue is allwoed to be an int

			this.setChannelling(channellingValue, time, description, extraInfo)
		}
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

		if (arrayType !== "all" || message.constructor === String) {
			Dom.chat.insert(Dom.chat.say(name, message, language), delay, undefined, singleUse);
		}
		else {
			Dom.chat.insertSequence(message);
		}
	}

	// function to be carried out during Game.render(), after image render
	// note that this is overwritten by Hero
	postRenderFunction () {
		// show health bar and character name above head (if character is not dead)
		if (!this.isCorpse) {
			Game.drawCharacterInformation(Game.ctx, this);
		}
		return true; // tell render to render the rest of the object normally
	}

	// update x, y, screenX and screenY of foot hitbox
	updateFootHitbox () {
		this.footHitbox.x = this.x;
		this.footHitbox.y = this.y + this.height/2 - this.footHitbox.height/2;
	}

	// collide with solid tiles
	// returns true/false depending on whether it collided or not
	// dirx and diry should be the amount moved in x and y directions (before multiplied by delta), i.e. dirx*speed
	collide (xMovement, yMovement, delta) {
		let row, col;

		let collision = false; // whether a collision has occured

		// whether a movement is possible in x/y direction without walking into whatever is being collided with
		// (only used if collisiion is actually true!)
		let possibleMovements = {
			x: true,
			y: true,
		}

		// update foot hitbox position
		this.updateFootHitbox();

		// check collisions with tiles
		let touchingSolidTiles = this.footHitbox.getTouchingSolidTiles();
		if (touchingSolidTiles.length > 0) {
			collision = true;
			for (let i = 0; i < touchingSolidTiles.length; i++) {
				// find which directions it is touching the collision in
				let colliding = this.footHitbox.isColliding(touchingSolidTiles[i], delta*xMovement, delta*yMovement);
				if (colliding.x) {
					possibleMovements.x = false;
				}
				if (colliding.y) {
					possibleMovements.y = false;
				}
			}
		}

		// check collision with collisions - invisible entities that cannot be passed
		for (let i = 0; i < Game.collisions.length; i++) {
			// check collision condition is true
			if (typeof Game.collisions[i].collisionCondition === "undefined" || Game.collisions[i].collisionCondition()) {
				// check if the player's feet are touching the collision
				if (this.footHitbox.isTouching(Game.collisions[i])) {
					collision = true;

					// find which directions it is touching the collision in
					let colliding = this.footHitbox.isColliding(Game.collisions[i], delta*xMovement, delta*yMovement);
					if (colliding.x) {
						possibleMovements.x = false;
					}
					if (colliding.y) {
						possibleMovements.y = false;
					}
				}
			}
		}

		if (!collision) {
			// do not carry out the following code if there is no collision
			return collision;
		}

		// undo movement
		if (Math.abs(xMovement) > 0) {
			this.x -= delta * xMovement;
		}
		if (Math.abs(yMovement) > 0) {
			this.y -= delta * yMovement;
		}

		// try moving in a different direction instead
		if (possibleMovements.x && xMovement !== 0) {
			// can still move in x axis - move completely in direction that was being moved (dirx value is changed to 1 or -1)
			this.x += this.speed * delta * (xMovement/Math.abs(xMovement));
		}
		else if (possibleMovements.y && yMovement !== 0) {
			// can still move in y axis - move completely in direction that was being moved (diry value is changed to 1 or -1)
			this.y += this.speed * delta * (yMovement/Math.abs(yMovement));
		}
		// neither of these might be possible, in which case the character will not move at all

		// see if character is stuck, if they are then unstuck them
		this.updateFootHitbox();
		this.unstuck();

		return collision;
	}

	// see if character is stuck on collisions, if they are then unstuck them
	// called after collide() (i.e. after any new collisons have been dealt with)
	unstuck () {
		if (this.isStuck()) {
			let collision = true;
			let moveRadius = 30; // radius in which the hero will be moved around to try to find a place it is not colliding with anything (find the closest location)
			while (collision) {
				// horizontal and vertical movement

				this.x += moveRadius;
				this.updateFootHitbox();
				if (!this.isStuck()) {
					collision = false;
					break;
				}

				this.x -= moveRadius*2;
				this.updateFootHitbox();
				if (!this.isStuck()) {
					collision = false;
					break;
				}

				this.x += moveRadius;
				this.y += moveRadius;
				this.updateFootHitbox();
				if (!this.isStuck()) {
					collision = false;
					break;
				}

				this.y -= moveRadius*2;
				this.updateFootHitbox();
				if (!this.isStuck()) {
					collision = false;
					break;
				}

				// diagonal movement

				this.y += moveRadius * 1.71;
				this.x += moveRadius * 0.71;
				this.updateFootHitbox();
				if (!this.isStuck()) {
					collision = false;
					break;
				}

				this.x -= moveRadius * 1.42;
				this.updateFootHitbox();
				if (!this.isStuck()) {
					collision = false;
					break;
				}

				this.y -= moveRadius * 1.42;
				this.updateFootHitbox();
				if (!this.isStuck()) {
					collision = false;
					break;
				}

				this.x += moveRadius * 1.42;
				this.updateFootHitbox();
				if (!this.isStuck()) {
					collision = false;
					break;
				}

				// no luck .. let's reset position and try again with a larger "radius"
				this.x -= moveRadius * 0.71;
				this.y += moveRadius * 0.71;

				if (moveRadius > 1000) {
					// stop an infinite loop, just in case
					break;
				}
				else {
					moveRadius += 60;
				}
			}
		}
		else {
			return false;
		}
	}

	// remove status effect from the specified index of this.statusEffects
	// reason is a string specifying the reason the effect was removed
	removeStatusEffect (index, reason) {
		let statusEffect = this.statusEffects[index];

		// clear tick
		if (statusEffect.tickTimeout !== undefined) {
			Game.clearTimeout(statusEffect.tickTimeout);
		}

		// call onExpire
		// only called if the status effect has run out of time, or if onExpire is called on any remove
		if (statusEffect.onExpire !== undefined && (reason==="time" || statusEffect.callExpireOnRemove)) {
			statusEffect.onExpire(this, ...statusEffect.onExpireParams);
		}

		// status effect display if status effect is hidden
		if (statusEffect.hidden) {
			this.numberOfHiddenStatusEffects--;
		}

		// hide infobar if there was one
		if (statusEffect.infoBarText !== undefined && Game.minigameInProgress === undefined) {
			Dom.infoBar.page("");
		}

		// remove it
		this.statusEffects.splice(index, 1);

		// refresh canvas status effects if the status effect was applied to player
		if (this.constructor.name === "Hero") {
			this.updateStatusEffects();
		}
	}

	// clear all status effects and their tick timeouts
	// called upon death, alongside removing all of the status effects themselves
	removeAllStatusEffects () {
		while (this.statusEffects.length > 0) {
			// cannot be set to [] for Game.hero, otherwise it no longer mirrors player
			this.removeStatusEffect(0, "all");
		}
	}

	// take damage
	// damagedByHero is true or false depending on whether it was damaged by the hero
	// successiveExplosions is for thermal runaway achivement
	takeDamage (damage, damagedByHero, successiveExplosions) {
		this.healthBeforeDamage = this.health; // currently unused, updated after each damage
		this.damageProportionTaken = damage / this.health;

		if (!Game.creativeMode) {
			this.health -= damage;
			this.damageTaken += damage;
		}

		// used to decide if hero should get xp etc
		if (damagedByHero) {
			this.damageTakenFromHero = true;
		}

		// check for death
		if (this !== Game.hero) {
			// not player (assumed it is killed by player - TBD)
			// TBD use hostility to check if it is killed by player
			if (this.health <= 0 && !this.isCorpse) { // check it is dead and not already a corpse

				// death

				let inMinigame = Game.minigameInProgress !== undefined && Game.minigameInProgress.playing; // no xp, achievement or quest progress, etc. whilst in minigame

				// xp
				if (!inMinigame && this.xpGiven !== undefined && this.damageTakenFromHero) {
					let xpReceived = (this.xpGiven / Player.level);
					Game.getXP(xpReceived);
				}

				// wipe status effects and their tick timeouts
				this.removeAllStatusEffects();

				// remove channelling
				this.removeChannelling("death");

				// on kill function (of weapon)
				if (Player.inventory.weapon.onKill !== undefined && !inMinigame && this.damageTakenFromHero) {
					Player.inventory.weapon.onKill();
				}

				// reset aggro
				if (typeof this.attackTargets !== "undefined") {
					for (let i = 0; i < this.attackTargets.length; i++) {
						this.attackTargets[i].aggro = 0;
					}
				}

				// on death function (of enemy)
				// might also contain quest progress
				if (this.onDeath !== undefined && !inMinigame && this.damageTakenFromHero) {
					this.onDeath();
				}
				if (this.onDeathAdditional !== undefined && !inMinigame) {
					// onDeathAdditional doesn't require damage to be dealt by hero, but onDeath does!!!
					this.onDeathAdditional(); // so that we can have an ondeath from speciestemplate and from areadata
				}

				if (this.hostility === "boss" && !inMinigame) {
					// set boss date killed
					Player.bossesKilled[this.bossKilledVariable] = GetFullDate();
				}


				this.footHitbox.drawHitbox = false; // don't draw foot hitbox whilst dead

				if (this.corpseOnDeath) {
					this.isCorpse = true;

					// change image to deathImage (if one exists for this character)
					if (this.deathImage.image !== undefined) {
						this.changeImage(this.deathImage.image, this.deathImage.crop, this.deathImage.width, this.deathImage.height);
					}

					// loot
					if (this.lootTable !== undefined) {
						this.generateLoot(this.lootTable);
					}

					// corpse disappears in this.stats.lootTime ms
					Game.setTimeout(function () {
						this.isCorpse = false;

						if (!this.respawnOnDeath) {
							Game.removeObject(this.id, this.type);
						}

						// call Dom.quests.active if it is needed for a quest regarding this enemy
						if (this.name === "The Tattered Knight") {
							Dom.quests.active();
						}
					}.bind(this), this.stats.lootTime);

					// tutorial
					Dom.instructions.page(15);
				}

				if (this.respawnOnDeath) {
					this.respawning = true;

					// respawn in this.stats.respawnTime ms (if it is not a boss)
					if (this.hostility !== "boss") {
						Game.setTimeout(function () {
							this.respawn();
						}.bind(this), this.stats.respawnTime);
					}
				}
				else {
					// remove the object if it is not a corpse upon death
					if (!this.isCorpse) {
						Game.removeObject(this.id, this.type);
					}
				}

				// exploding
				if (this.damageTakenFromHero && Game.hero.stats.exploding > 0) {
					Game.setTimeout(function (x, y, successiveExplosions) {
						successiveExplosions = Increment(successiveExplosions); // for achievement
						if (IsNullLike(User.progress.successiveExplosions)) {
							User.progress.successiveExplosions = 0;
						}
						User.progress.successiveExplosions = Math.max(User.progress.successiveExplosions, successiveExplosions);
						Dom.checkProgress();

						Game.projectiles.push(new Projectile({ // explosion projectile
							map: map,
							x: x,
							y: y,
							targets: [Game.damageableByPlayer],
							rotate: 0,
							image: "explosion",
							type: "projectiles",
							stats: {
								damage: Game.hero.stats.damage/2,
								flaming: 1,
								damageAllHit: true,
							},
							// aesthetics
							stayOnScreen: 500,
							transparency: 0.8,

							successiveExplosions: successiveExplosions,
						}));
						let shotProjectile = Game.projectiles[Game.projectiles.length-1];
						// remove in 0.5s
						shotProjectile.startRemoveTimeout();
					}, 300, [this.x, this.y, successiveExplosions]);
				}

				//
				// quest progress
				//

				// enemies killed achievement
				if ((this.hostility === "hostile" || this.hostility === "boss") && !inMinigame && this.damageTakenFromHero && !this.critter) {
					User.progress.enemies = Increment(User.progress.enemies);
				}

				if (this.hostility === "boss" && Game.hero.health < 2) {
					User.progress.closeOne = true;
				}

				// weapon chat message (some weapons have a chat message for when they kill something!)
				if (Player.inventory.weapon.chat !== undefined && Player.inventory.weapon.chat.kill !== undefined && this.damageTakenFromHero) {
					Dom.chat.insert(Dom.chat.say(Player.inventory.weapon.name, Player.inventory.weapon.chat.kill));
				}

				// death text
				if (typeof this.chat.death !== "undefined") {
					this.say(this.chat.death, 0, true);
				}

				Dom.checkProgress();
			}
		}
		// player
		else {
			this.removeChannelling("damage"); // might not cancel the channel.. whether it does or not depends on this function

			if (this.health <= 0 && !this.respawning) { // check it is dead and not already respawning

				if (!Game.minigameInProgress || !Game.minigameInProgress.playing) {
					// not playing a minigame

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

					Player.fatiguedXP = ineffectiveAmount;

					if (Player.level < MaxLevel) {
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
					}
					else {
						// bit different for max level ...
						Game.hero.statusEffects.push(new statusEffect({
							title: "XP Fatigue",
							effect: "You recently died. Since you are max level, you move 30% slower until your XP debt of " + ineffectiveAmount + " is paid off.",
							info: {
								stacks: stacks,
								ineffectiveAmount: ineffectiveAmount,
							},
							image: "xpDown",
						}));
					}

					Game.hero.updateStatusEffects();

					// save progress
					Game.saveProgress("auto");
				}
				else {
					// playing a minigame
					Game.statusEffects.generic({
						effectTitle: "Respawning",
						effectDescription: "You can't die in a minigame",
						target: this,
						time: 5,
						onExpire: "respawnHero",
						callExpireOnRemove: true,
						imageName: "stunned"
					});

					this.isCorpse = true;
					this.respawning = true;
				}
			}
		}
	}

	// respawn after death
	respawn () {
		if (this.area === Game.areaName) {
			this.loot = null;

			// remove corpse image
			this.resetImage();

			this.footHitbox.drawHitbox = undefined; // may draw foot hitbox again

			this.hasBeenSiphoned = false; // for quests

			if (typeof this.spawnLocations !== "undefined") {
				let respawnLocation = this.positionFromSpawnLocations(this.spawnLocations);
				this.x = respawnLocation[0];
				this.y = respawnLocation[1];
			}
			else {
				this.x = this.spawnX;
				this.y = this.spawnY;
			}

			this.health = this.stats.maxHealth;
			this.damageTaken = 0;

			this.speed = this.stats.walkSpeed || 0;

			this.respawning = false;
		}
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
	// baseSpeed = true stops the speed being changed from status effects and slow tiles (e.g. for displacement) - so just sets speed to walk speed
	// game = true stops equipment and potions from changing walk speed (other than special status effects where info.worksForGames = true)
	setSpeed (baseSpeed, game) {
		let footY = this.y + this.height/2 - this.footHitbox.height/2; // y position of feet

		// set walk and swim speed values
		let walkSpeed, swimSpeed, iceSpeed;
		if (game) {
			// default values (ignore equipment)
			walkSpeed = 180;
			swimSpeed = 60;
			iceSpeed = 170;
		}
		else {
			// stat values
			walkSpeed = this.stats.walkSpeed;
			swimSpeed = this.stats.swimSpeed;
			iceSpeed = this.stats.iceSpeed;
		}

		// test for walkable objects (i.e. platforms)
		let walkableObject;
		for (let i = 0; i < Game.walkableObjects.length; i++) {
			if (this.footHitbox.isTouching(Game.walkableObjects[i])) {
				walkableObject = true;
			}
		}

		// test for slow tiles (e.g: water, mud)
		let slowTile = this.map.isSlowTileAtXY(this.x, footY);

		let waterWalking = this.hasStatusEffectType("waterWalking"); // can walk on water and mud

		if (slowTile === null || walkableObject || baseSpeed) { // normal speed
			this.speed = walkSpeed;
			// remove swimming/mud/ice/path status effect
			Game.removeTileStatusEffects(this);
		}

		else if (slowTile === "ice") { // on ice tile
			this.speed = iceSpeed;

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
			this.speed = walkSpeed + 30;

			Game.removeTileStatusEffects(this, "On a path"); // remove all status effects from other tiles
			if (!this.hasStatusEffect("On a path")) { // give status effect if the player doesn't already have it
				Game.statusEffects.generic({
					target: this,
					effectTitle: "On a path",
					effectDescription: "+30 walk speed",
					imageName: "speedUp",
					type: "path",
					effectStack: "noStack",
				});
			}
		}

		else if (slowTile === "water") { // in water tile
			Game.removeTileStatusEffects(this, "Swimming"); // remove all status effects from other tiles

			if (!waterWalking) {
				this.speed = swimSpeed;
				if (!this.hasStatusEffect("Swimming")) { // give status effect if the player doesn't already have it
					// remove fire status effect
					for (let i = 0; i < this.statusEffects.length; i++) {
						if (this.statusEffects[i].title.substring(0, 4) === "Fire") {
							this.removeStatusEffect(i, "environment");
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
		}

		else if (slowTile === "mud") { // in mud tile
			Game.removeTileStatusEffects(this, "Stuck in the mud"); // remove all status effects from other tiles

			if (!waterWalking) {
				// currently mud goes the same speed as in a water tile
				this.speed = swimSpeed;

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
		}

		else if (slowTile === "tallGrass") { // in tall grass, i.e. eaglecrest plains
			this.speed = walkSpeed - 40;

			Game.removeTileStatusEffects(this, "In the tall grass"); // remove all status effects from other tiles
			if (!this.hasStatusEffect("In the tall grass")) { // give status effect if the player doesn't already have it
				Game.statusEffects.generic({
					target: this,
					effectTitle: "In the tall grass",
					effectDescription: "-40 walk speed",
					imageName: "speedDown",
					type: "tallGrass",
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
					// check a minigame is not active OR the status effect works for minigames
					if (!game || statusEffect.info.worksForGames) {
						// status effect is in percentage
						this.speed += oldSpeed * (statusEffect.info.speedIncrease / 100);
					}
				}
			}

			// xp fatigue at max level
			if (Player.level === MaxLevel && Player.fatiguedXP > 0 && this.constructor.name === "Hero") {
				// 30% less speed
				this.speed -= oldSpeed * 0.3;
			}

			// frostaura (for enemie only) - should be done last !
			//if ((this.hostility === "hostile" || this.hostility === "boss") && // used to check hostility but now works on villagers as well!
			if (Game.hero.stats.frostaura === true && Game.distance(this, Game.hero) < Game.hero.stats.range && this.constructor.name !== "Hero") {
				// range of frostaura is currently same as hero's range
				this.speed /= 2; // currently applied at end, TBD change?
			}

			// if channelling but can move during this channelling (i.e. player attacks), then speed might be reduced...
			if (this.channelling !== false) {
				this.speed *= this.stats.channellingMoveSpeed / 100; // channellingMoveSpeed is a percentage

				if (this.channelling === "projectile") {
					// move the projectile with the player

					// get projectile
					let shotProjectile = Game.projectiles[Game.searchFor(this.channellingProjectileId, Game.projectiles)];

					shotProjectile.x = this.x;
					shotProjectile.y = this.y
				}
			}
		}
	}

	// whee! make the character fly away from their current point
	// velocity = pixels thrown per second
	// time = time in SECONDS
	// direction = in RADIANS
	// must be called every tick (often called by stun code in move)
	// velocity, time, and direction ONLY need to be passed in for the first time this function is called
	// can go over walls should be true if they can move over unmoveable tiles
	displace (delta, velocity, time, direction, canGoOverWalls) {
		if (this.isBeingDisplaced === undefined) { // not being displaced yeet
			// init displacement
			this.isBeingDisplaced = {
				time: time,
				velocity: velocity,
				direction: direction,
				elapsed: 0,
				canGoOverWalls: canGoOverWalls,
			}; // time the player has been displaced for

			// (for testing) - let user know if a character is being displaced that already has a set z position
			// this is becuse the set z position will be removed by setExpandZ (and not returned after the displacement), which should never happen
			if (this.z !== 0) {
				console.error("The z position of a character is being changed by displacement (when it has already been set before by something else). This shouldn't happen, please tell Jake.", this)
			}

			// expand by 0.01
			this.setExpandZ(1.01);

			// stunned status effect
			Game.statusEffects.stun({
				target: this,
				time: time,
				effectTitle: "Displacement",
				effectDescription: "Being displaced",
				onExpire: "removeDisplacement",
				callExpireOnRemove: true,
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

			this.setExpandZ(newExpand);

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
	cleanse (value, key) {
		for (let i = 0; i < this.statusEffects.length; i++) {
			if (this.statusEffects[i][key] === value) {
				this.removeStatusEffect(i, "cleanse");
				i--; // status effect has been removed so move back index
			}
		}
	}

	// rotation image names saved in character
	// these are the key names of the images in loader
	// not all of these need to exist - the best one will be picked (see below in this function)
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

	// set an image due to a change in movement direction
	// only called by setRotationImage
	// therefore does not change rotationImageVariables
	setImageMovement (imageName, crop, width, height) {
		this.setImage(imageName, crop, width, height, false);
	}

	// set image based on direction of movement if there are multiple rotation images
	// note this system is not used for player, since their images are in tilesets instead (however it would be used if they were hexed etc)
	setRotationImage (dirx, diry) {
		if (this.rotationImageChange !== "none") {
			if (this.rotationImageChange === "upDown" || // only up down images exist for this NPC
			(this.rotationImageChange === "all" && // OR all images exist AND...
			Math.abs(diry) > Math.abs(dirx))) { //...there is more up down movement than left right
				// up down movement
				if (diry < 0) {
					// up movement
					this.setImageMovement(this.rotationImages.up, this.crop, this.width, this.height);
					this.direction = 1;
				}
				else {
					// down movement
					this.setImageMovement(this.rotationImages.down, this.crop, this.width, this.height);
					this.direction = 3;
				}
			}
			else {
				// left right movement
				if (dirx > 0) {
					// right movement
					this.setImageMovement(this.rotationImages.right, this.crop, this.width, this.height);
					this.direction = 4;
				}
				else {
					// left movement
					this.setImageMovement(this.rotationImages.left, this.crop, this.width, this.height);
					this.direction = 2;
				}
			}
		}
	}

	// currently just works for hero I think - need to move moveMounted to character
	getOnMount (object) {
		this.mounted = true;
		this.mount = object;
		this.moveMounted(0,0,0); // to update screen position etc
	}

	getOffMount () {
		this.mounted = false;
		this.mount = undefined;
	}

	// get off mount with displacement in the direction moving!
	throwOffMount () {
		// displace!
		this.displace(0, Math.abs(this.mount.velocity), 1, Game.bearing({x:0, y:0}, {x: this.mount.speedX, y: this.mount.speedY}));
		// take damage! (after the 1s displacement)
		let damageQuotient = (this.mount.velocity - this.mount.throwOffVelocity) / (this.mount.maxVelocity - this.mount.throwOffVelocity)
		Game.setTimeout(this.takeDamage.bind(this), 1000, 10 + 10*damageQuotient);

		this.getOffMount();
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
		this.stats.rangeMultiplier = properties.stats.rangeMultiplier || 100; // decimal multiplied by range - note this only actually works for player currently! (in equipmentupdate)
		this.stats.reloadTime = properties.stats.reloadTime; // time in ms to attack again

		// optional stats (projectile stats are set below ..)
		// using || defaults to second value if first is undefined, 0 or ""
		this.stats.damagePercentage = properties.stats.damagePercentage || 0; // bonus damage percentage
		this.stats.criticalChance = properties.stats.criticalChance || 0;
		this.stats.flaming = properties.stats.flaming || 0;
		this.stats.poisonX = properties.stats.poisonX || 0;
		this.stats.poisonY = properties.stats.poisonY || 0;
		this.stats.poisonStrength = properties.stats.poisonStrength || 100; // multiplier for poison
		this.stats.slowAmount = properties.stats.slowAmount || 0;
		this.stats.slowTime = properties.stats.slowTime || 0;
		this.stats.slowEffectTitle = properties.stats.slowEffectTitle; // string value - the title used for slow status effects
		this.stats.stun = properties.stats.stun || 0;
		this.stats.rooting = properties.stats.rooting || 0;
		this.stats.knockback = properties.stats.knockback || 0;
		this.stats.lifesteal = properties.stats.lifesteal || 0;
		this.stats.hex = properties.stats.hex || 0;
		this.stats.numberOfProjectiles = properties.stats.numberOfProjectiles || 1; // archer only
		// mana
		this.stats.maxMana = properties.stats.maxMana;
		this.stats.manaRegen = properties.stats.manaRegen;
		this.mana = properties.mana || properties.stats.maxMana;
		// functions
		if (properties.stats.onAttack !== undefined) {
			// bind can only be called if it is not undefined
			this.stats.onAttack = properties.stats.onAttack.bind(this); // bound to this
		}
		this.updateStats = properties.updateStats; // only works for enemies ATM

		// base attack
		this.projectileType = properties.projectileType; // "snake" or "travelling" or "instant" (automatically determined from range but can be specified)
		if (typeof this.projectileType === "undefined") {
			if (this.stats.range < 100) {
				// melee range so assumed instant projectile
				this.projectileType = "instant";
			}
			else {
				this.projectileType = "travelling";
			}
		}
		// projectile stats
		this.stats.projectileRange = properties.stats.projectileRange; // for travelling projectiles - how far it travels before being removed
		this.stats.projectileRemoveAfterRest = properties.stats.projectileRemoveAfterRest; // for travelling projectiles - in SECONDS - projectile is removed after being at rest (because of accel for example) for this period of time
		this.stats.projectileSpeed = properties.stats.projectileSpeed; // for travelling projectiles
		this.stats.projectileAcceleration = properties.stats.projectileAcceleration;
		this.stats.variance = properties.stats.variance || 0; // for travelling projectiles; angle variance in DEGREES (plus minus this value)
		this.stats.positionVariance = properties.stats.positionVariance || 0; // for instant projectiles (should probably depricate, not really much reason for this to be used)
		if (typeof properties.stats.positionVariance !== "undefined") {
			//console.error("positionVariance is being phased out, but was set for " + this.name +" , please tell Jake !")
		}
		this.stats.projectileStopMovingOnDamage = properties.stats.projectileStopMovingOnDamage;
		this.stats.pierce = properties.stats.pierce; // if infinite, use damageAllHit instead
		this.stats.damageAllHit = properties.stats.damageAllHit; // if projectile damages all things hit
		// true by default
		if (typeof this.stats.damageAllHit === "undefined") {
			this.stats.damageAllHit = true;
		}


		// information about projectile (how it looks)
		// only supported for enemies - should be updated to work for player as well (TBD TBD!!!)
		this.projectile = {};
		this.projectile.image = properties.projectile.image;
		// not necessary (can be left as undefined to just fit to projectile image size)
		this.projectile.width = properties.projectile.width;
		this.projectile.height = properties.projectile.height;
		// not necessary (defaults to x: 0 and y: 0 later on if it is undefined)
		this.projectile.adjust = properties.projectile.adjust || {};

		this.canAttack = true; // check attack is not reloading


		// spells
		this.spells = properties.spells || [];
		if (this.constructor.name !== "Hero") { // hero spells are saved as an object instead (not sure why???)
			this.spells = this.spells.map(a => Object.assign({}, a)); // deep copy objects in array
			for (let i = 0; i < this.spells.length; i++) {
				if (this.spells[i].interval !== undefined) {
					this.spells[i].ready = false; // cannot be used until interval has finished (just for ai, not player)
					// set initial cooldown
					let initialCooldown = this.spells[i].interval; // default initial cooldown
					if (typeof this.spells[i].initialCooldown !== "undefined") {
						initialCooldown = this.spells[i].initialCooldown;
					}
					Game.setTimeout(function (i) {
						this.spells[i].ready = true;
					}.bind(this), initialCooldown, [i]);
				}
				else {
					this.spells[i].ready = true;
				}
			}
		}

		this.spellCasts = 0; // total number of spell casts


		if (properties.addToObjectArrays !== false) {
			Game.allAttackers.push(this); // array for current area only
		}
	}

	// a simpler channel for spells
	channelSpell (spellId, spellTier, parameters) {
		// add implicit parameters
		parameters.caster = this;
		parameters.tier = spellTier;
		// because parameters is always an object for spells, it is turned into an array for the function call
		// Game.castSpell calls the function and deducts mana and sets cooldown
		if (typeof Spells[spellId].channelTime === "undefined" || Spells[spellId].channelTime[spellTier] === 0) {
			// no channel required
			Game.castSpell(spellId, parameters);
		}
		else {
			this.channel(Game.castSpell, [spellId, parameters], Spells[spellId].channelTime[spellTier], Spells[spellId].name);
		}
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
class Particle extends Entity { // tbd should extend shape ?
	constructor(properties) {
		super(properties);

		// variance
		if (typeof properties.variance !== "undefined") {
			this.x += Random(-properties.variance, properties.variance);
			this.y += Random(-properties.variance, properties.variance);
		}

		if (properties.colour.constructor === Array) {
			// pick a random colour
			this.colour = properties.colour[Random(0, properties.colour.length-1)];
		}
		else {
			this.colour = properties.colour;
		}

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
		properties.type = "particles";
		let particle = new Particle(properties);
		this.particles.push(particle);
		// set its removal time
		this.objectRemoveTimeouts.push(Game.setTimeout(function (id) {
			// remove the same particle (particle of the same id)
			Game.removeObject(id, "particles");
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
	// +1 or +3 are because of padding in spritesheet (see comment at top of skindata.js)
	updateRotation () {
		if (this.direction === 1) {
			this.crop = {
				x: 1,
				y: this.baseHeight+3,
				width: this.baseWidth,
				height: this.baseHeight
			};
		}

		else if (this.direction === 2) {
			this.crop = {
				x: this.baseWidth+3,
				y: this.baseHeight+3,
				width: this.baseWidth,
				height: this.baseHeight
			};
		}

		else if (this.direction === 3) {
			this.crop = {
				x: 1,
				y: 1,
				width: this.baseWidth,
				height: this.baseHeight
			};
		}

		else if (this.direction === 4) {
			this.crop = {
				x: this.baseWidth+3,
				y: 1,
				width: this.baseWidth,
				height: this.baseHeight
			};
		}
	}
}

// player of the game - similar to Player global variable in saveData.js, but only contains necessary information (also has some cool functions)
// JUST the player - not multiplayer characters!
class Hero extends Attacker {
	constructor (properties) {
		super(properties);

		// perhaps condense channelling with enemy's canAttack?
		this.channelTime = 0;

		// status effects override - mirror savedata.js' versions
		this.statusEffects = Player.statusEffects; // tbd - maybe a similar system should be used for spells?

		// stats
		this.stats.looting = properties.stats.looting || 100;
		this.stats.stealing = properties.stats.stealing || 0;

		this.stats.baseDomRange = properties.stats.baseDomRange || 240; // distance from an entity that a DOM menu may be opened
		this.stats.interactRange = properties.stats.interactRange || 100; // percentage - DOM range is always base dom range * interactRange/100
		this.stats.domRange = this.stats.baseDomRange * this.stats.interactRange /100;

		// optional stats
		// using || defaults to second value if first is undefined, 0 or ""
		this.stats.focusSpeed = properties.stats.focusSpeed || 0; // archer only
		this.stats.maxDamage = properties.stats.maxDamage; // mage only
		this.stats.xpBonus = properties.stats.xpBonus || 0; // perentage

		// class specific

		this.stats.arcaneAura = properties.stats.arcaneAura || false;
		// start arcaneAura interval if one is active (from the mage spell)
		if (this.stats.arcaneAura) {
			// spell object in player that corresponds to this spell (for finding tier)
			let spellObj = this.spells.find(spellObj => spellObj.id === 3);
			this.auraInterval = Game.setInterval(Spells[3].tickFunc, 100, {tier: spellObj.tier, caster: this});
		}

		this.stats.meleeRange = AttackConstants.sword.meleeRange; // attack constants used because it's not something items change currently

		// fishing stats
		this.stats.fishingSkill = properties.stats.fishingSkill || 0;

		// where the player respawns when they die (set at any major city)
		this.checkpoint = properties.checkpoint || "tutorial";

		// temporary teleport teleport positions
		this.oldPosition = properties.oldPosition; // might be undefined
	}

	// move on a mount
	moveMounted (delta, dirx, diry) {
		this.removeChannelling("move"); // stuff cannot be channelled whilst moving

		if (typeof this.mount.move !== "undefined") {
			this.mount.move(delta, dirx, diry);

			this.direction = this.mount.direction;
			this.updateRotation();
		}
		if (this.mounted) { // check still mounted! might have been hit off the mount..
			if (typeof this.mount.rideAdjustX === "undefined") {
				this.mount.rideAdjustX = 0;
			}
			else if (typeof this.mount.rideAdjustY === "undefined") {
				this.mount.rideAdjustY = 0;
			}
			this.x = this.mount.x + this.mount.rideAdjustX;
			this.y = this.mount.y + this.mount.rideAdjustY;
		}
		else {
			this.move(delta, 0, 0);
		}
	}

	move (delta, dirx, diry) { // called when hero being displaced, moving towards something, or player is moving hero

		this.removeChannelling("move"); // stuff cannot be channelled whilst moving

		let baseSpeed = false; // whether speed should be altered by status effects and slow tiles (false means do alter)
		// if baseSpeed is a number instead, the speed is set to that without setSpeed being called
		// this is only changed by displacement

		let walked = false; // set to true if the player has walked along the ground (for item onWalk functions)

		let gameSpeed = false; // whether speed should be altered by potions and equipment (but slow tiles is fine)
		if (Game.minigameInProgress !== undefined && Game.minigameInProgress.game === "tag") {
			// limit speed to just changed by tiles
			gameSpeed = true;
		}

		// wind
		if (Game.wind !== undefined && !this.stats.windShield) {
			walked = true;
			this.x += Game.wind.movex * delta;
			this.y += Game.wind.movey * delta;
		}

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
		else if (this.hasStatusEffectType("stun") || this.isCorpse || this.hasStatusEffectType("root")) {
			// player cannot move (any other stun effect)
		}
		else if (this.moveTowards !== undefined) {
			walked = true;
			// move towards a particular point
			// player cannot control themselves
			// just set direction for direction image of player
			let direction = Game.bearing(this, this.moveTowards);
			dirx = Math.cos(direction);
			diry = Math.sin(direction);

			// now the below is all done in general update function for all entities
			/*// movement speed
			if (!gameSpeed) {
				this.speed = this.stats.walkSpeed;
			}
			else {
				this.speed = 180;
			}

			// speed scalar due to moveTowards (decimal value)
			if (this.moveTowards.speedScalar !== undefined) {
				this.speed *= this.moveTowards.speedScalar;
			}

			this.x += dirx * this.speed * delta;
			this.y += diry * this.speed * delta;

			if (Math.round(this.x) < this.moveTowards.x + 2 && Math.round(this.x) > this.moveTowards.x - 2
			&& Math.round(this.y) < this.moveTowards.y + 2 && Math.round(this.y) > this.moveTowards.y - 2) {
				// destination reached

				// call move towards finish function
				if (typeof this.moveTowards.moveTowardsFinishFunction !== "undefined") {
					this.moveTowards.moveTowardsFinishFunction();
				}

				// remove moveTowards
				this.moveTowards = undefined;
			}*/
		}
		else {
			walked = true;
			// move normally!
			this.x += dirx * this.speed * delta;
			this.y += diry * this.speed * delta;

			// tutorial (from beginning of game)
			if (Player.tutorialProgress === 0 && typeof Game.tutorialTimeout === "undefined") {
				Game.tutorialTimeout === Game.setTimeout(Dom.instructions.page, 2000, 1);
			}
		}

		// check if we walked into a non-walkable tile
		if (this.moveTowards === undefined && (this.isBeingDisplaced === undefined || this.isBeingDisplaced.canGoOverWalls !== true) && !Game.creativeMode) { // hero should only collide if controlled by player
			this.collide(dirx * this.speed, diry * this.speed, delta);
		}
		else {
			// no need to check collision!
			this.updateFootHitbox();
		}

		// onWalk item functions
		if (walked) {
			for (let i = 0; i < Game.equipmentKeys.length; i++) {
				let inventoryItem = Player.inventory[Game.equipmentKeys[i]];
				if (typeof inventoryItem.id !== "undefined") {
					// something in that inventory slot
					// we want to refer to the item in itemdata, since functions aren't saved over after save
					let item = Items[inventoryItem.type][inventoryItem.id];
					if (typeof item.onWalk !== "undefined") {
						item.onWalk();
					}
				}
			}
		}


		// set walkspeed for next move() function call
		// true = just set to base speed
		if (baseSpeed === false || baseSpeed === true) {
			this.setSpeed(baseSpeed, gameSpeed);
		}
		else {
			this.speed = baseSpeed;
		}

		// clamp values
		let maxX = Game.camera.maxX + Game.camera.width;
		let maxY = Game.camera.maxY + Game.camera.height;
		this.x = Math.max(-map.origin.x, Math.min(this.x, maxX));
		this.y = Math.max(-map.origin.y, Math.min(this.y, maxY));

		// set direction based on dirx and diry
		if (Math.abs(dirx) > Math.abs(diry)) {
			if (dirx > 0) {
				this.direction = 4;
			}
			else {
				this.direction = 2;
			}
		}
		else {
			if (diry > 0) {
				this.direction = 3;
			}
			else {
				this.direction = 1;
			}
		}
		this.updateRotation();
	}

	// start channeling basic attack
	startAttack (e) {
		let mouseX = Game.camera.x + e.clientX - Game.viewportOffsetX;
		let mouseY = Game.camera.y + e.clientY - Game.viewportOffsetY;

		if (this.canAttack && Player.inventory.weapon.name !== "" && !Player.inventory.weapon.cannotAttack && !this.hasStatusEffectType("stun")) { // checks the player has a weapon and is not currently reloading and is not currently stunned
			// Player.inventory.weapon.cannotAttack is set to true when the projectile image is being loaded (e.g: weapon with special projectile is equipped/unequipped)
			if (!CheckRightClick(e)) {
				// left-click (normal) attack

				// position of projectile
				let distanceToMouse = Game.distance({x: mouseX, y: mouseY,}, this);

				let weaponType = Game.getAttackType();

				if (weaponType === "staff" || weaponType === "bow" || weaponType === "sword") {
					// player is using conventional weapon

					this.canAttack = false;

					this.removeChannelling("attack"); // remove anything that was previously channelling

					this.setChannelling("projectile", undefined, undefined, {cancelChannelOnMove: false});

					let projectileDirection = Game.bearing(this, {x: mouseX, y: mouseY}); // movement

					if (weaponType === "staff" || weaponType === "bow" || (weaponType === "sword" && distanceToMouse >= this.stats.meleeRange)) {
						// moving projectile

						this.channellingProjectileId = Game.nextEntityId;

						let hitboxSize = 0;
						let projectileName = "";
						let knightChargeAttack = false;
						let imageName = "";
						if (weaponType === "staff") {
							hitboxSize = 23;
							projectileName = "Fireball Attack";
							imageName = Game.heroProjectileName;
						}
						else if (weaponType === "bow") {
							hitboxSize = 10;
							projectileName = "Arrow Attack";
							imageName = Game.heroProjectileName;
						}
						else if (weaponType === "sword") {
							hitboxSize = 10;
							projectileName = "Charge Attack";
							knightChargeAttack = true;
							imageName = "melee";
						}

						Game.projectiles.push(new Projectile({ // HERO projectile
							map: map,
							x: Game.hero.x,
							y: Game.hero.y,
							attacker: this,
							projectileStats: this,
							targets: [Game.damageableByPlayer],
							adjust: {
								// manually adjust position (programmed for each projectile in skindata/itemdata)
								x: Game.heroProjectileAdjust.x,
								y: Game.heroProjectileAdjust.y,
								towards: {x: this.x, y: this.y},
							},
							hitbox: {
								x: Game.hero.x,
								y: Game.hero.y,
								width: hitboxSize,
								height: hitboxSize,
							},
							image: imageName,
							name: projectileName,
							beingChannelled: true,
							type: "projectiles",

							// properties
							moveSpeed: this.stats.projectileSpeed,
							moveDirection: projectileDirection,
							variance: this.stats.variance,
							damageAllHit: this.stats.damageAllHit, // usually true
							knightChargeAttack: knightChargeAttack,

							// optional stuff:
							// aaaaaaaaaaaaa look at ; might need to fix some of these
							crop: Game.heroProjectileInfo.crop,
							animation: Game.heroProjectileInfo.animation,
							frameTime: Game.heroProjectileInfo.frameTime,
							stayOnScreen: Game.heroProjectileInfo.stayOnScreen, // set to the time it stays on the screen for (default 1500) or true if never removed
							//doNotRotate: Game.heroProjectileInfo.doNotRotate, // aaaaaaaaaaaaaa readd but just as a visual thing - not affecting the projectile's direction as it would because this is needed for variance
							onInteract: Game.heroProjectileInfo.onInteract,
							z: Game.heroProjectileInfo.z,
						}));
					}
					else if (weaponType === "sword" && distanceToMouse < this.stats.meleeRange) {
						// knight not moving (melee) projectile

						this.channellingProjectileId = Game.nextEntityId;

						Game.projectiles.push(new Projectile({ // HERO melee projectile
							map: map,
							x: mouseX,
							y: mouseY,
							attacker: this,
							projectileStats: this,
							targets: [Game.damageableByPlayer],
							adjust: {
								// manually adjust position (programmed for each projectile in skindata/itemdata)
								x: Game.heroProjectileAdjust.x,
								y: Game.heroProjectileAdjust.y,
								towards: {x: this.x, y: this.y},
							},
							hitbox: {
								x: mouseX,
								y: mouseY,
								width: 60,
								height: 60,
							},
							image: Game.heroProjectileName,
							name: "Hero Slash Projectile",
							beingChannelled: true,
							type: "projectiles",

							rotate: projectileDirection + Math.PI/2,

							// optional stuff:
							// aaaaaaaaaaaaa look at ; might need to fix some of these
							crop: Game.heroProjectileInfo.crop,
							animation: Game.heroProjectileInfo.animation,
							frameTime: Game.heroProjectileInfo.frameTime,
							stayOnScreen: Game.heroProjectileInfo.stayOnScreen, // set to the time it stays on the screen for (default 1500) or true if never removed
							//doNotRotate: Game.heroProjectileInfo.doNotRotate, // aaaaaaaaaaaaaa readd but just as a visual thing - not affecting the projectile's direction as it would because this is needed for variance
							onInteract: Game.heroProjectileInfo.onInteract,
							z: Game.heroProjectileInfo.z,
						}));

						// finish attack instantly
						this.finishAttack(e);
					}
					else {
						// tbd... but for now do nothing
						this.channelling = false; // very temp...
						this.channellingInfo = false;
						this.canAttack = true;
					}

					Game.secondary.updateCursor(e); // no longer crosshair because attack is reloading

					// just in case there are multiple projectiles (which is dealt with at the end of finishAttack), save the value of e
					this.currentAttackMouseEvent = e;
				}

				else if (Player.inventory.weapon.type === "rod") {
					// fishing rod

					if (this.channelling === false) {
						// bobber has not been cast yet
						if (distanceToProjectile < this.stats.range && this.map.isSlowTileAtXY(mouseX, mouseY) === "water") {
							// player is in range and clicked in water

							this.setChannelling("fishing", undefined, undefined);

							this.channellingProjectileId = Game.nextEntityId;

							// snap to tile centre
							let projectileX = Math.floor(mouseX/60)*60 + 30;
							let projectileY = Math.floor(mouseY/60)*60 + 30;

							let bobber = new Projectile({ // fishing projectile
								map: map,
								x: projectileX,
								y: projectileY,
								crop: {
									x: 0,
									y: 0,
									width: 27,
									height: 23
								},
								image: Game.heroBobberName,
								beingChannelled: true,
								type: "projectiles",
							});
							Game.projectiles.push(bobber);
							bobber.bobberState = 0;

							// timer until it starts bobbing
							let bobTime = Random(2000, 15000);
							if (Weather.weatherType === "rain") {
								// shorter bobTime if it is raining
								bobTime = Math.round(bobTime / 1.5);
							}
							Game.fishTimeout = Game.setTimeout(this.fish.bind(this), bobTime);

							if (Player.stats.fishingSkill === 0) {
								// tutorial
								Dom.alert.page("Wait until a fish reaches your bobber...", 0);
							}
						}
					}
					else if (this.channelling === "fishing") {
						// bobber has been cast
						// fishing bobber removed as player is not mid-game to catch a fish
				        Game.removeObject(this.channellingProjectileId, "projectiles"); // remove bobber
				        this.removeChannelling("fishingBobberRemoved");
						Game.clearTimeout(Game.fishTimeout);
					}
					else if (FishingGame.currentGame === "timing" && FishingGame.status === 1)
					{
						// clicks are redirected to fishingGame as player is doing timing game
						FishingGame.clicked();

						// now check if the game has been finished + won or not!
						// not won is checked w update
						if (FishingGame.status === 2) {
							// reaction time game has been won, stop bobbing and start clicking game
							FishingGame.status = 0;

							// calculate time to catch fish and clicks needed for fish
							// see fish spreadsheet for how this is figured out
							// should be moved to its own (recursive?) function
							let clicks = 0;
							let time = 0; // in ms
							if (Player.stats.fishingSkill === 0) {
								// tutorial
								clicks = 5;
								time = 7000;

								// close prev alert if it's still open
								let index = Dom.alert.array.findIndex(index => index.text === "A fish is at your bobber - pull it out of the water by clicking when the white line reaches the green section.");
								if (index !== -1)
								{
									Dom.alert.close(index);
								}

								Dom.alert.page("Now click as fast as you can to reel in the fish!", 0);
							}
							else if (this.channelling.fishingType === "waterjunk") { // junk fishing item (uses different algorithm for clicks and time)
								clicks = 3;
								time = 1000;
							}
							else if (this.channelling.fishingType === "watermisc") { // misc fishing item (no length, so clicks and time specified in itemdata)
								clicks = this.channelling.clicksToCatch;
								time = this.channelling.timeToCatch;
							}
							else { // this.channelling
								// calculate fish length
								// between min and max; biased towards average
								let fishLength = Round(BiasedRandom(this.channelling.length.min, this.channelling.length.max, this.channelling.length.avg, 1)); // if you ever change this, please also change it in frog looting!
								this.channelling.length = fishLength; // replace length object with an integer saying the this.channelling's length

								// clicks
								if (fishLength / 25 >= 2) {
									clicks += 4;
									//fishLength -= 100;

									if (fishLength / 50 >= 2) {
										clicks += 4;
										//fishLength -= 200;

										if (fishLength / 75 >= 2) {
											clicks += 4;
											//fishLength -= 300;

											if (fishLength / 100 >= 2) {
												clicks += 4;
												//fishLength -= 400;
												console.error("this.channelling length " + this.channelling.length + " is not accounted for being so large!");
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
									if (clicks < 3) {
										clicks = 3; // clicks needed defaults to 3
									}
								}
								// time
								if (this.channelling.rarity === "common") {
									time += 300 * clicks;
								}
								if (this.channelling.rarity === "unique") {
									time += 225 * clicks;
								}
								if (this.channelling.rarity === "mythic") {
									time += 200 * clicks;
								}
							}
							//Dom.chat.insert(clicks); //for testing
							//Dom.chat.insert(time);
							this.channelling.clicksToCatch = clicks;
							// start the gameeee
							FishingGame.startClickerGame(time, clicks);

							// fish finished! time for player to fish it up...
							//this.channelling = this.channelling;???

							// submerged image for projectile
							let projectile = Game.projectiles[Game.searchFor(this.channellingProjectileId, Game.projectiles)];
							projectile.bobberState = 2;
							projectile.setImageDimensions({
								x: 54,
								y: 0,
								width: 27,
								height: 23
							});
						}
						else if (FishingGame.status === 3) {
							// game failed
							FishingGame.gameEnd();

							// remove fishing bobber
							Game.removeObject(this.channellingProjectileId, "projectiles");
							this.removeChannelling("fishingBobberRemoved");
							Game.clearTimeout(Game.fishTimeout);

							Dom.chat.insert("<i>The fish swam away!</i>");
						}
					}
					else if (FishingGame.currentGame === "clicker" && FishingGame.status === 1) { // channelling.type is only defined when it is set to an item (i.e. a fishing item)
						// fish is at bobber - player is reeling it in
						// playing fishing clicking game

						// game in progress
						FishingGame.clicked();

						if (FishingGame.status === 2) {
							// game won
							// <=> fish caught

							// quest progress
							Player.quests.questProgress.itemsFishedUp = Increment(Player.quests.questProgress.itemsFishedUp);

							// chat message
							let article = "a ";
							if (this.channelling.plural === true) {
								article = "some ";
							}
							else if (IsVowel(this.channelling.name[0])) {
								article = "an ";
							}
							if (this.channelling.fishingType === "fish") { // fish
								Dom.chat.insert("You caught " + article + this.channelling.length + "cm <strong>" + this.channelling.name + "</strong>!");
							}
							else if (this.channelling.fishingType === "waterjunk") { // junk item
								Dom.chat.insert("You fished up " + article + "<strong>" + this.channelling.name + "</strong>.");
							}
							else if (this.channelling.fishingType === "watermisc") { // misc
								Dom.chat.insert("You reeled up " + article + "<strong>" + this.channelling.name + "</strong>.");
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
								if (this.stats.fishingSkill < FishingLevels[Player.lootArea] + 15) {
									// player has only unlocked commons in this area
									this.stats.fishingSkill++;
								}
								else {
									// player has outleveled this area - diminishing returns
									this.stats.fishingSkill += 1 / (this.stats.fishingSkill - FishingLevels[Player.lootArea] - 15 + 1);
								}
							}
							else if (this.channelling.rarity === "unique") {
								if (this.stats.fishingSkill < FishingLevels[Player.lootArea] + 30) {
									// player has only unlocked commons and uniques in this area
									this.stats.fishingSkill += 2;
								}
								else {
									// player has outleveled this area
									this.stats.fishingSkill += 2 / (this.stats.fishingSkill - FishingLevels[Player.lootArea] - 30 + 1);
								}
							}
							else if (this.channelling.rarity === "mythic") {
								if (this.stats.fishingSkill < FishingLevels[Player.lootArea] + 45) {
									// player has recently unlocked mythics in this area
									this.stats.fishingSkill += 3;
								}
								else {
									// player has outleveled this area
									this.stats.fishingSkill += 3 / (this.stats.fishingSkill - FishingLevels[Player.lootArea] - 45 + 1);
								}
							}
							else {
								console.warn("Fishing item " + this.channelling + "currently never gives any fishing skill, but probably should.");
							}

							if (this.channelling.length !== undefined) {
								// player has caught a *fish*
								// achievement variable
								User.progress.fish = Increment(User.progress.fish);
								// quest variable
								Player.quests.questProgress.fishCaught = Increment(Player.quests.questProgress.fishCaught);
							}
							if (this.channelling.rarity === "junk")
							{
								// player has caught junk
								// quest variable
								Player.quests.questProgress.junkCaught = Increment(Player.quests.questProgress.junkCaught);
							}

							if (this.channelling.length >= 100)
							{
								// player has caught a fish longer than 1m
								// quest variable
								Player.quests.questProgress.longFishCaught = Increment(Player.quests.questProgress.longFishCaught);
							}

							if (this.channelling.rarity === "common")
							{
								// player has caught a common fish
								// quest variable
								Player.quests.questProgress.commonFishCaught = Increment(Player.quests.questProgress.commonFishCaught);
							}
							else if (this.channelling.rarity === "unique")
							{
								// player has caught a unique fish
								// quest variable
								Player.quests.questProgress.uniqueFishCaught = Increment(Player.quests.questProgress.uniqueFishCaught);
							}
							else if (this.channelling.rarity === "mythic")
							{
								// player has caught a mythic fish
								// quest variable
								Player.quests.questProgress.mythicFishCaught = Increment(Player.quests.questProgress.mythicFishCaught);
							}

							// give fish
							// must be after quest progress and fishing skill
							let inventoryPosition = Dom.inventory.give(this.channelling);
							// inventory position saved for if onCatch needs it

							if (inventoryPosition === false) {
								Dom.chat.insert("<i>You don't have any space to hold that item!</i>")
							}
							// onCatch function (only called if the )
							else if (this.channelling.onCatch !== undefined) {
								this.channelling.onCatch(inventoryPosition);
							}

							if (Math.floor(this.stats.fishingSkill) - Math.floor(oldFishingSkill) > 0) { // check if the player's fishing skill has increased to the next integer (or more)
								Dom.chat.insert("Your fishing skill has increased to " + Math.floor(this.stats.fishingSkill) + "."); // notify them of this in chat
							}

							// update player stats
							//Player.stats = Game.hero.stats; // inefficient (should be linked)

							// fish length for fisher's log
							if (this.channelling.length > User.fish[this.channelling.id] || typeof User.fish[this.channelling.id] === "undefined") {
								User.fish[this.channelling.id] = this.channelling.length;
							}

							// remove fishing bobber
							Game.removeObject(this.channellingProjectileId, "projectiles");
							this.removeChannelling("fishingBobberRemoved");
							Game.clearTimeout(Game.fishTimeout);

							// end fishing games
							FishingGame.gameEnd();

							Dom.checkProgress();
						}
					}
				}

				else if (Player.inventory.weapon.type === "tool" && Player.inventory.weapon.toolType === "lead") {
					// animal lead

					// get animals being touched
					let touchedAnimals = Game.allThings.filter(thing => thing.canBeOnLead && thing.isTouching({x: mouseX, y: mouseY, width: 1, height: 1}) && !thing.respawning && !thing.isCorpse);

					if (touchedAnimals.length > 0) {
						// a touched animal can have a lead put on it

						if (this.hasOnLead !== undefined) {
							// animal is already on lead
							this.hasOnLead.onLead = undefined; // animal (Game.hero.hasOnLead) is no longer on lead
						}

						this.hasOnLead = touchedAnimals[touchedAnimals.length-1]; // end of array to get animal at top
						touchedAnimals[touchedAnimals.length-1].onLead = true;
					}
					else {
						// take off lead from existing animal (if there is one already on a lead)
						if (this.hasOnLead !== undefined) {
							this.hasOnLead.onLead = undefined; // animal (Game.hero.hasOnLead) is no longer on lead
							this.hasOnLead = undefined;
						}
					}
				}
			}
			else {
				// right click
				// spell !
				if (this.spells.length > 0) {
					// the hero has a spell
					// for now, just cast the first spell they have
					if (typeof this.spells[0].onCooldown === "undefined" || this.spells[0].onCooldown === 0) {
						this.channelSpell(this.spells[0].id, this.spells[0].tier, {target: {x: mouseX, y: mouseY}});
					}
				}
			}
		}
	}

	// shoot basic attack
	finishAttack (e) {
		if (this.channelling === "projectile") { // check that the player is channelling a projectile (they might not have a weapon equipped so are not channelling, for example)
			this.channelTime = 0;
			this.removeChannelling("projectileAttackFinished");

			// get projectile
			let shotProjectile = Game.projectiles[Game.searchFor(this.channellingProjectileId, Game.projectiles)];

			if (shotProjectile.knightChargeAttack && shotProjectile.movementRange < AttackConstants.sword.channelMinDistance) {
				// not channelled for long enough - cancel

				Game.removeObject(shotProjectile.id, shotProjectile.type);

				this.canAttack = true;
				// add back crosshair to cursor (if mouse is in range)
				Game.secondary.updateCursor();
			}
			else {
				// projectile is valid - shoot it !

				// set projectile as not channelling
				shotProjectile.beingChannelled = false;

				if (typeof shotProjectile.variance !== "undefined") {
					shotProjectile.moveDirection += ToRadians(Random(-shotProjectile.variance, shotProjectile.variance));
				}

				this.currentAttackFinalVariance = shotProjectile.variance; // needed if there are multiple projectiles to be shot (see bottom of this fn)

				// function called for all attacks whether they hit an enemy or not
				if (Player.inventory.weapon.onAttack !== undefined) {
				    Player.inventory.weapon.onAttack(shotProjectile);
				}

				// decrement durability of player's weapon (if it has durability)
				if (Player.inventory.weapon.maxDurability !== undefined) {
					if (Player.inventory.weapon.durability === undefined) {
						// weapon's durability not been decremented before
						Player.inventory.weapon.durability = Player.inventory.weapon.maxDurability - 1;
					}
					else {
						Player.inventory.weapon.durability--;
					}

					// remove weapon if its durability is 0
					if (Player.inventory.weapon.durability === 0) {
						Dom.chat.insert("Your " + Player.inventory.weapon.name + " broke, since it ran out of durability.");
					}
				}

				// Status effects that are used on attack - remove them
				// (their effects should have happened in dealDamage, if an enemy was hit)
				for (let i = 0; i < this.statusEffects.length; i++) {
					if (this.statusEffects[i].info.removeOnAttack) {
						this.removeStatusEffect(i, "attack");
						i--;
					}
				}

				// if knight is doing a charge attack, move player with the projectile
				if (shotProjectile.knightChargeAttack) {
					let destinationX = this.x + Math.cos(shotProjectile.rotate - Math.PI/2)*shotProjectile.movementRange;
					let destinationY = this.y + Math.sin(shotProjectile.rotate - Math.PI/2)*shotProjectile.movementRange;

					this.moveTowards = {
						x: destinationX,
						y: destinationY,
						speed: shotProjectile.moveSpeed,
					};
				}

				// wait for the player's reload time (0.5s) until they can attack again
				Game.setTimeout(function () {
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

				// almost done but...
				// there might be multiple projectiles!
				if (this.class === "a" && this.stats.numberOfProjectiles > 1 && !this.multipleProjectilesInProgress) {
					this.multipleProjectilesInProgress = true; // so we don't get an infinite loop...
					for (let i = 0; i < this.stats.numberOfProjectiles-1; i++) {
						this.canAttack = true; // temporarily, so startAttack can trigger... (set back to false automatically)
						this.startAttack(this.currentAttackMouseEvent);
						Game.projectiles[Game.projectiles.length-1].positionVariance = this.currentAttackFinalVariance; // set the shot projectile's variance to the variance of the first projectile
						this.finishAttack(this.currentAttackMouseEvent);
					}
					this.multipleProjectilesInProgress = false;
				}
			}

			this.channellingProjectileId = null;
		}
	}

	// called whenever Game.hero's status effects are updated
	updateStatusEffects () {
		// update dom
		Dom.inventory.displayIdentification();
	}

	// map.getTile for Game.hero
	// layer defaults to the highest layer with a tile on
	getTileAtFeet (layer) {
		let repeatUntilTileFound = false;
		if (typeof layer === "undefined") {
			layer = map.layers.length - 1;
			repeatUntilTileFound = true;
		}
		let tile = map.getTile(layer, map.getCol(this.x), map.getRow(this.y + this.height/2));
		if (repeatUntilTileFound && tile === 0) {
			// repeat until a tile is found :)
			while (layer > 0 && tile === 0) {
				layer--;
				tile = map.getTile(layer, map.getCol(this.x), map.getRow(this.y + this.height/2));
			}
		}
		return tile;
	}

	// called by fishing bobber once a fish is on the line, every time it should bob (bob down or up!)
	// either calls itself again after some interval for another bob up/down, or deals with the first (timing) fishing game
	// note the timeout to call this again is removed if fishing stops
	fish () {
		let projectile; // see else statement below

		if (FishingGame.status === 0)
		{
			// fish hasn't even been decided yet! let's do that now
			let fish;
			let itemRarity;

			if (Player.stats.fishingSkill === 0) {
				// tutorial
				fish = Items.fish[9];
				itemRarity = "tutorial";

				// close prev alert if it's still open
				let index = Dom.alert.array.findIndex(index => index.text === "Wait until a fish reaches your bobber...");
				if (index !== -1)
				{
					Dom.alert.close(index);
				}

				Dom.alert.page("A fish is at your bobber - pull it out of the water by clicking when the white line reaches the green section.", 0);
			}
			else {
				// guaranteed to fish up fish if they have bait status effect
				let usingBait;
				let baitStatusEffectIndex = this.statusEffects.findIndex(statusEffect => statusEffect.title === "Fish bait");
				if (baitStatusEffectIndex !== -1) { // check if player has a bait status effect
					this.removeStatusEffect(baitStatusEffectIndex, "used");
					usingBait = true;
				}

				// find what rarities the player can fish up
				// junk is fished up in the proportion not unlocked by common/unique/mythic
				let raritiesAvailable = [];
					if (Player.stats.fishingSkill >= FishingLevels[Player.lootArea]) {
					// can fish up commons
					raritiesAvailable.push("common");
				}
				if (Player.stats.fishingSkill >= FishingLevels[Player.lootArea] + 15) {
					// can fish up uniques
					raritiesAvailable.push("unique");
				}
				if (Player.stats.fishingSkill >= FishingLevels[Player.lootArea] + 30) {
					// can fish up mythics
					raritiesAvailable.push("mythic");
				}
				if (!usingBait) {
					// can fish up junk
					raritiesAvailable.push("junk");
				}

				// pick a random rarity from the raritiesAvailable array
				let RandomNum = Random(1, 20);
				itemRarity = "";
				if (RandomNum === 1) {
					// 1 in 20 chance for a mythic
					itemRarity = "mythic";
				}
				else if (RandomNum <= 4) {
					// 3 in 20 chance for a unique
					itemRarity = "unique";
				}
				else if (RandomNum <= 11) {
					// 7 in 20 chance for a common
					itemRarity = "common";
				}
				else {
					itemRarity = "junk";
				}
				// check if the player has unlocked that rarity, otherwise give them a junk item
				if (!raritiesAvailable.includes(itemRarity)) {
					if (!usingBait) {
						itemRarity = "junk";
					}
					else {
						// guaranteed fish with bait
						itemRarity = "common";
					}
				}

				// find the fish that should be caught
				fish = Items.fish;
				fish = fish.filter(item => item.areas.includes(Player.lootArea) || item.areas.includes(Game.areaName) || item.areas.length === 0); // filter for area (either lootArea or areaName)
				fish = fish.filter(item => item.rarity === itemRarity); // filter for rarity
				fish = fish.filter(item => item.timeRequirement === undefined || Event.time === item.timeRequirement); // filter for time that it can be fished up
				fish = fish.filter(item => item.catchRequirement === undefined || item.catchRequirement()); // filter for general fishing requirement
				if (usingBait) {
					// can't get watermisc
					fish = fish.filter(item => item.fishingType === "fish");
				}
				if (fish.constructor === Array) {
					// still more fish to pick from
					fish = fish[Random(0, fish.length - 1)]; // Random fish that fulfils requirements above
				}
				fish = { ...fish }; // remove all references to itemdata in fish variable (otherwise length value changed in this will also affect itemData)!
			}

			this.channelling = fish;

			// fishing minigame is not active, so start it
			FishingGame.startTimingGame(itemRarity);

			this.fish(); // recursively update bobber!
		}
		else if(FishingGame.status === 1){
			// we need to update the bobber... let's first find it!
			projectile = Game.projectiles[Game.searchFor(this.channellingProjectileId, Game.projectiles)];

			if (FishingGame.status === 1 && FishingGame.currentGame === "timing" && projectile.bobberState === 1) {
				// reaction game in progress - bob back up :)
				projectile.bobberState = 0;
				projectile.setImageDimensions({
					x: 0,
					y: 0,
					width: 27,
					height: 23
				});

				// bob back down
				let bobTime = Random(300, 1300);
				Game.fishTimeout = Game.setTimeout(this.fish.bind(this), bobTime);
			}

			else if (FishingGame.status === 1 && FishingGame.currentGame === "timing" && projectile.bobberState === 0) {
				// set bobbing image (and set it back in 200ms)
				projectile.bobberState = 1;
				projectile.setImageDimensions({
					x: 27,
					y: 0,
					width: 27,
					height: 23
				});

				// bobs back up after 200ms
				Game.fishTimeout = Game.setTimeout(this.fish.bind(this), 200);
			}
		}
	}

	// teleport to x y position
	teleport (x, y) {
		this.x = x;
		this.y = y;

		Game.setTimeout(function(){
			Weather.reset();
		}.bind(Weather), 10); // timeout is used because the weather is not updated for a tick

		// tile user is on will have changed - update slow tile status effects
		this.setSpeed();

		// update foot hitbox position
		this.updateFootHitbox();
	}

	// area teleport that can be undone by temporaryAreaTeleportReturn
	// reason is an optional reason for the temporaryAreaTeleport (easier to know when to temporaryAreaTeleportReturn)
	temporaryAreaTeleport (areaName, x, y, reason) {
		// save old position
		this.oldPosition = {
			area: Game.areaName,
			x: this.x,
			y: this.y,
			reason: reason
		};
		// teleport player to location
		Game.loadArea(areaName, {x: x, y: y});
	}

	// undoes temporaryAreaTeleport
	temporaryAreaTeleportReturn () {
		if (this.oldPosition !== undefined) {
			// teleport player back to their previous position
			Game.loadArea(this.oldPosition.area, {x: this.oldPosition.x, y: this.oldPosition.y});
			this.oldPosition = undefined;
		}
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

		if (document.getElementById("nametagOn").checked) { // show nametag if player wants
			Game.drawCharacterInformation(Game.ctx, this);
		}
	}

	// called after this.direction is updated
	// +1 or +3 are because of padding in spritesheet (see comment at top of skindata.js)
	updateRotation () {
		if (this.direction === 1) {
			this.crop = {
				x: 1,
				y: this.baseHeight+3,
				width: this.baseWidth,
				height: this.baseHeight
			};
		}

		else if (this.direction === 2) {
			this.crop = {
				x: this.baseWidth+3,
				y: this.baseHeight+3,
				width: this.baseWidth,
				height: this.baseHeight
			};
		}

		else if (this.direction === 3) {
			this.crop = {
				x: 1,
				y: 1,
				width: this.baseWidth,
				height: this.baseHeight
			};
		}

		else if (this.direction === 4) {
			this.crop = {
				x: this.baseWidth+3,
				y: 1,
				width: this.baseWidth,
				height: this.baseHeight
			};
		}
	}


	// testing: set hero's image to a different image for imageposition
	imageTest (imageKey, imageAddress) {
		let p = Loader.loadImage(imageKey, imageAddress, false); // false = don't delete on area change

		p.then(function () {
			this.changeImage(imageKey);
		}.bind(this));
	}

	// reset testing started by imageTest
	resetImageTest () {
		this.resetImage();
	}
}

// any projectile
class Projectile extends Thing {
	constructor(properties) {
		super(properties);

		this.z = properties.z || 1; // appears on top by default (z would normally be 0)

		this.projectileStats = properties.projectileStats || { // stats used for when dealing damage. these can be the own projectile's or the actual attacker's
			// for if projectile deals its own damage (thus has its own stats)
			// IF PROJECTILE HAS ITS OWN PROPERTIES.STATS, DON'T GIVE IT A PROPERTIES.PROJECTILESTATS! IT WILL OVERRIDE THE STATS!
			stats: Object.assign({}, DefaultStats, properties.stats), // assign with DefaultStats used for compatibility. note that you have to access projectilestats by going .stats!!
			// for compatibility with dealDamage:
			hostility: "projectile",
			statusEffects: [],
		};
		this.targets = properties.targets; // array of arrays of objects to deal damage to
		this.exceptTargets = properties.exceptTargets || []; // array of objects that would also be included in targets, but should not be damaged

		this.attacker = properties.attacker; // the caster of the projectile if applicable (used only in some onHit functions)

		this.doNotRotate = properties.doNotRotate; // set to true if projectile should not be automatically rotated
		this.stayOnScreen = properties.stayOnScreen; // set to a number if it is removed after that many ms rather than 1500, or set to true if never removed automatically

		if (!this.doNotRotate) {
			this.rotate = properties.rotate || properties.moveDirection + Math.PI/2 || 0;
		}
		else {
			this.rotate = 0;
		}

		this.beingChannelled = properties.beingChannelled || false;

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

		this.damageDealt = []; // array of damages dealt to show

		// moving projectiles
		// projectiles can either move with a moveTowards or a moveDirection (should not have both properties set)
		// all of these properties are optional

		// position the projectile should move towards
		// this object should contain an x and y if you want the projectile to move
		// could be set to an enemy, for example, if you want the projectile to home into that enemy
		// movetowards can also be given a moveTowardsFinishFunction which is called when the locations is reached (not if it's interrupted before this!)
		this.moveTowards = properties.moveTowards;

		// alternatively...
		// direction the projectile should move towards
		// input should be in radians, works in samme  fashion to unit circle (anticlockwise from east)
		this.moveDirection = properties.moveDirection;
		// moveDirection comes with...
		// speed is multiplied by delta like other speeds
		this.moveSpeed = properties.moveSpeed;

		this.moveAcceleration = properties.moveAcceleration;
		if (typeof this.moveAcceleration !== "undefined") {
			// for suvat ... (used with createdAt)
			this.baseSpeed = properties.moveSpeed;
		}

		this.movementRange = properties.projectileRange || 2000; // maximum displacement that can be moved (for a moveTowards rather than moveDirection this is not necessary to be set)
		// add a bit of variance so not all of the projectiles land in the same place
		this.movementRange += Random(-30, 30);

		this.startPosition = {x: this.x, y: this.y}; // saved so the displacement is known

		this.stopMovingOnDamage = properties.stopMovingOnDamage; // whether it should stop moving upon damaging something (this is not the same as damageAllHit)
		// stopMovingOnDamage is not required if projectile has a moveTowards

		// pierce and damageAllHit are in this.projectileStats since they are required for dealDamage

		this.removeAfterRest = properties.projectileRemoveAfterRest; // projectile is removed after being at rest for this period of time, in SECONDS (optional)
//tbdddddddddddddddddddddddddd ^^^^^^^^^^^^^^^^^ aaaaaaaaaaaaaaaaaaaaaa

		this.variance = properties.variance; // just for player - variance is always dealt with outside of projectile (since player wants it varied after proejctile is acc made)

		this.onHit = properties.onHit; // function. parameters passed in are target and caster

		this.successiveExplosions = properties.successiveExplosions || 0; // thermal runaway achievement

		//
		// calculate projectile type ~
		//
		if (properties.projectileType === "snake") {
			// copies of the projectile are made rather than the image itself moving, so it "snakes", i.e. fissure
			// note that for placement of projectiles it is assumed that they tile vertically
			this.projectileType = "snake";
			this.maxIterations = properties.maxIterations || 20;
			this.iterationNumber = properties.iterationNumber || 0;
			this.iterationNumber++;
			properties.iterationNumber = this.iterationNumber;
			this.iterationSpacing = properties.iterationSpacing; // in ms

			if (this.iterationNumber < this.maxIterations) {
				// tiles vertically
				properties.x += this.height*Math.cos(this.rotate-Math.PI/2);
				properties.y += this.height*Math.sin(this.rotate-Math.PI/2);
				properties.hitbox.x += this.height*Math.cos(this.rotate-Math.PI/2);
				properties.hitbox.y += this.height*Math.sin(this.rotate-Math.PI/2);

				Game.setTimeout(function () {
					Game.projectiles.push(new Projectile(properties));
				}, this.iterationSpacing, properties);
			}

			// rest is borrowed from instant projectiles:

			// deal damage!
			// damage enemies that the projectile is touching
			this.dealDamage(this.projectileStats, this.targets);

			// start remove timeout (remove it in a couple of secs)
			this.startRemoveTimeout();
		}
		else if (typeof this.moveSpeed !== "undefined" || typeof this.moveTowards !== "undefined") {
			this.projectileType = "travelling";
		}
		else {
			this.projectileType = "instant";

			// deal damage!
			// damage enemies that the projectile is touching
			this.dealDamage(this.projectileStats, this.targets);

			// start remove timeout (remove it in a couple of secs)
			this.startRemoveTimeout();
		}

		this.knightChargeAttack = properties.knightChargeAttack; // knight class' ranged attack
	}

	// only currently does stuff for moving projectiles (otherwise dealDamage is called on creation) // aaaaaaaaaaaaaaaa it's should be called in the constructor not wherever it is currently
	update (delta) { // PROJECTILE update
		if (!this.beingChannelled) {
			// not a projectile that hasn't been fired yet
			if (this.projectileType === "travelling") {
				// projectile should be moved
				let direction;

				if (this.moveTowards !== undefined) {
					// move towards a position
					direction = this.bearing(this, this.moveTowards);
				}
				else if (this.moveDirection !== undefined && this.moveSpeed !== undefined) {
					// move at a bearing
					direction = this.moveDirection;
				}

				if (typeof direction !== "undefined") { // might be undefined if it's about to be removed
					// rotate projectile in the direction
					if (!this.doNotRotate) {
						this.rotate = direction + Math.PI/2;
					}

					// this should be moved
					this.x += Math.cos(direction) * this.moveSpeed * delta;
					this.y += Math.sin(direction) * this.moveSpeed * delta;

					if (typeof this.hitbox !== "undefined") {
						// move its hitbox as well
						this.hitbox.x += Math.cos(direction) * this.moveSpeed * delta;
						this.hitbox.y += Math.sin(direction) * this.moveSpeed * delta;
					}
				}

				if (typeof this.baseSpeed !== "undefined" && this.moveAcceleration !== "undefined") {
					// acceleration
					this.moveSpeed = this.baseSpeed + this.moveAcceleration*(Game.gameTime-this.createdAt);
					if (this.moveSpeed < 0) {
						this.moveSpeed = 0;
					}
				}

				// remove the this if it has moved too far, or it is at its destination
				if (Game.distance(this.startPosition, this) > this.movementRange || Game.isAtLocation(this, this.moveTowards) || !this.isOnMap()) {
					// stop moving
					this.moveTowards = undefined;
					this.moveDirection = undefined;
					// after a timeout (1.5s), remove the this that was just shot
					this.startRemoveTimeout();
				}

				// only deal damage if it hasn't before (or if damage is to be dealt to all targets, or pierces)
				else if (this.damageDealt.length === 0 || this.projectileStats.stats.damageAllHit) {
					// deal damage
					this.dealDamage(this.projectileStats, this.targets);

					// check if damage was dealt
					if (this.damageDealt.length !== 0) {
						// stop moving potentially
						if (this.stopMovingOnDamage) {
							this.moveTowards = undefined;
							this.moveDirection = undefined;
							// after a timeout (1.5s), remove the projectile that was just shot
							this.startRemoveTimeout();
						}
					}
				}
			}
		}
		else {
			// projectile hasn't been fired yet ; currently just for when a hero is channelling it
			//aaaaaaaaaaaaaaaaa
		}
	}

	// carry out before image render
	preRenderFunction() {
		if (Game.getAttackType() === "bow" && this.beingChannelled && Game.hero.channelling === "projectile") {
			// show archer red arc instead of projectile if they are currently channelling it
			let radius = 200;
			Game.ctx.globalAlpha = 0.3;
			Game.ctx.strokeStyle = "red";
			Game.ctx.lineWidth = 7;
			Game.ctx.beginPath();
			Game.ctx.arc(Game.hero.screenX, Game.hero.screenY, radius, this.moveDirection - ToRadians(this.variance), this.moveDirection + ToRadians(this.variance));
			Game.ctx.stroke();

			// restore globalAlpha
			Game.ctx.globalAlpha = 1;

			return false; // don't render the projectile's image
		}

		else if (Game.getAttackType() === "sword" && this.beingChannelled && this.knightChargeAttack && Game.hero.channelling === "projectile") {
			// show attack route
			let destinationX = Game.hero.x + Math.cos(this.rotate - Math.PI/2)*this.movementRange;
			let destinationY = Game.hero.y + Math.sin(this.rotate - Math.PI/2)*this.movementRange;

			let moveX = destinationX - Game.hero.x;
			let moveY = destinationY - Game.hero.y;

			// colour of line
			if (this.movementRange < AttackConstants.sword.channelMinDistance) {
				Game.ctx.strokeStyle = "red";
			}
			else {
				Game.ctx.strokeStyle = "yellow";
			}

			Game.ctx.globalAlpha = 0.3;
			Game.ctx.lineWidth = 7;
			Game.ctx.beginPath();
		    Game.ctx.moveTo(Game.hero.screenX, Game.hero.screenY);
		    Game.ctx.lineTo(Game.hero.screenX + moveX, Game.hero.screenY + moveY);
		    Game.ctx.stroke();

			// restore globalAlpha
			Game.ctx.globalAlpha = 1;

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
			// only display if damage was dealt to hero, or if it was hero's projectile
			if (this.damageDealt[x].enemy.constructor.name === "Hero" || this.attacker.constructor.name === "Hero") {
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
		}

		Game.ctx.globalAlpha = 1; // restore transparency if it was changed by preRenderFunction (e.g: mage channelled projectile)
	}

	// deal damage to array of entities (to)
	// attacker = whose stats to use when dealing damage
	// to = array of arrays of objects to deal damage to
	// make sure that attacker and to are at least Characters in the inheritance chain (not Entities or Things)
	// hence, if you want to damage a single target still put it in an array, e.g: dealDamage(attacker, [[Game.hero]])
	// returns true if at least one enemy is hit
	dealDamage (attacker, to) {
		let endLoops = false; // set to true if loops should be ended (e.g. after dealing damage with damageAllHit = false)

		let enemyHit = false;

		for (let i = 0; i < to.length && !endLoops; i++) { // iterate through arrays of objects in to
			// the following loop is iterated through backwards so that, if there is no damageAllHit, the top enemy is hit not bottom
			for (let x = to[i].length-1; x >= 0 && !endLoops; x--) { // iterate through objects in to

				let target = to[i][x];

				// if target has already been damaged by this projectile
				let targetAlreadyDamaged = this.damageDealt.find(damage => damage.enemy.id === target.id);

				// check projectile is touching character it wants to damage, and that target should be damaged
				if (this.isTouching(target) && !target.respawning && !target.isCorpse && targetAlreadyDamaged === undefined && !this.exceptTargets.includes(target)) {

					let canBeDamaged = true;

					// check if the target can be damaged

					if (target.canBeDamagedBy.length > 0 && attacker.constructor.name === "Hero") {
						// can only be damaged by certain weapons
						canBeDamaged = false;
						for (let a = 0; a < target.canBeDamagedBy.length; a++) {
							if (Player.inventory.weapon.name === target.canBeDamagedBy[a]) {
								canBeDamaged = true;
								break;
							}
						}
					}

					if (canBeDamaged && Random(0, 99) < target.stats.dodgeChance) {
						// hit dodged
						this.damageDealt.push({enemy: target, damage: "hit dodged", critical: false});
						canBeDamaged = false;
					}

					if (canBeDamaged) { // damage

						enemyHit = true; // fn will return true

						//
						// first incorporate damage of attacker...
						//

						// calculate damage percentage from damagePercentage stat anda ny status effects
						let damagePercentage = 100 + attacker.stats.damagePercentage; // as percentage so far

						// attackDamage status effects
						// tbd these should change stats directly (and unchange them on expire)?
						attacker.statusEffects.forEach(statusEffect => {
							if (statusEffect.info.damageIncrease !== undefined) {
								// increase damage dealt if the status effect does so
								damagePercentage += statusEffect.info.damageIncrease;
							}
						});

						// can't have negative damage!
						if (damagePercentage < 0) {
							damagePercentage = 0;
						}

						// convert to decimal
						damagePercentage /= 100;

						let attackerDamage = attacker.stats.damage;
						// increase base damage based on damagePercentage
						attackerDamage *= damagePercentage;

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

						//
						// now incorporate defence of enemy...
						//

						let targetDefence = target.stats.defence; // calculate target defence

						let defenceMultiplier = 1; // status effects

						// defence status effect
						target.statusEffects.forEach(statusEffect => {
							if (statusEffect.info.defenceIncrease !== undefined) {
								// increase defence if the status effect does so
								// check what the attacker's species is (or that status effect is not geared towards a certain subspecies)
								if (statusEffect.info.subSpecies === undefined || attacker.subSpecies === statusEffect.info.subSpecies) {
									defenceMultiplier += (statusEffect.info.defenceIncrease / 100);
								}
							}
						});

						targetDefence *= defenceMultiplier;

						// defence
						let dmgDealt = attackerDamage - (targetDefence / 10);
						if (dmgDealt < 0) {
							dmgDealt = 0;
						}


						let critical = false
						if (Random(0, 99) < attacker.stats.criticalChance) { // critical hit
							dmgDealt *= 2
							critical = true;
						}


						// let's now affect target aggro on attacker (if such a thing exists)
						// the target might also have other targets with "joint aggro", i.e. their aggro is increased as well
						// 10% of max health dealt -> aggro increased by 1 (i.e. "leashradius" increased by 100)
						let aggroList = [target];
						if (typeof target.jointAggro !== "undefined") {
							let add = target.jointAggro();
							if (!Array.isArray(add)) {
								console.error(add, "is not an array but should be.");
							}
							else {
								aggroList = aggroList.concat(add);
							}
						}
						for (let i = 0; i < aggroList.length; i++) {
							let entity = aggroList[i]
							if (typeof entity.attackTargets !== "undefined") {
								// try to find the attacker in the target's targets (I'm getting jamais vu...)
								for (let i = 0; i < entity.attackTargets.length; i++) {
									if (entity.attackTargets[i].target === attacker) {
										if (typeof entity.attackTargets[i].aggro === "undefined") {
											entity.attackTargets[i].aggro = 0;
										}
										entity.attackTargets[i].aggro += dmgDealt / entity.stats.maxHealth * 10 * entity.attackTargets[i].target.stats.enemyAggro / 100;
										entity.attackTargets[i].lastAttacked = 0;
										entity.attackTargets[i].aggroBeforeForgiveness = undefined;
									}
								}
							}
						}

						// now apply overall attack damage modifier (a constant value, decided by devs and not affected by anything ingame)
						dmgDealt *= AttackConstants[Game.getAttackType()].damageMultiplier;


						// stuff to be done before dealing damage ...

						// they'll never see it coming achivement
						if (attacker.stats.stealthed && target.health === target.stats.maxHealth && dmgDealt >= target.health && attacker.constructor.name === "Hero") {
							User.progress.theyllNeverSeeItComing = true;
						}

						// deal the damage!
						target.takeDamage(dmgDealt, attacker.constructor.name === "Hero", this.successiveExplosions); // third param is just for an achivement to do with exploding
						this.damageDealt.push({enemy: target, damage: dmgDealt, critical: critical});

						// check they still exist
						// they might not if they don't respawn on death and have just been killed
						if (target !== undefined) {
							// poison
							if (attacker.stats.poisonX > 0 && attacker.stats.poisonY > 0) { // check if target weapon has poison
								Game.statusEffects.poison({
									target: target,
									poisonDamage: attacker.stats.poisonX*attacker.stats.poisonStrength/100,
									time: attacker.stats.poisonY,
								});
							}

							// flaming
							if (attacker.stats.flaming > 0) { // check if target weapon has flaming
								Game.statusEffects.fire({
									target: target,
									tier: attacker.stats.flaming,
								});
							}

							// reflection
							if (target.stats.reflection > 0) { // check if target has reflection
								if (typeof attacker.takeDamage !== "undefined") {
									attacker.takeDamage(dmgDealt * (target.stats.reflection / 100), target.constructor.name === "Hero");
								}
							}

							// stun
							if (attacker.stats.stun > 0) { // check if attacker weapon has stun
								let stunEffectParameters = {target: target, time: attacker.stats.stun};

								// slow is done as onExpire for if they are stunned as well as slowed
								if (attacker.stats.slowAmount > 0 && attacker.stats.slowTime > 0) {
									stunEffectParameters.onExpire = "slow";
									stunEffectParameters.callExpireOnRemove = true;
									stunEffectParameters.extraInfo = {
										slowEffectTitle: attacker.stats.slowEffectTitle,
										slowAmount: attacker.stats.slowAmount,
										slowTime: attacker.stats.slowTime,
									}
								}

								Game.statusEffects.stun(stunEffectParameters);
							}
							// slow (if there's also stun, it's added on the end in extraInfo)
							else if (attacker.stats.slowAmount > 0 && attacker.stats.slowTime > 0) {
								Game.statusEffects.walkSpeed({
									target: target,
									effectTitle: attacker.stats.slowEffectTitle || "Slowed",
									speedIncrease: -attacker.stats.slowAmount,
									time: attacker.stats.slowTime,
								});
							}

							// rooting
							if (attacker.stats.rooting > 0) { // check if attacker weapon has rooting
								let rootingEffectParameters = {target: target, time: attacker.stats.rooting};

								// tbd make compatible with slow like stun is?

								Game.statusEffects.root(rootingEffectParameters);
							}

							// hex (if not already dead!)
							if (!target.isCorpse && !target.respawning && Random(0, 99) < attacker.stats.hex) { // check if attacker weapon has hex
								Game.statusEffects.hex({target: target, image: Player.inventory.weapon.hexImages});
							}

							// knockback
							if (attacker.stats.knockback > 0) { // check if attacker weapon has rooting
								let displaceDirection = Game.bearing(attacker, target);
								let time = attacker.stats.knockback / 180; // dist / speed
								target.displace(0, 180, time, displaceDirection);
							}

							// spread any curse status effects
							Game.spreadCurse(attacker, target);

							// bamboozlement!
							if (typeof attacker.hasStatusEffect !== "undefined" && attacker.hasStatusEffect("Bamboozle")) {
								// from archer spell
								// swap position with the enemy
								Game.swapPositions(attacker, target);
								// remove status effect
								attacker.cleanse("Bamboozle", "title");
							}

							// chat relating to being damaged (and dealing damage? TBD)
							if (typeof target.chat !== "undefined") { // check the character has been given text to say about being damaged
								if (target.health < target.stats.maxHealth / 10 && typeof target.chat.tenPercentHealth !== "undefined") { // 10% health chat message
									target.say(target.chat.tenPercentHealth, 0, true);
								}
								else if (target.health < target.stats.maxHealth / 2 && typeof target.chat.fiftyPercentHealth !== "undefined") { // 50% health chat message
									target.say(target.chat.fiftyPercentHealth, 0, true);
								}
								else if (target.health < target.stats.maxHealth && typeof target.chat.firstDamaged !== "undefined") { // first damaged chat message
									target.say(target.chat.firstDamaged, 0, true);
								}
							}

							// remove target's stealth
							if (target.stats.stealthed) {
								target.stats.stealthed = false;
								Game.removeStealthEffects(target);
							}

							// remove attacker's stealth if the target is still alive (otherwise they can keep stealth)
							if (attacker.stats.stealthed && target.health > 0) {
								attacker.stats.stealthed = false;
								Game.removeStealthEffects(attacker);
							}
						}

						// things to do with attacker that should be done regardless of whether the target was removed

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
							Game.restoreHealth(attacker, dmgDealt * (lifestealPercentage / 100), true); // true because lifesteal restores health during blood moon
						}

						// onHit function for player weapon
						// tbd make a way other equipment can have onhit - there should be a good system for this - maybe a list of functions called on attack or something, handled by Game.inventoryUpdate
						if (attacker.constructor.name === "Hero" && Player.inventory.weapon.onHit !== undefined) {
							Player.inventory.weapon.onHit(target);
						}

						// ohHit function for projectile
						if (typeof this.onHit !== "undefined") {
							this.onHit(target, this.attacker);
						}

						if (target.constructor.name === "Hero" || attacker.constructor.name === "Hero") {
							// remove any food status effects (hero is in combat)
							for (let i = 0; i < Game.hero.statusEffects.length; i++) {
								if (Game.hero.statusEffects[i].image === "food") {
									// food status effect; remove it
									Game.hero.removeStatusEffect(i, "foodCombat");
									i--;
								}
							}
						}
					}

					if (attacker.stats.damageAllHit === false) {
						// only one enemy should be damaged
						endLoops = true;
					}
				}
			}
		}

		return enemyHit;
	}

	// initiates removing of projectile, usually in 1500s time
	startRemoveTimeout () {
		if (!this.onRemoveTimeout) { // check it's not already being removed
			if (typeof this.stayOnScreen !== "undefined") {
				// different time than the 1.5s
				if (this.stayOnScreen === true) {
					// never remove!
				}
				else {
					this.removeIn = this.stayOnScreen / 1000;
				}
			}
			else {
				if (this.projectileType === "travelling") {
					this.removeIn = 0.75;
				}
				else {
					// instant or snake
					this.removeIn = 1.5;
				}
				this.onRemoveTimeout = true;
			}
			return this.removeIn;
		}
	}
}

// appears as a shape, activates to apply an effect to all targets in the shape after a specific time period
class CombatArea extends Shape {
	constructor(properties) {
		super(properties);

		this.shape = properties.shape || "circle"; // should be "circle", (more to be added!)

		this.effect = properties.effect; // function to be triggered after time
		this.targets = properties.targets; // array of arrays of objects to deal damage to
		this.time = properties.time; // in ms
		this.elapsed = 0;

		this.activated = false;

		this.text = properties.text || ""; // optional text to display in the shape
	}
}

// entities that the player collides with
class Collision extends Entity {
	constructor(properties) {
		super(properties);

		this.collisionCondition = properties.collisionCondition; // an optional function where collision only happens if this returns true
	}
}

// all entities can be mounted, but these are ones that can be moved by the player in particular (i.e. horses)
class Mount extends Character {
	constructor(properties) {
		super(properties);

		this.passenger = properties.passenger; // object

		this.speedX = 0;
		this.speedY = 0;
		this.velocity = 0; // pythag

		this.acceleration = properties.acceleration || 750; // speed gain per second

		this.maxVelocity = properties.maxVelocity || 300;

		this.throwOffVelocity = properties.throwOffVelocity || 250; // change in velocity required to catapult the hero off..

		// hero position on mount specified by rideAdjustX and Y in entity class

		this.direction = properties.direction || 4; // same numbers as hero directions

		this.distanceTravelled = 0;
		this.animateDistance = 30; // distance needed to travel to change image
		this.lastAnimatedDistance = 0; // last distance travelled milestone at which the image was updated
		this.state = 0; // image state, taken mod to find what image should be displayed
	}

	move (delta, dirx, diry) {
		this.speedX += this.acceleration * dirx * delta; // aaaaaaaaaaaaaaaa tbd use suvat !!!!!!!!!
		this.speedY += this.acceleration * diry * delta;

		// slow down a bit due to drag etc . .
		//this.speedX *= 0.9;
		//this.speedY *= 0.9;

		// figure out and cap velocity
		this.velocity = Math.sqrt(this.speedX*this.speedX + this.speedY*this.speedY);

		if (this.velocity > this.maxVelocity) {
			let ratio = this.velocity / this.maxVelocity;
			let multiplier = 1/Math.sqrt(ratio);
			this.speedX *= multiplier;
			this.speedY *= multiplier;
			// now it has been limited to maxVelocity
			this.velocity = this.maxVelocity
		}

		// set rotation image
		this.setRotationImage(this.speedX, this.speedY);

		// appears in front of / behind player depending on its rotation image
		if (this.direction === 3) {
			// player appears behind
			this.orderOffsetY = 0;
		}
		else {
			// player appears in front
			this.orderOffsetY = -600;
		}

		this.x += this.speedX*delta;
		this.y += this.speedY*delta;

		this.distanceTravelled += this.velocity*delta;

		let collision = this.collide(this.speedX, this.speedY, delta);

		// set speed to 0 if collision (and throw off the hero if enough of a change in speed!)
		if (collision) {
			// first see if we should catapult the hero off
			if (Math.abs(this.velocity) > this.throwOffVelocity) {
				this.passenger.throwOffMount();
			}

			this.velocity = 0;
			this.speedX = 0;
			this.speedY = 0;
		}

		// clamp values
		let maxX = Game.camera.maxX + Game.camera.width;
		let maxY = Game.camera.maxY + Game.camera.height;
		this.x = Math.max(-map.origin.x, Math.min(this.x, maxX));
		this.y = Math.max(-map.origin.y, Math.min(this.y, maxY));

		// animation
		if (this.distanceTravelled > this.lastAnimatedDistance + this.animateDistance) {
			this.state++;
			this.lastAnimatedDistance += this.animateDistance;

			// tbd don't hardcode!
			if (this.direction === 1) {
				// up
				let state = (this.state % 7);

				this.crop = {
					x: (state % 3) * this.baseWidth,
					y: Math.floor(state / 3) * this.baseHeight,
					width: this.baseWidth,
					height: this.baseHeight
				}
			}
			else if (this.direction === 3) {
				// down
				let state = (this.state % 6);

				this.crop = {
					x: (state % 2) * this.baseWidth,
					y: Math.floor(state / 2) * this.baseHeight,
					width: this.baseWidth,
					height: this.baseHeight
				}
			}
			else if (this.direction === 4) {
				// right
				let state = (this.state % 13);

				this.crop = {
					x: (state % 4) * this.baseWidth,
					y: Math.floor(state / 4) * this.baseHeight,
					width: this.baseWidth,
					height: this.baseHeight
				}
			}
			else {
				// left
				let state = (this.state % 13);

				this.crop = {
					x: (3-(state % 4)) * this.baseWidth,
					y: Math.floor(state / 4) * this.baseHeight,
					width: this.baseWidth,
					height: this.baseHeight
				}
			}

			// hero bobbing
			if (this.state % 8 < 4) {
				this.rideAdjustY += 2;
			}
			else if (this.state % 8 >= 4) {
				this.rideAdjustY -= 2;
			}
		}

	}
}


// quest NPC (to be merged with merchant)
class NPC extends Character {
	constructor(properties) {
		super(properties);

		this.roles = properties.roles; // array of objects, containing anything that can happen when the NPC is touched

		this.meetable = properties.meetable === false ? false : true; // whether it can get added to Player.metNPCs (i.e. lost cat poster is not meetable)

		if (properties.addToObjectArrays !== false) {
			Game.allNPCs.push(this); // array for current area only
		}
	}
}

// NPC that walks around
class Villager extends NPC {
	constructor(properties) {
		super(properties);

		this.wait = 0; // total time spent waiting

		this.boundary = properties.boundary; // object of rectangle that the npc cannot walk out of (x, y, width, height)

		if (this.boundary === undefined && Areas[Game.areaName].villagerData !== undefined) {
			// random boundary from the villagerdata of the villager's area
			let locationIndex = Math.round(Game.villagers.length + (Game.villagerSeed*2)) % Game.villagerLocationArray.length;
			this.boundary = Game.villagerLocationArray[locationIndex];
		}

		// random position inside the boundary
		this.x = Random(this.boundary.x, this.boundary.x+this.boundary.width);
		this.y = Random(this.boundary.y, this.boundary.y+this.boundary.height);

		// information about how the npc should behave
		this.ai = {};
		this.ai.intelligentMovement = properties.intelligentMovement; // set to true if it stops moving as soon as it collides with something
	}

	// organises movement
	update (delta) { // VILLAGER update

		// remember initial postiion and state (used to change state if they try to move but can't, e.g. due to lead)
		let initialPosition = {x: this.x, y: this.y};
		let initialState;
		if (this.state !== undefined) {
			initialState = this.state.type;
		}

		// check if the NPC's behaviour state needs to be reassigned

		if (this.state === undefined) { // state has never been assigned
			if (Random(1,2) === 1) {
				this.initWaitState();
			}
			else {
				this.initMoveState();
			}
		}

		// movement
		else if (this.state.type === "move" && Dom.currentNPC.id !== this.id) { // (don't move if player is talking to them)

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

		// if on hero's lead, check not too far away from hero
		if (this.onLead) {
			let distanceFromHero = Game.distance(this, Game.hero);

			if (distanceFromHero > Player.inventory.weapon.leadRange) {
				let exceededDistance = distanceFromHero - Player.inventory.weapon.leadRange;

				if (exceededDistance > 30) {
					// break lead - too far for animal to move in one go (30 is arbitrary)
					this.onLead = undefined;
					Game.hero.hasOnLead = undefined;
				}
				else {
					// move towards hero for exceeded distance
					let bearing = Game.bearing(this, Game.hero);
					let dirx = Math.cos(bearing);
					let diry = Math.sin(bearing);
					this.x += dirx * exceededDistance;
					this.y += diry * exceededDistance;

					// set image based on direction of movement if there are multiple rotation images
					this.setRotationImage(dirx, diry);

					if (this.ai.intelligentMovement) {
						// wait instantly (rather than trying to move to location but "failing")
						this.initWaitState();
					}
				}
			}
		}

		// if trying to move but didn't move (e.g. due to lead, stunned, collision, etc.), change to wait state instead
		// initialState is checked to ensure it got a chance to move (hasn't just been switched to the state)
		if (this.state.type === "move" && initialState === "move" && Math.round(initialPosition.x) === Math.round(this.x) && Math.round(initialPosition.y) === Math.round(this.y)) {
			this.initWaitState();
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

		let dirx = 0;
		let diry = 0;

		// wind
		if (Game.wind !== undefined && !this.stats.windShield) {
			this.x += Game.wind.movex * delta;
			this.y += Game.wind.movey * delta;
		}

		// move if not too close to target
		if (!this.xInRange()) {
			dirx += Math.cos(this.bearing);
			this.x += dirx * this.speed * delta;
		}
		if (!this.yInRange()) {
			diry += Math.sin(this.bearing);
			this.y += diry * this.speed * delta;
		}

		// set image based on direction of movement if there are multiple rotation images
		this.setRotationImage(dirx, diry);

		// update foot hitbox position (required here because it doesn't collide)
		this.updateFootHitbox();
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

		if (!this.damageableByPlayer && properties.addToObjectArrays !== false) {
			// damageableByPlayer hasn't already been set to true (manually through properties)
			// ie hasn't yet been added to the array
			Game.damageableByPlayer.push(this);
		}
		this.damageableByPlayer = true; // all dummies are damageable by player
	}
}

// moves and attacks in a hostile way...
class Enemy extends Attacker {
	constructor(properties) {
		super(properties);

		if (!this.damageableByPlayer && properties.addToObjectArrays !== false) {
			// damageableByPlayer hasn't already been set to true (manually through properties)
			// ie hasn't yet been added to the array
			Game.damageableByPlayer.push(this);
		}
		this.damageableByPlayer = true; // all enemies are damageable by player
		// tbd make it so this isn't necessarily the case , i.e. for farm animals (probs by another property which can easily be switched to true or false so doesn't need to remove things from arrays etc)

		// lootTable: an array of objects for each loot item - these objects contain the item ("item") and chances of looting them ("chance")
		// if properties.lootTableTemplate is an array of lootTables (more than one template), merge them
		let lootTableTemplate = [];
		if (properties.lootTableTemplate !== undefined) {
			for (let i = 0; i < properties.lootTableTemplate.length; i++) {
				lootTableTemplate = lootTableTemplate.concat(properties.lootTableTemplate[i]);

				// validation
				if (typeof properties.lootTableTemplate[i] === "undefined") {
					console.error(this.name + " has undefined loot table template at index " + i + ".")
				}
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

		this.xpGiven = properties.xpGiven || 0;

		this.inventorySpace = properties.inventorySpace;

		// set when the enemy dies
		this.loot = null; // loot that can be picked up by player (null if the player cannot loot the enemy or already has)
		// loot is an array of objects, where the object has properties item and quantity

		// boss stuff
		if (this.hostility === "boss") {
			this.bossKilledVariable = properties.bossKilledVariable; // set to date killed to check it hasn't been killed today
			// validation
			if (typeof this.bossKilledVariable === "undefined") {
				console.error("No bossKilledVariable for " + this.name);
			}
			// set the variable if it has not been set before
			if (Player.bossesKilled[this.bossKilledVariable] === undefined) {
				Player.bossesKilled[this.bossKilledVariable] = 0;
			}
		}


		// blood moon modifiers
		if (Event.time === "bloodMoon") {
			// respawn faster
			this.stats.lootTime /= 2;
			this.stats.respawnTime /= 2;
			// double health and damage
			this.stats.maxHealth *= 2;
			this.health = this.stats.maxHealth;
			this.stats.damage *= 2;
		}


		// behaviour functions
		// used for special behaviour in update()
		// note the scope of these functions is the behaviour object
		if (properties.behaviour !== undefined) {
			this.behaviourMain = properties.behaviour.main; // to be run before movement/attacking
			this.behaviourMovement = properties.behaviour.movement; // to be run before movement/attacking
		}

		//
		// combat behaviour
		//

		if (typeof properties.attackBehaviour === "undefined") { // where attack ai stats are held
			properties.attackBehaviour = {};
		}

		this.alwaysMove = properties.attackBehaviour.alwaysMove || false; // move even when in range

		this.okToStutter = properties.attackBehaviour.okToStutter || false; // tbd should be removed with a better system, but for now this means that it can move even if directly on top of its target (i.e. marshall sheridan with his logs)

		this.noCollision = properties.attackBehaviour.noCollision || false; // don't collide with anything

		this.attackTargets = [];
		let heroBaseAggro;
		if (typeof properties.attackBehaviour.baseAggro !== "undefined") {
			heroBaseAggro = properties.attackBehaviour.baseAggro;
		}
		else if (this.hostility === "neutral") {
			heroBaseAggro = 0;
		}
		else {
			heroBaseAggro = 3.5;
		}
		heroBaseAggro *= Game.hero.stats.enemyAggro / 100;
		// hero is always a target
		this.attackTargets.push({
			target: Game.hero,
			aggro: 0, // increases by the percentage of health dealt to character (10% dealt -> aggro increased by 1)
			baseAggro: heroBaseAggro, // added to aggro, constant value (this is effectively a leashradius of 350 pixels, increased by aggro)
			lastAttacked: undefined, // the time in ms since this character was last attacked. if it was longer ago than forgivenessTime, then the aggro halves each second
		});
		// 100(aggro+baseAggro)/distance is used to decide whether it is worth them attacking each target (above their attackThreshold)
		// 1 aggro is effectively 100 leash radius

		this.forgivenessTime = properties.attackBehaviour.forgivenessTime || 4000; // if this is negative then they never forgive you (:
		this.forgivenessRate = properties
		this.attackThreshold = properties.attackBehaviour.attackThreshold || 1; // aggro-distance quotients below this aren't attacked

		if (typeof properties.attackTargets !== "undefined") {
			// for anything they should target other than hero
			for (let i = 0; i < properties.attackTargets.length; i++) {
				let target = properties.attackTargets[i].target();
				if (typeof target !== "undefined" && target !== false) {
					let targetBaseAggro = properties.attackTargets[i].baseAggro || properties.attackBehaviour.baseAggro || 0;
					targetBaseAggro *= target.stats.enemyAggro / 100;
					this.attackTargets.push({
						target: target,
						aggro: 0,
						baseAggro: targetBaseAggro,
						requirement: properties.attackTargets[i].requirement // this is a dynamic requirement that is checked every tick. for a requirement that is just checked on area load, put this in .target
					});
				}
			}
		}

		this.jointAggro = properties.jointAggro; // function that returns *array* of enemies which also gain aggro when this is attacked

		// make array of targets that should be damaged by each projectile, from attackTargets
		this.canDamage = this.attackTargets.map(target => target.target);
	}

	// we are in enemy class - this is called every time update is called
	update (delta) { // ENEMY update
		// update aggros
		for (let i = 0; i < this.attackTargets.length; i++) {
			let target = this.attackTargets[i];

			// update lastAttacked times
			if (typeof target.lastAttacked === "undefined") {
				target.lastAttacked = 0;
			}
			target.lastAttacked += delta*1000; // everything in ms

			if (this.forgivenessTime >= 0 && target.lastAttacked > this.forgivenessTime) {
				// target is being forgiven for their aggression...
				if (typeof target.aggroBeforeForgiveness === "undefined") {
					// init forgiveness (this variable is reset on damage being dealt to the enemy)
					target.aggroBeforeForgiveness = target.aggro; // this is the initial aggro before the forgiveness started, so it can be calculated using exponential decay
				}

				let timeSinceForgiveness = target.lastAttacked - this.forgivenessTime; // this is the time they have been forgiven for
				target.aggro = target.aggroBeforeForgiveness / Math.pow(2, timeSinceForgiveness/1000); // exponential decay
			}
		}

		let moved = false; // whether character has called this.move

		if (this.hasStatusEffect("Displacement")) {
			// being displaced!
			this.displace(delta);

			this.updateFootHitbox();
		}
		else if (this.hasStatusEffectType("stun") || this.hasStatusEffectType("root")) {
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

				// run function for special behaviour if one exists
				// if it exists and returns false, none of the normal behaviour will be run
				if (this.behaviourMain === undefined || this.behaviourMain()) {

					let target;

					// run function for special movement behaviour if one exists
					// if it exists and returns false, default will occur (see else...)
					if (this.behaviourMovement !== undefined) {
						target = this.behaviourMovement();
						if (typeof target === "undefined" || target === false) {
							target = this.calculateTarget();
						}
					}
					else {
						target = this.calculateTarget(); // based off of aggro etc
					}

					let targetDist;
					if (typeof target !== "undefined") {
						targetDist = Game.distance(this, target);
					}

					// find a spell that is not on cooldown and can be cast
					// TBD enemy mana?
					let spellIndex = -1;
					if (this.spells.length !== 0) {
						// enemy has some spells
						spellIndex = this.spells.findIndex(spell => spell.ready &&
							(spell.castCondition === undefined || spell.castCondition.call(this, this))); // this is passed in as a parameter and as the object calling the function
					}

					if (spellIndex !== -1) {
						// a spell has been found that can be cast
						let spell = this.spells[spellIndex];
						// no longer ready
						spell.ready = false;
						// cast the spell
						this.channelSpell(spell.id, spell.tier, spell.parameters.call(this));
						// spell interval (how often it is cast by enemy)
						Game.setTimeout(function (spellIndex) {
							this.spells[spellIndex].ready = true;
						}.bind(this), spell.interval, [spellIndex]);
					}

					else if (typeof target !== "undefined") {

						if (targetDist < this.stats.range) { // target is within range of attacking

							// see if target appears in attackTargets
							let attackTarget = false;
							for (let i = 0; i < this.attackTargets.length; i++) {
								if (this.attackTargets[i].target.id === target.id && (typeof this.attackTargets[i].requirement === "undefined" || this.attackTargets[i].requirement(this.attackTargets[i].target))) {
									attackTarget = true;
									break;
								}
							}
							// I think target should always be in attack targets... but just in case...
							if (!attackTarget) {
								console.error("A target was found that's not in attack targets! Please tell Jake. ", target)
							}

							// enemy should attack target
							// canAttack is inside if statement because otherwise the enemy moves when it is in range but cannot attack
							if (this.canAttack && attackTarget) { // projectile can be shot
								// even though projectile is aimed at target, it can hit all enemies in attackTarget
								this.shoot([this.canDamage], target);
							}

							// alwaysMove stat means that it always moves even when in range

							else if (this.alwaysMove && (this.okToStutter || targetDist >= this.stats.walkSpeed * delta)) { // stop any stuttering on top of target
								this.move(delta, target);
								moved = true;
							}
						}

						// move normally
						else {
							this.move(delta, target);
							moved = true;
						}

					}

					else {
						// no targets , passive behaviour . . .
					}

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

		// must call this.move if there is wind
		if (!moved && Game.wind !== undefined) {
			this.move(delta, false);
		}
	}

	// move towards entity/location (towards parameter)
	// towards can be set to false if no movement (other than wind) should occur
	move (delta, towards) {
		// figure out speed
		this.setSpeed();

		let dirx = 0;
		let diry = 0;

		if (towards !== false) {
			this.bearing = Game.bearing(this, towards); // update bearing (maybe doesn't need to be done every tick?)

			dirx = Math.cos(this.bearing);
			diry = Math.sin(this.bearing);

			// set image based on direction of movement if there are multiple rotation images
			this.setRotationImage(dirx, diry);
		}

		// wind
		if (Game.wind !== undefined && !this.stats.windShield) {
			this.x += Game.wind.movex * delta;
			this.y += Game.wind.movey * delta;
		}

		this.x += dirx * this.speed * delta;
		this.y += diry * this.speed * delta;

		// collide with solid tiles
		if (!this.noCollision) {
			this.collide(dirx * this.speed, diry * this.speed, delta);
		}
	}

	// shoot projectile at array of arrays of enemies (targets)
	// it is fired in the direction of "at".
	shoot (targets, at) {
		this.canAttack = false;

		let projectileX, projectileY, projectileRotate, projectileDirection; // projectileRotate is cosmetic, projectileDirection mathematical movement direction

		projectileDirection = Game.bearing(this, at);

		if (this.projectileType === "instant") {
			// i.e. melee projectiles ; can't be dodged through movement
			projectileX = at.x;
			projectileY = at.y;

			// variance in position
			if (typeof this.stats.positionVariance !== "undefined") {
				if (this.stats.positionVariance > 0) {
					let RandomDistance = Random(0, this.stats.positionVariance * this.stats.positionVariance);
					let RandomAngle = Random(0, Math.PI * 2);
					projectileX.x += Math.sqrt(RandomDistance) * Math.cos(RandomAngle);
					projectileY.y += Math.sqrt(RandomDistance) * Math.sin(RandomAngle);
				}
			}
		}
		else if (this.projectileType === "snake") {
			// i.e. fissure-like projectiles ; individual instances can't be dodged through movement
			projectileX = this.x;
			projectileY = this.y;

			// not any variance yet
		}
		else if (this.projectileType === "travelling") {
			// i.e. ranged projectiles ; can be dodged through movement
			projectileX = this.x;
			projectileY = this.y;

			// variance in angle (in degrees)
			if (typeof this.stats.variance !== "undefined") {
				projectileDirection += ToRadians(Random(-this.stats.variance, this.stats.variance));
			}
		}

		// set image based on direction of projectile (if there are multiple rotation images for this character)
		// sin and cos wrong direction because pi/2 was added to it
		this.setRotationImage(Math.sin(projectileRotate), Math.cos(projectileRotate));

		this.channellingProjectileId = Game.nextEntityId;

		// save projectile into variable
		let shotProjectile = new Projectile({ // ENEMY projectile
			map: map,
			name: this.name + " Projectile",
			x: projectileX,
			y: projectileY,
			attacker: this,
			projectileStats: this,
			targets: targets,
			width: this.projectile.width,
			height: this.projectile.height,
			adjust: {
				x: this.projectile.adjust.x || undefined,
				y: this.projectile.adjust.y || undefined,
				towards: this.projectile.adjust.towards || undefined,
			},
			image: this.projectile.image,
			type: "projectiles",
			// optional...
			moveDirection: projectileDirection,
			moveSpeed: this.stats.projectileSpeed,
			moveAcceleration: this.stats.projectileAcceleration,
			projectileRange: this.stats.projectileRange,
			stopMovingOnDamage: this.stats.projectileStopMovingOnDamage,
		});

		Game.projectiles.push(shotProjectile); // add projectile to array of projectiles

		// onAttack function for enemy
		if (this.stats.onAttack !== undefined) {
			this.stats.onAttack();
		}

		// wait to shoot next projectile
		Game.setTimeout(function () {
			this.canAttack = true;
		}.bind(this), this.stats.reloadTime);

		// after a timeout (2s), remove the projectile that was just shot
		// taken from Player
		//shotProjectile.startRemoveTimeout();//aaaaaaaaaaaaaaaaaaaaaaa
		this.channellingProjectileId = null;
	}

	// calculates target to move towards & attack from aggro and distances
	calculateTarget () {
		let currentMaximum = this.attackThreshold;

		let currentTarget = undefined;

		if (Game.creativeMode) {
			return currentTarget;
		}

		for (let i = 0; i < this.attackTargets.length; i++) {
			let target = this.attackTargets[i];
			// check that target is not stealthed OR they are and this is touching them. also check they're not dead lol. and check requirement function
			if ((!target.target.stats.stealthed || this.isTouching(target.target)) && !target.target.isCorpse && !target.target.respawning && (typeof target.requirement === "undefined" || target.requirement(target.target))) {
				let distance = Game.distance(this, target.target);
				let aggro = target.aggro + target.baseAggro;

				// if distance is less than 100 (maybe change?) then 100 is the value used for aggro quotient
				distance = Math.max(100, distance);

				let aggroQuotient = aggro / distance * 100; // what the target is calculated based off of

				target.aggroQuotient = aggroQuotient; // for ease of testing in console

				if (aggroQuotient >= currentMaximum) {
					currentTarget = target.target;
					currentMaximum = aggroQuotient;
				}
			}
		}

		return currentTarget;
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

		this.onClose = properties.onClose; // function called when loot chest closed

		this.chestKey = properties.chestKey; // the item required to open the chest (and removed once it is opened)
		// if the chest cannot be opened because of the lack of a key, the player is told about this in chat

		// chest is locked if the chest requires a chestKey
		// note that this property is reset on areaChange (hence the chest has either been removed or will be locked again when the player returns)
		this.locked = false;
		if (this.chestKey !== undefined) {
			this.locked = true;
		}
	}

	// returns choose array object
	openLoot (arrayIndex) {
		return {
            npc: this,
            buttons: ["Loot chest"],
            functions: [function (chest) {
                Dom.loot.page(chest.name, chest.loot);
                Dom.loot.currentId = "c"+arrayIndex;
                // "c"+i is a string that allows the loot menu to be identified - c means chest, and arrayIndex is the index of the enemy in Game.chests
                // the loot menu closes when the area changes anyway, so this will always work
                // Dom.loot.currentId is only ever used in main, in the function Game.lootClosed() (called by index.html)
            }],
            parameters: [[this]]
        };
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
				Game.setTimeout(function () {
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

				Game.setTimeout(function () {
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

		// offset from its otherwise default position (i.e. for screen shake)
		// currently ONLY works with screen shake (incompatible with another offset at the same time using this variable - might want to change that in the future tbd!)
		this.offsetX = 0;
		this.offsetY = 0;
	}

	// maximum x and y positions
	// sets this.maxX and this.maxY
	setMaxClampValues () {
		if (this.map.scrollX === false) {
			// do not scroll in the x axis
			this.maxX = 0;
		}
		else {
			this.maxX = this.map.cols * this.map.tsize - this.width - map.origin.x;
		}

		if (this.map.scrollY === false) {
			// do not scroll in the y axis
			this.maxY = 0;
		}
		else {
			this.maxY = this.map.rows * this.map.tsize - this.height - map.origin.y;
		}
	}

	follow (sprite) {
		// stop panning (if camera was panning)
		this.panTowards = undefined;

	    this.following = sprite;
	    sprite.screenX = 0;
	    sprite.screenY = 0;
	}

	// pan towards a location
	// towards should be an object with an x and y value (could be a charatcer)
	// towards is where you want the centre of the camera to be when it finishes
	// movementType should either be "constant" (default) or "accelerate" based on how the camera's speed should vary
	// for "accelerate" movementType, speed is the average speed used
	// afterPanFunction and afterPanTime are optional for a function to be called a set time after the location is reached (e.g. to make it follow player again)
	pan (towards, speed, movementType, afterPanFunction, afterPanTime) {
		// stop following a character (if one was being followed)
		this.following = undefined;

		this.panTowards = towards; // clamped and changed to camera top left in update (so it can act dynamically on user positions)

		this.panSpeed = speed;
		this.panMovementType = movementType || "constant";

		if (this.panMovementType === "accelerate") {
			let panTowards = this.generateCameraPosition(this.panTowards);

			this.panMidpoint = {x: (panTowards.x+this.x)/2, y: (panTowards.y+this.y)/2}; // location of highest speed
			this.panDistanceTotal = Game.distance(this, panTowards); // for calculating proportion of distance travelled
		}

		this.afterPanFunction = afterPanFunction;
		this.afterPanTime = afterPanTime;
	}

	// called on loadArea or hero move
	// parameter init is set to true if this is being called on area change
	update (delta, init) { // CAMERA update
		if (this.following !== undefined || this.panTowards !== undefined) {
			// a reason to move

			// so that movedX and movedY can be calculated with new x and y positions of camera
			let oldX = this.x;
			let oldY = this.y;

			if (this.following !== undefined) {
				// camera is following a sprite

			    // assume followed sprite should be placed at the center of the screen whenever possible
			    this.following.screenX = this.width / 2 + Game.viewportOffsetX - this.offsetX;
			    this.following.screenY = this.height / 2 + Game.viewportOffsetY - this.offsetY;

				// make the camera follow the sprite
				this.x = this.following.x - this.width / 2;
				this.y = this.following.y - this.height / 2;
			}

			else if (this.panTowards !== undefined) {
				// camera is not following a particular sprite (rather is panning towards a particular location)

				// change panTowards to be top left of camera instead of centre (since this is what camera x and y uses), and clamp values
				let panTowards = this.generateCameraPosition(this.panTowards);

				if (!Game.isAtLocation(this, panTowards)) {

					// not reached pan location yet
					let panBearing = Game.bearing(this, panTowards);

					// check what speed the camera should be moving at
					let speed = this.panSpeed;
					if (this.panMovementType === "accelerate") {
						// speed should vary based on distance to location (fastest at midpoint)
						let panDistance = Game.distance(this, this.panMidpoint);
						let distanceFraction = panDistance / (this.panDistanceTotal/2);
						speed *= 0.5 + (1-distanceFraction);
					}

					// move camera
				    this.x += Math.cos(panBearing) * speed * delta;
				    this.y += Math.sin(panBearing) * speed * delta;
				}

				else {
					// reached pan location, stay at this location until told to do otherwise
					this.panTowards = undefined;

					// function to be called after a certain time period (optional)
					if (this.afterPanFunction !== undefined) {
						Game.setTimeout(this.afterPanFunction, this.afterPanTime);
					}

					// other variables are reset anyway next time this.pan() is called
				}
			}

		    // clamp values between 0 and maxX/Y
		    this.x = Math.max(-map.origin.x, Math.min(this.x, this.maxX));
		    this.y = Math.max(-map.origin.y, Math.min(this.y, this.maxY));

			// screen shake overrides clamping
			this.x += this.offsetX;
			this.y += this.offsetY;

			if (this.following !== undefined) {
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
			}

			// distance moved by camera in both directions (for weather to be moved by)
			// calculated by difference in old x/y and new x/y
			let movedX = this.x - oldX;
			let movedY = this.y - oldY;

			// move weather!
			if (document.getElementById("weatherOn").checked && !Areas[Game.areaName].indoors) {
				if (Weather.particleArray.length > 0 && init !== true) {
					Weather.heroMove(movedX, movedY);
				}
			}
		}
	}

	// from the coordinates that the camera should go to (e.g. centre of an entity), convert it to a positoin that is compatible with the camera
	// position is an object that contains an x and y property
	generateCameraPosition (position) {
		// change values to be top left of camera instead of centre (since this is what camera x and y uses)
		let cameraPosition = {
			x: position.x - this.width/2,
			y: position.y - this.height/2
		};

		// clamp values
		cameraPosition.x = Math.max(-map.origin.x, Math.min(cameraPosition.x, this.maxX));
		cameraPosition.y = Math.max(-map.origin.y, Math.min(cameraPosition.y, this.maxY));

		return cameraPosition;
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

	// intensity is max pixels in either direction that screen shakes
	initScreenShake (intensity, time) {
		this.screenShakeInterval = Game.setInterval(this.screenShakeTick.bind(this), 50, intensity);
		// stop screen shake after time ms
		Game.setTimeout(this.endScreenShake.bind(this), time);
	}

	// called every 200ms by this.initScreenShake
	screenShakeTick (intensity) {
		if (this.offsetX < intensity && (this.offsetX <= -intensity || Random(0,1) === 0)) {
			this.offsetX += intensity/3;
		}
		else {
			this.offsetX -= intensity/3;
		}

		if (this.offsetY < intensity && (this.offsetY <= -intensity || Random(0,1) === 0)) {
			this.offsetY += intensity/3;
		}
		else {
			this.offsetY -= intensity/3;
		}
	}

	// called by this.initScreenShake
	endScreenShake () {
		this.offsetX = 0;
		this.offsetY = 0;
		Game.clearInterval(this.screenShakeInterval);
	}
}

//
// Status effects
//

// status effect constructor
function statusEffect(properties) {
	this.title = properties.title; // displayed title
	this.effect = properties.effect; // displayed effect (displayed in the DOM as a description of the status effect, in player stats)

	this.info = properties.info || {}; // extra information (e.g: total time of status effect; poison damage and length)
	Object.assign(this.info, properties.extraInfo); // some additional information that is specific to the status effect might be stored in info

	this.tick = properties.tick; // function to be carried out every second

	this.image = properties.image; // image to be shown

	this.type = properties.type; // status effect type

	this.changedStat = properties.changedStat; // used to change back changed stat on expire (same name as key name in target.stats)

	this.hidden = properties.hidden; // not visible to player

	this.showInfoBar = properties.showInfoBar // infobar shown about status effect (with text properties.infoBarText)
}

// check through owner's status effects to see which can be removed (due to having run out of time)
// called by a status effect's own tick function
// might need to be reworked (tbd)
// tbd rework to be like Game.removeStealthEffects
Game.removeExpiredStatusEffect = function (owner) {
	for (let i = 0; i < owner.statusEffects.length; i++) { // iterate through owner's status effects
		// check that the status effect can expire
		if (typeof owner.statusEffects[i].info.time !== "undefined" && typeof owner.statusEffects[i].info.ticks !== "undefined") {
			// check if it has expired
			if (owner.statusEffects[i].info.ticks >= owner.statusEffects[i].info.time) {
				owner.removeStatusEffect(i, "time"); // remove it, also calling onExpire
				i--;
			}
		}
	}
}

// remove stealth status effect once stealth has expired elsewhere (this function is called when stealth expires)
Game.removeStealthEffects = function (owner) {
	if (!owner.stats.stealthed) { // confirm owner is not stealthed
		// remove all stealth status effects
		for (let i = 0; i < owner.statusEffects.length; i++) {
			if (owner.statusEffects[i].info.stealth === true) {
				owner.removeStatusEffect(i, "stealth");
				i--;
			}
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
			attacker.removeStatusEffect(index, "curse"); // remove the status effect from the attacker
		}
	}
	// refresh canvas status effects if hero was given status effect
	if (victim.constructor.name === "Hero") {
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
		|| target.statusEffects[i].title === "On a path"
		|| target.statusEffects[i].title === "In the tall grass")
		&& target.statusEffects[i].title !== keep) {
			// remove status effect
			target.removeStatusEffect(i, "environment");
		}
	}
};

// status effect function array
// so that Hero's status effects can be saved with progress saving (and returned their functions in Game.initStatusEffects)
Game.statusEffects.functions = {
	// generic tick function for all timed status effects
	tick: function (owner, timeTicked) { // decrease time
		if (this.info.ticks < this.info.time) { // check effect has not expired
			// call onTick
			if (this.onTick !== undefined) {
				this.onTick(owner);
			}

			this.info.ticks += timeTicked / 1000; // timeTicked is in ms
			if (owner.constructor.name === "Hero") { // refresh canvas status effects if the status effect was applied to player
				Game.hero.updateStatusEffects();
			}

			// infobar time
			if (this.showInfoBar && this.info.time !== undefined && Game.minigameInProgress === undefined) {
				document.getElementById("infobarTimeRemaining").innerHTML = Round(this.info.time - this.info.ticks) + "s";
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
			this.tickTimeout = Game.setTimeout(function (owner, nextTickTime) {
				// nextTickTime is timeTicked
				this.tick(owner, nextTickTime);
			}.bind(this), nextTickTime, [owner, nextTickTime]);
		}

		if (this.info.ticks >= this.info.time) { // remove effect interval

			// remove effect
			Game.removeExpiredStatusEffect(owner);
		}
	},

	// decreases target's stat (changedStat) by value info[changedStat]
	decreaseStat: function (target) {
		if (target.stats[this.changedStat] !== undefined) {
			// stat exists
			target.stats[this.changedStat] -= this.info[this.changedStat];
		}
		else {
			console.error("Stat " + this.changedStat + " does not exist, but status effect " + this.title + " wants to decrease it. Please tell Jake!");
		}
	},

	//
	// please try to keep the following in alphabetical order :)
	//

	// xp onExpire
	decreaseXP: function (target) {
		target.stats.xpBonus -= this.info.xpIncrease;
	},

	// fire onTick
	fireTick: function (owner) {
		let fireImmune = owner.hasStatusEffectType("fireResistance"); // can't take fire damage when fire immune
		// tbd move fireImmune checking to takeDamage, and pass in a damage type (e.g. fire) to takeDamage?

		if (!fireImmune) {
			owner.takeDamage(this.info.fireDamagePerSecond);
		}
	},

	// food onTick
	foodTick: function (owner) {
		Game.restoreHealth(owner, Round(this.info.healthRestore / this.info.time, 1), this.info.bloodMoonRestore); // 1dp
	},

	// poison onTick
	poisonTick: function (owner) {
		owner.takeDamage(this.info.poisonDamage / this.info.time);
	},

	// stealth onExpire
	stealthRemove: function (target) {
		// remove stealth effect
		target.stats.stealth = false;
		Game.removeStealthEffects(target);
	},

	// end displacement effect
	removeDisplacement: function (target) {
		target.isBeingDisplaced = undefined;
		target.setExpandZ(1);
	},

	// remove the trail trailName
	removeTrail: function (target, trailName) {
		target.removeTrail(trailName);
	},

	resetExpand: function (target) {
		target.setExpand(1);
	},

	// reset target's image back to its "initialImage" (e.g. for hex)
	// also reset its dimensions
	resetImage: function (target) {
		target.resetImage();
	},

	// used in minigames after stun effect instead of death
	respawnHero: function (target) {
		target.health = target.stats.maxHealth/2;

		target.isCorpse = false;
		target.respawning = false;
	},

	// restorative timepiece (Items.item[15]) onExpire
	setHealth: function (target) {
		target.health = this.info.oldHealth;
	},

	// slow status effect applied on expire
	// slowAmount and slowTime are required in this.info (where this is the status effect that is expiring)
	slow: function (target) {
		Game.statusEffects.walkSpeed({
			target: target,
			effectTitle: this.info.slowEffectTitle || "Slowed",
			speedIncrease: -this.info.slowAmount,
			time: this.info.slowTime,
		});
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
			info: { // status effect in-game behaviour info (time remaining, etc.) - tbd needs removing..
				curse: properties.curse, // transferred on to enemies on attack
				worksForGames: properties.worksForGames, // also works in games such as tag (for speed status effects that normally wouldn't)
				showTime: typeof properties.showTime==="undefined"?true:false,
				removeOnAttack: properties.removeOnAttack, // if the status effect should be removed after player attacking - currently just works for player!
			},
			extraInfo: properties.extraInfo, // extra properties to be added to info
			image: properties.imageName,
			type: properties.type,
			changedStat: properties.changedStat, // used to change back changed stat on expire (same name as key name in target.stats)
			hidden: properties.hidden, // not visible to player
			showInfoBar: properties.showInfoBar // infobar shown about status effect (with text properties.infoBarText + colour properties.infoBarColour)
		}));

		// the status effect that was just added
		// "bound" to the original status effect - if this is editied, it is as well
		let addedStatusEffect = properties.target.statusEffects[properties.target.statusEffects.length - 1];

		// check if the status effect has an increaseProperty
		if (properties.increasePropertyName !== undefined) {
			// set the property of the status effect that says the increased stat
			addedStatusEffect.info[properties.increasePropertyName] = properties.increasePropertyValue;
		}

		// check for hidden status effect
		if (properties.hidden === true) {
			properties.target.numberOfHiddenStatusEffects++; // necessary for status effect display
		}

		if (properties.time !== undefined) {
			// timed status effect

			// add time properties
			addedStatusEffect.info.time = properties.time;
			addedStatusEffect.info.ticks = 0;

			// add functions
			// properties.onExpire and properties.onTick are the key names from Game.statusEffects.functions
			// however they can also be an object, with their location as "itemdata" and a type and id if they want to refer to an item's onExpire on onTick intead
			if (properties.onExpire !== undefined) {
				// onExpire is called when the statuseffect expires naturally (not removed)
				// can also be called on remove if properties.callExpireOnRemove is set to true
				// this is bound to the status effect (hence this.owner and this.info work)

				// find source of onExpire
				if (properties.onExpire.location === undefined) {
					// onExpire in Game.statusEffects.functions
					addedStatusEffect.onExpire = this.functions[properties.onExpire].bind(addedStatusEffect);
				}
				else if (properties.onExpire.location === "itemdata") {
					// onExpire in itemdata
					addedStatusEffect.onExpire = Items[properties.onExpire.type][properties.onExpire.id].onExpire.bind(addedStatusEffect);
				}

				// reference for savedata (used if the target is Game.hero)
				addedStatusEffect.onExpireSource = properties.onExpire; // key name of function reference in Game.statusEffects.functions

				addedStatusEffect.callExpireOnRemove = properties.callExpireOnRemove; // whether exire should be called on remove of the status effect (not just for time over)

				addedStatusEffect.onExpireParams = properties.onExpireParams; // must be an array! since spread syntax is used
				if (typeof addedStatusEffect.onExpireParams === "undefined") {
					addedStatusEffect.onExpireParams = [];
				}
			}
			if (properties.onTick !== undefined) {
				// this is bound to the status effect (hence this.owner and this.info work)

 				// find source of onTick
 				if (properties.onTick.location === undefined) {
 					// onTick in Game.statusEffects.functions
 					addedStatusEffect.onTick = this.functions[properties.onTick].bind(addedStatusEffect);
 				}
 				else if (properties.onTick.location === "itemdata") {
					// onTick in itemdata
					addedStatusEffect.onTick = Items[properties.onTick.type][properties.onTick.id].onTick.bind(addedStatusEffect);
 				}

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
			addedStatusEffect.tickTimeout = Game.setTimeout(function (owner, nextTickTime) {
				// nextTickTime is timeTicked
				this.tick(owner, nextTickTime);
			}.bind(addedStatusEffect), nextTickTime, [properties.target, nextTickTime]);

		}

		// status effect infobar display
		if (properties.showInfoBar === true) {
			if (Dom.elements.infoBar.innerHTML === "") {
				// infobar not occupied
				Dom.infoBar.page(properties.infoBarText + " <span id='infobarTimeRemaining'></span>", properties.infoBarColour);
				// infobar time
				if (addedStatusEffect.info.time !== undefined) {
					document.getElementById("infobarTimeRemaining").innerHTML = properties.time + "s";
				}
				// information for status effect init on refresh
                addedStatusEffect.infoBarText = properties.infoBarText;
                addedStatusEffect.infoBarColour = properties.infoBarColour;
			}
			else {
				console.error("The infobar was already occupied but was requested by status effect " + properties.effectTitle + ". Please tell Jake or Peter!");
			}
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
	// see if the target is in water
	let immune = properties.target.statusEffects.find(statusEffect => statusEffect.title === "Swimming");

	if (immune === undefined) {
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
			newProperties.tier = "";
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

	if (!properties.target.stats.unstoppable) {
		this.generic(newProperties);

		// remove what target is channelling
		if (properties.target.removeChannelling !== undefined) {
			properties.target.removeChannelling("stun");
		}
	}
}

// give target the rooted debuff
// just target and time parameters required
Game.statusEffects.root = function (properties) {
	let newProperties = properties;
	newProperties.effectTitle = properties.effectTitle || "Rooted";
	newProperties.effectDescription = properties.effectDescription || "Cannot move";
	newProperties.imageName = "rooted";
	newProperties.type = "root";

	if (!properties.target.stats.unstoppable) {
		this.generic(newProperties);
	}
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
		if (typeof properties.imageName === "undefined") {
			newProperties.imageName = "speedUp";
		}
		newProperties.type = "speed";
	}
	else {
		if (typeof properties.imageName === "undefined") {
			newProperties.imageName = "speedDown";
		}
		newProperties.type = "slow";
	}
	if (newProperties.type === "speed" || !newProperties.target.stats.unstoppable) {
		this.generic(newProperties);
	}
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
	if (properties.defenceIncrease > 0) {
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
	newProperties.extraInfo = {bloodMoonRestore: properties.bloodMoonRestore}; // whether health should be restored during blood moon
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
	// first check that the target can actually be hexxed
	let targetImmune = typeof Player.inventory.weapon.hexImmuneSpecies !== "undefined" && Player.inventory.weapon.hexImmuneSpecies.includes(properties.target.species);

	if (!properties.target.stats.unstoppable && !targetImmune) {
		let newProperties = properties;
		newProperties.effectTitle = properties.effectTitle || "Hexxed",
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
			// specified image (as array of objects)
			let imageIndex = Random(0, properties.image.length-1);
			imageName = properties.image[imageIndex].imageName;
			rotationImages = properties.image[imageIndex].rotationImages;
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
}

// give target a dodge chance buff
// properties includes target, effectTitle, statIncrease, time
Game.statusEffects.dodgeChance = function(properties) {
	let newProperties = properties;
	newProperties.effectDescription = properties.effectDescription || this.generateEffectDescription(properties.statIncrease, "% dodge chance");
	newProperties.increasePropertyName = "dodgeChance";
	newProperties.increasePropertyValue = properties.statIncrease;
	newProperties.imageName = "dodgeChance";
	newProperties.type = "dodgeChance";

	// increase dodge chance
	properties.target.stats.dodgeChance += properties.statIncrease;
	// decrease after expire
	newProperties.changedStat = "dodgeChance";
	newProperties.onExpire = "decreaseStat";

	this.generic(newProperties);
}

// give target a health regen buff
// properties includes target, effectTitle, statIncrease, time
Game.statusEffects.healthRegen = function(properties) {
	let newProperties = properties;
	newProperties.effectDescription = properties.effectDescription || this.generateEffectDescription(properties.statIncrease, " health regen");
	newProperties.increasePropertyName = "healthRegen";
	newProperties.increasePropertyValue = properties.statIncrease;
	newProperties.imageName = "healthRegen";
	newProperties.type = "healthRegen";

	// increase dodge chance
	properties.target.stats.healthRegen += properties.statIncrease;
	// decrease after expire
	newProperties.changedStat = "healthRegen";
	newProperties.onExpire = "decreaseStat";

	this.generic(newProperties);
}

// give target fire res
// properties includes target, effectTitle, time
Game.statusEffects.fireResistance = function(properties) {
	let newProperties = properties;
	newProperties.effectTitle = properties.effectTitle || "Fire Resistance";
	newProperties.effectDescription = properties.effectDescription || "Immune to fire damage";
	newProperties.imageName = "fireResistance";
	newProperties.type = "fireResistance";

	this.generic(newProperties);
}

// give target water walking
// properties includes target, effectTitle, time
// tbd only works for player currently
Game.statusEffects.waterWalking = function(properties) {
	let newProperties = properties;
	newProperties.effectTitle = properties.effectTitle || "Water Walking";
	newProperties.effectDescription = properties.effectDescription || "Can walk on water and other similar substances";
	newProperties.imageName = "waterWalking";
	newProperties.type = "waterWalking";

	this.generic(newProperties);
}



// get the icon number of the status effect object (passed in) in Game.statusImage
Game.getStatusIconNumber = function (statusEffect) {
	let iconNum = null;
	if (statusEffect.image === "bait") {
		iconNum = 0;
	}
	else if (statusEffect.image === "defenceUp") {
		iconNum = 1;
	}
	else if (statusEffect.image === "speedDown") {
		iconNum = 2;
	}
	else if (statusEffect.image === "fire") {
		iconNum = 3;
	}
	else if (statusEffect.image === "food") {
		iconNum = 4;
	}
	else if (statusEffect.image === "lifesteal") {
		iconNum = 5;
	}
	else if (statusEffect.image === "mud") {
		iconNum = 6;
	}
	else if (statusEffect.image === "poison") {
		iconNum = 7;
	}
	else if (statusEffect.image === "speedUp") {
		iconNum = 8;
	}
	else if (statusEffect.image === "stealth") {
		iconNum = 9;
	}
	else if (statusEffect.image === "damageUp") {
		iconNum = 10;
	}
	else if (statusEffect.image === "stunned") {
		iconNum = 11;
	}
	else if (statusEffect.image === "timer") {
		iconNum = 12;
	}
	else if (statusEffect.image === "defenceDown") {
		iconNum = 13;
	}
	else if (statusEffect.image === "water") {
		iconNum = 14;
	}
	else if (statusEffect.image === "damageDown") {
		iconNum = 15;
	}
	else if (statusEffect.image === "xpUp") {
		iconNum = 16;
	}
	else if (statusEffect.image === "xpDown") {
		iconNum = 17;
	}
	else if (statusEffect.image === "dodgeChance") {
		iconNum = 18;
	}
	else if (statusEffect.image === "fireResistance") {
		iconNum = 19;
	}
	else if (statusEffect.image === "healthRegen") {
		iconNum = 20;
	}
	else if (statusEffect.image === "bamboozle") {
		iconNum = 21;
	}
	else if (statusEffect.image === "gloop") {
		iconNum = 22;
	}
	else if (statusEffect.image === "rooted") {
		iconNum = 23;
	}
	else if (statusEffect.image === "waterWalking") {
		iconNum = 24;
	}
	else { // no status effect image
		iconNum = 3; // fire image used as placeholder
		console.error("Status effect " + statusEffect.title + " icon not found");
	}

	return iconNum;
}

//
// Spells
//

// only called by entity.channelSpell
// deducts mana, sets cooldown if it's a player, etc.
// parameters should be an object
Game.castSpell = function (id, parameters) {
	// mana
	if (parameters.caster.constructor.name === "Hero") {
		if (Game.hero.mana >= Spells[id].manaCost[parameters.tier]) {
			Game.hero.mana -= Spells[id].manaCost[parameters.tier];
		}
		else {
			// not enough mana
			Dom.chat.insert("<i>You don't have enough mana to cast that spell!</i>")
			return false;
		}
	}
	else {
		// enemies dont have mana so dw about that
	}

	// cooldown
	if (parameters.caster.constructor.name === "Hero") {
		// find index of spell in hero's spall array
		let index = parameters.caster.spells.findIndex(spell => spell.id === id);
		parameters.caster.spells[index].onCooldown = Spells[id].cooldown[parameters.tier];
	}
	else {
		// enemies' spells use a different system (for now), so don't worry about that
	}

	Spells[id].func(parameters);

	parameters.caster.spellCasts++; // tracks total number of spell casts by character
}

// see also spelldata.js

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
		// time that the partile stays on the screen for
		let removeIn = properties.explodeTime + properties.lingerTime + Random(-60, 60);
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
			removeIn: removeIn,
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
		lingerTime: 1500,
		colours: colourArray,
	});

	if (numberRemaining > 1) {
		// more fireworks to be launched in 500ms
		Game.setTimeout(Game.levelUpFireworks, 500, numberRemaining - 1)
	}
}

// called every 100ms by Game.trailInterval
Game.addTrailParticles = function () {
	// check game has initialised already !
	if (typeof Game.allEntities !== "undefined") {
		for (let i = 0; i < Game.allEntities.length; i++) {
			let entity = Game.allEntities[i];
			if (typeof entity.trails !== "undefined") {
				// iterate through each trail
				for (let j = 0; j < entity.trails.length; j++) {
					let trail = entity.trails[j];
					if (typeof trail.duration !== "undefined") {
						trail.duration -= 0.1; // measured in seconds
					}
					if (typeof trail.duration !== "undefined" && trail.duration <= 0) {
						entity.trails.splice(j);
						j--;
					}
					else {
						Game.drawTrail(entity, trail)
					}
				}
			}
		}
	}
}

// draws a trail's particles around the entity
// this function is called by addTrailPartcicles
Game.drawTrail = function (entity, trail) {
	if (typeof trail.intensity === "undefined") {
		// no. of particles to be added every 100ms
		trail.intensity = 1; // default val
	}
	// set trail position
	trail.x = entity.x;
	trail.y = entity.y;
	// draw particles
	for (let i = 0; i < trail.intensity; i++) {
		this.createParticle(trail); // Game not this because it is called by setInterval
	}
}

//
// Tag minigame
//

// websocket status should have been checked before this function is called
// called by Items.consumable[22]
Game.tag.init = function () {
	if (Areas[Game.areaName].tagGameAllowed) {
		// game allowed to start in the current area

		let tagArea = Areas[Game.areaName].tagGameAllowed; // either true, or an array of areas that are allowed
		if (Areas[Game.areaName].tagGameAllowed === true) {
			// only current area allowed
			// should be an array so .includes can be used in it
			tagArea = [Game.areaName];
		}

		Game.minigameInProgress = {
			game: "tag",
			area: tagArea,
			playing: true,
			status: "starting",
			immunePlayers: []
		};

		// remove all other players from the area (they will be added/readded as they join)
		for (let i = 0; i < Game.players.length; i++) {
			Game.removeObject(Game.players[i].id, "players", i);
		}

		// user that started game will also be teleported back at end of game (to prevent cheating)
		Game.hero.oldPosition = {
			area: Game.areaName,
			x: Game.hero.x,
			y: Game.hero.y,
			reason: "tag"
		};

		// notify other players about the starting of the tag game
		ws.send(JSON.stringify({
			type: "tagMinigame",
			action: "startGame",
			area: tagArea,
			displayAreaName: Player.displayAreaName,
			spawnArea: Game.areaName,
			spawnX: Game.hero.x,
			spawnY: Game.hero.y
		}));

		// the server will now handle the rest of the game

		Dom.chat.insert("Invited other online players to a game of tag. The game will start in 30 seconds.");

		// start tutorial messages if they haven't joined a game of tag before
		this.tutorial();
	}
	else {
		Dom.chat.insert("You are not allowed to start a game of tag here. Try somewhere else!");
		// return their item
		Dom.inventory.give(Items.consumable[22]);
	}
}

// join the tag minigame (that Game.minigameInProgress has been set to)
Game.tag.join = function (area, x, y) {
	// they will be returned back when they leave the game
	Game.hero.temporaryAreaTeleport(area, x, y, "tag");

	Game.minigameInProgress.playing = true;

	// tell server
	ws.send(JSON.stringify({
		type: "tagMinigame",
		action: "joinGame"
	}));

	// start tutorial messages if they haven't joined a game of tag before
	Game.tag.tutorial(); // called by alert so must be Game.tag not this
}

// start tutorial messages if they haven't joined a game of tag before
Game.tag.tutorial = function () {
	if (User.progress.tagMinigameTutorial === undefined) {
		Dom.chat.insertSequence([
			"Welcome to tag!",
			"The objective of the game is to spend the least time being 'tagged'.",
			"If you're tagged, press space when touching someone else to pass the tag on to them instead.",
			"Walk speed is the same for everyone.",
			"Dying stuns you instead of its normal effects.",
			"Good luck!",
		], undefined, function () { // function to be called on finish of sequence
			User.progress.tagMinigameTutorial = true;
		});
	}
}

// other player joins tag minigame
// playerObject = player's object (from Dom.players)
Game.tag.playerJoin = function (playerObject) {
	// update this in Dom.players
	for (let i = 0; i < Dom.players.length; i++) {
		if (Dom.players[i].userID === playerObject.userID) {
			Dom.players[i].playingGame = "tag";
			break;
		}
	}

	if (Game.minigameInProgress.playing === true) {
		// playing game
		Dom.chat.insert(playerObject.name + " has joined the game of tag!");
	}
	else {
		// not playing game
		// remove the player from the area if the player was in the same area as the game, and this player is not in game
		if (Game.areaName === playerObject.area) {
			// this function will fail if the player was not already in the area they were teleported to, but handles this itself
			Game.removePlayerByID(playerObject.userID);
		}
	}
}

// a new player has been tagged
Game.tag.newTaggedPlayer = function (userID) {
	// previous tagged player (so their tagged state can be reset)
	let prevTaggedPlayer;
	if (Game.minigameInProgress.taggedPlayer !== undefined) {
		// a player has been tagged before

		// try to find the old tagged player object in Game from userID (check if they are in the same area)
		prevTaggedPlayer = Game.players.find(player => player.userID === Game.minigameInProgress.taggedPlayer);

		if (prevTaggedPlayer === undefined) {
			// player is not in the same area (or player is Game.hero) - find them in Dom.players instead
			// note this might still be undefined if the previously tagged has left the game
			prevTaggedPlayer = Dom.players.find(player => player.userID === Game.minigameInProgress.taggedPlayer);

			if (prevTaggedPlayer !== undefined && prevTaggedPlayer.userID === ws.userID) {
				// if the previously tagged player is the hero, give them walkspeed
				Game.statusEffects.walkSpeed({
					target: Game.hero,
					effectTitle: "Tag Immunity",
					effectDescription: "Increased walk speed and immunity to being tagged.",
					speedIncrease: 35,
					time: 3,
					worksForGames: true
				});
				// and set their name colour / hostility back
				Game.hero.hostility = "friendly";
			}
		}
		else {
			// they are in the same area - update their name colour
			// this is otherwise done on joining area (or above in case of hero)
			prevTaggedPlayer.hostility = "friendly";
		}

		// previously tagged player is immune to being tagged again for 3 seconds
		Game.minigameInProgress.immunePlayers.push(Game.minigameInProgress.taggedPlayer);
		Game.setTimeout(function (removeUserID) {
			// check game hasn't finished
			if (Game.minigameInProgress !== undefined) {
				let index = Game.minigameInProgress.immunePlayers.findIndex(userID => userID === removeUserID);
				Game.minigameInProgress.immunePlayers.splice(index, 1);
			}
		}, 3000, Game.minigameInProgress.taggedPlayer);
	}

	// update game object tagged player
	Game.minigameInProgress.taggedPlayer = userID;

	// try to find the new tagged player object in Game from userID (check if they are in the same area)
	let taggedPlayer = Game.players.find(player => player.userID === userID);

	if (taggedPlayer === undefined) {
		// player is not in the same area (or player is Game.hero) - find them in Dom.players instead
		taggedPlayer = Dom.players.find(player => player.userID === userID);
	}
	else {
		// they are in the same area - update name colour
		// this is otherwise done on joining area
		taggedPlayer.hostility = "gameHostile";
	}

	let taggedPlayerMessage = taggedPlayer.name + " is on"; // message to be inserted into chat and infobar
	if (taggedPlayer.userID === ws.userID) {
		// this player is on
		taggedPlayerMessage = "You are on"

		Game.hero.hostility = "gameHostile"; // for nametag
	}

	// chat message
	Dom.chat.insert(taggedPlayerMessage + "!");

	// infobar display
	Dom.infoBar.page("<div class='leaderboardPageSkin' id='infoSkin'></div><br><strong style='position: relative; left: 60px; bottom: 43px;'>"+taggedPlayerMessage+"<br><span id='tagTimeRemaining'>"+Game.minigameInProgress.timeRemaining+"</span> remaining</strong>");
	document.getElementById("infoSkin").style.backgroundImage = 'url("./selection/assets/'+taggedPlayer.class+taggedPlayer.skin+'/f.png")';
}

// show scores of tag minigame
// leaderboardData is an object with keys as user ids and values as times
Game.tag.finish = function (leaderboardData) {
	// stop player appearing as being tagged
	for (let i = 0; i < Game.players.length; i++) {
		if (Game.players[i].hostility === "gameHostile") {
			Game.players[i].hostility = "friendly";
		}
	}

	// stop other players from being tagged
	Game.minigameInProgress.taggedPlayer = undefined;

	// remove hero's speed of they were on
	Game.hero.cleanse("You're On!", "title");

	// ended after a proper game
	Dom.chat.insert("The game is over.");

	// leaderboard information
	let userIDs = Object.keys(leaderboardData);
	let userScores = Object.values(leaderboardData);

	// form player objects to pass to Dom.leaderboard.page
	let leaderboardPlayerArray = [];
	for (let i = 0; i < userIDs.length; i++) {
		let leaderboardPlayer = {};

		let domPlayer = Dom.players.find(player => player.userID === Number(userIDs[i]));

		leaderboardPlayer.score = Round(userScores[i]/1000, 1); // ms -> s
		leaderboardPlayer.skin = domPlayer.skin;
		leaderboardPlayer.class = domPlayer.class;
		leaderboardPlayer.name = domPlayer.name;
		leaderboardPlayer.userID = domPlayer.userID; // just used by main

		leaderboardPlayerArray.push(leaderboardPlayer)
	}

	// sort leaderboard from shortest time to longest
	leaderboardPlayerArray.sort(function (a, b) {
		if (a.score < b.score) {
			return -1;
		}
		else if (a.score > b.score) {
			return 1;
		}
		return 0;
	});

	Dom.leaderboard.page("Tag: " + Player.displayAreaName, "Time spent tagged", leaderboardPlayerArray, "s");

	// find winning user
	let winningUser = leaderboardPlayerArray[0];

	// achievement
	if (leaderboardPlayerArray.length > 4 && winningUser.userID === ws.userID) {
		User.progress.tagAchievement = true;
	}

	// interval cleared on area teleport
	this.fireworkWinnerInterval = Game.setInterval(function (winningUserID) {
		let winner;
		if (winningUserID === ws.userID) {
			// hero won game
			winner = Game.hero;
		}
		else {
			winner = Game.players.find(player => player.userID === winningUserID);
		}

		if (winner !== undefined) {
			Game.launchFirework({
				x: winner.x,
				y: winner.y,
				radius: 150,
				particles: 600,
				explodeTime: 500,
				lingerTime: 1500,
				colours: "#f9ff54", // golden
			});
		}
	}, 2222, winningUser.userID);
}

// minigame has finished
// works for any minigame
Game.minigameReset = function () {
	// game has finished
	Game.minigameInProgress = undefined;

	// say players are no longer in game in Dom.players
	for (let i = 0; i < Dom.players.length; i++) {
		Dom.players[i].playingGame = undefined;
		// undefined means they are not playing a game
	}
}

//
// Init game / load new area
//

// load default images (e.g. player, status effect, etc.)
// returns an array of these promises
// called on init by loadArea
Game.loadDefaultImages = function () {
	let toLoad = [];

	// load image based on class
	toLoad.push(Loader.loadImage("player"+Player.class+Player.skin, "./assets/player/" + Player.class + Player.skin + ".png", false));

	// load class' default projectile
	toLoad.push(Loader.loadImage(this.heroProjectileName, "./assets/projectiles/" + this.heroProjectileName + ".png", false));
	if (typeof this.heroProjectile2Name !== "undefined") {
		toLoad.push(Loader.loadImage(this.heroProjectile2Name, "./assets/projectiles/" + this.heroProjectile2Name + ".png", false));
	}

	toLoad.push(Loader.loadImage("status", "./assets/icons/status.png", false));

	toLoad.push(Loader.loadImage("spells", "./assets/icons/spells.png", false));

	// maybe this should just be done if the player has a fishing rod? - tbd
	toLoad.push(Loader.loadImage("bobber", "./assets/projectiles/bobber.png", false));

	// spell images
	// maybe can be made more efficient? not that bothered about it at the moment buttt
	if (Player.class === "m") {
		toLoad.push(Loader.loadImage("icebolt", "./assets/projectiles/icebolt.png", false));
		toLoad.push(Loader.loadImage("fireBarrage", "./assets/projectiles/fireBarrage.png", false));
	}

	toLoad.push(Loader.loadImage("brownHorseRight", "./assets/mounts/brownHorse/brownHorseSide.png", false));
	toLoad.push(Loader.loadImage("brownHorseLeft", "./assets/mounts/brownHorse/brownHorseSide.png", false, "vertical"));
	toLoad.push(Loader.loadImage("brownHorseFront", "./assets/mounts/brownHorse/brownHorseFront.png", false));
	toLoad.push(Loader.loadImage("brownHorseBack", "./assets/mounts/brownHorse/brownHorseBack.png", false));

	toLoad.push(Loader.loadImage("gloop", "./assets/projectiles/gloop.png", false)); // tbd only load if they have the armour

	toLoad.push(Loader.loadImage("rootedStatusImage", "./assets/projectiles/roots.png", false));

	toLoad.push(Loader.loadImage("explosion", "./assets/projectiles/explosion.png", false));

	return toLoad;
}

// pull data from areadata.js
Game.loadArea = function (areaName, destination) {

	this.loadingArea = true; // set to false at the end of this function, once the promise is dealt with (because of asynchronocity with animationframe)

	this.areaTeleports = []; // stop player from teleporting again during promise

	// clear all timeouts and intervals that should be cleared upon changing area
	while (this.clearedTimeoutsOnAreaChange.length > 0) {
		this.clearTimeout(this.clearedTimeoutsOnAreaChange[0]);
		this.clearedTimeoutsOnAreaChange.splice(0, 1);
	}
	while (this.clearedIntervalsOnAreaChange.length > 0) {
		this.clearInterval(this.clearedIntervalsOnAreaChange[0]);
		this.clearedIntervalsOnAreaChange.splice(0, 1);
	}

	// wipe previously loaded images (except exceptions - based on deleteif)
	Loader.wipeImages();

	// set event
	Event.updateEvent();
	// set time of day
	Event.updateTime(areaName);

	this.fullDate = GetFullDate(); // updated on area change

	// load images
	// p = array of promises of images being loaded
    let p = Loader.loadMultipleImages(Areas[areaName].images);

	// load in randomly generated villagers if the area has data for them

	let possibleVillagers, villagersToAdd;
	if (Areas[areaName].villagerData !== undefined) {
		// first make array of all valid villager locations (used until area is changed)
		Game.villagerLocationArray = [];
		for (let i = 0; i < Areas[areaName].villagerData.locations.length; i++) {
			if (typeof Areas[areaName].villagerData.locations[i].condition === "undefined" || Areas[areaName].villagerData.locations[i].condition()) {
				Game.villagerLocationArray.push(Areas[areaName].villagerData.locations[i]);
			}
		}

		// now make the villagers!
		let returnValues = this.generateVillagers(Areas[areaName].villagerData, areaName);

		p = p.concat(returnValues.p); // more images to be loaded

		// variables used to create villager objects
		this.villagerSeed = returnValues.seed; // changed each area; saved in game because villager constructor needs it for non generated villagers
		possibleVillagers = returnValues.possibleVillagers;
		villagersToAdd = returnValues.villagersToAdd;
	}

	// character on lead
	if (this.hero !== undefined && this.hero.hasOnLead !== undefined) {
		// load the character's images
		if (this.hero.hasOnLead.rotationImageSources) {
			// rotation images to be loaded as well
			p = p.concat(Loader.loadMultipleImages(this.hero.hasOnLead.rotationImageSources));
		}
		p = p.concat(Loader.loadImage(this.hero.hasOnLead.imageName, this.hero.hasOnLead.imageSrc));
	}

	// on init - check that default images are loaded (e.g. player, status effect, etc.) and add any that aren't to toLoad
	if (typeof this.hero === "undefined") {
		p.push(...this.loadDefaultImages());
	}

	// wait until images have been loaded
    Promise.all(p).then(function (loaded) {

		// call onAreaLeave function for previous area if there is one
		if (this.areaName !== undefined) { // if they came from a different area
			if (Areas[this.areaName].onAreaLeave !== undefined) {
				Areas[this.areaName].onAreaLeave();
			}
		}

		this.areaName = areaName;

		// save data information
		Player.areaName = areaName;
        Player.displayAreaName = Areas[areaName].data.name;
		Player.lootArea = Areas[areaName].lootArea; // general name of area and areas around it
		Player.lootTier = Areas[areaName].lootTier;

		if (Player.lootArea === undefined) {
			console.error("No loot area set for area " + areaName);
		}

		// call onAreaLoad if there is one
		// (this is the same as onAreaJoin but is called before anything is loaded, and is also called even on init)
		// note that Game.run has already been called, so save data has been loaded etc (but nothing from Areas etc has been loaded yet)
		if (typeof Areas[this.areaName].onAreaLoad !== "undefined") {
			Areas[this.areaName].onAreaLoad();
		}

		//
		// map
		//

		// there are some properties that some areaData areas don't have, so should be undefined rather than the old value
		map.solidTiles = undefined;
		map.waterTiles = undefined;
		map.iceTiles = undefined;
		map.mudTiles = undefined;
		map.pathTiles = undefined;
		map.tallGrassBottoms = undefined;
		map.dayTiles = undefined;
		map.nightTiles = undefined;
		map.animateTiles = undefined;
		map.objectTiles = [];
		map.repeatTiles = []; // these are like tall grass, flowers, etc.. An array of objects where the objects include "tile", "orderOffsetY" (optionally), name, "ySpacing", "xSpacing" (how much x it moves for every time it moves up one)
		map.transparentTiles = []; // so it is always an array

		map.scrollX = undefined;
		map.scrollY = undefined;

		map.origin = {x:0, y:0}; // this can be set in mapData; it is the coordinate that should be taken as the origin
		// from there, map.origin.x becomes the new x=0 (and negative x is beyond there). same for y.
		// designed for when the map is extended to the top/left!

		// now add all properties from areaData to the map variable
		Object.assign(map, Areas[areaName].mapData);

		// validate that map layers are right length
		let layerLength = map.cols * map.rows;
		let removedLayers = 0;
		for (let i = 0; i < map.layers.length; i++) {
			if (map.layers[i].length !== layerLength) {
				console.error("Map layer " + (i+removedLayers) + " of area " + Game.areaName + " is not the correct length so has been removed.");
				map.layers.splice(i, 1);
				i--;
				removedLayers++;
			}
		}

		// ice tiles only exist if the area isIcy
		if (Areas[areaName].isIcy !== undefined && Areas[areaName].isIcy() && typeof map.waterTiles !== "undefined") {
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

		// animate tiles
		map.initTileAnimation();

		// set tileset
		this.tileAtlas = Loader.getImage("tiles");


		// recalibrate camera (for areas other than first area)
		if (this.camera !== undefined) {
			// set maximum x and y positions of camera
			this.camera.setMaxClampValues();


			// update viewportOffset and canvasArea variables
			// (otherwise called on init)
			this.updateCanvasViewport();
		}

		//
		// init
		//

		// class arrays
		this.allEntities = [];
		this.allVisibles = [];
		this.allThings = [];
		this.allCharacters = [];
		this.allAttackers = [];
		this.allNPCs = []; // includes villagers
		this.damageableByPlayer = []; // everything that has this.damageableByPlayer set to true (ofc must be character or higher in hierarchy)
		this.walkableObjects = []; // moving platforms etc (things with .walkable as true)
		this.allShapes = [];

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
			Weather.updateVariables();

			// close NPC pages
			Dom.closeNPCPages();

			// re-add player to allEntities etc.
			// aaaaaaaaaaa tbd with pets, mount..
			this.allEntities.push(Game.hero);
			this.allVisibles.push(Game.hero);
			this.allThings.push(Game.hero);
			this.allCharacters.push(Game.hero);
			this.allAttackers.push(Game.hero);

			this.allEntities.push(Game.hero.footHitbox);
		}

		//
		// interactable objects
		//

		// object containing the class associated to each type (must be hard-coded)
		this.typeClasses = {
			collisions: Collision,
			areaTeleports: AreaTeleport,
			tripwires: Tripwire,
			particles: Particle,
			things: Thing,
			characters: Character,
			infoPoints: InfoPoint,
			cannons: Cannon,
			mailboxes: Mailbox,
			chests: LootChest,
			dummies: Dummy,
			villagers: Villager,
			npcs: NPC,
			enemies: Enemy,
			players: UserControllable,
			projectiles: Projectile,
			combatAreas: CombatArea,
			mounts: Mount,
			shapes: Shape,
		};

		// list of objects to be animated (with a .animation object - see Thing constructor for a breakdown of this object's properties)
		this.animationList = [];

		// remove all status effect timeouts for previous area's characters
		if (!init) {
			for (let i = 0; i < this.allCharacters.length; i++) {
				if (this.allCharacters[i].constructor.name !== "Hero") {
					this.allCharacters[0].removeAllStatusEffects();
				}
			}
		}

		// particles and projectiles don't persist between areas - cancel their remove timeouts
		if (this.objectRemoveTimeouts !== undefined) {
			for (let i = 0; i < this.objectRemoveTimeouts.length; i++) {
				Game.clearTimeout(this.objectRemoveTimeouts[i]);
			}
		}
		this.objectRemoveTimeouts = [];

		// reset any channelling projectile (if the player has existed before)
		if (!init) {
			this.hero.channellingProjectileId = null;
			this.hero.removeChannelling("loadArea")
			this.hero.canAttack = true;
		}

		let typeArray = Object.keys(this.typeClasses);
		let classArray = Object.values(this.typeClasses);
		// initiate object arrays from areadata
		for (let i = 0; i < typeArray.length; i++) {
			let type = typeArray[i]; // name of array the object is in
			let className = classArray[i];

			// init array in Game
			this[type] = [];

			if (Areas[areaName][type] !== undefined) {
				// exists in areadata
				// iterate through objects of that type in areadata
				for (let i = 0; i < Areas[areaName][type].length; i++) {
					// see if there are multiple entities of the type that should be added (i.e. the x and y coordinates are an array, or there is a .repeat property)
					// if there are, then split this into multiple npcs in areadata without arrays for coords
					if (Areas[areaName][type][i].repeatNumber > 1) {
						let numberOfEntities = Areas[areaName][type][i].repeatNumber;
						Areas[areaName][type][i].repeatNumber = undefined;
						for (let j = 0; j < numberOfEntities-1; j++) {
							let clonedObject = Object.assign({}, Areas[areaName][type][i]);
							Areas[areaName][type].push(clonedObject);
						}
					}

					if (Array.isArray(Areas[areaName][type][i].x)) {
						let xArray = Areas[areaName][type][i].x;
						let yArray = Areas[areaName][type][i].y;
						// iterate through each npc to be added
						for (let j = 0; j < xArray.length; j++) {
							let clonedObject = Object.assign({}, Areas[areaName][type][i]);
							Areas[areaName][type].push(clonedObject);
							let newEntityId = Areas[areaName][type].length-1;
							// set new x and y coords from this array
							Areas[areaName][type][newEntityId].x = xArray[j];
							Areas[areaName][type][newEntityId].y = yArray[j];
						}
						// remove the original npc
						Areas[areaName][type].splice(i,1);
						i--;
					}

					// if the npc wasn't an array of npcs to be added (since this array has since been removed) then prepare + add it
					else {
						// check npc should be added, and prepare it to be added (e.g. by setting its map and type)
						// also calls specific functions needed for certain npcs
						let preparedNPC = this.prepareNPC(Areas[areaName][type][i], type);
						if (preparedNPC !== false) {
							preparedNPC.source = "area";
							this[type].push(new className(preparedNPC));
						}
					}
				}
			}
		}

		// villagers (added from generateVillagers before promise)
		if (villagersToAdd !== undefined) {
			for (let i = 0; i < villagersToAdd.length; i++) {
				let villager = possibleVillagers[villagersToAdd[i]];

				// pick random location for villager based on random seed and length of its name
				// changes approximately every 25 minutes
				// this is now done in villager class instead

				let preparedNPC;
				// check villager can be shown
				if ((villager.outdoorOnly && Areas[areaName].indoors) || (villager.indoorOnly && !Areas[areaName].indoors)) {
					preparedNPC = false; // can't be shown
				}
				else {
					preparedNPC = this.prepareNPC(villager, "villagers");
				}

				if (preparedNPC !== false) {
					preparedNPC.source = "villager"; // image came from villager variable (used for finding images if they have to persist over areas)
					preparedNPC.sourceId = preparedNPC.id; // id in villager variable
					this.villagers.push(new Villager(preparedNPC));
				}
			}
		}

		// player pet
		if (this.hero !== undefined && this.hero.hasOnLead !== undefined) {
			let preparedNPC = this.prepareNPC(this.hero.hasOnLead, this.hero.hasOnLead.type);
			if (preparedNPC !== false) {
				// prepare npc to be added
				// edit animal on lead's information to fit with constructor (constructor takes different parameters to constructed object's properties)
				preparedNPC.image = preparedNPC.imageName;
				// generate npc
				let typeName = preparedNPC.type; // name of array in Game
				let className = this.typeClasses[typeName]; // name of Class
				let source = preparedNPC.source; // used for finding images on future area changes (since the source is the same it can just be taken from previous villager)
				// make consistent with parameters...
				preparedNPC.source = "prevArea";
				// construct npc
				let newNPC = new className(preparedNPC);

				// remove character that is the same as one to be added in the area (if one exists)
				// i.e. if you put amelio on a lead then head back into tavern there shouldn't be two of him !
				// only remove the first one found
				// same == same name, same imageSrc, same hostility (maybe add more requirements?)
				let foundIndex = this[typeName].findIndex(villager => villager.name === newNPC.name && villager.imageSrc === newNPC.imageSrc && villager.hostility === newNPC.hostility);
				if (foundIndex !== -1) {
					this.removeObject(this[typeName][foundIndex].id, typeName, foundIndex);
				}

				// add the npc
				this[typeName].push(newNPC);
				// update npc on lead
				this.hero.hasOnLead = newNPC;
				newNPC.onLead = true;

				// note the position of the npc on lead is changed when the hero's position is changed
			}
			else {
				console.error("Animal on lead could not be shown. Please tell Jake.", animal)
			}
		}

		let repeatTileNos = map.repeatTiles.map(obj => obj.tile);

		// add any object tiles as objects themselves
		for (let layer = 0; layer < map.layers.length; layer++) {
			for (let c = 0; c <= map.cols; c++) {
		        for (let r = 0; r <= map.rows; r++) {
		            let tile = map.getTile(layer, c, r); // tile number

		            if (tile !== 0 && map.objectTiles.includes(tile)) { // 0 is empty tile
						// draw position
						let x = Math.round((c) * map.tsize) + 30 - map.origin.x;
			            let y = Math.round((r) * map.tsize) + 30 - map.origin.y;

						let crop = {
							x: ((tile - 1) % map.tilesPerRow) * map.tsize,
							y: Math.floor((tile - 1) / map.tilesPerRow) * map.tsize,
							width: map.tsize,
							height: map.tsize
						}

						this.things.push(new Thing({
							x: x,
							y: y,
							width: map.tsize,
							height: map.tsize,
							image: "tiles",
							crop: crop,
							type: "things"
						}));

						map.setTile(layer, c, r, 0);
		            }

					else if (tile !== 0 && (repeatTileNos.includes(tile))) {
						let i = map.repeatTiles.findIndex(obj => obj.tile === tile);

						// kinda hard-coded for now - make multiple copies of this object to give a tall-grass effect (as in eaglecrest plains)
						// draw position
						let baseX = Math.round((c) * map.tsize) + 30 - map.origin.x;
			            let baseY = Math.round((r) * map.tsize) + 30 - map.origin.y;

						let crop = {
							x: ((tile - 1) % map.tilesPerRow) * map.tsize,
							y: Math.floor((tile - 1) / map.tilesPerRow) * map.tsize,
							width: map.tsize,
							height: map.tsize
						}

						let orderOffsetY = map.repeatTiles[i].orderOffsetY || 0;

						// some repeatTiles (i.e. tall grass) are adjusted in the x direction based on how high up they are
						// this adjust amount is given by kMultiplier
						if (typeof map.repeatTiles[i].orderOffsetY === "undefined") {
							map.repeatTiles[i].orderOffsetY = 0;
						}
						if (typeof map.repeatTiles[i].kMultiplier === "undefined") {
							map.repeatTiles[i].kMultiplier = 0;
						}
						let k = Math.floor((baseY+map.repeatTiles[i].orderOffsetY)/120)%3;

						let xSpacingMultiplier = [0, -1, 0, 1];
						for (let tileNo = 0; tileNo < 60/map.repeatTiles[i].ySpacing; tileNo++) {
							let x = baseX + (map.repeatTiles[i].xSpacing*xSpacingMultiplier[tileNo%xSpacingMultiplier.length]) + k*map.repeatTiles[i].kMultiplier;
							let y = baseY - map.repeatTiles[i].ySpacing*tileNo;

							let objectProperties = {
								x: x,
								y: y,
								orderOffsetY: orderOffsetY,
								width: map.tsize,
								height: map.tsize,
								image: "tiles",
								crop: crop,
								type: "things",
								name: map.repeatTiles[i].name
							};

							// assign any additional properties from areadata
							Object.assign(objectProperties, map.repeatTiles[i].objectProperties);

							this.things.push(new Thing(objectProperties));
						}

						map.setTile(layer, c, r, 0);
					}
		        }
		    }
		}

		// players (these are added from websocket instead of areadata)
		if (ws !== false && ws.readyState === 1) {
			// websocket is active
			for (let i = 0; i < Dom.players.length; i++) {
				// addPlayer checks necessary conditions for player additioin
				this.addPlayer(Dom.players[i]);
			}
		}


		// music
		// it is checked if the user has selected for music to be played in the settings within the Game.playMusic function
		this.playMusic();


		// display area name
		// it is always displayed on init (thus only checked if it should be displayed if init is not called)
		if (Areas[areaName].data.displayOnEnter !== false || init) {
			// tbd wait until font is loaded
			let title = Areas[areaName].data.name;
			let subtitles = [];
			if (Areas[areaName].data.subtitle !== undefined) {
				subtitles.push(Areas[areaName].data.subtitle);
			}
			if (Areas[areaName].data.level !== undefined) {
				subtitles.push(Areas[areaName].data.level);
			}
			if (Areas[areaName].data.territory !== undefined && Areas[areaName].data.territory !== "") {
				// only show territory if it is defined for the area
				subtitles.push(Areas[areaName].data.territory + " territory");
			}
			// function to set the variable
			this.displayOnCanvas(title, subtitles, 2);
		}

		// update y position of inforbar (in case there is a viewport offset y)
		Dom.infoBar.updateYPosition();

		// reposition player and camera
		if (destination !== undefined) {
			this.hero.x = destination.x;
			this.hero.y = destination.y;

			// remove status effects of slow/fast tiles
			this.hero.setSpeed();

			// update foot hitbox position
			this.hero.updateFootHitbox();

			// now hero position has been updated, update position of animal on lead (if there is one)
			if (this.hero.hasOnLead !== undefined) {
				// same position as hero
				this.hero.hasOnLead.x = this.hero.x;
				this.hero.hasOnLead.y = this.hero.y;
			}

			// update camera position
			// any values to do with camera's position update will be updated in camera.update, which is called later in loadArea
			// this is necessary because sometimes camera might be set to not follow hero on area change (e.g. camera pan)
			this.camera.x = this.hero.x - this.camera.width/2;
			this.camera.y = this.hero.y - this.camera.height/2;

			// remove pan from previous area (note this might be overwritten again by onAreaJoin, but is necessary in case it's not)
			this.camera.follow(this.hero);
		}
		// remove player moveTowards
		this.hero.moveTowards = undefined;

		if (!init) {
			// tell server that area has been changed so that DOM chat players online can display this for all players
			// ...and for position update (because they have updated position but not moved)
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

		// allow hero to move again if they died
		if (this.hero.respawning) {
			this.hero.respawning = false;
			this.hero.isCorpse = false;
			Dom.chat.insert("You died.");

			this.hero.moveTowards = undefined;
			this.hero.isBeingDisplaced = undefined;
			this.hero.setExpandZ(1);
		}

		// if the area is a checkpoint and it is not the player's current checkpoint, update the player's checkpoint
		// also makes sure that player has not been temporarily changed
		if (Areas[areaName].checkpoint && this.hero.checkpoint !== areaName && this.hero.oldPosition === undefined) {
			this.hero.checkpoint = areaName;
			Dom.chat.insert("Checkpoint reached! Your spawn location has been set to this location.");
		}

		// load in randomly generated loot chests if the area has data for them
		if (Areas[areaName].chestData !== undefined) {
			this.generateChests(Areas[areaName].chestData);
		}

		// call onAreaJoin function if there is one
		// only call if the area was teleported to (not game refresh), or it is told in areaData to be called on refresh
		if (!init || Areas[areaName].callAreaJoinOnInit) {
			if (Areas[areaName].onAreaJoin !== undefined) {
				Areas[areaName].onAreaJoin();
			}

			Dom.checkProgress();
		}

		// call player onAreaChange functions
		if (!init) {
			for (let i = 0; i < this.equipmentKeys.length; i++) {
				let inventoryItem = Player.inventory[this.equipmentKeys[i]];
				if (typeof inventoryItem.type !== "undefined") {
					let item = Items[inventoryItem.type][inventoryItem.id];
					if (typeof item.onAreaChange !== "undefined") {
						item.onAreaChange();
					}
				}
			}
		}

		// update camera position
		this.camera.update(0, true);

		this.dayNightUpdate();

		// Antorax Day fireworks
		if (Event.event === "Antorax" && Areas[areaName].data.territory === "Allied" && !Areas[areaName].indoors && this.fireworkInterval === undefined) {
			// Antorax Day; area is allied and indoors and a firework interval has not yet been set
			// launch fireworks periodically at random positions on the player's screen
			this.fireworkInterval = Game.setInterval(function () {
				// same as Antorax Day Firework items
				if (Random(0, 3) === 0) {
					// large firework
					this.launchFirework({
						x: Random(this.hero.x - Dom.canvas.width / 2, this.hero.x + Dom.canvas.width / 2),
						y: Random(this.hero.y - Dom.canvas.height / 2, this.hero.y + Dom.canvas.height / 2),
						radius: 250,
						particles: 1500,
						explodeTime: 750,
						lingerTime: 2500,
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
						lingerTime: 1500,
						colours: ["#8cff91", "#ff82f8"], // lighter colours so they are more visible
					});
				}
			}.bind(this), 1500, this.areaName);
		}
		else if (this.fireworkInterval !== undefined) {
			// remove interval from a previous area
			Game.clearInterval(this.fireworkInterval);
			this.fireworkInterval = undefined;
		}

		this.totalAnimationTime = 0; // used to find if animate should be called for an object

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

		// done loading!
		this.loadingArea = false;

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


	// game timer
	Game.gameTime = 0; // counts in seconds
	Game.gameTicks = 0; // counts in ticks


	// remove any creative mode items
	Game.checkCreativeMode();

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

		type: "hero",
		hostility: "hero",

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

		mana: Player.mana,

		// stats
		stats: Player.stats,

		trails: Player.trails,

		// projectile (TBD)
		projectile: {},

		checkpoint: Player.checkpoint,

		oldPosition: Player.oldPosition,

		spells: Player.spells,
	});

	// link stats
    // currently a bit inefficient?
    Game.hero.stats = Player.stats;

	// set player projectile
	this.projectileImageUpdate();

	// set loaded status and spell images
	this.statusImage = Loader.getImage("status");
	this.spellImage = Loader.getImage("spells");

	// stun hero if they need to make a decision at the start of the game via dom alert
	// decidingToSkip would have been set to true via Dom.init calling Tutorial in adventuredata
	if (Dom.instructions.decidingToSkip) {
		Game.statusEffects.stun({
			target: Game.hero,
			effectTitle: "Tutorial",
			effectDescription: "Making tricky decisions...",
			hidden: true,
		});
	}

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

	// dom-related keys work a bit different:

	// shift
	// special method of adding key because it calls a separate function
	Keyboard.listenForKey(User.settings.keyboard.SHIFT, Keyboard.downFunctions.SHIFT, Keyboard.upFunctions.SHIFT);

	// enter
	Keyboard.listenForKey(User.settings.keyboard.ENTER, Keyboard.downFunctions.ENTER);

	// player attack on click
	document.getElementById("click").addEventListener("mousedown", Game.hero.startAttack.bind(this.hero));
	document.getElementById("click").addEventListener("mouseup", Game.hero.finishAttack.bind(this.hero));

	// change between default cursor and crosshair based on player range
	document.getElementById("click").addEventListener("mousemove", Game.secondary.updateCursor.bind(document.getElementById("click")));

	// experimental mobile tilt movement (not called unless on mobile and device has gyroscopes)
	window.addEventListener("deviceorientation", MobileTilt);

	// fps array (used for tracking frames per second in Game.fps())
	this.fpsArray = [];

	// init canvas display variables (used by displayOnCanvas)
	this.canvasDisplay = {};
	this.canvasDisplayQueue = [];

	// trail interval
	// new particle(s) every 100ms (tbd make this called more often?)
	Game.trailInterval = Game.setInterval(Game.addTrailParticles, 100);

	// intervalEffects of items
	this.equipmentKeys = ["helm", "chest", "greaves", "boots", "weapon"];
	this.intervalEffects = {};
	for (let i = 0; i < this.equipmentKeys.length; i++) {
		this.intervalEffects[this.equipmentKeys[i]] = {}; // if there is an interval effect, .itemId is set to id in itemdata and .interval is set to interval number
	} // populated in Game.inventoryUpdate
	Game.equipmentUpdate();// tbd move where this is called

	// game viewport camera
    this.camera = new Camera({map: map, width: Dom.canvas.width, height: Dom.canvas.height, addToObjectArrays: false, type: "camera"});
    this.camera.follow(this.hero);

	// update viewportOffset and canvasArea variables (would not have been done yet since camera did not exist; needed for weather)
	this.updateCanvasViewport();

	// init weather
	Weather.init();

	// re-init hero's saved status effects
	this.initStatusEffects();

	// start Game tick
	window.requestAnimationFrame(this.tick);

	// saveTimeout ensures that there is always a save at least every 60 seconds
	// save in 60 seconds (init saveTimeout)
	// if there is a save before this, this is set back to 60 seconds
	Game.saveTimeout = Game.setTimeout(function() {
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
				// find source of onExpire
				if (statusEffect.onExpireSource.location === undefined) {
					// onExpire in Game.statusEffects.functions
					statusEffect.onExpire = this.statusEffects.functions[statusEffect.onExpireSource].bind(statusEffect);
				}
				else if (statusEffect.onExpireSource.location === "itemdata") {
					// onExpire in itemdata
					statusEffect.onExpire = Items[statusEffect.onExpireSource.type][statusEffect.onExpireSource.id].onExpire.bind(statusEffect);
				}
			}
			// if it has an onTick function, add it
			if (statusEffect.onTickSource !== undefined) {
				// find source of onTick
				if (statusEffect.onTickSource.location === undefined) {
					// onTick in Game.statusEffects.functions
					statusEffect.onTick = this.statusEffects.functions[statusEffect.onTickSource].bind(statusEffect);
				}
				else if (statusEffect.onTickSource.location === "itemdata") {
					// onTick in itemdata
					statusEffect.onTick = Items[statusEffect.onTickSource.type][statusEffect.onTickSource.id].onTick.bind(statusEffect);
				}
			}

			// if it wants to show the infobar, show it
            if (statusEffect.infoBarText !== undefined) {
                if (Dom.elements.infoBar.innerHTML === "") {
                    // infobar not occupied
                    Dom.infoBar.page(statusEffect.infoBarText + " <span id='infobarTimeRemaining'></span>");
                    // infobar time
                    if (statusEffect.info.time !== undefined) {
                        document.getElementById("infobarTimeRemaining").innerHTML = Round(statusEffect.info.time - statusEffect.info.ticks) + "s";
                    }
                }
                else {
                    console.error("The infobar was already occupied but was requested by status effect " + statusEffect.title + ". Please tell Jake!");
                }
            }

			// calculate next tick time
			let nextTickTime = 1000;
			if (statusEffect.info.time <= 2 && statusEffect.onTick === undefined) {
				// faster tick if effect is approaching its end (and there is no onTick function)
				nextTickTime = 100;
			}

			// begin tick
			statusEffect.tickTimeout = Game.setTimeout(function (owner) {
				// nextTickTime is timeTicked
				statusEffect.tick(owner, nextTickTime);
			}.bind(statusEffect), nextTickTime, [Game.hero, nextTickTime]);
		}
	}

	// clear the tag status effect (for if they had it then refreshed the game so are no longer playing)
	this.hero.cleanse("You're On!", "title");
}

// init an NPC for being added by loadArea
// returns false if the npc should not be shown, otherwise returns the npc itself
// overrideCanBeShown set to true means that function will run even if it would return false, and will also return true (to indicate npc added)
Game.prepareNPC = function (npc, type, overrideCanBeShown) {
	let newNpc = this.setInformationFromTemplate(npc); // needs to be here so bossCanBeShown works

	if ((this.canBeShown(newNpc) && this.bossCanBeShown(newNpc)) || overrideCanBeShown) {

		newNpc.map = map;
		newNpc.type = type;

		this.setMailboxImage(newNpc);

		return newNpc;
	}
	return false;
}

// set the properties of a character from its template
// called by prepareNPC
// properties in areadata have precedence over the template, which has precendence over the speciestemplate
Game.setInformationFromTemplate = function (properties) {
	// first initialise the objects so we don't get any undefined errors
	if (typeof properties.stats === "undefined") {
		properties.stats = {};
	}
	if (typeof properties.attackBehaviour === "undefined") {
		properties.attackBehaviour = {};
	}
	if (typeof properties.chat === "undefined") {
		properties.chat = {};
	}

	if (typeof properties.template === "undefined") {
		properties.template = {};
	}
	if (typeof properties.template.stats === "undefined") {
		properties.template.stats = {};
	}
	if (typeof properties.template.attackBehaviour === "undefined") {
		properties.template.attackBehaviour = {};
	}
	if (typeof properties.template.chat === "undefined") {
		properties.template.chat = {};
	}

	if (typeof properties.speciesTemplate === "undefined") {
		if (typeof properties.template.speciesTemplate !== "undefined") {
			// species template is contained in the template
			properties.speciesTemplate = properties.template.speciesTemplate;
		}
		else {
			properties.speciesTemplate = {};
		}
	}
	if (typeof properties.speciesTemplate.stats === "undefined") {
		properties.speciesTemplate.stats = {};
	}
	if (typeof properties.speciesTemplate.attackBehaviour === "undefined") {
		properties.speciesTemplate.attackBehaviour = {};
	}
	if (typeof properties.speciesTemplate.chat === "undefined") {
		properties.speciesTemplate.chat = {};
	}


	let newProperties = {};
	newProperties.stats = {};
	newProperties.attackBehaviour = {};
	newProperties.chat = {};


	// now assign the objects into newProperties, in order of precendence!
	Object.assign(newProperties.stats, properties.speciesTemplate.stats);
	Object.assign(newProperties.attackBehaviour, properties.speciesTemplate.attackBehaviour);
	Object.assign(newProperties.chat, properties.speciesTemplate.chat);
	for (const key in properties.speciesTemplate) { // now we manual assign
		if (key !== "stats" && key !== "attackBehaviour" && key !== "chat") { // we have already assigned these so don't reassign them
			newProperties[key] = properties.speciesTemplate[key];
		}
	}

	Object.assign(newProperties.stats, properties.template.stats);
	Object.assign(newProperties.attackBehaviour, properties.template.attackBehaviour);
	Object.assign(newProperties.chat, properties.template.chat);
	for (const key in properties.template) { // now we manual assign
		if (key !== "stats" && key !== "attackBehaviour" && key !== "chat") { // we have already assigned these so don't reassign them
			newProperties[key] = properties.template[key];
		}
	}

	Object.assign(newProperties.stats, properties.stats);
	Object.assign(newProperties.attackBehaviour, properties.attackBehaviour);
	Object.assign(newProperties.chat, properties.chat);
	for (const key in properties) { // now we manual assign
		if (key !== "stats" && key !== "attackBehaviour" && key !== "chat") { // we have already assigned these so don't reassign them
			newProperties[key] = properties[key];
		}
	}


	return newProperties;
}

// bosses only can be killed once a day
// boolean condition used by prepareNPC
Game.bossCanBeShown = function (npc) {
	return (npc.hostility !== "boss" || typeof Player.bossesKilled[npc.bossKilledVariable] === "undefined" || GetFullDate() - Player.bossesKilled[npc.bossKilledVariable] > 0)
}

// sets the image of the mailbox before its creation (so it has an image in the first place)
// called by prepareNPC
Game.setMailboxImage = function (npc) {
	if (npc.type === "mailboxes") {
		// flag up if there is unread mail
		if (Dom.mail.unread() > 0) {
			// flag up
			npc.image = npc.unreadImage;
		}
		else {
			// no flag
			npc.image = npc.readImage;
		}
	}
}

//
// Day and night
//

// called every 10s by weather when day and night is updated
Game.dayNightUpdate = function () {
	Game.renderDayNight();
	Game.setDayNightImages();
	map.setDayNightTiles();
}

Game.setDayNightImages = function () {
	// iterate through entities with images
	this.things.forEach(thing => {
		if (thing.imageDay !== undefined) {
			// image needs to be changed
			// check whether day or night image is required (also based on weather)
			if (Event.darkness >= 0.2) {
				// night time
				if (thing.imageName !== thing.imageNight) {
					thing.changeImage(thing.imageNight);
				}
			}
			else {
				// day time
				if (thing.imageName !== thing.imageDay) {
					thing.changeImage(thing.imageDay);
				}
			}
		}
	});
}

//
// Game tick
//

// calculate current tick length and update/render canvas accordingly
Game.tick = function (elapsed) {
    window.requestAnimationFrame(this.tick);

    // compute delta time in seconds -- also cap it
    let delta = (elapsed - this.previousElapsed) / 1000.0;
    delta = Math.min(delta, 0.25); // maximum delta of 250 ms
    this.previousElapsed = elapsed;


	this.update(delta); // update game state

	// check for screen size change
	if (Dom.canvas.width !== window.innerWidth || Dom.canvas.height !== window.innerHeight) {
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

			let possibleDropChances = lootTable[i].chance.map(function (element) {  // multiply chances by looting/stealing (and by 100 to allow decimal chances), deep copying array in process
				if (lootTable[i].item.type === "currency") {
					element *= (Game.hero.stats.stealing/100) * 100;
				}
				else if (lootTable[i].stealable) {
					// stealing applies rather than looting to this item (note these items can often only be obtained through stealing, i.e. pícaro mask)
					element *= (Game.hero.stats.stealing/100) * 100;
				}
				else {
					element *= (Game.hero.stats.looting/100) * 100;
				}
				return element;
			});

			// some items are split into a few stacks in the loot screen
			let repeatTimes = lootTable[i].repeatTimes || 1;

			for (let j = 0; j < repeatTimes; j++) {
				let rollRandom = Random(1, 10000); // random number to see how much of item i the player will get (lower is better)
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

						if (typeof lootTable[i].onLootGenerate !== "undefined") { // function to be called on the item
							itemToBePushed = lootTable[i].onLootGenerate(itemToBePushed);
						}

						lootArray.push(itemToBePushed);
					}
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
        while (items[i].quantity > items[i].item.stack) {
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
	        display[spaces[rnd]] = items[i];
			// remove the random position
	        spaces.splice(rnd,1);
		}
    }
    return display;
}

//
// Villagers
//

// generate and add villagers from villagerData (in areadata)
// all random values are based on time (like weather)
Game.generateVillagers = function (data, areaName) {
	// designed to change by 1 every 50 minutes
	// so this doesn't always happen on a 10 minute mark, months and years offset this
	let seed = GenerateSeed(7, 9, 24, 1, 0.02, 0);

	// vary seed based on area as well
	seed += Areas[areaName].id/3;

	// find possible villagers for the area (and based on their canBeShown condition)
	let possibleVillagers = Villagers.filter(villager => {
		return ((villager.areas !== undefined && villager.areas.includes(areaName)) ||
			(villager.exceptAreas !== undefined && !villager.exceptAreas.includes(areaName))) &&
			(villager.canBeShown === undefined || villager.canBeShown());
	});

	// loop through possible villagers, picking them based the number of possible villagers in the area

	// starting index, increase value, and number to add vary with time (thus villagers picked varies with time)

	// startValue is added to i
	// changes approximately once every 50 mins
	// value between 0 and possibleVillagers.length
	let startValue = Math.round(possibleVillagers.length - (seed % possibleVillagers.length));

	// changes approximately once every 150 mins
	// value between 1 and 4
	let increaseValue = Math.round((seed/3) % 4) + 1;

	// difference in number of villagers picked
	let numberDifference = data.maxPeople - data.minPeople;
	// changes approximately every 100 mins
	// note that the actual number added might be less than this if increaseValue*numberToAdd > possibleVillagers.length
	let numberToAdd = Math.round(data.minPeople + (numberDifference - ((seed/2) % numberDifference)));


	let villagersToAdd = []; // array of indexes of villagers to add
	let images = {}; // images to be loaded (same format as in areadata)

	for (let numberAdded = 0; numberAdded < numberToAdd; numberAdded++) {
		let villagerIndex = (numberAdded+startValue) % possibleVillagers.length;

		villagersToAdd.push(villagerIndex);

		let villager = possibleVillagers[villagerIndex];

		// images to be added
		// note that, for duplicate keys, initial ones will be overritten
		Object.assign(images, villager.images);

		// set image name, if one was not already set, from first image loading key
		if (villager.image === undefined && villager.rotationImages === undefined) {
			villager.image = Object.keys(villager.images)[0];
		}
	}

	// load the images
	let p = Loader.loadMultipleImages(images);

	return {
		p: p, // loadArea waits until images have been loaded
		seed: seed,
		possibleVillagers: possibleVillagers,
		villagersToAdd: villagersToAdd
	};
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
		switch (Areas[areaName].lootArea) {

			case "loggingCamp":
				levelUp = new Audio("./assets/sounds/loggingCampLevelup.mp3");
				break;

			default:
				levelUp = new Audio("./assets/sounds/loggingCampLevelup.mp3");
				console.alert("No level up sound for current area");

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
// Health and mana
//

// called every time Game.update is called (i.e. every delta seconds)
Game.regen = function (delta) {
	this.regenHealth(delta);
	// only the hero has mana
	this.restoreMana(this.hero, this.hero.stats.manaRegen * delta)
}

// healthRegen = health regenerated per second
Game.regenHealth = function (delta) {
	for (let i = 0; i < this.allCharacters.length; i++) {
		if (!this.allCharacters[i].respawning && !this.allCharacters[i].isCorpse) {
			this.restoreHealth(this.allCharacters[i], this.allCharacters[i].stats.healthRegen * delta, false, true);
		}
	}
}

// restores health to the target, not allowing them to go above their maximum health
// bloodMoonRestore should be set to true if health is restored even in blood moon
// regen should be set to true if called from Game.regen (because doesn't work with healingPower)
// returns true if the target was healed for the full amount
Game.restoreHealth = function (target, health, bloodMoonRestore, regen) {
	let canBeRestored = true;

	if (Event.time === "bloodMoon" && !bloodMoonRestore && !Areas[this.areaName].indoors) {
		// non-lifesteal forms of healing don't work outdoors during blood moons
		canBeRestored = false;
	}

	if (!regen) {
		health *= target.stats.healingPower / 100;
	}

	if (canBeRestored && target.health !== target.stats.maxHealth) {
		// health can be restored
		if (target.health + health > target.stats.maxHealth) {
			// too much health - cap out at maximum
			target.health = target.stats.maxHealth;
			return false;
		}
		else {
			target.health += health;
			return true;
		}
	}
}

// restores mana to the target, not allowing them to go above their maximum mana
// returns true if the target was regenned for the full amount
Game.restoreMana = function (target, mana) {
	if (target.stats.maxMana > 0) {
		// check they have mana
		if (target.mana !== target.stats.maxMana) {
			// health can be restored
			if (target.mana + mana > target.stats.maxMana) {
				// too much health - cap out at maximum
				target.mana = target.stats.maxMana;
				return false;
			}
			else {
				target.mana += mana;
				return true;
			}
		}
	}
}

//
// Update game state
//

Game.update = function (delta) {
	// update game time
	Game.gameTime += delta;
	Game.gameTicks++;

	// player total playtime
	if (Player.playtime === undefined) {
		Player.playtime = 0;
	}
	Player.playtime += delta / 1000;

	//
	// Timeouts & Intervals
	// these replace setTimeout so they can be run synchronously
	//

	for (let i = 0; i < this.timeouts.length; i++) {
		this.timeouts[i].elapsed += delta * 1000; // elapsed and time are in ms
		if (this.timeouts[i].elapsed >= this.timeouts[i].time) {
			// timeout has expired, make a copy of it
			let timeout = this.timeouts[i];
			// and remove the timeout
			this.timeouts.splice(i, 1);
			// and run its function
			timeout.func(...timeout.params);
			i--;
		}
	}
	for (let i = 0; i < this.intervals.length; i++) {
		this.intervals[i].elapsed += delta * 1000;
		if (this.intervals[i].elapsed >= this.intervals[i].time) {
			// interval has finished, call its function
			this.intervals[i].func(...this.intervals[i].params);
			// ..and reset the interval
			this.intervals[i].elapsed -= this.intervals[i].time;
		}
	}

	//
	// Timers
	//
	for (let i = 0; i < this.timers.length; i++) {
		if (!this.timers[i].paused) {
			this.timers[i].elapsed += delta * 1000;
		}
	}

	// CombatArea intervals (done locally in combatAreas for simplicity)
	for (let i = 0; i < this.combatAreas.length; i++) {
		this.combatAreas[i].elapsed += delta * 1000;
		if (!this.combatAreas.activated && this.combatAreas[i].elapsed >= this.combatAreas[i].time) {
			// combat area's interval has finished, call its function
			this.combatAreas[i].effect();
			this.combatAreas[i].activated = true;

			// now delete the combatArea
			this.removeObject(this.combatAreas[i].id, "combatAreas", i);
			i--;
		}
	}

	//
	// Spell cooldowns
	//

	for (let i = 0; i < this.hero.spells.length; i++) {
		if (typeof this.hero.spells[i].onCooldown !== "undefined" && this.hero.spells[i].onCooldown > 0) {
			this.hero.spells[i].onCooldown -= delta*1000;
			if (this.hero.spells[i].onCooldown < 0) {
				this.hero.spells[i].onCooldown = 0;
			}
		}
	}

	//
	// User movement
	//

	let heroMoved = false; // whether hero has moved

    // handle hero movement with arrow keys
	if (this.hero.moveTowards === undefined && !this.hero.hasStatusEffect("Displacement")) {
		let dirx = 0;
		let diry = 0;
		// player has control over themselves
	    if (this.keysDown.LEFT) { dirx = -1; }
	    if (this.keysDown.RIGHT) { dirx = 1; }
	    if (this.keysDown.UP) { diry = -1; }
	    if (this.keysDown.DOWN) { diry = 1; }

		if (Dom.inventory.check(48, "item")) {//aaaaaaaaaaaaaaaaaaaaaaaaaaa
			// swap x and y direction
			let x = dirx;
			dirx = diry;
			diry = x;
		}

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

		if (this.hero.mounted) {
			this.hero.moveMounted(delta, dirx, diry);
			heroMoved = true;
		}
		else if (dirx !== 0 || diry !== 0 || Game.wind !== undefined) {
        	this.hero.move(delta, dirx, diry);
			heroMoved = true;
    	}
	}
	else {
		// hero always moves until it reaches a certain destination
		this.hero.move(delta); // no need for direction functions (found out in move)
		heroMoved = true;
	}

	this.camera.update(delta);

	// tell server that user location has changed so other users can see it
	// check if user is connected to the websocket
	if (heroMoved && ws !== false && ws.readyState === 1) {
		ws.send(JSON.stringify({
			type: "playerLocation",
			userID: ws.userID,
			x: this.hero.x,
			y: this.hero.y,
			direction: this.hero.direction,
			expand: this.hero.expand,
			mounted: this.hero.mounted,
			//mountImg: aaaaaaaaaaaaaaaaaa
		}));
	}

	//
	// Regen
	//

	//if (document.hasFocus()) { // check user is focused on the game (otherwise enemies cannot damage but user can heal) (think unnecessary now this is in update?)
		this.regen(delta);
	//}

	//
	// User interaction
	//

	// check collision with npcs - includes quest givers, quest finishers, merchants, soul healers, etc.
	let choosePageInformation = []; // parameter for Dom.choose.page, called with the information of any NPCs being touched

	for (let i = 0; i < this.allNPCs.length; i++) { // iterate though npcs

		let npc = this.allNPCs[i];

		let canSpeak = true; // set to false if they can't speak to npc

		if (!this.hero.isTouching(npc)) {
			// hero not touching npc
			canSpeak = false;
		}
		else if (Dom.currentlyDisplayed === npc.name) {
			// it is already currently displayed
			canSpeak = false;
		}
		else if (npc.respawning || npc.isCorpse) {
			// npc is dead
			canSpeak = false;
		}
		else if (this.minigameInProgress !== undefined && this.minigameInProgress.playing) {
			// hero is playing a minigame
			canSpeak = false;
		}

		if (canSpeak && this.keysDown.SPACE) {
			// choosing to interact with NPC - bring up a DOM menu if possible

			// arrays for choose DOM (these are populated in the below for loop)
			let textArray = []; // array of text to describe that function
			let functionArray = []; // array of functions that can be called
			let parameterArray = []; // array of arrays of parameters for these functions (to be ...spread into the function)
			let additionalOnClickArray = []; // array of functions to be called as well as the role if this role is chosen (undefined if no additional function to be called)

			let forceChoose = false; // whether choose dom should be forced (some roles want this)

			// booleans to decide npc chat for if choose DOM doesn't open
			let questActive = false; // if one of the npc's quests is currently active
			let questComplete = false; // if one of the npc's quests has been completed
			let notUnlockedRoles = false; // if one of the npc's roles has not been unlocked
			let textSaid = false; // if all of the above variables should be ignored (because something else has been said instead, e.g: soul healer cannot be healed text)
			// see below for loop for logic regarding these variables

			if (npc.roles !== undefined && npc.roles.length !== 0) {
				// the NPC is a functional NPC (does something when spoken to)

				for (let x = 0; x < npc.roles.length; x++) { // iterate through quests involving that npc
					let role = npc.roles[x];

					if (role.roleRequirement === undefined || role.roleRequirement()) {
						// quest starts
						if (role.role === "questStart" || role.role === "questStartFinish") {
							// quest is ready to be accepted

							let questCanBeStarted = true; // set to false if the quest cannot be started
							let questToBeStarted = role.quest;

							if (role.quest.constructor === Array && (role.newQuestFrequency === "daily" || role.newQuestFrequency === "repeatable")) {
								// quest is an array (hence a random one is picked each questing time period)
								// all of these quests are daily quests or jobs (repeatable)
								if (role.quest.some(quest => Player.quests.activeQuestArray.includes(quest.quest))) {
									// one of the quests is currently active
									questCanBeStarted = false;
									questActive = true; // for npc dialogue
								}
								else if (role.newQuestFrequency === "daily" && role.quest.some(quest => Player.quests.questLastFinished[quest.questArea][quest.id] >= GetFullDate())) {
									// daily quest and one of the quests has already been done today (or after today o.O)
									questCanBeStarted = false;
									questComplete = true; // for npc dialogue
								}
								else {
									// pick a quest to be started
									if (Player.quests.randomDailyQuests[role.questVariable] !== undefined) {
										// a quest has already been chosen for the player today
										// note the same system is used for daily and repeatable, because at the moment the chosen repeatable quest is reset every day
										questToBeStarted = questToBeStarted.find(quest => quest.quest === Player.quests.randomDailyQuests[role.questVariable]);
									}
									else {
										// a quest has not been chosen for the player today
										questToBeStarted = questToBeStarted.filter(quest => Player.quests.possibleQuestArray.includes(quest.quest));
										if (questToBeStarted.length > 0) { // at least one quest survived the level and quest requirements
											// pick random quest
											questToBeStarted = questToBeStarted[Random(0, questToBeStarted.length - 1)];

											// set variable so future quests today are the same
											Player.quests.randomDailyQuests[role.questVariable] = questToBeStarted.quest;
										}
										else {
											questCanBeStarted = false;
											notUnlockedRoles = true;
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
											if (Player.quests.completedQuestArray.includes(role.quest.quest)) {
												// quest has already been completed
												questComplete = true; // for npc dialogue
											}
											else {
												// quest not unlocked at all (is in "other quests")
												notUnlockedRoles = true;
											}
										}
										else if (role.quest.repeatTime === "daily") {
											// daily
											if (Player.quests.questLastFinished[role.quest.questArea][role.quest.id] >= GetFullDate()) { // quest has already been done today (or after today o.O)
												// note that if the quest has not been finished (hence questLastFinished is undefined) the condition will always return false
												questComplete = true; // for npc dialogue
											}
											else {
												// quest not unlocked at all (is in "other quests")
												notUnlockedRoles = true;
											}
										}
									}

								}
							}

							if (questCanBeStarted) {
								// choose dom checks inventory space
								textArray.push("Quest start: " + questToBeStarted.quest);
								functionArray.push(Dom.quest.startFromNpc);
								parameterArray.push([questToBeStarted, npc]);
								additionalOnClickArray.push(role.additionalOnClick);
							}
						}

						// quest finishes
						if (role.role === "questFinish" || role.role === "questStartFinish") {
							// check if quest is ready to be finished

							let questCanBeFinished = true; // set to false if the quest cannot be finished
							let questToBeFinished = role.quest;

							if (role.quest.constructor === Array && (role.newQuestFrequency === "daily" || role.newQuestFrequency === "repeatable")) {
								// quest is an array (hence a Random one is picked each questing time period)
								// all of these quests are daily quests or repeatable quests

								questToBeFinished = role.quest.find(quest => Player.quests.activeQuestArray.includes(quest.quest)); // find which quest the active one is

								if (questToBeFinished === undefined) { // none of the quests are currently active
									questCanBeFinished = false;
									notUnlockedRoles = true;
								}

								// no need to check if it has already been completed as these are all daily
							}
							else {
								// single quest
								if (!Player.quests.activeQuestArray.includes(role.quest.quest)) { // quest is not already active
									questCanBeFinished = false;
									notUnlockedRoles = true;
								}
							}

							if (questCanBeFinished) {
								// check if quest conditions have been fulfilled
								// canBeFinishedArray used for efficiency
								if (Player.quests.canBeFinishedArray.includes(questToBeFinished.quest)) {
									// inventory space is checked by choose DOM
									textArray.push("Quest finish: " + questToBeFinished.quest);
									functionArray.push(Dom.quest.finishFromNpc);
									parameterArray.push([questToBeFinished, npc]);
									additionalOnClickArray.push(role.additionalOnClick);
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

						// quest finishes
						if (role.role === "questProgress") {
							// check if quest is ready to be progressed

							let questCanBeFinished = true; // set to false if the quest cannot be finished
							let questToBeFinished = role.quest;

							if (role.quest.constructor === Array && (role.newQuestFrequency === "daily" || role.newQuestFrequency === "repeatable")) {
								// quest is an array (hence a Random one is picked each questing time period)
								// all of these quests are daily quests or repeatable quests

								questToBeFinished = role.quest.find(quest => Player.quests.activeQuestArray.includes(quest.quest)); // find which quest the active one is

								if (questToBeFinished === undefined) { // none of the quests are currently active
									questCanBeFinished = false;
									notUnlockedRoles = true;
								}

								// no need to check if it has already been completed as these are all daily
							}
							else {
								// single quest
								if (!Player.quests.activeQuestArray.includes(role.quest.quest)) { // quest is not already active
									questCanBeFinished = false;
									notUnlockedRoles = true;
								}
							}

							if (questCanBeFinished) {
								// check if quest conditions have been fulfilled
								// canBeFinishedArray used for efficiency
								if (Player.quests.canBeFinishedArray.includes(questToBeFinished.quest)) {
									// inventory space is checked by choose DOM
									textArray.push("Quest finish: " + questToBeFinished.quest);
									functionArray.push(Dom.quest.finishFromNpc);
									parameterArray.push([questToBeFinished, npc]);
									additionalOnClickArray.push(role.additionalOnClick);
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

							let greetingMessage = Dom.chat.decideMessage(role.shopGreeting); // allow for conditional messages

							textArray.push(role.chooseText || "I'd like to browse your goods.");
							functionArray.push(Dom.merchant.page);
							parameterArray.push([npc, soldItems, greetingMessage]);
							additionalOnClickArray.push(role.additionalOnClick);
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
									if (Dom.inventory.check(2, "currency", Game.soulHealerCost)) {
										Dom.inventory.removeById(2, "currency", Game.soulHealerCost);
										Game.hero.removeStatusEffect(Game.hero.statusEffects.findIndex(statusEffect => statusEffect.title === "XP Fatigue"), "soulHealer"); // remove xp fatigue effect
										Player.fatiguedXP = 0;
										Dom.closePage("textPage");
										Game.currentSoulHealer.say(Game.currentSoulHealer.chat.healedText, 0, false);
										Game.currentSoulHealer = undefined; // reset variable that remembers which soul healer the player is speaking to
										Game.soulHealerCost = undefined; // reset variable that remembers the cost for soul healing
									}
									else {
										// player cannot afford it
										Game.currentSoulHealer.say(Game.currentSoulHealer.chat.tooPoor, 0, true);
									}
								}]]);
								additionalOnClickArray.push(role.additionalOnClick);
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
								additionalOnClickArray.push(role.additionalOnClick);
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
							additionalOnClickArray.push(role.additionalOnClick);
						}

						// drivers
						else if (role.role === "driver") {
							// driver appears as an option for choose DOM
							textArray.push(role.chooseText || "I'd like to ride your cart to somewhere.");
							functionArray.push(Dom.driver.page);
							parameterArray.push([npc, role.destinations]);
							additionalOnClickArray.push(role.additionalOnClick);
						}

						// bankers
						else if (role.role === "banker") {
							// bank appears as an option for choose DOM
							textArray.push(role.chooseText || "I'd like to access my bank storage.");
							functionArray.push(Dom.bank.page);
							parameterArray.push([]);
							additionalOnClickArray.push(role.additionalOnClick);
						}

						// spell choosers
						else if (role.role === "spellChoice") {
							// spell choice appears as an option for choose DOM
							textArray.push(role.chooseText || "I'd like to choose a spell to unlock.");
							functionArray.push(Dom.spellChoice.page);
							parameterArray.push([npc, role.spells]);
							additionalOnClickArray.push(role.additionalOnClick);
						}

						// generic text DOM
						else if (role.role === "text") {
							// npc chat appears as an option in choose DOM
							textArray.push(role.chooseText);
							functionArray.push(Dom.text.page);
							parameterArray.push([npc.name, role.chat, role.showCloseButton, role.buttons, role.functions, role.give]);
							additionalOnClickArray.push(role.additionalOnClick);
						}

						// button just runs a function
						else if (role.role === "function") {
							// npc chat appears as an option in choose DOM
							textArray.push(role.chooseText);
							functionArray.push(role.onClick);
							parameterArray.push([]);
							additionalOnClickArray.push(role.additionalOnClick);
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
			else if (npc.roles === undefined || npc.roles.length === 0) {
				// no roles exist
				notUnlockedRoles = true;
			}


			// now functionarray has been populated, see if anything needs to be done ...
			if (functionArray.length > 0) {
				// npc can be spoken to, hence choose DOM should be opened
				// Dom.choose.page checks whether or not the DOM is occupied, and handles red flashing of close button
				// if two npcs are being touched at the same time and DOM is not occupied, both of their choose pages will be shown
				choosePageInformation.push({
					npc: npc,
					buttons: textArray,
					functions: functionArray,
					parameters: parameterArray,
					additionalOnClicks: additionalOnClickArray, // additional function to be called on opening the role
					force: forceChoose
				});
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
			if (npc.respawning || npc.isCorpse || this.distance(this.hero, npc) > this.hero.stats.domRange) {
				// NPC is dead or player is more than 4 (can be changed) tiles away from NPC
				Dom.closeNPCPages();
			}
		}
	} // finished iterating through npcs

	// update villagers
	for (let i = 0; i < this.villagers.length; i++) {
		if (!this.villagers[i].respawning && !this.villagers[i].isCorpse) { // check villager is not dead
			this.villagers[i].update(delta);
		}
	}

	// update enemies
	let lootingRoleCreated = false; // whether or not the looting choose dom has been created yet
	for (let i = 0; i < this.enemies.length; i++) {
		let enemy = this.enemies[i];

		if (!enemy.respawning && !enemy.isCorpse) { // check enemy is not dead
			enemy.update(delta);
		}

		// enemy looting
		// check enemy is a corpse (hence might be able to be looted)
		// also checks that it still exists! since it might have died and beenremoved in its update function
		if (typeof this.enemies[i] !== "undefined" && this.enemies[i].isCorpse) {

			let canBeLooted = true; // set to false if enemy can't be looted

			if (!this.keysDown.SPACE) {
				// not pressing space
				canBeLooted = false;
			}
			else if (!this.hero.isTouching(this.enemies[i])) {
				// player is not touching enemy
				canBeLooted = false;
			}
			else if (this.enemies[i].loot === null) {
				// enemy can't be looted
				canBeLooted = false;
			}
			else if (Dom.currentlyDisplayed !== "") {
				// dom is occupied
				canBeLooted = false;
			}
			else if (this.minigameInProgress !== undefined && this.minigameInProgress.playing) {
				// hero is playing a minigame
				canBeLooted = false;
			}

			if (canBeLooted && !lootingRoleCreated) {
				// looting page (add to choose dom options, no choose dom option has been made for looting yet)
				choosePageInformation.push({
                    npc: "Looting",
                    buttons: ["Loot " + Game.enemies[i].name],
                    functions: [function () {
                        Dom.loot.page(Game.enemies[i].name, Game.enemies[i].loot);
                        Dom.loot.currentId = "e"+i;
                        // "e"+i is a string that allows the loot menu to be identified - e means enemy, and i is the index of the enemy in Game.enemies
                        // the loot menu closes when the area changes anyway, so this will always work
                        // Dom.loot.currentId is only ever used in main, in the function Game.lootClosed() (called by index.html)
                    }],
                    parameters: [[]]
                });

				// future things to be looted in the same loop will be added to the same array object
				lootingRoleCreated = true;
			}
			else if (canBeLooted && lootingRoleCreated) {
				// looting page (add to choose dom options, a choose dom option has already been made and is thus the most recent option)
				let lootingRole = choosePageInformation[choosePageInformation.length-1];
				lootingRole.buttons.push("Loot " + Game.enemies[i].name);
				lootingRole.functions.push(function () {
					Dom.loot.page(Game.enemies[i].name, Game.enemies[i].loot);
					Dom.loot.currentId = "e"+i;
					// "e"+i is a string that allows the loot menu to be identified - e means enemy, and i is the index of the enemy in Game.enemies
					// the loot menu closes when the area changes anyway, so this will always work
					// Dom.loot.currentId is only ever used in main, in the function Game.lootClosed() (called by index.html)
				});
				lootingRole.parameters.push([]);
			}
		}

		// check if the currently displayed DOM is for the current enemy in the for loop (looting)
		if (enemy.id === Dom.currentNPC.id && enemy.type === Dom.currentNPC.type) {
			// close the DOM if the player is too far away from the enemy or if the enemy is dead
			if ((enemy.respawning || enemy.isCorpse) && this.distance(this.hero, enemy) > this.hero.stats.domRange) {
				// enemy is dead and player is more than 4 tiles away from enemy
				Dom.closeNPCPages();
			}
		}
	}

	// move projectiles if they need to be moved
	for (let i = 0; i < this.projectiles.length; i++) {
		this.projectiles[i].update(delta);
	}

	// check collision with mailboxes
	for (let i = 0; i < this.mailboxes.length; i++) {
		let mailbox = this.mailboxes[i];

		let canBeOpened = true; // set to false if mailbox cannot be read

		if (!this.keysDown.SPACE) {
			// not pressing space
			canBeOpened = false;
		}
		else if (!this.hero.isTouching(mailbox)) {
			// not touching mailbox
			canBeOpened = false;
		}
		else if (Dom.currentlyDisplayed !== "") {
			// dom currently occupied
			canBeOpened = false;
		}
		else if (this.minigameInProgress !== undefined && this.minigameInProgress.playing) {
			// hero is playing a minigame
			canBeOpened = false;
		}

		if (canBeOpened) {
			choosePageInformation.push({
                npc: mailbox,
                buttons: ["Check mail"],
                functions: [Dom.mail.page],
                parameters: [[]],
            });
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
			if (this.minigameInProgress === undefined || !this.minigameInProgress.playing) {
				// normal interaction
				// true = force choose dom
				choosePageInformation.push({
                    npc: player,
                    buttons: ["Trade with " + player.name],
                    functions: [Dom.trade.request],
                    parameters: [[player.userID, player.name]],
                    force: true,
                });
			}
			else {
				// can't interact with other players normally
				switch (this.minigameInProgress.game) {
					case "tag":
						if (this.minigameInProgress.taggedPlayer === ws.userID && // this player is tagged, and...
						!Game.minigameInProgress.immunePlayers.includes(player.userID)) { // the player being tagged is not immune to being tagged
							// tag them
							// note that for the player to even be shown in the area in the first place they must be playing
							ws.send(JSON.stringify({
								type: "tagMinigame",
								action: "tagPlayer",
								userID: player.userID // userID of tagged player
							}));

							// update tagged variables etc.
							this.tag.newTaggedPlayer(player.userID);

							// remove hero's speed
							this.hero.cleanse("You're On!", "title");
						}
						break;
				}
			}
		}

		// check if the currently displayed DOM is for the current player in the for loop
		if (player.id === Dom.currentNPC.id && player.type === Dom.currentNPC.type) {
			// close the DOM if the player is too far away from the player or if the mailbox is dead
			if (this.distance(this.hero, player) > this.hero.stats.domRange) {
				// if trade/alert/pending request is active, send a message to the other player telling them to close it
				// this is because update is not called if tab is not focused, so user could walk away with trade not closing for other person
				if (Dom.trade.requested || Dom.trade.received || Dom.trade.active) {
					ws.send(JSON.stringify({
						type: "trade",
						action: "walkAway",
						target: player.userID
					}));
				}

				// player is more than 4 tiles away from player
				Dom.closeNPCPages();
			}
		}
	}

	// check collision with tiles (if hero is not playing a minigame in the area)
	if (this.keysDown.SPACE && (this.minigameInProgress === undefined || !this.minigameInProgress.playing)) {
		// space key is down
		let tileNum = this.hero.getTileAtFeet();
		if (map.interactWithTile !== undefined) {
			map.interactWithTile(tileNum, this.hero.x, this.hero.y + this.hero.height/2);
		}
	}

	// check distance from chests
	for (let i = 0; i < this.chests.length; i++) {
		let chest = this.chests[i];

		let canBeOpened = true; // set to false if chest cannot be opened

		if (!this.keysDown.SPACE) {
			// player not holding space
			canBeOpened = false;
		}
		else if (!Game.hero.isTouching(chest)) {
			// player not touching chest
			canBeOpened = false;
		}
		else if (chest.loot === null) {
			// chest can't be looted
			canBeOpened = false;
		}
		else if (Dom.currentlyDisplayed !== "") {
			// DOM is occupied
			canBeOpened = false;
		}
		else if (this.minigameInProgress !== undefined && this.minigameInProgress.playing) {
			// hero is playing minigame
			canBeOpened = false;
		}

		// chest opening
		// player is holding space, touching chest, chest can be looted, and DOM isn't occupied
		if (canBeOpened) {
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
					choosePageInformation.push(chest.openLoot(i));
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
		// teleport condition for the area teleport
        if (this.hero.isTouching(this.areaTeleports[i]) && !Game.creativeMode) {
			if (this.areaTeleports[i].teleportCondition === undefined
			|| (this.areaTeleports[i].teleportCondition !== undefined && this.areaTeleports[i].teleportCondition())) {

				// can't teleport if they are playing a game set to a certain area
				if (this.minigameInProgress === undefined // no game active
				|| !this.minigameInProgress.playing // or not playing game
				|| this.minigameInProgress.area.includes(this.areaTeleports[i].teleportTo)) { // or allowed to teleport to area by game

					// a teleport condition has been met (if there is one)
					// find player destination
					let destinationX = this.areaTeleports[i].destinationX || this.hero.x + this.areaTeleports[i].playerAdjustX;
					let destinationY = this.areaTeleports[i].destinationY || this.hero.y + this.areaTeleports[i].playerAdjustY;
					// teleport to new area
					this.loadArea(this.areaTeleports[i].teleportTo, {x: destinationX, y: destinationY});
				}
				else {
					Dom.chat.insert("The minigame you are playing means you cannot go there.", 0, undefined, true);
				}
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

        if ((entity.collisionType === "body" && this.hero.isTouching(entity)) ||
		(entity.collisionType === "feet" && this.hero.footHitbox.isTouching(entity))) {
			let boundOnPlayerTouch = entity.onPlayerTouch.bind(entity);
			boundOnPlayerTouch();
		}
	}

	// check collision with any visibles (if they have an interact function to be called)
	for (let i = 0; i < this.allVisibles.length; i++) {
		let thing = this.allVisibles[i];

		let canInteract = true; // set to false if it cannot be interacted with

		if (thing.onInteract === undefined) {
			// doesn't have oninteract
			canInteract = false;
		}
		else if (!this.keysDown.SPACE) {
			// space key not down
			canInteract = false;
		}
		else if (!this.hero.isTouching(thing)) {
			// hero not touching
			canInteract = false;
		}
		else if (this.minigameInProgress !== undefined && this.minigameInProgress.playing) {
			// hero is playing minigame
			canInteract = false;
		}

		if (canInteract) {
			let interactFunction = thing.onInteract.bind(thing);
			interactFunction();
			Dom.checkProgress();
		}
	}

	// check collision with points of interest (things that insert something to chat when you touch them)
	for (let i = 0; i < this.infoPoints.length; i++) {
		let thing = this.infoPoints[i];

		let canInteract = true; // set to false if it cannot be interacted with

		if (!this.hero.isTouching(thing)) {
			// hero not touching
			canInteract = false;
		}
		else if (!this.keysDown.SPACE) {
			// hero not pressing space
			canInteract = false;
		}
		else if (this.hero.moveTowards !== undefined) {
			// does not trigger if movetowards is active
			canInteract = false;
		}
		else if (this.minigameInProgress !== undefined && this.minigameInProgress.playing) {
			// hero is playing minigame
			canInteract = false;
		}

		if (canInteract) {
			Dom.chat.insert("<i>"+thing.onTouchChat+"</i>", 0, undefined, true); // noRepeat is true
		}
	}

	// iterate through all entities
	for (let i = 0; i < this.allEntities.length; i++) {
		let entity = this.allEntities[i];

		// checkTouching functions for any entity
		if (entity.checkTouching !== undefined) {
			// iterate through each separate thing that should be checked
			for (let x = 0; x < entity.checkTouching.length; x++) {
				// array of things to check (of same type)
				let touchingArray = this[entity.checkTouching[x].arrayName];

				// check if any of them are being touched
				for (let y = 0; y < touchingArray.length; y++) {
					// sometimes we require a particular name for object in array
					if (typeof entity.checkTouching[x].objectName === "undefined" || touchingArray[y].name === entity.checkTouching[x].objectName) {
						if (entity.isTouching(touchingArray[y])) {
							// it is touching it
							// passes in index of object to function
							// call is used to bind it to enemy
							entity.checkTouching[x].isTouchingFunction.call(entity, y, touchingArray[y].id);
						}
					}
				}
			}
		}

		// removeIn
		// tbd should be replacing objectRemoveTimeouts
		if (typeof entity.removeIn !== "undefined") {
			entity.removeIn -= delta;
			if (entity.removeIn <= 0) {
				this.removeObject(entity.id, entity.type);
			}
		}

		// moveTowards
		// move entity towards a particular point until they are there
		if (typeof entity.moveTowards !== "undefined") {
			let direction = Game.bearing(entity, entity.moveTowards);
			let dirx = Math.cos(direction);
			let diry = Math.sin(direction);

			// movement speed
			let speed = entity.moveTowards.speed; // speed should be specified in the moveTowards if the entity has no speed of its own
			if (typeof speed === "undefined") {
				speed = entity.speed; // uses the entity's own speed by default
			}
			// speed scalar due to moveTowards (decimal value)
			if (typeof entity.moveTowards.speedScalar !== "undefined") {
				speed *= entity.moveTowards.speedScalar;
			}

			entity.x += dirx * speed * delta;
			entity.y += diry * speed * delta;

			// check if destination has been reached
			if (Math.round(entity.x) < entity.moveTowards.x + 5 && Math.round(entity.x) > entity.moveTowards.x - 5
			&& Math.round(entity.y) < entity.moveTowards.y + 5 && Math.round(entity.y) > entity.moveTowards.y - 5) {
				// destination reached

				// call move towards finish function
				if (typeof entity.moveTowards.moveTowardsFinishFunction !== "undefined") {
					entity.moveTowards.moveTowardsFinishFunction();
				}

				// remove moveTowards
				entity.moveTowards = undefined;

				// some entities now begin another moveTowards
				// see entity class definition for more info <3
				if (typeof entity.moveTowardsLoop !== "undefined") {
					entity.moveTowardsState++;
					if (entity.moveTowardsState >= entity.moveTowardsLoop.length) {
						entity.moveTowardsState = 0; // loop round
					}
					entity.moveTowards = entity.moveTowardsLoop[entity.moveTowardsState];
				}
			}
		}

		// rotateSpeed
		if (typeof entity.rotateSpeed !== "undefined") {
			entity.rotate += entity.rotateSpeed*delta;
		}
	}

	//
	// choose page based on all dom menus being touched when spcae bar is pressed (just in case there are two npcs on top of each other)
	// this was generated above
	if (choosePageInformation.length > 0) {
		Dom.choose.page(choosePageInformation);
	}


	this.playerProjectileUpdate(delta); // update player's currently channelling projectile

	Dom.inventory.conditionalStats(); // update any player conditional stats (must be done every tick to account for e.g. player movement, enemy movement, despawning etc.)

	//
	// animations
	//

	this.totalAnimationTime += delta * 1000;
	if (!this.loadingArea) {
		for (let i = 0; i < this.animationList.length; i++) {
			if (this.animationList[i].animation.lastAnimated + this.animationList[i].animation.frameTime <= this.totalAnimationTime) {
				// should be animated
				let animate = this.animationList[i].animation;
				let object = this.animationList[i];

				// increment state
				if (animate.state >= animate.totalImages-1) {
					animate.state = 0;
				}
				else {
					animate.state++;
				}

				if (animate.type === "carousel") {
					// change image
					object.setImage(animate.images[animate.state]);
				}
				else if (animate.type === "spritesheet") {
					// change image using spritesheet
					let w = object.image.width / animate.imagesPerRow; // width of an image BEFORE cropping
					let h = object.image.height / (Math.ceil(animate.totalImages / animate.imagesPerRow));
					if (typeof animate.baseCrop === "undefined") {
						// there are borders in the spritesheet that need to be cropped out
						object.crop = {
							x: (animate.state % animate.imagesPerRow) * w,
							y: Math.floor(animate.state / animate.imagesPerRow) * h,
							width: w,
							height: h
						}
					}
					else {
						object.crop = {
							x: (animate.state % animate.imagesPerRow) * w + animate.baseCrop.x,
							y: Math.floor(animate.state / animate.imagesPerRow) * h + animate.baseCrop.y,
							width: animate.baseCrop.width,
							height: animate.baseCrop.height
						}
					}
				}
				else if (animate.type === "function") {
					animate.animateFunction();
				}

				animate.lastAnimated = this.totalAnimationTime;
			}
		}

	}

	// update weather particles
	if (document.getElementById("weatherOn").checked && !Areas[this.areaName].indoors) {
		Weather.addAdditionalParticles();
		Weather.updateGust(delta); // update any current wind gust
		Weather.moveParticles(delta);
	}


	//
	// misc updates
	//

	// fishing game - function returns true if game has been FAILED
	if (FishingGame.update(delta) === true) {
		// game failed
		FishingGame.gameEnd();

		// remove fishing bobber
		this.removeObject(this.hero.channellingProjectileId, "projectiles");
		this.hero.removeChannelling("fishingBobberRemoved");
		this.hero.channellingProjectileId = null;
		this.clearTimeout(this.fishTimeout);
		Dom.chat.insert("<i>The fish swam away!</i>");
	}


	// tag minigame - tagged player speedboost (increases over time the longer they are tagged)
	if (typeof this.minigameInProgress !== "undefined" && this.minigameInProgress.taggedPlayer === ws.userID) {
		// player is on

		let existingEffect = this.hero.statusEffects.find(statusEffect => statusEffect.title === "You're On!");

		if (typeof existingEffect !== "undefined") {
			// has status effect - increase
			existingEffect.info.speedIncrease += delta;
		}
		else {
			this.statusEffects.walkSpeed({
				target: this.hero,
				effectTitle: "You're On!",
				speedIncrease: delta,
				worksForGames: true,
			});
		}
	}


	//
	// update the screen position of everything
	// tbd could be made more efficient (check for camera move otherwise individual object move?)
	//
	for (let i = 0; i < this.allEntities.length; i++) {
		this.updateScreenPosition(this.allEntities[i]);
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

		// archer weapons focus as they are channelling
		if (this.getAttackType() === "bow") {
			let focusSpeed = AttackConstants.bow.focusSpeedMultiplier * this.hero.stats.focusSpeed;//aaaaaaaaaaaaaaaaaaa range multiplier used to do something here
			if (projectile.variance > this.hero.stats.minimumVariance + focusSpeed*delta) { // check it won't be its minimumVariance or less
				projectile.variance -= focusSpeed*delta;
			}
			else {
				projectile.variance = this.hero.stats.minimumVariance;
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

		// knight weapon
		else if (this.getAttackType() === "sword" && projectile.knightChargeAttack) {
			let distanceTravelled = this.hero.channelTime * AttackConstants.sword.channelDistancePerSecond;

			if (distanceTravelled > AttackConstants.sword.channelMaxDistance) {
				distanceTravelled = AttackConstants.sword.channelMaxDistance;
			}

			projectile.movementRange = distanceTravelled;
		}
	}
}

// returns the attack type of the player's currently equipped weapon, or undefined if they do not have one equipped
// "bow", "staff", "sword", "rod" depending on how the weapon should act for attacking
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
// xpBonus is set to false if there should be no XP bonus given by xp multiplier (i.e. for quests)
Game.getXP = function (xpGiven, xpBonus) {
	if (typeof xpGiven === "number") {
		// xp bonus
		if (xpBonus !== false) {
			xpGiven *= 1 + ((Game.hero.stats.xpBonus + Event.globalXpBonus) / 100);
		}

		// increase XP
		Player.xp += xpGiven;

		// XP fatigue
		if (Player.fatiguedXP !== 0) { // fatigued XP is worth 50% less due to a recent death
			if (xpGiven > Player.fatiguedXP) {
				Player.xp -= Player.fatiguedXP / 2;
				Player.fatiguedXP = 0;
				Game.hero.removeStatusEffect(Game.hero.statusEffects.findIndex(statusEffect => statusEffect.title === "XP Fatigue"), "xpGain"); // remove xp fatigue effect
				Dom.chat.insert("Your XP fatigue has worn off");
			}
			else {
				Player.xp -= xpGiven / 2;
				Player.fatiguedXP -= xpGiven;

				// update status effect
				let statusEffect = Game.hero.statusEffects[Game.hero.statusEffects.findIndex(statusEffect => statusEffect.title === "XP Fatigue")];
				statusEffect.info.ineffectiveAmount = Player.fatiguedXP;
				if (Player.level < MaxLevel) {
					statusEffect.effect = "You recently died. Your next "+Player.fatiguedXP+" XP is worth 50% less.";
				}
				else {
					statusEffect.effect = "You recently died. Since you are max level, you move 30% slower until your XP debt of " + Player.fatiguedXP + " is paid off.";
				}
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

				// chat message for level up
				Dom.chat.insert("Level up: "+(Player.level-1)+" &#10132; "+Player.level);

				// increase player health
				Player.stats.maxHealth += 5;

				// if they just levelled to level 7, they unlock spells and mana
				if (Player.level === 7) {
					Player.stats.maxMana = 20;
					Dom.chat.insert("Congratulations on level 7! You have unlocked spells. Speak to <b>Archbishop Lynch</b> to choose your first spell \u{1F320}");
				}
				else if (Player.level === MaxLevel) {
					Dom.chat.insert("You have reached max level!");
				}

				if(Player.level >= LevelXP.length - 1){
					// sets xp bar to fully completed because Game.getXP doesn't set it when you level up
					Player.xp = LevelXP[Player.level];
				}

				document.getElementById("level").innerHTML = "Level "+Player.level;

				// tell server that player's level has been changed so that DOM chat players online can display this for all players
				// Dom also announces this level up to all players
			    // check if user is connected to the websocket
			    if (ws !== false && ws.readyState === 1) {
					ws.send(JSON.stringify({
						type: "changeLevel",
						level: Player.level
					}));
				}

				this.getXP(0); // levelling up multiple times
			}
		}
		else {
			// max level (can still pay off xp fatigue, but xp doesn't remain above level cap)
			Player.xp = LevelXP[Player.level];

			// change xp fatigue to xp debt
			let xpFatigue = Game.hero.statusEffects.find(statusEffect => statusEffect.title === "XP Fatigue");
			if (typeof xpFatigue !== "undefined") {
				xpFatigue.effect = "You recently died. Since you are max level, you move 30% slower until your XP debt of " + Player.fatiguedXP + " is paid off.";
			}
		}

		Dom.checkProgress();
	}
	else {
		console.error("XP increase amount is not a number: ", xpGiven)
	}
}

// called whenever weapon/armour is changed (in order to change player stats)
// PG's code
Game.equipmentUpdate = function () {
    // player stats updated
    this.hero.stats = Player.stats; // inefficient (should be linked)

	let weaponType = this.getAttackType(); // type of weapon equipped of player

    // if the player is holding a weapon, set their projectile details
	// aaaaaaaaaaaaaaaaaaaaaaaaaaaa do projectile speed etc here
    if (weaponType !== undefined) {
        // player has weapon equipped

		if (Player.inventory.weapon.reloadTime !== undefined) {
        	this.hero.stats.reloadTime = Player.inventory.weapon.reloadTime;
		}
		else {
        	this.hero.stats.reloadTime = AttackConstants[weaponType].reloadTime;
		}

		// projectile speed
	    if (typeof Player.inventory.weapon.projectileSpeed !== "undefined") {
	        this.hero.stats.projectileSpeed = Player.inventory.weapon.projectileSpeed;
	    }
	    else {
			this.hero.stats.projectileSpeed = AttackConstants[weaponType].projectileSpeed;
	    }

		if (Player.inventory.weapon.range !== undefined) {
			// weapon has a set range that is different from the generic range type for that item (if one exists)
			// note this "set range" is not displayed on the item (otherwise rangeMultiplier (or make something called rangeModifier) should be used)
        	this.hero.stats.range = Player.inventory.weapon.range * (this.hero.stats.rangeMultiplier/100);//pppppppppppp  under cons
		}
		else {
        	this.hero.stats.projectileRange = AttackConstants[weaponType].projectileRange;
			//aaaaaaaaaaaaaaaaaaa readd fishing rod range
		}

		// set weapon angle variance
		// because variance is not a stat unless manually overwritten, this is required
	    if (weaponType === "bow" || Player.inventory.weapon.variance !== undefined) {
	        this.hero.stats.variance = Player.inventory.weapon.variance || AttackConstants.bow.variance;
	    }
	    else {
	        this.hero.stats.variance = 0;
	    }
		// same for minimumVariance
	    if (weaponType === "bow" || Player.inventory.weapon.minimumVariance !== undefined) {
	        this.hero.stats.minimumVariance = Player.inventory.weapon.minimumVariance || AttackConstants.bow.minimumVariance;
	    }
	    else {
	        this.hero.stats.minimumVariance = 0;
	    }

		// swords etc
	    /*if (weaponType === "sword" || typeof Player.inventory.weapon.iterationSpacing !== undefined) {  // spacing in ms between snake projectiles and max number of snake projectiles
	        this.hero.stats.iterationSpacing = Player.inventory.weapon.iterationSpacing || AttackConstants.sword.iterationSpacing;
	        this.hero.stats.maxIterations = Player.inventory.weapon.maxIterations || AttackConstants.sword.maxIterations;
	    }
	    else {
	        this.hero.stats.iterationSpacing = 0;
	        this.hero.stats.maxIterations = 0;
	    }*/

		// swords etc
	    if (weaponType === "sword" || typeof Player.inventory.weapon.maxIterations !== undefined) {  //
	    }
	    else {
	    }
    }
    else {
        // no weapon equipped (setting range to 0 is how this is sometimes read)
        this.hero.stats.range = 0;
    }

    // set player projectile
    this.projectileImageUpdate();

    // if the player is no longer holding a fishing rod, remove their bobber
    if (Player.inventory.weapon.type !== "rod" && this.hero.channelling === "fishing") {
        this.removeObject(this.hero.channellingProjectileId, "projectiles"); // remove bobber

        this.hero.removeChannelling("fishingBobberRemoved");
        this.hero.channellingProjectileId = null;
    }

	// damageAllHit
    if (Player.inventory.weapon.damageAllHit !== undefined) {
        this.hero.stats.damageAllHit = Player.inventory.weapon.damageAllHit || false;
    }
    else {
        this.hero.stats.damageAllHit = true;
    }

	// dom range is always base dom range * interact range
	this.hero.stats.domRange = this.hero.stats.baseDomRange * this.hero.stats.interactRange / 100;

	// intervalEffects
	for (let i = 0; i < this.equipmentKeys.length; i++) {
		let inventoryItem = Player.inventory[this.equipmentKeys[i]];
		if (typeof inventoryItem.type !== "undefined") {
			let item = Items[inventoryItem.type][inventoryItem.id];

			if (typeof item.intervalEffect === "undefined" || typeof item.intervalEffect.time === "undefined") {
				// no interval effect on current item equipped
				if (typeof this.intervalEffects[this.equipmentKeys[i]].itemId !== "undefined") {
					// there is currently an interval effect active for this item slot - clear it
					this.clearInterval(this.intervalEffects[this.equipmentKeys[i]].interval);
					this.intervalEffects[this.equipmentKeys[i]] = {};
				}
			}
			else {
				// there is an interval effect on this current item equipped
				if (typeof this.intervalEffects[this.equipmentKeys[i]].itemId === "undefined" || this.intervalEffects[this.equipmentKeys[i]].itemId !== item.id) {
					// interval effect is different to the existing one
					if (typeof this.intervalEffects[this.equipmentKeys[i]].itemId !== "undefined") {
						// there is currently an interval effect active for this item slot - clear it
						this.clearInterval(this.intervalEffects[this.equipmentKeys[i]].interval);
						this.intervalEffects[this.equipmentKeys[i]] = {};
					}
					// set new effect
					this.intervalEffects[this.equipmentKeys[i]].interval = this.setInterval(item.intervalEffect.function, item.intervalEffect.time *1000);
					this.intervalEffects[this.equipmentKeys[i]].itemId = item.id;
				}
			}
		}
		else {
			// nothing equipped in this slot
			if (typeof this.intervalEffects[this.equipmentKeys[i]].itemId !== "undefined") {
				// there is currently an interval effect active for this item slot - clear it
				this.clearInterval(this.intervalEffects[this.equipmentKeys[i]].interval);
				this.intervalEffects[this.equipmentKeys[i]] = {};
			}
		}
	}

    // send updated equipment information to websocket if websocket is open
    if (ws !== false && ws.readyState === 1) {
        ws.send(JSON.stringify({
            type: "changeEquipment",
            equipment: {
                helm: Player.inventory.helm,
                chest: Player.inventory.chest,
                greaves: Player.inventory.greaves,
                boots: Player.inventory.boots,
                weapon: Player.inventory.weapon
            }
        }));
    }
}

// called whenever an item is removed / equipped / given / moved
Game.inventoryUpdate = function () {
    // update item buyer page if it is open
    if (document.getElementById("buyerPage").hidden === false) {
        Dom.buyer.page();
    }

	// check for items that give status effects
	for (let i = 0; i < Player.inventory.items.length; i++) {
		// tbd
	}

    Dom.checkProgress(); // quest log update check
}

// set player projectile/bobber image
// currently only works for heroProjectile not heroProjectile2
Game.projectileImageUpdate = function () {
	// figure out if it is a projectile or bobber, and save variable names for later
	let nameAddress = "heroProjectileName";
	let adjustAddress = "heroProjectileAdjust";
	if (Player.inventory.weapon.type === "rod") {
		nameAddress = "heroBobberName";
		adjustAddress = null;
	}

	// if the player is now holding a weapon with a special projectile image, load that image and stop the player from attacking until this is done
	if (typeof Player.inventory.weapon.projectile !== "undefined" && this[nameAddress] !== Player.inventory.weapon.projectile) {
		// not loaded projectile image before
		let weaponObj = Items[Player.inventory.weapon.type][Player.inventory.weapon.id];

		this[nameAddress] = weaponObj.projectile;
		if (adjustAddress !== null) { // set adjust for projectiles only (not bobbers)
			this[adjustAddress] = weaponObj.projectileAdjust;
			if (this[adjustAddress] === undefined) {
				this[adjustAddress] = {x:0,y:0}; // default value
			}
		}

		// crop, animation, etc
		this.heroProjectileInfo = weaponObj.extraProjectileInfo;
		if (typeof this.heroProjectileInfo === "undefined") {
			this.heroProjectileInfo = {};
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
		this.heroProjectileInfo = Skins[Player.class][Player.skin].projectileInfo || {};

		// load image and stop player attacking until it has loaded
		this.loadImagesAndStopAttacking({[this[nameAddress]]: {normal: "./assets/projectiles/" + this[nameAddress] + ".png"}}, false);
	}
}

// called whenever the "hex" stat has been changed from 0 to something else
Game.loadHexImages = function () {
	let hexImages = {};
	if (typeof Player.inventory.weapon.hexImages !== "undefined") {
		// specific images specifed by weapon
		for (let i = 0; i < Player.inventory.weapon.hexImages.length; i++) {
			Object.assign(hexImages, Player.inventory.weapon.hexImages[i].imageAddresses);
		}
	}
	else {
		// default images
		hexImages = {
			sheepRight: {normal: "./assets/enemies/sheep.png"},
			sheepLeft: {normal: "./assets/enemies/sheep.png", flip: "vertical"},
			chickenRight: {normal: "./assets/enemies/chicken.png"},
			chickenLeft: {normal: "./assets/enemies/chicken.png", flip: "vertical"},
			toadRight: {normal: "./assets/enemies/toad.png"},
			toadLeft: {normal: "./assets/enemies/toad.png", flip: "vertical"},
		};
	}

	// load the images
	this.loadImagesAndStopAttacking(hexImages, function () {
		return Game.hero.stats.hex === 0; // only delete on area change if hex is 0
	});
}

// load image(s) and stop the player from attacking until it is done
// images parameter should be an object in the same format as areadata's "images" properties
// deleteIf is the deleteIf parameter used for all the images (tbd make this per image)
Game.loadImagesAndStopAttacking = function (images, deleteIf) {
	// set weapon property "cannotAttack" to true so the player is blocked from attacking
	Player.inventory.weapon.cannotAttack = true;

	let p = Loader.loadMultipleImages(images, deleteIf);

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
		if (itemsRemaining.every(item => item === undefined || item === null)) {
			// set loot to null so it isn't opened by the player again
			Game.enemies[arrayIndex].loot = null;
		}
	}
	else if (Dom.loot.currentId[0] === "c") {
		// chest loot menu closed
		let arrayIndex = Dom.loot.currentId.substr(1);
		// if it is a loot chest, set the day in savedata (so one cannot be opened again in this area today)
		if (Game.chests[arrayIndex].name === "Loot Chest") {
			Player.chests.opened[Game.areaName] = GetFullDate();
		}

		if (Game.chests[arrayIndex].onClose !== undefined) {
			Game.chests[arrayIndex].onClose();
		}

		if (Game.chests[arrayIndex].disappearAfterOpened) {
			Game.removeObject(Game.chests[arrayIndex].id, "chests", arrayIndex);
		}
		else {
			Game.chests[arrayIndex].loot = itemsRemaining; // update items remaining
			if (itemsRemaining.every(item => item === undefined)) {
				// set loot to null so it isn't opened by the player again
				Game.chests[arrayIndex].loot = null;
			}
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
					this.mailboxes[i].imageName = this.mailboxes[i].readImage;
					let imageObject = Loader.getImageInfo(this.mailboxes[i].readImage);
					this.mailboxes[i].image = imageObject.img;
					this.mailboxes[i].imageSrc = imageObject.src;
					this.mailboxes[i].imageFlipped = imageObject.flipped;
				}
			}
		}
		else if (type === "received") {
			// perhaps check if Dom.mail.unread is 1, because only one message will come in at a time and if it is more than 1 then it would already be a flag
			for (let i = 0; i < this.mailboxes.length; i++) {
				// TBD check existing imageName
				this.mailboxes[i].imageName = this.mailboxes[i].unreadImage;
				let imageObject = Loader.getImageInfo(this.mailboxes[i].unreadImage);
				this.mailboxes[i].image = imageObject.img;
				this.mailboxes[i].imageSrc = imageObject.src;
				this.mailboxes[i].imageFlipped = imageObject.flipped;
			}
		}
		else {
			console.error("Unrecognised parameter (should be 'read' or 'received')", type)
		}
	}
}

//
// Development functions!
//

// called on init to revert the player back to normal mode
Game.checkCreativeMode = function () {
	for (let i = 0; i < Player.inventory.items.length; i++) {
		if (Player.inventory.items[i].type === "dev") {
			Dom.inventory.remove(i);
		}
	}
}

// can be called from console
Game.toggleCreativeMode = function () {
	if (!this.creativeMode) {
		// enter creative mode
		this.creativeMode = true;
		Game.hero.health = Game.hero.stats.maxHealth;
		Dom.inventory.give(Items.dev[0]);
		Dom.inventory.give(Items.dev[1]);
		Dom.inventory.give(Items.dev[2]);
		Dom.inventory.give(Items.dev[3]);
		Dom.inventory.give(Items.dev[4]);
		Game.creativeImage = "rootedStatusImage";
		Game.creativeName = "default";
		Dom.chat.insert("Entered creative mode! Type /creative again to leave.");
		Dom.chat.insert("Type /image [Image Name] [Object Name] to set the object you're trying to place.");
	}
	else {
		// leave creative mode
		this.creativeMode = false;
		for (let i = 0; i < Player.inventory.items.length; i++) {
			if (Player.inventory.items[i].type === "dev") {
				Dom.inventory.remove(i);
			}
		}
		Dom.chat.insert("Left creative mode.");
	}
}

Game.creativeImage = "rootedStatusImage";
Game.creativeName = "default";
Game.setCreativeItem = function (item) {
	item = item.split(" ");
	if (item.length > 0) {
		if (item[0] in Loader.images) {
			Game.creativeImage = item[0];
			item.splice(0, 1);
			Game.creativeName = item.join(" ");
			Dom.chat.insert('Creative mode object name set to "'+ Game.creativeName+'".');
			Dom.chat.insert('Creative mode object image set to "'+ Game.creativeImage +'".');
		}
		else {
			Dom.chat.insert("Creative item has not been updated because image was not found.")
		}
	}
	else {
		Dom.chat.insert("Incorrect format. Should be /image [Image Name] [Object Name]")
	}
}

Game.exitCreativeMode = function () {
	if (!this.creativeMode) {
		this.creativeMode = true;
		Dom.inventory.give(Items.dev[0]);
		Dom.inventory.give(Items.dev[1]);
		Dom.inventory.give(Items.dev[2]);
		Dom.inventory.give(Items.dev[3]);
		Dom.inventory.give(Items.dev[4]);
	}
	else {
		console.info("You are already in creative mode!")
	}
}

// called by HIGH SPEED radio buttons (deprecated)
Game.highSpeed = function () {
    if (Dom.elements.speedOn.checked) {
        // add status effect
        Game.statusEffects.walkSpeed({
            target: Game.hero,
            effectTitle: "HIGH SPEED! (test status effect)",
            speedIncrease: 500, // percentage increase
        });
    }
    else {
        // remove status effect
        Game.hero.statusEffects = Game.hero.statusEffects.filter(statusEffect => statusEffect.title !== "HIGH SPEED! (test status effect)");
        // reflect this change on secondary canvas
        Game.hero.updateStatusEffects();
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

	startCol = Math.floor(this.camera.x / map.tsize) + map.origin.x/60;
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

	startRow = Math.floor(this.camera.y / map.tsize) + map.origin.y/60;
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
    offsetX += -this.camera.x + startCol * map.tsize - map.origin.x;
    offsetY += -this.camera.y + startRow * map.tsize - map.origin.y;

    for (let c = startCol; c <= endCol; c++) {
        for (let r = startRow; r <= endRow; r++) {
            let tile = map.getTile(layer, c, r); // tile number

            if (tile !== 0 && !map.objectTiles.includes(tile)) { // 0 is empty tile,, objectTiles are rendered on top of player potentially
				// draw position
				let x = (c - startCol) * map.tsize + offsetX;
	            let y = (r - startRow) * map.tsize + offsetY;

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

		// check object hitbox is on the screen hence should be rendered, and that there is no other reason why it shouldn't be rendered (drawHitbox isn't false)
		if (this.camera.isOnScreen(objectToRender, "hitbox") && objectToRender.drawHitbox !== false) {

			// stroke colour
			this.ctx.strokeStyle = objectToRender.hitboxColour;

			if (objectToRender.hitbox !== undefined) { // check if the object has a special hitbox that should be drawn instead
				this.drawHitbox(objectToRender.hitbox);
			}
			else {
				this.drawHitbox(objectToRender);
			}

		}
	}
}

// draw an entity's hitbox
Game.drawHitbox = function(entity) {
	this.ctx.lineWidth = 1;
	this.ctx.strokeRect(entity.screenX - entity.width / 2, entity.screenY - entity.height / 2, entity.width, entity.height);
}

// display coordinates on canvas (settings option)
Game.coordinates = function (character) {
	// reset text formatting
	this.resetFormatting();

	this.ctx.fillText("x: " + Math.round(character.x), 10 + this.viewportOffsetX, 90 + this.viewportOffsetY);
	this.ctx.fillText("y: " + Math.round(character.y), 10 + this.viewportOffsetX, 106 + this.viewportOffsetY);
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
	this.ctx.fillText("fps: " + Round(average), 10 + this.viewportOffsetX, 127 + this.viewportOffsetY);
}

// reset text formatting
Game.resetFormatting = function () {
	this.ctx.textAlign = "left";
	this.ctx.fillStyle = "rgba(0, 0, 0, 1)";
	this.ctx.font = "16px El Messiri"; // maybe serif instead?
}

// draw a rotated image (rotated in radians)
// source: https://stackoverflow.com/a/11985464/9713957 --- thank you! <3
Game.drawImageRotated = function (ctx, img, cropX, cropY, cropWidth, cropHeight, x, y, width, height, rad) {
    // convert degrees to radian
    //var rad = deg * Math.PI / 180;

    // set the origin to the center of the image
    ctx.translate(x + width / 2, y + height / 2);

    // rotate the canvas around the origin
    ctx.rotate(rad);

    // draw the image
    ctx.drawImage(img, cropX, cropY, cropWidth, cropHeight, width / 2 * (-1),height / 2 * (-1),width,height);

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

	// not ideal because it makes objects a bit juddery, but without it tiles (i.e. long grass in plains) sometimes have white gaps between them :(
	entity.screenX = Round(entity.screenX, 1);
	entity.screenY = Round(entity.screenY, 1);
}

// draw character health bar, name etc. in correct place
// order: health bar, channelling bar, status effects, name
Game.drawCharacterInformation = function (ctx, character) {
	let characterInformationHeight = 3; // size of healthbar or other similar thing (e.g: damage taken), so that it is known how much to offset other information by (in y axis)
	// starts at 3 for initial padding of first thing that is drawn

	if (character.hostility === "friendly" || character.hostility === "neutral" || character.hostility === "gameHostile") {
		// only draw health bar if character is damaged
		if (character.health !== character.stats.maxHealth) {
			this.drawHealthBar(ctx, character, character.screenX - character.width * 0.5, character.screenY - character.height * 0.5 - 15 - characterInformationHeight, character.width, 15);
			characterInformationHeight += 15;
			characterInformationHeight += 3; // padding
		}
	}
	else if (character.hostility === "dummy") {
		// show damage taken above head instead of health bar (if the character has taken any damage)
		if (character.damageTaken > 0) {
			this.drawDamageTaken(ctx, character, character.screenX, character.screenY - character.height / 2 - 1 - characterInformationHeight, 18);
			characterInformationHeight += 16;
			characterInformationHeight += 3; // padding
		}
	}
	else if (character.hostility === "hostile" || character.hostility === "boss") {
		// always draw health bar
		this.drawHealthBar(ctx, character, character.screenX - character.width * 0.5, character.screenY - character.height * 0.5 - 15 - characterInformationHeight, character.width, 15);
		characterInformationHeight += 15;
		characterInformationHeight += 3; // padding
	}
	else if (character.hostility !== "object" && character.hostility !== "hero") {
		console.error("Unknown character hostility: ", character.hostility);
	}

	if (character.channellingInfo !== false && typeof character.channellingInfo.description !== "undefined") {
		// character is channelling something
		this.drawChannellingBar(ctx, character, character.screenX - character.width * 0.5, character.screenY - character.height * 0.5 - 15 - characterInformationHeight, character.width, 15);
		characterInformationHeight += 15;
		characterInformationHeight += 3; // padding
	}

	if (character.statusEffects.length > 0) {
		// character has 1 or more status effects
		this.drawStatusEffects(ctx, character, character.screenX, character.screenY - character.height * 0.5 - 15 - characterInformationHeight, 15, "centre");
		characterInformationHeight += 15;
		characterInformationHeight += 1; // padding
	}

	if (characterInformationHeight === 0) { // nothing displayed other than name
		characterInformationHeight += 2; // padding for name
	}

	if (character.showNameTag) { // some characters want to hide their name tag
		this.drawCharacterName(ctx, character, character.screenX, character.screenY - character.height / 2 - characterInformationHeight - 3);
	}
}

// draw a health bar (on given context, for given character, at given position, with given dimensions)
// tbd : change colour for friendly characters?
// tbd : generalise to work for drawing mana bars as well?
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
		// colour based on size of each bar (although they all look the same to me -PG)
		if (Game.creativeMode) {
			ctx.fillStyle = "#00CC00"; // green
		}
		else if (barValue === 10) {
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

// draw a mana bar (on given context, for given character, at given position, with given dimensions)
Game.drawManaBar = function (ctx, character, x, y, width, height) {
	if (typeof character.stats.maxMana !== "undefined" && character.stats.maxMana > 0) {
		// remember previous canvas transparency preferences
		const oldGlobalAlpha = ctx.globalAlpha;

		// canvas formatting
		ctx.lineWidth = 1;
		ctx.globalAlpha = 0.6;

		// get width of each small mana bar (in mana)
		// there should be between 3 and 9 bars (with the exception of low mana )
		// same as health ...
		let barValue = 10;
		let barValueFound = false;
		let numberOfBars;
		while (!barValueFound) {
			numberOfBars = character.stats.maxMana / barValue;
			if (numberOfBars < 10) { // less than 10 little health bars with this barValue
				barValueFound = true;
			}
			else { // more than 9; multiply bar size by 10 and try again
				barValue *= 3;
			}
		}

		character.manaFraction = character.mana / character.stats.maxMana; // fraction of health remaining

		if (character.manaFraction > 0) { // check the character has some mana to draw (we don't want to draw negative mana)
			// colour based on size of each bar
			if (barValue === 10) {
				ctx.fillStyle = "#a874e3"; // lightish purple
			}
			else {
				// default
				ctx.fillStyle = "#8f34eb";
				console.warn("No dedicated health bar colour for bar size " + barValue);
			}

			// health bar body
			ctx.fillRect(x, y, character.manaFraction * width, height);
		}

		// health bar border
		ctx.strokeStyle = "black";
		ctx.strokeRect(x, y, width, height); // general border around the whole thing
		let i; // defined for use outside of for loop
		for (i = 0; i < character.stats.maxMana / barValue - 1; i++) {
			ctx.strokeRect(x + barValue / character.stats.maxMana * width * i, y, barValue / character.stats.maxMana * width, height);
		}

		// final bar
		ctx.strokeRect(x + barValue / character.stats.maxMana * width * i, y, width - (barValue / character.stats.maxMana * width * i), height);

		// restore previous canvas transparency preferences
		ctx.globalAlpha = oldGlobalAlpha;
	}
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
	ctx.font = "15px El Messiri";
	ctx.textAlign = "center";
	ctx.strokeStyle = "black";
	ctx.lineWidth = 0.5;
	// colour based on whether npc is good or not
	if (character.hostility === "hostile") {
		ctx.fillStyle = "red";
	}
	else if (character.hostility === "friendly") {
		if (character.onDarkBackground) {
			ctx.fillStyle = "#39ff14"; // light green name
		}
		else {
			ctx.fillStyle = "#08720d"; // dark green name
		}
	}
	else if (character.hostility === "neutral") {
		ctx.fillStyle = "#c9c202"; // yellow name
	}
	else if (character.hostility === "gameHostile") { // real player (e.g. tagged in a game of tag)
		ctx.fillStyle = "#ff6c17"; // orange name
	}
	else if (character.hostility === "boss") {
		ctx.fillStyle = "#8c0700"; // dark red name
	}
	else if (character.hostility === "hero") {
		ctx.fillStyle = "black";
	}
	else {
		ctx.fillStyle = "black";
	}

	let nameText = character.name;

	// also show aggro if setting is on
	if (User.settings.aggro) {
		let aggro = undefined; // aggro of character on hero
		// see if character even has aggro on player
		if (typeof character.attackTargets !== "undefined") {
			// try to find the attacker in the target's targets (I'm getting jamais vu...)
			for (let i = 0; i < character.attackTargets.length; i++) {
				if (character.attackTargets[i].target.constructor.name === "Hero") {
					aggro = Round(character.attackTargets[i].aggro, 1);
					aggro += character.attackTargets[i].baseAggro;
					break;
				}
			}
		}
		if (typeof aggro !== "undefined") {
			nameText += " | "+aggro+"💢";
		}
	}

	// draw text
	ctx.fillText(nameText, x, y);
	// black border (easier to read)
	ctx.strokeText(nameText, x, y);
}

// draw a channelling bar (on given context, for given character, at given position, with given dimensions)
Game.drawChannellingBar = function (ctx, character, x, y, width, height) {
	const oldGlobalAlpha = ctx.globalAlpha;

	// figure out elapsed and remaining values (in ms)
	const elapsed = Date.now() - character.channellingInfo.start;
	//const remaining = Game.hero.channellingInfo.time - elapsed;
	const completedFraction = elapsed / character.channellingInfo.time;

	// fill colour (magenta is default)
	if (typeof character.channellingInfo.colour === "undefined") {
		ctx.fillStyle = "#f442c2";
	}
	else {
		ctx.fillStyle = character.channellingInfo.colour;
	}
	ctx.strokeStyle = "black";

	ctx.globalAlpha = 0.6;
	ctx.lineWidth = 1;

	// bar body
	ctx.fillRect(x, y, completedFraction * width, height);

	// bar border
	ctx.globalAlpha = 0.8;
	ctx.strokeRect(x, y, width-1, height);

	// text
	ctx.font = "bold " + height + "px El Messiri";
	ctx.textAlign = "center";
	ctx.fillStyle = "white";
	ctx.fillText(character.channellingInfo.description, x + width / 2, y + height / 4 * 3);

	ctx.globalAlpha = oldGlobalAlpha;
}

// draw status effects (on given context, for given character, at given position [top left], with given height [width based on height and number of status effects])
// default (unscaled) height of image is 27
// alignment should be set to "centre", "left", or "right" based on how the status effects should be aligned from the x position passed in
Game.drawStatusEffects = function (ctx, character, x, y, height, alignment) {
	// figure out font size of time remaining
	let fontSize = height * 2/3;

	// figure out leftmost x position
	let startX;
	if (alignment === "left") {
		startX = x;
	}
	else if (alignment === "right") {
		startX = x - (character.statusEffects.length-character.numberOfHiddenStatusEffects)*height;
	}
	else if (alignment === "centre") {
		startX = x - (character.statusEffects.length-character.numberOfHiddenStatusEffects)*height/2;
	}
	else {
		console.error("Invalid alignment: " + alignment);
	}

	// number of status effects that are hidden, thus offsetting the others
	let offsetNumber = 0;

	// iterate through character's status effects
	for (let i = 0; i < character.statusEffects.length; i++) {
		// don't show hidden status effects
		if (!character.statusEffects[i].hidden) {

			// get number of image in status effect image tileset
			let iconNum = this.getStatusIconNumber(character.statusEffects[i]);

			// draw the image
			ctx.drawImage(this.statusImage, 0, 27 * iconNum, 27, 27, startX + (i-offsetNumber) * (height*1.2), y, height, height);

			// draw time remaining (if the status effect has one)
			ctx.fillStyle = "black";
			ctx.font = fontSize + "px El Messiri";
			ctx.textAlign = "right";
			if (typeof character.statusEffects[i].info !== "undefined") { // variable that contains time exists
				if (character.statusEffects[i].info.showTime !== false && typeof character.statusEffects[i].info.time !== "undefined" && typeof character.statusEffects[i].info.ticks !== "undefined") { // variable exists
					ctx.fillText(Math.ceil((character.statusEffects[i].info.time - character.statusEffects[i].info.ticks)*10)/10, (startX+height*0.9) + (i-offsetNumber) * (height*1.2), y+height);
				}
			}
		}
		else {
			// offset the others
			offsetNumber++;
		}
	}

	// reset formatting
	ctx.textAlign = "center";
}

// draw spells (on given context, for given character, at given position [top left], with given height [width based on height and number of spells])
// default (unscaled) height of image is 27
// alignment should be set to "centre", "left", or "right" based on how the status effects should be aligned from the x position passed in
// currently just done for Game.hero
Game.drawSpells = function (ctx, character, x, y, height, alignment) {
	// figure out font size of time remaining
	let fontSize = height * 2/3;

	// figure out leftmost x position
	let startX;
	if (alignment === "left") {
		startX = x;
	}
	else if (alignment === "right") {
		startX = x - (character.spells.length)*height;
	}
	else if (alignment === "centre") {
		startX = x - (character.spells.length)*height/2;
	}
	else {
		console.error("Invalid alignment: " + alignment);
	}

	// iterate through character's spells
	for (let i = 0; i < character.spells.length; i++) {
		// get number of image in spell image tileset
		let iconNum = Spells[character.spells[i].id].imgIconNum;

		// draw the image
		ctx.drawImage(this.spellImage, 0, 27 * iconNum, 27, 27, startX + i * (height*1.2), y, height, height);

		// draw time remaining (if the spell has one)
		ctx.fillStyle = "black";
		ctx.font = fontSize + "px El Messiri";
		ctx.textAlign = "right";

		if (typeof character.spells[i].onCooldown !== "undefined" && character.spells[i].onCooldown > 0) {
			ctx.fillText(Round(character.spells[i].onCooldown/1000), (startX+height*0.9) + i * (height*1.2), y+height);
		}
	}

	// reset formatting
	ctx.textAlign = "center";
}

// displays information on canvas (big text)
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

// checks if the passed in object of type Visible should be rendered
Game.shouldBeRendered = function (objectToRender) {
	let renderImage = true; // if image should be rendered

	if (!this.camera.isOnScreen(objectToRender, "image")) {
		// not on screen
		renderImage = false;
	}
	else if (objectToRender.stats !== undefined && objectToRender.stats.stealthed && objectToRender.constructor.name !== "Hero") {
		// stealthed + not the player
		renderImage = false;
	}
	else if (objectToRender.hidden === true) {
		// hidden
		renderImage = false;
	}
	else if (objectToRender.respawning && !objectToRender.isCorpse) {
		// respawning and not a corpse
		renderImage = false;
	}
	else if (objectToRender.preRenderFunction !== undefined) {
		renderImage = objectToRender.preRenderFunction();
		// whether image is rendered is based off the return value of preRenderFunction
		// also applies for whether postRenderFunction is called
	}

	return renderImage;
}

// draw images on canvas
Game.render = function (delta) {
	// clear previous frame
	this.ctx.clearRect(0, 0, Dom.canvas.width, Dom.canvas.height);
    this.ctxLight.clearRect(0, 0, Dom.canvas.width, Dom.canvas.height);

    // fill canvas 'background colour' as black (or whatever other colour it should be)
	if (typeof Areas[this.areaName].borderColour !== "undefined") {
    	this.ctx.fillStyle = Areas[this.areaName].borderColour;
	}
	else {
	    this.ctx.fillStyle = "black";
	}
	this.ctx.globalAlpha = 1;
	this.ctx.fillRect(0, 0, Dom.canvas.width, Dom.canvas.height);

	// draw map background layer
	this.drawLayer(0);

	// draw any objects that have z value less than -1
	for (let i = 0; i < this.allVisibles.length; i++) { // iterate through everything to be rendered
		let objectToRender = this.allVisibles[i];

		// check object should be rendered
		if (objectToRender.z < -1 && this.shouldBeRendered(objectToRender)) {
			this.renderObject(objectToRender);
		}
	}

	// draw other map layers
	if (map.layers.length > 1) {
		for (let layer = 1; layer < map.layers.length; layer++) {
			this.drawLayer(layer);
		}
	}


	// auras behind hero (currently just works for hero)
	if (this.hero.stats.frostaura) {
		this.ctx.globalAlpha = 0.15;
		this.ctx.fillStyle = "#b8fff4";
		this.ctx.beginPath();
		this.ctx.ellipse(this.hero.screenX, this.hero.screenY, this.hero.stats.range, this.hero.stats.range, 0, 0, Math.PI*2);
		this.ctx.fill();
	}
	if (this.hero.stats.arcaneAura) {
		// spell object in player that corresponds to this spell
		let spellObj = Game.hero.spells.find(spellObj => spellObj.id === 3);
		// draw the aura!
		if (this.hero.mana >= Spells[3].manaPerSecond[spellObj.tier] * 0.1) {
			// shows brighter when they have enough mana also!
			this.ctx.globalAlpha = 0.3;
		}
		else {
			this.ctx.globalAlpha = 0.15;
		}
		this.ctx.fillStyle = "#8863ff";
		this.ctx.beginPath();
		this.ctx.ellipse(this.hero.screenX, this.hero.screenY, this.hero.stats.range, this.hero.stats.range, 0, 0, Math.PI*2);
		this.ctx.fill();
	}
	this.ctx.globalAlpha = 1;

	// set canvas settings to what they were
	this.ctx.lineWidth = 1;


	// npcs

	// sort by y value (from bottom of npc)
	// set values to sort by, basing their value on their z position as well as y value
	// 10^10 is an arbitrary value that should always be out of reach of y values
	for (let i = 0; i < this.allVisibles.length; i++) {
		if (this.allVisibles[i].hidden !== true) {
			this.allVisibles[i].sortValue = this.allVisibles[i].y + this.allVisibles[i].height/2 + this.allVisibles[i].orderOffsetY + this.allVisibles[i].z * 10000000000;
		}
		else {
			// a y value might not have been assigned to the object yet
			// arbitary sort value
			this.allVisibles[i].sortValue = 0;
		}

		if (isNaN(this.allVisibles[i].sortValue)) {
			// illegal sortValue due to an NaN value in one of the character's positions
			console.error("NaN sortValue for " + this.allVisibles[i].name + ". Please tell Jake!");
			// arbitary sort value
			this.allVisibles[i].sortValue = 0;
		}
	}
	// gnomesort - used because it is fast on mostly sorted data (which this will be because NPCs don't move)
	let i = 0;
	while (i < this.allVisibles.length) {
		if (i === 0 || this.allVisibles[i].sortValue >= this.allVisibles[i-1].sortValue) {
			// nothing to swap
	        i++;
	    }
	    else {
	        // swap
	        let mem = this.allVisibles[i];
	        this.allVisibles[i] = this.allVisibles[i-1];
	        this.allVisibles[i-1] = mem;
	        i--;
	    }
	}

	// render everything with image or shape
	for (let i = 0; i < this.allVisibles.length; i++) { // iterate through everything to be rendered

		let objectToRender = this.allVisibles[i];

		// check object should be rendered
		if (objectToRender.z >= -1 && this.shouldBeRendered(objectToRender)) {
			this.renderObject(objectToRender);
		}

	}

	// line between fishing bobber and player
	if (this.hero.channelling === "fishing" || (this.hero.channelling.type !== undefined && FishingGame.status !== 0)) { // check player's fishing bobber is out

		// find projectile
		let projectile = this.projectiles[this.searchFor(this.hero.channellingProjectileId, this.projectiles)];

		// change line position based on bobber state
		let bobberPositionAdjust = 0; // adjust in y value from projectile y
		if (projectile.bobberState === 0) {
			bobberPositionAdjust = -8; // bobber above water
		}
		else if (projectile.bobberState === 1) {
			bobberPositionAdjust = 0; // bobber bobbing
		}
		else if (projectile.bobberState === 2) {
			bobberPositionAdjust = 8; // bobber submerged by fish
		}

		// line colour
		this.ctx.strokeStyle = "grey";

		// line width
		this.ctx.lineWidth = 1;

		// fishing line path
		this.ctx.beginPath();
		this.ctx.moveTo(projectile.screenX, projectile.screenY + bobberPositionAdjust);
		this.ctx.lineTo(this.hero.screenX, this.hero.screenY);
		this.ctx.stroke();
	}

	// line between lead and player
	if (this.hero.hasOnLead !== undefined) {
		// line colour
		this.ctx.strokeStyle = "#834405";

		// line width
		this.ctx.lineWidth = 5;

		// line path
		this.ctx.beginPath();
		this.ctx.moveTo(this.hero.hasOnLead.screenX, this.hero.hasOnLead.screenY);
		this.ctx.lineTo(this.hero.screenX, this.hero.screenY);
		this.ctx.stroke();
	}

	// draw player skin animations
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

	// only render the following if the player isn't pressing the shift key
	// also do not render if a screenshot is going to be taken with the camera this tick
	if (!this.keysDown.SHIFT && !this.takePhoto) {
		// low health red border
		let healthProportion = Game.hero.health / Game.hero.stats.maxHealth;
		if (healthProportion < 0.2) {
			let width = Dom.canvas.width - Game.viewportOffsetX; // takes into account black bars
			let height = Dom.canvas.height - Game.viewportOffsetY;
			let maxDimension = Math.max(width, height); // for rectangle canvases
			let gradient = this.ctx.createRadialGradient(Dom.canvas.width/2, Dom.canvas.height/2, 0, Dom.canvas.width/2, Dom.canvas.height/2, maxDimension/2);
			gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
			let opacity = (0.2 - healthProportion) * 2.5;
			gradient.addColorStop(1, "rgba(255, 0, 0, "+opacity+")");
			this.ctx.fillStyle = gradient;
			this.ctx.fillRect(0, 0, width, height);
		}

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


		// render secondary canvas
		this.secondary.render();
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

// render a particular object
Game.renderObject = function (objectToRender) {
	if (objectToRender.transparency !== undefined) {
		this.ctx.globalAlpha = objectToRender.transparency;
	}

	if (objectToRender.renderType === "image") {
		// rendering an image!
		if (objectToRender.rotate !== undefined && objectToRender.rotate !== 0) {
			// rotate and draw (just for projectiles currently)
			// no crop information passed in
			this.drawImageRotated(
				this.ctx,
				objectToRender.image,
				objectToRender.crop.x, objectToRender.crop.y,
				objectToRender.crop.width, objectToRender.crop.height,
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
	}
	else if (objectToRender.renderType === "shape") {
		// rendering a shape!
		this.ctx.fillStyle = objectToRender.colour;
		this.ctx.strokeStyle = objectToRender.borderColour;
		this.ctx.lineWidth = objectToRender.thickness;
		if (objectToRender.shape === "ellipse") {
			this.ctx.beginPath();
			this.ctx.ellipse(objectToRender.screenX, objectToRender.screenY, objectToRender.width, objectToRender.height, objectToRender.rotation);

			// if it has a colour transition, carry this out
			if (typeof objectToRender.colourTransition !== "undefined") {
				if (typeof objectToRender.deltaRed !== "undefined") {
					// delta red is the amount of red to be changed by every second, in RBG
				}


				// split into decimal rgb components
				let r = parseInt(color.substring(1, 3), 16);
				let g = parseInt(color.substring(3, 5), 16);
				let b = parseInt(color.substring(5), 16);
			}

				// texture colors
				let random = randomNum(depth * -1, depth * 1); // textures all colors by the same amount
				r = Math.max(Math.min(r + random, 255), 0);
				g = Math.max(Math.min(g + random, 255), 0);
				b = Math.max(Math.min(b + random, 255), 0);

				// convert back to hex
				r = r.toString(16);
				g = g.toString(16);
				b = b.toString(16);
				if (r.length === 1) {
					r = "0" + r;
				}
				if (g.length === 1) {
					g = "0" + g;
				}
				if (b.length === 1) {
					b = "0" + b;
				}

				return "#"+r+g+b;

			// optional changing between colours
			this.colourTransition = properties.colourTransition; // array of colours to transition between
			this.transitionSpeed = properties.transitionSpeed;
		}
		else if (objectToRender.shape === "rect") {
			this.ctx.beginPath();
			this.ctx.rect(objectToRender.screenX, objectToRender.screenY, objectToRender.width, objectToRender.height);
		}

		if (typeof objectToRender.colour !== "undefined") {
			this.ctx.fill();
		}
		if (typeof objectToRender.borderColour !== "undefined") {
			this.ctx.stroke();
		}
	}

	if (objectToRender.postRenderFunction !== undefined) {
		objectToRender.postRenderFunction();
	}

	// set back transparency if it was set to something else
	if (objectToRender.transparency !== undefined) {
		this.ctx.globalAlpha = 1;
	}

	// effect images
	// these are not treated as their own objects, since they are associated directly with the image of whatever was just drawn
	if (typeof objectToRender.hasStatusEffectType !== "undefined" && objectToRender.hasStatusEffectType("root")) {
		// objectToRender must be a character, so has a footHitbox
		let img = Loader.getImage("rootedStatusImage");
		this.ctx.drawImage(
			img,
			objectToRender.footHitbox.screenX - img.width/2, objectToRender.footHitbox.screenY - img.height*0.75
		);
	}
}

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

	// if the inventory is open make it an inventory alert, else make it a canvas alert
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

	// if the weapon is a fishing rod, check the mouse is in water
	let rodInWater = true;
	if (Player.inventory.weapon.type === "rod") {
		// rod equipped
		if (map.isSlowTileAtXY(event.clientX + Game.camera.x, event.clientY + Game.camera.y) !== "water") {
			// no water tile at mouse pointer
			rodInWater = false;
		}
	}

	// check the player's not reloading and that they have a weapon equipped (i.e. range > 0)
	// pppppppppppppppppp readd rod range
	if (Game.hero.stats.range > 0 && Game.hero.canAttack && rodInWater) {
		// hero can attack (crosshair)
		let cursor = Skins[Player.class][Player.skin].cursor;
		if (cursor !== "crosshair") {
			// cursor requires custom image
			cursor = "url('assets/cursors/" + cursor + ".png') " + Skins[Player.class][Player.skin].cursorPosition.x + " " + Skins[Player.class][Player.skin].cursorPosition.y + ", auto;";
		}
		document.getElementById("click").setAttribute("style","cursor: " + cursor);
	}
	else {
		// hero cannot attack (normal cursor)
		document.getElementById("click").style.cursor = "default";
	}
}

// render secondary canvas (contains anything that does not need to be continuously redrawn)
// mainly PG code
Game.secondary.render = function () {
	// clear secondary canvas
	this.ctx.clearRect(0, 0, Dom.canvas.width, Dom.canvas.height);

    // fill canvas 'sidebars' as black if area is small (maybe a bit inefficient, but comment out and see what happens otherwise if the screen shakes..)
    this.ctx.fillStyle = "black";
	this.ctx.globalAlpha = 1;
	if (Game.viewportOffsetX > 0) {
    	this.ctx.fillRect(0, 0, Game.viewportOffsetX+1, Dom.canvas.height); // +1 because otherwise it would not reach the game
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
		// player mana bar at top-left (only drawn if they have a max mana)
		Game.drawManaBar(this.ctx, Game.hero, 10, 43, 250, 25);

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

		// hero channelling bar above xp bar
		if (Game.hero.channellingInfo !== false && typeof Game.hero.channellingInfo.description !== "undefined") {
			Game.drawChannellingBar(this.ctx, Game.hero, Dom.canvas.width/2-167.6, Dom.canvas.height-104, 335, 12);
		}

		// level
		this.ctx.font = "bold 30px El Messiri";
        this.ctx.textAlign = "center";
        this.ctx.fillStyle = "lightGrey";
        this.ctx.fillText(Player.level, Dom.canvas.width/2, Dom.canvas.height-74);
        this.ctx.fillStyle = "white";
        this.ctx.fillText(Player.level, Dom.canvas.width/2-2, Dom.canvas.height-76);

		// status effect icons next to health bar
		this.ctx.globalAlpha = 0.8;
		Game.drawStatusEffects(this.ctx, Game.hero, 270, 10, 27, "left");

		// status effect icons next to mana bar
		Game.drawSpells(this.ctx, Game.hero, 270, 43, 27, "left");
		this.ctx.globalAlpha = 0.6;
	}
}

// only called whenever loadArea is called (for efficiency) - called as often as getTime
// night effect
Game.renderDayNight = function () {
	// wipe canvas
	this.ctxDayNight.clearRect(0, 0, Dom.canvas.width, Dom.canvas.height);

	// lightning
	if (Weather.lightningOnScreen) {
		this.ctxDayNight.fillStyle = "#ffffff"; // white
		this.ctxDayNight.globalAlpha = 0.10;
		this.ctxDayNight.fillRect(0, 0, Dom.canvas.width, Dom.canvas.height);
	}
	else {
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

			// fog
			this.ctxDayNight.fillStyle = "#999999";
			this.ctxDayNight.globalAlpha = Event.fog; // max 0.6 - darkness / 2 probs
			this.ctxDayNight.fillRect(0, 0, Dom.canvas.width, Dom.canvas.height);
		}
	}

	// use https://stackoverflow.com/questions/33351074/drawing-lights-on-a-canvas
}

//
// Save player progress
//

Game.saveProgress = function (saveType) { // if saveType is "auto" then the save is an autosave (hence has a slightly different console.info)
	if (localStorage.getItem("accept") === "true") {
		// save player position to savedata.js
		Player.x = Game.hero.x;
		Player.y = Game.hero.y;
		Player.checkpoint = Game.hero.checkpoint;
		// save other player details that aren't otherwise saved to savedata
		Player.health = Game.hero.health;
		Player.mana = Game.hero.mana;
		Player.trails = Game.hero.trails;
		Player.oldPosition = Game.hero.oldPosition; // temporary teleport
		// re-link status effects + spells (inefficient - tbd)
		Player.statusEffects = Game.hero.statusEffects;
		Player.spells = Game.hero.spells;
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

		Game.clearTimeout(Game.saveTimeout); // clear the previous 60 second timeout to avoid saves being too often
		Game.saveTimeout = Game.setTimeout(function() {
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
