//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let amigosNaoSorteados = [];

function adicionarAmigo() {
    const nomeAmigo = document.getElementById("amigo").value.trim();
    if (nomeAmigo === "") {
        alert("Por favor, digite um nome.");
        return;
    }
    amigos.push(nomeAmigo);
    amigosNaoSorteados.push(nomeAmigo);
    console.log(`lista de amigos atualizada: ${amigos}`);
    document.getElementById("amigo").value = "";
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    const container = document.getElementById("colunasAmigos");
    container.innerHTML = ""; // Limpa o conteúdo atual

    const numeroDeColunas = Math.ceil(amigos.length / 3); // Calcula o número de colunas necessárias

    for (let i = 0; i < numeroDeColunas; i++) {
        const coluna = document.createElement("ul");
        coluna.classList.add("column");

        // Adiciona até 3 amigos a cada coluna
        for (let j = i * 3; j < i * 3 + 3 && j < amigos.length; j++) {
            const item = document.createElement("li");
            item.textContent = amigos[j];
            coluna.appendChild(item);
        }

        container.appendChild(coluna);
    }
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Não há amigos disponíveis para sortear.");
        return;
    }
    if (amigosNaoSorteados.length === 0) {
        const iniciarNovo = confirm(
            "Todos os amigos já foram sorteados. Deseja começar um novo sorteio?"
        );
        if (iniciarNovo) {
            comecarNovoSorteio();
        }
        return;
    }

    const indiceAleatorio = Math.floor(
        Math.random() * amigosNaoSorteados.length
    );
    const amigoSorteado = amigosNaoSorteados.splice(indiceAleatorio, 1)[0];
    document.getElementById(
        "resultado"
    ).innerHTML = `Amigo sorteado: ${amigoSorteado}`;
    console.log(`Amigo sorteado: ${amigoSorteado}`);
}

function comecarNovoSorteio() {
    amigos = [];
    amigosNaoSorteados = [];
    document.getElementById("colunasAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    alert("Você pode adicionar novos amigos para iniciar um novo sorteio.");
}
