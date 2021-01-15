const roundCount = document.querySelector('#round-count');
const roundResult = document.querySelector('#round-result');
const gameResult = document.querySelector('#game-result');
const figures = document.querySelectorAll('.figures');
const scoreDisplay = document.querySelector('#score-display');
const gameResultDisplay = document.querySelector('#game-result-display');
const resetGame = document.querySelector('#reset-game');
let playerSelection = '';
let roundCounter = 1;
let playerScore = 0;
let computerScore = 0;
figures.forEach((figure) => {
    figure.addEventListener('click', () => {
        playerSelection = figure.innerHTML.toLowerCase();
        playRound(playerSelection);
    });
})
resetGame.addEventListener('click', () => {
    reset();
});

function hideDivs(){
    roundResult.style = 'visibility: hidden';
    gameResult.style = 'visibility: hidden';
}

function showDivs(){
    roundResult.style = 'visibility: visible';
    gameResult.style = 'visibility: visible';
}

function computerPlay() {
    let availablePlays = ['rock', 'paper', 'scissors'];
    return availablePlays[Math.floor(Math.random() * availablePlays.length)];
}
function playRound(playerSelection){
    let computerSelection = computerPlay();
    roundCounter += 1;
    if (playerSelection == computerSelection){
        roundResult.textContent = "Draw!";
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors')
            || (playerSelection == 'scissors' && computerSelection == 'paper') 
            || (playerSelection == 'paper' && computerSelection == 'rock')){
        roundResult.textContent = `You win, ${playerSelection} beats ${computerSelection}!`;    
        playerScore += 1;
    } else {
        roundResult.textContent = `You lose, ${computerSelection} beats ${playerSelection}!`; 
        computerScore += 1;
    }
    roundCount.textContent = `Round ${roundCounter}`;
    scoreDisplay.textContent = `${playerScore} : ${computerScore}`;
    showDivs();
    if (playerScore == 5 || computerScore == 5){
        gameEnd();
    }
}

function gameEnd() {
    if (playerScore == 5){
        gameResultDisplay.textContent = 'You win!';
    } else {
        gameResultDisplay.textContent = 'You lost...';
    }
    roundResult.style = 'visibility: hidden';
    gameResultDisplay.style = 'visibility: visible';
    figures.forEach((figure) => {
        figure.style = 'visibility: hidden';
    });
}

function reset () {
    playerScore = 0;
    computerScore = 0;
    roundCounter = 1;
    roundCount.textContent = `Round ${roundCounter}`;
    gameResultDisplay.textContent = ''
    gameResultDisplay.style = 'visibility: hidden';
    figures.forEach((figure) => {
        figure.style = 'visibility: visible';
    });
    hideDivs();
}