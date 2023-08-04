import axios from 'axios';

export async function fetchMovies() {
  const response = await axios.get(
    'https://api.themoviedb.org/3/search/movie?api_key=e5eae3e86944a38d68a9b48044e5baf0&include_adult=false&language=en-US&page=1'
  );
  console.log(response.data);
  return await response.data;
}

// 'https://api.themoviedb.org/3/trending/all/day?api_key=e5eae3e86944a38d68a9b48044e5baf0'
