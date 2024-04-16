export interface Predicado<T>{
    
    cumple(t: T): boolean;
}