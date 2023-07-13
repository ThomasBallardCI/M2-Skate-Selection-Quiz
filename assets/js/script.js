// HTML ELEMENTS TO VARIABLES FOR MANIPULATION
const answerBtnA = document.getElementById("A");
const answerBtnB = document.getElementById("B");
const answerBtnC = document.getElementById("C");
const question = document.getElementById("question");
const skateTitle = document.getElementById("skateTitle");
const skateInfo = document.getElementById("skateInfo");
const skateImage = document.getElementById("skateImage");
const restartBtn = document.getElementById("restart");
const submit = document.getElementById("submit");
const nameInput = document.getElementById("username");
const welcomePanel = document.getElementById("welcome");
const resultsPanel = document.getElementById("results");
const quizPanel = document.getElementById("quiz");

// DISPLAYS WELCOME AND HIDES QUIZ AND RESULTS PANELS AS DEFAULT BEHAVIOUR
welcomePanel.style.display = "flex";
quizPanel.style.display = "none";
resultsPanel.style.display = "none";


// BUTTON EVENT LISTENERS
answerBtnA.addEventListener("click", nextQuestion);
answerBtnB.addEventListener("click", nextQuestion);
answerBtnC.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", restartQuiz);
submit.addEventListener("click", checkUser);

// VARIABLE TO HOLD USER SELECTED ANSWERS
let selectedResults = "";

// VARIABLE TO TRACK CURRENT QUESTION
let currentQuestion = 0;

let username = "";

// CHECKS USER NAME INPUT IS ALPHANUMERICAL STORES USERNAME AND LOADS QUIZ, IF NO USERNAME IS INPUT ALERTS USER TO ENTER ONE
function checkUser() {
  const regexp = /^[0-9a-zA-z]+$/;
  username = nameInput.value.trim();

  if (username.match(regexp)) {
    nameInput.textContent = username;
    beginQuiz();
    welcomePanel.style.display = "none";
    quizPanel.style.display = "flex";
  } else {
    alert("Please Enter a Valid Username. Alphanumeric Characters Only: Min 2 - Max 30");
    nameInput.value = "";
  }
}

// FUNCTION TO BEGIN THE QUESTIONAIRE
function beginQuiz(){
  loadQuestion(currentQuestion);
}

// FUNCTION TO LOAD QUESTIONS
function loadQuestion(questionIndex){
  question.textContent = questions[questionIndex].question;
  answerBtnA.textContent = questions[questionIndex].answers[0];
  answerBtnB.textContent = questions[questionIndex].answers[1];
  answerBtnC.textContent = questions[questionIndex].answers[2];
}

// FUNCTION TO CALL INFORMATION FROM SKATE SUGGEST VARIABLE BASED ON USER SELECTED ANSWERS AND POPULATE THE RESULTS PANEL HTML
function skateResult(selectedResults) {
  // MENTOR ADVISED CODE LINE TO FIND THE CORRECT SKATE IN SKATE SUGGEST VARIABLE BASED ON USER SELECTION
  const result = skateSuggest.find((item) => item.id === selectedResults);
  // POPULATE RESULTS PANEL HTML WITH RELEVENT INFORMATION FROM SKATE SUGGEST VARIABLE
  skateTitle.textContent = result.option.name;
  // POPULATES USERNAME WITH FORCED UPPERCASE FROM USERNAME VARIABLE WITH STRING FROM RESULTS.OPTION.INFO
  skateInfo.innerHTML =
    "Thank you for completing the quiz " + 
    username.charAt(0).toUpperCase() + 
    username.slice(1) + 
    "." + 
    "<br>Based on your answer responses of" + 
    result.option.info;
  skateImage.style.backgroundImage = result.option.image;
}

// FUNTION FOR ONCLICK EVENT OF BUTTONS TO ITERATE THROUGH QUESTIONS AND LOG ID OF ANSWER BUTTON CLICKED
function nextQuestion(event){
  if(selectedResults.length < 3){
     // CONVERTS CLICKED BUTTON ID TO STRING
    const buttonId = event.target.id.toString();
     // APPENDS THE BUTTON ID TO SELECTED RESULTS VARIABLE
    selectedResults += buttonId;
    // CHECK IF THERE IS ANYMORE QUESTIONS REMAINING
    if (currentQuestion < questions.length - 1) {
      currentQuestion += 1;
      loadQuestion(currentQuestion);
      } else {
        // HIDES QUESTIONS PANEL AND SHOWS RESULTS PANEL
        quizPanel.style.display = "none";
        resultsPanel.style.display = "flex";
        // CALLS FUNCTION TO POPULATE RESULTS PANEL HTML WITH DESIRED SKATE INFORMATION FROM SKATE SUGGEST VARIABLE
        skateResult(selectedResults);
      }
    }
}

// RESTART BUTTON FUNCTION
function restartQuiz(){
  location.reload(true);
}

