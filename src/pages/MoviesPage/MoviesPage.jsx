import { useMemo, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { Report } from 'notiflix';
import { notiflixSettings } from 'components/Notiflix.init/Notiflix.init';
import Loader from 'components/Loader/Loader';
import { fetchFilmsBySearchQuery } from 'api/fetchFunctions';
import {
  StyledForm,
  StyledSearchInput,
  StyledSearchButton,
  StyledList,
  StyledLink,
} from '../../styles/pageStyles.styled';

const MoviesPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const search = searchParams.get('query') ?? '';

  const handleSearchValue = e => {
    const searchQuery = e.target.value;
    if (searchQuery !== '') {
      return setSearchParams({ query: searchQuery });
    }
    return setSearchParams({});
  };

  const fetchFimlByName = e => {
    e.preventDefault();
    const search = e.target.search.value;
    console.log(search);
    setLoading(true);
    fetchFilmsBySearchQuery(search)
      .then(({ results }) => {
        if (results.length === 0) {
          return Report.info(
            'There are no films per your request',
            notiflixSettings
          );
        }
        return setFilms([...results]);
      })
      .catch(error => setError(error.message))
      .finally(() => setLoading(false));
  };

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
      <StyledForm onSubmit={fetchFimlByName}>
        <StyledSearchInput
          type="text"
          name="search"
          placeholder="Please, enter the movie name"
          onChange={handleSearchValue}
          value={search}
        />
        <StyledSearchButton type="submit">Search</StyledSearchButton>
      </StyledForm>
      <StyledList>{elements}</StyledList>
    </>
  );
};

export default MoviesPage;
