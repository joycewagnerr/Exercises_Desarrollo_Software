import { Kit } from "./Kit";
import { Pieza_Simple } from "./Pieza_Simple";

let pieza1: Pieza_Simple = new Pieza_Simple(10, 123);
let pieza2: Pieza_Simple = new Pieza_Simple(20, 124);
let kit: Kit = new Kit(147, [pieza1, pieza2]);

console.log(kit.calcular_precio());