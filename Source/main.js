// Definir perguntas, cada pergunta é um objeto com uma imagem, a pergunta e as alternativas
const questions = [
    {
        image: '/Imagens_PP/alanturing.jpg',
        question: 'Quem é considerado o pai da computação?',
        answers: ['Alan Turing', 'Bill Gates', 'Steve Jobs', 'Mark Zuckerberg'],
        correctAnswer: 'Alan Turing'
    },
    {
        image: '/Imagens_PP/billgates.jpg',
        question: 'Quem criou o Sistema Operacional Windows?',
        answers: ['Linus Torvalds', 'Bill Gates', 'Steve Jobs', 'Mark Zuckerberg'],
        correctAnswer: 'Bill Gates'
    },
    {
        image: '/Imagens_PP/billgates.jpg',
        question: 'O que significa AMD?',
        answers: ['American Micro Devices', 'Advanced Micro Devices', 'All Modern Devices', 'Association of Micro Devices'],
        correctAnswer: 'Advanced Micro Devices'
    },
    
];

// Elementos da DOM
const timerElement = document.querySelector('.timer');
const questionContainer = document.querySelector('.question-container');
const imageContainer = document.querySelector('.image-container');
const descriptionContainer = document.querySelector('.description-container');
const answerContainers = document.querySelectorAll('.answer-choice');
const playAgainButton = document.getElementById('play-again');

// Variáveis do jogo
let currentQuestionIndex = 0;
let timeLeft = 15; // Tempo inicial (15 segundos)
let timerInterval;

// Função para embaralhar as perguntas
function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

// Função para carregar a próxima pergunta
function loadNextQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];

        questionContainer.innerHTML = `<h2>${currentQuestion.question}</h2>`;
        imageContainer.innerHTML = `<img class="image" src="${currentQuestion.image}" alt="Imagem da pergunta">`;
        descriptionContainer.innerHTML = '';

        for (let i = 0; i < answerContainers.length; i++) {
            answerContainers[i].textContent = currentQuestion.answers[i];
        }

        // Atualizar o temporizador
        timeLeft = 15;
        timerElement.textContent = timeLeft;

        clearInterval(timerInterval);
        timerInterval = setInterval(updateTimer, 1000);

        currentQuestionIndex++;
    } else {
        endGame(); // Encerra o jogo se não houver mais perguntas
    }
}

// Função para atualizar o timer a cada segundo
function updateTimer() {
    timeLeft--;
    timerElement.textContent = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        endGame(); // Encerra o jogo quando o tempo se esgota
    }
}

// Função para verificar a resposta selecionada
function checkAnswer(answer) {
    const currentQuestion = questions[currentQuestionIndex - 1];

    if (answer === currentQuestion.correctAnswer) {
        loadNextQuestion(); // Carrega a próxima pergunta se a resposta for correta
    } else {
        endGame(); // Encerra o jogo se a resposta estiver errada
    }
}

// Função para encerrar o jogo
function endGame() {
    clearInterval(timerInterval);

    questionContainer.innerHTML = 'Fim do Jogo!';
    imageContainer.innerHTML = '';
    descriptionContainer.innerHTML = '';

    for (let i = 0; i < answerContainers.length; i++) {
        answerContainers[i].textContent = '';
    }

    playAgainButton.style.display = 'block';
}

// Evento de clique para respostas
for (let i = 0; i < answerContainers.length; i++) {
    answerContainers[i].addEventListener('click', () => {
        const selectedAnswer = answerContainers[i].textContent;
        checkAnswer(selectedAnswer);
    });
}

// Evento de clique para jogar novamente
playAgainButton.addEventListener('click', () => {
    currentQuestionIndex = 0;
    shuffleQuestions();
    loadNextQuestion();
    playAgainButton.style.display = 'none';
});

// Inicialização do jogo
shuffleQuestions();
loadNextQuestion();
