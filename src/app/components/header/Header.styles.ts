import styled from 'styled-components';

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
  a {
    text-decoration: none;
    color: #FFF;

    &.active {
      color: #de7d7e;
    }
  }
`;
