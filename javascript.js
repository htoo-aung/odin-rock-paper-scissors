let playerWins = 0;
let computerWins = 0;
let ties = 0;

/**
 * Plays a game of rock, paper, scissors.
 */
function playGame() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose: Rock, Paper, or Scissors");
        let computerSelection = getComputerChoice();
        let results = playRound(playerSelection, computerSelection);

        if (results === 'win') {
            playerWins++;
            console.log(`You win! ${playerSelection.toLowerCase()} beats ${computerSelection}`);
        }
        else if (results === "lose") {
            computerWins++;
            console.log(`You lose! ${computerSelection} beats ${playerSelection.toLowerCase()}`);
        }
        else {
            ties++;
            console.log(`It's a tie! You both chose ${playerSelection.toLowerCase()}`);
        }
    }

    decideWinner();
}

/**
 * Plays a round of rock, paper, scissors.
 * 
 * @param {string} playerSelection 
 * @param {string} computerSelection 
 * @returns String value indicating a "win", "lose", or "tie".
 */
function playRound(playerSelection, computerSelection) {
    let pChoice = playerSelection;
    let cChoice = computerSelection;

    // Check to see the outcome
    if (pChoice.toLowerCase() === "rock" && cChoice === "scissors" ||
        pChoice.toLowerCase() === "paper" && cChoice === "rock" ||
        pChoice.toLowerCase() === "scissors" && cChoice === "paper") {
            return "win";
        }
    else if (pChoice === cChoice) {
        return "tie";
    }
    else {
        return "lose";
    }
}

/**
 * Randomly selects a choice of rock, paper, or scissors from an array.
 * 
 * @returns An choice of rock, paper, or scissors
 */
function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];

    return choice[Math.floor(Math.random() * choice.length)];
}

/**
 * Checks who has more wins, or equal amount of wins.
 * 
 * @returns Console output of string declaring winner. 
 */
function decideWinner() {
    if (playerWins > computerWins) {
        return console.log("You win!");
    }
    else if (computerWins > playerWins) {
        return console.log("You lose :(");
    }
    else {
        return console.log("It's a tie.");
    }
}

playGame();
