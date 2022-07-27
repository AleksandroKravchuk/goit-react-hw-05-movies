import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieCard = styled.section`
  width: 100%;
  display: flex;

  background-color: yellow;
`;

export const MovieName = styled.h2`
  font-size: 30px;
`;
export const MovieText = styled.p`
  font-size: 16px;
`;
export const MoviePoster = styled.img`
  width: 300px;
  background-color: yellowgreen;
`;
export const MovieTextName = styled.span`
  font-size: 20px;
  font-weight: bold;
`;
export const MovieInformSection = styled.div`
  margin-left: 20px;
  padding: 10px;
  width: 100%;
`;
export const AdditionalInformation = styled.div`
  width: 100%;
  margin-left: 20px;
  margin-top: 10px;
  /* padding-top: 5px;
  padding-bottom: 5px; */
  border-top: solid 3px grey;
  border-bottom: solid 3px grey;
`;
export const AdditionalName = styled.p`
  font-size: 20px;
  margin: 0px;
`;
export const AdditionalList = styled.ul``;
export const AdditionalItem = styled.li``;
export const AdditionalLink = styled(NavLink)`
  font-size: 14px;
  margin-left: 10px;
  text-decoration: none;
  cursor: pointer;
  &.active {
    color: orange;
  }
`;
