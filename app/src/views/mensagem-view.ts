import { View } from "./view.js";

export class MensagemView extends View<string> {

    protected template(model: string): string {
        return `<p class="alert alert-info">${model}</p>`;
    }

    public alert(model: string): void {
        this.elemento.style.display = 'block';
        this.elemento.innerHTML = `<p class="alert alert-danger">${model}</p>`;
    }

    public limpaMensagem(): void {
        this.elemento.style.display = 'none';
    }

}