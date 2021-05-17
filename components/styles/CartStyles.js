import styled from 'styled-components';

const CartStyles = styled.div`
  padding: 20px;
  position: relative;
  background: white;
  position: fixed;
  height: 100%;
  top: 0;
  right: 0;
  /* width: 40%;
  min-width: 500px; */
  min-width: 35%;
  bottom: 0;
  transform: translateX(100%);
  transition: all 0.3s;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  z-index: 5;
  display: grid;
  grid-template-rows: auto 1fr auto;
  ${(props) => props.open && `transform: translateX(0);`};
  header {
    border-bottom: 5px solid var(--black);
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }
  footer {
    border-top: 10px double var(--black);
    margin-top: 2rem;
    padding-top: 2rem;
    /* display: grid;
    grid-template-columns: 1fr auto;
    align-items: center; */
    font-size: 2.4rem;
    font-weight: 900;
    p {
      margin: 0;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: scroll;
  }

  .empty {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 3rem;

    button {
      border: 0;
      background: none;
      cursor: pointer;
      text-decoration: none;
      font-size: 2.6rem;
      /* Text Background Gradience */
      background-image: linear-gradient(315deg, #ff8080, #b080ff);
      background-size: 100%;
      background-clip: text;
      -webkit-background-image: linear-gradient(315deg, #ff8080, #b080ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      &:hover {
        background-image: linear-gradient(135deg, #ff8080, #b080ff);
        background-size: 100%;
        background-clip: text;
        -webkit-background-image: linear-gradient(135deg, #ff8080, #b080ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
`;

export default CartStyles;
