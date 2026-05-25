// Lógica para o botão de curtidas nas Notícias
document.querySelectorAll('.btn-like').forEach(button => {
    button.addEventListener('click', function() {
        const icon = this.querySelector('i');
        const countSpan = this.querySelector('.like-count');
        let currentLikes = parseInt(countSpan.textContent);

        // Alterna o ícone de coração vazio para cheio e soma/subtrai a curtida
        if (icon.classList.contains('fa-regular')) {
            icon.classList.replace('fa-regular', 'fa-solid');
            countSpan.textContent = currentLikes + 1;
        } else {
            icon.classList.replace('fa-solid', 'fa-regular');
            countSpan.textContent = currentLikes - 1;
        }
    });
});

// Banco de dados simulado para as Curiosidades
const curiosidadesInfo = {
    1: {
        titulo: "A Origem do Urubu",
        texto: "O Urubu era usado originalmente de forma pejorativa pelas torcidas rivais nos anos 60. Em 1969, a torcida do Flamengo levou um urubu vivo embrulhado em uma bandeira para o Maracanã num jogo contra o Botafogo. O Flamengo venceu por 2x1, quebrou um tabu, e o animal foi adotado com orgulho como mascote oficial!"
    },
    2: {
        titulo: "Fundação do Clube",
        texto: "O Clube de Regatas do Flamengo foi fundado em 17 de novembro de 1895 no bairro do Flamengo. Curiosamente, ele foi criado exclusivamente para disputas de remo. O departamento de futebol só foi oficializado em 1911, após um grupo de jogadores do Fluminense se desentender com a diretoria do tricolor e migrar para a Gávea."
    },
    3: {
        titulo: "Papagaio de Vintém",
        texto: "O primeiro uniforme oficial de futebol do Flamengo, usado em 1912, não era listrado em vermelho e preto. A camisa era quadriculada em vermelho e preto, apelidada de 'Papagaio de Vintém' devido à sua semelhança com as pipas da época que custavam um vintém."
    }
};

// Funções para controlar o Modal
function abrirModal(id) {
    const modal = document.getElementById('modalCuriosidade');
    const titulo = document.getElementById('modal-titulo');
    const texto = document.getElementById('modal-texto');

    if (curiosidadesInfo[id]) {
        titulo.textContent = curiosidadesInfo[id].titulo;
        texto.textContent = curiosidadesInfo[id].texto;
        modal.style.display = 'flex';
    }
}

function fecharModal() {
    document.getElementById('modalCuriosidade').style.display = 'none';
}

// Fechar o modal caso o usuário clique fora da caixa branca
window.onclick = function(event) {
    const modal = document.getElementById('modalCuriosidade');
    if (event.target === modal) {
        fecharModal();
    }
};