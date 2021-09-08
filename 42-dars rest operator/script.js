"use strict";

// // rest operator
// function  mySkills (lang, cms, ...rest) {
//   console.log(lang, cms, rest);
//   rest.forEach((item, i) => {
//     console.log(`Extra skills ${item}`);
//   });
// }
// mySkills("JavaScript", "Html", "Phyton, PHP, Drupal");

// // default value

// function calc (a, b = 2) { //manabu joyda argumntini ES6 dan boshlab default qiymat shunday berilgan
//   // b = b || 2; // ES5 da esa default qiymat manashunday berilgan
//   console.log(a + b);
// }
// calc(7); 

const root = document.querySelector('.root');

function div(...classes) {
  const elem = document.querySelector("div");
  classes.forEach((item) => {
    elem.classList.add(item);
  });
  root.append(elem);
}

div('width', 'height', 'bg');