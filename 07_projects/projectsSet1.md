# Projects related to DOM

## Project link: 
https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html



## project 1
```javascript 
const buttons = document.querySelectorAll(".button");
const body = document.querySelector('body')

buttons.forEach( (button) => {
  // console.log(button);
  button.addEventListener('click', function(e) {
    // console.log(e)
    // console.log(e.target)

    switch(e.target.id) {
      case 'grey': body.style.backgroundColor = e.target.id
      break;
      case 'yellow': body.style.backgroundColor = e.target.id
      break;
      case 'white': body.style.backgroundColor = e.target.id
      break;
      case 'blue': body.style.backgroundColor = e.target.id
      break;
      case 'purple': body.style.backgroundColor = e.target.id
      break;
    }
  })
})

```

## project 2
```javascript 
const form = document.querySelector('form')
// console.log(form)

// const height = parseInt(document.querySelector("#height").value) // Empty value

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const height = parseInt(document.querySelector("#height").value)
  const weight = parseInt(document.querySelector("#weight").value)

  const results = document.querySelector("#results")

  if (height === '' || height <= 0 || isNaN(height)) {
    results.innerHTML = "Enter a valid height!"
  }
  else if (weight === '' || weight <= 0 || isNaN(weight)) {
    results.innerHTML = "Enter a valid weight!"
  }
  else {
    const bmi = (weight / (height * height / 10000)).toFixed(2)

    // show the results 
    let report;

    if (bmi < 18.6) {
      report = "Underweight"
    }
    if (18.6 <= bmi  && bmi <= 24.9) {
      report = "Normal Range"
    }
    if (bmi > 24.9) {
      report = "Overweight"
    }
    results.innerHTML = `<span>Your BMI is ${bmi}, which is ${report}</span>`;
  }
})

```

## project 3
```javascript 
const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString();
}, 1000); // (func, timeInMilliseconds)


```

## project 4
```javascript 
let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');

const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuesses = [];
let numGuesses = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // Validates if 1 <= guess <= 100
  if (isNaN(guess)) {
    alert('Please enter a valid NUMBER');
  } else if (guess < 1) {
    alert('Please enter a number more than 1.');
  } else if (guess > 100) {
    alert('Please enter a number less than 100.');
  } else {
    prevGuesses.push(guess);

    if (numGuesses === 11) {
      displayGuess(guess);
      displayMessage(`Game Over! The random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // Prints message if the guess value is lower/higher than actual num

  if (guess === randomNumber) {
    displayMessage('You guessed it right!!');
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('The number is TOOO low. Guess higher!');
  } else if (guess > randomNumber) {
    displayMessage('The number is TOOO high. Guess lower!');
  }
}

function displayGuess(guess) {
  userInput.value = ''; // Cleanup
  guessSlot.innerHTML += ` ${guess}`;
  numGuesses++;
  remaining.innerHTML = `${11 - numGuesses}`;
}

function displayMessage(message) {
  // interacts w/ dom
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');

  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    numGuesses = 1;
    prevGuesses = [];
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuesses}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

```

## project 5
```javascript 
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class = 'color'>
  <table>
  <tr>
    <th>Key</th>
    <th>Key Code</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>

  </div>
  `;
});

```

## project 6
```javascript 
// generate a random color
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  // 3
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }

  return color;
};

let intervalId;

const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

```