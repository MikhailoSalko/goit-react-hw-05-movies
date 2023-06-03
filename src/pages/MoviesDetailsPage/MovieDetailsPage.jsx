import { Link, useLocation, useNavigate } from 'react-router-dom';

const MovieDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <button
        type="button"
        onClick={() => navigate(location.state?.from ?? '/movies')}
      >
        Go Back
      </button>
    </>
  );
};

export default MovieDetailsPage;
