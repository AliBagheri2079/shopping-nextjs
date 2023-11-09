'use client';

import { notFound, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

import { SingeProductPlaceholder2, SingleProductItem2 } from './components';
import { ErrorAlert, Loading } from '@/components';
import {
  useAddSingleProductMutation,
  useGetSingleProductQuery,
  useRemoveSingleProductMutation,
  useUpdateSingleProductMutation,
} from '@/lib/redux';

export const SingleProduct2 = () => {
  const searchParams = useSearchParams();
  const isSearchExist = searchParams.has('id');
  const searchValue = searchParams.get('id');

  if (!isSearchExist || !searchValue) notFound();

  const {
    data: singleProduct,
    isLoading,
    isError,
  } = useGetSingleProductQuery(searchValue);
  // const [addSingleProduct] = useAddSingleProductMutation();
  // const [updateSingleProduct] = useUpdateSingleProductMutation();
  // const [removeSingleProduct] = useRemoveSingleProductMutation();
  const products = singleProduct?.data;

  return (
    <section>
      {isError ? (
        <ErrorAlert
          name='Something went wrong...'
          message='Failed to load single product data...'
        />
      ) : (
        <Suspense fallback={<Loading />}>
          {isLoading ? (
            <SingeProductPlaceholder2 />
          ) : (
            <SingleProductItem2 data={products} />
          )}
        </Suspense>
      )}
    </section>
  );
};
