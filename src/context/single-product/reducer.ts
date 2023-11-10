import { SingleProductReducerAction, SingleProductReducerState } from '@/types';

type Reducer = (
  state: SingleProductReducerState,
  action: SingleProductReducerAction,
) => SingleProductReducerState;

export const reducer: Reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA': {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
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
