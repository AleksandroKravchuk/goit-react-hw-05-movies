import React from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderSection, StyledLink } from './Header.styled';

const Header = () => (
  <>
    <HeaderSection>
      <StyledLink to="/goit-react-hw-05-movies">Home</StyledLink>
      <StyledLink to="/goit-react-hw-05-movies/movies">Movies</StyledLink>
    </HeaderSection>
    <Outlet />
  </>
);
export default Header;
