// https://api.themoviedb.org/3/movie/550?api_key=e5eae3e86944a38d68a9b48044e5baf0
// /trending/get-trending
// /search/search-movies
// /movies/get-movie-details
// /movies/get-movie-credits
// /movies/get-movie-reviews
import axios from 'axios';

export async function fetchImages(searchResult, pageNumber) {
  const searchParams = new URLSearchParams({
    key: 'e5eae3e86944a38d68a9b48044e5baf0',
    q: searchResult,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: pageNumber,
    per_page: 12,
  });

  const response = await axios.get(
    'https://api.themoviedb.org/3/movie/550?' + searchParams
  );
  return await response.data;
}
