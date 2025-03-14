let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativasRestantes = 10;

document.getElementById("tentativas").textContent = `Tentativas restantes: ${tentativaRestantes}`;

function verificarPalpite() {
    let palpite = parseInt(document.getElementById("palpite").value);

    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        document.getElementById("mensagem").textContent = "Digite um número válido entre 1 e 100.";
        return;
    }

    tentativasRestantes--;

    if (palpite === numeroSecreto) {

        document.getElementById("mensagem").textContent = "Parabéns! Você acertou!";

        document.getElementById("tentativas").textContent = "";

    } else if (tentativasRestantes === 0) {

        document.getElementById("mensagem").textContent = `Você perdeu! O número secreto era ${numeroSecreto}.`;

        document.getElementById("tentativas").textContent = "";

    } else {

        document.getElementById("mensagem").textContent = palpite < numeroSecreto ? "O número é maior!" : "O número é menor!";

        document.getElementById("tentativas").textContent = `Tentativas restantes : ${tentativasRestantes}`;
    }
}