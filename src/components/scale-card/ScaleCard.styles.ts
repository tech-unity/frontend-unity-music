import { transparentize } from 'polished';
import styled from 'styled-components';

const BACKGROUND_COLORS = {
  even: '#F26263',
  odd: '#A43132',
};

export const ScaleCard = styled.div<{ position: 'odd' | 'even' }>`
  background: ${p => transparentize(0.4, BACKGROUND_COLORS[p.position])};
  border-radius: 20px;
  height: 460px;
  color: #fff;

  padding: 2rem;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 2rem;
`;

export const IconDiv = styled.div`
  width: 120px;
  height: 96px;
`;

export const Header = styled.h2``;

export const List = styled.ul`
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 12px;

  list-style: none;
`;

export const ListItem = styled.li`
`

export const CustomIcon = styled.img<{rotateIcon: number}>`
  transform: rotate(${p => p.rotateIcon}deg);
`;
