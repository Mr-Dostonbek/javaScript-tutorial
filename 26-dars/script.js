"use strict";

const parentDiv = document.querySelector(".parent");

const div = document.createElement("div");
div.classList.add("box");
div.style.backgroundColor = "yellow";

const circle = document.querySelectorAll(".circle");

// circle[2].remove(); // koradtilgan elamentni ochiradi
// circle[0].after(div); // korsatilgan elementdan oldin qoshiladi
// circle[2].before(div); // korsatilgan elementdan keyin qoshiladi

// element yaratib uni joylashtirish (prentDiv ni oxiriga qoshadi)
// parentDiv.append(div);

// prepend esa ona elementni xiriga elemantni qoshadi
// parentDiv.prepend(div);

console.log(div);