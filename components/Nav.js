import Link from 'next/link';
import { useCart } from '../lib/cartState';
import useDetectClickOut from '../lib/useDetectClickOut';
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

  const { isOpen, triggerRef, nodeRef } = useDetectClickOut(false);

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

          <MenuWrapperStyles ref={triggerRef} isOpen={isOpen}>
            <span />
            <span />
            <span />
            <NavDropdownStyles ref={nodeRef} isOpen={isOpen}>
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
