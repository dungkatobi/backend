var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io").listen(server);
var fs = require("fs");
var os = require("os");
server.listen(process.env.PORT || 3000);
console.log('server running...');
console.log(os.hostname());
io.sockets.on('connection', funtion (socket){
	//activity code
});

