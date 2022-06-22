// rock paper Scissor Choices
const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

// Selecting a Random Choice
function computerPlay() {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

const yourscore = document.getElementById("yourscore");
const compscore = document.getElementById("compscore");
const playerChoice = document.getElementById("player");
const compChoice = document.getElementById("comp");
const winnerdiv = document.getElementById("winner");
const winner = document.createElement("h1");

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

    changeChoices();

    // Displaying the choices
    playerChoice.replaceChildren(playerSelection);
    compChoice.replaceChildren(computerSelection);

    // Checking Winner
    if (playerScore === 5 && playerScore > computerScore) {
      winner.textContent = "You WON!";
      winnerdiv.appendChild(winner);
      gameEnd();
    } else if (computerScore === 5 && computerScore > playerScore) {
      winner.textContent = "Computer WON!";
      gameEnd();
    }
  });
});

// Single Round of rock paper scissors

function playRound(playerSelection, computerSelection) {
  // Player choice is rock
  if (playerSelection === "rock" && computerSelection === "rock") {
    console.log("You Drew! rock equals rock");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    console.log("You Lose! paper beats rock");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    console.log("You Win! rock beats scissors");
  }
  // Player choice is paper
  else if (playerSelection === "paper" && computerSelection === "paper") {
    console.log("You Drew! paper equals paper");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    console.log("You Lose! scissors beats paper");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    console.log("You Win! paper beats rock");
  }
  // Player choice is scissors
  else if (playerSelection === "scissors" && computerSelection === "scissors") {
    console.log("You Drew! scissors equals scissors");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    console.log("You Lose! rock beats scissors");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    console.log("You Win! scissors beats paper");
  }
}

function changeChoices() {
  switch (playerSelection) {
    case "rock":
      playerSelection = "✊";
      break;
    case "paper":
      playerSelection = "✋";
      break;
    case "scissors":
      playerSelection = "✌️";
      break;
  }
  switch (computerSelection) {
    case "rock":
      computerSelection = "✊";
      break;
    case "paper":
      computerSelection = "✋";
      break;
    case "scissors":
      computerSelection = "✌️";
      break;
  }
}

function gameEnd() {
  setTimeout(() => {
    window.location.reload();
  }, 5000);
}
