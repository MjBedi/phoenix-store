import styled from 'styled-components';

const PriceTag = styled.span`
  background: var(--primary);
  /* transform: rotate(3deg); */
  color: white;
  font-weight: 600;
  padding: 5px;
  line-height: 1;
  font-size: clamp(1.7rem, 2vw, 2.1rem);
  display: inline-block;
  position: absolute;
  top: -3px;
  right: -3px;
`;

export default PriceTag;