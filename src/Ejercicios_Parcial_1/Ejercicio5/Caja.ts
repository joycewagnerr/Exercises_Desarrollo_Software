import { Celda } from "./Celda";

export class Caja<T> extends Celda<T>{

    private elementos: Celda<T>[];

    constructor(valor: T){
        super(valor);
        this.elementos = [];
    }

    reducir(f: (e1: T, e2: T) => T, predicado: (e: T) => boolean){
        
    }
}