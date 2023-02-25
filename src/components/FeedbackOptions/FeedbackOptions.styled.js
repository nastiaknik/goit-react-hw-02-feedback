import styled from 'styled-components';

export const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  font-size: 20px;
  text-transform: uppercase;
  background-color: lightgrey;
  color: black;
  border: 1px solid grey;
  border-radius: 5px;
  transition: 300ms;
  &:hover {
    background-color: teal;
    color: white;
    cursor: pointer;
  }
`;
