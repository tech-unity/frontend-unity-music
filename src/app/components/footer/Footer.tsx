import Logo from '../Logo';
import * as F from './Footer.styles';
import FooterIcons from './FooterIcons';

export default function Footer() {
  return (
    <F.Wrapper>
      <F.Container>
        <F.Branding>
          <Logo></Logo>
          <F.Text>
            <F.Content>R. Jatobá, 416 - Guanandi, Campo Grande - MS</F.Content>
            <F.Copyright>© 2022 Unity Music</F.Copyright>
          </F.Text>
        </F.Branding>
        <FooterIcons />
      </F.Container>
    </F.Wrapper>
  );
}
