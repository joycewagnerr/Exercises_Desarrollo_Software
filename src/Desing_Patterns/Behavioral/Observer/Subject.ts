import { Observer } from "./Observer";

export class Subject{

    private observers: Observer[] = [];

    subscribe(observer: Observer): void{
        this.observers.push(observer); 
    }

    unsubscribe(observer: Observer): void{
        const observersList = this.observers.indexOf(observer);
        if ( observersList === -1 ){
            return console.log("No existe observador.");
        }
        this.observers.splice( observersList, 1 );
        console.log("Observador desuscrito.")
    }

    notify(message: string): void{
        this.observers.forEach( observer => {
            observer.update(message);
        })

    }
}