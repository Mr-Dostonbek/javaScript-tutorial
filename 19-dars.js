"use strict";

const person = {
  name: "Dostonbek",
  lastName: "Goyipov",
  age: 22,
  wishes: [],
  language: function () {},
  mother: {
    name: "name",
  },
};

const obj = {
  name: "div",
  widths: 400,
  height: 400,
  color: {
    border: "crimson",
    bg: "coral",
  },
};

console.log(Object.keys(obj).length);  // object uzunligini aniqlash

for (let key in obj) {
  if (typeof obj[key] == "object") {
    for (let i in obj[key]) {
      console.log(`Property ${key} value ${obj[key][i]}`);
    }
  } else {
    console.log(`Property ${key} value ${obj[key]}`);
  }
}

// Method sozdat qilish

const newMethod = {
  makeExample: function() {
    console.log("My first method");
  }
};

newMethod.makeExample();

const options = {
  color: {
    bg: "crimson",
    border: "coral",
  },
};

const { bg, color } = options.color;

console.log(bg);