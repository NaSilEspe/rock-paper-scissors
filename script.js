function getComputerChoice() {
  const random = Math.random();
  if (random < 0.33) {
    return "rock";
  } else if (random < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  return prompt("Ingresá tu elección (rock, paper, scissors): ");
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log("Empate!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You win! Human: " + humanChoice + " Computer: " + computerChoice);
    humanScore++;
  } else {
    console.log("You lose! Human: " + humanChoice + " Computer: " + computerChoice);
    computerScore++;
  }
}

function playGame() {
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  if (humanScore > computerScore) {
    console.log("You win the game! " + humanScore + " - " + computerScore);
  } else if (computerScore > humanScore) {
    console.log("You lose the game! " + humanScore + " - " + computerScore);
  } else {
    console.log("It's a tie! " + humanScore + " - " + computerScore);
  }
}

playGame();