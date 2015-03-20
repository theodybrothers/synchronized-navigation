(function () {
	'use strict';
	var socketio = require("socket.io");
	
	module.exports = function (server) {
		
		var io = socketio.listen(server);
		
		io.on('connection', function (socket) {
			
			socket.on('join', function (data) {
				
				var address = socket.handshake.address;
				console.log("Joined: " + address);
				
				socket.emit('joined', { message: "You are connected!" });
			});
			
			socket.on('send message', function (data) {
				
				console.log("Message: " + data.message);
				
				io.emit('client message', { message: data.message });
			});
			
			socket.on('navigate', function (data) {
				console.log("Navigate: " + data.url);
				
				io.emit('navigate browser', { url: data.url });
			});
		});
	};
								
}());