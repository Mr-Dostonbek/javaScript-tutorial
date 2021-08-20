"use strict";

const btn = document.querySelector(".crimson");

function btnAnimation() {

  const box = document.querySelector(".box");
  let pos = 0;
  const id = setInterval(animationFrame, 100);

  function animationFrame() {
    if(pos === 294) {
      clearInterval(id);
    }else {
      pos++;
      box.style.left = pos + "px";
      box.style.top = pos + "px";
    }
    console.log("Hi");
  }
}

btn.addEventListener('click', btnAnimation);



































// btn.addEventListener('click',() => {
//   btn.classList.toggle("btn1");
// });

// let timerId,
//     i = 0;

// btn.addEventListener('click', () => {

//   // const timer = setTimeout(() => {
//   //   console.log("Hello World");
//   // }, 2000);

//   timerId = setInterval(() => {
//     i++;
//     console.log(i);
//     if(i===5){
//       clearInterval(timerId);
//     }
//   }, 1000);

// });

// let id = setTimeout(function log() {
//   console.log("Hello World");
//   id = setTimeout(log, 1000);
// }, 1000);
