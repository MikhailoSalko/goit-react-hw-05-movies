import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeading = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
  color: #5d8f86;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledHomePageLink = styled(Link)`
  font-size: 20px;
  transition: color 500ms ease;
  text-decoration: none;
  color: inherit;

  &:hover,
  &:focus {
    color: red;
    text-decoration: underline;
  }
`;
