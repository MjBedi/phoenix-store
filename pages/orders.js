import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Link from 'next/link';
import styled from 'styled-components';
import ErrorMessage from '../components/ErrorMessage';
import LoadingScreen from '../components/styles/Loading';
import OrderItemStyles from '../components/styles/OrderItemStyles';
import formatMoney from '../lib/formatMoney';

// ------------------------------------Orders-Query
const USER_ORDER_QUERY = gql`
  query USER_ORDER_QUERY {
    allOrders {
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

// ----

function countItemsInAnOrder(order) {
  return order.items.reduce((acc, item) => acc + item.quantity, 0);
}
// ------------------STYLED COMPONENT------------------
const OrderDivStyles = styled.div`
  h2 {
    font-size: clamp(1.9rem, 2.6vw, 2.5rem);
    text-align: center;
    margin-top: 0;
    margin-bottom: 2rem;
    background-image: linear-gradient(315deg, #ff8080, #b080ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-image: linear-gradient(315deg, #ff8080, #b080ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 4rem;
    align-items: baseline;
    padding: 0;
    a {
      text-decoration: none;
    }
  }
`;

// ------------------ORDERS COMPONENT------------------

export default function OrdersPage() {
  const { data, error, loading } = useQuery(USER_ORDER_QUERY);

  // console.log(`UOQ`, { data, error, loading });

  if (loading) return <LoadingScreen />;
  if (error) return <ErrorMessage error={error} />;
  const { allOrders } = data;

  return (
    <OrderDivStyles>
      <h2>Number of Orders: {allOrders.length}</h2>
      <ul>
        {allOrders.map((order) => (
          <OrderItemStyles key={order.id}>
            <Link href={`/order/${order.id}`}>
              <a>
                <div className="order-meta">
                  <p>
                    {countItemsInAnOrder(order)} Item
                    {countItemsInAnOrder(order) === 1 ? ' ' : 's'}
                  </p>
                  <p>
                    {order.items.length} Product
                    {order.items.length === 1 ? ' ' : 's'}
                  </p>
                  <p>{formatMoney(order.total)}</p>
                </div>
                <div className="images">
                  {order.items.map((item) => (
                    <img
                      src={item?.photo?.image?.publicUrlTransformed}
                      alt={item.name}
                      key={item.id}
                    />
                  ))}
                </div>
              </a>
            </Link>
          </OrderItemStyles>
        ))}
      </ul>
    </OrderDivStyles>
  );
}
