import { Optional } from '../Optional_Example/Optional';

// count: se encarga de contar todos los componentes 
// que cumplen con el predicado
// • first: se encarga de devolver el primer 
// objeto de tipo T que cumple con el predicado, si este existe.

export abstract class Component<T>{

    value: T;

    constructor(value: T){
        this.value = value;
    }

    abstract count(predicate: (e: T) => boolean): number;

    abstract first(predicate: (e: T) => boolean): Optional<T>;
}
