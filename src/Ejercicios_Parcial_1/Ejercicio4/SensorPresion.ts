import { Sensor } from "./Sensor";

export class SensorPresion implements Sensor{

    constructor(public state: boolean, public measure: number, public limit: number){}

    setState(): void{
        this.state = false;
    }

    calculateMeasure(): number {
        if ( this.measure > this.limit ){
            this.activateAlarm();
        }
        return this.measure;
    }

    activateAlarm(): void {
        console.log("El valor esta sobre el límite, ALARMA ACTIVADA")
    }
}