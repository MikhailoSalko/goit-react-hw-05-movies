import { memo } from 'react';
import { StyledLink } from 'styles/pageStyles.styled';
import PropTypes from 'prop-types';

const FilmList = ({ array, location }) => {
  return array.map(({ id, title }) => (
    <li key={id}>
      <StyledLink to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </StyledLink>
    </li>
  ));
};

FilmList.defaultProps = {
  array: [],
};

FilmList.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  location: PropTypes.object.isRequired,
};

export default memo(FilmList);
