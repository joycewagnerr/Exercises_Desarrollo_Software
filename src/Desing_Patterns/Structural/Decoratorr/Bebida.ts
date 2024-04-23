export abstract class Bebida{

    protected descripcion: string;

    constructor(descripcion: string){
        this.descripcion = descripcion;
    }

    abstract getDescripcion(): string;

    abstract getPrecio(): number;
}