import { Car } from "./IDrive";
const myCar = new Car(false);

myCar.CallCar();

console.log(`myCar park status ${myCar.carParkStatus}`);

// =================================
myCar.leaveParking();

console.log(`myCar leaving parking, status ${myCar.carLeaveParking} `);
