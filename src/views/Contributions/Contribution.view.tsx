import bloodSack from '../../assets/contributions/bloodSack.svg';
import guitar from '../../assets/contributions/guitar.svg';
import hands from '../../assets/contributions/hands.svg';

import Card from '../../components/card/Card';
import DefaultLayout from '../../layouts/Default';
import * as C from './Contribution.styles.view';

export default function ContributionView() {
  return (
    <DefaultLayout>
      <C.Heading>Contribuições</C.Heading>
      <C.Section>
        <C.Contributions>
          <Card
            position='odd'
            header='Doação de sangue'
            content='Uma vez por semestre nos juntamos para doar sangue no Hemosul, aproveitando a oportunidade para distribuir literatura adventista.'
            isSvg={true}
            icon={bloodSack}
          ></Card>
        </C.Contributions>
        <C.Contributions>
          <Card
            position='even'
            header='Voluntariado'
            content='O papel da igreja é auxiliar o próximo.
            Por isso ajudamos a comunidade com tudo que está ao nosso alcance.'
            isSvg={true}
            icon={hands}
          ></Card>
        </C.Contributions>
        <C.Contributions>
          <Card
            position='odd'
            header='Serenatas'
            content='Música acalma, estimula a memória, alivia dores e ajuda no exercício físico.
            Por isso, utilizamos dessa linguagem universal para levar amor ao próximo.'
            isSvg={true}
            icon={guitar}
          ></Card>
        </C.Contributions>
      </C.Section>
    </DefaultLayout>
  );
}
