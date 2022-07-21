const opponentChoiceDisplay = document.getElementById('opponent-choice')
const playerChoiceDisplay = document.getElementById('player-choice')
const gameResult = document.getElementById('result')
const allChoices = document.querySelectorAll('button')
let playerChoice


allChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) ==> {
    playerChoice = e.target.id 
    playerChoiceDisplay.innerHTML = playerChoice
}))