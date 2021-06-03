import Link from 'next/link';
import { useCart } from '../lib/cartState';
import CartCounter from './CartCounter';
import SignOut from './SignOut';
import { NavDropdownStyles, NavStyles } from './styles/NavStyles';
import { AccountSvg, CartSvg } from './styles/Svg';
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
          <div className="relative">
            <Link href="/account">
              <button type="button">
                <AccountSvg />
              </button>
            </Link>
            <NavDropdownStyles>
              <Link href="/sell">Sell</Link>
              <Link href="/orders">Orders</Link>
              <Link href="/signout">Sign Out</Link>
            </NavDropdownStyles>
          </div>
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
