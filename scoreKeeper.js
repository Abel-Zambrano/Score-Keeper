var p1Button = document.getElementById('p1');
var p2Button = document.getElementById('p2');
var resetButton = document.getElementById('reset');
var roundInput = document.querySelector('input');
var p1Display = document.getElementById('p1Score');
var p2Display = document.getElementById('p2Score');
var playTo = document.querySelector('p span');
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener('click', function() {
    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore){
            gameOver = true;
            p1Display.classList.add('winner');            
        }
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener('click', function() {
    if(!gameOver){
        p2Score++;
        if(p2Score === winningScore){
            gameOver = true;
            p2Display.classList.add('winner'); 
        }
    }    
    p2Display.textContent = p2Score;
});

resetButton.addEventListener('click', function(){
    reset();
});

roundInput.addEventListener('change', function(){
    playTo.textContent = roundInput.value;
    winningScore = Number(roundInput.value);
    reset();
});

function reset (){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('winner');
    p2Display.classList.remove('winner')
    gameOver = false;
}