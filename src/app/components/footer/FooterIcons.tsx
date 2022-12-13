import styled from 'styled-components';
import { mdiFacebook, mdiInstagram, mdiMapMarker } from '@mdi/js';
import Icon from '@mdi/react';

export default function FooterIcons() {
  return (
    <Wrapper>
      <Circle href='https://www.facebook.com/jaguanandi/' target='_blank'>
        <Icon path={mdiFacebook} size='70%' />
      </Circle>
      <Circle href='https://www.instagram.com/jaguanandi/' target='_blank'>
        <Icon path={mdiInstagram} size='50%' />
      </Circle>
      <Circle href='https://goo.gl/maps/rsDJWenj9ZJKKvnV6' target='_blank'>
        <Icon path={mdiMapMarker} size='50%' />
      </Circle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 26px;
`;

const Circle = styled.a`
  display: flex;
  flex-direction: row;
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
