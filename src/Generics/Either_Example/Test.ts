import { Either } from "./either";

let cursos: string[] = ['matematica', 'biologia', 'castellano'];

let curso: string | undefined = cursos.find((curso) => curso === 'biologia');

if ( curso ){
    const succeed: Either<string, undefined> = Either.factorySucceed<string>(curso);
    console.log(`Tiene error: `, succeed.hasError());
    console.log(`Succed: `, succeed.GetSucceed());
    console.log(`Error: `, succeed.GetError());
} else {
    const error: Either<undefined, string> = Either.factoryError<string>('El curso no existe');
    console.log(`Tiene error: `, error.hasError());
    console.log(`Succed: `, error.GetSucceed());
    console.log(`Error: `, error.GetError());
}