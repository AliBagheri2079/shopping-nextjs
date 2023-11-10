'use client';

import { SimpleGrid } from '@mantine/core';
import { nanoid } from '@reduxjs/toolkit';
import { Suspense, useEffect } from 'react';

import { ProductCard } from './card';
import { ProductPlaceholder } from './placeholder';
import { ErrorAlert, Loading } from '@/components';
import {
  getAllProducts,
  selectProducts,
  useAppDispatch,
  useAppSelector,
} from '@/lib/redux';

export const ProductItems2 = () => {
  const dispatch = useAppDispatch();
  const { data, error, isLoading } = useAppSelector(selectProducts);

  useEffect(() => {
    dispatch(getAllProducts({ sort: 'asc' }));
  }, [dispatch]);

  const placeholders = Array.from({ length: 10 }, (_v, i) => i).map(() => {
    const id = nanoid();
    return <ProductPlaceholder key={id} />;
  });

  const items = data?.map(item => {
    const id = nanoid();
    return <ProductCard key={id} {...item} />;
  });

  return (
    <section>
      {error ? (
        <ErrorAlert name={error.name} message={error.message} />
      ) : isLoading || (data?.length as number) > 0 ? (
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
