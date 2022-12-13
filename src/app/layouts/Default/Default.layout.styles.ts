import styled from 'styled-components';
import { FOOTER_HEIGHT, HEADER_HEIGHT } from '../../_constants';

export const Wrapper = styled.div`
  background-color: #212529;
  color: #fff;
`;

export const Main = styled.main``;

export const FeaturedContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: calc(100vh - ${FOOTER_HEIGHT}px - ${HEADER_HEIGHT}px);
  flex: 1;
  gap: 32px;
`;
