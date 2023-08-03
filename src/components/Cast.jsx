import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Cast = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Cast;
