import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {

    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes();
    private negoicacoesView: NegociacoesView = new NegociacoesView('#negociacoesView');

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negoicacoesView.update(this.negociacoes);
    }

    adiciona(): void {
        const negociacao: Negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        this.negoicacoesView.update(this.negociacoes);
        this.limparFormulario();
    }

    criaNegociacao(): Negociacao {
        const exp: RegExp = /-/g;
        const date: Date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade: number = parseInt(this.inputQuantidade.value);
        const valor: number = parseFloat(this.inputValor.value);

        return new Negociacao(date, quantidade, valor);
    }

    limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

}