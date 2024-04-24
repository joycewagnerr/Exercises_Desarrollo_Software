import { Archivo } from "./Archivo";
import { Carpeta } from "./Carpeta";

const documentos: Carpeta = new Carpeta([]);
const imagenes: Carpeta = new Carpeta([]);
const archivo1: Archivo = new Archivo('foto1');
const archivo2: Archivo = new Archivo('foto2');
const archivoNoValido: Archivo = new Archivo('');

documentos.setElement(archivo2);
documentos.setElement(archivo1);
imagenes.setElement(archivo2);
imagenes.setElement(archivoNoValido);

let predicado = (fileName: string) => {
    return (fileName.length >= 1) ? true : false
}

console.log(documentos.buscar(predicado))












