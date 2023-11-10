import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { initialState } from './initial';
import { getAllProducts } from './thunks';
import { filterData } from '@/lib/utils';

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    filterProducts: (state, action: PayloadAction<string>) => {
      state.data = filterData({
        query: action.payload,
        data: state.clonedData ?? [],
        filterFn: (options, query) =>
          options.title.toLowerCase().includes(query.toLowerCase()) ||
          options.category.toLowerCase().includes(query.toLowerCase()),
      });
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllProducts.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = state.clonedData = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as Error;
      });
  },
});
