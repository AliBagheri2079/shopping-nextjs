'use client';

import { createContext, Dispatch, FC, useReducer } from 'react';

import { initialAction, initialState } from './initial';
import { reducer } from './reducer';
import {
  Children,
  ShoppingListReducerAction,
  ShoppingListReducerState,
} from '@/types';

export const ShoppingListValueContext =
  createContext<ShoppingListReducerState>(initialState);
export const ShoppingListActionContext =
  createContext<Dispatch<ShoppingListReducerAction>>(initialAction);

export const ShoppingListProvider: FC<Children> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ShoppingListValueContext.Provider value={state}>
      <ShoppingListActionContext.Provider value={dispatch}>
        {children}
      </ShoppingListActionContext.Provider>
    </ShoppingListValueContext.Provider>
  );
};
