import MainRoute from "../../routes";
import Header from "../Header/Header";
import * as Styled from './style'

function HomePage() {

  return (
    <Styled.Wrapper>
      <Header />
      <MainRoute />
    </Styled.Wrapper>
  );
}

export default HomePage;
