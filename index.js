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
var imgContainer = document.querySelector('.image-group');
var nextBtn = document.querySelector('#next');
var backBtn = document.querySelector('#back');
var imgWrapper = document.querySelector('.slide-container');
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
var currentTargetId = 0;
if (imgContainer instanceof HTMLElement) {
    imgContainer.addEventListener('click', function (e) {
        console.log(e.target);
        console.log(currentTargetId);
        if (e.target == image1) {
            currentTargetId = 0;
            if (imgWrapper instanceof HTMLElement) {
                imgWrapper.style.transform = "translateX(-".concat(currentTargetId, "00vw)");
            }
        }
        if (e.target == image2) {
            currentTargetId = 1;
            if (imgWrapper instanceof HTMLElement) {
                imgWrapper.style.transform = "translateX(-".concat(currentTargetId, "00vw)");
            }
        }
        if (e.target == image3) {
            currentTargetId = 2;
            if (imgWrapper instanceof HTMLElement) {
                imgWrapper.style.transform = "translateX(-".concat(currentTargetId, "00vw)");
            }
        }
        if (e.target == nextBtn) {
            if (imgWrapper instanceof HTMLElement) {
                if (currentTargetId == 0) {
                    currentTargetId++;
                    imgWrapper.style.transform = "translateX(-".concat(currentTargetId, "00vw)");
                }
                else if (currentTargetId == 1) {
                    currentTargetId++;
                    imgWrapper.style.transform = "translateX(-".concat(currentTargetId, "00vw)");
                }
            }
        }
        if (e.target == backBtn) {
            if (imgWrapper instanceof HTMLElement) {
                if (currentTargetId == 2) {
                    currentTargetId--;
                    imgWrapper.style.transform = "translateX(-".concat(currentTargetId, "00vw)");
                }
                else if (currentTargetId == 1) {
                    currentTargetId--;
                    imgWrapper.style.transform = "translateX(-".concat(currentTargetId, "00vw)");
                }
            }
        }
    });
}
