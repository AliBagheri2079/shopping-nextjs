import {
  productsReducer,
  singleProductReducer,
  singleProductReducerPath,
} from '../features';

export const rootReducer = {
  products: productsReducer,
  [singleProductReducerPath]: singleProductReducer,
};
