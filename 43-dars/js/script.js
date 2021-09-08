"use strict";

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

    const tabs = document.querySelectorAll('.tabheader__item'),
        tabContent = document.querySelectorAll('.tabcontent'),
        headerParents = document.querySelector('.tabheader__items');

});