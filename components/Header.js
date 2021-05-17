import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
import Cart from './Cart';
import Nav from './Nav';
import Search from './Search';

// ------------------STYLED COMPONENTS------------------

const HeaderStyles = styled.header`
  /* background: var(--lightgray); */
  .bar {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 2rem;
    padding: 0 2rem;
    /* text-align: center; */
    justify-content: space-around;
    border-bottom: 0.8rem solid var(--black, #000);
    overflow: hidden;
  }

  .sub-bar {
    border-bottom: 0.1rem solid var(--black, #000);

    div {
      text-align: center;
    }
  }
`;

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

const Logo = styled.h1`
  font-size: clamp(2rem, 3.2vw, 3.8rem);
  position: relative;
  /* transform: skew(-10deg); */
  z-index: 2;
  white-space: nowrap;

  a {
    /* background: var(--primary);
    color: white; */
    padding: 0.4rem 1rem;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    margin-left: 2rem;
    /* Text Background Gradience */
    background-image: linear-gradient(
      59deg,
      #ff8080,
      #b080ff,
      #ff8080,
      #b080ff
    );
    background-clip: text;
    -webkit-background-image: linear-gradient(
      59deg,
      #ff8080,
      #b080ff,
      #ff8080,
      #b080ff
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${loading} 2.4s infinite linear;
    background-size: 50% auto;

    &:hover {
      text-decoration: none;
    }
  }
`;

// ------------------HEADER COMPONENT------------------

const Header = () => (
  <HeaderStyles>
    <div className="bar">
      <Logo>
        <Link href="/">Phoenix</Link>
      </Logo>
      <Nav />
    </div>
    <div className="sub-bar">
      <Search />
    </div>
    <Cart />
  </HeaderStyles>
);

export default Header;
