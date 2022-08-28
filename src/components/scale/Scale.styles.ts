import styled from 'styled-components';

export const Wrapper = styled.div`
  width: fit-content;
  height: max-content;
  background-color: #201f1e;

  border-radius: 10%;

  margin-bottom: 6rem;
`;

export const HorizontalLine = styled.hr`
  border: 1px #fdeded80 solid;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Band = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 8px;

  padding: 3rem;
`;

export const Singers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 8px;

  padding: 3rem;
`;

export const List = styled.ul`
  color: #ffffff;
  font-weight: 500;

  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li`
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 2rem;
`;

export const Header = styled.h3`
  font-weight: 600;
  font-size: 2rem;
  line-height: 4rem;
  color: #ffffff;
`;
