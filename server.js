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
							achievementPoints: client.achievementPoints
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
							timeUntilStart: 30, // aaaaaaaaaaaaaaaaaaaaaaaaa nothing done with this
							joinedPlayers: [ws.userID] // userID of all joined players (to send them chat messages etc.)
						}

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
						setTimeout(function () {
							minigameInProgress.status = "started";

							// tell users it has started
							minigameInProgress.joinedPlayers.forEach(player => {
								let client = FindClientFromID(player);
								client.send(JSON.stringify({
									type: "tagGame",
									action: "start",
									taggedPlayer: ws.userID // the user that starts the game is tagged initially
								}));
							});

							// tagged player
							minigameInProgress.taggedPlayer = ws.userID;

							// end game in 2 minutes
							setTimeout(function () {
								// tell users it has finished
								minigameInProgress.joinedPlayers.forEach(player => {
									let client = FindClientFromID(player);
									client.send(JSON.stringify({
										type: "tagGame",
										action: "finish",
									}));
								});

								minigameInProgress = undefined;
							}, 120000);
						}, 30000);

						break;

					case "joinGame":
						// tell others in the game that they joined
						minigameInProgress.joinedPlayers.forEach(player => {
							let client = FindClientFromID(player);
							client.send(JSON.stringify({
								type: "tagGame",
								action: "playerJoin",
								userID: ws.userID, // id of person joining
								// for positioning
								area: minigameInProgress.spawnArea,
							}));
						});

						// someone has joined the tag game
						minigameInProgress.joinedPlayers.push(ws.userID);

						break;

					case "tagPlayer":
						// new player tagged
						minigameInProgress.taggedPlayer = parsedMessage.userID;

						// tell other users in game (apart from user who sent the message because they have already called the function)
						minigameInProgress.joinedPlayers.forEach(player => {
							if (player !== ws.userID) {
								let client = FindClientFromID(player);
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
