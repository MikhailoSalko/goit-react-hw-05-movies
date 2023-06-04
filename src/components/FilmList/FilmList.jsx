import { memo } from 'react';
import { StyledLink } from 'styles/pageStyles.styled';

const FilmList = ({ array, location }) => {
  return array.map(({ id, title }) => (
    <li key={id}>
      <StyledLink to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </StyledLink>
    </li>
  ));
};

export default memo(FilmList);
