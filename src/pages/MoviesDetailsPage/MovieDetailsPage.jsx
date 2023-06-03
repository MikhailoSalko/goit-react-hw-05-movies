import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { fetchFilmById } from 'api/fetchFunctions';
import { StyledBackButton } from 'styles/pageStyles.styled';
// import { Report } from 'notiflix';

const MovieDetailsPage = () => {
  const [film, setFilm] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  console.log(movieId);
  // const obj = { overview, poster_path, title, gernes, vote_average };

  useEffect(() => {
    fetchFilmById(movieId).then(data => {
      console.log(data);
      // setFilm({ image: data });
    });
    // .catch(error => setError(error.message))
    // .finally(() => setLoading(false));;
  }, [movieId]);

  return (
    <>
      <StyledBackButton
        type="button"
        onClick={() => navigate(location.state?.from ?? '/movies')}
      >
        Go Back
      </StyledBackButton>
      <div>
        <img src="" alt="" />
        <h1>title</h1>
        <p>User Score: </p>
        <h3>Overview</h3>
        <p></p>
        <h3>Genres</h3>
        <p></p>
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
