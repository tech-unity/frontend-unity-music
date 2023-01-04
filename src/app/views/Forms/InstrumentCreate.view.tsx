import usePageTitle from '../../../core/hooks/usePageTitle';
import InstrumentCreateFeature from '../../features/InstrumentCreateFeature';
import DefaultLayout from '../../layouts/Default/Default.layout';

export default function InstrumentCreateView() {
  usePageTitle('Novo Instrumento');

  return (
    <DefaultLayout>
      <InstrumentCreateFeature />
    </DefaultLayout>
  );
}
