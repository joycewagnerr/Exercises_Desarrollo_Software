// count: se encarga de contar todos los componentes que cumplen con el predicado
// • first: se encarga de devolver el primer objeto de tipo T que cumple con 
// el predicado, si este existe.

import { Optional } from "../Optional_Example/Optional";
import { Component } from './Component';

export class Composite<T> extends Component<T> {

    private components: Component<T>[] = [];

    constructor(value: T){
        super(value);
        this.components = []
    }

    add(e: Component<T>): void{
        this.components.push(e);
    }

    count(predicate: (e: T) => boolean): number {

        let cont: number = 0;
        
        this.components.forEach( component => {
            cont += component.count(predicate);
        })

        if ( predicate(this.value)){
            return cont + 1;
        }
        return cont;
    }
        
    first(predicate: (e: T) => boolean): Optional<T> {
        
        if(predicate(this.value)){
            return new Optional<T>(this.value);
        }

        for (let component of this.components) {
            let primero = component.first(predicate);
            if (primero.hasValue()) {
                return primero;
            }
        }
        
        return new Optional<T>(undefined);
    }
}
        



