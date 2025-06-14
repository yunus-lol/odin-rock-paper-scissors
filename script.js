let humanScore = 0;
let computerScore = 0;
let round = 0;
let winner;

function getComputerChoice() {
  computerNumber = Math.random();
  if (computerNumber >= 0.66){
    return "rock";
  } else if (computerNumber >= 0.33) {
    return "paper";
  } else {
    return "scissors";
  }
}

function gameOver() {
  if (computerScore > humanScore) {
    winner = "Computer wins!";
  } else if (humanScore > computerScore) {
    winner = "You win!";
  } else {
    winner = "Draw!"
  }

  const display = document.querySelector("#game-over");

  const gameOverDisplay = document.createElement("div");
  gameOverDisplay.textContent = `${winner}`
  display.appendChild(gameOverDisplay);
}

// buttons for user input
const container = document.querySelector("#display");

const rockButton = document.createElement("button");
rockButton.textContent = "Rock";
const paperButton = document.createElement("button");
paperButton.textContent = "Paper";
const scissorsButton = document.createElement("button");
scissorsButton.textContent = "Scissors";

container.appendChild(rockButton);
container.appendChild(paperButton);
container.appendChild(scissorsButton);

const pointsContainer = document.querySelector("#point-list");
const point = document.createElement("div");

rockButton.addEventListener("click", () => {
  round += 1;

  const humanSelection = "rock";
  const computerSelection = getComputerChoice();
  if (computerSelection === "paper") {
    point.textContent = "computers point";
    pointsContainer.appendChild(point);
    computerScore += 1;
  } else if (computerSelection === "scissors") {
    point.textContent = "your point";
    pointsContainer.appendChild(point);
    humanScore += 1;
  } else {
    point.textContent = "draw";
    pointsContainer.appendChild(point);
  }

  if (round === 5) {
    gameOver();
  }

  const scoreTracker = document.createElement("div");
  scoreTracker.textContent = `${computerScore} ${humanScore}`
  display.appendChild(scoreTracker);
});

paperButton.addEventListener("click", () => {
  round += 1;
  const humanSelection = "paper";
  const computerSelection = getComputerChoice();
  if (computerSelection === "paper") {
    point.textContent = "draw";
    pointsContainer.appendChild(point);
  } else if (computerSelection === "scissors") {
    point.textContent = "computers point";
    pointsContainer.appendChild(point);
    computerScore += 1;
  } else {
    point.textContent = "your point";
    pointsContainer.appendChild(point);
    humanScore += 1;
  }

  if (round === 5) {
    gameOver();
  }

  const scoreTracker = document.createElement("div");
  scoreTracker.textContent = `${computerScore} ${humanScore}`
  display.appendChild(scoreTracker);
});

scissorsButton.addEventListener("click", () => {
  round += 1
  const humanSelection = "scissors";
  const computerSelection = getComputerChoice();
  if (computerSelection === "paper") {
    point.textContent = "your point";
    pointsContainer.appendChild(point);
    humanScore += 1;
  } else if (computerSelection === "scissors") {
    point.textContent = "draw";
    pointsContainer.appendChild(point);
  } else {
    point.textContent = "computers point";
    pointsContainer.appendChild(point);
    computerScore += 1;
  }

  if (round === 5) {
    gameOver();
  }

  const scoreTracker = document.createElement("div");
  scoreTracker.textContent = `${computerScore} ${humanScore}`
  display.appendChild(scoreTracker);
});