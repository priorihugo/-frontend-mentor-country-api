import styled from "styled-components";
import Switch from "./Switch";

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;

  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);

  align-items: center;
  justify-content: space-between;

  padding: 0 40px;

  height: 10vh;
  max-width: 100%;

`;

function Header() {
  return (
    <Wrapper>
      <h1>Whats in the World</h1>

      <Switch />
    </Wrapper>
  );
}

export default Header;
