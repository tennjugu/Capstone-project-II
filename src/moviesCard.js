import showMovieDetails from './movieDetails.js';
import toggleLike from './likes.js';

const content = document.querySelector('#content');

function createSearchResultPoster(show) {
  const searchResultPoster = document.createElement('div');
  searchResultPoster.classList.add('search-result-poster');
  const posterImg = document.createElement('img');
  let posterImgSrc = './img/placeholder.jpg';

  if (show.image) {
    posterImgSrc = show.image.medium;
  } else if (show.show && show.show.image) {
    posterImgSrc = show.show.image.medium;
  }
  posterImg.src = posterImgSrc;

  posterImg.alt = 'Poster';
  posterImg.id = 'poster';
  searchResultPoster.appendChild(posterImg);
  searchResultPoster.addEventListener('click', () => {
    content.style.alignItems = 'normal';
    content.innerHTML = '';
    showMovieDetails(content, show);
  });

  return searchResultPoster;
}

function createAppend(content, show) {
  const searchResultDiv = document.createElement('div');
  searchResultDiv.classList.add('search-result');

  const posterImg = createSearchResultPoster(show);

  const title = document.createElement('h3');
  title.textContent = show.name || (show.show.name) || 'Title N/A';
  title.classList.add('title');
  title.id = 'title';

  const searchResultName = document.createElement('div');
  searchResultName.classList.add('search-result-name');
  searchResultName.appendChild(title);

  const reactionDiv = document.createElement('div');
  reactionDiv.classList.add('reaction-action');

  const reaction = document.createElement('div');
  reaction.classList.add('reaction');

  const likesDiv = document.createElement('div');
  likesDiv.classList.add('likes');

  const likeIcon = document.createElement('img');
  likeIcon.src = './assets/like.png';
  likeIcon.alt = 'Like';

  const likeText = document.createElement('div');
  likeText.textContent = 'Like';

  likesDiv.appendChild(likeIcon);
  likesDiv.appendChild(likeText);

  const likesCounter = document.createElement('div');
  likesCounter.classList.add('counter');
  likesCounter.textContent = '';

  reaction.appendChild(likesDiv);
  reaction.appendChild(likesCounter);

  const actionsDiv = document.createElement('div');
  actionsDiv.classList.add('actions');

  const commentButton = document.createElement('button');
  commentButton.textContent = 'Comment';
  commentButton.classList.add('comment');

  const reservationButton = document.createElement('button');
  reservationButton.textContent = 'Reservations';
  reservationButton.classList.add('reservation');

  actionsDiv.appendChild(commentButton);
  actionsDiv.appendChild(reservationButton);

  reactionDiv.appendChild(reaction);
  reactionDiv.appendChild(actionsDiv);

  searchResultDiv.appendChild(posterImg);
  searchResultDiv.appendChild(searchResultName);
  searchResultDiv.appendChild(reactionDiv);

  content.appendChild(searchResultDiv);

  likesDiv.addEventListener('click', () => {
    toggleLike(likesDiv, likesCounter);
  })
}

export default createAppend;