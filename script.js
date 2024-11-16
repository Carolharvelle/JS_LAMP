// Selecionando o elemento da lâmpada e o botão do interruptor
const lamp = document.getElementById('lamp');
const switchBtn = document.getElementById('switch-btn');

// Variável para rastrear o estado da lâmpada (ligada ou desligada)
let isLampOn = false;

// Adicionando um evento de clique ao botão do interruptor
switchBtn.addEventListener('click', () => {
    // Alterna o estado da lâmpada
    isLampOn = !isLampOn;

    // Atualiza a aparência da lâmpada com base no estado
    if (isLampOn) {
        lamp.classList.add('lamp-on');  // Liga a lâmpada (cor verde)
        lamp.style.backgroundColor = 'green';
    } else {
        lamp.classList.remove('lamp-on'); // Apaga a lâmpada
        lamp.style.backgroundColor = '#333'; // Retorna ao cinza apagado
    }
});
