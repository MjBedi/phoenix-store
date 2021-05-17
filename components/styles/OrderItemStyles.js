import styled from 'styled-components';

const OrderItemStyles = styled.li`
  box-shadow: 9px 9px 0px 0 var(--litTwo);
  list-style: none;
  padding: 2rem;
  border: 1px solid var(--offwhite);
  background: var(--litThree);
  font-size: clamp(1.6rem, 2vw, 2rem);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  h2 {
    border-bottom: 2px solid var(--primary);
    margin-top: 0;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }

  p {
    text-decoration: none;
  }

  &:hover {
    box-shadow: none;
    transform: translate(2px, 2px);
    transition: 0.5s;
  }

  .images {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    margin-top: 1rem;
    img {
      display: block;
      height: 175px;
      object-fit: cover;
      width: 100%;
    }
  }
  .order-meta {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
    display: grid;
    grid-gap: 1rem;
    text-align: center;
    & > * {
      margin: 0;
      background: var(--litTwo);
      padding: 1rem 0;
    }
    strong {
      display: block;
      margin-bottom: 1rem;
    }
  }
`;

export default OrderItemStyles;
