import ScaleCard from '../components/scale-card/ScaleCard';
import guitar from '../../assets/contributions/guitar.svg';
import { Band } from '../../sdk/models/Scale';
import { useEffect, useState } from 'react';
import ScaleService from '../../sdk/services/Scale.service';
import withBoundary from '../../core/hoc/withBoundary';
import { useSelector } from 'react-redux';
import {
  selectCurrentScaleBand,
  selectErrorOnFetching,
} from '../../core/selectors/selectScales';

export function BandFeature() {
  const currentBand = useSelector(selectCurrentScaleBand);
  const errorOnFetching = useSelector(selectErrorOnFetching);

  if (errorOnFetching) throw errorOnFetching;

  return (
    <ScaleCard
      position='odd'
      header='Banda'
      bandList={currentBand}
      isSvg={true}
      icon={guitar}
    ></ScaleCard>
  );
}

export default withBoundary(BandFeature, 'banda');
