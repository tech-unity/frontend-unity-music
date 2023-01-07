import usePageTitle from '../../../core/hooks/usePageTitle';
import HomeFeature from '../../features/HomeFeature';
import DefaultLayout from '../../layouts/Default';
import * as C from './Home.styles.view';

export default function HomeView() {
  usePageTitle('Home');
  return (
    <DefaultLayout>
      <C.Section>
        <HomeFeature />
      </C.Section>
      {/* <C.Section>
        <C.Heading>Sobre nós</C.Heading>
        <AboutUsFeature />
      </C.Section>
      <C.Section>
        <C.Heading>Contribuições</C.Heading>
        <ContributionsFeature />
      </C.Section> */}
    </DefaultLayout>
  );
}
