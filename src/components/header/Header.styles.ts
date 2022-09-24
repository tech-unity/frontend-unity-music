import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  
  height: 100%;

  background-color: #2b2a28;
  color: #ffffff;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 24px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
