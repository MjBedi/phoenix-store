import Link from 'next/link';
import SignUp from '../components/SignUp';
import { FormWrapStyles, LinkWrapStyles } from './signin';

const signUpPage = () => (
  <FormWrapStyles>
    <SignUp />
    <LinkWrapStyles>
      <Link href="/signin">Already have an Account?</Link>
    </LinkWrapStyles>
  </FormWrapStyles>
);

export default signUpPage;
