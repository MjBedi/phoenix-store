import styled, { keyframes } from 'styled-components';

const animation = keyframes`
    0% {
      box-shadow: 20px 0 #000000, -20px 0 #00000022;
      background: #000000;
    }
    33% {
      box-shadow: 20px 0 #000000, -20px 0 #00000022;
      background: #00000022;
    }
    66% {
      box-shadow: 20px 0 #00000022, -20px 0 #000000;
      background: #00000022;
    }
`;

const LoadingScreen = styled.div`
  margin: 0 auto;
  width: 12px;
  height: 12px;
  background: #000000;
  border-radius: 50%;
  box-shadow: 20px 0 #00000022, -20px 0 #000000;
  animation: ${animation} 1s infinite linear alternate;
`;

export default LoadingScreen;
