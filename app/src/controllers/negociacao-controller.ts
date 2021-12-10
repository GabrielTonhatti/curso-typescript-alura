import { imprimir } from "../utils/imprimir.js";
import { inspect } from "../decorators/inspect.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { DiaDaSenmana } from "../enums/dias-da-semana.js";
import { domInjector } from "../decorators/dom-injector.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { NegociacoesService } from "../services/negociacoes-service.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

export class NegociacaoController {

    @domInjector('#data')
    private inputData: HTMLInputElement;
    @domInjector('#quantidade')
    private inputQuantidade: HTMLInputElement;
    @domInjector('#valor')
    private inputValor: HTMLInputElement;

    private negociacoes: Negociacoes = new Negociacoes();
    private negociacoesView: NegociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');
    private negociacoesService: NegociacoesService = new NegociacoesService();

    constructor() {
        this.negociacoesView.update(this.negociacoes);
    }

    @inspect
    @logarTempoDeExecucao()
    public adiciona(): void {
        // Zé, você já viu isso?
        const negociacao: Negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );

        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.alert('Apenas negociações em dias úteis são aceitas');
            this.ocultarMensagem();

            return;
        }

        this.negociacoes.adiciona(negociacao);
        imprimir(negociacao, this.negociacoes);
        this.limparFormulario();
        this.atualizaView();

        this.ocultarMensagem();

    }

    public importaDados(): void {

        this.negociacoesService
            .obterNegociacoesDoDia()
            .then(negociacoesDeHoje => {
                return negociacoesDeHoje.filter(negociacoesDeHoje => {
                    return !this.negociacoes
                        .lista()
                        .some(negociacao => negociacao
                            .ehIgual(negociacoesDeHoje));
                });
            })
            .then((negociacoesDeHoje: Array<Negociacao>) => {
                for (let negociacao of negociacoesDeHoje) {
                    this.negociacoes.adiciona(negociacao);
                }

                this.negociacoesView.update(this.negociacoes);
            });
    }

    private ehDiaUtil(data: Date) {
        return data.getDay() > DiaDaSenmana.DOMINGO && data.getDay() < DiaDaSenmana.SABADO;
    }

    private ocultarMensagem(): void {
        setTimeout(() => {
            this.mensagemView.limpaMensagem();
        }, 5000);
    }

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso!');
    }

}