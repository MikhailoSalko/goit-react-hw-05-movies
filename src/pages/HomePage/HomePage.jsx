import { useLocation } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { Report } from 'notiflix';
import { notiflixSettings } from 'components/Notiflix.init/Notiflix.init';
import Loader from 'components/Loader/Loader';
import { fetchTrendFims } from 'api/fetchFunctions';
import {
  StyledHeading,
  StyledLink,
  StyledList,
} from '../../styles/pageStyles.styled';

const HomePage = () => {
  const [trendFilms, setTrendFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    fetchTrendFims()
      .then(data => {
        return setTrendFilms([...data.results]);
      })
      .catch(error => setError(error.message))
      .finally(() => setLoading(false));
  }, []);
  const elements = useMemo(
    () =>
      trendFilms.map(({ id, title }) => (
        <li key={id}>
          <StyledLink to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </StyledLink>
        </li>
      )),
    [location, trendFilms]
  );

  return (
    <>
      {loading && <Loader />}
      {error ? (
        Report.failure(
          'Something went wrong, please try again later',
          notiflixSettings
        )
      ) : (
        <>
          <StyledHeading>Trending movies today</StyledHeading>
          <StyledList>{elements}</StyledList>
        </>
      )}
    </>
  );
};

export default HomePage;
