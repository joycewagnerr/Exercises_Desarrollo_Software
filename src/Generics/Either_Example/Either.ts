export class Either<T, E>{

    private succeed: T | undefined;
    private error: E | undefined;
    private assigned: boolean;

    private constructor( value: T | undefined, error: E){
        
        if ( error ){
            this.error = error;
            this.assigned = true;
        } else {
            this.succeed = value;
            this.assigned = false;
        }
    }

    GetSucceed(): T {
        return <T>this.succeed;
    }

    GetError(): E {
        return <E>this.assigned
    }

    hasError(): boolean {
        return this.assigned;
    }

    static factorySucceed<T>( succeed: T ): Either< T, undefined >{
        return new Either( succeed, undefined );
    }

    static factoryError<E>( error: E ): Either< undefined, E >{
        return new Either( undefined, error );
    }
}