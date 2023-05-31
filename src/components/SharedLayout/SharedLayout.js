import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 0 40px;
  box-shadow: 1px 3px 3px rgba(0, 0, 255, 0.4);
`;

export const StyledMain = styled.main`
  padding: 30px;
`;

export const StyledNavLink = styled(NavLink)`
  position: relative;
  padding: 20px 0;
  font-size: 25px;
  color: #212121;
  transition: color 250ms ease-in-out;

  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: -1px;

    width: 100%;
    height: 5px;

    background-color: green;
    border-radius: 4px;

    transform-origin: right;
    transform: scaleX(0);
    transition: transform 250ms;
  }

  &:hover,
  &:focus-visible {
    color: green;

    &::after {
      transform-origin: left;
      transform: scaleX(1);
    }
  }

  &.active {
    color: orangered;

    &:hover::after,
    &:focus-visible::after {
      background-color: orangered;
    }
  }
`;

export const StyledList = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
  list-style: none;
`;
