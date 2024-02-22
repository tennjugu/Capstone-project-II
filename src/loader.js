/* eslint linebreak-style: ["error", "windows"] */

function preloader() {
  window.addEventListener('load', () => {
    const loader = document.querySelector('#loader');

    loader.classList.add('loader-hidden');

    loader.addEventListener('transitionend', () => {
      loader.style.display = 'none';
    });
  });
}

export default preloader;