import bloodSack from '../../assets/contributions/bloodSack.svg';
import guitar from '../../assets/contributions/guitar.svg';
import hands from '../../assets/contributions/hands.svg';

import Card from '../../components/card/Card';
import * as C from './Contribution.styles.view';

export default function ContributionView() {
  return (
    <C.Wrapper>
      <C.Heading>Contribuições</C.Heading>
      <C.Section>
        <C.Contributions>
          <Card
            position='odd'
            header='Doação de sangue'
            content='Praesent eget nulla bibendum, sodales neque quis, elementum leo. Donec vestibulum accumsan odio sit amet interdum. Morbi vitae ante eu sapien molestie gravida. '
            isSvg={true}
            icon={bloodSack}
          ></Card>
        </C.Contributions>
        <C.Contributions>
          <Card
            position='even'
            header='Voluntário'
            content='Praesent eget nulla bibendum, sodales neque quis, elementum leo. Donec vestibulum accumsan odio sit amet interdum. Morbi vitae ante eu sapien molestie gravida. '
            isSvg={true}
            icon={hands}
          ></Card>
        </C.Contributions>
        <C.Contributions>
          <Card
            position='odd'
            header='Serenata'
            content='Praesent eget nulla bibendum, sodales neque quis, elementum leo. Donec vestibulum accumsan odio sit amet interdum. Morbi vitae ante eu sapien molestie gravida. '
            isSvg={true}
            icon={guitar}
          ></Card>
        </C.Contributions>
      </C.Section>
    </C.Wrapper>
  );
}
