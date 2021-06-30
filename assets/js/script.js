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
var question4 = questions[3].question


// var answerBtns1 = questions[0].answers
// var answerBtns2 =questions[1].answers
// var answerBtns3 =questions[2].answers
// var answerBtns4 =questions[3].answers

// var answerBtnsArray = [
//     answerBtns1,
//     answerBtns2,
//     answerBtns3,
//     answerBtns4,
// ]

var question1El = document.createElement("h2");
var question2El = document.createElement("h2");
var question3El = document.createElement("h2");
var question4El = document.createElement("h2");

var answerBtns1aEl = document.createElement("button");
var answerBtns1bEl = document.createElement("button");
var answerBtns1cEl = document.createElement("button");
var answerBtns1dEl = document.createElement("button");

var answerBtns2aEl = document.createElement("button");
var answerBtns2bEl = document.createElement("button");
var answerBtns2cEl = document.createElement("button");
var answerBtns2dEl = document.createElement("button");

var answerBtns3aEl = document.createElement("button");
var answerBtns3bEl = document.createElement("button");
var answerBtns3cEl = document.createElement("button");
var answerBtns3dEl = document.createElement("button");

var answerBtns4aEl = document.createElement("button");
var answerBtns4bEl = document.createElement("button");
var answerBtns4cEl = document.createElement("button");
var answerBtns4dEl = document.createElement("button");

question1El.textContent = questions[0].question;
question2El.textContent = questions[1].question;
question3El.textContent = questions[2].question;
question4El.textContent = questions[3].question;

answerBtns1aEl.textContent = questions[0].answers.a;
answerBtns1bEl.textContent = questions[0].answers.b;
answerBtns1cEl.textContent = questions[0].answers.c;
answerBtns1dEl.textContent = questions[0].answers.d;

answerBtns2aEl.textContent = questions[1].answers.a;
answerBtns2bEl.textContent = questions[1].answers.b;
answerBtns2cEl.textContent = questions[1].answers.c;
answerBtns2dEl.textContent = questions[1].answers.d;

answerBtns3aEl.textContent = questions[2].answers.a;
answerBtns3bEl.textContent = questions[2].answers.b;
answerBtns3cEl.textContent = questions[2].answers.c;
answerBtns3dEl.textContent = questions[2].answers.d;

answerBtns4aEl.textContent = questions[3].answers.a;
answerBtns4bEl.textContent = questions[3].answers.b;
answerBtns4cEl.textContent = questions[3].answers.c;
answerBtns4dEl.textContent = questions[3].answers.d;

bodyEl.appendChild(question1El);
bodyEl.appendChild(question2El);
bodyEl.appendChild(question3El);
bodyEl.appendChild(question4El);

var divEl = document.createElement("div")
divEl.setAttribute("style", "display:flex; flex-direction: center; justify-content:center;")
bodyEl.appendChild(divEl)

divEl.appendChild(answerBtns1aEl);
divEl.appendChild(answerBtns1bEl);
divEl.appendChild(answerBtns1cEl);
divEl.appendChild(answerBtns1dEl);


question2El.appendChild(answerBtns2aEl);
question2El.appendChild(answerBtns2bEl);
question2El.appendChild(answerBtns2cEl);
question2El.appendChild(answerBtns2dEl);

question3El.appendChild(answerBtns3aEl);
question3El.appendChild(answerBtns3bEl);
question3El.appendChild(answerBtns3cEl);
question3El.appendChild(answerBtns3dEl);

question4El.appendChild(answerBtns4aEl);
question4El.appendChild(answerBtns4bEl);
question4El.appendChild(answerBtns4cEl);
question4El.appendChild(answerBtns4dEl);

question1El.setAttribute("style", "font-family: arial; text-align: center");
question2El.setAttribute("style", "font-family: arial; text-align: center");
question3El.setAttribute("style", "font-family: arial; text-align: center");
question4El.setAttribute("style", "font-family: arial; text-align: center");


question1El.style.display= "none";
question2El.style.display= "none";
question3El.style.display= "none";
question4El.style.display= "none";

answerBtns1aEl.style.display = "none";
answerBtns1bEl.style.display = "none";
answerBtns1cEl.style.display = "none";
answerBtns1dEl.style.display = "none";

answerBtns2aEl.style.display = "none";
answerBtns2bEl.style.display = "none";
answerBtns2cEl.style.display = "none";
answerBtns2dEl.style.display = "none";

answerBtns3aEl.style.display = "none";
answerBtns3bEl.style.display = "none";
answerBtns3cEl.style.display = "none";
answerBtns3dEl.style.display = "none";

answerBtns4aEl.style.display = "none";
answerBtns4bEl.style.display = "none";
answerBtns4cEl.style.display = "none";
answerBtns4dEl.style.display = "none";

var userScore = []

var theEndEl = document.createElement("h2")
theEndEl.textContent = `Out of time! You scored: ${userScore}`
theEndEl.setAttribute("style", "text-align: center; margin: 50px;")
bodyEl.appendChild(theEndEl)
theEndEl.style.display = "none";

var youScoredPage = document.createElement("h2")
youScoredPage.textContent = `Congrats! You scored: ${userScore}`
youScoredPage.setAttribute("style", "text-align: center; margin: 50px;")
bodyEl.appendChild(youScoredPage)
youScoredPage.style.display = "none"

// Create start button
var startBtn = document.querySelector("#start-button");


// Create a timer that counts down from 60 seconds
startBtn.addEventListener("click", setTime);
function setTime(){
    quizStart()
    startPage.style.display ="none"
    var timer = setInterval(function () {
        countDown--;
        timeEl.textContent = "Time remaing: " + countDown;

        if (countDown ===0){
            clearInterval(timer);
            question1El.style.display = "none";
            answerBtns1aEl.style.display = "none"
            answerBtns1bEl.style.display = "none"
            answerBtns1cEl.style.display = "none"
            answerBtns1dEl.style.display = "none"

            question2El.style.display = "none"
            answerBtns2aEl.style.display = "none"
            answerBtns2bEl.style.display = "none"
            answerBtns2cEl.style.display = "none"
            answerBtns2dEl.style.display = "none"

            question3El.style.display = "none"
            answerBtns3aEl.style.display = "none"
            answerBtns3bEl.style.display = "none"
            answerBtns3cEl.style.display = "none"
            answerBtns3dEl.style.display = "none"

            question4El.style.display = "none"
            answerBtns4aEl.style.display = "none"
            answerBtns4bEl.style.display = "none"
            answerBtns4cEl.style.display = "none"
            answerBtns4dEl.style.display = "none"

        theEndEl.style.display = "block"

        }

}, 1000);
};


function quizStart(){
    if (startBtn){
            question1El.style.display = "block";
            answerBtns1aEl.style.display = "block"
            answerBtns1aEl.addEventListener("click", page2)
            answerBtns1bEl.style.display = "block"
            answerBtns1bEl.addEventListener("click", page2)
            answerBtns1cEl.style.display = "block"
            answerBtns1cEl.addEventListener("click", page2)
            answerBtns1dEl.style.display = "block"
            answerBtns1dEl.addEventListener("click", page2)
        }
    
    }

function page2(){
    if (answerBtns1aEl || answerBtns1bEl || answerBtns1cEl || answerBtns1dEl){
        question1El.style.display = "none";
        answerBtns1aEl.style.display = "none"
        answerBtns1bEl.style.display = "none"
        answerBtns1cEl.style.display = "none"
        answerBtns1dEl.style.display = "none"
    
        question2El.style.display = "block";
        answerBtns2aEl.style.display = "block"
        answerBtns2aEl.addEventListener("click", page3);
        answerBtns2bEl.style.display = "block"
        answerBtns2bEl.addEventListener("click", page3);
        answerBtns2cEl.style.display = "block"
        answerBtns2cEl.addEventListener("click", page3);
        answerBtns2dEl.style.display = "block"
        answerBtns2dEl.addEventListener("click", page3);
    }
}

function page3(){
    if (answerBtns2aEl || answerBtns2bEl || answerBtns2cEl || answerBtns2dEl){
        question2El.style.display = "none"
        answerBtns2aEl.style.display = "none"
        answerBtns2bEl.style.display = "none"
        answerBtns2cEl.style.display = "none"
        answerBtns2dEl.style.display = "none"

        question3El.style.display = "block";
        answerBtns3aEl.style.display = "block"
        answerBtns3aEl.addEventListener("click", page4)
        answerBtns3bEl.style.display = "block"
        answerBtns3bEl.addEventListener("click", page4)
        answerBtns3cEl.style.display = "block"
        answerBtns3cEl.addEventListener("click", page4)
        answerBtns3dEl.style.display = "block"
        answerBtns3dEl.addEventListener("click", page4)
}
}

function page4(){
    if (answerBtns3aEl || answerBtns3bEl || answerBtns3cEl || answerBtns3dEl){
        question3El.style.display = "none"
        answerBtns3aEl.style.display = "none"
        answerBtns3bEl.style.display = "none"
        answerBtns3cEl.style.display = "none"
        answerBtns3dEl.style.display = "none"

        question4El.style.display = "block";
        answerBtns4aEl.style.display = "block"
        answerBtns4aEl.addEventListener("click", page5)
        answerBtns4bEl.style.display = "block"
        answerBtns4bEl.addEventListener("click", page5)
        answerBtns4cEl.style.display = "block"
        answerBtns4cEl.addEventListener("click", page5)
        answerBtns4dEl.style.display = "block"
        answerBtns4dEl.addEventListener("click", page5)
}
}
function page5(){
    if (answerBtns4aEl || answerBtns4bEl || answerBtns4cEl || answerBtns4dEl){
        question4El.style.display = "none"
        answerBtns4aEl.style.display = "none"
        answerBtns4bEl.style.display = "none"
        answerBtns4cEl.style.display = "none"
        answerBtns4dEl.style.display = "none"

        youScoredPage.style.display = "block"
        theEndEl.style.display = "none";
}
}

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
