import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { perPage } from '../config';
import Product from './Product';

// ------------------------------------Query

export const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int) {
    # Check Graphiql Docs for Arguments info.
    allProducts(skip: $skip, first: $first) {
      id
      name
      price
      description
      photo {
        id
        image {
          id
          publicUrlTransformed
        }
      }
    }
  }
`;

// ------------------STYLED COMPONENTS------------------

const ProductsListStyles = styled.div`
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  align-items: stretch;
  justify-items: center;
  grid-gap: 4rem 3rem; */
  --w1: 800px;
  --n: 3;
  --w2: 40vw;
  --m: 2;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(
      clamp(
        clamp(
          100%/ (var(--n) + 1) + 0.36%,
          (var(--w1) - 100vw) * 1000,
          100%/ (var(--m) + 1) + 0.36%
        ),
        (var(--w2) - 100vw) * 1000,
        100%
      ),
      1fr
    )
  );
  gap: 3.6rem 2.6rem;
`;

// ------------------PRODUCTS COMPONENT------------------

export default function Products({ page }) {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY, {
    variables: {
      // No. of items to skip Querying
      skip: page * perPage - perPage,
      // No. of items to Query per Page
      first: perPage,
    },
  });
  // console.log(data, error, loading);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <ProductsListStyles>
        {data.allProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ProductsListStyles>
    </div>
  );
}
