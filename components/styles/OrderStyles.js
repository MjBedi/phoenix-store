import styled from 'styled-components';

const OrderStyles = styled.div`
  background: var(--litThree);
  font-size: clamp(1.6rem, 2vw, 2rem);
  max-width: 1000px;
  margin: 0 auto;
  border: 1px solid var(--offwhite);
  box-shadow: var(--bs);
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  border-top: 7px solid var(--lightpurple);

  & > p {
    display: grid;
    grid-template-columns: 1fr 5fr;
    margin: 0;
    border-bottom: 1px solid var(--offwhite);
    white-space: nowrap;

    span {
      padding: 1rem;
      &:first-child {
        font-weight: 700;
        text-align: right;
      }
    }
  }
  .order-item {
    border-bottom: 2px solid var(--offwhite);
    display: grid;
    /* Uber-Responsive */
    grid-template-columns: minmax(100px, 1fr) 2fr;
    align-items: center;
    grid-gap: 2rem;
    margin: 2rem 0;
    padding-bottom: 2rem;

    h2 {
      font-size: clamp(1.8rem, 2.7vw, 2.6rem);
    }

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }

  .item-details {
    display: grid;
    p {
      font-weight: 400;
      padding: 0.5rem;
      margin: 0;
      border-bottom: 1px solid var(--offwhite);
      &:last-child {
        margin-top: 0.6rem;
        border: 0;
      }
    }
  }
`;
export default OrderStyles;
