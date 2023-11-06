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
        image: '/Imagens_PP/amd.jpg',
        question: 'O que significa AMD?',
        answers: ['American Micro Devices', 'Advanced Micro Devices', 'All Modern Devices', 'Association of Micro Devices'],
        correctAnswer: 'Advanced Micro Devices'
    },
    {
        image: '/Imagens_PP/processador.jpg',
        question: 'O que significa CPU?',
        answers: ['Central Processing Unit', 'Computer Peripheral Unit', 'Central Power Unit', 'Computer Programming Utility'],
        correctAnswer: 'Central Processing Unit'
    },
    {
        image: '/Imagens_PP/placadevideo.jpg',
        question: 'O que significa GPU?',
        answers: [' General Purpose Unit', 'Graphics Processing Unit', 'Global Positioning Unit', 'General Product Utilization'],
        correctAnswer: 'Graphics Processing Unit'
    },
    {
        image: '/Imagens_PP/boolean-pog.jpg',
        question: 'Qual lógica foi criada por George Boole?',
        answers: ['Lógica de Aristóteles', 'Lógica Binária', 'Lógica Difusa', 'Lógica Booleana'],
        correctAnswer: 'Lógica Booleana'
    },
    {
        image: '/Imagens_PP/primeiragpu.jpg',
        question: 'Quando foi lançada a primeira GPU?',
        answers: ['1980', '1995', '2005', '1972'],
        correctAnswer: '1972'
    },
    {
        image: '/Imagens_PP/valesilicio.jpg',
        question: 'Onde fica o maior polo de tecnologia do mundo?',
        answers: ['Vale do Silício, Califórnia', 'Tóquio, Japão', 'Londres, Reino Unido', 'Nova Iorque, EUA'],
        correctAnswer: 'Vale do Silício, Califórnia'
    },
    {
        image: '/Imagens_PP/fugaku.jpg',
        question: 'Qual o computador mais potente do mundo?',
        answers: ['Apple MacBook Air', 'IBM PC XT', 'Supercomputador Fugaku', 'Compaq Presario'],
        correctAnswer: 'Supercomputador Fugaku'
    },
    {
        image: '/Imagens_PP/patinhofeio.jpg',
        question: 'Qual o nome do primeiro computador totalmente brasileiro?',
        answers: [' CCE-7100', 'Patinho Feio', 'Sempron 64', 'O Pinguim'],
        correctAnswer: 'Patinho Feio'
    },
    {
        image: '/Imagens_PP/primeiragpu.jpg',
        question: 'Para que serve o Cooler?',
        answers: ['Para aquecer o computador', 'Para aumentar a luminosidade do monitor', 'Para resfriar componentes, como o processador', 'Para refrigerar bebidas'],
        correctAnswer: 'Para resfriar componentes eletrônicos, como o processador'
    },
    {
        image: '/Imagens_PP/html.jpg',
        question: 'O que significa a sigla HTML?',
        answers: ['HyperText Markup Language', 'High-Tech Multimedia Language', 'Human Technology Management Language', ' Hardware and Tools Markup Language'],
        correctAnswer: 'HyperText Markup Language'
    },
    {
        image: '/Imagens_PP/android.jpg',
        question: 'Qual empresa é conhecida por desenvolver o sistema operacional Android?',
        answers: ['Apple', 'Google', 'Microsoft', 'Samsung'],
        correctAnswer: 'Google'
    },
    {
        image: '/Imagens_PP/url.jpg',
        question: 'O que significa URL?',
        answers: ['Uniform Resource Locator', 'Universal Remote Link', 'User Registration Language', 'Ultra Rapid Loading'],
        correctAnswer: 'Uniform Resource Locator'
    },
    {
        image: '/Imagens_PP/primeiragpu.jpg',
        question: 'Quando foi lançada a primeira GPU?',
        answers: ['1980', '1995', '2005', '1972'],
        correctAnswer: '1972'
    },
    {
        image: '/Imagens_PP/primeiragpu.jpg',
        question: 'Quando foi lançada a primeira GPU?',
        answers: ['1980', '1995', '2005', '1972'],
        correctAnswer: '1972'
    },
    {
        image: '/Imagens_PP/primeiragpu.jpg',
        question: 'Quando foi lançada a primeira GPU?',
        answers: ['1980', '1995', '2005', '1972'],
        correctAnswer: '1972'
    },
    {
        image: '/Imagens_PP/primeiragpu.jpg',
        question: 'Quando foi lançada a primeira GPU?',
        answers: ['1980', '1995', '2005', '1972'],
        correctAnswer: '1972'
    },
    {
        image: '/Imagens_PP/primeiragpu.jpg',
        question: 'Quando foi lançada a primeira GPU?',
        answers: ['1980', '1995', '2005', '1972'],
        correctAnswer: '1972'
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
