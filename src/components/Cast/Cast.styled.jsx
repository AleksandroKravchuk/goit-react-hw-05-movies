import styled from 'styled-components';

export const CastSection = styled.section`
  width: 100%;
  /* text-align: center; */
  padding: 10px;
  background-color: #aaf7bd;
`;
export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
`;
export const CastItem = styled.li`
  background-color: yellow;
  width: 120px;
  list-style: none;
  margin-right: 5px;
  margin-bottom: 5px;
`;
export const CastName = styled.p`
  height: 20px;
  font-size: 14px;
`;

export const CastPhoto = styled.img`
  width: 100%;
`;
export const ButtonMore = styled.button`
  padding: 5px 10px;
  background-color: yellow;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
  transition: background-color 250ms linear;
  &:hover {
    background-color: gray;
  }
`;
