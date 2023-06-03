import { fetchTrendFims } from 'api/fetchFunctions';
import { useEffect, useState } from 'react';
import {
  StyledHeading,
  StyledHomePageLink,
  StyledList,
} from './HomePage.styled';

const HomePage = () => {
  const [trendFilms, setTrendFilms] = useState([]);

  useEffect(() => {
    fetchTrendFims().then(data => {
      return setTrendFilms([...data.results]);
    });
  }, []);
  const elements = trendFilms.map(({ id, title }) => (
    <li key={id}>
      <StyledHomePageLink>{title}</StyledHomePageLink>
    </li>
  ));

  return (
    <>
      <StyledHeading>Trending today</StyledHeading>
      <StyledList>{elements}</StyledList>
    </>
  );
};

export default HomePage;
