function Model(){
	this.compRandPick = '';
	this.userInputClicked=false;
	this.gameReset = false;

	this.randomCompPick = function(){		//returns randomly generated computer pick
		// this.compRandGenerated=true;
		var randPick = Math.floor((Math.random()*3)+1);
		switch(randPick){
			case 1:
				this.compRandPick = 'rock';
				return this.compRandPick;
			case 2:
				this.compRandPick = 'scissor';
				return this.compRandPick;
			case 3:
				this.compRandPick = 'paper';
				return this.compRandPick;
		} 
	};

	this.resetGame = function(){	//sets compRandPick to empty string
		this.compRandPick = '';		//gameReset needs to be reset to false in controller
		this.gameReset = true;

	};
}