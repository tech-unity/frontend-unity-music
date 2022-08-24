import logo from '../../assets/Logo.png';
import * as H from './Header.styles';

export default function Header() {
  return (
    <H.Wrapper>
      <H.Section>
        <img
          src={logo}
          alt='Logo da unity'
          width={'160px'}
          height={'80px'}
        />
      </H.Section>
      <H.Section>
        <H.List>
          <H.ListItem><H.StyledLink to="/">Home</H.StyledLink></H.ListItem>
          <H.ListItem><H.StyledLink to="/escalas">Escalas</H.StyledLink></H.ListItem>
          <H.ListItem>Sobre nós</H.ListItem>
        </H.List>
      </H.Section>
    </H.Wrapper>
  );
}
