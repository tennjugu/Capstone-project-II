export function createAppend(content, show) {
    const searchResultDiv = document.createElement('div');
    searchResultDiv.classList.add('search-result');
  
    const posterImg = document.createElement('img');
    posterImg.src = show.image ? show.image.medium : (show.show.image ? show.show.image.medium : './img/placeholder.jpg');
    posterImg.alt = 'Poster';
    posterImg.id = 'poster';
  
    const title = document.createElement('h3');
    title.textContent = show.name || (show.show.name) || 'Title N/A';
    title.classList.add('title');
    title.id = 'title';
    
    const searchResultPoster = document.createElement('div');
    searchResultPoster.classList.add('search-result-poster');
    searchResultPoster.appendChild(posterImg);
  
    const searchResultName = document.createElement('div');
    searchResultName.classList.add('search-result-name');
    searchResultName.appendChild(title);
}