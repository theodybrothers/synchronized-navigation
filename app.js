(function () {
	'use strict';
	
	var http = require("http");
	var express = require("express");
	var app = express();
	var router = express.Router();
	
	app.use(express.static(__dirname + '/public'));
	
	router.use(function (req, res) {

		res.status(404).send("Did you get lost?");
	});

	router.use(function (err, req, res, next) {

		console.log("ERROR:");
		console.dir(err);
		
		if (req.xhr) {
			res.set('Content-Type','application/json');
			res.status(500).send({ message: "Oops, something went wrong." });
		} else {
			res.status(500).send("Oops, something went wrong.");
		}
	});

	app.use('/', router);

	var port = process.env.PORT || 3000;
	var server = http.createServer(app);
	server.listen(port);
	require('./sockets.js')(server);
	console.log("Listening on port %d", port);
	
}());