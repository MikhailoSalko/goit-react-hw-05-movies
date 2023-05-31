// import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import {
  StyledHeader,
  StyledList,
  StyledMain,
  StyledNavLink,
} from './SharedLayout';

const SharedLayout = () => {
  return (
    <>
      <StyledHeader>
        <nav>
          <StyledList>
            <li>
              <StyledNavLink to="/">Home</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/movies">Movies</StyledNavLink>
            </li>
          </StyledList>
        </nav>
      </StyledHeader>
      <StyledMain>
        <Outlet />
      </StyledMain>
    </>
  );
};

export default SharedLayout;
