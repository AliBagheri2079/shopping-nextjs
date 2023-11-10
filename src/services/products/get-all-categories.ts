import { URL } from '@/lib/utils';

const baseUrl = URL.API.FAKE_STORE.PRODUCTS;

export const getAllCategories = async <T>(): Promise<T[]> => {
  const response = await fetch(`${baseUrl}/categories`, {
    method: 'GET',
  });
  const data = await response.json();
  return data;
};
