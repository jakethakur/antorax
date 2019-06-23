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
			case "username":
				// save client name information
				ws.username = parsedMessage.content;
				wss.broadcast(JSON.stringify({
					type: "info",
					content: ws.username + " has joined the game!"
				}), [ws.userID]);
				break;

			case "keepAlive":
				// used to stop the connection dying after 55s (Heroku)
				// response to server-sent "keepAlive"
				// do nothing
				break;

			default:
				// broadcast to all others
				wss.broadcast(data);
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
	});

	// tbd: https://github.com/websockets/ws#how-to-detect-and-close-broken-connections
});

// function to send parameter to all clients
// data should be a JSON object with type and content...
// exceptions should be an array of all of the userIDs not to send the message to
wss.broadcast = function broadcast(data, exceptions) {
	for (let i = 0; i < wss.clients.length; i++) {
		// check client's websocket is open
		console.log("broadcasting: ", data);
		if (wss.clients[i].readyState === 1) {
			// check client is not an exception
			console.log("client ready, id = " + wss.clients[i].userID);
			console.log("exceptions: ", exceptions);
			if (typeof exceptions === "undefined" || !exceptions.includes(wss.clients[i].userID)) {
				console.log("sending");
				wss.clients[i].send(data);
			}
		}
	}
};

// stop the clients dying after 10s
setInterval(function () {
	wss.broadcast(JSON.stringify({
		type: "keepAlive",
	}));
}, 10000);
