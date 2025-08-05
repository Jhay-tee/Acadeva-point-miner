let points = 0;
let errorMessage = 'Please enter a number between 1 and 3'
let numberToGuess = Math.floor(Math.random() * 10) + 1;
const guessInput = document.getElementById('guess-input');
const guessBtn = document.getElementById('guess-btn');
const resultMessage = document.getElementById('result-message');
const pointsBox = document.getElementById('points');
const popup = document.getElementById('popup');
const popupMessage = document.getElementById('popup-message');
const popupClose = document.getElementById('popup-close');
const welcome = document.getElementById("welcome");
const welcomeMessage = document.getElementById("welcomeMessage");
const ok = document.getElementById("ok")

welcomeMessage.textContent = "Welcome to Acadeva Guess game get 50 points for any Correct guess enjoy!!";
        welcome.style.display = 'block';
ok.addEventListener('click', close);

function close() {
    welcome.style.display = 'none';
}
guessBtn.addEventListener('click', checkGuess);

function checkGuess() {
    const guess = parseInt(guessInput.value);
    if (isNaN(guess) || guess < 1 || guess > 10) {
        resultMessage.textContent = 'Please enter a number between 1 and 10';
        resultMessage.style.color = "red";
        //guessInput.value = " ";
        setTimeout(() => {
            resultMessage.textContent = '';
            guessInput.value = " ";
        }, 2000);
        return;
    }

    if (guess === numberToGuess) {
        points += 50;
        pointsBox.textContent = `${points}`;
        popupMessage.textContent = `Congratulations! You guessed the number correctly and earned 50 points!`;
        popup.style.display = 'block';
        numberToGuess = Math.floor(Math.random() * 10) + 1;
        
    } else {
        resultMessage.textContent = `Incorrect guess the number was ${numberToGuess}`;
        resultMessage.style.color = "white"
        setTimeout(() => {
            resultMessage.textContent = '';
        }, 2000);
        numberToGuess = Math.floor(Math.random() * 10) + 1;

    }
    guessInput.value = '';
    
}

popupClose.addEventListener('click', closePopup);

function closePopup() {
    popup.style.display = 'none';}
