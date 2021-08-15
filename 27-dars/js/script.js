/* -=- Darsga Topshiriq

1) list of news knopkani ochirip tashlang

2) 'BBC' yozuvni orniga 'UzNews'ga almashtiring va rangini oziz istagan rangni tanglang

3) glavniy fon dagi rasimni ozgartiring. Rasim joylashuvi 'img' papkani ichida

4) bizlarda yangiliklardan tashkil topgan massiv bor. 
Yangiliklarni massiv yordamida chiqaring. Html dan ochirip Faqat JS code yozip.

5) yangiliklarni oldiga ularni raqamlarini qoyip chiqimg (1, 2, 3)

6) read more knopkaga border-radius style qoshing

*/

"use strict";

const promoBtn = document.querySelector(".promo__btn");
const promoGenre = document.querySelector(".promo__genre");
const promoBg = document.querySelector(".promo__bg");
const promoInteractiveList = document.querySelector(".promo__interactive-list");
const btn = document.querySelector(".promo__more");

const news = [
  "FOOTBALL",
  "BASKETBALL",
  "UFC",
  "BOX",
  "AMERICAN FOOTBAL IN EU...",
];


promoBtn.remove();

promoGenre.innerHTML = "UzNews";

promoBg.style.backgroundImage = "url('../img/2.jpg')";

promoInteractiveList.innerHTML = "";
news.forEach((item, index) => {
  promoInteractiveList.innerHTML += `
  <li class="promo__interactive-item">
    ${index +1} ${item}
    <div class="delete"></div>
  </li>
  `;
});

btn.style.borderRadius = "3px";