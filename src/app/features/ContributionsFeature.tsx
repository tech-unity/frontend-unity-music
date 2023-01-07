import styled from 'styled-components';
import BloodSack from '../../assets/contributions/BloodSack';
import Guitar from '../../assets/contributions/Guitar';
import Hands from '../../assets/contributions/Hands';
import Card from '../components/card/Card';

export default function ContributionsFeature() {
  return (
    <Wrapper>
      <CardContainer>
        <Card
          position='odd'
          header='Doação de sangue'
          content='Uma vez por semestre nos juntamos para doar sangue no Hemosul, aproveitando a oportunidade para distribuir literatura adventista.'
          icon={<BloodSack />}
        ></Card>
      </CardContainer>
      <CardContainer>
        <Card
          position='even'
          header='Voluntariado'
          content='O papel da igreja é auxiliar o próximo.
            Por isso ajudamos a comunidade com tudo que está ao nosso alcance.'
          icon={<Hands />}
        ></Card>
      </CardContainer>
      <CardContainer>
        <Card
          position='odd'
          header='Serenatas'
          content='Música acalma, estimula a memória, alivia dores e ajuda no exercício físico.
            Por isso, utilizamos dessa linguagem universal para levar amor ao próximo.'
          icon={<Guitar />}
        ></Card>
      </CardContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;

  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  padding: 16px;
  min-width: 230px;
  max-width: 380px;
  flex: 1;
`;
