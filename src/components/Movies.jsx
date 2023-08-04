import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Movies = () => {
  return (
    <div>
      <form>
        <input type="text" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Movies;
