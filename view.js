function View(){
    this.cpuPick = null;
    this.result = null;
    this.createElements = function(){
        this.cpuPick = $('<div>').css('border','1px solid black', 'height','50px','width','50px');
        $('body').append(this.cpuPick);
        this.result = $('<div>').css('border','1px solid black',  'height','50px','width','50px');
        $('body').append(this.result);
    };

//                this.pickMove = $('.user_move').click(function(){
//                    var userInput = ($('.user_move').text());
//                    rpsController.player_input(userInput);
//
//                })
    // $('.user_move').click
    this.pickMove = function(){
        if(!rpsModel.userInputClicked) {
            this.createElements();
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
        $(this.cpuPick).text(rpsController.win_condition());
    };



};

// var rpsController = new Controller();





//clicker function
//takes user input
//pass that onto controller
//return user input
//take in data from model
//updates DOM