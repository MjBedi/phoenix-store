import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

// ------------------------------------Delete-Mutation

export const DELETE_PRODUCT_MUTATION = gql`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteProduct(id: $id) {
      id
      name
      # photo {
      #   id
      #   image {
      #     id
      #     publicUrlTransformed
      #   }
      # }
    }
  }
`;

// ----Update-Cache Function----

const update = (cache, payload) => {
  // console.log(`Payload`, payload);
  // console.log('Cache Deleted...');
  cache.evict(cache.identify(payload.data.deleteProduct));
};

// ------------------DELETE-PRODUCT COMPONENT------------------

export default function DeleteProduct({ id, children }) {
  // ----useMutation Hook----

  const [deleteProduct, { loading }] = useMutation(DELETE_PRODUCT_MUTATION, {
    variables: { id },
    // Updates APOLLO Cache after Item Deletion
    update,
  });

  return (
    <button
      disabled={loading}
      type="button"
      onClick={() => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Are you sure you want to Delete this Item?')) {
          // console.log('Deleting...');
          deleteProduct().catch((err) => {
            alert(err.message);
          });
        }
      }}
    >
      {children}
    </button>
  );
}
// TODO: Add a Modal
