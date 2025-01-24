'use strict';

const reset = function(){
    score = 20
    number = Math.trunc(Math.random() * 20) + 1;
    console.log(number);
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'; 
}

const highOrLower = function(guess, number){
    if (guess < number ){
        document.querySelector('.message').textContent = 'To Low'; 
    } else {
        document.querySelector('.message').textContent = 'To High'; 
    }
}

const highScoreCal = function (score, highscore){
    if (score > highscore) {
        console.log("true")
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    return highscore
}

let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function() {
   const guess = document.querySelector('.guess').value
 
   if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
   } else if (guess > 20 || guess < 1) {
    document.querySelector('.message').textContent = 'Guess between 1-20';
   } else if (score <= 0){
    document.querySelector('.message').textContent = 'You Lose!';
   } else if (parseInt(guess) == parseInt(number)) {
    document.querySelector('.message').textContent = 'You win!';
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b437';
    document.querySelector('.number').style.width = '30rem';
    console.log(`${score} ${highscore}`)
    highscore = highScoreCal(score, highscore)
    console.log(`${score} ${highscore}`)
   } else {
    highOrLower(guess, number);
    score--;
    document.querySelector('.score').textContent = score;
   }
});

document.querySelector('.again').addEventListener('click', reset);
