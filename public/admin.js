(function () {
	'use strict';

	var socket = io.connect(location.host);
	
	var message = document.getElementById('message');
	document.getElementById('message-button').addEventListener('click', function () {

		socket.emit('send message', { message: message.value });
	});
	
	document.getElementById('navigate-button').addEventListener('click', function () {
		
		var url = document.getElementById('url').value;
		socket.emit('navigate', { url: url });
	});

}());