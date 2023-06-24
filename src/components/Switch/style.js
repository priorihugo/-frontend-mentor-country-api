import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 15px;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  color: ${({theme})=>theme.colors.text};
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;
