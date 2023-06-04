import {
  StyledContainer,
  StyledDescriptionContainer,
  StyledFilmName,
  StyledImgContainer,
  StyledUserRating,
} from './MovieDetails.styled';
import PropTypes from 'prop-types';
import defaultPoster from '../../images/defaultMoviePoster.jpg';

const BASE_URL = 'https://image.tmdb.org/t/p/';
const IMG_SIZE = 'w500';

const MovieDetails = ({ film }) => {
  const { overview, img, title, genres, rating, releaseYear } = film;
  return (
    <StyledContainer>
      <StyledImgContainer>
        <img
          src={img ? `${BASE_URL}${IMG_SIZE}${img}` : defaultPoster}
          alt={title}
        />
      </StyledImgContainer>
      <StyledDescriptionContainer>
        <StyledFilmName>
          {title} ({releaseYear})
        </StyledFilmName>
        <StyledUserRating>User Score: {rating}%</StyledUserRating>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres}</p>
      </StyledDescriptionContainer>
    </StyledContainer>
  );
};

MovieDetails.propTypes = {
  film: PropTypes.shape({
    overview: PropTypes.string.isRequired,
    img: PropTypes.string,
    title: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    releaseYear: PropTypes.string.isRequired,
  }),
};

export default MovieDetails;
