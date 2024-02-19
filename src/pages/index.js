import { ProductCard } from '@/components/ProductCart';
import { getAllProducts } from '@/services';
import Link from 'next/link';

export const getServerSideProps = async () => {
  try {
    const data = await getAllProducts();
    return { props: { data } };
  } catch (error) {
    return { props: { error: error.message } };
  }
};

export default function App({ data, error }) {
  return (
    <div className="p-5">
      <div className="flex justify-between mb-10 pt-4">
        <h1 className="text-green-800 text-4xl font-bold">Homepage</h1>
        <Link href="/product/create" className="underline text-[#4a4afbe8]">
          Create new
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {!error &&
          data?.map((item) => {
            return <ProductCard data={item} key={item.id} />;
          })}
      </div>
    </div>
  );
}
