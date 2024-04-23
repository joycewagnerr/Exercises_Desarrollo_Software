import { Bebida } from "./Bebida";
import { BebidaDecorator } from "./CafeDecorator";

export class Espuma extends BebidaDecorator {

    constructor(wrappee: Bebida){
        super(wrappee);
    }

    public getDescripcion(): string {
        return this.wrappee.getDescripcion() + ' con espuma';
    }

    public getPrecio(): number {
        console.log('Se agrego espuma a la bebida, se sumaron 0.5$.')
        return this.wrappee.getPrecio() + 0.5;
    }
}

// 