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
  const lowerCaseHuman = userInput.toLowerCase(); // return back to later
  if (
    userInput == "rock" && computerChoice == "Scissors" ||
    userInput == "paper" && computerChoice == "Rock" ||
    userInput == "scissors" && computerChoice == "Paper" 
  ){
    console.log(computerChoice);
    console.log("you win");
  } else if (computerChoice == userInput){
    console.log(computerChoice);
    console.log("draw")
  } else {
    console.log(computerChoice);
    console.log("you lost");
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)

let humanScore = 0;
let computerScore = 0;