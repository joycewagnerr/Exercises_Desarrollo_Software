export class MementoDoc {

    private content: string;

    constructor(content: string){
        this.content = content;
    }

    DocumentMemento( content: string): void{
        this.content = content;
    }

    getSavedContent(): string{
        return this.content;
    }

}