import { createAsyncThunk } from '@reduxjs/toolkit';

import { URL } from '@/lib/utils';
import { ProductData, ProductParams } from '@/types';

const baseUrl = URL.API.FAKE_STORE.PRODUCTS;

export const getAllProducts = createAsyncThunk(
  'products/fetchAllProducts',
  async ({ sort, limit }: ProductParams): Promise<ProductData[]> => {
    const response = await fetch(`${baseUrl}?limit=${limit}&sort=${sort}`, {
      method: 'GET',
      cache: 'no-store',
    });
    const data = await response.json();
    return data;
  },
);
