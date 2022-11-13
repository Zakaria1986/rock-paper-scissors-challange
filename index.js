// Build a rock-paper-scissors game using only JavaScript.

// Rock: wins against scissors, loses to paper, and ties against itself.
//* Paper: wins against rock, loses to scissors, and ties against itself.
// * Scissors: wins against paper, loses to rock, and ties against itself.


// Computer choice array
var gameCards = ['r', 'p', 's']

// Game winning condition
var winningCondition = ['rs', 'pr', 'sp', 'rr', 'pp', 'ss']

var userWins = 0;
var draw = 0;

// Draw if user and computer choices are the same
for (var i = 0; i < winningCondition.length + 4; i++) {
    // Variaable holding compouter choice

    var userInput = prompt("Select from: R, P, or S");
    var usersChoice = userInput;
    // console.log(usersChoice);

    var comChoice = Math.floor(Math.random(gameCards.length) * gameCards.length);
    var compresult = comChoice;
    // console.log(comChoice);
    // Processing user choices

    var inputChecks = usersChoice + gameCards[comChoice];
    console.log(inputChecks);

    if (inputChecks === winningCondition[0] || inputChecks === winningCondition[1] || inputChecks === winningCondition[2]) {
        userWins++;
        console.log("You win! Your score is: " + userWins);
    }
    else if (inputChecks === winningCondition[3] || inputChecks === winningCondition[4] || inputChecks === winningCondition[5]) {

        draw++;
        console.log('Its a draw, your total draw is ' + draw);
    }
    else {
        console.log("you lose computer wins... better luck next time");
    }

    if (i == 9) {
        alert("Game over, your wins: " + userWins + " Draw:" + draw);
    }

}



