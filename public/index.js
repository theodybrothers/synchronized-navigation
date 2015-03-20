(function () {
	'use strict';
	
	var addMessage = function (message) {
		
		var messages = document.getElementById('messages');

		messages.innerHTML = messages.innerHTML + message + '<br />';
	};
	
	var socket = io.connect(location.host);
	
	socket.on('navigate browser', function (data) {
		
		location.href = data.url;
	});
	
	socket.on('client message', function (data) {
		
		addMessage(data.message);
	});
	
	socket.on('joined', function (data) {
		
		addMessage(data.message);
	});
	
	socket.emit('join');

}());