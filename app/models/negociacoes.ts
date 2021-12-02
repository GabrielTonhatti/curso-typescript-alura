import { Negociacao } from "./negociacao.js";

export class Negociacoes {

    // private negociacoes: Negociacao[] = [] é a mesam coisa que private negociacoes: Array<Negociacao> = []
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    // ReadonlyArray<Negociacao> é a mesma coisa que readonly Negociacao[
    lista(): readonly Negociacao[] {

        return this.negociacoes;
    }
}