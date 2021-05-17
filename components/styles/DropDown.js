import styled, { keyframes } from 'styled-components';

const DropDown = styled.div`
  position: absolute;
  width: 90%;
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
  border-bottom: 1px solid var(--lightgrey);
  background: ${(props) => (props.highlighted ? '#f7f7f7' : 'white')};
  padding: 1rem;
  transition: all 0.2s;
  ${(props) => (props.highlighted ? 'padding-left: 2rem;' : null)};
  display: flex;
  align-items: center;
  border-left: 6px solid
    ${(props) => (props.highlighted ? props.theme.lightgrey : 'white')};
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
  input {
    width: 90vw;
    padding: clamp(1rem, 1vh, 2.6rem) clamp(1rem, 1.4vw, 2rem);
    border: 0;
    font-size: clamp(1.6rem, 1.8vw, 2rem);
    background: mistyrose;
    &.loading {
      animation: ${glow} 1s ease-in-out infinite alternate;
    }
  }
`;

export { DropDown, DropDownItem, SearchStyles };
