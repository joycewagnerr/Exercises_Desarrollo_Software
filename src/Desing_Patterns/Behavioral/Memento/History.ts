import { MementoDoc } from "./MementoDoc";

export class Historia{

    private mementos: Array<MementoDoc> = new Array();

    history(): void{
        this.mementos = new Array();
    }

    addMemento(memento: MementoDoc): void{
        this.mementos.push(memento);
    }

    getMemento(index: number): MementoDoc{
        return this.mementos[index];
    }
}