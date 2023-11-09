// Call out IDs using const
const userChoiceDisplay = document.getElementById("userChoice");
const computerChoiceDisplay = document.getElementById("computerChoice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button")

// Specify userChoice and computerChoice for writing algorithms
let userChoice 
let computerChoice
let result

// Use the possibleChoice const to connect userchoice and its display
// Specify possibleChoice using the forEach function. 
// Add an eventlistener to enable click read (e) =>
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice()
    generateResult()
}))

// Write a function to generate computerchoice using Math.floor
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    // console.log(randomNumber);
    if (randomNumber == 1) {
        computerChoice = "Rock"
    }
    if (randomNumber == 2) {
        computerChoice = "Paper"
    }
    if (randomNumber == 3) {
        computerChoice = "Scissors"
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function generateResult() {
    if (computerChoice == userChoice) {
        result = "Its a draw";
    }
    if (userChoice == "Rock" & computerChoice == "Paper") {
        result = "You lose";
    }
    if (userChoice == "Rock" & computerChoice == "Scissors") {
        result = "You Win. Hooray!!";
    }
    if (userChoice == "Paper" & computerChoice == "Rock") {
        result = "You Win. Hooray!!";
    }
    if (userChoice == "Paper" & computerChoice == "Scissors") {
        result = "You lose";
    }
    if (userChoice = "Scissors" & computerChoice == "Rock") {
        result = "You lose";
    }
    if (userChoice = "Scissors" & computerChoice == "Paper") {
        result = "You Win. Hooray!!";
    }

    resultDisplay.innerHTML = result;
}