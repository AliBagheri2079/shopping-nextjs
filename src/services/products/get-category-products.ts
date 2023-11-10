import { URL } from '@/lib/utils';
import { ProductParams } from '@/types';

const baseUrl = URL.API.FAKE_STORE.PRODUCTS;

type Params = ProductParams & {
  category: string;
};

export const getCategoryProducts = async <T>({
  category,
  sort,
  limit,
}: Params): Promise<T[]> => {
  const response = await fetch(
    `${baseUrl}/category/${category}?limit=${limit}&sort=${sort}`,
    {
      method: 'GET',
      cache: 'no-store',
    },
  );
  const data = await response.json();
  return data;
};
