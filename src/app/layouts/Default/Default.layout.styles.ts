import styled from 'styled-components';
import {
  BACKGROUND_COLOR,
  FOOTER_HEIGHT,
  HEADER_HEIGHT,
} from '../../_constants';

export const Wrapper = styled.div`
  background-color: ${BACKGROUND_COLOR};
  color: #fff;
`;

export const Main = styled.main`
  width: 100%;
`;

export const FeaturedContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 1400px;
  margin: auto;
  min-height: calc(100vh - ${FOOTER_HEIGHT}px - ${HEADER_HEIGHT}px);
  flex: 1;
  gap: 120px;
  padding: 32px;
`;
