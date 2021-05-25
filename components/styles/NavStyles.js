import styled from 'styled-components';

const NavDropdownStyles = styled.ul`
  display: block;
  position: relative;
  background-color: var(--litThree);
  text-decoration: none;
  border-bottom-left-radius: 0.6rem;
  border-bottom-right-radius: 0.6rem;
  left: 0;
  top: 100%;
  z-index: 200000;
`;

const NavStyles = styled.nav`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
  white-space: nowrap;
  /* font-size: 2rem; */

  a,
  button {
    padding: clamp(1.4rem, 1.8vh, 2.6rem) clamp(1rem, 1.4vw, 2rem);
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-weight: 900;
    font-size: clamp(1.6rem, 2vw, 2rem);
    background: none;
    border: 0;
    cursor: pointer;
    /* @media (max-width: 700px) {
      font-size: 10px;
      padding: 0 10px;
    } */

    &:after {
      height: 3px;
      background: var(--primary);
      content: '';
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 3rem;
    }
    &:hover,
    &:focus {
      outline: none;
      text-decoration: none;
      &:after {
        width: 80%;
      }
    }

    /* .account {
      position: relative;

      :hover ${NavDropdownStyles} {
        display: block;
        div {
          display: block;
        }
      }
    } */
  }

  /* @media (max-width: 1300px) {
    border-top: 1px solid var(--lightGray);
    width: 100%;
    justify-content: center;
    font-size: 1.5rem;
  } */
`;

export { NavStyles, NavDropdownStyles };
