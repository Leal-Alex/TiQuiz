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

const perguntaElement = document.getElementById('pergunta');
const imagemElement = document.getElementById('imagem');
const alternativasElement = document.getElementById('alternativas');
const botaoJogar = document.getElementById('jogar');
const perguntaContainer = document.querySelector('.pergunta-container');
const temporizadorElement = document.getElementById('temporizador');

let perguntaAtual = 0;
let tempoRestante = 10; // Defina o tempo desejado em segundos

botaoJogar.addEventListener('click', iniciarJogo);

function iniciarJogo() {
    botaoJogar.parentElement.style.display = 'none';
    perguntaContainer.style.display = 'block';
    mostrarProximaPergunta();
    atualizarTemporizador();
}

function atualizarTemporizador() {
    temporizadorElement.textContent = `Tempo Restante: ${tempoRestante}`;

    if (tempoRestante === 0) {
        verificarResposta('');
    } else {
        tempoRestante--;
        setTimeout(atualizarTemporizador, 1000);
    }
}

function mostrarProximaPergunta() {
    if (perguntaAtual < perguntas.length) {
        const pergunta = perguntas[perguntaAtual];
        perguntaElement.textContent = pergunta.pergunta;
        imagemElement.src = pergunta.imagem;
        alternativasElement.innerHTML = '';

        pergunta.alternativas.forEach((alternativa) => {
            const botao = document.createElement('button');
            botao.textContent = alternativa;
            botao.className = 'alternativa';
            botao.addEventListener('click', () => verificarResposta(alternativa));
            alternativasElement.appendChild(botao);
        });
    } else {
        encerrarJogo();
    }
}

function verificarResposta(resposta) {
    const pergunta = perguntas[perguntaAtual];

    if (resposta === pergunta.resposta_correta) {
        alert('Parabéns, você acertou!');
    } else {
        alert('Infelizmente, você errou.');
    }

    perguntaAtual++;
    tempoRestante = 10; // Reinicie o temporizador
    mostrarProximaPergunta();
}

function encerrarJogo() {
    perguntaElement.textContent = 'Fim do Jogo';
    imagemElement.src = '';
    alternativasElement.innerHTML = '';
    temporizadorElement.textContent = 'Tempo Restante: 10';
}

// Embaralhar as perguntas para tornar o jogo mais interessante
embaralharPerguntas(perguntas);

function embaralharPerguntas(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

