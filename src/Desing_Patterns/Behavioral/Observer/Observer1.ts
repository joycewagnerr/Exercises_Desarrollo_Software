import { Observer } from "./Observer";

export class Observer1 implements Observer{

    update(message: string): void{
        console.log(`Observador 1 recibio la notificacion : ${message}`);
    }

}