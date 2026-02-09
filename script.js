const quizData = [
  {
    question: "Enaku unna romba pudicha reason eanna?",
    options: {
      A: "Beauty",
      B: "Caring",
      C: "Love",
      D: "All the above"
    },
    correct: "D"
  },
  {
    question: "Enoda fav pet?",
    options: {
      A: "Dog",
      B: "Cat",
      C: "Parrot",
      D: "Fish"
    },
    correct: "A"
  },
  {
    question: "Nama first chat panna start pannuna app?",
    options: {
      A: "Instagram",
      B: "Telegram",
      C: "WhatsApp",
      D: "Snapchat"
    },
    correct: "C"
  },
  {
    question: "Nama first kiss eanga vachi kuduthom?",
    options: {
      A: "College",
      B: "School",
      C: "House",
      D: "Park"
    },
    correct: "B"
  },
  {
    question: "Enaku unna romba pidicha reason enna?",
    options: {
      A: "Beauty",
      B: "Caring",
      C: "Love",
      D: "All of the above"
    },
    correct: "D"
  }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
  document.getElementById("startPage").classList.remove("active");
  document.getElementById("quizPage").classList.add("active");
  loadQuestion();
}

function loadQuestion() {
  const q = quizData[currentQuestion];

  document.getElementById("question").innerText = q.question;

  document.getElementById("btnA").innerText = "A) " + q.options.A;
  document.getElementById("btnB").innerText = "B) " + q.options.B;
  document.getElementById("btnC").innerText = "C) " + q.options.C;
  document.getElementById("btnD").innerText = "D) " + q.options.D;

  document.getElementById("progressText").innerText =
    "Question " + (currentQuestion + 1) + " of " + quizData.length;
}

function checkAnswer(answer) {
  if (answer === quizData[currentQuestion].correct) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quizPage").classList.remove("active");
  document.getElementById("resultPage").classList.add("active");

  document.getElementById("scoreText").innerText =
    "Your Score: " + score + " / " + quizData.length + " 💖";

  let loveMessage = "";

  if (score === 5) {
    loveMessage = "I love you mah😘";
  } 
  else if (score === 4) {
    loveMessage = "I love you ❤️";
  } 
  else if (score === 3) {
    loveMessage = "I love you 😙";
  } 
  else {
    loveMessage = "Try again da 😘💖";
  }

  document.getElementById("finalMsg").innerHTML =
    `Nee en life la romba special da 😘🫂💖 <br><br>
     <b>${loveMessage}</b> <br><br>
     Always my love only for you 🌹❤️`;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;

  document.getElementById("resultPage").classList.remove("active");
  document.getElementById("startPage").classList.add("active");
}
