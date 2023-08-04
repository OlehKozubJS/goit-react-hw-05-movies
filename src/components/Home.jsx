import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <h1>Trending Today</h1>
      <ul></ul>
    </div>
  );
};

export default Home;
