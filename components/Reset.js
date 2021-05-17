import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import useForm from '../lib/useForm';
import ErrorMessage from './ErrorMessage';
import Form from './styles/Form';

// ------------------------------------Reset-Mutation

export const RESET_MUTATION = gql`
  mutation RESET_MUTATION(
    $email: String!
    $password: String!
    $token: String!
  ) {
    redeemUserPasswordResetToken(
      email: $email
      password: $password
      token: $token
    ) {
      code
      message
    }
  }
`;

// ------------------SIGN-IN COMPONENT------------------

export default function Reset({ token }) {
  // ----useForm Hook----

  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
    token,
  });

  // ----useMutation Hook----

  const [reset, { data, loading, error }] = useMutation(RESET_MUTATION, {
    variables: inputs,
  });

  // ----Handling Submit----

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit the inputfields to the backend:
    await reset();
    // console.log(`res`, res);
    // console.log({ data, loading, error });
    // TODO: CHANGE PAGE
    resetForm();
  };

  // Checking for Error Code on returned Object

  const moreErrors = data?.redeemUserPasswordResetToken?.code
    ? data?.redeemUserPasswordResetToken
    : undefined;

  // ----FORM----

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <ErrorMessage error={error || moreErrors} />
      <h2>Reset Your Password</h2>

      <fieldset disabled={loading} aria-busy={loading}>
        {data?.redeemUserPasswordResetToken === null && (
          <p>
            Reset Successful ✔<br />
            You can now Sign-In
          </p>
        )}

        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
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
            placeholder="Password"
            autoComplete="password"
            value={inputs.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Reset Password</button>
      </fieldset>
    </Form>
  );
}
