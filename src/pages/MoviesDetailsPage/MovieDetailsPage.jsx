import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { fetchFilmById } from 'api/fetchFunctions';
import { StyledBackButton } from 'styles/pageStyles.styled';
// import { Report } from 'notiflix';

const MovieDetailsPage = () => {
  const [film, setFilm] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // {
  //   overview, poster_path, title, genres, vote_average;
  // }

  useEffect(() => {
    fetchFilmById(movieId).then(data => {
      console.log(data);
      setFilm({ ...data });
    });
    // .catch(error => setError(error.message))
    // .finally(() => setLoading(false));
  }, [movieId]);
  console.log(film);

  // console.log(film);
  // console.log(film.genres);

  // const array = Object.entries(film.genres).forEach(([_, name]) =>
  //   console.log(name.name)
  // );

  // const array = Object.entries(film.genres);
  // console.log(array);

  // const { overview, image, genres, vote_average, title } = film;
  // console.log(genres);
  // const arrayOfGenres = [];
  // genres.forEach(obj => arrayOfGenres.push(obj.name));
  // console.log(genres[0].name);
  // console.log(genres[1].name);
  // console.log(genres[2].name);

  // const genresToRend = Object.fromEntries([...genres]);
  // console.log(genresToRend);

  return (
    <>
      <StyledBackButton
        type="button"
        onClick={() => navigate(location.state?.from ?? '/movies')}
      >
        Go Back
      </StyledBackButton>
      <div>
        {/* <img src={image} alt="" />
        <h1>{title}</h1>
        <p>User Score: {parseInt(vote_average * 10)}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3> */}
        {/* <p>{((genres[0].name, genres[1].name), genres[2].name)}</p> */}
      </div>
      <br />
      <h2>Additional information</h2>
      <ul>
        <li>
          <Link></Link>
        </li>
        <li>
          <Link></Link>
        </li>
      </ul>
    </>
  );
};

export default MovieDetailsPage;
