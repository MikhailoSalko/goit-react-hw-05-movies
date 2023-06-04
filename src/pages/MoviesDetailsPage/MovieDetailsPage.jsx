import { useState, useEffect, Suspense } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Report } from 'notiflix';
import { notiflixSettings } from 'js/Notiflix.init';
import { fetchFilmById } from 'api/fetchFunctions';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import { LoaderTailSpin } from 'components/Loader/Loader';
import {
  StyledBackButton,
  StyledLink,
  StyledListMoviesDetails,
} from 'styles/pageStyles.styled';

const MovieDetailsPage = () => {
  const [film, setFilm] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const getMovieById = async () =>
      fetchFilmById(movieId).then(
        ({
          overview,
          poster_path,
          title,
          genres,
          vote_average,
          release_date,
        }) => {
          setFilm({
            overview,
            img: poster_path,
            title,
            genres: genres.map(genre => genre.name).join(' '),
            rating: parseInt(vote_average * 10),
            releaseYear: release_date.slice(0, 4),
          });
        }
      );
    setLoading(true);
    getMovieById()
      .catch(error => setError(error.message))
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <>
      {error &&
        Report.failure(
          'Something went wrong, please try again later',
          notiflixSettings
        )}
      {loading ? (
        <LoaderTailSpin />
      ) : (
        <>
          <StyledBackButton
            type="button"
            onClick={() => navigate(location.state?.from ?? '/movies')}
          >
            Go Back
          </StyledBackButton>
          <MovieDetails film={film} />
          <h2 style={{ marginBottom: '10px' }}>Additional information</h2>
          <StyledListMoviesDetails>
            <li>
              <StyledLink
                to="cast"
                state={{ from: location.state?.from ?? '/movies' }}
              >
                Cast
              </StyledLink>
            </li>
            <li>
              <StyledLink
                to="reviews"
                state={{ from: location.state?.from ?? '/movies' }}
              >
                Reviews
              </StyledLink>
            </li>
          </StyledListMoviesDetails>
          <Suspense fallback={<LoaderTailSpin />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
