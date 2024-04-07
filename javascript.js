function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];

    return choice[Math.floor(Math.random * choice.length-1)];
}

