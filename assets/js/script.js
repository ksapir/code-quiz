console.log("java is linked")
var timeEl = document.querySelector("#time");

var startBtn = document.querySelector("#start-button");

var countDown = 60;

// Pseudo code

// Create start button
var startButton = document.querySelector("#start-button");

startBtn.addEventListener("click", setTime);
// Create a timer that counts down from 60 seconds
function setTime(){
    var timer = setInterval(function () {
        countDown--;
        timeEl.textContent = "Time remaing: " + countDown;

        if (countDown ===0){
            clearInterval(timer);
        }
}, 1000);
}



// Create objects containing questions and answers

// 