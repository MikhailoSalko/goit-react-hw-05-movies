import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeading = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
  color: #32363d;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledLink = styled(Link)`
  font-size: 20px;
  text-decoration: none;
  color: #1261e0;
  transition: color 250ms ease;

  &:hover,
  &:focus {
    color: #eb1b0c;
    text-decoration: underline;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const StyledSearchInput = styled.input`
  display: block;
  width: 250px;
  height: 30px;
  border-radius: 5px;
`;

export const StyledhSearchButton = styled.button`
  width: 100px;
  height: 35px;
  font-size: 15px;
  border-radius: 5px;
`;

export const StyledLoadMoreBtn = styled(StyledhSearchButton)`
  margin-top: 10px;
`;

export const StyledBackButton = styled(StyledhSearchButton)`
  margin-left: 10px;
`;
