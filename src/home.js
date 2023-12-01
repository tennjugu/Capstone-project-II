async function displayHomeResults() {
  const url = 'https://api.tvmaze.com/shows';
  try {
    const response = await fetch(url);
    const loadedTvShows = await response.json();
    return loadedTvShows;
  } catch (error) {
    return error;
  }
}

export default displayHomeResults;