import { useLazyQuery, useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Router from 'next/router';
import styled from 'styled-components';
import { useCart } from '../lib/cartState';
import { CURRENT_USER_QUERY } from './User';

// ------------------------------------Payment-Query

export const RAZORPAY_QUERY = gql`
  query RAZORPAY_QUERY {
    razorpay {
      id
      entity
      amount
      amount_paid
      amount_due
      currency
      receipt
      status
      attempts
      created_at
      notes
    }
  }
`;

// ------------------------------------Payment-Query

export const CHECKOUT_MUTATION = gql`
  mutation CHECKOUT_MUTATION(
    $paymentId: String
    $orderId: String
    $signature: String
  ) {
    checkout(paymentId: $paymentId, orderId: $orderId, signature: $signature) {
      id
    }
  }
`;

// ------------------STYLED COMPONENT------------------

const PayButtonStyles = styled.button`
  font-size: 2.4rem;
  line-height: 1.6;
  letter-spacing: 0.2rem;
  font-variant-caps: all-small-caps;
  width: 100%;
  margin: 1.2rem 0;
  padding: 0.5rem;
  border: 0;
  background-color: black;
  color: white;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 12px 14px 0px rgb(0 0 0 / 25%);
    background-color: var(--purple);
    transition: all 500ms;
  }

  &[disabled] {
    opacity: 0.5;
  }
`;

// ------------------CHECKOUT COMPONENT------------------

export default function Checkout() {
  const { closeCart } = useCart();
  // ----useMutation Hook----

  const [paymentConfirm, { loading: payLoad, error: payError }] = useMutation(
    CHECKOUT_MUTATION
  );

  // console.log(`pay→`, { payData, payLoad, payError });

  // ----on Payment Complete Handler & Mutation----

  async function paymentHandler(response) {
    const object = {
      paymentId: response?.razorpay_payment_id,
      orderId: response?.razorpay_order_id,
      signature: response?.razorpay_signature,
    };

    if (!payLoad) {
      const res = await paymentConfirm({
        variables: object,
        refetchQueries: [{ query: CURRENT_USER_QUERY }],
      });
      closeCart();
      Router.push({
        pathname: `/order/${res?.data?.checkout?.id}`,
      });
    }
  }

  // --------Razorpay Object--------

  async function razorpay(dt) {
    const options = {
      key: process.env.NEXT_PUBLIC_KEYSTONE_KEY,
      amount: dt.razorpay.amount,
      currency: dt.razorpay.currency,
      name: 'TEST Corp',
      description: 'Test Transaction',
      order_id: dt.razorpay.id,
      callback_url: 'https://eneqd3r9zrjok.x.pipedream.net/',

      handler: paymentHandler,

      prefill: {
        name: 'Test Phoenix',
        email: 'test@example.com',
        contact: '9999999999',
      },
      theme: {
        color: '#00FF00',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  // ----useLazyQuery Hook----

  const [payment, { loading, error }] = useLazyQuery(RAZORPAY_QUERY, {
    onCompleted: async (dt) => {
      await razorpay(dt);
    },
    fetchPolicy: 'network-only',
  });

  // console.log(`DLE→`, { called, data, loading, error });

  if (loading) return null;

  return (
    <>
      {(error || payError) && (
        <p style={{ fontSize: '10px' }}>{error.message || payError.message}</p>
      )}
      <PayButtonStyles disabled={loading} type="button" onClick={payment}>
        Checkout
      </PayButtonStyles>
    </>
  );
}

// TODO: Modal for showing Errors
