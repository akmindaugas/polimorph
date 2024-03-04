class Bicycle {
    drive() {
        console.log("drive");
    }
}
export class Car {
    constructor(isParked) {
        this.isParked = isParked;
    }
    drive() {
        console.log("drive");
    }
    refuel() {
        console.log(100);
    }
    lock() {
        console.log("lock");
    }
    park() {
        console.log("park");
    }
    // =========================
    CallCar() {
        this.isParked = true;
    }
    get carParkStatus() {
        return this.isParked;
    }
    //   =====================
    leaveParking() {
        this.isParked = false;
    }
    get carLeaveParking() {
        return this.isParked;
    }
}
