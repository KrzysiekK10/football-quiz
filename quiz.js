const startPage = document.getElementById('start')
const quizPage = document.getElementById('quiz')
const startButton = document.getElementById('start-btn')
const questionTag = document.getElementById('question')
const answersContainer = document.getElementById('answers')
const answerATag = document.getElementById('answerA')
const answerBTag = document.getElementById('answerB')
const answerCTag = document.getElementById('answerC')
const answerDTag = document.getElementById('answerD')
const nextQuestion = document.getElementById('nextQuestions')
const scorePage = document.getElementById('score')

let questionsIndex = 0; //index questions 
let score = 0;
let indexNumber = 0; // question number

startButton.addEventListener('click', startQuiz)

function startQuiz() {
    startPage.style.display = "none"
    quizPage.style.display = "flex"
    runQuestion();
    runTime(); //  stop only for using score page
}

//time countdown//
let counter = 10;

function runTime() {
    setInterval(() => {
        counter--;
        if (counter >= 0) {
            timeLeft = document.getElementById('timer');
            timeLeft.innerHTML = counter;
        } else {
            // alert('out of time');
            disabled(); // score = 0
        }
    }, 1000);
}

let questions = [{
        question: "Kto został królem strzelców na mundialu we Francji w 1998 roku?",
        answers: ["Davor Suker", "Dennis Bergkamp", "Ronaldo Nazario", "Thierry Henry"],
        correct: answerA,
    },
    {
        question: "Kto zagrał w meczu finałowym mundialu w 2006 roku?",
        answers: ["Francja-Brazylia", "Włochy-Francja", "Brazylia-Niemcy", "Hiszpania-Holandia"],
        correct: answerB,
    },
    {
        question: "Kto wygrał ostatni Puchar Zdobywcow Pucharów?",
        answers: ["Parma", "Olympique Marseille", "Feyenoord", "Lazio"],
        correct: answerD,
    },
    {
        question: "Który trener zdobył UEFA Ligę Mistrzów i Mistrzostwo Świata?",
        answers: ["Vicente del Bosque", "Carlo Ancelotti", "Luiz Felipe Scolari", "Didier Deschamps"],
        correct: answerA,
    },
    {
        question: "W którym klubie nie grał Christian Vieri?",
        answers: ["Roma", "Milan", "Inter", "Juventus"],
        correct: answerA,
    },
    {
        question: "Który z piłkarzy 2-krotnie został Mistrzem Świata?",
        answers: ["Romario", "Cafu", "Rivaldo", "Roberto Carlos"],
        correct: answerB,
    },
    {
        question: "Ile razy Arsenal został Mistrzem Anglii?",
        answers: ["8", "11", "13", "16"],
        correct: answerC,
    },
    {
        question: "Która z drużyn nigdy nie została Mistrzem Niemiec?",
        answers: ["Werder Brema", "Hertha Berlin", "Bayer 04 Leverkusen", "TSV 1860 Monachium"],
        correct: answerC,
    },
    {
        question: "Ile Pucharów Europy/Ligę Mistrzów zdobył w karierze Paolo Maldini?",
        answers: ["2", "3", "4", "5"],
        correct: answerD,
    },
    {
        question: "Po kim Ronaldinho przejął numer 10 w PSG?",
        answers: ["Mikeal Arteta", "Pedro Pauleta", "Nicolas Anelka", "Jay-Jay Okocha"],
        correct: answerD,
    },
    {
        question: "Która z drużyn nie posiada honorowej odznaki Ligi Mistrzów?",
        answers: ["AC Milan", "FC Barcelona", "Manchester United", "Ajax Amsterdam"],
        correct: answerC,
    },
    {
        question: "W którym roku Holandia zdobyła Mistrzostwo Europy?",
        answers: ["1992", "1988", "1996", "1980"],
        correct: answerB,
    },
    {
        question: "Która drużyna ma najwięcej tytułów Mistrza Brazylii?",
        answers: ["SE Palmeiras", "Fluminense FC", "SC Corinthians", "Vasco da Gama"],
        correct: answerA,
    },
    {
        question: "Ile sezonów Sir Alex Ferguson prowadził Manchester United?",
        answers: ["20", "26", "29", "24"],
        correct: answerB,
    },
    {
        question: "Który piłkarz nie zdobył Złotej Piłki?",
        answers: ["Andriy Shevchenko", "Micheal Owen", "Steven Gerrard", "Zinedine Zidane"],
        correct: answerC,
    },
    {
        question: "Kogo w swoim pierwszym sezonie w 2003 roku Roman Abramowicz nie ściągnął do Chelsea?",
        answers: ["Joe Cole", "Juan Sebastian Veron", "Didier Drogba", "Claude Makalele"],
        correct: answerC,
    },
    {
        question: "Który piłkarz nie grał w MLS?",
        answers: ["David Beckham", "Lothar Matthäus", "Kaka", "Fernando Torres"],
        correct: answerD,
    },
    {
        question: "Kto ma najwięcej występów w koszulce Realu Madryt w historii?",
        answers: ["Raul", "Fernando Hierro", "Iker Casillas", "Guti"],
        correct: answerA,
    },
    {
        question: "Z którego kraju pochodzi klub Vissel Kobe?",
        answers: ["Korei Południowej", "Japonii", "Chin", "Wietnamu"],
        correct: answerB,
    },
    {
        question: "Które drużyny 3-krotnie zdobyły tytuł Mistrza Europy?",
        answers: ["Niemcy i Hiszpania", "Niemcy i Włochy", "Francja i Włochy", "Francja i Hiszpania"],
        correct: answerA,
    },
]

function runQuestion() {
    let quest = questions[questionsIndex];
    questionTag.innerHTML = indexNumber + 1 + ". " + " " + quest.question;
    answerATag.innerHTML = "<h4>A.</h4>" + " " + quest.answers[0];
    answerBTag.innerHTML = "<h4>B.</h4>" + " " + quest.answers[1];
    answerCTag.innerHTML = "<h4>C.</h4>" + " " + quest.answers[2];
    answerDTag.innerHTML = "<h4>D.</h4>" + " " + quest.answers[3];
}

const lastQuestion = questions.length - 1;

nextQuestion.addEventListener('click', setNext)

function setNext() {
    clearStatus(); // reset classes for answers
    counter = 11; // 10 seconds time for each question
    indexNumber++; // question number

    if (questionsIndex < lastQuestion) {
        questionsIndex++;
        runQuestion();
    } else {
        nextQuestion.textContent = 'Finish';
        nextQuestion.addEventListener('click', final);

        function final() {
            quizPage.style.display = "none";
            scorePage.style.display = "flex";
            scoreResult.innerHTML = score + "/" + questions.length; // last question + score page
        }
    }
}

let answersTag = document.querySelectorAll('.answer-btn');

// check answers 
answersTag.forEach(function (answer) {
    answer.addEventListener('click', function () {

        if (answer == questions[questionsIndex].correct) {
            // alert('correct'); // only for tests
            answer.classList.add('correct');
            answer.innerHTML = "correct";
            score++; // add point
        } else {
            console.log('wrong'); // only for tests
            answer.classList.add('wrong');
            answer.innerHTML = "wrong";
        }

        disabled(); // another answers are unclickable
        counter = 0; // pause timer
    })
})

const answersLen = answersContainer.children.length;

function clearStatus() {
    for (let i = 0; i < answersLen; i++) {
        answersContainer.children[i].classList.remove('correct');
        answersContainer.children[i].classList.remove('wrong');
        answersContainer.children[i].classList.remove('answered');
    }
}

function disabled() {
    for (let i = 0; i < answersLen; i++) {
        answersContainer.children[i].classList.add('answered');
    }
}