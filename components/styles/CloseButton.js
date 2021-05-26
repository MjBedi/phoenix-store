import styled from 'styled-components';

const CloseButton = styled.button`
  background: none;
  font-size: 4rem;
  border: 0;
  position: absolute;
  z-index: 2;
  right: 16px;
  cursor: pointer;
  top: 7px;
  &:hover {
    color: var(--purple);
  }
`;

export default CloseButton;
