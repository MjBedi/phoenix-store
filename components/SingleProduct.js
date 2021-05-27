import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Head from 'next/head';
import { Breadcrumbs } from '../lib/breadcrumbs';
import formatMoney from '../lib/formatMoney';
import ErrorMessage from './ErrorMessage';

// ------------------------------------Query

export const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY(
    # Variables and their Types
    $id: ID!
  ) {
    Product(where: { id: $id }) {
      id
      name
      price
      description
      photo {
        image {
          publicUrlTransformed
        }
        altText
      }
    }
  }
`;

// ------------------STYLED COMPONENTS------------------

const ProductPageStyle = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  max-width: var(--max-width);
  /* height: 100vh; */

  img {
    width: 100%;
  }

  div {
    display: grid;
    grid-auto-rows: max-content;
    background-color: var(--lightgrey);

    h2 {
      padding: 0 1rem;
    }

    .price {
      width: fit-content;
      padding: 0 1rem;
      background-color: var(--primary);
      color: #fff;
    }
  }
`;

// ------------------SINGLE-PRODUCT-PAGE COMPONENT------------------

export default function SingleProduct({ id }) {
  const breadcrumbs = Breadcrumbs();

  const { data, error, loading } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: {
      id,
    },
  });
  // console.log({ data, error, loading });

  if (loading) return <p>Loading...</p>;
  if (error) return <ErrorMessage error={error} />;

  // Destructuring Product property from data object
  const { Product } = data;

  return (
    <>
      {breadcrumbs}
      <ProductPageStyle>
        {/* meta Head Tag -> page Title */}
        <Head>
          <title> Phoenix | {Product.name} </title>
        </Head>

        <img
          src={Product?.photo?.image?.publicUrlTransformed}
          alt={Product.photo.altText || Product.name}
        />
        <div className="details">
          <h2>{Product.name}</h2>
          <p className="price"> {formatMoney(Product.price)} </p>
          <p>{Product.description}</p>
        </div>
      </ProductPageStyle>
    </>
  );
}
