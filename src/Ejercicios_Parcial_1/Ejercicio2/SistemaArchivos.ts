import { Carpeta } from "./Carpeta";

export interface SistemaArchivos {

    padre?: Carpeta;
    
    buscar(p: (nombreArchivo: string) => boolean): SistemaArchivos[];
}
