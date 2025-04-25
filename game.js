let humanScore = 0;
let computerScore = 0;
let isRestart = false;

const buttons = document.querySelectorAll("button");
const restartButton = document.querySelector("#restartButton");
restartButton.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  humanScoreText.textContent = humanScore;
  computerScoreText.textContent = computerScore;
  result.textContent = "New Game! Make your choice!";
  restart.classList.add("invisible");
  buttons.forEach((button) => {
    button.style.opacity = "1";
    button.disabled = false;
    button.style.pointerEvents = "auto";
  });
  isRestart = false;
});
const result = document.querySelector("#resultText");
const restart = document.querySelector("#restart");
const humanScoreText = document.querySelector("#humanScore");
const computerScoreText = document.querySelector("#computerScore");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!isRestart) playRound(button.getAttribute("id"), getComputerChoice());
  });
});

humanScoreText.textContent = humanScore;
computerScoreText.textContent = computerScore;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  return randomNumber === 0
    ? "Rock"
    : randomNumber === 1
    ? "Paper"
    : "Scissors";
}

function returnResult(winner, humanChoice, computerChoice) {
  if (winner === "human") {
    humanScore += 1;
    result.textContent = `Congrats! Your ${humanChoice} beats the computer's ${computerChoice}!`;
    humanScoreText.textContent = humanScore;
  } else if (winner === "computer") {
    computerScore += 1;
    result.textContent = `Whoops! The computer's ${computerChoice} beats your ${humanChoice}!`;
    computerScoreText.textContent = computerScore;
  } else {
    result.textContent = `Tie between your ${humanChoice} and the computer's ${computerChoice}!`;
  }
}

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  )
    returnResult("human", humanChoice, computerChoice);
  else if (
    (humanChoice === "Rock" && computerChoice === "Paper") ||
    (humanChoice === "Paper" && computerChoice === "Scissors") ||
    (humanChoice === "Scissors" && computerChoice === "Rock")
  )
    returnResult("computer", humanChoice, computerChoice);
  else returnResult("tie", humanChoice, computerChoice);
  checkWinner();
}

function checkWinner() {
  if (humanScore === 5) {
    result.textContent = "Congrats! You beat the computer!";
    restartGame();
  } else if (computerScore === 5) {
    result.textContent = "Whoops! The computer beat you!";
    restartGame();
  }
}

function restartGame() {
  restart.classList.remove("invisible");
  isRestart = true;
  buttons.forEach((button) => {
    button.style.opacity = "0.5";
    button.disabled = true;
    button.style.pointerEvents = "none";
  });
}
