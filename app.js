// Rock Paper Scissor Choices
const choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

// Selecting a Random Choice
function computerPlay()={
  const randomChoice= choice[Math.floor(Math.random()* choices.length)];
  return randomChoice;
}