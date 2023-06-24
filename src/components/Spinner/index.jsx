import styled, { keyframes } from "styled-components";

const Spin = keyframes`
0% { transform: rotate(0deg); };
100% { transform: rotate(360deg)}; 
`;

export const Spinner = styled.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 2s linear infinite;
  animation-name: ${Spin};
  animation-duration: 4s;
  animation-iteration-count: infinite;
`;


