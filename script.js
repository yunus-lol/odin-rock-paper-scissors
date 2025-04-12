let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
  computerNumber = Math.random();
  if (computerNumber >= 0.66){
    return "rock";
  } else if (computerNumber >= 0.33){
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice(){
  userInput = prompt("Please enter 'Rock', 'Paper' or 'Scissors'.");
}

function playRound(humanChoice, computerChoice){
  const lowerCaseHuman = userInput.toLowerCase(); 
  if (
    lowerCaseHuman == "rock" && computerChoice == "scissors" ||
    lowerCaseHuman == "paper" && computerChoice == "rock" ||
    lowerCaseHuman == "scissors" && computerChoice == "paper" 
  ){
    console.log("you win");
    humanScore += 1;
    computerScore += 0;
  } else if (computerChoice == lowerCaseHuman){
    console.log("draw")
    humanScore += 0;
    computerScore += 0;
  } else {
    console.log("you lost");
    humanChoice += 0;
    computerScore += 1;
  }
}

function playGame(){
  getComputerChoice();
  getHumanChoice()
  playRound();
  getComputerChoice();
  getHumanChoice()
  playRound();
  getComputerChoice();
  getHumanChoice()
  playRound();
  getComputerChoice();
  getHumanChoice()
  playRound();
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
playGame();

if (humanScore > computerScore){
  console.log("Player wins!")
} else if (computerScore > humanScore){
  console.log("Computer wins, you lost!")
} else {
  console.log("Draw!")
}

console.log(`The score was ${humanScore}:${computerScore}`)