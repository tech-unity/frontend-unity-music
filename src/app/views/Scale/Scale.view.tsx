import dayjs from 'dayjs';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import usePageTitle from '../../../core/hooks/usePageTitle';
import useScale from '../../../core/hooks/useScale';
import { selectCurrentScaleDate } from '../../../core/selectors/selectScales';
import { AppDispatch } from '../../../core/store';
import { fetchScales } from '../../../core/store/Scale.store';
import BandFeature from '../../features/BandFeature';
import SingersFeature from '../../features/SingersFeature';
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
      <S.Heading>Escala</S.Heading>
      <S.SubHeading>
        {dayjs(currentScaleDate).format('DD-MM-YYYY')}
      </S.SubHeading>
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
