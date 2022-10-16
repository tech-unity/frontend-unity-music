import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

import usePageTitle from '../../../core/hooks/usePageTitle';
import BandFeature from '../../features/BandFeature';
import SingersFeature from '../../features/SingersFeature';
import DefaultLayout from '../../layouts/Default';
import * as S from './Scale.styles.view';

export default function ScaleView() {
  usePageTitle('Escalas');

  const [date, setDate] = useState<Date>();

  useEffect(() => {}, []);

  return (
    <DefaultLayout>
      <S.Heading>Escala</S.Heading>
      <S.SubHeading>{dayjs(date).format('DD-MM-YYYY')}</S.SubHeading>
      <S.Section>
        <S.Scale>
          <BandFeature></BandFeature>
        </S.Scale>
        <S.Scale>
          <SingersFeature></SingersFeature>
        </S.Scale>
      </S.Section>
    </DefaultLayout>
  );
}
