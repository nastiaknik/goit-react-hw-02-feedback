import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const StatText = styled.li`
  font-size: 24px;
  &:not(:last-of-type) {
    margin-right: 10px;
  }
`;
