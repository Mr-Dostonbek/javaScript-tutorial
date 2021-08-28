"use strict";

class Car {
  constructor(name, color, startSpeed, maxSpeed) {
    this.name = name;
    this.color = color;
    this.startSpeed = startSpeed;
    this.maxSpeed = maxSpeed;
  }
  globalSpeedCar() {
    return this.maxSpeed + this.startSpeed;
  }
  slowSpeedCar() {
    return this.maxSpeed - this.startSpeed;
  }
}

class Track extends Car {
  constructor(name, color, startSpeed, maxSpeed, weight) {
    super(name, color, startSpeed, maxSpeed);
    this.weight = weight;
  }
  showMyProps() {
    console.log('Weight' + this.weight);
  }
}

const man = new Track("MAN", "Black", 50, 150, 40);
console.log(man);
man.showMyProps();
console.log(man.globalSpeedCar());
console.log(man.slowSpeedCar());

const bmw = new Car("BMW", "Red", 100, 350);
const mers = new Car("Mers", "Black", 60, 300);

console.log(bmw.globalSpeedCar());
console.log(bmw.slowSpeedCar());