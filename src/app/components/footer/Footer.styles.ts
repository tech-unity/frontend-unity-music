import styled from 'styled-components';
import { FOOTER_HEIGHT } from '../../_constants';

export const Wrapper = styled.footer`
  background-color: #212529;
  color: #ffffff;

  width: 100%;
  height: ${FOOTER_HEIGHT}px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 26px;
  max-width: 840px;
  margin: auto;
  height: 100%;
`;

export const SmallText = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
`;
