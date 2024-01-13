import getSearchShow from './searchShow.js';

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-items');
const content = document.querySelector('#content');

function closeMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}

function toggleHamburger() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
}

function windowClick(event) {
  if (
    !event.target.closest('.hamburger') && !event.target.closest('.nav-items')
  ) {
    closeMenu();
  }
}

const searchBtn = document.querySelector('.search-button');
searchBtn.addEventListener('click', (event) => {
  event.preventDefault();
  content.innerHTML = '';
  getSearchShow();
  closeMenu();
});

export { toggleHamburger, windowClick, closeMenu };