"use strict";

const box = document.querySelector(".box"),
      btn = document.querySelector("button"),
      nav = document.querySelector("nav");

btn.addEventListener('click', () => {
  // box.style.height = box.scrollHeight + "px";

  if(box.scrollTop > 30) {
    console.log("Hello");
  }

});

window.addEventListener('scroll', () => {
  if(window.scrollY > 300){
    nav.classList.add("fixed");
  } else {
    nav.classList.remove("fixed");
  }
});