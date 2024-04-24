import { SistemaArchivos } from "./SistemaArchivos";

export class Carpeta implements SistemaArchivos {

    private elementos: SistemaArchivos[];

    constructor( elementos: SistemaArchivos[] ) {
        this.elementos = elementos
    }

    setElement(elemento: SistemaArchivos){
        this.elementos.push(elemento);
    }

    buscar(p: (nombreArchivo: string) => boolean): SistemaArchivos[] {
        let archivos: SistemaArchivos[] = [];
        this.elementos.forEach(elemento => {
            const elementoValido = elemento.buscar(p);
            elementoValido.forEach(elemento =>{
                archivos.push(elemento);
            })
        })
        return archivos;
    }
}