import { Container, Content, Header, Text } from './Home.styles.view';
import cruz from '../../assets/cruz';
import DefaultLayout from '../../layouts/Default';

export default function HomeView() {
  return (
    <DefaultLayout>
      <Container base64={cruz()}>
        <Text>
          <Header>Unity Music</Header>
          <Content>Levando amor ao mundo</Content>
        </Text>
      </Container>
    </DefaultLayout>
  );
}
