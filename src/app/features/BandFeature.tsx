import Guitar from '../../assets/contributions/Guitar';
import withBoundary from '../../core/hoc/withBoundary';
import useScale from '../../core/hooks/useScale';
import ScaleCard from '../components/scale-card/ScaleCard';

export function BandFeature() {
  const { errorOnFetching, currentBand } = useScale();

  if (errorOnFetching) throw errorOnFetching;

  return (
    <ScaleCard
      position='odd'
      header='Banda'
      bandList={currentBand}
      iconJSX={<Guitar />}
    ></ScaleCard>
  );
}

export default withBoundary(BandFeature, 'banda');
