import { Elemento } from './Elemento';

export class Kit implements Elemento {
    
    public codigo: number;
    private elementos: Elemento[];

    constructor(codigo: number, elementos: Elemento[]){
        this.codigo = codigo;
        this.elementos = elementos;
    }

    calcular_precio(): number {
        let precio: number = 0;

        this.elementos.forEach( elemento => {
            precio += elemento.calcular_precio();
        })
        return precio - (precio * 0.1);
    }
}