import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const List = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 40px 20px 40px;
  justify-content: space-evenly;
  gap: 35px;
  max-width: 100%;
`;
