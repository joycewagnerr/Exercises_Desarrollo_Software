import { Composite } from "./Composite";
import { Leaf } from "./Leaf";

let predicate = (value: number) => {
    return (value > 0) ? true : false;
}

let leaf: Leaf<number> = new Leaf<number>(5);
let leaf2: Leaf<number> = new Leaf<number>(2);
let leaf3: Leaf<number> = new Leaf<number>(1);

let composite: Composite<number> = new Composite<number>(1);
let compositeH: Composite<number> = new Composite<number>(2);

composite.add(leaf)
composite.add(leaf2)
composite.add(compositeH);
compositeH.add(leaf3);

console.log(composite)

console.log(composite.count(predicate));
console.log(composite.first(predicate));
