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
  justify-content: space-between;
  flex-direction: row;
  gap: 26px;
  max-width: 840px;
  margin: auto;
  height: 100%;
`;

export const Branding = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Text = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  max-width: 236px;
`;

export const Content = styled.h4``;

export const Copyright = styled.span`
  font-size: 12px;
  font-weight: 500px;
  line-height: 16px;
  text-align: left;
`;
