import { Bebida } from "./Bebida";
import { BebidaDecorator } from "./CafeDecorator";

export class Chocolate extends BebidaDecorator {

    constructor(wrappee: Bebida){
        super(wrappee);
    }

    public getDescripcion(): string {
        return this.wrappee.getDescripcion() + ' con chocolate';
    }

    public getPrecio(): number {
        console.log('Se agrego chocolate a la bebida, se sumaron 0.20$.')
        return this.wrappee.getPrecio() + 0.20;
    }
}

// 