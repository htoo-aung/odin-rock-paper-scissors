let playerWins = 0;
let computerWins = 0;
let ties = 0;

const userChoiceBtns = document.querySelectorAll('.btn-choice');

const roundOutcome = document.querySelector('#round-outcome');
const roundStatus = document.querySelector('#round-status');
const playerChoice = document.querySelector('#player-choice');
const computerChoice = document.querySelector('#comp-choice');

/**
 * Plays a game of rock, paper, scissors.
 */
function playGame() {
    for (let i = 0; i < 5; i++) {
        let results = userChoiceBtns.forEach((button) => {
            button.addEventListener("click", () => {
                const pChoice = button.textContent.toLowerCase();
        
                return playRound(pChoice, getComputerChoice());
            });
        });

        if (results === 'win') {
            playerWins++;
            console.log(`You win!`);
        }
        else if (results === "lose") {
            computerWins++;
            console.log(`You lose!`);
        }
        else {
            ties++;
            console.log(`It's a tie!`);
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
        roundStatus.textContent = 'You win!';
    }
    else if (computerWins > playerWins) {
        roundStatus.textContent = 'You lose :(';
    }
    else {
        roundStatus.textContent = 'It is a tie.';
    }
}

playGame();
