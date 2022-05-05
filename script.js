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
    if (playerInput == "rock") {
        playerInput = 1;
    }
    else if (playerInput == "paper") {
        playerInput = 2;
    }
    else if (playerInput == "scissors") {
        playerInput = 3;
    }
    else {
        console.log("Misspelled. Try again")
    }
}

    const playerSelection = "Rock";
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));