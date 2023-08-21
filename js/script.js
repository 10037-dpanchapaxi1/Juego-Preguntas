//Start Section
let start = document.querySelector("#start");

//guide Section
let guide = document.querySelector("#guide");
let exit = document.querySelector("#exit");
let continueBtn = document.querySelector("#continue");

//Quiz Section
let quiz = document.querySelector("#quiz");
let time = document.querySelector("#time");

//question Section
let questionNo = document.querySelector("#questionNo");
let questionText = document.querySelector("#questionText");

//Multiple Choices Of Questions
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");

//correct and next Button
let total_correct = document.querySelector("#total_correct");
let next_question = document.querySelector("#next_question");

//Result Section
let result = document.querySelector("#result");
let points = document.querySelector("#points");
let quit = document.querySelector("#quit");
let startAgain = document.querySelector("#startAgain");

//Get All 'H4' From Quiz Section (MCQS)
let choice_que = document.querySelectorAll(".choice_que");

let index = 0;
let timer = 16; // Initial timer value is 15 seconds
let interval = 0;
let correct = 0;
let UserAns = undefined;
let shuffledMCQS = [];

// Shuffle function para barajar un arreglo
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Countdown Timer Function
let countDown = () => {
    if (timer === 0) {
        clearInterval(interval);
        next_question.click();
    } else {
        timer--;
        time.innerText = timer;
    }
}

// Load Data Function
let loadData = () => {
    if (shuffledMCQS.length === 0) {
        shuffledMCQS = [...MCQS]; // Copia el arreglo original
        shuffleArray(shuffledMCQS); // Baraja las preguntas
    }

    questionNo.innerText = index + 1 + ". ";
    questionText.innerText = shuffledMCQS[index].question;
    option1.innerText = shuffledMCQS[index].choice1;
    option2.innerText = shuffledMCQS[index].choice2;
    option3.innerText = shuffledMCQS[index].choice3;
    option4.innerText = shuffledMCQS[index].choice4;
    timer = 16; // Resetear el temporizador a 15 segundos
}

// Start Section Event Listeners
start.addEventListener("click", () => {
    start.style.display = "none";
    guide.style.display = "block";
});

exit.addEventListener("click", () => {
    start.style.display = "block";
    guide.style.display = "none";
});

// Continue Button Event Listener
continueBtn.addEventListener("click", () => {
    quiz.style.display = "block";
    guide.style.display = "none";

    interval = setInterval(countDown, 1000); // Set interval to 1 second
    loadData();

    choice_que.forEach(removeActive => {
        removeActive.classList.remove("active");
    })

    total_correct.innerHTML = `${correct = 0} Out Of ${shuffledMCQS.length} Questions`;
});

// Event Listeners for Choice Questions
choice_que.forEach((choices, choiceNo) => {
    choices.addEventListener("click", () => {
        choices.classList.add("active");
        if (choiceNo === shuffledMCQS[index].answer) {
            correct++;
        } else {
            correct += 0;
        }
        clearInterval(interval);
        for (i = 0; i <= 3; i++) {
            choice_que[i].classList.add("disabled");
        }
    })
});

// Next Question Event Listener
next_question.addEventListener("click", () => {
    if (index !== shuffledMCQS.length - 1) {
        index++;
        choice_que.forEach(removeActive => {
            removeActive.classList.remove("active");
        })
        loadData();
        total_correct.style.display = "block";
        total_correct.innerHTML = `${correct} Out Of ${shuffledMCQS.length} Questions`;
        clearInterval(interval);
        interval = setInterval(countDown, 1000); // Reset interval to 1 second
    } else {
        index = 0;
        clearInterval(interval);
        quiz.style.display = "none";
        points.innerHTML = `You Got ${correct} Out Of ${shuffledMCQS.length}`;
        result.style.display = "block";
    }
    for (i = 0; i <= 3; i++) {
        choice_que[i].classList.remove("disabled");
    }
});

// Quit Button Event Listener
quit.addEventListener("click", () => {
    start.style.display = "block";
    result.style.display = "none";
});

// Start Again Button Event Listener
startAgain.addEventListener("click", () => {
    guide.style.display = "block";
    result.style.display = "none";
    shuffledMCQS = []; // Reinicializa el arreglo para barajar las preguntas nuevamente
});