// Função para atualizar o timer a cada segundo
function updateTimer() {
    const timerElement = document.querySelector('.timer');
    let time = 15; // Tempo inicial (15 segundos)

    const timerInterval = setInterval(() => {
        time--;
        timerElement.textContent = time;
        
        if (time <= 0) {
            clearInterval(timerInterval); // Para o timer quando atingir 0
        }
    }, 1000); // Atualiza a cada segundo (1000 milissegundos)
}

// Chama a função para iniciar o timer
updateTimer();
