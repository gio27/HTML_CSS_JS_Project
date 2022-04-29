'use strict';

let num;

let result = '';

function guessing() {
  let num = Math.trunc(Math.random() * 3);
  console.log(num);
  if (num === 0) result = 'R';
  else if (num === 1) result = 'P';
  else if (num === 2) result = 'S';
}

guessing(); // call the function guessing can get the result

console.log('result: ' + result);

// const guess2 = document.querySelector('.guess').value.toUpperCase();

// console.log(guess2 === result);

document.querySelector('.play').addEventListener('click', function () {
  console.log(result);
  // convert all input to Uppercase
  const guess = document.querySelector('.guess').value.toUpperCase();
  console.log(guess);

  if (!guess) {
    //document.querySelector('.game').textContent = result;

    document.querySelector('.message').style.color = '#FF0000';
    document.querySelector('.message').textContent = 'No Input!!!';
  } else if (guess !== 'R' && guess !== 'P' && guess !== 'S') {
    //document.querySelector('.game').textContent = result;

    document.querySelector('.message').style.color = '#ff0000';
    document.querySelector('.message').textContent = 'Please type R / P / S';
  } else if (guess === result) {
    document.querySelector('.game').textContent = result;

    document.querySelector('.message').style.color = '#7FFF00';
    document.querySelector('.message').textContent = 'Same Choices!!!';
    document.querySelector('.printResult').textContent = 'Please click Again!';
  } else if (guess === 'R' && result === 'P') lost();
  else if (guess === 'R' && result === 'S') win();
  else if (guess === 'S' && result === 'R') lost();
  else if (guess === 'S' && result === 'P') win();
  else if (guess === 'P' && result === 'S') lost();
  else if (guess === 'P' && result === 'R') win();
});

const win = function () {
  document.querySelector('.game').textContent = result;
  document.querySelector('.message').style.color = '#eee';
  document.querySelector('.printResult').textContent = 'Please click Again!';

  document.querySelector('.message').textContent = 'You Win ~';
  document.querySelector('body').style.backgroundColor = '#60b347';
};

const lost = function () {
  document.querySelector('.game').textContent = result;
  document.querySelector('.message').style.color = '#eee';
  document.querySelector('.printResult').textContent = 'Please click Again!';

  document.querySelector('.message').textContent = 'You Lost ~';
  document.querySelector('body').style.backgroundColor = '#ff0000';
};

// Again Button

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').style.color = '#eee';

  // make the input empty
  document.querySelector('.guess').value = '';

  guessing();
  //document.querySelector('.game').textContent = result;
  document.querySelector('.game').textContent = '?';
  document.querySelector('.message').textContent = 'Start gaming...';
  document.querySelector('.printResult').textContent = 'See Who Gonna Win!';
});

/*

//////////// This version sometimes does not work


// Compare Function
let answerOutput = '';

const compare = function (guess, result) {
  console.log('ppppp: ' + guess, result);
  if (guess === 'R' && result === 'P') answerOutput = 'You Lost ~';
  else if (guess === 'R' && result === 'S') answerOutput = 'You Win ~';
  else if (guess === 'S' && result === 'R') answerOutput = 'You Lost ~';
  else if (guess === 'S' && result === 'P') answerOutput = 'You Win ~';
  else if (guess === 'P' && result === 'S') answerOutput = 'You Lost ~';
  else if (guess === 'P' && result === 'R') answerOutput = 'You Win ~';

  return answerOutput;
};

// When click Play!

document.querySelector('.play').addEventListener('click', function () {
  console.log(result);
  // convert all input to Uppercase
  const guess = document.querySelector('.guess').value.toUpperCase();
  console.log(guess);

  if (!guess) {
    //document.querySelector('.game').textContent = result;

    document.querySelector('.message').style.color = '#FF0000';
    document.querySelector('.message').textContent = 'No Input!!!';
  } else if (guess !== 'R' && guess !== 'P' && guess !== 'S') {
    //document.querySelector('.game').textContent = result;

    document.querySelector('.message').style.color = '#ff0000';
    document.querySelector('.message').textContent = 'Please type R / P / S';
  } else if (guess === result) {
    document.querySelector('.game').textContent = result;

    document.querySelector('.message').style.color = '#7FFF00';
    document.querySelector('.message').textContent = 'Same Choices!!!';
  } else if (guess === 'R' || result === 'P' || result === 'S') {
    // set deault message
    document.querySelector('.message').style.color = '#eee';
    document.querySelector('.printResult').textContent = 'Please click Again!';

    // SHOW ANSWER
    document.querySelector('.game').textContent = result;

    document.querySelector('.message').textContent = compare(guess, result);

    //console.log('aaa: ' + answerOutput);

    // change background color
    if (answerOutput === 'You Win ~') {
      win();
    } else if (answerOutput === 'You Lost ~') {
      lost();
    }
  }
});


const win = function () {
  document.querySelector('body').style.backgroundColor = '#60b347';
};

const lost = function () {
  document.querySelector('body').style.backgroundColor = '#ff0000';
};



*/
