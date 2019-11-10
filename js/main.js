'use strict';

const openBtn = document.querySelector('.nav-trigger');
const closeBtn = document.querySelector('.nav-close');
const nav = document.querySelector('.nav');

function open() {
 nav.classList.remove('js-hidden');
 openBtn.classList.add('js-hidden');
 closeBtn.classList.remove('js-hidden');
}

function close() {
 nav.classList.add('js-hidden');
 openBtn.classList.remove('js-hidden');
}

openBtn.addEventListener('click', open);
closeBtn.addEventListener('click', close);