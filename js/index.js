num1 = document.getElementById("num1")
num2 = document.getElementById("num2")
var answer = document.getElementById("answer")
var score = 0;


max = 15
min = 1


function start() {

    num1.innerHTML = Math.floor(Math.random() * (max - min)) + min;
    num2.innerHTML = Math.floor(Math.random() * (max - min)) + min;
    document.getElementById("start").classList.add("d-none")
    document.getElementById("true").classList.replace("d-block", "d-none")
    document.getElementById("false").classList.replace("d-block", "d-none")
    document.getElementById("next").classList.replace("d-block", "d-none")
    document.getElementById("go").classList.replace("d-none", "d-block")
    document.getElementById("question").classList.replace("d-none", "d-block")
    document.getElementById("answer").classList.replace("d-none", "d-block")
    document.getElementById("clock").classList.replace("d-none", "d-block")
    document.getElementById("restart").classList.replace("d-none", "d-block")

}

function solution() {
    document.getElementById("go").classList.replace("d-block", "d-none")

    if (num1.innerHTML * num2.innerHTML == answer.value) {
        document.getElementById("true").classList.replace("d-none", "d-block")
        score = score + 1;
        document.getElementById("scoreNumber").innerHTML = score;

        document.getElementById("next").classList.replace("d-none", "d-block")


    } else {
        document.getElementById("next").classList.replace("d-block", "d-none")
        document.getElementById("false").classList.replace("d-none", "d-block")
        document.getElementById("answer").classList.add("d-none")
        document.getElementById("question").classList.add("d-none")




    }
    answer.value = ""
    num1.innerHTML = " "
    num2.innerHTML = " "

}

timeLeft = 65;
setTimeout(countdown, 1000);

function countdown() {
    timeLeft--;
    document.getElementById("seconds").innerHTML = String(timeLeft);
    if (timeLeft > 0) {
        setTimeout(countdown, 1000);
    } else if (timeLeft == 0) {

        document.getElementById("next").classList.replace("d-block", "d-none")
        document.getElementById("false").classList.replace("d-none", "d-block")
        document.getElementById("answer").classList.add("d-none")
        document.getElementById("question").classList.add("d-none")
        document.getElementById("go").classList.add("d-none")
        document.getElementById("true").classList.replace("d-block", "d-none")

    }
};