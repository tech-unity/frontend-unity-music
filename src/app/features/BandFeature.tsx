import Guitar from '../../assets/contributions/Guitar';
import withBoundary from '../../core/hoc/withBoundary';
import useScale from '../../core/hooks/useScale';
import ScaleCard from '../components/scale-card/ScaleCard';

function BandFeature() {
  const { errorOnFetching, currentBand } = useScale();

  if (errorOnFetching) throw errorOnFetching;

  return (
    <ScaleCard
      position='odd'
      header='Banda'
      bandList={currentBand}
      icon={<Guitar />}
    ></ScaleCard>
  );
}

export default withBoundary(BandFeature, 'banda');
