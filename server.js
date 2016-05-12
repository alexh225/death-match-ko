var express = require('express');
var app = express();

// serve any file out of the current directory
app.use(express.static(__dirname));

// serve the index.html file by default
app.get('/', function(req, res) {
    res.sendfile(__dirname + '/index.html');
});

// pass the express server to socket.io
app.listen(3000, function() {
    console.log('App listening on port 3000');
});
