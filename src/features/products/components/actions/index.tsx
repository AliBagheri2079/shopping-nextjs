'use client';

import { Grid } from '@mantine/core';

import { ProductOrderAction } from './order';
import { ProductSearchAction } from './search';

export const ProductActions = () => (
  <section>
    <Grid
      gutter={{ base: 'xs', sm: 'sm', md: 'md' }}
      justify='space-between'
      grow
    >
      <Grid.Col span={{ base: 12, sm: 'auto', md: 8 }}>
        <ProductSearchAction />
      </Grid.Col>

      <Grid.Col span={{ base: 12, sm: 'auto', md: 4 }}>
        <ProductOrderAction />
      </Grid.Col>
    </Grid>
  </section>
);
