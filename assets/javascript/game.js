
$(document).ready(function () {

	var red = 0;
	var blue = 0;
	var yellow = 0;
	var green = 0;
	var playerScoreNumber = 0;
	var numberToGuess = 0;
	var win = 0;
	var lose = 0; 
	var redButton;
	var blueButton;
	var yellowButton;
	var greenButton;

    startGame();

	function startGame() {

		red = 1 + Math.floor(Math.random() * 12);
		blue = 1 + Math.floor(Math.random() * 12);
		yellow = 1 + Math.floor(Math.random() * 12);
		green = 1 + Math.floor(Math.random() * 12);
		playerScoreNumber = 0;
		
		// each button will get the random number value
        redButton = $("#redDiamond");
        redButton.attr("b-value", red);

        blueButton = $("#blueDiamond");
        blueButton.attr("b-value", blue);

        yellowButton = $("#yellowDiamond");
        yellowButton.attr("b-value", yellow);

        greenButton = $("#greenDiamond");
        greenButton.attr("b-value", green);

		console.log(red, blue, yellow, green);

		// number to guess will be set to random number
		numberToGuess = Math.floor(Math.random() * 102) + 19;
		console.log(numberToGuess);

		// display random number, player score, win and lose score
		$("#holdsRandomNumber").text(numberToGuess);
		$("#playerScore").text(playerScoreNumber);
		$("#winsScore").text(win);
		$("#lossesScore").text(lose);
	}


      $(".crystal").on("click", function() {

      	// click the crystal and get it's value
      	var crystalValue = $(this).attr("b-value");
    	crystalValue = parseInt(crystalValue);

    		// add value of the crystal to the playerScoreNumber value and update
    		// it on the screen
			playerScoreNumber += crystalValue;
			$("#playerScore").text(playerScoreNumber);

				// run the test to check if numbers matched or user went over and start the game
				// if either conditions were met keepng the win and lose score current. 
	 			if (playerScoreNumber === numberToGuess) {
			      alert("You win!");
			      win++;
			      startGame();
			    }

			    else if (playerScoreNumber >= numberToGuess) {
			      alert("You lose!!");
			      lose++;
			      startGame();
			    }
      });
});




