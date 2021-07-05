function setInputFilter(textbox, inputFilter) { //from https://stackoverflow.com/questions/469357/html-text-input-allow-only-numeric-input/469362#469362
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
    textbox.addEventListener(event, function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  });
}

function local(){
	document.getElementById('play_page').style.display = "flex"
	document.getElementById('play_page').style.justifyContent = "center"
	document.getElementById('board').classList.remove("left")
	document.getElementById('playing_interface').style.display = "none"
	document.getElementById('mode_selection').style.display = "none"
	main("local", 11)
}

function onlineone(){
	document.getElementById('mode_selection').style.display = "none"
	document.getElementById('online_setup').style.display = "flex"

}

function createroom(){
	if (document.getElementById("nickname").value == ""){
		document.getElementById("error").style.display = "block"
	}
	else{
		
		document.getElementById('online_setup').style.display = "none"
		document.getElementById('room_wait').style.display = "flex"
		setInputFilter(document.getElementById("min"), function(value) {
  			return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 60);
  		});
  		setInputFilter(document.getElementById("sec"), function(value) {
  			return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 60);
  		});

	}

}

function joinroom(){
	if (document.getElementById("nickname").value == ""){
		document.getElementById("error").style.display = "block"
	}
	else{
		document.getElementById('code_submit').style.display = "block"
		document.getElementById('code_entry').style.display = "block"
	}
}

function customshow(){
	document.getElementById("cimps").style.display = "inline-flex"
}
function customhide(){
	document.getElementById("cimps").style.display = "none"
}

function makecode(){
	var socket = io();
	var sets = ["size", "time", "piece"];
	var opts = [];

	document.getElementById("custom").value = document.getElementById("min").value*60 + document.getElementById("sec").value*1

	for(n of sets){
		for(m of document.querySelectorAll('input[name='+n+']')){
			if(m.checked){
				opts.push(m.value)
			}
		}
	}
	opts.push(document.getElementById("nickname").value)
	socket.emit('newroom', opts)
	socket.on('code', (code) => {
		document.getElementById('code_make').style.display = "none"
		document.getElementById('code_contain').style.display = "flex"
		document.getElementById('code').textContent = code
	})
	go(socket,0)
}
async function submitcode(){
	if(document.getElementById("code_entry").value.length == 6){
		if(document.getElementById("nickname").value != ""){
			var socket = io();
			var code = document.getElementById("code_entry").value

			var check = await new Promise((res, rej) => {
				socket.emit("things", code)
				socket.on("things", (ans) => {res(ans)})
			})

			if(check){
				socket.emit('join', code, document.getElementById("nickname").value)
				go(socket, 1)
			}
			else{
				document.getElementById("code_error").textContent = "Sorry, could not find a game with this code, or the game is already full"
				document.getElementById("code_error").style.display = "block"
			}
		}
		else{document.getElementById("error").style.display = "block"}
	}
	else{
		document.getElementById("code_error").textContent = "Please enter a 6 character code."
		document.getElementById("code_error").style.display = "block"
	}
}

function computer(){
	alert("Not yet possible, please find a friend to play with.")
}

function go(socket, order){
	socket.on('gogo', (stuff) => {
		document.getElementById('online_setup').style.display = "none"
		document.getElementById('room_wait').style.display = "none"
		document.getElementById('play_page').style.display = "flex"
		document.getElementById('playing_interface').style.display = "block"
		document.getElementById('mode_selection').style.display = "none"
		console.log(stuff)
		main("online", stuff.gsize ,stuff.code, socket, order)
	})

}

