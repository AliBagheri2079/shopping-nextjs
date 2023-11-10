import { ApiResponse } from './Response';

export type ProductDataRating = {
  rate: number;
  count: number;
};
export type ProductData = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ProductDataRating;
};

export type ProductParamsSort = 'desc' | 'asc';
export type ProductParams = {
  sort: ProductParamsSort;
  limit?: number;
};

export type ProductsReducerState = ApiResponse<ProductData[]> & {
  clonedData?: ProductData[];
};
export type ProductsReducerAction =
  | { type: 'SET_PRODUCT_DATA'; payload: ProductData[] }
  | { type: 'SET_CATEGORY_DATA'; payload: ProductData[] | null }
  | { type: 'SET_SEARCH_QUERY'; payload: string }
  | { type: 'SET_CURRENT_PAGE'; payload: number }
  | { type: 'HANDLE_ERROR'; payload: Error };

export type SingleProductReducerState = ApiResponse<ProductData>;
export type SingleProductReducerAction =
  | { type: 'SET_DATA'; payload: ProductData }
  | { type: 'ADD_ITEM'; payload: ProductData }
  | { type: 'UPDATE_ITEM'; payload: ProductData }
  | { type: 'DELETE_ITEM'; payload: number }
  | { type: 'HANDLE_ERROR'; payload: Error };

export type ShoppingListReducerState = Pick<ApiResponse<ProductData[]>, 'data'>;
export type ShoppingListReducerAction =
  | { type: 'ADD_ITEM'; payload: ProductData }
  | { type: 'UPDATE_ITEM'; payload: ProductData }
  | { type: 'DELETE_ITEM'; payload: number }
  | { type: 'REMOVE_ALL_ITEMS' };
