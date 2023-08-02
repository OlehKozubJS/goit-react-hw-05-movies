import { Routes, Route, Link } from 'react-router-dom';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <nav>
        <Link></Link>
      </nav>
      <Routes>
        <Route />
        <Route />
        <Route>
          <Route />
          <Route />
        </Route>
      </Routes>
    </div>
  );
};
