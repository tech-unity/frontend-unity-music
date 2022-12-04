import { mdiAccountGroup } from '@mdi/js';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import withBoundary from '../../core/hoc/withBoundary';
import {
  selectCurrentScaleSingers,
  selectErrorOnFetching,
} from '../../core/selectors/selectScales';
import ScaleCard from '../components/scale-card/ScaleCard';

export function SingersFeature() {
  const currentSingers = useSelector(selectCurrentScaleSingers);
  const errorOnFetching = useSelector(selectErrorOnFetching);

  if (errorOnFetching) throw errorOnFetching;

  return (
    <ScaleCard
      position='even'
      header='Vocal'
      singersList={currentSingers}
      isSvg={false}
      icon={mdiAccountGroup}
    ></ScaleCard>
  );
}

export default withBoundary(SingersFeature, 'vocal');
