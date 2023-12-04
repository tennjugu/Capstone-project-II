import createAppend from './moviesCard.js';

const content = document.querySelector('#content');
async function getShowsList() {
  const url = 'https://api.tvmaze.com/shows';
  try {
    console.log('Fetching TV shows...');
    const response = await fetch(url);
    const loadedTvShows = await response.json();
    loadedTvShows.forEach((show) => {
      createAppend(content, show);
    });
    console.log(loadedTvShows);
    return loadedTvShows;
  } catch (error) {
    console.log(error);
    return error;
  }
}

function displayTvShow() {
  const tvshow = document.querySelector('#tvshows');
  tvshow.addEventListener('click', (e) => {
    e.preventDefault();
    content.innerHTML = '';
    getShowsList();
  });
}

export default displayTvShow();