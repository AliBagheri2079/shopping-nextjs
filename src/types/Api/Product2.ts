import { ProductData } from './Product';
import { ApiResponse } from './Response';

export type ProductsSliceState = ApiResponse<ProductData[]> & {
  clonedData?: ProductData[];
};
