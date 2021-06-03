import styled from 'styled-components';

const NavDropdownStyles = styled.div`
  display: none;
  position: absolute;
  background-color: var(--lightred);
  text-decoration: none;
  padding: 1rem;
  border-radius: 0.6rem;
  box-shadow: 0px 20px 20px 20px rgba(0, 0, 0, 0.1);

  a {
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }
`;

const NavStyles = styled.nav`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
  white-space: nowrap;

  .relative {
    align-self: center;

    :hover ${NavDropdownStyles} {
      display: block;
      z-index: 10;
    }
  }

  a,
  button {
    padding: clamp(1.4rem, 1.8vh, 2.6rem) clamp(1rem, 1.4vw, 2rem);
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-weight: 500;
    font-size: clamp(1.6rem, 2vw, 2rem);
    background: none;
    border: 0;
    cursor: pointer;

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
  }

  /* @media (max-width: 1300px) {
    border-top: 1px solid var(--lightGray);
    width: 100%;
    justify-content: center;
    font-size: 1.5rem;
  } */
`;

export { NavStyles, NavDropdownStyles };
