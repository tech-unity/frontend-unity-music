import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #2b2a28;
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

export const Circle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 80px;
  width: 80px;

  background-color: #FFFFFF;
  border-radius: 50%;
`

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