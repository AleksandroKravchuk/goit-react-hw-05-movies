import styled from 'styled-components';

export const SearchForm = styled.form`
  width: 300px;
  margin-left: 20px;
  margin-top: 5px;
`;
export const Input = styled.input`
  width: 70%;
  border-radius: 5px;

  &:focus {
    outline: none;
    border: solid 2px orange;
  }
`;
export const SearchButton = styled.button`
  padding: 3px 6px;
  border-radius: 5px;
  font-size: 10px;
  margin-left: 10px;
  border: 0.3px solid gray;
  cursor: pointer;
  transition: background-color 250ms linear, color 250ms linear;
  &:hover {
    background-color: gray;
    color: beige;
  }
`;
