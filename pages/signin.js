import Link from 'next/link';
import styled from 'styled-components';
import SignIn from '../components/SignIn';

export const FormWrapStyles = styled.section`
  margin: 0 auto;
  max-width: 640px;
`;

export const LinkWrapStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem;
  white-space: nowrap;

  a {
    line-height: 2;
  }
`;

export default function signInPage() {
  return (
    <FormWrapStyles>
      <SignIn />
      <LinkWrapStyles>
        <Link href="/reset">Forgot Password</Link>
        <Link href="/signup">Create A New Account</Link>
      </LinkWrapStyles>
    </FormWrapStyles>
  );
}
