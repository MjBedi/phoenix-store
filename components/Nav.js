import Link from 'next/link';
import { useCart } from '../lib/cartState';
import CartCounter from './CartCounter';
import SignOut from './SignOut';
import { AccountSvg, CartSvg, SearchSvg } from './styles/Svg';
import NavStyles from './styles/NavStyles';
import { useUser } from './User';

// const NavStyles = styled.nav`
//   background: mistyrose;
//   display: flex;
//   align-content: center;
//   justify-content: space-around;
//   font-size: 2.4rem;
// `;

export default function Nav() {
  // Check if the User is Present or else Returns NULL
  const user = useUser();
  const { openCart } = useCart();

  return (
    <NavStyles>
      <Link href="/products">Products</Link>
      {/* LOGGED-IN State */}
      {user && (
        <>
          {/* <Link href="/sell">Sell</Link>
          <Link href="/orders">Orders</Link> */}
          <SignOut />
          <Link href="/account">
            <button type="button">
              <AccountSvg />
            </button>
          </Link>
          <button type="button" onClick={openCart}>
            <CartSvg />
            <CartCounter
              count={user.cart.reduce(
                (tally, cartItem) => tally + cartItem.quantity,
                0
              )}
            />
          </button>
        </>
      )}

      {/* {
        <button type="button">
          <SearchSvg />
        </button>
      } */}

      {!user && (
        <>
          <Link href="/signin">Sign In</Link>
        </>
      )}
    </NavStyles>
  );
}
