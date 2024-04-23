
export class Celda<T>{

    public valor: T;

    constructor(valor: T){
        this.valor = valor;
    }

    reducir(f: (e1: T, e2: T) => T, predicado: (e: T) => boolean){

        return this.valor;
    }
}