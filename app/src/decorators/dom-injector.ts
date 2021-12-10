export function domInjector(seletor: string) {

    return function (target: any, propertKey: string) {

        console.log(`Modificando prototype ${target.constructor.name} e adicionando getter para a propriedade ${propertKey}`)
        let elemento: HTMLElement;
        const getter = function () {

            if (!elemento) {
                elemento = <HTMLElement>document.querySelector(seletor);
                console.log(`Buscando elemento do DOM com o seletor: ${seletor} para injetar em: ${propertKey}`);
            }

            return elemento;
        }

        Object.defineProperty(target, propertKey, { get: getter });
    }
}