import { MementoDoc } from './MementoDoc';

export class Document{

    private content: string;

    constructor(content: string){
        this.content = content;
    }

    document(content: string): void {
        this.content = content;
    }

    write(text: string): void {
        this.content += text;
    }

    getContent(): string{
        return this.content;
    }

    createMemento(): MementoDoc{
        return new MementoDoc(this.content);
    }

    restoreFromMemento(memento: MementoDoc): void{
        this.content = memento.getSavedContent();
    }
}