import { useContext } from 'react';

import { ProductsActionContext, ProductsValueContext } from '@/context';

export const useProductsValueContext = () => {
  const context = useContext(ProductsValueContext);
  if (context === undefined) {
    throw new Error(
      'useProductsValueContext must be used within an ContextProvider',
    );
  }
  return context;
};

export const useProductsActionContext = () => {
  const context = useContext(ProductsActionContext);
  if (context === undefined) {
    throw new Error(
      'useProductsActionContext must be used within an ContextProvider',
    );
  }
  return context;
};
