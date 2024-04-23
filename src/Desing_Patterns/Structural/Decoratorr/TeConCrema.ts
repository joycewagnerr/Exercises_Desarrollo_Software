import { Bebida } from './Bebida';

export class TeConCrema extends Bebida{

    public descripcion: string;

    constructor(descripcion: string, precio: number){
        super(descripcion);
    }

    getDescripcion(): string {
        return this.descripcion + 'con crema';
    }

    getPrecio(): number {
        return 5;
    }
}