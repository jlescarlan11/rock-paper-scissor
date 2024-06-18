let getComputerChoice = () => {
  let choice = Math.floor(Math.random() * 3) + 1;

  if (choice === 1) {
    return "ROCK";
  } else if (choice === 2) {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
};

let humanScore = 0;
let computerScore = 0;

function playGame() {
  for (let i = 0; i < 5; i++) {
    let getHumanChoice = () =>
      prompt("Enter you choice\n(Rock, Paper, Scissor)", "");

    function playRound(humanChoice, computerChoice) {
      if (humanChoice === computerChoice) {
        return "tie";
      } else if (
        (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (humanChoice === "PAPER" && computerChoice === "ROCK") ||
        (humanChoice === "SCISSORS" && computerChoice === "PAPER")
      ) {
        return "player";
      } else {
        return "computer";
      }
    }

    let humanSelection = getHumanChoice();
    if (humanSelection !== null) {
      humanSelection = humanSelection.toUpperCase();
    } else {
      alert("Cancelled");
      console.log("Cancelled");
      return;
    }
    let computerSelection = getComputerChoice();

    const result = playRound(humanSelection, computerSelection);
    if (result === "player") {
      console.log(`You win! ${humanSelection} beats ${computerSelection}`);
      alert(`You win! ${humanSelection} beats ${computerSelection}`);
      humanScore++;
    } else if (result === "computer") {
      console.log(`You lose! ${computerSelection} beats ${humanSelection}`);
      alert(`You lose! ${computerSelection} beats ${humanSelection}`);
      computerScore++;
    } else {
      console.log(
        `No winner! ${humanSelection} can't beat ${computerSelection}`
      );
      alert(`No winner! ${humanSelection} can't beat ${computerSelection}`);
    }
  }
}

playGame();

alert(
  `Your score is : ${humanScore}\nComputer score is : ${computerScore}\n${
    humanScore === computerScore
      ? "tie"
      : humanScore > computerScore
      ? "you win!"
      : "you lose!"
  }`
);

console.log(
  `Your score is : ${humanScore}\nComputer score is : ${computerScore}\n${
    humanScore === computerScore
      ? "tie"
      : humanScore > computerScore
      ? "you win!"
      : "you lose!"
  }`
);
