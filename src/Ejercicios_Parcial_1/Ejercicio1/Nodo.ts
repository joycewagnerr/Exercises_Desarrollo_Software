import { Predicado } from "./Predicado";

export class Nodo<T>{

    public valor: T;
    public hijos: Nodo<T>[] = [];

    constructor(valor: T, hijos: Nodo<T>[] = []){
        this.valor = valor;
        this.hijos = hijos;
    }

    cumplen(p: Predicado<T>): number {

        let cont: number = 0;

        this.hijos.forEach( hijo => {
            cont += hijo.cumplen(p);
        });
        
        // if ( p.cumple(this.valor) ){
        //     cont += 1;        
        // }
        // return cont;
        
        return (p.cumple(this.valor)) ? (cont += 1) : cont;
    }
}