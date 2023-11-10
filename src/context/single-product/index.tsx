'use client';

import { createContext, Dispatch, FC, useReducer } from 'react';

import { initialAction, initialState } from './initial';
import { reducer } from './reducer';
import {
  Children,
  SingleProductReducerAction,
  SingleProductReducerState,
} from '@/types';

export const SingleProductValueContext =
  createContext<SingleProductReducerState>(initialState);
export const SingleProductActionContext =
  createContext<Dispatch<SingleProductReducerAction>>(initialAction);

export const SingleProductProvider: FC<Children> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SingleProductValueContext.Provider value={state}>
      <SingleProductActionContext.Provider value={dispatch}>
        {children}
      </SingleProductActionContext.Provider>
    </SingleProductValueContext.Provider>
  );
};
