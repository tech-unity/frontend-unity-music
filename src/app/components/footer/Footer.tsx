import * as F from './Footer.styles';
import FooterIcons from './FooterIcons';

export default function Footer() {
  return (
    <F.Wrapper>
      <F.Container>
        <FooterIcons />
        <F.SmallText>© 2022 Unity Music</F.SmallText>
      </F.Container>
    </F.Wrapper>
  );
}
