import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

export const CURRENT_USER_QUERY = gql`
  query {
    authenticatedItem {
      ... on User {
        id
        name
        email
        cart {
          id
          product {
            id
            name
            price
            description
            photo {
              image {
                publicUrlTransformed
              }
            }
          }
          quantity
        }
      }
    }
  }
`;

export function useUser() {
  const { data } = useQuery(CURRENT_USER_QUERY);
  // console.log(`data`, data);
  return data?.authenticatedItem;
  // Returns < null > On < data.authenticatedItem > When NO User is Logged-In
}
