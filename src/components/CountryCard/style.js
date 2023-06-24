import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 305px;
  height: 450px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;

  background-color: ${({theme})=>theme.colors.element};
  color: ${({theme})=>theme.colors.text};

  cursor: pointer;

  & div {
    height: 170px;
    width: 100%;
    overflow: hidden;
  }

  & div img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  & p,
  h1 {
    margin: 10px;
    color: ${({theme})=>theme.text};
  }
`;
