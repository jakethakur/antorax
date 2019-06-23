"use strict";

// this file is only run by the Heroku version of Antorax

// https://devcenter.heroku.com/articles/node-websockets
// https://github.com/websockets/ws

// dependencies
const express = require("express");
const path = require("path");
const WebSocket = require("ws");
const SocketServer = WebSocket.Server;

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

var connections = 0; // total connections - used for user IDs (unique to user)

// handle connection
wss.on("connection", (ws) => { // note that ws = client in wss.clients
	console.info("Client connected");

	// set a unique user ID (different to ws.username becasue this is unique)
	ws.userID = connections;
	connections++;

	// handle message received from client
	// tbd: does this go outside of "connection" or inside?
	ws.on("message", function (data) {
		console.info("Received message: " + data);
		let parsedMessage = JSON.parse(data);
		// check message type and perform an action based on this type
		switch (parsedMessage.type) {
			case "userInformation":
				// sent when the user joins the websocket

				// save client name information in websocket
				ws.username = parsedMessage.username;

				// broadcast to others that the user logged on
				wss.broadcast(JSON.stringify({
					type: "info",
					content: ws.username + " has joined the game!"
				}), ws.userID);

				// message the user to tell them what their userID is
				// this information is used by the client if they want to except themselves from broadcasts
				ws.send(JSON.stringify({
					type: "userID",
					content: ws.userID
				}));

				// broadcast to chat DOM (for displaying players online)
				ws.send(JSON.stringify({
					type: "playersOnline",
					action: "join",
					numberOnline: wss.clients.size,
					userID: ws.userID,
					username: parsedMessage.username,
					class: parsedMessage.class,
					level: parsedMessage.level,
					skin: parsedMessage.skin,
					area: parsedMessage.area
				}));

				break;

			case "keepAlive":
				// used to stop the connection dying after 55s (Heroku)
				// response to server-sent "keepAlive"
				// do nothing
				break;

			case "changeArea":
				// broadcast to chat DOM (for displaying players online)
				ws.send(JSON.stringify({
					type: "playersOnline",
					action: "area",
					userID: ws.userID,
					area: parsedMessage.area
				}));
				break;

			default:
				// broadcast to all others
				wss.broadcast(data, parsedMessage.except);
		}
	});

	// handle disconnection
	ws.on("close", function () {
		console.info("Client disconnected");
		// broadcast this info to all others
		wss.broadcast(JSON.stringify({
			type: "info",
			content: ws.username + " has left the game."
		}));
		// broadcast to chat DOM (for displaying players online)
		ws.send(JSON.stringify({
			type: "playersOnline",
			action: "leave",
			numberOnline: wss.clients.size,
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
