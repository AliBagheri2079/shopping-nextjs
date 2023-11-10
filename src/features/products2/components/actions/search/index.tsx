'use client';

import { Autocomplete, CloseButton } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

import { filterProducts, useAppDispatch } from '@/lib/redux';
import { GLASS_MORPHISM } from '@/lib/utils';

export const ProductSearchAction = () => {
  const [query, setQuery] = useState('');
  const [result] = useDebouncedValue(query, 500, { leading: true });
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(filterProducts(result));
  }, [dispatch, result]);

  return (
    <Autocomplete
      variant='filled'
      placeholder='Pick value or enter anything'
      value={query}
      onChange={setQuery}
      leftSection={<IconSearch size={16} />}
      rightSection={
        <CloseButton
          variant='transparent'
          aria-label='Clear input'
          onClick={() => setQuery('')}
          style={{ display: query ? undefined : 'none' }}
        />
      }
      rightSectionPointerEvents='all'
      maxDropdownHeight={200}
      aria-label='Search on products'
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
