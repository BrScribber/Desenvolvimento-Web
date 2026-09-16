// PARTE 1: DICIONÁRIO DE DADOS DAS PLANTAS NATIVAS
const bancoPlantas = {
    mandacaru: {
        nome: "Mandacaru (Cereus jamacaru)",
        bioma: "Caatinga",
        descricao: "Cacto nativo excelente para reter água. Simboliza a resistência e a força do sertão piauiense.",
        classePreview: "preview-mandacaru"
    },
    carnauba: {
        nome: "Carnaúba (Copernicia prunifera)",
        bioma: "Caatinga / Transição",
        descricao: "Conhecida como a 'árvore da vida'. Tudo nela se aproveita, desde a cera das folhas até as raízes.",
        classePreview: "preview-carnauba"
    },
    ipe: {
        nome: "Ipê-Amarelo-do-Cerrado",
        bioma: "Cerrado",
        descricao: "Sua floração amarela intensa anuncia o fim da estação seca, colorindo as paisagens do nosso cerrado.",
        classePreview: "preview-ipe"
    }
};

// CAPTURA DOS ELEMENTOS VIA .getElementById (Exigência do Trabalho)
const seletor = document.getElementById('seletor-plantas');
const elementoPreview = document.getElementById('preview-planta');
const infoNome = document.getElementById('info-nome');
const infoBioma = document.getElementById('info-bioma');
const infoDescricao = document.getElementById('info-descricao');

// EVENTO DE MUDANÇA NO SELETOR
seletor.addEventListener('change', function() {
    // Captura o valor selecionado (ex: 'carnauba')
    const plantaSelecionada = seletor.value;
    
    // Busca os dados correspondentes no nosso banco de dados
    const dados = bancoPlantas[plantaSelecionada];

    // Atualiza os textos do card informando o usuário
    infoNome.textContent = dados.nome;
    infoBioma.innerHTML = `<strong>Bioma:</strong> ${dados.bioma}`;
    infoDescricao.textContent = dados.descricao;

    // Altera a classe para atualizar o efeito visual do Hover do CSS
    elementoPreview.className = dados.classePreview;
});
