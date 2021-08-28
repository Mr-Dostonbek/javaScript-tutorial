"use strict";

// context this - bu xar doim nimadir narsaga ergashadi
// context thisni 4 xil usulda funksiyalarga bog'lash mumkin

// 1-usul: Oddiy funksiyalarda this = window, agarda "use strict" = undefined
// function showThis(a,b) {
//   console.log(this); // undefined
//   function calc() {
//     console.log(this); // undefined
//     return a + b;
//   }
//   console.log(calc());
// }

// showThis(10,7);

// 2-usul: Context this objectlarda = object
// const obj = {
//   a: 8,
//   b: 12,
//   calc: function() {
//     console.log(this.a + this.b);
//   },
// };

// obj.calc();

// 3-usul: Context this Constructor va Classlarda = Yangi object copy ga teng boladi
// function Car(name, color) {
//   this.name = name;
//   this.color = color;
//   this.hi = function () {
//     console.log("Hi");
//   };
// }

// const mers = new Car("Mers", "black");
// const bmw = new Car("BMW", "White");
// console.log(mers);
// console.log(bmw);
// mers.hi();
// bmw.hi();

// 4-usul: Context this qo`l yordamida ergashtirish: call, apply, bind lar yordamida
function hello (surname) {
  console.log(this);
  console.log(this.name + " " + surname);
}

const person = {
  name: "Dostonbek",
};

hello.call(person, "G'oyipov");
hello.apply(person, ["G'oyipov"]);

function calc (num) {
  return this * num;
}

const double = calc.bind(2);
console.log(double(5));
console.log(double(15));