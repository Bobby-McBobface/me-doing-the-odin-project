function computerPlay() {
    return ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection === computerSelection) {
        return "It's a draw!"
    }
    else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') return "You lose! Paper beats Rock"
        if (computerSelection === 'scissors') return "You win! Rock beats Scissors"
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') return "You win! Paper beats Rock"
        if (computerSelection === 'scissors') return "You lose! Scissors beats Paper"
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') return "You lose! Rock beats Scissors"
        if (computerSelection === 'paper') return "You win! Scissors beats Paper"
    }
  }