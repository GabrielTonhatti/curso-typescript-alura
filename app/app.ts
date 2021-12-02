import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller: NegociacaoController = new NegociacaoController();
const form: Element = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});
