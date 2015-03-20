(function () {
	'use strict';

	var socket = io.connect(location.host);
	
	document.getElementById('message-button').addEventListener('click', function () {

		var message = document.getElementById('message').value;
		socket.emit('send message', { message: message });
	});
	
	document.getElementById('navigate-button').addEventListener('click', function () {
		
		var url = document.getElementById('url').value;
		socket.emit('navigate', { url: url });
	});

}());