import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { fetchFilmById } from 'api/fetchFunctions';
import { StyledBackButton } from 'styles/pageStyles.styled';
// import { Report } from 'notiflix';

const BASE_URL = 'https://image.tmdb.org/t/p/';
const IMG_SIZE = 'w500';

function getGenresString(genres) {
  return genres.map(genre => genre.name).join(' ');
}

const MovieDetailsPage = () => {
  const [film, setFilm] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const getMovieById = useCallback(
    () =>
      fetchFilmById(movieId).then(
        ({
          overview,
          poster_path,
          title,
          genres,
          vote_average,
          release_date,
        }) => {
          // console.log(data);
          setFilm({
            overview,
            img: `${BASE_URL}${IMG_SIZE}${poster_path}`,
            title,
            genres: getGenresString(genres),
            rating: parseInt(vote_average * 10),
            releaseYear: release_date.slice(0, 4),
          });
        }
      ),
    [movieId]
  );

  useEffect(() => {
    getMovieById();
  }, [getMovieById]);

  console.log(film);

  const { overview, img, title, genres, rating, releaseYear } = film;

  return (
    <>
      <StyledBackButton
        type="button"
        onClick={() => navigate(location.state?.from ?? '/movies')}
      >
        Go Back
      </StyledBackButton>
      <div>
        <img src={img} alt="" />
        <h1>
          {title} ({releaseYear})
        </h1>
        <p>User Score: {rating}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres}</p>
      </div>
      <br />
      <h2>Additional information</h2>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
    </>
  );
};

export default MovieDetailsPage;
