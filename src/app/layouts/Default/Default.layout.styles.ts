import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0 auto;

  background-color: #2b2a28;
  color: #fff;
`;

export const Header = styled.header`
  width: 100%;
  height: 136px;
  position: relative;
`;

export const Footer = styled.footer``;

export const Main = styled.main``;

export const FeaturedContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  min-height: 612px;
  flex: 1;
  gap: 32px;
`;
