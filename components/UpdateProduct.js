import Router from 'next/router';
import { gql, useMutation, useQuery } from '@apollo/client';
import useForm from '../lib/useForm';
import ErrorMessage from './ErrorMessage';
import { SINGLE_PRODUCT_QUERY } from './SingleProduct';
import Form from './styles/Form';
import { ALL_PRODUCTS_QUERY } from './Products';

// ------------------------------------Update-Mutation

export const UPDATE_PRODUCT_MUTATION = gql`
  mutation UPDATE_PRODUCT_MUTATION(
    # Variables and their Types
    $id: ID!
    $name: String!
    $price: Int!
    $description: String!
  ) {
    updateProduct(
      id: $id
      data: {
        name: $name
        price: $price
        description: $description
        status: "AVAILABLE"
      }
    ) {
      id
      name
      price
      description
    }
  }
`;

// ------------------UPDATE-PRODUCT COMPONENT------------------

export default function UpdateProduct({ id }) {
  // Fetching Single/Existing Product by ID
  // ----useQuery Hook----

  const { data, error, loading } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: {
      id,
    },
  });
  console.log({ data, error, loading });

  // TODO: 👁️👁️ , resetForm
  const { inputs, handleChange, clearForm } = useForm(data?.Product);

  // ----useMutation Hook----

  const [
    updateProduct,
    { data: updateData, error: updateError, loading: updateLoading },
  ] = useMutation(UPDATE_PRODUCT_MUTATION);

  console.log({ updateData, updateError, updateLoading });

  // ...IMP. Check for LOADING STATE
  // Must come after Hooks, for avoiding the Error

  if (loading) return <p>Loading...</p>;

  // ----Handling Submit----

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit the inputfields to the backend:
    // Run updateProduct Function
    const res = await updateProduct({
      variables: {
        id: inputs.id,
        name: inputs.name,
        price: inputs.price,
        description: inputs.description,
      },
      // Refreshes Products Page; Fixes Stale Cached Products Page
      refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
    });
    // console.log(`res`, res);
    clearForm();
    // Push to the Product Page
    Router.push({
      pathname: `/product/${res.data.updateProduct.id}`,
    });
    // ../pages/product/[id].js --> SLUG Page return's { query } PROPS
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ErrorMessage error={error || updateError} />

      <fieldset
        disabled={loading || updateLoading}
        aria-busy={loading || updateLoading}
      >
        {/* ----NAME Input---- */}

        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={inputs.name}
            onChange={handleChange}
            // required="true"
          />
        </label>

        {/* ----PRICE Input---- */}

        <label htmlFor="price">
          Price
          <input
            type="number"
            name="price"
            id="price"
            placeholder="Price"
            value={inputs.price}
            onChange={handleChange}
          />
        </label>

        {/* ----DESCRIPTION Input---- */}

        <label htmlFor="description">
          Description
          <textarea
            type="text"
            name="description"
            id="description"
            placeholder="Description"
            value={inputs.description}
            onChange={handleChange}
          />
        </label>
        <button type="submit">+ Update Product</button>
      </fieldset>
    </Form>
  );
}
