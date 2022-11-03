import { mdiAccountGroup } from '@mdi/js';
import { useEffect, useState } from 'react';
import withBoundary from '../../core/hoc/withBoundary';
import { Person } from '../../sdk/models/Person';
import ScaleService from '../../sdk/services/Scale.service';
import ScaleCard from '../components/scale-card/ScaleCard';

export function SingersFeature() {
  const [singers, setSingers] = useState<Person[]>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    // TODO: usar redux aqui
    ScaleService.getScales()
      .then(scales => {
        setSingers(scales[scales.length - 1].singers);
      })
      .catch(error => setError(new Error(error.message)));
  }, []);

  if (error) throw error;

  return (
    <ScaleCard
      position='even'
      header='Vocal'
      singersList={singers}
      isSvg={false}
      icon={mdiAccountGroup}
    ></ScaleCard>
  );
}

export default withBoundary(SingersFeature, 'vocal');
