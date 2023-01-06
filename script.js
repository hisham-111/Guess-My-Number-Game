'use strict';

let ranSecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let MessageType = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number :( ';
  } else if (guess === ranSecretNumber) {
    document.querySelector('.number').textContent = ranSecretNumber;

    // document.querySelector('.message').textContent =
    //   ' 🎉 Your number is correct ';
    MessageType(' 🎉 Your number is correct ');
    document.querySelector('.number').style.width = '30rem';

    document.querySelector('body').style.backgroundColor = '#60b347';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== ranSecretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > ranSecretNumber ? '🚀 Your number hight' :
      // '📉 Your number low';

      MessageType(
        guess > ranSecretNumber ? '🚀 Your number hight' : '📉 Your number low'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💢 You lose !';
      MessageType('💢 You lose !');
      document.querySelector('.score').textContent = 0;
      const element = document.querySelector('body');
      element.style.backgroundColor = 'blue';
    }
  }

  //   else if (guess > ranSecretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '🚀 Your number hight';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '💢 You lose !';
  //       document.querySelector('.score').textContent = 0;
  //       const element = document.querySelector('body');
  //       element.style.backgroundColor = 'blue';
  //     }
  //   } else if (guess < ranSecretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📉 Your number low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '💢 You lose !';
  //       document.querySelector('.score').textContent = 0;
  //       const element = document.querySelector('body');
  //       element.style.backgroundColor = 'green';
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  ranSecretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;

  // document.querySelector('.message').textContent = 'Start guessing...';

  MessageType('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
