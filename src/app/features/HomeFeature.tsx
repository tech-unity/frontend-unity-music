import styled from "styled-components";
import Cruz from "../../assets/cruz";
import withBoundary from "../../core/hoc/withBoundary";
import { TABLET_WIDTH } from "../_constants";

function HomeFeature() {
  return (
    <Container>
      <Content>
        Lorem ipsum dolor sit amet,consectet-ur adipiscing elit. Curabitur ut
        odio ur-na. Sed scelerisque nisi suscipit lorem maximus tempor. Aenean
        viverra nibh nisl, sed pretium est cursus non. Donec tempus metus a ante
        pulvinar dignis-sim.Lorem ipsum dolor sit amet,consectet-ur adipiscing.
      </Content>
      <Images>
        <Cruz/>
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
  display: flex;
  justify-content: center;
  align-content: center;
`;

export default withBoundary(HomeFeature, 'sobre-nós');
