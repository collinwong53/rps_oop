var rpsController = null;
var rpsView = null;
var rpsModel = null;

$(document).ready(function(){
	rpsController = new Controller();
	rpsView = new View();
	rpsModel = new Model();

	$('.user_move').on('click',rpsView.pickMove);
});