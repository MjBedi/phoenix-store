import styled from 'styled-components';

const CloseButton = styled.button`
  background: black;
  color: white;
  font-size: 3rem;
  border: 0;
  position: absolute;
  z-index: 2;
  right: 1.4rem;
  cursor: pointer;
  &:hover {
    color: var(--purple);
  }
`;

export default CloseButton;