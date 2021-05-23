import styled from 'styled-components';

const PaginationStyles = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin: 1.4rem 0;
  border: 1px solid var(--lightgrey);
  border-radius: 10px;
  font-size: clamp(0.4rem, 2vw, 1.7rem);
  white-space: nowrap;

  & > * {
    margin: 0;
    padding: 15px 30px;
    border-right: 1px solid var(--lightgrey);
    &:last-child {
      border-right: 0;
    }
  }
  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
  }

  a:hover {
    font-size: calc(100% + 1%);
    padding: calc(15px - 1%);
    transition: 190ms cubic-bezier(0.29, 0.3, 0.66, 0.64);
  }
`;

export default PaginationStyles;
