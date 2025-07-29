//initilizating human and computer scores to 0
let humanScore = 0
let computerScore = 0


// function to get the computer choice
function getComputerChoice() {
    Number = Math.random(1)
    if (Number < 1 / 2) {
        return "rock"
    }
    else if (Number < 2 / 3) {
        return "paper"
    }
    else
        return "scissors"
}



// function to get the human choice
function getHumanChoice() {
    let choice = prompt("enter rock or paper or scissors")
    choice = choice.toLowerCase()
    return choice;
}


// function to playRound

function playRound(humanChoice,computerChoice) {
    if (computerChoice === humanChoice) {
        console.log(`It's a tie! ${humanChoice} ties with ${computerChoice}`)
    } else if (computerChoice == 'rock' && humanChoice == 'scissors' || computerChoice == 'scissors' && humanChoice == 'paper' || computerChoice == 'paper' && humanChoice == 'rock') {
        computerScore++
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`)
    } else if (humanChoice == 'rock' && computerChoice == 'scissors' || humanChoice == 'scissors' && computerChoice == 'paper' || humanChoice == 'paper' && computerChoice == 'rock') {
        humanScore++
        console.log(`Congrats you won! ${humanChoice} beats ${computerChoice}`)
    }
    else {
        console.log("Please enter a valid option 'Rock', 'Paper', or 'Scissors' ")
    }
    console.log(`Your score is: ${humanScore}, Computer score is: ${computerScore}`)


}

// function to playGame
function playGame(){
        for(i = 0; i < 5; i++) {
      playRound(getHumanChoice(), getComputerChoice())
    }
    if(computerScore > humanScore) {
        console.log('Computer won! good luck next time')
    } else if(computerScore < humanScore){
        console.log('Congrats! you domainated the computer!')
    } else {
        console.log('No winners!')
    }
}


getHumanChoice()//getting human choice
getComputerChoice()// gettinng computer choice
playGame()



