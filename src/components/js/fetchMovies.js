import axios from 'axios';

const API_KEY = 'e5eae3e86944a38d68a9b48044e5baf0';
const URL = 'https://api.themoviedb.org/3/';

export const fetchFavouriteMovies = async () => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    time_window: 'day',
  });
  const response = await axios.get(URL + 'trending/movie/day?' + searchParams);
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
  });
  const response = await axios.get(URL + `movie/${id}?` + searchParams);
  return await response.data;
};

export const fetchMovieCredits = async id => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
  });
  const response = await axios.get(URL + `movie/${id}/credits?` + searchParams);
  return await response.data;
};

export const fetchMovieReviews = async id => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
  });
  const response = await axios.get(URL + `movie/${id}/reviews?` + searchParams);
  return await response.data;
};
