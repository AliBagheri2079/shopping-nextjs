import { ProductsSliceState } from '@/types';

export const initialState = {
  data: undefined,
  clonedData: undefined,
  error: null,
  isLoading: true,
} as ProductsSliceState;
