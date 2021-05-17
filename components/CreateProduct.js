import Router from 'next/router';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import useForm from '../lib/useForm';
import Form from './styles/Form';
import ErrorMessage from './ErrorMessage';
import { ALL_PRODUCTS_QUERY } from './Products';

// ------------------------------------Create-Mutation

export const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    # Variables and their Types
    $name: String!
    $price: Int!
    $description: String!
    $image: Upload
  ) {
    createProduct(
      data: {
        name: $name
        price: $price
        description: $description
        status: "AVAILABLE"
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      name
      price
      description
    }
  }
`;

// ------------------CREATE-PRODUCT COMPONENT------------------

export default function CreateProduct() {
  const { inputs, handleChange, clearForm } = useForm({
    // TODO: 👁️👁️ , resetForm

    image: '',
    name: 'demo',
    price: 1234,
    description: 'lorem',
  });

  // ----useMutation Hook----

  const [createProduct, { data, error, loading }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    {
      variables: inputs,
      // Refreshes Products Page; Fixes Stale Cached Products Page
      refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
    }
  );
  console.log(data, error, loading);

  // ----Handling Submit----

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit the inputfields to the backend:
    const res = await createProduct();
    clearForm();
    // Push to the Product Page
    Router.push({
      pathname: `/product/${res.data.createProduct.id}`,
    });
    // ../pages/product/[id].js --> SLUG Page return's { query } PROPS
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ErrorMessage error={error} />

      <fieldset disabled={loading} aria-busy={loading}>
        {/* ----IMAGE Input---- */}

        <label htmlFor="image">
          Upload Image
          <input
            required
            type="file"
            name="image"
            id="image"
            onChange={handleChange}
          />
        </label>

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
        <button type="submit">+ Add Product</button>
      </fieldset>
    </Form>
  );
}
