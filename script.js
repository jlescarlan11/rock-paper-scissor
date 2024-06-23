let getComputerChoice = () => {
  let choice = Math.floor(Math.random() * 3) + 1;

  if (choice === 1) {
    return "rock";
  } else if (choice === 2) {
    return "paper";
  } else {
    return "scissors";
  }
};

let humanScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choices");
const restart = document.querySelector(".restart");

const resultText = document.querySelector("#result-text");

let getHumanChoice;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "tie";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissor" && computerChoice === "paper")
  ) {
    return "player";
  } else {
    return "computer";
  }
}

function showResult(result, humanSelection, computerSelection) {
  const scoreText = document.querySelector(`#${result}-score`);
  if (!(humanScore === 5 || computerScore == 5)) {
    switch (result) {
      case "player":
        resultText.textContent = `You win! ${humanSelection} beats ${computerSelection}`;
        scoreText.textContent = `Player : ${++humanScore}`;
        break;
      case "computer":
        resultText.textContent = `You lose! ${computerSelection} beats ${humanSelection}`;
        scoreText.textContent = `Computer : ${++computerScore}`;
        break;
      case "tie":
        resultText.textContent = `No winner! ${humanSelection} can't beat ${computerSelection}`;
        break;
    }
  }

  if (humanScore === 5 || computerScore == 5) {
    if (humanScore === 5) {
      resultText.textContent = "Congratulations! You made it.";
    } else {
      resultText.textContent = "Aww! You lose to a computer?";
    }
  }
}

if (!(humanScore === 5 || computerScore == 5)) {
  choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      let humanSelection = choice.id;
      let computerSelection = getComputerChoice();

      const result = playRound(humanSelection, computerSelection);
      showResult(result, humanSelection, computerSelection);
    });
  });
}

restart.addEventListener("click", () => {
  const scores = document.querySelectorAll(`.score`);

  humanScore = 0;
  computerScore = 0;

  scores[0].textContent = `Player : ${humanScore}`;
  scores[1].textContent = `Computer : ${computerScore}`;

  resultText.textContent = "Click a button to start.";
});
