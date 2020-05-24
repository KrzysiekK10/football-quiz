const startPage = document.getElementById('start')
const quizPage = document.getElementById('quiz')
const startButton = document.getElementById('start-btn')
const questionTag = document.getElementById('question')
const answersTag = document.getElementById('answers')
const answerATag = document.getElementById('answerA')
const answerBTag = document.getElementById('answerB')
const answerCTag = document.getElementById('answerC')
const answerDTag = document.getElementById('answerD')
const questionsIndex = 0;

startButton.addEventListener('click', startQuiz)

function startQuiz() {
    startPage.style.display = "none"
    quizPage.style.display = "flex"
    runQuestion();
}

let showQuestion = 0; /*index - only for testing question and answers*/

function runQuestion() {
    let quest = questions[showQuestion];
    questionTag.innerHTML = quest.question;
    answerATag.innerHTML = "<h4>A.</h4>" + " " + quest.answers[0].answerA;
    answerBTag.innerHTML = "<h4>B.</h4>" + " " + quest.answers[1].answerB;
    answerCTag.innerHTML = "<h4>C.</h4>" + " " + quest.answers[2].answerC;
    answerDTag.innerHTML = "<h4>D.</h4>" + " " + quest.answers[3].answerD;
}


const questions = [{
        question: "Kto został królem strzelców na mundialu we Francji w 1998 roku?",
        answers: [{
                answerA: "Davor Suker",
                correct: true
            },
            {
                answerB: "Dennis Bergkamp",
                correct: false
            },
            {
                answerC: "Ronaldo Nazario",
                correct: false
            },
            {
                answerD: "Thierry Henry",
                correct: false
            }
        ]

    },
    {
        question: "W którym roku w meczu finałowym mundialu zmierzyły się Holandia i Argentyna?",
        answers: [{
                answerA: "1986",
                correct: false
            },
            {
                answerB: "1978",
                correct: true
            },
            {
                answerC: "1994",
                correct: false
            },
            {
                answerD: "2010",
                correct: false
            }
        ]

    },
    {
        question: "Kto wygrał ostatni Puchar Zdobywcow Pucharów w 1999 roku?",
        answers: [{
                answerA: "Parma",
                correct: false
            },
            {
                answerB: "Olympique Marseille",
                correct: false
            },
            {
                answerC: "Feyenoord",
                correct: false
            },
            {
                answerD: "Lazio",
                correct: true
            }
        ]

    },
    {
        question: "Który trener zdobył UEFA Ligę Mistrzów i Mistrzostwo Świata?",
        answers: [{
                answerA: "Vicente del Bosque",
                correct: true
            },
            {
                answerB: "Carlo Ancelotti",
                correct: false
            },
            {
                answerC: "Luiz Felipe Scolari",
                correct: false
            },
            {
                answerD: "Didier Deschamps",
                correct: false
            }
        ]

    },
    {
        question: "W którym klubie nigdy nie zagrał Christian Vieri?",
        answers: [{
                answerA: "Roma",
                correct: true
            },
            {
                answerB: "Milan",
                correct: false
            },
            {
                answerC: "Inter",
                correct: false
            },
            {
                answerD: "Juventus",
                correct: false
            }
        ]

    },
    {
        question: "Który z piłkarzy 2-krotnie został Mistrzem Świata?",
        answers: [{
                answerA: "Romario",
                correct: false
            },
            {
                answerB: "Cafu",
                correct: true
            },
            {
                answerC: "Rivaldo",
                correct: false
            },
            {
                answerD: "Roberto Carlos",
                correct: false
            }
        ]

    },
    {
        question: "Ile razy Arsenal został Mistrzem Anglii?",
        answers: [{
                answerA: "8",
                correct: false
            },
            {
                answerB: "11",
                correct: false
            },
            {
                answerC: "13",
                correct: true
            },
            {
                answerD: "16",
                correct: false
            }
        ]

    },
    {
        question: "Która z drużyn nigdy nie została Mistrzem Niemiec?",
        answers: [{
                answerA: "Werder Brema",
                correct: false
            },
            {
                answerB: "Hertha Berlin",
                correct: false
            },
            {
                answerC: "Bayer 04 Leverkusen",
                correct: true
            },
            {
                answerD: "TSV 1860 Monachium",
                correct: false
            }
        ]

    },
    {
        question: "Ile Paolo Maldini wygrał Pucharów Europy/Ligę Mistrzów?",
        answers: [{
                answerA: "2",
                correct: false
            },
            {
                answerB: "3",
                correct: false
            },
            {
                answerC: "4",
                correct: false
            },
            {
                answerD: "5",
                correct: true
            }
        ]

    },
    {
        question: "Po kim Ronaldinho przejął numer 10 w PSG?",
        answers: [{
                answerA: "Mikeal Arteta",
                correct: false
            },
            {
                answerB: "Pedro Pauleta",
                correct: false
            },
            {
                answerC: "Nicolas Anelka",
                correct: false
            },
            {
                answerD: "Jay-Jay Okocha",
                correct: true
            }
        ]

    },
    {
        question: "Która z drużyn nie posiada honorowej odznaki Ligi Mistrzów?",
        answers: [{
                answerA: "AC Milan",
                correct: false
            },
            {
                answerB: "FC Barcelona",
                correct: false
            },
            {
                answerC: "Manchester United",
                correct: true
            },
            {
                answerD: "Ajax Amsterdam",
                correct: false
            }
        ]

    },
    {
        question: "W którym roku Holandia zdobyła Mistrzostwo Europy?",
        answers: [{
                answerA: "1992",
                correct: false
            },
            {
                answerB: "1988",
                correct: true
            },
            {
                answerC: "1996",
                correct: false
            },
            {
                answerD: "1980",
                correct: false
            }
        ]

    },
    {
        question: "Która z drużyn ma najwięcej tytułów Mistrza Brazylii?",
        answers: [{
                answerA: "SE Palmeiras",
                correct: true
            },
            {
                answerB: "Fluminense FC",
                correct: false
            },
            {
                answerC: "SC Corinthians",
                correct: false
            },
            {
                answerD: "Vasco da Gama",
                correct: false
            }
        ]

    },
    {
        question: "Ile sezonów Sir Alex Ferguson prowadził Manchester United?",
        answers: [{
                answerA: "20",
                correct: false
            },
            {
                answerB: "26",
                correct: true
            },
            {
                answerC: "29",
                correct: false
            },
            {
                answerD: "24",
                correct: false
            }
        ]

    },
    {
        question: "Który europejski klub był ostatnim w karierze piłkarskiej Pepa Guardioli?",
        answers: [{
                answerA: "AS Roma",
                correct: false
            },
            {
                answerB: "FC Barcelona",
                correct: false
            },
            {
                answerC: "Getafe",
                correct: false
            },
            {
                answerD: "Brescia",
                correct: true
            }
        ]

    },
    {
        question: "Gdzie był rozgrywany turniej EURO 2000?",
        answers: [{
                answerA: "Austria/Chorwacja",
                correct: false
            },
            {
                answerB: "Holandia/Belgia",
                correct: true
            },
            {
                answerC: "Portugalia",
                correct: false
            },
            {
                answerD: "Polska/Ukraina",
                correct: false
            }
        ]

    },
    {
        question: "Który piłkarz nie grał w MLS?",
        answers: [{
                answerA: "David Beckham",
                correct: false
            },
            {
                answerB: "Raul",
                correct: false
            },
            {
                answerC: "Kaka",
                correct: false
            },
            {
                answerD: "Hernan Crespo",
                correct: true
            }
        ]

    },
    {
        question: "Kogo w swoim pierwszym sezonie w 2003 roku Roman Abramowicz nie ściągnął do Chelsea?",
        answers: [{
                answerA: "Joe Cole",
                correct: false
            },
            {
                answerB: "Juan Sebastian Veron",
                correct: false
            },
            {
                answerC: "Didier Drogba",
                correct: true
            },
            {
                answerD: "Claude Makalele",
                correct: false
            }
        ]

    },
    {
        question: "Z którego kraju pochodzi klub Vissel Kobe?",
        answers: [{
                answerA: "Korei Południowej",
                correct: false
            },
            {
                answerB: "Japonii",
                correct: true
            },
            {
                answerC: "Chin",
                correct: false
            },
            {
                answerD: "Wietnamu",
                correct: false
            }
        ]

    },
    {
        question: "Które drużyny 3-krotnie zdobyły tytuł Mistrza Europy?",
        answers: [{
                answerA: "Niemcy i Hiszpania",
                correct: true
            },
            {
                answerB: "Niemcy i Włochy",
                correct: false
            },
            {
                answerC: "Francja i Włochy",
                correct: false
            },
            {
                answerD: "Francja i Hiszpania",
                correct: false
            }
        ]

    },
]