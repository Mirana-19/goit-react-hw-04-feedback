import styled from 'styled-components';

export const ButtonList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
`;

export const Button = styled.button`
  min-width: 60px;
  min-height: 30px;
  background-color: lightblue;
  border-radius: 5px;
  border: 1px solid black;
  text-transform: capitalize;
`;

export const StatList = styled.ul`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Item = styled.li`
  text-align: center;
`;

export const Key = styled.span`
  text-transform: capitalize;
`;

export const Stat = styled.p`
  padding: 0 30px;
  margin-top: 15px;
`;
