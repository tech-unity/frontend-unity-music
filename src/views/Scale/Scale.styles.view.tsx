import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #2b2a28;
  color: #ffffff;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Section = styled.div`
  width: 100%;

  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

export const Scale = styled.div`
  padding: 16px;
  min-width: 320px;
  max-width: 380px;
  flex: 1;
`;

export const Heading = styled.h1`
  padding-top: 10vh;
  padding-bottom: 10vh;
  font-size: 48px;
  font-weight: 600;
  line-height: 60px;
  letter-spacing: 0em;
`;

export const SubHeading = styled.h2`

`
