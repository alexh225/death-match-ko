define(function(){

	return {
		connect: function(url) {
			console.log('mock socket.io connect:', url);
			return {
				on: function(eventName) {
					console.log('mock socket.io on:', eventName);
				},
				emit: function(eventName, payload) {
					console.log('mock socket.io emit:', eventName, payload);
				}
			}
		}
	};

});