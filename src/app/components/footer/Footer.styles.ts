import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #212529;
  color: #ffffff;
  height: 136px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 26px;

  padding-top: 8px;
`;

export const Circle = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 80px;
  width: 80px;

  background-color: #ffffff;
  color: #2b2a28;
  text-decoration: none;
  border-radius: 50%;

  &:hover {
    background-color: #c73537;
    color: #ffffff;
  }
  &.active {
    color: #de7d7e;
  }
`;

export const Copyright = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SmallText = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
`;
