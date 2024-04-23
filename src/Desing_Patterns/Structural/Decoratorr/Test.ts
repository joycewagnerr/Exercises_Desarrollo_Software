import { CafeConLeche } from "./CafeConLeche";
import { Chocolate } from "./Chocolate";
import { Espuma } from "./Espuma";

const cafeConLeche = new CafeConLeche("soy un cafe con leche");
// console.log(cafeConLeche.getDescripcion().get);
// console.log(cafeConLeche.getPrecio());

const conEspuma = new Espuma(cafeConLeche)
// console.log(conEspuma.getDescripcion());
// console.log(`el precio total del cafe es: ${conEspuma.getPrecio()}$`);

const espumaYchocolate = new Espuma(new Chocolate(cafeConLeche));
console.log(espumaYchocolate.getDescripcion());
console.log(espumaYchocolate.getPrecio());

