'use client';

import { notFound, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

import {
  SingeProductPlaceholder3,
  SingeProductSimpleAction3,
  SingleProductItem3,
} from './components';
import { ErrorAlert, Loading } from '@/components';
import { useGetSingleProductQuery } from '@/lib/react-query';

export const SingleProduct3 = () => {
  const searchParams = useSearchParams();
  const isSearchExist = searchParams.has('id');
  const searchValue = searchParams.get('id');

  if (!isSearchExist || !searchValue) notFound();

  const {
    data: singleProduct,
    error,
    isError,
    isLoading,
    isSuccess,
  } = useGetSingleProductQuery({ id: searchValue });
  const product = singleProduct?.data;

  return (
    <section>
      {isError ? (
        <ErrorAlert name={error.name} message={error.message} />
      ) : (
        <Suspense fallback={<Loading />}>
          {isLoading ? (
            <SingeProductPlaceholder3 />
          ) : isSuccess ? (
            <>
              <SingeProductSimpleAction3 />
              <SingleProductItem3 data={product} />
            </>
          ) : null}
        </Suspense>
      )}
    </section>
  );
};
