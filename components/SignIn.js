import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { useRouter } from 'next/router';
import useForm from '../lib/useForm';
import ErrorMessage from './ErrorMessage';
import Form from './styles/Form';
import { CURRENT_USER_QUERY } from './User';

// ------------------------------------SignIn-Mutation

export const SIGN_IN_MUTATION = gql`
  mutation SIGN_IN_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        sessionToken
        item {
          id
          name
          email
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        code
        message
      }
    }
  }
`;

// ------------------SIGN-IN COMPONENT------------------

export default function SignIn() {
  const router = useRouter();

  // ----useForm Hook----

  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
  });

  // ----useMutation Hook----

  const [signIn, { data, loading }] = useMutation(SIGN_IN_MUTATION, {
    variables: inputs,
    // Refetches the Current User Data i.e. Cart Items...
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  // ERROR CHECK -> if data.object.type === 'failure' then print error Message

  const error =
    data?.authenticateUserWithPassword?.__typename ===
    'UserAuthenticationWithPasswordFailure'
      ? data?.authenticateUserWithPassword
      : undefined;

  // ----Handling Submit----

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit the inputfields to the backend:
    const res = await signIn();
    // console.log(`res→`, res);
    resetForm();

    // Push to the Product Page

    if (res?.data?.authenticateUserWithPassword?.sessionToken) {
      router.push({
        pathname: '/products',
      });
    }
  };

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <ErrorMessage error={error} />

      <h2>Sign Into Your Account</h2>
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="your email address"
            autoComplete="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            placeholder="minimum 8 characters"
            autoComplete="password"
            value={inputs.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Sign In</button>
      </fieldset>
    </Form>
  );
}
