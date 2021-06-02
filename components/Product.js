import Link from 'next/link';
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';
import DeleteProduct from './DeleteProduct';
import AddToCart from './AddToCart';
import { useUser } from './User';

const Product = ({ product }) => {
  const me = useUser();

  return (
    <ItemStyles>
      <Link href={`/product/${product.id}`}>
        <img
          src={product?.photo?.image?.publicUrlTransformed}
          alt={product.name}
        />
      </Link>

      <div className="media">
        <Title>
          <Link href={`/product/${product.id}`}>{product.name}</Link>
        </Title>

        <PriceTag> {formatMoney(product.price)} </PriceTag>
        <p> {product.description} </p>
        <div className="buttonList">
          {me ? (
            <>
              <Link
                href={{
                  pathname: '/update',
                  query: { id: product.id },
                }}
              >
                <button type="button">Edit</button>
              </Link>
              <DeleteProduct id={product.id}>Delete</DeleteProduct>
            </>
          ) : null}
          <AddToCart id={product.id} />
        </div>
      </div>
    </ItemStyles>
  );
};

export default Product;
