import { Container, Content, Header } from './Home.styles.view';
import cruz from '../../assets/cruz';

export default function HomeView() {
  return (
    <Container base64={cruz()}>
      <Header>Unity Music</Header>
      <Content>Levando louvores ao mundo</Content>
    </Container>
  );
}
