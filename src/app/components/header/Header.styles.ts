import styled from 'styled-components';
import { BACKGROUND_COLOR, HEADER_HEIGHT } from '../../_constants';

export const Wrapper = styled.header`
  width: 100%;
  height: ${HEADER_HEIGHT}px;

  background-color: ${BACKGROUND_COLOR};
  color: #ffffff;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  height: 100%;
  max-width: 848px;
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
    color: #fff;

    &.active {
      color: #ffbb33;
    }
  }
`;
