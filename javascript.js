let roundsPlayed = 0;
let playerGlobalWins = 0;
let computerGlobalWins = 0;
let playerWins = 0;
let computerWins = 0;
let ties = 0;

const userChoiceBtns = document.querySelectorAll('.btn-choice');

// Round status
const roundOutcome = document.querySelector('#round-outcome');
const round = document.querySelector('#round');
const gameOutcome = document.querySelector('#game-outcome')

// Stats display
const playerChoice = document.querySelector('#player-choice');
const playerGlobalScore = document.querySelector('#global-player-score');
const playerScore = document.querySelector('#player-score');

const computerChoice = document.querySelector('#comp-choice');
const computerGlobalScore = document.querySelector('#global-computer-score');
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
    const pChoice = playerChoice.textContent;
    const cChoice = computerChoice.textContent;

    if (results === 'win') {
        playerWins++;
        roundOutcome.textContent = `You win! ${pChoice} beats ${cChoice}`;
        playerScore.textContent = playerWins.toString();
    }
    else if (results === "lose") {
        computerWins++;
        roundOutcome.textContent = `You lose! ${cChoice} beats ${pChoice}`;
        computerScore.textContent = computerWins.toString();
    }
    else {
        ties++;
        roundOutcome.textContent = `It's a tie! Both choices are ${pChoice}`;
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
    if (roundsPlayed != 7) {
        gameOutcome.textContent = 'Round Start!';
    }
    else {
        gameOutcome.textContent = 'Game over!';

        // Disable buttons
        userChoiceBtns.forEach((button) => {
            button.disabled = true;
        });

        if (playerWins > computerWins) {
            roundOutcome.textContent = 'You win!';
            playerGlobalWins++;
            playerGlobalScore.textContent = playerGlobalWins;
        }
        else if (computerWins > playerWins) {
            roundOutcome.textContent = 'You lose :(';
            computerGlobalWins++;
            computerGlobalScore.textContent = computerGlobalWins;
        }
        else {
            roundOutcome.textContent = 'Tie.';
        }
    }
}
