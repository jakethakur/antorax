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

app = app.use((req, res) => res.sendFile(INDEX));

// convert app to http server
var server = app.listen(PORT, () => console.info(`Listening on port ${ PORT }`));

const wss = new SocketServer({server}); // wss = web socket server

// handle connection
wss.on("connection", (ws) => { // note that ws = client in wss.clients
	console.info("Client connected");
	// welcome the client
	// introduction message of new client to other clients is done via a message sent by new client to server
	ws.send(JSON.stringify({
		type: "info",
		content: "Welcome to the websocket! You have successfully connected."
	}));

	// handle message received from client
	// tbd: does this go outside of "connection" or inside?
	ws.on("message", (data) => {
		console.info("Received message: " + data);
		let parsedMessage = JSON.parse(data);
		// check message type and perform an action based on this type
		switch (parsedMessage.type) {
			case "username":
				// save client name information
				ws.username = parsedMessage.content;
				wss.broadcast(JSON.stringify({
					type: "info",
					content: ws.username + " has joined the game!"
				}));
				break;

			default:
				// broadcast to all others
				wss.broadcast(data);
		}
	});

	// handle disconnection
	ws.on("close", () => {
		console.info("Client disconnected");
		// broadcast this info to all others
		wss.broadcast(JSON.stringify({
			type: "info",
			content: ws.username + " has left the game."
		}));
	});

	// tbd: https://github.com/websockets/ws#how-to-detect-and-close-broken-connections
});

// function to send parameter to all clients
// parameter should be a JSON object with type and content...
wss.broadcast = function broadcast(data) {
	wss.clients.forEach((client) => {
		if (client.readyState === WebSocket.OPEN) {
			client.send(data);
		}
	});
};
