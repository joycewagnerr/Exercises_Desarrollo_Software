import { Document } from './Document';
import { Historia } from "./History";

let documento: Document = new Document('soy joyce\n');
let historia: Historia = new Historia();

documento.write('hola mundo\n');
historia.addMemento(documento.createMemento());

documento.write('agregando mas contenido');
historia.addMemento(documento.createMemento());

documento.restoreFromMemento(historia.getMemento(1));

console.log(documento.getContent());