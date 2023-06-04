import { useEffect, useState } from 'react';
import { fetchCastByFilmId } from 'api/fetchFunctions';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async () =>
      fetchCastByFilmId(movieId).then(data => {
        return setCast(data);
      });
    getCast();
  }, [movieId]);

  console.log(cast);
  return <div>Cast</div>;
};

export default Cast;
