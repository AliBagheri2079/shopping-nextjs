import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ProductData } from '@/types';

export const singleProductApi = createApi({
  reducerPath: 'singleProductApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
  tagTypes: ['SingleProduct'],
  endpoints: builder => ({
    getSingleProduct: builder.query<{ data: ProductData }, string | number>({
      query: id => ({
        url: `product?id=${id}`,
        method: 'GET',
        next: {
          revalidate: 3600,
        },
      }),
      providesTags: ['SingleProduct'],
    }),
    addSingleProduct: builder.mutation<{ message: string }, ProductData>({
      query: newProduct => ({
        url: 'product',
        method: 'POST',
        body: newProduct,
        cache: 'no-cache',
      }),
      invalidatesTags: ['SingleProduct'],
    }),
    updateSingleProduct: builder.mutation<
      { message: string },
      { id: string | number; updatedProduct: ProductData }
    >({
      query: ({ id, updatedProduct }) => ({
        url: `product?id=${id}`,
        method: 'PUT',
        body: updatedProduct,
        cache: 'no-cache',
      }),
      invalidatesTags: ['SingleProduct'],
    }),
    removeSingleProduct: builder.mutation<{ message: string }, string | number>(
      {
        query: id => ({
          url: `product?id=${id}`,
          method: 'DELETE',
          cache: 'no-cache',
        }),
        invalidatesTags: ['SingleProduct'],
      },
    ),
  }),
});
