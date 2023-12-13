import createAppend from './moviesCard.js';

const content = document.querySelector('#content');
async function getShowsList() {
  const url = 'https://api.tvmaze.com/shows';
  try {
    const response = await fetch(url);
    const loadedTvShows = await response.json();
    loadedTvShows.forEach((show) => {
      createAppend(content, show);
    });
    return loadedTvShows;
  } catch (error) {
    return error;
  }
}

const tvshow = document.querySelectorAll('#tvshows');

function displayTvShows() {
  tvshow.forEach((tvshows) => {
    tvshows.addEventListener('click', (e) => {
      e.preventDefault();
      content.innerHTML = '';
      getShowsList();
    });
  });
}

export default displayTvShows;