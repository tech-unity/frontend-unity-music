import styled from 'styled-components';

export const Container = styled.div<{ base64: string }>`
  background:  url('${p => p.base64}');
  background-color: #000;
  background-repeat: no-repeat;
  background-position: right top;
  background-size: cover;

  height: 80vh;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Header = styled.span`
  color: #fff;
  font-size: 3rem;
  font-weight: 500;
  line-height: 4rem;
  letter-spacing: 0em;
`;

export const Content = styled.span`
  color: #fff;
  font-size: 2rem;
  font-weight: 500;
  line-height: 4rem;
  letter-spacing: 0em;
`;
