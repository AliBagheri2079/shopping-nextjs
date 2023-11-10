import { useContext } from 'react';

import { ShoppingListActionContext, ShoppingListValueContext } from '@/context';

export const useShoppingListValueContext = () => {
  const context = useContext(ShoppingListValueContext);
  if (context === undefined) {
    throw new Error(
      'useShoppingListValueContext must be used within an ContextProvider',
    );
  }
  return context;
};

export const useShoppingListActionContext = () => {
  const context = useContext(ShoppingListActionContext);
  if (context === undefined) {
    throw new Error(
      'useShoppingListActionContext must be used within an ContextProvider',
    );
  }
  return context;
};
