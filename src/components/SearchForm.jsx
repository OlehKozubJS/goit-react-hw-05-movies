import { useState } from 'react';
import MoviesCSS from './css/Movies.module.css';

export const SearchForm = ({ submitFunction }) => {
  const [searchData, setSearchData] = useState('');

  const handleChange = event => {
    setSearchData(event.target.value);
    console.log(searchData);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(searchData);
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
