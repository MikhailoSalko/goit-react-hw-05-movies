import { useCallback, useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { Report } from 'notiflix';
import { notiflixSettings } from 'components/Notiflix.init/Notiflix.init';
import Loader from 'components/Loader/Loader';
import { fetchFilmsBySearchQuery } from 'api/fetchFunctions';
import {
  StyledForm,
  StyledSearchInput,
  StyledList,
  StyledLink,
  StyledhSearchButton,
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

  const getFimsByQuery = useCallback(
    () =>
      fetchFilmsBySearchQuery(query).then(({ results }) => {
        if (results.length === 0) {
          return Report.info(
            'There are no films per your request',
            notiflixSettings
          );
        }
        setFilms([...results]);
      }),
    [query]
  );

  useEffect(() => {
    if (query) {
      setLoading(true);
      getFimsByQuery()
        .catch(error => setError(error.message))
        .finally(() => setLoading(false));
    }
  }, [getFimsByQuery, query]);

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

  const elements = films.map(({ id, title }) => (
    <li key={id}>
      <StyledLink to={`${id}`} state={{ from: location }}>
        {title}
      </StyledLink>
    </li>
  ));

  return (
    <>
      {loading && <Loader />}
      {error &&
        Report.failure(
          'Something went wrong, please try again later',
          notiflixSettings
        )}
      <StyledForm onSubmit={handleSubmitForm}>
        <StyledSearchInput
          type="text"
          name="search"
          placeholder="Please, enter the movie name"
          defaultValue={query}
        />
        <StyledhSearchButton type="submit">Search</StyledhSearchButton>
      </StyledForm>
      <StyledList>{elements}</StyledList>
      {/* {query && (
        <StyledLoadMoreBtn onClick={handleLoadMoreBtn}>
          Load more
        </StyledLoadMoreBtn>
      )} */}
    </>
  );
};

export default MoviesPage;
