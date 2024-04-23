import { Bebida } from "./Bebida";

export abstract class BebidaDecorator extends Bebida{

    protected wrappee: Bebida;

    constructor(wrappee: Bebida){
        super('este es un topping');
        this.wrappee = wrappee;
    }

    BebidaDecorator(bebida: Bebida){
        this.wrappee = bebida;
    }

    abstract getDescripcion(): string;

    abstract getPrecio(): number; 
}
