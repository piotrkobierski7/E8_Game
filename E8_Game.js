'use strict';
var resultPlayer = 0;
var resultComp = 0;
var startGame = true;
var endGame = 0;
button_new_game.addEventListener('click', function() {
	startGame = true;
	endGame = window.prompt('How many rounds in order to win?');
}
button_Rock.addEventListener('click', function() {
	if (!startGame ) output.insertAdjacentHTML('afterbegin', ' Please click the new game button in order to play new game <br><br>') ;
	else {
			if (resultPlayer < endGame || resultComp < endGame) {
				if (startGame) playerMove(1);
		} else checkResult();
	}
});
button_Paper.addEventListener('click', function() {
	if (!startGame ) output.insertAdjacentHTML('afterbegin', ' Please click the new game button in order to play new game <br><br>') ;
	else {
		if (resultPlayer < endGame || resultComp < endGame) {
				if (startGame) playerMove(2);
		} else checkResult();
	}
});
button_Scissor.addEventListener('click', function() {
	if (!startGame ) output.insertAdjacentHTML('afterbegin', ' Please click the new game button in order to play new game <br><br>') ;
	else {
			if (resultPlayer < endGame || resultComp < endGame) {
				if (startGame) playerMove(3);
		} else checkResult();
	}
});
function rollComp() {
	var	roll = Math.floor(Math.random() * 3) + 1;
	return roll;
}
function judgePrint (player, compMove) {
	var output = document.getElementById('output');
	var playerString, compString;
	if (player == 1) playerString='ROCK';
	else player == 2 ? playerString='PAPER' : playerString='SCISSOR';
	if (compMove == 1) compString='ROCK';
	else compMove == 2 ? compString='PAPER' : compString='SCISSOR';
	if ((player==1 && compMove==3)||(player==2 && compMove==1)||(player==3 && compMove==2)) {//win conditions
		output.insertAdjacentHTML('afterbegin', 'You won: You played '+ playerString  +', computer played '+ compString + '<br>');
		resultPlayer++;
		document.getElementById('result').innerHTML='Player`s result '+resultPlayer+' | Computer`s result '+resultComp+'<br><br>' ;
	}
	else {
		if ((player==1 && compMove == 2)||(player == 2 && compMove == 3)||(player == 3 && compMove == 1)) {//lose conditions
		output.insertAdjacentHTML('afterbegin', 'You lost: You played '+ playerString  +', computer played '+ compString + '<br>');
		resultComp++;
		document.getElementById('result').innerHTML='Player`s result '+resultPlayer+' | Computer`s result'+resultComp+'<br><br>' ;
		} else {//draw conditions
			output.insertAdjacentHTML('afterbegin', 'There is a draw: You played '+ playerString  +', computer played '+ compString + '<br>');
			document.getElementById('result').innerHTML='Player`s result '+resultPlayer+' | Computer`s result'+resultComp+'<br><br>' ;
			}
	}
}
function playerMove(player){
	var compMove;
	compMove=rollComp();
	judgePrint(player, compMove);
}

function checkResult()
{
	if (resultPlayer==resultComp) output.insertAdjacentHTML('afterbegin', 'THERE WAS A DRAW!!!  Please click the new game button in order to play new game <br><br>') ;
	resultPlayer > resultComp ? output.insertAdjacentHTML('afterbegin', 'YOU WON THE ENTIRE GAME!!!  Please click the new game button in order to play new game <br><br>') :
	output.insertAdjacentHTML('afterbegin', 'YOU LOST THE ENTIRE GAME!!!  Please click the new game button in order to play new game <br><br>') ;
}