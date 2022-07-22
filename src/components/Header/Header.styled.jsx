import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const HeaderSection = styled.section`
  margin-top: 10px;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: solid 3px gray;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  font-size: 20px;
  margin-left: 20px;
  text-decoration: none;
  &.active {
    color: orange;
  }
`;
