 function getmouse(canv, evt) {
    var rect = canv.getBoundingClientRect();
    return {
      x: (evt.clientX - rect.left)*window.devicePixelRatio,
      y: (evt.clientY - rect.top)*window.devicePixelRatio
    };
  }

function fliper(flip){
	if (flip == "a"){flip = "b"}
	else {flip = "a"}
	return flip
}

function dpidumb(canv){
	var pxr  = window.devicePixelRatio || 1
	canv.width = canv.getBoundingClientRect().width*pxr
	canv.height = canv.getBoundingClientRect().height*pxr
}

function setplaces(gridnum){
	//creates places array
	var places = []
	for(i=0; i<gridnum; i++){
		for(n=0; n<gridnum; n++){
			places.push([n, i])
		}
	}
	return places;
  }

function grid(gridnum, size, con){


	//draw background
	con.resetTransform();
	con.fillStyle='rgba(226, 196, 163, 1)'
	con.fillRect(0,0,size, size)

	//draw special squares
	con.fillStyle='rgba(178, 144, 108, 1)'
	con.fillRect(0,0,size/gridnum, size/gridnum)
	con.fillRect(size-(size/gridnum),0, size/gridnum, size/gridnum)
	con.fillRect(0,size-(size/gridnum), size/gridnum, size/gridnum)
	con.fillRect(size-(size/gridnum),size-(size/gridnum),size/gridnum, size/gridnum)
	con.fillRect((size/gridnum)*Math.floor(gridnum/2), (size/gridnum)*Math.floor(gridnum/2), (size/gridnum), (size/gridnum))

	//draw grid
	con.strokeStyle='black';
	con.lineWidth=1.5;

	for(i=0; i <= gridnum; i++){
		con.beginPath();
		con.moveTo(0, i*(size/gridnum))
		con.lineTo(size, i*(size/gridnum))
		con.stroke();
		con.beginPath();
		con.moveTo(i*(size/gridnum), 0)
		con.lineTo(i*(size/gridnum), size)
		con.stroke();

	}

}

function setpieces(type){
	switch(type){
		case 7:
		return[
		0, 0, 0, 1, 0, 0, 0,
		0, 0, 0, 1, 0, 0, 0,
		0, 0, 0, 2, 0, 0, 0,
		1, 1, 2, 3, 2, 1, 1,
		0, 0, 0, 2, 0, 0, 0,
		0, 0, 0, 1, 0, 0, 0,
		0, 0, 0, 1, 0, 0, 0,
		]
		
		case 9:
		return [
		 0, 0, 0, 1, 1, 1, 0, 0, 0,
		 0, 0, 0, 0, 1, 0, 0, 0, 0,
		 0, 0, 0, 0, 2, 0, 0, 0, 0,
		 1, 0, 0, 0, 2, 0, 0, 0, 1,
		 1, 1, 2, 2, 3, 2, 2, 1, 1,
		 1, 0, 0, 0, 2, 0, 0, 0, 1,
		 0, 0, 0, 0, 2, 0, 0, 0, 0,
		 0, 0, 0, 0, 1, 0, 0, 0, 0,
		 0, 0, 0, 1, 1, 1, 0, 0, 0
		 ]

		case 11:
		return [
		0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0,
		0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1,
		1, 0, 0, 0, 2, 2, 2, 0, 0, 0, 1,
		1, 1, 0, 2, 2, 3, 2, 2, 0, 1, 1,
		1, 0, 0, 0, 2, 2, 2, 0, 0, 0, 1,
		1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1,
		0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
		0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0
		]
	}

}



function draw(pieces, places, gsize, width, con){
	for([i, n] of pieces.entries()){
		if (n == 1){
			pawnb(gsize, width, con, places[i][0], places[i][1], true);
		}
		if (n == 2){
			pawna(gsize, width, con, places[i][0], places[i][1], true);
		}
		if (n == 3){
			king(gsize, width, con, places[i][0], places[i][1], true);
		}

	}

}

function getpos(gsize, mousePos, width){
	for (i=0; i < gsize; i++){
		if (mousePos.x > ((i*width)/gsize) && mousePos.x < (((i+1)*width)/gsize)){
			for(n=0; n < gsize; n++){
				if (mousePos.y > ((n*width)/gsize) && mousePos.y < (((n+1)*width)/gsize)){
					return {
						pos: (n*gsize)+i,
						x: i,
						y: n,
					}
				}
				}
		}
	}
}

function checkmove(pos, newpos, pieces, gsize, who){
	var bla;
	if((pos.x == newpos.x | pos.y == newpos.y) & pos.pos != newpos.pos & (pieces[newpos.pos] == 0) & !((who != 3) & (newpos.pos == 0 | newpos.pos == gsize-1 | newpos.pos == (pieces.length-1)/2 | newpos.pos == pieces.length - gsize | newpos.pos == pieces.length-1))){
		bla = true
		if (pos.x == newpos.x){
			for(i=Math.min(pos.pos, newpos.pos); i < Math.max(pos.pos, newpos.pos); i+=gsize){
				if(pieces[i] != 0){bla = false}
			}
		}
		else if (pos.y == newpos.y){
			for(i=Math.min(pos.pos, newpos.pos); i < Math.max(pos.pos, newpos.pos); i++){
				if(pieces[i] != 0){bla = false}
			}			
		}
			
	}
	else{bla = false}
	return bla

}

function checkcapture(newpos, pieces, gsize, who){
	if (who == 1){
		var wha = 2
		var whe = 4
	}
	else if(who == 2){
			wha = 1
			whe = 3
		}
	else if(who == 3){
		wha = 1
		whe = 2
	}
	present(pieces, newpos, who, wha, whe, gsize, 1)
	present(pieces, newpos, who, wha, whe, gsize, -1)
	present(pieces, newpos, who, wha, whe, gsize, gsize)
	present(pieces, newpos, who, wha, whe, gsize, -gsize)
}

function edgeinator(gsize, direction){
		var edge = [];

		if (direction == 1){
			for(i=0; i < gsize; i++){
				edge.push(gsize-1+i*gsize)
			}}
		if (direction == -1){
			for(i=0; i < gsize; i++){
				edge.push(i*gsize)
			}}

		return edge;


}

function timetranslator(time){
	var seconds = (time-Math.floor(time/60)*60)
		if (seconds < 10){
			seconds = "0" + seconds
			}
	return Math.floor(time/60) + ":" + seconds
}

function present(pieces, newpos, who, wha, whe, gsize, offset){
	if(pieces[newpos.pos+offset] == wha){
		
		if (offset == 1 || offset == -1){var edge = edgeinator(gsize, offset)}
		else{var edge = []}
		if (!(edge.includes(newpos.pos)) && (pieces[newpos.pos+2*offset] == who || pieces[newpos.pos+2*offset] == whe || newpos.pos+2*offset == 0 || newpos.pos+2*offset == (gsize**2)-gsize || newpos.pos+2*offset == Math.floor((gsize**2)/2) || newpos.pos+2*offset == gsize-1 || newpos.pos+2*offset == (gsize**2)-1)){
			pieces[newpos.pos+offset] = 0
		}		

	}
}
function checkwin(pieces, gsize, flip){
	var win = 0;
	var king = pieces.indexOf(3)
	if (!pieces.includes(1)){
		console.log("captured")
		win = "a"
	}

	if (king == 0 || king == gsize-1 || king == pieces.length-1 || king == pieces.length - gsize){
		console.log("king win")
		win = "a"
	}
	var places = [1, -1, gsize, -gsize]
	var check = 0;
	for(n of places){
		var edge = [];
		if (n == 1 || n == -1){var edge = edgeinator(gsize, n)}
		else{var edge = []}
		if ((pieces[king+n] != 0 && pieces[king+n] != 2) || (king+n == 0 || king+n == gsize-1 || king+n == pieces.length-1 || king+n == pieces.length - gsize || king+n == Math.floor(pieces.length/2) || edge.includes(king))){
			check++
		}
	}
	if (check == 4){
		console.log("noking")
		 win = "b"
	}

	if (getlegal(pieces, gsize, flip).length == 0){
		console.log("nolegal")
		if (flip == "a"){
			win = "b"
		}
		else if (flip == "b"){
			win = "a"
		}
	}
	return win
}

function getlegal(pieces, gsize, flip){
	var legals = [];
	var locs = [];
	var places = [1, -1, gsize, -gsize];

	if (flip == "a"){	
		locs = pieces.reduce((a, e, i) => {
			if (e == 2 || e == 3){a.push(i)}
			return a
		}, [])}
	else if (flip == "b"){	
		locs = pieces.reduce((a, e, i) => {
			if (e == 1){a.push(i)}
			return a
		}, [])}

	for (e of locs){
		for (n=0; n<4; n++){
			if (places[n] == 1 | places[n] == -1){var edge = edgeinator(gsize, places[n])}
			else{edge = [];}
			var off = 0;
			while(true){
				off++
				if(e+off != 0 || edge.includes(e+off) || e+off == 0 || e+off == gsize1-1 || e+off == pieces.length-gsize || e+off == pieces.length-1){
					break
					--off
				}
			}
			if (off > 0){
				legals.push({pos: e, dir: places[n], dis: off})
			}
		}}

	return legals
}

async function move(pieces, places, canv, con,gsize, flip){

	return new Promise((resolve, reject) =>{
		var outer = {};
		canv.addEventListener('mousedown', async (x) => {
		var moveout = await new Promise((res, rej) => {

		var out = {}
		var who = 0

		var mousePos = getmouse(canv, x);
		var pos = getpos(gsize, mousePos, canv.width)

		who = pieces[pos.pos]

		if (who != 0 && ((flip == "b" && who == 1) || (flip == "a" && who > 1))){
			pieces[pos.pos] = 0}
		else{
			out.pieces = pieces
			out.turn = flip
			res(out)
		}

		canv.addEventListener('mousemove', (y) => {
			if (who != 0 && ((flip == "b" && who == 1) || (flip == "a" && who > 1))){

			mousePos = getmouse(canv, y);
			grid(gsize, canv.width, con);
			draw(pieces, places, gsize, canv.width, con);
			if (who == 1){
				pawnb(gsize, canv.width, con, mousePos.x, mousePos.y, false);
			}
			else if(who == 2){
				pawna(gsize, canv.width, con, mousePos.x, mousePos.y, false);
			}
			else if (who == 3){
				king(gsize, canv.width, con, mousePos.x, mousePos.y, false);
			}

	}})

		canv.addEventListener('mouseup', (z) => {
			if (who != 0 && ((flip == "b" && who == 1) || (flip == "a" && who > 1))){
			mousePos = getmouse(canv, z);
			newpos = getpos(gsize, mousePos, canv.width)
			if(checkmove(pos, newpos, pieces, gsize, who)){
				pieces[newpos.pos] = who
				checkcapture(newpos, pieces, gsize, who);
				grid(gsize, canv.width, con);
				draw(pieces, places, gsize, canv.width, con);
				out.turn = fliper(flip)
			}
			else{
				pieces[pos.pos] = who
				grid(gsize, canv.width, con);
				draw(pieces, places, gsize, canv.width, con);
				out.turn = flip					
			}
			out.who = who
			out.pieces = pieces
			out.pos = pos
			out.newpos = newpos
			who = 0
			res(out)
	}})

	})

	if (moveout.turn != flip){
		outer.go = true
		outer.who = moveout.who
		outer.pieces = moveout.pieces
		outer.flip = moveout.turn
		outer.pos = moveout.pos
		outer.newpos = moveout.newpos
	}
	else{
		outer.go = false
	}
			
	resolve(outer)
	}, {once: true})})

}
async function main(gametype, gsize, code, socket, order) {
	var pxr  = window.devicePixelRatio || 1
	var canv = document.getElementById("play");
	var con = canv.getContext('2d');

	dpidumb(canv)

	var places = setplaces(gsize)
	var pieces = setpieces(gsize)
	

	grid(gsize, canv.width, con)
	draw(pieces, places, gsize, canv.width, con)

	window.addEventListener('resize', () => {
		var pxr  = window.devicePixelRatio || 1
		var canv = document.getElementById("play");
		var con = canv.getContext('2d');
		dpidumb(canv)
		grid(gsize, canv.width, con)
		draw(pieces, places, gsize, canv.width, con)
	});

	var flip = "b"
	var win = 0
	var perturn;

	if (gametype == "local"){
		while (win == 0){
			perturn = await move(pieces, places, canv, con, gsize, flip)
			if (perturn.go){
				flip = perturn.flip
				pieces = perturn.pieces
			}
		win = checkwin(pieces, gsize, flip)
	}}

	if(gametype == "online"){
		socket.emit("ready", code, false)

		var form = document.getElementById('form');
		var input = document.getElementById('msg_input');
		  
		form.addEventListener('submit', function(e) {
			e.preventDefault();
		    if (input.value) {
		    	socket.emit('mes', code, input.value, order);
		    	input.value = '';
		    }
		});

		socket.on('timeset', (time) => {
			document.getElementById("time_me").textContent = timetranslator(time)
			document.getElementById("time_other").textContent = timetranslator(time)
		})


		socket.on('mes', (msg) => {
			var item = document.createElement('li');
			item.textContent = msg;
			messages.appendChild(item);
		});

		socket.on("win", (pcg) => {
			grid(gsize, canv.width, con)
			draw(pcg.pieces, places, gsize, canv.width, con)
			document.getElementById("sidemenu_play").style.display = "none"
			document.getElementById("sidemenu_over").style.display = "flex"
		})

		socket.on("newtime", (out)=>{
			if (out.sides[order] == out.flip){
				document.getElementById("time_me").textContent = timetranslator(out.time)
			}
			else{
				document.getElementById("time_other").textContent = timetranslator(out.time)
			}
		})

		document.getElementById("resign").addEventListener("click", () =>{socket.emit("resignation", code, pieces)})

		document.getElementById("rematch").addEventListener("click", () => {
			var pieces = setpieces(gsize)
			grid(gsize, canv.width, con)
			draw(pieces, places, gsize, canv.width, con)
			document.getElementById("sidemenu_over").style.display = "none"
			document.getElementById("sidemenu_play").style.display = "flex"
			socket.emit("ready", code, true)
		})

		
		socket.on("turn", async (pcg) => {
			pieces = pcg.pieces
			flip = pcg.flip
			grid(gsize, canv.width, con)
			draw(pieces, places, gsize, canv.width, con)
			

			do{
				perturn = await move(pieces, places, canv, con, gsize, flip)
			}
			while(! perturn.go)
			
			socket.emit("gamenum", pcg.gamenum, code, perturn)

		})
		socket.on("ok", (ok) => {
			if(ok.ok){
				perturn = ok.perturn
				socket.emit("done", code, perturn.pieces, perturn.pos, perturn.newpos, perturn.who)
			}
			else{
				grid(gsize, canv.width, con)
				draw(ok.pieces, places, gsize, canv.width, con)	
			}
		})

	}

}