import { Elemento } from "./Elemento";

export class Pieza_Simple implements Elemento {

    constructor( public precio: number, public codigo: number ){
    }

    calcular_precio(): number {
        return this.precio;
    }
}