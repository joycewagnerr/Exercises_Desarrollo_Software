import { State } from "./State";

export class DeletedState implements State{
    
    watchVideo(video: string): void {
        console.log(`Visualizar los primeros 5 minutos de ${video}`);
    }
}