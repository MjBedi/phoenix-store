import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import Link from 'next/link';
import { perPage } from '../config';
import ErrorMessage from './ErrorMessage';
import PaginationStyles from './styles/PaginationStyles';
import { NextPageSvg, PrevPageSvg } from './styles/Svg';

// ------------------------------------Meta-Query

export const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    # More Performant > ALL_PRODUCTS_QUERY
    # Meta Query for No. of All Products
    _allProductsMeta {
      count
    }
  }
`;

// ------------------PAGINATION COMPONENT------------------

export default function Pagination({ page }) {
  // ----useQuery Hook----

  const { data, error, loading } = useQuery(PAGINATION_QUERY);
  if (loading) return 'Loading...';
  if (error) return <ErrorMessage error={error} />;

  const { count } = data._allProductsMeta;
  const pageCount = Math.ceil(count / perPage);

  return (
    <PaginationStyles>
      <Head>
        <title>
          Phoenix - Page {page} of {pageCount}
        </title>
      </Head>

      {/* PREVIOUS PAGE */}
      <Link href={`/products/${page - 1}`}>
        <a aria-disabled={page <= 1}>
          <PrevPageSvg stroke={page <= 1 ? '#afafaf' : '#8b42ff'} />
        </a>
      </Link>

      {/* CURRENT PAGE */}
      <p>
        Page {page} of {pageCount}
      </p>
      {/* <p> {count} Items Total</p> */}

      {/* NEXT PAGE */}
      <Link href={`/products/${page + 1}`}>
        <a aria-disabled={page >= pageCount}>
          <NextPageSvg stroke={page >= pageCount ? '#afafaf' : '#8b42ff'} />
        </a>
      </Link>
    </PaginationStyles>
  );
}
