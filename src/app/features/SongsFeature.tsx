import Songs from '../../assets/scales/Songs';
import withBoundary from '../../core/hoc/withBoundary';
import useScale from '../../core/hooks/useScale';
import ScaleCard from '../components/scale-card/ScaleCard';

function SongsFeature() {
  const { currentSongs, errorOnFetching } = useScale();

  if (errorOnFetching) throw errorOnFetching;

  return (
    <ScaleCard
      position='even'
      header='Músicas'
      songsList={currentSongs}
      icon={<Songs />}
    ></ScaleCard>
  );
}

export default withBoundary(SongsFeature, 'músicas');
