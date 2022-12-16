import { transparentize } from 'polished';
import styled from 'styled-components';

const BACKGROUND_COLORS = {
  even: '#F26263',
  odd: '#A43132',
};

export const Card = styled.div<{ position: 'odd' | 'even' }>`
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
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.h2``;

export const Content = styled.span`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.3rem;
  letter-spacing: 0em;
  text-align: center;
`;
