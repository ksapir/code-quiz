var bodyEl = document.body;

var startPage = document.querySelector(".instruction-page");

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
];

var question1 = questions[0].question
var question2 = questions[1].question
var question3 = questions[2].question
var question4 = questions[03].question


var answerBtns1 = questions[0].answers
var answerBtns2 =questions[1].answers
var answerBtns3 =questions[2].answers
var answerBtns4 =questions[3].answers

var answerBtnsArray = [
    answerBtns1,
    answerBtns2,
    answerBtns3,
    answerBtns4,
]

var question1El = document.createElement("h2");
var question2El = document.createElement("h2");
var question3El = document.createElement("h2");
var question4El = document.createElement("h2");

var answerBtns1El = document.createElement("button");
var answerBtns2El = document.createElement("button");
var answerBtns3El = document.createElement("button");
var answerBtns4El = document.createElement("button");

question1El.textContent = questions[0].question
answerBtns1El.textContent = questions[0].answers.a
answerBtns1El.textContent = questions[0].answers.b

bodyEl.appendChild(question1El);
bodyEl.appendChild(question2El);
bodyEl.appendChild(question3El);
bodyEl.appendChild(question4El);

question1El.appendChild(answerBtns1El);
question2El.appendChild(answerBtns2El);
question3El.appendChild(answerBtns3El);
question4El.appendChild(answerBtns4El);

question1El.style.visibility = "hidden";
question2El.style.visibility = "hidden";
question3El.style.visibility = "hidden";
question4El.style.visibility = "hidden";

answerBtns1El.style.visibility = "hidden"
answerBtns2El.style.visibility = "hidden"
answerBtns3El.style.visibility = "hidden"
answerBtns4El.style.visibility = "hidden"

var userScore = []

var theEndEl = document.createElement("h2")
theEndEl.textContent = `Out of time! You scored: ${userScore}`
theEndEl.setAttribute("style", "text-align: center; margin: 50px;")
bodyEl.appendChild(theEndEl)
theEndEl.style.display = "none";


// Create start button
var startBtn = document.querySelector("#start-button");


// Create a timer that counts down from 60 seconds
startBtn.addEventListener("click", setTime);
function setTime(){
    quizStart()
    startPage.style.display ="none"
    var timer = setInterval(function () {
        countDown--;
        question1El.hidden = false;
        timeEl.textContent = "Time remaing: " + countDown;

        if (countDown ===0){
            clearInterval(timer);
        theEndEl.style.display = "block"
        }

}, 1000);
};


function quizStart(){
    if (startBtn){
            question1El.style.visibility = "visible";
            answerBtns1El.style.visibility = "visible"
        }
    }
    //     answerBtns1.style.visibility = "visibile"
    // } 
    // else {
    //     answerBtns1.style.visibility = "hidden"
    // }

    console.log(quizStart)



// TODO: Create objects containing questions and answers

// TODO: Create a basic html page which has a start page that includes a button to start our quiz, a view highscores button, and a timer.

//TODO: In our JS - create questions and answers that we can iterate through (object) to display the user array.

//TODO:Set up some global variables, counter, timer, score, highscores

//Counter will dictate where we are in our questions array - counter ++
// Timer will use setInterval so that we hae a functioning timer that counts down that we can decrement if ther user gets an incorrect answer
//Score save this because the user and their score should be saved in local storage

// When the start button is clicked, the start screen hides and the timer starts then the questions show up.

//Use javascript to change our CSS to tell the page based on whether we have started what shows on the screen
//set up the timer so that it runs on the start of the game
// click handler on the start button
// start the timer and make sure that the quiz ends at 0 seconds
// Change the CSS on all of the required HTML elements, so that we get what we want on the page
// display the first object in the array on the page
// set up click handlers on the answer buttons so that when a user selects an answer we chan check a few things
// check if the answer is right or wrong, increment to the next question on the page if we are at the end of the our array we want to end the quiz, incorrect answer decrement time, increment counter
// Show the user if they got the question correct or incorrect underneath the answers
    // use set timeout to change classes to show the user right or wrong
//At the end of the quiz, hide the questions and show the user score (created this var earlier), use the score and the user initials to save that info in local storage.
//create an array of objects [user: name, score:] each time we pull the info from local storage, we set our highscores to either info there || []
// Hide the user input screen and show the highscores to the user and ask them if they want to take the quiz again.
