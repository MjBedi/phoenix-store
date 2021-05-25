import Link from 'next/link';
import { useCart } from '../lib/cartState';
import CartCounter from './CartCounter';
import SignOut from './SignOut';
import { NavDropdownStyles, NavStyles } from './styles/NavStyles';
import { AccountSvg, CartSvg, SearchSvg } from './styles/Svg';
import { useUser } from './User';

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
            <button type="button" className="account">
              <AccountSvg />
              {/* <NavDropdownStyles>
                <li>Sell</li>
                <li>Orders</li>
                <li>Sign Out</li>
              </NavDropdownStyles> */}
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
