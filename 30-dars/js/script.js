/* -=> Darsga Topshiriq

1) Inputni to'ldirgandan so'ng va "Tasdiqlash" tugmachasini bosgandan so'ng -
ro'yxatga yangi yangilik qo'shilish kerak. Sahifa qayta yuklanmasligi kerak.
Yangi yangilik news massivga qo'shilishi kerak.
Input qiymatini olish uchun biz uni input.value dan foydalanamiz;
P.S. Muammoni hal qilish uchun bir nechta variantlar mavjud, faqat ishlidgoni kerak

2) Agar yangilikni nomi 21 belgidan ko'p bo'lsa - uni kesib oling va uchta nuqta qo'shing

3) Axlat qutisini bosganingizda - yangilik ro'yxatdan o'chirilishi kerak (qiyin)

4) Agarda inputda checkboxda beligisi belgilangan bo'lsa "Is it favourite?" 
consolega "sevimli yangilik qo'shilmoqda"

5) Filmlar alfavit bo'yicha tartiblangan bo'lishi kerak*/

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const promoBtn = document.querySelector(".promo__btn"),
    promoGenre = document.querySelector(".promo__genre"),
    promoBg = document.querySelector(".promo__bg"),
    promoInteractiveList = document.querySelector(".promo__interactive-list"),
    btn = document.querySelector(".promo__more"),
    addForm = document.querySelector(".add"),
    addInput = document.querySelector(".adding__input"),
    checkBox = addForm.querySelector("[type='checkbox']");

  const news = [
    "FOOTBALL",
    "BASKETBALL",
    "UFC",
    "BOX",
    "AMERICAN FOOTBAL IN EU...",
  ];

  const sortArr = (arr) => {
    arr.sort();
  };
  
  addForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let newFilm = addInput.value;
    const favourite = checkBox.checked;

    if( newFilm) {
      
      if(newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 21)}...`;
      }

      if(favourite){
        console.log("Sevimli film qoshilmoqda!!");
      }

      news.push(newFilm);
      sortArr(news);
      createNewsList(news, promoInteractiveList);
    }

    event.target.reset(); // qoshgandan keyin inputning qiymatini ochirish 1-usul
    addInput.value = ""; // bu esa 2-usul

  });

  promoBtn.remove();

  promoGenre.innerHTML = "UzNews";

  promoBg.style.backgroundImage = "url('../img/2.jpg')";

  function createNewsList( newList , parent ) {

    parent.innerHTML = "";
    sortArr(news);

    newList.forEach((item, index) => {
      promoInteractiveList.innerHTML += `
      <li class="promo__interactive-item">
        ${index +1} ${item}
        <div class="delete"></div>
      </li>
      `;
    });

    document.querySelectorAll(".delete").forEach((btn, i) => {
      btn.addEventListener("click", () => {
        btn.parentElement.remove();
        news.splice(i, 1);

        createNewsList(newList , parent);
      });
    });

  }

  createNewsList(news, promoInteractiveList);

  btn.style.borderRadius = "3px";
});

