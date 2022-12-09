let userChoiceDisplay = document.querySelector("#userChoice")
let comuterChoiceDisplay = document.querySelector("#computerChoice")
let resultDisplay = document.querySelector("#result")
let buttons = document.querySelectorAll("button")
let possibleChoice
let randomNumber
let userChoice
let result

buttons.forEach(button => button.addEventListener('click', event => {
    possibleChoice = event.target.id
    userChoiceDisplay.innerHTML = possibleChoice
    computerChoice()
    getResult()
} ))

function computerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1

    switch(randomNumber) {
    case 1:
        userChoice = "rock";
        break;
    case 2:
        userChoice = "paper";
        break;
    case 3:
        userChoice = "scissors";
        break;
    default:
        comuterChoiceDisplay;
    }
comuterChoiceDisplay.innerHTML = userChoice
}

function getResult() {
    if(possibleChoice === userChoice) {
       result = "It's a tie!"
    }
    if(possibleChoice === "rock" && userChoice === "paper") {
       result = "You lose!"
    }
    if(possibleChoice === "paper" && userChoice === "rock") {
       result = "You win!"
    }
    if(possibleChoice === "rock" && userChoice === "scissors") {
       result = "You win!"
    }
    if(possibleChoice === "paper" && userChoice === "scissors") {
       result = "You lose!"
    }
    if(possibleChoice === "scissors" && userChoice === "paper") {
       result = "You win!"
    }
    if(possibleChoice === "scissors" && userChoice === "rock") {
       result = "You lose!"
    }
resultDisplay.innerHTML = result
}