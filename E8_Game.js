button_Rock.addEventListener('click', function() {
	playerMove(1,0,0);
});
button_Paper.addEventListener('click', function() {
	playerMove(0,0,1);
});
button_Scissor.addEventListener('click', function() {
	playerMove(0,0,1);
});

function playerMove(rock,paper,scissor){
	var compMove,rockComp,paperComp,scissorComp;
	compMove = Math.floor(Math.random() * 3) + 1;
	if(compMove==1)rockComp=1;
	else{
		if (compMove==2) paperComp=1;
		else{
			scissorComp=1;
		}
	}
	//win conditions
	if((rock==1&&scissorComp==1)||(paper==1&&rockComp==1)||(scissor==1&&paperComp==1)){
		output.innerHTML += 'You have won.<br>';
	}
	else{
		//lose conditions
		if((rock==1&&paperComp==1)||(paper==1&&scissorComp==1)||(scissor==1&&rockComp==1)){
			output.innerHTML += 'You have lost.<br>';
		}else{
			output.innerHTML += 'There is a draw.<br>';
			}
	}
}