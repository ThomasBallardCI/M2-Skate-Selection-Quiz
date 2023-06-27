// HTML ELEMENTS TO VARIABLES FOR MANIPULATION
const modalButtons = document.getElementsByClassName('btn')
const answerBtnA = document.getElementById('A');
const answerBtnB = document.getElementById('B');
const answerBtnC = document.getElementById('C');
const question = document.getElementById('question');
const skateTitle = document.getElementById('skateTitle');
const skateInfo = document.getElementById('skateInfo');
const skateImage = document.getElementById('skateImage');
const restartBtn = document.getElementById('restart');

// DISPLAYS QUIZ AND HIDES RESULTS PANELS AS DEFAULT BEHAVIOUR
document.getElementById("quiz").style.display = "flex";
document.getElementById("results").style.display = "none";

// BUTTON EVENT LISTENERS
answerBtnA.addEventListener('click', nextQuestion);
answerBtnB.addEventListener('click', nextQuestion);
answerBtnC.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);

// VARIABLE TO HOLD USER SELECTED ANSWERS
let selectedResults = "";

// VARIABLE TO TRACK CURRENT QUESTION
let currentQuestion = 0;

// FUNCTION TO BEGIN THE QUESTIONAIRE
function beginQuiz(){
  loadQuestion(currentQuestion);
};

// FUNCTION TO LOAD QUESTIONS
function loadQuestion(questionIndex){
  question.innerHTML = questions[questionIndex].question;
  answerBtnA.innerHTML = questions[questionIndex].answers[0];
  answerBtnB.innerHTML = questions[questionIndex].answers[1];
  answerBtnC.innerHTML = questions[questionIndex].answers[2];
};

// FUNCTION TO CALL INFORMATION FROM SKATE SUGGEST VARIABLE BASED ON USER SELECTED ANSWERS AND POPULATE THE RESULTS PANEL HTML
function skateResult(selectedResults) {
  // MENTOR ADVISED CODE LINE TO FIND THE CORRECT SKATE IN SKATE SUGGEST VARIABLE BASED ON USER SELECTION
  let result = skateSuggest.find(item => item.id === selectedResults);
  // POPULATE RESULTS PANEL HTML WITH RELEVENT INFORMATION FROM SKATE SUGGEST VARIABLE
  skateTitle.innerHTML = result.option.name;
  skateInfo.innerHTML = result.option.info;
  skateImage.style.backgroundImage = result.option.image;
};

// FUNTION FOR ONCLICK EVENT OF BUTTONS TO ITERATE THROUGH QUESTIONS AND LOG ID OF ANSWER BUTTON CLICKED
function nextQuestion(event){
  if(selectedResults.length < 3){
     // CONVERTS CLICKED BUTTON ID TO STRING
    let buttonId = event.target.id.toString();
     // APPENDS THE BUTTON ID TO SELECTED RESULTS VARIABLE
    selectedResults += buttonId;
    // CHECK IF THERE IS ANYMORE QUESTIONS REMAINING
    if (currentQuestion < questions.length - 1) {
      loadQuestion(++currentQuestion);
      } else {
        // HIDES QUESTIONS PANEL AND SHOWS RESULTS PANEL
        document.getElementById("quiz").style.display = "none";
        document.getElementById("results").style.display = "flex";
        // CALLS FUNCTION TO POPULATE RESULTS PANEL HTML WITH DESIRED SKATE INFORMATION FROM SKATE SUGGEST VARIABLE
        skateResult(selectedResults);
      };
    };
};

// RESTART BUTTON FUNCTION
function restartQuiz(event){
  // RESETS QUESTION AND RESULTS VARIABLES
  currentQuestion = 0;
  selectedResults = "";
  // HIDES THE RESULTS PANEL AND SHOWS THE QUIZ PANEL
  document.getElementById("results").style.display = "none";
  document.getElementById("quiz").style.display = "flex";
  // CLEARS THE RESULTS PANEL CONTENT
  skateTitle.innerHTML = "";
  skateInfo.innerHTML = "";
  skateImage.style.backgroundImage = "";
  // CALLS BEGINQUIZ FUNCTION TO START THE QUESTIONAIRE AGAIN
  beginQuiz();
};

beginQuiz();