'use strict';

const calcSecretNumber = Math.trunc(Math.random() * 20 + 1);
// const calcSecretNumber = 1;

let secretNumber = calcSecretNumber;
let score = 20;
let highscore = 0;

const displayGuess = document.querySelector('.guess');
const displayWindow = document.querySelector('.window-container');
const displayWindowWin = document.querySelector('.win');
const displayWindowLose = document.querySelector('.lose');
const displayOverlay = document.querySelector('.overlay');
const displayHighscore = document.querySelector('.highscore');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const showWindowWin = function (score, highscore) {
  displayWindow.classList.remove('hidden');
  displayWindowWin.classList.remove('hidden');
  displayOverlay.classList.remove('hidden');
  document.querySelector('.score2').textContent = score;
  document.querySelector('.highscore2').textContent = highscore;
};
const showWindowLose = function (score, highscore) {
  displayWindow.classList.remove('hidden');
  displayWindowLose.classList.remove('hidden');
  displayOverlay.classList.remove('hidden');
  document.querySelector('.score3').textContent = score;
  document.querySelector('.highscore3').textContent = highscore;
};

const closeWindow = function () {
  displayWindow.classList.add('hidden');
  displayWindowWin.classList.add('hidden');
  displayOverlay.classList.add('hidden');
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(displayGuess.value);

  if (!guess) {
    displayMessage('❌ No Number!');
  } else if (guess === secretNumber) {
    if (score > highscore) {
      highscore = score;
      displayHighscore.textContent = highscore;
    }
    showWindowWin(score, highscore);
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? '📈 Number is too High!'
          : '📉 Number is too Low!'
      );
      score--;
      displayScore(score);
    } else {
      showWindowLose(0, highscore);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 15;
  secretNumber = calcSecretNumber;
  displayMessage('Start guessing...');
  displayScore('15');
  displayGuess.value = '';
  closeWindow();
});
