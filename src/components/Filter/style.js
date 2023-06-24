import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  justify-content: center;

  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.input};
  color: ${({ theme }) => theme.colors.text};

  & select {
    border-radius: 5px;
    border-width: 0px;
    outline: none;
    height: 40px;
    padding: 0 20px;
    width: 200px;
    background-color: ${({ theme }) => theme.colors.input};
    color: ${({ theme }) => theme.colors.text};
  }

  & select option {
    background-color: ${({ theme }) => theme.colors.input};
    color: ${({ theme }) => theme.colors.text};
    padding: 0 20px;
  }
`;
