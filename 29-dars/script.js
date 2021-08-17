"use strict";

const wrapper = document.querySelector(".wrapper");
const btn = wrapper.querySelector("[data-currentBtn='1']");
const a = wrapper.querySelector(".a");

// btn.addEventListener(
//   "click",
//   () => {
//     console.log("Hi");
//   },
//   { once: true } // knopka bir marta ishlidi
// );

// console.log(document.documentElement);

// console.log(document.childNodes);

// console.log(document.body.childNodes);

// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);

// console.log(a.parentNode); // bola dividan foydalanib otasinni ushlab olish bunda orada peobellar bolsa chiqarmaydi

// console.log(a.parentElement); // bola dividan foydalanib otasinni ushlab olish bunda orada peobellar bolsa ham chiqaraveradi

// console.log(a.nextSibling); //ortadagi buttondan foydalanib ozidan keyingiga murojaat qilish buda probellar ha kirib qoladi

// console.log(btn.nextElementSibling); //ortadagi buttondan foydalanib ozidan keyingiga element olish


// childNodes dagi massivdan probellarni ochirib tashlash
// for(let i of document.body.childNodes) {
//   if(i.nodeName === "#text") {
//     continue;
//   }
//   console.log(i);
// }


// buttonlarni massiv qilib aylantirish
const btns = wrapper.querySelectorAll("button");

btns.forEach(( btn, index ) => {
  btn.addEventListener("click", () => {
    console.log("Hii " + index);
  });
});