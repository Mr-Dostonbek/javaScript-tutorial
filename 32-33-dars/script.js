"use strict";

// const btns = document.querySelectorAll("button");

// console.log(btns[0].classList.length); // buttonlarni class larini sonini chiqaradi
// console.log(btns[0].classList.item(0)); // buttonni index i berilsa classlarini chiqaradi
// console.log(btns[1].classList.add("blue")); // class qoshadi
// console.log(btns[0].classList.remove("crimson")); // class ochiradi

// console.log(btns[0].classList.toggle("blue")); // class lari royxatida bolsa ochiradi bolmasa qoshadi


// btns[0].addEventListener('click', () => {
  // if(!btns[0].classList.contains("crimson")) {
  //   btns[0].classList.add("crimson");
  // } else{
  //   btns[0].classList.remove("crimson");
  // }

  // btns[0].classList.toggle("blue");
// });


// 32-dars Delegatsiya

const wrapper = document.querySelector(".wrapper"),
      btns = document.querySelectorAll("button");

// Delegatsiya
wrapper.addEventListener("click", (event) => {
  // if(event.target && event.target.classList.contains("crimson")){
  //   console.log("Click");
  // }

  if(event.target && event.target.matches("button.crimson")) {
    console.log("Click");
  }

});

const btn = document.createElement("button");
btn.classList.add("crimson");
wrapper.append(btn);