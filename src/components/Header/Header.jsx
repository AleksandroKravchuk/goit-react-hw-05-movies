import React from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderSection, StyledLink } from './Header.styled';

const Header = () => (
  <>
    <HeaderSection>
      <StyledLink to="">Home</StyledLink>
      <StyledLink to="/movies">Movies</StyledLink>
    </HeaderSection>
    <Outlet />
  </>
);
export default Header;
