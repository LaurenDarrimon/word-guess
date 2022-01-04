//declare universal variables for scores and numbers
let timer = 15;
let winCount = 0;
let lossCount = 0;
let turns = 0;

//variables for arrays and words
let currentWord = ""; //answer for current turn
let holdEmptySpaces = [] 
let answerArray = currentWord.split(""); 
let lettersGuessed = holdEmptySpaces; //for each turn, all the letters pressed will be stored here and checked against the answer array
//we're starting this array as equal to to the all blanks array, and will replace values as keys come in

//variables that point to DOM nodes
let startButton = document.querySelector("#start-game-button");
let countdownDisplay = document.querySelector("#countdown-display");
let wordGuessField = document.getElementById("word-guess-field");
let timeMessage = document.querySelector("#time-message");


//declare array of possible answer word strings
let wordBank = ["javascript", "obie", "bunnies", "turtles", "red", "green"];


//event listener for the start button, when start button is clicked, then 2 differnt code blocks run. 
startButton.addEventListener("click", playGame);


function playGame(){
    startCountdown(); //one block of code will start & display timer
    setAnswerField(); //the other block of code will start playing the game 
}

//declare function for the timer counting down and rendering time left to screen
function startCountdown(){
    timer = 15;

    //interval function iterates every 1 second to decrease time remaining to make a countdown clock
    let timeLeft = setInterval(function() {
        timer--; //decrement time by 1 second every time the loop runs
        countdownDisplay.textContent = timer ; 

        //if time is zero, then clear the interval
        if(timer === 0) {  
            clearInterval(timeLeft);
            timeMessage.textContent = "Oops! Time's up!"; //display timeout message
            gameOver(); //call function to end the game. 
        } 
        }, 1000); // function runs once a second (1000 miliseconds)
};
    
//first game function sets the empty answer field display
function setAnswerField (){
    //declare answer variable inside the function
    currentWord = wordBank[turns];

    console.log (currentWord);
    //use split method the answer variable into an array of letter strings
    answerArray = currentWord.split("");


    //loop through every letter in the answer array to display that number of blanks
    for(i = 0; i < answerArray.length;  i++ ){
        holdEmptySpaces.push("_");
    }
    console.log(holdEmptySpaces);
    //join the array of empty spaces into one string and display it

    wordGuessField.textContent = holdEmptySpaces.join(" ");

}


//event listener for keys 
document.addEventListener("keydown", function(keyPressEvent) {
    let keyGuess = keyPressEvent.key.toLowerCase(); 

    console.log("this key was pressed: " + keyGuess)

    //pass the user's guess to the function
    compareKeyGuess(keyGuess);
    }
);

//declare the function to check the user's key guess against the answer array
function compareKeyGuess(userKey){
    if (answerArray.includes(userKey)){
        console.log("answer includes pressed key")
        wordGuessField.textContent = "";//empties out the display area of past displays
        //loop through every letter in the answer array. If the key has been pressed, 
        for(i = 0; i < answerArray.length;  i++ ){  
            if(userKey === answerArray[i]){
                lettersGuessed[i] = userKey; 
                console.log(lettersGuessed);
            }
        }
       console.log(lettersGuessed);
        //join the array of empty spaces and guesses into one string and display it

       wordGuessField.textContent = lettersGuessed.join(" ");
        }
        checkFinalWord();
}

//declare a function to check the guesses against the answer
function checkFinalWord(){
    if(currentWord === lettersGuessed.join("")){
        console.log("yay! you've guessed the word!")
        winning();
        turns++;

    }
}

// declare a function for game over
function gameOver(){
    console.log("Game Over!");
    lossCount++;
    wordGuessField.textContent = "Waa-waah. Sorry, you've lost.";

}

//declare a function for winning
function winning(){
    winCount++;
    wordGuessField.textContent = "Boom shackalacka. You've won.";

}












