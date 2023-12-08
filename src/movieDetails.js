// import createAppend from './moviesCard.js';

function showMovieDetails(content, movieDetails) {
  const fullDetailsContainer = document.createElement('div');
  fullDetailsContainer.className = 'full-details';

  const imageCard = document.createElement('div');
  imageCard.className = 'image-card';

  const img = document.createElement('img');
  img.src = movieDetails.image ? movieDetails.image.medium : (movieDetails.show.image ? movieDetails.show.image.medium : './img/placeholder.jpg');
  img.alt = 'show poster';

  const showInfo = document.createElement('div');
  showInfo.className = 'show-info';

  const showId = document.createElement('h1');
  showId.className = 'showId';
  showId.style.display = 'none';
  showId.textContent = movieDetails.id || movieDetails.show.id;

  const showTitle = document.createElement('h1');
  showTitle.className = 'showTitle';
  showTitle.textContent = movieDetails.name || movieDetails.show.name;

  const year = document.createElement('h3');
  year.className = 'year';
  year.textContent = `Ended: ${movieDetails.ended || movieDetails.show.ended || 'N/A'}`;

  const genre = document.createElement('h3');
  genre.className = 'genre';
  genre.textContent = movieDetails.genres ? movieDetails.genres.join(', ') : (movieDetails.show.genres ? movieDetails.show.genres.join(', ') : 'Genres N/A');

  const language = document.createElement('h3');
  language.className = 'language';
  language.textContent = `Language: ${movieDetails.language || movieDetails.show.language || 'N/A'}`;

  const rating = document.createElement('h3');
  rating.className = 'rating';
  rating.textContent = movieDetails.rating?.average ? `Rating: ${movieDetails.rating.average}/10` : (movieDetails.show.rating?.average ? `Rating: ${movieDetails.show.rating.average}/10` : 'Rating: N/A');

  const showSummary = document.createElement('div');
  showSummary.className = 'show-summary';

  const plotTitle = document.createElement('h2');
  plotTitle.className = 'plot';
  plotTitle.textContent = 'Plot Summary';

  const summary = document.createElement('div');
  summary.className = 'summary';
  summary.innerHTML = movieDetails.summary || movieDetails.show.summary || 'Summary N/A';

  showSummary.appendChild(plotTitle);
  showSummary.appendChild(summary);

  const showInfos = [showId, showTitle, year, genre, language, rating, showSummary];
  for (let i = 0; i < showInfos.length; i += 1) {
    showInfo.appendChild(showInfos[i]);
  }

  imageCard.appendChild(img);
  imageCard.appendChild(showInfo);

  fullDetailsContainer.appendChild(imageCard);

  content.appendChild(fullDetailsContainer);
}

// const moviePoster = document.querySelectorAll('search-result-poster');
// const content = document.querySelector('#content');
// moviePoster.forEach((poster) => poster.addEventListener('click', () => {
//   content.style.alignItems = 'normal';
//   content.innerHTML = '';
//   showMovieDetails(content, show);
// }));

// export default showMovieDetails;

const moviePoster = document.querySelectorAll('search-result-poster');
const content = document.querySelector('#content');
moviePoster.forEach((poster) => poster.addEventListener('click', () => {
  console.log('clicked show more');
  content.style.alignItems = 'normal';
  content.innerHTML = '';
  showMovieDetails(content, show);
}));