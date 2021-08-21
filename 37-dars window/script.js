"use strict";

const box = document.querySelector(".box"),
      btn = document.querySelector("button");

btn.addEventListener('click', () => {
  // box.style.height = box.scrollHeight + "px";

  if(box.scrollTop > 30) {
    console.log("Hello");
  }

});