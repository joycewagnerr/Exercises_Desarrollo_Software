import { Observer } from "./Observer";

export class Observable<T>{

    private observados: Observer<T>[] = [];

    constructor(){
        this.observados = [];
    }

    update(subject: T): void{ // no se hacerlo sin el parametro
        this.observados.forEach( observado => {
            observado.update(subject);
        })
    }

    // set(subject: T): void {
        
    // }

    // get(): T {
        
    // }

    add(observer: Observer<T>): void{
        this.observados.push(observer);
    }
}