import * as S from './Scale.styles';

export default function Scale() {
  return (
    <S.Wrapper>
      <S.Section>
        <S.Header>27/02/2022</S.Header>
      </S.Section>
      <S.HorizontalLine></S.HorizontalLine>
      <S.Section>
        <S.Band>
          <S.Header>Banda</S.Header>
          <S.List>
            <S.ListItem>Gabriel Monteiro</S.ListItem>
            <S.ListItem>Jader Almeida</S.ListItem>
            <S.ListItem>Enzo Moraes</S.ListItem>
            <S.ListItem>Raul Leão</S.ListItem>
          </S.List>
        </S.Band>
        <S.Singers>
          <S.Header>Vocal</S.Header>
          <S.List>
            <S.ListItem>Giulia Caroline</S.ListItem>
            <S.ListItem>Leandro Jara</S.ListItem>
          </S.List>
        </S.Singers>
      </S.Section>
    </S.Wrapper>
  );
}
