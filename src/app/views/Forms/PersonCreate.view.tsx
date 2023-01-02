import usePageTitle from '../../../core/hooks/usePageTitle';
import PersonCreateFeature from '../../features/PersonCreateFeature';
import DefaultLayout from '../../layouts/Default/Default.layout';

export default function PersonCreateView() {
  usePageTitle('Nova Pessoa');

  return (
    <DefaultLayout>
      <PersonCreateFeature />
    </DefaultLayout>
  );
}
