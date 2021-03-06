import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Head from 'next/head';
import { Breadcrumbs } from '../lib/breadcrumbs';
import formatMoney from '../lib/formatMoney';
import ErrorMessage from './ErrorMessage';
import AddToCart from './AddToCart';
import LoadingScreen from './styles/Loading';
import Sparkles from './Sparkle';

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
        id
        image {
          id
          publicUrlTransformed
        }
        altText
      }
    }
  }
`;

// ------------------STYLED COMPONENTS------------------

const ProductPageStyle = styled.div`
  display: flex;
  gap: 2.4rem;
  max-width: var(--max-width);
  flex-direction: column;
  margin-bottom: 10vh;

  & > * {
    /* padding: 0 1.5rem; */
  }

  img {
    width: 100%;
    height: auto;
    max-height: 50vh;
    object-fit: contain;
  }

  .details {
    display: flex;
    background-color: var(--litTwo);
    padding: 2rem 2rem;
    border-radius: 1rem;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 1rem;

    h2 {
      font-size: clamp(2.4rem, 2.8vw, 3rem);
      font-weight: 500;
      border-bottom: 2px solid var(--litOne);
    }

    .description {
      color: var(--grey);
      text-align: justify;
      font-size: clamp(1.8rem, 2vw, 2rem);
      font-style: italic;
      font-weight: normal;
    }

    .price {
      padding: 0.8rem 4rem;
      width: fit-content;
      /* height: 8rem;
      width: 10rem;
      padding-top: 2.4rem;
      text-align: center; */

      border-radius: 0.6rem;
      background-color: #fffafacc;
      /* background-image: url('/static/priceBlob.svg');
      background-position: center;
      background-repeat: no-repeat; */
    }

    button {
      border: 0;
      background: var(--lightred);
      border-radius: 0.5rem;
      color: #fff;
      cursor: pointer;
      margin: 0.2rem;
      padding: 0.8rem 4rem;
      font-size: 2rem;
      box-shadow: 0px 6px 7px 0px rgb(0 0 0 / 10%);

      &:hover {
        transition: all 240ms;
        box-shadow: 0px 12px 14px 0px rgb(0 0 0 / 10%);
        transform: translateY(-1.6%);
        background: hsl(0, 100%, 72%);
      }
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

  if (loading) return <LoadingScreen />;
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
          <div>
            <h2>{Product.name}</h2>
            <p className="description">
              {Product.description} lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Repellendus, quibusdam!
            </p>
          </div>
          <Sparkles>
            <p className="price"> {formatMoney(Product.price)} </p>
          </Sparkles>
          <AddToCart id={Product.id} />
        </div>
      </ProductPageStyle>
    </>
  );
}
