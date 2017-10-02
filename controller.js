function Controller(){
    this.clickable = true;
    this.player_input = function(player_pick){
        this.player_input = player_pick.toLowerCase();
    }
    this.cpu_input = function(){
        this.cpu_input = rpsModel.randomCompPick();
    };
    this.win_condition = function(){
        if(this.player_input === "rock" && this.cpu_input ==="scissor"){
            return "player";
        }
        else if(this.player_input === "paper" && this.cpu_input === "scissor"){
            return "cpu";
        }
        else if(this.player_input === "rock" && this.cpu_input === "paper"){
            return "cpu";
        }
        else if(this.player_input === "scissor" && this.cpu_input === "paper"){
            return "player"
        }
        else if(this.player_input === "paper" && this.cpu_input === "rock"){
            return "player"
        }
        else if(this.player_input === "scissor" && this.cpu_input === "rock"){
            return "cpu"
        }
        else{
            return "draw"
        }
        this.clickable = false;
    }
    this.reset = function(){
        this.cpu_input = function(cpu_pick){
            this.cpu_input = cpu_pick;
        };
        this.player_input = function(player_pick){
            this.player_input = player_pick;
        }
        this.clickable = true;
    }
}
