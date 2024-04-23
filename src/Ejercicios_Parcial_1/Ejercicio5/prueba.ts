class Celda<T> {
    valor: T;

    constructor(valor: T) {
        this.valor = valor;
    }

    reducir(f: (e1: T, e2: T) => T): T {
        return this.valor;
    }
}

class Caja<T> extends Celda<T> {
    elementos: Celda<T>[];

    constructor(valor: T) {
        super(valor);
        this.elementos = [];
    }

    reducir(f: (e1: T, e2: T) => T): T {
        let r: T = this.elementos[0].reducir(f);
        for (let i = 1; i < this.elementos.length; i++) {
            let r1: T = this.elementos[i].reducir(f);
            r = f(r, r1);
        }
        let result: T = f(r, this.valor);
        return result;
    }
}

  //Para el caso concreto de T = number

let celda1: Celda<number> = new Celda<number>(1);
let celda2: Celda<number> = new Celda<number>(2);
let celda3: Celda<number> = new Celda<number>(3);

let caja1: Caja<number> = new Caja<number>(5);
let caja2: Caja<number> = new Caja<number>(5);

caja2.elementos[0] = celda2;
caja2.elementos[1] = celda3;
// console.log(caja2);

caja1.elementos[0] = celda1;
caja1.elementos[1] = caja2;
// console.log(caja1);

console.log(caja1.reducir((a,b) => (a+b)));