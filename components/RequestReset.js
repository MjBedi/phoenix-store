import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import useForm from '../lib/useForm';
import ErrorMessage from './ErrorMessage';
import Form from './styles/Form';

// ------------------------------------RequestReset-Mutation

export const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    sendUserPasswordResetLink(email: $email) {
      code
      message
    }
  }
`;

// ------------------SIGN-IN COMPONENT------------------

export default function RequestReset() {
  // ----useForm Hook----

  const { inputs, handleChange, resetForm } = useForm({
    email: '',
  });

  // ----useMutation Hook----

  const [requestReset, { data, loading, error }] = useMutation(
    REQUEST_RESET_MUTATION,
    {
      variables: inputs,
    }
  );

  // ----Handling Submit----

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit the inputfields to the backend:
    await requestReset().catch(console.error);
    // console.log(`res`, res);
    // console.log({ data, loading, error });
    // TODO: CHANGE PAGE
    resetForm();
  };

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <ErrorMessage error={error} />

      <h2>Request A Password Reset</h2>

      <fieldset disabled={loading} aria-busy={loading}>
        {data?.sendUserPasswordResetLink === null && (
          <p>
            Request Sent 📧
            <br />
            Check Your Email
          </p>
        )}

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
        <button type="submit">Reset Password</button>
      </fieldset>
    </Form>
  );
}
