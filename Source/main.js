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
    {
        pergunta: 'Identifique a Imagem',
        imagem: '../imagens_PP/processador.jpg', 
        alternativas: ['Placa de Video', 'Placa mãe', 'Processador', 'Chipset'],
        resposta_correta: 'Processador'
    },
    {
        pergunta: 'Identifique a Imagem',
        imagem: '../imagens_PP/placadevideo.jpg', 
        alternativas: ['Fonte ATX', 'Water Cooler', 'Placa de Video', 'Processador'],
        resposta_correta: 'Placa de Video'
    },
    {
        pergunta: 'Identifique a Imagem',
        imagem: '../imagens_PP/gabinete.jpg', 
        alternativas: ['Memória RAM', 'Placa mãe', 'CPU', 'Gabinete'],
        resposta_correta: 'Gabinete'
    },
    {
        pergunta: 'Identifique a Imagem',
        imagem: '../imagens_PP/SSD.jpg', 
        alternativas: ['Cabo Sata', 'Placa mãe', 'SSD', 'Processador'],
        resposta_correta: 'SSD'
    },
    {
        pergunta: 'Identifique a Imagem',
        imagem: '../imagens_PP/fonteatx.jpg', 
        alternativas: ['Fonte ATX', 'Estabilizador', 'Cooler', 'Gabinete'],
        resposta_correta: 'Fonte ATX'
    },
    {
        pergunta: 'Identifique a Imagem',
        imagem: '../imagens_PP/fan.png', 
        alternativas: ['Fan', 'Cooler', 'Turbina', 'Processador'],
        resposta_correta: 'Fan'
    },
    {
        pergunta: 'Identifique a Imagem',
        imagem: '../imagens_PP/watercooler.jpg', 
        alternativas: ['VRM', 'Fan', 'Water Cooler', 'Gabinete'],
        resposta_correta: 'Water Cooler'
    },
    {
        pergunta: 'Identifique o cabo',
        imagem: '../imagens_PP/HDMI.jpg', 
        alternativas: ['USB', 'HDMI', 'DisplayPort', 'SATA'],
        resposta_correta: 'HDMI'
    },
    {
        pergunta: 'Identifique o cabo',
        imagem: '../imagens_PP/PS2.jpg', 
        alternativas: ['USB', 'HDMI', 'DisplayPort', 'PS/2'],
        resposta_correta: 'PS/2'
    },
    {
        pergunta: 'Identifique o cabo',
        imagem: '../imagens_PP/SATA.jpg', 
        alternativas: ['USB', 'HDMI', 'DisplayPort', 'SATA'],
        resposta_correta: 'SATA'
    },
    // Abaixo as curiosidades:
    {
        pergunta: 'Quem é considerado o "pai da computação"?',
        imagem:'../imagens_PP/alanturing.jpg',
        alternativas: ['Steve Wozniak', 'Alan Turing', 'Tim Berners-Lee', ' Steve Jobs'],
        resposta_correta: 'Alan Turing'
    },
    
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

