"use strict";

const cars = {
  color: "white",
  isBuy: false,
  isAromor: function() {
    console.log("Car does not have armor.");
  },
};

const nexia = Object.create(cars);

console.log(nexia.color);

const bmw = {
  color: "black",
};

// objectni objectga yonaltirish bu eski usuli 
// bmw.__proto__ = cars;

// objectni objectga yonaltirish bu yangi usuli
Object.setPrototypeOf(bmw, cars);

bmw.isAromor();

console.log(bmw.isBuy);