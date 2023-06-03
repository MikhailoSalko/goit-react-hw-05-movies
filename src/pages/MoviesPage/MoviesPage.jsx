import { useEffect, useState } from 'react';
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
} from '../../styles/pageStyles.styled';

const MoviesPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query') ?? '';
  console.log(query);
  // const page = searchParams.get('page');

  useEffect(() => {
    if (!query) {
      return;
    }
    setLoading(true);
    fetchFilmsBySearchQuery(query)
      .then(({ results }) => {
        if (results.length === 0) {
          return Report.info(
            'There are no films per your request',
            notiflixSettings
          );
        }
        setFilms([...results]);
      })
      .catch(error => setError(error.message))
      .finally(() => setLoading(false));
  }, [query]);

  const handleSubmitForm = e => {
    e.preventDefault();
    setSearchParams({ query: e.target.search.value });
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
      {/* {page && (
        <StyledLoadMoreBtn onClick={handleLoadMoreBtn}>
          Load more
        </StyledLoadMoreBtn>
      )} */}
    </>
  );
};

export default MoviesPage;
