const express = require('express');
const app = express();
const http = require('http');
const server = require('http').createServer(app);
const sock = require("socket.io");
const io = sock(server);

const port = process.env.PORT || 3000;
const rooms = []

function makecode(rooms){
	while(true){
	out = ''
	chars = 'qwertyuiopasdfghjklzxcvbnm'
	for (i=0; i<6; i++){
		out = out + chars.charAt(Math.random()*chars.length)
	}
	if(! rooms.map((d) => d.code).includes(out)){break}
	}
	return out
}

function enter(socket, room){
	room.sockets.push(socket);
	socket.join(room.code)
	io.to(room.code).emit('code', room.code)
	if(room.sockets.length > 1){
		io.to(room.code).emit('gogo')
	}
}


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(__dirname + '/pub'));

io.on('connection', (socket) => {
  	socket.on('newroom', (name) => {
  		var room = {
  			code: makecode(rooms),
  			name: name,
  			sockets: []
  		}
  		rooms[room.code] = room
  		console.log(rooms)
  		enter(socket, room)

  	})
  	socket.on('join', (code, name) => {
  		enter(socket, rooms[code])
  	})
    socket.on('chat message', (msg) => {
    	console.log('message: ' + msg);
    	io.emit('chat message', msg);
  	});
  	socket.on('disconnect', () => {});
});

server.listen(port, () => console.log(`Dat port is ${port}!`));

