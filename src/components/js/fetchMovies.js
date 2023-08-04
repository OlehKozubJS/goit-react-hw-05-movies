import axios from 'axios';

const API_KEY = 'e5eae3e86944a38d68a9b48044e5baf0';

export const fetchFavouriteMovies = async () => {
  const searchParams = new URLSearchParams({
    key: API_KEY,
  });
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/all/day'
  );
  return await response.data;
};
