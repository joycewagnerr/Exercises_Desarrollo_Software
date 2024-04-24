import { SistemaArchivos } from "./SistemaArchivos";

export class Archivo implements SistemaArchivos {

    nombre: string;

    constructor( nombre: string ){
        this.nombre = nombre
    }

    buscar(p: (nombreArchivo: string) => boolean): SistemaArchivos[] {
        
        let elemento: SistemaArchivos[] =[];
        elemento.push(this)
        if (this.cumple(p)){
            return elemento;
        } else {
            return [];
        }
    }

    cumple(p: (nombreArchivo: string) => boolean){
        if ( p(this.nombre) ){
            return true;
        } else {
            return false;
        }
    }
}