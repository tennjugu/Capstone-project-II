import createAppend from './moviesCard.js';
import displayHomeResults from './home.js';

const content = document.getElementById('content');
const headerSection = document.querySelector('header');
const contentSection = document.querySelector('content');
const footerSection = document.querySelector('footer');
const closeError = document.querySelector('.errorClose');
const errorDialog = document.querySelector('.errorDialog');

function disableMainContent() {
  headerSection.style.pointerEvents = 'none';
  contentSection.style.pointerEvents = 'none';
  footerSection.style.pointerEvents = 'none';
  document.body.style.overflow = 'hidden';
}

function enableMainContent() {
  headerSection.style.pointerEvents = 'auto';
  contentSection.style.pointerEvents = 'auto';
  footerSection.style.pointerEvents = 'auto';
  document.body.style.overflow = 'auto';
}

function showErrorDialog(message) {
  document.querySelector('.errorMessage').innerText = message;
  document.querySelector('.errorDialog').style.display = 'block';
  disableMainContent();
}

async function fetchedData(response) {
  const result = await response.json();
  if (response.ok && result.length === 0) {
    showErrorDialog('No item found.');
    return 'No item found.';
  }
  if (response.ok) {
    result.forEach((show) => {
      createAppend(content, show);
    });
    return result;
  }
  const errorMessage = `Error in fetchedData: ${result.Error}`;
  showErrorDialog(errorMessage);
  return result.Error;
}

async function getSearchShow() {
  try {
    const searchInput = document.getElementById('search').value;
    const url = 'https://api.tvmaze.com/';
    if (searchInput !== '') {
      const response = await fetch(`${url}search/shows?q=${searchInput}`);
      const processedSearch = await fetchedData(response);
      return processedSearch;
    }
    const noInputMessage = 'No search input provided.';
    showErrorDialog(noInputMessage);
  } catch (error) {
    const errorMessage = `${error.message}, unable to complete request.`;
    showErrorDialog(errorMessage);
    return error.message;
  }
  return null;
}

closeError.addEventListener('click', (event) => {
  event.preventDefault();
  errorDialog.style.display = 'none';
  enableMainContent();
  displayHomeResults();
});

export default getSearchShow;