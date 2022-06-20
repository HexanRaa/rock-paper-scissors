// Rock Paper Scissor Choices
const choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

// Selecting a Random Choice
function computerPlay() {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

// Single Round of Rock Paper Scissors

function playRound(playerSelection, computerSelection) {
  // Player choice is Rock
  if (playerSelection === "rock" && computerSelection === "Rock") {
    console.log("You Drew! Rock equals Rock");
  } else if (playerSelection === "rock" && computerSelection === "Paper") {
    computerScore++;
    console.log("You Lose! Paper beats Rock");
  } else if (playerSelection === "rock" && computerSelection === "Scissors") {
    playerScore++;
    console.log("You Win! Rock beats Scissors");
  }
  // Player choice is Paper
  else if (playerSelection === "paper" && computerSelection === "Paper") {
    console.log("You Drew! Paper equals Paper");
  } else if (playerSelection === "paper" && computerSelection === "Scissors") {
    computerScore++;
    console.log("You Lose! Scissors beats Paper");
  } else if (playerSelection === "paper" && computerSelection === "Rock") {
    playerScore++;
    console.log("You Win! Paper beats Rock");
  }
  // Player choice is Scissors
  else if (playerSelection === "scissors" && computerSelection === "Scissors") {
    console.log("You Drew! Scissors equals Scissors");
  } else if (playerSelection === "scissors" && computerSelection === "Rock") {
    computerScore++;
    console.log("You Lose! Rock beats Scissors");
  } else if (playerSelection === "scissors" && computerSelection === "Paper") {
    playerScore++;
    console.log("You Win! Scissors beats Paper");
  }
}

let computerSelection;

// Playing game for many Rounds

function game() {
  for (let i = 0; i < 5; i++) {
    computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
}

// Geting Input from User
const playerChoice = prompt();
// Changing player input to lowercase
const playerSelection = playerChoice.toLocaleLowerCase();

console.log(game());

// Displaying the Score
console.log(`Player Score: ${playerScore}`);
console.log(`Computer Score: ${computerScore}`);
