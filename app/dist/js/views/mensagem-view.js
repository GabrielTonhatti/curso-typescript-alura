import { View } from "./view.js";
export class MensagemView extends View {
    template(model) {
        return `<p class="alert alert-info">${model}</p>`;
    }
    alert(model) {
        this.elemento.style.display = 'block';
        this.elemento.innerHTML = `<p class="alert alert-danger">${model}</p>`;
    }
    limpaMensagem() {
        this.elemento.style.display = 'none';
    }
}
