const startBtn = document.querySelector(".start-btn");
const popupInfo = document.querySelector(".popup-info");
const exitBtn = document.querySelector(".exit-btn");
const main = document.querySelector(".main");
const continueBtn = document.querySelector(".continue-btn");
const quizSection = document.querySelector(".quiz-section");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");
const tryAgainBtn = document.querySelector(".tryAgain-btn");
const goHomeBtn = document.querySelector(".goHome-btn");
const timerElement = document.getElementById("timer");

//login

let timer;
let timeLeft = 600; // 10 minutes

startBtn.onclick = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get('username');
  if (!username) {
    alert('You must be logged in to start the test.');
    window.location.href = 'login.html';
  } else {
    popupInfo.classList.add("active"); /* on click on start btn open rule page */
    main.classList.add("active");
  }
};

exitBtn.onclick = () => {
  popupInfo.classList.remove(
    "active"
  ); /*on click on exixt btn it closed rule page */
  main.classList.remove("active");
};
continueBtn.onclick = () => {
  quizSection.classList.add("active");
  popupInfo.classList.remove("active");
  main.classList.remove("active");
  quizBox.classList.add("active");

  startTimer();
  showQuestions(0);
  questionCounter(1);
  headerScore();
};

tryAgainBtn.onclick = () => {
  quizBox.classList.add("active");
  nextBtn.classList.remove("active");
  resultBox.classList.remove("active");

  questionCount = 0;
  questionNumb = 1;
  userScore = 0;
  showQuestions(questionCount);
  questionCounter(questionNumb);

  headerScore();
};

goHomeBtn.onclick = () => {
  quizSection.classList.remove("active");
  nextBtn.classList.remove("active");
  resultBox.classList.remove("active");

  questionCount = 0;
  questionNumb = 1;
  userScore = 0;
  showQuestions(questionCount);
  questionCounter(questionNumb);
};

let questionCount = 0;
let questionNumb = 1;
let userScore = 0;
const nextBtn = document.querySelector(".next-btn");
const skipBtn = document.createElement("button");
skipBtn.classList.add("skip-btn");
skipBtn.textContent = "Skip";
nextBtn.parentNode.insertBefore(skipBtn, nextBtn);

skipBtn.onclick = () => {
  if (questionCount < questions.length - 1) {
    questionCount++;
    showQuestions(questionCount);
    questionNumb++;
    questionCounter(questionNumb);
    nextBtn.classList.remove("active");
  } else {
    showResultBox();
  }
};

nextBtn.onclick = () => {
  if (questionCount < questions.length - 1) {
    questionCount++;
    showQuestions(questionCount);

    questionNumb++;
    questionCounter(questionNumb);

    nextBtn.classList.remove("active");
  } else {
    // console.log("question completed");
    showResultBox();
  }
};
const optionlist = document.querySelector(".option-list");
//getting questions and options from array
function showQuestions(index) {
  const questionText = document.querySelector(".question-text");
  questionText.textContent = `${questions[index].numb}.${questions[index].question}`;

  let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
<div class="option"><span>${questions[index].options[1]}</span></div>
<div class="option"><span>${questions[index].options[2]}</span></div>
<div class="option"><span>${questions[index].options[3]}</span></div>`;

  optionlist.innerHTML = optionTag;

  const option = document.querySelectorAll(".option");
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}
function optionSelected(answer) {
  let userAnswer = answer.textContent;
  let correctAnswer = questions[questionCount].answer;
  let allOptions = optionlist.children.length;

  if (userAnswer === correctAnswer) {
    answer.classList.add("correct");
    // console.log('correct');

    userScore += 1;
    headerScore();
  } else {
    answer.classList.add("incorrect");
    // console.log('wrong');

    for (let i = 0; i < allOptions; i++) {
      if (optionlist.children[i].textContent == correctAnswer) {
        optionlist.children[i].setAttribute("class", "option correct");
      }
    }
  }

  for (let i = 0; i < allOptions; i++) {
    optionlist.children[i].classList.add("disabled");
  }
  nextBtn.classList.add("active");
}

function questionCounter(index) {
  const questionTotal = document.querySelector(".question-total");
  questionTotal.textContent = `${index} of ${questions.length}Questions`;
}
function headerScore() {
  const headerScoreText = document.querySelector(".header-score");
  headerScoreText.textContent = `Score:${userScore}/${questions.length}`;
}
function showResultBox() {
  quizBox.classList.remove("active");
  resultBox.classList.add("active");

  const scoreText = document.querySelector(".score-text");
  scoreText.textContent = `your score ${userScore} out of ${questions.length}`;

  const circularProgress = document.querySelector(".circular-progress");
  const progressValue = document.querySelector(".progress-value");
  let progressStartValue = -1;
  let progressEndValue = (userScore / questions.length) * 100;
  let speed = 20;

  let progress = setInterval(() => {
    progressStartValue++;
    progressValue.textContent = `${progressStartValue}%`;

    circularProgress.style.background = `conic-gradient(#075C9D ${
      progressStartValue * 3.6
    }deg, rgba(255,255,255,.1)0deg)`;
    if (progressStartValue == progressEndValue) {
      clearInterval(progress);
    }
  }, speed);

  // Save score to database
  saveScore(userScore);
}

function saveScore(score) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "api/save_score.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log("Score saved successfully");
    }
  };
  xhr.send(`score=${score}`);
}

function startTimer() {
  timer = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timer);
      showResultBox();
    } else {
      let minutes = Math.floor(timeLeft / 60);
      let seconds = timeLeft % 60;

      timerElement.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${
        seconds < 10 ? "0" : ""
      }${seconds}`;

      timeLeft--;
    }
  }, 1000);
}

//login
