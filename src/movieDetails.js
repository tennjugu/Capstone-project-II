import {
  createCommentLogs, generateCommentForm, addCommentToComments, initializeComments,
} from './comment.js';
import {
  generateReservationForm, createReservationLogs, addReserveToReservation, initializeReservation,
} from './reservation.js';

function createFullDetailsContainer() {
  const fullDetailsContainer = document.createElement('div');
  fullDetailsContainer.className = 'full-details';
  return fullDetailsContainer;
}

function createImageElement(movieDetails) {
  const img = document.createElement('img');
  let imgSrc = './img/placeholder.jpg';

  if (movieDetails.image) {
    imgSrc = movieDetails.image.medium;
  } else if (movieDetails.show.image) {
    imgSrc = movieDetails.show.image.medium;
  }

  img.src = imgSrc;
  img.alt = 'show poster';

  return img;
}

function createShowIdElement(movieDetails) {
  const showId = document.createElement('h1');
  showId.className = 'showId';
  showId.style.display = 'none';
  showId.textContent = movieDetails.id || movieDetails.show.id;
  return showId;
}

function createShowTitleElement(movieDetails) {
  const showTitle = document.createElement('h1');
  showTitle.className = 'showTitle';
  showTitle.textContent = movieDetails.name || movieDetails.show.name;
  return showTitle;
}

function createYearElement(movieDetails) {
  const year = document.createElement('h3');
  year.className = 'year';
  year.textContent = `Ended: ${movieDetails.ended || movieDetails.show.ended || 'N/A'}`;
  return year;
}

function createGenreElement(movieDetails) {
  const genre = document.createElement('h3');
  genre.className = 'genre';
  let genreText = 'Genres N/A';

  if (movieDetails.genres) {
    genreText = movieDetails.genres.join(', ');
  } else if (movieDetails.show && movieDetails.show.genres) {
    genreText = movieDetails.show.genres.join(', ');
  }

  genre.textContent = genreText;
  return genre;
}

function createLanguageElement(movieDetails) {
  const language = document.createElement('h3');
  language.className = 'language';
  language.textContent = `Language: ${movieDetails.language || movieDetails.show.language || 'N/A'}`;
  return language;
}

function createRatingElement(movieDetails) {
  const rating = document.createElement('h3');
  rating.className = 'rating';
  let ratingText = 'Rating: N/A';

  if (movieDetails.rating && movieDetails.rating.average !== null) {
    ratingText = `Rating: ${movieDetails.rating.average}/10`;
  } else if (movieDetails.show.rating && movieDetails.show.rating.average !== null) {
    ratingText = `Rating: ${movieDetails.show.rating.average}/10`;
  }
  rating.textContent = ratingText;
  return rating;
}

function createShowSummaryElement(movieDetails) {
  const showSummary = document.createElement('div');
  showSummary.className = 'show-summary';

  const plotTitle = document.createElement('h2');
  plotTitle.className = 'plot';
  plotTitle.textContent = 'Plot Summary';

  const summary = document.createElement('div');
  summary.className = 'summary';
  summary.innerHTML = movieDetails.summary || movieDetails.show.summary || 'N/A';

  showSummary.appendChild(plotTitle);
  showSummary.appendChild(summary);

  return showSummary;
}

function createShowInfoElement(movieDetails) {
  const showInfo = document.createElement('div');
  showInfo.className = 'show-info';

  const showInfos = [
    createShowIdElement(movieDetails),
    createShowTitleElement(movieDetails),
    createYearElement(movieDetails),
    createGenreElement(movieDetails),
    createLanguageElement(movieDetails),
    createRatingElement(movieDetails),
    createShowSummaryElement(movieDetails),
  ];

  for (let i = 0; i < showInfos.length; i += 1) {
    showInfo.appendChild(showInfos[i]);
  }

  return showInfo;
}
function createImageCard(movieDetails) {
  const imageCard = document.createElement('div');
  imageCard.className = 'image-card';

  const img = createImageElement(movieDetails);
  const showInfo = createShowInfoElement(movieDetails);

  imageCard.appendChild(img);
  imageCard.appendChild(showInfo);

  return imageCard;
}

function showMovieDetails(content, movieDetails) {
  const fullDetailsContainer = createFullDetailsContainer();
  const imageCard = createImageCard(movieDetails);
  const commentLogSection = createCommentLogs();
  const commentSection = generateCommentForm();
  const reserveLogSection = createReservationLogs();
  const reserveSection = generateReservationForm();

  fullDetailsContainer.appendChild(imageCard);
  fullDetailsContainer.appendChild(commentLogSection);
  fullDetailsContainer.appendChild(commentSection);
  fullDetailsContainer.appendChild(reserveLogSection);
  fullDetailsContainer.appendChild(reserveSection);
  content.appendChild(fullDetailsContainer);

  initializeComments();
  initializeReservation();

  const commentSubmit = document.querySelector('.comment-form');
  commentSubmit.addEventListener('submit', (event) => {
    const username = document.querySelector('#comment-username');
    const commentEntered = document.querySelector('#comment-insights');
    event.preventDefault();
    addCommentToComments();
    username.value = '';
    commentEntered.value = '';
  });

  const reserveSubmit = document.querySelector('.reservation-form');
  reserveSubmit.addEventListener('submit', (event) => {
    const reserveName = document.querySelector('#reservation-name');
    const startDate = document.querySelector('#start-date');
    const endDate = document.querySelector('#end-date');
    event.preventDefault();
    addReserveToReservation();
    reserveName.value = '';
    startDate.value = '';
    endDate.value = '';
 });
}

export default showMovieDetails;