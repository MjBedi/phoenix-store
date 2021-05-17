import { gql, useMutation } from '@apollo/client';
import styled from 'styled-components';

// ------------------------------------Remove-Cartitem-Mutation

export const REMOVE_CARTITEM_MUTATION = gql`
  mutation REMOVE_CARTITEM_MUTATION($id: ID!) {
    deleteCartItem(id: $id) {
      id
    }
  }
`;

// ------------------Styled Component------------------

const CrossButtonStyles = styled.button`
  background: none;
  border: none;
  font-size: 2.4rem;
  cursor: pointer;
  height: fit-content;
  &:hover {
    color: var(--purple);
  }
`;

// ----Update-Cache Function----

const update = (cache, payload) => {
  // console.log(`Payload`, payload);
  // console.log('Cache Deleted...');
  cache.evict(cache.identify(payload.data.deleteCartItem));
};

// ------------------REMOVE-CARTITEM COMPONENT------------------

export default function RemoveCartItem({ id }) {
  // ----useMutation Hook----
  const [removeCartItem, { loading }] = useMutation(REMOVE_CARTITEM_MUTATION, {
    variables: { id },
    update,
    // OPTIMISTIC RESPONSE a.k.a beenderdonedat response
    // optimisticResponse: {
    //   deleteCartItem: {
    //     __typename: 'CartItem',
    //     id,
    //   },
    // },
  });

  return (
    <CrossButtonStyles
      onClick={removeCartItem}
      disabled={loading}
      type="button"
      title="remove this item from cart"
    >
      &times;
    </CrossButtonStyles>
  );
}
