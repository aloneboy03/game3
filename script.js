'use stict';

const resultUser = document.querySelector('.user--res');
const resultComp = document.querySelector('.comp--res');
const firstHand = document.querySelector('.fa-hand-back-fist');
const secondHand = document.querySelector('.fa-hand');
const thirdHand = document.querySelector('.fa-hand-scissors');
const selectedUserHand = document.querySelector('fa-hand-back-fist');
const selectedCompHand = document.querySelector('fa-hand-back-fist');
const wonText = document.querySelector('.won--text');
const restartGame = document.querySelector('.restart--game');
const restNum = 0;
const UserResNum = 0;
const CompResNum = 0;

restartGame.addEventListener('click', function(e){
    resultUser.textContent = restNum;
    resultComp.textContent = restNum;
    wonText.textContent = 'You can start the game';
});

firstHand.addEventListener('click', function(a){
    
});

secondHand.addEventListener('click', function(a){

});

thirdHand.addEventListener('click', function(a){

});