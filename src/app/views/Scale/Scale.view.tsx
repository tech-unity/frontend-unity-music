import { mdiAccountGroup } from '@mdi/js';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { Band, Singers } from '../../../sdk/models/Scale';
import ScaleService from '../../../sdk/services/Scale.service';
import guitar from '../../../assets/contributions/guitar.svg'
import ScaleCard from '../../components/scale-card/ScaleCard';
import DefaultLayout from '../../layouts/Default';
import * as S from './Scale.styles.view';
import usePageTitle from '../../../core/hooks/usePageTitle';

export default function ScaleView() {
  usePageTitle('Escalas')
  const [band, setBand] = useState<Band[]>();
  const [singers, setSingers] = useState<Singers[]>();
  const [date, setDate] = useState<Date>();

  useEffect(() => {
    fetchData();
    setSingers([{ name: 'Leandro' }, { name: 'Amanda' }]);
    setDate(new Date());
  }, [band]);

  const fetchData = async () => {
    try {
      const scale = await ScaleService.getScales();
      console.log(scale);
      setBand([
        { name: 'Enzo', instrument: 'Violão' },
        { name: 'Raul', instrument: 'Violão' },
        { name: 'Gabriel', instrument: 'Teclado' },
      ]);
    } catch (e) {
      console.log('console', JSON.stringify(e));
    }
  };

  return (
    <DefaultLayout>
      <S.Heading>Escala</S.Heading>
      <S.SubHeading>{dayjs(date).format('DD-MM-YYYY')}</S.SubHeading>
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
    </DefaultLayout>
  );
}
