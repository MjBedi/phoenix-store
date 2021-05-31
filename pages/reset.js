import RequestReset from '../components/RequestReset';
import Reset from '../components/Reset';
import { FormWrapStyles } from './signin';

export default function ResetPage({ query }) {
  return (
    <FormWrapStyles>
      {/* ResetPage {query.token} */}
      {query.token ? <Reset token={query.token} /> : <RequestReset />}
    </FormWrapStyles>
  );
}
