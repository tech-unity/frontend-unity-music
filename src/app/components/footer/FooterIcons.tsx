import styled from 'styled-components';
import { mdiFacebook, mdiInstagram, mdiMapMarker } from '@mdi/js';
import Icon from '@mdi/react';
import FacebookIcon from '../../../assets/facebook';

export default function FooterIcons() {
  return (
    <Wrapper>
      <Circle href='https://www.instagram.com/jaguanandi/' target='_blank'>
        <Icon path={mdiInstagram} size='50%' />
      </Circle>
      <Circle href='https://www.facebook.com/jaguanandi/' target='_blank'>
        <FacebookIcon />
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

  background-color: transparent;
  color: #fff;
  text-decoration: none;
  border-radius: 50%;
  border: 2px solid #fff;

  &:hover {
    background-color: #c73537;
    color: #ffffff;
  }
  &.active {
    color: #de7d7e;
  }
`;
