import { mdiAccountGroup } from '@mdi/js';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import guitar from '../../assets/contributions/guitar.svg';
import ScaleCard from '../../components/scale-card/ScaleCard';
import { Band, Singers } from '../../core/models/Scale';
import * as S from './Scale.styles.view';

export default function ScaleView() {
  const [band, setBand] = useState<Band[]>();
  const [singers, setSingers] = useState<Singers[]>();
  const [date, setDate] = useState<Date>();
  useEffect(() => {
    setBand([
      { name: 'Enzo', instrument: 'Violão' },
      { name: 'Raul', instrument: 'Violão' },
      { name: 'Gabriel', instrument: 'Teclado' },
    ]);
    setSingers([{ name: 'Leandro' }, { name: 'Amanda' }]);
    setDate(new Date());
  }, []);
  return (
    <S.Wrapper>
      <S.Heading>Escala</S.Heading>
      <S.SubHeading>{ dayjs(date).format('DD-MM-YYYY') }</S.SubHeading>
      <S.Section>
        <S.Scale>
          <ScaleCard
            position='odd'
            header='Banda'
            bandList={band}
            isSvg={true}
            icon={guitar}
          ></ScaleCard>
        </S.Scale>
        <S.Scale>
          <ScaleCard
            position='even'
            header='Vocal'
            singersList={singers}
            isSvg={false}
            icon={mdiAccountGroup}
          ></ScaleCard>
        </S.Scale>
      </S.Section>
    </S.Wrapper>
  );
}
