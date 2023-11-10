import { FC } from 'react';

import {
  ProductsProvider,
  ShoppingListProvider,
  SingleProductProvider,
} from '@/context';
import { Children } from '@/types';

const Provider: FC<Children> = ({ children }) => (
  <ProductsProvider>
    <SingleProductProvider>
      <ShoppingListProvider>{children}</ShoppingListProvider>
    </SingleProductProvider>
  </ProductsProvider>
);

export default Provider;
