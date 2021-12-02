export class Negociacoes {
    constructor() {
        // private negociacoes: Negociacao[] = [] é a mesam coisa que private negociacoes: Array<Negociacao> = []
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // ReadonlyArray<Negociacao> é a mesma coisa que readonly Negociacao[
    lista() {
        return this.negociacoes;
    }
}
