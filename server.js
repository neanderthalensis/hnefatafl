const express = require('express');
const app = express();
const http = require('http');
const server = require('http').createServer(app);
const sock = require("socket.io");
const io = sock(server);
const playbits = require("./playbits.js")

const port = process.env.PORT || 3000;
const rooms = []

function otherone(imp){
	if (imp == "a"){return "b"}
	else{return "a"}
}

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
		io.to(room.code).emit('gogo', {code: room.code, gsize: room.gsize})
	}
}

function game(room, start, pieces, pos, newpos, who){

	var pcg;
	if(start){
		pcg = {pieces: playbits.setpieces(room.gsize), flip: "b", gamenum: room.gamenum}
		room.hist.push(pcg)
		if (room.time[0] != ""){io.to(room.code).emit('timeset', room.time[0])}

	}
	else{
		for (var last in room.hist){i++}//bad but room.hist.length-1 does not work for some reason
		var temppiece = room.hist[last].pieces
		temppiece[pos.pos] = 0

		if (playbits.checkmove(pos, newpos, temppiece, room.gsize, who)){
			pcg = {pieces: pieces, flip: playbits.fliper(room.hist[last].flip), gamenum: room.gamenum}
			room.hist.push(pcg)
		}
		else{
			pcg = {pieces: room.hist[last].pieces, flip: room.hist[last].flip, gamenum: room.hist[last].gamenum}

	}}
	var win = playbits.checkwin(pcg.pieces, room.gsize, pcg.flip)
	if (win != 0){winstuff(win, room, pcg)}
	else {

		io.to(room.sockets[room.sides.indexOf(pcg.flip)].id).emit('turn', pcg)
		if (room.time[0] != ""){changetime(room, pcg.flip)}
	}
}

function winstuff(win, room, pcg){
	io.to(room.code).emit('win', pcg)
	clearints(room)
	room.gamenum = room.gamenum + 1
	io.to(room.code).emit('mes', room.names[room.sides.indexOf("a")] + " WINS!");

}

function clearints(room){
	for(n of room.ints){
		clearInterval(n)
	}
}

function changetime(room, flip){
	var index = room.sides.indexOf(flip)

	clearints(room)
	var out = {time: room.time[index], flip: flip, sides: room.sides }

	var win = otherone(flip)

	var int = setInterval(() => {
		out.time = out.time - 1
		room.time[index] = out.time
		io.to(room.code).emit("newtime", out)
		if (out.time < 1){
			clearints(room)
			winstuff(win, room, room.hist[room.hist.length-1])
		}


	},1000)
	room.ints[index] = int

}

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(__dirname + '/pub'));


io.on('connection', (socket) => {
  	socket.on('newroom', (opts) => {
  		var int;
  		var room = {
  			code: makecode(rooms),
  			name: opts[3] + "'s game",
  			gsize: parseInt(opts[0]),
  			sockets: [],
  			ready: [],
  			hist: [],
  			time: [opts[1], opts[1]],
  			ints: [int, int],
  			sides: [opts[2], otherone(opts[2])],
  			gamenum: 0,
  			names: [opts[3]],
  			oritime: opts[1]
  		}
  		rooms[room.code] = room
  		enter(socket, room)
  	})

  	socket.on('ready', (code, rematch) => {
  		var room = rooms[code]
  		room.ready.push(socket)
  		if(rematch){
  		  	io.to(rooms[code].code).emit('mes', "Rematch requested!");
  		} 		
  		if(room.ready.length > 1){
 			if(rematch){
  				room.names = [room.names[1], room.names[0]]
  				room.sides = [room.sides[1], room.sides[0]]
  				room.time = [room.oritime, room.oritime]
  				room.hist = []
  			}

  			io.to(rooms[code].code).emit('mes', "GAME STARTS!");
  			game(room, true)
  			room.ready = []
  		}
  	});

  	socket.on('things', (code) => {

  		socket.emit('things', (!(rooms[code] == undefined) & rooms[code].sockets.length < 2))

  	});
  	socket.on('done', (code, pieces, pos, newpos, who) => {
  		game(rooms[code], false, pieces, pos, newpos, who)
   	});
  	socket.on('join', (code, name) => {
  		rooms[code].names.push(name)
  		enter(socket, rooms[code])
  	});
    socket.on('mes', (code, msg, order) => {
    	io.to(rooms[code].code).emit('mes',  rooms[code].names[order] + ": " + msg);
  	});
  	socket.on('resignation', (code, pieces) => {
  		var pcg = {pieces: pieces}
  		var room = rooms[code]
  		var win = otherone(room.sides[room.sockets.indexOf(socket)])
  		winstuff(win, room, pcg)
  	});
  	socket.on('gamenum', (gamenum, code, perturn) => {
  		var room = rooms[code]
  		if (gamenum == room.gamenum){
  			var ok = {ok: true, perturn: perturn}
  		}
  		else(ok = {ok: false, pieces: room.hist[room.hist.length-1].pieces})
  		
  		socket.emit('ok', ok)
  	})
  	socket.on('disconnect', () => {});
});

server.listen(port, () => console.log(`Dat port is ${port}!`));

