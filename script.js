// declare two changeable global variables to use later
let playerChoice;
let computerChoice;

// create the logic for a computer player that randomly returns rock, paper, or scissors
function computerPlay() {
    let randInt = Math.floor(Math.random() * 3) + 1;
    let aiChoice;
    if (randInt == 1){
        aiChoice = "rock"
    }
    if (randInt == 2){
        aiChoice = "paper"
    }
    if (randInt == 3){
        aiChoice = "scissors"
    }
    return aiChoice;
}

// create a function that plays a single round of rock, paper, scissors
function playRound(playerSelection, computerSelection) {
    // make the player input case-insensitive
    let playerInput = playerSelection.toLowerCase();

    // redo the round if there is a tie
    if (playerInput == computerSelection) {
        return playRound(prompt(`We tied! We both chose ${playerInput}. Try again.`), computerPlay());
    }

    // create logic for the outcome of the round by evaluating whether the player wins or loses
    else if (playerInput == "rock") {
        if (computerSelection == "paper") {
            return "You lose! Paper covers Rock!";
        } else {
            return "You win! Rock beats Scissors!";
        }

    } else if (playerInput == "paper") {
        if (computerSelection == "rock") {
            return "You win! Paper covers Rock!";
        } else {
            return "You lose! Scissors cuts Paper!";
        }

    } else if (playerInput == "scissors") {
        if (computerSelection == "paper") {
            return "You win! Scissors cuts Paper!";
        } else {
            return "You lose! Rock beats Scissors!";
        }

        // redo the round if the player misspelled their input
    } else {
        return (playRound(prompt("Misspelled. Try again."), computerPlay()));
    }
}


function game() {

    // introduce the game and the goal
    console.log("Let's play Rock Paper Scissors! Best 3 out of 5.");

    // set up the scorekeepers
    let aiScore = 0;
    let playerScore = 0;

    // create the 5-round loop and ask for player and computer input
    for (let i = 0; i < 5; i++) {
        playerChoice = prompt("choose your weapon");
        computerChoice = computerPlay();

        console.log(`round ${i + 1}.`);

        // play a single round of rock, paper, scissors
        let result = playRound(playerChoice, computerChoice);
        console.log(result);

        // check to see who won the round and assign a point to the winner
        if (result.includes("win")) {
            playerScore++;
        } else {
            aiScore++;
        }
        console.log(`Player: ${playerScore}, Computer: ${aiScore}`);

        // check to see if either player has 3 points (which means they win the game)
        if (playerScore == 3 || aiScore == 3) {
            break
        }
    }

    // determine who won the game  and declare the winner
    if (playerScore > aiScore) {
        console.log("Congratulations! You won the game!");
    } else {
        console.log("Tough luck! The computer won the game!");
    }
}

game();