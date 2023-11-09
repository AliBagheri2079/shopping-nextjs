import { filterData, paginateData, SIZE } from '@/lib/utils';
import { ProductsReducerAction, ProductsReducerState } from '@/types';

type Reducer = (
  state: ProductsReducerState,
  action: ProductsReducerAction,
) => ProductsReducerState;

const perPage = SIZE.PRODUCTS_PER_PAGE;

export const reducer: Reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCT_DATA': {
      return {
        ...state,
        data: paginateData({
          data: structuredClone(action.payload),
          currentPage: 1,
          perPage,
        }),
        clonedData: action.payload,
        isLoading: false,
      };
    }
    case 'SET_CATEGORY_DATA': {
      return {
        ...state,
        data: action.payload ?? state.clonedData,
      };
    }
    case 'SET_SEARCH_QUERY': {
      return {
        ...state,
        data: filterData({
          query: action.payload,
          data: structuredClone(state.clonedData) ?? [],
          filterFn: (options, query) =>
            options.title.toLowerCase().includes(query.toLowerCase()) ||
            options.category.toLowerCase().includes(query.toLowerCase()),
        }),
      };
    }
    case 'SET_CURRENT_PAGE': {
      return {
        ...state,
        data: paginateData({
          data: structuredClone(state.clonedData) ?? [],
          currentPage: action.payload,
          perPage,
        }),
      };
    }
    case 'HANDLE_ERROR': {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};
