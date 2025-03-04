/*************  ✨ Codeium Command 🌟  *************/
let randomNumber = Math.floor(1 + Math.random() * 100); // 1 to 100
console.log(randomNumber);

let submit = document.querySelector('#subt');
let userInput = document.querySelector('#guessField');
let guessSlot = document.querySelector('.guesses');
let remaining = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');
let startOver = document.querySelector('.resultParas');

let p = document.createElement('button');

let prevGuess = [];
let numGuess = 10; 

let plaGame = true;

if (plaGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        let guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    }
    else if (guess < 1) {
        alert('Please enter a number greater than 1');
    }
    else if (guess > 100) {
        alert('Please enter a number less than 100');
    }
    else {
        prevGuess.push(guess);
        if (numGuess === 1) {
            displayGuess(guess);
            displayMessage('Game Over......Number was ' + randomNumber);
            endGame();
        }
        else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage('You guessed it right!');
        endGame();
    }
    else if (guess < randomNumber) {
        displayMessage('Your guess was too low!');
    }
    else if (guess > randomNumber) {
        displayMessage('Your guess was too High!');
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}        `;
    numGuess--;
    remaining.innerHTML = `${numGuess}    `;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}
function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.innerHTML = `Start New Game`;
    startOver.appendChild(p);
    plaGame = false;
    newGame();
}

function newGame() {
    let newGameButton = document.getElementById('newGame');
    newGameButton.addEventListener('click', (e) => {
        randomNumber = Math.floor(1 + Math.random() * 100);
        console.log(randomNumber);
        prevGuess = [];
        numGuess = 10;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${numGuess}    `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        lowOrHi.innerHTML = '';
        plaGame = true;
    })
}



