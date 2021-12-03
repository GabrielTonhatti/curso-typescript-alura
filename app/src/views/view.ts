export abstract class View<T> {

    protected elemento: HTMLElement;
    private escapar: boolean = false;

    constructor(seletor: string, escapar?: boolean) {
        const elemento = document.querySelector(seletor);

        if(elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique!`)
        }

        if (escapar) {
            this.escapar = escapar;
        }
    }

    protected abstract template(model: T): string;

    public update(model: T): void {
        this.elemento.style.display = 'block';

        const t1 = performance.now();
        let template = this.template(model);

        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }

        this.elemento.innerHTML = template;
        const t2 = performance.now();
        console.log(`Tempo de execução do método update: ${(t2 - t1) / 1000} segundos`);
    }
}