import usePageTitle from '../../../core/hooks/usePageTitle';
import ScaleCreateFeature from '../../features/ScaleCreateFeature';
import DefaultLayout from '../../layouts/Default/Default.layout';

export default function ScaleCreateView() {
  usePageTitle('Nova Escala');

  return (
    <DefaultLayout>
      <ScaleCreateFeature />
    </DefaultLayout>
  );
}
