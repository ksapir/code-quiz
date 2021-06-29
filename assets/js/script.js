console.log("java is linked")
var startPage = document.querySelector(".center")

console.log(startPage)

var timeEl = document.querySelector("#time");

var startBtn = document.querySelector("#start-button");

var countDown = 60;

var questions= [
    {
        question: "How many primary data types are there?",
        answers: {
        a: "5",
        b: "8",
        c: "7",
        d: "13"
    },
        correct: "c"
    },    
    {
        question: "In Javascript, how do you print to the console?",
        answers: {
        a: "log()",
        b: "console.log()",
        c: "console.print()",
        d: "print()",
    },
        correct: "b",
    },
    {
        question: "What are the 2 types of functions?",
        answers: {
        a: "declaration and expression",
        b: "yelling and shouting",
        c: "announcements and statements",
        d: "proclamation and articulation"
    },
        correct: "a"
    },
    {
        question: "What does DOM stand for?",
        answers: {
        a: "Disorganized Ordered Methods",
        b: "Digital Objectionable Moves",
        c: "Databased Original Makeup",
        d: "Document Object Model",
    },
        correct: "d",
    },
]



var answerBtns1 = questions[0].answers
var answerBtns2 =questions[1].answers
var answerBtns3 =questions[2].answers
var answerBtns4 =questions[3].answers



// Create start button
var startBtn = document.querySelector("#start-button");


// Create a timer that counts down from 60 seconds
startBtn.addEventListener("click", setTime, quizStart);
function setTime(){
    var timer = setInterval(function () {
        countDown--;
        startPage.style.visibility ="hidden"
        timeEl.textContent = "Time remaing: " + countDown;

        if (countDown ===0){
            clearInterval(timer);
        }
}, 1000);
};

function quizStart(){
    if (startBtn === true){
        answerBtns1.style.visibility = "visibile"
    } else {
        answerBtns1.style.visibility = "hidden"
    }
}


// TODO: Create objects containing questions and answers

// TODO: Create a basic html page which has a start page that includes a button to start our quiz, a view highscores button, and a timer.

//TODO: In our JS - create questions and answers that we can iterate through (object) to display the user array.

//TODO:Set up some global variables, counter, timer, score, highscores

//Counter will dictate where we are in our questions array - counter ++
// Timer will use setInterval so that we hae a functioning timer that counts down that we can decrement if ther user gets an incorrect answer
//Score save this because the user and their score should be saved in loval storage

// When the start button is clicked, the start screen hides and the timer starts then the questionsshow up.

//Use javascript ot change our CSS to tell the page based on whether we have started what shows on the screen
//set up the timer so that it runs on the start of the game
// click handler on the start button
// start the timer and make sure that the quiz ends at 0 seconds
// Change the CSS on all of the required HTML elements, so that we get what we want on the page
// display the first object in the array on the page
// set up click handlers on thh answer buttons so that when a user selects an answer we chan check a few things
// check if the answer is right or wrong, increment to the next question on the page if we are at the end of the our array we want t end the quiz, incorrect answer decrement time, increment counter
// Show the user if they got the question correct or incorrect underneath the answers
    // use set timeout to change classes to show the user right or wrong
//At the end of the quiz, hide the questions and show the user score (created this var earlier), use the score and the user initials to save that info in local storage.
//create an array of objects [user: name, score:] each time we pull the info from local storage, we set our highscores to either info there || []
// Hide the user input screen and show the highscores to the user and ask them if they want to take the quiz again.
