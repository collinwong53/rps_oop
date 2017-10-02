function Controller(){
    this.player_input = null;
    this.cpu_input = null;
    this.game_winner = null;
    this.get_player_input = function(player_pick){
        this.player_input = player_pick.toLowerCase();
        this.cpu_input = rpsModel.randomCompPick();
        // this.game_winner = this.win_condition();
        this.win_condition();
        rpsView.showResult();
    };
    this.win_condition = function(){
        if(this.player_input === "rock" && this.cpu_input ==="scissor"){
            rpsModel.gameWinnerMessage= "player won";
        }
        else if(this.player_input === "paper" && this.cpu_input === "scissor"){
            rpsModel.gameWinnerMessage= "cpu won";
        }
        else if(this.player_input === "rock" && this.cpu_input === "paper"){
            rpsModel.gameWinnerMessage= "cpu won";
        }
        else if(this.player_input === "scissor" && this.cpu_input === "paper"){
            rpsModel.gameWinnerMessage= "player won"
        }
        else if(this.player_input === "paper" && this.cpu_input === "rock"){
            rpsModel.gameWinnerMessage= "player won"
        }
        else if(this.player_input === "scissor" && this.cpu_input === "rock"){
            rpsModel.gameWinnerMessage= "cpu won"
        }
        else{
            rpsModel.gameWinnerMessage= "draw"
        }
        // this.clickable = false;
    };

    this.reset = function(){

        rpsModel.userInputclicked = false;
        // rpsModel.gameReset= true;
        rpsModel.compRandPick ='';
        rpsModel.gameWinnerMessage='';
        this.player_input = null;
        this.cpu_input = null;
        this.game_winner = null;
        rpsView.showResult();
        
    };
}
