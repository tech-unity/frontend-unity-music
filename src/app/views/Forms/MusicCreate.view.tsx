import usePageTitle from '../../../core/hooks/usePageTitle';
import MusicCreateFeature from '../../features/MusicCreateFeature';
import DefaultLayout from '../../layouts/Default/Default.layout';

export default function MusicCreateView() {
  usePageTitle('Novo Instrumento');

  return (
    <DefaultLayout>
      <MusicCreateFeature />
    </DefaultLayout>
  );
}
