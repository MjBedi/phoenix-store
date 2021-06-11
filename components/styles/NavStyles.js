import styled from 'styled-components';

const NavDropdownStyles = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  text-decoration: none;

  background-color: #ffffff1c;
  backdrop-filter: blur(20px);

  margin-top: 4rem;
  padding: 1rem;
  border-radius: 0.6rem;
  box-shadow: 0px 20px 25px 5px rgba(0, 0, 0, 0.1);

  transform: translateX(-78%);
  /* transition: display 0.3s ease-in-out; */

  a,
  button {
    padding: 10px 20px !important;
    text-decoration: none;
    display: block;
    text-align: left;
  }

  .pointer {
    display: block;
    position: absolute;
    fill: #ffeceb;

    width: 20px;
    height: 20px;
    top: -13px;
    left: 78%;
    transform: rotate(180deg);
  }
`;

const MenuWrapperStyles = styled.div`
  margin-left: 1.6rem;
  align-self: center;
  width: 36px;
  height: 36px;
  padding: 9px 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 2;
  transition: all 0.3s ease;

  border-radius: 2rem;
  background: ${(props) => (props.isOpen ? 'var(--litTwo)' : null)};
  box-shadow: ${(props) => (props.isOpen ? '0px 7px 29px 0px #c48d8d87' : 0)};
  /* box-shadow: 0px 7px 29px 0px #c48d8d87; */

  span {
    height: 1.6px;
    width: 100%;
    background: var(--black);
    /* border-bottom: 2px solid rgba(0, 0, 00, 0.85); */
    transition: all 0.3s ease;
    transform-origin: right center;
  }

  span:nth-of-type(2) {
    width: 15px;
    align-self: flex-end;
  }

  /* :hover ${NavDropdownStyles} {
    display: block;
    z-index: 10;
  } */
`;

const SignInStyles = styled.a`
  padding: 6px 10px !important;
  height: fit-content;
  align-self: center;
  color: var(--black);
  border-radius: 0.8rem;
  border: 1px solid var(--litThree) !important;
  background: hsl(6, 100%, 95%) !important;
  box-shadow: 7px 7px 12px #e2dddd, -7px -7px 12px 0px #ffffff;

  /* box-shadow: 3px 3px 13px hsl(6deg 100% 90%), -3px -3px 10px hsl(6deg 100% 98%); */

  &:hover,
  &:focus {
    transition: all 0.2s ease-in;
    background: hsl(6deg 100% 93%) !important;
    box-shadow: inset 2px 2px 6px 0px #998181a1;

    /* box-shadow: 4.5px 4.5px 15px #ebe6e6, -4.5px -4.5px 10px #ffffff; */
  }

  &:before,
  &:after {
    display: none;
  }
`;

const NavStyles = styled.nav`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
  white-space: nowrap;

  /* .relative {
    align-self: center;

    :hover ${NavDropdownStyles} {
      display: block;
      z-index: 10;
    }
  } */

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

export { NavStyles, NavDropdownStyles, MenuWrapperStyles, SignInStyles };
