// interface SistemaArchivos {

//     padre?: Carpeta;
    
//     buscar(p: (nombreArchivo: string) => boolean): SistemaArchivos[];
// }


// class Carpeta implements SistemaArchivos {

//     private elementos: SistemaArchivos[];

//     constructor( elementos: SistemaArchivos[] ) {
//         this.elementos = elementos
//     }

//     setElement(elemento: SistemaArchivos){
//         this.elementos.push(elemento);
//     }

//     buscar(p: (nombreArchivo: string) => boolean): SistemaArchivos[] {
//         let archivos: SistemaArchivos[] = [];
//         this.elementos.forEach(elemento => {
//             const elementoValido = elemento.buscar(p);
//             elementoValido.forEach(elemento =>{
//                 archivos.push(elemento);
//             })
//         })
//         return archivos;
//     }
// }


// class Archivo implements SistemaArchivos {

//     nombre: string;

//     constructor( nombre: string ){
//         this.nombre = nombre
//     }

//     buscar(p: (nombreArchivo: string) => boolean): SistemaArchivos[] {
//         let elemento: SistemaArchivos[] =[];
//         elemento.push(this)
//         if (this.cumple(p)){
//             return elemento;
//         } else {
//             return [];
//         }
//     }

//     cumple(p: (nombreArchivo: string) => boolean){
//         if ( p(this.nombre) ){
//             return true;
//         } else {
//             return false;
//         }
//     }
// }

// //-------------------------------TEST----------------------------------------

// const documentos: Carpeta = new Carpeta([]);
// const imagenes: Carpeta = new Carpeta([]);
// const archivo1: Archivo = new Archivo('foto1');
// const archivo2: Archivo = new Archivo('foto2');
// const archivoNoValido: Archivo = new Archivo('');

// documentos.setElement(imagenes);
// documentos.setElement(archivo1);
// imagenes.setElement(archivo2);
// imagenes.setElement(archivoNoValido);

// let predicado = (fileName: string) => {
//     return (fileName.length >= 1) ? true : false
// }

// console.log(documentos.buscar(predicado))












