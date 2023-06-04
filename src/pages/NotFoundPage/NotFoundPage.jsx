import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledBackHomePageBtn } from 'styles/pageStyles.styled';

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timerId = setTimeout(() => navigate('/'), 5000);
    return () => clearTimeout(timerId);
  }, [navigate]);

  return (
    <>
      <h1 style={{ marginBottom: '20px' }}>This page does not exist</h1>
      <p style={{ marginBottom: '20px' }}>
        You will navigate to home page in 5 seconds or you can back by button
      </p>
      <StyledBackHomePageBtn type="button" onClick={() => navigate('/')}>
        Back to Home page
      </StyledBackHomePageBtn>
    </>
  );
};

export default NotFoundPage;
