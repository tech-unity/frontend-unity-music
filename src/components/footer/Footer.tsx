import facebookLogo from '../../assets/facebook.svg';
import instagramLogo from '../../assets/instagram.svg';
import locationLogo from '../../assets/location.svg';

import * as F from './Footer.styles';

export default function Footer({...props}: React.HTMLAttributes<HTMLElement>) {
  return (
    <F.Wrapper {...props}>
      <F.Section>
        <F.Circle>
          <a href='https://www.facebook.com/jaguanandi/' target='_blank'>
            <img src={facebookLogo} alt='Facebook logo' />
          </a>
        </F.Circle>
        <F.Circle>
          <a href='https://www.instagram.com/jaguanandi/' target='_blank'>
            <img src={instagramLogo} alt='Instagram Logo' />
          </a>
        </F.Circle>
        <F.Circle>
          <a href='https://goo.gl/maps/rsDJWenj9ZJKKvnV6' target='_blank'>
            <img src={locationLogo} alt='Location' />
          </a>
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
