import { Observer } from './Observer';

export class Observer2 implements Observer{

    update(message: string): void{
        console.log(`Observador 2 recibio la notificacion : ${message}`);
    }

}