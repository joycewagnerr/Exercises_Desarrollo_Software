import { CompositeSensor } from './CompositeSensor';
import { SensorPresion } from './SensorPresion';
import { SensorTemp } from './SensorTemp';

let sensor1 = new SensorTemp(true, 96, 16);
let sensor2 = new SensorPresion(true, 10, 10);
let sensorCompuesto = new CompositeSensor(false, 50, 14, [sensor1, sensor2]);

sensor1.setState();
sensor2.setState();
sensorCompuesto.setState();
sensorCompuesto.setMeasure();
console.log(sensorCompuesto.calculateMeasure())