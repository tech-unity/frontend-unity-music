import { mdiAccountGroup } from '@mdi/js';
import withBoundary from '../../core/hoc/withBoundary';
import useScale from '../../core/hooks/useScale';
import ScaleCard from '../components/scale-card/ScaleCard';

export function SingersFeature() {
  const { currentSingers, errorOnFetching } = useScale();

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
