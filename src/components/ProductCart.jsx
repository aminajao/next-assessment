import Link from 'next/link';

export const ProductCard = ({ data }) => {
  return (
    <Link
      href={`/product/${data?.id}`}
      className="border p-5 rounded-sm hover:cursor-pointer"
      key={data?.id}
    >
      <div>
        <div className="flex">
          <div className="p-2 w-12 h-12 border rounded">
            <img src={data?.imageLocation} alt="" className="" />
          </div>
        </div>
        <div className="text-lg font-semibold mt-2">{data?.name}</div>
        <p className="text-sm mt-2 font-semibold">
          Price: {data?.currencySymbol} {data?.price}
        </p>
      </div>
      <div className="mt-4 flex"></div>
    </Link>
  );
};
