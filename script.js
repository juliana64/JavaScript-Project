let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;
let draw = 0;
let playRound = 1;

function playerInput (){
    let playerChoice = prompt ("Rock, Paper or Scissors?");
    return playerChoice;
    let playerSelection = playerChoice.toLocaleLowerCase();
    return playerSelection;
}

function getComputerChoice(){
    return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}

function getWinner(){
    if (playerSelection == computerSelection){
        return draw;
    }
    else if (playerSelection == "rock"){
        if (computerSelection == "paper"){
            return 'computer';
        }
        else if (computerSelection == "scissors"){
            return 'player';
        }
    }
    else if (playerSelection == "paper"){
        if (computerSelection == "rock"){
            return 'computer';
        }
        else if (computerSelection == "scissors"){
            return 'player';
        }
    }
    else if (playerSelection == "scissors"){
        if (computerSelection == "rock"){
            return 'computer';
        }
        else if (computerSelection == 'paper'){
            return 'player';
        }
    }
    else{
        return "You must have typed something wrong. Try again!";
    }
}

function showWinner (winner){
    if (winner == 'player'){
        playerScore++ ;
        return 'You Won!' + playerSelection.toUpperCase () + 'beats' + computerSelection.toUpperCase();
    }
    else if (winner == 'computer'){
        computerScore++ ;
        return 'You Lost' + computerSelection.toUpperCase () + 'beats' + playerSelection.toUpperCase();
    }
}

function game(){
    while (round <= 5){
        playerSelection = playerInput ();
        computerSelection = getComputerChoice();
        let winner = getWinner ();
        console.log(winner);
        let score = showWinner (winner);
        console.log(score);
        round++;
    }
    console.log("Total Score: You:" + playerScore + "" + "Computer:" + computerScore + "" + "Draws:" + draw)
}
game();