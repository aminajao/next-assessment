import { request } from '@/utils/axios';

export const getAllProducts = async () => {
  try {
    const res = await request.get('/productBundles');
    return res;
  } catch (error) {
    const err = error?.response?.data?.message || error?.message;
    throw new Error(err);
  }
};

export const getOneProduct = async (slug) => {
  try {
    const res = await request.get(`/productBundles/${slug}`);
    return res;
  } catch (error) {
    const err = error?.response?.data?.message || error?.message;
    throw new Error(err);
  }
};

export const createSingleProduct = async (data) => {
  try {
    const res = await request.post('/productBundles', {
      body: data,
    });
    return res;
  } catch (error) {
    const err = error?.response?.data?.message || error?.message;
    throw new Error(err);
  }
};
