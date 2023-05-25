// OBJECT VARIABLE HOLDING SKATE RECOMENDATION INFORMATION
const skateSuggest = {
  // Narrow Stunt Skate options
  AAA: {name: "narrow-stunt-upto-200", info: "placeholder", image: "placeholder"},
  AAB: {name: "narrow-stunt-upto-350", info: "placeholder", image: "placeholder"},
  AAC: {name: "narrow-stunt-350+", info: "placeholder", image: "placeholder"},
  // Narrow Urban skate options
  ABA: {name: "narrow-urban-upto-250", info: "placeholder", image: "placeholder"},
  ABB: {name: "narrow-urban-upto-350", info: "placeholder", image: "placeholder"},
  ABC: {name: "narrow-urban-350+", info: "placeholder", image: "placeholder"},
  // Narrow fitness skate options
  ACA: {name: "narrow-fitness-upto-200", info: "placeholder", image: "placeholder"},
  ACB: {name: "narrow-fitness-upto-350", info: "placeholder", image: "placeholder"},
  ACC: {name: "narrow-fitness-350+", info: "placeholder",image: "placeholder"},
  // Regular stunt skate options
  BAA: {name: "Regular-stunt-upto-200", info: "placeholder", image: "placeholder"},
  BAB: {name: "Regular-stunt-upto-350", info: "placeholder", image: "placeholder"},
  BAC: {name: "Regular-stunt-350+", info: "placeholder", image: "placeholder"},
  // Regular Urban skate options
  BBA: {name: "Regular-urban-upto-200", info: "placeholder", image: "placeholder"},
  BBB: {name: "Regular-urban-upto-350", info: "placeholder", image: "placeholder"},
  BBC: {name: "Regular-urban-350+", info: "placeholder", image: "placeholder"},
  // Regular fitness skate options
  BCA: {name: "Regular-fitness-upto-200", info: "placeholder", image: "placeholder"},
  BCB: {name: "Regular-fitness-upto-350", info: "placeholder", image: "placeholder"},
  BCC: {name: "Regular-fitness-350+", info: "placeholder", image: "placeholder"},
  // Wide stunt skate options
  CAA: {name: "wide-stunt-upto-200", info: "placeholder", image: "placeholder"},
  CAB: {name: "wide-stunt-upto-350", info: "placeholder", image: "placeholder"},
  CAC: {name: "wide-stunt-350+", info: "placeholder", image: "placeholder"},
  // Wide Urban skate options
  CBA: {name: "wide-urban-upto-200", info: "placeholder", image: "placeholder"},
  CBB: {name: "wide-urban-upto-350", info: "placeholder", image: "placeholder"},
  CBC: {name: "wide-urban-350+", info: "placeholder", image: "placeholder"},
  // Wide fitness skate options
  CCA: {name: "wide-fitness-upto-200", info: "placeholder", image: "placeholder"},
  CCB: {name: "wide-fitness-upto-350", info: "placeholder", image: "placeholder"},
  CCC: {name: "wide-fitness-350+", info: "placeholder", image: "placeholder"},
};


const answerBtnA = document.getElementById('A');
const answerBtnB = document.getElementById('B');
const answerBtnC = document.getElementById('C');
const question = document.getElementById('question');

//Array of Questions with Answer Id's to log
const questions = [
  {
    question: "How would you describe the width of your feet?",
    answers: ["Narrow", "Regular", "Wide"]
  },
  {
    question: "What is your primary focus or preferred style of inline skating?",
    answers: [ "Stunt", "Urban", "Fitness"]
  },
  {
    question: "What price range do you typically prefer or find most suitable for your needs?",
    answers: ["Upto £200", "£200-£350", "Over £350"]
  },
];

// Variable to track current question
let currentQuestion = 0;

// Variable to hold selected answers
let selectedResults = "";

//function to being questionaire
function beginQuiz(){
  loadQuestion(currentQuestion);
};

//Function to load Question
function loadQuestion(questionIndex){
  question.innerHTML = questions[questionIndex].question;
  answerBtnA.innerHTML = questions[questionIndex].answers[0];
  answerBtnB.innerHTML = questions[questionIndex].answers[1];
  answerBtnC.innerHTML = questions[questionIndex].answers[2];
};

//Function for onClick event of buttons to interate through questions on click and log answer button id pressed
if (currentQuestion < questions.length) {
  loadQuestion(currentQuestion + 1);
}
else {

};

//Function to show model with skate recommendation using the logged answers string to correspond to info in skate suggest variable


beginQuiz();