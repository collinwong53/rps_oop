function View(){
    this.createElements = function(){
        var cpuPick = $('<div>').css('border','1px solid black', 'height','50px','width','50px');
        $('body').append(cpuPick);
        var result = $('<div>').css('border','1px solid black',  'height','50px','width','50px');
        $('body').append(result);
    };

//                this.pickMove = $('.user_move').click(function(){
//                    var userInput = ($('.user_move').text());
//                    rpsController.player_input(userInput);
//
//                })
    // $('.user_move').click
    this.pickMove = function(){
        var button = event.target;
        console.log(button);
        var userInput = $(button).text();
        rpsController.player_input(userInput);
    }.bind(this);

    this.showCPU = function(){
        var cpuInput = cpu_input;
        rpsController.win_condition(cpu_input);
        $(cpuPick).append(cpuInput)
    };

};

// var rpsController = new Controller();





//clicker function
//takes user input
//pass that onto controller
//return user input
//take in data from model
//updates DOM