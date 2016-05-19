var express = require('express');
var app = express();
var io = require('socket.io');

// serve any file out of the current directory
app.use(express.static(__dirname));

// serve the index.html file by default
app.get('/', function(req, res) {
    res.sendfile(__dirname + '/index.html');
});

// pass the express server to socket.io
var io = require('socket.io').listen(app.listen(3000, function() {
    console.log('App listening on port 3000');
}));

io.on('connection', function(socket){
	console.log('new client has connected');
});
