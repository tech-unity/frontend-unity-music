import { NavLink } from 'react-router-dom';
import Logo from '../Logo';
import * as H from './Header.styles';

export default function Header() {
  return (
    <H.Wrapper>
      <H.Container>
        <NavLink to='/'>
          <Logo />
        </NavLink>
        <H.List>
        <H.ListItem>
            <NavLink to='/sobre-nos'>Sobre nós</NavLink>
          </H.ListItem>
          <H.ListItem>
            <NavLink to='/escalas'>Escalas</NavLink>
          </H.ListItem>
          <H.ListItem>
            <NavLink to='/contribuicoes'>Contribuições</NavLink>
          </H.ListItem>
        </H.List>
      </H.Container>
    </H.Wrapper>
  );
}
