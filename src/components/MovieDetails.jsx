import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const MovieDetails = () => {
  return (
    <div>
      <Suspense fallback={<div>...Loading</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
