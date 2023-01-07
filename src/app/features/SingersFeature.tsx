import Microphone from '../../assets/scales/Microphone';
import withBoundary from '../../core/hoc/withBoundary';
import useScale from '../../core/hooks/useScale';
import ScaleCard from '../components/scale-card/ScaleCard';

function SingersFeature() {
  const { currentSingers, errorOnFetching } = useScale();

  if (errorOnFetching) throw errorOnFetching;

  return (
    <ScaleCard
      position='even'
      header='Vocal'
      singersList={currentSingers}
      icon={<Microphone />}
    ></ScaleCard>
  );
}

export default withBoundary(SingersFeature, 'vocal');
