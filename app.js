// Rock Paper Scissor Choices
const choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

// Selecting a Random Choice
function computerPlay() {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

const yourscore = document.querySelector("[data-result='yourscore']");
const compscore = document.querySelector("[data-result='compscore']");

// Geting User Selection
const buttons = document.querySelectorAll("[data-selection]");
buttons.forEach((buttons) => {
  buttons.addEventListener("click", (e) => {
    const selectionName = buttons.dataset.selection;
    playerSelection = selectionName;
    computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));

    // Displaying Score
    yourscore.replaceChildren(playerScore);
    compscore.replaceChildren(computerScore);
  });
});

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
