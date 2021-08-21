"use strict";

function Car(name, color, airBag) {
  this.name = name;
  this.color = color;
  this.airBag = airBag;
  this.isBuy = false;
  this.speed = function() {
    console.log(`${this.name} has 100km/h`);
  };
}

const merc = new Car('Mers', "red", true);
const bmw = new Car('BMW', "black", true);

merc.speed();
bmw.speed();

console.log(merc);
console.log(bmw);