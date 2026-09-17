let boxesToBreak = 8;
let gameActive = true;

function shootBox(boxId) {
    if (!gameActive) return;

    // Acessa a caixa específica que foi clicada
    const boxElement = document.getElementById(boxId);
    const messageElement = document.getElementById("resultMessage");
    
    // Efeito visual de destruição
    boxElement.innerText = "💥";
    boxElement.classList.add("box-destroyed");
    
    // Muda para fumaça logo após a explosão
    setTimeout(() => {
        boxElement.innerText = "💨";
    }, 300);
    
    boxesToBreak--;

    if (boxesToBreak > 0) {
        // Atualiza o texto dinamicamente
        messageElement.innerText = `Caixas restantes: ${boxesToBreak}`;
    } else {
        unlockChest();
    }
}

function unlockChest() {
    const chestElement = document.getElementById("mainChest");
    const messageElement = document.getElementById("resultMessage");
    
    // Transforma o baú de bloqueado para pronto
    chestElement.className = "chest-ready"; 
    chestElement.onclick = openTreasure; 
    
    messageElement.innerText = "Área limpa! Abra o Baú de Metal!";
    messageElement.style.color = "#f1c40f"; // Amarelo
}

function openTreasure() {
    const chestElement = document.getElementById("mainChest");
    const messageElement = document.getElementById("resultMessage");
    const resetBtnElement = document.getElementById("resetBtn");

    gameActive = false;
    const isTreasure = Math.random() > 0.4; // 60% de chance de ganhar para ser mais divertido

    if (isTreasure) {
        chestElement.innerText = "💎"; // Diamante!
        messageElement.innerText = "INCRÍVEL! Você encontrou o Diamante Raro!";
        messageElement.style.color = "#2ecc71"; // Verde
    } else {
        chestElement.innerText = "👻"; // Fantasma!
        messageElement.innerText = "Fim de jogo! O armazém estava assombrado!";
        messageElement.style.color = "#e74c3c"; // Vermelho
    }

    chestElement.onclick = null; 
    chestElement.className = "chest-opened";
    resetBtnElement.style.display = "inline-block";
}

function resetGame() {
    boxesToBreak = 8;
    gameActive = true;
    
    const messageElement = document.getElementById("resultMessage");
    const resetBtnElement = document.getElementById("resetBtn");
    const chestElement = document.getElementById("mainChest");

    // Reseta textos e botões
    messageElement.innerText = "Caixas restantes: 8";
    messageElement.style.color = "white";
    resetBtnElement.style.display = "none";

    // Reseta o baú principal
    chestElement.innerText = "🧰";
    chestElement.className = "chest-locked";
    chestElement.onclick = null;

    // Usa um loop inteligente com getElementById para reconstruir as 8 caixas
    for (let i = 1; i <= 8; i++) {
        const box = document.getElementById("box" + i);
        box.innerText = "📦";
        box.classList.remove("box-destroyed");
    }
}