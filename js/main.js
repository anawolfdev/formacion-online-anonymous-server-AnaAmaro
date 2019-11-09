'use strict';

const menuBtn = document.querySelector('.nav-trigger');
const closeBtn = document.querySelector('.nav-close');
const nav = document.querySelector('.nav');

function open() {
 nav.classList.remove('nav');
 menuBtn.classList.add('nav');
 closeBtn.classList.remove('nav');
}

function close() {
 nav.classList.add('nav');
 menuBtn.classList.remove('nav');
}

menuBtn.addEventListener('click', open);
closeBtn.addEventListener('click', close);