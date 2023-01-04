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
        Lorem ipsum dolor sit amet,consectet-ur adipiscing elit. Curabitur ut
        odio ur-na. Sed scelerisque nisi suscipit lorem maximus tempor. Aenean
        viverra nibh nisl, sed pretium est cursus non. Donec tempus metus a ante
        pulvinar dignis-sim.Lorem ipsum dolor sit amet,consectet-ur adipiscing.
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
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  gap: 108px;
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
