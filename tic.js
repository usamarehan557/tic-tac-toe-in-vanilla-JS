var idClicked='';
var player1='';
var player2='';
var winstatus = false;
var cacheDom = "";


// function for player name modal validation
function setPlayers() {
	if( document.myForm.P1.value == "" && document.myForm.P2.value == "" ) {
		$('#p1err').html('Please provide player 1 name');
        document.myForm.P1.focus();
		$('#p2err').html('Please provide player 2 name');
        document.myForm.P2.focus();
	}
	if( document.myForm.P1.value == "" ) {
		document.getElementById("p1err").innerHTML = "Please provide player 1 name";
        // document.myForm.P1.focus() ;
	}
	if( document.myForm.P2.value == "" ) {
		document.getElementById("p2err").innerHTML = "Please provide player 2 name";
        // document.myForm.P2.focus() ;
	}
	else {
		setPlayers2();
	}
}
//  function for modal after successfull validation
function setPlayers2() {
	player1 = $("#p1").val();
	player2 = $("#p2").val();
	$("#p1name").html(player1);
	$("#p2name").html(player2);
	$("#myModal").modal('hide');
}

function errclr() {
	console.log("key pressed");
	if ( document.myForm.P1.value == "" ) {
		$("#p1err").hide();
	} else if ( document.myForm.P2.value == "" ) {
		$("#p2err").hide();
	}
}

function playagain() {
	// $("#winmsgdiv").remove();
	$("#winmsgdiv").hide();
	$("#cube").show();
	$("#myModal").modal('show');
	$("#b1").css("background-color","white");
	$("#b2").css("background-color","white");
	$("#b3").css("background-color","white");
	$("#b4").css("background-color","white");
	$("#b5").css("background-color","white");
	$("#b6").css("background-color","white");
	$("#b7").css("background-color","white");
	$("#b8").css("background-color","white");
	$("#b9").css("background-color","white");
	$("#b1").val('');
	$("#b1").prop('disabled', false);
	$("#b2").val('');
	$("#b2").prop('disabled', false);
	$("#b3").val('');
	$("#b3").prop('disabled', false);
	$("#b4").val('');
	$("#b4").prop('disabled', false);
	$("#b5").val('');
	$("#b5").prop('disabled', false);
	$("#b6").val('');
	$("#b6").prop('disabled', false);
	$("#b7").val('');
	$("#b7").prop('disabled', false);
	$("#b8").val('');
	$("#b8").prop('disabled', false);
	$("#b9").val('');
	$("#b9").prop('disabled', false);
	$("#print").html('');
	winstatus = false;
}


function winnerPopup() {
	$("#cube").hide();
	$("#winmsgdiv").fadeIn();
}

function myfunc(id) {
	idClicked = id;

	// Setting DOM to all boxes or input field
	var b1, b3, b4, b5, b6, b7, b8, b9;
	b1 = document.getElementById("b1").value;
	b2 = document.getElementById("b2").value;
	b3 = document.getElementById("b3").value;
	b4 = document.getElementById("b4").value;
	b5 = document.getElementById("b5").value;
	b6 = document.getElementById("b6").value;
	b7 = document.getElementById("b7").value;
	b8 = document.getElementById("b8").value;
	b9 = document.getElementById("b9").value;

	// Checking if Player X won or not and after
	// that disabled all the other fields
	if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
		b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
		document.getElementById("b1").style.backgroundColor = "pink";
		document.getElementById("b2").style.backgroundColor = "pink";
		document.getElementById("b3").style.backgroundColor = "pink";
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		document.getElementById('winmsg').innerHTML = `"${player1} won"`;
		winstatus = true;
	}
	else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
		b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
		document.getElementById("b1").style.backgroundColor = "pink";
		document.getElementById("b4").style.backgroundColor = "pink";
		document.getElementById("b7").style.backgroundColor = "pink";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		document.getElementById('winmsg').innerHTML = `"${player1} won"`;
		winstatus = true;
	}
	else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' ||
		b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
		document.getElementById("b7").style.backgroundColor = "pink";
		document.getElementById("b8").style.backgroundColor = "pink";
		document.getElementById("b9").style.backgroundColor = "pink";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById('winmsg').innerHTML = `"${player1} won"`;
		winstatus = true;
	}
	else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' ||
		b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
		document.getElementById("b3").style.backgroundColor = "pink";
		document.getElementById("b6").style.backgroundColor = "pink";
		document.getElementById("b9").style.backgroundColor = "pink";	
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById('winmsg').innerHTML = `"${player1} won"`;
		winstatus = true;
	}
	else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
		document.getElementById("b1").style.backgroundColor = "pink";
		document.getElementById("b5").style.backgroundColor = "pink";
		document.getElementById("b9").style.backgroundColor = "pink";			
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById('winmsg').innerHTML = `"${player1} won"`;
		winstatus = true;
	}
	else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
		document.getElementById("b3").style.backgroundColor = "pink";
		document.getElementById("b5").style.backgroundColor = "pink";
		document.getElementById("b7").style.backgroundColor = "pink";	
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		document.getElementById('winmsg').innerHTML = `"${player1} won"`;
		winstatus = true;
	}
	else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
		document.getElementById("b2").style.backgroundColor = "pink";
		document.getElementById("b5").style.backgroundColor = "pink";
		document.getElementById("b8").style.backgroundColor = "pink";		
		document.getElementById("b1").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b9").disabled = true;
		document.getElementById('winmsg').innerHTML = `"${player1} won"`;
		winstatus = true;
	}
	else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
		document.getElementById("b4").style.backgroundColor = "pink";
		document.getElementById("b5").style.backgroundColor = "pink";
		document.getElementById("b6").style.backgroundColor = "pink";			
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		document.getElementById('winmsg').innerHTML = `"${player1} won"`;
		winstatus = true;
	}

	// Checking of Player X finsh
	// Checking for Player 0 starts, Is player 0 won or
	// not and after that disabled all the other fields
	else if ((b1 == '0' || b1 == '0') && (b2 == '0' ||
		b2 == '0') && (b3 == '0' || b3 == '0')) {
		document.getElementById("b1").style.backgroundColor = "pink";
		document.getElementById("b2").style.backgroundColor = "pink";
		document.getElementById("b3").style.backgroundColor = "pink";		
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		document.getElementById('winmsg').innerHTML = `"${player2} won"`;
		winstatus = true;
	}
	else if ((b1 == '0' || b1 == '0') && (b4 == '0' ||
		b4 == '0') && (b7 == '0' || b7 == '0')) {
		document.getElementById("b1").style.backgroundColor = "pink";
		document.getElementById("b4").style.backgroundColor = "pink";
		document.getElementById("b7").style.backgroundColor = "pink";			
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		document.getElementById('winmsg').innerHTML = `"${player2} won"`;
		winstatus = true;
	}
	else if ((b7 == '0' || b7 == '0') && (b8 == '0' ||
		b8 == '0') && (b9 == '0' || b9 == '0')) {
		document.getElementById("b7").style.backgroundColor = "pink";
		document.getElementById("b8").style.backgroundColor = "pink";
		document.getElementById("b9").style.backgroundColor = "pink";	
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById('winmsg').innerHTML = `"${player2} won"`;
		winstatus = true;
	}
	else if ((b3 == '0' || b3 == '0') && (b6 == '0' ||
		b6 == '0') && (b9 == '0' || b9 == '0')) {
		document.getElementById("b3").style.backgroundColor = "pink";
		document.getElementById("b6").style.backgroundColor = "pink";
		document.getElementById("b9").style.backgroundColor = "pink";	
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById('winmsg').innerHTML = `"${player2} won"`;
		winstatus = true;
	}
	else if ((b1 == '0' || b1 == '0') && (b5 == '0' ||
		b5 == '0') && (b9 == '0' || b9 == '0')) {
		document.getElementById("b1").style.backgroundColor = "pink";
		document.getElementById("b5").style.backgroundColor = "pink";
		document.getElementById("b9").style.backgroundColor = "pink";			
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById('winmsg').innerHTML = `"${player2} won"`;
		winstatus = true;
	}
	else if ((b3 == '0' || b3 == '0') && (b5 == '0' ||
		b5 == '0') && (b7 == '0' || b7 == '0')) {
		document.getElementById("b3").style.backgroundColor = "pink";
		document.getElementById("b5").style.backgroundColor = "pink";
		document.getElementById("b7").style.backgroundColor = "pink";			
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		document.getElementById('winmsg').innerHTML = `"${player2} won"`;
		winstatus = true;
	}
	else if ((b2 == '0' || b2 == '0') && (b5 == '0' ||
		b5 == '0') && (b8 == '0' || b8 == '0')) {
		document.getElementById("b2").style.backgroundColor = "pink";
		document.getElementById("b5").style.backgroundColor = "pink";
		document.getElementById("b8").style.backgroundColor = "pink";	
		document.getElementById("b1").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b9").disabled = true;
		document.getElementById('winmsg').innerHTML = `"${player2} won"`;
		winstatus = true;
	}
	else if ((b4 == '0' || b4 == '0') && (b5 == '0' ||
		b5 == '0') && (b6 == '0' || b6 == '0')) {
		document.getElementById("b4").style.backgroundColor = "pink";
		document.getElementById("b5").style.backgroundColor = "pink";
		document.getElementById("b6").style.backgroundColor = "pink";			
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		document.getElementById('winmsg').innerHTML = `"${player2} won"`;
		winstatus = true;
	}

	// Checking of Player 0 finsh

	// Here, Checking about Tie
	else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
		|| b2 == '0') && (b3 == 'X' || b3 == '0') &&
		(b4 == 'X' || b4 == '0') && (b5 == 'X' ||
		b5 == '0') && (b6 == 'X' || b6 == '0') &&
		(b7 == 'X' || b7 == '0') && (b8 == 'X' ||
		b8 == '0') && (b9 == 'X' || b9 == '0')) {
			document.getElementById('winmsg')
				.innerHTML = "Match Tie";
		
			setTimeout(winnerPopup, 500)
			// window.alert('Match Tie');
	}
	else {
		// Here, Printing Result
		if (flag == 1) {
			document.getElementById('print')
				.innerHTML = "Player X Turn";
		}
		else {
			document.getElementById('print')
				.innerHTML = "Player 0 Turn";
		}
	}
	// console.log(winstatus);
	if (winstatus == true) {
		setTimeout(winnerPopup, 500)
	}
}



// Function to reset game
function myfunc_2() {
	location.reload();
	$("#b1").val('');
	$("#b1").prop('disabled', false);
	$("#b2").val('');
	$("#b2").prop('disabled', false);
	$("#b3").val('');
	$("#b3").prop('disabled', false);
	$("#b4").val('');
	$("#b4").prop('disabled', false);
	$("#b5").val('');
	$("#b5").prop('disabled', false);
	$("#b6").val('');
	$("#b6").prop('disabled', false);
	$("#b7").val('');
	$("#b7").prop('disabled', false);
	$("#b8").val('');
	$("#b8").prop('disabled', false);
	$("#b9").val('');
	$("#b9").prop('disabled', false);
	$("#print").html('');
}

// Here onwards, functions check turn of the player
// and put accordingly value X or 0
var flag = 1;

function myfunc_3() {
	if (flag == 1) {
		document.getElementById("b1").value = "X";
		document.getElementById("b1").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b1").value = "0";
		document.getElementById("b1").disabled = true;
		flag = 1;
	}
}

function myfunc_4() {
	if (flag == 1) {
		document.getElementById("b2").value = "X";
		document.getElementById("b2").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b2").value = "0";
		document.getElementById("b2").disabled = true;
		flag = 1;
	}
}

function myfunc_5() {
	if (flag == 1) {
		document.getElementById("b3").value = "X";
		document.getElementById("b3").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b3").value = "0";
		document.getElementById("b3").disabled = true;
		flag = 1;
	}
}

function myfunc_6() {
	if (flag == 1) {
		document.getElementById("b4").value = "X";
		document.getElementById("b4").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b4").value = "0";
		document.getElementById("b4").disabled = true;
		flag = 1;
	}
}

function myfunc_7() {
	if (flag == 1) {
		document.getElementById("b5").value = "X";
		document.getElementById("b5").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b5").value = "0";
		document.getElementById("b5").disabled = true;
		flag = 1;
	}
}

function myfunc_8() {
	if (flag == 1) {
		document.getElementById("b6").value = "X";
		document.getElementById("b6").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b6").value = "0";
		document.getElementById("b6").disabled = true;
		flag = 1;
	}
}

function myfunc_9() {
	if (flag == 1) {
		document.getElementById("b7").value = "X";
		document.getElementById("b7").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b7").value = "0";
		document.getElementById("b7").disabled = true;
		flag = 1;
	}
}

function myfunc_10() {
	if (flag == 1) {
		document.getElementById("b8").value = "X";
		document.getElementById("b8").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b8").value = "0";
		document.getElementById("b8").disabled = true;
		flag = 1;
	}
}

function myfunc_11() {
	if (flag == 1) {
		document.getElementById("b9").value = "X";
		document.getElementById("b9").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b9").value = "0";
		document.getElementById("b9").disabled = true;
		flag = 1;
	}
}


// Function to undo move
function myfunc_12() {
	if(winstatus == false) {
		if (idClicked==1) {
			if (flag == 0) {
				document.getElementById("b1").value = '';
				document.getElementById("b1").disabled = false;
				flag = 1;
				document.getElementById('print')
				.innerHTML = "Player X Turn again";
			} else if (flag == 1) {
				document.getElementById("b1").value = '';
				document.getElementById("b1").disabled = false;
				document.getElementById('print')
				.innerHTML = "Player 0 Turn again";
				flag = 0;
			} 
	
		} else if (idClicked==2) {
			if (flag == 1) {
				document.getElementById("b2").value = '';
				document.getElementById("b2").disabled = false;
				flag = 0;
				document.getElementById('print')
				.innerHTML = "Player 0 Turn again";
			} else if (flag == 0) {
				document.getElementById("b2").value = '';
				document.getElementById("b2").disabled = false;
				flag = 1;
				document.getElementById('print')
				.innerHTML = "Player X Turn again";
			}
		} else if (idClicked==3) {
			if (flag == 1) {
				document.getElementById("b3").value = '';
				document.getElementById("b3").disabled = false;
				flag = 0;
				document.getElementById('print')
				.innerHTML = "Player 0 Turn again";
			} else if (flag == 0) {
				document.getElementById("b3").value = '';
				document.getElementById("b3").disabled = false;
				flag = 1;
				document.getElementById('print')
				.innerHTML = "Player X Turn again";
			}
		}
		else if (idClicked==4) {
			if (flag == 1) {
				document.getElementById("b4").value = '';
				document.getElementById("b4").disabled = false;
				flag = 0;
				document.getElementById('print')
				.innerHTML = "Player 0 Turn again";
			} else if (flag == 0) {
				document.getElementById("b4").value = '';
				document.getElementById("b4").disabled = false;
				flag = 1;
				document.getElementById('print')
				.innerHTML = "Player X Turn again";
			}
		}
		else if (idClicked==5) {
			if (flag == 1) {
				document.getElementById("b5").value = '';
				document.getElementById("b5").disabled = false;
				flag = 0;
				document.getElementById('print')
				.innerHTML = "Player 0 Turn again";
			} else if (flag == 0) {
				document.getElementById("b5").value = '';
				document.getElementById("b5").disabled = false;
				flag = 1;
				document.getElementById('print')
				.innerHTML = "Player X Turn again";
			}
		}
		else if (idClicked==6) {
			if (flag == 1) {
				document.getElementById("b6").value = '';
				document.getElementById("b6").disabled = false;
				flag = 0;
				document.getElementById('print')
				.innerHTML = "Player 0 Turn again";
			} else if (flag == 0) {
				document.getElementById("b6").value = '';
				document.getElementById("b6").disabled = false;
				flag = 1;
				document.getElementById('print')
				.innerHTML = "Player X Turn again";
			}
		}
		else if (idClicked==7) {
			if (flag == 1) {
				document.getElementById("b7").value = '';
				document.getElementById("b7").disabled = false;
				flag = 0;
				document.getElementById('print')
				.innerHTML = "Player 0 Turn again";
			} else if (flag == 0) {
				document.getElementById("b7").value = '';
				document.getElementById("b7").disabled = false;
				flag = 1;
				document.getElementById('print')
				.innerHTML = "Player X Turn again";
			}
		}
		else if (idClicked==8) {
			if (flag == 1) {
				document.getElementById("b8").value = '';
				document.getElementById("b8").disabled = false;
				flag = 0;
				document.getElementById('print')
				.innerHTML = "Player 0 Turn again";
			} else if (flag == 0) {
				document.getElementById("b8").value = '';
				document.getElementById("b8").disabled = false;
				flag = 1;
				document.getElementById('print')
				.innerHTML = "Player X Turn again";
			}
		}
		else if (idClicked==9) {
			if (flag == 1) {
				document.getElementById("b9").value = '';
				document.getElementById("b9").disabled = false;
				flag = 0;
				document.getElementById('print')
				.innerHTML = "Player 0 Turn again";
			} else if (flag == 0) {
				document.getElementById("b9").value = '';
				document.getElementById("b9").disabled = false;
				flag = 1;
				document.getElementById('print')
				.innerHTML = "Player X Turn again";
			}
		}
	}

}