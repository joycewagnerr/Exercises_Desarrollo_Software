import { Componente } from "./Componente";

export class Compuesto extends Componente {
    componentes: Componente[];

    constructor( componentes: Componente[] ){
        super();
        this.componentes = componentes;
    }

    calcular(): number {
        let cont: number = 0;

        this.componentes.forEach(componente => {
            cont += componente.calcular();
        });
        return cont;
    }
}