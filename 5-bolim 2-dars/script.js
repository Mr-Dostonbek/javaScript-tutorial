"use strict";

const car = {
    name: "Mers",
    color: "red",
    extra: {
        isBought: false,
        isAirBag: true
    }
};

const json = JSON.stringify(car); // objectni JSON formatga o'tkazish

const obj = JSON.parse(json); // JSON dan objectga o'tkazish

const clone = JSON.parse(JSON.stringify(car));
clone.extra.isBought = true;

console.log(car);
console.log(clone);

 