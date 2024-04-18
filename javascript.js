let playerWins = 0;
let computerWins = 0;
let ties = 0;

const userChoiceBtns = document.querySelectorAll('.btn-choice');

const roundOutcome = document.querySelector('#round-outcome');
const roundStatus = document.querySelector('#round-status');
const gameOutcome = document.querySelector('#game-outcome')
const playerChoice = document.querySelector('#player-choice');
const computerChoice = document.querySelector('#comp-choice');

const results = userChoiceBtns.forEach((button) => {
    button.addEventListener("click", () => {
        const pChoice = button.textContent.toLowerCase();

        playerChoice.textContent = button.textContent;

        return playRound(pChoice, getComputerChoice());
    });
});

/**
 * Plays a game of rock, paper, scissors.
 */
function playGame() {
    if (results === 'win') {
        playerWins++;
    }
    else if (results === "lose") {
        computerWins++;
    }
    else {
        ties++;
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
        roundOutcome.textContent = `You win! ${playerChoice.textContent} beats ${computerChoice.textContent}`;
        return "win";
    }
    else if (pChoice === cChoice) {
        roundOutcome.textContent = `It's a tie! Both choices are ${playerChoice.textContent}`;
        return "tie";
    }
    else {
        roundOutcome.textContent = `You lose! ${computerChoice.textContent} beats ${playerChoice.textContent}`;
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
    computerChoice.textContent = cChoice;

    return cChoice;
}

/**
 * Checks who has more wins, or equal amount of wins.
 * 
 * @returns Console output of string declaring winner. 
 */
function decideWinner() {

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

playGame();
