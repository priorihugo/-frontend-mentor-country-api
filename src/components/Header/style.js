import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;

  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  background-color: ${({theme})=>theme.colors.header};

  align-items: center;
  justify-content: space-between;

  padding: 0 40px;

  height: 10vh;
  max-width: 100%;

`;