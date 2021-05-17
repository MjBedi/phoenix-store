import { useQuery } from '@apollo/client';
import Head from 'next/head';
import gql from 'graphql-tag';
import ErrorMessage from '../../components/ErrorMessage';
import OrderStyles from '../../components/styles/OrderStyles';
import formatMoney from '../../lib/formatMoney';

// ------------------------------------Single-Order-Query

const SINGLE_ORDER_QUERY = gql`
  query SINGLE_ORDER_PAGE($id: ID!) {
    order: Order(where: { id: $id }) {
      id
      total
      user {
        id
        name
      }
      items {
        id
        name
        description
        quantity
        price
        photo {
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;

// ------------------SINGLE ORDER COMPONENT------------------

export default function SingleOrderPage({ query }) {
  const { data, error, loading } = useQuery(SINGLE_ORDER_QUERY, {
    variables: { id: query.id },
  });

  // console.log(`SOQ`, { data, error, loading });

  if (loading) return <p>Loading...</p>;
  if (error) return <ErrorMessage error={error} />;
  const { order } = data;

  return (
    <OrderStyles>
      <Head>
        <title>Phoenix - {order.id}</title>
      </Head>

      <p>
        <span>Order Id: </span>
        <span>{order.id}</span>
      </p>
      <p>
        <span>Order Total: </span>
        <span>{formatMoney(order.total)}</span>
      </p>
      <p>
        <span>Item Count: </span>
        <span>{order.items.length}</span>
      </p>

      <div className="items">
        {order.items.map((item) => (
          <div className="order-item" key={item.id}>
            <img
              src={item.photo.image.publicUrlTransformed}
              alt={item.description}
            />
            <div className="item-details">
              <h2>{item.name}</h2>
              <p>
                <strong>Qty:</strong> {item.quantity}
              </p>
              <p>
                <strong>Each:</strong> {formatMoney(item.price)}
              </p>
              <p>
                <strong>Sub Total:</strong>{' '}
                {formatMoney(item.price * item.quantity)}
              </p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </OrderStyles>
  );
}
