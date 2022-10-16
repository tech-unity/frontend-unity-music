import { Container, Content, Header, Text } from './Home.styles.view';
import DefaultLayout from '../../layouts/Default';
import cruzBase64 from '../../../assets/cruz';
import usePageTitle from '../../../core/hooks/usePageTitle';

export default function HomeView() {
  usePageTitle('Home')
  return (
    <DefaultLayout>
      <Container base64={cruzBase64()}>
        <Text>
          <Header>Unity Music</Header>
          <Content>Levando amor ao mundo</Content>
        </Text>
      </Container>
    </DefaultLayout>
  );
}
