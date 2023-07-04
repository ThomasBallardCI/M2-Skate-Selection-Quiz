// OBJECT VARIABLE HOLDING SKATE RECOMENDATION INFORMATION FOR REFERENCE (Mentor recommendation)
const skateSuggest = [
  // NARROW STUNT SKATE OPTIONS
  {id: "AAA", option: {name: "Roces M12 UFS Black", info: " 'Narrow', 'Stunt' and 'up to £200' we would recommend the Roces M12. It's a classic industry-standard skate that withstands the test of time. The boot is supportive and reliable, built to endure heavy impacts. They hold up against the most demanding street tests performed by some of the most talented skaters worldwide.", image: "url('assets/images/rocesm12.jpg')"}},
  {id: "AAB", option: {name: "USD Sway Sagona Pro", info: " 'Narrow', 'Stunt' and '£200-£350' we would recommend the USD Sway. With it's unique injection moulding makes the boot impact ready offering great resilience and shock absorption. The Sway offers generous forward flexion with it's ergonomical shape and tapered back for a balance between soul space and bulk.", image: "url('assets/images/usdsway.jpg')"}},
  {id: "AAC", option: {name: "Razors Shima 3 White", info: " 'Narrow', 'Stunt' and '£350+' we would recommend The Razors Shima 3. Providing the ultimate package of performance, power and style. Built with OG Brian Shima's legendary touch, these skates feature a solid boot with a soft top quick lace system for maximum comfort and unparalleled performance.", image: "url('assets/images/shima3.jpg')"}},
  // NARROW URBAN SKATE OPTIONS
  {id: "ABA", option: {name: "Powerslide Next 100", info: " 'Narrow', 'Urban' and 'up to £200' we would recommend the Powerslide Next. The shell and cuff are composed of glass fibre-reinforced plastic, making the skate lightweight but supportive. The construction also provides adequate shock absorption so that users will suffer less stress on their feet, reducing muscle fatigue.", image: "url('assets/images/powerslidenext100.jpg')"}},
  {id: "ABB", option: {name: "Seba Trix 2", info: " 'Narrow, 'Urban', and '£200-£350' we would recommend The Seba Trix 2. The skate is part of the grand tourism series from Seba. Using a plastic injected shell which offers more comfort and shock absorption than its carbon fibre siblings, making this perfect for exploring the city or longer sessions with friends.", image: "url('assets/images/sebatrix2.jpg')"}},
  {id: "ABC", option: {name: "Powerslide HC Evo", info: " 'Narrow', 'Urban', and '£350+' we would recommend The Powerslide HC Evo. The shell is made of reinforced carbon fibre and kevlar and is heat moldable to your foot (use caution when doing this yourself!) with a 5mm heel lift for optimum positioning and manoeuvrability. The cuff offers excellent lateral support.", image: "url('assets/images/powerslidehcevo.jpg')"}},
  // NARROW FITNESS SKATE OPTIONS
  {id: "ACA", option: {name: "narrow-fitness-upto-200", info: "placeholder", image: "placeholder"}},
  {id: "ACB", option: {name: "narrow-fitness-upto-350", info: "placeholder", image: "placeholder"}},
  {id: "ACC", option: {name: "narrow-fitness-350+", info: "placeholder",image: "placeholder"}},
  // REGULAR STUNT SKATE OPTIONS
  {id: "BAA", option: {name: "Razors Cult", info: " 'Regular', 'Stunt' and 'up to £200' we would recommend the Razors Cult. A tried and true design since the early 2000s featuring a sleek classic boot styling and a super fast soleplate. A premium skate in a great low price range.", image: "url('assets/images/razorscultblack.jpg')"}},
  {id: "BAB", option: {name: "Mesmer Throne", info: " 'Regular', 'Stunt' and '£250-£350' we would recommend the Mesmer Throne. The boot mould is taken from the USD Classic Throne. Necessary modernizations allow the Mesmer Throne to flourish, The one-piece sole kit is a brand-new design and fits the bottom of the reshaped boot like a glove.", image: "url('assets/images/mesmerthrone.jpg')"}},
  {id: "BAC", option: {name: "Them Skates 909", info: " 'Regular', 'Stunt' and '£350+' we would recommend the Them Skates 909. One of the most highly regarded and loved aggressive skates on the market. The Them Skates 909 is the brainchild of legendary skater Jon Julio. The boot offers a solid and comfortable ride thanks to the use of Intuition liners.", image: "url('assets/images/themskates909.jpg')"}},
  // REGULAR URBAN SKATE OPTIONS
  {id: "BBA", option: {name: "Regular-urban-upto-200", info: "placeholder", image: "placeholder"}},
  {id: "BBB", option: {name: "Regular-urban-upto-350", info: "placeholder", image: "placeholder"}},
  {id: "BBC", option: {name: "Regular-urban-350+", info: "placeholder", image: "placeholder"}},
  // REGULAR FITNESS SKATE OPTIONS
  {id: "BCA", option: {name: "Regular-fitness-upto-200", info: "placeholder", image: "placeholder"}},
  {id: "BCB", option: {name: "Regular-fitness-upto-350", info: "placeholder", image: "placeholder"}},
  {id: "BCC", option: {name: "Regular-fitness-350+", info: "placeholder", image: "placeholder"}},
  // WID STUNT SKATE OPTIONS
  {id: "CAA", option: {name: "USD Aeon 60 Basic", info: " 'Wide', 'Stunt' and 'up to £250' we would recommend the USD Aeon 60 Basic Skate. A staple on the aggressive skate market. Groundbreaking and offering high performance whilst remaining affordable. The Aeon uses a unibody boot and frame giving it a solid feel and lower centre of gravity.", image: "url('assets/images/usdaeon60basic.jpg')"}},
  {id: "CAB", option: {name: "Razors SL", info: " 'Wide', 'Stunt' and '£250-£350' we would recommend the Razors SL. With plenty of ankle support, shock absorption and a decent soul plate for grinding. Beginners will get on just as well as more experienced skaters. a category of skate that everyone will be familiar with and be able to pick up with ease.", image: "url('assets/images/razorsslgrey.jpg')"}},
  {id: "CAC", option: {name: "Faction Tactical V1", info: " 'Wide', 'Stunt' and '£350+' we would recommend the Faction Tactical V1. A heat moldable carbon fibre boot with a nubuck leather upper. The strength and responsiveness of carbon with the style and comfort of a soft boot. Including a fully removable liner to get the best fit. Available boot only.", image: "url('assets/images/factionv1.jpg')"}},
  // WIDE URBAN SKATE OPTIONS
  {id: "CBA", option: {name: "Flying Eagle FBS+", info: " 'Narrow', 'Wide' and 'up to £200' we would recommend the Flying Eagle FBS+. The boot is supportive accompanied by a comfortable liner, with ventilation holes keeping the foot cool. The construction will benefit users who want great energy transfer with fewer pressure points on the foot.", image: "url('assets/images/flyingeaglefbsplus.jpg')"}},
  {id: "CBB", option: {name: "FR Skates FR1 80", info: " 'Narrow', 'Wide' and '£200-£350' we would recommend the FR1 80. Having undergone testing from elite athletes to ensure both top performance and shock absorption. Responsive whilst reducing road vibrations for a smoother feel. The wide lace opening allows easy fitment, while the cuff provides great support.", image: "url('assets/images/frfr180.jpg')"}},
  {id: "CBC", option: {name: "FR Skates FR1 80 Intuition", info: " 'Narrow', 'Wide' and '£350+' we would recommend the FR1 80 Intuition. Having undergone testing from elite athletes to ensure both top performance and shock absorption. Responsive whilst reducing road vibrations for a smoother feel, The inclusion of an industry-leading Intuition liner really sets these apart.", image: "url('assets/images/frfr180intuition.jpg')"}},
  // WIDE FITNESS SKATE OPTIONS
  {id: "CCA", option: {name: "wide-fitness-upto-200", info: "placeholder", image: "placeholder"}},
  {id: "CCB", option: {name: "wide-fitness-upto-350", info: "placeholder", image: "placeholder"}},
  {id: "CCC", option: {name: "wide-fitness-350+", info: "placeholder", image: "placeholder"}},
];

// ARRAY OF QUESTIONS WITH ANSWER ID'S TO LOG IN "SELECTED RESULTS ARRAY"
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
    question: "What price range do you typically find most suitable for your needs?",
    answers: ["Upto £200", "£200-£350", "Over £350"]
  },
];

// HTML ELEMENTS TO VARIABLES FOR MANIPULATION
const answerBtnA = document.getElementById('A');
const answerBtnB = document.getElementById('B');
const answerBtnC = document.getElementById('C');
const question = document.getElementById('question');
const skateTitle = document.getElementById('skateTitle');
const skateInfo = document.getElementById('skateInfo');
const skateImage = document.getElementById('skateImage');
const restartBtn = document.getElementById('restart');
const submit = document.getElementById('submit');
const nameInput = document.getElementById('username');
const welcomePanel = document.getElementById('welcome');
const resultsPanel = document.getElementById('results');
const quizPanel = document.getElementById('quiz');

// DISPLAYS WELCOME AND HIDES QUIZ AND RESULTS PANELS AS DEFAULT BEHAVIOUR
welcomePanel.style.display = "flex";
quizPanel.style.display = "none";
resultsPanel.style.display = "none";


// BUTTON EVENT LISTENERS
answerBtnA.addEventListener('click', nextQuestion);
answerBtnB.addEventListener('click', nextQuestion);
answerBtnC.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);
submit.addEventListener('click', checkUser);

// VARIABLE TO HOLD USER SELECTED ANSWERS
let selectedResults = "";

// VARIABLE TO TRACK CURRENT QUESTION
let currentQuestion = 0;

let username = "";

// CHECKS USER NAME INPUT IS ALPHANUMERICAL STORES USERNAME AND LOADS QUIZ, IF NO USERNAME IS INPUT ALERTS USER TO ENTER ONE
function checkUser() {
  let regexp = /^[0-9a-zA-z]+$/;
  username = nameInput.value.trim();

  if (username.match(regexp)) {
    nameInput.innertext = username;
    beginQuiz();
    welcomePanel.style.display = "none";
    quizPanel.style.display = "flex";
    console.log(username);
  } else {
    alert("Please enter a name to continue!")
  };
};

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
  // POPULATES USERNAME WITH FORCED UPPERCASE FROM USERNAME VARIABLE WITH STRING FROM RESULTS.OPTION.INFO
  skateInfo.innerHTML = "Thank you for completing the quiz " + username.charAt(0).toUpperCase() + username.slice(1) + "." + "<br>Based on your answer responses of" + result.option.info;
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
        quizPanel.style.display = "none";
        resultsPanel.style.display = "flex";
        // CALLS FUNCTION TO POPULATE RESULTS PANEL HTML WITH DESIRED SKATE INFORMATION FROM SKATE SUGGEST VARIABLE
        skateResult(selectedResults);
      };
    };
};

// RESTART BUTTON FUNCTION
function restartQuiz(){
  // // RESETS QUESTION AND RESULTS VARIABLES
  // currentQuestion = 0;
  // selectedResults = "";
  // // CLEAR USERNAME
  // username = "";
  location.reload(true);
  // // HIDES THE RESULTS PANEL AND SHOWS THE QUIZ PANEL
  // document.getElementById("results").style.display = "none";
  // document.getElementById("quiz").style.display = "none";
  // document.getElementById("welcome").style.display = "flex"
  // // CLEARS THE RESULTS PANEL CONTENT
  // skateTitle.innerHTML = "";
  // skateInfo.innerHTML = "";
  // skateImage.style.backgroundImage = "";
  // // CALLS BEGINQUIZ FUNCTION TO START THE QUESTIONAIRE AGAIN
  // beginQuiz();
};

