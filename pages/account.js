import Link from 'next/link';
import styled from 'styled-components';
import SignOut from '../components/SignOut';
import { TakeAwaySvg } from '../components/styles/Svg';

const AccountStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1.4rem;

  a,
  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    padding: 2rem 2rem;
    text-transform: uppercase;
    font-size: 1.8rem;
    background: var(--litTwo);
    border: 0;
    border-radius: 0.6rem;
    cursor: pointer;
    box-shadow: 0px 5px 10px 0px rgb(0 0 0 / 6%);
    transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1) 0s;

    &:hover {
      /* border-left: 6px solid var(--lightpurple); */
      transform: translateY(-2px);
      box-shadow: 0 6px 24px 0 rgba(0, 0, 0, 0.1);

      svg {
        color: var(--lightpurple);
      }
    }
  }
`;

const account = () => (
  <AccountStyles>
    <Link href="/sell" passHref>
      <a aria-label="Sell Page">
        <span>Sell</span>
        <TakeAwaySvg />
      </a>
    </Link>
    <Link href="/orders" passHref>
      <a aria-label="Your Orders Page">
        <span>Orders</span>
        <TakeAwaySvg />
      </a>
    </Link>
    <SignOut />
  </AccountStyles>
);

export default account;
