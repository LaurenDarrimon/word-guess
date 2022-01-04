//declare universal variables for scores and numbers
let timer = 15;
let winCount = 0;
let lossCount = 0;
let turns = 0;

let currentWord = "";
let lettersGuessed =[]; //for each turn, all the letters pressed will be stored here and checked against the answer array

let startButton = document.querySelector("#start-game-button");
let countdownDisplay = document.querySelector("#countdown-display");
let timeMessage = document.querySelector("#time-message");

//declare array of possible answer word strings
let wordBank = ["javascript", "obie", "bunnies", "turtles", "red", "green"];


//event listener for the start button, when start button is clicked, then 2 differnt code blocks run. 
startButton.addEventListener("click", playGame);


function playGame(){
    startCountdown(); //one block of code will start & display timer
    setAnswerField(); //the other block of code will play the game 
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
    

function setAnswerField (){
    //declare answer variable inside the function
    let answerString = wordBank[turns];

    console.log (answerString);
    //use split method the answer variable into an array of letter strings
    let answerArray = answerString.split("");

    let wordGuessField = document.getElementById("word-guess-field");
    let holdEmptySpaces = []

    //loop through every letter in the answer array. If the key has been pressed, 
    for(i = 0; i < answerArray.length;  i++ ){
        holdEmptySpaces.push("_");
    }
    console.log(holdEmptySpaces);
    //join the array of empty spaces into one string and display it

    wordGuessField.textContent = holdEmptySpaces.join(" ");

    turns++;


//run code to listen for keys and check answer
}

//decalre a function to listen for keys
//function keyInput(){
    //event listeners to check for keyboard events 
    //run consitional loop if key pressed down is a part of the answer array, then change the disply attribute to on 
    //if (){

    //}

//}







