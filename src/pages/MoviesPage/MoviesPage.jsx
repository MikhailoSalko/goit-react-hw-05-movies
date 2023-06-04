import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { Report } from 'notiflix';
import { notiflixSettings } from 'js/Notiflix.init';
import SearchForm from 'components/SearchForm/SearchForm';
import FilmList from 'components/FilmList/FilmList';
import { LoaderTailSpin } from 'components/Loader/Loader';
import { fetchFilmsBySearchQuery } from 'api/fetchFunctions';
import {
  StyledFilmList,
  // StyledLoadMoreBtn,
} from '../../styles/pageStyles.styled';

const MoviesPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query') ?? '';
  // const page = searchParams.get('page') ?? 1;

  useEffect(() => {
    const getFimsByQuery = () =>
      fetchFilmsBySearchQuery(query).then(({ results }) => {
        if (results.length === 0) {
          return Report.info(
            'There are no films per your request',
            notiflixSettings
          );
        }
        setFilms([...results]);
      });
    if (query) {
      setLoading(true);
      getFimsByQuery()
        .catch(error => setError(error.message))
        .finally(() => setLoading(false));
    }
  }, [query]);

  const handleSubmitForm = e => {
    e.preventDefault();
    const query = e.target.search.value;
    if (query === '') {
      return Report.info('Please, enter the name of film', notiflixSettings);
    }
    setSearchParams({ query });
  };

  // const handleLoadMoreBtn = () => {
  //   setSearchParams({ query, page: Number(page) + 1 });
  // };

  return (
    <>
      {error &&
        Report.failure(
          'Something went wrong, please try again later',
          notiflixSettings
        )}
      <SearchForm onSubmit={handleSubmitForm} query={query} />
      {loading ? (
        <LoaderTailSpin />
      ) : (
        <StyledFilmList>
          <FilmList array={films} location={location} />
        </StyledFilmList>
      )}
      {/* {query && (
        <StyledLoadMoreBtn onClick={handleLoadMoreBtn}>
          Load more
        </StyledLoadMoreBtn>
      )} */}
    </>
  );
};

export default MoviesPage;
