"use strict";

const box = document.querySelector(".box");
const btn = document.querySelector("#btn");
const input = document.querySelector("form input");
const write = document.querySelector(".write");

input.addEventListener("input", (event) => {
  let i = event.target.value;
  write.innerHTML = i;
});

const collBack = (e) => {
  console.log(e.currentTarget);
};

btn.addEventListener("click", collBack);
box.addEventListener("click", collBack);

// const link = document.querySelector("a");

// let index = 0;
// const callFunc = () => {
//   console.log("Hello World");
//   index++;
//   console.log(index);
//   if(index == 2) {
//     btn.removeEventListener('click', callFunc);
//   }
// };

// btn.addEventListener("click", callFunc);

// link.addEventListener("click", (event) => {
//   event.preventDefault();
//   alert("Hi");
//   console.log(event.target);
// });
