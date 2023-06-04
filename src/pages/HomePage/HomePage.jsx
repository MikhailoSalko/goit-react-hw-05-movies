import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Report } from 'notiflix';
import { notiflixSettings } from 'js/Notiflix.init';
import Loader from 'components/Loader/Loader';
import { fetchTrendFims } from 'api/fetchFunctions';
import { StyledHeading, StyledList } from '../../styles/pageStyles.styled';
import FilmList from 'components/FilmList/FilmList';

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

  return (
    <>
      {error &&
        Report.failure(
          'Something went wrong, please try again later',
          notiflixSettings
        )}
      {loading ? (
        <Loader />
      ) : (
        <>
          <StyledHeading>Trending movies today</StyledHeading>
          <StyledList>
            <FilmList array={trendFilms} location={location} />
          </StyledList>
        </>
      )}
    </>
  );
};

export default HomePage;
