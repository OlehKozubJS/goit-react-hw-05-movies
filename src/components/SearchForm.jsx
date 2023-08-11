import { useState } from 'react';
import MoviesCSS from './css/Movies.module.css';
import propTypes from 'prop-types';

export const SearchForm = ({ value, onSubmit }) => {
  const [searchData, setSearchData] = useState(value);

  const handleChange = event => {
    setSearchData(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(searchData);
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

SearchForm.propTypes = {
  value: propTypes.string.isRequired,
  onSubmit: propTypes.func.isRequired,
};

export default SearchForm;
