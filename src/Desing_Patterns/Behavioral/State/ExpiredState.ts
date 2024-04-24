import { State } from "./State";

export class ExpiredState implements State{
    
    watchVideo(video: string): void {
        console.log(`Visualizar ${video} completos con publicidad`);
    }
}