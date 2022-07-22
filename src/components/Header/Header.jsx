import React from 'react';
import { HeaderSection, StyledLink } from './Header.styled';

const Header = () => (
  <HeaderSection>
    <StyledLink to="/">Home</StyledLink>
    <StyledLink to="/movies">Movies</StyledLink>
  </HeaderSection>
);
export default Header;
