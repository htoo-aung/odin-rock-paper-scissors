function playGame() {
    let playerWins = 0;
    let computerWins = 0;

    for (let i = 0; i < 5; i++) {
        playRound();
        
        if (returnWin()) {
            playerWins++;
        }
        else {
            computerWins++;
        }
    }
}

function playRound(playerSelection, computerSelection) {
    let pChoice = playerSelection;
    let cChoice = computerSelection;
    
    if (pChoice === "rock") {

        if (cChoice === "scissors") {
            return returnWin(pChoice, cChoice);
        }
        else if (cChoice === "paper") {
            return returnLose(pChoice, cChoice);
        }
        else {  
            return returnTie(pChoice);
        }
    }
    else if (pChoice === "paper") {

        if (cChoice === "rock") {
            return returnWin(pChoice, cChoice);
        }
        else if (cChoice === "scissors") {
            return returnLose(pChoice, cChoice);
        }
        else {  
            return returnTie(pChoice);
        }
    }

    else {

        if (cChoice === "paper") {
            return returnWin(pChoice, cChoice);
        }
        else if (cChoice === "rock") {
            return returnLose(pChoice, cChoice);
        }
        else {  
            return returnTie(pChoice);
        }
    }
    
}

function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];

    return choice[Math.floor(Math.random() * choice.length)];
}

function returnWin(winner, loser) {
    return `You Won! ${winner} beats ${loser}!`;
}

function returnLose(winner, loser) {
    return `You Lose! ${winner} beats ${loser}!`;
}

function returnTie(tie) {
    return `It's a tie! You both chose ${tie1}`;
}