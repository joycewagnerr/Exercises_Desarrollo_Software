import { Observer1 } from "./Observer1";
import { Observer2 } from "./Observer2";
import { Subject } from "./Subject";

const sujeto = new Subject();
const obs1 = new Observer1();
const obs2 = new Observer2();

sujeto.subscribe(obs1);
sujeto.subscribe(obs2);

sujeto.notify("Hola observadores, estoy cambiando");

sujeto.unsubscribe(obs1);

sujeto.notify("Hola observadores, estoy cambiando de nuevo");


