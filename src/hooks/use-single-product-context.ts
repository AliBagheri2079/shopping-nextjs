import { useContext } from 'react';

import {
  SingleProductActionContext,
  SingleProductValueContext,
} from '@/context';

export const useSingleProductValueContext = () => {
  const context = useContext(SingleProductValueContext);
  if (context === undefined) {
    throw new Error(
      'useSingleProductValueContext must be used within an ContextProvider',
    );
  }
  return context;
};

export const useSingleProductActionContext = () => {
  const context = useContext(SingleProductActionContext);
  if (context === undefined) {
    throw new Error(
      'useSingleProductActionContext must be used within an ContextProvider',
    );
  }
  return context;
};
