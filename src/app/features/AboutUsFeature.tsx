import styled from 'styled-components';
import image1 from '../../assets/about-us/image1.png';
import image2 from '../../assets/about-us/image2.png';
import image3 from '../../assets/about-us/image3.png';
import withBoundary from '../../core/hoc/withBoundary';
import CustomCarousel from '../components/carousel/Carousel';
import { TABLET_WIDTH } from '../_constants';

function AboutUsFeature() {
  return (
    <Container>
      <Content>
        A Unity é uma comunidade jovem cristã da IASD Guanandi que tem como
        objetivo levar a palavra de Deus para outros jovens. Foi criada em 2020
        com a ideia de transformar uma simples escola sabatina em uma comunidade
        jovem ativa na sociedade e cada vez mais unida entre os membros.
      </Content>
      <Images>
        <CustomCarousel src={[image1, image2, image3]} />
      </Images>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  width: 100%;

  @media screen and (max-width: ${TABLET_WIDTH}px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Content = styled.div`
  font-size: 16px;
  text-align: justify;
  line-height: 150%;
  max-width: 556px;
  height: 264px;

  word-wrap: break-word;
`;

const Images = styled.div`
  width: 480px;

  @media screen and (max-width: ${TABLET_WIDTH}px) {
    width: 280px;
  }
`;

export default withBoundary(AboutUsFeature, 'sobre-nós');
