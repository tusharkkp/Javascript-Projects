// ==============================
// Variables
// ==============================

let playerScore = 0;
let computerScore = 0;

// ==============================
// DOM Elements
// ==============================

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

const result = document.getElementById("result");
const computer = document.getElementById("computer");
const scoreDisplay = document.getElementById("score");

// ==============================
// Generate Computer Choice
// ==============================

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return "Rock";
  } else if (randomNumber === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

// ==============================
// Decide Winner
// ==============================

function playRound(playerChoice) {
  const computerChoice = getComputerChoice();

  computer.textContent = `Computer chose: ${computerChoice}`;

  if (playerChoice === computerChoice) {
    result.textContent = "🤝 It's a Draw!";
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    playerScore++;
    result.textContent = "🎉 You Win!";
  } else {
    computerScore++;
    result.textContent = "😢 Computer Wins!";
  }

  scoreDisplay.textContent = `You: ${playerScore} | Computer: ${computerScore}`;
}

// ==============================
// Event Listeners
// ==============================

rockButton.addEventListener("click", function () {
  playRound("Rock");
});

paperButton.addEventListener("click", function () {
  playRound("Paper");
});

scissorsButton.addEventListener("click", function () {
  playRound("Scissors");
});
