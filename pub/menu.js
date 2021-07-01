function local(){
	document.getElementById('board').style.display = "block"
	document.getElementById('playing_interface').style.display = "block"
	document.getElementById('mode_selection').style.display = "none"
	main("local")
}

function onlineone(){
	document.getElementById('mode_selection').style.display = "none"
	document.getElementById('online_setup').style.display = "flex"

}

function createroom(){
	var socket = io();
	document.getElementById('online_setup').style.display = "none"
	document.getElementById('room_wait').style.display = "flex"
	socket.emit('newroom', document.getElementById("nickname").value)
	socket.on('code', (code) => {
		console.log(code)
		document.getElementById('code').textContent = code
	})
	go(socket)
}

function joinroom(){
	document.getElementById('code_submit').style.display = "block"
	document.getElementById('code_entry').style.display = "block"
	document.getElementById('code').style.display = "none"
}
function submitcode(){
	var socket = io();
	socket.emit('join', document.getElementById("code_entry").value, document.getElementById("nickname").value)
	go(socket)
}

function computer(){
	alert("Not yet possible, please find a friend to play with.")
}

function go(socket){
	socket.on('gogo', () => {
		console.log("hihi")
		document.getElementById('online_setup').style.display = "none"
		document.getElementById('room_wait').style.display = "none"
		document.getElementById('board').style.display = "block"
		document.getElementById('playing_interface').style.display = "block"
		document.getElementById('mode_selection').style.display = "none"
		main("local")
	})

}
