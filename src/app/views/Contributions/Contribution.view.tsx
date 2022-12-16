import BloodSack from '../../../assets/contributions/BloodSack';
import Guitar from '../../../assets/contributions/Guitar';
import Hands from '../../../assets/contributions/Hands';
import usePageTitle from '../../../core/hooks/usePageTitle';

import Card from '../../components/card/Card';
import DefaultLayout from '../../layouts/Default';
import * as C from './Contribution.styles.view';

export default function ContributionView() {
  usePageTitle('Contribuições');
  return (
    <DefaultLayout>
      <C.Heading>Contribuições</C.Heading>
      <C.Section>
        <C.Contributions>
          <Card
            position='odd'
            header='Doação de sangue'
            content='Uma vez por semestre nos juntamos para doar sangue no Hemosul, aproveitando a oportunidade para distribuir literatura adventista.'
            icon={<BloodSack />}
          ></Card>
        </C.Contributions>
        <C.Contributions>
          <Card
            position='even'
            header='Voluntariado'
            content='O papel da igreja é auxiliar o próximo.
            Por isso ajudamos a comunidade com tudo que está ao nosso alcance.'
            icon={<Hands />}
          ></Card>
        </C.Contributions>
        <C.Contributions>
          <Card
            position='odd'
            header='Serenatas'
            content='Música acalma, estimula a memória, alivia dores e ajuda no exercício físico.
            Por isso, utilizamos dessa linguagem universal para levar amor ao próximo.'
            icon={<Guitar />}
          ></Card>
        </C.Contributions>
      </C.Section>
    </DefaultLayout>
  );
}
