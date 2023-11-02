// Função para embaralhar um array (usada para embaralhar as perguntas)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const questions = [
    {
        question: "Qual é a capital do Brasil?",
        options: ["Rio de Janeiro", "Brasília", "São Paulo", "Belo Horizonte"],
        answer: 1,
        image: "brasilia.jpg", 
    },
    {
        question: "Qual é o maior planeta do sistema solar?",
        options: ["Terra", "Marte", "Júpiter", "Vênus"],
        answer: 2,
        image: "jupiter.jpg", 
    },
    {
        question: "Quem é considerado o pai da computação?",
        options: ["Steve Wozniak", "Alan Turing", "Tim Berners-Lee", "Steve Jobs"],
        answer: 1,
        image: "../Imagens_PP/alanturing.jpg"
    },
];

shuffleArray(questions); // Embaralhar as perguntas

let currentQuestionIndex = 0;
let timeLeft = 10; // Tempo em segundos
let timerInterval;

// Função para exibir a pergunta atual
function showQuestion() {
    clearInterval(timerInterval); // Limpa o temporizador anterior

    const questionText = document.querySelector(".question-text");
    const questionImage = document.querySelector(".question-image"); // Elemento da imagem
    const optionsList = document.querySelector(".options");
    const timeLeftElement = document.getElementById("time-left");

    questionText.textContent = questions[currentQuestionIndex].question;
    questionImage.src = questions[currentQuestionIndex].image; // Define o URL da imagem
    optionsList.innerHTML = "";

    questions[currentQuestionIndex].options.forEach((option, index) => {
        const li = document.createElement("li");
        li.textContent = option;
        li.className = "option";
        li.addEventListener("click", () => checkAnswer(index));
        optionsList.appendChild(li);
    });

    timeLeft = 10; // Reinicia o tempo para 10 segundos
    timeLeftElement.textContent = timeLeft;

    // Iniciar temporizador
    timerInterval = setInterval(() => {
        timeLeft--;
        timeLeftElement.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            // Mostrar feedback de tempo esgotado
            showFeedback(false, "Tempo Esgotado!");
        }
    }, 1000);
}

// Função para verificar a resposta
function checkAnswer(selectedIndex) {
    clearInterval(timerInterval); // Limpa o temporizador

    if (selectedIndex === questions[currentQuestionIndex].answer) {
        showFeedback(true, "Resposta Correta!");
    } else {
        showFeedback(false, "Resposta Incorreta. Tente novamente.");
    }
}

// Função para exibir feedback
function showFeedback(isCorrect, message) {
    const feedbackContainer = document.querySelector(".feedback");
    feedbackContainer.textContent = message;
    feedbackContainer.style.color = isCorrect ? "green" : "red";

    const nextQuestionButton = document.querySelector(".next-question-button");
    nextQuestionButton.style.display = "block";
}

// Função para avançar para a próxima pergunta
function nextQuestion() {
    const feedbackContainer = document.querySelector(".feedback");
    feedbackContainer.textContent = "";
    feedbackContainer.style.color = "black";

    const nextQuestionButton = document.querySelector(".next-question-button");
    nextQuestionButton.style.display = "none";

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        // Jogo terminou
        alert("Jogo terminou!");
    }
}

// Iniciar o jogo
showQuestion();
