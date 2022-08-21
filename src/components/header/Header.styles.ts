import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background-color: #191c1a;
  color: #e1e3e1;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 12px;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const ListItem = styled.li`
  padding: 12px;
`;
