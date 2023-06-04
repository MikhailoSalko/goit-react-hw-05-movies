import {
  StyledContainer,
  StyledDescriptionContainer,
  StyledFilmName,
  StyledImgContainer,
  StyledUserRating,
} from './MovieDetails.styled';

const MovieDetails = ({ film }) => {
  const { overview, img, title, genres, rating, releaseYear } = film;
  return (
    <StyledContainer>
      <StyledImgContainer>
        <img src={img} alt={title} />
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

export default MovieDetails;
