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
    const tabContentParent = document.querySelector('.tabheader__items'),
        tabButtons = document.querySelectorAll('.tabheader__item'),
        tabContent = document.querySelectorAll('.tabcontent');

    function hideTabContent() {
        tabContent.forEach((item) => {
            item.style.display = "none";
        });
        tabButtons.forEach((item) => {
            item.classList.remove("tabheader__item_active");
        });
    }

    function showTabContent(i = 0) {
        tabContent[i].style.display = "block";
        tabButtons[i].classList.add("tabheader__item_active");
    }

    hideTabContent();
    showTabContent();

    tabContentParent.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains("tabheader__item")) {
            tabButtons.forEach((item, i) => {
                if (event.target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

     // MODAL 
 
    //  independent work

    // const feedback = document.querySelectorAll('.btn'),
    //     modals = document.querySelector('.modal'),
    //     closeModal = document.querySelector('.modal__close');

    // feedback.forEach((item) => {
    //     item.addEventListener('click', () => {
    //         console.log(feedback);
    //         modals.style.display = "block";
    //     });
    // });

    // closeModal.addEventListener('click', () => {
    //     modals.style.display = "none";
    // });

    // 2-work

    const allBtn = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          closeModel = document.querySelector('[data-close]');
    
    function showModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimer);
    }

    function hideModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    allBtn.forEach((item) => {
        item.addEventListener('click', showModal);
    });

    closeModel.addEventListener('click', hideModal);

    modal.addEventListener('click', (e) =>{
        if(e.target === modal) {
            hideModal();
        }
    });

    const modalTimer = setTimeout(showModal, 5000);

    function showMyModalByScrolling() {
        if( window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight ){
            showModal();
            window.removeEventListener('scroll', showMyModalByScrolling);
        }
    }

    window.addEventListener('scroll', showMyModalByScrolling);

    // DATA
    const deadline = "2021-09-13";

    function getTime(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(total / (1000 * 60 * 60 * 24)),
            hours = Math.floor((total / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((total / 1000 / 60) % 60),
            seconds = Math.floor((total / 1000) % 60);
        return {
            total: total,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = document.querySelector('#days'),
            hours = document.querySelector('#hours'),
            minutes = document.querySelector('#minutes'),
            seconds = document.querySelector('#seconds');
        updateClock();
        function updateClock() {
            const time = getTime(endtime);
            days.innerHTML = time.days;
            hours.innerHTML = time.hours;
            minutes.innerHTML = time.minutes;
            seconds.innerHTML = time.seconds;
        }
    }

});