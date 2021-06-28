console.log("java is linked")
var timeEl = document.querySelector("#time");

var startBtn = document.querySelector("#start-button");

var countDown = 60;

var questions= {
    q1 = {
        question: "How many primary data types are there?";
        answer1: "5",
        answer2: "8",
        answer3: "7",
        answer4: "13"
    },
    q2 = {
        question: "In Javascript, how do you print to the console?",
        answer1: "log()",
        answer2: "console.log()",
        answer3: "console.print()",
        answer4: "print()"
    },
    q3 ={
        question: "What are the 2 types of functions?",
        answer1: "declaration and expression",
        answer2: "yelling and shouting",
        answer3: "announcements and statements",
        answer4: "proclamation and articulation"
    },
    q4= {
        question: "What does DOM stand for?",
        answer1: "Disorganized Ordered Methods",
        answer2: "Digital Objectionable Moves",
        answer3: "Databased Original Makeup",
        answer4: "Document Object Model",
    }
}

// Create start button
var startButton = document.querySelector("#start-button");


// Create a timer that counts down from 60 seconds
startBtn.addEventListener("click", setTime);
function setTime(){
    var timer = setInterval(function () {
        countDown--;
        timeEl.textContent = "Time remaing: " + countDown;

        if (countDown ===0){
            clearInterval(timer);
        }
}, 1000);
}

function quizStart () {
    var questionStart = 
}
// Create objects containing questions and answers

// 