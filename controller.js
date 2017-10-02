function Controller(){
    this.player_input = null;
    this.cpu_input = null;
    this.game_winner = null;
    this.get_player_input = function(player_pick){
        this.player_input = player_pick.toLowerCase();
        this.cpu_input = rpsModel.randomCompPick();
        this.game_winner = this.win_condition();
        rpsView.showResult();
    }
    this.win_condition = function(){
        if(this.player_input === "rock" && this.cpu_input ==="scissor"){
            return "player won";
        }
        else if(this.player_input === "paper" && this.cpu_input === "scissor"){
            return "cpu won";
        }
        else if(this.player_input === "rock" && this.cpu_input === "paper"){
            return "cpu won";
        }
        else if(this.player_input === "scissor" && this.cpu_input === "paper"){
            return "player won"
        }
        else if(this.player_input === "paper" && this.cpu_input === "rock"){
            return "player won"
        }
        else if(this.player_input === "scissor" && this.cpu_input === "rock"){
            return "cpu won"
        }
        else{
            return "draw"
        }
        // this.clickable = false;
    }
    // this.reset = function(){
    //     this.cpu_input = null;
    //     this.player_input = null;
    //     // this.clickable = true;
    // }
}
