import { useState } from 'react';
import MoviesCSS from './css/Movies.module.css';

export const SearchForm = ({ value, submitFunction }) => {
  const [searchData, setSearchData] = useState(value);

  const handleChange = event => {
    setSearchData(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    submitFunction(searchData);
    event.currentTarget.reset();
  };

  return (
    <form className={MoviesCSS.MovieSearch} onSubmit={handleSubmit}>
      <input
        className={MoviesCSS.MovieSearchInput}
        name="movieNameInput"
        type="text"
        value={searchData}
        onChange={handleChange}
      />
      <button className={MoviesCSS.MovieSearchSubmit} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
