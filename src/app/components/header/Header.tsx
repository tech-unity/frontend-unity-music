import { NavLink } from 'react-router-dom';
import Logo from '../Logo';
import * as H from './Header.styles';

export default function Header() {
  return (
    <H.Wrapper>
      <H.Section>
        <NavLink to='/'>
        <Logo />
        </NavLink>
      </H.Section>
      <H.Section>
        <H.List>
          <H.ListItem>
            <NavLink to='/escalas'>Escalas</NavLink>
          </H.ListItem>
          <H.ListItem>
            <NavLink to='/contribuicoes'>Contribuições</NavLink>
          </H.ListItem>
        </H.List>
      </H.Section>
    </H.Wrapper>
  );
}
