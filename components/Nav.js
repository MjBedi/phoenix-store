import Link from 'next/link';
import { useCart } from '../lib/cartState';
import CartCounter from './CartCounter';
import SignOut from './SignOut';
import { AccountSvg, CartSvg } from './styles/Svg';
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
          <Link href="/sell">Sell</Link>
          <Link href="/orders">Orders</Link>
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

      {!user && (
        <>
          <Link href="/signin">Sign In</Link>
        </>
      )}
    </NavStyles>
  );
}

// {/* <svg
//   fill="none"
//   viewBox="0 0 24 29"
//   xmlns="http://www.w3.org/2000/svg"
//   width="23"
// >
//   <rect
//     x="1"
//     y="6"
//     width="22"
//     height="22"
//     rx="3"
//     stroke="#000"
//     strokeWidth="2"
//   />
//   <path
//     d="M16.5 5s-.5-4-5-4S6 5 6 5"
//     stroke="#000"
//     strokeLinecap="round"
//     strokeWidth="2"
//   />
// </svg> */}
