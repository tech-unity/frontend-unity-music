import { Container, Content, Header, Text } from './Home.styles.view';
import cruz from '../../assets/cruz';

export default function HomeView() {
  return (
    <Container base64={cruz()}>
      <Text>
        <Header>Unity Music</Header>
        <Content>Levando amor ao mundo</Content>
      </Text>
    </Container>
  );
}
