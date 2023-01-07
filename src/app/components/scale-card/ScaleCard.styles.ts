import { transparentize } from 'polished';
import styled from 'styled-components';

const BACKGROUND_COLORS = {
  even: '#F26263',
  odd: '#A43132',
};

export const ScaleCard = styled.div<{ position: 'odd' | 'even' }>`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  height: 460px;
  max-width: 380px;
  width: 100%;
  border-radius: 20px;
  padding: 2rem;

  background: ${p => transparentize(0.4, BACKGROUND_COLORS[p.position])};
  color: #fff;

  overflow: hidden;

  flex: 1;
  gap: 2rem;
`;

export const Content = styled.div``;

export const IconDiv = styled.div`
  width: 120px;
  min-height: 154px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.h2``;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 12px;

  font-size: 1rem;
  list-style: none;
`;

export const ListItem = styled.li`
  text-transform: capitalize;
`;

export const CustomIcon = styled.img<{ rotateIcon: number }>`
  transform: rotate(${p => p.rotateIcon}deg);
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
`;
