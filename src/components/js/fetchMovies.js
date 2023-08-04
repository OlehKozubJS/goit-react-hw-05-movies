import axios from 'axios';

const API_KEY = 'e5eae3e86944a38d68a9b48044e5baf0';
const URL = 'https://api.themoviedb.org/3/';

export const fetchFavouriteMovies = async () => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    time_window: 'day',
  });
  const response = await axios.get(URL + 'trending/all/day?' + searchParams);
  return await response.data;
};

export const fetchMovieByName = async name => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    query: name,
  });
  const response = await axios.get(URL + 'search/movie?' + searchParams);
  return await response.data;
};

export const fetchMovieDetails = async id => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    movie_id: id,
  });
  const response = await axios.get(URL + 'movie?' + searchParams);
  console.log(response.data);
  return await response.data;
};
