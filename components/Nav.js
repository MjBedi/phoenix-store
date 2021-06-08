import Link from 'next/link';
import { useRef, useState } from 'react';
import { useCart } from '../lib/cartState';
import CartCounter from './CartCounter';
import SignOut from './SignOut';
import {
  MenuWrapperStyles,
  NavDropdownStyles,
  NavStyles,
} from './styles/NavStyles';
import { CartSvg, DialoguePointerSvg } from './styles/Svg';
import { useUser } from './User';

export default function Nav() {
  // Check if the User is Present or else Returns NULL
  const user = useUser();
  const { openCart } = useCart();

  const [isOpen, setisOpen] = useState(false);

  const nodeRef = useRef();

  return (
    <NavStyles>
      {/* <Link href="/products">Products</Link> */}

      {/* LOGGED-IN State */}
      {user && (
        <>
          <button type="button" onClick={openCart}>
            <CartSvg />
            <CartCounter
              count={user.cart.reduce(
                (tally, cartItem) => tally + cartItem.quantity,
                0
              )}
            />
          </button>

          <MenuWrapperStyles
            ref={nodeRef}
            onClick={() => setisOpen(!isOpen)}
            isOpen={isOpen}
          >
            <span />
            <span />
            <span />
            <NavDropdownStyles isOpen={isOpen}>
              <DialoguePointerSvg />
              <Link href="/sell">Sell</Link>
              <Link href="/orders">Orders</Link>
              <Link href="/account">Account</Link>
              <SignOut />
            </NavDropdownStyles>
          </MenuWrapperStyles>
        </>
      )}

      {!user && (
        <>
          <Link href="/signin">Sign In</Link>
        </>
      )}
    </NavStyles>
  );
}
