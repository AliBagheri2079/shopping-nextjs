import { createAsyncThunk } from '@reduxjs/toolkit';

import { AppDispatch, RootState } from './types';

/**
 * ? A utility function to create a typed Async Thunk Actions.
 */
export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState;
  dispatch: AppDispatch;
  rejectValue: Error;
}>();
