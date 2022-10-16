import logo from '../../../assets/Logo.png';
import * as H from './Header.styles';

export default function Header() {
  return (
    <H.Wrapper>
      <H.Section>
        <H.StyledLink to='/'>
          <img src={logo} alt='Logo da unity' width={'160px'} height={'80px'} />
        </H.StyledLink>
      </H.Section>
      <H.Section>
        <H.List>
          <H.ListItem>
            <H.StyledLink to='/escalas'>Escalas</H.StyledLink>
          </H.ListItem>
          <H.ListItem>
            <H.StyledLink to='/contribuicoes'>Contribuições</H.StyledLink>
          </H.ListItem>
        </H.List>
      </H.Section>
    </H.Wrapper>
  );
}
