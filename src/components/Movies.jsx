import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const Movies = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Movies;
