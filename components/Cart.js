import styled from 'styled-components';
import CartStyles from './styles/CartStyles';
import CloseButton from './styles/CloseButton';
import Supreme from './styles/Supreme';
import { useUser } from './User';
import formatMoney from '../lib/formatMoney';
import calcTotalPrice from '../lib/calcTotalPrice';
import { useCart } from '../lib/cartState';
import RemoveCartItem from './RemoveCartItem';
import Checkout from './Checkout';

// ------------------STYLED COMPONENTS------------------

const CartItemStyles = styled.li`
  padding: 1rem 0;
  border-bottom: 2px solid var(--lightgrey);
  display: grid;
  grid-template-columns: auto 1fr auto;
  color: var(--grey);
  font-size: 1.8rem;
  img {
    margin-left: 1rem;
  }

  h3,
  p {
    margin: 0;
    padding: 0.5rem 0;
  }

  div {
    padding: 0 1rem;
  }
`;

// ------------------CartItem COMPONENT------------------

const CartItem = ({ cartItem }) => {
  const { product } = cartItem;
  if (!product) return null;

  return (
    <CartItemStyles>
      <img
        src={product?.photo?.image?.publicUrlTransformed}
        alt={product?.name}
        width={100}
      />

      <div>
        <h3>{product?.name}</h3>
        <p>
          {formatMoney(product?.price * cartItem?.quantity)} —{' '}
          {cartItem?.quantity}
          <em>&times; {formatMoney(product?.price)}</em>
        </p>
      </div>
      <RemoveCartItem id={cartItem?.id} />
    </CartItemStyles>
  );
};

// ------------------CART COMPONENT------------------

export default function Cart() {
  const me = useUser();
  const { cartOpen, closeCart, nodeRef } = useCart();
  if (!me) return null;

  return (
    <CartStyles open={cartOpen} ref={nodeRef}>
      <header>
        <Supreme>{me.name}'s Cart</Supreme>
        <CloseButton onClick={closeCart}>&times;</CloseButton>
      </header>

      {me.cart.length === 0 ? (
        <p className="empty">
          Seems like a good time to <br />{' '}
          <button
            type="button"
            onClick={closeCart}
            href="/products"
            aria-label="Products Page"
          >
            Start Shopping!!
          </button>
        </p>
      ) : (
        <>
          <ul>
            {me.cart.map((cartItem) => (
              <CartItem key={cartItem?.id} cartItem={cartItem} />
            ))}
          </ul>
          <footer>
            <p>Total = {formatMoney(calcTotalPrice(me.cart))}</p>
            <Checkout />
          </footer>
        </>
      )}
    </CartStyles>
  );
}
