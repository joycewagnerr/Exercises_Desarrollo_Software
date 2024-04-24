import { State } from "./State";

export class ActiveState implements State{
    
    watchVideo(video: string): void {
        console.log(`Visualizar ${video} completos sin publicidad`);
    }
}