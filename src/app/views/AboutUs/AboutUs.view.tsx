import usePageTitle from '../../../core/hooks/usePageTitle';

import AboutUsFeature from '../../features/AboutUsFeature';
import DefaultLayout from '../../layouts/Default';
import * as C from './AboutUs.styles.view';

export default function ContributionView() {
  usePageTitle('Sobre nós');
  return (
    <DefaultLayout>
      <C.Heading>Sobre nós</C.Heading>
      <C.Section>
        <AboutUsFeature />
      </C.Section>
    </DefaultLayout>
  );
}
