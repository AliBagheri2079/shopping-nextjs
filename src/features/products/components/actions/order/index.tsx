'use client';

import { Select } from '@mantine/core';
import { useEffect, useState } from 'react';

import { useProductsActionContext } from '@/hooks';
import { GLASS_MORPHISM } from '@/lib/utils';
import { getAllCategories, getCategoryProducts } from '@/services';
import { ProductData } from '@/types';

export const ProductOrderAction = () => {
  const [categories, setCategories] = useState<string[]>();
  const dispatch = useProductsActionContext();

  useEffect(() => {
    getAllCategories<string>().then(response => setCategories(response));
  }, []);

  const filterProducts = (category: string) =>
    getCategoryProducts<ProductData>({ category, sort: 'asc' })
      .then(response =>
        dispatch({
          type: 'SET_CATEGORY_DATA',
          payload: category ? response : null,
        }),
      )
      .catch(error => dispatch({ type: 'HANDLE_ERROR', payload: error }));

  return (
    <Select
      variant='filled'
      placeholder='Pick value'
      data={categories}
      onChange={filterProducts}
      searchable
      clearable
      nothingFoundMessage='Nothing found...'
      checkIconPosition='right'
      maxDropdownHeight={200}
      aria-label='Change products order'
      styles={{
        input: GLASS_MORPHISM,
        dropdown: {
          ...GLASS_MORPHISM,
          border: 'unset',
        },
      }}
    />
  );
};
