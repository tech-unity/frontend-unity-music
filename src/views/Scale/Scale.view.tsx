import { mdiAccountGroup } from '@mdi/js';
import guitar from '../../assets/contributions/guitar.svg';
import Card from '../../components/card/Card';
import * as S from './Scale.styles.view';

export default function ScaleView() {
  return (
    <S.Wrapper>
      <S.Heading>Escala</S.Heading>
      <S.Section>
        <S.Scale>
          <Card
            position='odd'
            header='Banda'
            content='Praesent eget nulla bibendum, sodales neque quis, elementum leo. Donec vestibulum accumsan odio sit amet interdum. Morbi vitae ante eu sapien molestie gravida. '
            isSvg={true}
            icon={guitar}
          ></Card>
        </S.Scale>
        <S.Scale>
          <Card
            position='even'
            header='Vocal'
            content='Praesent eget nulla bibendum, sodales neque quis, elementum leo. Donec vestibulum accumsan odio sit amet interdum. Morbi vitae ante eu sapien molestie gravida. '
            isSvg={false}
            icon={mdiAccountGroup}
          ></Card>
        </S.Scale>
      </S.Section>
    </S.Wrapper>
  );
}
