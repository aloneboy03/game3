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
const selectUser = document.querySelector('.user--selected');
const selectComp = document.querySelector('.comp--selected');
const restNum = 0;
const UserResNum = 0;
const CompResNum = 0;


restartGame.addEventListener('click', function(e){
    resultUser.textContent = restNum;
    resultComp.textContent = restNum;
    wonText.textContent = 'You can start the game';
});

firstHand.addEventListener('click', function(a){
    // let html = `<i class="fa-solid fa-hand-back-fist"></i>`;
    // selectUser.insertAdjacentHTML('afterbegin', html);
});

secondHand.addEventListener('click', function(b){
    // let html = `<i class="fa-solid fa-hand"></i>`;
    // selectUser.insertAdjacentHTML('afterbegin', html);
});

thirdHand.addEventListener('click', function(c){
    // let html = `<i class="fa-solid fa-hand-scissors"></i>`;
    // selectUser.insertAdjacentHTML('afterbegin', html);
});