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
		break
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
		break

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
		break
	}

}

function fliper(flip){
	if (flip == "a"){flip = "b"}
	else {flip = "a"}
	return flip
}

function checkmove(pos, newpos, pieces, gsize, who){
	
	var bla;
	if((pos.x == newpos.x | pos.y == newpos.y) & pos.pos != newpos.pos & (pieces[newpos.pos] == 0) & !((who != 3) & (newpos.pos == 0 | newpos.pos == gsize-1 | newpos.pos == (pieces.length-1)/2 | newpos.pos == pieces.length - gsize | newpos.pos == pieces.length-1))){
		bla = true
		if (pos.x == newpos.x){
			for(i=Math.min(pos.pos, newpos.pos); i < Math.max(pos.pos, newpos.pos); i+=gsize){
				if(pieces[i] != 0){
					bla = false
				}
			}
		}
		else if (pos.y == newpos.y){
			for(i=Math.min(pos.pos, newpos.pos); i < Math.max(pos.pos, newpos.pos); i++){
				if(pieces[i] != 0){
					bla = false
				}
			}			
		}
			
	}
	else{
		bla = false}
	return bla

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

module.exports = { setpieces, fliper, checkmove, checkwin }