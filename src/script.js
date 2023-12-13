import { toggleHamburger, windowClick, closeMenu } from './toggleMenu.js';
import preloader from './loader.js';
import displayHomeResults from './home.js';
import displayTvShows from './tvShows.js';
import handleClick from './activebtn.js';

preloader();
displayHomeResults();
displayTvShows();
handleClick();

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', toggleHamburger);

navLinks.forEach((menu) => menu.addEventListener('click', closeMenu));

window.addEventListener('click', windowClick);