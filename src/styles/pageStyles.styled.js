import styled from 'styled-components';
import { StyledSearchButton } from 'components/SearchForm/SearchForm.styled';
import { Link } from 'react-router-dom';

export const StyledHomeHeading = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
  color: #32363d;
`;

export const StyledFilmList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledListMoviesDetails = styled.ul`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

export const StyledLink = styled(Link)`
  font-size: 20px;
  text-decoration: none;
  color: #1261e0;
  transition: color 250ms ease;

  &:hover,
  &:focus-visible {
    color: #eb1b0c;
    text-decoration: underline;
  }
`;

export const StyledBackButton = styled(StyledSearchButton)`
  margin-left: 10px;
`;

export const StyledBackHomePageBtn = styled(StyledSearchButton)`
  width: 150px;
`;

export const StyledLoadMoreBtn = styled(StyledSearchButton)`
  margin-top: 10px;
`;
