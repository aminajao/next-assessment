import Button from '@/components/Button';
import Link from 'next/link';
import { getOneProduct } from '@/services';

export const getServerSideProps = async ({ params }) => {
  const product = await getOneProduct(params.slug);
  return { props: { product } };
};

const ProductDetails = ({ product }) => {
  return (
    <div className="lg:mx-[20rem] md:mx-[10rem] mx-2 sm:mx-10 mt-[5rem]">
      <div className="mb-8 ">
        <Link href="/" className="underline text-[#4a4afbe8]">
          Back home
        </Link>
      </div>
      <div className="md:w-[500px]">
        <div className="p-2 w-[8rem] mb-4 h-[8rem] border rounded">
          <img src={product?.imageLocation} alt="" />
        </div>
        <div>
          <h1 className="text-4xl mb-3">{product?.name}</h1>
          <p>{product.description}</p>
          <p className="text-lg mt-2 ">
            Price: {product?.currencySymbol} {product?.price}{' '}
            {product?.currencyCode}
          </p>
          <div className="flex flex-col">
            <Button variant="secondary" label="ADD TO CART" />
            <Button label="BUY NOW" />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
