import { toggleHamburger, windowClick, closeMenu } from './toggleMenu.js';
import displayHomeResults from './home.js';
import preloader from './loader.js';

preloader();
displayHomeResults();

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', toggleHamburger);

navLinks.forEach((menu) => menu.addEventListener('click', closeMenu));

window.addEventListener('click', windowClick);