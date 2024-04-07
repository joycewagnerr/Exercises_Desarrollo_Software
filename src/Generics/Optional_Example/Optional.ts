
export class Optional<T>{

    private value: T | undefined;
    private assigned: boolean;

    constructor( value: T | undefined ){
        
        if ( value ) {
            this.value = value;
            this.assigned = true;
        } else {
            this.assigned = false;
        }
    }

    hasValue(): boolean {
        return this.assigned;
        //return !!this.value;
    }

    getValue(): T {
        if ( !this.hasValue()) {
            throw new Error('Value noy found');
        }
        return <T>this.value;
    }
}

const prueba =  new Optional<number>(undefined);
console.log(prueba.getValue());
console.log(prueba.hasValue());




