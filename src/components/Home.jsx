import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const Home = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Home;
