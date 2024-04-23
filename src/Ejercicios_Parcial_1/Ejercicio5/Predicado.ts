export interface Predicado<T>{

    (e: T): boolean;
}