import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Link from 'next/link';
import { CURRENT_USER_QUERY, useUser } from './User';

const ADD_TO_CART_MUTATION = gql`
  mutation ADD_TO_CART_MUTATION($id: ID!) {
    addToCart(productId: $id) {
      id
    }
  }
`;

export default function AddToCart({ id }) {
  const [addToCart, { loading }] = useMutation(ADD_TO_CART_MUTATION, {
    variables: { id },
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  const user = useUser();
  if (!user)
    return (
      <Link href="/signin">
        <button type="button">Add To Cart</button>
      </Link>
    );

  return (
    <button disabled={loading} type="button" onClick={addToCart}>
      Add{loading && 'ing'} To Cart
    </button>
  );
}
