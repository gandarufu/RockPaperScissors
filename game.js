let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  //   console.log(randomNumber);
  return randomNumber === 0
    ? "Rock"
    : randomNumber === 1
    ? "Paper"
    : "Scissors";
}

function getHumanChoice() {
  const input = prompt("Choose between 'Rock', 'Paper' or 'Scissors'!", "Rock");
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}

function returnResult(winner, humanChoice, computerChoice) {
  if (winner === "human") {
    humanScore += 1;
    console.log(
      `Congrats! Your ${humanChoice} beats the computer's ${computerChoice}!`
    );
  } else if (winner === "computer") {
    computerScore += 1;
    console.log(
      `Whoops! The computer's ${computerChoice} beats your ${humanChoice}!`
    );
  } else {
    console.log(
      `Tie between your ${humanChoice} and the computer's ${computerChoice}!`
    );
  }
  console.log(
    `Your score: ${humanScore}\nThe Computer's score: ${computerScore}`
  );
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "Rock") {
    if (computerChoice === "Scissors") {
      returnResult("human", humanChoice, computerChoice);
    } else if (computerChoice === "Paper") {
      returnResult("computer", humanChoice, computerChoice);
    } else returnResult("tie", humanChoice, computerChoice);
  } else if (humanChoice === "Paper") {
    if (computerChoice === "Rock") {
      returnResult("human", humanChoice, computerChoice);
    } else if (computerChoice === "Scissors") {
      returnResult("computer", humanChoice, computerChoice);
    } else returnResult("tie", humanChoice, computerChoice);
  } else if (humanChoice === "Scissors") {
    if (computerChoice === "Paper") {
      returnResult("human", humanChoice, computerChoice);
    } else if (computerChoice === "Rock") {
      returnResult("computer", humanChoice, computerChoice);
    } else returnResult("tie", humanChoice, computerChoice);
  }
}

function playGame() {
  while (humanScore < 3 && computerScore < 3) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  if (humanScore > computerScore)
    console.log("CONGRATZ! You beat the computer!");
  else console.log("OUCH! The computer beat you!");
}

playGame();

// getHumanChoice();
// console.log(getComputerChoice());
