import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import * as DL from './Default.layout.styles';
interface DefaultLayoutProps {
  children: React.ReactNode;
}

function DefaultLayout(props: DefaultLayoutProps) {
  return (
    <DL.Wrapper>
      <DL.Header>
        <Header />
      </DL.Header>
      <DL.Main>
        <DL.FeaturedContent>{props.children}</DL.FeaturedContent>
      </DL.Main>
      <DL.Footer>
        <Footer></Footer>
      </DL.Footer>
    </DL.Wrapper>
  );
}

export default DefaultLayout;
