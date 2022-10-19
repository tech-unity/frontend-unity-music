import ScaleCard from '../components/scale-card/ScaleCard';
import guitar from '../../assets/contributions/guitar.svg';
import { Band } from '../../sdk/models/Scale';
import { useEffect, useState } from 'react';
import ScaleService from '../../sdk/services/Scale.service';

export default function BandFeature() {
  const [band, setBand] = useState<Band[]>();

  useEffect(() => {
    // TODO: usar redux aqui
    ScaleService.getScales().then(scales => {
      setBand(scales[scales.length - 1].band);
    });
  }, []);

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
