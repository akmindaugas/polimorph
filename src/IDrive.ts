interface IDrivable {
  drive(): void;
}

interface IRefuelable {
  refuel(amount: number): void;
}

class Bicycle implements IDrivable {
  drive(): void {
    console.log("drive");
  }
}

export class Car implements IRefuelable, IDrivable {
  isParked: boolean;

  constructor(isParked: boolean) {
    this.isParked = isParked;
  }
  drive(): void {
    console.log("drive");
  }
  refuel(): void {
    console.log(100);
  }
  lock(): void {
    console.log("lock");
  }
  park(): void {
    console.log("park");
  }
  // =========================
  CallCar(): void {
    this.isParked = true;
  }

  get carParkStatus(): boolean {
    return this.isParked;
  }
  //   =====================
  leaveParking(): void {
    this.isParked = false;
  }
  get carLeaveParking(): boolean {
    return this.isParked;
  }
}
