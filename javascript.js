let roundsPlayed = 0;
let playerWins = 0;
let computerWins = 0;
let ties = 0;

const userChoiceBtns = document.querySelectorAll('.btn-choice');

const roundOutcome = document.querySelector('#round-outcome');
const round = document.querySelector('#round');
const gameOutcome = document.querySelector('#game-outcome')

// Stat display
const playerChoice = document.querySelector('#player-choice');
const playerScore = document.querySelector('#player-score');
const computerChoice = document.querySelector('#comp-choice');
const computerScore = document.querySelector('#comp-score');


userChoiceBtns.forEach((button) => {
    button.addEventListener("click", () => {
        const pChoice = button.textContent.toLowerCase();
        roundsPlayed++;

        playerChoice.textContent = button.textContent;
        round.textContent = roundsPlayed.toString();

        const results = playRound(pChoice, getComputerChoice());

        playGame(results);
    });
});

/**
 * Plays a game of rock, paper, scissors.
 */
function playGame(results) {
    if (results === 'win') {
        playerWins++;
        roundOutcome.textContent = `You win! ${playerChoice.textContent} beats ${computerChoice.textContent}`;
        playerScore.textContent = playerWins.toString();
    }
    else if (results === "lose") {
        computerWins++;
        roundOutcome.textContent = `You lose! ${computerChoice.textContent} beats ${playerChoice.textContent}`;
        computerScore.textContent = computerWins.toString();
    }
    else {
        ties++;
        roundOutcome.textContent = `It's a tie! Both choices are ${playerChoice.textContent}`;
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
    let pChoice = playerSelection.toLowerCase();
    let cChoice = computerSelection;

    // Check to see the outcome
    if (pChoice === "rock" && cChoice === "scissors" ||
        pChoice === "paper" && cChoice === "rock" ||
        pChoice === "scissors" && cChoice === "paper") {
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

    const cChoice = choice[Math.floor(Math.random() * choice.length)];
    computerChoice.textContent = cChoice.charAt(0).toUpperCase() + cChoice.slice(1);

    return cChoice;
}

/**
 * Checks who has more wins, or equal amount of wins.
 * 
 * @returns Console output of string declaring winner. 
 */
function decideWinner() {

    if (roundsPlayed != 5) {
        gameOutcome.textContent = 'Start';
    }
    else {
        if (playerWins > computerWins) {
            gameOutcome.textContent = 'You win!';
        }
        else if (computerWins > playerWins) {
            gameOutcome.textContent = 'You lose :(';
        }
        else {
            gameOutcome.textContent = 'Tie.';
        }
    }
}
