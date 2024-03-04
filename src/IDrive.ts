interface IDrivable {
  drive(): void;
}

interface IRefuelable {
  refuel('amount'): void;
}

class Bicycle implements IDrivable {

drive(): void;
lock(): void;
}

class Car implements IRefuelable, IDrivable {
  isParked: boolean;
  constructor(isParked: boolean) {
    this.isParked = isParked;

  }
drive (): void;
refuel(): void {
    
}
  park(): void;
}
