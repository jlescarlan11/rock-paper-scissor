let getComputerChoice = () => {
  let choice = Math.floor(Math.random() * 3) + 1;

  if (choice === 1) {
    return "ROCK";
  } else if (choice === 2) {
    return "PAPER";
  } else {
    return "SCISSOR";
  }
};

let humanScore = 0;
let computerScore = 0;

function playGame() {
  let getHumanChoice = () => prompt("Enter you choice").toUpperCase();

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(`No winner! ${humanChoice} can't beat ${computerChoice}`);
    } else if (
      (humanChoice === "PAPER" && computerChoice === "ROCK") ||
      (computerChoice === "PAPER" && humanChoice === "ROCK")
    ) {
      if (humanChoice === "PAPER") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
      } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
      }
    } else if (
      (humanChoice === "SCISSOR" && computerChoice === "PAPER") ||
      (computerChoice === "SCISSOR" && humanChoice === "PAPER")
    ) {
      if (humanChoice === "SCISSOR") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
      } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
      }
    } else if (
      (humanChoice === "ROCK" && computerChoice === "SCISSOR") ||
      (computerChoice === "ROCK" && humanChoice === "SCISSOR")
    ) {
      if (humanChoice === "ROCK") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
      } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
      }
    }
  }

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);
}

for (let i = 0; i < 5; i++) {
  playGame();
}

alert(
  `Your score is : ${humanScore}\nComputer score is : ${computerScore}\n${
    humanScore === computerScore
      ? "tie"
      : humanScore > computerScore
      ? "you win!"
      : "you lose!"
  }`
);
