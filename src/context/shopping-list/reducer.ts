import { ShoppingListReducerAction, ShoppingListReducerState } from '@/types';

type Reducer = (
  state: ShoppingListReducerState,
  action: ShoppingListReducerAction,
) => ShoppingListReducerState;

export const reducer: Reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      return {
        ...state,
        data: [...(state.data ?? []), action.payload],
      };
    }
    case 'UPDATE_ITEM': {
      if (state.data) {
        const itemIndex = state.data.findIndex(
          item => item.id === action.payload.id,
        );
        if (itemIndex !== -1) {
          state.data[itemIndex] = action.payload;
        }
      }
    }
    case 'DELETE_ITEM': {
      return {
        ...state,
        data: state.data?.filter(item => item.id !== action.payload),
      };
    }
    case 'REMOVE_ALL_ITEMS': {
      return {
        ...state,
        data: [],
      };
    }
    default: {
      return state;
    }
  }
};
