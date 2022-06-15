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

let score = 0;
const resultsDiv = document.getElementById("results");
const scoreDiv = document.getElementById("score");

function game(playerSelection) {
    const computerSelection = computerPlay();
    const [message, scoreOffset] = playRound(
        playerSelection,
        computerSelection
    );
    score += scoreOffset;
    scoreDiv.textContent = score;
    resultsDiv.textContent = message;
    if (score >= 5) {
        resultsDiv.textContent = "You win!"
    } else if (score <= -5) {
        resultsDiv.textContent = "You lose!"
    }
}

const rock = document.getElementById("rock");
rock.addEventListener("click", () => {
    game("rock");
});

const paper = document.getElementById("paper");
paper.addEventListener("click", () => {
    game("paper");
});

const scissors = document.getElementById("scissors");
scissors.addEventListener("onclick", () => {
    game("scissors");
});
