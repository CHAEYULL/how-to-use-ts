"use strict";
var navBtn = document.querySelector('.navbar-toggler');
var navList = document.querySelector('.list-group');
if (navBtn instanceof HTMLElement) {
    navBtn.addEventListener('click', function () {
        if (navList instanceof HTMLElement) {
            navList.classList.toggle('display-none');
        }
    });
}
