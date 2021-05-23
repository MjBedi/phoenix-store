import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
import Cart from './Cart';
import Nav from './Nav';
import Search from './Search';

// ------------------STYLED COMPONENTS------------------

const HeaderStyles = styled.header`
  .bar {
    display: flex;
    flex-flow: row nowrap;
    max-width: var(--maxwidth);
    margin: 0 auto;
    padding: 0 2rem;
    overflow: hidden;
    justify-content: space-between;
    /* border-bottom: 0.8rem solid var(--black,#000); */

    /* display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 2rem;
    padding: 0 2rem;
    justify-content: space-around;
    border-bottom: 0.8rem solid var(--black, #000);
    overflow: hidden; */
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
  font-size: clamp(2.4rem, 3.2vw, 3.8rem);
  position: relative;
  /* transform: skew(-10deg); */
  z-index: 2;
  white-space: nowrap;

  a {
    /* padding: 0.4rem 1rem;
    margin-left: 2rem; */
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
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
