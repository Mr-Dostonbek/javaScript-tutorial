"use strict";

// window.addEventListener('DOMContentLoaded', () => {

//     // LOADER
//     const loader = document.querySelector('.loader');
//     setTimeout(function() {
//         loader.style.opacity = "0";
//         setTimeout(function() {
//             loader.style.display = "none";
//         }, 1500);
//     }, 2000);

//     // TABS

//     const tabs = document.querySelectorAll('.tabheader__item'),
//         tabContent = document.querySelectorAll('.tabcontent'),
//         headerParents = document.querySelector('.tabheader__items');

//     function hideTabContent() {
//         tabContent.forEach((item) => {
//             item.style.display = "none";
//         });
//         tabs.forEach((item) => {
//             item.classList.remove("tabheader__item_active");
//         });
//     }

//     function showTabContent(i = 0) {
//         tabContent[i].style.display = "block";
//         tabs[i].classList.add("tabheader__item_active");
//     }

//     hideTabContent();
//     showTabContent();

//     headerParents.addEventListener('click', (e) => {
//         if (e.target && e.target.classList.contains("tabheader__item")) {
//             tabs.forEach((item, i) => {
//                 if (e.target == item) {
//                     hideTabContent();
//                     showTabContent(i);
//                 }
//             });
//         }
//     });

// });
window.addEventListener('DOMContentLoaded', () => {

    // LOADER
    const loader = document.querySelector('.loader');
    setTimeout(function() {
        loader.style.opacity = "0";
        setTimeout(function() {
            loader.style.display = "none";
        }, 1500);
    }, 2000);

    // TABS
    const tabContentParent = document.querySelector('.tabheader__items'),
        tabButton = document.querySelectorAll('.tabheader__item'),
        tabContent = document.querySelectorAll('.tabcontent');

    function hideTabContent() {
        tabContent.forEach((item) => {
            item.style.display = "none";
        });
        tabButton.forEach((item) => {
            item.classList.remove("tabheader__item_active");
        });
    }

    function showTabContent(i = 0) {
        tabContent[i].style.display = "block";
        tabButton[i].classList.add("tabheader__item_active");
    }

    hideTabContent();
    showTabContent();



});