import { Sensor } from "./Sensor";

export class CompositeSensor implements Sensor{

    constructor(public state: boolean, public measure: number, public limit: number, public sensors: Sensor[]){
        this.sensors = sensors;
    }

    setState(): void{
        this.state = false;
    }

    setMeasure(): number{
        return this.measure = 0;
    }

    calculateMeasure(): number {
        let average: number = 0;
        if ( this.measure > this.limit ){
            this.sensors.forEach( sensor =>{
                sensor.calculateMeasure();
                average += sensor.measure;
            })
            const newMeasure = average / this.sensors.length;
            return newMeasure;
        } else {
            this.sensors.forEach( sensor =>{
                sensor.calculateMeasure();
                average += sensor.measure;
                })
                return average;
            }
    }

    activateAlarm(): void {
        console.log("El valor esta sobre el límite, ALARMA ACTIVADA")
    }
}