const modalButtons = document.getElementsByClassName('btn')
const answerBtnA = document.getElementById('A');
const answerBtnB = document.getElementById('B');
const answerBtnC = document.getElementById('C');
const question = document.getElementById('question');
const skateTitle = document.getElementById('skateTitle');
const skateInfo = document.getElementById('skateInfo');
const skateImage = document.getElementById('skateImage')

document.getElementById("quiz").style.display = "flex";
document.getElementById("results").style.display = "none";

answerBtnA.addEventListener('click', nextQuestion);
answerBtnB.addEventListener('click', nextQuestion);
answerBtnC.addEventListener('click', nextQuestion);

// OBJECT VARIABLE HOLDING SKATE RECOMENDATION INFORMATION FOR REFERENCE (Mentor recommendation)
const skateSuggest = [
  // Narrow Stunt Skate options
  {id: "AAA", option: {name: "Roces M12 UFS Black", info: "The Roces M12 is a classic, industry-standard skate that stands the test of time. The boot is supportive and dependable. Built for heavy impacts, they stand up against the gravest street tests from some of the most talented skaters globally.", image: "url('assets/images/rocesm12.jpg')"}},
  {id: "AAB", option: {name: "USD Sway Sagona Pro", info: "The USD Sway with it's unique injection moulding makes the boot impact ready offering great resilience and shock absorption. The Sway offers generous forward flexion with it's ergonomical shape and tapered back for a balance between soul space and bulk.", image: "url('assets/images/usdsway.jpg')"}},
  {id: "AAC", option: {name: "Razors Shima 3 White", info: "The Razors Shima 3 skates provide the ultimate package of performance, power and style. Built with OG Brian Shima's legendary touch, these skates feature a solid boot with a soft top quick lace system for maximum comfort and unparalleled performance", image: "url('assets/images/shima3.jpg')"}},
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
let selectedResults = "";

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

// Function to call information from skatesuggest based on user answers and populate HTML on results panel
function skateResult(selectedResults) {
  // Mentor Advised code to find the correct skate in list based on user selection
  let result = skateSuggest.find(item => item.id === selectedResults);
  // Populates Results panel HTML with relevent information from skateSuggest variable
  skateTitle.innerHTML = result.option.name;
  skateInfo.innerHTML = result.option.info;
  skateImage.style.backgroundImage = result.option.image;
};

//Function for onClick event of buttons to iterate through questions on click and log answer button id pressed
function nextQuestion(event){
  if(selectedResults.length < 3){
    let buttonId = String(event.target.id);
    selectedResults += buttonId.toString();
    console.log(selectedResults);
      if (currentQuestion < questions.length - 1) {
      loadQuestion(++currentQuestion);
      } else {
        // Hides  Questions panel and shows Results panel
        document.getElementById("quiz").style.display = "none";
        document.getElementById("results").style.display = "flex";
        // Calls function to populate results panel HTML with desired skate information from skateSuggest variable
        skateResult(selectedResults);
        console.log("no more questions");
      };
    }
};


//Function to show modal with skate recommendation using the logged answers string to correspond to info in skate suggest variable

beginQuiz();