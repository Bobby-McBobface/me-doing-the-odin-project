function computerPlay() {
    return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return ["It's a draw!", 0];
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper")
            return ["You lose! Paper beats Rock", -1];
        if (computerSelection === "scissors")
            return ["You win! Rock beats Scissors", 1];
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock")
            return ["You win! Paper beats Rock", 1];
        if (computerSelection === "scissors")
            return ["You lose! Scissors beats Paper", -1];
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock")
            return ["You lose! Rock beats Scissors", -1];
        if (computerSelection === "paper")
            return ["You win! Scissors beats Paper", 1];
    }
    return ["Invalid choice", 0];
}

function game() {
    let score = 0;
    const computerSelection = computerPlay();
    const [message, scoreOffset] = playRound(playerSelecton, computerSelection);
    score += scoreOffset;
    console.log(message);
    if (score > 0) {
        console.log("You win!");
    } else if (score < 0) {
        console.log("You lose!");
    } else {
        console.log("It's a draw!");
    }
}

game();
