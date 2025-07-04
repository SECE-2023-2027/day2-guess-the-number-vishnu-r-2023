// 1. Get all the nodes from HTML
const againButton = document.querySelector(".again");
const checkButton = document.querySelector(".check");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const number = document.querySelector(".number");
const guess = document.querySelector(".guess");

// 2. Generate a random number and score
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let scoreValue = 20;
let highscoreValue = 0; 
console.log(randomNumber);

// 3. Check Button Functionality
const checkFunction = () => {
    const userGuess = Number(guess.value);
    console.log(userGuess);
    console.log("Random Number: " + randomNumber);
    //3.1 Check user has entered a number or not
    if (!userGuess) {
        message.textContent = "User has not entered anything";
    }
    //3.2 Check the value is equal to the random number or not
    else if(userGuess===randomNumber) {
        highscore.textContent=scoreValue;
        document.querySelector("body").style.backgroundColor = "green"; //  "#60b347"
        number.textContent = randomNumber;
    }
    //3.3 Check Value is less than equal to the random number or not
    else if(userGuess > randomNumber) {
        if(scoreValue > 1) {
            message.textContent = "Too High!";
            scoreValue--;
            score.textContent = scoreValue;
        } else {
            message.textContent = "You lost the game!";
            score.textContent = 0;
            // disable the check button
            checkButton.disabled = true;
            // remove the checkButton from UI part
            checkButton.style.display = "none"; 
        }
    } 
    //3.4 Check Value is greater than equal to the random number or not
    else if(userGuess < randomNumber) {
        if(scoreValue > 1) {
            message.textContent = "Too Low!";
            scoreValue--;
            score.textContent = scoreValue;
        } else {
            message.textContent = "You lost the game!";
            score.textContent = 0;
            checkButton.disabled = true;
            checkButton.style.display = "none"; 
        }
    }   

};
checkButton.addEventListener("click", checkFunction);

//4. Again Button Functionality
const againFunction = () => {
    scoreValue = 20;
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(randomNumber);
    score.textContent = scoreValue;
    message.textContent = "Start guessing...";
    number.textContent = "?";
    guess.value = "";
    document.querySelector("body").style.backgroundColor = "black";
};