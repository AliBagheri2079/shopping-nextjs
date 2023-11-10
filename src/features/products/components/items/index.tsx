'use client';

import { SimpleGrid } from '@mantine/core';
import { Suspense, useEffect } from 'react';

import { ProductCard } from './card';
import { ProductPlaceholder } from './placeholder';
import { ErrorAlert, Loading } from '@/components';
import { useProductsActionContext, useProductsValueContext } from '@/hooks';
import { randomId } from '@/lib/utils';
import { getAllProducts } from '@/services';
import { ProductData } from '@/types';

export const ProductItems = () => {
  const { data, error, isLoading } = useProductsValueContext();
  const dispatch = useProductsActionContext();

  useEffect(() => {
    getAllProducts<ProductData>({ sort: 'asc' })
      .then(response =>
        dispatch({ type: 'SET_PRODUCT_DATA', payload: response }),
      )
      .catch(error => dispatch({ type: 'HANDLE_ERROR', payload: error }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const placeholders = Array.from({ length: 4 }, (_v, i) => i).map(() => {
    const id = randomId();
    return <ProductPlaceholder key={id} />;
  });

  const items = data?.map(item => {
    const id = randomId();
    return <ProductCard key={id} {...item} />;
  });

  return (
    <section>
      {error ? (
        <ErrorAlert name={error.name} message={error.message} />
      ) : (data?.length as number) > 0 ? (
        <SimpleGrid cols={{ base: 1, xs: 2, sm: 3, lg: 4 }}>
          <Suspense fallback={<Loading />}>
            {isLoading ? placeholders : items}
          </Suspense>
        </SimpleGrid>
      ) : (
        <ErrorAlert name='Not Found' message='Does`t exist item' />
      )}
    </section>
  );
};
