const startPage = document.getElementById('start')
const quizPage = document.getElementById('quiz')
const startButton = document.getElementById('start-btn')

startButton.addEventListener('click', startQuiz)

function startQuiz() {
    console.log('Started Quiz')
    startPage.style.display = "none"
    quizPage.style.display = "flex"
}