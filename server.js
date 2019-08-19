"use strict";

// this file is only run by the Heroku version of Antorax

// https://devcenter.heroku.com/articles/node-websockets
// https://github.com/websockets/ws

//
// Dependencies
//

const express = require("express");
const path = require("path");
const WebSocket = require("ws");
const SocketServer = WebSocket.Server;

//
// Server intialisation
//

const PORT = process.env.PORT || 3000; // port to listen on

const INDEX = path.join(__dirname, "index.html"); // index address

var app = express();

// allow client.js (static file) to run from index.html
app = app.use("/", express.static(__dirname));

app = app.use(function (req, res) {
	res.sendFile(INDEX)
});

// convert app to http server
const server = app.listen(PORT, function () {
	console.info(`Listening on port ${ PORT }`)
});

const wss = new SocketServer({server}); // wss = web socket server

//
// Global variables
//

// total connections - used for user IDs (unique to user)
var connections = 0;

// used for retroactively telling users as they join if there is a minigame in progress (to stop them starting a new one)
var minigameInProgress;

// handle connection
wss.on("connection", (ws) => { // note that ws = client in wss.clients
	console.info("Client connected");

	// set a unique user ID (different to ws.name becasue this is unique)
	ws.userID = connections;
	connections++;

	// handle message received from client
	// tbd: does this go outside of "connection" or inside?
	ws.on("message", function (data) {
		let parsedMessage = JSON.parse(data);

		// check message type and perform an action based on this type
		switch (parsedMessage.type) {

			case "playerLocation":
				// save client information in websocket (in case a user joins and needs to know it)
				ws.x = parsedMessage.x;
				ws.y = parsedMessage.y;
				ws.direction = parsedMessage.direction;
				ws.expand = parsedMessage.expand;
				// broadcast to chat DOM (for displaying players online)
				wss.broadcast(data, ws.userID);
				break;

			case "userInformation":
				// sent when the user joins the websocket

				// save client name information in websocket
				ws.name = parsedMessage.name;
				ws.class = parsedMessage.class;
				ws.level = parsedMessage.level;
				ws.skin = parsedMessage.skin;
				ws.area = parsedMessage.area;
				ws.displayArea = parsedMessage.displayArea;
				ws.x = parsedMessage.x;
				ws.y = parsedMessage.y;
				ws.direction = parsedMessage.direction;
				ws.expand = parsedMessage.expand;
				ws.equipment = parsedMessage.equipment;
				ws.achievementPoints = parsedMessage.achievementPoints;

				// message the user to tell them what their userID is
				// this information is used by the client if they want to except themselves from broadcasts
				ws.send(JSON.stringify({
					type: "userID",
					content: ws.userID
				}));

				// message the user to tell them about a minigame in progress if there is one active
				if (minigameInProgress !== undefined) {
					ws.send(JSON.stringify({
						type: minigameInProgress.game + "Game",
						action: "retroactive",
						area: minigameInProgress.area,
						status: minigameInProgress.status
					}));
				}

				// broadcast to chat DOM (for displaying players online)
				// also broadcasts to all other players that the user logged on
				let numberOnline = GetNumberOnline();
				wss.broadcast(JSON.stringify({
					type: "playersOnline",
					action: "join",
					numberOnline: numberOnline,
					userID: ws.userID,
					name: parsedMessage.name,
					class: parsedMessage.class,
					level: parsedMessage.level,
					skin: parsedMessage.skin,
					area: parsedMessage.area,
					displayArea: parsedMessage.displayArea,
					x: parsedMessage.x,
					y: parsedMessage.y,
					direction: parsedMessage.direction,
					expand: parsedMessage.expand,
					equipment: parsedMessage.equipment,
					achievementPoints: parsedMessage.achievementPoints
				}));

				// message the user to tell them about all the other users online
				// x, y, and direction are done in "changeArea" so it is done on join and also every area change
				wss.clients.forEach(function (client) {
					// check the client is not the current user
					if (client.userID !== ws.userID) {
						ws.send(JSON.stringify({
							type: "playersOnline",
							action: "retroactive",
							userID: client.userID,
							name: client.name,
							class: client.class,
							level: client.level,
							skin: client.skin,
							area: client.area,
							displayArea: client.displayArea,
							x: client.x,
							y: client.y,
							direction: client.direction,
							expand: client.expand,
							equipment: client.equipment,
							achievementPoints: client.achievementPoints,
							playingGame: client.playingGame
						}));
					}
				});

				break;

			case "keepAlive":
				// used to stop the connection dying after 55s (Heroku)
				// response to server-sent "keepAlive"
				// do nothing
				break;

			case "changeArea":
				ws.area = parsedMessage.area;
				ws.displayArea = parsedMessage.displayArea;
				// new positions are also saved
				ws.x = parsedMessage.x;
				ws.y = parsedMessage.y;
				ws.direction = parsedMessage.direction;
				ws.expand = parsedMessage.expand;

				// broadcast to chat DOM (for displaying players online)
				wss.broadcast(JSON.stringify({
					type: "playersOnline",
					action: "area",
					userID: ws.userID,
					area: parsedMessage.area,
					displayArea: parsedMessage.displayArea,
					x: parsedMessage.x,
					y: parsedMessage.y,
					direction: parsedMessage.direction,
					expand: parsedMessage.expand
				}));
				// tell the user that changed area the position of all players (so it knows the position of players in its new area)
				wss.clients.forEach(function (client) {
					// check the client is not the current user
					if (client.userID !== ws.userID) {
						ws.send(JSON.stringify({
							type: "playerLocation",
							userID: client.userID,
							x: client.x,
							y: client.y,
							direction: client.direction,
							expand: client.expand
						}));
					}
				});
				break;

			case "changeLevel":
				ws.level = parsedMessage.level;

				// broadcast to chat DOM (for displaying players online)
				wss.broadcast(JSON.stringify({
					type: "playersOnline",
					action: "level",
					userID: ws.userID,
					level: parsedMessage.level
				}));
				break;

			case "changeEquipment":
				ws.equipment = parsedMessage.equipment;

				// broadcast to chat DOM (for displaying on pressing space on user
				wss.broadcast(JSON.stringify({
					type: "playersOnline",
					action: "equipment",
					userID: ws.userID,
					equipment: parsedMessage.equipment
				}));
				break;

			case "achievementEarnt":
				ws.achievementPoints = parsedMessage.achievementPoints;

				// broadcast to chat DOM (for displaying on pressing space on user
				wss.broadcast(JSON.stringify({
					type: "playersOnline",
					action: "achievement",
					userID: ws.userID,
					achievementPoints: parsedMessage.achievementPoints,
					achievement: parsedMessage.achievement // name of achievement earnt
				}));
				break;

			case "msg":
				// private message a user
				wss.clients.forEach(function (client) {
					// look for a user with the name
					if (client.name === parsedMessage.name) {
						client.send(JSON.stringify({
							type: "msg",
							sender: ws.name,
							name: ws.name + " &#10132; " + client.name,
							content: parsedMessage.content,
						}));
					}
				});
				break;

			case "ping":
				// return with a pong
				ws.send(data);
				break;

			case "trade":
				// look for target client
				wss.clients.forEach(function (client) {
					if (client.userID === parsedMessage.target) {
						client.send(data);
					}
				});
				break;

			case "tagMinigame":
				switch (parsedMessage.action) {
					case "startGame":
						// server handles the game
						minigameInProgress = {
							game: "tag",
							area: parsedMessage.area,
							spawnArea: parsedMessage.spawnArea, // for joined players
							status: "starting",
							joinedPlayers: [ws.userID], // userID of all joined players (to send them chat messages etc.)
							playerTagTimes: {}, // key = userID, value = time in seconds
							host: ws.userID,
						}

						// save this in server so player joining antorax retroactively know they are in the game
						ws.playingGame = "tag";

						// send out invites to other players
						wss.clients.forEach(function (client) {
							// check the client is not the current user
							if (client.userID !== ws.userID) {
							   client.send(JSON.stringify({
								   type: "tagGame",
								   action: "request",
								   startedBy: ws.userID,
								   area: parsedMessage.area,
								   displayAreaName: parsedMessage.displayAreaName,
								   spawnArea: parsedMessage.spawnArea,
								   spawnX: parsedMessage.spawnX,
								   spawnY: parsedMessage.spawnY,
							   }));
							}
						});

						// start game in 30 seconds
						minigameInProgress.timeUntilStart = 30000;
						// every second, decrease game time left by a second and tell the remaining game time to clients
						minigameInProgress.timeInterval = setInterval(function () {
							minigameInProgress.timeUntilStart -= 1000;

							if (minigameInProgress.timeUntilStart <= 0) {
								// game ready to start
								StartTagGame();
							}
							else {
								// tell players in game the time left (so it cna be displayed for them)
								wss.clients.forEach(client => {
									if (minigameInProgress.joinedPlayers.includes(client.userID)) {
										client.send(JSON.stringify({
											type: "tagGame",
											action: "timeRemaining",
											content: minigameInProgress.timeUntilStart
										}));
									}
								});
							}
						}, 1000);

						break;

					case "joinGame":
						// tell all other players that this player joined
						wss.clients.forEach(client => {
							if (client.userID !== ws.userID) {
								client.send(JSON.stringify({
									type: "tagGame",
									action: "playerJoin",
									userID: ws.userID, // id of person joining
									// for positioning
									area: minigameInProgress.spawnArea,
								}));
							}
						});

						// save this in server so player joining antorax retroactively know they are in the game
						ws.playingGame = "tag";

						// someone has joined the tag game
						minigameInProgress.joinedPlayers.push(ws.userID);

						break;

					case "tagPlayer":
						// figure out time previous player was tagged for
						let time = Date.now() - minigameInProgress.prevTagTime;
						// add this to their playerTagTimes
						minigameInProgress.playerTagTimes[minigameInProgress.taggedPlayer] += time;

						// new player tagged
						minigameInProgress.taggedPlayer = parsedMessage.userID;

						// time of this player being tagged (so it is known for leaderboard how long they were tagged for)
						minigameInProgress.prevTagTime = Date.now();

						// tell other users in game (apart from user who sent the message because they have already called the function)
						wss.clients.forEach(client => {
							if (minigameInProgress.joinedPlayers.includes(client.userID) && client.userID !== ws.userID) {
								client.send(JSON.stringify({
									type: "tagGame",
									action: "taggedPlayer",
									taggedPlayer: parsedMessage.userID
								}));
							}
						});

						break;

				}
				break;

			default:
				// broadcast to all others
				wss.broadcast(data, parsedMessage.except);
		}
	});

	// handle disconnection
	ws.on("close", function () {
		console.info("Client disconnected");

		// broadcast to chat DOM (for displaying players online)
		// also broadcasts to all other players that the user logged off
		let numberOnline = GetNumberOnline();
		wss.broadcast(JSON.stringify({
			type: "playersOnline",
			action: "leave",
			numberOnline: numberOnline,
			userID: ws.userID,
		}));

		// remove from minigame if they are in one

		if (minigameInProgress !== undefined) {
			let mingameUserIndex = minigameInProgress.joinedPlayers.findIndex(player => player === ws.userID); // index of user in joined players
			if (mingameUserIndex !== -1) {
				// are playing minigame
				// remove them
				minigameInProgress.joinedPlayers.splice(mingameUserIndex, 1);
				delete minigameInProgress.playerTagTimes[ws.userID];

				// check if they were tagged
				if (minigameInProgress.taggedPlayer === ws.userID) {
					// tag a random other player instead
					minigameInProgress.taggedPlayer = minigameInProgress.joinedPlayers[Random(0, minigameInProgress.joinedPlayers.length-1)];

					// tell other users in game
					wss.clients.forEach(client => {
						if (minigameInProgress.joinedPlayers.includes(client.userID) && client.userID !== ws.userID) {
							client.send(JSON.stringify({
								type: "tagGame",
								action: "taggedPlayer",
								reason: "playerLeave",
								taggedPlayer: minigameInProgress.taggedPlayer
							}));
						}
					});
				}
			}
		}
	});

	// tbd: https://github.com/websockets/ws#how-to-detect-and-close-broken-connections
});

// function to send parameter to all clients
// data should be a JSON object with type and content...
// exception should be a userID not to send the message to
wss.broadcast = function broadcast(data, exception) {
	// forEach is required because wss.clients is a set not an array...
	// (and Heroku does not support for loop through set)
	wss.clients.forEach(function (client) {
		// check client's websocket is open
		if (client.readyState === 1) {
			// check client is not an exception
			if (exception !== client.userID) {
				client.send(data);
			}
		}
	});
};

// stop the clients dying after 55s (fixes H15 error on Heroku)
setInterval(function () {
	wss.broadcast(JSON.stringify({
		type: "keepAlive",
	}));
}, 10000); // 10s is an arbitrary value

//
// Misc functions
//

// returns the number of clients online
// necessary because localhost sees wss.clients as an array, but Heroku as a set
function GetNumberOnline() {
	let numberOnline = wss.clients.size;
	if (numberOnline === undefined) {
		numberOnline = wss.clients.length;
	}
	return numberOnline;
}

// find a client from their user ID
function FindClientFromID(userID) {
	let returnClient = null; // can't return from inside foreach :(

	wss.clients.forEach(client => {
		if (client.userID === userID) {
			returnClient = client;
		}
	});

	return returnClient;
}

// random integer between minimum and maximum (inclusive)
function Random (minimum, maximum) {
    return Math.floor((Math.random() * (maximum - minimum + 1)) + minimum);
}

//
// Tag game functions
//

// called after setTimeout
function StartTagGame () {
	// check there are at least 2 players in the game
	if (minigameInProgress.joinedPlayers.length > 1) {
		// start game
		minigameInProgress.status = "started";

		// figure out game length
		// 2 minutes + 30 seconds for each player above 2
		let gameLength = 120000 + 60000*(minigameInProgress.joinedPlayers.length-2);
		// upper limit is 4 minutes
		if (gameLength > 300000) {
			gameLength = 300000;
		}

		minigameInProgress.timeRemaining = gameLength; // counts down as messages are sent to players telling them how long is left

		// add all players to leaderboard
		for (let i = 0; i < minigameInProgress.joinedPlayers.length; i++) {
			minigameInProgress.playerTagTimes[minigameInProgress.joinedPlayers[i]] = 0;
		}

		// random tagged player to start
		minigameInProgress.taggedPlayer = minigameInProgress.joinedPlayers[Random(0, minigameInProgress.joinedPlayers.length-1)];

		// time of player being tagged (so it is known for leaderboard how long they were tagged for)
		minigameInProgress.prevTagTime = Date.now();

		// tell users it has started and who is tagged
		wss.clients.forEach(client => {
			client.send(JSON.stringify({
				type: "tagGame",
				action: "start",
				taggedPlayer: minigameInProgress.taggedPlayer,
				gameLength: minigameInProgress.timeRemaining
			}));
		});

		// clear old interval
		clearInterval(minigameInProgress.timeInterval);

		// every second, decrease game time left by a second and tell the remaining game time to clients
		minigameInProgress.timeInterval = setInterval(function () {
			minigameInProgress.timeRemaining -= 1000;

			if (minigameInProgress.timeRemaining <= 0) {
				// game finished
				EndTagGame();
			}
			else {
				// tell players in game the time left (so it cna be displayed for them)
				wss.clients.forEach(client => {
					if (minigameInProgress.joinedPlayers.includes(client.userID)) {
						client.send(JSON.stringify({
							type: "tagGame",
							action: "timeRemaining",
							content: minigameInProgress.timeRemaining
						}));
					}
				});
			}
		}, 1000);
	}
	else {
		// tell users it fizzled (and giving back the item to the person who started the game, i.e. the only person in the game)

		let returnGauntlet = true;
		if (minigameInProgress.joinedPlayers[0] !== minigameInProgress.host) {
			// host left the game
			returnGauntlet = false;
		}

		wss.clients.forEach(client => {
			client.send(JSON.stringify({
				type: "tagGame",
				action: "fizzle",
				returnGauntlet: returnGauntlet
			}));

			// close tag game so another game can be started
			client.playingGame = undefined;
		});

		// remove game time countdown interval
		clearInterval(minigameInProgress.timeInterval);

		// close tag game so another game can be started
		minigameInProgress = undefined;
	}
}

// called after setTimeout by StartTagGame
function EndTagGame () {
	// figure out time currently tagged player was tagged for
	let time = Date.now() - minigameInProgress.prevTagTime;
	// add this to their playerTagTimes
	minigameInProgress.playerTagTimes[minigameInProgress.taggedPlayer] += time;

	// remove game time countdown interval
	clearInterval(minigameInProgress.timeInterval);

	minigameInProgress.status = "finished";

	// tell users it has finished
	wss.clients.forEach(client => {
		client.send(JSON.stringify({
			type: "tagGame",
			action: "finish",
			leaderboardData: minigameInProgress.playerTagTimes
		}));
	});

	// remove users from game in 15s
	setTimeout(CloseTagGame, 15000);
}

// called after setTimeout by EndTagGame
function CloseTagGame () {
	// tell users it has closed
	wss.clients.forEach(client => {
		client.send(JSON.stringify({
			type: "tagGame",
			action: "close",
		}));

		client.playingGame = undefined;
	});

	minigameInProgress = undefined;
}
