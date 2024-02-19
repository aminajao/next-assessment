import { useState } from 'react';
import Input from '@/components/Input';
import Link from 'next/link';
import Button from '@/components/Button';
import { createSingleProduct } from '@/services';

const CreateProduct = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: '10 Lives',
    description: '10 Lives product bundle.',
    price: 1,
    code: 'USD',
    symbol: '$',
    quantity: 10,
    url: 'https://dev-images-carry1st-products.s3.eu-west-2.amazonaws.com/74e517a3-0615-4019-bb08-cc697cf4e747.png',
    status: 'ACTIVE',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await createSingleProduct(data);
      console.log(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error, 'create');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="max-w-xl mx-auto py-4 px-2 md:max-w-4xl">
          <div className="mb-8">
            <Link href="/" className="underline text-[#4a4afbe8]">
              Back home
            </Link>
          </div>
          <h2 className="text-2xl font-bold">Create new product</h2>
          <p className="mt-2 text-lg text-gray-500">
            Create some awesome new products here
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="grid grid-cols-1 gap-6">
              <Input
                handleChange={handleChange}
                placeholder="Enter product name"
                type="text"
                label="Product name"
                name="name"
                value={data.name}
              />
              <Input
                handleChange={handleChange}
                placeholder="Enter product description"
                type="textarea"
                label="Product description"
                name="description"
                value={data.description}
              />
              <Input
                handleChange={handleChange}
                placeholder="Enter product price"
                type="number"
                label="Product price"
                name="price"
                value={data.price}
              />
              <Input
                handleChange={handleChange}
                placeholder="Enter currency code"
                type="text"
                label="Currency code"
                name="code"
                value={data.code}
              />
              <Input
                handleChange={handleChange}
                placeholder="Enter currency symbol"
                type="text"
                label="Currency symbol"
                name="symbol"
                value={data.symbol}
              />
              <Input
                handleChange={handleChange}
                placeholder="Enter product quantity"
                type="number"
                label="Product quantity"
                name="quantity"
                value={data.quantity}
              />
              <Input
                handleChange={handleChange}
                placeholder="Enter image location"
                type="text"
                label="Product image url"
                name="url"
                value={data.url}
              />
              <Button type="submit">{loading ? 'Loading...' : 'SUBMIT'}</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
