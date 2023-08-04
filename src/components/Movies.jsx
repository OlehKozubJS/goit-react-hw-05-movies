import { fetchMovieByName } from './js/fetchMovies';
import { useEffect, useState } from 'react';

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();

    event.currentTarget.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="movieNameInput" type="text" />
        <button type="submit">Search</button>
      </form>
      <div></div>
    </div>
  );
};

export default Movies;
