// Variable for body
var bodyEl = document.body;


// Variables to locate id's and class on HTML
var startPage = document.querySelector(".instruction-page");

var timeEl = document.querySelector("#time");

var startBtn = document.querySelector("#start-button");

// Variable for score
var counter = 0;

// Variable for start of count down
var countDown = 50;

var userScore = ""

// Questions and answers
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

// Locating, creating, setting attributes and appending questions and answers
var question1 = questions[0].question
var question2 = questions[1].question
var question3 = questions[2].question
var question4 = questions[3].question

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
divEl.setAttribute("style", "margin-left: 500px;")
bodyEl.appendChild(divEl)

divEl.appendChild(answerBtns1aEl);
divEl.appendChild(answerBtns1bEl);
divEl.appendChild(answerBtns1cEl);
divEl.appendChild(answerBtns1dEl);


divEl.appendChild(answerBtns2aEl);
divEl.appendChild(answerBtns2bEl);
divEl.appendChild(answerBtns2cEl);
divEl.appendChild(answerBtns2dEl);

divEl.appendChild(answerBtns3aEl);
divEl.appendChild(answerBtns3bEl);
divEl.appendChild(answerBtns3cEl);
divEl.appendChild(answerBtns3dEl);

divEl.appendChild(answerBtns4aEl);
divEl.appendChild(answerBtns4bEl);
divEl.appendChild(answerBtns4cEl);
divEl.appendChild(answerBtns4dEl);

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


// <h2> that says out of time
var theEndEl = document.createElement("h2")
theEndEl.textContent = `Out of time! You scored: ${userScore}`
theEndEl.setAttribute("style", "text-align: center; margin: 50px;")
bodyEl.appendChild(theEndEl)
theEndEl.style.display = "none";

// <h2> that says what you scored
var youScoredPage = document.createElement("h2")
youScoredPage.textContent = `Congrats! You scored: ${userScore}`
youScoredPage.setAttribute("style", "text-align: center; margin: 50px;")
bodyEl.appendChild(youScoredPage)
youScoredPage.style.display = "none"

// <p> stating whether the answer was correct
var correct = document.createElement("p")
correct.textContent = "Correct!"
correct.setAttribute("style", "font-size: 16px; text-align: center;")
correct.style.display = "none"

// <p> stating whether the answer was incorrect
var incorrect = document.createElement("p")
incorrect.textContent = "Incorrect"
incorrect.setAttribute("style", "font-size: 16px; text-align: center;")
incorrect.style.display = "none"


// locating start button on HTML
var startBtn = document.querySelector("#start-button");


// Creating a timer that counts down from 50 seconds
startBtn.addEventListener("click", setTime);

// Starts timer, hides start page and shows next page
function setTime(){
    quizStart()
    startPage.style.display ="none"
    var timer = setInterval(function () {
        countDown--;
        timeEl.textContent = "Time remaing: " + countDown;
// Hiding all elements on page
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

        return;
    }
}, 1000);
};

// Showing first set of question and answers
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
            
    if (answerBtns1cEl){
        correct.style.display = "block"
    } else {
        incorrect.style.display = "block"
    }
    }
}

// Showing second set of qustion and answers, hides previous
function page2(){
    if (answerBtns1aEl || answerBtns1bEl || answerBtns1cEl || answerBtns1dEl){
        question1El.style.display = "none";
        answerBtns1aEl.style.display = "none"
        answerBtns1bEl.style.display = "none"
        answerBtns1cEl.style.display = "none"
        answerBtns1dEl.style.display = "none"
        correct.style.display = "none"
        incorrect.style.display = "none"
    
        question2El.style.display = "block";
        answerBtns2aEl.style.display = "block"
        answerBtns2aEl.addEventListener("click", page3);
        answerBtns2bEl.style.display = "block"
        answerBtns2bEl.addEventListener("click", page3);
        answerBtns2cEl.style.display = "block"
        answerBtns2cEl.addEventListener("click", page3);
        answerBtns2dEl.style.display = "block"
        answerBtns2dEl.addEventListener("click", page3);
    
    if (answerBtns2bEl){
        correct.style.isplay = "block"
    } else {
        incorrect.style.display = "block"
    }
}
}

// Showing third set of question and answers, hides previous
function page3(){
    if (answerBtns2aEl || answerBtns2bEl || answerBtns2cEl || answerBtns2dEl){
        question2El.style.display = "none"
        answerBtns2aEl.style.display = "none"
        answerBtns2bEl.style.display = "none"
        answerBtns2cEl.style.display = "none"
        answerBtns2dEl.style.display = "none"
        correct.style.display = "none"
        incorrect.style.display = "none"

        question3El.style.display = "block";
        answerBtns3aEl.style.display = "block"
        answerBtns3aEl.addEventListener("click", page4)
        answerBtns3bEl.style.display = "block"
        answerBtns3bEl.addEventListener("click", page4)
        answerBtns3cEl.style.display = "block"
        answerBtns3cEl.addEventListener("click", page4)
        answerBtns3dEl.style.display = "block"
        answerBtns3dEl.addEventListener("click", page4)

    if (answerBtns3aEl){
        correct.style.display = "block"
    } else {
        incorrect.style.display = "block"
    }
}
}

// Showing fourth set of question and answers, hides previous
function page4(){
    if (answerBtns3aEl || answerBtns3bEl || answerBtns3cEl || answerBtns3dEl){
        question3El.style.display = "none"
        answerBtns3aEl.style.display = "none"
        answerBtns3bEl.style.display = "none"
        answerBtns3cEl.style.display = "none"
        answerBtns3dEl.style.display = "none"
        correct.style.display = "none"
        incorrect.style.display = "none"

        question4El.style.display = "block";
        answerBtns4aEl.style.display = "block"
        answerBtns4aEl.addEventListener("click", page5)
        answerBtns4bEl.style.display = "block"
        answerBtns4bEl.addEventListener("click", page5)
        answerBtns4cEl.style.display = "block"
        answerBtns4cEl.addEventListener("click", page5)
        answerBtns4dEl.style.display = "block"
        answerBtns4dEl.addEventListener("click", page5)

    if (answerBtns4dEl){
        correct.style.display = "block"
    } else {
        incorrect.style.display = "block"
    }   
}
}

// Hides previous
function page5(){
    if (answerBtns4aEl || answerBtns4bEl || answerBtns4cEl || answerBtns4dEl){
        question4El.style.display = "none"
        answerBtns4aEl.style.display = "none"
        answerBtns4bEl.style.display = "none"
        answerBtns4cEl.style.display = "none"
        answerBtns4dEl.style.display = "none"
        correct.style.display = "none"
        incorrect.style.display = "none"

        theEndEl.style.display = "none"
        youScoredPage.style.display = "block"

}
}
