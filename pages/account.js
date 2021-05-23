import Link from 'next/link';
import styled from 'styled-components';
import SignOut from '../components/SignOut';

const AccountStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1rem;

  a,
  button {
    text-decoration: none;
    padding: 2rem 2rem;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-size: 1.8rem;
    background: var(--litTwo);
    border: 0;
    border-radius: 0.5rem;
    cursor: pointer;

    &:hover {
      border-left: 6px solid var(--lightpurple);
    }
  }
`;

const account = () => (
  <AccountStyles>
    <Link href="/sell">Sell</Link>
    <Link href="/orders">Orders</Link>
    <SignOut />
  </AccountStyles>
);

export default account;
