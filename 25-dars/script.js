"use strict";

const title = document.getElementById("title");

title.classList.toggle("classH1");

const btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  // btn.style.padding = "8px 16px";
  // btn.style.border = "none";
  // btn.style.outline = "none";
  // btn.style.backgroundColor = "crimson";
  // btn.style.color = "white";
  // btn.style.margin = "20px";
  // btn.style.cursor = "pointer";
  btn.style.cssText = "padding: 8px 16px; border: none;background-color: teal; color: white; margin-top: 20px";
});

console.log(btns);