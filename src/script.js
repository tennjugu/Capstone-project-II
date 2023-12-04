import { toggleHamburger, windowClick, closeMenu } from './toggleMenu.js';
import preloader from './loader.js';
import displayHomeResults from './home.js';
import displayTvShow from './tvShows.js'

preloader();
displayHomeResults();
displayTvShow();

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', toggleHamburger);

navLinks.forEach((menu) => menu.addEventListener('click', closeMenu));

window.addEventListener('click', windowClick);