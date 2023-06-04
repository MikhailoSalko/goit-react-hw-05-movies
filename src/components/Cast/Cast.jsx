import { useEffect, useState } from 'react';
import { fetchCastByFilmId } from 'api/fetchFunctions';
import { useParams } from 'react-router-dom';
import { Report } from 'notiflix';
import { notiflixSettings } from 'js/Notiflix.init';
import { LoaderTailSpin } from 'components/Loader/Loader';
import defaultperson from '../../images/defaultPerson.png';

import {
  StyledActorCharacter,
  StyledActorContainer,
  StyledActorImg,
  StyledActorName,
  StyledActorsList,
} from './Cast.styled';

const BASE_URL = 'https://image.tmdb.org/t/p/';
const IMG_SIZE = 'w500';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () =>
      fetchCastByFilmId(movieId).then(({ cast }) => {
        return setCast(cast);
      });
    setLoading(true);
    getCast()
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <>
      {error &&
        Report.failure(
          'Something went wrong, please try again later',
          notiflixSettings
        )}

      {loading ? (
        <LoaderTailSpin />
      ) : (
        <StyledActorsList>
          {cast.length === 0 ? (
            <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
              We don't have any information about the cast
            </p>
          ) : (
            cast.map(({ id, name, character, profile_path }) => {
              return (
                <li key={id}>
                  <StyledActorContainer>
                    <StyledActorImg
                      src={
                        profile_path
                          ? `${BASE_URL}${IMG_SIZE}${profile_path}`
                          : defaultperson
                      }
                      alt={name}
                    />
                    <StyledActorName>{name}</StyledActorName>
                    <StyledActorCharacter>{character}</StyledActorCharacter>
                  </StyledActorContainer>
                </li>
              );
            })
          )}
        </StyledActorsList>
      )}
    </>
  );
};

export default Cast;
