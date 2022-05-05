console.log("Hello Jimmy");
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
function playRound(playerSelection, computerSelection) {
    let playerInput = playerSelection.toLowerCase();
    if (playerInput == computerSelection) {
        return playRound(prompt(`We tied! We both chose ${playerInput}. Try again.`), computerPlay());
    }
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

    } else {
        return (playRound(prompt("Misspelled. Try again."), computerPlay()));
    }
}

let playerChoice;
let computerChoice;


function game() {
    for (let i = 0; i < 5; i++) {
        playerChoice = prompt("choose your weapon");
        computerChoice = computerPlay();

        console.log(`round ${i + 1} of 5.`);

        console.log(playRound(playerChoice, computerChoice));
    }
}

game();