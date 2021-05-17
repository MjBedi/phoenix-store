import UpdateProduct from '../components/UpdateProduct';

const update = ({ query }) => (
  // console.log(`query.id`, query.id);
  <UpdateProduct id={query.id} />
);
export default update;
