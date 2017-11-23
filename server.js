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
	console.log('user connected');
	socket.on('register',function(name){
		console.log(name+ 'register');
		socket.un = name;
	});
	socket.on('new messege1', function(mess){
		console.log('new messege1: '+socket.un + ": "+mess);
		io.sockets.emit('new mess1',{text: socket.un + " : "+mess});
	});
	socket.on('new messege2', function(mess){
		console.log('new messege2: '+socket.un + ": "+mess);
		io.sockets.emit('new mess2',{text: socket.un + " : "+mess});
	});
});

