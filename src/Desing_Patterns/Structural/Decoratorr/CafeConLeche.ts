import { Bebida } from './Bebida';

export class CafeConLeche extends Bebida{

    constructor(descripcion: string){
        super(descripcion);
    }

    getDescripcion(): string {
        return this.descripcion;
    }

    getPrecio(): number {
        return 6;
    }
}