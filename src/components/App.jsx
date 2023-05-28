import { Route, Routes } from 'react-router-dom';

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
      {/* <Routes>
        <Route path="/" element={<SharedLayout />} />
        <Route index element={ <HomePage/>} />
        <Route path='movies' element={<MoviesPage/> } />
        <Route path='movies/:moviesId' element={<MovieDetails/> } />
                <Route path="cast" element={<Cast />} />
                Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes> */}
    </div>
  );
};
