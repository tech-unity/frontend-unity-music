import guitar from '../../assets/contributions/guitar.svg';
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
      isSvg={true}
      icon={guitar}
    ></ScaleCard>
  );
}

export default withBoundary(BandFeature, 'banda');
