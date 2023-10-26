const perguntas = [
    {
        pergunta: 'Identifique a Imagem',
        imagem: '../imagens_PP/ram.jpg', 
        alternativas: ['Memória RAM', 'Placa mãe', 'SSD', 'Gabinete'],
        resposta_correta: 'Memória RAM'
    },
    {
        pergunta: 'Identifique a Imagem',
        imagem: '../imagens_PP/placamae.jpg', 
        alternativas: ['Fonte ATX', 'Placa mãe', 'SSD', 'Processador'],
        resposta_correta: 'Placa mãe'
    },
    // Adicione mais perguntas aqui...
];

// Obtém elementos HTML
const perguntaElement = document.getElementById('pergunta');
const imagemElement = document.getElementById('imagem');
const alternativasElement = document.getElementById('alternativas');
const botaoJogar = document.getElementById('jogar');
const perguntaContainer = document.querySelector('.pergunta-container');

botaoJogar.addEventListener('click', function() {
    // Oculta a tela inicial
    this.parentElement.style.display = 'none';

    // Mostra a tela das perguntas
    perguntaContainer.style.display = 'block';

    // Inicie o jogo
    mostrarProximaPergunta();
});

let perguntaAtual = 0; // Índice da pergunta atual

embaralharPerguntas(perguntas);

function embaralharPerguntas(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Função para exibir a próxima pergunta
function mostrarProximaPergunta() {
    if (perguntaAtual < perguntas.length) {
        const pergunta = perguntas[perguntaAtual];

        // Exibe a pergunta
        perguntaElement.textContent = pergunta.pergunta;

        // Exibe a imagem
        imagemElement.src = pergunta.imagem;

        // Exibe as alternativas
        alternativasElement.innerHTML = ''; // Limpa as alternativas anteriores

        pergunta.alternativas.forEach((alternativa) => {
            const botao = document.createElement('button');
            botao.textContent = alternativa;
            botao.className = 'alternativa'; // Adicione a classe 'alternativa'

            // Adiciona um evento de clique para verificar a resposta
            botao.addEventListener('click', () => verificarResposta(alternativa));

            alternativasElement.appendChild(botao);
        });
    } else {
        // Fim do jogo
        perguntaElement.textContent = 'Fim do Jogo';
        imagemElement.src = '';
        alternativasElement.innerHTML = '';
    }
}

// Função para verificar a resposta do jogador
function verificarResposta(resposta) {
    const pergunta = perguntas[perguntaAtual];

    if (resposta === pergunta.resposta_correta) {
        // Resposta correta
        alert('Parabéns, você acertou!');
    } else {
        // Resposta incorreta
        alert('Infelizmente, você errou.');
    }

    // Mostra a próxima pergunta
    perguntaAtual++;
    mostrarProximaPergunta();
}

