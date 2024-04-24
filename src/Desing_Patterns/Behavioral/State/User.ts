import { State } from './State';

export class User {

    private state: State;

    constructor(state: State) {
        this.state = state;
    }
    
    setState(state: State): void {
        this.state = state
        return console.log(`State user changed to ${this.state.constructor.name}`)
    }

    watchVideo(video: string): void {
        this.state.watchVideo(video);
    }

}