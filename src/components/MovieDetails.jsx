import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const MovieDetails = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
