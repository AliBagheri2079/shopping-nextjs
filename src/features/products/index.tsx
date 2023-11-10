import { Stack } from '@mantine/core';

import {
  ProductActions,
  ProductCarousel,
  ProductItems,
  ProductPagination,
} from './components';

export const Products = () => (
  <Stack justify='flex-start'>
    <ProductCarousel />
    <ProductActions />
    <ProductItems />
    <ProductPagination />
  </Stack>
);
