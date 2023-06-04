import { useEffect, useState } from 'react';
import { fetchReviewsByFilmId } from 'api/fetchFunctions';
import { useParams } from 'react-router-dom';
import { Report } from 'notiflix';
import { notiflixSettings } from 'js/Notiflix.init';
import { LoaderTailSpin } from 'components/Loader/Loader';
import {
  StyledReviewAuthorName,
  StyledReviewContainer,
  StyledReviewItem,
  StyledReviewPost,
  StyledReviewsList,
} from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () =>
      fetchReviewsByFilmId(movieId).then(({ results }) => {
        return setReviews([...results]);
      });
    setLoading(true);
    getCast()
      .catch(error => setError(error.message))
      .finally(() => setLoading(false));
  }, [movieId]);

  // console.log(reviews);
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
        <StyledReviewsList>
          {reviews.length === 0 ? (
            <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
              We don't have any reviews for this movie
            </p>
          ) : (
            reviews.map(({ id, author, content }) => (
              <StyledReviewItem key={id}>
                <StyledReviewContainer>
                  <StyledReviewAuthorName>
                    Author: {author}
                  </StyledReviewAuthorName>
                  <StyledReviewPost>{content}</StyledReviewPost>
                </StyledReviewContainer>
              </StyledReviewItem>
            ))
          )}
        </StyledReviewsList>
      )}
    </>
  );
};

export default Reviews;
