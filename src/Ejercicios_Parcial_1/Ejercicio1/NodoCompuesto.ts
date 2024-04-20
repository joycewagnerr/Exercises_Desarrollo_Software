import { Nodo } from "./Nodo";
import { Predicado } from "./Predicado";

export class NodoCompuesto<T> extends Nodo<T>{

    private nodo_interno: Nodo<T>;

    constructor(valor: T, hijos: Nodo<T>[], nodo_interno: Nodo<T>){
        super(valor, hijos),
        this.nodo_interno = nodo_interno
    }

    cumplen(p: Predicado<T>): number {

        let cont: number = 0;

        this.hijos.forEach( hijo => {
            cont += hijo.cumplen(p);
        });

        // if ( this.nodo_interno ){
        //     return this.nodo_interno.cumplen(p) + cont;
        // }
        // return cont;
        
        return ( this.nodo_interno ) ? this.nodo_interno.cumplen(p) + cont : cont;
    }
}