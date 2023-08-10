import MoviesCSS from './css/Movies.module.css';

export const SearchForm = ({ value, submitFunction }) => {
  const handleSubmit = event => {
    event.preventDefault();
    submitFunction(event.currentTarget.elements.movieNameInput.value);
    event.currentTarget.reset();
  };

  return (
    <form className={MoviesCSS.MovieSearch} onSubmit={handleSubmit}>
      <input
        className={MoviesCSS.MovieSearchInput}
        name="movieNameInput"
        type="text"
        value={value}
      />
      <button className={MoviesCSS.MovieSearchSubmit} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;