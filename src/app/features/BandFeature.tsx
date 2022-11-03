import ScaleCard from '../components/scale-card/ScaleCard';
import guitar from '../../assets/contributions/guitar.svg';
import { Band } from '../../sdk/models/Scale';
import { useEffect, useState } from 'react';
import ScaleService from '../../sdk/services/Scale.service';
import withBoundary from '../../core/hoc/withBoundary';

export function BandFeature() {
  const [band, setBand] = useState<Band[]>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    // TODO: usar redux aqui
    ScaleService.getScales()
      .then(scales => {
        setBand(scales[scales.length - 1].band);
      })
      .catch(error => setError(new Error(error.message)));
  }, []);

  if (error) throw error;
  
  return (
    <ScaleCard
      position='odd'
      header='Banda'
      bandList={band}
      isSvg={true}
      icon={guitar}
    ></ScaleCard>
  );
}

export default withBoundary(BandFeature, 'banda');
