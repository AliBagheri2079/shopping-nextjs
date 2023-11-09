'use client';

import { createContext, Dispatch, FC, useReducer } from 'react';

import { initialAction, initialState } from './initial';
import { reducer } from './reducer';
import { Children, ProductsReducerAction, ProductsReducerState } from '@/types';

export const ProductsValueContext =
  createContext<ProductsReducerState>(initialState);
export const ProductsActionContext =
  createContext<Dispatch<ProductsReducerAction>>(initialAction);

export const ProductsProvider: FC<Children> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductsValueContext.Provider value={state}>
      <ProductsActionContext.Provider value={dispatch}>
        {children}
      </ProductsActionContext.Provider>
    </ProductsValueContext.Provider>
  );
};
