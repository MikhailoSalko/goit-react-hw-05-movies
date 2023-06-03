import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import SharedLayout from './SharedLayout/SharedLayot';
import MovieDetailsPage from 'pages/MoviesDetailsPage/MovieDetailsPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:moviesId" element={<MovieDetailsPage />}>
          {/* <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} /> */}
        </Route>
      </Route>
    </Routes>
  );
};
