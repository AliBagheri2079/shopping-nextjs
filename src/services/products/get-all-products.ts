import { URL } from '@/lib/utils';
import { ProductParams } from '@/types';

const baseUrl = URL.API.FAKE_STORE.PRODUCTS;

export const getAllProducts = async <T>({
  sort,
  limit,
}: ProductParams): Promise<T[]> => {
  const response = await fetch(`${baseUrl}?limit=${limit}&sort=${sort}`, {
    method: 'GET',
    cache: 'no-store',
  });
  const data = await response.json();
  return data;
};
