import { useEffect, useState } from 'react';
import { fetchCastByFilmId } from 'api/fetchFunctions';
import { useParams } from 'react-router-dom';
// import { StyledList } from 'styles/pageStyles.styled';
import {
  StyledActorContainer,
  StyledCastList,
  StyledCharacter,
  StyledImg,
  StyledName,
} from './Cast.styled';

const BASE_URL = 'https://image.tmdb.org/t/p/';
const IMG_SIZE = 'w300';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async () =>
      fetchCastByFilmId(movieId).then(({ cast }) => {
        return setCast(cast);
      });
    getCast();
  }, [movieId]);

  console.log(cast);

  const elements = cast.map(({ id, name, character, profile_path }) => {
    return (
      <li key={id}>
        <StyledActorContainer>
          <StyledImg src={`${BASE_URL}${IMG_SIZE}${profile_path}`} alt="" />
          <StyledName>{name}</StyledName>
          <StyledCharacter>{character}</StyledCharacter>
        </StyledActorContainer>
      </li>
    );
  });

  return <StyledCastList>{elements}</StyledCastList>;
};

export default Cast;
