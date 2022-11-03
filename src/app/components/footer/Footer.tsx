import { mdiFacebook } from '@mdi/js';
import { mdiInstagram } from '@mdi/js';
import { mdiMapMarker } from '@mdi/js';
import Icon from '@mdi/react';
import { NavLink } from 'react-router-dom';

import * as F from './Footer.styles';

export default function Footer({
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <F.Wrapper {...props}>
      <F.Section>
        <F.Circle href='https://www.facebook.com/jaguanandi/' target='_blank'>
          <Icon path={mdiFacebook} size='70%' />
        </F.Circle>
        <F.Circle href='https://www.instagram.com/jaguanandi/' target='_blank'>
          <Icon path={mdiInstagram} size='50%' />
        </F.Circle>
        <F.Circle href='https://goo.gl/maps/rsDJWenj9ZJKKvnV6' target='_blank'>
          <Icon path={mdiMapMarker} size='50%' />
        </F.Circle>
      </F.Section>
      <F.Section>
        <F.Copyright>
          <F.SmallText>© 2022 Unity Music</F.SmallText>
        </F.Copyright>
      </F.Section>
    </F.Wrapper>
  );
}
