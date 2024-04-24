//A partir del Diagrama de clases UML implementar los metodos cumplen de las clases Nodo y NodoCompuesto

import { Nodo } from "./Nodo";
import { NodoCompuesto } from "./NodoCompuesto";
import { Predicado } from "./Predicado";

let predicado: Predicado<number> = {
    cumple(value: number): boolean {
        return value >= 0;
    }
};

const nodo1 = new Nodo(1, [new Nodo(2), new Nodo(3)]);
const nodoC = new NodoCompuesto(1, [new Nodo(2), new Nodo(1)], nodo1);

console.log(nodo1.cumplen(predicado));
console.log(nodoC.cumplen(predicado)); 

// const nodo = new Nodo(1, [new Nodo(5), new Nodo(1)]);
// const nodoCom = new NodoCompuesto(1, [new Nodo(2), new Nodo(1)], new Nodo(5));
// console.log(nodoCom)
// console.log(nodoCom.cumplen(predicado));