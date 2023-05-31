// FUNCTION WITH OBJECT VARIABLE HOLDING SKATE RECOMENDATION INFORMATION FOR REFERENCE (Mentor recommendation)
function logResponse() {
const skateSuggest = [
  // Narrow Stunt Skate options
  {id: "AAA", option: {name: "narrow-stunt-upto-200", info: "placeholder", image: "placeholder"}},
  {id: "AAB", option: {name: "narrow-stunt-upto-350", info: "placeholder", image: "placeholder"}},
  {id: "AAC", option: {name: "narrow-stunt-350+", info: "placeholder", image: "placeholder"}},
  // Narrow Urban skate options
  {id: "ABA", option: {name: "narrow-urban-upto-250", info: "placeholder", image: "placeholder"}},
  {id: "ABB", option: {name: "narrow-urban-upto-350", info: "placeholder", image: "placeholder"}},
  {id: "ABC", option: {name: "narrow-urban-350+", info: "placeholder", image: "placeholder"}},
  // Narrow fitness skate options
  {id: "ACA", option: {name: "narrow-fitness-upto-200", info: "placeholder", image: "placeholder"}},
  {id: "ACB", option: {name: "narrow-fitness-upto-350", info: "placeholder", image: "placeholder"}},
  {id: "ACC", option: {name: "narrow-fitness-350+", info: "placeholder",image: "placeholder"}},
  // Regular stunt skate options
  {id: "BAA", option: {name: "Regular-stunt-upto-200", info: "placeholder", image: "placeholder"}},
  {id: "BAB", option: {name: "Regular-stunt-upto-350", info: "placeholder", image: "placeholder"}},
  {id: "BAC", option: {name: "Regular-stunt-350+", info: "placeholder", image: "placeholder"}},
  // Regular Urban skate options
  {id: "BBA", option: {name: "Regular-urban-upto-200", info: "placeholder", image: "placeholder"}},
  {id: "BBB", option: {name: "Regular-urban-upto-350", info: "placeholder", image: "placeholder"}},
  {id: "BBC", option: {name: "Regular-urban-350+", info: "placeholder", image: "placeholder"}},
  // Regular fitness skate options
  {id: "BCA", option: {name: "Regular-fitness-upto-200", info: "placeholder", image: "placeholder"}},
  {id: "BCB", option: {name: "Regular-fitness-upto-350", info: "placeholder", image: "placeholder"}},
  {id: "BCC", option: {name: "Regular-fitness-350+", info: "placeholder", image: "placeholder"}},
  // Wide stunt skate options
  {id: "CAA", option: {name: "wide-stunt-upto-200", info: "placeholder", image: "placeholder"}},
  {id: "CAB", option: {name: "wide-stunt-upto-350", info: "placeholder", image: "placeholder"}},
  {id: "CAC", option: {name: "wide-stunt-350+", info: "placeholder", image: "placeholder"}},
  // Wide Urban skate options
  {id: "CBA", option: {name: "wide-urban-upto-200", info: "placeholder", image: "placeholder"}},
  {id: "CBB", option: {name: "wide-urban-upto-350", info: "placeholder", image: "placeholder"}},
  {id: "CBC", option: {name: "wide-urban-350+", info: "placeholder", image: "placeholder"}},
  // Wide fitness skate options
  {id: "CCA", option: {name: "wide-fitness-upto-200", info: "placeholder", image: "placeholder"}},
  {id: "CCB", option: {name: "wide-fitness-upto-350", info: "placeholder", image: "placeholder"}},
  {id: "CCC", option: {name: "wide-fitness-350+", info: "placeholder", image: "placeholder"}},
];
// Variable to hold selected answers
let selectedResults = "AAB";
// Reference item from array based on user selected results
let result = skateSuggest.find(item => item.id === selectedResults);
console.log(result.option);
console.log('done');
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
function nextQuestion(event){
  if (currentQuestion < questions.length) {
  loadQuestion(++currentQuestion);
  console.log(currentQuestion);
}};

answerBtnA.addEventListener('click', nextQuestion);

//Function to show model with skate recommendation using the logged answers string to correspond to info in skate suggest variable


beginQuiz();
console.log(currentQuestion);
logResponse();