import VrCard from '../../components/vr-card/VrCard';
import bloodSack from '../../assets/contributions/bloodSack.svg'
import hands from '../../assets/contributions/hands.svg'
import guitar from '../../assets/contributions/guitar.svg'

import { Container } from './Contribution.styles.view';

export default function ContributionView() {
  return (
    <Container>
      <VrCard
        position='odd'
        header='Doação de sangue'
        content='Praesent eget nulla bibendum, sodales neque quis, elementum leo. Donec vestibulum accumsan odio sit amet interdum. Morbi vitae ante eu sapien molestie gravida. '
        isSvg={true}
        icon={bloodSack}
      ></VrCard>
      <VrCard
        position='even'
        header='Voluntário'
        content='Praesent eget nulla bibendum, sodales neque quis, elementum leo. Donec vestibulum accumsan odio sit amet interdum. Morbi vitae ante eu sapien molestie gravida. '
        isSvg={true}
        icon={hands}
      ></VrCard>
      <VrCard
        position='odd'
        header='Serenata'
        content='Praesent eget nulla bibendum, sodales neque quis, elementum leo. Donec vestibulum accumsan odio sit amet interdum. Morbi vitae ante eu sapien molestie gravida. '
        isSvg={true}
        icon={ guitar }
      ></VrCard>
    </Container>
  );
}
