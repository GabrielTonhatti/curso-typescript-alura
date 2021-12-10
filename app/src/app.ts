import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller: NegociacaoController = new NegociacaoController();
const form = document.querySelector('.form');

if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
} else {
    throw Error('Não possível inicializar a aplicalção. Verifique se o form existe');
}

const botaoImporta = document.querySelector('#botao-importa');
if (botaoImporta) {
    botaoImporta.addEventListener('click', () => {
        controller.importaDados();
    }, false)
} else {
    throw Error('Botão importa não foi encontrado!');
}