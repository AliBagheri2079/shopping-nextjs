'use client';

import { notFound, useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';

import { SingeProductPlaceholder, SingleProductItem } from './components';
import { ErrorAlert, Loading } from '@/components';
import {
  useSingleProductActionContext,
  useSingleProductValueContext,
} from '@/hooks';
import { getSingleProduct } from '@/services';
import { ProductData } from '@/types';

export const SingleProduct = () => {
  const { error, isLoading } = useSingleProductValueContext();
  const dispatch = useSingleProductActionContext();
  const searchParams = useSearchParams();

  const isSearchExist = searchParams.has('id');
  const searchValue = searchParams.get('id');
  if (!isSearchExist || !searchValue) notFound();

  useEffect(() => {
    getSingleProduct<ProductData>(searchValue)
      .then(response => dispatch({ type: 'SET_DATA', payload: response }))
      .catch(error => dispatch({ type: 'HANDLE_ERROR', payload: error }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return (
    <section>
      {error ? (
        <ErrorAlert name={error.name} message={error.message} />
      ) : (
        <Suspense fallback={<Loading />}>
          {isLoading ? <SingeProductPlaceholder /> : <SingleProductItem />}
        </Suspense>
      )}
    </section>
  );
};
