import { Componente } from "./Componente";
import { Compuesto } from "./Compuesto";
import { Elemento } from "./Elemento";

let martillo: Componente = new Elemento();
let boton: Componente = new Elemento();
let componentesCajita: Componente[] = [martillo, boton];

let cajita: Componente = new Compuesto(componentesCajita);

let cartulina: Componente = new Elemento();
let balon: Componente = new Elemento();
let componentesCaja: Componente[] = [cartulina, balon, cajita];

let caja1: Componente = new Compuesto(componentesCaja);

console.log(caja1.calcular())