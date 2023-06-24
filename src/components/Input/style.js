import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  justify-content: center;

  background-color: ${({theme})=>theme.colors.input};
  color: ${({ theme }) => theme.colors.text};

  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 0 0 0 15px;
  gap: 5px;

  & input {
    color: ${({ theme }) => theme.colors.text};
    border-radius: 5px;
    border-width: 0px;
    background-color: transparent;
    outline: none;
    height: 40px;
  }
`;

export const Button = styled.button`
  all: initial;
  & :hover {
    background-color: rgba(128, 128, 128, 0.5);
  }
`;
