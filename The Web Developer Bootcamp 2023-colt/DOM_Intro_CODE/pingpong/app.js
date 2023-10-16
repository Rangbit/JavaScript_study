const p1Button = document.querySelector(".p1Button");
const p2Button = document.querySelector(".p2Button");
const resetButton = document.querySelector(".resetButton");
const p1Score = document.querySelector('.p1Score');
const p2Score = document.querySelector('.p2Score');

let score1 = 0;
let score2 = 0;
let winningScore = 5;
let gameOver = false;

p1Button.addEventListener('click', ()=>{
    if(!gameOver){
        score1 += 1;
        if(score1 === winningScore){
            gameOver = true;
        }
        p1Score.textContent = score1;
    }
})

p2Button.addEventListener('click', ()=>{
    if(!gameOver){
        score2 += 1;
        if(score2 === winningScore){
            gameOver = true;
        }
        p2Score.textContent = score2;
    }
})

resetButton.addEventListener('click', ()=>{
    score1 = 0;
    score2 = 0;
    gameOver = false;
    p1Score.textContent = score1;
    p2Score.textContent = score2;
})