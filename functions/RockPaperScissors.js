const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "bomb" ||
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else return "error";

  //below: Using ternary operator
  //return userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' ? userInput : console.log('error');
};

const getComputerChoice = function () {
  const flag = Math.floor(Math.random() * 3);
  if (flag === 0) return "rock";
  else if (flag === 1) return "paper";
  else return "scissors";
};

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) return "The game was a tie.";
  else if (userChoice === "rock") {
    if (computerChoice === "scissors") return "user won.";
    else return "computer won.";
  } else if (userChoice === "paper") {
    if (computerChoice === "rock") return "user won.";
    else return "computer won.";
  } else if (userChoice === "scissors") {
    if (computerChoice === "paper") return "user won.";
    else return "computer won.";
  } else if (userChoice === "bomb") return "user won by the cheat code.";
  else if (userChoice === "error") return "user error!";
}

function playGame() {
  const userChoice = getUserChoice("Rock");
  const computerChoice = getComputerChoice();
  console.log("You threw: " + userChoice);
  console.log("The computer threw: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
