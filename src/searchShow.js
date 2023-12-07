import { createAppend } from './createhtmlAndApend';

const content = document.getElementById('content');

function displayError(message) {
  const errorElement = document.createElement('div');
  errorElement.classList.add('error-message');
  errorElement.textContent = message;
  errorElement.style.textAlign = 'center';
  errorElement.style.fontSize = '2rem';
  content.appendChild(errorElement);
}

async function fetchedData(response) {
  const result = await response.json();
  if (response.ok && result.length === 0) {
    displayError('No item found.');
    return 'No item found.';
  }
  if (response.ok) {
    result.forEach((show) => {
      createAppend(content, show);
    });
    return result;
  }
  const errorMessage = `Error in fetchedData: ${result.Error}`;
  displayError(errorMessage);
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
    displayError(noInputMessage);
  } catch (error) {
    const errorMessage = `${error.message}, unable to complete request.`;
    displayError(errorMessage);
    return error.message;
  }
  return null;
}

export default getSearchShow;