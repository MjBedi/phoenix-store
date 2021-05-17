import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import useForm from '../lib/useForm';
import ErrorMessage from './ErrorMessage';
import Form from './styles/Form';
// import { CURRENT_USER_QUERY } from './User';

// ------------------------------------SignUp-Mutation

export const SIGN_UP_MUTATION = gql`
  mutation SIGN_UP_MUTATION(
    $name: String!
    $email: String!
    $password: String!
  ) {
    createUser(data: { name: $name, email: $email, password: $password }) {
      id
      name
      email
    }
  }
`;

// ------------------SIGN-IN COMPONENT------------------

export default function SignUp() {
  // ----useForm Hook----

  const { inputs, handleChange, resetForm } = useForm({
    name: '',
    email: '',
    password: '',
  });

  // ----useMutation Hook----

  const [signUp, { data, loading, error }] = useMutation(SIGN_UP_MUTATION, {
    variables: inputs,
    // Refetches the Current User Data i.e. Cart Items...
    // refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  // ----Handling Submit----

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit the inputfields to the backend:
    const res = await signUp().catch(console.error);
    console.log(`res`, res);
    console.log({ data, loading, error });
    // TODO: MAKESHIFT
    // if (data?.authenticateUserWithPassword.sessionToken) {
    //   // set cookie
    //   // cookie.set('token', data.token, {expires: 2});
    //   Router.push('/');
    // }
    resetForm();
    // Push to the Product Page
    // Router.push({
    //   pathname: `/product/${res.data.createProduct.id}`,
    // });
    // ../pages/product/[id].js --> SLUG Page return's { query } PROPS
  };

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <ErrorMessage error={error} />

      {data?.createUser ? (
        <p>
          Welcome <span>{data?.createUser.name}</span> !! You can now <br />
          Sign Into Your Account
        </p>
      ) : (
        <h2>Create An Account</h2>
      )}

      <fieldset disabled={loading || !!data?.createUser.id} aria-busy={loading}>
        <label htmlFor="name">
          Username
          <input
            type="name"
            name="name"
            placeholder="Enter Your Name"
            autoComplete="name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>

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
        <button type="submit">Sign Up</button>
      </fieldset>
    </Form>
  );
}
