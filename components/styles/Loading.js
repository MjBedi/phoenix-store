import styled, { keyframes } from 'styled-components';

const animation = keyframes`
    0% {
      box-shadow: 20px 0 #8b42ff, -20px 0 #ebdfff;
      background: #8b42ff;
    }
    33% {
      box-shadow: 20px 0 #8b42ff, -20px 0 #ebdfff;
      background: #ebdfff;
    }
    66% {
      box-shadow: 20px 0 #ebdfff, -20px 0 #8b42ff;
      background: #ebdfff;
    }
`;

const LoadingScreen = styled.div`
  margin: 0 auto;
  width: 12px;
  height: 12px;
  background: #8b42ff;
  border-radius: 50%;
  box-shadow: 20px 0 #ebdfff, -20px 0 #8b42ff;
  animation: ${animation} 1s infinite linear alternate;
`;

export default LoadingScreen;
