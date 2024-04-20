export interface Sensor{

    state: boolean;
    measure: number;
    limit: number;

    setState(): void;

    calculateMeasure(): number;

    activateAlarm(): void
}