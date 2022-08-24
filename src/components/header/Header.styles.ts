import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  background-color: #2B2A28;
  color: #FFFFFF;
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
  gap: 32px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`