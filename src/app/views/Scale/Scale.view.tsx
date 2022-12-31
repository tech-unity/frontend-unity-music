import dayjs from 'dayjs';
import { useEffect } from 'react';

import usePageTitle from '../../../core/hooks/usePageTitle';
import useScale from '../../../core/hooks/useScale';
import BandFeature from '../../features/BandFeature';
import SingersFeature from '../../features/SingersFeature';
import SongsFeature from '../../features/SongsFeature';
import DefaultLayout from '../../layouts/Default';
import * as S from './Scale.styles.view';

export default function ScaleView() {
  usePageTitle('Escalas');

  const { currentScaleDate, fetchScales } = useScale();

  useEffect(() => {
    fetchScales();
  }, [fetchScales]);

  return (
    <DefaultLayout>
      <S.Heading>Escala &nbsp;{dayjs(currentScaleDate).format('DD-MM-YYYY')}</S.Heading>
      <S.Section>
        <S.Scale>
          <SingersFeature></SingersFeature>
        </S.Scale>

        <S.Scale>
          <BandFeature></BandFeature>
        </S.Scale>

        <S.Scale>
          <SongsFeature></SongsFeature>
        </S.Scale>
      </S.Section>
    </DefaultLayout>
  );
}
