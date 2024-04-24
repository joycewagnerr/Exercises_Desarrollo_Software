import { Optional } from "../Optional_Example/Optional";
import { Component } from "./Component";

// count: se encarga de contar todos los componentes 
// que cumplen con el predicado
// first: se encarga de devolver el primer 
// objeto de tipo T que cumple con el predicado, si este existe.

export class Leaf<T> extends Component<T>{

    constructor(value: T){
        super(value);
    }

    count(predicate: (e: T) => boolean): number {

        let cont: number = 0;
        
        if (predicate( this.value )) {
            return cont + 1;
        }
        return 0;
    }
        
    first(predicate: (e: T) => boolean): Optional<T> {
        
        if (predicate( this.value )) {
            return new Optional<T>(this.value);
        }
        return new Optional<T>(undefined);
    }
}