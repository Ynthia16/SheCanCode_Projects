const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let questions = [];
let currentQuestionIndex = 0;
let score = 0;

function loadQuestionsFromFile(filename) {
  try {
    const data = fs.readFileSync(filename);
    questions = JSON.parse(data);
    if (!Array.isArray(questions) || questions.length === 0) {
      throw new Error('Invalid or empty questions array.');
    }
  } catch (err) {
    console.error('Error loading questions:', err.message);
    process.exit(1);
  }
}

function displayQuestion() {
  const question = questions[currentQuestionIndex];
  console.log(question.question);
  question.options.forEach((option, index) => {
    console.log(`${index + 1}. ${option.text}`);
  });
}

function selectOption(answer) {
  const question = questions[currentQuestionIndex];
  const selectedOption = question.options[parseInt(answer) - 1];
  if (!selectedOption) {
    console.error('Invalid option number.');
    rl.prompt();
    return;
  }
  if (selectedOption.correct) {
    console.log('Correct!');
    score++;
  } else {
    console.log('Incorrect!');
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  console.log(`Your Score: ${score}/${questions.length}`);
  rl.close();
}

function startQuiz() {
  loadQuestionsFromFile('questions.json');
  displayQuestion();
  rl.on('line', selectOption);
}

startQuiz();
