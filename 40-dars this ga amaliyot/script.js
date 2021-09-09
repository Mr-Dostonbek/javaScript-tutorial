"use strict";

const btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   this.style.backgroundColor = "crimson";
//   this.style.color = "white";
// });

// this collback funksiyada ishlamidi shuning uchun e yani event ishlatuiladi
btn.addEventListener("click", (e) => {
    e.target.style.backgroundColor = "crimson";
    e.target.style.color = "white";
});

// const obj = {
//   num: 8,
//   sayNumber: function () {
//     const say = () => {
//       console.log(this.num); // bu yerda this collback funksiyada ishlamaydi shuning uchun this ishlatilmidi
//     };
//     say();
//   },
// };

// obj.sayNumber();


// Collback funksiyani manashunday qilib yozsa ham bolaveradi

const calc = (a) => a * 2;