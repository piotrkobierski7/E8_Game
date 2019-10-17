var resultPlayer=0;
var resultComp=0;
button_Rock.addEventListener('click', function() {
	playerMove(1,0,0);
});
button_Paper.addEventListener('click', function() {
	playerMove(0,0,1);
});
button_Scissor.addEventListener('click', function() {
	playerMove(0,0,1);
});

function rollComp(){
	var	roll = Math.floor(Math.random() * 3) + 1;
	if(roll==1)return [1,0,0];//rock
	else{
		if (roll==2) return [0,1,0];//paper
		else{
			return [0,0,1];//scissor
		}
	}
}

function judgePrint(rock,paper,scissor,rockComp,paperComp,scissorComp){
	var output = document.getElementById('output');
	if((rock==1&&scissorComp==1)||(paper==1&&rockComp==1)||(scissor==1&&paperComp==1)){
		output.insertAdjacentHTML('afterbegin', 'You have won.<br>');//win conditions
		resultPlayer++;
		document.getElementById('result').innerHTML='Player`s result '+resultPlayer+' | Computer`s result'+resultComp+'<br><br>' ;
	}
	else{
		if((rock==1&&paperComp==1)||(paper==1&&scissorComp==1)||(scissor==1&&rockComp==1)){
		output.insertAdjacentHTML('afterbegin', 'You have lost.<br>');//lose conditions
		resultComp++;
		document.getElementById('result').innerHTML='Player`s result '+resultPlayer+' | Computer`s result'+resultComp+'<br><br>' ;
		}else{
			output.insertAdjacentHTML('afterbegin', 'There is a draw.<br>');//draw conditions
			document.getElementById('result').innerHTML='Player`s result '+resultPlayer+' | Computer`s result'+resultComp+'<br><br>' ;
			}
	}
}

function playerMove(rock,paper,scissor){
	var compMove,rockComp,paperComp,scissorComp;
	compMove=rollComp();
	[rockComp,paperComp,scissorComp]=compMove;
	judgePrint(rock,paper,scissor,rockComp,paperComp,scissorComp);
	
}