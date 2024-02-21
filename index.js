"use strict";
var navBtn = document.querySelector('.navbar-toggler');
var navList = document.querySelector('.list-group');
var loginBtn = document.querySelector('#login');
var loginCloseBtn = document.querySelector('#close');
var loginForm = document.querySelector('.black-bg');
var loginID = document.querySelector('#id');
var loginPassword = document.querySelector('#password');
var submitBtn = document.querySelector('form');
var image1 = document.querySelector('#btn1');
var image2 = document.querySelector('#btn2');
var image3 = document.querySelector('#btn3');
if (navBtn instanceof HTMLElement) {
    navBtn.addEventListener('click', function () {
        if (navList instanceof HTMLElement) {
            navList.classList.toggle('list-group-ani');
        }
    });
}
if (loginBtn instanceof HTMLElement) {
    loginBtn.addEventListener('click', function () {
        if (loginForm instanceof HTMLElement) {
            loginForm.classList.add('display-show');
        }
    });
}
if (loginCloseBtn instanceof HTMLElement) {
    loginCloseBtn.addEventListener('click', function () {
        loginForm === null || loginForm === void 0 ? void 0 : loginForm.classList.remove('display-show');
    });
}
if (submitBtn instanceof HTMLElement) {
    submitBtn.addEventListener('submit', function (e) {
        if (loginID instanceof HTMLInputElement && loginPassword instanceof HTMLInputElement) {
            if (loginID.value.trim() == '' || loginPassword.value.trim() == '') {
                e.preventDefault();
                alert('공백은 안돼.');
                loginID.value == '';
                loginPassword.value == '';
            }
        }
    });
}
