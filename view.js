function View(){
    this.cpuPick = null;
    this.result = null;
    this.createElements = function(){
        this.cpuPick = $('<div>').css({
            'border':'1px solid black',
            'height': '75px',
            'width' : '100px'
        });
        $('body').append(this.cpuPick);
        this.result = $('<div>').css({
            'border': '1px solid black',
            'height': '75px',
            'width' : '100px'
        });
        $('body').append(this.result);
    };
    this.createElements();
//                this.pickMove = $('.user_move').click(function(){
//                    var userInput = ($('.user_move').text());
//                    rpsController.player_input(userInput);
//
//                })
    // $('.user_move').click
    this.pickMove = function(){
        if(!rpsModel.userInputClicked) {
            // this.createElements();
            var button = event.target;
            console.log(button);
            var userInput = $(button).text();
            rpsController.get_player_input(userInput);
            rpsModel.userInputClicked = true;
        }
    }.bind(this);

    this.showResult = function(){
        // var cpuInput = cpu_input;
        // rpsController.win_condition(cpu_input);
        // $(cpuPick).append(cpuInput)
        $(this.cpuPick).text(rpsModel.compRandPick);
        $(this.result).text(rpsModel.gameWinnerMessage);
    };

    this.resetButtonClicked = function(){
        rpsController.reset();
    };

};

// var rpsController = new Controller();





//clicker function
//takes user input
//pass that onto controller
//return user input
//take in data from model
//updates DOM