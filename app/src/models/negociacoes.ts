import { Negociacao } from "./negociacao.js";
import { Modelo } from "../interfaces/modelo.js";

export class Negociacoes implements Modelo<Negociacoes> {

    // private negociacoes: Negociacao[] = [] é a mesam coisa que private negociacoes: Array<Negociacao> = []
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    // ReadonlyArray<Negociacao> é a mesma coisa que readonly Negociacao[
    public lista(): readonly Negociacao[] {

        return this.negociacoes;
    }

    public paraTexto(): string {
        return JSON.stringify(this.negociacoes, null, 2);
    }

    public ehIgual(negociacoes: Negociacoes): boolean {
        return  JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes);
    }
}