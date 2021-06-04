import styled, { keyframes } from 'styled-components';

const DropDown = styled.div`
  position: absolute;
  width: 90%;
  max-width: var(--maxwidth);
  z-index: 2;
  /* border: 1px solid var(--lightgrey); */
  box-shadow: var(--bs);
  border-radius: 0 0 1rem 1rem;
  left: 50%;
  transform: translate(-50%);
  div {
    text-align: center;
  }
`;

const DropDownItem = styled.div`
  cursor: pointer;
  border-bottom: 1px solid var(--lightgrey);
  background: ${(props) => (props.highlighted ? '#f7f7f7' : 'white')};
  padding: 1rem;
  transition: all 0.2s;
  ${(props) => (props.highlighted ? 'padding-left: 2rem;' : null)};
  display: flex;
  align-items: center;
  border-left: 6px solid ${(props) => (props.highlighted ? '#b080ff' : 'white')};
  img {
    margin-right: 10px;
  }
`;

const glow = keyframes`
  from {
    box-shadow: 0 0 0px var(--purple);
  }

  to {
    box-shadow: 0 0 10px 1px var(--purple);
  }
`;

const SearchStyles = styled.div`
  position: relative;
  margin: 0.4rem 0;

  .inputBox {
    width: 95%;
    max-width: var(--maxwidth);
    height: 100%;
    position: relative;
    border-radius: 1rem;
    margin: 0 auto;
    white-space: nowrap;
    background: var(--litTwo);
    /* &.loading {
      animation: ${glow} 1s ease-in-out infinite alternate;
    } */

    svg {
      height: 100%;
      left: 12px;
      position: absolute;
      top: 9px;
      fill: var(--lightpurple);
    }
  }

  input {
    width: 100%;
    /* max-width: var(--maxwidth); */
    padding: clamp(1rem, 1vh, 2.6rem) clamp(1rem, 1.4vw, 2rem);
    border: 0;
    border-radius: 1rem;
    font-size: clamp(1.6rem, 1.8vw, 2rem);
    background: mistyrose;
    height: 100%;
    outline: none;
    padding-inline-start: 52px;
    &.loading {
      animation: ${glow} 1s ease-in-out infinite alternate;
    }

    &:hover,
    &:focus {
      box-shadow: var(--bs);
      transition: all 240ms ease-in-out;
    }
  }
`;

export { DropDown, DropDownItem, SearchStyles };
